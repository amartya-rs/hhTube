import { VideoCard } from "../../components/index";
import { useVideo } from "../../context";
import "./explore-page.css";

const ExplorePage = () => {
   const { videosToDisplay, categories, currentCategory, setCurrentCategory } =
      useVideo();

   return (
      <main className="page my-2">
         <div className="filter-chip-wrapper">
            {categories?.map((ele) => (
               <span
                  key={ele._id}
                  className={`filter-chip font-medium ${
                     ele.categoryName === currentCategory ? "active-chip" : ""
                  }`}
                  onClick={() => setCurrentCategory(ele.categoryName)}
               >
                  {ele.categoryName.toLowerCase()}
               </span>
            ))}
         </div>
         <section className="video-section my-2">
            {videosToDisplay?.map((ele) => (
               <VideoCard key={ele._id} videoData={ele} />
            ))}
         </section>
      </main>
   );
};

export { ExplorePage };
