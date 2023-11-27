import React from 'react'
import "./style.css"
import { Button, Input } from '@nextui-org/react'
import { EyeSlashFilledIcon } from '../../utils/icons/EyeSlashFilledIcon';
import { EyeFilledIcon } from '../../utils/icons/EyeFilledIcon ';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import axios from 'axios';
export default function Register() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isVisible1, setIsVisible1] = React.useState(false);
  const toggleVisibility1 = () => setIsVisible1(!isVisible1);
  const dispatch =useDispatch()
  let {register} = useSelector(state =>state.auth)
  let navigate =useNavigate()

  let registrationFormik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
    },
    onSubmit:async  (values)=>{
      console.log({values});
      try {
        let result = await axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signup",values)
        console.log(result);
        if(result.status=="201")
        {
          navigate("/login")
        }
        // return  result
      } catch (error) {
        console.log({error});
      }
    }
  })

  return (
    <div className='bg-main h-screen flex justify-center items-center  '>
     
      <div className='bg-[#fff]  sm:w-full md:w-1/2 lg:w-1/2 rounded-[15px] shadow-xl py-10 p-5 forCircle  relative'>
        <h3 className='register_Color_h3 text-center text-inherit font-[Inspiration] my-5  '>Sign Up Form</h3>
        <form   onSubmit={registrationFormik.handleSubmit}>

          <Input
            label="Name"
            variant="bordered"
            className="w-full my-5 ii"
            name='name'
            id='name'
            onChange={registrationFormik.handleChange}
          />

          <Input
            label="Email"
            variant="bordered"
            className="w-full my-5 ii"
            name='email'
            onChange={registrationFormik.handleChange}

          />

          <Input
            onChange={registrationFormik.handleChange}

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
            name='password'
          />


          <Input
            onChange={registrationFormik.handleChange}

            label="Confirm Password"
            variant="bordered"
            name='rePassword'
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility1}>
                {isVisible1 ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible1 ? "text" : "password"}
            className="w-full my-5 ii"
          />
          <div className='flex justify-center items-center'><Button type='submit' className='btn w-1/2 text-white py-7'>Sign Up</Button></div>
        </form>

        <p className='color_muted text-center m-auto my-5'>Already have an account? <span className='specialColor'><Link to={"/login"}>Sign In</Link></span> </p>

      </div>


    </div>
  )
}
