import { Zap, Shield, Fuel, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    icon: Zap,
    title: "Energy Efficiency Systems",
    body: "Cut your electricity bill 25–40% with engineered retrofits, smart controls, and CEEP-aligned audits across your facility.",
    href: "#energy",
    featured: false,
  },
  {
    icon: Shield,
    title: "AI Access Control",
    body: "Face-recognition entry, anti-tailgating, and real-time alerts. Built for offices, warehouses, and construction sites.",
    href: "#ai",
    featured: true,
  },
  {
    icon: Fuel,
    title: "Generators & Power",
    body: "Cummins and Perkins diesel generators, ATS panels, and fuel systems — sized, installed, and maintained by our team.",
    href: "#generators",
    featured: false,
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              What we do
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
              Three disciplines, one engineering standard.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              We pair deep utility experience with modern AI to deliver power,
              security, and savings — without the typical contractor headaches.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <a
                href={s.href}
                className={`group relative flex h-full flex-col rounded-3xl border-t-4 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                  s.featured
                    ? "bg-brand text-ink"
                    : "bg-card text-card-foreground"
                }`}
                style={{
                  borderTopColor: "var(--color-brand)",
                  color: s.featured ? "var(--color-ink)" : undefined,
                }}
              >
                <s.icon className="h-9 w-9" />
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p
                  className={`mt-3 flex-1 text-sm leading-relaxed ${
                    s.featured ? "text-ink/80" : "text-muted-foreground"
                  }`}
                  style={s.featured ? { color: "rgba(10,18,3,0.78)" } : undefined}
                >
                  {s.body}
                </p>
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
