import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    n: "01",
    title: "Ne cunoaștem",
    desc:
      "Discutăm despre evenimentul tău, locație, numărul de invitați și serviciile de care ai nevoie.",
  },
  {
    n: "02",
    title: "Creăm pachetul ideal",
    desc:
      "Alegem împreună combinația potrivită de servicii Flomir pentru stilul și bugetul tău.",
  },
  {
    n: "03",
    title: "Pregătim fiecare detaliu",
    desc:
      "Stabilim programul, organizarea și toate momentele speciale înainte de eveniment.",
  },
  {
    n: "04",
    title: "Trăiești momentul",
    desc:
      "Echipa Flomir se ocupă de implementare, iar tu te bucuri de fiecare clipă.",
  },
];

export function Process() {
  return (
    <section id="proces" className="relative py-28 lg:py-40">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-3xl text-center"
        >

          <div className="text-[11px] uppercase tracking-[0.4em] text-gold">
            Cum lucrăm
          </div>


          <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-[-0.025em] sm:text-5xl lg:text-6xl">

            Simplu, organizat,
            {" "}
            <span className="italic text-gold-gradient">
              fără stres
            </span>.

          </h2>


          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">

            De la prima discuție până la ultimul moment al evenimentului,
            ai o echipă care se ocupă de experiența completă.

          </p>

        </motion.div>



        <ol className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((s, i) => (

            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease,
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[2rem] border border-border bg-card/60 p-9 transition-all duration-500 hover:border-gold/30"
            >


              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at top, rgba(212,175,55,0.14), transparent 60%)",
                }}
              />


              <div className="relative font-display text-6xl font-light text-gold-gradient">
                {s.n}
              </div>


              <div className="relative mt-6 h-px w-12 bg-gold/40" />


              <h3 className="relative mt-8 font-display text-2xl font-light">
                {s.title}
              </h3>


              <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>


            </motion.li>

          ))}

        </ol>

      </div>

    </section>
  );
}