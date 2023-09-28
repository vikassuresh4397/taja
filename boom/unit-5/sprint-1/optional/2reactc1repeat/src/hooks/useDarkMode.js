



import { useEffect, useState } from "react";

const useDarkMode = (initialValue = false) => {

  const [isDarkMode, setIsDarkMode] = useState(initialValue);

  const toggleDarkMode = () => {
    
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {

      body.classList.add("dark-mode");

    } else {

      body.classList.remove("dark-mode");

    }

  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;