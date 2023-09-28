import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
  const [isUserOnline, setIsUserOnline] = useState(true);

  const updateOnlineStatus = () => {
    setIsUserOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return isUserOnline;
};

export default useOnlineStatus;
