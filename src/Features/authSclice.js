import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios,{AxiosError} from "axios";

 

const initialState ={
   
    isAuthenticated:false,
    userData:null,
    
}

const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        login : (state,action)=>{
            state.isAuthenticated=true,
            state.userData=action.payload
        },
        logout: (state,action)=>{
            state.isAuthenticated= false,
            state.userData = null
        }
    }
  
})

export const {login,logout} = authSlice.actions
export default authSlice.reducer