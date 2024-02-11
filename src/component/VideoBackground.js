import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../utility/useMovieTrailer";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);
  const trailerId = useSelector((state) => state.movies.trailerId);
  return (
    <div>
       <iframe
        className="w-full h-screen z-0"
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        ></iframe>
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-black"></div>
    </div>
  );
};

export default VideoBackground;
