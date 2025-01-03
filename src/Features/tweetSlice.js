import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios,{AxiosError} from "axios";
import api from "../helperFunction/axios";

 export const fetchTweet = createAsyncThunk('fetchTweet', async()=>{
    const response = await api.get('/tweets/get-tweets',{
        headers:{
            Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmI3NTk2NjRmZjM0MDk3ZjUyNzY3ZTIiLCJlbWFpbCI6InNvbmlhOTUwMDVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzb25pYV9yYW5pIiwiZnVsbE5hbWUiOiJTb25pYSBSYW5pIiwiaWF0IjoxNzM1NTQwMTcwLCJleHAiOjE3MzU2MjY1NzB9.lTpjyjvAj4fV8hR1E6Aw16wkvA17bjPl-wFduY3qoeU'
        }
    })

    
    const tweets = response.data.tweets
    
    console.log('data', tweets)
    return tweets
})

const initialState ={
    tweets :null,
    isError: false,
    isLoading:false
}

const tweetSlice = createSlice({
    name:'tweet',
    initialState:initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchTweet.pending,(state,action)=>{
            state.isLoading=true,
            state.isError=false,
            state.tweets=null
        })
        .addCase(fetchTweet.fulfilled,(state,action)=>{
            state.isError=false,
            state.tweets = action.payload
            state.isLoading=false
            
            })
            .addCase(fetchTweet.rejected,(state,action)=>{
                state.isError=true,
                console.log('errors',action.error)
                state.isLoading=false
                
                })    
    },
  
})

export default tweetSlice.reducer