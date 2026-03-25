import { useState } from "react";
import { ExternalLink } from "lucide-react";

type Track = {
  title: string;
  artist: string;
  album: string;
  duration: string;
  spotifyUrl: string;
};

const tracks: Track[] = [
  {
    title: "Stay The Night (ft. Hayley Williams)",
    artist: "Zedd, Hayley Williams",
    album: "Clarity (Deluxe)",
    duration: "3:38",
    spotifyUrl: "https://open.spotify.com/track/4lsEEiezNCMagQLDkZYONn",
  },
  {
    title: "Call You Mine",
    artist: "The Chainsmokers, Bebe Rexha",
    album: "World War Joy",
    duration: "3:18",
    spotifyUrl: "https://open.spotify.com/track/3cjEqqelV9zf4BYTa7IjOY",
  },
  {
    title: "Fractures",
    artist: "Illenium",
    album: "Awake",
    duration: "4:05",
    spotifyUrl: "https://open.spotify.com/track/0VoRO6GhJlqOWKmOJQTmRy",
  },
  {
    title: "Affection",
    artist: "BETWEEN FRIENDS",
    album: "Affection",
    duration: "3:05",
    spotifyUrl: "https://open.spotify.com/track/5GUJsLHTbRFMkzF6UMy3hP",
  },
  {
    title: "Folded",
    artist: "Rini, Aahin",
    album: "Folded",
    duration: "3:17",
    spotifyUrl: "https://open.spotify.com/track/4qVRkPnJrMvRPmRkJBCAP6",
  },
  {
    title: "Good Things Fall Apart (with Jon Bellion)",
    artist: "ILLENIUM, Jon Bellion",
    album: "ASCEND",
    duration: "3:37",
    spotifyUrl: "https://open.spotify.com/track/3LxG9HkMMFP0MfNSYAkFsU",
  },
];

const VinylPlayer = () => {
  const [hovered, setHovered] = useState<number | null>(null);

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
        <div className="space-y-1">
          {tracks.map((track, i) => (
            <a
              key={i}
              href={track.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`track-item ${hovered === i ? "playing" : ""}`}
            >
              <span className="text-xs text-muted-foreground w-5 text-right font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>

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
                <span className="text-[10px] text-muted-foreground/40 font-mono">
                  {track.duration}
                </span>
                <ExternalLink className="w-3 h-3 text-muted-foreground/30" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VinylPlayer;
