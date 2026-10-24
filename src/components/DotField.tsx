import { useEffect, useRef } from 'react'

// Dotted texture for dark bands (after blue2purple.com's CTA section, rebuilt in CSS rather
// than their image files). A faint dot grid that fades out towards the bottom, plus a brighter
// copy of the grid that shows only in a soft circle around the pointer. The glow is skipped on
// touch screens and with reduced motion, where the texture just stays still.
// The parent needs `relative isolate` so the layer sits under its content (-z-10).
export function DotField() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const layer = ref.current
    const host = layer?.parentElement
    if (!layer || !host) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = host.getBoundingClientRect()
        layer.style.setProperty('--dot-x', `${e.clientX - r.left}px`)
        layer.style.setProperty('--dot-y', `${e.clientY - r.top}px`)
        layer.style.setProperty('--dot-glow', '1')
      })
    }
    const onLeave = () => layer.style.setProperty('--dot-glow', '0')

    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="dot-field absolute inset-0" />
      <div className="dot-field-bands absolute inset-0" />
      <div className="dot-field-lines absolute inset-0" />
      <div className="dot-field-glow absolute inset-0" />
    </div>
  )
}

export default DotField
