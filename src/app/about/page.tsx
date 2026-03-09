import ScrollReveal from "@/components/ui/ScrollReveal";
import ImpactNumbers from "@/components/sections/ImpactNumbers";
import { aboutContent } from "@/data/content";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img src={aboutContent.heroImage} alt="About Paragon" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-dark/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-6">
            <p className="text-orange font-medium text-sm uppercase tracking-widest mb-4">About Us</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{aboutContent.title}</h1>
            <p className="text-white/70 text-lg">{aboutContent.description}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none">
              {aboutContent.about.split("\n\n").map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-6 text-lg">{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-10 shadow-sm h-full">
                <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">{aboutContent.mission}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-2xl p-10 shadow-sm h-full">
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🔭</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">{aboutContent.vision}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Green Mission */}
      <section className="py-24 bg-navy-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🌱</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Green Mission</h2>
            <p className="text-white/70 text-lg leading-relaxed">{aboutContent.greenMission}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Committed */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">{aboutContent.committedTitle}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{aboutContent.committedDescription}</p>
          </ScrollReveal>
        </div>
      </section>

      <ImpactNumbers />
    </>
  );
}
