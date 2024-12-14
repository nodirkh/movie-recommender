import { createContext, useContext, useState, useEffect } from 'react';


const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) {
        return stored === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // default to dark
  });
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  }, [isDark]);
  
  const toggleTheme = () => setIsDark(!isDark);
  
  const value = {
    isDark,
    toggleTheme,
    theme: isDark ? 'dark' : 'light'
  };
  
  return (
    <ThemeContext.Provider value={value}>
      <div className={isDark ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};