import { LOGO_FULL } from "@/lib/images";
import { COMPANY } from "@/lib/constants";

export function Footer() {
  return (
    <footer
      className="px-6 py-14 text-white/80"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <img
            src={LOGO_FULL}
            alt="Power Plus LLC"
            className="h-12 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p className="mt-4 max-w-xs text-sm text-white/60">
            {COMPANY.tagline} — energy solutions and AI technology, engineered in the UAE.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#services" className="hover:text-brand">Services</a></li>
            <li><a href="#energy" className="hover:text-brand">Energy Efficiency</a></li>
            <li><a href="#ai" className="hover:text-brand">AI Access Control</a></li>
            <li><a href="#generators" className="hover:text-brand">Generators</a></li>
            <li><a href="#about" className="hover:text-brand">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Get in touch</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-brand">{COMPANY.phone}</a></li>
            <li><a href={`mailto:${COMPANY.email}`} className="hover:text-brand break-all">{COMPANY.email}</a></li>
            <li>{COMPANY.address.line1}, {COMPANY.address.line2}</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-xs text-white/50">
        © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
