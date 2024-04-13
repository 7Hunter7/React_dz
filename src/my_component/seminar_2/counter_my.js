import { useState } from "react";

function MyCounter() {
  const [count, setCount] = useState(0);

  const appCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <span>{count}</span>
      <button onClick={appCount}> Плюс 1</button>
    </div>
  );
}

export default MyCounter;
