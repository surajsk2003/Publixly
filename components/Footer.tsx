import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative mt-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-lg sm:text-xl">S</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl font-black gradient-text">Suraj&apos;s Blog</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Digital Creator &amp; Innovator</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
              Exploring the intersection of technology, innovation, and human potential. 
              Join me on this journey of continuous learning and growth.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors touch-manipulation">
                <span className="text-sm">T</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors touch-manipulation">
                <span className="text-sm">L</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors touch-manipulation">
                <span className="text-sm">G</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/articles" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors touch-manipulation">Articles</Link></li>
              <li><Link href="/about" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors touch-manipulation">About</Link></li>
              <li><Link href="/newsletter" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors touch-manipulation">Newsletter</Link></li>
              <li><a href="/api/rss" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors touch-manipulation">RSS Feed</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Categories</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/category/ai-innovation" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors touch-manipulation">AI &amp; Innovation</Link></li>
              <li><Link href="/category/life-growth" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors touch-manipulation">Life &amp; Growth</Link></li>
              <li><Link href="/category/code-build" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors touch-manipulation">Code &amp; Build</Link></li>
              <li><Link href="/category/politics" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors touch-manipulation">Politics</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            &copy; 2025 Suraj Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}