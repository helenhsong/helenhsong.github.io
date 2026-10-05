import { Home } from './components/Home'
import { NotFound } from './components/NotFound'

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '')
  const isHome = pathname === '' || pathname === '/index.html'

  // GitHub Pages serves public/portfolio/index.html at /portfolio on its own;
  // the Vite dev server falls back to this app instead, so forward it there.
  if (pathname === '/portfolio') {
    window.location.replace('/portfolio/index.html')
    return null
  }

  return isHome ? <Home /> : <NotFound />
}

export default App
