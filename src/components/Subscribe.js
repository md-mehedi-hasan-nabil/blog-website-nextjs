import React from 'react'

export default function Subscribe() {
    return (
        <div className='container py-5'>
            <div className='flex justify-between items-center'>
                <h2 className='text-4xl font-bold'><span className='text-red-600'>Subscribe</span> to new posts</h2>
                <form className='flex'>
                    <div className='text-center my-2'>
                        <input type="email" name="email" placeholder='Enter your email' className='px-5 py-2.5 w-full rounded-full' required />
                    </div>
                    <div className='text-center my-2'>
                        <button className='w-full text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2'>Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
