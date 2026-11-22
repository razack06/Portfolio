import { useEffect, useState } from 'react'

/** Returns the id of the section currently in the middle band of the viewport. */
export function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      // A thin band ~40% down the screen decides which section is "active"
      { rootMargin: '-40% 0px -55% 0px' },
    )
    els.forEach((el) => observer.observe(el))

    // Clear highlight at the hero; force the last section at the very bottom
    const onScroll = () => {
      const { scrollY, innerHeight } = window
      if (scrollY < 200) setActive('')
      else if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) setActive(ids[ids.length - 1])
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [ids])

  return active
}
