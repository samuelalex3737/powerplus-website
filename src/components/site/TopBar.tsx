import { Linkedin, Mail, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function TopBar() {
  return (
    <div
      className="hidden md:block border-b"
      style={{
        background: "var(--pp-section-alt)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-[13px]" style={{ color: "var(--pp-text-muted)" }}>
        <a
          href={COMPANY.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Joseph Alex on LinkedIn"
          className="inline-flex items-center gap-2 transition hover:opacity-80"
          style={{ color: "var(--color-brand)" }}
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <div className="flex items-center gap-5">
          <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-2 hover:text-[color:var(--color-brand)]">
            <Mail className="h-3.5 w-3.5" />
            {COMPANY.email}
          </a>
          <span className="opacity-40">·</span>
          <a href={`tel:${COMPANY.phoneRaw}`} className="inline-flex items-center gap-2 hover:text-[color:var(--color-brand)]">
            <Phone className="h-3.5 w-3.5" />
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </div>
  );
}