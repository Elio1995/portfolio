"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      // The theme isn't known on the server, so anything inside this button
      // can mismatch between SSR and CSR. suppressHydrationWarning is the
      // documented escape hatch for next-themes toggles.
      suppressHydrationWarning
      className="border-default font-mono inline-flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-[10px] uppercase tracking-widest text-muted transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]"
    >
      {mounted ? (
        <>
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: isDark ? "#F39634" : "#B65316" }}
          />
          {isDark ? "Dark" : "Light"}
        </>
      ) : (
        // Stable placeholder identical on server and on first client render.
        <>
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--muted-foreground))]"
          />
          Theme
        </>
      )}
    </button>
  );
}
