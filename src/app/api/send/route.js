import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    // Verify environment variables
    if (!process.env.RESEND_API_KEY || !process.env.FROM_EMAIL) {
      throw new Error(
        "Missing environment variables RESEND_API_KEY or FROM_EMAIL"
      );
    }

    const { email, subject, message } = await req.json();
    console.log("Received data:", email, subject, message);

    const htmlContent = `
      <h1>${subject}</h1>
      <p>${email}</p>
      <p>Thank you for contacting us!</p>
      <p>New message submitted:</p>
      <p>${message}</p>
    `;

    const data = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message });
  }
}
