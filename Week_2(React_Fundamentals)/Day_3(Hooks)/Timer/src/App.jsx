import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) return

    const intervalId = setInterval(() => {
      setSeconds(prev => prev+1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [isRunning])

  const startTimer = () => setIsRunning(true)
  const stopTimer = () => setIsRunning(false)
  const resetTimer = () => {
    setIsRunning(false)
    setSeconds(0)
  }

  const formatTime = totalSeconds => {
    const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0')
    const secs = String(totalSeconds % 60).padStart(2, '0')
    return `${mins}:${secs}`
  }

  return (
    <div className="timer-container">
      <h1>React Timer</h1>
      <div className="timer-display">{formatTime(seconds)}</div>
      <div className="timer-controls">
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={stopTimer} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
