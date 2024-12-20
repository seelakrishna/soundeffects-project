import React from 'react';
import { Volume2, Library } from 'lucide-react';

interface HeaderProps {
  onShowLibrary: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onShowLibrary }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Volume2 className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Sound Effects Library</h1>
          </div>
          <button
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            onClick={onShowLibrary}
          >
            <Library className="w-5 h-5" />
            <span>My Library</span>
          </button>
        </div>
      </div>
    </header>
  );
};