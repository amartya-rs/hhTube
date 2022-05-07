import { createContext, useContext, useState, useEffect } from "react";
import { useAxios } from "../utils/useAxios";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
   const { response: categories, apiCall: getCategories } = useAxios();
   const { response: videoData, apiCall: getVideoData } = useAxios();
   const [currentCategory, setCurrentCategory] = useState("All");

   //fetching video categories
   useEffect(() => {
      getCategories("categories", { method: "get", url: "/api/categories" });
      // eslint-disable-next-line
   }, []);

   //fetching video data
   useEffect(() => {
      getVideoData("videos", { method: "get", url: "/api/videos" });
   }, []);

   //filtering videos based on selected category
   const videosToDisplay =
      videoData &&
      videoData.filter((ele) =>
         currentCategory.toLowerCase() === "all"
            ? true
            : ele.category.replaceAll(" ", "") ===
              currentCategory.toLowerCase().replaceAll(" ", "")
      );

   return (
      <VideoContext.Provider
         value={{
            categories,
            videosToDisplay,
            currentCategory,
            setCurrentCategory,
         }}
      >
         {children}
      </VideoContext.Provider>
   );
};

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider };
