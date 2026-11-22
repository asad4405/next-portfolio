"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks } from "@/data/portfolio";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/70 sticky top-0 z-50 border-b backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a href="#top" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          {/* Light theme logo */}
          <Image
            src="/logo-light.svg"
            alt="ASAD"
            width={120}
            height={32}
            className="h-8 w-auto dark:hidden"
            priority
          />
          {/* Dark theme logo */}
          <Image
            src="/logo-dark.svg"
            alt="ASAD"
            width={120}
            height={32}
            className="hidden h-8 w-auto dark:block"
            priority
          />
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          {/* Desktop Nav */}
          <ul className="hidden items-center gap-1 sm:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-foreground hover:text-sky-600 dark:text-white dark:hover:text-sky-400 hover:bg-accent rounded-full px-4 py-2 text-sm font-medium transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="bg-background/60 hover:bg-accent text-foreground inline-flex size-10 items-center justify-center rounded-full border backdrop-blur-md transition-colors sm:hidden"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="bg-background/95 border-b px-6 py-4 backdrop-blur-2xl sm:hidden">
          <ul className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground hover:text-sky-600 dark:text-white dark:hover:text-sky-400 hover:bg-accent block rounded-xl px-4 py-2.5 text-base font-medium transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
