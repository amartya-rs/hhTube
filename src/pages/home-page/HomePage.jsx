import "./home-page.css";
import { banner } from "../../assets";
import { CategoryCard } from "../../components/index";
import { useVideo } from "../../context/video-context";

const HomePage = () => {
   const { categories } = useVideo();

   return (
      <main className="page">
         <header className="mb-4">
            <img className="res-img" src={banner} alt="banner" />
         </header>
         <h3>Popular Categories</h3>
         <section className="category-section my-4">
            {categories &&
               categories.map((ele) => (
                  <CategoryCard
                     key={ele._id}
                     categoryName={ele.categoryName}
                     imageUrl={ele.imgUrl}
                  />
               ))}
         </section>
      </main>
   );
};

export { HomePage };
