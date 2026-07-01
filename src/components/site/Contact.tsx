import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram, Facebook, Send, Check, ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-surface py-28 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% 0%, color-mix(in oklab, #D4AF37 16%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="orb pointer-events-none absolute right-0 top-1/3 h-[420px] w-[420px] opacity-20"
        style={{ background: "radial-gradient(circle, #D4AF37, transparent 70%)" }}
      />
      <div className="noise-overlay" />

      <div className="relative mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="text-[11px] uppercase tracking-[0.4em] text-gold">Contact</div>
          <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
            Hai să construim împreună{" "}
            <span className="italic text-gold-gradient">povestea ta</span>.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Spune-ne câteva detalii despre evenimentul tău și revenim cu o ofertă personalizată
            în cel mai scurt timp. Pentru un răspuns rapid, ne poți scrie direct pe WhatsApp.
          </p>

          <div className="mt-12 flex flex-col gap-4">
            <ContactCard
              href="tel:0740593755"
              icon={<Phone className="h-5 w-5" strokeWidth={1.5} />}
              label="Telefon"
              value="0740 593 755"
              cta="Sună acum"
            />
            <ContactCard
              href="https://wa.me/40740593755"
              external
              icon={<MessageCircle className="h-5 w-5" strokeWidth={1.5} />}
              label="WhatsApp"
              value="Răspundem în câteva minute"
              cta="Scrie-ne"
            />

            <div className="grid grid-cols-2 gap-4">
              <SocialCard
                href="https://instagram.com/flomir.events"
                icon={<Instagram className="h-5 w-5" strokeWidth={1.5} />}
                label="@flomir.events"
              />
              <SocialCard
                href="https://facebook.com/flomirevents"
                icon={<Facebook className="h-5 w-5" strokeWidth={1.5} />}
                label="Flomir Events"
              />
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const msg = `Bună! Sunt ${data.get("name")}. ${data.get("message")} (Eveniment: ${data.get("event")}, Data: ${data.get("date")})`;
            window.open(
              `https://wa.me/40740593755?text=${encodeURIComponent(msg)}`,
              "_blank",
            );
            setSent(true);
          }}
          className="glass-strong relative rounded-[2rem] p-8 shadow-elegant lg:p-12"
        >
          <div className="absolute -inset-2 -z-10 rounded-[2.5rem] bg-gold-gradient opacity-10 blur-3xl" />
          <h3 className="font-display text-3xl font-light tracking-tight">Solicită ofertă</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Toate câmpurile sunt opționale, dar ne ajută să-ți răspundem mai rapid.
          </p>

          <div className="mt-8 grid gap-5">
            <Field label="Nume" name="name" placeholder="Numele tău" />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Telefon" name="phone" placeholder="07xx xxx xxx" />
              <Field label="Data evenimentului" name="date" type="date" />
            </div>
            <Field label="Tip eveniment" name="event" placeholder="Nuntă, botez, corporate..." />
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Mesaj
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Spune-ne câteva detalii despre evenimentul tău..."
                className="mt-2.5 w-full rounded-2xl border border-border bg-surface/60 px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/50 focus:border-gold/40 focus:bg-surface focus:ring-0"
              />
            </div>

            <button
              type="submit"
              className="btn-sheen group mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-4 text-sm font-medium text-background shadow-gold transition-all duration-500 hover:-translate-y-0.5"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Trimis — îți răspundem rapid
                </>
              ) : (
                <>
                  Trimite cererea{" "}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-muted-foreground/80">
              Apăsând „Trimite" deschidem o conversație WhatsApp cu detaliile tale.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function ContactCard({
  href,
  external,
  icon,
  label,
  value,
  cta,
}: {
  href: string;
  external?: boolean;
  icon: React.ReactNode;
  label: string;
  value: string;
  cta: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/30 hover:bg-card"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 0% 50%, color-mix(in oklab, #D4AF37 14%, transparent), transparent 60%)",
        }}
      />
      <div className="relative flex items-center gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface text-gold transition-colors group-hover:border-gold/30">
          {icon}
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
          <div className="mt-1 font-display text-lg font-light tracking-tight">{value}</div>
        </div>
      </div>
      <span className="relative flex items-center gap-1 text-[10px] uppercase tracking-[0.25em] text-gold">
        {cta} <ArrowUpRight className="h-3 w-3 transition-transform group-hover:rotate-45" />
      </span>
    </a>
  );
}

function SocialCard({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/30 hover:bg-card"
    >
      <span className="text-gold transition-transform group-hover:scale-110">{icon}</span>
      <span className="text-sm">{label}</span>
    </a>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2.5 w-full rounded-2xl border border-border bg-surface/60 px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/50 focus:border-gold/40 focus:bg-surface focus:ring-0"
      />
    </div>
  );
}
