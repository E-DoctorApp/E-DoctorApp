import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const initialState={
    userInfo:"",
    userRegistred:"",
    loading:false,
    errors:"",
    message:null,
    token:"",
    isAuthenticated:false,
    type:"doctor"
}

export const createUser=createAsyncThunk("createUser",async(body:Object)=>{
    try {
        const data=await axios.post("http://localhost:5000/api/doctor/register",body)
        console.log("user is created",data.data)
        return data.data
} catch (error) {
    return error
}
})
export const loginFunc=createAsyncThunk("login",async(body:Object)=>{
    try {
        const data=await axios.post("http://localhost:5000/api/doctor/login",body)
        console.log("user is here",data.data)
        return data.data
        
} catch (error) {
    return error
}
})

 const userSlicer = createSlice({
    name: "createUserSlice",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(createUser.fulfilled,(state,action)=>{
            state.userRegistred=action.payload
            state.loading=false
            state.errors=""
            state.token=action.payload.token
            state.message=action.payload.message
            state.isAuthenticated=true
            localStorage.setItem("token",action.payload.token)
        })
        builder.addCase(createUser.rejected,(state,action)=>{
            state.loading=false
            state.token=""
            localStorage.setItem("token","")
            // state.errors=action.payload.error?action.payload.error:""
            // state.errors=action.payload
        })
        builder.addCase(loginFunc.fulfilled,(state,action)=>{
            state.userInfo=action.payload
            state.loading=false
            state.errors=""
            state.token=action.payload.token
            state.message=action.payload.message
            state.isAuthenticated=true
            localStorage.setItem("token",action.payload.token)
        })
    },
})



export default userSlicer.reducer;