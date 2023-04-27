import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCardData = createAsyncThunk('carouselData', () => {
  return fetch("./data.json")
      .then((data) => data.json());
    })
    // console.log(data)

const cardDataSlice = createSlice({
  name: 'cardData',
  initialState: {
    data:[],
    error: '',
    loading: false
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCardData.pending, (state, action) => {
      state.loading = true
    });
    builder.addCase(fetchCardData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
    });
    builder.addCase(fetchCardData.fulfilled, (state,action) => {
      state.loading = false;
      state.data = action.payload
    })
  }
})


console.log(cardDataSlice.reducer)

export default cardDataSlice.reducer
