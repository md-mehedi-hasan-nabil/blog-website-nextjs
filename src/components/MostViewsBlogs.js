import React from 'react'
import MostViewsBlogCard from './MostViewsBlogCard'

export default function MostViewsBlogs() {
  return (
    <div className='mt-8'>
      <h2 className='heading-title mb-4'>Most views blog</h2>
      <MostViewsBlogCard />
      <MostViewsBlogCard />
    </div>
  )
}
