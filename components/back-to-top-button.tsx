"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const syncVisibility = () => {
      setIsVisible(window.scrollY > 280);
    };

    syncVisibility();
    window.addEventListener("scroll", syncVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", syncVisibility);
    };
  }, []);

  return (
    <button
      aria-label="Back to top"
      className={`neo-button fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-200 sm:bottom-6 sm:right-6 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }}
      type="button"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
