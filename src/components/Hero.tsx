import React from 'react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80"
          alt="Baby wearing knitted clothes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cream-50/70" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
            Prendas tejidas a mano, hechas con amor para los tuyos
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Tutu es una tradición hecha amor, prendas tejidas a mano para los más pequeños y quienes los aman.
          </p>
          <div className="space-x-4">
            <button className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-colors duration-200">
              Ver Catálogo
            </button>
            <button className="border-2 border-rose-500 text-rose-500 px-8 py-3 rounded-full hover:bg-rose-50 transition-colors duration-200">
              Personalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}