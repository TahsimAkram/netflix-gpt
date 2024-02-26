import React, { useCallback, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { register } from "swiper/element/bundle";
register();
const MoviesList = ({ movies, banner }) => {
  const [leftArrow,setLeftArrow]= useState(false);
  const [rightArrow,setRightArrow]= useState(true);
  const sliderRef = useRef(null);


  const handlePrevClick = ()=>{
    handlePrev();
    debugger;
    if(sliderRef.current && sliderRef.current.swiper.isBeginning){
      setLeftArrow(false);
    }
    if(sliderRef.current && !sliderRef.current.swiper.end){
      setRightArrow(true);
    }
  }

  const handleNextClick = ()=>{
    handleNext();
    if(!sliderRef.current.swiper.isBeginning){
      setLeftArrow(true);
    }
    if(sliderRef.current.swiper.isEnd){
      setRightArrow(false);
    }
  }
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="relative z-20 px-5 py-5 ">
      <h1 className="text-white mb-8 text-2xl pl-5 font-signika">{banner}</h1>
      <swiper-container
        ref={sliderRef}
        slides-per-view="4"
        css-mode="true"
        space-between="20"
      >
        {movies.map((movie) => {
          return (
            <swiper-slide  key={movie.id}>
              <MovieCard
                id={movie.id}
                title={movie.title}
                path={movie.poster_path}
              />
            </swiper-slide>
          );
        })}
      </swiper-container>
      {leftArrow &&<div className="absolute top-40 left-6 z-30" onClick={handlePrevClick} >
        <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35">
          <path fill="red" d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
      </div>}
      {rightArrow && <div className="absolute top-40 right-6 z-30" onClick={handleNextClick} >
        <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35">
          <path fill="red" d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </div>}
    </div>
  );
};

export default MoviesList;
