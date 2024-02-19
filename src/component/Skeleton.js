import React from 'react'
import { ShimmerUIThumbnail } from 'shimmer-ui-effect'

const Skeleton = () => {
  return (
    <div className="mx-10 my-5">
      <ShimmerUIThumbnail height={450} rounded />
      <div className="flex gap-[262px] w-full">
        <ShimmerUIThumbnail height={150} width={300} rounded />
        <ShimmerUIThumbnail height={150} width={300} rounded />
        <ShimmerUIThumbnail height={150} width={300} rounded />
        <ShimmerUIThumbnail height={150} width={300} rounded />
      </div>
    </div>
  )
}

export default Skeleton