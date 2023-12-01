import { useEffect } from "react";
import mangas_json from "../data/mangas_carousel.json";
import { connect } from "react-redux";
import { setMangas, setCurrentIndex } from "../reducers"; // Import your action creators from the reducers.ts file
import { CarouselProps } from "../models/CarouselProps";
import { CarouselState } from "../models/CarouselState.interface";

function CarouselTabs({
  mangas,
  currentIndex,
  setMangas,
  setCurrentIndex,
}: CarouselProps) {
  useEffect(() => {
    setMangas(mangas_json);
  }, []);

  const goToIndex = (key: number) => {
    setCurrentIndex(key);
    console.log(currentIndex);
  };
  return (
    <div className="flex h-[74px] space-x-[0.75rem] items-end">
      {mangas.map((_manga, index) => {
        return (
          <button
            onClick={() => goToIndex(index)}
            key={index}
            className="bg-[#23252b] hover:bg-[#393B41] h-[3.4rem] w-[10.25rem] text-left px-2 pb-1"
          >
            <div className=" text-white text-[0.75rem] leading-[135%] bold font-semibold">
              JUJUTSU KAISEN Season 2 New Episodes
            </div>
          </button>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state: CarouselState) => {
  return {
    mangas: state.mangas,
    currentIndex: state.currentIndex,
  };
};

export default connect(mapStateToProps, { setMangas, setCurrentIndex })(
  CarouselTabs
);
