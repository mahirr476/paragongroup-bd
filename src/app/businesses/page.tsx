import BusinessCard from "@/components/ui/BusinessCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { businesses } from "@/data/content";

export default function BusinessesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] bg-navy-dark">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="text-orange font-medium text-sm uppercase tracking-widest mb-4">What We Do</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Core Businesses</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Diverse portfolio of businesses driven by innovation, sustainability, and excellence in every sector we operate.</p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((b, i) => (
              <ScrollReveal key={b.id} delay={i * 80}>
                <BusinessCard {...b} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
