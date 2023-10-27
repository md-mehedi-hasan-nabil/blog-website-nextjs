import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function Blog({ className, blog }) {
  const {
    id,
    title,
    content,
    image,
    views,
    likes,
    comments,
    tags,
    date,
    author,
    author_image,
  } = await blog;
  return (
    <article className={`${className ? className : "col-span-6"}`}>
      <Image
        className="shadow-lg w-full rounded-3xl object-cover h-72"
        loading="lazy"
        width={387}
        height={300}
        src={image}
        alt={title}
      />
      <div className="mt-4">
        <p className="mb-3">
          {tags.map((tag) => (
            <span key={tag} className="mx-1 hover:underline cursor-pointer">
              #{tag}
            </span>
          ))}
        </p>
        <Link
          href={`/blog/${id}`}
          className="text-2xl text-[#1F1F1F] font-bold mb-1 line-clamp-1"
        >
          {title}
        </Link>
        <p className="text-lg text-[#1F1F1F] mb-2 line-clamp-3">{content}</p>
        <div className="flex justify-between mt-4">
          <Link
            href={`/blog/${id}`}
            className="text-red-600 font-semibold cursor-pointer"
          >
            Read More...
          </Link>
          <div className="flex gap-4">
            <div className="flex justify-center items-center select-none cursor-pointer gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-red-600"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
              <span>{likes}</span>
            </div>
            <div className="flex justify-center items-center select-none cursor-pointer gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 00-.266.112L8.78 21.53A.75.75 0 017.5 21v-3.955a48.842 48.842 0 01-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
                  clipRule="evenodd"
                />
              </svg>

              <span>{comments?.length ? comments?.length : 0}</span>
            </div>
            <div className="flex justify-center items-center select-none cursor-pointer gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                  clipRule="evenodd"
                />
              </svg>

              <span>{views}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center mt-8">
          <Image
            width={54}
            height={54}
            className="w-14 h-14 object-cover rounded-full shadow-md"
            src={author_image}
            alt={author}
          />
          <div>
            <p className="font-semibold text-lg">{author}</p>
            <p className="text-base">{date}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
