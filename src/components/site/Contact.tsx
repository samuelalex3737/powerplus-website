import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Globe, MessageCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { COMPANY } from "@/lib/constants";
import { sendContact } from "@/lib/contact.functions";

export function Contact() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      email: String(fd.get("email") || ""),
      phone: (() => {
        const v = String(fd.get("phone") || "").trim();
        return v ? `+971 ${v}` : "";
      })(),
      subject: String(fd.get("subject") || ""),
      message: String(fd.get("message") || ""),
    };
    setLoading(true);
    try {
      await sendContact({ data });
      toast.success("Message sent! Joseph will reply within 24 hours.");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      toast.error("Couldn't send right now. Try WhatsApp instead.", {
        action: {
          label: "WhatsApp",
          onClick: () => window.open(COMPANY.whatsappLink, "_blank"),
        },
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="px-6 py-24 text-white" style={{ background: "#111A05" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#94C120" }}>Contact</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">Let's Talk Energy</h2>
            <p className="mt-4 text-base text-white/70">
              Free energy audit, generator quote, or AI access control demo — get in touch with Joseph today.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="rounded-3xl p-7" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(148,193,32,0.25)" }}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Company Name" name="company" />
                <Field label="Email Address" name="email" type="email" required />
                <PhoneField />
              </div>
              <div className="mt-4">
                <label htmlFor="subject" className="text-sm font-medium" style={{ color: "#E8F5CC" }}>Subject</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue={COMPANY.subjects[0]}
                  className="mt-1.5 w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(148,193,32,0.25)",
                    color: "#E8F5CC",
                  }}
                >
                  {COMPANY.subjects.map((s) => (
                    <option key={s} style={{ color: "#111A05" }}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="text-sm font-medium" style={{ color: "#E8F5CC" }}>Message <span style={{ color: "#94C120" }}>*</span></label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={4000}
                  className="mt-1.5 w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(148,193,32,0.25)",
                    color: "#E8F5CC",
                  }}
                  placeholder="Tell us about your site, load, timeline…"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white disabled:opacity-60"
                style={{ background: "#94C120" }}
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                {loading ? "Sending…" : "Send Message →"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl p-7" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(148,193,32,0.2)" }}>
                <h3 className="text-lg font-bold text-white">Direct line</h3>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5" style={{ color: "#94C120" }} />
                    <a href={`tel:${COMPANY.phoneRaw}`} className="font-semibold text-white hover:opacity-80">
                      {COMPANY.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5" style={{ color: "#94C120" }} />
                    <a href={`mailto:${COMPANY.email}`} className="font-semibold break-all text-white hover:opacity-80">
                      {COMPANY.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5" style={{ color: "#94C120" }} />
                    <span className="text-white/80">{COMPANY.address.full}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5" style={{ color: "#94C120" }} />
                    <span className="text-white/80">{COMPANY.hours}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="mt-0.5 h-5 w-5" style={{ color: "#94C120" }} />
                    <span className="text-white/80">{COMPANY.website}</span>
                  </li>
                </ul>
                <a
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white"
                  style={{ background: "#94C120" }}
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>

              <div className="overflow-hidden rounded-3xl" style={{ border: "1px solid rgba(148,193,32,0.2)" }}>
                <iframe
                  title="Power Plus LLC location"
                  src={COMPANY.mapsEmbed}
                  loading="lazy"
                  allowFullScreen
                  className="h-56 w-full"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium" style={{ color: "#E8F5CC" }}>
        {label}
        {required && <span style={{ color: "#94C120" }}> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        maxLength={255}
        className="mt-1.5 w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(148,193,32,0.25)",
          color: "#E8F5CC",
        }}
      />
    </div>
  );
}

function PhoneField() {
  return (
    <div>
      <label htmlFor="phone" className="text-sm font-medium" style={{ color: "#E8F5CC" }}>
        Phone Number
      </label>
      <div
        className="mt-1.5 flex items-center rounded-xl"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(148,193,32,0.25)",
        }}
      >
        <span
          className="select-none px-3 py-3 text-sm font-semibold"
          style={{ color: "#94C120", borderRight: "1px solid rgba(148,193,32,0.25)" }}
        >
          +971
        </span>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          placeholder="50 230 6745"
          maxLength={20}
          className="flex-1 bg-transparent px-3 py-3 text-sm outline-none"
          style={{ color: "#E8F5CC" }}
        />
      </div>
    </div>
  );
}
