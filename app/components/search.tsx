"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { joinArrays } from "../lib/utils";
import axios from "axios";
import { LinearProgress } from "@mui/material";

export function Search({
  placeholder,
  className,
}: {
  placeholder: string;
  className?: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className={`${className} relative flex flex-1 flex-shrink-0`}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        className="peer text-cyan-500 caret-cyan-400 block w-full bg-zinc-900 border border-zinc-700/40 rounded-full py-[8px] pl-10 text-sm outline-none placeholder:text-zinc-500"
        placeholder={placeholder}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-zinc-500" />
    </div>
  );
}

interface LazySearchProps<T> {
  zIndex: number;
  className?: string;
  viewPortClassName?: string;
  childClassName?: string;
  placeholder?: string;
  fetchItems: (query: string) => Promise<T[]>;
  renderItem: (item: T) => React.ReactNode;
  receiveSelection: (item: T) => void;
}

export function LazySearch<T>({
  zIndex,
  receiveSelection,
  viewPortClassName,
  childClassName,
  fetchItems,
  renderItem,
  placeholder,
  className,
}: LazySearchProps<T>) {
  const [items, setItems] = useState<Array<T>>([]);
  const [search, setSearch] = useState<string>("");
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const fetchItemsAsync = async () => {
      setSearching(true);
      const results = await fetchItems(search);
      setSearching(false);
      setItems(results);
    };
    if (search) {
      fetchItemsAsync();
    } else {
      setItems([]);
    }
  }, [search, fetchItems]);

  return (
    <div className={`relative h-12`}>
      <div
        style={{ zIndex: zIndex }}
        className={`${className} absolute overflow-hidden left-0 right-0 top-0 grip gap-4 py-2 px-2`}
      >
        <div className="relative flex grow">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className={`peer text-cyan-400 caret-cyan-400 block w-full outline-none bg-transparent  py-1 px-10 text-sm outline-2 placeholder:text-zinc-500`}
            placeholder={placeholder}
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-zinc-500" />
          <div className="absolute top-full inset-x-0">
            <LinearProgress
              sx={{
                opacity: searching ? 1 : 1,
                backgroundColor: "rgba(85, 85, 91, .3)",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "rgb(85, 85, 91)",
                },
              }}
            />
          </div>
        </div>

        <div className={`grid ${viewPortClassName}`}>
          {items.map((item, idx) => (
            <div
              onClick={() => {
                if (typeof receiveSelection === "function") {
                  receiveSelection(item);
                  setItems([]);
                  setSearch("");
                }
              }}
              className={`${
                idx === 0 && "mt-4"
              } cursor-pointer ${childClassName}`}
              key={idx}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
