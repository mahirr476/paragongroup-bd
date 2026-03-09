"use client";
import { useState, useEffect } from "react";
import { heroSlides } from "@/data/content";
import Link from "next/link";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/80 via-navy-dark/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <p className="text-orange font-medium mb-4 tracking-widest text-sm uppercase">Established 1993</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Leading the Way in Sustainable Business
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              A conglomerate committed to excellence across multiple industries, driving innovation and sustainable growth for a better tomorrow.
            </p>
            <div className="flex gap-4">
              <Link href="/businesses" className="px-8 py-4 bg-orange text-white font-semibold rounded-lg hover:bg-orange/90 transition-colors text-sm">
                Explore Our Businesses
              </Link>
              <Link href="/about" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-orange" : "w-4 bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
