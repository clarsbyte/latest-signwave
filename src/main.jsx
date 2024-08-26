import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter,
  RouterProvider } from "react-router-dom";
import "./index.css";
import { Outlet } from "react-router-dom";

import Drawer from "./components/SideBar"
import Home from "./views/Home";
import Flashcards from './views/Flashcards'
import Discover from './views/Discover'
import Dictionary from './views/Dictionary'
import Camera from './views/Camera'
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Course from "./views/Course";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/discover",
    element: <Outlet/>,
    children: [{
      path: "",
      element: <Discover/>,
    },
    {
      path: ":id",
      element: <Course/>,
    }
  ]
  },
  {
    path: "/dictionary",
    element: <Dictionary/>,
  },
  {
    path: "/flashcards",
    element: <Flashcards/>,
  },
  {
    path: "/camera",
    element: <Camera/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/signin",
    element: <SignIn/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex">
    <Drawer/>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);