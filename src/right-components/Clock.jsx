import { useState, useEffect } from 'react';
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/ja';
import './clock.css';

dayjs.extend(utc);
dayjs.extend(timezone);

export function Clock ({ language }) {
    const zone = language === 'ja' ? "Asia/Tokyo" : "America/Vancouver";

    const getFormattedTime = () => { 
        return dayjs()
            .tz(zone)
            .locale(language)
            .format('dddd, MMM D  h:mm A');
    };

    const [timeStr, setTimeStr] = useState(getFormattedTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeStr(getFormattedTime());
        }, 1000);

        return () => clearInterval(timer);
    }, [language, zone]); // Effect re-runs immediately when timezone toggles

    return (
        <div className="apple-clock">
            {timeStr}
        </div>
    );
}