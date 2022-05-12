import "./video-card.css";
import { MdOutlineWatchLater, MdPlaylistAdd } from "react-icons/md";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { useLike, useAuth } from "../../context";
import { isPresentInData } from "../../utils/isPresentInData";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ videoData }) => {
   const { likedVideos, addToLike, removeFromLike } = useLike();
   const { authState } = useAuth();
   const navigate = useNavigate();

   return (
      <div className="video-card">
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
               <span>
                  {isPresentInData(likedVideos, videoData._id) ? (
                     <AiFillLike
                        title="unlike video"
                        className="card-icon"
                        onClick={() =>
                           authState.isLoggedIn
                              ? removeFromLike(videoData)
                              : navigate("/login")
                        }
                     />
                  ) : (
                     <AiOutlineLike
                        title="like video"
                        className="card-icon"
                        onClick={() =>
                           authState.isLoggedIn
                              ? addToLike(videoData)
                              : navigate("/login")
                        }
                     />
                  )}
               </span>
               <span>
                  <MdOutlineWatchLater className="card-icon" />
               </span>
               <span>
                  <MdPlaylistAdd className="card-icon" />
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
