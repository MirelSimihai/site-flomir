import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Star } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
      ease,
    },
  },
};


const stagger = {

  hidden: {},

  show: {

    transition: {

      staggerChildren: 0.18,

    },

  },

};



export function Hero() {

  return (

    <section className="relative isolate overflow-hidden bg-radial-spotlight pt-36 pb-28 lg:pt-52 lg:pb-40">



      {/* GOLD ORBS */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >

        <div
          className="orb absolute left-[12%] top-[14%] h-[360px] w-[360px] opacity-40"

          style={{
            background:
              "radial-gradient(circle,#C6A45D 0%,transparent 70%)",
          }}
        />

        <div
          className="orb absolute right-[8%] top-[35%] h-[420px] w-[420px] opacity-30"

          style={{
            background:
              "radial-gradient(circle,#EAD8A8 0%,transparent 70%)",
          }}
        />


      </div>





      <div className="mx-auto max-w-7xl px-6 lg:px-10">



        <motion.div

          variants={stagger}

          initial="hidden"

          animate="show"

          className="mx-auto max-w-5xl text-center"

        >




          {/* BADGE */}

          <motion.div

            variants={fadeUp}

            className="
            glass
            mx-auto

            inline-flex
            items-center
            gap-2.5

            rounded-full

            px-4
            py-1.5

            text-[11px]

            uppercase

            tracking-[0.28em]

            text-muted-foreground
            "

          >

            <span className="h-1.5 w-1.5 rounded-full bg-gold"/>

            Din 2022 • Peste 300 de evenimente realizate


          </motion.div>






          {/* TITLE */}

          <motion.h1

            variants={fadeUp}

            className="
            mt-10

            font-display

            text-[2.75rem]

            font-light

            leading-[1.02]

            tracking-[-0.03em]

            sm:text-6xl
            md:text-7xl
            lg:text-[5.5rem]
            "

          >

            Tot ce ai nevoie pentru <br/>

            <span className="text-gold-gradient">

              un eveniment memorabil

            </span>

            <br/>

            într-o singură echipă.


          </motion.h1>






          {/* TEXT */}

          <motion.p

            variants={fadeUp}

            className="
            mx-auto

            mt-8

            max-w-3xl

            text-base

            leading-relaxed

            text-muted-foreground

            sm:text-lg
            lg:text-xl
            "

          >

            Foto & Video, Cabină Foto, Platformă 360, Oglindă Foto,
            Bar Mobil, Fum Greu, Dronă și multe alte servicii premium
            pentru nunți și botezuri.


          </motion.p>







          {/* BUTTONS */}

          <motion.div

            variants={fadeUp}

            className="
            mt-12

            flex
            flex-col

            items-center
            justify-center

            gap-3

            sm:flex-row
            "

          >


            <a

              href="#contact"

              className="
              btn-sheen

              inline-flex
              items-center
              gap-2

              rounded-full

              bg-gold-gradient

              px-8
              py-4

              text-sm
              font-medium

              text-[#181512]

              shadow-gold
              "

            >

              Solicită ofertă personalizată

              <ArrowUpRight className="h-4 w-4"/>


            </a>





            <a

              href="https://wa.me/40740593755"

              target="_blank"

              rel="noreferrer"

              className="
              glass

              inline-flex
              items-center
              gap-2

              rounded-full

              px-8
              py-4

              text-sm
              font-medium
              "

            >

              <MessageCircle className="h-4 w-4 text-gold"/>

              WhatsApp


            </a>



          </motion.div>







          {/* REVIEWS */}

          <motion.div

            variants={fadeUp}

            className="
            mt-10

            flex

            items-center
            justify-center

            gap-3

            text-xs

            text-muted-foreground
            "

          >


            <div className="flex">

              {[0,1,2,3,4].map(i=>(

                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-gold text-gold"
                />

              ))}

            </div>


            Recomandați de zeci de cupluri


          </motion.div>




        </motion.div>









        {/* PHONE */}

        <motion.div

          initial={{
            opacity:0,
            y:80,
            scale:.94,
          }}

          animate={{
            opacity:1,
            y:0,
            scale:1,
          }}

          transition={{
            duration:1.2,
            delay:.9,
            ease,
          }}

          whileHover={{
            scale:1.02,
          }}

          className="
          relative

          mx-auto

          mt-24

          flex

          justify-center
          "

        >



          <div className="absolute h-[500px] w-[500px] rounded-full bg-gold/20 blur-[140px]"/>



          <div className="relative rounded-[3rem] border border-gold/30 bg-black p-3 shadow-[0_0_90px_rgba(198,164,93,.25)]">



            <div className="absolute left-1/2 top-5 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black"/>



            <div className="relative overflow-hidden rounded-[2.5rem]">



              <video

                autoPlay

                muted

                loop

                playsInline

                preload="metadata"

                className="h-[650px] w-[365px] object-cover"

              >

                <source src="/videos/hero.mp4" type="video/mp4"/>


              </video>



              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-[#C6A45D]/10"/>



            </div>


          </div>



        </motion.div>








        {/* STATS */}

        <div className="mt-16 grid grid-cols-2 gap-10 sm:grid-cols-4">


          {[
            ["300+","Evenimente realizate"],
            ["2022","Din 2022"],
            ["4.9★","Rating Google"],
            ["10+","Servicii premium"],
          ].map(([k,v])=>(


            <motion.div

              key={k}

              initial={{opacity:0,y:20}}

              whileInView={{opacity:1,y:0}}

              viewport={{once:true}}

              className="text-center"

            >


              <div className="font-display text-4xl text-gold-gradient sm:text-5xl">

                {k}

              </div>


              <div className="mt-2 text-xs text-muted-foreground">

                {v}

              </div>


            </motion.div>


          ))}


        </div>



      </div>



    </section>

  );

}