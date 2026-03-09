"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { directors } from "@/data/content";

function DirectorCard({ director, index }: { director: typeof directors[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal delay={index * 150}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
        <div className="h-80 overflow-hidden">
          <img src={director.image} alt={director.name} className="w-full h-full object-cover object-top" />
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-navy mb-1">{director.name}</h3>
          <p className="text-orange font-medium text-sm mb-4">{director.designation}</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{director.shortDescription}</p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-semibold text-navy hover:text-orange transition-colors"
          >
            {expanded ? "Read less ↑" : "Read full bio →"}
          </button>

          {expanded && (
            <div className="mt-6 pt-6 border-t border-gray-100">
              {director.longDescription.split("\n\n").map((p, i) => (
                <p key={i} className="text-gray-600 text-sm leading-relaxed mb-4">{p}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] bg-navy-dark">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="text-orange font-medium text-sm uppercase tracking-widest mb-4">Our Team</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Leadership</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Meet the visionaries who have transformed Paragon from humble beginnings into a leading conglomerate.</p>
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {directors.map((d, i) => (
              <DirectorCard key={i} director={d} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
