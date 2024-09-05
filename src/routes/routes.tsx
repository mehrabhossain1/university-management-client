import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminRoutes } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  //   Admin Routes
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },

  // Faculty Routes
  {
    path: "/faculty",
    element: <App />,
    children: adminRoutes,
  },

  // Student Routes
  {
    path: "/student",
    element: <App />,
    children: adminRoutes,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
