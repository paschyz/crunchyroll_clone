import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Manga } from "./models/Manga.type";

import { CarouselState } from "./models/CarouselState.interface";

const initialState: CarouselState = {
  mangas: [],
  currentIndex: 0,
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    setMangas: (state, action: PayloadAction<Manga[]>) => {
      state.mangas = action.payload;
    },
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
  },
});

export const { setMangas, setCurrentIndex } = carouselSlice.actions;
export default carouselSlice.reducer;
