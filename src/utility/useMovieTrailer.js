import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { NowPlayingMovieHeader, TRAILER_VIDEO_URL_POSTFIX, TRAILER_VIDEO_URL_PREFIX } from './constants';
import { addTrailerVideoId } from './moviesSlice';

const useMovieTrailer = (id) => {
  
    const dispatcher = useDispatch();
    const url = TRAILER_VIDEO_URL_PREFIX + id + TRAILER_VIDEO_URL_POSTFIX;
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
      console.log(url);
    }, []);
  
}

export default useMovieTrailer;