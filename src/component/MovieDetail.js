import React, { useEffect, useState } from 'react'
import Header from './Header';
import Skeleton from './Skeleton';
import { useParams } from 'react-router-dom';
import { NowPlayingMovieHeader, TMDB_IMG_URL_PREFIX, TMDB_MOVIES_BASE_URL } from '../utility/constants';

const MovieDetail = () => {
    const [movie,setMovie] = useState(null);
    const {id} = useParams();
    
    const fetchMovieDetail = async () => {
        const url = TMDB_MOVIES_BASE_URL + id;
        const data = await fetch(url, NowPlayingMovieHeader);
        const response = await data.json();
        setMovie(response);
        console.log(response);
    }
    useEffect(() => {
        fetchMovieDetail();
    }, []);

    if ("movies" == "null") {
        return (
            <Skeleton />
        );
    }
    // const description = 
    return (
        <div>
            <div  className="w-full">
                <img className='w- h-1/2 object-contain' src={TMDB_IMG_URL_PREFIX+movie?.poster_path} alt={movie?.title}/>
            </div>
        </div>
    )
}

export default MovieDetail