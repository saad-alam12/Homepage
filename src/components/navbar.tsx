'use client'

import { ThemeToggle } from '@/components/theme-toggle'

export function Navbar() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
            <div
                className="text-lg font-semibold text-slate-900 dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                onClick={() => scrollToSection('home')}
            >
                Saad Alam
            </div>

            <div className="flex items-center gap-1 md:gap-4">
                <button
                    onClick={() => scrollToSection('about')}
                    className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    About
                </button>
                <button
                    onClick={() => scrollToSection('education')}
                    className="hidden md:block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    Education
                </button>
                <button
                    onClick={() => scrollToSection('thesis')}
                    className="hidden md:block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    Thesis
                </button>
                <button
                    onClick={() => scrollToSection('skills')}
                    className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    Skills
                </button>
                <button
                    onClick={() => scrollToSection('projects')}
                    className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    Projects
                </button>
                <button
                    onClick={() => scrollToSection('contact')}
                    className="hidden md:block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    Contact
                </button>

                <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-1" />

                <ThemeToggle />
            </div>
        </nav>
    )
}
