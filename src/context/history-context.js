import { createContext, useContext, useEffect } from "react";
import { useAxios } from "../utils/useAxios";
import { useAuth } from "./auth-context";
import { toastInfo, toastError } from "../utils/useToast";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
   const { authState } = useAuth();
   const { response: historyVideos, apiCall: historyOperation } = useAxios();

   //fetching videos in history
   useEffect(() => {
      if (authState.isLoggedIn) {
         historyOperation("history", {
            method: "get",
            url: "/api/user/history",
            headers: {
               accept: "*/*",
               authorization: localStorage.getItem("token"),
            },
         });
      }
      // eslint-disable-next-line
   }, [authState.isLoggedIn]);

   //add a video to history
   const addToHistory = (video) => {
      historyOperation("history", {
         method: "post",
         url: "/api/user/history",
         headers: {
            accept: "*/*",
            authorization: localStorage.getItem("token"),
         },
         data: { video: video },
      });
   };

   //remove a video from history
   const removeFromHistory = (video) => {
      historyOperation("history", {
         method: "delete",
         url: `/api/user/history/${video._id}`,
         headers: {
            accept: "*/*",
            authorization: localStorage.getItem("token"),
         },
      });
      toastInfo("Removed video from history");
   };

   //remove all videos from history
   const removeAllFromHistory = () => {
      if (historyVideos.length !== 0) {
         historyOperation("history", {
            method: "delete",
            url: `/api/user/history/all`,
            headers: {
               accept: "*/*",
               authorization: localStorage.getItem("token"),
            },
         });
         toastInfo("Cleared history");
      } else {
         toastError("Nothing to clear in history");
      }
   };

   return (
      <HistoryContext.Provider
         value={{
            historyVideos,
            addToHistory,
            removeFromHistory,
            removeAllFromHistory,
         }}
      >
         {children}
      </HistoryContext.Provider>
   );
};

const useHistory = () => useContext(HistoryContext);

export { HistoryProvider, useHistory };
