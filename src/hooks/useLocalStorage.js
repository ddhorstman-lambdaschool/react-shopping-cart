import React from "react";
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = React.useState(() =>
    JSON.parse(window.localStorage.getItem(key) ?? JSON.stringify(initialValue))
  );
  window.localStorage.setItem(key, JSON.stringify(initialValue));
  const setValueLocalStorage = (newValue) => {
    console.log("key: ", key);
    console.log("newValue: ", newValue);
    console.log("stringified",JSON.stringify(newValue));
    window.localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };
  return [value, setValueLocalStorage];
}
