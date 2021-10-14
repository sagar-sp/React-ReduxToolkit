import { createSlice } from "@reduxjs/toolkit";

const latestAuthInitialState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authetication",
  initialState: latestAuthInitialState,
  reducers: {
    loggin(state) {
      state.isAuthenticated = true;
    },
    loggedOut(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
