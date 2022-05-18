import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
   const setUserTheme = () => {
      const userTheme = localStorage.getItem("theme");
      return userTheme === null ? "light" : userTheme;
   };

   const [theme, setTheme] = useState(setUserTheme());

   useEffect(() => {
      localStorage.setItem("theme", theme);
   }, [theme]);

   return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
