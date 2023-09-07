import React from 'react'
import TimeBox from '../TimeBox/TimeBox'
import classes from './Timer.module.css'
import formatTime from 'src/utils/helper'

const Timer: React.FC<{ time: number }> = ({ time }) => {
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
