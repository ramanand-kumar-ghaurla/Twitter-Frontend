import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profileData : null
}

const profileSlice = createSlice({
    name:'profile',
    initialState,
    reducers:{
        addProfile :(state, action)=>{
            state.profileData = action.payload
        }
    }

})

export const{addProfile} = profileSlice.actions
export default profileSlice.reducer