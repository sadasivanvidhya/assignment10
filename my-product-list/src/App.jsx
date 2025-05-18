import React, { useState } from 'react';
import productsData from './data/products.json';
import ProductList from './productList';
import CategoryFilter from './categoryFilter.jsx';

const App = () => {
  const [category, setCategory] = useState('All');

  const filteredProducts =
    category === 'All'
      ? productsData
      : productsData.filter(product => product.category === category);

  const categories = ['All', ...new Set(productsData.map(p => p.category))];

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Product Store</h1>
      <CategoryFilter categories={categories} onSelectCategory={setCategory} selected={category} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
