import { Time } from "@vidstack/react";
import React from "react";

export function TimeGroup() {
  return (
    <div className="flex items-center text-sm font-medium font-mono">
      <Time className="text-cyan-400" type="current" />
      <div className="mx-1 text-cyan-400/80">/</div>
      <Time className="text-cyan-400" type="duration" />
    </div>
  );
}
