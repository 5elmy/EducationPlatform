import React, { useContext } from 'react'
import Register from '../Registration/Register'
import NavBar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import SideNav from '../SideNav/SideNav'
import { toggleSideNav } from '../../Context/toggleSideNav'

export default function Main() {
  let token =  localStorage.getItem("token")
  let {toggleButton , setToggleButton} = useContext(toggleSideNav)

  return (
    <div>
          <NavBar/>
          <Outlet/>
    </div>
  )
}
