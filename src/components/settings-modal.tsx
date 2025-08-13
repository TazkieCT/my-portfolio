"use client"

import { useState, useEffect } from "react"

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isCustomCursor, setIsCustomCursor] = useState(false)

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true"
    const savedCustomCursor = localStorage.getItem("customCursor") === "true"

    setIsDarkMode(savedDarkMode)
    setIsCustomCursor(savedCustomCursor)

    if (savedDarkMode) {
      document.documentElement.classList.add("dark")
    }

    if (savedCustomCursor) {
      document.body.style.cursor = "crosshair"
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())

    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const toggleCustomCursor = () => {
    const newCustomCursor = !isCustomCursor
    setIsCustomCursor(newCustomCursor)
    localStorage.setItem("customCursor", newCustomCursor.toString())

    if (newCustomCursor) {
      document.body.style.cursor = "crosshair"
    } else {
      document.body.style.cursor = "default"
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 w-full max-w-md mx-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Settings</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            aria-label="Close settings"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500 dark:text-gray-400"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Dark Mode</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Toggle dark/light theme</p>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isDarkMode ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isDarkMode ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Custom Cursor Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Custom Cursor</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Enable custom cursor</p>
            </div>
            <button
              onClick={toggleCustomCursor}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isCustomCursor ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isCustomCursor ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
