import React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '../utils/cn';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const handleClear = () => {
    onChange('');
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search sounds by name, description, or tags..."
        className={cn(
          "w-full h-10 pl-12 pr-12",
          "border border-gray-200",
          "rounded-full",
          "bg-white/80 backdrop-blur-sm",
          "text-lg text-gray-900",
          "placeholder:text-gray-400",
          "shadow-sm",
          "transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          "hover:border-gray-300"
        )}
      />
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};