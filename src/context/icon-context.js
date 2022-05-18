import { IconContext } from "react-icons";
import { useTheme } from "./theme-context";

const IconProvider = ({ children }) => {
   const { theme } = useTheme();

   return (
      <IconContext.Provider
         value={{
            color: theme === "dark" ? "rgb(175, 70, 160)" : "rgb(145, 55, 135)",
            size: "28px",
         }}
      >
         {children}
      </IconContext.Provider>
   );
};

export { IconProvider };
