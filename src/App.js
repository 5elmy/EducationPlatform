import React from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter} from 'react-router-dom'
import Main from './Component/Main/Main'
import Register from './Component/Registration/Register'

import NavBar from './Component/Navbar/Navbar'
import Login from './Component/Login/Login'
import SideNav from './Component/SideNav/SideNav'
import Dashboard from './Component/Dashboard/Dashboard'
import Courses from './Component/Courses/Courses'
import Profile from './Component/Profile/Profile'
import ContactUs from './Component/Contact Us/ContactUs'
import Settings from './Component/Settings/Settings'
import DashboardLayOut from './Component/DashBoardLayOut/DashboardLayOut'
import Lectures from './Component/Lectures/Lectures'
import SpecialLecture from './Component/SpecialLecture/SpecialLecture'


export default function App() {

  const router = createHashRouter([
    {path:"" ,element:<Main/>,children:[
  {path:"/navbar" ,  element:<NavBar/>},
  {path:"/register" ,  element:<Register/>},
  {path:"/login" ,  element:<Login/>},
  {index:true ,  element:<Login/>},
  {path:"/sidenav" ,  element:<SideNav/>},
  {path:"/dashboard" ,  element:<Dashboard/>},
  {path:"/courses" ,  element:<Courses/>},
  {path:"/profile" ,  element:<Profile/>},
  {path:"/contact" ,  element:<ContactUs/>},
  {path:"/settings" ,  element:<Settings/>},
  {path:"/specialCourse" ,  element:<Lectures/>},
  {path:"/lecture" ,  element:<SpecialLecture/>},
  ]},
  // {path:"/dashboardL" ,element:<DashboardLayOut/>,children:[
  //   {}]}
  ])


  
  return (
    <>
    <RouterProvider router={router} />
      
    </>
  )
}
