import { Rocket } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm sm:flex-row">
        <p className="text-muted-foreground">
          © 2026 Md. Asaduzzaman. All rights reserved.
        </p>
        <p className="flex items-center gap-2 font-medium">
          <Rocket className="size-4 text-sky-500" />
          Keep Learning · Keep Building · Keep Growing
        </p>
      </div>
    </footer>
  );
}

export default Footer;
