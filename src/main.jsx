import React from 'react'; // Add this line
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home.jsx';
import Counter from './Counter.jsx';
import Users from './Page/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
      children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Counter",
        element: <Counter />,
      },
      {
        path: "/Users",
        element: <Users />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)