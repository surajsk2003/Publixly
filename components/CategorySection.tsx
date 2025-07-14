import { useState } from 'react'
import Link from 'next/link'

type CategorySectionProps = {
  title: string
  posts: string[]
  categorySlug: string
  emoji?: string // Make emoji optional
}

export default function CategorySection({ title, posts, categorySlug, emoji }: CategorySectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300/50 dark:hover:border-blue-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 touch-manipulation"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-4 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <Link href={`/category/${categorySlug}`} className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 sm:gap-3 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors duration-200 group">
              {emoji && (
                <span className="text-xl sm:text-2xl transform group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                  {emoji}
                </span>
              )}
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 truncate">
                {title}
              </span>
            </h3>
          </Link>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`p-2 sm:p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110 touch-manipulation flex-shrink-0 ${
              isExpanded ? 'rotate-180' : 'rotate-0'
            }`}
            aria-label={isExpanded ? `Collapse ${title} category` : `Expand ${title} category`}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100 mt-4 sm:mt-6' : 'max-h-0 opacity-0 mt-0'
        }`}>
          <div className="space-y-2 sm:space-y-3">
            {posts.map((post, index) => (
              <div 
                key={index} 
                className="group/item flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-200 hover:translate-x-1 sm:hover:translate-x-2 touch-manipulation"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-1.5 sm:mt-2 flex-shrink-0" />
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-200 leading-relaxed">
                  &ldquo;{post}&rdquo;
                </p>
              </div>
            ))}
            <Link 
              href={`/category/${categorySlug}`}
              className="inline-flex items-center gap-2 mt-3 sm:mt-4 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg font-medium text-xs sm:text-sm touch-manipulation"
            >
              <span>View all {title.toLowerCase()} articles</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        
        {!isExpanded && (
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {posts.map((post, index) => (
              <span 
                key={index}
                className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-default touch-manipulation"
              >
                {post.split(':')[0].replace(/\"/g, '').substring(0, 20)}...
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Animated border */}
      <div className={`absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`} />
    </div>
  )
}