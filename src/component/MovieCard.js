import React from "react";
import { TMDB_IMG_URL_PREFIX } from "../utility/constants";

const MovieCard = ({ title, path }) => {
  return (
    <div>
      <div className="w-80">
        <img
          className="w-96 h-52 object-cover object-top"
          src={TMDB_IMG_URL_PREFIX + path}
          alt={title}
        />
      </div>
      <h2 className="text-white text-center p-3 text-lg">{title}</h2>
    </div>
  );
};

export default MovieCard;
