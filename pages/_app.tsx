import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import Analytics from '../components/Analytics'
import FloatingElements from '../components/FloatingElements'
import ScrollIndicator from '../components/ScrollIndicator'
import PageTransition from '../components/PageTransition'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Analytics />
      <FloatingElements />
      <ScrollIndicator />
      <PageTransition />
      <Navbar />
      <main className="relative min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}