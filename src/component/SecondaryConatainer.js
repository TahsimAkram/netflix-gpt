import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryConatainer = () => {
  const selector = useSelector((state=>state.movies));
  const nowPlaying = selector.nowPlayingMovies;
  const popular = selector.popularMovies;
  const topRated = selector.topRatedMovies;
  if(nowPlaying == null || popular == null || topRated ==null ) return;
  return (
    <div className='bg-black -mt-28'>
      <MoviesList movies={nowPlaying} banner="Now Playing Movies"/>
      <MoviesList movies={popular} banner="Popular Movies"/>
      <MoviesList movies={topRated} banner="Top Rated Movies" />
    </div>
  )
}

export default SecondaryConatainer