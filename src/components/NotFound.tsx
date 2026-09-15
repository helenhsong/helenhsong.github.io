import { useEffect } from 'react'
import 'non.geist/pixel/line'
import './NotFound.css'

export function NotFound() {
  useEffect(() => {
    document.title = '404'
  }, [])

  return (
    <main className="not-found" aria-labelledby="not-found-title">
      <div className="not-found__content">
        <div className="not-found__heading">
          <p className="not-found__code" aria-hidden="true">
            404
          </p>
          <h1 className="not-found__title" id="not-found-title">
            Page not found
          </h1>
        </div>
        <a className="not-found__link" href="/">
          Return home
        </a>
      </div>
    </main>
  )
}
