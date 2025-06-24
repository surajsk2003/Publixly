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
    // Find all headings in the article
    const elements = Array.from(document.querySelectorAll('article h1, article h2, article h3, article h4'))
    const headingElements = elements
      .filter(element => element.textContent)
      .map((element, index) => {
        const id = element.id || `heading-${index}`
        if (!element.id) element.id = id
        
        return {
          id,
          text: element.textContent || '',
          level: parseInt(element.tagName.charAt(1))
        }
      })
    setHeadings(headingElements)

    // Set up intersection observer to highlight active section
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
    <div className="sticky top-24 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Table of Contents</h3>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`block text-sm transition-colors duration-200 ${
                  activeId === heading.id 
                    ? 'text-blue-600 dark:text-blue-400 font-medium' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
                style={{ 
                  paddingLeft: `${(heading.level - 1) * 12}px`,
                  marginBottom: '8px'
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}