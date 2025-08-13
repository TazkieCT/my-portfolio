import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface SettingsContextType {
  isDarkMode: boolean;
  isCustomCursor: boolean;
  toggleDarkMode: () => void;
  toggleCustomCursor: () => void;
  enableDarkMode: () => void;
  disableDarkMode: () => void;
}

const SettingsContext = createContext<SettingsContextType>({
  isDarkMode: false,
  isCustomCursor: true,
  toggleDarkMode: () => {},
  toggleCustomCursor: () => {},
  enableDarkMode: () => {},
  disableDarkMode: () => {}
});

export const useSettings = () => useContext(SettingsContext);

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  // Initialize dark mode from localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      return JSON.parse(savedDarkMode);
    }
    
    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Initialize custom cursor from localStorage
  const [isCustomCursor, setIsCustomCursor] = useState(() => {
    const savedCursor = localStorage.getItem('customCursor');
    return savedCursor !== null ? JSON.parse(savedCursor) : true;
  });

  // Apply dark mode class on mount and when isDarkMode changes
  useEffect(() => {
    const htmlElement = document.documentElement;
    
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
    
    // Save to localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Apply cursor settings
  useEffect(() => {
    const htmlElement = document.documentElement;
    
    if (isCustomCursor) {
      htmlElement.classList.add('custom-cursor');
      htmlElement.classList.remove('default-cursor');
    } else {
      htmlElement.classList.add('default-cursor');
      htmlElement.classList.remove('custom-cursor');
    }
    
    // Save to localStorage
    localStorage.setItem('customCursor', JSON.stringify(isCustomCursor));
  }, [isCustomCursor]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev: boolean) => !prev);
  };

  const enableDarkMode = () => {
    setIsDarkMode(true);
  };

  const disableDarkMode = () => {
    setIsDarkMode(false);
  };

  const toggleCustomCursor = () => {
    setIsCustomCursor((prev: boolean) => !prev);
  };

  const value = {
    isDarkMode,
    isCustomCursor,
    toggleDarkMode,
    toggleCustomCursor,
    enableDarkMode,
    disableDarkMode
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};