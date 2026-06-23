import { Cog, Gauge, Wrench, ShieldCheck, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { IMG } from "@/lib/images";
import { COMPANY } from "@/lib/constants";

const BRANDS = [
  {
    name: "Cummins",
    range: "20 kVA – 2,500 kVA",
    body: "Heavy-duty diesel gensets for data centers, hospitals, and industrial sites where downtime isn't an option.",
    img: IMG.generatorCummins,
  },
  {
    name: "Perkins",
    range: "10 kVA – 2,000 kVA",
    body: "Reliable, fuel-efficient power for commercial buildings, retail, and standby applications.",
    img: IMG.generatorPerkins,
  },
];

const SUPPLY = [
  { icon: Cog, label: "Diesel gensets" },
  { icon: Gauge, label: "ATS panels" },
  { icon: ShieldCheck, label: "Synchronization" },
  { icon: Wrench, label: "Service & spares" },
];

const ANCILLARY = [
  "Fuel tanks and day tanks",
  "Exhaust silencers and stacks",
  "Acoustic and weatherproof canopies",
  "Load banks and commissioning",
  "Cable, switchgear, and cable trays",
  "Annual maintenance contracts",
];

export function Generators() {
  return (
    <section id="generators" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Generators & Power
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
              Cummins and Perkins — sized, installed, supported.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              We supply factory-original gensets across the UAE, handle the
              civils and electricals end-to-end, and stay with you for service.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {BRANDS.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.12}>
              <div className="overflow-hidden rounded-3xl border border-border bg-card">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={b.img} alt={b.name + " generator"} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                </div>
                <div className="p-7">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl font-bold">{b.name}</h3>
                    <span className="text-sm font-semibold text-brand">{b.range}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{b.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-16 text-sm font-semibold uppercase tracking-wider text-brand">
            What we supply
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
            {SUPPLY.map((s) => (
              <div key={s.label} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <s.icon className="h-6 w-6 text-brand" />
                <span className="text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 grid gap-3 rounded-3xl border border-border bg-card p-7 sm:grid-cols-2">
            <h3 className="col-span-full text-lg font-bold">Ancillary equipment</h3>
            {ANCILLARY.map((a) => (
              <div key={a} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand" />
                <span>{a}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div
            className="mt-10 flex flex-col items-start gap-5 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between"
            style={{ backgroundColor: "var(--color-brand)", color: "var(--color-ink)" }}
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider">
                Need a quote this week?
              </div>
              <div className="mt-1 text-xl font-bold sm:text-2xl">
                Send your load profile — we'll size it within 48 hours.
              </div>
            </div>
            <a
              href={COMPANY.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-brand"
              style={{ backgroundColor: "var(--color-ink)", color: "var(--color-brand)" }}
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp a quick quote
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
