import React from "react";

async function getBlog(blogId) {
  const res = await fetch(`http://localhost:3000/api/blogs/${blogId}`, {
    cache: "no-cache",
  });
  return res.json();
}

export const metadata = {
  title: "Blog Page",
  description: "...",
};

export default async function Blog({ params }) {
  console.log(await getBlog(params.blogId));

  return <div>Blog {params.blogId}</div>;
}
