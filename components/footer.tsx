import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowRight, Code, Zap, Target } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-700/30">
      <div className="container-custom py-6">
        {/* Single Row Layout - Ultra Compact */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Left: Brand & Social */}
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-bold text-white">
              Josh Menzies
            </h3>
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="https://github.com/jmenzies722"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-neutral-800 hover:bg-blue-600 rounded-md transition-colors duration-200"
              >
                <Github className="h-3.5 w-3.5 text-gray-400 hover:text-white transition-colors duration-200" />
              </a>
              <a
                href="https://linkedin.com/in/josh-menzies"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-neutral-800 hover:bg-blue-600 rounded-md transition-colors duration-200"
              >
                <Linkedin className="h-3.5 w-3.5 text-gray-400 hover:text-white transition-colors duration-200" />
              </a>
              <a
                href="mailto:jmenzies722@gmail.com"
                className="p-1.5 bg-neutral-800 hover:bg-blue-600 rounded-md transition-colors duration-200"
              >
                <Mail className="h-3.5 w-3.5 text-gray-400 hover:text-white transition-colors duration-200" />
              </a>
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-xs text-gray-400 hover:text-white transition-colors duration-200">
              About
            </Link>
            <Link href="/projects" className="text-xs text-gray-400 hover:text-white transition-colors duration-200">
              Projects
            </Link>
            <Link href="/contact" className="text-xs text-gray-400 hover:text-white transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Right: Copyright & Tech */}
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <div className="hidden sm:flex items-center gap-1">
              <Code className="h-3 w-3" />
              <span>Next.js</span>
            </div>
            <span className="text-gray-600">•</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>

        {/* Mobile Social Links */}
        <div className="sm:hidden flex justify-center mt-3 pt-3 border-t border-neutral-700/30">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/jmenzies722"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-neutral-800 hover:bg-blue-600 rounded-lg transition-colors duration-200"
            >
              <Github className="h-4 w-4 text-gray-400 hover:text-white transition-colors duration-200" />
            </a>
            <a
              href="https://linkedin.com/in/josh-menzies"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-neutral-800 hover:bg-blue-600 rounded-lg transition-colors duration-200"
            >
              <Linkedin className="h-4 w-4 text-gray-400 hover:text-white transition-colors duration-200" />
            </a>
            <a
              href="mailto:jmenzies722@gmail.com"
              className="p-2 bg-neutral-800 hover:bg-blue-600 rounded-lg transition-colors duration-200"
            >
              <Mail className="h-4 w-4 text-gray-400 hover:text-white transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
