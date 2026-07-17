import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-md border border-border p-8">
        <div className="flex mb-4 gap-3 items-center">
          <AlertCircle className="h-7 w-7 text-accent shrink-0" />
          <h1 className="text-xl sm:text-2xl font-display font-bold">404 Page Not Found</h1>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-block mt-6 font-mono text-xs uppercase tracking-widest text-accent underline-link"
        >
          ← Back home
        </a>
      </div>
    </div>
  );
}
