import { useState, useCallback, useEffect } from 'react';
import { showSections, SHOW_TITLE, SHOW_SUBTITLE } from './data/showData';
import type { ShowSection } from './data/showData';
import { useAudioManager } from './hooks/useAudioManager';
import AudioPanel from './components/AudioPanel';
import {
  Mic2, Music, Zap, ChevronRight, ChevronLeft,
  Play, Square, Timer, Activity, Headphones,
  Maximize2, Minimize2, Sparkles, Volume2,
} from 'lucide-react';

function App() {
  const [isShowLive, setIsShowLive] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const {
    masterTrack, sectionTimestamps, isPlaying, currentTime, duration,
    volume, currentSectionIndex, loadMasterTrack, removeMasterTrack,
    play, pause, stop, seekTo, seekToSection, updateTimestamp,
    togglePlayPause, setVolume,
  } = useAudioManager(showSections.length);

  const [manualSectionIndex, setManualSectionIndex] = useState<number | null>(null);
  const effectiveSectionIndex = manualSectionIndex ?? currentSectionIndex;
  const currentSection: ShowSection = showSections[effectiveSectionIndex];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isShowLive) {
      interval = setInterval(() => setElapsedTime(prev => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isShowLive]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const estimatedDuration = duration > 0 ? duration : 22 * 60;
  const showProgress = Math.min((elapsedTime / estimatedDuration) * 100, 100);

  const goToSection = useCallback((index: number) => {
    if (index >= 0 && index < showSections.length) {
      setManualSectionIndex(index);
      if (masterTrack) seekToSection(index);
    }
  }, [masterTrack, seekToSection]);

  const nextSection = useCallback(() => goToSection(effectiveSectionIndex + 1), [effectiveSectionIndex, goToSection]);
  const prevSection = useCallback(() => goToSection(effectiveSectionIndex - 1), [effectiveSectionIndex, goToSection]);

  const toggleShow = useCallback(() => {
    if (isShowLive) { setIsShowLive(false); pause(); }
    else { setIsShowLive(true); setElapsedTime(0); setManualSectionIndex(null); if (masterTrack) play(); }
  }, [isShowLive, pause, play, masterTrack]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) { document.documentElement.requestFullscreen(); setIsFullscreen(true); }
    else { document.exitFullscreen(); setIsFullscreen(false); }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); nextSection(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prevSection(); }
      else if (e.key === ' ') { e.preventDefault(); if (masterTrack) togglePlayPause(); }
      else if (e.key === 'f') { toggleFullscreen(); }
      else if (e.key === 'Escape' && isPlaying) { pause(); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSection, prevSection, toggleFullscreen, isPlaying, pause, masterTrack, togglePlayPause]);

  useEffect(() => {
    if (isPlaying && manualSectionIndex !== null) {
      const sorted = [...sectionTimestamps].sort((a, b) => a.time - b.time);
      let computed = 0;
      for (let i = 0; i < sorted.length; i++) {
        if (currentTime >= sorted[i].time) computed = sorted[i].sectionIndex;
      }
      if (computed === manualSectionIndex) setManualSectionIndex(null);
    }
  }, [currentTime, sectionTimestamps, isPlaying, manualSectionIndex]);

  const getLineStyle = (style: string) => {
    switch (style) {
      case 'dialogue': return 'dialogue-text text-white';
      case 'action': return 'action-text text-zinc-400';
      case 'music': return 'music-text text-pink-400';
      case 'note': return 'note-text text-amber-400';
      default: return 'teleprompter-text text-zinc-300';
    }
  };

  const getSpeakerColor = (speaker: string) => {
    switch (speaker) {
      case 'MR CHAPS': return 'text-pink-400';
      case 'STAGE': return 'text-zinc-500';
      case 'NOTE': return 'text-amber-500';
      default: return 'text-zinc-400';
    }
  };

  const getSpeakerIcon = (speaker: string) => {
    switch (speaker) {
      case 'MR CHAPS': return <Mic2 className="w-4 h-4" />;
      case 'STAGE': return <Sparkles className="w-4 h-4" />;
      case 'NOTE': return <Volume2 className="w-4 h-4" />;
      default: return <Music className="w-4 h-4" />;
    }
  };

  return (
    <div className="h-screen w-screen bg-zinc-950 flex flex-col overflow-hidden">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800 shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
              <Mic2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-white leading-tight">{SHOW_TITLE}</h1>
              <p className="text-[10px] text-zinc-500 leading-tight">{SHOW_SUBTITLE}</p>
            </div>
          </div>
          {isPlaying && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="text-[10px] font-bold text-pink-400 tracking-wider">PLAYING</span>
            </div>
          )}
          {masterTrack && !isPlaying && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <Music className="w-3 h-3 text-emerald-400" />
              <span className="text-[10px] font-bold text-emerald-400 tracking-wider">TRACK LOADED</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800">
            <Activity className="w-4 h-4 text-pink-400" />
            <span className="text-xs text-zinc-500">BPM</span>
            <span className="ml-2 text-lg font-bold text-pink-400">{currentSection.bpm}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800">
            <Timer className="w-4 h-4 text-zinc-400" />
            <span className="text-lg font-mono font-bold text-zinc-300">{formatTime(elapsedTime)}</span>
          </div>
          <button onClick={toggleShow} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${isShowLive ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'}`}>
            {isShowLive ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isShowLive ? 'END SHOW' : 'START SHOW'}
          </button>
          <button onClick={toggleFullscreen} className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all">
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="w-full h-1 bg-zinc-800 shrink-0 relative">
        {masterTrack && sectionTimestamps.map(ts => (
          <div key={ts.sectionIndex} className="absolute top-0 h-full w-0.5 bg-white/30 z-10"
            style={{ left: `${duration > 0 ? (ts.time / duration) * 100 : 0}%` }} />
        ))}
        <div className="h-full bg-gradient-to-r from-pink-500 to-rose-400 transition-all"
          style={{ width: `${masterTrack && duration > 0 ? (currentTime / duration) * 100 : showProgress}%` }} />
      </div>

      {/* MAIN */}
      <div className="flex flex-1 min-h-0">
        {/* TELEPROMPTER */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="px-6 py-4 bg-zinc-900/50 border-b border-zinc-800 shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-pink-500">{currentSection.number}</span>
              <div>
                <h2 className="text-xl font-bold text-white">{currentSection.title}</h2>
                <p className="text-sm text-zinc-500">{currentSection.subtitle}</p>
              </div>
              <div className="ml-auto flex items-center gap-3">
                {masterTrack && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800 text-xs font-mono text-zinc-400">
                    <Headphones className="w-3 h-3 text-pink-400" />
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                )}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800 text-xs text-zinc-400">
                  <Music className="w-3 h-3" />
                  {currentSection.backingTrack}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            <div className="space-y-6 max-w-4xl">
              {currentSection.script.map((line, i) => (
                <div key={i} className="p-4 rounded-xl hover:bg-zinc-800/40 transition-all">
                  <div className={`flex items-center gap-2 mb-2 text-xs font-bold tracking-wider uppercase ${getSpeakerColor(line.speaker)}`}>
                    {getSpeakerIcon(line.speaker)}
                    {line.speaker}
                  </div>
                  <div className={getLineStyle(line.style)}>{line.text}</div>
                </div>
              ))}
              {currentSection.song && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Music className="w-4 h-4 text-pink-400" />
                    <span className="text-xs font-bold text-pink-400 tracking-wider uppercase">SONG</span>
                  </div>
                  <p className="text-lg font-bold text-white">{currentSection.song}</p>
                  {currentSection.songNote && <p className="text-sm text-pink-300/70 mt-1">{currentSection.songNote}</p>}
                </div>
              )}
              <div className="flex items-center justify-between pt-6 pb-4">
                <button onClick={prevSection} disabled={effectiveSectionIndex === 0}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-800 text-zinc-300 hover:bg-zinc-700 disabled:opacity-30 font-semibold">
                  <ChevronLeft className="w-5 h-5" /> Previous
                </button>
                <span className="text-sm text-zinc-500 font-medium">{effectiveSectionIndex + 1} / {showSections.length}</span>
                <button onClick={nextSection} disabled={effectiveSectionIndex === showSections.length - 1}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-800 text-zinc-300 hover:bg-zinc-700 disabled:opacity-30 font-semibold">
                  Next <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* TRIGGER PADS */}
        <div className="w-72 bg-zinc-900 border-l border-zinc-800 flex flex-col shrink-0">
          <div className="px-4 py-3 border-b border-zinc-800 shrink-0">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-pink-400" />
              <span className="text-xs font-bold text-zinc-400 tracking-wider uppercase">Trigger Pads</span>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-2">
            {showSections.map((section, index) => {
              const ts = sectionTimestamps.find(t => t.sectionIndex === index);
              const isActive = index === effectiveSectionIndex;
              const isCurrentlyPlaying = index === currentSectionIndex && isPlaying && !manualSectionIndex;
              return (
                <button key={section.id} onClick={() => goToSection(index)}
                  className={`w-full text-left p-3 rounded-xl transition-all ${isActive ? `bg-gradient-to-r ${section.triggerColor} text-white shadow-lg` : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-750'}`}>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-black ${isActive ? 'text-white/80' : 'text-zinc-500'}`}>{section.number}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className={`text-sm font-bold truncate ${isActive ? 'text-white' : 'text-zinc-300'}`}>{section.title}</p>
                        {isCurrentlyPlaying && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />}
                      </div>
                      <p className={`text-[10px] truncate ${isActive ? 'text-white/70' : 'text-zinc-500'}`}>{section.subtitle}</p>
                    </div>
                    {ts && masterTrack && <span className={`text-[10px] font-mono shrink-0 ${isActive ? 'text-white/50' : 'text-zinc-600'}`}>{formatTime(ts.time)}</span>}
                  </div>
                </button>
              );
            })}
          </div>
          <div className="px-4 py-3 border-t border-zinc-800 shrink-0">
            <div className="text-[10px] text-zinc-600 text-center">
              <p>Arrow keys to navigate</p>
              <p>Space to play/pause</p>
              <p>F for fullscreen</p>
            </div>
          </div>
        </div>

        {/* AUDIO PANEL */}
        <AudioPanel
          masterTrack={masterTrack}
          sectionTimestamps={sectionTimestamps}
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          volume={volume}
          currentSectionIndex={effectiveSectionIndex}
          onLoadMasterTrack={loadMasterTrack}
          onRemoveMasterTrack={removeMasterTrack}
          onTogglePlayPause={togglePlayPause}
          onStop={stop}
          onSeekTo={seekTo}
          onSeekToSection={(index: number) => { setManualSectionIndex(index); seekToSection(index); }}
          onUpdateTimestamp={updateTimestamp}
          onSetVolume={setVolume}
        />
      </div>
    </div>
  );
}

export default App;
