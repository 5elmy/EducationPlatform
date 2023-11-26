import React from 'react'
import NavBar from '../Navbar/Navbar'
import SideNav from '../SideNav/SideNav'
import { Outlet } from 'react-router-dom'

export default function DashboardLayOut() {
  return (
    <div>
         <div className='flex  '>
      <SideNav/>
      <div className='w-full '>
      <NavBar/>
      <Outlet/>
      </div>
      </div>
       
    </div>
  )
}
