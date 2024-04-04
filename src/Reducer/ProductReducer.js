import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../API/AxiosInstance";

export const Sanpham = createAsyncThunk("product/list", async () => {
  const response = await AxiosInstance.get("product/list");
  return response.data;
});

export const productSlice = createSlice({
  name: "list",
  initialState: {
    productData: {},
    productStatus: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Sanpham.pending, (state, action) => {
        state.productStatus = "loading";
      })
      .addCase(Sanpham.fulfilled, (state, action) => {
        state.productStatus = "succeeded";
        state.productData = action.payload;
      })
      .addCase(Sanpham.rejected, (state, action) => {
        state.productStatus = "failed";
        console.log(action.error.message);
      });
  },
});

export default productSlice.reducer;
