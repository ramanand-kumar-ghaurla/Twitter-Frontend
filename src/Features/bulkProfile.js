import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios,{AxiosError} from "axios";
import api from "../helperFunction/axios";

 export const fetchulkProfile = createAsyncThunk('fetch-bulk-profile', async()=>{
    const response = await api.get('/user/get-profiles-bulk',{
        headers:{
            Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmI3NTk2NjRmZjM0MDk3ZjUyNzY3ZTIiLCJlbWFpbCI6InNvbmlhOTUwMDVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzb25pYV9yYW5pIiwiZnVsbE5hbWUiOiJTb25pYSBSYW5pIiwiaWF0IjoxNzM1NTQwMTcwLCJleHAiOjE3MzU2MjY1NzB9.lTpjyjvAj4fV8hR1E6Aw16wkvA17bjPl-wFduY3qoeU'
        }
    })

    
    const profiles = response.data.data
    
   
    return profiles
})

const initialState ={
    profiles :null,
    isError: false,
    isLoading:false
}

const bulkProfileSlice = createSlice({
    name:'bulkProfiles',
    initialState:initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchulkProfile.pending,(state,action)=>{
            state.isLoading=true,
            state.isError=false,
            state.profiles=null
        })
        .addCase(fetchulkProfile.fulfilled,(state,action)=>{
            state.isError=false,
            state.profiles = action.payload
            state.isLoading=false
            
            })
            .addCase(fetchulkProfile.rejected,(state,action)=>{
                state.isError=true,
                console.log('errors',action.error)
                state.isLoading=false
                
                })    
    },
  
})

export default bulkProfileSlice.reducer