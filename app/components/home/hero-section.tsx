"use client";
import React from "react";
import Image from "next/image";
import { ButtonGroup } from "../ButtonGroup";
import SocialMediaLinks from "../social-media-links";

export function HeroSection() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid">
          <div className="p-4 grid">
            <div className="text-5xl md:text-6xl xl:text-7xl text-white font-extrabold py-6">
              <div className="text-cyan-500">Unleashing Creativity</div>
              <div>in the Heart of the Desert</div>
            </div>
            <div className="text-white text-lg max-w-lg mt-6">
              Stream, Watch and Download Quality Entertainment Content that
              suits you.
            </div>
            <div className="mt-4">
              <button className="cyan-hover bg-cyan-500 py-3 min-w-64 rounded group flex gap-2 justify-center">
                <span>Dicover Now</span>
                <span className="inline-block transition-transform group-hover:translate-x-4 motion-reduce:transform-none">
                  -&gt;
                </span>
              </button>
            </div>
          </div>
          {/* <div className="h-[60vh] relative grid grid-cols-4 gap-4 p-4">
            <div className="absolute z-40 top-1/2 left-0 right-0 flex justify-center">
              <ButtonGroup
                className="flex bg-white/10 rounded-full p-2 border border-white/10 backdrop-blur"
                tabsClassName="text-[#fff] px-8 py-2"
                activeClassName="bg-white/10 ring-1 ring-white/10 backdrop-blur rounded-full"
                activeIndex={2}
                items={["Podcasts", "Luo", "Live"]}
                onChange={(index) => {}}
              />
            </div>

            <div className="col-span-3 grid gap-4">
              <div className="relative rounded overflow-hidden col-span-3">
                <Image
                  alt=""
                  src="https://cdn.pixabay.com/photo/2024/04/08/16/54/ai-generated-8683952_1280.jpg"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="grid grid-cols-3 col-span-2 gap-4">
                <div className="relative rounded overflow-hidden">
                  <Image
                    alt=""
                    src="https://cdn.pixabay.com/photo/2016/09/22/13/51/bollywood-1687410_640.jpg"
                    fill
                    objectFit="cover"
                  />
                </div>
                <div className="relative rounded overflow-hidden">
                  <Image
                    alt=""
                    src="https://cdn.pixabay.com/photo/2020/09/01/19/58/woman-5536425_640.jpg"
                    fill
                    objectFit="cover"
                  />
                </div>
                <div className="relative rounded overflow-hidden">
                  <Image
                    alt=""
                    src="https://cdn.pixabay.com/photo/2017/04/29/11/35/movie-2270554_640.png"
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="col-span-1 row-span-2 relative rounded overflow-hidden">
                <Image
                  alt=""
                  src="https://cdn.pixabay.com/photo/2021/01/31/22/08/camera-5968762_640.jpg"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="col-span-2 relative rounded overflow-hidden">
                <Image
                  alt=""
                  src="https://cdn.pixabay.com/photo/2017/06/01/09/18/controller-2362920_640.jpg"
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="relative rounded overflow-hidden">
              <Image
                alt=""
                src="https://cdn.pixabay.com/photo/2021/01/31/22/08/camera-5968759_640.jpg"
                fill
                objectFit="cover"
              />
            </div>
          </div> */}
        </div>
        <div className="flex justify-end p-4 gap-4">
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  );
}
