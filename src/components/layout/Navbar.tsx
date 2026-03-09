"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/businesses", label: "Businesses" },
  { href: "/milestones", label: "Milestones" },
  { href: "/leadership", label: "Leadership" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <span className={`text-2xl font-bold transition-colors ${scrolled ? "text-navy" : "text-white"}`} style={{ fontFamily: "'Playfair Display', serif" }}>
            Paragon Group
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={`text-sm font-medium transition-colors hover:text-orange ${scrolled ? "text-gray-700" : "text-white/90"}`}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
          <span className={`w-6 h-0.5 transition-all ${scrolled ? "bg-navy" : "bg-white"} ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 transition-all ${scrolled ? "bg-navy" : "bg-white"} ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 transition-all ${scrolled ? "bg-navy" : "bg-white"} ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-orange border-b border-gray-100 text-sm font-medium">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
