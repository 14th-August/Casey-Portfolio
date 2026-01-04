import { useState, useEffect } from 'react';
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import './clock.css';

dayjs.extend(utc);
dayjs.extend(timezone);

export function Clock ({ isTokyo }) {
    const zone = isTokyo ? "Asia/Tokyo" : "America/Vancouver";

    const getFormattedTime = () => dayjs().tz(zone).format('dddd, MMM D  h:mm A');

    const [timeStr, setTimeStr] = useState(getFormattedTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeStr(getFormattedTime());
        }, 1000);

        return () => clearInterval(timer);
    }, [zone]); // Effect re-runs immediately when timezone toggles

    return (
        <div className="apple-clock">
            {timeStr}
        </div>
    );
}