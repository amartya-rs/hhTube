import { createContext, useContext, useEffect } from "react";
import { useAxios } from "../utils/useAxios";
import { useAuth } from "./auth-context";
import { toastSuccess, toastInfo } from "../utils/useToast";

const WatchlaterContext = createContext();

const WatchlaterProvider = ({ children }) => {
   const { authState } = useAuth();
   const { response: watchlaterVideos, apiCall: watchlaterOperation } =
      useAxios();

   //fetching watchlater videos
   useEffect(() => {
      if (authState.isLoggedIn) {
         watchlaterOperation("watchlater", {
            method: "get",
            url: "/api/user/watchlater",
            headers: {
               accept: "*/*",
               authorization: localStorage.getItem("token"),
            },
         });
      }
      // eslint-disable-next-line
   }, [authState.isLoggedIn]);

   //add a video to watchlater videos
   const addToWatchlater = (video) => {
      watchlaterOperation("watchlater", {
         method: "post",
         url: "/api/user/watchlater",
         headers: {
            accept: "*/*",
            authorization: localStorage.getItem("token"),
         },
         data: { video: video },
      });
      toastSuccess("Added to watchlater");
   };

   //remove a video from watchlater videos
   const removeFromWatchlater = (video) => {
      watchlaterOperation("watchlater", {
         method: "delete",
         url: `/api/user/watchlater/${video._id}`,
         headers: {
            accept: "*/*",
            authorization: localStorage.getItem("token"),
         },
      });
      toastInfo("Removed from watchlater");
   };
   return (
      <WatchlaterContext.Provider
         value={{
            watchlaterVideos,
            addToWatchlater,
            removeFromWatchlater,
         }}
      >
         {children}
      </WatchlaterContext.Provider>
   );
};

const useWatchlater = () => useContext(WatchlaterContext);

export { WatchlaterProvider, useWatchlater };
