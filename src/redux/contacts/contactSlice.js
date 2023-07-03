import { createSlice } from '@reduxjs/toolkit';
import { addUser, dltUser, getAllcontacts} from '../operations.js';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactSlice = createSlice({
  name: 'users',
  initialState: {
    items: [ 
    { id: 1, name: 'Rasel Dosh', number: '093-8383-355' },
    { id: 2, name: 'Jonsion Resta', number: '093-8459-689' },
    { id: 3, name: 'Boris Bankli', number: '095-4543-344' },],
    isLoading: false,
    error: null,
    filter: '', 
  },
  reducers: {
    searchContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    
    [addUser.pending]: handlePending,
    [addUser.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    [addUser.rejected]: handleRejected,
    [dltUser.pending]: handlePending,
    [dltUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (task) => task.id === action.payload.id
      );

      state.items.splice(index, 1);
    },
    [dltUser.rejected]: handleRejected,

    [getAllcontacts.pending]: handlePending,

    [getAllcontacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [getAllcontacts.rejected]: handleRejected,
  },
});

export const { searchContacts } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;