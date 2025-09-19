'use client'

import Script from 'next/script'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { GA_TRACKING_ID } from '@/lib/analytics'

export function Analytics() {
  return (
    <>
      {/* Vercel Analytics */}
      <VercelAnalytics />
      
      {/* Google Analytics */}
      {GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXXX' && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: true,
                });
                
                // Core Web Vitals tracking
                function sendToGoogleAnalytics({name, delta, value, id}) {
                  gtag('event', name, {
                    event_category: 'Web Vitals',
                    event_label: id,
                    value: Math.round(name === 'CLS' ? delta * 1000 : delta),
                    non_interaction: true,
                  });
                }
                
                // Report Web Vitals
                if (typeof window !== 'undefined' && 'web-vital' in window) {
                  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                    getCLS(sendToGoogleAnalytics);
                    getFID(sendToGoogleAnalytics);
                    getFCP(sendToGoogleAnalytics);
                    getLCP(sendToGoogleAnalytics);
                    getTTFB(sendToGoogleAnalytics);
                  });
                }
              `,
            }}
          />
        </>
      )}
    </>
  )
}

