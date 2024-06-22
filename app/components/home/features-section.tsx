import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";
import { Player } from "../player/Player";

export default function FeaturesSection() {
  return (
    <div className="">
      <div className="container mx-auto py-16 grid lg:grid-cols-2 gap-4 p-4">
        <div className="flex flex-col gap-6">
          <h4 className="text-4xl text-white font-bold">
            <span className="text-cyan-400">Stream your</span>
            <br /> favorite TV Shows
          </h4>
          <p className="text-gray-200 text-lg">
            Discover a world of entertainment at your fingertips with Desert
            Mamba Productions. Dive into our extensive library of high-quality
            TV shows, featuring captivating storytelling, stunning visuals, and
            diverse genres to suit every taste. Whether you're a fan of gripping
            dramas, thrilling mysteries, heartwarming comedies, or insightful
            documentaries, we've got something for everyone.
          </p>
          <div>
            <button className="cyan-hover bg-cyan-500 py-3 min-w-64 rounded group flex gap-4 justify-center items-center">
              <span>Browse All TV Shows</span>
              <span className="inline-block transition-transform group-hover:translate-x-4 motion-reduce:transform-none">
                <ChevronRightIcon height={20} />
              </span>
            </button>
          </div>
        </div>
        <div className="min-h-[50vh] relative m-4">
          {/* Left */}
          <div className="rounded overflow-hidden absolute left-4 -top-4 bottom-[60%] right-[65%]">
            <Image
              alt=""
              src="https://cdn.pixabay.com/photo/2016/09/22/13/51/bollywood-1687410_640.jpg"
              fill
              objectFit="cover"
            />
          </div>
          <div className="rounded overflow-hidden absolute left-4 top-[45%] bottom-[20%] right-[65%]">
            <Image
              alt=""
              src="https://cdn.pixabay.com/photo/2020/09/01/19/58/woman-5536425_640.jpg"
              fill
              objectFit="cover"
            />
          </div>
          {/* Right */}
          <div className="rounded overflow-hidden absolute left-[65%] -top-4 bottom-[60%] right-4">
            <Image
              alt=""
              src="https://cdn.pixabay.com/photo/2017/04/29/11/35/movie-2270554_640.png"
              fill
              objectFit="cover"
            />
          </div>
          <div className="rounded overflow-hidden absolute left-[65%] top-[45%] bottom-[20%] right-4">
            <Image
              alt=""
              src="https://cdn.pixabay.com/photo/2021/01/31/22/08/camera-5968762_640.jpg"
              fill
              objectFit="cover"
            />
          </div>
          <div className="rounded overflow-hidden absolute left-[65%] top-[85%] -bottom-16 right-4">
            <Image
              alt=""
              src="https://cdn.pixabay.com/photo/2017/06/01/09/18/controller-2362920_640.jpg"
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container mx-auto py-16 grid lg:grid-cols-2 gap-4 p-4">
        <div className="grid p-4 gap-4">
          {[
            { title: "The Dark Knight", image: "" },
            { title: "North by Northwest", image: "" },
          ].map((t, idx) => (
            <div
              key={idx}
              className="rounded overflow-hidden relative h-[30vh] max-w-lg"
            >
              {/* <Image
                alt=""
                src="https://cdn.pixabay.com/photo/2020/09/01/19/58/woman-5536425_640.jpg"
                fill
                objectFit="cover"
              /> */}
              <Player />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/50 flex flex-col justify-end">
                <h4 className="p-4 text-xl text-cyan-400">{t.title}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-4xl text-white font-bold">
            <span className="text-cyan-400">Watch and Download content</span>
            &nbsp;from different Genres
          </h4>
          <p className="text-gray-200 text-lg">
            Dive into our diverse library, discover new favorites, and take your
            entertainment experience to the next level.
          </p>
          <div className="grid text-white">
            {["Documentaries", "Health", "Shows", "Comedies"].map((g, idx) => (
              <div
                key={idx}
                className="w-full flex py-3 border-b border-b-cyan-500"
              >
                <div className="flex-grow px-2">{g}</div>
                <div className="px-2">
                  <ChevronRightIcon height={20} />
                </div>
              </div>
            ))}
          </div>
          <div>
            <button className="cyan-hover bg-cyan-500 py-3 min-w-64 rounded group flex gap-4 justify-center items-center">
              <span>Browse All Genres</span>
              <span className="inline-block transition-transform group-hover:translate-x-4 motion-reduce:transform-none">
                <ChevronRightIcon height={20} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container mx-auto py-16 grid lg:grid-cols-2 gap-4 p-4">
        <div className="flex flex-col gap-6 max-w-lg">
          <h4 className="text-4xl text-white font-bold">
            Stream your&nbsp;
            <span className="text-cyan-400">
              favorite Music Artists and Albums
            </span>
          </h4>
          <p className="text-gray-200 text-lg">
            One-click streaming of your favorite music artists from various
            genre music types and other diversities of the music industry.
          </p>
          <div>
            <button className="cyan-hover bg-cyan-500 py-3 min-w-64 rounded group flex gap-4 justify-center items-center">
              <span>Browse All Music</span>
              <span className="inline-block transition-transform group-hover:translate-x-4 motion-reduce:transform-none">
                <ChevronRightIcon height={20} />
              </span>
            </button>
          </div>
        </div>
        <div className="min-h-[50vh] relative max-w-xl my-8">
          {/* Center */}
          <div className="rounded overflow-hidden absolute left-24 right-24 top-8 bottom-0">
            <Image
              alt=""
              src="https://cdn.pixabay.com/photo/2021/01/31/22/08/camera-5968762_640.jpg"
              fill
              objectFit="cover"
            />
          </div>
          <div className="rounded overflow-hidden absolute left-4 -top-4 h-48 w-48">
            <Image
              alt=""
              src="https://cdn.pixabay.com/photo/2016/09/22/13/51/bollywood-1687410_640.jpg"
              fill
              objectFit="cover"
            />
          </div>
          <div className="rounded overflow-hidden absolute left-0 top-52 h-48 w-48">
            <Image
              alt=""
              src="https://cdn.pixabay.com/photo/2020/09/01/19/58/woman-5536425_640.jpg"
              fill
              objectFit="cover"
            />
          </div>
          {/* Right */}
          <div className="rounded overflow-hidden absolute right-0 top-12 h-64 w-64">
            <Image
              alt=""
              src="https://cdn.pixabay.com/photo/2017/04/29/11/35/movie-2270554_640.png"
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
