import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk("itemData", () => {
  return fetch("/data.json").then((response) => response.json());
});

const dataSlice = createSlice({
  name: "itemData",
  initialState: {
    data: [],
    error: "",
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});

export default dataSlice.reducer;
export { fetchData };
