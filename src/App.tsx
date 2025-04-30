import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Navigation } from './components/Navigation';
import { Home } from './views/Home';
import { Themes } from './views/Themes';
import { useThemeStore } from './store/themeStore';

function App() {
  const { theme } = useThemeStore();

  const getThemeClasses = () => {
    switch (theme) {
      case 'organ-transplant':
        return 'bg-organ-transplant-background';
      case 'cosmetic-surgery':
        return 'bg-cosmetic-surgery-background';
      default:
        return 'bg-default-background';
    }
  };

  return (
    <Router>
      <ThemeProvider>
        <div className={`min-h-screen ${getThemeClasses()}`}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/themes" element={<Themes />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App