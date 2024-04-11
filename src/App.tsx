import { useEffect, useState } from "react";
import "./App.css";
import Clock from "./components/Clock.tsx";
import TimerClock from "./components/TimerClock.tsx";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function ifZero(num: number) {
    return (num < 10 ? "0" : "") + num;
  }

  function formatTime() {
    let hours = time.getHours();
    // hours = hours % 12 || 12;
    let minutes = time.getMinutes();
    let sec = time.getSeconds();

    const meridiem = hours >= 12 ? "PM" : "AM";
    return `${hours}:${ifZero(minutes)}:${ifZero(sec)} '${meridiem}`;
  }

  return (
    <>
      <div className="container" id="center">
        <Clock time={formatTime()} />
        <TimerClock/>
      </div>
    </>
  );
}

export default App;
