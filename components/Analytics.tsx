import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Analytics() {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Track page views
      if (typeof window !== 'undefined') {
        console.log(`Page view: ${url}`)
        // Here you would integrate with your analytics service
        // Example: gtag('config', 'GA_MEASUREMENT_ID', { page_path: url })
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return null
}