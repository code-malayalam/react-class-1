import { configureStore } from '@reduxjs/toolkit';
import flipkartDataReducer from './userInfo';

const store = configureStore({
    reducer: {
        flipkartData: flipkartDataReducer
    }
})

export default store;


