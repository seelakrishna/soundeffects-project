import React from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '../ui/Button';

interface SoundControlsProps {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  onPlayPause: () => void;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleMute: () => void;
}

export const SoundControls: React.FC<SoundControlsProps> = ({
  isPlaying,
  isMuted,
  volume,
  onPlayPause,
  onVolumeChange,
  onToggleMute,
}) => {
  return (
    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
      <Button
        variant="primary"
        size="lg"
        className="rounded-full w-12 h-12 p-0 flex items-center justify-center bg-blue-600 hover:bg-blue-700 shadow-lg"
        onClick={onPlayPause}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6 ml-1" />
        )}
      </Button>
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleMute}
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
          onChange={onVolumeChange}
          className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
};