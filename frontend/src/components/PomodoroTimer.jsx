// export default function PomodoroTimer() {
//   return <div>Pomodoro Timer Coming Soon...</div>;
// }

import { useState, useEffect } from "react";

export default function PomodoroTimer(){

    const [secondsLeft, setSecondsLeft] = useState(1500); // 25 min in sec
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const [sessionCount, setSessionCount] = useState(0);

    useEffect(() => {
        let interval = null;
        if (isActive && secondsLeft > 0){
            interval = setInterval(() => {
                setSecondsLeft((prev) => prev - 1);
            }, 1000);
        } else if (secondsLeft === 0) {
            clearInterval(interval);
            if (!isBreak) sessionCount((prev) => prev + 1);
            setIsBreak((prev) => !prev);
            setSecondsLeft(isBreak ? 1500 : 300); // switch modes
        }
        return () => clearInterval(interval);
    },[isActive, secondsLeft, isBreak]);

    const startTimer = () => setIsActive(true);
    const resetTimer = () => {
        setIsActive(false);
        setSecondsLeft(isBreak ? 300 : 1500);
    };

    const skipToBreak = () => {
        setIsActive(false);
        setIsBreak(true);
        setSecondsLeft(300);
    };

    const formatTime = (secs) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m.toString().padStart(2,'0')} : ${s.toString().padStart(2, '0')}`
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>{isBreak ? 'Break Time' : 'Focus Time'}</h2>
            <h1>{formatTime(secondsLeft)}</h1>
            <p>Sessions Completed: {sessionCount}</p>
            <button onClick={startTimer}>Start</button>
            <button onClick={resetTimer}>Reset</button>
            {!isBreak && <button onClick={skipToBreak}>Skip to Break</button>}
        </div>
    );
}