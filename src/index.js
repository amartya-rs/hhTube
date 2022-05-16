import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
   IconProvider,
   VideoProvider,
   AuthProvider,
   LikeProvider,
   WatchlaterProvider,
   HistoryProvider,
   PlaylistProvider,
} from "./context/index";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <AuthProvider>
            <PlaylistProvider>
               <HistoryProvider>
                  <WatchlaterProvider>
                     <LikeProvider>
                        <VideoProvider>
                           <IconProvider>
                              <App />
                           </IconProvider>
                        </VideoProvider>
                     </LikeProvider>
                  </WatchlaterProvider>
               </HistoryProvider>
            </PlaylistProvider>
         </AuthProvider>
      </BrowserRouter>
   </React.StrictMode>
);
