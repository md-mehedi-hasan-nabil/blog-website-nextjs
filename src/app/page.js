import Blog from '@/components/Blog'
import Feature from '@/components/Feature'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import NewsLetter from '@/components/NewsLetter'
import Tags from '@/components/Tags'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <Hero />

      <div className='container grid grid-cols-12 gap-4 md:gap-12 py-8'>
        <div className='col-span-12 md:col-span-8'>
          <Feature />
          <Tags />
          <div>
            <h2 className='text-3xl font-bold text-[#1F1F1F] mt-10'>All Blog</h2>
            <div className='grid grid-cols-12 gap-4 md:gap-8 py-8'>
              <Blog className="col-span-12 md:col-span-6" />
              <Blog className="col-span-12 md:col-span-6" />
            </div>
          </div>
        </div>
        <div className='col-span-12 md:col-span-4'>
          <NewsLetter />
        </div>

      </div>
      <div className='container'>
        <div className='grid grid-cols-12 gap-4 md:gap-8 py-8'>
          <Blog className="col-span-12 md:col-span-4" />
          <Blog className="col-span-12 md:col-span-4" />
          <Blog className="col-span-12 md:col-span-4" />
        </div>
        <div className='text-center py-8'>

          <button className='bg-red-600 hover:bg-red-700 text-white cursor-pointer px-6 py-3 rounded-full font-semibold text-lg shadow-xl'>Load more</button>
        </div>
      </div>
    </>
  )
}
