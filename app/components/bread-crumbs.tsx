"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { capitalize } from "../lib/utils";

export default function BreadCrumbs() {
  const pathName = "/home/documentaries"; //usePathname();

  const segments = pathName.split("/").slice(1);

  const breadcrumbs = segments.map((segment, idx) =>
    idx === segments.length - 1 ? (
      <Typography component="div" className="text-cyan-400" key={idx}>
        {capitalize(segment)}
      </Typography>
    ) : (
      <Link
        className="hover:underline text-white"
        color="inherit"
        href={`/${segments.slice(0, idx + 1).join("/")}`}
        key={idx}
      >
        {capitalize(segment)}
      </Link>
    )
  );
  return (
    <div className="w-max bg-white/10 backdrop-blur ring-1 ring-white/30 px-4 py-2 rounded-md">
      <Breadcrumbs
        separator={<ChevronRightIcon className="text-cyan-400" height={20} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </div>
  );
}
