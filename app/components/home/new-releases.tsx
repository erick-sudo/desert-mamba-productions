import React from "react";
import Image from "next/image";
import { Player } from "../player/Player";

const newReleases = [
  {
    title: "Desert Mysteries",
    description: "A thrilling adventure through the sands.",
    genre: "Thriller",
  },
  {
    title: "Laugh Out Loud",
    description: "A hilarious comedy that will keep you laughing.",
    genre: "Comedy",
  },
  {
    title: "Heartfelt Moments",
    description: "Romantic stories that touch your heart.",
    genre: "Romance",
  },
  {
    title: "Untold Stories",
    description: "Documentaries revealing hidden truths.",
    genre: "Documentary",
  },
];

export default function NewReleases() {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-12">
        <h4 className="text-4xl text-grad">New Releases For You</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
          {newReleases.map((release, index) => (
            <div key={index} className="">
              <div className="h-48 relative rounded overflow-hidden">
                {/* <Image
                  alt=""
                  src="https://cdn.pixabay.com/photo/2024/04/08/16/54/ai-generated-8683952_1280.jpg"
                  fill
                  objectFit="cover"
                /> */}
                <Player />
              </div>
              <div className="p-4">
                <h5 className="text-white text-2xl mb-2">{release.title}</h5>
                <p className="text-gray-400 mb-1">{release.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-b py-2 border-cyan-500">
          <button className="button px-4 py-2 rounded">More Releases</button>
        </div>
      </div>
    </div>
  );
}
