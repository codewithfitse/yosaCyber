import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Routes, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service.jsx";
import NotFound from "./pages/404.jsx";
import Pricing from "./pages/Pricing.jsx";
import Drivers from "./pages/Drivers.jsx";
import Contact from "./pages/Contact.jsx";
import { Landing } from "./pages/Landing.jsx";
import { Gallery } from "./pages/Gallery.jsx";
import { Login } from "./pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <NotFound />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Service",
    element: <Service />,
  },
  {
    path: "/Pricing",
    element: <Pricing />,
  },
  {
    path: "/Drivers",
    element: <Drivers />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Gallery",
    element: <Gallerys />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
