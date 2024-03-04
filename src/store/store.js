import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice.js'
import videoReducer from './videoSlice.js'
import uploadingStatusReducer from './uploadingStatusSlice.js'

export const store = configureStore({
    reducer:{
        auth: authReducer,
        video: videoReducer,
        uploadingStatus: uploadingStatusReducer
    }
    
})