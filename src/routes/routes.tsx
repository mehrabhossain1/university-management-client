import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";
import { routesGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import ChangePassword from "../pages/ChangePassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  //   Admin Routes
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <App />,
      </ProtectedRoute>
    ),
    children: routesGenerator(adminPaths),
  },

  // Faculty Routes
  {
    path: "/faculty",
    element: (
      <ProtectedRoute role="faculty">
        <App />,
      </ProtectedRoute>
    ),
    children: routesGenerator(facultyPaths),
  },

  // Student Routes
  {
    path: "/student",
    element: (
      <ProtectedRoute role="student">
        <App />,
      </ProtectedRoute>
    ),
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
  {
    path: "/change-password",
    element: <ChangePassword />,
  },
]);

export default router;
