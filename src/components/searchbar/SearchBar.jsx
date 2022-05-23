import { MdClose, MdSearch } from "react-icons/md";
import { useVideo } from "../../context";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {
   const { searchInput, setSearchInput } = useVideo();
   const { pathname } = useLocation();
   const navigate = useNavigate();

   const searchHandler = (value) => {
      setSearchInput(value.toLowerCase());
      pathname !== "/explore" && navigate("/explore");
   };

   return (
      <>
         {pathname === "/login" ||
         pathname === "/signup" ||
         pathname === "/profile" ? (
            <div></div>
         ) : (
            <div className="search-bar">
               <input
                  className="text-input"
                  type="text"
                  placeholder="Search"
                  value={searchInput}
                  onChange={(e) => searchHandler(e.target.value)}
               />
               {searchInput.length === 0 ? (
                  <MdSearch />
               ) : (
                  <MdClose onClick={() => setSearchInput("")} />
               )}
            </div>
         )}
      </>
   );
};

export { SearchBar };
