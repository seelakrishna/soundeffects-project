import React from 'react';
import { categories } from '../data/categories';
import { cn } from '../utils/cn';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
      <button
        onClick={() => onSelectCategory(null)}
        className={cn(
          'px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 shadow-sm',
          selectedCategory === null
            ? 'bg-blue-600 text-white shadow-blue-200'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        )}
      >
        All Sounds
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={cn(
            'px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 shadow-sm',
            selectedCategory === category
              ? 'bg-blue-600 text-white shadow-blue-200'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          )}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};