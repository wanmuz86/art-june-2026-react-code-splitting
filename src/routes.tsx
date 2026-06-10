import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

// Import normally (something that is bundled with the main.js)
import Contact from "./components/Contact";

// Lazy-loaded components
// When creating the route, we lazy load import the component
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
