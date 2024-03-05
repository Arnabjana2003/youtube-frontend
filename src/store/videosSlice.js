import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null,
    videosList : []
}

const videosSlice = createSlice({
    name: "videos",
    initialState,
    reducers:{
        updateVideoList: (state,action)=>{
            state.videosList = action.payload
        },
        setError: (state,action)=>{
            state.error = action.payload
        }
    }
})

export const {updateVideoList,setError} = videosSlice.actions
export default videosSlice.reducer