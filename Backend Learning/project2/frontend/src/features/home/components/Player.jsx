import React, { useRef, useState, useEffect, useContext } from "react";
import { songContext } from "../song.context";
import "./Player.css";

const SPEED_OPTIONS = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

function formatTime(sec) {
  if (isNaN(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const Player = () => {
  const { song } = useContext(songContext);

  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const animationRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // When song changes, reset player
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [song]);

  // Sync speed with audio element
  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = speed;
  }, [speed]);

  // Sync volume/mute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Animation loop for progress bar
  const startProgressLoop = () => {
    animationRef.current = requestAnimationFrame(updateProgress);
  };

  const updateProgress = () => {
    if (audioRef.current && !isDragging) {
      setCurrentTime(audioRef.current.currentTime);
    }
    animationRef.current = requestAnimationFrame(updateProgress);
  };

  const stopProgressLoop = () => {
    cancelAnimationFrame(animationRef.current);
  };

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      stopProgressLoop();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      startProgressLoop();
      setIsPlaying(true);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    stopProgressLoop();
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const bar = progressRef.current;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    const newTime = ratio * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const skip = (seconds) => {
    if (!audioRef.current) return;
    const newTime = Math.min(
      Math.max(audioRef.current.currentTime + seconds, 0),
      duration
    );
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    setIsMuted(val === 0);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;
  const volumePercent = isMuted ? 0 : volume * 100;

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return "🔇";
    if (volume < 0.4) return "🔈";
    if (volume < 0.7) return "🔉";
    return "🔊";
  };

  if (!song) {
    return (
      <div className="player player--empty">
        <div className="player__idle">
          <div className="player__idle-icon">🎵</div>
          <p className="player__idle-text">No song loaded</p>
          <p className="player__idle-sub">Detect your mood to get a recommendation</p>
        </div>
      </div>
    );
  }

  return (
    <div className="player">
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={song?.url}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      {/* Album Art */}
      <div className="player__art">
        <div className={`player__art-disc ${isPlaying ? "player__art-disc--spinning" : ""}`}>
          {song?.posterUrl ? (
            <img src={song.posterUrl} alt={song.title} className="player__art-img" />
          ) : (
            <div className="player__art-placeholder">🎵</div>
          )}
        </div>
        <div className="player__art-glow" />
      </div>

      {/* Song Info */}
      <div className="player__info">
        <h3 className="player__title" title={song?.title}>
          {song?.title || "Unknown Title"}
        </h3>
        <p className="player__artist">{song?.artist || "Unknown Artist"}</p>
        {song?.mood && (
          <span className="player__mood-badge">{song.mood}</span>
        )}
      </div>

      {/* Progress Bar */}
      <div className="player__progress-section">
        <span className="player__time">{formatTime(currentTime)}</span>
        <div
          className="player__progress-bar"
          ref={progressRef}
          onClick={handleSeek}
        >
          <div className="player__progress-track">
            <div
              className="player__progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
            <div
              className="player__progress-thumb"
              style={{ left: `${progressPercent}%` }}
            />
          </div>
        </div>
        <span className="player__time">{formatTime(duration)}</span>
      </div>

      {/* Main Controls */}
      <div className="player__controls">
        {/* Backward 5s */}
        <button
          className="player__ctrl-btn player__ctrl-btn--skip"
          onClick={() => skip(-5)}
          title="Backward 5s"
        >
          <span className="player__skip-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
            </svg>
            <span className="player__skip-label">5</span>
          </span>
        </button>

        {/* Play / Pause */}
        <button
          className="player__ctrl-btn player__ctrl-btn--play"
          onClick={handlePlayPause}
          title={isPlaying ? "Pause" : "Play"}
          id="player-play-pause-btn"
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Forward 5s */}
        <button
          className="player__ctrl-btn player__ctrl-btn--skip"
          onClick={() => skip(5)}
          title="Forward 5s"
        >
          <span className="player__skip-icon">
            <span className="player__skip-label">5</span>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z"/>
            </svg>
          </span>
        </button>
      </div>

      {/* Volume + Speed Row */}
      <div className="player__secondary">
        {/* Volume */}
        <div className="player__volume">
          <button
            className="player__icon-btn"
            onClick={toggleMute}
            title={isMuted ? "Unmute" : "Mute"}
          >
            {getVolumeIcon()}
          </button>
          <div className="player__slider-wrap">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="player__slider player__slider--volume"
              style={{ "--fill": `${volumePercent}%` }}
            />
          </div>
        </div>

        {/* Playback Speed */}
        <div className="player__speed">
          <button
            className="player__icon-btn player__speed-btn"
            onClick={() => setShowSpeedMenu((p) => !p)}
            title="Playback speed"
            id="player-speed-btn"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{marginRight:"4px"}}>
              <path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"/>
            </svg>
            <span className="player__speed-value">{speed}x</span>
          </button>

          {showSpeedMenu && (
            <div className="player__speed-menu" id="player-speed-menu">
              {SPEED_OPTIONS.map((s) => (
                <button
                  key={s}
                  className={`player__speed-option ${speed === s ? "player__speed-option--active" : ""}`}
                  onClick={() => {
                    setSpeed(s);
                    setShowSpeedMenu(false);
                  }}
                >
                  {s}x {speed === s && "✓"}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;