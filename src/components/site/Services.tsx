import { motion } from "framer-motion";
import {
  Camera,
  Sparkles,
  Aperture,
  RotateCw,
  Wine,
  CloudFog,
  Cloud,
  Drum,
  GlassWater,
  Flower2,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    icon: Camera,
    title: "Foto & Video",
    desc: "Serviciul nostru principal. Imagini cinematice, fotografii editate cu rafinament și cadre aeriene 4K cu drona — totul inclus.",
    featured: true,
  },
  { icon: Sparkles, title: "Oglindă Foto", desc: "Print instant, interactiv, cu semnătură pe ecran și ramă personalizată." },
  { icon: Aperture, title: "Cabină Foto", desc: "Recuzită premium, printuri rapide și amintiri pentru fiecare invitat." },
  { icon: RotateCw, title: "Platformă 360", desc: "Filmări slow-motion spectaculoase, perfecte pentru momente virale." },
  { icon: Wine, title: "Bar Mobil + Alcohol Test", desc: "Bar elegant, bartenderi profesioniști și alcohol test pentru siguranța invitaților." },
  { icon: CloudFog, title: "Fum Greu", desc: "Efect de dans pe nori — primul dans devine cinematic, fără rival." },
  { icon: Cloud, title: "Baloane de Fum", desc: "Momente foto colorate, ideale pentru sesiuni de couple shots." },
  { icon: Drum, title: "Tarabană Show", desc: "Intrare spectaculoasă cu percuție live, energie și ritm controlat." },
  { icon: GlassWater, title: "Tort de Shoturi", desc: "O alternativă elegantă și surprinzătoare pentru momentul tortului." },
  { icon: Flower2, title: "Aranjamente Florale", desc: "Compoziții florale dedicate, gândite în armonie cu locația și tema serii." },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Services() {
  return (
    <section id="servicii" className="relative py-28 lg:py-40">
      {/* subtle gold backlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, color-mix(in oklab, #D4AF37 8%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="max-w-2xl"
          >
            <div className="text-[11px] uppercase tracking-[0.4em] text-gold">
              Serviciile noastre
            </div>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
              Tot ce ai nevoie pentru un eveniment{" "}
              <span className="italic text-gold-gradient">memorabil</span>.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="max-w-md text-sm leading-relaxed text-muted-foreground lg:text-base"
          >
            Un singur partener, un singur stil, o singură viziune. Combinăm serviciile
            astfel încât totul să curgă firesc — de la pregătiri, până la ultimul cadru al
            serii.
          </motion.p>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.04, ease }}
                whileHover={{ y: -6 }}
                className={`group relative flex min-h-[260px] flex-col overflow-hidden rounded-3xl p-8 transition-all duration-500 sm:p-10 ${
                  s.featured
                    ? "border border-gold/25 bg-gradient-to-br from-card via-surface-2 to-background shadow-elegant sm:col-span-2 lg:col-span-2 lg:min-h-[320px]"
                    : "border border-border bg-card/60 hover:border-border-strong"
                }`}
              >
                {/* gradient halo */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 0%, color-mix(in oklab, #D4AF37 14%, transparent), transparent 60%)",
                  }}
                />

                {s.featured && (
                  <>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-50"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(212,175,55,0.25), transparent 70%)",
                      }}
                    />
                    <div className="absolute right-7 top-7 inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-background/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gold backdrop-blur">
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      Serviciu principal
                    </div>
                  </>
                )}

                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface text-gold transition-all duration-500 group-hover:border-gold/40 group-hover:text-gold-light">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>

                <h3
                  className={`relative mt-8 font-display font-light leading-tight tracking-[-0.02em] ${
                    s.featured ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`relative mt-4 text-sm leading-relaxed text-muted-foreground ${
                    s.featured ? "max-w-lg sm:text-base" : ""
                  }`}
                >
                  {s.desc}
                </p>

                <div className="relative mt-auto flex items-center gap-1.5 pt-8 text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
                  <span className="opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                    Detalii în curând
                  </span>
                  <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
