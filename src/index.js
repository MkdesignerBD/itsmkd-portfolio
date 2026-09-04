import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Gallery from "./pages/Gallery";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Tools from "./pages/Tools";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "work", element: <Work /> },
      { path: "gallery", element: <Gallery /> },
      { path: "work/gallery", element: <Gallery /> },
      { path: "service", element: <Service /> },
      { path: "tools", element: <Tools /> },
      { path: "digital-tools", element: <Tools /> },
      { path: "feedback", element: <Tools /> },
      { path: "contact", element: <Contact /> },
      { path: "terms", element: <Terms /> },
      { path: "terms-and-conditions", element: <Terms /> },
      { path: "privacy", element: <Privacy /> },
      { path: "privacy-policy", element: <Privacy /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
