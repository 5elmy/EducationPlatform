import React from 'react'
import "./style.css"
import { Divider } from '@nextui-org/react'
import CardComponent from '../../utils/Card/Card'
import { Link } from 'react-router-dom'
export default function Dashboard() {
  return (
   
    <div className='h-Screen bg-main py-5 '>
        <div className='container mx-auto grid grid-cols-12  py-5  px-5'>

                <div className=' mx-auto col-span-12  md:col-span-6  lg:col-span-4  w-[300px] h-[150px]  bg-white my-5 text-black btnUpDev1 rounded-[15px] shadow-xl flex justify-center items-center' >

                
                <p>{4 +" "+ "Courses"}</p>
             
                    

                </div>

                <div className='mx-auto w-[300px]   col-span-12  md:col-span-6  lg:col-span-4    h-[150px] bg-white my-5 text-black btnUpDev2 rounded-[15px] shadow-xl flex justify-center items-center' >

                    <p>{5 +" "+ "Quiz"}</p>

                </div>
                <div className='mx-auto w-[300px]   col-span-12  md:col-span-6  lg:col-span-4   h-[150px] bg-white my-5 text-black btnUpDev3 rounded-[15px] shadow-xl flex justify-center items-center' >

                    <p>{5 +" "+ "Lecture"}</p>

                </div>
            
        


        </div>
        <div className='flex justify-center items-center mt-5'>
        <Divider className='w-[90%]  bg-[red]' />
        </div>
        <p className='my_Courses my-4 '>My Courses</p>

        <div className='grid grid-cols-12 gap-3 mt-10'>
          <div className='col-span-12 md:col-span-6  lg:col-span-4 '><Link to={"/specialCourse"}> <CardComponent courseName={"FullStack Developer (React.js & Node.js)"} courseDescription={"Lorem ipsum dolor sit amet consectetur, adipisicing elit..."}/>  </Link></div>
          <div className='col-span-12 md:col-span-6  lg:col-span-4 '><Link to={"/specialCourse"}><CardComponent  courseName={"Backend Developer (asp.net)"} courseDescription={"Lorem ipsum dolor sit amet consectetur, adipisicing elit..."}/> </Link> </div>
          <div className='col-span-12 md:col-span-6  lg:col-span-4 '> <Link to={"/specialCourse"}><CardComponent courseName={"Fultter Developer"} courseDescription={"Lorem ipsum dolor sit amet consectetur, adipisicing elit..."}/> </Link> </div>
        
        </div>



      
    </div>
  )
}
