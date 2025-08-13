import React from 'react';
import { useSettings } from '../context/SettingsContext';

interface DarkModeToggleProps {
  className?: string;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className = "" }) => {
  const { isDarkMode, toggleDarkMode } = useSettings();

  return (
    <button
      onClick={toggleDarkMode}
      className={`
        inline-flex items-center justify-center rounded-lg p-2
        transition-all duration-200 hover:scale-105
        border border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-800 
        text-gray-600 dark:text-gray-300
        hover:bg-gray-50 dark:hover:bg-gray-700
        ${className}
      `}
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDarkMode ? (
        // Sun icon for light mode
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
};
