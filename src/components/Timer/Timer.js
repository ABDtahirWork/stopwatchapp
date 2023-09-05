import React from 'react'
import TimeBox from '../TimeBox/TimeBox'
import classes from './Timer.module.css'

const Timer = ({ time }) => {
  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24))
    seconds -= days * 3600 * 24
    const hours = Math.floor(seconds / 3600)
    seconds -= hours * 3600
    const minutes = Math.floor(seconds / 60)
    seconds -= minutes * 60
    return { days, hours, minutes, seconds }
  }
  const formattedTime = formatTime(time)
  return (
    <div className={classes.timeDial}>
      {formattedTime.days > 0 ? <TimeBox time={formattedTime.days} /> : null}
      {formattedTime.hours > 0 ? <TimeBox time={formattedTime.hours} /> : null}
      <TimeBox time={formattedTime.minutes} />
      <TimeBox time={formattedTime.seconds} />
    </div>
  )
}

export default Timer
