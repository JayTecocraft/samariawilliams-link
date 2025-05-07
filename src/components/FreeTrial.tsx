'use client'
import { useState } from 'react'
import WithMeLogoColored from '@/images/logos/WithMeLogo.webp'
import Image from 'next/image'

export function FreeTrialBanner() {
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => {
    window.open('https://withme.so/become-a-creator?id=50&code=a04e94279e34aa57a5b37a2d0715fe0112660fefef08d188a19eed2c3df52e8d', '_blank')
  }

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }
 
  return (
    <div className="fixed bg-black/80 max-w-xl bottom-5 left-4 box-border right-4 w-auto mx-auto backdrop-blur-md border border-black/20 text-gray-200 text-center z-50 rounded-xl">
      <div 
        onClick={handleClick}
        className="relative inline-flex items-center justify-between gap-2 p-2 cursor-pointer transition-colors w-full"
      >
        <div className="flex items-center">
        <Image alt='' src={WithMeLogoColored.src} width="24" height="24"  />
          <p className="text-sm font-bold text-white ml-1">
            WithMe
          </p>
        </div>
        
        <div className="flex items-center">
          <p className="text-xs font-bold text-white mr-3">
            Try 14 Days Free
          </p>
          <button
            onClick={handleClose}
            className="p-1 rounded-full transition-colors"
            aria-label="Close banner"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}