import React, { useState, useEffect } from "react";

function MyTimer() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Timer:</h2>
      <p>{time}</p>
    </div>
  );
}
export default MyTimer;
