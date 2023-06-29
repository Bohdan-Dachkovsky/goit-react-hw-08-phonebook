import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/contactSlice.js";
import { authSlice } from ".//authSlice.js";

export const store = configureStore({
    verification: authSlice,
    page: contactReducer,
});
