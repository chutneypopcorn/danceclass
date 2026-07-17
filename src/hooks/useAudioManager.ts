import { useState, useRef, useCallback, useEffect } from 'react';

export interface SectionTimestamp {
  sectionIndex: number;
  time: number;
}

export function useAudioManager(sectionCount: number) {
  const [masterTrack, setMasterTrack] = useState<{
    url: string;
    fileName: string;
    duration: number;
  } | null>(null);

  const [sectionTimestamps, setSectionTimestamps] = useState<SectionTimestamp[]>(() =>
    Array.from({ length: sectionCount }, (_, i) => ({
      sectionIndex: i,
      time: i * 90,
    }))
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ''; }
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const sorted = [...sectionTimestamps].sort((a, b) => a.time - b.time);
    let section = 0;
    for (let i = 0; i < sorted.length; i++) {
      if (currentTime >= sorted[i].time) section = sorted[i].sectionIndex;
    }
    setCurrentSectionIndex(section);
  }, [currentTime, sectionTimestamps, isPlaying]);

  const loadMasterTrack = useCallback((file: File) => {
    if (masterTrack?.url) URL.revokeObjectURL(masterTrack.url);
    const url = URL.createObjectURL(file);
    const tempAudio = new Audio(url);
    tempAudio.addEventListener('loadedmetadata', () => {
      setDuration(tempAudio.duration);
      setMasterTrack({ url, fileName: file.name, duration: tempAudio.duration });
      const spacing = tempAudio.duration / sectionCount;
      setSectionTimestamps(Array.from({ length: sectionCount }, (_, i) => ({ sectionIndex: i, time: i * spacing })));
    });
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ''; }
    const audio = new Audio(url);
    audio.volume = volume;
    audioRef.current = audio;
  }, [masterTrack, sectionCount, volume]);

  const removeMasterTrack = useCallback(() => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ''; }
    if (masterTrack?.url) URL.revokeObjectURL(masterTrack.url);
    setMasterTrack(null); setDuration(0); setCurrentTime(0); setIsPlaying(false);
  }, [masterTrack]);

  const play = useCallback(() => {
    if (audioRef.current && masterTrack) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
      progressInterval.current = setInterval(() => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
          if (audioRef.current.ended) { setIsPlaying(false); if (progressInterval.current) clearInterval(progressInterval.current); }
        }
      }, 50);
    }
  }, [masterTrack]);

  const pause = useCallback(() => {
    if (audioRef.current) audioRef.current.pause();
    setIsPlaying(false);
    if (progressInterval.current) clearInterval(progressInterval.current);
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
    setIsPlaying(false); setCurrentTime(0); setCurrentSectionIndex(0);
    if (progressInterval.current) clearInterval(progressInterval.current);
  }, []);

  const seekTo = useCallback((time: number) => {
    if (audioRef.current) { audioRef.current.currentTime = time; setCurrentTime(time); }
  }, []);

  const seekToSection = useCallback((sectionIndex: number) => {
    const ts = sectionTimestamps.find(t => t.sectionIndex === sectionIndex);
    if (ts && audioRef.current) { audioRef.current.currentTime = ts.time; setCurrentTime(ts.time); setCurrentSectionIndex(sectionIndex); }
  }, [sectionTimestamps]);

  const updateTimestamp = useCallback((sectionIndex: number, time: number) => {
    setSectionTimestamps(prev => prev.map(t => t.sectionIndex === sectionIndex ? { ...t, time: Math.max(0, Math.min(time, duration)) } : t));
  }, [duration]);

  const togglePlayPause = useCallback(() => {
    if (isPlaying) pause(); else play();
  }, [isPlaying, pause, play]);

  useEffect(() => { if (audioRef.current) audioRef.current.volume = volume; }, [volume]);

  return {
    masterTrack, sectionTimestamps, isPlaying, currentTime, duration,
    volume, currentSectionIndex, loadMasterTrack, removeMasterTrack,
    play, pause, stop, seekTo, seekToSection, updateTimestamp,
    togglePlayPause, setVolume, setCurrentSectionIndex,
  };
}
