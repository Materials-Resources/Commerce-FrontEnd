import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    value: {},
  },
  reducers: {
    updateUser: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = false;
    },
    clearUser: (state) => {
      state.value = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, clearUser } = userInfoSlice.actions;

export default userInfoSlice.reducer;
