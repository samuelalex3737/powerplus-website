import { Phone } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/whatsapp-icon";
import { Reveal } from "./Reveal";
import { IMG } from "@/lib/images";
import { COMPANY } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-20 text-white">
      <img src={IMG.ctaBanner} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden className="absolute inset-0" style={{ backgroundColor: "rgba(15,26,10,0.78)" }} />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <Reveal>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Contact us now to discuss how you could save Energy and Cost
            </h2>
            <p className="mt-3 text-white/70">
              Contact us today to find your perfect power solution.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap tight-container">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02]"
              style={{ background: "#94C120" }}
            >
              <Phone className="h-4 w-4" /> {COMPANY.phone}
            </a>
            <a
              href={COMPANY.whatsappCTA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
            >
              <WhatsappIcon className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}