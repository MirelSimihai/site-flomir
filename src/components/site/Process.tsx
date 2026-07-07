import { motion } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ClipboardCheck,
  Heart,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;


const steps = [
  {
    n: "01",
    icon: MessageCircle,
    title: "Ne cunoaștem",
    desc:
      "Discutăm despre evenimentul tău, locație, numărul de invitați și serviciile pe care ți le dorești.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "Creăm pachetul ideal",
    desc:
      "Alegem împreună combinația perfectă de servicii Flomir potrivită stilului evenimentului tău.",
  },
  {
    n: "03",
    icon: ClipboardCheck,
    title: "Pregătim detaliile",
    desc:
      "Organizăm programul, serviciile alese și fiecare moment important înainte de eveniment.",
  },
  {
    n: "04",
    icon: Heart,
    title: "Te bucuri de moment",
    desc:
      "În ziua evenimentului echipa Flomir se ocupă de tot, iar tu trăiești fiecare clipă.",
  },
];




export function Process() {

  return (

    <section
      id="proces"
      className="relative overflow-hidden py-28 lg:py-40"
    >



      {/* glow */}
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
        bg-gold/15
        blur-[150px]
        "
      />



      <div className="mx-auto max-w-7xl px-6 lg:px-10">


        {/* TITLE */}
        <motion.div

          initial={{ opacity:0, y:20 }}

          whileInView={{ opacity:1, y:0 }}

          viewport={{ once:true }}

          transition={{ duration:.8, ease }}

          className="mx-auto max-w-3xl text-center"

        >


          <div
            className="
            text-[11px]
            uppercase
            tracking-[0.4em]
            text-gold
            "
          >

            Cum lucrăm

          </div>




          <h2
            className="
            mt-5
            font-display
            text-4xl
            font-light
            leading-tight
            tracking-[-0.03em]
            sm:text-5xl
            lg:text-6xl
            "
          >

            Simplu, organizat,

            {" "}

            <span className="italic text-gold-gradient">

              fără stres.

            </span>


          </h2>




          <p
            className="
            mx-auto
            mt-6
            max-w-xl
            text-base
            leading-relaxed
            text-muted-foreground
            "
          >

            De la prima discuție până la ziua evenimentului,
            ai lângă tine o echipă care pregătește fiecare detaliu.

          </p>


        </motion.div>






        {/* CARDS */}

        <div
          className="
          mt-20
          grid
          gap-7
          sm:grid-cols-2
          lg:grid-cols-4
          "
        >


          {steps.map((s,i)=>{

            const Icon = s.icon;


            return (


              <motion.div

                key={s.n}

                initial={{opacity:0,y:30}}

                whileInView={{opacity:1,y:0}}

                viewport={{once:true}}

                transition={{
                  duration:.7,
                  delay:i*.08,
                  ease,
                }}

                whileHover={{y:-8}}


                className="
                group

                rounded-[2rem]

                border
                border-gold/20

                bg-[#F8F4EC]

                p-8

                shadow-[0_20px_50px_rgba(24,21,18,.08)]

                transition-all
                duration-500

                hover:border-gold/50
                hover:shadow-[0_25px_70px_rgba(198,164,93,.25)]
                "

              >



                {/* ICON */}

                <div
                  className="
                  flex
                  h-16
                  w-16

                  items-center
                  justify-center

                  rounded-full

                  bg-[#EFE4D2]

                  text-[#9A7832]

                  shadow-[0_15px_35px_rgba(198,164,93,.2)]

                  transition
                  duration-500

                  group-hover:scale-110
                  group-hover:bg-gold
                  group-hover:text-[#181512]
                  "
                >

                  <Icon size={25} strokeWidth={1.6}/>

                </div>





                <div
                  className="
                  mt-8

                  text-[11px]

                  uppercase

                  tracking-[0.35em]

                  text-gold
                  "
                >

                  Pasul {s.n}

                </div>




                <h3
                  className="
                  mt-4

                  font-display

                  text-3xl

                  leading-tight

                  text-[#181512]
                  "
                >

                  {s.title}

                </h3>





                <p
                  className="
                  mt-5

                  text-sm

                  leading-relaxed

                  text-[#7C6F61]
                  "
                >

                  {s.desc}

                </p>



              </motion.div>


            );

          })}


        </div>


      </div>


    </section>

  );

}