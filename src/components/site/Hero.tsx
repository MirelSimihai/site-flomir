import { motion } from "framer-motion";
import { Play, ArrowUpRight, MessageCircle, Star } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-radial-spotlight pt-36 pb-28 lg:pt-52 lg:pb-40">
      {/* Animated gold orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="orb absolute left-[12%] top-[14%] h-[360px] w-[360px] opacity-40"
          style={{ background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)" }}
        />
        <div
          className="orb absolute right-[8%] top-[35%] h-[420px] w-[420px] opacity-30"
          style={{
            background: "radial-gradient(circle, #F1D27A 0%, transparent 70%)",
            animationDelay: "-6s",
          }}
        />
      </div>

      {/* Editorial grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
        }}
      />
      <div className="noise-overlay -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="glass mx-auto inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-muted-foreground"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            Servicii premium pentru evenimente
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05, ease }}
            className="mt-10 font-display text-[2.75rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Fiecare moment merită <br className="hidden sm:block" />
            să fie{" "}
            <span className="italic">
              <span className="text-gold-gradient">trăit din nou</span>
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl"
          >
            De la primul cadru până la ultima notă a serii — Flomir Events reunește
            într-un singur loc tot ce face un eveniment cu adevărat memorabil.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="btn-sheen group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-medium text-background shadow-gold transition-all duration-500 hover:-translate-y-0.5"
            >
              Solicită ofertă personalizată
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
            <a
              href="https://wa.me/40740593755"
              target="_blank"
              rel="noreferrer"
              className="glass group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-foreground transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/[0.05]"
            >
              <MessageCircle className="h-4 w-4 text-gold" /> Scrie-ne pe WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 flex items-center justify-center gap-3 text-xs text-muted-foreground"
          >
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </div>
            <span className="tracking-wide">Recomandați de zeci de cupluri și organizatori</span>
          </motion.div>
        </div>

        {/* Showreel */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease }}
          className="relative mx-auto mt-24 max-w-6xl"
        >
          <div className="absolute -inset-2 rounded-[2rem] bg-gold-gradient opacity-20 blur-3xl" />
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-border-strong bg-card shadow-elegant">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 28% 30%, rgba(241,210,122,0.22), transparent 55%), radial-gradient(circle at 72% 72%, rgba(212,175,55,0.14), transparent 55%), linear-gradient(180deg, #1C1C1C 0%, #0B0B0B 100%)",
              }}
            />
            <div className="noise-overlay" />
            <div className="relative flex h-full w-full flex-col items-center justify-center">
              <button
                aria-label="Redă videoclipul de prezentare"
                className="group relative flex h-24 w-24 items-center justify-center rounded-full bg-gold-gradient text-background transition-transform duration-500 hover:scale-110"
              >
                <span className="absolute inset-0 rounded-full bg-gold opacity-40 blur-xl transition-opacity group-hover:opacity-70" />
                <Play className="relative h-8 w-8 translate-x-0.5 fill-current" />
              </button>
              <p className="mt-8 text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                Showreel · Flomir Events
              </p>
            </div>

            {/* Top frame overlay */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background/50 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-x-12">
            {[
              { k: "10+", v: "Servicii sub un singur brand" },
              { k: "★★★★★", v: "Experiențe premium" },
              { k: "100%", v: "Dedicare pentru fiecare client" },
              { k: "24/7", v: "Suport pe WhatsApp" },
            ].map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="text-center"
              >
                <div className="font-display text-4xl font-light tracking-tight text-gold-gradient sm:text-5xl">
                  {s.k}
                </div>
                <div className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
