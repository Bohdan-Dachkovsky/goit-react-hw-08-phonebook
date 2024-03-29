import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "../operations.js";

const handlePending = (state) => {
  state.isLoggedIn = false;
};
const handleRejected = (state, action) => {
  state.isLoggedIn = false;
  state.isRefreshing = false;
};

export const testSlice = createSlice({
  name: "auth",
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
    },
    [login.pending]: handlePending,
    [login.rejected]: handleRejected,
    [login.fulfilled]: (state, action) => {
        state.user =action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    },
    [logout.pending]: handlePending,
    [logout.rejected]: handleRejected,
    [logout.fulfilled](state, action) {
      state.user ={ name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;

    },
 
    [refreshUser.pending]: handlePending,
    [refreshUser.rejected]: handleRejected,
    [refreshUser.fulfilled](state, action) {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
    },
},
});

export const authReducer = testSlice.reducer;
