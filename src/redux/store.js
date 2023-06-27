import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/contactSlice.js";

export const store = configureStore({
  reducer: contactReducer,
});
