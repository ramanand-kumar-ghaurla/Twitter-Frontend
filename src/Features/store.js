import { configureStore } from "@reduxjs/toolkit";
import tweetReducer from '../Features/tweetSlice'
import authReducer from '../Features/authSclice'
const store = configureStore({
    reducer:{
        tweet : tweetReducer,
        auth :  authReducer
    }
})

export default store