export function CodeCard() {
  const k = "text-fuchsia-500 dark:text-fuchsia-400";
  const s = "text-emerald-600 dark:text-emerald-400";
  const p = "text-sky-600 dark:text-sky-400";

  return (
    <div className="relative">
      <div className="absolute -inset-2 rounded-3xl bg-linear-to-br from-sky-500/30 via-indigo-500/20 to-fuchsia-500/30 blur-2xl" />
      <div className="bg-card/80 relative overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-md transition-transform duration-500 hover:-translate-y-1 hover:rotate-1">
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <span className="size-3 rounded-full bg-red-400" />
          <span className="size-3 rounded-full bg-amber-400" />
          <span className="size-3 rounded-full bg-emerald-400" />
          <span className="text-muted-foreground ml-3 font-mono text-xs">
            asaduzzaman.ts
          </span>
        </div>

        <pre className="overflow-x-auto p-5 font-mono text-xs leading-7 sm:text-sm">
          <code>
            <span className={k}>const</span> <span className={p}>developer</span>{" "}
            = {"{"}
            {"\n"}
            {"  "}name: <span className={s}>&quot;Md. Asaduzzaman Rifat&quot;</span>,
            {"\n"}
            {"  "}from: <span className={s}>&quot;Bangladesh&quot;</span>,{"\n"}
            {"  "}stack: [<span className={s}>&quot;PHP&quot;</span>,{" "}
            <span className={s}>&quot;Laravel&quot;</span>],{"\n"}
            {"  "}learning: [{"\n"}
            {"    "}
            <span className={s}>&quot;MERN&quot;</span>,{"\n"}
            {"    "}
            <span className={s}>&quot;Next.js&quot;</span>,{"\n"}
            {"    "}
            <span className={s}>&quot;TypeScript&quot;</span>,{"\n"}
            {"  "}],{"\n"}
            {"  "}goal:{" "}
            <span className={s}>&quot;Full-Stack Web Developer&quot;</span>,
            {"\n"}
            {"  "}funFact: <span className={s}>&quot;Loves travelling&quot;</span>,
            {"\n"}
            {"}"};{"\n"}
            <span className="text-muted-foreground">
              {"// keep learning, keep building"}
            </span>
          </code>
        </pre>
      </div>
    </div>
  );
}

export default CodeCard;
