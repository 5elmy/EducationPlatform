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
      {
      !token ? <>
      
      <NavBar/>
      <Outlet/>
      
      </> :<> 
      
      
   
      <div className='grid grid-cols-12 gap-0'>

            {toggleButton?     <>
            
              <div className='col-span-2'>
          
          <SideNav/>
            </div>
            <div className='col-span-10'>
          <NavBar/>
          <Outlet/>
    
            </div>
            
            </>  : <>
            
            <div className='col-span-12'>
          <NavBar/>
          <Outlet/>
    
            </div>
            
            </>}

      </div>
  
     
    
      </>
        
      }
       {/* <NavBar/>
      <Outlet/> */}
    </div>
  )
}
