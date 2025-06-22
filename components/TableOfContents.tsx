import { useEffect, useState } from 'react'

type Heading = {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
    const headingElements = elements.map((element, index) => {
      const id = element.id || `heading-${index}`
      if (!element.id) element.id = id
      
      return {
        id,
        text: element.textContent || '',
        level: parseInt(element.tagName.charAt(1))
      }
    })
    setHeadings(headingElements)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0% -35% 0%' }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  if (headings.length === 0) return null

  return (
    <nav className="sticky top-8 bg-gray-50 p-4 rounded-lg">
      <h3 className="font-semibold mb-3">Table of Contents</h3>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block text-sm hover:text-blue-600 transition-colors ${
                activeId === heading.id ? 'text-blue-600 font-medium' : 'text-gray-600'
              }`}
              style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}