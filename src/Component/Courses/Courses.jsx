import React from 'react'

import CardComponent from '../../utils/Card/Card'

export default function Courses() {
  return (
    <div className='h-screen bg-main py-5 w-full' >

        <div className='grid grid-cols-12 w-full '>
       
        <div className='col-span-12 lg:col-span-4 w-full mt-5 '> 
        <CardComponent courseName={"Software Development"} courseDescription={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}/>

        </div>
        <div className='col-span-12 lg:col-span-4 w-full mt-5'>
        <CardComponent courseName={"SyberSecurity"} courseDescription={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}/>

        </div>
        <div className='col-span-12 lg:col-span-4 w-full mt-5'>
        <CardComponent courseName={"Artificial intelligent"} courseDescription={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}/>

        </div>
        <div className='col-span-12 lg:col-span-4 w-full mt-5'>
        <CardComponent courseName={"Artificial intelligent"} courseDescription={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}/>

        </div>
        <div className='col-span-12 lg:col-span-4 w-full mt-5'>
        <CardComponent courseName={"Artificial intelligent"} courseDescription={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}/>

        </div>
        <div className='col-span-12 lg:col-span-4 w-full mt-5'>
        <CardComponent courseName={"Artificial intelligent"} courseDescription={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}/>

        </div>

        </div>

    

    </div>
  )
}

