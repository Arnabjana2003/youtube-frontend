import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    videoDetails: null
}

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers:{
        videoDetails: (state,action)=>{
            state.videoDetails = action.payload
        },
        likeVideo: (state)=>{
            state.videoDetails.isLiked = true
            ++state.videoDetails.likes
        }
    }
})

export const {videoDetails,likeVideo} = videoSlice.actions
export default videoSlice.reducer

