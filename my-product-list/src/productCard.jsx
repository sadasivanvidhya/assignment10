import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.category}</p>
      <p className="text-blue-600 font-bold">${product.price}</p>
    </div>
  );
};

export default ProductCard;
