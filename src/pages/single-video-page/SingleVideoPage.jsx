import { useParams } from "react-router-dom";
import { useVideo } from "../../context/video-context";
import { isPresentInData } from "../../utils/isPresentInData";
import { useLocation, useNavigate } from "react-router-dom";

import { useLike, useAuth, useWatchlater, usePlaylist } from "../../context";
import {
   MdOutlineWatchLater,
   MdPlaylistAdd,
   MdWatchLater,
} from "react-icons/md";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import "./single-video-page.css";

const SingleVideoPage = () => {
   const { videoId } = useParams();
   const { videoData } = useVideo();
   const { authState } = useAuth();
   const { pathname } = useLocation();
   const navigate = useNavigate();

   const { likedVideos, addToLike, removeFromLike } = useLike();
   const { toggleModal, setVideoToAdd } = usePlaylist();
   const { watchlaterVideos, addToWatchlater, removeFromWatchlater } =
      useWatchlater();

   const selectedVideo = videoData?.find((video) => video._id === videoId);

   return (
      <div className="page">
         <div className="iframe-wrapper my-2">
            <iframe
               src={`https://www.youtube.com/embed/${videoId}`}
               title="YouTube video player"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
            />
         </div>

         {selectedVideo && (
            <div className="video-details">
               <h4 className="font-semibold">{selectedVideo.title}</h4>
               <p className="p font-medium">
                  {`${selectedVideo.views} views`}
                  <span className="h5"> . </span>
                  {"  "}
                  {selectedVideo.date}
               </p>
               <hr className="mt-1 mb-2" />
               <div className="video-content">
                  <img
                     className="avatar-circle avatar-sm"
                     src={selectedVideo.channelThumbnail}
                     alt="channel thumbnail"
                  ></img>
                  <div>
                     <p className="p font-semibold">
                        {selectedVideo.channelName}
                     </p>
                     <p className="p ">
                        {selectedVideo.subscribers} subscribers
                     </p>
                  </div>
               </div>
               <div className="icon-container">
                  <span>
                     {isPresentInData(likedVideos, selectedVideo?._id) &&
                     authState.isLoggedIn ? (
                        <AiFillLike
                           title="unlike video"
                           className="video-page-icons"
                           onClick={(e) => {
                              e.stopPropagation();
                              authState.isLoggedIn
                                 ? removeFromLike(selectedVideo)
                                 : navigate("/login");
                           }}
                        />
                     ) : (
                        <AiOutlineLike
                           title="like video"
                           className="video-page-icons"
                           onClick={(e) => {
                              e.stopPropagation();
                              authState.isLoggedIn
                                 ? addToLike(selectedVideo)
                                 : navigate("/login");
                           }}
                        />
                     )}
                  </span>
                  <span>
                     {isPresentInData(watchlaterVideos, selectedVideo?._id) &&
                     authState.isLoggedIn ? (
                        <MdWatchLater
                           title="remove from watchlater"
                           className="video-page-icons"
                           onClick={(e) => {
                              e.stopPropagation();
                              authState.isLoggedIn
                                 ? removeFromWatchlater(selectedVideo)
                                 : navigate("/login");
                           }}
                        />
                     ) : (
                        <MdOutlineWatchLater
                           title="add to watchlater"
                           className="video-page-icons"
                           onClick={(e) => {
                              e.stopPropagation();
                              authState.isLoggedIn
                                 ? addToWatchlater(selectedVideo)
                                 : navigate("/login");
                           }}
                        />
                     )}
                  </span>
                  <span>
                     <MdPlaylistAdd
                        title="add to playlist"
                        className="video-page-icons"
                        onClick={(e) => {
                           if (pathname !== "/playlist") {
                              e.stopPropagation();
                              if (authState.isLoggedIn) {
                                 setVideoToAdd(selectedVideo);
                                 toggleModal();
                              } else {
                                 navigate("/login");
                              }
                           }
                        }}
                     />
                  </span>
               </div>
               <div className="my-2">
                  <p>{selectedVideo.description}</p>
               </div>
            </div>
         )}
      </div>
   );
};

export { SingleVideoPage };
