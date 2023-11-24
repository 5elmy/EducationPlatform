import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("auth/register" , async(user,result)=>{
    try {
        let {result} =await axios.post("localhost:5000/auth/signup" , user)
        
        return result
    } catch (error) {
        console.log("error");
    }

})