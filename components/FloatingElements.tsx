import { useEffect, useState } from 'react'

export default function FloatingElements() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Static background shapes for SSR */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Animated background shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      
      {/* Floating particles - only on client */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"
          style={{
            left: '20%',
            top: '30%',
            animation: 'float 4s ease-in-out infinite',
            animationDelay: '1s',
            transform: `translate(${i * 50}px, ${i * 30}px)`
          }}
        />
      ))}
    </div>
  )
}