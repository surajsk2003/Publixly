import { useEffect, useRef, useState } from 'react'

export default function Comments() {
  const ref = useRef<HTMLDivElement>(null)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.async = true
    script.crossOrigin = 'anonymous'
    script.setAttribute('data-repo', 'your-username/your-repo') // Replace with your repo
    script.setAttribute('data-repo-id', 'your-repo-id') // Replace with your repo ID
    script.setAttribute('data-category', 'General')
    script.setAttribute('data-category-id', 'your-category-id') // Replace with your category ID
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'bottom')
    script.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light')
    script.setAttribute('data-lang', 'en')

    ref.current.appendChild(script)
  }, [theme])

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Comments</h3>
      <div ref={ref} />
    </div>
  )
}