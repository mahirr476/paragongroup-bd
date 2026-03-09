import ScrollReveal from "@/components/ui/ScrollReveal";
import { contactInfo } from "@/data/content";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] bg-navy-dark">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="text-orange font-medium text-sm uppercase tracking-widest mb-4">Get in Touch</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Join our journey of innovation and sustainable growth across multiple industries.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-navy mb-8">We&apos;d Love to Hear From You</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">Corporate Office</h4>
                      <p className="text-gray-600 text-sm">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">Phone</h4>
                      <p className="text-gray-600 text-sm">{contactInfo.phone}</p>
                      <p className="text-gray-600 text-sm">Hotline: {contactInfo.hotline}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">Email</h4>
                      <p className="text-gray-600 text-sm">{contactInfo.email}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange transition-colors" />
                    <input type="text" placeholder="Last Name" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange transition-colors" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange transition-colors" />
                  <input type="text" placeholder="Subject" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange transition-colors" />
                  <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange transition-colors resize-none" />
                  <button type="submit" className="w-full py-4 bg-orange text-white font-semibold rounded-lg hover:bg-orange/90 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
