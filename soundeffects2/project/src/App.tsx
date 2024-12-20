import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { SoundCard } from './components/SoundCard';
import { LibraryPage } from './components/LibraryPage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { sounds } from './data/sounds';
import { useFilteredSounds } from './hooks/useFilteredSounds';

function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [playingSound, setPlayingSound] = useState<string | null>(null);
  const [showLibrary, setShowLibrary] = useState(false);

  const filteredSounds = useFilteredSounds(sounds, search, selectedCategory);

  if (showLibrary) {
    return <LibraryPage onClose={() => setShowLibrary(false)} />;
  }

  return (
    <div className="min-h-screen bg-pink-50">
      <Header onShowLibrary={() => setShowLibrary(true)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSounds.map((sound) => (
              <SoundCard
                key={sound.id}
                sound={sound}
                isPlaying={playingSound === sound.id}
                onPlay={() => setPlayingSound(sound.id)}
                onPause={() => setPlayingSound(null)}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;