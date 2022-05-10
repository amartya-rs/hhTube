import { Link, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import "./top-nav.css";
import { useAuth } from "../../context/auth-context";

const TopNav = () => {
   const navigate = useNavigate();
   const { authState, logoutUser } = useAuth();

   return (
      <nav className="main-nav">
         <Link to="/">
            <span className="h5 brand">hhTube</span>
         </Link>
         {!authState.isLoggedIn ? (
            <BiUserCircle
               color="white"
               size="2.15rem"
               title="login"
               style={{ cursor: "pointer" }}
               onClick={() => navigate("/login")}
            />
         ) : (
            <MdLogout
               color="white"
               size="2.15rem"
               title="logout"
               style={{ cursor: "pointer" }}
               onClick={() => logoutUser()}
            />
         )}
      </nav>
   );
};

export { TopNav };
