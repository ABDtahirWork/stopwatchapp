import React, { useState } from 'react'
import classes from './StopWatch.module.css'
import Timer from '../Timer/Timer'
import Buttons from '../Buttons/Buttons'

const StopWatch = () => {
  const [time, setTime] = useState(3590)
  const [prevInterval, setPrevInterval] = useState()
  const [start, setStart] = useState(false)

  const startTimer = () => {
    setStart(true)
    setPrevInterval(
      setInterval(() => setTime((prevTime) => prevTime + 1), 1000)
    )
  }

  const clearTimer = () => {
    clearInterval(prevInterval)
    setTime(0)
    setStart(false)
  }

  const stopTimer = () => {
    clearInterval(prevInterval)
    setStart(false)
  }

  return (
    <div classes={classes.stopWatch}>
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
