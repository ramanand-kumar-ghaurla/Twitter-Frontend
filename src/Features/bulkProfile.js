import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios,{AxiosError} from "axios";
import api from "../helperFunction/axios";

 export const fetchulkProfile = createAsyncThunk('fetch-bulk-profile', async(pageNo = 1)=>{
    const response = await api.get('/user/get-profiles-bulk',{
        params:{ pageNo}
    })

    
    const profiles = response.data.profiles
    const dataBasePage= response.data?.pageNo
    const hasMore = response?.data?.hasMore

    
    
   
    return {profiles,pageNo:dataBasePage,hasMore}
})

const initialState ={
    profiles :[],
    pageNo:1,
    hasMore:true,
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
            state.profiles=[...state.profiles]
        })
        .addCase(fetchulkProfile.fulfilled,(state,action)=>{
            state.isError=false;
            if (action.payload.pageNo === 1) {
                state.profiles = action.payload.profiles;
            } else {
                state.profiles = [...state.profiles, ...action.payload.profiles];
            }
            state.hasMore = action.payload.hasMore
            state.pageNo = action.payload.pageNo
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