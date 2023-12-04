import { Button, Spinner } from '@nextui-org/react'
import { Check } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const baseURL = "http://e-learningplatform.great-site.net/api";
  // onSubmit:async(values)=>{
  //   console.log(values);
  //   axios.get('data-course/{id}','baseURL',values).then(data=>{
  //         console.log(data);
  //         if(data.status === 200)
  //         {
           
            
  //         }
  //   }).catch(error=>{
  //     console.log({error});
  //   })
  
// axios({
//   url:'data-course/{id}',
//   baseURL:'',
//   method:'GET'
// })

export default function CourseDetails() {
  return (
    <div className=''>
        <div className='bg_Btn py-5 pt-5 mb-3'>
            <div className='container mx-auto'>
            <p className='text-[35px] font-bold text-white lg:w-1/2'>Laravel 10 - Restaurant and Food Ordering Ecommerce (2023)</p>
            <p className='mx-3 text-[14px] font-bold text-white w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat autem delectus, modi dignissimos iste iure! Aspernatur, quae. Rerum, non? </p>

            </div>

        </div>
        <div className='container mx-auto  border-1 py-5 bg-main'>
            <p className='font-[500px] text-[25px] text-black text-center my-8'>What you'll learn</p>
            <div className='mx-3 grid grid-cols-12'>

           <div className='lg:col-span-3 col-span-12 flex gap-3'> <Check color='#57007B' size={26} /> <p  className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-3 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-3 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-3 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-3 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-3 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-3 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-3 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-3 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-3 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-3 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-3 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-3 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-3 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-3 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-3 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-3 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
           <div className='lg:col-span-3 col-span-12  flex gap-3'> <Check color='#57007B' size={26} /> <p className='text-black'>Lorem ipsum dolor sit amet consectetur.</p></div>
          
            </div>


      <div className='flex justify-center items-center my-8 '><Link to={"/specialCourse"}><Button className='w-[285px] bg_Btn text-white'> EnRoll</Button></Link></div>
{/* <Spinner color='current'/> */}
        </div>
      
    </div>
  )
}
