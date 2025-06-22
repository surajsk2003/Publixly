import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPosts } from '../../lib/getPosts'
import PostCard from '../../components/PostCard'
import SEO from '../../components/SEO'

type CategoryPageProps = {
  posts: Array<{
    slug: string
    title: string
    description: string
    date: string
    tags?: string[]
  }>
  category: {
    name: string
    emoji: string
    slug: string
  }
}

const categories = {
  'ai-innovation': { name: 'AI & Innovation', emoji: '🚀' },
  'life-growth': { name: 'Life & Growth', emoji: '🧠' },
  'code-build': { name: 'Code & Build', emoji: '💻' },
  'politics': { name: 'Politics', emoji: '🇮🇳' }
}

export default function CategoryPage({ posts, category }: CategoryPageProps) {
  return (
    <>
      <SEO 
        title={`${category.name} Articles`} 
        description={`All articles about ${category.name.toLowerCase()}`} 
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 dark:text-white flex items-center justify-center gap-3">
            {category.emoji} {category.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore all articles in {category.name.toLowerCase()}
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-8">
            {posts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles published yet in this category.</p>
            <p className="text-gray-400 mt-2">Check back soon for new content!</p>
          </div>
        )}
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(categories).map((slug) => ({
    params: { slug }
  }))
  
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categorySlug = params?.slug as string
  const category = categories[categorySlug as keyof typeof categories]
  
  if (!category) {
    return { notFound: true }
  }

  const allPosts = getAllPosts()
  
  // Filter posts by category (you can extend this logic based on your tagging system)
  const categoryPosts = allPosts.filter(post => {
    if (!post.tags) return false
    
    // Map category slugs to relevant tags
    const categoryTagMap = {
      'ai-innovation': ['AI', 'Innovation', 'Machine Learning', 'Technology'],
      'life-growth': ['Personal Growth', 'Life', 'Self-Improvement'],
      'code-build': ['Coding', 'Programming', 'Development', 'OCR'],
      'politics': ['Politics', 'Democracy', 'India']
    }
    
    const relevantTags = categoryTagMap[categorySlug as keyof typeof categoryTagMap] || []
    return post.tags.some(tag => relevantTags.includes(tag))
  })

  return {
    props: {
      posts: categoryPosts,
      category: { ...category, slug: categorySlug },
    },
  }
}