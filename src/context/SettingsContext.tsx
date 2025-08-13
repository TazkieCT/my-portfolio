import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface SettingsContextType {
  isDarkMode: boolean;
  isCustomCursor: boolean;
  toggleDarkMode: () => void;
  toggleCustomCursor: () => void;
}

const SettingsContext = createContext<SettingsContextType>({
  isDarkMode: false,
  isCustomCursor: true,
  toggleDarkMode: () => {},
  toggleCustomCursor: () => {}
});

export const useSettings = () => useContext(SettingsContext);

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCustomCursor, setIsCustomCursor] = useState(true);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleCustomCursor = () => {
    setIsCustomCursor(!isCustomCursor);
  };

  const value = {
    isDarkMode,
    isCustomCursor,
    toggleDarkMode,
    toggleCustomCursor
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};