import { useEffect } from "react";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies } from "./moviesSlice";
import { useDispatch } from "react-redux";
import { NOW_PLAYING, NowPlayingMovieHeader, POPULAR, TMDB_MOVIES_BASE_URL, TMDB_NOWPLAYINGMOVIES_URL, TOP_RATED } from "./constants";

const useNowPlayingMovies = () => {
  const dispatcher = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(TMDB_MOVIES_BASE_URL+NOW_PLAYING, NowPlayingMovieHeader);
    const response = await data.json(); 
    dispatcher(addNowPlayingMovies(response.results));
  };
  const getPopularMovies = async () => {
    const data = await fetch(TMDB_MOVIES_BASE_URL+POPULAR, NowPlayingMovieHeader);
    const response = await data.json(); 
    dispatcher(addPopularMovies(response.results));
  };
  const getTopRatedMovies = async () => {
    const data = await fetch(TMDB_MOVIES_BASE_URL+TOP_RATED, NowPlayingMovieHeader);
    const response = await data.json(); 
    dispatcher(addTopRatedMovies(response.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
  }, []);
};

export default useNowPlayingMovies;
