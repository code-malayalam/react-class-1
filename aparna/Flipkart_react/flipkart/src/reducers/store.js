import { configureStore, combineReducers } from "@reduxjs/toolkit";
import carouselDataReducer from "./carousel";
import cardDataReducer from "./cards";

const reducer = combineReducers({
  carousel: carouselDataReducer,
  card: cardDataReducer,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
