import React from 'react'

export default function Tags() {
    const tags = [
        {
            id: 1,
            name: "Food"
        },
        {
            id: 2,
            name: "Travel"
        },
        {
            id: 3,
            name: "Fashion"
        },
        {
            id: 4,
            name: "Photography"
        },
        {
            id: 5,
            name: "Health"
        }
    ]
    return (
        <div className='py-4'>
            <h3 className='heading-title mb-2'>Tags</h3>
            <div className='flex items-center gap-2 w-full overflow-x-auto pt-1 pb-2'>
                <div className='cursor-pointer bg-red-600 text-white py-1 px-2.5 rounded-full'>
                    Play
                </div>
                {
                    tags.map(tag => <div className='cursor-pointer hover:bg-red-600 hover:text-white py-1 px-2.5 rounded-full' key={tag.id}>
                        {tag.name}
                    </div>)
                }
            </div>
        </div>
    )
}
