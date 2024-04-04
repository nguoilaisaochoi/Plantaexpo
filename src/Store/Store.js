import { configureStore } from "@reduxjs/toolkit";
import RegisterReducer from "../Reducer/RegisterReducer";
import LoginReducer from "../Reducer/LoginReducer";
import ProductReducer from "../Reducer/ProductReducer";

export const store = configureStore({
  reducer: {
    register: RegisterReducer,
    login: LoginReducer,
    product: ProductReducer,
  },
});
