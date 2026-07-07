import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { 
        title: "Flomir Events — Servicii premium pentru evenimente memorabile" 
      },
      {
        name: "description",
        content:
          "Foto & video, cabină foto, oglindă, platformă 360, bar mobil, fum greu, dronă 4K și multe altele. Un singur partener pentru un eveniment perfect.",
      },
      { 
        property: "og:title", 
        content: "Flomir Events — Servicii premium pentru evenimente" 
      },
      {
        property: "og:description",
        content:
          "De la primul cadru până la ultima notă a serii. Transformăm fiecare eveniment într-o experiență memorabilă.",
      },
      { 
        property: "og:url", 
        content: "/" 
      },
    ],

    links: [
      { 
        rel: "canonical", 
        href: "/" 
      }
    ],
  }),

  component: Index,
});


function Index() {
  return (
    <>
      <Hero />

      <Services />

      <Portfolio />

      <About />

      <Process />

      <CTA />

      <Contact />
    </>
  );
}