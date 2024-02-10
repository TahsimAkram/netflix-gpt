import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../utility/useMovieTrailer";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);
  const trailerId = useSelector((state) => state.movies.trailerId);

  return (
    <div className="w-full h-screen text-white">
       <iframe
        className="w-full h-svh aspect-video"
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <div className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-r from-black z-10"></div>
    </div>
  );
};

export default VideoBackground;
