import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === "light" ? "dark" : "light"));

  return { theme, toggleTheme };
};

export default useTheme;
