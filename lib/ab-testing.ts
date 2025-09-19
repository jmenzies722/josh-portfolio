'use client'

import { trackPortfolioEvent } from './analytics'

// A/B Testing configuration
export const AB_TESTS = {
  HERO_BUTTONS: {
    name: 'hero_buttons',
    variants: {
      A: 'ask_shua_primary', // Current: Ask Shua primary
      B: 'download_resume_primary' // Test: Download Resume primary
    }
  },
  CTA_SECTION: {
    name: 'cta_section',
    variants: {
      A: 'lets_build_something', // Current: "Let's Build Something Amazing"
      B: 'ready_to_hire' // Test: "Ready to Hire a DevOps Engineer?"
    }
  },
  CHAT_POSITION: {
    name: 'chat_position',
    variants: {
      A: 'hero_section', // Current: Chat in hero
      B: 'dedicated_page' // Test: Chat only on dedicated page
    }
  }
} as const

// Get user's variant for a test
export const getVariant = (testName: keyof typeof AB_TESTS): string => {
  if (typeof window === 'undefined') return 'A'
  
  const test = AB_TESTS[testName]
  const stored = localStorage.getItem(`ab_test_${test.name}`)
  
  if (stored) {
    return stored
  }
  
  // Randomly assign variant (50/50 split)
  const variant = Math.random() < 0.5 ? 'A' : 'B'
  localStorage.setItem(`ab_test_${test.name}`, variant)
  
  // Track test assignment
  trackPortfolioEvent('ab_test_assigned', {
    test: test.name,
    variant: variant
  })
  
  return variant
}

// Track conversion events
export const trackConversion = (testName: keyof typeof AB_TESTS, action: string) => {
  const variant = getVariant(testName)
  
  trackPortfolioEvent('ab_test_conversion', {
    test: testName,
    variant: variant,
    action: action
  })
}

// Hero button conversion tracking
export const trackHeroButtonClick = (buttonType: 'ask_shua' | 'download_resume') => {
  trackConversion('HERO_BUTTONS', `click_${buttonType}`)
}

// CTA section conversion tracking
export const trackCTAClick = () => {
  trackConversion('CTA_SECTION', 'cta_click')
}

// Chat interaction tracking
export const trackChatEngagement = () => {
  trackConversion('CHAT_POSITION', 'chat_engagement')
}

