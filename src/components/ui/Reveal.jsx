import { m } from 'framer-motion'

/** Fades + slides children in once when they scroll into view. */
export default function Reveal({ children, delay = 0, y = 18, as = 'div', className = '', ...rest }) {
  const Tag = m[as]
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}
