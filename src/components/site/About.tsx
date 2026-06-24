import { MapPin, Phone, Mail, MessageCircle, Lightbulb, Cpu, Battery } from "lucide-react";
import { Reveal } from "./Reveal";
import { COMPANY } from "@/lib/constants";
import { JOSEPH_PHOTO } from "@/lib/images";

const FACTS = [
  { icon: MapPin, label: "Shams Free Zone, Sharjah, UAE" },
  { icon: Lightbulb, label: "10,000+ Lights Retrofitted" },
  { icon: Cpu, label: "AI Access Control Deployed" },
  { icon: Battery, label: "Cummins & Perkins Supply UAE-Wide" },
];

const VALUES = [
  { title: "Zero Capex", body: "Clients pay nothing upfront. All costs are recovered from the savings the project generates." },
  { title: "Vendor Agnostic", body: "We recommend what's right for your building — not what benefits our margins. Best solution always wins." },
  { title: "End-to-End", body: "From audit and design through to installation, commissioning, monitoring, and ongoing support." },
];

export function About() {
  return (
    <section id="about" className="px-6 py-24" style={{ background: "var(--pp-section-alt)" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#94C120" }}>About</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">About Power Plus LLC</h2>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "var(--pp-text)" }}>
              Power Plus Energy Solutions is an Energy Service company engaged in providing consultancy and turnkey contracting services for Energy & Water efficiency solutions in existing and new buildings and implementation of renewable energy systems, with a sustainable development approach. We are a technology, engineering and finance company that uses vendor agnostic engineering to deliver comprehensive energy efficiency and technology upgrades to optimize building energy use. We help building owners, managers, investors and tenants across all building types, sizes and ages to reduce costs, carbon impact and increase asset profitability and value. This creates positive economic, environmental and social impact.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[340px_1fr] lg:gap-14">
          <Reveal>
            <div
              className="rounded-2xl p-5 shadow-lg"
              style={{ background: "var(--card)", border: "1px solid var(--pp-card-border)" }}
            >
              <img
                src={JOSEPH_PHOTO}
                alt="Joseph Alex, Director, Power Plus LLC"
                className="w-full rounded-2xl object-cover"
                style={{ aspectRatio: "4/5" }}
              />
              <div className="mt-4">
                <div className="text-lg font-bold">{COMPANY.director}</div>
                <div className="text-sm font-semibold" style={{ color: "#94C120" }}>
                  {COMPANY.title}, {COMPANY.legalName}
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" style={{ color: "#94C120" }} /><a href={`tel:${COMPANY.phoneRaw}`} className="hover:underline">{COMPANY.phone}</a></li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" style={{ color: "#94C120" }} /><a href={`mailto:${COMPANY.emailJoseph}`} className="hover:underline break-all">{COMPANY.emailJoseph}</a></li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4" style={{ color: "#94C120" }} />Shams Free Zone, Sharjah, UAE</li>
              </ul>
              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold text-white"
                style={{ background: "#94C120" }}
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">Built on Expertise. Driven by Results.</h3>
              <div className="mt-5 space-y-4 text-base leading-relaxed" style={{ color: "var(--pp-text)" }}>
                <p>Joseph Alex is the Director of Power Plus LLC. With hands-on experience spanning energy efficiency consulting, renewable energy implementation, diesel generator supply, and AI-powered building technology, Joseph brings a practical, results-first approach to every project.</p>
                <p>More recently, Joseph co-led the development and deployment of an AI building access control system — a software solution that connects to existing CCTV cameras to enable licence plate recognition and facial recognition for parking and lift access, removing the need for expensive dedicated ANPR hardware.</p>
                <p>Power Plus operates from Shams Free Zone, Sharjah, and serves commercial and industrial clients across the UAE.</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((f) => (
            <div
              key={f.label}
              className="flex items-start gap-3 rounded-2xl p-5"
              style={{ background: "var(--card)", border: "1px solid var(--pp-card-border)" }}
            >
              <f.icon className="mt-0.5 h-5 w-5 flex-none" style={{ color: "#94C120" }} />
              <span className="text-sm font-semibold" style={{ color: "var(--pp-text)" }}>{f.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl p-6"
              style={{
                background: "var(--card)",
                borderLeft: "4px solid #94C120",
                border: "1px solid var(--pp-card-border)",
                borderLeftWidth: "4px",
                borderLeftColor: "#94C120",
              }}
            >
              <h4 className="text-lg font-bold" style={{ color: "#94C120" }}>{v.title}</h4>
              <p className="mt-2 text-sm" style={{ color: "var(--pp-text-muted)" }}>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
