import React, { useState, useRef } from 'react';
import { Heart, Share2, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Sound } from '../../types/sound';
import { Button } from '../ui/Button';
import { ShareModal } from '../ShareModal';
import { useSoundStore } from '../../store/useSoundStore';
import { cn } from '../../utils/cn';
import { SoundControls } from './SoundControls';
import { SoundInfo } from './SoundInfo';

interface SoundCardProps {
  sound: Sound;
  isPlaying?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
}

export const SoundCard: React.FC<SoundCardProps> = ({
  sound,
  isPlaying = false,
  onPlay,
  onPause,
}) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { addToFavorites, removeFromFavorites, favorites } = useSoundStore();
  const isFavorite = favorites.some((s) => s.id === sound.id);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        onPause?.();
      } else {
        audioRef.current.play();
        onPlay?.();
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden group">
          <img
            src={sound.imageUrl}
            alt={sound.name}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          
          <SoundControls
            isPlaying={isPlaying}
            isMuted={isMuted}
            volume={volume}
            onPlayPause={handlePlayPause}
            onVolumeChange={handleVolumeChange}
            onToggleMute={toggleMute}
          />
        </div>

        <SoundInfo
          sound={sound}
          isFavorite={isFavorite}
          onFavoriteToggle={() => isFavorite ? removeFromFavorites(sound.id) : addToFavorites(sound)}
          onShare={() => setIsShareModalOpen(true)}
        />

        <audio
          ref={audioRef}
          src={sound.url}
          preload="metadata"
          onEnded={onPause}
        />
      </div>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        sound={sound}
      />
    </>
  );
};