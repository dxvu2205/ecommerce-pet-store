import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

import authService from '../../services/auth';
import { authUrl, setHeaders } from './url';

const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  id: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};


export const register = createAsyncThunk(
  'users/register',
  async (payload, thunkAPI) => {

    try {
      const token = await axios.post(`${authUrl}/register`, {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        password: payload.password

      })
      localStorage.setItem("token", token.data);

      return token.data;

    } catch (error) {
      console.log(error.response.data);
      return thunkAPI(error.response.data);
    }
  }
)

export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload, { thunkAPI }) => {
    try {
      const token = await axios.post(`${authUrl}/login`, {
        phone: payload.phone,
        password: payload.password,
      });
      console.log(1);

      console.log(token.data);
      localStorage.setItem("token", token.data);
      console.log(2);

      return token.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI(error.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (id, { rejectWithValue }) => {
    try {
      const token = await axios.get(`${authUrl}/user/${id}`, setHeaders());

      localStorage.setItem("token", token.data);

      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);
export const userSilce = createSlice({
  name: 'user',
  initialState: {
    current: {},
    setting: {}
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(register.fulfilled, (state, action) => {
      if (action.payload) {
        const user = action.payload;
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          id: user.id,
          registerStatus: "success",
        };
      } else return state;
    });
    builder.addCase(register.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = action.payload;
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          id: user.id,
          loginStatus: "success",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
    builder.addCase(getUser.pending, (state, action) => {
      return {
        ...state,
        getUserStatus: "pending",
      };
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = action.payload;
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          id: user.id,
          getUserStatus: "success",
        };
      } else return state;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      return {
        ...state,
        getUserStatus: "rejected",
        getUserError: action.payload,
      };
    });
  },



  // [register.fulfilled]: (state, action) => {
  //     state.current =action.payload
  // }


})

// Action creators are generated for each case reducer function
export const { loginSuccess, logoutSuccess } = userSilce.actions

export default userSilce.reducer