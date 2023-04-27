import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./dataReducer";
import arrowReducer from "./arrowReducer";

const store = configureStore({
  reducer: {
    arrow: arrowReducer,
    data: dataReducer,
  },
});

export default store;
