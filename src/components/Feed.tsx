import { useEffect } from "react";
import mangass from "../data/mangas_carousel.json";
import { connect } from "react-redux";
import { setMangas, setCurrentIndex } from "../reducers"; // Import your action creators from the reducers.ts file
import { CarouselProps } from "../models/CarouselProps";
import { CarouselState } from "../models/CarouselState.interface";
import TopPicks from "./TopPicks";
import CarouselTabs from "./CarouselTabs";
export default function Feed() {
  return (
    <div className="bg-black h-screen flex justify-center  ">
      <CarouselTabs></CarouselTabs>
      {/* <TopPicks></TopPicks> */}
    </div>
  );
}
