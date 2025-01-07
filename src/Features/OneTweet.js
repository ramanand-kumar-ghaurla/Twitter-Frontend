import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tweet : null
}

const specificTweetSlice = createSlice({
    name:'tweet',
    initialState,
    reducers:{
        addTweet :(state, action)=>{
            state.tweet = action.payload
        }
    }

})

export const{addTweet} = specificTweetSlice.actions
export default specificTweetSlice.reducer