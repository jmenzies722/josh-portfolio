'use client'

import { useState, useEffect } from 'react'
import { ArrowUp, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      setScrollProgress(scrollPercent)
      
      // Show button after scrolling 20% of the page
      if (scrollTop > window.innerHeight * 0.2) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Progress Ring */}
      <div className="relative">
        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-neutral-200 dark:text-neutral-700"
          />
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 20}`}
            strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
            className="text-primary-600 transition-all duration-150 ease-out"
            strokeLinecap="round"
          />
        </svg>
        
        {/* Button */}
    <Button
      onClick={scrollToTop}
          className="absolute inset-0 m-auto w-8 h-8 rounded-full p-0 bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-neutral-200 dark:border-neutral-700"
      size="sm"
    >
          <ChevronUp className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
      <span className="sr-only">Scroll to top</span>
    </Button>
      </div>
    </div>
  )
}
