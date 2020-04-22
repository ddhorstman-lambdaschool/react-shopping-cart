import React from "react";
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = React.useState(
    () => JSON.parse(window.localStorage.getItem(key)) ?? initialValue
  );

  const setValueLocalStorage = (newValue) => {
    window.localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };
  return [value, setValueLocalStorage];
}
