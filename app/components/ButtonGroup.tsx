import clsx from "clsx";
import React from "react";

export const ButtonGroup: React.FC<{
  items: string[];
  activeClassName?: string;
  tabsClassName?: string;
  className?: string;
  activeIndex: number;
  children?: React.ReactNode;
  onChange: (index: number) => void;
}> = ({
  items,
  activeIndex,
  children,
  onChange,
  tabsClassName = "px-6 py-1 ring-1 ring-transparent rounded-full duration-300",
  activeClassName = "bg-zinc-700/50 ring-zinc-700 backdrop-blur",
  className = "flex w-max gap-2 p-1 bg-zinc-900/50 ring-1 ring-zinc-700 backdrop-blur rounded-full overflow-hidden",
}) => {
  return (
    <div className={className}>
      <div className="flex gap-2">
        {items.map((t, i) => (
          <button
            key={i}
            onClick={() => onChange(i)}
            className={clsx(tabsClassName, {
              [activeClassName]: activeIndex === i,
            })}
          >
            {t}
          </button>
        ))}
      </div>
      {children}
    </div>
  );
};
