import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const initialState = {
    doctorInfo: "",
    DoctorId: null,
    userRegistred: "",
    loading: false,
    errors: "",
    message: null,
    token: "",
    isAuthenticated: false,
    type: "doctor"
}

export const createDoctor = createAsyncThunk("createDoctor", async (body: Object) => {
    try {
        const data = await axios.post("http://localhost:5000/api/doctor/register", body)
        return data.data
    } catch (error) {
        return error
    }
})
export const doctorLogin = createAsyncThunk("login", async (body: Object) => {
    try {
        const data = await axios.post("http://localhost:5000/api/doctor/login", body)
        return data.data
    } catch (error) {
        return error
    }
})

const userSlicer = createSlice({
    name: "DoctorSlice",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(createDoctor.fulfilled, (state, action) => {
            state.userRegistred = action.payload
            state.loading = false
            state.errors = ""
            state.token = action.payload.token
            state.message = action.payload.message
            state.isAuthenticated = true
            localStorage.setItem("token", action.payload.token)
        })
        builder.addCase(createDoctor.rejected, (state, action) => {
            state.loading = false
            state.token = ""
            // localStorage.setItem("token", "")
            // state.errors=action.payload.error?action.payload.error:""
            // state.errors=action.payload
        })
        builder.addCase(doctorLogin.fulfilled, (state, action) => {
            state.DoctorId = action.payload.DoctorId
            state.loading = false
            state.errors = ""
            state.token = action.payload.token
            state.message = action.payload.message
            state.isAuthenticated = true
            localStorage.setItem("token", action.payload.token)
        })
    },
})



export default userSlicer.reducer;