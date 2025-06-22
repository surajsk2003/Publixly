import { getAllPosts } from './getPosts'

export function generateRSSFeed() {
  const posts = getAllPosts()
  const siteURL = 'https://yourdomain.com'
  const date = new Date()

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Suraj's Blog</title>
    <description>Thoughts on AI, education, and technology</description>
    <link>${siteURL}</link>
    <language>en-us</language>
    <lastBuildDate>${date.toUTCString()}</lastBuildDate>
    <atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${siteURL}/articles/${post.slug}</link>
      <guid>${siteURL}/articles/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return rss
}