import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='bg-orange-400 w-1/3 absolute top-80 left-44'>
        <h1 className='text-black text-4xl font-bold'>{title}</h1>
        <p className='text-black mt-8 text-justify tracking-tight'>{overview}</p>
        <div className='flex mt-7'>
            <button className='bg-gray-400 px-4 py-2 rounded-md mr-11'>❤ Play</button>
            <button className='bg-gray-400 px-4 py-2 rounded-md'>+ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle