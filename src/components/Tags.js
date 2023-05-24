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
            <h3 className='text-3xl font-bold text-[#1F1F1F] my-2'>Tags</h3>
            <div className='flex items-center gap-2'>
                {
                    tags.map(tag => <div className='cursor-pointer hover:bg-red-600 hover:text-white py-1 px-2.5 rounded-full' key={tag.id}>
                        {tag.name}
                    </div>)
                }
            </div>
        </div>
    )
}