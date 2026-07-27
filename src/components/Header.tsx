"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "classes", href: "#classes" },
    { name: "trainers", href: "#trainers" },
    { name: "schedule", href: "#schedule" },
    { name: "membership", href: "#membership" },
    { name: "location", href: "#location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
        {/* Slanted wordmark, Outfit Black Italic */}
        <Link
          href="#"
          className={`font-display text-xl font-black italic tracking-tighter transition-colors duration-200 ${
            isScrolled ? "text-zinc-950 hover:text-zinc-700" : "text-white hover:text-lime-400"
          }`}
        >
          KINETIC<span className={isScrolled ? "text-zinc-950" : "text-lime-400"}>.</span>LAB
        </Link>

        {/* Desktop Nav Links (Uppercase monospace with double-slash hover indicators) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-mono text-xs uppercase font-bold tracking-widest transition-colors duration-200 py-1 ${
                isScrolled ? "text-zinc-600 hover:text-zinc-950" : "text-zinc-400 hover:text-lime-400"
              }`}
            >
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Skewed Parallelogram CTA Button */}
        <div className="hidden md:flex">
          <Link
            href="#membership"
            className={`transform -skew-x-12 px-6 py-2.5 transition-all duration-300 inline-block ${
              isScrolled
                ? "bg-zinc-950 hover:bg-zinc-800 text-white"
                : "bg-lime-400 hover:bg-white text-black shadow-[0_0_20px_rgba(212,255,0,0.15)] hover:shadow-none"
            }`}
          >
            <span className="inline-block skew-x-12 font-mono text-xs font-black tracking-widest">
              BOOK_PASS
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            className={`inline-flex items-center justify-center p-2 transition-colors ${
              isScrolled ? "text-zinc-600 hover:text-zinc-950" : "text-zinc-400 hover:text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b transition-all duration-300 px-6 py-6 ${
            isScrolled
              ? "bg-white border-zinc-200"
              : "bg-zinc-950 border-zinc-850"
          }`}
        >
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-mono text-xs uppercase font-bold tracking-widest transition-all duration-200 ${
                  isScrolled ? "text-zinc-600 hover:text-zinc-950" : "text-zinc-400 hover:text-lime-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className={`pt-4 border-t ${isScrolled ? "border-zinc-200" : "border-zinc-800"}`}>
              <Link
                href="#membership"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-center transform -skew-x-12 py-3 transition-all duration-300 ${
                  isScrolled
                    ? "bg-zinc-950 text-white hover:bg-zinc-800"
                    : "bg-lime-400 text-black hover:bg-white"
                }`}
              >
                <span className="inline-block skew-x-12 font-mono text-xs font-black tracking-widest">
                  BOOK_PASS
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
