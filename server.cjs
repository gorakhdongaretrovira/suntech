const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// ── Helper: load logo as base64 data URI (works without any hosting) ──────────
function getLogoBase64() {
  try {
    // Adjust this path to wherever your logo.jpeg lives relative to server.js
    const logoPath = path.join(__dirname, "public/logo.jpeg");
    const data = fs.readFileSync(logoPath);
    return `data:image/jpeg;base64,${data.toString("base64")}`;
  } catch {
    // Fallback: return empty string — logo cell will still render cleanly
    return "";
  }
}

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  const logoSrc = getLogoBase64();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"SunTech Packaging" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: `🔔 New Lead: ${name} — SunTech Contact Form`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>New Lead — SunTech</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f2f5;
             font-family:'Segoe UI',Helvetica,Arial,sans-serif;">

<!-- ═══════════════════════════════════════════════════
     OUTER WRAPPER
═══════════════════════════════════════════════════ -->
<table width="100%" cellpadding="0" cellspacing="0" border="0"
  style="background-color:#f0f2f5;padding:36px 16px 48px;">
  <tr><td align="center">

    <!-- ── MAIN CARD (white) ───────────────────────── -->
    <table width="600" cellpadding="0" cellspacing="0" border="0"
      style="max-width:600px;width:100%;background:#ffffff;
             border-radius:16px;overflow:hidden;
             box-shadow:0 4px 32px rgba(0,0,0,0.10),
                        0 1px 4px rgba(0,0,0,0.06);">

      <!-- TOP GOLD BAR -->
      <tr>
        <td style="background:linear-gradient(90deg,#e8961a 0%,#f5a623 45%,#e8961a 100%);
                    height:5px;font-size:0;line-height:0;">&nbsp;</td>
      </tr>

      <!-- ══════════════════════════════════════════
           HEADER  — dark navy with logo
      ══════════════════════════════════════════ -->
      <tr>
        <td align="center"
          style="background:linear-gradient(160deg,#0f1923 0%,#1a2638 55%,#111827 100%);
                 padding:44px 48px 36px;">

          <!-- LOGO BOX -->
          ${logoSrc ? `
          <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">
            <tr>
              <td align="center"
                style="background:#ffffff;border-radius:10px;
                       padding:12px 24px;
                       border:2px solid rgba(245,166,35,0.55);
                       box-shadow:0 0 0 4px rgba(245,166,35,0.10),
                                  0 6px 24px rgba(0,0,0,0.35);">
                <img src="${logoSrc}"
                     alt="SunTech Packaging Machines"
                     width="170"
                     style="display:block;height:auto;max-height:60px;
                            object-fit:contain;border:0;"/>
              </td>
            </tr>
          </table>` : `
          <!-- text fallback when logo file not found -->
          <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">
            <tr>
              <td align="center"
                style="background:#ffffff;border-radius:10px;padding:14px 28px;
                       border:2px solid rgba(245,166,35,0.55);">
                <span style="font-size:22px;font-weight:900;letter-spacing:0.06em;
                              color:#111827;font-family:Arial,sans-serif;">
                  SUN<span style="color:#f5a623;">TECH</span>
                </span>
              </td>
            </tr>
          </table>`}

          <!-- TAGLINE -->
          <p style="margin:0 0 22px;font-size:10px;font-weight:700;
                     letter-spacing:0.32em;text-transform:uppercase;
                     color:rgba(245,166,35,0.75);">
            Packaging Machines &nbsp;·&nbsp; Industrial Solutions
          </p>

          <!-- DIVIDER LINE + DOT -->
          <table cellpadding="0" cellspacing="0" border="0"
            style="margin:0 auto 22px;">
            <tr>
              <td style="width:40px;height:1px;
                          background:linear-gradient(90deg,transparent,rgba(245,166,35,0.5));
                          vertical-align:middle;"></td>
              <td style="width:7px;height:7px;background:#f5a623;border-radius:50%;
                          padding:0 10px;vertical-align:middle;"></td>
              <td style="width:40px;height:1px;
                          background:linear-gradient(90deg,rgba(245,166,35,0.5),transparent);
                          vertical-align:middle;"></td>
            </tr>
          </table>

          <!-- BADGE -->
          <table cellpadding="0" cellspacing="0" border="0"
            style="margin:0 auto 18px;">
            <tr>
              <td style="background:rgba(245,166,35,0.14);
                          border:1px solid rgba(245,166,35,0.40);
                          border-radius:24px;padding:7px 20px;">
                <span style="font-size:11px;font-weight:700;letter-spacing:0.16em;
                              text-transform:uppercase;color:#f5a623;">
                  🔔 &nbsp;New Enquiry Received
                </span>
              </td>
            </tr>
          </table>

          <!-- HEADLINE -->
          <h1 style="margin:0 0 8px;font-size:28px;font-weight:800;
                      color:#ffffff;letter-spacing:-0.02em;line-height:1.15;">
            New Contact Form Lead
          </h1>
          <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.42);
                     font-weight:400;line-height:1.5;">
            A potential customer submitted an enquiry via the website
          </p>
        </td>
      </tr>

      <!-- ══════════════════════════════════════════
           WHITE BODY
      ══════════════════════════════════════════ -->
      <tr>
        <td style="background:#ffffff;padding:36px 48px 28px;">

          <!-- TIMESTAMP -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0"
            style="margin-bottom:28px;">
            <tr>
              <td style="background:#f8f9fb;border-radius:8px;
                          border-left:3px solid #e8961a;padding:12px 16px;">
                <span style="font-size:11px;font-weight:600;
                              letter-spacing:0.08em;text-transform:uppercase;
                              color:#6b7280;">
                  📅 &nbsp;Received: ${timestamp} (IST)
                </span>
              </td>
            </tr>
          </table>

          <!-- SECTION LABEL -->
          <p style="margin:0 0 14px;font-size:10px;font-weight:800;
                     letter-spacing:0.30em;text-transform:uppercase;
                     color:#e8961a;">
            ▸ &nbsp;Lead Information
          </p>

          <!-- ── NAME CARD ── -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0"
            style="margin-bottom:10px;border-radius:10px;overflow:hidden;
                   border:1px solid #e5e7eb;">
            <tr>
              <td style="background:#f9fafb;padding:16px 20px;
                          border-left:4px solid #f5a623;">
                <span style="display:block;font-size:9px;font-weight:800;
                              letter-spacing:0.22em;text-transform:uppercase;
                              color:#9ca3af;margin-bottom:6px;">
                  👤 &nbsp;Full Name
                </span>
                <span style="font-size:18px;font-weight:700;color:#111827;
                              letter-spacing:0.01em;">
                  ${name}
                </span>
              </td>
            </tr>
          </table>

          <!-- ── EMAIL CARD ── -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0"
            style="margin-bottom:10px;border-radius:10px;overflow:hidden;
                   border:1px solid #e5e7eb;">
            <tr>
              <td style="background:#f9fafb;padding:16px 20px;
                          border-left:4px solid #f5a623;">
                <span style="display:block;font-size:9px;font-weight:800;
                              letter-spacing:0.22em;text-transform:uppercase;
                              color:#9ca3af;margin-bottom:6px;">
                  ✉️ &nbsp;Email Address
                </span>
                <a href="mailto:${email}"
                  style="font-size:16px;font-weight:600;color:#2563eb;
                          text-decoration:none;letter-spacing:0.01em;">
                  ${email}
                </a>
              </td>
            </tr>
          </table>

          <!-- ── PHONE CARD ── -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0"
            style="margin-bottom:10px;border-radius:10px;overflow:hidden;
                   border:1px solid #e5e7eb;">
            <tr>
              <td style="background:#f9fafb;padding:16px 20px;
                          border-left:4px solid #f5a623;">
                <span style="display:block;font-size:9px;font-weight:800;
                              letter-spacing:0.22em;text-transform:uppercase;
                              color:#9ca3af;margin-bottom:6px;">
                  📞 &nbsp;Phone Number
                </span>
                <a href="tel:${phone}"
                  style="font-size:16px;font-weight:600;color:#059669;
                          text-decoration:none;letter-spacing:0.03em;">
                  ${phone}
                </a>
              </td>
            </tr>
          </table>

          <!-- ── MESSAGE CARD ── -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0"
            style="margin-bottom:32px;border-radius:10px;overflow:hidden;
                   border:1px solid #fde68a;">
            <tr>
              <td style="background:#fffbeb;padding:16px 20px 4px;
                          border-left:4px solid #f5a623;">
                <span style="display:block;font-size:9px;font-weight:800;
                              letter-spacing:0.22em;text-transform:uppercase;
                              color:#d97706;margin-bottom:8px;">
                  💬 &nbsp;Message
                </span>
              </td>
            </tr>
            <tr>
              <td style="background:#fffbeb;padding:0 20px 18px;
                          border-left:4px solid #f5a623;">
                <p style="margin:0;font-size:14px;line-height:1.75;
                           color:#374151;font-weight:400;">
                  ${message}
                </p>
              </td>
            </tr>
          </table>

          <!-- CTA BUTTON -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td align="center" style="padding-bottom:4px;">
                <a href="mailto:${email}?subject=Re%3A%20Your%20Enquiry%20%E2%80%94%20SunTech%20Packaging"
                  style="display:inline-block;
                         background:linear-gradient(135deg,#f5a623 0%,#e8961a 100%);
                         color:#111827;font-size:13px;font-weight:800;
                         letter-spacing:0.12em;text-transform:uppercase;
                         text-decoration:none;padding:16px 40px;
                         border-radius:8px;
                         box-shadow:0 4px 14px rgba(245,166,35,0.40);">
                  ↩ &nbsp; Reply to ${name}
                </a>
              </td>
            </tr>
          </table>

        </td>
      </tr>

      <!-- THIN SEPARATOR -->
      <tr>
        <td style="height:1px;background:#e5e7eb;font-size:0;line-height:0;">&nbsp;</td>
      </tr>

      <!-- ══════════════════════════════════════════
           STATS STRIP — light grey
      ══════════════════════════════════════════ -->
      <tr>
        <td style="background:#f8f9fb;padding:22px 48px;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td align="center" style="padding:0 8px;">
                <span style="display:block;font-size:22px;font-weight:900;
                              color:#f5a623;line-height:1;">500+</span>
                <span style="font-size:9px;font-weight:700;letter-spacing:0.18em;
                              text-transform:uppercase;color:#9ca3af;
                              margin-top:4px;display:block;">Installs</span>
              </td>
              <td style="width:1px;background:#e5e7eb;"></td>
              <td align="center" style="padding:0 8px;">
                <span style="display:block;font-size:22px;font-weight:900;
                              color:#f5a623;line-height:1;">40+</span>
                <span style="font-size:9px;font-weight:700;letter-spacing:0.18em;
                              text-transform:uppercase;color:#9ca3af;
                              margin-top:4px;display:block;">Cities</span>
              </td>
              <td style="width:1px;background:#e5e7eb;"></td>
              <td align="center" style="padding:0 8px;">
                <span style="display:block;font-size:22px;font-weight:900;
                              color:#f5a623;line-height:1;">15+</span>
                <span style="font-size:9px;font-weight:700;letter-spacing:0.18em;
                              text-transform:uppercase;color:#9ca3af;
                              margin-top:4px;display:block;">Years Exp.</span>
              </td>
              <td style="width:1px;background:#e5e7eb;"></td>
              <td align="center" style="padding:0 8px;">
                <span style="display:block;font-size:22px;font-weight:900;
                              color:#f5a623;line-height:1;">99%</span>
                <span style="font-size:9px;font-weight:700;letter-spacing:0.18em;
                              text-transform:uppercase;color:#9ca3af;
                              margin-top:4px;display:block;">Uptime</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- THIN SEPARATOR -->
      <tr>
        <td style="height:1px;background:#e5e7eb;font-size:0;line-height:0;">&nbsp;</td>
      </tr>

      <!-- ══════════════════════════════════════════
           FOOTER — white
      ══════════════════════════════════════════ -->
      <tr>
        <td align="center" style="background:#ffffff;padding:28px 48px 32px;">

          <!-- CERT BADGES -->
          <table cellpadding="0" cellspacing="0" border="0"
            style="margin:0 auto 20px;">
            <tr>
              <td style="padding:0 4px;">
                <span style="display:inline-block;font-size:9px;font-weight:700;
                              letter-spacing:0.14em;text-transform:uppercase;
                              color:#e8961a;
                              background:rgba(245,166,35,0.10);
                              border:1px solid rgba(245,166,35,0.35);
                              padding:5px 11px;border-radius:4px;">
                  ISO 9001
                </span>
              </td>
              <td style="padding:0 4px;">
                <span style="display:inline-block;font-size:9px;font-weight:700;
                              letter-spacing:0.14em;text-transform:uppercase;
                              color:#e8961a;
                              background:rgba(245,166,35,0.10);
                              border:1px solid rgba(245,166,35,0.35);
                              padding:5px 11px;border-radius:4px;">
                  CE Marked
                </span>
              </td>
              <td style="padding:0 4px;">
                <span style="display:inline-block;font-size:9px;font-weight:700;
                              letter-spacing:0.14em;text-transform:uppercase;
                              color:#e8961a;
                              background:rgba(245,166,35,0.10);
                              border:1px solid rgba(245,166,35,0.35);
                              padding:5px 11px;border-radius:4px;">
                  🇮🇳 Make in India
                </span>
              </td>
            </tr>
          </table>

          <!-- HORIZONTAL RULE -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0"
            style="margin-bottom:18px;">
            <tr>
              <td style="height:1px;background:#f0f2f5;font-size:0;line-height:0;">&nbsp;</td>
            </tr>
          </table>

          <p style="margin:0 0 4px;font-size:14px;font-weight:700;
                     color:#111827;letter-spacing:0.04em;">
            SunTech Packaging Machines
          </p>
          <p style="margin:0 0 14px;font-size:12px;color:#6b7280;line-height:1.7;">
            MIDC Industrial Area, Bhiwandi, Maharashtra – 421302<br/>
            <a href="mailto:info@suntech.in"
              style="color:#e8961a;text-decoration:none;font-weight:600;">
              info@suntech.in
            </a>
            &nbsp;·&nbsp;
            <a href="tel:+910011111111"
              style="color:#e8961a;text-decoration:none;font-weight:600;">
              +91 00111 11111
            </a>
          </p>

          <p style="margin:0;font-size:10px;color:#d1d5db;
                     letter-spacing:0.07em;text-transform:uppercase;">
            Automated notification from the website contact form
          </p>
        </td>
      </tr>

      <!-- BOTTOM GOLD BAR -->
      <tr>
        <td style="background:linear-gradient(90deg,#e8961a 0%,#f5a623 45%,#e8961a 100%);
                    height:4px;font-size:0;line-height:0;">&nbsp;</td>
      </tr>

    </table>
    <!-- END MAIN CARD -->

  </td></tr>
</table>

</body>
</html>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Email failed",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});