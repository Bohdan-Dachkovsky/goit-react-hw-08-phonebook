import { createSlice } from '@reduxjs/toolkit';
import {register, login, logout, refreshUser} from '../operations.js';

const handlePending = state => {
  state.isLoggedIn = false;

};
const handleRejected = (state, action) => {
  state.isLoggedIn = false;
  state.isRefreshing = action.payload;


};

export const testSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  
  extraReducers: {
    [register.pending]: handlePending,
    [register.rejected]: handleRejected,
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = true;
      state.error = null;
    },

    [login.pending]: handlePending,
    [login.rejected]: handleRejected,
    [login.fulfilled]: (state, action) => {
      console.log("log full ", action.payload);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = true;
    },

    [logout.pending]: handlePending,
    [logout.rejected]: handleRejected,
    [logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },

    [refreshUser.pending]: handlePending,
    [refreshUser.rejected]: handleRejected,
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = true;
    },
},
});

export const authReducer = testSlice.reducer;