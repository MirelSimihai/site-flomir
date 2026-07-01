import { motion } from "framer-motion";
import { Heart, Gem, Clock, ShieldCheck } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const values = [
  { icon: Heart, title: "Empatie", desc: "Înțelegem că fiecare eveniment este unic și îl tratăm ca pe propriul nostru." },
  { icon: Gem, title: "Rafinament", desc: "Detalii lucrate cu grijă, estetică atentă și prezență discretă." },
  { icon: Clock, title: "Punctualitate", desc: "Suntem la timp, pregătiți și calmi — întotdeauna." },
  { icon: ShieldCheck, title: "Încredere", desc: "Echipamente profesionale, backup pentru fiecare moment important." },
];

export function About() {
  return (
    <section id="despre" className="relative overflow-hidden bg-surface py-28 lg:py-40">
      <div className="noise-overlay" />
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gold-gradient opacity-10 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border-strong shadow-elegant">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 25%, rgba(241,210,122,0.18), transparent 55%), radial-gradient(circle at 70% 80%, rgba(212,175,55,0.12), transparent 55%), linear-gradient(180deg, #1F1F1F 0%, #0B0B0B 100%)",
              }}
            />
            <div className="noise-overlay" />
            {/* Editorial frame */}
            <div className="absolute inset-6 rounded-[1.5rem] border border-white/[0.06]" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-[10px] uppercase tracking-[0.35em] text-gold">Est. 2018</div>
              <div className="mt-2 font-display text-2xl font-light italic text-foreground">
                Flomir Events
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="glass-strong relative z-10 mx-auto mt-6 max-w-md rounded-3xl p-6 text-center shadow-soft sm:p-8 lg:absolute lg:-bottom-10 lg:-right-10 lg:mx-0 lg:mt-0 lg:max-w-sm lg:text-left"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Viziunea noastră</div>
            <p className="mt-4 font-display text-base font-light italic leading-relaxed text-foreground sm:text-lg">
              „Un eveniment reușit nu se vede — se simte. Iar misiunea noastră este să facem
              tocmai asta posibil.”
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="text-[11px] uppercase tracking-[0.4em] text-gold">Despre Flomir Events</div>
          <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
            O singură echipă pentru întreaga ta{" "}
            <span className="italic text-gold-gradient">poveste</span>.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Suntem o echipă de creativi din România, pasionați de evenimente premium. Lucrăm
            doar cu oameni care își doresc o experiență completă — nu o sumă de servicii.
            Coordonăm totul intern, astfel încât tu să te bucuri de zi, iar restul să decurgă
            firesc.
          </p>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                  whileHover={{ y: -3 }}
                  className="group rounded-3xl border border-border bg-card/60 p-6 transition-all duration-500 hover:border-gold/30 hover:bg-card"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-surface text-gold transition-colors group-hover:border-gold/30">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-light tracking-tight">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
