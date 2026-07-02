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
            Din 2018 • Peste 700 de evenimente realizate
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05, ease }}
            className="mt-10 font-display text-[2.75rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Tot ce ai nevoie pentru <br className="hidden sm:block" />
<span className="text-gold-gradient">
  un eveniment memorabil
</span>
<br className="hidden sm:block" />
într-o singură echipă.
          </motion.h1>

          <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease }}
  className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl"
>
  Foto & Video, Cabină Foto, Platformă 360, Oglindă Foto, Bar Mobil,
  Fum Greu, Dronă și multe alte servicii premium pentru nunți și
  botezuri în Iași și în întreaga regiune a Moldovei.
</motion.p>

<motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.28, ease }}
  className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
>
  <div className="flex items-center gap-2">
    <span className="text-gold">✓</span>
    <span>Peste 700 de evenimente</span>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-gold">✓</span>
    <span>Din 2018</span>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-gold">✓</span>
    <span>Peste 10 servicii într-o singură echipă</span>
  </div>
</motion.div>

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
            <div className="relative flex h-full w-full items-center justify-center">

  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="h-full max-h-[850px] rounded-[2rem] object-cover shadow-2xl"
  >
    <source src="/videos/hero.mp4" type="video/mp4" />
  </video>

</div>

            {/* Top frame overlay */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background/50 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-x-12">
            {[
  { k: "700+", v: "Evenimente realizate" },
  { k: "2018", v: "Din 2018 alături de clienți" },
  { k: "4.9★", v: "Rating Google" },
  { k: "10+", v: "Servicii premium" },
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
