import { createContext, useContext, useEffect } from "react";
import { useAxios } from "../utils/useAxios";

const LikeContext = createContext();

const LikeProvider = ({ children }) => {
   const { response: likedVideos, apiCall: getLikedVideos } = useAxios();

   //fetching liked videos
   useEffect(() => {
      getLikedVideos("likes", {
         method: "get",
         url: "/api/user/likes",
         headers: {
            accept: "*/*",
            authorization: localStorage.getItem("token"),
         },
         data: {},
      });
   }, []);

   //add a video to liked videos
   const addToLike = (video) => {
      getLikedVideos("likes", {
         method: "post",
         url: "/api/user/likes",
         headers: {
            accept: "*/*",
            authorization: localStorage.getItem("token"),
         },
         data: { video: video },
      });
   };

   //remove a video from liked videos
   const removeFromLike = (video) => {
      getLikedVideos("likes", {
         method: "delete",
         url: `/api/user/likes/${video._id}`,
         headers: {
            accept: "*/*",
            authorization: localStorage.getItem("token"),
         },
         data: {},
      });
   };

   return (
      <LikeContext.Provider
         value={{
            likedVideos,
            addToLike,
            removeFromLike,
         }}
      >
         {children}
      </LikeContext.Provider>
   );
};

const useLike = () => useContext(LikeContext);

export { LikeProvider, useLike };
