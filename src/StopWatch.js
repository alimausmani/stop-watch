import React, { useState, useRef } from 'react';
import './StopWatch.css';

const StopWatchWatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const intervalRef = useRef(null);
    const startWatch = () => {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000); 
        }
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
            2,
            "0"
        )}`;
    };
    return (
        <>
            <div className="watch-container" >
                <div className="watch">
                    <div className="watch-face">
                        <div className="hand hour-hand"></div>
                        <div className="hand minute-hand"></div>
                        <div className="hand second-hand"></div>
                        <div className="center-circle"></div>
                    </div>
                </div>
                <div className="time-display">
                    {formatTime(time)} 
                </div> 
                <div className="controls">
                    <button className="control-button stop-button" onClick={startWatch}>Start</button>
                    <button className="control-button restart-button">Stop</button>
                    <button className="control-button stop-button-only">Restart</button>
                </div>
            </div>

        </>
    );
}

export default StopWatchWatch;



