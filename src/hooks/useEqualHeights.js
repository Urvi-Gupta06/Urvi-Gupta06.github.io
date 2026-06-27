import { useEffect, useRef } from 'react'

function groupItemsByRow(items) {
  const sorted = [...items].sort((a, b) => a.offsetTop - b.offsetTop)
  const groups = []
  let current = []
  let currentTop = null

  sorted.forEach((el) => {
    const top = el.offsetTop
    if (currentTop === null || Math.abs(top - currentTop) <= 1) {
      current.push(el)
      currentTop = currentTop ?? top
    } else {
      groups.push(current)
      current = [el]
      currentTop = top
    }
  })

  if (current.length) groups.push(current)
  return groups
}

export default function useEqualHeights(selector = '[data-equal-height]', options = {}) {
  const { minWidth = 768, groupBy = 'all' } =
    typeof options === 'number' ? { minWidth: options } : options

  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const media = window.matchMedia(`(min-width: ${minWidth}px)`)

    const sync = () => {
      const items = [...container.querySelectorAll(selector)]

      items.forEach((el) => {
        el.style.minHeight = ''
      })

      if (!media.matches || items.length === 0) return

      const groups = groupBy === 'row' ? groupItemsByRow(items) : [items]

      groups.forEach((groupItems) => {
        let maxHeight = 0
        groupItems.forEach((el) => {
          maxHeight = Math.max(maxHeight, el.offsetHeight)
        })

        if (maxHeight > 0) {
          groupItems.forEach((el) => {
            el.style.minHeight = `${maxHeight}px`
          })
        }
      })
    }

    sync()

    const resizeObserver = new ResizeObserver(sync)
    resizeObserver.observe(container)
    container.querySelectorAll(selector).forEach((el) => resizeObserver.observe(el))

    media.addEventListener('change', sync)
    window.addEventListener('resize', sync)

    const animationTimers = [400, 900, 1400, 2000, 2800].map((delay) =>
      window.setTimeout(sync, delay)
    )

    return () => {
      resizeObserver.disconnect()
      media.removeEventListener('change', sync)
      window.removeEventListener('resize', sync)
      animationTimers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [selector, minWidth, groupBy])

  return containerRef
}
