import { useState } from "react";
import { Calculator, Leaf } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Reveal } from "./Reveal";
import { IMG } from "@/lib/images";
import { COMPANY } from "@/lib/constants";

const TILES = [
  { img: IMG.energyLighting, title: "Lighting", body: "Power Plus Energy Solutions has retrofitted more than 10,000+ conventional lights to energy efficient LEDs. Lighting efficiency is an art of optimization — we deliver it using advanced software." },
  { img: IMG.energySolar, title: "On-site Solar PV", body: "We build, own and operate a solar PV system at your site — typically on the rooftop or adjacent land. Electricity is sold via a Power Purchase Agreement (PPA). We also provide Solar Battery Diesel Hybrid Solutions for sites requiring combined renewable and backup power." },
  { img: IMG.energyControls, title: "Controls & Automation", body: "Custom tools that put energy intelligence at your fingertips. Energy analytics, live heat maps of your building, and a policy editor to push schedules across all your locations with one click." },
  { img: IMG.energyHvac, title: "HVAC", body: "Tailor-made engineering solutions for every stage of a building's lifecycle. We help building owners, managers, and tenants reduce costs, increase efficiency, and improve asset value." },
  { img: IMG.energyIndustrial, title: "Industrial Energy Solutions", body: "Innovative products and services that bring superior profitability to clients, increase overall system efficiency, and ensure a reliable, uninterrupted energy supply." },
  { img: IMG.energyAudit, title: "Energy Audits", body: "Our energy management strategy adjusts and optimizes energy usage using systems and procedures that reduce consumption per unit of output — while lowering your total operational costs." },
  { img: IMG.energyMonitoring, title: "Condition Monitoring (e-MCM)", body: "A new approach to predictive maintenance. The e-MCM is a powerful online tool for critical AC rotating equipment. Its patented machine learning algorithm enables comprehensive fault detection up to 6 months in advance." },
  { img: IMG.energyVentilation, title: "Ventilation Systems", body: "We design and engineer customized ventilation solutions for commercial, industrial, and public buildings. Code compliant, safe, contaminant free — built specifically for your operations." },
];

const ENERGY_DATA = [
  { name: "Chillers", value: 57.5, color: "#94C120" },
  { name: "Other Common Equipment", value: 11.8, color: "#6B8F1A" },
  { name: "Fan-Coil Units", value: 8.1, color: "#B0D62E" },
  { name: "Hot Water Boilers", value: 8.4, color: "#4a6010" },
  { name: "External Lights", value: 7.4, color: "#D4E8A0" },
  { name: "Other Internal", value: 5.1, color: "#2A4210" },
  { name: "Exhaust Fans", value: 1.6, color: "#1C2E0A" },
  { name: "External Consumption", value: 0.1, color: "#0A1203" },
];

export function Energy() {
  const [bill, setBill] = useState(15000);
  const annual = bill * 12;
  const low = Math.round(annual * 0.25);
  const high = Math.round(annual * 0.4);

  return (
    <section id="energy" className="relative px-6 py-24" style={{ background: "var(--pp-section-alt)" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#94C120" }}>Energy Efficiency</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
              Comprehensive Energy & Water Excellence
            </h2>
            <p className="mt-4 text-base" style={{ color: "var(--pp-text-muted)" }}>
              Our paid-from-savings model means you get a fully upgraded building with no capital investment. We engineer the solution. You keep the savings.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TILES.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.06}>
              <div
                className="group h-full overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:shadow-xl"
                style={{ background: "var(--card)", border: "1px solid var(--pp-card-border)" }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={t.img} alt={t.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--pp-text-muted)" }}>{t.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Pie chart */}
        <Reveal>
          <div className="mt-16">
            <h3 className="text-center text-2xl font-bold sm:text-3xl">Where Does Your Energy Go?</h3>
            <div
              className="mt-8 rounded-3xl p-6"
              style={{
                background: "var(--card)",
                border: "1px solid var(--pp-card-border)",
              }}
            >
              <div className="dark:bg-white/[0.03] rounded-2xl p-4">
                <ResponsiveContainer width="100%" height={360}>
                  <PieChart>
                    <Pie
                      data={ENERGY_DATA}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={130}
                      paddingAngle={1}
                    >
                      {ENERGY_DATA.map((d) => (
                        <Cell key={d.name} fill={d.color} stroke="#94C120" strokeWidth={2} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        background: "#1C2E0A",
                        color: "#E8F5CC",
                        border: "1px solid #94C120",
                        borderRadius: 8,
                      }}
                      formatter={(v: number) => `${v}%`}
                    />
                    <Legend
                      wrapperStyle={{ fontSize: 12 }}
                      formatter={(v, entry) => {
                        const c = (entry?.color || "#94C120") as string;
                        const safe = c === "#0A1203" || c === "#1C2E0A" ? "#2A4210" : c;
                        return (
                          <span style={{ color: "var(--pp-text)" }}>
                            <span style={{ display: "inline-block", width: 8, height: 8, background: safe, borderRadius: 2, marginRight: 6 }} />
                            {v}
                          </span>
                        );
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-center text-sm" style={{ color: "var(--pp-text-muted)" }}>
                Typical energy usage breakdown for a commercial building in UAE. Chillers alone account for 57.5% of total consumption — the single biggest opportunity for energy savings.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Calculator */}
        <div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl">
              <img src={IMG.energyAudit} alt="Energy audit walkthrough" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl p-8" style={{ background: "var(--card)", border: "1px solid var(--pp-card-border)" }}>
              <div className="flex items-center gap-3">
                <Calculator className="h-6 w-6" style={{ color: "#94C120" }} />
                <h3 className="text-xl font-bold">Estimate Your Energy Savings</h3>
              </div>
              <p className="mt-2 text-sm" style={{ color: "var(--pp-text-muted)" }}>
                My monthly electricity bill is AED <span className="font-bold" style={{ color: "#94C120" }}>{bill.toLocaleString()}</span>
              </p>
              <input
                type="range"
                min={2000}
                max={200000}
                step={500}
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="mt-3 w-full accent-[#94C120]"
              />
              <div className="mt-6 rounded-2xl p-5" style={{ background: "var(--accent)" }}>
                <div className="text-xs uppercase tracking-wider" style={{ color: "var(--pp-text-muted)" }}>
                  Estimated annual saving
                </div>
                <div className="mt-1 text-3xl font-bold" style={{ color: "#94C120" }}>
                  AED {low.toLocaleString()} – AED {high.toLocaleString()}
                </div>
              </div>
              <a
                href="#contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white"
                style={{ background: "#94C120" }}
              >
                Get My Free Energy Audit
              </a>
              <a
                href={COMPANY.whatsappAudit}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-center text-xs underline"
                style={{ color: "var(--pp-text-muted)" }}
              >
                Or message Joseph on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div
            className="mt-12 rounded-3xl p-8 text-white"
            style={{ backgroundColor: "#94C120" }}
          >
            <div className="flex flex-wrap items-start gap-4">
              <Leaf className="h-8 w-8 flex-none" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider">
                  Comprehensive Energy Excellence Program
                </div>
                <p className="mt-2 text-base leading-relaxed sm:text-lg">
                  Power Plus developed the Comprehensive Energy Excellence Program (CEEP) — a complete, integrated energy programme aligned with the UAE Energy Strategy 2050. It combines lighting, solar, HVAC, water efficiency, monitoring, and predictive maintenance into one managed package with a single point of contact.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
