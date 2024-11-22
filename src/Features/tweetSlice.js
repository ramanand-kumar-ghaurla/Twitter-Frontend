import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios,{AxiosError} from "axios";

 export const fetchTweet = createAsyncThunk('fetchTweet', async()=>{
    const response = await axios.get('http://localhost:9000/api/v1/tweets/get-tweets',{
        headers:{
            Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQ5OTg0YWI5OTNjZDFlZGU3NTZkYWIiLCJlbWFpbCI6InN1bml0YWFyb3JhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoic3VuaXRhX2Fyb3JhIiwiZnVsbE5hbWUiOiJTdW5pdGEgQXJvcmEiLCJpYXQiOjE3MzIyNTE3MDcsImV4cCI6MTczMjMzODEwN30.u7o2VLvIbbKpTwX1t-uPZes--JMmydBElbzqadWR_3k'
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