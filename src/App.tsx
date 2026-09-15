import { Home } from './components/Home'
import { NotFound } from './components/NotFound'

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '')
  const isHome = pathname === '' || pathname === '/index.html'

  return isHome ? <Home /> : <NotFound />
}

export default App
