import { Resend } from "resend";
import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components/email/email-template";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();
  const { error } = await resend.emails.send({
    from: "Malhotra Cables <onboarding@resend.dev>",
    to: ["yasirbelmaalem30gmail.com"],
    subject: `New suggestion/complaint from ${name}`,
    react: EmailTemplate({
      name,
      email,
      phone,
      message
    }),
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    reply_to: email
  });

  if (error) return NextResponse.json({ success: false, error: error.message });
  return NextResponse.json({ success: true });
}