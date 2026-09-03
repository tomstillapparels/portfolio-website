import { createServerFn } from "@tanstack/react-start";

export const sendInquiryEmail = createServerFn({ method: "POST" })
  .validator(
    (data: {
      fullName: string;
      companyName: string;
      email: string;
      phone: string;
      address?: string;
      volume: string;
    }) => data
  )
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not defined in environment variables.");
      throw new Error("Email sending is currently misconfigured on the server.");
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Bulk Inquiry</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              background-color: #f6f6f6;
              margin: 0;
              padding: 20px;
              color: #1a1a1a;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              border: 3px solid #1a1a1a;
              box-shadow: 6px 6px 0px #1a1a1a;
              padding: 30px;
            }
            .header {
              border-bottom: 2px solid #1a1a1a;
              padding-bottom: 15px;
              margin-bottom: 25px;
            }
            .logo {
              font-size: 24px;
              font-weight: 900;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              color: #1a1a1a;
            }
            .badge {
              display: inline-block;
              background-color: #1a1a1a;
              color: #ffffff;
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 0.05em;
              text-transform: uppercase;
              padding: 4px 8px;
              margin-top: 8px;
            }
            .title {
              font-size: 20px;
              font-weight: 800;
              text-transform: uppercase;
              margin: 20px 0 10px 0;
              color: #1a1a1a;
            }
            .grid {
              margin-bottom: 30px;
            }
            .grid-item {
              padding: 12px 0;
              border-bottom: 1px solid #e5e5e5;
            }
            .grid-item:last-child {
              border-bottom: none;
            }
            .label {
              font-size: 11px;
              font-weight: 700;
              text-transform: uppercase;
              color: #666666;
              margin-bottom: 4px;
            }
            .value {
              font-size: 16px;
              font-weight: 500;
              color: #1a1a1a;
            }
            .footer {
              font-size: 12px;
              color: #888888;
              text-align: center;
              margin-top: 30px;
              border-top: 1px solid #e5e5e5;
              padding-top: 15px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">TOMSTILL</div>
              <div class="badge">Bulk Inquiry Manifest</div>
            </div>
            
            <div class="title">Inquiry Details</div>
            
            <div class="grid">
              <div class="grid-item">
                <div class="label">Full Name</div>
                <div class="value">${data.fullName}</div>
              </div>
              <div class="grid-item">
                <div class="label">Company Name</div>
                <div class="value">${data.companyName}</div>
              </div>
              <div class="grid-item">
                <div class="label">Email Address</div>
                <div class="value">
                  <a href="mailto:${data.email}" style="color: #1a1a1a; text-decoration: underline; font-weight: 600;">
                    ${data.email}
                  </a>
                </div>
              </div>
              <div class="grid-item">
                <div class="label">Contact Number</div>
                <div class="value">
                  ${data.phone ? `<a href="tel:${data.phone}" style="color: #1a1a1a; text-decoration: underline;">${data.phone}</a>` : 'Not provided'}
                </div>
              </div>
              <div class="grid-item">
                <div class="label">Address</div>
                <div class="value">${data.address ? data.address.replace(/\n/g, '<br>') : 'Not provided'}</div>
              </div>
              <div class="grid-item">
                <div class="label">Initial Volume Request</div>
                <div class="value" style="font-weight: 700;">${data.volume} units</div>
              </div>
            </div>
            
            <div class="footer">
              This inquiry was submitted via the TOMSTILL wholesale manifest portal.<br>
              Received on ${new Date().toUTCString()}
            </div>
          </div>
        </body>
      </html>
    `;

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "TOMSTILL Inquiry <onboarding@resend.dev>",
          to: ["tomstillapparels@gmail.com"],
          subject: `New Bulk Inquiry - ${data.companyName}`,
          html: htmlContent,
          reply_to: data.email,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Resend API response error:", errorText);
        throw new Error(`Failed to send email via Resend: ${response.statusText}`);
      }

      const responseData = await response.json();
      return { success: true, data: responseData };
    } catch (err: any) {
      console.error("Error in sendInquiryEmail handler:", err);
      throw err;
    }
  });
