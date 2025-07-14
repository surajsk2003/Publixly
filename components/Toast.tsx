import { useEffect } from 'react'

type ToastProps = {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className={`fixed top-24 right-4 z-50 p-4 rounded-xl shadow-2xl transform transition-all duration-300 animate-slide-up max-w-sm ${
      type === 'success' 
        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
        : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
    }`}>
      <div className="flex items-center gap-3">
        <span className="text-xl">
          {type === 'success' ? '✅' : '❌'}
        </span>
        <p className="font-medium">{message}</p>
        <button 
          onClick={onClose}
          aria-label="Close"
          className="ml-auto text-white/80 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  )
}