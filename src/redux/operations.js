import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
set(token) {
axios.defaults.headers.common.Authorization = `Bearer ${token}`},
unset() {
axios.defaults.headers.common.Authorization = ''},

}

export const register = createAsyncThunk('task/register', async (newArray, thunkAPI) => {
      try {
            const {data} = await axios.get(`/users/signup`, newArray)
            token.set(data.token)
            return data
      }
      catch (error) {
            thunkAPI.rejectWithValue(error.message) 
      }
      
} )
export const login = createAsyncThunk('task/login', async (newArray, thunkAPI) => {
      try {
            const {data} = await axios.get(`/users/login`, newArray)
            token.set(data.token)
            return data
      }
      catch (error) {
            thunkAPI.rejectWithValue(error.message) 
      }
      
} )
export const logout = createAsyncThunk('task/logout', async (_, thunkAPI) => {
      try {
            const {data} = await axios.get(`/users/logout`)
            token.unset() 
            return data
      }
      catch (error) {
            thunkAPI.rejectWithValue(error.message) 
      }
      
} )
export const getNewUser = createAsyncThunk('task/getNewUser', async (_, thunkAPI) => {
try {
      const {data} = await axios.get('/users/current')
      return data
}
      catch(error) {
      return thunkAPI.rejectWithValue
}
})
export const addUser = createAsyncThunk('task/addUser', async ({name, phone, id}, thunkAPI) => {
      try {
            const {data} =  await axios.post("/contacts", {name, phone, id})
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
