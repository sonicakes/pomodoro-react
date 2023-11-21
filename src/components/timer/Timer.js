import { useTimer } from 'react-timer-hook';
import './timer.css';

function Timer({ expiryTimestamp }) {
    const {
      seconds,
      minutes,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called - the timer has run its course'), autoStart: false });
    const formatTime = (time) => {
      return String(time).padStart(2, "0");
    };
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Pomodoro timer </h1>
        <div className="timer">
       <span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span>
        </div>
        <p>{isRunning ? 'Running' : 'Not running'}</p>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button onClick={() => {
          // Restarts to 25 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 1500);
          restart(time)
        }}>Restart</button>
      </div>
    );
  }
export default Timer;