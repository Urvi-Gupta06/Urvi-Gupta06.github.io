import useInView from '../hooks/useInView'

export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  ...rest
}) {
  const [ref, isInView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isInView ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
