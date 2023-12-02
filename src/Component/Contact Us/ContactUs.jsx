import React from 'react'
import san_francisco from "../../assets/Contacts/san-francisco.jpeg"
import Istanbul from "../../assets/Contacts/Istanbul-480x350.png"
import denver from "../../assets/Contacts/denver-460x350.jpeg"
import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'
export default function ContactUs() {
  return (
    <div className='container p-5 py-10 mx-auto bg-main rounded-[15px] mt-12 py-10 '>
      <h2 className='text-center font-bold text-[35px] mt-5'> Media</h2>
      <div className='flex justify-center items-center my-5'>
      <div className=' flex gap-5 flex-row '>

<div className=''>  <a href={"https://about.udemy.com/company/?locale=en-us#offices"} > <FacebookLogo size={32}/></a></div>
<div>  <a href={"https://about.udemy.com/company/?locale=en-us#offices"} > <InstagramLogo size={32} /></a></div>
<div>  <a href={"https://about.udemy.com/company/?locale=en-us#offices"} > <TwitterLogo size={32} /></a></div>



</div>
      </div>
      <h2 className='text-center font-bold text-[35px]'>Our Offices</h2>

      <div className='grid grid-cols-12 gap-7 py-5'>
        <div className='col-span-12 md:col-span-4 shadow-md p-5 cursor-pointer flex justify-center items-center'>
          <div>
          <img src={san_francisco} alt="" />
          <h3 className='font-bold text-black text-[30px] text-center'>San Francisco, CA</h3>
          </div>
        </div>
        <div className='col-span-12 md:col-span-4 shadow-md p-5 cursor-pointer flex justify-center items-center'>
         <div>
         <img src={Istanbul} alt="" />
          <h3 className='font-bold text-black text-[30px] text-center'>Istanbul, Türkiye</h3>
         </div>
        </div>
        <div className='col-span-12 md:col-span-4 shadow-md p-5 cursor-pointer flex justify-center items-center'>
          <div>
          <img src={denver} alt="" />
          <h3 className='font-bold text-black text-[30px] text-center'>Denver, CO</h3>
          </div>
        </div>

      </div>

      
    </div>
  )
}
