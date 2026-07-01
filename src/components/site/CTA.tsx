import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function CTA() {
  return (
    <section className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          className="relative overflow-hidden rounded-[2.5rem] border border-gold/25 bg-gradient-to-br from-card via-surface-2 to-background p-12 text-center shadow-elegant sm:p-20"
        >
          <div className="noise-overlay" />
          {/* Animated gold sheen */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-1 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(212,175,55,0.28), transparent 60%), radial-gradient(ellipse 40% 50% at 50% 100%, rgba(212,175,55,0.12), transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="orb pointer-events-none absolute -left-20 top-1/2 h-72 w-72 opacity-30"
            style={{ background: "radial-gradient(circle, #F1D27A, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="orb pointer-events-none absolute -right-16 bottom-0 h-80 w-80 opacity-25"
            style={{
              background: "radial-gradient(circle, #D4AF37, transparent 70%)",
              animationDelay: "-7s",
            }}
          />

          <div className="relative">
            <div className="text-[11px] uppercase tracking-[0.4em] text-gold">Hai să începem</div>
            <h2 className="mx-auto mt-6 max-w-4xl text-balance font-display text-[2rem] font-light leading-[1.08] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
              Locurile premium pentru sezonul în curs{" "}
              <span className="whitespace-nowrap italic text-gold-gradient">se ocupă rapid</span>.
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Rezervă-ți data cu liniște. Îți răspundem cu o ofertă personalizată în câteva
              ore.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="btn-sheen group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-medium text-background shadow-gold transition-all duration-500 hover:-translate-y-0.5"
              >
                Solicită ofertă
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </a>
              <a
                href="https://wa.me/40740593755"
                target="_blank"
                rel="noreferrer"
                className="glass group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-foreground transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/[0.05]"
              >
                <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
