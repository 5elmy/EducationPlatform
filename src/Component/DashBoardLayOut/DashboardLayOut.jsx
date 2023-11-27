import React from 'react'
import NavBar from '../Navbar/Navbar'
import SideNav from '../SideNav/SideNav'
import { Outlet } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'

export default function DashboardLayOut() {
  return (
    <div>
        <div className='grid grid-cols-12 gap-0'>
        <div className='col-span-2'>
          
      <SideNav/>
        </div>
        <div className='col-span-10'>
    
      <Dashboard/>

        </div>
      </div>
       
    </div>
  )
}
