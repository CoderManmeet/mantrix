"use client";

import { createContext, useContext, useEffect } from "react";

/**
 * MANTRIX is a single-theme (matte black) product — no light mode exists
 * anywhere in the spec. This provider exists as the designated extension
 * point per Phase 3, and to set color-scheme correctly for native UI
 * (scrollbars, form controls) to render dark.
 */

interface ThemeContextValue {
  theme: "dark";
}

const ThemeContext = createContext<ThemeContextValue>({ theme: "dark" });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.style.colorScheme = "dark";
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}