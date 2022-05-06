import { createContext, useContext, useState, useEffect } from "react";
import { useAxios } from "../utils/useAxios";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
   const { response: categories, apiCall: getCategories } = useAxios();

   //fetching video categories
   useEffect(() => {
      getCategories("categories", { method: "get", url: "/api/categories" });
   }, []);

   return (
      <VideoContext.Provider value={{ categories }}>
         {children}
      </VideoContext.Provider>
   );
};

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider };
