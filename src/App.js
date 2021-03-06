import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "./context";
import {
   HomePage,
   ExplorePage,
   LikedVideoPage,
   WatchlaterPage,
   HistoryPage,
   LoginPage,
   SignUpPage,
   PlaylistPage,
   Page404,
   SingleVideoPage,
   UserProfilePage,
} from "./pages/index";
import {
   Footer,
   Sidebar,
   TopNav,
   RestrictedRoute,
   PrivateRoute,
   Modal,
   SearchBar,
} from "./components";

const App = () => {
   const { theme } = useTheme();

   return (
      <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
         <TopNav />
         <Sidebar />
         <SearchBar />
         <Routes>
            {/*public routes*/}
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/video/:videoId" element={<SingleVideoPage />} />
            <Route path="/mockman" element={<Mockman />} />
            <Route path="*" element={<Page404 />} />
            {/*restricted routes*/}
            <Route element={<RestrictedRoute />}>
               <Route path="/login" element={<LoginPage />} />
               <Route path="/signup" element={<SignUpPage />} />
            </Route>
            {/*private routes*/}
            <Route element={<PrivateRoute />}>
               <Route path="/likedvideos" element={<LikedVideoPage />} />
               <Route path="/watchlater" element={<WatchlaterPage />} />
               <Route path="/history" element={<HistoryPage />} />
               <Route path="/playlist" element={<PlaylistPage />} />
               <Route path="/profile" element={<UserProfilePage />} />
            </Route>
         </Routes>
         <Footer />

         <Modal />
         <ToastContainer theme={theme === "dark" ? "dark" : "colored"} />
      </div>
   );
};

export { App };
