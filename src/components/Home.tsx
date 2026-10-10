import './Home.css'
import ReactMarkdown, { type Components } from 'react-markdown'
import about from '../content/about.md?raw'
import { fadeIndex } from './fade'
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
    description: 'Selected work',
    href: 'https://www.figma.com/deck/ncONxfKl4K5TprIrdEd3rS/Helen-Song-Portfolio--2026.async-?node-id=1178-3734&p=f&t=aevSxwGDHqQ2TrsI-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
  },
  {
    title: 'Resume',
    description: 'Last updated Sep 2026',
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
    title: 'Textile',
    description: 'Typewriter for stitched text',
    href: '/textile/',
  },
  {
    title: 'Cursor Playground',
    description: 'Interaction explorations',
    href: '/cursor-playground',
  },
]

// The about text's paragraphs, which fade in after the name and role.
const introLines = about.trim().split(/\n\s*\n/).length

export function Home() {
  // Number each intro paragraph as it renders, after the two identity lines.
  let introIndex = 2
  const introComponents: Components = {
    ...aboutComponents,
    p({ children }) {
      return <p style={fadeIndex(introIndex++)}>{children}</p>
    },
  }
  const workStart = 2 + introLines
  const personalStart = workStart + 1 + work.length

  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <div className="identity">
            <p className="name" style={fadeIndex(0)}>
              Helen Song
            </p>
            <p className="role" style={fadeIndex(1)}>
              Product Designer in New York
            </p>
          </div>
          <div className="intro">
            <ReactMarkdown components={introComponents}>{about}</ReactMarkdown>
          </div>
        </header>

        <ItemList label="Work" items={work} fadeStart={workStart} />
        <ItemList label="Personal" items={projects} fadeStart={personalStart} />
      </div>
    </div>
  )
}
