"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Rocket } from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm sm:flex-row">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-light.svg"
            alt="ASAD"
            width={90}
            height={24}
            className="h-6 w-auto dark:hidden"
          />
          <Image
            src="/logo-dark.svg"
            alt="ASAD"
            width={90}
            height={24}
            className="hidden h-6 w-auto dark:block"
          />
          <p className="text-muted-foreground">
            © {currentYear} Md. Asaduzzaman Rifat. All rights reserved.
          </p>
        </div>
        <p className="flex items-center gap-2 font-medium">
          <Rocket className="size-4 text-sky-500" />
          Keep Learning · Keep Building · Keep Growing
        </p>
      </div>
    </footer>
  );
}

export default Footer;
