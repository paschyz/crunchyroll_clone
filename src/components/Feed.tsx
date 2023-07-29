import { useEffect } from "react";
import mangass from "../data/mangas_carousel.json";
import { connect } from "react-redux";
import { setMangas, setCurrentIndex } from "../reducers"; // Import your action creators from the reducers.ts file
import { CarouselProps } from "../models/CarouselProps";
import { CarouselState } from "../models/CarouselState.interface";

function Feed({
  mangas,
  currentIndex,
  setMangas,
  setCurrentIndex,
}: CarouselProps) {
  useEffect(() => {
    setMangas(mangass);
  }, []);

  const goToIndex = (key: number) => {
    setCurrentIndex(key);
    console.log(currentIndex);
  };

  return (
    <div className="bg-black h-screen flex justify-center  ">
      <div className="flex h-20 space-x-4 items-end">
        {mangas.map((manga, index) => {
          return (
            <button
              onClick={() => goToIndex(index)}
              key={index}
              className="bg-[#23252b] hover:bg-[#393B41] h-14 w-44 text-white brightness-105"
            >
              {manga.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Map the state from the Redux store to props
const mapStateToProps = (state: CarouselState) => {
  return {
    mangas: state.mangas,
    currentIndex: state.currentIndex,
  };
};
// Connect the component to the Redux store
export default connect(mapStateToProps, { setMangas, setCurrentIndex })(Feed);
