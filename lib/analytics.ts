// Google Analytics 4 setup
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Portfolio-specific tracking events
export const trackPortfolioEvent = (eventName: string, details?: any) => {
  event({
    action: eventName,
    category: 'Portfolio',
    label: details?.section || 'Unknown',
    value: details?.value || 1
  })
}

// Common portfolio events
export const trackChatInteraction = (action: string) => {
  trackPortfolioEvent('chat_interaction', { action })
}

export const trackResumeDownload = () => {
  trackPortfolioEvent('resume_download')
}

export const trackProjectView = (projectName: string) => {
  trackPortfolioEvent('project_view', { project: projectName })
}

export const trackContactForm = () => {
  trackPortfolioEvent('contact_form_submit')
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

