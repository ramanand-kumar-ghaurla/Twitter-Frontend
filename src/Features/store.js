import { configureStore } from "@reduxjs/toolkit";
import tweetReducer from '../Features/tweetSlice'
import authReducer from '../Features/authSclice'
import profileReducer from '../Features/profileSlice'
import bulkProfileReducer from '../Features/bulkProfile'
import specificTweetReducer from '../Features/OneTweet'
const store = configureStore({
    reducer:{
        tweetBulk : tweetReducer,
        auth :  authReducer,
        profile: profileReducer,
        bulkProfiles:bulkProfileReducer,
        tweet:specificTweetReducer
    }
})

export default store