import './Home.css'
import ReactMarkdown, { type Components } from 'react-markdown'
import about from '../content/about.md?raw'

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
      </div>
    </div>
  )
}
