import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // hideLoading: (state) => {
    //   state.loading = false;
    // },
  },
});
export const { setUser } = userSlice.actions;
// export default alertsSlice.reducer;
