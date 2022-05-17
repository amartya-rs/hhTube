import { createContext, useContext, useEffect } from "react";
import { useAxios } from "../utils/useAxios";
import { useAuth } from "./auth-context";
import { toastSuccess, toastInfo } from "../utils/useToast";

const LikeContext = createContext();

const LikeProvider = ({ children }) => {
   const { authState } = useAuth();
   const { response: likedVideos, apiCall: likeVideoOperation } = useAxios();

   //fetching liked videos
   useEffect(() => {
      if (authState.isLoggedIn) {
         likeVideoOperation("likes", {
            method: "get",
            url: "/api/user/likes",
            headers: {
               accept: "*/*",
               authorization: localStorage.getItem("token"),
            },
         });
      }
      // eslint-disable-next-line
   }, [authState.isLoggedIn]);

   //add a video to liked videos
   const addToLike = (video) => {
      likeVideoOperation("likes", {
         method: "post",
         url: "/api/user/likes",
         headers: {
            accept: "*/*",
            authorization: localStorage.getItem("token"),
         },
         data: { video: video },
      });
      toastSuccess("Added to liked videos");
   };

   //remove a video from liked videos
   const removeFromLike = (video) => {
      likeVideoOperation("likes", {
         method: "delete",
         url: `/api/user/likes/${video._id}`,
         headers: {
            accept: "*/*",
            authorization: localStorage.getItem("token"),
         },
      });
      toastInfo("Removed from liked videos");
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
