import React from 'react';
import { Heart, Share2 } from 'lucide-react';
import { Sound } from '../../types/sound';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

interface SoundInfoProps {
  sound: Sound;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  onShare: () => void;
}

export const SoundInfo: React.FC<SoundInfoProps> = ({
  sound,
  isFavorite,
  onFavoriteToggle,
  onShare,
}) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{sound.name}</h3>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onFavoriteToggle}
            className="hover:bg-pink-50"
          >
            <Heart className={cn("w-4 h-4", isFavorite ? "fill-red-500 stroke-red-500" : "")} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onShare}
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
  );
};