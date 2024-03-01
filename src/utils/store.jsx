import { configureStore } from "@reduxjs/toolkit";
import textSlice from "./textSlice";
import cartSlice from "./cartSlice";

export const store=configureStore({
    reducer:{
        text:textSlice,
        cart:cartSlice,
    },
})