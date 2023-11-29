import Timer from "../timer/Timer";

function TimerWrapper({ type }) {
  const time = new Date();
  const timerLength = 10;
    // type === "Pomodoro Session" ? 1500 : type === "Short Break" ? 300 : 900;

  time.setSeconds(time.getSeconds() + timerLength);
  return (
    <div>
      <Timer expiryTimestamp={time} length={timerLength} timerType={type}/>
    </div>
  );
}
export default TimerWrapper;
