import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const images = [
  ...Array.from({ length: 12 }, (_, i) => ({
    src: `/images/portfolio/nunti/${i + 1}.webp`,
    category: "Nunti",
  })),

  ...Array.from({ length: 12 }, (_, i) => ({
    src: `/images/portfolio/servicii/${i + 1}.webp`,
    category: "Servicii",
  })),
];

const filters = ["Toate", "Nunti", "Servicii"];


export function Portfolio() {
  const [active, setActive] = useState("Toate");
  const [selected, setSelected] = useState<string | null>(null);
  const [visible, setVisible] = useState(6);


  const filtered =
    active === "Toate"
      ? images
      : images.filter((img) => img.category === active);


  const visibleImages = filtered.slice(0, visible);


  return (
    <section id="portfolio" className="relative py-28 lg:py-40">


      {/* GOLD GLOW */}
      <div className="absolute left-1/2 top-20 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />



      <div className="mx-auto max-w-7xl px-6 lg:px-10">


        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-3xl text-center"
        >


          <div className="text-[11px] uppercase tracking-[0.4em] text-gold">
            Portofoliu
          </div>


          <h2 className="mt-5 font-display text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">

            Evenimente reale,{" "}

            <span className="italic text-gold-gradient">
              emoții păstrate în timp
            </span>.

          </h2>


          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">

            O parte dintre momentele speciale și serviciile realizate de
            echipa Flomir Events.

          </p>


        </motion.div>




        {/* FILTERS */}
        <div className="mt-12 flex justify-center gap-3">


          {filters.map((f) => (

            <button
              key={f}

              onClick={() => {
                setActive(f);
                setVisible(6);
              }}

              className={`rounded-full border px-6 py-2 text-sm transition ${
                active === f
                  ? "border-gold bg-gold text-black"
                  : "border-border text-muted-foreground hover:border-gold hover:text-gold"
              }`}
            >

              {f}

            </button>

          ))}


        </div>





        {/* GRID */}
        <motion.div
          layout
          className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3"
        >

          <AnimatePresence>


            {visibleImages.map((img, i) => (

              <motion.div

                key={img.src}

                layout

                initial={{ opacity: 0, y: 30 }}

                animate={{ opacity: 1, y: 0 }}

                exit={{ opacity: 0 }}

                transition={{
                  duration: 0.6,
                  delay: i * 0.03,
                  ease,
                }}

                className="group mb-5 break-inside-avoid overflow-hidden rounded-[2rem] border border-white/10 bg-card shadow-xl"
              >


                <button
                  onClick={() => setSelected(img.src)}
                  className="relative block w-full overflow-hidden"
                >


                  <img

                    src={img.src}

                    loading="lazy"

                    alt="Flomir Events Portfolio"

                    className="w-full object-cover transition duration-[1200ms] group-hover:scale-105"

                  />



                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 transition duration-700 group-hover:opacity-20" />


                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-transparent transition duration-500 group-hover:border-gold/40" />


                </button>


              </motion.div>

            ))}


          </AnimatePresence>


        </motion.div>




        {/* LOAD MORE */}
        {visible < filtered.length && (

          <div className="mt-12 flex justify-center">

            <button

              onClick={() =>
                setVisible((prev) => prev + 6)
              }

              className="rounded-full border border-gold/30 px-8 py-4 text-sm text-gold transition hover:bg-gold hover:text-black"

            >

              Vezi mai multe momente

            </button>

          </div>

        )}






        {/* INSTAGRAM */}
        <motion.div

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.8, ease }}

          className="mt-16 text-center"

        >


          <a

            href="https://www.instagram.com/flomir.events"

            target="_blank"

            rel="noreferrer"

            className="inline-flex rounded-full border border-gold/30 px-8 py-4 text-sm text-gold transition hover:bg-gold hover:text-black"

          >

            Vezi mai multe pe Instagram →

          </a>


        </motion.div>


      </div>







      {/* LIGHTBOX */}
      <AnimatePresence>

        {selected && (

          <motion.div

            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6 backdrop-blur"

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

          >


            <button

              onClick={() => setSelected(null)}

              className="absolute right-6 top-6 text-white transition hover:text-gold"

            >

              <X size={32} />

            </button>



            <motion.img

              src={selected}

              initial={{ scale: 0.9, opacity: 0 }}

              animate={{ scale: 1, opacity: 1 }}

              exit={{ scale: 0.9, opacity: 0 }}

              transition={{ duration: 0.4 }}

              className="max-h-[90vh] max-w-[90vw] rounded-3xl object-contain"

            />


          </motion.div>

        )}

      </AnimatePresence>


    </section>
  );
}