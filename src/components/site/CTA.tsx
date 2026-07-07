import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, CalendarCheck } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function CTA() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-40">

      {/* Background glow */}
      <div
        aria-hidden
        className="
        absolute
        left-1/2
        top-1/2
        -z-10
        h-[600px]
        w-[600px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-gold/20
        blur-[150px]
        "
      />


      <div className="mx-auto max-w-7xl px-6 lg:px-10">


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}

          className="
          relative
          overflow-hidden
          rounded-[2.5rem]
          border
          border-gold/25
          bg-card/80
          px-8
          py-16
          text-center
          shadow-elegant
          backdrop-blur-xl
          sm:px-16
          lg:py-24
          "
        >


          {/* champagne light */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(198,164,93,0.20), transparent 55%)",
            }}
          />



          <div className="relative z-10 mx-auto max-w-3xl">


            {/* ICON */}
            <div
              className="
              mx-auto
              mb-8
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-gold/30
              bg-[#F8F4EC]/80
              text-gold
              shadow-elegant
              backdrop-blur-xl
              "
            >

              <CalendarCheck
                className="
                h-6
                w-6
                drop-shadow-sm
                "
                strokeWidth={1.6}
              />

            </div>




            <div
              className="
              text-[11px]
              uppercase
              tracking-[0.4em]
              text-gold
              "
            >

              Rezervări disponibile

            </div>




            <h2
              className="
              mt-6
              font-display
              text-4xl
              font-light
              leading-tight
              tracking-[-0.03em]
              text-foreground
              sm:text-5xl
              lg:text-6xl
              "
            >

              Data evenimentului tău este{" "}

              <span className="italic text-gold-gradient">
                disponibilă?
              </span>

            </h2>




            <p
              className="
              mx-auto
              mt-8
              max-w-2xl
              text-base
              leading-relaxed
              text-muted-foreground
              lg:text-lg
              "
            >

              Spune-ne data și locația evenimentului, iar echipa Flomir
              îți pregătește o ofertă personalizată cu serviciile potrivite.

            </p>





            {/* BUTTONS */}

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">


              <a
                href="#contact"

                className="
                btn-sheen
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-gold-gradient
                px-9
                py-4
                text-sm
                font-medium
                text-[#181512]
                shadow-gold
                transition-all
                duration-500
                hover:-translate-y-1
                "
              >

                Solicită ofertă

                <ArrowUpRight className="h-4 w-4" />

              </a>




              <a

                href="https://wa.me/40740593755"

                target="_blank"

                rel="noreferrer"

                className="
                glass
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                px-9
                py-4
                text-sm
                font-medium
                text-foreground
                transition-all
                duration-500
                hover:-translate-y-1
                "
              >

                <MessageCircle
                  className="h-4 w-4 text-gold"
                />


                WhatsApp direct

              </a>


            </div>





            <p
              className="
              mt-8
              text-xs
              uppercase
              tracking-[0.25em]
              text-muted-foreground
              "
            >

              Nunți • Botezuri • Evenimente private

            </p>



          </div>


        </motion.div>


      </div>


    </section>
  );
}