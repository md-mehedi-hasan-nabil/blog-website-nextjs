import React from 'react'

async function getTags() {
    const res = await fetch("http://localhost:3000/api/tags", {
        cache: 'force-cache'
    })
    return res.json()
}

export default async function Tags() {
    const tags = await getTags()
    return (
        <div className='py-4'>
            <h3 className='heading-title mb-2'>Tags</h3>
            <div className='flex items-center gap-2 w-full overflow-x-auto pt-1 pb-2'>
                <div className='cursor-pointer bg-red-600 text-white py-1 px-2.5 rounded-full'>
                    Play
                </div>
                {
                    tags.map(tag => <div key={tag.id} className='cursor-pointer hover:bg-red-600 hover:text-white py-1 px-2.5 rounded-full'>
                        {tag.name}
                    </div>)
                }
            </div>
        </div>
    )
}
