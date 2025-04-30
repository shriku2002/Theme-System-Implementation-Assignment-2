import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Store } from 'lucide-react';
import { useThemeStore, ThemeType } from '../store/themeStore';

export function Navigation() {
  const location = useLocation();
  const { theme, setTheme } = useThemeStore();

  const getThemeClasses = () => {
    switch (theme) {
      case 'organ-transplant':
        return {
          nav: 'bg-organ-transplant-primary',
          link: 'text-organ-transplant-text hover:bg-organ-transplant-accent',
          activeLink: 'bg-organ-transplant-secondary text-white',
          select: 'border-organ-transplant-secondary text-organ-transplant-text'
        };
      case 'cosmetic-surgery':
        return {
          nav: 'bg-cosmetic-surgery-primary',
          link: 'text-cosmetic-surgery-text hover:bg-cosmetic-surgery-accent',
          activeLink: 'bg-cosmetic-surgery-secondary text-white',
          select: 'border-cosmetic-surgery-secondary text-cosmetic-surgery-text'
        };
      default:
        return {
          nav: 'bg-default-primary',
          link: 'text-default-text hover:bg-default-accent',
          activeLink: 'bg-default-secondary text-white',
          select: 'border-default-secondary text-default-text'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <nav className={`shadow-md ${themeClasses.nav}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Store className="h-6 w-6 text-white" />
              <span className="text-xl font-bold text-white">Medical Store</span>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md ${
                  location.pathname === '/' ? themeClasses.activeLink : themeClasses.link
                }`}
              >
                Home
              </Link>
              <Link
                to="/themes"
                className={`px-3 py-2 rounded-md ${
                  location.pathname === '/themes' ? themeClasses.activeLink : themeClasses.link
                }`}
              >
                Themes
              </Link>
            </div>
          </div>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as ThemeType)}
            className={`px-3 py-2 rounded-md ${themeClasses.select}`}
          >
            <option value="default">Default Theme</option>
            <option value="organ-transplant">Organ Transplant</option>
            <option value="cosmetic-surgery">Cosmetic Surgery</option>
          </select>
        </div>
      </div>
    </nav>
  );
}