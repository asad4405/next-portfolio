"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="bg-background/70 sticky top-0 z-50 border-b backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a href="#top" className="flex items-center gap-2 text-lg font-bold">
          <span className="grid size-8 place-items-center rounded-lg bg-linear-to-br from-sky-500 to-indigo-600 font-mono text-sm text-white">
            {"</>"}
          </span>
          <span className="tracking-tight">ASAD</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-full px-4 py-2 text-sm font-medium transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
