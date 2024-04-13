import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const appCount = () => {
    setCount(count + 1);
  };
  const downCount = () => {
    if (count === 0) {
      return 0;
    }
    setCount(count - 1);
  };

  return (
    <div>
      <h3>Cчетчик {count}</h3>
      <button onClick={appCount}>Плюс 1</button>
      <button onClick={downCount}>Минус 1</button>
    </div>
  );
}

export default Counter;
