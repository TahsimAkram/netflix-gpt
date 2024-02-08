import React, { useEffect } from "react";
import {
  NowPlayingMovieHeader,
  TRAILER_VIDEO_URL_POSTFIX,
  TRAILER_VIDEO_URL_PREFIX,
} from "../utility/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideoId } from "../utility/moviesSlice";

const VideoBackground = ({ id }) => {
  const dispatcher = useDispatch();
  const trailerId = useSelector((state)=>state.movies.trailerId);
  const url = TRAILER_VIDEO_URL_PREFIX + id + TRAILER_VIDEO_URL_POSTFIX
  console.log("trailer : "+url)
  const fetchTrailerVideo = async () => {
    const data = await fetch(url,NowPlayingMovieHeader);
    const response = await data.json();
    const trailer = response?.results.filter(
      (video) => video.type === "Trailer"
    );
    dispatcher(addTrailerVideoId(trailer[0].key));
  };

  useEffect(() => {
    fetchTrailerVideo();
  }, []);

  return (
    <div className="w-full">
      <iframe
        
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen 
      ></iframe>
    </div>
  );
};

export default VideoBackground;
