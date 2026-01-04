import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import './clock.css';

export function Clock () {
    const [time, setTime] = useState(dayjs().format('HH:mm:ss'));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(dayjs().format('HH:mm:ss'));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
    <div className="portfolio-clock">
      <span className="clock-label">SYS</span>
      <span className="clock-time">{time}</span>
    </div>
  );
}