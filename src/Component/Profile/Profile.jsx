import { Button, Input } from '@nextui-org/react'
import React from 'react'
import UploadImg from '../../utils/UploadImg'

export default function Profile() {
  return (
    <div className='container bg-main rounded-[15px] mx-auto mt-10 p-5 '>
      <h2 className='text-[#57007B]  mt-5'>My Profile</h2>


      <div className='grid grid-cols-12 gap-5'>
        <div className='md:col-span-6 col-span-12  flex justify-center items-center mx-auto'>
          <UploadImg />
        </div>
        <div className='md:col-span-6 col-span-12 '>
          <Input className='mt-5 text-black' label="Full Name" variant='bordered' />
          <Input className='mt-5 text-black' label="Email" variant='bordered' />
          <Input className='mt-5 text-black' label="Mobile Phone" variant='bordered' />

        </div>

      </div>
      <Input className='mt-5 text-black' label="country" variant='bordered' />
      <Input className='mt-5 text-black' label="city" variant='bordered' />
      <Input className='mt-5 text-black' label="Postal Code" variant='bordered' />
      <Input className='mt-5 text-black' label="Address" variant='bordered' />

      <div className='flex justify-center items-center mt-5 '><Button className='w-[285px] bg_Btn text-white'>Save</Button></div>

    </div>
  )
}
