import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';
import Home from './Pages/Home';
import EditProfile from './Pages/EditProfile';
import AploadPost  from './Pages/AploadPost';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/editProfile",
    element: <EditProfile />,
  },
  {
    path: "/aploadPost",
    element: <AploadPost />,
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
