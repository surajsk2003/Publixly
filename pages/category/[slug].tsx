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
    category?: string
  }>
  category: {
    name: string
    slug: string
  }
}

const categories = {
  'ai-innovation': { name: 'AI & Innovation'},
  'life-growth': { name: 'Life & Growth'},
  'code-build': { name: 'Code & Build'},
  'politics': { name: 'Politics' }
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
          <h1 className="text-4xl font-bold mb-4 dark:text-white flex items-center justify-center">
            {category.name}
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
  
  // Filter posts by category field only
  const categoryPosts = allPosts.filter(post => post.category === category.name)

  return {
    props: {
      posts: categoryPosts,
      category: { ...category, slug: categorySlug },
    },
  }
}