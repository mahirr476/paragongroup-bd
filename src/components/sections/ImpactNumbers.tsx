"use client";
import { useEffect, useRef, useState } from "react";
import { impacts } from "@/data/content";

function Counter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const num = parseInt(target.replace(/[^0-9]/g, "")) || 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const duration = 2000;
        const step = (ts: number) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          setCount(Math.floor(progress * num));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.unobserve(el);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  const display = target.includes(",") ? count.toLocaleString() : count.toString();
  return <div ref={ref} className="text-3xl md:text-4xl font-bold text-navy">{display}{suffix}</div>;
}

export default function ImpactNumbers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange font-medium text-sm uppercase tracking-widest mb-3">Our Impact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Our Impact in Numbers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {impacts.map((item, i) => (
            <div key={i} className="text-center">
              <Counter target={item.number} suffix={item.number.includes("+") ? "+" : item.number.includes("%") ? "%" : ""} />
              <p className="text-sm font-semibold text-gray-800 mt-2">{item.title}</p>
              <p className="text-xs text-gray-500 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
