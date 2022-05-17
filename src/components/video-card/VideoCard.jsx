import "./video-card.css";
import {
   MdOutlineWatchLater,
   MdPlaylistAdd,
   MdWatchLater,
   MdDeleteForever,
} from "react-icons/md";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import {
   useLike,
   useAuth,
   useWatchlater,
   useHistory,
   usePlaylist,
} from "../../context";
import { isPresentInData } from "../../utils/isPresentInData";
import { useLocation, useNavigate } from "react-router-dom";

const VideoCard = ({ videoData }) => {
   const { authState } = useAuth();
   const navigate = useNavigate();
   const { pathname } = useLocation();
   const { likedVideos, addToLike, removeFromLike } = useLike();
   const { watchlaterVideos, addToWatchlater, removeFromWatchlater } =
      useWatchlater();
   const { addToHistory, removeFromHistory } = useHistory();
   const {
      toggleModal,
      setVideoToAdd,
      removeVideoFromPlaylist,
      playlistToShowId,
   } = usePlaylist();

   return (
      <div
         className="video-card"
         onClick={() => {
            addToHistory(videoData);
            navigate(`/video/${videoData._id}`);
         }}
      >
         <img
            src={`http://img.youtube.com/vi/${videoData._id}/maxresdefault.jpg`}
            alt="video thumbnail"
            className="res-img"
         />
         <div className="card-footer">
            <img
               className="avatar-circle avatar-sm"
               src={videoData.channelThumbnail}
               alt="channel thumbnail"
            ></img>
            <div className="icon-wrapper">
               {pathname === "/history" && (
                  <span className="delete-icon">
                     <MdDeleteForever
                        title="remove from history"
                        color="rgb(215, 50, 50)"
                        onClick={(e) => {
                           e.stopPropagation();
                           removeFromHistory(videoData);
                        }}
                     />
                  </span>
               )}
               {pathname === "/playlist" && (
                  <span className="delete-icon">
                     <MdDeleteForever
                        title="remove from playlist"
                        color="rgb(215, 50, 50)"
                        onClick={(e) => {
                           e.stopPropagation();
                           removeVideoFromPlaylist(
                              playlistToShowId,
                              videoData._id
                           );
                        }}
                     />
                  </span>
               )}
               <span>
                  {isPresentInData(likedVideos, videoData._id) &&
                  authState.isLoggedIn ? (
                     <AiFillLike
                        title="unlike video"
                        className="card-icon"
                        onClick={(e) => {
                           e.stopPropagation();
                           authState.isLoggedIn
                              ? removeFromLike(videoData)
                              : navigate("/login");
                        }}
                     />
                  ) : (
                     <AiOutlineLike
                        title="like video"
                        className="card-icon"
                        onClick={(e) => {
                           e.stopPropagation();
                           authState.isLoggedIn
                              ? addToLike(videoData)
                              : navigate("/login");
                        }}
                     />
                  )}
               </span>
               <span>
                  {isPresentInData(watchlaterVideos, videoData._id) &&
                  authState.isLoggedIn ? (
                     <MdWatchLater
                        title="remove from watchlater"
                        className="card-icon"
                        onClick={(e) => {
                           e.stopPropagation();
                           authState.isLoggedIn
                              ? removeFromWatchlater(videoData)
                              : navigate("/login");
                        }}
                     />
                  ) : (
                     <MdOutlineWatchLater
                        title="add to watchlater"
                        className="card-icon"
                        onClick={(e) => {
                           e.stopPropagation();
                           authState.isLoggedIn
                              ? addToWatchlater(videoData)
                              : navigate("/login");
                        }}
                     />
                  )}
               </span>
               <span>
                  <MdPlaylistAdd
                     title="add to playlist"
                     className="card-icon"
                     onClick={(e) => {
                        if (pathname !== "/playlist") {
                           e.stopPropagation();
                           if (authState.isLoggedIn) {
                              setVideoToAdd(videoData);
                              toggleModal();
                           } else {
                              navigate("/login");
                           }
                        }
                     }}
                  />
               </span>
            </div>
            <span className="time-badge">{videoData.videoLength}</span>
            <div className="video-content">
               <h6 className="font-semibold">{videoData.title}</h6>
               <p className="p-sm font-medium">{videoData.channelName}</p>
               <p className="p-sm font-medium">
                  {`${videoData.views} views`}
                  <span className="h5"> . </span>
                  {"  "}
                  {videoData.date}
               </p>
            </div>
         </div>
      </div>
   );
};

export { VideoCard };
