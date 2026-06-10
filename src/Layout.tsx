import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

const Layout: React.FC = () => {
  return (
    <div>
      <h1>React Route-based Code Splitting</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
         <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>

{/* We bound the Outlet (what to show based on UI)
with error boundary and Suspense
Suspense - What to show while the component is Loading
ErrorBoundary - To catch the error if something happens during the load */}
      <ErrorBoundary>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet /> {/* This is where child routes will render */}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Layout;
