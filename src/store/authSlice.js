import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    authStatus: false,
    authDetails: null,
}
const authSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        login: (state,action)=>{
            state.authStatus = true,
            state.authDetails = action.payload
        },
        logout: (state)=>{
            state.authStatus = false
            state.authDetails = null
        }
    }
})

export const {login,logout} = authSlice.actions
export default authSlice.reducer