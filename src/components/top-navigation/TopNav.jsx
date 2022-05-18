import { Link, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { useAuth, useTheme } from "../../context";
import "./top-nav.css";

const TopNav = () => {
   const navigate = useNavigate();
   const { authState, logoutUser } = useAuth();
   const { theme, setTheme } = useTheme();

   return (
      <nav className="main-nav">
         <Link to="/">
            <span className="h5 brand">hhTube</span>
         </Link>
         <div className="nav-icon-wrapper">
            {theme === "dark" ? (
               <BsSunFill
                  color="white"
                  size="1.65rem"
                  title="light mode"
                  onClick={() => setTheme("light")}
               />
            ) : (
               <BsMoonFill
                  color="white"
                  size="1.65rem"
                  title="dark mode"
                  onClick={() => setTheme("dark")}
               />
            )}
            {!authState.isLoggedIn ? (
               <BiUserCircle
                  color="white"
                  size="2rem"
                  title="login"
                  onClick={() => navigate("/login")}
               />
            ) : (
               <MdLogout
                  color="white"
                  size="2rem"
                  title="logout"
                  onClick={() => logoutUser()}
               />
            )}
         </div>
      </nav>
   );
};

export { TopNav };
