import { useEffect, useState } from "react";

const eventManager = new EventTarget();

const useStoredValue = <T>(
  saveAs: string,
  initialValue?: T,
): [T | undefined, (newValue: T) => void] => {
  const [val, setVal] = useState<T | undefined>(initialValue);
  const update = (newValue: T) => {
    localStorage.setItem(saveAs, JSON.stringify(newValue));
    eventManager.dispatchEvent(
      new CustomEvent("updated:" + saveAs, { detail: newValue }),
    );
    setVal(newValue);
  };

  useEffect(() => {
    setVal(JSON.parse(localStorage.getItem(saveAs) || "null") as T);

    eventManager.addEventListener("updated:" + saveAs, (event) => {
      setVal((event as CustomEvent).detail);
    });
  }, [saveAs]);

  return [val, update];
};

export default useStoredValue;
