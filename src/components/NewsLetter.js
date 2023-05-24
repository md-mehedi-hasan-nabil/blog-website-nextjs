import React from 'react'

export default function NewsLetter() {
    return (<div className='rounded-3xl bg-red-600 p-8'>
    <h2 className='text-4xl font-bold text-white text-center mb-8'>Get all the latest <br /> posts delivered to <br /> your inbox.</h2>
    <form>
        <div className='text-center my-2'>
            <input type="email" name="email" placeholder='Enter your email' className='px-5 py-2.5 w-full rounded-full' required />
        </div>
        <div className='text-center my-2'>
            <button className='w-full text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2'>Subscribe</button>
        </div>
    </form>
</div>
        
    )
}
