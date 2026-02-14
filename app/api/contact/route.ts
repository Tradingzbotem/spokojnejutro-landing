import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "kontakt@spokojnejutro.com";

const TO_EMAIL =
  process.env.CONTACT_TO_EMAIL || "kontakt@spokojnejutro.com";

const SMTP_HOST = process.env.ZOHO_SMTP_HOST || "smtp.zoho.eu";
const SMTP_PORT = Number(process.env.ZOHO_SMTP_PORT || "465");
const SMTP_USER = process.env.ZOHO_SMTP_USER;
const SMTP_PASS = process.env.ZOHO_SMTP_PASS;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, phone, preferredTime, message, consent } =
      body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Brakuje wymaganych pól." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: "Zaznacz zgodę na kontakt." },
        { status: 400 }
      );
    }

    if (!SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        { success: false, error: "Brak konfiguracji SMTP w ENV." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `Spokojne Jutro <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: "Nowe zgłoszenie ze spokojnejutro.com",
      text: `
Imię: ${name}
Email: ${email}
Telefon: ${phone || "-"}
Godzina: ${preferredTime || "-"}
Wiadomość:
${message}
`,
      html: `
<h2>Nowe zgłoszenie</h2>
<p><b>Imię:</b> ${name}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Telefon:</b> ${phone || "-"}</p>
<p><b>Godzina:</b> ${preferredTime || "-"}</p>
<p><b>Wiadomość:</b><br/>${message.replace(/\n/g, "<br/>")}</p>
`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Błąd wysyłki maila." },
      { status: 500 }
    );
  }
}
