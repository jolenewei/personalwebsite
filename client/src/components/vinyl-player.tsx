import { useState } from "react";
import { Play, Pause, ImageIcon } from "lucide-react";

type Track = {
  title: string;
  artist: string;
  genre: string;
  year: string;
};

const tracks: Track[] = [
  { title: "song title", artist: "artist name", genre: "Pop", year: "2024" },
  { title: "song title", artist: "artist name", genre: "R&B", year: "2023" },
  { title: "song title", artist: "artist name", genre: "Indie", year: "2024" },
  { title: "song title", artist: "artist name", genre: "Pop", year: "2025" },
  { title: "song title", artist: "artist name", genre: "Alt", year: "2023" },
  { title: "song title", artist: "artist name", genre: "Hip-Hop", year: "2024" },
];

const VinylPlayer = () => {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14">
      {/* Vinyl */}
      <div className="shrink-0 flex flex-col items-center">
        <div className="vinyl-container">
          <div className={`vinyl ${playing !== null ? "spinning" : ""}`}>
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
        <p className="text-xs text-muted-foreground/50 mt-4 font-mono text-center">
          {playing !== null ? "now playing..." : "click a track to play"}
        </p>
      </div>

      {/* Track list */}
      <div className="flex-1 w-full">
        <div className="space-y-1">
          {tracks.map((track, i) => (
            <div
              key={i}
              onClick={() => setPlaying(playing === i ? null : i)}
              className={`track-item ${playing === i ? "playing" : ""}`}
            >
              <span className="text-xs text-muted-foreground w-5 text-right font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                {playing === i ? (
                  <Pause className="w-3 h-3" />
                ) : (
                  <Play className="w-3 h-3 ml-0.5" />
                )}
              </div>

              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <ImageIcon className="w-4 h-4 opacity-20" />
              </div>

              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${playing === i ? "text-white" : ""}`}>
                  {track.title}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {track.artist}
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-white/5 border border-white/8 rounded-full text-[10px] text-muted-foreground">
                  {track.genre}
                </span>
                <span className="text-[10px] text-muted-foreground/40 font-mono">
                  {track.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[10px] text-muted-foreground/30 mt-4 font-mono">
          * replace with your actual favorite songs
        </p>
      </div>
    </div>
  );
};

export default VinylPlayer;
