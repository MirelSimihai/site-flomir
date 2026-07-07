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
      "Păstrăm emoțiile zilei tale prin fotografii naturale și filmări atent realizate.",
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
      "Fotografii spontane și momente memorabile pentru invitații tăi.",
    image: "/images/services/cabina-foto.webp",
  },

  {
    icon: RotateCw,
    title: "Platformă 360",
    desc:
      "Filmări slow-motion spectaculoase pentru momente speciale.",
    image: "/images/services/platforma360.webp",
  },

  {
    icon: Wine,
    title: "Bar Mobil",
    desc:
      "Cocktailuri elegante și o experiență premium pentru invitați.",
    image: "/images/services/bar-mobil.webp",
  },

  {
    icon: CloudFog,
    title: "Fum Greu",
    desc:
      "Transformă primul dans într-un moment de poveste.",
    image: "/images/services/fum-greu.webp",
  },

  {
    icon: Cloud,
    title: "Baloane de Fum",
    desc:
      "Efect spectaculos pentru fotografii pline de culoare.",
    image: "/images/services/baloane-fum.webp",
  },

  {
    icon: Drum,
    title: "Tarabană Show",
    desc:
      "Energie live și atmosferă pentru petrecerea ta.",
    image: "/images/services/tarabana.webp",
  },

  {
    icon: GlassWater,
    title: "Tort de Shoturi",
    desc:
      "Un moment surpriză cu impact vizual pentru invitați.",
    image: "/images/services/tort-shoturi.webp",
  },

  {
    icon: Flower2,
    title: "Aranjamente Florale",
    desc:
      "Decoruri elegante create cu atenție la fiecare detaliu.",
    image: "/images/services/florale.webp",
  },
];


const fotoVideoImages = [
  "/images/services/foto-video/1.webp",
  "/images/services/foto-video/2.webp",
  "/images/services/foto-video/3.webp",
  "/images/services/foto-video/4.webp",
  "/images/services/foto-video/5.webp",
];

const ease = [0.22, 1, 0.36, 1] as const;



export function Services() {

  const [currentImage,setCurrentImage] = useState(0);


  useEffect(()=>{

    const timer=setInterval(()=>{

      setCurrentImage(prev =>
        prev === fotoVideoImages.length-1 ? 0 : prev+1
      );

    },4000);


    return ()=>clearInterval(timer);

  },[]);




return (

<section id="servicii" className="relative py-28 lg:py-40">


<div className="mx-auto max-w-7xl px-6 lg:px-10">



<motion.div

initial={{opacity:0,y:20}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.8,ease}}

className="max-w-2xl"

>


<div className="text-[11px] uppercase tracking-[.4em] text-gold">

Serviciile noastre

</div>



<h2 className="mt-5 font-display text-5xl font-light lg:text-6xl">

Tot ce ai nevoie pentru un eveniment{" "}

<span className="italic text-gold-gradient">

memorabil

</span>

</h2>


</motion.div>





<div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


{services.map((s,i)=>{

const Icon=s.icon;


return (

<motion.article

key={s.title}

initial={{opacity:0,y:30}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{
duration:.7,
delay:i*.04,
ease
}}

whileHover={{y:-6}}

className={`
group
relative
overflow-hidden

rounded-[2rem]

border
border-gold/20

shadow-elegant

${s.featured 
? "min-h-[430px] sm:col-span-2"
:"aspect-[4/5]"
}

`}

>



{s.featured ? (

<>

<AnimatePresence mode="wait">

<motion.img

key={currentImage}

src={fotoVideoImages[currentImage]}

className="absolute inset-0 h-full w-full object-cover"

initial={{opacity:0,scale:1.05}}

animate={{opacity:1,scale:1}}

exit={{opacity:0}}

transition={{duration:1}}

/>

</AnimatePresence>


</>

)

:

(

<img

src={s.image}

className="
absolute
inset-0
h-full
w-full
object-cover

transition
duration-[1200ms]

group-hover:scale-105
"

/>

)}




{/* overlay */}

<div
className="
absolute
inset-0

bg-gradient-to-t

from-[#181512]/95

via-[#181512]/45

to-transparent
"
/>





<div className="relative z-10 flex h-full flex-col p-8">



<div

className="
flex
h-11
w-11

items-center
justify-center

rounded-full

bg-[#F8F4EC]/20

text-gold

backdrop-blur
"

>


<Icon size={20}/>


</div>




<div className="mt-auto">


<h3

className="
font-display

text-4xl

font-light

text-[#F8F4EC]

drop-shadow-lg
"

>

{s.title}

</h3>




<p

className="
mt-4

max-w-md

text-sm

leading-relaxed

text-[#EFE4D2]
"

>

{s.desc}

</p>





<a

href="#contact"

className="
mt-8

inline-flex

items-center

gap-2


text-[11px]

uppercase

tracking-[.3em]


text-gold


transition


hover:text-[#EAD8A8]
"

>

Descoperă serviciul


<ArrowUpRight size={14}/>


</a>



</div>


</div>



</motion.article>


)

})}


</div>


</div>


</section>

)

}