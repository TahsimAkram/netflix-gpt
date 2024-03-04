import React, { useEffect, useState } from 'react'
import Header from './Header';
import Skeleton from './Skeleton';
import { useParams } from 'react-router-dom';
import { NowPlayingMovieHeader, TMDB_MOVIES_BASE_URL } from '../utility/constants';
import MainContainer from './MainContainer';
import { useDispatch } from 'react-redux';
import { addMovieId } from '../utility/moviesSlice';

const MovieDetail = () => {
    const [movie,setMovie] = useState(null);
    const {movieId} = useParams();
    const dispatcher = useDispatch()
    
    const fetchMovieDetail = async () => {
        const url = TMDB_MOVIES_BASE_URL + movieId;
        const data = await fetch(url, NowPlayingMovieHeader);
        const response = await data.json();
        setMovie(response);
        console.log(response);
    }
    useEffect(() => {
        fetchMovieDetail(); 
        return () => {dispatcher(addMovieId(null))};
}, []);
    

    if (movie == null) {
        return (
            <Skeleton />
        );
    }
    // const description = 
    return (
        <div>
            <Header/>
            <MainContainer selectedMovie = {movie}/>
        </div>
    )
}

export default MovieDetail