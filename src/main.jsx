import { createRoot, hydrateRoot } from 'react-dom/client'
import Root from './Root.jsx'
import './index.css'

const container = document.getElementById('root')

// Production HTML is prerendered (fast first paint) → hydrate it. Dev server → render from scratch.
if (container.hasChildNodes()) hydrateRoot(container, <Root />)
else createRoot(container).render(<Root />)
