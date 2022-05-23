import { Link, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FiUser, FiLogOut } from "react-icons/fi";
import { user_profile } from "../../assets/index";
import { useAuth, useTheme } from "../../context";
import { SearchBar } from "../index";
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
         <SearchBar />
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
               <div className="profile-wrapper">
                  <img
                     className="avatar-circle avatar-sm"
                     src={user_profile}
                     alt="user profile"
                  />
                  <div
                     className={`profile-hover-area ${
                        theme === "dark" ? "dark-mode-bg" : ""
                     }`}
                  >
                     <div onClick={() => navigate("/profile")}>
                        <FiUser title="login" />
                        <span className="font-medium">Profile</span>
                     </div>
                     <div onClick={() => logoutUser()}>
                        <FiLogOut title="logout" />
                        <span className="font-medium">Logout</span>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </nav>
   );
};

export { TopNav };
