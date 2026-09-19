import './Home.css'
import ReactMarkdown, { type Components } from 'react-markdown'
import about from '../content/about.md?raw'
import { ItemList, type WorkItem } from './ItemList'

const aboutComponents: Components = {
  a({ children, href, title }) {
    const isExternal = href?.startsWith('http')

    return (
      <a
        className="text-link"
        href={href}
        title={title}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    )
  },
}

const work: WorkItem[] = [
  {
    title: 'Portfolio (2026)',
    description: 'Selected work from Coinbase',
    href: 'https://www.figma.com/deck/ncONxfKl4K5TprIrdEd3rS/Helen-Song-Portfolio--2026.async-?node-id=1178-3734&p=f&t=aevSxwGDHqQ2TrsI-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
  },
  {
    title: 'Resume',
    description: 'Last updated Mar 2026',
    href: 'https://drive.google.com/file/d/1A-tftcV-JtOhXn99XX9dvkeK7tQhU9Sh/view?usp=sharing',
  },
]

const projects: WorkItem[] = [
  {
    title: 'Cyworld',
    description: '2000s-era profile page',
    href: '/cyworld/',
  },
  {
    title: 'Cursor Playground',
    description: 'Interaction explorations',
    href: '/cursor-playground',
  },
]

export function Home() {
  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <div className="identity">
            <p className="name">Helen Song</p>
            <p className="role">Product Designer in New York</p>
          </div>
          <div className="intro">
            <ReactMarkdown components={aboutComponents}>{about}</ReactMarkdown>
          </div>
        </header>

        <ItemList label="Work" items={work} />
        <ItemList label="Personal" items={projects} />
      </div>
    </div>
  )
}
