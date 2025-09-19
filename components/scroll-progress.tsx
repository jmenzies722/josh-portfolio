'use client'

import { useState, useEffect } from 'react'

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)
    }

    // Add scroll event listener
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    
    // Initial calculation
    updateScrollProgress()

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 transform origin-left transition-transform duration-150 ease-out"
         style={{ transform: `scaleX(${scrollProgress / 100})` }}
    />
  )
}
