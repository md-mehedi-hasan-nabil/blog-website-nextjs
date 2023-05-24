import Image from 'next/image'
import React from 'react'

export default function RecommendedBlogCard({className, src}) {
    return (
        <article className={`${className ? className : 'col-span-9'}`}>
            <Image className='shadow-lg w-full rounded-3xl' loading="lazy" width={387} height={300} src={src ? src : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0"} alt="" />
            <div className='mt-4'>
                {/* <p className='mb-3'>#Food  #Travel   #Fashion</p> */}
                <h3 className='text-2xl text-[#1F1F1F] font-bold mb-1 cursor-pointer'>Better With Cookie</h3>
                <p className='text-lg text-[#1F1F1F] mb-2 line-clamp-2'>Blogs typically contain written articles on specific topics. These articles may be more informative, educational, entertaining, or a combination of these.</p>

            </div>
        </article>
    )
}
