import ScrollReveal from "@/components/ui/ScrollReveal";
import { milestones } from "@/data/content";

export default function MilestonesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] bg-navy-dark">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="text-orange font-medium text-sm uppercase tracking-widest mb-4">Our Journey</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Milestones</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">From a printing press in 1989 to a diversified conglomerate spanning 12+ industries.</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-navy/10 -translate-x-1/2" />

            {milestones.map((m, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className={`relative flex items-start gap-8 mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-orange rounded-full border-4 border-white shadow-md z-10" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="inline-block text-orange font-bold text-lg mb-2">{m.year}</span>
                    <h3 className="text-xl font-bold text-navy mb-2">{m.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{m.description}</p>
                    <img src={m.image} alt={m.title} className="rounded-xl w-full h-40 object-cover shadow-sm" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
