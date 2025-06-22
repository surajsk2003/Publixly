import { GetStaticProps } from 'next'
import { getAllPosts } from '../../lib/getPosts'
import PostCard from '../../components/PostCard'
import SEO from '../../components/SEO'

type ArticlesProps = {
  posts: Array<{
    slug: string
    title: string
    description: string
    date: string
    tags?: string[]
  }>
}

export default function Articles({ posts }: ArticlesProps) {
  return (
    <>
      <SEO title="Articles" description="All blog posts about AI, education, and technology" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">All Articles</h1>
        <div className="grid gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
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