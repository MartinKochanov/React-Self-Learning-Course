import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false)
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {

        let hours = pad(Math.floor(elapsedTime / (1000 * 60 * 60)));
        let minutes = pad(Math.floor(elapsedTime / (1000 * 60) % 60));
        let seconds = pad(Math.floor(elapsedTime / (1000) % 60));
        let milliSeconds = pad(Math.floor(elapsedTime % 1000 / 10));


        return `${hours}:${minutes}:${seconds}:${milliSeconds}`
    }

    function pad(time) {
        return `0${time}`.slice(-2);
    }

    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button className="start-btn" onClick={start}>Start</button>
                <button className="stop-btn" onClick={stop}>Stop</button>
                <button className="reset-btn" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;