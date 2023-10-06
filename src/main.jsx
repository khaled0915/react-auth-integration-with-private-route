import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProvider from './contextProvider/AuthProvider';
import Orders from './Components/Orders';
import PrivateRoutes from './Routes/PrivateRoutes';
import Profile from './Components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/order',
        element : <PrivateRoutes> <Orders></Orders> </PrivateRoutes>
      },
      {
        path : '/profile',
        element: <PrivateRoutes> <Profile></Profile> </PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthProvider>
          {/* this is children for authprovider */}
        <RouterProvider router={router} /> 
        </AuthProvider>
  </React.StrictMode>,
)
