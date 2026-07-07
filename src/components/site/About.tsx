import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Users, Calendar } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section
      id="despre"
      className="relative overflow-hidden py-28 lg:py-40"
    >
      {/* Gold glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]"
      />


      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid items-center gap-16 lg:grid-cols-2">


          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease,
            }}
          >

            <div className="text-[11px] uppercase tracking-[0.4em] text-gold">
              Despre Flomir Events
            </div>


            <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">

              Nu oferim doar servicii.
              <br />

              <span className="italic text-gold-gradient">
                Construim experiențe.
              </span>

            </h2>


            <p className="mt-8 text-base leading-relaxed text-muted-foreground lg:text-lg">

              Flomir Events s-a născut din dorința de a aduce toate
              serviciile importante ale unui eveniment într-o singură echipă:
              foto & video, entertainment, efecte speciale și experiențe
              premium pentru invitați.

            </p>


            <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">

              Din 2018 am fost alături de sute de cupluri și familii,
              transformând nunți, botezuri și evenimente private în amintiri
              care rămân.

            </p>



            <div className="mt-10 space-y-4">

              {[
                "O singură echipă pentru toate serviciile",
                "Organizare mai simplă și comunicare rapidă",
                "Experiență reală în peste 700 de evenimente",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-foreground"
                >

                  <CheckCircle2 className="h-5 w-5 text-gold" />

                  {item}

                </div>

              ))}

            </div>

          </motion.div>




          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease,
            }}
            className="relative"
          >


            <div className="absolute inset-0 rounded-[2.5rem] bg-gold/20 blur-[80px]" />


            <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card/70 p-10 backdrop-blur-xl">


              <div className="grid gap-6">

                <InfoCard
                  icon={Calendar}
                  number="2018"
                  text="anul în care a început povestea Flomir"
                />


                <InfoCard
                  icon={Users}
                  number="700+"
                  text="evenimente realizate alături de clienții noștri"
                />


                <InfoCard
                  icon={Sparkles}
                  number="10+"
                  text="servicii premium într-o singură echipă"
                />


              </div>

            </div>


          </motion.div>

        </div>

      </div>

    </section>
  );
}



function InfoCard({
  icon: Icon,
  number,
  text,
}: {
  icon: any;
  number: string;
  text: string;
}) {
  return (

    <div className="rounded-3xl border border-border bg-black/30 p-6">

      <Icon
        className="mb-5 h-6 w-6 text-gold"
        strokeWidth={1.5}
      />

      <div className="font-display text-5xl font-light text-gold-gradient">
        {number}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {text}
      </p>

    </div>

  );
}