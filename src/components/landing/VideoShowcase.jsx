import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Zap,
  Wind,
  Gauge,
  Volume1,
  Sparkles,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  RotateCcw,
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";

const VIDEO_PLAYLIST = [
  {
    id: "feature-showcase",
    title: "Kinetic Aeroleaf & Urban Motion",
    subtitle: "Capturing light urban breezes (2.5 - 12 m/s)",
    src: "/videos/202609112021.mp4",
    poster: "/images/hero-wind-tree.jpg",
    duration: "0:22",
    tags: ["Omni-directional", "<28 dB Silent", "360° Flow", "Zero Vibration"],
    description:
      "The Aeris Wind Tree converts multi-directional urban micro-currents into continuous, silent electrical power with zero mechanical vibration.",
    highlights: [
      {
        icon: Zap,
        title: "Continuous Low-Wind Startup",
        desc: "Rotates at winds as gentle as 2.0 m/s (4.4 mph) for 300+ days/year output",
      },
      {
        icon: ShieldCheck,
        title: "Safe For Urban Wildlife",
        desc: "Vertical motion is completely visible & safe for birds and pollinators",
      },
      {
        icon: Cpu,
        title: "Edge IoT Intelligence",
        desc: "Sub-second telemetry connected to the Aeris remote monitoring dashboard",
      },
    ],
  },
  {
    id: "tech-overview",
    title: "Aerodynamic Architecture in Action",
    subtitle: "Modular engineering for civic & commercial spaces",
    src: "/videos/202609102204.mp4",
    poster: "/images/windtree_campus.jpg",
    duration: "0:20",
    tags: ["Class 3 Storm Resistant", "Direct Drive", "Grid-Tied MPPT", "Modular Scale"],
    description:
      "Each individual Aeroleaf turbine operates independently, maximizing overall energy yield even in turbulent, low-altitude city environments.",
    highlights: [
      {
        icon: Wind,
        title: "Omni-Directional Aerodynamics",
        desc: "Captures 360° turbulence from ground micro-drafts between buildings",
      },
      {
        icon: ShieldCheck,
        title: "Class 3 Storm Survival",
        desc: "High-tensile marine steel chassis engineered to withstand 180 km/h gusts",
      },
      {
        icon: Zap,
        title: "Direct-Drive Synchronous Core",
        desc: "No mechanical gearboxes for virtually maintenance-free 25+ year lifespan",
      },
    ],
  },
];

