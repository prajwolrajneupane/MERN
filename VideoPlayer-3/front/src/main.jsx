import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from "./Login.jsx"
import Register from "./Register.jsx"
import Home from './Home.jsx'

import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const router=createBrowserRouter([
  {
    path:"/",element:<Home/>
  },
   {
    path:"/login",element:<Login/>
  },
  {
    path:"/register",element:<Register/>
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>  

  </StrictMode>,
)
