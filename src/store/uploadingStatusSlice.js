import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isUploading : false
}

const uplaodingStatusSlice = createSlice({
    name: "uploadingStatus",
    initialState,
    reducers:{
        setUploadingStatus: (state,action)=>{
            state.isUploading = action.payload
        },
    }
})

export const {setUploadingStatus} =  uplaodingStatusSlice.actions
export default uplaodingStatusSlice.reducer