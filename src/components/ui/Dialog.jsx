import { useEffect, useRef } from 'react'
import { m } from 'framer-motion'
import Icon from './Icon.jsx'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

/** Accessible modal shell — dark blueprint style */
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
        className="absolute inset-0 bg-[#060c1a]/80 backdrop-blur-sm"
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
        className={`relative max-h-[92vh] w-full ${maxWidth} overflow-y-auto overscroll-contain rounded-t-[1.5rem] border border-[#1e2d4a] bg-[#0d1428] shadow-2xl shadow-blue-500/10 sm:rounded-[1.5rem]`}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[#1e2d4a] bg-[#0d1428]/95 px-5 py-4 backdrop-blur sm:px-8 sm:py-5">
          <div>
            {kicker && <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-blue-400/60">{kicker}</p>}
            <h3 id={titleId} className="mt-1 text-2xl font-bold text-ink sm:text-3xl">
              {title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="grid size-10 shrink-0 place-items-center rounded-md border border-[#1e2d4a] bg-[#111827] text-ink transition hover:border-blue-500/50 hover:bg-blue-600 hover:text-white"
          >
            <Icon name="close" className="size-5" />
          </button>
        </div>
        {children}
      </m.div>
    </div>
  )
}
