import Image from 'next/image'
import React from 'react'

export default function FeaturedBlogCard({ className, src }) {
    return (
        <article className={`${className ? className : 'col-span-9'} my-4`}>
            <div className='grid grid-cols-3'>
                <div className='col-span-1'>
                    <Image className='shadow-lg w-20 h-20 object-cover rounded-2xl' loading="lazy" width={80} height={80} src={src ? src : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0"} alt="" />
                </div>
                <div className='col-span-2'>
                    {/* <p className='mb-3'>#Food  #Travel   #Fashion</p> */}
                    <h3 className='text-xl text-[#1F1F1F] font-bold mb-1 cursor-pointer line-clamp-1'>Better With Cookie</h3>
                    <p className='text-base text-[#1F1F1F] mb-2 line-clamp-2'>Blogs typically contain written articles on specific topics. These articles may be more informative, educational, entertaining, or a combination of these.</p>

                </div>
            </div>
        </article>
    )
}
