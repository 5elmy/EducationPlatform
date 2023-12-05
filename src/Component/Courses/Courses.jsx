import React from 'react'

import CardComponent from '../../utils/Card/Card'
import { Link } from 'react-router-dom'
import axios from 'axios';
import baseURL from "./../../utils/constants.js";

  // onSubmit:async(values)=>{
  //   console.log(values);
  //   axios.get('courses/{id?}','baseURL',values).then(data=>{
  //         console.log(data);
  //         if(data.status === 200)
  //         {
           
            
  //         }
  //   }).catch(error=>{
  //     console.log({error});
  //   })
// }

export default function Courses() {
  return (
    <div className='h-screen bg-main py-5 w-full' >

        <div className='grid grid-cols-12 w-full '>
       
        <div className='col-span-12 lg:col-span-4 w-full mt-5 '> 
        <Link to={"/coursedetails"}><CardComponent courseName={"Software Development"} courseDescription={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}/></Link>

        </div>
        <div className='col-span-12 lg:col-span-4 w-full mt-5'>
        <Link to={"/coursedetails"}><CardComponent courseName={"CyberSecurity"} courseDescription={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}/></Link> 
        </div>
        <div className='col-span-12 lg:col-span-4 w-full mt-5'>
        <Link to={"/coursedetails"}><CardComponent courseName={"Artificial intelligent"} courseDescription={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}/> </Link>

        </div>
        <div className='col-span-12 lg:col-span-4 w-full mt-5'>
        <Link to={"/coursedetails"}><CardComponent courseName={"Artificial intelligent"} courseDescription={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}/> </Link>

        </div>
        <div className='col-span-12 lg:col-span-4 w-full mt-5'>
        <Link to={"/coursedetails"}><CardComponent courseName={"Artificial intelligent"} courseDescription={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}/> </Link>

        </div>
        <div className='col-span-12 lg:col-span-4 w-full mt-5'>
        <Link to={"/coursedetails"}><CardComponent courseName={"Artificial intelligent"} courseDescription={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}/> </Link>

        </div>

        </div>

    

    </div>
  )
}
