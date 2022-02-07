import { useEffect, useState } from "react";

export default () => {
  const [tema, setTema] = useState("light");
  const toggleTema = () => {
    if (tema !== "dark") {
      localStorage.setItem("tema", "dark");
      setTema("dark");
    } else {
      localStorage.setItem("tema", "light");
      setTema("light");
    }
  };

  useEffect(() => {
    const localtema = localStorage.getItem("tema");
    if (localtema) {
      setTema(localtema);
    }
  }, []);

  return {
    tema,
    toggleTema,
  };
};
