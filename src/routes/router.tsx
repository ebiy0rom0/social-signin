import { createBrowserRouter } from "react-router-dom"
import Index from '@/pages/index'
import Signin from '@/pages/signin'
import Home from '@/pages/home'


export const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/signin", element: <Signin /> },
  { path: "/home", element: <Home /> }
])

