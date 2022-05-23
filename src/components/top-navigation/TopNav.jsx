import { Link, useNavigate, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { MdClose, MdSearch } from "react-icons/md";
import { FiUser, FiLogOut } from "react-icons/fi";
import { user_profile } from "../../assets/index";
import { useAuth, useTheme, useVideo } from "../../context";
import "./top-nav.css";

const TopNav = () => {
   const navigate = useNavigate();
   const { authState, logoutUser } = useAuth();
   const { theme, setTheme } = useTheme();
   const { searchInput, setSearchInput } = useVideo();
   const { pathname } = useLocation();

   const searchHandler = (value) => {
      setSearchInput(value.toLowerCase());
      pathname !== "/explore" && navigate("/explore");
   };

   return (
      <nav className="main-nav">
         <Link to="/">
            <span className="h5 brand">hhTube</span>
         </Link>
         <div className="search-bar">
            <input
               className="text-input"
               type="text"
               placeholder="Search"
               value={searchInput}
               onChange={(e) => searchHandler(e.target.value)}
            />
            {searchInput.length === 0 ? (
               <MdSearch />
            ) : (
               <MdClose onClick={() => setSearchInput("")} />
            )}
         </div>
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
