import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";

const App = () => {
   return (
      <div className="App">
         <Routes>
            <Route path="/mockman" element={<Mockman />} />
         </Routes>
      </div>
   );
};

export { App };
