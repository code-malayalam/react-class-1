import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCarouselData = createAsyncThunk('carouselData', () => {
  return fetch("./data.json")
      .then((data) => data.json());
    })
    // console.log(data)

const carouselDataSlice = createSlice({
  name: 'carouselData',
  initialState: {
    data:[],
    error: '',
    loading: false
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCarouselData.pending, (state, action) => {
      state.loading = true
    });
    builder.addCase(fetchCarouselData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
    });
    builder.addCase(fetchCarouselData.fulfilled, (state,action) => {
      state.loading = false;
      state.data = action.payload
    })
  }
})


console.log(carouselDataSlice.reducer)

export default carouselDataSlice.reducer
