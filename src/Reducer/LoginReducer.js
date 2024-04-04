import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../API/AxiosInstance";

export const Dangnhap = createAsyncThunk("user/login", async (data) => {
  const response = await AxiosInstance.post("user/login", data);
  return response.data; 
});

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginData: {},
    loginStatus: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Dangnhap.pending, (state, action) => {
        state.loginStatus = "loading";
      })
      .addCase(Dangnhap.fulfilled, (state, action) => {
        state.loginStatus = "succeeded";
        state.loginData = action.payload;
      })
      .addCase(Dangnhap.rejected, (state, action) => {
        state.loginStatus = "failed";
        console.log(action.error.message);
      });
  },
});
export default loginSlice.reducer;
