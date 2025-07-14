import Head from 'next/head'

type SEOProps = {
  title: string
  description?: string
  url?: string
  keywords?: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  author?: string
}

export default function SEO({ 
  title, 
  description, 
  url, 
  keywords, 
  image, 
  type = 'website',
  publishedTime,
  author = 'Suraj Kumar'
}: SEOProps) {
  const siteTitle = "Publixly"
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`
  const defaultDescription = "Publixly - Your go-to platform for insights on personal growth, productivity, and mindful living. Exploring the intersection of technology and human potential."
  const defaultKeywords = "personal development, productivity, mindfulness, technology, AI, education, self-improvement"
  const siteUrl = "https://publixly.com"
  const defaultImage = `${siteUrl}/og-image.jpg`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url || siteUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:site_name" content={siteTitle} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {author && <meta property="article:author" content={author} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": type === 'article' ? 'BlogPosting' : 'WebSite',
            headline: fullTitle,
            description: description || defaultDescription,
            url: url || siteUrl,
            author: {
              "@type": "Person",
              name: author
            },
            ...(publishedTime && { datePublished: publishedTime }),
            ...(image && { image: image })
          })
        }}
      />
    </Head>
  )
}