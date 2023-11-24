import { createSlice } from "@reduxjs/toolkit";
import { register } from "../api/auth.api.redux";


const initialState ={
    fullname:"",
    email:"",
    password:"",
    password_confirmation:""
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(register.fulfilled,(state , action)=>{
            state.response = action.payload;
        })
    }
})



export const authReducer = authSlice.reducer