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
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="text-lg font-bold text-slate-900 dark:text-white cursor-pointer" onClick={() => scrollToSection('home')}>
                Saad Alam
            </div>

            <div className="flex items-center gap-6">
                <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                    About
                </button>
                <button onClick={() => scrollToSection('thesis')} className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                    Thesis
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                    Projects
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                    Contact
                </button>

                <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-2" />

                <ThemeToggle />
            </div>
        </nav>
    )
}
