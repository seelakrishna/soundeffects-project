import { create } from 'zustand';
import { Sound } from '../types/sound';

interface SoundStore {
  favorites: Sound[];
  addToFavorites: (sound: Sound) => void;
  removeFromFavorites: (soundId: string) => void;
  collections: Record<string, Sound[]>;
  createCollection: (name: string) => void;
  addToCollection: (collectionName: string, sound: Sound) => void;
  removeFromCollection: (collectionName: string, soundId: string) => void;
}

export const useSoundStore = create<SoundStore>((set) => ({
  favorites: [],
  collections: {},
  
  addToFavorites: (sound) =>
    set((state) => ({
      favorites: [...state.favorites, sound],
    })),
    
  removeFromFavorites: (soundId) =>
    set((state) => ({
      favorites: state.favorites.filter((s) => s.id !== soundId),
    })),
    
  createCollection: (name) =>
    set((state) => ({
      collections: { ...state.collections, [name]: [] },
    })),
    
  addToCollection: (collectionName, sound) =>
    set((state) => ({
      collections: {
        ...state.collections,
        [collectionName]: [...(state.collections[collectionName] || []), sound],
      },
    })),
    
  removeFromCollection: (collectionName, soundId) =>
    set((state) => ({
      collections: {
        ...state.collections,
        [collectionName]: state.collections[collectionName].filter(
          (s) => s.id !== soundId
        ),
      },
    })),
}));