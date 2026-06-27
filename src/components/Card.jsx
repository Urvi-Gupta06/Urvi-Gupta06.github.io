// Reusable card shell — optional press animation on click while keeping hover color transitions
import { useState } from 'react'

export default function Card({
  children,
  className = '',
  onClick,
  interactive = false,
  as: Tag = 'div',
  ...rest
}) {
  const [pressed, setPressed] = useState(false)

  const isLink = Tag === 'a' && rest.href
  const isClickable = interactive || onClick || isLink

  const handlePointerDown = () => {
    if (isClickable) setPressed(true)
  }

  const handlePointerUp = () => {
    setPressed(false)
  }

  return (
    <Tag
      className={`interactive-card ${interactive ? 'interactive-card-press' : ''} ${
        pressed ? 'is-pressed' : ''
      } ${className}`}
      onClick={onClick}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
      role={isClickable && !isLink ? 'button' : undefined}
      tabIndex={isClickable && !isLink ? 0 : undefined}
      onKeyDown={
        isClickable && !isLink
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setPressed(true)
              }
            }
          : undefined
      }
      onKeyUp={
        isClickable && !isLink
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setPressed(false)
                onClick?.(e)
              }
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </Tag>
  )
}
