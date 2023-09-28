import { useState, useEffect } from 'react';

const useTimeout = (delay) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setReady(true);
    }, delay);

    return () => clearTimeout(timerId);
  }, [delay]);

  return { ready };
};

export default useTimeout;
