import React from 'react'
import classes from './Buttons.module.css'

const Buttons = ({ startTimer, clearTimer, stopTimer, start }) => {
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
