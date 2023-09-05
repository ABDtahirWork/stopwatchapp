import React from 'react'
import classes from './TimeBox.module.css'

const TimeBox = ({ time }) => {
  return <div className={classes.timer}>{time >= 10 ? time : `0${time}`}</div>
}

export default TimeBox
