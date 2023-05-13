import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useContext } from "react";

import { UserContext } from "./store/user-context";
import RootLayout from "./pages/root";
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";
import Meetups from "./pages/meetups";
import Posts from "./pages/posts";
import Products from "./pages/products";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import MeetupDetail from "./components/meetups/meetup-detail";
import EditMeetup from "./components/meetups/edit-meetup";
import NewMeetup from "./components/meetups/new-meetup";
import PostDetail from "./components/posts/post-detail";
import EditPost from "./components/posts/edit-post";
import NewPost from "./components/posts/new-post";
import ProductDetail from "./components/products/product-detail";
import EditProduct from "./components/products/edit-product";
import NewProduct from "./components/products/new-product";


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
        path: "/meetups/:id",
        element: <MeetupDetail />
      },
      {
        path: "/meetups/:id/edit",
        element: <EditMeetup />
      },
      {
        path: "/meetups/new",
        element: <NewMeetup />
      },
      {
        path: "/posts",
        element: <Posts />
      },
      {
        path: "/posts/:id/edit",
        element: <EditPost />
      },
      {
        path: "/posts/new",
        element: <NewPost />
      },
      {
        path: "/posts/:id",
        element: <PostDetail />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/products/:id/edit",
        element: <EditProduct />
      },
      {
        path: "/products/new",
        element: <NewProduct />
      },
      {
        path: "/products/:id",
        element: <ProductDetail />
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
  const userCtx = useContext(UserContext);

  useEffect(() => {
    let token = localStorage.getItem('practice_token');

    if (token && token !== undefined && userCtx.user === null) {
      fetch('http://localhost:4000/user_current', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        userCtx.userLogin(data);
      })
      .catch(error => {
        console.log('app.js useEffect error:', error);
      });
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
