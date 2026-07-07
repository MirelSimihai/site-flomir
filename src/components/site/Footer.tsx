import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const services = [
  "Foto & Video",
  "Oglindă Foto",
  "Cabină Foto",
  "Platformă 360",
  "Bar Mobil",
  "Fum Greu",
  "Tarabană Show",
  "Aranjamente Florale",
];

const links = [
  { name: "Despre noi", href: "#despre" },
  { name: "Servicii", href: "#servicii" },
  { name: "Proces", href: "#proces" },
  { name: "Contact", href: "#contact" },
];


export function Footer() {


  return (

    <footer
      className="
      relative
      overflow-hidden

      border-t
      border-gold/20

      bg-[#F8F4EC]

      py-16
      "
    >


      {/* luxury glow */}
      <div
        aria-hidden
        className="
        absolute
        left-1/2
        top-0
        -z-10

        h-[450px]
        w-[450px]

        -translate-x-1/2

        rounded-full

        bg-gold/20

        blur-[130px]
        "
      />



      <div className="mx-auto max-w-7xl px-6 lg:px-10">



        <div className="grid gap-12 lg:grid-cols-4">



          {/* BRAND */}

          <div>

            <h3
              className="
              font-display
              text-3xl
              font-light
              tracking-tight
              text-[#181512]
              "
            >

              Flomir{" "}

              <span className="text-gold-gradient">

                Events

              </span>


            </h3>



            <p
              className="
              mt-5
              max-w-sm

              text-sm
              leading-relaxed

              text-[#7C6F61]
              "
            >

              Servicii premium pentru nunți, botezuri și evenimente private.
              O singură echipă, o experiență completă.


            </p>






            {/* SOCIAL */}

            <div className="mt-8 flex gap-4">



              <a

                href="https://www.instagram.com/flomir.events"

                target="_blank"

                rel="noreferrer"


                className="
                flex
                h-11
                w-11

                items-center
                justify-center

                rounded-full

                border
                border-gold/30

                bg-[#EFE4D2]

                text-[#9A7832]

                shadow-[0_10px_25px_rgba(198,164,93,.18)]

                transition-all

                hover:scale-110
                hover:bg-gold
                hover:text-[#181512]
                "

              >


                <Instagram size={18}/>


              </a>






              <a

                href="https://www.facebook.com/profile.php?id=61559012592458"

                target="_blank"

                rel="noreferrer"


                className="
                flex
                h-11
                w-11

                items-center
                justify-center

                rounded-full

                border
                border-gold/30

                bg-[#EFE4D2]

                text-[#9A7832]

                shadow-[0_10px_25px_rgba(198,164,93,.18)]

                transition-all

                hover:scale-110
                hover:bg-gold
                hover:text-[#181512]
                "

              >


                <Facebook size={18}/>


              </a>



            </div>


          </div>







          {/* SERVICES */}

          <div>


            <h4 className="text-sm uppercase tracking-[0.3em] text-gold">

              Servicii

            </h4>



            <ul className="mt-6 space-y-3">


              {services.map((s)=> (

                <li

                  key={s}

                  className="
                  text-sm
                  text-[#7C6F61]
                  "

                >

                  {s}

                </li>


              ))}


            </ul>


          </div>









          {/* LINKS */}

          <div>


            <h4 className="text-sm uppercase tracking-[0.3em] text-gold">

              Navigare

            </h4>



            <ul className="mt-6 space-y-3">


              {links.map((l)=>(


                <li key={l.name}>


                  <a

                    href={l.href}

                    className="
                    text-sm
                    text-[#7C6F61]

                    transition

                    hover:text-gold
                    "

                  >

                    {l.name}


                  </a>


                </li>


              ))}


            </ul>


          </div>








          {/* CONTACT */}

          <div>


            <h4 className="text-sm uppercase tracking-[0.3em] text-gold">

              Contact

            </h4>



            <div className="mt-6 space-y-4 text-sm text-[#7C6F61]">


              <a

                href="tel:0740593755"

                className="
                flex
                items-center
                gap-3

                transition

                hover:text-gold
                "

              >

                <Phone size={16} className="text-gold"/>

                0740 593 755


              </a>




              <div className="flex items-center gap-3">

                <Mail size={16} className="text-gold"/>

                flomirevents@gmail.com


              </div>




              <div className="flex items-center gap-3">


                <MapPin size={16} className="text-gold"/>


                Iași • România


              </div>



            </div>


          </div>



        </div>








        {/* BOTTOM */}

        <div
          className="
          mt-16

          border-t
          border-gold/20

          pt-8

          text-center

          text-xs

          text-[#7C6F61]
          "
        >

          © 2026 Flomir Events. Toate drepturile rezervate.


        </div>



      </div>


    </footer>


  );


}