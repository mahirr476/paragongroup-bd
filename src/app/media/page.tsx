import ScrollReveal from "@/components/ui/ScrollReveal";
import { news } from "@/data/content";

export default function MediaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] bg-navy-dark">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="text-orange font-medium text-sm uppercase tracking-widest mb-4">Media Center</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Latest Updates</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Stay informed about our latest developments, achievements, and community initiatives.</p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <div className="h-56 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold text-orange bg-orange/10 px-3 py-1.5 rounded-full">{item.tag}</span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-orange transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
