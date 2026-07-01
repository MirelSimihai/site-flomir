import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  { n: "01", title: "Conversație", desc: "Ne spui despre evenimentul tău, locație și viziune. Ascultăm cu atenție." },
  { n: "02", title: "Ofertă personalizată", desc: "Construim un pachet cu serviciile potrivite, transparent și fără surprize." },
  { n: "03", title: "Planificare", desc: "Coordonăm toate detaliile alături de tine și de furnizorii implicați." },
  { n: "04", title: "Ziua evenimentului", desc: "Suntem prezenți, discreti, pregătiți. Tu te bucuri, noi avem grijă de rest." },
  { n: "05", title: "Livrarea finală", desc: "Materialele foto & video editate cu rafinament, livrate în timp util." },
];

export function Process() {
  return (
    <section id="proces" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-2xl"
        >
          <div className="text-[11px] uppercase tracking-[0.4em] text-gold">Cum lucrăm</div>
          <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
            Un proces simplu, <span className="italic text-gold-gradient">fără stres</span>.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
            Cinci pași clari, gândiți să transforme un eveniment important într-o experiență
            ușoară și frumoasă pentru tine.
          </p>
        </motion.div>

        <ol className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col rounded-3xl border border-border bg-card/60 p-8 transition-all duration-500 hover:border-gold/25 hover:bg-card sm:p-9"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, color-mix(in oklab, #D4AF37 14%, transparent), transparent 60%)",
                }}
              />
              <div className="relative font-display text-5xl font-extralight tracking-tight text-gold-gradient lg:text-6xl">
                {s.n}
              </div>
              <div className="relative mt-6 h-px w-10 bg-gold/40 transition-all duration-500 group-hover:w-16 group-hover:bg-gold" />
              <h3 className="relative mt-6 font-display text-xl font-light tracking-tight">
                {s.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
