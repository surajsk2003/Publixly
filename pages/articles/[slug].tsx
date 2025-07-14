import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import SEO from '../../components/SEO'
import ReadingProgress from '../../components/ReadingProgress'
import TableOfContents from '../../components/TableOfContents'
import ShareButtons from '../../components/ShareButtons'
import ViewCounter from '../../components/ViewCounter'
import Comments from '../../components/Comments'

type PostProps = {
  source: MDXRemoteSerializeResult
  frontMatter: {
    title: string
    date: string
    description: string
    tags?: string[]
    slug: string
    image?: string
    category?: string
  }
}


export default function Post({ source, frontMatter }: PostProps) {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
  
  return (
    <>
      <SEO 
        title={frontMatter.title} 
        description={frontMatter.description}
        type="article"
        publishedTime={frontMatter.date}
        keywords={frontMatter.tags?.join(', ')}
        url={currentUrl}
        image={frontMatter.image}
      />
      <ReadingProgress />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <header className="mb-8">
              {frontMatter.image && (
                <div className="mb-6 rounded-xl overflow-hidden mx-auto" style={{ maxWidth: '500px' }}>
                  <img 
                    src={frontMatter.image} 
                    alt={frontMatter.title} 
                    className="w-full h-auto object-cover rounded-xl shadow-lg" 
                    style={{ maxHeight: '300px', objectPosition: 'center' }}
                    loading="eager"
                    onError={(e) => {
                      console.error('Image failed to load:', frontMatter.image);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <h1 className="text-4xl font-bold mb-4 dark:text-white">{frontMatter.title}</h1>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 flex-wrap">
                <time>{new Date(frontMatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                <ViewCounter slug={frontMatter.slug} />
                {frontMatter.category && (
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {frontMatter.category}
                  </span>
                )}
                {frontMatter.tags && (
                  <div className="flex gap-2">
                    {frontMatter.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </header>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <MDXRemote {...source} />
            </div>
            
            <ShareButtons url={currentUrl} title={frontMatter.title} />
            <Comments />
          </article>
          
          <aside className="lg:col-span-1">
            <TableOfContents />
          </aside>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('content')
  const paths = files.map((filename) => {
    const filePath = path.join('content', filename)
    const source = fs.readFileSync(filePath)
    const { data } = matter(source)
    return {
      params: { slug: data.slug || filename.replace('.mdx', '') },
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  
  // Find the file that matches this slug
  const files = fs.readdirSync('content')
  let targetFile = null
  
  for (const filename of files) {
    const filePath = path.join('content', filename)
    const source = fs.readFileSync(filePath)
    const { data } = matter(source)
    
    if (data.slug === slug || filename.replace('.mdx', '') === slug) {
      targetFile = filename
      break
    }
  }
  
  if (!targetFile) {
    return { notFound: true }
  }
  
  const filePath = path.join('content', targetFile)
  const source = fs.readFileSync(filePath)
  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: { ...data, slug },
    },
  }
}