import Image from 'next/image'
import React from 'react'

export default function MostViewsBlogCard() {
    return (
        <div className='py-3'>
            <Image width={305} height={140} className='w-full rounded-3xl shadow-lg' src="https://images.unsplash.com/photo-1439405326854-014607f694d7" alt="" />
            <h2 className='mt-2 text-2xl font-bold pl-4 text-[#1f1f1f]'>Marketing Coordinator</h2>
            <p className='text-lg pl-4 text-[#1f1f1f]'>Wade Warren</p>
        </div>
    )
}
