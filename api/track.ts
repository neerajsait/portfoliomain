import type { IncomingMessage, ServerResponse } from "http";

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
    return;
  }

  // 1. Read location details directly from Vercel's automatic request headers
  const city = req.headers["x-vercel-ip-city"]
    ? decodeURIComponent(req.headers["x-vercel-ip-city"] as string)
    : "Unknown City";
  const region = req.headers["x-vercel-ip-country-region"]
    ? decodeURIComponent(req.headers["x-vercel-ip-country-region"] as string)
    : "Unknown Region";
  const country = req.headers["x-vercel-ip-country"]
    ? decodeURIComponent(req.headers["x-vercel-ip-country"] as string)
    : "Unknown Country";

  const locationString = `${city}, ${region}, ${country}`;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY environment variable");
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Server configuration error" }));
    return;
  }

  try {
    // 2. Call Resend API to send the email
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Tracker <onboarding@resend.dev>",
        to: "2200030957@kluniversity.in",
        subject: `New Visitor from ${city}, ${country}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; border: 1px solid #eaeaea; border-radius: 5px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #ff6b35; margin-top: 0;">Portfolio Visitor Notification</h2>
            <p>A user has viewed your portfolio website.</p>
            <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
            <p><strong>📍 Location:</strong> ${locationString}</p>
            <p><strong>⏰ Time:</strong> ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Resend API Error: ${errorText}`);
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ success: true, location: locationString }));
  } catch (error) {
    console.error("Error sending email:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Failed to send tracking email" }));
  }
}
