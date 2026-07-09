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

const [scrolled,setScrolled] = useState(false);
const [open,setOpen] = useState(false);



useEffect(()=>{


const onScroll = () => {

setScrolled(window.scrollY > 30);

};


onScroll();


window.addEventListener(
"scroll",
onScroll,
{passive:true}
);


return ()=>window.removeEventListener(
"scroll",
onScroll
);


},[]);





return (

<motion.header

initial={{
 y:-30,
 opacity:0
}}

animate={{
 y:0,
 opacity:1
}}

transition={{
 duration:.9,
 ease
}}


className={`
fixed
inset-x-0
top-0
z-50

transition-all
duration-700

${scrolled ? "pt-3" : "pt-6"}
`}

>


<div className="mx-auto max-w-7xl px-4 lg:px-8">



<motion.div


animate={{

paddingTop: scrolled ? 10 : 14,

paddingBottom: scrolled ? 10 : 14,

}}


transition={{
duration:.5,
ease
}}



className="
flex
items-center
justify-between

rounded-full

border
border-gold/25

bg-[#F8F4EC]/75

px-5

shadow-[0_25px_70px_rgba(24,21,18,.12)]

backdrop-blur-2xl
"

>





{/* LOGO */}

<Link

to="/"

className="
group
flex
items-center
gap-3
"

>

<motion.div

whileHover={{
 scale:1.05
}}

>

<Logo className="h-9 w-9"/>

</motion.div>



<div>


<div

className="
font-display
text-base
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

tracking-[.3em]

text-[#7C6F61]

sm:block
"

>

Premium experiences

</div>


</div>


</Link>







{/* DESKTOP LINKS */}

<nav className="hidden gap-1 md:flex">


{NAV.map(item=>(


<a

key={item.href}

href={item.href}


className="
relative

rounded-full

px-4
py-2

text-sm

text-[#7C6F61]

transition-all

hover:bg-[#EFE4D2]

hover:text-[#181512]
"

>

{item.label}


</a>


))}


</nav>








{/* DESKTOP RIGHT */}

<div className="hidden items-center gap-3 md:flex">



<a

href="tel:0740593755"

className="
flex
items-center
gap-2

text-sm

text-[#7C6F61]

transition

hover:text-gold
"

>

<Phone size={15}/>

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

hover:-translate-y-1
"

>

Solicită ofertă

<ArrowUpRight size={15}/>


</a>



</div>








{/* MOBILE BUTTON */}

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
border-gold/30

bg-[#EFE4D2]

text-[#181512]

md:hidden
"

>


{open ? <X/> : <Menu/>}


</button>




</motion.div>


</div>









{/* MOBILE MENU */}


<AnimatePresence>


{open && (


<motion.div

initial={{
 opacity:0,
 y:-15
}}

animate={{
 opacity:1,
 y:0
}}

exit={{
 opacity:0,
 y:-15
}}

transition={{
duration:.35,
ease
}}

className="
mx-4
mt-3

md:hidden
"

>



<div

className="
rounded-[2rem]

border
border-gold/20

bg-[#F8F4EC]/95

p-6

shadow-[0_25px_70px_rgba(24,21,18,.15)]

backdrop-blur-xl
"

>



<nav className="flex flex-col">


{NAV.map(item=>(


<a

key={item.href}

href={item.href}

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

{item.label}


</a>


))}






<a

href="#contact"

onClick={()=>setOpen(false)}

className="
btn-sheen

mt-6

inline-flex

items-center

justify-center

gap-2

rounded-full

bg-gold-gradient

py-4

text-sm

font-medium

text-[#181512]
"

>

Solicită ofertă

<ArrowUpRight size={16}/>


</a>



</nav>


</div>



</motion.div>


)}


</AnimatePresence>



</motion.header>

);

}