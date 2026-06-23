import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, Loader2 } from "lucide-react";
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
      phone: String(fd.get("phone") || ""),
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
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
              Let's talk about your project.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Send the form below and Joseph will reply personally within one
              business day. Need an answer faster? Use WhatsApp.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" placeholder="+971 50 000 0000" />
              </div>
              <div className="mt-4">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue={COMPANY.subjects[0]}
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                >
                  {COMPANY.subjects.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={4000}
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                  placeholder="Tell us about your site, load, timeline…"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold disabled:opacity-60"
                style={{ color: "var(--color-ink)" }}
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                {loading ? "Sending…" : "Send message"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-border bg-card p-7">
                <h3 className="text-lg font-bold">Direct line</h3>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-brand" />
                    <a href={`tel:${COMPANY.phoneRaw}`} className="font-semibold hover:text-brand">
                      {COMPANY.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-brand" />
                    <a href={`mailto:${COMPANY.email}`} className="font-semibold hover:text-brand break-all">
                      {COMPANY.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-brand" />
                    <span>
                      {COMPANY.address.line1}
                      <br />
                      {COMPANY.address.line2}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-brand" />
                    <span>{COMPANY.hours}</span>
                  </li>
                </ul>
                <a
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold"
                  style={{ color: "var(--color-ink)" }}
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>

              <div className="overflow-hidden rounded-3xl border border-border">
                <iframe
                  title="Power Plus LLC location"
                  src={COMPANY.mapsEmbed}
                  loading="lazy"
                  className="h-64 w-full"
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
    </div>
  );
}
