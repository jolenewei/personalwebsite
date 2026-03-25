import type { Express } from "express";
import fs from "fs";
import path from "path";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI!;
const TOKEN_PATH = path.join(process.cwd(), ".spotify-token.json");

function loadTokens(): { access_token: string; refresh_token: string; expires_at: number } | null {
  try {
    if (fs.existsSync(TOKEN_PATH)) {
      return JSON.parse(fs.readFileSync(TOKEN_PATH, "utf-8"));
    }
  } catch {}
  return null;
}

function saveTokens(data: { access_token: string; refresh_token: string; expires_at: number }) {
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(data, null, 2));
}

async function refreshAccessToken(): Promise<string | null> {
  const tokens = loadTokens();
  if (!tokens?.refresh_token) return null;

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: tokens.refresh_token,
    }),
  });

  if (!res.ok) return null;

  const data = await res.json() as any;
  const newTokens = {
    access_token: data.access_token,
    refresh_token: data.refresh_token || tokens.refresh_token,
    expires_at: Date.now() + data.expires_in * 1000,
  };
  saveTokens(newTokens);
  return newTokens.access_token;
}

async function getAccessToken(): Promise<string | null> {
  const tokens = loadTokens();
  if (!tokens) return null;

  if (Date.now() < tokens.expires_at - 60000) {
    return tokens.access_token;
  }

  return refreshAccessToken();
}

export function registerSpotifyRoutes(app: Express) {
  // Step 1: Redirect user to Spotify login
  app.get("/api/spotify/login", (_req, res) => {
    const scopes = "user-top-read user-read-recently-played";
    const url = `https://accounts.spotify.com/authorize?${new URLSearchParams({
      response_type: "code",
      client_id: CLIENT_ID,
      scope: scopes,
      redirect_uri: REDIRECT_URI,
    })}`;
    res.redirect(url);
  });

  // Step 2: Handle callback from Spotify
  app.get("/api/spotify/callback", async (req, res) => {
    const code = req.query.code as string;
    if (!code) {
      res.status(400).send("No code provided");
      return;
    }

    try {
      const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: REDIRECT_URI,
        }),
      });

      if (!tokenRes.ok) {
        const err = await tokenRes.text();
        res.status(400).send(`Token exchange failed: ${err}`);
        return;
      }

      const data = await tokenRes.json() as any;
      saveTokens({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_at: Date.now() + data.expires_in * 1000,
      });

      res.send("<h2>Spotify connected! You can close this tab and refresh your site.</h2>");
    } catch (err: any) {
      res.status(500).send(`Error: ${err.message}`);
    }
  });

  // Step 3: Get top tracks
  app.get("/api/spotify/top-tracks", async (_req, res) => {
    const token = await getAccessToken();
    if (!token) {
      res.json({ connected: false, tracks: [] });
      return;
    }

    try {
      const spotifyRes = await fetch(
        "https://api.spotify.com/v1/me/top/tracks?limit=6&time_range=short_term",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (!spotifyRes.ok) {
        // Try medium_term if short_term has no data
        const fallbackRes = await fetch(
          "https://api.spotify.com/v1/me/top/tracks?limit=6&time_range=medium_term",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (!fallbackRes.ok) {
          res.json({ connected: true, tracks: [] });
          return;
        }
        const fallbackData = await fallbackRes.json() as any;
        res.json({
          connected: true,
          tracks: formatTracks(fallbackData.items),
        });
        return;
      }

      const data = await spotifyRes.json() as any;
      res.json({
        connected: true,
        tracks: formatTracks(data.items),
      });
    } catch {
      res.json({ connected: true, tracks: [] });
    }
  });

  // Check connection status
  app.get("/api/spotify/status", async (_req, res) => {
    const token = await getAccessToken();
    res.json({ connected: !!token });
  });
}

function formatTracks(items: any[]): any[] {
  if (!items) return [];
  return items.map((track: any) => ({
    title: track.name,
    artist: track.artists?.map((a: any) => a.name).join(", ") || "Unknown",
    album: track.album?.name || "",
    albumArt: track.album?.images?.[1]?.url || track.album?.images?.[0]?.url || "",
    previewUrl: track.preview_url || null,
    spotifyUrl: track.external_urls?.spotify || "",
    duration: track.duration_ms,
  }));
}
