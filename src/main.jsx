import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Blogs from './Pages/Blogs';
import Bookmarks from './Pages/Bookmarks';
import Mainlayouts from './Layouts/Mainlayouts';
import Blog from './Pages/Blog';
import Content from './Components/Content/Content';
import Author from './Components/Author/Author';
import  { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayouts></Mainlayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader : () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
      },
      {
        path : '/blog/:id',
        element:<Blog></Blog>,
        loader : ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        children : [
          {
            index:true,
            
            element :<Content></Content>,
            loader : ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path : 'author',
            element : <Author></Author>,
            loader : ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          }
        ],
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>
      }
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
