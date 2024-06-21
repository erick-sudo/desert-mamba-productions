"use client";

import { ButtonGroup } from "../ButtonGroup";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSpring, animated } from "@react-spring/web";
import Link from "next/link";
import React, { useState } from "react";
import BreadCrumbs from "../bread-crumbs";

const tabs = [
  { title: "Documentaries", path: "" },
  { title: "Live Stream", path: "" },
  { title: "Podcasts", path: "about" },
  { title: "Shows", path: "projects" },
  { title: "Comedy", path: "articles" },
];

export function NavBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const popUpSprings = useSpring({
    from: {
      opacity: 0,
      translateX: "100%",
    },
    to: {
      opacity: openDrawer ? 1 : 0,
      translateX: openDrawer ? "0%" : "100%",
    },
    config: { tension: 200, friction: 10 },
  });

  return (
    <div className="sticky top-4 z-50">
      <div className="flex text-white text-sm items-center container mx-auto gap-4 p-2 backdrop-blur">
        <div className="flex items-center gap-2">
          <PlusIcon height={24} />
          <span>DMP Logo</span>
        </div>

        {/* Large Screen */}
        <div className="hidden lg:flex justify-end gap-2 flex-grow">
          <ButtonGroup
            items={tabs.map((t) => t.title)}
            onChange={(newIndex) => setActiveTab(newIndex)}
            activeIndex={activeTab}
          >
            <button className="px-6 py-2 button rounded-full">Search</button>
            <button className="px-6 py-2 button rounded-full">Login</button>
          </ButtonGroup>
        </div>

        {/* Small Screen */}
        <div className="flex-grow lg:hidden flex justify-end">
          <button
            onClick={() => setOpenDrawer(true)}
            className="p-2 ring-1 ring-stone-500/20 text-stone-500 rounded cyan-hover duration-300"
          >
            <Bars4Icon className="" height={24} />
          </button>
        </div>
      </div>
      {/* Small Screen Popup */}
      <animated.div
        style={{ ...popUpSprings }}
        className="lg:hidden fixed z-50 flex flex-col bg-stone-800/30 backdrop-blur border border-stone-800 top-2 bottom-4 right-4 rounded"
      >
        <div className="flex p-2 justify-end w-72">
          <button
            onClick={() => setOpenDrawer(false)}
            className="p-1 ring-1 rounded ring-stone-500/20 text-stone-500 cyan-hover duration-300"
          >
            <XMarkIcon className="" height={20} />
          </button>
        </div>
        <div className="grid gap-2 p-4">
          {tabs.map((tab, index) => (
            <Link
              className="rounded px-4 py-2 text-sm text-white cyan-hover hover:bg-stone-900/20 duration-300 flex items-center"
              key={index}
              href={tab.path}
            >
              {tab.title}
            </Link>
          ))}
        </div>
        <div className="p-2 flex flex-col justify-end flex-grow">
          <button className="rounded w-full p-2 button">Login</button>
        </div>
      </animated.div>

      <div className="container mx-auto px-4 mt-2">
        <BreadCrumbs />
      </div>
    </div>
  );
}
