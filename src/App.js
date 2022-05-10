import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { HomePage, ExplorePage } from "./pages/index";
import { Footer, Sidebar, TopNav, RestrictedRoute } from "./components";
import { LoginPage, SignUpPage } from "./pages/index";

const App = () => {
   return (
      <div className="App">
         <TopNav />
         <Sidebar />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/mockman" element={<Mockman />} />
            //restricted routes
            <Route element={<RestrictedRoute />}>
               <Route path="/login" element={<LoginPage />} />
               <Route path="/signup" element={<SignUpPage />} />
            </Route>
         </Routes>
         <Footer />
      </div>
   );
};

export { App };
