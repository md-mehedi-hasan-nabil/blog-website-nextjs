import Image from 'next/image'
import React from 'react'
import MostViewsBlogCard from './MostViewsBlogCard'

export default function MostViewsBlogs() {
  return (
    <div>
      <h2 className='heading-title mb-4'>Most views blog</h2>
      <MostViewsBlogCard />
      <MostViewsBlogCard />
      {/* <MostViewsBlogCard /> */}
    </div>
  )
}
