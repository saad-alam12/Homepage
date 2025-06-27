'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed top-5 right-5 z-50 w-12 h-12 rounded-full bg-white border border-black" />
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="fixed top-5 right-5 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-black border border-black dark:border-white hover:border-purple-600 transition-all duration-200"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-purple-600" />
      ) : (
        <Moon className="w-5 h-5 text-purple-600" />
      )}
    </button>
  )
}