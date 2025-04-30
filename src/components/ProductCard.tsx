import React from 'react';
import { Plus } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { theme } = useThemeStore();

  const getThemeClasses = () => {
    switch (theme) {
      case 'organ-transplant':
        return {
          button: 'bg-organ-transplant-primary hover:bg-organ-transplant-secondary',
          price: 'text-organ-transplant-primary',
          title: 'text-organ-transplant-text'
        };
      case 'cosmetic-surgery':
        return {
          button: 'bg-cosmetic-surgery-primary hover:bg-cosmetic-surgery-secondary',
          price: 'text-cosmetic-surgery-primary',
          title: 'text-cosmetic-surgery-text'
        };
      default:
        return {
          button: 'bg-default-primary hover:bg-default-secondary',
          price: 'text-default-primary',
          title: 'text-default-text'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className={`text-lg font-semibold ${themeClasses.title}`}>{product.name}</h3>
        <p className="text-gray-600 mt-1 text-sm line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className={`text-xl font-bold ${themeClasses.price}`}>${product.price}</span>
          <button className={`${themeClasses.button} text-white p-2 rounded-full transition-colors`}>
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}