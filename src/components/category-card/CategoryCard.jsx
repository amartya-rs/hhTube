import "./category-card.css";

const CategoryCard = ({ imageUrl, categoryName, redirect }) => {
   return (
      <div className="card vertical category" onClick={redirect}>
         <img className="card-img" src={imageUrl} />
         <div className="overlay h4">{categoryName}</div>
      </div>
   );
};

export { CategoryCard };
