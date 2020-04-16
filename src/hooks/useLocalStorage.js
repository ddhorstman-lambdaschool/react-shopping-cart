import React from "react";
export default function useLocalStorage(key, initialValue) {
  const initFromStorage = window.localStorage.getItem(key);
  const [value, setValue] = React.useState(() =>
    JSON.parse(initFromStorage ?? JSON.stringify(initialValue))
  );

  if (initFromStorage === null || initFromStorage === undefined)
    window.localStorage.setItem(key, JSON.stringify(initialValue));

  const setValueLocalStorage = (newValue) => {
    window.localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };
  return [value, setValueLocalStorage];
}
