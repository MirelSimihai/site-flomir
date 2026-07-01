import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "Servicii", href: "#servicii" },
  { label: "Despre", href: "#despre" },
  { label: "Proces", href: "#proces" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div
          className={`flex items-center justify-between gap-4 rounded-full px-4 transition-all duration-500 sm:px-6 ${
            scrolled
              ? "glass-strong py-2.5 shadow-soft"
              : "border border-transparent py-3.5"
          }`}
        >
          <Link to="/" className="flex items-center gap-3" aria-label="Flomir Events – acasă">
            <Logo className="h-9 w-9" />
            <div className="leading-tight">
              <div className="font-display text-base font-medium tracking-tight">
                Flomir <span className="italic text-gold-gradient">Events</span>
              </div>
              <div className="hidden text-[9px] uppercase tracking-[0.3em] text-muted-foreground sm:block">
                Premium experiences
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
                <span className="pointer-events-none absolute inset-0 -z-10 scale-90 rounded-full bg-white/0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-white/[0.04] group-hover:opacity-100" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="tel:0740593755"
              className="flex items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-3.5 w-3.5" />
              0740 593 755
            </a>
            <a
              href="#contact"
              className="btn-sheen group inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.03]"
            >
              Solicită ofertă
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
            aria-label="Meniu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-4 mt-3 md:hidden"
          >
            <div className="glass-strong rounded-3xl px-6 py-6 shadow-soft">
              <nav className="flex flex-col">
                {NAV.map((n, i) => (
                  <motion.a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-border/60 py-4 font-display text-2xl font-medium tracking-tight last:border-0"
                  >
                    {n.label}
                  </motion.a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-sheen mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-5 py-3.5 text-sm font-medium text-background"
                >
                  Solicită ofertă <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:0740593755"
                  className="mt-3 text-center text-sm text-muted-foreground"
                >
                  sau sună · 0740 593 755
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
