import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Classes", href: "#classes" },
    { name: "Trainers", href: "#trainers" },
    { name: "Schedule", href: "#schedule" },
    { name: "Membership", href: "#membership" },
    { name: "Location", href: "#location" },
  ];

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-16 font-sans text-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center gap-10">
        {/* Brand statement */}
        <p className="font-display text-lg font-black italic tracking-tighter text-white uppercase max-w-md">
          KINETIC<span className="text-lime-400">.</span>LAB — HIGH OUTPUT ENGINES ONLY
        </p>

        {/* Sitemap inline links */}
        <div className="flex justify-center gap-8 flex-wrap">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs text-zinc-400 hover:text-lime-400 transition-colors duration-200 font-mono font-bold tracking-widest uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact and Social details */}
        <div className="text-xs text-zinc-500 font-mono flex items-center justify-center gap-4 flex-wrap">
          <a href="mailto:info@kineticlab.com" className="hover:text-lime-400 transition-colors">
            info@kineticlab.com
          </a>
          <span>·</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-400 transition-colors"
          >
            Instagram
          </a>
          <span>·</span>
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-400 transition-colors"
          >
            Workout Playlist
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[10px] text-zinc-600 font-mono">
          © 2026 KINETIC LAB. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
