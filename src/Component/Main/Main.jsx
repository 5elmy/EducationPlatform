import React from 'react'
import Register from '../Registration/Register'
import NavBar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import SideNav from '../SideNav/SideNav'

export default function Main() {
  let token =  localStorage.getItem("token")
  return (
    <div>
      {
      !token ? <>
      
      <NavBar/>
      <Outlet/>
      
      </> :<> 
      
      
      <div className='flex  '>
      {/* <SideNav/> */}
      <div className='w-full '>
      <NavBar/>
      <Outlet/>
      </div>
      </div>
     
    
      </>
        
      }
       {/* <NavBar/>
      <Outlet/> */}
    </div>
  )
}
