import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { HomePage, ExplorePage } from "./pages/index";
import { Footer, Sidebar, TopNav } from "./components";

const App = () => {
   return (
      <div className="App">
         <TopNav />
         <Sidebar />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/mockman" element={<Mockman />} />
         </Routes>
         <Footer />
      </div>
   );
};

export { App };
