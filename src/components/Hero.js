import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white h-[70vh] md:h-[80vh] flex justify-center items-center">
      <Image
        draggable={false}
        style={{ transform: "translate(0, -50%)" }}
        className="absolute top-1/2 left-0 hidden md:block"
        width={318}
        height={540}
        src="/left-bg.png"
        alt="left-bg"
      />
      <Image
        draggable={false}
        style={{ transform: "translate(0, -50%)" }}
        className="absolute top-1/2 right-0 hidden md:block"
        width={281}
        height={314}
        src="/right-bg.png"
        alt="right-bg"
      />
      <div className="flex flex-col gap-8 z-10">
        <p className="tracking-wider text-4xl md:text-6xl text-center font-bold md:leading-[68px]">
          Simple Wisdom for <br /> Complex Lives
        </p>
        <p className="hidden md:block text-center text-lg text-[#1F1F1F] md:leading-9">
          A blog, short for weblog, is a frequently updated web page used for{" "}
          <br /> personal commentary or business content. Blogs are often <br />{" "}
          interactive and include sections at the bottom.
        </p>
        <p className="block md:hidden px-6 text-center text-lg text-[#1F1F1F] md:leading-9">
          A blog, short for weblog, is a frequently updated web page used for
          personal commentary or business content. Blogs are often interactive
          and include sections at the bottom.
        </p>
        <div className="flex justify-center items-center w-72 md:w-96 mx-auto rounded-full bg-[#F0F0F0] shadow-lg">
          <input
            placeholder="Search posts and authors"
            className="w-full pl-8 p-3 rounded-full border-red-600 bg-transparent"
            type="search"
            name="search"
          />
          <div className="bg-red-600 cursor-pointer p-2 rounded-full -ml-12">
            <Image width={27} height={27} src="/search.svg" alt="search" />
          </div>
        </div>
      </div>
    </section>
  );
}
