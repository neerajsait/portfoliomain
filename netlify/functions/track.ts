import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  if (req.method !== "GET" && req.method !== "POST" && req.method !== "OPTIONS") {
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
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      },
    });
  }

  // Read location details from Netlify's context.geo object
  const city = context.geo?.city || "Unknown City";
  const region = context.geo?.subdivision?.name || "Unknown Region";
  const country = context.geo?.country?.name || "Unknown Country";
  const ip = context.ip || "Unknown IP";

  // Parse Body for advanced tracking
  let referrer = "Direct / Unknown";
  let searchParams = "";
  if (req.method === "POST") {
    try {
      const body = await req.json();
      if (body.referrer) referrer = body.referrer;
      if (body.searchParams) searchParams = body.searchParams;
    } catch(e) {
      console.log("Failed to parse POST body");
    }
  }

  // Filter out search engines, crawlers, and automated scanners
  const userAgent = req.headers.get("user-agent") || "";
  const isBot = /bot|crawler|spider|ping|uptime|lighthouse|headless|curl|wget|python|node|axios|go-http|scanner/i.test(userAgent);
  
  if (isBot) {
    console.log(`Tracking skipped: Bot detected (${userAgent})`);
    return new Response(JSON.stringify({ success: true, message: "Bot tracking skipped" }), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  // Detect OS and Browser
  let os = "Unknown OS";
  let browser = "Unknown Browser";
  
  if (/windows/i.test(userAgent)) os = "Windows";
  else if (/mac os/i.test(userAgent)) os = "macOS";
  else if (/linux/i.test(userAgent)) os = "Linux";
  else if (/android/i.test(userAgent)) os = "Android";
  else if (/iphone|ipad|ipod/i.test(userAgent)) os = "iOS";

  if (/edg/i.test(userAgent)) browser = "Edge";
  else if (/chrome|crios/i.test(userAgent)) browser = "Chrome";
  else if (/firefox|fxios/i.test(userAgent)) browser = "Firefox";
  else if (/safari/i.test(userAgent) && !/chrome|crios/i.test(userAgent)) browser = "Safari";

  // Fetch ISP Data
  let isp = "Unknown ISP";
  let org = "Unknown Org";
  if (ip && ip !== "Unknown IP" && ip !== "127.0.0.1" && ip !== "::1") {
    try {
      const ipRes = await fetch(`http://ip-api.com/json/${ip}?fields=status,org,isp`);
      const ipData = await ipRes.json();
      if (ipData.status === "success") {
        isp = ipData.isp || "Unknown ISP";
        org = ipData.org || "Unknown Org";
      }
    } catch(e) {
      console.log("Failed to fetch IP data");
    }
  }

  const locationString = `${city}, ${region}, ${country}`;
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.TO_EMAIL || "2200030957@kluniversity.in";

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
                <td style="padding: 8px 0; font-weight: bold; width: 140px;">📍 Location:</td>
                <td style="padding: 8px 0;">${locationString}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">🏢 Network/ISP:</td>
                <td style="padding: 8px 0;">${org} <span style="color: #666; font-size: 0.9em;">(${isp})</span></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">🔗 Source:</td>
                <td style="padding: 8px 0;"><a href="${referrer}" style="color: #ff6b35; text-decoration: none;">${referrer}</a> ${searchParams}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">💻 Device:</td>
                <td style="padding: 8px 0;">${os} — ${browser}</td>
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
