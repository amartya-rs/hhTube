import "./home-page.css";
import { banner } from "../../assets";
import { CategoryCard } from "../../components/index";
import { useVideo } from "../../context";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
   const { categories, setCurrentCategory } = useVideo();
   const navigate = useNavigate();

   return (
      <main className="page">
         <header className="mb-4">
            <img className="res-img" src={banner} alt="banner" />
         </header>
         <h3>Popular Categories</h3>
         <section className="category-section my-4">
            {categories
               ?.filter((ele) => ele.featured)
               ?.map((ele) => (
                  <CategoryCard
                     key={ele._id}
                     categoryName={ele.categoryName}
                     imageUrl={ele.imgUrl}
                     redirect={() => {
                        navigate("/explore");
                        setCurrentCategory(ele.categoryName);
                     }}
                  />
               ))}
         </section>
      </main>
   );
};

export { HomePage };
