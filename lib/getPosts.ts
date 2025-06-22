import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content')

interface Post {
  slug: string
  title: string
  date: string
  description: string
  tags?: string[]
  [key: string]: any
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug: data.slug || fileName.replace(/\.mdx$/, ''),
      ...data,
    } as Post
  })
  .filter((post) => post.date) // Only include posts with dates
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}