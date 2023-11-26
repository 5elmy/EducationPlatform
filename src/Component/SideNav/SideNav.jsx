import React from 'react'
import "./style.css"
import { ChartsIcon, HomeIcon, ProfileIcon, SettingsIcon, SignOutIcon } from '../../utils/icons/icon'
import { GraduationCap, Phone } from 'phosphor-react'
import { Link } from 'react-router-dom'
export default function SideNav() {
  return (
          <>
      <div className='h-screen bg-main bg-emerald-300 w-[250px] p-5 flex flex-col justify-between items-center  '>
        <div>
        <div className='flex justify-end gap-12 items-center '><i style={{color:"#57007B"}} className="fa-solid fa-bars"></i></div>
        <div className=' flex flex-col gap-5 mt-5'>
            <Link to={"/dashboard"} className='flex gap-5 items-center mt-5'> <HomeIcon/> <span className='element '>Dashboard</span></Link>
            <Link to={"/courses"} className='flex gap-5 items-center mt-5'> <GraduationCap size={14} color='#57007B' /> <span className='element '>Courses</span></Link>
            <Link to={"/profile"} className='flex gap-5 items-center mt-5'> <ProfileIcon/> <span className='element '>Profile</span></Link>
            <Link to={"/settings"}   className='flex gap-5 items-center mt-5'> <SettingsIcon/> <span className='element '>Settings</span></Link>
            <Link to={"/contact"}  className='flex gap-5 items-center mt-5'> <Phone color='#57007B' size={14} /> <span className='element '>Contacts</span></Link>
           
            
        </div>
        </div>
            <div className='flex gap-5 items-center mt-5'> <SignOutIcon/> <span className='element'>Sign Out</span></div>
      
    </div>
          </>
  )
}

