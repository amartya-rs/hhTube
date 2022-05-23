import { createContext, useContext, useState, useEffect } from "react";
import { useAxios } from "../utils/useAxios";
import { filterBySearchInput, filterByCategory } from "../utils";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
   const { response: categories, apiCall: getCategories } = useAxios();
   const { response: videoData, apiCall: getVideoData } = useAxios();
   const [currentCategory, setCurrentCategory] = useState("All");
   const [searchInput, setSearchInput] = useState("");

   //fetching video categories
   useEffect(() => {
      getCategories("categories", { method: "get", url: "/api/categories" });
      // eslint-disable-next-line
   }, []);

   //fetching video data
   useEffect(() => {
      getVideoData("videos", { method: "get", url: "/api/videos" });
   }, []);

   const filteredVideosBySearchInput = filterBySearchInput(
      videoData,
      searchInput
   );

   const videosToDisplay = filterByCategory(
      filteredVideosBySearchInput,
      currentCategory
   );

   return (
      <VideoContext.Provider
         value={{
            videoData,
            categories,
            videosToDisplay,
            currentCategory,
            setCurrentCategory,
            searchInput,
            setSearchInput,
         }}
      >
         {children}
      </VideoContext.Provider>
   );
};

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider };
