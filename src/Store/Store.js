import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Reducer/UserReducer";
import ProductReducer from "../Reducer/ProductReducer";
import CartReducer from "../Reducer/CartReducer";
import CategoryReducer from "../Reducer/CategoryReducer";
import BillReducer from "../Reducer/BillReducer";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    product: ProductReducer,
    category: CategoryReducer,
    cart: CartReducer,
    bill:BillReducer
  },
});
