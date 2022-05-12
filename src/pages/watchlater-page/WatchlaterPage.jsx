import { useWatchlater } from "../../context";
import { VideoCard } from "../../components";

const WatchlaterPage = () => {
   const { watchlaterVideos } = useWatchlater();

   return (
      <main className="page my-2">
         {watchlaterVideos.length !== 0 ? (
            <section className="video-section">
               {watchlaterVideos?.map((ele) => (
                  <VideoCard key={ele._id} videoData={ele} />
               ))}
            </section>
         ) : (
            <h3 className="no-video-msg">No videos in watchlater</h3>
         )}
      </main>
   );
};

export { WatchlaterPage };
