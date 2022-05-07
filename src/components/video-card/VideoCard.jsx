import "./video-card.css";
import { MdOutlineWatchLater, MdPlaylistAdd } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

const VideoCard = ({ videoData }) => {
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
                  <AiOutlineLike size="24px" />
               </span>
               <span>
                  <MdOutlineWatchLater size="24px" />
               </span>
               <span>
                  <MdPlaylistAdd size="24px" />
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
