import Blog from '@/components/Blog'
import Feature from '@/components/Feature'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MostViewsBlog from '@/components/MostViewsBlogs'
import Navigation from '@/components/Navigation'
import NewsLetter from '@/components/NewsLetter'
import Subscribe from '@/components/Subscribe'
import Tags from '@/components/Tags'

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
            <h2 className='heading-title'>All Blog</h2>
            <div className='grid grid-cols-12 gap-4 md:gap-8 py-8'>
              <Blog className="col-span-12 md:col-span-6" />
              <Blog className="col-span-12 md:col-span-6" />
            </div>
          </div>
        </div>
        <div className='col-span-12 md:col-span-4'>
          <NewsLetter />
          <MostViewsBlog />
        </div>

      </div>
      <div className='container'>
        <div className='grid grid-cols-12 gap-4 md:gap-12 py-8'>
          <Blog className="col-span-12 md:col-span-4" />
          <Blog className="col-span-12 md:col-span-4" />
          <Blog className="col-span-12 md:col-span-4" />
        </div>
        <div className='text-center py-8'>
          <button className='bg-red-600 transition-all hover:bg-red-700 hover:-translate-y-2 text-white cursor-pointer px-6 py-3 rounded-full font-semibold text-lg shadow-xl'>Load more</button>
        </div>
        <div className='w-full border-dashed border-b-2'></div>



      </div>
      <div className='container'>
        <h2 className='heading-title'>Recommended</h2>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 md:col-span-9'>
            <div className='grid grid-cols-9'>
              <div className='col-span-9 md:col-span-3'>1</div>
              <div className='col-span-9 md:col-span-3'>1</div>
              <div className='col-span-9 md:col-span-3'>1</div>
            </div>
          </div>
          <div className='col-span-12 md:col-span-3'>
            <h3 className='heading-title mb-4'>Featured blogs</h3>
            <div>
              Featured blogs 1
            </div><div>
              Featured blogs 2
            </div><div>
              Featured blogs 3
            </div>
          </div>
        </div>
      </div>

      <Subscribe />
      <div className='container w-full border-dashed border-b-2'></div>
      <Footer />
    </>
  )
}
