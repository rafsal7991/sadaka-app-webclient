import layout from "./layout";
import auth from "./api/auth/authSlice";
import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import userSlice from './slices/auth/userSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  user: userSlice,
  layout:layout,
  auth:auth
});

export default rootReducer;
