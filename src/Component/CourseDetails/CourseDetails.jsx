import { Button, Spinner } from '@nextui-org/react'
import { Check } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseDetails() {
  return (
    <div>
        <div className='bg_Btn  mt-5'>
            <div className='container mx-auto'>
            <p className='text-[35px] font-bold text-white lg:w-1/2'>Laravel 10 - Restaurant and Food Ordering Ecommerce (2023)</p>
            <p className='text-[14px] font-bold text-white'>description</p>

            </div>

        </div>
        <div className='container mx-auto  border-1 my-5'>
            <p className='font-[500px] text-[25px] text-black text-center my-8'>What you'll learn</p>
            <div className='mx-3 grid grid-cols-7'>

           <div className='lg:col-span-1 col-span-12 flex gap-3'> <Check color='#57007B' size={26} /> <p  className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-1 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-1 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-1 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-1 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-1 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
          
            </div>


      <div className='flex justify-center items-center my-8 '><Link to={"/specialCourse"}><Button className='w-[285px] bg_Btn text-white'> EnRoll</Button></Link></div>
{/* <Spinner color='current'/> */}
        </div>
      
    </div>
  )
}
