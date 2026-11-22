"use client";

import { useEffect, useState } from "react";

export interface TypewriterProps {
  words: string[];
}

export function Typewriter({ words }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = words[index];
    const delay = !deleting && text === full ? 1600 : deleting ? 35 : 70;

    const id = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIndex((n) => (n + 1) % words.length);
        return;
      }
      setText(
        deleting
          ? full.slice(0, text.length - 1)
          : full.slice(0, text.length + 1),
      );
    }, delay);

    return () => clearTimeout(id);
  }, [text, deleting, index, words]);

  return (
    <span
      aria-label={words.join(", ")}
      className="inline-flex h-8 items-center"
    >
      <span aria-hidden className="motion-reduce:hidden">
        {text}
      </span>
      {/* Reduced motion: show a static line instead of the typing effect */}
      <span aria-hidden className="hidden motion-reduce:inline">
        {words[0]}
      </span>
      <span
        aria-hidden
        className="ml-1 inline-block h-6 w-0.5 animate-blink bg-sky-500 motion-reduce:hidden"
      />
    </span>
  );
}

export default Typewriter;
