import { useEffect } from "react";
import mangas_json from "../data/mangas_carousel.json";
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
    setMangas(mangas_json);
  }, []);

  const goToNextItem = () => {
    setCurrentIndex((currentIndex + 1) % mangas.length);
    console.log("currentIndex:", currentIndex); // Add this line
  };

  const goToPreviousItem = () => {
    setCurrentIndex((currentIndex + mangas.length - 1) % mangas.length);
    console.log("currentIndex:", currentIndex); // Add this line
  };

  return (
    <div>
      <div
        className={`h-[604px] ${
          currentIndex % 2 ? "bg-[#2ABDBB]" : "bg-[#F57B20]"
        } `}
      >
        <div className="carousel flex justify-center pt-8">
          <button
            className="w-10 h-10 flex justify-center duration-150 hover:bg-[#23252b] hover:text-white my-auto mx-10"
            onClick={() => goToPreviousItem()}
          >
            <span className=" material-symbols-outlined m-auto pl-1">
              arrow_back_ios
            </span>
          </button>

          <div className=" h-[540px] min-w-900 max-w-5xl overflow-hidden ">
            {mangas.length > 0 ? (
              <img
                src={`${mangas[currentIndex].image}`}
                alt=""
                className="w-full h-full object-cover "
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>

          <button
            className="w-10 h-10 flex justify-center duration-150 hover:bg-[#23252b] hover:text-white my-auto mx-10"
            onClick={() => goToNextItem()}
          >
            <span className="material-symbols-outlined m-auto ">
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
