import { useLike } from "../../context";
import { VideoCard } from "../../components";

const LikedVideoPage = () => {
   const { likedVideos } = useLike();

   return (
      <main className="page my-2">
         {likedVideos?.length !== 0 ? (
            <section className="video-section">
               {likedVideos?.map((ele) => (
                  <VideoCard key={ele._id} videoData={ele} />
               ))}
            </section>
         ) : (
            <h3 className="no-video-msg">No liked videos</h3>
         )}
      </main>
   );
};

export { LikedVideoPage };
