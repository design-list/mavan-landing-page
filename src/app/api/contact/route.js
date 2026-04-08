import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const { name, email, phone, service, message } = await request.json();

        if (!name || !email || !message) {
            return Response.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Maven Esthetics" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,
            replyTo: email,
            subject: `New Consultation Request — ${name}`,
            html: `
                <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e3b16f;border-radius:12px;overflow:hidden;">
                    <div style="background:linear-gradient(180deg,#5a0060,#1f0035);padding:30px 24px;text-align:center;">
                        <h1 style="color:#e3b16f;margin:0;font-size:22px;letter-spacing:1px;">Maven Esthetics</h1>
                        <p style="color:#fff;margin:6px 0 0;font-size:13px;">New Consultation Request</p>
                    </div>
                    <div style="padding:28px 24px;background:#fff;">
                        <table style="width:100%;border-collapse:collapse;font-size:14px;color:#1f0035;">
                            <tr><td style="padding:8px 0;font-weight:bold;width:130px;">Name</td><td>${name}</td></tr>
                            <tr><td style="padding:8px 0;font-weight:bold;">Email</td><td><a href="mailto:${email}" style="color:#5a0060;">${email}</a></td></tr>
                            <tr><td style="padding:8px 0;font-weight:bold;">Phone</td><td>${phone || "—"}</td></tr>
                            <tr><td style="padding:8px 0;font-weight:bold;">Service</td><td>${service || "—"}</td></tr>
                            <tr>
                                <td style="padding:8px 0;font-weight:bold;vertical-align:top;">Message</td>
                                <td style="padding:8px 0;line-height:1.6;">${message.replace(/\n/g, "<br/>")}</td>
                            </tr>
                        </table>
                    </div>
                    <div style="background:#f9f0ff;padding:14px 24px;text-align:center;font-size:12px;color:#888;">
                        Maven Esthetics — Consultation Request System
                    </div>
                </div>
            `,
        });

        return Response.json({ success: true });
    } catch (err) {
        console.error("Contact form error:", err);
        return Response.json(
            { error: "Failed to send message. Please try again." },
            { status: 500 }
        );
    }
}
