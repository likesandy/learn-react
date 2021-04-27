import { useState, useEffect } from "react";

export default function useLocalStorage() {
  const [name, setName] = useState(() => {
    const name = JSON.parse(window.localStorage.getItem("name"));
    return name;
  });

  useEffect(() => {
    window.localStorage.setItem("name", JSON.stringify(name));
  }, [name]);
  return [name, setName];
}
