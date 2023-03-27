import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    isLoading: true,
    error: "",
    message: "",
  },
  reducers: {
    getUserAction: (state) => {
      state.isLoading = true;
    },
    addUserAction: (state) => {
      state.isLoading = true;
    },
    updateUserAction: (state) => {
      state.isLoading = true;
    },
    deleteUserAction: (state) => {
      state.isLoading = true;
    },
    setDataAction: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    setMessageAction: (state, action) => {
      state.message = action.payload;
      state.isLoading = false;
    },
    setErrorAction: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  getUserAction,
  addUserAction,
  updateUserAction,
  deleteUserAction,
  setDataAction,
  setErrorAction,
  setMessageAction,
} = userSlice.actions;

export const userData = (state) => state.user.data;
export const isLoading = (state) => state.user.isLoading;
export const error = (state) => state.user.error;
export const message = (state) => state.user.message;

export default userSlice.reducer;
