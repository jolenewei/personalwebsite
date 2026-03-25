import { useState, useEffect } from "react";
import { ExternalLink, ImageIcon } from "lucide-react";

type Track = {
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  previewUrl: string | null;
  spotifyUrl: string;
  duration: number;
};

const placeholderTracks: Track[] = Array(6).fill({
  title: "song title", artist: "artist name", album: "", albumArt: "", previewUrl: null, spotifyUrl: "", duration: 0,
});

function formatDuration(ms: number) {
  const min = Math.floor(ms / 60000);
  const sec = Math.floor((ms % 60000) / 1000);
  return `${min}:${sec.toString().padStart(2, "0")}`;
}

const VinylPlayer = () => {
  const [tracks, setTracks] = useState<Track[]>(placeholderTracks);
  const [connected, setConnected] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/spotify/top-tracks")
      .then((r) => r.json())
      .then((data) => {
        if (data.connected && data.tracks.length > 0) {
          setTracks(data.tracks);
          setConnected(true);
        } else if (data.connected) {
          setConnected(true);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-14">
      {/* Vinyl - spins continuously */}
      <div className="shrink-0 flex flex-col items-center">
        <div className="vinyl-container">
          <div className="vinyl spinning">
            {[36, 42, 48, 54, 60, 66, 72, 78, 84, 90].map((size, i) => (
              <div
                key={i}
                className="vinyl-groove"
                style={{ width: `${size}%`, height: `${size}%` }}
              />
            ))}
            <div className="vinyl-shine" />
          </div>
        </div>
      </div>

      {/* Track list */}
      <div className="flex-1 w-full">
        {!connected && (
          <a
            href="/api/spotify/login"
            className="inline-flex items-center gap-2 bg-[#1DB954] text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-[#1ed760] transition-all mb-4"
          >
            connect spotify
          </a>
        )}

        <div className="space-y-1">
          {tracks.map((track, i) => (
            <a
              key={i}
              href={track.spotifyUrl || undefined}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`track-item ${hovered === i ? "playing" : ""} ${!track.spotifyUrl ? "pointer-events-none" : ""}`}
            >
              <span className="text-xs text-muted-foreground w-5 text-right font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Album art */}
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 overflow-hidden">
                {track.albumArt ? (
                  <img src={track.albumArt} alt={track.album} className="w-full h-full object-cover" />
                ) : (
                  <ImageIcon className="w-4 h-4 opacity-20" />
                )}
              </div>

              {/* Track info */}
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${hovered === i ? "text-white" : ""}`}>
                  {track.title}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {track.artist}
                </p>
              </div>

              {/* Duration & link */}
              <div className="hidden sm:flex items-center gap-2">
                {track.duration > 0 && (
                  <span className="text-[10px] text-muted-foreground/40 font-mono">
                    {formatDuration(track.duration)}
                  </span>
                )}
                {track.spotifyUrl && (
                  <ExternalLink className="w-3 h-3 text-muted-foreground/30" />
                )}
              </div>
            </a>
          ))}
        </div>

        {!connected && (
          <p className="text-[10px] text-muted-foreground/30 mt-4 italic font-light">
            connect spotify to see your top tracks
          </p>
        )}
      </div>
    </div>
  );
};

export default VinylPlayer;
