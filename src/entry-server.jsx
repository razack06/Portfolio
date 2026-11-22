// Build-time prerender entry: renders the app to static HTML (see scripts/prerender.js).
import { renderToString } from 'react-dom/server'
import Root from './Root.jsx'

export function render() {
  return renderToString(<Root />)
}
