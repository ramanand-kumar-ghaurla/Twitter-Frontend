import { configureStore } from "@reduxjs/toolkit";
import tweetReducer from '../Features/tweetSlice'
const store = configureStore({
    reducer:{
        tweet : tweetReducer
    }
})

export default store