import React from 'react';
import { useThemeStore, ThemeType } from '../store/themeStore';

export function Themes() {
  const { setTheme } = useThemeStore();

  const themes: { id: ThemeType; name: string; description: string; colors: string[] }[] = [
    {
      id: 'default',
      name: 'Default Medical Theme',
      description: 'Professional and trustworthy design for general medical practices',
      colors: ['#3B82F6', '#1D4ED8', '#60A5FA'],
    },
    {
      id: 'organ-transplant',
      name: 'Organ Transplant Theme',
      description: 'Focused on life-saving procedures and organ donation awareness',
      colors: ['#16A34A', '#15803D', '#4ADE80'],
    },
    {
      id: 'cosmetic-surgery',
      name: 'Cosmetic Surgery Theme',
      description: 'Elegant and sophisticated design for aesthetic procedures',
      colors: ['#EC4899', '#DB2777', '#F9A8D4'],
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Theme Selection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {themes.map((theme) => (
          <div
            key={theme.id}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setTheme(theme.id)}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{theme.name}</h3>
            <p className="text-gray-600 mb-4">{theme.description}</p>
            <div className="flex space-x-2">
              {theme.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}