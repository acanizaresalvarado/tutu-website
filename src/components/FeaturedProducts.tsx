import React from 'react';
import { ProductCard } from './ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Ajuar Bebé Classic',
    price: '$45.000',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Vestido Primavera',
    price: '$35.000',
    image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Set Gorro y Bufanda',
    price: '$25.000',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80',
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-gray-900 mb-8 text-center">
          Productos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}