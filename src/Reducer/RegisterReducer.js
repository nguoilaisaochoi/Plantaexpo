import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../API/AxiosInstance";

export const DangKyTaiKhoan = createAsyncThunk("user/register", async (data) => {
  const response = await AxiosInstance.post("user/reg", data);
  return response.data; 
});

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    registerData: {},
    registerStatus: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(DangKyTaiKhoan.pending, (state, action) => {
        state.registerStatus = "loading";
      })
      .addCase(DangKyTaiKhoan.fulfilled, (state, action) => {
        state.registerStatus = "succeeded";
        state.registerData = action.payload;
      })
      .addCase(DangKyTaiKhoan.rejected, (state, action) => {
        state.registerStatus = "failed";
        console.log(action.error.message);
      });
  },
});
export default registerSlice.reducer;
