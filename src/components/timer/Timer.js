import { useTimer } from 'react-timer-hook';

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
  
  
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Pomodoro timer </h1>
        <div style={{fontSize: '100px'}}>
         <span>{minutes}</span>:<span>{seconds}</span>
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