import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  if (req.method !== "POST" && req.method !== "OPTIONS") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    });
  }

  try {
    const body = await req.json();
    const { clicks = {}, userAgent = "Unknown", referrer = "Direct" } = body;

    // Read location details from Netlify's context
    const city = context.geo?.city || "Unknown City";
    const region = context.geo?.subdivision?.name || "Unknown Region";
    const country = context.geo?.country?.name || "Unknown Country";
    const ip = context.ip || "Unknown IP";
    const locationString = `${city}, ${region}, ${country}`;

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.TO_EMAIL || "2200030957cseh@gmail.com";

    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return new Response(JSON.stringify({ error: "Server configuration error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Format clicks for HTML email
    let clickListHtml = "";
    const clickEntries = Object.entries(clicks);
    if (clickEntries.length > 0) {
      clickListHtml = `<table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <thead>
          <tr style="background-color: #f8f9fa; border-bottom: 1px solid #eaeaea;">
            <th style="padding: 10px; text-align: left; font-size: 13px; font-weight: bold; color: #495057;">Element / Link Clicked</th>
            <th style="padding: 10px; text-align: center; font-size: 13px; font-weight: bold; color: #495057; width: 80px;">Clicks</th>
          </tr>
        </thead>
        <tbody>`;
      
      clickEntries.forEach(([link, count]) => {
        clickListHtml += `
          <tr style="border-bottom: 1px solid #f1f3f5;">
            <td style="padding: 10px; font-size: 13px; color: #333; word-break: break-all;">${link}</td>
            <td style="padding: 10px; text-align: center; font-size: 13px; color: #333; font-weight: bold;">${count}</td>
          </tr>`;
      });
      
      clickListHtml += `</tbody></table>`;
    } else {
      clickListHtml = `<p style="font-style: italic; color: #868e96;">No click events recorded.</p>`;
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Tracker <onboarding@resend.dev>",
        to: toEmail,
        subject: `📊 Visitor Activity from ${city}, ${country}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; border: 1px solid #eaeaea; border-radius: 5px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4b6cc1; margin-top: 0; border-bottom: 2px solid #4b6cc1; padding-bottom: 8px;">
              Visitor Activity Summary
            </h2>
            <p>Here is what the visitor from <strong>${locationString}</strong> did on your website:</p>
            
            <h3 style="color: #495057; margin-bottom: 8px;">🖱️ Click Details:</h3>
            ${clickListHtml}
            
            <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
            
            <table style="width: 100%; border-collapse: collapse; font-size: 12px; color: #6c757d;">
              <tr>
                <td style="padding: 4px 0; font-weight: bold; width: 100px;">Referrer:</td>
                <td style="padding: 4px 0;">${referrer}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; font-weight: bold;">IP:</td>
                <td style="padding: 4px 0;">${ip}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; font-weight: bold;">User Agent:</td>
                <td style="padding: 4px 0; word-break: break-all;">${userAgent}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; font-weight: bold;">Time (IST):</td>
                <td style="padding: 4px 0;">${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })}</td>
              </tr>
            </table>
          </div>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      throw new Error(`Resend API Error: ${errorText}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error: any) {
    console.error("Error processing activity track:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error", details: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
};
