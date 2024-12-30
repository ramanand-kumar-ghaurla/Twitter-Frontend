import { configureStore } from "@reduxjs/toolkit";
import tweetReducer from '../Features/tweetSlice'
import authReducer from '../Features/authSclice'
import profileReducer from '../Features/profileSlice'
const store = configureStore({
    reducer:{
        tweet : tweetReducer,
        auth :  authReducer,
        profile: profileReducer
    }
})

export default store