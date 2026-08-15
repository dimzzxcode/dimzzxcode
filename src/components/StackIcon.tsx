import { useId } from 'react'
import stackIcons from '../assets/icons/stack.json'

export type StackIconName = keyof typeof stackIcons

interface StackIconProps {
  name: string
  variant?: 'dark' | 'light'
  className?: string
}

export default function StackIcon({ name, variant = 'dark', className }: StackIconProps) {
  const uid = useId().replace(/[:]/g, '')
  const icon = stackIcons[name as StackIconName]
  if (!icon) return null

  const raw = icon[variant as 'dark' | 'light']
  if (!raw) return null

  const ids = new Set<string>()
  for (const match of raw.matchAll(/\bid="([^"]+)"/g)) ids.add(match[1])

  let svg = raw
  for (const id of ids) {
    const prefixed = `${uid}-${id}`
    svg = svg.replaceAll(`id="${id}"`, `id="${prefixed}"`)
    svg = svg.replaceAll(`url(#${id})`, `url(#${prefixed})`)
    svg = svg.replaceAll(`href="#${id}"`, `href="#${prefixed}"`)
  }

  svg = svg.replace(/<svg([^>]*)>/, '<svg$1 style="width: 100%; height: 100%; display: block;">')

  return (
    <span
      className={className}
      style={{ display: 'inline-block', lineHeight: 0 }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
