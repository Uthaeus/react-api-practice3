import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/root";
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";
import Meetups from "./pages/meetups";
import Posts from "./pages/posts";
import Products from "./pages/products";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/meetups",
        element: <Meetups />
      },
      {
        path: "/posts",
        element: <Posts />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
