import React from 'react'

export default function Subscribe() {
    return (
        <div className='pb-5 pt-8'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <h2 className='text-4xl font-bold my-5 md:my-0'><span className='text-red-600'>Subscribe</span> to new posts</h2>
                <form className=''>
                    <div className='w-full text-center my-2'>
                        <input type="email" name="email" placeholder='Enter your email' className='px-5 py-2.5 w-full rounded-full' required />
                    </div>
                    <div className='text-right my-2'>
                        <button className='text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2'>Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
