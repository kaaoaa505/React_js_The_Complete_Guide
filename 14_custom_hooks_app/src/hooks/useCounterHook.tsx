import { useEffect, useState } from "react";

const useCounterHook = (increment_number: number) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev_counter) => prev_counter + increment_number);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounterHook;