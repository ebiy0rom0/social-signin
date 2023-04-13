import { createBrowserRouter } from "react-router-dom"
import Index from '@/pages/index'
import Signin from '@/pages/signin'


export const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/signin", element: <Signin /> }
])

