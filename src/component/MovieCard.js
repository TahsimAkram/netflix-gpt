import React from "react";
import { TMDB_IMG_URL_PREFIX } from "../utility/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovieId } from "../utility/moviesSlice";

const MovieCard = ({ title, id, path, }) => {
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  return (
    <div className="cursor-pointer" onClick={() => {
      dispatcher(addMovieId(id))
    }}>
      <div className="w-full flex flex-col">
        <img
          className="w-[100%] h-44 object-cover object-top"
          src={TMDB_IMG_URL_PREFIX + path}
          alt={title}
        />
      </div>
      <h2 className="text-white text-center p-3 text-lg font-sans">{title}</h2>
    </div>
  );
};

export default MovieCard;
