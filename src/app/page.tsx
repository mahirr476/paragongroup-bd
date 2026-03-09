import Hero from "@/components/sections/Hero";
import ImpactNumbers from "@/components/sections/ImpactNumbers";
import BusinessCard from "@/components/ui/BusinessCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { businesses, news, aboutContent } from "@/data/content";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactNumbers />

      {/* About Preview */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-orange font-medium text-sm uppercase tracking-widest mb-3">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">{aboutContent.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{aboutContent.about.split("\n\n")[0]}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{aboutContent.about.split("\n\n")[1]}</p>
              <Link href="/about" className="inline-block px-6 py-3 bg-navy text-white rounded-lg font-medium text-sm hover:bg-navy-dark transition-colors">
                Read Our Story
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <img src={aboutContent.heroImage} alt="About Paragon Group" className="rounded-2xl shadow-2xl w-full object-cover h-[400px]" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Businesses */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-orange font-medium text-sm uppercase tracking-widest mb-3">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Core Businesses</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Diverse portfolio of businesses driven by innovation, sustainability, and excellence in every sector we operate.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.slice(0, 6).map((b, i) => (
              <ScrollReveal key={b.id} delay={i * 100}>
                <BusinessCard {...b} />
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/businesses" className="inline-block px-8 py-4 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-all text-sm">
              View All Businesses
            </Link>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-24 bg-navy-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/hero/landing-page3-1750049099527-302267432.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-orange font-medium text-sm uppercase tracking-widest mb-3">Three Decades of Growth</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Excellence Through Innovation & Sustainability</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                With over three decades of experience, we&apos;ve built a diverse portfolio of businesses united by our commitment to excellence, innovation, and sustainable practices.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-orange">30+</div>
                  <div className="text-white/50 text-sm mt-1">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange">12+</div>
                  <div className="text-white/50 text-sm mt-1">Industries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange">50+</div>
                  <div className="text-white/50 text-sm mt-1">Countries Reached</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-orange font-medium text-sm uppercase tracking-widest mb-3">Stay Updated</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">Latest Updates</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-orange bg-orange/10 px-3 py-1 rounded-full">{item.tag}</span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                    <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-navy to-navy-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">Join our journey of innovation and sustainable growth across multiple industries.</p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-orange text-white font-semibold rounded-lg hover:bg-orange/90 transition-colors text-base">
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
