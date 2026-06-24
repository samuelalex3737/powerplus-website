import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ArrowRight, Phone } from "lucide-react";
import { IMG } from "@/lib/images";

export function Hero() {
  const reduce = useReducedMotion();
  const stagger = (i: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={IMG.heroSkyline}
        alt="UAE skyline at dusk"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(17, 26, 5, 0.78)" }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 pb-40 pt-32 text-white">
        <motion.span
          {...stagger(0)}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white ring-1 ring-[#94C120]/50 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#94C120" }} />
          UAE Energy & AI Solutions Company
        </motion.span>

        <motion.h1
          {...stagger(1)}
          className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block text-white">Powering Smart Decisions,</span>
          <span className="block" style={{ color: "#94C120" }}>Fueling Future Solutions</span>
        </motion.h1>

        <motion.p
          {...stagger(2)}
          className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          Positive Energy Partner offering tailor-made Energy Saving solutions
          for communities, industries, and properties — based in Sharjah, UAE.
        </motion.p>

        <motion.div {...stagger(3)} className="mt-8 flex flex-wrap gap-3">
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            style={{ background: "#94C120" }}
          >
            Explore Our Services <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> Contact Us
          </a>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10" style={{ background: "#1C2E0A" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
          {[
            { n: "2020", label: "Founded" },
            { n: "10,000+", label: "Lights Retrofitted" },
            { n: "25–40%", label: "Avg. Energy Saved" },
            { n: "24/7", label: "Support" },
          ].map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="text-2xl font-bold sm:text-3xl" style={{ color: "#94C120" }}>{s.n}</div>
              <div className="mt-1 text-xs uppercase tracking-wider" style={{ color: "#A8C870" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-32 left-1/2 z-10 -translate-x-1/2 text-white/60"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  );
}
