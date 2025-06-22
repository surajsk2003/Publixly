import Link from 'next/link'

type PostCardProps = {
  title: string
  description: string
  date: string
  slug: string
  tags?: string[]
}

export default function PostCard({ title, description, date, slug, tags }: PostCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300/50 dark:hover:border-blue-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 sm:hover:-translate-y-2 touch-manipulation">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative p-4 sm:p-6 lg:p-8">
        <Link href={`/articles/${slug}`}>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300 cursor-pointer leading-tight">
            {title}
          </h2>
        </Link>
        
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0" />
            <time className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
              {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>
          
          {tags && (
            <div className="flex gap-1.5 sm:gap-2 flex-wrap">
              {tags.slice(0, 3).map((tag) => (
                <span 
                  key={tag} 
                  className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800/40 dark:hover:to-purple-800/40 transition-all duration-200 cursor-default transform hover:scale-105 touch-manipulation"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-semibold">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
        
        {/* Read more indicator */}
        <div className="mt-4 sm:mt-6 flex items-center text-blue-600 dark:text-blue-400 font-medium text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span>Read article</span>
          <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-sm" />
    </article>
  )
}