import { createSlice } from "@reduxjs/toolkit";


const toggleSideNav = createSlice({
    name:"toggle",
    initialState:{open:false},
    reducers:{
        toggleIcon:(state , action)=>{
            console.log({action});
            state.open = !state.open
        }
    }
})

export let  toggleReducer = toggleSideNav.reducer

export let {toggleIcon} = toggleSideNav.actions