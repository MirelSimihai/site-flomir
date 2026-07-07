import { a as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { M as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { c as Menu, d as Instagram, l as MapPin, m as Facebook, o as Phone, t as X, u as Mail, x as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-ChBARE0P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B0o5NTlt.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var flomir_logo_default = "/assets/flomir-logo-oFAEWfU9.jpeg";
function Logo({ className = "h-10 w-10" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: flomir_logo_default,
		alt: "Flomir Events",
		className: `${className} object-contain select-none`,
		draggable: false,
		onError: (e) => {
			e.currentTarget.style.visibility = "hidden";
		}
	});
}
var NAV = [
	{
		label: "Servicii",
		href: "#servicii"
	},
	{
		label: "Portofoliu",
		href: "#portfolio"
	},
	{
		label: "Despre",
		href: "#despre"
	},
	{
		label: "Proces",
		href: "#proces"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: {
			y: -24,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .8,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "pt-3" : "pt-5"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center justify-between gap-4 rounded-full px-4 transition-all duration-500 sm:px-6 ${scrolled ? "glass-strong py-2.5 shadow-soft" : "border border-transparent py-3.5"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-3",
						"aria-label": "Flomir Events – acasă",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-9 w-9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-base font-medium tracking-tight",
								children: ["Flomir ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold-gradient",
									children: "Events"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden text-[9px] uppercase tracking-[0.3em] text-muted-foreground sm:block",
								children: "Premium experiences"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 md:flex",
						children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: n.href,
							className: "group relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
							children: [n.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 -z-10 scale-90 rounded-full bg-white/0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-white/[0.04] group-hover:opacity-100" })]
						}, n.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center gap-2 md:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:0740593755",
							className: "flex items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }), "0740 593 755"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "btn-sheen group inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.03]",
							children: ["Solicită ofertă", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen((v) => !v),
						className: "glass flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden",
						"aria-label": "Meniu",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: -10
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -10
			},
			transition: {
				duration: .3,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "mx-4 mt-3 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass-strong rounded-3xl px-6 py-6 shadow-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col",
					children: [
						NAV.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
							href: n.href,
							onClick: () => setOpen(false),
							initial: {
								opacity: 0,
								x: -10
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: { delay: i * .05 },
							className: "border-b border-border/60 py-4 font-display text-2xl font-medium tracking-tight last:border-0",
							children: n.label
						}, n.href)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							onClick: () => setOpen(false),
							className: "btn-sheen mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-5 py-3.5 text-sm font-medium text-background",
							children: ["Solicită ofertă ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:0740593755",
							className: "mt-3 text-center text-sm text-muted-foreground",
							children: "sau sună · 0740 593 755"
						})
					]
				})
			})
		}) })]
	});
}
var services = [
	"Foto & Video",
	"Oglindă Foto",
	"Cabină Foto",
	"Platformă 360",
	"Bar Mobil",
	"Fum Greu",
	"Tarabană Show",
	"Aranjamente Florale"
];
var links = [
	{
		name: "Despre noi",
		href: "#despre"
	},
	{
		name: "Servicii",
		href: "#servicii"
	},
	{
		name: "Proces",
		href: "#proces"
	},
	{
		name: "Contact",
		href: "#contact"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden border-t border-border bg-background py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-3xl font-light tracking-tight",
								children: [
									"Flomir",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold-gradient",
										children: "Events"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground",
								children: "Servicii premium pentru nunți, botezuri și evenimente private. O singură echipă, o experiență completă."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.instagram.com/flomir.events",
									target: "_blank",
									rel: "noreferrer",
									className: "flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold transition hover:bg-gold hover:text-black",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 18 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.facebook.com/",
									target: "_blank",
									rel: "noreferrer",
									className: "flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold transition hover:bg-gold hover:text-black",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { size: 18 })
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm uppercase tracking-[0.3em] text-gold",
						children: "Servicii"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm text-muted-foreground",
							children: s
						}, s))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm uppercase tracking-[0.3em] text-gold",
						children: "Navigare"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "text-sm text-muted-foreground transition hover:text-gold",
							children: l.name
						}) }, l.name))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm uppercase tracking-[0.3em] text-gold",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:0740593755",
								className: "flex items-center gap-3 transition hover:text-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									size: 16,
									className: "text-gold"
								}), "0740 593 755"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									size: 16,
									className: "text-gold"
								}), "contact@flomirevents.ro"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									size: 16,
									className: "text-gold"
								}), "Iași • România"]
							})
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 border-t border-border pt-8 text-center text-xs text-muted-foreground",
				children: "© 2026 Flomir Events. Toate drepturile rezervate."
			})]
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-gold-gradient",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Pagina nu a fost găsită"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Pagina pe care o cauți nu există sau a fost mutată."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-gold-gradient px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105",
						children: "Înapoi acasă"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "Această pagină nu s-a încărcat"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "A intervenit o eroare. Poți reîncerca sau te poți întoarce acasă."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-medium text-background",
						children: "Reîncearcă"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground hover:bg-card",
						children: "Acasă"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "theme-color",
				content: "#0B0B0B"
			},
			{ title: "Flomir Events — Servicii premium pentru evenimente" },
			{
				name: "description",
				content: "Foto & video, cabină foto, platformă 360, bar mobil și multe altele. Transformăm fiecare eveniment într-o experiență memorabilă."
			},
			{
				name: "author",
				content: "Flomir Events"
			},
			{
				property: "og:site_name",
				content: "Flomir Events"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ro",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex min-h-screen flex-col bg-background text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})
	});
}
var $$splitComponentImporter = () => import("./routes-B-l2MntH.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Flomir Events — Servicii premium pentru evenimente memorabile" },
			{
				name: "description",
				content: "Foto & video, cabină foto, oglindă, platformă 360, bar mobil, fum greu, dronă 4K și multe altele. Un singur partener pentru un eveniment perfect."
			},
			{
				property: "og:title",
				content: "Flomir Events — Servicii premium pentru evenimente"
			},
			{
				property: "og:description",
				content: "De la primul cadru până la ultima notă a serii. Transformăm fiecare eveniment într-o experiență memorabilă."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
