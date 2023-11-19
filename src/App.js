import Timer from "./components/timer/Timer";
//todo: why does it start with 25:0 instead of 25:00
function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1500); // 25 minutes timer
  return (
    <div className="App">
      <div>
        <Timer expiryTimestamp={time}/>
      </div>
    </div>
  );
}

export default App;
