!(function (t) {
	var e = {};
	function n(i) {
		if (e[i]) return e[i].exports;
		var r = (e[i] = { i: i, l: !1, exports: {} });
		return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
	}
	(n.m = t),
		(n.c = e),
		(n.d = function (t, e, i) {
			n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
		}),
		(n.r = function (t) {
			"undefined" != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(n.t = function (t, e) {
			if ((1 & e && (t = n(t)), 8 & e)) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var i = Object.create(null);
			if (
				(n.r(i),
				Object.defineProperty(i, "default", { enumerable: !0, value: t }),
				2 & e && "string" != typeof t)
			)
				for (var r in t)
					n.d(
						i,
						r,
						function (e) {
							return t[e];
						}.bind(null, r)
					);
			return i;
		}),
		(n.n = function (t) {
			var e =
				t && t.__esModule
					? function () {
							return t.default;
					  }
					: function () {
							return t;
					  };
			return n.d(e, "a", e), e;
		}),
		(n.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(n.p = ""),
		n((n.s = 12));
})([
	function (t, e, n) {
		"use strict";
		t.exports = function (t) {
			var e = [];
			return (
				(e.toString = function () {
					return this.map(function (e) {
						var n = (function (t, e) {
							var n = t[1] || "",
								i = t[3];
							if (!i) return n;
							if (e && "function" == typeof btoa) {
								var r =
										((s = i),
										(a = btoa(unescape(encodeURIComponent(JSON.stringify(s))))),
										(c =
											"sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
												a
											)),
										"/*# ".concat(c, " */")),
									o = i.sources.map(function (t) {
										return "/*# sourceURL="
											.concat(i.sourceRoot || "")
											.concat(t, " */");
									});
								return [n].concat(o).concat([r]).join("\n");
							}
							var s, a, c;
							return [n].join("\n");
						})(e, t);
						return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
					}).join("");
				}),
				(e.i = function (t, n, i) {
					"string" == typeof t && (t = [[null, t, ""]]);
					var r = {};
					if (i)
						for (var o = 0; o < this.length; o++) {
							var s = this[o][0];
							null != s && (r[s] = !0);
						}
					for (var a = 0; a < t.length; a++) {
						var c = [].concat(t[a]);
						(i && r[c[0]]) ||
							(n &&
								(c[2]
									? (c[2] = "".concat(n, " and ").concat(c[2]))
									: (c[2] = n)),
							e.push(c));
					}
				}),
				e
			);
		};
	},
	function (t, e, n) {
		var i = n(2),
			r = n(9);
		"string" == typeof (r = r.__esModule ? r.default : r) &&
			(r = [[t.i, r, ""]]);
		var o = { insert: "head", singleton: !1 };
		i(r, o);
		t.exports = r.locals || {};
	},
	function (t, e, n) {
		"use strict";
		var i,
			r = function () {
				return (
					void 0 === i &&
						(i = Boolean(window && document && document.all && !window.atob)),
					i
				);
			},
			o = (function () {
				var t = {};
				return function (e) {
					if (void 0 === t[e]) {
						var n = document.querySelector(e);
						if (
							window.HTMLIFrameElement &&
							n instanceof window.HTMLIFrameElement
						)
							try {
								n = n.contentDocument.head;
							} catch (t) {
								n = null;
							}
						t[e] = n;
					}
					return t[e];
				};
			})(),
			s = [];
		function a(t) {
			for (var e = -1, n = 0; n < s.length; n++)
				if (s[n].identifier === t) {
					e = n;
					break;
				}
			return e;
		}
		function c(t, e) {
			for (var n = {}, i = [], r = 0; r < t.length; r++) {
				var o = t[r],
					c = e.base ? o[0] + e.base : o[0],
					l = n[c] || 0,
					h = "".concat(c, " ").concat(l);
				n[c] = l + 1;
				var u = a(h),
					d = { css: o[1], media: o[2], sourceMap: o[3] };
				-1 !== u
					? (s[u].references++, s[u].updater(d))
					: s.push({ identifier: h, updater: g(d, e), references: 1 }),
					i.push(h);
			}
			return i;
		}
		function l(t) {
			var e = document.createElement("style"),
				i = t.attributes || {};
			if (void 0 === i.nonce) {
				var r = n.nc;
				r && (i.nonce = r);
			}
			if (
				(Object.keys(i).forEach(function (t) {
					e.setAttribute(t, i[t]);
				}),
				"function" == typeof t.insert)
			)
				t.insert(e);
			else {
				var s = o(t.insert || "head");
				if (!s)
					throw new Error(
						"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
					);
				s.appendChild(e);
			}
			return e;
		}
		var h,
			u =
				((h = []),
				function (t, e) {
					return (h[t] = e), h.filter(Boolean).join("\n");
				});
		function d(t, e, n, i) {
			var r = n
				? ""
				: i.media
				? "@media ".concat(i.media, " {").concat(i.css, "}")
				: i.css;
			if (t.styleSheet) t.styleSheet.cssText = u(e, r);
			else {
				var o = document.createTextNode(r),
					s = t.childNodes;
				s[e] && t.removeChild(s[e]),
					s.length ? t.insertBefore(o, s[e]) : t.appendChild(o);
			}
		}
		function p(t, e, n) {
			var i = n.css,
				r = n.media,
				o = n.sourceMap;
			if (
				(r ? t.setAttribute("media", r) : t.removeAttribute("media"),
				o &&
					btoa &&
					(i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
						btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
						" */"
					)),
				t.styleSheet)
			)
				t.styleSheet.cssText = i;
			else {
				for (; t.firstChild; ) t.removeChild(t.firstChild);
				t.appendChild(document.createTextNode(i));
			}
		}
		var f = null,
			m = 0;
		function g(t, e) {
			var n, i, r;
			if (e.singleton) {
				var o = m++;
				(n = f || (f = l(e))),
					(i = d.bind(null, n, o, !1)),
					(r = d.bind(null, n, o, !0));
			} else
				(n = l(e)),
					(i = p.bind(null, n, e)),
					(r = function () {
						!(function (t) {
							if (null === t.parentNode) return !1;
							t.parentNode.removeChild(t);
						})(n);
					});
			return (
				i(t),
				function (e) {
					if (e) {
						if (
							e.css === t.css &&
							e.media === t.media &&
							e.sourceMap === t.sourceMap
						)
							return;
						i((t = e));
					} else r();
				}
			);
		}
		t.exports = function (t, e) {
			(e = e || {}).singleton ||
				"boolean" == typeof e.singleton ||
				(e.singleton = r());
			var n = c((t = t || []), e);
			return function (t) {
				if (
					((t = t || []),
					"[object Array]" === Object.prototype.toString.call(t))
				) {
					for (var i = 0; i < n.length; i++) {
						var r = a(n[i]);
						s[r].references--;
					}
					for (var o = c(t, e), l = 0; l < n.length; l++) {
						var h = a(n[l]);
						0 === s[h].references && (s[h].updater(), s.splice(h, 1));
					}
					n = o;
				}
			};
		};
	},
	function (t, e, n) {
		var i = n(2),
			r = n(4);
		"string" == typeof (r = r.__esModule ? r.default : r) &&
			(r = [[t.i, r, ""]]);
		var o = { insert: "head", singleton: !1 };
		i(r, o);
		t.exports = r.locals || {};
	},
	function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(0),
			r = n.n(i)()(!1);
		r.push([
			t.i,
			"\r\n\r\n:root {\r\n\r\n\t--menu-button-radius: 24px;\r\n\t--menu-padding: calc( ( var(--menu-button-radius) * 2 ) + 15vh ) 11vw 15vh 11vw;\r\n\t--generic-border: 3px solid var(--color1-0);\r\n\r\n\t/* COLORS */\r\n\r\n\t--color1-0: #010b24;\r\n\t--color1-1: #072670;\r\n\t--color1-2: #2352c4;\r\n\t--color1-3: #6f8ed9;\r\n\t--color1-4: #bdccf0;\r\n\t--color1-5: #f5f8ff;\r\n\r\n}\r\n\r\n@font-face {\r\n\tfont-family: champagne;\r\n\tsrc: url(https://cad-portfolio.s3.eu-west-3.amazonaws.com/fonts/Champagne.ttf);\r\n}\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\t-webkit-tap-highlight-color: transparent;\r\n\toverscroll-behavior: none;\r\n\tfont-family: 'Mulish', sans-serif;\r\n}\r\n\r\nbody {\r\n\theight: 100vh;\r\n\twidth: 100vw;\r\n\toverflow-x: hidden;\r\n}\r\n\r\nh1, h2, h3, h4 {\r\n\tfont-family: 'Poppins', sans-serif;\r\n}\r\n\r\n/* LOGO */\r\n\r\n#logo-container {\r\n\tposition: fixed;\r\n\ttop: 20px;\r\n\tleft: calc( 40px + calc( var(--menu-button-radius) * 2 ) );\r\n\theight: calc( var(--menu-button-radius) * 2 );\r\n\tz-index: 10000;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: calc( 20px + 3vmin );\r\n}\r\n\r\n\t#logo {\r\n\t\t/* font-family: 'champagne', sans-serif; */\r\n\t\tfont-family: 'Arvo', serif;\r\n\t\tfont-size: 0.9em;\r\n\t}\r\n\r\n/* PAGE CONTAINER */\r\n\r\n#page-container {\r\n\tposition: relative;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n}\r\n\r\n\t#page-container.hide-overflow {\r\n\t\toverflow-y: hidden;\r\n\t}",
			"",
		]),
			(e.default = r);
	},
	function (t, e, n) {
		var i = n(2),
			r = n(6);
		"string" == typeof (r = r.__esModule ? r.default : r) &&
			(r = [[t.i, r, ""]]);
		var o = { insert: "head", singleton: !1 };
		i(r, o);
		t.exports = r.locals || {};
	},
	function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(0),
			r = n.n(i)()(!1);
		r.push([
			t.i,
			"\r\n#menu-button {\r\n\tposition: fixed;\r\n\ttop: 20px;\r\n\tleft: 20px;\r\n\tfont-size: 19px;\r\n\tcolor: var(--color1-5);\r\n\tbackground-color: var(--color1-0);\r\n\theight: calc( var(--menu-button-radius) * 2 );\r\n\twidth: calc( var(--menu-button-radius) * 2 );\r\n\tborder-radius: var(--menu-button-radius);\r\n\tanimation-duration: 0.3s;\r\n  \tanimation-fill-mode: forwards;\r\n  \tanimation-timing-function: linear;\r\n  \tdisplay: flex;\r\n  \talign-items: center;\r\n  \tjustify-content: center;\r\n  \tz-index: 10000;\r\n  \ttransition: background-color 0.15s;\r\n}\r\n\r\n\t#menu-button.animate-menu-icon {\r\n\t\tanimation-name: animate_menu_icon;\r\n\t}\r\n\r\n\t/* ANIMATION */\r\n\r\n\t@keyframes animate_menu_icon {\r\n\t\tfrom { font-size: 19px; }\r\n\t\t50%  { font-size: 1px; }\r\n\t\tto   { font-size: 19px; }\r\n\t}\r\n\r\n\t/* MEDIA QUERIES */\r\n\r\n\t@media(hover: hover) and (pointer: fine) {\r\n\t\t#menu-button:hover {\r\n\t\t\tbackground-color: var(--color1-1);\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\t}",
			"",
		]),
			(e.default = r);
	},
	function (t, e, n) {
		var i = n(2),
			r = n(8);
		"string" == typeof (r = r.__esModule ? r.default : r) &&
			(r = [[t.i, r, ""]]);
		var o = { insert: "head", singleton: !1 };
		i(r, o);
		t.exports = r.locals || {};
	},
	function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(0),
			r = n.n(i)()(!1);
		r.push([
			t.i,
			"\r\n#menu {\r\n\tposition: fixed;\r\n\tbackground-color: rgba( 255, 255, 255, 0.65 );\r\n\tanimation-duration: 0.45s;\r\n  \tanimation-fill-mode: forwards;\r\n  \tanimation-timing-function: linear;\r\n  \tborder-radius: 0 0 100% 0;\r\n  \theight: 100%;\r\n\twidth: 100%;\r\n  \toverflow: hidden;\r\n  \ttransform-origin: top left;\r\n  \ttransform: scale( 0 );\r\n  \tz-index: 4900;\r\n  \ttransition: transform 0.4s;\r\n}\r\n\r\n\t#menu.anim-open-menu {\r\n\t\tanimation-name: anim_open_menu;\r\n\t}\r\n\r\n\t#menu.anim-close-menu {\r\n\t\tanimation-name: anim_close_menu;\r\n\t}\r\n\r\n\t/* CONTENT */\r\n\r\n#menu-content {\r\n\tposition: fixed;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tpadding: var(--menu-padding);\r\n\tbox-sizing: border-box;\r\n\topacity: 0;\r\n\tpointer-events: none;\r\n\tz-index: 4901;\r\n\ttransform: translateX( -40% );\r\n\ttransition: all 0.7s;\r\n}\r\n\r\n\t#menu-content.anim-open-menu {\r\n\t\tpointer-events: auto;\r\n\t\topacity: 1;\r\n\t\ttransform: translateX( 0 );\r\n\t}\r\n\r\n\t/* // */\r\n\r\n\t#links-container {\r\n\t\theight: 100%;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n\r\n\t\t#links-container > div {\r\n\t\t\twidth: -moz-min-content;\r\n      \t\twidth: min-content;\r\n\t\t}\r\n\r\n\t\t\t.menu-link {\r\n\t\t\t\tfont-size: calc( 1em + 1vmin );\r\n\t\t\t\tmargin: 15px 0;\r\n\t\t\t\tcolor: var(--color1-0);\r\n\t\t\t\twhite-space: nowrap;\r\n\t\t\t\ttransition: all 0.15s;\r\n\t\t\t\tfont-family: 'Poppins', sans-serif;\r\n\t\t\t\tuser-select: none;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\r\n\t\t\t\t.menu-link-arrow-container {\r\n\t\t\t\t\tmargin-left: 20px;\r\n\t\t\t\t\toverflow: hidden;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.menu-link i {\r\n\t\t\t\t\t\ttransform: translateX(-100%);\r\n\t\t\t\t\t\ttransition: transform 0.2s;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t@media(hover: hover) and (pointer: fine) {\r\n\r\n\t\t\t\t\t.menu-link:hover {\r\n\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\tcolor: var(--color1-1);\r\n\t\t\t\t\t\ttext-decoration: underline;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.menu-link:hover i {\r\n\t\t\t\t\t\ttransform: translateX(0);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t}\r\n\r\n\t/* ANIMATION */\r\n\r\n\t@keyframes anim_open_menu {\r\n\t\tfrom {\r\n\t\t\topacity: 0;\r\n\t\t\ttransform: scale( 0 );\r\n\t\t\tborder-radius: 0 0 100% 0;\r\n\t\t}\r\n\t\t50% {\r\n\t\t\ttransform: scale( 1 );\r\n\t\t\tborder-radius: 0 0 100% 0;\r\n\t\t}\r\n\t\tto {\r\n\t\t\ttransform: scale( 1 );\r\n\t\t\topacity: 1;\r\n\t\t\tborder-radius: 0;\r\n\t\t}\r\n\t}\r\n\r\n\t@keyframes anim_close_menu {\r\n\t\tfrom {\r\n\t\t\ttransform: scale( 1 );\r\n\t\t\topacity: 1;\r\n\t\t\tborder-radius: 0;\r\n\t\t}\r\n\t\t50% {\r\n\t\t\ttransform: scale( 1 );\r\n\t\t\tborder-radius: 0 0 100% 0;\r\n\t\t}\r\n\t\tto {\r\n\t\t\ttransform: scale( 0 );\r\n\t\t\topacity: 0;\r\n\t\t\tborder-radius: 0 0 100% 0;\r\n\t\t}\r\n\t}",
			"",
		]),
			(e.default = r);
	},
	function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(0),
			r = n.n(i)()(!1);
		r.push([
			t.i,
			"\r\n:root {\r\n\t--navbar-mask-height: 80px;\r\n}\r\n\r\n#module-container {\r\n\tposition: fixed;\r\n\tbackground: radial-gradient(ellipse at 25% 25%, #ffffff 0%, #edeff2 62%, #b8c0cc 100%);\r\n\theight: 100%;\r\n\twidth: 100vw;\r\n\ttop: 0px;\r\n\tpadding-top: var( --navbar-mask-height );\r\n\tbox-sizing: border-box;\r\n\ttransform: translateX( 100% );\r\n\ttransition: transform 0.6s;\r\n\tz-index: 5000;\r\n\toverflow-y: auto;\r\n}\r\n\r\n\t#page-container.module-mode #module-container {\r\n\t\ttransform: translateX( 0 );\r\n\t}\r\n\r\n\t.info-module {\r\n\t\theight: 100%;\r\n\t\twidth: 100%;\r\n\t\toverflow-y: auto;\r\n\t\tpadding: var( --menu-padding );\r\n\t\tpadding-top: calc( ( ( var(--menu-button-radius) * 2 ) + 15vh ) - var( --navbar-mask-height ) );;\r\n\t\tbox-sizing: border-box;\r\n\t}\r\n\r\n\t.info-module > * + * {\r\n\t\tmargin-top: 20px;\r\n\t}\r\n\r\n\t.info-module p {\r\n\t\tfont-size: calc( 11px + 1vmin );\r\n\t}\r\n\r\n\t.info-module a {\r\n\t\tcolor: var( --color1-0 );\r\n\t\tfont-size: calc( 11px + 1vmin );\r\n\t\ttext-decoration: none;\r\n\t}\r\n\r\n\t.info-module.contact a {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t}\r\n\r\n\t\t.info-module.contact a > * {\r\n\t\t\tmargin-right: 10px;\r\n\t\t}\r\n\r\n\t\t.info-module.contact a > i {\r\n\t\t\tfont-size: 30px;\r\n\t\t}\r\n\r\n\t.info-module h2 {\r\n\t\tfont-size: calc( 15px + 2vmin );\r\n\t}\r\n\r\n\t.info-module h3 {\r\n\t\tfont-size: calc( 13px + 1.2vmin );\r\n\t}\r\n\r\n\t/* */\r\n\r\n\t#samples-container {\r\n\t\tposition: relative;\r\n\t}\r\n\r\n\t\t#samples-container > * + * {\r\n\t\t\tmargin-top: 20px;\r\n\t\t}\r\n\r\n\t\t.sample-container {\r\n\t\t\tdisplay: block;\r\n\t\t\tposition: relative;\r\n\t\t\tbackground-color: white;\r\n\t\t\toverflow: hidden;\r\n\t\t\tborder-radius: 20px;\r\n\t\t\tborder-color: var( --color1-0 );\r\n\t\t\tborder-style: solid;\r\n\t\t\tborder-width: 4px;\r\n\t\t\twidth: 100%;\r\n\t\t\tmax-width: 65vh;\r\n\t\t\theight: 30vh;\r\n\t\t\tcursor: pointer;\r\n\t\t\ttransition: all 0.2s linear;\r\n\t\t\tbox-sizing: border-box;\r\n\t\t}\r\n\r\n\t\t\t.sample-container:hover {\r\n\t\t\t\tborder-color: var( --color1-1 );\r\n\t\t\t\tbackground-color: var( --color1-5 );\r\n\t\t\t}\r\n\r\n\t\t\t.sample-container>img {\r\n\t\t\t\theight: 80%;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tmargin-bottom: -4px;\r\n\t\t\t\tobject-fit: cover;\r\n\t\t\t}\r\n\r\n\t\t\t.sample-container>i {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 40%;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\tbackground-color: white;\r\n\t\t\t\theight: 50px;\r\n\t\t\t\twidth: 50px;\r\n\t\t\t\tborder-radius: 8px;\r\n\t\t\t\tborder-color: var( --color1-0 );\r\n\t\t\t\tborder-style: solid;\r\n\t\t\t\tborder-width: 3px;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\tfont-size: 30px;\r\n\t\t\t\tbox-sizing: border-box;\r\n\t\t\t\ttransform: translate(-50%, -50%);\r\n\t\t\t\ttransition: all 0.6s;\r\n\t\t\t}\r\n\r\n\t\t\t\t.sample-container:hover>i {\r\n\t\t\t\t\ttransform: translate(-50%, -50%) scale( 1.25 );\r\n\t\t\t\t\tborder-color: var( --color1-1 );\r\n\t\t\t\t\tcolor: var( --color1-1 );\r\n\t\t\t\t}\r\n\r\n\t\t\t.sample-container>div {\r\n\t\t\t\theight: 20%;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\tfont-size: calc( 11px + 1vmin );\r\n\t\t\t}\r\n\r\n\t\t\t\t.sample-container:hover>div {\r\n\t\t\t\t\tcolor: var( --color1-1 );;\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\r\n\t\t",
			"",
		]),
			(e.default = r);
	},
	function (t, e, n) {
		var i = n(2),
			r = n(11);
		"string" == typeof (r = r.__esModule ? r.default : r) &&
			(r = [[t.i, r, ""]]);
		var o = { insert: "head", singleton: !1 };
		i(r, o);
		t.exports = r.locals || {};
	},
	function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(0),
			r = n.n(i)()(!1);
		r.push([
			t.i,
			"\r\n:root {\r\n\t--scene-container-height: calc( 100vh + 12vw );\r\n\t--containers-line-width: 1px;\r\n}\r\n\r\n#dummy-container {\r\n\tposition: absolute;\r\n\tleft: 150vw;\r\n\theight: var( --scene-container-height );\r\n}\r\n\r\n#homepage-container {\r\n\tposition: relative;\r\n\toverflow-y: scroll;\r\n\twidth: 100%;\r\n\tz-index: 1;\r\n\tbackground-color: var(--color1-0);\r\n}\r\n\r\n\t.scene-container {\r\n\t\theight: var( --scene-container-height );\r\n\t\twidth: 100%;\r\n\t\tclip-path: polygon(0 -12vw, 50% 0, 100% -12vw, 100% calc( 100vh - var( --containers-line-width ) ), 50% calc( 100vh + 12vw - var( --containers-line-width ) ), 0 calc( 100vh - var( --containers-line-width ) ));\r\n\t\t-webkit-clip-path: polygon(0 -12vw, 50% 0, 100% -12vw, 100% calc( 100vh - var( --containers-line-width ) ), 50% calc( 100vh + 12vw - var( --containers-line-width ) ), 0 calc( 100vh - var( --containers-line-width ) ));\r\n\t\tborder-style: solid;\r\n\t}\r\n\r\n\t\t.scene-fixed-container {\r\n\t\t\tposition: fixed;\r\n\t\t\theight: 100vh;\r\n\t\t\twidth: 100%;\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 0;\r\n\t\t\toverflow: hidden;\r\n\t\t\tfilter: grayscale( 0% );\r\n\t\t\ttransition: filter 0.4s;\r\n\t\t}\r\n\r\n\t\t\t.scene-fixed-container.blurry {\r\n\t\t\t\tfilter: grayscale( 100% );\r\n\t\t\t}\r\n\r\n\t\t\t.scene-fixed-container .fa-caret-down {\r\n\t\t\t\tfont-size: calc( 20px + 3vmin );\r\n\t\t\t\tposition: fixed;\r\n\t\t\t\tbottom: 10px;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\tanimation: swing_homepage_carret 2s linear infinite;\r\n\t\t\t\ttransition: opacity 0.7s linear;\r\n\t\t\t\tz-index: 2;\r\n\t\t\t}\r\n\r\n\t\t\t\t.scene-fixed-container .fa-caret-down:hover {\r\n\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.scene-fixed-container .fa-caret-down.first {\r\n\t\t\t\t\tbottom: 60px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@keyframes swing_homepage_carret {\r\n\t\t\t\t\tfrom {\r\n\t\t\t\t\t\ttransform: translate( -50%, 0 );\r\n\t\t\t\t\t}\r\n\t\t\t\t\t50% {\r\n\t\t\t\t\t\ttransform: translate( -50%, -35% );\r\n\t\t\t\t\t}\r\n\t\t\t\t\tto {\r\n\t\t\t\t\t\ttransform: translate( -50%, 0 );\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\r\n\t\t/* TEXTUAL UI */\r\n\r\n\t\t\t.textual-ui {\r\n\t\t\t\tposition: fixed;\r\n\t\t\t\topacity: 1;\r\n\t\t\t\ttransition: opacity 1s;\r\n\t\t\t}\r\n\r\n\t\t\t\t.scene-fixed-container.blurry .textual-ui {\r\n\t\t\t\t\topacity: 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.scene-fixed-container.blurry i {\r\n\t\t\t\t\topacity: 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.textual-ui .link {\r\n\t\t\t\t\tuser-select: none;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media(hover: hover) and (pointer: fine) {\r\n\t\t\t\t\t.textual-ui .link:hover {\r\n\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\tbackground-color: var(--color1-1);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t.service-ui {\r\n\t\t\t\tright: 8vw;\r\n\t\t\t\tbottom: calc( 8vw + 30px );\r\n\t\t\t\tmax-width: 30vw;\r\n\t\t\t\tmin-width: 200px;\r\n\t\t\t}\r\n\r\n\t\t\t\t.service-ui > * {\r\n\t\t\t\t\tmargin: calc( 7px + 0.5vw ) 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.service-ui > p {\r\n\t\t\t\t\tfont-size: calc( 11px + 1vmin );\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.service-ui > div {\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\tfont-size: calc( 11px + 1.15vmin );\r\n\t\t\t\t\tpadding: 7px 20px;\r\n\t\t\t\t\tborder-radius: 500px;\r\n\t\t\t\t\tcolor:  var(--color1-5);\r\n\t\t\t\t\tbackground-color: var(--color1-0);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.service-ui > h2 {\r\n\t\t\t\t\tfont-size: calc( 15px + 2vmin );\r\n\t\t\t\t}\r\n\r\n\t\t\t#intro-textual-ui {\r\n\t\t\t\ttop: 70%;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\tpadding: 5px 0;\r\n\t\t\t\ttransform: translateX(-50%);\r\n\t\t\t\tfont-size: calc( 11px + 3vmin );\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\tcolor: var(--color1-0);\r\n\t\t\t\t/* border-bottom: var(--generic-border); */\r\n\t\t\t\twhite-space: nowrap;\r\n\t\t\t}\r\n\r\n\t\t\t#contact-textual-ui {\r\n\t\t\t\tbottom: calc( 10vw + 30px );\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\tpadding: 15px 25px;\r\n\t\t\t\ttransform: translateX(-50%);\r\n\t\t\t\twhite-space: nowrap;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t}\r\n\r\n\t\t\t\t#contact-textual-ui .link {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t\talign-items: center;\r\n\t\t\t\t}\r\n\r\n",
			"",
		]),
			(e.default = r);
	},
	function (t, e, n) {
		"use strict";
		n.r(e);
		n(3), n(5);
		const i = document.createElement("I");
		function r() {
			i.classList.remove("fa-times"),
				i.classList.remove("fa-bars"),
				i.classList.remove("fa-arrow-left");
		}
		function o(t) {
			switch (
				(i.classList.remove("animate-menu-icon"),
				setTimeout(() => {
					i.classList.add("animate-menu-icon");
				}, 0),
				t)
			) {
				case "menu":
					setTimeout(() => {
						r(), i.classList.add("fa-bars");
					}, 200);
					break;
				case "close":
					setTimeout(() => {
						r(), i.classList.add("fa-times");
					}, 200);
					break;
				case "back":
					setTimeout(() => {
						r(), i.classList.add("fa-arrow-left");
					}, 200);
			}
		}
		(i.id = "menu-button"), i.classList.add("fa", "fa-bars");
		var s = i;
		n(7);
		const a = document.createElement("DIV");
		function c(t) {
			const e = document.createElement("DIV");
			return (
				e.classList.add("link"),
				e.addEventListener("click", () => {
					!(function (t) {
						var e = new CustomEvent("clicklink", { detail: { moduleName: t } });
						a.dispatchEvent(e);
					})(t);
				}),
				e
			);
		}
		const l = document.createElement("DIV");
		l.id = "menu";
		const h = document.createElement("DIV");
		h.id = "menu-content";
		const u = document.createElement("DIV");
		(u.id = "links-container"), h.append(u);
		const d = document.createElement("DIV");
		(d.id = "chapters-container"),
			u.append(d),
			d.append(f("Technical Consultation", "expertise")),
			d.append(f("Prototypes & 3D Viewers", "prototypes")),
			d.append(f("Casting Parts", "casting parts")),
			d.append(f("Technical Documentation", "technical doc")),
			d.append(f("Web Development", "webdev"));
		const p = document.createElement("DIV");
		function f(t, e) {
			const n = c(e);
			n.classList.add("menu-link"), (n.innerHTML = t);
			const i = document.createElement("DIV");
			i.classList.add("menu-link-arrow-container"), n.append(i);
			const r = document.createElement("I");
			return r.classList.add("fa", "fa-caret-right"), i.append(r), n;
		}
		(p.id = "more-info-container"),
			u.append(p),
			p.append(f("See some samples", "samples")),
			p.append(f("Contact", "contact"));
		var m = l;
		n(1);
		var g = {
			homepage: {
				global: { more: "learn more" },
				intro: { intro: "High Jewellery Design" },
				expertise: {
					title: "Consulting",
					text: "Having worked with the most demanding \n\t\t\t\thigh jewelry companies, I can advise you \n\t\t\t\twisely with your projects.",
				},
				prototypes: {
					title: "Prototypes & viewers",
					text: "Early in development you \n\t\t\t\twill review resin \n\t\t\t\tprototypes and photorealistic \n\t\t\t\tviewers in order to pinpoint \n\t\t\t\tissues fast and respect \n\t\t\t\tyour schedules.",
				},
				casting: {
					title: "Casting parts",
					text: "Once your jewel is designed, \n\t\t\t\tI can supply lost-wax casting parts \n\t\t\t\tin all kind of metals : \n\t\t\t\tgold, silver, platinum, \n\t\t\t\tor even titanium.",
				},
				doc: {
					title: "Documentation",
					text: "I can provide the documentation that suit your need.  \n\t\t\t\tAssembly instructions, stone setting blueprints, painting layouts, \n\t\t\t\teverything is covered.",
				},
				contact: {
					title: "More information :",
					webdevLink: "Web development",
					samplesLink: "Review samples",
					contactLink: "Contact",
				},
			},
			modules: {
				expertise: {
					title: "Consulting",
					presentation: {
						title: "Who am I ?",
						speech1:
							"I worked for more than two years as a \n\t\t\t\t\ttechnical designer for <i>Lasbleiz Fournier Vitiello</i> \n\t\t\t\t\tin Paris, which is a workshop famous in \n\t\t\t\t\tPlace Vendôme high jewelry community for \n\t\t\t\t\tits quality work. Thereafter I lived in \n\t\t\t\t\tHong Kong for another couple of years, \n\t\t\t\t\tworking for <i>Michelle Ong</i> who makes jewels \n\t\t\t\t\tfor the finest amateurs of this city-state.",
						speech2:
							"Armed with the design and project management \n\t\t\t\t\t\tskills acquired during these years, \n\t\t\t\t\t\tI can give you precious advices to make \n\t\t\t\t\t\tyour projects happen.",
					},
					service: {
						title: "My service",
						speech:
							"You can hire my to manage a design project of yours,\n\t\t\t\t\t or simply as an advisor who can help you making the right\n\t\t\t\t\t decision when you have some doubts.",
					},
				},
				prototypes: {
					title: "Prototypes & 3D viewers",
					speech1:
						"Designing is never a seamless process. \n\t\t\t\t\tOur task will be to work jointly to \n\t\t\t\t\treveal all the unforeseen details and \n\t\t\t\t\toversights of the original project, \n\t\t\t\t\tin order to arrive at a product \n\t\t\t\t\testhetically and technically flawless \n\t\t\t\t\tat the delivery date you will request.",
					speech2:
						"To arrive at this perfect design and \n\t\t\t\t\tto save us from discovering flaws \n\t\t\t\t\tlate in product development, \n\t\t\t\t\twe will regularly organize design reviews \n\t\t\t\t\tsupported by resin prototypes and/or 3D viewers.",
					speech3:
						"If you don't happen to own a 3D printer to print\n\t\t\t\t\tthe prototypes, don't worry : I can handle that\n\t\t\t\t\tfor you, and ship them to your office.",
				},
				casting: {
					title: "Casting Parts",
					speech1:
						"Your project is designed. Now you can \n\t\t\t\t\tchoose lost-wax casting via 3D printing to \n\t\t\t\t\tspeed up your process, and ensure that the \n\t\t\t\t\tfinished jewel you will get is as close as possible \n\t\t\t\t\tfrom what we designed together. \n\t\t\t\t\tArmed with my jewelry handcrafting know-how, \n\t\t\t\t\tparticularly in the stone setting field, \n\t\t\t\t\tI can adapt your design to the technical requirements \n\t\t\t\t\tof 3D printing, casting, and all the subsequent stages \n\t\t\t\t\tof jewelry handcrafting.",
					speech2:
						"If you are not lucky enough to own a 3D printer, \n\t\t\t\t\tI offer to ship the parts directly to your workshop\n\t\t\t\t\tvia reliable conveyor.",
				},
				doc: {
					title: "Technical Documentation",
					speech1:
						"Once your project is designed, \n\t\t\t\t\tyou are not left alone in the wild. \n\t\t\t\t\tI send you all the documentation you need to \n\t\t\t\t\tassemble the parts, set the stones, \n\t\t\t\t\tand even communicate and advertise about it.",
					speech2:
						"I adapt the documentation to every project, \n\t\t\t\t\tand listen to your special demands, \n\t\t\t\t\tbe it parts spreadsheets for your inventory, documents for public presentations \n\t\t\t\t\tor customer use, 4-views layouts for painting... \n\t\t\t\t\tName your own needs.",
				},
				webdev: {
					title: "Web Development",
					speech1:
						"Web development has been my passion \n\t\t\t\t\tfor a couple of years, and I offer my \n\t\t\t\t\tservices in this field. My skills in jewelry, \n\t\t\t\t\t3D modeling and web development is a rare \n\t\t\t\t\tand precious combination if you are a \n\t\t\t\t\tjewelry company with a project of high-end online service.",
					speech2:
						"This website you are browsing was entirely designed and \n\t\t\t\t\tcoded by myself with the latest web technologies\n\t\t\t\t\t(&#xA0;Node.js, Three.js, Webpack, etc...&#xA0;).\n\t\t\t\t\tThe 3D models displayed in the various scenes \n\t\t\t\t\tof the front page are mine, and necessitated\n\t\t\t\t\tsome specific treatment for realtime rendering.",
				},
			},
		};
		const v = document.createElement("DIV");
		v.classList.add("info-module");
		const y = document.createElement("H2");
		(y.innerHTML = g.modules.expertise.title), v.append(y);
		const x = document.createElement("H3");
		x.innerHTML = g.modules.expertise.presentation.title;
		const b = document.createElement("P");
		b.innerHTML = g.modules.expertise.presentation.speech1;
		const w = document.createElement("P");
		(w.innerHTML = g.modules.expertise.presentation.speech2), v.append(x, b, w);
		const _ = document.createElement("H3");
		_.innerHTML = g.modules.expertise.service.title;
		const M = document.createElement("P");
		(M.innerHTML = g.modules.expertise.service.speech), v.append(_, M);
		var S = v;
		const T = document.createElement("DIV");
		T.classList.add("info-module");
		const E = document.createElement("H2");
		(E.innerHTML = g.modules.prototypes.title), T.append(E);
		const A = document.createElement("P");
		A.innerHTML = g.modules.prototypes.speech1;
		const L = document.createElement("P");
		L.innerHTML = g.modules.prototypes.speech2;
		const R = document.createElement("P");
		(R.innerHTML = g.modules.prototypes.speech3), T.append(A, L, R);
		var P = T;
		const C = document.createElement("DIV");
		C.classList.add("info-module");
		const I = document.createElement("H2");
		(I.innerHTML = g.modules.casting.title), C.append(I);
		const O = document.createElement("P");
		O.innerHTML = g.modules.casting.speech1;
		const D = document.createElement("P");
		(D.innerHTML = g.modules.casting.speech2), C.append(O, D);
		var N = C;
		const z = document.createElement("DIV");
		z.classList.add("info-module");
		const U = document.createElement("H2");
		(U.innerHTML = g.modules.doc.title), z.append(U);
		const H = document.createElement("P");
		H.innerHTML = g.modules.doc.speech1;
		const B = document.createElement("P");
		(B.innerHTML = g.modules.doc.speech2), z.append(H, B);
		var F = z;
		const k = document.createElement("DIV");
		k.classList.add("info-module", "contact");
		const G = document.createElement("H2");
		(G.innerHTML = "Contact"), k.append(G);
		const j = document.createElement("P");
		j.innerHTML =
			"I am eager to answer any information demand and make quotation tailored to your special needs. I you want to discuss verbally, let's organize a Skype or Zoom meeting with you and your team.";
		const V = document.createElement("A");
		(V.target = "_blank"),
			(V.ondragstart = () => !1),
			(V.href = "mailto:procoder333@gmail.com");
		const W = document.createElement("I");
		W.classList.add("fa", "fa-envelope");
		const q = document.createElement("P");
		(q.innerHTML = "procoder333@gmail.com"), V.append(W, q);
		const X = document.createElement("A");
		(X.target = "_blank"),
			(X.ondragstart = () => !1),
			(X.draggable = "false"),
			(X.href = "https://github.com/kevin-scott630");
		const Y = document.createElement("I");
		Y.classList.add("fa", "fa-github"), X.append(Y, "Github");
		const Z = document.createElement("A");
		(Z.target = "_blank"),
			(Z.ondragstart = () => !1),
			(Z.draggable = "false"),
			(Z.href = "https://www.linkedin.com/in/kevin-scott-2353b1195");
		const J = document.createElement("I");
		J.classList.add("fa", "fa-linkedin-square"),
			Z.append(J, "Linkedin"),
			k.append(j, V, X, Z);
		var K = k;
		const Q = document.createElement("DIV");
		Q.classList.add("info-module");
		const $ = document.createElement("H2");
		($.innerHTML = "Samples"), Q.append($);
		const tt = document.createElement("DIV");
		function et(t, e, n) {
			const i = document.createElement("A");
			i.classList.add("sample-container"), (i.href = n);
			const r = document.createElement("IMG");
			r.src = e;
			const o = document.createElement("I");
			o.classList.add("fa", "fa-download");
			const s = document.createElement("DIV");
			(s.innerHTML = t), i.append(o, r, s), tt.append(i);
		}
		(tt.id = "samples-container"),
			Q.append(tt),
			et(
				"Photorealistic Rendering",
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/images/render-teaser.jpg",
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/samples/felix_mariotto_renders.zip"
			),
			et(
				"CAD 3D Models",
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/images/cad-teaser.jpg",
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/samples/felix_mariotto_cad.zip"
			);
		var nt = Q;
		const it = document.createElement("DIV");
		it.classList.add("info-module");
		const rt = document.createElement("H2");
		(rt.innerHTML = g.modules.webdev.title), it.append(rt);
		const ot = document.createElement("P");
		ot.innerHTML = g.modules.webdev.speech1;
		const st = document.createElement("P");
		(st.innerHTML = g.modules.webdev.speech2), it.append(ot, st);
		var at = it;
		const ct = document.createElement("DIV");
		ct.id = "module-container";
		var lt = ct;
		n(10);
		void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)),
			void 0 === Number.isInteger &&
				(Number.isInteger = function (t) {
					return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
				}),
			void 0 === Math.sign &&
				(Math.sign = function (t) {
					return t < 0 ? -1 : t > 0 ? 1 : +t;
				}),
			"name" in Function.prototype == !1 &&
				Object.defineProperty(Function.prototype, "name", {
					get: function () {
						return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
					},
				}),
			void 0 === Object.assign &&
				(Object.assign = function (t) {
					if (null == t)
						throw new TypeError("Cannot convert undefined or null to object");
					const e = Object(t);
					for (let t = 1; t < arguments.length; t++) {
						const n = arguments[t];
						if (null != n)
							for (const t in n)
								Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
					}
					return e;
				});
		function ht() {}
		Object.assign(ht.prototype, {
			addEventListener: function (t, e) {
				void 0 === this._listeners && (this._listeners = {});
				const n = this._listeners;
				void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
			},
			hasEventListener: function (t, e) {
				if (void 0 === this._listeners) return !1;
				const n = this._listeners;
				return void 0 !== n[t] && -1 !== n[t].indexOf(e);
			},
			removeEventListener: function (t, e) {
				if (void 0 === this._listeners) return;
				const n = this._listeners[t];
				if (void 0 !== n) {
					const t = n.indexOf(e);
					-1 !== t && n.splice(t, 1);
				}
			},
			dispatchEvent: function (t) {
				if (void 0 === this._listeners) return;
				const e = this._listeners[t.type];
				if (void 0 !== e) {
					t.target = this;
					const n = e.slice(0);
					for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
				}
			},
		});
		const ut = [];
		for (let t = 0; t < 256; t++) ut[t] = (t < 16 ? "0" : "") + t.toString(16);
		let dt = 1234567;
		const pt = {
			DEG2RAD: Math.PI / 180,
			RAD2DEG: 180 / Math.PI,
			generateUUID: function () {
				const t = (4294967295 * Math.random()) | 0,
					e = (4294967295 * Math.random()) | 0,
					n = (4294967295 * Math.random()) | 0,
					i = (4294967295 * Math.random()) | 0;
				return (
					ut[255 & t] +
					ut[(t >> 8) & 255] +
					ut[(t >> 16) & 255] +
					ut[(t >> 24) & 255] +
					"-" +
					ut[255 & e] +
					ut[(e >> 8) & 255] +
					"-" +
					ut[((e >> 16) & 15) | 64] +
					ut[(e >> 24) & 255] +
					"-" +
					ut[(63 & n) | 128] +
					ut[(n >> 8) & 255] +
					"-" +
					ut[(n >> 16) & 255] +
					ut[(n >> 24) & 255] +
					ut[255 & i] +
					ut[(i >> 8) & 255] +
					ut[(i >> 16) & 255] +
					ut[(i >> 24) & 255]
				).toUpperCase();
			},
			clamp: function (t, e, n) {
				return Math.max(e, Math.min(n, t));
			},
			euclideanModulo: function (t, e) {
				return ((t % e) + e) % e;
			},
			mapLinear: function (t, e, n, i, r) {
				return i + ((t - e) * (r - i)) / (n - e);
			},
			lerp: function (t, e, n) {
				return (1 - n) * t + n * e;
			},
			smoothstep: function (t, e, n) {
				return t <= e
					? 0
					: t >= n
					? 1
					: (t = (t - e) / (n - e)) * t * (3 - 2 * t);
			},
			smootherstep: function (t, e, n) {
				return t <= e
					? 0
					: t >= n
					? 1
					: (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10);
			},
			randInt: function (t, e) {
				return t + Math.floor(Math.random() * (e - t + 1));
			},
			randFloat: function (t, e) {
				return t + Math.random() * (e - t);
			},
			randFloatSpread: function (t) {
				return t * (0.5 - Math.random());
			},
			seededRandom: function (t) {
				return (
					void 0 !== t && (dt = t % 2147483647),
					(dt = (16807 * dt) % 2147483647),
					(dt - 1) / 2147483646
				);
			},
			degToRad: function (t) {
				return t * pt.DEG2RAD;
			},
			radToDeg: function (t) {
				return t * pt.RAD2DEG;
			},
			isPowerOfTwo: function (t) {
				return 0 == (t & (t - 1)) && 0 !== t;
			},
			ceilPowerOfTwo: function (t) {
				return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
			},
			floorPowerOfTwo: function (t) {
				return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
			},
			setQuaternionFromProperEuler: function (t, e, n, i, r) {
				const o = Math.cos,
					s = Math.sin,
					a = o(n / 2),
					c = s(n / 2),
					l = o((e + i) / 2),
					h = s((e + i) / 2),
					u = o((e - i) / 2),
					d = s((e - i) / 2),
					p = o((i - e) / 2),
					f = s((i - e) / 2);
				switch (r) {
					case "XYX":
						t.set(a * h, c * u, c * d, a * l);
						break;
					case "YZY":
						t.set(c * d, a * h, c * u, a * l);
						break;
					case "ZXZ":
						t.set(c * u, c * d, a * h, a * l);
						break;
					case "XZX":
						t.set(a * h, c * f, c * p, a * l);
						break;
					case "YXY":
						t.set(c * p, a * h, c * f, a * l);
						break;
					case "ZYZ":
						t.set(c * f, c * p, a * h, a * l);
						break;
					default:
						console.warn(
							"THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
								r
						);
				}
			},
		};
		function ft(t = 0, e = 0) {
			(this.x = t), (this.y = e);
		}
		function mt() {
			(this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
				arguments.length > 0 &&
					console.error(
						"THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
					);
		}
		let gt;
		Object.defineProperties(ft.prototype, {
			width: {
				get: function () {
					return this.x;
				},
				set: function (t) {
					this.x = t;
				},
			},
			height: {
				get: function () {
					return this.y;
				},
				set: function (t) {
					this.y = t;
				},
			},
		}),
			Object.assign(ft.prototype, {
				isVector2: !0,
				set: function (t, e) {
					return (this.x = t), (this.y = e), this;
				},
				setScalar: function (t) {
					return (this.x = t), (this.y = t), this;
				},
				setX: function (t) {
					return (this.x = t), this;
				},
				setY: function (t) {
					return (this.y = t), this;
				},
				setComponent: function (t, e) {
					switch (t) {
						case 0:
							this.x = e;
							break;
						case 1:
							this.y = e;
							break;
						default:
							throw new Error("index is out of range: " + t);
					}
					return this;
				},
				getComponent: function (t) {
					switch (t) {
						case 0:
							return this.x;
						case 1:
							return this.y;
						default:
							throw new Error("index is out of range: " + t);
					}
				},
				clone: function () {
					return new this.constructor(this.x, this.y);
				},
				copy: function (t) {
					return (this.x = t.x), (this.y = t.y), this;
				},
				add: function (t, e) {
					return void 0 !== e
						? (console.warn(
								"THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
						  ),
						  this.addVectors(t, e))
						: ((this.x += t.x), (this.y += t.y), this);
				},
				addScalar: function (t) {
					return (this.x += t), (this.y += t), this;
				},
				addVectors: function (t, e) {
					return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
				},
				addScaledVector: function (t, e) {
					return (this.x += t.x * e), (this.y += t.y * e), this;
				},
				sub: function (t, e) {
					return void 0 !== e
						? (console.warn(
								"THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
						  ),
						  this.subVectors(t, e))
						: ((this.x -= t.x), (this.y -= t.y), this);
				},
				subScalar: function (t) {
					return (this.x -= t), (this.y -= t), this;
				},
				subVectors: function (t, e) {
					return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
				},
				multiply: function (t) {
					return (this.x *= t.x), (this.y *= t.y), this;
				},
				multiplyScalar: function (t) {
					return (this.x *= t), (this.y *= t), this;
				},
				divide: function (t) {
					return (this.x /= t.x), (this.y /= t.y), this;
				},
				divideScalar: function (t) {
					return this.multiplyScalar(1 / t);
				},
				applyMatrix3: function (t) {
					const e = this.x,
						n = this.y,
						i = t.elements;
					return (
						(this.x = i[0] * e + i[3] * n + i[6]),
						(this.y = i[1] * e + i[4] * n + i[7]),
						this
					);
				},
				min: function (t) {
					return (
						(this.x = Math.min(this.x, t.x)),
						(this.y = Math.min(this.y, t.y)),
						this
					);
				},
				max: function (t) {
					return (
						(this.x = Math.max(this.x, t.x)),
						(this.y = Math.max(this.y, t.y)),
						this
					);
				},
				clamp: function (t, e) {
					return (
						(this.x = Math.max(t.x, Math.min(e.x, this.x))),
						(this.y = Math.max(t.y, Math.min(e.y, this.y))),
						this
					);
				},
				clampScalar: function (t, e) {
					return (
						(this.x = Math.max(t, Math.min(e, this.x))),
						(this.y = Math.max(t, Math.min(e, this.y))),
						this
					);
				},
				clampLength: function (t, e) {
					const n = this.length();
					return this.divideScalar(n || 1).multiplyScalar(
						Math.max(t, Math.min(e, n))
					);
				},
				floor: function () {
					return (
						(this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
					);
				},
				ceil: function () {
					return (
						(this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this
					);
				},
				round: function () {
					return (
						(this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
					);
				},
				roundToZero: function () {
					return (
						(this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
						(this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
						this
					);
				},
				negate: function () {
					return (this.x = -this.x), (this.y = -this.y), this;
				},
				dot: function (t) {
					return this.x * t.x + this.y * t.y;
				},
				cross: function (t) {
					return this.x * t.y - this.y * t.x;
				},
				lengthSq: function () {
					return this.x * this.x + this.y * this.y;
				},
				length: function () {
					return Math.sqrt(this.x * this.x + this.y * this.y);
				},
				manhattanLength: function () {
					return Math.abs(this.x) + Math.abs(this.y);
				},
				normalize: function () {
					return this.divideScalar(this.length() || 1);
				},
				angle: function () {
					return Math.atan2(-this.y, -this.x) + Math.PI;
				},
				distanceTo: function (t) {
					return Math.sqrt(this.distanceToSquared(t));
				},
				distanceToSquared: function (t) {
					const e = this.x - t.x,
						n = this.y - t.y;
					return e * e + n * n;
				},
				manhattanDistanceTo: function (t) {
					return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
				},
				setLength: function (t) {
					return this.normalize().multiplyScalar(t);
				},
				lerp: function (t, e) {
					return (
						(this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this
					);
				},
				lerpVectors: function (t, e, n) {
					return (
						(this.x = t.x + (e.x - t.x) * n),
						(this.y = t.y + (e.y - t.y) * n),
						this
					);
				},
				equals: function (t) {
					return t.x === this.x && t.y === this.y;
				},
				fromArray: function (t, e) {
					return (
						void 0 === e && (e = 0), (this.x = t[e]), (this.y = t[e + 1]), this
					);
				},
				toArray: function (t, e) {
					return (
						void 0 === t && (t = []),
						void 0 === e && (e = 0),
						(t[e] = this.x),
						(t[e + 1] = this.y),
						t
					);
				},
				fromBufferAttribute: function (t, e, n) {
					return (
						void 0 !== n &&
							console.warn(
								"THREE.Vector2: offset has been removed from .fromBufferAttribute()."
							),
						(this.x = t.getX(e)),
						(this.y = t.getY(e)),
						this
					);
				},
				rotateAround: function (t, e) {
					const n = Math.cos(e),
						i = Math.sin(e),
						r = this.x - t.x,
						o = this.y - t.y;
					return (
						(this.x = r * n - o * i + t.x), (this.y = r * i + o * n + t.y), this
					);
				},
				random: function () {
					return (this.x = Math.random()), (this.y = Math.random()), this;
				},
			}),
			Object.assign(mt.prototype, {
				isMatrix3: !0,
				set: function (t, e, n, i, r, o, s, a, c) {
					const l = this.elements;
					return (
						(l[0] = t),
						(l[1] = i),
						(l[2] = s),
						(l[3] = e),
						(l[4] = r),
						(l[5] = a),
						(l[6] = n),
						(l[7] = o),
						(l[8] = c),
						this
					);
				},
				identity: function () {
					return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
				},
				clone: function () {
					return new this.constructor().fromArray(this.elements);
				},
				copy: function (t) {
					const e = this.elements,
						n = t.elements;
					return (
						(e[0] = n[0]),
						(e[1] = n[1]),
						(e[2] = n[2]),
						(e[3] = n[3]),
						(e[4] = n[4]),
						(e[5] = n[5]),
						(e[6] = n[6]),
						(e[7] = n[7]),
						(e[8] = n[8]),
						this
					);
				},
				extractBasis: function (t, e, n) {
					return (
						t.setFromMatrix3Column(this, 0),
						e.setFromMatrix3Column(this, 1),
						n.setFromMatrix3Column(this, 2),
						this
					);
				},
				setFromMatrix4: function (t) {
					const e = t.elements;
					return (
						this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
						this
					);
				},
				multiply: function (t) {
					return this.multiplyMatrices(this, t);
				},
				premultiply: function (t) {
					return this.multiplyMatrices(t, this);
				},
				multiplyMatrices: function (t, e) {
					const n = t.elements,
						i = e.elements,
						r = this.elements,
						o = n[0],
						s = n[3],
						a = n[6],
						c = n[1],
						l = n[4],
						h = n[7],
						u = n[2],
						d = n[5],
						p = n[8],
						f = i[0],
						m = i[3],
						g = i[6],
						v = i[1],
						y = i[4],
						x = i[7],
						b = i[2],
						w = i[5],
						_ = i[8];
					return (
						(r[0] = o * f + s * v + a * b),
						(r[3] = o * m + s * y + a * w),
						(r[6] = o * g + s * x + a * _),
						(r[1] = c * f + l * v + h * b),
						(r[4] = c * m + l * y + h * w),
						(r[7] = c * g + l * x + h * _),
						(r[2] = u * f + d * v + p * b),
						(r[5] = u * m + d * y + p * w),
						(r[8] = u * g + d * x + p * _),
						this
					);
				},
				multiplyScalar: function (t) {
					const e = this.elements;
					return (
						(e[0] *= t),
						(e[3] *= t),
						(e[6] *= t),
						(e[1] *= t),
						(e[4] *= t),
						(e[7] *= t),
						(e[2] *= t),
						(e[5] *= t),
						(e[8] *= t),
						this
					);
				},
				determinant: function () {
					const t = this.elements,
						e = t[0],
						n = t[1],
						i = t[2],
						r = t[3],
						o = t[4],
						s = t[5],
						a = t[6],
						c = t[7],
						l = t[8];
					return (
						e * o * l -
						e * s * c -
						n * r * l +
						n * s * a +
						i * r * c -
						i * o * a
					);
				},
				getInverse: function (t, e) {
					void 0 !== e &&
						console.warn(
							"THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate."
						);
					const n = t.elements,
						i = this.elements,
						r = n[0],
						o = n[1],
						s = n[2],
						a = n[3],
						c = n[4],
						l = n[5],
						h = n[6],
						u = n[7],
						d = n[8],
						p = d * c - l * u,
						f = l * h - d * a,
						m = u * a - c * h,
						g = r * p + o * f + s * m;
					if (0 === g) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
					const v = 1 / g;
					return (
						(i[0] = p * v),
						(i[1] = (s * u - d * o) * v),
						(i[2] = (l * o - s * c) * v),
						(i[3] = f * v),
						(i[4] = (d * r - s * h) * v),
						(i[5] = (s * a - l * r) * v),
						(i[6] = m * v),
						(i[7] = (o * h - u * r) * v),
						(i[8] = (c * r - o * a) * v),
						this
					);
				},
				transpose: function () {
					let t;
					const e = this.elements;
					return (
						(t = e[1]),
						(e[1] = e[3]),
						(e[3] = t),
						(t = e[2]),
						(e[2] = e[6]),
						(e[6] = t),
						(t = e[5]),
						(e[5] = e[7]),
						(e[7] = t),
						this
					);
				},
				getNormalMatrix: function (t) {
					return this.setFromMatrix4(t).getInverse(this).transpose();
				},
				transposeIntoArray: function (t) {
					const e = this.elements;
					return (
						(t[0] = e[0]),
						(t[1] = e[3]),
						(t[2] = e[6]),
						(t[3] = e[1]),
						(t[4] = e[4]),
						(t[5] = e[7]),
						(t[6] = e[2]),
						(t[7] = e[5]),
						(t[8] = e[8]),
						this
					);
				},
				setUvTransform: function (t, e, n, i, r, o, s) {
					const a = Math.cos(r),
						c = Math.sin(r);
					this.set(
						n * a,
						n * c,
						-n * (a * o + c * s) + o + t,
						-i * c,
						i * a,
						-i * (-c * o + a * s) + s + e,
						0,
						0,
						1
					);
				},
				scale: function (t, e) {
					const n = this.elements;
					return (
						(n[0] *= t),
						(n[3] *= t),
						(n[6] *= t),
						(n[1] *= e),
						(n[4] *= e),
						(n[7] *= e),
						this
					);
				},
				rotate: function (t) {
					const e = Math.cos(t),
						n = Math.sin(t),
						i = this.elements,
						r = i[0],
						o = i[3],
						s = i[6],
						a = i[1],
						c = i[4],
						l = i[7];
					return (
						(i[0] = e * r + n * a),
						(i[3] = e * o + n * c),
						(i[6] = e * s + n * l),
						(i[1] = -n * r + e * a),
						(i[4] = -n * o + e * c),
						(i[7] = -n * s + e * l),
						this
					);
				},
				translate: function (t, e) {
					const n = this.elements;
					return (
						(n[0] += t * n[2]),
						(n[3] += t * n[5]),
						(n[6] += t * n[8]),
						(n[1] += e * n[2]),
						(n[4] += e * n[5]),
						(n[7] += e * n[8]),
						this
					);
				},
				equals: function (t) {
					const e = this.elements,
						n = t.elements;
					for (let t = 0; t < 9; t++) if (e[t] !== n[t]) return !1;
					return !0;
				},
				fromArray: function (t, e) {
					void 0 === e && (e = 0);
					for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
					return this;
				},
				toArray: function (t, e) {
					void 0 === t && (t = []), void 0 === e && (e = 0);
					const n = this.elements;
					return (
						(t[e] = n[0]),
						(t[e + 1] = n[1]),
						(t[e + 2] = n[2]),
						(t[e + 3] = n[3]),
						(t[e + 4] = n[4]),
						(t[e + 5] = n[5]),
						(t[e + 6] = n[6]),
						(t[e + 7] = n[7]),
						(t[e + 8] = n[8]),
						t
					);
				},
			});
		const vt = {
			getDataURL: function (t) {
				if (/^data:/i.test(t.src)) return t.src;
				if ("undefined" == typeof HTMLCanvasElement) return t.src;
				let e;
				if (t instanceof HTMLCanvasElement) e = t;
				else {
					void 0 === gt &&
						(gt = document.createElementNS(
							"http://www.w3.org/1999/xhtml",
							"canvas"
						)),
						(gt.width = t.width),
						(gt.height = t.height);
					const n = gt.getContext("2d");
					t instanceof ImageData
						? n.putImageData(t, 0, 0)
						: n.drawImage(t, 0, 0, t.width, t.height),
						(e = gt);
				}
				return e.width > 2048 || e.height > 2048
					? e.toDataURL("image/jpeg", 0.6)
					: e.toDataURL("image/png");
			},
		};
		let yt = 0;
		function xt(t, e, n, i, r, o, s, a, c, l) {
			Object.defineProperty(this, "id", { value: yt++ }),
				(this.uuid = pt.generateUUID()),
				(this.name = ""),
				(this.image = void 0 !== t ? t : xt.DEFAULT_IMAGE),
				(this.mipmaps = []),
				(this.mapping = void 0 !== e ? e : xt.DEFAULT_MAPPING),
				(this.wrapS = void 0 !== n ? n : 1001),
				(this.wrapT = void 0 !== i ? i : 1001),
				(this.magFilter = void 0 !== r ? r : 1006),
				(this.minFilter = void 0 !== o ? o : 1008),
				(this.anisotropy = void 0 !== c ? c : 1),
				(this.format = void 0 !== s ? s : 1023),
				(this.internalFormat = null),
				(this.type = void 0 !== a ? a : 1009),
				(this.offset = new ft(0, 0)),
				(this.repeat = new ft(1, 1)),
				(this.center = new ft(0, 0)),
				(this.rotation = 0),
				(this.matrixAutoUpdate = !0),
				(this.matrix = new mt()),
				(this.generateMipmaps = !0),
				(this.premultiplyAlpha = !1),
				(this.flipY = !0),
				(this.unpackAlignment = 4),
				(this.encoding = void 0 !== l ? l : 3e3),
				(this.version = 0),
				(this.onUpdate = null);
		}
		function bt(t = 0, e = 0, n = 0, i = 1) {
			(this.x = t), (this.y = e), (this.z = n), (this.w = i);
		}
		function wt(t, e, n) {
			(this.width = t),
				(this.height = e),
				(this.scissor = new bt(0, 0, t, e)),
				(this.scissorTest = !1),
				(this.viewport = new bt(0, 0, t, e)),
				(n = n || {}),
				(this.texture = new xt(
					void 0,
					n.mapping,
					n.wrapS,
					n.wrapT,
					n.magFilter,
					n.minFilter,
					n.format,
					n.type,
					n.anisotropy,
					n.encoding
				)),
				(this.texture.image = {}),
				(this.texture.image.width = t),
				(this.texture.image.height = e),
				(this.texture.generateMipmaps =
					void 0 !== n.generateMipmaps && n.generateMipmaps),
				(this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006),
				(this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer),
				(this.stencilBuffer = void 0 === n.stencilBuffer || n.stencilBuffer),
				(this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null);
		}
		function _t(t, e, n) {
			wt.call(this, t, e, n), (this.samples = 4);
		}
		function Mt(t = 0, e = 0, n = 0, i = 1) {
			(this._x = t), (this._y = e), (this._z = n), (this._w = i);
		}
		(xt.DEFAULT_IMAGE = void 0),
			(xt.DEFAULT_MAPPING = 300),
			(xt.prototype = Object.assign(Object.create(ht.prototype), {
				constructor: xt,
				isTexture: !0,
				updateMatrix: function () {
					this.matrix.setUvTransform(
						this.offset.x,
						this.offset.y,
						this.repeat.x,
						this.repeat.y,
						this.rotation,
						this.center.x,
						this.center.y
					);
				},
				clone: function () {
					return new this.constructor().copy(this);
				},
				copy: function (t) {
					return (
						(this.name = t.name),
						(this.image = t.image),
						(this.mipmaps = t.mipmaps.slice(0)),
						(this.mapping = t.mapping),
						(this.wrapS = t.wrapS),
						(this.wrapT = t.wrapT),
						(this.magFilter = t.magFilter),
						(this.minFilter = t.minFilter),
						(this.anisotropy = t.anisotropy),
						(this.format = t.format),
						(this.internalFormat = t.internalFormat),
						(this.type = t.type),
						this.offset.copy(t.offset),
						this.repeat.copy(t.repeat),
						this.center.copy(t.center),
						(this.rotation = t.rotation),
						(this.matrixAutoUpdate = t.matrixAutoUpdate),
						this.matrix.copy(t.matrix),
						(this.generateMipmaps = t.generateMipmaps),
						(this.premultiplyAlpha = t.premultiplyAlpha),
						(this.flipY = t.flipY),
						(this.unpackAlignment = t.unpackAlignment),
						(this.encoding = t.encoding),
						this
					);
				},
				toJSON: function (t) {
					const e = void 0 === t || "string" == typeof t;
					if (!e && void 0 !== t.textures[this.uuid])
						return t.textures[this.uuid];
					const n = {
						metadata: {
							version: 4.5,
							type: "Texture",
							generator: "Texture.toJSON",
						},
						uuid: this.uuid,
						name: this.name,
						mapping: this.mapping,
						repeat: [this.repeat.x, this.repeat.y],
						offset: [this.offset.x, this.offset.y],
						center: [this.center.x, this.center.y],
						rotation: this.rotation,
						wrap: [this.wrapS, this.wrapT],
						format: this.format,
						type: this.type,
						encoding: this.encoding,
						minFilter: this.minFilter,
						magFilter: this.magFilter,
						anisotropy: this.anisotropy,
						flipY: this.flipY,
						premultiplyAlpha: this.premultiplyAlpha,
						unpackAlignment: this.unpackAlignment,
					};
					if (void 0 !== this.image) {
						const i = this.image;
						if (
							(void 0 === i.uuid && (i.uuid = pt.generateUUID()),
							!e && void 0 === t.images[i.uuid])
						) {
							let e;
							if (Array.isArray(i)) {
								e = [];
								for (let t = 0, n = i.length; t < n; t++)
									e.push(vt.getDataURL(i[t]));
							} else e = vt.getDataURL(i);
							t.images[i.uuid] = { uuid: i.uuid, url: e };
						}
						n.image = i.uuid;
					}
					return e || (t.textures[this.uuid] = n), n;
				},
				dispose: function () {
					this.dispatchEvent({ type: "dispose" });
				},
				transformUv: function (t) {
					if (300 !== this.mapping) return t;
					if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
						switch (this.wrapS) {
							case 1e3:
								t.x = t.x - Math.floor(t.x);
								break;
							case 1001:
								t.x = t.x < 0 ? 0 : 1;
								break;
							case 1002:
								1 === Math.abs(Math.floor(t.x) % 2)
									? (t.x = Math.ceil(t.x) - t.x)
									: (t.x = t.x - Math.floor(t.x));
						}
					if (t.y < 0 || t.y > 1)
						switch (this.wrapT) {
							case 1e3:
								t.y = t.y - Math.floor(t.y);
								break;
							case 1001:
								t.y = t.y < 0 ? 0 : 1;
								break;
							case 1002:
								1 === Math.abs(Math.floor(t.y) % 2)
									? (t.y = Math.ceil(t.y) - t.y)
									: (t.y = t.y - Math.floor(t.y));
						}
					return this.flipY && (t.y = 1 - t.y), t;
				},
			})),
			Object.defineProperty(xt.prototype, "needsUpdate", {
				set: function (t) {
					!0 === t && this.version++;
				},
			}),
			Object.defineProperties(bt.prototype, {
				width: {
					get: function () {
						return this.z;
					},
					set: function (t) {
						this.z = t;
					},
				},
				height: {
					get: function () {
						return this.w;
					},
					set: function (t) {
						this.w = t;
					},
				},
			}),
			Object.assign(bt.prototype, {
				isVector4: !0,
				set: function (t, e, n, i) {
					return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
				},
				setScalar: function (t) {
					return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
				},
				setX: function (t) {
					return (this.x = t), this;
				},
				setY: function (t) {
					return (this.y = t), this;
				},
				setZ: function (t) {
					return (this.z = t), this;
				},
				setW: function (t) {
					return (this.w = t), this;
				},
				setComponent: function (t, e) {
					switch (t) {
						case 0:
							this.x = e;
							break;
						case 1:
							this.y = e;
							break;
						case 2:
							this.z = e;
							break;
						case 3:
							this.w = e;
							break;
						default:
							throw new Error("index is out of range: " + t);
					}
					return this;
				},
				getComponent: function (t) {
					switch (t) {
						case 0:
							return this.x;
						case 1:
							return this.y;
						case 2:
							return this.z;
						case 3:
							return this.w;
						default:
							throw new Error("index is out of range: " + t);
					}
				},
				clone: function () {
					return new this.constructor(this.x, this.y, this.z, this.w);
				},
				copy: function (t) {
					return (
						(this.x = t.x),
						(this.y = t.y),
						(this.z = t.z),
						(this.w = void 0 !== t.w ? t.w : 1),
						this
					);
				},
				add: function (t, e) {
					return void 0 !== e
						? (console.warn(
								"THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
						  ),
						  this.addVectors(t, e))
						: ((this.x += t.x),
						  (this.y += t.y),
						  (this.z += t.z),
						  (this.w += t.w),
						  this);
				},
				addScalar: function (t) {
					return (
						(this.x += t), (this.y += t), (this.z += t), (this.w += t), this
					);
				},
				addVectors: function (t, e) {
					return (
						(this.x = t.x + e.x),
						(this.y = t.y + e.y),
						(this.z = t.z + e.z),
						(this.w = t.w + e.w),
						this
					);
				},
				addScaledVector: function (t, e) {
					return (
						(this.x += t.x * e),
						(this.y += t.y * e),
						(this.z += t.z * e),
						(this.w += t.w * e),
						this
					);
				},
				sub: function (t, e) {
					return void 0 !== e
						? (console.warn(
								"THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
						  ),
						  this.subVectors(t, e))
						: ((this.x -= t.x),
						  (this.y -= t.y),
						  (this.z -= t.z),
						  (this.w -= t.w),
						  this);
				},
				subScalar: function (t) {
					return (
						(this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this
					);
				},
				subVectors: function (t, e) {
					return (
						(this.x = t.x - e.x),
						(this.y = t.y - e.y),
						(this.z = t.z - e.z),
						(this.w = t.w - e.w),
						this
					);
				},
				multiplyScalar: function (t) {
					return (
						(this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
					);
				},
				applyMatrix4: function (t) {
					const e = this.x,
						n = this.y,
						i = this.z,
						r = this.w,
						o = t.elements;
					return (
						(this.x = o[0] * e + o[4] * n + o[8] * i + o[12] * r),
						(this.y = o[1] * e + o[5] * n + o[9] * i + o[13] * r),
						(this.z = o[2] * e + o[6] * n + o[10] * i + o[14] * r),
						(this.w = o[3] * e + o[7] * n + o[11] * i + o[15] * r),
						this
					);
				},
				divideScalar: function (t) {
					return this.multiplyScalar(1 / t);
				},
				setAxisAngleFromQuaternion: function (t) {
					this.w = 2 * Math.acos(t.w);
					const e = Math.sqrt(1 - t.w * t.w);
					return (
						e < 1e-4
							? ((this.x = 1), (this.y = 0), (this.z = 0))
							: ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
						this
					);
				},
				setAxisAngleFromRotationMatrix: function (t) {
					let e, n, i, r;
					const o = t.elements,
						s = o[0],
						a = o[4],
						c = o[8],
						l = o[1],
						h = o[5],
						u = o[9],
						d = o[2],
						p = o[6],
						f = o[10];
					if (
						Math.abs(a - l) < 0.01 &&
						Math.abs(c - d) < 0.01 &&
						Math.abs(u - p) < 0.01
					) {
						if (
							Math.abs(a + l) < 0.1 &&
							Math.abs(c + d) < 0.1 &&
							Math.abs(u + p) < 0.1 &&
							Math.abs(s + h + f - 3) < 0.1
						)
							return this.set(1, 0, 0, 0), this;
						e = Math.PI;
						const t = (s + 1) / 2,
							o = (h + 1) / 2,
							m = (f + 1) / 2,
							g = (a + l) / 4,
							v = (c + d) / 4,
							y = (u + p) / 4;
						return (
							t > o && t > m
								? t < 0.01
									? ((n = 0), (i = 0.707106781), (r = 0.707106781))
									: ((n = Math.sqrt(t)), (i = g / n), (r = v / n))
								: o > m
								? o < 0.01
									? ((n = 0.707106781), (i = 0), (r = 0.707106781))
									: ((i = Math.sqrt(o)), (n = g / i), (r = y / i))
								: m < 0.01
								? ((n = 0.707106781), (i = 0.707106781), (r = 0))
								: ((r = Math.sqrt(m)), (n = v / r), (i = y / r)),
							this.set(n, i, r, e),
							this
						);
					}
					let m = Math.sqrt(
						(p - u) * (p - u) + (c - d) * (c - d) + (l - a) * (l - a)
					);
					return (
						Math.abs(m) < 0.001 && (m = 1),
						(this.x = (p - u) / m),
						(this.y = (c - d) / m),
						(this.z = (l - a) / m),
						(this.w = Math.acos((s + h + f - 1) / 2)),
						this
					);
				},
				min: function (t) {
					return (
						(this.x = Math.min(this.x, t.x)),
						(this.y = Math.min(this.y, t.y)),
						(this.z = Math.min(this.z, t.z)),
						(this.w = Math.min(this.w, t.w)),
						this
					);
				},
				max: function (t) {
					return (
						(this.x = Math.max(this.x, t.x)),
						(this.y = Math.max(this.y, t.y)),
						(this.z = Math.max(this.z, t.z)),
						(this.w = Math.max(this.w, t.w)),
						this
					);
				},
				clamp: function (t, e) {
					return (
						(this.x = Math.max(t.x, Math.min(e.x, this.x))),
						(this.y = Math.max(t.y, Math.min(e.y, this.y))),
						(this.z = Math.max(t.z, Math.min(e.z, this.z))),
						(this.w = Math.max(t.w, Math.min(e.w, this.w))),
						this
					);
				},
				clampScalar: function (t, e) {
					return (
						(this.x = Math.max(t, Math.min(e, this.x))),
						(this.y = Math.max(t, Math.min(e, this.y))),
						(this.z = Math.max(t, Math.min(e, this.z))),
						(this.w = Math.max(t, Math.min(e, this.w))),
						this
					);
				},
				clampLength: function (t, e) {
					const n = this.length();
					return this.divideScalar(n || 1).multiplyScalar(
						Math.max(t, Math.min(e, n))
					);
				},
				floor: function () {
					return (
						(this.x = Math.floor(this.x)),
						(this.y = Math.floor(this.y)),
						(this.z = Math.floor(this.z)),
						(this.w = Math.floor(this.w)),
						this
					);
				},
				ceil: function () {
					return (
						(this.x = Math.ceil(this.x)),
						(this.y = Math.ceil(this.y)),
						(this.z = Math.ceil(this.z)),
						(this.w = Math.ceil(this.w)),
						this
					);
				},
				round: function () {
					return (
						(this.x = Math.round(this.x)),
						(this.y = Math.round(this.y)),
						(this.z = Math.round(this.z)),
						(this.w = Math.round(this.w)),
						this
					);
				},
				roundToZero: function () {
					return (
						(this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
						(this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
						(this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
						(this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
						this
					);
				},
				negate: function () {
					return (
						(this.x = -this.x),
						(this.y = -this.y),
						(this.z = -this.z),
						(this.w = -this.w),
						this
					);
				},
				dot: function (t) {
					return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
				},
				lengthSq: function () {
					return (
						this.x * this.x +
						this.y * this.y +
						this.z * this.z +
						this.w * this.w
					);
				},
				length: function () {
					return Math.sqrt(
						this.x * this.x +
							this.y * this.y +
							this.z * this.z +
							this.w * this.w
					);
				},
				manhattanLength: function () {
					return (
						Math.abs(this.x) +
						Math.abs(this.y) +
						Math.abs(this.z) +
						Math.abs(this.w)
					);
				},
				normalize: function () {
					return this.divideScalar(this.length() || 1);
				},
				setLength: function (t) {
					return this.normalize().multiplyScalar(t);
				},
				lerp: function (t, e) {
					return (
						(this.x += (t.x - this.x) * e),
						(this.y += (t.y - this.y) * e),
						(this.z += (t.z - this.z) * e),
						(this.w += (t.w - this.w) * e),
						this
					);
				},
				lerpVectors: function (t, e, n) {
					return (
						(this.x = t.x + (e.x - t.x) * n),
						(this.y = t.y + (e.y - t.y) * n),
						(this.z = t.z + (e.z - t.z) * n),
						(this.w = t.w + (e.w - t.w) * n),
						this
					);
				},
				equals: function (t) {
					return (
						t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
					);
				},
				fromArray: function (t, e) {
					return (
						void 0 === e && (e = 0),
						(this.x = t[e]),
						(this.y = t[e + 1]),
						(this.z = t[e + 2]),
						(this.w = t[e + 3]),
						this
					);
				},
				toArray: function (t, e) {
					return (
						void 0 === t && (t = []),
						void 0 === e && (e = 0),
						(t[e] = this.x),
						(t[e + 1] = this.y),
						(t[e + 2] = this.z),
						(t[e + 3] = this.w),
						t
					);
				},
				fromBufferAttribute: function (t, e, n) {
					return (
						void 0 !== n &&
							console.warn(
								"THREE.Vector4: offset has been removed from .fromBufferAttribute()."
							),
						(this.x = t.getX(e)),
						(this.y = t.getY(e)),
						(this.z = t.getZ(e)),
						(this.w = t.getW(e)),
						this
					);
				},
				random: function () {
					return (
						(this.x = Math.random()),
						(this.y = Math.random()),
						(this.z = Math.random()),
						(this.w = Math.random()),
						this
					);
				},
			}),
			(wt.prototype = Object.assign(Object.create(ht.prototype), {
				constructor: wt,
				isWebGLRenderTarget: !0,
				setSize: function (t, e) {
					(this.width === t && this.height === e) ||
						((this.width = t),
						(this.height = e),
						(this.texture.image.width = t),
						(this.texture.image.height = e),
						this.dispose()),
						this.viewport.set(0, 0, t, e),
						this.scissor.set(0, 0, t, e);
				},
				clone: function () {
					return new this.constructor().copy(this);
				},
				copy: function (t) {
					return (
						(this.width = t.width),
						(this.height = t.height),
						this.viewport.copy(t.viewport),
						(this.texture = t.texture.clone()),
						(this.depthBuffer = t.depthBuffer),
						(this.stencilBuffer = t.stencilBuffer),
						(this.depthTexture = t.depthTexture),
						this
					);
				},
				dispose: function () {
					this.dispatchEvent({ type: "dispose" });
				},
			})),
			(_t.prototype = Object.assign(Object.create(wt.prototype), {
				constructor: _t,
				isWebGLMultisampleRenderTarget: !0,
				copy: function (t) {
					return (
						wt.prototype.copy.call(this, t), (this.samples = t.samples), this
					);
				},
			})),
			Object.assign(Mt, {
				slerp: function (t, e, n, i) {
					return n.copy(t).slerp(e, i);
				},
				slerpFlat: function (t, e, n, i, r, o, s) {
					let a = n[i + 0],
						c = n[i + 1],
						l = n[i + 2],
						h = n[i + 3];
					const u = r[o + 0],
						d = r[o + 1],
						p = r[o + 2],
						f = r[o + 3];
					if (h !== f || a !== u || c !== d || l !== p) {
						let t = 1 - s,
							e = a * u + c * d + l * p + h * f,
							n = e >= 0 ? 1 : -1,
							i = 1 - e * e;
						if (i > Number.EPSILON) {
							const r = Math.sqrt(i),
								o = Math.atan2(r, e * n);
							(t = Math.sin(t * o) / r), (s = Math.sin(s * o) / r);
						}
						const r = s * n;
						if (
							((a = a * t + u * r),
							(c = c * t + d * r),
							(l = l * t + p * r),
							(h = h * t + f * r),
							t === 1 - s)
						) {
							const t = 1 / Math.sqrt(a * a + c * c + l * l + h * h);
							(a *= t), (c *= t), (l *= t), (h *= t);
						}
					}
					(t[e] = a), (t[e + 1] = c), (t[e + 2] = l), (t[e + 3] = h);
				},
				multiplyQuaternionsFlat: function (t, e, n, i, r, o) {
					const s = n[i],
						a = n[i + 1],
						c = n[i + 2],
						l = n[i + 3],
						h = r[o],
						u = r[o + 1],
						d = r[o + 2],
						p = r[o + 3];
					return (
						(t[e] = s * p + l * h + a * d - c * u),
						(t[e + 1] = a * p + l * u + c * h - s * d),
						(t[e + 2] = c * p + l * d + s * u - a * h),
						(t[e + 3] = l * p - s * h - a * u - c * d),
						t
					);
				},
			}),
			Object.defineProperties(Mt.prototype, {
				x: {
					get: function () {
						return this._x;
					},
					set: function (t) {
						(this._x = t), this._onChangeCallback();
					},
				},
				y: {
					get: function () {
						return this._y;
					},
					set: function (t) {
						(this._y = t), this._onChangeCallback();
					},
				},
				z: {
					get: function () {
						return this._z;
					},
					set: function (t) {
						(this._z = t), this._onChangeCallback();
					},
				},
				w: {
					get: function () {
						return this._w;
					},
					set: function (t) {
						(this._w = t), this._onChangeCallback();
					},
				},
			}),
			Object.assign(Mt.prototype, {
				isQuaternion: !0,
				set: function (t, e, n, i) {
					return (
						(this._x = t),
						(this._y = e),
						(this._z = n),
						(this._w = i),
						this._onChangeCallback(),
						this
					);
				},
				clone: function () {
					return new this.constructor(this._x, this._y, this._z, this._w);
				},
				copy: function (t) {
					return (
						(this._x = t.x),
						(this._y = t.y),
						(this._z = t.z),
						(this._w = t.w),
						this._onChangeCallback(),
						this
					);
				},
				setFromEuler: function (t, e) {
					if (!t || !t.isEuler)
						throw new Error(
							"THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
						);
					const n = t._x,
						i = t._y,
						r = t._z,
						o = t.order,
						s = Math.cos,
						a = Math.sin,
						c = s(n / 2),
						l = s(i / 2),
						h = s(r / 2),
						u = a(n / 2),
						d = a(i / 2),
						p = a(r / 2);
					switch (o) {
						case "XYZ":
							(this._x = u * l * h + c * d * p),
								(this._y = c * d * h - u * l * p),
								(this._z = c * l * p + u * d * h),
								(this._w = c * l * h - u * d * p);
							break;
						case "YXZ":
							(this._x = u * l * h + c * d * p),
								(this._y = c * d * h - u * l * p),
								(this._z = c * l * p - u * d * h),
								(this._w = c * l * h + u * d * p);
							break;
						case "ZXY":
							(this._x = u * l * h - c * d * p),
								(this._y = c * d * h + u * l * p),
								(this._z = c * l * p + u * d * h),
								(this._w = c * l * h - u * d * p);
							break;
						case "ZYX":
							(this._x = u * l * h - c * d * p),
								(this._y = c * d * h + u * l * p),
								(this._z = c * l * p - u * d * h),
								(this._w = c * l * h + u * d * p);
							break;
						case "YZX":
							(this._x = u * l * h + c * d * p),
								(this._y = c * d * h + u * l * p),
								(this._z = c * l * p - u * d * h),
								(this._w = c * l * h - u * d * p);
							break;
						case "XZY":
							(this._x = u * l * h - c * d * p),
								(this._y = c * d * h - u * l * p),
								(this._z = c * l * p + u * d * h),
								(this._w = c * l * h + u * d * p);
							break;
						default:
							console.warn(
								"THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
									o
							);
					}
					return !1 !== e && this._onChangeCallback(), this;
				},
				setFromAxisAngle: function (t, e) {
					const n = e / 2,
						i = Math.sin(n);
					return (
						(this._x = t.x * i),
						(this._y = t.y * i),
						(this._z = t.z * i),
						(this._w = Math.cos(n)),
						this._onChangeCallback(),
						this
					);
				},
				setFromRotationMatrix: function (t) {
					const e = t.elements,
						n = e[0],
						i = e[4],
						r = e[8],
						o = e[1],
						s = e[5],
						a = e[9],
						c = e[2],
						l = e[6],
						h = e[10],
						u = n + s + h;
					if (u > 0) {
						const t = 0.5 / Math.sqrt(u + 1);
						(this._w = 0.25 / t),
							(this._x = (l - a) * t),
							(this._y = (r - c) * t),
							(this._z = (o - i) * t);
					} else if (n > s && n > h) {
						const t = 2 * Math.sqrt(1 + n - s - h);
						(this._w = (l - a) / t),
							(this._x = 0.25 * t),
							(this._y = (i + o) / t),
							(this._z = (r + c) / t);
					} else if (s > h) {
						const t = 2 * Math.sqrt(1 + s - n - h);
						(this._w = (r - c) / t),
							(this._x = (i + o) / t),
							(this._y = 0.25 * t),
							(this._z = (a + l) / t);
					} else {
						const t = 2 * Math.sqrt(1 + h - n - s);
						(this._w = (o - i) / t),
							(this._x = (r + c) / t),
							(this._y = (a + l) / t),
							(this._z = 0.25 * t);
					}
					return this._onChangeCallback(), this;
				},
				setFromUnitVectors: function (t, e) {
					let n = t.dot(e) + 1;
					return (
						n < 1e-6
							? ((n = 0),
							  Math.abs(t.x) > Math.abs(t.z)
									? ((this._x = -t.y),
									  (this._y = t.x),
									  (this._z = 0),
									  (this._w = n))
									: ((this._x = 0),
									  (this._y = -t.z),
									  (this._z = t.y),
									  (this._w = n)))
							: ((this._x = t.y * e.z - t.z * e.y),
							  (this._y = t.z * e.x - t.x * e.z),
							  (this._z = t.x * e.y - t.y * e.x),
							  (this._w = n)),
						this.normalize()
					);
				},
				angleTo: function (t) {
					return 2 * Math.acos(Math.abs(pt.clamp(this.dot(t), -1, 1)));
				},
				rotateTowards: function (t, e) {
					const n = this.angleTo(t);
					if (0 === n) return this;
					const i = Math.min(1, e / n);
					return this.slerp(t, i), this;
				},
				identity: function () {
					return this.set(0, 0, 0, 1);
				},
				inverse: function () {
					return this.conjugate();
				},
				conjugate: function () {
					return (
						(this._x *= -1),
						(this._y *= -1),
						(this._z *= -1),
						this._onChangeCallback(),
						this
					);
				},
				dot: function (t) {
					return (
						this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
					);
				},
				lengthSq: function () {
					return (
						this._x * this._x +
						this._y * this._y +
						this._z * this._z +
						this._w * this._w
					);
				},
				length: function () {
					return Math.sqrt(
						this._x * this._x +
							this._y * this._y +
							this._z * this._z +
							this._w * this._w
					);
				},
				normalize: function () {
					let t = this.length();
					return (
						0 === t
							? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
							: ((t = 1 / t),
							  (this._x = this._x * t),
							  (this._y = this._y * t),
							  (this._z = this._z * t),
							  (this._w = this._w * t)),
						this._onChangeCallback(),
						this
					);
				},
				multiply: function (t, e) {
					return void 0 !== e
						? (console.warn(
								"THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
						  ),
						  this.multiplyQuaternions(t, e))
						: this.multiplyQuaternions(this, t);
				},
				premultiply: function (t) {
					return this.multiplyQuaternions(t, this);
				},
				multiplyQuaternions: function (t, e) {
					const n = t._x,
						i = t._y,
						r = t._z,
						o = t._w,
						s = e._x,
						a = e._y,
						c = e._z,
						l = e._w;
					return (
						(this._x = n * l + o * s + i * c - r * a),
						(this._y = i * l + o * a + r * s - n * c),
						(this._z = r * l + o * c + n * a - i * s),
						(this._w = o * l - n * s - i * a - r * c),
						this._onChangeCallback(),
						this
					);
				},
				slerp: function (t, e) {
					if (0 === e) return this;
					if (1 === e) return this.copy(t);
					const n = this._x,
						i = this._y,
						r = this._z,
						o = this._w;
					let s = o * t._w + n * t._x + i * t._y + r * t._z;
					if (
						(s < 0
							? ((this._w = -t._w),
							  (this._x = -t._x),
							  (this._y = -t._y),
							  (this._z = -t._z),
							  (s = -s))
							: this.copy(t),
						s >= 1)
					)
						return (
							(this._w = o), (this._x = n), (this._y = i), (this._z = r), this
						);
					const a = 1 - s * s;
					if (a <= Number.EPSILON) {
						const t = 1 - e;
						return (
							(this._w = t * o + e * this._w),
							(this._x = t * n + e * this._x),
							(this._y = t * i + e * this._y),
							(this._z = t * r + e * this._z),
							this.normalize(),
							this._onChangeCallback(),
							this
						);
					}
					const c = Math.sqrt(a),
						l = Math.atan2(c, s),
						h = Math.sin((1 - e) * l) / c,
						u = Math.sin(e * l) / c;
					return (
						(this._w = o * h + this._w * u),
						(this._x = n * h + this._x * u),
						(this._y = i * h + this._y * u),
						(this._z = r * h + this._z * u),
						this._onChangeCallback(),
						this
					);
				},
				equals: function (t) {
					return (
						t._x === this._x &&
						t._y === this._y &&
						t._z === this._z &&
						t._w === this._w
					);
				},
				fromArray: function (t, e) {
					return (
						void 0 === e && (e = 0),
						(this._x = t[e]),
						(this._y = t[e + 1]),
						(this._z = t[e + 2]),
						(this._w = t[e + 3]),
						this._onChangeCallback(),
						this
					);
				},
				toArray: function (t, e) {
					return (
						void 0 === t && (t = []),
						void 0 === e && (e = 0),
						(t[e] = this._x),
						(t[e + 1] = this._y),
						(t[e + 2] = this._z),
						(t[e + 3] = this._w),
						t
					);
				},
				fromBufferAttribute: function (t, e) {
					return (
						(this._x = t.getX(e)),
						(this._y = t.getY(e)),
						(this._z = t.getZ(e)),
						(this._w = t.getW(e)),
						this
					);
				},
				_onChange: function (t) {
					return (this._onChangeCallback = t), this;
				},
				_onChangeCallback: function () {},
			});
		const St = new Et(),
			Tt = new Mt();
		function Et(t = 0, e = 0, n = 0) {
			(this.x = t), (this.y = e), (this.z = n);
		}
		Object.assign(Et.prototype, {
			isVector3: !0,
			set: function (t, e, n) {
				return (
					void 0 === n && (n = this.z),
					(this.x = t),
					(this.y = e),
					(this.z = n),
					this
				);
			},
			setScalar: function (t) {
				return (this.x = t), (this.y = t), (this.z = t), this;
			},
			setX: function (t) {
				return (this.x = t), this;
			},
			setY: function (t) {
				return (this.y = t), this;
			},
			setZ: function (t) {
				return (this.z = t), this;
			},
			setComponent: function (t, e) {
				switch (t) {
					case 0:
						this.x = e;
						break;
					case 1:
						this.y = e;
						break;
					case 2:
						this.z = e;
						break;
					default:
						throw new Error("index is out of range: " + t);
				}
				return this;
			},
			getComponent: function (t) {
				switch (t) {
					case 0:
						return this.x;
					case 1:
						return this.y;
					case 2:
						return this.z;
					default:
						throw new Error("index is out of range: " + t);
				}
			},
			clone: function () {
				return new this.constructor(this.x, this.y, this.z);
			},
			copy: function (t) {
				return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
			},
			add: function (t, e) {
				return void 0 !== e
					? (console.warn(
							"THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
					  ),
					  this.addVectors(t, e))
					: ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
			},
			addScalar: function (t) {
				return (this.x += t), (this.y += t), (this.z += t), this;
			},
			addVectors: function (t, e) {
				return (
					(this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this
				);
			},
			addScaledVector: function (t, e) {
				return (
					(this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this
				);
			},
			sub: function (t, e) {
				return void 0 !== e
					? (console.warn(
							"THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
					  ),
					  this.subVectors(t, e))
					: ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
			},
			subScalar: function (t) {
				return (this.x -= t), (this.y -= t), (this.z -= t), this;
			},
			subVectors: function (t, e) {
				return (
					(this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this
				);
			},
			multiply: function (t, e) {
				return void 0 !== e
					? (console.warn(
							"THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
					  ),
					  this.multiplyVectors(t, e))
					: ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
			},
			multiplyScalar: function (t) {
				return (this.x *= t), (this.y *= t), (this.z *= t), this;
			},
			multiplyVectors: function (t, e) {
				return (
					(this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this
				);
			},
			applyEuler: function (t) {
				return (
					(t && t.isEuler) ||
						console.error(
							"THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
						),
					this.applyQuaternion(Tt.setFromEuler(t))
				);
			},
			applyAxisAngle: function (t, e) {
				return this.applyQuaternion(Tt.setFromAxisAngle(t, e));
			},
			applyMatrix3: function (t) {
				const e = this.x,
					n = this.y,
					i = this.z,
					r = t.elements;
				return (
					(this.x = r[0] * e + r[3] * n + r[6] * i),
					(this.y = r[1] * e + r[4] * n + r[7] * i),
					(this.z = r[2] * e + r[5] * n + r[8] * i),
					this
				);
			},
			applyNormalMatrix: function (t) {
				return this.applyMatrix3(t).normalize();
			},
			applyMatrix4: function (t) {
				const e = this.x,
					n = this.y,
					i = this.z,
					r = t.elements,
					o = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
				return (
					(this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * o),
					(this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * o),
					(this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * o),
					this
				);
			},
			applyQuaternion: function (t) {
				const e = this.x,
					n = this.y,
					i = this.z,
					r = t.x,
					o = t.y,
					s = t.z,
					a = t.w,
					c = a * e + o * i - s * n,
					l = a * n + s * e - r * i,
					h = a * i + r * n - o * e,
					u = -r * e - o * n - s * i;
				return (
					(this.x = c * a + u * -r + l * -s - h * -o),
					(this.y = l * a + u * -o + h * -r - c * -s),
					(this.z = h * a + u * -s + c * -o - l * -r),
					this
				);
			},
			project: function (t) {
				return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
					t.projectionMatrix
				);
			},
			unproject: function (t) {
				return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
					t.matrixWorld
				);
			},
			transformDirection: function (t) {
				const e = this.x,
					n = this.y,
					i = this.z,
					r = t.elements;
				return (
					(this.x = r[0] * e + r[4] * n + r[8] * i),
					(this.y = r[1] * e + r[5] * n + r[9] * i),
					(this.z = r[2] * e + r[6] * n + r[10] * i),
					this.normalize()
				);
			},
			divide: function (t) {
				return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
			},
			divideScalar: function (t) {
				return this.multiplyScalar(1 / t);
			},
			min: function (t) {
				return (
					(this.x = Math.min(this.x, t.x)),
					(this.y = Math.min(this.y, t.y)),
					(this.z = Math.min(this.z, t.z)),
					this
				);
			},
			max: function (t) {
				return (
					(this.x = Math.max(this.x, t.x)),
					(this.y = Math.max(this.y, t.y)),
					(this.z = Math.max(this.z, t.z)),
					this
				);
			},
			clamp: function (t, e) {
				return (
					(this.x = Math.max(t.x, Math.min(e.x, this.x))),
					(this.y = Math.max(t.y, Math.min(e.y, this.y))),
					(this.z = Math.max(t.z, Math.min(e.z, this.z))),
					this
				);
			},
			clampScalar: function (t, e) {
				return (
					(this.x = Math.max(t, Math.min(e, this.x))),
					(this.y = Math.max(t, Math.min(e, this.y))),
					(this.z = Math.max(t, Math.min(e, this.z))),
					this
				);
			},
			clampLength: function (t, e) {
				const n = this.length();
				return this.divideScalar(n || 1).multiplyScalar(
					Math.max(t, Math.min(e, n))
				);
			},
			floor: function () {
				return (
					(this.x = Math.floor(this.x)),
					(this.y = Math.floor(this.y)),
					(this.z = Math.floor(this.z)),
					this
				);
			},
			ceil: function () {
				return (
					(this.x = Math.ceil(this.x)),
					(this.y = Math.ceil(this.y)),
					(this.z = Math.ceil(this.z)),
					this
				);
			},
			round: function () {
				return (
					(this.x = Math.round(this.x)),
					(this.y = Math.round(this.y)),
					(this.z = Math.round(this.z)),
					this
				);
			},
			roundToZero: function () {
				return (
					(this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
					(this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
					(this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
					this
				);
			},
			negate: function () {
				return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
			},
			dot: function (t) {
				return this.x * t.x + this.y * t.y + this.z * t.z;
			},
			lengthSq: function () {
				return this.x * this.x + this.y * this.y + this.z * this.z;
			},
			length: function () {
				return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
			},
			manhattanLength: function () {
				return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
			},
			normalize: function () {
				return this.divideScalar(this.length() || 1);
			},
			setLength: function (t) {
				return this.normalize().multiplyScalar(t);
			},
			lerp: function (t, e) {
				return (
					(this.x += (t.x - this.x) * e),
					(this.y += (t.y - this.y) * e),
					(this.z += (t.z - this.z) * e),
					this
				);
			},
			lerpVectors: function (t, e, n) {
				return (
					(this.x = t.x + (e.x - t.x) * n),
					(this.y = t.y + (e.y - t.y) * n),
					(this.z = t.z + (e.z - t.z) * n),
					this
				);
			},
			cross: function (t, e) {
				return void 0 !== e
					? (console.warn(
							"THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
					  ),
					  this.crossVectors(t, e))
					: this.crossVectors(this, t);
			},
			crossVectors: function (t, e) {
				const n = t.x,
					i = t.y,
					r = t.z,
					o = e.x,
					s = e.y,
					a = e.z;
				return (
					(this.x = i * a - r * s),
					(this.y = r * o - n * a),
					(this.z = n * s - i * o),
					this
				);
			},
			projectOnVector: function (t) {
				const e = t.lengthSq();
				if (0 === e) return this.set(0, 0, 0);
				const n = t.dot(this) / e;
				return this.copy(t).multiplyScalar(n);
			},
			projectOnPlane: function (t) {
				return St.copy(this).projectOnVector(t), this.sub(St);
			},
			reflect: function (t) {
				return this.sub(St.copy(t).multiplyScalar(2 * this.dot(t)));
			},
			angleTo: function (t) {
				const e = Math.sqrt(this.lengthSq() * t.lengthSq());
				if (0 === e) return Math.PI / 2;
				const n = this.dot(t) / e;
				return Math.acos(pt.clamp(n, -1, 1));
			},
			distanceTo: function (t) {
				return Math.sqrt(this.distanceToSquared(t));
			},
			distanceToSquared: function (t) {
				const e = this.x - t.x,
					n = this.y - t.y,
					i = this.z - t.z;
				return e * e + n * n + i * i;
			},
			manhattanDistanceTo: function (t) {
				return (
					Math.abs(this.x - t.x) +
					Math.abs(this.y - t.y) +
					Math.abs(this.z - t.z)
				);
			},
			setFromSpherical: function (t) {
				return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
			},
			setFromSphericalCoords: function (t, e, n) {
				const i = Math.sin(e) * t;
				return (
					(this.x = i * Math.sin(n)),
					(this.y = Math.cos(e) * t),
					(this.z = i * Math.cos(n)),
					this
				);
			},
			setFromCylindrical: function (t) {
				return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
			},
			setFromCylindricalCoords: function (t, e, n) {
				return (
					(this.x = t * Math.sin(e)),
					(this.y = n),
					(this.z = t * Math.cos(e)),
					this
				);
			},
			setFromMatrixPosition: function (t) {
				const e = t.elements;
				return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
			},
			setFromMatrixScale: function (t) {
				const e = this.setFromMatrixColumn(t, 0).length(),
					n = this.setFromMatrixColumn(t, 1).length(),
					i = this.setFromMatrixColumn(t, 2).length();
				return (this.x = e), (this.y = n), (this.z = i), this;
			},
			setFromMatrixColumn: function (t, e) {
				return this.fromArray(t.elements, 4 * e);
			},
			setFromMatrix3Column: function (t, e) {
				return this.fromArray(t.elements, 3 * e);
			},
			equals: function (t) {
				return t.x === this.x && t.y === this.y && t.z === this.z;
			},
			fromArray: function (t, e) {
				return (
					void 0 === e && (e = 0),
					(this.x = t[e]),
					(this.y = t[e + 1]),
					(this.z = t[e + 2]),
					this
				);
			},
			toArray: function (t, e) {
				return (
					void 0 === t && (t = []),
					void 0 === e && (e = 0),
					(t[e] = this.x),
					(t[e + 1] = this.y),
					(t[e + 2] = this.z),
					t
				);
			},
			fromBufferAttribute: function (t, e, n) {
				return (
					void 0 !== n &&
						console.warn(
							"THREE.Vector3: offset has been removed from .fromBufferAttribute()."
						),
					(this.x = t.getX(e)),
					(this.y = t.getY(e)),
					(this.z = t.getZ(e)),
					this
				);
			},
			random: function () {
				return (
					(this.x = Math.random()),
					(this.y = Math.random()),
					(this.z = Math.random()),
					this
				);
			},
		});
		const At = new Et(),
			Lt = new Dt(),
			Rt = new Et(0, 0, 0),
			Pt = new Et(1, 1, 1),
			Ct = new Et(),
			It = new Et(),
			Ot = new Et();
		function Dt() {
			(this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
				arguments.length > 0 &&
					console.error(
						"THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
					);
		}
		Object.assign(Dt.prototype, {
			isMatrix4: !0,
			set: function (t, e, n, i, r, o, s, a, c, l, h, u, d, p, f, m) {
				const g = this.elements;
				return (
					(g[0] = t),
					(g[4] = e),
					(g[8] = n),
					(g[12] = i),
					(g[1] = r),
					(g[5] = o),
					(g[9] = s),
					(g[13] = a),
					(g[2] = c),
					(g[6] = l),
					(g[10] = h),
					(g[14] = u),
					(g[3] = d),
					(g[7] = p),
					(g[11] = f),
					(g[15] = m),
					this
				);
			},
			identity: function () {
				return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
			},
			clone: function () {
				return new Dt().fromArray(this.elements);
			},
			copy: function (t) {
				const e = this.elements,
					n = t.elements;
				return (
					(e[0] = n[0]),
					(e[1] = n[1]),
					(e[2] = n[2]),
					(e[3] = n[3]),
					(e[4] = n[4]),
					(e[5] = n[5]),
					(e[6] = n[6]),
					(e[7] = n[7]),
					(e[8] = n[8]),
					(e[9] = n[9]),
					(e[10] = n[10]),
					(e[11] = n[11]),
					(e[12] = n[12]),
					(e[13] = n[13]),
					(e[14] = n[14]),
					(e[15] = n[15]),
					this
				);
			},
			copyPosition: function (t) {
				const e = this.elements,
					n = t.elements;
				return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
			},
			extractBasis: function (t, e, n) {
				return (
					t.setFromMatrixColumn(this, 0),
					e.setFromMatrixColumn(this, 1),
					n.setFromMatrixColumn(this, 2),
					this
				);
			},
			makeBasis: function (t, e, n) {
				return (
					this.set(
						t.x,
						e.x,
						n.x,
						0,
						t.y,
						e.y,
						n.y,
						0,
						t.z,
						e.z,
						n.z,
						0,
						0,
						0,
						0,
						1
					),
					this
				);
			},
			extractRotation: function (t) {
				const e = this.elements,
					n = t.elements,
					i = 1 / At.setFromMatrixColumn(t, 0).length(),
					r = 1 / At.setFromMatrixColumn(t, 1).length(),
					o = 1 / At.setFromMatrixColumn(t, 2).length();
				return (
					(e[0] = n[0] * i),
					(e[1] = n[1] * i),
					(e[2] = n[2] * i),
					(e[3] = 0),
					(e[4] = n[4] * r),
					(e[5] = n[5] * r),
					(e[6] = n[6] * r),
					(e[7] = 0),
					(e[8] = n[8] * o),
					(e[9] = n[9] * o),
					(e[10] = n[10] * o),
					(e[11] = 0),
					(e[12] = 0),
					(e[13] = 0),
					(e[14] = 0),
					(e[15] = 1),
					this
				);
			},
			makeRotationFromEuler: function (t) {
				(t && t.isEuler) ||
					console.error(
						"THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
					);
				const e = this.elements,
					n = t.x,
					i = t.y,
					r = t.z,
					o = Math.cos(n),
					s = Math.sin(n),
					a = Math.cos(i),
					c = Math.sin(i),
					l = Math.cos(r),
					h = Math.sin(r);
				if ("XYZ" === t.order) {
					const t = o * l,
						n = o * h,
						i = s * l,
						r = s * h;
					(e[0] = a * l),
						(e[4] = -a * h),
						(e[8] = c),
						(e[1] = n + i * c),
						(e[5] = t - r * c),
						(e[9] = -s * a),
						(e[2] = r - t * c),
						(e[6] = i + n * c),
						(e[10] = o * a);
				} else if ("YXZ" === t.order) {
					const t = a * l,
						n = a * h,
						i = c * l,
						r = c * h;
					(e[0] = t + r * s),
						(e[4] = i * s - n),
						(e[8] = o * c),
						(e[1] = o * h),
						(e[5] = o * l),
						(e[9] = -s),
						(e[2] = n * s - i),
						(e[6] = r + t * s),
						(e[10] = o * a);
				} else if ("ZXY" === t.order) {
					const t = a * l,
						n = a * h,
						i = c * l,
						r = c * h;
					(e[0] = t - r * s),
						(e[4] = -o * h),
						(e[8] = i + n * s),
						(e[1] = n + i * s),
						(e[5] = o * l),
						(e[9] = r - t * s),
						(e[2] = -o * c),
						(e[6] = s),
						(e[10] = o * a);
				} else if ("ZYX" === t.order) {
					const t = o * l,
						n = o * h,
						i = s * l,
						r = s * h;
					(e[0] = a * l),
						(e[4] = i * c - n),
						(e[8] = t * c + r),
						(e[1] = a * h),
						(e[5] = r * c + t),
						(e[9] = n * c - i),
						(e[2] = -c),
						(e[6] = s * a),
						(e[10] = o * a);
				} else if ("YZX" === t.order) {
					const t = o * a,
						n = o * c,
						i = s * a,
						r = s * c;
					(e[0] = a * l),
						(e[4] = r - t * h),
						(e[8] = i * h + n),
						(e[1] = h),
						(e[5] = o * l),
						(e[9] = -s * l),
						(e[2] = -c * l),
						(e[6] = n * h + i),
						(e[10] = t - r * h);
				} else if ("XZY" === t.order) {
					const t = o * a,
						n = o * c,
						i = s * a,
						r = s * c;
					(e[0] = a * l),
						(e[4] = -h),
						(e[8] = c * l),
						(e[1] = t * h + r),
						(e[5] = o * l),
						(e[9] = n * h - i),
						(e[2] = i * h - n),
						(e[6] = s * l),
						(e[10] = r * h + t);
				}
				return (
					(e[3] = 0),
					(e[7] = 0),
					(e[11] = 0),
					(e[12] = 0),
					(e[13] = 0),
					(e[14] = 0),
					(e[15] = 1),
					this
				);
			},
			makeRotationFromQuaternion: function (t) {
				return this.compose(Rt, t, Pt);
			},
			lookAt: function (t, e, n) {
				const i = this.elements;
				return (
					Ot.subVectors(t, e),
					0 === Ot.lengthSq() && (Ot.z = 1),
					Ot.normalize(),
					Ct.crossVectors(n, Ot),
					0 === Ct.lengthSq() &&
						(1 === Math.abs(n.z) ? (Ot.x += 1e-4) : (Ot.z += 1e-4),
						Ot.normalize(),
						Ct.crossVectors(n, Ot)),
					Ct.normalize(),
					It.crossVectors(Ot, Ct),
					(i[0] = Ct.x),
					(i[4] = It.x),
					(i[8] = Ot.x),
					(i[1] = Ct.y),
					(i[5] = It.y),
					(i[9] = Ot.y),
					(i[2] = Ct.z),
					(i[6] = It.z),
					(i[10] = Ot.z),
					this
				);
			},
			multiply: function (t, e) {
				return void 0 !== e
					? (console.warn(
							"THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
					  ),
					  this.multiplyMatrices(t, e))
					: this.multiplyMatrices(this, t);
			},
			premultiply: function (t) {
				return this.multiplyMatrices(t, this);
			},
			multiplyMatrices: function (t, e) {
				const n = t.elements,
					i = e.elements,
					r = this.elements,
					o = n[0],
					s = n[4],
					a = n[8],
					c = n[12],
					l = n[1],
					h = n[5],
					u = n[9],
					d = n[13],
					p = n[2],
					f = n[6],
					m = n[10],
					g = n[14],
					v = n[3],
					y = n[7],
					x = n[11],
					b = n[15],
					w = i[0],
					_ = i[4],
					M = i[8],
					S = i[12],
					T = i[1],
					E = i[5],
					A = i[9],
					L = i[13],
					R = i[2],
					P = i[6],
					C = i[10],
					I = i[14],
					O = i[3],
					D = i[7],
					N = i[11],
					z = i[15];
				return (
					(r[0] = o * w + s * T + a * R + c * O),
					(r[4] = o * _ + s * E + a * P + c * D),
					(r[8] = o * M + s * A + a * C + c * N),
					(r[12] = o * S + s * L + a * I + c * z),
					(r[1] = l * w + h * T + u * R + d * O),
					(r[5] = l * _ + h * E + u * P + d * D),
					(r[9] = l * M + h * A + u * C + d * N),
					(r[13] = l * S + h * L + u * I + d * z),
					(r[2] = p * w + f * T + m * R + g * O),
					(r[6] = p * _ + f * E + m * P + g * D),
					(r[10] = p * M + f * A + m * C + g * N),
					(r[14] = p * S + f * L + m * I + g * z),
					(r[3] = v * w + y * T + x * R + b * O),
					(r[7] = v * _ + y * E + x * P + b * D),
					(r[11] = v * M + y * A + x * C + b * N),
					(r[15] = v * S + y * L + x * I + b * z),
					this
				);
			},
			multiplyScalar: function (t) {
				const e = this.elements;
				return (
					(e[0] *= t),
					(e[4] *= t),
					(e[8] *= t),
					(e[12] *= t),
					(e[1] *= t),
					(e[5] *= t),
					(e[9] *= t),
					(e[13] *= t),
					(e[2] *= t),
					(e[6] *= t),
					(e[10] *= t),
					(e[14] *= t),
					(e[3] *= t),
					(e[7] *= t),
					(e[11] *= t),
					(e[15] *= t),
					this
				);
			},
			determinant: function () {
				const t = this.elements,
					e = t[0],
					n = t[4],
					i = t[8],
					r = t[12],
					o = t[1],
					s = t[5],
					a = t[9],
					c = t[13],
					l = t[2],
					h = t[6],
					u = t[10],
					d = t[14];
				return (
					t[3] *
						(+r * a * h -
							i * c * h -
							r * s * u +
							n * c * u +
							i * s * d -
							n * a * d) +
					t[7] *
						(+e * a * d -
							e * c * u +
							r * o * u -
							i * o * d +
							i * c * l -
							r * a * l) +
					t[11] *
						(+e * c * h -
							e * s * d -
							r * o * h +
							n * o * d +
							r * s * l -
							n * c * l) +
					t[15] *
						(-i * s * l -
							e * a * h +
							e * s * u +
							i * o * h -
							n * o * u +
							n * a * l)
				);
			},
			transpose: function () {
				const t = this.elements;
				let e;
				return (
					(e = t[1]),
					(t[1] = t[4]),
					(t[4] = e),
					(e = t[2]),
					(t[2] = t[8]),
					(t[8] = e),
					(e = t[6]),
					(t[6] = t[9]),
					(t[9] = e),
					(e = t[3]),
					(t[3] = t[12]),
					(t[12] = e),
					(e = t[7]),
					(t[7] = t[13]),
					(t[13] = e),
					(e = t[11]),
					(t[11] = t[14]),
					(t[14] = e),
					this
				);
			},
			setPosition: function (t, e, n) {
				const i = this.elements;
				return (
					t.isVector3
						? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z))
						: ((i[12] = t), (i[13] = e), (i[14] = n)),
					this
				);
			},
			getInverse: function (t, e) {
				void 0 !== e &&
					console.warn(
						"THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate."
					);
				const n = this.elements,
					i = t.elements,
					r = i[0],
					o = i[1],
					s = i[2],
					a = i[3],
					c = i[4],
					l = i[5],
					h = i[6],
					u = i[7],
					d = i[8],
					p = i[9],
					f = i[10],
					m = i[11],
					g = i[12],
					v = i[13],
					y = i[14],
					x = i[15],
					b =
						p * y * u -
						v * f * u +
						v * h * m -
						l * y * m -
						p * h * x +
						l * f * x,
					w =
						g * f * u -
						d * y * u -
						g * h * m +
						c * y * m +
						d * h * x -
						c * f * x,
					_ =
						d * v * u -
						g * p * u +
						g * l * m -
						c * v * m -
						d * l * x +
						c * p * x,
					M =
						g * p * h -
						d * v * h -
						g * l * f +
						c * v * f +
						d * l * y -
						c * p * y,
					S = r * b + o * w + s * _ + a * M;
				if (0 === S)
					return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				const T = 1 / S;
				return (
					(n[0] = b * T),
					(n[1] =
						(v * f * a -
							p * y * a -
							v * s * m +
							o * y * m +
							p * s * x -
							o * f * x) *
						T),
					(n[2] =
						(l * y * a -
							v * h * a +
							v * s * u -
							o * y * u -
							l * s * x +
							o * h * x) *
						T),
					(n[3] =
						(p * h * a -
							l * f * a -
							p * s * u +
							o * f * u +
							l * s * m -
							o * h * m) *
						T),
					(n[4] = w * T),
					(n[5] =
						(d * y * a -
							g * f * a +
							g * s * m -
							r * y * m -
							d * s * x +
							r * f * x) *
						T),
					(n[6] =
						(g * h * a -
							c * y * a -
							g * s * u +
							r * y * u +
							c * s * x -
							r * h * x) *
						T),
					(n[7] =
						(c * f * a -
							d * h * a +
							d * s * u -
							r * f * u -
							c * s * m +
							r * h * m) *
						T),
					(n[8] = _ * T),
					(n[9] =
						(g * p * a -
							d * v * a -
							g * o * m +
							r * v * m +
							d * o * x -
							r * p * x) *
						T),
					(n[10] =
						(c * v * a -
							g * l * a +
							g * o * u -
							r * v * u -
							c * o * x +
							r * l * x) *
						T),
					(n[11] =
						(d * l * a -
							c * p * a -
							d * o * u +
							r * p * u +
							c * o * m -
							r * l * m) *
						T),
					(n[12] = M * T),
					(n[13] =
						(d * v * s -
							g * p * s +
							g * o * f -
							r * v * f -
							d * o * y +
							r * p * y) *
						T),
					(n[14] =
						(g * l * s -
							c * v * s -
							g * o * h +
							r * v * h +
							c * o * y -
							r * l * y) *
						T),
					(n[15] =
						(c * p * s -
							d * l * s +
							d * o * h -
							r * p * h -
							c * o * f +
							r * l * f) *
						T),
					this
				);
			},
			scale: function (t) {
				const e = this.elements,
					n = t.x,
					i = t.y,
					r = t.z;
				return (
					(e[0] *= n),
					(e[4] *= i),
					(e[8] *= r),
					(e[1] *= n),
					(e[5] *= i),
					(e[9] *= r),
					(e[2] *= n),
					(e[6] *= i),
					(e[10] *= r),
					(e[3] *= n),
					(e[7] *= i),
					(e[11] *= r),
					this
				);
			},
			getMaxScaleOnAxis: function () {
				const t = this.elements,
					e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
					n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
					i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
				return Math.sqrt(Math.max(e, n, i));
			},
			makeTranslation: function (t, e, n) {
				return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
			},
			makeRotationX: function (t) {
				const e = Math.cos(t),
					n = Math.sin(t);
				return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
			},
			makeRotationY: function (t) {
				const e = Math.cos(t),
					n = Math.sin(t);
				return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
			},
			makeRotationZ: function (t) {
				const e = Math.cos(t),
					n = Math.sin(t);
				return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
			},
			makeRotationAxis: function (t, e) {
				const n = Math.cos(e),
					i = Math.sin(e),
					r = 1 - n,
					o = t.x,
					s = t.y,
					a = t.z,
					c = r * o,
					l = r * s;
				return (
					this.set(
						c * o + n,
						c * s - i * a,
						c * a + i * s,
						0,
						c * s + i * a,
						l * s + n,
						l * a - i * o,
						0,
						c * a - i * s,
						l * a + i * o,
						r * a * a + n,
						0,
						0,
						0,
						0,
						1
					),
					this
				);
			},
			makeScale: function (t, e, n) {
				return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
			},
			makeShear: function (t, e, n) {
				return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1), this;
			},
			compose: function (t, e, n) {
				const i = this.elements,
					r = e._x,
					o = e._y,
					s = e._z,
					a = e._w,
					c = r + r,
					l = o + o,
					h = s + s,
					u = r * c,
					d = r * l,
					p = r * h,
					f = o * l,
					m = o * h,
					g = s * h,
					v = a * c,
					y = a * l,
					x = a * h,
					b = n.x,
					w = n.y,
					_ = n.z;
				return (
					(i[0] = (1 - (f + g)) * b),
					(i[1] = (d + x) * b),
					(i[2] = (p - y) * b),
					(i[3] = 0),
					(i[4] = (d - x) * w),
					(i[5] = (1 - (u + g)) * w),
					(i[6] = (m + v) * w),
					(i[7] = 0),
					(i[8] = (p + y) * _),
					(i[9] = (m - v) * _),
					(i[10] = (1 - (u + f)) * _),
					(i[11] = 0),
					(i[12] = t.x),
					(i[13] = t.y),
					(i[14] = t.z),
					(i[15] = 1),
					this
				);
			},
			decompose: function (t, e, n) {
				const i = this.elements;
				let r = At.set(i[0], i[1], i[2]).length(),
					o = At.set(i[4], i[5], i[6]).length(),
					s = At.set(i[8], i[9], i[10]).length();
				this.determinant() < 0 && (r = -r),
					(t.x = i[12]),
					(t.y = i[13]),
					(t.z = i[14]),
					Lt.copy(this);
				const a = 1 / r,
					c = 1 / o,
					l = 1 / s;
				return (
					(Lt.elements[0] *= a),
					(Lt.elements[1] *= a),
					(Lt.elements[2] *= a),
					(Lt.elements[4] *= c),
					(Lt.elements[5] *= c),
					(Lt.elements[6] *= c),
					(Lt.elements[8] *= l),
					(Lt.elements[9] *= l),
					(Lt.elements[10] *= l),
					e.setFromRotationMatrix(Lt),
					(n.x = r),
					(n.y = o),
					(n.z = s),
					this
				);
			},
			makePerspective: function (t, e, n, i, r, o) {
				void 0 === o &&
					console.warn(
						"THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
					);
				const s = this.elements,
					a = (2 * r) / (e - t),
					c = (2 * r) / (n - i),
					l = (e + t) / (e - t),
					h = (n + i) / (n - i),
					u = -(o + r) / (o - r),
					d = (-2 * o * r) / (o - r);
				return (
					(s[0] = a),
					(s[4] = 0),
					(s[8] = l),
					(s[12] = 0),
					(s[1] = 0),
					(s[5] = c),
					(s[9] = h),
					(s[13] = 0),
					(s[2] = 0),
					(s[6] = 0),
					(s[10] = u),
					(s[14] = d),
					(s[3] = 0),
					(s[7] = 0),
					(s[11] = -1),
					(s[15] = 0),
					this
				);
			},
			makeOrthographic: function (t, e, n, i, r, o) {
				const s = this.elements,
					a = 1 / (e - t),
					c = 1 / (n - i),
					l = 1 / (o - r),
					h = (e + t) * a,
					u = (n + i) * c,
					d = (o + r) * l;
				return (
					(s[0] = 2 * a),
					(s[4] = 0),
					(s[8] = 0),
					(s[12] = -h),
					(s[1] = 0),
					(s[5] = 2 * c),
					(s[9] = 0),
					(s[13] = -u),
					(s[2] = 0),
					(s[6] = 0),
					(s[10] = -2 * l),
					(s[14] = -d),
					(s[3] = 0),
					(s[7] = 0),
					(s[11] = 0),
					(s[15] = 1),
					this
				);
			},
			equals: function (t) {
				const e = this.elements,
					n = t.elements;
				for (let t = 0; t < 16; t++) if (e[t] !== n[t]) return !1;
				return !0;
			},
			fromArray: function (t, e) {
				void 0 === e && (e = 0);
				for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
				return this;
			},
			toArray: function (t, e) {
				void 0 === t && (t = []), void 0 === e && (e = 0);
				const n = this.elements;
				return (
					(t[e] = n[0]),
					(t[e + 1] = n[1]),
					(t[e + 2] = n[2]),
					(t[e + 3] = n[3]),
					(t[e + 4] = n[4]),
					(t[e + 5] = n[5]),
					(t[e + 6] = n[6]),
					(t[e + 7] = n[7]),
					(t[e + 8] = n[8]),
					(t[e + 9] = n[9]),
					(t[e + 10] = n[10]),
					(t[e + 11] = n[11]),
					(t[e + 12] = n[12]),
					(t[e + 13] = n[13]),
					(t[e + 14] = n[14]),
					(t[e + 15] = n[15]),
					t
				);
			},
		});
		const Nt = new Dt(),
			zt = new Mt();
		function Ut(t = 0, e = 0, n = 0, i = Ut.DefaultOrder) {
			(this._x = t), (this._y = e), (this._z = n), (this._order = i);
		}
		function Ht() {
			this.mask = 1;
		}
		(Ut.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"]),
			(Ut.DefaultOrder = "XYZ"),
			Object.defineProperties(Ut.prototype, {
				x: {
					get: function () {
						return this._x;
					},
					set: function (t) {
						(this._x = t), this._onChangeCallback();
					},
				},
				y: {
					get: function () {
						return this._y;
					},
					set: function (t) {
						(this._y = t), this._onChangeCallback();
					},
				},
				z: {
					get: function () {
						return this._z;
					},
					set: function (t) {
						(this._z = t), this._onChangeCallback();
					},
				},
				order: {
					get: function () {
						return this._order;
					},
					set: function (t) {
						(this._order = t), this._onChangeCallback();
					},
				},
			}),
			Object.assign(Ut.prototype, {
				isEuler: !0,
				set: function (t, e, n, i) {
					return (
						(this._x = t),
						(this._y = e),
						(this._z = n),
						(this._order = i || this._order),
						this._onChangeCallback(),
						this
					);
				},
				clone: function () {
					return new this.constructor(this._x, this._y, this._z, this._order);
				},
				copy: function (t) {
					return (
						(this._x = t._x),
						(this._y = t._y),
						(this._z = t._z),
						(this._order = t._order),
						this._onChangeCallback(),
						this
					);
				},
				setFromRotationMatrix: function (t, e, n) {
					const i = pt.clamp,
						r = t.elements,
						o = r[0],
						s = r[4],
						a = r[8],
						c = r[1],
						l = r[5],
						h = r[9],
						u = r[2],
						d = r[6],
						p = r[10];
					switch ((e = e || this._order)) {
						case "XYZ":
							(this._y = Math.asin(i(a, -1, 1))),
								Math.abs(a) < 0.9999999
									? ((this._x = Math.atan2(-h, p)),
									  (this._z = Math.atan2(-s, o)))
									: ((this._x = Math.atan2(d, l)), (this._z = 0));
							break;
						case "YXZ":
							(this._x = Math.asin(-i(h, -1, 1))),
								Math.abs(h) < 0.9999999
									? ((this._y = Math.atan2(a, p)), (this._z = Math.atan2(c, l)))
									: ((this._y = Math.atan2(-u, o)), (this._z = 0));
							break;
						case "ZXY":
							(this._x = Math.asin(i(d, -1, 1))),
								Math.abs(d) < 0.9999999
									? ((this._y = Math.atan2(-u, p)),
									  (this._z = Math.atan2(-s, l)))
									: ((this._y = 0), (this._z = Math.atan2(c, o)));
							break;
						case "ZYX":
							(this._y = Math.asin(-i(u, -1, 1))),
								Math.abs(u) < 0.9999999
									? ((this._x = Math.atan2(d, p)), (this._z = Math.atan2(c, o)))
									: ((this._x = 0), (this._z = Math.atan2(-s, l)));
							break;
						case "YZX":
							(this._z = Math.asin(i(c, -1, 1))),
								Math.abs(c) < 0.9999999
									? ((this._x = Math.atan2(-h, l)),
									  (this._y = Math.atan2(-u, o)))
									: ((this._x = 0), (this._y = Math.atan2(a, p)));
							break;
						case "XZY":
							(this._z = Math.asin(-i(s, -1, 1))),
								Math.abs(s) < 0.9999999
									? ((this._x = Math.atan2(d, l)), (this._y = Math.atan2(a, o)))
									: ((this._x = Math.atan2(-h, p)), (this._y = 0));
							break;
						default:
							console.warn(
								"THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
									e
							);
					}
					return (this._order = e), !1 !== n && this._onChangeCallback(), this;
				},
				setFromQuaternion: function (t, e, n) {
					return (
						Nt.makeRotationFromQuaternion(t),
						this.setFromRotationMatrix(Nt, e, n)
					);
				},
				setFromVector3: function (t, e) {
					return this.set(t.x, t.y, t.z, e || this._order);
				},
				reorder: function (t) {
					return zt.setFromEuler(this), this.setFromQuaternion(zt, t);
				},
				equals: function (t) {
					return (
						t._x === this._x &&
						t._y === this._y &&
						t._z === this._z &&
						t._order === this._order
					);
				},
				fromArray: function (t) {
					return (
						(this._x = t[0]),
						(this._y = t[1]),
						(this._z = t[2]),
						void 0 !== t[3] && (this._order = t[3]),
						this._onChangeCallback(),
						this
					);
				},
				toArray: function (t, e) {
					return (
						void 0 === t && (t = []),
						void 0 === e && (e = 0),
						(t[e] = this._x),
						(t[e + 1] = this._y),
						(t[e + 2] = this._z),
						(t[e + 3] = this._order),
						t
					);
				},
				toVector3: function (t) {
					return t
						? t.set(this._x, this._y, this._z)
						: new Et(this._x, this._y, this._z);
				},
				_onChange: function (t) {
					return (this._onChangeCallback = t), this;
				},
				_onChangeCallback: function () {},
			}),
			Object.assign(Ht.prototype, {
				set: function (t) {
					this.mask = (1 << t) | 0;
				},
				enable: function (t) {
					this.mask |= (1 << t) | 0;
				},
				enableAll: function () {
					this.mask = -1;
				},
				toggle: function (t) {
					this.mask ^= (1 << t) | 0;
				},
				disable: function (t) {
					this.mask &= ~((1 << t) | 0);
				},
				disableAll: function () {
					this.mask = 0;
				},
				test: function (t) {
					return 0 != (this.mask & t.mask);
				},
			});
		let Bt = 0;
		const Ft = new Et(),
			kt = new Mt(),
			Gt = new Dt(),
			jt = new Et(),
			Vt = new Et(),
			Wt = new Et(),
			qt = new Mt(),
			Xt = new Et(1, 0, 0),
			Yt = new Et(0, 1, 0),
			Zt = new Et(0, 0, 1),
			Jt = { type: "added" },
			Kt = { type: "removed" };
		function Qt() {
			Object.defineProperty(this, "id", { value: Bt++ }),
				(this.uuid = pt.generateUUID()),
				(this.name = ""),
				(this.type = "Object3D"),
				(this.parent = null),
				(this.children = []),
				(this.up = Qt.DefaultUp.clone());
			const t = new Et(),
				e = new Ut(),
				n = new Mt(),
				i = new Et(1, 1, 1);
			e._onChange(function () {
				n.setFromEuler(e, !1);
			}),
				n._onChange(function () {
					e.setFromQuaternion(n, void 0, !1);
				}),
				Object.defineProperties(this, {
					position: { configurable: !0, enumerable: !0, value: t },
					rotation: { configurable: !0, enumerable: !0, value: e },
					quaternion: { configurable: !0, enumerable: !0, value: n },
					scale: { configurable: !0, enumerable: !0, value: i },
					modelViewMatrix: { value: new Dt() },
					normalMatrix: { value: new mt() },
				}),
				(this.matrix = new Dt()),
				(this.matrixWorld = new Dt()),
				(this.matrixAutoUpdate = Qt.DefaultMatrixAutoUpdate),
				(this.matrixWorldNeedsUpdate = !1),
				(this.layers = new Ht()),
				(this.visible = !0),
				(this.castShadow = !1),
				(this.receiveShadow = !1),
				(this.frustumCulled = !0),
				(this.renderOrder = 0),
				(this.userData = {});
		}
		function $t() {
			Qt.call(this),
				(this.type = "Scene"),
				(this.background = null),
				(this.environment = null),
				(this.fog = null),
				(this.overrideMaterial = null),
				(this.autoUpdate = !0),
				"undefined" != typeof __THREE_DEVTOOLS__ &&
					__THREE_DEVTOOLS__.dispatchEvent(
						new CustomEvent("observe", { detail: this })
					);
		}
		(Qt.DefaultUp = new Et(0, 1, 0)),
			(Qt.DefaultMatrixAutoUpdate = !0),
			(Qt.prototype = Object.assign(Object.create(ht.prototype), {
				constructor: Qt,
				isObject3D: !0,
				onBeforeRender: function () {},
				onAfterRender: function () {},
				applyMatrix4: function (t) {
					this.matrixAutoUpdate && this.updateMatrix(),
						this.matrix.premultiply(t),
						this.matrix.decompose(this.position, this.quaternion, this.scale);
				},
				applyQuaternion: function (t) {
					return this.quaternion.premultiply(t), this;
				},
				setRotationFromAxisAngle: function (t, e) {
					this.quaternion.setFromAxisAngle(t, e);
				},
				setRotationFromEuler: function (t) {
					this.quaternion.setFromEuler(t, !0);
				},
				setRotationFromMatrix: function (t) {
					this.quaternion.setFromRotationMatrix(t);
				},
				setRotationFromQuaternion: function (t) {
					this.quaternion.copy(t);
				},
				rotateOnAxis: function (t, e) {
					return kt.setFromAxisAngle(t, e), this.quaternion.multiply(kt), this;
				},
				rotateOnWorldAxis: function (t, e) {
					return (
						kt.setFromAxisAngle(t, e), this.quaternion.premultiply(kt), this
					);
				},
				rotateX: function (t) {
					return this.rotateOnAxis(Xt, t);
				},
				rotateY: function (t) {
					return this.rotateOnAxis(Yt, t);
				},
				rotateZ: function (t) {
					return this.rotateOnAxis(Zt, t);
				},
				translateOnAxis: function (t, e) {
					return (
						Ft.copy(t).applyQuaternion(this.quaternion),
						this.position.add(Ft.multiplyScalar(e)),
						this
					);
				},
				translateX: function (t) {
					return this.translateOnAxis(Xt, t);
				},
				translateY: function (t) {
					return this.translateOnAxis(Yt, t);
				},
				translateZ: function (t) {
					return this.translateOnAxis(Zt, t);
				},
				localToWorld: function (t) {
					return t.applyMatrix4(this.matrixWorld);
				},
				worldToLocal: function (t) {
					return t.applyMatrix4(Gt.getInverse(this.matrixWorld));
				},
				lookAt: function (t, e, n) {
					t.isVector3 ? jt.copy(t) : jt.set(t, e, n);
					const i = this.parent;
					this.updateWorldMatrix(!0, !1),
						Vt.setFromMatrixPosition(this.matrixWorld),
						this.isCamera || this.isLight
							? Gt.lookAt(Vt, jt, this.up)
							: Gt.lookAt(jt, Vt, this.up),
						this.quaternion.setFromRotationMatrix(Gt),
						i &&
							(Gt.extractRotation(i.matrixWorld),
							kt.setFromRotationMatrix(Gt),
							this.quaternion.premultiply(kt.inverse()));
				},
				add: function (t) {
					if (arguments.length > 1) {
						for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
						return this;
					}
					return t === this
						? (console.error(
								"THREE.Object3D.add: object can't be added as a child of itself.",
								t
						  ),
						  this)
						: (t && t.isObject3D
								? (null !== t.parent && t.parent.remove(t),
								  (t.parent = this),
								  this.children.push(t),
								  t.dispatchEvent(Jt))
								: console.error(
										"THREE.Object3D.add: object not an instance of THREE.Object3D.",
										t
								  ),
						  this);
				},
				remove: function (t) {
					if (arguments.length > 1) {
						for (let t = 0; t < arguments.length; t++)
							this.remove(arguments[t]);
						return this;
					}
					const e = this.children.indexOf(t);
					return (
						-1 !== e &&
							((t.parent = null),
							this.children.splice(e, 1),
							t.dispatchEvent(Kt)),
						this
					);
				},
				attach: function (t) {
					return (
						this.updateWorldMatrix(!0, !1),
						Gt.getInverse(this.matrixWorld),
						null !== t.parent &&
							(t.parent.updateWorldMatrix(!0, !1),
							Gt.multiply(t.parent.matrixWorld)),
						t.applyMatrix4(Gt),
						t.updateWorldMatrix(!1, !1),
						this.add(t),
						this
					);
				},
				getObjectById: function (t) {
					return this.getObjectByProperty("id", t);
				},
				getObjectByName: function (t) {
					return this.getObjectByProperty("name", t);
				},
				getObjectByProperty: function (t, e) {
					if (this[t] === e) return this;
					for (let n = 0, i = this.children.length; n < i; n++) {
						const i = this.children[n].getObjectByProperty(t, e);
						if (void 0 !== i) return i;
					}
				},
				getWorldPosition: function (t) {
					return (
						void 0 === t &&
							(console.warn(
								"THREE.Object3D: .getWorldPosition() target is now required"
							),
							(t = new Et())),
						this.updateMatrixWorld(!0),
						t.setFromMatrixPosition(this.matrixWorld)
					);
				},
				getWorldQuaternion: function (t) {
					return (
						void 0 === t &&
							(console.warn(
								"THREE.Object3D: .getWorldQuaternion() target is now required"
							),
							(t = new Mt())),
						this.updateMatrixWorld(!0),
						this.matrixWorld.decompose(Vt, t, Wt),
						t
					);
				},
				getWorldScale: function (t) {
					return (
						void 0 === t &&
							(console.warn(
								"THREE.Object3D: .getWorldScale() target is now required"
							),
							(t = new Et())),
						this.updateMatrixWorld(!0),
						this.matrixWorld.decompose(Vt, qt, t),
						t
					);
				},
				getWorldDirection: function (t) {
					void 0 === t &&
						(console.warn(
							"THREE.Object3D: .getWorldDirection() target is now required"
						),
						(t = new Et())),
						this.updateMatrixWorld(!0);
					const e = this.matrixWorld.elements;
					return t.set(e[8], e[9], e[10]).normalize();
				},
				raycast: function () {},
				traverse: function (t) {
					t(this);
					const e = this.children;
					for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
				},
				traverseVisible: function (t) {
					if (!1 === this.visible) return;
					t(this);
					const e = this.children;
					for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
				},
				traverseAncestors: function (t) {
					const e = this.parent;
					null !== e && (t(e), e.traverseAncestors(t));
				},
				updateMatrix: function () {
					this.matrix.compose(this.position, this.quaternion, this.scale),
						(this.matrixWorldNeedsUpdate = !0);
				},
				updateMatrixWorld: function (t) {
					this.matrixAutoUpdate && this.updateMatrix(),
						(this.matrixWorldNeedsUpdate || t) &&
							(null === this.parent
								? this.matrixWorld.copy(this.matrix)
								: this.matrixWorld.multiplyMatrices(
										this.parent.matrixWorld,
										this.matrix
								  ),
							(this.matrixWorldNeedsUpdate = !1),
							(t = !0));
					const e = this.children;
					for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t);
				},
				updateWorldMatrix: function (t, e) {
					const n = this.parent;
					if (
						(!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
						this.matrixAutoUpdate && this.updateMatrix(),
						null === this.parent
							? this.matrixWorld.copy(this.matrix)
							: this.matrixWorld.multiplyMatrices(
									this.parent.matrixWorld,
									this.matrix
							  ),
						!0 === e)
					) {
						const t = this.children;
						for (let e = 0, n = t.length; e < n; e++)
							t[e].updateWorldMatrix(!1, !0);
					}
				},
				toJSON: function (t) {
					const e = void 0 === t || "string" == typeof t,
						n = {};
					e &&
						((t = {
							geometries: {},
							materials: {},
							textures: {},
							images: {},
							shapes: {},
						}),
						(n.metadata = {
							version: 4.5,
							type: "Object",
							generator: "Object3D.toJSON",
						}));
					const i = {};
					function r(e, n) {
						return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
					}
					if (
						((i.uuid = this.uuid),
						(i.type = this.type),
						"" !== this.name && (i.name = this.name),
						!0 === this.castShadow && (i.castShadow = !0),
						!0 === this.receiveShadow && (i.receiveShadow = !0),
						!1 === this.visible && (i.visible = !1),
						!1 === this.frustumCulled && (i.frustumCulled = !1),
						0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
						"{}" !== JSON.stringify(this.userData) &&
							(i.userData = this.userData),
						(i.layers = this.layers.mask),
						(i.matrix = this.matrix.toArray()),
						!1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
						this.isInstancedMesh &&
							((i.type = "InstancedMesh"),
							(i.count = this.count),
							(i.instanceMatrix = this.instanceMatrix.toJSON())),
						this.isMesh || this.isLine || this.isPoints)
					) {
						i.geometry = r(t.geometries, this.geometry);
						const e = this.geometry.parameters;
						if (void 0 !== e && void 0 !== e.shapes) {
							const n = e.shapes;
							if (Array.isArray(n))
								for (let e = 0, i = n.length; e < i; e++) {
									const i = n[e];
									r(t.shapes, i);
								}
							else r(t.shapes, n);
						}
					}
					if (void 0 !== this.material)
						if (Array.isArray(this.material)) {
							const e = [];
							for (let n = 0, i = this.material.length; n < i; n++)
								e.push(r(t.materials, this.material[n]));
							i.material = e;
						} else i.material = r(t.materials, this.material);
					if (this.children.length > 0) {
						i.children = [];
						for (let e = 0; e < this.children.length; e++)
							i.children.push(this.children[e].toJSON(t).object);
					}
					if (e) {
						const e = o(t.geometries),
							i = o(t.materials),
							r = o(t.textures),
							s = o(t.images),
							a = o(t.shapes);
						e.length > 0 && (n.geometries = e),
							i.length > 0 && (n.materials = i),
							r.length > 0 && (n.textures = r),
							s.length > 0 && (n.images = s),
							a.length > 0 && (n.shapes = a);
					}
					return (n.object = i), n;
					function o(t) {
						const e = [];
						for (const n in t) {
							const i = t[n];
							delete i.metadata, e.push(i);
						}
						return e;
					}
				},
				clone: function (t) {
					return new this.constructor().copy(this, t);
				},
				copy: function (t, e) {
					if (
						(void 0 === e && (e = !0),
						(this.name = t.name),
						this.up.copy(t.up),
						this.position.copy(t.position),
						(this.rotation.order = t.rotation.order),
						this.quaternion.copy(t.quaternion),
						this.scale.copy(t.scale),
						this.matrix.copy(t.matrix),
						this.matrixWorld.copy(t.matrixWorld),
						(this.matrixAutoUpdate = t.matrixAutoUpdate),
						(this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
						(this.layers.mask = t.layers.mask),
						(this.visible = t.visible),
						(this.castShadow = t.castShadow),
						(this.receiveShadow = t.receiveShadow),
						(this.frustumCulled = t.frustumCulled),
						(this.renderOrder = t.renderOrder),
						(this.userData = JSON.parse(JSON.stringify(t.userData))),
						!0 === e)
					)
						for (let e = 0; e < t.children.length; e++) {
							const n = t.children[e];
							this.add(n.clone());
						}
					return this;
				},
			})),
			($t.prototype = Object.assign(Object.create(Qt.prototype), {
				constructor: $t,
				isScene: !0,
				copy: function (t, e) {
					return (
						Qt.prototype.copy.call(this, t, e),
						null !== t.background && (this.background = t.background.clone()),
						null !== t.environment &&
							(this.environment = t.environment.clone()),
						null !== t.fog && (this.fog = t.fog.clone()),
						null !== t.overrideMaterial &&
							(this.overrideMaterial = t.overrideMaterial.clone()),
						(this.autoUpdate = t.autoUpdate),
						(this.matrixAutoUpdate = t.matrixAutoUpdate),
						this
					);
				},
				toJSON: function (t) {
					const e = Qt.prototype.toJSON.call(this, t);
					return (
						null !== this.background &&
							(e.object.background = this.background.toJSON(t)),
						null !== this.environment &&
							(e.object.environment = this.environment.toJSON(t)),
						null !== this.fog && (e.object.fog = this.fog.toJSON()),
						e
					);
				},
				dispose: function () {
					this.dispatchEvent({ type: "dispose" });
				},
			}));
		const te = [
				new Et(),
				new Et(),
				new Et(),
				new Et(),
				new Et(),
				new Et(),
				new Et(),
				new Et(),
			],
			ee = new Et(),
			ne = new pe(),
			ie = new Et(),
			re = new Et(),
			oe = new Et(),
			se = new Et(),
			ae = new Et(),
			ce = new Et(),
			le = new Et(),
			he = new Et(),
			ue = new Et(),
			de = new Et();
		function pe(t, e) {
			(this.min = void 0 !== t ? t : new Et(1 / 0, 1 / 0, 1 / 0)),
				(this.max = void 0 !== e ? e : new Et(-1 / 0, -1 / 0, -1 / 0));
		}
		function fe(t, e, n, i, r) {
			for (let o = 0, s = t.length - 3; o <= s; o += 3) {
				de.fromArray(t, o);
				const s =
						r.x * Math.abs(de.x) + r.y * Math.abs(de.y) + r.z * Math.abs(de.z),
					a = e.dot(de),
					c = n.dot(de),
					l = i.dot(de);
				if (Math.max(-Math.max(a, c, l), Math.min(a, c, l)) > s) return !1;
			}
			return !0;
		}
		Object.assign(pe.prototype, {
			isBox3: !0,
			set: function (t, e) {
				return this.min.copy(t), this.max.copy(e), this;
			},
			setFromArray: function (t) {
				let e = 1 / 0,
					n = 1 / 0,
					i = 1 / 0,
					r = -1 / 0,
					o = -1 / 0,
					s = -1 / 0;
				for (let a = 0, c = t.length; a < c; a += 3) {
					const c = t[a],
						l = t[a + 1],
						h = t[a + 2];
					c < e && (e = c),
						l < n && (n = l),
						h < i && (i = h),
						c > r && (r = c),
						l > o && (o = l),
						h > s && (s = h);
				}
				return this.min.set(e, n, i), this.max.set(r, o, s), this;
			},
			setFromBufferAttribute: function (t) {
				let e = 1 / 0,
					n = 1 / 0,
					i = 1 / 0,
					r = -1 / 0,
					o = -1 / 0,
					s = -1 / 0;
				for (let a = 0, c = t.count; a < c; a++) {
					const c = t.getX(a),
						l = t.getY(a),
						h = t.getZ(a);
					c < e && (e = c),
						l < n && (n = l),
						h < i && (i = h),
						c > r && (r = c),
						l > o && (o = l),
						h > s && (s = h);
				}
				return this.min.set(e, n, i), this.max.set(r, o, s), this;
			},
			setFromPoints: function (t) {
				this.makeEmpty();
				for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
				return this;
			},
			setFromCenterAndSize: function (t, e) {
				const n = ee.copy(e).multiplyScalar(0.5);
				return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
			},
			setFromObject: function (t) {
				return this.makeEmpty(), this.expandByObject(t);
			},
			clone: function () {
				return new this.constructor().copy(this);
			},
			copy: function (t) {
				return this.min.copy(t.min), this.max.copy(t.max), this;
			},
			makeEmpty: function () {
				return (
					(this.min.x = this.min.y = this.min.z = 1 / 0),
					(this.max.x = this.max.y = this.max.z = -1 / 0),
					this
				);
			},
			isEmpty: function () {
				return (
					this.max.x < this.min.x ||
					this.max.y < this.min.y ||
					this.max.z < this.min.z
				);
			},
			getCenter: function (t) {
				return (
					void 0 === t &&
						(console.warn("THREE.Box3: .getCenter() target is now required"),
						(t = new Et())),
					this.isEmpty()
						? t.set(0, 0, 0)
						: t.addVectors(this.min, this.max).multiplyScalar(0.5)
				);
			},
			getSize: function (t) {
				return (
					void 0 === t &&
						(console.warn("THREE.Box3: .getSize() target is now required"),
						(t = new Et())),
					this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
				);
			},
			expandByPoint: function (t) {
				return this.min.min(t), this.max.max(t), this;
			},
			expandByVector: function (t) {
				return this.min.sub(t), this.max.add(t), this;
			},
			expandByScalar: function (t) {
				return this.min.addScalar(-t), this.max.addScalar(t), this;
			},
			expandByObject: function (t) {
				t.updateWorldMatrix(!1, !1);
				const e = t.geometry;
				void 0 !== e &&
					(null === e.boundingBox && e.computeBoundingBox(),
					ne.copy(e.boundingBox),
					ne.applyMatrix4(t.matrixWorld),
					this.union(ne));
				const n = t.children;
				for (let t = 0, e = n.length; t < e; t++) this.expandByObject(n[t]);
				return this;
			},
			containsPoint: function (t) {
				return !(
					t.x < this.min.x ||
					t.x > this.max.x ||
					t.y < this.min.y ||
					t.y > this.max.y ||
					t.z < this.min.z ||
					t.z > this.max.z
				);
			},
			containsBox: function (t) {
				return (
					this.min.x <= t.min.x &&
					t.max.x <= this.max.x &&
					this.min.y <= t.min.y &&
					t.max.y <= this.max.y &&
					this.min.z <= t.min.z &&
					t.max.z <= this.max.z
				);
			},
			getParameter: function (t, e) {
				return (
					void 0 === e &&
						(console.warn("THREE.Box3: .getParameter() target is now required"),
						(e = new Et())),
					e.set(
						(t.x - this.min.x) / (this.max.x - this.min.x),
						(t.y - this.min.y) / (this.max.y - this.min.y),
						(t.z - this.min.z) / (this.max.z - this.min.z)
					)
				);
			},
			intersectsBox: function (t) {
				return !(
					t.max.x < this.min.x ||
					t.min.x > this.max.x ||
					t.max.y < this.min.y ||
					t.min.y > this.max.y ||
					t.max.z < this.min.z ||
					t.min.z > this.max.z
				);
			},
			intersectsSphere: function (t) {
				return (
					this.clampPoint(t.center, ee),
					ee.distanceToSquared(t.center) <= t.radius * t.radius
				);
			},
			intersectsPlane: function (t) {
				let e, n;
				return (
					t.normal.x > 0
						? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
						: ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
					t.normal.y > 0
						? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
						: ((e += t.normal.y * this.max.y), (n += t.normal.y * this.min.y)),
					t.normal.z > 0
						? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
						: ((e += t.normal.z * this.max.z), (n += t.normal.z * this.min.z)),
					e <= -t.constant && n >= -t.constant
				);
			},
			intersectsTriangle: function (t) {
				if (this.isEmpty()) return !1;
				this.getCenter(le),
					he.subVectors(this.max, le),
					ie.subVectors(t.a, le),
					re.subVectors(t.b, le),
					oe.subVectors(t.c, le),
					se.subVectors(re, ie),
					ae.subVectors(oe, re),
					ce.subVectors(ie, oe);
				let e = [
					0,
					-se.z,
					se.y,
					0,
					-ae.z,
					ae.y,
					0,
					-ce.z,
					ce.y,
					se.z,
					0,
					-se.x,
					ae.z,
					0,
					-ae.x,
					ce.z,
					0,
					-ce.x,
					-se.y,
					se.x,
					0,
					-ae.y,
					ae.x,
					0,
					-ce.y,
					ce.x,
					0,
				];
				return (
					!!fe(e, ie, re, oe, he) &&
					((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
					!!fe(e, ie, re, oe, he) &&
						(ue.crossVectors(se, ae),
						(e = [ue.x, ue.y, ue.z]),
						fe(e, ie, re, oe, he)))
				);
			},
			clampPoint: function (t, e) {
				return (
					void 0 === e &&
						(console.warn("THREE.Box3: .clampPoint() target is now required"),
						(e = new Et())),
					e.copy(t).clamp(this.min, this.max)
				);
			},
			distanceToPoint: function (t) {
				return ee.copy(t).clamp(this.min, this.max).sub(t).length();
			},
			getBoundingSphere: function (t) {
				return (
					void 0 === t &&
						console.error(
							"THREE.Box3: .getBoundingSphere() target is now required"
						),
					this.getCenter(t.center),
					(t.radius = 0.5 * this.getSize(ee).length()),
					t
				);
			},
			intersect: function (t) {
				return (
					this.min.max(t.min),
					this.max.min(t.max),
					this.isEmpty() && this.makeEmpty(),
					this
				);
			},
			union: function (t) {
				return this.min.min(t.min), this.max.max(t.max), this;
			},
			applyMatrix4: function (t) {
				return (
					this.isEmpty() ||
						(te[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
						te[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
						te[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
						te[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
						te[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
						te[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
						te[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
						te[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
						this.setFromPoints(te)),
					this
				);
			},
			translate: function (t) {
				return this.min.add(t), this.max.add(t), this;
			},
			equals: function (t) {
				return t.min.equals(this.min) && t.max.equals(this.max);
			},
		});
		const me = new pe();
		function ge(t, e) {
			(this.center = void 0 !== t ? t : new Et()),
				(this.radius = void 0 !== e ? e : -1);
		}
		Object.assign(ge.prototype, {
			set: function (t, e) {
				return this.center.copy(t), (this.radius = e), this;
			},
			setFromPoints: function (t, e) {
				const n = this.center;
				void 0 !== e ? n.copy(e) : me.setFromPoints(t).getCenter(n);
				let i = 0;
				for (let e = 0, r = t.length; e < r; e++)
					i = Math.max(i, n.distanceToSquared(t[e]));
				return (this.radius = Math.sqrt(i)), this;
			},
			clone: function () {
				return new this.constructor().copy(this);
			},
			copy: function (t) {
				return this.center.copy(t.center), (this.radius = t.radius), this;
			},
			isEmpty: function () {
				return this.radius < 0;
			},
			makeEmpty: function () {
				return this.center.set(0, 0, 0), (this.radius = -1), this;
			},
			containsPoint: function (t) {
				return t.distanceToSquared(this.center) <= this.radius * this.radius;
			},
			distanceToPoint: function (t) {
				return t.distanceTo(this.center) - this.radius;
			},
			intersectsSphere: function (t) {
				const e = this.radius + t.radius;
				return t.center.distanceToSquared(this.center) <= e * e;
			},
			intersectsBox: function (t) {
				return t.intersectsSphere(this);
			},
			intersectsPlane: function (t) {
				return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
			},
			clampPoint: function (t, e) {
				const n = this.center.distanceToSquared(t);
				return (
					void 0 === e &&
						(console.warn("THREE.Sphere: .clampPoint() target is now required"),
						(e = new Et())),
					e.copy(t),
					n > this.radius * this.radius &&
						(e.sub(this.center).normalize(),
						e.multiplyScalar(this.radius).add(this.center)),
					e
				);
			},
			getBoundingBox: function (t) {
				return (
					void 0 === t &&
						(console.warn(
							"THREE.Sphere: .getBoundingBox() target is now required"
						),
						(t = new pe())),
					this.isEmpty()
						? (t.makeEmpty(), t)
						: (t.set(this.center, this.center),
						  t.expandByScalar(this.radius),
						  t)
				);
			},
			applyMatrix4: function (t) {
				return (
					this.center.applyMatrix4(t),
					(this.radius = this.radius * t.getMaxScaleOnAxis()),
					this
				);
			},
			translate: function (t) {
				return this.center.add(t), this;
			},
			equals: function (t) {
				return t.center.equals(this.center) && t.radius === this.radius;
			},
		});
		const ve = new Et(),
			ye = new Et(),
			xe = new Et(),
			be = new Et(),
			we = new Et(),
			_e = new Et(),
			Me = new Et();
		function Se(t, e) {
			(this.origin = void 0 !== t ? t : new Et()),
				(this.direction = void 0 !== e ? e : new Et(0, 0, -1));
		}
		Object.assign(Se.prototype, {
			set: function (t, e) {
				return this.origin.copy(t), this.direction.copy(e), this;
			},
			clone: function () {
				return new this.constructor().copy(this);
			},
			copy: function (t) {
				return (
					this.origin.copy(t.origin), this.direction.copy(t.direction), this
				);
			},
			at: function (t, e) {
				return (
					void 0 === e &&
						(console.warn("THREE.Ray: .at() target is now required"),
						(e = new Et())),
					e.copy(this.direction).multiplyScalar(t).add(this.origin)
				);
			},
			lookAt: function (t) {
				return this.direction.copy(t).sub(this.origin).normalize(), this;
			},
			recast: function (t) {
				return this.origin.copy(this.at(t, ve)), this;
			},
			closestPointToPoint: function (t, e) {
				void 0 === e &&
					(console.warn(
						"THREE.Ray: .closestPointToPoint() target is now required"
					),
					(e = new Et())),
					e.subVectors(t, this.origin);
				const n = e.dot(this.direction);
				return n < 0
					? e.copy(this.origin)
					: e.copy(this.direction).multiplyScalar(n).add(this.origin);
			},
			distanceToPoint: function (t) {
				return Math.sqrt(this.distanceSqToPoint(t));
			},
			distanceSqToPoint: function (t) {
				const e = ve.subVectors(t, this.origin).dot(this.direction);
				return e < 0
					? this.origin.distanceToSquared(t)
					: (ve.copy(this.direction).multiplyScalar(e).add(this.origin),
					  ve.distanceToSquared(t));
			},
			distanceSqToSegment: function (t, e, n, i) {
				ye.copy(t).add(e).multiplyScalar(0.5),
					xe.copy(e).sub(t).normalize(),
					be.copy(this.origin).sub(ye);
				const r = 0.5 * t.distanceTo(e),
					o = -this.direction.dot(xe),
					s = be.dot(this.direction),
					a = -be.dot(xe),
					c = be.lengthSq(),
					l = Math.abs(1 - o * o);
				let h, u, d, p;
				if (l > 0)
					if (((h = o * a - s), (u = o * s - a), (p = r * l), h >= 0))
						if (u >= -p)
							if (u <= p) {
								const t = 1 / l;
								(h *= t),
									(u *= t),
									(d = h * (h + o * u + 2 * s) + u * (o * h + u + 2 * a) + c);
							} else
								(u = r),
									(h = Math.max(0, -(o * u + s))),
									(d = -h * h + u * (u + 2 * a) + c);
						else
							(u = -r),
								(h = Math.max(0, -(o * u + s))),
								(d = -h * h + u * (u + 2 * a) + c);
					else
						u <= -p
							? ((h = Math.max(0, -(-o * r + s))),
							  (u = h > 0 ? -r : Math.min(Math.max(-r, -a), r)),
							  (d = -h * h + u * (u + 2 * a) + c))
							: u <= p
							? ((h = 0),
							  (u = Math.min(Math.max(-r, -a), r)),
							  (d = u * (u + 2 * a) + c))
							: ((h = Math.max(0, -(o * r + s))),
							  (u = h > 0 ? r : Math.min(Math.max(-r, -a), r)),
							  (d = -h * h + u * (u + 2 * a) + c));
				else
					(u = o > 0 ? -r : r),
						(h = Math.max(0, -(o * u + s))),
						(d = -h * h + u * (u + 2 * a) + c);
				return (
					n && n.copy(this.direction).multiplyScalar(h).add(this.origin),
					i && i.copy(xe).multiplyScalar(u).add(ye),
					d
				);
			},
			intersectSphere: function (t, e) {
				ve.subVectors(t.center, this.origin);
				const n = ve.dot(this.direction),
					i = ve.dot(ve) - n * n,
					r = t.radius * t.radius;
				if (i > r) return null;
				const o = Math.sqrt(r - i),
					s = n - o,
					a = n + o;
				return s < 0 && a < 0 ? null : s < 0 ? this.at(a, e) : this.at(s, e);
			},
			intersectsSphere: function (t) {
				return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
			},
			distanceToPlane: function (t) {
				const e = t.normal.dot(this.direction);
				if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
				const n = -(this.origin.dot(t.normal) + t.constant) / e;
				return n >= 0 ? n : null;
			},
			intersectPlane: function (t, e) {
				const n = this.distanceToPlane(t);
				return null === n ? null : this.at(n, e);
			},
			intersectsPlane: function (t) {
				const e = t.distanceToPoint(this.origin);
				if (0 === e) return !0;
				return t.normal.dot(this.direction) * e < 0;
			},
			intersectBox: function (t, e) {
				let n, i, r, o, s, a;
				const c = 1 / this.direction.x,
					l = 1 / this.direction.y,
					h = 1 / this.direction.z,
					u = this.origin;
				return (
					c >= 0
						? ((n = (t.min.x - u.x) * c), (i = (t.max.x - u.x) * c))
						: ((n = (t.max.x - u.x) * c), (i = (t.min.x - u.x) * c)),
					l >= 0
						? ((r = (t.min.y - u.y) * l), (o = (t.max.y - u.y) * l))
						: ((r = (t.max.y - u.y) * l), (o = (t.min.y - u.y) * l)),
					n > o || r > i
						? null
						: ((r > n || n != n) && (n = r),
						  (o < i || i != i) && (i = o),
						  h >= 0
								? ((s = (t.min.z - u.z) * h), (a = (t.max.z - u.z) * h))
								: ((s = (t.max.z - u.z) * h), (a = (t.min.z - u.z) * h)),
						  n > a || s > i
								? null
								: ((s > n || n != n) && (n = s),
								  (a < i || i != i) && (i = a),
								  i < 0 ? null : this.at(n >= 0 ? n : i, e)))
				);
			},
			intersectsBox: function (t) {
				return null !== this.intersectBox(t, ve);
			},
			intersectTriangle: function (t, e, n, i, r) {
				we.subVectors(e, t), _e.subVectors(n, t), Me.crossVectors(we, _e);
				let o,
					s = this.direction.dot(Me);
				if (s > 0) {
					if (i) return null;
					o = 1;
				} else {
					if (!(s < 0)) return null;
					(o = -1), (s = -s);
				}
				be.subVectors(this.origin, t);
				const a = o * this.direction.dot(_e.crossVectors(be, _e));
				if (a < 0) return null;
				const c = o * this.direction.dot(we.cross(be));
				if (c < 0) return null;
				if (a + c > s) return null;
				const l = -o * be.dot(Me);
				return l < 0 ? null : this.at(l / s, r);
			},
			applyMatrix4: function (t) {
				return (
					this.origin.applyMatrix4(t),
					this.direction.transformDirection(t),
					this
				);
			},
			equals: function (t) {
				return (
					t.origin.equals(this.origin) && t.direction.equals(this.direction)
				);
			},
		});
		const Te = new Et(),
			Ee = new Et(),
			Ae = new mt();
		function Le(t, e) {
			(this.normal = void 0 !== t ? t : new Et(1, 0, 0)),
				(this.constant = void 0 !== e ? e : 0);
		}
		Object.assign(Le.prototype, {
			isPlane: !0,
			set: function (t, e) {
				return this.normal.copy(t), (this.constant = e), this;
			},
			setComponents: function (t, e, n, i) {
				return this.normal.set(t, e, n), (this.constant = i), this;
			},
			setFromNormalAndCoplanarPoint: function (t, e) {
				return this.normal.copy(t), (this.constant = -e.dot(this.normal)), this;
			},
			setFromCoplanarPoints: function (t, e, n) {
				const i = Te.subVectors(n, e).cross(Ee.subVectors(t, e)).normalize();
				return this.setFromNormalAndCoplanarPoint(i, t), this;
			},
			clone: function () {
				return new this.constructor().copy(this);
			},
			copy: function (t) {
				return this.normal.copy(t.normal), (this.constant = t.constant), this;
			},
			normalize: function () {
				const t = 1 / this.normal.length();
				return this.normal.multiplyScalar(t), (this.constant *= t), this;
			},
			negate: function () {
				return (this.constant *= -1), this.normal.negate(), this;
			},
			distanceToPoint: function (t) {
				return this.normal.dot(t) + this.constant;
			},
			distanceToSphere: function (t) {
				return this.distanceToPoint(t.center) - t.radius;
			},
			projectPoint: function (t, e) {
				return (
					void 0 === e &&
						(console.warn(
							"THREE.Plane: .projectPoint() target is now required"
						),
						(e = new Et())),
					e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
				);
			},
			intersectLine: function (t, e) {
				void 0 === e &&
					(console.warn("THREE.Plane: .intersectLine() target is now required"),
					(e = new Et()));
				const n = t.delta(Te),
					i = this.normal.dot(n);
				if (0 === i)
					return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : void 0;
				const r = -(t.start.dot(this.normal) + this.constant) / i;
				return r < 0 || r > 1
					? void 0
					: e.copy(n).multiplyScalar(r).add(t.start);
			},
			intersectsLine: function (t) {
				const e = this.distanceToPoint(t.start),
					n = this.distanceToPoint(t.end);
				return (e < 0 && n > 0) || (n < 0 && e > 0);
			},
			intersectsBox: function (t) {
				return t.intersectsPlane(this);
			},
			intersectsSphere: function (t) {
				return t.intersectsPlane(this);
			},
			coplanarPoint: function (t) {
				return (
					void 0 === t &&
						(console.warn(
							"THREE.Plane: .coplanarPoint() target is now required"
						),
						(t = new Et())),
					t.copy(this.normal).multiplyScalar(-this.constant)
				);
			},
			applyMatrix4: function (t, e) {
				const n = e || Ae.getNormalMatrix(t),
					i = this.coplanarPoint(Te).applyMatrix4(t),
					r = this.normal.applyMatrix3(n).normalize();
				return (this.constant = -i.dot(r)), this;
			},
			translate: function (t) {
				return (this.constant -= t.dot(this.normal)), this;
			},
			equals: function (t) {
				return t.normal.equals(this.normal) && t.constant === this.constant;
			},
		});
		const Re = new Et(),
			Pe = new Et(),
			Ce = new Et(),
			Ie = new Et(),
			Oe = new Et(),
			De = new Et(),
			Ne = new Et(),
			ze = new Et(),
			Ue = new Et(),
			He = new Et();
		function Be(t, e, n) {
			(this.a = void 0 !== t ? t : new Et()),
				(this.b = void 0 !== e ? e : new Et()),
				(this.c = void 0 !== n ? n : new Et());
		}
		Object.assign(Be, {
			getNormal: function (t, e, n, i) {
				void 0 === i &&
					(console.warn("THREE.Triangle: .getNormal() target is now required"),
					(i = new Et())),
					i.subVectors(n, e),
					Re.subVectors(t, e),
					i.cross(Re);
				const r = i.lengthSq();
				return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
			},
			getBarycoord: function (t, e, n, i, r) {
				Re.subVectors(i, e), Pe.subVectors(n, e), Ce.subVectors(t, e);
				const o = Re.dot(Re),
					s = Re.dot(Pe),
					a = Re.dot(Ce),
					c = Pe.dot(Pe),
					l = Pe.dot(Ce),
					h = o * c - s * s;
				if (
					(void 0 === r &&
						(console.warn(
							"THREE.Triangle: .getBarycoord() target is now required"
						),
						(r = new Et())),
					0 === h)
				)
					return r.set(-2, -1, -1);
				const u = 1 / h,
					d = (c * a - s * l) * u,
					p = (o * l - s * a) * u;
				return r.set(1 - d - p, p, d);
			},
			containsPoint: function (t, e, n, i) {
				return (
					Be.getBarycoord(t, e, n, i, Ie),
					Ie.x >= 0 && Ie.y >= 0 && Ie.x + Ie.y <= 1
				);
			},
			getUV: function (t, e, n, i, r, o, s, a) {
				return (
					this.getBarycoord(t, e, n, i, Ie),
					a.set(0, 0),
					a.addScaledVector(r, Ie.x),
					a.addScaledVector(o, Ie.y),
					a.addScaledVector(s, Ie.z),
					a
				);
			},
			isFrontFacing: function (t, e, n, i) {
				return (
					Re.subVectors(n, e), Pe.subVectors(t, e), Re.cross(Pe).dot(i) < 0
				);
			},
		}),
			Object.assign(Be.prototype, {
				set: function (t, e, n) {
					return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
				},
				setFromPointsAndIndices: function (t, e, n, i) {
					return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
				},
				clone: function () {
					return new this.constructor().copy(this);
				},
				copy: function (t) {
					return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
				},
				getArea: function () {
					return (
						Re.subVectors(this.c, this.b),
						Pe.subVectors(this.a, this.b),
						0.5 * Re.cross(Pe).length()
					);
				},
				getMidpoint: function (t) {
					return (
						void 0 === t &&
							(console.warn(
								"THREE.Triangle: .getMidpoint() target is now required"
							),
							(t = new Et())),
						t
							.addVectors(this.a, this.b)
							.add(this.c)
							.multiplyScalar(1 / 3)
					);
				},
				getNormal: function (t) {
					return Be.getNormal(this.a, this.b, this.c, t);
				},
				getPlane: function (t) {
					return (
						void 0 === t &&
							(console.warn(
								"THREE.Triangle: .getPlane() target is now required"
							),
							(t = new Le())),
						t.setFromCoplanarPoints(this.a, this.b, this.c)
					);
				},
				getBarycoord: function (t, e) {
					return Be.getBarycoord(t, this.a, this.b, this.c, e);
				},
				getUV: function (t, e, n, i, r) {
					return Be.getUV(t, this.a, this.b, this.c, e, n, i, r);
				},
				containsPoint: function (t) {
					return Be.containsPoint(t, this.a, this.b, this.c);
				},
				isFrontFacing: function (t) {
					return Be.isFrontFacing(this.a, this.b, this.c, t);
				},
				intersectsBox: function (t) {
					return t.intersectsTriangle(this);
				},
				closestPointToPoint: function (t, e) {
					void 0 === e &&
						(console.warn(
							"THREE.Triangle: .closestPointToPoint() target is now required"
						),
						(e = new Et()));
					const n = this.a,
						i = this.b,
						r = this.c;
					let o, s;
					Oe.subVectors(i, n), De.subVectors(r, n), ze.subVectors(t, n);
					const a = Oe.dot(ze),
						c = De.dot(ze);
					if (a <= 0 && c <= 0) return e.copy(n);
					Ue.subVectors(t, i);
					const l = Oe.dot(Ue),
						h = De.dot(Ue);
					if (l >= 0 && h <= l) return e.copy(i);
					const u = a * h - l * c;
					if (u <= 0 && a >= 0 && l <= 0)
						return (o = a / (a - l)), e.copy(n).addScaledVector(Oe, o);
					He.subVectors(t, r);
					const d = Oe.dot(He),
						p = De.dot(He);
					if (p >= 0 && d <= p) return e.copy(r);
					const f = d * c - a * p;
					if (f <= 0 && c >= 0 && p <= 0)
						return (s = c / (c - p)), e.copy(n).addScaledVector(De, s);
					const m = l * p - d * h;
					if (m <= 0 && h - l >= 0 && d - p >= 0)
						return (
							Ne.subVectors(r, i),
							(s = (h - l) / (h - l + (d - p))),
							e.copy(i).addScaledVector(Ne, s)
						);
					const g = 1 / (m + f + u);
					return (
						(o = f * g),
						(s = u * g),
						e.copy(n).addScaledVector(Oe, o).addScaledVector(De, s)
					);
				},
				equals: function (t) {
					return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
				},
			});
		const Fe = {
				aliceblue: 15792383,
				antiquewhite: 16444375,
				aqua: 65535,
				aquamarine: 8388564,
				azure: 15794175,
				beige: 16119260,
				bisque: 16770244,
				black: 0,
				blanchedalmond: 16772045,
				blue: 255,
				blueviolet: 9055202,
				brown: 10824234,
				burlywood: 14596231,
				cadetblue: 6266528,
				chartreuse: 8388352,
				chocolate: 13789470,
				coral: 16744272,
				cornflowerblue: 6591981,
				cornsilk: 16775388,
				crimson: 14423100,
				cyan: 65535,
				darkblue: 139,
				darkcyan: 35723,
				darkgoldenrod: 12092939,
				darkgray: 11119017,
				darkgreen: 25600,
				darkgrey: 11119017,
				darkkhaki: 12433259,
				darkmagenta: 9109643,
				darkolivegreen: 5597999,
				darkorange: 16747520,
				darkorchid: 10040012,
				darkred: 9109504,
				darksalmon: 15308410,
				darkseagreen: 9419919,
				darkslateblue: 4734347,
				darkslategray: 3100495,
				darkslategrey: 3100495,
				darkturquoise: 52945,
				darkviolet: 9699539,
				deeppink: 16716947,
				deepskyblue: 49151,
				dimgray: 6908265,
				dimgrey: 6908265,
				dodgerblue: 2003199,
				firebrick: 11674146,
				floralwhite: 16775920,
				forestgreen: 2263842,
				fuchsia: 16711935,
				gainsboro: 14474460,
				ghostwhite: 16316671,
				gold: 16766720,
				goldenrod: 14329120,
				gray: 8421504,
				green: 32768,
				greenyellow: 11403055,
				grey: 8421504,
				honeydew: 15794160,
				hotpink: 16738740,
				indianred: 13458524,
				indigo: 4915330,
				ivory: 16777200,
				khaki: 15787660,
				lavender: 15132410,
				lavenderblush: 16773365,
				lawngreen: 8190976,
				lemonchiffon: 16775885,
				lightblue: 11393254,
				lightcoral: 15761536,
				lightcyan: 14745599,
				lightgoldenrodyellow: 16448210,
				lightgray: 13882323,
				lightgreen: 9498256,
				lightgrey: 13882323,
				lightpink: 16758465,
				lightsalmon: 16752762,
				lightseagreen: 2142890,
				lightskyblue: 8900346,
				lightslategray: 7833753,
				lightslategrey: 7833753,
				lightsteelblue: 11584734,
				lightyellow: 16777184,
				lime: 65280,
				limegreen: 3329330,
				linen: 16445670,
				magenta: 16711935,
				maroon: 8388608,
				mediumaquamarine: 6737322,
				mediumblue: 205,
				mediumorchid: 12211667,
				mediumpurple: 9662683,
				mediumseagreen: 3978097,
				mediumslateblue: 8087790,
				mediumspringgreen: 64154,
				mediumturquoise: 4772300,
				mediumvioletred: 13047173,
				midnightblue: 1644912,
				mintcream: 16121850,
				mistyrose: 16770273,
				moccasin: 16770229,
				navajowhite: 16768685,
				navy: 128,
				oldlace: 16643558,
				olive: 8421376,
				olivedrab: 7048739,
				orange: 16753920,
				orangered: 16729344,
				orchid: 14315734,
				palegoldenrod: 15657130,
				palegreen: 10025880,
				paleturquoise: 11529966,
				palevioletred: 14381203,
				papayawhip: 16773077,
				peachpuff: 16767673,
				peru: 13468991,
				pink: 16761035,
				plum: 14524637,
				powderblue: 11591910,
				purple: 8388736,
				rebeccapurple: 6697881,
				red: 16711680,
				rosybrown: 12357519,
				royalblue: 4286945,
				saddlebrown: 9127187,
				salmon: 16416882,
				sandybrown: 16032864,
				seagreen: 3050327,
				seashell: 16774638,
				sienna: 10506797,
				silver: 12632256,
				skyblue: 8900331,
				slateblue: 6970061,
				slategray: 7372944,
				slategrey: 7372944,
				snow: 16775930,
				springgreen: 65407,
				steelblue: 4620980,
				tan: 13808780,
				teal: 32896,
				thistle: 14204888,
				tomato: 16737095,
				turquoise: 4251856,
				violet: 15631086,
				wheat: 16113331,
				white: 16777215,
				whitesmoke: 16119285,
				yellow: 16776960,
				yellowgreen: 10145074,
			},
			ke = { h: 0, s: 0, l: 0 },
			Ge = { h: 0, s: 0, l: 0 };
		function je(t, e, n) {
			return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n);
		}
		function Ve(t, e, n) {
			return (
				n < 0 && (n += 1),
				n > 1 && (n -= 1),
				n < 1 / 6
					? t + 6 * (e - t) * n
					: n < 0.5
					? e
					: n < 2 / 3
					? t + 6 * (e - t) * (2 / 3 - n)
					: t
			);
		}
		function We(t) {
			return t < 0.04045
				? 0.0773993808 * t
				: Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
		}
		function qe(t) {
			return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
		}
		function Xe(t, e, n, i, r, o) {
			(this.a = t),
				(this.b = e),
				(this.c = n),
				(this.normal = i && i.isVector3 ? i : new Et()),
				(this.vertexNormals = Array.isArray(i) ? i : []),
				(this.color = r && r.isColor ? r : new je()),
				(this.vertexColors = Array.isArray(r) ? r : []),
				(this.materialIndex = void 0 !== o ? o : 0);
		}
		Object.assign(je.prototype, {
			isColor: !0,
			r: 1,
			g: 1,
			b: 1,
			set: function (t) {
				return (
					t && t.isColor
						? this.copy(t)
						: "number" == typeof t
						? this.setHex(t)
						: "string" == typeof t && this.setStyle(t),
					this
				);
			},
			setScalar: function (t) {
				return (this.r = t), (this.g = t), (this.b = t), this;
			},
			setHex: function (t) {
				return (
					(t = Math.floor(t)),
					(this.r = ((t >> 16) & 255) / 255),
					(this.g = ((t >> 8) & 255) / 255),
					(this.b = (255 & t) / 255),
					this
				);
			},
			setRGB: function (t, e, n) {
				return (this.r = t), (this.g = e), (this.b = n), this;
			},
			setHSL: function (t, e, n) {
				if (
					((t = pt.euclideanModulo(t, 1)),
					(e = pt.clamp(e, 0, 1)),
					(n = pt.clamp(n, 0, 1)),
					0 === e)
				)
					this.r = this.g = this.b = n;
				else {
					const i = n <= 0.5 ? n * (1 + e) : n + e - n * e,
						r = 2 * n - i;
					(this.r = Ve(r, i, t + 1 / 3)),
						(this.g = Ve(r, i, t)),
						(this.b = Ve(r, i, t - 1 / 3));
				}
				return this;
			},
			setStyle: function (t) {
				function e(e) {
					void 0 !== e &&
						parseFloat(e) < 1 &&
						console.warn(
							"THREE.Color: Alpha component of " + t + " will be ignored."
						);
				}
				let n;
				if ((n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t))) {
					let t;
					const i = n[1],
						r = n[2];
					switch (i) {
						case "rgb":
						case "rgba":
							if (
								(t =
									/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
										r
									))
							)
								return (
									(this.r = Math.min(255, parseInt(t[1], 10)) / 255),
									(this.g = Math.min(255, parseInt(t[2], 10)) / 255),
									(this.b = Math.min(255, parseInt(t[3], 10)) / 255),
									e(t[5]),
									this
								);
							if (
								(t =
									/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
										r
									))
							)
								return (
									(this.r = Math.min(100, parseInt(t[1], 10)) / 100),
									(this.g = Math.min(100, parseInt(t[2], 10)) / 100),
									(this.b = Math.min(100, parseInt(t[3], 10)) / 100),
									e(t[5]),
									this
								);
							break;
						case "hsl":
						case "hsla":
							if (
								(t =
									/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
										r
									))
							) {
								const n = parseFloat(t[1]) / 360,
									i = parseInt(t[2], 10) / 100,
									r = parseInt(t[3], 10) / 100;
								return e(t[5]), this.setHSL(n, i, r);
							}
					}
				} else if ((n = /^\#([A-Fa-f0-9]+)$/.exec(t))) {
					const t = n[1],
						e = t.length;
					if (3 === e)
						return (
							(this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255),
							(this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255),
							(this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255),
							this
						);
					if (6 === e)
						return (
							(this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255),
							(this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255),
							(this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255),
							this
						);
				}
				return t && t.length > 0 ? this.setColorName(t) : this;
			},
			setColorName: function (t) {
				const e = Fe[t];
				return (
					void 0 !== e
						? this.setHex(e)
						: console.warn("THREE.Color: Unknown color " + t),
					this
				);
			},
			clone: function () {
				return new this.constructor(this.r, this.g, this.b);
			},
			copy: function (t) {
				return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
			},
			copyGammaToLinear: function (t, e) {
				return (
					void 0 === e && (e = 2),
					(this.r = Math.pow(t.r, e)),
					(this.g = Math.pow(t.g, e)),
					(this.b = Math.pow(t.b, e)),
					this
				);
			},
			copyLinearToGamma: function (t, e) {
				void 0 === e && (e = 2);
				const n = e > 0 ? 1 / e : 1;
				return (
					(this.r = Math.pow(t.r, n)),
					(this.g = Math.pow(t.g, n)),
					(this.b = Math.pow(t.b, n)),
					this
				);
			},
			convertGammaToLinear: function (t) {
				return this.copyGammaToLinear(this, t), this;
			},
			convertLinearToGamma: function (t) {
				return this.copyLinearToGamma(this, t), this;
			},
			copySRGBToLinear: function (t) {
				return (this.r = We(t.r)), (this.g = We(t.g)), (this.b = We(t.b)), this;
			},
			copyLinearToSRGB: function (t) {
				return (this.r = qe(t.r)), (this.g = qe(t.g)), (this.b = qe(t.b)), this;
			},
			convertSRGBToLinear: function () {
				return this.copySRGBToLinear(this), this;
			},
			convertLinearToSRGB: function () {
				return this.copyLinearToSRGB(this), this;
			},
			getHex: function () {
				return (
					((255 * this.r) << 16) ^ ((255 * this.g) << 8) ^ ((255 * this.b) << 0)
				);
			},
			getHexString: function () {
				return ("000000" + this.getHex().toString(16)).slice(-6);
			},
			getHSL: function (t) {
				void 0 === t &&
					(console.warn("THREE.Color: .getHSL() target is now required"),
					(t = { h: 0, s: 0, l: 0 }));
				const e = this.r,
					n = this.g,
					i = this.b,
					r = Math.max(e, n, i),
					o = Math.min(e, n, i);
				let s, a;
				const c = (o + r) / 2;
				if (o === r) (s = 0), (a = 0);
				else {
					const t = r - o;
					switch (((a = c <= 0.5 ? t / (r + o) : t / (2 - r - o)), r)) {
						case e:
							s = (n - i) / t + (n < i ? 6 : 0);
							break;
						case n:
							s = (i - e) / t + 2;
							break;
						case i:
							s = (e - n) / t + 4;
					}
					s /= 6;
				}
				return (t.h = s), (t.s = a), (t.l = c), t;
			},
			getStyle: function () {
				return (
					"rgb(" +
					((255 * this.r) | 0) +
					"," +
					((255 * this.g) | 0) +
					"," +
					((255 * this.b) | 0) +
					")"
				);
			},
			offsetHSL: function (t, e, n) {
				return (
					this.getHSL(ke),
					(ke.h += t),
					(ke.s += e),
					(ke.l += n),
					this.setHSL(ke.h, ke.s, ke.l),
					this
				);
			},
			add: function (t) {
				return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
			},
			addColors: function (t, e) {
				return (
					(this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this
				);
			},
			addScalar: function (t) {
				return (this.r += t), (this.g += t), (this.b += t), this;
			},
			sub: function (t) {
				return (
					(this.r = Math.max(0, this.r - t.r)),
					(this.g = Math.max(0, this.g - t.g)),
					(this.b = Math.max(0, this.b - t.b)),
					this
				);
			},
			multiply: function (t) {
				return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
			},
			multiplyScalar: function (t) {
				return (this.r *= t), (this.g *= t), (this.b *= t), this;
			},
			lerp: function (t, e) {
				return (
					(this.r += (t.r - this.r) * e),
					(this.g += (t.g - this.g) * e),
					(this.b += (t.b - this.b) * e),
					this
				);
			},
			lerpHSL: function (t, e) {
				this.getHSL(ke), t.getHSL(Ge);
				const n = pt.lerp(ke.h, Ge.h, e),
					i = pt.lerp(ke.s, Ge.s, e),
					r = pt.lerp(ke.l, Ge.l, e);
				return this.setHSL(n, i, r), this;
			},
			equals: function (t) {
				return t.r === this.r && t.g === this.g && t.b === this.b;
			},
			fromArray: function (t, e) {
				return (
					void 0 === e && (e = 0),
					(this.r = t[e]),
					(this.g = t[e + 1]),
					(this.b = t[e + 2]),
					this
				);
			},
			toArray: function (t, e) {
				return (
					void 0 === t && (t = []),
					void 0 === e && (e = 0),
					(t[e] = this.r),
					(t[e + 1] = this.g),
					(t[e + 2] = this.b),
					t
				);
			},
			fromBufferAttribute: function (t, e) {
				return (
					(this.r = t.getX(e)),
					(this.g = t.getY(e)),
					(this.b = t.getZ(e)),
					!0 === t.normalized &&
						((this.r /= 255), (this.g /= 255), (this.b /= 255)),
					this
				);
			},
			toJSON: function () {
				return this.getHex();
			},
		}),
			(je.NAMES = Fe),
			Object.assign(Xe.prototype, {
				clone: function () {
					return new this.constructor().copy(this);
				},
				copy: function (t) {
					(this.a = t.a),
						(this.b = t.b),
						(this.c = t.c),
						this.normal.copy(t.normal),
						this.color.copy(t.color),
						(this.materialIndex = t.materialIndex);
					for (let e = 0, n = t.vertexNormals.length; e < n; e++)
						this.vertexNormals[e] = t.vertexNormals[e].clone();
					for (let e = 0, n = t.vertexColors.length; e < n; e++)
						this.vertexColors[e] = t.vertexColors[e].clone();
					return this;
				},
			});
		let Ye = 0;
		function Ze() {
			Object.defineProperty(this, "id", { value: Ye++ }),
				(this.uuid = pt.generateUUID()),
				(this.name = ""),
				(this.type = "Material"),
				(this.fog = !0),
				(this.blending = 1),
				(this.side = 0),
				(this.flatShading = !1),
				(this.vertexColors = !1),
				(this.opacity = 1),
				(this.transparent = !1),
				(this.blendSrc = 204),
				(this.blendDst = 205),
				(this.blendEquation = 100),
				(this.blendSrcAlpha = null),
				(this.blendDstAlpha = null),
				(this.blendEquationAlpha = null),
				(this.depthFunc = 3),
				(this.depthTest = !0),
				(this.depthWrite = !0),
				(this.stencilWriteMask = 255),
				(this.stencilFunc = 519),
				(this.stencilRef = 0),
				(this.stencilFuncMask = 255),
				(this.stencilFail = 7680),
				(this.stencilZFail = 7680),
				(this.stencilZPass = 7680),
				(this.stencilWrite = !1),
				(this.clippingPlanes = null),
				(this.clipIntersection = !1),
				(this.clipShadows = !1),
				(this.shadowSide = null),
				(this.colorWrite = !0),
				(this.precision = null),
				(this.polygonOffset = !1),
				(this.polygonOffsetFactor = 0),
				(this.polygonOffsetUnits = 0),
				(this.dithering = !1),
				(this.alphaTest = 0),
				(this.premultipliedAlpha = !1),
				(this.visible = !0),
				(this.toneMapped = !0),
				(this.userData = {}),
				(this.version = 0);
		}
		function Je(t) {
			Ze.call(this),
				(this.type = "MeshBasicMaterial"),
				(this.color = new je(16777215)),
				(this.map = null),
				(this.lightMap = null),
				(this.lightMapIntensity = 1),
				(this.aoMap = null),
				(this.aoMapIntensity = 1),
				(this.specularMap = null),
				(this.alphaMap = null),
				(this.envMap = null),
				(this.combine = 0),
				(this.reflectivity = 1),
				(this.refractionRatio = 0.98),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.wireframeLinecap = "round"),
				(this.wireframeLinejoin = "round"),
				(this.skinning = !1),
				(this.morphTargets = !1),
				this.setValues(t);
		}
		(Ze.prototype = Object.assign(Object.create(ht.prototype), {
			constructor: Ze,
			isMaterial: !0,
			onBeforeCompile: function () {},
			customProgramCacheKey: function () {
				return this.onBeforeCompile.toString();
			},
			setValues: function (t) {
				if (void 0 !== t)
					for (const e in t) {
						const n = t[e];
						if (void 0 === n) {
							console.warn(
								"THREE.Material: '" + e + "' parameter is undefined."
							);
							continue;
						}
						if ("shading" === e) {
							console.warn(
								"THREE." +
									this.type +
									": .shading has been removed. Use the boolean .flatShading instead."
							),
								(this.flatShading = 1 === n);
							continue;
						}
						const i = this[e];
						void 0 !== i
							? i && i.isColor
								? i.set(n)
								: i && i.isVector3 && n && n.isVector3
								? i.copy(n)
								: (this[e] = n)
							: console.warn(
									"THREE." +
										this.type +
										": '" +
										e +
										"' is not a property of this material."
							  );
					}
			},
			toJSON: function (t) {
				const e = void 0 === t || "string" == typeof t;
				e && (t = { textures: {}, images: {} });
				const n = {
					metadata: {
						version: 4.5,
						type: "Material",
						generator: "Material.toJSON",
					},
				};
				function i(t) {
					const e = [];
					for (const n in t) {
						const i = t[n];
						delete i.metadata, e.push(i);
					}
					return e;
				}
				if (
					((n.uuid = this.uuid),
					(n.type = this.type),
					"" !== this.name && (n.name = this.name),
					this.color && this.color.isColor && (n.color = this.color.getHex()),
					void 0 !== this.roughness && (n.roughness = this.roughness),
					void 0 !== this.metalness && (n.metalness = this.metalness),
					this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()),
					this.emissive &&
						this.emissive.isColor &&
						(n.emissive = this.emissive.getHex()),
					this.emissiveIntensity &&
						1 !== this.emissiveIntensity &&
						(n.emissiveIntensity = this.emissiveIntensity),
					this.specular &&
						this.specular.isColor &&
						(n.specular = this.specular.getHex()),
					void 0 !== this.shininess && (n.shininess = this.shininess),
					void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
					void 0 !== this.clearcoatRoughness &&
						(n.clearcoatRoughness = this.clearcoatRoughness),
					this.clearcoatMap &&
						this.clearcoatMap.isTexture &&
						(n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
					this.clearcoatRoughnessMap &&
						this.clearcoatRoughnessMap.isTexture &&
						(n.clearcoatRoughnessMap =
							this.clearcoatRoughnessMap.toJSON(t).uuid),
					this.clearcoatNormalMap &&
						this.clearcoatNormalMap.isTexture &&
						((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
						(n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
					this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
					this.matcap &&
						this.matcap.isTexture &&
						(n.matcap = this.matcap.toJSON(t).uuid),
					this.alphaMap &&
						this.alphaMap.isTexture &&
						(n.alphaMap = this.alphaMap.toJSON(t).uuid),
					this.lightMap &&
						this.lightMap.isTexture &&
						(n.lightMap = this.lightMap.toJSON(t).uuid),
					this.aoMap &&
						this.aoMap.isTexture &&
						((n.aoMap = this.aoMap.toJSON(t).uuid),
						(n.aoMapIntensity = this.aoMapIntensity)),
					this.bumpMap &&
						this.bumpMap.isTexture &&
						((n.bumpMap = this.bumpMap.toJSON(t).uuid),
						(n.bumpScale = this.bumpScale)),
					this.normalMap &&
						this.normalMap.isTexture &&
						((n.normalMap = this.normalMap.toJSON(t).uuid),
						(n.normalMapType = this.normalMapType),
						(n.normalScale = this.normalScale.toArray())),
					this.displacementMap &&
						this.displacementMap.isTexture &&
						((n.displacementMap = this.displacementMap.toJSON(t).uuid),
						(n.displacementScale = this.displacementScale),
						(n.displacementBias = this.displacementBias)),
					this.roughnessMap &&
						this.roughnessMap.isTexture &&
						(n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
					this.metalnessMap &&
						this.metalnessMap.isTexture &&
						(n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
					this.emissiveMap &&
						this.emissiveMap.isTexture &&
						(n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
					this.specularMap &&
						this.specularMap.isTexture &&
						(n.specularMap = this.specularMap.toJSON(t).uuid),
					this.envMap &&
						this.envMap.isTexture &&
						((n.envMap = this.envMap.toJSON(t).uuid),
						(n.reflectivity = this.reflectivity),
						(n.refractionRatio = this.refractionRatio),
						void 0 !== this.combine && (n.combine = this.combine),
						void 0 !== this.envMapIntensity &&
							(n.envMapIntensity = this.envMapIntensity)),
					this.gradientMap &&
						this.gradientMap.isTexture &&
						(n.gradientMap = this.gradientMap.toJSON(t).uuid),
					void 0 !== this.size && (n.size = this.size),
					void 0 !== this.sizeAttenuation &&
						(n.sizeAttenuation = this.sizeAttenuation),
					1 !== this.blending && (n.blending = this.blending),
					!0 === this.flatShading && (n.flatShading = this.flatShading),
					0 !== this.side && (n.side = this.side),
					this.vertexColors && (n.vertexColors = !0),
					this.opacity < 1 && (n.opacity = this.opacity),
					!0 === this.transparent && (n.transparent = this.transparent),
					(n.depthFunc = this.depthFunc),
					(n.depthTest = this.depthTest),
					(n.depthWrite = this.depthWrite),
					(n.stencilWrite = this.stencilWrite),
					(n.stencilWriteMask = this.stencilWriteMask),
					(n.stencilFunc = this.stencilFunc),
					(n.stencilRef = this.stencilRef),
					(n.stencilFuncMask = this.stencilFuncMask),
					(n.stencilFail = this.stencilFail),
					(n.stencilZFail = this.stencilZFail),
					(n.stencilZPass = this.stencilZPass),
					this.rotation && 0 !== this.rotation && (n.rotation = this.rotation),
					!0 === this.polygonOffset && (n.polygonOffset = !0),
					0 !== this.polygonOffsetFactor &&
						(n.polygonOffsetFactor = this.polygonOffsetFactor),
					0 !== this.polygonOffsetUnits &&
						(n.polygonOffsetUnits = this.polygonOffsetUnits),
					this.linewidth &&
						1 !== this.linewidth &&
						(n.linewidth = this.linewidth),
					void 0 !== this.dashSize && (n.dashSize = this.dashSize),
					void 0 !== this.gapSize && (n.gapSize = this.gapSize),
					void 0 !== this.scale && (n.scale = this.scale),
					!0 === this.dithering && (n.dithering = !0),
					this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
					!0 === this.premultipliedAlpha &&
						(n.premultipliedAlpha = this.premultipliedAlpha),
					!0 === this.wireframe && (n.wireframe = this.wireframe),
					this.wireframeLinewidth > 1 &&
						(n.wireframeLinewidth = this.wireframeLinewidth),
					"round" !== this.wireframeLinecap &&
						(n.wireframeLinecap = this.wireframeLinecap),
					"round" !== this.wireframeLinejoin &&
						(n.wireframeLinejoin = this.wireframeLinejoin),
					!0 === this.morphTargets && (n.morphTargets = !0),
					!0 === this.morphNormals && (n.morphNormals = !0),
					!0 === this.skinning && (n.skinning = !0),
					!1 === this.visible && (n.visible = !1),
					!1 === this.toneMapped && (n.toneMapped = !1),
					"{}" !== JSON.stringify(this.userData) &&
						(n.userData = this.userData),
					e)
				) {
					const e = i(t.textures),
						r = i(t.images);
					e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
				}
				return n;
			},
			clone: function () {
				return new this.constructor().copy(this);
			},
			copy: function (t) {
				(this.name = t.name),
					(this.fog = t.fog),
					(this.blending = t.blending),
					(this.side = t.side),
					(this.flatShading = t.flatShading),
					(this.vertexColors = t.vertexColors),
					(this.opacity = t.opacity),
					(this.transparent = t.transparent),
					(this.blendSrc = t.blendSrc),
					(this.blendDst = t.blendDst),
					(this.blendEquation = t.blendEquation),
					(this.blendSrcAlpha = t.blendSrcAlpha),
					(this.blendDstAlpha = t.blendDstAlpha),
					(this.blendEquationAlpha = t.blendEquationAlpha),
					(this.depthFunc = t.depthFunc),
					(this.depthTest = t.depthTest),
					(this.depthWrite = t.depthWrite),
					(this.stencilWriteMask = t.stencilWriteMask),
					(this.stencilFunc = t.stencilFunc),
					(this.stencilRef = t.stencilRef),
					(this.stencilFuncMask = t.stencilFuncMask),
					(this.stencilFail = t.stencilFail),
					(this.stencilZFail = t.stencilZFail),
					(this.stencilZPass = t.stencilZPass),
					(this.stencilWrite = t.stencilWrite);
				const e = t.clippingPlanes;
				let n = null;
				if (null !== e) {
					const t = e.length;
					n = new Array(t);
					for (let i = 0; i !== t; ++i) n[i] = e[i].clone();
				}
				return (
					(this.clippingPlanes = n),
					(this.clipIntersection = t.clipIntersection),
					(this.clipShadows = t.clipShadows),
					(this.shadowSide = t.shadowSide),
					(this.colorWrite = t.colorWrite),
					(this.precision = t.precision),
					(this.polygonOffset = t.polygonOffset),
					(this.polygonOffsetFactor = t.polygonOffsetFactor),
					(this.polygonOffsetUnits = t.polygonOffsetUnits),
					(this.dithering = t.dithering),
					(this.alphaTest = t.alphaTest),
					(this.premultipliedAlpha = t.premultipliedAlpha),
					(this.visible = t.visible),
					(this.toneMapped = t.toneMapped),
					(this.userData = JSON.parse(JSON.stringify(t.userData))),
					this
				);
			},
			dispose: function () {
				this.dispatchEvent({ type: "dispose" });
			},
		})),
			Object.defineProperty(Ze.prototype, "needsUpdate", {
				set: function (t) {
					!0 === t && this.version++;
				},
			}),
			(Je.prototype = Object.create(Ze.prototype)),
			(Je.prototype.constructor = Je),
			(Je.prototype.isMeshBasicMaterial = !0),
			(Je.prototype.copy = function (t) {
				return (
					Ze.prototype.copy.call(this, t),
					this.color.copy(t.color),
					(this.map = t.map),
					(this.lightMap = t.lightMap),
					(this.lightMapIntensity = t.lightMapIntensity),
					(this.aoMap = t.aoMap),
					(this.aoMapIntensity = t.aoMapIntensity),
					(this.specularMap = t.specularMap),
					(this.alphaMap = t.alphaMap),
					(this.envMap = t.envMap),
					(this.combine = t.combine),
					(this.reflectivity = t.reflectivity),
					(this.refractionRatio = t.refractionRatio),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.wireframeLinecap = t.wireframeLinecap),
					(this.wireframeLinejoin = t.wireframeLinejoin),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					this
				);
			});
		const Ke = new Et(),
			Qe = new ft();
		function $e(t, e, n) {
			if (Array.isArray(t))
				throw new TypeError(
					"THREE.BufferAttribute: array should be a Typed Array."
				);
			(this.name = ""),
				(this.array = t),
				(this.itemSize = e),
				(this.count = void 0 !== t ? t.length / e : 0),
				(this.normalized = !0 === n),
				(this.usage = 35044),
				(this.updateRange = { offset: 0, count: -1 }),
				(this.version = 0);
		}
		function tn(t, e, n) {
			$e.call(this, new Int8Array(t), e, n);
		}
		function en(t, e, n) {
			$e.call(this, new Uint8Array(t), e, n);
		}
		function nn(t, e, n) {
			$e.call(this, new Uint8ClampedArray(t), e, n);
		}
		function rn(t, e, n) {
			$e.call(this, new Int16Array(t), e, n);
		}
		function on(t, e, n) {
			$e.call(this, new Uint16Array(t), e, n);
		}
		function sn(t, e, n) {
			$e.call(this, new Int32Array(t), e, n);
		}
		function an(t, e, n) {
			$e.call(this, new Uint32Array(t), e, n);
		}
		function cn(t, e, n) {
			$e.call(this, new Float32Array(t), e, n);
		}
		function ln(t, e, n) {
			$e.call(this, new Float64Array(t), e, n);
		}
		function hn() {
			(this.vertices = []),
				(this.normals = []),
				(this.colors = []),
				(this.uvs = []),
				(this.uvs2 = []),
				(this.groups = []),
				(this.morphTargets = {}),
				(this.skinWeights = []),
				(this.skinIndices = []),
				(this.boundingBox = null),
				(this.boundingSphere = null),
				(this.verticesNeedUpdate = !1),
				(this.normalsNeedUpdate = !1),
				(this.colorsNeedUpdate = !1),
				(this.uvsNeedUpdate = !1),
				(this.groupsNeedUpdate = !1);
		}
		function un(t) {
			if (0 === t.length) return -1 / 0;
			let e = t[0];
			for (let n = 1, i = t.length; n < i; ++n) t[n] > e && (e = t[n]);
			return e;
		}
		Object.defineProperty($e.prototype, "needsUpdate", {
			set: function (t) {
				!0 === t && this.version++;
			},
		}),
			Object.assign($e.prototype, {
				isBufferAttribute: !0,
				onUploadCallback: function () {},
				setUsage: function (t) {
					return (this.usage = t), this;
				},
				copy: function (t) {
					return (
						(this.name = t.name),
						(this.array = new t.array.constructor(t.array)),
						(this.itemSize = t.itemSize),
						(this.count = t.count),
						(this.normalized = t.normalized),
						(this.usage = t.usage),
						this
					);
				},
				copyAt: function (t, e, n) {
					(t *= this.itemSize), (n *= e.itemSize);
					for (let i = 0, r = this.itemSize; i < r; i++)
						this.array[t + i] = e.array[n + i];
					return this;
				},
				copyArray: function (t) {
					return this.array.set(t), this;
				},
				copyColorsArray: function (t) {
					const e = this.array;
					let n = 0;
					for (let i = 0, r = t.length; i < r; i++) {
						let r = t[i];
						void 0 === r &&
							(console.warn(
								"THREE.BufferAttribute.copyColorsArray(): color is undefined",
								i
							),
							(r = new je())),
							(e[n++] = r.r),
							(e[n++] = r.g),
							(e[n++] = r.b);
					}
					return this;
				},
				copyVector2sArray: function (t) {
					const e = this.array;
					let n = 0;
					for (let i = 0, r = t.length; i < r; i++) {
						let r = t[i];
						void 0 === r &&
							(console.warn(
								"THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
								i
							),
							(r = new ft())),
							(e[n++] = r.x),
							(e[n++] = r.y);
					}
					return this;
				},
				copyVector3sArray: function (t) {
					const e = this.array;
					let n = 0;
					for (let i = 0, r = t.length; i < r; i++) {
						let r = t[i];
						void 0 === r &&
							(console.warn(
								"THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
								i
							),
							(r = new Et())),
							(e[n++] = r.x),
							(e[n++] = r.y),
							(e[n++] = r.z);
					}
					return this;
				},
				copyVector4sArray: function (t) {
					const e = this.array;
					let n = 0;
					for (let i = 0, r = t.length; i < r; i++) {
						let r = t[i];
						void 0 === r &&
							(console.warn(
								"THREE.BufferAttribute.copyVector4sArray(): vector is undefined",
								i
							),
							(r = new bt())),
							(e[n++] = r.x),
							(e[n++] = r.y),
							(e[n++] = r.z),
							(e[n++] = r.w);
					}
					return this;
				},
				applyMatrix3: function (t) {
					if (2 === this.itemSize)
						for (let e = 0, n = this.count; e < n; e++)
							Qe.fromBufferAttribute(this, e),
								Qe.applyMatrix3(t),
								this.setXY(e, Qe.x, Qe.y);
					else if (3 === this.itemSize)
						for (let e = 0, n = this.count; e < n; e++)
							Ke.fromBufferAttribute(this, e),
								Ke.applyMatrix3(t),
								this.setXYZ(e, Ke.x, Ke.y, Ke.z);
					return this;
				},
				applyMatrix4: function (t) {
					for (let e = 0, n = this.count; e < n; e++)
						(Ke.x = this.getX(e)),
							(Ke.y = this.getY(e)),
							(Ke.z = this.getZ(e)),
							Ke.applyMatrix4(t),
							this.setXYZ(e, Ke.x, Ke.y, Ke.z);
					return this;
				},
				applyNormalMatrix: function (t) {
					for (let e = 0, n = this.count; e < n; e++)
						(Ke.x = this.getX(e)),
							(Ke.y = this.getY(e)),
							(Ke.z = this.getZ(e)),
							Ke.applyNormalMatrix(t),
							this.setXYZ(e, Ke.x, Ke.y, Ke.z);
					return this;
				},
				transformDirection: function (t) {
					for (let e = 0, n = this.count; e < n; e++)
						(Ke.x = this.getX(e)),
							(Ke.y = this.getY(e)),
							(Ke.z = this.getZ(e)),
							Ke.transformDirection(t),
							this.setXYZ(e, Ke.x, Ke.y, Ke.z);
					return this;
				},
				set: function (t, e) {
					return void 0 === e && (e = 0), this.array.set(t, e), this;
				},
				getX: function (t) {
					return this.array[t * this.itemSize];
				},
				setX: function (t, e) {
					return (this.array[t * this.itemSize] = e), this;
				},
				getY: function (t) {
					return this.array[t * this.itemSize + 1];
				},
				setY: function (t, e) {
					return (this.array[t * this.itemSize + 1] = e), this;
				},
				getZ: function (t) {
					return this.array[t * this.itemSize + 2];
				},
				setZ: function (t, e) {
					return (this.array[t * this.itemSize + 2] = e), this;
				},
				getW: function (t) {
					return this.array[t * this.itemSize + 3];
				},
				setW: function (t, e) {
					return (this.array[t * this.itemSize + 3] = e), this;
				},
				setXY: function (t, e, n) {
					return (
						(t *= this.itemSize),
						(this.array[t + 0] = e),
						(this.array[t + 1] = n),
						this
					);
				},
				setXYZ: function (t, e, n, i) {
					return (
						(t *= this.itemSize),
						(this.array[t + 0] = e),
						(this.array[t + 1] = n),
						(this.array[t + 2] = i),
						this
					);
				},
				setXYZW: function (t, e, n, i, r) {
					return (
						(t *= this.itemSize),
						(this.array[t + 0] = e),
						(this.array[t + 1] = n),
						(this.array[t + 2] = i),
						(this.array[t + 3] = r),
						this
					);
				},
				onUpload: function (t) {
					return (this.onUploadCallback = t), this;
				},
				clone: function () {
					return new this.constructor(this.array, this.itemSize).copy(this);
				},
				toJSON: function () {
					return {
						itemSize: this.itemSize,
						type: this.array.constructor.name,
						array: Array.prototype.slice.call(this.array),
						normalized: this.normalized,
					};
				},
			}),
			(tn.prototype = Object.create($e.prototype)),
			(tn.prototype.constructor = tn),
			(en.prototype = Object.create($e.prototype)),
			(en.prototype.constructor = en),
			(nn.prototype = Object.create($e.prototype)),
			(nn.prototype.constructor = nn),
			(rn.prototype = Object.create($e.prototype)),
			(rn.prototype.constructor = rn),
			(on.prototype = Object.create($e.prototype)),
			(on.prototype.constructor = on),
			(sn.prototype = Object.create($e.prototype)),
			(sn.prototype.constructor = sn),
			(an.prototype = Object.create($e.prototype)),
			(an.prototype.constructor = an),
			(cn.prototype = Object.create($e.prototype)),
			(cn.prototype.constructor = cn),
			(ln.prototype = Object.create($e.prototype)),
			(ln.prototype.constructor = ln),
			Object.assign(hn.prototype, {
				computeGroups: function (t) {
					const e = [];
					let n,
						i,
						r = void 0;
					const o = t.faces;
					for (i = 0; i < o.length; i++) {
						const t = o[i];
						t.materialIndex !== r &&
							((r = t.materialIndex),
							void 0 !== n && ((n.count = 3 * i - n.start), e.push(n)),
							(n = { start: 3 * i, materialIndex: r }));
					}
					void 0 !== n && ((n.count = 3 * i - n.start), e.push(n)),
						(this.groups = e);
				},
				fromGeometry: function (t) {
					const e = t.faces,
						n = t.vertices,
						i = t.faceVertexUvs,
						r = i[0] && i[0].length > 0,
						o = i[1] && i[1].length > 0,
						s = t.morphTargets,
						a = s.length;
					let c;
					if (a > 0) {
						c = [];
						for (let t = 0; t < a; t++) c[t] = { name: s[t].name, data: [] };
						this.morphTargets.position = c;
					}
					const l = t.morphNormals,
						h = l.length;
					let u;
					if (h > 0) {
						u = [];
						for (let t = 0; t < h; t++) u[t] = { name: l[t].name, data: [] };
						this.morphTargets.normal = u;
					}
					const d = t.skinIndices,
						p = t.skinWeights,
						f = d.length === n.length,
						m = p.length === n.length;
					n.length > 0 &&
						0 === e.length &&
						console.error(
							"THREE.DirectGeometry: Faceless geometries are not supported."
						);
					for (let t = 0; t < e.length; t++) {
						const g = e[t];
						this.vertices.push(n[g.a], n[g.b], n[g.c]);
						const v = g.vertexNormals;
						if (3 === v.length) this.normals.push(v[0], v[1], v[2]);
						else {
							const t = g.normal;
							this.normals.push(t, t, t);
						}
						const y = g.vertexColors;
						if (3 === y.length) this.colors.push(y[0], y[1], y[2]);
						else {
							const t = g.color;
							this.colors.push(t, t, t);
						}
						if (!0 === r) {
							const e = i[0][t];
							void 0 !== e
								? this.uvs.push(e[0], e[1], e[2])
								: (console.warn(
										"THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",
										t
								  ),
								  this.uvs.push(new ft(), new ft(), new ft()));
						}
						if (!0 === o) {
							const e = i[1][t];
							void 0 !== e
								? this.uvs2.push(e[0], e[1], e[2])
								: (console.warn(
										"THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",
										t
								  ),
								  this.uvs2.push(new ft(), new ft(), new ft()));
						}
						for (let t = 0; t < a; t++) {
							const e = s[t].vertices;
							c[t].data.push(e[g.a], e[g.b], e[g.c]);
						}
						for (let e = 0; e < h; e++) {
							const n = l[e].vertexNormals[t];
							u[e].data.push(n.a, n.b, n.c);
						}
						f && this.skinIndices.push(d[g.a], d[g.b], d[g.c]),
							m && this.skinWeights.push(p[g.a], p[g.b], p[g.c]);
					}
					return (
						this.computeGroups(t),
						(this.verticesNeedUpdate = t.verticesNeedUpdate),
						(this.normalsNeedUpdate = t.normalsNeedUpdate),
						(this.colorsNeedUpdate = t.colorsNeedUpdate),
						(this.uvsNeedUpdate = t.uvsNeedUpdate),
						(this.groupsNeedUpdate = t.groupsNeedUpdate),
						null !== t.boundingSphere &&
							(this.boundingSphere = t.boundingSphere.clone()),
						null !== t.boundingBox &&
							(this.boundingBox = t.boundingBox.clone()),
						this
					);
				},
			});
		let dn = 1;
		const pn = new Dt(),
			fn = new Qt(),
			mn = new Et(),
			gn = new pe(),
			vn = new pe(),
			yn = new Et();
		function xn() {
			Object.defineProperty(this, "id", { value: (dn += 2) }),
				(this.uuid = pt.generateUUID()),
				(this.name = ""),
				(this.type = "BufferGeometry"),
				(this.index = null),
				(this.attributes = {}),
				(this.morphAttributes = {}),
				(this.morphTargetsRelative = !1),
				(this.groups = []),
				(this.boundingBox = null),
				(this.boundingSphere = null),
				(this.drawRange = { start: 0, count: 1 / 0 }),
				(this.userData = {});
		}
		xn.prototype = Object.assign(Object.create(ht.prototype), {
			constructor: xn,
			isBufferGeometry: !0,
			getIndex: function () {
				return this.index;
			},
			setIndex: function (t) {
				Array.isArray(t)
					? (this.index = new (un(t) > 65535 ? an : on)(t, 1))
					: (this.index = t);
			},
			getAttribute: function (t) {
				return this.attributes[t];
			},
			setAttribute: function (t, e) {
				return (this.attributes[t] = e), this;
			},
			deleteAttribute: function (t) {
				return delete this.attributes[t], this;
			},
			addGroup: function (t, e, n) {
				this.groups.push({
					start: t,
					count: e,
					materialIndex: void 0 !== n ? n : 0,
				});
			},
			clearGroups: function () {
				this.groups = [];
			},
			setDrawRange: function (t, e) {
				(this.drawRange.start = t), (this.drawRange.count = e);
			},
			applyMatrix4: function (t) {
				const e = this.attributes.position;
				void 0 !== e && (e.applyMatrix4(t), (e.needsUpdate = !0));
				const n = this.attributes.normal;
				if (void 0 !== n) {
					const e = new mt().getNormalMatrix(t);
					n.applyNormalMatrix(e), (n.needsUpdate = !0);
				}
				const i = this.attributes.tangent;
				return (
					void 0 !== i && (i.transformDirection(t), (i.needsUpdate = !0)),
					null !== this.boundingBox && this.computeBoundingBox(),
					null !== this.boundingSphere && this.computeBoundingSphere(),
					this
				);
			},
			rotateX: function (t) {
				return pn.makeRotationX(t), this.applyMatrix4(pn), this;
			},
			rotateY: function (t) {
				return pn.makeRotationY(t), this.applyMatrix4(pn), this;
			},
			rotateZ: function (t) {
				return pn.makeRotationZ(t), this.applyMatrix4(pn), this;
			},
			translate: function (t, e, n) {
				return pn.makeTranslation(t, e, n), this.applyMatrix4(pn), this;
			},
			scale: function (t, e, n) {
				return pn.makeScale(t, e, n), this.applyMatrix4(pn), this;
			},
			lookAt: function (t) {
				return (
					fn.lookAt(t), fn.updateMatrix(), this.applyMatrix4(fn.matrix), this
				);
			},
			center: function () {
				return (
					this.computeBoundingBox(),
					this.boundingBox.getCenter(mn).negate(),
					this.translate(mn.x, mn.y, mn.z),
					this
				);
			},
			setFromObject: function (t) {
				const e = t.geometry;
				if (t.isPoints || t.isLine) {
					const t = new cn(3 * e.vertices.length, 3),
						n = new cn(3 * e.colors.length, 3);
					if (
						(this.setAttribute("position", t.copyVector3sArray(e.vertices)),
						this.setAttribute("color", n.copyColorsArray(e.colors)),
						e.lineDistances && e.lineDistances.length === e.vertices.length)
					) {
						const t = new cn(e.lineDistances.length, 1);
						this.setAttribute("lineDistance", t.copyArray(e.lineDistances));
					}
					null !== e.boundingSphere &&
						(this.boundingSphere = e.boundingSphere.clone()),
						null !== e.boundingBox &&
							(this.boundingBox = e.boundingBox.clone());
				} else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
				return this;
			},
			setFromPoints: function (t) {
				const e = [];
				for (let n = 0, i = t.length; n < i; n++) {
					const i = t[n];
					e.push(i.x, i.y, i.z || 0);
				}
				return this.setAttribute("position", new cn(e, 3)), this;
			},
			updateFromObject: function (t) {
				let e = t.geometry;
				if (t.isMesh) {
					let t = e.__directGeometry;
					if (
						(!0 === e.elementsNeedUpdate &&
							((t = void 0), (e.elementsNeedUpdate = !1)),
						void 0 === t)
					)
						return this.fromGeometry(e);
					(t.verticesNeedUpdate = e.verticesNeedUpdate),
						(t.normalsNeedUpdate = e.normalsNeedUpdate),
						(t.colorsNeedUpdate = e.colorsNeedUpdate),
						(t.uvsNeedUpdate = e.uvsNeedUpdate),
						(t.groupsNeedUpdate = e.groupsNeedUpdate),
						(e.verticesNeedUpdate = !1),
						(e.normalsNeedUpdate = !1),
						(e.colorsNeedUpdate = !1),
						(e.uvsNeedUpdate = !1),
						(e.groupsNeedUpdate = !1),
						(e = t);
				}
				if (!0 === e.verticesNeedUpdate) {
					const t = this.attributes.position;
					void 0 !== t &&
						(t.copyVector3sArray(e.vertices), (t.needsUpdate = !0)),
						(e.verticesNeedUpdate = !1);
				}
				if (!0 === e.normalsNeedUpdate) {
					const t = this.attributes.normal;
					void 0 !== t &&
						(t.copyVector3sArray(e.normals), (t.needsUpdate = !0)),
						(e.normalsNeedUpdate = !1);
				}
				if (!0 === e.colorsNeedUpdate) {
					const t = this.attributes.color;
					void 0 !== t && (t.copyColorsArray(e.colors), (t.needsUpdate = !0)),
						(e.colorsNeedUpdate = !1);
				}
				if (e.uvsNeedUpdate) {
					const t = this.attributes.uv;
					void 0 !== t && (t.copyVector2sArray(e.uvs), (t.needsUpdate = !0)),
						(e.uvsNeedUpdate = !1);
				}
				if (e.lineDistancesNeedUpdate) {
					const t = this.attributes.lineDistance;
					void 0 !== t && (t.copyArray(e.lineDistances), (t.needsUpdate = !0)),
						(e.lineDistancesNeedUpdate = !1);
				}
				return (
					e.groupsNeedUpdate &&
						(e.computeGroups(t.geometry),
						(this.groups = e.groups),
						(e.groupsNeedUpdate = !1)),
					this
				);
			},
			fromGeometry: function (t) {
				return (
					(t.__directGeometry = new hn().fromGeometry(t)),
					this.fromDirectGeometry(t.__directGeometry)
				);
			},
			fromDirectGeometry: function (t) {
				const e = new Float32Array(3 * t.vertices.length);
				if (
					(this.setAttribute(
						"position",
						new $e(e, 3).copyVector3sArray(t.vertices)
					),
					t.normals.length > 0)
				) {
					const e = new Float32Array(3 * t.normals.length);
					this.setAttribute(
						"normal",
						new $e(e, 3).copyVector3sArray(t.normals)
					);
				}
				if (t.colors.length > 0) {
					const e = new Float32Array(3 * t.colors.length);
					this.setAttribute("color", new $e(e, 3).copyColorsArray(t.colors));
				}
				if (t.uvs.length > 0) {
					const e = new Float32Array(2 * t.uvs.length);
					this.setAttribute("uv", new $e(e, 2).copyVector2sArray(t.uvs));
				}
				if (t.uvs2.length > 0) {
					const e = new Float32Array(2 * t.uvs2.length);
					this.setAttribute("uv2", new $e(e, 2).copyVector2sArray(t.uvs2));
				}
				this.groups = t.groups;
				for (const e in t.morphTargets) {
					const n = [],
						i = t.morphTargets[e];
					for (let t = 0, e = i.length; t < e; t++) {
						const e = i[t],
							r = new cn(3 * e.data.length, 3);
						(r.name = e.name), n.push(r.copyVector3sArray(e.data));
					}
					this.morphAttributes[e] = n;
				}
				if (t.skinIndices.length > 0) {
					const e = new cn(4 * t.skinIndices.length, 4);
					this.setAttribute("skinIndex", e.copyVector4sArray(t.skinIndices));
				}
				if (t.skinWeights.length > 0) {
					const e = new cn(4 * t.skinWeights.length, 4);
					this.setAttribute("skinWeight", e.copyVector4sArray(t.skinWeights));
				}
				return (
					null !== t.boundingSphere &&
						(this.boundingSphere = t.boundingSphere.clone()),
					null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
					this
				);
			},
			computeBoundingBox: function () {
				null === this.boundingBox && (this.boundingBox = new pe());
				const t = this.attributes.position,
					e = this.morphAttributes.position;
				if (void 0 !== t) {
					if ((this.boundingBox.setFromBufferAttribute(t), e))
						for (let t = 0, n = e.length; t < n; t++) {
							const n = e[t];
							gn.setFromBufferAttribute(n),
								this.morphTargetsRelative
									? (yn.addVectors(this.boundingBox.min, gn.min),
									  this.boundingBox.expandByPoint(yn),
									  yn.addVectors(this.boundingBox.max, gn.max),
									  this.boundingBox.expandByPoint(yn))
									: (this.boundingBox.expandByPoint(gn.min),
									  this.boundingBox.expandByPoint(gn.max));
						}
				} else this.boundingBox.makeEmpty();
				(isNaN(this.boundingBox.min.x) ||
					isNaN(this.boundingBox.min.y) ||
					isNaN(this.boundingBox.min.z)) &&
					console.error(
						'THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
						this
					);
			},
			computeBoundingSphere: function () {
				null === this.boundingSphere && (this.boundingSphere = new ge());
				const t = this.attributes.position,
					e = this.morphAttributes.position;
				if (t) {
					const n = this.boundingSphere.center;
					if ((gn.setFromBufferAttribute(t), e))
						for (let t = 0, n = e.length; t < n; t++) {
							const n = e[t];
							vn.setFromBufferAttribute(n),
								this.morphTargetsRelative
									? (yn.addVectors(gn.min, vn.min),
									  gn.expandByPoint(yn),
									  yn.addVectors(gn.max, vn.max),
									  gn.expandByPoint(yn))
									: (gn.expandByPoint(vn.min), gn.expandByPoint(vn.max));
						}
					gn.getCenter(n);
					let i = 0;
					for (let e = 0, r = t.count; e < r; e++)
						yn.fromBufferAttribute(t, e),
							(i = Math.max(i, n.distanceToSquared(yn)));
					if (e)
						for (let r = 0, o = e.length; r < o; r++) {
							const o = e[r],
								s = this.morphTargetsRelative;
							for (let e = 0, r = o.count; e < r; e++)
								yn.fromBufferAttribute(o, e),
									s && (mn.fromBufferAttribute(t, e), yn.add(mn)),
									(i = Math.max(i, n.distanceToSquared(yn)));
						}
					(this.boundingSphere.radius = Math.sqrt(i)),
						isNaN(this.boundingSphere.radius) &&
							console.error(
								'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
								this
							);
				}
			},
			computeFaceNormals: function () {},
			computeVertexNormals: function () {
				const t = this.index,
					e = this.getAttribute("position");
				if (void 0 !== e) {
					let n = this.getAttribute("normal");
					if (void 0 === n)
						(n = new $e(new Float32Array(3 * e.count), 3)),
							this.setAttribute("normal", n);
					else for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
					const i = new Et(),
						r = new Et(),
						o = new Et(),
						s = new Et(),
						a = new Et(),
						c = new Et(),
						l = new Et(),
						h = new Et();
					if (t)
						for (let u = 0, d = t.count; u < d; u += 3) {
							const d = t.getX(u + 0),
								p = t.getX(u + 1),
								f = t.getX(u + 2);
							i.fromBufferAttribute(e, d),
								r.fromBufferAttribute(e, p),
								o.fromBufferAttribute(e, f),
								l.subVectors(o, r),
								h.subVectors(i, r),
								l.cross(h),
								s.fromBufferAttribute(n, d),
								a.fromBufferAttribute(n, p),
								c.fromBufferAttribute(n, f),
								s.add(l),
								a.add(l),
								c.add(l),
								n.setXYZ(d, s.x, s.y, s.z),
								n.setXYZ(p, a.x, a.y, a.z),
								n.setXYZ(f, c.x, c.y, c.z);
						}
					else
						for (let t = 0, s = e.count; t < s; t += 3)
							i.fromBufferAttribute(e, t + 0),
								r.fromBufferAttribute(e, t + 1),
								o.fromBufferAttribute(e, t + 2),
								l.subVectors(o, r),
								h.subVectors(i, r),
								l.cross(h),
								n.setXYZ(t + 0, l.x, l.y, l.z),
								n.setXYZ(t + 1, l.x, l.y, l.z),
								n.setXYZ(t + 2, l.x, l.y, l.z);
					this.normalizeNormals(), (n.needsUpdate = !0);
				}
			},
			merge: function (t, e) {
				if (!t || !t.isBufferGeometry)
					return void console.error(
						"THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
						t
					);
				void 0 === e &&
					((e = 0),
					console.warn(
						"THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
					));
				const n = this.attributes;
				for (const i in n) {
					if (void 0 === t.attributes[i]) continue;
					const r = n[i].array,
						o = t.attributes[i],
						s = o.array,
						a = o.itemSize * e,
						c = Math.min(s.length, r.length - a);
					for (let t = 0, e = a; t < c; t++, e++) r[e] = s[t];
				}
				return this;
			},
			normalizeNormals: function () {
				const t = this.attributes.normal;
				for (let e = 0, n = t.count; e < n; e++)
					yn.fromBufferAttribute(t, e),
						yn.normalize(),
						t.setXYZ(e, yn.x, yn.y, yn.z);
			},
			toNonIndexed: function () {
				function t(t, e) {
					const n = t.array,
						i = t.itemSize,
						r = t.normalized,
						o = new n.constructor(e.length * i);
					let s = 0,
						a = 0;
					for (let t = 0, r = e.length; t < r; t++) {
						s = e[t] * i;
						for (let t = 0; t < i; t++) o[a++] = n[s++];
					}
					return new $e(o, i, r);
				}
				if (null === this.index)
					return (
						console.warn(
							"THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."
						),
						this
					);
				const e = new xn(),
					n = this.index.array,
					i = this.attributes;
				for (const r in i) {
					const o = t(i[r], n);
					e.setAttribute(r, o);
				}
				const r = this.morphAttributes;
				for (const i in r) {
					const o = [],
						s = r[i];
					for (let e = 0, i = s.length; e < i; e++) {
						const i = t(s[e], n);
						o.push(i);
					}
					e.morphAttributes[i] = o;
				}
				e.morphTargetsRelative = this.morphTargetsRelative;
				const o = this.groups;
				for (let t = 0, n = o.length; t < n; t++) {
					const n = o[t];
					e.addGroup(n.start, n.count, n.materialIndex);
				}
				return e;
			},
			toJSON: function () {
				const t = {
					metadata: {
						version: 4.5,
						type: "BufferGeometry",
						generator: "BufferGeometry.toJSON",
					},
				};
				if (
					((t.uuid = this.uuid),
					(t.type = this.type),
					"" !== this.name && (t.name = this.name),
					Object.keys(this.userData).length > 0 && (t.userData = this.userData),
					void 0 !== this.parameters)
				) {
					const e = this.parameters;
					for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
					return t;
				}
				t.data = { attributes: {} };
				const e = this.index;
				null !== e &&
					(t.data.index = {
						type: e.array.constructor.name,
						array: Array.prototype.slice.call(e.array),
					});
				const n = this.attributes;
				for (const e in n) {
					const i = n[e],
						r = i.toJSON(t.data);
					"" !== i.name && (r.name = i.name), (t.data.attributes[e] = r);
				}
				const i = {};
				let r = !1;
				for (const e in this.morphAttributes) {
					const n = this.morphAttributes[e],
						o = [];
					for (let e = 0, i = n.length; e < i; e++) {
						const i = n[e],
							r = i.toJSON(t.data);
						"" !== i.name && (r.name = i.name), o.push(r);
					}
					o.length > 0 && ((i[e] = o), (r = !0));
				}
				r &&
					((t.data.morphAttributes = i),
					(t.data.morphTargetsRelative = this.morphTargetsRelative));
				const o = this.groups;
				o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o)));
				const s = this.boundingSphere;
				return (
					null !== s &&
						(t.data.boundingSphere = {
							center: s.center.toArray(),
							radius: s.radius,
						}),
					t
				);
			},
			clone: function () {
				return new xn().copy(this);
			},
			copy: function (t) {
				(this.index = null),
					(this.attributes = {}),
					(this.morphAttributes = {}),
					(this.groups = []),
					(this.boundingBox = null),
					(this.boundingSphere = null);
				const e = {};
				this.name = t.name;
				const n = t.index;
				null !== n && this.setIndex(n.clone(e));
				const i = t.attributes;
				for (const t in i) {
					const n = i[t];
					this.setAttribute(t, n.clone(e));
				}
				const r = t.morphAttributes;
				for (const t in r) {
					const n = [],
						i = r[t];
					for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
					this.morphAttributes[t] = n;
				}
				this.morphTargetsRelative = t.morphTargetsRelative;
				const o = t.groups;
				for (let t = 0, e = o.length; t < e; t++) {
					const e = o[t];
					this.addGroup(e.start, e.count, e.materialIndex);
				}
				const s = t.boundingBox;
				null !== s && (this.boundingBox = s.clone());
				const a = t.boundingSphere;
				return (
					null !== a && (this.boundingSphere = a.clone()),
					(this.drawRange.start = t.drawRange.start),
					(this.drawRange.count = t.drawRange.count),
					(this.userData = t.userData),
					this
				);
			},
			dispose: function () {
				this.dispatchEvent({ type: "dispose" });
			},
		});
		const bn = new Dt(),
			wn = new Se(),
			_n = new ge(),
			Mn = new Et(),
			Sn = new Et(),
			Tn = new Et(),
			En = new Et(),
			An = new Et(),
			Ln = new Et(),
			Rn = new Et(),
			Pn = new Et(),
			Cn = new Et(),
			In = new ft(),
			On = new ft(),
			Dn = new ft(),
			Nn = new Et(),
			zn = new Et();
		function Un(t, e) {
			Qt.call(this),
				(this.type = "Mesh"),
				(this.geometry = void 0 !== t ? t : new xn()),
				(this.material = void 0 !== e ? e : new Je()),
				this.updateMorphTargets();
		}
		function Hn(t, e, n, i, r, o, s, a) {
			let c;
			if (
				((c =
					1 === e.side
						? i.intersectTriangle(s, o, r, !0, a)
						: i.intersectTriangle(r, o, s, 2 !== e.side, a)),
				null === c)
			)
				return null;
			zn.copy(a), zn.applyMatrix4(t.matrixWorld);
			const l = n.ray.origin.distanceTo(zn);
			return l < n.near || l > n.far
				? null
				: { distance: l, point: zn.clone(), object: t };
		}
		function Bn(t, e, n, i, r, o, s, a, c, l, h, u) {
			Mn.fromBufferAttribute(r, l),
				Sn.fromBufferAttribute(r, h),
				Tn.fromBufferAttribute(r, u);
			const d = t.morphTargetInfluences;
			if (e.morphTargets && o && d) {
				Rn.set(0, 0, 0), Pn.set(0, 0, 0), Cn.set(0, 0, 0);
				for (let t = 0, e = o.length; t < e; t++) {
					const e = d[t],
						n = o[t];
					0 !== e &&
						(En.fromBufferAttribute(n, l),
						An.fromBufferAttribute(n, h),
						Ln.fromBufferAttribute(n, u),
						s
							? (Rn.addScaledVector(En, e),
							  Pn.addScaledVector(An, e),
							  Cn.addScaledVector(Ln, e))
							: (Rn.addScaledVector(En.sub(Mn), e),
							  Pn.addScaledVector(An.sub(Sn), e),
							  Cn.addScaledVector(Ln.sub(Tn), e)));
				}
				Mn.add(Rn), Sn.add(Pn), Tn.add(Cn);
			}
			t.isSkinnedMesh &&
				(t.boneTransform(l, Mn),
				t.boneTransform(h, Sn),
				t.boneTransform(u, Tn));
			const p = Hn(t, e, n, i, Mn, Sn, Tn, Nn);
			if (p) {
				a &&
					(In.fromBufferAttribute(a, l),
					On.fromBufferAttribute(a, h),
					Dn.fromBufferAttribute(a, u),
					(p.uv = Be.getUV(Nn, Mn, Sn, Tn, In, On, Dn, new ft()))),
					c &&
						(In.fromBufferAttribute(c, l),
						On.fromBufferAttribute(c, h),
						Dn.fromBufferAttribute(c, u),
						(p.uv2 = Be.getUV(Nn, Mn, Sn, Tn, In, On, Dn, new ft())));
				const t = new Xe(l, h, u);
				Be.getNormal(Mn, Sn, Tn, t.normal), (p.face = t);
			}
			return p;
		}
		Un.prototype = Object.assign(Object.create(Qt.prototype), {
			constructor: Un,
			isMesh: !0,
			copy: function (t) {
				return (
					Qt.prototype.copy.call(this, t),
					void 0 !== t.morphTargetInfluences &&
						(this.morphTargetInfluences = t.morphTargetInfluences.slice()),
					void 0 !== t.morphTargetDictionary &&
						(this.morphTargetDictionary = Object.assign(
							{},
							t.morphTargetDictionary
						)),
					(this.material = t.material),
					(this.geometry = t.geometry),
					this
				);
			},
			updateMorphTargets: function () {
				const t = this.geometry;
				if (t.isBufferGeometry) {
					const e = t.morphAttributes,
						n = Object.keys(e);
					if (n.length > 0) {
						const t = e[n[0]];
						if (void 0 !== t) {
							(this.morphTargetInfluences = []),
								(this.morphTargetDictionary = {});
							for (let e = 0, n = t.length; e < n; e++) {
								const n = t[e].name || String(e);
								this.morphTargetInfluences.push(0),
									(this.morphTargetDictionary[n] = e);
							}
						}
					}
				} else {
					const e = t.morphTargets;
					void 0 !== e &&
						e.length > 0 &&
						console.error(
							"THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
						);
				}
			},
			raycast: function (t, e) {
				const n = this.geometry,
					i = this.material,
					r = this.matrixWorld;
				if (void 0 === i) return;
				if (
					(null === n.boundingSphere && n.computeBoundingSphere(),
					_n.copy(n.boundingSphere),
					_n.applyMatrix4(r),
					!1 === t.ray.intersectsSphere(_n))
				)
					return;
				if (
					(bn.getInverse(r),
					wn.copy(t.ray).applyMatrix4(bn),
					null !== n.boundingBox && !1 === wn.intersectsBox(n.boundingBox))
				)
					return;
				let o;
				if (n.isBufferGeometry) {
					const r = n.index,
						s = n.attributes.position,
						a = n.morphAttributes.position,
						c = n.morphTargetsRelative,
						l = n.attributes.uv,
						h = n.attributes.uv2,
						u = n.groups,
						d = n.drawRange;
					if (null !== r)
						if (Array.isArray(i))
							for (let n = 0, p = u.length; n < p; n++) {
								const p = u[n],
									f = i[p.materialIndex];
								for (
									let n = Math.max(p.start, d.start),
										i = Math.min(p.start + p.count, d.start + d.count);
									n < i;
									n += 3
								) {
									const i = r.getX(n),
										u = r.getX(n + 1),
										d = r.getX(n + 2);
									(o = Bn(this, f, t, wn, s, a, c, l, h, i, u, d)),
										o &&
											((o.faceIndex = Math.floor(n / 3)),
											(o.face.materialIndex = p.materialIndex),
											e.push(o));
								}
							}
						else {
							for (
								let n = Math.max(0, d.start),
									u = Math.min(r.count, d.start + d.count);
								n < u;
								n += 3
							) {
								const u = r.getX(n),
									d = r.getX(n + 1),
									p = r.getX(n + 2);
								(o = Bn(this, i, t, wn, s, a, c, l, h, u, d, p)),
									o && ((o.faceIndex = Math.floor(n / 3)), e.push(o));
							}
						}
					else if (void 0 !== s)
						if (Array.isArray(i))
							for (let n = 0, r = u.length; n < r; n++) {
								const r = u[n],
									p = i[r.materialIndex];
								for (
									let n = Math.max(r.start, d.start),
										i = Math.min(r.start + r.count, d.start + d.count);
									n < i;
									n += 3
								) {
									(o = Bn(this, p, t, wn, s, a, c, l, h, n, n + 1, n + 2)),
										o &&
											((o.faceIndex = Math.floor(n / 3)),
											(o.face.materialIndex = r.materialIndex),
											e.push(o));
								}
							}
						else {
							for (
								let n = Math.max(0, d.start),
									r = Math.min(s.count, d.start + d.count);
								n < r;
								n += 3
							) {
								(o = Bn(this, i, t, wn, s, a, c, l, h, n, n + 1, n + 2)),
									o && ((o.faceIndex = Math.floor(n / 3)), e.push(o));
							}
						}
				} else if (n.isGeometry) {
					const r = Array.isArray(i),
						s = n.vertices,
						a = n.faces;
					let c;
					const l = n.faceVertexUvs[0];
					l.length > 0 && (c = l);
					for (let n = 0, l = a.length; n < l; n++) {
						const l = a[n],
							h = r ? i[l.materialIndex] : i;
						if (void 0 === h) continue;
						const u = s[l.a],
							d = s[l.b],
							p = s[l.c];
						if (((o = Hn(this, h, t, wn, u, d, p, Nn)), o)) {
							if (c && c[n]) {
								const t = c[n];
								In.copy(t[0]),
									On.copy(t[1]),
									Dn.copy(t[2]),
									(o.uv = Be.getUV(Nn, u, d, p, In, On, Dn, new ft()));
							}
							(o.face = l), (o.faceIndex = n), e.push(o);
						}
					}
				}
			},
		});
		let Fn = 0;
		const kn = new Dt(),
			Gn = new Qt(),
			jn = new Et();
		function Vn() {
			Object.defineProperty(this, "id", { value: (Fn += 2) }),
				(this.uuid = pt.generateUUID()),
				(this.name = ""),
				(this.type = "Geometry"),
				(this.vertices = []),
				(this.colors = []),
				(this.faces = []),
				(this.faceVertexUvs = [[]]),
				(this.morphTargets = []),
				(this.morphNormals = []),
				(this.skinWeights = []),
				(this.skinIndices = []),
				(this.lineDistances = []),
				(this.boundingBox = null),
				(this.boundingSphere = null),
				(this.elementsNeedUpdate = !1),
				(this.verticesNeedUpdate = !1),
				(this.uvsNeedUpdate = !1),
				(this.normalsNeedUpdate = !1),
				(this.colorsNeedUpdate = !1),
				(this.lineDistancesNeedUpdate = !1),
				(this.groupsNeedUpdate = !1);
		}
		Vn.prototype = Object.assign(Object.create(ht.prototype), {
			constructor: Vn,
			isGeometry: !0,
			applyMatrix4: function (t) {
				const e = new mt().getNormalMatrix(t);
				for (let e = 0, n = this.vertices.length; e < n; e++) {
					this.vertices[e].applyMatrix4(t);
				}
				for (let t = 0, n = this.faces.length; t < n; t++) {
					const n = this.faces[t];
					n.normal.applyMatrix3(e).normalize();
					for (let t = 0, i = n.vertexNormals.length; t < i; t++)
						n.vertexNormals[t].applyMatrix3(e).normalize();
				}
				return (
					null !== this.boundingBox && this.computeBoundingBox(),
					null !== this.boundingSphere && this.computeBoundingSphere(),
					(this.verticesNeedUpdate = !0),
					(this.normalsNeedUpdate = !0),
					this
				);
			},
			rotateX: function (t) {
				return kn.makeRotationX(t), this.applyMatrix4(kn), this;
			},
			rotateY: function (t) {
				return kn.makeRotationY(t), this.applyMatrix4(kn), this;
			},
			rotateZ: function (t) {
				return kn.makeRotationZ(t), this.applyMatrix4(kn), this;
			},
			translate: function (t, e, n) {
				return kn.makeTranslation(t, e, n), this.applyMatrix4(kn), this;
			},
			scale: function (t, e, n) {
				return kn.makeScale(t, e, n), this.applyMatrix4(kn), this;
			},
			lookAt: function (t) {
				return (
					Gn.lookAt(t), Gn.updateMatrix(), this.applyMatrix4(Gn.matrix), this
				);
			},
			fromBufferGeometry: function (t) {
				const e = this,
					n = null !== t.index ? t.index : void 0,
					i = t.attributes;
				if (void 0 === i.position)
					return (
						console.error(
							"THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."
						),
						this
					);
				const r = i.position,
					o = i.normal,
					s = i.color,
					a = i.uv,
					c = i.uv2;
				void 0 !== c && (this.faceVertexUvs[1] = []);
				for (let t = 0; t < r.count; t++)
					e.vertices.push(new Et().fromBufferAttribute(r, t)),
						void 0 !== s && e.colors.push(new je().fromBufferAttribute(s, t));
				function l(t, n, i, r) {
					const l =
							void 0 === s
								? []
								: [
										e.colors[t].clone(),
										e.colors[n].clone(),
										e.colors[i].clone(),
								  ],
						h = new Xe(
							t,
							n,
							i,
							void 0 === o
								? []
								: [
										new Et().fromBufferAttribute(o, t),
										new Et().fromBufferAttribute(o, n),
										new Et().fromBufferAttribute(o, i),
								  ],
							l,
							r
						);
					e.faces.push(h),
						void 0 !== a &&
							e.faceVertexUvs[0].push([
								new ft().fromBufferAttribute(a, t),
								new ft().fromBufferAttribute(a, n),
								new ft().fromBufferAttribute(a, i),
							]),
						void 0 !== c &&
							e.faceVertexUvs[1].push([
								new ft().fromBufferAttribute(c, t),
								new ft().fromBufferAttribute(c, n),
								new ft().fromBufferAttribute(c, i),
							]);
				}
				const h = t.groups;
				if (h.length > 0)
					for (let t = 0; t < h.length; t++) {
						const e = h[t],
							i = e.start;
						for (let t = i, r = i + e.count; t < r; t += 3)
							void 0 !== n
								? l(n.getX(t), n.getX(t + 1), n.getX(t + 2), e.materialIndex)
								: l(t, t + 1, t + 2, e.materialIndex);
					}
				else if (void 0 !== n)
					for (let t = 0; t < n.count; t += 3)
						l(n.getX(t), n.getX(t + 1), n.getX(t + 2));
				else for (let t = 0; t < r.count; t += 3) l(t, t + 1, t + 2);
				return (
					this.computeFaceNormals(),
					null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
					null !== t.boundingSphere &&
						(this.boundingSphere = t.boundingSphere.clone()),
					this
				);
			},
			center: function () {
				return (
					this.computeBoundingBox(),
					this.boundingBox.getCenter(jn).negate(),
					this.translate(jn.x, jn.y, jn.z),
					this
				);
			},
			normalize: function () {
				this.computeBoundingSphere();
				const t = this.boundingSphere.center,
					e = this.boundingSphere.radius,
					n = 0 === e ? 1 : 1 / e,
					i = new Dt();
				return (
					i.set(
						n,
						0,
						0,
						-n * t.x,
						0,
						n,
						0,
						-n * t.y,
						0,
						0,
						n,
						-n * t.z,
						0,
						0,
						0,
						1
					),
					this.applyMatrix4(i),
					this
				);
			},
			computeFaceNormals: function () {
				const t = new Et(),
					e = new Et();
				for (let n = 0, i = this.faces.length; n < i; n++) {
					const i = this.faces[n],
						r = this.vertices[i.a],
						o = this.vertices[i.b],
						s = this.vertices[i.c];
					t.subVectors(s, o),
						e.subVectors(r, o),
						t.cross(e),
						t.normalize(),
						i.normal.copy(t);
				}
			},
			computeVertexNormals: function (t) {
				void 0 === t && (t = !0);
				const e = new Array(this.vertices.length);
				for (let t = 0, n = this.vertices.length; t < n; t++) e[t] = new Et();
				if (t) {
					const t = new Et(),
						n = new Et();
					for (let i = 0, r = this.faces.length; i < r; i++) {
						const r = this.faces[i],
							o = this.vertices[r.a],
							s = this.vertices[r.b],
							a = this.vertices[r.c];
						t.subVectors(a, s),
							n.subVectors(o, s),
							t.cross(n),
							e[r.a].add(t),
							e[r.b].add(t),
							e[r.c].add(t);
					}
				} else {
					this.computeFaceNormals();
					for (let t = 0, n = this.faces.length; t < n; t++) {
						const n = this.faces[t];
						e[n.a].add(n.normal), e[n.b].add(n.normal), e[n.c].add(n.normal);
					}
				}
				for (let t = 0, n = this.vertices.length; t < n; t++) e[t].normalize();
				for (let t = 0, n = this.faces.length; t < n; t++) {
					const n = this.faces[t],
						i = n.vertexNormals;
					3 === i.length
						? (i[0].copy(e[n.a]), i[1].copy(e[n.b]), i[2].copy(e[n.c]))
						: ((i[0] = e[n.a].clone()),
						  (i[1] = e[n.b].clone()),
						  (i[2] = e[n.c].clone()));
				}
				this.faces.length > 0 && (this.normalsNeedUpdate = !0);
			},
			computeFlatVertexNormals: function () {
				this.computeFaceNormals();
				for (let t = 0, e = this.faces.length; t < e; t++) {
					const e = this.faces[t],
						n = e.vertexNormals;
					3 === n.length
						? (n[0].copy(e.normal), n[1].copy(e.normal), n[2].copy(e.normal))
						: ((n[0] = e.normal.clone()),
						  (n[1] = e.normal.clone()),
						  (n[2] = e.normal.clone()));
				}
				this.faces.length > 0 && (this.normalsNeedUpdate = !0);
			},
			computeMorphNormals: function () {
				for (let t = 0, e = this.faces.length; t < e; t++) {
					const e = this.faces[t];
					e.__originalFaceNormal
						? e.__originalFaceNormal.copy(e.normal)
						: (e.__originalFaceNormal = e.normal.clone()),
						e.__originalVertexNormals || (e.__originalVertexNormals = []);
					for (let t = 0, n = e.vertexNormals.length; t < n; t++)
						e.__originalVertexNormals[t]
							? e.__originalVertexNormals[t].copy(e.vertexNormals[t])
							: (e.__originalVertexNormals[t] = e.vertexNormals[t].clone());
				}
				const t = new Vn();
				t.faces = this.faces;
				for (let e = 0, n = this.morphTargets.length; e < n; e++) {
					if (!this.morphNormals[e]) {
						(this.morphNormals[e] = {}),
							(this.morphNormals[e].faceNormals = []),
							(this.morphNormals[e].vertexNormals = []);
						const t = this.morphNormals[e].faceNormals,
							n = this.morphNormals[e].vertexNormals;
						for (let e = 0, i = this.faces.length; e < i; e++) {
							const e = new Et(),
								i = { a: new Et(), b: new Et(), c: new Et() };
							t.push(e), n.push(i);
						}
					}
					const n = this.morphNormals[e];
					(t.vertices = this.morphTargets[e].vertices),
						t.computeFaceNormals(),
						t.computeVertexNormals();
					for (let t = 0, e = this.faces.length; t < e; t++) {
						const e = this.faces[t],
							i = n.faceNormals[t],
							r = n.vertexNormals[t];
						i.copy(e.normal),
							r.a.copy(e.vertexNormals[0]),
							r.b.copy(e.vertexNormals[1]),
							r.c.copy(e.vertexNormals[2]);
					}
				}
				for (let t = 0, e = this.faces.length; t < e; t++) {
					const e = this.faces[t];
					(e.normal = e.__originalFaceNormal),
						(e.vertexNormals = e.__originalVertexNormals);
				}
			},
			computeBoundingBox: function () {
				null === this.boundingBox && (this.boundingBox = new pe()),
					this.boundingBox.setFromPoints(this.vertices);
			},
			computeBoundingSphere: function () {
				null === this.boundingSphere && (this.boundingSphere = new ge()),
					this.boundingSphere.setFromPoints(this.vertices);
			},
			merge: function (t, e, n) {
				if (!t || !t.isGeometry)
					return void console.error(
						"THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",
						t
					);
				let i,
					r = this.vertices.length,
					o = this.vertices,
					s = t.vertices,
					a = this.faces,
					c = t.faces,
					l = this.colors,
					h = t.colors;
				void 0 === n && (n = 0),
					void 0 !== e && (i = new mt().getNormalMatrix(e));
				for (let t = 0, n = s.length; t < n; t++) {
					const n = s[t].clone();
					void 0 !== e && n.applyMatrix4(e), o.push(n);
				}
				for (let t = 0, e = h.length; t < e; t++) l.push(h[t].clone());
				for (let t = 0, e = c.length; t < e; t++) {
					let e,
						o,
						s,
						l = c[t],
						h = l.vertexNormals,
						u = l.vertexColors;
					(e = new Xe(l.a + r, l.b + r, l.c + r)),
						e.normal.copy(l.normal),
						void 0 !== i && e.normal.applyMatrix3(i).normalize();
					for (let t = 0, n = h.length; t < n; t++)
						(o = h[t].clone()),
							void 0 !== i && o.applyMatrix3(i).normalize(),
							e.vertexNormals.push(o);
					e.color.copy(l.color);
					for (let t = 0, n = u.length; t < n; t++)
						(s = u[t]), e.vertexColors.push(s.clone());
					(e.materialIndex = l.materialIndex + n), a.push(e);
				}
				for (let e = 0, n = t.faceVertexUvs.length; e < n; e++) {
					const n = t.faceVertexUvs[e];
					void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []);
					for (let t = 0, i = n.length; t < i; t++) {
						const i = n[t],
							r = [];
						for (let t = 0, e = i.length; t < e; t++) r.push(i[t].clone());
						this.faceVertexUvs[e].push(r);
					}
				}
			},
			mergeMesh: function (t) {
				t && t.isMesh
					? (t.matrixAutoUpdate && t.updateMatrix(),
					  this.merge(t.geometry, t.matrix))
					: console.error(
							"THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",
							t
					  );
			},
			mergeVertices: function () {
				const t = {},
					e = [],
					n = [],
					i = Math.pow(10, 4);
				for (let r = 0, o = this.vertices.length; r < o; r++) {
					const o = this.vertices[r],
						s =
							Math.round(o.x * i) +
							"_" +
							Math.round(o.y * i) +
							"_" +
							Math.round(o.z * i);
					void 0 === t[s]
						? ((t[s] = r), e.push(this.vertices[r]), (n[r] = e.length - 1))
						: (n[r] = n[t[s]]);
				}
				const r = [];
				for (let t = 0, e = this.faces.length; t < e; t++) {
					const e = this.faces[t];
					(e.a = n[e.a]), (e.b = n[e.b]), (e.c = n[e.c]);
					const i = [e.a, e.b, e.c];
					for (let e = 0; e < 3; e++)
						if (i[e] === i[(e + 1) % 3]) {
							r.push(t);
							break;
						}
				}
				for (let t = r.length - 1; t >= 0; t--) {
					const e = r[t];
					this.faces.splice(e, 1);
					for (let t = 0, n = this.faceVertexUvs.length; t < n; t++)
						this.faceVertexUvs[t].splice(e, 1);
				}
				const o = this.vertices.length - e.length;
				return (this.vertices = e), o;
			},
			setFromPoints: function (t) {
				this.vertices = [];
				for (let e = 0, n = t.length; e < n; e++) {
					const n = t[e];
					this.vertices.push(new Et(n.x, n.y, n.z || 0));
				}
				return this;
			},
			sortFacesByMaterialIndex: function () {
				const t = this.faces,
					e = t.length;
				for (let n = 0; n < e; n++) t[n]._id = n;
				t.sort(function (t, e) {
					return t.materialIndex - e.materialIndex;
				});
				const n = this.faceVertexUvs[0],
					i = this.faceVertexUvs[1];
				let r, o;
				n && n.length === e && (r = []), i && i.length === e && (o = []);
				for (let s = 0; s < e; s++) {
					const e = t[s]._id;
					r && r.push(n[e]), o && o.push(i[e]);
				}
				r && (this.faceVertexUvs[0] = r), o && (this.faceVertexUvs[1] = o);
			},
			toJSON: function () {
				const t = {
					metadata: {
						version: 4.5,
						type: "Geometry",
						generator: "Geometry.toJSON",
					},
				};
				if (
					((t.uuid = this.uuid),
					(t.type = this.type),
					"" !== this.name && (t.name = this.name),
					void 0 !== this.parameters)
				) {
					const e = this.parameters;
					for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
					return t;
				}
				const e = [];
				for (let t = 0; t < this.vertices.length; t++) {
					const n = this.vertices[t];
					e.push(n.x, n.y, n.z);
				}
				const n = [],
					i = [],
					r = {},
					o = [],
					s = {},
					a = [],
					c = {};
				for (let t = 0; t < this.faces.length; t++) {
					const e = this.faces[t],
						i = !0,
						r = !1,
						o = void 0 !== this.faceVertexUvs[0][t],
						s = e.normal.length() > 0,
						a = e.vertexNormals.length > 0,
						c = 1 !== e.color.r || 1 !== e.color.g || 1 !== e.color.b,
						p = e.vertexColors.length > 0;
					let f = 0;
					if (
						((f = l(f, 0, 0)),
						(f = l(f, 1, i)),
						(f = l(f, 2, r)),
						(f = l(f, 3, o)),
						(f = l(f, 4, s)),
						(f = l(f, 5, a)),
						(f = l(f, 6, c)),
						(f = l(f, 7, p)),
						n.push(f),
						n.push(e.a, e.b, e.c),
						n.push(e.materialIndex),
						o)
					) {
						const e = this.faceVertexUvs[0][t];
						n.push(d(e[0]), d(e[1]), d(e[2]));
					}
					if ((s && n.push(h(e.normal)), a)) {
						const t = e.vertexNormals;
						n.push(h(t[0]), h(t[1]), h(t[2]));
					}
					if ((c && n.push(u(e.color)), p)) {
						const t = e.vertexColors;
						n.push(u(t[0]), u(t[1]), u(t[2]));
					}
				}
				function l(t, e, n) {
					return n ? t | (1 << e) : t & ~(1 << e);
				}
				function h(t) {
					const e = t.x.toString() + t.y.toString() + t.z.toString();
					return (
						void 0 !== r[e] || ((r[e] = i.length / 3), i.push(t.x, t.y, t.z)),
						r[e]
					);
				}
				function u(t) {
					const e = t.r.toString() + t.g.toString() + t.b.toString();
					return (
						void 0 !== s[e] || ((s[e] = o.length), o.push(t.getHex())), s[e]
					);
				}
				function d(t) {
					const e = t.x.toString() + t.y.toString();
					return (
						void 0 !== c[e] || ((c[e] = a.length / 2), a.push(t.x, t.y)), c[e]
					);
				}
				return (
					(t.data = {}),
					(t.data.vertices = e),
					(t.data.normals = i),
					o.length > 0 && (t.data.colors = o),
					a.length > 0 && (t.data.uvs = [a]),
					(t.data.faces = n),
					t
				);
			},
			clone: function () {
				return new Vn().copy(this);
			},
			copy: function (t) {
				(this.vertices = []),
					(this.colors = []),
					(this.faces = []),
					(this.faceVertexUvs = [[]]),
					(this.morphTargets = []),
					(this.morphNormals = []),
					(this.skinWeights = []),
					(this.skinIndices = []),
					(this.lineDistances = []),
					(this.boundingBox = null),
					(this.boundingSphere = null),
					(this.name = t.name);
				const e = t.vertices;
				for (let t = 0, n = e.length; t < n; t++)
					this.vertices.push(e[t].clone());
				const n = t.colors;
				for (let t = 0, e = n.length; t < e; t++)
					this.colors.push(n[t].clone());
				const i = t.faces;
				for (let t = 0, e = i.length; t < e; t++) this.faces.push(i[t].clone());
				for (let e = 0, n = t.faceVertexUvs.length; e < n; e++) {
					const n = t.faceVertexUvs[e];
					void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []);
					for (let t = 0, i = n.length; t < i; t++) {
						const i = n[t],
							r = [];
						for (let t = 0, e = i.length; t < e; t++) {
							const e = i[t];
							r.push(e.clone());
						}
						this.faceVertexUvs[e].push(r);
					}
				}
				const r = t.morphTargets;
				for (let t = 0, e = r.length; t < e; t++) {
					const e = {};
					if (((e.name = r[t].name), void 0 !== r[t].vertices)) {
						e.vertices = [];
						for (let n = 0, i = r[t].vertices.length; n < i; n++)
							e.vertices.push(r[t].vertices[n].clone());
					}
					if (void 0 !== r[t].normals) {
						e.normals = [];
						for (let n = 0, i = r[t].normals.length; n < i; n++)
							e.normals.push(r[t].normals[n].clone());
					}
					this.morphTargets.push(e);
				}
				const o = t.morphNormals;
				for (let t = 0, e = o.length; t < e; t++) {
					const e = {};
					if (void 0 !== o[t].vertexNormals) {
						e.vertexNormals = [];
						for (let n = 0, i = o[t].vertexNormals.length; n < i; n++) {
							const i = o[t].vertexNormals[n],
								r = {};
							(r.a = i.a.clone()),
								(r.b = i.b.clone()),
								(r.c = i.c.clone()),
								e.vertexNormals.push(r);
						}
					}
					if (void 0 !== o[t].faceNormals) {
						e.faceNormals = [];
						for (let n = 0, i = o[t].faceNormals.length; n < i; n++)
							e.faceNormals.push(o[t].faceNormals[n].clone());
					}
					this.morphNormals.push(e);
				}
				const s = t.skinWeights;
				for (let t = 0, e = s.length; t < e; t++)
					this.skinWeights.push(s[t].clone());
				const a = t.skinIndices;
				for (let t = 0, e = a.length; t < e; t++)
					this.skinIndices.push(a[t].clone());
				const c = t.lineDistances;
				for (let t = 0, e = c.length; t < e; t++) this.lineDistances.push(c[t]);
				const l = t.boundingBox;
				null !== l && (this.boundingBox = l.clone());
				const h = t.boundingSphere;
				return (
					null !== h && (this.boundingSphere = h.clone()),
					(this.elementsNeedUpdate = t.elementsNeedUpdate),
					(this.verticesNeedUpdate = t.verticesNeedUpdate),
					(this.uvsNeedUpdate = t.uvsNeedUpdate),
					(this.normalsNeedUpdate = t.normalsNeedUpdate),
					(this.colorsNeedUpdate = t.colorsNeedUpdate),
					(this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate),
					(this.groupsNeedUpdate = t.groupsNeedUpdate),
					this
				);
			},
			dispose: function () {
				this.dispatchEvent({ type: "dispose" });
			},
		});
		class Wn extends Vn {
			constructor(t, e, n, i, r, o) {
				super(),
					(this.type = "BoxGeometry"),
					(this.parameters = {
						width: t,
						height: e,
						depth: n,
						widthSegments: i,
						heightSegments: r,
						depthSegments: o,
					}),
					this.fromBufferGeometry(new qn(t, e, n, i, r, o)),
					this.mergeVertices();
			}
		}
		class qn extends xn {
			constructor(t = 1, e = 1, n = 1, i = 1, r = 1, o = 1) {
				super(),
					(this.type = "BoxBufferGeometry"),
					(this.parameters = {
						width: t,
						height: e,
						depth: n,
						widthSegments: i,
						heightSegments: r,
						depthSegments: o,
					});
				const s = this;
				(i = Math.floor(i)), (r = Math.floor(r)), (o = Math.floor(o));
				const a = [],
					c = [],
					l = [],
					h = [];
				let u = 0,
					d = 0;
				function p(t, e, n, i, r, o, p, f, m, g, v) {
					const y = o / m,
						x = p / g,
						b = o / 2,
						w = p / 2,
						_ = f / 2,
						M = m + 1,
						S = g + 1;
					let T = 0,
						E = 0;
					const A = new Et();
					for (let o = 0; o < S; o++) {
						const s = o * x - w;
						for (let a = 0; a < M; a++) {
							const u = a * y - b;
							(A[t] = u * i),
								(A[e] = s * r),
								(A[n] = _),
								c.push(A.x, A.y, A.z),
								(A[t] = 0),
								(A[e] = 0),
								(A[n] = f > 0 ? 1 : -1),
								l.push(A.x, A.y, A.z),
								h.push(a / m),
								h.push(1 - o / g),
								(T += 1);
						}
					}
					for (let t = 0; t < g; t++)
						for (let e = 0; e < m; e++) {
							const n = u + e + M * t,
								i = u + e + M * (t + 1),
								r = u + (e + 1) + M * (t + 1),
								o = u + (e + 1) + M * t;
							a.push(n, i, o), a.push(i, r, o), (E += 6);
						}
					s.addGroup(d, E, v), (d += E), (u += T);
				}
				p("z", "y", "x", -1, -1, n, e, t, o, r, 0),
					p("z", "y", "x", 1, -1, n, e, -t, o, r, 1),
					p("x", "z", "y", 1, 1, t, n, e, i, o, 2),
					p("x", "z", "y", 1, -1, t, n, -e, i, o, 3),
					p("x", "y", "z", 1, -1, t, e, n, i, r, 4),
					p("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
					this.setIndex(a),
					this.setAttribute("position", new cn(c, 3)),
					this.setAttribute("normal", new cn(l, 3)),
					this.setAttribute("uv", new cn(h, 2));
			}
		}
		function Xn(t) {
			const e = {};
			for (const n in t) {
				e[n] = {};
				for (const i in t[n]) {
					const r = t[n][i];
					r &&
					(r.isColor ||
						r.isMatrix3 ||
						r.isMatrix4 ||
						r.isVector2 ||
						r.isVector3 ||
						r.isVector4 ||
						r.isTexture)
						? (e[n][i] = r.clone())
						: Array.isArray(r)
						? (e[n][i] = r.slice())
						: (e[n][i] = r);
				}
			}
			return e;
		}
		function Yn(t) {
			const e = {};
			for (let n = 0; n < t.length; n++) {
				const i = Xn(t[n]);
				for (const t in i) e[t] = i[t];
			}
			return e;
		}
		const Zn = { clone: Xn, merge: Yn };
		function Jn(t) {
			Ze.call(this),
				(this.type = "ShaderMaterial"),
				(this.defines = {}),
				(this.uniforms = {}),
				(this.vertexShader =
					"void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
				(this.fragmentShader =
					"void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
				(this.linewidth = 1),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.fog = !1),
				(this.lights = !1),
				(this.clipping = !1),
				(this.skinning = !1),
				(this.morphTargets = !1),
				(this.morphNormals = !1),
				(this.extensions = {
					derivatives: !1,
					fragDepth: !1,
					drawBuffers: !1,
					shaderTextureLOD: !1,
				}),
				(this.defaultAttributeValues = {
					color: [1, 1, 1],
					uv: [0, 0],
					uv2: [0, 0],
				}),
				(this.index0AttributeName = void 0),
				(this.uniformsNeedUpdate = !1),
				void 0 !== t &&
					(void 0 !== t.attributes &&
						console.error(
							"THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."
						),
					this.setValues(t));
		}
		function Kn() {
			Qt.call(this),
				(this.type = "Camera"),
				(this.matrixWorldInverse = new Dt()),
				(this.projectionMatrix = new Dt()),
				(this.projectionMatrixInverse = new Dt());
		}
		function Qn(t, e, n, i) {
			Kn.call(this),
				(this.type = "PerspectiveCamera"),
				(this.fov = void 0 !== t ? t : 50),
				(this.zoom = 1),
				(this.near = void 0 !== n ? n : 0.1),
				(this.far = void 0 !== i ? i : 2e3),
				(this.focus = 10),
				(this.aspect = void 0 !== e ? e : 1),
				(this.view = null),
				(this.filmGauge = 35),
				(this.filmOffset = 0),
				this.updateProjectionMatrix();
		}
		(Jn.prototype = Object.create(Ze.prototype)),
			(Jn.prototype.constructor = Jn),
			(Jn.prototype.isShaderMaterial = !0),
			(Jn.prototype.copy = function (t) {
				return (
					Ze.prototype.copy.call(this, t),
					(this.fragmentShader = t.fragmentShader),
					(this.vertexShader = t.vertexShader),
					(this.uniforms = Xn(t.uniforms)),
					(this.defines = Object.assign({}, t.defines)),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.lights = t.lights),
					(this.clipping = t.clipping),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					(this.morphNormals = t.morphNormals),
					(this.extensions = Object.assign({}, t.extensions)),
					this
				);
			}),
			(Jn.prototype.toJSON = function (t) {
				const e = Ze.prototype.toJSON.call(this, t);
				e.uniforms = {};
				for (const n in this.uniforms) {
					const i = this.uniforms[n].value;
					i && i.isTexture
						? (e.uniforms[n] = { type: "t", value: i.toJSON(t).uuid })
						: i && i.isColor
						? (e.uniforms[n] = { type: "c", value: i.getHex() })
						: i && i.isVector2
						? (e.uniforms[n] = { type: "v2", value: i.toArray() })
						: i && i.isVector3
						? (e.uniforms[n] = { type: "v3", value: i.toArray() })
						: i && i.isVector4
						? (e.uniforms[n] = { type: "v4", value: i.toArray() })
						: i && i.isMatrix3
						? (e.uniforms[n] = { type: "m3", value: i.toArray() })
						: i && i.isMatrix4
						? (e.uniforms[n] = { type: "m4", value: i.toArray() })
						: (e.uniforms[n] = { value: i });
				}
				Object.keys(this.defines).length > 0 && (e.defines = this.defines),
					(e.vertexShader = this.vertexShader),
					(e.fragmentShader = this.fragmentShader);
				const n = {};
				for (const t in this.extensions)
					!0 === this.extensions[t] && (n[t] = !0);
				return Object.keys(n).length > 0 && (e.extensions = n), e;
			}),
			(Kn.prototype = Object.assign(Object.create(Qt.prototype), {
				constructor: Kn,
				isCamera: !0,
				copy: function (t, e) {
					return (
						Qt.prototype.copy.call(this, t, e),
						this.matrixWorldInverse.copy(t.matrixWorldInverse),
						this.projectionMatrix.copy(t.projectionMatrix),
						this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
						this
					);
				},
				getWorldDirection: function (t) {
					void 0 === t &&
						(console.warn(
							"THREE.Camera: .getWorldDirection() target is now required"
						),
						(t = new Et())),
						this.updateMatrixWorld(!0);
					const e = this.matrixWorld.elements;
					return t.set(-e[8], -e[9], -e[10]).normalize();
				},
				updateMatrixWorld: function (t) {
					Qt.prototype.updateMatrixWorld.call(this, t),
						this.matrixWorldInverse.getInverse(this.matrixWorld);
				},
				updateWorldMatrix: function (t, e) {
					Qt.prototype.updateWorldMatrix.call(this, t, e),
						this.matrixWorldInverse.getInverse(this.matrixWorld);
				},
				clone: function () {
					return new this.constructor().copy(this);
				},
			})),
			(Qn.prototype = Object.assign(Object.create(Kn.prototype), {
				constructor: Qn,
				isPerspectiveCamera: !0,
				copy: function (t, e) {
					return (
						Kn.prototype.copy.call(this, t, e),
						(this.fov = t.fov),
						(this.zoom = t.zoom),
						(this.near = t.near),
						(this.far = t.far),
						(this.focus = t.focus),
						(this.aspect = t.aspect),
						(this.view = null === t.view ? null : Object.assign({}, t.view)),
						(this.filmGauge = t.filmGauge),
						(this.filmOffset = t.filmOffset),
						this
					);
				},
				setFocalLength: function (t) {
					const e = (0.5 * this.getFilmHeight()) / t;
					(this.fov = 2 * pt.RAD2DEG * Math.atan(e)),
						this.updateProjectionMatrix();
				},
				getFocalLength: function () {
					const t = Math.tan(0.5 * pt.DEG2RAD * this.fov);
					return (0.5 * this.getFilmHeight()) / t;
				},
				getEffectiveFOV: function () {
					return (
						2 *
						pt.RAD2DEG *
						Math.atan(Math.tan(0.5 * pt.DEG2RAD * this.fov) / this.zoom)
					);
				},
				getFilmWidth: function () {
					return this.filmGauge * Math.min(this.aspect, 1);
				},
				getFilmHeight: function () {
					return this.filmGauge / Math.max(this.aspect, 1);
				},
				setViewOffset: function (t, e, n, i, r, o) {
					(this.aspect = t / e),
						null === this.view &&
							(this.view = {
								enabled: !0,
								fullWidth: 1,
								fullHeight: 1,
								offsetX: 0,
								offsetY: 0,
								width: 1,
								height: 1,
							}),
						(this.view.enabled = !0),
						(this.view.fullWidth = t),
						(this.view.fullHeight = e),
						(this.view.offsetX = n),
						(this.view.offsetY = i),
						(this.view.width = r),
						(this.view.height = o),
						this.updateProjectionMatrix();
				},
				clearViewOffset: function () {
					null !== this.view && (this.view.enabled = !1),
						this.updateProjectionMatrix();
				},
				updateProjectionMatrix: function () {
					let t = this.near,
						e = (t * Math.tan(0.5 * pt.DEG2RAD * this.fov)) / this.zoom,
						n = 2 * e,
						i = this.aspect * n,
						r = -0.5 * i,
						o = this.view;
					if (null !== this.view && this.view.enabled) {
						const t = o.fullWidth,
							s = o.fullHeight;
						(r += (o.offsetX * i) / t),
							(e -= (o.offsetY * n) / s),
							(i *= o.width / t),
							(n *= o.height / s);
					}
					const s = this.filmOffset;
					0 !== s && (r += (t * s) / this.getFilmWidth()),
						this.projectionMatrix.makePerspective(
							r,
							r + i,
							e,
							e - n,
							t,
							this.far
						),
						this.projectionMatrixInverse.getInverse(this.projectionMatrix);
				},
				toJSON: function (t) {
					const e = Qt.prototype.toJSON.call(this, t);
					return (
						(e.object.fov = this.fov),
						(e.object.zoom = this.zoom),
						(e.object.near = this.near),
						(e.object.far = this.far),
						(e.object.focus = this.focus),
						(e.object.aspect = this.aspect),
						null !== this.view &&
							(e.object.view = Object.assign({}, this.view)),
						(e.object.filmGauge = this.filmGauge),
						(e.object.filmOffset = this.filmOffset),
						e
					);
				},
			}));
		function $n(t, e, n) {
			if (
				(Qt.call(this),
				(this.type = "CubeCamera"),
				!0 !== n.isWebGLCubeRenderTarget)
			)
				return void console.error(
					"THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."
				);
			this.renderTarget = n;
			const i = new Qn(90, 1, t, e);
			(i.layers = this.layers),
				i.up.set(0, -1, 0),
				i.lookAt(new Et(1, 0, 0)),
				this.add(i);
			const r = new Qn(90, 1, t, e);
			(r.layers = this.layers),
				r.up.set(0, -1, 0),
				r.lookAt(new Et(-1, 0, 0)),
				this.add(r);
			const o = new Qn(90, 1, t, e);
			(o.layers = this.layers),
				o.up.set(0, 0, 1),
				o.lookAt(new Et(0, 1, 0)),
				this.add(o);
			const s = new Qn(90, 1, t, e);
			(s.layers = this.layers),
				s.up.set(0, 0, -1),
				s.lookAt(new Et(0, -1, 0)),
				this.add(s);
			const a = new Qn(90, 1, t, e);
			(a.layers = this.layers),
				a.up.set(0, -1, 0),
				a.lookAt(new Et(0, 0, 1)),
				this.add(a);
			const c = new Qn(90, 1, t, e);
			(c.layers = this.layers),
				c.up.set(0, -1, 0),
				c.lookAt(new Et(0, 0, -1)),
				this.add(c),
				(this.update = function (t, e) {
					null === this.parent && this.updateMatrixWorld();
					const l = t.xr.enabled,
						h = t.getRenderTarget();
					t.xr.enabled = !1;
					const u = n.texture.generateMipmaps;
					(n.texture.generateMipmaps = !1),
						t.setRenderTarget(n, 0),
						t.render(e, i),
						t.setRenderTarget(n, 1),
						t.render(e, r),
						t.setRenderTarget(n, 2),
						t.render(e, o),
						t.setRenderTarget(n, 3),
						t.render(e, s),
						t.setRenderTarget(n, 4),
						t.render(e, a),
						(n.texture.generateMipmaps = u),
						t.setRenderTarget(n, 5),
						t.render(e, c),
						t.setRenderTarget(h),
						(t.xr.enabled = l);
				}),
				(this.clear = function (t, e, i, r) {
					const o = t.getRenderTarget();
					for (let o = 0; o < 6; o++) t.setRenderTarget(n, o), t.clear(e, i, r);
					t.setRenderTarget(o);
				});
		}
		function ti(t, e, n) {
			Number.isInteger(e) &&
				(console.warn(
					"THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"
				),
				(e = n)),
				wt.call(this, t, t, e);
		}
		function ei(t, e, n, i, r, o, s, a, c, l, h, u) {
			xt.call(this, null, o, s, a, c, l, i, r, h, u),
				(this.image = { data: t || null, width: e || 1, height: n || 1 }),
				(this.magFilter = void 0 !== c ? c : 1003),
				(this.minFilter = void 0 !== l ? l : 1003),
				(this.generateMipmaps = !1),
				(this.flipY = !1),
				(this.unpackAlignment = 1),
				(this.needsUpdate = !0);
		}
		($n.prototype = Object.create(Qt.prototype)),
			($n.prototype.constructor = $n),
			(ti.prototype = Object.create(wt.prototype)),
			(ti.prototype.constructor = ti),
			(ti.prototype.isWebGLCubeRenderTarget = !0),
			(ti.prototype.fromEquirectangularTexture = function (t, e) {
				(this.texture.type = e.type),
					(this.texture.format = 1023),
					(this.texture.encoding = e.encoding),
					(this.texture.generateMipmaps = e.generateMipmaps),
					(this.texture.minFilter = e.minFilter),
					(this.texture.magFilter = e.magFilter);
				const n = new $t(),
					i = {
						uniforms: { tEquirect: { value: null } },
						vertexShader:
							"\n\n\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t#include <begin_vertex>\n\t\t\t\t#include <project_vertex>\n\n\t\t\t}\n\t\t",
						fragmentShader:
							"\n\n\t\t\tuniform sampler2D tEquirect;\n\n\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t}\n\t\t",
					},
					r = new Jn({
						name: "CubemapFromEquirect",
						uniforms: Xn(i.uniforms),
						vertexShader: i.vertexShader,
						fragmentShader: i.fragmentShader,
						side: 1,
						blending: 0,
					});
				r.uniforms.tEquirect.value = e;
				const o = new Un(new qn(5, 5, 5), r);
				n.add(o);
				return (
					new $n(1, 10, this).update(t, n),
					o.geometry.dispose(),
					o.material.dispose(),
					this
				);
			}),
			(ei.prototype = Object.create(xt.prototype)),
			(ei.prototype.constructor = ei),
			(ei.prototype.isDataTexture = !0);
		const ni = new ge(),
			ii = new Et();
		function ri(t, e, n, i, r, o) {
			this.planes = [
				void 0 !== t ? t : new Le(),
				void 0 !== e ? e : new Le(),
				void 0 !== n ? n : new Le(),
				void 0 !== i ? i : new Le(),
				void 0 !== r ? r : new Le(),
				void 0 !== o ? o : new Le(),
			];
		}
		Object.assign(ri.prototype, {
			set: function (t, e, n, i, r, o) {
				const s = this.planes;
				return (
					s[0].copy(t),
					s[1].copy(e),
					s[2].copy(n),
					s[3].copy(i),
					s[4].copy(r),
					s[5].copy(o),
					this
				);
			},
			clone: function () {
				return new this.constructor().copy(this);
			},
			copy: function (t) {
				const e = this.planes;
				for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
				return this;
			},
			setFromProjectionMatrix: function (t) {
				const e = this.planes,
					n = t.elements,
					i = n[0],
					r = n[1],
					o = n[2],
					s = n[3],
					a = n[4],
					c = n[5],
					l = n[6],
					h = n[7],
					u = n[8],
					d = n[9],
					p = n[10],
					f = n[11],
					m = n[12],
					g = n[13],
					v = n[14],
					y = n[15];
				return (
					e[0].setComponents(s - i, h - a, f - u, y - m).normalize(),
					e[1].setComponents(s + i, h + a, f + u, y + m).normalize(),
					e[2].setComponents(s + r, h + c, f + d, y + g).normalize(),
					e[3].setComponents(s - r, h - c, f - d, y - g).normalize(),
					e[4].setComponents(s - o, h - l, f - p, y - v).normalize(),
					e[5].setComponents(s + o, h + l, f + p, y + v).normalize(),
					this
				);
			},
			intersectsObject: function (t) {
				const e = t.geometry;
				return (
					null === e.boundingSphere && e.computeBoundingSphere(),
					ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
					this.intersectsSphere(ni)
				);
			},
			intersectsSprite: function (t) {
				return (
					ni.center.set(0, 0, 0),
					(ni.radius = 0.7071067811865476),
					ni.applyMatrix4(t.matrixWorld),
					this.intersectsSphere(ni)
				);
			},
			intersectsSphere: function (t) {
				const e = this.planes,
					n = t.center,
					i = -t.radius;
				for (let t = 0; t < 6; t++) {
					if (e[t].distanceToPoint(n) < i) return !1;
				}
				return !0;
			},
			intersectsBox: function (t) {
				const e = this.planes;
				for (let n = 0; n < 6; n++) {
					const i = e[n];
					if (
						((ii.x = i.normal.x > 0 ? t.max.x : t.min.x),
						(ii.y = i.normal.y > 0 ? t.max.y : t.min.y),
						(ii.z = i.normal.z > 0 ? t.max.z : t.min.z),
						i.distanceToPoint(ii) < 0)
					)
						return !1;
				}
				return !0;
			},
			containsPoint: function (t) {
				const e = this.planes;
				for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
				return !0;
			},
		});
		const oi = {
			common: {
				diffuse: { value: new je(15658734) },
				opacity: { value: 1 },
				map: { value: null },
				uvTransform: { value: new mt() },
				uv2Transform: { value: new mt() },
				alphaMap: { value: null },
			},
			specularmap: { specularMap: { value: null } },
			envmap: {
				envMap: { value: null },
				flipEnvMap: { value: -1 },
				reflectivity: { value: 1 },
				refractionRatio: { value: 0.98 },
				maxMipLevel: { value: 0 },
			},
			aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
			lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
			emissivemap: { emissiveMap: { value: null } },
			bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
			normalmap: {
				normalMap: { value: null },
				normalScale: { value: new ft(1, 1) },
			},
			displacementmap: {
				displacementMap: { value: null },
				displacementScale: { value: 1 },
				displacementBias: { value: 0 },
			},
			roughnessmap: { roughnessMap: { value: null } },
			metalnessmap: { metalnessMap: { value: null } },
			gradientmap: { gradientMap: { value: null } },
			fog: {
				fogDensity: { value: 25e-5 },
				fogNear: { value: 1 },
				fogFar: { value: 2e3 },
				fogColor: { value: new je(16777215) },
			},
			lights: {
				ambientLightColor: { value: [] },
				lightProbe: { value: [] },
				directionalLights: {
					value: [],
					properties: { direction: {}, color: {} },
				},
				directionalLightShadows: {
					value: [],
					properties: {
						shadowBias: {},
						shadowNormalBias: {},
						shadowRadius: {},
						shadowMapSize: {},
					},
				},
				directionalShadowMap: { value: [] },
				directionalShadowMatrix: { value: [] },
				spotLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						direction: {},
						distance: {},
						coneCos: {},
						penumbraCos: {},
						decay: {},
					},
				},
				spotLightShadows: {
					value: [],
					properties: {
						shadowBias: {},
						shadowNormalBias: {},
						shadowRadius: {},
						shadowMapSize: {},
					},
				},
				spotShadowMap: { value: [] },
				spotShadowMatrix: { value: [] },
				pointLights: {
					value: [],
					properties: { color: {}, position: {}, decay: {}, distance: {} },
				},
				pointLightShadows: {
					value: [],
					properties: {
						shadowBias: {},
						shadowNormalBias: {},
						shadowRadius: {},
						shadowMapSize: {},
						shadowCameraNear: {},
						shadowCameraFar: {},
					},
				},
				pointShadowMap: { value: [] },
				pointShadowMatrix: { value: [] },
				hemisphereLights: {
					value: [],
					properties: { direction: {}, skyColor: {}, groundColor: {} },
				},
				rectAreaLights: {
					value: [],
					properties: { color: {}, position: {}, width: {}, height: {} },
				},
			},
			points: {
				diffuse: { value: new je(15658734) },
				opacity: { value: 1 },
				size: { value: 1 },
				scale: { value: 1 },
				map: { value: null },
				alphaMap: { value: null },
				uvTransform: { value: new mt() },
			},
			sprite: {
				diffuse: { value: new je(15658734) },
				opacity: { value: 1 },
				center: { value: new ft(0.5, 0.5) },
				rotation: { value: 0 },
				map: { value: null },
				alphaMap: { value: null },
				uvTransform: { value: new mt() },
			},
		};
		function si() {
			let t = null,
				e = !1,
				n = null,
				i = null;
			function r(e, o) {
				n(e, o), (i = t.requestAnimationFrame(r));
			}
			return {
				start: function () {
					!0 !== e &&
						null !== n &&
						((i = t.requestAnimationFrame(r)), (e = !0));
				},
				stop: function () {
					t.cancelAnimationFrame(i), (e = !1);
				},
				setAnimationLoop: function (t) {
					n = t;
				},
				setContext: function (e) {
					t = e;
				},
			};
		}
		function ai(t, e) {
			const n = e.isWebGL2,
				i = new WeakMap();
			return {
				get: function (t) {
					return t.isInterleavedBufferAttribute && (t = t.data), i.get(t);
				},
				remove: function (e) {
					e.isInterleavedBufferAttribute && (e = e.data);
					const n = i.get(e);
					n && (t.deleteBuffer(n.buffer), i.delete(e));
				},
				update: function (e, r) {
					e.isInterleavedBufferAttribute && (e = e.data);
					const o = i.get(e);
					void 0 === o
						? i.set(
								e,
								(function (e, n) {
									const i = e.array,
										r = e.usage,
										o = t.createBuffer();
									t.bindBuffer(n, o),
										t.bufferData(n, i, r),
										e.onUploadCallback();
									let s = 5126;
									return (
										i instanceof Float32Array
											? (s = 5126)
											: i instanceof Float64Array
											? console.warn(
													"THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."
											  )
											: i instanceof Uint16Array
											? (s = 5123)
											: i instanceof Int16Array
											? (s = 5122)
											: i instanceof Uint32Array
											? (s = 5125)
											: i instanceof Int32Array
											? (s = 5124)
											: i instanceof Int8Array
											? (s = 5120)
											: i instanceof Uint8Array && (s = 5121),
										{
											buffer: o,
											type: s,
											bytesPerElement: i.BYTES_PER_ELEMENT,
											version: e.version,
										}
									);
								})(e, r)
						  )
						: o.version < e.version &&
						  (!(function (e, i, r) {
								const o = i.array,
									s = i.updateRange;
								t.bindBuffer(r, e),
									-1 === s.count
										? t.bufferSubData(r, 0, o)
										: (n
												? t.bufferSubData(
														r,
														s.offset * o.BYTES_PER_ELEMENT,
														o,
														s.offset,
														s.count
												  )
												: t.bufferSubData(
														r,
														s.offset * o.BYTES_PER_ELEMENT,
														o.subarray(s.offset, s.offset + s.count)
												  ),
										  (s.count = -1));
						  })(o.buffer, e, r),
						  (o.version = e.version));
				},
			};
		}
		function ci(t, e, n, i) {
			Vn.call(this),
				(this.type = "PlaneGeometry"),
				(this.parameters = {
					width: t,
					height: e,
					widthSegments: n,
					heightSegments: i,
				}),
				this.fromBufferGeometry(new li(t, e, n, i)),
				this.mergeVertices();
		}
		function li(t, e, n, i) {
			xn.call(this),
				(this.type = "PlaneBufferGeometry"),
				(this.parameters = {
					width: t,
					height: e,
					widthSegments: n,
					heightSegments: i,
				});
			const r = (t = t || 1) / 2,
				o = (e = e || 1) / 2,
				s = Math.floor(n) || 1,
				a = Math.floor(i) || 1,
				c = s + 1,
				l = a + 1,
				h = t / s,
				u = e / a,
				d = [],
				p = [],
				f = [],
				m = [];
			for (let t = 0; t < l; t++) {
				const e = t * u - o;
				for (let n = 0; n < c; n++) {
					const i = n * h - r;
					p.push(i, -e, 0), f.push(0, 0, 1), m.push(n / s), m.push(1 - t / a);
				}
			}
			for (let t = 0; t < a; t++)
				for (let e = 0; e < s; e++) {
					const n = e + c * t,
						i = e + c * (t + 1),
						r = e + 1 + c * (t + 1),
						o = e + 1 + c * t;
					d.push(n, i, o), d.push(i, r, o);
				}
			this.setIndex(d),
				this.setAttribute("position", new cn(p, 3)),
				this.setAttribute("normal", new cn(f, 3)),
				this.setAttribute("uv", new cn(m, 2));
		}
		(ci.prototype = Object.create(Vn.prototype)),
			(ci.prototype.constructor = ci),
			(li.prototype = Object.create(xn.prototype)),
			(li.prototype.constructor = li);
		const hi = {
				alphamap_fragment:
					"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
				alphamap_pars_fragment:
					"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
				alphatest_fragment:
					"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
				aomap_fragment:
					"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
				aomap_pars_fragment:
					"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
				begin_vertex: "vec3 transformed = vec3( position );",
				beginnormal_vertex:
					"vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
				bsdfs:
					"vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
				bumpmap_pars_fragment:
					"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
				clipping_planes_fragment:
					"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
				clipping_planes_pars_fragment:
					"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
				clipping_planes_pars_vertex:
					"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
				clipping_planes_vertex:
					"#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
				color_fragment:
					"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
				color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
				color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
				color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
				common:
					"#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
				cube_uv_reflection_fragment:
					"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_maxMipLevel 8.0\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_maxTileSize 256.0\n#define cubeUV_minTileSize 16.0\nfloat getFace(vec3 direction) {\n    vec3 absDirection = abs(direction);\n    float face = -1.0;\n    if (absDirection.x > absDirection.z) {\n      if (absDirection.x > absDirection.y)\n        face = direction.x > 0.0 ? 0.0 : 3.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    } else {\n      if (absDirection.z > absDirection.y)\n        face = direction.z > 0.0 ? 2.0 : 5.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    }\n    return face;\n}\nvec2 getUV(vec3 direction, float face) {\n    vec2 uv;\n    if (face == 0.0) {\n      uv = vec2(direction.z, direction.y) / abs(direction.x);    } else if (face == 1.0) {\n      uv = vec2(-direction.x, -direction.z) / abs(direction.y);    } else if (face == 2.0) {\n      uv = vec2(-direction.x, direction.y) / abs(direction.z);    } else if (face == 3.0) {\n      uv = vec2(-direction.z, direction.y) / abs(direction.x);    } else if (face == 4.0) {\n      uv = vec2(-direction.x, direction.z) / abs(direction.y);    } else {\n      uv = vec2(direction.x, direction.y) / abs(direction.z);    }\n    return 0.5 * (uv + 1.0);\n}\nvec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {\n  float face = getFace(direction);\n  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);\n  mipInt = max(mipInt, cubeUV_minMipLevel);\n  float faceSize = exp2(mipInt);\n  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);\n  vec2 uv = getUV(direction, face) * (faceSize - 1.0);\n  vec2 f = fract(uv);\n  uv += 0.5 - f;\n  if (face > 2.0) {\n    uv.y += faceSize;\n    face -= 3.0;\n  }\n  uv.x += face * faceSize;\n  if(mipInt < cubeUV_maxMipLevel){\n    uv.y += 2.0 * cubeUV_maxTileSize;\n  }\n  uv.y += filterInt * 2.0 * cubeUV_minTileSize;\n  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);\n  uv *= texelSize;\n  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x += texelSize;\n  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.y += texelSize;\n  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x -= texelSize;\n  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  vec3 tm = mix(tl, tr, f.x);\n  vec3 bm = mix(bl, br, f.x);\n  return mix(tm, bm, f.y);\n}\n#define r0 1.0\n#define v0 0.339\n#define m0 -2.0\n#define r1 0.8\n#define v1 0.276\n#define m1 -1.0\n#define r4 0.4\n#define v4 0.046\n#define m4 2.0\n#define r5 0.305\n#define v5 0.016\n#define m5 3.0\n#define r6 0.21\n#define v6 0.0038\n#define m6 4.0\nfloat roughnessToMip(float roughness) {\n  float mip = 0.0;\n  if (roughness >= r1) {\n    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;\n  } else if (roughness >= r4) {\n    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;\n  } else if (roughness >= r5) {\n    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;\n  } else if (roughness >= r6) {\n    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;\n  } else {\n    mip = -2.0 * log2(1.16 * roughness);  }\n  return mip;\n}\nvec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {\n  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);\n  float mipF = fract(mip);\n  float mipInt = floor(mip);\n  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);\n  if (mipF == 0.0) {\n    return vec4(color0, 1.0);\n  } else {\n    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);\n    return vec4(mix(color0, color1, mipF), 1.0);\n  }\n}\n#endif",
				defaultnormal_vertex:
					"vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
				displacementmap_pars_vertex:
					"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
				displacementmap_vertex:
					"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
				emissivemap_fragment:
					"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
				emissivemap_pars_fragment:
					"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
				encodings_fragment:
					"gl_FragColor = linearToOutputTexel( gl_FragColor );",
				encodings_pars_fragment:
					"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
				envmap_fragment:
					"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\t\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t}  else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec2 sampleUV = equirectUv( reflectVec );\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
				envmap_common_pars_fragment:
					"#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
				envmap_pars_fragment:
					"#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
				envmap_pars_vertex:
					"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
				envmap_physical_pars_fragment:
					"#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV = equirectUv( reflectVec );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
				envmap_vertex:
					"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
				fog_vertex: "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif",
				fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
				fog_fragment:
					"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
				fog_pars_fragment:
					"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
				gradientmap_pars_fragment:
					"#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
				lightmap_fragment:
					"#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
				lightmap_pars_fragment:
					"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
				lights_lambert_vertex:
					"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
				lights_pars_begin:
					"uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
				lights_toon_fragment:
					"ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
				lights_toon_pars_fragment:
					"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
				lights_phong_fragment:
					"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
				lights_phong_pars_fragment:
					"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
				lights_physical_fragment:
					"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
				lights_physical_pars_fragment:
					"struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
				lights_fragment_begin:
					"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
				lights_fragment_maps:
					"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
				lights_fragment_end:
					"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
				logdepthbuf_fragment:
					"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
				logdepthbuf_pars_fragment:
					"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
				logdepthbuf_pars_vertex:
					"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
				logdepthbuf_vertex:
					"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
				map_fragment:
					"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
				map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
				map_particle_fragment:
					"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
				map_particle_pars_fragment:
					"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
				metalnessmap_fragment:
					"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
				metalnessmap_pars_fragment:
					"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
				morphnormal_vertex:
					"#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
				morphtarget_pars_vertex:
					"#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
				morphtarget_vertex:
					"#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
				normal_fragment_begin:
					"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
				normal_fragment_maps:
					"#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
				normalmap_pars_fragment:
					"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
				clearcoat_normal_fragment_begin:
					"#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
				clearcoat_normal_fragment_maps:
					"#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",
				clearcoat_pars_fragment:
					"#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
				packing:
					"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
				premultiplied_alpha_fragment:
					"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
				project_vertex:
					"vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
				dithering_fragment:
					"#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
				dithering_pars_fragment:
					"#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
				roughnessmap_fragment:
					"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
				roughnessmap_pars_fragment:
					"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
				shadowmap_pars_fragment:
					"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
				shadowmap_pars_vertex:
					"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
				shadowmap_vertex:
					"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
				shadowmask_pars_fragment:
					"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
				skinbase_vertex:
					"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
				skinning_pars_vertex:
					"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
				skinning_vertex:
					"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
				skinnormal_vertex:
					"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
				specularmap_fragment:
					"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
				specularmap_pars_fragment:
					"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
				tonemapping_fragment:
					"#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
				tonemapping_pars_fragment:
					"#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
				transmissionmap_fragment:
					"#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif",
				transmissionmap_pars_fragment:
					"#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif",
				uv_pars_fragment:
					"#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
				uv_pars_vertex:
					"#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
				uv_vertex:
					"#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
				uv2_pars_fragment:
					"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
				uv2_pars_vertex:
					"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
				uv2_vertex:
					"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
				worldpos_vertex:
					"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
				background_frag:
					"uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
				background_vert:
					"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
				cube_frag:
					"#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
				cube_vert:
					"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
				depth_frag:
					"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
				depth_vert:
					"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
				distanceRGBA_frag:
					"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
				distanceRGBA_vert:
					"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
				equirect_frag:
					"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
				equirect_vert:
					"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
				linedashed_frag:
					"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
				linedashed_vert:
					"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
				meshbasic_frag:
					"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
				meshbasic_vert:
					"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
				meshlambert_frag:
					"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
				meshlambert_vert:
					"#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
				meshmatcap_frag:
					"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
				meshmatcap_vert:
					"#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
				meshtoon_frag:
					"#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
				meshtoon_vert:
					"#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
				meshphong_frag:
					"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
				meshphong_vert:
					"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
				meshphysical_frag:
					"#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
				meshphysical_vert:
					"#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
				normal_frag:
					"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
				normal_vert:
					"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
				points_frag:
					"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
				points_vert:
					"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
				shadow_frag:
					"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
				shadow_vert:
					"#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
				sprite_frag:
					"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
				sprite_vert:
					"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
			},
			ui = {
				basic: {
					uniforms: Yn([
						oi.common,
						oi.specularmap,
						oi.envmap,
						oi.aomap,
						oi.lightmap,
						oi.fog,
					]),
					vertexShader: hi.meshbasic_vert,
					fragmentShader: hi.meshbasic_frag,
				},
				lambert: {
					uniforms: Yn([
						oi.common,
						oi.specularmap,
						oi.envmap,
						oi.aomap,
						oi.lightmap,
						oi.emissivemap,
						oi.fog,
						oi.lights,
						{ emissive: { value: new je(0) } },
					]),
					vertexShader: hi.meshlambert_vert,
					fragmentShader: hi.meshlambert_frag,
				},
				phong: {
					uniforms: Yn([
						oi.common,
						oi.specularmap,
						oi.envmap,
						oi.aomap,
						oi.lightmap,
						oi.emissivemap,
						oi.bumpmap,
						oi.normalmap,
						oi.displacementmap,
						oi.fog,
						oi.lights,
						{
							emissive: { value: new je(0) },
							specular: { value: new je(1118481) },
							shininess: { value: 30 },
						},
					]),
					vertexShader: hi.meshphong_vert,
					fragmentShader: hi.meshphong_frag,
				},
				standard: {
					uniforms: Yn([
						oi.common,
						oi.envmap,
						oi.aomap,
						oi.lightmap,
						oi.emissivemap,
						oi.bumpmap,
						oi.normalmap,
						oi.displacementmap,
						oi.roughnessmap,
						oi.metalnessmap,
						oi.fog,
						oi.lights,
						{
							emissive: { value: new je(0) },
							roughness: { value: 1 },
							metalness: { value: 0 },
							envMapIntensity: { value: 1 },
						},
					]),
					vertexShader: hi.meshphysical_vert,
					fragmentShader: hi.meshphysical_frag,
				},
				toon: {
					uniforms: Yn([
						oi.common,
						oi.aomap,
						oi.lightmap,
						oi.emissivemap,
						oi.bumpmap,
						oi.normalmap,
						oi.displacementmap,
						oi.gradientmap,
						oi.fog,
						oi.lights,
						{ emissive: { value: new je(0) } },
					]),
					vertexShader: hi.meshtoon_vert,
					fragmentShader: hi.meshtoon_frag,
				},
				matcap: {
					uniforms: Yn([
						oi.common,
						oi.bumpmap,
						oi.normalmap,
						oi.displacementmap,
						oi.fog,
						{ matcap: { value: null } },
					]),
					vertexShader: hi.meshmatcap_vert,
					fragmentShader: hi.meshmatcap_frag,
				},
				points: {
					uniforms: Yn([oi.points, oi.fog]),
					vertexShader: hi.points_vert,
					fragmentShader: hi.points_frag,
				},
				dashed: {
					uniforms: Yn([
						oi.common,
						oi.fog,
						{
							scale: { value: 1 },
							dashSize: { value: 1 },
							totalSize: { value: 2 },
						},
					]),
					vertexShader: hi.linedashed_vert,
					fragmentShader: hi.linedashed_frag,
				},
				depth: {
					uniforms: Yn([oi.common, oi.displacementmap]),
					vertexShader: hi.depth_vert,
					fragmentShader: hi.depth_frag,
				},
				normal: {
					uniforms: Yn([
						oi.common,
						oi.bumpmap,
						oi.normalmap,
						oi.displacementmap,
						{ opacity: { value: 1 } },
					]),
					vertexShader: hi.normal_vert,
					fragmentShader: hi.normal_frag,
				},
				sprite: {
					uniforms: Yn([oi.sprite, oi.fog]),
					vertexShader: hi.sprite_vert,
					fragmentShader: hi.sprite_frag,
				},
				background: {
					uniforms: { uvTransform: { value: new mt() }, t2D: { value: null } },
					vertexShader: hi.background_vert,
					fragmentShader: hi.background_frag,
				},
				cube: {
					uniforms: Yn([oi.envmap, { opacity: { value: 1 } }]),
					vertexShader: hi.cube_vert,
					fragmentShader: hi.cube_frag,
				},
				equirect: {
					uniforms: { tEquirect: { value: null } },
					vertexShader: hi.equirect_vert,
					fragmentShader: hi.equirect_frag,
				},
				distanceRGBA: {
					uniforms: Yn([
						oi.common,
						oi.displacementmap,
						{
							referencePosition: { value: new Et() },
							nearDistance: { value: 1 },
							farDistance: { value: 1e3 },
						},
					]),
					vertexShader: hi.distanceRGBA_vert,
					fragmentShader: hi.distanceRGBA_frag,
				},
				shadow: {
					uniforms: Yn([
						oi.lights,
						oi.fog,
						{ color: { value: new je(0) }, opacity: { value: 1 } },
					]),
					vertexShader: hi.shadow_vert,
					fragmentShader: hi.shadow_frag,
				},
			};
		function di(t, e, n, i) {
			const r = new je(0);
			let o,
				s,
				a = 0,
				c = null,
				l = 0,
				h = null;
			function u(t, n) {
				e.buffers.color.setClear(t.r, t.g, t.b, n, i);
			}
			return {
				getClearColor: function () {
					return r;
				},
				setClearColor: function (t, e) {
					r.set(t), (a = void 0 !== e ? e : 1), u(r, a);
				},
				getClearAlpha: function () {
					return a;
				},
				setClearAlpha: function (t) {
					(a = t), u(r, a);
				},
				render: function (e, i, d, p) {
					let f = !0 === i.isScene ? i.background : null;
					const m = t.xr,
						g = m.getSession && m.getSession();
					if (
						(g && "additive" === g.environmentBlendMode && (f = null),
						null === f ? u(r, a) : f && f.isColor && (u(f, 1), (p = !0)),
						(t.autoClear || p) &&
							t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
						f &&
							(f.isCubeTexture ||
								f.isWebGLCubeRenderTarget ||
								306 === f.mapping))
					) {
						void 0 === s &&
							((s = new Un(
								new qn(1, 1, 1),
								new Jn({
									name: "BackgroundCubeMaterial",
									uniforms: Xn(ui.cube.uniforms),
									vertexShader: ui.cube.vertexShader,
									fragmentShader: ui.cube.fragmentShader,
									side: 1,
									depthTest: !1,
									depthWrite: !1,
									fog: !1,
								})
							)),
							s.geometry.deleteAttribute("normal"),
							s.geometry.deleteAttribute("uv"),
							(s.onBeforeRender = function (t, e, n) {
								this.matrixWorld.copyPosition(n.matrixWorld);
							}),
							Object.defineProperty(s.material, "envMap", {
								get: function () {
									return this.uniforms.envMap.value;
								},
							}),
							n.update(s));
						const i = f.isWebGLCubeRenderTarget ? f.texture : f;
						(s.material.uniforms.envMap.value = i),
							(s.material.uniforms.flipEnvMap.value = i.isCubeTexture ? -1 : 1),
							(c === f && l === i.version && h === t.toneMapping) ||
								((s.material.needsUpdate = !0),
								(c = f),
								(l = i.version),
								(h = t.toneMapping)),
							e.unshift(s, s.geometry, s.material, 0, 0, null);
					} else
						f &&
							f.isTexture &&
							(void 0 === o &&
								((o = new Un(
									new li(2, 2),
									new Jn({
										name: "BackgroundMaterial",
										uniforms: Xn(ui.background.uniforms),
										vertexShader: ui.background.vertexShader,
										fragmentShader: ui.background.fragmentShader,
										side: 0,
										depthTest: !1,
										depthWrite: !1,
										fog: !1,
									})
								)),
								o.geometry.deleteAttribute("normal"),
								Object.defineProperty(o.material, "map", {
									get: function () {
										return this.uniforms.t2D.value;
									},
								}),
								n.update(o)),
							(o.material.uniforms.t2D.value = f),
							!0 === f.matrixAutoUpdate && f.updateMatrix(),
							o.material.uniforms.uvTransform.value.copy(f.matrix),
							(c === f && l === f.version && h === t.toneMapping) ||
								((o.material.needsUpdate = !0),
								(c = f),
								(l = f.version),
								(h = t.toneMapping)),
							e.unshift(o, o.geometry, o.material, 0, 0, null));
				},
			};
		}
		function pi(t, e, n, i) {
			const r = t.getParameter(34921),
				o = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
				s = i.isWebGL2 || null !== o,
				a = {},
				c = d(null);
			let l = c;
			function h(e) {
				return i.isWebGL2 ? t.bindVertexArray(e) : o.bindVertexArrayOES(e);
			}
			function u(e) {
				return i.isWebGL2 ? t.deleteVertexArray(e) : o.deleteVertexArrayOES(e);
			}
			function d(t) {
				const e = [],
					n = [],
					i = [];
				for (let t = 0; t < r; t++) (e[t] = 0), (n[t] = 0), (i[t] = 0);
				return {
					geometry: null,
					program: null,
					wireframe: !1,
					newAttributes: e,
					enabledAttributes: n,
					attributeDivisors: i,
					object: t,
					attributes: {},
				};
			}
			function p() {
				const t = l.newAttributes;
				for (let e = 0, n = t.length; e < n; e++) t[e] = 0;
			}
			function f(t) {
				m(t, 0);
			}
			function m(n, r) {
				const o = l.newAttributes,
					s = l.enabledAttributes,
					a = l.attributeDivisors;
				if (
					((o[n] = 1),
					0 === s[n] && (t.enableVertexAttribArray(n), (s[n] = 1)),
					a[n] !== r)
				) {
					(i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[
						i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
					](n, r),
						(a[n] = r);
				}
			}
			function g() {
				const e = l.newAttributes,
					n = l.enabledAttributes;
				for (let i = 0, r = n.length; i < r; i++)
					n[i] !== e[i] && (t.disableVertexAttribArray(i), (n[i] = 0));
			}
			function v(e, n, r, o, s, a) {
				!0 !== i.isWebGL2 || (5124 !== r && 5125 !== r)
					? t.vertexAttribPointer(e, n, r, o, s, a)
					: t.vertexAttribIPointer(e, n, r, s, a);
			}
			function y() {
				x(), l !== c && ((l = c), h(l.object));
			}
			function x() {
				(c.geometry = null), (c.program = null), (c.wireframe = !1);
			}
			return {
				setup: function (r, c, u, y, x) {
					let b = !1;
					if (s) {
						const e = (function (e, n, r) {
							const s = !0 === r.wireframe;
							let c = a[e.id];
							void 0 === c && ((c = {}), (a[e.id] = c));
							let l = c[n.id];
							void 0 === l && ((l = {}), (c[n.id] = l));
							let h = l[s];
							void 0 === h &&
								((h = d(
									i.isWebGL2 ? t.createVertexArray() : o.createVertexArrayOES()
								)),
								(l[s] = h));
							return h;
						})(y, u, c);
						l !== e && ((l = e), h(l.object)),
							(b = (function (t) {
								const e = l.attributes,
									n = t.attributes;
								if (Object.keys(e).length !== Object.keys(n).length) return !0;
								for (const t in n) {
									const i = e[t],
										r = n[t];
									if (i.attribute !== r) return !0;
									if (i.data !== r.data) return !0;
								}
								return !1;
							})(y)),
							b &&
								(function (t) {
									const e = {},
										n = t.attributes;
									for (const t in n) {
										const i = n[t],
											r = {};
										(r.attribute = i), i.data && (r.data = i.data), (e[t] = r);
									}
									l.attributes = e;
								})(y);
					} else {
						const t = !0 === c.wireframe;
						(l.geometry === y.id && l.program === u.id && l.wireframe === t) ||
							((l.geometry = y.id),
							(l.program = u.id),
							(l.wireframe = t),
							(b = !0));
					}
					!0 === r.isInstancedMesh && (b = !0),
						null !== x && n.update(x, 34963),
						b &&
							(!(function (r, o, s, a) {
								if (
									!1 === i.isWebGL2 &&
									(r.isInstancedMesh || a.isInstancedBufferGeometry) &&
									null === e.get("ANGLE_instanced_arrays")
								)
									return;
								p();
								const c = a.attributes,
									l = s.getAttributes(),
									h = o.defaultAttributeValues;
								for (const e in l) {
									const i = l[e];
									if (i >= 0) {
										const o = c[e];
										if (void 0 !== o) {
											const e = o.normalized,
												r = o.itemSize,
												s = n.get(o);
											if (void 0 === s) continue;
											const c = s.buffer,
												l = s.type,
												h = s.bytesPerElement;
											if (o.isInterleavedBufferAttribute) {
												const n = o.data,
													s = n.stride,
													u = o.offset;
												n && n.isInstancedInterleavedBuffer
													? (m(i, n.meshPerAttribute),
													  void 0 === a._maxInstanceCount &&
															(a._maxInstanceCount =
																n.meshPerAttribute * n.count))
													: f(i),
													t.bindBuffer(34962, c),
													v(i, r, l, e, s * h, u * h);
											} else
												o.isInstancedBufferAttribute
													? (m(i, o.meshPerAttribute),
													  void 0 === a._maxInstanceCount &&
															(a._maxInstanceCount =
																o.meshPerAttribute * o.count))
													: f(i),
													t.bindBuffer(34962, c),
													v(i, r, l, e, 0, 0);
										} else if ("instanceMatrix" === e) {
											const e = n.get(r.instanceMatrix);
											if (void 0 === e) continue;
											const o = e.buffer,
												s = e.type;
											m(i + 0, 1),
												m(i + 1, 1),
												m(i + 2, 1),
												m(i + 3, 1),
												t.bindBuffer(34962, o),
												t.vertexAttribPointer(i + 0, 4, s, !1, 64, 0),
												t.vertexAttribPointer(i + 1, 4, s, !1, 64, 16),
												t.vertexAttribPointer(i + 2, 4, s, !1, 64, 32),
												t.vertexAttribPointer(i + 3, 4, s, !1, 64, 48);
										} else if (void 0 !== h) {
											const n = h[e];
											if (void 0 !== n)
												switch (n.length) {
													case 2:
														t.vertexAttrib2fv(i, n);
														break;
													case 3:
														t.vertexAttrib3fv(i, n);
														break;
													case 4:
														t.vertexAttrib4fv(i, n);
														break;
													default:
														t.vertexAttrib1fv(i, n);
												}
										}
									}
								}
								g();
							})(r, c, u, y),
							null !== x && t.bindBuffer(34963, n.get(x).buffer));
				},
				reset: y,
				resetDefaultState: x,
				dispose: function () {
					y();
					for (const t in a) {
						const e = a[t];
						for (const t in e) {
							const n = e[t];
							for (const t in n) u(n[t].object), delete n[t];
							delete e[t];
						}
						delete a[t];
					}
				},
				releaseStatesOfGeometry: function (t) {
					if (void 0 === a[t.id]) return;
					const e = a[t.id];
					for (const t in e) {
						const n = e[t];
						for (const t in n) u(n[t].object), delete n[t];
						delete e[t];
					}
					delete a[t.id];
				},
				releaseStatesOfProgram: function (t) {
					for (const e in a) {
						const n = a[e];
						if (void 0 === n[t.id]) continue;
						const i = n[t.id];
						for (const t in i) u(i[t].object), delete i[t];
						delete n[t.id];
					}
				},
				initAttributes: p,
				enableAttribute: f,
				disableUnusedAttributes: g,
			};
		}
		function fi(t, e, n, i) {
			const r = i.isWebGL2;
			let o;
			(this.setMode = function (t) {
				o = t;
			}),
				(this.render = function (e, i) {
					t.drawArrays(o, e, i), n.update(i, o, 1);
				}),
				(this.renderInstances = function (i, s, a) {
					if (0 === a) return;
					let c, l;
					if (r) (c = t), (l = "drawArraysInstanced");
					else if (
						((c = e.get("ANGLE_instanced_arrays")),
						(l = "drawArraysInstancedANGLE"),
						null === c)
					)
						return void console.error(
							"THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
						);
					c[l](o, i, s, a), n.update(s, o, a);
				});
		}
		function mi(t, e, n) {
			let i;
			function r(e) {
				if ("highp" === e) {
					if (
						t.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
						t.getShaderPrecisionFormat(35632, 36338).precision > 0
					)
						return "highp";
					e = "mediump";
				}
				return "mediump" === e &&
					t.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
					t.getShaderPrecisionFormat(35632, 36337).precision > 0
					? "mediump"
					: "lowp";
			}
			const o =
				("undefined" != typeof WebGL2RenderingContext &&
					t instanceof WebGL2RenderingContext) ||
				("undefined" != typeof WebGL2ComputeRenderingContext &&
					t instanceof WebGL2ComputeRenderingContext);
			let s = void 0 !== n.precision ? n.precision : "highp";
			const a = r(s);
			a !== s &&
				(console.warn(
					"THREE.WebGLRenderer:",
					s,
					"not supported, using",
					a,
					"instead."
				),
				(s = a));
			const c = !0 === n.logarithmicDepthBuffer,
				l = t.getParameter(34930),
				h = t.getParameter(35660),
				u = t.getParameter(3379),
				d = t.getParameter(34076),
				p = t.getParameter(34921),
				f = t.getParameter(36347),
				m = t.getParameter(36348),
				g = t.getParameter(36349),
				v = h > 0,
				y = o || !!e.get("OES_texture_float");
			return {
				isWebGL2: o,
				getMaxAnisotropy: function () {
					if (void 0 !== i) return i;
					const n = e.get("EXT_texture_filter_anisotropic");
					return (
						(i =
							null !== n
								? t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
								: 0),
						i
					);
				},
				getMaxPrecision: r,
				precision: s,
				logarithmicDepthBuffer: c,
				maxTextures: l,
				maxVertexTextures: h,
				maxTextureSize: u,
				maxCubemapSize: d,
				maxAttributes: p,
				maxVertexUniforms: f,
				maxVaryings: m,
				maxFragmentUniforms: g,
				vertexTextures: v,
				floatFragmentTextures: y,
				floatVertexTextures: v && y,
				maxSamples: o ? t.getParameter(36183) : 0,
			};
		}
		function gi() {
			const t = this;
			let e = null,
				n = 0,
				i = !1,
				r = !1;
			const o = new Le(),
				s = new mt(),
				a = { value: null, needsUpdate: !1 };
			function c() {
				a.value !== e && ((a.value = e), (a.needsUpdate = n > 0)),
					(t.numPlanes = n),
					(t.numIntersection = 0);
			}
			function l(e, n, i, r) {
				let c = null !== e ? e.length : 0,
					l = null;
				if (0 !== c) {
					if (((l = a.value), !0 !== r || null === l)) {
						const t = i + 4 * c,
							r = n.matrixWorldInverse;
						s.getNormalMatrix(r),
							(null === l || l.length < t) && (l = new Float32Array(t));
						for (let t = 0, n = i; t !== c; ++t, n += 4)
							o.copy(e[t]).applyMatrix4(r, s),
								o.normal.toArray(l, n),
								(l[n + 3] = o.constant);
					}
					(a.value = l), (a.needsUpdate = !0);
				}
				return (t.numPlanes = c), (t.numIntersection = 0), l;
			}
			(this.uniform = a),
				(this.numPlanes = 0),
				(this.numIntersection = 0),
				(this.init = function (t, r, o) {
					const s = 0 !== t.length || r || 0 !== n || i;
					return (i = r), (e = l(t, o, 0)), (n = t.length), s;
				}),
				(this.beginShadows = function () {
					(r = !0), l(null);
				}),
				(this.endShadows = function () {
					(r = !1), c();
				}),
				(this.setState = function (t, o, s, h, u, d) {
					if (!i || null === t || 0 === t.length || (r && !s))
						r ? l(null) : c();
					else {
						const i = r ? 0 : n,
							s = 4 * i;
						let c = u.clippingState || null;
						(a.value = c), (c = l(t, h, s, d));
						for (let t = 0; t !== s; ++t) c[t] = e[t];
						(u.clippingState = c),
							(this.numIntersection = o ? this.numPlanes : 0),
							(this.numPlanes += i);
					}
				});
		}
		function vi(t) {
			const e = {};
			return {
				has: function (n) {
					if (void 0 !== e[n]) return e[n];
					let i;
					switch (n) {
						case "WEBGL_depth_texture":
							i =
								t.getExtension("WEBGL_depth_texture") ||
								t.getExtension("MOZ_WEBGL_depth_texture") ||
								t.getExtension("WEBKIT_WEBGL_depth_texture");
							break;
						case "EXT_texture_filter_anisotropic":
							i =
								t.getExtension("EXT_texture_filter_anisotropic") ||
								t.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
								t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
							break;
						case "WEBGL_compressed_texture_s3tc":
							i =
								t.getExtension("WEBGL_compressed_texture_s3tc") ||
								t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
								t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
							break;
						case "WEBGL_compressed_texture_pvrtc":
							i =
								t.getExtension("WEBGL_compressed_texture_pvrtc") ||
								t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
							break;
						default:
							i = t.getExtension(n);
					}
					return (e[n] = i), !!i;
				},
				get: function (t) {
					return (
						this.has(t) ||
							console.warn(
								"THREE.WebGLRenderer: " + t + " extension not supported."
							),
						e[t]
					);
				},
			};
		}
		function yi(t, e, n, i) {
			const r = new WeakMap(),
				o = new WeakMap();
			function s(t) {
				const a = t.target,
					c = r.get(a);
				null !== c.index && e.remove(c.index);
				for (const t in c.attributes) e.remove(c.attributes[t]);
				a.removeEventListener("dispose", s), r.delete(a);
				const l = o.get(c);
				l && (e.remove(l), o.delete(c)),
					i.releaseStatesOfGeometry(a),
					!0 === a.isInstancedBufferGeometry && delete a._maxInstanceCount,
					n.memory.geometries--;
			}
			function a(t) {
				const n = [],
					i = t.index,
					r = t.attributes.position;
				let s = 0;
				if (null !== i) {
					const t = i.array;
					s = i.version;
					for (let e = 0, i = t.length; e < i; e += 3) {
						const i = t[e + 0],
							r = t[e + 1],
							o = t[e + 2];
						n.push(i, r, r, o, o, i);
					}
				} else {
					const t = r.array;
					s = r.version;
					for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
						const t = e + 0,
							i = e + 1,
							r = e + 2;
						n.push(t, i, i, r, r, t);
					}
				}
				const a = new (un(n) > 65535 ? an : on)(n, 1);
				a.version = s;
				const c = o.get(t);
				c && e.remove(c), o.set(t, a);
			}
			return {
				get: function (t, e) {
					let i = r.get(e);
					return (
						i ||
						(e.addEventListener("dispose", s),
						e.isBufferGeometry
							? (i = e)
							: e.isGeometry &&
							  (void 0 === e._bufferGeometry &&
									(e._bufferGeometry = new xn().setFromObject(t)),
							  (i = e._bufferGeometry)),
						r.set(e, i),
						n.memory.geometries++,
						i)
					);
				},
				update: function (t) {
					const n = t.attributes;
					for (const t in n) e.update(n[t], 34962);
					const i = t.morphAttributes;
					for (const t in i) {
						const n = i[t];
						for (let t = 0, i = n.length; t < i; t++) e.update(n[t], 34962);
					}
				},
				getWireframeAttribute: function (t) {
					const e = o.get(t);
					if (e) {
						const n = t.index;
						null !== n && e.version < n.version && a(t);
					} else a(t);
					return o.get(t);
				},
			};
		}
		function xi(t, e, n, i) {
			const r = i.isWebGL2;
			let o, s, a;
			(this.setMode = function (t) {
				o = t;
			}),
				(this.setIndex = function (t) {
					(s = t.type), (a = t.bytesPerElement);
				}),
				(this.render = function (e, i) {
					t.drawElements(o, i, s, e * a), n.update(i, o, 1);
				}),
				(this.renderInstances = function (i, c, l) {
					if (0 === l) return;
					let h, u;
					if (r) (h = t), (u = "drawElementsInstanced");
					else if (
						((h = e.get("ANGLE_instanced_arrays")),
						(u = "drawElementsInstancedANGLE"),
						null === h)
					)
						return void console.error(
							"THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
						);
					h[u](o, c, s, i * a, l), n.update(c, o, l);
				});
		}
		function bi(t) {
			const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
			return {
				memory: { geometries: 0, textures: 0 },
				render: e,
				programs: null,
				autoReset: !0,
				reset: function () {
					e.frame++,
						(e.calls = 0),
						(e.triangles = 0),
						(e.points = 0),
						(e.lines = 0);
				},
				update: function (t, n, i) {
					switch ((e.calls++, n)) {
						case 4:
							e.triangles += i * (t / 3);
							break;
						case 1:
							e.lines += i * (t / 2);
							break;
						case 3:
							e.lines += i * (t - 1);
							break;
						case 2:
							e.lines += i * t;
							break;
						case 0:
							e.points += i * t;
							break;
						default:
							console.error("THREE.WebGLInfo: Unknown draw mode:", n);
					}
				},
			};
		}
		function wi(t, e) {
			return t[0] - e[0];
		}
		function _i(t, e) {
			return Math.abs(e[1]) - Math.abs(t[1]);
		}
		function Mi(t) {
			const e = {},
				n = new Float32Array(8),
				i = [];
			for (let t = 0; t < 8; t++) i[t] = [t, 0];
			return {
				update: function (r, o, s, a) {
					const c = r.morphTargetInfluences,
						l = void 0 === c ? 0 : c.length;
					let h = e[o.id];
					if (void 0 === h) {
						h = [];
						for (let t = 0; t < l; t++) h[t] = [t, 0];
						e[o.id] = h;
					}
					for (let t = 0; t < l; t++) {
						const e = h[t];
						(e[0] = t), (e[1] = c[t]);
					}
					h.sort(_i);
					for (let t = 0; t < 8; t++)
						t < l && h[t][1]
							? ((i[t][0] = h[t][0]), (i[t][1] = h[t][1]))
							: ((i[t][0] = Number.MAX_SAFE_INTEGER), (i[t][1] = 0));
					i.sort(wi);
					const u = s.morphTargets && o.morphAttributes.position,
						d = s.morphNormals && o.morphAttributes.normal;
					let p = 0;
					for (let t = 0; t < 8; t++) {
						const e = i[t],
							r = e[0],
							s = e[1];
						r !== Number.MAX_SAFE_INTEGER && s
							? (u &&
									o.getAttribute("morphTarget" + t) !== u[r] &&
									o.setAttribute("morphTarget" + t, u[r]),
							  d &&
									o.getAttribute("morphNormal" + t) !== d[r] &&
									o.setAttribute("morphNormal" + t, d[r]),
							  (n[t] = s),
							  (p += s))
							: (u &&
									void 0 !== o.getAttribute("morphTarget" + t) &&
									o.deleteAttribute("morphTarget" + t),
							  d &&
									void 0 !== o.getAttribute("morphNormal" + t) &&
									o.deleteAttribute("morphNormal" + t),
							  (n[t] = 0));
					}
					const f = o.morphTargetsRelative ? 1 : 1 - p;
					a.getUniforms().setValue(t, "morphTargetBaseInfluence", f),
						a.getUniforms().setValue(t, "morphTargetInfluences", n);
				},
			};
		}
		function Si(t, e, n, i) {
			let r = new WeakMap();
			return {
				update: function (t) {
					const o = i.render.frame,
						s = t.geometry,
						a = e.get(t, s);
					return (
						r.get(a) !== o &&
							(s.isGeometry && a.updateFromObject(t), e.update(a), r.set(a, o)),
						t.isInstancedMesh && n.update(t.instanceMatrix, 34962),
						a
					);
				},
				dispose: function () {
					r = new WeakMap();
				},
			};
		}
		function Ti(t, e, n, i, r, o, s, a, c, l) {
			(t = void 0 !== t ? t : []),
				(e = void 0 !== e ? e : 301),
				(s = void 0 !== s ? s : 1022),
				xt.call(this, t, e, n, i, r, o, s, a, c, l),
				(this.flipY = !1);
		}
		function Ei(t, e, n, i) {
			xt.call(this, null),
				(this.image = {
					data: t || null,
					width: e || 1,
					height: n || 1,
					depth: i || 1,
				}),
				(this.magFilter = 1003),
				(this.minFilter = 1003),
				(this.wrapR = 1001),
				(this.generateMipmaps = !1),
				(this.flipY = !1),
				(this.needsUpdate = !0);
		}
		function Ai(t, e, n, i) {
			xt.call(this, null),
				(this.image = {
					data: t || null,
					width: e || 1,
					height: n || 1,
					depth: i || 1,
				}),
				(this.magFilter = 1003),
				(this.minFilter = 1003),
				(this.wrapR = 1001),
				(this.generateMipmaps = !1),
				(this.flipY = !1),
				(this.needsUpdate = !0);
		}
		(ui.physical = {
			uniforms: Yn([
				ui.standard.uniforms,
				{
					clearcoat: { value: 0 },
					clearcoatMap: { value: null },
					clearcoatRoughness: { value: 0 },
					clearcoatRoughnessMap: { value: null },
					clearcoatNormalScale: { value: new ft(1, 1) },
					clearcoatNormalMap: { value: null },
					sheen: { value: new je(0) },
					transmission: { value: 0 },
					transmissionMap: { value: null },
				},
			]),
			vertexShader: hi.meshphysical_vert,
			fragmentShader: hi.meshphysical_frag,
		}),
			(Ti.prototype = Object.create(xt.prototype)),
			(Ti.prototype.constructor = Ti),
			(Ti.prototype.isCubeTexture = !0),
			Object.defineProperty(Ti.prototype, "images", {
				get: function () {
					return this.image;
				},
				set: function (t) {
					this.image = t;
				},
			}),
			(Ei.prototype = Object.create(xt.prototype)),
			(Ei.prototype.constructor = Ei),
			(Ei.prototype.isDataTexture2DArray = !0),
			(Ai.prototype = Object.create(xt.prototype)),
			(Ai.prototype.constructor = Ai),
			(Ai.prototype.isDataTexture3D = !0);
		const Li = new xt(),
			Ri = new Ei(),
			Pi = new Ai(),
			Ci = new Ti(),
			Ii = [],
			Oi = [],
			Di = new Float32Array(16),
			Ni = new Float32Array(9),
			zi = new Float32Array(4);
		function Ui(t, e, n) {
			const i = t[0];
			if (i <= 0 || i > 0) return t;
			let r = e * n,
				o = Ii[r];
			if ((void 0 === o && ((o = new Float32Array(r)), (Ii[r] = o)), 0 !== e)) {
				i.toArray(o, 0);
				for (let i = 1, r = 0; i !== e; ++i) (r += n), t[i].toArray(o, r);
			}
			return o;
		}
		function Hi(t, e) {
			if (t.length !== e.length) return !1;
			for (let n = 0, i = t.length; n < i; n++) if (t[n] !== e[n]) return !1;
			return !0;
		}
		function Bi(t, e) {
			for (let n = 0, i = e.length; n < i; n++) t[n] = e[n];
		}
		function Fi(t, e) {
			let n = Oi[e];
			void 0 === n && ((n = new Int32Array(e)), (Oi[e] = n));
			for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
			return n;
		}
		function ki(t, e) {
			const n = this.cache;
			n[0] !== e && (t.uniform1f(this.addr, e), (n[0] = e));
		}
		function Gi(t, e) {
			const n = this.cache;
			if (void 0 !== e.x)
				(n[0] === e.x && n[1] === e.y) ||
					(t.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
			else {
				if (Hi(n, e)) return;
				t.uniform2fv(this.addr, e), Bi(n, e);
			}
		}
		function ji(t, e) {
			const n = this.cache;
			if (void 0 !== e.x)
				(n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
					(t.uniform3f(this.addr, e.x, e.y, e.z),
					(n[0] = e.x),
					(n[1] = e.y),
					(n[2] = e.z));
			else if (void 0 !== e.r)
				(n[0] === e.r && n[1] === e.g && n[2] === e.b) ||
					(t.uniform3f(this.addr, e.r, e.g, e.b),
					(n[0] = e.r),
					(n[1] = e.g),
					(n[2] = e.b));
			else {
				if (Hi(n, e)) return;
				t.uniform3fv(this.addr, e), Bi(n, e);
			}
		}
		function Vi(t, e) {
			const n = this.cache;
			if (void 0 !== e.x)
				(n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
					(t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
					(n[0] = e.x),
					(n[1] = e.y),
					(n[2] = e.z),
					(n[3] = e.w));
			else {
				if (Hi(n, e)) return;
				t.uniform4fv(this.addr, e), Bi(n, e);
			}
		}
		function Wi(t, e) {
			const n = this.cache,
				i = e.elements;
			if (void 0 === i) {
				if (Hi(n, e)) return;
				t.uniformMatrix2fv(this.addr, !1, e), Bi(n, e);
			} else {
				if (Hi(n, i)) return;
				zi.set(i), t.uniformMatrix2fv(this.addr, !1, zi), Bi(n, i);
			}
		}
		function qi(t, e) {
			const n = this.cache,
				i = e.elements;
			if (void 0 === i) {
				if (Hi(n, e)) return;
				t.uniformMatrix3fv(this.addr, !1, e), Bi(n, e);
			} else {
				if (Hi(n, i)) return;
				Ni.set(i), t.uniformMatrix3fv(this.addr, !1, Ni), Bi(n, i);
			}
		}
		function Xi(t, e) {
			const n = this.cache,
				i = e.elements;
			if (void 0 === i) {
				if (Hi(n, e)) return;
				t.uniformMatrix4fv(this.addr, !1, e), Bi(n, e);
			} else {
				if (Hi(n, i)) return;
				Di.set(i), t.uniformMatrix4fv(this.addr, !1, Di), Bi(n, i);
			}
		}
		function Yi(t, e, n) {
			const i = this.cache,
				r = n.allocateTextureUnit();
			i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
				n.safeSetTexture2D(e || Li, r);
		}
		function Zi(t, e, n) {
			const i = this.cache,
				r = n.allocateTextureUnit();
			i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
				n.setTexture2DArray(e || Ri, r);
		}
		function Ji(t, e, n) {
			const i = this.cache,
				r = n.allocateTextureUnit();
			i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
				n.setTexture3D(e || Pi, r);
		}
		function Ki(t, e, n) {
			const i = this.cache,
				r = n.allocateTextureUnit();
			i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
				n.safeSetTextureCube(e || Ci, r);
		}
		function Qi(t, e) {
			const n = this.cache;
			n[0] !== e && (t.uniform1i(this.addr, e), (n[0] = e));
		}
		function $i(t, e) {
			const n = this.cache;
			Hi(n, e) || (t.uniform2iv(this.addr, e), Bi(n, e));
		}
		function tr(t, e) {
			const n = this.cache;
			Hi(n, e) || (t.uniform3iv(this.addr, e), Bi(n, e));
		}
		function er(t, e) {
			const n = this.cache;
			Hi(n, e) || (t.uniform4iv(this.addr, e), Bi(n, e));
		}
		function nr(t, e) {
			const n = this.cache;
			n[0] !== e && (t.uniform1ui(this.addr, e), (n[0] = e));
		}
		function ir(t, e) {
			t.uniform1fv(this.addr, e);
		}
		function rr(t, e) {
			t.uniform1iv(this.addr, e);
		}
		function or(t, e) {
			t.uniform2iv(this.addr, e);
		}
		function sr(t, e) {
			t.uniform3iv(this.addr, e);
		}
		function ar(t, e) {
			t.uniform4iv(this.addr, e);
		}
		function cr(t, e) {
			const n = Ui(e, this.size, 2);
			t.uniform2fv(this.addr, n);
		}
		function lr(t, e) {
			const n = Ui(e, this.size, 3);
			t.uniform3fv(this.addr, n);
		}
		function hr(t, e) {
			const n = Ui(e, this.size, 4);
			t.uniform4fv(this.addr, n);
		}
		function ur(t, e) {
			const n = Ui(e, this.size, 4);
			t.uniformMatrix2fv(this.addr, !1, n);
		}
		function dr(t, e) {
			const n = Ui(e, this.size, 9);
			t.uniformMatrix3fv(this.addr, !1, n);
		}
		function pr(t, e) {
			const n = Ui(e, this.size, 16);
			t.uniformMatrix4fv(this.addr, !1, n);
		}
		function fr(t, e, n) {
			const i = e.length,
				r = Fi(n, i);
			t.uniform1iv(this.addr, r);
			for (let t = 0; t !== i; ++t) n.safeSetTexture2D(e[t] || Li, r[t]);
		}
		function mr(t, e, n) {
			const i = e.length,
				r = Fi(n, i);
			t.uniform1iv(this.addr, r);
			for (let t = 0; t !== i; ++t) n.safeSetTextureCube(e[t] || Ci, r[t]);
		}
		function gr(t, e, n) {
			(this.id = t),
				(this.addr = n),
				(this.cache = []),
				(this.setValue = (function (t) {
					switch (t) {
						case 5126:
							return ki;
						case 35664:
							return Gi;
						case 35665:
							return ji;
						case 35666:
							return Vi;
						case 35674:
							return Wi;
						case 35675:
							return qi;
						case 35676:
							return Xi;
						case 5124:
						case 35670:
							return Qi;
						case 35667:
						case 35671:
							return $i;
						case 35668:
						case 35672:
							return tr;
						case 35669:
						case 35673:
							return er;
						case 5125:
							return nr;
						case 35678:
						case 36198:
						case 36298:
						case 36306:
						case 35682:
							return Yi;
						case 35679:
						case 36299:
						case 36307:
							return Ji;
						case 35680:
						case 36300:
						case 36308:
						case 36293:
							return Ki;
						case 36289:
						case 36303:
						case 36311:
						case 36292:
							return Zi;
					}
				})(e.type));
		}
		function vr(t, e, n) {
			(this.id = t),
				(this.addr = n),
				(this.cache = []),
				(this.size = e.size),
				(this.setValue = (function (t) {
					switch (t) {
						case 5126:
							return ir;
						case 35664:
							return cr;
						case 35665:
							return lr;
						case 35666:
							return hr;
						case 35674:
							return ur;
						case 35675:
							return dr;
						case 35676:
							return pr;
						case 5124:
						case 35670:
							return rr;
						case 35667:
						case 35671:
							return or;
						case 35668:
						case 35672:
							return sr;
						case 35669:
						case 35673:
							return ar;
						case 35678:
						case 36198:
						case 36298:
						case 36306:
						case 35682:
							return fr;
						case 35680:
						case 36300:
						case 36308:
						case 36293:
							return mr;
					}
				})(e.type));
		}
		function yr(t) {
			(this.id = t), (this.seq = []), (this.map = {});
		}
		(vr.prototype.updateCache = function (t) {
			let e = this.cache;
			t instanceof Float32Array &&
				e.length !== t.length &&
				(this.cache = new Float32Array(t.length)),
				Bi(e, t);
		}),
			(yr.prototype.setValue = function (t, e, n) {
				const i = this.seq;
				for (let r = 0, o = i.length; r !== o; ++r) {
					const o = i[r];
					o.setValue(t, e[o.id], n);
				}
			});
		const xr = /([\w\d_]+)(\])?(\[|\.)?/g;
		function br(t, e) {
			t.seq.push(e), (t.map[e.id] = e);
		}
		function wr(t, e, n) {
			const i = t.name,
				r = i.length;
			for (xr.lastIndex = 0; ; ) {
				const o = xr.exec(i),
					s = xr.lastIndex;
				let a = o[1],
					c = "]" === o[2],
					l = o[3];
				if ((c && (a |= 0), void 0 === l || ("[" === l && s + 2 === r))) {
					br(n, void 0 === l ? new gr(a, t, e) : new vr(a, t, e));
					break;
				}
				{
					let t = n.map[a];
					void 0 === t && ((t = new yr(a)), br(n, t)), (n = t);
				}
			}
		}
		function _r(t, e) {
			(this.seq = []), (this.map = {});
			const n = t.getProgramParameter(e, 35718);
			for (let i = 0; i < n; ++i) {
				const n = t.getActiveUniform(e, i);
				wr(n, t.getUniformLocation(e, n.name), this);
			}
		}
		function Mr(t, e, n) {
			const i = t.createShader(e);
			return t.shaderSource(i, n), t.compileShader(i), i;
		}
		(_r.prototype.setValue = function (t, e, n, i) {
			const r = this.map[e];
			void 0 !== r && r.setValue(t, n, i);
		}),
			(_r.prototype.setOptional = function (t, e, n) {
				const i = e[n];
				void 0 !== i && this.setValue(t, n, i);
			}),
			(_r.upload = function (t, e, n, i) {
				for (let r = 0, o = e.length; r !== o; ++r) {
					const o = e[r],
						s = n[o.id];
					!1 !== s.needsUpdate && o.setValue(t, s.value, i);
				}
			}),
			(_r.seqWithValue = function (t, e) {
				const n = [];
				for (let i = 0, r = t.length; i !== r; ++i) {
					const r = t[i];
					r.id in e && n.push(r);
				}
				return n;
			});
		let Sr = 0;
		function Tr(t) {
			switch (t) {
				case 3e3:
					return ["Linear", "( value )"];
				case 3001:
					return ["sRGB", "( value )"];
				case 3002:
					return ["RGBE", "( value )"];
				case 3004:
					return ["RGBM", "( value, 7.0 )"];
				case 3005:
					return ["RGBM", "( value, 16.0 )"];
				case 3006:
					return ["RGBD", "( value, 256.0 )"];
				case 3007:
					return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
				case 3003:
					return ["LogLuv", "( value )"];
				default:
					return (
						console.warn("THREE.WebGLProgram: Unsupported encoding:", t),
						["Linear", "( value )"]
					);
			}
		}
		function Er(t, e, n) {
			const i = t.getShaderParameter(e, 35713),
				r = t.getShaderInfoLog(e).trim();
			if (i && "" === r) return "";
			return (
				"THREE.WebGLShader: gl.getShaderInfoLog() " +
				n +
				"\n" +
				r +
				(function (t) {
					const e = t.split("\n");
					for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
					return e.join("\n");
				})(t.getShaderSource(e))
			);
		}
		function Ar(t, e) {
			const n = Tr(e);
			return (
				"vec4 " +
				t +
				"( vec4 value ) { return " +
				n[0] +
				"ToLinear" +
				n[1] +
				"; }"
			);
		}
		function Lr(t, e) {
			const n = Tr(e);
			return (
				"vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
			);
		}
		function Rr(t, e) {
			let n;
			switch (e) {
				case 1:
					n = "Linear";
					break;
				case 2:
					n = "Reinhard";
					break;
				case 3:
					n = "OptimizedCineon";
					break;
				case 4:
					n = "ACESFilmic";
					break;
				case 5:
					n = "Custom";
					break;
				default:
					console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
						(n = "Linear");
			}
			return (
				"vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
			);
		}
		function Pr(t) {
			return "" !== t;
		}
		function Cr(t, e) {
			return t
				.replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
				.replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
				.replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
				.replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
				.replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
				.replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
				.replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
				.replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
		}
		function Ir(t, e) {
			return t
				.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
				.replace(
					/UNION_CLIPPING_PLANES/g,
					e.numClippingPlanes - e.numClipIntersection
				);
		}
		const Or = /^[ \t]*#include +<([\w\d./]+)>/gm;
		function Dr(t) {
			return t.replace(Or, Nr);
		}
		function Nr(t, e) {
			const n = hi[e];
			if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
			return Dr(n);
		}
		const zr =
				/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
			Ur =
				/#pragma unroll_loop_start[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}[\s]+?#pragma unroll_loop_end/g;
		function Hr(t) {
			return t.replace(Ur, Fr).replace(zr, Br);
		}
		function Br(t, e, n, i) {
			return (
				console.warn(
					"WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."
				),
				Fr(t, e, n, i)
			);
		}
		function Fr(t, e, n, i) {
			let r = "";
			for (let t = parseInt(e); t < parseInt(n); t++)
				r += i
					.replace(/\[ i \]/g, "[ " + t + " ]")
					.replace(/UNROLLED_LOOP_INDEX/g, t);
			return r;
		}
		function kr(t) {
			let e =
				"precision " +
				t.precision +
				" float;\nprecision " +
				t.precision +
				" int;";
			return (
				"highp" === t.precision
					? (e += "\n#define HIGH_PRECISION")
					: "mediump" === t.precision
					? (e += "\n#define MEDIUM_PRECISION")
					: "lowp" === t.precision && (e += "\n#define LOW_PRECISION"),
				e
			);
		}
		function Gr(t, e, n, i) {
			const r = t.getContext(),
				o = n.defines;
			let s = n.vertexShader,
				a = n.fragmentShader;
			const c = (function (t) {
					let e = "SHADOWMAP_TYPE_BASIC";
					return (
						1 === t.shadowMapType
							? (e = "SHADOWMAP_TYPE_PCF")
							: 2 === t.shadowMapType
							? (e = "SHADOWMAP_TYPE_PCF_SOFT")
							: 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"),
						e
					);
				})(n),
				l = (function (t) {
					let e = "ENVMAP_TYPE_CUBE";
					if (t.envMap)
						switch (t.envMapMode) {
							case 301:
							case 302:
								e = "ENVMAP_TYPE_CUBE";
								break;
							case 306:
							case 307:
								e = "ENVMAP_TYPE_CUBE_UV";
								break;
							case 303:
							case 304:
								e = "ENVMAP_TYPE_EQUIREC";
						}
					return e;
				})(n),
				h = (function (t) {
					let e = "ENVMAP_MODE_REFLECTION";
					if (t.envMap)
						switch (t.envMapMode) {
							case 302:
							case 304:
							case 307:
								e = "ENVMAP_MODE_REFRACTION";
						}
					return e;
				})(n),
				u = (function (t) {
					let e = "ENVMAP_BLENDING_NONE";
					if (t.envMap)
						switch (t.combine) {
							case 0:
								e = "ENVMAP_BLENDING_MULTIPLY";
								break;
							case 1:
								e = "ENVMAP_BLENDING_MIX";
								break;
							case 2:
								e = "ENVMAP_BLENDING_ADD";
						}
					return e;
				})(n),
				d = t.gammaFactor > 0 ? t.gammaFactor : 1,
				p = n.isWebGL2
					? ""
					: (function (t) {
							return [
								t.extensionDerivatives ||
								t.envMapCubeUV ||
								t.bumpMap ||
								t.tangentSpaceNormalMap ||
								t.clearcoatNormalMap ||
								t.flatShading ||
								"physical" === t.shaderID
									? "#extension GL_OES_standard_derivatives : enable"
									: "",
								(t.extensionFragDepth || t.logarithmicDepthBuffer) &&
								t.rendererExtensionFragDepth
									? "#extension GL_EXT_frag_depth : enable"
									: "",
								t.extensionDrawBuffers && t.rendererExtensionDrawBuffers
									? "#extension GL_EXT_draw_buffers : require"
									: "",
								(t.extensionShaderTextureLOD || t.envMap) &&
								t.rendererExtensionShaderTextureLod
									? "#extension GL_EXT_shader_texture_lod : enable"
									: "",
							]
								.filter(Pr)
								.join("\n");
					  })(n),
				f = (function (t) {
					const e = [];
					for (const n in t) {
						const i = t[n];
						!1 !== i && e.push("#define " + n + " " + i);
					}
					return e.join("\n");
				})(o),
				m = r.createProgram();
			let g, v;
			n.isRawShaderMaterial
				? ((g = [f].filter(Pr).join("\n")),
				  g.length > 0 && (g += "\n"),
				  (v = [p, f].filter(Pr).join("\n")),
				  v.length > 0 && (v += "\n"))
				: ((g = [
						kr(n),
						"#define SHADER_NAME " + n.shaderName,
						f,
						n.instancing ? "#define USE_INSTANCING" : "",
						n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
						"#define GAMMA_FACTOR " + d,
						"#define MAX_BONES " + n.maxBones,
						n.useFog && n.fog ? "#define USE_FOG" : "",
						n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
						n.map ? "#define USE_MAP" : "",
						n.envMap ? "#define USE_ENVMAP" : "",
						n.envMap ? "#define " + h : "",
						n.lightMap ? "#define USE_LIGHTMAP" : "",
						n.aoMap ? "#define USE_AOMAP" : "",
						n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
						n.bumpMap ? "#define USE_BUMPMAP" : "",
						n.normalMap ? "#define USE_NORMALMAP" : "",
						n.normalMap && n.objectSpaceNormalMap
							? "#define OBJECTSPACE_NORMALMAP"
							: "",
						n.normalMap && n.tangentSpaceNormalMap
							? "#define TANGENTSPACE_NORMALMAP"
							: "",
						n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
						n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
						n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
						n.displacementMap && n.supportsVertexTextures
							? "#define USE_DISPLACEMENTMAP"
							: "",
						n.specularMap ? "#define USE_SPECULARMAP" : "",
						n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
						n.metalnessMap ? "#define USE_METALNESSMAP" : "",
						n.alphaMap ? "#define USE_ALPHAMAP" : "",
						n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
						n.vertexTangents ? "#define USE_TANGENT" : "",
						n.vertexColors ? "#define USE_COLOR" : "",
						n.vertexUvs ? "#define USE_UV" : "",
						n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
						n.flatShading ? "#define FLAT_SHADED" : "",
						n.skinning ? "#define USE_SKINNING" : "",
						n.useVertexTexture ? "#define BONE_TEXTURE" : "",
						n.morphTargets ? "#define USE_MORPHTARGETS" : "",
						n.morphNormals && !1 === n.flatShading
							? "#define USE_MORPHNORMALS"
							: "",
						n.doubleSided ? "#define DOUBLE_SIDED" : "",
						n.flipSided ? "#define FLIP_SIDED" : "",
						n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
						n.shadowMapEnabled ? "#define " + c : "",
						n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
						n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
						n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
							? "#define USE_LOGDEPTHBUF_EXT"
							: "",
						"uniform mat4 modelMatrix;",
						"uniform mat4 modelViewMatrix;",
						"uniform mat4 projectionMatrix;",
						"uniform mat4 viewMatrix;",
						"uniform mat3 normalMatrix;",
						"uniform vec3 cameraPosition;",
						"uniform bool isOrthographic;",
						"#ifdef USE_INSTANCING",
						" attribute mat4 instanceMatrix;",
						"#endif",
						"attribute vec3 position;",
						"attribute vec3 normal;",
						"attribute vec2 uv;",
						"#ifdef USE_TANGENT",
						"\tattribute vec4 tangent;",
						"#endif",
						"#ifdef USE_COLOR",
						"\tattribute vec3 color;",
						"#endif",
						"#ifdef USE_MORPHTARGETS",
						"\tattribute vec3 morphTarget0;",
						"\tattribute vec3 morphTarget1;",
						"\tattribute vec3 morphTarget2;",
						"\tattribute vec3 morphTarget3;",
						"\t#ifdef USE_MORPHNORMALS",
						"\t\tattribute vec3 morphNormal0;",
						"\t\tattribute vec3 morphNormal1;",
						"\t\tattribute vec3 morphNormal2;",
						"\t\tattribute vec3 morphNormal3;",
						"\t#else",
						"\t\tattribute vec3 morphTarget4;",
						"\t\tattribute vec3 morphTarget5;",
						"\t\tattribute vec3 morphTarget6;",
						"\t\tattribute vec3 morphTarget7;",
						"\t#endif",
						"#endif",
						"#ifdef USE_SKINNING",
						"\tattribute vec4 skinIndex;",
						"\tattribute vec4 skinWeight;",
						"#endif",
						"\n",
				  ]
						.filter(Pr)
						.join("\n")),
				  (v = [
						p,
						kr(n),
						"#define SHADER_NAME " + n.shaderName,
						f,
						n.alphaTest
							? "#define ALPHATEST " +
							  n.alphaTest +
							  (n.alphaTest % 1 ? "" : ".0")
							: "",
						"#define GAMMA_FACTOR " + d,
						n.useFog && n.fog ? "#define USE_FOG" : "",
						n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
						n.map ? "#define USE_MAP" : "",
						n.matcap ? "#define USE_MATCAP" : "",
						n.envMap ? "#define USE_ENVMAP" : "",
						n.envMap ? "#define " + l : "",
						n.envMap ? "#define " + h : "",
						n.envMap ? "#define " + u : "",
						n.lightMap ? "#define USE_LIGHTMAP" : "",
						n.aoMap ? "#define USE_AOMAP" : "",
						n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
						n.bumpMap ? "#define USE_BUMPMAP" : "",
						n.normalMap ? "#define USE_NORMALMAP" : "",
						n.normalMap && n.objectSpaceNormalMap
							? "#define OBJECTSPACE_NORMALMAP"
							: "",
						n.normalMap && n.tangentSpaceNormalMap
							? "#define TANGENTSPACE_NORMALMAP"
							: "",
						n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
						n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
						n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
						n.specularMap ? "#define USE_SPECULARMAP" : "",
						n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
						n.metalnessMap ? "#define USE_METALNESSMAP" : "",
						n.alphaMap ? "#define USE_ALPHAMAP" : "",
						n.sheen ? "#define USE_SHEEN" : "",
						n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
						n.vertexTangents ? "#define USE_TANGENT" : "",
						n.vertexColors ? "#define USE_COLOR" : "",
						n.vertexUvs ? "#define USE_UV" : "",
						n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
						n.gradientMap ? "#define USE_GRADIENTMAP" : "",
						n.flatShading ? "#define FLAT_SHADED" : "",
						n.doubleSided ? "#define DOUBLE_SIDED" : "",
						n.flipSided ? "#define FLIP_SIDED" : "",
						n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
						n.shadowMapEnabled ? "#define " + c : "",
						n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
						n.physicallyCorrectLights
							? "#define PHYSICALLY_CORRECT_LIGHTS"
							: "",
						n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
						n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
							? "#define USE_LOGDEPTHBUF_EXT"
							: "",
						(n.extensionShaderTextureLOD || n.envMap) &&
						n.rendererExtensionShaderTextureLod
							? "#define TEXTURE_LOD_EXT"
							: "",
						"uniform mat4 viewMatrix;",
						"uniform vec3 cameraPosition;",
						"uniform bool isOrthographic;",
						0 !== n.toneMapping ? "#define TONE_MAPPING" : "",
						0 !== n.toneMapping ? hi.tonemapping_pars_fragment : "",
						0 !== n.toneMapping ? Rr("toneMapping", n.toneMapping) : "",
						n.dithering ? "#define DITHERING" : "",
						hi.encodings_pars_fragment,
						n.map ? Ar("mapTexelToLinear", n.mapEncoding) : "",
						n.matcap ? Ar("matcapTexelToLinear", n.matcapEncoding) : "",
						n.envMap ? Ar("envMapTexelToLinear", n.envMapEncoding) : "",
						n.emissiveMap
							? Ar("emissiveMapTexelToLinear", n.emissiveMapEncoding)
							: "",
						n.lightMap ? Ar("lightMapTexelToLinear", n.lightMapEncoding) : "",
						Lr("linearToOutputTexel", n.outputEncoding),
						n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
						"\n",
				  ]
						.filter(Pr)
						.join("\n"))),
				(s = Dr(s)),
				(s = Cr(s, n)),
				(s = Ir(s, n)),
				(a = Dr(a)),
				(a = Cr(a, n)),
				(a = Ir(a, n)),
				(s = Hr(s)),
				(a = Hr(a)),
				n.isWebGL2 &&
					!n.isRawShaderMaterial &&
					((g =
						[
							"#version 300 es\n",
							"#define attribute in",
							"#define varying out",
							"#define texture2D texture",
						].join("\n") +
						"\n" +
						g),
					(v =
						[
							"#version 300 es\n",
							"#define varying in",
							"out highp vec4 pc_fragColor;",
							"#define gl_FragColor pc_fragColor",
							"#define gl_FragDepthEXT gl_FragDepth",
							"#define texture2D texture",
							"#define textureCube texture",
							"#define texture2DProj textureProj",
							"#define texture2DLodEXT textureLod",
							"#define texture2DProjLodEXT textureProjLod",
							"#define textureCubeLodEXT textureLod",
							"#define texture2DGradEXT textureGrad",
							"#define texture2DProjGradEXT textureProjGrad",
							"#define textureCubeGradEXT textureGrad",
						].join("\n") +
						"\n" +
						v));
			const y = v + a,
				x = Mr(r, 35633, g + s),
				b = Mr(r, 35632, y);
			if (
				(r.attachShader(m, x),
				r.attachShader(m, b),
				void 0 !== n.index0AttributeName
					? r.bindAttribLocation(m, 0, n.index0AttributeName)
					: !0 === n.morphTargets && r.bindAttribLocation(m, 0, "position"),
				r.linkProgram(m),
				t.debug.checkShaderErrors)
			) {
				const t = r.getProgramInfoLog(m).trim(),
					e = r.getShaderInfoLog(x).trim(),
					n = r.getShaderInfoLog(b).trim();
				let i = !0,
					o = !0;
				if (!1 === r.getProgramParameter(m, 35714)) {
					i = !1;
					const e = Er(r, x, "vertex"),
						n = Er(r, b, "fragment");
					console.error(
						"THREE.WebGLProgram: shader error: ",
						r.getError(),
						"35715",
						r.getProgramParameter(m, 35715),
						"gl.getProgramInfoLog",
						t,
						e,
						n
					);
				} else
					"" !== t
						? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", t)
						: ("" !== e && "" !== n) || (o = !1);
				o &&
					(this.diagnostics = {
						runnable: i,
						programLog: t,
						vertexShader: { log: e, prefix: g },
						fragmentShader: { log: n, prefix: v },
					});
			}
			let w, _;
			return (
				r.deleteShader(x),
				r.deleteShader(b),
				(this.getUniforms = function () {
					return void 0 === w && (w = new _r(r, m)), w;
				}),
				(this.getAttributes = function () {
					return (
						void 0 === _ &&
							(_ = (function (t, e) {
								const n = {},
									i = t.getProgramParameter(e, 35721);
								for (let r = 0; r < i; r++) {
									const i = t.getActiveAttrib(e, r).name;
									n[i] = t.getAttribLocation(e, i);
								}
								return n;
							})(r, m)),
						_
					);
				}),
				(this.destroy = function () {
					i.releaseStatesOfProgram(this),
						r.deleteProgram(m),
						(this.program = void 0);
				}),
				(this.name = n.shaderName),
				(this.id = Sr++),
				(this.cacheKey = e),
				(this.usedTimes = 1),
				(this.program = m),
				(this.vertexShader = x),
				(this.fragmentShader = b),
				this
			);
		}
		function jr(t, e, n, i) {
			const r = [],
				o = n.isWebGL2,
				s = n.logarithmicDepthBuffer,
				a = n.floatVertexTextures,
				c = n.maxVertexUniforms,
				l = n.vertexTextures;
			let h = n.precision;
			const u = {
					MeshDepthMaterial: "depth",
					MeshDistanceMaterial: "distanceRGBA",
					MeshNormalMaterial: "normal",
					MeshBasicMaterial: "basic",
					MeshLambertMaterial: "lambert",
					MeshPhongMaterial: "phong",
					MeshToonMaterial: "toon",
					MeshStandardMaterial: "physical",
					MeshPhysicalMaterial: "physical",
					MeshMatcapMaterial: "matcap",
					LineBasicMaterial: "basic",
					LineDashedMaterial: "dashed",
					PointsMaterial: "points",
					ShadowMaterial: "shadow",
					SpriteMaterial: "sprite",
				},
				d = [
					"precision",
					"isWebGL2",
					"supportsVertexTextures",
					"outputEncoding",
					"instancing",
					"map",
					"mapEncoding",
					"matcap",
					"matcapEncoding",
					"envMap",
					"envMapMode",
					"envMapEncoding",
					"envMapCubeUV",
					"lightMap",
					"lightMapEncoding",
					"aoMap",
					"emissiveMap",
					"emissiveMapEncoding",
					"bumpMap",
					"normalMap",
					"objectSpaceNormalMap",
					"tangentSpaceNormalMap",
					"clearcoatMap",
					"clearcoatRoughnessMap",
					"clearcoatNormalMap",
					"displacementMap",
					"specularMap",
					"roughnessMap",
					"metalnessMap",
					"gradientMap",
					"alphaMap",
					"combine",
					"vertexColors",
					"vertexTangents",
					"vertexUvs",
					"uvsVertexOnly",
					"fog",
					"useFog",
					"fogExp2",
					"flatShading",
					"sizeAttenuation",
					"logarithmicDepthBuffer",
					"skinning",
					"maxBones",
					"useVertexTexture",
					"morphTargets",
					"morphNormals",
					"maxMorphTargets",
					"maxMorphNormals",
					"premultipliedAlpha",
					"numDirLights",
					"numPointLights",
					"numSpotLights",
					"numHemiLights",
					"numRectAreaLights",
					"numDirLightShadows",
					"numPointLightShadows",
					"numSpotLightShadows",
					"shadowMapEnabled",
					"shadowMapType",
					"toneMapping",
					"physicallyCorrectLights",
					"alphaTest",
					"doubleSided",
					"flipSided",
					"numClippingPlanes",
					"numClipIntersection",
					"depthPacking",
					"dithering",
					"sheen",
					"transmissionMap",
				];
			function p(t) {
				let e;
				return (
					t
						? t.isTexture
							? (e = t.encoding)
							: t.isWebGLRenderTarget &&
							  (console.warn(
									"THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."
							  ),
							  (e = t.texture.encoding))
						: (e = 3e3),
					e
				);
			}
			return {
				getParameters: function (i, r, d, f, m, g, v) {
					const y = f.fog,
						x = i.isMeshStandardMaterial ? f.environment : null,
						b = i.envMap || x,
						w = u[i.type],
						_ = v.isSkinnedMesh
							? (function (t) {
									const e = t.skeleton.bones;
									if (a) return 1024;
									{
										const t = c,
											n = Math.floor((t - 20) / 4),
											i = Math.min(n, e.length);
										return i < e.length
											? (console.warn(
													"THREE.WebGLRenderer: Skeleton has " +
														e.length +
														" bones. This GPU supports " +
														i +
														"."
											  ),
											  0)
											: i;
									}
							  })(v)
							: 0;
					let M, S;
					if (
						(null !== i.precision &&
							((h = n.getMaxPrecision(i.precision)),
							h !== i.precision &&
								console.warn(
									"THREE.WebGLProgram.getParameters:",
									i.precision,
									"not supported, using",
									h,
									"instead."
								)),
						w)
					) {
						const t = ui[w];
						(M = t.vertexShader), (S = t.fragmentShader);
					} else (M = i.vertexShader), (S = i.fragmentShader);
					const T = t.getRenderTarget();
					return {
						isWebGL2: o,
						shaderID: w,
						shaderName: i.type,
						vertexShader: M,
						fragmentShader: S,
						defines: i.defines,
						isRawShaderMaterial: i.isRawShaderMaterial,
						isShaderMaterial: i.isShaderMaterial,
						precision: h,
						instancing: !0 === v.isInstancedMesh,
						supportsVertexTextures: l,
						outputEncoding: null !== T ? p(T.texture) : t.outputEncoding,
						map: !!i.map,
						mapEncoding: p(i.map),
						matcap: !!i.matcap,
						matcapEncoding: p(i.matcap),
						envMap: !!b,
						envMapMode: b && b.mapping,
						envMapEncoding: p(b),
						envMapCubeUV: !!b && (306 === b.mapping || 307 === b.mapping),
						lightMap: !!i.lightMap,
						lightMapEncoding: p(i.lightMap),
						aoMap: !!i.aoMap,
						emissiveMap: !!i.emissiveMap,
						emissiveMapEncoding: p(i.emissiveMap),
						bumpMap: !!i.bumpMap,
						normalMap: !!i.normalMap,
						objectSpaceNormalMap: 1 === i.normalMapType,
						tangentSpaceNormalMap: 0 === i.normalMapType,
						clearcoatMap: !!i.clearcoatMap,
						clearcoatRoughnessMap: !!i.clearcoatRoughnessMap,
						clearcoatNormalMap: !!i.clearcoatNormalMap,
						displacementMap: !!i.displacementMap,
						roughnessMap: !!i.roughnessMap,
						metalnessMap: !!i.metalnessMap,
						specularMap: !!i.specularMap,
						alphaMap: !!i.alphaMap,
						gradientMap: !!i.gradientMap,
						sheen: !!i.sheen,
						transmissionMap: !!i.transmissionMap,
						combine: i.combine,
						vertexTangents: i.normalMap && i.vertexTangents,
						vertexColors: i.vertexColors,
						vertexUvs: !!(
							i.map ||
							i.bumpMap ||
							i.normalMap ||
							i.specularMap ||
							i.alphaMap ||
							i.emissiveMap ||
							i.roughnessMap ||
							i.metalnessMap ||
							i.clearcoatMap ||
							i.clearcoatRoughnessMap ||
							i.clearcoatNormalMap ||
							i.displacementMap ||
							i.transmissionMap
						),
						uvsVertexOnly: !(
							i.map ||
							i.bumpMap ||
							i.normalMap ||
							i.specularMap ||
							i.alphaMap ||
							i.emissiveMap ||
							i.roughnessMap ||
							i.metalnessMap ||
							i.clearcoatNormalMap ||
							i.transmissionMap ||
							!i.displacementMap
						),
						fog: !!y,
						useFog: i.fog,
						fogExp2: y && y.isFogExp2,
						flatShading: i.flatShading,
						sizeAttenuation: i.sizeAttenuation,
						logarithmicDepthBuffer: s,
						skinning: i.skinning && _ > 0,
						maxBones: _,
						useVertexTexture: a,
						morphTargets: i.morphTargets,
						morphNormals: i.morphNormals,
						maxMorphTargets: t.maxMorphTargets,
						maxMorphNormals: t.maxMorphNormals,
						numDirLights: r.directional.length,
						numPointLights: r.point.length,
						numSpotLights: r.spot.length,
						numRectAreaLights: r.rectArea.length,
						numHemiLights: r.hemi.length,
						numDirLightShadows: r.directionalShadowMap.length,
						numPointLightShadows: r.pointShadowMap.length,
						numSpotLightShadows: r.spotShadowMap.length,
						numClippingPlanes: m,
						numClipIntersection: g,
						dithering: i.dithering,
						shadowMapEnabled: t.shadowMap.enabled && d.length > 0,
						shadowMapType: t.shadowMap.type,
						toneMapping: i.toneMapped ? t.toneMapping : 0,
						physicallyCorrectLights: t.physicallyCorrectLights,
						premultipliedAlpha: i.premultipliedAlpha,
						alphaTest: i.alphaTest,
						doubleSided: 2 === i.side,
						flipSided: 1 === i.side,
						depthPacking: void 0 !== i.depthPacking && i.depthPacking,
						index0AttributeName: i.index0AttributeName,
						extensionDerivatives: i.extensions && i.extensions.derivatives,
						extensionFragDepth: i.extensions && i.extensions.fragDepth,
						extensionDrawBuffers: i.extensions && i.extensions.drawBuffers,
						extensionShaderTextureLOD:
							i.extensions && i.extensions.shaderTextureLOD,
						rendererExtensionFragDepth: o || null !== e.get("EXT_frag_depth"),
						rendererExtensionDrawBuffers:
							o || null !== e.get("WEBGL_draw_buffers"),
						rendererExtensionShaderTextureLod:
							o || null !== e.get("EXT_shader_texture_lod"),
						customProgramCacheKey: i.customProgramCacheKey(),
					};
				},
				getProgramCacheKey: function (e) {
					const n = [];
					if (
						(e.shaderID
							? n.push(e.shaderID)
							: (n.push(e.fragmentShader), n.push(e.vertexShader)),
						void 0 !== e.defines)
					)
						for (const t in e.defines) n.push(t), n.push(e.defines[t]);
					if (void 0 === e.isRawShaderMaterial) {
						for (let t = 0; t < d.length; t++) n.push(e[d[t]]);
						n.push(t.outputEncoding), n.push(t.gammaFactor);
					}
					return n.push(e.customProgramCacheKey), n.join();
				},
				getUniforms: function (t) {
					const e = u[t.type];
					let n;
					if (e) {
						const t = ui[e];
						n = Zn.clone(t.uniforms);
					} else n = t.uniforms;
					return n;
				},
				acquireProgram: function (e, n) {
					let o;
					for (let t = 0, e = r.length; t < e; t++) {
						const e = r[t];
						if (e.cacheKey === n) {
							(o = e), ++o.usedTimes;
							break;
						}
					}
					return void 0 === o && ((o = new Gr(t, n, e, i)), r.push(o)), o;
				},
				releaseProgram: function (t) {
					if (0 == --t.usedTimes) {
						const e = r.indexOf(t);
						(r[e] = r[r.length - 1]), r.pop(), t.destroy();
					}
				},
				programs: r,
			};
		}
		function Vr() {
			let t = new WeakMap();
			return {
				get: function (e) {
					let n = t.get(e);
					return void 0 === n && ((n = {}), t.set(e, n)), n;
				},
				remove: function (e) {
					t.delete(e);
				},
				update: function (e, n, i) {
					t.get(e)[n] = i;
				},
				dispose: function () {
					t = new WeakMap();
				},
			};
		}
		function Wr(t, e) {
			return t.groupOrder !== e.groupOrder
				? t.groupOrder - e.groupOrder
				: t.renderOrder !== e.renderOrder
				? t.renderOrder - e.renderOrder
				: t.program !== e.program
				? t.program.id - e.program.id
				: t.material.id !== e.material.id
				? t.material.id - e.material.id
				: t.z !== e.z
				? t.z - e.z
				: t.id - e.id;
		}
		function qr(t, e) {
			return t.groupOrder !== e.groupOrder
				? t.groupOrder - e.groupOrder
				: t.renderOrder !== e.renderOrder
				? t.renderOrder - e.renderOrder
				: t.z !== e.z
				? e.z - t.z
				: t.id - e.id;
		}
		function Xr(t) {
			const e = [];
			let n = 0;
			const i = [],
				r = [],
				o = { id: -1 };
			function s(i, r, s, a, c, l) {
				let h = e[n];
				const u = t.get(s);
				return (
					void 0 === h
						? ((h = {
								id: i.id,
								object: i,
								geometry: r,
								material: s,
								program: u.program || o,
								groupOrder: a,
								renderOrder: i.renderOrder,
								z: c,
								group: l,
						  }),
						  (e[n] = h))
						: ((h.id = i.id),
						  (h.object = i),
						  (h.geometry = r),
						  (h.material = s),
						  (h.program = u.program || o),
						  (h.groupOrder = a),
						  (h.renderOrder = i.renderOrder),
						  (h.z = c),
						  (h.group = l)),
					n++,
					h
				);
			}
			return {
				opaque: i,
				transparent: r,
				init: function () {
					(n = 0), (i.length = 0), (r.length = 0);
				},
				push: function (t, e, n, o, a, c) {
					const l = s(t, e, n, o, a, c);
					(!0 === n.transparent ? r : i).push(l);
				},
				unshift: function (t, e, n, o, a, c) {
					const l = s(t, e, n, o, a, c);
					(!0 === n.transparent ? r : i).unshift(l);
				},
				finish: function () {
					for (let t = n, i = e.length; t < i; t++) {
						const n = e[t];
						if (null === n.id) break;
						(n.id = null),
							(n.object = null),
							(n.geometry = null),
							(n.material = null),
							(n.program = null),
							(n.group = null);
					}
				},
				sort: function (t, e) {
					i.length > 1 && i.sort(t || Wr), r.length > 1 && r.sort(e || qr);
				},
			};
		}
		function Yr(t) {
			let e = new WeakMap();
			function n(t) {
				const i = t.target;
				i.removeEventListener("dispose", n), e.delete(i);
			}
			return {
				get: function (i, r) {
					const o = e.get(i);
					let s;
					return (
						void 0 === o
							? ((s = new Xr(t)),
							  e.set(i, new WeakMap()),
							  e.get(i).set(r, s),
							  i.addEventListener("dispose", n))
							: ((s = o.get(r)),
							  void 0 === s && ((s = new Xr(t)), o.set(r, s))),
						s
					);
				},
				dispose: function () {
					e = new WeakMap();
				},
			};
		}
		function Zr() {
			const t = {};
			return {
				get: function (e) {
					if (void 0 !== t[e.id]) return t[e.id];
					let n;
					switch (e.type) {
						case "DirectionalLight":
							n = { direction: new Et(), color: new je() };
							break;
						case "SpotLight":
							n = {
								position: new Et(),
								direction: new Et(),
								color: new je(),
								distance: 0,
								coneCos: 0,
								penumbraCos: 0,
								decay: 0,
							};
							break;
						case "PointLight":
							n = {
								position: new Et(),
								color: new je(),
								distance: 0,
								decay: 0,
							};
							break;
						case "HemisphereLight":
							n = {
								direction: new Et(),
								skyColor: new je(),
								groundColor: new je(),
							};
							break;
						case "RectAreaLight":
							n = {
								color: new je(),
								position: new Et(),
								halfWidth: new Et(),
								halfHeight: new Et(),
							};
					}
					return (t[e.id] = n), n;
				},
			};
		}
		let Jr = 0;
		function Kr(t, e) {
			return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0);
		}
		function Qr() {
			const t = new Zr(),
				e = (function () {
					const t = {};
					return {
						get: function (e) {
							if (void 0 !== t[e.id]) return t[e.id];
							let n;
							switch (e.type) {
								case "DirectionalLight":
								case "SpotLight":
									n = {
										shadowBias: 0,
										shadowNormalBias: 0,
										shadowRadius: 1,
										shadowMapSize: new ft(),
									};
									break;
								case "PointLight":
									n = {
										shadowBias: 0,
										shadowNormalBias: 0,
										shadowRadius: 1,
										shadowMapSize: new ft(),
										shadowCameraNear: 1,
										shadowCameraFar: 1e3,
									};
							}
							return (t[e.id] = n), n;
						},
					};
				})(),
				n = {
					version: 0,
					hash: {
						directionalLength: -1,
						pointLength: -1,
						spotLength: -1,
						rectAreaLength: -1,
						hemiLength: -1,
						numDirectionalShadows: -1,
						numPointShadows: -1,
						numSpotShadows: -1,
					},
					ambient: [0, 0, 0],
					probe: [],
					directional: [],
					directionalShadow: [],
					directionalShadowMap: [],
					directionalShadowMatrix: [],
					spot: [],
					spotShadow: [],
					spotShadowMap: [],
					spotShadowMatrix: [],
					rectArea: [],
					point: [],
					pointShadow: [],
					pointShadowMap: [],
					pointShadowMatrix: [],
					hemi: [],
				};
			for (let t = 0; t < 9; t++) n.probe.push(new Et());
			const i = new Et(),
				r = new Dt(),
				o = new Dt();
			return {
				setup: function (s, a, c) {
					let l = 0,
						h = 0,
						u = 0;
					for (let t = 0; t < 9; t++) n.probe[t].set(0, 0, 0);
					let d = 0,
						p = 0,
						f = 0,
						m = 0,
						g = 0,
						v = 0,
						y = 0,
						x = 0;
					const b = c.matrixWorldInverse;
					s.sort(Kr);
					for (let a = 0, c = s.length; a < c; a++) {
						const c = s[a],
							w = c.color,
							_ = c.intensity,
							M = c.distance,
							S = c.shadow && c.shadow.map ? c.shadow.map.texture : null;
						if (c.isAmbientLight)
							(l += w.r * _), (h += w.g * _), (u += w.b * _);
						else if (c.isLightProbe)
							for (let t = 0; t < 9; t++)
								n.probe[t].addScaledVector(c.sh.coefficients[t], _);
						else if (c.isDirectionalLight) {
							const r = t.get(c);
							if (
								(r.color.copy(c.color).multiplyScalar(c.intensity),
								r.direction.setFromMatrixPosition(c.matrixWorld),
								i.setFromMatrixPosition(c.target.matrixWorld),
								r.direction.sub(i),
								r.direction.transformDirection(b),
								c.castShadow)
							) {
								const t = c.shadow,
									i = e.get(c);
								(i.shadowBias = t.bias),
									(i.shadowNormalBias = t.normalBias),
									(i.shadowRadius = t.radius),
									(i.shadowMapSize = t.mapSize),
									(n.directionalShadow[d] = i),
									(n.directionalShadowMap[d] = S),
									(n.directionalShadowMatrix[d] = c.shadow.matrix),
									v++;
							}
							(n.directional[d] = r), d++;
						} else if (c.isSpotLight) {
							const r = t.get(c);
							if (
								(r.position.setFromMatrixPosition(c.matrixWorld),
								r.position.applyMatrix4(b),
								r.color.copy(w).multiplyScalar(_),
								(r.distance = M),
								r.direction.setFromMatrixPosition(c.matrixWorld),
								i.setFromMatrixPosition(c.target.matrixWorld),
								r.direction.sub(i),
								r.direction.transformDirection(b),
								(r.coneCos = Math.cos(c.angle)),
								(r.penumbraCos = Math.cos(c.angle * (1 - c.penumbra))),
								(r.decay = c.decay),
								c.castShadow)
							) {
								const t = c.shadow,
									i = e.get(c);
								(i.shadowBias = t.bias),
									(i.shadowNormalBias = t.normalBias),
									(i.shadowRadius = t.radius),
									(i.shadowMapSize = t.mapSize),
									(n.spotShadow[f] = i),
									(n.spotShadowMap[f] = S),
									(n.spotShadowMatrix[f] = c.shadow.matrix),
									x++;
							}
							(n.spot[f] = r), f++;
						} else if (c.isRectAreaLight) {
							const e = t.get(c);
							e.color.copy(w).multiplyScalar(_),
								e.position.setFromMatrixPosition(c.matrixWorld),
								e.position.applyMatrix4(b),
								o.identity(),
								r.copy(c.matrixWorld),
								r.premultiply(b),
								o.extractRotation(r),
								e.halfWidth.set(0.5 * c.width, 0, 0),
								e.halfHeight.set(0, 0.5 * c.height, 0),
								e.halfWidth.applyMatrix4(o),
								e.halfHeight.applyMatrix4(o),
								(n.rectArea[m] = e),
								m++;
						} else if (c.isPointLight) {
							const i = t.get(c);
							if (
								(i.position.setFromMatrixPosition(c.matrixWorld),
								i.position.applyMatrix4(b),
								i.color.copy(c.color).multiplyScalar(c.intensity),
								(i.distance = c.distance),
								(i.decay = c.decay),
								c.castShadow)
							) {
								const t = c.shadow,
									i = e.get(c);
								(i.shadowBias = t.bias),
									(i.shadowNormalBias = t.normalBias),
									(i.shadowRadius = t.radius),
									(i.shadowMapSize = t.mapSize),
									(i.shadowCameraNear = t.camera.near),
									(i.shadowCameraFar = t.camera.far),
									(n.pointShadow[p] = i),
									(n.pointShadowMap[p] = S),
									(n.pointShadowMatrix[p] = c.shadow.matrix),
									y++;
							}
							(n.point[p] = i), p++;
						} else if (c.isHemisphereLight) {
							const e = t.get(c);
							e.direction.setFromMatrixPosition(c.matrixWorld),
								e.direction.transformDirection(b),
								e.direction.normalize(),
								e.skyColor.copy(c.color).multiplyScalar(_),
								e.groundColor.copy(c.groundColor).multiplyScalar(_),
								(n.hemi[g] = e),
								g++;
						}
					}
					(n.ambient[0] = l), (n.ambient[1] = h), (n.ambient[2] = u);
					const w = n.hash;
					(w.directionalLength === d &&
						w.pointLength === p &&
						w.spotLength === f &&
						w.rectAreaLength === m &&
						w.hemiLength === g &&
						w.numDirectionalShadows === v &&
						w.numPointShadows === y &&
						w.numSpotShadows === x) ||
						((n.directional.length = d),
						(n.spot.length = f),
						(n.rectArea.length = m),
						(n.point.length = p),
						(n.hemi.length = g),
						(n.directionalShadow.length = v),
						(n.directionalShadowMap.length = v),
						(n.pointShadow.length = y),
						(n.pointShadowMap.length = y),
						(n.spotShadow.length = x),
						(n.spotShadowMap.length = x),
						(n.directionalShadowMatrix.length = v),
						(n.pointShadowMatrix.length = y),
						(n.spotShadowMatrix.length = x),
						(w.directionalLength = d),
						(w.pointLength = p),
						(w.spotLength = f),
						(w.rectAreaLength = m),
						(w.hemiLength = g),
						(w.numDirectionalShadows = v),
						(w.numPointShadows = y),
						(w.numSpotShadows = x),
						(n.version = Jr++));
				},
				state: n,
			};
		}
		function $r() {
			const t = new Qr(),
				e = [],
				n = [];
			return {
				init: function () {
					(e.length = 0), (n.length = 0);
				},
				state: { lightsArray: e, shadowsArray: n, lights: t },
				setupLights: function (i) {
					t.setup(e, n, i);
				},
				pushLight: function (t) {
					e.push(t);
				},
				pushShadow: function (t) {
					n.push(t);
				},
			};
		}
		function to() {
			let t = new WeakMap();
			function e(n) {
				const i = n.target;
				i.removeEventListener("dispose", e), t.delete(i);
			}
			return {
				get: function (n, i) {
					let r;
					return (
						!1 === t.has(n)
							? ((r = new $r()),
							  t.set(n, new WeakMap()),
							  t.get(n).set(i, r),
							  n.addEventListener("dispose", e))
							: !1 === t.get(n).has(i)
							? ((r = new $r()), t.get(n).set(i, r))
							: (r = t.get(n).get(i)),
						r
					);
				},
				dispose: function () {
					t = new WeakMap();
				},
			};
		}
		function eo(t) {
			Ze.call(this),
				(this.type = "MeshDepthMaterial"),
				(this.depthPacking = 3200),
				(this.skinning = !1),
				(this.morphTargets = !1),
				(this.map = null),
				(this.alphaMap = null),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.fog = !1),
				this.setValues(t);
		}
		function no(t) {
			Ze.call(this),
				(this.type = "MeshDistanceMaterial"),
				(this.referencePosition = new Et()),
				(this.nearDistance = 1),
				(this.farDistance = 1e3),
				(this.skinning = !1),
				(this.morphTargets = !1),
				(this.map = null),
				(this.alphaMap = null),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.fog = !1),
				this.setValues(t);
		}
		(eo.prototype = Object.create(Ze.prototype)),
			(eo.prototype.constructor = eo),
			(eo.prototype.isMeshDepthMaterial = !0),
			(eo.prototype.copy = function (t) {
				return (
					Ze.prototype.copy.call(this, t),
					(this.depthPacking = t.depthPacking),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					(this.map = t.map),
					(this.alphaMap = t.alphaMap),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					this
				);
			}),
			(no.prototype = Object.create(Ze.prototype)),
			(no.prototype.constructor = no),
			(no.prototype.isMeshDistanceMaterial = !0),
			(no.prototype.copy = function (t) {
				return (
					Ze.prototype.copy.call(this, t),
					this.referencePosition.copy(t.referencePosition),
					(this.nearDistance = t.nearDistance),
					(this.farDistance = t.farDistance),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					(this.map = t.map),
					(this.alphaMap = t.alphaMap),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					this
				);
			});
		function io(t, e, n) {
			let i = new ri();
			const r = new ft(),
				o = new ft(),
				s = new bt(),
				a = [],
				c = [],
				l = {},
				h = { 0: 1, 1: 0, 2: 2 },
				u = new Jn({
					defines: { SAMPLE_RATE: 2 / 8, HALF_SAMPLE_RATE: 1 / 8 },
					uniforms: {
						shadow_pass: { value: null },
						resolution: { value: new ft() },
						radius: { value: 4 },
					},
					vertexShader:
						"void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
					fragmentShader:
						"uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = sqrt( squared_mean - mean * mean );\n  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
				}),
				d = u.clone();
			d.defines.HORIZONAL_PASS = 1;
			const p = new xn();
			p.setAttribute(
				"position",
				new $e(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
			);
			const f = new Un(p, u),
				m = this;
			function g(n, i) {
				const r = e.update(f);
				(u.uniforms.shadow_pass.value = n.map.texture),
					(u.uniforms.resolution.value = n.mapSize),
					(u.uniforms.radius.value = n.radius),
					t.setRenderTarget(n.mapPass),
					t.clear(),
					t.renderBufferDirect(i, null, r, u, f, null),
					(d.uniforms.shadow_pass.value = n.mapPass.texture),
					(d.uniforms.resolution.value = n.mapSize),
					(d.uniforms.radius.value = n.radius),
					t.setRenderTarget(n.map),
					t.clear(),
					t.renderBufferDirect(i, null, r, d, f, null);
			}
			function v(t, e, n) {
				const i = (t << 0) | (e << 1) | (n << 2);
				let r = a[i];
				return (
					void 0 === r &&
						((r = new eo({ depthPacking: 3201, morphTargets: t, skinning: e })),
						(a[i] = r)),
					r
				);
			}
			function y(t, e, n) {
				const i = (t << 0) | (e << 1) | (n << 2);
				let r = c[i];
				return (
					void 0 === r &&
						((r = new no({ morphTargets: t, skinning: e })), (c[i] = r)),
					r
				);
			}
			function x(e, n, i, r, o, s, a) {
				let c = null,
					u = v,
					d = e.customDepthMaterial;
				if (
					(!0 === r.isPointLight && ((u = y), (d = e.customDistanceMaterial)),
					void 0 === d)
				) {
					let t = !1;
					!0 === i.morphTargets &&
						(t =
							n.morphAttributes &&
							n.morphAttributes.position &&
							n.morphAttributes.position.length > 0);
					let r = !1;
					!0 === e.isSkinnedMesh &&
						(!0 === i.skinning
							? (r = !0)
							: console.warn(
									"THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",
									e
							  ));
					c = u(t, r, !0 === e.isInstancedMesh);
				} else c = d;
				if (
					t.localClippingEnabled &&
					!0 === i.clipShadows &&
					0 !== i.clippingPlanes.length
				) {
					const t = c.uuid,
						e = i.uuid;
					let n = l[t];
					void 0 === n && ((n = {}), (l[t] = n));
					let r = n[e];
					void 0 === r && ((r = c.clone()), (n[e] = r)), (c = r);
				}
				return (
					(c.visible = i.visible),
					(c.wireframe = i.wireframe),
					(c.side =
						3 === a
							? null !== i.shadowSide
								? i.shadowSide
								: i.side
							: null !== i.shadowSide
							? i.shadowSide
							: h[i.side]),
					(c.clipShadows = i.clipShadows),
					(c.clippingPlanes = i.clippingPlanes),
					(c.clipIntersection = i.clipIntersection),
					(c.wireframeLinewidth = i.wireframeLinewidth),
					(c.linewidth = i.linewidth),
					!0 === r.isPointLight &&
						!0 === c.isMeshDistanceMaterial &&
						(c.referencePosition.setFromMatrixPosition(r.matrixWorld),
						(c.nearDistance = o),
						(c.farDistance = s)),
					c
				);
			}
			function b(n, r, o, s, a) {
				if (!1 === n.visible) return;
				if (
					n.layers.test(r.layers) &&
					(n.isMesh || n.isLine || n.isPoints) &&
					(n.castShadow || (n.receiveShadow && 3 === a)) &&
					(!n.frustumCulled || i.intersectsObject(n))
				) {
					n.modelViewMatrix.multiplyMatrices(
						o.matrixWorldInverse,
						n.matrixWorld
					);
					const i = e.update(n),
						r = n.material;
					if (Array.isArray(r)) {
						const e = i.groups;
						for (let c = 0, l = e.length; c < l; c++) {
							const l = e[c],
								h = r[l.materialIndex];
							if (h && h.visible) {
								const e = x(n, i, h, s, o.near, o.far, a);
								t.renderBufferDirect(o, null, i, e, n, l);
							}
						}
					} else if (r.visible) {
						const e = x(n, i, r, s, o.near, o.far, a);
						t.renderBufferDirect(o, null, i, e, n, null);
					}
				}
				const c = n.children;
				for (let t = 0, e = c.length; t < e; t++) b(c[t], r, o, s, a);
			}
			(this.enabled = !1),
				(this.autoUpdate = !0),
				(this.needsUpdate = !1),
				(this.type = 1),
				(this.render = function (e, a, c) {
					if (!1 === m.enabled) return;
					if (!1 === m.autoUpdate && !1 === m.needsUpdate) return;
					if (0 === e.length) return;
					const l = t.getRenderTarget(),
						h = t.getActiveCubeFace(),
						u = t.getActiveMipmapLevel(),
						d = t.state;
					d.setBlending(0),
						d.buffers.color.setClear(1, 1, 1, 1),
						d.buffers.depth.setTest(!0),
						d.setScissorTest(!1);
					for (let l = 0, h = e.length; l < h; l++) {
						const h = e[l],
							u = h.shadow;
						if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
						if (void 0 === u) {
							console.warn("THREE.WebGLShadowMap:", h, "has no shadow.");
							continue;
						}
						r.copy(u.mapSize);
						const p = u.getFrameExtents();
						if (
							(r.multiply(p),
							o.copy(u.mapSize),
							(r.x > n || r.y > n) &&
								(r.x > n &&
									((o.x = Math.floor(n / p.x)),
									(r.x = o.x * p.x),
									(u.mapSize.x = o.x)),
								r.y > n &&
									((o.y = Math.floor(n / p.y)),
									(r.y = o.y * p.y),
									(u.mapSize.y = o.y))),
							null === u.map && !u.isPointLightShadow && 3 === this.type)
						) {
							const t = {
								minFilter: 1006,
								magFilter: 1006,
								format: 1023,
								stencilBuffer: !1,
							};
							(u.map = new wt(r.x, r.y, t)),
								(u.map.texture.name = h.name + ".shadowMap"),
								(u.mapPass = new wt(r.x, r.y, t)),
								u.camera.updateProjectionMatrix();
						}
						if (null === u.map) {
							const t = {
								minFilter: 1003,
								magFilter: 1003,
								format: 1023,
								stencilBuffer: !1,
							};
							(u.map = new wt(r.x, r.y, t)),
								(u.map.texture.name = h.name + ".shadowMap"),
								u.camera.updateProjectionMatrix();
						}
						t.setRenderTarget(u.map), t.clear();
						const f = u.getViewportCount();
						for (let t = 0; t < f; t++) {
							const e = u.getViewport(t);
							s.set(o.x * e.x, o.y * e.y, o.x * e.z, o.y * e.w),
								d.viewport(s),
								u.updateMatrices(h, t),
								(i = u.getFrustum()),
								b(a, c, u.camera, h, this.type);
						}
						u.isPointLightShadow || 3 !== this.type || g(u, c),
							(u.needsUpdate = !1);
					}
					(m.needsUpdate = !1), t.setRenderTarget(l, h, u);
				});
		}
		function ro(t, e, n) {
			const i = n.isWebGL2;
			const r = new (function () {
					let e = !1;
					const n = new bt();
					let i = null;
					const r = new bt(0, 0, 0, 0);
					return {
						setMask: function (n) {
							i === n || e || (t.colorMask(n, n, n, n), (i = n));
						},
						setLocked: function (t) {
							e = t;
						},
						setClear: function (e, i, o, s, a) {
							!0 === a && ((e *= s), (i *= s), (o *= s)),
								n.set(e, i, o, s),
								!1 === r.equals(n) && (t.clearColor(e, i, o, s), r.copy(n));
						},
						reset: function () {
							(e = !1), (i = null), r.set(-1, 0, 0, 0);
						},
					};
				})(),
				o = new (function () {
					let e = !1,
						n = null,
						i = null,
						r = null;
					return {
						setTest: function (t) {
							t ? O(2929) : D(2929);
						},
						setMask: function (i) {
							n === i || e || (t.depthMask(i), (n = i));
						},
						setFunc: function (e) {
							if (i !== e) {
								if (e)
									switch (e) {
										case 0:
											t.depthFunc(512);
											break;
										case 1:
											t.depthFunc(519);
											break;
										case 2:
											t.depthFunc(513);
											break;
										case 3:
											t.depthFunc(515);
											break;
										case 4:
											t.depthFunc(514);
											break;
										case 5:
											t.depthFunc(518);
											break;
										case 6:
											t.depthFunc(516);
											break;
										case 7:
											t.depthFunc(517);
											break;
										default:
											t.depthFunc(515);
									}
								else t.depthFunc(515);
								i = e;
							}
						},
						setLocked: function (t) {
							e = t;
						},
						setClear: function (e) {
							r !== e && (t.clearDepth(e), (r = e));
						},
						reset: function () {
							(e = !1), (n = null), (i = null), (r = null);
						},
					};
				})(),
				s = new (function () {
					let e = !1,
						n = null,
						i = null,
						r = null,
						o = null,
						s = null,
						a = null,
						c = null,
						l = null;
					return {
						setTest: function (t) {
							e || (t ? O(2960) : D(2960));
						},
						setMask: function (i) {
							n === i || e || (t.stencilMask(i), (n = i));
						},
						setFunc: function (e, n, s) {
							(i === e && r === n && o === s) ||
								(t.stencilFunc(e, n, s), (i = e), (r = n), (o = s));
						},
						setOp: function (e, n, i) {
							(s === e && a === n && c === i) ||
								(t.stencilOp(e, n, i), (s = e), (a = n), (c = i));
						},
						setLocked: function (t) {
							e = t;
						},
						setClear: function (e) {
							l !== e && (t.clearStencil(e), (l = e));
						},
						reset: function () {
							(e = !1),
								(n = null),
								(i = null),
								(r = null),
								(o = null),
								(s = null),
								(a = null),
								(c = null),
								(l = null);
						},
					};
				})();
			let a = {},
				c = null,
				l = null,
				h = null,
				u = null,
				d = null,
				p = null,
				f = null,
				m = null,
				g = null,
				v = !1,
				y = null,
				x = null,
				b = null,
				w = null,
				_ = null;
			const M = t.getParameter(35661);
			let S = !1,
				T = 0;
			const E = t.getParameter(7938);
			-1 !== E.indexOf("WebGL")
				? ((T = parseFloat(/^WebGL\ ([0-9])/.exec(E)[1])), (S = T >= 1))
				: -1 !== E.indexOf("OpenGL ES") &&
				  ((T = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(E)[1])), (S = T >= 2));
			let A = null,
				L = {};
			const R = new bt(),
				P = new bt();
			function C(e, n, i) {
				const r = new Uint8Array(4),
					o = t.createTexture();
				t.bindTexture(e, o),
					t.texParameteri(e, 10241, 9728),
					t.texParameteri(e, 10240, 9728);
				for (let e = 0; e < i; e++)
					t.texImage2D(n + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
				return o;
			}
			const I = {};
			function O(e) {
				!0 !== a[e] && (t.enable(e), (a[e] = !0));
			}
			function D(e) {
				!1 !== a[e] && (t.disable(e), (a[e] = !1));
			}
			(I[3553] = C(3553, 3553, 1)),
				(I[34067] = C(34067, 34069, 6)),
				r.setClear(0, 0, 0, 1),
				o.setClear(1),
				s.setClear(0),
				O(2929),
				o.setFunc(3),
				H(!1),
				B(1),
				O(2884),
				U(0);
			const N = { 100: 32774, 101: 32778, 102: 32779 };
			if (i) (N[103] = 32775), (N[104] = 32776);
			else {
				const t = e.get("EXT_blend_minmax");
				null !== t && ((N[103] = t.MIN_EXT), (N[104] = t.MAX_EXT));
			}
			const z = {
				200: 0,
				201: 1,
				202: 768,
				204: 770,
				210: 776,
				208: 774,
				206: 772,
				203: 769,
				205: 771,
				209: 775,
				207: 773,
			};
			function U(e, n, i, r, o, s, a, c) {
				if (0 !== e) {
					if ((l || (O(3042), (l = !0)), 5 === e))
						(o = o || n),
							(s = s || i),
							(a = a || r),
							(n === u && o === f) ||
								(t.blendEquationSeparate(N[n], N[o]), (u = n), (f = o)),
							(i === d && r === p && s === m && a === g) ||
								(t.blendFuncSeparate(z[i], z[r], z[s], z[a]),
								(d = i),
								(p = r),
								(m = s),
								(g = a)),
							(h = e),
							(v = null);
					else if (e !== h || c !== v) {
						if (
							((100 === u && 100 === f) ||
								(t.blendEquation(32774), (u = 100), (f = 100)),
							c)
						)
							switch (e) {
								case 1:
									t.blendFuncSeparate(1, 771, 1, 771);
									break;
								case 2:
									t.blendFunc(1, 1);
									break;
								case 3:
									t.blendFuncSeparate(0, 0, 769, 771);
									break;
								case 4:
									t.blendFuncSeparate(0, 768, 0, 770);
									break;
								default:
									console.error("THREE.WebGLState: Invalid blending: ", e);
							}
						else
							switch (e) {
								case 1:
									t.blendFuncSeparate(770, 771, 1, 771);
									break;
								case 2:
									t.blendFunc(770, 1);
									break;
								case 3:
									t.blendFunc(0, 769);
									break;
								case 4:
									t.blendFunc(0, 768);
									break;
								default:
									console.error("THREE.WebGLState: Invalid blending: ", e);
							}
						(d = null), (p = null), (m = null), (g = null), (h = e), (v = c);
					}
				} else l && (D(3042), (l = !1));
			}
			function H(e) {
				y !== e && (e ? t.frontFace(2304) : t.frontFace(2305), (y = e));
			}
			function B(e) {
				0 !== e
					? (O(2884),
					  e !== x &&
							(1 === e
								? t.cullFace(1029)
								: 2 === e
								? t.cullFace(1028)
								: t.cullFace(1032)))
					: D(2884),
					(x = e);
			}
			function F(e, n, i) {
				e
					? (O(32823),
					  (w === n && _ === i) || (t.polygonOffset(n, i), (w = n), (_ = i)))
					: D(32823);
			}
			function k(e) {
				void 0 === e && (e = 33984 + M - 1),
					A !== e && (t.activeTexture(e), (A = e));
			}
			return {
				buffers: { color: r, depth: o, stencil: s },
				enable: O,
				disable: D,
				useProgram: function (e) {
					return c !== e && (t.useProgram(e), (c = e), !0);
				},
				setBlending: U,
				setMaterial: function (t, e) {
					2 === t.side ? D(2884) : O(2884);
					let n = 1 === t.side;
					e && (n = !n),
						H(n),
						1 === t.blending && !1 === t.transparent
							? U(0)
							: U(
									t.blending,
									t.blendEquation,
									t.blendSrc,
									t.blendDst,
									t.blendEquationAlpha,
									t.blendSrcAlpha,
									t.blendDstAlpha,
									t.premultipliedAlpha
							  ),
						o.setFunc(t.depthFunc),
						o.setTest(t.depthTest),
						o.setMask(t.depthWrite),
						r.setMask(t.colorWrite);
					const i = t.stencilWrite;
					s.setTest(i),
						i &&
							(s.setMask(t.stencilWriteMask),
							s.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask),
							s.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
						F(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits);
				},
				setFlipSided: H,
				setCullFace: B,
				setLineWidth: function (e) {
					e !== b && (S && t.lineWidth(e), (b = e));
				},
				setPolygonOffset: F,
				setScissorTest: function (t) {
					t ? O(3089) : D(3089);
				},
				activeTexture: k,
				bindTexture: function (e, n) {
					null === A && k();
					let i = L[A];
					void 0 === i && ((i = { type: void 0, texture: void 0 }), (L[A] = i)),
						(i.type === e && i.texture === n) ||
							(t.bindTexture(e, n || I[e]), (i.type = e), (i.texture = n));
				},
				unbindTexture: function () {
					const e = L[A];
					void 0 !== e &&
						void 0 !== e.type &&
						(t.bindTexture(e.type, null),
						(e.type = void 0),
						(e.texture = void 0));
				},
				compressedTexImage2D: function () {
					try {
						t.compressedTexImage2D.apply(t, arguments);
					} catch (t) {
						console.error("THREE.WebGLState:", t);
					}
				},
				texImage2D: function () {
					try {
						t.texImage2D.apply(t, arguments);
					} catch (t) {
						console.error("THREE.WebGLState:", t);
					}
				},
				texImage3D: function () {
					try {
						t.texImage3D.apply(t, arguments);
					} catch (t) {
						console.error("THREE.WebGLState:", t);
					}
				},
				scissor: function (e) {
					!1 === R.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), R.copy(e));
				},
				viewport: function (e) {
					!1 === P.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), P.copy(e));
				},
				reset: function () {
					(a = {}),
						(A = null),
						(L = {}),
						(c = null),
						(h = null),
						(y = null),
						(x = null),
						r.reset(),
						o.reset(),
						s.reset();
				},
			};
		}
		function oo(t, e, n, i, r, o, s) {
			const a = r.isWebGL2,
				c = r.maxTextures,
				l = r.maxCubemapSize,
				h = r.maxTextureSize,
				u = r.maxSamples,
				d = new WeakMap();
			let p,
				f = !1;
			try {
				f =
					"undefined" != typeof OffscreenCanvas &&
					null !== new OffscreenCanvas(1, 1).getContext("2d");
			} catch (t) {}
			function m(t, e) {
				return f
					? new OffscreenCanvas(t, e)
					: document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
			}
			function g(t, e, n, i) {
				let r = 1;
				if (
					((t.width > i || t.height > i) &&
						(r = i / Math.max(t.width, t.height)),
					r < 1 || !0 === e)
				) {
					if (
						("undefined" != typeof HTMLImageElement &&
							t instanceof HTMLImageElement) ||
						("undefined" != typeof HTMLCanvasElement &&
							t instanceof HTMLCanvasElement) ||
						("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
					) {
						const i = e ? pt.floorPowerOfTwo : Math.floor,
							o = i(r * t.width),
							s = i(r * t.height);
						void 0 === p && (p = m(o, s));
						const a = n ? m(o, s) : p;
						(a.width = o), (a.height = s);
						return (
							a.getContext("2d").drawImage(t, 0, 0, o, s),
							console.warn(
								"THREE.WebGLRenderer: Texture has been resized from (" +
									t.width +
									"x" +
									t.height +
									") to (" +
									o +
									"x" +
									s +
									")."
							),
							a
						);
					}
					return (
						"data" in t &&
							console.warn(
								"THREE.WebGLRenderer: Image in DataTexture is too big (" +
									t.width +
									"x" +
									t.height +
									")."
							),
						t
					);
				}
				return t;
			}
			function v(t) {
				return pt.isPowerOfTwo(t.width) && pt.isPowerOfTwo(t.height);
			}
			function y(t, e) {
				return (
					t.generateMipmaps && e && 1003 !== t.minFilter && 1006 !== t.minFilter
				);
			}
			function x(e, n, r, o) {
				t.generateMipmap(e);
				i.get(n).__maxMipLevel = Math.log(Math.max(r, o)) * Math.LOG2E;
			}
			function b(n, i, r) {
				if (!1 === a) return i;
				if (null !== n) {
					if (void 0 !== t[n]) return t[n];
					console.warn(
						"THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
							n +
							"'"
					);
				}
				let o = i;
				return (
					6403 === i &&
						(5126 === r && (o = 33326),
						5131 === r && (o = 33325),
						5121 === r && (o = 33321)),
					6407 === i &&
						(5126 === r && (o = 34837),
						5131 === r && (o = 34843),
						5121 === r && (o = 32849)),
					6408 === i &&
						(5126 === r && (o = 34836),
						5131 === r && (o = 34842),
						5121 === r && (o = 32856)),
					(33325 !== o && 33326 !== o && 34842 !== o && 34836 !== o) ||
						e.get("EXT_color_buffer_float"),
					o
				);
			}
			function w(t) {
				return 1003 === t || 1004 === t || 1005 === t ? 9728 : 9729;
			}
			function _(e) {
				const n = e.target;
				n.removeEventListener("dispose", _),
					(function (e) {
						const n = i.get(e);
						if (void 0 === n.__webglInit) return;
						t.deleteTexture(n.__webglTexture), i.remove(e);
					})(n),
					n.isVideoTexture && d.delete(n),
					s.memory.textures--;
			}
			function M(e) {
				const n = e.target;
				n.removeEventListener("dispose", M),
					(function (e) {
						const n = i.get(e),
							r = i.get(e.texture);
						if (!e) return;
						void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture);
						e.depthTexture && e.depthTexture.dispose();
						if (e.isWebGLCubeRenderTarget)
							for (let e = 0; e < 6; e++)
								t.deleteFramebuffer(n.__webglFramebuffer[e]),
									n.__webglDepthbuffer &&
										t.deleteRenderbuffer(n.__webglDepthbuffer[e]);
						else
							t.deleteFramebuffer(n.__webglFramebuffer),
								n.__webglDepthbuffer &&
									t.deleteRenderbuffer(n.__webglDepthbuffer),
								n.__webglMultisampledFramebuffer &&
									t.deleteFramebuffer(n.__webglMultisampledFramebuffer),
								n.__webglColorRenderbuffer &&
									t.deleteRenderbuffer(n.__webglColorRenderbuffer),
								n.__webglDepthRenderbuffer &&
									t.deleteRenderbuffer(n.__webglDepthRenderbuffer);
						i.remove(e.texture), i.remove(e);
					})(n),
					s.memory.textures--;
			}
			let S = 0;
			function T(t, e) {
				const r = i.get(t);
				if (
					(t.isVideoTexture &&
						(function (t) {
							const e = s.render.frame;
							d.get(t) !== e && (d.set(t, e), t.update());
						})(t),
					t.version > 0 && r.__version !== t.version)
				) {
					const n = t.image;
					if (void 0 === n)
						console.warn(
							"THREE.WebGLRenderer: Texture marked for update but image is undefined"
						);
					else {
						if (!1 !== n.complete) return void I(r, t, e);
						console.warn(
							"THREE.WebGLRenderer: Texture marked for update but image is incomplete"
						);
					}
				}
				n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture);
			}
			function E(e, r) {
				if (6 !== e.image.length) return;
				const s = i.get(e);
				if (e.version > 0 && s.__version !== e.version) {
					C(s, e),
						n.activeTexture(33984 + r),
						n.bindTexture(34067, s.__webglTexture),
						t.pixelStorei(37440, e.flipY);
					const i =
							e && (e.isCompressedTexture || e.image[0].isCompressedTexture),
						c = e.image[0] && e.image[0].isDataTexture,
						h = [];
					for (let t = 0; t < 6; t++)
						h[t] =
							i || c
								? c
									? e.image[t].image
									: e.image[t]
								: g(e.image[t], !1, !0, l);
					const u = h[0],
						d = v(u) || a,
						p = o.convert(e.format),
						f = o.convert(e.type),
						m = b(e.internalFormat, p, f);
					let w;
					if ((P(34067, e, d), i)) {
						for (let t = 0; t < 6; t++) {
							w = h[t].mipmaps;
							for (let i = 0; i < w.length; i++) {
								const r = w[i];
								1023 !== e.format && 1022 !== e.format
									? null !== p
										? n.compressedTexImage2D(
												34069 + t,
												i,
												m,
												r.width,
												r.height,
												0,
												r.data
										  )
										: console.warn(
												"THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
										  )
									: n.texImage2D(
											34069 + t,
											i,
											m,
											r.width,
											r.height,
											0,
											p,
											f,
											r.data
									  );
							}
						}
						s.__maxMipLevel = w.length - 1;
					} else {
						w = e.mipmaps;
						for (let t = 0; t < 6; t++)
							if (c) {
								n.texImage2D(
									34069 + t,
									0,
									m,
									h[t].width,
									h[t].height,
									0,
									p,
									f,
									h[t].data
								);
								for (let e = 0; e < w.length; e++) {
									const i = w[e].image[t].image;
									n.texImage2D(
										34069 + t,
										e + 1,
										m,
										i.width,
										i.height,
										0,
										p,
										f,
										i.data
									);
								}
							} else {
								n.texImage2D(34069 + t, 0, m, p, f, h[t]);
								for (let e = 0; e < w.length; e++) {
									const i = w[e];
									n.texImage2D(34069 + t, e + 1, m, p, f, i.image[t]);
								}
							}
						s.__maxMipLevel = w.length;
					}
					y(e, d) && x(34067, e, u.width, u.height),
						(s.__version = e.version),
						e.onUpdate && e.onUpdate(e);
				} else
					n.activeTexture(33984 + r), n.bindTexture(34067, s.__webglTexture);
			}
			function A(t, e) {
				n.activeTexture(33984 + e),
					n.bindTexture(34067, i.get(t).__webglTexture);
			}
			const L = { 1e3: 10497, 1001: 33071, 1002: 33648 },
				R = {
					1003: 9728,
					1004: 9984,
					1005: 9986,
					1006: 9729,
					1007: 9985,
					1008: 9987,
				};
			function P(n, o, s) {
				s
					? (t.texParameteri(n, 10242, L[o.wrapS]),
					  t.texParameteri(n, 10243, L[o.wrapT]),
					  (32879 !== n && 35866 !== n) ||
							t.texParameteri(n, 32882, L[o.wrapR]),
					  t.texParameteri(n, 10240, R[o.magFilter]),
					  t.texParameteri(n, 10241, R[o.minFilter]))
					: (t.texParameteri(n, 10242, 33071),
					  t.texParameteri(n, 10243, 33071),
					  (32879 !== n && 35866 !== n) || t.texParameteri(n, 32882, 33071),
					  (1001 === o.wrapS && 1001 === o.wrapT) ||
							console.warn(
								"THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
							),
					  t.texParameteri(n, 10240, w(o.magFilter)),
					  t.texParameteri(n, 10241, w(o.minFilter)),
					  1003 !== o.minFilter &&
							1006 !== o.minFilter &&
							console.warn(
								"THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
							));
				const c = e.get("EXT_texture_filter_anisotropic");
				if (c) {
					if (1015 === o.type && null === e.get("OES_texture_float_linear"))
						return;
					if (
						1016 === o.type &&
						null === (a || e.get("OES_texture_half_float_linear"))
					)
						return;
					(o.anisotropy > 1 || i.get(o).__currentAnisotropy) &&
						(t.texParameterf(
							n,
							c.TEXTURE_MAX_ANISOTROPY_EXT,
							Math.min(o.anisotropy, r.getMaxAnisotropy())
						),
						(i.get(o).__currentAnisotropy = o.anisotropy));
				}
			}
			function C(e, n) {
				void 0 === e.__webglInit &&
					((e.__webglInit = !0),
					n.addEventListener("dispose", _),
					(e.__webglTexture = t.createTexture()),
					s.memory.textures++);
			}
			function I(e, i, r) {
				let s = 3553;
				i.isDataTexture2DArray && (s = 35866),
					i.isDataTexture3D && (s = 32879),
					C(e, i),
					n.activeTexture(33984 + r),
					n.bindTexture(s, e.__webglTexture),
					t.pixelStorei(37440, i.flipY),
					t.pixelStorei(37441, i.premultiplyAlpha),
					t.pixelStorei(3317, i.unpackAlignment);
				const c =
						(function (t) {
							return (
								!a &&
								(1001 !== t.wrapS ||
									1001 !== t.wrapT ||
									(1003 !== t.minFilter && 1006 !== t.minFilter))
							);
						})(i) && !1 === v(i.image),
					l = g(i.image, c, !1, h),
					u = v(l) || a,
					d = o.convert(i.format);
				let p,
					f = o.convert(i.type),
					m = b(i.internalFormat, d, f);
				P(s, i, u);
				const w = i.mipmaps;
				if (i.isDepthTexture)
					(m = 6402),
						a
							? (m =
									1015 === i.type
										? 36012
										: 1014 === i.type
										? 33190
										: 1020 === i.type
										? 35056
										: 33189)
							: 1015 === i.type &&
							  console.error(
									"WebGLRenderer: Floating point depth texture requires WebGL2."
							  ),
						1026 === i.format &&
							6402 === m &&
							1012 !== i.type &&
							1014 !== i.type &&
							(console.warn(
								"THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
							),
							(i.type = 1012),
							(f = o.convert(i.type))),
						1027 === i.format &&
							6402 === m &&
							((m = 34041),
							1020 !== i.type &&
								(console.warn(
									"THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
								),
								(i.type = 1020),
								(f = o.convert(i.type)))),
						n.texImage2D(3553, 0, m, l.width, l.height, 0, d, f, null);
				else if (i.isDataTexture)
					if (w.length > 0 && u) {
						for (let t = 0, e = w.length; t < e; t++)
							(p = w[t]),
								n.texImage2D(3553, t, m, p.width, p.height, 0, d, f, p.data);
						(i.generateMipmaps = !1), (e.__maxMipLevel = w.length - 1);
					} else
						n.texImage2D(3553, 0, m, l.width, l.height, 0, d, f, l.data),
							(e.__maxMipLevel = 0);
				else if (i.isCompressedTexture) {
					for (let t = 0, e = w.length; t < e; t++)
						(p = w[t]),
							1023 !== i.format && 1022 !== i.format
								? null !== d
									? n.compressedTexImage2D(
											3553,
											t,
											m,
											p.width,
											p.height,
											0,
											p.data
									  )
									: console.warn(
											"THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
									  )
								: n.texImage2D(3553, t, m, p.width, p.height, 0, d, f, p.data);
					e.__maxMipLevel = w.length - 1;
				} else if (i.isDataTexture2DArray)
					n.texImage3D(
						35866,
						0,
						m,
						l.width,
						l.height,
						l.depth,
						0,
						d,
						f,
						l.data
					),
						(e.__maxMipLevel = 0);
				else if (i.isDataTexture3D)
					n.texImage3D(
						32879,
						0,
						m,
						l.width,
						l.height,
						l.depth,
						0,
						d,
						f,
						l.data
					),
						(e.__maxMipLevel = 0);
				else if (w.length > 0 && u) {
					for (let t = 0, e = w.length; t < e; t++)
						(p = w[t]), n.texImage2D(3553, t, m, d, f, p);
					(i.generateMipmaps = !1), (e.__maxMipLevel = w.length - 1);
				} else n.texImage2D(3553, 0, m, d, f, l), (e.__maxMipLevel = 0);
				y(i, u) && x(s, i, l.width, l.height),
					(e.__version = i.version),
					i.onUpdate && i.onUpdate(i);
			}
			function O(e, r, s, a) {
				const c = o.convert(r.texture.format),
					l = o.convert(r.texture.type),
					h = b(r.texture.internalFormat, c, l);
				n.texImage2D(a, 0, h, r.width, r.height, 0, c, l, null),
					t.bindFramebuffer(36160, e),
					t.framebufferTexture2D(
						36160,
						s,
						a,
						i.get(r.texture).__webglTexture,
						0
					),
					t.bindFramebuffer(36160, null);
			}
			function D(e, n, i) {
				if ((t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer)) {
					let r = 33189;
					if (i) {
						const e = n.depthTexture;
						e &&
							e.isDepthTexture &&
							(1015 === e.type ? (r = 36012) : 1014 === e.type && (r = 33190));
						const i = z(n);
						t.renderbufferStorageMultisample(36161, i, r, n.width, n.height);
					} else t.renderbufferStorage(36161, r, n.width, n.height);
					t.framebufferRenderbuffer(36160, 36096, 36161, e);
				} else if (n.depthBuffer && n.stencilBuffer) {
					if (i) {
						const e = z(n);
						t.renderbufferStorageMultisample(
							36161,
							e,
							35056,
							n.width,
							n.height
						);
					} else t.renderbufferStorage(36161, 34041, n.width, n.height);
					t.framebufferRenderbuffer(36160, 33306, 36161, e);
				} else {
					const e = o.convert(n.texture.format),
						r = o.convert(n.texture.type),
						s = b(n.texture.internalFormat, e, r);
					if (i) {
						const e = z(n);
						t.renderbufferStorageMultisample(36161, e, s, n.width, n.height);
					} else t.renderbufferStorage(36161, s, n.width, n.height);
				}
				t.bindRenderbuffer(36161, null);
			}
			function N(e) {
				const n = i.get(e),
					r = !0 === e.isWebGLCubeRenderTarget;
				if (e.depthTexture) {
					if (r)
						throw new Error(
							"target.depthTexture not supported in Cube render targets"
						);
					!(function (e, n) {
						if (n && n.isWebGLCubeRenderTarget)
							throw new Error(
								"Depth Texture with cube render targets is not supported"
							);
						if (
							(t.bindFramebuffer(36160, e),
							!n.depthTexture || !n.depthTexture.isDepthTexture)
						)
							throw new Error(
								"renderTarget.depthTexture must be an instance of THREE.DepthTexture"
							);
						(i.get(n.depthTexture).__webglTexture &&
							n.depthTexture.image.width === n.width &&
							n.depthTexture.image.height === n.height) ||
							((n.depthTexture.image.width = n.width),
							(n.depthTexture.image.height = n.height),
							(n.depthTexture.needsUpdate = !0)),
							T(n.depthTexture, 0);
						const r = i.get(n.depthTexture).__webglTexture;
						if (1026 === n.depthTexture.format)
							t.framebufferTexture2D(36160, 36096, 3553, r, 0);
						else {
							if (1027 !== n.depthTexture.format)
								throw new Error("Unknown depthTexture format");
							t.framebufferTexture2D(36160, 33306, 3553, r, 0);
						}
					})(n.__webglFramebuffer, e);
				} else if (r) {
					n.__webglDepthbuffer = [];
					for (let i = 0; i < 6; i++)
						t.bindFramebuffer(36160, n.__webglFramebuffer[i]),
							(n.__webglDepthbuffer[i] = t.createRenderbuffer()),
							D(n.__webglDepthbuffer[i], e, !1);
				} else
					t.bindFramebuffer(36160, n.__webglFramebuffer),
						(n.__webglDepthbuffer = t.createRenderbuffer()),
						D(n.__webglDepthbuffer, e, !1);
				t.bindFramebuffer(36160, null);
			}
			function z(t) {
				return a && t.isWebGLMultisampleRenderTarget
					? Math.min(u, t.samples)
					: 0;
			}
			let U = !1,
				H = !1;
			(this.allocateTextureUnit = function () {
				const t = S;
				return (
					t >= c &&
						console.warn(
							"THREE.WebGLTextures: Trying to use " +
								t +
								" texture units while this GPU supports only " +
								c
						),
					(S += 1),
					t
				);
			}),
				(this.resetTextureUnits = function () {
					S = 0;
				}),
				(this.setTexture2D = T),
				(this.setTexture2DArray = function (t, e) {
					const r = i.get(t);
					t.version > 0 && r.__version !== t.version
						? I(r, t, e)
						: (n.activeTexture(33984 + e),
						  n.bindTexture(35866, r.__webglTexture));
				}),
				(this.setTexture3D = function (t, e) {
					const r = i.get(t);
					t.version > 0 && r.__version !== t.version
						? I(r, t, e)
						: (n.activeTexture(33984 + e),
						  n.bindTexture(32879, r.__webglTexture));
				}),
				(this.setTextureCube = E),
				(this.setTextureCubeDynamic = A),
				(this.setupRenderTarget = function (e) {
					const r = i.get(e),
						c = i.get(e.texture);
					e.addEventListener("dispose", M),
						(c.__webglTexture = t.createTexture()),
						s.memory.textures++;
					const l = !0 === e.isWebGLCubeRenderTarget,
						h = !0 === e.isWebGLMultisampleRenderTarget,
						u = v(e) || a;
					if (
						(!a ||
							1022 !== e.texture.format ||
							(1015 !== e.texture.type && 1016 !== e.texture.type) ||
							((e.texture.format = 1023),
							console.warn(
								"THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead."
							)),
						l)
					) {
						r.__webglFramebuffer = [];
						for (let e = 0; e < 6; e++)
							r.__webglFramebuffer[e] = t.createFramebuffer();
					} else if (((r.__webglFramebuffer = t.createFramebuffer()), h))
						if (a) {
							(r.__webglMultisampledFramebuffer = t.createFramebuffer()),
								(r.__webglColorRenderbuffer = t.createRenderbuffer()),
								t.bindRenderbuffer(36161, r.__webglColorRenderbuffer);
							const n = o.convert(e.texture.format),
								i = o.convert(e.texture.type),
								s = b(e.texture.internalFormat, n, i),
								a = z(e);
							t.renderbufferStorageMultisample(36161, a, s, e.width, e.height),
								t.bindFramebuffer(36160, r.__webglMultisampledFramebuffer),
								t.framebufferRenderbuffer(
									36160,
									36064,
									36161,
									r.__webglColorRenderbuffer
								),
								t.bindRenderbuffer(36161, null),
								e.depthBuffer &&
									((r.__webglDepthRenderbuffer = t.createRenderbuffer()),
									D(r.__webglDepthRenderbuffer, e, !0)),
								t.bindFramebuffer(36160, null);
						} else
							console.warn(
								"THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."
							);
					if (l) {
						n.bindTexture(34067, c.__webglTexture), P(34067, e.texture, u);
						for (let t = 0; t < 6; t++)
							O(r.__webglFramebuffer[t], e, 36064, 34069 + t);
						y(e.texture, u) && x(34067, e.texture, e.width, e.height),
							n.bindTexture(34067, null);
					} else
						n.bindTexture(3553, c.__webglTexture),
							P(3553, e.texture, u),
							O(r.__webglFramebuffer, e, 36064, 3553),
							y(e.texture, u) && x(3553, e.texture, e.width, e.height),
							n.bindTexture(3553, null);
					e.depthBuffer && N(e);
				}),
				(this.updateRenderTargetMipmap = function (t) {
					const e = t.texture;
					if (y(e, v(t) || a)) {
						const r = t.isWebGLCubeRenderTarget ? 34067 : 3553,
							o = i.get(e).__webglTexture;
						n.bindTexture(r, o),
							x(r, e, t.width, t.height),
							n.bindTexture(r, null);
					}
				}),
				(this.updateMultisampleRenderTarget = function (e) {
					if (e.isWebGLMultisampleRenderTarget)
						if (a) {
							const n = i.get(e);
							t.bindFramebuffer(36008, n.__webglMultisampledFramebuffer),
								t.bindFramebuffer(36009, n.__webglFramebuffer);
							const r = e.width,
								o = e.height;
							let s = 16384;
							e.depthBuffer && (s |= 256),
								e.stencilBuffer && (s |= 1024),
								t.blitFramebuffer(0, 0, r, o, 0, 0, r, o, s, 9728),
								t.bindFramebuffer(36160, n.__webglMultisampledFramebuffer);
						} else
							console.warn(
								"THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."
							);
				}),
				(this.safeSetTexture2D = function (t, e) {
					t &&
						t.isWebGLRenderTarget &&
						(!1 === U &&
							(console.warn(
								"THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."
							),
							(U = !0)),
						(t = t.texture)),
						T(t, e);
				}),
				(this.safeSetTextureCube = function (t, e) {
					t &&
						t.isWebGLCubeRenderTarget &&
						(!1 === H &&
							(console.warn(
								"THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."
							),
							(H = !0)),
						(t = t.texture)),
						(t && t.isCubeTexture) ||
						(Array.isArray(t.image) && 6 === t.image.length)
							? E(t, e)
							: A(t, e);
				});
		}
		function so(t, e, n) {
			const i = n.isWebGL2;
			return {
				convert: function (t) {
					let n;
					if (1009 === t) return 5121;
					if (1017 === t) return 32819;
					if (1018 === t) return 32820;
					if (1019 === t) return 33635;
					if (1010 === t) return 5120;
					if (1011 === t) return 5122;
					if (1012 === t) return 5123;
					if (1013 === t) return 5124;
					if (1014 === t) return 5125;
					if (1015 === t) return 5126;
					if (1016 === t)
						return i
							? 5131
							: ((n = e.get("OES_texture_half_float")),
							  null !== n ? n.HALF_FLOAT_OES : null);
					if (1021 === t) return 6406;
					if (1022 === t) return 6407;
					if (1023 === t) return 6408;
					if (1024 === t) return 6409;
					if (1025 === t) return 6410;
					if (1026 === t) return 6402;
					if (1027 === t) return 34041;
					if (1028 === t) return 6403;
					if (1029 === t) return 36244;
					if (1030 === t) return 33319;
					if (1031 === t) return 33320;
					if (1032 === t) return 36248;
					if (1033 === t) return 36249;
					if (33776 === t || 33777 === t || 33778 === t || 33779 === t) {
						if (((n = e.get("WEBGL_compressed_texture_s3tc")), null === n))
							return null;
						if (33776 === t) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
						if (33777 === t) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
						if (33778 === t) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
						if (33779 === t) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT;
					}
					if (35840 === t || 35841 === t || 35842 === t || 35843 === t) {
						if (((n = e.get("WEBGL_compressed_texture_pvrtc")), null === n))
							return null;
						if (35840 === t) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
						if (35841 === t) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
						if (35842 === t) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
						if (35843 === t) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
					}
					if (36196 === t)
						return (
							(n = e.get("WEBGL_compressed_texture_etc1")),
							null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null
						);
					if (
						(37492 === t || 37496 === t) &&
						((n = e.get("WEBGL_compressed_texture_etc")), null !== n)
					) {
						if (37492 === t) return n.COMPRESSED_RGB8_ETC2;
						if (37496 === t) return n.COMPRESSED_RGBA8_ETC2_EAC;
					}
					return 37808 === t ||
						37809 === t ||
						37810 === t ||
						37811 === t ||
						37812 === t ||
						37813 === t ||
						37814 === t ||
						37815 === t ||
						37816 === t ||
						37817 === t ||
						37818 === t ||
						37819 === t ||
						37820 === t ||
						37821 === t ||
						37840 === t ||
						37841 === t ||
						37842 === t ||
						37843 === t ||
						37844 === t ||
						37845 === t ||
						37846 === t ||
						37847 === t ||
						37848 === t ||
						37849 === t ||
						37850 === t ||
						37851 === t ||
						37852 === t ||
						37853 === t
						? ((n = e.get("WEBGL_compressed_texture_astc")),
						  null !== n ? t : null)
						: 36492 === t
						? ((n = e.get("EXT_texture_compression_bptc")),
						  null !== n ? t : null)
						: 1020 === t
						? i
							? 34042
							: ((n = e.get("WEBGL_depth_texture")),
							  null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null)
						: void 0;
				},
			};
		}
		function ao(t) {
			Qn.call(this), (this.cameras = t || []);
		}
		function co() {
			Qt.call(this), (this.type = "Group");
		}
		function lo() {
			(this._targetRay = null), (this._grip = null), (this._hand = null);
		}
		function ho(t, e) {
			const n = this;
			let i = null,
				r = 1,
				o = null,
				s = "local-floor",
				a = null;
			const c = [],
				l = new Map(),
				h = new Qn();
			h.layers.enable(1), (h.viewport = new bt());
			const u = new Qn();
			u.layers.enable(2), (u.viewport = new bt());
			const d = [h, u],
				p = new ao();
			p.layers.enable(1), p.layers.enable(2);
			let f = null,
				m = null;
			function g(t) {
				const e = l.get(t.inputSource);
				e && e.dispatchEvent({ type: t.type });
			}
			function v() {
				l.forEach(function (t, e) {
					t.disconnect(e);
				}),
					l.clear(),
					t.setFramebuffer(null),
					t.setRenderTarget(t.getRenderTarget()),
					S.stop(),
					(n.isPresenting = !1),
					n.dispatchEvent({ type: "sessionend" });
			}
			function y(t) {
				(o = t),
					S.setContext(i),
					S.start(),
					(n.isPresenting = !0),
					n.dispatchEvent({ type: "sessionstart" });
			}
			function x(t) {
				const e = i.inputSources;
				for (let t = 0; t < c.length; t++) l.set(e[t], c[t]);
				for (let e = 0; e < t.removed.length; e++) {
					const n = t.removed[e],
						i = l.get(n);
					i &&
						(i.dispatchEvent({ type: "disconnected", data: n }), l.delete(n));
				}
				for (let e = 0; e < t.added.length; e++) {
					const n = t.added[e],
						i = l.get(n);
					i && i.dispatchEvent({ type: "connected", data: n });
				}
			}
			(this.enabled = !1),
				(this.isPresenting = !1),
				(this.getController = function (t) {
					let e = c[t];
					return (
						void 0 === e && ((e = new lo()), (c[t] = e)), e.getTargetRaySpace()
					);
				}),
				(this.getControllerGrip = function (t) {
					let e = c[t];
					return void 0 === e && ((e = new lo()), (c[t] = e)), e.getGripSpace();
				}),
				(this.getHand = function (t) {
					let e = c[t];
					return void 0 === e && ((e = new lo()), (c[t] = e)), e.getHandSpace();
				}),
				(this.setFramebufferScaleFactor = function (t) {
					(r = t),
						!0 === n.isPresenting &&
							console.warn(
								"THREE.WebXRManager: Cannot change framebuffer scale while presenting."
							);
				}),
				(this.setReferenceSpaceType = function (t) {
					(s = t),
						!0 === n.isPresenting &&
							console.warn(
								"THREE.WebXRManager: Cannot change reference space type while presenting."
							);
				}),
				(this.getReferenceSpace = function () {
					return o;
				}),
				(this.getSession = function () {
					return i;
				}),
				(this.setSession = function (t) {
					if (((i = t), null !== i)) {
						i.addEventListener("select", g),
							i.addEventListener("selectstart", g),
							i.addEventListener("selectend", g),
							i.addEventListener("squeeze", g),
							i.addEventListener("squeezestart", g),
							i.addEventListener("squeezeend", g),
							i.addEventListener("end", v);
						const t = e.getContextAttributes();
						!0 !== t.xrCompatible && e.makeXRCompatible();
						const n = {
								antialias: t.antialias,
								alpha: t.alpha,
								depth: t.depth,
								stencil: t.stencil,
								framebufferScaleFactor: r,
							},
							o = new XRWebGLLayer(i, e, n);
						i.updateRenderState({ baseLayer: o }),
							i.requestReferenceSpace(s).then(y),
							i.addEventListener("inputsourceschange", x);
					}
				});
			const b = new Et(),
				w = new Et();
			function _(t, e) {
				null === e
					? t.matrixWorld.copy(t.matrix)
					: t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
					t.matrixWorldInverse.getInverse(t.matrixWorld);
			}
			this.getCamera = function (t) {
				(p.near = u.near = h.near = t.near),
					(p.far = u.far = h.far = t.far),
					(f === p.near && m === p.far) ||
						(i.updateRenderState({ depthNear: p.near, depthFar: p.far }),
						(f = p.near),
						(m = p.far));
				const e = t.parent,
					n = p.cameras;
				_(p, e);
				for (let t = 0; t < n.length; t++) _(n[t], e);
				t.matrixWorld.copy(p.matrixWorld);
				const r = t.children;
				for (let t = 0, e = r.length; t < e; t++) r[t].updateMatrixWorld(!0);
				return (
					2 === n.length
						? (function (t, e, n) {
								b.setFromMatrixPosition(e.matrixWorld),
									w.setFromMatrixPosition(n.matrixWorld);
								const i = b.distanceTo(w),
									r = e.projectionMatrix.elements,
									o = n.projectionMatrix.elements,
									s = r[14] / (r[10] - 1),
									a = r[14] / (r[10] + 1),
									c = (r[9] + 1) / r[5],
									l = (r[9] - 1) / r[5],
									h = (r[8] - 1) / r[0],
									u = (o[8] + 1) / o[0],
									d = s * h,
									p = s * u,
									f = i / (-h + u),
									m = f * -h;
								e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
									t.translateX(m),
									t.translateZ(f),
									t.matrixWorld.compose(t.position, t.quaternion, t.scale),
									t.matrixWorldInverse.getInverse(t.matrixWorld);
								const g = s + f,
									v = a + f,
									y = d - m,
									x = p + (i - m),
									_ = ((c * a) / v) * g,
									M = ((l * a) / v) * g;
								t.projectionMatrix.makePerspective(y, x, _, M, g, v);
						  })(p, h, u)
						: p.projectionMatrix.copy(h.projectionMatrix),
					p
				);
			};
			let M = null;
			const S = new si();
			S.setAnimationLoop(function (e, n) {
				if (((a = n.getViewerPose(o)), null !== a)) {
					const e = a.views,
						n = i.renderState.baseLayer;
					t.setFramebuffer(n.framebuffer);
					let r = !1;
					e.length !== p.cameras.length && ((p.cameras.length = 0), (r = !0));
					for (let t = 0; t < e.length; t++) {
						const i = e[t],
							o = n.getViewport(i),
							s = d[t];
						s.matrix.fromArray(i.transform.matrix),
							s.projectionMatrix.fromArray(i.projectionMatrix),
							s.viewport.set(o.x, o.y, o.width, o.height),
							0 === t && p.matrix.copy(s.matrix),
							!0 === r && p.cameras.push(s);
					}
				}
				const r = i.inputSources;
				for (let t = 0; t < c.length; t++) {
					const e = c[t],
						i = r[t];
					e.update(i, n, o);
				}
				M && M(e, n);
			}),
				(this.setAnimationLoop = function (t) {
					M = t;
				}),
				(this.dispose = function () {});
		}
		function uo(t) {
			function e(e, n, i) {
				(e.opacity.value = n.opacity),
					n.color && e.diffuse.value.copy(n.color),
					n.emissive &&
						e.emissive.value
							.copy(n.emissive)
							.multiplyScalar(n.emissiveIntensity),
					n.map && (e.map.value = n.map),
					n.alphaMap && (e.alphaMap.value = n.alphaMap),
					n.specularMap && (e.specularMap.value = n.specularMap);
				const r = n.envMap || i;
				if (r) {
					(e.envMap.value = r),
						(e.flipEnvMap.value = r.isCubeTexture ? -1 : 1),
						(e.reflectivity.value = n.reflectivity),
						(e.refractionRatio.value = n.refractionRatio);
					var o = t.get(r).__maxMipLevel;
					void 0 !== o && (e.maxMipLevel.value = o);
				}
				let s, a;
				n.lightMap &&
					((e.lightMap.value = n.lightMap),
					(e.lightMapIntensity.value = n.lightMapIntensity)),
					n.aoMap &&
						((e.aoMap.value = n.aoMap),
						(e.aoMapIntensity.value = n.aoMapIntensity)),
					n.map
						? (s = n.map)
						: n.specularMap
						? (s = n.specularMap)
						: n.displacementMap
						? (s = n.displacementMap)
						: n.normalMap
						? (s = n.normalMap)
						: n.bumpMap
						? (s = n.bumpMap)
						: n.roughnessMap
						? (s = n.roughnessMap)
						: n.metalnessMap
						? (s = n.metalnessMap)
						: n.alphaMap
						? (s = n.alphaMap)
						: n.emissiveMap && (s = n.emissiveMap),
					void 0 !== s &&
						(s.isWebGLRenderTarget && (s = s.texture),
						!0 === s.matrixAutoUpdate && s.updateMatrix(),
						e.uvTransform.value.copy(s.matrix)),
					n.aoMap ? (a = n.aoMap) : n.lightMap && (a = n.lightMap),
					void 0 !== a &&
						(a.isWebGLRenderTarget && (a = a.texture),
						!0 === a.matrixAutoUpdate && a.updateMatrix(),
						e.uv2Transform.value.copy(a.matrix));
			}
			function n(t, e, n) {
				(t.roughness.value = e.roughness),
					(t.metalness.value = e.metalness),
					e.roughnessMap && (t.roughnessMap.value = e.roughnessMap),
					e.metalnessMap && (t.metalnessMap.value = e.metalnessMap),
					e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
					e.bumpMap &&
						((t.bumpMap.value = e.bumpMap),
						(t.bumpScale.value = e.bumpScale),
						1 === e.side && (t.bumpScale.value *= -1)),
					e.normalMap &&
						((t.normalMap.value = e.normalMap),
						t.normalScale.value.copy(e.normalScale),
						1 === e.side && t.normalScale.value.negate()),
					e.displacementMap &&
						((t.displacementMap.value = e.displacementMap),
						(t.displacementScale.value = e.displacementScale),
						(t.displacementBias.value = e.displacementBias)),
					(e.envMap || n) && (t.envMapIntensity.value = e.envMapIntensity);
			}
			return {
				refreshFogUniforms: function (t, e) {
					t.fogColor.value.copy(e.color),
						e.isFog
							? ((t.fogNear.value = e.near), (t.fogFar.value = e.far))
							: e.isFogExp2 && (t.fogDensity.value = e.density);
				},
				refreshMaterialUniforms: function (t, i, r, o, s) {
					i.isMeshBasicMaterial
						? e(t, i)
						: i.isMeshLambertMaterial
						? (e(t, i),
						  (function (t, e) {
								e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
						  })(t, i))
						: i.isMeshToonMaterial
						? (e(t, i),
						  (function (t, e) {
								e.gradientMap && (t.gradientMap.value = e.gradientMap);
								e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
								e.bumpMap &&
									((t.bumpMap.value = e.bumpMap),
									(t.bumpScale.value = e.bumpScale),
									1 === e.side && (t.bumpScale.value *= -1));
								e.normalMap &&
									((t.normalMap.value = e.normalMap),
									t.normalScale.value.copy(e.normalScale),
									1 === e.side && t.normalScale.value.negate());
								e.displacementMap &&
									((t.displacementMap.value = e.displacementMap),
									(t.displacementScale.value = e.displacementScale),
									(t.displacementBias.value = e.displacementBias));
						  })(t, i))
						: i.isMeshPhongMaterial
						? (e(t, i),
						  (function (t, e) {
								t.specular.value.copy(e.specular),
									(t.shininess.value = Math.max(e.shininess, 1e-4)),
									e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
								e.bumpMap &&
									((t.bumpMap.value = e.bumpMap),
									(t.bumpScale.value = e.bumpScale),
									1 === e.side && (t.bumpScale.value *= -1));
								e.normalMap &&
									((t.normalMap.value = e.normalMap),
									t.normalScale.value.copy(e.normalScale),
									1 === e.side && t.normalScale.value.negate());
								e.displacementMap &&
									((t.displacementMap.value = e.displacementMap),
									(t.displacementScale.value = e.displacementScale),
									(t.displacementBias.value = e.displacementBias));
						  })(t, i))
						: i.isMeshStandardMaterial
						? (e(t, i, r),
						  i.isMeshPhysicalMaterial
								? (function (t, e, i) {
										n(t, e, i),
											(t.reflectivity.value = e.reflectivity),
											(t.clearcoat.value = e.clearcoat),
											(t.clearcoatRoughness.value = e.clearcoatRoughness),
											e.sheen && t.sheen.value.copy(e.sheen);
										e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap);
										e.clearcoatRoughnessMap &&
											(t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap);
										e.clearcoatNormalMap &&
											(t.clearcoatNormalScale.value.copy(
												e.clearcoatNormalScale
											),
											(t.clearcoatNormalMap.value = e.clearcoatNormalMap),
											1 === e.side && t.clearcoatNormalScale.value.negate());
										(t.transmission.value = e.transmission),
											e.transmissionMap &&
												(t.transmissionMap.value = e.transmissionMap);
								  })(t, i, r)
								: n(t, i, r))
						: i.isMeshMatcapMaterial
						? (e(t, i),
						  (function (t, e) {
								e.matcap && (t.matcap.value = e.matcap);
								e.bumpMap &&
									((t.bumpMap.value = e.bumpMap),
									(t.bumpScale.value = e.bumpScale),
									1 === e.side && (t.bumpScale.value *= -1));
								e.normalMap &&
									((t.normalMap.value = e.normalMap),
									t.normalScale.value.copy(e.normalScale),
									1 === e.side && t.normalScale.value.negate());
								e.displacementMap &&
									((t.displacementMap.value = e.displacementMap),
									(t.displacementScale.value = e.displacementScale),
									(t.displacementBias.value = e.displacementBias));
						  })(t, i))
						: i.isMeshDepthMaterial
						? (e(t, i),
						  (function (t, e) {
								e.displacementMap &&
									((t.displacementMap.value = e.displacementMap),
									(t.displacementScale.value = e.displacementScale),
									(t.displacementBias.value = e.displacementBias));
						  })(t, i))
						: i.isMeshDistanceMaterial
						? (e(t, i),
						  (function (t, e) {
								e.displacementMap &&
									((t.displacementMap.value = e.displacementMap),
									(t.displacementScale.value = e.displacementScale),
									(t.displacementBias.value = e.displacementBias));
								t.referencePosition.value.copy(e.referencePosition),
									(t.nearDistance.value = e.nearDistance),
									(t.farDistance.value = e.farDistance);
						  })(t, i))
						: i.isMeshNormalMaterial
						? (e(t, i),
						  (function (t, e) {
								e.bumpMap &&
									((t.bumpMap.value = e.bumpMap),
									(t.bumpScale.value = e.bumpScale),
									1 === e.side && (t.bumpScale.value *= -1));
								e.normalMap &&
									((t.normalMap.value = e.normalMap),
									t.normalScale.value.copy(e.normalScale),
									1 === e.side && t.normalScale.value.negate());
								e.displacementMap &&
									((t.displacementMap.value = e.displacementMap),
									(t.displacementScale.value = e.displacementScale),
									(t.displacementBias.value = e.displacementBias));
						  })(t, i))
						: i.isLineBasicMaterial
						? ((function (t, e) {
								t.diffuse.value.copy(e.color), (t.opacity.value = e.opacity);
						  })(t, i),
						  i.isLineDashedMaterial &&
								(function (t, e) {
									(t.dashSize.value = e.dashSize),
										(t.totalSize.value = e.dashSize + e.gapSize),
										(t.scale.value = e.scale);
								})(t, i))
						: i.isPointsMaterial
						? (function (t, e, n, i) {
								t.diffuse.value.copy(e.color),
									(t.opacity.value = e.opacity),
									(t.size.value = e.size * n),
									(t.scale.value = 0.5 * i),
									e.map && (t.map.value = e.map);
								e.alphaMap && (t.alphaMap.value = e.alphaMap);
								let r;
								e.map ? (r = e.map) : e.alphaMap && (r = e.alphaMap);
								void 0 !== r &&
									(!0 === r.matrixAutoUpdate && r.updateMatrix(),
									t.uvTransform.value.copy(r.matrix));
						  })(t, i, o, s)
						: i.isSpriteMaterial
						? (function (t, e) {
								t.diffuse.value.copy(e.color),
									(t.opacity.value = e.opacity),
									(t.rotation.value = e.rotation),
									e.map && (t.map.value = e.map);
								e.alphaMap && (t.alphaMap.value = e.alphaMap);
								let n;
								e.map ? (n = e.map) : e.alphaMap && (n = e.alphaMap);
								void 0 !== n &&
									(!0 === n.matrixAutoUpdate && n.updateMatrix(),
									t.uvTransform.value.copy(n.matrix));
						  })(t, i)
						: i.isShadowMaterial
						? (t.color.value.copy(i.color), (t.opacity.value = i.opacity))
						: i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
				},
			};
		}
		function po(t) {
			const e =
					void 0 !== (t = t || {}).canvas
						? t.canvas
						: document.createElementNS(
								"http://www.w3.org/1999/xhtml",
								"canvas"
						  ),
				n = void 0 !== t.context ? t.context : null,
				i = void 0 !== t.alpha && t.alpha,
				r = void 0 === t.depth || t.depth,
				o = void 0 === t.stencil || t.stencil,
				s = void 0 !== t.antialias && t.antialias,
				a = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
				c = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
				l = void 0 !== t.powerPreference ? t.powerPreference : "default",
				h =
					void 0 !== t.failIfMajorPerformanceCaveat &&
					t.failIfMajorPerformanceCaveat;
			let u = null,
				d = null;
			(this.domElement = e),
				(this.debug = { checkShaderErrors: !0 }),
				(this.autoClear = !0),
				(this.autoClearColor = !0),
				(this.autoClearDepth = !0),
				(this.autoClearStencil = !0),
				(this.sortObjects = !0),
				(this.clippingPlanes = []),
				(this.localClippingEnabled = !1),
				(this.gammaFactor = 2),
				(this.outputEncoding = 3e3),
				(this.physicallyCorrectLights = !1),
				(this.toneMapping = 0),
				(this.toneMappingExposure = 1),
				(this.maxMorphTargets = 8),
				(this.maxMorphNormals = 4);
			const p = this;
			let f = !1,
				m = null,
				g = 0,
				v = 0,
				y = null,
				x = null,
				b = -1,
				w = null,
				_ = null;
			const M = new bt(),
				S = new bt();
			let T = null,
				E = e.width,
				A = e.height,
				L = 1,
				R = null,
				P = null;
			const C = new bt(0, 0, E, A),
				I = new bt(0, 0, E, A);
			let O = !1;
			const D = new ri(),
				N = new gi();
			let z = !1,
				U = !1;
			const H = new Dt(),
				B = new Et(),
				F = {
					background: null,
					fog: null,
					environment: null,
					overrideMaterial: null,
					isScene: !0,
				};
			function k() {
				return null === y ? L : 1;
			}
			let G,
				j,
				V,
				W,
				q,
				X,
				Y,
				Z,
				J,
				K,
				Q,
				$,
				tt,
				et,
				nt,
				it,
				rt,
				ot,
				st,
				at = n;
			function ct(t, n) {
				for (let i = 0; i < t.length; i++) {
					const r = t[i],
						o = e.getContext(r, n);
					if (null !== o) return o;
				}
				return null;
			}
			try {
				const t = {
					alpha: i,
					depth: r,
					stencil: o,
					antialias: s,
					premultipliedAlpha: a,
					preserveDrawingBuffer: c,
					powerPreference: l,
					failIfMajorPerformanceCaveat: h,
				};
				if (
					(e.addEventListener("webglcontextlost", dt, !1),
					e.addEventListener("webglcontextrestored", mt, !1),
					null === at)
				) {
					const e = ["webgl2", "webgl", "experimental-webgl"];
					if (
						(!0 === p.isWebGL1Renderer && e.shift(),
						(at = ct(e, t)),
						null === at)
					)
						throw ct(e)
							? new Error(
									"Error creating WebGL context with your selected attributes."
							  )
							: new Error("Error creating WebGL context.");
				}
				void 0 === at.getShaderPrecisionFormat &&
					(at.getShaderPrecisionFormat = function () {
						return { rangeMin: 1, rangeMax: 1, precision: 1 };
					});
			} catch (t) {
				throw (console.error("THREE.WebGLRenderer: " + t.message), t);
			}
			function lt() {
				(G = new vi(at)),
					(j = new mi(at, G, t)),
					!1 === j.isWebGL2 &&
						(G.get("WEBGL_depth_texture"),
						G.get("OES_texture_float"),
						G.get("OES_texture_half_float"),
						G.get("OES_texture_half_float_linear"),
						G.get("OES_standard_derivatives"),
						G.get("OES_element_index_uint"),
						G.get("OES_vertex_array_object"),
						G.get("ANGLE_instanced_arrays")),
					G.get("OES_texture_float_linear"),
					(ot = new so(at, G, j)),
					(V = new ro(at, G, j)),
					V.scissor(S.copy(I).multiplyScalar(L).floor()),
					V.viewport(M.copy(C).multiplyScalar(L).floor()),
					(W = new bi(at)),
					(q = new Vr()),
					(X = new oo(at, G, V, q, j, ot, W)),
					(Y = new ai(at, j)),
					(st = new pi(at, G, Y, j)),
					(Z = new yi(at, Y, W, st)),
					(J = new Si(at, Z, Y, W)),
					(nt = new Mi(at)),
					(K = new jr(p, G, j, st)),
					(Q = new uo(q)),
					($ = new Yr(q)),
					(tt = new to()),
					(et = new di(p, V, J, a)),
					(it = new fi(at, G, W, j)),
					(rt = new xi(at, G, W, j)),
					(W.programs = K.programs),
					(p.capabilities = j),
					(p.extensions = G),
					(p.properties = q),
					(p.renderLists = $),
					(p.state = V),
					(p.info = W);
			}
			lt();
			const ht = new ho(p, at);
			this.xr = ht;
			const ut = new io(p, J, j.maxTextureSize);
			function dt(t) {
				t.preventDefault(),
					console.log("THREE.WebGLRenderer: Context Lost."),
					(f = !0);
			}
			function mt() {
				console.log("THREE.WebGLRenderer: Context Restored."), (f = !1), lt();
			}
			function gt(t) {
				const e = t.target;
				e.removeEventListener("dispose", gt),
					(function (t) {
						vt(t), q.remove(t);
					})(e);
			}
			function vt(t) {
				const e = q.get(t).program;
				void 0 !== e && K.releaseProgram(e);
			}
			(this.shadowMap = ut),
				(this.getContext = function () {
					return at;
				}),
				(this.getContextAttributes = function () {
					return at.getContextAttributes();
				}),
				(this.forceContextLoss = function () {
					const t = G.get("WEBGL_lose_context");
					t && t.loseContext();
				}),
				(this.forceContextRestore = function () {
					const t = G.get("WEBGL_lose_context");
					t && t.restoreContext();
				}),
				(this.getPixelRatio = function () {
					return L;
				}),
				(this.setPixelRatio = function (t) {
					void 0 !== t && ((L = t), this.setSize(E, A, !1));
				}),
				(this.getSize = function (t) {
					return (
						void 0 === t &&
							(console.warn(
								"WebGLRenderer: .getsize() now requires a Vector2 as an argument"
							),
							(t = new ft())),
						t.set(E, A)
					);
				}),
				(this.setSize = function (t, n, i) {
					ht.isPresenting
						? console.warn(
								"THREE.WebGLRenderer: Can't change size while VR device is presenting."
						  )
						: ((E = t),
						  (A = n),
						  (e.width = Math.floor(t * L)),
						  (e.height = Math.floor(n * L)),
						  !1 !== i &&
								((e.style.width = t + "px"), (e.style.height = n + "px")),
						  this.setViewport(0, 0, t, n));
				}),
				(this.getDrawingBufferSize = function (t) {
					return (
						void 0 === t &&
							(console.warn(
								"WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"
							),
							(t = new ft())),
						t.set(E * L, A * L).floor()
					);
				}),
				(this.setDrawingBufferSize = function (t, n, i) {
					(E = t),
						(A = n),
						(L = i),
						(e.width = Math.floor(t * i)),
						(e.height = Math.floor(n * i)),
						this.setViewport(0, 0, t, n);
				}),
				(this.getCurrentViewport = function (t) {
					return (
						void 0 === t &&
							(console.warn(
								"WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"
							),
							(t = new bt())),
						t.copy(M)
					);
				}),
				(this.getViewport = function (t) {
					return t.copy(C);
				}),
				(this.setViewport = function (t, e, n, i) {
					t.isVector4 ? C.set(t.x, t.y, t.z, t.w) : C.set(t, e, n, i),
						V.viewport(M.copy(C).multiplyScalar(L).floor());
				}),
				(this.getScissor = function (t) {
					return t.copy(I);
				}),
				(this.setScissor = function (t, e, n, i) {
					t.isVector4 ? I.set(t.x, t.y, t.z, t.w) : I.set(t, e, n, i),
						V.scissor(S.copy(I).multiplyScalar(L).floor());
				}),
				(this.getScissorTest = function () {
					return O;
				}),
				(this.setScissorTest = function (t) {
					V.setScissorTest((O = t));
				}),
				(this.setOpaqueSort = function (t) {
					R = t;
				}),
				(this.setTransparentSort = function (t) {
					P = t;
				}),
				(this.getClearColor = function () {
					return et.getClearColor();
				}),
				(this.setClearColor = function () {
					et.setClearColor.apply(et, arguments);
				}),
				(this.getClearAlpha = function () {
					return et.getClearAlpha();
				}),
				(this.setClearAlpha = function () {
					et.setClearAlpha.apply(et, arguments);
				}),
				(this.clear = function (t, e, n) {
					let i = 0;
					(void 0 === t || t) && (i |= 16384),
						(void 0 === e || e) && (i |= 256),
						(void 0 === n || n) && (i |= 1024),
						at.clear(i);
				}),
				(this.clearColor = function () {
					this.clear(!0, !1, !1);
				}),
				(this.clearDepth = function () {
					this.clear(!1, !0, !1);
				}),
				(this.clearStencil = function () {
					this.clear(!1, !1, !0);
				}),
				(this.dispose = function () {
					e.removeEventListener("webglcontextlost", dt, !1),
						e.removeEventListener("webglcontextrestored", mt, !1),
						$.dispose(),
						tt.dispose(),
						q.dispose(),
						J.dispose(),
						st.dispose(),
						ht.dispose(),
						xt.stop();
				}),
				(this.renderBufferImmediate = function (t, e) {
					st.initAttributes();
					const n = q.get(t);
					t.hasPositions && !n.position && (n.position = at.createBuffer()),
						t.hasNormals && !n.normal && (n.normal = at.createBuffer()),
						t.hasUvs && !n.uv && (n.uv = at.createBuffer()),
						t.hasColors && !n.color && (n.color = at.createBuffer());
					const i = e.getAttributes();
					t.hasPositions &&
						(at.bindBuffer(34962, n.position),
						at.bufferData(34962, t.positionArray, 35048),
						st.enableAttribute(i.position),
						at.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)),
						t.hasNormals &&
							(at.bindBuffer(34962, n.normal),
							at.bufferData(34962, t.normalArray, 35048),
							st.enableAttribute(i.normal),
							at.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)),
						t.hasUvs &&
							(at.bindBuffer(34962, n.uv),
							at.bufferData(34962, t.uvArray, 35048),
							st.enableAttribute(i.uv),
							at.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)),
						t.hasColors &&
							(at.bindBuffer(34962, n.color),
							at.bufferData(34962, t.colorArray, 35048),
							st.enableAttribute(i.color),
							at.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)),
						st.disableUnusedAttributes(),
						at.drawArrays(4, 0, t.count),
						(t.count = 0);
				}),
				(this.renderBufferDirect = function (t, e, n, i, r, o) {
					null === e && (e = F);
					const s = r.isMesh && r.matrixWorld.determinant() < 0,
						a = Tt(t, e, i, r);
					V.setMaterial(i, s);
					let c = n.index;
					const l = n.attributes.position;
					if (null === c) {
						if (void 0 === l || 0 === l.count) return;
					} else if (0 === c.count) return;
					let h,
						u = 1;
					!0 === i.wireframe && ((c = Z.getWireframeAttribute(n)), (u = 2)),
						(i.morphTargets || i.morphNormals) && nt.update(r, n, i, a),
						st.setup(r, i, a, n, c);
					let d = it;
					null !== c && ((h = Y.get(c)), (d = rt), d.setIndex(h));
					const p = null !== c ? c.count : l.count,
						f = n.drawRange.start * u,
						m = n.drawRange.count * u,
						g = null !== o ? o.start * u : 0,
						v = null !== o ? o.count * u : 1 / 0,
						y = Math.max(f, g),
						x = Math.min(p, f + m, g + v) - 1,
						b = Math.max(0, x - y + 1);
					if (0 !== b) {
						if (r.isMesh)
							!0 === i.wireframe
								? (V.setLineWidth(i.wireframeLinewidth * k()), d.setMode(1))
								: d.setMode(4);
						else if (r.isLine) {
							let t = i.linewidth;
							void 0 === t && (t = 1),
								V.setLineWidth(t * k()),
								r.isLineSegments
									? d.setMode(1)
									: r.isLineLoop
									? d.setMode(2)
									: d.setMode(3);
						} else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
						if (r.isInstancedMesh) d.renderInstances(y, b, r.count);
						else if (n.isInstancedBufferGeometry) {
							const t = Math.min(n.instanceCount, n._maxInstanceCount);
							d.renderInstances(y, b, t);
						} else d.render(y, b);
					}
				}),
				(this.compile = function (t, e) {
					(d = tt.get(t, e)),
						d.init(),
						t.traverse(function (t) {
							t.isLight && (d.pushLight(t), t.castShadow && d.pushShadow(t));
						}),
						d.setupLights(e);
					const n = new WeakMap();
					t.traverse(function (e) {
						let i = e.material;
						if (i)
							if (Array.isArray(i))
								for (let r = 0; r < i.length; r++) {
									let o = i[r];
									!1 === n.has(o) && (St(o, t, e), n.set(o));
								}
							else !1 === n.has(i) && (St(i, t, e), n.set(i));
					});
				});
			let yt = null;
			const xt = new si();
			function wt(t, e, n, i) {
				if (!1 === t.visible) return;
				if (t.layers.test(e.layers))
					if (t.isGroup) n = t.renderOrder;
					else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
					else if (t.isLight) d.pushLight(t), t.castShadow && d.pushShadow(t);
					else if (t.isSprite) {
						if (!t.frustumCulled || D.intersectsSprite(t)) {
							i && B.setFromMatrixPosition(t.matrixWorld).applyMatrix4(H);
							const e = J.update(t),
								r = t.material;
							r.visible && u.push(t, e, r, n, B.z, null);
						}
					} else if (t.isImmediateRenderObject)
						i && B.setFromMatrixPosition(t.matrixWorld).applyMatrix4(H),
							u.push(t, null, t.material, n, B.z, null);
					else if (
						(t.isMesh || t.isLine || t.isPoints) &&
						(t.isSkinnedMesh &&
							t.skeleton.frame !== W.render.frame &&
							(t.skeleton.update(), (t.skeleton.frame = W.render.frame)),
						!t.frustumCulled || D.intersectsObject(t))
					) {
						i && B.setFromMatrixPosition(t.matrixWorld).applyMatrix4(H);
						const e = J.update(t),
							r = t.material;
						if (Array.isArray(r)) {
							const i = e.groups;
							for (let o = 0, s = i.length; o < s; o++) {
								const s = i[o],
									a = r[s.materialIndex];
								a && a.visible && u.push(t, e, a, n, B.z, s);
							}
						} else r.visible && u.push(t, e, r, n, B.z, null);
					}
				const r = t.children;
				for (let t = 0, o = r.length; t < o; t++) wt(r[t], e, n, i);
			}
			function _t(t, e, n) {
				const i = !0 === e.isScene ? e.overrideMaterial : null;
				for (let r = 0, o = t.length; r < o; r++) {
					const o = t[r],
						s = o.object,
						a = o.geometry,
						c = null === i ? o.material : i,
						l = o.group;
					if (n.isArrayCamera) {
						_ = n;
						const t = n.cameras;
						for (let n = 0, i = t.length; n < i; n++) {
							const i = t[n];
							s.layers.test(i.layers) &&
								(V.viewport(M.copy(i.viewport)),
								d.setupLights(i),
								Mt(s, e, i, a, c, l));
						}
					} else (_ = null), Mt(s, e, n, a, c, l);
				}
			}
			function Mt(t, e, n, i, r, o) {
				if (
					(t.onBeforeRender(p, e, n, i, r, o),
					(d = tt.get(e, _ || n)),
					t.modelViewMatrix.multiplyMatrices(
						n.matrixWorldInverse,
						t.matrixWorld
					),
					t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
					t.isImmediateRenderObject)
				) {
					const i = Tt(n, e, r, t);
					V.setMaterial(r),
						st.reset(),
						(function (t, e) {
							t.render(function (t) {
								p.renderBufferImmediate(t, e);
							});
						})(t, i);
				} else p.renderBufferDirect(n, e, i, r, t, o);
				t.onAfterRender(p, e, n, i, r, o), (d = tt.get(e, _ || n));
			}
			function St(t, e, n) {
				!0 !== e.isScene && (e = F);
				const i = q.get(t),
					r = d.state.lights,
					o = d.state.shadowsArray,
					s = r.state.version,
					a = K.getParameters(
						t,
						r.state,
						o,
						e,
						N.numPlanes,
						N.numIntersection,
						n
					),
					c = K.getProgramCacheKey(a);
				let l = i.program,
					h = !0;
				if (void 0 === l) t.addEventListener("dispose", gt);
				else if (l.cacheKey !== c) vt(t);
				else if (i.lightsStateVersion !== s)
					(i.lightsStateVersion = s), (h = !1);
				else {
					if (void 0 !== a.shaderID) return;
					h = !1;
				}
				h &&
					((a.uniforms = K.getUniforms(t, a)),
					t.onBeforeCompile(a, p),
					(l = K.acquireProgram(a, c)),
					(i.program = l),
					(i.uniforms = a.uniforms),
					(i.outputEncoding = a.outputEncoding));
				const u = l.getAttributes();
				if (t.morphTargets) {
					t.numSupportedMorphTargets = 0;
					for (let e = 0; e < p.maxMorphTargets; e++)
						u["morphTarget" + e] >= 0 && t.numSupportedMorphTargets++;
				}
				if (t.morphNormals) {
					t.numSupportedMorphNormals = 0;
					for (let e = 0; e < p.maxMorphNormals; e++)
						u["morphNormal" + e] >= 0 && t.numSupportedMorphNormals++;
				}
				const f = i.uniforms;
				((t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping) ||
					((i.numClippingPlanes = N.numPlanes),
					(i.numIntersection = N.numIntersection),
					(f.clippingPlanes = N.uniform)),
					(i.environment = t.isMeshStandardMaterial ? e.environment : null),
					(i.fog = e.fog),
					(i.needsLights = (function (t) {
						return (
							t.isMeshLambertMaterial ||
							t.isMeshToonMaterial ||
							t.isMeshPhongMaterial ||
							t.isMeshStandardMaterial ||
							t.isShadowMaterial ||
							(t.isShaderMaterial && !0 === t.lights)
						);
					})(t)),
					(i.lightsStateVersion = s),
					i.needsLights &&
						((f.ambientLightColor.value = r.state.ambient),
						(f.lightProbe.value = r.state.probe),
						(f.directionalLights.value = r.state.directional),
						(f.directionalLightShadows.value = r.state.directionalShadow),
						(f.spotLights.value = r.state.spot),
						(f.spotLightShadows.value = r.state.spotShadow),
						(f.rectAreaLights.value = r.state.rectArea),
						(f.pointLights.value = r.state.point),
						(f.pointLightShadows.value = r.state.pointShadow),
						(f.hemisphereLights.value = r.state.hemi),
						(f.directionalShadowMap.value = r.state.directionalShadowMap),
						(f.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
						(f.spotShadowMap.value = r.state.spotShadowMap),
						(f.spotShadowMatrix.value = r.state.spotShadowMatrix),
						(f.pointShadowMap.value = r.state.pointShadowMap),
						(f.pointShadowMatrix.value = r.state.pointShadowMatrix));
				const m = i.program.getUniforms(),
					g = _r.seqWithValue(m.seq, f);
				i.uniformsList = g;
			}
			function Tt(t, e, n, i) {
				!0 !== e.isScene && (e = F), X.resetTextureUnits();
				const r = e.fog,
					o = n.isMeshStandardMaterial ? e.environment : null,
					s = null === y ? p.outputEncoding : y.texture.encoding,
					a = q.get(n),
					c = d.state.lights;
				if (!0 === z && (!0 === U || t !== w)) {
					const e = t === w && n.id === b;
					N.setState(
						n.clippingPlanes,
						n.clipIntersection,
						n.clipShadows,
						t,
						a,
						e
					);
				}
				n.version === a.__version
					? void 0 === a.program ||
					  (n.fog && a.fog !== r) ||
					  a.environment !== o ||
					  (a.needsLights && a.lightsStateVersion !== c.state.version)
						? St(n, e, i)
						: void 0 === a.numClippingPlanes ||
						  (a.numClippingPlanes === N.numPlanes &&
								a.numIntersection === N.numIntersection)
						? a.outputEncoding !== s && St(n, e, i)
						: St(n, e, i)
					: (St(n, e, i), (a.__version = n.version));
				let l = !1,
					h = !1,
					u = !1;
				const f = a.program,
					m = f.getUniforms(),
					g = a.uniforms;
				if (
					(V.useProgram(f.program) && ((l = !0), (h = !0), (u = !0)),
					n.id !== b && ((b = n.id), (h = !0)),
					l || w !== t)
				) {
					if (
						(m.setValue(at, "projectionMatrix", t.projectionMatrix),
						j.logarithmicDepthBuffer &&
							m.setValue(
								at,
								"logDepthBufFC",
								2 / (Math.log(t.far + 1) / Math.LN2)
							),
						w !== t && ((w = t), (h = !0), (u = !0)),
						n.isShaderMaterial ||
							n.isMeshPhongMaterial ||
							n.isMeshToonMaterial ||
							n.isMeshStandardMaterial ||
							n.envMap)
					) {
						const e = m.map.cameraPosition;
						void 0 !== e &&
							e.setValue(at, B.setFromMatrixPosition(t.matrixWorld));
					}
					(n.isMeshPhongMaterial ||
						n.isMeshToonMaterial ||
						n.isMeshLambertMaterial ||
						n.isMeshBasicMaterial ||
						n.isMeshStandardMaterial ||
						n.isShaderMaterial) &&
						m.setValue(at, "isOrthographic", !0 === t.isOrthographicCamera),
						(n.isMeshPhongMaterial ||
							n.isMeshToonMaterial ||
							n.isMeshLambertMaterial ||
							n.isMeshBasicMaterial ||
							n.isMeshStandardMaterial ||
							n.isShaderMaterial ||
							n.isShadowMaterial ||
							n.skinning) &&
							m.setValue(at, "viewMatrix", t.matrixWorldInverse);
				}
				if (n.skinning) {
					m.setOptional(at, i, "bindMatrix"),
						m.setOptional(at, i, "bindMatrixInverse");
					const t = i.skeleton;
					if (t) {
						const e = t.bones;
						if (j.floatVertexTextures) {
							if (void 0 === t.boneTexture) {
								let n = Math.sqrt(4 * e.length);
								(n = pt.ceilPowerOfTwo(n)), (n = Math.max(n, 4));
								const i = new Float32Array(n * n * 4);
								i.set(t.boneMatrices);
								const r = new ei(i, n, n, 1023, 1015);
								(t.boneMatrices = i),
									(t.boneTexture = r),
									(t.boneTextureSize = n);
							}
							m.setValue(at, "boneTexture", t.boneTexture, X),
								m.setValue(at, "boneTextureSize", t.boneTextureSize);
						} else m.setOptional(at, t, "boneMatrices");
					}
				}
				var v, x;
				return (
					(h || a.receiveShadow !== i.receiveShadow) &&
						((a.receiveShadow = i.receiveShadow),
						m.setValue(at, "receiveShadow", i.receiveShadow)),
					h &&
						(m.setValue(at, "toneMappingExposure", p.toneMappingExposure),
						a.needsLights &&
							((x = u),
							((v = g).ambientLightColor.needsUpdate = x),
							(v.lightProbe.needsUpdate = x),
							(v.directionalLights.needsUpdate = x),
							(v.directionalLightShadows.needsUpdate = x),
							(v.pointLights.needsUpdate = x),
							(v.pointLightShadows.needsUpdate = x),
							(v.spotLights.needsUpdate = x),
							(v.spotLightShadows.needsUpdate = x),
							(v.rectAreaLights.needsUpdate = x),
							(v.hemisphereLights.needsUpdate = x)),
						r && n.fog && Q.refreshFogUniforms(g, r),
						Q.refreshMaterialUniforms(g, n, o, L, A),
						void 0 !== g.ltc_1 && (g.ltc_1.value = oi.LTC_1),
						void 0 !== g.ltc_2 && (g.ltc_2.value = oi.LTC_2),
						_r.upload(at, a.uniformsList, g, X)),
					n.isShaderMaterial &&
						!0 === n.uniformsNeedUpdate &&
						(_r.upload(at, a.uniformsList, g, X), (n.uniformsNeedUpdate = !1)),
					n.isSpriteMaterial && m.setValue(at, "center", i.center),
					m.setValue(at, "modelViewMatrix", i.modelViewMatrix),
					m.setValue(at, "normalMatrix", i.normalMatrix),
					m.setValue(at, "modelMatrix", i.matrixWorld),
					f
				);
			}
			xt.setAnimationLoop(function (t) {
				ht.isPresenting || (yt && yt(t));
			}),
				"undefined" != typeof window && xt.setContext(window),
				(this.setAnimationLoop = function (t) {
					(yt = t), ht.setAnimationLoop(t), null === t ? xt.stop() : xt.start();
				}),
				(this.render = function (t, e) {
					let n, i;
					if (
						(void 0 !== arguments[2] &&
							(console.warn(
								"THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."
							),
							(n = arguments[2])),
						void 0 !== arguments[3] &&
							(console.warn(
								"THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."
							),
							(i = arguments[3])),
						void 0 !== e && !0 !== e.isCamera)
					)
						return void console.error(
							"THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
						);
					if (!0 === f) return;
					st.resetDefaultState(),
						(b = -1),
						(w = null),
						!0 === t.autoUpdate && t.updateMatrixWorld(),
						null === e.parent && e.updateMatrixWorld(),
						!0 === ht.enabled &&
							!0 === ht.isPresenting &&
							(e = ht.getCamera(e)),
						!0 === t.isScene && t.onBeforeRender(p, t, e, n || y),
						(d = tt.get(t, e)),
						d.init(),
						H.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
						D.setFromProjectionMatrix(H),
						(U = this.localClippingEnabled),
						(z = N.init(this.clippingPlanes, U, e)),
						(u = $.get(t, e)),
						u.init(),
						wt(t, e, 0, p.sortObjects),
						u.finish(),
						!0 === p.sortObjects && u.sort(R, P),
						!0 === z && N.beginShadows();
					const r = d.state.shadowsArray;
					ut.render(r, t, e),
						d.setupLights(e),
						!0 === z && N.endShadows(),
						!0 === this.info.autoReset && this.info.reset(),
						void 0 !== n && this.setRenderTarget(n),
						et.render(u, t, e, i);
					const o = u.opaque,
						s = u.transparent;
					o.length > 0 && _t(o, t, e),
						s.length > 0 && _t(s, t, e),
						!0 === t.isScene && t.onAfterRender(p, t, e),
						null !== y &&
							(X.updateRenderTargetMipmap(y),
							X.updateMultisampleRenderTarget(y)),
						V.buffers.depth.setTest(!0),
						V.buffers.depth.setMask(!0),
						V.buffers.color.setMask(!0),
						V.setPolygonOffset(!1),
						(u = null),
						(d = null);
				}),
				(this.setFramebuffer = function (t) {
					m !== t && null === y && at.bindFramebuffer(36160, t), (m = t);
				}),
				(this.getActiveCubeFace = function () {
					return g;
				}),
				(this.getActiveMipmapLevel = function () {
					return v;
				}),
				(this.getRenderTarget = function () {
					return y;
				}),
				(this.setRenderTarget = function (t, e, n) {
					(y = t),
						(g = e),
						(v = n),
						t &&
							void 0 === q.get(t).__webglFramebuffer &&
							X.setupRenderTarget(t);
					let i = m,
						r = !1;
					if (t) {
						const n = q.get(t).__webglFramebuffer;
						t.isWebGLCubeRenderTarget
							? ((i = n[e || 0]), (r = !0))
							: (i = t.isWebGLMultisampleRenderTarget
									? q.get(t).__webglMultisampledFramebuffer
									: n),
							M.copy(t.viewport),
							S.copy(t.scissor),
							(T = t.scissorTest);
					} else
						M.copy(C).multiplyScalar(L).floor(),
							S.copy(I).multiplyScalar(L).floor(),
							(T = O);
					if (
						(x !== i && (at.bindFramebuffer(36160, i), (x = i)),
						V.viewport(M),
						V.scissor(S),
						V.setScissorTest(T),
						r)
					) {
						const i = q.get(t.texture);
						at.framebufferTexture2D(
							36160,
							36064,
							34069 + (e || 0),
							i.__webglTexture,
							n || 0
						);
					}
				}),
				(this.readRenderTargetPixels = function (t, e, n, i, r, o, s) {
					if (!t || !t.isWebGLRenderTarget)
						return void console.error(
							"THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
						);
					let a = q.get(t).__webglFramebuffer;
					if ((t.isWebGLCubeRenderTarget && void 0 !== s && (a = a[s]), a)) {
						let s = !1;
						a !== x && (at.bindFramebuffer(36160, a), (s = !0));
						try {
							const a = t.texture,
								c = a.format,
								l = a.type;
							if (1023 !== c && ot.convert(c) !== at.getParameter(35739))
								return void console.error(
									"THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
								);
							if (
								!(
									1009 === l ||
									ot.convert(l) === at.getParameter(35738) ||
									(1015 === l &&
										(j.isWebGL2 ||
											G.get("OES_texture_float") ||
											G.get("WEBGL_color_buffer_float"))) ||
									(1016 === l &&
										(j.isWebGL2
											? G.get("EXT_color_buffer_float")
											: G.get("EXT_color_buffer_half_float")))
								)
							)
								return void console.error(
									"THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
								);
							36053 === at.checkFramebufferStatus(36160)
								? e >= 0 &&
								  e <= t.width - i &&
								  n >= 0 &&
								  n <= t.height - r &&
								  at.readPixels(e, n, i, r, ot.convert(c), ot.convert(l), o)
								: console.error(
										"THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."
								  );
						} finally {
							s && at.bindFramebuffer(36160, x);
						}
					}
				}),
				(this.copyFramebufferToTexture = function (t, e, n) {
					void 0 === n && (n = 0);
					const i = Math.pow(2, -n),
						r = Math.floor(e.image.width * i),
						o = Math.floor(e.image.height * i),
						s = ot.convert(e.format);
					X.setTexture2D(e, 0),
						at.copyTexImage2D(3553, n, s, t.x, t.y, r, o, 0),
						V.unbindTexture();
				}),
				(this.copyTextureToTexture = function (t, e, n, i) {
					void 0 === i && (i = 0);
					const r = e.image.width,
						o = e.image.height,
						s = ot.convert(n.format),
						a = ot.convert(n.type);
					X.setTexture2D(n, 0),
						at.pixelStorei(37440, n.flipY),
						at.pixelStorei(37441, n.premultiplyAlpha),
						at.pixelStorei(3317, n.unpackAlignment),
						e.isDataTexture
							? at.texSubImage2D(3553, i, t.x, t.y, r, o, s, a, e.image.data)
							: e.isCompressedTexture
							? at.compressedTexSubImage2D(
									3553,
									i,
									t.x,
									t.y,
									e.mipmaps[0].width,
									e.mipmaps[0].height,
									s,
									e.mipmaps[0].data
							  )
							: at.texSubImage2D(3553, i, t.x, t.y, s, a, e.image),
						0 === i && n.generateMipmaps && at.generateMipmap(3553),
						V.unbindTexture();
				}),
				(this.initTexture = function (t) {
					X.setTexture2D(t, 0), V.unbindTexture();
				}),
				"undefined" != typeof __THREE_DEVTOOLS__ &&
					__THREE_DEVTOOLS__.dispatchEvent(
						new CustomEvent("observe", { detail: this })
					);
		}
		function fo(t) {
			po.call(this, t);
		}
		function mo(t, e) {
			(this.name = ""),
				(this.color = new je(t)),
				(this.density = void 0 !== e ? e : 25e-5);
		}
		function go(t, e, n) {
			(this.name = ""),
				(this.color = new je(t)),
				(this.near = void 0 !== e ? e : 1),
				(this.far = void 0 !== n ? n : 1e3);
		}
		function vo(t, e) {
			(this.array = t),
				(this.stride = e),
				(this.count = void 0 !== t ? t.length / e : 0),
				(this.usage = 35044),
				(this.updateRange = { offset: 0, count: -1 }),
				(this.version = 0),
				(this.uuid = pt.generateUUID());
		}
		(ao.prototype = Object.assign(Object.create(Qn.prototype), {
			constructor: ao,
			isArrayCamera: !0,
		})),
			(co.prototype = Object.assign(Object.create(Qt.prototype), {
				constructor: co,
				isGroup: !0,
			})),
			Object.assign(lo.prototype, {
				constructor: lo,
				getHandSpace: function () {
					if (
						null === this._hand &&
						((this._hand = new co()),
						(this._hand.matrixAutoUpdate = !1),
						(this._hand.visible = !1),
						(this._hand.joints = []),
						(this._hand.inputState = { pinching: !1 }),
						window.XRHand)
					)
						for (let t = 0; t <= window.XRHand.LITTLE_PHALANX_TIP; t++) {
							let t = new co();
							(t.matrixAutoUpdate = !1),
								(t.visible = !1),
								this._hand.joints.push(t),
								this._hand.add(t);
						}
					return this._hand;
				},
				getTargetRaySpace: function () {
					return (
						null === this._targetRay &&
							((this._targetRay = new co()),
							(this._targetRay.matrixAutoUpdate = !1),
							(this._targetRay.visible = !1)),
						this._targetRay
					);
				},
				getGripSpace: function () {
					return (
						null === this._grip &&
							((this._grip = new co()),
							(this._grip.matrixAutoUpdate = !1),
							(this._grip.visible = !1)),
						this._grip
					);
				},
				dispatchEvent: function (t) {
					return (
						null !== this._targetRay && this._targetRay.dispatchEvent(t),
						null !== this._grip && this._grip.dispatchEvent(t),
						null !== this._hand && this._hand.dispatchEvent(t),
						this
					);
				},
				disconnect: function (t) {
					return (
						this.dispatchEvent({ type: "disconnected", data: t }),
						null !== this._targetRay && (this._targetRay.visible = !1),
						null !== this._grip && (this._grip.visible = !1),
						null !== this._hand && (this._hand.visible = !1),
						this
					);
				},
				update: function (t, e, n) {
					let i = null,
						r = null,
						o = null;
					const s = this._targetRay,
						a = this._grip,
						c = this._hand;
					if (t)
						if (t.hand) {
							o = !0;
							for (let i = 0; i <= window.XRHand.LITTLE_PHALANX_TIP; i++)
								if (t.hand[i]) {
									let r = e.getJointPose(t.hand[i], n);
									const o = c.joints[i];
									null !== r &&
										(o.matrix.fromArray(r.transform.matrix),
										o.matrix.decompose(o.position, o.rotation, o.scale),
										(o.jointRadius = r.radius)),
										(o.visible = null !== r);
									const s = c.joints[window.XRHand.INDEX_PHALANX_TIP],
										a = c.joints[window.XRHand.THUMB_PHALANX_TIP],
										l = s.position.distanceTo(a.position),
										h = 0.02,
										u = 0.005;
									c.inputState.pinching && l > h + u
										? ((c.inputState.pinching = !1),
										  this.dispatchEvent({
												type: "pinchend",
												handedness: t.handedness,
												target: this,
										  }))
										: !c.inputState.pinching &&
										  l <= h - u &&
										  ((c.inputState.pinching = !0),
										  this.dispatchEvent({
												type: "pinchstart",
												handedness: t.handedness,
												target: this,
										  }));
								}
						} else
							null !== s &&
								((i = e.getPose(t.targetRaySpace, n)),
								null !== i &&
									(s.matrix.fromArray(i.transform.matrix),
									s.matrix.decompose(s.position, s.rotation, s.scale))),
								null !== a &&
									t.gripSpace &&
									((r = e.getPose(t.gripSpace, n)),
									null !== r &&
										(a.matrix.fromArray(r.transform.matrix),
										a.matrix.decompose(a.position, a.rotation, a.scale)));
					return (
						null !== s && (s.visible = null !== i),
						null !== a && (a.visible = null !== r),
						null !== c && (c.visible = null !== o),
						this
					);
				},
			}),
			Object.assign(ho.prototype, ht.prototype),
			(fo.prototype = Object.assign(Object.create(po.prototype), {
				constructor: fo,
				isWebGL1Renderer: !0,
			})),
			Object.assign(mo.prototype, {
				isFogExp2: !0,
				clone: function () {
					return new mo(this.color, this.density);
				},
				toJSON: function () {
					return {
						type: "FogExp2",
						color: this.color.getHex(),
						density: this.density,
					};
				},
			}),
			Object.assign(go.prototype, {
				isFog: !0,
				clone: function () {
					return new go(this.color, this.near, this.far);
				},
				toJSON: function () {
					return {
						type: "Fog",
						color: this.color.getHex(),
						near: this.near,
						far: this.far,
					};
				},
			}),
			Object.defineProperty(vo.prototype, "needsUpdate", {
				set: function (t) {
					!0 === t && this.version++;
				},
			}),
			Object.assign(vo.prototype, {
				isInterleavedBuffer: !0,
				onUploadCallback: function () {},
				setUsage: function (t) {
					return (this.usage = t), this;
				},
				copy: function (t) {
					return (
						(this.array = new t.array.constructor(t.array)),
						(this.count = t.count),
						(this.stride = t.stride),
						(this.usage = t.usage),
						this
					);
				},
				copyAt: function (t, e, n) {
					(t *= this.stride), (n *= e.stride);
					for (let i = 0, r = this.stride; i < r; i++)
						this.array[t + i] = e.array[n + i];
					return this;
				},
				set: function (t, e) {
					return void 0 === e && (e = 0), this.array.set(t, e), this;
				},
				clone: function (t) {
					void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
						void 0 === this.array.buffer._uuid &&
							(this.array.buffer._uuid = pt.generateUUID()),
						void 0 === t.arrayBuffers[this.array.buffer._uuid] &&
							(t.arrayBuffers[this.array.buffer._uuid] =
								this.array.slice(0).buffer);
					const e = new vo(
						new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),
						this.stride
					);
					return e.setUsage(this.usage), e;
				},
				onUpload: function (t) {
					return (this.onUploadCallback = t), this;
				},
				toJSON: function (t) {
					return (
						void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
						void 0 === this.array.buffer._uuid &&
							(this.array.buffer._uuid = pt.generateUUID()),
						void 0 === t.arrayBuffers[this.array.buffer._uuid] &&
							(t.arrayBuffers[this.array.buffer._uuid] =
								Array.prototype.slice.call(new Uint32Array(this.array.buffer))),
						{
							uuid: this.uuid,
							buffer: this.array.buffer._uuid,
							type: this.array.constructor.name,
							stride: this.stride,
						}
					);
				},
			});
		const yo = new Et();
		function xo(t, e, n, i) {
			(this.name = ""),
				(this.data = t),
				(this.itemSize = e),
				(this.offset = n),
				(this.normalized = !0 === i);
		}
		function bo(t) {
			Ze.call(this),
				(this.type = "SpriteMaterial"),
				(this.color = new je(16777215)),
				(this.map = null),
				(this.alphaMap = null),
				(this.rotation = 0),
				(this.sizeAttenuation = !0),
				(this.transparent = !0),
				this.setValues(t);
		}
		let wo;
		Object.defineProperties(xo.prototype, {
			count: {
				get: function () {
					return this.data.count;
				},
			},
			array: {
				get: function () {
					return this.data.array;
				},
			},
			needsUpdate: {
				set: function (t) {
					this.data.needsUpdate = t;
				},
			},
		}),
			Object.assign(xo.prototype, {
				isInterleavedBufferAttribute: !0,
				applyMatrix4: function (t) {
					for (let e = 0, n = this.data.count; e < n; e++)
						(yo.x = this.getX(e)),
							(yo.y = this.getY(e)),
							(yo.z = this.getZ(e)),
							yo.applyMatrix4(t),
							this.setXYZ(e, yo.x, yo.y, yo.z);
					return this;
				},
				setX: function (t, e) {
					return (
						(this.data.array[t * this.data.stride + this.offset] = e), this
					);
				},
				setY: function (t, e) {
					return (
						(this.data.array[t * this.data.stride + this.offset + 1] = e), this
					);
				},
				setZ: function (t, e) {
					return (
						(this.data.array[t * this.data.stride + this.offset + 2] = e), this
					);
				},
				setW: function (t, e) {
					return (
						(this.data.array[t * this.data.stride + this.offset + 3] = e), this
					);
				},
				getX: function (t) {
					return this.data.array[t * this.data.stride + this.offset];
				},
				getY: function (t) {
					return this.data.array[t * this.data.stride + this.offset + 1];
				},
				getZ: function (t) {
					return this.data.array[t * this.data.stride + this.offset + 2];
				},
				getW: function (t) {
					return this.data.array[t * this.data.stride + this.offset + 3];
				},
				setXY: function (t, e, n) {
					return (
						(t = t * this.data.stride + this.offset),
						(this.data.array[t + 0] = e),
						(this.data.array[t + 1] = n),
						this
					);
				},
				setXYZ: function (t, e, n, i) {
					return (
						(t = t * this.data.stride + this.offset),
						(this.data.array[t + 0] = e),
						(this.data.array[t + 1] = n),
						(this.data.array[t + 2] = i),
						this
					);
				},
				setXYZW: function (t, e, n, i, r) {
					return (
						(t = t * this.data.stride + this.offset),
						(this.data.array[t + 0] = e),
						(this.data.array[t + 1] = n),
						(this.data.array[t + 2] = i),
						(this.data.array[t + 3] = r),
						this
					);
				},
				clone: function (t) {
					if (void 0 === t) {
						console.log(
							"THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data."
						);
						const t = [];
						for (let e = 0; e < this.count; e++) {
							const n = e * this.data.stride + this.offset;
							for (let e = 0; e < this.itemSize; e++)
								t.push(this.data.array[n + e]);
						}
						return new $e(
							new this.array.constructor(t),
							this.itemSize,
							this.normalized
						);
					}
					return (
						void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
						void 0 === t.interleavedBuffers[this.data.uuid] &&
							(t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
						new xo(
							t.interleavedBuffers[this.data.uuid],
							this.itemSize,
							this.offset,
							this.normalized
						)
					);
				},
				toJSON: function (t) {
					if (void 0 === t) {
						console.log(
							"THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data."
						);
						const t = [];
						for (let e = 0; e < this.count; e++) {
							const n = e * this.data.stride + this.offset;
							for (let e = 0; e < this.itemSize; e++)
								t.push(this.data.array[n + e]);
						}
						return {
							itemSize: this.itemSize,
							type: this.array.constructor.name,
							array: t,
							normalized: this.normalized,
						};
					}
					return (
						void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
						void 0 === t.interleavedBuffers[this.data.uuid] &&
							(t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)),
						{
							isInterleavedBufferAttribute: !0,
							itemSize: this.itemSize,
							data: this.data.uuid,
							offset: this.offset,
							normalized: this.normalized,
						}
					);
				},
			}),
			(bo.prototype = Object.create(Ze.prototype)),
			(bo.prototype.constructor = bo),
			(bo.prototype.isSpriteMaterial = !0),
			(bo.prototype.copy = function (t) {
				return (
					Ze.prototype.copy.call(this, t),
					this.color.copy(t.color),
					(this.map = t.map),
					(this.alphaMap = t.alphaMap),
					(this.rotation = t.rotation),
					(this.sizeAttenuation = t.sizeAttenuation),
					this
				);
			});
		const _o = new Et(),
			Mo = new Et(),
			So = new Et(),
			To = new ft(),
			Eo = new ft(),
			Ao = new Dt(),
			Lo = new Et(),
			Ro = new Et(),
			Po = new Et(),
			Co = new ft(),
			Io = new ft(),
			Oo = new ft();
		function Do(t) {
			if ((Qt.call(this), (this.type = "Sprite"), void 0 === wo)) {
				wo = new xn();
				const t = new vo(
					new Float32Array([
						-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5,
						0.5, 0, 0, 1,
					]),
					5
				);
				wo.setIndex([0, 1, 2, 0, 2, 3]),
					wo.setAttribute("position", new xo(t, 3, 0, !1)),
					wo.setAttribute("uv", new xo(t, 2, 3, !1));
			}
			(this.geometry = wo),
				(this.material = void 0 !== t ? t : new bo()),
				(this.center = new ft(0.5, 0.5));
		}
		function No(t, e, n, i, r, o) {
			To.subVectors(t, n).addScalar(0.5).multiply(i),
				void 0 !== r
					? ((Eo.x = o * To.x - r * To.y), (Eo.y = r * To.x + o * To.y))
					: Eo.copy(To),
				t.copy(e),
				(t.x += Eo.x),
				(t.y += Eo.y),
				t.applyMatrix4(Ao);
		}
		Do.prototype = Object.assign(Object.create(Qt.prototype), {
			constructor: Do,
			isSprite: !0,
			raycast: function (t, e) {
				null === t.camera &&
					console.error(
						'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
					),
					Mo.setFromMatrixScale(this.matrixWorld),
					Ao.copy(t.camera.matrixWorld),
					this.modelViewMatrix.multiplyMatrices(
						t.camera.matrixWorldInverse,
						this.matrixWorld
					),
					So.setFromMatrixPosition(this.modelViewMatrix),
					t.camera.isPerspectiveCamera &&
						!1 === this.material.sizeAttenuation &&
						Mo.multiplyScalar(-So.z);
				const n = this.material.rotation;
				let i, r;
				0 !== n && ((r = Math.cos(n)), (i = Math.sin(n)));
				const o = this.center;
				No(Lo.set(-0.5, -0.5, 0), So, o, Mo, i, r),
					No(Ro.set(0.5, -0.5, 0), So, o, Mo, i, r),
					No(Po.set(0.5, 0.5, 0), So, o, Mo, i, r),
					Co.set(0, 0),
					Io.set(1, 0),
					Oo.set(1, 1);
				let s = t.ray.intersectTriangle(Lo, Ro, Po, !1, _o);
				if (
					null === s &&
					(No(Ro.set(-0.5, 0.5, 0), So, o, Mo, i, r),
					Io.set(0, 1),
					(s = t.ray.intersectTriangle(Lo, Po, Ro, !1, _o)),
					null === s)
				)
					return;
				const a = t.ray.origin.distanceTo(_o);
				a < t.near ||
					a > t.far ||
					e.push({
						distance: a,
						point: _o.clone(),
						uv: Be.getUV(_o, Lo, Ro, Po, Co, Io, Oo, new ft()),
						face: null,
						object: this,
					});
			},
			copy: function (t) {
				return (
					Qt.prototype.copy.call(this, t),
					void 0 !== t.center && this.center.copy(t.center),
					(this.material = t.material),
					this
				);
			},
		});
		const zo = new Et(),
			Uo = new Et();
		function Ho() {
			Qt.call(this),
				(this._currentLevel = 0),
				(this.type = "LOD"),
				Object.defineProperties(this, {
					levels: { enumerable: !0, value: [] },
				}),
				(this.autoUpdate = !0);
		}
		function Bo(t, e) {
			t &&
				t.isGeometry &&
				console.error(
					"THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
				),
				Un.call(this, t, e),
				(this.type = "SkinnedMesh"),
				(this.bindMode = "attached"),
				(this.bindMatrix = new Dt()),
				(this.bindMatrixInverse = new Dt());
		}
		(Ho.prototype = Object.assign(Object.create(Qt.prototype), {
			constructor: Ho,
			isLOD: !0,
			copy: function (t) {
				Qt.prototype.copy.call(this, t, !1);
				const e = t.levels;
				for (let t = 0, n = e.length; t < n; t++) {
					const n = e[t];
					this.addLevel(n.object.clone(), n.distance);
				}
				return (this.autoUpdate = t.autoUpdate), this;
			},
			addLevel: function (t, e) {
				void 0 === e && (e = 0), (e = Math.abs(e));
				const n = this.levels;
				let i;
				for (i = 0; i < n.length && !(e < n[i].distance); i++);
				return n.splice(i, 0, { distance: e, object: t }), this.add(t), this;
			},
			getCurrentLevel: function () {
				return this._currentLevel;
			},
			getObjectForDistance: function (t) {
				const e = this.levels;
				if (e.length > 0) {
					let n, i;
					for (n = 1, i = e.length; n < i && !(t < e[n].distance); n++);
					return e[n - 1].object;
				}
				return null;
			},
			raycast: function (t, e) {
				if (this.levels.length > 0) {
					zo.setFromMatrixPosition(this.matrixWorld);
					const n = t.ray.origin.distanceTo(zo);
					this.getObjectForDistance(n).raycast(t, e);
				}
			},
			update: function (t) {
				const e = this.levels;
				if (e.length > 1) {
					zo.setFromMatrixPosition(t.matrixWorld),
						Uo.setFromMatrixPosition(this.matrixWorld);
					const n = zo.distanceTo(Uo) / t.zoom;
					let i, r;
					for (
						e[0].object.visible = !0, i = 1, r = e.length;
						i < r && n >= e[i].distance;
						i++
					)
						(e[i - 1].object.visible = !1), (e[i].object.visible = !0);
					for (this._currentLevel = i - 1; i < r; i++) e[i].object.visible = !1;
				}
			},
			toJSON: function (t) {
				const e = Qt.prototype.toJSON.call(this, t);
				!1 === this.autoUpdate && (e.object.autoUpdate = !1),
					(e.object.levels = []);
				const n = this.levels;
				for (let t = 0, i = n.length; t < i; t++) {
					const i = n[t];
					e.object.levels.push({ object: i.object.uuid, distance: i.distance });
				}
				return e;
			},
		})),
			(Bo.prototype = Object.assign(Object.create(Un.prototype), {
				constructor: Bo,
				isSkinnedMesh: !0,
				copy: function (t) {
					return (
						Un.prototype.copy.call(this, t),
						(this.bindMode = t.bindMode),
						this.bindMatrix.copy(t.bindMatrix),
						this.bindMatrixInverse.copy(t.bindMatrixInverse),
						(this.skeleton = t.skeleton),
						this
					);
				},
				bind: function (t, e) {
					(this.skeleton = t),
						void 0 === e &&
							(this.updateMatrixWorld(!0),
							this.skeleton.calculateInverses(),
							(e = this.matrixWorld)),
						this.bindMatrix.copy(e),
						this.bindMatrixInverse.getInverse(e);
				},
				pose: function () {
					this.skeleton.pose();
				},
				normalizeSkinWeights: function () {
					const t = new bt(),
						e = this.geometry.attributes.skinWeight;
					for (let n = 0, i = e.count; n < i; n++) {
						(t.x = e.getX(n)),
							(t.y = e.getY(n)),
							(t.z = e.getZ(n)),
							(t.w = e.getW(n));
						const i = 1 / t.manhattanLength();
						i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0),
							e.setXYZW(n, t.x, t.y, t.z, t.w);
					}
				},
				updateMatrixWorld: function (t) {
					Un.prototype.updateMatrixWorld.call(this, t),
						"attached" === this.bindMode
							? this.bindMatrixInverse.getInverse(this.matrixWorld)
							: "detached" === this.bindMode
							? this.bindMatrixInverse.getInverse(this.bindMatrix)
							: console.warn(
									"THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
							  );
				},
				boneTransform: (function () {
					const t = new Et(),
						e = new bt(),
						n = new bt(),
						i = new Et(),
						r = new Dt();
					return function (o, s) {
						const a = this.skeleton,
							c = this.geometry;
						e.fromBufferAttribute(c.attributes.skinIndex, o),
							n.fromBufferAttribute(c.attributes.skinWeight, o),
							t
								.fromBufferAttribute(c.attributes.position, o)
								.applyMatrix4(this.bindMatrix),
							s.set(0, 0, 0);
						for (let o = 0; o < 4; o++) {
							const c = n.getComponent(o);
							if (0 !== c) {
								const n = e.getComponent(o);
								r.multiplyMatrices(a.bones[n].matrixWorld, a.boneInverses[n]),
									s.addScaledVector(i.copy(t).applyMatrix4(r), c);
							}
						}
						return s.applyMatrix4(this.bindMatrixInverse);
					};
				})(),
			}));
		const Fo = new Dt(),
			ko = new Dt();
		function Go(t, e) {
			if (
				((t = t || []),
				(this.bones = t.slice(0)),
				(this.boneMatrices = new Float32Array(16 * this.bones.length)),
				(this.frame = -1),
				void 0 === e)
			)
				this.calculateInverses();
			else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
			else {
				console.warn("THREE.Skeleton boneInverses is the wrong length."),
					(this.boneInverses = []);
				for (let t = 0, e = this.bones.length; t < e; t++)
					this.boneInverses.push(new Dt());
			}
		}
		function jo() {
			Qt.call(this), (this.type = "Bone");
		}
		Object.assign(Go.prototype, {
			calculateInverses: function () {
				this.boneInverses = [];
				for (let t = 0, e = this.bones.length; t < e; t++) {
					const e = new Dt();
					this.bones[t] && e.getInverse(this.bones[t].matrixWorld),
						this.boneInverses.push(e);
				}
			},
			pose: function () {
				for (let t = 0, e = this.bones.length; t < e; t++) {
					const e = this.bones[t];
					e && e.matrixWorld.getInverse(this.boneInverses[t]);
				}
				for (let t = 0, e = this.bones.length; t < e; t++) {
					const e = this.bones[t];
					e &&
						(e.parent && e.parent.isBone
							? (e.matrix.getInverse(e.parent.matrixWorld),
							  e.matrix.multiply(e.matrixWorld))
							: e.matrix.copy(e.matrixWorld),
						e.matrix.decompose(e.position, e.quaternion, e.scale));
				}
			},
			update: function () {
				const t = this.bones,
					e = this.boneInverses,
					n = this.boneMatrices,
					i = this.boneTexture;
				for (let i = 0, r = t.length; i < r; i++) {
					const r = t[i] ? t[i].matrixWorld : ko;
					Fo.multiplyMatrices(r, e[i]), Fo.toArray(n, 16 * i);
				}
				void 0 !== i && (i.needsUpdate = !0);
			},
			clone: function () {
				return new Go(this.bones, this.boneInverses);
			},
			getBoneByName: function (t) {
				for (let e = 0, n = this.bones.length; e < n; e++) {
					const n = this.bones[e];
					if (n.name === t) return n;
				}
			},
			dispose: function () {
				this.boneTexture &&
					(this.boneTexture.dispose(), (this.boneTexture = void 0));
			},
		}),
			(jo.prototype = Object.assign(Object.create(Qt.prototype), {
				constructor: jo,
				isBone: !0,
			}));
		const Vo = new Dt(),
			Wo = new Dt(),
			qo = [],
			Xo = new Un();
		function Yo(t, e, n) {
			Un.call(this, t, e),
				(this.instanceMatrix = new $e(new Float32Array(16 * n), 16)),
				(this.count = n),
				(this.frustumCulled = !1);
		}
		function Zo(t) {
			Ze.call(this),
				(this.type = "LineBasicMaterial"),
				(this.color = new je(16777215)),
				(this.linewidth = 1),
				(this.linecap = "round"),
				(this.linejoin = "round"),
				(this.morphTargets = !1),
				this.setValues(t);
		}
		(Yo.prototype = Object.assign(Object.create(Un.prototype), {
			constructor: Yo,
			isInstancedMesh: !0,
			copy: function (t) {
				return (
					Un.prototype.copy.call(this, t),
					this.instanceMatrix.copy(t.instanceMatrix),
					(this.count = t.count),
					this
				);
			},
			getMatrixAt: function (t, e) {
				e.fromArray(this.instanceMatrix.array, 16 * t);
			},
			raycast: function (t, e) {
				const n = this.matrixWorld,
					i = this.count;
				if (
					((Xo.geometry = this.geometry),
					(Xo.material = this.material),
					void 0 !== Xo.material)
				)
					for (let r = 0; r < i; r++) {
						this.getMatrixAt(r, Vo),
							Wo.multiplyMatrices(n, Vo),
							(Xo.matrixWorld = Wo),
							Xo.raycast(t, qo);
						for (let t = 0, n = qo.length; t < n; t++) {
							const n = qo[t];
							(n.instanceId = r), (n.object = this), e.push(n);
						}
						qo.length = 0;
					}
			},
			setMatrixAt: function (t, e) {
				e.toArray(this.instanceMatrix.array, 16 * t);
			},
			updateMorphTargets: function () {},
		})),
			(Zo.prototype = Object.create(Ze.prototype)),
			(Zo.prototype.constructor = Zo),
			(Zo.prototype.isLineBasicMaterial = !0),
			(Zo.prototype.copy = function (t) {
				return (
					Ze.prototype.copy.call(this, t),
					this.color.copy(t.color),
					(this.linewidth = t.linewidth),
					(this.linecap = t.linecap),
					(this.linejoin = t.linejoin),
					(this.morphTargets = t.morphTargets),
					this
				);
			});
		const Jo = new Et(),
			Ko = new Et(),
			Qo = new Dt(),
			$o = new Se(),
			ts = new ge();
		function es(t, e, n) {
			1 === n &&
				console.error(
					"THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."
				),
				Qt.call(this),
				(this.type = "Line"),
				(this.geometry = void 0 !== t ? t : new xn()),
				(this.material = void 0 !== e ? e : new Zo()),
				this.updateMorphTargets();
		}
		es.prototype = Object.assign(Object.create(Qt.prototype), {
			constructor: es,
			isLine: !0,
			copy: function (t) {
				return (
					Qt.prototype.copy.call(this, t),
					(this.material = t.material),
					(this.geometry = t.geometry),
					this
				);
			},
			computeLineDistances: function () {
				const t = this.geometry;
				if (t.isBufferGeometry)
					if (null === t.index) {
						const e = t.attributes.position,
							n = [0];
						for (let t = 1, i = e.count; t < i; t++)
							Jo.fromBufferAttribute(e, t - 1),
								Ko.fromBufferAttribute(e, t),
								(n[t] = n[t - 1]),
								(n[t] += Jo.distanceTo(Ko));
						t.setAttribute("lineDistance", new cn(n, 1));
					} else
						console.warn(
							"THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
						);
				else if (t.isGeometry) {
					const e = t.vertices,
						n = t.lineDistances;
					n[0] = 0;
					for (let t = 1, i = e.length; t < i; t++)
						(n[t] = n[t - 1]), (n[t] += e[t - 1].distanceTo(e[t]));
				}
				return this;
			},
			raycast: function (t, e) {
				const n = this.geometry,
					i = this.matrixWorld,
					r = t.params.Line.threshold;
				if (
					(null === n.boundingSphere && n.computeBoundingSphere(),
					ts.copy(n.boundingSphere),
					ts.applyMatrix4(i),
					(ts.radius += r),
					!1 === t.ray.intersectsSphere(ts))
				)
					return;
				Qo.getInverse(i), $o.copy(t.ray).applyMatrix4(Qo);
				const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
					s = o * o,
					a = new Et(),
					c = new Et(),
					l = new Et(),
					h = new Et(),
					u = this && this.isLineSegments ? 2 : 1;
				if (n.isBufferGeometry) {
					const i = n.index,
						r = n.attributes.position.array;
					if (null !== i) {
						const n = i.array;
						for (let i = 0, o = n.length - 1; i < o; i += u) {
							const o = n[i],
								u = n[i + 1];
							a.fromArray(r, 3 * o), c.fromArray(r, 3 * u);
							if ($o.distanceSqToSegment(a, c, h, l) > s) continue;
							h.applyMatrix4(this.matrixWorld);
							const d = t.ray.origin.distanceTo(h);
							d < t.near ||
								d > t.far ||
								e.push({
									distance: d,
									point: l.clone().applyMatrix4(this.matrixWorld),
									index: i,
									face: null,
									faceIndex: null,
									object: this,
								});
						}
					} else
						for (let n = 0, i = r.length / 3 - 1; n < i; n += u) {
							a.fromArray(r, 3 * n), c.fromArray(r, 3 * n + 3);
							if ($o.distanceSqToSegment(a, c, h, l) > s) continue;
							h.applyMatrix4(this.matrixWorld);
							const i = t.ray.origin.distanceTo(h);
							i < t.near ||
								i > t.far ||
								e.push({
									distance: i,
									point: l.clone().applyMatrix4(this.matrixWorld),
									index: n,
									face: null,
									faceIndex: null,
									object: this,
								});
						}
				} else if (n.isGeometry) {
					const i = n.vertices,
						r = i.length;
					for (let n = 0; n < r - 1; n += u) {
						if ($o.distanceSqToSegment(i[n], i[n + 1], h, l) > s) continue;
						h.applyMatrix4(this.matrixWorld);
						const r = t.ray.origin.distanceTo(h);
						r < t.near ||
							r > t.far ||
							e.push({
								distance: r,
								point: l.clone().applyMatrix4(this.matrixWorld),
								index: n,
								face: null,
								faceIndex: null,
								object: this,
							});
					}
				}
			},
			updateMorphTargets: function () {
				const t = this.geometry;
				if (t.isBufferGeometry) {
					const e = t.morphAttributes,
						n = Object.keys(e);
					if (n.length > 0) {
						const t = e[n[0]];
						if (void 0 !== t) {
							(this.morphTargetInfluences = []),
								(this.morphTargetDictionary = {});
							for (let e = 0, n = t.length; e < n; e++) {
								const n = t[e].name || String(e);
								this.morphTargetInfluences.push(0),
									(this.morphTargetDictionary[n] = e);
							}
						}
					}
				} else {
					const e = t.morphTargets;
					void 0 !== e &&
						e.length > 0 &&
						console.error(
							"THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
						);
				}
			},
		});
		const ns = new Et(),
			is = new Et();
		function rs(t, e) {
			es.call(this, t, e), (this.type = "LineSegments");
		}
		function os(t, e) {
			es.call(this, t, e), (this.type = "LineLoop");
		}
		function ss(t) {
			Ze.call(this),
				(this.type = "PointsMaterial"),
				(this.color = new je(16777215)),
				(this.map = null),
				(this.alphaMap = null),
				(this.size = 1),
				(this.sizeAttenuation = !0),
				(this.morphTargets = !1),
				this.setValues(t);
		}
		(rs.prototype = Object.assign(Object.create(es.prototype), {
			constructor: rs,
			isLineSegments: !0,
			computeLineDistances: function () {
				const t = this.geometry;
				if (t.isBufferGeometry)
					if (null === t.index) {
						const e = t.attributes.position,
							n = [];
						for (let t = 0, i = e.count; t < i; t += 2)
							ns.fromBufferAttribute(e, t),
								is.fromBufferAttribute(e, t + 1),
								(n[t] = 0 === t ? 0 : n[t - 1]),
								(n[t + 1] = n[t] + ns.distanceTo(is));
						t.setAttribute("lineDistance", new cn(n, 1));
					} else
						console.warn(
							"THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
						);
				else if (t.isGeometry) {
					const e = t.vertices,
						n = t.lineDistances;
					for (let t = 0, i = e.length; t < i; t += 2)
						ns.copy(e[t]),
							is.copy(e[t + 1]),
							(n[t] = 0 === t ? 0 : n[t - 1]),
							(n[t + 1] = n[t] + ns.distanceTo(is));
				}
				return this;
			},
		})),
			(os.prototype = Object.assign(Object.create(es.prototype), {
				constructor: os,
				isLineLoop: !0,
			})),
			(ss.prototype = Object.create(Ze.prototype)),
			(ss.prototype.constructor = ss),
			(ss.prototype.isPointsMaterial = !0),
			(ss.prototype.copy = function (t) {
				return (
					Ze.prototype.copy.call(this, t),
					this.color.copy(t.color),
					(this.map = t.map),
					(this.alphaMap = t.alphaMap),
					(this.size = t.size),
					(this.sizeAttenuation = t.sizeAttenuation),
					(this.morphTargets = t.morphTargets),
					this
				);
			});
		const as = new Dt(),
			cs = new Se(),
			ls = new ge(),
			hs = new Et();
		function us(t, e) {
			Qt.call(this),
				(this.type = "Points"),
				(this.geometry = void 0 !== t ? t : new xn()),
				(this.material = void 0 !== e ? e : new ss()),
				this.updateMorphTargets();
		}
		function ds(t, e, n, i, r, o, s) {
			const a = cs.distanceSqToPoint(t);
			if (a < n) {
				const n = new Et();
				cs.closestPointToPoint(t, n), n.applyMatrix4(i);
				const c = r.ray.origin.distanceTo(n);
				if (c < r.near || c > r.far) return;
				o.push({
					distance: c,
					distanceToRay: Math.sqrt(a),
					point: n,
					index: e,
					face: null,
					object: s,
				});
			}
		}
		function ps(t, e, n, i, r, o, s, a, c) {
			xt.call(this, t, e, n, i, r, o, s, a, c),
				(this.format = void 0 !== s ? s : 1022),
				(this.minFilter = void 0 !== o ? o : 1006),
				(this.magFilter = void 0 !== r ? r : 1006),
				(this.generateMipmaps = !1);
			const l = this;
			"requestVideoFrameCallback" in t &&
				t.requestVideoFrameCallback(function e() {
					(l.needsUpdate = !0), t.requestVideoFrameCallback(e);
				});
		}
		function fs(t, e, n, i, r, o, s, a, c, l, h, u) {
			xt.call(this, null, o, s, a, c, l, i, r, h, u),
				(this.image = { width: e, height: n }),
				(this.mipmaps = t),
				(this.flipY = !1),
				(this.generateMipmaps = !1);
		}
		function ms(t, e, n, i, r, o, s, a, c) {
			xt.call(this, t, e, n, i, r, o, s, a, c), (this.needsUpdate = !0);
		}
		function gs(t, e, n, i, r, o, s, a, c, l) {
			if (1026 !== (l = void 0 !== l ? l : 1026) && 1027 !== l)
				throw new Error(
					"DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
				);
			void 0 === n && 1026 === l && (n = 1012),
				void 0 === n && 1027 === l && (n = 1020),
				xt.call(this, null, i, r, o, s, a, l, n, c),
				(this.image = { width: t, height: e }),
				(this.magFilter = void 0 !== s ? s : 1003),
				(this.minFilter = void 0 !== a ? a : 1003),
				(this.flipY = !1),
				(this.generateMipmaps = !1);
		}
		function vs(t) {
			xn.call(this), (this.type = "WireframeGeometry");
			const e = [],
				n = [0, 0],
				i = {},
				r = ["a", "b", "c"];
			if (t && t.isGeometry) {
				const o = t.faces;
				for (let t = 0, e = o.length; t < e; t++) {
					const e = o[t];
					for (let t = 0; t < 3; t++) {
						const o = e[r[t]],
							s = e[r[(t + 1) % 3]];
						(n[0] = Math.min(o, s)), (n[1] = Math.max(o, s));
						const a = n[0] + "," + n[1];
						void 0 === i[a] && (i[a] = { index1: n[0], index2: n[1] });
					}
				}
				for (const n in i) {
					const r = i[n];
					let o = t.vertices[r.index1];
					e.push(o.x, o.y, o.z),
						(o = t.vertices[r.index2]),
						e.push(o.x, o.y, o.z);
				}
			} else if (t && t.isBufferGeometry) {
				let r = new Et();
				if (null !== t.index) {
					const o = t.attributes.position,
						s = t.index;
					let a = t.groups;
					0 === a.length &&
						(a = [{ start: 0, count: s.count, materialIndex: 0 }]);
					for (let t = 0, e = a.length; t < e; ++t) {
						const e = a[t],
							r = e.start;
						for (let t = r, o = r + e.count; t < o; t += 3)
							for (let e = 0; e < 3; e++) {
								const r = s.getX(t + e),
									o = s.getX(t + ((e + 1) % 3));
								(n[0] = Math.min(r, o)), (n[1] = Math.max(r, o));
								const a = n[0] + "," + n[1];
								void 0 === i[a] && (i[a] = { index1: n[0], index2: n[1] });
							}
					}
					for (const t in i) {
						const n = i[t];
						r.fromBufferAttribute(o, n.index1),
							e.push(r.x, r.y, r.z),
							r.fromBufferAttribute(o, n.index2),
							e.push(r.x, r.y, r.z);
					}
				} else {
					const n = t.attributes.position;
					for (let t = 0, i = n.count / 3; t < i; t++)
						for (let i = 0; i < 3; i++) {
							const o = 3 * t + i;
							r.fromBufferAttribute(n, o), e.push(r.x, r.y, r.z);
							const s = 3 * t + ((i + 1) % 3);
							r.fromBufferAttribute(n, s), e.push(r.x, r.y, r.z);
						}
				}
			}
			this.setAttribute("position", new cn(e, 3));
		}
		function ys(t, e, n) {
			Vn.call(this),
				(this.type = "ParametricGeometry"),
				(this.parameters = { func: t, slices: e, stacks: n }),
				this.fromBufferGeometry(new xs(t, e, n)),
				this.mergeVertices();
		}
		function xs(t, e, n) {
			xn.call(this),
				(this.type = "ParametricBufferGeometry"),
				(this.parameters = { func: t, slices: e, stacks: n });
			const i = [],
				r = [],
				o = [],
				s = [],
				a = 1e-5,
				c = new Et(),
				l = new Et(),
				h = new Et(),
				u = new Et(),
				d = new Et();
			t.length < 3 &&
				console.error(
					"THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter."
				);
			const p = e + 1;
			for (let i = 0; i <= n; i++) {
				const p = i / n;
				for (let n = 0; n <= e; n++) {
					const i = n / e;
					t(i, p, l),
						r.push(l.x, l.y, l.z),
						i - a >= 0
							? (t(i - a, p, h), u.subVectors(l, h))
							: (t(i + a, p, h), u.subVectors(h, l)),
						p - a >= 0
							? (t(i, p - a, h), d.subVectors(l, h))
							: (t(i, p + a, h), d.subVectors(h, l)),
						c.crossVectors(u, d).normalize(),
						o.push(c.x, c.y, c.z),
						s.push(i, p);
				}
			}
			for (let t = 0; t < n; t++)
				for (let n = 0; n < e; n++) {
					const e = t * p + n,
						r = t * p + n + 1,
						o = (t + 1) * p + n + 1,
						s = (t + 1) * p + n;
					i.push(e, r, s), i.push(r, o, s);
				}
			this.setIndex(i),
				this.setAttribute("position", new cn(r, 3)),
				this.setAttribute("normal", new cn(o, 3)),
				this.setAttribute("uv", new cn(s, 2));
		}
		function bs(t, e, n, i) {
			Vn.call(this),
				(this.type = "PolyhedronGeometry"),
				(this.parameters = { vertices: t, indices: e, radius: n, detail: i }),
				this.fromBufferGeometry(new ws(t, e, n, i)),
				this.mergeVertices();
		}
		function ws(t, e, n, i) {
			xn.call(this),
				(this.type = "PolyhedronBufferGeometry"),
				(this.parameters = { vertices: t, indices: e, radius: n, detail: i }),
				(n = n || 1);
			const r = [],
				o = [];
			function s(t, e, n, i) {
				const r = Math.pow(2, i),
					o = [];
				for (let i = 0; i <= r; i++) {
					o[i] = [];
					const s = t.clone().lerp(n, i / r),
						a = e.clone().lerp(n, i / r),
						c = r - i;
					for (let t = 0; t <= c; t++)
						o[i][t] = 0 === t && i === r ? s : s.clone().lerp(a, t / c);
				}
				for (let t = 0; t < r; t++)
					for (let e = 0; e < 2 * (r - t) - 1; e++) {
						const n = Math.floor(e / 2);
						e % 2 == 0
							? (a(o[t][n + 1]), a(o[t + 1][n]), a(o[t][n]))
							: (a(o[t][n + 1]), a(o[t + 1][n + 1]), a(o[t + 1][n]));
					}
			}
			function a(t) {
				r.push(t.x, t.y, t.z);
			}
			function c(e, n) {
				const i = 3 * e;
				(n.x = t[i + 0]), (n.y = t[i + 1]), (n.z = t[i + 2]);
			}
			function l(t, e, n, i) {
				i < 0 && 1 === t.x && (o[e] = t.x - 1),
					0 === n.x && 0 === n.z && (o[e] = i / 2 / Math.PI + 0.5);
			}
			function h(t) {
				return Math.atan2(t.z, -t.x);
			}
			!(function (t) {
				const n = new Et(),
					i = new Et(),
					r = new Et();
				for (let o = 0; o < e.length; o += 3)
					c(e[o + 0], n), c(e[o + 1], i), c(e[o + 2], r), s(n, i, r, t);
			})((i = i || 0)),
				(function (t) {
					const e = new Et();
					for (let n = 0; n < r.length; n += 3)
						(e.x = r[n + 0]),
							(e.y = r[n + 1]),
							(e.z = r[n + 2]),
							e.normalize().multiplyScalar(t),
							(r[n + 0] = e.x),
							(r[n + 1] = e.y),
							(r[n + 2] = e.z);
				})(n),
				(function () {
					const t = new Et();
					for (let n = 0; n < r.length; n += 3) {
						(t.x = r[n + 0]), (t.y = r[n + 1]), (t.z = r[n + 2]);
						const i = h(t) / 2 / Math.PI + 0.5,
							s =
								((e = t),
								Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI +
									0.5);
						o.push(i, 1 - s);
					}
					var e;
					(function () {
						const t = new Et(),
							e = new Et(),
							n = new Et(),
							i = new Et(),
							s = new ft(),
							a = new ft(),
							c = new ft();
						for (let u = 0, d = 0; u < r.length; u += 9, d += 6) {
							t.set(r[u + 0], r[u + 1], r[u + 2]),
								e.set(r[u + 3], r[u + 4], r[u + 5]),
								n.set(r[u + 6], r[u + 7], r[u + 8]),
								s.set(o[d + 0], o[d + 1]),
								a.set(o[d + 2], o[d + 3]),
								c.set(o[d + 4], o[d + 5]),
								i.copy(t).add(e).add(n).divideScalar(3);
							const p = h(i);
							l(s, d + 0, t, p), l(a, d + 2, e, p), l(c, d + 4, n, p);
						}
					})(),
						(function () {
							for (let t = 0; t < o.length; t += 6) {
								const e = o[t + 0],
									n = o[t + 2],
									i = o[t + 4],
									r = Math.max(e, n, i),
									s = Math.min(e, n, i);
								r > 0.9 &&
									s < 0.1 &&
									(e < 0.2 && (o[t + 0] += 1),
									n < 0.2 && (o[t + 2] += 1),
									i < 0.2 && (o[t + 4] += 1));
							}
						})();
				})(),
				this.setAttribute("position", new cn(r, 3)),
				this.setAttribute("normal", new cn(r.slice(), 3)),
				this.setAttribute("uv", new cn(o, 2)),
				0 === i ? this.computeVertexNormals() : this.normalizeNormals();
		}
		function _s(t, e) {
			Vn.call(this),
				(this.type = "TetrahedronGeometry"),
				(this.parameters = { radius: t, detail: e }),
				this.fromBufferGeometry(new Ms(t, e)),
				this.mergeVertices();
		}
		function Ms(t, e) {
			ws.call(
				this,
				[1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
				[2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1],
				t,
				e
			),
				(this.type = "TetrahedronBufferGeometry"),
				(this.parameters = { radius: t, detail: e });
		}
		function Ss(t, e) {
			Vn.call(this),
				(this.type = "OctahedronGeometry"),
				(this.parameters = { radius: t, detail: e }),
				this.fromBufferGeometry(new Ts(t, e)),
				this.mergeVertices();
		}
		function Ts(t, e) {
			ws.call(
				this,
				[1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
				[
					0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4,
					2,
				],
				t,
				e
			),
				(this.type = "OctahedronBufferGeometry"),
				(this.parameters = { radius: t, detail: e });
		}
		function Es(t, e) {
			Vn.call(this),
				(this.type = "IcosahedronGeometry"),
				(this.parameters = { radius: t, detail: e }),
				this.fromBufferGeometry(new As(t, e)),
				this.mergeVertices();
		}
		function As(t, e) {
			const n = (1 + Math.sqrt(5)) / 2,
				i = [
					-1,
					n,
					0,
					1,
					n,
					0,
					-1,
					-n,
					0,
					1,
					-n,
					0,
					0,
					-1,
					n,
					0,
					1,
					n,
					0,
					-1,
					-n,
					0,
					1,
					-n,
					n,
					0,
					-1,
					n,
					0,
					1,
					-n,
					0,
					-1,
					-n,
					0,
					1,
				];
			ws.call(
				this,
				i,
				[
					0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4,
					11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3,
					8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
				],
				t,
				e
			),
				(this.type = "IcosahedronBufferGeometry"),
				(this.parameters = { radius: t, detail: e });
		}
		function Ls(t, e) {
			Vn.call(this),
				(this.type = "DodecahedronGeometry"),
				(this.parameters = { radius: t, detail: e }),
				this.fromBufferGeometry(new Rs(t, e)),
				this.mergeVertices();
		}
		function Rs(t, e) {
			const n = (1 + Math.sqrt(5)) / 2,
				i = 1 / n,
				r = [
					-1,
					-1,
					-1,
					-1,
					-1,
					1,
					-1,
					1,
					-1,
					-1,
					1,
					1,
					1,
					-1,
					-1,
					1,
					-1,
					1,
					1,
					1,
					-1,
					1,
					1,
					1,
					0,
					-i,
					-n,
					0,
					-i,
					n,
					0,
					i,
					-n,
					0,
					i,
					n,
					-i,
					-n,
					0,
					-i,
					n,
					0,
					i,
					-n,
					0,
					i,
					n,
					0,
					-n,
					0,
					-i,
					n,
					0,
					-i,
					-n,
					0,
					i,
					n,
					0,
					i,
				];
			ws.call(
				this,
				r,
				[
					3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4,
					8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1,
					18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2,
					3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8,
					11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1,
					12, 14, 1, 14, 5, 1, 5, 9,
				],
				t,
				e
			),
				(this.type = "DodecahedronBufferGeometry"),
				(this.parameters = { radius: t, detail: e });
		}
		function Ps(t, e, n, i, r, o) {
			Vn.call(this),
				(this.type = "TubeGeometry"),
				(this.parameters = {
					path: t,
					tubularSegments: e,
					radius: n,
					radialSegments: i,
					closed: r,
				}),
				void 0 !== o &&
					console.warn("THREE.TubeGeometry: taper has been removed.");
			const s = new Cs(t, e, n, i, r);
			(this.tangents = s.tangents),
				(this.normals = s.normals),
				(this.binormals = s.binormals),
				this.fromBufferGeometry(s),
				this.mergeVertices();
		}
		function Cs(t, e, n, i, r) {
			xn.call(this),
				(this.type = "TubeBufferGeometry"),
				(this.parameters = {
					path: t,
					tubularSegments: e,
					radius: n,
					radialSegments: i,
					closed: r,
				}),
				(e = e || 64),
				(n = n || 1),
				(i = i || 8),
				(r = r || !1);
			const o = t.computeFrenetFrames(e, r);
			(this.tangents = o.tangents),
				(this.normals = o.normals),
				(this.binormals = o.binormals);
			const s = new Et(),
				a = new Et(),
				c = new ft();
			let l = new Et();
			const h = [],
				u = [],
				d = [],
				p = [];
			function f(r) {
				l = t.getPointAt(r / e, l);
				const c = o.normals[r],
					d = o.binormals[r];
				for (let t = 0; t <= i; t++) {
					const e = (t / i) * Math.PI * 2,
						r = Math.sin(e),
						o = -Math.cos(e);
					(a.x = o * c.x + r * d.x),
						(a.y = o * c.y + r * d.y),
						(a.z = o * c.z + r * d.z),
						a.normalize(),
						u.push(a.x, a.y, a.z),
						(s.x = l.x + n * a.x),
						(s.y = l.y + n * a.y),
						(s.z = l.z + n * a.z),
						h.push(s.x, s.y, s.z);
				}
			}
			!(function () {
				for (let t = 0; t < e; t++) f(t);
				f(!1 === r ? e : 0),
					(function () {
						for (let t = 0; t <= e; t++)
							for (let n = 0; n <= i; n++)
								(c.x = t / e), (c.y = n / i), d.push(c.x, c.y);
					})(),
					(function () {
						for (let t = 1; t <= e; t++)
							for (let e = 1; e <= i; e++) {
								const n = (i + 1) * (t - 1) + (e - 1),
									r = (i + 1) * t + (e - 1),
									o = (i + 1) * t + e,
									s = (i + 1) * (t - 1) + e;
								p.push(n, r, s), p.push(r, o, s);
							}
					})();
			})(),
				this.setIndex(p),
				this.setAttribute("position", new cn(h, 3)),
				this.setAttribute("normal", new cn(u, 3)),
				this.setAttribute("uv", new cn(d, 2));
		}
		function Is(t, e, n, i, r, o, s) {
			Vn.call(this),
				(this.type = "TorusKnotGeometry"),
				(this.parameters = {
					radius: t,
					tube: e,
					tubularSegments: n,
					radialSegments: i,
					p: r,
					q: o,
				}),
				void 0 !== s &&
					console.warn(
						"THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."
					),
				this.fromBufferGeometry(new Os(t, e, n, i, r, o)),
				this.mergeVertices();
		}
		function Os(t, e, n, i, r, o) {
			xn.call(this),
				(this.type = "TorusKnotBufferGeometry"),
				(this.parameters = {
					radius: t,
					tube: e,
					tubularSegments: n,
					radialSegments: i,
					p: r,
					q: o,
				}),
				(t = t || 1),
				(e = e || 0.4),
				(n = Math.floor(n) || 64),
				(i = Math.floor(i) || 8),
				(r = r || 2),
				(o = o || 3);
			const s = [],
				a = [],
				c = [],
				l = [],
				h = new Et(),
				u = new Et(),
				d = new Et(),
				p = new Et(),
				f = new Et(),
				m = new Et(),
				g = new Et();
			for (let s = 0; s <= n; ++s) {
				const y = (s / n) * r * Math.PI * 2;
				v(y, r, o, t, d),
					v(y + 0.01, r, o, t, p),
					m.subVectors(p, d),
					g.addVectors(p, d),
					f.crossVectors(m, g),
					g.crossVectors(f, m),
					f.normalize(),
					g.normalize();
				for (let t = 0; t <= i; ++t) {
					const r = (t / i) * Math.PI * 2,
						o = -e * Math.cos(r),
						p = e * Math.sin(r);
					(h.x = d.x + (o * g.x + p * f.x)),
						(h.y = d.y + (o * g.y + p * f.y)),
						(h.z = d.z + (o * g.z + p * f.z)),
						a.push(h.x, h.y, h.z),
						u.subVectors(h, d).normalize(),
						c.push(u.x, u.y, u.z),
						l.push(s / n),
						l.push(t / i);
				}
			}
			for (let t = 1; t <= n; t++)
				for (let e = 1; e <= i; e++) {
					const n = (i + 1) * (t - 1) + (e - 1),
						r = (i + 1) * t + (e - 1),
						o = (i + 1) * t + e,
						a = (i + 1) * (t - 1) + e;
					s.push(n, r, a), s.push(r, o, a);
				}
			function v(t, e, n, i, r) {
				const o = Math.cos(t),
					s = Math.sin(t),
					a = (n / e) * t,
					c = Math.cos(a);
				(r.x = i * (2 + c) * 0.5 * o),
					(r.y = i * (2 + c) * s * 0.5),
					(r.z = i * Math.sin(a) * 0.5);
			}
			this.setIndex(s),
				this.setAttribute("position", new cn(a, 3)),
				this.setAttribute("normal", new cn(c, 3)),
				this.setAttribute("uv", new cn(l, 2));
		}
		function Ds(t, e, n, i, r) {
			Vn.call(this),
				(this.type = "TorusGeometry"),
				(this.parameters = {
					radius: t,
					tube: e,
					radialSegments: n,
					tubularSegments: i,
					arc: r,
				}),
				this.fromBufferGeometry(new Ns(t, e, n, i, r)),
				this.mergeVertices();
		}
		function Ns(t, e, n, i, r) {
			xn.call(this),
				(this.type = "TorusBufferGeometry"),
				(this.parameters = {
					radius: t,
					tube: e,
					radialSegments: n,
					tubularSegments: i,
					arc: r,
				}),
				(t = t || 1),
				(e = e || 0.4),
				(n = Math.floor(n) || 8),
				(i = Math.floor(i) || 6),
				(r = r || 2 * Math.PI);
			const o = [],
				s = [],
				a = [],
				c = [],
				l = new Et(),
				h = new Et(),
				u = new Et();
			for (let o = 0; o <= n; o++)
				for (let d = 0; d <= i; d++) {
					const p = (d / i) * r,
						f = (o / n) * Math.PI * 2;
					(h.x = (t + e * Math.cos(f)) * Math.cos(p)),
						(h.y = (t + e * Math.cos(f)) * Math.sin(p)),
						(h.z = e * Math.sin(f)),
						s.push(h.x, h.y, h.z),
						(l.x = t * Math.cos(p)),
						(l.y = t * Math.sin(p)),
						u.subVectors(h, l).normalize(),
						a.push(u.x, u.y, u.z),
						c.push(d / i),
						c.push(o / n);
				}
			for (let t = 1; t <= n; t++)
				for (let e = 1; e <= i; e++) {
					const n = (i + 1) * t + e - 1,
						r = (i + 1) * (t - 1) + e - 1,
						s = (i + 1) * (t - 1) + e,
						a = (i + 1) * t + e;
					o.push(n, r, a), o.push(r, s, a);
				}
			this.setIndex(o),
				this.setAttribute("position", new cn(s, 3)),
				this.setAttribute("normal", new cn(a, 3)),
				this.setAttribute("uv", new cn(c, 2));
		}
		(us.prototype = Object.assign(Object.create(Qt.prototype), {
			constructor: us,
			isPoints: !0,
			copy: function (t) {
				return (
					Qt.prototype.copy.call(this, t),
					(this.material = t.material),
					(this.geometry = t.geometry),
					this
				);
			},
			raycast: function (t, e) {
				const n = this.geometry,
					i = this.matrixWorld,
					r = t.params.Points.threshold;
				if (
					(null === n.boundingSphere && n.computeBoundingSphere(),
					ls.copy(n.boundingSphere),
					ls.applyMatrix4(i),
					(ls.radius += r),
					!1 === t.ray.intersectsSphere(ls))
				)
					return;
				as.getInverse(i), cs.copy(t.ray).applyMatrix4(as);
				const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
					s = o * o;
				if (n.isBufferGeometry) {
					const r = n.index,
						o = n.attributes.position.array;
					if (null !== r) {
						const n = r.array;
						for (let r = 0, a = n.length; r < a; r++) {
							const a = n[r];
							hs.fromArray(o, 3 * a), ds(hs, a, s, i, t, e, this);
						}
					} else
						for (let n = 0, r = o.length / 3; n < r; n++)
							hs.fromArray(o, 3 * n), ds(hs, n, s, i, t, e, this);
				} else {
					const r = n.vertices;
					for (let n = 0, o = r.length; n < o; n++)
						ds(r[n], n, s, i, t, e, this);
				}
			},
			updateMorphTargets: function () {
				const t = this.geometry;
				if (t.isBufferGeometry) {
					const e = t.morphAttributes,
						n = Object.keys(e);
					if (n.length > 0) {
						const t = e[n[0]];
						if (void 0 !== t) {
							(this.morphTargetInfluences = []),
								(this.morphTargetDictionary = {});
							for (let e = 0, n = t.length; e < n; e++) {
								const n = t[e].name || String(e);
								this.morphTargetInfluences.push(0),
									(this.morphTargetDictionary[n] = e);
							}
						}
					}
				} else {
					const e = t.morphTargets;
					void 0 !== e &&
						e.length > 0 &&
						console.error(
							"THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
						);
				}
			},
		})),
			(ps.prototype = Object.assign(Object.create(xt.prototype), {
				constructor: ps,
				isVideoTexture: !0,
				update: function () {
					const t = this.image;
					!1 === "requestVideoFrameCallback" in t &&
						t.readyState >= t.HAVE_CURRENT_DATA &&
						(this.needsUpdate = !0);
				},
			})),
			(fs.prototype = Object.create(xt.prototype)),
			(fs.prototype.constructor = fs),
			(fs.prototype.isCompressedTexture = !0),
			(ms.prototype = Object.create(xt.prototype)),
			(ms.prototype.constructor = ms),
			(ms.prototype.isCanvasTexture = !0),
			(gs.prototype = Object.create(xt.prototype)),
			(gs.prototype.constructor = gs),
			(gs.prototype.isDepthTexture = !0),
			(vs.prototype = Object.create(xn.prototype)),
			(vs.prototype.constructor = vs),
			(ys.prototype = Object.create(Vn.prototype)),
			(ys.prototype.constructor = ys),
			(xs.prototype = Object.create(xn.prototype)),
			(xs.prototype.constructor = xs),
			(bs.prototype = Object.create(Vn.prototype)),
			(bs.prototype.constructor = bs),
			(ws.prototype = Object.create(xn.prototype)),
			(ws.prototype.constructor = ws),
			(_s.prototype = Object.create(Vn.prototype)),
			(_s.prototype.constructor = _s),
			(Ms.prototype = Object.create(ws.prototype)),
			(Ms.prototype.constructor = Ms),
			(Ss.prototype = Object.create(Vn.prototype)),
			(Ss.prototype.constructor = Ss),
			(Ts.prototype = Object.create(ws.prototype)),
			(Ts.prototype.constructor = Ts),
			(Es.prototype = Object.create(Vn.prototype)),
			(Es.prototype.constructor = Es),
			(As.prototype = Object.create(ws.prototype)),
			(As.prototype.constructor = As),
			(Ls.prototype = Object.create(Vn.prototype)),
			(Ls.prototype.constructor = Ls),
			(Rs.prototype = Object.create(ws.prototype)),
			(Rs.prototype.constructor = Rs),
			(Ps.prototype = Object.create(Vn.prototype)),
			(Ps.prototype.constructor = Ps),
			(Cs.prototype = Object.create(xn.prototype)),
			(Cs.prototype.constructor = Cs),
			(Cs.prototype.toJSON = function () {
				const t = xn.prototype.toJSON.call(this);
				return (t.path = this.parameters.path.toJSON()), t;
			}),
			(Is.prototype = Object.create(Vn.prototype)),
			(Is.prototype.constructor = Is),
			(Os.prototype = Object.create(xn.prototype)),
			(Os.prototype.constructor = Os),
			(Ds.prototype = Object.create(Vn.prototype)),
			(Ds.prototype.constructor = Ds),
			(Ns.prototype = Object.create(xn.prototype)),
			(Ns.prototype.constructor = Ns);
		const zs = function (t, e, n) {
			n = n || 2;
			let i,
				r,
				o,
				s,
				a,
				c,
				l,
				h = e && e.length,
				u = h ? e[0] * n : t.length,
				d = Us(t, 0, u, n, !0),
				p = [];
			if (!d || d.next === d.prev) return p;
			if (
				(h &&
					(d = (function (t, e, n, i) {
						let r,
							o,
							s,
							a,
							c,
							l = [];
						for (r = 0, o = e.length; r < o; r++)
							(s = e[r] * i),
								(a = r < o - 1 ? e[r + 1] * i : t.length),
								(c = Us(t, s, a, i, !1)),
								c === c.next && (c.steiner = !0),
								l.push(Ys(c));
						for (l.sort(Vs), r = 0; r < l.length; r++)
							Ws(l[r], n), (n = Hs(n, n.next));
						return n;
					})(t, e, d, n)),
				t.length > 80 * n)
			) {
				(i = o = t[0]), (r = s = t[1]);
				for (let e = n; e < u; e += n)
					(a = t[e]),
						(c = t[e + 1]),
						a < i && (i = a),
						c < r && (r = c),
						a > o && (o = a),
						c > s && (s = c);
				(l = Math.max(o - i, s - r)), (l = 0 !== l ? 1 / l : 0);
			}
			return Bs(d, p, n, i, r, l), p;
		};
		function Us(t, e, n, i, r) {
			let o, s;
			if (
				r ===
				(function (t, e, n, i) {
					let r = 0;
					for (let o = e, s = n - i; o < n; o += i)
						(r += (t[s] - t[o]) * (t[o + 1] + t[s + 1])), (s = o);
					return r;
				})(t, e, n, i) >
					0
			)
				for (o = e; o < n; o += i) s = ra(o, t[o], t[o + 1], s);
			else for (o = n - i; o >= e; o -= i) s = ra(o, t[o], t[o + 1], s);
			return s && Qs(s, s.next) && (oa(s), (s = s.next)), s;
		}
		function Hs(t, e) {
			if (!t) return t;
			e || (e = t);
			let n,
				i = t;
			do {
				if (
					((n = !1),
					i.steiner || (!Qs(i, i.next) && 0 !== Ks(i.prev, i, i.next)))
				)
					i = i.next;
				else {
					if ((oa(i), (i = e = i.prev), i === i.next)) break;
					n = !0;
				}
			} while (n || i !== e);
			return e;
		}
		function Bs(t, e, n, i, r, o, s) {
			if (!t) return;
			!s &&
				o &&
				(function (t, e, n, i) {
					let r = t;
					do {
						null === r.z && (r.z = Xs(r.x, r.y, e, n, i)),
							(r.prevZ = r.prev),
							(r.nextZ = r.next),
							(r = r.next);
					} while (r !== t);
					(r.prevZ.nextZ = null),
						(r.prevZ = null),
						(function (t) {
							let e,
								n,
								i,
								r,
								o,
								s,
								a,
								c,
								l = 1;
							do {
								for (n = t, t = null, o = null, s = 0; n; ) {
									for (
										s++, i = n, a = 0, e = 0;
										e < l && (a++, (i = i.nextZ), i);
										e++
									);
									for (c = l; a > 0 || (c > 0 && i); )
										0 !== a && (0 === c || !i || n.z <= i.z)
											? ((r = n), (n = n.nextZ), a--)
											: ((r = i), (i = i.nextZ), c--),
											o ? (o.nextZ = r) : (t = r),
											(r.prevZ = o),
											(o = r);
									n = i;
								}
								(o.nextZ = null), (l *= 2);
							} while (s > 1);
						})(r);
				})(t, i, r, o);
			let a,
				c,
				l = t;
			for (; t.prev !== t.next; )
				if (((a = t.prev), (c = t.next), o ? ks(t, i, r, o) : Fs(t)))
					e.push(a.i / n),
						e.push(t.i / n),
						e.push(c.i / n),
						oa(t),
						(t = c.next),
						(l = c.next);
				else if ((t = c) === l) {
					s
						? 1 === s
							? Bs((t = Gs(Hs(t), e, n)), e, n, i, r, o, 2)
							: 2 === s && js(t, e, n, i, r, o)
						: Bs(Hs(t), e, n, i, r, o, 1);
					break;
				}
		}
		function Fs(t) {
			let e = t.prev,
				n = t,
				i = t.next;
			if (Ks(e, n, i) >= 0) return !1;
			let r = t.next.next;
			for (; r !== t.prev; ) {
				if (
					Zs(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) &&
					Ks(r.prev, r, r.next) >= 0
				)
					return !1;
				r = r.next;
			}
			return !0;
		}
		function ks(t, e, n, i) {
			let r = t.prev,
				o = t,
				s = t.next;
			if (Ks(r, o, s) >= 0) return !1;
			let a = r.x < o.x ? (r.x < s.x ? r.x : s.x) : o.x < s.x ? o.x : s.x,
				c = r.y < o.y ? (r.y < s.y ? r.y : s.y) : o.y < s.y ? o.y : s.y,
				l = r.x > o.x ? (r.x > s.x ? r.x : s.x) : o.x > s.x ? o.x : s.x,
				h = r.y > o.y ? (r.y > s.y ? r.y : s.y) : o.y > s.y ? o.y : s.y,
				u = Xs(a, c, e, n, i),
				d = Xs(l, h, e, n, i),
				p = t.prevZ,
				f = t.nextZ;
			for (; p && p.z >= u && f && f.z <= d; ) {
				if (
					p !== t.prev &&
					p !== t.next &&
					Zs(r.x, r.y, o.x, o.y, s.x, s.y, p.x, p.y) &&
					Ks(p.prev, p, p.next) >= 0
				)
					return !1;
				if (
					((p = p.prevZ),
					f !== t.prev &&
						f !== t.next &&
						Zs(r.x, r.y, o.x, o.y, s.x, s.y, f.x, f.y) &&
						Ks(f.prev, f, f.next) >= 0)
				)
					return !1;
				f = f.nextZ;
			}
			for (; p && p.z >= u; ) {
				if (
					p !== t.prev &&
					p !== t.next &&
					Zs(r.x, r.y, o.x, o.y, s.x, s.y, p.x, p.y) &&
					Ks(p.prev, p, p.next) >= 0
				)
					return !1;
				p = p.prevZ;
			}
			for (; f && f.z <= d; ) {
				if (
					f !== t.prev &&
					f !== t.next &&
					Zs(r.x, r.y, o.x, o.y, s.x, s.y, f.x, f.y) &&
					Ks(f.prev, f, f.next) >= 0
				)
					return !1;
				f = f.nextZ;
			}
			return !0;
		}
		function Gs(t, e, n) {
			let i = t;
			do {
				let r = i.prev,
					o = i.next.next;
				!Qs(r, o) &&
					$s(r, i, i.next, o) &&
					na(r, o) &&
					na(o, r) &&
					(e.push(r.i / n),
					e.push(i.i / n),
					e.push(o.i / n),
					oa(i),
					oa(i.next),
					(i = t = o)),
					(i = i.next);
			} while (i !== t);
			return Hs(i);
		}
		function js(t, e, n, i, r, o) {
			let s = t;
			do {
				let t = s.next.next;
				for (; t !== s.prev; ) {
					if (s.i !== t.i && Js(s, t)) {
						let a = ia(s, t);
						return (
							(s = Hs(s, s.next)),
							(a = Hs(a, a.next)),
							Bs(s, e, n, i, r, o),
							void Bs(a, e, n, i, r, o)
						);
					}
					t = t.next;
				}
				s = s.next;
			} while (s !== t);
		}
		function Vs(t, e) {
			return t.x - e.x;
		}
		function Ws(t, e) {
			if (
				(e = (function (t, e) {
					let n,
						i = e,
						r = t.x,
						o = t.y,
						s = -1 / 0;
					do {
						if (o <= i.y && o >= i.next.y && i.next.y !== i.y) {
							let t = i.x + ((o - i.y) * (i.next.x - i.x)) / (i.next.y - i.y);
							if (t <= r && t > s) {
								if (((s = t), t === r)) {
									if (o === i.y) return i;
									if (o === i.next.y) return i.next;
								}
								n = i.x < i.next.x ? i : i.next;
							}
						}
						i = i.next;
					} while (i !== e);
					if (!n) return null;
					if (r === s) return n;
					let a,
						c = n,
						l = n.x,
						h = n.y,
						u = 1 / 0;
					i = n;
					do {
						r >= i.x &&
							i.x >= l &&
							r !== i.x &&
							Zs(o < h ? r : s, o, l, h, o < h ? s : r, o, i.x, i.y) &&
							((a = Math.abs(o - i.y) / (r - i.x)),
							na(i, t) &&
								(a < u ||
									(a === u && (i.x > n.x || (i.x === n.x && qs(n, i))))) &&
								((n = i), (u = a))),
							(i = i.next);
					} while (i !== c);
					return n;
				})(t, e))
			) {
				const n = ia(e, t);
				Hs(e, e.next), Hs(n, n.next);
			}
		}
		function qs(t, e) {
			return Ks(t.prev, t, e.prev) < 0 && Ks(e.next, t, t.next) < 0;
		}
		function Xs(t, e, n, i, r) {
			return (
				(t =
					1431655765 &
					((t =
						858993459 &
						((t =
							252645135 &
							((t = 16711935 & ((t = 32767 * (t - n) * r) | (t << 8))) |
								(t << 4))) |
							(t << 2))) |
						(t << 1))) |
				((e =
					1431655765 &
					((e =
						858993459 &
						((e =
							252645135 &
							((e = 16711935 & ((e = 32767 * (e - i) * r) | (e << 8))) |
								(e << 4))) |
							(e << 2))) |
						(e << 1))) <<
					1)
			);
		}
		function Ys(t) {
			let e = t,
				n = t;
			do {
				(e.x < n.x || (e.x === n.x && e.y < n.y)) && (n = e), (e = e.next);
			} while (e !== t);
			return n;
		}
		function Zs(t, e, n, i, r, o, s, a) {
			return (
				(r - s) * (e - a) - (t - s) * (o - a) >= 0 &&
				(t - s) * (i - a) - (n - s) * (e - a) >= 0 &&
				(n - s) * (o - a) - (r - s) * (i - a) >= 0
			);
		}
		function Js(t, e) {
			return (
				t.next.i !== e.i &&
				t.prev.i !== e.i &&
				!(function (t, e) {
					let n = t;
					do {
						if (
							n.i !== t.i &&
							n.next.i !== t.i &&
							n.i !== e.i &&
							n.next.i !== e.i &&
							$s(n, n.next, t, e)
						)
							return !0;
						n = n.next;
					} while (n !== t);
					return !1;
				})(t, e) &&
				((na(t, e) &&
					na(e, t) &&
					(function (t, e) {
						let n = t,
							i = !1,
							r = (t.x + e.x) / 2,
							o = (t.y + e.y) / 2;
						do {
							n.y > o != n.next.y > o &&
								n.next.y !== n.y &&
								r < ((n.next.x - n.x) * (o - n.y)) / (n.next.y - n.y) + n.x &&
								(i = !i),
								(n = n.next);
						} while (n !== t);
						return i;
					})(t, e) &&
					(Ks(t.prev, t, e.prev) || Ks(t, e.prev, e))) ||
					(Qs(t, e) && Ks(t.prev, t, t.next) > 0 && Ks(e.prev, e, e.next) > 0))
			);
		}
		function Ks(t, e, n) {
			return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
		}
		function Qs(t, e) {
			return t.x === e.x && t.y === e.y;
		}
		function $s(t, e, n, i) {
			const r = ea(Ks(t, e, n)),
				o = ea(Ks(t, e, i)),
				s = ea(Ks(n, i, t)),
				a = ea(Ks(n, i, e));
			return (
				(r !== o && s !== a) ||
				!(0 !== r || !ta(t, n, e)) ||
				!(0 !== o || !ta(t, i, e)) ||
				!(0 !== s || !ta(n, t, i)) ||
				!(0 !== a || !ta(n, e, i))
			);
		}
		function ta(t, e, n) {
			return (
				e.x <= Math.max(t.x, n.x) &&
				e.x >= Math.min(t.x, n.x) &&
				e.y <= Math.max(t.y, n.y) &&
				e.y >= Math.min(t.y, n.y)
			);
		}
		function ea(t) {
			return t > 0 ? 1 : t < 0 ? -1 : 0;
		}
		function na(t, e) {
			return Ks(t.prev, t, t.next) < 0
				? Ks(t, e, t.next) >= 0 && Ks(t, t.prev, e) >= 0
				: Ks(t, e, t.prev) < 0 || Ks(t, t.next, e) < 0;
		}
		function ia(t, e) {
			let n = new sa(t.i, t.x, t.y),
				i = new sa(e.i, e.x, e.y),
				r = t.next,
				o = e.prev;
			return (
				(t.next = e),
				(e.prev = t),
				(n.next = r),
				(r.prev = n),
				(i.next = n),
				(n.prev = i),
				(o.next = i),
				(i.prev = o),
				i
			);
		}
		function ra(t, e, n, i) {
			const r = new sa(t, e, n);
			return (
				i
					? ((r.next = i.next), (r.prev = i), (i.next.prev = r), (i.next = r))
					: ((r.prev = r), (r.next = r)),
				r
			);
		}
		function oa(t) {
			(t.next.prev = t.prev),
				(t.prev.next = t.next),
				t.prevZ && (t.prevZ.nextZ = t.nextZ),
				t.nextZ && (t.nextZ.prevZ = t.prevZ);
		}
		function sa(t, e, n) {
			(this.i = t),
				(this.x = e),
				(this.y = n),
				(this.prev = null),
				(this.next = null),
				(this.z = null),
				(this.prevZ = null),
				(this.nextZ = null),
				(this.steiner = !1);
		}
		const aa = {
			area: function (t) {
				const e = t.length;
				let n = 0;
				for (let i = e - 1, r = 0; r < e; i = r++)
					n += t[i].x * t[r].y - t[r].x * t[i].y;
				return 0.5 * n;
			},
			isClockWise: function (t) {
				return aa.area(t) < 0;
			},
			triangulateShape: function (t, e) {
				const n = [],
					i = [],
					r = [];
				ca(t), la(n, t);
				let o = t.length;
				e.forEach(ca);
				for (let t = 0; t < e.length; t++)
					i.push(o), (o += e[t].length), la(n, e[t]);
				const s = zs(n, i);
				for (let t = 0; t < s.length; t += 3) r.push(s.slice(t, t + 3));
				return r;
			},
		};
		function ca(t) {
			const e = t.length;
			e > 2 && t[e - 1].equals(t[0]) && t.pop();
		}
		function la(t, e) {
			for (let n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y);
		}
		function ha(t, e) {
			Vn.call(this),
				(this.type = "ExtrudeGeometry"),
				(this.parameters = { shapes: t, options: e }),
				this.fromBufferGeometry(new ua(t, e)),
				this.mergeVertices();
		}
		function ua(t, e) {
			xn.call(this),
				(this.type = "ExtrudeBufferGeometry"),
				(this.parameters = { shapes: t, options: e }),
				(t = Array.isArray(t) ? t : [t]);
			const n = this,
				i = [],
				r = [];
			for (let e = 0, n = t.length; e < n; e++) {
				o(t[e]);
			}
			function o(t) {
				const o = [],
					s = void 0 !== e.curveSegments ? e.curveSegments : 12,
					a = void 0 !== e.steps ? e.steps : 1;
				let c = void 0 !== e.depth ? e.depth : 100,
					l = void 0 === e.bevelEnabled || e.bevelEnabled,
					h = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
					u = void 0 !== e.bevelSize ? e.bevelSize : h - 2,
					d = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
					p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
				const f = e.extrudePath,
					m = void 0 !== e.UVGenerator ? e.UVGenerator : da;
				void 0 !== e.amount &&
					(console.warn(
						"THREE.ExtrudeBufferGeometry: amount has been renamed to depth."
					),
					(c = e.amount));
				let g,
					v,
					y,
					x,
					b,
					w = !1;
				f &&
					((g = f.getSpacedPoints(a)),
					(w = !0),
					(l = !1),
					(v = f.computeFrenetFrames(a, !1)),
					(y = new Et()),
					(x = new Et()),
					(b = new Et())),
					l || ((p = 0), (h = 0), (u = 0), (d = 0));
				const _ = t.extractPoints(s);
				let M = _.shape;
				const S = _.holes;
				if (!aa.isClockWise(M)) {
					M = M.reverse();
					for (let t = 0, e = S.length; t < e; t++) {
						const e = S[t];
						aa.isClockWise(e) && (S[t] = e.reverse());
					}
				}
				const T = aa.triangulateShape(M, S),
					E = M;
				for (let t = 0, e = S.length; t < e; t++) {
					const e = S[t];
					M = M.concat(e);
				}
				function A(t, e, n) {
					return (
						e || console.error("THREE.ExtrudeGeometry: vec does not exist"),
						e.clone().multiplyScalar(n).add(t)
					);
				}
				const L = M.length,
					R = T.length;
				function P(t, e, n) {
					let i, r, o;
					const s = t.x - e.x,
						a = t.y - e.y,
						c = n.x - t.x,
						l = n.y - t.y,
						h = s * s + a * a,
						u = s * l - a * c;
					if (Math.abs(u) > Number.EPSILON) {
						const u = Math.sqrt(h),
							d = Math.sqrt(c * c + l * l),
							p = e.x - a / u,
							f = e.y + s / u,
							m =
								((n.x - l / d - p) * l - (n.y + c / d - f) * c) /
								(s * l - a * c);
						(i = p + s * m - t.x), (r = f + a * m - t.y);
						const g = i * i + r * r;
						if (g <= 2) return new ft(i, r);
						o = Math.sqrt(g / 2);
					} else {
						let t = !1;
						s > Number.EPSILON
							? c > Number.EPSILON && (t = !0)
							: s < -Number.EPSILON
							? c < -Number.EPSILON && (t = !0)
							: Math.sign(a) === Math.sign(l) && (t = !0),
							t
								? ((i = -a), (r = s), (o = Math.sqrt(h)))
								: ((i = s), (r = a), (o = Math.sqrt(h / 2)));
					}
					return new ft(i / o, r / o);
				}
				const C = [];
				for (
					let t = 0, e = E.length, n = e - 1, i = t + 1;
					t < e;
					t++, n++, i++
				)
					n === e && (n = 0), i === e && (i = 0), (C[t] = P(E[t], E[n], E[i]));
				const I = [];
				let O,
					D = C.concat();
				for (let t = 0, e = S.length; t < e; t++) {
					const e = S[t];
					O = [];
					for (
						let t = 0, n = e.length, i = n - 1, r = t + 1;
						t < n;
						t++, i++, r++
					)
						i === n && (i = 0),
							r === n && (r = 0),
							(O[t] = P(e[t], e[i], e[r]));
					I.push(O), (D = D.concat(O));
				}
				for (let t = 0; t < p; t++) {
					const e = t / p,
						n = h * Math.cos((e * Math.PI) / 2),
						i = u * Math.sin((e * Math.PI) / 2) + d;
					for (let t = 0, e = E.length; t < e; t++) {
						const e = A(E[t], C[t], i);
						U(e.x, e.y, -n);
					}
					for (let t = 0, e = S.length; t < e; t++) {
						const e = S[t];
						O = I[t];
						for (let t = 0, r = e.length; t < r; t++) {
							const r = A(e[t], O[t], i);
							U(r.x, r.y, -n);
						}
					}
				}
				const N = u + d;
				for (let t = 0; t < L; t++) {
					const e = l ? A(M[t], D[t], N) : M[t];
					w
						? (x.copy(v.normals[0]).multiplyScalar(e.x),
						  y.copy(v.binormals[0]).multiplyScalar(e.y),
						  b.copy(g[0]).add(x).add(y),
						  U(b.x, b.y, b.z))
						: U(e.x, e.y, 0);
				}
				for (let t = 1; t <= a; t++)
					for (let e = 0; e < L; e++) {
						const n = l ? A(M[e], D[e], N) : M[e];
						w
							? (x.copy(v.normals[t]).multiplyScalar(n.x),
							  y.copy(v.binormals[t]).multiplyScalar(n.y),
							  b.copy(g[t]).add(x).add(y),
							  U(b.x, b.y, b.z))
							: U(n.x, n.y, (c / a) * t);
					}
				for (let t = p - 1; t >= 0; t--) {
					const e = t / p,
						n = h * Math.cos((e * Math.PI) / 2),
						i = u * Math.sin((e * Math.PI) / 2) + d;
					for (let t = 0, e = E.length; t < e; t++) {
						const e = A(E[t], C[t], i);
						U(e.x, e.y, c + n);
					}
					for (let t = 0, e = S.length; t < e; t++) {
						const e = S[t];
						O = I[t];
						for (let t = 0, r = e.length; t < r; t++) {
							const r = A(e[t], O[t], i);
							w ? U(r.x, r.y + g[a - 1].y, g[a - 1].x + n) : U(r.x, r.y, c + n);
						}
					}
				}
				function z(t, e) {
					let n = t.length;
					for (; --n >= 0; ) {
						const i = n;
						let r = n - 1;
						r < 0 && (r = t.length - 1);
						for (let t = 0, n = a + 2 * p; t < n; t++) {
							const n = L * t,
								o = L * (t + 1);
							B(e + i + n, e + r + n, e + r + o, e + i + o);
						}
					}
				}
				function U(t, e, n) {
					o.push(t), o.push(e), o.push(n);
				}
				function H(t, e, r) {
					F(t), F(e), F(r);
					const o = i.length / 3,
						s = m.generateTopUV(n, i, o - 3, o - 2, o - 1);
					k(s[0]), k(s[1]), k(s[2]);
				}
				function B(t, e, r, o) {
					F(t), F(e), F(o), F(e), F(r), F(o);
					const s = i.length / 3,
						a = m.generateSideWallUV(n, i, s - 6, s - 3, s - 2, s - 1);
					k(a[0]), k(a[1]), k(a[3]), k(a[1]), k(a[2]), k(a[3]);
				}
				function F(t) {
					i.push(o[3 * t + 0]), i.push(o[3 * t + 1]), i.push(o[3 * t + 2]);
				}
				function k(t) {
					r.push(t.x), r.push(t.y);
				}
				!(function () {
					const t = i.length / 3;
					if (l) {
						let t = 0,
							e = L * t;
						for (let t = 0; t < R; t++) {
							const n = T[t];
							H(n[2] + e, n[1] + e, n[0] + e);
						}
						(t = a + 2 * p), (e = L * t);
						for (let t = 0; t < R; t++) {
							const n = T[t];
							H(n[0] + e, n[1] + e, n[2] + e);
						}
					} else {
						for (let t = 0; t < R; t++) {
							const e = T[t];
							H(e[2], e[1], e[0]);
						}
						for (let t = 0; t < R; t++) {
							const e = T[t];
							H(e[0] + L * a, e[1] + L * a, e[2] + L * a);
						}
					}
					n.addGroup(t, i.length / 3 - t, 0);
				})(),
					(function () {
						const t = i.length / 3;
						let e = 0;
						z(E, e), (e += E.length);
						for (let t = 0, n = S.length; t < n; t++) {
							const n = S[t];
							z(n, e), (e += n.length);
						}
						n.addGroup(t, i.length / 3 - t, 1);
					})();
			}
			this.setAttribute("position", new cn(i, 3)),
				this.setAttribute("uv", new cn(r, 2)),
				this.computeVertexNormals();
		}
		(ha.prototype = Object.create(Vn.prototype)),
			(ha.prototype.constructor = ha),
			(ha.prototype.toJSON = function () {
				const t = Vn.prototype.toJSON.call(this);
				return pa(this.parameters.shapes, this.parameters.options, t);
			}),
			(ua.prototype = Object.create(xn.prototype)),
			(ua.prototype.constructor = ua),
			(ua.prototype.toJSON = function () {
				const t = xn.prototype.toJSON.call(this);
				return pa(this.parameters.shapes, this.parameters.options, t);
			});
		const da = {
			generateTopUV: function (t, e, n, i, r) {
				const o = e[3 * n],
					s = e[3 * n + 1],
					a = e[3 * i],
					c = e[3 * i + 1],
					l = e[3 * r],
					h = e[3 * r + 1];
				return [new ft(o, s), new ft(a, c), new ft(l, h)];
			},
			generateSideWallUV: function (t, e, n, i, r, o) {
				const s = e[3 * n],
					a = e[3 * n + 1],
					c = e[3 * n + 2],
					l = e[3 * i],
					h = e[3 * i + 1],
					u = e[3 * i + 2],
					d = e[3 * r],
					p = e[3 * r + 1],
					f = e[3 * r + 2],
					m = e[3 * o],
					g = e[3 * o + 1],
					v = e[3 * o + 2];
				return Math.abs(a - h) < 0.01
					? [
							new ft(s, 1 - c),
							new ft(l, 1 - u),
							new ft(d, 1 - f),
							new ft(m, 1 - v),
					  ]
					: [
							new ft(a, 1 - c),
							new ft(h, 1 - u),
							new ft(p, 1 - f),
							new ft(g, 1 - v),
					  ];
			},
		};
		function pa(t, e, n) {
			if (((n.shapes = []), Array.isArray(t)))
				for (let e = 0, i = t.length; e < i; e++) {
					const i = t[e];
					n.shapes.push(i.uuid);
				}
			else n.shapes.push(t.uuid);
			return (
				void 0 !== e.extrudePath &&
					(n.options.extrudePath = e.extrudePath.toJSON()),
				n
			);
		}
		function fa(t, e) {
			Vn.call(this),
				(this.type = "TextGeometry"),
				(this.parameters = { text: t, parameters: e }),
				this.fromBufferGeometry(new ma(t, e)),
				this.mergeVertices();
		}
		function ma(t, e) {
			const n = (e = e || {}).font;
			if (!n || !n.isFont)
				return (
					console.error(
						"THREE.TextGeometry: font parameter is not an instance of THREE.Font."
					),
					new Vn()
				);
			const i = n.generateShapes(t, e.size);
			(e.depth = void 0 !== e.height ? e.height : 50),
				void 0 === e.bevelThickness && (e.bevelThickness = 10),
				void 0 === e.bevelSize && (e.bevelSize = 8),
				void 0 === e.bevelEnabled && (e.bevelEnabled = !1),
				ua.call(this, i, e),
				(this.type = "TextBufferGeometry");
		}
		function ga(t, e, n, i, r, o, s) {
			Vn.call(this),
				(this.type = "SphereGeometry"),
				(this.parameters = {
					radius: t,
					widthSegments: e,
					heightSegments: n,
					phiStart: i,
					phiLength: r,
					thetaStart: o,
					thetaLength: s,
				}),
				this.fromBufferGeometry(new va(t, e, n, i, r, o, s)),
				this.mergeVertices();
		}
		function va(t, e, n, i, r, o, s) {
			xn.call(this),
				(this.type = "SphereBufferGeometry"),
				(this.parameters = {
					radius: t,
					widthSegments: e,
					heightSegments: n,
					phiStart: i,
					phiLength: r,
					thetaStart: o,
					thetaLength: s,
				}),
				(t = t || 1),
				(e = Math.max(3, Math.floor(e) || 8)),
				(n = Math.max(2, Math.floor(n) || 6)),
				(i = void 0 !== i ? i : 0),
				(r = void 0 !== r ? r : 2 * Math.PI),
				(o = void 0 !== o ? o : 0),
				(s = void 0 !== s ? s : Math.PI);
			const a = Math.min(o + s, Math.PI);
			let c = 0;
			const l = [],
				h = new Et(),
				u = new Et(),
				d = [],
				p = [],
				f = [],
				m = [];
			for (let d = 0; d <= n; d++) {
				const g = [],
					v = d / n;
				let y = 0;
				0 == d && 0 == o
					? (y = 0.5 / e)
					: d == n && a == Math.PI && (y = -0.5 / e);
				for (let n = 0; n <= e; n++) {
					const a = n / e;
					(h.x = -t * Math.cos(i + a * r) * Math.sin(o + v * s)),
						(h.y = t * Math.cos(o + v * s)),
						(h.z = t * Math.sin(i + a * r) * Math.sin(o + v * s)),
						p.push(h.x, h.y, h.z),
						u.copy(h).normalize(),
						f.push(u.x, u.y, u.z),
						m.push(a + y, 1 - v),
						g.push(c++);
				}
				l.push(g);
			}
			for (let t = 0; t < n; t++)
				for (let i = 0; i < e; i++) {
					const e = l[t][i + 1],
						r = l[t][i],
						s = l[t + 1][i],
						c = l[t + 1][i + 1];
					(0 !== t || o > 0) && d.push(e, r, c),
						(t !== n - 1 || a < Math.PI) && d.push(r, s, c);
				}
			this.setIndex(d),
				this.setAttribute("position", new cn(p, 3)),
				this.setAttribute("normal", new cn(f, 3)),
				this.setAttribute("uv", new cn(m, 2));
		}
		function ya(t, e, n, i, r, o) {
			Vn.call(this),
				(this.type = "RingGeometry"),
				(this.parameters = {
					innerRadius: t,
					outerRadius: e,
					thetaSegments: n,
					phiSegments: i,
					thetaStart: r,
					thetaLength: o,
				}),
				this.fromBufferGeometry(new xa(t, e, n, i, r, o)),
				this.mergeVertices();
		}
		function xa(t, e, n, i, r, o) {
			xn.call(this),
				(this.type = "RingBufferGeometry"),
				(this.parameters = {
					innerRadius: t,
					outerRadius: e,
					thetaSegments: n,
					phiSegments: i,
					thetaStart: r,
					thetaLength: o,
				}),
				(t = t || 0.5),
				(e = e || 1),
				(r = void 0 !== r ? r : 0),
				(o = void 0 !== o ? o : 2 * Math.PI),
				(n = void 0 !== n ? Math.max(3, n) : 8);
			const s = [],
				a = [],
				c = [],
				l = [];
			let h = t;
			const u = (e - t) / (i = void 0 !== i ? Math.max(1, i) : 1),
				d = new Et(),
				p = new ft();
			for (let t = 0; t <= i; t++) {
				for (let t = 0; t <= n; t++) {
					const i = r + (t / n) * o;
					(d.x = h * Math.cos(i)),
						(d.y = h * Math.sin(i)),
						a.push(d.x, d.y, d.z),
						c.push(0, 0, 1),
						(p.x = (d.x / e + 1) / 2),
						(p.y = (d.y / e + 1) / 2),
						l.push(p.x, p.y);
				}
				h += u;
			}
			for (let t = 0; t < i; t++) {
				const e = t * (n + 1);
				for (let t = 0; t < n; t++) {
					const i = t + e,
						r = i,
						o = i + n + 1,
						a = i + n + 2,
						c = i + 1;
					s.push(r, o, c), s.push(o, a, c);
				}
			}
			this.setIndex(s),
				this.setAttribute("position", new cn(a, 3)),
				this.setAttribute("normal", new cn(c, 3)),
				this.setAttribute("uv", new cn(l, 2));
		}
		function ba(t, e, n, i) {
			Vn.call(this),
				(this.type = "LatheGeometry"),
				(this.parameters = {
					points: t,
					segments: e,
					phiStart: n,
					phiLength: i,
				}),
				this.fromBufferGeometry(new wa(t, e, n, i)),
				this.mergeVertices();
		}
		function wa(t, e, n, i) {
			xn.call(this),
				(this.type = "LatheBufferGeometry"),
				(this.parameters = {
					points: t,
					segments: e,
					phiStart: n,
					phiLength: i,
				}),
				(e = Math.floor(e) || 12),
				(n = n || 0),
				(i = i || 2 * Math.PI),
				(i = pt.clamp(i, 0, 2 * Math.PI));
			const r = [],
				o = [],
				s = [],
				a = 1 / e,
				c = new Et(),
				l = new ft();
			for (let r = 0; r <= e; r++) {
				const h = n + r * a * i,
					u = Math.sin(h),
					d = Math.cos(h);
				for (let n = 0; n <= t.length - 1; n++)
					(c.x = t[n].x * u),
						(c.y = t[n].y),
						(c.z = t[n].x * d),
						o.push(c.x, c.y, c.z),
						(l.x = r / e),
						(l.y = n / (t.length - 1)),
						s.push(l.x, l.y);
			}
			for (let n = 0; n < e; n++)
				for (let e = 0; e < t.length - 1; e++) {
					const i = e + n * t.length,
						o = i,
						s = i + t.length,
						a = i + t.length + 1,
						c = i + 1;
					r.push(o, s, c), r.push(s, a, c);
				}
			if (
				(this.setIndex(r),
				this.setAttribute("position", new cn(o, 3)),
				this.setAttribute("uv", new cn(s, 2)),
				this.computeVertexNormals(),
				i === 2 * Math.PI)
			) {
				const n = this.attributes.normal.array,
					i = new Et(),
					r = new Et(),
					o = new Et(),
					s = e * t.length * 3;
				for (let e = 0, a = 0; e < t.length; e++, a += 3)
					(i.x = n[a + 0]),
						(i.y = n[a + 1]),
						(i.z = n[a + 2]),
						(r.x = n[s + a + 0]),
						(r.y = n[s + a + 1]),
						(r.z = n[s + a + 2]),
						o.addVectors(i, r).normalize(),
						(n[a + 0] = n[s + a + 0] = o.x),
						(n[a + 1] = n[s + a + 1] = o.y),
						(n[a + 2] = n[s + a + 2] = o.z);
			}
		}
		function _a(t, e) {
			Vn.call(this),
				(this.type = "ShapeGeometry"),
				"object" == typeof e &&
					(console.warn(
						"THREE.ShapeGeometry: Options parameter has been removed."
					),
					(e = e.curveSegments)),
				(this.parameters = { shapes: t, curveSegments: e }),
				this.fromBufferGeometry(new Ma(t, e)),
				this.mergeVertices();
		}
		function Ma(t, e) {
			xn.call(this),
				(this.type = "ShapeBufferGeometry"),
				(this.parameters = { shapes: t, curveSegments: e }),
				(e = e || 12);
			const n = [],
				i = [],
				r = [],
				o = [];
			let s = 0,
				a = 0;
			if (!1 === Array.isArray(t)) c(t);
			else
				for (let e = 0; e < t.length; e++)
					c(t[e]), this.addGroup(s, a, e), (s += a), (a = 0);
			function c(t) {
				const s = i.length / 3,
					c = t.extractPoints(e);
				let l = c.shape;
				const h = c.holes;
				!1 === aa.isClockWise(l) && (l = l.reverse());
				for (let t = 0, e = h.length; t < e; t++) {
					const e = h[t];
					!0 === aa.isClockWise(e) && (h[t] = e.reverse());
				}
				const u = aa.triangulateShape(l, h);
				for (let t = 0, e = h.length; t < e; t++) {
					const e = h[t];
					l = l.concat(e);
				}
				for (let t = 0, e = l.length; t < e; t++) {
					const e = l[t];
					i.push(e.x, e.y, 0), r.push(0, 0, 1), o.push(e.x, e.y);
				}
				for (let t = 0, e = u.length; t < e; t++) {
					const e = u[t],
						i = e[0] + s,
						r = e[1] + s,
						o = e[2] + s;
					n.push(i, r, o), (a += 3);
				}
			}
			this.setIndex(n),
				this.setAttribute("position", new cn(i, 3)),
				this.setAttribute("normal", new cn(r, 3)),
				this.setAttribute("uv", new cn(o, 2));
		}
		function Sa(t, e) {
			if (((e.shapes = []), Array.isArray(t)))
				for (let n = 0, i = t.length; n < i; n++) {
					const i = t[n];
					e.shapes.push(i.uuid);
				}
			else e.shapes.push(t.uuid);
			return e;
		}
		function Ta(t, e) {
			xn.call(this),
				(this.type = "EdgesGeometry"),
				(this.parameters = { thresholdAngle: e }),
				(e = void 0 !== e ? e : 1);
			const n = [],
				i = Math.cos(pt.DEG2RAD * e),
				r = [0, 0],
				o = {};
			let s, a, c;
			const l = ["a", "b", "c"];
			let h;
			t.isBufferGeometry
				? ((h = new Vn()), h.fromBufferGeometry(t))
				: (h = t.clone()),
				h.mergeVertices(),
				h.computeFaceNormals();
			const u = h.vertices,
				d = h.faces;
			for (let t = 0, e = d.length; t < e; t++) {
				const e = d[t];
				for (let n = 0; n < 3; n++)
					(s = e[l[n]]),
						(a = e[l[(n + 1) % 3]]),
						(r[0] = Math.min(s, a)),
						(r[1] = Math.max(s, a)),
						(c = r[0] + "," + r[1]),
						void 0 === o[c]
							? (o[c] = { index1: r[0], index2: r[1], face1: t, face2: void 0 })
							: (o[c].face2 = t);
			}
			for (c in o) {
				const t = o[c];
				if (
					void 0 === t.face2 ||
					d[t.face1].normal.dot(d[t.face2].normal) <= i
				) {
					let e = u[t.index1];
					n.push(e.x, e.y, e.z), (e = u[t.index2]), n.push(e.x, e.y, e.z);
				}
			}
			this.setAttribute("position", new cn(n, 3));
		}
		function Ea(t, e, n, i, r, o, s, a) {
			Vn.call(this),
				(this.type = "CylinderGeometry"),
				(this.parameters = {
					radiusTop: t,
					radiusBottom: e,
					height: n,
					radialSegments: i,
					heightSegments: r,
					openEnded: o,
					thetaStart: s,
					thetaLength: a,
				}),
				this.fromBufferGeometry(new Aa(t, e, n, i, r, o, s, a)),
				this.mergeVertices();
		}
		function Aa(t, e, n, i, r, o, s, a) {
			xn.call(this),
				(this.type = "CylinderBufferGeometry"),
				(this.parameters = {
					radiusTop: t,
					radiusBottom: e,
					height: n,
					radialSegments: i,
					heightSegments: r,
					openEnded: o,
					thetaStart: s,
					thetaLength: a,
				});
			const c = this;
			(t = void 0 !== t ? t : 1),
				(e = void 0 !== e ? e : 1),
				(n = n || 1),
				(i = Math.floor(i) || 8),
				(r = Math.floor(r) || 1),
				(o = void 0 !== o && o),
				(s = void 0 !== s ? s : 0),
				(a = void 0 !== a ? a : 2 * Math.PI);
			const l = [],
				h = [],
				u = [],
				d = [];
			let p = 0;
			const f = [],
				m = n / 2;
			let g = 0;
			function v(n) {
				let r, o;
				const f = new ft(),
					v = new Et();
				let y = 0;
				const x = !0 === n ? t : e,
					b = !0 === n ? 1 : -1;
				r = p;
				for (let t = 1; t <= i; t++)
					h.push(0, m * b, 0), u.push(0, b, 0), d.push(0.5, 0.5), p++;
				o = p;
				for (let t = 0; t <= i; t++) {
					const e = (t / i) * a + s,
						n = Math.cos(e),
						r = Math.sin(e);
					(v.x = x * r),
						(v.y = m * b),
						(v.z = x * n),
						h.push(v.x, v.y, v.z),
						u.push(0, b, 0),
						(f.x = 0.5 * n + 0.5),
						(f.y = 0.5 * r * b + 0.5),
						d.push(f.x, f.y),
						p++;
				}
				for (let t = 0; t < i; t++) {
					const e = r + t,
						i = o + t;
					!0 === n ? l.push(i, i + 1, e) : l.push(i + 1, i, e), (y += 3);
				}
				c.addGroup(g, y, !0 === n ? 1 : 2), (g += y);
			}
			!(function () {
				const o = new Et(),
					v = new Et();
				let y = 0;
				const x = (e - t) / n;
				for (let c = 0; c <= r; c++) {
					const l = [],
						g = c / r,
						y = g * (e - t) + t;
					for (let t = 0; t <= i; t++) {
						const e = t / i,
							r = e * a + s,
							c = Math.sin(r),
							f = Math.cos(r);
						(v.x = y * c),
							(v.y = -g * n + m),
							(v.z = y * f),
							h.push(v.x, v.y, v.z),
							o.set(c, x, f).normalize(),
							u.push(o.x, o.y, o.z),
							d.push(e, 1 - g),
							l.push(p++);
					}
					f.push(l);
				}
				for (let t = 0; t < i; t++)
					for (let e = 0; e < r; e++) {
						const n = f[e][t],
							i = f[e + 1][t],
							r = f[e + 1][t + 1],
							o = f[e][t + 1];
						l.push(n, i, o), l.push(i, r, o), (y += 6);
					}
				c.addGroup(g, y, 0), (g += y);
			})(),
				!1 === o && (t > 0 && v(!0), e > 0 && v(!1)),
				this.setIndex(l),
				this.setAttribute("position", new cn(h, 3)),
				this.setAttribute("normal", new cn(u, 3)),
				this.setAttribute("uv", new cn(d, 2));
		}
		function La(t, e, n, i, r, o, s) {
			Ea.call(this, 0, t, e, n, i, r, o, s),
				(this.type = "ConeGeometry"),
				(this.parameters = {
					radius: t,
					height: e,
					radialSegments: n,
					heightSegments: i,
					openEnded: r,
					thetaStart: o,
					thetaLength: s,
				});
		}
		function Ra(t, e, n, i, r, o, s) {
			Aa.call(this, 0, t, e, n, i, r, o, s),
				(this.type = "ConeBufferGeometry"),
				(this.parameters = {
					radius: t,
					height: e,
					radialSegments: n,
					heightSegments: i,
					openEnded: r,
					thetaStart: o,
					thetaLength: s,
				});
		}
		function Pa(t, e, n, i) {
			Vn.call(this),
				(this.type = "CircleGeometry"),
				(this.parameters = {
					radius: t,
					segments: e,
					thetaStart: n,
					thetaLength: i,
				}),
				this.fromBufferGeometry(new Ca(t, e, n, i)),
				this.mergeVertices();
		}
		function Ca(t, e, n, i) {
			xn.call(this),
				(this.type = "CircleBufferGeometry"),
				(this.parameters = {
					radius: t,
					segments: e,
					thetaStart: n,
					thetaLength: i,
				}),
				(t = t || 1),
				(e = void 0 !== e ? Math.max(3, e) : 8),
				(n = void 0 !== n ? n : 0),
				(i = void 0 !== i ? i : 2 * Math.PI);
			const r = [],
				o = [],
				s = [],
				a = [],
				c = new Et(),
				l = new ft();
			o.push(0, 0, 0), s.push(0, 0, 1), a.push(0.5, 0.5);
			for (let r = 0, h = 3; r <= e; r++, h += 3) {
				const u = n + (r / e) * i;
				(c.x = t * Math.cos(u)),
					(c.y = t * Math.sin(u)),
					o.push(c.x, c.y, c.z),
					s.push(0, 0, 1),
					(l.x = (o[h] / t + 1) / 2),
					(l.y = (o[h + 1] / t + 1) / 2),
					a.push(l.x, l.y);
			}
			for (let t = 1; t <= e; t++) r.push(t, t + 1, 0);
			this.setIndex(r),
				this.setAttribute("position", new cn(o, 3)),
				this.setAttribute("normal", new cn(s, 3)),
				this.setAttribute("uv", new cn(a, 2));
		}
		(fa.prototype = Object.create(Vn.prototype)),
			(fa.prototype.constructor = fa),
			(ma.prototype = Object.create(ua.prototype)),
			(ma.prototype.constructor = ma),
			(ga.prototype = Object.create(Vn.prototype)),
			(ga.prototype.constructor = ga),
			(va.prototype = Object.create(xn.prototype)),
			(va.prototype.constructor = va),
			(ya.prototype = Object.create(Vn.prototype)),
			(ya.prototype.constructor = ya),
			(xa.prototype = Object.create(xn.prototype)),
			(xa.prototype.constructor = xa),
			(ba.prototype = Object.create(Vn.prototype)),
			(ba.prototype.constructor = ba),
			(wa.prototype = Object.create(xn.prototype)),
			(wa.prototype.constructor = wa),
			(_a.prototype = Object.create(Vn.prototype)),
			(_a.prototype.constructor = _a),
			(_a.prototype.toJSON = function () {
				const t = Vn.prototype.toJSON.call(this);
				return Sa(this.parameters.shapes, t);
			}),
			(Ma.prototype = Object.create(xn.prototype)),
			(Ma.prototype.constructor = Ma),
			(Ma.prototype.toJSON = function () {
				const t = xn.prototype.toJSON.call(this);
				return Sa(this.parameters.shapes, t);
			}),
			(Ta.prototype = Object.create(xn.prototype)),
			(Ta.prototype.constructor = Ta),
			(Ea.prototype = Object.create(Vn.prototype)),
			(Ea.prototype.constructor = Ea),
			(Aa.prototype = Object.create(xn.prototype)),
			(Aa.prototype.constructor = Aa),
			(La.prototype = Object.create(Ea.prototype)),
			(La.prototype.constructor = La),
			(Ra.prototype = Object.create(Aa.prototype)),
			(Ra.prototype.constructor = Ra),
			(Pa.prototype = Object.create(Vn.prototype)),
			(Pa.prototype.constructor = Pa),
			(Ca.prototype = Object.create(xn.prototype)),
			(Ca.prototype.constructor = Ca);
		var Ia = Object.freeze({
			__proto__: null,
			WireframeGeometry: vs,
			ParametricGeometry: ys,
			ParametricBufferGeometry: xs,
			TetrahedronGeometry: _s,
			TetrahedronBufferGeometry: Ms,
			OctahedronGeometry: Ss,
			OctahedronBufferGeometry: Ts,
			IcosahedronGeometry: Es,
			IcosahedronBufferGeometry: As,
			DodecahedronGeometry: Ls,
			DodecahedronBufferGeometry: Rs,
			PolyhedronGeometry: bs,
			PolyhedronBufferGeometry: ws,
			TubeGeometry: Ps,
			TubeBufferGeometry: Cs,
			TorusKnotGeometry: Is,
			TorusKnotBufferGeometry: Os,
			TorusGeometry: Ds,
			TorusBufferGeometry: Ns,
			TextGeometry: fa,
			TextBufferGeometry: ma,
			SphereGeometry: ga,
			SphereBufferGeometry: va,
			RingGeometry: ya,
			RingBufferGeometry: xa,
			PlaneGeometry: ci,
			PlaneBufferGeometry: li,
			LatheGeometry: ba,
			LatheBufferGeometry: wa,
			ShapeGeometry: _a,
			ShapeBufferGeometry: Ma,
			ExtrudeGeometry: ha,
			ExtrudeBufferGeometry: ua,
			EdgesGeometry: Ta,
			ConeGeometry: La,
			ConeBufferGeometry: Ra,
			CylinderGeometry: Ea,
			CylinderBufferGeometry: Aa,
			CircleGeometry: Pa,
			CircleBufferGeometry: Ca,
			BoxGeometry: Wn,
			BoxBufferGeometry: qn,
		});
		function Oa(t) {
			Ze.call(this),
				(this.type = "ShadowMaterial"),
				(this.color = new je(0)),
				(this.transparent = !0),
				this.setValues(t);
		}
		function Da(t) {
			Jn.call(this, t), (this.type = "RawShaderMaterial");
		}
		function Na(t) {
			Ze.call(this),
				(this.defines = { STANDARD: "" }),
				(this.type = "MeshStandardMaterial"),
				(this.color = new je(16777215)),
				(this.roughness = 1),
				(this.metalness = 0),
				(this.map = null),
				(this.lightMap = null),
				(this.lightMapIntensity = 1),
				(this.aoMap = null),
				(this.aoMapIntensity = 1),
				(this.emissive = new je(0)),
				(this.emissiveIntensity = 1),
				(this.emissiveMap = null),
				(this.bumpMap = null),
				(this.bumpScale = 1),
				(this.normalMap = null),
				(this.normalMapType = 0),
				(this.normalScale = new ft(1, 1)),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.roughnessMap = null),
				(this.metalnessMap = null),
				(this.alphaMap = null),
				(this.envMap = null),
				(this.envMapIntensity = 1),
				(this.refractionRatio = 0.98),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.wireframeLinecap = "round"),
				(this.wireframeLinejoin = "round"),
				(this.skinning = !1),
				(this.morphTargets = !1),
				(this.morphNormals = !1),
				(this.vertexTangents = !1),
				this.setValues(t);
		}
		function za(t) {
			Na.call(this),
				(this.defines = { STANDARD: "", PHYSICAL: "" }),
				(this.type = "MeshPhysicalMaterial"),
				(this.clearcoat = 0),
				(this.clearcoatMap = null),
				(this.clearcoatRoughness = 0),
				(this.clearcoatRoughnessMap = null),
				(this.clearcoatNormalScale = new ft(1, 1)),
				(this.clearcoatNormalMap = null),
				(this.reflectivity = 0.5),
				(this.sheen = null),
				(this.transmission = 0),
				(this.transmissionMap = null),
				this.setValues(t);
		}
		function Ua(t) {
			Ze.call(this),
				(this.type = "MeshPhongMaterial"),
				(this.color = new je(16777215)),
				(this.specular = new je(1118481)),
				(this.shininess = 30),
				(this.map = null),
				(this.lightMap = null),
				(this.lightMapIntensity = 1),
				(this.aoMap = null),
				(this.aoMapIntensity = 1),
				(this.emissive = new je(0)),
				(this.emissiveIntensity = 1),
				(this.emissiveMap = null),
				(this.bumpMap = null),
				(this.bumpScale = 1),
				(this.normalMap = null),
				(this.normalMapType = 0),
				(this.normalScale = new ft(1, 1)),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.specularMap = null),
				(this.alphaMap = null),
				(this.envMap = null),
				(this.combine = 0),
				(this.reflectivity = 1),
				(this.refractionRatio = 0.98),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.wireframeLinecap = "round"),
				(this.wireframeLinejoin = "round"),
				(this.skinning = !1),
				(this.morphTargets = !1),
				(this.morphNormals = !1),
				this.setValues(t);
		}
		function Ha(t) {
			Ze.call(this),
				(this.defines = { TOON: "" }),
				(this.type = "MeshToonMaterial"),
				(this.color = new je(16777215)),
				(this.map = null),
				(this.gradientMap = null),
				(this.lightMap = null),
				(this.lightMapIntensity = 1),
				(this.aoMap = null),
				(this.aoMapIntensity = 1),
				(this.emissive = new je(0)),
				(this.emissiveIntensity = 1),
				(this.emissiveMap = null),
				(this.bumpMap = null),
				(this.bumpScale = 1),
				(this.normalMap = null),
				(this.normalMapType = 0),
				(this.normalScale = new ft(1, 1)),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.alphaMap = null),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.wireframeLinecap = "round"),
				(this.wireframeLinejoin = "round"),
				(this.skinning = !1),
				(this.morphTargets = !1),
				(this.morphNormals = !1),
				this.setValues(t);
		}
		function Ba(t) {
			Ze.call(this),
				(this.type = "MeshNormalMaterial"),
				(this.bumpMap = null),
				(this.bumpScale = 1),
				(this.normalMap = null),
				(this.normalMapType = 0),
				(this.normalScale = new ft(1, 1)),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.fog = !1),
				(this.skinning = !1),
				(this.morphTargets = !1),
				(this.morphNormals = !1),
				this.setValues(t);
		}
		function Fa(t) {
			Ze.call(this),
				(this.type = "MeshLambertMaterial"),
				(this.color = new je(16777215)),
				(this.map = null),
				(this.lightMap = null),
				(this.lightMapIntensity = 1),
				(this.aoMap = null),
				(this.aoMapIntensity = 1),
				(this.emissive = new je(0)),
				(this.emissiveIntensity = 1),
				(this.emissiveMap = null),
				(this.specularMap = null),
				(this.alphaMap = null),
				(this.envMap = null),
				(this.combine = 0),
				(this.reflectivity = 1),
				(this.refractionRatio = 0.98),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.wireframeLinecap = "round"),
				(this.wireframeLinejoin = "round"),
				(this.skinning = !1),
				(this.morphTargets = !1),
				(this.morphNormals = !1),
				this.setValues(t);
		}
		function ka(t) {
			Ze.call(this),
				(this.defines = { MATCAP: "" }),
				(this.type = "MeshMatcapMaterial"),
				(this.color = new je(16777215)),
				(this.matcap = null),
				(this.map = null),
				(this.bumpMap = null),
				(this.bumpScale = 1),
				(this.normalMap = null),
				(this.normalMapType = 0),
				(this.normalScale = new ft(1, 1)),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.alphaMap = null),
				(this.skinning = !1),
				(this.morphTargets = !1),
				(this.morphNormals = !1),
				this.setValues(t);
		}
		function Ga(t) {
			Zo.call(this),
				(this.type = "LineDashedMaterial"),
				(this.scale = 1),
				(this.dashSize = 3),
				(this.gapSize = 1),
				this.setValues(t);
		}
		(Oa.prototype = Object.create(Ze.prototype)),
			(Oa.prototype.constructor = Oa),
			(Oa.prototype.isShadowMaterial = !0),
			(Oa.prototype.copy = function (t) {
				return Ze.prototype.copy.call(this, t), this.color.copy(t.color), this;
			}),
			(Da.prototype = Object.create(Jn.prototype)),
			(Da.prototype.constructor = Da),
			(Da.prototype.isRawShaderMaterial = !0),
			(Na.prototype = Object.create(Ze.prototype)),
			(Na.prototype.constructor = Na),
			(Na.prototype.isMeshStandardMaterial = !0),
			(Na.prototype.copy = function (t) {
				return (
					Ze.prototype.copy.call(this, t),
					(this.defines = { STANDARD: "" }),
					this.color.copy(t.color),
					(this.roughness = t.roughness),
					(this.metalness = t.metalness),
					(this.map = t.map),
					(this.lightMap = t.lightMap),
					(this.lightMapIntensity = t.lightMapIntensity),
					(this.aoMap = t.aoMap),
					(this.aoMapIntensity = t.aoMapIntensity),
					this.emissive.copy(t.emissive),
					(this.emissiveMap = t.emissiveMap),
					(this.emissiveIntensity = t.emissiveIntensity),
					(this.bumpMap = t.bumpMap),
					(this.bumpScale = t.bumpScale),
					(this.normalMap = t.normalMap),
					(this.normalMapType = t.normalMapType),
					this.normalScale.copy(t.normalScale),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					(this.roughnessMap = t.roughnessMap),
					(this.metalnessMap = t.metalnessMap),
					(this.alphaMap = t.alphaMap),
					(this.envMap = t.envMap),
					(this.envMapIntensity = t.envMapIntensity),
					(this.refractionRatio = t.refractionRatio),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.wireframeLinecap = t.wireframeLinecap),
					(this.wireframeLinejoin = t.wireframeLinejoin),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					(this.morphNormals = t.morphNormals),
					(this.vertexTangents = t.vertexTangents),
					this
				);
			}),
			(za.prototype = Object.create(Na.prototype)),
			(za.prototype.constructor = za),
			(za.prototype.isMeshPhysicalMaterial = !0),
			(za.prototype.copy = function (t) {
				return (
					Na.prototype.copy.call(this, t),
					(this.defines = { STANDARD: "", PHYSICAL: "" }),
					(this.clearcoat = t.clearcoat),
					(this.clearcoatMap = t.clearcoatMap),
					(this.clearcoatRoughness = t.clearcoatRoughness),
					(this.clearcoatRoughnessMap = t.clearcoatRoughnessMap),
					(this.clearcoatNormalMap = t.clearcoatNormalMap),
					this.clearcoatNormalScale.copy(t.clearcoatNormalScale),
					(this.reflectivity = t.reflectivity),
					t.sheen
						? (this.sheen = (this.sheen || new je()).copy(t.sheen))
						: (this.sheen = null),
					(this.transmission = t.transmission),
					(this.transmissionMap = t.transmissionMap),
					this
				);
			}),
			(Ua.prototype = Object.create(Ze.prototype)),
			(Ua.prototype.constructor = Ua),
			(Ua.prototype.isMeshPhongMaterial = !0),
			(Ua.prototype.copy = function (t) {
				return (
					Ze.prototype.copy.call(this, t),
					this.color.copy(t.color),
					this.specular.copy(t.specular),
					(this.shininess = t.shininess),
					(this.map = t.map),
					(this.lightMap = t.lightMap),
					(this.lightMapIntensity = t.lightMapIntensity),
					(this.aoMap = t.aoMap),
					(this.aoMapIntensity = t.aoMapIntensity),
					this.emissive.copy(t.emissive),
					(this.emissiveMap = t.emissiveMap),
					(this.emissiveIntensity = t.emissiveIntensity),
					(this.bumpMap = t.bumpMap),
					(this.bumpScale = t.bumpScale),
					(this.normalMap = t.normalMap),
					(this.normalMapType = t.normalMapType),
					this.normalScale.copy(t.normalScale),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					(this.specularMap = t.specularMap),
					(this.alphaMap = t.alphaMap),
					(this.envMap = t.envMap),
					(this.combine = t.combine),
					(this.reflectivity = t.reflectivity),
					(this.refractionRatio = t.refractionRatio),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.wireframeLinecap = t.wireframeLinecap),
					(this.wireframeLinejoin = t.wireframeLinejoin),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					(this.morphNormals = t.morphNormals),
					this
				);
			}),
			(Ha.prototype = Object.create(Ze.prototype)),
			(Ha.prototype.constructor = Ha),
			(Ha.prototype.isMeshToonMaterial = !0),
			(Ha.prototype.copy = function (t) {
				return (
					Ze.prototype.copy.call(this, t),
					this.color.copy(t.color),
					(this.map = t.map),
					(this.gradientMap = t.gradientMap),
					(this.lightMap = t.lightMap),
					(this.lightMapIntensity = t.lightMapIntensity),
					(this.aoMap = t.aoMap),
					(this.aoMapIntensity = t.aoMapIntensity),
					this.emissive.copy(t.emissive),
					(this.emissiveMap = t.emissiveMap),
					(this.emissiveIntensity = t.emissiveIntensity),
					(this.bumpMap = t.bumpMap),
					(this.bumpScale = t.bumpScale),
					(this.normalMap = t.normalMap),
					(this.normalMapType = t.normalMapType),
					this.normalScale.copy(t.normalScale),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					(this.alphaMap = t.alphaMap),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.wireframeLinecap = t.wireframeLinecap),
					(this.wireframeLinejoin = t.wireframeLinejoin),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					(this.morphNormals = t.morphNormals),
					this
				);
			}),
			(Ba.prototype = Object.create(Ze.prototype)),
			(Ba.prototype.constructor = Ba),
			(Ba.prototype.isMeshNormalMaterial = !0),
			(Ba.prototype.copy = function (t) {
				return (
					Ze.prototype.copy.call(this, t),
					(this.bumpMap = t.bumpMap),
					(this.bumpScale = t.bumpScale),
					(this.normalMap = t.normalMap),
					(this.normalMapType = t.normalMapType),
					this.normalScale.copy(t.normalScale),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					(this.morphNormals = t.morphNormals),
					this
				);
			}),
			(Fa.prototype = Object.create(Ze.prototype)),
			(Fa.prototype.constructor = Fa),
			(Fa.prototype.isMeshLambertMaterial = !0),
			(Fa.prototype.copy = function (t) {
				return (
					Ze.prototype.copy.call(this, t),
					this.color.copy(t.color),
					(this.map = t.map),
					(this.lightMap = t.lightMap),
					(this.lightMapIntensity = t.lightMapIntensity),
					(this.aoMap = t.aoMap),
					(this.aoMapIntensity = t.aoMapIntensity),
					this.emissive.copy(t.emissive),
					(this.emissiveMap = t.emissiveMap),
					(this.emissiveIntensity = t.emissiveIntensity),
					(this.specularMap = t.specularMap),
					(this.alphaMap = t.alphaMap),
					(this.envMap = t.envMap),
					(this.combine = t.combine),
					(this.reflectivity = t.reflectivity),
					(this.refractionRatio = t.refractionRatio),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.wireframeLinecap = t.wireframeLinecap),
					(this.wireframeLinejoin = t.wireframeLinejoin),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					(this.morphNormals = t.morphNormals),
					this
				);
			}),
			(ka.prototype = Object.create(Ze.prototype)),
			(ka.prototype.constructor = ka),
			(ka.prototype.isMeshMatcapMaterial = !0),
			(ka.prototype.copy = function (t) {
				return (
					Ze.prototype.copy.call(this, t),
					(this.defines = { MATCAP: "" }),
					this.color.copy(t.color),
					(this.matcap = t.matcap),
					(this.map = t.map),
					(this.bumpMap = t.bumpMap),
					(this.bumpScale = t.bumpScale),
					(this.normalMap = t.normalMap),
					(this.normalMapType = t.normalMapType),
					this.normalScale.copy(t.normalScale),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					(this.alphaMap = t.alphaMap),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					(this.morphNormals = t.morphNormals),
					this
				);
			}),
			(Ga.prototype = Object.create(Zo.prototype)),
			(Ga.prototype.constructor = Ga),
			(Ga.prototype.isLineDashedMaterial = !0),
			(Ga.prototype.copy = function (t) {
				return (
					Zo.prototype.copy.call(this, t),
					(this.scale = t.scale),
					(this.dashSize = t.dashSize),
					(this.gapSize = t.gapSize),
					this
				);
			});
		var ja = Object.freeze({
			__proto__: null,
			ShadowMaterial: Oa,
			SpriteMaterial: bo,
			RawShaderMaterial: Da,
			ShaderMaterial: Jn,
			PointsMaterial: ss,
			MeshPhysicalMaterial: za,
			MeshStandardMaterial: Na,
			MeshPhongMaterial: Ua,
			MeshToonMaterial: Ha,
			MeshNormalMaterial: Ba,
			MeshLambertMaterial: Fa,
			MeshDepthMaterial: eo,
			MeshDistanceMaterial: no,
			MeshBasicMaterial: Je,
			MeshMatcapMaterial: ka,
			LineDashedMaterial: Ga,
			LineBasicMaterial: Zo,
			Material: Ze,
		});
		const Va = {
			arraySlice: function (t, e, n) {
				return Va.isTypedArray(t)
					? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length))
					: t.slice(e, n);
			},
			convertArray: function (t, e, n) {
				return !t || (!n && t.constructor === e)
					? t
					: "number" == typeof e.BYTES_PER_ELEMENT
					? new e(t)
					: Array.prototype.slice.call(t);
			},
			isTypedArray: function (t) {
				return ArrayBuffer.isView(t) && !(t instanceof DataView);
			},
			getKeyframeOrder: function (t) {
				const e = t.length,
					n = new Array(e);
				for (let t = 0; t !== e; ++t) n[t] = t;
				return (
					n.sort(function (e, n) {
						return t[e] - t[n];
					}),
					n
				);
			},
			sortedArray: function (t, e, n) {
				const i = t.length,
					r = new t.constructor(i);
				for (let o = 0, s = 0; s !== i; ++o) {
					const i = n[o] * e;
					for (let n = 0; n !== e; ++n) r[s++] = t[i + n];
				}
				return r;
			},
			flattenJSON: function (t, e, n, i) {
				let r = 1,
					o = t[0];
				for (; void 0 !== o && void 0 === o[i]; ) o = t[r++];
				if (void 0 === o) return;
				let s = o[i];
				if (void 0 !== s)
					if (Array.isArray(s))
						do {
							(s = o[i]),
								void 0 !== s && (e.push(o.time), n.push.apply(n, s)),
								(o = t[r++]);
						} while (void 0 !== o);
					else if (void 0 !== s.toArray)
						do {
							(s = o[i]),
								void 0 !== s && (e.push(o.time), s.toArray(n, n.length)),
								(o = t[r++]);
						} while (void 0 !== o);
					else
						do {
							(s = o[i]),
								void 0 !== s && (e.push(o.time), n.push(s)),
								(o = t[r++]);
						} while (void 0 !== o);
			},
			subclip: function (t, e, n, i, r) {
				r = r || 30;
				const o = t.clone();
				o.name = e;
				const s = [];
				for (let t = 0; t < o.tracks.length; ++t) {
					const e = o.tracks[t],
						a = e.getValueSize(),
						c = [],
						l = [];
					for (let t = 0; t < e.times.length; ++t) {
						const o = e.times[t] * r;
						if (!(o < n || o >= i)) {
							c.push(e.times[t]);
							for (let n = 0; n < a; ++n) l.push(e.values[t * a + n]);
						}
					}
					0 !== c.length &&
						((e.times = Va.convertArray(c, e.times.constructor)),
						(e.values = Va.convertArray(l, e.values.constructor)),
						s.push(e));
				}
				o.tracks = s;
				let a = 1 / 0;
				for (let t = 0; t < o.tracks.length; ++t)
					a > o.tracks[t].times[0] && (a = o.tracks[t].times[0]);
				for (let t = 0; t < o.tracks.length; ++t) o.tracks[t].shift(-1 * a);
				return o.resetDuration(), o;
			},
			makeClipAdditive: function (t, e, n, i) {
				void 0 === e && (e = 0),
					void 0 === n && (n = t),
					(void 0 === i || i <= 0) && (i = 30);
				const r = t.tracks.length,
					o = e / i;
				for (let e = 0; e < r; ++e) {
					const i = n.tracks[e],
						r = i.ValueTypeName;
					if ("bool" === r || "string" === r) continue;
					const s = t.tracks.find(function (t) {
						return t.name === i.name && t.ValueTypeName === r;
					});
					if (void 0 === s) continue;
					const a = i.getValueSize(),
						c = i.times.length - 1;
					let l;
					if (o <= i.times[0]) l = Va.arraySlice(i.values, 0, i.valueSize);
					else if (o >= i.times[c]) {
						const t = c * a;
						l = Va.arraySlice(i.values, t);
					} else {
						const t = i.createInterpolant();
						t.evaluate(o), (l = t.resultBuffer);
					}
					if ("quaternion" === r) {
						new Mt(l[0], l[1], l[2], l[3]).normalize().conjugate().toArray(l);
					}
					const h = s.times.length;
					for (let t = 0; t < h; ++t) {
						const e = t * a;
						if ("quaternion" === r)
							Mt.multiplyQuaternionsFlat(s.values, e, l, 0, s.values, e);
						else for (let t = 0; t < a; ++t) s.values[e + t] -= l[t];
					}
				}
				return (t.blendMode = 2501), t;
			},
		};
		function Wa(t, e, n, i) {
			(this.parameterPositions = t),
				(this._cachedIndex = 0),
				(this.resultBuffer = void 0 !== i ? i : new e.constructor(n)),
				(this.sampleValues = e),
				(this.valueSize = n);
		}
		function qa(t, e, n, i) {
			Wa.call(this, t, e, n, i),
				(this._weightPrev = -0),
				(this._offsetPrev = -0),
				(this._weightNext = -0),
				(this._offsetNext = -0);
		}
		function Xa(t, e, n, i) {
			Wa.call(this, t, e, n, i);
		}
		function Ya(t, e, n, i) {
			Wa.call(this, t, e, n, i);
		}
		function Za(t, e, n, i) {
			if (void 0 === t)
				throw new Error("THREE.KeyframeTrack: track name is undefined");
			if (void 0 === e || 0 === e.length)
				throw new Error(
					"THREE.KeyframeTrack: no keyframes in track named " + t
				);
			(this.name = t),
				(this.times = Va.convertArray(e, this.TimeBufferType)),
				(this.values = Va.convertArray(n, this.ValueBufferType)),
				this.setInterpolation(i || this.DefaultInterpolation);
		}
		function Ja(t, e, n) {
			Za.call(this, t, e, n);
		}
		function Ka(t, e, n, i) {
			Za.call(this, t, e, n, i);
		}
		function Qa(t, e, n, i) {
			Za.call(this, t, e, n, i);
		}
		function $a(t, e, n, i) {
			Wa.call(this, t, e, n, i);
		}
		function tc(t, e, n, i) {
			Za.call(this, t, e, n, i);
		}
		function ec(t, e, n, i) {
			Za.call(this, t, e, n, i);
		}
		function nc(t, e, n, i) {
			Za.call(this, t, e, n, i);
		}
		function ic(t, e, n, i) {
			(this.name = t),
				(this.tracks = n),
				(this.duration = void 0 !== e ? e : -1),
				(this.blendMode = void 0 !== i ? i : 2500),
				(this.uuid = pt.generateUUID()),
				this.duration < 0 && this.resetDuration();
		}
		function rc(t) {
			if (void 0 === t.type)
				throw new Error(
					"THREE.KeyframeTrack: track type undefined, can not parse"
				);
			const e = (function (t) {
				switch (t.toLowerCase()) {
					case "scalar":
					case "double":
					case "float":
					case "number":
					case "integer":
						return Qa;
					case "vector":
					case "vector2":
					case "vector3":
					case "vector4":
						return nc;
					case "color":
						return Ka;
					case "quaternion":
						return tc;
					case "bool":
					case "boolean":
						return Ja;
					case "string":
						return ec;
				}
				throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t);
			})(t.type);
			if (void 0 === t.times) {
				const e = [],
					n = [];
				Va.flattenJSON(t.keys, e, n, "value"), (t.times = e), (t.values = n);
			}
			return void 0 !== e.parse
				? e.parse(t)
				: new e(t.name, t.times, t.values, t.interpolation);
		}
		Object.assign(Wa.prototype, {
			evaluate: function (t) {
				let e = this.parameterPositions,
					n = this._cachedIndex,
					i = e[n],
					r = e[n - 1];
				t: {
					e: {
						let o;
						n: {
							i: if (!(t < i)) {
								for (let o = n + 2; ; ) {
									if (void 0 === i) {
										if (t < r) break i;
										return (
											(n = e.length),
											(this._cachedIndex = n),
											this.afterEnd_(n - 1, t, r)
										);
									}
									if (n === o) break;
									if (((r = i), (i = e[++n]), t < i)) break e;
								}
								o = e.length;
								break n;
							}
							if (t >= r) break t;
							{
								const s = e[1];
								t < s && ((n = 2), (r = s));
								for (let o = n - 2; ; ) {
									if (void 0 === r)
										return (this._cachedIndex = 0), this.beforeStart_(0, t, i);
									if (n === o) break;
									if (((i = r), (r = e[--n - 1]), t >= r)) break e;
								}
								(o = n), (n = 0);
							}
						}
						for (; n < o; ) {
							const i = (n + o) >>> 1;
							t < e[i] ? (o = i) : (n = i + 1);
						}
						if (((i = e[n]), (r = e[n - 1]), void 0 === r))
							return (this._cachedIndex = 0), this.beforeStart_(0, t, i);
						if (void 0 === i)
							return (
								(n = e.length),
								(this._cachedIndex = n),
								this.afterEnd_(n - 1, r, t)
							);
					}
					(this._cachedIndex = n), this.intervalChanged_(n, r, i);
				}
				return this.interpolate_(n, r, t, i);
			},
			settings: null,
			DefaultSettings_: {},
			getSettings_: function () {
				return this.settings || this.DefaultSettings_;
			},
			copySampleValue_: function (t) {
				const e = this.resultBuffer,
					n = this.sampleValues,
					i = this.valueSize,
					r = t * i;
				for (let t = 0; t !== i; ++t) e[t] = n[r + t];
				return e;
			},
			interpolate_: function () {
				throw new Error("call to abstract method");
			},
			intervalChanged_: function () {},
		}),
			Object.assign(Wa.prototype, {
				beforeStart_: Wa.prototype.copySampleValue_,
				afterEnd_: Wa.prototype.copySampleValue_,
			}),
			(qa.prototype = Object.assign(Object.create(Wa.prototype), {
				constructor: qa,
				DefaultSettings_: { endingStart: 2400, endingEnd: 2400 },
				intervalChanged_: function (t, e, n) {
					let i = this.parameterPositions,
						r = t - 2,
						o = t + 1,
						s = i[r],
						a = i[o];
					if (void 0 === s)
						switch (this.getSettings_().endingStart) {
							case 2401:
								(r = t), (s = 2 * e - n);
								break;
							case 2402:
								(r = i.length - 2), (s = e + i[r] - i[r + 1]);
								break;
							default:
								(r = t), (s = n);
						}
					if (void 0 === a)
						switch (this.getSettings_().endingEnd) {
							case 2401:
								(o = t), (a = 2 * n - e);
								break;
							case 2402:
								(o = 1), (a = n + i[1] - i[0]);
								break;
							default:
								(o = t - 1), (a = e);
						}
					const c = 0.5 * (n - e),
						l = this.valueSize;
					(this._weightPrev = c / (e - s)),
						(this._weightNext = c / (a - n)),
						(this._offsetPrev = r * l),
						(this._offsetNext = o * l);
				},
				interpolate_: function (t, e, n, i) {
					const r = this.resultBuffer,
						o = this.sampleValues,
						s = this.valueSize,
						a = t * s,
						c = a - s,
						l = this._offsetPrev,
						h = this._offsetNext,
						u = this._weightPrev,
						d = this._weightNext,
						p = (n - e) / (i - e),
						f = p * p,
						m = f * p,
						g = -u * m + 2 * u * f - u * p,
						v = (1 + u) * m + (-1.5 - 2 * u) * f + (-0.5 + u) * p + 1,
						y = (-1 - d) * m + (1.5 + d) * f + 0.5 * p,
						x = d * m - d * f;
					for (let t = 0; t !== s; ++t)
						r[t] = g * o[l + t] + v * o[c + t] + y * o[a + t] + x * o[h + t];
					return r;
				},
			})),
			(Xa.prototype = Object.assign(Object.create(Wa.prototype), {
				constructor: Xa,
				interpolate_: function (t, e, n, i) {
					const r = this.resultBuffer,
						o = this.sampleValues,
						s = this.valueSize,
						a = t * s,
						c = a - s,
						l = (n - e) / (i - e),
						h = 1 - l;
					for (let t = 0; t !== s; ++t) r[t] = o[c + t] * h + o[a + t] * l;
					return r;
				},
			})),
			(Ya.prototype = Object.assign(Object.create(Wa.prototype), {
				constructor: Ya,
				interpolate_: function (t) {
					return this.copySampleValue_(t - 1);
				},
			})),
			Object.assign(Za, {
				toJSON: function (t) {
					const e = t.constructor;
					let n;
					if (void 0 !== e.toJSON) n = e.toJSON(t);
					else {
						n = {
							name: t.name,
							times: Va.convertArray(t.times, Array),
							values: Va.convertArray(t.values, Array),
						};
						const e = t.getInterpolation();
						e !== t.DefaultInterpolation && (n.interpolation = e);
					}
					return (n.type = t.ValueTypeName), n;
				},
			}),
			Object.assign(Za.prototype, {
				constructor: Za,
				TimeBufferType: Float32Array,
				ValueBufferType: Float32Array,
				DefaultInterpolation: 2301,
				InterpolantFactoryMethodDiscrete: function (t) {
					return new Ya(this.times, this.values, this.getValueSize(), t);
				},
				InterpolantFactoryMethodLinear: function (t) {
					return new Xa(this.times, this.values, this.getValueSize(), t);
				},
				InterpolantFactoryMethodSmooth: function (t) {
					return new qa(this.times, this.values, this.getValueSize(), t);
				},
				setInterpolation: function (t) {
					let e;
					switch (t) {
						case 2300:
							e = this.InterpolantFactoryMethodDiscrete;
							break;
						case 2301:
							e = this.InterpolantFactoryMethodLinear;
							break;
						case 2302:
							e = this.InterpolantFactoryMethodSmooth;
					}
					if (void 0 === e) {
						const e =
							"unsupported interpolation for " +
							this.ValueTypeName +
							" keyframe track named " +
							this.name;
						if (void 0 === this.createInterpolant) {
							if (t === this.DefaultInterpolation) throw new Error(e);
							this.setInterpolation(this.DefaultInterpolation);
						}
						return console.warn("THREE.KeyframeTrack:", e), this;
					}
					return (this.createInterpolant = e), this;
				},
				getInterpolation: function () {
					switch (this.createInterpolant) {
						case this.InterpolantFactoryMethodDiscrete:
							return 2300;
						case this.InterpolantFactoryMethodLinear:
							return 2301;
						case this.InterpolantFactoryMethodSmooth:
							return 2302;
					}
				},
				getValueSize: function () {
					return this.values.length / this.times.length;
				},
				shift: function (t) {
					if (0 !== t) {
						const e = this.times;
						for (let n = 0, i = e.length; n !== i; ++n) e[n] += t;
					}
					return this;
				},
				scale: function (t) {
					if (1 !== t) {
						const e = this.times;
						for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t;
					}
					return this;
				},
				trim: function (t, e) {
					const n = this.times,
						i = n.length;
					let r = 0,
						o = i - 1;
					for (; r !== i && n[r] < t; ) ++r;
					for (; -1 !== o && n[o] > e; ) --o;
					if ((++o, 0 !== r || o !== i)) {
						r >= o && ((o = Math.max(o, 1)), (r = o - 1));
						const t = this.getValueSize();
						(this.times = Va.arraySlice(n, r, o)),
							(this.values = Va.arraySlice(this.values, r * t, o * t));
					}
					return this;
				},
				validate: function () {
					let t = !0;
					const e = this.getValueSize();
					e - Math.floor(e) != 0 &&
						(console.error(
							"THREE.KeyframeTrack: Invalid value size in track.",
							this
						),
						(t = !1));
					const n = this.times,
						i = this.values,
						r = n.length;
					0 === r &&
						(console.error("THREE.KeyframeTrack: Track is empty.", this),
						(t = !1));
					let o = null;
					for (let e = 0; e !== r; e++) {
						const i = n[e];
						if ("number" == typeof i && isNaN(i)) {
							console.error(
								"THREE.KeyframeTrack: Time is not a valid number.",
								this,
								e,
								i
							),
								(t = !1);
							break;
						}
						if (null !== o && o > i) {
							console.error(
								"THREE.KeyframeTrack: Out of order keys.",
								this,
								e,
								i,
								o
							),
								(t = !1);
							break;
						}
						o = i;
					}
					if (void 0 !== i && Va.isTypedArray(i))
						for (let e = 0, n = i.length; e !== n; ++e) {
							const n = i[e];
							if (isNaN(n)) {
								console.error(
									"THREE.KeyframeTrack: Value is not a valid number.",
									this,
									e,
									n
								),
									(t = !1);
								break;
							}
						}
					return t;
				},
				optimize: function () {
					const t = Va.arraySlice(this.times),
						e = Va.arraySlice(this.values),
						n = this.getValueSize(),
						i = 2302 === this.getInterpolation(),
						r = t.length - 1;
					let o = 1;
					for (let s = 1; s < r; ++s) {
						let r = !1;
						const a = t[s];
						if (a !== t[s + 1] && (1 !== s || a !== a[0]))
							if (i) r = !0;
							else {
								const t = s * n,
									i = t - n,
									o = t + n;
								for (let s = 0; s !== n; ++s) {
									const n = e[t + s];
									if (n !== e[i + s] || n !== e[o + s]) {
										r = !0;
										break;
									}
								}
							}
						if (r) {
							if (s !== o) {
								t[o] = t[s];
								const i = s * n,
									r = o * n;
								for (let t = 0; t !== n; ++t) e[r + t] = e[i + t];
							}
							++o;
						}
					}
					if (r > 0) {
						t[o] = t[r];
						for (let t = r * n, i = o * n, s = 0; s !== n; ++s)
							e[i + s] = e[t + s];
						++o;
					}
					return (
						o !== t.length
							? ((this.times = Va.arraySlice(t, 0, o)),
							  (this.values = Va.arraySlice(e, 0, o * n)))
							: ((this.times = t), (this.values = e)),
						this
					);
				},
				clone: function () {
					const t = Va.arraySlice(this.times, 0),
						e = Va.arraySlice(this.values, 0),
						n = new (0, this.constructor)(this.name, t, e);
					return (n.createInterpolant = this.createInterpolant), n;
				},
			}),
			(Ja.prototype = Object.assign(Object.create(Za.prototype), {
				constructor: Ja,
				ValueTypeName: "bool",
				ValueBufferType: Array,
				DefaultInterpolation: 2300,
				InterpolantFactoryMethodLinear: void 0,
				InterpolantFactoryMethodSmooth: void 0,
			})),
			(Ka.prototype = Object.assign(Object.create(Za.prototype), {
				constructor: Ka,
				ValueTypeName: "color",
			})),
			(Qa.prototype = Object.assign(Object.create(Za.prototype), {
				constructor: Qa,
				ValueTypeName: "number",
			})),
			($a.prototype = Object.assign(Object.create(Wa.prototype), {
				constructor: $a,
				interpolate_: function (t, e, n, i) {
					const r = this.resultBuffer,
						o = this.sampleValues,
						s = this.valueSize,
						a = (n - e) / (i - e);
					let c = t * s;
					for (let t = c + s; c !== t; c += 4)
						Mt.slerpFlat(r, 0, o, c - s, o, c, a);
					return r;
				},
			})),
			(tc.prototype = Object.assign(Object.create(Za.prototype), {
				constructor: tc,
				ValueTypeName: "quaternion",
				DefaultInterpolation: 2301,
				InterpolantFactoryMethodLinear: function (t) {
					return new $a(this.times, this.values, this.getValueSize(), t);
				},
				InterpolantFactoryMethodSmooth: void 0,
			})),
			(ec.prototype = Object.assign(Object.create(Za.prototype), {
				constructor: ec,
				ValueTypeName: "string",
				ValueBufferType: Array,
				DefaultInterpolation: 2300,
				InterpolantFactoryMethodLinear: void 0,
				InterpolantFactoryMethodSmooth: void 0,
			})),
			(nc.prototype = Object.assign(Object.create(Za.prototype), {
				constructor: nc,
				ValueTypeName: "vector",
			})),
			Object.assign(ic, {
				parse: function (t) {
					const e = [],
						n = t.tracks,
						i = 1 / (t.fps || 1);
					for (let t = 0, r = n.length; t !== r; ++t) e.push(rc(n[t]).scale(i));
					return new ic(t.name, t.duration, e, t.blendMode);
				},
				toJSON: function (t) {
					const e = [],
						n = t.tracks,
						i = {
							name: t.name,
							duration: t.duration,
							tracks: e,
							uuid: t.uuid,
							blendMode: t.blendMode,
						};
					for (let t = 0, i = n.length; t !== i; ++t) e.push(Za.toJSON(n[t]));
					return i;
				},
				CreateFromMorphTargetSequence: function (t, e, n, i) {
					const r = e.length,
						o = [];
					for (let t = 0; t < r; t++) {
						let s = [],
							a = [];
						s.push((t + r - 1) % r, t, (t + 1) % r), a.push(0, 1, 0);
						const c = Va.getKeyframeOrder(s);
						(s = Va.sortedArray(s, 1, c)),
							(a = Va.sortedArray(a, 1, c)),
							i || 0 !== s[0] || (s.push(r), a.push(a[0])),
							o.push(
								new Qa(".morphTargetInfluences[" + e[t].name + "]", s, a).scale(
									1 / n
								)
							);
					}
					return new ic(t, -1, o);
				},
				findByName: function (t, e) {
					let n = t;
					if (!Array.isArray(t)) {
						const e = t;
						n = (e.geometry && e.geometry.animations) || e.animations;
					}
					for (let t = 0; t < n.length; t++) if (n[t].name === e) return n[t];
					return null;
				},
				CreateClipsFromMorphTargetSequences: function (t, e, n) {
					const i = {},
						r = /^([\w-]*?)([\d]+)$/;
					for (let e = 0, n = t.length; e < n; e++) {
						const n = t[e],
							o = n.name.match(r);
						if (o && o.length > 1) {
							const t = o[1];
							let e = i[t];
							e || (i[t] = e = []), e.push(n);
						}
					}
					const o = [];
					for (const t in i)
						o.push(ic.CreateFromMorphTargetSequence(t, i[t], e, n));
					return o;
				},
				parseAnimation: function (t, e) {
					if (!t)
						return (
							console.error(
								"THREE.AnimationClip: No animation in JSONLoader data."
							),
							null
						);
					const n = function (t, e, n, i, r) {
							if (0 !== n.length) {
								const o = [],
									s = [];
								Va.flattenJSON(n, o, s, i),
									0 !== o.length && r.push(new t(e, o, s));
							}
						},
						i = [],
						r = t.name || "default",
						o = t.fps || 30,
						s = t.blendMode;
					let a = t.length || -1;
					const c = t.hierarchy || [];
					for (let t = 0; t < c.length; t++) {
						const r = c[t].keys;
						if (r && 0 !== r.length)
							if (r[0].morphTargets) {
								const t = {};
								let e;
								for (e = 0; e < r.length; e++)
									if (r[e].morphTargets)
										for (let n = 0; n < r[e].morphTargets.length; n++)
											t[r[e].morphTargets[n]] = -1;
								for (const n in t) {
									const t = [],
										o = [];
									for (let i = 0; i !== r[e].morphTargets.length; ++i) {
										const i = r[e];
										t.push(i.time), o.push(i.morphTarget === n ? 1 : 0);
									}
									i.push(new Qa(".morphTargetInfluence[" + n + "]", t, o));
								}
								a = t.length * (o || 1);
							} else {
								const o = ".bones[" + e[t].name + "]";
								n(nc, o + ".position", r, "pos", i),
									n(tc, o + ".quaternion", r, "rot", i),
									n(nc, o + ".scale", r, "scl", i);
							}
					}
					if (0 === i.length) return null;
					return new ic(r, a, i, s);
				},
			}),
			Object.assign(ic.prototype, {
				resetDuration: function () {
					let t = 0;
					for (let e = 0, n = this.tracks.length; e !== n; ++e) {
						const n = this.tracks[e];
						t = Math.max(t, n.times[n.times.length - 1]);
					}
					return (this.duration = t), this;
				},
				trim: function () {
					for (let t = 0; t < this.tracks.length; t++)
						this.tracks[t].trim(0, this.duration);
					return this;
				},
				validate: function () {
					let t = !0;
					for (let e = 0; e < this.tracks.length; e++)
						t = t && this.tracks[e].validate();
					return t;
				},
				optimize: function () {
					for (let t = 0; t < this.tracks.length; t++)
						this.tracks[t].optimize();
					return this;
				},
				clone: function () {
					const t = [];
					for (let e = 0; e < this.tracks.length; e++)
						t.push(this.tracks[e].clone());
					return new ic(this.name, this.duration, t, this.blendMode);
				},
			});
		const oc = {
			enabled: !1,
			files: {},
			add: function (t, e) {
				!1 !== this.enabled && (this.files[t] = e);
			},
			get: function (t) {
				if (!1 !== this.enabled) return this.files[t];
			},
			remove: function (t) {
				delete this.files[t];
			},
			clear: function () {
				this.files = {};
			},
		};
		function sc(t, e, n) {
			const i = this;
			let r = !1,
				o = 0,
				s = 0,
				a = void 0;
			const c = [];
			(this.onStart = void 0),
				(this.onLoad = t),
				(this.onProgress = e),
				(this.onError = n),
				(this.itemStart = function (t) {
					s++, !1 === r && void 0 !== i.onStart && i.onStart(t, o, s), (r = !0);
				}),
				(this.itemEnd = function (t) {
					o++,
						void 0 !== i.onProgress && i.onProgress(t, o, s),
						o === s && ((r = !1), void 0 !== i.onLoad && i.onLoad());
				}),
				(this.itemError = function (t) {
					void 0 !== i.onError && i.onError(t);
				}),
				(this.resolveURL = function (t) {
					return a ? a(t) : t;
				}),
				(this.setURLModifier = function (t) {
					return (a = t), this;
				}),
				(this.addHandler = function (t, e) {
					return c.push(t, e), this;
				}),
				(this.removeHandler = function (t) {
					const e = c.indexOf(t);
					return -1 !== e && c.splice(e, 2), this;
				}),
				(this.getHandler = function (t) {
					for (let e = 0, n = c.length; e < n; e += 2) {
						const n = c[e],
							i = c[e + 1];
						if ((n.global && (n.lastIndex = 0), n.test(t))) return i;
					}
					return null;
				});
		}
		const ac = new sc();
		function cc(t) {
			(this.manager = void 0 !== t ? t : ac),
				(this.crossOrigin = "anonymous"),
				(this.path = ""),
				(this.resourcePath = ""),
				(this.requestHeader = {});
		}
		Object.assign(cc.prototype, {
			load: function () {},
			loadAsync: function (t, e) {
				const n = this;
				return new Promise(function (i, r) {
					n.load(t, i, e, r);
				});
			},
			parse: function () {},
			setCrossOrigin: function (t) {
				return (this.crossOrigin = t), this;
			},
			setPath: function (t) {
				return (this.path = t), this;
			},
			setResourcePath: function (t) {
				return (this.resourcePath = t), this;
			},
			setRequestHeader: function (t) {
				return (this.requestHeader = t), this;
			},
		});
		const lc = {};
		function hc(t) {
			cc.call(this, t);
		}
		function uc(t) {
			cc.call(this, t);
		}
		function dc(t) {
			cc.call(this, t);
		}
		function pc(t) {
			cc.call(this, t);
		}
		function fc(t) {
			cc.call(this, t);
		}
		function mc(t) {
			cc.call(this, t);
		}
		function gc(t) {
			cc.call(this, t);
		}
		function vc() {
			(this.type = "Curve"), (this.arcLengthDivisions = 200);
		}
		function yc(t, e, n, i, r, o, s, a) {
			vc.call(this),
				(this.type = "EllipseCurve"),
				(this.aX = t || 0),
				(this.aY = e || 0),
				(this.xRadius = n || 1),
				(this.yRadius = i || 1),
				(this.aStartAngle = r || 0),
				(this.aEndAngle = o || 2 * Math.PI),
				(this.aClockwise = s || !1),
				(this.aRotation = a || 0);
		}
		function xc(t, e, n, i, r, o) {
			yc.call(this, t, e, n, n, i, r, o), (this.type = "ArcCurve");
		}
		function bc() {
			let t = 0,
				e = 0,
				n = 0,
				i = 0;
			function r(r, o, s, a) {
				(t = r),
					(e = s),
					(n = -3 * r + 3 * o - 2 * s - a),
					(i = 2 * r - 2 * o + s + a);
			}
			return {
				initCatmullRom: function (t, e, n, i, o) {
					r(e, n, o * (n - t), o * (i - e));
				},
				initNonuniformCatmullRom: function (t, e, n, i, o, s, a) {
					let c = (e - t) / o - (n - t) / (o + s) + (n - e) / s,
						l = (n - e) / s - (i - e) / (s + a) + (i - n) / a;
					(c *= s), (l *= s), r(e, n, c, l);
				},
				calc: function (r) {
					const o = r * r;
					return t + e * r + n * o + i * (o * r);
				},
			};
		}
		(hc.prototype = Object.assign(Object.create(cc.prototype), {
			constructor: hc,
			load: function (t, e, n, i) {
				void 0 === t && (t = ""),
					void 0 !== this.path && (t = this.path + t),
					(t = this.manager.resolveURL(t));
				const r = this,
					o = oc.get(t);
				if (void 0 !== o)
					return (
						r.manager.itemStart(t),
						setTimeout(function () {
							e && e(o), r.manager.itemEnd(t);
						}, 0),
						o
					);
				if (void 0 !== lc[t])
					return void lc[t].push({ onLoad: e, onProgress: n, onError: i });
				const s = t.match(/^data:(.*?)(;base64)?,(.*)$/);
				let a;
				if (s) {
					const n = s[1],
						o = !!s[2];
					let a = s[3];
					(a = decodeURIComponent(a)), o && (a = atob(a));
					try {
						let i;
						const o = (this.responseType || "").toLowerCase();
						switch (o) {
							case "arraybuffer":
							case "blob":
								const t = new Uint8Array(a.length);
								for (let e = 0; e < a.length; e++) t[e] = a.charCodeAt(e);
								i = "blob" === o ? new Blob([t.buffer], { type: n }) : t.buffer;
								break;
							case "document":
								const e = new DOMParser();
								i = e.parseFromString(a, n);
								break;
							case "json":
								i = JSON.parse(a);
								break;
							default:
								i = a;
						}
						setTimeout(function () {
							e && e(i), r.manager.itemEnd(t);
						}, 0);
					} catch (e) {
						setTimeout(function () {
							i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
						}, 0);
					}
				} else {
					(lc[t] = []),
						lc[t].push({ onLoad: e, onProgress: n, onError: i }),
						(a = new XMLHttpRequest()),
						a.open("GET", t, !0),
						a.addEventListener(
							"load",
							function (e) {
								const n = this.response,
									i = lc[t];
								if ((delete lc[t], 200 === this.status || 0 === this.status)) {
									0 === this.status &&
										console.warn("THREE.FileLoader: HTTP Status 0 received."),
										oc.add(t, n);
									for (let t = 0, e = i.length; t < e; t++) {
										const e = i[t];
										e.onLoad && e.onLoad(n);
									}
									r.manager.itemEnd(t);
								} else {
									for (let t = 0, n = i.length; t < n; t++) {
										const n = i[t];
										n.onError && n.onError(e);
									}
									r.manager.itemError(t), r.manager.itemEnd(t);
								}
							},
							!1
						),
						a.addEventListener(
							"progress",
							function (e) {
								const n = lc[t];
								for (let t = 0, i = n.length; t < i; t++) {
									const i = n[t];
									i.onProgress && i.onProgress(e);
								}
							},
							!1
						),
						a.addEventListener(
							"error",
							function (e) {
								const n = lc[t];
								delete lc[t];
								for (let t = 0, i = n.length; t < i; t++) {
									const i = n[t];
									i.onError && i.onError(e);
								}
								r.manager.itemError(t), r.manager.itemEnd(t);
							},
							!1
						),
						a.addEventListener(
							"abort",
							function (e) {
								const n = lc[t];
								delete lc[t];
								for (let t = 0, i = n.length; t < i; t++) {
									const i = n[t];
									i.onError && i.onError(e);
								}
								r.manager.itemError(t), r.manager.itemEnd(t);
							},
							!1
						),
						void 0 !== this.responseType &&
							(a.responseType = this.responseType),
						void 0 !== this.withCredentials &&
							(a.withCredentials = this.withCredentials),
						a.overrideMimeType &&
							a.overrideMimeType(
								void 0 !== this.mimeType ? this.mimeType : "text/plain"
							);
					for (const t in this.requestHeader)
						a.setRequestHeader(t, this.requestHeader[t]);
					a.send(null);
				}
				return r.manager.itemStart(t), a;
			},
			setResponseType: function (t) {
				return (this.responseType = t), this;
			},
			setWithCredentials: function (t) {
				return (this.withCredentials = t), this;
			},
			setMimeType: function (t) {
				return (this.mimeType = t), this;
			},
		})),
			(uc.prototype = Object.assign(Object.create(cc.prototype), {
				constructor: uc,
				load: function (t, e, n, i) {
					const r = this,
						o = new hc(r.manager);
					o.setPath(r.path),
						o.setRequestHeader(r.requestHeader),
						o.load(
							t,
							function (n) {
								try {
									e(r.parse(JSON.parse(n)));
								} catch (e) {
									i ? i(e) : console.error(e), r.manager.itemError(t);
								}
							},
							n,
							i
						);
				},
				parse: function (t) {
					const e = [];
					for (let n = 0; n < t.length; n++) {
						const i = ic.parse(t[n]);
						e.push(i);
					}
					return e;
				},
			})),
			(dc.prototype = Object.assign(Object.create(cc.prototype), {
				constructor: dc,
				load: function (t, e, n, i) {
					const r = this,
						o = [],
						s = new fs();
					s.image = o;
					const a = new hc(this.manager);
					a.setPath(this.path),
						a.setResponseType("arraybuffer"),
						a.setRequestHeader(this.requestHeader);
					let c = 0;
					function l(l) {
						a.load(
							t[l],
							function (t) {
								const n = r.parse(t, !0);
								(o[l] = {
									width: n.width,
									height: n.height,
									format: n.format,
									mipmaps: n.mipmaps,
								}),
									(c += 1),
									6 === c &&
										(1 === n.mipmapCount && (s.minFilter = 1006),
										(s.format = n.format),
										(s.needsUpdate = !0),
										e && e(s));
							},
							n,
							i
						);
					}
					if (Array.isArray(t)) for (let e = 0, n = t.length; e < n; ++e) l(e);
					else
						a.load(
							t,
							function (t) {
								const n = r.parse(t, !0);
								if (n.isCubemap) {
									const t = n.mipmaps.length / n.mipmapCount;
									for (let e = 0; e < t; e++) {
										o[e] = { mipmaps: [] };
										for (let t = 0; t < n.mipmapCount; t++)
											o[e].mipmaps.push(n.mipmaps[e * n.mipmapCount + t]),
												(o[e].format = n.format),
												(o[e].width = n.width),
												(o[e].height = n.height);
									}
								} else
									(s.image.width = n.width),
										(s.image.height = n.height),
										(s.mipmaps = n.mipmaps);
								1 === n.mipmapCount && (s.minFilter = 1006),
									(s.format = n.format),
									(s.needsUpdate = !0),
									e && e(s);
							},
							n,
							i
						);
					return s;
				},
			})),
			(pc.prototype = Object.assign(Object.create(cc.prototype), {
				constructor: pc,
				load: function (t, e, n, i) {
					const r = this,
						o = new ei(),
						s = new hc(this.manager);
					return (
						s.setResponseType("arraybuffer"),
						s.setRequestHeader(this.requestHeader),
						s.setPath(this.path),
						s.load(
							t,
							function (t) {
								const n = r.parse(t);
								n &&
									(void 0 !== n.image
										? (o.image = n.image)
										: void 0 !== n.data &&
										  ((o.image.width = n.width),
										  (o.image.height = n.height),
										  (o.image.data = n.data)),
									(o.wrapS = void 0 !== n.wrapS ? n.wrapS : 1001),
									(o.wrapT = void 0 !== n.wrapT ? n.wrapT : 1001),
									(o.magFilter = void 0 !== n.magFilter ? n.magFilter : 1006),
									(o.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006),
									(o.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1),
									void 0 !== n.format && (o.format = n.format),
									void 0 !== n.type && (o.type = n.type),
									void 0 !== n.mipmaps &&
										((o.mipmaps = n.mipmaps), (o.minFilter = 1008)),
									1 === n.mipmapCount && (o.minFilter = 1006),
									(o.needsUpdate = !0),
									e && e(o, n));
							},
							n,
							i
						),
						o
					);
				},
			})),
			(fc.prototype = Object.assign(Object.create(cc.prototype), {
				constructor: fc,
				load: function (t, e, n, i) {
					void 0 !== this.path && (t = this.path + t),
						(t = this.manager.resolveURL(t));
					const r = this,
						o = oc.get(t);
					if (void 0 !== o)
						return (
							r.manager.itemStart(t),
							setTimeout(function () {
								e && e(o), r.manager.itemEnd(t);
							}, 0),
							o
						);
					const s = document.createElementNS(
						"http://www.w3.org/1999/xhtml",
						"img"
					);
					function a() {
						s.removeEventListener("load", a, !1),
							s.removeEventListener("error", c, !1),
							oc.add(t, this),
							e && e(this),
							r.manager.itemEnd(t);
					}
					function c(e) {
						s.removeEventListener("load", a, !1),
							s.removeEventListener("error", c, !1),
							i && i(e),
							r.manager.itemError(t),
							r.manager.itemEnd(t);
					}
					return (
						s.addEventListener("load", a, !1),
						s.addEventListener("error", c, !1),
						"data:" !== t.substr(0, 5) &&
							void 0 !== this.crossOrigin &&
							(s.crossOrigin = this.crossOrigin),
						r.manager.itemStart(t),
						(s.src = t),
						s
					);
				},
			})),
			(mc.prototype = Object.assign(Object.create(cc.prototype), {
				constructor: mc,
				load: function (t, e, n, i) {
					const r = new Ti(),
						o = new fc(this.manager);
					o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
					let s = 0;
					function a(n) {
						o.load(
							t[n],
							function (t) {
								(r.images[n] = t),
									s++,
									6 === s && ((r.needsUpdate = !0), e && e(r));
							},
							void 0,
							i
						);
					}
					for (let e = 0; e < t.length; ++e) a(e);
					return r;
				},
			})),
			(gc.prototype = Object.assign(Object.create(cc.prototype), {
				constructor: gc,
				load: function (t, e, n, i) {
					const r = new xt(),
						o = new fc(this.manager);
					return (
						o.setCrossOrigin(this.crossOrigin),
						o.setPath(this.path),
						o.load(
							t,
							function (n) {
								r.image = n;
								const i =
									t.search(/\.jpe?g($|\?)/i) > 0 ||
									0 === t.search(/^data\:image\/jpeg/);
								(r.format = i ? 1022 : 1023),
									(r.needsUpdate = !0),
									void 0 !== e && e(r);
							},
							n,
							i
						),
						r
					);
				},
			})),
			Object.assign(vc.prototype, {
				getPoint: function () {
					return (
						console.warn("THREE.Curve: .getPoint() not implemented."), null
					);
				},
				getPointAt: function (t, e) {
					const n = this.getUtoTmapping(t);
					return this.getPoint(n, e);
				},
				getPoints: function (t) {
					void 0 === t && (t = 5);
					const e = [];
					for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
					return e;
				},
				getSpacedPoints: function (t) {
					void 0 === t && (t = 5);
					const e = [];
					for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
					return e;
				},
				getLength: function () {
					const t = this.getLengths();
					return t[t.length - 1];
				},
				getLengths: function (t) {
					if (
						(void 0 === t && (t = this.arcLengthDivisions),
						this.cacheArcLengths &&
							this.cacheArcLengths.length === t + 1 &&
							!this.needsUpdate)
					)
						return this.cacheArcLengths;
					this.needsUpdate = !1;
					const e = [];
					let n,
						i = this.getPoint(0),
						r = 0;
					e.push(0);
					for (let o = 1; o <= t; o++)
						(n = this.getPoint(o / t)),
							(r += n.distanceTo(i)),
							e.push(r),
							(i = n);
					return (this.cacheArcLengths = e), e;
				},
				updateArcLengths: function () {
					(this.needsUpdate = !0), this.getLengths();
				},
				getUtoTmapping: function (t, e) {
					const n = this.getLengths();
					let i,
						r = 0,
						o = n.length;
					i = e || t * n[o - 1];
					let s,
						a = 0,
						c = o - 1;
					for (; a <= c; )
						if (((r = Math.floor(a + (c - a) / 2)), (s = n[r] - i), s < 0))
							a = r + 1;
						else {
							if (!(s > 0)) {
								c = r;
								break;
							}
							c = r - 1;
						}
					if (((r = c), n[r] === i)) return r / (o - 1);
					const l = n[r];
					return (r + (i - l) / (n[r + 1] - l)) / (o - 1);
				},
				getTangent: function (t, e) {
					let n = t - 1e-4,
						i = t + 1e-4;
					n < 0 && (n = 0), i > 1 && (i = 1);
					const r = this.getPoint(n),
						o = this.getPoint(i),
						s = e || (r.isVector2 ? new ft() : new Et());
					return s.copy(o).sub(r).normalize(), s;
				},
				getTangentAt: function (t, e) {
					const n = this.getUtoTmapping(t);
					return this.getTangent(n, e);
				},
				computeFrenetFrames: function (t, e) {
					const n = new Et(),
						i = [],
						r = [],
						o = [],
						s = new Et(),
						a = new Dt();
					for (let e = 0; e <= t; e++) {
						const n = e / t;
						(i[e] = this.getTangentAt(n, new Et())), i[e].normalize();
					}
					(r[0] = new Et()), (o[0] = new Et());
					let c = Number.MAX_VALUE;
					const l = Math.abs(i[0].x),
						h = Math.abs(i[0].y),
						u = Math.abs(i[0].z);
					l <= c && ((c = l), n.set(1, 0, 0)),
						h <= c && ((c = h), n.set(0, 1, 0)),
						u <= c && n.set(0, 0, 1),
						s.crossVectors(i[0], n).normalize(),
						r[0].crossVectors(i[0], s),
						o[0].crossVectors(i[0], r[0]);
					for (let e = 1; e <= t; e++) {
						if (
							((r[e] = r[e - 1].clone()),
							(o[e] = o[e - 1].clone()),
							s.crossVectors(i[e - 1], i[e]),
							s.length() > Number.EPSILON)
						) {
							s.normalize();
							const t = Math.acos(pt.clamp(i[e - 1].dot(i[e]), -1, 1));
							r[e].applyMatrix4(a.makeRotationAxis(s, t));
						}
						o[e].crossVectors(i[e], r[e]);
					}
					if (!0 === e) {
						let e = Math.acos(pt.clamp(r[0].dot(r[t]), -1, 1));
						(e /= t), i[0].dot(s.crossVectors(r[0], r[t])) > 0 && (e = -e);
						for (let n = 1; n <= t; n++)
							r[n].applyMatrix4(a.makeRotationAxis(i[n], e * n)),
								o[n].crossVectors(i[n], r[n]);
					}
					return { tangents: i, normals: r, binormals: o };
				},
				clone: function () {
					return new this.constructor().copy(this);
				},
				copy: function (t) {
					return (this.arcLengthDivisions = t.arcLengthDivisions), this;
				},
				toJSON: function () {
					const t = {
						metadata: {
							version: 4.5,
							type: "Curve",
							generator: "Curve.toJSON",
						},
					};
					return (
						(t.arcLengthDivisions = this.arcLengthDivisions),
						(t.type = this.type),
						t
					);
				},
				fromJSON: function (t) {
					return (this.arcLengthDivisions = t.arcLengthDivisions), this;
				},
			}),
			(yc.prototype = Object.create(vc.prototype)),
			(yc.prototype.constructor = yc),
			(yc.prototype.isEllipseCurve = !0),
			(yc.prototype.getPoint = function (t, e) {
				const n = e || new ft(),
					i = 2 * Math.PI;
				let r = this.aEndAngle - this.aStartAngle;
				const o = Math.abs(r) < Number.EPSILON;
				for (; r < 0; ) r += i;
				for (; r > i; ) r -= i;
				r < Number.EPSILON && (r = o ? 0 : i),
					!0 !== this.aClockwise || o || (r === i ? (r = -i) : (r -= i));
				const s = this.aStartAngle + t * r;
				let a = this.aX + this.xRadius * Math.cos(s),
					c = this.aY + this.yRadius * Math.sin(s);
				if (0 !== this.aRotation) {
					const t = Math.cos(this.aRotation),
						e = Math.sin(this.aRotation),
						n = a - this.aX,
						i = c - this.aY;
					(a = n * t - i * e + this.aX), (c = n * e + i * t + this.aY);
				}
				return n.set(a, c);
			}),
			(yc.prototype.copy = function (t) {
				return (
					vc.prototype.copy.call(this, t),
					(this.aX = t.aX),
					(this.aY = t.aY),
					(this.xRadius = t.xRadius),
					(this.yRadius = t.yRadius),
					(this.aStartAngle = t.aStartAngle),
					(this.aEndAngle = t.aEndAngle),
					(this.aClockwise = t.aClockwise),
					(this.aRotation = t.aRotation),
					this
				);
			}),
			(yc.prototype.toJSON = function () {
				const t = vc.prototype.toJSON.call(this);
				return (
					(t.aX = this.aX),
					(t.aY = this.aY),
					(t.xRadius = this.xRadius),
					(t.yRadius = this.yRadius),
					(t.aStartAngle = this.aStartAngle),
					(t.aEndAngle = this.aEndAngle),
					(t.aClockwise = this.aClockwise),
					(t.aRotation = this.aRotation),
					t
				);
			}),
			(yc.prototype.fromJSON = function (t) {
				return (
					vc.prototype.fromJSON.call(this, t),
					(this.aX = t.aX),
					(this.aY = t.aY),
					(this.xRadius = t.xRadius),
					(this.yRadius = t.yRadius),
					(this.aStartAngle = t.aStartAngle),
					(this.aEndAngle = t.aEndAngle),
					(this.aClockwise = t.aClockwise),
					(this.aRotation = t.aRotation),
					this
				);
			}),
			(xc.prototype = Object.create(yc.prototype)),
			(xc.prototype.constructor = xc),
			(xc.prototype.isArcCurve = !0);
		const wc = new Et(),
			_c = new bc(),
			Mc = new bc(),
			Sc = new bc();
		function Tc(t, e, n, i) {
			vc.call(this),
				(this.type = "CatmullRomCurve3"),
				(this.points = t || []),
				(this.closed = e || !1),
				(this.curveType = n || "centripetal"),
				(this.tension = void 0 !== i ? i : 0.5);
		}
		function Ec(t, e, n, i, r) {
			const o = 0.5 * (i - e),
				s = 0.5 * (r - n),
				a = t * t;
			return (
				(2 * n - 2 * i + o + s) * (t * a) +
				(-3 * n + 3 * i - 2 * o - s) * a +
				o * t +
				n
			);
		}
		function Ac(t, e, n, i) {
			return (
				(function (t, e) {
					const n = 1 - t;
					return n * n * e;
				})(t, e) +
				(function (t, e) {
					return 2 * (1 - t) * t * e;
				})(t, n) +
				(function (t, e) {
					return t * t * e;
				})(t, i)
			);
		}
		function Lc(t, e, n, i, r) {
			return (
				(function (t, e) {
					const n = 1 - t;
					return n * n * n * e;
				})(t, e) +
				(function (t, e) {
					const n = 1 - t;
					return 3 * n * n * t * e;
				})(t, n) +
				(function (t, e) {
					return 3 * (1 - t) * t * t * e;
				})(t, i) +
				(function (t, e) {
					return t * t * t * e;
				})(t, r)
			);
		}
		function Rc(t, e, n, i) {
			vc.call(this),
				(this.type = "CubicBezierCurve"),
				(this.v0 = t || new ft()),
				(this.v1 = e || new ft()),
				(this.v2 = n || new ft()),
				(this.v3 = i || new ft());
		}
		function Pc(t, e, n, i) {
			vc.call(this),
				(this.type = "CubicBezierCurve3"),
				(this.v0 = t || new Et()),
				(this.v1 = e || new Et()),
				(this.v2 = n || new Et()),
				(this.v3 = i || new Et());
		}
		function Cc(t, e) {
			vc.call(this),
				(this.type = "LineCurve"),
				(this.v1 = t || new ft()),
				(this.v2 = e || new ft());
		}
		function Ic(t, e) {
			vc.call(this),
				(this.type = "LineCurve3"),
				(this.v1 = t || new Et()),
				(this.v2 = e || new Et());
		}
		function Oc(t, e, n) {
			vc.call(this),
				(this.type = "QuadraticBezierCurve"),
				(this.v0 = t || new ft()),
				(this.v1 = e || new ft()),
				(this.v2 = n || new ft());
		}
		function Dc(t, e, n) {
			vc.call(this),
				(this.type = "QuadraticBezierCurve3"),
				(this.v0 = t || new Et()),
				(this.v1 = e || new Et()),
				(this.v2 = n || new Et());
		}
		function Nc(t) {
			vc.call(this), (this.type = "SplineCurve"), (this.points = t || []);
		}
		(Tc.prototype = Object.create(vc.prototype)),
			(Tc.prototype.constructor = Tc),
			(Tc.prototype.isCatmullRomCurve3 = !0),
			(Tc.prototype.getPoint = function (t, e) {
				const n = e || new Et(),
					i = this.points,
					r = i.length,
					o = (r - (this.closed ? 0 : 1)) * t;
				let s,
					a,
					c,
					l,
					h = Math.floor(o),
					u = o - h;
				if (
					(this.closed
						? (h += h > 0 ? 0 : (Math.floor(Math.abs(h) / r) + 1) * r)
						: 0 === u && h === r - 1 && ((h = r - 2), (u = 1)),
					this.closed || h > 0
						? (s = i[(h - 1) % r])
						: (wc.subVectors(i[0], i[1]).add(i[0]), (s = wc)),
					(a = i[h % r]),
					(c = i[(h + 1) % r]),
					this.closed || h + 2 < r
						? (l = i[(h + 2) % r])
						: (wc.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), (l = wc)),
					"centripetal" === this.curveType || "chordal" === this.curveType)
				) {
					const t = "chordal" === this.curveType ? 0.5 : 0.25;
					let e = Math.pow(s.distanceToSquared(a), t),
						n = Math.pow(a.distanceToSquared(c), t),
						i = Math.pow(c.distanceToSquared(l), t);
					n < 1e-4 && (n = 1),
						e < 1e-4 && (e = n),
						i < 1e-4 && (i = n),
						_c.initNonuniformCatmullRom(s.x, a.x, c.x, l.x, e, n, i),
						Mc.initNonuniformCatmullRom(s.y, a.y, c.y, l.y, e, n, i),
						Sc.initNonuniformCatmullRom(s.z, a.z, c.z, l.z, e, n, i);
				} else
					"catmullrom" === this.curveType &&
						(_c.initCatmullRom(s.x, a.x, c.x, l.x, this.tension),
						Mc.initCatmullRom(s.y, a.y, c.y, l.y, this.tension),
						Sc.initCatmullRom(s.z, a.z, c.z, l.z, this.tension));
				return n.set(_c.calc(u), Mc.calc(u), Sc.calc(u)), n;
			}),
			(Tc.prototype.copy = function (t) {
				vc.prototype.copy.call(this, t), (this.points = []);
				for (let e = 0, n = t.points.length; e < n; e++) {
					const n = t.points[e];
					this.points.push(n.clone());
				}
				return (
					(this.closed = t.closed),
					(this.curveType = t.curveType),
					(this.tension = t.tension),
					this
				);
			}),
			(Tc.prototype.toJSON = function () {
				const t = vc.prototype.toJSON.call(this);
				t.points = [];
				for (let e = 0, n = this.points.length; e < n; e++) {
					const n = this.points[e];
					t.points.push(n.toArray());
				}
				return (
					(t.closed = this.closed),
					(t.curveType = this.curveType),
					(t.tension = this.tension),
					t
				);
			}),
			(Tc.prototype.fromJSON = function (t) {
				vc.prototype.fromJSON.call(this, t), (this.points = []);
				for (let e = 0, n = t.points.length; e < n; e++) {
					const n = t.points[e];
					this.points.push(new Et().fromArray(n));
				}
				return (
					(this.closed = t.closed),
					(this.curveType = t.curveType),
					(this.tension = t.tension),
					this
				);
			}),
			(Rc.prototype = Object.create(vc.prototype)),
			(Rc.prototype.constructor = Rc),
			(Rc.prototype.isCubicBezierCurve = !0),
			(Rc.prototype.getPoint = function (t, e) {
				const n = e || new ft(),
					i = this.v0,
					r = this.v1,
					o = this.v2,
					s = this.v3;
				return n.set(Lc(t, i.x, r.x, o.x, s.x), Lc(t, i.y, r.y, o.y, s.y)), n;
			}),
			(Rc.prototype.copy = function (t) {
				return (
					vc.prototype.copy.call(this, t),
					this.v0.copy(t.v0),
					this.v1.copy(t.v1),
					this.v2.copy(t.v2),
					this.v3.copy(t.v3),
					this
				);
			}),
			(Rc.prototype.toJSON = function () {
				const t = vc.prototype.toJSON.call(this);
				return (
					(t.v0 = this.v0.toArray()),
					(t.v1 = this.v1.toArray()),
					(t.v2 = this.v2.toArray()),
					(t.v3 = this.v3.toArray()),
					t
				);
			}),
			(Rc.prototype.fromJSON = function (t) {
				return (
					vc.prototype.fromJSON.call(this, t),
					this.v0.fromArray(t.v0),
					this.v1.fromArray(t.v1),
					this.v2.fromArray(t.v2),
					this.v3.fromArray(t.v3),
					this
				);
			}),
			(Pc.prototype = Object.create(vc.prototype)),
			(Pc.prototype.constructor = Pc),
			(Pc.prototype.isCubicBezierCurve3 = !0),
			(Pc.prototype.getPoint = function (t, e) {
				const n = e || new Et(),
					i = this.v0,
					r = this.v1,
					o = this.v2,
					s = this.v3;
				return (
					n.set(
						Lc(t, i.x, r.x, o.x, s.x),
						Lc(t, i.y, r.y, o.y, s.y),
						Lc(t, i.z, r.z, o.z, s.z)
					),
					n
				);
			}),
			(Pc.prototype.copy = function (t) {
				return (
					vc.prototype.copy.call(this, t),
					this.v0.copy(t.v0),
					this.v1.copy(t.v1),
					this.v2.copy(t.v2),
					this.v3.copy(t.v3),
					this
				);
			}),
			(Pc.prototype.toJSON = function () {
				const t = vc.prototype.toJSON.call(this);
				return (
					(t.v0 = this.v0.toArray()),
					(t.v1 = this.v1.toArray()),
					(t.v2 = this.v2.toArray()),
					(t.v3 = this.v3.toArray()),
					t
				);
			}),
			(Pc.prototype.fromJSON = function (t) {
				return (
					vc.prototype.fromJSON.call(this, t),
					this.v0.fromArray(t.v0),
					this.v1.fromArray(t.v1),
					this.v2.fromArray(t.v2),
					this.v3.fromArray(t.v3),
					this
				);
			}),
			(Cc.prototype = Object.create(vc.prototype)),
			(Cc.prototype.constructor = Cc),
			(Cc.prototype.isLineCurve = !0),
			(Cc.prototype.getPoint = function (t, e) {
				const n = e || new ft();
				return (
					1 === t
						? n.copy(this.v2)
						: (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
					n
				);
			}),
			(Cc.prototype.getPointAt = function (t, e) {
				return this.getPoint(t, e);
			}),
			(Cc.prototype.getTangent = function (t, e) {
				const n = e || new ft();
				return n.copy(this.v2).sub(this.v1).normalize(), n;
			}),
			(Cc.prototype.copy = function (t) {
				return (
					vc.prototype.copy.call(this, t),
					this.v1.copy(t.v1),
					this.v2.copy(t.v2),
					this
				);
			}),
			(Cc.prototype.toJSON = function () {
				const t = vc.prototype.toJSON.call(this);
				return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
			}),
			(Cc.prototype.fromJSON = function (t) {
				return (
					vc.prototype.fromJSON.call(this, t),
					this.v1.fromArray(t.v1),
					this.v2.fromArray(t.v2),
					this
				);
			}),
			(Ic.prototype = Object.create(vc.prototype)),
			(Ic.prototype.constructor = Ic),
			(Ic.prototype.isLineCurve3 = !0),
			(Ic.prototype.getPoint = function (t, e) {
				const n = e || new Et();
				return (
					1 === t
						? n.copy(this.v2)
						: (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
					n
				);
			}),
			(Ic.prototype.getPointAt = function (t, e) {
				return this.getPoint(t, e);
			}),
			(Ic.prototype.copy = function (t) {
				return (
					vc.prototype.copy.call(this, t),
					this.v1.copy(t.v1),
					this.v2.copy(t.v2),
					this
				);
			}),
			(Ic.prototype.toJSON = function () {
				const t = vc.prototype.toJSON.call(this);
				return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
			}),
			(Ic.prototype.fromJSON = function (t) {
				return (
					vc.prototype.fromJSON.call(this, t),
					this.v1.fromArray(t.v1),
					this.v2.fromArray(t.v2),
					this
				);
			}),
			(Oc.prototype = Object.create(vc.prototype)),
			(Oc.prototype.constructor = Oc),
			(Oc.prototype.isQuadraticBezierCurve = !0),
			(Oc.prototype.getPoint = function (t, e) {
				const n = e || new ft(),
					i = this.v0,
					r = this.v1,
					o = this.v2;
				return n.set(Ac(t, i.x, r.x, o.x), Ac(t, i.y, r.y, o.y)), n;
			}),
			(Oc.prototype.copy = function (t) {
				return (
					vc.prototype.copy.call(this, t),
					this.v0.copy(t.v0),
					this.v1.copy(t.v1),
					this.v2.copy(t.v2),
					this
				);
			}),
			(Oc.prototype.toJSON = function () {
				const t = vc.prototype.toJSON.call(this);
				return (
					(t.v0 = this.v0.toArray()),
					(t.v1 = this.v1.toArray()),
					(t.v2 = this.v2.toArray()),
					t
				);
			}),
			(Oc.prototype.fromJSON = function (t) {
				return (
					vc.prototype.fromJSON.call(this, t),
					this.v0.fromArray(t.v0),
					this.v1.fromArray(t.v1),
					this.v2.fromArray(t.v2),
					this
				);
			}),
			(Dc.prototype = Object.create(vc.prototype)),
			(Dc.prototype.constructor = Dc),
			(Dc.prototype.isQuadraticBezierCurve3 = !0),
			(Dc.prototype.getPoint = function (t, e) {
				const n = e || new Et(),
					i = this.v0,
					r = this.v1,
					o = this.v2;
				return (
					n.set(
						Ac(t, i.x, r.x, o.x),
						Ac(t, i.y, r.y, o.y),
						Ac(t, i.z, r.z, o.z)
					),
					n
				);
			}),
			(Dc.prototype.copy = function (t) {
				return (
					vc.prototype.copy.call(this, t),
					this.v0.copy(t.v0),
					this.v1.copy(t.v1),
					this.v2.copy(t.v2),
					this
				);
			}),
			(Dc.prototype.toJSON = function () {
				const t = vc.prototype.toJSON.call(this);
				return (
					(t.v0 = this.v0.toArray()),
					(t.v1 = this.v1.toArray()),
					(t.v2 = this.v2.toArray()),
					t
				);
			}),
			(Dc.prototype.fromJSON = function (t) {
				return (
					vc.prototype.fromJSON.call(this, t),
					this.v0.fromArray(t.v0),
					this.v1.fromArray(t.v1),
					this.v2.fromArray(t.v2),
					this
				);
			}),
			(Nc.prototype = Object.create(vc.prototype)),
			(Nc.prototype.constructor = Nc),
			(Nc.prototype.isSplineCurve = !0),
			(Nc.prototype.getPoint = function (t, e) {
				const n = e || new ft(),
					i = this.points,
					r = (i.length - 1) * t,
					o = Math.floor(r),
					s = r - o,
					a = i[0 === o ? o : o - 1],
					c = i[o],
					l = i[o > i.length - 2 ? i.length - 1 : o + 1],
					h = i[o > i.length - 3 ? i.length - 1 : o + 2];
				return n.set(Ec(s, a.x, c.x, l.x, h.x), Ec(s, a.y, c.y, l.y, h.y)), n;
			}),
			(Nc.prototype.copy = function (t) {
				vc.prototype.copy.call(this, t), (this.points = []);
				for (let e = 0, n = t.points.length; e < n; e++) {
					const n = t.points[e];
					this.points.push(n.clone());
				}
				return this;
			}),
			(Nc.prototype.toJSON = function () {
				const t = vc.prototype.toJSON.call(this);
				t.points = [];
				for (let e = 0, n = this.points.length; e < n; e++) {
					const n = this.points[e];
					t.points.push(n.toArray());
				}
				return t;
			}),
			(Nc.prototype.fromJSON = function (t) {
				vc.prototype.fromJSON.call(this, t), (this.points = []);
				for (let e = 0, n = t.points.length; e < n; e++) {
					const n = t.points[e];
					this.points.push(new ft().fromArray(n));
				}
				return this;
			});
		var zc = Object.freeze({
			__proto__: null,
			ArcCurve: xc,
			CatmullRomCurve3: Tc,
			CubicBezierCurve: Rc,
			CubicBezierCurve3: Pc,
			EllipseCurve: yc,
			LineCurve: Cc,
			LineCurve3: Ic,
			QuadraticBezierCurve: Oc,
			QuadraticBezierCurve3: Dc,
			SplineCurve: Nc,
		});
		function Uc() {
			vc.call(this),
				(this.type = "CurvePath"),
				(this.curves = []),
				(this.autoClose = !1);
		}
		function Hc(t) {
			Uc.call(this),
				(this.type = "Path"),
				(this.currentPoint = new ft()),
				t && this.setFromPoints(t);
		}
		function Bc(t) {
			Hc.call(this, t),
				(this.uuid = pt.generateUUID()),
				(this.type = "Shape"),
				(this.holes = []);
		}
		function Fc(t, e) {
			Qt.call(this),
				(this.type = "Light"),
				(this.color = new je(t)),
				(this.intensity = void 0 !== e ? e : 1),
				(this.receiveShadow = void 0);
		}
		function kc(t, e, n) {
			Fc.call(this, t, n),
				(this.type = "HemisphereLight"),
				(this.castShadow = void 0),
				this.position.copy(Qt.DefaultUp),
				this.updateMatrix(),
				(this.groundColor = new je(e));
		}
		function Gc(t) {
			(this.camera = t),
				(this.bias = 0),
				(this.normalBias = 0),
				(this.radius = 1),
				(this.mapSize = new ft(512, 512)),
				(this.map = null),
				(this.mapPass = null),
				(this.matrix = new Dt()),
				(this.autoUpdate = !0),
				(this.needsUpdate = !1),
				(this._frustum = new ri()),
				(this._frameExtents = new ft(1, 1)),
				(this._viewportCount = 1),
				(this._viewports = [new bt(0, 0, 1, 1)]);
		}
		function jc() {
			Gc.call(this, new Qn(50, 1, 0.5, 500));
		}
		function Vc(t, e, n, i, r, o) {
			Fc.call(this, t, e),
				(this.type = "SpotLight"),
				this.position.copy(Qt.DefaultUp),
				this.updateMatrix(),
				(this.target = new Qt()),
				Object.defineProperty(this, "power", {
					get: function () {
						return this.intensity * Math.PI;
					},
					set: function (t) {
						this.intensity = t / Math.PI;
					},
				}),
				(this.distance = void 0 !== n ? n : 0),
				(this.angle = void 0 !== i ? i : Math.PI / 3),
				(this.penumbra = void 0 !== r ? r : 0),
				(this.decay = void 0 !== o ? o : 1),
				(this.shadow = new jc());
		}
		function Wc() {
			Gc.call(this, new Qn(90, 1, 0.5, 500)),
				(this._frameExtents = new ft(4, 2)),
				(this._viewportCount = 6),
				(this._viewports = [
					new bt(2, 1, 1, 1),
					new bt(0, 1, 1, 1),
					new bt(3, 1, 1, 1),
					new bt(1, 1, 1, 1),
					new bt(3, 0, 1, 1),
					new bt(1, 0, 1, 1),
				]),
				(this._cubeDirections = [
					new Et(1, 0, 0),
					new Et(-1, 0, 0),
					new Et(0, 0, 1),
					new Et(0, 0, -1),
					new Et(0, 1, 0),
					new Et(0, -1, 0),
				]),
				(this._cubeUps = [
					new Et(0, 1, 0),
					new Et(0, 1, 0),
					new Et(0, 1, 0),
					new Et(0, 1, 0),
					new Et(0, 0, 1),
					new Et(0, 0, -1),
				]);
		}
		function qc(t, e, n, i) {
			Fc.call(this, t, e),
				(this.type = "PointLight"),
				Object.defineProperty(this, "power", {
					get: function () {
						return 4 * this.intensity * Math.PI;
					},
					set: function (t) {
						this.intensity = t / (4 * Math.PI);
					},
				}),
				(this.distance = void 0 !== n ? n : 0),
				(this.decay = void 0 !== i ? i : 1),
				(this.shadow = new Wc());
		}
		function Xc(t, e, n, i, r, o) {
			Kn.call(this),
				(this.type = "OrthographicCamera"),
				(this.zoom = 1),
				(this.view = null),
				(this.left = void 0 !== t ? t : -1),
				(this.right = void 0 !== e ? e : 1),
				(this.top = void 0 !== n ? n : 1),
				(this.bottom = void 0 !== i ? i : -1),
				(this.near = void 0 !== r ? r : 0.1),
				(this.far = void 0 !== o ? o : 2e3),
				this.updateProjectionMatrix();
		}
		function Yc() {
			Gc.call(this, new Xc(-5, 5, 5, -5, 0.5, 500));
		}
		function Zc(t, e) {
			Fc.call(this, t, e),
				(this.type = "DirectionalLight"),
				this.position.copy(Qt.DefaultUp),
				this.updateMatrix(),
				(this.target = new Qt()),
				(this.shadow = new Yc());
		}
		function Jc(t, e) {
			Fc.call(this, t, e),
				(this.type = "AmbientLight"),
				(this.castShadow = void 0);
		}
		function Kc(t, e, n, i) {
			Fc.call(this, t, e),
				(this.type = "RectAreaLight"),
				(this.width = void 0 !== n ? n : 10),
				(this.height = void 0 !== i ? i : 10);
		}
		function Qc() {
			this.coefficients = [];
			for (let t = 0; t < 9; t++) this.coefficients.push(new Et());
		}
		function $c(t, e) {
			Fc.call(this, void 0, e),
				(this.type = "LightProbe"),
				(this.sh = void 0 !== t ? t : new Qc());
		}
		function tl(t) {
			cc.call(this, t), (this.textures = {});
		}
		(Uc.prototype = Object.assign(Object.create(vc.prototype), {
			constructor: Uc,
			add: function (t) {
				this.curves.push(t);
			},
			closePath: function () {
				const t = this.curves[0].getPoint(0),
					e = this.curves[this.curves.length - 1].getPoint(1);
				t.equals(e) || this.curves.push(new Cc(e, t));
			},
			getPoint: function (t) {
				const e = t * this.getLength(),
					n = this.getCurveLengths();
				let i = 0;
				for (; i < n.length; ) {
					if (n[i] >= e) {
						const t = n[i] - e,
							r = this.curves[i],
							o = r.getLength(),
							s = 0 === o ? 0 : 1 - t / o;
						return r.getPointAt(s);
					}
					i++;
				}
				return null;
			},
			getLength: function () {
				const t = this.getCurveLengths();
				return t[t.length - 1];
			},
			updateArcLengths: function () {
				(this.needsUpdate = !0),
					(this.cacheLengths = null),
					this.getCurveLengths();
			},
			getCurveLengths: function () {
				if (
					this.cacheLengths &&
					this.cacheLengths.length === this.curves.length
				)
					return this.cacheLengths;
				const t = [];
				let e = 0;
				for (let n = 0, i = this.curves.length; n < i; n++)
					(e += this.curves[n].getLength()), t.push(e);
				return (this.cacheLengths = t), t;
			},
			getSpacedPoints: function (t) {
				void 0 === t && (t = 40);
				const e = [];
				for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
				return this.autoClose && e.push(e[0]), e;
			},
			getPoints: function (t) {
				t = t || 12;
				const e = [];
				let n;
				for (let i = 0, r = this.curves; i < r.length; i++) {
					const o = r[i],
						s =
							o && o.isEllipseCurve
								? 2 * t
								: o && (o.isLineCurve || o.isLineCurve3)
								? 1
								: o && o.isSplineCurve
								? t * o.points.length
								: t,
						a = o.getPoints(s);
					for (let t = 0; t < a.length; t++) {
						const i = a[t];
						(n && n.equals(i)) || (e.push(i), (n = i));
					}
				}
				return (
					this.autoClose &&
						e.length > 1 &&
						!e[e.length - 1].equals(e[0]) &&
						e.push(e[0]),
					e
				);
			},
			copy: function (t) {
				vc.prototype.copy.call(this, t), (this.curves = []);
				for (let e = 0, n = t.curves.length; e < n; e++) {
					const n = t.curves[e];
					this.curves.push(n.clone());
				}
				return (this.autoClose = t.autoClose), this;
			},
			toJSON: function () {
				const t = vc.prototype.toJSON.call(this);
				(t.autoClose = this.autoClose), (t.curves = []);
				for (let e = 0, n = this.curves.length; e < n; e++) {
					const n = this.curves[e];
					t.curves.push(n.toJSON());
				}
				return t;
			},
			fromJSON: function (t) {
				vc.prototype.fromJSON.call(this, t),
					(this.autoClose = t.autoClose),
					(this.curves = []);
				for (let e = 0, n = t.curves.length; e < n; e++) {
					const n = t.curves[e];
					this.curves.push(new zc[n.type]().fromJSON(n));
				}
				return this;
			},
		})),
			(Hc.prototype = Object.assign(Object.create(Uc.prototype), {
				constructor: Hc,
				setFromPoints: function (t) {
					this.moveTo(t[0].x, t[0].y);
					for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
					return this;
				},
				moveTo: function (t, e) {
					return this.currentPoint.set(t, e), this;
				},
				lineTo: function (t, e) {
					const n = new Cc(this.currentPoint.clone(), new ft(t, e));
					return this.curves.push(n), this.currentPoint.set(t, e), this;
				},
				quadraticCurveTo: function (t, e, n, i) {
					const r = new Oc(
						this.currentPoint.clone(),
						new ft(t, e),
						new ft(n, i)
					);
					return this.curves.push(r), this.currentPoint.set(n, i), this;
				},
				bezierCurveTo: function (t, e, n, i, r, o) {
					const s = new Rc(
						this.currentPoint.clone(),
						new ft(t, e),
						new ft(n, i),
						new ft(r, o)
					);
					return this.curves.push(s), this.currentPoint.set(r, o), this;
				},
				splineThru: function (t) {
					const e = new Nc([this.currentPoint.clone()].concat(t));
					return (
						this.curves.push(e), this.currentPoint.copy(t[t.length - 1]), this
					);
				},
				arc: function (t, e, n, i, r, o) {
					const s = this.currentPoint.x,
						a = this.currentPoint.y;
					return this.absarc(t + s, e + a, n, i, r, o), this;
				},
				absarc: function (t, e, n, i, r, o) {
					return this.absellipse(t, e, n, n, i, r, o), this;
				},
				ellipse: function (t, e, n, i, r, o, s, a) {
					const c = this.currentPoint.x,
						l = this.currentPoint.y;
					return this.absellipse(t + c, e + l, n, i, r, o, s, a), this;
				},
				absellipse: function (t, e, n, i, r, o, s, a) {
					const c = new yc(t, e, n, i, r, o, s, a);
					if (this.curves.length > 0) {
						const t = c.getPoint(0);
						t.equals(this.currentPoint) || this.lineTo(t.x, t.y);
					}
					this.curves.push(c);
					const l = c.getPoint(1);
					return this.currentPoint.copy(l), this;
				},
				copy: function (t) {
					return (
						Uc.prototype.copy.call(this, t),
						this.currentPoint.copy(t.currentPoint),
						this
					);
				},
				toJSON: function () {
					const t = Uc.prototype.toJSON.call(this);
					return (t.currentPoint = this.currentPoint.toArray()), t;
				},
				fromJSON: function (t) {
					return (
						Uc.prototype.fromJSON.call(this, t),
						this.currentPoint.fromArray(t.currentPoint),
						this
					);
				},
			})),
			(Bc.prototype = Object.assign(Object.create(Hc.prototype), {
				constructor: Bc,
				getPointsHoles: function (t) {
					const e = [];
					for (let n = 0, i = this.holes.length; n < i; n++)
						e[n] = this.holes[n].getPoints(t);
					return e;
				},
				extractPoints: function (t) {
					return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
				},
				copy: function (t) {
					Hc.prototype.copy.call(this, t), (this.holes = []);
					for (let e = 0, n = t.holes.length; e < n; e++) {
						const n = t.holes[e];
						this.holes.push(n.clone());
					}
					return this;
				},
				toJSON: function () {
					const t = Hc.prototype.toJSON.call(this);
					(t.uuid = this.uuid), (t.holes = []);
					for (let e = 0, n = this.holes.length; e < n; e++) {
						const n = this.holes[e];
						t.holes.push(n.toJSON());
					}
					return t;
				},
				fromJSON: function (t) {
					Hc.prototype.fromJSON.call(this, t),
						(this.uuid = t.uuid),
						(this.holes = []);
					for (let e = 0, n = t.holes.length; e < n; e++) {
						const n = t.holes[e];
						this.holes.push(new Hc().fromJSON(n));
					}
					return this;
				},
			})),
			(Fc.prototype = Object.assign(Object.create(Qt.prototype), {
				constructor: Fc,
				isLight: !0,
				copy: function (t) {
					return (
						Qt.prototype.copy.call(this, t),
						this.color.copy(t.color),
						(this.intensity = t.intensity),
						this
					);
				},
				toJSON: function (t) {
					const e = Qt.prototype.toJSON.call(this, t);
					return (
						(e.object.color = this.color.getHex()),
						(e.object.intensity = this.intensity),
						void 0 !== this.groundColor &&
							(e.object.groundColor = this.groundColor.getHex()),
						void 0 !== this.distance && (e.object.distance = this.distance),
						void 0 !== this.angle && (e.object.angle = this.angle),
						void 0 !== this.decay && (e.object.decay = this.decay),
						void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
						void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
						e
					);
				},
			})),
			(kc.prototype = Object.assign(Object.create(Fc.prototype), {
				constructor: kc,
				isHemisphereLight: !0,
				copy: function (t) {
					return (
						Fc.prototype.copy.call(this, t),
						this.groundColor.copy(t.groundColor),
						this
					);
				},
			})),
			Object.assign(Gc.prototype, {
				_projScreenMatrix: new Dt(),
				_lightPositionWorld: new Et(),
				_lookTarget: new Et(),
				getViewportCount: function () {
					return this._viewportCount;
				},
				getFrustum: function () {
					return this._frustum;
				},
				updateMatrices: function (t) {
					const e = this.camera,
						n = this.matrix,
						i = this._projScreenMatrix,
						r = this._lookTarget,
						o = this._lightPositionWorld;
					o.setFromMatrixPosition(t.matrixWorld),
						e.position.copy(o),
						r.setFromMatrixPosition(t.target.matrixWorld),
						e.lookAt(r),
						e.updateMatrixWorld(),
						i.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
						this._frustum.setFromProjectionMatrix(i),
						n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
						n.multiply(e.projectionMatrix),
						n.multiply(e.matrixWorldInverse);
				},
				getViewport: function (t) {
					return this._viewports[t];
				},
				getFrameExtents: function () {
					return this._frameExtents;
				},
				copy: function (t) {
					return (
						(this.camera = t.camera.clone()),
						(this.bias = t.bias),
						(this.radius = t.radius),
						this.mapSize.copy(t.mapSize),
						this
					);
				},
				clone: function () {
					return new this.constructor().copy(this);
				},
				toJSON: function () {
					const t = {};
					return (
						0 !== this.bias && (t.bias = this.bias),
						0 !== this.normalBias && (t.normalBias = this.normalBias),
						1 !== this.radius && (t.radius = this.radius),
						(512 === this.mapSize.x && 512 === this.mapSize.y) ||
							(t.mapSize = this.mapSize.toArray()),
						(t.camera = this.camera.toJSON(!1).object),
						delete t.camera.matrix,
						t
					);
				},
			}),
			(jc.prototype = Object.assign(Object.create(Gc.prototype), {
				constructor: jc,
				isSpotLightShadow: !0,
				updateMatrices: function (t) {
					const e = this.camera,
						n = 2 * pt.RAD2DEG * t.angle,
						i = this.mapSize.width / this.mapSize.height,
						r = t.distance || e.far;
					(n === e.fov && i === e.aspect && r === e.far) ||
						((e.fov = n),
						(e.aspect = i),
						(e.far = r),
						e.updateProjectionMatrix()),
						Gc.prototype.updateMatrices.call(this, t);
				},
			})),
			(Vc.prototype = Object.assign(Object.create(Fc.prototype), {
				constructor: Vc,
				isSpotLight: !0,
				copy: function (t) {
					return (
						Fc.prototype.copy.call(this, t),
						(this.distance = t.distance),
						(this.angle = t.angle),
						(this.penumbra = t.penumbra),
						(this.decay = t.decay),
						(this.target = t.target.clone()),
						(this.shadow = t.shadow.clone()),
						this
					);
				},
			})),
			(Wc.prototype = Object.assign(Object.create(Gc.prototype), {
				constructor: Wc,
				isPointLightShadow: !0,
				updateMatrices: function (t, e) {
					void 0 === e && (e = 0);
					const n = this.camera,
						i = this.matrix,
						r = this._lightPositionWorld,
						o = this._lookTarget,
						s = this._projScreenMatrix;
					r.setFromMatrixPosition(t.matrixWorld),
						n.position.copy(r),
						o.copy(n.position),
						o.add(this._cubeDirections[e]),
						n.up.copy(this._cubeUps[e]),
						n.lookAt(o),
						n.updateMatrixWorld(),
						i.makeTranslation(-r.x, -r.y, -r.z),
						s.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
						this._frustum.setFromProjectionMatrix(s);
				},
			})),
			(qc.prototype = Object.assign(Object.create(Fc.prototype), {
				constructor: qc,
				isPointLight: !0,
				copy: function (t) {
					return (
						Fc.prototype.copy.call(this, t),
						(this.distance = t.distance),
						(this.decay = t.decay),
						(this.shadow = t.shadow.clone()),
						this
					);
				},
			})),
			(Xc.prototype = Object.assign(Object.create(Kn.prototype), {
				constructor: Xc,
				isOrthographicCamera: !0,
				copy: function (t, e) {
					return (
						Kn.prototype.copy.call(this, t, e),
						(this.left = t.left),
						(this.right = t.right),
						(this.top = t.top),
						(this.bottom = t.bottom),
						(this.near = t.near),
						(this.far = t.far),
						(this.zoom = t.zoom),
						(this.view = null === t.view ? null : Object.assign({}, t.view)),
						this
					);
				},
				setViewOffset: function (t, e, n, i, r, o) {
					null === this.view &&
						(this.view = {
							enabled: !0,
							fullWidth: 1,
							fullHeight: 1,
							offsetX: 0,
							offsetY: 0,
							width: 1,
							height: 1,
						}),
						(this.view.enabled = !0),
						(this.view.fullWidth = t),
						(this.view.fullHeight = e),
						(this.view.offsetX = n),
						(this.view.offsetY = i),
						(this.view.width = r),
						(this.view.height = o),
						this.updateProjectionMatrix();
				},
				clearViewOffset: function () {
					null !== this.view && (this.view.enabled = !1),
						this.updateProjectionMatrix();
				},
				updateProjectionMatrix: function () {
					const t = (this.right - this.left) / (2 * this.zoom),
						e = (this.top - this.bottom) / (2 * this.zoom),
						n = (this.right + this.left) / 2,
						i = (this.top + this.bottom) / 2;
					let r = n - t,
						o = n + t,
						s = i + e,
						a = i - e;
					if (null !== this.view && this.view.enabled) {
						const t =
								(this.right - this.left) / this.view.fullWidth / this.zoom,
							e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
						(r += t * this.view.offsetX),
							(o = r + t * this.view.width),
							(s -= e * this.view.offsetY),
							(a = s - e * this.view.height);
					}
					this.projectionMatrix.makeOrthographic(
						r,
						o,
						s,
						a,
						this.near,
						this.far
					),
						this.projectionMatrixInverse.getInverse(this.projectionMatrix);
				},
				toJSON: function (t) {
					const e = Qt.prototype.toJSON.call(this, t);
					return (
						(e.object.zoom = this.zoom),
						(e.object.left = this.left),
						(e.object.right = this.right),
						(e.object.top = this.top),
						(e.object.bottom = this.bottom),
						(e.object.near = this.near),
						(e.object.far = this.far),
						null !== this.view &&
							(e.object.view = Object.assign({}, this.view)),
						e
					);
				},
			})),
			(Yc.prototype = Object.assign(Object.create(Gc.prototype), {
				constructor: Yc,
				isDirectionalLightShadow: !0,
				updateMatrices: function (t) {
					Gc.prototype.updateMatrices.call(this, t);
				},
			})),
			(Zc.prototype = Object.assign(Object.create(Fc.prototype), {
				constructor: Zc,
				isDirectionalLight: !0,
				copy: function (t) {
					return (
						Fc.prototype.copy.call(this, t),
						(this.target = t.target.clone()),
						(this.shadow = t.shadow.clone()),
						this
					);
				},
			})),
			(Jc.prototype = Object.assign(Object.create(Fc.prototype), {
				constructor: Jc,
				isAmbientLight: !0,
			})),
			(Kc.prototype = Object.assign(Object.create(Fc.prototype), {
				constructor: Kc,
				isRectAreaLight: !0,
				copy: function (t) {
					return (
						Fc.prototype.copy.call(this, t),
						(this.width = t.width),
						(this.height = t.height),
						this
					);
				},
				toJSON: function (t) {
					const e = Fc.prototype.toJSON.call(this, t);
					return (
						(e.object.width = this.width), (e.object.height = this.height), e
					);
				},
			})),
			Object.assign(Qc.prototype, {
				isSphericalHarmonics3: !0,
				set: function (t) {
					for (let e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
					return this;
				},
				zero: function () {
					for (let t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
					return this;
				},
				getAt: function (t, e) {
					const n = t.x,
						i = t.y,
						r = t.z,
						o = this.coefficients;
					return (
						e.copy(o[0]).multiplyScalar(0.282095),
						e.addScaledVector(o[1], 0.488603 * i),
						e.addScaledVector(o[2], 0.488603 * r),
						e.addScaledVector(o[3], 0.488603 * n),
						e.addScaledVector(o[4], n * i * 1.092548),
						e.addScaledVector(o[5], i * r * 1.092548),
						e.addScaledVector(o[6], 0.315392 * (3 * r * r - 1)),
						e.addScaledVector(o[7], n * r * 1.092548),
						e.addScaledVector(o[8], 0.546274 * (n * n - i * i)),
						e
					);
				},
				getIrradianceAt: function (t, e) {
					const n = t.x,
						i = t.y,
						r = t.z,
						o = this.coefficients;
					return (
						e.copy(o[0]).multiplyScalar(0.886227),
						e.addScaledVector(o[1], 1.023328 * i),
						e.addScaledVector(o[2], 1.023328 * r),
						e.addScaledVector(o[3], 1.023328 * n),
						e.addScaledVector(o[4], 0.858086 * n * i),
						e.addScaledVector(o[5], 0.858086 * i * r),
						e.addScaledVector(o[6], 0.743125 * r * r - 0.247708),
						e.addScaledVector(o[7], 0.858086 * n * r),
						e.addScaledVector(o[8], 0.429043 * (n * n - i * i)),
						e
					);
				},
				add: function (t) {
					for (let e = 0; e < 9; e++)
						this.coefficients[e].add(t.coefficients[e]);
					return this;
				},
				addScaledSH: function (t, e) {
					for (let n = 0; n < 9; n++)
						this.coefficients[n].addScaledVector(t.coefficients[n], e);
					return this;
				},
				scale: function (t) {
					for (let e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
					return this;
				},
				lerp: function (t, e) {
					for (let n = 0; n < 9; n++)
						this.coefficients[n].lerp(t.coefficients[n], e);
					return this;
				},
				equals: function (t) {
					for (let e = 0; e < 9; e++)
						if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
					return !0;
				},
				copy: function (t) {
					return this.set(t.coefficients);
				},
				clone: function () {
					return new this.constructor().copy(this);
				},
				fromArray: function (t, e) {
					void 0 === e && (e = 0);
					const n = this.coefficients;
					for (let i = 0; i < 9; i++) n[i].fromArray(t, e + 3 * i);
					return this;
				},
				toArray: function (t, e) {
					void 0 === t && (t = []), void 0 === e && (e = 0);
					const n = this.coefficients;
					for (let i = 0; i < 9; i++) n[i].toArray(t, e + 3 * i);
					return t;
				},
			}),
			Object.assign(Qc, {
				getBasisAt: function (t, e) {
					const n = t.x,
						i = t.y,
						r = t.z;
					(e[0] = 0.282095),
						(e[1] = 0.488603 * i),
						(e[2] = 0.488603 * r),
						(e[3] = 0.488603 * n),
						(e[4] = 1.092548 * n * i),
						(e[5] = 1.092548 * i * r),
						(e[6] = 0.315392 * (3 * r * r - 1)),
						(e[7] = 1.092548 * n * r),
						(e[8] = 0.546274 * (n * n - i * i));
				},
			}),
			($c.prototype = Object.assign(Object.create(Fc.prototype), {
				constructor: $c,
				isLightProbe: !0,
				copy: function (t) {
					return Fc.prototype.copy.call(this, t), this.sh.copy(t.sh), this;
				},
				fromJSON: function (t) {
					return (this.intensity = t.intensity), this.sh.fromArray(t.sh), this;
				},
				toJSON: function (t) {
					const e = Fc.prototype.toJSON.call(this, t);
					return (e.object.sh = this.sh.toArray()), e;
				},
			})),
			(tl.prototype = Object.assign(Object.create(cc.prototype), {
				constructor: tl,
				load: function (t, e, n, i) {
					const r = this,
						o = new hc(r.manager);
					o.setPath(r.path),
						o.setRequestHeader(r.requestHeader),
						o.load(
							t,
							function (n) {
								try {
									e(r.parse(JSON.parse(n)));
								} catch (e) {
									i ? i(e) : console.error(e), r.manager.itemError(t);
								}
							},
							n,
							i
						);
				},
				parse: function (t) {
					const e = this.textures;
					function n(t) {
						return (
							void 0 === e[t] &&
								console.warn("THREE.MaterialLoader: Undefined texture", t),
							e[t]
						);
					}
					const i = new ja[t.type]();
					if (
						(void 0 !== t.uuid && (i.uuid = t.uuid),
						void 0 !== t.name && (i.name = t.name),
						void 0 !== t.color && i.color.setHex(t.color),
						void 0 !== t.roughness && (i.roughness = t.roughness),
						void 0 !== t.metalness && (i.metalness = t.metalness),
						void 0 !== t.sheen && (i.sheen = new je().setHex(t.sheen)),
						void 0 !== t.emissive && i.emissive.setHex(t.emissive),
						void 0 !== t.specular && i.specular.setHex(t.specular),
						void 0 !== t.shininess && (i.shininess = t.shininess),
						void 0 !== t.clearcoat && (i.clearcoat = t.clearcoat),
						void 0 !== t.clearcoatRoughness &&
							(i.clearcoatRoughness = t.clearcoatRoughness),
						void 0 !== t.fog && (i.fog = t.fog),
						void 0 !== t.flatShading && (i.flatShading = t.flatShading),
						void 0 !== t.blending && (i.blending = t.blending),
						void 0 !== t.combine && (i.combine = t.combine),
						void 0 !== t.side && (i.side = t.side),
						void 0 !== t.opacity && (i.opacity = t.opacity),
						void 0 !== t.transparent && (i.transparent = t.transparent),
						void 0 !== t.alphaTest && (i.alphaTest = t.alphaTest),
						void 0 !== t.depthTest && (i.depthTest = t.depthTest),
						void 0 !== t.depthWrite && (i.depthWrite = t.depthWrite),
						void 0 !== t.colorWrite && (i.colorWrite = t.colorWrite),
						void 0 !== t.stencilWrite && (i.stencilWrite = t.stencilWrite),
						void 0 !== t.stencilWriteMask &&
							(i.stencilWriteMask = t.stencilWriteMask),
						void 0 !== t.stencilFunc && (i.stencilFunc = t.stencilFunc),
						void 0 !== t.stencilRef && (i.stencilRef = t.stencilRef),
						void 0 !== t.stencilFuncMask &&
							(i.stencilFuncMask = t.stencilFuncMask),
						void 0 !== t.stencilFail && (i.stencilFail = t.stencilFail),
						void 0 !== t.stencilZFail && (i.stencilZFail = t.stencilZFail),
						void 0 !== t.stencilZPass && (i.stencilZPass = t.stencilZPass),
						void 0 !== t.wireframe && (i.wireframe = t.wireframe),
						void 0 !== t.wireframeLinewidth &&
							(i.wireframeLinewidth = t.wireframeLinewidth),
						void 0 !== t.wireframeLinecap &&
							(i.wireframeLinecap = t.wireframeLinecap),
						void 0 !== t.wireframeLinejoin &&
							(i.wireframeLinejoin = t.wireframeLinejoin),
						void 0 !== t.rotation && (i.rotation = t.rotation),
						1 !== t.linewidth && (i.linewidth = t.linewidth),
						void 0 !== t.dashSize && (i.dashSize = t.dashSize),
						void 0 !== t.gapSize && (i.gapSize = t.gapSize),
						void 0 !== t.scale && (i.scale = t.scale),
						void 0 !== t.polygonOffset && (i.polygonOffset = t.polygonOffset),
						void 0 !== t.polygonOffsetFactor &&
							(i.polygonOffsetFactor = t.polygonOffsetFactor),
						void 0 !== t.polygonOffsetUnits &&
							(i.polygonOffsetUnits = t.polygonOffsetUnits),
						void 0 !== t.skinning && (i.skinning = t.skinning),
						void 0 !== t.morphTargets && (i.morphTargets = t.morphTargets),
						void 0 !== t.morphNormals && (i.morphNormals = t.morphNormals),
						void 0 !== t.dithering && (i.dithering = t.dithering),
						void 0 !== t.vertexTangents &&
							(i.vertexTangents = t.vertexTangents),
						void 0 !== t.visible && (i.visible = t.visible),
						void 0 !== t.toneMapped && (i.toneMapped = t.toneMapped),
						void 0 !== t.userData && (i.userData = t.userData),
						void 0 !== t.vertexColors &&
							("number" == typeof t.vertexColors
								? (i.vertexColors = t.vertexColors > 0)
								: (i.vertexColors = t.vertexColors)),
						void 0 !== t.uniforms)
					)
						for (const e in t.uniforms) {
							const r = t.uniforms[e];
							switch (((i.uniforms[e] = {}), r.type)) {
								case "t":
									i.uniforms[e].value = n(r.value);
									break;
								case "c":
									i.uniforms[e].value = new je().setHex(r.value);
									break;
								case "v2":
									i.uniforms[e].value = new ft().fromArray(r.value);
									break;
								case "v3":
									i.uniforms[e].value = new Et().fromArray(r.value);
									break;
								case "v4":
									i.uniforms[e].value = new bt().fromArray(r.value);
									break;
								case "m3":
									i.uniforms[e].value = new mt().fromArray(r.value);
								case "m4":
									i.uniforms[e].value = new Dt().fromArray(r.value);
									break;
								default:
									i.uniforms[e].value = r.value;
							}
						}
					if (
						(void 0 !== t.defines && (i.defines = t.defines),
						void 0 !== t.vertexShader && (i.vertexShader = t.vertexShader),
						void 0 !== t.fragmentShader &&
							(i.fragmentShader = t.fragmentShader),
						void 0 !== t.extensions)
					)
						for (const e in t.extensions) i.extensions[e] = t.extensions[e];
					if (
						(void 0 !== t.shading && (i.flatShading = 1 === t.shading),
						void 0 !== t.size && (i.size = t.size),
						void 0 !== t.sizeAttenuation &&
							(i.sizeAttenuation = t.sizeAttenuation),
						void 0 !== t.map && (i.map = n(t.map)),
						void 0 !== t.matcap && (i.matcap = n(t.matcap)),
						void 0 !== t.alphaMap && (i.alphaMap = n(t.alphaMap)),
						void 0 !== t.bumpMap && (i.bumpMap = n(t.bumpMap)),
						void 0 !== t.bumpScale && (i.bumpScale = t.bumpScale),
						void 0 !== t.normalMap && (i.normalMap = n(t.normalMap)),
						void 0 !== t.normalMapType && (i.normalMapType = t.normalMapType),
						void 0 !== t.normalScale)
					) {
						let e = t.normalScale;
						!1 === Array.isArray(e) && (e = [e, e]),
							(i.normalScale = new ft().fromArray(e));
					}
					return (
						void 0 !== t.displacementMap &&
							(i.displacementMap = n(t.displacementMap)),
						void 0 !== t.displacementScale &&
							(i.displacementScale = t.displacementScale),
						void 0 !== t.displacementBias &&
							(i.displacementBias = t.displacementBias),
						void 0 !== t.roughnessMap && (i.roughnessMap = n(t.roughnessMap)),
						void 0 !== t.metalnessMap && (i.metalnessMap = n(t.metalnessMap)),
						void 0 !== t.emissiveMap && (i.emissiveMap = n(t.emissiveMap)),
						void 0 !== t.emissiveIntensity &&
							(i.emissiveIntensity = t.emissiveIntensity),
						void 0 !== t.specularMap && (i.specularMap = n(t.specularMap)),
						void 0 !== t.envMap && (i.envMap = n(t.envMap)),
						void 0 !== t.envMapIntensity &&
							(i.envMapIntensity = t.envMapIntensity),
						void 0 !== t.reflectivity && (i.reflectivity = t.reflectivity),
						void 0 !== t.refractionRatio &&
							(i.refractionRatio = t.refractionRatio),
						void 0 !== t.lightMap && (i.lightMap = n(t.lightMap)),
						void 0 !== t.lightMapIntensity &&
							(i.lightMapIntensity = t.lightMapIntensity),
						void 0 !== t.aoMap && (i.aoMap = n(t.aoMap)),
						void 0 !== t.aoMapIntensity &&
							(i.aoMapIntensity = t.aoMapIntensity),
						void 0 !== t.gradientMap && (i.gradientMap = n(t.gradientMap)),
						void 0 !== t.clearcoatMap && (i.clearcoatMap = n(t.clearcoatMap)),
						void 0 !== t.clearcoatRoughnessMap &&
							(i.clearcoatRoughnessMap = n(t.clearcoatRoughnessMap)),
						void 0 !== t.clearcoatNormalMap &&
							(i.clearcoatNormalMap = n(t.clearcoatNormalMap)),
						void 0 !== t.clearcoatNormalScale &&
							(i.clearcoatNormalScale = new ft().fromArray(
								t.clearcoatNormalScale
							)),
						void 0 !== t.transmission && (i.transmission = t.transmission),
						void 0 !== t.transmissionMap &&
							(i.transmissionMap = n(t.transmissionMap)),
						i
					);
				},
				setTextures: function (t) {
					return (this.textures = t), this;
				},
			}));
		const el = function (t) {
				if ("undefined" != typeof TextDecoder)
					return new TextDecoder().decode(t);
				let e = "";
				for (let n = 0, i = t.length; n < i; n++)
					e += String.fromCharCode(t[n]);
				try {
					return decodeURIComponent(escape(e));
				} catch (t) {
					return e;
				}
			},
			nl = function (t) {
				const e = t.lastIndexOf("/");
				return -1 === e ? "./" : t.substr(0, e + 1);
			};
		function il() {
			xn.call(this),
				(this.type = "InstancedBufferGeometry"),
				(this.instanceCount = 1 / 0);
		}
		function rl(t, e, n, i) {
			"number" == typeof n &&
				((i = n),
				(n = !1),
				console.error(
					"THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."
				)),
				$e.call(this, t, e, n),
				(this.meshPerAttribute = i || 1);
		}
		function ol(t) {
			cc.call(this, t);
		}
		(il.prototype = Object.assign(Object.create(xn.prototype), {
			constructor: il,
			isInstancedBufferGeometry: !0,
			copy: function (t) {
				return (
					xn.prototype.copy.call(this, t),
					(this.instanceCount = t.instanceCount),
					this
				);
			},
			clone: function () {
				return new this.constructor().copy(this);
			},
			toJSON: function () {
				const t = xn.prototype.toJSON.call(this);
				return (
					(t.instanceCount = this.instanceCount),
					(t.isInstancedBufferGeometry = !0),
					t
				);
			},
		})),
			(rl.prototype = Object.assign(Object.create($e.prototype), {
				constructor: rl,
				isInstancedBufferAttribute: !0,
				copy: function (t) {
					return (
						$e.prototype.copy.call(this, t),
						(this.meshPerAttribute = t.meshPerAttribute),
						this
					);
				},
				toJSON: function () {
					const t = $e.prototype.toJSON.call(this);
					return (
						(t.meshPerAttribute = this.meshPerAttribute),
						(t.isInstancedBufferAttribute = !0),
						t
					);
				},
			})),
			(ol.prototype = Object.assign(Object.create(cc.prototype), {
				constructor: ol,
				load: function (t, e, n, i) {
					const r = this,
						o = new hc(r.manager);
					o.setPath(r.path),
						o.setRequestHeader(r.requestHeader),
						o.load(
							t,
							function (n) {
								try {
									e(r.parse(JSON.parse(n)));
								} catch (e) {
									i ? i(e) : console.error(e), r.manager.itemError(t);
								}
							},
							n,
							i
						);
				},
				parse: function (t) {
					const e = {},
						n = {};
					function i(t, i) {
						if (void 0 !== e[i]) return e[i];
						const r = t.interleavedBuffers[i],
							o = (function (t, e) {
								if (void 0 !== n[e]) return n[e];
								const i = t.arrayBuffers[e],
									r = new Uint32Array(i).buffer;
								return (n[e] = r), r;
							})(t, r.buffer),
							s = new vo(new sl[r.type](o), r.stride);
						return (s.uuid = r.uuid), (e[i] = s), s;
					}
					const r = t.isInstancedBufferGeometry ? new il() : new xn(),
						o = t.data.index;
					if (void 0 !== o) {
						const t = new sl[o.type](o.array);
						r.setIndex(new $e(t, 1));
					}
					const s = t.data.attributes;
					for (const e in s) {
						const n = s[e];
						let o;
						if (n.isInterleavedBufferAttribute) {
							o = new xo(i(t.data, n.data), n.itemSize, n.offset, n.normalized);
						} else {
							const t = new sl[n.type](n.array);
							o = new (n.isInstancedBufferAttribute ? rl : $e)(
								t,
								n.itemSize,
								n.normalized
							);
						}
						void 0 !== n.name && (o.name = n.name), r.setAttribute(e, o);
					}
					const a = t.data.morphAttributes;
					if (a)
						for (const e in a) {
							const n = a[e],
								o = [];
							for (let e = 0, r = n.length; e < r; e++) {
								const r = n[e];
								let s;
								if (r.isInterleavedBufferAttribute) {
									s = new xo(
										i(t.data, r.data),
										r.itemSize,
										r.offset,
										r.normalized
									);
								} else {
									s = new $e(new sl[r.type](r.array), r.itemSize, r.normalized);
								}
								void 0 !== r.name && (s.name = r.name), o.push(s);
							}
							r.morphAttributes[e] = o;
						}
					t.data.morphTargetsRelative && (r.morphTargetsRelative = !0);
					const c = t.data.groups || t.data.drawcalls || t.data.offsets;
					if (void 0 !== c)
						for (let t = 0, e = c.length; t !== e; ++t) {
							const e = c[t];
							r.addGroup(e.start, e.count, e.materialIndex);
						}
					const l = t.data.boundingSphere;
					if (void 0 !== l) {
						const t = new Et();
						void 0 !== l.center && t.fromArray(l.center),
							(r.boundingSphere = new ge(t, l.radius));
					}
					return (
						t.name && (r.name = t.name),
						t.userData && (r.userData = t.userData),
						r
					);
				},
			}));
		const sl = {
			Int8Array: Int8Array,
			Uint8Array: Uint8Array,
			Uint8ClampedArray:
				"undefined" != typeof Uint8ClampedArray
					? Uint8ClampedArray
					: Uint8Array,
			Int16Array: Int16Array,
			Uint16Array: Uint16Array,
			Int32Array: Int32Array,
			Uint32Array: Uint32Array,
			Float32Array: Float32Array,
			Float64Array: Float64Array,
		};
		function al(t) {
			cc.call(this, t);
		}
		al.prototype = Object.assign(Object.create(cc.prototype), {
			constructor: al,
			load: function (t, e, n, i) {
				const r = this,
					o = "" === this.path ? nl(t) : this.path;
				this.resourcePath = this.resourcePath || o;
				const s = new hc(r.manager);
				s.setPath(this.path),
					s.setRequestHeader(this.requestHeader),
					s.load(
						t,
						function (n) {
							let o = null;
							try {
								o = JSON.parse(n);
							} catch (e) {
								return (
									void 0 !== i && i(e),
									void console.error(
										"THREE:ObjectLoader: Can't parse " + t + ".",
										e.message
									)
								);
							}
							const s = o.metadata;
							void 0 !== s &&
							void 0 !== s.type &&
							"geometry" !== s.type.toLowerCase()
								? r.parse(o, e)
								: console.error("THREE.ObjectLoader: Can't load " + t);
						},
						n,
						i
					);
			},
			parse: function (t, e) {
				const n = this.parseShape(t.shapes),
					i = this.parseGeometries(t.geometries, n),
					r = this.parseImages(t.images, function () {
						void 0 !== e && e(a);
					}),
					o = this.parseTextures(t.textures, r),
					s = this.parseMaterials(t.materials, o),
					a = this.parseObject(t.object, i, s);
				return (
					t.animations && (a.animations = this.parseAnimations(t.animations)),
					(void 0 !== t.images && 0 !== t.images.length) ||
						(void 0 !== e && e(a)),
					a
				);
			},
			parseShape: function (t) {
				const e = {};
				if (void 0 !== t)
					for (let n = 0, i = t.length; n < i; n++) {
						const i = new Bc().fromJSON(t[n]);
						e[i.uuid] = i;
					}
				return e;
			},
			parseGeometries: function (t, e) {
				const n = {};
				let i;
				if (void 0 !== t) {
					const r = new ol();
					for (let o = 0, s = t.length; o < s; o++) {
						let s;
						const a = t[o];
						switch (a.type) {
							case "PlaneGeometry":
							case "PlaneBufferGeometry":
								s = new Ia[a.type](
									a.width,
									a.height,
									a.widthSegments,
									a.heightSegments
								);
								break;
							case "BoxGeometry":
							case "BoxBufferGeometry":
							case "CubeGeometry":
								s = new Ia[a.type](
									a.width,
									a.height,
									a.depth,
									a.widthSegments,
									a.heightSegments,
									a.depthSegments
								);
								break;
							case "CircleGeometry":
							case "CircleBufferGeometry":
								s = new Ia[a.type](
									a.radius,
									a.segments,
									a.thetaStart,
									a.thetaLength
								);
								break;
							case "CylinderGeometry":
							case "CylinderBufferGeometry":
								s = new Ia[a.type](
									a.radiusTop,
									a.radiusBottom,
									a.height,
									a.radialSegments,
									a.heightSegments,
									a.openEnded,
									a.thetaStart,
									a.thetaLength
								);
								break;
							case "ConeGeometry":
							case "ConeBufferGeometry":
								s = new Ia[a.type](
									a.radius,
									a.height,
									a.radialSegments,
									a.heightSegments,
									a.openEnded,
									a.thetaStart,
									a.thetaLength
								);
								break;
							case "SphereGeometry":
							case "SphereBufferGeometry":
								s = new Ia[a.type](
									a.radius,
									a.widthSegments,
									a.heightSegments,
									a.phiStart,
									a.phiLength,
									a.thetaStart,
									a.thetaLength
								);
								break;
							case "DodecahedronGeometry":
							case "DodecahedronBufferGeometry":
							case "IcosahedronGeometry":
							case "IcosahedronBufferGeometry":
							case "OctahedronGeometry":
							case "OctahedronBufferGeometry":
							case "TetrahedronGeometry":
							case "TetrahedronBufferGeometry":
								s = new Ia[a.type](a.radius, a.detail);
								break;
							case "RingGeometry":
							case "RingBufferGeometry":
								s = new Ia[a.type](
									a.innerRadius,
									a.outerRadius,
									a.thetaSegments,
									a.phiSegments,
									a.thetaStart,
									a.thetaLength
								);
								break;
							case "TorusGeometry":
							case "TorusBufferGeometry":
								s = new Ia[a.type](
									a.radius,
									a.tube,
									a.radialSegments,
									a.tubularSegments,
									a.arc
								);
								break;
							case "TorusKnotGeometry":
							case "TorusKnotBufferGeometry":
								s = new Ia[a.type](
									a.radius,
									a.tube,
									a.tubularSegments,
									a.radialSegments,
									a.p,
									a.q
								);
								break;
							case "TubeGeometry":
							case "TubeBufferGeometry":
								s = new Ia[a.type](
									new zc[a.path.type]().fromJSON(a.path),
									a.tubularSegments,
									a.radius,
									a.radialSegments,
									a.closed
								);
								break;
							case "LatheGeometry":
							case "LatheBufferGeometry":
								s = new Ia[a.type](
									a.points,
									a.segments,
									a.phiStart,
									a.phiLength
								);
								break;
							case "PolyhedronGeometry":
							case "PolyhedronBufferGeometry":
								s = new Ia[a.type](a.vertices, a.indices, a.radius, a.details);
								break;
							case "ShapeGeometry":
							case "ShapeBufferGeometry":
								i = [];
								for (let t = 0, n = a.shapes.length; t < n; t++) {
									const n = e[a.shapes[t]];
									i.push(n);
								}
								s = new Ia[a.type](i, a.curveSegments);
								break;
							case "ExtrudeGeometry":
							case "ExtrudeBufferGeometry":
								i = [];
								for (let t = 0, n = a.shapes.length; t < n; t++) {
									const n = e[a.shapes[t]];
									i.push(n);
								}
								const t = a.options.extrudePath;
								void 0 !== t &&
									(a.options.extrudePath = new zc[t.type]().fromJSON(t)),
									(s = new Ia[a.type](i, a.options));
								break;
							case "BufferGeometry":
							case "InstancedBufferGeometry":
								s = r.parse(a);
								break;
							case "Geometry":
								console.error(
									'THREE.ObjectLoader: Loading "Geometry" is not supported anymore.'
								);
								break;
							default:
								console.warn(
									'THREE.ObjectLoader: Unsupported geometry type "' +
										a.type +
										'"'
								);
								continue;
						}
						(s.uuid = a.uuid),
							void 0 !== a.name && (s.name = a.name),
							!0 === s.isBufferGeometry &&
								void 0 !== a.userData &&
								(s.userData = a.userData),
							(n[a.uuid] = s);
					}
				}
				return n;
			},
			parseMaterials: function (t, e) {
				const n = {},
					i = {};
				if (void 0 !== t) {
					const r = new tl();
					r.setTextures(e);
					for (let e = 0, o = t.length; e < o; e++) {
						const o = t[e];
						if ("MultiMaterial" === o.type) {
							const t = [];
							for (let e = 0; e < o.materials.length; e++) {
								const i = o.materials[e];
								void 0 === n[i.uuid] && (n[i.uuid] = r.parse(i)),
									t.push(n[i.uuid]);
							}
							i[o.uuid] = t;
						} else
							void 0 === n[o.uuid] && (n[o.uuid] = r.parse(o)),
								(i[o.uuid] = n[o.uuid]);
					}
				}
				return i;
			},
			parseAnimations: function (t) {
				const e = [];
				for (let n = 0; n < t.length; n++) {
					const i = t[n],
						r = ic.parse(i);
					void 0 !== i.uuid && (r.uuid = i.uuid), e.push(r);
				}
				return e;
			},
			parseImages: function (t, e) {
				const n = this,
					i = {};
				let r;
				function o(t) {
					return (
						n.manager.itemStart(t),
						r.load(
							t,
							function () {
								n.manager.itemEnd(t);
							},
							void 0,
							function () {
								n.manager.itemError(t), n.manager.itemEnd(t);
							}
						)
					);
				}
				if (void 0 !== t && t.length > 0) {
					const s = new sc(e);
					(r = new fc(s)), r.setCrossOrigin(this.crossOrigin);
					for (let e = 0, r = t.length; e < r; e++) {
						const r = t[e],
							s = r.url;
						if (Array.isArray(s)) {
							i[r.uuid] = [];
							for (let t = 0, e = s.length; t < e; t++) {
								const e = s[t],
									a = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(e)
										? e
										: n.resourcePath + e;
								i[r.uuid].push(o(a));
							}
						} else {
							const t = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(r.url)
								? r.url
								: n.resourcePath + r.url;
							i[r.uuid] = o(t);
						}
					}
				}
				return i;
			},
			parseTextures: function (t, e) {
				function n(t, e) {
					return "number" == typeof t
						? t
						: (console.warn(
								"THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",
								t
						  ),
						  e[t]);
				}
				const i = {};
				if (void 0 !== t)
					for (let r = 0, o = t.length; r < o; r++) {
						const o = t[r];
						let s;
						void 0 === o.image &&
							console.warn(
								'THREE.ObjectLoader: No "image" specified for',
								o.uuid
							),
							void 0 === e[o.image] &&
								console.warn("THREE.ObjectLoader: Undefined image", o.image),
							(s = Array.isArray(e[o.image])
								? new Ti(e[o.image])
								: new xt(e[o.image])),
							(s.needsUpdate = !0),
							(s.uuid = o.uuid),
							void 0 !== o.name && (s.name = o.name),
							void 0 !== o.mapping && (s.mapping = n(o.mapping, cl)),
							void 0 !== o.offset && s.offset.fromArray(o.offset),
							void 0 !== o.repeat && s.repeat.fromArray(o.repeat),
							void 0 !== o.center && s.center.fromArray(o.center),
							void 0 !== o.rotation && (s.rotation = o.rotation),
							void 0 !== o.wrap &&
								((s.wrapS = n(o.wrap[0], ll)), (s.wrapT = n(o.wrap[1], ll))),
							void 0 !== o.format && (s.format = o.format),
							void 0 !== o.type && (s.type = o.type),
							void 0 !== o.encoding && (s.encoding = o.encoding),
							void 0 !== o.minFilter && (s.minFilter = n(o.minFilter, hl)),
							void 0 !== o.magFilter && (s.magFilter = n(o.magFilter, hl)),
							void 0 !== o.anisotropy && (s.anisotropy = o.anisotropy),
							void 0 !== o.flipY && (s.flipY = o.flipY),
							void 0 !== o.premultiplyAlpha &&
								(s.premultiplyAlpha = o.premultiplyAlpha),
							void 0 !== o.unpackAlignment &&
								(s.unpackAlignment = o.unpackAlignment),
							(i[o.uuid] = s);
					}
				return i;
			},
			parseObject: function (t, e, n) {
				let i, r, o;
				function s(t) {
					return (
						void 0 === e[t] &&
							console.warn("THREE.ObjectLoader: Undefined geometry", t),
						e[t]
					);
				}
				function a(t) {
					if (void 0 !== t) {
						if (Array.isArray(t)) {
							const e = [];
							for (let i = 0, r = t.length; i < r; i++) {
								const r = t[i];
								void 0 === n[r] &&
									console.warn("THREE.ObjectLoader: Undefined material", r),
									e.push(n[r]);
							}
							return e;
						}
						return (
							void 0 === n[t] &&
								console.warn("THREE.ObjectLoader: Undefined material", t),
							n[t]
						);
					}
				}
				switch (t.type) {
					case "Scene":
						(i = new $t()),
							void 0 !== t.background &&
								Number.isInteger(t.background) &&
								(i.background = new je(t.background)),
							void 0 !== t.fog &&
								("Fog" === t.fog.type
									? (i.fog = new go(t.fog.color, t.fog.near, t.fog.far))
									: "FogExp2" === t.fog.type &&
									  (i.fog = new mo(t.fog.color, t.fog.density)));
						break;
					case "PerspectiveCamera":
						(i = new Qn(t.fov, t.aspect, t.near, t.far)),
							void 0 !== t.focus && (i.focus = t.focus),
							void 0 !== t.zoom && (i.zoom = t.zoom),
							void 0 !== t.filmGauge && (i.filmGauge = t.filmGauge),
							void 0 !== t.filmOffset && (i.filmOffset = t.filmOffset),
							void 0 !== t.view && (i.view = Object.assign({}, t.view));
						break;
					case "OrthographicCamera":
						(i = new Xc(t.left, t.right, t.top, t.bottom, t.near, t.far)),
							void 0 !== t.zoom && (i.zoom = t.zoom),
							void 0 !== t.view && (i.view = Object.assign({}, t.view));
						break;
					case "AmbientLight":
						i = new Jc(t.color, t.intensity);
						break;
					case "DirectionalLight":
						i = new Zc(t.color, t.intensity);
						break;
					case "PointLight":
						i = new qc(t.color, t.intensity, t.distance, t.decay);
						break;
					case "RectAreaLight":
						i = new Kc(t.color, t.intensity, t.width, t.height);
						break;
					case "SpotLight":
						i = new Vc(
							t.color,
							t.intensity,
							t.distance,
							t.angle,
							t.penumbra,
							t.decay
						);
						break;
					case "HemisphereLight":
						i = new kc(t.color, t.groundColor, t.intensity);
						break;
					case "LightProbe":
						i = new $c().fromJSON(t);
						break;
					case "SkinnedMesh":
						console.warn(
							"THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet."
						);
					case "Mesh":
						(r = s(t.geometry)), (o = a(t.material)), (i = new Un(r, o));
						break;
					case "InstancedMesh":
						(r = s(t.geometry)), (o = a(t.material));
						const e = t.count,
							n = t.instanceMatrix;
						(i = new Yo(r, o, e)),
							(i.instanceMatrix = new $e(new Float32Array(n.array), 16));
						break;
					case "LOD":
						i = new Ho();
						break;
					case "Line":
						i = new es(s(t.geometry), a(t.material), t.mode);
						break;
					case "LineLoop":
						i = new os(s(t.geometry), a(t.material));
						break;
					case "LineSegments":
						i = new rs(s(t.geometry), a(t.material));
						break;
					case "PointCloud":
					case "Points":
						i = new us(s(t.geometry), a(t.material));
						break;
					case "Sprite":
						i = new Do(a(t.material));
						break;
					case "Group":
						i = new co();
						break;
					default:
						i = new Qt();
				}
				if (
					((i.uuid = t.uuid),
					void 0 !== t.name && (i.name = t.name),
					void 0 !== t.matrix
						? (i.matrix.fromArray(t.matrix),
						  void 0 !== t.matrixAutoUpdate &&
								(i.matrixAutoUpdate = t.matrixAutoUpdate),
						  i.matrixAutoUpdate &&
								i.matrix.decompose(i.position, i.quaternion, i.scale))
						: (void 0 !== t.position && i.position.fromArray(t.position),
						  void 0 !== t.rotation && i.rotation.fromArray(t.rotation),
						  void 0 !== t.quaternion && i.quaternion.fromArray(t.quaternion),
						  void 0 !== t.scale && i.scale.fromArray(t.scale)),
					void 0 !== t.castShadow && (i.castShadow = t.castShadow),
					void 0 !== t.receiveShadow && (i.receiveShadow = t.receiveShadow),
					t.shadow &&
						(void 0 !== t.shadow.bias && (i.shadow.bias = t.shadow.bias),
						void 0 !== t.shadow.normalBias &&
							(i.shadow.normalBias = t.shadow.normalBias),
						void 0 !== t.shadow.radius && (i.shadow.radius = t.shadow.radius),
						void 0 !== t.shadow.mapSize &&
							i.shadow.mapSize.fromArray(t.shadow.mapSize),
						void 0 !== t.shadow.camera &&
							(i.shadow.camera = this.parseObject(t.shadow.camera))),
					void 0 !== t.visible && (i.visible = t.visible),
					void 0 !== t.frustumCulled && (i.frustumCulled = t.frustumCulled),
					void 0 !== t.renderOrder && (i.renderOrder = t.renderOrder),
					void 0 !== t.userData && (i.userData = t.userData),
					void 0 !== t.layers && (i.layers.mask = t.layers),
					void 0 !== t.children)
				) {
					const r = t.children;
					for (let t = 0; t < r.length; t++)
						i.add(this.parseObject(r[t], e, n));
				}
				if ("LOD" === t.type) {
					void 0 !== t.autoUpdate && (i.autoUpdate = t.autoUpdate);
					const e = t.levels;
					for (let t = 0; t < e.length; t++) {
						const n = e[t],
							r = i.getObjectByProperty("uuid", n.object);
						void 0 !== r && i.addLevel(r, n.distance);
					}
				}
				return i;
			},
		});
		const cl = {
				UVMapping: 300,
				CubeReflectionMapping: 301,
				CubeRefractionMapping: 302,
				EquirectangularReflectionMapping: 303,
				EquirectangularRefractionMapping: 304,
				CubeUVReflectionMapping: 306,
				CubeUVRefractionMapping: 307,
			},
			ll = {
				RepeatWrapping: 1e3,
				ClampToEdgeWrapping: 1001,
				MirroredRepeatWrapping: 1002,
			},
			hl = {
				NearestFilter: 1003,
				NearestMipmapNearestFilter: 1004,
				NearestMipmapLinearFilter: 1005,
				LinearFilter: 1006,
				LinearMipmapNearestFilter: 1007,
				LinearMipmapLinearFilter: 1008,
			};
		function ul(t) {
			"undefined" == typeof createImageBitmap &&
				console.warn(
					"THREE.ImageBitmapLoader: createImageBitmap() not supported."
				),
				"undefined" == typeof fetch &&
					console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
				cc.call(this, t),
				(this.options = { premultiplyAlpha: "none" });
		}
		function dl() {
			(this.type = "ShapePath"),
				(this.color = new je()),
				(this.subPaths = []),
				(this.currentPath = null);
		}
		function pl(t) {
			(this.type = "Font"), (this.data = t);
		}
		function fl(t, e, n, i, r) {
			const o = r.glyphs[t] || r.glyphs["?"];
			if (!o)
				return void console.error(
					'THREE.Font: character "' +
						t +
						'" does not exists in font family ' +
						r.familyName +
						"."
				);
			const s = new dl();
			let a, c, l, h, u, d, p, f;
			if (o.o) {
				const t = o._cachedOutline || (o._cachedOutline = o.o.split(" "));
				for (let r = 0, o = t.length; r < o; ) {
					switch (t[r++]) {
						case "m":
							(a = t[r++] * e + n), (c = t[r++] * e + i), s.moveTo(a, c);
							break;
						case "l":
							(a = t[r++] * e + n), (c = t[r++] * e + i), s.lineTo(a, c);
							break;
						case "q":
							(l = t[r++] * e + n),
								(h = t[r++] * e + i),
								(u = t[r++] * e + n),
								(d = t[r++] * e + i),
								s.quadraticCurveTo(u, d, l, h);
							break;
						case "b":
							(l = t[r++] * e + n),
								(h = t[r++] * e + i),
								(u = t[r++] * e + n),
								(d = t[r++] * e + i),
								(p = t[r++] * e + n),
								(f = t[r++] * e + i),
								s.bezierCurveTo(u, d, p, f, l, h);
					}
				}
			}
			return { offsetX: o.ha * e, path: s };
		}
		function ml(t) {
			cc.call(this, t);
		}
		let gl;
		(ul.prototype = Object.assign(Object.create(cc.prototype), {
			constructor: ul,
			isImageBitmapLoader: !0,
			setOptions: function (t) {
				return (this.options = t), this;
			},
			load: function (t, e, n, i) {
				void 0 === t && (t = ""),
					void 0 !== this.path && (t = this.path + t),
					(t = this.manager.resolveURL(t));
				const r = this,
					o = oc.get(t);
				if (void 0 !== o)
					return (
						r.manager.itemStart(t),
						setTimeout(function () {
							e && e(o), r.manager.itemEnd(t);
						}, 0),
						o
					);
				fetch(t)
					.then(function (t) {
						return t.blob();
					})
					.then(function (t) {
						return createImageBitmap(t, r.options);
					})
					.then(function (n) {
						oc.add(t, n), e && e(n), r.manager.itemEnd(t);
					})
					.catch(function (e) {
						i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
					}),
					r.manager.itemStart(t);
			},
		})),
			Object.assign(dl.prototype, {
				moveTo: function (t, e) {
					return (
						(this.currentPath = new Hc()),
						this.subPaths.push(this.currentPath),
						this.currentPath.moveTo(t, e),
						this
					);
				},
				lineTo: function (t, e) {
					return this.currentPath.lineTo(t, e), this;
				},
				quadraticCurveTo: function (t, e, n, i) {
					return this.currentPath.quadraticCurveTo(t, e, n, i), this;
				},
				bezierCurveTo: function (t, e, n, i, r, o) {
					return this.currentPath.bezierCurveTo(t, e, n, i, r, o), this;
				},
				splineThru: function (t) {
					return this.currentPath.splineThru(t), this;
				},
				toShapes: function (t, e) {
					function n(t) {
						const e = [];
						for (let n = 0, i = t.length; n < i; n++) {
							const i = t[n],
								r = new Bc();
							(r.curves = i.curves), e.push(r);
						}
						return e;
					}
					function i(t, e) {
						const n = e.length;
						let i = !1;
						for (let r = n - 1, o = 0; o < n; r = o++) {
							let n = e[r],
								s = e[o],
								a = s.x - n.x,
								c = s.y - n.y;
							if (Math.abs(c) > Number.EPSILON) {
								if (
									(c < 0 && ((n = e[o]), (a = -a), (s = e[r]), (c = -c)),
									t.y < n.y || t.y > s.y)
								)
									continue;
								if (t.y === n.y) {
									if (t.x === n.x) return !0;
								} else {
									const e = c * (t.x - n.x) - a * (t.y - n.y);
									if (0 === e) return !0;
									if (e < 0) continue;
									i = !i;
								}
							} else {
								if (t.y !== n.y) continue;
								if ((s.x <= t.x && t.x <= n.x) || (n.x <= t.x && t.x <= s.x))
									return !0;
							}
						}
						return i;
					}
					const r = aa.isClockWise,
						o = this.subPaths;
					if (0 === o.length) return [];
					if (!0 === e) return n(o);
					let s,
						a,
						c,
						l = [];
					if (1 === o.length)
						return (
							(a = o[0]), (c = new Bc()), (c.curves = a.curves), l.push(c), l
						);
					let h = !r(o[0].getPoints());
					h = t ? !h : h;
					const u = [],
						d = [];
					let p,
						f,
						m = [],
						g = 0;
					(d[g] = void 0), (m[g] = []);
					for (let e = 0, n = o.length; e < n; e++)
						(a = o[e]),
							(p = a.getPoints()),
							(s = r(p)),
							(s = t ? !s : s),
							s
								? (!h && d[g] && g++,
								  (d[g] = { s: new Bc(), p: p }),
								  (d[g].s.curves = a.curves),
								  h && g++,
								  (m[g] = []))
								: m[g].push({ h: a, p: p[0] });
					if (!d[0]) return n(o);
					if (d.length > 1) {
						let t = !1;
						const e = [];
						for (let t = 0, e = d.length; t < e; t++) u[t] = [];
						for (let n = 0, r = d.length; n < r; n++) {
							const r = m[n];
							for (let o = 0; o < r.length; o++) {
								const s = r[o];
								let a = !0;
								for (let r = 0; r < d.length; r++)
									i(s.p, d[r].p) &&
										(n !== r && e.push({ froms: n, tos: r, hole: o }),
										a ? ((a = !1), u[r].push(s)) : (t = !0));
								a && u[n].push(s);
							}
						}
						e.length > 0 && (t || (m = u));
					}
					for (let t = 0, e = d.length; t < e; t++) {
						(c = d[t].s), l.push(c), (f = m[t]);
						for (let t = 0, e = f.length; t < e; t++) c.holes.push(f[t].h);
					}
					return l;
				},
			}),
			Object.assign(pl.prototype, {
				isFont: !0,
				generateShapes: function (t, e) {
					void 0 === e && (e = 100);
					const n = [],
						i = (function (t, e, n) {
							const i = Array.from ? Array.from(t) : String(t).split(""),
								r = e / n.resolution,
								o =
									(n.boundingBox.yMax -
										n.boundingBox.yMin +
										n.underlineThickness) *
									r,
								s = [];
							let a = 0,
								c = 0;
							for (let t = 0; t < i.length; t++) {
								const e = i[t];
								if ("\n" === e) (a = 0), (c -= o);
								else {
									const t = fl(e, r, a, c, n);
									(a += t.offsetX), s.push(t.path);
								}
							}
							return s;
						})(t, e, this.data);
					for (let t = 0, e = i.length; t < e; t++)
						Array.prototype.push.apply(n, i[t].toShapes());
					return n;
				},
			}),
			(ml.prototype = Object.assign(Object.create(cc.prototype), {
				constructor: ml,
				load: function (t, e, n, i) {
					const r = this,
						o = new hc(this.manager);
					o.setPath(this.path),
						o.setRequestHeader(this.requestHeader),
						o.load(
							t,
							function (t) {
								let n;
								try {
									n = JSON.parse(t);
								} catch (e) {
									console.warn(
										"THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."
									),
										(n = JSON.parse(t.substring(65, t.length - 2)));
								}
								const i = r.parse(n);
								e && e(i);
							},
							n,
							i
						);
				},
				parse: function (t) {
					return new pl(t);
				},
			}));
		const vl = function () {
			return (
				void 0 === gl &&
					(gl = new (window.AudioContext || window.webkitAudioContext)()),
				gl
			);
		};
		function yl(t) {
			cc.call(this, t);
		}
		function xl(t, e, n) {
			$c.call(this, void 0, n);
			const i = new je().set(t),
				r = new je().set(e),
				o = new Et(i.r, i.g, i.b),
				s = new Et(r.r, r.g, r.b),
				a = Math.sqrt(Math.PI),
				c = a * Math.sqrt(0.75);
			this.sh.coefficients[0].copy(o).add(s).multiplyScalar(a),
				this.sh.coefficients[1].copy(o).sub(s).multiplyScalar(c);
		}
		function bl(t, e) {
			$c.call(this, void 0, e);
			const n = new je().set(t);
			this.sh.coefficients[0]
				.set(n.r, n.g, n.b)
				.multiplyScalar(2 * Math.sqrt(Math.PI));
		}
		(yl.prototype = Object.assign(Object.create(cc.prototype), {
			constructor: yl,
			load: function (t, e, n, i) {
				const r = this,
					o = new hc(r.manager);
				o.setResponseType("arraybuffer"),
					o.setPath(r.path),
					o.setRequestHeader(r.requestHeader),
					o.load(
						t,
						function (n) {
							try {
								const t = n.slice(0);
								vl().decodeAudioData(t, function (t) {
									e(t);
								});
							} catch (e) {
								i ? i(e) : console.error(e), r.manager.itemError(t);
							}
						},
						n,
						i
					);
			},
		})),
			(xl.prototype = Object.assign(Object.create($c.prototype), {
				constructor: xl,
				isHemisphereLightProbe: !0,
				copy: function (t) {
					return $c.prototype.copy.call(this, t), this;
				},
				toJSON: function (t) {
					return $c.prototype.toJSON.call(this, t);
				},
			})),
			(bl.prototype = Object.assign(Object.create($c.prototype), {
				constructor: bl,
				isAmbientLightProbe: !0,
				copy: function (t) {
					return $c.prototype.copy.call(this, t), this;
				},
				toJSON: function (t) {
					return $c.prototype.toJSON.call(this, t);
				},
			}));
		const wl = new Dt(),
			_l = new Dt();
		function Ml(t) {
			(this.autoStart = void 0 === t || t),
				(this.startTime = 0),
				(this.oldTime = 0),
				(this.elapsedTime = 0),
				(this.running = !1);
		}
		Object.assign(
			function () {
				(this.type = "StereoCamera"),
					(this.aspect = 1),
					(this.eyeSep = 0.064),
					(this.cameraL = new Qn()),
					this.cameraL.layers.enable(1),
					(this.cameraL.matrixAutoUpdate = !1),
					(this.cameraR = new Qn()),
					this.cameraR.layers.enable(2),
					(this.cameraR.matrixAutoUpdate = !1),
					(this._cache = {
						focus: null,
						fov: null,
						aspect: null,
						near: null,
						far: null,
						zoom: null,
						eyeSep: null,
					});
			}.prototype,
			{
				update: function (t) {
					const e = this._cache;
					if (
						e.focus !== t.focus ||
						e.fov !== t.fov ||
						e.aspect !== t.aspect * this.aspect ||
						e.near !== t.near ||
						e.far !== t.far ||
						e.zoom !== t.zoom ||
						e.eyeSep !== this.eyeSep
					) {
						(e.focus = t.focus),
							(e.fov = t.fov),
							(e.aspect = t.aspect * this.aspect),
							(e.near = t.near),
							(e.far = t.far),
							(e.zoom = t.zoom),
							(e.eyeSep = this.eyeSep);
						const n = t.projectionMatrix.clone(),
							i = e.eyeSep / 2,
							r = (i * e.near) / e.focus,
							o = (e.near * Math.tan(pt.DEG2RAD * e.fov * 0.5)) / e.zoom;
						let s, a;
						(_l.elements[12] = -i),
							(wl.elements[12] = i),
							(s = -o * e.aspect + r),
							(a = o * e.aspect + r),
							(n.elements[0] = (2 * e.near) / (a - s)),
							(n.elements[8] = (a + s) / (a - s)),
							this.cameraL.projectionMatrix.copy(n),
							(s = -o * e.aspect - r),
							(a = o * e.aspect - r),
							(n.elements[0] = (2 * e.near) / (a - s)),
							(n.elements[8] = (a + s) / (a - s)),
							this.cameraR.projectionMatrix.copy(n);
					}
					this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(_l),
						this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(wl);
				},
			}
		),
			Object.assign(Ml.prototype, {
				start: function () {
					(this.startTime = (
						"undefined" == typeof performance ? Date : performance
					).now()),
						(this.oldTime = this.startTime),
						(this.elapsedTime = 0),
						(this.running = !0);
				},
				stop: function () {
					this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
				},
				getElapsedTime: function () {
					return this.getDelta(), this.elapsedTime;
				},
				getDelta: function () {
					let t = 0;
					if (this.autoStart && !this.running) return this.start(), 0;
					if (this.running) {
						const e = (
							"undefined" == typeof performance ? Date : performance
						).now();
						(t = (e - this.oldTime) / 1e3),
							(this.oldTime = e),
							(this.elapsedTime += t);
					}
					return t;
				},
			});
		const Sl = new Et(),
			Tl = new Mt(),
			El = new Et(),
			Al = new Et();
		function Ll() {
			Qt.call(this),
				(this.type = "AudioListener"),
				(this.context = vl()),
				(this.gain = this.context.createGain()),
				this.gain.connect(this.context.destination),
				(this.filter = null),
				(this.timeDelta = 0),
				(this._clock = new Ml());
		}
		function Rl(t) {
			Qt.call(this),
				(this.type = "Audio"),
				(this.listener = t),
				(this.context = t.context),
				(this.gain = this.context.createGain()),
				this.gain.connect(t.getInput()),
				(this.autoplay = !1),
				(this.buffer = null),
				(this.detune = 0),
				(this.loop = !1),
				(this.loopStart = 0),
				(this.loopEnd = 0),
				(this.offset = 0),
				(this.duration = void 0),
				(this.playbackRate = 1),
				(this.isPlaying = !1),
				(this.hasPlaybackControl = !0),
				(this.sourceType = "empty"),
				(this._startedAt = 0),
				(this._progress = 0),
				(this.filters = []);
		}
		(Ll.prototype = Object.assign(Object.create(Qt.prototype), {
			constructor: Ll,
			getInput: function () {
				return this.gain;
			},
			removeFilter: function () {
				return (
					null !== this.filter &&
						(this.gain.disconnect(this.filter),
						this.filter.disconnect(this.context.destination),
						this.gain.connect(this.context.destination),
						(this.filter = null)),
					this
				);
			},
			getFilter: function () {
				return this.filter;
			},
			setFilter: function (t) {
				return (
					null !== this.filter
						? (this.gain.disconnect(this.filter),
						  this.filter.disconnect(this.context.destination))
						: this.gain.disconnect(this.context.destination),
					(this.filter = t),
					this.gain.connect(this.filter),
					this.filter.connect(this.context.destination),
					this
				);
			},
			getMasterVolume: function () {
				return this.gain.gain.value;
			},
			setMasterVolume: function (t) {
				return (
					this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01),
					this
				);
			},
			updateMatrixWorld: function (t) {
				Qt.prototype.updateMatrixWorld.call(this, t);
				const e = this.context.listener,
					n = this.up;
				if (
					((this.timeDelta = this._clock.getDelta()),
					this.matrixWorld.decompose(Sl, Tl, El),
					Al.set(0, 0, -1).applyQuaternion(Tl),
					e.positionX)
				) {
					const t = this.context.currentTime + this.timeDelta;
					e.positionX.linearRampToValueAtTime(Sl.x, t),
						e.positionY.linearRampToValueAtTime(Sl.y, t),
						e.positionZ.linearRampToValueAtTime(Sl.z, t),
						e.forwardX.linearRampToValueAtTime(Al.x, t),
						e.forwardY.linearRampToValueAtTime(Al.y, t),
						e.forwardZ.linearRampToValueAtTime(Al.z, t),
						e.upX.linearRampToValueAtTime(n.x, t),
						e.upY.linearRampToValueAtTime(n.y, t),
						e.upZ.linearRampToValueAtTime(n.z, t);
				} else
					e.setPosition(Sl.x, Sl.y, Sl.z),
						e.setOrientation(Al.x, Al.y, Al.z, n.x, n.y, n.z);
			},
		})),
			(Rl.prototype = Object.assign(Object.create(Qt.prototype), {
				constructor: Rl,
				getOutput: function () {
					return this.gain;
				},
				setNodeSource: function (t) {
					return (
						(this.hasPlaybackControl = !1),
						(this.sourceType = "audioNode"),
						(this.source = t),
						this.connect(),
						this
					);
				},
				setMediaElementSource: function (t) {
					return (
						(this.hasPlaybackControl = !1),
						(this.sourceType = "mediaNode"),
						(this.source = this.context.createMediaElementSource(t)),
						this.connect(),
						this
					);
				},
				setMediaStreamSource: function (t) {
					return (
						(this.hasPlaybackControl = !1),
						(this.sourceType = "mediaStreamNode"),
						(this.source = this.context.createMediaStreamSource(t)),
						this.connect(),
						this
					);
				},
				setBuffer: function (t) {
					return (
						(this.buffer = t),
						(this.sourceType = "buffer"),
						this.autoplay && this.play(),
						this
					);
				},
				play: function (t) {
					if ((void 0 === t && (t = 0), !0 === this.isPlaying))
						return void console.warn("THREE.Audio: Audio is already playing.");
					if (!1 === this.hasPlaybackControl)
						return void console.warn(
							"THREE.Audio: this Audio has no playback control."
						);
					this._startedAt = this.context.currentTime + t;
					const e = this.context.createBufferSource();
					return (
						(e.buffer = this.buffer),
						(e.loop = this.loop),
						(e.loopStart = this.loopStart),
						(e.loopEnd = this.loopEnd),
						(e.onended = this.onEnded.bind(this)),
						e.start(
							this._startedAt,
							this._progress + this.offset,
							this.duration
						),
						(this.isPlaying = !0),
						(this.source = e),
						this.setDetune(this.detune),
						this.setPlaybackRate(this.playbackRate),
						this.connect()
					);
				},
				pause: function () {
					if (!1 !== this.hasPlaybackControl)
						return (
							!0 === this.isPlaying &&
								((this._progress +=
									Math.max(this.context.currentTime - this._startedAt, 0) *
									this.playbackRate),
								!0 === this.loop &&
									(this._progress =
										this._progress % (this.duration || this.buffer.duration)),
								this.source.stop(),
								(this.source.onended = null),
								(this.isPlaying = !1)),
							this
						);
					console.warn("THREE.Audio: this Audio has no playback control.");
				},
				stop: function () {
					if (!1 !== this.hasPlaybackControl)
						return (
							(this._progress = 0),
							this.source.stop(),
							(this.source.onended = null),
							(this.isPlaying = !1),
							this
						);
					console.warn("THREE.Audio: this Audio has no playback control.");
				},
				connect: function () {
					if (this.filters.length > 0) {
						this.source.connect(this.filters[0]);
						for (let t = 1, e = this.filters.length; t < e; t++)
							this.filters[t - 1].connect(this.filters[t]);
						this.filters[this.filters.length - 1].connect(this.getOutput());
					} else this.source.connect(this.getOutput());
					return this;
				},
				disconnect: function () {
					if (this.filters.length > 0) {
						this.source.disconnect(this.filters[0]);
						for (let t = 1, e = this.filters.length; t < e; t++)
							this.filters[t - 1].disconnect(this.filters[t]);
						this.filters[this.filters.length - 1].disconnect(this.getOutput());
					} else this.source.disconnect(this.getOutput());
					return this;
				},
				getFilters: function () {
					return this.filters;
				},
				setFilters: function (t) {
					return (
						t || (t = []),
						!0 === this.isPlaying
							? (this.disconnect(), (this.filters = t), this.connect())
							: (this.filters = t),
						this
					);
				},
				setDetune: function (t) {
					if (((this.detune = t), void 0 !== this.source.detune))
						return (
							!0 === this.isPlaying &&
								this.source.detune.setTargetAtTime(
									this.detune,
									this.context.currentTime,
									0.01
								),
							this
						);
				},
				getDetune: function () {
					return this.detune;
				},
				getFilter: function () {
					return this.getFilters()[0];
				},
				setFilter: function (t) {
					return this.setFilters(t ? [t] : []);
				},
				setPlaybackRate: function (t) {
					if (!1 !== this.hasPlaybackControl)
						return (
							(this.playbackRate = t),
							!0 === this.isPlaying &&
								this.source.playbackRate.setTargetAtTime(
									this.playbackRate,
									this.context.currentTime,
									0.01
								),
							this
						);
					console.warn("THREE.Audio: this Audio has no playback control.");
				},
				getPlaybackRate: function () {
					return this.playbackRate;
				},
				onEnded: function () {
					this.isPlaying = !1;
				},
				getLoop: function () {
					return !1 === this.hasPlaybackControl
						? (console.warn("THREE.Audio: this Audio has no playback control."),
						  !1)
						: this.loop;
				},
				setLoop: function (t) {
					if (!1 !== this.hasPlaybackControl)
						return (
							(this.loop = t),
							!0 === this.isPlaying && (this.source.loop = this.loop),
							this
						);
					console.warn("THREE.Audio: this Audio has no playback control.");
				},
				setLoopStart: function (t) {
					return (this.loopStart = t), this;
				},
				setLoopEnd: function (t) {
					return (this.loopEnd = t), this;
				},
				getVolume: function () {
					return this.gain.gain.value;
				},
				setVolume: function (t) {
					return (
						this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01),
						this
					);
				},
			}));
		const Pl = new Et(),
			Cl = new Mt(),
			Il = new Et(),
			Ol = new Et();
		function Dl(t) {
			Rl.call(this, t),
				(this.panner = this.context.createPanner()),
				(this.panner.panningModel = "HRTF"),
				this.panner.connect(this.gain);
		}
		function Nl(t, e) {
			(this.analyser = t.context.createAnalyser()),
				(this.analyser.fftSize = void 0 !== e ? e : 2048),
				(this.data = new Uint8Array(this.analyser.frequencyBinCount)),
				t.getOutput().connect(this.analyser);
		}
		function zl(t, e, n) {
			let i, r, o;
			switch (((this.binding = t), (this.valueSize = n), e)) {
				case "quaternion":
					(i = this._slerp),
						(r = this._slerpAdditive),
						(o = this._setAdditiveIdentityQuaternion),
						(this.buffer = new Float64Array(6 * n)),
						(this._workIndex = 5);
					break;
				case "string":
				case "bool":
					(i = this._select),
						(r = this._select),
						(o = this._setAdditiveIdentityOther),
						(this.buffer = new Array(5 * n));
					break;
				default:
					(i = this._lerp),
						(r = this._lerpAdditive),
						(o = this._setAdditiveIdentityNumeric),
						(this.buffer = new Float64Array(5 * n));
			}
			(this._mixBufferRegion = i),
				(this._mixBufferRegionAdditive = r),
				(this._setIdentity = o),
				(this._origIndex = 3),
				(this._addIndex = 4),
				(this.cumulativeWeight = 0),
				(this.cumulativeWeightAdditive = 0),
				(this.useCount = 0),
				(this.referenceCount = 0);
		}
		(Dl.prototype = Object.assign(Object.create(Rl.prototype), {
			constructor: Dl,
			getOutput: function () {
				return this.panner;
			},
			getRefDistance: function () {
				return this.panner.refDistance;
			},
			setRefDistance: function (t) {
				return (this.panner.refDistance = t), this;
			},
			getRolloffFactor: function () {
				return this.panner.rolloffFactor;
			},
			setRolloffFactor: function (t) {
				return (this.panner.rolloffFactor = t), this;
			},
			getDistanceModel: function () {
				return this.panner.distanceModel;
			},
			setDistanceModel: function (t) {
				return (this.panner.distanceModel = t), this;
			},
			getMaxDistance: function () {
				return this.panner.maxDistance;
			},
			setMaxDistance: function (t) {
				return (this.panner.maxDistance = t), this;
			},
			setDirectionalCone: function (t, e, n) {
				return (
					(this.panner.coneInnerAngle = t),
					(this.panner.coneOuterAngle = e),
					(this.panner.coneOuterGain = n),
					this
				);
			},
			updateMatrixWorld: function (t) {
				if (
					(Qt.prototype.updateMatrixWorld.call(this, t),
					!0 === this.hasPlaybackControl && !1 === this.isPlaying)
				)
					return;
				this.matrixWorld.decompose(Pl, Cl, Il),
					Ol.set(0, 0, 1).applyQuaternion(Cl);
				const e = this.panner;
				if (e.positionX) {
					const t = this.context.currentTime + this.listener.timeDelta;
					e.positionX.linearRampToValueAtTime(Pl.x, t),
						e.positionY.linearRampToValueAtTime(Pl.y, t),
						e.positionZ.linearRampToValueAtTime(Pl.z, t),
						e.orientationX.linearRampToValueAtTime(Ol.x, t),
						e.orientationY.linearRampToValueAtTime(Ol.y, t),
						e.orientationZ.linearRampToValueAtTime(Ol.z, t);
				} else
					e.setPosition(Pl.x, Pl.y, Pl.z), e.setOrientation(Ol.x, Ol.y, Ol.z);
			},
		})),
			Object.assign(Nl.prototype, {
				getFrequencyData: function () {
					return this.analyser.getByteFrequencyData(this.data), this.data;
				},
				getAverageFrequency: function () {
					let t = 0;
					const e = this.getFrequencyData();
					for (let n = 0; n < e.length; n++) t += e[n];
					return t / e.length;
				},
			}),
			Object.assign(zl.prototype, {
				accumulate: function (t, e) {
					const n = this.buffer,
						i = this.valueSize,
						r = t * i + i;
					let o = this.cumulativeWeight;
					if (0 === o) {
						for (let t = 0; t !== i; ++t) n[r + t] = n[t];
						o = e;
					} else {
						o += e;
						const t = e / o;
						this._mixBufferRegion(n, r, 0, t, i);
					}
					this.cumulativeWeight = o;
				},
				accumulateAdditive: function (t) {
					const e = this.buffer,
						n = this.valueSize,
						i = n * this._addIndex;
					0 === this.cumulativeWeightAdditive && this._setIdentity(),
						this._mixBufferRegionAdditive(e, i, 0, t, n),
						(this.cumulativeWeightAdditive += t);
				},
				apply: function (t) {
					const e = this.valueSize,
						n = this.buffer,
						i = t * e + e,
						r = this.cumulativeWeight,
						o = this.cumulativeWeightAdditive,
						s = this.binding;
					if (
						((this.cumulativeWeight = 0),
						(this.cumulativeWeightAdditive = 0),
						r < 1)
					) {
						const t = e * this._origIndex;
						this._mixBufferRegion(n, i, t, 1 - r, e);
					}
					o > 0 &&
						this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
					for (let t = e, r = e + e; t !== r; ++t)
						if (n[t] !== n[t + e]) {
							s.setValue(n, i);
							break;
						}
				},
				saveOriginalState: function () {
					const t = this.binding,
						e = this.buffer,
						n = this.valueSize,
						i = n * this._origIndex;
					t.getValue(e, i);
					for (let t = n, r = i; t !== r; ++t) e[t] = e[i + (t % n)];
					this._setIdentity(),
						(this.cumulativeWeight = 0),
						(this.cumulativeWeightAdditive = 0);
				},
				restoreOriginalState: function () {
					const t = 3 * this.valueSize;
					this.binding.setValue(this.buffer, t);
				},
				_setAdditiveIdentityNumeric: function () {
					const t = this._addIndex * this.valueSize,
						e = t + this.valueSize;
					for (let n = t; n < e; n++) this.buffer[n] = 0;
				},
				_setAdditiveIdentityQuaternion: function () {
					this._setAdditiveIdentityNumeric(),
						(this.buffer[4 * this._addIndex + 3] = 1);
				},
				_setAdditiveIdentityOther: function () {
					const t = this._origIndex * this.valueSize,
						e = this._addIndex * this.valueSize;
					for (let n = 0; n < this.valueSize; n++)
						this.buffer[e + n] = this.buffer[t + n];
				},
				_select: function (t, e, n, i, r) {
					if (i >= 0.5) for (let i = 0; i !== r; ++i) t[e + i] = t[n + i];
				},
				_slerp: function (t, e, n, i) {
					Mt.slerpFlat(t, e, t, e, t, n, i);
				},
				_slerpAdditive: function (t, e, n, i, r) {
					const o = this._workIndex * r;
					Mt.multiplyQuaternionsFlat(t, o, t, e, t, n),
						Mt.slerpFlat(t, e, t, e, t, o, i);
				},
				_lerp: function (t, e, n, i, r) {
					const o = 1 - i;
					for (let s = 0; s !== r; ++s) {
						const r = e + s;
						t[r] = t[r] * o + t[n + s] * i;
					}
				},
				_lerpAdditive: function (t, e, n, i, r) {
					for (let o = 0; o !== r; ++o) {
						const r = e + o;
						t[r] = t[r] + t[n + o] * i;
					}
				},
			});
		const Ul = new RegExp("[\\[\\]\\.:\\/]", "g"),
			Hl = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
			Bl = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
			Fl = /(WCOD+)?/.source.replace("WCOD", Hl),
			kl = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
			Gl = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
			jl = new RegExp("^" + Bl + Fl + kl + Gl + "$"),
			Vl = ["material", "materials", "bones"];
		function Wl(t, e, n) {
			const i = n || ql.parseTrackName(e);
			(this._targetGroup = t), (this._bindings = t.subscribe_(e, i));
		}
		function ql(t, e, n) {
			(this.path = e),
				(this.parsedPath = n || ql.parseTrackName(e)),
				(this.node = ql.findNode(t, this.parsedPath.nodeName) || t),
				(this.rootNode = t);
		}
		function Xl(t, e, n, i) {
			(this._mixer = t),
				(this._clip = e),
				(this._localRoot = n || null),
				(this.blendMode = i || e.blendMode);
			const r = e.tracks,
				o = r.length,
				s = new Array(o),
				a = { endingStart: 2400, endingEnd: 2400 };
			for (let t = 0; t !== o; ++t) {
				const e = r[t].createInterpolant(null);
				(s[t] = e), (e.settings = a);
			}
			(this._interpolantSettings = a),
				(this._interpolants = s),
				(this._propertyBindings = new Array(o)),
				(this._cacheIndex = null),
				(this._byClipCacheIndex = null),
				(this._timeScaleInterpolant = null),
				(this._weightInterpolant = null),
				(this.loop = 2201),
				(this._loopCount = -1),
				(this._startTime = null),
				(this.time = 0),
				(this.timeScale = 1),
				(this._effectiveTimeScale = 1),
				(this.weight = 1),
				(this._effectiveWeight = 1),
				(this.repetitions = 1 / 0),
				(this.paused = !1),
				(this.enabled = !0),
				(this.clampWhenFinished = !1),
				(this.zeroSlopeAtStart = !0),
				(this.zeroSlopeAtEnd = !0);
		}
		function Yl(t) {
			(this._root = t),
				this._initMemoryManager(),
				(this._accuIndex = 0),
				(this.time = 0),
				(this.timeScale = 1);
		}
		function Zl(t) {
			"string" == typeof t &&
				(console.warn("THREE.Uniform: Type parameter is no longer needed."),
				(t = arguments[1])),
				(this.value = t);
		}
		function Jl(t, e, n) {
			vo.call(this, t, e), (this.meshPerAttribute = n || 1);
		}
		function Kl(t, e, n, i) {
			(this.ray = new Se(t, e)),
				(this.near = n || 0),
				(this.far = i || 1 / 0),
				(this.camera = null),
				(this.layers = new Ht()),
				(this.params = {
					Mesh: {},
					Line: { threshold: 1 },
					LOD: {},
					Points: { threshold: 1 },
					Sprite: {},
				}),
				Object.defineProperties(this.params, {
					PointCloud: {
						get: function () {
							return (
								console.warn(
									"THREE.Raycaster: params.PointCloud has been renamed to params.Points."
								),
								this.Points
							);
						},
					},
				});
		}
		function Ql(t, e) {
			return t.distance - e.distance;
		}
		function $l(t, e, n, i) {
			if ((t.layers.test(e.layers) && t.raycast(e, n), !0 === i)) {
				const i = t.children;
				for (let t = 0, r = i.length; t < r; t++) $l(i[t], e, n, !0);
			}
		}
		Object.assign(Wl.prototype, {
			getValue: function (t, e) {
				this.bind();
				const n = this._targetGroup.nCachedObjects_,
					i = this._bindings[n];
				void 0 !== i && i.getValue(t, e);
			},
			setValue: function (t, e) {
				const n = this._bindings;
				for (
					let i = this._targetGroup.nCachedObjects_, r = n.length;
					i !== r;
					++i
				)
					n[i].setValue(t, e);
			},
			bind: function () {
				const t = this._bindings;
				for (
					let e = this._targetGroup.nCachedObjects_, n = t.length;
					e !== n;
					++e
				)
					t[e].bind();
			},
			unbind: function () {
				const t = this._bindings;
				for (
					let e = this._targetGroup.nCachedObjects_, n = t.length;
					e !== n;
					++e
				)
					t[e].unbind();
			},
		}),
			Object.assign(ql, {
				Composite: Wl,
				create: function (t, e, n) {
					return t && t.isAnimationObjectGroup
						? new ql.Composite(t, e, n)
						: new ql(t, e, n);
				},
				sanitizeNodeName: function (t) {
					return t.replace(/\s/g, "_").replace(Ul, "");
				},
				parseTrackName: function (t) {
					const e = jl.exec(t);
					if (!e)
						throw new Error("PropertyBinding: Cannot parse trackName: " + t);
					const n = {
							nodeName: e[2],
							objectName: e[3],
							objectIndex: e[4],
							propertyName: e[5],
							propertyIndex: e[6],
						},
						i = n.nodeName && n.nodeName.lastIndexOf(".");
					if (void 0 !== i && -1 !== i) {
						const t = n.nodeName.substring(i + 1);
						-1 !== Vl.indexOf(t) &&
							((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = t));
					}
					if (null === n.propertyName || 0 === n.propertyName.length)
						throw new Error(
							"PropertyBinding: can not parse propertyName from trackName: " + t
						);
					return n;
				},
				findNode: function (t, e) {
					if (
						!e ||
						"" === e ||
						"." === e ||
						-1 === e ||
						e === t.name ||
						e === t.uuid
					)
						return t;
					if (t.skeleton) {
						const n = t.skeleton.getBoneByName(e);
						if (void 0 !== n) return n;
					}
					if (t.children) {
						const n = function (t) {
								for (let i = 0; i < t.length; i++) {
									const r = t[i];
									if (r.name === e || r.uuid === e) return r;
									const o = n(r.children);
									if (o) return o;
								}
								return null;
							},
							i = n(t.children);
						if (i) return i;
					}
					return null;
				},
			}),
			Object.assign(ql.prototype, {
				_getValue_unavailable: function () {},
				_setValue_unavailable: function () {},
				BindingType: {
					Direct: 0,
					EntireArray: 1,
					ArrayElement: 2,
					HasFromToArray: 3,
				},
				Versioning: { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 },
				GetterByBindingType: [
					function (t, e) {
						t[e] = this.node[this.propertyName];
					},
					function (t, e) {
						const n = this.resolvedProperty;
						for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i];
					},
					function (t, e) {
						t[e] = this.resolvedProperty[this.propertyIndex];
					},
					function (t, e) {
						this.resolvedProperty.toArray(t, e);
					},
				],
				SetterByBindingTypeAndVersioning: [
					[
						function (t, e) {
							this.targetObject[this.propertyName] = t[e];
						},
						function (t, e) {
							(this.targetObject[this.propertyName] = t[e]),
								(this.targetObject.needsUpdate = !0);
						},
						function (t, e) {
							(this.targetObject[this.propertyName] = t[e]),
								(this.targetObject.matrixWorldNeedsUpdate = !0);
						},
					],
					[
						function (t, e) {
							const n = this.resolvedProperty;
							for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
						},
						function (t, e) {
							const n = this.resolvedProperty;
							for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
							this.targetObject.needsUpdate = !0;
						},
						function (t, e) {
							const n = this.resolvedProperty;
							for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
							this.targetObject.matrixWorldNeedsUpdate = !0;
						},
					],
					[
						function (t, e) {
							this.resolvedProperty[this.propertyIndex] = t[e];
						},
						function (t, e) {
							(this.resolvedProperty[this.propertyIndex] = t[e]),
								(this.targetObject.needsUpdate = !0);
						},
						function (t, e) {
							(this.resolvedProperty[this.propertyIndex] = t[e]),
								(this.targetObject.matrixWorldNeedsUpdate = !0);
						},
					],
					[
						function (t, e) {
							this.resolvedProperty.fromArray(t, e);
						},
						function (t, e) {
							this.resolvedProperty.fromArray(t, e),
								(this.targetObject.needsUpdate = !0);
						},
						function (t, e) {
							this.resolvedProperty.fromArray(t, e),
								(this.targetObject.matrixWorldNeedsUpdate = !0);
						},
					],
				],
				getValue: function (t, e) {
					this.bind(), this.getValue(t, e);
				},
				setValue: function (t, e) {
					this.bind(), this.setValue(t, e);
				},
				bind: function () {
					let t = this.node,
						e = this.parsedPath,
						n = e.objectName,
						i = e.propertyName,
						r = e.propertyIndex;
					if (
						(t ||
							((t = ql.findNode(this.rootNode, e.nodeName) || this.rootNode),
							(this.node = t)),
						(this.getValue = this._getValue_unavailable),
						(this.setValue = this._setValue_unavailable),
						!t)
					)
						return void console.error(
							"THREE.PropertyBinding: Trying to update node for track: " +
								this.path +
								" but it wasn't found."
						);
					if (n) {
						let i = e.objectIndex;
						switch (n) {
							case "materials":
								if (!t.material)
									return void console.error(
										"THREE.PropertyBinding: Can not bind to material as node does not have a material.",
										this
									);
								if (!t.material.materials)
									return void console.error(
										"THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
										this
									);
								t = t.material.materials;
								break;
							case "bones":
								if (!t.skeleton)
									return void console.error(
										"THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
										this
									);
								t = t.skeleton.bones;
								for (let e = 0; e < t.length; e++)
									if (t[e].name === i) {
										i = e;
										break;
									}
								break;
							default:
								if (void 0 === t[n])
									return void console.error(
										"THREE.PropertyBinding: Can not bind to objectName of node undefined.",
										this
									);
								t = t[n];
						}
						if (void 0 !== i) {
							if (void 0 === t[i])
								return void console.error(
									"THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
									this,
									t
								);
							t = t[i];
						}
					}
					const o = t[i];
					if (void 0 === o) {
						const n = e.nodeName;
						return void console.error(
							"THREE.PropertyBinding: Trying to update property for track: " +
								n +
								"." +
								i +
								" but it wasn't found.",
							t
						);
					}
					let s = this.Versioning.None;
					(this.targetObject = t),
						void 0 !== t.needsUpdate
							? (s = this.Versioning.NeedsUpdate)
							: void 0 !== t.matrixWorldNeedsUpdate &&
							  (s = this.Versioning.MatrixWorldNeedsUpdate);
					let a = this.BindingType.Direct;
					if (void 0 !== r) {
						if ("morphTargetInfluences" === i) {
							if (!t.geometry)
								return void console.error(
									"THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
									this
								);
							if (!t.geometry.isBufferGeometry)
								return void console.error(
									"THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",
									this
								);
							if (!t.geometry.morphAttributes)
								return void console.error(
									"THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
									this
								);
							void 0 !== t.morphTargetDictionary[r] &&
								(r = t.morphTargetDictionary[r]);
						}
						(a = this.BindingType.ArrayElement),
							(this.resolvedProperty = o),
							(this.propertyIndex = r);
					} else
						void 0 !== o.fromArray && void 0 !== o.toArray
							? ((a = this.BindingType.HasFromToArray),
							  (this.resolvedProperty = o))
							: Array.isArray(o)
							? ((a = this.BindingType.EntireArray),
							  (this.resolvedProperty = o))
							: (this.propertyName = i);
					(this.getValue = this.GetterByBindingType[a]),
						(this.setValue = this.SetterByBindingTypeAndVersioning[a][s]);
				},
				unbind: function () {
					(this.node = null),
						(this.getValue = this._getValue_unbound),
						(this.setValue = this._setValue_unbound);
				},
			}),
			Object.assign(ql.prototype, {
				_getValue_unbound: ql.prototype.getValue,
				_setValue_unbound: ql.prototype.setValue,
			}),
			Object.assign(
				function () {
					(this.uuid = pt.generateUUID()),
						(this._objects = Array.prototype.slice.call(arguments)),
						(this.nCachedObjects_ = 0);
					const t = {};
					this._indicesByUUID = t;
					for (let e = 0, n = arguments.length; e !== n; ++e)
						t[arguments[e].uuid] = e;
					(this._paths = []),
						(this._parsedPaths = []),
						(this._bindings = []),
						(this._bindingsIndicesByPath = {});
					const e = this;
					this.stats = {
						objects: {
							get total() {
								return e._objects.length;
							},
							get inUse() {
								return this.total - e.nCachedObjects_;
							},
						},
						get bindingsPerObject() {
							return e._bindings.length;
						},
					};
				}.prototype,
				{
					isAnimationObjectGroup: !0,
					add: function () {
						const t = this._objects,
							e = this._indicesByUUID,
							n = this._paths,
							i = this._parsedPaths,
							r = this._bindings,
							o = r.length;
						let s = void 0,
							a = t.length,
							c = this.nCachedObjects_;
						for (let l = 0, h = arguments.length; l !== h; ++l) {
							const h = arguments[l],
								u = h.uuid;
							let d = e[u];
							if (void 0 === d) {
								(d = a++), (e[u] = d), t.push(h);
								for (let t = 0, e = o; t !== e; ++t)
									r[t].push(new ql(h, n[t], i[t]));
							} else if (d < c) {
								s = t[d];
								const a = --c,
									l = t[a];
								(e[l.uuid] = d), (t[d] = l), (e[u] = a), (t[a] = h);
								for (let t = 0, e = o; t !== e; ++t) {
									const e = r[t],
										o = e[a];
									let s = e[d];
									(e[d] = o),
										void 0 === s && (s = new ql(h, n[t], i[t])),
										(e[a] = s);
								}
							} else
								t[d] !== s &&
									console.error(
										"THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes."
									);
						}
						this.nCachedObjects_ = c;
					},
					remove: function () {
						const t = this._objects,
							e = this._indicesByUUID,
							n = this._bindings,
							i = n.length;
						let r = this.nCachedObjects_;
						for (let o = 0, s = arguments.length; o !== s; ++o) {
							const s = arguments[o],
								a = s.uuid,
								c = e[a];
							if (void 0 !== c && c >= r) {
								const o = r++,
									l = t[o];
								(e[l.uuid] = c), (t[c] = l), (e[a] = o), (t[o] = s);
								for (let t = 0, e = i; t !== e; ++t) {
									const e = n[t],
										i = e[o],
										r = e[c];
									(e[c] = i), (e[o] = r);
								}
							}
						}
						this.nCachedObjects_ = r;
					},
					uncache: function () {
						const t = this._objects,
							e = this._indicesByUUID,
							n = this._bindings,
							i = n.length;
						let r = this.nCachedObjects_,
							o = t.length;
						for (let s = 0, a = arguments.length; s !== a; ++s) {
							const a = arguments[s].uuid,
								c = e[a];
							if (void 0 !== c)
								if ((delete e[a], c < r)) {
									const s = --r,
										a = t[s],
										l = --o,
										h = t[l];
									(e[a.uuid] = c),
										(t[c] = a),
										(e[h.uuid] = s),
										(t[s] = h),
										t.pop();
									for (let t = 0, e = i; t !== e; ++t) {
										const e = n[t],
											i = e[s],
											r = e[l];
										(e[c] = i), (e[s] = r), e.pop();
									}
								} else {
									const r = --o,
										s = t[r];
									(e[s.uuid] = c), (t[c] = s), t.pop();
									for (let t = 0, e = i; t !== e; ++t) {
										const e = n[t];
										(e[c] = e[r]), e.pop();
									}
								}
						}
						this.nCachedObjects_ = r;
					},
					subscribe_: function (t, e) {
						let n = this._bindingsIndicesByPath,
							i = n[t],
							r = this._bindings;
						if (void 0 !== i) return r[i];
						const o = this._paths,
							s = this._parsedPaths,
							a = this._objects,
							c = a.length,
							l = this.nCachedObjects_,
							h = new Array(c);
						(i = r.length), (n[t] = i), o.push(t), s.push(e), r.push(h);
						for (let n = l, i = a.length; n !== i; ++n) {
							const i = a[n];
							h[n] = new ql(i, t, e);
						}
						return h;
					},
					unsubscribe_: function (t) {
						const e = this._bindingsIndicesByPath,
							n = e[t];
						if (void 0 !== n) {
							const i = this._paths,
								r = this._parsedPaths,
								o = this._bindings,
								s = o.length - 1,
								a = o[s];
							(e[t[s]] = n),
								(o[n] = a),
								o.pop(),
								(r[n] = r[s]),
								r.pop(),
								(i[n] = i[s]),
								i.pop();
						}
					},
				}
			),
			Object.assign(Xl.prototype, {
				play: function () {
					return this._mixer._activateAction(this), this;
				},
				stop: function () {
					return this._mixer._deactivateAction(this), this.reset();
				},
				reset: function () {
					return (
						(this.paused = !1),
						(this.enabled = !0),
						(this.time = 0),
						(this._loopCount = -1),
						(this._startTime = null),
						this.stopFading().stopWarping()
					);
				},
				isRunning: function () {
					return (
						this.enabled &&
						!this.paused &&
						0 !== this.timeScale &&
						null === this._startTime &&
						this._mixer._isActiveAction(this)
					);
				},
				isScheduled: function () {
					return this._mixer._isActiveAction(this);
				},
				startAt: function (t) {
					return (this._startTime = t), this;
				},
				setLoop: function (t, e) {
					return (this.loop = t), (this.repetitions = e), this;
				},
				setEffectiveWeight: function (t) {
					return (
						(this.weight = t),
						(this._effectiveWeight = this.enabled ? t : 0),
						this.stopFading()
					);
				},
				getEffectiveWeight: function () {
					return this._effectiveWeight;
				},
				fadeIn: function (t) {
					return this._scheduleFading(t, 0, 1);
				},
				fadeOut: function (t) {
					return this._scheduleFading(t, 1, 0);
				},
				crossFadeFrom: function (t, e, n) {
					if ((t.fadeOut(e), this.fadeIn(e), n)) {
						const n = this._clip.duration,
							i = t._clip.duration,
							r = i / n,
							o = n / i;
						t.warp(1, r, e), this.warp(o, 1, e);
					}
					return this;
				},
				crossFadeTo: function (t, e, n) {
					return t.crossFadeFrom(this, e, n);
				},
				stopFading: function () {
					let t = this._weightInterpolant;
					return (
						null !== t &&
							((this._weightInterpolant = null),
							this._mixer._takeBackControlInterpolant(t)),
						this
					);
				},
				setEffectiveTimeScale: function (t) {
					return (
						(this.timeScale = t),
						(this._effectiveTimeScale = this.paused ? 0 : t),
						this.stopWarping()
					);
				},
				getEffectiveTimeScale: function () {
					return this._effectiveTimeScale;
				},
				setDuration: function (t) {
					return (this.timeScale = this._clip.duration / t), this.stopWarping();
				},
				syncWith: function (t) {
					return (
						(this.time = t.time),
						(this.timeScale = t.timeScale),
						this.stopWarping()
					);
				},
				halt: function (t) {
					return this.warp(this._effectiveTimeScale, 0, t);
				},
				warp: function (t, e, n) {
					const i = this._mixer,
						r = i.time,
						o = this.timeScale;
					let s = this._timeScaleInterpolant;
					null === s &&
						((s = i._lendControlInterpolant()),
						(this._timeScaleInterpolant = s));
					const a = s.parameterPositions,
						c = s.sampleValues;
					return (
						(a[0] = r), (a[1] = r + n), (c[0] = t / o), (c[1] = e / o), this
					);
				},
				stopWarping: function () {
					let t = this._timeScaleInterpolant;
					return (
						null !== t &&
							((this._timeScaleInterpolant = null),
							this._mixer._takeBackControlInterpolant(t)),
						this
					);
				},
				getMixer: function () {
					return this._mixer;
				},
				getClip: function () {
					return this._clip;
				},
				getRoot: function () {
					return this._localRoot || this._mixer._root;
				},
				_update: function (t, e, n, i) {
					if (!this.enabled) return void this._updateWeight(t);
					const r = this._startTime;
					if (null !== r) {
						const i = (t - r) * n;
						if (i < 0 || 0 === n) return;
						(this._startTime = null), (e = n * i);
					}
					e *= this._updateTimeScale(t);
					const o = this._updateTime(e),
						s = this._updateWeight(t);
					if (s > 0) {
						const t = this._interpolants,
							e = this._propertyBindings;
						switch (this.blendMode) {
							case 2501:
								for (let n = 0, i = t.length; n !== i; ++n)
									t[n].evaluate(o), e[n].accumulateAdditive(s);
								break;
							case 2500:
							default:
								for (let n = 0, r = t.length; n !== r; ++n)
									t[n].evaluate(o), e[n].accumulate(i, s);
						}
					}
				},
				_updateWeight: function (t) {
					let e = 0;
					if (this.enabled) {
						e = this.weight;
						const n = this._weightInterpolant;
						if (null !== n) {
							const i = n.evaluate(t)[0];
							(e *= i),
								t > n.parameterPositions[1] &&
									(this.stopFading(), 0 === i && (this.enabled = !1));
						}
					}
					return (this._effectiveWeight = e), e;
				},
				_updateTimeScale: function (t) {
					let e = 0;
					if (!this.paused) {
						e = this.timeScale;
						const n = this._timeScaleInterpolant;
						if (null !== n) {
							(e *= n.evaluate(t)[0]),
								t > n.parameterPositions[1] &&
									(this.stopWarping(),
									0 === e ? (this.paused = !0) : (this.timeScale = e));
						}
					}
					return (this._effectiveTimeScale = e), e;
				},
				_updateTime: function (t) {
					const e = this._clip.duration,
						n = this.loop;
					let i = this.time + t,
						r = this._loopCount;
					const o = 2202 === n;
					if (0 === t) return -1 === r ? i : o && 1 == (1 & r) ? e - i : i;
					if (2200 === n) {
						-1 === r && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
						t: {
							if (i >= e) i = e;
							else {
								if (!(i < 0)) {
									this.time = i;
									break t;
								}
								i = 0;
							}
							this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
								(this.time = i),
								this._mixer.dispatchEvent({
									type: "finished",
									action: this,
									direction: t < 0 ? -1 : 1,
								});
						}
					} else {
						if (
							(-1 === r &&
								(t >= 0
									? ((r = 0), this._setEndings(!0, 0 === this.repetitions, o))
									: this._setEndings(0 === this.repetitions, !0, o)),
							i >= e || i < 0)
						) {
							const n = Math.floor(i / e);
							(i -= e * n), (r += Math.abs(n));
							const s = this.repetitions - r;
							if (s <= 0)
								this.clampWhenFinished
									? (this.paused = !0)
									: (this.enabled = !1),
									(i = t > 0 ? e : 0),
									(this.time = i),
									this._mixer.dispatchEvent({
										type: "finished",
										action: this,
										direction: t > 0 ? 1 : -1,
									});
							else {
								if (1 === s) {
									const e = t < 0;
									this._setEndings(e, !e, o);
								} else this._setEndings(!1, !1, o);
								(this._loopCount = r),
									(this.time = i),
									this._mixer.dispatchEvent({
										type: "loop",
										action: this,
										loopDelta: n,
									});
							}
						} else this.time = i;
						if (o && 1 == (1 & r)) return e - i;
					}
					return i;
				},
				_setEndings: function (t, e, n) {
					const i = this._interpolantSettings;
					n
						? ((i.endingStart = 2401), (i.endingEnd = 2401))
						: ((i.endingStart = t
								? this.zeroSlopeAtStart
									? 2401
									: 2400
								: 2402),
						  (i.endingEnd = e ? (this.zeroSlopeAtEnd ? 2401 : 2400) : 2402));
				},
				_scheduleFading: function (t, e, n) {
					const i = this._mixer,
						r = i.time;
					let o = this._weightInterpolant;
					null === o &&
						((o = i._lendControlInterpolant()), (this._weightInterpolant = o));
					const s = o.parameterPositions,
						a = o.sampleValues;
					return (s[0] = r), (a[0] = e), (s[1] = r + t), (a[1] = n), this;
				},
			}),
			(Yl.prototype = Object.assign(Object.create(ht.prototype), {
				constructor: Yl,
				_bindAction: function (t, e) {
					const n = t._localRoot || this._root,
						i = t._clip.tracks,
						r = i.length,
						o = t._propertyBindings,
						s = t._interpolants,
						a = n.uuid,
						c = this._bindingsByRootAndName;
					let l = c[a];
					void 0 === l && ((l = {}), (c[a] = l));
					for (let t = 0; t !== r; ++t) {
						const r = i[t],
							c = r.name;
						let h = l[c];
						if (void 0 !== h) o[t] = h;
						else {
							if (((h = o[t]), void 0 !== h)) {
								null === h._cacheIndex &&
									(++h.referenceCount, this._addInactiveBinding(h, a, c));
								continue;
							}
							const i = e && e._propertyBindings[t].binding.parsedPath;
							(h = new zl(
								ql.create(n, c, i),
								r.ValueTypeName,
								r.getValueSize()
							)),
								++h.referenceCount,
								this._addInactiveBinding(h, a, c),
								(o[t] = h);
						}
						s[t].resultBuffer = h.buffer;
					}
				},
				_activateAction: function (t) {
					if (!this._isActiveAction(t)) {
						if (null === t._cacheIndex) {
							const e = (t._localRoot || this._root).uuid,
								n = t._clip.uuid,
								i = this._actionsByClip[n];
							this._bindAction(t, i && i.knownActions[0]),
								this._addInactiveAction(t, n, e);
						}
						const e = t._propertyBindings;
						for (let t = 0, n = e.length; t !== n; ++t) {
							const n = e[t];
							0 == n.useCount++ &&
								(this._lendBinding(n), n.saveOriginalState());
						}
						this._lendAction(t);
					}
				},
				_deactivateAction: function (t) {
					if (this._isActiveAction(t)) {
						const e = t._propertyBindings;
						for (let t = 0, n = e.length; t !== n; ++t) {
							const n = e[t];
							0 == --n.useCount &&
								(n.restoreOriginalState(), this._takeBackBinding(n));
						}
						this._takeBackAction(t);
					}
				},
				_initMemoryManager: function () {
					(this._actions = []),
						(this._nActiveActions = 0),
						(this._actionsByClip = {}),
						(this._bindings = []),
						(this._nActiveBindings = 0),
						(this._bindingsByRootAndName = {}),
						(this._controlInterpolants = []),
						(this._nActiveControlInterpolants = 0);
					const t = this;
					this.stats = {
						actions: {
							get total() {
								return t._actions.length;
							},
							get inUse() {
								return t._nActiveActions;
							},
						},
						bindings: {
							get total() {
								return t._bindings.length;
							},
							get inUse() {
								return t._nActiveBindings;
							},
						},
						controlInterpolants: {
							get total() {
								return t._controlInterpolants.length;
							},
							get inUse() {
								return t._nActiveControlInterpolants;
							},
						},
					};
				},
				_isActiveAction: function (t) {
					const e = t._cacheIndex;
					return null !== e && e < this._nActiveActions;
				},
				_addInactiveAction: function (t, e, n) {
					const i = this._actions,
						r = this._actionsByClip;
					let o = r[e];
					if (void 0 === o)
						(o = { knownActions: [t], actionByRoot: {} }),
							(t._byClipCacheIndex = 0),
							(r[e] = o);
					else {
						const e = o.knownActions;
						(t._byClipCacheIndex = e.length), e.push(t);
					}
					(t._cacheIndex = i.length), i.push(t), (o.actionByRoot[n] = t);
				},
				_removeInactiveAction: function (t) {
					const e = this._actions,
						n = e[e.length - 1],
						i = t._cacheIndex;
					(n._cacheIndex = i), (e[i] = n), e.pop(), (t._cacheIndex = null);
					const r = t._clip.uuid,
						o = this._actionsByClip,
						s = o[r],
						a = s.knownActions,
						c = a[a.length - 1],
						l = t._byClipCacheIndex;
					(c._byClipCacheIndex = l),
						(a[l] = c),
						a.pop(),
						(t._byClipCacheIndex = null);
					delete s.actionByRoot[(t._localRoot || this._root).uuid],
						0 === a.length && delete o[r],
						this._removeInactiveBindingsForAction(t);
				},
				_removeInactiveBindingsForAction: function (t) {
					const e = t._propertyBindings;
					for (let t = 0, n = e.length; t !== n; ++t) {
						const n = e[t];
						0 == --n.referenceCount && this._removeInactiveBinding(n);
					}
				},
				_lendAction: function (t) {
					const e = this._actions,
						n = t._cacheIndex,
						i = this._nActiveActions++,
						r = e[i];
					(t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
				},
				_takeBackAction: function (t) {
					const e = this._actions,
						n = t._cacheIndex,
						i = --this._nActiveActions,
						r = e[i];
					(t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
				},
				_addInactiveBinding: function (t, e, n) {
					const i = this._bindingsByRootAndName,
						r = this._bindings;
					let o = i[e];
					void 0 === o && ((o = {}), (i[e] = o)),
						(o[n] = t),
						(t._cacheIndex = r.length),
						r.push(t);
				},
				_removeInactiveBinding: function (t) {
					const e = this._bindings,
						n = t.binding,
						i = n.rootNode.uuid,
						r = n.path,
						o = this._bindingsByRootAndName,
						s = o[i],
						a = e[e.length - 1],
						c = t._cacheIndex;
					(a._cacheIndex = c),
						(e[c] = a),
						e.pop(),
						delete s[r],
						0 === Object.keys(s).length && delete o[i];
				},
				_lendBinding: function (t) {
					const e = this._bindings,
						n = t._cacheIndex,
						i = this._nActiveBindings++,
						r = e[i];
					(t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
				},
				_takeBackBinding: function (t) {
					const e = this._bindings,
						n = t._cacheIndex,
						i = --this._nActiveBindings,
						r = e[i];
					(t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
				},
				_lendControlInterpolant: function () {
					const t = this._controlInterpolants,
						e = this._nActiveControlInterpolants++;
					let n = t[e];
					return (
						void 0 === n &&
							((n = new Xa(
								new Float32Array(2),
								new Float32Array(2),
								1,
								this._controlInterpolantsResultBuffer
							)),
							(n.__cacheIndex = e),
							(t[e] = n)),
						n
					);
				},
				_takeBackControlInterpolant: function (t) {
					const e = this._controlInterpolants,
						n = t.__cacheIndex,
						i = --this._nActiveControlInterpolants,
						r = e[i];
					(t.__cacheIndex = i), (e[i] = t), (r.__cacheIndex = n), (e[n] = r);
				},
				_controlInterpolantsResultBuffer: new Float32Array(1),
				clipAction: function (t, e, n) {
					const i = e || this._root,
						r = i.uuid;
					let o = "string" == typeof t ? ic.findByName(i, t) : t;
					const s = null !== o ? o.uuid : t;
					let a = this._actionsByClip[s],
						c = null;
					if (
						(void 0 === n && (n = null !== o ? o.blendMode : 2500),
						void 0 !== a)
					) {
						const t = a.actionByRoot[r];
						if (void 0 !== t && t.blendMode === n) return t;
						(c = a.knownActions[0]), null === o && (o = c._clip);
					}
					if (null === o) return null;
					const l = new Xl(this, o, e, n);
					return this._bindAction(l, c), this._addInactiveAction(l, s, r), l;
				},
				existingAction: function (t, e) {
					const n = e || this._root,
						i = n.uuid,
						r = "string" == typeof t ? ic.findByName(n, t) : t,
						o = r ? r.uuid : t,
						s = this._actionsByClip[o];
					return (void 0 !== s && s.actionByRoot[i]) || null;
				},
				stopAllAction: function () {
					const t = this._actions;
					for (let e = this._nActiveActions - 1; e >= 0; --e) t[e].stop();
					return this;
				},
				update: function (t) {
					t *= this.timeScale;
					const e = this._actions,
						n = this._nActiveActions,
						i = (this.time += t),
						r = Math.sign(t),
						o = (this._accuIndex ^= 1);
					for (let s = 0; s !== n; ++s) {
						e[s]._update(i, t, r, o);
					}
					const s = this._bindings,
						a = this._nActiveBindings;
					for (let t = 0; t !== a; ++t) s[t].apply(o);
					return this;
				},
				setTime: function (t) {
					this.time = 0;
					for (let t = 0; t < this._actions.length; t++)
						this._actions[t].time = 0;
					return this.update(t);
				},
				getRoot: function () {
					return this._root;
				},
				uncacheClip: function (t) {
					const e = this._actions,
						n = t.uuid,
						i = this._actionsByClip,
						r = i[n];
					if (void 0 !== r) {
						const t = r.knownActions;
						for (let n = 0, i = t.length; n !== i; ++n) {
							const i = t[n];
							this._deactivateAction(i);
							const r = i._cacheIndex,
								o = e[e.length - 1];
							(i._cacheIndex = null),
								(i._byClipCacheIndex = null),
								(o._cacheIndex = r),
								(e[r] = o),
								e.pop(),
								this._removeInactiveBindingsForAction(i);
						}
						delete i[n];
					}
				},
				uncacheRoot: function (t) {
					const e = t.uuid,
						n = this._actionsByClip;
					for (const t in n) {
						const i = n[t].actionByRoot[e];
						void 0 !== i &&
							(this._deactivateAction(i), this._removeInactiveAction(i));
					}
					const i = this._bindingsByRootAndName[e];
					if (void 0 !== i)
						for (const t in i) {
							const e = i[t];
							e.restoreOriginalState(), this._removeInactiveBinding(e);
						}
				},
				uncacheAction: function (t, e) {
					const n = this.existingAction(t, e);
					null !== n &&
						(this._deactivateAction(n), this._removeInactiveAction(n));
				},
			})),
			(Zl.prototype.clone = function () {
				return new Zl(
					void 0 === this.value.clone ? this.value : this.value.clone()
				);
			}),
			(Jl.prototype = Object.assign(Object.create(vo.prototype), {
				constructor: Jl,
				isInstancedInterleavedBuffer: !0,
				copy: function (t) {
					return (
						vo.prototype.copy.call(this, t),
						(this.meshPerAttribute = t.meshPerAttribute),
						this
					);
				},
				clone: function (t) {
					const e = vo.prototype.clone.call(this, t);
					return (e.meshPerAttribute = this.meshPerAttribute), e;
				},
				toJSON: function (t) {
					const e = vo.prototype.toJSON.call(this, t);
					return (
						(e.isInstancedInterleavedBuffer = !0),
						(e.meshPerAttribute = this.meshPerAttribute),
						e
					);
				},
			})),
			Object.assign(Kl.prototype, {
				set: function (t, e) {
					this.ray.set(t, e);
				},
				setFromCamera: function (t, e) {
					e && e.isPerspectiveCamera
						? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
						  this.ray.direction
								.set(t.x, t.y, 0.5)
								.unproject(e)
								.sub(this.ray.origin)
								.normalize(),
						  (this.camera = e))
						: e && e.isOrthographicCamera
						? (this.ray.origin
								.set(t.x, t.y, (e.near + e.far) / (e.near - e.far))
								.unproject(e),
						  this.ray.direction
								.set(0, 0, -1)
								.transformDirection(e.matrixWorld),
						  (this.camera = e))
						: console.error("THREE.Raycaster: Unsupported camera type.");
				},
				intersectObject: function (t, e, n) {
					const i = n || [];
					return $l(t, this, i, e), i.sort(Ql), i;
				},
				intersectObjects: function (t, e, n) {
					const i = n || [];
					if (!1 === Array.isArray(t))
						return (
							console.warn(
								"THREE.Raycaster.intersectObjects: objects is not an Array."
							),
							i
						);
					for (let n = 0, r = t.length; n < r; n++) $l(t[n], this, i, e);
					return i.sort(Ql), i;
				},
			});
		Object.assign(
			function (t, e, n) {
				return (
					(this.radius = void 0 !== t ? t : 1),
					(this.theta = void 0 !== e ? e : 0),
					(this.y = void 0 !== n ? n : 0),
					this
				);
			}.prototype,
			{
				set: function (t, e, n) {
					return (this.radius = t), (this.theta = e), (this.y = n), this;
				},
				clone: function () {
					return new this.constructor().copy(this);
				},
				copy: function (t) {
					return (
						(this.radius = t.radius),
						(this.theta = t.theta),
						(this.y = t.y),
						this
					);
				},
				setFromVector3: function (t) {
					return this.setFromCartesianCoords(t.x, t.y, t.z);
				},
				setFromCartesianCoords: function (t, e, n) {
					return (
						(this.radius = Math.sqrt(t * t + n * n)),
						(this.theta = Math.atan2(t, n)),
						(this.y = e),
						this
					);
				},
			}
		);
		const th = new ft();
		function eh(t, e) {
			(this.min = void 0 !== t ? t : new ft(1 / 0, 1 / 0)),
				(this.max = void 0 !== e ? e : new ft(-1 / 0, -1 / 0));
		}
		Object.assign(eh.prototype, {
			set: function (t, e) {
				return this.min.copy(t), this.max.copy(e), this;
			},
			setFromPoints: function (t) {
				this.makeEmpty();
				for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
				return this;
			},
			setFromCenterAndSize: function (t, e) {
				const n = th.copy(e).multiplyScalar(0.5);
				return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
			},
			clone: function () {
				return new this.constructor().copy(this);
			},
			copy: function (t) {
				return this.min.copy(t.min), this.max.copy(t.max), this;
			},
			makeEmpty: function () {
				return (
					(this.min.x = this.min.y = 1 / 0),
					(this.max.x = this.max.y = -1 / 0),
					this
				);
			},
			isEmpty: function () {
				return this.max.x < this.min.x || this.max.y < this.min.y;
			},
			getCenter: function (t) {
				return (
					void 0 === t &&
						(console.warn("THREE.Box2: .getCenter() target is now required"),
						(t = new ft())),
					this.isEmpty()
						? t.set(0, 0)
						: t.addVectors(this.min, this.max).multiplyScalar(0.5)
				);
			},
			getSize: function (t) {
				return (
					void 0 === t &&
						(console.warn("THREE.Box2: .getSize() target is now required"),
						(t = new ft())),
					this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
				);
			},
			expandByPoint: function (t) {
				return this.min.min(t), this.max.max(t), this;
			},
			expandByVector: function (t) {
				return this.min.sub(t), this.max.add(t), this;
			},
			expandByScalar: function (t) {
				return this.min.addScalar(-t), this.max.addScalar(t), this;
			},
			containsPoint: function (t) {
				return !(
					t.x < this.min.x ||
					t.x > this.max.x ||
					t.y < this.min.y ||
					t.y > this.max.y
				);
			},
			containsBox: function (t) {
				return (
					this.min.x <= t.min.x &&
					t.max.x <= this.max.x &&
					this.min.y <= t.min.y &&
					t.max.y <= this.max.y
				);
			},
			getParameter: function (t, e) {
				return (
					void 0 === e &&
						(console.warn("THREE.Box2: .getParameter() target is now required"),
						(e = new ft())),
					e.set(
						(t.x - this.min.x) / (this.max.x - this.min.x),
						(t.y - this.min.y) / (this.max.y - this.min.y)
					)
				);
			},
			intersectsBox: function (t) {
				return !(
					t.max.x < this.min.x ||
					t.min.x > this.max.x ||
					t.max.y < this.min.y ||
					t.min.y > this.max.y
				);
			},
			clampPoint: function (t, e) {
				return (
					void 0 === e &&
						(console.warn("THREE.Box2: .clampPoint() target is now required"),
						(e = new ft())),
					e.copy(t).clamp(this.min, this.max)
				);
			},
			distanceToPoint: function (t) {
				return th.copy(t).clamp(this.min, this.max).sub(t).length();
			},
			intersect: function (t) {
				return this.min.max(t.min), this.max.min(t.max), this;
			},
			union: function (t) {
				return this.min.min(t.min), this.max.max(t.max), this;
			},
			translate: function (t) {
				return this.min.add(t), this.max.add(t), this;
			},
			equals: function (t) {
				return t.min.equals(this.min) && t.max.equals(this.max);
			},
		});
		const nh = new Et(),
			ih = new Et();
		function rh(t, e) {
			(this.start = void 0 !== t ? t : new Et()),
				(this.end = void 0 !== e ? e : new Et());
		}
		function oh(t) {
			Qt.call(this),
				(this.material = t),
				(this.render = function () {}),
				(this.hasPositions = !1),
				(this.hasNormals = !1),
				(this.hasColors = !1),
				(this.hasUvs = !1),
				(this.positionArray = null),
				(this.normalArray = null),
				(this.colorArray = null),
				(this.uvArray = null),
				(this.count = 0);
		}
		Object.assign(rh.prototype, {
			set: function (t, e) {
				return this.start.copy(t), this.end.copy(e), this;
			},
			clone: function () {
				return new this.constructor().copy(this);
			},
			copy: function (t) {
				return this.start.copy(t.start), this.end.copy(t.end), this;
			},
			getCenter: function (t) {
				return (
					void 0 === t &&
						(console.warn("THREE.Line3: .getCenter() target is now required"),
						(t = new Et())),
					t.addVectors(this.start, this.end).multiplyScalar(0.5)
				);
			},
			delta: function (t) {
				return (
					void 0 === t &&
						(console.warn("THREE.Line3: .delta() target is now required"),
						(t = new Et())),
					t.subVectors(this.end, this.start)
				);
			},
			distanceSq: function () {
				return this.start.distanceToSquared(this.end);
			},
			distance: function () {
				return this.start.distanceTo(this.end);
			},
			at: function (t, e) {
				return (
					void 0 === e &&
						(console.warn("THREE.Line3: .at() target is now required"),
						(e = new Et())),
					this.delta(e).multiplyScalar(t).add(this.start)
				);
			},
			closestPointToPointParameter: function (t, e) {
				nh.subVectors(t, this.start), ih.subVectors(this.end, this.start);
				const n = ih.dot(ih);
				let i = ih.dot(nh) / n;
				return e && (i = pt.clamp(i, 0, 1)), i;
			},
			closestPointToPoint: function (t, e, n) {
				const i = this.closestPointToPointParameter(t, e);
				return (
					void 0 === n &&
						(console.warn(
							"THREE.Line3: .closestPointToPoint() target is now required"
						),
						(n = new Et())),
					this.delta(n).multiplyScalar(i).add(this.start)
				);
			},
			applyMatrix4: function (t) {
				return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
			},
			equals: function (t) {
				return t.start.equals(this.start) && t.end.equals(this.end);
			},
		}),
			(oh.prototype = Object.create(Qt.prototype)),
			(oh.prototype.constructor = oh),
			(oh.prototype.isImmediateRenderObject = !0);
		const sh = new Et();
		function ah(t, e) {
			Qt.call(this),
				(this.light = t),
				this.light.updateMatrixWorld(),
				(this.matrix = t.matrixWorld),
				(this.matrixAutoUpdate = !1),
				(this.color = e);
			const n = new xn(),
				i = [
					0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1,
					1, 0, 0, 0, 0, -1, 1,
				];
			for (let t = 0, e = 1, n = 32; t < n; t++, e++) {
				const r = (t / n) * Math.PI * 2,
					o = (e / n) * Math.PI * 2;
				i.push(Math.cos(r), Math.sin(r), 1, Math.cos(o), Math.sin(o), 1);
			}
			n.setAttribute("position", new cn(i, 3));
			const r = new Zo({ fog: !1, toneMapped: !1 });
			(this.cone = new rs(n, r)), this.add(this.cone), this.update();
		}
		(ah.prototype = Object.create(Qt.prototype)),
			(ah.prototype.constructor = ah),
			(ah.prototype.dispose = function () {
				this.cone.geometry.dispose(), this.cone.material.dispose();
			}),
			(ah.prototype.update = function () {
				this.light.updateMatrixWorld();
				const t = this.light.distance ? this.light.distance : 1e3,
					e = t * Math.tan(this.light.angle);
				this.cone.scale.set(e, e, t),
					sh.setFromMatrixPosition(this.light.target.matrixWorld),
					this.cone.lookAt(sh),
					void 0 !== this.color
						? this.cone.material.color.set(this.color)
						: this.cone.material.color.copy(this.light.color);
			});
		const ch = new Et(),
			lh = new Dt(),
			hh = new Dt();
		function uh(t) {
			const e = (function t(e) {
					const n = [];
					e && e.isBone && n.push(e);
					for (let i = 0; i < e.children.length; i++)
						n.push.apply(n, t(e.children[i]));
					return n;
				})(t),
				n = new xn(),
				i = [],
				r = [],
				o = new je(0, 0, 1),
				s = new je(0, 1, 0);
			for (let t = 0; t < e.length; t++) {
				const n = e[t];
				n.parent &&
					n.parent.isBone &&
					(i.push(0, 0, 0),
					i.push(0, 0, 0),
					r.push(o.r, o.g, o.b),
					r.push(s.r, s.g, s.b));
			}
			n.setAttribute("position", new cn(i, 3)),
				n.setAttribute("color", new cn(r, 3));
			const a = new Zo({
				vertexColors: !0,
				depthTest: !1,
				depthWrite: !1,
				toneMapped: !1,
				transparent: !0,
			});
			rs.call(this, n, a),
				(this.type = "SkeletonHelper"),
				(this.root = t),
				(this.bones = e),
				(this.matrix = t.matrixWorld),
				(this.matrixAutoUpdate = !1);
		}
		function dh(t, e, n) {
			(this.light = t), this.light.updateMatrixWorld(), (this.color = n);
			const i = new va(e, 4, 2),
				r = new Je({ wireframe: !0, fog: !1, toneMapped: !1 });
			Un.call(this, i, r),
				(this.type = "PointLightHelper"),
				(this.matrix = this.light.matrixWorld),
				(this.matrixAutoUpdate = !1),
				this.update();
		}
		(uh.prototype = Object.create(rs.prototype)),
			(uh.prototype.constructor = uh),
			(uh.prototype.isSkeletonHelper = !0),
			(uh.prototype.updateMatrixWorld = function (t) {
				const e = this.bones,
					n = this.geometry,
					i = n.getAttribute("position");
				hh.getInverse(this.root.matrixWorld);
				for (let t = 0, n = 0; t < e.length; t++) {
					const r = e[t];
					r.parent &&
						r.parent.isBone &&
						(lh.multiplyMatrices(hh, r.matrixWorld),
						ch.setFromMatrixPosition(lh),
						i.setXYZ(n, ch.x, ch.y, ch.z),
						lh.multiplyMatrices(hh, r.parent.matrixWorld),
						ch.setFromMatrixPosition(lh),
						i.setXYZ(n + 1, ch.x, ch.y, ch.z),
						(n += 2));
				}
				(n.getAttribute("position").needsUpdate = !0),
					Qt.prototype.updateMatrixWorld.call(this, t);
			}),
			(dh.prototype = Object.create(Un.prototype)),
			(dh.prototype.constructor = dh),
			(dh.prototype.dispose = function () {
				this.geometry.dispose(), this.material.dispose();
			}),
			(dh.prototype.update = function () {
				void 0 !== this.color
					? this.material.color.set(this.color)
					: this.material.color.copy(this.light.color);
			});
		const ph = new Et(),
			fh = new je(),
			mh = new je();
		function gh(t, e, n) {
			Qt.call(this),
				(this.light = t),
				this.light.updateMatrixWorld(),
				(this.matrix = t.matrixWorld),
				(this.matrixAutoUpdate = !1),
				(this.color = n);
			const i = new Ts(e);
			i.rotateY(0.5 * Math.PI),
				(this.material = new Je({ wireframe: !0, fog: !1, toneMapped: !1 })),
				void 0 === this.color && (this.material.vertexColors = !0);
			const r = i.getAttribute("position"),
				o = new Float32Array(3 * r.count);
			i.setAttribute("color", new $e(o, 3)),
				this.add(new Un(i, this.material)),
				this.update();
		}
		function vh(t, e, n, i) {
			(t = t || 10),
				(e = e || 10),
				(n = new je(void 0 !== n ? n : 4473924)),
				(i = new je(void 0 !== i ? i : 8947848));
			const r = e / 2,
				o = t / e,
				s = t / 2,
				a = [],
				c = [];
			for (let t = 0, l = 0, h = -s; t <= e; t++, h += o) {
				a.push(-s, 0, h, s, 0, h), a.push(h, 0, -s, h, 0, s);
				const e = t === r ? n : i;
				e.toArray(c, l),
					(l += 3),
					e.toArray(c, l),
					(l += 3),
					e.toArray(c, l),
					(l += 3),
					e.toArray(c, l),
					(l += 3);
			}
			const l = new xn();
			l.setAttribute("position", new cn(a, 3)),
				l.setAttribute("color", new cn(c, 3));
			const h = new Zo({ vertexColors: !0, toneMapped: !1 });
			rs.call(this, l, h), (this.type = "GridHelper");
		}
		function yh(t, e, n, i, r, o) {
			(t = t || 10),
				(e = e || 16),
				(n = n || 8),
				(i = i || 64),
				(r = new je(void 0 !== r ? r : 4473924)),
				(o = new je(void 0 !== o ? o : 8947848));
			const s = [],
				a = [];
			for (let n = 0; n <= e; n++) {
				const i = (n / e) * (2 * Math.PI),
					c = Math.sin(i) * t,
					l = Math.cos(i) * t;
				s.push(0, 0, 0), s.push(c, 0, l);
				const h = 1 & n ? r : o;
				a.push(h.r, h.g, h.b), a.push(h.r, h.g, h.b);
			}
			for (let e = 0; e <= n; e++) {
				const c = 1 & e ? r : o,
					l = t - (t / n) * e;
				for (let t = 0; t < i; t++) {
					let e = (t / i) * (2 * Math.PI),
						n = Math.sin(e) * l,
						r = Math.cos(e) * l;
					s.push(n, 0, r),
						a.push(c.r, c.g, c.b),
						(e = ((t + 1) / i) * (2 * Math.PI)),
						(n = Math.sin(e) * l),
						(r = Math.cos(e) * l),
						s.push(n, 0, r),
						a.push(c.r, c.g, c.b);
				}
			}
			const c = new xn();
			c.setAttribute("position", new cn(s, 3)),
				c.setAttribute("color", new cn(a, 3));
			const l = new Zo({ vertexColors: !0, toneMapped: !1 });
			rs.call(this, c, l), (this.type = "PolarGridHelper");
		}
		(gh.prototype = Object.create(Qt.prototype)),
			(gh.prototype.constructor = gh),
			(gh.prototype.dispose = function () {
				this.children[0].geometry.dispose(),
					this.children[0].material.dispose();
			}),
			(gh.prototype.update = function () {
				const t = this.children[0];
				if (void 0 !== this.color) this.material.color.set(this.color);
				else {
					const e = t.geometry.getAttribute("color");
					fh.copy(this.light.color), mh.copy(this.light.groundColor);
					for (let t = 0, n = e.count; t < n; t++) {
						const i = t < n / 2 ? fh : mh;
						e.setXYZ(t, i.r, i.g, i.b);
					}
					e.needsUpdate = !0;
				}
				t.lookAt(ph.setFromMatrixPosition(this.light.matrixWorld).negate());
			}),
			(vh.prototype = Object.create(rs.prototype)),
			(vh.prototype.constructor = vh),
			(yh.prototype = Object.create(rs.prototype)),
			(yh.prototype.constructor = yh);
		const xh = new Et(),
			bh = new Et(),
			wh = new Et();
		function _h(t, e, n) {
			Qt.call(this),
				(this.light = t),
				this.light.updateMatrixWorld(),
				(this.matrix = t.matrixWorld),
				(this.matrixAutoUpdate = !1),
				(this.color = n),
				void 0 === e && (e = 1);
			let i = new xn();
			i.setAttribute(
				"position",
				new cn([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3)
			);
			const r = new Zo({ fog: !1, toneMapped: !1 });
			(this.lightPlane = new es(i, r)),
				this.add(this.lightPlane),
				(i = new xn()),
				i.setAttribute("position", new cn([0, 0, 0, 0, 0, 1], 3)),
				(this.targetLine = new es(i, r)),
				this.add(this.targetLine),
				this.update();
		}
		(_h.prototype = Object.create(Qt.prototype)),
			(_h.prototype.constructor = _h),
			(_h.prototype.dispose = function () {
				this.lightPlane.geometry.dispose(),
					this.lightPlane.material.dispose(),
					this.targetLine.geometry.dispose(),
					this.targetLine.material.dispose();
			}),
			(_h.prototype.update = function () {
				xh.setFromMatrixPosition(this.light.matrixWorld),
					bh.setFromMatrixPosition(this.light.target.matrixWorld),
					wh.subVectors(bh, xh),
					this.lightPlane.lookAt(bh),
					void 0 !== this.color
						? (this.lightPlane.material.color.set(this.color),
						  this.targetLine.material.color.set(this.color))
						: (this.lightPlane.material.color.copy(this.light.color),
						  this.targetLine.material.color.copy(this.light.color)),
					this.targetLine.lookAt(bh),
					(this.targetLine.scale.z = wh.length());
			});
		const Mh = new Et(),
			Sh = new Kn();
		function Th(t) {
			const e = new xn(),
				n = new Zo({ color: 16777215, vertexColors: !0, toneMapped: !1 }),
				i = [],
				r = [],
				o = {},
				s = new je(16755200),
				a = new je(16711680),
				c = new je(43775),
				l = new je(16777215),
				h = new je(3355443);
			function u(t, e, n) {
				d(t, n), d(e, n);
			}
			function d(t, e) {
				i.push(0, 0, 0),
					r.push(e.r, e.g, e.b),
					void 0 === o[t] && (o[t] = []),
					o[t].push(i.length / 3 - 1);
			}
			u("n1", "n2", s),
				u("n2", "n4", s),
				u("n4", "n3", s),
				u("n3", "n1", s),
				u("f1", "f2", s),
				u("f2", "f4", s),
				u("f4", "f3", s),
				u("f3", "f1", s),
				u("n1", "f1", s),
				u("n2", "f2", s),
				u("n3", "f3", s),
				u("n4", "f4", s),
				u("p", "n1", a),
				u("p", "n2", a),
				u("p", "n3", a),
				u("p", "n4", a),
				u("u1", "u2", c),
				u("u2", "u3", c),
				u("u3", "u1", c),
				u("c", "t", l),
				u("p", "c", h),
				u("cn1", "cn2", h),
				u("cn3", "cn4", h),
				u("cf1", "cf2", h),
				u("cf3", "cf4", h),
				e.setAttribute("position", new cn(i, 3)),
				e.setAttribute("color", new cn(r, 3)),
				rs.call(this, e, n),
				(this.type = "CameraHelper"),
				(this.camera = t),
				this.camera.updateProjectionMatrix &&
					this.camera.updateProjectionMatrix(),
				(this.matrix = t.matrixWorld),
				(this.matrixAutoUpdate = !1),
				(this.pointMap = o),
				this.update();
		}
		function Eh(t, e, n, i, r, o, s) {
			Mh.set(r, o, s).unproject(i);
			const a = e[t];
			if (void 0 !== a) {
				const t = n.getAttribute("position");
				for (let e = 0, n = a.length; e < n; e++)
					t.setXYZ(a[e], Mh.x, Mh.y, Mh.z);
			}
		}
		(Th.prototype = Object.create(rs.prototype)),
			(Th.prototype.constructor = Th),
			(Th.prototype.update = function () {
				const t = this.geometry,
					e = this.pointMap;
				Sh.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),
					Eh("c", e, t, Sh, 0, 0, -1),
					Eh("t", e, t, Sh, 0, 0, 1),
					Eh("n1", e, t, Sh, -1, -1, -1),
					Eh("n2", e, t, Sh, 1, -1, -1),
					Eh("n3", e, t, Sh, -1, 1, -1),
					Eh("n4", e, t, Sh, 1, 1, -1),
					Eh("f1", e, t, Sh, -1, -1, 1),
					Eh("f2", e, t, Sh, 1, -1, 1),
					Eh("f3", e, t, Sh, -1, 1, 1),
					Eh("f4", e, t, Sh, 1, 1, 1),
					Eh("u1", e, t, Sh, 0.7, 1.1, -1),
					Eh("u2", e, t, Sh, -0.7, 1.1, -1),
					Eh("u3", e, t, Sh, 0, 2, -1),
					Eh("cf1", e, t, Sh, -1, 0, 1),
					Eh("cf2", e, t, Sh, 1, 0, 1),
					Eh("cf3", e, t, Sh, 0, -1, 1),
					Eh("cf4", e, t, Sh, 0, 1, 1),
					Eh("cn1", e, t, Sh, -1, 0, -1),
					Eh("cn2", e, t, Sh, 1, 0, -1),
					Eh("cn3", e, t, Sh, 0, -1, -1),
					Eh("cn4", e, t, Sh, 0, 1, -1),
					(t.getAttribute("position").needsUpdate = !0);
			});
		const Ah = new pe();
		function Lh(t, e) {
			(this.object = t), void 0 === e && (e = 16776960);
			const n = new Uint16Array([
					0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3,
					7,
				]),
				i = new Float32Array(24),
				r = new xn();
			r.setIndex(new $e(n, 1)),
				r.setAttribute("position", new $e(i, 3)),
				rs.call(this, r, new Zo({ color: e, toneMapped: !1 })),
				(this.type = "BoxHelper"),
				(this.matrixAutoUpdate = !1),
				this.update();
		}
		function Rh(t, e) {
			(this.type = "Box3Helper"),
				(this.box = t),
				void 0 === e && (e = 16776960);
			const n = new Uint16Array([
					0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3,
					7,
				]),
				i = new xn();
			i.setIndex(new $e(n, 1)),
				i.setAttribute(
					"position",
					new cn(
						[
							1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1,
							-1, -1, 1, -1, -1,
						],
						3
					)
				),
				rs.call(this, i, new Zo({ color: e, toneMapped: !1 })),
				(this.type = "Box3Helper"),
				this.geometry.computeBoundingSphere();
		}
		function Ph(t, e, n) {
			(this.plane = t), (this.size = void 0 === e ? 1 : e);
			const i = void 0 !== n ? n : 16776960,
				r = new xn();
			r.setAttribute(
				"position",
				new cn(
					[
						1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1,
						1, 1, 1, 1, 0, 0, 1, 0, 0, 0,
					],
					3
				)
			),
				r.computeBoundingSphere(),
				es.call(this, r, new Zo({ color: i, toneMapped: !1 })),
				(this.type = "PlaneHelper");
			const o = new xn();
			o.setAttribute(
				"position",
				new cn([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)
			),
				o.computeBoundingSphere(),
				this.add(
					new Un(
						o,
						new Je({
							color: i,
							opacity: 0.2,
							transparent: !0,
							depthWrite: !1,
							toneMapped: !1,
						})
					)
				);
		}
		(Lh.prototype = Object.create(rs.prototype)),
			(Lh.prototype.constructor = Lh),
			(Lh.prototype.update = function (t) {
				if (
					(void 0 !== t &&
						console.warn("THREE.BoxHelper: .update() has no longer arguments."),
					void 0 !== this.object && Ah.setFromObject(this.object),
					Ah.isEmpty())
				)
					return;
				const e = Ah.min,
					n = Ah.max,
					i = this.geometry.attributes.position,
					r = i.array;
				(r[0] = n.x),
					(r[1] = n.y),
					(r[2] = n.z),
					(r[3] = e.x),
					(r[4] = n.y),
					(r[5] = n.z),
					(r[6] = e.x),
					(r[7] = e.y),
					(r[8] = n.z),
					(r[9] = n.x),
					(r[10] = e.y),
					(r[11] = n.z),
					(r[12] = n.x),
					(r[13] = n.y),
					(r[14] = e.z),
					(r[15] = e.x),
					(r[16] = n.y),
					(r[17] = e.z),
					(r[18] = e.x),
					(r[19] = e.y),
					(r[20] = e.z),
					(r[21] = n.x),
					(r[22] = e.y),
					(r[23] = e.z),
					(i.needsUpdate = !0),
					this.geometry.computeBoundingSphere();
			}),
			(Lh.prototype.setFromObject = function (t) {
				return (this.object = t), this.update(), this;
			}),
			(Lh.prototype.copy = function (t) {
				return rs.prototype.copy.call(this, t), (this.object = t.object), this;
			}),
			(Rh.prototype = Object.create(rs.prototype)),
			(Rh.prototype.constructor = Rh),
			(Rh.prototype.updateMatrixWorld = function (t) {
				const e = this.box;
				e.isEmpty() ||
					(e.getCenter(this.position),
					e.getSize(this.scale),
					this.scale.multiplyScalar(0.5),
					Qt.prototype.updateMatrixWorld.call(this, t));
			}),
			(Ph.prototype = Object.create(es.prototype)),
			(Ph.prototype.constructor = Ph),
			(Ph.prototype.updateMatrixWorld = function (t) {
				let e = -this.plane.constant;
				Math.abs(e) < 1e-8 && (e = 1e-8),
					this.scale.set(0.5 * this.size, 0.5 * this.size, e),
					(this.children[0].material.side = e < 0 ? 1 : 0),
					this.lookAt(this.plane.normal),
					Qt.prototype.updateMatrixWorld.call(this, t);
			});
		const Ch = new Et();
		let Ih, Oh;
		function Dh(t, e, n, i, r, o) {
			Qt.call(this),
				(this.type = "ArrowHelper"),
				void 0 === t && (t = new Et(0, 0, 1)),
				void 0 === e && (e = new Et(0, 0, 0)),
				void 0 === n && (n = 1),
				void 0 === i && (i = 16776960),
				void 0 === r && (r = 0.2 * n),
				void 0 === o && (o = 0.2 * r),
				void 0 === Ih &&
					((Ih = new xn()),
					Ih.setAttribute("position", new cn([0, 0, 0, 0, 1, 0], 3)),
					(Oh = new Aa(0, 0.5, 1, 5, 1)),
					Oh.translate(0, -0.5, 0)),
				this.position.copy(e),
				(this.line = new es(Ih, new Zo({ color: i, toneMapped: !1 }))),
				(this.line.matrixAutoUpdate = !1),
				this.add(this.line),
				(this.cone = new Un(Oh, new Je({ color: i, toneMapped: !1 }))),
				(this.cone.matrixAutoUpdate = !1),
				this.add(this.cone),
				this.setDirection(t),
				this.setLength(n, r, o);
		}
		function Nh(t) {
			const e = [
					0,
					0,
					0,
					(t = t || 1),
					0,
					0,
					0,
					0,
					0,
					0,
					t,
					0,
					0,
					0,
					0,
					0,
					0,
					t,
				],
				n = new xn();
			n.setAttribute("position", new cn(e, 3)),
				n.setAttribute(
					"color",
					new cn(
						[1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
						3
					)
				);
			const i = new Zo({ vertexColors: !0, toneMapped: !1 });
			rs.call(this, n, i), (this.type = "AxesHelper");
		}
		(Dh.prototype = Object.create(Qt.prototype)),
			(Dh.prototype.constructor = Dh),
			(Dh.prototype.setDirection = function (t) {
				if (t.y > 0.99999) this.quaternion.set(0, 0, 0, 1);
				else if (t.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
				else {
					Ch.set(t.z, 0, -t.x).normalize();
					const e = Math.acos(t.y);
					this.quaternion.setFromAxisAngle(Ch, e);
				}
			}),
			(Dh.prototype.setLength = function (t, e, n) {
				void 0 === e && (e = 0.2 * t),
					void 0 === n && (n = 0.2 * e),
					this.line.scale.set(1, Math.max(1e-4, t - e), 1),
					this.line.updateMatrix(),
					this.cone.scale.set(n, e, n),
					(this.cone.position.y = t),
					this.cone.updateMatrix();
			}),
			(Dh.prototype.setColor = function (t) {
				this.line.material.color.set(t), this.cone.material.color.set(t);
			}),
			(Dh.prototype.copy = function (t) {
				return (
					Qt.prototype.copy.call(this, t, !1),
					this.line.copy(t.line),
					this.cone.copy(t.cone),
					this
				);
			}),
			(Nh.prototype = Object.create(rs.prototype)),
			(Nh.prototype.constructor = Nh);
		const zh = Math.pow(2, 8),
			Uh = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
			Hh = 5 + Uh.length,
			Bh = { 3e3: 0, 3001: 1, 3002: 2, 3004: 3, 3005: 4, 3006: 5, 3007: 6 },
			Fh = new Xc(),
			{
				_lodPlanes: kh,
				_sizeLods: Gh,
				_sigmas: jh,
			} = (function () {
				const t = [],
					e = [],
					n = [];
				let i = 8;
				for (let r = 0; r < Hh; r++) {
					const o = Math.pow(2, i);
					e.push(o);
					let s = 1 / o;
					r > 4 ? (s = Uh[r - 8 + 4 - 1]) : 0 == r && (s = 0), n.push(s);
					const a = 1 / (o - 1),
						c = -a / 2,
						l = 1 + a / 2,
						h = [c, c, l, c, l, l, c, c, l, l, c, l],
						u = 6,
						d = 6,
						p = 3,
						f = 2,
						m = 1,
						g = new Float32Array(p * d * u),
						v = new Float32Array(f * d * u),
						y = new Float32Array(m * d * u);
					for (let t = 0; t < u; t++) {
						const e = ((t % 3) * 2) / 3 - 1,
							n = t > 2 ? 0 : -1,
							i = [
								e,
								n,
								0,
								e + 2 / 3,
								n,
								0,
								e + 2 / 3,
								n + 1,
								0,
								e,
								n,
								0,
								e + 2 / 3,
								n + 1,
								0,
								e,
								n + 1,
								0,
							];
						g.set(i, p * d * t), v.set(h, f * d * t);
						const r = [t, t, t, t, t, t];
						y.set(r, m * d * t);
					}
					const x = new xn();
					x.setAttribute("position", new $e(g, p)),
						x.setAttribute("uv", new $e(v, f)),
						x.setAttribute("faceIndex", new $e(y, m)),
						t.push(x),
						i > 4 && i--;
				}
				return { _lodPlanes: t, _sizeLods: e, _sigmas: n };
			})();
		let Vh = null;
		const Wh = (1 + Math.sqrt(5)) / 2,
			qh = 1 / Wh,
			Xh = [
				new Et(1, 1, 1),
				new Et(-1, 1, 1),
				new Et(1, 1, -1),
				new Et(-1, 1, -1),
				new Et(0, Wh, qh),
				new Et(0, Wh, -qh),
				new Et(qh, 0, Wh),
				new Et(-qh, 0, Wh),
				new Et(Wh, qh, 0),
				new Et(-Wh, qh, 0),
			];
		function Yh(t) {
			(this._renderer = t),
				(this._pingPongRenderTarget = null),
				(this._blurMaterial = (function (t) {
					const e = new Float32Array(t),
						n = new Et(0, 1, 0);
					return new Da({
						name: "SphericalGaussianBlur",
						defines: { n: t },
						uniforms: {
							envMap: { value: null },
							samples: { value: 1 },
							weights: { value: e },
							latitudinal: { value: !1 },
							dTheta: { value: 0 },
							mipInt: { value: 0 },
							poleAxis: { value: n },
							inputEncoding: { value: Bh[3e3] },
							outputEncoding: { value: Bh[3e3] },
						},
						vertexShader: tu(),
						fragmentShader: `\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t${eu()}\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,
						blending: 0,
						depthTest: !1,
						depthWrite: !1,
					});
				})(20)),
				(this._equirectShader = null),
				(this._cubemapShader = null),
				this._compileMaterial(this._blurMaterial);
		}
		function Zh(t) {
			return (
				void 0 !== t &&
				1009 === t.type &&
				(3e3 === t.encoding || 3001 === t.encoding || 3007 === t.encoding)
			);
		}
		function Jh(t) {
			const e = new wt(3 * zh, 3 * zh, t);
			return (
				(e.texture.mapping = 306),
				(e.texture.name = "PMREM.cubeUv"),
				(e.scissorTest = !0),
				e
			);
		}
		function Kh(t, e, n, i, r) {
			t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
		}
		function Qh() {
			return new Da({
				name: "EquirectangularToCubeUV",
				uniforms: {
					envMap: { value: null },
					texelSize: { value: new ft(1, 1) },
					inputEncoding: { value: Bh[3e3] },
					outputEncoding: { value: Bh[3e3] },
				},
				vertexShader: tu(),
				fragmentShader: `\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t${eu()}\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv -= f * texelSize;\n\t\t\t\tvec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x += texelSize.x;\n\t\t\t\tvec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm, f.y );\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,
				blending: 0,
				depthTest: !1,
				depthWrite: !1,
			});
		}
		function $h() {
			return new Da({
				name: "CubemapToCubeUV",
				uniforms: {
					envMap: { value: null },
					inputEncoding: { value: Bh[3e3] },
					outputEncoding: { value: Bh[3e3] },
				},
				vertexShader: tu(),
				fragmentShader: `\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\t${eu()}\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,
				blending: 0,
				depthTest: !1,
				depthWrite: !1,
			});
		}
		function tu() {
			return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t";
		}
		function eu() {
			return "\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t";
		}
		Yh.prototype = {
			constructor: Yh,
			fromScene: function (t, e = 0, n = 0.1, i = 100) {
				Vh = this._renderer.getRenderTarget();
				const r = this._allocateTargets();
				return (
					this._sceneToCubeUV(t, n, i, r),
					e > 0 && this._blur(r, 0, 0, e),
					this._applyPMREM(r),
					this._cleanup(r),
					r
				);
			},
			fromEquirectangular: function (t) {
				return this._fromTexture(t);
			},
			fromCubemap: function (t) {
				return this._fromTexture(t);
			},
			compileCubemapShader: function () {
				null === this._cubemapShader &&
					((this._cubemapShader = $h()),
					this._compileMaterial(this._cubemapShader));
			},
			compileEquirectangularShader: function () {
				null === this._equirectShader &&
					((this._equirectShader = Qh()),
					this._compileMaterial(this._equirectShader));
			},
			dispose: function () {
				this._blurMaterial.dispose(),
					null !== this._cubemapShader && this._cubemapShader.dispose(),
					null !== this._equirectShader && this._equirectShader.dispose();
				for (let t = 0; t < kh.length; t++) kh[t].dispose();
			},
			_cleanup: function (t) {
				this._pingPongRenderTarget.dispose(),
					this._renderer.setRenderTarget(Vh),
					(t.scissorTest = !1),
					Kh(t, 0, 0, t.width, t.height);
			},
			_fromTexture: function (t) {
				Vh = this._renderer.getRenderTarget();
				const e = this._allocateTargets(t);
				return (
					this._textureToCubeUV(t, e), this._applyPMREM(e), this._cleanup(e), e
				);
			},
			_allocateTargets: function (t) {
				const e = {
						magFilter: 1003,
						minFilter: 1003,
						generateMipmaps: !1,
						type: 1009,
						format: 1023,
						encoding: Zh(t) ? t.encoding : 3002,
						depthBuffer: !1,
						stencilBuffer: !1,
					},
					n = Jh(e);
				return (n.depthBuffer = !t), (this._pingPongRenderTarget = Jh(e)), n;
			},
			_compileMaterial: function (t) {
				const e = new Un(kh[0], t);
				this._renderer.compile(e, Fh);
			},
			_sceneToCubeUV: function (t, e, n, i) {
				const r = new Qn(90, 1, e, n),
					o = [1, -1, 1, 1, 1, 1],
					s = [1, 1, 1, -1, -1, -1],
					a = this._renderer,
					c = a.outputEncoding,
					l = a.toneMapping,
					h = a.getClearColor(),
					u = a.getClearAlpha();
				(a.toneMapping = 0), (a.outputEncoding = 3e3);
				let d = t.background;
				if (d && d.isColor) {
					d.convertSRGBToLinear();
					const e = Math.max(d.r, d.g, d.b),
						n = Math.min(Math.max(Math.ceil(Math.log2(e)), -128), 127);
					d = d.multiplyScalar(Math.pow(2, -n));
					const i = (n + 128) / 255;
					a.setClearColor(d, i), (t.background = null);
				}
				for (let e = 0; e < 6; e++) {
					const n = e % 3;
					0 == n
						? (r.up.set(0, o[e], 0), r.lookAt(s[e], 0, 0))
						: 1 == n
						? (r.up.set(0, 0, o[e]), r.lookAt(0, s[e], 0))
						: (r.up.set(0, o[e], 0), r.lookAt(0, 0, s[e])),
						Kh(i, n * zh, e > 2 ? zh : 0, zh, zh),
						a.setRenderTarget(i),
						a.render(t, r);
				}
				(a.toneMapping = l), (a.outputEncoding = c), a.setClearColor(h, u);
			},
			_textureToCubeUV: function (t, e) {
				const n = this._renderer;
				t.isCubeTexture
					? null == this._cubemapShader && (this._cubemapShader = $h())
					: null == this._equirectShader && (this._equirectShader = Qh());
				const i = t.isCubeTexture ? this._cubemapShader : this._equirectShader,
					r = new Un(kh[0], i),
					o = i.uniforms;
				(o.envMap.value = t),
					t.isCubeTexture ||
						o.texelSize.value.set(1 / t.image.width, 1 / t.image.height),
					(o.inputEncoding.value = Bh[t.encoding]),
					(o.outputEncoding.value = Bh[e.texture.encoding]),
					Kh(e, 0, 0, 3 * zh, 2 * zh),
					n.setRenderTarget(e),
					n.render(r, Fh);
			},
			_applyPMREM: function (t) {
				const e = this._renderer,
					n = e.autoClear;
				e.autoClear = !1;
				for (let e = 1; e < Hh; e++) {
					const n = Math.sqrt(jh[e] * jh[e] - jh[e - 1] * jh[e - 1]),
						i = Xh[(e - 1) % Xh.length];
					this._blur(t, e - 1, e, n, i);
				}
				e.autoClear = n;
			},
			_blur: function (t, e, n, i, r) {
				const o = this._pingPongRenderTarget;
				this._halfBlur(t, o, e, n, i, "latitudinal", r),
					this._halfBlur(o, t, n, n, i, "longitudinal", r);
			},
			_halfBlur: function (t, e, n, i, r, o, s) {
				const a = this._renderer,
					c = this._blurMaterial;
				"latitudinal" !== o &&
					"longitudinal" !== o &&
					console.error(
						"blur direction must be either latitudinal or longitudinal!"
					);
				const l = new Un(kh[i], c),
					h = c.uniforms,
					u = Gh[n] - 1,
					d = isFinite(r) ? Math.PI / (2 * u) : (2 * Math.PI) / 39,
					p = r / d,
					f = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
				f > 20 &&
					console.warn(
						`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`
					);
				const m = [];
				let g = 0;
				for (let t = 0; t < 20; ++t) {
					const e = t / p,
						n = Math.exp((-e * e) / 2);
					m.push(n), 0 == t ? (g += n) : t < f && (g += 2 * n);
				}
				for (let t = 0; t < m.length; t++) m[t] = m[t] / g;
				(h.envMap.value = t.texture),
					(h.samples.value = f),
					(h.weights.value = m),
					(h.latitudinal.value = "latitudinal" === o),
					s && (h.poleAxis.value = s),
					(h.dTheta.value = d),
					(h.mipInt.value = 8 - n),
					(h.inputEncoding.value = Bh[t.texture.encoding]),
					(h.outputEncoding.value = Bh[t.texture.encoding]);
				const v = Gh[i];
				Kh(
					e,
					3 * Math.max(0, zh - 2 * v),
					(0 === i ? 0 : 2 * zh) + 2 * v * (i > 4 ? i - 8 + 4 : 0),
					3 * v,
					2 * v
				),
					a.setRenderTarget(e),
					a.render(l, Fh);
			},
		};
		function nu(t) {
			console.warn(
				"THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."
			),
				Tc.call(this, t),
				(this.type = "catmullrom");
		}
		(vc.create = function (t, e) {
			return (
				console.log("THREE.Curve.create() has been deprecated"),
				(t.prototype = Object.create(vc.prototype)),
				(t.prototype.constructor = t),
				(t.prototype.getPoint = e),
				t
			);
		}),
			Object.assign(Uc.prototype, {
				createPointsGeometry: function (t) {
					console.warn(
						"THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."
					);
					const e = this.getPoints(t);
					return this.createGeometry(e);
				},
				createSpacedPointsGeometry: function (t) {
					console.warn(
						"THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."
					);
					const e = this.getSpacedPoints(t);
					return this.createGeometry(e);
				},
				createGeometry: function (t) {
					console.warn(
						"THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."
					);
					const e = new Vn();
					for (let n = 0, i = t.length; n < i; n++) {
						const i = t[n];
						e.vertices.push(new Et(i.x, i.y, i.z || 0));
					}
					return e;
				},
			}),
			Object.assign(Hc.prototype, {
				fromPoints: function (t) {
					return (
						console.warn(
							"THREE.Path: .fromPoints() has been renamed to .setFromPoints()."
						),
						this.setFromPoints(t)
					);
				},
			}),
			Object.create(Tc.prototype),
			Object.create(Tc.prototype),
			(nu.prototype = Object.create(Tc.prototype)),
			Object.assign(nu.prototype, {
				initFromArray: function () {
					console.error("THREE.Spline: .initFromArray() has been removed.");
				},
				getControlPointsArray: function () {
					console.error(
						"THREE.Spline: .getControlPointsArray() has been removed."
					);
				},
				reparametrizeByArcLength: function () {
					console.error(
						"THREE.Spline: .reparametrizeByArcLength() has been removed."
					);
				},
			}),
			(vh.prototype.setColors = function () {
				console.error(
					"THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead."
				);
			}),
			(uh.prototype.update = function () {
				console.error(
					"THREE.SkeletonHelper: update() no longer needs to be called."
				);
			}),
			Object.assign(cc.prototype, {
				extractUrlBase: function (t) {
					return (
						console.warn(
							"THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."
						),
						nl(t)
					);
				},
			}),
			(cc.Handlers = {
				add: function () {
					console.error(
						"THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead."
					);
				},
				get: function () {
					console.error(
						"THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead."
					);
				},
			}),
			Object.assign(al.prototype, {
				setTexturePath: function (t) {
					return (
						console.warn(
							"THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."
						),
						this.setResourcePath(t)
					);
				},
			}),
			Object.assign(eh.prototype, {
				center: function (t) {
					return (
						console.warn(
							"THREE.Box2: .center() has been renamed to .getCenter()."
						),
						this.getCenter(t)
					);
				},
				empty: function () {
					return (
						console.warn(
							"THREE.Box2: .empty() has been renamed to .isEmpty()."
						),
						this.isEmpty()
					);
				},
				isIntersectionBox: function (t) {
					return (
						console.warn(
							"THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."
						),
						this.intersectsBox(t)
					);
				},
				size: function (t) {
					return (
						console.warn("THREE.Box2: .size() has been renamed to .getSize()."),
						this.getSize(t)
					);
				},
			}),
			Object.assign(pe.prototype, {
				center: function (t) {
					return (
						console.warn(
							"THREE.Box3: .center() has been renamed to .getCenter()."
						),
						this.getCenter(t)
					);
				},
				empty: function () {
					return (
						console.warn(
							"THREE.Box3: .empty() has been renamed to .isEmpty()."
						),
						this.isEmpty()
					);
				},
				isIntersectionBox: function (t) {
					return (
						console.warn(
							"THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."
						),
						this.intersectsBox(t)
					);
				},
				isIntersectionSphere: function (t) {
					return (
						console.warn(
							"THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."
						),
						this.intersectsSphere(t)
					);
				},
				size: function (t) {
					return (
						console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
						this.getSize(t)
					);
				},
			}),
			Object.assign(ge.prototype, {
				empty: function () {
					return (
						console.warn(
							"THREE.Sphere: .empty() has been renamed to .isEmpty()."
						),
						this.isEmpty()
					);
				},
			}),
			(ri.prototype.setFromMatrix = function (t) {
				return (
					console.warn(
						"THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."
					),
					this.setFromProjectionMatrix(t)
				);
			}),
			(rh.prototype.center = function (t) {
				return (
					console.warn(
						"THREE.Line3: .center() has been renamed to .getCenter()."
					),
					this.getCenter(t)
				);
			}),
			Object.assign(pt, {
				random16: function () {
					return (
						console.warn(
							"THREE.Math: .random16() has been deprecated. Use Math.random() instead."
						),
						Math.random()
					);
				},
				nearestPowerOfTwo: function (t) {
					return (
						console.warn(
							"THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."
						),
						pt.floorPowerOfTwo(t)
					);
				},
				nextPowerOfTwo: function (t) {
					return (
						console.warn(
							"THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."
						),
						pt.ceilPowerOfTwo(t)
					);
				},
			}),
			Object.assign(mt.prototype, {
				flattenToArrayOffset: function (t, e) {
					return (
						console.warn(
							"THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
						),
						this.toArray(t, e)
					);
				},
				multiplyVector3: function (t) {
					return (
						console.warn(
							"THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."
						),
						t.applyMatrix3(this)
					);
				},
				multiplyVector3Array: function () {
					console.error(
						"THREE.Matrix3: .multiplyVector3Array() has been removed."
					);
				},
				applyToBufferAttribute: function (t) {
					return (
						console.warn(
							"THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."
						),
						t.applyMatrix3(this)
					);
				},
				applyToVector3Array: function () {
					console.error(
						"THREE.Matrix3: .applyToVector3Array() has been removed."
					);
				},
			}),
			Object.assign(Dt.prototype, {
				extractPosition: function (t) {
					return (
						console.warn(
							"THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."
						),
						this.copyPosition(t)
					);
				},
				flattenToArrayOffset: function (t, e) {
					return (
						console.warn(
							"THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
						),
						this.toArray(t, e)
					);
				},
				getPosition: function () {
					return (
						console.warn(
							"THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."
						),
						new Et().setFromMatrixColumn(this, 3)
					);
				},
				setRotationFromQuaternion: function (t) {
					return (
						console.warn(
							"THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."
						),
						this.makeRotationFromQuaternion(t)
					);
				},
				multiplyToArray: function () {
					console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
				},
				multiplyVector3: function (t) {
					return (
						console.warn(
							"THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."
						),
						t.applyMatrix4(this)
					);
				},
				multiplyVector4: function (t) {
					return (
						console.warn(
							"THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."
						),
						t.applyMatrix4(this)
					);
				},
				multiplyVector3Array: function () {
					console.error(
						"THREE.Matrix4: .multiplyVector3Array() has been removed."
					);
				},
				rotateAxis: function (t) {
					console.warn(
						"THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."
					),
						t.transformDirection(this);
				},
				crossVector: function (t) {
					return (
						console.warn(
							"THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."
						),
						t.applyMatrix4(this)
					);
				},
				translate: function () {
					console.error("THREE.Matrix4: .translate() has been removed.");
				},
				rotateX: function () {
					console.error("THREE.Matrix4: .rotateX() has been removed.");
				},
				rotateY: function () {
					console.error("THREE.Matrix4: .rotateY() has been removed.");
				},
				rotateZ: function () {
					console.error("THREE.Matrix4: .rotateZ() has been removed.");
				},
				rotateByAxis: function () {
					console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
				},
				applyToBufferAttribute: function (t) {
					return (
						console.warn(
							"THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."
						),
						t.applyMatrix4(this)
					);
				},
				applyToVector3Array: function () {
					console.error(
						"THREE.Matrix4: .applyToVector3Array() has been removed."
					);
				},
				makeFrustum: function (t, e, n, i, r, o) {
					return (
						console.warn(
							"THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."
						),
						this.makePerspective(t, e, i, n, r, o)
					);
				},
			}),
			(Le.prototype.isIntersectionLine = function (t) {
				return (
					console.warn(
						"THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."
					),
					this.intersectsLine(t)
				);
			}),
			(Mt.prototype.multiplyVector3 = function (t) {
				return (
					console.warn(
						"THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."
					),
					t.applyQuaternion(this)
				);
			}),
			Object.assign(Se.prototype, {
				isIntersectionBox: function (t) {
					return (
						console.warn(
							"THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."
						),
						this.intersectsBox(t)
					);
				},
				isIntersectionPlane: function (t) {
					return (
						console.warn(
							"THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."
						),
						this.intersectsPlane(t)
					);
				},
				isIntersectionSphere: function (t) {
					return (
						console.warn(
							"THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."
						),
						this.intersectsSphere(t)
					);
				},
			}),
			Object.assign(Be.prototype, {
				area: function () {
					return (
						console.warn(
							"THREE.Triangle: .area() has been renamed to .getArea()."
						),
						this.getArea()
					);
				},
				barycoordFromPoint: function (t, e) {
					return (
						console.warn(
							"THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
						),
						this.getBarycoord(t, e)
					);
				},
				midpoint: function (t) {
					return (
						console.warn(
							"THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."
						),
						this.getMidpoint(t)
					);
				},
				normal: function (t) {
					return (
						console.warn(
							"THREE.Triangle: .normal() has been renamed to .getNormal()."
						),
						this.getNormal(t)
					);
				},
				plane: function (t) {
					return (
						console.warn(
							"THREE.Triangle: .plane() has been renamed to .getPlane()."
						),
						this.getPlane(t)
					);
				},
			}),
			Object.assign(Be, {
				barycoordFromPoint: function (t, e, n, i, r) {
					return (
						console.warn(
							"THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
						),
						Be.getBarycoord(t, e, n, i, r)
					);
				},
				normal: function (t, e, n, i) {
					return (
						console.warn(
							"THREE.Triangle: .normal() has been renamed to .getNormal()."
						),
						Be.getNormal(t, e, n, i)
					);
				},
			}),
			Object.assign(Bc.prototype, {
				extractAllPoints: function (t) {
					return (
						console.warn(
							"THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."
						),
						this.extractPoints(t)
					);
				},
				extrude: function (t) {
					return (
						console.warn(
							"THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."
						),
						new ha(this, t)
					);
				},
				makeGeometry: function (t) {
					return (
						console.warn(
							"THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."
						),
						new _a(this, t)
					);
				},
			}),
			Object.assign(ft.prototype, {
				fromAttribute: function (t, e, n) {
					return (
						console.warn(
							"THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."
						),
						this.fromBufferAttribute(t, e, n)
					);
				},
				distanceToManhattan: function (t) {
					return (
						console.warn(
							"THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
						),
						this.manhattanDistanceTo(t)
					);
				},
				lengthManhattan: function () {
					return (
						console.warn(
							"THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."
						),
						this.manhattanLength()
					);
				},
			}),
			Object.assign(Et.prototype, {
				setEulerFromRotationMatrix: function () {
					console.error(
						"THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead."
					);
				},
				setEulerFromQuaternion: function () {
					console.error(
						"THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead."
					);
				},
				getPositionFromMatrix: function (t) {
					return (
						console.warn(
							"THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."
						),
						this.setFromMatrixPosition(t)
					);
				},
				getScaleFromMatrix: function (t) {
					return (
						console.warn(
							"THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."
						),
						this.setFromMatrixScale(t)
					);
				},
				getColumnFromMatrix: function (t, e) {
					return (
						console.warn(
							"THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."
						),
						this.setFromMatrixColumn(e, t)
					);
				},
				applyProjection: function (t) {
					return (
						console.warn(
							"THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."
						),
						this.applyMatrix4(t)
					);
				},
				fromAttribute: function (t, e, n) {
					return (
						console.warn(
							"THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."
						),
						this.fromBufferAttribute(t, e, n)
					);
				},
				distanceToManhattan: function (t) {
					return (
						console.warn(
							"THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
						),
						this.manhattanDistanceTo(t)
					);
				},
				lengthManhattan: function () {
					return (
						console.warn(
							"THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."
						),
						this.manhattanLength()
					);
				},
			}),
			Object.assign(bt.prototype, {
				fromAttribute: function (t, e, n) {
					return (
						console.warn(
							"THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."
						),
						this.fromBufferAttribute(t, e, n)
					);
				},
				lengthManhattan: function () {
					return (
						console.warn(
							"THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."
						),
						this.manhattanLength()
					);
				},
			}),
			Object.assign(Vn.prototype, {
				computeTangents: function () {
					console.error("THREE.Geometry: .computeTangents() has been removed.");
				},
				computeLineDistances: function () {
					console.error(
						"THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead."
					);
				},
				applyMatrix: function (t) {
					return (
						console.warn(
							"THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."
						),
						this.applyMatrix4(t)
					);
				},
			}),
			Object.assign(Qt.prototype, {
				getChildByName: function (t) {
					return (
						console.warn(
							"THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."
						),
						this.getObjectByName(t)
					);
				},
				renderDepth: function () {
					console.warn(
						"THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead."
					);
				},
				translate: function (t, e) {
					return (
						console.warn(
							"THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."
						),
						this.translateOnAxis(e, t)
					);
				},
				getWorldRotation: function () {
					console.error(
						"THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead."
					);
				},
				applyMatrix: function (t) {
					return (
						console.warn(
							"THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."
						),
						this.applyMatrix4(t)
					);
				},
			}),
			Object.defineProperties(Qt.prototype, {
				eulerOrder: {
					get: function () {
						return (
							console.warn(
								"THREE.Object3D: .eulerOrder is now .rotation.order."
							),
							this.rotation.order
						);
					},
					set: function (t) {
						console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
							(this.rotation.order = t);
					},
				},
				useQuaternion: {
					get: function () {
						console.warn(
							"THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
						);
					},
					set: function () {
						console.warn(
							"THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
						);
					},
				},
			}),
			Object.assign(Un.prototype, {
				setDrawMode: function () {
					console.error(
						"THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
					);
				},
			}),
			Object.defineProperties(Un.prototype, {
				drawMode: {
					get: function () {
						return (
							console.error(
								"THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."
							),
							0
						);
					},
					set: function () {
						console.error(
							"THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
						);
					},
				},
			}),
			Object.defineProperties(Ho.prototype, {
				objects: {
					get: function () {
						return (
							console.warn("THREE.LOD: .objects has been renamed to .levels."),
							this.levels
						);
					},
				},
			}),
			Object.defineProperty(Go.prototype, "useVertexTexture", {
				get: function () {
					console.warn("THREE.Skeleton: useVertexTexture has been removed.");
				},
				set: function () {
					console.warn("THREE.Skeleton: useVertexTexture has been removed.");
				},
			}),
			(Bo.prototype.initBones = function () {
				console.error("THREE.SkinnedMesh: initBones() has been removed.");
			}),
			Object.defineProperty(vc.prototype, "__arcLengthDivisions", {
				get: function () {
					return (
						console.warn(
							"THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."
						),
						this.arcLengthDivisions
					);
				},
				set: function (t) {
					console.warn(
						"THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."
					),
						(this.arcLengthDivisions = t);
				},
			}),
			(Qn.prototype.setLens = function (t, e) {
				console.warn(
					"THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."
				),
					void 0 !== e && (this.filmGauge = e),
					this.setFocalLength(t);
			}),
			Object.defineProperties(Fc.prototype, {
				onlyShadow: {
					set: function () {
						console.warn("THREE.Light: .onlyShadow has been removed.");
					},
				},
				shadowCameraFov: {
					set: function (t) {
						console.warn(
							"THREE.Light: .shadowCameraFov is now .shadow.camera.fov."
						),
							(this.shadow.camera.fov = t);
					},
				},
				shadowCameraLeft: {
					set: function (t) {
						console.warn(
							"THREE.Light: .shadowCameraLeft is now .shadow.camera.left."
						),
							(this.shadow.camera.left = t);
					},
				},
				shadowCameraRight: {
					set: function (t) {
						console.warn(
							"THREE.Light: .shadowCameraRight is now .shadow.camera.right."
						),
							(this.shadow.camera.right = t);
					},
				},
				shadowCameraTop: {
					set: function (t) {
						console.warn(
							"THREE.Light: .shadowCameraTop is now .shadow.camera.top."
						),
							(this.shadow.camera.top = t);
					},
				},
				shadowCameraBottom: {
					set: function (t) {
						console.warn(
							"THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."
						),
							(this.shadow.camera.bottom = t);
					},
				},
				shadowCameraNear: {
					set: function (t) {
						console.warn(
							"THREE.Light: .shadowCameraNear is now .shadow.camera.near."
						),
							(this.shadow.camera.near = t);
					},
				},
				shadowCameraFar: {
					set: function (t) {
						console.warn(
							"THREE.Light: .shadowCameraFar is now .shadow.camera.far."
						),
							(this.shadow.camera.far = t);
					},
				},
				shadowCameraVisible: {
					set: function () {
						console.warn(
							"THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead."
						);
					},
				},
				shadowBias: {
					set: function (t) {
						console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
							(this.shadow.bias = t);
					},
				},
				shadowDarkness: {
					set: function () {
						console.warn("THREE.Light: .shadowDarkness has been removed.");
					},
				},
				shadowMapWidth: {
					set: function (t) {
						console.warn(
							"THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."
						),
							(this.shadow.mapSize.width = t);
					},
				},
				shadowMapHeight: {
					set: function (t) {
						console.warn(
							"THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."
						),
							(this.shadow.mapSize.height = t);
					},
				},
			}),
			Object.defineProperties($e.prototype, {
				length: {
					get: function () {
						return (
							console.warn(
								"THREE.BufferAttribute: .length has been deprecated. Use .count instead."
							),
							this.array.length
						);
					},
				},
				dynamic: {
					get: function () {
						return (
							console.warn(
								"THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
							),
							35048 === this.usage
						);
					},
					set: function () {
						console.warn(
							"THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
						),
							this.setUsage(35048);
					},
				},
			}),
			Object.assign($e.prototype, {
				setDynamic: function (t) {
					return (
						console.warn(
							"THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."
						),
						this.setUsage(!0 === t ? 35048 : 35044),
						this
					);
				},
				copyIndicesArray: function () {
					console.error(
						"THREE.BufferAttribute: .copyIndicesArray() has been removed."
					);
				},
				setArray: function () {
					console.error(
						"THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
					);
				},
			}),
			Object.assign(xn.prototype, {
				addIndex: function (t) {
					console.warn(
						"THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."
					),
						this.setIndex(t);
				},
				addAttribute: function (t, e) {
					return (
						console.warn(
							"THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."
						),
						(e && e.isBufferAttribute) || (e && e.isInterleavedBufferAttribute)
							? "index" === t
								? (console.warn(
										"THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."
								  ),
								  this.setIndex(e),
								  this)
								: this.setAttribute(t, e)
							: (console.warn(
									"THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."
							  ),
							  this.setAttribute(t, new $e(arguments[1], arguments[2])))
					);
				},
				addDrawCall: function (t, e, n) {
					void 0 !== n &&
						console.warn(
							"THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."
						),
						console.warn(
							"THREE.BufferGeometry: .addDrawCall() is now .addGroup()."
						),
						this.addGroup(t, e);
				},
				clearDrawCalls: function () {
					console.warn(
						"THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."
					),
						this.clearGroups();
				},
				computeTangents: function () {
					console.warn(
						"THREE.BufferGeometry: .computeTangents() has been removed."
					);
				},
				computeOffsets: function () {
					console.warn(
						"THREE.BufferGeometry: .computeOffsets() has been removed."
					);
				},
				removeAttribute: function (t) {
					return (
						console.warn(
							"THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."
						),
						this.deleteAttribute(t)
					);
				},
				applyMatrix: function (t) {
					return (
						console.warn(
							"THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."
						),
						this.applyMatrix4(t)
					);
				},
			}),
			Object.defineProperties(xn.prototype, {
				drawcalls: {
					get: function () {
						return (
							console.error(
								"THREE.BufferGeometry: .drawcalls has been renamed to .groups."
							),
							this.groups
						);
					},
				},
				offsets: {
					get: function () {
						return (
							console.warn(
								"THREE.BufferGeometry: .offsets has been renamed to .groups."
							),
							this.groups
						);
					},
				},
			}),
			Object.defineProperties(il.prototype, {
				maxInstancedCount: {
					get: function () {
						return (
							console.warn(
								"THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."
							),
							this.instanceCount
						);
					},
					set: function (t) {
						console.warn(
							"THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."
						),
							(this.instanceCount = t);
					},
				},
			}),
			Object.defineProperties(Kl.prototype, {
				linePrecision: {
					get: function () {
						return (
							console.warn(
								"THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."
							),
							this.params.Line.threshold
						);
					},
					set: function (t) {
						console.warn(
							"THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."
						),
							(this.params.Line.threshold = t);
					},
				},
			}),
			Object.defineProperties(vo.prototype, {
				dynamic: {
					get: function () {
						return (
							console.warn(
								"THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."
							),
							35048 === this.usage
						);
					},
					set: function (t) {
						console.warn(
							"THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."
						),
							this.setUsage(t);
					},
				},
			}),
			Object.assign(vo.prototype, {
				setDynamic: function (t) {
					return (
						console.warn(
							"THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."
						),
						this.setUsage(!0 === t ? 35048 : 35044),
						this
					);
				},
				setArray: function () {
					console.error(
						"THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
					);
				},
			}),
			Object.assign(ua.prototype, {
				getArrays: function () {
					console.error(
						"THREE.ExtrudeBufferGeometry: .getArrays() has been removed."
					);
				},
				addShapeList: function () {
					console.error(
						"THREE.ExtrudeBufferGeometry: .addShapeList() has been removed."
					);
				},
				addShape: function () {
					console.error(
						"THREE.ExtrudeBufferGeometry: .addShape() has been removed."
					);
				},
			}),
			Object.defineProperties(Zl.prototype, {
				dynamic: {
					set: function () {
						console.warn(
							"THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead."
						);
					},
				},
				onUpdate: {
					value: function () {
						return (
							console.warn(
								"THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."
							),
							this
						);
					},
				},
			}),
			Object.defineProperties(Ze.prototype, {
				wrapAround: {
					get: function () {
						console.warn("THREE.Material: .wrapAround has been removed.");
					},
					set: function () {
						console.warn("THREE.Material: .wrapAround has been removed.");
					},
				},
				overdraw: {
					get: function () {
						console.warn("THREE.Material: .overdraw has been removed.");
					},
					set: function () {
						console.warn("THREE.Material: .overdraw has been removed.");
					},
				},
				wrapRGB: {
					get: function () {
						return (
							console.warn("THREE.Material: .wrapRGB has been removed."),
							new je()
						);
					},
				},
				shading: {
					get: function () {
						console.error(
							"THREE." +
								this.type +
								": .shading has been removed. Use the boolean .flatShading instead."
						);
					},
					set: function (t) {
						console.warn(
							"THREE." +
								this.type +
								": .shading has been removed. Use the boolean .flatShading instead."
						),
							(this.flatShading = 1 === t);
					},
				},
				stencilMask: {
					get: function () {
						return (
							console.warn(
								"THREE." +
									this.type +
									": .stencilMask has been removed. Use .stencilFuncMask instead."
							),
							this.stencilFuncMask
						);
					},
					set: function (t) {
						console.warn(
							"THREE." +
								this.type +
								": .stencilMask has been removed. Use .stencilFuncMask instead."
						),
							(this.stencilFuncMask = t);
					},
				},
			}),
			Object.defineProperties(Ua.prototype, {
				metal: {
					get: function () {
						return (
							console.warn(
								"THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."
							),
							!1
						);
					},
					set: function () {
						console.warn(
							"THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead"
						);
					},
				},
			}),
			Object.defineProperties(za.prototype, {
				transparency: {
					get: function () {
						return (
							console.warn(
								"THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."
							),
							this.transmission
						);
					},
					set: function (t) {
						console.warn(
							"THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."
						),
							(this.transmission = t);
					},
				},
			}),
			Object.defineProperties(Jn.prototype, {
				derivatives: {
					get: function () {
						return (
							console.warn(
								"THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
							),
							this.extensions.derivatives
						);
					},
					set: function (t) {
						console.warn(
							"THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
						),
							(this.extensions.derivatives = t);
					},
				},
			}),
			Object.assign(po.prototype, {
				clearTarget: function (t, e, n, i) {
					console.warn(
						"THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."
					),
						this.setRenderTarget(t),
						this.clear(e, n, i);
				},
				animate: function (t) {
					console.warn(
						"THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."
					),
						this.setAnimationLoop(t);
				},
				getCurrentRenderTarget: function () {
					return (
						console.warn(
							"THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."
						),
						this.getRenderTarget()
					);
				},
				getMaxAnisotropy: function () {
					return (
						console.warn(
							"THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."
						),
						this.capabilities.getMaxAnisotropy()
					);
				},
				getPrecision: function () {
					return (
						console.warn(
							"THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."
						),
						this.capabilities.precision
					);
				},
				resetGLState: function () {
					return (
						console.warn(
							"THREE.WebGLRenderer: .resetGLState() is now .state.reset()."
						),
						this.state.reset()
					);
				},
				supportsFloatTextures: function () {
					return (
						console.warn(
							"THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."
						),
						this.extensions.get("OES_texture_float")
					);
				},
				supportsHalfFloatTextures: function () {
					return (
						console.warn(
							"THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."
						),
						this.extensions.get("OES_texture_half_float")
					);
				},
				supportsStandardDerivatives: function () {
					return (
						console.warn(
							"THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."
						),
						this.extensions.get("OES_standard_derivatives")
					);
				},
				supportsCompressedTextureS3TC: function () {
					return (
						console.warn(
							"THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."
						),
						this.extensions.get("WEBGL_compressed_texture_s3tc")
					);
				},
				supportsCompressedTexturePVRTC: function () {
					return (
						console.warn(
							"THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."
						),
						this.extensions.get("WEBGL_compressed_texture_pvrtc")
					);
				},
				supportsBlendMinMax: function () {
					return (
						console.warn(
							"THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."
						),
						this.extensions.get("EXT_blend_minmax")
					);
				},
				supportsVertexTextures: function () {
					return (
						console.warn(
							"THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."
						),
						this.capabilities.vertexTextures
					);
				},
				supportsInstancedArrays: function () {
					return (
						console.warn(
							"THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."
						),
						this.extensions.get("ANGLE_instanced_arrays")
					);
				},
				enableScissorTest: function (t) {
					console.warn(
						"THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."
					),
						this.setScissorTest(t);
				},
				initMaterial: function () {
					console.warn(
						"THREE.WebGLRenderer: .initMaterial() has been removed."
					);
				},
				addPrePlugin: function () {
					console.warn(
						"THREE.WebGLRenderer: .addPrePlugin() has been removed."
					);
				},
				addPostPlugin: function () {
					console.warn(
						"THREE.WebGLRenderer: .addPostPlugin() has been removed."
					);
				},
				updateShadowMap: function () {
					console.warn(
						"THREE.WebGLRenderer: .updateShadowMap() has been removed."
					);
				},
				setFaceCulling: function () {
					console.warn(
						"THREE.WebGLRenderer: .setFaceCulling() has been removed."
					);
				},
				allocTextureUnit: function () {
					console.warn(
						"THREE.WebGLRenderer: .allocTextureUnit() has been removed."
					);
				},
				setTexture: function () {
					console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
				},
				setTexture2D: function () {
					console.warn(
						"THREE.WebGLRenderer: .setTexture2D() has been removed."
					);
				},
				setTextureCube: function () {
					console.warn(
						"THREE.WebGLRenderer: .setTextureCube() has been removed."
					);
				},
				getActiveMipMapLevel: function () {
					return (
						console.warn(
							"THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."
						),
						this.getActiveMipmapLevel()
					);
				},
			}),
			Object.defineProperties(po.prototype, {
				shadowMapEnabled: {
					get: function () {
						return this.shadowMap.enabled;
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."
						),
							(this.shadowMap.enabled = t);
					},
				},
				shadowMapType: {
					get: function () {
						return this.shadowMap.type;
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."
						),
							(this.shadowMap.type = t);
					},
				},
				shadowMapCullFace: {
					get: function () {
						console.warn(
							"THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
						);
					},
					set: function () {
						console.warn(
							"THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
						);
					},
				},
				context: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."
							),
							this.getContext()
						);
					},
				},
				vr: {
					get: function () {
						return (
							console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),
							this.xr
						);
					},
				},
				gammaInput: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
							),
							!1
						);
					},
					set: function () {
						console.warn(
							"THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
						);
					},
				},
				gammaOutput: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
							),
							!1
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
						),
							(this.outputEncoding = !0 === t ? 3001 : 3e3);
					},
				},
				toneMappingWhitePoint: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."
							),
							1
						);
					},
					set: function () {
						console.warn(
							"THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."
						);
					},
				},
			}),
			Object.defineProperties(io.prototype, {
				cullFace: {
					get: function () {
						console.warn(
							"THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
						);
					},
					set: function () {
						console.warn(
							"THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
						);
					},
				},
				renderReverseSided: {
					get: function () {
						console.warn(
							"THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
						);
					},
					set: function () {
						console.warn(
							"THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
						);
					},
				},
				renderSingleSided: {
					get: function () {
						console.warn(
							"THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
						);
					},
					set: function () {
						console.warn(
							"THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
						);
					},
				},
			}),
			Object.defineProperties(wt.prototype, {
				wrapS: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."
							),
							this.texture.wrapS
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."
						),
							(this.texture.wrapS = t);
					},
				},
				wrapT: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."
							),
							this.texture.wrapT
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."
						),
							(this.texture.wrapT = t);
					},
				},
				magFilter: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
							),
							this.texture.magFilter
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
						),
							(this.texture.magFilter = t);
					},
				},
				minFilter: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
							),
							this.texture.minFilter
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
						),
							(this.texture.minFilter = t);
					},
				},
				anisotropy: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
							),
							this.texture.anisotropy
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
						),
							(this.texture.anisotropy = t);
					},
				},
				offset: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .offset is now .texture.offset."
							),
							this.texture.offset
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .offset is now .texture.offset."
						),
							(this.texture.offset = t);
					},
				},
				repeat: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
							),
							this.texture.repeat
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
						),
							(this.texture.repeat = t);
					},
				},
				format: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .format is now .texture.format."
							),
							this.texture.format
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .format is now .texture.format."
						),
							(this.texture.format = t);
					},
				},
				type: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .type is now .texture.type."
							),
							this.texture.type
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .type is now .texture.type."
						),
							(this.texture.type = t);
					},
				},
				generateMipmaps: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
							),
							this.texture.generateMipmaps
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
						),
							(this.texture.generateMipmaps = t);
					},
				},
			}),
			Object.defineProperties(Rl.prototype, {
				load: {
					value: function (t) {
						console.warn(
							"THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."
						);
						const e = this;
						return (
							new yl().load(t, function (t) {
								e.setBuffer(t);
							}),
							this
						);
					},
				},
				startTime: {
					set: function () {
						console.warn("THREE.Audio: .startTime is now .play( delay ).");
					},
				},
			}),
			(Nl.prototype.getData = function () {
				return (
					console.warn(
						"THREE.AudioAnalyser: .getData() is now .getFrequencyData()."
					),
					this.getFrequencyData()
				);
			}),
			($n.prototype.updateCubeMap = function (t, e) {
				return (
					console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),
					this.update(t, e)
				);
			});
		(vt.crossOrigin = void 0),
			(vt.loadTexture = function (t, e, n, i) {
				console.warn(
					"THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."
				);
				const r = new gc();
				r.setCrossOrigin(this.crossOrigin);
				const o = r.load(t, n, void 0, i);
				return e && (o.mapping = e), o;
			}),
			(vt.loadTextureCube = function (t, e, n, i) {
				console.warn(
					"THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."
				);
				const r = new mc();
				r.setCrossOrigin(this.crossOrigin);
				const o = r.load(t, n, void 0, i);
				return e && (o.mapping = e), o;
			}),
			(vt.loadCompressedTexture = function () {
				console.error(
					"THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead."
				);
			}),
			(vt.loadCompressedTextureCube = function () {
				console.error(
					"THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead."
				);
			});
		function iu(t) {
			const e = t.clientHeight,
				n = t.clientWidth,
				i = new $t(),
				r = new Qn(60, n / e, 0.05, 5),
				o = new po({ antialias: !0, alpha: !0 });
			function s() {
				const e = t.clientHeight,
					n = t.clientWidth;
				(r.aspect = n / e), r.updateProjectionMatrix(), o.setSize(n, e);
			}
			return (
				(o.shadowMap.enabled = !0),
				(o.outputEncoding = 3001),
				(o.gammaFactor = 2.2),
				o.setSize(n, e),
				o.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
				t.append(o.domElement),
				setTimeout(() => {
					s();
				}, 0),
				window.addEventListener("resize", s, !1),
				{ scene: i, camera: r, renderer: o }
			);
		}
		function ru(t) {
			t || (t = {});
			const e = t.x || 2,
				n = t.y || 10,
				i = t.z || 2,
				r = t.width || 10,
				o = t.near || 0.1,
				s = t.far || 30,
				a = t.bias || -0,
				c = t.resolution || 2048,
				l = t.color || 16777215,
				h = t.intensity || 1,
				u = t.useHelpers || !1,
				d = t.castShadow || !0,
				p = new Zc(l, h);
			p.position.set(e, n, i), (p.castShadow = d);
			const f = r / 2;
			if (
				((p.shadow.camera.left = -f),
				(p.shadow.camera.right = f),
				(p.shadow.camera.top = f),
				(p.shadow.camera.bottom = -f),
				(p.shadow.camera.near = o),
				(p.shadow.camera.far = s),
				(p.shadow.mapSize.width = c),
				(p.shadow.mapSize.height = c),
				(p.shadow.bias = a),
				(p.helpers = new co()),
				u)
			) {
				const t = new _h(p, 5),
					e = new Th(p.shadow.camera);
				p.helpers.add(t, e);
			}
			return p;
		}
		"undefined" != typeof __THREE_DEVTOOLS__ &&
			__THREE_DEVTOOLS__.dispatchEvent(
				new CustomEvent("register", { detail: { revision: "119" } })
			);
		var ou = (t) =>
			t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
		const su = new ft();
		let au;
		window.addEventListener("touchstart", () => {
			au = !0;
		}),
			window.addEventListener("mousemove", (t) => {
				au ||
					((su.x = (t.clientX / window.innerWidth) * 2 - 1),
					(su.y = (t.clientY / window.innerHeight) * 2 - 1));
			});
		const cu = new ft();
		let lu;
		window.addEventListener("devicemotion", (t) => {
			const e = t.rotationRate;
			(cu.x = e.beta ? cu.x + 2 * e.beta : cu.x),
				(cu.y = e.alpha ? cu.y + 2 * e.alpha : cu.y),
				(cu.x = pt.clamp(cu.x, -400, 400)),
				(cu.y = pt.clamp(cu.y, -400, 400)),
				lu ||
					(lu = setInterval(() => {
						(cu.x -= 0.07 * cu.x),
							(cu.y -= 0.07 * cu.y),
							Math.abs(cu.x) < 0.5 &&
								Math.abs(cu.y) < 0.5 &&
								(clearInterval(lu), (lu = void 0)),
							(su.x = cu.x / 400),
							(su.y = cu.y / 400),
							(su.x = pt.clamp(su.x, -1, 1)),
							(su.y = pt.clamp(su.y, -1, 1));
					}, 15));
		});
		var hu = su,
			uu = n.p + "2fd623f27b1dc88eb93a5eae671caa8d.png";
		function du() {
			const t = new co(),
				e = [],
				n = new gc().load(uu);
			for (let e = 0; e < 2; e++) {
				const r = new ss({
						size: 0.5 + 0.5 * Math.pow(e, 1.7),
						map: n,
						depthTest: !1,
						transparent: !0,
						opacity: 0.5,
					}),
					o = new xn(),
					s = [];
				for (var i = 0; i < 12 * Math.pow(2 - e, 2); i++)
					s.push(
						4 * Math.random() - 2,
						4 * Math.random() - 2,
						-0.65 * Math.random()
					);
				o.setAttribute("position", new cn(s, 3));
				const a = new us(o, r);
				(a.position.z -= 0.3), t.add(a);
			}
			for (let r = 0; r < 3; r++) {
				const o = new ss({
						size: 0.04 + 0.02 * Math.pow(r, 2),
						map: n,
						depthTest: !1,
						transparent: !0,
						opacity: 0.2,
					}),
					s = new xn(),
					a = [];
				for (i = 0; i < 35 * Math.pow(3 - r, 2); i++)
					a.push(
						2.5 * Math.random() - 1.25,
						1.5 * Math.random() - 0.75,
						0.55 * Math.random()
					);
				s.setAttribute("position", new cn(a, 3));
				const c = {
					speed: 2e-4 * Math.random() + 2e-4,
					child1: new us(s, o),
					child2: new us(s, o),
					update: function (t) {
						[this.child1, this.child2].forEach((e) => {
							(e.position.y += this.speed * t),
								e.position.y > 1.5 && (e.position.y = -1.5);
						});
					},
				};
				c.child1.geometry.translate(
					0.1 * (Math.random() - 0.5),
					0.1 * (Math.random() - 0.5),
					0
				),
					(c.child2.position.y -= 1),
					(c.child1.position.z = 0.3),
					(c.child2.position.z = 0.3),
					e.push(c),
					t.add(c.child1, c.child2);
			}
			return {
				container: t,
				update: function (t) {
					e.forEach((e) => {
						e.update(t);
					});
				},
			};
		}
		var pu = (function () {
				function t(t) {
					cc.call(this, t),
						(this.dracoLoader = null),
						(this.ddsLoader = null),
						(this.ktx2Loader = null),
						(this.pluginCallbacks = []),
						this.register(function (t) {
							return new s(t);
						}),
						this.register(function (t) {
							return new c(t);
						}),
						this.register(function (t) {
							return new a(t);
						});
				}
				function e() {
					var t = {};
					return {
						get: function (e) {
							return t[e];
						},
						add: function (e, n) {
							t[e] = n;
						},
						remove: function (e) {
							delete t[e];
						},
						removeAll: function () {
							t = {};
						},
					};
				}
				t.prototype = Object.assign(Object.create(cc.prototype), {
					constructor: t,
					load: function (t, e, n, i) {
						var r,
							o = this;
						(r =
							"" !== this.resourcePath
								? this.resourcePath
								: "" !== this.path
								? this.path
								: nl(t)),
							o.manager.itemStart(t);
						var s = function (e) {
								i ? i(e) : console.error(e),
									o.manager.itemError(t),
									o.manager.itemEnd(t);
							},
							a = new hc(o.manager);
						a.setPath(this.path),
							a.setResponseType("arraybuffer"),
							a.setRequestHeader(this.requestHeader),
							"use-credentials" === o.crossOrigin && a.setWithCredentials(!0),
							a.load(
								t,
								function (n) {
									try {
										o.parse(
											n,
											r,
											function (n) {
												e(n), o.manager.itemEnd(t);
											},
											s
										);
									} catch (t) {
										s(t);
									}
								},
								n,
								s
							);
					},
					setDRACOLoader: function (t) {
						return (this.dracoLoader = t), this;
					},
					setDDSLoader: function (t) {
						return (this.ddsLoader = t), this;
					},
					setKTX2Loader: function (t) {
						return (this.ktx2Loader = t), this;
					},
					register: function (t) {
						return (
							-1 === this.pluginCallbacks.indexOf(t) &&
								this.pluginCallbacks.push(t),
							this
						);
					},
					unregister: function (t) {
						return (
							-1 !== this.pluginCallbacks.indexOf(t) &&
								this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t), 1),
							this
						);
					},
					parse: function (t, e, s, a) {
						var c,
							h = {},
							u = {};
						if ("string" == typeof t) c = t;
						else if (el(new Uint8Array(t, 0, 4)) === l) {
							try {
								h[n.KHR_BINARY_GLTF] = new d(t);
							} catch (t) {
								return void (a && a(t));
							}
							c = h[n.KHR_BINARY_GLTF].content;
						} else c = el(new Uint8Array(t));
						var m = JSON.parse(c);
						if (void 0 === m.asset || m.asset.version[0] < 2)
							a &&
								a(
									new Error(
										"THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
									)
								);
						else {
							var y = new G(m, {
								path: e || this.resourcePath || "",
								crossOrigin: this.crossOrigin,
								manager: this.manager,
								ktx2Loader: this.ktx2Loader,
							});
							y.fileLoader.setRequestHeader(this.requestHeader);
							for (var x = 0; x < this.pluginCallbacks.length; x++) {
								var b = this.pluginCallbacks[x](y);
								(u[b.name] = b), (h[b.name] = !0);
							}
							if (m.extensionsUsed)
								for (x = 0; x < m.extensionsUsed.length; ++x) {
									var w = m.extensionsUsed[x],
										_ = m.extensionsRequired || [];
									switch (w) {
										case n.KHR_LIGHTS_PUNCTUAL:
											h[w] = new r(m);
											break;
										case n.KHR_MATERIALS_UNLIT:
											h[w] = new o();
											break;
										case n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
											h[w] = new g();
											break;
										case n.KHR_DRACO_MESH_COMPRESSION:
											h[w] = new p(m, this.dracoLoader);
											break;
										case n.MSFT_TEXTURE_DDS:
											h[w] = new i(this.ddsLoader);
											break;
										case n.KHR_TEXTURE_TRANSFORM:
											h[w] = new f();
											break;
										case n.KHR_MESH_QUANTIZATION:
											h[w] = new v();
											break;
										default:
											_.indexOf(w) >= 0 &&
												void 0 === u[w] &&
												console.warn(
													'THREE.GLTFLoader: Unknown extension "' + w + '".'
												);
									}
								}
							y.setExtensions(h), y.setPlugins(u), y.parse(s, a);
						}
					},
				});
				var n = {
					KHR_BINARY_GLTF: "KHR_binary_glTF",
					KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
					KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
					KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
					KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
						"KHR_materials_pbrSpecularGlossiness",
					KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
					KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
					KHR_TEXTURE_BASISU: "KHR_texture_basisu",
					KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
					KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
					MSFT_TEXTURE_DDS: "MSFT_texture_dds",
				};
				function i(t) {
					if (!t)
						throw new Error(
							"THREE.GLTFLoader: Attempting to load .dds texture without importing DDSLoader"
						);
					(this.name = n.MSFT_TEXTURE_DDS), (this.ddsLoader = t);
				}
				function r(t) {
					this.name = n.KHR_LIGHTS_PUNCTUAL;
					var e = (t.extensions && t.extensions[n.KHR_LIGHTS_PUNCTUAL]) || {};
					this.lightDefs = e.lights || [];
				}
				function o() {
					this.name = n.KHR_MATERIALS_UNLIT;
				}
				function s(t) {
					(this.parser = t), (this.name = n.KHR_MATERIALS_CLEARCOAT);
				}
				function a(t) {
					(this.parser = t), (this.name = n.KHR_MATERIALS_TRANSMISSION);
				}
				function c(t) {
					(this.parser = t), (this.name = n.KHR_TEXTURE_BASISU);
				}
				(r.prototype.loadLight = function (t) {
					var e,
						n = this.lightDefs[t],
						i = new je(16777215);
					void 0 !== n.color && i.fromArray(n.color);
					var r = void 0 !== n.range ? n.range : 0;
					switch (n.type) {
						case "directional":
							(e = new Zc(i)).target.position.set(0, 0, -1), e.add(e.target);
							break;
						case "point":
							(e = new qc(i)).distance = r;
							break;
						case "spot":
							((e = new Vc(i)).distance = r),
								(n.spot = n.spot || {}),
								(n.spot.innerConeAngle =
									void 0 !== n.spot.innerConeAngle ? n.spot.innerConeAngle : 0),
								(n.spot.outerConeAngle =
									void 0 !== n.spot.outerConeAngle
										? n.spot.outerConeAngle
										: Math.PI / 4),
								(e.angle = n.spot.outerConeAngle),
								(e.penumbra =
									1 - n.spot.innerConeAngle / n.spot.outerConeAngle),
								e.target.position.set(0, 0, -1),
								e.add(e.target);
							break;
						default:
							throw new Error(
								'THREE.GLTFLoader: Unexpected light type, "' + n.type + '".'
							);
					}
					return (
						e.position.set(0, 0, 0),
						(e.decay = 2),
						void 0 !== n.intensity && (e.intensity = n.intensity),
						(e.name = n.name || "light_" + t),
						Promise.resolve(e)
					);
				}),
					(o.prototype.getMaterialType = function () {
						return Je;
					}),
					(o.prototype.extendParams = function (t, e, n) {
						var i = [];
						(t.color = new je(1, 1, 1)), (t.opacity = 1);
						var r = e.pbrMetallicRoughness;
						if (r) {
							if (Array.isArray(r.baseColorFactor)) {
								var o = r.baseColorFactor;
								t.color.fromArray(o), (t.opacity = o[3]);
							}
							void 0 !== r.baseColorTexture &&
								i.push(n.assignTexture(t, "map", r.baseColorTexture));
						}
						return Promise.all(i);
					}),
					(s.prototype.getMaterialType = function () {
						return za;
					}),
					(s.prototype.extendMaterialParams = function (t, e) {
						var n = this.parser,
							i = n.json.materials[t];
						if (!i.extensions || !i.extensions[this.name])
							return Promise.resolve();
						var r = [],
							o = i.extensions[this.name];
						if (
							(void 0 !== o.clearcoatFactor &&
								(e.clearcoat = o.clearcoatFactor),
							void 0 !== o.clearcoatTexture &&
								r.push(n.assignTexture(e, "clearcoatMap", o.clearcoatTexture)),
							void 0 !== o.clearcoatRoughnessFactor &&
								(e.clearcoatRoughness = o.clearcoatRoughnessFactor),
							void 0 !== o.clearcoatRoughnessTexture &&
								r.push(
									n.assignTexture(
										e,
										"clearcoatRoughnessMap",
										o.clearcoatRoughnessTexture
									)
								),
							void 0 !== o.clearcoatNormalTexture &&
								(r.push(
									n.assignTexture(
										e,
										"clearcoatNormalMap",
										o.clearcoatNormalTexture
									)
								),
								void 0 !== o.clearcoatNormalTexture.scale))
						) {
							var s = o.clearcoatNormalTexture.scale;
							e.clearcoatNormalScale = new ft(s, s);
						}
						return Promise.all(r);
					}),
					(a.prototype.getMaterialType = function () {
						return za;
					}),
					(a.prototype.extendMaterialParams = function (t, e) {
						var n = this.parser,
							i = n.json.materials[t];
						if (!i.extensions || !i.extensions[this.name])
							return Promise.resolve();
						var r = [],
							o = i.extensions[this.name];
						return (
							void 0 !== o.transmissionFactor &&
								(e.transmission = o.transmissionFactor),
							void 0 !== o.transmissionTexture &&
								r.push(
									n.assignTexture(e, "transmissionMap", o.transmissionTexture)
								),
							Promise.all(r)
						);
					}),
					(c.prototype.loadTexture = function (t) {
						var e = this.parser,
							n = e.json,
							i = n.textures[t];
						if (!i.extensions || !i.extensions[this.name]) return null;
						var r = i.extensions[this.name],
							o = n.images[r.source],
							s = e.options.ktx2Loader;
						if (!s)
							throw new Error(
								"THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
							);
						return e.loadTextureImage(t, o, s);
					});
				var l = "glTF",
					h = 1313821514,
					u = 5130562;
				function d(t) {
					(this.name = n.KHR_BINARY_GLTF),
						(this.content = null),
						(this.body = null);
					var e = new DataView(t, 0, 12);
					if (
						((this.header = {
							magic: el(new Uint8Array(t.slice(0, 4))),
							version: e.getUint32(4, !0),
							length: e.getUint32(8, !0),
						}),
						this.header.magic !== l)
					)
						throw new Error(
							"THREE.GLTFLoader: Unsupported glTF-Binary header."
						);
					if (this.header.version < 2)
						throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
					for (var i = new DataView(t, 12), r = 0; r < i.byteLength; ) {
						var o = i.getUint32(r, !0);
						r += 4;
						var s = i.getUint32(r, !0);
						if (((r += 4), s === h)) {
							var a = new Uint8Array(t, 12 + r, o);
							this.content = el(a);
						} else if (s === u) {
							var c = 12 + r;
							this.body = t.slice(c, c + o);
						}
						r += o;
					}
					if (null === this.content)
						throw new Error("THREE.GLTFLoader: JSON content not found.");
				}
				function p(t, e) {
					if (!e)
						throw new Error(
							"THREE.GLTFLoader: No DRACOLoader instance provided."
						);
					(this.name = n.KHR_DRACO_MESH_COMPRESSION),
						(this.json = t),
						(this.dracoLoader = e),
						this.dracoLoader.preload();
				}
				function f() {
					this.name = n.KHR_TEXTURE_TRANSFORM;
				}
				function m(t) {
					Na.call(this), (this.isGLTFSpecularGlossinessMaterial = !0);
					var e = [
							"#ifdef USE_SPECULARMAP",
							"\tuniform sampler2D specularMap;",
							"#endif",
						].join("\n"),
						n = [
							"#ifdef USE_GLOSSINESSMAP",
							"\tuniform sampler2D glossinessMap;",
							"#endif",
						].join("\n"),
						i = [
							"vec3 specularFactor = specular;",
							"#ifdef USE_SPECULARMAP",
							"\tvec4 texelSpecular = texture2D( specularMap, vUv );",
							"\ttexelSpecular = sRGBToLinear( texelSpecular );",
							"\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
							"\tspecularFactor *= texelSpecular.rgb;",
							"#endif",
						].join("\n"),
						r = [
							"float glossinessFactor = glossiness;",
							"#ifdef USE_GLOSSINESSMAP",
							"\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );",
							"\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
							"\tglossinessFactor *= texelGlossiness.a;",
							"#endif",
						].join("\n"),
						o = [
							"PhysicalMaterial material;",
							"material.diffuseColor = diffuseColor.rgb;",
							"vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
							"float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
							"material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.",
							"material.specularRoughness += geometryRoughness;",
							"material.specularRoughness = min( material.specularRoughness, 1.0 );",
							"material.specularColor = specularFactor.rgb;",
						].join("\n"),
						s = {
							specular: { value: new je().setHex(16777215) },
							glossiness: { value: 1 },
							specularMap: { value: null },
							glossinessMap: { value: null },
						};
					(this._extraUniforms = s),
						(this.onBeforeCompile = function (t) {
							for (var a in s) t.uniforms[a] = s[a];
							(t.fragmentShader = t.fragmentShader.replace(
								"uniform float roughness;",
								"uniform vec3 specular;"
							)),
								(t.fragmentShader = t.fragmentShader.replace(
									"uniform float metalness;",
									"uniform float glossiness;"
								)),
								(t.fragmentShader = t.fragmentShader.replace(
									"#include <roughnessmap_pars_fragment>",
									e
								)),
								(t.fragmentShader = t.fragmentShader.replace(
									"#include <metalnessmap_pars_fragment>",
									n
								)),
								(t.fragmentShader = t.fragmentShader.replace(
									"#include <roughnessmap_fragment>",
									i
								)),
								(t.fragmentShader = t.fragmentShader.replace(
									"#include <metalnessmap_fragment>",
									r
								)),
								(t.fragmentShader = t.fragmentShader.replace(
									"#include <lights_physical_fragment>",
									o
								));
						}),
						Object.defineProperties(this, {
							specular: {
								get: function () {
									return s.specular.value;
								},
								set: function (t) {
									s.specular.value = t;
								},
							},
							specularMap: {
								get: function () {
									return s.specularMap.value;
								},
								set: function (t) {
									s.specularMap.value = t;
								},
							},
							glossiness: {
								get: function () {
									return s.glossiness.value;
								},
								set: function (t) {
									s.glossiness.value = t;
								},
							},
							glossinessMap: {
								get: function () {
									return s.glossinessMap.value;
								},
								set: function (t) {
									(s.glossinessMap.value = t),
										t
											? ((this.defines.USE_GLOSSINESSMAP = ""),
											  (this.defines.USE_ROUGHNESSMAP = ""))
											: (delete this.defines.USE_ROUGHNESSMAP,
											  delete this.defines.USE_GLOSSINESSMAP);
								},
							},
						}),
						delete this.metalness,
						delete this.roughness,
						delete this.metalnessMap,
						delete this.roughnessMap,
						this.setValues(t);
				}
				function g() {
					return {
						name: n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
						specularGlossinessParams: [
							"color",
							"map",
							"lightMap",
							"lightMapIntensity",
							"aoMap",
							"aoMapIntensity",
							"emissive",
							"emissiveIntensity",
							"emissiveMap",
							"bumpMap",
							"bumpScale",
							"normalMap",
							"normalMapType",
							"displacementMap",
							"displacementScale",
							"displacementBias",
							"specularMap",
							"specular",
							"glossinessMap",
							"glossiness",
							"alphaMap",
							"envMap",
							"envMapIntensity",
							"refractionRatio",
						],
						getMaterialType: function () {
							return m;
						},
						extendParams: function (t, e, n) {
							var i = e.extensions[this.name];
							(t.color = new je(1, 1, 1)), (t.opacity = 1);
							var r = [];
							if (Array.isArray(i.diffuseFactor)) {
								var o = i.diffuseFactor;
								t.color.fromArray(o), (t.opacity = o[3]);
							}
							if (
								(void 0 !== i.diffuseTexture &&
									r.push(n.assignTexture(t, "map", i.diffuseTexture)),
								(t.emissive = new je(0, 0, 0)),
								(t.glossiness =
									void 0 !== i.glossinessFactor ? i.glossinessFactor : 1),
								(t.specular = new je(1, 1, 1)),
								Array.isArray(i.specularFactor) &&
									t.specular.fromArray(i.specularFactor),
								void 0 !== i.specularGlossinessTexture)
							) {
								var s = i.specularGlossinessTexture;
								r.push(n.assignTexture(t, "glossinessMap", s)),
									r.push(n.assignTexture(t, "specularMap", s));
							}
							return Promise.all(r);
						},
						createMaterial: function (t) {
							var e = new m(t);
							return (
								(e.fog = !0),
								(e.color = t.color),
								(e.map = void 0 === t.map ? null : t.map),
								(e.lightMap = null),
								(e.lightMapIntensity = 1),
								(e.aoMap = void 0 === t.aoMap ? null : t.aoMap),
								(e.aoMapIntensity = 1),
								(e.emissive = t.emissive),
								(e.emissiveIntensity = 1),
								(e.emissiveMap =
									void 0 === t.emissiveMap ? null : t.emissiveMap),
								(e.bumpMap = void 0 === t.bumpMap ? null : t.bumpMap),
								(e.bumpScale = 1),
								(e.normalMap = void 0 === t.normalMap ? null : t.normalMap),
								(e.normalMapType = 0),
								t.normalScale && (e.normalScale = t.normalScale),
								(e.displacementMap = null),
								(e.displacementScale = 1),
								(e.displacementBias = 0),
								(e.specularMap =
									void 0 === t.specularMap ? null : t.specularMap),
								(e.specular = t.specular),
								(e.glossinessMap =
									void 0 === t.glossinessMap ? null : t.glossinessMap),
								(e.glossiness = t.glossiness),
								(e.alphaMap = null),
								(e.envMap = void 0 === t.envMap ? null : t.envMap),
								(e.envMapIntensity = 1),
								(e.refractionRatio = 0.98),
								e
							);
						},
					};
				}
				function v() {
					this.name = n.KHR_MESH_QUANTIZATION;
				}
				function y(t, e, n, i) {
					Wa.call(this, t, e, n, i);
				}
				(p.prototype.decodePrimitive = function (t, e) {
					var n = this.json,
						i = this.dracoLoader,
						r = t.extensions[this.name].bufferView,
						o = t.extensions[this.name].attributes,
						s = {},
						a = {},
						c = {};
					for (var l in o) {
						var h = P[l] || l.toLowerCase();
						s[h] = o[l];
					}
					for (l in t.attributes) {
						h = P[l] || l.toLowerCase();
						if (void 0 !== o[l]) {
							var u = n.accessors[t.attributes[l]],
								d = E[u.componentType];
							(c[h] = d), (a[h] = !0 === u.normalized);
						}
					}
					return e.getDependency("bufferView", r).then(function (t) {
						return new Promise(function (e) {
							i.decodeDracoFile(
								t,
								function (t) {
									for (var n in t.attributes) {
										var i = t.attributes[n],
											r = a[n];
										void 0 !== r && (i.normalized = r);
									}
									e(t);
								},
								s,
								c
							);
						});
					});
				}),
					(f.prototype.extendTexture = function (t, e) {
						return (
							(t = t.clone()),
							void 0 !== e.offset && t.offset.fromArray(e.offset),
							void 0 !== e.rotation && (t.rotation = e.rotation),
							void 0 !== e.scale && t.repeat.fromArray(e.scale),
							void 0 !== e.texCoord &&
								console.warn(
									'THREE.GLTFLoader: Custom UV sets in "' +
										this.name +
										'" extension not yet supported.'
								),
							(t.needsUpdate = !0),
							t
						);
					}),
					(m.prototype = Object.create(Na.prototype)),
					(m.prototype.constructor = m),
					(m.prototype.copy = function (t) {
						return (
							Na.prototype.copy.call(this, t),
							(this.specularMap = t.specularMap),
							this.specular.copy(t.specular),
							(this.glossinessMap = t.glossinessMap),
							(this.glossiness = t.glossiness),
							delete this.metalness,
							delete this.roughness,
							delete this.metalnessMap,
							delete this.roughnessMap,
							this
						);
					}),
					(y.prototype = Object.create(Wa.prototype)),
					(y.prototype.constructor = y),
					(y.prototype.copySampleValue_ = function (t) {
						for (
							var e = this.resultBuffer,
								n = this.sampleValues,
								i = this.valueSize,
								r = t * i * 3 + i,
								o = 0;
							o !== i;
							o++
						)
							e[o] = n[r + o];
						return e;
					}),
					(y.prototype.beforeStart_ = y.prototype.copySampleValue_),
					(y.prototype.afterEnd_ = y.prototype.copySampleValue_),
					(y.prototype.interpolate_ = function (t, e, n, i) {
						for (
							var r = this.resultBuffer,
								o = this.sampleValues,
								s = this.valueSize,
								a = 2 * s,
								c = 3 * s,
								l = i - e,
								h = (n - e) / l,
								u = h * h,
								d = u * h,
								p = t * c,
								f = p - c,
								m = -2 * d + 3 * u,
								g = d - u,
								v = 1 - m,
								y = g - u + h,
								x = 0;
							x !== s;
							x++
						) {
							var b = o[f + x + s],
								w = o[f + x + a] * l,
								_ = o[p + x + s],
								M = o[p + x] * l;
							r[x] = v * b + y * w + m * _ + g * M;
						}
						return r;
					});
				var x = 0,
					b = 1,
					w = 2,
					_ = 3,
					M = 4,
					S = 5,
					T = 6,
					E = {
						5120: Int8Array,
						5121: Uint8Array,
						5122: Int16Array,
						5123: Uint16Array,
						5125: Uint32Array,
						5126: Float32Array,
					},
					A = {
						9728: 1003,
						9729: 1006,
						9984: 1004,
						9985: 1007,
						9986: 1005,
						9987: 1008,
					},
					L = { 33071: 1001, 33648: 1002, 10497: 1e3 },
					R = {
						SCALAR: 1,
						VEC2: 2,
						VEC3: 3,
						VEC4: 4,
						MAT2: 4,
						MAT3: 9,
						MAT4: 16,
					},
					P = {
						POSITION: "position",
						NORMAL: "normal",
						TANGENT: "tangent",
						TEXCOORD_0: "uv",
						TEXCOORD_1: "uv2",
						COLOR_0: "color",
						WEIGHTS_0: "skinWeight",
						JOINTS_0: "skinIndex",
					},
					C = {
						scale: "scale",
						translation: "position",
						rotation: "quaternion",
						weights: "morphTargetInfluences",
					},
					I = { CUBICSPLINE: void 0, LINEAR: 2301, STEP: 2300 },
					O = "OPAQUE",
					D = "MASK",
					N = "BLEND",
					z = { "image/png": 1023, "image/jpeg": 1022 };
				function U(t, e) {
					return "string" != typeof t || "" === t
						? ""
						: (/^https?:\/\//i.test(e) &&
								/^\//.test(t) &&
								(e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
						  /^(https?:)?\/\//i.test(t) ||
						  /^data:.*,.*$/i.test(t) ||
						  /^blob:.*$/i.test(t)
								? t
								: e + t);
				}
				function H(t, e, n) {
					for (var i in n.extensions)
						void 0 === t[i] &&
							((e.userData.gltfExtensions = e.userData.gltfExtensions || {}),
							(e.userData.gltfExtensions[i] = n.extensions[i]));
				}
				function B(t, e) {
					void 0 !== e.extras &&
						("object" == typeof e.extras
							? Object.assign(t.userData, e.extras)
							: console.warn(
									"THREE.GLTFLoader: Ignoring primitive type .extras, " +
										e.extras
							  ));
				}
				function F(t, e) {
					if ((t.updateMorphTargets(), void 0 !== e.weights))
						for (var n = 0, i = e.weights.length; n < i; n++)
							t.morphTargetInfluences[n] = e.weights[n];
					if (e.extras && Array.isArray(e.extras.targetNames)) {
						var r = e.extras.targetNames;
						if (t.morphTargetInfluences.length === r.length) {
							t.morphTargetDictionary = {};
							for (n = 0, i = r.length; n < i; n++)
								t.morphTargetDictionary[r[n]] = n;
						} else
							console.warn(
								"THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
							);
					}
				}
				function k(t) {
					for (
						var e = "", n = Object.keys(t).sort(), i = 0, r = n.length;
						i < r;
						i++
					)
						e += n[i] + ":" + t[n[i]] + ";";
					return e;
				}
				function G(t, n) {
					(this.json = t || {}),
						(this.extensions = {}),
						(this.plugins = {}),
						(this.options = n || {}),
						(this.cache = new e()),
						(this.associations = new Map()),
						(this.primitiveCache = {}),
						(this.meshCache = { refs: {}, uses: {} }),
						(this.cameraCache = { refs: {}, uses: {} }),
						(this.lightCache = { refs: {}, uses: {} }),
						"undefined" != typeof createImageBitmap &&
						!1 === /Firefox/.test(navigator.userAgent)
							? (this.textureLoader = new ul(this.options.manager))
							: (this.textureLoader = new gc(this.options.manager)),
						this.textureLoader.setCrossOrigin(this.options.crossOrigin),
						(this.fileLoader = new hc(this.options.manager)),
						this.fileLoader.setResponseType("arraybuffer"),
						"use-credentials" === this.options.crossOrigin &&
							this.fileLoader.setWithCredentials(!0);
				}
				function j(t, e, n) {
					var i = e.attributes,
						r = [];
					function o(e, i) {
						return n.getDependency("accessor", e).then(function (e) {
							t.setAttribute(i, e);
						});
					}
					for (var s in i) {
						var a = P[s] || s.toLowerCase();
						a in t.attributes || r.push(o(i[s], a));
					}
					if (void 0 !== e.indices && !t.index) {
						var c = n.getDependency("accessor", e.indices).then(function (e) {
							t.setIndex(e);
						});
						r.push(c);
					}
					return (
						B(t, e),
						(function (t, e, n) {
							var i = e.attributes,
								r = new pe();
							if (void 0 !== i.POSITION) {
								var o = (p = n.json.accessors[i.POSITION]).min,
									s = p.max;
								if (void 0 !== o && void 0 !== s) {
									r.set(new Et(o[0], o[1], o[2]), new Et(s[0], s[1], s[2]));
									var a = e.targets;
									if (void 0 !== a) {
										for (
											var c = new Et(), l = new Et(), h = 0, u = a.length;
											h < u;
											h++
										) {
											var d = a[h];
											if (void 0 !== d.POSITION) {
												var p;
												(o = (p = n.json.accessors[d.POSITION]).min),
													(s = p.max);
												void 0 !== o && void 0 !== s
													? (l.setX(Math.max(Math.abs(o[0]), Math.abs(s[0]))),
													  l.setY(Math.max(Math.abs(o[1]), Math.abs(s[1]))),
													  l.setZ(Math.max(Math.abs(o[2]), Math.abs(s[2]))),
													  c.max(l))
													: console.warn(
															"THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
													  );
											}
										}
										r.expandByVector(c);
									}
									t.boundingBox = r;
									var f = new ge();
									r.getCenter(f.center),
										(f.radius = r.min.distanceTo(r.max) / 2),
										(t.boundingSphere = f);
								} else
									console.warn(
										"THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
									);
							}
						})(t, e, n),
						Promise.all(r).then(function () {
							return void 0 !== e.targets
								? (function (t, e, n) {
										for (var i = !1, r = !1, o = 0, s = e.length; o < s; o++) {
											if (
												(void 0 !== (l = e[o]).POSITION && (i = !0),
												void 0 !== l.NORMAL && (r = !0),
												i && r)
											)
												break;
										}
										if (!i && !r) return Promise.resolve(t);
										var a = [],
											c = [];
										for (o = 0, s = e.length; o < s; o++) {
											var l = e[o];
											if (i) {
												var h =
													void 0 !== l.POSITION
														? n.getDependency("accessor", l.POSITION)
														: t.attributes.position;
												a.push(h);
											}
											if (r) {
												h =
													void 0 !== l.NORMAL
														? n.getDependency("accessor", l.NORMAL)
														: t.attributes.normal;
												c.push(h);
											}
										}
										return Promise.all([Promise.all(a), Promise.all(c)]).then(
											function (e) {
												var n = e[0],
													o = e[1];
												return (
													i && (t.morphAttributes.position = n),
													r && (t.morphAttributes.normal = o),
													(t.morphTargetsRelative = !0),
													t
												);
											}
										);
								  })(t, e.targets, n)
								: t;
						})
					);
				}
				function V(t, e) {
					var n = t.getIndex();
					if (null === n) {
						var i = [],
							r = t.getAttribute("position");
						if (void 0 === r)
							return (
								console.error(
									"THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
								),
								t
							);
						for (var o = 0; o < r.count; o++) i.push(o);
						t.setIndex(i), (n = t.getIndex());
					}
					var s = n.count - 2,
						a = [];
					if (2 === e)
						for (o = 1; o <= s; o++)
							a.push(n.getX(0)), a.push(n.getX(o)), a.push(n.getX(o + 1));
					else
						for (o = 0; o < s; o++)
							o % 2 == 0
								? (a.push(n.getX(o)),
								  a.push(n.getX(o + 1)),
								  a.push(n.getX(o + 2)))
								: (a.push(n.getX(o + 2)),
								  a.push(n.getX(o + 1)),
								  a.push(n.getX(o)));
					a.length / 3 !== s &&
						console.error(
							"THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
						);
					var c = t.clone();
					return c.setIndex(a), c;
				}
				return (
					(G.prototype.setExtensions = function (t) {
						this.extensions = t;
					}),
					(G.prototype.setPlugins = function (t) {
						this.plugins = t;
					}),
					(G.prototype.parse = function (t, e) {
						var n = this,
							i = this.json,
							r = this.extensions;
						this.cache.removeAll(),
							this._markDefs(),
							Promise.all([
								this.getDependencies("scene"),
								this.getDependencies("animation"),
								this.getDependencies("camera"),
							])
								.then(function (e) {
									var o = {
										scene: e[0][i.scene || 0],
										scenes: e[0],
										animations: e[1],
										cameras: e[2],
										asset: i.asset,
										parser: n,
										userData: {},
									};
									H(r, o, i), B(o, i), t(o);
								})
								.catch(e);
					}),
					(G.prototype._markDefs = function () {
						for (
							var t = this.json.nodes || [],
								e = this.json.skins || [],
								i = this.json.meshes || [],
								r = 0,
								o = e.length;
							r < o;
							r++
						)
							for (var s = e[r].joints, a = 0, c = s.length; a < c; a++)
								t[s[a]].isBone = !0;
						for (var l = 0, h = t.length; l < h; l++) {
							var u = t[l];
							void 0 !== u.mesh &&
								(this._addNodeRef(this.meshCache, u.mesh),
								void 0 !== u.skin && (i[u.mesh].isSkinnedMesh = !0)),
								void 0 !== u.camera &&
									this._addNodeRef(this.cameraCache, u.camera),
								u.extensions &&
									u.extensions[n.KHR_LIGHTS_PUNCTUAL] &&
									void 0 !== u.extensions[n.KHR_LIGHTS_PUNCTUAL].light &&
									this._addNodeRef(
										this.lightCache,
										u.extensions[n.KHR_LIGHTS_PUNCTUAL].light
									);
						}
					}),
					(G.prototype._addNodeRef = function (t, e) {
						void 0 !== e &&
							(void 0 === t.refs[e] && (t.refs[e] = t.uses[e] = 0),
							t.refs[e]++);
					}),
					(G.prototype._getNodeRef = function (t, e, n) {
						if (t.refs[e] <= 1) return n;
						var i = n.clone();
						return (i.name += "_instance_" + t.uses[e]++), i;
					}),
					(G.prototype._invokeOne = function (t) {
						var e = Object.values(this.plugins);
						e.push(this);
						for (var n = 0; n < e.length; n++) {
							var i = t(e[n]);
							if (i) return i;
						}
					}),
					(G.prototype._invokeAll = function (t) {
						var e = Object.values(this.plugins);
						e.unshift(this);
						for (var n = [], i = 0; i < e.length; i++) n.push(t(e[i]));
						return Promise.all(n);
					}),
					(G.prototype.getDependency = function (t, e) {
						var i = t + ":" + e,
							r = this.cache.get(i);
						if (!r) {
							switch (t) {
								case "scene":
									r = this.loadScene(e);
									break;
								case "node":
									r = this.loadNode(e);
									break;
								case "mesh":
									r = this._invokeOne(function (t) {
										return t.loadMesh && t.loadMesh(e);
									});
									break;
								case "accessor":
									r = this.loadAccessor(e);
									break;
								case "bufferView":
									r = this._invokeOne(function (t) {
										return t.loadBufferView && t.loadBufferView(e);
									});
									break;
								case "buffer":
									r = this.loadBuffer(e);
									break;
								case "material":
									r = this._invokeOne(function (t) {
										return t.loadMaterial && t.loadMaterial(e);
									});
									break;
								case "texture":
									r = this._invokeOne(function (t) {
										return t.loadTexture && t.loadTexture(e);
									});
									break;
								case "skin":
									r = this.loadSkin(e);
									break;
								case "animation":
									r = this.loadAnimation(e);
									break;
								case "camera":
									r = this.loadCamera(e);
									break;
								case "light":
									r = this.extensions[n.KHR_LIGHTS_PUNCTUAL].loadLight(e);
									break;
								default:
									throw new Error("Unknown type: " + t);
							}
							this.cache.add(i, r);
						}
						return r;
					}),
					(G.prototype.getDependencies = function (t) {
						var e = this.cache.get(t);
						if (!e) {
							var n = this,
								i = this.json[t + ("mesh" === t ? "es" : "s")] || [];
							(e = Promise.all(
								i.map(function (e, i) {
									return n.getDependency(t, i);
								})
							)),
								this.cache.add(t, e);
						}
						return e;
					}),
					(G.prototype.loadBuffer = function (t) {
						var e = this.json.buffers[t],
							i = this.fileLoader;
						if (e.type && "arraybuffer" !== e.type)
							throw new Error(
								"THREE.GLTFLoader: " + e.type + " buffer type is not supported."
							);
						if (void 0 === e.uri && 0 === t)
							return Promise.resolve(this.extensions[n.KHR_BINARY_GLTF].body);
						var r = this.options;
						return new Promise(function (t, n) {
							i.load(U(e.uri, r.path), t, void 0, function () {
								n(
									new Error(
										'THREE.GLTFLoader: Failed to load buffer "' + e.uri + '".'
									)
								);
							});
						});
					}),
					(G.prototype.loadBufferView = function (t) {
						var e = this.json.bufferViews[t];
						return this.getDependency("buffer", e.buffer).then(function (t) {
							var n = e.byteLength || 0,
								i = e.byteOffset || 0;
							return t.slice(i, i + n);
						});
					}),
					(G.prototype.loadAccessor = function (t) {
						var e = this,
							n = this.json,
							i = this.json.accessors[t];
						if (void 0 === i.bufferView && void 0 === i.sparse)
							return Promise.resolve(null);
						var r = [];
						return (
							void 0 !== i.bufferView
								? r.push(this.getDependency("bufferView", i.bufferView))
								: r.push(null),
							void 0 !== i.sparse &&
								(r.push(
									this.getDependency("bufferView", i.sparse.indices.bufferView)
								),
								r.push(
									this.getDependency("bufferView", i.sparse.values.bufferView)
								)),
							Promise.all(r).then(function (t) {
								var r,
									o = t[0],
									s = R[i.type],
									a = E[i.componentType],
									c = a.BYTES_PER_ELEMENT,
									l = c * s,
									h = i.byteOffset || 0,
									u =
										void 0 !== i.bufferView
											? n.bufferViews[i.bufferView].byteStride
											: void 0,
									d = !0 === i.normalized;
								if (u && u !== l) {
									var p = Math.floor(h / u),
										f =
											"InterleavedBuffer:" +
											i.bufferView +
											":" +
											i.componentType +
											":" +
											p +
											":" +
											i.count,
										m = e.cache.get(f);
									m ||
										((m = new vo(new a(o, p * u, (i.count * u) / c), u / c)),
										e.cache.add(f, m)),
										(r = new xo(m, s, (h % u) / c, d));
								} else r = new $e(null === o ? new a(i.count * s) : new a(o, h, i.count * s), s, d);
								if (void 0 !== i.sparse) {
									var g = R.SCALAR,
										v = E[i.sparse.indices.componentType],
										y = i.sparse.indices.byteOffset || 0,
										x = i.sparse.values.byteOffset || 0,
										b = new v(t[1], y, i.sparse.count * g),
										w = new a(t[2], x, i.sparse.count * s);
									null !== o &&
										(r = new $e(r.array.slice(), r.itemSize, r.normalized));
									for (var _ = 0, M = b.length; _ < M; _++) {
										var S = b[_];
										if (
											(r.setX(S, w[_ * s]),
											s >= 2 && r.setY(S, w[_ * s + 1]),
											s >= 3 && r.setZ(S, w[_ * s + 2]),
											s >= 4 && r.setW(S, w[_ * s + 3]),
											s >= 5)
										)
											throw new Error(
												"THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
											);
									}
								}
								return r;
							})
						);
					}),
					(G.prototype.loadTexture = function (t) {
						var e,
							i,
							r = this.json,
							o = this.options,
							s = r.textures[t],
							a = s.extensions || {};
						return (
							(e = a[n.MSFT_TEXTURE_DDS]
								? r.images[a[n.MSFT_TEXTURE_DDS].source]
								: r.images[s.source]).uri && (i = o.manager.getHandler(e.uri)),
							i ||
								(i = a[n.MSFT_TEXTURE_DDS]
									? this.extensions[n.MSFT_TEXTURE_DDS].ddsLoader
									: this.textureLoader),
							this.loadTextureImage(t, e, i)
						);
					}),
					(G.prototype.loadTextureImage = function (t, e, n) {
						var i = this,
							r = this.json,
							o = this.options,
							s = r.textures[t],
							a = self.URL || self.webkitURL,
							c = e.uri,
							l = !1;
						return (
							void 0 !== e.bufferView &&
								(c = i
									.getDependency("bufferView", e.bufferView)
									.then(function (t) {
										l = !0;
										var n = new Blob([t], { type: e.mimeType });
										return (c = a.createObjectURL(n));
									})),
							Promise.resolve(c)
								.then(function (t) {
									return new Promise(function (e, i) {
										var r = e;
										!0 === n.isImageBitmapLoader &&
											(r = function (t) {
												e(new ms(t));
											}),
											n.load(U(t, o.path), r, void 0, i);
									});
								})
								.then(function (n) {
									!0 === l && a.revokeObjectURL(c),
										(n.flipY = !1),
										s.name && (n.name = s.name),
										e.mimeType in z && (n.format = z[e.mimeType]);
									var o = (r.samplers || {})[s.sampler] || {};
									return (
										(n.magFilter = A[o.magFilter] || 1006),
										(n.minFilter = A[o.minFilter] || 1008),
										(n.wrapS = L[o.wrapS] || 1e3),
										(n.wrapT = L[o.wrapT] || 1e3),
										i.associations.set(n, { type: "textures", index: t }),
										n
									);
								})
						);
					}),
					(G.prototype.assignTexture = function (t, e, i) {
						var r = this;
						return this.getDependency("texture", i.index).then(function (o) {
							if (!o.isCompressedTexture)
								switch (e) {
									case "aoMap":
									case "emissiveMap":
									case "metalnessMap":
									case "normalMap":
									case "roughnessMap":
										o.format = 1022;
								}
							if (
								(void 0 === i.texCoord ||
									0 == i.texCoord ||
									("aoMap" === e && 1 == i.texCoord) ||
									console.warn(
										"THREE.GLTFLoader: Custom UV set " +
											i.texCoord +
											" for texture " +
											e +
											" not yet supported."
									),
								r.extensions[n.KHR_TEXTURE_TRANSFORM])
							) {
								var s =
									void 0 !== i.extensions
										? i.extensions[n.KHR_TEXTURE_TRANSFORM]
										: void 0;
								if (s) {
									var a = r.associations.get(o);
									(o = r.extensions[n.KHR_TEXTURE_TRANSFORM].extendTexture(
										o,
										s
									)),
										r.associations.set(o, a);
								}
							}
							t[e] = o;
						});
					}),
					(G.prototype.assignFinalMaterial = function (t) {
						var e = t.geometry,
							n = t.material,
							i = void 0 !== e.attributes.tangent,
							r = void 0 !== e.attributes.color,
							o = void 0 === e.attributes.normal,
							s = !0 === t.isSkinnedMesh,
							a = Object.keys(e.morphAttributes).length > 0,
							c = a && void 0 !== e.morphAttributes.normal;
						if (t.isPoints) {
							var l = "PointsMaterial:" + n.uuid,
								h = this.cache.get(l);
							h ||
								((h = new ss()),
								Ze.prototype.copy.call(h, n),
								h.color.copy(n.color),
								(h.map = n.map),
								(h.sizeAttenuation = !1),
								this.cache.add(l, h)),
								(n = h);
						} else if (t.isLine) {
							l = "LineBasicMaterial:" + n.uuid;
							var u = this.cache.get(l);
							u ||
								((u = new Zo()),
								Ze.prototype.copy.call(u, n),
								u.color.copy(n.color),
								this.cache.add(l, u)),
								(n = u);
						}
						if (i || r || o || s || a) {
							l = "ClonedMaterial:" + n.uuid + ":";
							n.isGLTFSpecularGlossinessMaterial &&
								(l += "specular-glossiness:"),
								s && (l += "skinning:"),
								i && (l += "vertex-tangents:"),
								r && (l += "vertex-colors:"),
								o && (l += "flat-shading:"),
								a && (l += "morph-targets:"),
								c && (l += "morph-normals:");
							var d = this.cache.get(l);
							d ||
								((d = n.clone()),
								s && (d.skinning = !0),
								i && (d.vertexTangents = !0),
								r && (d.vertexColors = !0),
								o && (d.flatShading = !0),
								a && (d.morphTargets = !0),
								c && (d.morphNormals = !0),
								this.cache.add(l, d),
								this.associations.set(d, this.associations.get(n))),
								(n = d);
						}
						n.aoMap &&
							void 0 === e.attributes.uv2 &&
							void 0 !== e.attributes.uv &&
							e.setAttribute("uv2", e.attributes.uv),
							n.normalScale && !i && (n.normalScale.y = -n.normalScale.y),
							n.clearcoatNormalScale &&
								!i &&
								(n.clearcoatNormalScale.y = -n.clearcoatNormalScale.y),
							(t.material = n);
					}),
					(G.prototype.getMaterialType = function () {
						return Na;
					}),
					(G.prototype.loadMaterial = function (t) {
						var e,
							i = this,
							r = this.json,
							o = this.extensions,
							s = r.materials[t],
							a = {},
							c = s.extensions || {},
							l = [];
						if (c[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
							var h = o[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
							(e = h.getMaterialType()), l.push(h.extendParams(a, s, i));
						} else if (c[n.KHR_MATERIALS_UNLIT]) {
							var u = o[n.KHR_MATERIALS_UNLIT];
							(e = u.getMaterialType()), l.push(u.extendParams(a, s, i));
						} else {
							var d = s.pbrMetallicRoughness || {};
							if (
								((a.color = new je(1, 1, 1)),
								(a.opacity = 1),
								Array.isArray(d.baseColorFactor))
							) {
								var p = d.baseColorFactor;
								a.color.fromArray(p), (a.opacity = p[3]);
							}
							void 0 !== d.baseColorTexture &&
								l.push(i.assignTexture(a, "map", d.baseColorTexture)),
								(a.metalness =
									void 0 !== d.metallicFactor ? d.metallicFactor : 1),
								(a.roughness =
									void 0 !== d.roughnessFactor ? d.roughnessFactor : 1),
								void 0 !== d.metallicRoughnessTexture &&
									(l.push(
										i.assignTexture(
											a,
											"metalnessMap",
											d.metallicRoughnessTexture
										)
									),
									l.push(
										i.assignTexture(
											a,
											"roughnessMap",
											d.metallicRoughnessTexture
										)
									)),
								(e = this._invokeOne(function (e) {
									return e.getMaterialType && e.getMaterialType(t);
								})),
								l.push(
									this._invokeAll(function (e) {
										return (
											e.extendMaterialParams && e.extendMaterialParams(t, a)
										);
									})
								);
						}
						!0 === s.doubleSided && (a.side = 2);
						var f = s.alphaMode || O;
						return (
							f === N
								? ((a.transparent = !0), (a.depthWrite = !1))
								: ((a.transparent = !1),
								  f === D &&
										(a.alphaTest =
											void 0 !== s.alphaCutoff ? s.alphaCutoff : 0.5)),
							void 0 !== s.normalTexture &&
								e !== Je &&
								(l.push(i.assignTexture(a, "normalMap", s.normalTexture)),
								(a.normalScale = new ft(1, 1)),
								void 0 !== s.normalTexture.scale &&
									a.normalScale.set(
										s.normalTexture.scale,
										s.normalTexture.scale
									)),
							void 0 !== s.occlusionTexture &&
								e !== Je &&
								(l.push(i.assignTexture(a, "aoMap", s.occlusionTexture)),
								void 0 !== s.occlusionTexture.strength &&
									(a.aoMapIntensity = s.occlusionTexture.strength)),
							void 0 !== s.emissiveFactor &&
								e !== Je &&
								(a.emissive = new je().fromArray(s.emissiveFactor)),
							void 0 !== s.emissiveTexture &&
								e !== Je &&
								l.push(i.assignTexture(a, "emissiveMap", s.emissiveTexture)),
							Promise.all(l).then(function () {
								var r;
								return (
									(r =
										e === m
											? o[
													n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS
											  ].createMaterial(a)
											: new e(a)),
									s.name && (r.name = s.name),
									r.map && (r.map.encoding = 3001),
									r.emissiveMap && (r.emissiveMap.encoding = 3001),
									B(r, s),
									i.associations.set(r, { type: "materials", index: t }),
									s.extensions && H(o, r, s),
									r
								);
							})
						);
					}),
					(G.prototype.loadGeometries = function (t) {
						var e = this,
							i = this.extensions,
							r = this.primitiveCache;
						function o(t) {
							return i[n.KHR_DRACO_MESH_COMPRESSION]
								.decodePrimitive(t, e)
								.then(function (n) {
									return j(n, t, e);
								});
						}
						for (var s, a, c = [], l = 0, h = t.length; l < h; l++) {
							var u,
								d = t[l],
								p =
									((a = void 0),
									(a =
										(s = d).extensions &&
										s.extensions[n.KHR_DRACO_MESH_COMPRESSION])
										? "draco:" +
										  a.bufferView +
										  ":" +
										  a.indices +
										  ":" +
										  k(a.attributes)
										: s.indices + ":" + k(s.attributes) + ":" + s.mode),
								f = r[p];
							if (f) c.push(f.promise);
							else
								(u =
									d.extensions && d.extensions[n.KHR_DRACO_MESH_COMPRESSION]
										? o(d)
										: j(new xn(), d, e)),
									(r[p] = { primitive: d, promise: u }),
									c.push(u);
						}
						return Promise.all(c);
					}),
					(G.prototype.loadMesh = function (t) {
						for (
							var e,
								n = this,
								i = this.json.meshes[t],
								r = i.primitives,
								o = [],
								s = 0,
								a = r.length;
							s < a;
							s++
						) {
							var c =
								void 0 === r[s].material
									? (void 0 === (e = this.cache).DefaultMaterial &&
											(e.DefaultMaterial = new Na({
												color: 16777215,
												emissive: 0,
												metalness: 1,
												roughness: 1,
												transparent: !1,
												depthTest: !0,
												side: 0,
											})),
									  e.DefaultMaterial)
									: this.getDependency("material", r[s].material);
							o.push(c);
						}
						return (
							o.push(n.loadGeometries(r)),
							Promise.all(o).then(function (e) {
								for (
									var o = e.slice(0, e.length - 1),
										s = e[e.length - 1],
										a = [],
										c = 0,
										l = s.length;
									c < l;
									c++
								) {
									var h,
										u = s[c],
										d = r[c],
										p = o[c];
									if (
										d.mode === M ||
										d.mode === S ||
										d.mode === T ||
										void 0 === d.mode
									)
										!0 !==
											(h = !0 === i.isSkinnedMesh ? new Bo(u, p) : new Un(u, p))
												.isSkinnedMesh ||
											h.geometry.attributes.skinWeight.normalized ||
											h.normalizeSkinWeights(),
											d.mode === S
												? (h.geometry = V(h.geometry, 1))
												: d.mode === T && (h.geometry = V(h.geometry, 2));
									else if (d.mode === b) h = new rs(u, p);
									else if (d.mode === _) h = new es(u, p);
									else if (d.mode === w) h = new os(u, p);
									else {
										if (d.mode !== x)
											throw new Error(
												"THREE.GLTFLoader: Primitive mode unsupported: " +
													d.mode
											);
										h = new us(u, p);
									}
									Object.keys(h.geometry.morphAttributes).length > 0 && F(h, i),
										(h.name = i.name || "mesh_" + t),
										s.length > 1 && (h.name += "_" + c),
										B(h, i),
										n.assignFinalMaterial(h),
										a.push(h);
								}
								if (1 === a.length) return a[0];
								var f = new co();
								for (c = 0, l = a.length; c < l; c++) f.add(a[c]);
								return f;
							})
						);
					}),
					(G.prototype.loadCamera = function (t) {
						var e,
							n = this.json.cameras[t],
							i = n[n.type];
						if (i)
							return (
								"perspective" === n.type
									? (e = new Qn(
											pt.radToDeg(i.yfov),
											i.aspectRatio || 1,
											i.znear || 1,
											i.zfar || 2e6
									  ))
									: "orthographic" === n.type &&
									  (e = new Xc(
											-i.xmag,
											i.xmag,
											i.ymag,
											-i.ymag,
											i.znear,
											i.zfar
									  )),
								n.name && (e.name = n.name),
								B(e, n),
								Promise.resolve(e)
							);
						console.warn("THREE.GLTFLoader: Missing camera parameters.");
					}),
					(G.prototype.loadSkin = function (t) {
						var e = this.json.skins[t],
							n = { joints: e.joints };
						return void 0 === e.inverseBindMatrices
							? Promise.resolve(n)
							: this.getDependency("accessor", e.inverseBindMatrices).then(
									function (t) {
										return (n.inverseBindMatrices = t), n;
									}
							  );
					}),
					(G.prototype.loadAnimation = function (t) {
						for (
							var e = this.json.animations[t],
								n = [],
								i = [],
								r = [],
								o = [],
								s = [],
								a = 0,
								c = e.channels.length;
							a < c;
							a++
						) {
							var l = e.channels[a],
								h = e.samplers[l.sampler],
								u = l.target,
								d = void 0 !== u.node ? u.node : u.id,
								p = void 0 !== e.parameters ? e.parameters[h.input] : h.input,
								f = void 0 !== e.parameters ? e.parameters[h.output] : h.output;
							n.push(this.getDependency("node", d)),
								i.push(this.getDependency("accessor", p)),
								r.push(this.getDependency("accessor", f)),
								o.push(h),
								s.push(u);
						}
						return Promise.all([
							Promise.all(n),
							Promise.all(i),
							Promise.all(r),
							Promise.all(o),
							Promise.all(s),
						]).then(function (n) {
							for (
								var i = n[0],
									r = n[1],
									o = n[2],
									s = n[3],
									a = n[4],
									c = [],
									l = 0,
									h = i.length;
								l < h;
								l++
							) {
								var u = i[l],
									d = r[l],
									p = o[l],
									f = s[l],
									m = a[l];
								if (void 0 !== u) {
									var g;
									switch (
										(u.updateMatrix(), (u.matrixAutoUpdate = !0), C[m.path])
									) {
										case C.weights:
											g = Qa;
											break;
										case C.rotation:
											g = tc;
											break;
										case C.position:
										case C.scale:
										default:
											g = nc;
									}
									var v = u.name ? u.name : u.uuid,
										x = void 0 !== f.interpolation ? I[f.interpolation] : 2301,
										b = [];
									C[m.path] === C.weights
										? u.traverse(function (t) {
												!0 === t.isMesh &&
													t.morphTargetInfluences &&
													b.push(t.name ? t.name : t.uuid);
										  })
										: b.push(v);
									var w = p.array;
									if (p.normalized) {
										var _;
										if (w.constructor === Int8Array) _ = 1 / 127;
										else if (w.constructor === Uint8Array) _ = 1 / 255;
										else if (w.constructor == Int16Array) _ = 1 / 32767;
										else {
											if (w.constructor !== Uint16Array)
												throw new Error(
													"THREE.GLTFLoader: Unsupported output accessor component type."
												);
											_ = 1 / 65535;
										}
										for (
											var M = new Float32Array(w.length), S = 0, T = w.length;
											S < T;
											S++
										)
											M[S] = w[S] * _;
										w = M;
									}
									for (S = 0, T = b.length; S < T; S++) {
										var E = new g(b[S] + "." + C[m.path], d.array, w, x);
										"CUBICSPLINE" === f.interpolation &&
											((E.createInterpolant = function (t) {
												return new y(
													this.times,
													this.values,
													this.getValueSize() / 3,
													t
												);
											}),
											(E.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline =
												!0)),
											c.push(E);
									}
								}
							}
							return new ic(e.name ? e.name : "animation_" + t, void 0, c);
						});
					}),
					(G.prototype.loadNode = function (t) {
						var e = this.json,
							i = this.extensions,
							r = this,
							o = e.nodes[t];
						return (function () {
							var t = [];
							if (
								(void 0 !== o.mesh &&
									t.push(
										r.getDependency("mesh", o.mesh).then(function (t) {
											var e = r._getNodeRef(r.meshCache, o.mesh, t);
											return (
												void 0 !== o.weights &&
													e.traverse(function (t) {
														if (t.isMesh)
															for (var e = 0, n = o.weights.length; e < n; e++)
																t.morphTargetInfluences[e] = o.weights[e];
													}),
												e
											);
										})
									),
								void 0 !== o.camera &&
									t.push(
										r.getDependency("camera", o.camera).then(function (t) {
											return r._getNodeRef(r.cameraCache, o.camera, t);
										})
									),
								o.extensions &&
									o.extensions[n.KHR_LIGHTS_PUNCTUAL] &&
									void 0 !== o.extensions[n.KHR_LIGHTS_PUNCTUAL].light)
							) {
								var e = o.extensions[n.KHR_LIGHTS_PUNCTUAL].light;
								t.push(
									r.getDependency("light", e).then(function (t) {
										return r._getNodeRef(r.lightCache, e, t);
									})
								);
							}
							return Promise.all(t);
						})().then(function (e) {
							var n;
							if (
								(n =
									!0 === o.isBone
										? new jo()
										: e.length > 1
										? new co()
										: 1 === e.length
										? e[0]
										: new Qt()) !== e[0]
							)
								for (var s = 0, a = e.length; s < a; s++) n.add(e[s]);
							if (
								(o.name &&
									((n.userData.name = o.name),
									(n.name = ql.sanitizeNodeName(o.name))),
								B(n, o),
								o.extensions && H(i, n, o),
								void 0 !== o.matrix)
							) {
								var c = new Dt();
								c.fromArray(o.matrix), n.applyMatrix4(c);
							} else void 0 !== o.translation && n.position.fromArray(o.translation), void 0 !== o.rotation && n.quaternion.fromArray(o.rotation), void 0 !== o.scale && n.scale.fromArray(o.scale);
							return r.associations.set(n, { type: "nodes", index: t }), n;
						});
					}),
					(G.prototype.loadScene = (function () {
						function t(e, n, i, r) {
							var o = i.nodes[e];
							return r
								.getDependency("node", e)
								.then(function (t) {
									return void 0 === o.skin
										? t
										: r
												.getDependency("skin", o.skin)
												.then(function (t) {
													for (
														var n = [], i = 0, o = (e = t).joints.length;
														i < o;
														i++
													)
														n.push(r.getDependency("node", e.joints[i]));
													return Promise.all(n);
												})
												.then(function (n) {
													return (
														t.traverse(function (t) {
															if (t.isMesh) {
																for (
																	var i = [], r = [], o = 0, s = n.length;
																	o < s;
																	o++
																) {
																	var a = n[o];
																	if (a) {
																		i.push(a);
																		var c = new Dt();
																		void 0 !== e.inverseBindMatrices &&
																			c.fromArray(
																				e.inverseBindMatrices.array,
																				16 * o
																			),
																			r.push(c);
																	} else
																		console.warn(
																			'THREE.GLTFLoader: Joint "%s" could not be found.',
																			e.joints[o]
																		);
																}
																t.bind(new Go(i, r), t.matrixWorld);
															}
														}),
														t
													);
												});
									var e;
								})
								.then(function (e) {
									n.add(e);
									var s = [];
									if (o.children)
										for (var a = o.children, c = 0, l = a.length; c < l; c++) {
											var h = a[c];
											s.push(t(h, e, i, r));
										}
									return Promise.all(s);
								});
						}
						return function (e) {
							var n = this.json,
								i = this.extensions,
								r = this.json.scenes[e],
								o = new co();
							r.name && (o.name = r.name), B(o, r), r.extensions && H(i, o, r);
							for (
								var s = r.nodes || [], a = [], c = 0, l = s.length;
								c < l;
								c++
							)
								a.push(t(s[c], o, n, this));
							return Promise.all(a).then(function () {
								return o;
							});
						};
					})()),
					t
				);
			})(),
			fu = function (t) {
				cc.call(this, t),
					(this.decoderPath = ""),
					(this.decoderConfig = {}),
					(this.decoderBinary = null),
					(this.decoderPending = null),
					(this.workerLimit = 4),
					(this.workerPool = []),
					(this.workerNextTaskID = 1),
					(this.workerSourceURL = ""),
					(this.defaultAttributeIDs = {
						position: "POSITION",
						normal: "NORMAL",
						color: "COLOR",
						uv: "TEX_COORD",
					}),
					(this.defaultAttributeTypes = {
						position: "Float32Array",
						normal: "Float32Array",
						color: "Float32Array",
						uv: "Float32Array",
					});
			};
		(fu.prototype = Object.assign(Object.create(cc.prototype), {
			constructor: fu,
			setDecoderPath: function (t) {
				return (this.decoderPath = t), this;
			},
			setDecoderConfig: function (t) {
				return (this.decoderConfig = t), this;
			},
			setWorkerLimit: function (t) {
				return (this.workerLimit = t), this;
			},
			setVerbosity: function () {
				console.warn(
					"THREE.DRACOLoader: The .setVerbosity() method has been removed."
				);
			},
			setDrawMode: function () {
				console.warn(
					"THREE.DRACOLoader: The .setDrawMode() method has been removed."
				);
			},
			setSkipDequantization: function () {
				console.warn(
					"THREE.DRACOLoader: The .setSkipDequantization() method has been removed."
				);
			},
			load: function (t, e, n, i) {
				var r = new hc(this.manager);
				r.setPath(this.path),
					r.setResponseType("arraybuffer"),
					r.setRequestHeader(this.requestHeader),
					"use-credentials" === this.crossOrigin && r.setWithCredentials(!0),
					r.load(
						t,
						(t) => {
							var n = {
								attributeIDs: this.defaultAttributeIDs,
								attributeTypes: this.defaultAttributeTypes,
								useUniqueIDs: !1,
							};
							this.decodeGeometry(t, n).then(e).catch(i);
						},
						n,
						i
					);
			},
			decodeDracoFile: function (t, e, n, i) {
				var r = {
					attributeIDs: n || this.defaultAttributeIDs,
					attributeTypes: i || this.defaultAttributeTypes,
					useUniqueIDs: !!n,
				};
				this.decodeGeometry(t, r).then(e);
			},
			decodeGeometry: function (t, e) {
				for (var n in e.attributeTypes) {
					var i = e.attributeTypes[n];
					void 0 !== i.BYTES_PER_ELEMENT && (e.attributeTypes[n] = i.name);
				}
				var r,
					o = JSON.stringify(e);
				if (fu.taskCache.has(t)) {
					var s = fu.taskCache.get(t);
					if (s.key === o) return s.promise;
					if (0 === t.byteLength)
						throw new Error(
							"THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
						);
				}
				var a = this.workerNextTaskID++,
					c = t.byteLength,
					l = this._getWorker(a, c)
						.then(
							(n) => (
								(r = n),
								new Promise((n, i) => {
									(r._callbacks[a] = { resolve: n, reject: i }),
										r.postMessage(
											{ type: "decode", id: a, taskConfig: e, buffer: t },
											[t]
										);
								})
							)
						)
						.then((t) => this._createGeometry(t.geometry));
				return (
					l
						.catch(() => !0)
						.then(() => {
							r && a && this._releaseTask(r, a);
						}),
					fu.taskCache.set(t, { key: o, promise: l }),
					l
				);
			},
			_createGeometry: function (t) {
				var e = new xn();
				t.index && e.setIndex(new $e(t.index.array, 1));
				for (var n = 0; n < t.attributes.length; n++) {
					var i = t.attributes[n],
						r = i.name,
						o = i.array,
						s = i.itemSize;
					e.setAttribute(r, new $e(o, s));
				}
				return e;
			},
			_loadLibrary: function (t, e) {
				var n = new hc(this.manager);
				return (
					n.setPath(this.decoderPath),
					n.setResponseType(e),
					new Promise((e, i) => {
						n.load(t, e, void 0, i);
					})
				);
			},
			preload: function () {
				return this._initDecoder(), this;
			},
			_initDecoder: function () {
				if (this.decoderPending) return this.decoderPending;
				var t =
						"object" != typeof WebAssembly || "js" === this.decoderConfig.type,
					e = [];
				return (
					t
						? e.push(this._loadLibrary("draco_decoder.js", "text"))
						: (e.push(this._loadLibrary("draco_wasm_wrapper.js", "text")),
						  e.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))),
					(this.decoderPending = Promise.all(e).then((e) => {
						var n = e[0];
						t || (this.decoderConfig.wasmBinary = e[1]);
						var i = fu.DRACOWorker.toString(),
							r = [
								"/* draco decoder */",
								n,
								"",
								"/* worker */",
								i.substring(i.indexOf("{") + 1, i.lastIndexOf("}")),
							].join("\n");
						this.workerSourceURL = URL.createObjectURL(new Blob([r]));
					})),
					this.decoderPending
				);
			},
			_getWorker: function (t, e) {
				return this._initDecoder().then(() => {
					var n;
					this.workerPool.length < this.workerLimit
						? (((n = new Worker(this.workerSourceURL))._callbacks = {}),
						  (n._taskCosts = {}),
						  (n._taskLoad = 0),
						  n.postMessage({
								type: "init",
								decoderConfig: this.decoderConfig,
						  }),
						  (n.onmessage = function (t) {
								var e = t.data;
								switch (e.type) {
									case "decode":
										n._callbacks[e.id].resolve(e);
										break;
									case "error":
										n._callbacks[e.id].reject(e);
										break;
									default:
										console.error(
											'THREE.DRACOLoader: Unexpected message, "' + e.type + '"'
										);
								}
						  }),
						  this.workerPool.push(n))
						: this.workerPool.sort(function (t, e) {
								return t._taskLoad > e._taskLoad ? -1 : 1;
						  });
					return (
						((n = this.workerPool[this.workerPool.length - 1])._taskCosts[t] =
							e),
						(n._taskLoad += e),
						n
					);
				});
			},
			_releaseTask: function (t, e) {
				(t._taskLoad -= t._taskCosts[e]),
					delete t._callbacks[e],
					delete t._taskCosts[e];
			},
			debug: function () {
				console.log(
					"Task load: ",
					this.workerPool.map((t) => t._taskLoad)
				);
			},
			dispose: function () {
				for (var t = 0; t < this.workerPool.length; ++t)
					this.workerPool[t].terminate();
				return (this.workerPool.length = 0), this;
			},
		})),
			(fu.DRACOWorker = function () {
				var t, e;
				function n(t, e, n, i, r, o) {
					var s,
						a,
						c = o.num_components(),
						l = n.num_points() * c;
					switch (r) {
						case Float32Array:
							(s = new t.DracoFloat32Array()),
								e.GetAttributeFloatForAllPoints(n, o, s),
								(a = new Float32Array(l));
							break;
						case Int8Array:
							(s = new t.DracoInt8Array()),
								e.GetAttributeInt8ForAllPoints(n, o, s),
								(a = new Int8Array(l));
							break;
						case Int16Array:
							(s = new t.DracoInt16Array()),
								e.GetAttributeInt16ForAllPoints(n, o, s),
								(a = new Int16Array(l));
							break;
						case Int32Array:
							(s = new t.DracoInt32Array()),
								e.GetAttributeInt32ForAllPoints(n, o, s),
								(a = new Int32Array(l));
							break;
						case Uint8Array:
							(s = new t.DracoUInt8Array()),
								e.GetAttributeUInt8ForAllPoints(n, o, s),
								(a = new Uint8Array(l));
							break;
						case Uint16Array:
							(s = new t.DracoUInt16Array()),
								e.GetAttributeUInt16ForAllPoints(n, o, s),
								(a = new Uint16Array(l));
							break;
						case Uint32Array:
							(s = new t.DracoUInt32Array()),
								e.GetAttributeUInt32ForAllPoints(n, o, s),
								(a = new Uint32Array(l));
							break;
						default:
							throw new Error("THREE.DRACOLoader: Unexpected attribute type.");
					}
					for (var h = 0; h < l; h++) a[h] = s.GetValue(h);
					return t.destroy(s), { name: i, array: a, itemSize: c };
				}
				onmessage = function (i) {
					var r = i.data;
					switch (r.type) {
						case "init":
							(t = r.decoderConfig),
								(e = new Promise(function (e) {
									(t.onModuleLoaded = function (t) {
										e({ draco: t });
									}),
										DracoDecoderModule(t);
								}));
							break;
						case "decode":
							var o = r.buffer,
								s = r.taskConfig;
							e.then((t) => {
								var e = t.draco,
									i = new e.Decoder(),
									a = new e.DecoderBuffer();
								a.Init(new Int8Array(o), o.byteLength);
								try {
									var c = (function (t, e, i, r) {
											var o,
												s,
												a = r.attributeIDs,
												c = r.attributeTypes,
												l = e.GetEncodedGeometryType(i);
											if (l === t.TRIANGULAR_MESH)
												(o = new t.Mesh()), (s = e.DecodeBufferToMesh(i, o));
											else {
												if (l !== t.POINT_CLOUD)
													throw new Error(
														"THREE.DRACOLoader: Unexpected geometry type."
													);
												(o = new t.PointCloud()),
													(s = e.DecodeBufferToPointCloud(i, o));
											}
											if (!s.ok() || 0 === o.ptr)
												throw new Error(
													"THREE.DRACOLoader: Decoding failed: " + s.error_msg()
												);
											var h = { index: null, attributes: [] };
											for (var u in a) {
												var d,
													p,
													f = self[c[u]];
												if (r.useUniqueIDs)
													(p = a[u]), (d = e.GetAttributeByUniqueId(o, p));
												else {
													if (-1 === (p = e.GetAttributeId(o, t[a[u]])))
														continue;
													d = e.GetAttribute(o, p);
												}
												h.attributes.push(n(t, e, o, u, f, d));
											}
											if (l === t.TRIANGULAR_MESH) {
												for (
													var m = o.num_faces(),
														g = new Uint32Array(3 * m),
														v = new t.DracoInt32Array(),
														y = 0;
													y < m;
													++y
												) {
													e.GetFaceFromMesh(o, y, v);
													for (var x = 0; x < 3; ++x)
														g[3 * y + x] = v.GetValue(x);
												}
												(h.index = { array: g, itemSize: 1 }), t.destroy(v);
											}
											return t.destroy(o), h;
										})(e, i, a, s),
										l = c.attributes.map((t) => t.array.buffer);
									c.index && l.push(c.index.array.buffer),
										self.postMessage(
											{ type: "decode", id: r.id, geometry: c },
											l
										);
								} catch (t) {
									console.error(t),
										self.postMessage({
											type: "error",
											id: r.id,
											error: t.message,
										});
								} finally {
									e.destroy(a), e.destroy(i);
								}
							});
					}
				};
			}),
			(fu.taskCache = new WeakMap()),
			(fu.setDecoderPath = function () {
				console.warn(
					"THREE.DRACOLoader: The .setDecoderPath() method has been removed. Use instance methods."
				);
			}),
			(fu.setDecoderConfig = function () {
				console.warn(
					"THREE.DRACOLoader: The .setDecoderConfig() method has been removed. Use instance methods."
				);
			}),
			(fu.releaseDecoderModule = function () {
				console.warn(
					"THREE.DRACOLoader: The .releaseDecoderModule() method has been removed. Use instance methods."
				);
			}),
			(fu.getDecoderModule = function () {
				console.warn(
					"THREE.DRACOLoader: The .getDecoderModule() method has been removed. Use instance methods."
				);
			});
		const mu = new pu(),
			gu = new fu();
		gu.setDecoderPath("./draco/"), mu.setDRACOLoader(gu);
		const vu = Iu(
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/bezel-processed.glb",
				!0
			),
			yu = Iu(
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/expertise-processed.glb"
			),
			xu = Iu(
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/prototypes-processed.glb"
			),
			bu = Iu(
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/ring1-processed.glb"
			),
			wu = Iu(
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/ring2-processed.glb"
			),
			_u = Iu(
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/head1-processed.glb"
			),
			Mu = Iu(
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/head2-processed.glb"
			),
			Su = Iu(
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/marquiseBig-processed.glb"
			),
			Tu = Iu(
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/marquiseMedium-processed.glb"
			),
			Eu = Iu(
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/marquiseSmall-processed.glb"
			),
			Au = Iu(
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/pearBig-processed.glb"
			),
			Lu = Iu(
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/pearMedium-processed.glb"
			),
			Ru = Iu(
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/pearSmall-processed.glb"
			),
			Pu = Iu(
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/workbench-misc-processed.glb"
			),
			Cu = Iu(
				"https://cad-portfolio.s3.eu-west-3.amazonaws.com/models/workbench-board-processed.glb"
			);
		function Iu(t, e) {
			return new Promise((n) => {
				e
					? mu.load(t, (t) => {
							n(t.scene);
					  })
					: setTimeout(() => {
							mu.load(t, (t) => {
								n(t.scene);
							});
					  }, 1e3);
			});
		}
		const Ou = new Ml(),
			Du = document.createElement("DIV");
		Du.id = "homepage-container";
		const Nu = document.createElement("DIV");
		(Nu.id = "dummy-container"), document.body.append(Nu);
		const zu = [];
		for (let t = 0; t < 6; t++) {
			const t = document.createElement("DIV");
			t.classList.add("scene-container");
			const e = document.createElement("DIV");
			e.classList.add("scene-fixed-container"),
				zu.push(e),
				t.append(e),
				Du.append(t);
		}
		zu.forEach((t, e, n) => {
			if (e === n.length - 1) return;
			const i = document.createElement("I");
			i.classList.add("fa", "fa-caret-down"),
				0 === e && i.classList.add("first"),
				i.addEventListener("click", () => {
					window.scrollTo({ top: Gu() * (e + 1), behavior: "smooth" });
				}),
				t.append(i);
		});
		const Uu = [
			(function (t) {
				t.style.background =
					"radial-gradient(ellipse at 25% 25%, #ffffff 0%, #cdd0d4 62%, #97a4b8 100%)";
				const { scene: e, camera: n, renderer: i } = iu(t);
				let r = 1;
				new Wn(0.2, 0.2, 0.2);
				const o = ru({ color: 16765409, z: 10, x: -2, y: 1, intensity: 0.8 });
				e.add(o, new Jc(12646652, 0.25));
				const s = du();
				e.add(s.container);
				const a = [],
					c = new Qt(),
					l = new Fa({
						transparent: !0,
						opacity: 0.8,
						side: 1,
						color: 16777215,
					}),
					h = new Fa({
						transparent: !0,
						opacity: 0.7,
						side: 0,
						color: 16777215,
					});
				vu.then((t) => {
					t.children[0].geometry.computeVertexNormals(),
						(a[0] = new Yo(t.children[0].geometry, l, 9)),
						(a[1] = new Yo(t.children[0].geometry, h, 9)),
						a.forEach((t, n) => {
							t.instanceMatrix.setUsage(35048),
								(t.renderOrder = n),
								(t.position.x -= 1.55),
								(t.rotation.x += Math.PI / 1.3),
								t.scale.setScalar(0.7);
							const i = new co();
							(i.rotation.z += 0.3), i.add(t), e.add(i);
						});
				});
				const u = new co();
				function d() {
					(r = window.innerHeight / window.innerWidth),
						(n.position.z = r > 1 ? r : 1),
						n.lookAt(0, 0, 0);
				}
				e.add(u),
					u.add(n),
					(n.position.z = 1),
					d(),
					window.addEventListener("resize", d);
				const p = new ft();
				let f = 0;
				return {
					animate: function (t) {
						if (((f += t / 80), a)) {
							a.forEach((t) => {
								t.position.y = 0.02 * Math.sin(f);
							});
							const t = new Et(),
								e = new Et(0, 1, 0);
							for (let n = 0; n < 9; n++) {
								const i = 0.07 * Math.sin(f + 1.1 * n);
								c.position.copy(t),
									(c.rotation.y = i),
									c.updateMatrix(),
									a.forEach((t) => {
										t.setMatrixAt(n, c.matrix);
									});
								const r = new Et(0.558, 0, 0);
								r.applyAxisAngle(e, i), t.add(r);
							}
							a.forEach((t) => {
								t.instanceMatrix.needsUpdate = !0;
							});
						}
						(p.y = 0.25 * -hu.x),
							(p.x = 0.15 * -hu.y),
							(u.rotation.x += 0.02 * (p.x - u.rotation.x) * t),
							(u.rotation.y += 0.02 * (p.y - u.rotation.y) * t),
							n.lookAt(0, 0, 0),
							s.update(t * r),
							i.render(e, n);
					},
				};
			})(zu[0]),
			(function (t) {
				t.style.background =
					"radial-gradient(ellipse at 25% 25%, #ffffff 0%, #cdd0d4 62%, #022559 100%)";
				const { scene: e, camera: n, renderer: i } = iu(t);
				(i.domElement.style.opacity = "0.85"),
					(e.fog = new go(38399, 0.25, 1.1)),
					(e.background = new je(16250871)),
					yu.then((t) => {
						e.add(t),
							t.traverse((t) => {
								t.material && (t.material.side = 0),
									(t.castShadow = !0),
									(t.receiveShadow = !0);
							});
					});
				var r = new Un(new li(2, 2), new Fa({ color: 13750737 }));
				(r.rotation.x = -Math.PI / 2), (r.receiveShadow = !0), e.add(r);
				const o = ru({
					bias: -1e-4,
					color: 16777215,
					x: -1,
					y: 2,
					z: -2,
					intensity: 0.57,
					width: 0.5,
					near: 2,
					far: 4,
					resolution: 1024,
				});
				(o.shadow.radius = 5), e.add(o), e.add(new Jc(16777215, 0.55));
				const s = new co();
				function a() {
					let i = t.clientHeight / t.clientWidth;
					if ((n.position.set(0, 0.4, 0.2), i && i > 1)) {
						n.position.multiplyScalar(i), n.lookAt(0, 0, 0.15 * (i - 1));
						const t = n.position.length();
						(e.fog.near = t - 0.15), (e.fog.far = t + 0.45);
					} else n.lookAt(0, 0, 0), (e.fog.near = 0.25), (e.fog.far = 1.1);
				}
				e.add(s),
					s.add(n),
					setTimeout(a, 0),
					window.addEventListener("resize", a);
				const c = new ft();
				let l = 0;
				function h(t) {
					(c.y = 0.2 * -hu.x),
						(c.x = 0.2 * -hu.y),
						(s.rotation.x += 0.02 * (c.x - s.rotation.x) * t),
						(s.rotation.y += 0.02 * (c.y - s.rotation.y) * t),
						(l = -0.04 * hu.x),
						(s.position.x += 0.05 * (l - s.position.x) * t),
						i.render(e, n);
				}
				return (
					yu.then(() => {
						h(1);
					}),
					{ animate: h }
				);
			})(zu[1]),
			(function (t) {
				t.style.background =
					"radial-gradient(ellipse at 25% 25%, #ffffff 0%, #cdd0d4 62%, #022559 100%)";
				const { scene: e, camera: n, renderer: i } = iu(t);
				(i.localClippingEnabled = !0),
					(i.domElement.style.opacity = "0.8"),
					(e.background = new je(16772595)),
					(e.fog = new go(16772595, 0.25, 1)),
					new Ml();
				var r = new Un(new li(8, 8), new Fa({ color: 13750737 }));
				(r.rotation.x = -Math.PI / 2),
					(r.receiveShadow = !0),
					e.add(r),
					xu.then((t) => {
						t.scale.setScalar(0.01),
							e.add(t),
							t.traverse((t) => {
								t.material && (t.material.side = 0),
									(t.castShadow = !0),
									(t.receiveShadow = !0);
							});
					});
				const o = new co();
				o.position.set(0.005, 0.07, -0.065), (o.rotation.x = -0.57), e.add(o);
				const s = new gc(),
					a = new mc()
						.setPath(
							"https://cad-portfolio.s3.eu-west-3.amazonaws.com/textures/expertise-cubemap/"
						)
						.load(["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]),
					c = new Un(
						new li(0.24, 0.17),
						new Fa({
							reflectivity: 1,
							transparent: !0,
							opacity: 0.3,
							envMap: a,
						})
					);
				c.position.set(0.005, 0.07, -0.0635),
					(c.rotation.x = -0.57),
					(c.receiveShadow = !0),
					e.add(c);
				const l = [
						new Le(new Et(0, -1, 0), 0.14),
						new Le(new Et(0, 1, 0), -0.01),
						new Le(new Et(-1, 0, 0), 0.12),
						new Le(new Et(1, 0, 0), 0.12),
					],
					h = [];
				for (let t = 0; t < 3; t++) {
					let e = new Un(new li(0.23, 0.23));
					(e.position.x = 0.23 * t),
						o.add(e),
						h.push(e),
						s.load(
							`https://cad-portfolio.s3.eu-west-3.amazonaws.com/textures/viewer${t}.jpg`,
							(t) => {
								const n = new Fa({ map: t, clippingPlanes: l });
								e.material = n;
							}
						);
				}
				const u = ru({
					bias: -1e-4,
					color: 16777215,
					x: -1,
					y: 2,
					z: 0.5,
					intensity: 0.8,
					width: 0.5,
					near: 2,
					far: 4,
					resolution: 1024,
				});
				(u.shadow.radius = 3.5), e.add(u), e.add(new Jc(16777215, 0.35));
				const d = new co();
				function p() {
					let i = t.clientHeight / t.clientWidth;
					if ((n.position.set(0.05, 0.2, 0.2), i && i > 1)) {
						n.position.multiplyScalar(1.1 * i),
							n.lookAt(0.05, 0.08, -0.11 * (1 - i));
						const t = n.position.length();
						(e.fog.near = t - 0.05), (e.fog.far = t + 0.3);
					} else n.lookAt(0.05, 0.08, 0), (e.fog.near = 0.25), (e.fog.far = 1);
				}
				e.add(d),
					d.add(n),
					setTimeout(p, 0),
					window.addEventListener("resize", p);
				const f = new ft();
				let m = 0;
				function g(t) {
					(m += (m + t * (1 / 60) * 1e3) / 3e3),
						m > 1 && ((m = 0), h.push(h.shift())),
						h.forEach((t, e) => {
							const n = ou(m);
							t.position.x = 0.23 * e - 0.23 * n;
						}),
						(f.y = 0.3 * -hu.x),
						(d.rotation.y += 0.02 * (f.y - d.rotation.y) * t),
						i.render(e, n);
				}
				return (
					xu.then(() => {
						g(1);
					}),
					{ animate: g }
				);
			})(zu[2]),
			(function (t) {
				t.style.background =
					"radial-gradient(ellipse at 25% 25%, #ffffff 0%, #cdd0d4 62%, #97a4b8 100%)";
				const { scene: e, camera: n, renderer: i } = iu(t);
				e.fog = new mo(16777215, 0.9);
				const r = ru({
					color: 16764895,
					x: -1,
					y: 2,
					z: 1,
					intensity: 2,
					resolution: 1024,
					width: 1,
				});
				e.add(r), e.add(new Jc(16777215, 0.5));
				const o = new co();
				e.add(o);
				const s = new Na({
						envMap: new mc()
							.setPath(
								"https://cad-portfolio.s3.eu-west-3.amazonaws.com/textures/expertise-cubemap/"
							)
							.load([
								"px.jpg",
								"nx.jpg",
								"py.jpg",
								"ny.jpg",
								"pz.jpg",
								"nz.jpg",
							]),
						roughnessMap: new gc().load(
							"https://cad-portfolio.s3.eu-west-3.amazonaws.com/textures/metal_roughness.jpg"
						),
						metalness: 1,
						transparent: !0,
					}),
					a = s.clone(),
					c = new co(),
					l = new co(),
					h = new co(),
					u = new co();
				bu.then((t) => {
					p(t, c);
				}),
					wu.then((t) => {
						p(t, l);
					}),
					_u.then((t) => {
						p(t, h);
					}),
					Mu.then((t) => {
						p(t, u);
					});
				const d = new Qt();
				function p(t, e) {
					t.scale.setScalar(0.01),
						t.traverse((t) => {
							t.isMesh && (t.material = s);
						}),
						e.add(t),
						o.add(e),
						t.traverse((t) => {
							t.material && (t.material.side = 0),
								(t.castShadow = !0),
								(t.receiveShadow = !0);
						});
				}
				function f(t, e) {
					if (!e.forEach) return;
					t.children[0].geometry.scale(0.01, 0.01, 0.01),
						t.children[0].geometry.rotateX(Math.PI / 2);
					const n = new Yo(t.children[0].geometry, a, e.length);
					n.instanceMatrix.setUsage(35048),
						o.add(n),
						e.forEach((t, e) => {
							d.position.set(t.pos[0], t.pos[1], t.pos[2]),
								d.rotation.set(t.rot[0], t.rot[1], t.rot[2]),
								d.updateMatrix(),
								n.setMatrixAt(e, d.matrix);
						}),
						(n.instanceMatrix.needsUpdate = !0);
				}
				Su.then((t) => {
					f(t, [
						{ pos: [0.045, 0.1, 0.005], rot: [0, Math.PI / 2.3, 0] },
						{ pos: [0.032, 0.1, -0.03], rot: [0, 0.1, 0] },
						{ pos: [0.065, 0.1, -0.0135], rot: [0, Math.PI / 1.75, 0] },
					]);
				}),
					Tu.then((t) => {
						f(t, [
							{ pos: [0.051, 0.104, -0.041], rot: [0.1, 0, 0.1] },
							{ pos: [0.082, 0.104, -0.032], rot: [0.5, Math.PI / 1.75, -0.5] },
						]);
					}),
					Eu.then((t) => {
						f(t, [
							{ pos: [0.069, 0.109, -0.057], rot: [0.35, 0, 0.2] },
							{ pos: [0.083, 0.117, -0.069], rot: [0.4, -0.15, 0.2] },
							{ pos: [0.096, 0.112, -0.052], rot: [1, Math.PI / 1.5, -0.8] },
						]);
					}),
					Au.then((t) => {
						f(t, [
							{ pos: [-0.047, 0.1, -0.006], rot: [0, -Math.PI / 1.6, 0] },
							{ pos: [-0.065, 0.101, 0.014], rot: [0, -Math.PI / 1.9, 0.12] },
						]);
					}),
					Lu.then((t) => {
						f(t, [
							{ pos: [-0.029, 0.101, 0.028], rot: [0, 0.2, 0] },
							{ pos: [-0.048, 0.103, 0.042], rot: [-0.12, 0.2, -0.1] },
							{ pos: [-0.08, 0.105, 0.036], rot: [-0.5, -Math.PI / 2.4, -0.3] },
						]);
					}),
					Ru.then((t) => {
						f(t, [
							{ pos: [-0.063, 0.107, 0.058], rot: [-0.2, 0.15, -0.15] },
							{
								pos: [-0.089, 0.109, 0.056],
								rot: [-0.7, -Math.PI / 2.5, -0.5],
							},
							{ pos: [-0.079, 0.112, 0.077], rot: [-0.27, -0.15, -0.15] },
						]);
					});
				const m = new co();
				e.add(m), m.add(n), n.position.set(0.3, 0.3, 0.4), n.lookAt(0, 0, 0);
				const g = new co();
				e.add(g);
				const v = du();
				(v.container.renderOrder = -1),
					v.container.scale.setScalar(0.65),
					(v.container.rotation.y += Math.PI / 5),
					g.add(v.container);
				const y = new ft();
				function x(t) {
					(o.rotation.y += 0.005 * t),
						(y.y = 2 * -hu.x),
						(y.x = 0.4 * -hu.y),
						(m.rotation.x += 0.02 * (y.x - m.rotation.x) * t),
						(m.rotation.y += 0.02 * (y.y - m.rotation.y) * t),
						(g.rotation.x += 0.0185 * (y.x - m.rotation.x) * t),
						(g.rotation.y += 0.0185 * (y.y - m.rotation.y) * t),
						i.render(e, n),
						v.update(t);
				}
				return (
					Promise.all([bu, wu, _u, Mu]).then(() => {
						x(1);
					}),
					{ animate: x }
				);
			})(zu[3]),
			(function (t) {
				const { scene: e, camera: n, renderer: i } = iu(t);
				(e.background = new je(16765406)),
					(e.fog = new go(16765406, 0.48, 1.12)),
					Cu.then((t) => {
						(t.position.z += 0.18),
							(t.position.x -= 0.052),
							t.scale.setScalar(0.02),
							e.add(t),
							t.traverse((t) => {
								t.material && (t.material.side = 0),
									(t.castShadow = !0),
									(t.receiveShadow = !0);
							});
					}),
					Pu.then((t) => {
						(t.position.z += 0.18),
							(t.position.x -= 0.052),
							t.scale.setScalar(0.02),
							e.add(t),
							t.traverse((t) => {
								if (
									(t.material && (t.material.side = 0),
									(t.castShadow = !0),
									(t.receiveShadow = !0),
									t.isMesh)
								) {
									const n = t.clone(),
										i = t.material.clone();
									(n.material = i),
										(i.side = 1),
										(n.position.z += 0.18),
										(n.position.x -= 0.052),
										(n.position.y -= 0.0012),
										n.scale.setScalar(0.02),
										e.add(n);
								}
							});
					});
				const r = ru({
					bias: -5e-4,
					color: 16777215,
					x: -0.3,
					y: 4,
					z: -1,
					intensity: 0.85,
					width: 0.71,
					near: 3.8,
					far: 4.5,
					resolution: 1024,
				});
				(r.shadow.radius = 5),
					(r.target.position.z -= 0.5),
					e.add(r, new Jc(16777215, 0.25));
				let o = 0;
				const s = new co();
				function a() {
					let i = t.clientHeight / t.clientWidth;
					if ((n.position.set(-0.15, 0.6, 0.1), i && i > 1)) {
						n.position.multiplyScalar(i), (o = 0.12 * (i - 1));
						const t = n.position.length();
						(e.fog.near = t - 0.15), (e.fog.far = t + 0.5);
					} else
						n.lookAt(0, 0, 0), (e.fog.near = 0.48), (e.fog.far = 1.12), (o = 0);
				}
				(s.position.z += 0.3),
					e.add(s),
					s.add(n),
					setTimeout(a, 0),
					window.addEventListener("resize", a);
				const c = new ft(),
					l = new ft(),
					h = new Et(0, 0, 0.15);
				function u(t) {
					(c.x = 0.05 * hu.x),
						(c.y = 0.05 * hu.y + 0.3),
						(s.position.x += 0.02 * (c.x - s.position.x) * t),
						(s.position.z += 0.02 * (c.y - s.position.z) * t),
						(l.x = 0.02 * hu.x - o),
						(l.y = 0.02 * hu.y + 0.15),
						(h.x += 0.05 * (l.x - h.x) * t),
						(h.z += 0.05 * (l.y - h.z) * t),
						n.lookAt(h),
						i.render(e, n);
				}
				return (
					Promise.all([Pu, Cu]).then(() => {
						u(1);
					}),
					{ animate: u }
				);
			})(zu[4]),
			(function (t) {
				t.style.background =
					"radial-gradient(ellipse at 25% 25%, #ffffff 0%, #cdd0d4 62%, #8c8e91 100%)";
				const { scene: e, camera: n, renderer: i } = iu(t);
				(n.position.z = -1), n.lookAt(0, 0, 0);
				const r = du();
				e.add(r.container);
				const o = new co();
				e.add(o), (n.position.z = 1), n.lookAt(0, 0, 0), o.add(n);
				const s = new ft();
				function a(t) {
					(s.y = 0.25 * -hu.x),
						(s.x = 0.1 * -hu.y),
						(o.rotation.x += 0.02 * (s.x - o.rotation.x) * t),
						(o.rotation.y += 0.02 * (s.y - o.rotation.y) * t),
						n.lookAt(0, 0, 0),
						r.update(t),
						i.render(e, n);
				}
				return a(1), { animate: a };
			})(zu[5]),
		];
		function Hu(t, e) {
			const n = document.createElement("I");
			n.classList.add("fa", "fa-long-arrow-right");
			const i = c(t);
			return (
				(i.innerHTML = e
					? e + "&#xA0;&#xA0;&#xA0;"
					: g.homepage.global.more + "&#xA0;&#xA0;&#xA0;"),
				i.append(n),
				i
			);
		}
		let Bu;
		!(function () {
			const t = document.createElement("H1");
			(t.id = "intro-textual-ui"),
				t.classList.add("textual-ui"),
				(t.innerHTML = g.homepage.intro.intro),
				zu[0].append(t);
		})(),
			(function () {
				const t = document.createElement("DIV");
				(t.id = "expertise-textual-ui"),
					t.classList.add("textual-ui", "service-ui"),
					zu[1].append(t);
				const e = document.createElement("H2");
				(e.innerHTML = g.homepage.expertise.title), t.append(e);
				const n = document.createElement("P");
				(n.innerHTML = g.homepage.expertise.text),
					t.append(n),
					t.append(Hu("expertise"));
			})(),
			(function () {
				const t = document.createElement("DIV");
				(t.id = "prototypes-textual-ui"),
					t.classList.add("textual-ui", "service-ui"),
					zu[2].append(t);
				const e = document.createElement("H2");
				(e.innerHTML = g.homepage.prototypes.title), t.append(e);
				const n = document.createElement("P");
				(n.innerHTML = g.homepage.prototypes.text),
					t.append(n),
					t.append(Hu("prototypes"));
			})(),
			(function () {
				const t = document.createElement("DIV");
				(t.id = "casting-textual-ui"),
					t.classList.add("textual-ui", "service-ui"),
					zu[3].append(t);
				const e = document.createElement("H2");
				(e.innerHTML = g.homepage.casting.title), t.append(e);
				const n = document.createElement("P");
				(n.innerHTML = g.homepage.casting.text),
					t.append(n),
					t.append(Hu("casting parts"));
			})(),
			(function () {
				const t = document.createElement("DIV");
				(t.id = "doc-textual-ui"),
					t.classList.add("textual-ui", "service-ui"),
					zu[4].append(t);
				const e = document.createElement("H2");
				(e.innerHTML = g.homepage.doc.title), t.append(e);
				const n = document.createElement("P");
				(n.innerHTML = g.homepage.doc.text),
					t.append(n),
					t.append(Hu("technical doc"));
			})(),
			(function () {
				const t = document.createElement("DIV");
				(t.id = "contact-textual-ui"),
					t.classList.add("textual-ui", "service-ui"),
					zu[5].append(t);
				const e = document.createElement("H2");
				(e.innerHTML = g.homepage.contact.title),
					t.append(e),
					t.append(Hu("webdev", g.homepage.contact.webdevLink)),
					t.append(Hu("samples", g.homepage.contact.samplesLink)),
					t.append(Hu("contact", g.homepage.contact.contactLink));
			})();
		let Fu = 0;
		function ku(t) {
			Bu = "home" !== t;
		}
		function Gu() {
			return document.querySelector("#dummy-container").getBoundingClientRect()
				.height;
		}
		!(function t() {
			if ((requestAnimationFrame(t), Fu++, Fu % 2 == 0 || Bu)) return;
			let e = Ou.getDelta() / (1 / 60);
			e = e > 10 ? 10 : e;
			const n = window.scrollY / Gu();
			Uu[Math.round(n)].animate(e);
		})();
		var ju = Du;
		let Vu = 0,
			Wu = 0;
		let qu = "home",
			Xu = "home";
		function Yu(t) {
			(qu = Xu), (Xu = t);
		}
		const Zu = document.createElement("DIV");
		(Zu.id = "page-container"),
			document.body.append(Zu),
			Zu.append(m, h, lt, ju),
			document.body.append(s);
		const Ju = document.createElement("DIV");
		(Ju.id = "logo-container"), document.body.append(Ju);
		const Ku = document.createElement("DIV");
		(Ku.id = "logo"),
			(Ku.innerHTML = "Kevin Scott"),
			Ju.append(Ku),
			s.addEventListener("click", () => {
				switch (Xu) {
					case "home":
						l.classList.remove("anim-close-menu"),
							l.classList.add("anim-open-menu"),
							h.classList.remove("anim-close-menu"),
							h.classList.add("anim-open-menu"),
							zu.forEach((t) => {
								t.classList.add("blurry");
							}),
							o("close"),
							Yu("menu"),
							ku(Xu);
						break;
					case "menu":
						l.classList.remove("anim-open-menu"),
							l.classList.add("anim-close-menu"),
							h.classList.remove("anim-open-menu"),
							h.classList.add("anim-close-menu"),
							zu.forEach((t) => {
								t.classList.remove("blurry");
							}),
							o("menu"),
							Yu("home"),
							setTimeout(() => {
								ku(Xu);
							}, 500);
						break;
					case "module":
						Zu.classList.remove("module-mode"),
							Zu.classList.remove("hide-overflow"),
							(document.documentElement.scrollTop = Wu),
							(Xu = qu),
							setTimeout(() => {
								ku(Xu);
							}, 500),
							"home" === Xu ? o("menu") : "menu" === Xu && o("close");
				}
			}),
			a.addEventListener("clicklink", (t) => {
				Yu("module"),
					o("back"),
					ku(Xu),
					(Wu = document.documentElement.scrollTop),
					Zu.classList.add("module-mode"),
					setTimeout(() => {
						Zu.classList.contains("module-mode") &&
							Zu.classList.add("hide-overflow");
					}, 800),
					(function (t) {
						switch (((ct.innerHTML = ""), t)) {
							case "expertise":
								ct.append(S);
								break;
							case "prototypes":
								ct.append(P);
								break;
							case "casting parts":
								ct.append(N);
								break;
							case "technical doc":
								ct.append(F);
								break;
							case "samples":
								ct.append(nt);
								break;
							case "contact":
								ct.append(K);
								break;
							case "webdev":
								ct.append(at);
						}
					})(t.detail.moduleName);
			});
		let Qu = 0;
		function $u() {
			return document.querySelector("#dummy-container").getBoundingClientRect()
				.height;
		}
		window.addEventListener("scroll", (t) => {
			Qu = Date.now();
			const e = window.scrollY,
				n = $u();
			(Vu = Math.floor((e + 0.5 * n) / n)),
				e > 5 * n && (document.documentElement.scrollTop = 5 * n);
		}),
			setInterval(() => {
				if (Qu > Date.now() - 1300) return;
				const t = $u() * Vu;
				Math.round(t) !== window.scrollY &&
					window.scrollTo({ top: t, behavior: "smooth" });
			}, 100);
	},
]);
