import { useState } from "react";

const useLocalStorage = (initialValue: any, key: string) => {
  const [storedData, setStoredData] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      setStoredData(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return { storedData, setStoredData: setValue };
};

export default useLocalStorage;

