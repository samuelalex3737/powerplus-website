import { Zap, ShieldCheck, Power, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    icon: Zap,
    title: "Energy Efficiency Solutions",
    body: "Turnkey energy and water efficiency upgrades for commercial and industrial buildings. LED lighting, solar PV, HVAC, monitoring — all with zero upfront capital cost. You pay nothing until the savings arrive.",
    tags: ["LED", "Solar PV", "HVAC", "Monitoring"],
    href: "#energy",
    featured: false,
  },
  {
    icon: ShieldCheck,
    title: "AI Building Access Control",
    body: "Your existing cameras become an intelligent access system. Licence plate and facial recognition — no expensive new hardware, no disruption to your building operations.",
    tags: ["Facial Recognition", "ANPR", "Barrier", "Lift Access"],
    href: "#ai",
    featured: true,
    badge: "Most Innovative",
  },
  {
    icon: Power,
    title: "Diesel Generator Sales",
    body: "Cummins and Perkins — the UAE's two most trusted generator brands. Full kVA range, genuine spare parts, delivered across the Emirates.",
    tags: ["Cummins", "Perkins", "Spare Parts", "UAE-Wide"],
    href: "#generators",
    featured: false,
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#94C120" }}>
              What we do
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
              Three Pillars of Power Plus
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              From cutting your energy bills to securing your building with AI —
              we deliver results with zero upfront cost to you.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <a
                href={s.href}
                className="group relative flex h-full flex-col rounded-3xl border-t-4 p-7 shadow-sm transition hover:-translate-y-1.5 hover:shadow-2xl"
                style={{
                  borderTopColor: "#94C120",
                  background: s.featured ? "#94C120" : "var(--card)",
                  color: s.featured ? "#ffffff" : undefined,
                }}
              >
                {s.featured && s.badge && (
                  <span className="absolute right-5 top-5 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {s.badge}
                  </span>
                )}
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full"
                  style={{
                    background: s.featured ? "rgba(255,255,255,0.2)" : "var(--accent)",
                  }}
                >
                  <s.icon className="h-6 w-6" style={{ color: s.featured ? "#ffffff" : "#94C120" }} />
                </span>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p
                  className={`mt-3 flex-1 text-sm leading-relaxed ${
                    s.featured ? "" : "text-muted-foreground"
                  }`}
                  style={s.featured ? { color: "rgba(255,255,255,0.92)" } : undefined}
                >
                  {s.body}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full px-2.5 py-0.5 text-[11px] font-medium"
                      style={{
                        background: s.featured ? "rgba(255,255,255,0.18)" : "var(--accent)",
                        color: s.featured ? "#ffffff" : "var(--pp-text-muted)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
