import './Home.css'
import ArrowLink from './ArrowLink'
import { ItemList, type WorkItem } from './ItemList'

const work: WorkItem[] = [
  {
    title: 'Portfolio (2026)',
    description: 'Selected work from Coinbase',
    href: 'https://www.figma.com/deck/vRfiD3q5KS25lShYY2q7um/Helen-Song-Portfolio--2026-?node-id=1178-3734&p=f&t=6qLeHUkxKVzKsu7j-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
  },
  {
    title: 'Resume',
    description: 'Last updated Mar 2026',
    href: 'https://drive.google.com/file/d/1A-tftcV-JtOhXn99XX9dvkeK7tQhU9Sh/view?usp=sharing',
  },
]

const personal: WorkItem[] = [
  {
    title: 'Timeline',
    description: 'Make your own timeline',
    href: '#',
  },
  {
    title: 'Randomizer',
    description: 'Generate random values',
    href: '#',
  },
  {
    title: 'Cyworld',
    description: '2000s-era social media page',
    href: '#',
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
            <p>
              Previously designed foundational experiences for institutions at
              Coinbase. I enjoy simplifying complex systems, designing for
              scale, and crafting polished interfaces.
            </p>
            <p>
              Currently spending the year in Korea to recharge and work on
              some fun things. Open to new opportunities beginning fall 2026.
            </p>
            <p>
              You can find me on{' '}
              <a
                className="text-link"
                href="https://linkedin.com/in/helenhsong"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <ArrowLink className="link-arrow" />
              </a>{' '}
              or reach out via{' '}
              <a className="text-link" href="mailto:helenhsong@gmail.com">
                email
                <ArrowLink className="link-arrow" />
              </a>
              .
            </p>
          </div>
        </header>

        <ItemList label="Work" items={work} />
        <ItemList label="Personal" items={personal} />
      </div>
    </div>
  )
}
