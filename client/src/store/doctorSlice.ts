import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  doctorInfo: "",
  userRegistred: "",
  loading: false,
  errors: "",
  message: null,
  token: "",
  isAuthenticated: false,
  type: "doctor",
};

export const createDoctor = createAsyncThunk(
  "createDoctor",
  async (body: Object) => {
    try {
      const data = await axios.post(
        "http://localhost:5000/api/doctor/register",
        body
      );
      return data.data;
    } catch (error) {
      return error;
    }
  }
);
export const getOneDoctor = createAsyncThunk("getOneDoctor", async () => {
  try {
    const token = localStorage.getItem("token");
   
        const data = await axios.get("http://localhost:5000/api/doctor/getOne", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
    
        return data.data;

  } catch (error) {
    return error;
  }
});
export const doctorLogin = createAsyncThunk("doctorLogin", async (body: Object) => {
  try {
    const data = await axios.post(
      "http://localhost:5000/api/doctor/login",
      body
    );
    // dispatch(getOneDoctor())
    // getOneDoctor();
    return data.data;
  } catch (error) {
    return error;
  }
});

const userSlicer = createSlice({
  name: "DoctorSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createDoctor.fulfilled, (state, action) => {
      state.loading = false;
      state.errors = "";
      state.message = action.payload.message;
    });
    builder.addCase(createDoctor.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(doctorLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.errors = "";
      state.message = action.payload.message;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(getOneDoctor.fulfilled, (state, action) => {
      state.loading = false;
      state.errors = "";
      state.doctorInfo = action.payload;
      state.isAuthenticated = true;
    });
  },
});

export default userSlicer.reducer;
