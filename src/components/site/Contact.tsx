import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const contacts = [
  {
    icon: Phone,
    title: "Telefon",
    value: "0740 593 755",
    link: "tel:0740593755",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Trimite mesaj direct",
    link: "https://wa.me/40740593755",
  },
  {
    icon: Mail,
    title: "Email",
    value: "Contact Flomir Events",
    link: "#",
  },
  {
    icon: MapPin,
    title: "Locație",
    value: "Iași • Moldova • România",
    link: "#",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 lg:py-40"
    >

      {/* background glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[150px]" />


      <div className="mx-auto max-w-7xl px-6 lg:px-10">


        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-3xl text-center"
        >

          <div className="text-[11px] uppercase tracking-[0.4em] text-gold">
            Contact
          </div>


          <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">

            Hai să construim
            {" "}

            <span className="italic text-gold-gradient">
              evenimentul tău.
            </span>

          </h2>


          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">

            Spune-ne data evenimentului și serviciile dorite.
            Revenim cu o ofertă personalizată pentru tine.

          </p>


        </motion.div>



        {/* Contact cards */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


          {contacts.map((item, i) => {
            const Icon = item.icon;

            return (

              <motion.a
                key={item.title}
                href={item.link}
                target={
                  item.link.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-[2rem] border border-border bg-card/60 p-8 text-center transition-all duration-500 hover:border-gold/30"
              >

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/25 bg-black/30 text-gold">

                  <Icon
                    className="h-6 w-6"
                    strokeWidth={1.5}
                  />

                </div>


                <h3 className="mt-6 font-display text-2xl font-light">
                  {item.title}
                </h3>


                <p className="mt-3 text-sm text-muted-foreground">
                  {item.value}
                </p>


              </motion.a>

            );
          })}

        </div>




        {/* Social */}
        <div className="mt-16 flex justify-center gap-5">


          <a
            href="https://www.instagram.com/flomir.events"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-gold transition hover:bg-gold hover:text-black"
          >

            <Instagram size={20} />

          </a>


          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-gold transition hover:bg-gold hover:text-black"
          >

            <Facebook size={20} />

          </a>


        </div>


      </div>

    </section>
  );
}