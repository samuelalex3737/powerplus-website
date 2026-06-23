import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().max(120).optional().default(""),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().default(""),
  subject: z.string().trim().min(1).max(120),
  message: z.string().trim().min(1).max(4000),
});

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    c === "&"
      ? "&amp;"
      : c === "<"
        ? "&lt;"
        : c === ">"
          ? "&gt;"
          : c === '"'
            ? "&quot;"
            : "&#39;",
  );

export const sendContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error("Email service is not configured.");
    }
    const { Resend } = await import("resend");
    const resend = new Resend(key);

    const html = `
      <h2>New website enquiry — Power Plus LLC</h2>
      <table style="font-family:Inter,Arial,sans-serif;font-size:14px;line-height:1.6">
        <tr><td><strong>Name</strong></td><td>${escape(data.name)}</td></tr>
        <tr><td><strong>Company</strong></td><td>${escape(data.company || "—")}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escape(data.email)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escape(data.phone || "—")}</td></tr>
        <tr><td><strong>Subject</strong></td><td>${escape(data.subject)}</td></tr>
      </table>
      <h3>Message</h3>
      <p style="white-space:pre-wrap;font-family:Inter,Arial,sans-serif">${escape(data.message)}</p>
    `;

    const { error } = await resend.emails.send({
      from: "Power Plus Website <onboarding@resend.dev>",
      to: ["joseph@powerplusllc.com"],
      replyTo: data.email,
      subject: `[Power Plus] ${data.subject} — ${data.name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error("Failed to send message.");
    }
    return { ok: true as const };
  });
