import { useState } from 'react'
import Toast from './Toast'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted with email:', email)
    
    if (!email || !email.includes('@')) {
      console.log('Invalid email validation failed')
      setToast({ message: 'Please enter a valid email address', type: 'error' })
      return
    }

    setIsLoading(true)
    try {
      console.log('Making API request to /api/subscribe')
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      console.log('API response status:', response.status)
      const data = await response.json()
      console.log('API response data:', data)

      if (response.ok) {
        console.log('Subscription successful!')
        setToast({ message: 'Successfully subscribed! Welcome aboard! 🎉', type: 'success' })
        setEmail('')
      } else {
        console.error('Subscription failed:', data)
        setToast({ 
          message: data.error || 'Subscription failed. Please try again.', 
          type: 'error' 
        })
      }
    } catch (error) {
      console.error('Network error:', error)
      setToast({ message: 'Network error. Please check your connection.', type: 'error' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 p-4 sm:p-6 lg:p-8 border border-blue-200/50 dark:border-blue-700/50">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-2xl" />
        
        <div className="relative">
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Subscribe to my newsletter
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300">
              Get the latest posts delivered right to your inbox.
            </p>
            <div className="flex items-center justify-center gap-4 mt-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                📊 Weekly insights
              </span>
              <span className="flex items-center gap-1">
                🎯 No spam
              </span>
              <span className="flex items-center gap-1">
                ✨ Free forever
              </span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
            <div className="relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required 
                disabled={isLoading}
                className="w-full p-3 sm:p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-600/50 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg sm:rounded-xl opacity-0 focus-within:opacity-100 transition-opacity duration-200 pointer-events-none" />
              
              {/* Email validation indicator */}
              {email && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  {email.includes('@') && email.includes('.') ? (
                    <span className="text-green-500 text-lg">✓</span>
                  ) : (
                    <span className="text-red-500 text-lg">✗</span>
                  )}
                </div>
              )}
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading || !email}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 text-sm sm:text-base touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  Subscribe ✨
                </>
              )}
            </button>
          </form>
          
          <div className="text-center mt-4 sm:mt-6">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">
              Join 1000+ readers getting weekly insights
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
              <span>🔒 Powered by ConvertKit</span>
              <span>•</span>
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}