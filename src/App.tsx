import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewTask } from "./pages/NewTask";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new",
    element: <NewTask />,
  }
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
