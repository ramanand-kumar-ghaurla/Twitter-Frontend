import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios,{AxiosError} from "axios";
import api from "../helperFunction/axios";

 export const fetchTweet = createAsyncThunk('fetchTweet', async()=>{
    const response = await api.get('/tweets/get-tweets',{
      
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
    name:'tweetBulk',
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