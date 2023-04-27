import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchFlipkartData = createAsyncThunk('flipkartData', () => {
    return fetch('/data.json')
        .then((response) => response.json());
});

const flipkartDataSlice = createSlice({
    name: 'flipkartData',
    initialState: {
        data: [],
        error: '',
        loading: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFlipkartData.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchFlipkartData.rejected, (state, action) => {
            state.error = action.payload;
        })
        builder.addCase(fetchFlipkartData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
    }
})

export default flipkartDataSlice.reducer;

export {
    fetchFlipkartData
}