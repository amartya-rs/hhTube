import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import {
   HomePage,
   ExplorePage,
   LikedVideoPage,
   WatchlaterPage,
   HistoryPage,
   LoginPage,
   SignUpPage,
   PlaylistPage,
} from "./pages/index";
import {
   Footer,
   Sidebar,
   TopNav,
   RestrictedRoute,
   PrivateRoute,
   Modal,
} from "./components";

const App = () => {
   return (
      <div className="App">
         <TopNav />
         <Sidebar />
         <Routes>
            {/*public routes*/}
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/mockman" element={<Mockman />} />
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
            </Route>
         </Routes>
         <Footer />

         <Modal />
      </div>
   );
};

export { App };
