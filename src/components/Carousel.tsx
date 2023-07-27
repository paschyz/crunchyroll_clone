import { React, useState, useEffect } from "react";
import mangas from "../data/mangas_carousel.json";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextItem = () => {
    setCurrentIndex((currentIndex + 1) % mangas.length);
  };

  const goToPreviousItem = () => {
    setCurrentIndex((currentIndex + mangas.length - 1) % mangas.length);
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

          <div className="bg-blue-400 h-[530px] min-w-900 max-w-5xl  ">
            <img
              src={`src/assets/images/${mangas[currentIndex].image}`}
              alt=""
              className="w-full h-full object-fill"
            />
            {/* {mangas.map((manga, index) => (
            //TODO add carousel images here
            <div className="px-10">
              {manga.title}
              <img src={`src/assets/images/${manga.image}`} alt="" />
            </div>
          ))} */}
            {/* <div className="w-full h-64  "> */}
            {/* <img
              src={`src/assets/images/${mangas[currentIndex].image}`}
              alt=""
              className="object-cover"
            /> */}
            {/* </div> */}
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
