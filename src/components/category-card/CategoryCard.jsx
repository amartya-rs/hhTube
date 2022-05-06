import "./category-card.css";

const CategoryCard = ({ imageUrl, categoryName }) => {
   return (
      <div className="card vertical category">
         <img className="card-img" src={imageUrl} />
         <div className="overlay h4">{categoryName}</div>
      </div>
   );
};

export { CategoryCard };
