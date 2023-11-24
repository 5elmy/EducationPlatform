import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slice/Auth.slice";

export const BaseUrl= ""

export const store = configureStore({
    reducer:{
      auth:authReducer  
    }
})