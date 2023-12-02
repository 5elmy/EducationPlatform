import React from 'react'
import "./style.css"
import { Button, Input } from '@nextui-org/react'
import { EyeSlashFilledIcon } from '../../utils/icons/EyeSlashFilledIcon';
import { EyeFilledIcon } from '../../utils/icons/EyeFilledIcon ';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
export default function Login() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isVisible1, setIsVisible1] = React.useState(false);
  const toggleVisibility1 = () => setIsVisible1(!isVisible1);

  let navigate = useNavigate()
  let loginFormik = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    onSubmit:async(values)=>{
      console.log(values);
      // axios.post("",values).then(data=>{
      //       console.log(data);
      //       if(data.status === 200)
      //       {
      //         localStorage.setItem("token",data.data.token)
              
      //           navigate("/dashboard")
              
      //       }
      // }).catch(error=>{
      //   console.log({error});
      // })
    }
  })
  return (
    <div className='bg-main h-screen flex justify-center items-center  relative'>

      <div className='bg-[#fff]  sm:w-full md:w-1/2 lg:w-1/2 rounded-[15px] shadow-xl py-10 p-5 forCircle  relative'>
        <h3 className='register_Color_h3 text-center text-inherit font-[Inspiration] my-5  '>Sign In Form</h3>
        <form  onSubmit={loginFormik.handleSubmit}>

        

          <Input
            label="Email"
            variant="bordered"
            className="w-full my-5 ii"
            onChange={loginFormik.handleChange}
            name='email'
          />

          <Input
            onChange={loginFormik.handleChange}
            name='password'

            label="Password"
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
          <div className='w-full flex justify-end'><Link to={"/forgetPassword"} ><span className='forget text-[#57007B]'>forget Password</span></Link></div>


       
          <div className='flex justify-center items-center'><Button onClick={()=>{navigate("/dashboard")}} type='submit' className='btn w-1/2 text-white py-7'>Sign In</Button></div>
        </form>

        <p className='color_muted text-center m-auto my-5'>Don't have an account? <span className='specialColor'> <Link to={"/register"}>Signup Free!</Link></span> </p>

      </div>


    </div>
  )
}
