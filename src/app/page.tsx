'use client'

import { motion, Variants, useInView } from 'framer-motion'
import { ThemeToggle } from '@/components/theme-toggle'
import { FloatingNav } from '@/components/floating-nav'
import { Download, Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of your first project.',
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'A brief description of your second project.',
    link: '#'
  },
  {
    title: 'Project 3',
    description: 'A brief description of your third project.',
    link: '#'
  },
  {
    title: 'Project 4',
    description: 'A brief description of your fourth project.',
    link: '#'
  }
]

// Enhanced page container with sophisticated entrance
const containerVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const titleVariants: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

// Scroll-triggered animation variants
const scrollVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

// Typewriter effect component
function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const startTyping = () => {
      for (let i = 0; i <= text.length; i++) {
        timeoutId = setTimeout(() => {
          setDisplayText(text.slice(0, i))
          if (i === text.length) {
            setShowCursor(true)
          }
        }, delay + i * 100)
      }
    }

    startTyping()

    return () => clearTimeout(timeoutId)
  }, [text, delay])

  return (
    <>
      {displayText}
      {showCursor && (
        <motion.span
          className="inline-block w-0.5 h-[0.8em] bg-purple-600 ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          |
        </motion.span>
      )}
    </>
  )
}

export default function Home() {
  // Refs for scroll-triggered animations
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  
  // Hook to detect when elements are in view
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" })
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" })
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <ThemeToggle />
      <FloatingNav />
      
      <motion.div
        id="home"
        className="container mx-auto px-6 py-8 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.header 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent"
            variants={titleVariants}
          >
            <TypewriterText text="Saad Alam" delay={500} />
          </motion.h1>
          <motion.p 
            className="text-xl bg-gradient-to-r from-black via-purple-600 to-black dark:from-white dark:via-purple-400 dark:to-white bg-clip-text text-transparent animate-pulse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <TypewriterText text="Physics Student at TUM (M.Sc.)" delay={2000} />
          </motion.p>
        </motion.header>

        {/* About Section */}
        <motion.section 
          id="about"
          ref={aboutRef}
          className="mb-16"
          variants={scrollVariants}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-black via-purple-600 to-black dark:from-white dark:via-purple-400 dark:to-white bg-clip-text text-transparent"
            whileInView={{ 
              backgroundSize: ["100% 100%", "200% 100%", "100% 100%"],
              transition: { duration: 2, ease: "easeInOut" }
            }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="relative bg-white/15 dark:bg-black/15 backdrop-blur-xl rounded-xl p-8 border border-white/40 dark:border-white/30 shadow-2xl before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/25 before:via-white/10 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-t after:from-transparent after:via-white/5 after:to-white/10 after:pointer-events-none"
            whileHover={{
              rotateX: 2,
              rotateY: 2,
              scale: 1.01,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <p className="text-lg leading-relaxed mb-8 text-black dark:text-white">
              I am a 22-year-old Physics student at the Technical University of Munich, currently pursuing my Master&apos;s degree. My primary interests lie in Artificial Intelligence and Machine Learning.
            </p>
            <div className="flex justify-center">
              <motion.a
                href="/Homepage/LebenslaufSaadAlam2025.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(124, 58, 237, 0.4)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects"
          ref={projectsRef}
          className="mb-16"
          variants={scrollVariants}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl font-semibold mb-8 text-center bg-gradient-to-r from-black via-purple-600 to-black dark:from-white dark:via-purple-400 dark:to-white bg-clip-text text-transparent"
            whileInView={{ 
              backgroundSize: ["100% 100%", "200% 100%", "100% 100%"],
              transition: { duration: 2, ease: "easeInOut" }
            }}
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-container">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
              >
                <motion.div
                  className="relative bg-white/10 dark:bg-black/10 backdrop-blur-2xl rounded-xl p-6 border border-white/50 dark:border-white/40 shadow-2xl before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/35 before:via-white/15 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-t after:from-transparent after:via-white/8 after:to-white/15 after:pointer-events-none"
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    borderColor: "rgba(168, 85, 247, 0.8)",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.3)",
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-black dark:text-white mb-4">
                  {project.description}
                </p>
                <motion.a
                  href={project.link}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  View Project →
                </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          ref={contactRef}
          variants={scrollVariants}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl font-semibold mb-8 text-center bg-gradient-to-r from-black via-purple-600 to-black dark:from-white dark:via-purple-400 dark:to-white bg-clip-text text-transparent"
            whileInView={{ 
              backgroundSize: ["100% 100%", "200% 100%", "100% 100%"],
              transition: { duration: 2, ease: "easeInOut" }
            }}
          >
            Contact
          </motion.h2>
          <div className="flex justify-center gap-8 flex-wrap">
            <motion.a
              href="https://x.com/SaadAlm___"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-white/15 dark:bg-black/15 backdrop-blur-2xl rounded-full transition-all duration-300 border border-white/60 dark:border-white/50 hover:border-purple-400/80 hover:bg-white/25 dark:hover:bg-black/25 shadow-2xl hover:shadow-purple-500/40 relative before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/50 before:via-white/20 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-t after:from-transparent after:via-white/10 after:to-white/20 after:pointer-events-none"
              whileHover={{ 
                scale: 1.15, 
                rotate: 8,
                boxShadow: "0 5px 15px rgba(124, 58, 237, 0.3)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter className="w-6 h-6 text-purple-600" />
            </motion.a>
            
            <motion.a
              href="https://github.com/saad-alam12"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-white/15 dark:bg-black/15 backdrop-blur-2xl rounded-full transition-all duration-300 border border-white/60 dark:border-white/50 hover:border-purple-400/80 hover:bg-white/25 dark:hover:bg-black/25 shadow-2xl hover:shadow-purple-500/40 relative before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/50 before:via-white/20 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-t after:from-transparent after:via-white/10 after:to-white/20 after:pointer-events-none"
              whileHover={{ 
                scale: 1.15, 
                rotate: -8,
                boxShadow: "0 5px 15px rgba(124, 58, 237, 0.3)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6 text-purple-600" />
            </motion.a>
            
            <motion.a
              href="mailto:saad.alam@gmx.de"
              className="flex items-center justify-center w-14 h-14 bg-white/15 dark:bg-black/15 backdrop-blur-2xl rounded-full transition-all duration-300 border border-white/60 dark:border-white/50 hover:border-purple-400/80 hover:bg-white/25 dark:hover:bg-black/25 shadow-2xl hover:shadow-purple-500/40 relative before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/50 before:via-white/20 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-t after:from-transparent after:via-white/10 after:to-white/20 after:pointer-events-none"
              whileHover={{ 
                scale: 1.15, 
                rotate: 8,
                boxShadow: "0 5px 15px rgba(124, 58, 237, 0.3)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6 text-purple-600" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/saad-alam-3a49491b4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-white/15 dark:bg-black/15 backdrop-blur-2xl rounded-full transition-all duration-300 border border-white/60 dark:border-white/50 hover:border-purple-400/80 hover:bg-white/25 dark:hover:bg-black/25 shadow-2xl hover:shadow-purple-500/40 relative before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/50 before:via-white/20 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-t after:from-transparent after:via-white/10 after:to-white/20 after:pointer-events-none"
              whileHover={{ 
                scale: 1.15, 
                rotate: -8,
                boxShadow: "0 5px 15px rgba(124, 58, 237, 0.3)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6 text-purple-600" />
            </motion.a>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}