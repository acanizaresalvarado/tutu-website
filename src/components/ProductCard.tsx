import React from 'react';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

export function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-rose-500 font-medium mt-1">{price}</p>
        <button className="w-full mt-4 bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 transition-colors duration-200">
          Ver Detalles
        </button>
      </div>
    </div>
  );
}