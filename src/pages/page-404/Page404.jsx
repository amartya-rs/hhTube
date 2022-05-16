import { useNavigate } from "react-router-dom";
import { page_not_found } from "../../assets";
import "./page-404.css";

const Page404 = () => {
   const navigate = useNavigate();

   return (
      <div className="page-404">
         <div className="content-wrapper">
            <img src={page_not_found} alt="404" />
            <h3>PAGE NOT FOUND</h3>
            <button className="button primary" onClick={() => navigate("/")}>
               TAKE ME TO HOME PAGE
            </button>
         </div>
      </div>
   );
};

export { Page404 };
