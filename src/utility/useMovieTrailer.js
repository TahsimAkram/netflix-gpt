import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { NowPlayingMovieHeader, TMDB_MOVIES_BASE_URL, TRAILER_VIDEO_URL_POSTFIX } from './constants';
import { addTrailerVideoId } from './moviesSlice';

const useMovieTrailer = (id) => {
  
    const dispatcher = useDispatch();
    const url = TMDB_MOVIES_BASE_URL + id + TRAILER_VIDEO_URL_POSTFIX;
    const fetchTrailerVideo = async () => {
      const data = await fetch(url,NowPlayingMovieHeader);
      const response = await data.json();
      const trailer = response?.results?.filter(
        (video) => video.type === "Trailer"
      );
      dispatcher(addTrailerVideoId(trailer[0]?.key));
    };
  
    useEffect(() => {
      fetchTrailerVideo();
    }, []);
  
}

export default useMovieTrailer;