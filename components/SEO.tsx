import Head from 'next/head'

type SEOProps = {
  title: string
  description?: string
  url?: string
}

export default function SEO({ title, description, url }: SEOProps) {
  const siteTitle = "Suraj's Blog"
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`
  const defaultDescription = "Thoughts on AI, education, and technology"

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content="summary" />
    </Head>
  )
}