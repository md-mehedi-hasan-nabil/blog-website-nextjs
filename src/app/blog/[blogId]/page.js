import React from 'react'

async function getBlog() {
    const res = await fetch("http://localhost:3000/api/blogs/4", {
      cache: 'no-cache'
    })
    return res.json()
  }

export const metadata = {
    title: 'Blog Page',
    description: '...',
}

export default function Blog({ params }) {
    return (
        <div>Blog {params.blogId}</div>
    )
}
