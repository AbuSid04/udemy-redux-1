import { createSlice } from "@reduxjs/toolkit";

const initAuthState = { isAuthinticated: false };

const authSlice = createSlice({
    name: "authentication",
    initialState: initAuthState,
    reducers: {
        login(state){
            state.isAuthinticated = true
        },
        logout(state){
            state.isAuthinticated = false
        },
    },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;