export function VideoShowcase() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [totalDuration, setTotalDuration] = useState("0:00");
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHud, setShowHud] = useState(true);
  const [userInteracting, setUserInteracting] = useState(true);

  // Dynamic live simulated telemetry
  const [rpmValue, setRpmValue] = useState(148);
  const [outputWatts, setOutputWatts] = useState(3240);
  const [windSpeed, setWindSpeed] = useState(6.8);

  const videoRef = useRef(null);
  const frameBoxRef = useRef(null);
  const idleTimerRef = useRef(null);

  const activeVideo = VIDEO_PLAYLIST[activeVideoIndex];

  // Telemetry fluctuation effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setRpmValue((prev) =>
          Math.min(220, Math.max(95, prev + Math.floor(Math.random() * 9) - 4))
        );
        setOutputWatts((prev) =>
          Math.min(4800, Math.max(1800, prev + Math.floor(Math.random() * 80) - 40))
        );
        setWindSpeed((prev) =>
          parseFloat((Math.min(9.5, Math.max(4.2, prev + (Math.random() * 0.4 - 0.2)))).toFixed(1))
        );
      }
    }, 1400);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Handle video source switch and playback speed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
      if (isPlaying) {
        videoRef.current.play().catch(() => setIsPlaying(false));
      } else {
        videoRef.current.pause();
      }
    }
  }, [activeVideoIndex, playbackSpeed]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Auto-hide controls when idle
  const handleMouseMove = () => {
    setUserInteracting(true);
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    if (isPlaying) {
      idleTimerRef.current = setTimeout(() => {
        setUserInteracting(false);
      }, 3500);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      setUserInteracting(true);
    } else {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);

    const curMins = Math.floor(current / 60);
    const curSecs = Math.floor(current % 60).toString().padStart(2, "0");
    setCurrentTime(`${curMins}:${curSecs}`);

    if (duration && !isNaN(duration)) {
      const durMins = Math.floor(duration / 60);
      const durSecs = Math.floor(duration % 60).toString().padStart(2, "0");
      setTotalDuration(`${durMins}:${durSecs}`);
    }
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickPos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const newTime = clickPos * (videoRef.current.duration || 1);
    videoRef.current.currentTime = newTime;
    setProgress(clickPos * 100);
  };

  const toggleFullScreen = () => {
    const container = frameBoxRef.current || videoRef.current;
    if (!container) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (container.requestFullscreen) {
      container.requestFullscreen();
    }
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  const switchNextVideo = () => {
    const nextIdx = (activeVideoIndex + 1) % VIDEO_PLAYLIST.length;
    setActiveVideoIndex(nextIdx);
    setIsPlaying(true);
  };

  return (
    <div className="video-showcase-container">
      {/* Header with Segmented Switcher */}
      <div className="video-showcase-header">
        <div className="video-header-copy">
          <span className="eyebrow">
            <Sparkles size={13} style={{ marginRight: 6, verticalAlign: "middle" }} />
            Live Motion Demonstration
          </span>
          <h2>See the Wind Tree in action.</h2>
          <p>
            Watch natural biomimetic motion transform gentle urban air turbulence into clean,
            whisper-quiet electrical power.
          </p>
        </div>

        <div className="video-selector-tabs" role="tablist">
          {VIDEO_PLAYLIST.map((vid, idx) => (
            <button
              key={vid.id}
              type="button"
              role="tab"
              aria-selected={idx === activeVideoIndex}
              className={`video-tab-button ${idx === activeVideoIndex ? "active" : ""}`}
              onClick={() => {
                setActiveVideoIndex(idx);
                setIsPlaying(true);
              }}
            >
              <span className="tab-index">0{idx + 1}</span>
              <span className="tab-title">{vid.title.split("&")[0].trim()}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Video Player Wrapper Grid */}
      <div className="video-player-wrapper">
        {/* Left Column: Video Frame Box */}
        <div
          ref={frameBoxRef}
          className={`video-frame-box ${!userInteracting && isPlaying ? "controls-hidden" : ""}`}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => isPlaying && setUserInteracting(false)}
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            key={activeVideo.src}
            src={activeVideo.src}
            poster={activeVideo.poster}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            className="main-video-player"
          />

          {/* Real-time Telemetry HUD Overlay */}
          {showHud && (
            <div className="video-hud-overlay" onClick={(e) => e.stopPropagation()}>
              <div className="hud-badge live-pulse">
                <span className="pulse-ring" />
                <span>LIVE TELEMETRY</span>
              </div>

              <div className="hud-stats-cluster">
                <div className="hud-stat-item">
                  <span className="hud-stat-label">
                    <Zap size={11} className="hud-icon" />
                    Instant Power
                  </span>
                  <span className="hud-stat-val">
                    {(outputWatts / 1000).toFixed(2)} <small>kW</small>
                  </span>
                </div>
                <div className="hud-stat-item">
                  <span className="hud-stat-label">
                    <Gauge size={11} className="hud-icon" />
                    Rotor RPM
                  </span>
                  <span className="hud-stat-val">
                    {rpmValue} <small>RPM</small>
                  </span>
                </div>
                <div className="hud-stat-item">
                  <span className="hud-stat-label">
                    <Volume1 size={11} className="hud-icon" />
                    Noise Level
                  </span>
                  <span className="hud-stat-val">
                    26.4 <small>dB(A)</small>
                  </span>
                </div>
                <div className="hud-stat-item">
                  <span className="hud-stat-label">
                    <Wind size={11} className="hud-icon" />
                    Wind Speed
                  </span>
                  <span className="hud-stat-val">
                    {windSpeed} <small>m/s</small>
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Big Play Overlay Button when Paused */}
          {!isPlaying && (
            <div className="big-play-overlay-wrapper">
              <button
                type="button"
                className="big-play-overlay-button"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                aria-label="Play video"
              >
                <Play size={32} fill="currentColor" />
              </button>
            </div>
          )}

          {/* Custom Video Controls Bar */}
          <div
            className="custom-video-controls"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Timeline Progress Scrubber */}
            <div
              className="video-timeline-bar"
              onClick={handleSeek}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              title="Seek timeline"
            >
              <div className="timeline-progress" style={{ width: `${progress}%` }}>
                <span className="timeline-thumb" />
              </div>
            </div>

            <div className="controls-actions-row">
              <div className="controls-left">
                <button
                  type="button"
                  className="ctrl-btn play-btn"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause" : "Play"}
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
                </button>

                <button
                  type="button"
                  className="ctrl-btn restart-btn"
                  onClick={restartVideo}
                  aria-label="Restart video"
                  title="Restart"
                >
                  <RotateCcw size={16} />
                </button>

                <button
                  type="button"
                  className="ctrl-btn mute-btn"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>

                <span className="time-display">
                  {currentTime} <small>/</small> {totalDuration || activeVideo.duration}
                </span>
              </div>

              <div className="controls-right">
                {/* HUD Toggle */}
                <button
                  type="button"
                  className={`ctrl-btn hud-toggle-btn ${showHud ? "active" : ""}`}
                  onClick={() => setShowHud(!showHud)}
                  title={showHud ? "Hide HUD telemetry" : "Show HUD telemetry"}
                  aria-label="Toggle HUD"
                >
                  {showHud ? <Eye size={16} /> : <EyeOff size={16} />}
                </button>

                {/* Speed Selector */}
                <div className="speed-selector">
                  {[1, 1.5, 2].map((spd) => (
                    <button
                      key={spd}
                      type="button"
                      className={`speed-btn ${playbackSpeed === spd ? "active" : ""}`}
                      onClick={() => setPlaybackSpeed(spd)}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>

                {/* Fullscreen Button */}
                <button
                  type="button"
                  className="ctrl-btn fullscreen-btn"
                  onClick={toggleFullScreen}
                  aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                >
                  {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Video Detail Card */}
        <div className="video-detail-card">
          <div className="video-detail-top">
            <div className="video-detail-badge-row">
              <span className="eyebrow">
                <Sparkles size={11} style={{ marginRight: 4, verticalAlign: "middle" }} />
                Clip 0{activeVideoIndex + 1} of 0{VIDEO_PLAYLIST.length}
              </span>
              <span className="video-duration-pill">{activeVideo.duration} HD</span>
            </div>

            <h3>{activeVideo.title}</h3>
            <p>{activeVideo.description}</p>

            <div className="video-tag-list">
              {activeVideo.tags.map((tag) => (
                <span key={tag} className="video-pill-tag">
                  ✦ {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="video-feature-highlights">
            {activeVideo.highlights.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={idx} className="highlight-item">
                  <div className="hl-icon">
                    <ItemIcon size={18} color="#2d6a4d" />
                  </div>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="video-card-footer">
            <button
              type="button"
              className="secondary-button next-clip-btn"
              onClick={switchNextVideo}
            >
              Switch to Next Demonstration <ArrowRight size={15} style={{ marginLeft: 6 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
