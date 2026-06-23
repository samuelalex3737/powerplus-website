import { useState } from "react";
import { Gauge, Lightbulb, Snowflake, Activity, Sun, Cpu, Calculator, Leaf } from "lucide-react";
import { Reveal } from "./Reveal";
import { IMG } from "@/lib/images";

const TILES = [
  { icon: Lightbulb, title: "LED retrofits", body: "Whole-facility lighting upgrades with motion and daylight controls." },
  { icon: Snowflake, title: "HVAC optimization", body: "Chiller staging, VFD upgrades, and BMS tuning for warm-climate buildings." },
  { icon: Gauge, title: "Smart metering", body: "Sub-circuit monitoring so you see exactly where every kilowatt goes." },
  { icon: Activity, title: "Power-factor correction", body: "Capacitor banks and harmonic filters that recover wasted capacity." },
  { icon: Sun, title: "Solar PV integration", body: "Rooftop PV sized to your load profile and tied to the existing system." },
  { icon: Cpu, title: "Building automation", body: "Centralized scheduling, alerts, and remote control of mechanical systems." },
];

export function Energy() {
  const [bill, setBill] = useState(15000);
  const annual = bill * 12;
  const low = Math.round(annual * 0.25);
  const high = Math.round(annual * 0.4);

  return (
    <section id="energy" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                Energy Efficiency
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
                Pay less. Run cooler. Stay compliant.
              </h2>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground">
                Most UAE facilities are leaving 25–40% of their electricity
                spend on the floor. We find it with an engineered audit, then we
                fix it with hardware and controls that pay themselves back inside
                three years.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TILES.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition hover:border-brand">
                <t.icon className="h-7 w-7 text-brand" />
                <h3 className="mt-4 font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl">
              <img src={IMG.energyAudit} alt="Energy audit walkthrough" className="h-full w-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <Calculator className="h-6 w-6 text-brand" />
                <h3 className="text-xl font-bold">Savings calculator</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Drag the slider to your current monthly electricity bill.
              </p>
              <div className="mt-6">
                <label className="text-sm font-medium">
                  Monthly bill: <span className="text-brand">AED {bill.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min={2000}
                  max={200000}
                  step={500}
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="mt-3 w-full accent-[var(--color-brand)]"
                />
              </div>
              <div className="mt-6 rounded-2xl bg-accent p-5">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Estimated annual savings
                </div>
                <div className="mt-1 text-3xl font-bold text-foreground">
                  AED {low.toLocaleString()} – {high.toLocaleString()}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Based on a 25–40% reduction after a Power Plus retrofit.
                </div>
              </div>
              <a
                href="#contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-ink"
                style={{ color: "var(--color-ink)" }}
              >
                Book a free audit
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div
            className="mt-12 rounded-3xl p-8 text-ink"
            style={{ backgroundColor: "var(--color-brand)", color: "var(--color-ink)" }}
          >
            <div className="flex flex-wrap items-center gap-4">
              <Leaf className="h-8 w-8" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider">
                  CEEP-aligned
                </div>
                <div className="text-lg font-bold sm:text-xl">
                  We design every retrofit to support the UAE Clean Energy &
                  Efficiency Program — measurable, verifiable, reportable.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
