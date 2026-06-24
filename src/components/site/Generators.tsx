import { Battery, Wrench, Truck, Phone, MessageCircle, Box } from "lucide-react";
import { Reveal } from "./Reveal";
import { IMG } from "@/lib/images";
import { COMPANY } from "@/lib/constants";

const BRANDS = [
  {
    name: "Cummins",
    badge: "Global Leader",
    range: "20 kVA – 2,500 kVA+",
    body: "The world's leading power equipment manufacturer. Cummins generators are trusted across the UAE for unmatched reliability in industrial, commercial, and infrastructure applications.",
    industries: ["Construction", "Data Centres", "Healthcare", "Hospitality", "Industrial", "Infrastructure"],
    img: IMG.generatorCummins,
  },
  {
    name: "Perkins",
    badge: "Proven in the Gulf",
    range: "10 kVA – 2,000 kVA+",
    body: "Perkins engines power 1 in 5 non-road vehicles worldwide. Proven performers in Middle Eastern climates — dependable, fuel-efficient, and field-tested in the region.",
    industries: ["Oil & Gas", "Telecom", "Manufacturing", "Commercial", "Agriculture", "Remote Sites"],
    img: IMG.generatorPerkins,
  },
];

const SUPPLY = [
  { icon: Battery, title: "New Generators", body: "Full Cummins and Perkins kVA range" },
  { icon: Wrench, title: "Genuine OEM Spare Parts", body: "Original manufacturer components" },
  { icon: Truck, title: "UAE-Wide Delivery", body: "Sharjah, Dubai, Abu Dhabi, Northern Emirates" },
  { icon: Phone, title: "Technical Consultation", body: "Right spec for your load requirements" },
];

const ANCILLARY = [
  "Clamp-on Liquid Flow Meters",
  "Shutoff Valves",
  "Energy Meters",
];

export function Generators() {
  return (
    <section id="generators" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#94C120" }}>
              Generators
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
              Heavy-Duty Diesel Generators
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Cummins and Perkins — the UAE's two most trusted generator brands.
              Built for this climate. Backed by genuine parts.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 overflow-hidden rounded-3xl">
            <img src={IMG.generators} alt="Heavy-duty industrial diesel generator" className="h-72 w-full object-cover sm:h-96" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {BRANDS.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-3xl p-7" style={{ background: "var(--card)", border: "1px solid var(--pp-card-border)" }}>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-2xl font-bold">{b.name}</h3>
                  <span className="rounded-full px-3 py-1 text-[11px] font-bold text-white" style={{ background: "#94C120" }}>{b.badge}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{b.body}</p>
                <div className="mt-4 text-sm">
                  <span className="font-semibold" style={{ color: "#94C120" }}>Range:</span> {b.range}
                </div>
                <div className="mt-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Industries</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {b.industries.map((ind) => (
                      <span key={ind} className="rounded-full px-2.5 py-0.5 text-[11px]" style={{ background: "var(--accent)", color: "var(--pp-text-muted)" }}>{ind}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 rounded-3xl p-7" style={{ background: "var(--card)", border: "1px solid var(--pp-card-border)" }}>
            <div className="flex items-start gap-4">
              <Battery className="h-8 w-8 flex-none" style={{ color: "#94C120" }} />
              <div>
                <h3 className="text-lg font-bold">Solar Battery Diesel Hybrid Solutions</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Combining solar PV, battery storage, and diesel generation for sites requiring maximum energy resilience and cost savings. Tailored hybrid systems for commercial and industrial clients.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <h3 className="mt-14 text-sm font-bold uppercase tracking-wider" style={{ color: "#94C120" }}>What We Supply</h3>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {SUPPLY.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl p-5" style={{ background: "var(--card)", border: "1px solid var(--pp-card-border)" }}>
                <s.icon className="h-6 w-6" style={{ color: "#94C120" }} />
                <div className="mt-3 text-sm font-bold">{s.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.body}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex flex-col items-start gap-4 rounded-3xl p-6 sm:flex-row sm:items-center" style={{ background: "var(--card)", border: "1px solid var(--pp-card-border)" }}>
            <div className="aspect-square w-20 flex-none overflow-hidden rounded-xl">
              <img src={IMG.ancillary} alt="Ancillary equipment" className="h-full w-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="font-bold">Ancillary Equipment</div>
              <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                {ANCILLARY.map((a) => (
                  <span key={a} className="inline-flex items-center gap-1.5"><Box className="h-3 w-3" style={{ color: "#94C120" }} />{a}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-col items-start gap-5 rounded-3xl p-8 text-white sm:flex-row sm:items-center sm:justify-between" style={{ background: "#94C120" }}>
            <div>
              <div className="text-lg font-bold sm:text-xl">
                Need a generator quote? Tell us your kVA requirement, site location, and load type — we'll come back with the right unit.
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold" style={{ color: "#94C120" }}>
                Request a Generator Quote
              </a>
              <a
                href={COMPANY.whatsappGenerator}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-5 py-3 text-sm font-bold text-white"
              >
                <MessageCircle className="h-4 w-4" /> Quick Quote on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
