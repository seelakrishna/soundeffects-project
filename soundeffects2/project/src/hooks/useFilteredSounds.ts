import { useMemo } from 'react';
import { Sound } from '../types/sound';

export const useFilteredSounds = (
  sounds: Sound[],
  search: string,
  selectedCategory: string | null
) => {
  return useMemo(() => {
    return sounds.filter((sound) => {
      const matchesSearch = sound.name.toLowerCase().includes(search.toLowerCase()) ||
        sound.description.toLowerCase().includes(search.toLowerCase()) ||
        sound.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
      
      const matchesCategory = selectedCategory ? sound.category === selectedCategory : true;
      
      return matchesSearch && matchesCategory;
    });
  }, [sounds, search, selectedCategory]);
};