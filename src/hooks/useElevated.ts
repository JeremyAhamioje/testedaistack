import { useEffect, useState } from 'react'

/**
 * True once the page has scrolled past `threshold` px.
 * Used to add a hairline border + blur to the navbar on scroll.
 */
export function useElevated(threshold = 12): boolean {
  const [elevated, setElevated] = useState(false)

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return elevated
}
