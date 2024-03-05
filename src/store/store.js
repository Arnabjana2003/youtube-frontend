import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice.js'
import playedVideoReducer from './playedVideoSlice.js'
import videosReducer from './videosSlice.js'
import uploadingStatusReducer from './uploadingStatusSlice.js'

export const store = configureStore({
    reducer:{
        auth: authReducer,
        playedVideo: playedVideoReducer,
        uploadingStatus: uploadingStatusReducer,
        videos: videosReducer
    }
    
})