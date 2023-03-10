import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../Api/userApi";

export const login = createAsyncThunk('user/login',async (payload)=>{
    const response = await userApi.login(payload);
    console.log(response)
    return response.data[0].user;
})

export const register = createAsyncThunk('user/register',async (payload)=>{
    const response = await userApi.register(payload)
    console.log(response)
    return response.data[0].user;
})

export const update = createAsyncThunk('user/update' , async (payload)=>{
    const response = await userApi.update(payload);
    console.log(response);
})

const userSlice = createSlice({
    name: 'user',
    initialState:{
        user:{}
    },
    reducers:{
        Update:(state,payload)=>{
            state.user = payload.user;
        },
        Logout: state =>{
            state.user = {}
        }
    },
    extraReducers : {
        [login.fulfilled] : (state,action) =>{
            state.user = action.payload;
        },
        [register.fulfilled] : (state,action) =>{
            state.user = action.payload;
        },
        [update.fulfilled] :(state,action)=>{
            
        }
        
    }
})

export const {Logout} = userSlice.actions;
export default userSlice.reducer