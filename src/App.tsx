import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import Clock from "./components/Clock.tsx";

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

  function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let sec = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    if (minutes < 10) {
      "0" + minutes;
    }

    hours = hours % 12 || 12;
    if (hours < 10) {
      `0${hours}`;
    }
    console.log(hours);
    return `${hours}:${minutes}:${sec} '${meridiem}`;
  }

  return (
    <>
      <p>time</p>
      <Clock time={formatTime()} />
    </>
  );
}

export default App;
