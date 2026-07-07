globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/.DS_Store": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1804-RE9hf/EtWI9dO+f9pLLffmU35JA\"",
		"mtime": "2026-07-07T14:46:52.850Z",
		"size": 6148,
		"path": "../public/.DS_Store"
	},
	"/assets/flomir-logo-oFAEWfU9.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1ad27-7ePlzUdSqQsk8h1t+u0xAQmcN1I\"",
		"mtime": "2026-07-07T14:46:52.748Z",
		"size": 109863,
		"path": "../public/assets/flomir-logo-oFAEWfU9.jpeg"
	},
	"/assets/routes-Dqut7ro9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"70fd-OvaZ2GiLORs4KaEIn4KVDb/fpEw\"",
		"mtime": "2026-07-07T14:46:52.748Z",
		"size": 28925,
		"path": "../public/assets/routes-Dqut7ro9.js"
	},
	"/images/.DS_Store": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1804-RT/oqSDEANQpNhMOgKAXc1Tn5kQ\"",
		"mtime": "2026-07-07T14:46:52.841Z",
		"size": 6148,
		"path": "../public/images/.DS_Store"
	},
	"/assets/styles-B0o5NTlt.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"17308-V/3PPUV6SdXRnSoyUq+qn67OOg4\"",
		"mtime": "2026-07-07T14:46:52.749Z",
		"size": 94984,
		"path": "../public/assets/styles-B0o5NTlt.css"
	},
	"/images/services/baloane-fum.webp": {
		"type": "image/webp",
		"etag": "\"195ea-4G94pZztXDb3lEgtAdOkk2UIuo4\"",
		"mtime": "2026-07-07T14:46:52.845Z",
		"size": 103914,
		"path": "../public/images/services/baloane-fum.webp"
	},
	"/images/services/bar-mobil.webp": {
		"type": "image/webp",
		"etag": "\"2b3f6-tmL/l06+PQE4XJcgFpomRkwx4TU\"",
		"mtime": "2026-07-07T14:46:52.842Z",
		"size": 177142,
		"path": "../public/images/services/bar-mobil.webp"
	},
	"/assets/index-D0DQreb-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"752b7-9GQri6/gMcRIE9vCLbARDQ04yqM\"",
		"mtime": "2026-07-07T14:46:52.748Z",
		"size": 479927,
		"path": "../public/assets/index-D0DQreb-.js"
	},
	"/images/services/fum-greu.webp": {
		"type": "image/webp",
		"etag": "\"16568-PdDuyp1N26yXVZG8BZF/becq+Sc\"",
		"mtime": "2026-07-07T14:46:52.844Z",
		"size": 91496,
		"path": "../public/images/services/fum-greu.webp"
	},
	"/images/services/tarabana.webp": {
		"type": "image/webp",
		"etag": "\"e642-6LOnrncTMe2HsZ6iXGgTnRWlWH8\"",
		"mtime": "2026-07-07T14:46:52.847Z",
		"size": 58946,
		"path": "../public/images/services/tarabana.webp"
	},
	"/images/services/cabina-foto.webp": {
		"type": "image/webp",
		"etag": "\"42da0-wUm6/mbBa5O6OzKaRBhah5X3k4c\"",
		"mtime": "2026-07-07T14:46:52.842Z",
		"size": 273824,
		"path": "../public/images/services/cabina-foto.webp"
	},
	"/images/services/oglinda-foto.webp": {
		"type": "image/webp",
		"etag": "\"3c17e-NrBAJtG95N4xAoOAcyH1ElJS3Nc\"",
		"mtime": "2026-07-07T14:46:52.846Z",
		"size": 246142,
		"path": "../public/images/services/oglinda-foto.webp"
	},
	"/images/services/tort-shoturi.webp": {
		"type": "image/webp",
		"etag": "\"29e50-ujOEQonFyz41AYjlWP0CFdbUe2E\"",
		"mtime": "2026-07-07T14:46:52.846Z",
		"size": 171600,
		"path": "../public/images/services/tort-shoturi.webp"
	},
	"/images/portfolio/nunti/1.webp": {
		"type": "image/webp",
		"etag": "\"1c2b4-8Xnaxnjkn18ZrxyS8zLp2GVo6N8\"",
		"mtime": "2026-07-07T14:46:52.850Z",
		"size": 115380,
		"path": "../public/images/portfolio/nunti/1.webp"
	},
	"/images/portfolio/nunti/10.webp": {
		"type": "image/webp",
		"etag": "\"b0c2-UXTn1x5vduPd9dvA0IFL+hQUenU\"",
		"mtime": "2026-07-07T14:46:52.851Z",
		"size": 45250,
		"path": "../public/images/portfolio/nunti/10.webp"
	},
	"/images/services/florale.webp": {
		"type": "image/webp",
		"etag": "\"2ea28-fnf2PCbGqOnRDhLXUXLk21w7C4Y\"",
		"mtime": "2026-07-07T14:46:52.847Z",
		"size": 191016,
		"path": "../public/images/services/florale.webp"
	},
	"/images/services/platforma360.webp": {
		"type": "image/webp",
		"etag": "\"3cfde-3f5yrDuCZxe9qQ8Ry1LAD0NuF9A\"",
		"mtime": "2026-07-07T14:46:52.845Z",
		"size": 249822,
		"path": "../public/images/services/platforma360.webp"
	},
	"/images/portfolio/nunti/12.webp": {
		"type": "image/webp",
		"etag": "\"12348-0J7Jz++73vsnjCXPAaPiM30DVP8\"",
		"mtime": "2026-07-07T14:46:52.851Z",
		"size": 74568,
		"path": "../public/images/portfolio/nunti/12.webp"
	},
	"/images/portfolio/nunti/2.webp": {
		"type": "image/webp",
		"etag": "\"14cbe-QL6sZuX1Gt/jZGJgHdOzgJFbJYo\"",
		"mtime": "2026-07-07T14:46:52.851Z",
		"size": 85182,
		"path": "../public/images/portfolio/nunti/2.webp"
	},
	"/images/portfolio/nunti/11.webp": {
		"type": "image/webp",
		"etag": "\"11cae-g5OazcMW6CAZVkG1AbxmFsUHsy8\"",
		"mtime": "2026-07-07T14:46:52.855Z",
		"size": 72878,
		"path": "../public/images/portfolio/nunti/11.webp"
	},
	"/images/portfolio/nunti/3.webp": {
		"type": "image/webp",
		"etag": "\"20d74-/eRl5UyvJZEWHD9gsed1uJ4tyfM\"",
		"mtime": "2026-07-07T14:46:52.852Z",
		"size": 134516,
		"path": "../public/images/portfolio/nunti/3.webp"
	},
	"/images/portfolio/nunti/4.webp": {
		"type": "image/webp",
		"etag": "\"2529e-EQEuJcDKzVaCC5LKQaEUE0Wz4yc\"",
		"mtime": "2026-07-07T14:46:52.852Z",
		"size": 152222,
		"path": "../public/images/portfolio/nunti/4.webp"
	},
	"/images/portfolio/nunti/5.webp": {
		"type": "image/webp",
		"etag": "\"23f22-qEQymqnfynCJannspwGrbeQaRGg\"",
		"mtime": "2026-07-07T14:46:52.852Z",
		"size": 147234,
		"path": "../public/images/portfolio/nunti/5.webp"
	},
	"/images/portfolio/nunti/6.webp": {
		"type": "image/webp",
		"etag": "\"29524-ccOAoaB39YAcYPfBq83BD2ZGlMQ\"",
		"mtime": "2026-07-07T14:46:52.853Z",
		"size": 169252,
		"path": "../public/images/portfolio/nunti/6.webp"
	},
	"/images/portfolio/nunti/7.webp": {
		"type": "image/webp",
		"etag": "\"41dd6-E6l23BHagm+WxkzLMdQ6CZnluJo\"",
		"mtime": "2026-07-07T14:46:52.853Z",
		"size": 269782,
		"path": "../public/images/portfolio/nunti/7.webp"
	},
	"/images/portfolio/nunti/8.webp": {
		"type": "image/webp",
		"etag": "\"21840-Rdahnp0or0jqNEXqk3AqeyaXWDQ\"",
		"mtime": "2026-07-07T14:46:52.853Z",
		"size": 137280,
		"path": "../public/images/portfolio/nunti/8.webp"
	},
	"/images/portfolio/nunti/9.webp": {
		"type": "image/webp",
		"etag": "\"ed64-pQ2V8VSJPLKaREPPujPZeVkX9bo\"",
		"mtime": "2026-07-07T14:46:52.855Z",
		"size": 60772,
		"path": "../public/images/portfolio/nunti/9.webp"
	},
	"/images/portfolio/servicii/1.webp": {
		"type": "image/webp",
		"etag": "\"24b40-G0B1dk+Cylb/YEmcP566+opuH7o\"",
		"mtime": "2026-07-07T14:46:52.850Z",
		"size": 150336,
		"path": "../public/images/portfolio/servicii/1.webp"
	},
	"/images/portfolio/servicii/11.webp": {
		"type": "image/webp",
		"etag": "\"4e398-hQx0kpRcn9R4JzQ+9DbudeEf3gg\"",
		"mtime": "2026-07-07T14:46:52.856Z",
		"size": 320408,
		"path": "../public/images/portfolio/servicii/11.webp"
	},
	"/images/portfolio/servicii/13.webp": {
		"type": "image/webp",
		"etag": "\"309f8-tVG0WcLLBSbZOoQumidZzKtMb00\"",
		"mtime": "2026-07-07T14:46:52.857Z",
		"size": 199160,
		"path": "../public/images/portfolio/servicii/13.webp"
	},
	"/images/portfolio/servicii/12.webp": {
		"type": "image/webp",
		"etag": "\"58102-vBSHlnhstwsJ7sFlo1QR1eg257A\"",
		"mtime": "2026-07-07T14:46:52.857Z",
		"size": 360706,
		"path": "../public/images/portfolio/servicii/12.webp"
	},
	"/images/portfolio/servicii/16.webp": {
		"type": "image/webp",
		"etag": "\"38c4a-yiA57Qs2Je3O7bUA0YXT+PncXH4\"",
		"mtime": "2026-07-07T14:46:52.860Z",
		"size": 232522,
		"path": "../public/images/portfolio/servicii/16.webp"
	},
	"/images/portfolio/servicii/17.webp": {
		"type": "image/webp",
		"etag": "\"4531a-Tr9ZJYMGYm8GO1bDSSvszG44pzE\"",
		"mtime": "2026-07-07T14:46:52.860Z",
		"size": 283418,
		"path": "../public/images/portfolio/servicii/17.webp"
	},
	"/images/portfolio/servicii/19.webp": {
		"type": "image/webp",
		"etag": "\"2eb20-nKjRTwON5QZuM4EpLUG1jf1zk6A\"",
		"mtime": "2026-07-07T14:46:52.862Z",
		"size": 191264,
		"path": "../public/images/portfolio/servicii/19.webp"
	},
	"/images/portfolio/servicii/15.webp": {
		"type": "image/webp",
		"etag": "\"4a63e-t2mNFT5Gx34J0qGf3yoI0DJIhf8\"",
		"mtime": "2026-07-07T14:46:52.857Z",
		"size": 304702,
		"path": "../public/images/portfolio/servicii/15.webp"
	},
	"/images/portfolio/servicii/21.webp": {
		"type": "image/webp",
		"etag": "\"5a96a-uS7SRSHpoS+bokQxs1XcUi1OyvI\"",
		"mtime": "2026-07-07T14:46:52.864Z",
		"size": 371050,
		"path": "../public/images/portfolio/servicii/21.webp"
	},
	"/images/portfolio/servicii/20.webp": {
		"type": "image/webp",
		"etag": "\"41d3c-n1apZ7LMUBSanJHo/Op4ZqYYa+4\"",
		"mtime": "2026-07-07T14:46:52.865Z",
		"size": 269628,
		"path": "../public/images/portfolio/servicii/20.webp"
	},
	"/images/portfolio/servicii/22.webp": {
		"type": "image/webp",
		"etag": "\"25ef6-sjl4630vN6XSA69AQdjOKMcInMM\"",
		"mtime": "2026-07-07T14:46:52.865Z",
		"size": 155382,
		"path": "../public/images/portfolio/servicii/22.webp"
	},
	"/images/portfolio/servicii/2.webp": {
		"type": "image/webp",
		"etag": "\"5f69e-C34ijACNozu33iKbpBd6ngDyNZQ\"",
		"mtime": "2026-07-07T14:46:52.863Z",
		"size": 390814,
		"path": "../public/images/portfolio/servicii/2.webp"
	},
	"/images/portfolio/servicii/18.webp": {
		"type": "image/webp",
		"etag": "\"6a4da-00Am57qhr0Jz/tSm/VmuAc5KghI\"",
		"mtime": "2026-07-07T14:46:52.862Z",
		"size": 435418,
		"path": "../public/images/portfolio/servicii/18.webp"
	},
	"/images/portfolio/servicii/23.webp": {
		"type": "image/webp",
		"etag": "\"38d36-p9+C2A1KI/4G89LChrqsLsEl+lY\"",
		"mtime": "2026-07-07T14:46:52.865Z",
		"size": 232758,
		"path": "../public/images/portfolio/servicii/23.webp"
	},
	"/images/portfolio/servicii/24.webp": {
		"type": "image/webp",
		"etag": "\"2c1a6-+kCd6pCHVerDBOtBpwlEXY2IjKg\"",
		"mtime": "2026-07-07T14:46:52.866Z",
		"size": 180646,
		"path": "../public/images/portfolio/servicii/24.webp"
	},
	"/images/portfolio/servicii/3.webp": {
		"type": "image/webp",
		"etag": "\"2f2d6-19AgSUwRbDk03NV2j5aTfxqNk3w\"",
		"mtime": "2026-07-07T14:46:52.867Z",
		"size": 193238,
		"path": "../public/images/portfolio/servicii/3.webp"
	},
	"/images/portfolio/servicii/5.webp": {
		"type": "image/webp",
		"etag": "\"606b2-DXNbDq6U/4YpcgBIo+98WWP69G8\"",
		"mtime": "2026-07-07T14:46:52.868Z",
		"size": 394930,
		"path": "../public/images/portfolio/servicii/5.webp"
	},
	"/images/portfolio/servicii/14.webp": {
		"type": "image/webp",
		"etag": "\"855aa-lVQ4Si0sR4tu7EISDv4Nvf2T5eY\"",
		"mtime": "2026-07-07T14:46:52.859Z",
		"size": 546218,
		"path": "../public/images/portfolio/servicii/14.webp"
	},
	"/images/portfolio/servicii/4.webp": {
		"type": "image/webp",
		"etag": "\"5f622-+K7peel97qm1rqNpw7csrow4gGE\"",
		"mtime": "2026-07-07T14:46:52.868Z",
		"size": 390690,
		"path": "../public/images/portfolio/servicii/4.webp"
	},
	"/images/portfolio/servicii/10.webp": {
		"type": "image/webp",
		"etag": "\"a29ae-be8MbygRa6AE6+v1/mz7nv3F+s8\"",
		"mtime": "2026-07-07T14:46:52.860Z",
		"size": 666030,
		"path": "../public/images/portfolio/servicii/10.webp"
	},
	"/images/portfolio/servicii/6.webp": {
		"type": "image/webp",
		"etag": "\"6c23a-1tSMN1uYjb+xKXrAV6fhRgO5Qcc\"",
		"mtime": "2026-07-07T14:46:52.869Z",
		"size": 442938,
		"path": "../public/images/portfolio/servicii/6.webp"
	},
	"/images/portfolio/servicii/7.webp": {
		"type": "image/webp",
		"etag": "\"4bf92-gZUDfvMdHaSbw+eQVBixbMZoaxQ\"",
		"mtime": "2026-07-07T14:46:52.869Z",
		"size": 311186,
		"path": "../public/images/portfolio/servicii/7.webp"
	},
	"/images/services/foto-video/2.webp": {
		"type": "image/webp",
		"etag": "\"11c48-vnDEyqnjxTMZAQW30ZiF1PHZxNE\"",
		"mtime": "2026-07-07T14:46:52.848Z",
		"size": 72776,
		"path": "../public/images/services/foto-video/2.webp"
	},
	"/images/portfolio/servicii/8.webp": {
		"type": "image/webp",
		"etag": "\"2e074-oQnbfd5bnfnMtF0yT26lGte2P7c\"",
		"mtime": "2026-07-07T14:46:52.870Z",
		"size": 188532,
		"path": "../public/images/portfolio/servicii/8.webp"
	},
	"/images/services/foto-video/3.webp": {
		"type": "image/webp",
		"etag": "\"19ff2-rtTfANFWaOfnjkPmTvJnWD+UMmw\"",
		"mtime": "2026-07-07T14:46:52.850Z",
		"size": 106482,
		"path": "../public/images/services/foto-video/3.webp"
	},
	"/images/services/foto-video/1.webp": {
		"type": "image/webp",
		"etag": "\"36736-XK+kxhzQRAcCNQ+ExynDGsS5DNE\"",
		"mtime": "2026-07-07T14:46:52.842Z",
		"size": 223030,
		"path": "../public/images/services/foto-video/1.webp"
	},
	"/images/services/foto-video/5.webp": {
		"type": "image/webp",
		"etag": "\"175fc-0pKrjylu35HNpNOAQKxK2XbtiXw\"",
		"mtime": "2026-07-07T14:46:52.849Z",
		"size": 95740,
		"path": "../public/images/services/foto-video/5.webp"
	},
	"/images/services/foto-video/4.webp": {
		"type": "image/webp",
		"etag": "\"203ac-+5fIJiCyrAz59foUo0LYlMhT7fA\"",
		"mtime": "2026-07-07T14:46:52.849Z",
		"size": 132012,
		"path": "../public/images/services/foto-video/4.webp"
	},
	"/images/portfolio/servicii/9.webp": {
		"type": "image/webp",
		"etag": "\"77acc-hdSkkfXoUer32wYcDi05uba1QNM\"",
		"mtime": "2026-07-07T14:46:52.871Z",
		"size": 490188,
		"path": "../public/images/portfolio/servicii/9.webp"
	},
	"/videos/hero.mp4": {
		"type": "video/mp4",
		"etag": "\"89e09e-vGMuKvlb7fesH0zS2NJl3PXy4Gk\"",
		"mtime": "2026-07-07T14:46:52.854Z",
		"size": 9035934,
		"path": "../public/videos/hero.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_gu3VD1 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_gu3VD1
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
