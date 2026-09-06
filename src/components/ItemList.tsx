import './ItemList.css'
import ArrowLink from './ArrowLink'

export type WorkItem = {
  title: string
  description: string
  href: string
}

export function ItemList({ label, items }: { label: string; items: WorkItem[] }) {
  return (
    <div className="list-row">
      <span className="list-label">{label}</span>
      <div className="list-items">
        {items.map((item) => {
          const isExternal = item.href.startsWith('http')
          return (
            <a
              key={item.title}
              className="list-item"
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
