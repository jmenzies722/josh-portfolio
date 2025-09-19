'use client'

import { AIChat } from '@/components/ai-chat-simple'
import { MessageCircle, Sparkles, Users, Zap } from 'lucide-react'

export default function ChatPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Full-Screen Chat - ChatGPT Style */}
      <div className="flex-1 flex flex-col sm:hidden h-screen overflow-hidden">
        <AIChat />
      </div>
      
      {/* Desktop Layout - ChatGPT Style */}
      <div className="hidden sm:block h-screen flex flex-col">
        {/* Desktop Header */}
        <div className="flex-shrink-0 border-b border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  Chat with <span className="gradient-text">Shua</span>
                </h1>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Josh's AI assistant
              </p>
            </div>
          </div>
        </div>

        {/* Chat Interface - Full Height */}
        <div className="flex-1 overflow-hidden">
          <AIChat />
        </div>
      </div>
    </div>
  )
}