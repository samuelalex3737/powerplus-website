import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ArrowRight, MessageCircle } from "lucide-react";
import { IMG } from "@/lib/images";
import { COMPANY } from "@/lib/constants";
import { CountUp } from "./Reveal";

export function Hero() {
  const reduce = useReducedMotion();
  const stagger = (i: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section id="hero" className="relative isolate -mt-20 min-h-[100svh] overflow-hidden">
      <img
        src={IMG.heroSkyline}
        alt="UAE skyline at dusk"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(17, 26, 5, 0.75)" }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 pb-24 pt-32 text-white">
        <motion.span
          {...stagger(0)}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Energy Solutions · AI Technology · UAE
        </motion.span>

        <motion.h1
          {...stagger(1)}
          className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Powering Tomorrow's{" "}
          <span className="text-brand">Future Solutions</span>
        </motion.h1>

        <motion.p
          {...stagger(2)}
          className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          Power Plus LLC delivers industrial generators, energy-efficiency
          systems, and AI-powered access control to businesses across the United
          Arab Emirates — engineered for uptime, sized for your reality.
        </motion.p>

        <motion.div {...stagger(3)} className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink shadow-lg transition hover:bg-brand-light"
            style={{ color: "var(--color-ink)" }}
          >
            Request a quote <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={COMPANY.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" /> Talk on WhatsApp
          </a>
        </motion.div>

        <motion.div
          {...stagger(4)}
          className="mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4"
        >
          {[
            { n: 2017, s: "", label: "Founded" },
            { n: 500, s: "+", label: "Installations" },
            { n: 40, s: "%", label: "Avg. energy saved" },
            { n: 24, s: "/7", label: "Support coverage" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-brand sm:text-4xl">
                <CountUp to={s.n} suffix={s.s} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  );
}
