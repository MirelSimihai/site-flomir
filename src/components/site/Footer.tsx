import { Instagram, Facebook, Phone, MessageCircle, ArrowUpRight, Clock } from "lucide-react";
import { Logo } from "./Logo";

const SERVICES = [
  "Foto & Video",
  "Oglindă Foto",
  "Cabină Foto",
  "Platformă 360",
  "Bar Mobil + Alcohol Test",
  "Fum Greu",
  "Baloane de Fum",
  "Tarabană Show",
  "Tort de Shoturi",
  "Aranjamente Florale",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, #D4AF37 50%, transparent), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #D4AF37, transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-24">
        {/* Col 1 — Brand */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <Logo className="h-11 w-11" />
            <div className="min-w-0">
              <div className="font-display text-xl font-light tracking-tight">
                Flomir <span className="italic text-gold-gradient">Events</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Premium experiences
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Transformăm fiecare eveniment într-o experiență memorabilă. De la nunți și
            botezuri, la evenimente corporate — totul într-un singur loc.
          </p>
        </div>

        {/* Col 2 — Services */}
        <div className="lg:col-span-3">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold">Servicii</h4>
          <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
            {SERVICES.map((s) => (
              <li key={s} className="transition-colors hover:text-foreground">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact */}
        <div className="lg:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold">Contact</h4>
          <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
            <li>
              <a
                href="tel:0740593755"
                className="flex items-center gap-3 transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} /> 0740 593 755
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/40740593755"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/flomirevents"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-foreground"
              >
                <Facebook className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} /> Flomir Events
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/flomir.events"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-foreground"
              >
                <Instagram className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} /> @flomir.events
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4 — CTA */}
        <div className="lg:col-span-3">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold">Rezervă data</h4>
          <a
            href="#contact"
            className="btn-sheen group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3.5 text-sm font-medium text-background shadow-gold transition-all duration-500 hover:-translate-y-0.5"
          >
            Solicită ofertă
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-card/60 p-4">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Program de răspuns
              </div>
              <p className="mt-1 text-sm text-foreground">
                Răspundem în cel mai scurt timp.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-7 text-xs text-muted-foreground lg:flex-row lg:px-10">
          <div>© {new Date().getFullYear()} Flomir Events. Toate drepturile rezervate.</div>
          <div className="text-[10px] uppercase tracking-[0.3em]">Made with care in Romania</div>
        </div>
      </div>
    </footer>
  );
}
