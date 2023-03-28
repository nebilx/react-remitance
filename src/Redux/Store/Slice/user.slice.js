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

const userDataState = (state) => state.user.data;
const isLoadingState = (state) => state.user.isLoading;
const errorState = (state) => state.user.error;
const messageState = (state) => state.user.message;

export default userSlice.reducer;

export { userDataState, isLoadingState, errorState, messageState };
