import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "no-reply@spokojnejutro.com";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "owner@spokojnejutro.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      preferredTime,
      message,
      consent,
    } = body || {};

    // Prosta walidacja
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Brakuje wymaganych pól (imię, e-mail, wiadomość)." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: "Wymagana jest zgoda na kontakt." },
        { status: 400 }
      );
    }

    const subject = "Nowe zgłoszenie ze spokojnejutro.com";

    const text = `
Imię i nazwisko: ${name}
E-mail: ${email}
Telefon: ${phone || "-"}
Preferowana godzina kontaktu: ${preferredTime || "-"}

Wiadomość:
${message}
    `;

    const html = `
      <h2>Nowe zgłoszenie ze spokojnejutro.com</h2>
      <p><strong>Imię i nazwisko:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone || "-"}</p>
      <p><strong>Preferowana godzina kontaktu:</strong> ${preferredTime || "-"}</p>
      <p><strong>Zgoda marketingowa:</strong> ${consent ? "TAK" : "NIE"}</p>
      <hr />
      <p><strong>Wiadomość:</strong></p>
      <p>${(message || "").replace(/\n/g, "<br />")}</p>
    `;

    await resend.emails.send({
      from: `Spokojne Jutro <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      reply_to: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Nie udało się wysłać wiadomości. Spróbuj ponownie później." },
      { status: 500 }
    );
  }
}

