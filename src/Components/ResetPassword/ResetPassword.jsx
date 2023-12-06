import React from 'react'
// import "./style.css"
import { Button, Input } from '@nextui-org/react'
import { EyeSlashFilledIcon } from '../../utils/icons/EyeSlashFilledIcon';
import { EyeFilledIcon } from '../../utils/icons/EyeFilledIcon ';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import baseURL from "./../../utils/constants.js";
export default function ResetPassword() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isVisible1, setIsVisible1] = React.useState(false);
  const toggleVisibility1 = () => setIsVisible1(!isVisible1);


  let navigate = useNavigate()
  let ResetPasswordFormik = useFormik({
    initialValues:{
      email:""
    },
    onSubmit:async(values)=>{
      console.log(values);
    //   axios.post('/reset-password/{token}','baseURL',values).then(data=>{
    //         console.log(data);
    //         if(data.status === 200)
    //         {
             
              
    //         }
    //   }).catch(error=>{
    //     console.log({error});
    //   })
    }
  })
  return (
    <div className='bg-main h-screen flex justify-center items-center  relative'>

      <div className='bg-[#fff]  w-3/4 md:w-1/2 lg:w-1/2 rounded-[15px] shadow-xl py-10 p-5 forCircle  relative'>
       
        <h3 className='mx-auto font-bold text-[30px] text-center text-[#57007B]  my-5  '>Reset Password</h3>

        <form  onSubmit={ResetPasswordFormik.handleSubmit}>


          <Input
            label="Email"
            variant="bordered"
            className="w-full my-5 ii "
            onChange={ResetPasswordFormik.handleChange}
            name='email'
          />
          <Input
             onChange={ResetPasswordFormik.handleChange}
            name='password'
            label="New Password"
            variant="bordered"
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="w-full my-5 ii"
          />
          <div className='flex justify-center items-center'><Button  onClick={()=>{ navigate("/login")}} type='submit' className='btn w-1/2 text-white py-7'>Submit</Button></div>
        </form>

      

      </div>


    </div>
  )
}
