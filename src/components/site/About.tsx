import { MapPin, Calendar, Building, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";
import { COMPANY } from "@/lib/constants";

const FACTS = [
  { icon: Calendar, label: "Founded", value: String(COMPANY.founded) },
  { icon: MapPin, label: "Based in", value: "Shams Free Zone, Sharjah" },
  { icon: Building, label: "Coverage", value: "Across the UAE" },
  { icon: Wrench, label: "Specialty", value: "Power, efficiency, AI" },
];

export function About() {
  return (
    <section id="about" className="bg-accent px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
          <Reveal>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div
                className="flex h-44 w-44 items-center justify-center rounded-full text-5xl font-bold shadow-xl ring-4 ring-background"
                style={{ backgroundColor: "var(--color-brand)", color: "var(--color-ink)" }}
                aria-label="Joseph Alex avatar"
              >
                JA
              </div>
              <div className="mt-5">
                <div className="text-xl font-bold">{COMPANY.director}</div>
                <div className="text-sm text-muted-foreground">
                  {COMPANY.directorRole}, {COMPANY.legalName}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                About
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
                Built in the UAE. Trusted across it.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground/80">
                {COMPANY.bio}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {FACTS.map((f) => (
                  <div key={f.label} className="rounded-2xl border border-border bg-background p-4">
                    <f.icon className="h-5 w-5 text-brand" />
                    <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                      {f.label}
                    </div>
                    <div className="mt-0.5 text-sm font-semibold">{f.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {COMPANY.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-border bg-background p-7">
                <div className="h-1 w-12 rounded-full bg-brand" />
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
