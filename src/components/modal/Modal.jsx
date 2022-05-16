import "./modal.css";
import { MdOutlineClose } from "react-icons/md";
import { usePlaylist } from "../../context/playlist-context";
import { useLocation } from "react-router-dom";

const Modal = () => {
   const { pathname } = useLocation();
   const {
      playlistDetails,
      setPlaylistDetails,
      modalIsOpen,
      toggleModal,
      playlists,
      createNewPlaylist,
      videoToAdd,
      addVideoToPlaylist,
   } = usePlaylist();

   return (
      <div className={`modal-container ${!modalIsOpen ? "hide-modal" : ""}`}>
         <div className="modal">
            {pathname === "/playlist" ? (
               <h5>Create new playlist</h5>
            ) : (
               <h5>Save to...</h5>
            )}
            {pathname === "/playlist" ? (
               ""
            ) : (
               <div className="playlist-wrapper">
                  {playlists?.map((ele) => (
                     <li className="playlist-items" key={ele._id}>
                        <button
                           className="button primary h6 font-medium"
                           onClick={() =>
                              addVideoToPlaylist(ele._id, videoToAdd)
                           }
                        >
                           {ele.title}
                        </button>
                     </li>
                  ))}
               </div>
            )}
            <button
               className="corner-button"
               onClick={() => {
                  toggleModal();
                  setPlaylistDetails({
                     title: "",
                     description: "",
                  });
               }}
            >
               <MdOutlineClose />
            </button>
            <div className="input-group">
               <label className="font-medium">
                  * Title
                  <input
                     type="text"
                     className="text-input"
                     value={playlistDetails.title}
                     onChange={(e) =>
                        setPlaylistDetails({
                           ...playlistDetails,
                           title: e.target.value,
                        })
                     }
                  />
               </label>
            </div>
            <div className="input-group">
               <label className="font-medium">
                  * Description
                  <input
                     type="text"
                     className="text-input"
                     value={playlistDetails.description}
                     onChange={(e) =>
                        setPlaylistDetails({
                           ...playlistDetails,
                           description: e.target.value,
                        })
                     }
                  />
               </label>
            </div>
            <div className="modal-footer">
               <button className="button secondary" onClick={createNewPlaylist}>
                  CREATE PLAYLIST
               </button>
            </div>
         </div>
      </div>
   );
};

export { Modal };
