import React, {useState, useEffect} from 'react'
import './CountdownTimer.css'

export const CountdownTimer = ({duration}) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time <= 0) return;
    
    const timer = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));

    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);

    return `${hours} hours : ${minutes} min`
  };

  return (
    <div className='timer'>
      {getFormattedTime(time)}
    </div>
  )
}
