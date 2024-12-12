import React, { useState, useMemo } from 'react';
import { Volume2, Music2 } from 'lucide-react';
import { sounds } from './data/sounds';
import { SoundCard } from './components/SoundCard';
import { CategoryFilter } from './components/CategoryFilter';
import { SearchBar } from './components/SearchBar';
import { SoundCategory } from './types/sound';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<SoundCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(sounds.map(sound => sound.category));
    return Array.from(uniqueCategories) as SoundCategory[];
  }, []);

  const filteredSounds = useMemo(() => {
    let filtered = sounds;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(sound => sound.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(sound => 
        sound.name.toLowerCase().includes(query) ||
        sound.description.toLowerCase().includes(query) ||
        sound.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-radial from-white via-primary-50 to-primary-100">
      <header className="bg-white/80 backdrop-blur-sm shadow-lg relative overflow-hidden border-b border-primary-100">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 to-primary-200/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary-100 rounded-full">
              <Music2 className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 font-display tracking-tight">
                Sound Effects Library
              </h1>
              <p className="text-gray-600 mt-1 font-medium">
                Discover and play high-quality sound effects
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SearchBar 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSounds.map(sound => (
            <SoundCard key={sound.id} sound={sound} />
          ))}
        </div>

        {filteredSounds.length === 0 && (
          <div className="text-center py-12">
            <Volume2 className="w-16 h-16 text-primary-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg font-display">
              No sounds found matching your criteria
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;