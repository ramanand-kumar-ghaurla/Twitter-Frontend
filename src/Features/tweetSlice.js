    import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
    import axios,{AxiosError} from "axios";
    import api from "../helperFunction/axios";

    export const fetchTweet = createAsyncThunk('fetchTweet', async(pageNo=1)=>{
        const response = await api.get('/tweets/get-tweets',{
        params:{ pageNo}
        })

        
        const tweets = response.data.tweets
        const dataBasePage = response?.data?.pageNo
        const hasMore  = response?.data?.hasMore
       
        return {tweets,pageNo:dataBasePage,hasMore}
    })

    const initialState ={
        tweets :[],
        pageNo:1,
        hasMore:true,
        isError: false,
        isLoading:false
    }

    const tweetSlice = createSlice({
        name:'tweetBulk',
        initialState:initialState,
        reducers:{
            addTweet:(state,action)=>{
                state.isError = false,
                state.isLoading = false
                state.tweets = [action.payload, ...state?.tweets]
            }
        },
        extraReducers: (builder)=>{
            builder.addCase(fetchTweet.pending,(state,action)=>{
                state.isLoading=true,
                state.isError=false,
                state.tweets=[...state?.tweets]
            })
            .addCase(fetchTweet.fulfilled,(state,action)=>{
                state.isError=false;
                if (action.payload.pageNo === 1) {
                    state.tweets = action.payload.tweets;
                } else {
                    state.tweets = [...state.tweets, ...action.payload.tweets];
                }
                state.hasMore = action.payload.hasMore
                state.pageNo = action.payload.pageNo
                state.isLoading=false
                
                })
                .addCase(fetchTweet.rejected,(state,action)=>{
                    state.isError=true,
                    console.log('errors',action.error)
                    state.isLoading=false
                    
                    })    
        },
    
    })

    export const { addTweet}=tweetSlice.actions
    export default tweetSlice.reducer