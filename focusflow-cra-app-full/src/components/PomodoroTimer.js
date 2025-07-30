import { useState, useEffect, useRef } from "react";

const POMODORO_TIME = 25 * 60;

export default function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(POMODORO_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const alarmRef = useRef(null);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      if (alarmRef.current) alarmRef.current.play();
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const format = (s) => {
    const m = String(Math.floor(s / 60)).padStart(2, '0');
    const sec = String(s % 60).padStart(2, '0');
    return `${m}:${sec}`;
  };

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      textAlign: 'center',
      width: '300px'
    }}>
      <h2 style={{ marginBottom: '1rem' }}>Pomodoro Timer</h2>
      <div style={{
        fontSize: '2.5rem',
        fontFamily: 'monospace',
        marginBottom: '1rem'
      }}>{format(timeLeft)}</div>
      <div>
        <button onClick={() => setIsRunning(!isRunning)}
          style={{
            marginRight: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem'
          }}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={() => {
          setTimeLeft(POMODORO_TIME);
          setIsRunning(false);
        }}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem'
          }}>
          Reset
        </button>
      </div>

      {/* 🔊 Alarm audio element */}
      <audio ref={alarmRef}>
        <source src="alarm.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

