import { usePlaylist } from "../../context";
import { VideoCard } from "../../components";
import { MdDeleteForever, MdPlaylistAdd } from "react-icons/md";
import { useEffect } from "react";
import "./playlist-page.css";

const PlaylistPage = () => {
   const {
      playlists,
      toggleModal,
      removePlaylist,
      playlistToShowId,
      setplaylistToShowId,
   } = usePlaylist();

   //if playlist to show is null the set the first playlist in playlists array
   useEffect(() => {
      if (playlists !== undefined) {
         if (playlists.length !== 0 && playlistToShowId === "") {
            setplaylistToShowId(playlists[0]._id);
         }
      }
      // eslint-disable-next-line
   }, [playlists]);

   //resetting the playlist to show to the first playlist in playlists array
   useEffect(() => {
      if (playlists !== undefined) {
         if (playlists.length !== 0) {
            setplaylistToShowId(playlists[0]._id);
         }
      }
      // eslint-disable-next-line
   }, []);

   return (
      <main className="playlist-page my-2">
         <div>
            <button
               className="button button-icons primary mb-2"
               onClick={toggleModal}
            >
               CREATE NEW PLAYLIST <MdPlaylistAdd color="white" size="24px" />
            </button>
            <h6 className="font-medium">Your playlists</h6>
            <hr className="mb-2" />
            <ul>
               {playlists?.map((ele) => (
                  <li className="playlist-items" key={ele._id}>
                     <button
                        className={`button ${
                           ele._id === playlistToShowId
                              ? "secondary"
                              : "outline-secondary"
                        } `}
                        onClick={() => setplaylistToShowId(ele._id)}
                     >
                        {ele.title}
                     </button>
                     <MdDeleteForever
                        title="delete playlist"
                        color="rgb(215, 50, 50)"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                           removePlaylist(ele);
                           setplaylistToShowId("");
                        }}
                     />
                  </li>
               ))}
            </ul>
         </div>
         <div>
            {playlists?.length !== 0 ? (
               <div>
                  <h5 className="ml-3 mb-2">
                     {
                        playlists?.filter(
                           (ele) => ele._id === playlistToShowId
                        )[0]?.["description"]
                     }
                  </h5>
                  <section className="video-section ml-3">
                     {playlists?.filter(
                        (ele) => ele._id === playlistToShowId
                     )[0]?.["videos"].length === 0 ? (
                        <h3 className="no-video-msg">Your playlist is empty</h3>
                     ) : (
                        playlists
                           ?.filter((ele) => ele._id === playlistToShowId)[0]
                           ?.["videos"]?.map((ele) => (
                              <VideoCard key={ele._id} videoData={ele} />
                           ))
                     )}
                  </section>
               </div>
            ) : (
               <h3 className="no-video-msg">Create playlist to add videos</h3>
            )}
         </div>
      </main>
   );
};

export { PlaylistPage };
