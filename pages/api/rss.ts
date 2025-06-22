import { NextApiRequest, NextApiResponse } from 'next'
import { generateRSSFeed } from '../../lib/rss'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const rss = generateRSSFeed()
  
  res.setHeader('Content-Type', 'application/rss+xml')
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')
  res.write(rss)
  res.end()
}