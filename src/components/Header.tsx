import React from 'react';
import { Heart, Menu } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  return (
    <header className="bg-cream-50 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-rose-400" />
            <span className="ml-2 text-2xl font-serif text-gray-800">Tutu</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/">Inicio</Link>
            <Link href="/catalogo">Catálogo</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/personalizar">Personalizar</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}