import React from 'react';

const CategoryFilter = ({ categories, onSelectCategory, selected }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {categories.map(cat => (
        <button
          key={cat}
          className={`px-4 py-2 rounded-full ${
            selected === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
