import { useEffect, useRef } from 'react'
import { m } from 'framer-motion'
import Icon from './Icon.jsx'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Accessible modal shell: focus trap, Escape to close, scroll lock, focus restore.
 * Render inside <AnimatePresence> so it animates in and out.
 */
export default function Dialog({ id, kicker, title, onClose, closeLabel = 'Close', maxWidth = 'max-w-5xl', children }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbar}px`
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab') return
      const items = [...panelRef.current.querySelectorAll(FOCUSABLE)]
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  const titleId = `${id}-title`
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6">
      <m.div
        className="absolute inset-0 bg-[#1b1510]/55 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        aria-hidden="true"
      />
      <m.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`relative max-h-[92vh] w-full ${maxWidth} overflow-y-auto overscroll-contain rounded-t-[2rem] bg-panel shadow-2xl sm:rounded-[2rem]`}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-panel/95 px-5 py-4 backdrop-blur sm:px-8 sm:py-5">
          <div>
            {kicker && <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{kicker}</p>}
            <h3 id={titleId} className="mt-1 font-serif text-2xl text-ink sm:text-3xl">
              {title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="grid size-10 shrink-0 place-items-center rounded-full bg-surface text-ink ring-1 ring-line transition hover:bg-navy hover:text-white"
          >
            <Icon name="close" className="size-5" />
          </button>
        </div>
        {children}
      </m.div>
    </div>
  )
}
