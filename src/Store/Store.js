import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Reducer/UserReducer";
import ProductReducer from "../Reducer/ProductReducer";
import ProductDetailReducer from "../Reducer/ProductDetailReducer";
import CartReducer from "../Reducer/CartReducer";
import CategoryReducer from "../Reducer/CategoryReducer";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    product: ProductReducer,
    category: CategoryReducer,
    cart: CartReducer,
  },
});
