import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { useThemeStore } from '../store/themeStore';

export function Home() {
  const { theme } = useThemeStore();

  const getThemeClasses = () => {
    switch (theme) {
      case 'organ-transplant':
        return {
          background: 'bg-organ-transplant-background',
          text: 'text-organ-transplant-text'
        };
      case 'cosmetic-surgery':
        return {
          background: 'bg-cosmetic-surgery-background',
          text: 'text-cosmetic-surgery-text'
        };
      default:
        return {
          background: 'bg-default-background',
          text: 'text-default-text'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <main className={`${themeClasses.background} min-h-screen`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className={`text-3xl font-bold ${themeClasses.text} mb-8`}>Featured Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}