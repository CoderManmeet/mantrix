import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

function buildHtmlEmail(data: {
  name: string;
  company?: string;
  email: string;
  budget?: string;
  project: string;
  message: string;
  submittedAt: string;
}) {
  return `
    <div style="font-family: Helvetica, Arial, sans-serif; background-color: #0a0a0a; padding: 40px 24px; color: #f5f5f5;">
      <div style="max-width: 560px; margin: 0 auto; background-color: #111111; border: 1px solid #262626; border-radius: 12px; overflow: hidden;">
        <div style="padding: 28px 32px; border-bottom: 1px solid #262626;">
          <p style="margin: 0; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: #00e5ff;">
            New Website Enquiry
          </p>
        </div>
        <div style="padding: 28px 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #a3a3a3; font-size: 13px; vertical-align: top; width: 120px;">Name</td>
              <td style="padding: 10px 0; color: #f5f5f5; font-size: 14px;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a3a3a3; font-size: 13px; vertical-align: top;">Business</td>
              <td style="padding: 10px 0; color: #f5f5f5; font-size: 14px;">${data.company || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a3a3a3; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #f5f5f5; font-size: 14px;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a3a3a3; font-size: 13px; vertical-align: top;">Budget</td>
              <td style="padding: 10px 0; color: #f5f5f5; font-size: 14px;">${data.budget || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a3a3a3; font-size: 13px; vertical-align: top;">Service</td>
              <td style="padding: 10px 0; color: #f5f5f5; font-size: 14px;">${data.project}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a3a3a3; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #f5f5f5; font-size: 14px; white-space: pre-wrap;">${data.message}</td>
            </tr>
          </table>
        </div>
        <div style="padding: 20px 32px; border-top: 1px solid #262626;">
          <p style="margin: 0; color: #737373; font-size: 12px;">Submitted: ${data.submittedAt}</p>
        </div>
      </div>
    </div>
  `;
}

function buildTextEmail(data: {
  name: string;
  company?: string;
  email: string;
  budget?: string;
  project: string;
  message: string;
  submittedAt: string;
}) {
  return `NEW WEBSITE ENQUIRY

Name:
${data.name}

Business:
${data.company || "—"}

Email:
${data.email}

Budget:
${data.budget || "—"}

Service:
${data.project}

Message:
${data.message}

Submitted:
${data.submittedAt}
`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
        { status: 400 }
      );
    }

    const { name, email, company, project, budget, message } = parsed.data;

    const submittedAt = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const emailData = { name, company, email, budget, project, message, submittedAt };

    const result = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM as string,
      to: process.env.CONTACT_EMAIL_TO as string,
      replyTo: email,
      subject: "NEW WEBSITE ENQUIRY",
      html: buildHtmlEmail(emailData),
      text: buildTextEmail(emailData),
    });

    if (result.error) {
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}