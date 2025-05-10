import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Try to get theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    // If a theme is saved in localStorage, use it
    if (savedTheme) {
      return savedTheme;
    }
    
    // If the user has set a preference in their OS/browser, use that
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    // Default to light theme
    return 'light';
  });

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Apply theme class to document element whenever theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, toggleTheme];
};