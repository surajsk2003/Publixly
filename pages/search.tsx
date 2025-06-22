import { GetServerSideProps } from 'next'
import { getAllPosts } from '../lib/getPosts'
import PostCard from '../components/PostCard'
import SEO from '../components/SEO'

type SearchProps = {
  posts: Array<{
    slug: string
    title: string
    description: string
    date: string
    tags?: string[]
  }>
  query: string
}

export default function Search({ posts, query }: SearchProps) {
  return (
    <>
      <SEO title={`Search: ${query}`} description={`Search results for "${query}"`} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        <p className="text-gray-600 mb-8">
          Found {posts.length} {posts.length === 1 ? 'result' : 'results'} for &ldquo;{query}&rdquo;
        </p>
        
        {posts.length > 0 ? (
          <div className="grid gap-8">
            {posts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found matching your search.</p>
            <p className="text-gray-400 mt-2">Try different keywords or browse all articles.</p>
          </div>
        )}
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const searchQuery = (query.q as string) || ''
  const allPosts = getAllPosts()
  
  const filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return {
    props: {
      posts: filteredPosts,
      query: searchQuery,
    },
  }
}