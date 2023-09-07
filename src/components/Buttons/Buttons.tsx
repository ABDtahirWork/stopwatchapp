import React, { useState } from 'react'
import classes from './Buttons.module.css'

interface props {
  start: boolean, 
  startTimer: () => void,
  clearTimer: () => void,
  stopTimer: () => void,
}

const Buttons: React.FC<props> = ({ startTimer, clearTimer, stopTimer, start }) => {
  return (
    <div className={classes.btnContainer}>
      {start ? (
        <button onClick={stopTimer}>Stop</button>
      ) : (
        <button onClick={startTimer}>Start</button>
      )}
      <button onClick={clearTimer}>Reset</button>
    </div>
  )
}

export default Buttons
