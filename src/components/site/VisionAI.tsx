import { motion, useReducedMotion } from "framer-motion";
import { ScanLine, ShieldAlert, Thermometer, BarChart3 } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/whatsapp-icon";
import { Reveal } from "./Reveal";
import { COMPANY } from "@/lib/constants";

const USE_CASES = [
  {
    icon: ScanLine,
    title: "Automated Quality Control",
    problem: "Manual quality checks are slow, inconsistent, and costly. A cup factory fills each cup with water to find defects. A circuit board factory has workers squinting at components all day.",
    solution: "Vision AI watches your production line and instantly identifies defective products - wrong size, cracks, holes, missing components - at full production speed. No human intervention required. Zero defects leave the line.",
    industries: "Manufacturing, food & beverage, packaging, electronics",
  },
  {
    icon: ShieldAlert,
    title: "Worker Safety Monitoring",
    problem: "Workers entering hazardous zones without PPE is a major HSE risk - and catching every violation manually is impossible across a large facility.",
    solution: "Vision AI monitors every entry point and zone in real time. If a worker is missing their helmet, gloves, mask, vest, or safety glasses - the system flags it instantly. Alert sent to supervisor, photo logged, timestamp recorded. Full compliance reports generated automatically.",
    industries: "Construction, oil & gas, manufacturing, warehouses, chemical plants",
  },
  {
    icon: Thermometer,
    title: "Early Fire & Hazard Detection",
    problem: "Equipment fires and breakdowns are often preceded by temperature rises that go unnoticed until it is too late. By the time a smoke alarm triggers, damage is already done.",
    solution: "Vision AI monitors machine heat signatures and temperature trends continuously. When a machine begins rising above its safe operating threshold, an early warning is raised - before smoke, before flame, before breakdown. The system also detects unusual heat patterns, proximity violations near dangerous equipment, and suspicious activity in restricted zones.",
    industries: "Data centres, manufacturing, warehouses, factories, energy facilities",
  },
  {
    icon: BarChart3,
    title: "Operational Analytics & Efficiency",
    problem: "Managers have limited real-time visibility into what is actually happening on the factory floor or in a facility. Bottlenecks, idle equipment, and inefficient workflows go unnoticed until they hit the bottom line.",
    solution: "Vision AI counts people, vehicles, and objects in real time. Tracks production line throughput. Monitors equipment utilization. Identifies workflow bottlenecks. Generates reports on foot traffic, space usage, and operational patterns - all from cameras that already exist in the facility.",
    industries: "Logistics, retail, manufacturing, commercial buildings, airports, hospitals",
  },
];

const STEPS = [
  { n: "01", title: "CONNECT", body: "We integrate our AI software with your existing camera infrastructure. No new hardware. Minimal setup time." },
  { n: "02", title: "ANALYSE", body: "The AI processes every camera feed in real time, applying the relevant detection models for your use case." },
  { n: "03", title: "ACT", body: "Instant alerts, automated reports, and a live dashboard give you complete operational visibility - and the ability to respond before problems escalate." },
];

function jumpToContact(subject?: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    const sel = document.getElementById("subject") as HTMLSelectElement | null;
    if (sel && subject) sel.value = subject;
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
}

export function VisionAI() {
  const reduce = useReducedMotion();
  return (
    <section id="vision-ai" className="vision-ai-section relative px-6 py-24 text-white" style={{ backgroundColor: "#111A05" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#94C120" }}>Vision AI</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
              Your Cameras Are Already Watching.<br />Now Make Them Think.
            </h2>
            <p className="mt-4 text-base text-white/70">
              Power Plus Vision AI connects to your existing cameras and turns them into an intelligent operational system - no new hardware, no disruption to your workflow.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-16">
          {USE_CASES.map((u, i) => {
            const Icon = u.icon;
            return (
              <Reveal key={u.title} delay={i * 0.1}>
                <div className="flex h-full flex-col p-4 md:p-6 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(148,193,32,0.15)" }}>
                  <div className="w-10 h-10 md:w-12 md:h-12 min-w-[40px] rounded-xl mb-3 flex items-center justify-center" style={{ background: "rgba(148,193,32,0.15)", border: "1px solid rgba(148,193,32,0.3)" }}>
                    <Icon className="h-5 w-5 md:h-6 md:w-6" style={{ color: "#94C120" }} />
                  </div>
                  <h3 className="text-[0.875rem] md:text-[0.9375rem] font-semibold mb-2">{u.title}</h3>
                  <div className="mt-4 space-y-3 flex-1">
                    <div>
                      <div className="text-[0.6rem] tracking-widest uppercase font-semibold opacity-50 mb-1">The Problem</div>
                      <div className="text-[0.75rem] leading-relaxed opacity-60 mb-2">{u.problem}</div>
                    </div>
                    <div>
                      <div className="text-[0.6rem] tracking-widest uppercase font-semibold text-[#94C120] mb-1">The Solution</div>
                      <div className="text-[0.75rem] leading-relaxed opacity-85">{u.solution}</div>
                    </div>
                  </div>
                  <div className="text-[0.625rem] text-[#A8C870] mt-4 pt-4 border-t border-white/10">
                    <strong className="uppercase tracking-wider">Industries:</strong> {u.industries}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <h3 className="mt-20 text-center text-xl font-bold uppercase tracking-wider" style={{ color: "#94C120" }}>How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-row items-start gap-3 p-3 md:p-5 relative rounded-2xl border border-white/10 bg-white/[0.04]"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: "#94C120" }}>{s.n}</div>
              <div>
                <h4 className="font-bold uppercase tracking-wide text-[0.85rem]">{s.title}</h4>
                <p className="mt-1 text-sm text-white/70 leading-snug">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal>
          <figure className="testimonial-card mt-16 rounded-3xl p-8" style={{ borderLeft: "4px solid #94C120", background: "rgba(148,193,32,0.08)" }}>
            <blockquote className="testimonial-quote text-lg italic text-white/90 sm:text-xl">
              "The cameras are already there. We just make them intelligent."
            </blockquote>
            <figcaption className="testimonial-name mt-4 text-sm text-white/60">
              - {COMPANY.director}, Director, {COMPANY.legalName}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal>
          <div className="mt-12 text-center">
            <a
              href={COMPANY.whatsappVision}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02]"
              style={{ background: "#94C120" }}
            >
              <WhatsappIcon className="h-4 w-4" /> See What Vision AI Can Do
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
