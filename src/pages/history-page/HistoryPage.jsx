import { useHistory } from "../../context";
import { VideoCard } from "../../components";

const HistoryPage = () => {
   const { historyVideos, removeAllFromHistory } = useHistory();

   return (
      <main className="page my-2">
         <button className="button primary mb-2" onClick={removeAllFromHistory}>
            CLEAR HISTORY
         </button>
         {historyVideos.length !== 0 ? (
            <section className="video-section">
               {historyVideos?.map((ele) => (
                  <VideoCard key={ele._id} videoData={ele} />
               ))}
            </section>
         ) : (
            <h3 className="no-video-msg">No videos in history</h3>
         )}
      </main>
   );
};

export { HistoryPage };
