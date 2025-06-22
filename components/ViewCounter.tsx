import { useEffect, useState } from 'react'

type ViewCounterProps = {
  slug: string
}

export default function ViewCounter({ slug }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    // Get current views
    const currentViews = parseInt(localStorage.getItem(`views-${slug}`) || '0')
    
    // Increment views
    const newViews = currentViews + 1
    localStorage.setItem(`views-${slug}`, newViews.toString())
    setViews(newViews)
  }, [slug])

  if (views === null) return null

  return (
    <span className="text-sm text-gray-500 flex items-center gap-1">
      👁️ {views} {views === 1 ? 'view' : 'views'}
    </span>
  )
}