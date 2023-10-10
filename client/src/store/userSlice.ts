import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userInfo:"",

}

export const userSlicer = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state = action.payload;
        }
    }
})

export const { login } = userSlicer.actions;

export default userSlicer.reducer;