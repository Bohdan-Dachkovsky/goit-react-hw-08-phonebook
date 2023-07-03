import { configureStore} from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { contactReducer } from "./contacts/contactSlice.js";
import { authReducer } from "./master/authSlice.js";
import { combineReducers } from 'redux'

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  blacklist: ['user', 'isLoggedIn', 'isRefreshing']
}

const persistedReducer = persistReducer(persistConfig, authReducer)
const reducer = combineReducers({
  auth: persistedReducer,
  users: contactReducer,
})
export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        serializableCheck: false,
      },
    }),
    devTools: process.env.NODE_ENV === 'development',
});
