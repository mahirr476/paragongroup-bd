import { businesses } from "@/data/content";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return businesses.map(b => ({ slug: b.slug }));
}

export default async function BusinessDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const biz = businesses.find(b => b.slug === slug);
  if (!biz) notFound();

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img src={biz.bannerImage} alt={biz.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-navy-dark/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-16 w-full">
            <Link href="/businesses" className="text-orange text-sm font-medium mb-4 inline-block hover:underline">← All Businesses</Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{biz.title}</h1>
            <p className="text-white/70 text-lg max-w-2xl">{biz.shortDes}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold text-navy mb-6">About This Business</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{biz.longDes}</p>
            </div>
            <div className="md:col-span-2">
              <img src={biz.detailImage} alt={biz.title} className="rounded-2xl shadow-lg w-full object-cover h-80" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Interested in this business?</h2>
          <p className="text-gray-500 mb-8">Get in touch to learn more about partnership opportunities.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-orange text-white font-semibold rounded-lg hover:bg-orange/90 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
