import React from 'react'
import { Button, Input } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
export default function VerificationCode() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isVisible1, setIsVisible1] = React.useState(false);
  const toggleVisibility1 = () => setIsVisible1(!isVisible1);

  let navigate = useNavigate()
  let VerificationCodeFormik = useFormik({
    initialValues:{
      email:""
    },
    onSubmit:async(values)=>{
      console.log(values);
    //   axios.post("url",values).then(data=>{
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
       
        <h3 className='mx-auto font-bold text-[30px] text-center text-[#57007B]  my-5  '>Enter the code that was sent to your email..</h3>

        <form  onSubmit={VerificationCodeFormik.handleSubmit}>


          <Input
            label="Enter Verification Code"
            variant="bordered"
            className="w-full my-5 ii"
            onChange={VerificationCodeFormik.handleChange}
            name='email'
          />
          <div className='flex justify-center items-center'><Button onClick={()=>{navigate("/resetPassword")}} type='submit' className='btn w-1/2 text-white py-7'>Verify Code</Button></div>
        </form>

      

      </div>


    </div>
  )
}
