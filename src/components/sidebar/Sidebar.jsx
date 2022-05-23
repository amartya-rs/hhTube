import "./sidebar.css";
import {
   MdOutlineExplore,
   MdOutlineWatchLater,
   MdOutlineHistory,
   MdPlaylistPlay,
} from "react-icons/md";
import { AiOutlineLike, AiOutlineHome } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../../context";

const Sidebar = () => {
   const navigate = useNavigate();
   const { pathname } = useLocation();
   const { theme } = useTheme();

   return (
      <aside className="pl-4 mt-1">
         <ul className="side-nav font-medium">
            <li
               className={
                  pathname === "/"
                     ? `${
                          theme === "dark" ? "dark-mode-active" : "active"
                       } font-semibold`
                     : ""
               }
               onClick={() => navigate("/")}
            >
               <AiOutlineHome title="Home" />
               <span>Home</span>
            </li>
            <li
               onClick={() => navigate("/explore")}
               className={
                  pathname === "/explore"
                     ? `${
                          theme === "dark" ? "dark-mode-active" : "active"
                       } font-semibold`
                     : ""
               }
            >
               <MdOutlineExplore title="Explore" />
               <span>Explore</span>
            </li>
            <li
               onClick={() => navigate("/playlist")}
               className={
                  pathname === "/playlist"
                     ? `${
                          theme === "dark" ? "dark-mode-active" : "active"
                       } font-semibold`
                     : ""
               }
            >
               <MdPlaylistPlay title="Playlist" />
               <span>Playlist</span>
            </li>
            <li
               onClick={() => navigate("/likedvideos")}
               className={
                  pathname === "/likedvideos"
                     ? `${
                          theme === "dark" ? "dark-mode-active" : "active"
                       } font-semibold`
                     : ""
               }
            >
               <AiOutlineLike title="Liked" />
               <span>Liked Videos</span>
            </li>
            <li
               onClick={() => navigate("/watchlater")}
               className={
                  pathname === "/watchlater"
                     ? `${
                          theme === "dark" ? "dark-mode-active" : "active"
                       } font-semibold`
                     : ""
               }
            >
               <MdOutlineWatchLater title="Watchlater" />
               <span>Watch Later</span>
            </li>
            <li
               onClick={() => navigate("/history")}
               className={
                  pathname === "/history"
                     ? `${
                          theme === "dark" ? "dark-mode-active" : "active"
                       } font-semibold`
                     : ""
               }
            >
               <MdOutlineHistory title="History" />
               <span>History</span>
            </li>
         </ul>
      </aside>
   );
};

export { Sidebar };
