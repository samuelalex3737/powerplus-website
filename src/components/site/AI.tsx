import { ScanFace, Bell, ShieldCheck, FileBarChart, Building2, Warehouse, HardHat, School } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { IMG } from "@/lib/images";
import { COMPANY } from "@/lib/constants";

const STEPS = [
  { icon: ScanFace, title: "Detect", body: "Edge cameras identify the face in under 200ms — no cloud round-trip." },
  { icon: ShieldCheck, title: "Verify", body: "Match against your authorized roster, with anti-spoofing and liveness checks." },
  { icon: Bell, title: "Decide", body: "Grant, deny, or escalate. Tailgating and unknown faces trigger instant alerts." },
  { icon: FileBarChart, title: "Report", body: "Every event logged with timestamp, photo, and zone — auditable from day one." },
];

const USE_CASES = [
  { icon: Building2, title: "Corporate offices", body: "Replace badges with frictionless face entry; cut reception load." },
  { icon: Warehouse, title: "Warehouses & logistics", body: "Restrict zones by role; eliminate stolen-credential incidents." },
  { icon: HardHat, title: "Construction sites", body: "Verify PPE, log workforce attendance, and gate hazardous areas." },
  { icon: School, title: "Schools & campuses", body: "Visitor pre-approval, parent pickup verification, and full audit trail." },
];

export function AI() {
  const reduce = useReducedMotion();
  return (
    <section
      id="ai"
      className="relative px-6 py-24 text-white"
      style={{ backgroundColor: "var(--color-ink-soft)" }}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              AI Access Control
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
              Faces in. Threats out. No keycards, no clipboards.
            </h2>
            <p className="mt-4 text-base text-white/70">
              Power Plus engineers and installs AI-powered access systems built
              for UAE compliance, sandstorm tolerance, and 24/7 uptime.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl">
              <img src={IMG.aiAccess} alt="AI access control terminal" className="h-full w-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">
                Traditional vs Power Plus
              </h3>
              <table className="mt-4 w-full text-sm">
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Badges & PINs", "Live face recognition"],
                    ["Lost cards = security gap", "Nothing to lose or share"],
                    ["Manual visitor logs", "Auto-logged with photo"],
                    ["Reactive incident review", "Real-time alerts to phone"],
                  ].map(([a, b]) => (
                    <tr key={a}>
                      <td className="py-3 pr-4 text-white/50 line-through">{a}</td>
                      <td className="py-3 font-semibold text-brand">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-xs font-bold text-ink" style={{ color: "var(--color-ink)" }}>
                Step {i + 1}
              </div>
              <s.icon className="mt-3 h-8 w-8 text-brand" />
              <h4 className="mt-4 font-bold">{s.title}</h4>
              <p className="mt-2 text-sm text-white/70">{s.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((u, i) => (
            <Reveal key={u.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                <u.icon className="h-7 w-7 text-brand" />
                <h4 className="mt-3 font-semibold">{u.title}</h4>
                <p className="mt-2 text-sm text-white/70">{u.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <figure className="mt-16 rounded-3xl border-l-4 border-brand bg-white/5 p-8">
            <blockquote className="text-lg italic text-white/90 sm:text-xl">
              "Security shouldn't depend on whether a badge got left at home.
              We've built a system that recognizes your team and reacts in
              milliseconds — that's the standard we hold ourselves to."
            </blockquote>
            <figcaption className="mt-4 text-sm text-white/60">
              — {COMPANY.director}, {COMPANY.directorRole}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal>
          <div className="mt-12 text-center">
            <a
              href="#contact?subject=ai"
              onClick={(e) => {
                e.preventDefault();
                const sel = document.getElementById("subject") as HTMLSelectElement | null;
                if (sel) sel.value = "AI access control demo";
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold"
              style={{ color: "var(--color-ink)" }}
            >
              Book a live demo at your site
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
