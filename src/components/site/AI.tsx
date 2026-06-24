import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { IMG } from "@/lib/images";
import { COMPANY } from "@/lib/constants";

const PROBLEMS = [
  "Dedicated ANPR cameras: AED 15,000–30,000+ per unit",
  "Separate facial recognition hardware",
  "Physical building access cards — easy to lose or clone",
  "Multiple vendors, multiple support contracts",
  "High ongoing hardware maintenance",
];
const SOLUTIONS = [
  "Works with your existing CCTV cameras — no new hardware",
  "Vehicle number plate recognition via AI software",
  "Facial recognition for residents and staff",
  "Automated parking barrier control",
  "Lift and elevator floor access management",
  "One platform · One contract · One support team",
];

const STEPS = [
  { n: "01", title: "Capture", img: IMG.aiCapture, body: "Your existing camera captures the vehicle or person at the entry point. No hardware upgrade required." },
  { n: "02", title: "Process", img: IMG.aiProcess, body: "The AI software analyses the image in real time, matching the plate number or facial profile against the approved access database." },
  { n: "03", title: "Verify", img: null, body: "System confirms identity in milliseconds. Access granted or flagged for review — with a full timestamped audit log." },
  { n: "04", title: "Access", img: IMG.aiAccess, body: "The barrier opens. The lift grants correct floor access. The resident enters — no card, no buzzer, no delay." },
];

const USE_CASES = [
  { emoji: "🏢", title: "Residential buildings", body: "Resident vehicle + visitor management" },
  { emoji: "🏗", title: "Commercial offices", body: "Employee facial recognition entry" },
  { emoji: "🅿", title: "Parking facilities", body: "Automated multi-barrier management" },
  { emoji: "🏙", title: "Mixed-use developments", body: "Vehicle and pedestrian in one system" },
];

function jumpToContact(subject?: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    const sel = document.getElementById("subject") as HTMLSelectElement | null;
    if (sel && subject) sel.value = subject;
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
}

export function AI() {
  const reduce = useReducedMotion();
  return (
    <section id="ai" className="relative px-6 py-24 text-white" style={{ backgroundColor: "#111A05" }}>
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#94C120" }}>AI Access Control</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
              AI-Powered Building Access Control
            </h2>
            <p className="mt-4 text-base text-white/70">
              One software. Your existing cameras. Complete building access intelligence.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-3xl">
          <div className="relative">
            <img src={IMG.aiHero} alt="CCTV security camera for AI integration" className="h-72 w-full object-cover sm:h-96" />
            <div className="absolute inset-0" style={{ background: "rgba(15,26,10,0.65)" }} />
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">The Traditional Way</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-white/60">
                {PROBLEMS.map((p) => (
                  <li key={p} className="flex gap-3"><span className="text-red-400">✗</span><span>{p}</span></li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border-2 p-7" style={{ borderColor: "#94C120", background: "rgba(148,193,32,0.06)" }}>
              <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: "#94C120" }}>The Power Plus Way</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-white">
                {SOLUTIONS.map((p) => (
                  <li key={p} className="flex gap-3"><span style={{ color: "#94C120" }}>✓</span><span>{p}</span></li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <h3 className="mt-16 text-center text-xl font-bold uppercase tracking-wider" style={{ color: "#94C120" }}>How It Works</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: "#94C120" }}>{s.n}</div>
              {s.img && (
                <div className="mt-4 overflow-hidden rounded-xl">
                  <img src={s.img} alt={s.title} className="aspect-[4/3] w-full object-cover" />
                </div>
              )}
              <h4 className="mt-4 font-bold uppercase tracking-wide">{s.title}</h4>
              <p className="mt-2 text-sm text-white/70">{s.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {USE_CASES.map((u, i) => (
            <Reveal key={u.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(148,193,32,0.15)" }}>
                <div className="text-2xl">{u.emoji}</div>
                <h4 className="mt-2 font-bold text-white">{u.title}</h4>
                <p className="mt-1 text-sm text-white/70">{u.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <figure className="mt-16 rounded-3xl p-8" style={{ borderLeft: "4px solid #94C120", background: "rgba(148,193,32,0.08)" }}>
            <blockquote className="text-lg italic text-white/90 sm:text-xl">
              "We co-developed and deployed an AI access control system that integrates with existing cameras to deliver vehicle and facial recognition for parking and lift access — replacing traditional ANPR hardware at a fraction of the cost."
            </blockquote>
            <figcaption className="mt-4 text-sm text-white/60">
              — {COMPANY.director}, Director, {COMPANY.legalName}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              onClick={jumpToContact("AI Access Control Demo")}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02]"
              style={{ background: "#94C120" }}
            >
              Enquire About AI Access Control
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
