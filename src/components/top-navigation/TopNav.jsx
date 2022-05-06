import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import "./top-nav.css";

const TopNav = () => {
   return (
      <>
         <nav className="main-nav">
            <Link to="/">
               <span className="h5 brand">hhTube</span>
            </Link>
            <BiUserCircle
               color="white"
               size="2.15rem"
               style={{ cursor: "pointer" }}
            />
         </nav>
      </>
   );
};

export { TopNav };
