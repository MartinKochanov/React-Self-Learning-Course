import React, { useState, useEffect } from "react";

function DigitalClock() {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime() {

        // let hours = ('0' + time.getHours()).slice(-2);
        // const minutes = ('0' + time.getMinutes()).slice(-2);
        // const seconds = ('0' + time.getSeconds()).slice(-2);
        // const meridiem = hours >= 12 ? "PM" : "AM";

        // hours = hours % 12 || 12;

        // return `${hours}:${minutes}:${seconds} ${meridiem}`

        // 24h format
        const hours = ('0' + time.getHours()).slice(-2);
        const minutes = ('0' + time.getMinutes()).slice(-2);
        const seconds = ('0' + time.getSeconds()).slice(-2);

        return `${hours}:${minutes}:${seconds}`
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;