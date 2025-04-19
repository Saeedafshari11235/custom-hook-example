import { useState } from "react";

export default function useCounter(prop) {
  const [count, setCount] = useState(prop);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return [count, increaseCount, decreaseCount];
}
