import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./reducers"; // Import your reducer from the reducers.ts file
import { CarouselState } from "./models/CarouselState.interface"; // Import the CarouselState interface

const initialState: CarouselState = {
  mangas: [], // The initial mangas array (you can leave it empty or fetch it from the JSON file here)
  currentIndex: 0, // The initial currentIndex
};

const store = configureStore({
  reducer: carouselReducer,
  preloadedState: initialState,
});

export default store;
