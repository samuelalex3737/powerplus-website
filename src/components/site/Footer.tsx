import { Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";
import { LOGO_FULL } from "@/lib/images";
import { COMPANY } from "@/lib/constants";

const SOLUTIONS = [
  "Lighting",
  "Solar Battery & Diesel Hybrid Solutions",
  "Controls & Automation",
  "HVAC",
  "Ventilation Solutions",
  "Condition Monitoring",
  "Industrial Energy Solutions",
  "Energy Audits",
];

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Solutions", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

export function Footer() {
  const greenFilter =
    "brightness(0) saturate(100%) invert(67%) sepia(40%) saturate(600%) hue-rotate(42deg) brightness(95%)";
  return (
    <footer className="p-9 md:p-16" style={{ background: "#0A1203", color: "#A8C870" }}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[2fr_1.5fr_1fr_1.5fr] gap-6 lg:gap-12">
        <div>
          <img
            src={LOGO_FULL}
            alt="Power Plus LLC  -  Powering Smart Decisions, Fueling Future Solutions"
            className="max-w-[160px] md:max-w-[220px] h-auto mb-3"
            style={{ width: "100%", filter: greenFilter }}
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            We are a technology, engineering and finance company that uses vendor agnostic engineering to deliver comprehensive energy efficiency and technology upgrades to optimize building energy use.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 lg:contents gap-5">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Our Solutions</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {SOLUTIONS.map((s) => (
                <li key={s}>
                  <a href="#energy" className="block text-[0.75rem] md:text-[0.85rem] py-1 transition hover:text-[#94C120]">{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {LINKS.map((l) => (
                <li key={l.label}><a href={l.href} className="block text-[0.75rem] md:text-[0.85rem] py-1 transition hover:text-[#94C120]">{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Our Office</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 flex-none" style={{ color: "#94C120" }} />Shams, Sharjah, United Arab Emirates</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 flex-none" style={{ color: "#94C120" }} /><a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-[#94C120]">{COMPANY.phone}</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 flex-none" style={{ color: "#94C120" }} /><a href={`mailto:${COMPANY.email}`} className="hover:text-[#94C120] break-all">{COMPANY.email}</a></li>
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 flex-none" style={{ color: "#94C120" }} />{COMPANY.hours}</li>
          </ul>
          <a
            href={COMPANY.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Joseph Alex on LinkedIn"
            className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full"
            style={{ border: "1px solid #2A4210", color: "#94C120" }}
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t pt-6 text-[13px]" style={{ borderColor: "#2A4210", color: "rgba(168,200,112,0.6)" }}>
        © 2025 POWER PLUS LLC | ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
