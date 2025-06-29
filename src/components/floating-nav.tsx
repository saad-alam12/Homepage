'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Home, User, FolderOpen, Mail } from 'lucide-react'

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  // Show nav after scrolling down 200px
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 200)
  })

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  return (
    <motion.nav
      className="fixed top-8 left-1/2 z-50 flex items-center gap-2 px-4 py-3 bg-white/8 dark:bg-black/8 backdrop-blur-2xl rounded-full border border-white/30 dark:border-white/25 shadow-2xl"
      initial={{ opacity: 0, y: -100, x: '-50%' }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -100,
        x: '-50%'
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ left: '50%' }}
    >
      {navItems.map((item) => {
        const IconComponent = item.icon
        return (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/15 dark:bg-black/15 backdrop-blur-xl border border-white/40 dark:border-white/35 hover:border-purple-400/70 hover:bg-white/25 dark:hover:bg-black/25 transition-all duration-200 group relative before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/30 before:to-transparent before:pointer-events-none"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: 'rgba(255, 255, 255, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            title={item.label}
          >
            <IconComponent className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
          </motion.button>
        )
      })}
    </motion.nav>
  )
}