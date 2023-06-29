import { createSlice } from '@reduxjs/toolkit';
import {register, login, logout, getNewUser} from '../operations.js';

const handlePending = state => {
  state.isLoggedIn = false;

};
const handleRejected = (state, action) => {
  state.isLoggedIn = false;
  state.isRefreshing = action.payload;


};

export const testSlice = createSlice({
  name: 'user',
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
      state.user =action.payload;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = true;
      state.error = null;
    },


    [login.pending]: handlePending,
    [login.rejected]: handleRejected,
    [login.fulfilled]: (state, action) => {
        state.user =action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    },

    [logout.pending]: handlePending,
    [logout.rejected]: handleRejected,
    [logout.fulfilled](state, action) {
        state = state.splice(0, state.length);
    },
 
    [getNewUser.pending]: handlePending,
    [getNewUser.rejected]: handleRejected,
    [getNewUser.fulfilled](state, action) {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    },
},
});

export const authReducer = testSlice.reducer;