import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    };
    
    const clearAuthHeader = () => {
      axios.defaults.headers.common.Authorization = '';
    };
    

export const register = createAsyncThunk('task/register', async (credentials, thunkAPI) => {
      try {
            const {data} = await axios.post(`/users/signup`, credentials)
            setAuthHeader(data.token)
            return data
      }
      catch (error) {
            thunkAPI.rejectWithValue(error.message) 
      }
      
} )
      export const login = createAsyncThunk('task/login', async (credentials, thunkAPI) => {
      try {
            const {data} = await axios.post(`/users/login`, credentials)
            setAuthHeader(data.token)
            return data
      }
      catch (error) {
            thunkAPI.rejectWithValue(error.message) 
      }
      
} )
export const logout = createAsyncThunk('task/logout', async (_, thunkAPI) => {
      try {
            const {data} = await axios.post(`/users/logout`)
            clearAuthHeader()
            return data
      }
      catch (error) {
            thunkAPI.rejectWithValue(error.message) 
      }
      
} )
export const refreshUser = createAsyncThunk('task/ser', async (_, thunkAPI) => {
      const state = thunkAPI.getState()
      const historyToken = state.auth.token
      if(historyToken === null) {
      return thunkAPI.rejectWithValue
      }
      setAuthHeader(historyToken)
try {
      const {data} = await axios.get('/users/current')
      return data
}
      catch(error) {
      return thunkAPI.rejectWithValue
}
})
export const addUser = createAsyncThunk('task/addUser', async (credentials, thunkAPI) => {
      try {
            const {data} =  await axios.post("/contacts",credentials)
            console.log(data)
            return data
      }
      catch (error) {
            thunkAPI.rejectWithValue(error.message) 
      }
      
})  
export const dltUser = createAsyncThunk('task/dltContact', async (contactId, thunkAPI) => {
      try {
            const {data} =  await axios.delete(`/contacts/${contactId}`)
            return data
      }
      catch (error) {
            thunkAPI.rejectWithValue(error.message) 
      }
})  
export const getAllcontacts = createAsyncThunk('task/getAllcontacts', async (_, thunkAPI) => {
      try {
            const {data} = await axios.get(`/contacts`)
            
            return data
      }
      catch (error) {
            thunkAPI.rejectWithValue(error.message) 
      }
      
      
})  
