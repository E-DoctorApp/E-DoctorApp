import { configureStore } from '@reduxjs/toolkit'
import doctorReducer from "./userSlice"

export const store = configureStore({
    reducer: {
        aziz: doctorReducer
    }
})





export type RootState = ReturnType<typeof store.getState>




export type AppDispatch = typeof store.dispatch