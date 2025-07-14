import { useEffect } from 'react'
import { useRouter } from 'next/router'

const GA_TRACKING_ID = 'G-6WL5XTWK4P'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export default function Analytics() {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_TRACKING_ID, {
          page_path: url,
        })
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return null
}