import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/contactSlice.js";
import { authReducer } from "./master/authSlice.js";
import { combineReducers } from 'redux'
const reducer = combineReducers({
  verification: authReducer,
  page: contactReducer,
})
export const store = configureStore({
    reducer
});
