import './ItemList.css'
import type { CSSProperties } from 'react'
import ArrowLink from './ArrowLink'

export type WorkItem = {
  title: string
  description: string
  href: string
}

const fadeIndex = (index: number) => ({ '--fade-index': index }) as CSSProperties

export function ItemList({
  label,
  items,
  fadeStart = 0,
}: {
  label: string
  items: WorkItem[]
  fadeStart?: number
}) {
  return (
    <div className="list-section">
      <span className="list-label" style={fadeIndex(fadeStart)}>
        {label}
      </span>
      <div className="list-items">
        {items.map((item, index) => {
          const isExternal = item.href.startsWith('http')
          return (
            <a
              key={item.title}
              className="list-item"
              style={fadeIndex(fadeStart + 1 + index)}
              href={item.href}
              {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              <span className="item-title">
                {item.title}
                {isExternal && <ArrowLink className="link-arrow" />}
              </span>
              <span className="item-desc">{item.description}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
