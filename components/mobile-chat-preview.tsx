'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, Bot, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function MobileChatPreview() {
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return
    
    setIsLoading(true)
    // Simulate quick response for preview
    setTimeout(() => {
      setIsLoading(false)
      setInput('')
    }, 1000)
  }

  return (
    <div className="md:hidden bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-lg p-4 mt-8 max-h-[300px] flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
          <Bot className="h-4 w-4 text-white" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Quick Chat</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">Ask Shua anything</p>
        </div>
        <Link href="/chat" className="ml-auto">
          <Button variant="outline" size="sm" className="text-xs">
            <MessageCircle className="h-3 w-3 mr-1" />
            Full Chat
          </Button>
        </Link>
      </div>

      {/* Preview Messages - Scrollable */}
      <div className="flex-1 overflow-y-auto mb-3 space-y-2">
        <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-3">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Hi! I'm Shua, Josh's AI assistant. Ask me about his expertise, projects, or anything else!
          </p>
        </div>
        {/* Add more preview messages here if needed */}
      </div>

      {/* Input Area - Fixed at bottom */}
      <div className="flex gap-2 flex-shrink-0">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about Josh's expertise..."
          className="flex-1 px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
        />
        <Button
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          size="sm"
          className="px-3 py-2 bg-gradient-to-br from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white disabled:opacity-50"
        >
          <Send className="h-3 w-3" />
        </Button>
      </div>

      {/* Quick Suggestions - Fixed */}
      <div className="flex flex-wrap gap-1 mt-3 flex-shrink-0">
        {['Skills', 'Projects', 'Experience'].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => setInput(suggestion)}
            className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-200"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  )
}
