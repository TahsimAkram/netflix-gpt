import React from "react";
import MovieCard from "./MovieCard";
import { register } from "swiper/element/bundle";
register();
const MoviesList = ({ movies, banner }) => {
  return (
    <div className="relative z-20 px-5 py-5 ">
    <h1 className="text-white mb-8 text-2xl pl-5">{banner}</h1>
    <swiper-container
      slides-per-view="4"
      css-mode="true"
    >
      {movies.map((movie) => {
        return (
          <swiper-slide>
            <MovieCard
              key={movie.id}
              title={movie.title}
              path={movie.poster_path}
            />
          </swiper-slide>
        );
      })}
    </swiper-container>
    </div>
  );
};

export default MoviesList;
