'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Download, Mail, Github, Linkedin, FileText, ChevronRight } from 'lucide-react'

// Professional, subtle animations
const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-100 dark:selection:bg-blue-900/30">
      <Navbar />

      <main className="container mx-auto px-6 py-12 max-w-5xl" id="home">
        {/* Header / Hero */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-16 mb-24 space-y-6"
        >
          <motion.div variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
              Saad Alam
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium">
              Physics M.Sc. Student at TUM | Aspiring Quantitative Researcher
            </p>
          </motion.div>

          <motion.p variants={fadeIn} className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Specializing in statistical physics and reduced-order modeling.
            Passionate about applying rigorous mathematical methods to solve complex problems in quantitative finance,
            market risk management, and alpha research.
          </motion.p>

          <motion.div variants={fadeIn} className="flex gap-4 pt-4">
            <a
              href="mailto:saad.alam@gmx.de"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-md font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href="LebenslaufSaadAlam2025.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-slate-100 rounded-md font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Download className="w-4 h-4" />
              CV
            </a>
          </motion.div>
        </motion.header>

        {/* Bachelor Thesis Section - NEW */}
        <motion.section
          id="thesis"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="mb-20 scroll-mt-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Bachelor Thesis</h2>
          </div>

          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">
              Optimization Methods for Material Science
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Implemented Bayesian optimization for the &quot;Setup for LOw-energy Positron Experiments&quot; (SLOPE) to improve beam focus and stability, demonstrating superior robustness compared to conventional algorithms like Downhill Simplex.
              Additionally, applied deep learning techniques to accelerate beam evaluation measurements, significantly reducing processing time while maintaining high accuracy.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300">Bayesian Optimization</span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300">Deep Learning</span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300">Python</span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300">Positron Physics</span>
            </div>
            <div className="mt-6">
              <a
                href="BA_SaadAlam.pdf"
                target="_blank"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline underline-offset-4"
              >
                Read Full Thesis (PDF) <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Skills Section - NEW */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-lg">
              <h3 className="font-semibold mb-3 text-slate-900 dark:text-white">Programming</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                <li>Python (NumPy, pandas, SciPy)</li>
                <li>C++ (Numerical Computing)</li>
                <li>SQL & Database Management</li>
                <li>Git & Version Control</li>
              </ul>
            </div>
            <div className="p-5 bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-lg">
              <h3 className="font-semibold mb-3 text-slate-900 dark:text-white">Quantitative Finance</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                <li>Stochastic Calculus</li>
                <li>Time Series Analysis</li>
                <li>Monte Carlo Methods</li>
                <li>Market Risk Modeling</li>
              </ul>
            </div>
            <div className="p-5 bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-lg">
              <h3 className="font-semibold mb-3 text-slate-900 dark:text-white">Mathematics</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                <li>Linear Algebra</li>
                <li>Probability & Statistics</li>
                <li>Partial Differential Equations</li>
                <li>Optimization Algorithms</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Projects Section - Refined */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="mb-20 scroll-mt-24"
        >
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group block p-6 bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-blue-500/50 transition-colors">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Market Risk Model Implementation
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                Implemented VaR and Expected Shortfall models using historical simulation and parametric methods on S&P 500 data.
              </p>
              <div className="flex gap-2 text-xs text-slate-500">
                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Python</span>
                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Pandas</span>
              </div>
            </div>
            {/* Added a second placeholder project relevant to Quant */}
            <div className="group block p-6 bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-blue-500/50 transition-colors">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Option Pricing Engine
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                Developed a C++ pricing engine for European and American options using Black-Scholes and Binomial Tree models.
              </p>
              <div className="flex gap-2 text-xs text-slate-500">
                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">C++</span>
                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Numerical Methods</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact/socials */}
        <motion.footer
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 scroll-mt-24"
        >
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Saad Alam. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/saad-alam12" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/saad-alam-3a49491b4" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:saad.alam@gmx.de" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.footer>
      </main>
    </div>
  )
}