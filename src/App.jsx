import Root from "./layout/Root";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Cities from "./pages/Cities";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/cities", element: <Cities /> },
      { path: "/signin", element: <SignIn /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
