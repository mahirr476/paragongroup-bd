import Link from "next/link";
import { contactInfo, businesses } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Paragon Group</h3>
          <p className="text-white/60 text-sm leading-relaxed">Leading the way in sustainable business practices across multiple industries. Committed to excellence, innovation, and community development.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-orange">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["About", "Businesses", "Milestones", "Leadership", "Media", "Contact"].map(l => (
              <li key={l}><Link href={`/${l.toLowerCase()}`} className="text-white/60 hover:text-orange transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Top Businesses */}
        <div>
          <h4 className="font-semibold mb-4 text-orange">Our Businesses</h4>
          <ul className="space-y-2 text-sm">
            {businesses.slice(0, 6).map(b => (
              <li key={b.slug}><Link href={`/businesses/${b.slug}`} className="text-white/60 hover:text-orange transition-colors">{b.title}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-orange">Contact</h4>
          <div className="space-y-3 text-sm text-white/60">
            <p>{contactInfo.address}</p>
            <p>📞 {contactInfo.phone}</p>
            <p>📧 {contactInfo.email}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
          <p>© 2026 Paragon Group. All rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <span className="hover:text-orange cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-orange cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
