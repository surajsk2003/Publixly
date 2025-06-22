import { GetStaticProps } from 'next'
import { getAllPosts } from '../lib/getPosts'
import PostCard from '../components/PostCard'
import NewsletterSignup from '../components/NewsletterSignup'
import SEO from '../components/SEO'
import CategorySection from '../components/CategorySection'

type HomeProps = {
  posts: Array<{
    slug: string
    title: string
    description: string
    date: string
    tags?: string[]
  }>
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <SEO title="Suraj's Blog" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <section className="text-center mb-12 sm:mb-16 lg:mb-20 relative animate-fade-in">
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight animate-slide-up px-2">
              Welcome to my
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse-glow">
                Digital Universe
              </span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8 sm:mb-12 animate-slide-up px-4" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 leading-relaxed font-bold mb-3 sm:mb-4">
                This Month&apos;s Space Highlights
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
                Exploring AI, Innovation, Personal Growth, Politics & Code
              </p>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12 animate-scale-in px-2" style={{ animationDelay: '0.4s' }}>
              <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover-lift touch-manipulation">
                <div className="text-2xl sm:text-3xl font-black gradient-text mb-1 sm:mb-2">{posts.length}</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Articles</div>
              </div>
              <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover-lift touch-manipulation">
                <div className="text-2xl sm:text-3xl font-black gradient-text mb-1 sm:mb-2">4</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Categories</div>
              </div>
              <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover-lift touch-manipulation">
                <div className="text-2xl sm:text-3xl font-black gradient-text mb-1 sm:mb-2">∞</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Ideas</div>
              </div>
              <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover-lift touch-manipulation">
                <div className="text-2xl sm:text-3xl font-black gradient-text mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Learning</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black gradient-text mb-3 sm:mb-4 animate-slide-up">Featured Articles</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 animate-slide-up" style={{ animationDelay: '0.1s' }}>Latest insights and deep dives</p>
          </div>
          <div className="grid gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            {posts.slice(0, 3).map((post, index) => (
              <div key={post.slug} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black gradient-text mb-3 sm:mb-4 animate-slide-up">Explore Categories</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 animate-slide-up" style={{ animationDelay: '0.1s' }}>Discover content that interests you</p>
          </div>
          <div className="grid gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
            {[
              { title: "AI & Innovation", emoji: "🚀", posts: ["How AI Will Reshape Rural India", "Building a Local LLM System at Home"], slug: "ai-innovation" },
              { title: "Life & Growth", emoji: "🧠", posts: ["Masks We Wear: My Deep Self-Reflection", "5 Habits That Nearly Destroyed My Potential"], slug: "life-growth" },
              { title: "Code & Build", emoji: "💻", posts: ["How I Built an OCR Engine for CPU Devices", "Genetic Algorithms for LSTM Tuning"], slug: "code-build" },
              { title: "Politics", emoji: "🇮🇳", posts: ["Youth & Indian Democracy", "Narendra Modi: The Vision and the Critique"], slug: "politics" }
            ].map((category, index) => (
              <div key={category.slug} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CategorySection
                  title={category.title}
                  emoji={category.emoji}
                  posts={category.posts}
                  categorySlug={category.slug}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="animate-slide-up">

          <NewsletterSignup />
        </section>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  return {
    props: { posts },
  }
}