/**
 * SETUP INSTRUCTIONS FOR RESEND EMAIL (for Joseph's son / developer):
 * 1. Go to resend.com and create a free account.
 * 2. Go to API Keys -> Create API Key -> copy it -> paste into .env as RESEND_API_KEY.
 * 3. Free tier allows 3,000 emails/month - more than enough for a contact form.
 * 4. Optionally go to Domains -> Add Domain -> add powerplusllc.org -> follow DNS verification steps. 
 *    Once verified, change the 'from' address below from 'noreply@powerplusllc.org' to 'noreply@powerplusllc.org'.
 * 5. Test by submitting the contact form and checking joseph@powerplusllc.org inbox.
 * Note: The Resend account can be created using any email address. The API key is only used to authenticate.
 * What determines where the email lands is the 'to:' field in this code (joseph@powerplusllc.org).
 */
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
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #94C120; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">
            New Enquiry - Power Plus LLC Website
          </h1>
        </div>
        <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 140px;">Name</td>
              <td style="padding: 8px 0; color: #111;">${escape(data.name)}</td>
            </tr>
            <tr style="background: #fff;">
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Company</td>
              <td style="padding: 8px 0; color: #111;">${escape(data.company || 'Not provided')}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${escape(data.email)}" style="color: #94C120;">${escape(data.email)}</a>
              </td>
            </tr>
            <tr style="background: #fff;">
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone</td>
              <td style="padding: 8px 0; color: #111;">${escape(data.phone || 'Not provided')}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Subject</td>
              <td style="padding: 8px 0; color: #111;">${escape(data.subject)}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #fff; border-left: 4px solid #94C120; border-radius: 0 4px 4px 0;">
            <p style="font-weight: bold; color: #555; margin: 0 0 8px;">Message</p>
            <p style="color: #111; margin: 0; line-height: 1.6; white-space: pre-wrap;">${escape(data.message)}</p>
          </div>
          <div style="margin-top: 20px; padding: 12px; background: #f0f8e0; border-radius: 6px;">
            <p style="margin: 0; font-size: 13px; color: #555;">
              💡 Reply directly to this email to respond to ${escape(data.name)} at ${escape(data.email)}
            </p>
          </div>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: "Power Plus Website <noreply@powerplusllc.org>",
      to: [process.env.RESEND_TO_EMAIL || "joseph@powerplusllc.org"],
      replyTo: data.email,
      subject: `New enquiry via powerplusllc.org  -  ${data.subject}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error("Failed to send message.");
    }
    return { ok: true as const };
  });

