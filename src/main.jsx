//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { Navbar, Programs, About, Campus,Contact } from './components/index.js';
import {createBrowserRouter, RouterProvider} from "react-router"
import { StrictMode } from 'react';
const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Navbar/>
      },{
        path:'/program',
        element:<Programs />
      },{
        path:'/campus',
        element:<Campus />
      },{
        path:'/contact',
        element:<Contact />
      }
    ]

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
