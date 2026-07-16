import { useState, useEffect } from "react";

function Time() {
  const [time, SetTime] = useState(new Date().toLocaleTimeString("it-IT"));

  const updateTime = () => {
    return new Date().toLocaleTimeString("it-IT");
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      SetTime(updateTime());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <>
      <div>{time}</div>
    </>
  );
}

export default Time;
