import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

import React, { useEffect, useState } from 'react'
import { NowPlayingMovieHeader, TMDB_IMG_URL_PREFIX, TMDB_MOVIES_BASE_URL } from '../utility/constants';
import Skeleton from './Skeleton';

const VideoDetailTitle = ({id, overview, genre, languages, duration, year, ageRating }) => {
  const[images,setImages] = useState(null);
  const fetchImages = async()=>{
    const data = await fetch(TMDB_MOVIES_BASE_URL + id+"/images", NowPlayingMovieHeader);
    const response = await data.json();
    setImages(response);
  }
  useEffect(()=>{
    fetchImages()
  },[]);

  if(images==null){
    return
  }

  const logoPath = images.logos.find(logo=>logo.iso_639_1 === "en");

  return (
    <div className='w-1/3 absolute top-[35%] left-32  z-20 '>
      <div className='w-[50%]'>
        <img src={`${TMDB_IMG_URL_PREFIX}${logoPath.file_path.substring(1)}`} alt="movie name"/>
      </div>
      <h1 className='flex items-center text-white mt-[4%] font-bold '>{year}
        <span className='mx-2'>
          <svg height="5" width="5" viewBox="0 0 512 512">
            <path fill="#adadaa" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
          </svg>
        </span>{duration}
        <span className='mx-2'>
          <svg height="5" width="5" viewBox="0 0 512 512">
            <path fill="#adadaa" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
          </svg>
        </span>{languages}
        <span className='mx-2'>
          <svg height="5" width="5" viewBox="0 0 512 512">
            <path fill="#adadaa" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
          </svg>
        </span>{ageRating}
      </h1>
      <p className=' mt-[4%] text-justify tracking-tight text-sm text-white'>{overview}</p>
      <div className='text-white font-sans mt-[4%] font-bold flex items-center'>
        {genre?.map((eachGenre, index) => {

          if (index === 0) {
            return (
              <span>
                {eachGenre}
              </span>
            )
          } else {
            return (<>
              <span className=''>
                <svg className='w-5 h-5' viewBox="0 0 1024 1024">
                  <path fill="#c2c2be" d="M524 140.5v744c0 6.6-5.4 12-12 12s-12-5.4-12-12v-744c0-6.6 5.4-12 12-12s12 5.4 12 12z" /></svg>
              </span>
              <span>
                {eachGenre}
              </span>
            </>)
          }
        })}

      </div>
      <div className='flex mt-7'>
        <button className='bg-white px-[20%] text-center py-2 rounded-md mr-[2%] text-black font-bold hover:opacity-60'><FontAwesomeIcon icon={faPlay} color='black' /> Play</button>
        <button className='bg-gray-600/30 px-[5%] rounded-md hover:opacity-60'><FontAwesomeIcon icon={faPlus} color='white' /></button>
      </div>
    </div>
  )
}

export default VideoDetailTitle