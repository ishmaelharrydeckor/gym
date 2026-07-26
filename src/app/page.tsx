"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Flame } from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const xOffset = prefersReducedMotion ? 0 : -40;
      const yOffset = prefersReducedMotion ? 0 : 20;

      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, x: xOffset },
        { opacity: 1, x: 0, duration: 0.6, ease: "power4.out" }
      )
        .fromTo(
          ".hero-title",
          { opacity: 0, x: xOffset },
          { opacity: 1, x: 0, duration: 0.8, ease: "power4.out" },
          "-=0.4"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: yOffset },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, scale: 0.9, rotate: -2 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.3"
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center bg-zinc-950 text-white overflow-x-hidden">
      {/* Dynamic diagonal layout lines & glowing accent lights */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-[-20%] w-[80%] h-[120%] bg-gradient-to-bl from-lime-400/10 via-transparent to-transparent transform rotate-12 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-tr from-lime-400/5 via-transparent to-transparent transform -rotate-12 blur-3xl"></div>
        
        {/* Technical crosshair lines */}
        <div className="w-full h-full border-x border-zinc-900/60 max-w-7xl mx-auto grid grid-cols-4 gap-0">
          <div className="border-r border-zinc-900/40 h-full"></div>
          <div className="border-r border-zinc-900/40 h-full"></div>
          <div className="border-r border-zinc-900/40 h-full"></div>
          <div></div>
        </div>
      </div>

      {/* Hero Content Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 w-full flex flex-col items-start gap-8">
        {/* Eyebrow badge */}
        <div className="hero-eyebrow flex items-center gap-2 border border-lime-400/30 bg-lime-400/5 px-3 py-1 text-xs font-mono font-bold tracking-widest text-lime-400 opacity-0 transform -skew-x-12">
          <Flame className="h-3.5 w-3.5 animate-pulse skew-x-12" />
          <span className="skew-x-12">HIGH OUTPUT ENGINES</span>
        </div>

        {/* Slanted Bold Typography */}
        <div className="max-w-5xl">
          <h1 className="hero-title font-display text-5xl font-black italic tracking-tighter text-white sm:text-7xl lg:text-8xl opacity-0 uppercase leading-[0.9]">
            We don't do<br />
            casual fitness.<br />
            We build <span className="text-lime-400">high-output engines.</span>
          </h1>
          <p className="hero-subtitle mt-8 font-sans text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl opacity-0">
            If you are looking for a comfortable gym to scroll on your phone between sets, this isn't it. KINETIC is engineered for high-intensity conditioning, scientific recovery, and progressive overload.
          </p>
        </div>

        {/* Dynamic Skewed Parallelogram Button */}
        <div className="hero-cta mt-6 opacity-0">
          <Link
            href="#membership"
            className="transform -skew-x-12 bg-lime-400 hover:bg-white text-black px-8 py-4 transition-all duration-300 inline-flex items-center gap-2 shadow-[0_0_30px_rgba(212,255,0,0.2)] hover:shadow-none font-mono"
          >
            <span className="inline-block skew-x-12 font-mono text-sm font-black tracking-widest flex items-center gap-2">
              BOOK_A_FREE_CLASS
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
