// Reusable card shell with hover/click color and scale transitions (content added per page later)
export default function Card({ children, className = '', onClick, as: Tag = 'div' }) {
  return (
    <Tag
      className={`interactive-card ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </Tag>
  )
}
