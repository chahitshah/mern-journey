import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../feature/auth/service/auth.slice"

export const store = configureStore({
    reducer:{
        auth:authReducer,
    }
})