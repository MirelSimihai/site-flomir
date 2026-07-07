import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
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
  image?: string;
};

const services: Service[] = [
  {
    icon: Camera,
    title: "Foto & Video",
    desc:
      "Păstrăm emoțiile zilei tale prin fotografii naturale și filmări atent realizate, pentru amintiri la care vei reveni cu drag.",
    featured: true,
  },
  {
    icon: Sparkles,
    title: "Oglindă Foto",
    desc:
      "Distracție pentru invitați și amintiri printate pe loc.",
    image: "/images/services/oglinda-foto.webp",
  },
  {
    icon: Aperture,
    title: "Cabină Foto",
    desc:
      "Un colț plin de zâmbete unde invitații creează fotografii spontane și pleacă acasă cu o amintire.",
    image: "/images/services/cabina-foto.webp",
  },
  {
    icon: RotateCw,
    title: "Platformă 360",
    desc:
      "Filmări slow-motion spectaculoase, perfecte pentru momente virale.",
    image: "/images/services/platforma360.webp",
  },
  {
    icon: Wine,
    title: "Bar Mobil + Alcohol Test",
    desc:
      "Cocktailuri pregătite pe loc, atmosferă elegantă și o experiență completă pentru invitații tăi.",
    image: "/images/services/bar-mobil.webp",
  },
  {
    icon: CloudFog,
    title: "Fum Greu",
    desc:
      "Creează un moment de poveste la primul dans.",
    image: "/images/services/fum-greu.webp",
  },
  {
    icon: Cloud,
    title: "Baloane de Fum",
    desc:
      "Adaugă culoare și emoție fotografiilor tale cu efecte baloanele noastre de fum.",
    image: "/images/services/baloane-fum.webp",
  },
  {
    icon: Drum,
    title: "Tarabană Show",
    desc:
      "Energie, ritm și atmosferă live pentru momentele în care vrei ca invitații să simtă petrecerea.",
    image: "/images/services/tarabana.webp",
  },
  {
    icon: GlassWater,
    title: "Tort de Shoturi",
    desc:
      "Un moment surpriză pentru invitați, cu efect vizual spectaculos și distracție garantată.",
    image: "/images/services/tort-shoturi.webp",
  },
  {
    icon: Flower2,
    title: "Aranjamente Florale",
    desc:
      "Transformăm spațiile simple în decoruri elegante, create cu atenție la fiecare detaliu al evenimentului tău.",
    image: "/images/services/florale.webp",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const fotoVideoImages = [
  "/images/services/foto-video/1.webp",
  "/images/services/foto-video/2.webp",
  "/images/services/foto-video/3.webp",
  "/images/services/foto-video/4.webp",
  "/images/services/foto-video/5.webp",
];
export function Services() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) =>
        prev === fotoVideoImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="servicii" className="relative py-28 lg:py-40">
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
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="max-w-2xl"
          >
            <div className="text-[11px] uppercase tracking-[0.4em] text-gold">
              Serviciile noastre
            </div>

            <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] sm:text-5xl lg:text-6xl">
              Tot ce ai nevoie pentru un eveniment{" "}
              <span className="italic text-gold-gradient">
                memorabil
              </span>.
            </h2>
          </motion.div>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:text-base">
            Un singur partener, un singur stil, o singură viziune.
            Combinăm serviciile astfel încât totul să curgă firesc.
          </p>
        </div>


        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.04,
                  ease,
                }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-[2rem] border border-border transition-all duration-500 ${
  s.featured
    ? "min-h-[430px] sm:col-span-2 lg:col-span-2"
    : "aspect-[4/5]"
}`}
              >

                {s.featured ? (
                  <>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImage}
                        src={fotoVideoImages[currentImage]}
                        alt="Foto Video Flomir Events"
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 1.2,
                        }}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="absolute right-7 top-7 rounded-full border border-gold/30 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                      • CEL MAI ALES
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={s.image}
                      alt={s.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />
                  </>
                )}


                <div className="relative z-10 flex h-full flex-col p-8 sm:p-10">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 bg-black/30 text-gold/80 backdrop-blur-md">
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="mt-auto">

                    <h3
                      className={`font-display font-light tracking-[-0.02em] ${
                        s.featured
                          ? "text-4xl lg:text-5xl"
: "text-[2rem]"
                      }`}
                    >
                      {s.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75">
                      {s.desc}
                    </p>


                    <div className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold">
                      Descoperă serviciul

                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>

                  </div>
                </div>

              </motion.article>
            );
          })}

        </div>
      </div>
    </section>
  );
}