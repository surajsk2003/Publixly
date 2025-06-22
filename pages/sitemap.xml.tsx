import { GetServerSideProps } from 'next'
import { getAllPosts } from '../lib/getPosts'

function generateSiteMap(posts: any[]) {
  const siteURL = 'https://yourdomain.com'
  
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${siteURL}</loc>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${siteURL}/articles</loc>
       <changefreq>daily</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${siteURL}/about</loc>
       <changefreq>monthly</changefreq>
       <priority>0.6</priority>
     </url>
     <url>
       <loc>${siteURL}/newsletter</loc>
       <changefreq>monthly</changefreq>
       <priority>0.6</priority>
     </url>
     ${posts
       .map(({ slug, date }) => {
         return `
       <url>
           <loc>${siteURL}/articles/${slug}</loc>
           <lastmod>${new Date(date).toISOString()}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.7</priority>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // This component doesn't render anything
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts = getAllPosts()
  const sitemap = generateSiteMap(posts)

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap