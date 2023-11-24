import React from 'react'
import "./style.css"
import { Divider } from '@nextui-org/react'
import CardComponent from '../../utils/Card/Card'
export default function Dashboard() {
  return (
   
    <div className='h-Screen bg-main py-5 '>
        <div className='w-full flex justify-between items-center py-5  px-5'>

                <div className='w-[300px] h-[150px] bg-white btnUpDev1 rounded-[15px] shadow-xl flex justify-center items-center' >

                <p>{4 +" "+ "Courses"}</p>
                    

                </div>
                <div className='w-[300px] h-[150px] bg-white btnUpDev2 rounded-[15px] shadow-xl flex justify-center items-center' >

                    <p>{5 +" "+ "Assignments"}</p>

                </div>
                <div className='w-[300px] h-[150px] bg-white btnUpDev3 rounded-[15px] shadow-xl flex justify-center items-center' >

                    <p>{6 +" "+ "Lectures"} </p>

                </div>


        </div>
        <div className='flex justify-center items-center mt-5'>
        <Divider className='w-[90%]  bg-[red]' />
        </div>
        <p className='my_Courses my-4 '>My Courses</p>

        <div className='grid grid-cols-12 gap-3 mt-10'>
          <div className='col-span-4'><CardComponent courseName={"FullStack Developer (React.js & Node.js)"} courseDescription={"Lorem ipsum dolor sit amet consectetur, adipisicing elit..."}/> </div>
          <div className='col-span-4'><CardComponent courseName={"Backend Developer (asp.net)"} courseDescription={"Lorem ipsum dolor sit amet consectetur, adipisicing elit..."}/> </div>
          <div className='col-span-4'><CardComponent courseName={"Fultter Developer"} courseDescription={"Lorem ipsum dolor sit amet consectetur, adipisicing elit..."}/> </div>
        
        </div>



      
    </div>
  )
}
