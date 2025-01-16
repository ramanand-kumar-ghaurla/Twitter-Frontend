import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
        userData:  null,
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.userData = action.payload;
            localStorage.setItem("isAuthenticated", true);
            localStorage.setItem("userData", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.userData = null;
            localStorage.removeItem("isAuthenticated");
            localStorage.removeItem("userData");
        },
    },
});
export const{login,logout} = authSlice.actions
export default authSlice.reducer