import './ItemList.css'
import ArrowLink from './ArrowLink'
import { fadeIndex } from './fade'

export type WorkItem = {
  title: string
  description: string
  href: string
}

// The label fades in at fadeStart and each item after it in turn.
export function ItemList({
  label,
  items,
  fadeStart,
}: {
  label: string
  items: WorkItem[]
  fadeStart: number
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
