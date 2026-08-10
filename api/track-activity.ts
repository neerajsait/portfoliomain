import type { IncomingMessage, ServerResponse } from "http";

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.end();
    return;
  }

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
    return;
  }

  try {
    let bodyData = "";
    req.on("data", chunk => {
      bodyData += chunk.toString();
    });

    await new Promise((resolve) => req.on("end", resolve));

    const body = JSON.parse(bodyData || "{}");
    const { clicks = {}, userAgent = "Unknown", referrer = "Direct" } = body;

    // Read location details from Vercel's automatic request headers
    const city = req.headers["x-vercel-ip-city"]
      ? decodeURIComponent(req.headers["x-vercel-ip-city"] as string)
      : "Unknown City";
    const region = req.headers["x-vercel-ip-country-region"]
      ? decodeURIComponent(req.headers["x-vercel-ip-country-region"] as string)
      : "Unknown Region";
    const country = req.headers["x-vercel-ip-country"]
      ? decodeURIComponent(req.headers["x-vercel-ip-country"] as string)
      : "Unknown Country";
    const ip = req.headers["x-forwarded-for"] || "Unknown IP";

    const locationString = `${city}, ${region}, ${country}`;

    // Filter out search engines, crawlers, and automated scanners
    const isBot = /bot|crawler|spider|ping|uptime|lighthouse|headless|curl|wget|python|node|axios|go-http|scanner/i.test(userAgent);
    
    if (isBot) {
      console.log(`Activity tracking skipped: Bot detected (${userAgent})`);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.end(JSON.stringify({ success: true, message: "Bot activity tracking skipped" }));
      return;
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.TO_EMAIL || "2200030957@kluniversity.in";

    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Server configuration error" }));
      return;
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

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify({ success: true }));
  } catch (error: any) {
    console.error("Error processing activity track:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify({ error: "Internal Server Error", details: error.message }));
  }
}
