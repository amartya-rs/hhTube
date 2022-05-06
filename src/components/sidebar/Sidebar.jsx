import "./sidebar.css";
import {
   MdOutlineExplore,
   MdOutlineWatchLater,
   MdOutlineHistory,
   MdPlaylistPlay,
} from "react-icons/md";
import { AiOutlineLike, AiOutlineHome } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
   const navigate = useNavigate();
   const { pathname } = useLocation();

   return (
      <aside className="pl-4 mt-1">
         <ul className="side-nav font-medium">
            <li
               className={pathname === "/" ? "active font-semibold" : ""}
               onClick={() => navigate("/")}
            >
               <AiOutlineHome />
               <span>Home</span>
            </li>
            <li
               onClick={() => navigate("/explore")}
               className={pathname === "/explore" ? "active font-semibold" : ""}
            >
               <MdOutlineExplore />
               <span>Explore</span>
            </li>
            <li
               onClick={() => navigate("/watchlater")}
               className={
                  pathname === "/watchlater" ? "active font-semibold" : ""
               }
            >
               <MdOutlineWatchLater />
               <span>Watch Later</span>
            </li>
            <li
               onClick={() => navigate("/history")}
               className={pathname === "/history" ? "active font-semibold" : ""}
            >
               <MdOutlineHistory />
               <span>History</span>
            </li>
            <li
               onClick={() => navigate("/likedvideos")}
               className={
                  pathname === "/likedvideos" ? "active font-semibold" : ""
               }
            >
               <AiOutlineLike />
               <span>Liked Videos</span>
            </li>
            <li
               onClick={() => navigate("/playlist")}
               className={
                  pathname === "/playlist" ? "active font-semibold" : ""
               }
            >
               <MdPlaylistPlay />
               <span>Playlist</span>
            </li>
         </ul>
      </aside>
   );
};

export { Sidebar };
