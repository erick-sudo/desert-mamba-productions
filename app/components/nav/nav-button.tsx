"use client";

import { useSpring, animated } from "@react-spring/web";

export interface NavButtonProps {
  iconClassName?: string;
  className?: string;
  text: string;
  icon?: React.ReactNode;
  active: boolean;
  hideText: boolean;
}

export const NavButton: React.FC<NavButtonProps> = function ({
  className,
  iconClassName,
  icon,
  text,
  active,
  hideText,
}) {
  const textAnimationProps = useSpring({
    opacity: hideText ? 0 : 1,
    width: hideText ? 0 : 150,
    padding: hideText ? 0 : 8,
    marginLeft: hideText ? 0 : 4,
    reverse: hideText,
  });

  return (
    <button
      className={`${className} flex items-center text-zinc-400 text-start overflow-hidden`}
    >
      {icon && (
        <span
          className={`flex items-center justify-center p-2 rounded ${
            active
              ? "bg-cyan-300/20 text-cyan-300 ring-1 ring-cyan-300/50 ring-inset"
              : "bg-zinc-800"
          } ${iconClassName}`}
        >
          {icon}
        </span>
      )}
      <animated.div
        className={`text-sm whitespace-nowrap ${active && "text-cyan-400"}`}
        style={textAnimationProps}
      >
        {text}
      </animated.div>
    </button>
  );
};
