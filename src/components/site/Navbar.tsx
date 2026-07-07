import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "Servicii", href: "#servicii" },
  { label: "Portofoliu", href: "#portfolio" },
  { label: "Despre", href: "#despre" },
  { label: "Proces", href: "#proces" },
  { label: "Contact", href: "#contact" },
];

const ease = [0.22, 1, 0.36, 1] as const;


export function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);


  useEffect(() => {

    const onScroll = () =>
      setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      { passive:true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );

  }, []);



  return (

    <motion.header

      initial={{ y:-24, opacity:0 }}

      animate={{ y:0, opacity:1 }}

      transition={{
        duration:.8,
        ease
      }}

      className={`
      fixed
      inset-x-0
      top-0
      z-50
      transition-all
      duration-500

      ${scrolled ? "pt-3" : "pt-5"}
      `}
    >


      <div className="mx-auto max-w-7xl px-4 lg:px-8">



        {/* NAVBAR BOX */}

        <div

          className="
          flex
          items-center
          justify-between
          gap-4

          rounded-full

          border
          border-gold/25

          bg-[#F8F4EC]/85

          px-5
          py-3

          shadow-[0_20px_60px_rgba(24,21,18,.14)]

          backdrop-blur-2xl

          transition-all
          duration-500
          "
        >




          {/* LOGO */}

          <Link

            to="/"

            className="
            flex
            items-center
            gap-3
            "

            aria-label="Flomir Events"
          >


            <Logo className="h-9 w-9" />



            <div className="leading-tight">


              <div
                className="
                font-display
                text-base
                font-medium
                tracking-tight
                text-[#181512]
                "
              >

                Flomir{" "}

                <span className="italic text-gold-gradient">

                  Events

                </span>

              </div>



              <div
                className="
                hidden
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-[#7C6F61]
                sm:block
                "
              >

                Premium experiences

              </div>


            </div>


          </Link>





          {/* LINKS */}

          <nav className="hidden items-center gap-1 md:flex">


            {NAV.map((n)=>(

              <a

                key={n.href}

                href={n.href}

                className="
                rounded-full

                px-4
                py-2

                text-sm
                font-medium

                text-[#7C6F61]

                transition

                hover:bg-[#EFE4D2]

                hover:text-[#181512]
                "

              >

                {n.label}

              </a>

            ))}


          </nav>






          {/* RIGHT */}

          <div className="hidden items-center gap-3 md:flex">



            <a

              href="tel:0740593755"

              className="
              flex
              items-center
              gap-2

              rounded-full

              px-3
              py-2

              text-sm

              text-[#7C6F61]

              transition

              hover:text-[#181512]
              "
            >


              <Phone className="h-3.5 w-3.5"/>

              0740 593 755


            </a>





            <a

              href="#contact"

              className="
              btn-sheen

              inline-flex
              items-center
              gap-2

              rounded-full

              bg-gold-gradient

              px-6
              py-3

              text-sm
              font-medium

              text-[#181512]

              shadow-gold

              transition

              hover:-translate-y-0.5
              "
            >


              Solicită ofertă

              <ArrowUpRight className="h-4 w-4"/>


            </a>


          </div>






          {/* MOBILE */}

          <button

            onClick={()=>setOpen(v=>!v)}

            className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full

            border
            border-gold/20

            bg-[#EFE4D2]

            text-[#181512]

            md:hidden
            "

          >

            {open ? <X/> : <Menu/>}

          </button>


        </div>



      </div>






      {/* MOBILE MENU */}

      <AnimatePresence>

        {open && (


          <motion.div

            initial={{opacity:0,y:-10}}

            animate={{opacity:1,y:0}}

            exit={{opacity:0,y:-10}}

            className="mx-4 mt-3 md:hidden"

          >


            <div

              className="
              rounded-3xl

              border
              border-gold/20

              bg-[#F8F4EC]

              px-6
              py-6

              shadow-elegant
              "

            >


              <nav className="flex flex-col">


                {NAV.map((n)=>(

                  <a

                    key={n.href}

                    href={n.href}

                    onClick={()=>setOpen(false)}

                    className="
                    border-b
                    border-gold/15

                    py-4

                    font-display

                    text-2xl

                    text-[#181512]

                    last:border-0
                    "

                  >

                    {n.label}

                  </a>

                ))}




                <a

                  href="#contact"

                  className="
                  mt-5

                  rounded-full

                  bg-gold-gradient

                  px-5
                  py-3

                  text-center
                  text-sm
                  font-medium

                  text-[#181512]
                  "

                >

                  Solicită ofertă

                </a>


              </nav>


            </div>


          </motion.div>


        )}


      </AnimatePresence>


    </motion.header>

  );
}