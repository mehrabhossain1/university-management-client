import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";
import { routesGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  //   Admin Routes
  {
    path: "/admin",
    element: <App />,
    children: routesGenerator(adminPaths),
  },

  // Faculty Routes
  {
    path: "/faculty",
    element: <App />,
    children: routesGenerator(facultyPaths),
  },

  // Student Routes
  {
    path: "/student",
    element: <App />,
    children: routesGenerator(studentPaths),
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
