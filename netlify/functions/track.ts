import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  if (req.method !== "GET" && req.method !== "OPTIONS") {
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
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
      },
    });
  }

  // Read location details from Netlify's context.geo object
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

  try {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Tracker <onboarding@resend.dev>",
        to: toEmail,
        subject: `🚨 Portfolio Opened: Visitor from ${city}, ${country}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; border: 1px solid #eaeaea; border-radius: 5px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #ff6b35; margin-top: 0; border-bottom: 2px solid #ff6b35; padding-bottom: 8px;">
              New Portfolio Visit
            </h2>
            <p>A recruiter or visitor has just landed on your portfolio website.</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 120px;">📍 Location:</td>
                <td style="padding: 8px 0;">${locationString}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">🌐 IP Address:</td>
                <td style="padding: 8px 0;">${ip}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">⏰ Time (IST):</td>
                <td style="padding: 8px 0;">${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })}</td>
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

    return new Response(JSON.stringify({ success: true, location: locationString }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send tracking email", details: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
};
