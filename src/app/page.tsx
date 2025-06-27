'use client'

import { motion, Variants } from 'framer-motion'
import { ThemeToggle } from '@/components/theme-toggle'
import { Download, Mail, Github, Linkedin, Twitter } from 'lucide-react'

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <ThemeToggle />
      
      <motion.div
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
            className="text-5xl md:text-6xl font-bold mb-4 text-purple-600"
            variants={titleVariants}
          >
            Saad Alam
          </motion.h1>
          <motion.p 
            className="text-xl text-black dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Physics Student at TUM (M.Sc.)
          </motion.p>
        </motion.header>

        {/* About Section */}
        <motion.section 
          className="mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
          <div className="bg-white dark:bg-black rounded-xl p-8 border border-black dark:border-white">
            <p className="text-lg leading-relaxed mb-8 text-black dark:text-white">
              I am a 22-year-old Physics student at the Technical University of Munich, currently pursuing my Master&apos;s degree. My primary interests lie in Artificial Intelligence and Machine Learning.
            </p>
            <motion.a
              href="./LebenslaufSaadAlam2025.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.a>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          className="mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white dark:bg-black rounded-xl p-6 border border-black dark:border-white hover:border-purple-600 transition-all duration-300"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-black dark:text-white mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
                >
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          variants={itemVariants}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Contact</h2>
          <div className="flex justify-center gap-8 flex-wrap">
            <motion.a
              href="https://x.com/SaadAlm___"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-white dark:bg-black rounded-full transition-all duration-300 border border-black dark:border-white hover:border-purple-600"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter className="w-6 h-6 text-purple-600" />
            </motion.a>
            
            <motion.a
              href="https://github.com/saad-alam12"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-white dark:bg-black rounded-full transition-all duration-300 border border-black dark:border-white hover:border-purple-600"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6 text-purple-600" />
            </motion.a>
            
            <motion.a
              href="mailto:saad.alam@gmx.de"
              className="flex items-center justify-center w-14 h-14 bg-white dark:bg-black rounded-full transition-all duration-300 border border-black dark:border-white hover:border-purple-600"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6 text-purple-600" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/saad-alam-3a49491b4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-white dark:bg-black rounded-full transition-all duration-300 border border-black dark:border-white hover:border-purple-600"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6 text-purple-600" />
            </motion.a>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}