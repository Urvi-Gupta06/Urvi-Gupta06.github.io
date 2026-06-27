// Featured sub-card: LinkedIn-style preview image with label, links out on click
import { useState } from 'react'

export default function FeaturedItem({ href, label, image, imageAlt }) {
  const [imageError, setImageError] = useState(false)
  const showImage = image && !imageError

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="featured-item group flex h-full flex-col overflow-hidden rounded-md border border-gray-200
        transition-all duration-200
        hover:border-pink-300 hover:shadow-md
        active:scale-[0.98]
        dark:border-gray-700 dark:hover:border-pink-500"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="aspect-[4/3] w-full shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-800">
        {showImage ? (
          <img
            src={image}
            alt={imageAlt ?? label}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-gradient-to-br from-pink-50 to-gray-100 px-2 dark:from-gray-800 dark:to-gray-900">
            <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500">
              Link
            </span>
            <span className="line-clamp-3 text-center text-[10px] leading-tight text-gray-500 dark:text-gray-400">
              {label}
            </span>
          </div>
        )}
      </div>
      <p className="mt-auto px-2 py-2.5 text-xs leading-snug text-gray-700 transition-colors duration-200 group-hover:text-pink-600 dark:text-gray-300 dark:group-hover:text-pink-400">
        {label}
      </p>
    </a>
  )
}
