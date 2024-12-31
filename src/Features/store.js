import { configureStore } from "@reduxjs/toolkit";
import tweetReducer from '../Features/tweetSlice'
import authReducer from '../Features/authSclice'
import profileReducer from '../Features/profileSlice'
import bulkProfileReducer from '../Features/bulkProfile'
const store = configureStore({
    reducer:{
        tweet : tweetReducer,
        auth :  authReducer,
        profile: profileReducer,
        bulkProfiles:bulkProfileReducer
    }
})

export default store