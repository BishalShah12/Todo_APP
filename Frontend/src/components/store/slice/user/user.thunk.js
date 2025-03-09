
import { createAsyncThunk } from "@reduxjs/toolkit"
import { axiosInstance } from "../../../utils/axiosInstance"

export const loginUserThunk = createAsyncThunk("user/loginpage", async(
    {username, password},
    {rejectWithValue}
) => {
    try {
        const response =  await axiosInstance.post("/users/login",{
            username,
            password,
        })
        
       return response.data
       
    } catch (error) {
        rejectWithValue(error)
    }
    
})

export const logoutThunk = createAsyncThunk("user/logout", async(
    _,
    {rejectWithValue}
) => {
    try {
        const response =  await axiosInstance.post("/users/logout")
       return response.data
       
    } catch (error) {
        rejectWithValue(error)
    }
    
})

export const registerUserThunk = createAsyncThunk("user/register", async({username, email, password},{rejectWithValue}) => {
    try {
        const response = await axiosInstance.post("/users/register",{
            username,
            email,
            password
        })

        return response.data
        
    } catch (error) {
        rejectWithValue(error)
    }
})

export const getProfileData = createAsyncThunk("user/getProfile", async(_,{rejectWithValue}) => {
    try {
        const response = await axiosInstance.get("/users/getProfile")
        console.log(response.data.data);
        
        return response.data
        
    } catch (error) {
        rejectWithValue(error)
    }
})


export const addTodo = createAsyncThunk("todos/addTodo", async(data,{rejectWithValue}) => {
    try {
        const response = await axiosInstance.post("/todos/addTodo",data)
        
        return response?.data.data
        
    } catch (error) {
        rejectWithValue(error)
    }
})

export const AllTodo = createAsyncThunk("todos/getAllTodo", async(_,{rejectWithValue}) => {
    
    try {
          const response = await axiosInstance.get("/todos/getAllTodo")
        return response.data.data
      } catch (error) {
        rejectWithValue(error)
      }
})

export const deleteTodo = createAsyncThunk("todos/delete", async(id, {rejectWithValue}) => {
    try {
        const response = await axiosInstance.delete(`/todos/deleteTodo/${id}`)
        console.log(response);
        
    } catch (error) {
        
    }
})

export const editTodo = createAsyncThunk("todos/edit", async(data, {rejectWithValue}) => {
    try {
        console.log("new data",data);
        
        const response = await axiosInstance.put(`/todos/updateTodo/${data._id}`,data)
        console.log('edit ', response);
        
    } catch (error) {
        rejectWithValue(error)
    }
})