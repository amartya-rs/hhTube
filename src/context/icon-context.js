import { IconContext } from "react-icons";

const IconProvider = ({ children }) => {
   return (
      <IconContext.Provider
         value={{ color: "rgb(145, 55, 135)", size: "28px" }}
      >
         {children}
      </IconContext.Provider>
   );
};

export { IconProvider };
