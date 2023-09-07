import React, { useState, useRef } from 'react'
import classes from './StopWatch.module.css'
import Timer from '../Timer/Timer'
import Buttons from '../Buttons/Buttons'


const StopWatch = () => {
  const [time, setTime] = useState<number>(3590)
  const [start, setStart] = useState<boolean>(false)
  const intervalRef = useRef<ReturnType<typeof setInterval>>()

  const startTimer = (): void => {
    setStart(true)
    intervalRef.current = setInterval(
      () => setTime((prevTime) => prevTime + 1),
      1000
    )
  }

  const clearTimer = (): void => {
    clearInterval(intervalRef.current)
    setTime(0)
    setStart(false)
  }

  const stopTimer = (): void => {
    clearInterval(intervalRef.current)
    setStart(false)
  }

  return (
    <div >
      <Timer time={time} />
      <Buttons
        startTimer={startTimer}
        clearTimer={clearTimer}
        stopTimer={stopTimer}
        start={start}
      />
    </div>
  )
}

export default StopWatch
