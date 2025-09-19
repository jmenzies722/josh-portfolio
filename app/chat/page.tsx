'use client'

import { AIChat } from '@/components/ai-chat-simple'
import { MessageCircle, Sparkles, Users, Zap } from 'lucide-react'

export default function ChatPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Full-Screen Chat */}
      <div className="flex-1 flex flex-col sm:hidden">
        <AIChat />
      </div>
      
      {/* Desktop Layout */}
      <div className="hidden sm:block py-16 section-bg">
        <div className="container-custom px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="mb-8 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white mb-6 animate-pulse-slow">
                <MessageCircle className="h-10 w-10" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Chat with <span className="gradient-text">Shua</span>
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                Josh's AI assistant that knows everything about his tech experience and some of his life!
              </p>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <AIChat />
          </div>
        </div>
      </div>

        {/* Features Section */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 sm:mb-4 animate-fade-in-up">
              What You Can Ask
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              I can help you learn about Josh's expertise and provide insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Technical Expertise
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                Ask about AWS, Kubernetes, Terraform, observability, CI/CD, and any DevOps technologies
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Career & Projects
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                Learn about Josh's projects, career journey, achievements, and professional experience
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Advice & Insights
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                Get career advice, learn about DevOps best practices, and industry insights
              </p>
            </div>
          </div>
        </div>

        {/* Example Questions */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 sm:mb-4 animate-fade-in-up">
              Try These Questions
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {[
              "What's Josh's experience with Kubernetes?",
              "How did Josh reduce deployment times by 20%?",
              "What projects has Josh worked on?",
              "What programming languages does Josh know?",
              "How does Josh approach cost optimization?",
              "What's Josh's educational background?",
              "What makes Josh versatile for any DevOps role?",
              "What are Josh's personal interests?"
            ].map((question, index) => (
              <div
                key={index}
                className="bg-white dark:bg-neutral-800 rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700 animate-fade-in-up"
                style={{animationDelay: `${1 + index * 0.1}s`}}
                onClick={() => {
                  const chatInput = document.querySelector('input[placeholder*="Ask about Josh"]') as HTMLInputElement;
                  if (chatInput) {
                    chatInput.value = question;
                    chatInput.focus();
                  }
                }}
              >
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  "{question}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
