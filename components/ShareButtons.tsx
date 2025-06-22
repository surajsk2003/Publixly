type ShareButtonsProps = {
  url: string
  title: string
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`
  }

  return (
    <div className="flex items-center gap-4 py-4 border-t border-b border-gray-200 my-8">
      <span className="text-sm font-medium text-gray-600">Share:</span>
      <div className="flex gap-3">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm"
        >
          🐦 Twitter
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors text-sm"
        >
          💼 LinkedIn
        </a>
        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm"
        >
          📱 WhatsApp
        </a>
      </div>
    </div>
  )
}