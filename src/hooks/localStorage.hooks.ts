import { useEffect, useState } from "react";

const useLocalStorage = (state: any, storageKey: string) => {
  const [storedData, setStoredData] = useState<any>(state); // initial state

  useEffect(() => {
    const strData = localStorage.getItem(storageKey);
    if (strData !== null) {
      try {
        setStoredData(JSON.parse(strData));
      } catch {
        setStoredData(strData);
      }
    }
  }, [storageKey]);

  useEffect(() => {
    if (typeof state === 'object') {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } else {
      localStorage.setItem(storageKey, state.toString());
    }
  }, [state, storageKey]);

  return { storedData, setStoredData };
};

export default useLocalStorage;
