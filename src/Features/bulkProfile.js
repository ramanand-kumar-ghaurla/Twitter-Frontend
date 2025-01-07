import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios,{AxiosError} from "axios";
import api from "../helperFunction/axios";

 export const fetchulkProfile = createAsyncThunk('fetch-bulk-profile', async()=>{
    const response = await api.get('/user/get-profiles-bulk',{
       
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