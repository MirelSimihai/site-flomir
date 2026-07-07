import { a as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as Sparkles, S as Aperture, _ as CloudFog, a as RotateCw, b as CalendarCheck, d as Instagram, f as GlassWater, g as Cloud, h as Drum, i as Star, l as MapPin, m as Facebook, n as Wine, o as Phone, p as Flower2, r as Users, s as MessageCircle, t as X, u as Mail, v as Camera, w as CircleCheck, x as ArrowUpRight, y as Calendar } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B-l2MntH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ease$6 = [
	.22,
	1,
	.36,
	1
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-radial-spotlight pt-36 pb-28 lg:pt-52 lg:pb-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 -z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "orb absolute left-[12%] top-[14%] h-[360px] w-[360px] opacity-40",
				style: { background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)" }
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "orb absolute right-[8%] top-[35%] h-[420px] w-[420px] opacity-30",
				style: { background: "radial-gradient(circle, #F1D27A 0%, transparent 70%)" }
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 14
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								ease: ease$6
							},
							className: "glass mx-auto inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-gold" }), "Din 2018 • Peste 700 de evenimente realizate"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 24
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .9,
								delay: .05,
								ease: ease$6
							},
							className: "mt-10 font-display text-[2.75rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[5.5rem]",
							children: [
								"Tot ce ai nevoie pentru ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold-gradient",
									children: "un eveniment memorabil"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"într-o singură echipă."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .8,
								delay: .2,
								ease: ease$6
							},
							className: "mx-auto mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl",
							children: "Foto & Video, Cabină Foto, Platformă 360, Oglindă Foto, Bar Mobil, Fum Greu, Dronă și multe alte servicii premium pentru nunți și botezuri."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .8,
								delay: .35,
								ease: ease$6
							},
							className: "mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "btn-sheen inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-medium text-background",
								children: ["Solicită ofertă personalizată", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/40740593755",
								target: "_blank",
								rel: "noreferrer",
								className: "glass inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-gold" }), "WhatsApp"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex items-center justify-center gap-3 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex",
								children: [
									0,
									1,
									2,
									3,
									4
								].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-gold text-gold" }, i))
							}), "Recomandați de zeci de cupluri"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 60,
						scale: .96
					},
					animate: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					transition: {
						duration: 1.1,
						delay: .4,
						ease: ease$6
					},
					className: "relative mx-auto mt-24 flex justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-[500px] w-[500px] rounded-full bg-gold/20 blur-[140px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative rounded-[3rem] border border-gold/30 bg-black p-3 shadow-[0_0_90px_rgba(212,175,55,0.18)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-5 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-[2.5rem]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								autoPlay: true,
								muted: true,
								loop: true,
								playsInline: true,
								preload: "metadata",
								className: "h-[650px] w-[365px] object-cover",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
									src: "/videos/hero.mp4",
									type: "video/mp4"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10" })]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid grid-cols-2 gap-10 sm:grid-cols-4",
					children: [
						["700+", "Evenimente realizate"],
						["2018", "Din 2018"],
						["4.9★", "Rating Google"],
						["10+", "Servicii premium"]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-4xl text-gold-gradient sm:text-5xl",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-xs text-muted-foreground",
							children: v
						})]
					}, k))
				})
			]
		})]
	});
}
var services = [
	{
		icon: Camera,
		title: "Foto & Video",
		desc: "Păstrăm emoțiile zilei tale prin fotografii naturale și filmări atent realizate, pentru amintiri la care vei reveni cu drag.",
		featured: true
	},
	{
		icon: Sparkles,
		title: "Oglindă Foto",
		desc: "Distracție pentru invitați și amintiri printate pe loc.",
		image: "/images/services/oglinda-foto.webp"
	},
	{
		icon: Aperture,
		title: "Cabină Foto",
		desc: "Un colț plin de zâmbete unde invitații creează fotografii spontane și pleacă acasă cu o amintire.",
		image: "/images/services/cabina-foto.webp"
	},
	{
		icon: RotateCw,
		title: "Platformă 360",
		desc: "Filmări slow-motion spectaculoase, perfecte pentru momente virale.",
		image: "/images/services/platforma360.webp"
	},
	{
		icon: Wine,
		title: "Bar Mobil + Alcohol Test",
		desc: "Cocktailuri pregătite pe loc, atmosferă elegantă și o experiență completă pentru invitații tăi.",
		image: "/images/services/bar-mobil.webp"
	},
	{
		icon: CloudFog,
		title: "Fum Greu",
		desc: "Creează un moment de poveste la primul dans.",
		image: "/images/services/fum-greu.webp"
	},
	{
		icon: Cloud,
		title: "Baloane de Fum",
		desc: "Adaugă culoare și emoție fotografiilor tale cu efecte baloanele noastre de fum.",
		image: "/images/services/baloane-fum.webp"
	},
	{
		icon: Drum,
		title: "Tarabană Show",
		desc: "Energie, ritm și atmosferă live pentru momentele în care vrei ca invitații să simtă petrecerea.",
		image: "/images/services/tarabana.webp"
	},
	{
		icon: GlassWater,
		title: "Tort de Shoturi",
		desc: "Un moment surpriză pentru invitați, cu efect vizual spectaculos și distracție garantată.",
		image: "/images/services/tort-shoturi.webp"
	},
	{
		icon: Flower2,
		title: "Aranjamente Florale",
		desc: "Transformăm spațiile simple în decoruri elegante, create cu atenție la fiecare detaliu al evenimentului tău.",
		image: "/images/services/florale.webp"
	}
];
var ease$5 = [
	.22,
	1,
	.36,
	1
];
var fotoVideoImages = [
	"/images/services/foto-video/1.webp",
	"/images/services/foto-video/2.webp",
	"/images/services/foto-video/3.webp",
	"/images/services/foto-video/4.webp",
	"/images/services/foto-video/5.webp"
];
function Services() {
	const [currentImage, setCurrentImage] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => {
			setCurrentImage((prev) => prev === fotoVideoImages.length - 1 ? 0 : prev + 1);
		}, 4e3);
		return () => clearInterval(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "servicii",
		className: "relative py-28 lg:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]",
			style: { background: "radial-gradient(ellipse 60% 100% at 50% 0%, color-mix(in oklab, #D4AF37 8%, transparent), transparent 70%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .8,
						ease: ease$5
					},
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] uppercase tracking-[0.4em] text-gold",
						children: "Serviciile noastre"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 font-display text-4xl font-light leading-[1.05] sm:text-5xl lg:text-6xl",
						children: [
							"Tot ce ai nevoie pentru un eveniment",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gold-gradient",
								children: "memorabil"
							}),
							"."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-sm leading-relaxed text-muted-foreground lg:text-base",
					children: "Un singur partener, un singur stil, o singură viziune. Combinăm serviciile astfel încât totul să curgă firesc."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: services.map((s, i) => {
					const Icon = s.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							y: 28
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .7,
							delay: i * .04,
							ease: ease$5
						},
						whileHover: { y: -6 },
						className: `group relative overflow-hidden rounded-[2rem] border border-border transition-all duration-500 ${s.featured ? "min-h-[430px] sm:col-span-2 lg:col-span-2" : "aspect-[4/5]"}`,
						children: [s.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
									src: fotoVideoImages[currentImage],
									alt: "Foto Video Flomir Events",
									initial: {
										opacity: 0,
										scale: 1.08
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									exit: { opacity: 0 },
									transition: { duration: 1.2 },
									className: "absolute inset-0 h-full w-full object-cover"
								}, currentImage)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute right-7 top-7 rounded-full border border-gold/30 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold",
								children: "• CEL MAI ALES"
							})
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.image,
							alt: s.title,
							className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 flex h-full flex-col p-8 sm:p-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 bg-black/30 text-gold/80 backdrop-blur-md",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-5 w-5",
									strokeWidth: 1.5
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: `font-display font-light tracking-[-0.02em] ${s.featured ? "text-4xl lg:text-5xl" : "text-[2rem]"}`,
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-lg text-sm leading-relaxed text-white/75",
										children: s.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold",
										children: ["Descoperă serviciul", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3 transition-transform group-hover:translate-x-1" })]
									})
								]
							})]
						})]
					}, s.title);
				})
			})]
		})]
	});
}
var ease$4 = [
	.22,
	1,
	.36,
	1
];
var images = [...Array.from({ length: 12 }, (_, i) => ({
	src: `/images/portfolio/nunti/${i + 1}.webp`,
	category: "Nunti"
})), ...Array.from({ length: 12 }, (_, i) => ({
	src: `/images/portfolio/servicii/${i + 1}.webp`,
	category: "Servicii"
}))];
var filters = [
	"Toate",
	"Nunti",
	"Servicii"
];
function Portfolio() {
	const [active, setActive] = (0, import_react.useState)("Toate");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [visible, setVisible] = (0, import_react.useState)(6);
	const filtered = active === "Toate" ? images : images.filter((img) => img.category === active);
	const visibleImages = filtered.slice(0, visible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "portfolio",
		className: "relative py-28 lg:py-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-20 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 lg:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .8,
							ease: ease$4
						},
						className: "mx-auto max-w-3xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-[0.4em] text-gold",
								children: "Portofoliu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-5 font-display text-4xl font-light leading-tight sm:text-5xl lg:text-6xl",
								children: [
									"Evenimente reale,",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gold-gradient",
										children: "emoții păstrate în timp"
									}),
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-xl text-muted-foreground",
								children: "O parte dintre momentele speciale și serviciile realizate de echipa Flomir Events."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 flex justify-center gap-3",
						children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setActive(f);
								setVisible(6);
							},
							className: `rounded-full border px-6 py-2 text-sm transition ${active === f ? "border-gold bg-gold text-black" : "border-border text-muted-foreground hover:border-gold hover:text-gold"}`,
							children: f
						}, f))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						layout: true,
						className: "mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: visibleImages.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							layout: true,
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: { opacity: 0 },
							transition: {
								duration: .6,
								delay: i * .03,
								ease: ease$4
							},
							className: "group mb-5 break-inside-avoid overflow-hidden rounded-[2rem] border border-white/10 bg-card shadow-xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setSelected(img.src),
								className: "relative block w-full overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: img.src,
										loading: "lazy",
										alt: "Flomir Events Portfolio",
										className: "w-full object-cover transition duration-[1200ms] group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 transition duration-700 group-hover:opacity-20" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 rounded-[2rem] border border-transparent transition duration-500 group-hover:border-gold/40" })
								]
							})
						}, img.src)) })
					}),
					visible < filtered.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setVisible((prev) => prev + 6),
							className: "rounded-full border border-gold/30 px-8 py-4 text-sm text-gold transition hover:bg-gold hover:text-black",
							children: "Vezi mai multe momente"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .8,
							ease: ease$4
						},
						className: "mt-16 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.instagram.com/flomir.events",
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex rounded-full border border-gold/30 px-8 py-4 text-sm text-gold transition hover:bg-gold hover:text-black",
							children: "Vezi mai multe pe Instagram →"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6 backdrop-blur",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setSelected(null),
					className: "absolute right-6 top-6 text-white transition hover:text-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 32 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: selected,
					initial: {
						scale: .9,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					exit: {
						scale: .9,
						opacity: 0
					},
					transition: { duration: .4 },
					className: "max-h-[90vh] max-w-[90vw] rounded-3xl object-contain"
				})]
			}) })
		]
	});
}
var ease$3 = [
	.22,
	1,
	.36,
	1
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "despre",
		className: "relative overflow-hidden py-28 lg:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-16 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .8,
						ease: ease$3
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-[0.4em] text-gold",
							children: "Despre Flomir Events"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-5 font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl",
							children: [
								"Nu oferim doar servicii.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold-gradient",
									children: "Construim experiențe."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-base leading-relaxed text-muted-foreground lg:text-lg",
							children: "Flomir Events s-a născut din dorința de a aduce toate serviciile importante ale unui eveniment într-o singură echipă: foto & video, entertainment, efecte speciale și experiențe premium pentru invitați."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg",
							children: "Din 2018 am fost alături de sute de cupluri și familii, transformând nunți, botezuri și evenimente private în amintiri care rămân."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 space-y-4",
							children: [
								"O singură echipă pentru toate serviciile",
								"Organizare mai simplă și comunicare rapidă",
								"Experiență reală în peste 700 de evenimente"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-sm text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-gold" }), item]
							}, item))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .9,
						delay: .1,
						ease: ease$3
					},
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-[2.5rem] bg-gold/20 blur-[80px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-[2.5rem] border border-border bg-card/70 p-10 backdrop-blur-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
									icon: Calendar,
									number: "2018",
									text: "anul în care a început povestea Flomir"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
									icon: Users,
									number: "700+",
									text: "evenimente realizate alături de clienții noștri"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
									icon: Sparkles,
									number: "10+",
									text: "servicii premium într-o singură echipă"
								})
							]
						})
					})]
				})]
			})
		})]
	});
}
function InfoCard({ icon: Icon, number, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-border bg-black/30 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "mb-5 h-6 w-6 text-gold",
				strokeWidth: 1.5
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-5xl font-light text-gold-gradient",
				children: number
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted-foreground",
				children: text
			})
		]
	});
}
var ease$2 = [
	.22,
	1,
	.36,
	1
];
var steps = [
	{
		n: "01",
		title: "Ne cunoaștem",
		desc: "Discutăm despre evenimentul tău, locație, numărul de invitați și serviciile de care ai nevoie."
	},
	{
		n: "02",
		title: "Creăm pachetul ideal",
		desc: "Alegem împreună combinația potrivită de servicii Flomir pentru stilul și bugetul tău."
	},
	{
		n: "03",
		title: "Pregătim fiecare detaliu",
		desc: "Stabilim programul, organizarea și toate momentele speciale înainte de eveniment."
	},
	{
		n: "04",
		title: "Trăiești momentul",
		desc: "Echipa Flomir se ocupă de implementare, iar tu te bucuri de fiecare clipă."
	}
];
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "proces",
		className: "relative py-28 lg:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .8,
					ease: ease$2
				},
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] uppercase tracking-[0.4em] text-gold",
						children: "Cum lucrăm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 font-display text-4xl font-light leading-tight tracking-[-0.025em] sm:text-5xl lg:text-6xl",
						children: [
							"Simplu, organizat,",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gold-gradient",
								children: "fără stres"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground",
						children: "De la prima discuție până la ultimul moment al evenimentului, ai o echipă care se ocupă de experiența completă."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .7,
						delay: i * .08,
						ease: ease$2
					},
					whileHover: { y: -6 },
					className: "group relative overflow-hidden rounded-[2rem] border border-border bg-card/60 p-9 transition-all duration-500 hover:border-gold/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100",
							style: { background: "radial-gradient(circle at top, rgba(212,175,55,0.14), transparent 60%)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative font-display text-6xl font-light text-gold-gradient",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative mt-6 h-px w-12 bg-gold/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "relative mt-8 font-display text-2xl font-light",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "relative mt-4 text-sm leading-relaxed text-muted-foreground",
							children: s.desc
						})
					]
				}, s.n))
			})]
		})
	});
}
var ease$1 = [
	.22,
	1,
	.36,
	1
];
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-28 lg:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[150px]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 40
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .9,
					ease: ease$1
				},
				className: "relative overflow-hidden rounded-[2.5rem] border border-gold/20 bg-card/70 px-8 py-16 text-center shadow-elegant backdrop-blur-xl sm:px-16 lg:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute inset-0 opacity-40",
					style: { background: "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.25), transparent 55%)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 mx-auto max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-black/30 text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, {
								className: "h-6 w-6",
								strokeWidth: 1.5
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-[0.4em] text-gold",
							children: "Rezervări disponibile"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl",
							children: [
								"Data evenimentului tău este",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold-gradient",
									children: "disponibilă?"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg",
							children: "Spune-ne data și locația evenimentului, iar echipa Flomir îți pregătește o ofertă personalizată cu serviciile potrivite."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 flex flex-col justify-center gap-4 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "btn-sheen inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-9 py-4 text-sm font-medium text-background transition-all duration-500 hover:-translate-y-1",
								children: ["Solicită ofertă", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/40740593755",
								target: "_blank",
								rel: "noreferrer",
								className: "glass inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-sm font-medium transition-all duration-500 hover:-translate-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-gold" }), "WhatsApp direct"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-xs uppercase tracking-[0.25em] text-muted-foreground",
							children: "Nunți • Botezuri • Evenimente private"
						})
					]
				})]
			})
		})]
	});
}
var ease = [
	.22,
	1,
	.36,
	1
];
var contacts = [
	{
		icon: Phone,
		title: "Telefon",
		value: "0740 593 755",
		link: "tel:0740593755"
	},
	{
		icon: MessageCircle,
		title: "WhatsApp",
		value: "Trimite mesaj direct",
		link: "https://wa.me/40740593755"
	},
	{
		icon: Mail,
		title: "Email",
		value: "Contact Flomir Events",
		link: "#"
	},
	{
		icon: MapPin,
		title: "Locație",
		value: "Iași • Moldova • România",
		link: "#"
	}
];
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative overflow-hidden py-28 lg:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[150px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 25
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .8,
						ease
					},
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-[0.4em] text-gold",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-5 font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl",
							children: [
								"Hai să construim",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold-gradient",
									children: "evenimentul tău."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground",
							children: "Spune-ne data evenimentului și serviciile dorite. Revenim cu o ofertă personalizată pentru tine."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: contacts.map((item, i) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
							href: item.link,
							target: item.link.startsWith("http") ? "_blank" : void 0,
							initial: {
								opacity: 0,
								y: 25
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .7,
								delay: i * .08,
								ease
							},
							whileHover: { y: -6 },
							className: "group rounded-[2rem] border border-border bg-card/60 p-8 text-center transition-all duration-500 hover:border-gold/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/25 bg-black/30 text-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "h-6 w-6",
										strokeWidth: 1.5
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-2xl font-light",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: item.value
								})
							]
						}, item.title);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 flex justify-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.instagram.com/flomir.events",
						target: "_blank",
						rel: "noreferrer",
						className: "flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-gold transition hover:bg-gold hover:text-black",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 20 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.facebook.com/",
						target: "_blank",
						rel: "noreferrer",
						className: "flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-gold transition hover:bg-gold hover:text-black",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { size: 20 })
					})]
				})
			]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
	] });
}
//#endregion
export { Index as component };
