import { Switch, Route, Router as WouterRouter } from "wouter";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { Cursor, GrainOverlay } from "@/components/effects";
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      return;
    }

    // 1. Initial Page View Tracking
    const hasTracked = sessionStorage.getItem("visitor-tracked");
    if (!hasTracked) {
      fetch("/api/track")
        .then((res) => {
          if (res.ok) {
            sessionStorage.setItem("visitor-tracked", "true");
          }
        })
        .catch((err) => console.error("Tracking error:", err));
    }

    // 2. Click Tracking Setup
    const clicks: Record<string, number> = JSON.parse(sessionStorage.getItem("visitor-clicks") || "{}");

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href") || anchor.href;
        const text = anchor.innerText || anchor.textContent || href;
        const key = `${text.trim()} -> ${href}`;
        clicks[key] = (clicks[key] || 0) + 1;
        sessionStorage.setItem("visitor-clicks", JSON.stringify(clicks));
      }
    };

    document.addEventListener("click", handleGlobalClick);

    // 3. Send summary on unload/hide
    const sendSummary = () => {
      const storedClicks = JSON.parse(sessionStorage.getItem("visitor-clicks") || "{}");
      if (Object.keys(storedClicks).length === 0) return;

      const payload = JSON.stringify({
        clicks: storedClicks,
        userAgent: navigator.userAgent,
        referrer: document.referrer || "Direct",
      });

      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/track-activity", payload);
      } else {
        fetch("/api/track-activity", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          keepalive: true,
        });
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sendSummary();
      }
    };

    window.addEventListener("beforeunload", sendSummary);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("click", handleGlobalClick);
      window.removeEventListener("beforeunload", sendSummary);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <GrainOverlay />
      <Cursor />
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </>
  );
}

export default App;
