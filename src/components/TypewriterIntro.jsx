import { useEffect, useState } from 'react'

const LINE_ONE = 'AI/ML | Computer Science | Creative Writing'
const LINE_TWO = 'So committed to writing that I do it in both code and prose.'
const CHAR_DELAY_MS = 42
const LINE_PAUSE_MS = 380

function TypewriterCursor() {
  return <span className="typewriter-cursor" aria-hidden="true" />
}

export default function TypewriterIntro() {
  const [lineOne, setLineOne] = useState('')
  const [lineTwo, setLineTwo] = useState('')
  const [phase, setPhase] = useState('idle')

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
      setLineOne(LINE_ONE)
      setLineTwo(LINE_TWO)
      setPhase('done')
      return undefined
    }

    let cancelled = false
    let timeoutId

    const wait = (ms) =>
      new Promise((resolve) => {
        timeoutId = window.setTimeout(resolve, ms)
      })

    const typeText = async (text, onUpdate) => {
      for (let index = 0; index < text.length; index += 1) {
        if (cancelled) return
        onUpdate(text.slice(0, index + 1))
        await wait(CHAR_DELAY_MS)
      }
    }

    const run = async () => {
      await wait(450)
      if (cancelled) return

      setPhase('line-one')
      await typeText(LINE_ONE, setLineOne)
      if (cancelled) return

      await wait(LINE_PAUSE_MS)
      if (cancelled) return

      setPhase('line-two')
      await typeText(LINE_TWO, setLineTwo)
      if (cancelled) return

      setPhase('done')
    }

    run()

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [])

  const showSecondLine = phase !== 'idle' && phase !== 'line-one'
  const cursorOnLineOne = phase === 'line-one'
  const cursorOnLineTwo = phase === 'line-two' || phase === 'done'

  return (
    <div className="home-intro" aria-live="polite">
      <p className="home-intro-line">
        <span>{lineOne}</span>
        {cursorOnLineOne && <TypewriterCursor />}
      </p>
      {showSecondLine && (
        <p className="home-intro-line home-intro-line-secondary">
          <span>{lineTwo}</span>
          {cursorOnLineTwo && <TypewriterCursor />}
        </p>
      )}
    </div>
  )
}
