import React from 'react'
import CardLecture from '../../utils/CardLectures/CardLectures'
import { Link } from 'react-router-dom'

export default function Lectures() {
  return (
    <div className='grid grid-cols-12 p-5 bg-main'>
        <div className='col-span-12 md:col-span-4 lg:col-span-3 p-5'> <Link to={"/lecture"}> <CardLecture title={"Lecture 1"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, itaque?"}/></Link> </div>
        <div className='col-span-12 md:col-span-4 lg:col-span-3 p-5'> <Link to={"/lecture"}> <CardLecture title={"Lecture 2" } description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, itaque?"}/></Link> </div>
        <div className='col-span-12 md:col-span-4 lg:col-span-3 p-5'> <Link to={"/lecture"}> <CardLecture title={"Lecture 3"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, itaque?"}/></Link></div>
        <div className='col-span-12 md:col-span-4 lg:col-span-3 p-5'> <Link to={"/lecture"}> <CardLecture title={"Lecture 4"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, itaque?"}/></Link></div>
        <div className='col-span-12 md:col-span-4 lg:col-span-3 p-5'> <Link to={"/lecture"}> <CardLecture title={"Lecture 5"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, itaque?"}/></Link></div>
        <div className='col-span-12 md:col-span-4 lg:col-span-3 p-5'> <Link to={"/lecture"}> <CardLecture title={"Lecture 6"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, itaque?"}/></Link></div>
        <div className='col-span-12 md:col-span-4 lg:col-span-3 p-5'> <Link to={"/lecture"}> <CardLecture title={"Lecture 7"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, itaque?"}/></Link></div>
        <div className='col-span-12 md:col-span-4 lg:col-span-3 p-5'> <Link to={"/lecture"}> <CardLecture title={"Lecture 8"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, itaque?"}/></Link></div>
        <div className='col-span-12 md:col-span-4 lg:col-span-3 p-5'> <Link to={"/lecture"}> <CardLecture title={"Lecture 9"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, itaque?"}/></Link></div>
        <div className='col-span-12 md:col-span-4 lg:col-span-3 p-5'> <Link to={"/lecture"}> <CardLecture title={"Lecture 10"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, itaque?"}/></Link></div>
        <div className='col-span-12 md:col-span-4 lg:col-span-3 p-5'> <Link to={"/lecture"}> <CardLecture title={"Lecture 11"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, itaque?"}/></Link></div>
        <div className='col-span-12 md:col-span-4 lg:col-span-3 p-5'> <Link to={"/lecture"}> <CardLecture title={"Lecture 12"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, itaque?"}/></Link></div>
        
      
    </div>
  )
}
