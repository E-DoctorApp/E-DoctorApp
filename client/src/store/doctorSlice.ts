import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  doctorInfo: null,
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
    console.log(data.data,"this is data from store")
    return data.data;
  } catch (error) {
    return error;
  }
});

const userSlicer = createSlice({
  name: "DoctorSlice",
  initialState,
  reducers: {
    logoutDoctor: (state) => {
      state.loading = false
      state.errors = ""
      state.doctorInfo = null
      state.isAuthenticated = false
      localStorage.removeItem("token")
      localStorage.removeItem("type")
}
  },
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
      localStorage.setItem("type", "doctor");
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
