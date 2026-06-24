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
