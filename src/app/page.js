import Blog from "@/components/Blog";
import Feature from "@/components/Feature";
import FeaturedBlogCard from "@/components/FeaturedBlogCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MostViewsBlog from "@/components/MostViewsBlogs";
import Navigation from "@/components/Navigation";
import NewsLetter from "@/components/NewsLetter";
import RecommendedBlogCard from "@/components/RecommendedBlogCard";
import Subscribe from "@/components/Subscribe";
import Tags from "@/components/Tags";

async function getBlogs() {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-cache",
  });
  return res.json();
}

export default async function Home() {
  const blogsData = await getBlogs();
  return (
    <>
      <Header />
      <Navigation />
      <Hero />
      <main className="container">
        <div className="grid grid-cols-12 gap-4 md:gap-12 py-4">
          <div className="col-span-12 lg:col-span-8">
            <Feature />
            <Tags />
            <div>
              <h2 className="heading-title">All Blog</h2>
              <div className="grid grid-cols-12 gap-4 md:gap-8 py-6">
                {/* show two blog */}
                {blogsData.slice(0, 2).map((blog) => (
                  <Blog
                    key={blog.id}
                    blog={blog}
                    className="col-span-12 lg:col-span-6"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <NewsLetter />
            <MostViewsBlog />
          </div>
        </div>

        <div>
          <div className="grid grid-cols-12 gap-6">
            {blogsData.slice(2).map((blog) => (
              <Blog
                key={blog.id}
                blog={blog}
                className="col-span-12 lg:col-span-4 my-2"
              />
            ))}
          </div>
          <div className="text-center py-8">
            <button className="bg-red-600 transition-all hover:bg-red-700 hover:-translate-y-2 text-white cursor-pointer px-6 py-3 rounded-full font-semibold text-lg shadow-xl">
              Load more
            </button>
          </div>
          <div className="border-dashed border-b-2"></div>
        </div>
        <div>
          <h2 className="heading-title mb-6">Recommended</h2>
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            <div className="col-span-12 lg:col-span-9">
              <div className="grid grid-cols-9 gap-4 md:gap-6">
                <RecommendedBlogCard className="col-span-12 lg:col-span-3" />
                <RecommendedBlogCard className="col-span-12 lg:col-span-3" />
                <RecommendedBlogCard className="col-span-12 lg:col-span-3" />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 gap-4">
              <h3 className="heading-title mb-6 -mt-4">Featured blogs</h3>
              <div className="grid grid-cols-12">
                <FeaturedBlogCard className="col-span-4 lg:col-span-12" />
                <FeaturedBlogCard className="col-span-4 lg:col-span-12" />
                <FeaturedBlogCard className="col-span-4 lg:col-span-12" />
              </div>
            </div>
          </div>
        </div>

        <Subscribe />
        <div className="border-dashed border-b-2"></div>
      </main>
      <Footer />
    </>
  );
}
