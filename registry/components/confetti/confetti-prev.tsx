"use client";

import Confetti, { ConfettiRef } from "@/components/core/confetti";
import { useRef } from "react";

export default function ConfettiDemo() {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <div className="relative [300px] flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl max-sm: h-[300px]">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Confetti
      </span>
      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </div>
  );
}
