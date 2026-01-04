import { useState, useEffect } from 'react';
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import './clock.css';

dayjs.extend(utc);
dayjs.extend(timezone);

export function Clock ({ isTokyo }) {
    const zone = isTokyo ? "Asia/Tokyo" : "America/Vancouver";
    const label = isTokyo ? "JST" : "PST";

    const [timeData, setTimeData] = useState({
    date: dayjs().tz(zone).format('ddd MMM D'),
    time: dayjs().tz(zone).format('hh:mm:ss A')
    });

    useEffect(() => {
    const timer = setInterval(() => {
      const now = dayjs().tz(zone);
      setTimeData({
        date: now.format('ddd MMM D'),
        time: now.format('hh:mm:ss A')
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [zone]);

    return (
    <div className="portfolio-clock">
      <span className="clock-label">{label}</span>
      <span className="clock-date">{timeData.date}</span>
      <span className="clock-time">{timeData.time}</span>
    </div>
    );
}