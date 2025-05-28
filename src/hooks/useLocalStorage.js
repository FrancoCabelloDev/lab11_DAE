import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch (e) {
      console.error(`Error reading localStorage key “${key}”:`, e);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.error(`Error setting localStorage key “${key}”:`, e);
    }
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;