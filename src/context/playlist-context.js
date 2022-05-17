import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "../utils/useAxios";
import { useAuth } from "./auth-context";
import { toastSuccess, toastInfo, toastError } from "../utils/useToast";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
   const { authState } = useAuth();
   const {
      response: playlists,
      apiCall: playlistOperation,
      setResponse: updatePlaylist,
   } = useAxios();

   const {
      response: singlePlaylist,
      apiCall: singlePlaylistOperation,
      setResponse: resetSinglePlaylist,
      error: singlePlaylistError,
      setError: resetError,
      status,
   } = useAxios();

   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [videoToAdd, setVideoToAdd] = useState("");
   const [playlistToShowId, setplaylistToShowId] = useState("");
   const [playlistDetails, setPlaylistDetails] = useState({
      title: "",
      description: "",
   });

   //toggle playlist modal
   const toggleModal = () => {
      setModalIsOpen((prev) => !prev);
   };

   //show toast if status is 201
   useEffect(() => {
      if (singlePlaylist !== undefined && singlePlaylistError === "") {
         if (status === 201) {
            toastSuccess("Video added to playlist");
         }
      }
   }, [singlePlaylist, status, singlePlaylistError]);

   //updating playlists after adding a video to individual/single playlist
   useEffect(() => {
      if (singlePlaylistError !== "") {
         toastError(singlePlaylistError[0]);
         resetError("");
      }
      if (singlePlaylist !== undefined && singlePlaylistError === "") {
         const updatedPlaylist = playlists.map((ele) =>
            ele._id === singlePlaylist._id ? singlePlaylist : ele
         );
         updatePlaylist(updatedPlaylist);
         resetSinglePlaylist(undefined);
      }
      // eslint-disable-next-line
   }, [singlePlaylist, singlePlaylistError]);

   //fetching playlists
   useEffect(() => {
      if (authState.isLoggedIn) {
         playlistOperation("playlists", {
            method: "get",
            url: "/api/user/playlists",
            headers: {
               accept: "*/*",
               authorization: localStorage.getItem("token"),
            },
         });
      }
      // eslint-disable-next-line
   }, [authState.isLoggedIn]);

   //create a new playlist
   const createNewPlaylist = () => {
      if (playlistDetails.title !== "" && playlistDetails.description !== "") {
         playlistOperation("playlists", {
            method: "post",
            url: "/api/user/playlists",
            headers: {
               accept: "*/*",
               authorization: localStorage.getItem("token"),
            },
            data: { playlist: playlistDetails },
         });
         setPlaylistDetails({
            title: "",
            description: "",
         });
         toastSuccess("Playlist created");
      } else {
         toastError("Enter playlist details");
      }
   };

   //remove a playlist
   const removePlaylist = (playlist) => {
      playlistOperation("playlists", {
         method: "delete",
         url: `/api/user/playlists/${playlist._id}`,
         headers: {
            accept: "*/*",
            authorization: localStorage.getItem("token"),
         },
      });
      toastInfo("Playlist deleted");
   };

   //add a video to playlist
   const addVideoToPlaylist = (playlistId, video) => {
      singlePlaylistOperation("playlist", {
         method: "post",
         url: `/api/user/playlists/${playlistId}`,
         headers: {
            accept: "*/*",
            authorization: localStorage.getItem("token"),
         },
         data: { video: video },
      });
   };

   //remove a video from playlist
   const removeVideoFromPlaylist = (playlistId, videoId) => {
      singlePlaylistOperation("playlist", {
         method: "delete",
         url: `/api/user/playlists/${playlistId}/${videoId}`,
         headers: {
            accept: "*/*",
            authorization: localStorage.getItem("token"),
         },
      });
      toastInfo("Video removed from playlist");
   };

   return (
      <PlaylistContext.Provider
         value={{
            videoToAdd,
            setVideoToAdd,
            playlists,
            createNewPlaylist,
            removePlaylist,
            addVideoToPlaylist,
            removeVideoFromPlaylist,
            modalIsOpen,
            toggleModal,
            playlistDetails,
            setPlaylistDetails,
            playlistToShowId,
            setplaylistToShowId,
         }}
      >
         {children}
      </PlaylistContext.Provider>
   );
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };
