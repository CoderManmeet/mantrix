"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "mantrix-loader-seen";
export const LOADER_COMPLETE_EVENT = "mantrix-loader-complete";

/**
 * Tells the Hero when it's safe to play its entrance timeline. Mirrors
 * Loader.tsx's own sessionStorage check: if the loader already played this
 * session, Hero is ready immediately. Otherwise it waits for the
 * "mantrix-loader-complete" event Loader.tsx dispatches when it finishes
 * (see Loader.tsx `finish()`), so the two animations never run at once.
 */
export function useLoaderComplete(): boolean {
  const [ready, setReady] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(STORAGE_KEY) === "true";
  });

  useEffect(() => {
    if (ready) return;
    const onComplete = () => setReady(true);
    window.addEventListener(LOADER_COMPLETE_EVENT, onComplete);
    return () => window.removeEventListener(LOADER_COMPLETE_EVENT, onComplete);
  }, [ready]);

  return ready;
}