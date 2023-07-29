import { useEffect } from "react";
import mangass from "../data/mangas_carousel.json";
import { connect } from "react-redux";
import { setMangas, setCurrentIndex } from "../reducers"; // Import your action creators from the reducers.ts file
import { CarouselProps } from "../models/CarouselProps";
import { CarouselState } from "../models/CarouselState.interface";

function Carousel({
  mangas,
  currentIndex,
  setMangas,
  setCurrentIndex,
}: CarouselProps) {
  useEffect(() => {
    setMangas(mangass);
    console.log("Current index", currentIndex);
  }, []);

  const goToNextItem = () => {
    setCurrentIndex((currentIndex + 1) % mangas.length);
    console.log(currentIndex);
  };

  const goToPreviousItem = () => {
    setCurrentIndex((currentIndex + mangas.length - 1) % mangas.length);
    console.log(currentIndex);
  };

  return (
    <div>
      <div className="h-[604px] bg-orange-300 ">
        <div className="carousel flex justify-center pt-9">
          <button
            className="w-10 h-10 flex justify-center duration-150 hover:bg-[#23252b] hover:text-white my-auto mx-10"
            onClick={() => goToNextItem()}
          >
            <span className=" material-symbols-outlined m-auto pl-2">
              arrow_back_ios
            </span>
          </button>

          <div className=" h-[530px] min-w-900 max-w-5xl overflow-hidden ">
            <img
              src={`src/assets/images/${mangas[currentIndex].image}`}
              alt=""
              className="w-full h-full object-cover "
            />
          </div>

          <button
            className="w-10 h-10 flex justify-center duration-150 hover:bg-[#23252b] hover:text-white my-auto mx-10"
            onClick={() => goToPreviousItem()}
          >
            <span className="material-symbols-outlined m-auto">
              arrow_forward_ios
            </span>{" "}
          </button>
        </div>
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
export default connect(mapStateToProps, { setMangas, setCurrentIndex })(
  Carousel
);
