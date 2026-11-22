import { StrictMode } from 'react'
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import App from './App.jsx'

/** App with providers — shared by the browser entry and the build-time prerender. */
export default function Root() {
  return (
    <StrictMode>
      {/* LazyMotion keeps the animation bundle small; reducedMotion respects the OS setting */}
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <App />
        </MotionConfig>
      </LazyMotion>
    </StrictMode>
  )
}
