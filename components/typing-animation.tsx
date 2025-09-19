'use client'

import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  pauseTime?: number
  className?: string
  showCursor?: boolean
}

export function TypingAnimation({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  className = '',
  showCursor = true
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex]
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
      }

      // When typing is complete, pause then start deleting
      if (!isDeleting && currentText.length === fullText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } 
      // When deleting is complete, move to next text
      else if (isDeleting && currentText.length === 0) {
        setIsDeleting(false)
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, pauseTime])

  return (
    <span className={`inline-block ${className}`}>
      <span className="relative">
        {currentText}
        {showCursor && (
          <span className="inline-block w-0.5 h-5 bg-blue-500 ml-1 animate-pulse align-middle"></span>
        )}
      </span>
    </span>
  )
}
