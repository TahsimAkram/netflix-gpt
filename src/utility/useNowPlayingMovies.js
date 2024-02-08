import { useEffect } from "react";
import { addNowPlayingMovies } from "./moviesSlice";
import { useDispatch } from "react-redux";
import { NowPlayingMovieHeader, TMDB_NOWPLAYINGMOVIES_URL } from "./constants";

const useNowPlayingMovies = () => {
  const dispatcher = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(TMDB_NOWPLAYINGMOVIES_URL, NowPlayingMovieHeader);
    const response = await data.json(); 
    dispatcher(addNowPlayingMovies(response.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
