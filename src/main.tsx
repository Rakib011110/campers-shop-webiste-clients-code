import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.ts";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes.tsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>
);
