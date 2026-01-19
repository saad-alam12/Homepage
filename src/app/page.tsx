'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Download, Mail, Github, Linkedin, FileText, ChevronRight, GraduationCap, Briefcase, Code2, BookOpen } from 'lucide-react'

// Subtle, professional fade-in animation
const fadeIn = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }
  }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="container mx-auto px-6 py-12 max-w-4xl" id="home">
        {/* Hero Section */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-20 mb-20"
        >
          <motion.div variants={fadeIn} className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
              Saad Alam
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Physics M.Sc. Student at TUM · Aspiring Quantitative Researcher
            </p>
          </motion.div>

          <motion.p variants={fadeIn} className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            Combining rigorous training in theoretical physics with a passion for quantitative finance.
            Seeking working student positions in alpha research, quantitative trading, and market risk management.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
            <a
              href="mailto:saad.alam@gmx.de"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-md font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href="LebenslaufSaadAlam2025.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-md font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div variants={fadeIn} className="flex gap-4 mt-6">
            <a href="https://github.com/saad-alam12" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/saad-alam-3a49491b4" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:saad.alam@gmx.de" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.header>

        {/* About Section */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="mb-20 scroll-mt-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">About</h2>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a Master&apos;s student in Physics at the Technical University of Munich, specializing in
              statistical physics and computational methods. My academic background provides a strong
              foundation in mathematical modeling, stochastic processes, and numerical analysis—skills
              directly applicable to quantitative finance.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
              I am particularly interested in systematic trading strategies, risk modeling, and the
              application of machine learning to financial markets. I&apos;m seeking opportunities to apply
              my quantitative skills in a professional finance environment.
            </p>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="mb-20 scroll-mt-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">M.Sc. Physics</h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">2024 – Present</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-3">Technical University of Munich (TUM)</p>
              <p className="text-sm text-slate-500 dark:text-slate-500">
                Focus: Statistical Physics, Reduced-Order Modeling, Computational Methods
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">B.Sc. Physics</h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">2020 – 2024</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-3">Technical University of Munich (TUM)</p>
              <p className="text-sm text-slate-500 dark:text-slate-500">
                Thesis: Bayesian Optimization and Deep Learning for Experimental Physics
              </p>
            </div>
          </div>
        </motion.section>

        {/* Bachelor Thesis Section */}
        <motion.section
          id="thesis"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="mb-20 scroll-mt-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Bachelor Thesis</h2>
          </div>

          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">
              Optimization Methods for Material Science
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Implemented Bayesian optimization for the &quot;Setup for LOw-energy Positron Experiments&quot; (SLOPE)
              to improve beam focus and stability, demonstrating superior robustness compared to conventional
              algorithms like Downhill Simplex. Additionally, applied deep learning techniques to accelerate
              beam evaluation measurements, significantly reducing processing time while maintaining high accuracy.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded text-sm text-slate-600 dark:text-slate-300">Bayesian Optimization</span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded text-sm text-slate-600 dark:text-slate-300">Deep Learning</span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded text-sm text-slate-600 dark:text-slate-300">Python</span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded text-sm text-slate-600 dark:text-slate-300">PyTorch</span>
            </div>

            <a
              href="BA_SaadAlam.pdf"
              target="_blank"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Read Full Thesis (PDF) <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="mb-20 scroll-mt-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg">
              <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Programming</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Python (NumPy, pandas, SciPy, scikit-learn)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  C++ (Numerical Computing)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  SQL & Database Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Git, Linux, LaTeX
                </li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg">
              <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Quantitative Methods</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Stochastic Calculus & Probability Theory
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Time Series Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Monte Carlo Methods
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Optimization Algorithms
                </li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg">
              <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Mathematics</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Linear Algebra & Matrix Theory
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Partial Differential Equations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Statistical Inference
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Numerical Analysis
                </li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg">
              <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Finance</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Market Risk Modeling (VaR, ES)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Option Pricing (Black-Scholes, Binomial)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Portfolio Theory
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Derivatives & Fixed Income Basics
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="mb-20 scroll-mt-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Projects</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                Market Risk Model Implementation
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Implemented Value-at-Risk (VaR) and Expected Shortfall (ES) models using historical simulation
                and parametric methods. Applied to S&P 500 data with backtesting and performance metrics
                including Sharpe Ratio, Sortino Ratio, and Maximum Drawdown analysis.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-400">Python</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-400">pandas</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-400">NumPy</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-400">Risk Management</span>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                Option Pricing Engine
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Developed a C++ pricing engine for European and American options using Black-Scholes analytical
                solutions and Binomial Tree numerical methods. Includes Greeks calculation and Monte Carlo
                simulation for path-dependent options.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-400">C++</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-400">Numerical Methods</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-400">Black-Scholes</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-400">Monte Carlo</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Footer */}
        <motion.footer
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="pt-12 border-t border-slate-200 dark:border-slate-800 scroll-mt-24"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Get in Touch</h2>
              <p className="text-slate-600 dark:text-slate-400">
                I&apos;m open to working student opportunities in quantitative finance.
              </p>
              <a
                href="mailto:saad.alam@gmx.de"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                saad.alam@gmx.de
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/saad-alam12" className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/saad-alam-3a49491b4" className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:saad.alam@gmx.de" className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="text-center text-slate-500 text-sm mt-8 pb-8">
            © {new Date().getFullYear()} Saad Alam. All rights reserved.
          </div>
        </motion.footer>
      </main>
    </div>
  )
}