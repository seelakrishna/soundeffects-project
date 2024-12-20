import React, { useState, useRef } from 'react';
import { Heart, Share2, Play, Pause, Clock, Volume2, VolumeX } from 'lucide-react';
import { Sound } from '../types/sound';
import { Button } from './ui/Button';
import { ShareModal } from './ShareModal';
import { useSoundStore } from '../store/useSoundStore';
import { cn } from '../utils/cn';

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

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

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
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <Button
              variant="primary"
              size="lg"
              className="rounded-full w-12 h-12 p-0 flex items-center justify-center bg-blue-600 hover:bg-blue-700 shadow-lg"
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-1" />
              )}
            </Button>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{sound.name}</h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Clock className="w-4 h-4 mr-1" />
                <span>{formatDuration(sound.duration)}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => isFavorite ? removeFromFavorites(sound.id) : addToFavorites(sound)}
                className="hover:bg-pink-50"
              >
                <Heart className={cn("w-4 h-4", isFavorite ? "fill-red-500 stroke-red-500" : "")} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsShareModalOpen(true)}
                className="hover:bg-blue-50"
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{sound.description}</p>
          
          <div className="flex flex-wrap gap-1">
            {sound.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

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