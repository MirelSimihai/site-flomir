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
    <footer className="relative overflow-hidden border-t border-border bg-background py-16">

      {/* glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />


      <div className="mx-auto max-w-7xl px-6 lg:px-10">


        <div className="grid gap-12 lg:grid-cols-4">


          {/* Brand */}
          <div className="lg:col-span-1">

            <h3 className="font-display text-3xl font-light tracking-tight">
              Flomir
              {" "}
              <span className="text-gold-gradient">
                Events
              </span>
            </h3>


            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">

              Servicii premium pentru nunți, botezuri și evenimente private.
              O singură echipă, o experiență completă.

            </p>



            <div className="mt-8 flex gap-4">

              <a
                href="https://www.instagram.com/flomir.events"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold transition hover:bg-gold hover:text-black"
              >

                <Instagram size={18} />

              </a>


              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold transition hover:bg-gold hover:text-black"
              >

                <Facebook size={18} />

              </a>

            </div>

          </div>




          {/* Services */}
          <div>

            <h4 className="text-sm uppercase tracking-[0.3em] text-gold">
              Servicii
            </h4>


            <ul className="mt-6 space-y-3">

              {services.map((s) => (

                <li
                  key={s}
                  className="text-sm text-muted-foreground"
                >

                  {s}

                </li>

              ))}

            </ul>

          </div>





          {/* Links */}
          <div>

            <h4 className="text-sm uppercase tracking-[0.3em] text-gold">
              Navigare
            </h4>


            <ul className="mt-6 space-y-3">

              {links.map((l) => (

                <li key={l.name}>

                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition hover:text-gold"
                  >

                    {l.name}

                  </a>

                </li>

              ))}

            </ul>

          </div>





          {/* Contact */}
          <div>

            <h4 className="text-sm uppercase tracking-[0.3em] text-gold">
              Contact
            </h4>


            <div className="mt-6 space-y-4 text-sm text-muted-foreground">


              <a
                href="tel:0740593755"
                className="flex items-center gap-3 transition hover:text-gold"
              >

                <Phone size={16} className="text-gold" />

                0740 593 755

              </a>


              <div className="flex items-center gap-3">

                <Mail size={16} className="text-gold" />

                contact@flomirevents.ro

              </div>


              <div className="flex items-center gap-3">

                <MapPin size={16} className="text-gold" />

                Iași • România

              </div>


            </div>

          </div>


        </div>




        {/* bottom */}
        <div className="mt-16 border-t border-border pt-8 text-center text-xs text-muted-foreground">

          © 2026 Flomir Events. Toate drepturile rezervate.

        </div>


      </div>

    </footer>
  );
}