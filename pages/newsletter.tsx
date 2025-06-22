import SEO from '../components/SEO'
import NewsletterSignup from '../components/NewsletterSignup'

export default function Newsletter() {
  return (
    <>
      <SEO 
        title="Newsletter - Suraj's Blog" 
        description="Subscribe to get weekly insights on AI, innovation, personal growth, and technology delivered to your inbox." 
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Weekly Newsletter
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Get exclusive insights, behind-the-scenes content, and early access to new articles delivered straight to your inbox.
          </p>
        </div>

        {/* What You'll Get */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-lg font-bold mb-2 dark:text-white">AI & Innovation</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Latest trends in artificial intelligence and breakthrough technologies</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-lg font-bold mb-2 dark:text-white">Personal Growth</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Mindset shifts, productivity tips, and life lessons learned</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 sm:col-span-2 lg:col-span-1">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-lg font-bold mb-2 dark:text-white">Code & Build</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Technical deep-dives, project breakdowns, and coding insights</p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-12 sm:mb-16">
          <NewsletterSignup />
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 dark:text-white">What Readers Say</h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-700/50">
              <div className="text-yellow-500 text-2xl mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                &ldquo;Suraj&apos;s newsletter is the highlight of my week. His insights on AI and personal growth are incredibly valuable.&rdquo;
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">- Tech Professional</div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200/50 dark:border-purple-700/50">
              <div className="text-yellow-500 text-2xl mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                &ldquo;Clear, actionable content that I can immediately apply. No fluff, just pure value.&rdquo;
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">- Startup Founder</div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 dark:text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg font-bold mb-2 dark:text-white">How often do you send emails?</h3>
              <p className="text-gray-600 dark:text-gray-400">I send one thoughtful email every week, usually on Sundays. No spam, no daily bombardment.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg font-bold mb-2 dark:text-white">Can I unsubscribe anytime?</h3>
              <p className="text-gray-600 dark:text-gray-400">Absolutely! There&apos;s an unsubscribe link in every email. No questions asked, no hard feelings.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg font-bold mb-2 dark:text-white">What makes your newsletter different?</h3>
              <p className="text-gray-600 dark:text-gray-400">I focus on actionable insights from my real experiences in AI, startups, and personal development. No generic advice.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}