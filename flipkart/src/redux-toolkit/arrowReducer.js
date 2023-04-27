import { createSlice } from "@reduxjs/toolkit";

const arrowSlice = createSlice({
  name: "arrow",
  initialState: {
    show: false,
  },
  reducers: {
    showArrow: (state, action) => {
      state.show = true;
    },
    hideArrow: (state, action) => {
      state.show = false;
    },
  },
});

const { showArrow, hideArrow } = arrowSlice.actions;

export default arrowSlice.reducer;

export { showArrow, hideArrow };
