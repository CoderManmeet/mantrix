"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ background: "#0a0a0a", color: "#f5f5f5", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1 style={{ fontSize: "1.75rem", fontWeight: 600 }}>Something went wrong.</h1>
            <p style={{ marginTop: "1rem", color: "#a1a1aa" }}>
              A critical error occurred. Please refresh the page.
            </p>
            <button
              onClick={() => reset()}
              style={{
                marginTop: "2rem",
                padding: "0.75rem 1.5rem",
                background: "#00e5ff",
                color: "#0a0a0a",
                border: "none",
                borderRadius: "999px",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}