import React from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";

async function getBlog(blogId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_NAME}/api/blogs/${blogId}`,
    {
      cache: "no-cache",
    }
  );
  return res.json();
}

export const metadata = {
  title: "Blog Page",
  description: "...",
};

export default async function Blog({ params }) {
  const blog = await getBlog(params.blogId);
  const { title, image, author, author_image, date, comments, tags } =
    blog || {};

  return (
    <div>
      <Navigation />
      <div className="container mt-2">
        <Image
          className="w-full h-[40rem] object-cover rounded-2xl"
          width="1200"
          height="730"
          src={image}
          alt="blog-image"
        />
        <h1 className="text-3xl font-semibold text-slate-800 my-4">{title}</h1>
        <div className="flex items-center gap-3 my-4">
          <Image
            className="w-16 h-16 rounded-full object-cover"
            src={author_image}
            width="100"
            height="100"
            alt="author"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-slate-800">{author}</h3>
              <button className="bg-slate-200 hover:bg-slate-300 font-medium px-2 rounded">
                Follow
              </button>
            </div>
            <p className="text-slate-500 font-medium">{date}</p>
          </div>
        </div>
        <p className="text-lg">
          In this tutorial, we'll explore how to create JSON data for a blog
          application. If you’re building a SaaS, AI tool or any other web app,
          and you don’t have the all the time to set up boilerplate codes (e.g
          auth, DNS records, payment webhooks, components, animation, etc),
          Then, you need ShipFast. Shipfast saves 18+ hrs of development
          headache , it’s trusted by 300+ devs and it has a very great
          documentation. In this tutorial, we'll explore how to create JSON data
          for a blog application. If you’re building a SaaS, AI tool or any
          other web app, and you don’t have the all the time to set up
          boilerplate codes (e.g auth, DNS records, payment webhooks,
          components, animation, etc), Then, you need ShipFast. Shipfast saves
          18+ hrs of development headache , it’s trusted by 300+ devs and it has
          a very great documentation. In this tutorial, we'll explore how to
          create JSON data for a blog application. If you’re building a SaaS, AI
          tool or any other web app, and you don’t have the all the time to set
          up boilerplate codes (e.g auth, DNS records, payment webhooks,
          components, animation, etc),
        </p>
      </div>
    </div>
  );
}
