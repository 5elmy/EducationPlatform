import React from 'react'
// import img from "../../Frame 39925.png"
import ReactPlayer from 'react-player'

export default function SpecialLecture() {
    return (
        <div>
            <div className='grid grid-cols-12 p-5   bg-main'>
                <div className='col-span-12 md:col-span-8'>
                    <div className='w-full'>
                    <ReactPlayer url='https://www.twitch.tv/videos/106400740' />
                    </div>
                </div>
                <div className='col-span-12 md:col-span-4 flex  justify-center p-5 shadow-lg w-full '>
                  <div className='  w-full p-5'>
                  <p className='font-bold text-black'>Course Name</p>
                    <div className='flex gap-2 items-center p-3'> <div className='rounded-full bg-black w-[5px] h-[5px] '></div> <p  className='text-black'>SoftWare diploma</p></div>
                    <p className='font-bold text-black'>Lecture Number</p>
                    <div className='flex gap-2 items-center p-3'> <div className='rounded-full bg-black w-[5px] h-[5px] '></div>  <p className='text-black'>lecture 1</p></div>

                   
                    <p className='font-bold text-black'>Lecutre details </p>
                   <ul  className='mx-5 p-3 ull'>
                    <li className='text-black' >html</li>
                    <li className='text-black'>html3</li>
                    <li className='text-black'>html5</li>
                    <li className='text-black'>css</li>
                    <li className='text-black'>css3</li>
                    <li className='text-black'>css5 </li>
                    
                   </ul>

                  </div>

                </div>

            </div>

        </div>
    )
}
