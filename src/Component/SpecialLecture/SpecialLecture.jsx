import React from 'react'
import img from "../../Frame 39925.png"
export default function SpecialLecture() {
    return (
        <div>
            <div className='grid grid-cols-12 p-5  '>
                <div className='col-span-12 md:col-span-8'>
                    <div className='w-full'>
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className='col-span-12 md:col-span-4 flex  justify-center p-5 shadow-lg w-full '>
                  <div className='  w-full p-5'>
                  <p className='font-bold'>Course Name</p>
                    <div className='flex gap-2 items-center p-3'> <div className='rounded-full bg-black w-[5px] h-[5px] '></div> <p >SoftWare diploma</p></div>
                    <p className='font-bold'>Lecture Number</p>
                    <div className='flex gap-2 items-center p-3'> <div className='rounded-full bg-black w-[5px] h-[5px] '></div>  <p>lecture 1</p></div>

                   
                    <p className='font-bold'>Lecutre details </p>
                   <ul  className='mx-5 p-3'>
                    <li>html</li>
                    <li>html3</li>
                    <li>html5</li>
                    <li>css</li>
                    <li>css3</li>
                    <li>css5</li>
                    
                   </ul>

                  </div>

                </div>

            </div>

        </div>
    )
}
