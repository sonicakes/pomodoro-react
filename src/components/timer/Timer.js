import { useTimer } from "react-timer-hook";
import "./timer.css";
import { Button } from "@chakra-ui/react";



function Timer({ expiryTimestamp, length, type }) {

  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () =>
        console.log("onExpire called - the timer has run its course", 'alarm'),
      autoStart: false,
    });
  const formatTime = (time) => {
    return String(time).padStart(2, "0");
  };
 
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{type}</h1>
      <div className="timer">
        <span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <Button colorScheme="blue" onClick={start}>
        Start
      </Button>
      <Button colorScheme="blue" onClick={pause}>
        Pause
      </Button>
      <Button colorScheme="blue" onClick={resume}>
        Resume
      </Button>
      <Button
        colorScheme="blue"
        onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + length);
          restart(time);
        }}
      >
        Restart
      </Button>
    </div>
  );
}
export default Timer;
