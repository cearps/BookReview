import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/Bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Home />
      </App>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
