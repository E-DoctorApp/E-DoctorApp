import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";



const initialState = {
    PatientId: null,
    userRegistred: false,
    loading: false,
    errors: "",
    message: "",
    token: "",
    isAuthenticated: false,
    type: "patient"
}


export const createPatient = createAsyncThunk("createPatient", async (body: Object) => {
    try {
        const data = await axios.post("http://localhost:5000/api/patient/register", body)
        return data.data
    } catch (error) {
        return error
    }
})
export const loginPatient = createAsyncThunk("login", async (body: { email: string, password: string }) => {
    try {
        const data = await axios.post("http://localhost:5000/api/patient/login", body)
        return data.data
    } catch (error) {
        return error
    }
})



export const patientSlice = createSlice({
    name: "patientSlice",
    initialState,
    reducers: {
        // logoutPatient: (state) => {
        //         state.PatientId = null,
        //         state.userRegistred = false,
        //         state.loading = false,
        //         state.errors = "",
        //         state.message = "",
        //         state.token = "",
        //         state.isAuthenticated = false,
        //         localStorage.removeItem("token")
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(createPatient.fulfilled, (state, action) => {
            state.userRegistred = true
            state.loading = false
            state.errors = ""
            state.token = action.payload.token
            state.message = action.payload.message
            state.isAuthenticated = true
            localStorage.setItem("token", action.payload.token)
        })
        builder.addCase(createPatient.rejected, (state, action) => {
            state.loading = false
            state.token = ""
            // localStorage.setItem("token", "")
            // state.message = action.payload
            // state.errors=action.payload.errors.message
            // state.errors=action.payload
        })
        builder.addCase(loginPatient.fulfilled, (state, action) => {
            state.PatientId = action.payload.PatientId
            state.loading = false
            state.errors = ""
            state.token = action.payload.token
            state.message = action.payload.message
            state.isAuthenticated = true
            localStorage.setItem("token", action.payload.token)
        })
    }
})
// export const { logoutPatient } = patientSlice.actions

export default patientSlice.reducer;
