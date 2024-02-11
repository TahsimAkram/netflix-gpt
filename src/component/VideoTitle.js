import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPlay } from '@fortawesome/free-solid-svg-icons';

import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-1/3  absolute top-64 left-32 text-white z-20 '>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className=' mt-8 text-justify tracking-tight text-sm'>{overview}</p>
        <div className='flex mt-7'>
            <button className='bg-white px-6 text-center py-1 rounded-sm mr-7 text-black font-bold hover:opacity-60'><FontAwesomeIcon icon={faPlay} color='black' /> Play</button>
            <button className='bg-gray-200 px-4 py-1 rounded-sm hover:opacity-70 text-black'><FontAwesomeIcon icon={faCircleInfo} /> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle