(function(__context) {
	var module = {
		id: "b339b78823a7d4e256e118d08f80004c",
		filename: "spa.min.js",
		exports: {}
	};
	if (!__context.____MODULES) {
		__context.____MODULES = {}
	}
	var r = function(exports, module, global) {
		(function(e) {
			var t = {
				id: "2c088de690d2f86994b0feec93475475",
				filename: "qapp.js",
				exports: {}
			};
			if (!e.____MODULES) {
				e.____MODULES = {}
			}
			var n = function(e, t, n) {
				(function() {
					"use strict";

					function e(e, t) {
						vt[e] = t()
					}

					function t(e) {
						return vt[e]
					}

					function n() {}

					function r(e) {
						var t = [],
							n;
						for (n in e) {
							t.push(n)
						}
						return t
					}

					function i(e, t) {
						var n = zt[e === wt || e !== e ? e : kt.call(e)] || e && e.nodeName || "#";
						if (e === Et) {
							n = "Undefined"
						} else if (n.charAt(0) === "#") {
							if (e == e.document && e.document != e) {
								n = "Window"
							} else if (e.nodeType === 9) {
								n = "Document"
							} else if (e.callee) {
								n = "Arguments"
							} else if (isFinite(e.length) && e.item) {
								n = "NodeList"
							} else {
								n = kt.call(e).slice(8, -1)
							}
						}
						if (t) {
							return t === n
						}
						return n
					}

					function s(e) {
						return i(e, "Object")
					}

					function o(e) {
						return i(e, "Array")
					}

					function u(e) {
						return i(e, "String")
					}

					function a(e) {
						return i(e, "Function")
					}

					function f(e) {
						if (e && e.nodeType === 1) {
							if (e instanceof Node) {
								return yt
							}
							return Ot.test(kt.call(e))
						}
						return bt
					}

					function l(e) {
						return i(e, "Number")
					}

					function c(e) {
						return i(e, "Object") && Object.getPrototypeOf(e) === Nt
					}

					function h(e) {
						try {
							return JSON.stringify(e) === "{}"
						} catch (t) {
							return FLASE
						}
					}

					function p(e, t, n) {
						var r;
						for (r in t) {
							if (n && (c(t[r]) || o(t[r]))) {
								if (c(t[r]) && !c(e[r])) {
									e[r] = {}
								}
								if (o(t[r]) && !o(e[r])) {
									e[r] = []
								}
								p(e[r], t[r], n)
							} else if (t[r] !== Et) {
								e[r] = t[r]
							}
						}
					}

					function d(e) {
						var t, n = Lt.call(arguments, 1);
						if (typeof e == "boolean") {
							t = e;
							e = n.shift()
						}
						n.forEach(function(n) {
							p(e, n, t)
						});
						return e
					}

					function v(e, t) {
						var n;
						for (n in e) {
							t.call(e, n, e[n])
						}
					}

					function m(e) {
						if (!e) return bt;
						var t = e.length;
						if (t === t >>> 0) {
							try {
								return Lt.call(e)
							} catch (n) {}
						}
						return bt
					}

					function g(e, t) {
						return mt.setTimeout(e, t || 0)
					}

					function y(e, t) {
						var n = {},
							r = 0;
						for (; r < t.length; r++) {
							n[t[r]] = e[r]
						}
						return n
					}

					function b(e, t) {
						var n = [],
							r = 0;
						for (; r < t.length; r++) {
							n[r] = e[t[r]]
						}
						return n
					}

					function w() {
						return Dt++
					}

					function E() {
						return Pt++
					}

					function S(e) {
						return e.replace(/[-_][^-_]/g, function(e) {
							return e.charAt(1).toUpperCase()
						})
					}

					function x(e) {
						return e.replace(/([a-z\d])([A-Z])/g, "$1-$2").replace(/\_/g, "-").toLowerCase()
					}

					function T(e) {
						var t;
						for (t in e) {
							e[t] = wt
						}
					}

					function N(e) {
						return e === Et || e === wt
					}

					function C(e, t) {
						e = (e === wt ? "" : e).toString().trim();
						return t ? encodeURIComponent(e) : e
					}

					function k(e, t) {
						var n = [],
							r, i, s;
						for (r in e) {
							if (N(e[r])) {
								n = n.concat(r)
							} else if (o(e[r])) {
								for (i = 0, s = e[r].length; i < s; i++) {
									if (!a(e[r][i])) {
										n.push(r + "=" + C(e[r][i], t))
									}
								}
							} else if (!a(e[r]) && e[r] !== wt && e[r] !== Et) {
								n.push(r + "=" + C(e[r], t))
							}
						}
						return n.join("&")
					}

					function L(e, t) {
						return N(e) ? e : t ? decodeURIComponent(e) : e
					}

					function A(e, t) {
						var n = e.trim().split("&"),
							r = {},
							i = 0,
							s = n.length;
						for (; i < s; i++) {
							if (n[i]) {
								var o = n[i].split("="),
									u = o[0],
									a = o[1];
								if (!(u in r)) {
									r[u] = L(a, t)
								} else {
									r[u] = [].concat(r[u], L(a, t))
								}
							}
						}
						return r
					}

					function O(e) {
						var t = bt,
							n;
						return function() {
							if (t) return n;
							t = yt;
							n = e.apply(this, arguments);
							e = wt;
							return n
						}
					}

					function M() {
						var e = function() {};
						d(e.prototype, Xt);
						return new e
					}

					function _() {
						function e(e, u, f) {
							if (a(i) && !r) {
								r = yt;
								i(s)
							}
							if (a(e)) {
								if (t === "resolved") {
									e.apply(wt, n)
								} else if (t === "pending") {
									o.add("resolve", e)
								}
							}
							if (a(u)) {
								if (t === "rejected") {
									u.apply(wt, n)
								} else if (t === "pending") {
									o.add("reject", u)
								}
							}
							if (a(f)) {
								o.add("notify", f)
							}
						}
						var t = "pending",
							n, r = bt,
							i, s = {},
							o = function() {
								var e = {
									resolve: [],
									reject: [],
									notify: []
								};
								return {
									add: function(t, n) {
										e[t].push(n)
									},
									remove: function(t, n) {
										var r = e[t].indexOf(n);
										if (r > -1) {
											e[t].splice(r, 1)
										}
									},
									clear: function(t) {
										e[t].length = 0
									},
									fire: function(t, n) {
										e[t].forEach(function(e) {
											e.apply(wt, n)
										})
									},
									destroy: function() {
										e.resolve.length = 0;
										e.reject.length = 0;
										e.notify.length = 0
									}
								}
							}();
						s.enabled = yt;
						s.all = function(t) {
							e(t, t);
							return s
						};
						s.done = function(t) {
							e(t);
							return s
						};
						s.fail = function(t) {
							e(wt, t);
							return s
						};
						s.progress = function(t) {
							e(wt, wt, t);
							return s
						};
						s.unProgress = function(e) {
							o.remove("notify", e);
							return s
						};
						s.then = function(t, n, r) {
							e(t, n, r);
							return s
						};
						s.resolve = function() {
							if (t === "pending") {
								t = "resolved";
								n = Lt.call(arguments);
								o.fire("resolve", n)
							}
							return s
						};
						s.reject = function() {
							if (t === "pending") {
								t = "rejected";
								n = Lt.call(arguments);
								o.fire("reject", n)
							}
							return s
						};
						s.notify = function() {
							o.fire("notify", Lt.call(arguments));
							return s
						};
						s.state = function() {
							return t
						};
						s.startWith = function(e) {
							i = e;
							return s
						};
						s.destroy = function() {
							s.enabled = bt;
							s.notify("destroy");
							t = wt;
							n = wt;
							r = wt;
							i = wt;
							s.destroy = function() {};
							s = wt;
							o.destroy();
							o = wt
						};
						return s
					}

					function D(e, t, n) {
						var r = new _,
							i = n ? e : e.slice(0),
							s = [],
							o = -1,
							u = function(e) {
								u = t && t.length ? function(e) {
									return t[e]
								} : function(e) {
									return e
								};
								return u(e)
							},
							f = function() {
								o++;
								var n = i.shift();
								if (n && a(n.all)) {
									n.all(function(t) {
										r.notify(u(o), t, e);
										s[o] = t;
										f()
									})
								} else if (n) {
									if (a(n)) {
										var l = n(s[o - 1], s);
										if (l && a(l.all)) {
											l.all(function(t) {
												r.notify(u(o), t, e);
												s[o] = t;
												f()
											})
										} else {
											r.notify(u(o), l, e);
											s[o] = l;
											f()
										}
									} else {
										r.notify(u(o), n, e);
										s[o] = n;
										f()
									}
								} else {
									if (t && t.length) {
										s = y(s, t)
									}
									r.resolve.call(wt, s)
								}
							};
						return r.startWith(f)
					}

					function P(e, t) {
						var n = new _,
							r = e.slice(0),
							i = [],
							s = 0,
							o = function() {
								if (s === r.length) {
									if (t && t.length) {
										i = y(i, t)
									}
									n.resolve.call(wt, i)
								}
							},
							u = function() {
								r.forEach(function(e, t) {
									if (e && a(e.all)) {
										i[t] = Et;
										e.all(function(e) {
											i[t] = e;
											s++;
											o()
										})
									} else {
										i[t] = e;
										s++
									}
								});
								o()
							};
						return n.startWith(u)
					}

					function H(e) {
						if (At.test(gt.readyState) && gt.body) {
							g(e, 0)
						} else {
							X(gt, "DOMContentLoaded", function() {
								e()
							}, bt)
						}
					}

					function B(e) {
						var t, n, r = "div";
						[
							["li", "ul"],
							["tr", "tbody"],
							["td", "tr"],
							["th", "tr"],
							["tbody", "table"],
							["option", "select"]
						].some(function(t) {
							if (e.indexOf("<" + t[0]) === 0) {
								r = t[1];
								return yt
							}
						});
						t = gt.createElement(r);
						t.innerHTML = e;
						n = m(t.children);
						t = gt.createDocumentFragment();
						n.forEach(function(e) {
							t.appendChild(e)
						});
						return {
							box: t,
							children: n
						}
					}

					function j(e, t) {
						t = [].concat(t);
						t.forEach(function(t) {
							e.appendChild(t)
						})
					}

					function F(e, t, n) {
						n = n ? n.toLowerCase() : "beforeend";
						switch (n) {
							case "beforebegin":
								e.parentNode.insertBefore(t, e);
								break;
							case "afterbegin":
								e.insertBefore(t, e.firstChild);
								break;
							case "beforeend":
								e.appendChild(t);
								break;
							case "afterend":
								if (e.nextSibling) {
									e.parentNode.insertBefore(t, e.nextSibling)
								} else {
									e.parentNode.appendChild(t)
								}
								break
						}
						return t
					}

					function I(e) {
						if (e && e.parentNode) {
							e.parentNode.removeChild(e)
						}
					}

					function q(e, t, n) {
						var r = n === bt || n === null || n === void 0;
						var i = Bt[t];
						if (typeof e[i] === "boolean") {
							e[i] = !!n;
							if (!n) {
								r = yt
							}
						}
						if (r) {
							return e.removeAttribute(t)
						}
						var s = Mt.test(e) ? bt : t in e.cloneNode(bt);
						if (s) {
							e[t] = n
						} else {
							e.setAttribute(t, n)
						}
					}

					function R(e, t) {
						if (u(t)) {
							if (arguments.length > 2) {
								q(e, t, arguments[2])
							} else {
								return e.getAttribute(t)
							}
						} else {
							v(t, function(t, n) {
								q(e, t, n)
							})
						}
					}

					function U(e, t) {
						if (e && e.style) {
							if (u(t)) {
								if (arguments.length > 2) {
									var n = arguments[2];
									if (It.test(t)) {
										e.style[qt] = t + "(" + n + ")"
									} else {
										t = S(t);
										if (n || n === 0) {
											e.style[t] = n
										} else {
											e.style.removeProperty(t)
										}
									}
								} else {
									var r = mt.getComputedStyle(e, wt),
										i;
									if (r) {
										i = r[S(t)]
									}
									return i
								}
							} else {
								var s = [],
									o = "";
								v(t, function(e, t) {
									if (It.test(e)) {
										o += e + "(" + t + ") "
									} else {
										s.push(x(e) + ":" + t)
									}
								});
								if (o.length) {
									s.push(x(qt) + ":" + o)
								}
								e.style.cssText += ";" + s.join(";") + ";"
							}
						}
					}

					function z(e, t) {
						if (e && e.style) {
							[].concat(t).forEach(function(t) {
								e.style.removeProperty(t);
								e.style.removeProperty(Rt + t)
							})
						}
					}

					function W(e) {
						if (!e.target) {
							e.target = e.srcElement || document
						}
						if (e.target.nodeType == 3) {
							e.target = e.target.parentNode
						}
						if (e.pageX === wt && e.clientX !== wt) {
							var t = gt.documentElement,
								n = gt.body;
							e.pageX = e.clientX + (t.scrollLeft || n && n.scrollLeft || 0) - (t.clientLeft || n && n.clientLeft || 0);
							e.pageY = e.clientY + (t.scrollTop || n && n.scrollTop || 0) - (t.clientTop || n && n.clientTop || 0)
						}
						return e
					}

					function X(e, t, n, r) {
						e.addEventListener(t, n, !!r)
					}

					function V(e, t, n) {
						e.removeEventListener(t, n)
					}

					function $(e, t, n) {
						var r = gt.createEvent("Events");
						r.initEvent(t, true, true);
						d(r, n);
						e.dispatchEvent(r)
					}

					function J(e, t) {
						e.className = (e.className + _t + t).split(/\s+/).filter(function(e, t, n) {
							return n.lastIndexOf(e) === t
						}).join(_t)
					}

					function K(e, t) {
						t = _t + t.replace(/\s+/g, _t) + _t;
						e.className = e.className.split(/\s+/).filter(function(e) {
							return t.indexOf(_t + e + _t) === -1
						}).join(_t)
					}

					function Q(e) {
						var t = gt.createElement("style");
						t.type = "text/css";
						t.innerHTML = e;
						gt.querySelector("head").appendChild(t)
					}

					function G(e) {
						var t;
						if (Tt.ios && e.setSelectionRange && e.type.indexOf("date") !== 0 && e.type !== "time" && e.type !== "month") {
							t = e.value.length;
							e.setSelectionRange(t, t)
						} else {
							e.focus()
						}
					}

					function Y(e) {
						var t = gt.activeElement;
						e = e || gt.body;
						if (t && Vt(e, t) && a(t.blur)) {
							t.blur()
						}
					}

					function Z(e) {
						function t(t) {
							var n = e.documentElement,
								r = e.body;
							return Math.max(r["scroll" + t], n["scroll" + t], r["offset" + t], n["offset" + t], n["client" + t])
						}
						return {
							width: t("Width"),
							height: t("Height")
						}
					}

					function et(e) {
						function t(t) {
							return e.document.documentElement["client" + t]
						}
						return {
							width: t("Width"),
							height: t("Height")
						}
					}

					function tt(e) {
						var t = i(e),
							n;
						switch (t) {
							case "Document":
								n = Z(e);
								break;
							case "Window":
								n = et(e);
								break;
							default:
								n = {
									width: parseInt(U(e, "width"), 10),
									height: parseInt(U(e, "height"), 10)
								}
						}
						return n
					}

					function nt(e) {
						var t = e.getBoundingClientRect(),
							n = e.ownerDocument.body,
							r = e.ownerDocument.documentElement,
							i = Math.max(mt.pageYOffset || 0, r.scrollTop, n.scrollTop),
							s = Math.max(mt.pageXOffset || 0, r.scrollLeft, n.scrollLeft),
							o = r.clientTop || n.clientTop || 0,
							u = r.clientLeft || n.clientLeft || 0;
						return {
							left: t.left + s - u,
							top: t.top + i - o
						}
					}

					function rt(e, t) {
						return {
							left: e.left - t.left,
							top: e.top - t.top
						}
					}

					function it(e) {
						if (!Vt(e.ownerDocument.body, e)) {
							return {
								top: NaN,
								left: NaN
							}
						}
						return arguments.length > 1 ? rt(nt(e), nt(arguments[1])) : nt(e)
					}

					function st(e) {
						var t = {};
						if (e) {
							if (e.dataset) {
								d(t, e.dataset)
							} else {
								var n = e.attributes;
								for (var r = 0, i = n.length; r < i; r++) {
									var s = n[r].name,
										o = n[r].value;
									if (s.indexOf("data-") === 0) {
										s = S(s.substring(5));
										t[s] = o
									}
								}
							}
						}
						return t
					}

					function ot(e, t, n) {
						if (a(e)) {
							return e.apply(t, m(n) || [])
						}
					}

					function ut(e) {
						var t = n;
						e = m(e);
						if (e) {
							e.some(function(e) {
								if (a(e)) {
									t = e;
									return yt
								}
							})
						}
						return t
					}

					function at(e, t, n) {
						function r(n, r, s) {
							function u() {
								var t = n,
									o = st(t);
								if (i[r] && i[r][a]) {
									return i[r][a]({
										evt: s,
										el: t,
										box: e,
										data: o
									}, o)
								} else {
									return yt
								}
							}
							var a = wt;
							if (Kt(t, n)) {
								return bt
							} else if (!Vt(e, n)) {
								return bt
							} else {
								while (n && n !== e) {
									if (n.nodeType === 1) {
										a = n.getAttribute(o);
										if (a && u() === bt) {
											break
										}
									}
									n = n.parentNode
								}
							}
						}
						if (!t) {
							t = []
						}
						t = [].concat(t);
						var i = {},
							s = function(e) {
								var t = e.target,
									n = e.type;
								r(t, n, e)
							},
							o = n || "action-type";
						var u = {};
						u.add = function(t, n, r, o) {
							if (!i[n]) {
								i[n] = {};
								X(e, n, s, !!o)
							}
							var u = i[n];
							u[t] = r
						};
						u.remove = function(t, n) {
							if (i[n]) {
								delete i[n][t];
								if (h(i[n])) {
									delete i[n];
									V(e, n, s)
								}
							}
						};
						u.pushExcept = function(e) {
							t.push(e)
						};
						u.removeExcept = function(e) {
							if (!e) {
								t = []
							} else {
								for (var n = 0, r = t.length; n < r; n += 1) {
									if (t[n] === e) {
										t.splice(n, 1)
									}
								}
							}
						};
						u.clearExcept = function() {
							t = []
						};
						u.fireAction = function(t, n, r, s) {
							var o = {};
							if (s && s.data) {
								o = s.data
							}
							if (i[n] && i[n][t]) {
								i[n][t]({
									evt: r,
									el: wt,
									box: e,
									data: o,
									fireFrom: "fireAction"
								}, o)
							}
						};
						u.fireInject = function(t, n, r) {
							var s = t.getAttribute(o),
								u = st(t);
							if (s && i[n] && i[n][s]) {
								i[n][s]({
									evt: r,
									el: t,
									box: e,
									data: u,
									fireFrom: "fireInject"
								}, u)
							}
						};
						u.fireDom = function(e, t, n) {
							r(e, t, n || {})
						};
						u.destroy = function() {
							for (var t in i) {
								for (var n in i[t]) {
									delete i[t][n]
								}
								delete i[t];
								V(e, t, s)
							}
						};
						return u
					}

					function ft(e, t) {
						var n = y(Qt.exec(e) || [], Gt);
						n.query = n.query ? A(n.query.substring(1), t) : {};
						n.hash = n.hash ? A(n.hash.substring(1), t) : {};
						n.getQuery = function(e) {
							return n.query[e]
						};
						n.getHash = function(e) {
							return n.hash[e]
						};
						n.setQuery = function(e, t) {
							if (t === Et) {
								n.query[e] = wt
							} else {
								n.query[e] = t
							}
							return n
						};
						n.setHash = function(e, t) {
							if (t === Et) {
								n.hash[e] = wt
							} else {
								n.hash[e] = t
							}
							return n
						};
						n.toUrl = function(e) {
							var t = n.protocol + "://",
								r = k(n.query, e),
								i = k(n.hash, e);
							if (n.protocol && n.protocol.toLowerCase() === "file") {
								t += "/"
							}
							return t + n.hostname + (n.port || "") + n.path + (n.name || "") + (r ? "?" + r : "") + (i ? "#" + i : "")
						};
						return n
					}

					function lt(e, t, n) {
						var r;
						Zt.insertBefore(e, Zt.firstChild);
						if (n) {
							r = g(function() {
								e.onload = wt;
								I(e);
								t.reject({
									type: "Timeout"
								})
							}, n)
						}
						e.onload = function() {
							if (r) {
								clearTimeout(r)
							}
							e.onload = wt;
							e.onerror = wt;
							t.resolve()
						};
						e.onerror = function() {
							if (r) {
								clearTimeout(r)
							}
							I(e);
							e.onload = wt;
							e.onerror = wt;
							t.reject({
								type: "Error"
							})
						}
					}

					function ct(e, t, n) {
						var r = d({}, Yt, n),
							i = en[e] && en[e](t, r);
						if (i && (r.onComplete || r.onFail || r.onTimeout)) {
							i.then(r.onComplete, function(e) {
								if (e.type === "Timeout" && a(r.onTimeout)) {
									r.onTimeout(e)
								}
								if (e.type === "Error" && a(r.onFail)) {
									r.onFail(e)
								}
							})
						}
						return i
					}

					function ht(e, t) {
						console[e].apply(console, ["[" + e.toUpperCase() + "]"].concat(m(t)))
					}

					function pt(e) {
						vn.done(e)
					}
					var dt = {
							version: "0.4.7"
						},
						vt = dt._packages = {};
					var mt = window,
						gt = document,
						yt = true,
						bt = false,
						wt = null,
						Et = void 0;
					var St = {
						app: "spa-app",
						view: "spa-view",
						widget: "spa-widget",
						role: "spa-role"
					};
					var xt = {
						type: "touch",
						indexView: "index",
						animate: yt,
						defaultAnimate: "moveEnter",
						autoInit: yt,
						hashRouter: yt,
						hashSupport: {
							all: yt,
							exist: [],
							except: []
						},
						customRoot: yt,
						appRoot: wt,
						screen: {
							rotate: bt,
							largeChange: yt
						},
						gesture: {
							open: yt,
							ctrl: yt,
							longTap: yt,
							autoBlur: yt
						},
						root: {
							top: 0,
							right: 0,
							bottom: 0,
							left: 0
						},
						logLevel: 1
					};
					var Tt = function() {
						var e = {};
						var t = navigator.userAgent,
							n = navigator.platform,
							r = t.match(/(Android);?[\s\/]+([\d.]+)?/),
							i = t.match(/(iPad).*OS\s([\d_]+)/),
							s = t.match(/(iPod)(.*OS\s([\d_]+))?/),
							o = t.match(/(iPhone\sOS)\s([\d_]+)/);
						e.ios = e.android = e.iphone = e.ipad = e.ipod = bt;
						if (r) {
							e.os = "android";
							e.osVersion = r[2];
							e.android = yt
						}
						if (i || o || s) {
							e.os = "ios";
							e.ios = yt
						}
						if (o) {
							e.osVersion = o[2].replace(/_/g, ".");
							e.iphone = yt;
							e.imobile = yt
						}
						if (i) {
							e.osVersion = i[2].replace(/_/g, ".");
							e.ipad = yt
						}
						if (s) {
							e.osVersion = s[3] ? s[3].replace(/_/g, ".") : wt;
							e.ipod = yt;
							e.imobile = yt
						}
						if (e.ios && e.osVersion && t.indexOf("Version/") >= 0) {
							if (e.osVersion.split(".")[0] === "10") {
								e.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]
							}
						}
						if (e.osVersion) {
							e.osVersionN = parseInt(e.osVersion.match(/\d+\.?\d*/)[0])
						}
						e.pixelRatio = mt.devicePixelRatio || 1;
						e.retina = e.pixelRatio >= 2;
						e.pc = n.indexOf("Mac") === 0 || n.indexOf("Win") === 0 || n.indexOf("linux") === 0 && !e.android;
						return e
					}();
					var Nt = Object.prototype,
						Ct = Array.prototype,
						kt = Nt.toString,
						Lt = Ct.slice,
						At = /complete|loaded|interactive/,
						Ot = /Element$/,
						Mt = /^\[object SVG\w*Element\]$/,
						_t = " ",
						Dt = 1,
						Pt = 1e3;
					var Ht = "autofocus,autoplay,async,allowTransparency,checked,controls,declare,disabled,defer,defaultChecked,defaultSelected,contentEditable,isMap,loop,multiple,noHref,noResize,noShade,open,readOnly,selected",
						Bt = {};
					Ht.replace(/\w+/g, function(e) {
						Bt[e.toLowerCase()] = e
					});
					var jt = ["Webkit", "", "Moz", "O"],
						Ft = gt.createElement("div"),
						It = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
						qt = "",
						Rt = "",
						Ut;
					jt.every(function(e) {
						if (Ft.style[e + "TransitionProperty"] !== Et) {
							if (e) {
								Rt = "-" + e.toLowerCase() + "-"
							}
							Ut = e.toLowerCase();
							return bt
						}
					});
					Ft = wt;
					qt = Rt + "transform";
					var zt = {
						"[object HTMLDocument]": "Document",
						"[object HTMLCollection]": "NodeList",
						"[object StaticNodeList]": "NodeList",
						"[object IXMLDOMNodeList]": "NodeList",
						"[object DOMWindow]": "Window",
						"[object global]": "Window",
						"null": "Null",
						NaN: "NaN",
						"undefined": "Undefined"
					};
					"Boolean,Number,String,Function,Array,Date,RegExp,Window,Document,Arguments,NodeList,Null,Undefined".replace(/\w+/ig, function(e) {
						zt["[object " + e + "]"] = e
					});
					var Wt = function(e, t) {
						var n, r = -1,
							i = e.length,
							s = 1;
						while (++r < i && s) {
							n = e[r];
							s &= n.callback.apply(n.ctx, t) !== false
						}
						return !!s
					};
					var Xt = {
						on: function(e, t, n) {
							this._events = this._events || {};
							this._events[e] = this._events[e] || [];
							var r = this._events[e];
							r.push({
								callback: t,
								context: n,
								ctx: n || this
							});
							return this
						},
						once: function(e, t, n) {
							var r = this;
							var i = O(function() {
								r.off(e, i);
								t.apply(this, arguments)
							});
							i._callback = t;
							return this.on(e, i, n)
						},
						off: function(e, t, n) {
							if (!this._events) return this;
							var i, s, o, u, a, f, l, c;
							if (!e && !t && !n) {
								this._events = Et;
								return this
							}
							u = e ? [e] : r(this._events);
							for (a = 0, f = u.length; a < f; a++) {
								e = u[a];
								o = this._events[e];
								if (o) {
									this._events[e] = i = [];
									if (t || n) {
										for (l = 0, c = o.length; l < c; l++) {
											s = o[l];
											if (t && t !== s.callback && t !== s.callback._callback || n && n !== s.context) {
												i.push(s)
											}
										}
									}
									if (!i.length) delete this._events[e]
								}
							}
							return this
						},
						trigger: function(e) {
							if (!this._events) return this;
							var t = Lt.call(arguments, 1),
								n = this._events[e],
								r = this._events.all,
								i = 1;
							if (n) {
								i &= Wt(n, t)
							}
							if (r && i) {
								i &= Wt(r, t)
							}
							return !!i
						}
					};
					var Vt = gt.compareDocumentPosition ? function(e, t) {
						return !!(e.compareDocumentPosition(t) & 16)
					} : function(e, t) {
						return e !== t && (e.contains ? e.contains(t) : yt)
					};
					var $t = function() {
						function e() {
							O = wt;
							M = wt;
							_ = wt
						}

						function t(e, t) {
							if (t) {
								x.forEach(function(n) {
									e[n] = t[n]
								})
							}
							return e
						}

						function n(e) {
							return m(e).filter(function(e) {
								return e.identifier === _
							})[0]
						}

						function r(e, t) {
							return Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2))
						}

						function i(e, t) {
							var n = Math.atan2(t, e) / Math.PI * 180;
							return n < 0 ? n + 360 : n
						}

						function s(e, t) {
							var n = [],
								r = Math.abs(e),
								i = Math.abs(t),
								s = Math.tan(k / 180 * Math.PI),
								o = r > i;
							if (r > 0 || i > 0) {
								n.push(o ? e > 0 ? "right" : "left" : t > 0 ? "down" : "up");
								if (o && i / r > s) {
									n.push(t > 0 ? "down" : "up")
								} else if (!o && r / i > s) {
									n.push(e > 0 ? "right" : "left")
								}
							}
							return n
						}

						function o(e) {
							switch (e.nodeName.toLowerCase()) {
								case "button":
								case "select":
								case "textarea":
									if (e.disabled) {
										return yt
									}
									break;
								case "input":
									if (Tt.ipad && Tt.osVersionN === 6 && e.type === "file" || e.disabled) {
										return yt
									}
									break;
								case "label":
								case "iframe":
								case "video":
									return yt
							}
							return /\bneedsclick\b/.test(e.className)
						}

						function u(e) {
							switch (e.nodeName.toLowerCase()) {
								case "textarea":
									return yt;
								case "select":
									return !Tt.android;
								case "input":
									switch (e.type) {
										case "button":
										case "checkbox":
										case "file":
										case "image":
										case "radio":
										case "submit":
											return bt
									}
									return !e.disabled && !e.readOnly;
								default:
									return /\bneedsfocus\b/.test(e.className)
							}
						}

						function a(e) {
							if (Tt.android && e.nodeName.toLowerCase() === "select") {
								return "mousedown"
							}
							return "click"
						}

						function f(e, t) {
							var n;
							if (gt.activeElement && gt.activeElement !== e) {
								gt.activeElement.blur()
							}
							n = gt.createEvent("MouseEvents");
							n.initMouseEvent(a(e), yt, yt, mt, 1, t.screenX, t.screenY, t.clientX, t.clientY, bt, bt, bt, bt, 0, wt);
							n.forwardedTouchEvent = yt;
							if (I) {
								e.dispatchEvent(n)
							}
						}

						function l(e) {
							if (e.control !== Et) {
								return e.control
							}
							if (e.htmlFor) {
								return gt.getElementById(e.htmlFor)
							}
							return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
						}

						function c(e) {
							var t = gt.createEvent("HTMLEvents");
							t.initEvent(e, yt, yt);
							return t
						}

						function h(e, n, r, o, u) {
							var a = c(e);
							a.offsetX = n;
							a.offsetY = r;
							a.degree = i(n, r);
							a.directions = s(n, r);
							if (u) {
								a.duration = u;
								a.speedX = a.offsetX / u;
								a.speedY = a.offsetY / u
							}
							return t(a, o)
						}

						function p(e, t) {
							var n = O.origin,
								i = t.clientX - n.clientX,
								s = t.clientY - n.clientY;
							if (O.status === "tapping" || O.status === "pressing") {
								if (r(i, s) > C) {
									O.status = "panning";
									B = bt;
									j = wt;
									O.startMoveTime = e.timeStamp;
									clearTimeout(O.handler);
									O.handler = wt;
									v(h("pan", i, s, t))
								}
							} else if (O.status === "panning") {
								v(h("pan", i, s, t))
							}
						}

						function d(e, n) {
							if (O.handler) {
								clearTimeout(O.handler);
								O.handler = wt
							}
							if (O.status === "panning") {
								var i = O.origin,
									s = n.clientX - i.clientX,
									o = n.clientY - i.clientY,
									u = e.timeStamp - O.startMoveTime;
								v(h("panend", s, o, n, u));
								if (u < L && r(s, o) > A) {
									v(h("flick", s, o, n, u))
								}
							} else {
								if (O.status === "tapping") {
									v(t(c("tap"), n))
								} else if (O.status === "pressing") {
									v(t(c("pressend"), n));
									if (N) {
										v(t(c("tap"), n))
									}
								}
							}
						}

						function v(e) {
							if (I && M) {
								M.dispatchEvent(e)
							}
						}

						function g(e) {
							var n, r, i = e.changedTouches,
								s = e.timeStamp;
							if (s - P < T) {
								e.preventDefault();
								return bt
							}
							if (i.length > 1) {
								return yt
							}
							n = i[0];
							if (n) {
								M = e.target;
								_ = n.identifier;
								O = {
									origin: t({}, n),
									timestamp: s,
									status: "tapping",
									handler: setTimeout(function() {
										O.status = "pressing";
										v(t(c("press"), O.origin));
										clearTimeout(O.handler);
										O.handler = wt
									}, T)
								};
								if (!Tt.pc) {
									if (Tt.ios) {
										r = mt.getSelection();
										if (r.rangeCount && !r.isCollapsed) {
											return yt
										}
										if (_ === D) {
											e.preventDefault();
											return bt
										}
										D = _
									}
									B = yt;
									j = M
								}
							}
							return yt
						}

						function y(e) {
							var t = n(e.changedTouches);
							if (t && O) {
								p(e, t)
							}
							return yt
						}

						function b(t) {
							var r = n(t.changedTouches),
								i = t.timeStamp,
								s, a, c;
							if (r && O) {
								d(t, r);
								c = O.timestamp;
								e();
								if (B) {
									if (i - P < T) {
										F = yt;
										return yt
									}
									if (i - c > T) {
										return yt
									}
									F = bt;
									P = i;
									s = j.nodeName.toLowerCase();
									if (s === "label") {
										a = l(j);
										if (a) {
											G(a);
											if (Tt.android) {
												return bt
											}
											j = a
										}
									} else if (u(j)) {
										if (i - c > 100 || Tt.ios && mt.top !== mt && s === "input") {
											j = wt;
											return bt
										}
										G(j);
										f(j, r);
										if (!Tt.ios || s !== "select") {
											j = wt;
											t.preventDefault()
										}
										return bt
									}
									if (!o(j)) {
										t.preventDefault();
										f(j, r)
									}
									return bt
								}
							}
							return yt
						}

						function w(t) {
							var r = n(t.changedTouches);
							if (r && O) {
								j = wt;
								d(t, r);
								e()
							}
							return yt
						}

						function E(e) {
							if (!j) {
								return yt
							}
							if (e.forwardedTouchEvent) {
								return yt
							}
							if (!e.cancelable) {
								return yt
							}
							if (!o(j) || F) {
								if (e.stopImmediatePropagation) {
									e.stopImmediatePropagation()
								} else {
									e.propagationStopped = yt
								}
								e.stopPropagation();
								e.preventDefault();
								return bt
							}
							return yt
						}

						function S(e) {
							var t;
							if (B) {
								j = wt;
								B = bt;
								return yt
							}
							if (e.target.type === "submit" && e.detail === 0) {
								return yt
							}
							t = E(e);
							if (!t) {
								j = wt
							}
							return t
						}
						var x = ["screenX", "screenY", "clientX", "clientY", "pageX", "pageY"],
							T = 200,
							N = bt,
							C = 10,
							k = 15,
							L = 300,
							A = 100;
						var O, M, _, D, P = 0,
							B, j, F = bt,
							I = yt;
						H(function() {
							var e = gt.body;
							if (!xt.gesture || xt.gesture.open !== false) {
								if (!Tt.pc) {
									if (Tt.android) {
										X(e, "moveover", E, yt);
										X(e, "mousedown", E, yt);
										X(e, "mouseup", E, yt)
									}
									X(e, "click", S, yt)
								}
								X(e, "touchstart", g, yt);
								X(e, "touchmove", y, yt);
								X(e, "touchend", b, yt);
								X(e, "touchcancel", w, yt)
							}
						});
						return {
							allowLongTap: function() {
								N = yt
							},
							on: function() {
								I = yt
							},
							off: function() {
								I = bt
							}
						}
					}();
					var Jt = function() {
						function e(e) {
							var t = e.parentNode;
							if (t) {
								U(t, {
									"transform-style": "preserve-3d",
									"backface-visibility": "hidden"
								})
							}
						}

						function t(e) {
							var t = e.parentNode;
							z(t, ["transform-style", "backface-visibility"])
						}
						var n = 200,
							r = 25,
							i = "linear";
						var s, o, u, a;
						s = Rt + "transition-property";
						o = Rt + "transition-duration";
						a = Rt + "transition-delay";
						u = Rt + "transition-timing-function";
						return function(f, l, c, h, p) {
							function d(e) {
								if (e) {
									if (e.target !== f) {
										return
									}
								}
								V(f, y, d);
								T = yt;
								g(function() {
									if (E) {
										t(f)
									}
									z(f, "transition");
									S.resolve()
								})
							}
							var m = arguments.length,
								y = Ut + "TransitionEnd",
								b = {},
								w = [],
								E = "";
							if (m < 3) {
								c = n
							}
							if (m < 4) {
								h = i
							}
							if (m < 5) {
								p = 0
							}
							v(l, function(e, t) {
								if (It.test(e)) {
									E += e + "(" + t + ") "
								} else {
									b[e] = t
								}
								w.push(x(e))
							});
							if (E) {
								b[qt] = E;
								w.push(qt)
							}
							if (c > 0) {
								b[s] = w.join(", ");
								b[o] = c / 1e3 + "s";
								b[a] = p / 1e3 + "s";
								b[u] = h
							}
							var S = new _;
							var T = bt;
							if (c > 0) {
								X(f, y, d, bt);
								g(function() {
									if (!T) {
										d()
									}
								}, c + p + r * 2)
							}
							g(function() {
								if (E) {
									e(f)
								}
								U(f, b);
								S.notify("start")
							}, r);
							if (c <= 0) {
								g(d)
							}
							return S
						}
					}();
					var Kt = function(e, t) {
						for (var n = 0, r = e.length; n < r; n += 1) {
							if (Vt(e[n], t)) {
								return yt
							}
						}
						return bt
					};
					var Qt = /(\w+):\/\/\/?([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(\?[^#]*)?(#.*)?/i,
						Gt = ["url", "protocol", "hostname", "port", "path", "name", "query", "hash"];
					var Yt = {
						charset: "UTF-8",
						timeout: 30 * 1e3,
						onComplete: wt,
						onTimeout: wt,
						onFail: wt
					};
					var Zt = gt.getElementsByTagName("head")[0];
					var en = {
						script: function(e, t) {
							var n = new _,
								r = t.charset,
								i = t.timeout,
								s = gt.createElement("script");
							s.type = "text/javascript";
							s.charset = r;
							return n.startWith(function() {
								n.notify("element", s);
								lt(s, n, i);
								s.src = e
							})
						},
						style: function(e, t) {
							var n = new _,
								r = t.charset,
								i = t.timeout,
								s = gt.createElement("link");
							s.type = "text/css";
							s.charset = r;
							s.rel = "stylesheet";
							return n.startWith(function() {
								lt(s, n, i);
								s.href = e
							})
						},
						image: function(e, t) {
							var n = new _,
								r = new Image,
								i = t.timeout,
								s = wt;
							r.onload = function() {
								r.onload = wt;
								r.onerror = wt;
								if (s) {
									clearTimeout(s)
								}
								n.resolve(r)
							};
							r.onerror = function() {
								r.onload = wt;
								r.onerror = wt;
								if (s) {
									clearTimeout(s)
								}
								n.reject({
									type: "Error"
								})
							};
							if (i) {
								s = g(function() {
									r.onload = wt;
									r.onerror = wt;
									if (s) {
										clearTimeout(s)
									}
									n.reject({
										type: "Timeout"
									})
								}, i)
							}
							return n.startWith(function() {
								r.src = e
							})
						}
					};
					var tn = "onorientationchange" in mt,
						nn = "resize",
						rn = M(),
						sn = function(e) {
							return e.width > e.height ? "landscape" : "portrait"
						};
					rn.get = function() {
						return sn(tt(mt))
					};
					H(function() {
						var e = tt(mt);
						mt.addEventListener(nn, function() {
							var t = tt(mt);
							if (e.width !== t.width && e.height !== t.height) {
								e = t;
								rn.trigger("change", {
									type: nn,
									width: t.width,
									height: t.height,
									orientation: sn(t)
								})
							}
						})
					});
					var on = ["info", "debug", "warn", "error"];
					on.forEach(function(e, t) {
						ht[e] = function() {
							if (t >= xt.logLevel) {
								ht(e, arguments)
							}
						}
					});
					var un = ft(location.href).query.logLevel;
					if (un) {
						xt.logLevel = parseInt(un)
					}
					e("fetchNode", function() {
						function e(e) {
							e.resolve()
						}
						return function(t) {
							var n = t.options;
							return (new _).startWith(function(r) {
								if (n.html || a(n.fetch)) {
									if (n.html) {
										e(r)
									} else if (n.fetch.length) {
										n.fetch.call(t, function(t) {
											n.html = t || "";
											e(r)
										})
									} else {
										n.html = n.fetch.call(t) || "";
										e(r)
									}
								} else {
									n.html = "";
									e(r)
								}
							})
						}
					});
					e("display", function() {
						return {
							show: function(e, t, n, r) {
								var i = this;
								if (i.isShow) {
									U(i.root, d({
										width: "100%",
										height: "100%",
										zIndex: E()
									}, n || t));
									i.trigger("refresh")
								} else {
									i.once("completed", function() {
										U(i.root, d({
											width: "100%",
											height: "100%",
											zIndex: E()
										}, t));
										i.trigger("beforeShow");
										if (xt.animate && n) {
											Jt(i.root, n, r).done(function() {
												i.trigger("show")
											})
										} else {
											U(i.root, n || {});
											i.trigger("show")
										}
									});
									i.renderTo(f(e) ? e : xt.appRoot)
								}
								return i
							},
							hide: function() {
								var e = this;
								if (e.isShow) {
									e.trigger("beforeHide");
									e.trigger("hide")
								}
								return e
							}
						}
					});
					e("pluginM", function() {
						var e = dt._plugins = {},
							t = [];
						return {
							add: function(t, n, r) {
								var i = [].concat(t);
								i.forEach(function(t) {
									if (!e[t]) {
										e[t] = {
											options: n,
											adapter: r
										}
									} else {}
								})
							},
							exists: function(t) {
								return !!e[t]
							},
							get: function(t) {
								return e[t]
							},
							setOpt: function(t, n) {
								if (e[t]) {
									d(yt, e[t].options, n)
								}
							},
							getGlobal: function() {
								return t
							},
							setGlobal: function(e) {
								t = t.concat(e)
							}
						}
					});
					e("widgetM", function() {
						var e = dt._widgets = {};
						return {
							add: function(t, n, r) {
								e[t] = {
									eventName: r && (u(r) ? r : "tap"),
									adapter: n
								}
							},
							exists: function(t) {
								return !!e[t]
							},
							isEvent: function(t) {
								return !!e[t].eventName
							},
							get: function(t) {
								return e[t]
							},
							show: function(t, n, r, i) {
								if (e[t]) {
									if (f(n)) {
										return e[t].adapter(n, r, i)
									} else {
										return e[t].adapter(wt, n, r)
									}
								}
							}
						}
					});
					e("module", function() {
						function e(e, t, n, r) {
							return (new _).startWith(function(i) {
								f.get(e, function(e) {
									if (i.enabled) {
										if (e) {
											var s = function(t) {
												if (t === "destroy") {
													e.destroy();
													e = wt;
													i.reject()
												}
											};
											e.parentModule = n;
											e.parentView = n.parentView;
											e.on("loadStart", function() {
												e.mergeParam(t);
												e.initialShow = !!r
											});
											e.on("completed", function() {
												i.resolve(e)
											});
											e.renderTo(n.container);
											e.on("destroy", function() {
												e = wt
											});
											i.progress(s);
											i.all(function() {
												i.unProgress(s)
											})
										} else {
											i.resolve(wt)
										}
									}
								})
							})
						}

						function n(e, t) {
							var n = e.options.views;
							n.forEach(function(r, i) {
								if (u(r)) {
									n[i] = r = {
										tag: r,
										name: r,
										param: {}
									}
								}
								if (r.name.indexOf(":") === -1 && t) {
									r.name += ":" + t
								}
								e.addView(r.tag, r.name, r.param)
							})
						}

						function r(e) {
							e.options.plugins.forEach(function(t) {
								var n = typeof t === "string" ? t : t.name,
									r = t.options || {};
								if (o.exists(n)) {
									e.plugins[n] = o.get(n)(e, r, xt)
								}
							})
						}

						function i(e) {
							if (e && e.options && e.options.styles) {
								U(e.root, e.options.styles)
							}
						}

						function s(e, t) {
							var i = this;
							i.options = d(yt, {}, l, e);
							i.param = {};
							i.isReady = bt;
							i.container = wt;
							i.curTag = i.options.defaultTag || wt;
							i.tagList = [];
							i.parentView = wt;
							i.views = {};
							i.plugins = {};
							i.renderAll = i.options.renderAll;
							i.renderDefers = [];
							i.renderAllDefer = wt;
							i.renderOneDefer = wt;
							i.pushMessageTimer = wt;
							n(i, t);
							r(i)
						}
						var o = t("pluginM"),
							f;
						var l = {
							name: wt,
							defaultTag: wt,
							container: wt,
							renderAll: bt,
							ready: wt,
							views: [],
							plugins: [],
							renderEvent: yt
						};
						d(s.prototype, {
							renderTo: function(t) {
								var n = this,
									r = n.options.renderEvent,
									i;
								n.container = t;
								if (n.renderAll) {
									n.renderAllDefers = D(n.renderDefers, n.tagList).done(function() {
										n.trigger("loaded")
									}).progress(function(e, t) {
										if (t) {
											if (r) {
												t.trigger("beforeShow")
											}
											n.views[e].entity = t;
											if (r) {
												t.trigger("show")
											}
											if (e != n.curTag) {
												U(t.root, "display", "none")
											}
										}
									})
								} else if (n.curTag) {
									i = n.views[n.curTag];
									if (i) {
										n.renderOneDefer = e(i.name, i.param, n, yt).done(function(e) {
											if (r) {
												e.trigger("beforeShow")
											}
											i.entity = e;
											if (r) {
												e.trigger("show")
											}
											n.trigger("loaded")
										})
									}
								} else {
									n.trigger("loaded")
								}
								if (!n.isReady) {
									n.isReady = yt;
									n.trigger("ready");
									ot(n.options.ready, n)
								}
							},
							mergeParam: function(e) {
								var t = this,
									n;
								d(yt, t.param, e);
								if (t.curTag && t.views[t.curTag]) {
									n = t.views[t.curTag];
									f.get(n.name, n.param).invoke("mergeParam", t.param)
								}
							},
							addView: function(t, n, r) {
								var i = this;
								t = t || n;
								if (i.renderAll && !i.curTag) {
									i.curTag = t
								}
								i.views[t] = {
									name: n,
									param: r
								};
								i.tagList.push(t);
								if (i.renderAll) {
									i.renderDefers.push(e(n, r, i, i.curTag === t))
								}
							},
							launch: function(t, n) {
								var r = this,
									s = r.views[r.curTag],
									o = r.views[t],
									u, a;
								if (r.renderOneDefer) {
									r.renderOneDefer.destroy();
									r.renderOneDefer = wt
								}
								if (o) {
									u = s && s.entity;
									a = o.entity;
									if (r.curTag === t && u) {
										u.mergeParam(d({}, r.param, n));
										u.trigger("refresh")
									} else {
										if (r.renderAll) {
											a.mergeParam(d({}, r.param, n));
											if (u) {
												U(u.root, "display", "none")
											}
											z(a.root, ["visibility", "display"]);
											i(a);
											a.notify("actived");
											if (u) {
												u.notify("deactived")
											}
											r.curTag = t;
											r.trigger("launch", t, n)
										} else {
											if (u) {
												u.trigger("beforeHide")
											}
											a = o.entity = wt;
											r.renderOneDefer = e(o.name, d({}, o.param, r.param, n), r).done(function(e) {
												if (e) {
													a = o.entity = e;
													a.mergeParam(d({}, r.param, n));
													a.trigger("beforeShow");
													if (u) {
														U(u.root, "display", "none")
													}
													z(a.root, ["visibility", "display"]);
													i(a);
													if (u) {
														u.trigger("hide")
													}
													a.trigger("show");
													if (u) {
														u.destroy();
														s.entity = wt
													}
													r.trigger("launch", t, n)
												}
											}).fail(function() {
												if (u) {
													u.destroy();
													s.entity = wt
												}
											})
										}
										r.curTag = t
									}
								}
							},
							getCurViewOpt: function() {
								return this.views[this.curTag]
							},
							getCurView: function() {
								var e = this,
									t = e.curTag,
									n = e.views;
								return t && n[t] ? n[t].entity : wt
							},
							pushMessage: function(e, t) {
								var n = this;
								if (n.curTag) {
									if (n.views[n.curTag].entity) {
										n.views[n.curTag].entity.trigger(e, t)
									} else {
										(n.renderOneDefer || n.renderAllDefer).done(function() {
											if (n.views[n.curTag].entity) {
												n.views[n.curTag].entity.trigger(e, t)
											}
										})
									}
								}
							},
							destroy: function() {
								var e = this;
								v(e.views, function(e, t) {
									if (t.entity && t.entity.destroy) {
										t.entity.destroy()
									}
									t.entity = wt
								});
								e.tagList.length = 0;
								e.renderDefers.forEach(function(e) {
									e.destroy()
								});
								e.renderDefers.length = 0;
								if (e.renderAllDefer) {
									e.renderAllDefer.destroy()
								}
								if (e.renderOneDefer) {
									e.renderOneDefer.destroy()
								}
								clearTimeout(e.pushMessageTimer);
								v(e.plugins, function(e, t) {
									if (t && a(t.destroy)) {
										t.destroy()
									}
								});
								T(e);
								e.destroyed = yt
							}
						}, Xt);
						s.inject = function(e) {
							f = e
						};
						return s
					});
					e("view", function() {
						function e() {
							return gt.createElement(St.view)
						}

						function n(e) {
							var t = e.options.init;
							v(t, function(t, n) {
								e[t] = a(n) ? n.bind(e) : n
							})
						}

						function r(e) {
							v(e.options.bindEvents, function(t, n) {
								if (a(n)) {
									e.on(t, n.bind(e))
								}
							})
						}

						function i(e, t) {
							var n = e.options,
								r;
							n.subViews.forEach(function(e) {
								n.modules.unshift({
									name: e.name + "-module",
									defaultTag: "index",
									container: e.container,
									ready: wt,
									views: [{
										tag: "index",
										name: e.name,
										param: e.param
									}],
									plugins: [],
									renderEvent: e.renderEvent
								})
							});
							n.modules.forEach(function(n) {
								e.hasModule = yt;
								r = new y(n, t);
								r.parentView = e;
								e.modules[n.name] = r
							})
						}

						function s(e) {
							var t = E.getGlobal();
							t.concat(e.options.plugins).forEach(function(t) {
								var n = u(t) ? t : t.name,
									r = t.options || e.options[S(n) + "Options"] || {},
									i = E.get(n),
									s;
								if (i && a(i.adapter)) {
									s = a(r) ? r : d(yt, {}, i.options, r);
									e.plugins[n] = i.adapter(e, s, xt)
								}
							})
						}

						function o(e, t) {
							var n = {
								param: {}
							};
							v(st(e), function(e, r) {
								if (!e.indexOf(t)) {
									var i = e.substring(t.length).replace(/\w/i, function(e) {
										return e.toLowerCase()
									});
									if (!i.indexOf("param")) {
										n.param[i.substring(5).replace(/\w/i, function(e) {
											return e.toLowerCase()
										})] = r
									} else {
										n[i] = r
									}
								}
							});
							return n
						}

						function l(e, t) {
							t = (u(t) ? e.root.querySelector(t) : t) || e.root;
							m(t.querySelectorAll("[" + St.widget + "]")).forEach(function(t) {
								var n = R(t, St.widget),
									r, i, s, u, f;
								if (x.exists(n)) {
									i = x.get(n).eventName;
									u = x.get(n).adapter;
									s = function() {
										f = o(t, n);
										r = u(t, f, e);
										if (f.id) {
											e.widgets[f.id] = r
										}
									};
									if (x.isEvent(n)) {
										f = o(t, n);
										i = f.eventType || i;
										X(t, i, s, bt);
										e.on("destroy", function() {
											V(t, i, s)
										})
									} else {
										if (e.isReady) {
											s()
										} else {
											e.on("ready", function() {
												s()
											})
										}
									}
									e.on("destroy", function() {
										if (r && a(r.destroy)) {
											r.destroy()
										}
										r = wt;
										u = wt;
										f = wt;
										s = wt
									})
								}
							})
						}

						function c(e) {
							e.isReady = yt;
							e.trigger("ready");
							ot(e.options.ready, e);
							e.trigger("completed")
						}

						function h(e) {
							return e.split("-")[0].split(":")[1]
						}

						function p(e) {
							var t = this;
							t.options = d(yt, {}, k, e);
							t.name = t.options.name || "view-" + w();
							t.container = wt;
							t.isReady = bt;
							t.isShow = bt;
							t.locked = bt;
							t.root = wt;
							t.nodes = wt;
							t.param = {};
							t.parentModule = wt;
							t.parentView = wt;
							t.hasModule = bt;
							t.modules = {};
							t.plugins = {};
							t.widgets = {};
							t.extra = d({}, t.options.extra);
							t.renderEventTimer = wt;
							t.renderDeferred = new _;
							t.moduleDeferreds = [];
							t.modulParallelDeferred = wt;
							n(t);
							r(t);
							i(t, h(t.name));
							s(t);
							t.on("show", function() {
								t.isShow = yt
							});
							t.on("hide", function() {
								t.isShow = bt
							})
						}
						var y = t("module"),
							b = t("fetchNode"),
							E = t("pluginM"),
							x = t("widgetM"),
							N = t("display");
						var C = 10;
						var k = {
							init: {},
							html: wt,
							fetch: wt,
							classNames: [],
							attrs: {},
							styles: {},
							destroyDom: yt,
							supportHash: yt,
							ready: wt,
							modules: [],
							subViews: [],
							plugins: [],
							bindEvents: {},
							extra: {}
						};
						d(p.prototype, Xt, {
							renderTo: function(t) {
								var n = this;
								if (!n.locked) {
									n.locked = yt;
									n.container = t;
									if (!n.isReady) {
										n.root = e();
										R(n.root, "qapp-name", n.name);
										J(n.root, n.options.classNames.join(" "));
										R(n.root, n.options.attrs);
										U(n.root, n.options.styles);
										n.trigger("loadStart");
										b(n).done(function() {
											n.html = n.options.html;
											n.trigger("loadEnd");
											n.container.appendChild(n.root);
											n.renderHTML().done(function() {
												n.trigger("rendered");
												if (n.hasModule) {
													v(n.modules, function(e, t) {
														n.moduleDeferreds.push((new _).startWith(function(e) {
															t.once("loaded", function() {
																e.resolve()
															});
															t.renderTo(t.options.container && n.root.querySelector(t.options.container) || n.root)
														}))
													});
													n.modulParallelDeferred = P(n.moduleDeferreds).done(function() {
														n.trigger("loaded");
														n.locked = bt;
														c(n)
													})
												} else {
													n.trigger("loaded");
													n.locked = bt;
													c(n)
												}
											})
										})
									} else {
										n.trigger("rendered");
										n.container.appendChild(n.root);
										n.trigger("loaded");
										n.locked = bt;
										n.trigger("completed")
									}
								}
								return n
							},
							renderHTML: function(e) {
								var t = this,
									n = t.renderDeferred,
									r = function(e) {
										if (t.renderEventTimer) {
											clearTimeout(t.renderEventTimer);
											t.renderEventTimer = wt
										}
										t.renderEventTimer = g(function() {
											if (t.root) {
												n.resolve()
											}
										}, C)
									};
								t.html = e || t.html;
								t.nodes = B(t.html).children;
								if (t.nodes.length) {
									X(t.root, "DOMNodeInserted", r, bt);
									j(t.root, t.nodes);
									n.done(function() {
										V(t.root, "DOMNodeInserted", r);
										l(t)
									});
									t.renderEventTimer = g(function() {
										if (t.root) {
											n.resolve()
										}
									}, C)
								} else {
									if (t.root) {
										l(t);
										n.resolve()
									}
								}
								return n
							},
							staticBuild: function(e) {
								var t = this;
								if (e && f(e)) {
									t.trigger("loadStart");
									t.html = e.innerHTML || "";
									t.trigger("loadEnd");
									t.container = e.parentNode || e;
									t.root = e;
									R(t.root, "qapp-name", t.name);
									J(t.root, t.options.classNames.join(" "));
									R(t.root, t.options.attrs);
									U(t.root, t.options.styles);
									t.nodes = m(e.children) || [];
									l(t);
									t.trigger("rendered");
									t.trigger("loaded");
									c(t);
									t.trigger("completed");
									t.trigger("beforeShow");
									t.trigger("show");
									t.trigger("actived")
								}
								return t
							},
							show: N.show,
							hide: N.hide,
							close: N.hide,
							mergeParam: function(e) {
								var t = this;
								d(yt, t.param, e);
								v(t.modules, function(e, n) {
									n.mergeParam(t.param)
								});
								return t
							},
							getInnerView: function(e) {
								var t = this,
									n, r;
								if (e) {
									for (n in t.modules) {
										r = t.modules[n].getCurViewOpt();
										if (r.entity && r.name === e) {
											return r.entity
										}
									}
								}
								return wt
							},
							fn: function(e) {
								var t = this;
								return function() {
									return a(t[e]) ? t[e].apply(this, m(arguments)) : wt
								}
							},
							frontOn: function(e, t) {
								var n = this,
									r = n._events[e] = n._events[e] || [];
								r.unshift({
									callback: t,
									ctx: n
								});
								return n
							},
							dispatch: function() {
								var e = this,
									t = e.parentView,
									n = m(arguments);
								if (e.trigger.apply(e, n) && t) {
									if (t.isReady && !t.locked) {
										t.trigger.apply(t, n)
									} else {
										t.on("completed", function() {
											t.trigger.apply(t, n)
										})
									}
								}
							},
							notify: function() {
								var e = this,
									t = m(arguments),
									n;
								if (e.trigger.apply(e, t) && e.hasModule) {
									v(e.modules, function(e, r) {
										n = r.getCurView();
										if (n) {
											n.notify.apply(n, t)
										}
									})
								}
							},
							scanWidget: function(e) {
								l(this, e)
							},
							showWidget: function(e, t, n) {
								if (widgets[e]) {
									if (f(t)) {
										return widgets[e].adapter(t, n, this)
									} else {
										return widgets[e].adapter(wt, t, n, this)
									}
								}
							},
							destroy: function() {
								var e = this;
								if (e.options.destroyDom) {
									I(e.root)
								}
								clearTimeout(e.renderEventTimer);
								if (e.renderDeferred) {
									e.renderDeferred.destroy()
								}
								if (e.hasModule) {
									e.moduleDeferreds.forEach(function(e) {
										e.destroy()
									});
									e.moduleDeferreds.length = 0;
									if (e.modulParallelDeferred) {
										e.modulParallelDeferred.destroy()
									}
								}
								v(e.modules, function(e, t) {
									t.destroy()
								});
								v(e.plugins, function(e, t) {
									if (t && a(t.destroy)) {
										t.destroy()
									}
								});
								v(e.widgets, function(e, t) {
									if (t && a(t.destroy)) {
										t.destroy()
									}
								});
								e.trigger("destroy");
								e.off();
								T(e);
								e.destroyed = yt;
								return e
							}
						});
						return p
					});
					e("taskQ", function() {
						function e(e) {
							dt.trigger("running", yt);
							D(e, [], yt).done(function() {
								n.forEach(function(e) {
									if (e && a(e.destroy)) {
										e.destroy()
									}
								});
								n = wt;
								dt.trigger("running", bt)
							}).progress(function() {
								t.trigger("ev")
							})
						}
						var t = M(),
							n = wt,
							r = 500;
						var i = {
							push: function(t) {
								if (n) {
									n.push(t)
								} else {
									n = [t];
									e(n)
								}
							},
							pushTask: function(e) {
								i.push((new _).startWith(function(t) {
									try {
										e(t)
									} catch (n) {}
									g(function() {
										if (t && a(t.resolve)) {
											t.resolve()
										}
									}, r)
								}))
							},
							addListener: function(e) {
								t.on("ev", e)
							}
						};
						return i
					});
					e("viewM", function() {
						function e(e) {}

						function n(e) {
							return e.split(":")[0]
						}

						function r(t, n, r) {
							var i;
							if (b[t] && b[t][n]) {
								r(b[t][n])
							} else if (y[t]) {
								i = b[t][n] = new c(d({
									name: t + ":" + n
								}, y[t]));
								i.on("destroy", function() {
									b[t][n] = wt
								});
								r(i)
							} else {
								e(t)
							}
						}

						function i(t, n) {
							var r = wt;
							if (b[t] && b[t][n]) {
								r = b[t][n]
							} else if (y[t]) {
								r = b[t][n] = new c(d({
									name: t + ":" + n
								}, y[t]));
								r.on("destroy", function() {
									b[t][n] = wt
								})
							} else {
								e(t)
							}
							return r
						}

						function s(e) {
							var t = e.split(":");
							return {
								name: t[0],
								index: t[1] || 0
							}
						}

						function o(e, t) {
							v(t, function(t, n) {
								if (t.indexOf("on") === 0 && a(n) && t != "onComplete") {
									e.on(t.substring(2).replace(/\w/, function(e) {
										return e.toLowerCase()
									}), n)
								}
							})
						}

						function l(e) {
							return d.apply(wt, [yt, {}].concat(m(e).map(function(e) {
								return u(e) ? y[e] || {} : e
							})))
						}
						var c = t("view"),
							h = t("module"),
							p = t("taskQ");
						var y = dt._viewOptionsMap = {},
							b = dt._viewMap = {};
						var w = {
							define: function(e) {
								if (u(e)) {
									y[e] = l(arguments);
									b[e] = []
								}
							},
							undefine: function(e) {
								if (u(e)) {
									y[e] = wt
								}
							},
							getOptions: function(e) {
								return y[e]
							},
							create: function() {
								var e = new c(l(arguments)),
									t = e.name;
								if (t) {
									var n = s(t);
									b[n.name][n.index] = e;
									e.on("destroy", function() {
										b[n.name][n.index] = wt
									})
								}
								return e
							},
							structure: function(e, t) {
								t = t || {};
								t.ani = u(t.ani) ? {
									name: t.ani
								} : t.ani || {};
								var n = d(yt, {}, w.getOptions(e.split(":")[0])),
									r = t.ani.name || xt.defaultAnimate;
								n.name = e;
								n.init = n.init || {};
								n.init.param = t.param || {};
								n.styles = d(n.styles || {}, t.styles);
								n.classNames = (n.classNames || []).concat(t.classNames);
								if (r) {
									n.plugins = (n.plugins || []).concat([{
										name: r,
										options: d({}, w.getExtraOption(e, r), t.ani)
									}])
								}
								var i = w.create(n);
								i.param = d({}, t.param);
								o(i, t);
								i.complete = function(e) {
									if (a(t.onComplete)) {
										t.onComplete.call(i, e)
									}
								};
								i.on("callback", i.complete);
								return i
							},
							build: function(e) {
								var t = l(m(arguments).slice(1)),
									n;
								if (e && f(e)) {
									t.name = R(e, "qapp-name");
									n = new c(t);
									n.staticBuild(e)
								}
								return n
							},
							show: function(e, t) {
								var n = m(arguments);
								var r = w.structure(e, t);
								p.pushTask(function(e) {
									r.once("show", function() {
										e.resolve()
									});
									r.once("hide", function() {
										g(function() {
											if (a(r.destroy)) {
												r.destroy()
											}
										})
									});
									r.show.apply(r, n.slice(2))
								});
								return r
							},
							exists: function(e) {
								return !!y[e]
							},
							get: function(e, t) {
								var n = {},
									i;
								if (u(e)) {
									n = s(e)
								}
								if (a(t)) {
									r(n.name, n.index, function(e) {
										t(e)
									})
								} else {
									i = {
										invoke: function() {
											var e = m(arguments),
												t = e.shift();
											r(n.name, n.index, function(n) {
												ot(n[t], n, e)
											});
											return i
										},
										pushMessage: function(e, t) {
											var r = b[n.name] && b[n.name][n.index];
											if (r) {
												r.trigger(e, t)
											}
											return i
										}
									};
									return i
								}
							},
							getSync: function(e) {
								var t = {},
									n;
								if (u(e)) {
									n = e.split(":");
									t = {
										name: n[0],
										index: n[1] || 0
									}
								}
								return i(t.name, t.index)
							},
							getExtraOption: function(e, t) {
								var r, i = y[n(e)];
								if (i) {
									r = i.extra && i.extra[xt.type] || i.extra || {};
									return r[t]
								}
							},
							getHashParams: function(e) {
								var t = y[n(e)];
								return t ? t.hashParams || [] : []
							},
							getRealName: n
						};
						h.inject(w);
						return w
					});
					e("viewQ", function() {
						function e() {
							var e = d[0],
								t;
							if (e && e.root) {
								t = parseInt(U(e.root, "z-index"))
							}
							return (t || E()) - 1
						}

						function r() {
							if (d.length) {
								return d[d.length - 1]
							}
						}

						function i(e) {
							var t = d.length,
								n;
							for (n = t - 1; n > -1; n--) {
								if (d[n].name == e) {
									return n
								}
							}
							return -1
						}

						function s(e) {
							if (e.indexOf(":new") > -1) {
								return e.replace(":new", ":" + w())
							} else {
								for (var t = 0, n = d.length; t < n; t++) {
									if (e == d[t].name.split(":")[0]) {
										return false
									}
								}
								return e
							}
						}

						function o(e, t, n, r, i) {
							t = t || "show";
							v(function(s) {
								e.on(t.replace("_", ""), function() {
									g(function() {
										s.resolve().done(i)
									})
								});
								if (a(n)) {
									n()
								} else {
									e[t](r);
									if (t.indexOf("hide") > -1 && !r) {
										s.resolve()
									}
								}
							})
						}

						function u(e) {
							o(e, "_hide", function() {
								l.hide.call(e)
							})
						}

						function f(e) {
							var t = e.hide,
								n = e.close,
								r = e._events.actived = e._events.actived || [];
							r.unshift({
								callback: function() {
									y.preView = y.curView;
									y.curView = e.name
								},
								ctx: e
							});
							e.once("hide", function() {
								var t = d.indexOf(e);
								if (t > -1) {
									d.splice(t, 1);
									g(function() {
										if (a(e.destroy)) {
											e.destroy()
										}
									})
								}
							});
							e.hide = e._hide = function(n) {
								if (n === yt) {
									t.call(e)
								} else {
									v(function(n) {
										e.once("hide", function() {
											g(n.resolve)
										});
										t.call(e)
									})
								}
							};
							e.close = e._close = function(t) {
								if (t === bt) {
									n.call(e)
								} else {
									v(function(t) {
										e.once("hide", function() {
											g(t.resolve)
										});
										n.call(e)
									})
								}
							}
						}
						var l = t("display"),
							c = t("taskQ"),
							h = t("viewM"),
							p;
						var d = [],
							v = c.pushTask,
							m = h.getRealName;
						var y = {
							curView: wt,
							preView: wt,
							add: function(e, t, r, i) {
								v(function(o) {
									e = s(e);
									var u = a(i) ? i : n;
									if (e) {
										if (h.exists(m(e))) {
											y[r ? "unshift" : "push"](h.structure(e, t), u);
											o.resolve()
										} else {
											o.resolve().done(u)
										}
									} else {
										o.resolve().done(u)
									}
								})
							},
							push: function(e, t) {
								f(e);
								e.once("show", function() {
									var t = r();
									g(function() {
										e.notify("actived");
										if (t) {
											t.notify("deactived")
										}
									});
									d.push(e)
								});
								o(e, "show", wt, bt, function() {
									t(e)
								})
							},
							unshift: function(t, n) {
								f(t);
								t.once("show", function() {
									d.unshift(t);
									if (d.length === 1) {
										g(function() {
											t.notify("actived")
										})
									}
								});
								t.on("beforeShow", function() {
									t.initialShow = bt;
									U(t.root, "z-index", e() - 1)
								});
								o(t, "show", function() {
									t.show(yt)
								}, bt, function() {
									n(t)
								})
							},
							pop: function(e, t, n) {
								var i = r();
								if (e === Et) {
									e = 1
								}
								if (i && e > 0) {
									var s = function(r) {
										var s = d.length,
											a = s - e,
											f;
										if (a >= 0) {
											for (f = a; f < s - 1; f++) {
												u(d[f])
											}
										}
										if (a > 0 && e > 0) {
											i.once("hide", function() {
												var e = d[a - 1];
												if (e) {
													if (t && t.data) {
														e.notify("receiveData", t)
													}
													e.notify("actived")
												}
											})
										}
										o(i, "_hide", wt, r, n)
									};
									v(function(t) {
										if (e < d.length) {
											s(yt)
										} else if (e == d.length) {
											if (m(d[0].name) !== xt.indexView) {
												y.add(xt.indexView, {}, yt);
												v(function(e) {
													s(bt);
													e.resolve()
												})
											} else if (d.length > 1) {
												e = d.length - 1;
												s(yt)
											}
										}
										t.resolve()
									})
								}
							},
							remove: function(e, t, n) {
								v(function(r) {
									var s = i(e);
									if (s > -1) {
										y.pop(d.length - s, t, n)
									}
									r.resolve()
								})
							},
							backTo: function(e, t, n, r) {
								v(function(s) {
									var o = i(e),
										u = d.length;
									if (o === -1) {
										y.add(m(e), {
											param: n
										}, yt, function(e) {
											p._reset(e);
											y.pop(u, t, r)
										})
									} else {
										u = d.length - o - 1;
										y.pop(u, t, r)
									}
									s.resolve()
								})
							},
							refresh: function(e) {
								var t = r();
								if (t) {
									t.notify("receiveData", e)
								}
							},
							clear: function(e, t) {
								v(function(n) {
									y.pop(d.length, e, t);
									n.resolve()
								})
							},
							inject: function(e) {
								p = e
							}
						};
						return y
					});
					e("history", function() {
						function e(e) {
							if (e.length > 2 && e.lastIndexOf(":0") == e.length - 2) {
								return e.substring(0, e.length - 2)
							}
							return e
						}

						function n(e) {
							e = q(e);
							var t = y.getOptions(e);
							if (!t || t.supportHash === bt) {
								return bt
							}
							if (C.all && C.except.indexOf(e) > -1) {
								return bt
							}
							if (!C.all && C.exist.indexOf(e) === -1) {
								return bt
							}
							return yt
						}

						function r(e) {
							return e[e.length - 1]
						}

						function i(e, t) {
							I.trigger("change", {
								type: e,
								data: d(yt, {}, t)
							})
						}

						function s() {
							var e = {},
								t = l();
							if (t.view && t.view.indexOf("__")) {
								if (x) {
									P = H
								} else {
									if (t.query[H]) {
										D = t.query[H];
										P = _ + D
									} else {
										do {
											D = w();
											P = _ + D
										} while (T[P]);
										h(t, yt)
									}
								}
								try {
									e = JSON.parse(T.getItem(P)) || {}
								} catch (n) {}
								if (e.basePath == U) {
									B = m(e.history);
									j = e.index;
									if (B[j] !== t.view) {
										B = [];
										j = 0;
										T.removeItem(P)
									}
								}
								if (!B.length) {
									B.push(t.view)
								}
							}
						}

						function o() {
							try {
								T.setItem(P, JSON.stringify({
									basePath: U,
									history: B,
									index: j
								}))
							} catch (e) {}
						}

						function u(e, t) {
							if (t) {
								B[j] = e
							} else {
								j++;
								B = B.slice(0, j);
								B.push(e)
							}
							o()
						}

						function a() {
							var e = b.hash,
								t = e.indexOf("#"),
								n;
							e = t > -1 ? e.slice(t + 1) : "";
							n = e.indexOf("#");
							if (n > -1) {
								e = e.slice(0, n)
							}
							return e
						}

						function f(e, t) {
							var n = U + "#" + e + "#";
							z = e;
							if (L) {
								E[(t ? "replace" : "push") + "State"]({
									path: n
								}, gt.title, n)
							} else {
								if (t) {
									b.replace(n)
								} else {
									b.href = n
								}
							}
						}

						function l(t) {
							t = t || a();
							var n = t.split("?"),
								r = e(n[0]) || xt.indexView,
								i = A(n[1] || "", yt);
							return {
								view: r,
								query: i
							}
						}

						function c() {
							if (W) {
								return W
							}
							W = N ? function() {
								var e = l();
								e[H] = Et;
								return e
							}() : r(F);
							return W
						}

						function h(e, t) {
							e = e || {};
							var n = e.view || xt.indexView,
								r = e.query || {},
								i = c(),
								s;
							t = t || n == i.view;
							W = wt;
							if (N) {
								if (!x) {
									r[H] = D
								}
								s = k(r, yt);
								f(n + (s ? "?" + s : ""), t);
								u(n, t)
							} else {
								var o = {
									view: n,
									query: r
								};
								if (t) {
									F[F.length - 1] = o
								} else {
									F.push(o)
								}
							}
						}

						function p(e) {
							var t = e ? l(e) : c(),
								r = t.view,
								s = B.indexOf(r),
								a;
							if (s === -1) {
								u(r);
								i("forward", {
									info: t
								})
							} else {
								a = s - j;
								j = s;
								if (a < 0) {
									if (!n(t.view)) {
										E.back()
									} else {
										i("back", {
											info: t,
											param: R.shift()
										})
									}
								} else if (a === 0) {
									i("refresh", {
										info: t
									})
								} else if (a === 1) {
									if (!n(t.view)) {
										E.go(j < B.length - 1 ? 1 : -1)
									} else {
										i("forward", {
											info: t
										})
									}
								} else {
									g(function() {
										b.reload()
									})
								}
								o()
							}
						}

						function v() {
							mt.addEventListener(O, function() {
								if (z !== a()) {
									z = a();
									W = wt;
									p()
								}
							})
						}
						var y = t("viewM");
						var b = mt.location,
							E = mt.history,
							S = mt.sessionStorage,
							x = !!S,
							T = x ? mt.sessionStorage : mt.localStorage,
							N = yt,
							C = wt,
							L = !!E.pushState,
							O = L ? "popstate" : "hashchange",
							_ = "QAPP_HISTORY_",
							D = 0,
							P = "",
							H = "_history",
							B = [],
							j = 0,
							F = [],
							I = M(),
							q = y.getRealName,
							R = [],
							U = function() {
								var e = b.href,
									t = e.indexOf("#");
								if (t > -1) {
									e = e.slice(0, t)
								}
								return e
							}(),
							z, W;
						var X = {
							basePath: U,
							start: function(e) {
								var t;
								N = !!e;
								z = a();
								if (N) {
									C = xt.hashSupport;
									t = c();
									s();
									if (!n(t.view)) {
										if (j > 0) {
											j--;
											W = wt;
											E.back();
											o();
											g(function() {
												X.start(e)
											}, 100);
											return
										} else {
											t = {
												view: xt.indexView,
												query: {}
											};
											h(t, yt)
										}
									}
									i("init", {
										info: c()
									});
									v()
								} else {
									t = {
										view: xt.indexView,
										query: l().query
									};
									F.push(t);
									i("init", {
										info: t
									})
								}
							},
							analyzeHash: l,
							setHashInfo: h,
							getHashInfo: c,
							refreshParam: function(e) {
								var t = c();
								t.query = d(t.query, e);
								h(t, yt)
							},
							back: function(e, t) {
								var n = c().view,
									s = {
										view: q(n),
										name: n,
										data: t
									};
								e = e || 1;
								if (N) {
									R.push(s);
									if (j > e - 1) {
										E.go(-e)
									} else {
										var o = xt.indexView;
										if (j === 0 && o === n) {
											dt.trigger("close");
											E.go(-1)
										} else {
											if (j > 0) {
												E.go(-j)
											}
											h({
												view: o
											}, yt);
											i("home", {
												info: c()
											})
										}
									}
								} else {
									var u = F.length - e;
									if (u < 1) {
										u = 1
									}
									F = F.slice(0, u);
									W = wt;
									i("back", {
										info: r(F),
										param: s
									})
								}
							},
							backTo: function(e, t, n) {
								var r = N ? B : F.map(function(e) {
										return e.view
									}),
									s = N ? j : r.length - 1,
									o;
								for (o = s; o > -1; o--) {
									if (!n && q(r[o]) === e || r[o] === e) {
										if (o === s) {
											i("refresh", {
												info: c(),
												param: t
											})
										} else {
											X.back(s - o, t)
										}
										return yt
									}
								}
								return bt
							},
							home: function(e) {
								X.back(N ? j : F.length - 1, e)
							},
							exit: function() {
								dt.trigger("close");
								if (N) {
									E.go(-j - 1)
								} else {
									E.back()
								}
							},
							onChange: function(e) {
								I.on("change", e)
							},
							buildHash: function(e) {
								var t = e.view,
									n = e.query,
									r = k(n, yt);
								return U + "#" + t + (r ? "?" + r : "") + "#"
							}
						};
						return X
					});
					e("router", function() {
						function e(e) {
							if (e) {
								var t = e.complete,
									n;
								e.hide = function(e) {
									y.back(1, e || n)
								};
								e.complete = function(r) {
									n = r;
									ot(t, e, [r])
								}
							}
						}

						function n(t) {
							s.onChange(function(t) {
								var n = t.data,
									r = n.info,
									i = n.param,
									s = t.type;
								switch (s) {
									case "init":
										if (xt.autoInit) {
											o.add(r.view, {
												param: r.query
											}, yt, function(t) {
												e(t);
												h.trigger(s, t)
											})
										}
										break;
									case "forward":
										g(function() {
											o.add(r.view, {
												param: r.query
											}, bt, function(t) {
												e(t);
												h.trigger(s, t)
											})
										}, 100);
										break;
									case "refresh":
										o.refresh({
											view: u.getRealName(r.view),
											name: r.view,
											data: i
										});
										h.trigger(s);
										break;
									case "back":
									case "home":
										g(function() {
											o.backTo(r.view, i, r.query, function() {
												h.trigger(s)
											})
										}, 100);
										break
								}
							});
							s.start(t)
						}

						function r() {
							c.add("router", "tap", function(e) {
								var t = e.el,
									n = R(t, "href"),
									r = R(t, "target"),
									i = A(R(t, "param") || "", yt),
									o, u, a, f;
								if (!n.indexOf("#!")) {
									if (n.indexOf("home") == 2) {
										y.home(i)
									} else {
										n = n.slice(2);
										a = n.match(l);
										if (a) {
											y.back(a[2] || 1, i)
										}
									}
								} else if (!n.indexOf("#")) {
									n = n.slice(1);
									o = s.analyzeHash(n);
									if (r === "_blank") {
										y.open(o.view + ":new", {
											param: d(o.query, i)
										})
									} else {
										f = o.view.split(":");
										u = f.length > 0;
										if (f[1] == "0") {
											o.view = f[0]
										}
										if (y.backTo(o.view, i, u) === bt) {
											y.open(o.view, {
												param: d(o.query, i)
											})
										}
									}
								}
							})
						}

						function i(e) {
							return function() {
								var t = m(arguments);
								if (t[1] && t[1].skipFilter || v.reduce(function(e, n) {
										return e && n(t) !== bt
									}, yt)) {
									return ot(s[e], s, t)
								}
							}
						}
						var s = t("history"),
							o = t("viewQ"),
							u = t("viewM");
						var f = bt,
							l = /back(\((\d+)\))?/,
							c = at(gt, [], St.role),
							h = M(),
							p = [],
							v = [];
						var y = d(h, {
							start: function(e) {
								if (!f) {
									f = yt;
									n(e);
									r();
									s.onChange(function(e) {
										h.trigger("history", e)
									})
								}
							},
							open: function(t, n, r) {
								var i = m(arguments);
								if (i[1] && i[1].skipFilter || p.reduce(function(e, t) {
										return e && t(i) !== bt
									}, yt)) {
									n = n || {};
									var u = n.param || {};
									o.add(t, n, !!n.atBottom, function(t) {
										if (t) {
											e(t);
											s.setHashInfo({
												view: t.name,
												query: u
											});
											ot(r, t, [t]);
											if (!n.atBottom) {
												h.trigger("forward", t)
											}
										} else {
											ot(r)
										}
									})
								}
							},
							back: i("back"),
							backTo: i("backTo"),
							home: i("home"),
							"goto": function(e, t, n, r) {
								if (s.backTo(e, n, r) === bt) {
									y.open(e, t)
								}
							},
							exit: s.exit,
							refreshParam: s.refreshParam,
							addOpenFilter: function(e) {
								if (a(e)) {
									p = p.concat(e)
								}
							},
							removeOpenFilter: function(e) {
								var t = p.indexOf(e);
								if (t > -1) {
									p.splice(t, 1)
								}
							},
							addBackFilter: function(e) {
								if (a(e)) {
									v = v.concat(e)
								}
							},
							removeBackFilter: function(e) {
								var t = v.indexOf(e);
								if (t > -1) {
									v.splice(t, 1)
								}
							},
							getCurViewName: function(e) {
								return o.curView && (e ? o.curView : u.getRealName(o.curView))
							},
							getPreViewName: function(e) {
								return o.preView && (e ? o.preView : u.getRealName(o.preView))
							},
							_newSite: function() {
								mt.open(s.basePath)
							},
							_reset: e
						});
						o.inject(y);
						return y
					});
					var an = t("viewM"),
						fn = t("history"),
						ln = t("router"),
						cn = t("pluginM"),
						hn = t("widgetM");
					var pn = {},
						dn = [],
						vn = new _,
						mn = [];
					pt(function() {
						function e() {
							r = n.clientWidth;
							i = n.clientHeight;
							d(pn, {
								width: r,
								height: i,
								rootWidth: r - xt.root.left - xt.root.right,
								rootHeight: i - xt.root.top - xt.root.bottom
							});
							U(gt.body, "height", i + "px");
							U(s, {
								height: pn.rootHeight + "px",
								width: pn.rootWidth + "px"
							})
						}

						function t() {
							var t = n.clientHeight;
							if (t >= i) {
								if (t > i) {
									e()
								}
							}
						}
						var n = gt.documentElement,
							r = n.clientWidth,
							i = n.clientHeight,
							s = gt.createElement(St.app);
						d(pn, {
							width: r,
							height: i,
							rootTop: xt.root.top,
							rootLeft: xt.root.left
						});
						U(gt.body, "height", i + "px");
						if (xt.customRoot) {
							pn.rootWidth = r - xt.root.left - xt.root.right;
							pn.rootHeight = i - xt.root.top - xt.root.bottom;
							U(s, {
								top: pn.rootTop + "px",
								left: pn.rootLeft + "px",
								height: pn.rootHeight + "px",
								width: pn.rootWidth + "px"
							});
							j(gt.body, s)
						} else {
							pn.rootWidth = r;
							pn.rootHeight = i;
							s = gt.body
						}
						dt.root = xt.appRoot = s;
						ln.start(!!xt.hashRouter);
						if (xt.screen) {
							if (xt.screen.largeChange) {
								mt.addEventListener("resize", t)
							}
							if (xt.screen.rotate) {
								rn.on("change", e)
							}
						}
						if (xt.gesture) {
							if (xt.gesture.open) {
								if (xt.gesture.ctrl) {
									dt.on("running", function(e) {
										$t[e ? "off" : "on"]()
									})
								}
								if (xt.gesture.longTap) {
									dt.gesture.allowLongTap()
								}
								if (xt.gesture.autoBlur) {
									var o = ["INPUT", "TEXTAREA"];
									X(gt.body, "touchstart", function(e) {
										if (o.indexOf(e.target.tagName.toUpperCase()) === -1) {
											Y()
										}
									})
								}
							} else {
								$t.off()
							}
						}
					});
					dt = d(dt, M());
					d(dt, {
						config: function(e) {
							var t = d(yt, xt, e),
								n = t.plugins,
								r = t.globalPlugins;
							if (o(r)) {
								cn.setGlobal(r)
							}
							if (o(n)) {
								n.forEach(function(e) {
									if (e && n.name) {
										cn.setOpt(e.name, e.options)
									}
								})
							} else if (n) {
								v(n, function(e, t) {
									if (e) {
										cn.setOpt(e, t)
									}
								})
							}
							return t
						},
						root: gt.body,
						origin: pn,
						defineView: an.define,
						undefineView: an.undefine,
						createView: an.create,
						buildView: an.build,
						existsView: an.exists,
						getView: an.get,
						getViewSync: an.getSync,
						addPlugin: cn.add,
						configPlugin: cn.setOpt,
						setGlobalPlugins: cn.setGlobal,
						addWidget: hn.add,
						showWidget: hn.show,
						router: ln,
						open: ln.open,
						exit: ln.exit,
						view: an,
						show: an.show,
						showView: an.show,
						hash: {
							getInfo: fn.getHashInfo,
							setInfo: fn.setHashInfo,
							analyzeHash: fn.analyzeHash,
							setParam: fn.refreshParam,
							build: fn.buildHash
						},
						sniff: Tt
					});
					var gn = dt.util = {};
					gn.ready = H;
					dt.ready = pt;
					dt.addReadyDependencies = function(e) {
						mn.push(e)
					};
					gn.query = function(e) {
						return gt.querySelector(e)
					};
					gn.queryAll = function(e) {
						return gt.querySelectorAll(e)
					};
					gn.is = i;
					gn.isObject = s;
					gn.isString = u;
					gn.isArray = o;
					gn.isFunction = a;
					gn.isNumber = l;
					gn.isElement = f;
					gn.isPlainObject = c;
					gn.isEmptyObject = h;
					gn.extend = d;
					gn.each = v;
					gn.makeArray = m;
					gn.delay = g;
					gn.associate = y;
					gn.mapping = b;
					gn.camelCase = S;
					gn.dasherize = x;
					gn.empty = T;
					gn.noop = n;
					gn.getUniqueID = w;
					gn.getZIndex = E;
					gn.jsonToQuery = k;
					gn.queryToJson = A;
					gn.parseURL = ft;
					gn.loader = ct;
					gn.builder = B;
					gn.appendNodes = j;
					gn.insertElement = F;
					gn.removeNode = I;
					gn.attr = R;
					gn.css = U;
					gn.removeStyle = z;
					gn.addClass = J;
					gn.removeClass = K;
					gn.fixEvent = W;
					gn.addEvent = X;
					gn.removeEvent = V;
					gn.dispatchEvent = $;
					gn.createStyle = Q;
					gn.size = tt;
					gn.position = it;
					gn.contains = Vt;
					gn.focus = G;
					gn.blur = Y;
					gn.animate = Jt;
					gn.dataSet = st;
					gn.delegatedEvent = at;
					gn.CustEvent = gn.custEvent = Xt;
					gn.Deferred = gn.deferred = _;
					gn.queue = D;
					gn.parallel = P;
					gn.gesture = dt.gesture = $t;
					dt.logger = gn.logger = ht;
					mt.QApp = dt;
					mt.SPA = dt;
					mt.IApp = dt;
					H(function() {
						if (mn.length) {
							P(mn).done(function() {
								vn.resolve()
							})
						} else {
							vn.resolve()
						}
					});
					(function() {
						function e(e) {
							z(e, o)
						}

						function t(e) {
							U(e, u, "");
							z(e, u)
						}

						function n(e) {
							return ~(e + "").indexOf("%") || ~(e + "").indexOf("px") ? e : e + "px"
						}

						function r(e, t, n) {
							t.on("loadEnd", function() {
								R(t.root, "qapp-ani", e);
								U(t.root, u, "hidden")
							});
							t.on("beforeHide", function() {
								Y(t.root)
							});
							t.on("destroy", function() {
								t.show = wt;
								t.hide = wt
							})
						}

						function i(e, t) {
							var n = -1,
								r, i;
							for (r = 0, i = e.length; r < i; r++) {
								if (e[r].view === t) {
									n = r;
									break
								}
							}
							return n
						}

						function s(e, t, n, r, i) {
							var s = 0;
							return P(e.map(function(e, i) {
								if (i < t) {
									e.view.trigger("beforeHide");
									return Jt(e.view.root, r ? f(e.translate, 0, 0) : f(0, e.translate, 0), n)
								} else {
									s += e.distance;
									return Jt(e.view.root, r ? f(s, 0, 0) : f(0, s, 0), n)
								}
							}))
						}
						var o = "display",
							u = "visibility";
						var a = function() {
							var e = navigator.userAgent.toLowerCase();
							if (Tt.ios || Tt.android && e.indexOf("micromessenger") > -1) {
								return 1
							}
							return 2
						}();
						var f = a == 1 ? function(e, t, n) {
							return {
								translate3d: e + "px, " + t + "px, " + n + "px"
							}
						} : function(e, t, n) {
							return {
								translate: e + "px, " + t + "px",
								translateZ: n + "px"
							}
						};
						var l = 10;
						var c = {
							position: "right",
							distance: 0,
							duration: 200,
							zIndex: 0
						};
						var h = {},
							p = bt;
						dt.addPlugin("moveEnter", c, function(o, u, v) {
							var m = {
									position: "absolute",
									top: 0,
									zIndex: u.zIndex || E()
								},
								y = v.type.indexOf && v.type.indexOf("pad") === -1,
								b = u.position === "right" || u.position === "left",
								w = u.position === "right" || u.position === "bottom" ? -1 : 1,
								S, x = bt,
								T, N = bt,
								C = bt;
							if (u.panBack === Et) {
								u.panBack = v.type === "app"
							}
							if (y) {
								u.distance = b ? pn.rootWidth : pn.rootHeight
							}
							S = w * u.distance;
							if (!v.animate) {
								u.duration = 0
							}
							if (y) {
								T = [];
								m.width = "100%";
								m.height = "100%"
							} else {
								if (!h[u.position]) {
									h[u.position] = []
								}
								T = h[u.position];
								m[b ? "height" : "width"] = "100%"
							}
							if (u.panBack && y && (u.position === "right" || u.position === "left")) {
								var k = function(e) {
									if (~e.directions.indexOf(u.position)) {
										return e.clientX - e.offsetX < l
									}
									return bt
								};
								var L = function(e) {
									if (C) {
										U(o.root, f(e.offsetX, 0, 0))
									} else if (!N) {
										N = yt;
										C = k(e)
									}
								};
								var A = function(e) {
									if (C) {
										C = bt;
										if (Math.abs(e.offsetX) > Math.abs(u.distance) / 2) {
											o.hide()
										} else {
											Jt(o.root, f(0, 0, 0), u.duration / 2).done()
										}
									}
									N = bt
								};
								o.on("show", function() {
									X(o.root, "pan", L);
									X(o.root, "panend", A)
								});
								o.on("hide", function() {
									V(o.root, "pan", L);
									V(o.root, "panend", A)
								});
								o.on("rendered", function() {
									var e = gt.createElement("div");
									e.className = "touch-opacity";
									U(e, {
										position: "absolute",
										zIndex: "9999",
										width: n(l),
										height: "100%",
										backgroundColor: "rgba(255, 255, 255, 0)"
									});
									U(e, u.position === "right" ? "left" : "right", "0");
									J(o.root, "shadow");
									o.root.appendChild(e)
								})
							}
							o.on("loaded", function() {
								if (!u.distance) {
									u.distance = tt(o.root)[b ? "width" : "height"]
								}
								if (y) {
									if (a === 3) {
										if (u.position === "bottom") {
											m.top = n(pn.rootHeight)
										} else {
											m[u.position] = n(-u.distance)
										}
									} else {
										if (u.position === "bottom") {
											m.top = n(pn.rootHeight - u.distance)
										} else {
											m[u.position] = n(0)
										}
										d(m, b ? f(-w * u.distance, 0, 0) : f(0, -w * u.distance, 0))
									}
								} else {
									if (u.position !== "bottom") {
										m[u.position] = n(-u.distance)
									} else {
										m.top = n(pn.rootHeight)
									}
								}
								U(o.root, m)
							});
							r("moveEnter", o, u);
							o.show = function(n) {
								Y();
								if (!p) {
									p = yt;
									x = yt;
									var r = i(T, o);
									if (~r) {
										s(T, r, n === yt || o.preventAnimate ? 0 : u.duration, b).done(function() {
											T.splice(0, r).forEach(function(e) {
												e.view.trigger("hide")
											});
											p = bt;
											x = bt;
											o.trigger("refresh")
										})
									} else {
										o.once("completed", function() {
											e(o.root);
											t(o.root);
											o.trigger("beforeShow");
											T.unshift({
												view: o,
												distance: y ? 0 : S,
												translate: y ? -S : 0
											});
											g(function() {
												s(T, 0, n === yt || o.preventAnimate ? 0 : u.duration, b, o.root).done(function() {
													p = bt;
													x = bt;
													z(o.root, "transform");
													o.trigger("show")
												})
											})
										});
										o.renderTo(dt.root)
									}
								}
								return o
							};
							o.hide = function(e) {
								if ((!p || y && !x) && o.isShow) {
									p = yt;
									var t = i(T, o);
									s(T, t + 1, e === yt || o.preventAnimate ? 0 : u.duration, b).done(function() {
										T.splice(0, t + 1).forEach(function(e) {
											e.view.trigger("hide")
										});
										p = bt
									})
								}
								return o
							};
							o.on("destroy", function() {
								m = wt;
								T = wt;
								o = wt
							});
							return {
								setOption: function(e) {
									u = d({}, c, e)
								}
							}
						})
					})()
				})()
			}(t.exports, t, e);
			e.____MODULES["2c088de690d2f86994b0feec93475475"] = t.exports
		})(this);
		(function(e) {
			var t = {
				id: "e24642d9bb10d27b80ed20283fa2d1ef",
				filename: "index.js",
				exports: {}
			};
			if (!e.____MODULES) {
				e.____MODULES = {}
			}
			var n = function(e, t, n) {
				(function() {
					function e(e) {
						return !(e === null || e === void 0)
					}

					function t(e, t) {
						e = (e === null ? "" : e).toString().trim();
						return t ? encodeURIComponent(e) : e
					}

					function n(n, r) {
						var i = [],
							s, o, u;
						for (s in n) {
							if (s === "$nullName") {
								i = i.concat(n[s])
							} else if (f.isArray(n[s])) {
								for (o = 0, u = n[s].length; o < u; o++) {
									if (!f.isFunction(n[s][o])) {
										i.push(s + "=" + t(n[s][o], r))
									}
								}
							} else if (!f.isFunction(n[s]) && e(n[s])) {
								i.push(s + "=" + t(n[s], r))
							}
						}
						return i.join("&")
					}

					function r() {
						var e = false;
						try {
							e = new XMLHttpRequest
						} catch (t) {
							try {
								e = new ActiveXObject("Msxml2.XMLHTTP")
							} catch (n) {
								try {
									e = new ActiveXObject("Microsoft.XMLHTTP")
								} catch (r) {
									e = false
								}
							}
						}
						return e
					}

					function i(e, t) {
						try {
							for (var n in t) {
								e.setRequestHeader(n, t[n])
							}
						} catch (r) {}
					}

					function o(e, t) {
						var o = r(),
							u, a = "",
							l = e.method.toLocaleLowerCase();
						if (e.withCredentials) {
							o.withCredentials = true
						}
						if (e.timeout) {
							u = f.delay(function() {
								try {
									t(null, {
										error: true,
										type: "Timeout"
									});
									o.abort()
								} catch (e) {}
							}, e.timeout)
						}
						o.onreadystatechange = function() {
							if (o.readyState == 4) {
								clearTimeout(u);
								var n = {};
								if (e.dataType === "xml") {
									n = o.responseXML
								} else if (e.dataType === "text") {
									n = o.responseText
								} else {
									try {
										n = o.responseText && typeof o.responseText === "string" ? JSON.parse(o.responseText) : {}
									} catch (r) {}
								}
								if (o.status === 200) {
									t(n)
								} else if (o.status === 0) {
									t(n, {
										error: true,
										type: "Abort"
									})
								} else {
									t(n, {
										error: true,
										type: "Fail"
									})
								}
							}
						};
						if (l === "get") {
							if (e.cache === false) {
								e.data.__rnd = (new Date).getTime()
							}
						}
						if (e.argsType === "query") {
							a = n(e.data, e.isEncode)
						} else if (e.argsType === "json") {
							a = JSON.stringify(e.data);
							if (e.isEncode) {
								a = encodeURIComponent(a)
							}
						}
						if (!e.headers["Content-Type"]) {
							if (e.argsType === "json") {
								e.headers["Content-Type"] = "application/json;charset=" + e.charset
							} else {
								e.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=" + e.charset
							}
						}
						if (!e.headers["X-Requested-With"]) {
							e.headers["X-Requested-With"] = "XMLHttpRequest"
						}
						if (e.data && e.hasContent && e.contentType !== false || e.contentType) {
							jqXHR.setRequestHeader("Content-Type", s.contentType)
						}
						if (l === "get") {
							var c;
							if (a) {
								c = e.url + (!~e.url.indexOf("?") ? "?" : "&") + a
							} else {
								c = e.url
							}
							o.open("get", c, true);
							i(o, e.headers);
							o.send("")
						} else {
							o.open("post", e.url, true);
							i(o, e.headers);
							o.send(a)
						}
						return o
					}

					function u(e, t) {
						function n() {
							if (a) {
								window[o] = u
							} else {
								delete window[o]
							}
							l.remove()
						}
						var r = {},
							i = false,
							s = f.parseURL(e.url),
							o = "",
							u, a = false,
							l, c;
						s.query = f.extend(s.query, e.data);
						if (e.jsonpCallback) {
							a = true;
							u = window[e.jsonpCallback]
						} else {
							e.jsonpCallback = "QApp_" + +(new Date) + v++
						}
						o = e.jsonpCallback;
						s.query[e.jsonp] = o;
						if (e.cache === false) {
							s.query.__rnd = +(new Date) + v++
						}
						r.abort = function() {
							i = true;
							var n = {
								error: true,
								type: "Abort"
							};
							e.onAbort(null, n);
							t.reject(n)
						};
						window[o] = function(r) {
							if (c) {
								clearTimeout(c)
							}
							if (i) {
								return
							}
							t.resolve(r);
							e.success(r);
							n()
						};
						c = f.delay(function() {
							var r = {
								type: "Timeout"
							};
							e.onTimeout(r);
							t.reject(r);
							n()
						}, e.timeout);
						l = document.createElement("script");
						l.async = true;
						l.charset = e.charset;
						l.src = s.toUrl();
						l.onerror = function() {
							if (c) {
								clearTimeout(c)
							}
							var r = {
								type: "Error"
							};
							t.reject(r);
							e.error(r);
							n()
						};
						document.head.appendChild(l);
						return r
					}

					function a(e, t) {
						var n = h[e.mockKey || ""],
							r = null;
						f.delay(function() {
							if (n) {
								if (f.isFunction(n)) {
									r = n(e)
								} else {
									r = n
								}
							}
							var i = true;
							d.forEach(function(n) {
								if (n(r, null, e, t) === false) {
									i = false
								}
							});
							if (i) {
								t.resolve(r);
								e.success(r, null)
							}
						}, e.mockTime || 1e3)
					}
					var f = QApp.util,
						l = f.Deferred;
					var c = {},
						h = {},
						p = [],
						d = [],
						v = 0;
					var m = {
						url: "",
						bizType: false,
						charset: "UTF-8",
						timeout: 30 * 1e3,
						data: {},
						argsType: "query",
						method: "get",
						headers: {},
						isEncode: false,
						dataType: "json",
						cache: false,
						withCredentials: false,
						jsonp: "callback",
						jsonpCallback: "",
						success: f.noop,
						error: f.noop,
						onTimeout: f.noop,
						onAbort: f.noop
					};
					var g = QApp.ajax = f.ajax = function(e) {
						if (f.isString(e)) {
							e = {
								url: e
							}
						}
						if (e.bizType && c[e.bizType]) {
							e = f.extend(true, {}, c[e.bizType], e)
						}
						var t = new l,
							n = f.extend(true, {}, m, e),
							r = {},
							i = true;
						p.forEach(function(e) {
							if (e(n, t) === false) {
								i = false
							}
						});
						if (i) {
							if (n.mock) {
								r.abort = function() {
									t.reject({
										error: true,
										type: "Abort"
									});
									n.onAbort(null, r)
								};
								a(n, t)
							} else if (e.dataType === "jsonp") {
								r = u(n, t)
							} else {
								r = o(n, function(e, i) {
									var o = true;
									d.forEach(function(r) {
										if (r(e, i, n, t) === false) {
											o = false
										}
									});
									if (o) {
										if (i) {
											t.reject(i);
											if (i.type === "Timeout") {
												n.onTimeout(e, r)
											} else if (i.type === "Abort") {
												n.onAbort(e, r)
											} else {
												n.error(e, r)
											}
										} else {
											t.resolve(e);
											n.success(e, r)
										}
									}
								})
							}
						}
						t.trans = r;
						return t
					};
					QApp.ajax.setBizOptions = function(e, t) {
						if (f.isString(e)) {
							c[e] = t
						} else {
							f.extend(true, c, e)
						}
					};
					QApp.ajax.addMock = function(e, t) {
						if (f.isString(e)) {
							h[e] = t
						} else {
							h = e
						}
					};
					QApp.ajax.addReqFilter = function(e) {
						p = p.concat(e)
					};
					QApp.ajax.removeReqFilter = function(e) {
						var t = p.indexOf(e);
						if (t > -1) {
							p.splice(t, 1)
						}
					};
					QApp.ajax.addRespFilter = function(e) {
						d = d.concat(e)
					};
					QApp.ajax.removeRespFilter = function(e) {
						var t = d.indexOf(e);
						if (t > -1) {
							d.splice(t, 1)
						}
					};
					QApp.addPlugin("ajax", {
						bizType: "",
						mock: false
					}, function(e, t) {
						var n = [];
						e.ajax = function(e) {
							var r = g(f.extend(true, {}, t, e));
							n.push(r);
							r.all(function() {
								n.splice(n.indexOf(r), 1)
							});
							return r
						};
						e.on("destroy", function() {
							n.forEach(function(e) {
								e.destroy();
								e.trans && e.trans.abort()
							});
							n.length = 0;
							n = null
						})
					})
				})()
			}(t.exports, t, e);
			e.____MODULES["e24642d9bb10d27b80ed20283fa2d1ef"] = t.exports
		})(this);
		(function(e) {
			var t = {
				id: "9d98ca07b73221c493c790bbc2226633",
				filename: "index.js",
				exports: {}
			};
			if (!e.____MODULES) {
				e.____MODULES = {}
			}
			var n = function(e, t, n) {
				(function() {
					function e() {
						if (avalon.config.debug) {
							console.log.apply(console, arguments)
						}
					}

					function t() {}

					function n(e, t) {
						if (typeof e === "string") {
							e = e.match(vt) || []
						}
						var n = {},
							r = t !== void 0 ? t : 1;
						for (var i = 0, s = e.length; i < s; i++) {
							n[e[i]] = r
						}
						return n
					}

					function r(e) {
						function t(r, i) {
							if (n.push(r) > e) {
								delete t[n.shift()]
							}
							return t[r] = i
						}
						var n = [];
						return t
					}

					function i(e, t) {
						e = Math.floor(e) || 0;
						return e < 0 ? Math.max(t + e, 0) : Math.min(e, t)
					}

					function s(e) {
						if (e && typeof e === "object") {
							var t = e.length,
								n = Et.call(e);
							if (/(Array|List|Collection|Map|Arguments)\]$/.test(n)) {
								return true
							} else if (n === "[object Object]" && +t === t && !(t % 1) && t >= 0) {
								return true
							}
						}
						return false
					}

					function o(e) {
						for (var t in e) {
							if (!wt.call(e, t)) continue;
							var n = e[t];
							if (typeof o.plugins[t] === "function") {
								o.plugins[t](n)
							} else if (typeof o[t] === "object") {
								avalon.mix(o[t], n)
							} else {
								o[t] = n
							}
						}
						return this
					}

					function u(e) {
						return (e + "").replace(zt, "\\$&")
					}

					function a(e, t, n) {
						if (Mt(t) || t && t.nodeType) {
							return false
						}
						if (n.indexOf(e) !== -1) {
							return false
						}
						if (Qt.indexOf(e) !== -1) {
							return false
						}
						var r = n.$special;
						if (e && e.charAt(0) === "$" && !r[e]) {
							return false
						}
						return true
					}

					function f(e, t, n) {
						if (Array.isArray(e)) {
							var r = e.concat();
							e.length = 0;
							var i = h(e);
							i.pushArray(r);
							return i
						}
						if (typeof e.nodeType === "number") {
							return e
						}
						if (e.$id && e.$model && e.$events) {
							return e
						}
						if (!Array.isArray(e.$skipArray)) {
							e.$skipArray = []
						}
						e.$skipArray.$special = t || {};
						var s = {};
						n = n || {};
						var o = {};
						var u = {};
						var p = [];
						for (var d in e) {
							(function(t, r) {
								n[t] = r;
								if (!a(t, r, e.$skipArray)) {
									return
								}
								var i;
								var h = avalon.type(r);
								o[t] = [];
								if (h === "object" && Mt(r.get) && Object.keys(r).length <= 2) {
									var d = r.set;
									var m = r.get;
									i = function(e) {
										var r = s.$events;
										var i = n[t];
										if (arguments.length) {
											if (dt) {
												return
											}
											if (Mt(d)) {
												var o = r[t];
												r[t] = [];
												d.call(s, e);
												r[t] = o
											}
										} else {}
										e = n[t] = m.call(s);
										if (!tn(i, e)) {
											b(r[t]);
											l(s, t, e, i)
										}
										return e
									};
									p.push(function() {
										Tt[ot] = function() {
											s.$model[t] = m.call(s)
										};
										i();
										delete Tt[ot]
									})
								} else if (mt.test(h)) {
									i = function(e) {
										var r = i.child;
										var u = n[t];
										if (arguments.length) {
											if (dt) {
												return
											}
											if (!tn(u, e)) {
												r = i.child = c(s, t, e, h);
												e = n[t] = r.$model;
												var a = rn[r.$id];
												a && a();
												l(s, t, e, u)
											}
										} else {
											v(o[t]);
											return r
										}
									};
									var g = i.child = f(r, 0, n[t]);
									g.$events[ct] = o[t]
								} else {
									i = function(e) {
										var r = n[t];
										if (arguments.length) {
											if (!tn(r, e)) {
												n[t] = e;
												b(o[t]);
												l(s, t, e, r)
											}
										} else {
											v(o[t]);
											return r
										}
									}
								}
								u[t] = i
							})(d, e[d])
						}
						Qt.forEach(function(t) {
							delete e[t];
							delete n[t]
						});
						s = Zt(s, nn(u), e);
						for (var m in e) {
							if (!u[m]) {
								s[m] = e[m]
							}
						}
						s.$id = Ot();
						s.$model = n;
						s.$events = o;
						for (var d in Vt) {
							var g = Vt[d];
							if (!Nt) {
								g = g.bind(s)
							}
							s[d] = g
						}
						if (Yt) {
							Object.defineProperty(s, "hasOwnProperty", {
								value: function(e) {
									return e in s.$model
								},
								writable: false,
								enumerable: false,
								configurable: true
							})
						} else {
							s.hasOwnProperty = function(e) {
								return e in s.$model
							}
						}
						p.forEach(function(e) {
							e()
						});
						return s
					}

					function l(e, t, n, r) {
						if (e.$events) {
							Vt.$fire.call(e, t, n, r)
						}
					}

					function c(e, t, n, r) {
						var i = e[t];
						if (r === "array") {
							if (!Array.isArray(n) || i === n) {
								return i
							}
							i.clear();
							i.pushArray(n.concat());
							return i
						} else {
							var s = e.$events[t];
							var o = i.$events.$withProxyPool;
							if (o) {
								it(o, "with");
								i.$events.$withProxyPool = null
							}
							var u = f(n);
							u.$events[ct] = s;
							rn[u.$id] = function(e) {
								while (e = s.shift()) {
									(function(e) {
										avalon.nextTick(function() {
											if (e.type) {
												e.rollback && e.rollback();
												_t[e.type](e, e.vmodels)
											}
										})
									})(e)
								}
								delete rn[u.$id]
							};
							return u
						}
					}

					function h(e) {
						var t = [];
						t.$id = Ot();
						t.$model = e;
						t.$events = {};
						t.$events[ct] = [];
						t._ = f({
							length: e.length
						});
						t._.$watch("length", function(e, n) {
							t.$fire("length", e, n)
						});
						for (var n in Vt) {
							t[n] = Vt[n]
						}
						avalon.mix(t, on);
						return t
					}

					function p(e, t) {
						if (mt.test(avalon.type(e))) {
							e = e.$id ? e : f(e, 0, t)
						}
						return e
					}

					function d(e) {
						Tt[ot] = e;
						avalon.openComputedCollect = true;
						var t = e.evaluator;
						if (t) {
							try {
								var n = un.test(e.type) ? e : t.apply(0, e.args);
								e.handler(n, e.element, e)
							} catch (r) {
								delete e.evaluator;
								var i = e.element;
								if (i.nodeType === 3) {
									var s = i.parentNode;
									if (o.commentInterpolate) {
										s.replaceChild(at.createComment(e.value), i)
									} else {
										i.data = Ft + e.value + It
									}
								}
							}
						}
						avalon.openComputedCollect = false;
						delete Tt[ot]
					}

					function v(e) {
						var t = Tt[ot];
						if (e && t && avalon.Array.ensure(e, t) && t.element) {
							m(t, e)
						}
					}

					function m(e, t) {
						e.$uuid = e.$uuid || Ot();
						t.$uuid = t.$uuid || Ot();
						var n = {
							data: e,
							list: t,
							toString: function() {
								return e.$uuid + " " + t.$uuid
							}
						};
						if (!an[n]) {
							an[n] = 1;
							an.push(n)
						}
					}

					function g() {
						for (var e = fn, t = fn + ln; e < t; e++) {
							var n = an[e];
							if (!n) {
								break
							}
							var r = n.data;
							var i = r.element;
							var s = i === null ? 1 : i.nodeType === 1 ? typeof i.sourceIndex === "number" ? i.sourceIndex === 0 : !Ct.contains(i) : !avalon.contains(Ct, i);
							if (s) {
								an.splice(e, 1);
								delete an[n];
								avalon.Array.remove(n.list, r);
								y(r);
								n.data = n.list = null;
								e--;
								t--
							}
						}
						n = an[e];
						if (n) {
							fn = t
						} else {
							fn = 0
						}
						cn = new Date
					}

					function y(e) {
						e.element = null;
						e.rollback && e.rollback();
						for (var t in e) {
							e[t] = null
						}
					}

					function b(e) {
						clearTimeout(hn);
						if (new Date - cn > 444) {
							hn = setTimeout(g, 1)
						} else {
							hn = setTimeout(g, 444)
						}
						if (e && e.length) {
							var n = xt.call(arguments, 1);
							for (var r = e.length, i; i = e[--r];) {
								var s = i.element;
								if (s && s.parentNode) {
									if (i.$repeat) {
										i.handler.apply(i, n)
									} else if (i.type !== "on") {
										var o = i.evaluator || t;
										i.handler(o.apply(0, i.args || []), s, i)
									}
								}
							}
						}
					}

					function w(e, t, n) {
						var r = setTimeout(function() {
							var i = e.innerHTML;
							clearTimeout(r);
							if (i === n) {
								t()
							} else {
								w(e, t, i)
							}
						})
					}

					function E(e, t) {
						var n = e.getAttribute("avalonctrl") || t.$id;
						e.setAttribute("avalonctrl", n);
						t.$events.expr = e.tagName + '[avalonctrl="' + n + '"]'
					}

					function S(e, t) {
						if (e.length) t.cb(e.length);
						for (var n = 0, r; r = e[n++];) {
							r.vmodels = t;
							_t[r.type](r, t);
							if (r.evaluator && r.element && r.element.nodeType === 1) {
								r.element.removeAttribute(r.name)
							}
						}
						e.length = 0
					}

					function x(e, t) {
						return e.priority - t.priority
					}

					function T(e, t, n) {
						var r = e.getAttribute("ms-skip");
						var i = e.getAttributeNode("ms-important");
						var s = e.getAttributeNode("ms-controller");
						if (typeof r === "string") {
							return
						} else if (n = i || s) {
							var o = avalon.vmodels[n.value];
							if (!o) {
								return
							}
							var u = t.cb;
							t = n === i ? [o] : [o].concat(t);
							t.cb = u;
							e.removeAttribute(n.name);
							e.classList.remove(n.name);
							E(e, o)
						}
						L(e, t)
					}

					function N(e, t) {
						var n = e.firstChild;
						while (n) {
							var r = n.nextSibling;
							k(n, n.nodeType, t);
							n = r
						}
					}

					function C(e, t) {
						for (var n = 0, r; r = e[n++];) {
							k(r, r.nodeType, t)
						}
					}

					function k(e, t, n) {
						if (t === 1) {
							T(e, n)
						} else if (t === 3 && qt.test(e.data)) {
							M(e, n)
						} else if (o.commentInterpolate && t === 8 && !qt.test(e.nodeValue)) {
							M(e, n)
						}
					}

					function L(t, n) {
						var r = t.hasAttributes() ? avalon.slice(t.attributes) : [];
						var i = [],
							s = {},
							o;
						for (var u = 0, a; a = r[u++];) {
							if (a.specified) {
								if (o = a.name.match(En)) {
									var f = o[1];
									var l = o[2] || "";
									var c = a.value;
									var h = a.name;
									s[h] = c;
									if (xn[f]) {
										l = f;
										f = "on"
									} else if (Tn[f]) {
										e("ms-" + f + "已经被废弃,请使用ms-attr-*代替");
										if (f === "enabled") {
											f = "disabled";
											c = "!(" + c + ")"
										}
										l = f;
										f = "attr";
										t.removeAttribute(h);
										h = "ms-attr-" + l;
										t.setAttribute(h, c);
										o = [h];
										s[h] = c
									}
									if (typeof _t[f] === "function") {
										var p = {
											type: f,
											param: l,
											element: t,
											name: o[0],
											value: c,
											priority: f in Sn ? Sn[f] : f.charCodeAt(0) * 10 + (Number(l) || 0)
										};
										if (f === "html" || f === "text") {
											var d = A(c);
											avalon.mix(p, d);
											p.filters = p.filters.replace(kn, function() {
												p.type = "html";
												p.group = 1;
												return ""
											})
										}
										if (h === "ms-if-loop") {
											p.priority += 100
										}
										if (n.length) {
											i.push(p);
											if (f === "widget") {
												t.msData = t.msData || s
											}
										}
									}
								}
							}
						}
						if (s["ms-attr-checked"] && s["ms-duplex"]) {
							e("warning!一个元素上不能同时定义ms-attr-checked与ms-duplex")
						}
						i.sort(x);
						var v = true;
						for (var u = 0, p; p = i[u]; u++) {
							var f = p.type;
							if (Nn.test(f)) {
								return S(i.slice(0, u + 1), n)
							} else if (v) {
								v = !Cn.test(f)
							}
						}
						S(i, n);
						if (v && !bn[t.tagName] && Ut.test(t.innerHTML + t.textContent)) {
							N(t, n)
						}
					}

					function A(e) {
						if (e.indexOf("|") > 0) {
							var t = e.replace(Ln, "ᄢ㍄").indexOf("|");
							if (t > -1) {
								return {
									filters: e.slice(t),
									value: e.slice(0, t),
									expr: true
								}
							}
						}
						return {
							value: e,
							filters: "",
							expr: true
						}
					}

					function O(e) {
						var t = [],
							n, r = 0,
							i;
						do {
							i = e.indexOf(Ft, r);
							if (i === -1) {
								break
							}
							n = e.slice(r, i);
							if (n) {
								t.push({
									value: n,
									filters: "",
									expr: false
								})
							}
							r = i + Ft.length;
							i = e.indexOf(It, r);
							if (i === -1) {
								break
							}
							n = e.slice(r, i);
							if (n) {
								t.push(A(n))
							}
							r = i + It.length
						} while (1);
						n = e.slice(r);
						if (n) {
							t.push({
								value: n,
								expr: false,
								filters: ""
							})
						}
						return t
					}

					function M(e, t) {
						var n = [];
						if (e.nodeType === 8) {
							var r = A(e.nodeValue);
							var i = [r]
						} else {
							i = O(e.data)
						}
						if (i.length) {
							for (var s = 0, r; r = i[s++];) {
								var o = at.createTextNode(r.value);
								if (r.expr) {
									r.type = "text";
									r.element = o;
									r.filters = r.filters.replace(kn, function() {
										r.type = "html";
										r.group = 1;
										return ""
									});
									n.push(r)
								}
								kt.appendChild(o)
							}
							e.parentNode.replaceChild(kt, e);
							if (n.length) S(n, t)
						}
					}

					function _(e) {
						return e.replace(/([a-z\d])([A-Z]+)/g, "$1-$2").toLowerCase()
					}

					function D(e) {
						if (e.indexOf("-") < 0 && e.indexOf("_") < 0) {
							return e
						}
						return e.replace(/[-_][^-_]/g, function(e) {
							return e.charAt(1).toUpperCase()
						})
					}

					function P(e) {
						try {
							if (typeof e === "object") return e;
							e = e === "true" ? true : e === "false" ? false : e === "null" ? null : +e + "" === e ? +e : Mn.test(e) ? JSON.parse(e) : e
						} catch (t) {}
						return e
					}

					function H(e) {
						return e.window && e.document ? e : e.nodeType === 9 ? e.defaultView : false
					}

					function B(e, t) {
						if (e.offsetWidth <= 0) {
							var n = getComputedStyle(e, null);
							if (Bn.test(n["display"])) {
								var r = {
									node: e
								};
								for (var i in Hn) {
									r[i] = n[i];
									e.style[i] = Hn[i]
								}
								t.push(r)
							}
							var s = e.parentNode;
							if (s && s.nodeType === 1) {
								B(s, t)
							}
						}
					}

					function j(e) {
						var t = e.tagName.toLowerCase();
						return t === "input" && /checkbox|radio/.test(e.type) ? "checked" : t
					}

					function F(e, t, n, r) {
						var i = [],
							s = " = " + n + ".";
						for (var o = e.length, u; u = e[--o];) {
							if (t.hasOwnProperty(u)) {
								i.push(u + s + u);
								r.vars.push(u);
								if (r.type === "duplex") {
									e.get = n + "." + u
								}
								e.splice(o, 1)
							}
						}
						return i
					}

					function I(e) {
						var t = [],
							n = {};
						for (var r = 0; r < e.length; r++) {
							var i = e[r];
							var s = i && typeof i.$id === "string" ? i.$id : i;
							if (!n[s]) {
								n[s] = t.push(i)
							}
						}
						return t
					}

					function q(e, t) {
						t = t.replace(Qn, "").replace(Gn, function() {
							return "],|"
						}).replace(Yn, function(e, t) {
							return "[" + Fn(t)
						}).replace(Zn, function() {
							return '"],["'
						}).replace(er, function() {
							return '",'
						}) + "]";
						return "return avalon.filters.$filter(" + e + ", " + t + ")"
					}

					function R(n, r, i) {
						var s = i.type;
						var o = i.filters || "";
						var u = r.map(function(e) {
							return String(e.$id).replace(Kn, "$1")
						}) + n + s + o;
						var a = Vn(n).concat(),
							f = [],
							l = [],
							c = [],
							h = "";
						r = I(r);
						i.vars = [];
						for (var p = 0, d = r.length; p < d; p++) {
							if (a.length) {
								var v = "vm" + ot + "_" + p;
								l.push(v);
								c.push(r[p]);
								f.push.apply(f, F(a, r[p], v, i))
							}
						}
						if (!f.length && s === "duplex") {
							return
						}
						if (s !== "duplex" && (n.indexOf("||") > -1 || n.indexOf("&&") > -1)) {
							i.vars.forEach(function(e) {
								var t = new RegExp("\\b" + e + "(?:\\.\\w+|\\[\\w+\\])+", "ig");
								n = n.replace(t, function(t) {
									var n = t.charAt(e.length);
									var r = /^\s*\(/.test(RegExp.rightContext);
									if (n === "." || n === "[" || r) {
										var i = "var" + String(Math.random()).replace(/^0\./, "");
										if (r) {
											var s = t.split(".");
											if (s.length > 2) {
												var o = s.pop();
												f.push(i + " = " + s.join("."));
												return i + "." + o
											} else {
												return t
											}
										}
										f.push(i + " = " + t);
										return i
									} else {
										return t
									}
								})
							})
						}
						i.args = c;
						var m = $n[u];
						if (m) {
							i.evaluator = m;
							return
						}
						var h = f.join(", ");
						if (h) {
							h = "var " + h
						}
						if (/\S/.test(o)) {
							if (!/text|html/.test(i.type)) {
								throw Error("ms-" + i.type + "不支持过滤器")
							}
							n = "\nvar ret" + ot + " = " + n + ";\r\n";
							n += q("ret" + ot, o)
						} else if (s === "duplex") {
							var g = "'use strict';\nreturn function(vvv){\n	" + h + ";\n	if(!arguments.length){\n		return " + n + "\n	}\n	" + (!Jn.test(n) ? a.get : n) + "= vvv;\n} ";
							try {
								m = Function.apply(t, l.concat(g));
								i.evaluator = $n(u, m)
							} catch (y) {
								e("debug: parse error," + y.message)
							}
							return
						} else if (s === "on") {
							if (n.indexOf("(") === -1) {
								n += ".call(this, $event)"
							} else {
								n = n.replace("(", ".call(this,")
							}
							l.push("$event");
							n = "\nreturn " + n + ";";
							var b = n.lastIndexOf("\nreturn");
							var w = n.slice(0, b);
							var E = n.slice(b);
							n = w + "\n" + E
						} else {
							n = "\nreturn " + n + ";"
						}
						try {
							m = Function.apply(t, l.concat("'use strict';\n" + h + n));
							i.evaluator = $n(u, m)
						} catch (y) {
							e("debug: parse error," + y.message)
						} finally {
							a = textBuffer = l = null
						}
					}

					function U(e, t, n, r, i) {
						t.cb(-1);
						if (Array.isArray(r)) {
							e = r.map(function(e) {
								return e.expr ? "(" + e.value + ")" : Fn(e.value)
							}).join(" + ")
						}
						R(e, t, n);
						if (n.evaluator && !i) {
							n.handler = Dt[n.handlerName || n.type];
							d(n)
						}
					}

					function z(e, t) {
						var n = "_" + e;
						if (!z[n]) {
							var r = at.createElement(e);
							Ct.appendChild(r);
							if (Nt) {
								t = getComputedStyle(r, null).display
							} else {
								t = r.currentStyle.display
							}
							Ct.removeChild(r);
							z[n] = t
						}
						return z[n]
					}

					function W(e) {
						return e == null ? "" : e
					}

					function X(e, t, n, r) {
						t.param.replace(/\w+/g, function(r) {
							var i = avalon.duplexHooks[r];
							if (i && typeof i[n] === "function") {
								e = i[n](e, t)
							}
						});
						return e
					}

					function V(e, t, n) {
						var r = at.createEvent("Events");
						r.initEvent(t, true, true);
						if (n) {
							r.detail = n
						}
						e.dispatchEvent(r)
					}

					function $() {
						for (var e = hr.length - 1; e >= 0; e--) {
							var t = hr[e];
							if (t() === false) {
								hr.splice(e, 1)
							}
						}
						if (!hr.length) {
							clearInterval(cr)
						}
					}

					function J(e) {
						if (avalon.contains(Ct, this)) {
							mr.call(this, e);
							K.call(this, e)
						}
					}

					function K(e) {
						var t = arguments.length ? e : this.value;
						if (!this.disabled && this.oldValue !== t + "") {
							var n = this.getAttribute("data-duplex-event") || "input";
							V(this, n)
						}
					}

					function Q(e, t, n, r) {
						var i = avalon.parseHTML(e.template);
						var s = avalon.slice(i.childNodes);
						t.appendChild(i);
						var o = e.vmodels;
						var u = [n].concat(o);
						u.cb = o.cb;
						var a = {
							nodes: s,
							vmodels: u
						};
						r.push(a)
					}

					function G(e, t) {
						var n = e.element;
						var r = e.endRepeat;
						var i = [];
						var s = n.nextSibling;
						if (s !== r) {
							do {
								if (s !== r) {
									i.push(s)
								} else {
									break
								}
							} while (s = s.nextSibling)
						}
						return i[e.group * t] || r
					}

					function Y(e, t, n) {
						var r = t * (n || 1);
						var i = [e],
							s = 1;
						var o = kt;
						while (s < r) {
							e = e.nextSibling;
							if (e) {
								i[s++] = e
							}
						}
						for (var s = 0; e = i[s++];) {
							o.appendChild(e)
						}
						return o
					}

					function Z(e) {
						if (!isFinite(e.group)) {
							var t = e.element.parentNode.childNodes;
							var n = t.length - 2;
							var r = "proxySize" in e ? e.proxySize : e.proxies.length;
							e.group = n / r
						}
					}

					function et(e) {
						var t = {
							$host: [],
							$outer: {},
							$index: 0,
							$first: false,
							$last: false,
							$remove: avalon.noop
						};
						t[e] = {
							get: function() {
								return this.$host[this.$index]
							},
							set: function(e) {
								this.$host.set(this.$index, e)
							}
						};
						var n = {
							$last: 1,
							$first: 1,
							$index: 1
						};
						var r = f(t, n);
						var i = r.$events;
						i[e] = i.$first = i.$last = i.$index;
						r.$id = Ot("$proxy$each");
						return r
					}

					function tt(e, t) {
						var n = t.param || "el",
							r;
						for (var i = 0, s = gr.length; i < s; i++) {
							var o = gr[i];
							if (o && o.hasOwnProperty(n)) {
								r = o;
								gr.splice(i, 1)
							}
						}
						if (!r) {
							r = et(n)
						}
						var u = t.$repeat;
						var a = u.length - 1;
						r.$index = e;
						r.$first = e === 0;
						r.$last = e === a;
						r.$host = u;
						r.$outer = t.$outer;
						r.$remove = function() {
							return u.removeAt(r.$index)
						};
						return r
					}

					function nt() {
						var e = f({
							$key: "",
							$outer: {},
							$host: {},
							$val: {
								get: function() {
									return this.$host[this.$key]
								},
								set: function(e) {
									this.$host[this.$key] = e
								}
							}
						}, {
							$val: 1
						});
						e.$id = Ot("$proxy$with");
						return e
					}

					function rt(e, t) {
						var n = yr.pop();
						if (!n) {
							n = nt()
						}
						var r = t.$repeat;
						n.$key = e;
						n.$host = r;
						n.$outer = t.$outer;
						if (r.$events) {
							n.$events.$val = r.$events[e]
						} else {
							n.$events = {}
						}
						return n
					}

					function it(e, t) {
						var n = t === "each" ? gr : yr;
						avalon.each(e, function(e, t) {
							if (t.$events) {
								for (var r in t.$events) {
									if (Array.isArray(t.$events[r])) {
										t.$events[r].forEach(function(e) {
											if (typeof e === "object") y(e)
										});
										t.$events[r].length = 0
									}
								}
								t.$host = t.$outer = {};
								if (n.unshift(t) > o.maxRepeatSize) {
									n.pop()
								}
							}
						});
						if (t === "each") e.length = 0
					}

					function st() {
						if (Wt) {
							Wt.checkDeps()
						} else {
							Cr.forEach(function(e) {
								e(avalon)
							})
						}
						st = t
					}
					var ot = Date.now();
					var ut = Function("return this")();
					var at = ut.document;
					var ft = at.head;
					ft.insertAdjacentHTML("afterBegin", '<avalon ms-skip><style id="avalonStyle">.avalonHide{ display: none!important }</style></avalon>');
					var lt = ft.firstChild;
					var ct = "$" + ot;
					var ht = ut.require;
					var pt = ut.define;
					var dt = false;
					var vt = /[^, ]+/g;
					var mt = /^(?:object|array)$/;
					var gt = /^\[object SVG\w*Element\]$/;
					var yt = /^\[object (?:Window|DOMWindow|global)\]$/;
					var bt = Object.prototype;
					var wt = bt.hasOwnProperty;
					var Et = bt.toString;
					var St = Array.prototype;
					var xt = St.slice;
					var Tt = {};
					var Nt = ut.dispatchEvent;
					var Ct = at.documentElement;
					var kt = at.createDocumentFragment();
					var Lt = at.createElement("div");
					var At = {};
					"Boolean Number String Function Array Date RegExp Object Error".replace(vt, function(e) {
						At["[object " + e + "]"] = e.toLowerCase()
					});
					var Ot = function(e) {
						e = e || "avalon";
						return (e + Math.random() + Math.random()).replace(/0\./g, "")
					};
					avalon = function(e) {
						return new avalon.init(e)
					};
					avalon.init = function(e) {
						this[0] = this.element = e
					};
					avalon.fn = avalon.prototype = avalon.init.prototype;
					avalon.type = function(e) {
						if (e == null) {
							return String(e)
						}
						return typeof e === "object" || typeof e === "function" ? At[Et.call(e)] || "object" : typeof e
					};
					var Mt = function(e) {
						return Et.call(e) == "[object Function]"
					};
					avalon.isFunction = Mt;
					avalon.isWindow = function(e) {
						return yt.test(Et.call(e))
					};
					avalon.isPlainObject = function(e) {
						return Et.call(e) === "[object Object]" && Object.getPrototypeOf(e) === bt
					};
					avalon.mix = avalon.fn.mix = function() {
						var e, t, n, r, i, s, o = arguments[0] || {},
							u = 1,
							a = arguments.length,
							f = false;
						if (typeof o === "boolean") {
							f = o;
							o = arguments[1] || {};
							u++
						}
						if (typeof o !== "object" && !Mt(o)) {
							o = {}
						}
						if (u === a) {
							o = this;
							u--
						}
						for (; u < a; u++) {
							if ((e = arguments[u]) != null) {
								for (t in e) {
									n = o[t];
									r = e[t];
									if (o === r) {
										continue
									}
									if (f && r && (avalon.isPlainObject(r) || (i = Array.isArray(r)))) {
										if (i) {
											i = false;
											s = n && Array.isArray(n) ? n : []
										} else {
											s = n && avalon.isPlainObject(n) ? n : {}
										}
										o[t] = avalon.mix(f, s, r)
									} else if (r !== void 0) {
										o[t] = r
									}
								}
							}
						}
						return o
					};
					avalon.mix({
						rword: vt,
						subscribers: ct,
						version: 1.381,
						ui: {},
						log: e,
						slice: function(e, t, n) {
							return xt.call(e, t, n)
						},
						noop: t,
						error: function(e, t) {
							throw new(t || Error)(e)
						},
						oneObject: n,
						range: function(e, t, n) {
							n || (n = 1);
							if (t == null) {
								t = e || 0;
								e = 0
							}
							var r = -1,
								i = Math.max(0, Math.ceil((t - e) / n)),
								s = Array(i);
							while (++r < i) {
								s[r] = e;
								e += n
							}
							return s
						},
						eventHooks: {},
						bind: function(e, t, n, r) {
							var i = avalon.eventHooks;
							var s = i[t];
							if (typeof s === "object") {
								t = s.type;
								if (s.deel) {
									n = s.deel(e, n)
								}
							}
							e.addEventListener(t, n, !!r);
							return n
						},
						unbind: function(e, n, r, i) {
							var s = avalon.eventHooks;
							var o = s[n];
							var u = r || t;
							if (typeof o === "object") {
								n = o.type
							}
							e.removeEventListener(n, u, !!i)
						},
						css: function(e, t, n) {
							if (e instanceof avalon) {
								e = e[0]
							}
							var r = /[_-]/.test(t) ? D(t) : t;
							t = avalon.cssName(r) || r;
							if (n === void 0 || typeof n === "boolean") {
								var i = _n[r + ":get"] || _n["@:get"];
								if (t === "background") {
									t = "backgroundColor"
								}
								var s = i(e, t);
								return n === true ? parseFloat(s) || 0 : s
							} else if (n === "") {
								e.style[t] = ""
							} else {
								if (n == null || n !== n) {
									return
								}
								if (isFinite(n) && !avalon.cssNumber[r]) {
									n += "px"
								}
								i = _n[r + ":set"] || _n["@:set"];
								i(e, t, n)
							}
						},
						each: function(e, t) {
							if (e) {
								var n = 0;
								if (s(e)) {
									for (var r = e.length; n < r; n++) {
										t(n, e[n])
									}
								} else {
									for (n in e) {
										if (e.hasOwnProperty(n)) {
											t(n, e[n])
										}
									}
								}
							}
						},
						getWidgetData: function(e, t) {
							var n = avalon(e).data();
							var r = {};
							for (var i in n) {
								if (i.indexOf(t) === 0) {
									r[i.replace(t, "").replace(/\w/, function(e) {
										return e.toLowerCase()
									})] = n[i]
								}
							}
							return r
						},
						parseJSON: JSON.parse,
						Array: {
							ensure: function(e, t) {
								if (e.indexOf(t) === -1) {
									return e.push(t)
								}
							},
							removeAt: function(e, t) {
								return !!e.splice(t, 1).length
							},
							remove: function(e, t) {
								var n = e.indexOf(t);
								if (~n) return avalon.Array.removeAt(e, n);
								return false
							}
						}
					});
					var _t = avalon.bindingHandlers = {};
					var Dt = avalon.bindingExecutors = {};
					avalon.nextTick = ut.setImmediate ? setImmediate.bind(ut) : function(e) {
						setTimeout(e, 0)
					};
					if (!Ct.contains) {
						Node.prototype.contains = function(e) {
							return !!(this.compareDocumentPosition(e) & 16)
						}
					}
					avalon.contains = function(e, t) {
						try {
							while (t = t.parentNode)
								if (t === e) return true;
							return false
						} catch (n) {
							return false
						}
					};
					if (ut.SVGElement) {
						var Pt = "http://www.w3.org/2000/svg";
						var Ht = at.createElementNS(Pt, "svg");
						Ht.innerHTML = '<circle cx="50" cy="50" r="40" fill="red" />';
						if (!gt.test(Ht.firstChild)) {
							function Bt(e, t) {
								if (e && e.childNodes) {
									var n = e.childNodes;
									for (var r = 0, i; i = n[r++];) {
										if (i.tagName) {
											var s = at.createElementNS(Pt, i.tagName.toLowerCase());
											St.forEach.call(i.attributes, function(e) {
												s.setAttribute(e.name, e.value)
											});
											Bt(i, s);
											t.appendChild(s)
										}
									}
								}
							}
							Object.defineProperties(SVGElement.prototype, {
								outerHTML: {
									enumerable: true,
									configurable: true,
									get: function() {
										return (new XMLSerializer).serializeToString(this)
									},
									set: function(e) {
										var t = this.tagName.toLowerCase(),
											n = this.parentNode,
											r = avalon.parseHTML(e);
										if (t === "svg") {
											n.insertBefore(r, this)
										} else {
											var i = at.createDocumentFragment();
											Bt(r, i);
											n.insertBefore(i, this)
										}
										n.removeChild(this)
									}
								},
								innerHTML: {
									enumerable: true,
									configurable: true,
									get: function() {
										var e = this.outerHTML;
										var t = new RegExp("<" + this.nodeName + '\\b(?:(["\'])[^"]*?(\\1)|[^>])*>', "i");
										var n = new RegExp("</" + this.nodeName + ">$", "i");
										return e.replace(t, "").replace(n, "")
									},
									set: function(e) {
										if (avalon.clearHTML) {
											avalon.clearHTML(this);
											var t = avalon.parseHTML(e);
											Bt(t, this)
										}
									}
								}
							})
						}
					}
					var jt = avalon.eventHooks;
					if (!("onmouseenter" in Ct)) {
						avalon.each({
							mouseenter: "mouseover",
							mouseleave: "mouseout"
						}, function(e, t) {
							jt[e] = {
								type: t,
								deel: function(t, n) {
									return function(r) {
										var i = r.relatedTarget;
										if (!i || i !== t && !(t.compareDocumentPosition(i) & 16)) {
											delete r.type;
											r.type = e;
											return n.call(t, r)
										}
									}
								}
							}
						})
					}
					avalon.each({
						AnimationEvent: "animationend",
						WebKitAnimationEvent: "webkitAnimationEnd"
					}, function(e, t) {
						if (ut[e] && !jt.animationend) {
							jt.animationend = {
								type: t
							}
						}
					});
					if (at.onmousewheel === void 0) {
						jt.mousewheel = {
							type: "wheel",
							deel: function(e, t) {
								return function(n) {
									n.wheelDeltaY = n.wheelDelta = n.deltaY > 0 ? -120 : 120;
									n.wheelDeltaX = 0;
									Object.defineProperty(n, "type", {
										value: "mousewheel"
									});
									t.call(e, n)
								}
							}
						}
					}
					var Ft, It, qt, Rt, Ut, zt = /[-.*+?^${}()|[\]\/\\]/g;
					var Wt;
					var Xt = {
						loader: function(e) {
							ut.define = e && Wt ? Wt.define : pt;
							ut.require = e && Wt ? Wt : ht
						},
						interpolate: function(e) {
							Ft = e[0];
							It = e[1];
							if (Ft === It) {
								throw new SyntaxError("openTag!==closeTag")
							} else if (e + "" === "<!--,-->") {
								o.commentInterpolate = true
							} else {
								var t = Ft + "test" + It;
								Lt.innerHTML = t;
								if (Lt.innerHTML !== t && Lt.innerHTML.indexOf("&lt;") >= 0) {
									throw new SyntaxError("此定界符不合法")
								}
								Lt.innerHTML = ""
							}
							var n = u(Ft),
								r = u(It);
							qt = new RegExp(n + "(.*?)" + r);
							Rt = new RegExp(n + "(.*?)" + r, "g");
							Ut = new RegExp(n + ".*?" + r + "|\\sms-")
						}
					};
					o.debug = true;
					o.plugins = Xt;
					o.plugins["interpolate"](["{{", "}}"]);
					o.paths = {};
					o.shim = {};
					o.maxRepeatSize = 100;
					avalon.config = o;
					var Vt = {
						$watch: function(e, t) {
							if (typeof t === "function") {
								var n = this.$events[e];
								if (n) {
									n.push(t)
								} else {
									this.$events[e] = [t]
								}
							} else {
								this.$events = this.$watch.backup
							}
							return this
						},
						$unwatch: function(e, t) {
							var n = arguments.length;
							if (n === 0) {
								this.$watch.backup = this.$events;
								this.$events = {}
							} else if (n === 1) {
								this.$events[e] = []
							} else {
								var r = this.$events[e] || [];
								var i = r.length;
								while (~--i < 0) {
									if (r[i] === t) {
										return r.splice(i, 1)
									}
								}
							}
							return this
						},
						$fire: function(e) {
							var t;
							if (/^(\w+)!(\S+)$/.test(e)) {
								t = RegExp.$1;
								e = RegExp.$2
							}
							var n = this.$events;
							var r = xt.call(arguments, 1);
							var i = [e].concat(r);
							if (t === "all") {
								for (var s in avalon.vmodels) {
									var o = avalon.vmodels[s];
									if (o !== this) {
										o.$fire.apply(o, i)
									}
								}
							} else if (t === "up" || t === "down") {
								var u = n.expr ? Jt(n.expr) : [];
								if (u.length === 0) return;
								for (var s in avalon.vmodels) {
									var o = avalon.vmodels[s];
									if (o !== this) {
										if (o.$events.expr) {
											var a = Jt(o.$events.expr);
											if (a.length === 0) {
												continue
											}
											Array.prototype.forEach.call(a, function(e) {
												Array.prototype.forEach.call(u, function(n) {
													var r = t === "down" ? n.contains(e) : e.contains(n);
													if (r) {
														e._avalon = o
													}
												})
											})
										}
									}
								}
								var f = at.getElementsByTagName("*");
								var l = [];
								Array.prototype.forEach.call(f, function(e) {
									if (e._avalon) {
										l.push(e._avalon);
										e._avalon = "";
										e.removeAttribute("_avalon")
									}
								});
								if (t === "up") {
									l.reverse()
								}
								for (var s = 0, c; c = l[s++];) {
									if (c.$fire.apply(c, i) === false) {
										break
									}
								}
							} else {
								var h = n[e] || [];
								var p = n.$all || [];
								for (var s = 0, d; d = h[s++];) {
									if (Mt(d)) d.apply(this, r)
								}
								for (var s = 0, d; d = p[s++];) {
									if (Mt(d)) d.apply(this, arguments)
								}
							}
						}
					};
					var $t = /(\w+)\[(avalonctrl)="(\S+)"\]/;
					var Jt = function(e) {
						return at.querySelectorAll(e)
					};
					var Kt = avalon.vmodels = {};
					avalon.define = function(n, r) {
						var i = n.$id || n;
						if (!i) {
							e("warning: vm必须指定$id")
						}
						if (Kt[i]) {
							e("warning: " + i + " 已经存在于avalon.vmodels中")
						}
						if (typeof n === "object") {
							var s = f(n)
						} else {
							var o = {
								$watch: t
							};
							r(o);
							s = f(o);
							dt = true;
							r(s);
							dt = false
						}
						s.$id = i;
						return Kt[i] = s
					};
					var Qt = String("$id,$watch,$unwatch,$fire,$events,$model,$skipArray").match(vt);
					var Gt = Object.defineProperty;
					var Yt = true;
					try {
						Gt({}, "_", {
							value: "x"
						});
						var Zt = Object.defineProperties
					} catch (en) {
						Yt = false
					}
					var tn = Object.is || function(e, t) {
						if (e === 0 && t === 0) {
							return 1 / e === 1 / t
						} else if (e !== e) {
							return t !== t
						} else {
							return e === t
						}
					};
					var nn = Nt ? function(e) {
						var t = {};
						for (var n in e) {
							t[n] = {
								get: e[n],
								set: e[n],
								enumerable: true,
								configurable: true
							}
						}
						return t
					} : function(e) {
						return e
					};
					var rn = {};
					var sn = St.splice;
					var on = {
						_splice: sn,
						_fire: function(e, t, n) {
							b(this.$events[ct], e, t, n)
						},
						_add: function(e, t) {
							var n = this.length;
							t = typeof t === "number" ? t : n;
							var r = [];
							for (var i = 0, s = e.length; i < s; i++) {
								r[i] = p(e[i], this.$model[t + i])
							}
							sn.apply(this, [t, 0].concat(r));
							this._fire("add", t, r);
							if (!this._stopFireLength) {
								return this._.length = this.length
							}
						},
						_del: function(e, t) {
							var n = this._splice(e, t);
							if (n.length) {
								this._fire("del", e, t);
								if (!this._stopFireLength) {
									this._.length = this.length
								}
							}
							return n
						},
						push: function() {
							St.push.apply(this.$model, arguments);
							var e = this._add(arguments);
							this._fire("index", e > 2 ? e - 2 : 0);
							return e
						},
						size: function() {
							return this._.length
						},
						pushArray: function(e) {
							return this.push.apply(this, e)
						},
						unshift: function() {
							St.unshift.apply(this.$model, arguments);
							this._add(arguments, 0);
							this._fire("index", arguments.length);
							return this.$model.length
						},
						shift: function() {
							var e = this.$model.shift();
							this._del(0, 1);
							this._fire("index", 0);
							return e
						},
						pop: function() {
							var e = this.$model.pop();
							this._del(this.length - 1, 1);
							return e
						},
						splice: function(e, t) {
							e = i(e, this.length);
							var n = sn.apply(this.$model, arguments),
								r = [],
								s;
							this._stopFireLength = true;
							if (n.length) {
								r = this._del(e, n.length);
								s = true
							}
							if (arguments.length > 2) {
								this._add(xt.call(arguments, 2), e);
								s = true
							}
							this._stopFireLength = false;
							this._.length = this.length;
							if (s) {
								this._fire("index", 0)
							}
							return r
						},
						contains: function(e) {
							return this.indexOf(e) !== -1
						},
						remove: function(e) {
							return this.removeAt(this.indexOf(e))
						},
						removeAt: function(e) {
							return e >= 0 ? this.splice(e, 1) : []
						},
						clear: function() {
							this.$model.length = this.length = this._.length = 0;
							this._fire("clear", 0);
							return this
						},
						removeAll: function(e) {
							if (Array.isArray(e)) {
								e.forEach(function(e) {
									this.remove(e)
								}, this)
							} else if (typeof e === "function") {
								for (var t = this.length - 1; t >= 0; t--) {
									var n = this[t];
									if (e(n, t)) {
										this.splice(t, 1)
									}
								}
							} else {
								this.clear()
							}
						},
						ensure: function(e) {
							if (!this.contains(e)) {
								this.push(e)
							}
							return this
						},
						set: function(e, t) {
							if (e >= 0) {
								var n = avalon.type(t);
								if (t && t.$model) {
									t = t.$model
								}
								var r = this[e];
								if (n === "object") {
									for (var i in t) {
										if (r.hasOwnProperty(i)) {
											r[i] = t[i]
										}
									}
								} else if (n === "array") {
									r.clear().push.apply(r, t)
								} else if (r !== t) {
									this[e] = t;
									this.$model[e] = t;
									this._fire("set", e, t)
								}
							}
							return this
						}
					};
					"sort,reverse".replace(vt, function(e) {
						on[e] = function() {
							var t = this.$model,
								n = t.slice(0),
								r = false;
							St[e].apply(t, arguments);
							for (var i = 0, s = n.length; i < s; i++) {
								var o = t[i],
									u = n[i];
								if (!tn(o, u)) {
									r = true;
									var a = n.indexOf(o, i);
									var f = this._splice(a, 1)[0];
									var l = n.splice(a, 1)[0];
									this._splice(i, 0, f);
									n.splice(i, 0, l);
									this._fire("move", a, i)
								}
							}
							n = void 0;
							if (r) {
								this._fire("index", 0)
							}
							return this
						}
					});
					var un = /^(duplex|on)$/;
					var an = [],
						fn = 0,
						ln = 200,
						cn = new Date,
						hn;
					var pn = new function() {
						avalon.mix(this, {
							option: at.createElement("select"),
							thead: at.createElement("table"),
							td: at.createElement("tr"),
							area: at.createElement("map"),
							tr: at.createElement("tbody"),
							col: at.createElement("colgroup"),
							legend: at.createElement("fieldset"),
							_default: at.createElement("div"),
							g: at.createElementNS("http://www.w3.org/2000/svg", "svg")
						});
						this.optgroup = this.option;
						this.tbody = this.tfoot = this.colgroup = this.caption = this.thead;
						this.th = this.td
					};
					pn.optgroup = pn.option;
					pn.tbody = pn.tfoot = pn.colgroup = pn.caption = pn.thead;
					pn.th = pn.td;
					String("circle,defs,ellipse,image,line,path,polygon,polyline,rect,symbol,text,use").replace(vt, function(e) {
						pn[e] = pn.g
					});
					var dn = /<([\w:]+)/;
					var vn = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig;
					var mn = n(["", "text/javascript", "text/ecmascript", "application/ecmascript", "application/javascript"]);
					var gn = at.createElement("script");
					avalon.parseHTML = function(e) {
						if (typeof e !== "string") {
							e = e + ""
						}
						e = e.replace(vn, "<$1></$2>").trim();
						var t = (dn.exec(e) || ["", ""])[1].toLowerCase(),
							n = pn[t] || pn._default,
							r = kt.cloneNode(false),
							i;
						n.innerHTML = e;
						var s = n.getElementsByTagName("script");
						if (s.length) {
							for (var o = 0, u; u = s[o++];) {
								if (mn[u.type]) {
									var a = gn.cloneNode(false);
									St.forEach.call(u.attributes, function(e) {
										a.setAttribute(e.name, e.value)
									});
									a.text = u.text;
									u.parentNode.replaceChild(a, u)
								}
							}
						}
						while (i = n.firstChild) {
							r.appendChild(i)
						}
						return r
					};
					avalon.innerHTML = function(e, t) {
						var n = this.parseHTML(t);
						this.clearHTML(e).appendChild(n)
					};
					avalon.clearHTML = function(e) {
						e.textContent = "";
						while (e.firstChild) {
							e.removeChild(e.firstChild)
						}
						return e
					};
					var yn = {};
					avalon.scanCallback = function(e, t) {
						t = t || "$all";
						var n = yn[t] || (yn[t] = []);
						n.push(e)
					};
					avalon.scan = function(e, t, n) {
						function r(e) {
							o += e;
							f = true;
							setTimeout(function() {
								if (o <= 0 && !u) {
									u = true;
									while (a = i.shift()) {
										a()
									}
								}
							})
						}
						e = e || Ct;
						n = n || "$all";
						var i = yn[n] || [];
						var s = t ? [].concat(t) : [];
						var o = 0;
						var u = false;
						var a;
						var f = false;
						s.cb = r;
						T(e, s);
						if (!f) {
							while (a = i.shift()) {
								a()
							}
						}
					};
					var bn = n("area,base,basefont,br,col,command,embed,hr,img,input,link,meta,param,source,track,wbr,noscript,script,style,textarea".toUpperCase());
					var wn = function(e, t, n) {
						var r = e.getAttribute(t);
						if (r) {
							for (var i = 0, s; s = n[i++];) {
								if (s.hasOwnProperty(r) && typeof s[r] === "function") {
									return s[r]
								}
							}
						}
					};
					var En = /ms-(\w+)-?(.*)/;
					var Sn = {
						"if": 10,
						repeat: 90,
						data: 100,
						widget: 110,
						each: 1400,
						"with": 1500,
						duplex: 2e3,
						on: 3e3
					};
					var xn = n("animationend,blur,change,input,click,dblclick,focus,keydown,keypress,keyup,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,scan,scroll,submit");
					var Tn = n("value,title,alt,checked,selected,disabled,readonly,enabled");
					var Nn = /^if|widget|repeat$/;
					var Cn = /^each|with|html|include$/;
					var kn = /\|\s*html\s*/,
						Ln = /\|\|/g,
						An = /&lt;/g,
						On = /&gt;/g;
					"add,remove".replace(vt, function(e) {
						avalon.fn[e + "Class"] = function(t) {
							var n = this[0];
							if (t && typeof t === "string" && n && n.nodeType === 1) {
								t.replace(/\S+/g, function(t) {
									n.classList[e](t)
								})
							}
							return this
						}
					});
					avalon.fn.mix({
						hasClass: function(e) {
							var t = this[0] || {};
							return t.nodeType === 1 && t.classList.contains(e)
						},
						toggleClass: function(e, t) {
							var n, r = 0;
							var i = e.split(/\s+/);
							var s = typeof t === "boolean";
							while (n = i[r++]) {
								var o = s ? t : !this.hasClass(n);
								this[o ? "addClass" : "removeClass"](n)
							}
							return this
						},
						attr: function(e, t) {
							if (arguments.length === 2) {
								this[0].setAttribute(e, t);
								return this
							} else {
								return this[0].getAttribute(e)
							}
						},
						data: function(e, t) {
							e = "data-" + _(e || "");
							switch (arguments.length) {
								case 2:
									this.attr(e, t);
									return this;
								case 1:
									var n = this.attr(e);
									return P(n);
								case 0:
									var r = {};
									St.forEach.call(this[0].attributes, function(t) {
										if (t) {
											e = t.name;
											if (!e.indexOf("data-")) {
												e = D(e.slice(5));
												r[e] = P(t.value)
											}
										}
									});
									return r
							}
						},
						removeData: function(e) {
							e = "data-" + _(e);
							this[0].removeAttribute(e);
							return this
						},
						css: function(e, t) {
							if (avalon.isPlainObject(e)) {
								for (var n in e) {
									avalon.css(this, n, e[n])
								}
							} else {
								var r = avalon.css(this, e, t)
							}
							return r !== void 0 ? r : this
						},
						position: function() {
							var e, t, n = this[0],
								r = {
									top: 0,
									left: 0
								};
							if (!n) {
								return
							}
							if (this.css("position") === "fixed") {
								t = n.getBoundingClientRect()
							} else {
								e = this.offsetParent();
								t = this.offset();
								if (e[0].tagName !== "HTML") {
									r = e.offset()
								}
								r.top += avalon.css(e[0], "borderTopWidth", true);
								r.left += avalon.css(e[0], "borderLeftWidth", true)
							}
							return {
								top: t.top - r.top - avalon.css(n, "marginTop", true),
								left: t.left - r.left - avalon.css(n, "marginLeft", true)
							}
						},
						offsetParent: function() {
							var e = this[0].offsetParent || Ct;
							while (e && e.tagName !== "HTML" && avalon.css(e, "position") === "static") {
								e = e.offsetParent
							}
							return avalon(e || Ct)
						},
						bind: function(e, t, n) {
							if (this[0]) {
								return avalon.bind(this[0], e, t, n)
							}
						},
						unbind: function(e, t, n) {
							if (this[0]) {
								avalon.unbind(this[0], e, t, n)
							}
							return this
						},
						val: function(e) {
							var t = this[0];
							if (t && t.nodeType === 1) {
								var n = arguments.length === 0;
								var r = n ? ":get" : ":set";
								var i = jn[j(t) + r];
								if (i) {
									var s = i(t, e)
								} else if (n) {
									return (t.value || "").replace(/\r/g, "")
								} else {
									t.value = e
								}
							}
							return n ? s : this
						}
					});
					if (Ct.dataset) {
						avalon.fn.data = function(e, t) {
							var n = this[0].dataset;
							switch (arguments.length) {
								case 2:
									n[e] = t;
									return this;
								case 1:
									t = n[e];
									return P(t);
								case 0:
									var r = {};
									for (var e in n) {
										r[e] = P(n[e])
									}
									return r
							}
						}
					}
					var Mn = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
					avalon.each({
						scrollLeft: "pageXOffset",
						scrollTop: "pageYOffset"
					}, function(e, t) {
						avalon.fn[e] = function(n) {
							var r = this[0] || {},
								i = H(r),
								s = e === "scrollTop";
							if (!arguments.length) {
								return i ? i[t] : r[e]
							} else {
								if (i) {
									i.scrollTo(!s ? n : avalon(i).scrollLeft(), s ? n : avalon(i).scrollTop())
								} else {
									r[e] = n
								}
							}
						}
					});
					var _n = avalon.cssHooks = {};
					var Dn = ["", "-webkit-", "-moz-", "-ms-"];
					var Pn = {
						"float": "cssFloat"
					};
					avalon.cssNumber = n("columnCount,order,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom");
					avalon.cssName = function(e, t, n) {
						if (Pn[e]) {
							return Pn[e]
						}
						t = t || Ct.style;
						for (var r = 0, i = Dn.length; r < i; r++) {
							n = D(Dn[r] + e);
							if (n in t) {
								return Pn[e] = n
							}
						}
						return null
					};
					_n["@:set"] = function(e, t, n) {
						e.style[t] = n
					};
					_n["@:get"] = function(e, t) {
						if (!e || !e.style) {
							throw new Error("getComputedStyle要求传入一个节点 " + e)
						}
						var n, r = getComputedStyle(e, null);
						if (r) {
							n = t === "filter" ? r.getPropertyValue(t) : r[t];
							if (n === "") {
								n = e.style[t]
							}
						}
						return n
					};
					_n["opacity:get"] = function(e) {
						var t = _n["@:get"](e, "opacity");
						return t === "" ? "1" : t
					};
					"top,left".replace(vt, function(e) {
						_n[e + ":get"] = function(t) {
							var n = _n["@:get"](t, e);
							return /px$/.test(n) ? n : avalon(t).position()[e] + "px"
						}
					});
					var Hn = {
						position: "absolute",
						visibility: "hidden",
						display: "block"
					};
					var Bn = /^(none|table(?!-c[ea]).+)/;
					"Width,Height".replace(vt, function(e) {
						var t = e.toLowerCase(),
							n = "client" + e,
							r = "scroll" + e,
							i = "offset" + e;
						_n[t + ":get"] = function(t, n, r) {
							var s = -4;
							if (typeof r === "number") {
								s = r
							}
							n = e === "Width" ? ["Left", "Right"] : ["Top", "Bottom"];
							var o = t[i];
							if (s === 2) {
								return o + avalon.css(t, "margin" + n[0], true) + avalon.css(t, "margin" + n[1], true)
							}
							if (s < 0) {
								o = o - avalon.css(t, "border" + n[0] + "Width", true) - avalon.css(t, "border" + n[1] + "Width", true)
							}
							if (s === -4) {
								o = o - avalon.css(t, "padding" + n[0], true) - avalon.css(t, "padding" + n[1], true)
							}
							return o
						};
						_n[t + "&get"] = function(e) {
							var n = [];
							B(e, n);
							var r = _n[t + ":get"](e);
							for (var i = 0, s; s = n[i++];) {
								e = s.node;
								for (var o in s) {
									if (typeof s[o] === "string") {
										e.style[o] = s[o]
									}
								}
							}
							return r
						};
						avalon.fn[t] = function(s) {
							var o = this[0];
							if (arguments.length === 0) {
								if (o.setTimeout) {
									return o["inner" + e] || o.document.documentElement[n]
								}
								if (o.nodeType === 9) {
									var u = o.documentElement;
									return Math.max(o.body[r], u[r], o.body[i], u[i], u[n])
								}
								return _n[t + "&get"](o)
							} else {
								return this.css(t, s)
							}
						};
						avalon.fn["inner" + e] = function() {
							return _n[t + ":get"](this[0], void 0, -2)
						};
						avalon.fn["outer" + e] = function(e) {
							return _n[t + ":get"](this[0], void 0, e === true ? 2 : 0)
						}
					});
					avalon.fn.offset = function() {
						var e = this[0],
							t = {
								left: 0,
								top: 0
							};
						if (!e || !e.tagName || !e.ownerDocument) {
							return t
						}
						var n = e.ownerDocument,
							r = n.documentElement,
							i = n.defaultView;
						if (!r.contains(e)) {
							return t
						}
						if (e.getBoundingClientRect !== void 0) {
							t = e.getBoundingClientRect()
						}
						return {
							top: t.top + i.pageYOffset - r.clientTop,
							left: t.left + i.pageXOffset - r.clientLeft
						}
					};
					var jn = {
						"select:get": function(e, t) {
							var n, r = e.options,
								i = e.selectedIndex,
								s = e.type === "select-one" || i < 0,
								o = s ? null : [],
								u = s ? i + 1 : r.length,
								a = i < 0 ? u : s ? i : 0;
							for (; a < u; a++) {
								n = r[a];
								if ((n.selected || a === i) && !n.disabled) {
									t = n.value;
									if (s) {
										return t
									}
									o.push(t)
								}
							}
							return o
						},
						"select:set": function(e, t, n) {
							t = [].concat(t);
							for (var r = 0, i; i = e.options[r++];) {
								if (i.selected = t.indexOf(i.value) >= 0) {
									n = true
								}
							}
							if (!n) {
								e.selectedIndex = -1
							}
						}
					};
					var Fn = JSON.stringify;
					var In = "break,case,catch,continue,debugger,default,delete,do,else,false" + ",finally,for,function,if,in,instanceof,new,null,return,switch,this" + ",throw,true,try,typeof,var,void,while,with" + ",abstract,boolean,byte,char,class,const,double,enum,export,extends" + ",final,float,goto,implements,import,int,interface,long,native" + ",package,private,protected,public,short,static,super,synchronized" + ",throws,transient,volatile" + ",arguments,let,yield" + ",undefined";
					var qn = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|[\s\t\n]*\.[\s\t\n]*[$\w\.]+/g;
					var Rn = /[^\w$]+/g;
					var Un = new RegExp(["\\b" + In.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g");
					var zn = /\b\d[^,]*/g;
					var Wn = /^,+|,+$/g;
					var Xn = r(512);
					var Vn = function(e) {
						var t = "," + e.trim();
						if (Xn[t]) {
							return Xn[t]
						}
						var n = e.replace(qn, "").replace(Rn, ",").replace(Un, "").replace(zn, "").replace(Wn, "").split(/^$|,+/);
						return Xn(t, I(n))
					};
					var $n = r(128);
					var Jn = /\w\[.*\]|\w\.\w/;
					var Kn = /(\$proxy\$[a-z]+)\d+$/;
					var Qn = /\)\s*$/;
					var Gn = /\)\s*\|/g;
					var Yn = /\|\s*([$\w]+)/g;
					var Zn = /"\s*\["/g;
					var er = /"\s*\(/g;
					avalon.parseExprProxy = U;
					var tr = "autofocus,autoplay,async,allowTransparency,checked,controls,declare,disabled,defer,defaultChecked,defaultSelected" + "contentEditable,isMap,loop,multiple,noHref,noResize,noShade,open,readOnly,selected";
					var nr = {};
					tr.replace(vt, function(e) {
						nr[e.toLowerCase()] = e
					});
					var rr = {
						"accept-charset": "acceptCharset",
						"char": "ch",
						charoff: "chOff",
						"class": "className",
						"for": "htmlFor",
						"http-equiv": "httpEquiv"
					};
					var ir = "accessKey,bgColor,cellPadding,cellSpacing,codeBase,codeType,colSpan," + "dateTime,defaultValue,frameBorder,longDesc,maxLength,marginWidth,marginHeight," + "rowSpan,tabIndex,useMap,vSpace,valueType,vAlign";
					ir.replace(vt, function(e) {
						rr[e.toLowerCase()] = e
					});
					var sr = /<noscript.*?>(?:[\s\S]+?)<\/noscript>/img;
					var or = /<noscript.*?>([\s\S]+?)<\/noscript>/im;
					var ur = function() {
						return new(ut.XMLHttpRequest || ActiveXObject)("Microsoft.XMLHTTP")
					};
					var ar = avalon.templateCache = {};
					_t.attr = function(e, t) {
						var n = e.value.trim(),
							r = true;
						if (n.indexOf(Ft) > -1 && n.indexOf(It) > 2) {
							r = false;
							if (qt.test(n) && RegExp.rightContext === "" && RegExp.leftContext === "") {
								r = true;
								n = RegExp.$1
							}
						}
						if (e.type === "include") {
							var i = e.element;
							e.includeRendered = wn(i, "data-include-rendered", t);
							e.includeLoaded = wn(i, "data-include-loaded", t);
							var s = e.includeReplaced = !!avalon(i).data("includeReplace");
							e.startInclude = at.createComment("ms-include");
							e.endInclude = at.createComment("ms-include-end");
							if (s) {
								e.element = e.startInclude;
								i.parentNode.insertBefore(e.startInclude, i);
								i.parentNode.insertBefore(e.endInclude, i.nextSibling)
							} else {
								i.insertBefore(e.startInclude, i.firstChild);
								i.appendChild(e.endInclude)
							}
						}
						e.handlerName = "attr";
						U(n, t, e, r ? 0 : O(e.value))
					};
					Dt.attr = function(e, t, n) {
						var r = n.type,
							i = n.param;
						if (r === "css") {
							avalon(t).css(i, e)
						} else if (r === "attr") {
							if (nr[i]) {
								var s = nr[i];
								if (typeof t[s] === "boolean") {
									return t[s] = !!e
								}
							}
							var o = e === false || e === null || e === void 0;
							if (!Nt && rr[i]) {
								i = rr[i]
							}
							if (o) {
								return t.removeAttribute(i)
							}
							var u = gt.test(t) ? false : at.namespaces && isVML(t) ? true : i in t.cloneNode(false);
							if (u) {
								t[i] = e
							} else {
								t.setAttribute(i, e)
							}
						} else if (r === "include" && e) {
							var a = n.vmodels;
							var f = n.includeRendered;
							var l = n.includeLoaded;
							var c = n.includeReplaced;
							var h = c ? t.parentNode : t;
							a.cb(1);

							function p(e) {
								if (l) {
									e = l.apply(h, [e].concat(a))
								}
								if (f) {
									w(h, function() {
										f.call(h)
									}, NaN)
								}
								while (true) {
									var t = n.startInclude.nextSibling;
									if (t && t !== n.endInclude) {
										h.removeChild(t)
									} else {
										break
									}
								}
								var r = avalon.parseHTML(e);
								var i = avalon.slice(r.childNodes);
								h.insertBefore(r, n.endInclude);
								C(i, a);
								a.cb(-1)
							}
							if (n.param === "src") {
								if (ar[e]) {
									avalon.nextTick(function() {
										p(ar[e])
									})
								} else {
									var d = ur();
									d.onreadystatechange = function() {
										if (d.readyState === 4) {
											var t = d.status;
											if (t >= 200 && t < 300 || t === 304 || t === 1223) {
												p(ar[e] = d.responseText)
											}
										}
									};
									d.open("GET", e, true);
									if ("withCredentials" in d) {
										d.withCredentials = true
									}
									d.setRequestHeader("X-Requested-With", "XMLHttpRequest");
									d.send(null)
								}
							} else {
								var v = e && e.nodeType === 1 ? e : at.getElementById(e);
								if (v) {
									if (v.tagName === "NOSCRIPT" && !(v.innerHTML || v.fixIE78)) {
										var d = ur();
										d.open("GET", location, false);
										d.send(null);
										var m = at.getElementsByTagName("noscript");
										var g = (d.responseText || "").match(sr) || [];
										var y = g.length;
										for (var b = 0; b < y; b++) {
											var E = m[b];
											if (E) {
												E.style.display = "none";
												E.fixIE78 = (g[b].match(or) || ["", "&nbsp;"])[1]
											}
										}
									}
									avalon.nextTick(function() {
										p(v.fixIE78 || v.value || v.innerText || v.innerHTML)
									})
								}
							}
						} else {
							if (!Ct.hasAttribute && typeof e === "string" && (r === "src" || r === "href")) {
								e = e.replace(/&amp;/g, "&")
							}
							t[r] = e;
							if (ut.chrome && t.tagName === "EMBED") {
								var S = t.parentNode;
								var x = document.createComment("ms-src");
								S.replaceChild(x, t);
								S.replaceChild(t, x)
							}
						}
					};
					"title,alt,src,value,css,include,href".replace(vt, function(e) {
						_t[e] = _t.attr
					});
					_t["class"] = function(t, n) {
						var r = t.param,
							i = t.value,
							s;
						t.handlerName = "class";
						if (!r || isFinite(r)) {
							t.param = "";
							var o = i.replace(Rt, function(e) {
								return e.replace(/./g, "0")
							});
							var u = o.indexOf(":");
							if (u === -1) {
								var a = i
							} else {
								a = i.slice(0, u);
								s = i.slice(u + 1);
								R(s, n, t);
								if (!t.evaluator) {
									e("debug: ms-class '" + (s || "").trim() + "' 不存在于VM中");
									return false
								} else {
									t._evaluator = t.evaluator;
									t._args = t.args
								}
							}
							var f = qt.test(a);
							if (!f) {
								t.immobileClass = a
							}
							U("", n, t, f ? O(a) : 0)
						} else {
							t.immobileClass = t.oldStyle = t.param;
							U(i, n, t)
						}
					};
					Dt["class"] = function(e, t, n) {
						var r = avalon(t),
							i = n.type;
						if (i === "class" && n.oldStyle) {
							r.toggleClass(n.oldStyle, !!e)
						} else {
							n.toggleClass = n._evaluator ? !!n._evaluator.apply(t, n._args) : true;
							n.newClass = n.immobileClass || e;
							if (n.oldClass && n.newClass !== n.oldClass) {
								r.removeClass(n.oldClass)
							}
							n.oldClass = n.newClass;
							switch (i) {
								case "class":
									r.toggleClass(n.newClass, n.toggleClass);
									break;
								case "hover":
								case "active":
									if (!n.hasBindEvent) {
										var s = "mouseenter";
										var o = "mouseleave";
										if (i === "active") {
											t.tabIndex = t.tabIndex || -1;
											s = "mousedown";
											o = "mouseup";
											var u = r.bind("mouseleave", function() {
												n.toggleClass && r.removeClass(n.newClass)
											})
										}
										var a = r.bind(s, function() {
											n.toggleClass && r.addClass(n.newClass)
										});
										var f = r.bind(o, function() {
											n.toggleClass && r.removeClass(n.newClass)
										});
										n.rollback = function() {
											r.unbind("mouseleave", u);
											r.unbind(s, a);
											r.unbind(o, f)
										};
										n.hasBindEvent = true
									}
									break
							}
						}
					};
					"hover,active".replace(vt, function(e) {
						_t[e] = _t["class"]
					});
					Dt.data = function(e, t, n) {
						var r = "data-" + n.param;
						if (e && typeof e === "object") {
							t[r] = e
						} else {
							t.setAttribute(r, String(e))
						}
					};
					Dt.text = function(e, t) {
						e = e == null ? "" : e;
						if (t.nodeType === 3) {
							try {
								t.data = e
							} catch (n) {}
						} else {
							t.textContent = e
						}
					};
					Dt.html = function(e, t, n) {
						e = e == null ? "" : e;
						var r = "group" in n;
						var i = r ? t.parentNode : t;
						if (e.nodeType === 11) {
							var s = e
						} else if (e.nodeType === 1 || e.item) {
							var o = e.nodeType === 1 ? e.childNodes : e.item ? e : [];
							s = kt.cloneNode(true);
							while (o[0]) {
								s.appendChild(o[0])
							}
						} else {
							s = avalon.parseHTML(e)
						}
						var u = at.createComment("ms-html");
						if (r) {
							i.insertBefore(u, t);
							avalon.clearHTML(Y(t, n.group));
							n.element = u
						} else {
							avalon.clearHTML(i).appendChild(u)
						}
						if (r) {
							n.group = s.childNodes.length || 1
						}
						var o = avalon.slice(s.childNodes);
						if (o[0]) {
							if (u.parentNode) u.parentNode.replaceChild(s, u);
							if (r) {
								n.element = o[0]
							}
						}
						C(o, n.vmodels)
					};
					_t["if"] = _t.data = _t.text = _t.html = function(e, t) {
						U(e.value, t, e)
					};
					Dt["if"] = function(e, t, n) {
						if (e) {
							if (t.nodeType === 8) {
								t.parentNode.replaceChild(n.template, t);
								t = n.element = n.template
							}
							if (t.getAttribute(n.name)) {
								t.removeAttribute(n.name);
								L(t, n.vmodels)
							}
							n.rollback = null
						} else {
							if (t.nodeType === 1) {
								var r = n.element = at.createComment("ms-if");
								t.parentNode.replaceChild(r, t);
								n.template = t;
								lt.appendChild(t);
								n.rollback = function() {
									if (t.parentNode === lt) {
										lt.removeChild(t)
									}
								}
							}
						}
					};
					avalon.parseDisplay = z;
					_t.visible = function(e, t) {
						var n = avalon(e.element);
						var r = n.css("display");
						if (r === "none") {
							var i = n[0].style;
							var s = /visibility/i.test(i.cssText);
							var o = n.css("visibility");
							i.display = "";
							i.visibility = "hidden";
							r = n.css("display");
							if (r === "none") {
								r = z(n[0].nodeName)
							}
							i.visibility = s ? o : ""
						}
						e.display = r;
						U(e.value, t, e)
					};
					Dt.visible = function(e, t, n) {
						t.style.display = e ? n.display : "none"
					};
					var fr = /\(([^)]*)\)/;
					_t.on = function(e, t) {
						var n = e.value;
						var r = e.param.replace(/-\d+$/, "");
						if (typeof _t.on[r + "Hook"] === "function") {
							_t.on[r + "Hook"](e)
						}
						if (n.indexOf("(") > 0 && n.indexOf(")") > -1) {
							var i = (n.match(fr) || ["", ""])[1].trim();
							if (i === "" || i === "$event") {
								n = n.replace(fr, "")
							}
						}
						U(n, t, e)
					};
					Dt.on = function(e, n, r) {
						r.type = "on";
						e = function(e) {
							var n = r.evaluator || t;
							return n.apply(this, r.args.concat(e))
						};
						var i = r.param.replace(/-\d+$/, "");
						if (i === "scan") {
							e.call(n, {
								type: i
							})
						} else if (typeof r.specialBind === "function") {
							r.specialBind(n, e)
						} else {
							var s = avalon.bind(n, i, e)
						}
						r.rollback = function() {
							if (typeof r.specialUnbind === "function") {
								r.specialUnbind()
							} else {
								avalon.unbind(n, i, s)
							}
						}
					};
					_t.widget = function(e, n) {
						var r = e.value.match(vt);
						var i = e.element;
						var s = r[0];
						var o = r[1];
						if (!o || o === "$") {
							o = Ot(s)
						}
						var u = r[2] || s;
						n.cb(-1);
						var a = avalon.ui[s];
						if (typeof a === "function") {
							n = i.vmodels || n;
							for (var f = 0, l; l = n[f++];) {
								if (l.hasOwnProperty(u) && typeof l[u] === "object") {
									var c = l[u];
									c = c.$model || c;
									break
								}
							}
							if (c) {
								var h = c[s + "Id"];
								if (typeof h === "string") {
									o = h
								}
							}
							var p = avalon.getWidgetData(i, s);
							e.value = [s, o, u].join(",");
							e[s + "Id"] = o;
							e.evaluator = t;
							i.msData["ms-widget-id"] = o;
							var d = e[s + "Options"] = avalon.mix({}, a.defaults, c || {}, p);
							i.removeAttribute("ms-widget");
							var v = a(i, e, n) || {};
							if (v.$id) {
								avalon.vmodels[o] = v;
								E(i, v);
								if (v.hasOwnProperty("$init")) {
									v.$init(function() {
										var e = [v].concat(n);
										e.cb = n.cb;
										avalon.scan(i, e);
										if (typeof d.onInit === "function") {
											d.onInit.call(i, v, d, n)
										}
									})
								}
								if (v.hasOwnProperty("$remove")) {
									function m() {
										if (!i.msRetain && !Ct.contains(i)) {
											v.$remove();
											try {
												v.widgetElement = null
											} catch (e) {}
											i.msData = {};
											delete avalon.vmodels[v.$id];
											return false
										}
									}
									if (ut.chrome) {
										i.addEventListener("DOMNodeRemovedFromDocument", function() {
											setTimeout(m)
										})
									} else {
										avalon.tick(m)
									}
								}
							} else {
								avalon.scan(i, n)
							}
						} else if (n.length) {
							i.vmodels = n
						}
					};
					var lr = _t.duplex = function(r, i) {
						var s = r.element,
							o;
						U(r.value, i, r, 0, 1);
						r.changed = wn(s, "data-duplex-changed", i) || t;
						if (r.evaluator && r.args) {
							var u = [];
							var a = n("string,number,boolean,checked");
							if (s.type === "radio" && r.param === "") {
								r.param = "checked"
							}
							if (s.msData) {
								s.msData["ms-duplex"] = r.value
							}
							r.param.replace(/\w+/g, function(t) {
								if (/^(checkbox|radio)$/.test(s.type) && /^(radio|checked)$/.test(t)) {
									if (t === "radio") e("ms-duplex-radio已经更名为ms-duplex-checked");
									t = "checked";
									r.isChecked = true
								}
								if (t === "bool") {
									t = "boolean";
									e("ms-duplex-bool已经更名为ms-duplex-boolean")
								} else if (t === "text") {
									t = "string";
									e("ms-duplex-text已经更名为ms-duplex-string")
								}
								if (a[t]) {
									o = true
								}
								avalon.Array.ensure(u, t)
							});
							if (!o) {
								u.push("string")
							}
							r.param = u.join("-");
							r.bound = function(e, t) {
								if (s.addEventListener) {
									s.addEventListener(e, t, false)
								} else {
									s.attachEvent("on" + e, t)
								}
								var n = r.rollback;
								r.rollback = function() {
									avalon.unbind(s, e, t);
									n && n()
								}
							};
							for (var f in avalon.vmodels) {
								var l = avalon.vmodels[f];
								l.$fire("avalon-ms-duplex-init", r)
							}
							var c = r.pipe || (r.pipe = X);
							c(null, r, "init");
							var h = s.tagName;
							lr[h] && lr[h](s, r.evaluator.apply(null, r.args), r)
						}
					};
					avalon.duplexHooks = {
						checked: {
							get: function(e, t) {
								return !t.element.oldValue
							}
						},
						string: {
							get: function(e) {
								return e
							},
							set: W
						},
						"boolean": {
							get: function(e) {
								return e === "true"
							},
							set: W
						},
						number: {
							get: function(e) {
								return isFinite(e) ? parseFloat(e) || 0 : e
							},
							set: W
						}
					};
					var cr, hr = [];
					avalon.tick = function(e) {
						if (hr.push(e) === 1) {
							cr = setInterval($, 60)
						}
					};
					var pr = t;
					try {
						var dr = document.createElement("input");
						var vr = dr.constructor.prototype;
						Object.getOwnPropertyNames(vr);
						var mr = Object.getOwnPropertyDescriptor(vr, "value").set;
						Object.defineProperty(vr, "value", {
							set: J
						})
					} catch (en) {
						pr = avalon.tick
					}
					lr.INPUT = function(t, n, r) {
						function i(e) {
							r.changed.call(this, e, r)
						}

						function s() {
							c = true
						}

						function o() {
							c = false
						}

						function u() {
							if (c) return;
							var e = t.oldValue = t.value;
							var s = r.pipe(e, r, "get");
							if (l.data("duplex-observe") !== false) {
								n(s);
								i.call(t, s);
								if (l.data("duplex-focus")) {
									avalon.nextTick(function() {
										t.focus()
									})
								}
							}
						}
						var a = t.type,
							f = r.bound,
							l = avalon(t),
							c = false;
						r.handler = function() {
							var e = r.pipe(n(), r, "set");
							if (e !== t.value) {
								t.value = e
							}
						};
						if (r.isChecked || t.type === "radio") {
							u = function() {
								if (l.data("duplex-observe") !== false) {
									var e = r.pipe(t.value, r, "get");
									n(e);
									i.call(t, e)
								}
							};
							r.handler = function() {
								var e = n();
								var i = r.isChecked ? !!e : e + "" === t.value;
								t.checked = t.oldValue = i
							};
							f("click", u)
						} else if (a === "checkbox") {
							u = function() {
								if (l.data("duplex-observe") !== false) {
									var s = t.checked ? "ensure" : "remove";
									var o = n();
									if (!Array.isArray(o)) {
										e("ms-duplex应用于checkbox上要对应一个数组");
										o = [o]
									}
									avalon.Array[s](o, r.pipe(t.value, r, "get"));
									i.call(t, o)
								}
							};
							r.handler = function() {
								var e = [].concat(n());
								t.checked = e.indexOf(r.pipe(t.value, r, "get")) >= 0
							};
							f("change", u)
						} else {
							var h = t.getAttribute("data-duplex-event") || t.getAttribute("data-event") || "input";
							if (t.attributes["data-event"]) {
								e("data-event指令已经废弃，请改用data-duplex-event")
							}
							h.replace(vt, function(e) {
								switch (e) {
									case "input":
										f("input", u);
										if (!ut.VBArray) {
											f("compositionstart", s);
											f("compositionend", o)
										}
										break;
									default:
										f(e, u);
										break
								}
							})
						}
						t.oldValue = t.value;
						if (/text|textarea|password/.test(t.type)) {
							pr(function() {
								if (Ct.contains(t)) {
									K.call(t)
								} else if (!t.msRetain) {
									return false
								}
							})
						}
						d(r);
						i.call(t, t.value)
					};
					lr.TEXTAREA = lr.INPUT;
					lr.SELECT = function(t, n, r) {
						function i() {
							if (s.data("duplex-observe") !== false) {
								var e = s.val();
								if (Array.isArray(e)) {
									e = e.map(function(e) {
										return r.pipe(e, r, "get")
									})
								} else {
									e = r.pipe(e, r, "get")
								}
								if (e + "" !== t.oldValue) {
									n(e)
								}
								r.changed.call(t, e, r)
							}
						}
						var s = avalon(t);
						r.handler = function() {
							var r = n();
							r = r && r.$model || r;
							if (Array.isArray(r)) {
								if (!t.multiple) {
									e("ms-duplex在<select multiple=true>上要求对应一个数组")
								}
							} else {
								if (t.multiple) {
									e("ms-duplex在<select multiple=false>不能对应一个数组")
								}
							}
							r = Array.isArray(r) ? r.map(String) : r + "";
							if (r + "" !== t.oldValue) {
								s.val(r);
								t.oldValue = r + ""
							}
						};
						r.bound("change", i);
						w(t, function() {
							d(r);
							r.changed.call(t, n(), r)
						}, NaN)
					};
					_t.repeat = function(e, t) {
						var n = e.type;
						U(e.value, t, e, 0, 1);
						e.proxies = [];
						var r = false;
						t.cb(-1);
						try {
							var i = e.$repeat = e.evaluator.apply(0, e.args || []);
							var s = avalon.type(i);
							if (s !== "object" && s !== "array") {
								r = true;
								avalon.log("warning:" + e.value + "对应类型不正确")
							}
						} catch (o) {
							r = true;
							avalon.log("warning:" + e.value + "编译出错")
						}
						var u = e.value.split(".") || [];
						if (u.length > 1) {
							u.pop();
							var a = u[0];
							for (var f = 0, l; l = t[f++];) {
								if (l && l.hasOwnProperty(a)) {
									var c = l[a].$events || {};
									c[ct] = c[ct] || [];
									c[ct].push(e);
									break
								}
							}
						}
						var h = e.element;
						if (r) {
							return avalon(h).addClass("avalonHide")
						}
						avalon(h).removeClass("avalonHide");
						h.removeAttribute(e.name);
						e.sortedCallback = wn(h, "data-with-sorted", t);
						e.renderedCallback = wn(h, "data-" + n + "-rendered", t);
						var p = e.element = at.createComment("ms-repeat");
						var d = e.endRepeat = at.createComment("ms-repeat-end");
						kt.appendChild(p);
						kt.appendChild(d);
						if (n === "each" || n === "with") {
							e.template = h.innerHTML.trim();
							avalon.clearHTML(h).appendChild(kt)
						} else {
							e.template = h.outerHTML.trim();
							h.parentNode.replaceChild(kt, h);
							e.group = 1
						}
						e.rollback = function() {
							var t = e.element;
							if (!t) return;
							Dt.repeat.call(e, "clear");
							var n = t.parentNode;
							var r = avalon.parseHTML(e.template);
							var i = r.firstChild;
							n.replaceChild(r, t);
							n.removeChild(e.endRepeat);
							i = e.element = e.type === "repeat" ? i : n;
							e.group = i.setAttribute(e.name, e.value)
						};
						e.handler = Dt.repeat;
						e.$outer = {};
						var v = "$key",
							g = "$val";
						if (Array.isArray(i)) {
							v = "$first";
							g = "$last"
						}
						for (var f = 0, y; y = t[f++];) {
							if (y.hasOwnProperty(v) && y.hasOwnProperty(g)) {
								e.$outer = y;
								break
							}
						}
						var b = (i.$events || {})[ct];
						if (b && avalon.Array.ensure(b, e)) {
							m(e, b)
						}
						if (s === "object") {
							var w = i.$events;
							var E = !w ? {} : w.$withProxyPool || (w.$withProxyPool = {});
							e.handler("append", i, E)
						} else {
							e.handler("add", 0, i)
						}
					};
					Dt.repeat = function(e, n, r) {
						if (e) {
							var i = this;
							var s = i.element.parentNode;
							var o = i.proxies;
							var u = kt.cloneNode(false);
							if (e === "del" || e === "move") {
								var a = G(i, n)
							}
							var f = i.group;
							switch (e) {
								case "add":
									var l = r;
									var c = i.$repeat.length - 1;
									var h = [];
									for (var p = 0, d = l.length; p < d; p++) {
										var v = p + n;
										var m = tt(v, i);
										o.splice(v, 0, m);
										Q(i, u, m, h)
									}
									a = G(i, n);
									s.insertBefore(u, a);
									for (var p = 0, g; g = h[p++];) {
										C(g.nodes, g.vmodels);
										g.nodes = g.vmodels = null
									}
									Z(i);
									break;
								case "del":
									var y = o.splice(n, r);
									var u = Y(a, f, r);
									avalon.clearHTML(u);
									it(y, "each");
									break;
								case "index":
									var c = o.length - 1;
									for (; r = o[n]; n++) {
										r.$index = n;
										r.$first = n === 0;
										r.$last = n === c
									}
									break;
								case "clear":
									while (true) {
										var E = i.element.nextSibling;
										if (E && E !== i.endRepeat) {
											s.removeChild(E)
										} else {
											break
										}
									}
									it(o, "each");
									break;
								case "move":
									var S = o.splice(n, 1)[0];
									if (S) {
										o.splice(r, 0, S);
										u = Y(a, f);
										a = G(i, r);
										s.insertBefore(u, a)
									}
									break;
								case "set":
									var m = o[n];
									if (m) {
										b(m.$events.$index)
									}
									break;
								case "append":
									var x = r;
									var T = [];
									var h = [];
									for (var N in n) {
										if (n.hasOwnProperty(N) && N !== "hasOwnProperty") {
											T.push(N)
										}
									}
									if (i.sortedCallback) {
										var k = i.sortedCallback.call(s, T);
										if (k && Array.isArray(k) && k.length) {
											T = k
										}
									}
									for (var p = 0, N; N = T[p++];) {
										if (N !== "hasOwnProperty") {
											if (!x[N]) {
												x[N] = rt(N, i)
											}
											Q(i, u, x[N], h)
										}
									}
									i.proxySize = T.length;
									s.insertBefore(u, i.element.nextSibling);
									for (var p = 0, g; g = h[p++];) {
										C(g.nodes, g.vmodels);
										g.nodes = g.vmodels = null
									}
									Z(i);
									break
							}
							var L = i.renderedCallback || t,
								A = arguments;
							w(s, function() {
								L.apply(s, A);
								if (s.oldValue && s.tagName === "SELECT" && e === "index") {
									avalon(s).val(s.oldValue.split(","))
								}
							}, NaN)
						}
					};
					"with,each".replace(vt, function(e) {
						_t[e] = _t.repeat
					});
					var gr = [];
					var yr = [];
					var br = /<script[^>]*>([\S\s]*?)<\/script\s*>/gim;
					var wr = /\s+(on[^=\s]+)(?:=("[^"]*"|'[^']*'|[^\s>]+))?/g;
					var Er = /<\w+\b(?:(["'])[^"]*?(\1)|[^>])*>/ig;
					var Sr = {
						a: /\b(href)\=("javascript[^"]*"|'javascript[^']*')/ig,
						img: /\b(src)\=("javascript[^"]*"|'javascript[^']*')/ig,
						form: /\b(action)\=("javascript[^"]*"|'javascript[^']*')/ig
					};
					var xr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
					var Tr = /([^\#-~| |!])/g;
					var Nr = avalon.filters = {
						uppercase: function(e) {
							return e.toUpperCase()
						},
						lowercase: function(e) {
							return e.toLowerCase()
						},
						truncate: function(e, t, n) {
							t = t || 30;
							n = n === void 0 ? "..." : n;
							return e.length > t ? e.slice(0, t - n.length) + n : String(e)
						},
						$filter: function(e) {
							for (var t = 1, n = arguments.length; t < n; t++) {
								var r = arguments[t];
								var i = avalon.filters[r.shift()];
								if (typeof i === "function") {
									var s = [e].concat(r);
									e = i.apply(null, s)
								}
							}
							return e
						},
						camelize: D,
						sanitize: function(e) {
							return e.replace(br, "").replace(Er, function(e, t) {
								var n = e.toLowerCase().match(/<(\w+)\s/);
								if (n) {
									var r = Sr[n[1]];
									if (r) {
										e = e.replace(r, function(e, t, n) {
											var r = n.charAt(0);
											return t + "=" + r + "javascript:void(0)" + r
										})
									}
								}
								return e.replace(wr, " ").replace(/\s+/g, " ")
							})
						},
						escape: function(e) {
							return String(e).replace(/&/g, "&amp;").replace(xr, function(e) {
								var t = e.charCodeAt(0);
								var n = e.charCodeAt(1);
								return "&#" + ((t - 55296) * 1024 + (n - 56320) + 65536) + ";"
							}).replace(Tr, function(e) {
								return "&#" + e.charCodeAt(0) + ";"
							}).replace(/</g, "&lt;").replace(/>/g, "&gt;")
						},
						currency: function(e, t) {
							t = t || "￥";
							return t + avalon.filters.number(e)
						},
						number: function(e, t, n, r) {
							e = (e + "").replace(/[^0-9+\-Ee.]/g, "");
							var i = !isFinite(+e) ? 0 : +e,
								s = !isFinite(+t) ? 0 : Math.abs(t),
								o = r || ",",
								u = n || ".",
								a = "",
								f = function(e, t) {
									var n = Math.pow(10, t);
									return "" + Math.round(e * n) / n
								};
							a = (s ? f(i, s) : "" + Math.round(i)).split(".");
							if (a[0].length > 3) {
								a[0] = a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, o)
							}
							if ((a[1] || "").length < s) {
								a[1] = a[1] || "";
								a[1] += (new Array(s - a[1].length + 1)).join("0")
							}
							return a.join(u)
						}
					};
					new function() {
						function e(e) {
							return parseInt(e, 10)
						}

						function t(e, t, n) {
							var r = "";
							if (e < 0) {
								r = "-";
								e = -e
							}
							e = "" + e;
							while (e.length < t) e = "0" + e;
							if (n) e = e.substr(e.length - t);
							return r + e
						}

						function n(e, n, r, i) {
							return function(s) {
								var o = s["get" + e]();
								if (r > 0 || o > -r) o += r;
								if (o === 0 && r === -12) {
									o = 12
								}
								return t(o, n, i)
							}
						}

						function r(e, t) {
							return function(n, r) {
								var i = n["get" + e]();
								var s = (t ? "SHORT" + e : e).toUpperCase();
								return r[s][i]
							}
						}

						function i(e) {
							var n = -1 * e.getTimezoneOffset();
							var r = n >= 0 ? "+" : "";
							r += t(Math[n > 0 ? "floor" : "ceil"](n / 60), 2) + t(Math.abs(n % 60), 2);
							return r
						}

						function s(e, t) {
							return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
						}

						function o(t) {
							var n;
							if (n = t.match(l)) {
								var r = new Date(0),
									i = 0,
									s = 0,
									o = n[8] ? r.setUTCFullYear : r.setFullYear,
									u = n[8] ? r.setUTCHours : r.setHours;
								if (n[9]) {
									i = e(n[9] + n[10]);
									s = e(n[9] + n[11])
								}
								o.call(r, e(n[1]), e(n[2]) - 1, e(n[3]));
								var a = e(n[4] || 0) - i;
								var f = e(n[5] || 0) - s;
								var c = e(n[6] || 0);
								var h = Math.round(parseFloat("0." + (n[7] || 0)) * 1e3);
								u.call(r, a, f, c, h);
								return r
							}
							return t
						}
						var u = {
							yyyy: n("FullYear", 4),
							yy: n("FullYear", 2, 0, true),
							y: n("FullYear", 1),
							MMMM: r("Month"),
							MMM: r("Month", true),
							MM: n("Month", 2, 1),
							M: n("Month", 1, 1),
							dd: n("Date", 2),
							d: n("Date", 1),
							HH: n("Hours", 2),
							H: n("Hours", 1),
							hh: n("Hours", 2, -12),
							h: n("Hours", 1, -12),
							mm: n("Minutes", 2),
							m: n("Minutes", 1),
							ss: n("Seconds", 2),
							s: n("Seconds", 1),
							sss: n("Milliseconds", 3),
							EEEE: r("Day"),
							EEE: r("Day", true),
							a: s,
							Z: i
						};
						var a = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
							f = /^\d+$/;
						var l = /^(\d{4})-?(\d+)-?(\d+)(?:T(\d+)(?::?(\d+)(?::?(\d+)(?:\.(\d+))?)?)?(Z|([+-])(\d+):?(\d+))?)?$/;
						var c = /^(\d+)\D(\d+)\D(\d+)/;
						Nr.date = function(t, n) {
							var r = Nr.date.locate,
								i = "",
								s = [],
								l, h;
							n = n || "mediumDate";
							n = r[n] || n;
							if (typeof t === "string") {
								if (f.test(t)) {
									t = e(t)
								} else {
									var p = t.trim();
									t = p.replace(c, function(e, t, n, r) {
										var i = r.length === 4 ? [r, t, n] : [t, n, r];
										return i.join("-")
									});
									t = o(t)
								}
								t = new Date(t)
							}
							if (typeof t === "number") {
								t = new Date(t)
							}
							if (avalon.type(t) !== "date") {
								return
							}
							while (n) {
								h = a.exec(n);
								if (h) {
									s = s.concat(h.slice(1));
									n = s.pop()
								} else {
									s.push(n);
									n = null
								}
							}
							s.forEach(function(e) {
								l = u[e];
								i += l ? l(t, r) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
							});
							return i
						};
						var h = {
							AMPMS: {
								0: "上午",
								1: "下午"
							},
							DAY: {
								0: "星期日",
								1: "星期一",
								2: "星期二",
								3: "星期三",
								4: "星期四",
								5: "星期五",
								6: "星期六"
							},
							MONTH: {
								0: "1月",
								1: "2月",
								2: "3月",
								3: "4月",
								4: "5月",
								5: "6月",
								6: "7月",
								7: "8月",
								8: "9月",
								9: "10月",
								10: "11月",
								11: "12月"
							},
							SHORTDAY: {
								0: "周日",
								1: "周一",
								2: "周二",
								3: "周三",
								4: "周四",
								5: "周五",
								6: "周六"
							},
							fullDate: "y年M月d日EEEE",
							longDate: "y年M月d日",
							medium: "yyyy-M-d ah:mm:ss",
							mediumDate: "yyyy-M-d",
							mediumTime: "ah:mm:ss",
							"short": "yy-M-d ah:mm",
							shortDate: "yy-M-d",
							shortTime: "ah:mm"
						};
						h.SHORTMONTH = h.MONTH;
						Nr.date.locate = h
					};
					var Cr = [];
					if (at.readyState === "complete") {
						setTimeout(st)
					} else {
						at.addEventListener("DOMContentLoaded", st);
						ut.addEventListener("load", st)
					}
					avalon.ready = function(e) {
						if (Wt) {
							Wt("ready!", e)
						} else if (st === t) {
							e(avalon)
						} else {
							Cr.push(e)
						}
					};
					avalon.config({
						loader: true
					});
					avalon.ready(function() {
						avalon.scan(at.body)
					})
				})();
				(function() {
					function e(e) {
						return JSON.parse(JSON.stringify(e.$model))
					}

					function t(e, n) {
						if (avalon.type(e) === "array") {
							n = avalon.mix(true, {}, {
								_: n
							});
							e = {
								_: e
							}
						} else {
							n = avalon.mix(true, {}, n)
						}
						for (var r in e) {
							if (typeof n[r] == "undefined" || !e.hasOwnProperty(r) || r === "hasOwnProperty") continue;
							switch (avalon.type(e[r])) {
								case "object":
									t(e[r], n[r]);
									break;
								case "array":
									avalon.each(n[r], function(n, i) {
										var s = typeof e[r][n];
										if (s === "object" && e[r][n] !== null) {
											t(e[r][n], i)
										} else {
											if (n >= e[r].size()) {
												e[r].push(i)
											} else {
												e[r].set(n, i)
											}
										}
									});
									while (e[r].length > n[r].length) {
										e[r].pop()
									}
									break;
								default:
									e[r] = n[r];
									break
							}
						}
					}
					var n = QApp.util;
					var r = "qapp-",
						i = 0,
						s = "ms-controller",
						o = "unused";
					var u = QApp.addWidget;
					avalon.ui = avalon.ui || {};
					QApp.addWidget = function(e, t, r) {
						var i = r && (n.isString(r) ? r : "tap");
						u(e, t, r);
						avalon.ui["qapp-" + e] = function(r, s, o) {
							var u, a, f, l = -1;
							s = {
								args: {}
							};
							while (!o[++l].getView) {}
							u = o[l].getView();
							f = n.delay(function() {
								n.each(r.dataset, function(t, n) {
									if (!t.indexOf(e)) {
										var r = t.substring(e.length).replace(/\w/i, function(e) {
											return e.toLowerCase()
										});
										if (!r.indexOf("arg")) {
											s.args[r.substring(3).replace(/\w/i, function(e) {
												return e.toLowerCase()
											})] = n
										} else {
											s[r] = n
										}
									}
								});
								if (u) {
									if (i) {
										i = s.eventType || i;
										bindFunc = function() {
											a = t(r, s, u, o[0])
										};
										n.addEvent(r, i, bindFunc);
										u.on("destroy", function() {
											n.removeEvent(r, i, bindFunc)
										})
									} else {
										a = t(r, s, u, o[0])
									}
									if (s.id) {
										u.widgets[s.id] = a
									}
								}
							});
							u.on("destroy", function() {
								if (f) {
									clearTimeout(f)
								}
							})
						}
					};
					var a = {};
					QApp.ready(function() {
						n.createStyle("[ms-controller] {visibility:hidden;}")
					});
					QApp.addPlugin(["avalon", "engine.avalon"], {}, function(u, f) {
						var l = r + i++,
							c, h = {},
							p = u.mergeParam;
						if (n.isFunction(f)) {
							c = avalon.define(l, function(e) {
								e.view_status = o;
								e.getView = function() {
									return u
								};
								f.call(u, e)
							})
						} else {
							n.each(f, function(e, t) {
								if (n.isFunction(t)) {
									h[e] = avalon.define(l + "-" + e, function(e) {
										e.getView = function() {
											return u
										};
										t.call(u, e)
									});
									h[e].view_status = o
								}
							})
						}
						u.getVM = function(e) {
							return e ? h[e] : c
						};
						u.mergeParam = function(e) {
							p.call(u, e);
							if (c) {
								t(c, e)
							} else if (h) {
								n.each(h, function(n, r) {
									t(r, e)
								})
							}
							return u
						};
						u.on("loadStart", function() {
							if (n.isFunction(f)) {
								n.attr(u.root.querySelector("[" + s + "]") || u.root, s, l)
							} else {
								n.each(f, function(e, t) {
									if (n.isFunction(t)) {
										n.attr(me.root.querySelector("[" + s + "=" + e + "]"), s, l + "-" + e)
									}
								})
							}
						});
						u.on("rendered", function() {
							avalon.scan(u.root);
							if (u.extra.vmcache && a[u.name]) {
								if (c) {
									t(c, a[u.name])
								} else if (h) {
									n.each(h, function(e, n) {
										t(n, a[u.name][e])
									})
								}
								u.mergeParam(u.param)
							}
						});
						u.on("destroy", function() {
							if (u.extra.vmcache) {
								a[u.name] = e(c ? c : h)
							}
							if (c) {
								c.$unwatch();
								delete avalon.vmodels[c.$id]
							} else if (h) {
								n.each(h, function(e, t) {
									t.$unwatch();
									delete avalon.vmodels[t.$id]
								})
							}
							u = null;
							c = null;
							h = null;
							p = null
						});
						return {}
					})
				})()
			}(t.exports, t, e);
			e.____MODULES["9d98ca07b73221c493c790bbc2226633"] = t.exports
		})(this);
		(function(e) {
			var t = {
				id: "7c5d57f1f2a98b39b42b95fcc735e710",
				filename: "index.js",
				exports: {}
			};
			if (!e.____MODULES) {
				e.____MODULES = {}
			}
			var n = function(e, t, n) {
				(function() {
					function e(e) {
						if (e.pageX == null && e.clientX != null) {
							var t = document.documentElement;
							var n = document.body;
							e.pageX = e.clientX + (t.scrollLeft || n && n.scrollLeft || 0) - (t.clientLeft || n && n.clientLeft || 0);
							e.pageY = e.clientY + (t.scrollTop || n && n.scrollTop || 0) - (t.clientTop || n && n.clientTop || 0)
						}
						return e
					}

					function t(e) {
						var t = C(e),
							n = N(e);
						return {
							left: t.left,
							top: t.top,
							right: t.left + n.width,
							bottom: t.top + n.height
						}
					}

					function n(n, r) {
						var i = t(n);
						r = e(r);
						return r.pageX >= i.left && r.pageX <= i.right && r.pageY >= i.top && r.pageY <= i.bottom
					}

					function r(e) {
						S(e, l)
					}

					function i(e) {
						E(e, c, "");
						S(e, c)
					}

					function s(e) {
						return ~(e + "").indexOf("%") || ~(e + "").indexOf("px") ? e : e + "px"
					}

					function o() {
						if (!B) {
							B = f.createElement("div");
							E(B, {
								position: "absolute",
								top: 0,
								left: 0,
								width: s(h.width),
								height: s(h.height)
							})
						}
						return B
					}

					function u(e, t, n) {
						t.on("loadEnd", function() {
							p.attr(t.root, "qapp-ani", e);
							p.css(t.root, c, "hidden")
						});
						t.on("beforeHide", function() {
							L(t.root)
						});
						t.on("destroy", function() {
							t.show = null;
							t.hide = null
						});
						t.autoHide = n.autoHide && n.autoHide !== "false";
						j(t)
					}
					var a = window,
						f = document,
						l = "display",
						c = "visibility";
					var h = QApp.origin,
						p = QApp.util,
						d = p.extend,
						v = p.delay,
						m = p.appendNodes,
						g = p.addClass,
						y = p.addEvent,
						b = p.removeEvent,
						w = p.removeNode,
						E = p.css,
						S = p.removeStyle,
						x = p.contains,
						T = p.animate,
						N = p.size,
						C = p.position,
						k = p.parallel,
						L = p.blur,
						A = p.getZIndex,
						O = p.getUniqueID,
						M = p.delegatedEvent,
						_ = p.dispatchEvent,
						D = p.isFunction;
					var P = function() {
						var e = QApp.sniff,
							t = navigator.userAgent.toLowerCase();
						if (e.ios || e.android && t.indexOf("micromessenger") > -1) {
							return 1
						}
						return 2
					}();
					var H = P == 1 ? function(e, t, n) {
						return {
							translate3d: e + "px, " + t + "px, " + n + "px"
						}
					} : function(e, t, n) {
						return {
							translate: e + "px, " + t + "px",
							translateZ: n + "px"
						}
					};
					var B = null;
					var j = function() {
						function e(e) {
							i.unshift(e)
						}

						function t(e) {
							var t = i.indexOf(e);
							if (~t) {
								i.splice(t, 1)
							}
						}

						function r(n) {
							n.once("show", function() {
								e(n)
							});
							n.once("hide", function() {
								t(n);
								n = null
							})
						}
						var i = [],
							s = "";
						r.setNextView = function(e) {
							s = e
						};
						p.ready(function() {
							f.body.addEventListener("touchstart", function(e) {
								var t = i[0];
								if (t && t.autoHide && !(x(t.root, e.target) || n(t.root, e)) && (!t.relyElement || !x(t.relyElement, e.target))) {
									if (t.isContainer) {
										t.decHide()
									} else {
										t.hide()
									}
								}
							}, false)
						});
						return r
					}();
					(function() {
						function e(e, t, n) {
							E(e, d(t, {
								top: s(h.height - n.distance),
								height: s(n.distance),
								zIndex: n.zIndex
							}, H(0, n.distance, 0)))
						}
						var t = 500;
						var n = {
							autoHide: true,
							distance: 0,
							duration: 200,
							showMask: true,
							maskColor: "rgba(0, 0, 0, 0.4)",
							zIndex: 0
						};
						QApp.addPlugin(["actionSheet", "ui.actionSheet"], n, function(n, s, c) {
							var p = {
									position: "absolute",
									left: 0,
									width: "100%"
								},
								y = false,
								b, x;
							if (!c.animate) {
								s.duration = 0
							}
							s.zIndex = s.zIndex || A();
							n.on("loaded", function() {
								if (!s.distance) {
									n.root.style.height = "auto";
									s.distance = N(n.root).height
								}
								e(n.root, p, s);
								g(n.root, "shadow")
							});
							n.show = function(e) {
								if (e && e.fromHash) {
									e = true
								}
								L();
								j.setNextView(n.name);
								if (s.showMask) {
									b = o();
									E(b, {
										display: "block",
										backgroundColor: s.maskColor,
										zIndex: s.zIndex
									});
									m(f.body, b)
								}
								if (!y) {
									y = true;
									if (n.isShow) {
										y = false;
										n.trigger("refresh")
									} else {
										x = N(a).height !== h.height ? t : 0;
										n.once("completed", function() {
											r(n.root);
											i(n.root);
											n.trigger("beforeShow");
											v(function() {
												T(n.root, H(0, 0, 0), e === true || n.preventAnimate ? 0 : s.duration, "ease-out", x).done(function() {
													n.isShow = true;
													y = false;
													S(n.root, "transform");
													n.trigger("show")
												})
											})
										});
										n.renderTo(f.body)
									}
								}
								return n
							};
							n.hide = function(e) {
								if (!y && n.isShow) {
									y = true;
									n.trigger("beforeHide");
									T(n.root, p, e === true || n.preventAnimate ? 0 : s.duration / 2, "ease-out").done(function() {
										n.isShow = false;
										if (b) {
											E(b, l, "none");
											w(b)
										}
										y = false;
										n.trigger("hide")
									})
								}
								return n
							};
							n.refresh = function() {
								n.root.style.height = "auto";
								s.distance = N(n.root).height;
								e(n.root, p, s)
							};
							n.on("destroy", function() {
								p = null;
								b = null;
								n = null
							});
							u("actionSheet", n, s);
							return {
								setOption: function(e) {
									s = d({}, s, e)
								}
							}
						})
					})();
					(function() {
						var e = {
							autoHide: false,
							maskColor: "rgba(0, 0, 0, .4)",
							duration: 200,
							width: 0,
							height: 0,
							zIndex: 0
						};
						QApp.addPlugin(["ui.dialog", "dialog"], e, function(e, t, n) {
							var a = h.width,
								c = h.height,
								p = false,
								v;
							if (!n.animate) {
								t.duration = 0
							}
							t.zIndex = t.zIndex || A();
							e.on("loaded", function() {
								var n = N(e.root);
								if (!t.width) {
									t.width = n.width
								}
								if (!t.height) {
									t.height = n.height
								}
								E(e.root, d({
									position: "absolute",
									width: s(t.width),
									height: s(t.height),
									zIndex: t.zIndex,
									display: "none",
									top: s((c - t.height) / 2),
									left: s((a - t.width) / 2)
								}, H(0, c, 0)));
								g(e.root, "shadow")
							});
							e.show = function(n) {
								if (n && n.fromHash) {
									n = true
								}
								j.setNextView(e.name);
								v = o();
								E(v, {
									display: "block",
									backgroundColor: t.maskColor,
									zIndex: t.zIndex
								});
								m(f.body, v);
								if (!p) {
									p = true;
									if (e.isShow) {
										p = false;
										e.trigger("refresh")
									} else {
										e.once("completed", function() {
											r(e.root);
											i(e.root);
											e.trigger("beforeShow");
											T(e.root, H(0, 0, 0), n === true || e.preventAnimate ? 0 : t.duration).done(function() {
												e.isShow = true;
												p = false;
												S(e.root, "transform");
												e.trigger("show")
											})
										});
										e.renderTo(f.body)
									}
								}
								return e
							};
							e.hide = function(n) {
								if (!p && e.isShow) {
									p = true;
									e.trigger("beforeHide");
									T(e.root, H(0, c, 0), n === true || e.preventAnimate ? 0 : t.duration).done(function() {
										e.isShow = false;
										if (v) {
											E(v, l, "none");
											w(v)
										}
										p = false;
										e.trigger("hide")
									})
								}
								return e
							};
							e.on("destroy", function() {
								v = null;
								e = null
							});
							u("dialog", e, t);
							return {
								setOption: function(e) {
									t = d({}, t, e)
								}
							}
						})
					})();
					(function() {
						function e(e, t, n) {
							var r = 0,
								i = 0;
							switch (n) {
								case "right":
									r = s(p.position(e).top);
									i = s(p.position(e).left + p.size(e).width);
									break;
								case "left":
									r = s(p.position(e).top);
									i = s(p.position(e).left - parseInt(t.width));
									break;
								case "bottom":
									r = s(p.position(e).top + p.size(e).height);
									if (t.position === "left") {
										i = s(p.position(e).left)
									} else if (t.position === "right") {
										i = s(p.position(e).left + p.size(e).width - t.width)
									} else {
										i = s(p.position(e).left + p.size(e).width / 2 - t.width / 2)
									}
									break;
								case "top":
									r = s(p.position(e).top - parseInt(t.height));
									if (t.position === "left") {
										i = s(p.position(e).left)
									} else if (t.position === "right") {
										i = s(p.position(e).left + p.size(e).width - t.width)
									} else {
										i = s(p.position(e).left + p.size(e).width / 2 - t.width / 2)
									}
									break
							}
							return {
								top: r,
								left: i
							}
						}

						function t(e, t) {
							if (t.autoDirection && t.autoDirection !== "false") {
								var n = t.direction,
									r = C(e),
									i = r.left,
									s = r.top,
									o = N(e),
									u = o.width,
									a = o.height,
									f = h.width,
									l = h.height,
									c = t.width,
									p = t.height,
									d = i + u + c <= f,
									v = i - c >= 0,
									m = s + a + p <= l,
									g = s - p >= 0;
								if (n === "right") {
									if (!d) {
										if (v) {
											n = "left"
										} else {
											n = "bottom"
										}
									}
								} else if (n === "left") {
									if (!v) {
										if (d) {
											n = "right"
										} else {
											n = "bottom"
										}
									}
								}
								if (n === "bottom") {
									if (!m) {
										n = "top"
									}
								} else if (n === "top") {
									if (!g) {
										n = "bottom"
									}
								}
								return n
							} else {
								return t.direction
							}
						}
						var n = null,
							o;
						var a = {
								autoHide: true,
								autoDirection: false,
								direction: "right",
								duration: 200,
								width: 0,
								height: 0,
								position: "center",
								dropDown: false,
								bgColor: "rgba(0, 0, 0, 0.4)",
								group: false,
								item: null
							},
							c = {
								opacity: 0
							},
							m = {
								opacity: 1
							};
						QApp.ready(function() {
							o = M(f.body, [], "qapp-popup-group")
						});
						QApp.addPlugin(["popup", "ui.popup"], a, function(h, p, g) {
							var y = false,
								b = false;
							if (!g.animate) {
								p.duration = 0
							}
							if (p.dropDown) {
								p.useArrow = false;
								p.autoDirection = false;
								p.direction = "bottom";
								p.dropDuration = p.duration;
								p.duration = 0
							}
							p.zIndex = p.zIndex || A();
							h.on("loaded", function() {
								var e = N(h.root);
								if (!p.width) {
									p.width = e.width
								}
								if (!p.height) {
									p.height = e.height
								}
								E(h.root, {
									display: "none",
									position: "absolute",
									width: s(p.width),
									height: s(p.height),
									zIndex: p.zIndex
								});
								E(h.root, p.dropDown ? m : c)
							});
							h.show = function(u, a) {
								h.relyElement = u;
								j.setNextView(h.name);
								if (!y) {
									y = true;
									var l = t(u, p),
										c = e(u, p, l);
									if (h.isShow) {
										r(h.root);
										i(h.root);
										E(h.root, {
											top: c.top,
											left: c.left
										});
										y = false;
										h.trigger("refresh")
									} else {
										h.once("completed", function() {
											h.trigger("beforeShow");
											r(h.root);
											i(h.root);
											E(h.root, {
												top: c.top,
												left: c.left
											});
											if (p.dropDown) {
												var e = h.root.childNodes,
													t, o = -1;
												do {
													o++;
													t = e[o]
												} while (t.nodeType === 3);
												E(t, d({
													height: s(p.height)
												}, H(0, -p.height, 0)));
												E(h.root, {
													position: "absolute",
													zIndex: p.zIndex,
													width: s(p.width),
													height: s(p.dropDown),
													backgroundColor: p.bgColor,
													overflow: "hidden"
												});
												if (n) {
													w(n)
												}
												v(function() {
													T(t, H(0, 0, 0), a === true || h.preventAnimate ? 0 : p.dropDuration, "ease-out").done(function() {
														h.isShow = true;
														y = false;
														h.trigger("show")
													})
												})
											} else {
												T(h.root, m, a === true || h.preventAnimate ? 0 : p.duration).done(function() {
													h.isShow = true;
													y = false;
													h.trigger("show")
												})
											}
										});
										h.once("rendered", function() {
											if (p.group) {
												o.add(p.group, "touchstart", function(e) {
													if (e.el !== p.item) {
														b = true
													}
												})
											}
											h.root.addEventListener("tap", function(e) {
												if (h && h.root === e.target) {
													h.once("hide", function() {
														h.destroy()
													});
													h.hide();
													e.stopPropagation()
												}
											}, true)
										});
										h.renderTo(f.body)
									}
								}
								return h
							};
							h.hide = function(e) {
								h.relyElement = null;
								if (!y && h.isShow) {
									y = true;
									h.trigger("beforeHide");
									if (p.dropDown) {
										var t = h.root.childNodes,
											r = e === true || h.preventAnimate ? 0 : p.dropDuration,
											i, s = -1;
										do {
											s++;
											i = t[s]
										} while (i.nodeType === 3);
										r /= 2;
										if (p.group && b) {
											T(i, {
												opacity: 0
											}, r, "ease-in").done(function() {
												h.isShow = false;
												y = false;
												h.options.destroyDom = false;
												if (n) {
													w(n)
												}
												n = h.root;
												v(function() {
													T(n, {
														opacity: 0
													}, r, "ease-in").done(function() {
														w(n);
														n = null
													})
												}, 100);
												o.remove(p.group, "touchstart");
												h.trigger("hide")
											})
										} else {
											T(i, d({
												opacity: 0
											}, H(0, -p.height, 0)), e === true || h.preventAnimate ? 0 : r, "ease-in").done(function() {
												h.isShow = false;
												y = false;
												h.trigger("hide")
											})
										}
									} else {
										T(h.root, c, e === true || h.preventAnimate ? 0 : p.duration).done(function() {
											h.isShow = false;
											y = false;
											E(h.root, l, "none");
											h.trigger("hide")
										})
									}
								}
								return h
							};
							h.on("destroy", function() {
								h = null
							});
							u("popup", h, p);
							return {
								setOption: function(e) {
									p = d({}, a, e)
								}
							}
						})
					})()
				})()
			}(t.exports, t, e);
			e.____MODULES["7c5d57f1f2a98b39b42b95fcc735e710"] = t.exports
		})(this);
		(function(e) {
			var t = {
				id: "bd2141162d398feaa2ba14dc245d2bba",
				filename: "index.js",
				exports: {}
			};
			if (!e.____MODULES) {
				e.____MODULES = {}
			}
			var n = function(e, t, n) {
				(function() {
					var e = QApp.util;
					var t = {
						tag: "action-type",
						eventType: "tap"
					};
					QApp.addPlugin("delegated", t, function(t, n, r) {
						t.on("loaded", function() {
							var r = t.delegatedEvent = e.delegatedEvent(t.root, [], n.tag);
							if (t.options.bindActions) {
								e.each(t.options.bindActions, function(i, s) {
									var o = i.split(":"),
										u = o[0],
										a = o[1] || n.eventType;
									if (typeof s === "string") s = t[s];
									if (e.isFunction(s)) {
										r.add(u, a, function(e, n) {
											return s.call(t, e, n)
										})
									}
								})
							}
							t.bind = function(i, s, o) {
								if (e.isFunction(s)) {
									o = s;
									s = n.eventType
								}
								if (e.isFunction(o)) {
									r.add(i, s, function(e, n) {
										return o.call(t, e, n)
									})
								}
							};
							t.fireAction = r.fireAction
						});
						t.on("destroy", function() {
							if (t.delegatedEvent && e.isFunction(t.delegatedEvent.destroy)) {
								t.delegatedEvent.destroy()
							}
							t.delegatedEvent = null;
							t.bind = null
						})
					})
				})()
			}(t.exports, t, e);
			e.____MODULES["bd2141162d398feaa2ba14dc245d2bba"] = t.exports
		})(this);
		(function(e) {
			var t = {
				id: "52550815c02f4b1ebb5e458316e9f7b4",
				filename: "index.js",
				exports: {}
			};
			if (!e.____MODULES) {
				e.____MODULES = {}
			}
			var n = function(e, t, n) {
				(function() {
					var e = QApp.util;
					var t = {
						tag: "node-type"
					};
					QApp.addPlugin("doms", t, function(t, n, r) {
						t.doms = {};
						t.find = function(r) {
							return t.root ? e.makeArray(t.root.querySelectorAll("[" + n.tag + '="' + r + '"]')) : []
						};
						t.on("rendered", function() {
							e.makeArray(t.root.querySelectorAll("[" + n.tag + "]")).forEach(function(r) {
								var i = e.attr(r, n.tag) || "node";
								if (!t.doms[i]) {
									t.doms[i] = r
								} else {
									if (e.isArray(t.doms[i])) {
										t.doms[i].push(r)
									} else {
										t.doms[i] = [t.doms[i], r]
									}
								}
							})
						});
						t.on("destroy", function() {
							e.empty(t.doms);
							t.doms = null
						})
					})
				})()
			}(t.exports, t, e);
			e.____MODULES["52550815c02f4b1ebb5e458316e9f7b4"] = t.exports
		})(this);
		(function(e) {
			var t = {
				id: "3501632c175ff50fbe38cfb6a85d2296",
				filename: "index.js",
				exports: {}
			};
			if (!e.____MODULES) {
				e.____MODULES = {}
			}
			var n = function(e, t, n) {
				(function() {
					function e() {}

					function t() {
						return null
					}

					function n(n) {
						var r = n in window && window[n];
						return r ? {
							size: function() {
								return r.length
							},
							key: function() {
								return r.key ? function(e) {
									return r.key(e)
								} : t
							}(),
							get: function() {
								return r.getItem ? function(e) {
									try {
										return JSON.parse(r.getItem(e))
									} catch (t) {
										return null
									}
								} : t
							}(),
							set: function() {
								return r.setItem ? function(e, t) {
									try {
										return r.setItem(e, JSON.stringify(t))
									} catch (n) {
										return void 0
									}
								} : e
							}(),
							remove: function() {
								return r.removeItem ? function(e) {
									return r.removeItem(e)
								} : e
							}(),
							clear: function() {
								return r.clear ? function() {
									return r.clear()
								} : e
							}()
						} : f
					}

					function r() {
						return (new Date).getTime()
					}

					function i() {
						var e = r(),
							t, n, i, s;
						for (t = 0, n = l.size(); t < n; t++) {
							i = l.key(t);
							s = l.get(i);
							if (s && i !== u) {
								if (s.expires > 0 && s.createTime + s.expires < e) {
									l.remove(i)
								} else {
									p[i] = s.data
								}
							}
						}
					}

					function s() {
						this._source = {}
					}

					function o(e) {
						if (!m[e]) {
							m[e] = new s
						}
						return m[e]
					}
					var u = "_baseInfo",
						a = 7 * 24 * 60 * 60 * 1e3;
					var f = {
						size: function() {
							return 0
						},
						get: t,
						set: e,
						remove: e,
						clear: e
					};
					var l = n("localStorage"),
						c = n("sessionStorage"),
						h = false,
						p = {};
					var d = function(e, t, n) {
						var i = arguments.length,
							s = null;
						if (i === 1) {
							if (h && e in p) {
								s = p[e]
							} else {
								s = c.get(e) || function() {
									var t = l.get(e);
									if (t) {
										if (t.expires === 0 || t.createTime + t.expires > r()) {
											return t.data
										}
										l.remove(e)
									}
									return null
								}();
								p[e] = s
							}
							return s
						} else if (i > 1) {
							if (t === void 0 || t === null) {
								delete p[e];
								return c.remove(e) || l.remove(e)
							} else {
								p[e] = t;
								n = n || 0;
								if (n === -1) {
									return c.set(e, t)
								} else {
									return l.set(e, {
										data: t,
										createTime: r(),
										expires: n
									})
								}
							}
						}
					};
					d.setCache = function(e) {
						h = !!e
					};
					d.clear = function() {
						var e = l.get(u);
						c.clear();
						l.clear();
						l.set(u, e)
					};
					d.init = function(e) {
						var t = l.get(u) || {},
							n = t.version,
							s = t.cTime,
							o = false;
						if (!n || n !== e) {
							o = true;
							l.clear();
							n = e
						}
						if (!s || r() - s > a) {
							o = true;
							i();
							s = r()
						}
						if (o) {
							l.set(u, {
								version: n,
								cTime: s
							})
						}
					};
					QApp.util.storage = d;
					var v = QApp.util,
						m = {};
					v.extend(s.prototype, {
						get: function(e) {
							var t = this._source[e];
							if (v.isArray(t)) {
								return t.slice(0)
							} else if (v.isObject(t)) {
								return v.extend(true, {}, t)
							}
							return t
						},
						set: function(e, t) {
							if (v.isArray(t)) {
								this._source[e] = t.slice(0)
							} else if (v.isObject(t)) {
								this._source[e] = v.extend(true, {}, t)
							} else {
								this._source[e] = t
							}
							this.trigger("change", e, t)
						},
						merge: function(e, t) {
							if (this._source[e] !== void 0) {
								t = v.extend(true, this._source[e], t)
							}
							this.set(e, t)
						},
						remove: function(e) {
							this._source[e] = void 0;
							this.trigger("change", e)
						},
						clear: function() {
							for (var e in this._source) {
								this.remove(e)
							}
						},
						onChange: function(e) {
							this.on("change", e)
						},
						destroy: function() {
							this.off();
							this._source = null
						}
					}, v.CustEvent);
					var g = QApp.dataSource = {
						init: function(e) {
							return o(e)
						},
						get: function(e, t) {
							if (m[e]) {
								return m[e].get(t)
							}
						},
						set: function(e, t, n) {
							o(e).set(t, n)
						},
						merge: function(e, t, n) {
							o(e).merge(t, n)
						},
						remove: function(e, t) {
							o(e).remove(t)
						},
						clear: function(e) {
							if (m[e]) {
								m[e].clear()
							}
						},
						onChange: function(e, t) {
							o(e).onChange(t)
						}
					};
					var y = [],
						b = QApp.hy ? QApp.hy.config().hybridId : "global";
					var w = QApp.dataSource.init(b),
						E = QApp.util.storage;
					w.on("change", function(e, t) {
						if (y.indexOf(e) > -1) {
							E(e, t)
						}
					});
					w.addLocalKeys = function(e) {
						y = y.concat(e);
						y.forEach(function(e) {
							w.set(e, E(e))
						})
					};
					w.refresh = function() {
						y.forEach(function(e) {
							w.set(e, E(e))
						})
					};
					if (QApp.hy) {
						QApp.hy.on("actived", function() {
							w.refresh()
						})
					}
					QApp.util.globalContext = w
				})()
			}(t.exports, t, e);
			e.____MODULES["3501632c175ff50fbe38cfb6a85d2296"] = t.exports
		})(this);
		(function(e) {
			var t = {
				id: "06db39915d027f68bc965950f4815a67",
				filename: "index.js",
				exports: {}
			};
			if (!e.____MODULES) {
				e.____MODULES = {}
			}
			var n = function(e, t, n) {
				(function() {
					var e = QApp.util,
						t = e.Deferred,
						n = 0,
						r = 30 * 1e3;
					var i = {};
					var s = {
						url: "",
						args: {},
						charset: "UTF-8",
						timeout: 30 * 1e3,
						bizType: false,
						callbackName: "callback",
						onComplete: null,
						onTimeout: null,
						onFail: null
					};
					var o = QApp.jsonp = e.jsonp = function(o, u) {
						o = e.isString(o) ? {
							url: o
						} : o;
						o = e.extend({}, s, o.bizType ? i[o.bizType] : {}, o);
						e.extend(o.args, u);
						var a = new t,
							f = o.timeout || r,
							l = e.parseURL(o.url),
							c, h;
						l.query = e.extend(l.query, o.args);
						l.query[o.callbackName] = l.query[o.callbackName] || "QApp_" + +(new Date) + n++;
						l.query.__rnd = +(new Date) + n++;
						window[l.query[o.callbackName]] = function(t) {
							if (h) {
								clearTimeout(h)
							}
							a.resolve(t);
							e.removeNode(c)
						};
						h = e.delay(function() {
							a.reject({
								type: "Timeout"
							});
							e.removeNode(c)
						}, f);
						c = document.createElement("script");
						c.async = true;
						c.charset = o.charset;
						c.src = l.toUrl();
						c.onerror = function() {
							if (h) {
								clearTimeout(h)
							}
							var t = {
								type: "Error"
							};
							a.reject(t);
							e.removeNode(c)
						};
						document.head.appendChild(c);
						return a
					};
					QApp.jsonp.setBizOptions = function(t, n) {
						if (e.isString(t)) {
							i[t] = n
						} else {
							e.extend(i, t)
						}
					};
					QApp.addPlugin("jsonp", s, function(t, n) {
						var r = [];
						t.jsonp = function(t) {
							var i = o(e.extend({}, n, t));
							r.push(i);
							i.all(function() {
								r.splice(r.indexOf(i), 1)
							});
							return i
						};
						t.on("destroy", function() {
							r.forEach(function(e) {
								e.reject()
							});
							r.length = 0;
							r = null
						})
					})
				})()
			}(t.exports, t, e);
			e.____MODULES["06db39915d027f68bc965950f4815a67"] = t.exports
		})(this);
		(function(e) {
			var t = {
				id: "2ab9cd74935222560bb8e728582f85a2",
				filename: "index.js",
				exports: {}
			};
			if (!e.____MODULES) {
				e.____MODULES = {}
			}
			var n = function(e, t, n) {
				(function(e, n, r) {
					function i(e, t) {
						this.wrapper = typeof e == "string" ? n.querySelector(e) : e;
						this.scroller = this.wrapper.children[0];
						this.scrollerStyle = this.scroller.style;
						this.options = {
							alwaysScrollY: true,
							resizeScrollbars: true,
							mouseWheelSpeed: 20,
							allwaysScrollY: true,
							snapThreshold: .334,
							startX: 0,
							startY: 0,
							scrollY: true,
							directionLockThreshold: 5,
							momentum: true,
							bounce: true,
							bounceTime: 600,
							bounceEasing: "",
							preventDefault: true,
							preventDefaultException: {
								tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
							},
							HWCompositing: true,
							useTransition: true,
							useTransform: true
						};
						for (var r in t) {
							this.options[r] = t[r]
						}
						this.translateZ = this.options.HWCompositing && a.hasPerspective ? " translateZ(0)" : "";
						this.options.useTransition = a.hasTransition && this.options.useTransition;
						this.options.useTransform = a.hasTransform && this.options.useTransform;
						this.options.eventPassthrough = this.options.eventPassthrough === true ? "vertical" : this.options.eventPassthrough;
						this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
						this.options.scrollY = this.options.eventPassthrough == "vertical" ? false : this.options.scrollY;
						this.options.scrollX = this.options.eventPassthrough == "horizontal" ? false : this.options.scrollX;
						this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
						this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
						this.options.bounceEasing = typeof this.options.bounceEasing == "string" ? a.ease[this.options.bounceEasing] || a.ease.circular : this.options.bounceEasing;
						this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
						if (this.options.tap === true) {
							this.options.tap = "tap"
						}
						if (this.options.shrinkScrollbars == "scale") {
							this.options.useTransition = false
						}
						this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
						if (this.options.probeType == 3) {
							this.options.useTransition = false
						}
						this.x = 0;
						this.y = 0;
						this.directionX = 0;
						this.directionY = 0;
						this._events = {};
						this._init();
						this.refresh();
						this.scrollTo(this.options.startX, this.options.startY);
						this.enable()
					}

					function s(e, t, r) {
						var i = n.createElement("div"),
							s = n.createElement("div");
						if (r === true) {
							i.style.cssText = "position:absolute;z-index:9999";
							s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"
						}
						s.className = "iScrollIndicator";
						if (e == "h") {
							if (r === true) {
								i.style.cssText += ";height:7px;left:2px;right:2px;bottom:0";
								s.style.height = "100%"
							}
							i.className = "iScrollHorizontalScrollbar"
						} else {
							if (r === true) {
								i.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px";
								s.style.width = "100%"
							}
							i.className = "iScrollVerticalScrollbar"
						}
						i.style.cssText += ";overflow:hidden";
						if (!t) {
							i.style.pointerEvents = "none"
						}
						i.appendChild(s);
						return i
					}

					function o(t, r) {
						this.wrapper = typeof r.el == "string" ? n.querySelector(r.el) : r.el;
						this.wrapperStyle = this.wrapper.style;
						this.indicator = this.wrapper.children[0];
						this.indicatorStyle = this.indicator.style;
						this.scroller = t;
						this.options = {
							listenX: true,
							listenY: true,
							interactive: false,
							resize: true,
							defaultScrollbars: false,
							shrink: false,
							fade: false,
							speedRatioX: 0,
							speedRatioY: 0
						};
						for (var i in r) {
							this.options[i] = r[i]
						}
						this.sizeRatioX = 1;
						this.sizeRatioY = 1;
						this.maxPosX = 0;
						this.maxPosY = 0;
						if (this.options.interactive) {
							if (!this.options.disableTouch) {
								a.addEvent(this.indicator, "touchstart", this);
								a.addEvent(e, "touchend", this)
							}
							if (!this.options.disablePointer) {
								a.addEvent(this.indicator, a.prefixPointerEvent("pointerdown"), this);
								a.addEvent(e, a.prefixPointerEvent("pointerup"), this)
							}
							if (!this.options.disableMouse) {
								a.addEvent(this.indicator, "mousedown", this);
								a.addEvent(e, "mouseup", this)
							}
						}
						if (this.options.fade) {
							this.wrapperStyle[a.style.transform] = this.scroller.translateZ;
							this.wrapperStyle[a.style.transitionDuration] = a.isBadAndroid ? "0.001s" : "0ms";
							this.wrapperStyle.opacity = "0"
						}
					}
					var u = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
						e.setTimeout(t, 1e3 / 60)
					};
					var a = function() {
						function t(e) {
							if (o === false) return false;
							if (o === "") return e;
							return o + e.charAt(0).toUpperCase() + e.substr(1)
						}
						var i = {};
						var s = n.createElement("div").style;
						var o = function() {
							var e = ["t", "webkitT", "MozT", "msT", "OT"],
								t, n = 0,
								r = e.length;
							for (; n < r; n++) {
								t = e[n] + "ransform";
								if (t in s) return e[n].substr(0, e[n].length - 1)
							}
							return false
						}();
						i.getTime = Date.now || function() {
							return (new Date).getTime()
						};
						i.extend = function(e, t) {
							for (var n in t) {
								e[n] = t[n]
							}
						};
						i.addEvent = function(e, t, n, r) {
							e.addEventListener(t, n, !!r)
						};
						i.removeEvent = function(e, t, n, r) {
							e.removeEventListener(t, n, !!r)
						};
						i.prefixPointerEvent = function(t) {
							return e.MSPointerEvent ? "MSPointer" + t.charAt(9).toUpperCase() + t.substr(10) : t
						};
						i.momentum = function(e, t, n, i, s, o) {
							var u = e - t,
								a = r.abs(u) / n,
								f, l;
							o = o === undefined ? 6e-4 : o;
							f = e + a * a / (2 * o) * (u < 0 ? -1 : 1);
							l = a / o;
							if (f < i) {
								f = s ? i - s / 2.5 * (a / 8) : i;
								u = r.abs(f - e);
								l = u / a
							} else if (f > 0) {
								f = s ? s / 2.5 * (a / 8) : 0;
								u = r.abs(e) + f;
								l = u / a
							}
							return {
								destination: r.round(f),
								duration: l
							}
						};
						var u = t("transform");
						i.extend(i, {
							hasTransform: u !== false,
							hasPerspective: t("perspective") in s,
							hasTouch: "ontouchstart" in e,
							hasPointer: e.PointerEvent || e.MSPointerEvent,
							hasTransition: t("transition") in s
						});
						i.isBadAndroid = /Android /.test(e.navigator.appVersion) && !/Chrome\/\d/.test(e.navigator.appVersion);
						i.extend(i.style = {}, {
							transform: u,
							transitionTimingFunction: t("transitionTimingFunction"),
							transitionDuration: t("transitionDuration"),
							transitionDelay: t("transitionDelay"),
							transformOrigin: t("transformOrigin")
						});
						i.hasClass = function(e, t) {
							var n = new RegExp("(^|\\s)" + t + "(\\s|$)");
							return n.test(e.className)
						};
						i.addClass = function(e, t) {
							if (i.hasClass(e, t)) {
								return
							}
							var n = e.className.split(" ");
							n.push(t);
							e.className = n.join(" ")
						};
						i.removeClass = function(e, t) {
							if (!i.hasClass(e, t)) {
								return
							}
							var n = new RegExp("(^|\\s)" + t + "(\\s|$)", "g");
							e.className = e.className.replace(n, " ")
						};
						i.offset = function(e) {
							var t = -e.offsetLeft,
								n = -e.offsetTop;
							while (e = e.offsetParent) {
								t -= e.offsetLeft;
								n -= e.offsetTop
							}
							return {
								left: t,
								top: n
							}
						};
						i.preventDefaultException = function(e, t) {
							for (var n in t) {
								if (t[n].test(e[n])) {
									return true
								}
							}
							return false
						};
						i.extend(i.eventType = {}, {
							touchstart: 1,
							touchmove: 1,
							touchend: 1,
							mousedown: 2,
							mousemove: 2,
							mouseup: 2,
							pointerdown: 3,
							pointermove: 3,
							pointerup: 3,
							MSPointerDown: 3,
							MSPointerMove: 3,
							MSPointerUp: 3
						});
						i.extend(i.ease = {}, {
							quadratic: {
								style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
								fn: function(e) {
									return e * (2 - e)
								}
							},
							circular: {
								style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
								fn: function(e) {
									return r.sqrt(1 - --e * e)
								}
							},
							back: {
								style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
								fn: function(e) {
									var t = 4;
									return (e = e - 1) * e * ((t + 1) * e + t) + 1
								}
							},
							bounce: {
								style: "",
								fn: function(e) {
									if ((e /= 1) < 1 / 2.75) {
										return 7.5625 * e * e
									} else if (e < 2 / 2.75) {
										return 7.5625 * (e -= 1.5 / 2.75) * e + .75
									} else if (e < 2.5 / 2.75) {
										return 7.5625 * (e -= 2.25 / 2.75) * e + .9375
									} else {
										return 7.5625 * (e -= 2.625 / 2.75) * e + .984375
									}
								}
							},
							elastic: {
								style: "",
								fn: function(e) {
									var t = .22,
										n = .4;
									if (e === 0) {
										return 0
									}
									if (e == 1) {
										return 1
									}
									return n * r.pow(2, -10 * e) * r.sin((e - t / 4) * 2 * r.PI / t) + 1
								}
							}
						});
						i.tap = function(e, t) {
							var r = n.createEvent("Event");
							r.initEvent(t, true, true);
							r.pageX = e.pageX;
							r.pageY = e.pageY;
							e.target.dispatchEvent(r)
						};
						i.click = function(e) {
							var t = e.target,
								r;
							if (!/(SELECT|INPUT|TEXTAREA)/i.test(t.tagName)) {
								r = n.createEvent("MouseEvents");
								r.initMouseEvent("click", true, true, e.view, 1, t.screenX, t.screenY, t.clientX, t.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
								r._constructed = true;
								t.dispatchEvent(r)
							}
						};
						i.sniff = function() {
							var e = {
								isAndroid: false,
								osVersionN: 0
							};
							if (QApp && QApp.sniff) {
								var t = QApp.sniff;
								e.isAndroid = t.android;
								e.osVersionN = t.osVersionN
							} else {}
							return e
						}();
						return i
					}();
					i.prototype = {
						version: "5.1.3",
						_init: function() {
							this._initEvents();
							if (this.options.scrollbars || this.options.indicators) {
								this._initIndicators()
							}
							if (this.options.mouseWheel) {
								this._initWheel()
							}
							if (this.options.snap) {
								this._initSnap()
							}
							if (this.options.keyBindings) {
								this._initKeys()
							}
						},
						destroy: function() {
							this._initEvents(true);
							this._execEvent("destroy")
						},
						_transitionEnd: function(e) {
							if (e.target != this.scroller || !this.isInTransition) {
								return
							}
							this._transitionTime();
							if (!this.resetPosition(this.options.bounceTime)) {
								this.isInTransition = false;
								this._execEvent("scrollEnd")
							}
						},
						_start: function(e) {
							if (a.eventType[e.type] != 1) {
								if (e.button !== 0) {
									return
								}
							}
							if (!this.enabled || this.initiated && a.eventType[e.type] !== this.initiated) {
								return
							}
							if (this.options.preventDefault && !a.isBadAndroid && !a.preventDefaultException(e.target, this.options.preventDefaultException)) {
								e.preventDefault()
							}
							var t = e.touches ? e.touches[0] : e,
								n;
							this.initiated = a.eventType[e.type];
							this.moved = false;
							this.distX = 0;
							this.distY = 0;
							this.directionX = 0;
							this.directionY = 0;
							this.directionLocked = 0;
							this._transitionTime();
							this.startTime = a.getTime();
							if (this.options.useTransition && this.isInTransition) {
								this.isInTransition = false;
								n = this.getComputedPosition();
								this._translate(r.round(n.x), r.round(n.y));
								this._execEvent("scrollEnd")
							} else if (!this.options.useTransition && this.isAnimating) {
								this.isAnimating = false;
								this._execEvent("scrollEnd")
							}
							this.startX = this.x;
							this.startY = this.y;
							this.absStartX = this.x;
							this.absStartY = this.y;
							this.pointX = t.pageX;
							this.pointY = t.pageY;
							this._execEvent("beforeScrollStart")
						},
						_move: function(e) {
							if (!this.enabled || a.eventType[e.type] !== this.initiated) {
								return
							}
							if (this.options.preventDefault) {
								e.preventDefault()
							} else if (a.sniff.isAndroid && a.sniff.osVersionN < 5) {
								e.preventDefault()
							}
							var t = e.touches ? e.touches[0] : e,
								n = t.pageX - this.pointX,
								i = t.pageY - this.pointY,
								s = a.getTime(),
								o, u, f, l;
							this.pointX = t.pageX;
							this.pointY = t.pageY;
							this.distX += n;
							this.distY += i;
							f = r.abs(this.distX);
							l = r.abs(this.distY);
							if (s - this.endTime > 300 && f < 10 && l < 10) {
								return
							}
							if (!this.directionLocked && !this.options.freeScroll) {
								if (f > l + this.options.directionLockThreshold) {
									this.directionLocked = "h"
								} else if (l >= f + this.options.directionLockThreshold) {
									this.directionLocked = "v"
								} else {
									this.directionLocked = "n"
								}
							}
							if (this.directionLocked == "h") {
								if (this.options.eventPassthrough == "vertical") {
									e.preventDefault()
								} else if (this.options.eventPassthrough == "horizontal") {
									this.initiated = false;
									return
								}
								i = 0
							} else if (this.directionLocked == "v") {
								if (this.options.eventPassthrough == "horizontal") {
									e.preventDefault()
								} else if (this.options.eventPassthrough == "vertical") {
									this.initiated = false;
									return
								}
								n = 0
							}
							n = this.hasHorizontalScroll ? n : 0;
							i = this.hasVerticalScroll ? i : 0;
							o = this.x + n;
							u = this.y + i;
							if (o > 0 || o < this.maxScrollX) {
								o = this.options.bounce ? this.x + n / 3 : o > 0 ? 0 : this.maxScrollX
							}
							if (u > 0 || u < this.maxScrollY) {
								u = this.options.bounce ? this.y + i / 3 : u > 0 ? 0 : this.maxScrollY
							}
							this.directionX = n > 0 ? -1 : n < 0 ? 1 : 0;
							this.directionY = i > 0 ? -1 : i < 0 ? 1 : 0;
							if (!this.moved) {
								this._execEvent("scrollStart")
							}
							this.moved = true;
							this._translate(o, u);
							if (s - this.startTime > 300) {
								this.startTime = s;
								this.startX = this.x;
								this.startY = this.y;
								if (this.options.probeType == 1) {
									this._execEvent("scroll")
								}
							}
							if (this.options.probeType > 1) {
								this._execEvent("scroll")
							}
						},
						_end: function(e) {
							if (!this.enabled || a.eventType[e.type] !== this.initiated) {
								return
							}
							if (this.options.preventDefault && !a.preventDefaultException(e.target, this.options.preventDefaultException)) {
								e.preventDefault()
							}
							var t = e.changedTouches ? e.changedTouches[0] : e,
								n, i, s = a.getTime() - this.startTime,
								o = r.round(this.x),
								u = r.round(this.y),
								f = r.abs(o - this.startX),
								l = r.abs(u - this.startY),
								c = 0,
								h = "";
							this.isInTransition = 0;
							this.initiated = 0;
							this.endTime = a.getTime();
							if (this.resetPosition(this.options.bounceTime)) {
								return
							}
							this.scrollTo(o, u);
							if (!this.moved) {
								if (this.options.tap) {
									a.tap(e, this.options.tap)
								}
								if (this.options.click) {
									a.click(e)
								}
								this._execEvent("scrollCancel");
								return
							}
							if (this._events.flick && s < 200 && f < 100 && l < 100) {
								this._execEvent("flick");
								return
							}
							if (this.options.momentum && s < 300) {
								n = this.hasHorizontalScroll ? a.momentum(this.x, this.startX, s, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
									destination: o,
									duration: 0
								};
								i = this.hasVerticalScroll ? a.momentum(this.y, this.startY, s, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
									destination: u,
									duration: 0
								};
								o = n.destination;
								u = i.destination;
								c = r.max(n.duration, i.duration);
								this.isInTransition = 1
							}
							if (this.options.snap) {
								var p = this._nearestSnap(o, u);
								this.currentPage = p;
								c = this.options.snapSpeed || r.max(r.max(r.min(r.abs(o - p.x), 1e3), r.min(r.abs(u - p.y), 1e3)), 300);
								o = p.x;
								u = p.y;
								this.directionX = 0;
								this.directionY = 0;
								h = this.options.bounceEasing
							}
							if (o != this.x || u != this.y) {
								if (o > 0 || o < this.maxScrollX || u > 0 || u < this.maxScrollY) {
									h = a.ease.quadratic
								}
								this.scrollTo(o, u, c, h);
								return
							}
							this._execEvent("scrollEnd")
						},
						_resize: function() {
							var e = this;
							clearTimeout(this.resizeTimeout);
							this.resizeTimeout = setTimeout(function() {
								e.refresh()
							}, this.options.resizePolling)
						},
						resetPosition: function(e) {
							var t = this.x,
								n = this.y;
							e = e || 0;
							if (!this.hasHorizontalScroll || this.x > 0) {
								t = 0
							} else if (this.x < this.maxScrollX) {
								t = this.maxScrollX
							}
							if (!this.hasVerticalScroll || this.y > 0) {
								n = 0
							} else if (this.y < this.maxScrollY) {
								n = this.maxScrollY
							}
							if (t == this.x && n == this.y) {
								return false
							}
							this.scrollTo(t, n, e, this.options.bounceEasing);
							return true
						},
						disable: function() {
							this.enabled = false
						},
						enable: function() {
							this.enabled = true
						},
						refresh: function() {
							var e = this.wrapper.offsetHeight;
							this.wrapperWidth = this.wrapper.clientWidth;
							this.wrapperHeight = this.wrapper.clientHeight;
							this.scrollerWidth = this.scroller.offsetWidth;
							this.scrollerHeight = this.scroller.offsetHeight;
							if (this.options.alwaysScrollY) {
								if (this.scrollerHeight < this.wrapperHeight) {
									this.scrollerHeight = this.wrapperHeight + 1
								}
							}
							if (this.options.allwaysScrollY) {
								if (this.scrollerHeight < this.wrapperHeight) {
									this.scrollerHeight = this.wrapperHeight + 1
								}
							}
							this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
							this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
							this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
							this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
							if (!this.hasHorizontalScroll) {
								this.maxScrollX = 0;
								this.scrollerWidth = this.wrapperWidth
							}
							if (!this.hasVerticalScroll) {
								this.maxScrollY = 0;
								this.scrollerHeight = this.wrapperHeight
							}
							this.endTime = 0;
							this.directionX = 0;
							this.directionY = 0;
							this.wrapperOffset = a.offset(this.wrapper);
							this._execEvent("refresh");
							this.resetPosition()
						},
						on: function(e, t) {
							if (!this._events[e]) {
								this._events[e] = []
							}
							this._events[e].push(t)
						},
						off: function(e, t) {
							if (!this._events[e]) {
								return
							}
							var n = this._events[e].indexOf(t);
							if (n > -1) {
								this._events[e].splice(n, 1)
							}
						},
						_execEvent: function(e) {
							if (!this._events[e]) {
								return
							}
							var t = 0,
								n = this._events[e].length;
							if (!n) {
								return
							}
							for (; t < n; t++) {
								this._events[e][t].apply(this, [].slice.call(arguments, 1))
							}
						},
						scrollBy: function(e, t, n, r) {
							e = this.x + e;
							t = this.y + t;
							n = n || 0;
							this.scrollTo(e, t, n, r)
						},
						scrollTo: function(e, t, n, r) {
							r = r || a.ease.circular;
							this.isInTransition = this.options.useTransition && n > 0;
							if (!n || this.options.useTransition && r.style) {
								this._transitionTimingFunction(r.style);
								this._transitionTime(n);
								this._translate(e, t)
							} else {
								this._animate(e, t, n, r.fn)
							}
						},
						scrollToElement: function(e, t, n, i, s) {
							e = e.nodeType ? e : this.scroller.querySelector(e);
							if (!e) {
								return
							}
							var o = a.offset(e);
							o.left -= this.wrapperOffset.left;
							o.top -= this.wrapperOffset.top;
							if (n === true) {
								n = r.round(e.offsetWidth / 2 - this.wrapper.offsetWidth / 2)
							}
							if (i === true) {
								i = r.round(e.offsetHeight / 2 - this.wrapper.offsetHeight / 2)
							}
							o.left -= n || 0;
							o.top -= i || 0;
							o.left = o.left > 0 ? 0 : o.left < this.maxScrollX ? this.maxScrollX : o.left;
							o.top = o.top > 0 ? 0 : o.top < this.maxScrollY ? this.maxScrollY : o.top;
							t = t === undefined || t === null || t === "auto" ? r.max(r.abs(this.x - o.left), r.abs(this.y - o.top)) : t;
							this.scrollTo(o.left, o.top, t, s)
						},
						_transitionTime: function(e) {
							e = e || 0;
							this.scrollerStyle[a.style.transitionDuration] = e + "ms";
							if (!e && a.isBadAndroid) {
								this.scrollerStyle[a.style.transitionDuration] = "0.001s"
							}
							if (this.indicators) {
								for (var t = this.indicators.length; t--;) {
									this.indicators[t].transitionTime(e)
								}
							}
						},
						_transitionTimingFunction: function(e) {
							this.scrollerStyle[a.style.transitionTimingFunction] = e;
							if (this.indicators) {
								for (var t = this.indicators.length; t--;) {
									this.indicators[t].transitionTimingFunction(e)
								}
							}
						},
						_translate: function(e, t) {
							if (this.options.useTransform) {
								this.scrollerStyle[a.style.transform] = "translate(" + e + "px," + t + "px)" + this.translateZ
							} else {
								e = r.round(e);
								t = r.round(t);
								this.scrollerStyle.left = e + "px";
								this.scrollerStyle.top = t + "px"
							}
							this.x = e;
							this.y = t;
							if (this.indicators) {
								for (var n = this.indicators.length; n--;) {
									this.indicators[n].updatePosition()
								}
							}
						},
						_initEvents: function(t) {
							var n = t ? a.removeEvent : a.addEvent,
								r = this.options.bindToWrapper ? this.wrapper : e;
							n(e, "orientationchange", this);
							n(e, "resize", this);
							if (this.options.click) {
								n(this.wrapper, "click", this, true)
							}
							if (!this.options.disableMouse) {
								n(this.wrapper, "mousedown", this);
								n(r, "mousemove", this);
								n(r, "mousecancel", this);
								n(r, "mouseup", this)
							}
							if (a.hasPointer && !this.options.disablePointer) {
								n(this.wrapper, a.prefixPointerEvent("pointerdown"), this);
								n(r, a.prefixPointerEvent("pointermove"), this);
								n(r, a.prefixPointerEvent("pointercancel"), this);
								n(r, a.prefixPointerEvent("pointerup"), this)
							}
							if (a.hasTouch && !this.options.disableTouch) {
								n(this.wrapper, "touchstart", this);
								n(r, "touchmove", this);
								n(r, "touchcancel", this);
								n(r, "touchend", this)
							}
							n(this.scroller, "transitionend", this);
							n(this.scroller, "webkitTransitionEnd", this);
							n(this.scroller, "oTransitionEnd", this);
							n(this.scroller, "MSTransitionEnd", this)
						},
						getComputedPosition: function() {
							var t = e.getComputedStyle(this.scroller, null),
								n, r;
							if (this.options.useTransform) {
								t = t[a.style.transform].split(")")[0].split(", ");
								n = +(t[12] || t[4]);
								r = +(t[13] || t[5])
							} else {
								n = +t.left.replace(/[^-\d.]/g, "");
								r = +t.top.replace(/[^-\d.]/g, "")
							}
							return {
								x: n,
								y: r
							}
						},
						_initIndicators: function() {
							function e(e) {
								for (var t = u.indicators.length; t--;) {
									e.call(u.indicators[t])
								}
							}
							var t = this.options.interactiveScrollbars,
								n = typeof this.options.scrollbars != "string",
								r = [],
								i;
							var u = this;
							this.indicators = [];
							if (this.options.scrollbars) {
								if (this.options.scrollY) {
									i = {
										el: s("v", t, this.options.scrollbars),
										interactive: t,
										defaultScrollbars: true,
										customStyle: n,
										resize: this.options.resizeScrollbars,
										shrink: this.options.shrinkScrollbars,
										fade: this.options.fadeScrollbars,
										listenX: false
									};
									this.wrapper.appendChild(i.el);
									r.push(i)
								}
								if (this.options.scrollX) {
									i = {
										el: s("h", t, this.options.scrollbars),
										interactive: t,
										defaultScrollbars: true,
										customStyle: n,
										resize: this.options.resizeScrollbars,
										shrink: this.options.shrinkScrollbars,
										fade: this.options.fadeScrollbars,
										listenY: false
									};
									this.wrapper.appendChild(i.el);
									r.push(i)
								}
							}
							if (this.options.indicators) {
								r = r.concat(this.options.indicators)
							}
							for (var a = r.length; a--;) {
								this.indicators.push(new o(this, r[a]))
							}
							if (this.options.fadeScrollbars) {
								this.on("scrollEnd", function() {
									e(function() {
										this.fade()
									})
								});
								this.on("scrollCancel", function() {
									e(function() {
										this.fade()
									})
								});
								this.on("scrollStart", function() {
									e(function() {
										this.fade(1)
									})
								});
								this.on("beforeScrollStart", function() {
									e(function() {
										this.fade(1, true)
									})
								})
							}
							this.on("refresh", function() {
								e(function() {
									this.refresh()
								})
							});
							this.on("destroy", function() {
								e(function() {
									this.destroy()
								});
								delete this.indicators
							})
						},
						_initWheel: function() {
							a.addEvent(this.wrapper, "wheel", this);
							a.addEvent(this.wrapper, "mousewheel", this);
							a.addEvent(this.wrapper, "DOMMouseScroll", this);
							this.on("destroy", function() {
								a.removeEvent(this.wrapper, "wheel", this);
								a.removeEvent(this.wrapper, "mousewheel", this);
								a.removeEvent(this.wrapper, "DOMMouseScroll", this)
							})
						},
						_wheel: function(e) {
							if (!this.enabled) {
								return
							}
							e.preventDefault();
							e.stopPropagation();
							var t, n, i, s, o = this;
							if (this.wheelTimeout === undefined) {
								o._execEvent("scrollStart")
							}
							clearTimeout(this.wheelTimeout);
							this.wheelTimeout = setTimeout(function() {
								o._execEvent("scrollEnd");
								o.wheelTimeout = undefined
							}, 400);
							if ("deltaX" in e) {
								if (e.deltaMode === 1) {
									t = -e.deltaX * this.options.mouseWheelSpeed;
									n = -e.deltaY * this.options.mouseWheelSpeed
								} else {
									t = -e.deltaX;
									n = -e.deltaY
								}
							} else if ("wheelDeltaX" in e) {
								t = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
								n = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed
							} else if ("wheelDelta" in e) {
								t = n = e.wheelDelta / 120 * this.options.mouseWheelSpeed
							} else if ("detail" in e) {
								t = n = -e.detail / 3 * this.options.mouseWheelSpeed
							} else {
								return
							}
							t *= this.options.invertWheelDirection;
							n *= this.options.invertWheelDirection;
							if (!this.hasVerticalScroll) {
								t = n;
								n = 0
							}
							if (this.options.snap) {
								i = this.currentPage.pageX;
								s = this.currentPage.pageY;
								if (t > 0) {
									i--
								} else if (t < 0) {
									i++
								}
								if (n > 0) {
									s--
								} else if (n < 0) {
									s++
								}
								this.goToPage(i, s);
								return
							}
							i = this.x + r.round(this.hasHorizontalScroll ? t : 0);
							s = this.y + r.round(this.hasVerticalScroll ? n : 0);
							if (i > 0) {
								i = 0
							} else if (i < this.maxScrollX) {
								i = this.maxScrollX
							}
							if (s > 0) {
								s = 0
							} else if (s < this.maxScrollY) {
								s = this.maxScrollY
							}
							this.scrollTo(i, s, 0);
							if (this.options.probeType > 1) {
								this._execEvent("scroll")
							}
						},
						_initSnap: function() {
							this.currentPage = {};
							if (typeof this.options.snap == "string") {
								this.options.snap = this.scroller.querySelectorAll(this.options.snap)
							}
							this.on("refresh", function() {
								var e = 0,
									t, n = 0,
									i, s, o, u = 0,
									a, f = this.options.snapStepX || this.wrapperWidth,
									l = this.options.snapStepY || this.wrapperHeight,
									c;
								this.pages = [];
								if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
									return
								}
								if (this.options.snap === true) {
									s = r.round(f / 2);
									o = r.round(l / 2);
									while (u > -this.scrollerWidth) {
										this.pages[e] = [];
										t = 0;
										a = 0;
										while (a > -this.scrollerHeight) {
											this.pages[e][t] = {
												x: r.max(u, this.maxScrollX),
												y: r.max(a, this.maxScrollY),
												width: f,
												height: l,
												cx: u - s,
												cy: a - o
											};
											a -= l;
											t++
										}
										u -= f;
										e++
									}
								} else {
									c = this.options.snap;
									t = c.length;
									i = -1;
									for (; e < t; e++) {
										if (e === 0 || c[e].offsetLeft <= c[e - 1].offsetLeft) {
											n = 0;
											i++
										}
										if (!this.pages[n]) {
											this.pages[n] = []
										}
										u = r.max(-c[e].offsetLeft, this.maxScrollX);
										a = r.max(-c[e].offsetTop, this.maxScrollY);
										s = u - r.round(c[e].offsetWidth / 2);
										o = a - r.round(c[e].offsetHeight / 2);
										this.pages[n][i] = {
											x: u,
											y: a,
											width: c[e].offsetWidth,
											height: c[e].offsetHeight,
											cx: s,
											cy: o
										};
										if (u > this.maxScrollX) {
											n++
										}
									}
								}
								this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
								if (this.options.snapThreshold % 1 === 0) {
									this.snapThresholdX = this.options.snapThreshold;
									this.snapThresholdY = this.options.snapThreshold
								} else {
									this.snapThresholdX = r.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
									this.snapThresholdY = r.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold)
								}
							});
							this.on("flick", function() {
								var e = this.options.snapSpeed || r.max(r.max(r.min(r.abs(this.x - this.startX), 1e3), r.min(r.abs(this.y - this.startY), 1e3)), 300);
								this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, e)
							})
						},
						_nearestSnap: function(e, t) {
							if (!this.pages.length) {
								return {
									x: 0,
									y: 0,
									pageX: 0,
									pageY: 0
								}
							}
							var n = 0,
								i = this.pages.length,
								s = 0;
							if (r.abs(e - this.absStartX) < this.snapThresholdX && r.abs(t - this.absStartY) < this.snapThresholdY) {
								return this.currentPage
							}
							if (e > 0) {
								e = 0
							} else if (e < this.maxScrollX) {
								e = this.maxScrollX
							}
							if (t > 0) {
								t = 0
							} else if (t < this.maxScrollY) {
								t = this.maxScrollY
							}
							for (; n < i; n++) {
								if (e >= this.pages[n][0].cx) {
									e = this.pages[n][0].x;
									break
								}
							}
							i = this.pages[n].length;
							for (; s < i; s++) {
								if (t >= this.pages[0][s].cy) {
									t = this.pages[0][s].y;
									break
								}
							}
							if (n == this.currentPage.pageX) {
								n += this.directionX;
								if (n < 0) {
									n = 0
								} else if (n >= this.pages.length) {
									n = this.pages.length - 1
								}
								e = this.pages[n][0].x
							}
							if (s == this.currentPage.pageY) {
								s += this.directionY;
								if (s < 0) {
									s = 0
								} else if (s >= this.pages[0].length) {
									s = this.pages[0].length - 1
								}
								t = this.pages[0][s].y
							}
							return {
								x: e,
								y: t,
								pageX: n,
								pageY: s
							}
						},
						goToPage: function(e, t, n, i) {
							i = i || this.options.bounceEasing;
							if (e >= this.pages.length) {
								e = this.pages.length - 1
							} else if (e < 0) {
								e = 0
							}
							if (t >= this.pages[e].length) {
								t = this.pages[e].length - 1
							} else if (t < 0) {
								t = 0
							}
							var s = this.pages[e][t].x,
								o = this.pages[e][t].y;
							n = n === undefined ? this.options.snapSpeed || r.max(r.max(r.min(r.abs(s - this.x), 1e3), r.min(r.abs(o - this.y), 1e3)), 300) : n;
							this.currentPage = {
								x: s,
								y: o,
								pageX: e,
								pageY: t
							};
							this.scrollTo(s, o, n, i)
						},
						next: function(e, t) {
							var n = this.currentPage.pageX,
								r = this.currentPage.pageY;
							n++;
							if (n >= this.pages.length && this.hasVerticalScroll) {
								n = 0;
								r++
							}
							this.goToPage(n, r, e, t)
						},
						prev: function(e, t) {
							var n = this.currentPage.pageX,
								r = this.currentPage.pageY;
							n--;
							if (n < 0 && this.hasVerticalScroll) {
								n = 0;
								r--
							}
							this.goToPage(n, r, e, t)
						},
						_initKeys: function(t) {
							var n = {
								pageUp: 33,
								pageDown: 34,
								end: 35,
								home: 36,
								left: 37,
								up: 38,
								right: 39,
								down: 40
							};
							var r;
							if (typeof this.options.keyBindings == "object") {
								for (r in this.options.keyBindings) {
									if (typeof this.options.keyBindings[r] == "string") {
										this.options.keyBindings[r] = this.options.keyBindings[r].toUpperCase().charCodeAt(0)
									}
								}
							} else {
								this.options.keyBindings = {}
							}
							for (r in n) {
								this.options.keyBindings[r] = this.options.keyBindings[r] || n[r]
							}
							a.addEvent(e, "keydown", this);
							this.on("destroy", function() {
								a.removeEvent(e, "keydown", this)
							})
						},
						_key: function(e) {
							if (!this.enabled) {
								return
							}
							var t = this.options.snap,
								n = t ? this.currentPage.pageX : this.x,
								i = t ? this.currentPage.pageY : this.y,
								s = a.getTime(),
								o = this.keyTime || 0,
								u = .25,
								f;
							if (this.options.useTransition && this.isInTransition) {
								f = this.getComputedPosition();
								this._translate(r.round(f.x), r.round(f.y));
								this.isInTransition = false
							}
							this.keyAcceleration = s - o < 200 ? r.min(this.keyAcceleration + u, 50) : 0;
							switch (e.keyCode) {
								case this.options.keyBindings.pageUp:
									if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
										n += t ? 1 : this.wrapperWidth
									} else {
										i += t ? 1 : this.wrapperHeight
									}
									break;
								case this.options.keyBindings.pageDown:
									if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
										n -= t ? 1 : this.wrapperWidth
									} else {
										i -= t ? 1 : this.wrapperHeight
									}
									break;
								case this.options.keyBindings.end:
									n = t ? this.pages.length - 1 : this.maxScrollX;
									i = t ? this.pages[0].length - 1 : this.maxScrollY;
									break;
								case this.options.keyBindings.home:
									n = 0;
									i = 0;
									break;
								case this.options.keyBindings.left:
									n += t ? -1 : 5 + this.keyAcceleration >> 0;
									break;
								case this.options.keyBindings.up:
									i += t ? 1 : 5 + this.keyAcceleration >> 0;
									break;
								case this.options.keyBindings.right:
									n -= t ? -1 : 5 + this.keyAcceleration >> 0;
									break;
								case this.options.keyBindings.down:
									i -= t ? 1 : 5 + this.keyAcceleration >> 0;
									break;
								default:
									return
							}
							if (t) {
								this.goToPage(n, i);
								return
							}
							if (n > 0) {
								n = 0;
								this.keyAcceleration = 0
							} else if (n < this.maxScrollX) {
								n = this.maxScrollX;
								this.keyAcceleration = 0
							}
							if (i > 0) {
								i = 0;
								this.keyAcceleration = 0
							} else if (i < this.maxScrollY) {
								i = this.maxScrollY;
								this.keyAcceleration = 0
							}
							this.scrollTo(n, i, 0);
							this.keyTime = s
						},
						_animate: function(e, t, n, r) {
							function i() {
								var h = a.getTime(),
									p, d, v;
								if (h >= c) {
									s.isAnimating = false;
									s._translate(e, t);
									if (!s.resetPosition(s.options.bounceTime)) {
										s._execEvent("scrollEnd")
									}
									return
								}
								h = (h - l) / n;
								v = r(h);
								p = (e - o) * v + o;
								d = (t - f) * v + f;
								s._translate(p, d);
								if (s.isAnimating) {
									u(i)
								}
								if (s.options.probeType == 3) {
									s._execEvent("scroll")
								}
							}
							var s = this,
								o = this.x,
								f = this.y,
								l = a.getTime(),
								c = l + n;
							this.isAnimating = true;
							i()
						},
						handleEvent: function(e) {
							switch (e.type) {
								case "touchstart":
								case "pointerdown":
								case "MSPointerDown":
								case "mousedown":
									this._start(e);
									break;
								case "touchmove":
								case "pointermove":
								case "MSPointerMove":
								case "mousemove":
									this._move(e);
									break;
								case "touchend":
								case "pointerup":
								case "MSPointerUp":
								case "mouseup":
								case "touchcancel":
								case "pointercancel":
								case "MSPointerCancel":
								case "mousecancel":
									this._end(e);
									break;
								case "orientationchange":
								case "resize":
									this._resize();
									break;
								case "transitionend":
								case "webkitTransitionEnd":
								case "oTransitionEnd":
								case "MSTransitionEnd":
									this._transitionEnd(e);
									break;
								case "wheel":
								case "DOMMouseScroll":
								case "mousewheel":
									this._wheel(e);
									break;
								case "keydown":
									this._key(e);
									break;
								case "click":
									if (!e._constructed) {
										e.preventDefault();
										e.stopPropagation()
									}
									break
							}
						}
					};
					o.prototype = {
						handleEvent: function(e) {
							switch (e.type) {
								case "touchstart":
								case "pointerdown":
								case "MSPointerDown":
								case "mousedown":
									this._start(e);
									break;
								case "touchmove":
								case "pointermove":
								case "MSPointerMove":
								case "mousemove":
									this._move(e);
									break;
								case "touchend":
								case "pointerup":
								case "MSPointerUp":
								case "mouseup":
								case "touchcancel":
								case "pointercancel":
								case "MSPointerCancel":
								case "mousecancel":
									this._end(e);
									break
							}
						},
						destroy: function() {
							if (this.options.interactive) {
								a.removeEvent(this.indicator, "touchstart", this);
								a.removeEvent(this.indicator, a.prefixPointerEvent("pointerdown"), this);
								a.removeEvent(this.indicator, "mousedown", this);
								a.removeEvent(e, "touchmove", this);
								a.removeEvent(e, a.prefixPointerEvent("pointermove"), this);
								a.removeEvent(e, "mousemove", this);
								a.removeEvent(e, "touchend", this);
								a.removeEvent(e, a.prefixPointerEvent("pointerup"), this);
								a.removeEvent(e, "mouseup", this)
							}
							if (this.options.defaultScrollbars) {
								this.wrapper.parentNode.removeChild(this.wrapper)
							}
						},
						_start: function(t) {
							var n = t.touches ? t.touches[0] : t;
							t.preventDefault();
							t.stopPropagation();
							this.transitionTime();
							this.initiated = true;
							this.moved = false;
							this.lastPointX = n.pageX;
							this.lastPointY = n.pageY;
							this.startTime = a.getTime();
							if (!this.options.disableTouch) {
								a.addEvent(e, "touchmove", this)
							}
							if (!this.options.disablePointer) {
								a.addEvent(e, a.prefixPointerEvent("pointermove"), this)
							}
							if (!this.options.disableMouse) {
								a.addEvent(e, "mousemove", this)
							}
							this.scroller._execEvent("beforeScrollStart")
						},
						_move: function(e) {
							var t = e.touches ? e.touches[0] : e,
								n, r, i, s, o = a.getTime();
							if (!this.moved) {
								this.scroller._execEvent("scrollStart")
							}
							this.moved = true;
							n = t.pageX - this.lastPointX;
							this.lastPointX = t.pageX;
							r = t.pageY - this.lastPointY;
							this.lastPointY = t.pageY;
							i = this.x + n;
							s = this.y + r;
							this._pos(i, s);
							if (this.scroller.options.probeType == 1 && o - this.startTime > 300) {
								this.startTime = o;
								this.scroller._execEvent("scroll")
							} else if (this.scroller.options.probeType > 1) {
								this.scroller._execEvent("scroll")
							}
							e.preventDefault();
							e.stopPropagation()
						},
						_end: function(t) {
							if (!this.initiated) {
								return
							}
							this.initiated = false;
							t.preventDefault();
							t.stopPropagation();
							a.removeEvent(e, "touchmove", this);
							a.removeEvent(e, a.prefixPointerEvent("pointermove"), this);
							a.removeEvent(e, "mousemove", this);
							if (this.scroller.options.snap) {
								var n = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
								var i = this.options.snapSpeed || r.max(r.max(r.min(r.abs(this.scroller.x - n.x), 1e3), r.min(r.abs(this.scroller.y - n.y), 1e3)), 300);
								if (this.scroller.x != n.x || this.scroller.y != n.y) {
									this.scroller.directionX = 0;
									this.scroller.directionY = 0;
									this.scroller.currentPage = n;
									this.scroller.scrollTo(n.x, n.y, i, this.scroller.options.bounceEasing)
								}
							}
							if (this.moved) {
								this.scroller._execEvent("scrollEnd")
							}
						},
						transitionTime: function(e) {
							e = e || 0;
							this.indicatorStyle[a.style.transitionDuration] = e + "ms";
							if (!e && a.isBadAndroid) {
								this.indicatorStyle[a.style.transitionDuration] = "0.001s"
							}
						},
						transitionTimingFunction: function(e) {
							this.indicatorStyle[a.style.transitionTimingFunction] = e
						},
						refresh: function() {
							this.transitionTime();
							if (this.options.listenX && !this.options.listenY) {
								this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none"
							} else if (this.options.listenY && !this.options.listenX) {
								this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none"
							} else {
								this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none"
							}
							if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
								a.addClass(this.wrapper, "iScrollBothScrollbars");
								a.removeClass(this.wrapper, "iScrollLoneScrollbar");
								if (this.options.defaultScrollbars && this.options.customStyle) {
									if (this.options.listenX) {
										this.wrapper.style.right = "8px"
									} else {
										this.wrapper.style.bottom = "8px"
									}
								}
							} else {
								a.removeClass(this.wrapper, "iScrollBothScrollbars");
								a.addClass(this.wrapper, "iScrollLoneScrollbar");
								if (this.options.defaultScrollbars && this.options.customStyle) {
									if (this.options.listenX) {
										this.wrapper.style.right = "2px"
									} else {
										this.wrapper.style.bottom = "2px"
									}
								}
							}
							var e = this.wrapper.offsetHeight;
							if (this.options.listenX) {
								this.wrapperWidth = this.wrapper.clientWidth;
								if (this.options.resize) {
									this.indicatorWidth = r.max(r.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
									this.indicatorStyle.width = this.indicatorWidth + "px"
								} else {
									this.indicatorWidth = this.indicator.clientWidth
								}
								this.maxPosX = this.wrapperWidth - this.indicatorWidth;
								if (this.options.shrink == "clip") {
									this.minBoundaryX = -this.indicatorWidth + 8;
									this.maxBoundaryX = this.wrapperWidth - 8
								} else {
									this.minBoundaryX = 0;
									this.maxBoundaryX = this.maxPosX
								}
								this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX
							}
							if (this.options.listenY) {
								this.wrapperHeight = this.wrapper.clientHeight;
								if (this.options.resize) {
									this.indicatorHeight = r.max(r.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
									this.indicatorStyle.height = this.indicatorHeight + "px"
								} else {
									this.indicatorHeight = this.indicator.clientHeight
								}
								this.maxPosY = this.wrapperHeight - this.indicatorHeight;
								if (this.options.shrink == "clip") {
									this.minBoundaryY = -this.indicatorHeight + 8;
									this.maxBoundaryY = this.wrapperHeight - 8
								} else {
									this.minBoundaryY = 0;
									this.maxBoundaryY = this.maxPosY
								}
								this.maxPosY = this.wrapperHeight - this.indicatorHeight;
								this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY
							}
							this.updatePosition()
						},
						updatePosition: function() {
							var e = this.options.listenX && r.round(this.sizeRatioX * this.scroller.x) || 0,
								t = this.options.listenY && r.round(this.sizeRatioY * this.scroller.y) || 0;
							if (!this.options.ignoreBoundaries) {
								if (e < this.minBoundaryX) {
									if (this.options.shrink == "scale") {
										this.width = r.max(this.indicatorWidth + e, 8);
										this.indicatorStyle.width = this.width + "px"
									}
									e = this.minBoundaryX
								} else if (e > this.maxBoundaryX) {
									if (this.options.shrink == "scale") {
										this.width = r.max(this.indicatorWidth - (e - this.maxPosX), 8);
										this.indicatorStyle.width = this.width + "px";
										e = this.maxPosX + this.indicatorWidth - this.width
									} else {
										e = this.maxBoundaryX
									}
								} else if (this.options.shrink == "scale" && this.width != this.indicatorWidth) {
									this.width = this.indicatorWidth;
									this.indicatorStyle.width = this.width + "px"
								}
								if (t < this.minBoundaryY) {
									if (this.options.shrink == "scale") {
										this.height = r.max(this.indicatorHeight + t * 3, 8);
										this.indicatorStyle.height = this.height + "px"
									}
									t = this.minBoundaryY
								} else if (t > this.maxBoundaryY) {
									if (this.options.shrink == "scale") {
										this.height = r.max(this.indicatorHeight - (t - this.maxPosY) * 3, 8);
										this.indicatorStyle.height = this.height + "px";
										t = this.maxPosY + this.indicatorHeight - this.height
									} else {
										t = this.maxBoundaryY
									}
								} else if (this.options.shrink == "scale" && this.height != this.indicatorHeight) {
									this.height = this.indicatorHeight;
									this.indicatorStyle.height = this.height + "px"
								}
							}
							this.x = e;
							this.y = t;
							if (this.scroller.options.useTransform) {
								this.indicatorStyle[a.style.transform] = "translate(" + e + "px," + t + "px)" + this.scroller.translateZ
							} else {
								this.indicatorStyle.left = e + "px";
								this.indicatorStyle.top = t + "px"
							}
						},
						_pos: function(e, t) {
							if (e < 0) {
								e = 0
							} else if (e > this.maxPosX) {
								e = this.maxPosX
							}
							if (t < 0) {
								t = 0
							} else if (t > this.maxPosY) {
								t = this.maxPosY
							}
							e = this.options.listenX ? r.round(e / this.sizeRatioX) : this.scroller.x;
							t = this.options.listenY ? r.round(t / this.sizeRatioY) : this.scroller.y;
							this.scroller.scrollTo(e, t)
						},
						fade: function(e, t) {
							if (t && !this.visible) {
								return
							}
							clearTimeout(this.fadeTimeout);
							this.fadeTimeout = null;
							var n = e ? 250 : 500,
								r = e ? 0 : 300;
							e = e ? "1" : "0";
							this.wrapperStyle[a.style.transitionDuration] = n + "ms";
							this.fadeTimeout = setTimeout(function(e) {
								this.wrapperStyle.opacity = e;
								this.visible = +e
							}.bind(this, e), r)
						}
					};
					i.utils = a;
					if (typeof t != "undefined" && t.exports) {
						t.exports = i
					}
					e.IScroll = i
				})(window, document, Math);
				(function() {
					function e(e, u) {
						function a(e, t) {
							var n = "translate3d(" + e * w.column.width + "px, " + t * w.row.height + "px, 0)";
							return {
								transform: n,
								"-webkit-transform": n
							}
						}

						function f(e, n, r, i) {
							var s = 0,
								o = w.column.num - 1,
								u = 0,
								f = w.row.num - 1,
								l = false,
								c = false,
								h = [],
								d = null;
							if (e > 0) {
								e = 0
							} else if (e < g.maxScrollX) {
								e = g.maxScrollX
							}
							s = parseInt(Math.abs(e) / w.column.width);
							o = s + w.column.num - 1;
							if (b.column !== s) {
								b.column = s;
								l = true
							}
							if (n > 0) {
								n = 0
							} else if (n < g.maxScrollY + H) {
								n = g.maxScrollY + H
							}
							u = parseInt(Math.abs(n) / w.row.height);
							f = u + w.row.num - 1;
							if (b.row !== u) {
								b.row = u;
								c = true
							}
							if (l || c) {
								d = p();
								S.forEach(function(e) {
									var t = false,
										n = e.column,
										r = e.row;
									if (n < s && n + w.column.num < w.column.total) {
										do {
											n += w.column.num
										} while (n < s);
										if (n < w.column.total) {
											t = true
										}
									} else if (n > o && n - w.column.num > -1) {
										t = true;
										do {
											n -= w.column.num
										} while (n > o)
									}
									if (r < u && r + w.row.num < w.row.total) {
										do {
											r += w.row.num
										} while (r < u);
										if (r < w.row.total) {
											t = true
										}
									} else if (r > f && r - w.row.num > -1) {
										t = true;
										do {
											r -= w.row.num
										} while (r > f)
									}
									if (t) {
										h.push({
											type: "change",
											el: e.node,
											from: {
												column: e.column,
												row: e.row
											},
											to: {
												column: n,
												row: r
											}
										});
										w.dataFilter("remove", e.node, e.column, e.row, d);
										e.column = n;
										e.row = r;
										w.dataFilter("add", e.node, n, r, d)
									}
								});
								if (w.builderNodes) {
									h.forEach(function(e) {
										t.css(e.el, a(e.to.column, e.to.row))
									})
								}
								w.changeFilter(h, d)
							}
						}

						function l(e) {
							var t = Math.abs(e),
								n = parseInt(t / w.column.width),
								r = -(t % w.column.width > w.column.width / 2 ? n + 1 : n) * w.column.width;
							return {
								move: r !== e,
								x: r
							}
						}

						function c(e) {
							var t = Math.abs(e),
								n = parseInt(t / w.row.height),
								r = -(t % w.row.height > w.row.height / 2 ? n + 1 : n) * w.row.height;
							return {
								move: r !== e,
								y: r
							}
						}

						function h() {
							var e = l(g.x),
								t = c(g.y);
							if (e.move || t.move) {
								if (x) {
									x.scrollTo(e.x, 0, 300, IScroll.utils.ease.circular)
								}
								if (T) {
									T.scrollTo(0, t.y, 300, IScroll.utils.ease.circular)
								}
								g.scrollTo(e.x, t.y, 300, IScroll.utils.ease.circular)
							}
						}

						function p() {
							return [b.column, b.row, b.column + w.column.num - 1, b.row + w.row.num - 1]
						}

						function d(e, t) {
							return e >= b.column && e < b.column + w.column.num - 1 && t >= b.row && t < b.row + w.row.num - 1
						}

						function v() {
							var e = [],
								n = p();
							if (w.builderNodes) {
								S.forEach(function(e) {
									t.removeNode(e.node)
								})
							}
							S = [];
							for (B = 0; B < w.column.num; B++) {
								for (j = 0; j < w.row.num; j++) {
									if (w.builderNodes) {
										F = t.builder(w.template).children[0];
										t.css(F, a(B, j));
										E.appendChild(F)
									}
									S.push({
										column: B,
										row: j,
										node: F
									});
									w.dataFilter("add", F || null, B, j, n);
									e.push({
										type: "create",
										el: F || null,
										from: {},
										to: {
											column: B,
											row: j
										}
									})
								}
							}
							w.changeFilter(e, n);
							y.trigger("ready")
						}

						function m(e, t, n, r) {
							if (N) {
								if (e < w.moreDis && e > g.maxScrollX - w.moreDis) {
									N = false
								}
							} else {
								if (e >= w.moreDis) {
									N = true;
									y.trigger("more", {
										axis: "x",
										seq: "prev"
									})
								} else if (e <= g.maxScrollX - w.moreDis) {
									N = true;
									y.trigger("more", {
										axis: "x",
										seq: "next"
									})
								}
							}
							if (C) {
								if (t < w.moreDis && t > g.maxScrollY - w.moreDis) {
									C = false
								}
							} else {
								if (t >= w.moreDis) {
									C = true;
									y.trigger("more", {
										axis: "y",
										seq: "prev"
									})
								} else if (t <= g.maxScrollY - w.moreDis) {
									C = true;
									y.trigger("more", {
										axis: "y",
										seq: "next"
									})
								}
							}
						}
						var g = null,
							y = function() {
								var e = function() {};
								t.extend(e.prototype, t.CustEvent);
								return new e
							}(),
							b = {
								column: 0,
								row: 0
							},
							w = t.extend({}, o, u),
							E = e && e.children[0],
							S = [],
							x = w.bindScrolls.x || null,
							T = w.bindScrolls.y || null,
							N = false,
							C = false,
							k = false,
							L = false,
							A, O, M, _, D, P, H = 0,
							B, j, F;
						if (!E) {
							throw "Dom Structure Error!"
						}
						w.scrollOpt = t.extend({}, r, w.scrollOpt);
						if (w.scrollOpt.scrollX && w.column) {
							k = true;
							w.column.num = w.column.num || parseInt(t.size(e).width / w.column.width) + 2;
							t.css(E, "width", Math.max(w.column.total * w.column.width, t.size(E.parentNode).width + 1) + "px")
						} else {
							w.column = {
								num: 1,
								total: 1,
								width: 1
							}
						}
						if (w.scrollOpt.scrollY && w.row) {
							L = true;
							w.row.num = w.row.num || parseInt(t.size(e).height / w.row.height) + 2;
							t.css(E, "height", Math.max(w.row.total * w.row.height, t.size(E.parentNode).height + 1) + "px")
						} else {
							w.row = {
								num: 1,
								total: 1,
								height: 1
							}
						}
						g = new n(e, w.scrollOpt);
						if (k || L) {
							g.on("scroll", function() {
								f(g.x, g.y, g.directionX, g.directionY)
							});
							g.on("scrollEnd", function() {
								if (x && g.x <= 0 && g.x >= g.maxScrollX) {
									x.scrollTo(g.x, 0)
								}
								if (T && g.y <= 0 && g.y >= g.maxScrollY) {
									T.scrollTo(0, g.y)
								}
							});
							t.delay(v)
						}
						g.on("scroll", function() {
							m(g.x, g.y, g.directionX, g.directionY)
						});
						g.on("scrollEnd", function() {
							if (x && g.x <= 0 && g.x >= g.maxScrollX) {
								x.scrollTo(g.x, 0)
							}
							if (T && g.y <= 0 && g.y >= g.maxScrollY) {
								T.scrollTo(0, g.y)
							}
						});
						if (x) {
							g.on("scroll", function() {
								if (g.x <= 0 && g.x >= g.maxScrollX) {
									x.scrollTo(g.x, 0)
								}
							});
							x.on("scroll", function() {
								if (x.x <= 0 && x.x >= x.maxScrollX && x.x >= g.maxScrollX) {
									g.scrollTo(x.x, g.y);
									f(x.x, g.y, x.directionX, 0)
								}
							})
						}
						if (T) {
							g.on("scroll", function() {
								if (g.y <= 0 && g.y >= g.maxScrollY) {
									T.scrollTo(0, g.y)
								}
							});
							T.on("scroll", function() {
								if (T.y <= 0 && T.y >= T.maxScrollY && T.y >= g.maxScrollY) {
									g.scrollTo(g.x, T.y);
									f(g.x, T.y, 0, T.directionY)
								}
							})
						}
						if (w.topOffsetRefresh) {
							if (w.topOffsetRefresh === true) {
								w.topOffsetRefresh = {}
							}
							t.extend(true, w.topOffsetRefresh, i);
							A = document.createElement("div");
							M = "drag";
							t.css(A, {
								position: "absolute",
								height: w.topOffsetRefresh.distance + "px",
								width: "100%",
								top: -w.topOffsetRefresh.distance + "px"
							});
							A.innerHTML = w.topOffsetRefresh.dragContent;
							D = function() {
								if (M === "waitEnd") {
									M = "startRefresh";
									A.innerHTML = w.topOffsetRefresh.loadContent;
									t.css(E, {
										marginTop: w.topOffsetRefresh.distance + "px"
									});
									g.scrollTo(g.x, g.y - w.topOffsetRefresh.distance, 0);
									w.refresh("top")
								}
							};
							E.addEventListener("touchend", D, false);
							g.on("scroll", function() {
								if (M === "drag" && g.y > w.topOffsetRefresh.distance) {
									M = "waitEnd";
									A.innerHTML = w.topOffsetRefresh.endContent
								}
								if (M === "waitEnd" && g.y <= w.topOffsetRefresh.distance) {
									M = "drag";
									A.innerHTML = w.topOffsetRefresh.dragContent
								}
							});
							t.delay(function() {
								t.insertElement(E, A, "beforeend")
							}, 100)
						}
						if (w.bottomOffsetRefresh) {
							if (w.bottomOffsetRefresh === true) {
								w.bottomOffsetRefresh = {}
							}
							t.extend(true, w.bottomOffsetRefresh, s);
							O = document.createElement("div");
							if (w.row.total * w.row.height < t.size(E.parentNode).height + 1) {
								_ = "none"
							} else {
								_ = "drag"
							}
							t.css(O, {
								position: "absolute",
								height: w.bottomOffsetRefresh.distance + "px",
								width: "100%",
								bottom: -w.bottomOffsetRefresh.distance + "px"
							});
							O.innerHTML = "";
							P = function() {
								if (_ === "waitEnd") {
									_ = "startRefresh";
									H = w.bottomOffsetRefresh.distance;
									O.innerHTML = w.bottomOffsetRefresh.loadContent;
									t.css(E, {
										height: t.size(E).height + H + "px"
									});
									t.css(O, {
										bottom: 0
									});
									g.refresh();
									w.refresh("bottom")
								}
							};
							E.addEventListener("touchend", P, false);
							g.on("scroll", function() {
								if (_ === "drag" && g.y < g.maxScrollY - w.bottomOffsetRefresh.distance) {
									_ = "waitEnd"
								}
								if (_ === "waitEnd" && g.y >= g.maxScrollY - w.bottomOffsetRefresh.distance) {
									_ = "drag"
								}
							});
							t.delay(function() {
								t.insertElement(E, O, "beforeend")
							}, 100)
						}
						y.trigger("init");
						return t.extend(y, {
							scroll: g,
							refresh: function() {
								g.refresh()
							},
							scrollTo: function() {
								g.scrollTo.apply(g, t.makeArray(arguments))
							},
							gotoTop: function(e, n) {
								n = parseInt(n) || 300;
								if (e && w.topOffsetRefresh && M !== "startRefresh") {
									M = "startRefresh";
									A.innerHTML = w.topOffsetRefresh.loadContent;
									t.css(E, {
										marginTop: w.topOffsetRefresh.distance + "px"
									});
									t.delay(function() {
										w.refresh("top")
									}, n)
								}
								g.scrollTo(g.x, 0, n)
							},
							setTopRefresh: function(e) {
								if (w.topOffsetRefresh) {
									A.innerHTML = w.topOffsetRefresh[e ? "successContent" : "failContent"];
									t.delay(function() {
										t.animate(E, {
											marginTop: "0"
										}, 50, "ease-out");
										t.delay(function() {
											M = "drag";
											A.innerHTML = w.topOffsetRefresh.dragContent
										}, 80)
									}, w.topOffsetRefresh.displayDelay);
									if (w.bottomOffsetRefresh && e) {
										if (w.row.total * w.row.height < t.size(E.parentNode).height + 1) {
											_ = "none"
										} else {
											_ = "drag"
										}
										O.innerHTML = ""
									}
								}
							},
							setBottomRefresh: function(e, n) {
								if (w.bottomOffsetRefresh) {
									var r = e ? "" : w.bottomOffsetRefresh.failContent;
									_ = "drag";
									if (n) {
										_ = "end";
										r = w.bottomOffsetRefresh.endContent
									}
									O.innerHTML = r;
									if (n || !e && w.bottomOffsetRefresh.failContent) {
										t.delay(function() {
											g.scrollTo(g.x, g.y + H, w.bottomOffsetRefresh.displayDelay / 2)
										}, w.bottomOffsetRefresh.displayDelay / 2);
										t.delay(function() {
											t.css(E, {
												height: t.size(E).height - H + "px"
											});
											t.css(O, {
												bottom: -H + "px"
											});
											H = 0;
											g.refresh()
										}, w.bottomOffsetRefresh.displayDelay)
									} else if (!e) {
										t.css(E, {
											height: t.size(E).height - H + "px"
										});
										t.css(O, {
											bottom: -H + "px"
										});
										H = 0;
										g.refresh()
									} else {
										t.css(E, {
											height: t.size(E).height - H + "px"
										});
										t.css(O, {
											bottom: -H + "px"
										});
										H = 0;
										g.refresh();
										t.delay(function() {
											g.scrollTo(g.x, g.y - w.bottomOffsetRefresh.distance * 2, 500)
										})
									}
								}
							},
							fixPosition: function() {
								t.delay(h)
							},
							appendNode: function(e, n, r) {
								if (e && E) {
									t.css(e, a(n, r));
									if (!t.contains(E, e)) {
										E.appendChild(e)
									}
								}
							},
							getShowArea: p,
							checkShow: function(e) {
								return e.some(function(e) {
									return d(e[0], e[1])
								})
							},
							resetNum: function(e, t) {
								w.column.num = e;
								w.row.num = t;
								v()
							},
							resetTotal: function(e, n, r, i) {
								w.column.total = e;
								w.row.total = n;
								if (w.scrollOpt.scrollX) {
									t.css(E, "width", Math.max(w.column.total * w.column.width, t.size(E.parentNode).width + 1) + "px")
								}
								if (w.scrollOpt.scrollY) {
									t.css(E, "height", Math.max(w.row.total * w.row.height, t.size(E.parentNode).height + 1) + "px")
								}
								if (w.bottomOffsetRefresh) {
									if (w.row.total * w.row.height < t.size(E.parentNode).height + 1) {
										_ = "none"
									} else {
										_ = "drag"
									}
									O.innerHTML = ""
								}
								t.delay(function() {
									g.refresh();
									f(g.x, g.y, r || 0, i || 0)
								})
							},
							destroy: function() {
								y.off();
								g.destroy();
								g = null;
								if (w.topOffsetRefresh) {
									t.removeEvent(E, D)
								}
								if (w.bottomOffsetRefresh) {
									t.removeEvent(E, P)
								}
								w = null;
								E = null;
								if (T) {
									T.destroy()
								}
								T = null;
								if (x) {
									x.destroy()
								}
								x = null;
								S.forEach(function(e) {
									if (e.node) {
										t.removeNode(e.node);
										e.node = null
									}
								});
								S.length = 0;
								S = null
							}
						})
					}
					var t = QApp.util,
						n = t.iScroll = window.IScroll;
					var r = {
						scrollX: false,
						scrollY: true,
						freeScroll: false,
						mouseWheel: false,
						probeType: 3,
						preventDefault: false
					};
					var i = {
						distance: 50,
						displayDelay: 1e3,
						dragContent: "drag to refresh",
						endContent: "stop to refresh",
						loadContent: "loading",
						successContent: "success",
						failContent: "failure"
					};
					var s = {
						distance: 50,
						displayDelay: 1e3,
						loadContent: "loading",
						endContent: "end",
						failContent: ""
					};
					var o = {
						builderNodes: true,
						template: '<div class="item"></div>',
						moreDis: 50,
						bindScrolls: {},
						scrollOpt: {},
						dataFilter: t.noop,
						changeFilter: t.noop,
						refresh: t.noop,
						topOffsetRefresh: false,
						bottomOffsetResfresh: false
					};
					e.iScroll = n;
					e.setTopRefreshOpt = function(e) {
						t.extend(true, i, e)
					};
					e.setBottomRefreshOpt = function(e) {
						t.extend(true, s, e)
					};
					window.NScroll = QApp.util.nScroll = e
				})();
				(function() {
					function e(e) {
						return JSON.parse(JSON.stringify(e.$model))
					}

					function t(e, n) {
						if (s.type(e) === "array") {
							n = s.mix(true, {}, {
								_: n
							});
							e = {
								_: e
							}
						} else {
							n = s.mix(true, {}, n)
						}
						for (var r in e) {
							if (typeof n[r] == "undefined" || !e.hasOwnProperty(r) || r === "hasOwnProperty") continue;
							switch (s.type(e[r])) {
								case "object":
									t(e[r], n[r]);
									break;
								case "array":
									s.each(n[r], function(n, i) {
										var s = typeof e[r][n];
										if (s === "object" && e[r][n] !== null) {
											t(e[r][n], i)
										} else {
											if (n >= e[r].size()) {
												e[r].push(i)
											} else {
												e[r].set(n, i)
											}
										}
									});
									while (e[r].length > n[r].length) {
										e[r].pop()
									}
									break;
								default:
									e[r] = n[r];
									break
							}
						}
					}

					function n(e, t) {
						return ((e.hasAttributes() ? s.slice(e.attributes) : []).filter(function(e) {
							return !e.name.indexOf(t)
						})[0] || {}).name
					}

					function r(e, t, n) {
						var r = document.createEvent("HTMLEvents");
						r.initEvent(t, true, true);
						s.mix(r, n);
						e.dispatchEvent(r)
					}

					function i(e, t) {
						a.forEach(function(n) {
							t.on(n, function() {
								r(e, n.toLowerCase())
							})
						})
					}
					var s = window.avalon || QApp.avalon,
						o = QApp.util.nScroll;
					var u = {
							showLines: 10,
							lineHeight: 0,
							getData: function() {}
						},
						a = ["beforeScrollStart", "scrollCancel", "scrollStart", "scroll", "scrollEnd", "flick", "zoomStart", "zoomEnd"],
						f = 100;
					if (s) {
						s.bindingHandlers.iscroll = function(a, l) {
							var c = a.element,
								h = a.value.match(/[^, ]+/g),
								p = l[0],
								d = s.mix({}, u, p.iscroll, c.dataset, h && h[1] ? p[h[1]] : null),
								v = d.id || h && h[0] !== "$" && h[0] || "iscroll" + setTimeout("1"),
								m = c.children[0],
								g = c.children[0] && c.children[0].children[0],
								y = m && n(m, "ms-each"),
								b = g && n(g, "ms-repeat"),
								w, E;
							p.scrolls = p.scrolls || {};
							c.removeAttribute("ms-iscroll");
							if (y || b) {
								var S, x, T, N = [],
									C = 0;
								if (y) {
									S = m.getAttribute(y);
									m.setAttribute(y, S + "$")
								} else if (b) {
									S = g.getAttribute(b);
									g.setAttribute(b, S + "$")
								}
								x = S + "$";
								p.$watch(S, function() {
									var n = p[S],
										s = p[x],
										u = [],
										a = s.length,
										f;
									C = n.size() >= d.showLines ? d.showLines : n.size();
									if (w) {
										s.forEach(function(e) {
											e.$unwatch()
										});
										for (f = 0; f < C; f++) {
											if (f >= a) {
												if (s[f]) {
													s.set(f, e(n[f]))
												} else {
													s.push(e(n[f]));
													w.appendNode(c.children[0].children[f], 1, f)
												}
												s[f].$watch("$all", function(e) {
													return function(t, r) {
														n[e][t] = r
													}
												}(f));
												n[f].$watch("$all", function(e) {
													return function(t, n) {
														s[e][t] = n
													}
												}(f))
											}
										}
										for (f = C; f < a; f++) {
											s.removeAt(C)
										}
										N = E.children;
										w.resetNum(1, C);
										w.resetTotal(1, n.size());
										w.scrollTo(0, 0, 0)
									} else {
										s.pushArray(JSON.parse(JSON.stringify(p.$model[S].slice(0, C))));
										E = c.children[0];
										N = E.children;
										d.lineHeight = d.lineHeight || N[0] && N[0].offsetHeight;
										if (!d.lineHeight) {
											throw "Can not know line height!"
										}
										w = p.scrolls[v] = o(c, {
											builderNodes: false,
											row: {
												height: d.lineHeight,
												num: C,
												total: n.size()
											},
											scrollOpt: d,
											topOffsetRefresh: d.topOffsetRefresh,
											bottomOffsetRefresh: d.bottomOffsetRefresh,
											refresh: function(e) {
												if (typeof d.refresh === "function") {
													d.refresh.call(w, e)
												} else if (typeof d.refresh === "string" && typeof p[d.refresh] === "function") {
													p[d.refresh].call(w, e)
												} else {
													r(c, "refresh", {
														type: e
													})
												}
											},
											dataFilter: function(r, i, o, u) {
												var a = u % C;
												if (C) {
													if (r === "add") {
														w.appendNode(N[a], o, u);
														t(s[a], e(n[u]));
														s[a].$watch("$all", function(e, t) {
															n[u][e] = t
														});
														n[u].$watch("$all", function(e, t) {
															s[a][e] = t
														})
													} else {
														n[u].$unwatch();
														s[a].$unwatch()
													}
												}
											}
										});
										w.on("more", function(e) {
											if (e.axis === "y" && e.seq === "next") {
												if (typeof d.getData === "function") {
													d.getData.call(w, n.length)
												} else if (typeof d.getData === "string" && typeof p[d.getData] === "function") {
													p[d.getData].call(w, n.length)
												} else {
													r(c, "getdata", {
														start: n.length
													})
												}
											}
										});
										i(c, w.scroll)
									}
								});
								p[S].$watch("length", function(e) {
									if (T) {
										clearTimeout(T)
									}
									T = setTimeout(function() {
										if (w) {
											w.resetTotal(0, p[S].size(), 0, 1)
										}
									}, f)
								})
							} else {
								w = p.scrolls[v] = o(c, d);
								i(c, w);
								p.$watch("$all", function() {
									if (T) {
										clearTimeout(T)
									}
									T = setTimeout(function() {
										if (w) {
											w.refresh()
										}
									}, f)
								})
							}
							p.$remove = function() {
								if (w) {
									w.destroy();
									w = null
								}
							}
						}
					}
				})();
				(function() {
					var e = QApp.util,
						t = e.iScroll;
					var n = 300,
						r = "qapp-scroll",
						i = {
							preventDefaultException: {
								tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/
							}
						};
					QApp.addPlugin(["scroll", "ui.scroll"], i, function(i, s, o) {
						function u() {
							if (a) {
								clearTimeout(a)
							}
							a = e.delay(function() {
								if (f) {
									f.refresh()
								}
							}, n)
						}
						var a, f;
						i.on("ready", function() {
							var n = document.createElement(r);
							e.appendNodes(n, i.nodes);
							i.root.appendChild(n);
							f = i.scroll = new t(i.root, s);
							i.root.addEventListener("DOMSubtreeModified", function() {
								u()
							}, false);
							i.refreshScroll = u;
							e.delay(u)
						});
						i.on("destroy", function() {
							if (a) {
								clearTimeout(a)
							}
							if (f) {
								f.destroy()
							}
						});
						return {}
					})
				})();
				(function() {
					var e = QApp.util,
						t = e.iScroll;
					var n = 300;
					var r = {
						scrollX: false,
						scrollY: true,
						freeScroll: false,
						mouseWheel: false,
						probeType: 3,
						preventDefault: false
					};
					QApp.addWidget("scroll", function(i, s, o) {
						if (t) {
							var u = {},
								a, f = function() {
									if (a) {
										clearTimeout(a)
									}
									a = e.delay(function() {
										if (u && u.refresh) {
											u.refresh()
										}
									}, n)
								};
							e.css(i, "overflow", "hidden");
							e.addEvent(i, "DOMSubtreeModified", function() {
								f()
							});
							e.delay(f);
							if (o) {
								if (o.isShow) {
									var l = new t(i, e.extend({}, r, s));
									e.each(o.widgets, function(e, t) {
										if (t === u) {
											o.widgets[e] = l
										}
									});
									u = l
								} else {
									var c = o._events.show = o._events.show || [];
									c.unshift({
										callback: function() {
											var n = new t(i, e.extend({}, r, s));
											e.each(o.widgets, function(e, t) {
												if (t === u) {
													o.widgets[e] = n
												}
											});
											u = n
										},
										ctx: o
									})
								}
							} else {
								var l = new t(i, e.extend({}, r, s));
								u = l
							}
							return u
						}
					})
				})()
			}(t.exports, t, e);
			e.____MODULES["2ab9cd74935222560bb8e728582f85a2"] = t.exports
		})(this);
		(function(e) {
			var t = {
				id: "8e388858412f481def4b54146d6a335f",
				filename: "index.js",
				exports: {}
			};
			if (!e.____MODULES) {
				e.____MODULES = {}
			}
			var n = function(e, t, n) {
				(function() {
					function e() {}

					function t() {
						return null
					}

					function n(n) {
						var r = n in window && window[n];
						return r ? {
							size: function() {
								return r.length
							},
							key: function() {
								return r.key ? function(e) {
									return r.key(e)
								} : t
							}(),
							get: function() {
								return r.getItem ? function(e) {
									try {
										return JSON.parse(r.getItem(e))
									} catch (t) {
										return null
									}
								} : t
							}(),
							set: function() {
								return r.setItem ? function(e, t) {
									try {
										return r.setItem(e, JSON.stringify(t))
									} catch (n) {
										return void 0
									}
								} : e
							}(),
							remove: function() {
								return r.removeItem ? function(e) {
									return r.removeItem(e)
								} : e
							}(),
							clear: function() {
								return r.clear ? function() {
									return r.clear()
								} : e
							}()
						} : u
					}

					function r() {
						return (new Date).getTime()
					}

					function i() {
						var e = r(),
							t, n, i, o;
						for (t = 0, n = a.size(); t < n; t++) {
							i = a.key(t);
							o = a.get(i);
							if (o && i !== s) {
								if (o.expires > 0 && o.createTime + o.expires < e) {
									a.remove(i)
								} else {
									c[i] = o.data
								}
							}
						}
					}
					var s = "_baseInfo",
						o = 7 * 24 * 60 * 60 * 1e3;
					var u = {
						size: function() {
							return 0
						},
						get: t,
						set: e,
						remove: e,
						clear: e
					};
					var a = n("localStorage"),
						f = n("sessionStorage"),
						l = false,
						c = {};
					var h = function(e, t, n) {
						var i = arguments.length,
							s = null;
						if (i === 1) {
							if (l && e in c) {
								s = c[e]
							} else {
								s = f.get(e) || function() {
									var t = a.get(e);
									if (t) {
										if (t.expires === 0 || t.createTime + t.expires > r()) {
											return t.data
										}
										a.remove(e)
									}
									return null
								}();
								c[e] = s
							}
							return s
						} else if (i > 1) {
							if (t === void 0 || t === null) {
								delete c[e];
								return f.remove(e) || a.remove(e)
							} else {
								c[e] = t;
								n = n || 0;
								if (n === -1) {
									return f.set(e, t)
								} else {
									return a.set(e, {
										data: t,
										createTime: r(),
										expires: n
									})
								}
							}
						}
					};
					h.setCache = function(e) {
						l = !!e
					};
					h.clear = function() {
						var e = a.get(s);
						f.clear();
						a.clear();
						a.set(s, e)
					};
					h.init = function(e) {
						var t = a.get(s) || {},
							n = t.version,
							u = t.cTime,
							f = false;
						if (!n || n !== e) {
							f = true;
							a.clear();
							n = e
						}
						if (!u || r() - u > o) {
							f = true;
							i();
							u = r()
						}
						if (f) {
							a.set(s, {
								version: n,
								cTime: u
							})
						}
					};
					QApp.util.storage = h
				})()
			}(t.exports, t, e);
			e.____MODULES["8e388858412f481def4b54146d6a335f"] = t.exports
		})(this);
		(function(__context) {
			var module = {
				id: "da73d8a6f60c849ff1cbc63ff4884540",
				filename: "index.js",
				exports: {}
			};
			if (!__context.____MODULES) {
				__context.____MODULES = {}
			}
			var r = function(exports, module, global) {
				var Zepto = function() {
					function e(e) {
						return e == null ? String(e) : W[X.call(e)] || "object"
					}

					function t(t) {
						return e(t) == "function"
					}

					function n(e) {
						return e != null && e == e.window
					}

					function r(e) {
						return e != null && e.nodeType == e.DOCUMENT_NODE
					}

					function i(t) {
						return e(t) == "object"
					}

					function s(e) {
						return i(e) && !n(e) && Object.getPrototypeOf(e) == Object.prototype
					}

					function o(e) {
						return typeof e.length == "number"
					}

					function u(e) {
						return k.call(e, function(e) {
							return e != null
						})
					}

					function a(e) {
						return e.length > 0 ? x.fn.concat.apply([], e) : e
					}

					function f(e) {
						return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
					}

					function l(e) {
						return e in O ? O[e] : O[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
					}

					function c(e, t) {
						return typeof t == "number" && !M[f(e)] ? t + "px" : t
					}

					function h(e) {
						var t, n;
						if (!A[e]) {
							t = L.createElement(e);
							L.body.appendChild(t);
							n = getComputedStyle(t, "").getPropertyValue("display");
							t.parentNode.removeChild(t);
							n == "none" && (n = "block");
							A[e] = n
						}
						return A[e]
					}

					function p(e) {
						return "children" in e ? C.call(e.children) : x.map(e.childNodes, function(e) {
							if (e.nodeType == 1) return e
						})
					}

					function d(e, t, n) {
						for (S in t)
							if (n && (s(t[S]) || G(t[S]))) {
								if (s(t[S]) && !s(e[S])) e[S] = {};
								if (G(t[S]) && !G(e[S])) e[S] = [];
								d(e[S], t[S], n)
							} else if (t[S] !== E) e[S] = t[S]
					}

					function v(e, t) {
						return t == null ? x(e) : x(e).filter(t)
					}

					function m(e, n, r, i) {
						return t(n) ? n.call(e, r, i) : n
					}

					function g(e, t, n) {
						n == null ? e.removeAttribute(t) : e.setAttribute(t, n)
					}

					function y(e, t) {
						var n = e.className,
							r = n && n.baseVal !== E;
						if (t === E) return r ? n.baseVal : n;
						r ? n.baseVal = t : e.className = t
					}

					function b(e) {
						var t;
						try {
							return e ? e == "true" || (e == "false" ? false : e == "null" ? null : !/^0/.test(e) && !isNaN(t = Number(e)) ? t : /^[\[\{]/.test(e) ? x.parseJSON(e) : e) : e
						} catch (n) {
							return e
						}
					}

					function w(e, t) {
						t(e);
						for (var n = 0, r = e.childNodes.length; n < r; n++) w(e.childNodes[n], t)
					}
					var E, S, x, T, N = [],
						C = N.slice,
						k = N.filter,
						L = window.document,
						A = {},
						O = {},
						M = {
							"column-count": 1,
							columns: 1,
							"font-weight": 1,
							"line-height": 1,
							opacity: 1,
							"z-index": 1,
							zoom: 1
						},
						_ = /^\s*<(\w+|!)[^>]*>/,
						D = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
						P = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
						H = /^(?:body|html)$/i,
						B = /([A-Z])/g,
						j = ["val", "css", "html", "text", "data", "width", "height", "offset"],
						F = ["after", "prepend", "before", "append"],
						I = L.createElement("table"),
						q = L.createElement("tr"),
						R = {
							tr: L.createElement("tbody"),
							tbody: I,
							thead: I,
							tfoot: I,
							td: q,
							th: q,
							"*": L.createElement("div")
						},
						U = /complete|loaded|interactive/,
						z = /^[\w-]*$/,
						W = {},
						X = W.toString,
						V = {},
						$, J, K = L.createElement("div"),
						Q = {
							tabindex: "tabIndex",
							readonly: "readOnly",
							"for": "htmlFor",
							"class": "className",
							maxlength: "maxLength",
							cellspacing: "cellSpacing",
							cellpadding: "cellPadding",
							rowspan: "rowSpan",
							colspan: "colSpan",
							usemap: "useMap",
							frameborder: "frameBorder",
							contenteditable: "contentEditable"
						},
						G = Array.isArray || function(e) {
							return e instanceof Array
						};
					V.matches = function(e, t) {
						if (!t || !e || e.nodeType !== 1) return false;
						var n = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
						if (n) return n.call(e, t);
						var r, i = e.parentNode,
							s = !i;
						if (s)(i = K).appendChild(e);
						r = ~V.qsa(i, t).indexOf(e);
						s && K.removeChild(e);
						return r
					};
					$ = function(e) {
						return e.replace(/-+(.)?/g, function(e, t) {
							return t ? t.toUpperCase() : ""
						})
					};
					J = function(e) {
						return k.call(e, function(t, n) {
							return e.indexOf(t) == n
						})
					};
					V.fragment = function(e, t, n) {
						var r, i, o;
						if (D.test(e)) r = x(L.createElement(RegExp.$1));
						if (!r) {
							if (e.replace) e = e.replace(P, "<$1></$2>");
							if (t === E) t = _.test(e) && RegExp.$1;
							if (!(t in R)) t = "*";
							o = R[t];
							o.innerHTML = "" + e;
							r = x.each(C.call(o.childNodes), function() {
								o.removeChild(this)
							})
						}
						if (s(n)) {
							i = x(r);
							x.each(n, function(e, t) {
								if (j.indexOf(e) > -1) i[e](t);
								else i.attr(e, t)
							})
						}
						return r
					};
					V.Z = function(e, t) {
						e = e || [];
						e.__proto__ = x.fn;
						e.selector = t || "";
						return e
					};
					V.isZ = function(e) {
						return e instanceof V.Z
					};
					V.init = function(e, n) {
						var r;
						if (!e) return V.Z();
						else if (typeof e == "string") {
							e = e.trim();
							if (e[0] == "<" && _.test(e)) r = V.fragment(e, RegExp.$1, n), e = null;
							else if (n !== E) return x(n).find(e);
							else r = V.qsa(L, e)
						} else if (t(e)) return x(L).ready(e);
						else if (V.isZ(e)) return e;
						else {
							if (G(e)) r = u(e);
							else if (i(e)) r = [e], e = null;
							else if (_.test(e)) r = V.fragment(e.trim(), RegExp.$1, n), e = null;
							else if (n !== E) return x(n).find(e);
							else r = V.qsa(L, e)
						}
						return V.Z(r, e)
					};
					x = function(e, t) {
						return V.init(e, t)
					};
					x.extend = function(e) {
						var t, n = C.call(arguments, 1);
						if (typeof e == "boolean") {
							t = e;
							e = n.shift()
						}
						n.forEach(function(n) {
							d(e, n, t)
						});
						return e
					};
					V.qsa = function(e, t) {
						var n, i = t[0] == "#",
							s = !i && t[0] == ".",
							o = i || s ? t.slice(1) : t,
							u = z.test(o);
						return r(e) && u && i ? (n = e.getElementById(o)) ? [n] : [] : e.nodeType !== 1 && e.nodeType !== 9 ? [] : C.call(u && !i ? s ? e.getElementsByClassName(o) : e.getElementsByTagName(t) : e.querySelectorAll(t))
					};
					x.contains = function(e, t) {
						return e !== t && e.contains(t)
					};
					x.type = e;
					x.isFunction = t;
					x.isWindow = n;
					x.isArray = G;
					x.isPlainObject = s;
					x.isEmptyObject = function(e) {
						var t;
						for (t in e) return false;
						return true
					};
					x.inArray = function(e, t, n) {
						return N.indexOf.call(t, e, n)
					};
					x.camelCase = $;
					x.trim = function(e) {
						return e == null ? "" : String.prototype.trim.call(e)
					};
					x.uuid = 0;
					x.support = {};
					x.expr = {};
					x.map = function(e, t) {
						var n, r = [],
							i, s;
						if (o(e))
							for (i = 0; i < e.length; i++) {
								n = t(e[i], i);
								if (n != null) r.push(n)
							} else
								for (s in e) {
									n = t(e[s], s);
									if (n != null) r.push(n)
								}
						return a(r)
					};
					x.each = function(e, t) {
						var n, r;
						if (o(e)) {
							for (n = 0; n < e.length; n++)
								if (t.call(e[n], n, e[n]) === false) return e
						} else {
							for (r in e)
								if (t.call(e[r], r, e[r]) === false) return e
						}
						return e
					};
					x.grep = function(e, t) {
						return k.call(e, t)
					};
					if (window.JSON) x.parseJSON = JSON.parse;
					x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
						W["[object " + t + "]"] = t.toLowerCase()
					});
					x.fn = {
						forEach: N.forEach,
						reduce: N.reduce,
						push: N.push,
						sort: N.sort,
						indexOf: N.indexOf,
						concat: N.concat,
						map: function(e) {
							return x(x.map(this, function(t, n) {
								return e.call(t, n, t)
							}))
						},
						slice: function() {
							return x(C.apply(this, arguments))
						},
						ready: function(e) {
							if (U.test(L.readyState) && L.body) e(x);
							else L.addEventListener("DOMContentLoaded", function() {
								e(x)
							}, false);
							return this
						},
						get: function(e) {
							return e === E ? C.call(this) : this[e >= 0 ? e : e + this.length]
						},
						toArray: function() {
							return this.get()
						},
						size: function() {
							return this.length
						},
						remove: function() {
							return this.each(function() {
								if (this.parentNode != null) this.parentNode.removeChild(this)
							})
						},
						each: function(e) {
							N.every.call(this, function(t, n) {
								return e.call(t, n, t) !== false
							});
							return this
						},
						filter: function(e) {
							if (t(e)) return this.not(this.not(e));
							return x(k.call(this, function(t) {
								return V.matches(t, e)
							}))
						},
						add: function(e, t) {
							return x(J(this.concat(x(e, t))))
						},
						is: function(e) {
							return this.length > 0 && V.matches(this[0], e)
						},
						not: function(e) {
							var n = [];
							if (t(e) && e.call !== E) this.each(function(t) {
								if (!e.call(this, t)) n.push(this)
							});
							else {
								var r = typeof e == "string" ? this.filter(e) : o(e) && t(e.item) ? C.call(e) : x(e);
								this.forEach(function(e) {
									if (r.indexOf(e) < 0) n.push(e)
								})
							}
							return x(n)
						},
						has: function(e) {
							return this.filter(function() {
								return i(e) ? x.contains(this, e) : x(this).find(e).size()
							})
						},
						eq: function(e) {
							return e === -1 ? this.slice(e) : this.slice(e, +e + 1)
						},
						first: function() {
							var e = this[0];
							return e && !i(e) ? e : x(e)
						},
						last: function() {
							var e = this[this.length - 1];
							return e && !i(e) ? e : x(e)
						},
						find: function(e) {
							var t, n = this;
							if (!e) t = [];
							else if (typeof e == "object") t = x(e).filter(function() {
								var e = this;
								return N.some.call(n, function(t) {
									return x.contains(t, e)
								})
							});
							else if (this.length == 1) t = x(V.qsa(this[0], e));
							else t = this.map(function() {
								return V.qsa(this, e)
							});
							return t
						},
						closest: function(e, t) {
							var n = this[0],
								i = false;
							if (typeof e == "object") i = x(e);
							while (n && !(i ? i.indexOf(n) >= 0 : V.matches(n, e))) n = n !== t && !r(n) && n.parentNode;
							return x(n)
						},
						parents: function(e) {
							var t = [],
								n = this;
							while (n.length > 0) n = x.map(n, function(e) {
								if ((e = e.parentNode) && !r(e) && t.indexOf(e) < 0) {
									t.push(e);
									return e
								}
							});
							return v(t, e)
						},
						parent: function(e) {
							return v(J(this.pluck("parentNode")), e)
						},
						children: function(e) {
							return v(this.map(function() {
								return p(this)
							}), e)
						},
						contents: function() {
							return this.map(function() {
								return C.call(this.childNodes)
							})
						},
						siblings: function(e) {
							return v(this.map(function(e, t) {
								return k.call(p(t.parentNode), function(e) {
									return e !== t
								})
							}), e)
						},
						empty: function() {
							return this.each(function() {
								this.innerHTML = ""
							})
						},
						pluck: function(e) {
							return x.map(this, function(t) {
								return t[e]
							})
						},
						show: function() {
							return this.each(function() {
								this.style.display == "none" && (this.style.display = "");
								if (getComputedStyle(this, "").getPropertyValue("display") == "none") this.style.display = h(this.nodeName)
							})
						},
						replaceWith: function(e) {
							return this.before(e).remove()
						},
						wrap: function(e) {
							var n = t(e);
							if (this[0] && !n) var r = x(e).get(0),
								i = r.parentNode || this.length > 1;
							return this.each(function(t) {
								x(this).wrapAll(n ? e.call(this, t) : i ? r.cloneNode(true) : r)
							})
						},
						wrapAll: function(e) {
							if (this[0]) {
								x(this[0]).before(e = x(e));
								var t;
								while ((t = e.children()).length) e = t.first();
								x(e).append(this)
							}
							return this
						},
						wrapInner: function(e) {
							var n = t(e);
							return this.each(function(t) {
								var r = x(this),
									i = r.contents(),
									s = n ? e.call(this, t) : e;
								i.length ? i.wrapAll(s) : r.append(s)
							})
						},
						unwrap: function() {
							this.parent().each(function() {
								x(this).replaceWith(x(this).children())
							});
							return this
						},
						clone: function() {
							return this.map(function() {
								return this.cloneNode(true)
							})
						},
						hide: function() {
							return this.css("display", "none")
						},
						toggle: function(e) {
							return this.each(function() {
								var t = x(this);
								(e === E ? t.css("display") == "none" : e) ? t.show(): t.hide()
							})
						},
						prev: function(e) {
							return x(this.pluck("previousElementSibling")).filter(e || "*")
						},
						next: function(e) {
							return x(this.pluck("nextElementSibling")).filter(e || "*")
						},
						html: function(e) {
							return 0 in arguments ? this.each(function(t) {
								var n = this.innerHTML;
								x(this).empty().append(m(this, e, t, n))
							}) : 0 in this ? this[0].innerHTML : null
						},
						text: function(e) {
							return 0 in arguments ? this.each(function(t) {
								var n = m(this, e, t, this.textContent);
								this.textContent = n == null ? "" : "" + n
							}) : 0 in this ? this[0].textContent : null
						},
						attr: function(e, t) {
							var n;
							return typeof e == "string" && !(1 in arguments) ? !this.length || this[0].nodeType !== 1 ? E : !(n = this[0].getAttribute(e)) && e in this[0] ? this[0][e] : n : this.each(function(n) {
								if (this.nodeType !== 1) return;
								if (i(e))
									for (S in e) g(this, S, e[S]);
								else g(this, e, m(this, t, n, this.getAttribute(e)))
							})
						},
						removeAttr: function(e) {
							return this.each(function() {
								this.nodeType === 1 && g(this, e)
							})
						},
						prop: function(e, t) {
							e = Q[e] || e;
							return 1 in arguments ? this.each(function(n) {
								this[e] = m(this, t, n, this[e])
							}) : this[0] && this[0][e]
						},
						data: function(e, t) {
							var n = "data-" + e.replace(B, "-$1").toLowerCase();
							var r = 1 in arguments ? this.attr(n, t) : this.attr(n);
							return r !== null ? b(r) : E
						},
						val: function(e) {
							return 0 in arguments ? this.each(function(t) {
								this.value = m(this, e, t, this.value)
							}) : this[0] && (this[0].multiple ? x(this[0]).find("option").filter(function() {
								return this.selected
							}).pluck("value") : this[0].value)
						},
						offset: function(e) {
							if (e) return this.each(function(t) {
								var n = x(this),
									r = m(this, e, t, n.offset()),
									i = n.offsetParent().offset(),
									s = {
										top: r.top - i.top,
										left: r.left - i.left
									};
								if (n.css("position") == "static") s["position"] = "relative";
								n.css(s)
							});
							if (!this.length) return null;
							var t = this[0].getBoundingClientRect();
							return {
								left: t.left + window.pageXOffset,
								top: t.top + window.pageYOffset,
								width: Math.round(t.width),
								height: Math.round(t.height)
							}
						},
						css: function(t, n) {
							if (arguments.length < 2) {
								var r = this[0],
									i = getComputedStyle(r, "");
								if (!r) return;
								if (typeof t == "string") return r.style[$(t)] || i.getPropertyValue(t);
								else if (G(t)) {
									var s = {};
									x.each(G(t) ? t : [t], function(e, t) {
										s[t] = r.style[$(t)] || i.getPropertyValue(t)
									});
									return s
								}
							}
							var o = "";
							if (e(t) == "string") {
								if (!n && n !== 0) this.each(function() {
									this.style.removeProperty(f(t))
								});
								else o = f(t) + ":" + c(t, n)
							} else {
								for (S in t)
									if (!t[S] && t[S] !== 0) this.each(function() {
										this.style.removeProperty(f(S))
									});
									else o += f(S) + ":" + c(S, t[S]) + ";"
							}
							return this.each(function() {
								this.style.cssText += ";" + o
							})
						},
						index: function(e) {
							return e ? this.indexOf(x(e)[0]) : this.parent().children().indexOf(this[0])
						},
						hasClass: function(e) {
							if (!e) return false;
							return N.some.call(this, function(e) {
								return this.test(y(e))
							}, l(e))
						},
						addClass: function(e) {
							if (!e) return this;
							return this.each(function(t) {
								T = [];
								var n = y(this),
									r = m(this, e, t, n);
								r.split(/\s+/g).forEach(function(e) {
									if (!x(this).hasClass(e)) T.push(e)
								}, this);
								T.length && y(this, n + (n ? " " : "") + T.join(" "))
							})
						},
						removeClass: function(e) {
							return this.each(function(t) {
								if (e === E) return y(this, "");
								T = y(this);
								m(this, e, t, T).split(/\s+/g).forEach(function(e) {
									T = T.replace(l(e), " ")
								});
								y(this, T.trim())
							})
						},
						toggleClass: function(e, t) {
							if (!e) return this;
							return this.each(function(n) {
								var r = x(this),
									i = m(this, e, n, y(this));
								i.split(/\s+/g).forEach(function(e) {
									(t === E ? !r.hasClass(e) : t) ? r.addClass(e): r.removeClass(e)
								})
							})
						},
						scrollTop: function(e) {
							if (!this.length) return;
							var t = "scrollTop" in this[0];
							if (e === E) return t ? this[0].scrollTop : this[0].pageYOffset;
							return this.each(t ? function() {
								this.scrollTop = e
							} : function() {
								this.scrollTo(this.scrollX, e)
							})
						},
						scrollLeft: function(e) {
							if (!this.length) return;
							var t = "scrollLeft" in this[0];
							if (e === E) return t ? this[0].scrollLeft : this[0].pageXOffset;
							return this.each(t ? function() {
								this.scrollLeft = e
							} : function() {
								this.scrollTo(e, this.scrollY)
							})
						},
						position: function() {
							if (!this.length) return;
							var e = this[0],
								t = this.offsetParent(),
								n = this.offset(),
								r = H.test(t[0].nodeName) ? {
									top: 0,
									left: 0
								} : t.offset();
							n.top -= parseFloat(x(e).css("margin-top")) || 0;
							n.left -= parseFloat(x(e).css("margin-left")) || 0;
							r.top += parseFloat(x(t[0]).css("border-top-width")) || 0;
							r.left += parseFloat(x(t[0]).css("border-left-width")) || 0;
							return {
								top: n.top - r.top,
								left: n.left - r.left
							}
						},
						offsetParent: function() {
							return this.map(function() {
								var e = this.offsetParent || L.body;
								while (e && !H.test(e.nodeName) && x(e).css("position") == "static") e = e.offsetParent;
								return e
							})
						}
					};
					x.fn.detach = x.fn.remove;
					["width", "height"].forEach(function(e) {
						var t = e.replace(/./, function(e) {
							return e[0].toUpperCase()
						});
						x.fn[e] = function(i) {
							var s, o = this[0];
							if (i === E) return n(o) ? o["inner" + t] : r(o) ? o.documentElement["scroll" + t] : (s = this.offset()) && s[e];
							else return this.each(function(t) {
								o = x(this);
								o.css(e, m(this, i, t, o[e]()))
							})
						}
					});
					F.forEach(function(t, n) {
						var r = n % 2;
						x.fn[t] = function() {
							var t, i = x.map(arguments, function(n) {
									t = e(n);
									return t == "object" || t == "array" || n == null ? n : V.fragment(n)
								}),
								s, o = this.length > 1;
							if (i.length < 1) return this;
							return this.each(function(e, t) {
								s = r ? t : t.parentNode;
								t = n == 0 ? t.nextSibling : n == 1 ? t.firstChild : n == 2 ? t : null;
								var u = L.documentElement.contains(s);
								i.forEach(function(e) {
									if (o) e = e.cloneNode(true);
									else if (!s) return x(e).remove();
									s.insertBefore(e, t);
									if (u) w(e, function(e) {
										if (e.nodeName != null && e.nodeName.toUpperCase() === "SCRIPT" && (!e.type || e.type === "text/javascript") && !e.src) window["eval"].call(window, e.innerHTML)
									})
								})
							})
						};
						x.fn[r ? t + "To" : "insert" + (n ? "Before" : "After")] = function(e) {
							x(e)[t](this);
							return this
						}
					});
					V.Z.prototype = x.fn;
					V.uniq = J;
					V.deserializeValue = b;
					x.zepto = V;
					return x
				}();
				window.Zepto = Zepto;
				window.$ === undefined && (window.$ = Zepto);
				(function(e) {
					function t(e) {
						return e._zid || (e._zid = c++)
					}

					function n(e, n, s, o) {
						n = r(n);
						if (n.ns) var u = i(n.ns);
						return (m[t(e)] || []).filter(function(e) {
							return e && (!n.e || e.e == n.e) && (!n.ns || u.test(e.ns)) && (!s || t(e.fn) === t(s)) && (!o || e.sel == o)
						})
					}

					function r(e) {
						var t = ("" + e).split(".");
						return {
							e: t[0],
							ns: t.slice(1).sort().join(" ")
						}
					}

					function i(e) {
						return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
					}

					function s(e, t) {
						return e.del && !y && e.e in b || !!t
					}

					function o(e) {
						return w[e] || y && b[e] || e
					}

					function u(n, i, u, a, l, c, p) {
						var d = t(n),
							v = m[d] || (m[d] = []);
						i.split(/\s/).forEach(function(t) {
							if (t == "ready") return e(document).ready(u);
							var i = r(t);
							i.fn = u;
							i.sel = l;
							if (i.e in w) u = function(t) {
								var n = t.relatedTarget;
								if (!n || n !== this && !e.contains(this, n)) return i.fn.apply(this, arguments)
							};
							i.del = c;
							var d = c || u;
							i.proxy = function(e) {
								e = f(e);
								if (e.isImmediatePropagationStopped()) return;
								e.data = a;
								var t = d.apply(n, e._args == h ? [e] : [e].concat(e._args));
								if (t === false) e.preventDefault(), e.stopPropagation();
								return t
							};
							i.i = v.length;
							v.push(i);
							if ("addEventListener" in n) n.addEventListener(o(i.e), i.proxy, s(i, p))
						})
					}

					function a(e, r, i, u, a) {
						var f = t(e);
						(r || "").split(/\s/).forEach(function(t) {
							n(e, t, i, u).forEach(function(t) {
								delete m[f][t.i];
								if ("removeEventListener" in e) e.removeEventListener(o(t.e), t.proxy, s(t, a))
							})
						})
					}

					function f(t, n) {
						if (n || !t.isDefaultPrevented) {
							n || (n = t);
							e.each(T, function(e, r) {
								var i = n[e];
								t[e] = function() {
									this[r] = E;
									return i && i.apply(n, arguments)
								};
								t[r] = S
							});
							if (n.defaultPrevented !== h ? n.defaultPrevented : "returnValue" in n ? n.returnValue === false : n.getPreventDefault && n.getPreventDefault()) t.isDefaultPrevented = E
						}
						return t
					}

					function l(e) {
						var t, n = {
							originalEvent: e
						};
						for (t in e)
							if (!x.test(t) && e[t] !== h) n[t] = e[t];
						return f(n, e)
					}
					var c = 1,
						h, p = Array.prototype.slice,
						d = e.isFunction,
						v = function(e) {
							return typeof e == "string"
						},
						m = {},
						g = {},
						y = "onfocusin" in window,
						b = {
							focus: "focusin",
							blur: "focusout"
						},
						w = {
							mouseenter: "mouseover",
							mouseleave: "mouseout"
						};
					g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents";
					e.event = {
						add: u,
						remove: a
					};
					e.proxy = function(n, r) {
						var i = 2 in arguments && p.call(arguments, 2);
						if (d(n)) {
							var s = function() {
								return n.apply(r, i ? i.concat(p.call(arguments)) : arguments)
							};
							s._zid = t(n);
							return s
						} else if (v(r)) {
							if (i) {
								i.unshift(n[r], n);
								return e.proxy.apply(null, i)
							} else {
								return e.proxy(n[r], n)
							}
						} else {
							throw new TypeError("expected function")
						}
					};
					e.fn.bind = function(e, t, n) {
						return this.on(e, t, n)
					};
					e.fn.unbind = function(e, t) {
						return this.off(e, t)
					};
					e.fn.one = function(e, t, n, r) {
						return this.on(e, t, n, r, 1)
					};
					var E = function() {
							return true
						},
						S = function() {
							return false
						},
						x = /^([A-Z]|returnValue$|layer[XY]$)/,
						T = {
							preventDefault: "isDefaultPrevented",
							stopImmediatePropagation: "isImmediatePropagationStopped",
							stopPropagation: "isPropagationStopped"
						};
					e.fn.delegate = function(e, t, n) {
						return this.on(t, e, n)
					};
					e.fn.undelegate = function(e, t, n) {
						return this.off(t, e, n)
					};
					e.fn.live = function(t, n) {
						e(document.body).delegate(this.selector, t, n);
						return this
					};
					e.fn.die = function(t, n) {
						e(document.body).undelegate(this.selector, t, n);
						return this
					};
					e.fn.on = function(t, n, r, i, s) {
						var o, f, c = this;
						if (t && !v(t)) {
							e.each(t, function(e, t) {
								c.on(e, n, r, t, s)
							});
							return c
						}
						if (!v(n) && !d(i) && i !== false) i = r, r = n, n = h;
						if (d(r) || r === false) i = r, r = h;
						if (i === false) i = S;
						return c.each(function(c, h) {
							if (s) o = function(e) {
								a(h, e.type, i);
								return i.apply(this, arguments)
							};
							if (n) f = function(t) {
								var r, s = e(t.target).closest(n, h).get(0);
								if (s && s !== h) {
									r = e.extend(l(t), {
										currentTarget: s,
										liveFired: h
									});
									return (o || i).apply(s, [r].concat(p.call(arguments, 1)))
								}
							};
							u(h, t, i, r, n, f || o)
						})
					};
					e.fn.off = function(t, n, r) {
						var i = this;
						if (t && !v(t)) {
							e.each(t, function(e, t) {
								i.off(e, n, t)
							});
							return i
						}
						if (!v(n) && !d(r) && r !== false) r = n, n = h;
						if (r === false) r = S;
						return i.each(function() {
							a(this, t, r, n)
						})
					};
					e.fn.trigger = function(t, n) {
						t = v(t) || e.isPlainObject(t) ? e.Event(t) : f(t);
						t._args = n;
						return this.each(function() {
							if ("dispatchEvent" in this) this.dispatchEvent(t);
							else e(this).triggerHandler(t, n)
						})
					};
					e.fn.triggerHandler = function(t, r) {
						var i, s;
						this.each(function(o, u) {
							i = l(v(t) ? e.Event(t) : t);
							i._args = r;
							i.target = u;
							e.each(n(u, t.type || t), function(e, t) {
								s = t.proxy(i);
								if (i.isImmediatePropagationStopped()) return false
							})
						});
						return s
					};
					("focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select keydown keypress keyup error").split(" ").forEach(function(t) {
						e.fn[t] = function(e) {
							return e ? this.bind(t, e) : this.trigger(t)
						}
					});
					["focus", "blur"].forEach(function(t) {
						e.fn[t] = function(e) {
							if (e) this.bind(t, e);
							else this.each(function() {
								try {
									this[t]()
								} catch (e) {}
							});
							return this
						}
					});
					e.Event = function(e, t) {
						if (!v(e)) t = e, e = t.type;
						var n = document.createEvent(g[e] || "Events"),
							r = true;
						if (t)
							for (var i in t) i == "bubbles" ? r = !!t[i] : n[i] = t[i];
						n.initEvent(e, r, true);
						return f(n)
					}
				})(Zepto);
				(function($) {
					function triggerAndReturn(e, t, n) {
						var r = $.Event(t);
						$(e).trigger(r, n);
						return !r.isDefaultPrevented()
					}

					function triggerGlobal(e, t, n, r) {
						if (e.global) return triggerAndReturn(t || document, n, r)
					}

					function ajaxStart(e) {
						if (e.global && $.active++ === 0) triggerGlobal(e, null, "ajaxStart")
					}

					function ajaxStop(e) {
						if (e.global && !--$.active) triggerGlobal(e, null, "ajaxStop")
					}

					function ajaxBeforeSend(e, t) {
						var n = t.context;
						if (t.beforeSend.call(n, e, t) === false || triggerGlobal(t, n, "ajaxBeforeSend", [e, t]) === false) return false;
						triggerGlobal(t, n, "ajaxSend", [e, t])
					}

					function ajaxSuccess(e, t, n, r) {
						var i = n.context,
							s = "success";
						n.success.call(i, e, s, t);
						if (r) r.resolveWith(i, [e, s, t]);
						triggerGlobal(n, i, "ajaxSuccess", [t, n, e]);
						ajaxComplete(s, t, n)
					}

					function ajaxError(e, t, n, r, i) {
						var s = r.context;
						r.error.call(s, n, t, e);
						if (i) i.rejectWith(s, [n, t, e]);
						triggerGlobal(r, s, "ajaxError", [n, r, e || t]);
						ajaxComplete(t, n, r)
					}

					function ajaxComplete(e, t, n) {
						var r = n.context;
						n.complete.call(r, t, e);
						triggerGlobal(n, r, "ajaxComplete", [t, n]);
						ajaxStop(n)
					}

					function empty() {}

					function mimeToDataType(e) {
						if (e) e = e.split(";", 2)[0];
						return e && (e == htmlType ? "html" : e == jsonType ? "json" : scriptTypeRE.test(e) ? "script" : xmlTypeRE.test(e) && "xml") || "text"
					}

					function appendQuery(e, t) {
						if (t == "") return e;
						return (e + "&" + t).replace(/[&?]{1,2}/, "?")
					}

					function serializeData(e) {
						if (e.processData && e.data && $.type(e.data) != "string") e.data = $.param(e.data, e.traditional);
						if (e.data && (!e.type || e.type.toUpperCase() == "GET")) e.url = appendQuery(e.url, e.data), e.data = undefined
					}

					function parseArguments(e, t, n, r) {
						if ($.isFunction(t)) r = n, n = t, t = undefined;
						if (!$.isFunction(n)) r = n, n = undefined;
						return {
							url: e,
							data: t,
							success: n,
							dataType: r
						}
					}

					function serialize(e, t, n, r) {
						var i, s = $.isArray(t),
							o = $.isPlainObject(t);
						$.each(t, function(t, u) {
							i = $.type(u);
							if (r) t = n ? r : r + "[" + (o || i == "object" || i == "array" ? t : "") + "]";
							if (!r && s) e.add(u.name, u.value);
							else if (i == "array" || !n && i == "object") serialize(e, u, n, t);
							else e.add(t, u)
						})
					}
					var jsonpID = 0,
						document = window.document,
						key, name, rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
						scriptTypeRE = /^(?:text|application)\/javascript/i,
						xmlTypeRE = /^(?:text|application)\/xml/i,
						jsonType = "application/json",
						htmlType = "text/html",
						blankRE = /^\s*$/;
					$.active = 0;
					$.ajaxJSONP = function(e, t) {
						if (!("type" in e)) return $.ajax(e);
						var n = e.jsonpCallback,
							r = ($.isFunction(n) ? n() : n) || "jsonp" + ++jsonpID,
							i = document.createElement("script"),
							s = window[r],
							o, u = function(e) {
								$(i).triggerHandler("error", e || "abort")
							},
							a = {
								abort: u
							},
							f;
						if (t) t.promise(a);
						$(i).on("load error", function(n, u) {
							clearTimeout(f);
							$(i).off().remove();
							if (n.type == "error" || !o) {
								ajaxError(null, u || "error", a, e, t)
							} else {
								ajaxSuccess(o[0], a, e, t)
							}
							window[r] = s;
							if (o && $.isFunction(s)) s(o[0]);
							s = o = undefined
						});
						if (ajaxBeforeSend(a, e) === false) {
							u("abort");
							return a
						}
						window[r] = function() {
							o = arguments
						};
						i.src = e.url.replace(/\?(.+)=\?/, "?$1=" + r);
						document.head.appendChild(i);
						if (e.timeout > 0) f = setTimeout(function() {
							u("timeout")
						}, e.timeout);
						return a
					};
					$.ajaxSettings = {
						type: "GET",
						beforeSend: empty,
						success: empty,
						error: empty,
						complete: empty,
						context: null,
						global: true,
						xhr: function() {
							return new window.XMLHttpRequest
						},
						accepts: {
							script: "text/javascript, application/javascript, application/x-javascript",
							json: jsonType,
							xml: "application/xml, text/xml",
							html: htmlType,
							text: "text/plain"
						},
						crossDomain: false,
						timeout: 0,
						processData: true,
						cache: true
					};
					$.ajax = function(options) {
						var settings = $.extend({}, options || {}),
							deferred = $.Deferred && $.Deferred();
						for (key in $.ajaxSettings)
							if (settings[key] === undefined) settings[key] = $.ajaxSettings[key];
						ajaxStart(settings);
						if (!settings.crossDomain) settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host;
						if (!settings.url) settings.url = window.location.toString();
						serializeData(settings);
						if (settings.cache === false) settings.url = appendQuery(settings.url, "_=" + Date.now());
						var dataType = settings.dataType,
							hasPlaceholder = /\?.+=\?/.test(settings.url);
						if (dataType == "jsonp" || hasPlaceholder) {
							if (!hasPlaceholder) settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + "=?" : settings.jsonp === false ? "" : "callback=?");
							return $.ajaxJSONP(settings, deferred)
						}
						var mime = settings.accepts[dataType],
							headers = {},
							setHeader = function(e, t) {
								headers[e.toLowerCase()] = [e, t]
							},
							protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
							xhr = settings.xhr(),
							nativeSetHeader = xhr.setRequestHeader,
							abortTimeout;
						if (deferred) deferred.promise(xhr);
						if (!settings.crossDomain) setHeader("X-Requested-With", "XMLHttpRequest");
						setHeader("Accept", mime || "*/*");
						if (mime = settings.mimeType || mime) {
							if (mime.indexOf(",") > -1) mime = mime.split(",", 2)[0];
							xhr.overrideMimeType && xhr.overrideMimeType(mime)
						}
						if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() != "GET") setHeader("Content-Type", settings.contentType || "application/x-www-form-urlencoded");
						if (settings.headers)
							for (name in settings.headers) setHeader(name, settings.headers[name]);
						xhr.setRequestHeader = setHeader;
						xhr.onreadystatechange = function() {
							if (xhr.readyState == 4) {
								xhr.onreadystatechange = empty;
								clearTimeout(abortTimeout);
								var result, error = false;
								if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == "file:") {
									dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader("content-type"));
									result = xhr.responseText;
									try {
										if (dataType == "script")(1, eval)(result);
										else if (dataType == "xml") result = xhr.responseXML;
										else if (dataType == "json") result = blankRE.test(result) ? null : $.parseJSON(result)
									} catch (e) {
										error = e
									}
									if (error) ajaxError(error, "parsererror", xhr, settings, deferred);
									else ajaxSuccess(result, xhr, settings, deferred)
								} else {
									ajaxError(xhr.statusText || null, xhr.status ? "error" : "abort", xhr, settings, deferred)
								}
							}
						};
						if (ajaxBeforeSend(xhr, settings) === false) {
							xhr.abort();
							ajaxError(null, "abort", xhr, settings, deferred);
							return xhr
						}
						if (settings.xhrFields)
							for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name];
						var async = "async" in settings ? settings.async : true;
						xhr.open(settings.type, settings.url, async, settings.username, settings.password);
						for (name in headers) nativeSetHeader.apply(xhr, headers[name]);
						if (settings.timeout > 0) abortTimeout = setTimeout(function() {
							xhr.onreadystatechange = empty;
							xhr.abort();
							ajaxError(null, "timeout", xhr, settings, deferred)
						}, settings.timeout);
						xhr.send(settings.data ? settings.data : null);
						return xhr
					};
					$.get = function() {
						return $.ajax(parseArguments.apply(null, arguments))
					};
					$.post = function() {
						var e = parseArguments.apply(null, arguments);
						e.type = "POST";
						return $.ajax(e)
					};
					$.getJSON = function() {
						var e = parseArguments.apply(null, arguments);
						e.dataType = "json";
						return $.ajax(e)
					};
					$.fn.load = function(e, t, n) {
						if (!this.length) return this;
						var r = this,
							i = e.split(/\s/),
							s, o = parseArguments(e, t, n),
							u = o.success;
						if (i.length > 1) o.url = i[0], s = i[1];
						o.success = function(e) {
							r.html(s ? $("<div>").html(e.replace(rscript, "")).find(s) : e);
							u && u.apply(r, arguments)
						};
						$.ajax(o);
						return this
					};
					var escape = encodeURIComponent;
					$.param = function(e, t) {
						var n = [];
						n.add = function(e, t) {
							this.push(escape(e) + "=" + escape(t))
						};
						serialize(n, e, t);
						return n.join("&").replace(/%20/g, "+")
					}
				})(Zepto);
				(function(e) {
					e.fn.serializeArray = function() {
						var t = [],
							n;
						e([].slice.call(this.get(0).elements)).each(function() {
							n = e(this);
							var r = n.attr("type");
							if (this.nodeName.toLowerCase() != "fieldset" && !this.disabled && r != "submit" && r != "reset" && r != "button" && (r != "radio" && r != "checkbox" || this.checked)) t.push({
								name: n.attr("name"),
								value: n.val()
							})
						});
						return t
					};
					e.fn.serialize = function() {
						var e = [];
						this.serializeArray().forEach(function(t) {
							e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
						});
						return e.join("&")
					};
					e.fn.submit = function(t) {
						if (t) this.bind("submit", t);
						else if (this.length) {
							var n = e.Event("submit");
							this.eq(0).trigger(n);
							if (!n.isDefaultPrevented()) this.get(0).submit()
						}
						return this
					}
				})(Zepto);
				(function(e) {
					if (!("__proto__" in {})) {
						e.extend(e.zepto, {
							Z: function(t, n) {
								t = t || [];
								e.extend(t, e.fn);
								t.selector = n || "";
								t.__Z = true;
								return t
							},
							isZ: function(t) {
								return e.type(t) === "array" && "__Z" in t
							}
						})
					}
					try {
						getComputedStyle(undefined)
					} catch (t) {
						var n = getComputedStyle;
						window.getComputedStyle = function(e) {
							try {
								return n(e)
							} catch (t) {
								return null
							}
						}
					}
				})(Zepto);
				(function(e) {
					function t(e) {
						var t = this.os = {},
							n = this.browser = {},
							r = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
							i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
							s = !!e.match(/\(Macintosh\; Intel /),
							o = e.match(/(iPad).*OS\s([\d_]+)/),
							u = e.match(/(iPod)(.*OS\s([\d_]+))?/),
							a = !o && e.match(/(iPhone\sOS)\s([\d_]+)/),
							f = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
							l = e.match(/Windows Phone ([\d.]+)/),
							c = f && e.match(/TouchPad/),
							h = e.match(/Kindle\/([\d.]+)/),
							p = e.match(/Silk\/([\d._]+)/),
							d = e.match(/(BlackBerry).*Version\/([\d.]+)/),
							v = e.match(/(BB10).*Version\/([\d.]+)/),
							m = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
							g = e.match(/PlayBook/),
							y = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
							b = e.match(/Firefox\/([\d.]+)/),
							w = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
							E = !y && e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
							S = E || e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
						if (n.webkit = !!r) n.version = r[1];
						if (i) t.android = true, t.version = i[2];
						if (a && !u) t.ios = t.iphone = true, t.version = a[2].replace(/_/g, ".");
						if (o) t.ios = t.ipad = true, t.version = o[2].replace(/_/g, ".");
						if (u) t.ios = t.ipod = true, t.version = u[3] ? u[3].replace(/_/g, ".") : null;
						if (l) t.wp = true, t.version = l[1];
						if (f) t.webos = true, t.version = f[2];
						if (c) t.touchpad = true;
						if (d) t.blackberry = true, t.version = d[2];
						if (v) t.bb10 = true, t.version = v[2];
						if (m) t.rimtabletos = true, t.version = m[2];
						if (g) n.playbook = true;
						if (h) t.kindle = true, t.version = h[1];
						if (p) n.silk = true, n.version = p[1];
						if (!p && t.android && e.match(/Kindle Fire/)) n.silk = true;
						if (y) n.chrome = true, n.version = y[1];
						if (b) n.firefox = true, n.version = b[1];
						if (w) n.ie = true, n.version = w[1];
						if (S && (s || t.ios)) {
							n.safari = true;
							if (s) n.version = S[1]
						}
						if (E) n.webview = true;
						t.tablet = !!(o || g || i && !e.match(/Mobile/) || b && e.match(/Tablet/) || w && !e.match(/Phone/) && e.match(/Touch/));
						t.phone = !!(!t.tablet && !t.ipod && (i || a || f || d || v || y && e.match(/Android/) || y && e.match(/CriOS\/([\d.]+)/) || b && e.match(/Mobile/) || w && e.match(/Touch/)))
					}
					t.call(e, navigator.userAgent);
					e.__detect = t
				})(Zepto);
				(function(e) {
					function t(t, r) {
						var a = t[u],
							f = a && i[a];
						if (r === undefined) return f || n(t);
						else {
							if (f) {
								if (r in f) return f[r];
								var l = o(r);
								if (l in f) return f[l]
							}
							return s.call(e(t), r)
						}
					}

					function n(t, n, s) {
						var a = t[u] || (t[u] = ++e.uuid),
							f = i[a] || (i[a] = r(t));
						if (n !== undefined) f[o(n)] = s;
						return f
					}

					function r(t) {
						var n = {};
						e.each(t.attributes || a, function(t, r) {
							if (r.name.indexOf("data-") == 0) n[o(r.name.replace("data-", ""))] = e.zepto.deserializeValue(r.value)
						});
						return n
					}
					var i = {},
						s = e.fn.data,
						o = e.camelCase,
						u = e.expando = "Zepto" + +(new Date),
						a = [];
					e.fn.data = function(r, i) {
						return i === undefined ? e.isPlainObject(r) ? this.each(function(t, i) {
							e.each(r, function(e, t) {
								n(i, e, t)
							})
						}) : 0 in this ? t(this[0], r) : undefined : this.each(function() {
							n(this, r, i)
						})
					};
					e.fn.removeData = function(t) {
						if (typeof t == "string") t = t.split(/\s+/);
						return this.each(function() {
							var n = this[u],
								r = n && i[n];
							if (r) e.each(t || r, function(e) {
								delete r[t ? o(this) : e]
							})
						})
					};
					["remove", "empty"].forEach(function(t) {
						var n = e.fn[t];
						e.fn[t] = function() {
							var e = this.find("*");
							if (t === "remove") e = e.add(this);
							e.removeData();
							return n.call(this)
						}
					})
				})(Zepto);
				(function(e) {
					function t(n) {
						var r = [
								["resolve", "done", e.Callbacks({
									once: 1,
									memory: 1
								}), "resolved"],
								["reject", "fail", e.Callbacks({
									once: 1,
									memory: 1
								}), "rejected"],
								["notify", "progress", e.Callbacks({
									memory: 1
								})]
							],
							i = "pending",
							s = {
								state: function() {
									return i
								},
								always: function() {
									o.done(arguments).fail(arguments);
									return this
								},
								then: function() {
									var n = arguments;
									return t(function(t) {
										e.each(r, function(r, i) {
											var u = e.isFunction(n[r]) && n[r];
											o[i[1]](function() {
												var n = u && u.apply(this, arguments);
												if (n && e.isFunction(n.promise)) {
													n.promise().done(t.resolve).fail(t.reject).progress(t.notify)
												} else {
													var r = this === s ? t.promise() : this,
														o = u ? [n] : arguments;
													t[i[0] + "With"](r, o)
												}
											})
										});
										n = null
									}).promise()
								},
								promise: function(t) {
									return t != null ? e.extend(t, s) : s
								}
							},
							o = {};
						e.each(r, function(e, t) {
							var n = t[2],
								u = t[3];
							s[t[1]] = n.add;
							if (u) {
								n.add(function() {
									i = u
								}, r[e ^ 1][2].disable, r[2][2].lock)
							}
							o[t[0]] = function() {
								o[t[0] + "With"](this === o ? s : this, arguments);
								return this
							};
							o[t[0] + "With"] = n.fireWith
						});
						s.promise(o);
						if (n) n.call(o, o);
						return o
					}
					var n = Array.prototype.slice;
					e.when = function(r) {
						var i = n.call(arguments),
							s = i.length,
							o = 0,
							u = s !== 1 || r && e.isFunction(r.promise) ? s : 0,
							a = u === 1 ? r : t(),
							f, l, c, h = function(e, t, r) {
								return function(i) {
									t[e] = this;
									r[e] = arguments.length > 1 ? n.call(arguments) : i;
									if (r === f) {
										a.notifyWith(t, r)
									} else if (!--u) {
										a.resolveWith(t, r)
									}
								}
							};
						if (s > 1) {
							f = new Array(s);
							l = new Array(s);
							c = new Array(s);
							for (; o < s; ++o) {
								if (i[o] && e.isFunction(i[o].promise)) {
									i[o].promise().done(h(o, c, i)).fail(a.reject).progress(h(o, l, f))
								} else {
									--u
								}
							}
						}
						if (!u) a.resolveWith(c, i);
						return a.promise()
					};
					e.Deferred = t
				})(Zepto);
				(function(e) {
					e.Callbacks = function(t) {
						t = e.extend({}, t);
						var n, r, i, s, o, u, a = [],
							f = !t.once && [],
							l = function(e) {
								n = t.memory && e;
								r = true;
								u = s || 0;
								s = 0;
								o = a.length;
								i = true;
								for (; a && u < o; ++u) {
									if (a[u].apply(e[0], e[1]) === false && t.stopOnFalse) {
										n = false;
										break
									}
								}
								i = false;
								if (a) {
									if (f) f.length && l(f.shift());
									else if (n) a.length = 0;
									else c.disable()
								}
							},
							c = {
								add: function() {
									if (a) {
										var r = a.length,
											u = function(n) {
												e.each(n, function(e, n) {
													if (typeof n === "function") {
														if (!t.unique || !c.has(n)) a.push(n)
													} else if (n && n.length && typeof n !== "string") u(n)
												})
											};
										u(arguments);
										if (i) o = a.length;
										else if (n) {
											s = r;
											l(n)
										}
									}
									return this
								},
								remove: function() {
									if (a) {
										e.each(arguments, function(t, n) {
											var r;
											while ((r = e.inArray(n, a, r)) > -1) {
												a.splice(r, 1);
												if (i) {
													if (r <= o) --o;
													if (r <= u) --u
												}
											}
										})
									}
									return this
								},
								has: function(t) {
									return !!(a && (t ? e.inArray(t, a) > -1 : a.length))
								},
								empty: function() {
									o = a.length = 0;
									return this
								},
								disable: function() {
									a = f = n = undefined;
									return this
								},
								disabled: function() {
									return !a
								},
								lock: function() {
									f = undefined;
									if (!n) c.disable();
									return this
								},
								locked: function() {
									return !f
								},
								fireWith: function(e, t) {
									if (a && (!r || f)) {
										t = t || [];
										t = [e, t.slice ? t.slice() : t];
										if (i) f.push(t);
										else l(t)
									}
									return this
								},
								fire: function() {
									return c.fireWith(this, arguments)
								},
								fired: function() {
									return !!r
								}
							};
						return c
					}
				})(Zepto);
				(function() {
					var e = QApp.util;
					var t = {
						eventType: "tap"
					};
					QApp.addPlugin("zepto", t, function(t, n) {
						var r = t.options.ready;
						if (e.isFunction(r)) {
							t.options.ready = function() {
								var e = Zepto(this.root);
								r.call(this, e)
							}
						}
						t.on("loaded", function() {
							if (t.options.bindActions) {
								e.each(t.options.bindActions, function(r, i) {
									var s = r.split(":"),
										o = s[0],
										u = s[1] || n.eventType;
									if (e.isFunction(i)) {
										Zepto(t.root).delegate(o, u, function(e) {
											return i.call(t, e)
										})
									} else {
										Zepto(t.root).delegate(o, u, function(n) {
											if (e.isFunction(t[i])) {
												return t[i].call(t, n)
											}
										})
									}
								})
							}
						})
					})
				})()
			}(module.exports, module, __context);
			__context.____MODULES["da73d8a6f60c849ff1cbc63ff4884540"] = module.exports
		})(this);
		(function(e) {
			var t = {
				id: "32bc943382a84ffe82079c67d041a72d",
				filename: "spa.js",
				exports: {}
			};
			if (!e.____MODULES) {
				e.____MODULES = {}
			}
			var n = function(t, n, r) {
				e.____MODULES["2c088de690d2f86994b0feec93475475"];
				e.____MODULES["e24642d9bb10d27b80ed20283fa2d1ef"];
				e.____MODULES["9d98ca07b73221c493c790bbc2226633"];
				e.____MODULES["7c5d57f1f2a98b39b42b95fcc735e710"];
				e.____MODULES["bd2141162d398feaa2ba14dc245d2bba"];
				e.____MODULES["52550815c02f4b1ebb5e458316e9f7b4"];
				e.____MODULES["3501632c175ff50fbe38cfb6a85d2296"];
				e.____MODULES["06db39915d027f68bc965950f4815a67"];
				e.____MODULES["2ab9cd74935222560bb8e728582f85a2"];
				e.____MODULES["8e388858412f481def4b54146d6a335f"];
				e.____MODULES["da73d8a6f60c849ff1cbc63ff4884540"];
				QApp.config({})
			}(t.exports, t, e);
			e.____MODULES["32bc943382a84ffe82079c67d041a72d"] = t.exports
		})(this)
	}(module.exports, module, __context);
	__context.____MODULES["b339b78823a7d4e256e118d08f80004c"] = module.exports
})(this);
(function(e) {
	var t = {
		id: "cd2bffb7f2508310dfd41bb26a34f44d",
		filename: "swiper-3.3.1.min.js",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(e, t, n) {
		! function() {
			"use strict";

			function e(e) {
				e.fn.swiper = function(t) {
					var r;
					return e(this).each(function() {
						var e = new n(this, t);
						r || (r = e)
					}), r
				}
			}
			var t, n = function(e, i) {
				function s(e) {
					return Math.floor(e)
				}

				function o() {
					E.autoplayTimeoutId = setTimeout(function() {
						E.params.loop ? (E.fixLoop(), E._slideNext(), E.emit("onAutoplay", E)) : E.isEnd ? i.autoplayStopOnLast ? E.stopAutoplay() : (E._slideTo(0), E.emit("onAutoplay", E)) : (E._slideNext(), E.emit("onAutoplay", E))
					}, E.params.autoplay)
				}

				function u(e, n) {
					var r = t(e.target);
					if (!r.is(n))
						if ("string" == typeof n) r = r.parents(n);
						else if (n.nodeType) {
						var i;
						return r.parents().each(function(e, t) {
							t === n && (i = n)
						}), i ? n : void 0
					}
					if (0 !== r.length) return r[0]
				}

				function f(e, t) {
					t = t || {};
					var n = window.MutationObserver || window.WebkitMutationObserver,
						r = new n(function(e) {
							e.forEach(function(e) {
								E.onResize(!0), E.emit("onObserverUpdate", E, e)
							})
						});
					r.observe(e, {
						attributes: "undefined" == typeof t.attributes ? !0 : t.attributes,
						childList: "undefined" == typeof t.childList ? !0 : t.childList,
						characterData: "undefined" == typeof t.characterData ? !0 : t.characterData
					}), E.observers.push(r)
				}

				function l(e) {
					e.originalEvent && (e = e.originalEvent);
					var t = e.keyCode || e.charCode;
					if (!E.params.allowSwipeToNext && (E.isHorizontal() && 39 === t || !E.isHorizontal() && 40 === t)) return !1;
					if (!E.params.allowSwipeToPrev && (E.isHorizontal() && 37 === t || !E.isHorizontal() && 38 === t)) return !1;
					if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
						if (37 === t || 39 === t || 38 === t || 40 === t) {
							var n = !1;
							if (E.container.parents(".swiper-slide").length > 0 && 0 === E.container.parents(".swiper-slide-active").length) return;
							var r = {
									left: window.pageXOffset,
									top: window.pageYOffset
								},
								i = window.innerWidth,
								s = window.innerHeight,
								o = E.container.offset();
							E.rtl && (o.left = o.left - E.container[0].scrollLeft);
							for (var u = [
									[o.left, o.top],
									[o.left + E.width, o.top],
									[o.left, o.top + E.height],
									[o.left + E.width, o.top + E.height]
								], a = 0; a < u.length; a++) {
								var f = u[a];
								f[0] >= r.left && f[0] <= r.left + i && f[1] >= r.top && f[1] <= r.top + s && (n = !0)
							}
							if (!n) return
						}
						E.isHorizontal() ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !E.rtl || 37 === t && E.rtl) && E.slideNext(), (37 === t && !E.rtl || 39 === t && E.rtl) && E.slidePrev()) : ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && E.slideNext(), 38 === t && E.slidePrev())
					}
				}

				function c(e) {
					e.originalEvent && (e = e.originalEvent);
					var t = E.mousewheel.event,
						n = 0,
						r = E.rtl ? -1 : 1;
					if ("mousewheel" === t)
						if (E.params.mousewheelForceToAxis)
							if (E.isHorizontal()) {
								if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
								n = e.wheelDeltaX * r
							} else {
								if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
								n = e.wheelDeltaY
							} else n = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * r : -e.wheelDeltaY;
					else if ("DOMMouseScroll" === t) n = -e.detail;
					else if ("wheel" === t)
						if (E.params.mousewheelForceToAxis)
							if (E.isHorizontal()) {
								if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
								n = -e.deltaX * r
							} else {
								if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
								n = -e.deltaY
							} else n = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * r : -e.deltaY;
					if (0 !== n) {
						if (E.params.mousewheelInvert && (n = -n), E.params.freeMode) {
							var i = E.getWrapperTranslate() + n * E.params.mousewheelSensitivity,
								s = E.isBeginning,
								o = E.isEnd;
							if (i >= E.minTranslate() && (i = E.minTranslate()), i <= E.maxTranslate() && (i = E.maxTranslate()), E.setWrapperTransition(0), E.setWrapperTranslate(i), E.updateProgress(), E.updateActiveIndex(), (!s && E.isBeginning || !o && E.isEnd) && E.updateClasses(), E.params.freeModeSticky ? (clearTimeout(E.mousewheel.timeout), E.mousewheel.timeout = setTimeout(function() {
									E.slideReset()
								}, 300)) : E.params.lazyLoading && E.lazy && E.lazy.load(), 0 === i || i === E.maxTranslate()) return
						} else {
							if ((new window.Date).getTime() - E.mousewheel.lastScrollTime > 60)
								if (0 > n)
									if (E.isEnd && !E.params.loop || E.animating) {
										if (E.params.mousewheelReleaseOnEdges) return !0
									} else E.slideNext();
							else if (E.isBeginning && !E.params.loop || E.animating) {
								if (E.params.mousewheelReleaseOnEdges) return !0
							} else E.slidePrev();
							E.mousewheel.lastScrollTime = (new window.Date).getTime()
						}
						return E.params.autoplay && E.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
					}
				}

				function h(e, n) {
					e = t(e);
					var r, i, s, o = E.rtl ? -1 : 1;
					r = e.attr("data-swiper-parallax") || "0", i = e.attr("data-swiper-parallax-x"), s = e.attr("data-swiper-parallax-y"), i || s ? (i = i || "0", s = s || "0") : E.isHorizontal() ? (i = r, s = "0") : (s = r, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * n * o + "%" : i * n * o + "px", s = s.indexOf("%") >= 0 ? parseInt(s, 10) * n + "%" : s * n + "px", e.transform("translate3d(" + i + ", " + s + ",0px)")
				}

				function p(e) {
					return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
				}
				if (!(this instanceof n)) return new n(e, i);
				var d = {
						direction: "horizontal",
						touchEventsTarget: "container",
						initialSlide: 0,
						speed: 300,
						autoplay: !1,
						autoplayDisableOnInteraction: !0,
						autoplayStopOnLast: !1,
						iOSEdgeSwipeDetection: !1,
						iOSEdgeSwipeThreshold: 20,
						freeMode: !1,
						freeModeMomentum: !0,
						freeModeMomentumRatio: 1,
						freeModeMomentumBounce: !0,
						freeModeMomentumBounceRatio: 1,
						freeModeSticky: !1,
						freeModeMinimumVelocity: .02,
						autoHeight: !1,
						setWrapperSize: !1,
						virtualTranslate: !1,
						effect: "slide",
						coverflow: {
							rotate: 50,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: !0
						},
						flip: {
							slideShadows: !0,
							limitRotation: !0
						},
						cube: {
							slideShadows: !0,
							shadow: !0,
							shadowOffset: 20,
							shadowScale: .94
						},
						fade: {
							crossFade: !1
						},
						parallax: !1,
						scrollbar: null,
						scrollbarHide: !0,
						scrollbarDraggable: !1,
						scrollbarSnapOnRelease: !1,
						keyboardControl: !1,
						mousewheelControl: !1,
						mousewheelReleaseOnEdges: !1,
						mousewheelInvert: !1,
						mousewheelForceToAxis: !1,
						mousewheelSensitivity: 1,
						hashnav: !1,
						breakpoints: void 0,
						spaceBetween: 0,
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerColumnFill: "column",
						slidesPerGroup: 1,
						centeredSlides: !1,
						slidesOffsetBefore: 0,
						slidesOffsetAfter: 0,
						roundLengths: !1,
						touchRatio: 1,
						touchAngle: 45,
						simulateTouch: !0,
						shortSwipes: !0,
						longSwipes: !0,
						longSwipesRatio: .5,
						longSwipesMs: 300,
						followFinger: !0,
						onlyExternal: !1,
						threshold: 0,
						touchMoveStopPropagation: !0,
						uniqueNavElements: !0,
						pagination: null,
						paginationElement: "span",
						paginationClickable: !1,
						paginationHide: !1,
						paginationBulletRender: null,
						paginationProgressRender: null,
						paginationFractionRender: null,
						paginationCustomRender: null,
						paginationType: "bullets",
						resistance: !0,
						resistanceRatio: .85,
						nextButton: null,
						prevButton: null,
						watchSlidesProgress: !1,
						watchSlidesVisibility: !1,
						grabCursor: !1,
						preventClicks: !0,
						preventClicksPropagation: !0,
						slideToClickedSlide: !1,
						lazyLoading: !1,
						lazyLoadingInPrevNext: !1,
						lazyLoadingInPrevNextAmount: 1,
						lazyLoadingOnTransitionStart: !1,
						preloadImages: !0,
						updateOnImagesReady: !0,
						loop: !1,
						loopAdditionalSlides: 0,
						loopedSlides: null,
						control: void 0,
						controlInverse: !1,
						controlBy: "slide",
						allowSwipeToPrev: !0,
						allowSwipeToNext: !0,
						swipeHandler: null,
						noSwiping: !0,
						noSwipingClass: "swiper-no-swiping",
						slideClass: "swiper-slide",
						slideActiveClass: "swiper-slide-active",
						slideVisibleClass: "swiper-slide-visible",
						slideDuplicateClass: "swiper-slide-duplicate",
						slideNextClass: "swiper-slide-next",
						slidePrevClass: "swiper-slide-prev",
						wrapperClass: "swiper-wrapper",
						bulletClass: "swiper-pagination-bullet",
						bulletActiveClass: "swiper-pagination-bullet-active",
						buttonDisabledClass: "swiper-button-disabled",
						paginationCurrentClass: "swiper-pagination-current",
						paginationTotalClass: "swiper-pagination-total",
						paginationHiddenClass: "swiper-pagination-hidden",
						paginationProgressbarClass: "swiper-pagination-progressbar",
						observer: !1,
						observeParents: !1,
						a11y: !1,
						prevSlideMessage: "Previous slide",
						nextSlideMessage: "Next slide",
						firstSlideMessage: "This is the first slide",
						lastSlideMessage: "This is the last slide",
						paginationBulletMessage: "Go to slide {{index}}",
						runCallbacksOnInit: !0
					},
					v = i && i.virtualTranslate;
				i = i || {};
				var m = {};
				for (var g in i)
					if ("object" != typeof i[g] || null === i[g] || i[g].nodeType || i[g] === window || i[g] === document || "undefined" != typeof r && i[g] instanceof r || "undefined" != typeof jQuery && i[g] instanceof jQuery) m[g] = i[g];
					else {
						m[g] = {};
						for (var y in i[g]) m[g][y] = i[g][y]
					}
				for (var b in d)
					if ("undefined" == typeof i[b]) i[b] = d[b];
					else if ("object" == typeof i[b])
					for (var w in d[b]) "undefined" == typeof i[b][w] && (i[b][w] = d[b][w]);
				var E = this;
				if (E.params = i, E.originalParams = m, E.classNames = [], "undefined" != typeof t && "undefined" != typeof r && (t = r), ("undefined" != typeof t || (t = "undefined" == typeof r ? window.Dom7 || window.Zepto || window.jQuery : r)) && (E.$ = t, E.currentBreakpoint = void 0, E.getActiveBreakpoint = function() {
						if (!E.params.breakpoints) return !1;
						var e, t = !1,
							n = [];
						for (e in E.params.breakpoints) E.params.breakpoints.hasOwnProperty(e) && n.push(e);
						n.sort(function(e, t) {
							return parseInt(e, 10) > parseInt(t, 10)
						});
						for (var r = 0; r < n.length; r++) e = n[r], e >= window.innerWidth && !t && (t = e);
						return t || "max"
					}, E.setBreakpoint = function() {
						var e = E.getActiveBreakpoint();
						if (e && E.currentBreakpoint !== e) {
							var t = e in E.params.breakpoints ? E.params.breakpoints[e] : E.originalParams,
								n = E.params.loop && t.slidesPerView !== E.params.slidesPerView;
							for (var r in t) E.params[r] = t[r];
							E.currentBreakpoint = e, n && E.destroyLoop && E.reLoop(!0)
						}
					}, E.params.breakpoints && E.setBreakpoint(), E.container = t(e), 0 !== E.container.length)) {
					if (E.container.length > 1) {
						var S = [];
						return E.container.each(function() {
							S.push(new n(this, i))
						}), S
					}
					E.container[0].swiper = E, E.container.data("swiper", E), E.classNames.push("swiper-container-" + E.params.direction), E.params.freeMode && E.classNames.push("swiper-container-free-mode"), E.support.flexbox || (E.classNames.push("swiper-container-no-flexbox"), E.params.slidesPerColumn = 1), E.params.autoHeight && E.classNames.push("swiper-container-autoheight"), (E.params.parallax || E.params.watchSlidesVisibility) && (E.params.watchSlidesProgress = !0), ["cube", "coverflow", "flip"].indexOf(E.params.effect) >= 0 && (E.support.transforms3d ? (E.params.watchSlidesProgress = !0, E.classNames.push("swiper-container-3d")) : E.params.effect = "slide"), "slide" !== E.params.effect && E.classNames.push("swiper-container-" + E.params.effect), "cube" === E.params.effect && (E.params.resistanceRatio = 0, E.params.slidesPerView = 1, E.params.slidesPerColumn = 1, E.params.slidesPerGroup = 1, E.params.centeredSlides = !1, E.params.spaceBetween = 0, E.params.virtualTranslate = !0, E.params.setWrapperSize = !1), ("fade" === E.params.effect || "flip" === E.params.effect) && (E.params.slidesPerView = 1, E.params.slidesPerColumn = 1, E.params.slidesPerGroup = 1, E.params.watchSlidesProgress = !0, E.params.spaceBetween = 0, E.params.setWrapperSize = !1, "undefined" == typeof v && (E.params.virtualTranslate = !0)), E.params.grabCursor && E.support.touch && (E.params.grabCursor = !1), E.wrapper = E.container.children("." + E.params.wrapperClass), E.params.pagination && (E.paginationContainer = t(E.params.pagination), E.params.uniqueNavElements && "string" == typeof E.params.pagination && E.paginationContainer.length > 1 && 1 === E.container.find(E.params.pagination).length && (E.paginationContainer = E.container.find(E.params.pagination)), "bullets" === E.params.paginationType && E.params.paginationClickable ? E.paginationContainer.addClass("swiper-pagination-clickable") : E.params.paginationClickable = !1, E.paginationContainer.addClass("swiper-pagination-" + E.params.paginationType)), (E.params.nextButton || E.params.prevButton) && (E.params.nextButton && (E.nextButton = t(E.params.nextButton), E.params.uniqueNavElements && "string" == typeof E.params.nextButton && E.nextButton.length > 1 && 1 === E.container.find(E.params.nextButton).length && (E.nextButton = E.container.find(E.params.nextButton))), E.params.prevButton && (E.prevButton = t(E.params.prevButton), E.params.uniqueNavElements && "string" == typeof E.params.prevButton && E.prevButton.length > 1 && 1 === E.container.find(E.params.prevButton).length && (E.prevButton = E.container.find(E.params.prevButton)))), E.isHorizontal = function() {
						return "horizontal" === E.params.direction
					}, E.rtl = E.isHorizontal() && ("rtl" === E.container[0].dir.toLowerCase() || "rtl" === E.container.css("direction")), E.rtl && E.classNames.push("swiper-container-rtl"), E.rtl && (E.wrongRTL = "-webkit-box" === E.wrapper.css("display")), E.params.slidesPerColumn > 1 && E.classNames.push("swiper-container-multirow"), E.device.android && E.classNames.push("swiper-container-android"), E.container.addClass(E.classNames.join(" ")), E.translate = 0, E.progress = 0, E.velocity = 0, E.lockSwipeToNext = function() {
						E.params.allowSwipeToNext = !1
					}, E.lockSwipeToPrev = function() {
						E.params.allowSwipeToPrev = !1
					}, E.lockSwipes = function() {
						E.params.allowSwipeToNext = E.params.allowSwipeToPrev = !1
					}, E.unlockSwipeToNext = function() {
						E.params.allowSwipeToNext = !0
					}, E.unlockSwipeToPrev = function() {
						E.params.allowSwipeToPrev = !0
					}, E.unlockSwipes = function() {
						E.params.allowSwipeToNext = E.params.allowSwipeToPrev = !0
					}, E.params.grabCursor && (E.container[0].style.cursor = "move", E.container[0].style.cursor = "-webkit-grab", E.container[0].style.cursor = "-moz-grab", E.container[0].style.cursor = "grab"), E.imagesToLoad = [], E.imagesLoaded = 0, E.loadImage = function(e, t, n, r, i) {
						function s() {
							i && i()
						}
						var o;
						e.complete && r ? s() : t ? (o = new window.Image, o.onload = s, o.onerror = s, n && (o.srcset = n), t && (o.src = t)) : s()
					}, E.preloadImages = function() {
						function e() {
							"undefined" != typeof E && null !== E && (void 0 !== E.imagesLoaded && E.imagesLoaded++, E.imagesLoaded === E.imagesToLoad.length && (E.params.updateOnImagesReady && E.update(), E.emit("onImagesReady", E)))
						}
						E.imagesToLoad = E.container.find("img");
						for (var t = 0; t < E.imagesToLoad.length; t++) E.loadImage(E.imagesToLoad[t], E.imagesToLoad[t].currentSrc || E.imagesToLoad[t].getAttribute("src"), E.imagesToLoad[t].srcset || E.imagesToLoad[t].getAttribute("srcset"), !0, e)
					}, E.autoplayTimeoutId = void 0, E.autoplaying = !1, E.autoplayPaused = !1, E.startAutoplay = function() {
						return "undefined" != typeof E.autoplayTimeoutId ? !1 : E.params.autoplay ? E.autoplaying ? !1 : (E.autoplaying = !0, E.emit("onAutoplayStart", E), void o()) : !1
					}, E.stopAutoplay = function(e) {
						E.autoplayTimeoutId && (E.autoplayTimeoutId && clearTimeout(E.autoplayTimeoutId), E.autoplaying = !1, E.autoplayTimeoutId = void 0, E.emit("onAutoplayStop", E))
					}, E.pauseAutoplay = function(e) {
						E.autoplayPaused || (E.autoplayTimeoutId && clearTimeout(E.autoplayTimeoutId), E.autoplayPaused = !0, 0 === e ? (E.autoplayPaused = !1, o()) : E.wrapper.transitionEnd(function() {
							E && (E.autoplayPaused = !1, E.autoplaying ? o() : E.stopAutoplay())
						}))
					}, E.minTranslate = function() {
						return -E.snapGrid[0]
					}, E.maxTranslate = function() {
						return -E.snapGrid[E.snapGrid.length - 1]
					}, E.updateAutoHeight = function() {
						var e = E.slides.eq(E.activeIndex)[0];
						if ("undefined" != typeof e) {
							var t = e.offsetHeight;
							t && E.wrapper.css("height", t + "px")
						}
					}, E.updateContainerSize = function() {
						var e, t;
						e = "undefined" != typeof E.params.width ? E.params.width : E.container[0].clientWidth, t = "undefined" != typeof E.params.height ? E.params.height : E.container[0].clientHeight, 0 === e && E.isHorizontal() || 0 === t && !E.isHorizontal() || (e = e - parseInt(E.container.css("padding-left"), 10) - parseInt(E.container.css("padding-right"), 10), t = t - parseInt(E.container.css("padding-top"), 10) - parseInt(E.container.css("padding-bottom"), 10), E.width = e, E.height = t, E.size = E.isHorizontal() ? E.width : E.height)
					}, E.updateSlidesSize = function() {
						E.slides = E.wrapper.children("." + E.params.slideClass), E.snapGrid = [], E.slidesGrid = [], E.slidesSizesGrid = [];
						var e, t = E.params.spaceBetween,
							n = -E.params.slidesOffsetBefore,
							r = 0,
							i = 0;
						if ("undefined" != typeof E.size) {
							"string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * E.size), E.virtualSize = -t, E.rtl ? E.slides.css({
								marginLeft: "",
								marginTop: ""
							}) : E.slides.css({
								marginRight: "",
								marginBottom: ""
							});
							var o;
							E.params.slidesPerColumn > 1 && (o = Math.floor(E.slides.length / E.params.slidesPerColumn) === E.slides.length / E.params.slidesPerColumn ? E.slides.length : Math.ceil(E.slides.length / E.params.slidesPerColumn) * E.params.slidesPerColumn, "auto" !== E.params.slidesPerView && "row" === E.params.slidesPerColumnFill && (o = Math.max(o, E.params.slidesPerView * E.params.slidesPerColumn)));
							var u, a = E.params.slidesPerColumn,
								f = o / a,
								l = f - (E.params.slidesPerColumn * f - E.slides.length);
							for (e = 0; e < E.slides.length; e++) {
								u = 0;
								var c = E.slides.eq(e);
								if (E.params.slidesPerColumn > 1) {
									var h, p, d;
									"column" === E.params.slidesPerColumnFill ? (p = Math.floor(e / a), d = e - p * a, (p > l || p === l && d === a - 1) && ++d >= a && (d = 0, p++), h = p + d * o / a, c.css({
										"-webkit-box-ordinal-group": h,
										"-moz-box-ordinal-group": h,
										"-ms-flex-order": h,
										"-webkit-order": h,
										order: h
									})) : (d = Math.floor(e / f), p = e - d * f), c.css({
										"margin-top": 0 !== d && E.params.spaceBetween && E.params.spaceBetween + "px"
									}).attr("data-swiper-column", p).attr("data-swiper-row", d)
								}
								"none" !== c.css("display") && ("auto" === E.params.slidesPerView ? (u = E.isHorizontal() ? c.outerWidth(!0) : c.outerHeight(!0), E.params.roundLengths && (u = s(u))) : (u = (E.size - (E.params.slidesPerView - 1) * t) / E.params.slidesPerView, E.params.roundLengths && (u = s(u)), E.isHorizontal() ? E.slides[e].style.width = u + "px" : E.slides[e].style.height = u + "px"), E.slides[e].swiperSlideSize = u, E.slidesSizesGrid.push(u), E.params.centeredSlides ? (n = n + u / 2 + r / 2 + t, 0 === e && (n = n - E.size / 2 - t), Math.abs(n) < .001 && (n = 0), i % E.params.slidesPerGroup === 0 && E.snapGrid.push(n), E.slidesGrid.push(n)) : (i % E.params.slidesPerGroup === 0 && E.snapGrid.push(n), E.slidesGrid.push(n), n = n + u + t), E.virtualSize += u + t, r = u, i++)
							}
							E.virtualSize = Math.max(E.virtualSize, E.size) + E.params.slidesOffsetAfter;
							var v;
							if (E.rtl && E.wrongRTL && ("slide" === E.params.effect || "coverflow" === E.params.effect) && E.wrapper.css({
									width: E.virtualSize + E.params.spaceBetween + "px"
								}), (!E.support.flexbox || E.params.setWrapperSize) && (E.isHorizontal() ? E.wrapper.css({
									width: E.virtualSize + E.params.spaceBetween + "px"
								}) : E.wrapper.css({
									height: E.virtualSize + E.params.spaceBetween + "px"
								})), E.params.slidesPerColumn > 1 && (E.virtualSize = (u + E.params.spaceBetween) * o, E.virtualSize = Math.ceil(E.virtualSize / E.params.slidesPerColumn) - E.params.spaceBetween, E.wrapper.css({
									width: E.virtualSize + E.params.spaceBetween + "px"
								}), E.params.centeredSlides)) {
								for (v = [], e = 0; e < E.snapGrid.length; e++) E.snapGrid[e] < E.virtualSize + E.snapGrid[0] && v.push(E.snapGrid[e]);
								E.snapGrid = v
							}
							if (!E.params.centeredSlides) {
								for (v = [], e = 0; e < E.snapGrid.length; e++) E.snapGrid[e] <= E.virtualSize - E.size && v.push(E.snapGrid[e]);
								E.snapGrid = v, Math.floor(E.virtualSize - E.size) - Math.floor(E.snapGrid[E.snapGrid.length - 1]) > 1 && E.snapGrid.push(E.virtualSize - E.size)
							}
							0 === E.snapGrid.length && (E.snapGrid = [0]), 0 !== E.params.spaceBetween && (E.isHorizontal() ? E.rtl ? E.slides.css({
								marginLeft: t + "px"
							}) : E.slides.css({
								marginRight: t + "px"
							}) : E.slides.css({
								marginBottom: t + "px"
							})), E.params.watchSlidesProgress && E.updateSlidesOffset()
						}
					}, E.updateSlidesOffset = function() {
						for (var e = 0; e < E.slides.length; e++) E.slides[e].swiperSlideOffset = E.isHorizontal() ? E.slides[e].offsetLeft : E.slides[e].offsetTop
					}, E.updateSlidesProgress = function(e) {
						if ("undefined" == typeof e && (e = E.translate || 0), 0 !== E.slides.length) {
							"undefined" == typeof E.slides[0].swiperSlideOffset && E.updateSlidesOffset();
							var t = -e;
							E.rtl && (t = e), E.slides.removeClass(E.params.slideVisibleClass);
							for (var n = 0; n < E.slides.length; n++) {
								var r = E.slides[n],
									i = (t - r.swiperSlideOffset) / (r.swiperSlideSize + E.params.spaceBetween);
								if (E.params.watchSlidesVisibility) {
									var s = -(t - r.swiperSlideOffset),
										o = s + E.slidesSizesGrid[n],
										u = s >= 0 && s < E.size || o > 0 && o <= E.size || 0 >= s && o >= E.size;
									u && E.slides.eq(n).addClass(E.params.slideVisibleClass)
								}
								r.progress = E.rtl ? -i : i
							}
						}
					}, E.updateProgress = function(e) {
						"undefined" == typeof e && (e = E.translate || 0);
						var t = E.maxTranslate() - E.minTranslate(),
							n = E.isBeginning,
							r = E.isEnd;
						0 === t ? (E.progress = 0, E.isBeginning = E.isEnd = !0) : (E.progress = (e - E.minTranslate()) / t, E.isBeginning = E.progress <= 0, E.isEnd = E.progress >= 1), E.isBeginning && !n && E.emit("onReachBeginning", E), E.isEnd && !r && E.emit("onReachEnd", E), E.params.watchSlidesProgress && E.updateSlidesProgress(e), E.emit("onProgress", E, E.progress)
					}, E.updateActiveIndex = function() {
						var e, t, n, r = E.rtl ? E.translate : -E.translate;
						for (t = 0; t < E.slidesGrid.length; t++) "undefined" != typeof E.slidesGrid[t + 1] ? r >= E.slidesGrid[t] && r < E.slidesGrid[t + 1] - (E.slidesGrid[t + 1] - E.slidesGrid[t]) / 2 ? e = t : r >= E.slidesGrid[t] && r < E.slidesGrid[t + 1] && (e = t + 1) : r >= E.slidesGrid[t] && (e = t);
						(0 > e || "undefined" == typeof e) && (e = 0), n = Math.floor(e / E.params.slidesPerGroup), n >= E.snapGrid.length && (n = E.snapGrid.length - 1), e !== E.activeIndex && (E.snapIndex = n, E.previousIndex = E.activeIndex, E.activeIndex = e, E.updateClasses())
					}, E.updateClasses = function() {
						E.slides.removeClass(E.params.slideActiveClass + " " + E.params.slideNextClass + " " + E.params.slidePrevClass);
						var e = E.slides.eq(E.activeIndex);
						e.addClass(E.params.slideActiveClass);
						var n = e.next("." + E.params.slideClass).addClass(E.params.slideNextClass);
						E.params.loop && 0 === n.length && E.slides.eq(0).addClass(E.params.slideNextClass);
						var r = e.prev("." + E.params.slideClass).addClass(E.params.slidePrevClass);
						if (E.params.loop && 0 === r.length && E.slides.eq(-1).addClass(E.params.slidePrevClass), E.paginationContainer && E.paginationContainer.length > 0) {
							var i, s = E.params.loop ? Math.ceil((E.slides.length - 2 * E.loopedSlides) / E.params.slidesPerGroup) : E.snapGrid.length;
							if (E.params.loop ? (i = Math.ceil((E.activeIndex - E.loopedSlides) / E.params.slidesPerGroup), i > E.slides.length - 1 - 2 * E.loopedSlides && (i -= E.slides.length - 2 * E.loopedSlides), i > s - 1 && (i -= s), 0 > i && "bullets" !== E.params.paginationType && (i = s + i)) : i = "undefined" != typeof E.snapIndex ? E.snapIndex : E.activeIndex || 0, "bullets" === E.params.paginationType && E.bullets && E.bullets.length > 0 && (E.bullets.removeClass(E.params.bulletActiveClass), E.paginationContainer.length > 1 ? E.bullets.each(function() {
									t(this).index() === i && t(this).addClass(E.params.bulletActiveClass)
								}) : E.bullets.eq(i).addClass(E.params.bulletActiveClass)), "fraction" === E.params.paginationType && (E.paginationContainer.find("." + E.params.paginationCurrentClass).text(i + 1), E.paginationContainer.find("." + E.params.paginationTotalClass).text(s)), "progress" === E.params.paginationType) {
								var o = (i + 1) / s,
									u = o,
									f = 1;
								E.isHorizontal() || (f = o, u = 1), E.paginationContainer.find("." + E.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + u + ") scaleY(" + f + ")").transition(E.params.speed)
							}
							"custom" === E.params.paginationType && E.params.paginationCustomRender && (E.paginationContainer.html(E.params.paginationCustomRender(E, i + 1, s)), E.emit("onPaginationRendered", E, E.paginationContainer[0]))
						}
						E.params.loop || (E.params.prevButton && E.prevButton && E.prevButton.length > 0 && (E.isBeginning ? (E.prevButton.addClass(E.params.buttonDisabledClass), E.params.a11y && E.a11y && E.a11y.disable(E.prevButton)) : (E.prevButton.removeClass(E.params.buttonDisabledClass), E.params.a11y && E.a11y && E.a11y.enable(E.prevButton))), E.params.nextButton && E.nextButton && E.nextButton.length > 0 && (E.isEnd ? (E.nextButton.addClass(E.params.buttonDisabledClass), E.params.a11y && E.a11y && E.a11y.disable(E.nextButton)) : (E.nextButton.removeClass(E.params.buttonDisabledClass), E.params.a11y && E.a11y && E.a11y.enable(E.nextButton))))
					}, E.updatePagination = function() {
						if (E.params.pagination && E.paginationContainer && E.paginationContainer.length > 0) {
							var e = "";
							if ("bullets" === E.params.paginationType) {
								for (var t = E.params.loop ? Math.ceil((E.slides.length - 2 * E.loopedSlides) / E.params.slidesPerGroup) : E.snapGrid.length, n = 0; t > n; n++) e += E.params.paginationBulletRender ? E.params.paginationBulletRender(n, E.params.bulletClass) : "<" + E.params.paginationElement + ' class="' + E.params.bulletClass + '"></' + E.params.paginationElement + ">";
								E.paginationContainer.html(e), E.bullets = E.paginationContainer.find("." + E.params.bulletClass), E.params.paginationClickable && E.params.a11y && E.a11y && E.a11y.initPagination()
							}
							"fraction" === E.params.paginationType && (e = E.params.paginationFractionRender ? E.params.paginationFractionRender(E, E.params.paginationCurrentClass, E.params.paginationTotalClass) : '<span class="' + E.params.paginationCurrentClass + '"></span> / <span class="' + E.params.paginationTotalClass + '"></span>', E.paginationContainer.html(e)), "progress" === E.params.paginationType && (e = E.params.paginationProgressRender ? E.params.paginationProgressRender(E, E.params.paginationProgressbarClass) : '<span class="' + E.params.paginationProgressbarClass + '"></span>', E.paginationContainer.html(e)), "custom" !== E.params.paginationType && E.emit("onPaginationRendered", E, E.paginationContainer[0])
						}
					}, E.update = function(e) {
						function t() {
							r = Math.min(Math.max(E.translate, E.maxTranslate()), E.minTranslate()), E.setWrapperTranslate(r), E.updateActiveIndex(), E.updateClasses()
						}
						if (E.updateContainerSize(), E.updateSlidesSize(), E.updateProgress(), E.updatePagination(), E.updateClasses(), E.params.scrollbar && E.scrollbar && E.scrollbar.set(), e) {
							var n, r;
							E.controller && E.controller.spline && (E.controller.spline = void 0), E.params.freeMode ? (t(), E.params.autoHeight && E.updateAutoHeight()) : (n = ("auto" === E.params.slidesPerView || E.params.slidesPerView > 1) && E.isEnd && !E.params.centeredSlides ? E.slideTo(E.slides.length - 1, 0, !1, !0) : E.slideTo(E.activeIndex, 0, !1, !0), n || t())
						} else E.params.autoHeight && E.updateAutoHeight()
					}, E.onResize = function(e) {
						E.params.breakpoints && E.setBreakpoint();
						var t = E.params.allowSwipeToPrev,
							n = E.params.allowSwipeToNext;
						E.params.allowSwipeToPrev = E.params.allowSwipeToNext = !0, E.updateContainerSize(), E.updateSlidesSize(), ("auto" === E.params.slidesPerView || E.params.freeMode || e) && E.updatePagination(), E.params.scrollbar && E.scrollbar && E.scrollbar.set(), E.controller && E.controller.spline && (E.controller.spline = void 0);
						var r = !1;
						if (E.params.freeMode) {
							var i = Math.min(Math.max(E.translate, E.maxTranslate()), E.minTranslate());
							E.setWrapperTranslate(i), E.updateActiveIndex(), E.updateClasses(), E.params.autoHeight && E.updateAutoHeight()
						} else E.updateClasses(), r = ("auto" === E.params.slidesPerView || E.params.slidesPerView > 1) && E.isEnd && !E.params.centeredSlides ? E.slideTo(E.slides.length - 1, 0, !1, !0) : E.slideTo(E.activeIndex, 0, !1, !0);
						E.params.lazyLoading && !r && E.lazy && E.lazy.load(), E.params.allowSwipeToPrev = t, E.params.allowSwipeToNext = n
					};
					var x = ["mousedown", "mousemove", "mouseup"];
					window.navigator.pointerEnabled ? x = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (x = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), E.touchEvents = {
						start: E.support.touch || !E.params.simulateTouch ? "touchstart" : x[0],
						move: E.support.touch || !E.params.simulateTouch ? "touchmove" : x[1],
						end: E.support.touch || !E.params.simulateTouch ? "touchend" : x[2]
					}, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === E.params.touchEventsTarget ? E.container : E.wrapper).addClass("swiper-wp8-" + E.params.direction), E.initEvents = function(e) {
						var t = e ? "off" : "on",
							n = e ? "removeEventListener" : "addEventListener",
							r = "container" === E.params.touchEventsTarget ? E.container[0] : E.wrapper[0],
							s = E.support.touch ? r : document,
							o = E.params.nested ? !0 : !1;
						E.browser.ie ? (r[n](E.touchEvents.start, E.onTouchStart, !1), s[n](E.touchEvents.move, E.onTouchMove, o), s[n](E.touchEvents.end, E.onTouchEnd, !1)) : (E.support.touch && (r[n](E.touchEvents.start, E.onTouchStart, !1), r[n](E.touchEvents.move, E.onTouchMove, o), r[n](E.touchEvents.end, E.onTouchEnd, !1)), !i.simulateTouch || E.device.ios || E.device.android || (r[n]("mousedown", E.onTouchStart, !1), document[n]("mousemove", E.onTouchMove, o), document[n]("mouseup", E.onTouchEnd, !1))), window[n]("resize", E.onResize), E.params.nextButton && E.nextButton && E.nextButton.length > 0 && (E.nextButton[t]("click", E.onClickNext), E.params.a11y && E.a11y && E.nextButton[t]("keydown", E.a11y.onEnterKey)), E.params.prevButton && E.prevButton && E.prevButton.length > 0 && (E.prevButton[t]("click", E.onClickPrev), E.params.a11y && E.a11y && E.prevButton[t]("keydown", E.a11y.onEnterKey)), E.params.pagination && E.params.paginationClickable && (E.paginationContainer[t]("click", "." + E.params.bulletClass, E.onClickIndex), E.params.a11y && E.a11y && E.paginationContainer[t]("keydown", "." + E.params.bulletClass, E.a11y.onEnterKey)), (E.params.preventClicks || E.params.preventClicksPropagation) && r[n]("click", E.preventClicks, !0)
					}, E.attachEvents = function() {
						E.initEvents()
					}, E.detachEvents = function() {
						E.initEvents(!0)
					}, E.allowClick = !0, E.preventClicks = function(e) {
						E.allowClick || (E.params.preventClicks && e.preventDefault(), E.params.preventClicksPropagation && E.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
					}, E.onClickNext = function(e) {
						e.preventDefault(), (!E.isEnd || E.params.loop) && E.slideNext()
					}, E.onClickPrev = function(e) {
						e.preventDefault(), (!E.isBeginning || E.params.loop) && E.slidePrev()
					}, E.onClickIndex = function(e) {
						e.preventDefault();
						var n = t(this).index() * E.params.slidesPerGroup;
						E.params.loop && (n += E.loopedSlides), E.slideTo(n)
					}, E.updateClickedSlide = function(e) {
						var n = u(e, "." + E.params.slideClass),
							r = !1;
						if (n)
							for (var i = 0; i < E.slides.length; i++) E.slides[i] === n && (r = !0);
						if (!n || !r) return E.clickedSlide = void 0, void(E.clickedIndex = void 0);
						if (E.clickedSlide = n, E.clickedIndex = t(n).index(), E.params.slideToClickedSlide && void 0 !== E.clickedIndex && E.clickedIndex !== E.activeIndex) {
							var s, o = E.clickedIndex;
							if (E.params.loop) {
								if (E.animating) return;
								s = t(E.clickedSlide).attr("data-swiper-slide-index"), E.params.centeredSlides ? o < E.loopedSlides - E.params.slidesPerView / 2 || o > E.slides.length - E.loopedSlides + E.params.slidesPerView / 2 ? (E.fixLoop(), o = E.wrapper.children("." + E.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
									E.slideTo(o)
								}, 0)) : E.slideTo(o) : o > E.slides.length - E.params.slidesPerView ? (E.fixLoop(), o = E.wrapper.children("." + E.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
									E.slideTo(o)
								}, 0)) : E.slideTo(o)
							} else E.slideTo(o)
						}
					};
					var T, N, C, k, L, A, O, M, _, D, P = "input, select, textarea, button",
						H = Date.now(),
						B = [];
					E.animating = !1, E.touches = {
						startX: 0,
						startY: 0,
						currentX: 0,
						currentY: 0,
						diff: 0
					};
					var j, F;
					if (E.onTouchStart = function(e) {
							if (e.originalEvent && (e = e.originalEvent), j = "touchstart" === e.type, j || !("which" in e) || 3 !== e.which) {
								if (E.params.noSwiping && u(e, "." + E.params.noSwipingClass)) return void(E.allowClick = !0);
								if (!E.params.swipeHandler || u(e, E.params.swipeHandler)) {
									var n = E.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
										r = E.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
									if (!(E.device.ios && E.params.iOSEdgeSwipeDetection && n <= E.params.iOSEdgeSwipeThreshold)) {
										if (T = !0, N = !1, C = !0, L = void 0, F = void 0, E.touches.startX = n, E.touches.startY = r, k = Date.now(), E.allowClick = !0, E.updateContainerSize(), E.swipeDirection = void 0, E.params.threshold > 0 && (M = !1), "touchstart" !== e.type) {
											var i = !0;
											t(e.target).is(P) && (i = !1), document.activeElement && t(document.activeElement).is(P) && document.activeElement.blur(), i && e.preventDefault()
										}
										E.emit("onTouchStart", E, e)
									}
								}
							}
						}, E.onTouchMove = function(e) {
							if (e.originalEvent && (e = e.originalEvent), !j || "mousemove" !== e.type) {
								if (e.preventedByNestedSwiper) return E.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void(E.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
								if (E.params.onlyExternal) return E.allowClick = !1, void(T && (E.touches.startX = E.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, E.touches.startY = E.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, k = Date.now()));
								if (j && document.activeElement && e.target === document.activeElement && t(e.target).is(P)) return N = !0, void(E.allowClick = !1);
								if (C && E.emit("onTouchMove", E, e), !(e.targetTouches && e.targetTouches.length > 1)) {
									if (E.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, E.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof L) {
										var n = 180 * Math.atan2(Math.abs(E.touches.currentY - E.touches.startY), Math.abs(E.touches.currentX - E.touches.startX)) / Math.PI;
										L = E.isHorizontal() ? n > E.params.touchAngle : 90 - n > E.params.touchAngle
									}
									if (L && E.emit("onTouchMoveOpposite", E, e), "undefined" == typeof F && E.browser.ieTouch && (E.touches.currentX !== E.touches.startX || E.touches.currentY !== E.touches.startY) && (F = !0), T) {
										if (L) return void(T = !1);
										if (F || !E.browser.ieTouch) {
											E.allowClick = !1, E.emit("onSliderMove", E, e), e.preventDefault(), E.params.touchMoveStopPropagation && !E.params.nested && e.stopPropagation(), N || (i.loop && E.fixLoop(), O = E.getWrapperTranslate(), E.setWrapperTransition(0), E.animating && E.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), E.params.autoplay && E.autoplaying && (E.params.autoplayDisableOnInteraction ? E.stopAutoplay() : E.pauseAutoplay()), D = !1, E.params.grabCursor && (E.container[0].style.cursor = "move", E.container[0].style.cursor = "-webkit-grabbing", E.container[0].style.cursor = "-moz-grabbin", E.container[0].style.cursor = "grabbing")), N = !0;
											var r = E.touches.diff = E.isHorizontal() ? E.touches.currentX - E.touches.startX : E.touches.currentY - E.touches.startY;
											r *= E.params.touchRatio, E.rtl && (r = -r), E.swipeDirection = r > 0 ? "prev" : "next", A = r + O;
											var s = !0;
											if (r > 0 && A > E.minTranslate() ? (s = !1, E.params.resistance && (A = E.minTranslate() - 1 + Math.pow(-E.minTranslate() + O + r, E.params.resistanceRatio))) : 0 > r && A < E.maxTranslate() && (s = !1, E.params.resistance && (A = E.maxTranslate() + 1 - Math.pow(E.maxTranslate() - O - r, E.params.resistanceRatio))), s && (e.preventedByNestedSwiper = !0), !E.params.allowSwipeToNext && "next" === E.swipeDirection && O > A && (A = O), !E.params.allowSwipeToPrev && "prev" === E.swipeDirection && A > O && (A = O), E.params.followFinger) {
												if (E.params.threshold > 0) {
													if (!(Math.abs(r) > E.params.threshold || M)) return void(A = O);
													if (!M) return M = !0, E.touches.startX = E.touches.currentX, E.touches.startY = E.touches.currentY, A = O, void(E.touches.diff = E.isHorizontal() ? E.touches.currentX - E.touches.startX : E.touches.currentY - E.touches.startY)
												}(E.params.freeMode || E.params.watchSlidesProgress) && E.updateActiveIndex(), E.params.freeMode && (0 === B.length && B.push({
													position: E.touches[E.isHorizontal() ? "startX" : "startY"],
													time: k
												}), B.push({
													position: E.touches[E.isHorizontal() ? "currentX" : "currentY"],
													time: (new window.Date).getTime()
												})), E.updateProgress(A), E.setWrapperTranslate(A)
											}
										}
									}
								}
							}
						}, E.onTouchEnd = function(e) {
							if (e.originalEvent && (e = e.originalEvent), C && E.emit("onTouchEnd", E, e), C = !1, T) {
								E.params.grabCursor && N && T && (E.container[0].style.cursor = "move", E.container[0].style.cursor = "-webkit-grab", E.container[0].style.cursor = "-moz-grab", E.container[0].style.cursor = "grab");
								var n = Date.now(),
									r = n - k;
								if (E.allowClick && (E.updateClickedSlide(e), E.emit("onTap", E, e), 300 > r && n - H > 300 && (_ && clearTimeout(_), _ = setTimeout(function() {
										E && (E.params.paginationHide && E.paginationContainer.length > 0 && !t(e.target).hasClass(E.params.bulletClass) && E.paginationContainer.toggleClass(E.params.paginationHiddenClass), E.emit("onClick", E, e))
									}, 300)), 300 > r && 300 > n - H && (_ && clearTimeout(_), E.emit("onDoubleTap", E, e))), H = Date.now(), setTimeout(function() {
										E && (E.allowClick = !0)
									}, 0), !T || !N || !E.swipeDirection || 0 === E.touches.diff || A === O) return void(T = N = !1);
								T = N = !1;
								var i;
								if (i = E.params.followFinger ? E.rtl ? E.translate : -E.translate : -A, E.params.freeMode) {
									if (i < -E.minTranslate()) return void E.slideTo(E.activeIndex);
									if (i > -E.maxTranslate()) return void(E.slides.length < E.snapGrid.length ? E.slideTo(E.snapGrid.length - 1) : E.slideTo(E.slides.length - 1));
									if (E.params.freeModeMomentum) {
										if (B.length > 1) {
											var s = B.pop(),
												o = B.pop(),
												u = s.position - o.position,
												f = s.time - o.time;
											E.velocity = u / f, E.velocity = E.velocity / 2, Math.abs(E.velocity) < E.params.freeModeMinimumVelocity && (E.velocity = 0), (f > 150 || (new window.Date).getTime() - s.time > 300) && (E.velocity = 0)
										} else E.velocity = 0;
										B.length = 0;
										var l = 1e3 * E.params.freeModeMomentumRatio,
											c = E.velocity * l,
											h = E.translate + c;
										E.rtl && (h = -h);
										var p, d = !1,
											v = 20 * Math.abs(E.velocity) * E.params.freeModeMomentumBounceRatio;
										if (h < E.maxTranslate()) E.params.freeModeMomentumBounce ? (h + E.maxTranslate() < -v && (h = E.maxTranslate() - v), p = E.maxTranslate(), d = !0, D = !0) : h = E.maxTranslate();
										else if (h > E.minTranslate()) E.params.freeModeMomentumBounce ? (h - E.minTranslate() > v && (h = E.minTranslate() + v), p = E.minTranslate(), d = !0, D = !0) : h = E.minTranslate();
										else if (E.params.freeModeSticky) {
											var m, g = 0;
											for (g = 0; g < E.snapGrid.length; g += 1)
												if (E.snapGrid[g] > -h) {
													m = g;
													break
												}
											h = Math.abs(E.snapGrid[m] - h) < Math.abs(E.snapGrid[m - 1] - h) || "next" === E.swipeDirection ? E.snapGrid[m] : E.snapGrid[m - 1], E.rtl || (h = -h)
										}
										if (0 !== E.velocity) l = E.rtl ? Math.abs((-h - E.translate) / E.velocity) : Math.abs((h - E.translate) / E.velocity);
										else if (E.params.freeModeSticky) return void E.slideReset();
										E.params.freeModeMomentumBounce && d ? (E.updateProgress(p), E.setWrapperTransition(l), E.setWrapperTranslate(h), E.onTransitionStart(), E.animating = !0, E.wrapper.transitionEnd(function() {
											E && D && (E.emit("onMomentumBounce", E), E.setWrapperTransition(E.params.speed), E.setWrapperTranslate(p), E.wrapper.transitionEnd(function() {
												E && E.onTransitionEnd()
											}))
										})) : E.velocity ? (E.updateProgress(h), E.setWrapperTransition(l), E.setWrapperTranslate(h), E.onTransitionStart(), E.animating || (E.animating = !0, E.wrapper.transitionEnd(function() {
											E && E.onTransitionEnd()
										}))) : E.updateProgress(h), E.updateActiveIndex()
									}
									return void((!E.params.freeModeMomentum || r >= E.params.longSwipesMs) && (E.updateProgress(), E.updateActiveIndex()))
								}
								var y, b = 0,
									w = E.slidesSizesGrid[0];
								for (y = 0; y < E.slidesGrid.length; y += E.params.slidesPerGroup) "undefined" != typeof E.slidesGrid[y + E.params.slidesPerGroup] ? i >= E.slidesGrid[y] && i < E.slidesGrid[y + E.params.slidesPerGroup] && (b = y, w = E.slidesGrid[y + E.params.slidesPerGroup] - E.slidesGrid[y]) : i >= E.slidesGrid[y] && (b = y, w = E.slidesGrid[E.slidesGrid.length - 1] - E.slidesGrid[E.slidesGrid.length - 2]);
								var S = (i - E.slidesGrid[b]) / w;
								if (r > E.params.longSwipesMs) {
									if (!E.params.longSwipes) return void E.slideTo(E.activeIndex);
									"next" === E.swipeDirection && (S >= E.params.longSwipesRatio ? E.slideTo(b + E.params.slidesPerGroup) : E.slideTo(b)), "prev" === E.swipeDirection && (S > 1 - E.params.longSwipesRatio ? E.slideTo(b + E.params.slidesPerGroup) : E.slideTo(b))
								} else {
									if (!E.params.shortSwipes) return void E.slideTo(E.activeIndex);
									"next" === E.swipeDirection && E.slideTo(b + E.params.slidesPerGroup), "prev" === E.swipeDirection && E.slideTo(b)
								}
							}
						}, E._slideTo = function(e, t) {
							return E.slideTo(e, t, !0, !0)
						}, E.slideTo = function(e, t, n, r) {
							"undefined" == typeof n && (n = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), E.snapIndex = Math.floor(e / E.params.slidesPerGroup), E.snapIndex >= E.snapGrid.length && (E.snapIndex = E.snapGrid.length - 1);
							var i = -E.snapGrid[E.snapIndex];
							E.params.autoplay && E.autoplaying && (r || !E.params.autoplayDisableOnInteraction ? E.pauseAutoplay(t) : E.stopAutoplay()), E.updateProgress(i);
							for (var s = 0; s < E.slidesGrid.length; s++) - Math.floor(100 * i) >= Math.floor(100 * E.slidesGrid[s]) && (e = s);
							return !E.params.allowSwipeToNext && i < E.translate && i < E.minTranslate() ? !1 : !E.params.allowSwipeToPrev && i > E.translate && i > E.maxTranslate() && (E.activeIndex || 0) !== e ? !1 : ("undefined" == typeof t && (t = E.params.speed), E.previousIndex = E.activeIndex || 0, E.activeIndex = e, E.rtl && -i === E.translate || !E.rtl && i === E.translate ? (E.params.autoHeight && E.updateAutoHeight(), E.updateClasses(), "slide" !== E.params.effect && E.setWrapperTranslate(i), !1) : (E.updateClasses(), E.onTransitionStart(n), 0 === t ? (E.setWrapperTranslate(i), E.setWrapperTransition(0), E.onTransitionEnd(n)) : (E.setWrapperTranslate(i), E.setWrapperTransition(t), E.animating || (E.animating = !0, E.wrapper.transitionEnd(function() {
								E && E.onTransitionEnd(n)
							}))), !0))
						}, E.onTransitionStart = function(e) {
							"undefined" == typeof e && (e = !0), E.params.autoHeight && E.updateAutoHeight(), E.lazy && E.lazy.onTransitionStart(), e && (E.emit("onTransitionStart", E), E.activeIndex !== E.previousIndex && (E.emit("onSlideChangeStart", E), E.activeIndex > E.previousIndex ? E.emit("onSlideNextStart", E) : E.emit("onSlidePrevStart", E)))
						}, E.onTransitionEnd = function(e) {
							E.animating = !1, E.setWrapperTransition(0), "undefined" == typeof e && (e = !0), E.lazy && E.lazy.onTransitionEnd(), e && (E.emit("onTransitionEnd", E), E.activeIndex !== E.previousIndex && (E.emit("onSlideChangeEnd", E), E.activeIndex > E.previousIndex ? E.emit("onSlideNextEnd", E) : E.emit("onSlidePrevEnd", E))), E.params.hashnav && E.hashnav && E.hashnav.setHash()
						}, E.slideNext = function(e, t, n) {
							if (E.params.loop) {
								if (E.animating) return !1;
								E.fixLoop();
								E.container[0].clientLeft;
								return E.slideTo(E.activeIndex + E.params.slidesPerGroup, t, e, n)
							}
							return E.slideTo(E.activeIndex + E.params.slidesPerGroup, t, e, n)
						}, E._slideNext = function(e) {
							return E.slideNext(!0, e, !0)
						}, E.slidePrev = function(e, t, n) {
							if (E.params.loop) {
								if (E.animating) return !1;
								E.fixLoop();
								E.container[0].clientLeft;
								return E.slideTo(E.activeIndex - 1, t, e, n)
							}
							return E.slideTo(E.activeIndex - 1, t, e, n)
						}, E._slidePrev = function(e) {
							return E.slidePrev(!0, e, !0)
						}, E.slideReset = function(e, t, n) {
							return E.slideTo(E.activeIndex, t, e)
						}, E.setWrapperTransition = function(e, t) {
							E.wrapper.transition(e), "slide" !== E.params.effect && E.effects[E.params.effect] && E.effects[E.params.effect].setTransition(e), E.params.parallax && E.parallax && E.parallax.setTransition(e), E.params.scrollbar && E.scrollbar && E.scrollbar.setTransition(e), E.params.control && E.controller && E.controller.setTransition(e, t), E.emit("onSetTransition", E, e)
						}, E.setWrapperTranslate = function(e, t, n) {
							var r = 0,
								i = 0,
								o = 0;
							E.isHorizontal() ? r = E.rtl ? -e : e : i = e, E.params.roundLengths && (r = s(r), i = s(i)), E.params.virtualTranslate || (E.support.transforms3d ? E.wrapper.transform("translate3d(" + r + "px, " + i + "px, " + o + "px)") : E.wrapper.transform("translate(" + r + "px, " + i + "px)")), E.translate = E.isHorizontal() ? r : i;
							var u, a = E.maxTranslate() - E.minTranslate();
							u = 0 === a ? 0 : (e - E.minTranslate()) / a, u !== E.progress && E.updateProgress(e), t && E.updateActiveIndex(), "slide" !== E.params.effect && E.effects[E.params.effect] && E.effects[E.params.effect].setTranslate(E.translate), E.params.parallax && E.parallax && E.parallax.setTranslate(E.translate), E.params.scrollbar && E.scrollbar && E.scrollbar.setTranslate(E.translate), E.params.control && E.controller && E.controller.setTranslate(E.translate, n), E.emit("onSetTranslate", E, E.translate)
						}, E.getTranslate = function(e, t) {
							var n, r, i, s;
							return "undefined" == typeof t && (t = "x"), E.params.virtualTranslate ? E.rtl ? -E.translate : E.translate : (i = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (r = i.transform || i.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(function(e) {
								return e.replace(",", ".")
							}).join(", ")), s = new window.WebKitCSSMatrix("none" === r ? "" : r)) : (s = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = s.toString().split(",")), "x" === t && (r = window.WebKitCSSMatrix ? s.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (r = window.WebKitCSSMatrix ? s.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), E.rtl && r && (r = -r), r || 0)
						}, E.getWrapperTranslate = function(e) {
							return "undefined" == typeof e && (e = E.isHorizontal() ? "x" : "y"), E.getTranslate(E.wrapper[0], e)
						}, E.observers = [], E.initObservers = function() {
							if (E.params.observeParents)
								for (var e = E.container.parents(), t = 0; t < e.length; t++) f(e[t]);
							f(E.container[0], {
								childList: !1
							}), f(E.wrapper[0], {
								attributes: !1
							})
						}, E.disconnectObservers = function() {
							for (var e = 0; e < E.observers.length; e++) E.observers[e].disconnect();
							E.observers = []
						}, E.createLoop = function() {
							E.wrapper.children("." + E.params.slideClass + "." + E.params.slideDuplicateClass).remove();
							var e = E.wrapper.children("." + E.params.slideClass);
							"auto" !== E.params.slidesPerView || E.params.loopedSlides || (E.params.loopedSlides = e.length), E.loopedSlides = parseInt(E.params.loopedSlides || E.params.slidesPerView, 10), E.loopedSlides = E.loopedSlides + E.params.loopAdditionalSlides, E.loopedSlides > e.length && (E.loopedSlides = e.length);
							var n, r = [],
								i = [];
							for (e.each(function(n, s) {
									var o = t(this);
									n < E.loopedSlides && i.push(s), n < e.length && n >= e.length - E.loopedSlides && r.push(s), o.attr("data-swiper-slide-index", n)
								}), n = 0; n < i.length; n++) E.wrapper.append(t(i[n].cloneNode(!0)).addClass(E.params.slideDuplicateClass));
							for (n = r.length - 1; n >= 0; n--) E.wrapper.prepend(t(r[n].cloneNode(!0)).addClass(E.params.slideDuplicateClass))
						}, E.destroyLoop = function() {
							E.wrapper.children("." + E.params.slideClass + "." + E.params.slideDuplicateClass).remove(), E.slides.removeAttr("data-swiper-slide-index")
						}, E.reLoop = function(e) {
							var t = E.activeIndex - E.loopedSlides;
							E.destroyLoop(), E.createLoop(), E.updateSlidesSize(), e && E.slideTo(t + E.loopedSlides, 0, !1)
						}, E.fixLoop = function() {
							var e;
							E.activeIndex < E.loopedSlides ? (e = E.slides.length - 3 * E.loopedSlides + E.activeIndex, e += E.loopedSlides, E.slideTo(e, 0, !1, !0)) : ("auto" === E.params.slidesPerView && E.activeIndex >= 2 * E.loopedSlides || E.activeIndex > E.slides.length - 2 * E.params.slidesPerView) && (e = -E.slides.length + E.activeIndex + E.loopedSlides, e += E.loopedSlides, E.slideTo(e, 0, !1, !0))
						}, E.appendSlide = function(e) {
							if (E.params.loop && E.destroyLoop(), "object" == typeof e && e.length)
								for (var t = 0; t < e.length; t++) e[t] && E.wrapper.append(e[t]);
							else E.wrapper.append(e);
							E.params.loop && E.createLoop(), E.params.observer && E.support.observer || E.update(!0)
						}, E.prependSlide = function(e) {
							E.params.loop && E.destroyLoop();
							var t = E.activeIndex + 1;
							if ("object" == typeof e && e.length) {
								for (var n = 0; n < e.length; n++) e[n] && E.wrapper.prepend(e[n]);
								t = E.activeIndex + e.length
							} else E.wrapper.prepend(e);
							E.params.loop && E.createLoop(), E.params.observer && E.support.observer || E.update(!0), E.slideTo(t, 0, !1)
						}, E.removeSlide = function(e) {
							E.params.loop && (E.destroyLoop(), E.slides = E.wrapper.children("." + E.params.slideClass));
							var t, n = E.activeIndex;
							if ("object" == typeof e && e.length) {
								for (var r = 0; r < e.length; r++) t = e[r], E.slides[t] && E.slides.eq(t).remove(), n > t && n--;
								n = Math.max(n, 0)
							} else t = e, E.slides[t] && E.slides.eq(t).remove(), n > t && n--, n = Math.max(n, 0);
							E.params.loop && E.createLoop(), E.params.observer && E.support.observer || E.update(!0), E.params.loop ? E.slideTo(n + E.loopedSlides, 0, !1) : E.slideTo(n, 0, !1)
						}, E.removeAllSlides = function() {
							for (var e = [], t = 0; t < E.slides.length; t++) e.push(t);
							E.removeSlide(e)
						}, E.effects = {
							fade: {
								setTranslate: function() {
									for (var e = 0; e < E.slides.length; e++) {
										var t = E.slides.eq(e),
											n = t[0].swiperSlideOffset,
											r = -n;
										E.params.virtualTranslate || (r -= E.translate);
										var i = 0;
										E.isHorizontal() || (i = r, r = 0);
										var s = E.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
										t.css({
											opacity: s
										}).transform("translate3d(" + r + "px, " + i + "px, 0px)")
									}
								},
								setTransition: function(e) {
									if (E.slides.transition(e), E.params.virtualTranslate && 0 !== e) {
										var t = !1;
										E.slides.transitionEnd(function() {
											if (!t && E) {
												t = !0, E.animating = !1;
												for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < e.length; n++) E.wrapper.trigger(e[n])
											}
										})
									}
								}
							},
							flip: {
								setTranslate: function() {
									for (var e = 0; e < E.slides.length; e++) {
										var n = E.slides.eq(e),
											r = n[0].progress;
										E.params.flip.limitRotation && (r = Math.max(Math.min(n[0].progress, 1), -1));
										var i = n[0].swiperSlideOffset,
											s = -180 * r,
											o = s,
											u = 0,
											f = -i,
											l = 0;
										if (E.isHorizontal() ? E.rtl && (o = -o) : (l = f, f = 0, u = -o, o = 0), n[0].style.zIndex = -Math.abs(Math.round(r)) + E.slides.length, E.params.flip.slideShadows) {
											var c = E.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
												h = E.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
											0 === c.length && (c = t('<div class="swiper-slide-shadow-' + (E.isHorizontal() ? "left" : "top") + '"></div>'), n.append(c)), 0 === h.length && (h = t('<div class="swiper-slide-shadow-' + (E.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(h)), c.length && (c[0].style.opacity = Math.max(-r, 0)), h.length && (h[0].style.opacity = Math.max(r, 0))
										}
										n.transform("translate3d(" + f + "px, " + l + "px, 0px) rotateX(" + u + "deg) rotateY(" + o + "deg)")
									}
								},
								setTransition: function(e) {
									if (E.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), E.params.virtualTranslate && 0 !== e) {
										var n = !1;
										E.slides.eq(E.activeIndex).transitionEnd(function() {
											if (!n && E && t(this).hasClass(E.params.slideActiveClass)) {
												n = !0, E.animating = !1;
												for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = 0; r < e.length; r++) E.wrapper.trigger(e[r])
											}
										})
									}
								}
							},
							cube: {
								setTranslate: function() {
									var e, n = 0;
									E.params.cube.shadow && (E.isHorizontal() ? (e = E.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'), E.wrapper.append(e)), e.css({
										height: E.width + "px"
									})) : (e = E.container.find(".swiper-cube-shadow"), 0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'), E.container.append(e))));
									for (var r = 0; r < E.slides.length; r++) {
										var i = E.slides.eq(r),
											s = 90 * r,
											o = Math.floor(s / 360);
										E.rtl && (s = -s, o = Math.floor(-s / 360));
										var u = Math.max(Math.min(i[0].progress, 1), -1),
											f = 0,
											l = 0,
											c = 0;
										r % 4 === 0 ? (f = 4 * -o * E.size, c = 0) : (r - 1) % 4 === 0 ? (f = 0, c = 4 * -o * E.size) : (r - 2) % 4 === 0 ? (f = E.size + 4 * o * E.size, c = E.size) : (r - 3) % 4 === 0 && (f = -E.size, c = 3 * E.size + 4 * E.size * o), E.rtl && (f = -f), E.isHorizontal() || (l = f, f = 0);
										var h = "rotateX(" + (E.isHorizontal() ? 0 : -s) + "deg) rotateY(" + (E.isHorizontal() ? s : 0) + "deg) translate3d(" + f + "px, " + l + "px, " + c + "px)";
										if (1 >= u && u > -1 && (n = 90 * r + 90 * u, E.rtl && (n = 90 * -r - 90 * u)), i.transform(h), E.params.cube.slideShadows) {
											var p = E.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
												d = E.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
											0 === p.length && (p = t('<div class="swiper-slide-shadow-' + (E.isHorizontal() ? "left" : "top") + '"></div>'), i.append(p)), 0 === d.length && (d = t('<div class="swiper-slide-shadow-' + (E.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(d)), p.length && (p[0].style.opacity = Math.max(-u, 0)), d.length && (d[0].style.opacity = Math.max(u, 0))
										}
									}
									if (E.wrapper.css({
											"-webkit-transform-origin": "50% 50% -" + E.size / 2 + "px",
											"-moz-transform-origin": "50% 50% -" + E.size / 2 + "px",
											"-ms-transform-origin": "50% 50% -" + E.size / 2 + "px",
											"transform-origin": "50% 50% -" + E.size / 2 + "px"
										}), E.params.cube.shadow)
										if (E.isHorizontal()) e.transform("translate3d(0px, " + (E.width / 2 + E.params.cube.shadowOffset) + "px, " + -E.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + E.params.cube.shadowScale + ")");
										else {
											var v = Math.abs(n) - 90 * Math.floor(Math.abs(n) / 90),
												m = 1.5 - (Math.sin(2 * v * Math.PI / 360) / 2 + Math.cos(2 * v * Math.PI / 360) / 2),
												g = E.params.cube.shadowScale,
												y = E.params.cube.shadowScale / m,
												b = E.params.cube.shadowOffset;
											e.transform("scale3d(" + g + ", 1, " + y + ") translate3d(0px, " + (E.height / 2 + b) + "px, " + -E.height / 2 / y + "px) rotateX(-90deg)")
										}
									var w = E.isSafari || E.isUiWebView ? -E.size / 2 : 0;
									E.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (E.isHorizontal() ? 0 : n) + "deg) rotateY(" + (E.isHorizontal() ? -n : 0) + "deg)")
								},
								setTransition: function(e) {
									E.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), E.params.cube.shadow && !E.isHorizontal() && E.container.find(".swiper-cube-shadow").transition(e)
								}
							},
							coverflow: {
								setTranslate: function() {
									for (var e = E.translate, n = E.isHorizontal() ? -e + E.width / 2 : -e + E.height / 2, r = E.isHorizontal() ? E.params.coverflow.rotate : -E.params.coverflow.rotate, i = E.params.coverflow.depth, s = 0, o = E.slides.length; o > s; s++) {
										var u = E.slides.eq(s),
											f = E.slidesSizesGrid[s],
											l = u[0].swiperSlideOffset,
											c = (n - l - f / 2) / f * E.params.coverflow.modifier,
											h = E.isHorizontal() ? r * c : 0,
											p = E.isHorizontal() ? 0 : r * c,
											d = -i * Math.abs(c),
											v = E.isHorizontal() ? 0 : E.params.coverflow.stretch * c,
											m = E.isHorizontal() ? E.params.coverflow.stretch * c : 0;
										Math.abs(m) < .001 && (m = 0), Math.abs(v) < .001 && (v = 0), Math.abs(d) < .001 && (d = 0), Math.abs(h) < .001 && (h = 0), Math.abs(p) < .001 && (p = 0);
										var g = "translate3d(" + m + "px," + v + "px," + d + "px)  rotateX(" + p + "deg) rotateY(" + h + "deg)";
										if (u.transform(g), u[0].style.zIndex = -Math.abs(Math.round(c)) + 1, E.params.coverflow.slideShadows) {
											var y = E.isHorizontal() ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"),
												b = E.isHorizontal() ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom");
											0 === y.length && (y = t('<div class="swiper-slide-shadow-' + (E.isHorizontal() ? "left" : "top") + '"></div>'), u.append(y)), 0 === b.length && (b = t('<div class="swiper-slide-shadow-' + (E.isHorizontal() ? "right" : "bottom") + '"></div>'), u.append(b)), y.length && (y[0].style.opacity = c > 0 ? c : 0), b.length && (b[0].style.opacity = -c > 0 ? -c : 0)
										}
									}
									if (E.browser.ie) {
										var w = E.wrapper[0].style;
										w.perspectiveOrigin = n + "px 50%"
									}
								},
								setTransition: function(e) {
									E.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
								}
							}
						}, E.lazy = {
							initialImageLoaded: !1,
							loadImageInSlide: function(e, n) {
								if ("undefined" != typeof e && ("undefined" == typeof n && (n = !0), 0 !== E.slides.length)) {
									var r = E.slides.eq(e),
										i = r.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
									!r.hasClass("swiper-lazy") || r.hasClass("swiper-lazy-loaded") || r.hasClass("swiper-lazy-loading") || (i = i.add(r[0])), 0 !== i.length && i.each(function() {
										var e = t(this);
										e.addClass("swiper-lazy-loading");
										var i = e.attr("data-background"),
											s = e.attr("data-src"),
											o = e.attr("data-srcset");
										E.loadImage(e[0], s || i, o, !1, function() {
											if (i ? (e.css("background-image", 'url("' + i + '")'), e.removeAttr("data-background")) : (o && (e.attr("srcset", o), e.removeAttr("data-srcset")), s && (e.attr("src", s), e.removeAttr("data-src"))), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), r.find(".swiper-lazy-preloader, .preloader").remove(), E.params.loop && n) {
												var t = r.attr("data-swiper-slide-index");
												if (r.hasClass(E.params.slideDuplicateClass)) {
													var u = E.wrapper.children('[data-swiper-slide-index="' + t + '"]:not(.' + E.params.slideDuplicateClass + ")");
													E.lazy.loadImageInSlide(u.index(), !1)
												} else {
													var a = E.wrapper.children("." + E.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
													E.lazy.loadImageInSlide(a.index(), !1)
												}
											}
											E.emit("onLazyImageReady", E, r[0], e[0])
										}), E.emit("onLazyImageLoad", E, r[0], e[0])
									})
								}
							},
							load: function() {
								var e;
								if (E.params.watchSlidesVisibility) E.wrapper.children("." + E.params.slideVisibleClass).each(function() {
									E.lazy.loadImageInSlide(t(this).index())
								});
								else if (E.params.slidesPerView > 1)
									for (e = E.activeIndex; e < E.activeIndex + E.params.slidesPerView; e++) E.slides[e] && E.lazy.loadImageInSlide(e);
								else E.lazy.loadImageInSlide(E.activeIndex);
								if (E.params.lazyLoadingInPrevNext)
									if (E.params.slidesPerView > 1 || E.params.lazyLoadingInPrevNextAmount && E.params.lazyLoadingInPrevNextAmount > 1) {
										var n = E.params.lazyLoadingInPrevNextAmount,
											r = E.params.slidesPerView,
											i = Math.min(E.activeIndex + r + Math.max(n, r), E.slides.length),
											s = Math.max(E.activeIndex - Math.max(r, n), 0);
										for (e = E.activeIndex + E.params.slidesPerView; i > e; e++) E.slides[e] && E.lazy.loadImageInSlide(e);
										for (e = s; e < E.activeIndex; e++) E.slides[e] && E.lazy.loadImageInSlide(e)
									} else {
										var o = E.wrapper.children("." + E.params.slideNextClass);
										o.length > 0 && E.lazy.loadImageInSlide(o.index());
										var u = E.wrapper.children("." + E.params.slidePrevClass);
										u.length > 0 && E.lazy.loadImageInSlide(u.index())
									}
							},
							onTransitionStart: function() {
								E.params.lazyLoading && (E.params.lazyLoadingOnTransitionStart || !E.params.lazyLoadingOnTransitionStart && !E.lazy.initialImageLoaded) && E.lazy.load()
							},
							onTransitionEnd: function() {
								E.params.lazyLoading && !E.params.lazyLoadingOnTransitionStart && E.lazy.load()
							}
						}, E.scrollbar = {
							isTouched: !1,
							setDragPosition: function(e) {
								var t = E.scrollbar,
									n = E.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
									r = n - t.track.offset()[E.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
									i = -E.minTranslate() * t.moveDivider,
									s = -E.maxTranslate() * t.moveDivider;
								i > r ? r = i : r > s && (r = s), r = -r / t.moveDivider, E.updateProgress(r), E.setWrapperTranslate(r, !0)
							},
							dragStart: function(e) {
								var t = E.scrollbar;
								t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), E.params.scrollbarHide && t.track.css("opacity", 1), E.wrapper.transition(100), t.drag.transition(100), E.emit("onScrollbarDragStart", E)
							},
							dragMove: function(e) {
								var t = E.scrollbar;
								t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), E.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), E.emit("onScrollbarDragMove", E))
							},
							dragEnd: function(e) {
								var t = E.scrollbar;
								t.isTouched && (t.isTouched = !1, E.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function() {
									t.track.css("opacity", 0), t.track.transition(400)
								}, 1e3)), E.emit("onScrollbarDragEnd", E), E.params.scrollbarSnapOnRelease && E.slideReset())
							},
							enableDraggable: function() {
								var e = E.scrollbar,
									n = E.support.touch ? e.track : document;
								t(e.track).on(E.touchEvents.start, e.dragStart), t(n).on(E.touchEvents.move, e.dragMove), t(n).on(E.touchEvents.end, e.dragEnd)
							},
							disableDraggable: function() {
								var e = E.scrollbar,
									n = E.support.touch ? e.track : document;
								t(e.track).off(E.touchEvents.start, e.dragStart), t(n).off(E.touchEvents.move, e.dragMove), t(n).off(E.touchEvents.end, e.dragEnd)
							},
							set: function() {
								if (E.params.scrollbar) {
									var e = E.scrollbar;
									e.track = t(E.params.scrollbar), E.params.uniqueNavElements && "string" == typeof E.params.scrollbar && e.track.length > 1 && 1 === E.container.find(E.params.scrollbar).length && (e.track = E.container.find(E.params.scrollbar)), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = t('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = E.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = E.size / E.virtualSize, e.moveDivider = e.divider * (e.trackSize / E.size), e.dragSize = e.trackSize * e.divider, E.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", E.params.scrollbarHide && (e.track[0].style.opacity = 0)
								}
							},
							setTranslate: function() {
								if (E.params.scrollbar) {
									var e, t = E.scrollbar,
										n = (E.translate || 0, t.dragSize);
									e = (t.trackSize - t.dragSize) * E.progress, E.rtl && E.isHorizontal() ? (e = -e, e > 0 ? (n = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (n = t.trackSize + e)) : 0 > e ? (n = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (n = t.trackSize - e), E.isHorizontal() ? (E.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = n + "px") : (E.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = n + "px"), E.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
										t.track[0].style.opacity = 0, t.track.transition(400)
									}, 1e3))
								}
							},
							setTransition: function(e) {
								E.params.scrollbar && E.scrollbar.drag.transition(e)
							}
						}, E.controller = {
							LinearSpline: function(e, t) {
								this.x = e, this.y = t, this.lastIndex = e.length - 1;
								var n, r;
								this.x.length;
								this.interpolate = function(e) {
									return e ? (r = i(this.x, e), n = r - 1, (e - this.x[n]) * (this.y[r] - this.y[n]) / (this.x[r] - this.x[n]) + this.y[n]) : 0
								};
								var i = function() {
									var e, t, n;
									return function(r, i) {
										for (t = -1, e = r.length; e - t > 1;) r[n = e + t >> 1] <= i ? t = n : e = n;
										return e
									}
								}()
							},
							getInterpolateFunction: function(e) {
								E.controller.spline || (E.controller.spline = E.params.loop ? new E.controller.LinearSpline(E.slidesGrid, e.slidesGrid) : new E.controller.LinearSpline(E.snapGrid, e.snapGrid))
							},
							setTranslate: function(e, t) {
								function r(t) {
									e = t.rtl && "horizontal" === t.params.direction ? -E.translate : E.translate, "slide" === E.params.controlBy && (E.controller.getInterpolateFunction(t), s = -E.controller.spline.interpolate(-e)), s && "container" !== E.params.controlBy || (i = (t.maxTranslate() - t.minTranslate()) / (E.maxTranslate() - E.minTranslate()), s = (e - E.minTranslate()) * i + t.minTranslate()), E.params.controlInverse && (s = t.maxTranslate() - s), t.updateProgress(s), t.setWrapperTranslate(s, !1, E), t.updateActiveIndex()
								}
								var i, s, o = E.params.control;
								if (E.isArray(o))
									for (var u = 0; u < o.length; u++) o[u] !== t && o[u] instanceof n && r(o[u]);
								else o instanceof n && t !== o && r(o)
							},
							setTransition: function(e, t) {
								function r(t) {
									t.setWrapperTransition(e, E), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function() {
										s && (t.params.loop && "slide" === E.params.controlBy && t.fixLoop(), t.onTransitionEnd())
									}))
								}
								var i, s = E.params.control;
								if (E.isArray(s))
									for (i = 0; i < s.length; i++) s[i] !== t && s[i] instanceof n && r(s[i]);
								else s instanceof n && t !== s && r(s)
							}
						}, E.hashnav = {
							init: function() {
								if (E.params.hashnav) {
									E.hashnav.initialized = !0;
									var e = document.location.hash.replace("#", "");
									if (e)
										for (var t = 0, n = 0, r = E.slides.length; r > n; n++) {
											var i = E.slides.eq(n),
												s = i.attr("data-hash");
											if (s === e && !i.hasClass(E.params.slideDuplicateClass)) {
												var o = i.index();
												E.slideTo(o, t, E.params.runCallbacksOnInit, !0)
											}
										}
								}
							},
							setHash: function() {
								E.hashnav.initialized && E.params.hashnav && (document.location.hash = E.slides.eq(E.activeIndex).attr("data-hash") || "")
							}
						}, E.disableKeyboardControl = function() {
							E.params.keyboardControl = !1, t(document).off("keydown", l)
						}, E.enableKeyboardControl = function() {
							E.params.keyboardControl = !0, t(document).on("keydown", l)
						}, E.mousewheel = {
							event: !1,
							lastScrollTime: (new window.Date).getTime()
						}, E.params.mousewheelControl) {
						try {
							new window.WheelEvent("wheel"), E.mousewheel.event = "wheel"
						} catch (I) {
							(window.WheelEvent || E.container[0] && "wheel" in E.container[0]) && (E.mousewheel.event = "wheel")
						}!E.mousewheel.event && window.WheelEvent, E.mousewheel.event || void 0 === document.onmousewheel || (E.mousewheel.event = "mousewheel"), E.mousewheel.event || (E.mousewheel.event = "DOMMouseScroll")
					}
					E.disableMousewheelControl = function() {
						return E.mousewheel.event ? (E.container.off(E.mousewheel.event, c), !0) : !1
					}, E.enableMousewheelControl = function() {
						return E.mousewheel.event ? (E.container.on(E.mousewheel.event, c), !0) : !1
					}, E.parallax = {
						setTranslate: function() {
							E.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
								h(this, E.progress)
							}), E.slides.each(function() {
								var e = t(this);
								e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
									var t = Math.min(Math.max(e[0].progress, -1), 1);
									h(this, t)
								})
							})
						},
						setTransition: function(e) {
							"undefined" == typeof e && (e = E.params.speed), E.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
								var n = t(this),
									r = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
								0 === e && (r = 0), n.transition(r)
							})
						}
					}, E._plugins = [];
					for (var q in E.plugins) {
						var R = E.plugins[q](E, E.params[q]);
						R && E._plugins.push(R)
					}
					return E.callPlugins = function(e) {
						for (var t = 0; t < E._plugins.length; t++) e in E._plugins[t] && E._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
					}, E.emitterEventListeners = {}, E.emit = function(e) {
						E.params[e] && E.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
						var t;
						if (E.emitterEventListeners[e])
							for (t = 0; t < E.emitterEventListeners[e].length; t++) E.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
						E.callPlugins && E.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
					}, E.on = function(e, t) {
						return e = p(e), E.emitterEventListeners[e] || (E.emitterEventListeners[e] = []), E.emitterEventListeners[e].push(t), E
					}, E.off = function(e, t) {
						var n;
						if (e = p(e), "undefined" == typeof t) return E.emitterEventListeners[e] = [], E;
						if (E.emitterEventListeners[e] && 0 !== E.emitterEventListeners[e].length) {
							for (n = 0; n < E.emitterEventListeners[e].length; n++) E.emitterEventListeners[e][n] === t && E.emitterEventListeners[e].splice(n, 1);
							return E
						}
					}, E.once = function(e, t) {
						e = p(e);
						var n = function() {
							t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), E.off(e, n)
						};
						return E.on(e, n), E
					}, E.a11y = {
						makeFocusable: function(e) {
							return e.attr("tabIndex", "0"), e
						},
						addRole: function(e, t) {
							return e.attr("role", t), e
						},
						addLabel: function(e, t) {
							return e.attr("aria-label", t), e
						},
						disable: function(e) {
							return e.attr("aria-disabled", !0), e
						},
						enable: function(e) {
							return e.attr("aria-disabled", !1), e
						},
						onEnterKey: function(e) {
							13 === e.keyCode && (t(e.target).is(E.params.nextButton) ? (E.onClickNext(e), E.isEnd ? E.a11y.notify(E.params.lastSlideMessage) : E.a11y.notify(E.params.nextSlideMessage)) : t(e.target).is(E.params.prevButton) && (E.onClickPrev(e), E.isBeginning ? E.a11y.notify(E.params.firstSlideMessage) : E.a11y.notify(E.params.prevSlideMessage)), t(e.target).is("." + E.params.bulletClass) && t(e.target)[0].click())
						},
						liveRegion: t('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
						notify: function(e) {
							var t = E.a11y.liveRegion;
							0 !== t.length && (t.html(""), t.html(e))
						},
						init: function() {
							E.params.nextButton && E.nextButton && E.nextButton.length > 0 && (E.a11y.makeFocusable(E.nextButton), E.a11y.addRole(E.nextButton, "button"), E.a11y.addLabel(E.nextButton, E.params.nextSlideMessage)), E.params.prevButton && E.prevButton && E.prevButton.length > 0 && (E.a11y.makeFocusable(E.prevButton), E.a11y.addRole(E.prevButton, "button"), E.a11y.addLabel(E.prevButton, E.params.prevSlideMessage)), t(E.container).append(E.a11y.liveRegion)
						},
						initPagination: function() {
							E.params.pagination && E.params.paginationClickable && E.bullets && E.bullets.length && E.bullets.each(function() {
								var e = t(this);
								E.a11y.makeFocusable(e), E.a11y.addRole(e, "button"), E.a11y.addLabel(e, E.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
							})
						},
						destroy: function() {
							E.a11y.liveRegion && E.a11y.liveRegion.length > 0 && E.a11y.liveRegion.remove()
						}
					}, E.init = function() {
						E.params.loop && E.createLoop(), E.updateContainerSize(), E.updateSlidesSize(), E.updatePagination(), E.params.scrollbar && E.scrollbar && (E.scrollbar.set(), E.params.scrollbarDraggable && E.scrollbar.enableDraggable()), "slide" !== E.params.effect && E.effects[E.params.effect] && (E.params.loop || E.updateProgress(), E.effects[E.params.effect].setTranslate()), E.params.loop ? E.slideTo(E.params.initialSlide + E.loopedSlides, 0, E.params.runCallbacksOnInit) : (E.slideTo(E.params.initialSlide, 0, E.params.runCallbacksOnInit), 0 === E.params.initialSlide && (E.parallax && E.params.parallax && E.parallax.setTranslate(), E.lazy && E.params.lazyLoading && (E.lazy.load(), E.lazy.initialImageLoaded = !0))), E.attachEvents(), E.params.observer && E.support.observer && E.initObservers(), E.params.preloadImages && !E.params.lazyLoading && E.preloadImages(), E.params.autoplay && E.startAutoplay(), E.params.keyboardControl && E.enableKeyboardControl && E.enableKeyboardControl(), E.params.mousewheelControl && E.enableMousewheelControl && E.enableMousewheelControl(), E.params.hashnav && E.hashnav && E.hashnav.init(), E.params.a11y && E.a11y && E.a11y.init(), E.emit("onInit", E)
					}, E.cleanupStyles = function() {
						E.container.removeClass(E.classNames.join(" ")).removeAttr("style"), E.wrapper.removeAttr("style"), E.slides && E.slides.length && E.slides.removeClass([E.params.slideVisibleClass, E.params.slideActiveClass, E.params.slideNextClass, E.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), E.paginationContainer && E.paginationContainer.length && E.paginationContainer.removeClass(E.params.paginationHiddenClass), E.bullets && E.bullets.length && E.bullets.removeClass(E.params.bulletActiveClass), E.params.prevButton && t(E.params.prevButton).removeClass(E.params.buttonDisabledClass), E.params.nextButton && t(E.params.nextButton).removeClass(E.params.buttonDisabledClass), E.params.scrollbar && E.scrollbar && (E.scrollbar.track && E.scrollbar.track.length && E.scrollbar.track.removeAttr("style"), E.scrollbar.drag && E.scrollbar.drag.length && E.scrollbar.drag.removeAttr("style"))
					}, E.destroy = function(e, t) {
						E.detachEvents(), E.stopAutoplay(), E.params.scrollbar && E.scrollbar && E.params.scrollbarDraggable && E.scrollbar.disableDraggable(), E.params.loop && E.destroyLoop(), t && E.cleanupStyles(), E.disconnectObservers(), E.params.keyboardControl && E.disableKeyboardControl && E.disableKeyboardControl(), E.params.mousewheelControl && E.disableMousewheelControl && E.disableMousewheelControl(), E.params.a11y && E.a11y && E.a11y.destroy(), E.emit("onDestroy"), e !== !1 && (E = null)
					}, E.init(), E
				}
			};
			n.prototype = {
				isSafari: function() {
					var e = navigator.userAgent.toLowerCase();
					return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
				}(),
				isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
				isArray: function(e) {
					return "[object Array]" === Object.prototype.toString.apply(e)
				},
				browser: {
					ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
					ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
				},
				device: function() {
					var e = navigator.userAgent,
						t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
						n = e.match(/(iPad).*OS\s([\d_]+)/),
						r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
						i = !n && e.match(/(iPhone\sOS)\s([\d_]+)/);
					return {
						ios: n || i || r,
						android: t
					}
				}(),
				support: {
					touch: window.Modernizr && Modernizr.touch === !0 || function() {
						return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
					}(),
					transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
						var e = document.createElement("div").style;
						return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
					}(),
					flexbox: function() {
						for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++)
							if (t[n] in e) return !0
					}(),
					observer: function() {
						return "MutationObserver" in window || "WebkitMutationObserver" in window
					}()
				},
				plugins: {}
			};
			for (var r = function() {
					var e = function(e) {
							var t = this,
								n = 0;
							for (n = 0; n < e.length; n++) t[n] = e[n];
							return t.length = e.length, this
						},
						t = function(t, n) {
							var r = [],
								i = 0;
							if (t && !n && t instanceof e) return t;
							if (t)
								if ("string" == typeof t) {
									var s, o, u = t.trim();
									if (u.indexOf("<") >= 0 && u.indexOf(">") >= 0) {
										var a = "div";
										for (0 === u.indexOf("<li") && (a = "ul"), 0 === u.indexOf("<tr") && (a = "tbody"), (0 === u.indexOf("<td") || 0 === u.indexOf("<th")) && (a = "tr"), 0 === u.indexOf("<tbody") && (a = "table"), 0 === u.indexOf("<option") && (a = "select"), o = document.createElement(a), o.innerHTML = t, i = 0; i < o.childNodes.length; i++) r.push(o.childNodes[i])
									} else
										for (s = n || "#" !== t[0] || t.match(/[ .<>:~]/) ? (n || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])], i = 0; i < s.length; i++) s[i] && r.push(s[i])
								} else if (t.nodeType || t === window || t === document) r.push(t);
							else if (t.length > 0 && t[0].nodeType)
								for (i = 0; i < t.length; i++) r.push(t[i]);
							return new e(r)
						};
					return e.prototype = {
						addClass: function(e) {
							if ("undefined" == typeof e) return this;
							for (var t = e.split(" "), n = 0; n < t.length; n++)
								for (var r = 0; r < this.length; r++) this[r].classList.add(t[n]);
							return this
						},
						removeClass: function(e) {
							for (var t = e.split(" "), n = 0; n < t.length; n++)
								for (var r = 0; r < this.length; r++) this[r].classList.remove(t[n]);
							return this
						},
						hasClass: function(e) {
							return this[0] ? this[0].classList.contains(e) : !1
						},
						toggleClass: function(e) {
							for (var t = e.split(" "), n = 0; n < t.length; n++)
								for (var r = 0; r < this.length; r++) this[r].classList.toggle(t[n]);
							return this
						},
						attr: function(e, t) {
							if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
							for (var n = 0; n < this.length; n++)
								if (2 === arguments.length) this[n].setAttribute(e, t);
								else
									for (var r in e) this[n][r] = e[r], this[n].setAttribute(r, e[r]);
							return this
						},
						removeAttr: function(e) {
							for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
							return this
						},
						data: function(e, t) {
							if ("undefined" != typeof t) {
								for (var n = 0; n < this.length; n++) {
									var r = this[n];
									r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}), r.dom7ElementDataStorage[e] = t
								}
								return this
							}
							if (this[0]) {
								var i = this[0].getAttribute("data-" + e);
								return i ? i : this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0
							}
						},
						transform: function(e) {
							for (var t = 0; t < this.length; t++) {
								var n = this[t].style;
								n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
							}
							return this
						},
						transition: function(e) {
							"string" != typeof e && (e += "ms");
							for (var t = 0; t < this.length; t++) {
								var n = this[t].style;
								n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
							}
							return this
						},
						on: function(e, n, r, i) {
							function s(e) {
								var i = e.target;
								if (t(i).is(n)) r.call(i, e);
								else
									for (var s = t(i).parents(), o = 0; o < s.length; o++) t(s[o]).is(n) && r.call(s[o], e)
							}
							var o, u, f = e.split(" ");
							for (o = 0; o < this.length; o++)
								if ("function" == typeof n || n === !1)
									for ("function" == typeof n && (r = arguments[1], i = arguments[2] || !1), u = 0; u < f.length; u++) this[o].addEventListener(f[u], r, i);
								else
									for (u = 0; u < f.length; u++) this[o].dom7LiveListeners || (this[o].dom7LiveListeners = []), this[o].dom7LiveListeners.push({
										listener: r,
										liveListener: s
									}), this[o].addEventListener(f[u], s, i);
							return this
						},
						off: function(e, t, n, r) {
							for (var i = e.split(" "), s = 0; s < i.length; s++)
								for (var o = 0; o < this.length; o++)
									if ("function" == typeof t || t === !1) "function" == typeof t && (n = arguments[1], r = arguments[2] || !1), this[o].removeEventListener(i[s], n, r);
									else if (this[o].dom7LiveListeners)
								for (var u = 0; u < this[o].dom7LiveListeners.length; u++) this[o].dom7LiveListeners[u].listener === n && this[o].removeEventListener(i[s], this[o].dom7LiveListeners[u].liveListener, r);
							return this
						},
						once: function(e, t, n, r) {
							function i(o) {
								n(o), s.off(e, t, i, r)
							}
							var s = this;
							"function" == typeof t && (t = !1, n = arguments[1], r = arguments[2]), s.on(e, t, i, r)
						},
						trigger: function(e, t) {
							for (var n = 0; n < this.length; n++) {
								var r;
								try {
									r = new window.CustomEvent(e, {
										detail: t,
										bubbles: !0,
										cancelable: !0
									})
								} catch (i) {
									r = document.createEvent("Event"), r.initEvent(e, !0, !0), r.detail = t
								}
								this[n].dispatchEvent(r)
							}
							return this
						},
						transitionEnd: function(e) {
							function t(s) {
								if (s.target === this)
									for (e.call(this, s), n = 0; n < r.length; n++) i.off(r[n], t)
							}
							var n, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
								i = this;
							if (e)
								for (n = 0; n < r.length; n++) i.on(r[n], t);
							return this
						},
						width: function() {
							return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
						},
						outerWidth: function(e) {
							return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
						},
						height: function() {
							return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
						},
						outerHeight: function(e) {
							return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
						},
						offset: function() {
							if (this.length > 0) {
								var e = this[0],
									t = e.getBoundingClientRect(),
									n = document.body,
									r = e.clientTop || n.clientTop || 0,
									i = e.clientLeft || n.clientLeft || 0,
									s = window.pageYOffset || e.scrollTop,
									o = window.pageXOffset || e.scrollLeft;
								return {
									top: t.top + s - r,
									left: t.left + o - i
								}
							}
							return null
						},
						css: function(e, t) {
							var n;
							if (1 === arguments.length) {
								if ("string" != typeof e) {
									for (n = 0; n < this.length; n++)
										for (var r in e) this[n].style[r] = e[r];
									return this
								}
								if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
							}
							if (2 === arguments.length && "string" == typeof e) {
								for (n = 0; n < this.length; n++) this[n].style[e] = t;
								return this
							}
							return this
						},
						each: function(e) {
							for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
							return this
						},
						html: function(e) {
							if ("undefined" == typeof e) return this[0] ? this[0].innerHTML : void 0;
							for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
							return this
						},
						text: function(e) {
							if ("undefined" == typeof e) return this[0] ? this[0].textContent.trim() : null;
							for (var t = 0; t < this.length; t++) this[t].textContent = e;
							return this
						},
						is: function(n) {
							if (!this[0]) return !1;
							var r, i;
							if ("string" == typeof n) {
								var s = this[0];
								if (s === document) return n === document;
								if (s === window) return n === window;
								if (s.matches) return s.matches(n);
								if (s.webkitMatchesSelector) return s.webkitMatchesSelector(n);
								if (s.mozMatchesSelector) return s.mozMatchesSelector(n);
								if (s.msMatchesSelector) return s.msMatchesSelector(n);
								for (r = t(n), i = 0; i < r.length; i++)
									if (r[i] === this[0]) return !0;
								return !1
							}
							if (n === document) return this[0] === document;
							if (n === window) return this[0] === window;
							if (n.nodeType || n instanceof e) {
								for (r = n.nodeType ? [n] : n, i = 0; i < r.length; i++)
									if (r[i] === this[0]) return !0;
								return !1
							}
							return !1
						},
						index: function() {
							if (this[0]) {
								for (var e = this[0], t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && t++;
								return t
							}
						},
						eq: function(t) {
							if ("undefined" == typeof t) return this;
							var n, r = this.length;
							return t > r - 1 ? new e([]) : 0 > t ? (n = r + t, new e(0 > n ? [] : [this[n]])) : new e([this[t]])
						},
						append: function(t) {
							var n, r;
							for (n = 0; n < this.length; n++)
								if ("string" == typeof t) {
									var i = document.createElement("div");
									for (i.innerHTML = t; i.firstChild;) this[n].appendChild(i.firstChild)
								} else if (t instanceof e)
								for (r = 0; r < t.length; r++) this[n].appendChild(t[r]);
							else this[n].appendChild(t);
							return this
						},
						prepend: function(t) {
							var n, r;
							for (n = 0; n < this.length; n++)
								if ("string" == typeof t) {
									var i = document.createElement("div");
									for (i.innerHTML = t, r = i.childNodes.length - 1; r >= 0; r--) this[n].insertBefore(i.childNodes[r], this[n].childNodes[0])
								} else if (t instanceof e)
								for (r = 0; r < t.length; r++) this[n].insertBefore(t[r], this[n].childNodes[0]);
							else this[n].insertBefore(t, this[n].childNodes[0]);
							return this
						},
						insertBefore: function(e) {
							for (var n = t(e), r = 0; r < this.length; r++)
								if (1 === n.length) n[0].parentNode.insertBefore(this[r], n[0]);
								else if (n.length > 1)
								for (var i = 0; i < n.length; i++) n[i].parentNode.insertBefore(this[r].cloneNode(!0), n[i])
						},
						insertAfter: function(e) {
							for (var n = t(e), r = 0; r < this.length; r++)
								if (1 === n.length) n[0].parentNode.insertBefore(this[r], n[0].nextSibling);
								else if (n.length > 1)
								for (var i = 0; i < n.length; i++) n[i].parentNode.insertBefore(this[r].cloneNode(!0), n[i].nextSibling)
						},
						next: function(n) {
							return new e(this.length > 0 ? n ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(n) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
						},
						nextAll: function(n) {
							var r = [],
								i = this[0];
							if (!i) return new e([]);
							for (; i.nextElementSibling;) {
								var s = i.nextElementSibling;
								n ? t(s).is(n) && r.push(s) : r.push(s), i = s
							}
							return new e(r)
						},
						prev: function(n) {
							return new e(this.length > 0 ? n ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(n) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
						},
						prevAll: function(n) {
							var r = [],
								i = this[0];
							if (!i) return new e([]);
							for (; i.previousElementSibling;) {
								var s = i.previousElementSibling;
								n ? t(s).is(n) && r.push(s) : r.push(s), i = s
							}
							return new e(r)
						},
						parent: function(e) {
							for (var n = [], r = 0; r < this.length; r++) e ? t(this[r].parentNode).is(e) && n.push(this[r].parentNode) : n.push(this[r].parentNode);
							return t(t.unique(n))
						},
						parents: function(e) {
							for (var n = [], r = 0; r < this.length; r++)
								for (var i = this[r].parentNode; i;) e ? t(i).is(e) && n.push(i) : n.push(i), i = i.parentNode;
							return t(t.unique(n))
						},
						find: function(t) {
							for (var n = [], r = 0; r < this.length; r++)
								for (var i = this[r].querySelectorAll(t), s = 0; s < i.length; s++) n.push(i[s]);
							return new e(n)
						},
						children: function(n) {
							for (var r = [], i = 0; i < this.length; i++)
								for (var s = this[i].childNodes, o = 0; o < s.length; o++) n ? 1 === s[o].nodeType && t(s[o]).is(n) && r.push(s[o]) : 1 === s[o].nodeType && r.push(s[o]);
							return new e(t.unique(r))
						},
						remove: function() {
							for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
							return this
						},
						add: function() {
							var e, n, r = this;
							for (e = 0; e < arguments.length; e++) {
								var i = t(arguments[e]);
								for (n = 0; n < i.length; n++) r[r.length] = i[n], r.length++
							}
							return r
						}
					}, t.fn = e.prototype, t.unique = function(e) {
						for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
						return t
					}, t
				}(), i = ["jQuery", "Zepto", "Dom7"], s = 0; s < i.length; s++) window[i[s]] && e(window[i[s]]);
			var o;
			o = "undefined" == typeof r ? window.Dom7 || window.Zepto || window.jQuery : r, o && ("transitionEnd" in o.fn || (o.fn.transitionEnd = function(e) {
				function t(s) {
					if (s.target === this)
						for (e.call(this, s), n = 0; n < r.length; n++) i.off(r[n], t)
				}
				var n, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
					i = this;
				if (e)
					for (n = 0; n < r.length; n++) i.on(r[n], t);
				return this
			}), "transform" in o.fn || (o.fn.transform = function(e) {
				for (var t = 0; t < this.length; t++) {
					var n = this[t].style;
					n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
				}
				return this
			}), "transition" in o.fn || (o.fn.transition = function(e) {
				"string" != typeof e && (e += "ms");
				for (var t = 0; t < this.length; t++) {
					var n = this[t].style;
					n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
				}
				return this
			})), window.Swiper = n
		}(), "undefined" != typeof t ? t.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
			"use strict";
			return window.Swiper
		})
	}(t.exports, t, e);
	e.____MODULES["cd2bffb7f2508310dfd41bb26a34f44d"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "03c28899f856258c505f08db366bfd3e",
		filename: "iscroll-probe.js",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(e, t, n) {
		(function(e, n, r) {
			function o(e, t) {
				this.wrapper = typeof e == "string" ? n.querySelector(e) : e;
				this.scroller = this.wrapper.children[0];
				this.scrollerStyle = this.scroller.style;
				this.options = {
					resizeScrollbars: true,
					mouseWheelSpeed: 20,
					snapThreshold: .334,
					startX: 0,
					startY: 0,
					scrollY: true,
					directionLockThreshold: 5,
					momentum: true,
					bounce: true,
					bounceTime: 600,
					bounceEasing: "",
					preventDefault: true,
					preventDefaultException: {
						tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
					},
					HWCompositing: true,
					useTransition: true,
					useTransform: true
				};
				for (var r in t) {
					this.options[r] = t[r]
				}
				this.translateZ = this.options.HWCompositing && s.hasPerspective ? " translateZ(0)" : "";
				this.options.useTransition = s.hasTransition && this.options.useTransition;
				this.options.useTransform = s.hasTransform && this.options.useTransform;
				this.options.eventPassthrough = this.options.eventPassthrough === true ? "vertical" : this.options.eventPassthrough;
				this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
				this.options.scrollY = this.options.eventPassthrough == "vertical" ? false : this.options.scrollY;
				this.options.scrollX = this.options.eventPassthrough == "horizontal" ? false : this.options.scrollX;
				this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
				this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
				this.options.bounceEasing = typeof this.options.bounceEasing == "string" ? s.ease[this.options.bounceEasing] || s.ease.circular : this.options.bounceEasing;
				this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
				if (this.options.tap === true) {
					this.options.tap = "tap"
				}
				if (this.options.shrinkScrollbars == "scale") {
					this.options.useTransition = false
				}
				this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
				if (this.options.probeType == 3) {
					this.options.useTransition = false
				}
				this.x = 0;
				this.y = 0;
				this.directionX = 0;
				this.directionY = 0;
				this._events = {};
				this._init();
				this.refresh();
				this.scrollTo(this.options.startX, this.options.startY);
				this.enable()
			}

			function u(e, t, r) {
				var i = n.createElement("div"),
					s = n.createElement("div");
				if (r === true) {
					i.style.cssText = "position:absolute;z-index:9999";
					s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"
				}
				s.className = "iScrollIndicator";
				if (e == "h") {
					if (r === true) {
						i.style.cssText += ";height:7px;left:2px;right:2px;bottom:0";
						s.style.height = "100%"
					}
					i.className = "iScrollHorizontalScrollbar"
				} else {
					if (r === true) {
						i.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px";
						s.style.width = "100%"
					}
					i.className = "iScrollVerticalScrollbar"
				}
				i.style.cssText += ";overflow:hidden";
				if (!t) {
					i.style.pointerEvents = "none"
				}
				i.appendChild(s);
				return i
			}

			function a(t, r) {
				this.wrapper = typeof r.el == "string" ? n.querySelector(r.el) : r.el;
				this.wrapperStyle = this.wrapper.style;
				this.indicator = this.wrapper.children[0];
				this.indicatorStyle = this.indicator.style;
				this.scroller = t;
				this.options = {
					listenX: true,
					listenY: true,
					interactive: false,
					resize: true,
					defaultScrollbars: false,
					shrink: false,
					fade: false,
					speedRatioX: 0,
					speedRatioY: 0
				};
				for (var i in r) {
					this.options[i] = r[i]
				}
				this.sizeRatioX = 1;
				this.sizeRatioY = 1;
				this.maxPosX = 0;
				this.maxPosY = 0;
				if (this.options.interactive) {
					if (!this.options.disableTouch) {
						s.addEvent(this.indicator, "touchstart", this);
						s.addEvent(e, "touchend", this)
					}
					if (!this.options.disablePointer) {
						s.addEvent(this.indicator, s.prefixPointerEvent("pointerdown"), this);
						s.addEvent(e, s.prefixPointerEvent("pointerup"), this)
					}
					if (!this.options.disableMouse) {
						s.addEvent(this.indicator, "mousedown", this);
						s.addEvent(e, "mouseup", this)
					}
				}
				if (this.options.fade) {
					this.wrapperStyle[s.style.transform] = this.scroller.translateZ;
					this.wrapperStyle[s.style.transitionDuration] = s.isBadAndroid ? "0.001s" : "0ms";
					this.wrapperStyle.opacity = "0"
				}
			}
			var i = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
				e.setTimeout(t, 1e3 / 60)
			};
			var s = function() {
				function o(e) {
					if (s === false) return false;
					if (s === "") return e;
					return s + e.charAt(0).toUpperCase() + e.substr(1)
				}
				var t = {};
				var i = n.createElement("div").style;
				var s = function() {
					var e = ["t", "webkitT", "MozT", "msT", "OT"],
						t, n = 0,
						r = e.length;
					for (; n < r; n++) {
						t = e[n] + "ransform";
						if (t in i) return e[n].substr(0, e[n].length - 1)
					}
					return false
				}();
				t.getTime = Date.now || function() {
					return (new Date).getTime()
				};
				t.extend = function(e, t) {
					for (var n in t) {
						e[n] = t[n]
					}
				};
				t.addEvent = function(e, t, n, r) {
					e.addEventListener(t, n, !!r)
				};
				t.removeEvent = function(e, t, n, r) {
					e.removeEventListener(t, n, !!r)
				};
				t.prefixPointerEvent = function(t) {
					return e.MSPointerEvent ? "MSPointer" + t.charAt(9).toUpperCase() + t.substr(10) : t
				};
				t.momentum = function(e, t, n, i, s, o) {
					var u = e - t,
						a = r.abs(u) / n,
						f, l;
					o = o === undefined ? 6e-4 : o;
					f = e + a * a / (2 * o) * (u < 0 ? -1 : 1);
					l = a / o;
					if (f < i) {
						f = s ? i - s / 2.5 * (a / 8) : i;
						u = r.abs(f - e);
						l = u / a
					} else if (f > 0) {
						f = s ? s / 2.5 * (a / 8) : 0;
						u = r.abs(e) + f;
						l = u / a
					}
					return {
						destination: r.round(f),
						duration: l
					}
				};
				var u = o("transform");
				t.extend(t, {
					hasTransform: u !== false,
					hasPerspective: o("perspective") in i,
					hasTouch: "ontouchstart" in e,
					hasPointer: e.PointerEvent || e.MSPointerEvent,
					hasTransition: o("transition") in i
				});
				t.isBadAndroid = /Android /.test(e.navigator.appVersion) && !/Chrome\/\d/.test(e.navigator.appVersion);
				t.extend(t.style = {}, {
					transform: u,
					transitionTimingFunction: o("transitionTimingFunction"),
					transitionDuration: o("transitionDuration"),
					transitionDelay: o("transitionDelay"),
					transformOrigin: o("transformOrigin")
				});
				t.hasClass = function(e, t) {
					var n = new RegExp("(^|\\s)" + t + "(\\s|$)");
					return n.test(e.className)
				};
				t.addClass = function(e, n) {
					if (t.hasClass(e, n)) {
						return
					}
					var r = e.className.split(" ");
					r.push(n);
					e.className = r.join(" ")
				};
				t.removeClass = function(e, n) {
					if (!t.hasClass(e, n)) {
						return
					}
					var r = new RegExp("(^|\\s)" + n + "(\\s|$)", "g");
					e.className = e.className.replace(r, " ")
				};
				t.offset = function(e) {
					var t = -e.offsetLeft,
						n = -e.offsetTop;
					while (e = e.offsetParent) {
						t -= e.offsetLeft;
						n -= e.offsetTop
					}
					return {
						left: t,
						top: n
					}
				};
				t.preventDefaultException = function(e, t) {
					for (var n in t) {
						if (t[n].test(e[n])) {
							return true
						}
					}
					return false
				};
				t.extend(t.eventType = {}, {
					touchstart: 1,
					touchmove: 1,
					touchend: 1,
					mousedown: 2,
					mousemove: 2,
					mouseup: 2,
					pointerdown: 3,
					pointermove: 3,
					pointerup: 3,
					MSPointerDown: 3,
					MSPointerMove: 3,
					MSPointerUp: 3
				});
				t.extend(t.ease = {}, {
					quadratic: {
						style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
						fn: function(e) {
							return e * (2 - e)
						}
					},
					circular: {
						style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
						fn: function(e) {
							return r.sqrt(1 - --e * e)
						}
					},
					back: {
						style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
						fn: function(e) {
							var t = 4;
							return (e = e - 1) * e * ((t + 1) * e + t) + 1
						}
					},
					bounce: {
						style: "",
						fn: function(e) {
							if ((e /= 1) < 1 / 2.75) {
								return 7.5625 * e * e
							} else if (e < 2 / 2.75) {
								return 7.5625 * (e -= 1.5 / 2.75) * e + .75
							} else if (e < 2.5 / 2.75) {
								return 7.5625 * (e -= 2.25 / 2.75) * e + .9375
							} else {
								return 7.5625 * (e -= 2.625 / 2.75) * e + .984375
							}
						}
					},
					elastic: {
						style: "",
						fn: function(e) {
							var t = .22,
								n = .4;
							if (e === 0) {
								return 0
							}
							if (e == 1) {
								return 1
							}
							return n * r.pow(2, -10 * e) * r.sin((e - t / 4) * 2 * r.PI / t) + 1
						}
					}
				});
				t.tap = function(e, t) {
					var r = n.createEvent("Event");
					r.initEvent(t, true, true);
					r.pageX = e.pageX;
					r.pageY = e.pageY;
					e.target.dispatchEvent(r)
				};
				t.click = function(e) {
					var t = e.target,
						r;
					if (!/(SELECT|INPUT|TEXTAREA)/i.test(t.tagName)) {
						r = n.createEvent("MouseEvents");
						r.initMouseEvent("click", true, true, e.view, 1, t.screenX, t.screenY, t.clientX, t.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
						r._constructed = true;
						t.dispatchEvent(r)
					}
				};
				return t
			}();
			o.prototype = {
				version: "5.1.3",
				_init: function() {
					this._initEvents();
					if (this.options.scrollbars || this.options.indicators) {
						this._initIndicators()
					}
					if (this.options.mouseWheel) {
						this._initWheel()
					}
					if (this.options.snap) {
						this._initSnap()
					}
					if (this.options.keyBindings) {
						this._initKeys()
					}
				},
				destroy: function() {
					this._initEvents(true);
					this._execEvent("destroy")
				},
				_transitionEnd: function(e) {
					if (e.target != this.scroller || !this.isInTransition) {
						return
					}
					this._transitionTime();
					if (!this.resetPosition(this.options.bounceTime)) {
						this.isInTransition = false;
						this._execEvent("scrollEnd")
					}
				},
				_start: function(e) {
					if (s.eventType[e.type] != 1) {
						if (e.button !== 0) {
							return
						}
					}
					if (!this.enabled || this.initiated && s.eventType[e.type] !== this.initiated) {
						return
					}
					if (this.options.preventDefault && !s.isBadAndroid && !s.preventDefaultException(e.target, this.options.preventDefaultException)) {
						e.preventDefault()
					}
					var t = e.touches ? e.touches[0] : e,
						n;
					this.initiated = s.eventType[e.type];
					this.moved = false;
					this.distX = 0;
					this.distY = 0;
					this.directionX = 0;
					this.directionY = 0;
					this.directionLocked = 0;
					this._transitionTime();
					this.startTime = s.getTime();
					if (this.options.useTransition && this.isInTransition) {
						this.isInTransition = false;
						n = this.getComputedPosition();
						this._translate(r.round(n.x), r.round(n.y));
						this._execEvent("scrollEnd")
					} else if (!this.options.useTransition && this.isAnimating) {
						this.isAnimating = false;
						this._execEvent("scrollEnd")
					}
					this.startX = this.x;
					this.startY = this.y;
					this.absStartX = this.x;
					this.absStartY = this.y;
					this.pointX = t.pageX;
					this.pointY = t.pageY;
					this._execEvent("beforeScrollStart")
				},
				_move: function(e) {
					if (!this.enabled || s.eventType[e.type] !== this.initiated) {
						return
					}
					if (this.options.preventDefault) {
						e.preventDefault()
					}
					var t = e.touches ? e.touches[0] : e,
						n = t.pageX - this.pointX,
						i = t.pageY - this.pointY,
						o = s.getTime(),
						u, a, f, l;
					this.pointX = t.pageX;
					this.pointY = t.pageY;
					this.distX += n;
					this.distY += i;
					f = r.abs(this.distX);
					l = r.abs(this.distY);
					if (o - this.endTime > 300 && f < 10 && l < 10) {
						return
					}
					if (!this.directionLocked && !this.options.freeScroll) {
						if (f > l + this.options.directionLockThreshold) {
							this.directionLocked = "h"
						} else if (l >= f + this.options.directionLockThreshold) {
							this.directionLocked = "v"
						} else {
							this.directionLocked = "n"
						}
					}
					if (this.directionLocked == "h") {
						if (this.options.eventPassthrough == "vertical") {
							e.preventDefault()
						} else if (this.options.eventPassthrough == "horizontal") {
							this.initiated = false;
							return
						}
						i = 0
					} else if (this.directionLocked == "v") {
						if (this.options.eventPassthrough == "horizontal") {
							e.preventDefault()
						} else if (this.options.eventPassthrough == "vertical") {
							this.initiated = false;
							return
						}
						n = 0
					}
					n = this.hasHorizontalScroll ? n : 0;
					i = this.hasVerticalScroll ? i : 0;
					u = this.x + n;
					a = this.y + i;
					if (u > 0 || u < this.maxScrollX) {
						u = this.options.bounce ? this.x + n / 3 : u > 0 ? 0 : this.maxScrollX
					}
					if (a > 0 || a < this.maxScrollY) {
						a = this.options.bounce ? this.y + i / 3 : a > 0 ? 0 : this.maxScrollY
					}
					this.directionX = n > 0 ? -1 : n < 0 ? 1 : 0;
					this.directionY = i > 0 ? -1 : i < 0 ? 1 : 0;
					if (!this.moved) {
						this._execEvent("scrollStart")
					}
					this.moved = true;
					this._translate(u, a);
					if (o - this.startTime > 300) {
						this.startTime = o;
						this.startX = this.x;
						this.startY = this.y;
						if (this.options.probeType == 1) {
							this._execEvent("scroll")
						}
					}
					if (this.options.probeType > 1) {
						this._execEvent("scroll")
					}
				},
				_end: function(e) {
					if (!this.enabled || s.eventType[e.type] !== this.initiated) {
						return
					}
					if (this.options.preventDefault && !s.preventDefaultException(e.target, this.options.preventDefaultException)) {
						e.preventDefault()
					}
					var t = e.changedTouches ? e.changedTouches[0] : e,
						n, i, o = s.getTime() - this.startTime,
						u = r.round(this.x),
						a = r.round(this.y),
						f = r.abs(u - this.startX),
						l = r.abs(a - this.startY),
						c = 0,
						h = "";
					this.isInTransition = 0;
					this.initiated = 0;
					this.endTime = s.getTime();
					if (this.resetPosition(this.options.bounceTime)) {
						return
					}
					this.scrollTo(u, a);
					if (!this.moved) {
						if (this.options.tap) {
							s.tap(e, this.options.tap)
						}
						if (this.options.click) {
							s.click(e)
						}
						this._execEvent("scrollCancel");
						return
					}
					if (this._events.flick && o < 200 && f < 100 && l < 100) {
						this._execEvent("flick");
						return
					}
					if (this.options.momentum && o < 300) {
						n = this.hasHorizontalScroll ? s.momentum(this.x, this.startX, o, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
							destination: u,
							duration: 0
						};
						i = this.hasVerticalScroll ? s.momentum(this.y, this.startY, o, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
							destination: a,
							duration: 0
						};
						u = n.destination;
						a = i.destination;
						c = r.max(n.duration, i.duration);
						this.isInTransition = 1
					}
					if (this.options.snap) {
						var p = this._nearestSnap(u, a);
						this.currentPage = p;
						c = this.options.snapSpeed || r.max(r.max(r.min(r.abs(u - p.x), 1e3), r.min(r.abs(a - p.y), 1e3)), 300);
						u = p.x;
						a = p.y;
						this.directionX = 0;
						this.directionY = 0;
						h = this.options.bounceEasing
					}
					if (u != this.x || a != this.y) {
						if (u > 0 || u < this.maxScrollX || a > 0 || a < this.maxScrollY) {
							h = s.ease.quadratic
						}
						this.scrollTo(u, a, c, h);
						return
					}
					this._execEvent("scrollEnd")
				},
				_resize: function() {
					var e = this;
					clearTimeout(this.resizeTimeout);
					this.resizeTimeout = setTimeout(function() {
						e.refresh()
					}, this.options.resizePolling)
				},
				resetPosition: function(e) {
					var t = this.x,
						n = this.y;
					e = e || 0;
					if (!this.hasHorizontalScroll || this.x > 0) {
						t = 0
					} else if (this.x < this.maxScrollX) {
						t = this.maxScrollX
					}
					if (!this.hasVerticalScroll || this.y > 0) {
						n = 0
					} else if (this.y < this.maxScrollY) {
						n = this.maxScrollY
					}
					if (t == this.x && n == this.y) {
						return false
					}
					this.scrollTo(t, n, e, this.options.bounceEasing);
					return true
				},
				disable: function() {
					this.enabled = false
				},
				enable: function() {
					this.enabled = true
				},
				refresh: function() {
					var e = this.wrapper.offsetHeight;
					this.wrapperWidth = this.wrapper.clientWidth;
					this.wrapperHeight = this.wrapper.clientHeight;
					this.scrollerWidth = this.scroller.offsetWidth;
					this.scrollerHeight = this.scroller.offsetHeight;
					this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
					this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
					this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
					this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
					if (!this.hasHorizontalScroll) {
						this.maxScrollX = 0;
						this.scrollerWidth = this.wrapperWidth
					}
					if (!this.hasVerticalScroll) {
						this.maxScrollY = 0;
						this.scrollerHeight = this.wrapperHeight
					}
					this.endTime = 0;
					this.directionX = 0;
					this.directionY = 0;
					this.wrapperOffset = s.offset(this.wrapper);
					this._execEvent("refresh");
					this.resetPosition()
				},
				on: function(e, t) {
					if (!this._events[e]) {
						this._events[e] = []
					}
					this._events[e].push(t)
				},
				off: function(e, t) {
					if (!this._events[e]) {
						return
					}
					var n = this._events[e].indexOf(t);
					if (n > -1) {
						this._events[e].splice(n, 1)
					}
				},
				_execEvent: function(e) {
					if (!this._events[e]) {
						return
					}
					var t = 0,
						n = this._events[e].length;
					if (!n) {
						return
					}
					for (; t < n; t++) {
						this._events[e][t].apply(this, [].slice.call(arguments, 1))
					}
				},
				scrollBy: function(e, t, n, r) {
					e = this.x + e;
					t = this.y + t;
					n = n || 0;
					this.scrollTo(e, t, n, r)
				},
				scrollTo: function(e, t, n, r) {
					r = r || s.ease.circular;
					this.isInTransition = this.options.useTransition && n > 0;
					if (!n || this.options.useTransition && r.style) {
						this._transitionTimingFunction(r.style);
						this._transitionTime(n);
						this._translate(e, t)
					} else {
						this._animate(e, t, n, r.fn)
					}
				},
				scrollToElement: function(e, t, n, i, o) {
					e = e.nodeType ? e : this.scroller.querySelector(e);
					if (!e) {
						return
					}
					var u = s.offset(e);
					u.left -= this.wrapperOffset.left;
					u.top -= this.wrapperOffset.top;
					if (n === true) {
						n = r.round(e.offsetWidth / 2 - this.wrapper.offsetWidth / 2)
					}
					if (i === true) {
						i = r.round(e.offsetHeight / 2 - this.wrapper.offsetHeight / 2)
					}
					u.left -= n || 0;
					u.top -= i || 0;
					u.left = u.left > 0 ? 0 : u.left < this.maxScrollX ? this.maxScrollX : u.left;
					u.top = u.top > 0 ? 0 : u.top < this.maxScrollY ? this.maxScrollY : u.top;
					t = t === undefined || t === null || t === "auto" ? r.max(r.abs(this.x - u.left), r.abs(this.y - u.top)) : t;
					this.scrollTo(u.left, u.top, t, o)
				},
				_transitionTime: function(e) {
					e = e || 0;
					this.scrollerStyle[s.style.transitionDuration] = e + "ms";
					if (!e && s.isBadAndroid) {
						this.scrollerStyle[s.style.transitionDuration] = "0.001s"
					}
					if (this.indicators) {
						for (var t = this.indicators.length; t--;) {
							this.indicators[t].transitionTime(e)
						}
					}
				},
				_transitionTimingFunction: function(e) {
					this.scrollerStyle[s.style.transitionTimingFunction] = e;
					if (this.indicators) {
						for (var t = this.indicators.length; t--;) {
							this.indicators[t].transitionTimingFunction(e)
						}
					}
				},
				_translate: function(e, t) {
					if (this.options.useTransform) {
						this.scrollerStyle[s.style.transform] = "translate(" + e + "px," + t + "px)" + this.translateZ
					} else {
						e = r.round(e);
						t = r.round(t);
						this.scrollerStyle.left = e + "px";
						this.scrollerStyle.top = t + "px"
					}
					this.x = e;
					this.y = t;
					if (this.indicators) {
						for (var n = this.indicators.length; n--;) {
							this.indicators[n].updatePosition()
						}
					}
				},
				_initEvents: function(t) {
					var n = t ? s.removeEvent : s.addEvent,
						r = this.options.bindToWrapper ? this.wrapper : e;
					n(e, "orientationchange", this);
					n(e, "resize", this);
					if (this.options.click) {
						n(this.wrapper, "click", this, true)
					}
					if (!this.options.disableMouse) {
						n(this.wrapper, "mousedown", this);
						n(r, "mousemove", this);
						n(r, "mousecancel", this);
						n(r, "mouseup", this)
					}
					if (s.hasPointer && !this.options.disablePointer) {
						n(this.wrapper, s.prefixPointerEvent("pointerdown"), this);
						n(r, s.prefixPointerEvent("pointermove"), this);
						n(r, s.prefixPointerEvent("pointercancel"), this);
						n(r, s.prefixPointerEvent("pointerup"), this)
					}
					if (s.hasTouch && !this.options.disableTouch) {
						n(this.wrapper, "touchstart", this);
						n(r, "touchmove", this);
						n(r, "touchcancel", this);
						n(r, "touchend", this)
					}
					n(this.scroller, "transitionend", this);
					n(this.scroller, "webkitTransitionEnd", this);
					n(this.scroller, "oTransitionEnd", this);
					n(this.scroller, "MSTransitionEnd", this)
				},
				getComputedPosition: function() {
					var t = e.getComputedStyle(this.scroller, null),
						n, r;
					if (this.options.useTransform) {
						t = t[s.style.transform].split(")")[0].split(", ");
						n = +(t[12] || t[4]);
						r = +(t[13] || t[5])
					} else {
						n = +t.left.replace(/[^-\d.]/g, "");
						r = +t.top.replace(/[^-\d.]/g, "")
					}
					return {
						x: n,
						y: r
					}
				},
				_initIndicators: function() {
					function o(e) {
						for (var t = i.indicators.length; t--;) {
							e.call(i.indicators[t])
						}
					}
					var e = this.options.interactiveScrollbars,
						t = typeof this.options.scrollbars != "string",
						n = [],
						r;
					var i = this;
					this.indicators = [];
					if (this.options.scrollbars) {
						if (this.options.scrollY) {
							r = {
								el: u("v", e, this.options.scrollbars),
								interactive: e,
								defaultScrollbars: true,
								customStyle: t,
								resize: this.options.resizeScrollbars,
								shrink: this.options.shrinkScrollbars,
								fade: this.options.fadeScrollbars,
								listenX: false
							};
							this.wrapper.appendChild(r.el);
							n.push(r)
						}
						if (this.options.scrollX) {
							r = {
								el: u("h", e, this.options.scrollbars),
								interactive: e,
								defaultScrollbars: true,
								customStyle: t,
								resize: this.options.resizeScrollbars,
								shrink: this.options.shrinkScrollbars,
								fade: this.options.fadeScrollbars,
								listenY: false
							};
							this.wrapper.appendChild(r.el);
							n.push(r)
						}
					}
					if (this.options.indicators) {
						n = n.concat(this.options.indicators)
					}
					for (var s = n.length; s--;) {
						this.indicators.push(new a(this, n[s]))
					}
					if (this.options.fadeScrollbars) {
						this.on("scrollEnd", function() {
							o(function() {
								this.fade()
							})
						});
						this.on("scrollCancel", function() {
							o(function() {
								this.fade()
							})
						});
						this.on("scrollStart", function() {
							o(function() {
								this.fade(1)
							})
						});
						this.on("beforeScrollStart", function() {
							o(function() {
								this.fade(1, true)
							})
						})
					}
					this.on("refresh", function() {
						o(function() {
							this.refresh()
						})
					});
					this.on("destroy", function() {
						o(function() {
							this.destroy()
						});
						delete this.indicators
					})
				},
				_initWheel: function() {
					s.addEvent(this.wrapper, "wheel", this);
					s.addEvent(this.wrapper, "mousewheel", this);
					s.addEvent(this.wrapper, "DOMMouseScroll", this);
					this.on("destroy", function() {
						s.removeEvent(this.wrapper, "wheel", this);
						s.removeEvent(this.wrapper, "mousewheel", this);
						s.removeEvent(this.wrapper, "DOMMouseScroll", this)
					})
				},
				_wheel: function(e) {
					if (!this.enabled) {
						return
					}
					e.preventDefault();
					e.stopPropagation();
					var t, n, i, s, o = this;
					if (this.wheelTimeout === undefined) {
						o._execEvent("scrollStart")
					}
					clearTimeout(this.wheelTimeout);
					this.wheelTimeout = setTimeout(function() {
						o._execEvent("scrollEnd");
						o.wheelTimeout = undefined
					}, 400);
					if ("deltaX" in e) {
						if (e.deltaMode === 1) {
							t = -e.deltaX * this.options.mouseWheelSpeed;
							n = -e.deltaY * this.options.mouseWheelSpeed
						} else {
							t = -e.deltaX;
							n = -e.deltaY
						}
					} else if ("wheelDeltaX" in e) {
						t = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
						n = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed
					} else if ("wheelDelta" in e) {
						t = n = e.wheelDelta / 120 * this.options.mouseWheelSpeed
					} else if ("detail" in e) {
						t = n = -e.detail / 3 * this.options.mouseWheelSpeed
					} else {
						return
					}
					t *= this.options.invertWheelDirection;
					n *= this.options.invertWheelDirection;
					if (!this.hasVerticalScroll) {
						t = n;
						n = 0
					}
					if (this.options.snap) {
						i = this.currentPage.pageX;
						s = this.currentPage.pageY;
						if (t > 0) {
							i--
						} else if (t < 0) {
							i++
						}
						if (n > 0) {
							s--
						} else if (n < 0) {
							s++
						}
						this.goToPage(i, s);
						return
					}
					i = this.x + r.round(this.hasHorizontalScroll ? t : 0);
					s = this.y + r.round(this.hasVerticalScroll ? n : 0);
					if (i > 0) {
						i = 0
					} else if (i < this.maxScrollX) {
						i = this.maxScrollX
					}
					if (s > 0) {
						s = 0
					} else if (s < this.maxScrollY) {
						s = this.maxScrollY
					}
					this.scrollTo(i, s, 0);
					if (this.options.probeType > 1) {
						this._execEvent("scroll")
					}
				},
				_initSnap: function() {
					this.currentPage = {};
					if (typeof this.options.snap == "string") {
						this.options.snap = this.scroller.querySelectorAll(this.options.snap)
					}
					this.on("refresh", function() {
						var e = 0,
							t, n = 0,
							i, s, o, u = 0,
							a, f = this.options.snapStepX || this.wrapperWidth,
							l = this.options.snapStepY || this.wrapperHeight,
							c;
						this.pages = [];
						if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
							return
						}
						if (this.options.snap === true) {
							s = r.round(f / 2);
							o = r.round(l / 2);
							while (u > -this.scrollerWidth) {
								this.pages[e] = [];
								t = 0;
								a = 0;
								while (a > -this.scrollerHeight) {
									this.pages[e][t] = {
										x: r.max(u, this.maxScrollX),
										y: r.max(a, this.maxScrollY),
										width: f,
										height: l,
										cx: u - s,
										cy: a - o
									};
									a -= l;
									t++
								}
								u -= f;
								e++
							}
						} else {
							c = this.options.snap;
							t = c.length;
							i = -1;
							for (; e < t; e++) {
								if (e === 0 || c[e].offsetLeft <= c[e - 1].offsetLeft) {
									n = 0;
									i++
								}
								if (!this.pages[n]) {
									this.pages[n] = []
								}
								u = r.max(-c[e].offsetLeft, this.maxScrollX);
								a = r.max(-c[e].offsetTop, this.maxScrollY);
								s = u - r.round(c[e].offsetWidth / 2);
								o = a - r.round(c[e].offsetHeight / 2);
								this.pages[n][i] = {
									x: u,
									y: a,
									width: c[e].offsetWidth,
									height: c[e].offsetHeight,
									cx: s,
									cy: o
								};
								if (u > this.maxScrollX) {
									n++
								}
							}
						}
						this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
						if (this.options.snapThreshold % 1 === 0) {
							this.snapThresholdX = this.options.snapThreshold;
							this.snapThresholdY = this.options.snapThreshold
						} else {
							this.snapThresholdX = r.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
							this.snapThresholdY = r.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold)
						}
					});
					this.on("flick", function() {
						var e = this.options.snapSpeed || r.max(r.max(r.min(r.abs(this.x - this.startX), 1e3), r.min(r.abs(this.y - this.startY), 1e3)), 300);
						this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, e)
					})
				},
				_nearestSnap: function(e, t) {
					if (!this.pages.length) {
						return {
							x: 0,
							y: 0,
							pageX: 0,
							pageY: 0
						}
					}
					var n = 0,
						i = this.pages.length,
						s = 0;
					if (r.abs(e - this.absStartX) < this.snapThresholdX && r.abs(t - this.absStartY) < this.snapThresholdY) {
						return this.currentPage
					}
					if (e > 0) {
						e = 0
					} else if (e < this.maxScrollX) {
						e = this.maxScrollX
					}
					if (t > 0) {
						t = 0
					} else if (t < this.maxScrollY) {
						t = this.maxScrollY
					}
					for (; n < i; n++) {
						if (e >= this.pages[n][0].cx) {
							e = this.pages[n][0].x;
							break
						}
					}
					i = this.pages[n].length;
					for (; s < i; s++) {
						if (t >= this.pages[0][s].cy) {
							t = this.pages[0][s].y;
							break
						}
					}
					if (n == this.currentPage.pageX) {
						n += this.directionX;
						if (n < 0) {
							n = 0
						} else if (n >= this.pages.length) {
							n = this.pages.length - 1
						}
						e = this.pages[n][0].x
					}
					if (s == this.currentPage.pageY) {
						s += this.directionY;
						if (s < 0) {
							s = 0
						} else if (s >= this.pages[0].length) {
							s = this.pages[0].length - 1
						}
						t = this.pages[0][s].y
					}
					return {
						x: e,
						y: t,
						pageX: n,
						pageY: s
					}
				},
				goToPage: function(e, t, n, i) {
					i = i || this.options.bounceEasing;
					if (e >= this.pages.length) {
						e = this.pages.length - 1
					} else if (e < 0) {
						e = 0
					}
					if (t >= this.pages[e].length) {
						t = this.pages[e].length - 1
					} else if (t < 0) {
						t = 0
					}
					var s = this.pages[e][t].x,
						o = this.pages[e][t].y;
					n = n === undefined ? this.options.snapSpeed || r.max(r.max(r.min(r.abs(s - this.x), 1e3), r.min(r.abs(o - this.y), 1e3)), 300) : n;
					this.currentPage = {
						x: s,
						y: o,
						pageX: e,
						pageY: t
					};
					this.scrollTo(s, o, n, i)
				},
				next: function(e, t) {
					var n = this.currentPage.pageX,
						r = this.currentPage.pageY;
					n++;
					if (n >= this.pages.length && this.hasVerticalScroll) {
						n = 0;
						r++
					}
					this.goToPage(n, r, e, t)
				},
				prev: function(e, t) {
					var n = this.currentPage.pageX,
						r = this.currentPage.pageY;
					n--;
					if (n < 0 && this.hasVerticalScroll) {
						n = 0;
						r--
					}
					this.goToPage(n, r, e, t)
				},
				_initKeys: function(t) {
					var n = {
						pageUp: 33,
						pageDown: 34,
						end: 35,
						home: 36,
						left: 37,
						up: 38,
						right: 39,
						down: 40
					};
					var r;
					if (typeof this.options.keyBindings == "object") {
						for (r in this.options.keyBindings) {
							if (typeof this.options.keyBindings[r] == "string") {
								this.options.keyBindings[r] = this.options.keyBindings[r].toUpperCase().charCodeAt(0)
							}
						}
					} else {
						this.options.keyBindings = {}
					}
					for (r in n) {
						this.options.keyBindings[r] = this.options.keyBindings[r] || n[r]
					}
					s.addEvent(e, "keydown", this);
					this.on("destroy", function() {
						s.removeEvent(e, "keydown", this)
					})
				},
				_key: function(e) {
					if (!this.enabled) {
						return
					}
					var t = this.options.snap,
						n = t ? this.currentPage.pageX : this.x,
						i = t ? this.currentPage.pageY : this.y,
						o = s.getTime(),
						u = this.keyTime || 0,
						a = .25,
						f;
					if (this.options.useTransition && this.isInTransition) {
						f = this.getComputedPosition();
						this._translate(r.round(f.x), r.round(f.y));
						this.isInTransition = false
					}
					this.keyAcceleration = o - u < 200 ? r.min(this.keyAcceleration + a, 50) : 0;
					switch (e.keyCode) {
						case this.options.keyBindings.pageUp:
							if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
								n += t ? 1 : this.wrapperWidth
							} else {
								i += t ? 1 : this.wrapperHeight
							}
							break;
						case this.options.keyBindings.pageDown:
							if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
								n -= t ? 1 : this.wrapperWidth
							} else {
								i -= t ? 1 : this.wrapperHeight
							}
							break;
						case this.options.keyBindings.end:
							n = t ? this.pages.length - 1 : this.maxScrollX;
							i = t ? this.pages[0].length - 1 : this.maxScrollY;
							break;
						case this.options.keyBindings.home:
							n = 0;
							i = 0;
							break;
						case this.options.keyBindings.left:
							n += t ? -1 : 5 + this.keyAcceleration >> 0;
							break;
						case this.options.keyBindings.up:
							i += t ? 1 : 5 + this.keyAcceleration >> 0;
							break;
						case this.options.keyBindings.right:
							n -= t ? -1 : 5 + this.keyAcceleration >> 0;
							break;
						case this.options.keyBindings.down:
							i -= t ? 1 : 5 + this.keyAcceleration >> 0;
							break;
						default:
							return
					}
					if (t) {
						this.goToPage(n, i);
						return
					}
					if (n > 0) {
						n = 0;
						this.keyAcceleration = 0
					} else if (n < this.maxScrollX) {
						n = this.maxScrollX;
						this.keyAcceleration = 0
					}
					if (i > 0) {
						i = 0;
						this.keyAcceleration = 0
					} else if (i < this.maxScrollY) {
						i = this.maxScrollY;
						this.keyAcceleration = 0
					}
					this.scrollTo(n, i, 0);
					this.keyTime = o
				},
				_animate: function(e, t, n, r) {
					function c() {
						var h = s.getTime(),
							p, d, v;
						if (h >= l) {
							o.isAnimating = false;
							o._translate(e, t);
							if (!o.resetPosition(o.options.bounceTime)) {
								o._execEvent("scrollEnd")
							}
							return
						}
						h = (h - f) / n;
						v = r(h);
						p = (e - u) * v + u;
						d = (t - a) * v + a;
						o._translate(p, d);
						if (o.isAnimating) {
							i(c)
						}
						if (o.options.probeType == 3) {
							o._execEvent("scroll")
						}
					}
					var o = this,
						u = this.x,
						a = this.y,
						f = s.getTime(),
						l = f + n;
					this.isAnimating = true;
					c()
				},
				handleEvent: function(e) {
					switch (e.type) {
						case "touchstart":
						case "pointerdown":
						case "MSPointerDown":
						case "mousedown":
							this._start(e);
							break;
						case "touchmove":
						case "pointermove":
						case "MSPointerMove":
						case "mousemove":
							this._move(e);
							break;
						case "touchend":
						case "pointerup":
						case "MSPointerUp":
						case "mouseup":
						case "touchcancel":
						case "pointercancel":
						case "MSPointerCancel":
						case "mousecancel":
							this._end(e);
							break;
						case "orientationchange":
						case "resize":
							this._resize();
							break;
						case "transitionend":
						case "webkitTransitionEnd":
						case "oTransitionEnd":
						case "MSTransitionEnd":
							this._transitionEnd(e);
							break;
						case "wheel":
						case "DOMMouseScroll":
						case "mousewheel":
							this._wheel(e);
							break;
						case "keydown":
							this._key(e);
							break;
						case "click":
							if (!e._constructed) {
								e.preventDefault();
								e.stopPropagation()
							}
							break
					}
				}
			};
			a.prototype = {
				handleEvent: function(e) {
					switch (e.type) {
						case "touchstart":
						case "pointerdown":
						case "MSPointerDown":
						case "mousedown":
							this._start(e);
							break;
						case "touchmove":
						case "pointermove":
						case "MSPointerMove":
						case "mousemove":
							this._move(e);
							break;
						case "touchend":
						case "pointerup":
						case "MSPointerUp":
						case "mouseup":
						case "touchcancel":
						case "pointercancel":
						case "MSPointerCancel":
						case "mousecancel":
							this._end(e);
							break
					}
				},
				destroy: function() {
					if (this.options.interactive) {
						s.removeEvent(this.indicator, "touchstart", this);
						s.removeEvent(this.indicator, s.prefixPointerEvent("pointerdown"), this);
						s.removeEvent(this.indicator, "mousedown", this);
						s.removeEvent(e, "touchmove", this);
						s.removeEvent(e, s.prefixPointerEvent("pointermove"), this);
						s.removeEvent(e, "mousemove", this);
						s.removeEvent(e, "touchend", this);
						s.removeEvent(e, s.prefixPointerEvent("pointerup"), this);
						s.removeEvent(e, "mouseup", this)
					}
					if (this.options.defaultScrollbars) {
						this.wrapper.parentNode.removeChild(this.wrapper)
					}
				},
				_start: function(t) {
					var n = t.touches ? t.touches[0] : t;
					t.preventDefault();
					t.stopPropagation();
					this.transitionTime();
					this.initiated = true;
					this.moved = false;
					this.lastPointX = n.pageX;
					this.lastPointY = n.pageY;
					this.startTime = s.getTime();
					if (!this.options.disableTouch) {
						s.addEvent(e, "touchmove", this)
					}
					if (!this.options.disablePointer) {
						s.addEvent(e, s.prefixPointerEvent("pointermove"), this)
					}
					if (!this.options.disableMouse) {
						s.addEvent(e, "mousemove", this)
					}
					this.scroller._execEvent("beforeScrollStart")
				},
				_move: function(e) {
					var t = e.touches ? e.touches[0] : e,
						n, r, i, o, u = s.getTime();
					if (!this.moved) {
						this.scroller._execEvent("scrollStart")
					}
					this.moved = true;
					n = t.pageX - this.lastPointX;
					this.lastPointX = t.pageX;
					r = t.pageY - this.lastPointY;
					this.lastPointY = t.pageY;
					i = this.x + n;
					o = this.y + r;
					this._pos(i, o);
					if (this.scroller.options.probeType == 1 && u - this.startTime > 300) {
						this.startTime = u;
						this.scroller._execEvent("scroll")
					} else if (this.scroller.options.probeType > 1) {
						this.scroller._execEvent("scroll")
					}
					e.preventDefault();
					e.stopPropagation()
				},
				_end: function(t) {
					if (!this.initiated) {
						return
					}
					this.initiated = false;
					t.preventDefault();
					t.stopPropagation();
					s.removeEvent(e, "touchmove", this);
					s.removeEvent(e, s.prefixPointerEvent("pointermove"), this);
					s.removeEvent(e, "mousemove", this);
					if (this.scroller.options.snap) {
						var n = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
						var i = this.options.snapSpeed || r.max(r.max(r.min(r.abs(this.scroller.x - n.x), 1e3), r.min(r.abs(this.scroller.y - n.y), 1e3)), 300);
						if (this.scroller.x != n.x || this.scroller.y != n.y) {
							this.scroller.directionX = 0;
							this.scroller.directionY = 0;
							this.scroller.currentPage = n;
							this.scroller.scrollTo(n.x, n.y, i, this.scroller.options.bounceEasing)
						}
					}
					if (this.moved) {
						this.scroller._execEvent("scrollEnd")
					}
				},
				transitionTime: function(e) {
					e = e || 0;
					this.indicatorStyle[s.style.transitionDuration] = e + "ms";
					if (!e && s.isBadAndroid) {
						this.indicatorStyle[s.style.transitionDuration] = "0.001s"
					}
				},
				transitionTimingFunction: function(e) {
					this.indicatorStyle[s.style.transitionTimingFunction] = e
				},
				refresh: function() {
					this.transitionTime();
					if (this.options.listenX && !this.options.listenY) {
						this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none"
					} else if (this.options.listenY && !this.options.listenX) {
						this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none"
					} else {
						this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none"
					}
					if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
						s.addClass(this.wrapper, "iScrollBothScrollbars");
						s.removeClass(this.wrapper, "iScrollLoneScrollbar");
						if (this.options.defaultScrollbars && this.options.customStyle) {
							if (this.options.listenX) {
								this.wrapper.style.right = "8px"
							} else {
								this.wrapper.style.bottom = "8px"
							}
						}
					} else {
						s.removeClass(this.wrapper, "iScrollBothScrollbars");
						s.addClass(this.wrapper, "iScrollLoneScrollbar");
						if (this.options.defaultScrollbars && this.options.customStyle) {
							if (this.options.listenX) {
								this.wrapper.style.right = "2px"
							} else {
								this.wrapper.style.bottom = "2px"
							}
						}
					}
					var e = this.wrapper.offsetHeight;
					if (this.options.listenX) {
						this.wrapperWidth = this.wrapper.clientWidth;
						if (this.options.resize) {
							this.indicatorWidth = r.max(r.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
							this.indicatorStyle.width = this.indicatorWidth + "px"
						} else {
							this.indicatorWidth = this.indicator.clientWidth
						}
						this.maxPosX = this.wrapperWidth - this.indicatorWidth;
						if (this.options.shrink == "clip") {
							this.minBoundaryX = -this.indicatorWidth + 8;
							this.maxBoundaryX = this.wrapperWidth - 8
						} else {
							this.minBoundaryX = 0;
							this.maxBoundaryX = this.maxPosX
						}
						this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX
					}
					if (this.options.listenY) {
						this.wrapperHeight = this.wrapper.clientHeight;
						if (this.options.resize) {
							this.indicatorHeight = r.max(r.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
							this.indicatorStyle.height = this.indicatorHeight + "px"
						} else {
							this.indicatorHeight = this.indicator.clientHeight
						}
						this.maxPosY = this.wrapperHeight - this.indicatorHeight;
						if (this.options.shrink == "clip") {
							this.minBoundaryY = -this.indicatorHeight + 8;
							this.maxBoundaryY = this.wrapperHeight - 8
						} else {
							this.minBoundaryY = 0;
							this.maxBoundaryY = this.maxPosY
						}
						this.maxPosY = this.wrapperHeight - this.indicatorHeight;
						this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY
					}
					this.updatePosition()
				},
				updatePosition: function() {
					var e = this.options.listenX && r.round(this.sizeRatioX * this.scroller.x) || 0,
						t = this.options.listenY && r.round(this.sizeRatioY * this.scroller.y) || 0;
					if (!this.options.ignoreBoundaries) {
						if (e < this.minBoundaryX) {
							if (this.options.shrink == "scale") {
								this.width = r.max(this.indicatorWidth + e, 8);
								this.indicatorStyle.width = this.width + "px"
							}
							e = this.minBoundaryX
						} else if (e > this.maxBoundaryX) {
							if (this.options.shrink == "scale") {
								this.width = r.max(this.indicatorWidth - (e - this.maxPosX), 8);
								this.indicatorStyle.width = this.width + "px";
								e = this.maxPosX + this.indicatorWidth - this.width
							} else {
								e = this.maxBoundaryX
							}
						} else if (this.options.shrink == "scale" && this.width != this.indicatorWidth) {
							this.width = this.indicatorWidth;
							this.indicatorStyle.width = this.width + "px"
						}
						if (t < this.minBoundaryY) {
							if (this.options.shrink == "scale") {
								this.height = r.max(this.indicatorHeight + t * 3, 8);
								this.indicatorStyle.height = this.height + "px"
							}
							t = this.minBoundaryY
						} else if (t > this.maxBoundaryY) {
							if (this.options.shrink == "scale") {
								this.height = r.max(this.indicatorHeight - (t - this.maxPosY) * 3, 8);
								this.indicatorStyle.height = this.height + "px";
								t = this.maxPosY + this.indicatorHeight - this.height
							} else {
								t = this.maxBoundaryY
							}
						} else if (this.options.shrink == "scale" && this.height != this.indicatorHeight) {
							this.height = this.indicatorHeight;
							this.indicatorStyle.height = this.height + "px"
						}
					}
					this.x = e;
					this.y = t;
					if (this.scroller.options.useTransform) {
						this.indicatorStyle[s.style.transform] = "translate(" + e + "px," + t + "px)" + this.scroller.translateZ
					} else {
						this.indicatorStyle.left = e + "px";
						this.indicatorStyle.top = t + "px"
					}
				},
				_pos: function(e, t) {
					if (e < 0) {
						e = 0
					} else if (e > this.maxPosX) {
						e = this.maxPosX
					}
					if (t < 0) {
						t = 0
					} else if (t > this.maxPosY) {
						t = this.maxPosY
					}
					e = this.options.listenX ? r.round(e / this.sizeRatioX) : this.scroller.x;
					t = this.options.listenY ? r.round(t / this.sizeRatioY) : this.scroller.y;
					this.scroller.scrollTo(e, t)
				},
				fade: function(e, t) {
					if (t && !this.visible) {
						return
					}
					clearTimeout(this.fadeTimeout);
					this.fadeTimeout = null;
					var n = e ? 250 : 500,
						r = e ? 0 : 300;
					e = e ? "1" : "0";
					this.wrapperStyle[s.style.transitionDuration] = n + "ms";
					this.fadeTimeout = setTimeout(function(e) {
						this.wrapperStyle.opacity = e;
						this.visible = +e
					}.bind(this, e), r)
				}
			};
			o.utils = s;
			if (typeof t != "undefined" && t.exports) {
				t.exports = o
			} else {
				e.IScroll = o
			}
		})(window, document, Math)
	}(t.exports, t, e);
	e.____MODULES["03c28899f856258c505f08db366bfd3e"] = t.exports
})(this);
(function(__context) {
	var module = {
		id: "cc4a2776bacad943432cf14bf24b4324",
		filename: "jquery.js",
		exports: {}
	};
	if (!__context.____MODULES) {
		__context.____MODULES = {}
	}
	var r = function(exports, module, global) {
		(function(e, t) {
			if (typeof module === "object" && typeof module.exports === "object") {
				module.exports = e.document ? t(e, true) : function(e) {
					if (!e.document) {
						throw new Error("jQuery requires a window with a document")
					}
					return t(e)
				}
			} else {
				t(e)
			}
		})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
			function isArraylike(e) {
				var t = e.length,
					n = jQuery.type(e);
				if (n === "function" || jQuery.isWindow(e)) {
					return false
				}
				if (e.nodeType === 1 && t) {
					return true
				}
				return n === "array" || t === 0 || typeof t === "number" && t > 0 && t - 1 in e
			}

			function winnow(e, t, n) {
				if (jQuery.isFunction(t)) {
					return jQuery.grep(e, function(e, r) {
						return !!t.call(e, r, e) !== n
					})
				}
				if (t.nodeType) {
					return jQuery.grep(e, function(e) {
						return e === t !== n
					})
				}
				if (typeof t === "string") {
					if (risSimple.test(t)) {
						return jQuery.filter(t, e, n)
					}
					t = jQuery.filter(t, e)
				}
				return jQuery.grep(e, function(e) {
					return indexOf.call(t, e) >= 0 !== n
				})
			}

			function sibling(e, t) {
				while ((e = e[t]) && e.nodeType !== 1) {}
				return e
			}

			function createOptions(e) {
				var t = optionsCache[e] = {};
				jQuery.each(e.match(rnotwhite) || [], function(e, n) {
					t[n] = true
				});
				return t
			}

			function completed() {
				document.removeEventListener("DOMContentLoaded", completed, false);
				window.removeEventListener("load", completed, false);
				jQuery.ready()
			}

			function Data() {
				Object.defineProperty(this.cache = {}, 0, {
					get: function() {
						return {}
					}
				});
				this.expando = jQuery.expando + Math.random()
			}

			function dataAttr(e, t, n) {
				var r;
				if (n === undefined && e.nodeType === 1) {
					r = "data-" + t.replace(rmultiDash, "-$1").toLowerCase();
					n = e.getAttribute(r);
					if (typeof n === "string") {
						try {
							n = n === "true" ? true : n === "false" ? false : n === "null" ? null : +n + "" === n ? +n : rbrace.test(n) ? jQuery.parseJSON(n) : n
						} catch (i) {}
						data_user.set(e, t, n)
					} else {
						n = undefined
					}
				}
				return n
			}

			function returnTrue() {
				return true
			}

			function returnFalse() {
				return false
			}

			function safeActiveElement() {
				try {
					return document.activeElement
				} catch (e) {}
			}

			function manipulationTarget(e, t) {
				return jQuery.nodeName(e, "table") && jQuery.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
			}

			function disableScript(e) {
				e.type = (e.getAttribute("type") !== null) + "/" + e.type;
				return e
			}

			function restoreScript(e) {
				var t = rscriptTypeMasked.exec(e.type);
				if (t) {
					e.type = t[1]
				} else {
					e.removeAttribute("type")
				}
				return e
			}

			function setGlobalEval(e, t) {
				var n = 0,
					r = e.length;
				for (; n < r; n++) {
					data_priv.set(e[n], "globalEval", !t || data_priv.get(t[n], "globalEval"))
				}
			}

			function cloneCopyEvent(e, t) {
				var n, r, i, s, o, u, a, f;
				if (t.nodeType !== 1) {
					return
				}
				if (data_priv.hasData(e)) {
					s = data_priv.access(e);
					o = data_priv.set(t, s);
					f = s.events;
					if (f) {
						delete o.handle;
						o.events = {};
						for (i in f) {
							for (n = 0, r = f[i].length; n < r; n++) {
								jQuery.event.add(t, i, f[i][n])
							}
						}
					}
				}
				if (data_user.hasData(e)) {
					u = data_user.access(e);
					a = jQuery.extend({}, u);
					data_user.set(t, a)
				}
			}

			function getAll(e, t) {
				var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
				return t === undefined || t && jQuery.nodeName(e, t) ? jQuery.merge([e], n) : n
			}

			function fixInput(e, t) {
				var n = t.nodeName.toLowerCase();
				if (n === "input" && rcheckableType.test(e.type)) {
					t.checked = e.checked
				} else if (n === "input" || n === "textarea") {
					t.defaultValue = e.defaultValue
				}
			}

			function actualDisplay(e, t) {
				var n = jQuery(t.createElement(e)).appendTo(t.body),
					r = window.getDefaultComputedStyle ? window.getDefaultComputedStyle(n[0]).display : jQuery.css(n[0], "display");
				n.detach();
				return r
			}

			function defaultDisplay(e) {
				var t = document,
					n = elemdisplay[e];
				if (!n) {
					n = actualDisplay(e, t);
					if (n === "none" || !n) {
						iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement);
						t = iframe[0].contentDocument;
						t.write();
						t.close();
						n = actualDisplay(e, t);
						iframe.detach()
					}
					elemdisplay[e] = n
				}
				return n
			}

			function curCSS(e, t, n) {
				var r, i, s, o, u = e.style;
				n = n || getStyles(e);
				if (n) {
					o = n.getPropertyValue(t) || n[t]
				}
				if (n) {
					if (o === "" && !jQuery.contains(e.ownerDocument, e)) {
						o = jQuery.style(e, t)
					}
					if (rnumnonpx.test(o) && rmargin.test(t)) {
						r = u.width;
						i = u.minWidth;
						s = u.maxWidth;
						u.minWidth = u.maxWidth = u.width = o;
						o = n.width;
						u.width = r;
						u.minWidth = i;
						u.maxWidth = s
					}
				}
				return o !== undefined ? o + "" : o
			}

			function addGetHookIf(e, t) {
				return {
					get: function() {
						if (e()) {
							delete this.get;
							return
						}
						return (this.get = t).apply(this, arguments)
					}
				}
			}

			function vendorPropName(e, t) {
				if (t in e) {
					return t
				}
				var n = t[0].toUpperCase() + t.slice(1),
					r = t,
					i = cssPrefixes.length;
				while (i--) {
					t = cssPrefixes[i] + n;
					if (t in e) {
						return t
					}
				}
				return r
			}

			function setPositiveNumber(e, t, n) {
				var r = rnumsplit.exec(t);
				return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
			}

			function augmentWidthOrHeight(e, t, n, r, i) {
				var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
					o = 0;
				for (; s < 4; s += 2) {
					if (n === "margin") {
						o += jQuery.css(e, n + cssExpand[s], true, i)
					}
					if (r) {
						if (n === "content") {
							o -= jQuery.css(e, "padding" + cssExpand[s], true, i)
						}
						if (n !== "margin") {
							o -= jQuery.css(e, "border" + cssExpand[s] + "Width", true, i)
						}
					} else {
						o += jQuery.css(e, "padding" + cssExpand[s], true, i);
						if (n !== "padding") {
							o += jQuery.css(e, "border" + cssExpand[s] + "Width", true, i)
						}
					}
				}
				return o
			}

			function getWidthOrHeight(e, t, n) {
				var r = true,
					i = t === "width" ? e.offsetWidth : e.offsetHeight,
					s = getStyles(e),
					o = jQuery.css(e, "boxSizing", false, s) === "border-box";
				if (i <= 0 || i == null) {
					i = curCSS(e, t, s);
					if (i < 0 || i == null) {
						i = e.style[t]
					}
					if (rnumnonpx.test(i)) {
						return i
					}
					r = o && (support.boxSizingReliable() || i === e.style[t]);
					i = parseFloat(i) || 0
				}
				return i + augmentWidthOrHeight(e, t, n || (o ? "border" : "content"), r, s) + "px"
			}

			function showHide(e, t) {
				var n, r, i, s = [],
					o = 0,
					u = e.length;
				for (; o < u; o++) {
					r = e[o];
					if (!r.style) {
						continue
					}
					s[o] = data_priv.get(r, "olddisplay");
					n = r.style.display;
					if (t) {
						if (!s[o] && n === "none") {
							r.style.display = ""
						}
						if (r.style.display === "" && isHidden(r)) {
							s[o] = data_priv.access(r, "olddisplay", defaultDisplay(r.nodeName))
						}
					} else {
						if (!s[o]) {
							i = isHidden(r);
							if (n && n !== "none" || !i) {
								data_priv.set(r, "olddisplay", i ? n : jQuery.css(r, "display"))
							}
						}
					}
				}
				for (o = 0; o < u; o++) {
					r = e[o];
					if (!r.style) {
						continue
					}
					if (!t || r.style.display === "none" || r.style.display === "") {
						r.style.display = t ? s[o] || "" : "none"
					}
				}
				return e
			}

			function Tween(e, t, n, r, i) {
				return new Tween.prototype.init(e, t, n, r, i)
			}

			function createFxNow() {
				setTimeout(function() {
					fxNow = undefined
				});
				return fxNow = jQuery.now()
			}

			function genFx(e, t) {
				var n, r = 0,
					i = {
						height: e
					};
				t = t ? 1 : 0;
				for (; r < 4; r += 2 - t) {
					n = cssExpand[r];
					i["margin" + n] = i["padding" + n] = e
				}
				if (t) {
					i.opacity = i.width = e
				}
				return i
			}

			function createTween(e, t, n) {
				var r, i = (tweeners[t] || []).concat(tweeners["*"]),
					s = 0,
					o = i.length;
				for (; s < o; s++) {
					if (r = i[s].call(n, t, e)) {
						return r
					}
				}
			}

			function defaultPrefilter(e, t, n) {
				var r, i, s, o, u, a, f, l = this,
					c = {},
					h = e.style,
					p = e.nodeType && isHidden(e),
					d = data_priv.get(e, "fxshow");
				if (!n.queue) {
					u = jQuery._queueHooks(e, "fx");
					if (u.unqueued == null) {
						u.unqueued = 0;
						a = u.empty.fire;
						u.empty.fire = function() {
							if (!u.unqueued) {
								a()
							}
						}
					}
					u.unqueued++;
					l.always(function() {
						l.always(function() {
							u.unqueued--;
							if (!jQuery.queue(e, "fx").length) {
								u.empty.fire()
							}
						})
					})
				}
				if (e.nodeType === 1 && ("height" in t || "width" in t)) {
					n.overflow = [h.overflow, h.overflowX, h.overflowY];
					f = jQuery.css(e, "display");
					if (f === "none") {
						f = defaultDisplay(e.nodeName)
					}
					if (f === "inline" && jQuery.css(e, "float") === "none") {
						h.display = "inline-block"
					}
				}
				if (n.overflow) {
					h.overflow = "hidden";
					l.always(function() {
						h.overflow = n.overflow[0];
						h.overflowX = n.overflow[1];
						h.overflowY = n.overflow[2]
					})
				}
				for (r in t) {
					i = t[r];
					if (rfxtypes.exec(i)) {
						delete t[r];
						s = s || i === "toggle";
						if (i === (p ? "hide" : "show")) {
							if (i === "show" && d && d[r] !== undefined) {
								p = true
							} else {
								continue
							}
						}
						c[r] = d && d[r] || jQuery.style(e, r)
					}
				}
				if (!jQuery.isEmptyObject(c)) {
					if (d) {
						if ("hidden" in d) {
							p = d.hidden
						}
					} else {
						d = data_priv.access(e, "fxshow", {})
					}
					if (s) {
						d.hidden = !p
					}
					if (p) {
						jQuery(e).show()
					} else {
						l.done(function() {
							jQuery(e).hide()
						})
					}
					l.done(function() {
						var t;
						data_priv.remove(e, "fxshow");
						for (t in c) {
							jQuery.style(e, t, c[t])
						}
					});
					for (r in c) {
						o = createTween(p ? d[r] : 0, r, l);
						if (!(r in d)) {
							d[r] = o.start;
							if (p) {
								o.end = o.start;
								o.start = r === "width" || r === "height" ? 1 : 0
							}
						}
					}
				}
			}

			function propFilter(e, t) {
				var n, r, i, s, o;
				for (n in e) {
					r = jQuery.camelCase(n);
					i = t[r];
					s = e[n];
					if (jQuery.isArray(s)) {
						i = s[1];
						s = e[n] = s[0]
					}
					if (n !== r) {
						e[r] = s;
						delete e[n]
					}
					o = jQuery.cssHooks[r];
					if (o && "expand" in o) {
						s = o.expand(s);
						delete e[r];
						for (n in s) {
							if (!(n in e)) {
								e[n] = s[n];
								t[n] = i
							}
						}
					} else {
						t[r] = i
					}
				}
			}

			function Animation(e, t, n) {
				var r, i, s = 0,
					o = animationPrefilters.length,
					u = jQuery.Deferred().always(function() {
						delete a.elem
					}),
					a = function() {
						if (i) {
							return false
						}
						var t = fxNow || createFxNow(),
							n = Math.max(0, f.startTime + f.duration - t),
							r = n / f.duration || 0,
							s = 1 - r,
							o = 0,
							a = f.tweens.length;
						for (; o < a; o++) {
							f.tweens[o].run(s)
						}
						u.notifyWith(e, [f, s, n]);
						if (s < 1 && a) {
							return n
						} else {
							u.resolveWith(e, [f]);
							return false
						}
					},
					f = u.promise({
						elem: e,
						props: jQuery.extend({}, t),
						opts: jQuery.extend(true, {
							specialEasing: {}
						}, n),
						originalProperties: t,
						originalOptions: n,
						startTime: fxNow || createFxNow(),
						duration: n.duration,
						tweens: [],
						createTween: function(t, n) {
							var r = jQuery.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
							f.tweens.push(r);
							return r
						},
						stop: function(t) {
							var n = 0,
								r = t ? f.tweens.length : 0;
							if (i) {
								return this
							}
							i = true;
							for (; n < r; n++) {
								f.tweens[n].run(1)
							}
							if (t) {
								u.resolveWith(e, [f, t])
							} else {
								u.rejectWith(e, [f, t])
							}
							return this
						}
					}),
					l = f.props;
				propFilter(l, f.opts.specialEasing);
				for (; s < o; s++) {
					r = animationPrefilters[s].call(f, e, l, f.opts);
					if (r) {
						return r
					}
				}
				jQuery.map(l, createTween, f);
				if (jQuery.isFunction(f.opts.start)) {
					f.opts.start.call(e, f)
				}
				jQuery.fx.timer(jQuery.extend(a, {
					elem: e,
					anim: f,
					queue: f.opts.queue
				}));
				return f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
			}

			function addToPrefiltersOrTransports(e) {
				return function(t, n) {
					if (typeof t !== "string") {
						n = t;
						t = "*"
					}
					var r, i = 0,
						s = t.toLowerCase().match(rnotwhite) || [];
					if (jQuery.isFunction(n)) {
						while (r = s[i++]) {
							if (r[0] === "+") {
								r = r.slice(1) || "*";
								(e[r] = e[r] || []).unshift(n)
							} else {
								(e[r] = e[r] || []).push(n)
							}
						}
					}
				}
			}

			function inspectPrefiltersOrTransports(e, t, n, r) {
				function o(u) {
					var a;
					i[u] = true;
					jQuery.each(e[u] || [], function(e, u) {
						var f = u(t, n, r);
						if (typeof f === "string" && !s && !i[f]) {
							t.dataTypes.unshift(f);
							o(f);
							return false
						} else if (s) {
							return !(a = f)
						}
					});
					return a
				}
				var i = {},
					s = e === transports;
				return o(t.dataTypes[0]) || !i["*"] && o("*")
			}

			function ajaxExtend(e, t) {
				var n, r, i = jQuery.ajaxSettings.flatOptions || {};
				for (n in t) {
					if (t[n] !== undefined) {
						(i[n] ? e : r || (r = {}))[n] = t[n]
					}
				}
				if (r) {
					jQuery.extend(true, e, r)
				}
				return e
			}

			function ajaxHandleResponses(e, t, n) {
				var r, i, s, o, u = e.contents,
					a = e.dataTypes;
				while (a[0] === "*") {
					a.shift();
					if (r === undefined) {
						r = e.mimeType || t.getResponseHeader("Content-Type")
					}
				}
				if (r) {
					for (i in u) {
						if (u[i] && u[i].test(r)) {
							a.unshift(i);
							break
						}
					}
				}
				if (a[0] in n) {
					s = a[0]
				} else {
					for (i in n) {
						if (!a[0] || e.converters[i + " " + a[0]]) {
							s = i;
							break
						}
						if (!o) {
							o = i
						}
					}
					s = s || o
				}
				if (s) {
					if (s !== a[0]) {
						a.unshift(s)
					}
					return n[s]
				}
			}

			function ajaxConvert(e, t, n, r) {
				var i, s, o, u, a, f = {},
					l = e.dataTypes.slice();
				if (l[1]) {
					for (o in e.converters) {
						f[o.toLowerCase()] = e.converters[o]
					}
				}
				s = l.shift();
				while (s) {
					if (e.responseFields[s]) {
						n[e.responseFields[s]] = t
					}
					if (!a && r && e.dataFilter) {
						t = e.dataFilter(t, e.dataType)
					}
					a = s;
					s = l.shift();
					if (s) {
						if (s === "*") {
							s = a
						} else if (a !== "*" && a !== s) {
							o = f[a + " " + s] || f["* " + s];
							if (!o) {
								for (i in f) {
									u = i.split(" ");
									if (u[1] === s) {
										o = f[a + " " + u[0]] || f["* " + u[0]];
										if (o) {
											if (o === true) {
												o = f[i]
											} else if (f[i] !== true) {
												s = u[0];
												l.unshift(u[1])
											}
											break
										}
									}
								}
							}
							if (o !== true) {
								if (o && e["throws"]) {
									t = o(t)
								} else {
									try {
										t = o(t)
									} catch (c) {
										return {
											state: "parsererror",
											error: o ? c : "No conversion from " + a + " to " + s
										}
									}
								}
							}
						}
					}
				}
				return {
					state: "success",
					data: t
				}
			}

			function buildParams(e, t, n, r) {
				var i;
				if (jQuery.isArray(t)) {
					jQuery.each(t, function(t, i) {
						if (n || rbracket.test(e)) {
							r(e, i)
						} else {
							buildParams(e + "[" + (typeof i === "object" ? t : "") + "]", i, n, r)
						}
					})
				} else if (!n && jQuery.type(t) === "object") {
					for (i in t) {
						buildParams(e + "[" + i + "]", t[i], n, r)
					}
				} else {
					r(e, t)
				}
			}

			function getWindow(e) {
				return jQuery.isWindow(e) ? e : e.nodeType === 9 && e.defaultView
			}
			var arr = [];
			var slice = arr.slice;
			var concat = arr.concat;
			var push = arr.push;
			var indexOf = arr.indexOf;
			var class2type = {};
			var toString = class2type.toString;
			var hasOwn = class2type.hasOwnProperty;
			var trim = "".trim;
			var support = {};
			var document = window.document,
				version = "2.1.0",
				jQuery = function(e, t) {
					return new jQuery.fn.init(e, t)
				},
				rmsPrefix = /^-ms-/,
				rdashAlpha = /-([\da-z])/gi,
				fcamelCase = function(e, t) {
					return t.toUpperCase()
				};
			jQuery.fn = jQuery.prototype = {
				jquery: version,
				constructor: jQuery,
				selector: "",
				length: 0,
				toArray: function() {
					return slice.call(this)
				},
				get: function(e) {
					return e != null ? e < 0 ? this[e + this.length] : this[e] : slice.call(this)
				},
				pushStack: function(e) {
					var t = jQuery.merge(this.constructor(), e);
					t.prevObject = this;
					t.context = this.context;
					return t
				},
				each: function(e, t) {
					return jQuery.each(this, e, t)
				},
				map: function(e) {
					return this.pushStack(jQuery.map(this, function(t, n) {
						return e.call(t, n, t)
					}))
				},
				slice: function() {
					return this.pushStack(slice.apply(this, arguments))
				},
				first: function() {
					return this.eq(0)
				},
				last: function() {
					return this.eq(-1)
				},
				eq: function(e) {
					var t = this.length,
						n = +e + (e < 0 ? t : 0);
					return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
				},
				end: function() {
					return this.prevObject || this.constructor(null)
				},
				push: push,
				sort: arr.sort,
				splice: arr.splice
			};
			jQuery.extend = jQuery.fn.extend = function() {
				var e, t, n, r, i, s, o = arguments[0] || {},
					u = 1,
					a = arguments.length,
					f = false;
				if (typeof o === "boolean") {
					f = o;
					o = arguments[u] || {};
					u++
				}
				if (typeof o !== "object" && !jQuery.isFunction(o)) {
					o = {}
				}
				if (u === a) {
					o = this;
					u--
				}
				for (; u < a; u++) {
					if ((e = arguments[u]) != null) {
						for (t in e) {
							n = o[t];
							r = e[t];
							if (o === r) {
								continue
							}
							if (f && r && (jQuery.isPlainObject(r) || (i = jQuery.isArray(r)))) {
								if (i) {
									i = false;
									s = n && jQuery.isArray(n) ? n : []
								} else {
									s = n && jQuery.isPlainObject(n) ? n : {}
								}
								o[t] = jQuery.extend(f, s, r)
							} else if (r !== undefined) {
								o[t] = r
							}
						}
					}
				}
				return o
			};
			jQuery.extend({
				expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
				isReady: true,
				error: function(e) {
					throw new Error(e)
				},
				noop: function() {},
				isFunction: function(e) {
					return jQuery.type(e) === "function"
				},
				isArray: Array.isArray,
				isWindow: function(e) {
					return e != null && e === e.window
				},
				isNumeric: function(e) {
					return e - parseFloat(e) >= 0
				},
				isPlainObject: function(e) {
					if (jQuery.type(e) !== "object" || e.nodeType || jQuery.isWindow(e)) {
						return false
					}
					try {
						if (e.constructor && !hasOwn.call(e.constructor.prototype, "isPrototypeOf")) {
							return false
						}
					} catch (t) {
						return false
					}
					return true
				},
				isEmptyObject: function(e) {
					var t;
					for (t in e) {
						return false
					}
					return true
				},
				type: function(e) {
					if (e == null) {
						return e + ""
					}
					return typeof e === "object" || typeof e === "function" ? class2type[toString.call(e)] || "object" : typeof e
				},
				globalEval: function(code) {
					var script, indirect = eval;
					code = jQuery.trim(code);
					if (code) {
						if (code.indexOf("use strict") === 1) {
							script = document.createElement("script");
							script.text = code;
							document.head.appendChild(script).parentNode.removeChild(script)
						} else {
							indirect(code)
						}
					}
				},
				camelCase: function(e) {
					return e.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
				},
				nodeName: function(e, t) {
					return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
				},
				each: function(e, t, n) {
					var r, i = 0,
						s = e.length,
						o = isArraylike(e);
					if (n) {
						if (o) {
							for (; i < s; i++) {
								r = t.apply(e[i], n);
								if (r === false) {
									break
								}
							}
						} else {
							for (i in e) {
								r = t.apply(e[i], n);
								if (r === false) {
									break
								}
							}
						}
					} else {
						if (o) {
							for (; i < s; i++) {
								r = t.call(e[i], i, e[i]);
								if (r === false) {
									break
								}
							}
						} else {
							for (i in e) {
								r = t.call(e[i], i, e[i]);
								if (r === false) {
									break
								}
							}
						}
					}
					return e
				},
				trim: function(e) {
					return e == null ? "" : trim.call(e)
				},
				makeArray: function(e, t) {
					var n = t || [];
					if (e != null) {
						if (isArraylike(Object(e))) {
							jQuery.merge(n, typeof e === "string" ? [e] : e)
						} else {
							push.call(n, e)
						}
					}
					return n
				},
				inArray: function(e, t, n) {
					return t == null ? -1 : indexOf.call(t, e, n)
				},
				merge: function(e, t) {
					var n = +t.length,
						r = 0,
						i = e.length;
					for (; r < n; r++) {
						e[i++] = t[r]
					}
					e.length = i;
					return e
				},
				grep: function(e, t, n) {
					var r, i = [],
						s = 0,
						o = e.length,
						u = !n;
					for (; s < o; s++) {
						r = !t(e[s], s);
						if (r !== u) {
							i.push(e[s])
						}
					}
					return i
				},
				map: function(e, t, n) {
					var r, i = 0,
						s = e.length,
						o = isArraylike(e),
						u = [];
					if (o) {
						for (; i < s; i++) {
							r = t(e[i], i, n);
							if (r != null) {
								u.push(r)
							}
						}
					} else {
						for (i in e) {
							r = t(e[i], i, n);
							if (r != null) {
								u.push(r)
							}
						}
					}
					return concat.apply([], u)
				},
				guid: 1,
				proxy: function(e, t) {
					var n, r, i;
					if (typeof t === "string") {
						n = e[t];
						t = e;
						e = n
					}
					if (!jQuery.isFunction(e)) {
						return undefined
					}
					r = slice.call(arguments, 2);
					i = function() {
						return e.apply(t || this, r.concat(slice.call(arguments)))
					};
					i.guid = e.guid = e.guid || jQuery.guid++;
					return i
				},
				now: Date.now,
				support: support
			});
			jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
				class2type["[object " + t + "]"] = t.toLowerCase()
			});
			var Sizzle = function(e) {
				function rt(e, t, r, i) {
					var s, o, u, a, f, h, v, m, w, E;
					if ((t ? t.ownerDocument || t : b) !== c) {
						l(t)
					}
					t = t || c;
					r = r || [];
					if (!e || typeof e !== "string") {
						return r
					}
					if ((a = t.nodeType) !== 1 && a !== 9) {
						return []
					}
					if (p && !i) {
						if (s = G.exec(e)) {
							if (u = s[1]) {
								if (a === 9) {
									o = t.getElementById(u);
									if (o && o.parentNode) {
										if (o.id === u) {
											r.push(o);
											return r
										}
									} else {
										return r
									}
								} else {
									if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && g(t, o) && o.id === u) {
										r.push(o);
										return r
									}
								}
							} else if (s[2]) {
								_.apply(r, t.getElementsByTagName(e));
								return r
							} else if ((u = s[3]) && n.getElementsByClassName && t.getElementsByClassName) {
								_.apply(r, t.getElementsByClassName(u));
								return r
							}
						}
						if (n.qsa && (!d || !d.test(e))) {
							m = v = y;
							w = t;
							E = a === 9 && e;
							if (a === 1 && t.nodeName.toLowerCase() !== "object") {
								h = dt(e);
								if (v = t.getAttribute("id")) {
									m = v.replace(Z, "\\$&")
								} else {
									t.setAttribute("id", m)
								}
								m = "[id='" + m + "'] ";
								f = h.length;
								while (f--) {
									h[f] = m + vt(h[f])
								}
								w = Y.test(e) && ht(t.parentNode) || t;
								E = h.join(",")
							}
							if (E) {
								try {
									_.apply(r, w.querySelectorAll(E));
									return r
								} catch (S) {} finally {
									if (!v) {
										t.removeAttribute("id")
									}
								}
							}
						}
					}
					return xt(e.replace(R, "$1"), t, r, i)
				}

				function it() {
					function t(n, i) {
						if (e.push(n + " ") > r.cacheLength) {
							delete t[e.shift()]
						}
						return t[n + " "] = i
					}
					var e = [];
					return t
				}

				function st(e) {
					e[y] = true;
					return e
				}

				function ot(e) {
					var t = c.createElement("div");
					try {
						return !!e(t)
					} catch (n) {
						return false
					} finally {
						if (t.parentNode) {
							t.parentNode.removeChild(t)
						}
						t = null
					}
				}

				function ut(e, t) {
					var n = e.split("|"),
						i = e.length;
					while (i--) {
						r.attrHandle[n[i]] = t
					}
				}

				function at(e, t) {
					var n = t && e,
						r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || k) - (~e.sourceIndex || k);
					if (r) {
						return r
					}
					if (n) {
						while (n = n.nextSibling) {
							if (n === t) {
								return -1
							}
						}
					}
					return e ? 1 : -1
				}

				function ft(e) {
					return function(t) {
						var n = t.nodeName.toLowerCase();
						return n === "input" && t.type === e
					}
				}

				function lt(e) {
					return function(t) {
						var n = t.nodeName.toLowerCase();
						return (n === "input" || n === "button") && t.type === e
					}
				}

				function ct(e) {
					return st(function(t) {
						t = +t;
						return st(function(n, r) {
							var i, s = e([], n.length, t),
								o = s.length;
							while (o--) {
								if (n[i = s[o]]) {
									n[i] = !(r[i] = n[i])
								}
							}
						})
					})
				}

				function ht(e) {
					return e && typeof e.getElementsByTagName !== C && e
				}

				function pt() {}

				function dt(e, t) {
					var n, i, s, o, u, a, f, l = x[e + " "];
					if (l) {
						return t ? 0 : l.slice(0)
					}
					u = e;
					a = [];
					f = r.preFilter;
					while (u) {
						if (!n || (i = U.exec(u))) {
							if (i) {
								u = u.slice(i[0].length) || u
							}
							a.push(s = [])
						}
						n = false;
						if (i = z.exec(u)) {
							n = i.shift();
							s.push({
								value: n,
								type: i[0].replace(R, " ")
							});
							u = u.slice(n.length)
						}
						for (o in r.filter) {
							if ((i = $[o].exec(u)) && (!f[o] || (i = f[o](i)))) {
								n = i.shift();
								s.push({
									value: n,
									type: o,
									matches: i
								});
								u = u.slice(n.length)
							}
						}
						if (!n) {
							break
						}
					}
					return t ? u.length : u ? rt.error(e) : x(e, a).slice(0)
				}

				function vt(e) {
					var t = 0,
						n = e.length,
						r = "";
					for (; t < n; t++) {
						r += e[t].value
					}
					return r
				}

				function mt(e, t, n) {
					var r = t.dir,
						i = n && r === "parentNode",
						s = E++;
					return t.first ? function(t, n, s) {
						while (t = t[r]) {
							if (t.nodeType === 1 || i) {
								return e(t, n, s)
							}
						}
					} : function(t, n, o) {
						var u, a, f = [w, s];
						if (o) {
							while (t = t[r]) {
								if (t.nodeType === 1 || i) {
									if (e(t, n, o)) {
										return true
									}
								}
							}
						} else {
							while (t = t[r]) {
								if (t.nodeType === 1 || i) {
									a = t[y] || (t[y] = {});
									if ((u = a[r]) && u[0] === w && u[1] === s) {
										return f[2] = u[2]
									} else {
										a[r] = f;
										if (f[2] = e(t, n, o)) {
											return true
										}
									}
								}
							}
						}
					}
				}

				function gt(e) {
					return e.length > 1 ? function(t, n, r) {
						var i = e.length;
						while (i--) {
							if (!e[i](t, n, r)) {
								return false
							}
						}
						return true
					} : e[0]
				}

				function yt(e, t, n, r, i) {
					var s, o = [],
						u = 0,
						a = e.length,
						f = t != null;
					for (; u < a; u++) {
						if (s = e[u]) {
							if (!n || n(s, r, i)) {
								o.push(s);
								if (f) {
									t.push(u)
								}
							}
						}
					}
					return o
				}

				function bt(e, t, n, r, i, s) {
					if (r && !r[y]) {
						r = bt(r)
					}
					if (i && !i[y]) {
						i = bt(i, s)
					}
					return st(function(s, o, u, a) {
						var f, l, c, h = [],
							p = [],
							d = o.length,
							v = s || St(t || "*", u.nodeType ? [u] : u, []),
							m = e && (s || !t) ? yt(v, h, e, u, a) : v,
							g = n ? i || (s ? e : d || r) ? [] : o : m;
						if (n) {
							n(m, g, u, a)
						}
						if (r) {
							f = yt(g, p);
							r(f, [], u, a);
							l = f.length;
							while (l--) {
								if (c = f[l]) {
									g[p[l]] = !(m[p[l]] = c)
								}
							}
						}
						if (s) {
							if (i || e) {
								if (i) {
									f = [];
									l = g.length;
									while (l--) {
										if (c = g[l]) {
											f.push(m[l] = c)
										}
									}
									i(null, g = [], f, a)
								}
								l = g.length;
								while (l--) {
									if ((c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1) {
										s[f] = !(o[f] = c)
									}
								}
							}
						} else {
							g = yt(g === o ? g.splice(d, g.length) : g);
							if (i) {
								i(null, o, g, a)
							} else {
								_.apply(o, g)
							}
						}
					})
				}

				function wt(e) {
					var t, n, i, s = e.length,
						o = r.relative[e[0].type],
						a = o || r.relative[" "],
						f = o ? 1 : 0,
						l = mt(function(e) {
							return e === t
						}, a, true),
						c = mt(function(e) {
							return P.call(t, e) > -1
						}, a, true),
						h = [function(e, n, r) {
							return !o && (r || n !== u) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
						}];
					for (; f < s; f++) {
						if (n = r.relative[e[f].type]) {
							h = [mt(gt(h), n)]
						} else {
							n = r.filter[e[f].type].apply(null, e[f].matches);
							if (n[y]) {
								i = ++f;
								for (; i < s; i++) {
									if (r.relative[e[i].type]) {
										break
									}
								}
								return bt(f > 1 && gt(h), f > 1 && vt(e.slice(0, f - 1).concat({
									value: e[f - 2].type === " " ? "*" : ""
								})).replace(R, "$1"), n, f < i && wt(e.slice(f, i)), i < s && wt(e = e.slice(i)), i < s && vt(e))
							}
							h.push(n)
						}
					}
					return gt(h)
				}

				function Et(e, t) {
					var n = t.length > 0,
						i = e.length > 0,
						s = function(s, o, a, f, l) {
							var h, p, d, v = 0,
								m = "0",
								g = s && [],
								y = [],
								b = u,
								E = s || i && r.find["TAG"]("*", l),
								S = w += b == null ? 1 : Math.random() || .1,
								x = E.length;
							if (l) {
								u = o !== c && o
							}
							for (; m !== x && (h = E[m]) != null; m++) {
								if (i && h) {
									p = 0;
									while (d = e[p++]) {
										if (d(h, o, a)) {
											f.push(h);
											break
										}
									}
									if (l) {
										w = S
									}
								}
								if (n) {
									if (h = !d && h) {
										v--
									}
									if (s) {
										g.push(h)
									}
								}
							}
							v += m;
							if (n && m !== v) {
								p = 0;
								while (d = t[p++]) {
									d(g, y, o, a)
								}
								if (s) {
									if (v > 0) {
										while (m--) {
											if (!(g[m] || y[m])) {
												y[m] = O.call(f)
											}
										}
									}
									y = yt(y)
								}
								_.apply(f, y);
								if (l && !s && y.length > 0 && v + t.length > 1) {
									rt.uniqueSort(f)
								}
							}
							if (l) {
								w = S;
								u = b
							}
							return g
						};
					return n ? st(s) : s
				}

				function St(e, t, n) {
					var r = 0,
						i = t.length;
					for (; r < i; r++) {
						rt(e, t[r], n)
					}
					return n
				}

				function xt(e, t, i, s) {
					var u, a, f, l, c, h = dt(e);
					if (!s) {
						if (h.length === 1) {
							a = h[0] = h[0].slice(0);
							if (a.length > 2 && (f = a[0]).type === "ID" && n.getById && t.nodeType === 9 && p && r.relative[a[1].type]) {
								t = (r.find["ID"](f.matches[0].replace(et, tt), t) || [])[0];
								if (!t) {
									return i
								}
								e = e.slice(a.shift().value.length)
							}
							u = $["needsContext"].test(e) ? 0 : a.length;
							while (u--) {
								f = a[u];
								if (r.relative[l = f.type]) {
									break
								}
								if (c = r.find[l]) {
									if (s = c(f.matches[0].replace(et, tt), Y.test(a[0].type) && ht(t.parentNode) || t)) {
										a.splice(u, 1);
										e = s.length && vt(a);
										if (!e) {
											_.apply(i, s);
											return i
										}
										break
									}
								}
							}
						}
					}
					o(e, h)(s, t, !p, i, Y.test(e) && ht(t.parentNode) || t);
					return i
				}
				var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y = "sizzle" + -(new Date),
					b = e.document,
					w = 0,
					E = 0,
					S = it(),
					x = it(),
					T = it(),
					N = function(e, t) {
						if (e === t) {
							f = true
						}
						return 0
					},
					C = typeof undefined,
					k = 1 << 31,
					L = {}.hasOwnProperty,
					A = [],
					O = A.pop,
					M = A.push,
					_ = A.push,
					D = A.slice,
					P = A.indexOf || function(e) {
						var t = 0,
							n = this.length;
						for (; t < n; t++) {
							if (this[t] === e) {
								return t
							}
						}
						return -1
					},
					H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
					B = "[\\x20\\t\\r\\n\\f]",
					j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
					F = j.replace("w", "w#"),
					I = "\\[" + B + "*(" + j + ")" + B + "*(?:([*^$|!~]?=)" + B + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + F + ")|)|)" + B + "*\\]",
					q = ":(" + j + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)",
					R = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
					U = new RegExp("^" + B + "*," + B + "*"),
					z = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
					W = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
					X = new RegExp(q),
					V = new RegExp("^" + F + "$"),
					$ = {
						ID: new RegExp("^#(" + j + ")"),
						CLASS: new RegExp("^\\.(" + j + ")"),
						TAG: new RegExp("^(" + j.replace("w", "w*") + ")"),
						ATTR: new RegExp("^" + I),
						PSEUDO: new RegExp("^" + q),
						CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
						bool: new RegExp("^(?:" + H + ")$", "i"),
						needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
					},
					J = /^(?:input|select|textarea|button)$/i,
					K = /^h\d$/i,
					Q = /^[^{]+\{\s*\[native \w/,
					G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
					Y = /[+~]/,
					Z = /'|\\/g,
					et = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
					tt = function(e, t, n) {
						var r = "0x" + t - 65536;
						return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
					};
				try {
					_.apply(A = D.call(b.childNodes), b.childNodes);
					A[b.childNodes.length].nodeType
				} catch (nt) {
					_ = {
						apply: A.length ? function(e, t) {
							M.apply(e, D.call(t))
						} : function(e, t) {
							var n = e.length,
								r = 0;
							while (e[n++] = t[r++]) {}
							e.length = n - 1
						}
					}
				}
				n = rt.support = {};
				s = rt.isXML = function(e) {
					var t = e && (e.ownerDocument || e).documentElement;
					return t ? t.nodeName !== "HTML" : false
				};
				l = rt.setDocument = function(e) {
					var t, i = e ? e.ownerDocument || e : b,
						o = i.defaultView;
					if (i === c || i.nodeType !== 9 || !i.documentElement) {
						return c
					}
					c = i;
					h = i.documentElement;
					p = !s(i);
					if (o && o !== o.top) {
						if (o.addEventListener) {
							o.addEventListener("unload", function() {
								l()
							}, false)
						} else if (o.attachEvent) {
							o.attachEvent("onunload", function() {
								l()
							})
						}
					}
					n.attributes = ot(function(e) {
						e.className = "i";
						return !e.getAttribute("className")
					});
					n.getElementsByTagName = ot(function(e) {
						e.appendChild(i.createComment(""));
						return !e.getElementsByTagName("*").length
					});
					n.getElementsByClassName = Q.test(i.getElementsByClassName) && ot(function(e) {
						e.innerHTML = "<div class='a'></div><div class='a i'></div>";
						e.firstChild.className = "i";
						return e.getElementsByClassName("i").length === 2
					});
					n.getById = ot(function(e) {
						h.appendChild(e).id = y;
						return !i.getElementsByName || !i.getElementsByName(y).length
					});
					if (n.getById) {
						r.find["ID"] = function(e, t) {
							if (typeof t.getElementById !== C && p) {
								var n = t.getElementById(e);
								return n && n.parentNode ? [n] : []
							}
						};
						r.filter["ID"] = function(e) {
							var t = e.replace(et, tt);
							return function(e) {
								return e.getAttribute("id") === t
							}
						}
					} else {
						delete r.find["ID"];
						r.filter["ID"] = function(e) {
							var t = e.replace(et, tt);
							return function(e) {
								var n = typeof e.getAttributeNode !== C && e.getAttributeNode("id");
								return n && n.value === t
							}
						}
					}
					r.find["TAG"] = n.getElementsByTagName ? function(e, t) {
						if (typeof t.getElementsByTagName !== C) {
							return t.getElementsByTagName(e)
						}
					} : function(e, t) {
						var n, r = [],
							i = 0,
							s = t.getElementsByTagName(e);
						if (e === "*") {
							while (n = s[i++]) {
								if (n.nodeType === 1) {
									r.push(n)
								}
							}
							return r
						}
						return s
					};
					r.find["CLASS"] = n.getElementsByClassName && function(e, t) {
						if (typeof t.getElementsByClassName !== C && p) {
							return t.getElementsByClassName(e)
						}
					};
					v = [];
					d = [];
					if (n.qsa = Q.test(i.querySelectorAll)) {
						ot(function(e) {
							e.innerHTML = "<select t=''><option selected=''></option></select>";
							if (e.querySelectorAll("[t^='']").length) {
								d.push("[*^$]=" + B + "*(?:''|\"\")")
							}
							if (!e.querySelectorAll("[selected]").length) {
								d.push("\\[" + B + "*(?:value|" + H + ")")
							}
							if (!e.querySelectorAll(":checked").length) {
								d.push(":checked")
							}
						});
						ot(function(e) {
							var t = i.createElement("input");
							t.setAttribute("type", "hidden");
							e.appendChild(t).setAttribute("name", "D");
							if (e.querySelectorAll("[name=d]").length) {
								d.push("name" + B + "*[*^$|!~]?=")
							}
							if (!e.querySelectorAll(":enabled").length) {
								d.push(":enabled", ":disabled")
							}
							e.querySelectorAll("*,:x");
							d.push(",.*:")
						})
					}
					if (n.matchesSelector = Q.test(m = h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) {
						ot(function(e) {
							n.disconnectedMatch = m.call(e, "div");
							m.call(e, "[s!='']:x");
							v.push("!=", q)
						})
					}
					d = d.length && new RegExp(d.join("|"));
					v = v.length && new RegExp(v.join("|"));
					t = Q.test(h.compareDocumentPosition);
					g = t || Q.test(h.contains) ? function(e, t) {
						var n = e.nodeType === 9 ? e.documentElement : e,
							r = t && t.parentNode;
						return e === r || !!(r && r.nodeType === 1 && (n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16))
					} : function(e, t) {
						if (t) {
							while (t = t.parentNode) {
								if (t === e) {
									return true
								}
							}
						}
						return false
					};
					N = t ? function(e, t) {
						if (e === t) {
							f = true;
							return 0
						}
						var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
						if (r) {
							return r
						}
						r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
						if (r & 1 || !n.sortDetached && t.compareDocumentPosition(e) === r) {
							if (e === i || e.ownerDocument === b && g(b, e)) {
								return -1
							}
							if (t === i || t.ownerDocument === b && g(b, t)) {
								return 1
							}
							return a ? P.call(a, e) - P.call(a, t) : 0
						}
						return r & 4 ? -1 : 1
					} : function(e, t) {
						if (e === t) {
							f = true;
							return 0
						}
						var n, r = 0,
							s = e.parentNode,
							o = t.parentNode,
							u = [e],
							l = [t];
						if (!s || !o) {
							return e === i ? -1 : t === i ? 1 : s ? -1 : o ? 1 : a ? P.call(a, e) - P.call(a, t) : 0
						} else if (s === o) {
							return at(e, t)
						}
						n = e;
						while (n = n.parentNode) {
							u.unshift(n)
						}
						n = t;
						while (n = n.parentNode) {
							l.unshift(n)
						}
						while (u[r] === l[r]) {
							r++
						}
						return r ? at(u[r], l[r]) : u[r] === b ? -1 : l[r] === b ? 1 : 0
					};
					return i
				};
				rt.matches = function(e, t) {
					return rt(e, null, null, t)
				};
				rt.matchesSelector = function(e, t) {
					if ((e.ownerDocument || e) !== c) {
						l(e)
					}
					t = t.replace(W, "='$1']");
					if (n.matchesSelector && p && (!v || !v.test(t)) && (!d || !d.test(t))) {
						try {
							var r = m.call(e, t);
							if (r || n.disconnectedMatch || e.document && e.document.nodeType !== 11) {
								return r
							}
						} catch (i) {}
					}
					return rt(t, c, null, [e]).length > 0
				};
				rt.contains = function(e, t) {
					if ((e.ownerDocument || e) !== c) {
						l(e)
					}
					return g(e, t)
				};
				rt.attr = function(e, t) {
					if ((e.ownerDocument || e) !== c) {
						l(e)
					}
					var i = r.attrHandle[t.toLowerCase()],
						s = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !p) : undefined;
					return s !== undefined ? s : n.attributes || !p ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
				};
				rt.error = function(e) {
					throw new Error("Syntax error, unrecognized expression: " + e)
				};
				rt.uniqueSort = function(e) {
					var t, r = [],
						i = 0,
						s = 0;
					f = !n.detectDuplicates;
					a = !n.sortStable && e.slice(0);
					e.sort(N);
					if (f) {
						while (t = e[s++]) {
							if (t === e[s]) {
								i = r.push(s)
							}
						}
						while (i--) {
							e.splice(r[i], 1)
						}
					}
					a = null;
					return e
				};
				i = rt.getText = function(e) {
					var t, n = "",
						r = 0,
						s = e.nodeType;
					if (!s) {
						while (t = e[r++]) {
							n += i(t)
						}
					} else if (s === 1 || s === 9 || s === 11) {
						if (typeof e.textContent === "string") {
							return e.textContent
						} else {
							for (e = e.firstChild; e; e = e.nextSibling) {
								n += i(e)
							}
						}
					} else if (s === 3 || s === 4) {
						return e.nodeValue
					}
					return n
				};
				r = rt.selectors = {
					cacheLength: 50,
					createPseudo: st,
					match: $,
					attrHandle: {},
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: true
						},
						" ": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: true
						},
						"~": {
							dir: "previousSibling"
						}
					},
					preFilter: {
						ATTR: function(e) {
							e[1] = e[1].replace(et, tt);
							e[3] = (e[4] || e[5] || "").replace(et, tt);
							if (e[2] === "~=") {
								e[3] = " " + e[3] + " "
							}
							return e.slice(0, 4)
						},
						CHILD: function(e) {
							e[1] = e[1].toLowerCase();
							if (e[1].slice(0, 3) === "nth") {
								if (!e[3]) {
									rt.error(e[0])
								}
								e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
								e[5] = +(e[7] + e[8] || e[3] === "odd")
							} else if (e[3]) {
								rt.error(e[0])
							}
							return e
						},
						PSEUDO: function(e) {
							var t, n = !e[5] && e[2];
							if ($["CHILD"].test(e[0])) {
								return null
							}
							if (e[3] && e[4] !== undefined) {
								e[2] = e[4]
							} else if (n && X.test(n) && (t = dt(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
								e[0] = e[0].slice(0, t);
								e[2] = n.slice(0, t)
							}
							return e.slice(0, 3)
						}
					},
					filter: {
						TAG: function(e) {
							var t = e.replace(et, tt).toLowerCase();
							return e === "*" ? function() {
								return true
							} : function(e) {
								return e.nodeName && e.nodeName.toLowerCase() === t
							}
						},
						CLASS: function(e) {
							var t = S[e + " "];
							return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && S(e, function(e) {
								return t.test(typeof e.className === "string" && e.className || typeof e.getAttribute !== C && e.getAttribute("class") || "")
							})
						},
						ATTR: function(e, t, n) {
							return function(r) {
								var i = rt.attr(r, e);
								if (i == null) {
									return t === "!="
								}
								if (!t) {
									return true
								}
								i += "";
								return t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : false
							}
						},
						CHILD: function(e, t, n, r, i) {
							var s = e.slice(0, 3) !== "nth",
								o = e.slice(-4) !== "last",
								u = t === "of-type";
							return r === 1 && i === 0 ? function(e) {
								return !!e.parentNode
							} : function(t, n, a) {
								var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
									m = t.parentNode,
									g = u && t.nodeName.toLowerCase(),
									b = !a && !u;
								if (m) {
									if (s) {
										while (v) {
											c = t;
											while (c = c[v]) {
												if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) {
													return false
												}
											}
											d = v = e === "only" && !d && "nextSibling"
										}
										return true
									}
									d = [o ? m.firstChild : m.lastChild];
									if (o && b) {
										l = m[y] || (m[y] = {});
										f = l[e] || [];
										p = f[0] === w && f[1];
										h = f[0] === w && f[2];
										c = p && m.childNodes[p];
										while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) {
											if (c.nodeType === 1 && ++h && c === t) {
												l[e] = [w, p, h];
												break
											}
										}
									} else if (b && (f = (t[y] || (t[y] = {}))[e]) && f[0] === w) {
										h = f[1]
									} else {
										while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) {
											if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
												if (b) {
													(c[y] || (c[y] = {}))[e] = [w, h]
												}
												if (c === t) {
													break
												}
											}
										}
									}
									h -= i;
									return h === r || h % r === 0 && h / r >= 0
								}
							}
						},
						PSEUDO: function(e, t) {
							var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || rt.error("unsupported pseudo: " + e);
							if (i[y]) {
								return i(t)
							}
							if (i.length > 1) {
								n = [e, e, "", t];
								return r.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
									var r, s = i(e, t),
										o = s.length;
									while (o--) {
										r = P.call(e, s[o]);
										e[r] = !(n[r] = s[o])
									}
								}) : function(e) {
									return i(e, 0, n)
								}
							}
							return i
						}
					},
					pseudos: {
						not: st(function(e) {
							var t = [],
								n = [],
								r = o(e.replace(R, "$1"));
							return r[y] ? st(function(e, t, n, i) {
								var s, o = r(e, null, i, []),
									u = e.length;
								while (u--) {
									if (s = o[u]) {
										e[u] = !(t[u] = s)
									}
								}
							}) : function(e, i, s) {
								t[0] = e;
								r(t, null, s, n);
								return !n.pop()
							}
						}),
						has: st(function(e) {
							return function(t) {
								return rt(e, t).length > 0
							}
						}),
						contains: st(function(e) {
							return function(t) {
								return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
							}
						}),
						lang: st(function(e) {
							if (!V.test(e || "")) {
								rt.error("unsupported lang: " + e)
							}
							e = e.replace(et, tt).toLowerCase();
							return function(t) {
								var n;
								do {
									if (n = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
										n = n.toLowerCase();
										return n === e || n.indexOf(e + "-") === 0
									}
								} while ((t = t.parentNode) && t.nodeType === 1);
								return false
							}
						}),
						target: function(t) {
							var n = e.location && e.location.hash;
							return n && n.slice(1) === t.id
						},
						root: function(e) {
							return e === h
						},
						focus: function(e) {
							return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
						},
						enabled: function(e) {
							return e.disabled === false
						},
						disabled: function(e) {
							return e.disabled === true
						},
						checked: function(e) {
							var t = e.nodeName.toLowerCase();
							return t === "input" && !!e.checked || t === "option" && !!e.selected
						},
						selected: function(e) {
							if (e.parentNode) {
								e.parentNode.selectedIndex
							}
							return e.selected === true
						},
						empty: function(e) {
							for (e = e.firstChild; e; e = e.nextSibling) {
								if (e.nodeType < 6) {
									return false
								}
							}
							return true
						},
						parent: function(e) {
							return !r.pseudos["empty"](e)
						},
						header: function(e) {
							return K.test(e.nodeName)
						},
						input: function(e) {
							return J.test(e.nodeName)
						},
						button: function(e) {
							var t = e.nodeName.toLowerCase();
							return t === "input" && e.type === "button" || t === "button"
						},
						text: function(e) {
							var t;
							return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
						},
						first: ct(function() {
							return [0]
						}),
						last: ct(function(e, t) {
							return [t - 1]
						}),
						eq: ct(function(e, t, n) {
							return [n < 0 ? n + t : n]
						}),
						even: ct(function(e, t) {
							var n = 0;
							for (; n < t; n += 2) {
								e.push(n)
							}
							return e
						}),
						odd: ct(function(e, t) {
							var n = 1;
							for (; n < t; n += 2) {
								e.push(n)
							}
							return e
						}),
						lt: ct(function(e, t, n) {
							var r = n < 0 ? n + t : n;
							for (; --r >= 0;) {
								e.push(r)
							}
							return e
						}),
						gt: ct(function(e, t, n) {
							var r = n < 0 ? n + t : n;
							for (; ++r < t;) {
								e.push(r)
							}
							return e
						})
					}
				};
				r.pseudos["nth"] = r.pseudos["eq"];
				for (t in {
						radio: true,
						checkbox: true,
						file: true,
						password: true,
						image: true
					}) {
					r.pseudos[t] = ft(t)
				}
				for (t in {
						submit: true,
						reset: true
					}) {
					r.pseudos[t] = lt(t)
				}
				pt.prototype = r.filters = r.pseudos;
				r.setFilters = new pt;
				o = rt.compile = function(e, t) {
					var n, r = [],
						i = [],
						s = T[e + " "];
					if (!s) {
						if (!t) {
							t = dt(e)
						}
						n = t.length;
						while (n--) {
							s = wt(t[n]);
							if (s[y]) {
								r.push(s)
							} else {
								i.push(s)
							}
						}
						s = T(e, Et(i, r))
					}
					return s
				};
				n.sortStable = y.split("").sort(N).join("") === y;
				n.detectDuplicates = !!f;
				l();
				n.sortDetached = ot(function(e) {
					return e.compareDocumentPosition(c.createElement("div")) & 1
				});
				if (!ot(function(e) {
						e.innerHTML = "<a href='#'></a>";
						return e.firstChild.getAttribute("href") === "#"
					})) {
					ut("type|href|height|width", function(e, t, n) {
						if (!n) {
							return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
						}
					})
				}
				if (!n.attributes || !ot(function(e) {
						e.innerHTML = "<input/>";
						e.firstChild.setAttribute("value", "");
						return e.firstChild.getAttribute("value") === ""
					})) {
					ut("value", function(e, t, n) {
						if (!n && e.nodeName.toLowerCase() === "input") {
							return e.defaultValue
						}
					})
				}
				if (!ot(function(e) {
						return e.getAttribute("disabled") == null
					})) {
					ut(H, function(e, t, n) {
						var r;
						if (!n) {
							return e[t] === true ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
						}
					})
				}
				return rt
			}(window);
			jQuery.find = Sizzle;
			jQuery.expr = Sizzle.selectors;
			jQuery.expr[":"] = jQuery.expr.pseudos;
			jQuery.unique = Sizzle.uniqueSort;
			jQuery.text = Sizzle.getText;
			jQuery.isXMLDoc = Sizzle.isXML;
			jQuery.contains = Sizzle.contains;
			var rneedsContext = jQuery.expr.match.needsContext;
			var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
			var risSimple = /^.[^:#\[\.,]*$/;
			jQuery.filter = function(e, t, n) {
				var r = t[0];
				if (n) {
					e = ":not(" + e + ")"
				}
				return t.length === 1 && r.nodeType === 1 ? jQuery.find.matchesSelector(r, e) ? [r] : [] : jQuery.find.matches(e, jQuery.grep(t, function(e) {
					return e.nodeType === 1
				}))
			};
			jQuery.fn.extend({
				find: function(e) {
					var t, n = this.length,
						r = [],
						i = this;
					if (typeof e !== "string") {
						return this.pushStack(jQuery(e).filter(function() {
							for (t = 0; t < n; t++) {
								if (jQuery.contains(i[t], this)) {
									return true
								}
							}
						}))
					}
					for (t = 0; t < n; t++) {
						jQuery.find(e, i[t], r)
					}
					r = this.pushStack(n > 1 ? jQuery.unique(r) : r);
					r.selector = this.selector ? this.selector + " " + e : e;
					return r
				},
				filter: function(e) {
					return this.pushStack(winnow(this, e || [], false))
				},
				not: function(e) {
					return this.pushStack(winnow(this, e || [], true))
				},
				is: function(e) {
					return !!winnow(this, typeof e === "string" && rneedsContext.test(e) ? jQuery(e) : e || [], false).length
				}
			});
			var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
				init = jQuery.fn.init = function(e, t) {
					var n, r;
					if (!e) {
						return this
					}
					if (typeof e === "string") {
						if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3) {
							n = [null, e, null]
						} else {
							n = rquickExpr.exec(e)
						}
						if (n && (n[1] || !t)) {
							if (n[1]) {
								t = t instanceof jQuery ? t[0] : t;
								jQuery.merge(this, jQuery.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : document, true));
								if (rsingleTag.test(n[1]) && jQuery.isPlainObject(t)) {
									for (n in t) {
										if (jQuery.isFunction(this[n])) {
											this[n](t[n])
										} else {
											this.attr(n, t[n])
										}
									}
								}
								return this
							} else {
								r = document.getElementById(n[2]);
								if (r && r.parentNode) {
									this.length = 1;
									this[0] = r
								}
								this.context = document;
								this.selector = e;
								return this
							}
						} else if (!t || t.jquery) {
							return (t || rootjQuery).find(e)
						} else {
							return this.constructor(t).find(e)
						}
					} else if (e.nodeType) {
						this.context = this[0] = e;
						this.length = 1;
						return this
					} else if (jQuery.isFunction(e)) {
						return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(e) : e(jQuery)
					}
					if (e.selector !== undefined) {
						this.selector = e.selector;
						this.context = e.context
					}
					return jQuery.makeArray(e, this)
				};
			init.prototype = jQuery.fn;
			rootjQuery = jQuery(document);
			var rparentsprev = /^(?:parents|prev(?:Until|All))/,
				guaranteedUnique = {
					children: true,
					contents: true,
					next: true,
					prev: true
				};
			jQuery.extend({
				dir: function(e, t, n) {
					var r = [],
						i = n !== undefined;
					while ((e = e[t]) && e.nodeType !== 9) {
						if (e.nodeType === 1) {
							if (i && jQuery(e).is(n)) {
								break
							}
							r.push(e)
						}
					}
					return r
				},
				sibling: function(e, t) {
					var n = [];
					for (; e; e = e.nextSibling) {
						if (e.nodeType === 1 && e !== t) {
							n.push(e)
						}
					}
					return n
				}
			});
			jQuery.fn.extend({
				has: function(e) {
					var t = jQuery(e, this),
						n = t.length;
					return this.filter(function() {
						var e = 0;
						for (; e < n; e++) {
							if (jQuery.contains(this, t[e])) {
								return true
							}
						}
					})
				},
				closest: function(e, t) {
					var n, r = 0,
						i = this.length,
						s = [],
						o = rneedsContext.test(e) || typeof e !== "string" ? jQuery(e, t || this.context) : 0;
					for (; r < i; r++) {
						for (n = this[r]; n && n !== t; n = n.parentNode) {
							if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && jQuery.find.matchesSelector(n, e))) {
								s.push(n);
								break
							}
						}
					}
					return this.pushStack(s.length > 1 ? jQuery.unique(s) : s)
				},
				index: function(e) {
					if (!e) {
						return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
					}
					if (typeof e === "string") {
						return indexOf.call(jQuery(e), this[0])
					}
					return indexOf.call(this, e.jquery ? e[0] : e)
				},
				add: function(e, t) {
					return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(e, t))))
				},
				addBack: function(e) {
					return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
				}
			});
			jQuery.each({
				parent: function(e) {
					var t = e.parentNode;
					return t && t.nodeType !== 11 ? t : null
				},
				parents: function(e) {
					return jQuery.dir(e, "parentNode")
				},
				parentsUntil: function(e, t, n) {
					return jQuery.dir(e, "parentNode", n)
				},
				next: function(e) {
					return sibling(e, "nextSibling")
				},
				prev: function(e) {
					return sibling(e, "previousSibling")
				},
				nextAll: function(e) {
					return jQuery.dir(e, "nextSibling")
				},
				prevAll: function(e) {
					return jQuery.dir(e, "previousSibling")
				},
				nextUntil: function(e, t, n) {
					return jQuery.dir(e, "nextSibling", n)
				},
				prevUntil: function(e, t, n) {
					return jQuery.dir(e, "previousSibling", n)
				},
				siblings: function(e) {
					return jQuery.sibling((e.parentNode || {}).firstChild, e)
				},
				children: function(e) {
					return jQuery.sibling(e.firstChild)
				},
				contents: function(e) {
					return e.contentDocument || jQuery.merge([], e.childNodes)
				}
			}, function(e, t) {
				jQuery.fn[e] = function(n, r) {
					var i = jQuery.map(this, t, n);
					if (e.slice(-5) !== "Until") {
						r = n
					}
					if (r && typeof r === "string") {
						i = jQuery.filter(r, i)
					}
					if (this.length > 1) {
						if (!guaranteedUnique[e]) {
							jQuery.unique(i)
						}
						if (rparentsprev.test(e)) {
							i.reverse()
						}
					}
					return this.pushStack(i)
				}
			});
			var rnotwhite = /\S+/g;
			var optionsCache = {};
			jQuery.Callbacks = function(e) {
				e = typeof e === "string" ? optionsCache[e] || createOptions(e) : jQuery.extend({}, e);
				var t, n, r, i, s, o, u = [],
					a = !e.once && [],
					f = function(c) {
						t = e.memory && c;
						n = true;
						o = i || 0;
						i = 0;
						s = u.length;
						r = true;
						for (; u && o < s; o++) {
							if (u[o].apply(c[0], c[1]) === false && e.stopOnFalse) {
								t = false;
								break
							}
						}
						r = false;
						if (u) {
							if (a) {
								if (a.length) {
									f(a.shift())
								}
							} else if (t) {
								u = []
							} else {
								l.disable()
							}
						}
					},
					l = {
						add: function() {
							if (u) {
								var n = u.length;
								(function o(t) {
									jQuery.each(t, function(t, n) {
										var r = jQuery.type(n);
										if (r === "function") {
											if (!e.unique || !l.has(n)) {
												u.push(n)
											}
										} else if (n && n.length && r !== "string") {
											o(n)
										}
									})
								})(arguments);
								if (r) {
									s = u.length
								} else if (t) {
									i = n;
									f(t)
								}
							}
							return this
						},
						remove: function() {
							if (u) {
								jQuery.each(arguments, function(e, t) {
									var n;
									while ((n = jQuery.inArray(t, u, n)) > -1) {
										u.splice(n, 1);
										if (r) {
											if (n <= s) {
												s--
											}
											if (n <= o) {
												o--
											}
										}
									}
								})
							}
							return this
						},
						has: function(e) {
							return e ? jQuery.inArray(e, u) > -1 : !!(u && u.length)
						},
						empty: function() {
							u = [];
							s = 0;
							return this
						},
						disable: function() {
							u = a = t = undefined;
							return this
						},
						disabled: function() {
							return !u
						},
						lock: function() {
							a = undefined;
							if (!t) {
								l.disable()
							}
							return this
						},
						locked: function() {
							return !a
						},
						fireWith: function(e, t) {
							if (u && (!n || a)) {
								t = t || [];
								t = [e, t.slice ? t.slice() : t];
								if (r) {
									a.push(t)
								} else {
									f(t)
								}
							}
							return this
						},
						fire: function() {
							l.fireWith(this, arguments);
							return this
						},
						fired: function() {
							return !!n
						}
					};
				return l
			};
			jQuery.extend({
				Deferred: function(e) {
					var t = [
							["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
							["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
							["notify", "progress", jQuery.Callbacks("memory")]
						],
						n = "pending",
						r = {
							state: function() {
								return n
							},
							always: function() {
								i.done(arguments).fail(arguments);
								return this
							},
							then: function() {
								var e = arguments;
								return jQuery.Deferred(function(n) {
									jQuery.each(t, function(t, s) {
										var o = jQuery.isFunction(e[t]) && e[t];
										i[s[1]](function() {
											var e = o && o.apply(this, arguments);
											if (e && jQuery.isFunction(e.promise)) {
												e.promise().done(n.resolve).fail(n.reject).progress(n.notify)
											} else {
												n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
											}
										})
									});
									e = null
								}).promise()
							},
							promise: function(e) {
								return e != null ? jQuery.extend(e, r) : r
							}
						},
						i = {};
					r.pipe = r.then;
					jQuery.each(t, function(e, s) {
						var o = s[2],
							u = s[3];
						r[s[1]] = o.add;
						if (u) {
							o.add(function() {
								n = u
							}, t[e ^ 1][2].disable, t[2][2].lock)
						}
						i[s[0]] = function() {
							i[s[0] + "With"](this === i ? r : this, arguments);
							return this
						};
						i[s[0] + "With"] = o.fireWith
					});
					r.promise(i);
					if (e) {
						e.call(i, i)
					}
					return i
				},
				when: function(e) {
					var t = 0,
						n = slice.call(arguments),
						r = n.length,
						i = r !== 1 || e && jQuery.isFunction(e.promise) ? r : 0,
						s = i === 1 ? e : jQuery.Deferred(),
						o = function(e, t, n) {
							return function(r) {
								t[e] = this;
								n[e] = arguments.length > 1 ? slice.call(arguments) : r;
								if (n === u) {
									s.notifyWith(t, n)
								} else if (!--i) {
									s.resolveWith(t, n)
								}
							}
						},
						u, a, f;
					if (r > 1) {
						u = new Array(r);
						a = new Array(r);
						f = new Array(r);
						for (; t < r; t++) {
							if (n[t] && jQuery.isFunction(n[t].promise)) {
								n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u))
							} else {
								--i
							}
						}
					}
					if (!i) {
						s.resolveWith(f, n)
					}
					return s.promise()
				}
			});
			var readyList;
			jQuery.fn.ready = function(e) {
				jQuery.ready.promise().done(e);
				return this
			};
			jQuery.extend({
				isReady: false,
				readyWait: 1,
				holdReady: function(e) {
					if (e) {
						jQuery.readyWait++
					} else {
						jQuery.ready(true)
					}
				},
				ready: function(e) {
					if (e === true ? --jQuery.readyWait : jQuery.isReady) {
						return
					}
					jQuery.isReady = true;
					if (e !== true && --jQuery.readyWait > 0) {
						return
					}
					readyList.resolveWith(document, [jQuery]);
					if (jQuery.fn.trigger) {
						jQuery(document).trigger("ready").off("ready")
					}
				}
			});
			jQuery.ready.promise = function(e) {
				if (!readyList) {
					readyList = jQuery.Deferred();
					if (document.readyState === "complete") {
						setTimeout(jQuery.ready)
					} else {
						document.addEventListener("DOMContentLoaded", completed, false);
						window.addEventListener("load", completed, false)
					}
				}
				return readyList.promise(e)
			};
			jQuery.ready.promise();
			var access = jQuery.access = function(e, t, n, r, i, s, o) {
				var u = 0,
					a = e.length,
					f = n == null;
				if (jQuery.type(n) === "object") {
					i = true;
					for (u in n) {
						jQuery.access(e, t, u, n[u], true, s, o)
					}
				} else if (r !== undefined) {
					i = true;
					if (!jQuery.isFunction(r)) {
						o = true
					}
					if (f) {
						if (o) {
							t.call(e, r);
							t = null
						} else {
							f = t;
							t = function(e, t, n) {
								return f.call(jQuery(e), n)
							}
						}
					}
					if (t) {
						for (; u < a; u++) {
							t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)))
						}
					}
				}
				return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
			};
			jQuery.acceptData = function(e) {
				return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
			};
			Data.uid = 1;
			Data.accepts = jQuery.acceptData;
			Data.prototype = {
				key: function(e) {
					if (!Data.accepts(e)) {
						return 0
					}
					var t = {},
						n = e[this.expando];
					if (!n) {
						n = Data.uid++;
						try {
							t[this.expando] = {
								value: n
							};
							Object.defineProperties(e, t)
						} catch (r) {
							t[this.expando] = n;
							jQuery.extend(e, t)
						}
					}
					if (!this.cache[n]) {
						this.cache[n] = {}
					}
					return n
				},
				set: function(e, t, n) {
					var r, i = this.key(e),
						s = this.cache[i];
					if (typeof t === "string") {
						s[t] = n
					} else {
						if (jQuery.isEmptyObject(s)) {
							jQuery.extend(this.cache[i], t)
						} else {
							for (r in t) {
								s[r] = t[r]
							}
						}
					}
					return s
				},
				get: function(e, t) {
					var n = this.cache[this.key(e)];
					return t === undefined ? n : n[t]
				},
				access: function(e, t, n) {
					var r;
					if (t === undefined || t && typeof t === "string" && n === undefined) {
						r = this.get(e, t);
						return r !== undefined ? r : this.get(e, jQuery.camelCase(t))
					}
					this.set(e, t, n);
					return n !== undefined ? n : t
				},
				remove: function(e, t) {
					var n, r, i, s = this.key(e),
						o = this.cache[s];
					if (t === undefined) {
						this.cache[s] = {}
					} else {
						if (jQuery.isArray(t)) {
							r = t.concat(t.map(jQuery.camelCase))
						} else {
							i = jQuery.camelCase(t);
							if (t in o) {
								r = [t, i]
							} else {
								r = i;
								r = r in o ? [r] : r.match(rnotwhite) || []
							}
						}
						n = r.length;
						while (n--) {
							delete o[r[n]]
						}
					}
				},
				hasData: function(e) {
					return !jQuery.isEmptyObject(this.cache[e[this.expando]] || {})
				},
				discard: function(e) {
					if (e[this.expando]) {
						delete this.cache[e[this.expando]]
					}
				}
			};
			var data_priv = new Data;
			var data_user = new Data;
			var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
				rmultiDash = /([A-Z])/g;
			jQuery.extend({
				hasData: function(e) {
					return data_user.hasData(e) || data_priv.hasData(e)
				},
				data: function(e, t, n) {
					return data_user.access(e, t, n)
				},
				removeData: function(e, t) {
					data_user.remove(e, t)
				},
				_data: function(e, t, n) {
					return data_priv.access(e, t, n)
				},
				_removeData: function(e, t) {
					data_priv.remove(e, t)
				}
			});
			jQuery.fn.extend({
				data: function(e, t) {
					var n, r, i, s = this[0],
						o = s && s.attributes;
					if (e === undefined) {
						if (this.length) {
							i = data_user.get(s);
							if (s.nodeType === 1 && !data_priv.get(s, "hasDataAttrs")) {
								n = o.length;
								while (n--) {
									r = o[n].name;
									if (r.indexOf("data-") === 0) {
										r = jQuery.camelCase(r.slice(5));
										dataAttr(s, r, i[r])
									}
								}
								data_priv.set(s, "hasDataAttrs", true)
							}
						}
						return i
					}
					if (typeof e === "object") {
						return this.each(function() {
							data_user.set(this, e)
						})
					}
					return access(this, function(t) {
						var n, r = jQuery.camelCase(e);
						if (s && t === undefined) {
							n = data_user.get(s, e);
							if (n !== undefined) {
								return n
							}
							n = data_user.get(s, r);
							if (n !== undefined) {
								return n
							}
							n = dataAttr(s, r, undefined);
							if (n !== undefined) {
								return n
							}
							return
						}
						this.each(function() {
							var n = data_user.get(this, r);
							data_user.set(this, r, t);
							if (e.indexOf("-") !== -1 && n !== undefined) {
								data_user.set(this, e, t)
							}
						})
					}, null, t, arguments.length > 1, null, true)
				},
				removeData: function(e) {
					return this.each(function() {
						data_user.remove(this, e)
					})
				}
			});
			jQuery.extend({
				queue: function(e, t, n) {
					var r;
					if (e) {
						t = (t || "fx") + "queue";
						r = data_priv.get(e, t);
						if (n) {
							if (!r || jQuery.isArray(n)) {
								r = data_priv.access(e, t, jQuery.makeArray(n))
							} else {
								r.push(n)
							}
						}
						return r || []
					}
				},
				dequeue: function(e, t) {
					t = t || "fx";
					var n = jQuery.queue(e, t),
						r = n.length,
						i = n.shift(),
						s = jQuery._queueHooks(e, t),
						o = function() {
							jQuery.dequeue(e, t)
						};
					if (i === "inprogress") {
						i = n.shift();
						r--
					}
					if (i) {
						if (t === "fx") {
							n.unshift("inprogress")
						}
						delete s.stop;
						i.call(e, o, s)
					}
					if (!r && s) {
						s.empty.fire()
					}
				},
				_queueHooks: function(e, t) {
					var n = t + "queueHooks";
					return data_priv.get(e, n) || data_priv.access(e, n, {
						empty: jQuery.Callbacks("once memory").add(function() {
							data_priv.remove(e, [t + "queue", n])
						})
					})
				}
			});
			jQuery.fn.extend({
				queue: function(e, t) {
					var n = 2;
					if (typeof e !== "string") {
						t = e;
						e = "fx";
						n--
					}
					if (arguments.length < n) {
						return jQuery.queue(this[0], e)
					}
					return t === undefined ? this : this.each(function() {
						var n = jQuery.queue(this, e, t);
						jQuery._queueHooks(this, e);
						if (e === "fx" && n[0] !== "inprogress") {
							jQuery.dequeue(this, e)
						}
					})
				},
				dequeue: function(e) {
					return this.each(function() {
						jQuery.dequeue(this, e)
					})
				},
				clearQueue: function(e) {
					return this.queue(e || "fx", [])
				},
				promise: function(e, t) {
					var n, r = 1,
						i = jQuery.Deferred(),
						s = this,
						o = this.length,
						u = function() {
							if (!--r) {
								i.resolveWith(s, [s])
							}
						};
					if (typeof e !== "string") {
						t = e;
						e = undefined
					}
					e = e || "fx";
					while (o--) {
						n = data_priv.get(s[o], e + "queueHooks");
						if (n && n.empty) {
							r++;
							n.empty.add(u)
						}
					}
					u();
					return i.promise(t)
				}
			});
			var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
			var cssExpand = ["Top", "Right", "Bottom", "Left"];
			var isHidden = function(e, t) {
				e = t || e;
				return jQuery.css(e, "display") === "none" || !jQuery.contains(e.ownerDocument, e)
			};
			var rcheckableType = /^(?:checkbox|radio)$/i;
			(function() {
				var e = document.createDocumentFragment(),
					t = e.appendChild(document.createElement("div"));
				t.innerHTML = "<input type='radio' checked='checked' name='t'/>";
				support.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
				t.innerHTML = "<textarea>x</textarea>";
				support.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue
			})();
			var strundefined = typeof undefined;
			support.focusinBubbles = "onfocusin" in window;
			var rkeyEvent = /^key/,
				rmouseEvent = /^(?:mouse|contextmenu)|click/,
				rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
				rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
			jQuery.event = {
				global: {},
				add: function(e, t, n, r, i) {
					var s, o, u, a, f, l, c, h, p, d, v, m = data_priv.get(e);
					if (!m) {
						return
					}
					if (n.handler) {
						s = n;
						n = s.handler;
						i = s.selector
					}
					if (!n.guid) {
						n.guid = jQuery.guid++
					}
					if (!(a = m.events)) {
						a = m.events = {}
					}
					if (!(o = m.handle)) {
						o = m.handle = function(t) {
							return typeof jQuery !== strundefined && jQuery.event.triggered !== t.type ? jQuery.event.dispatch.apply(e, arguments) : undefined
						}
					}
					t = (t || "").match(rnotwhite) || [""];
					f = t.length;
					while (f--) {
						u = rtypenamespace.exec(t[f]) || [];
						p = v = u[1];
						d = (u[2] || "").split(".").sort();
						if (!p) {
							continue
						}
						c = jQuery.event.special[p] || {};
						p = (i ? c.delegateType : c.bindType) || p;
						c = jQuery.event.special[p] || {};
						l = jQuery.extend({
							type: p,
							origType: v,
							data: r,
							handler: n,
							guid: n.guid,
							selector: i,
							needsContext: i && jQuery.expr.match.needsContext.test(i),
							namespace: d.join(".")
						}, s);
						if (!(h = a[p])) {
							h = a[p] = [];
							h.delegateCount = 0;
							if (!c.setup || c.setup.call(e, r, d, o) === false) {
								if (e.addEventListener) {
									e.addEventListener(p, o, false)
								}
							}
						}
						if (c.add) {
							c.add.call(e, l);
							if (!l.handler.guid) {
								l.handler.guid = n.guid
							}
						}
						if (i) {
							h.splice(h.delegateCount++, 0, l)
						} else {
							h.push(l)
						}
						jQuery.event.global[p] = true
					}
				},
				remove: function(e, t, n, r, i) {
					var s, o, u, a, f, l, c, h, p, d, v, m = data_priv.hasData(e) && data_priv.get(e);
					if (!m || !(a = m.events)) {
						return
					}
					t = (t || "").match(rnotwhite) || [""];
					f = t.length;
					while (f--) {
						u = rtypenamespace.exec(t[f]) || [];
						p = v = u[1];
						d = (u[2] || "").split(".").sort();
						if (!p) {
							for (p in a) {
								jQuery.event.remove(e, p + t[f], n, r, true)
							}
							continue
						}
						c = jQuery.event.special[p] || {};
						p = (r ? c.delegateType : c.bindType) || p;
						h = a[p] || [];
						u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)");
						o = s = h.length;
						while (s--) {
							l = h[s];
							if ((i || v === l.origType) && (!n || n.guid === l.guid) && (!u || u.test(l.namespace)) && (!r || r === l.selector || r === "**" && l.selector)) {
								h.splice(s, 1);
								if (l.selector) {
									h.delegateCount--
								}
								if (c.remove) {
									c.remove.call(e, l)
								}
							}
						}
						if (o && !h.length) {
							if (!c.teardown || c.teardown.call(e, d, m.handle) === false) {
								jQuery.removeEvent(e, p, m.handle)
							}
							delete a[p]
						}
					}
					if (jQuery.isEmptyObject(a)) {
						delete m.handle;
						data_priv.remove(e, "events")
					}
				},
				trigger: function(e, t, n, r) {
					var i, s, o, u, a, f, l, c = [n || document],
						h = hasOwn.call(e, "type") ? e.type : e,
						p = hasOwn.call(e, "namespace") ? e.namespace.split(".") : [];
					s = o = n = n || document;
					if (n.nodeType === 3 || n.nodeType === 8) {
						return
					}
					if (rfocusMorph.test(h + jQuery.event.triggered)) {
						return
					}
					if (h.indexOf(".") >= 0) {
						p = h.split(".");
						h = p.shift();
						p.sort()
					}
					a = h.indexOf(":") < 0 && "on" + h;
					e = e[jQuery.expando] ? e : new jQuery.Event(h, typeof e === "object" && e);
					e.isTrigger = r ? 2 : 3;
					e.namespace = p.join(".");
					e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
					e.result = undefined;
					if (!e.target) {
						e.target = n
					}
					t = t == null ? [e] : jQuery.makeArray(t, [e]);
					l = jQuery.event.special[h] || {};
					if (!r && l.trigger && l.trigger.apply(n, t) === false) {
						return
					}
					if (!r && !l.noBubble && !jQuery.isWindow(n)) {
						u = l.delegateType || h;
						if (!rfocusMorph.test(u + h)) {
							s = s.parentNode
						}
						for (; s; s = s.parentNode) {
							c.push(s);
							o = s
						}
						if (o === (n.ownerDocument || document)) {
							c.push(o.defaultView || o.parentWindow || window)
						}
					}
					i = 0;
					while ((s = c[i++]) && !e.isPropagationStopped()) {
						e.type = i > 1 ? u : l.bindType || h;
						f = (data_priv.get(s, "events") || {})[e.type] && data_priv.get(s, "handle");
						if (f) {
							f.apply(s, t)
						}
						f = a && s[a];
						if (f && f.apply && jQuery.acceptData(s)) {
							e.result = f.apply(s, t);
							if (e.result === false) {
								e.preventDefault()
							}
						}
					}
					e.type = h;
					if (!r && !e.isDefaultPrevented()) {
						if ((!l._default || l._default.apply(c.pop(), t) === false) && jQuery.acceptData(n)) {
							if (a && jQuery.isFunction(n[h]) && !jQuery.isWindow(n)) {
								o = n[a];
								if (o) {
									n[a] = null
								}
								jQuery.event.triggered = h;
								n[h]();
								jQuery.event.triggered = undefined;
								if (o) {
									n[a] = o
								}
							}
						}
					}
					return e.result
				},
				dispatch: function(e) {
					e = jQuery.event.fix(e);
					var t, n, r, i, s, o = [],
						u = slice.call(arguments),
						a = (data_priv.get(this, "events") || {})[e.type] || [],
						f = jQuery.event.special[e.type] || {};
					u[0] = e;
					e.delegateTarget = this;
					if (f.preDispatch && f.preDispatch.call(this, e) === false) {
						return
					}
					o = jQuery.event.handlers.call(this, e, a);
					t = 0;
					while ((i = o[t++]) && !e.isPropagationStopped()) {
						e.currentTarget = i.elem;
						n = 0;
						while ((s = i.handlers[n++]) && !e.isImmediatePropagationStopped()) {
							if (!e.namespace_re || e.namespace_re.test(s.namespace)) {
								e.handleObj = s;
								e.data = s.data;
								r = ((jQuery.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, u);
								if (r !== undefined) {
									if ((e.result = r) === false) {
										e.preventDefault();
										e.stopPropagation()
									}
								}
							}
						}
					}
					if (f.postDispatch) {
						f.postDispatch.call(this, e)
					}
					return e.result
				},
				handlers: function(e, t) {
					var n, r, i, s, o = [],
						u = t.delegateCount,
						a = e.target;
					if (u && a.nodeType && (!e.button || e.type !== "click")) {
						for (; a !== this; a = a.parentNode || this) {
							if (a.disabled !== true || e.type !== "click") {
								r = [];
								for (n = 0; n < u; n++) {
									s = t[n];
									i = s.selector + " ";
									if (r[i] === undefined) {
										r[i] = s.needsContext ? jQuery(i, this).index(a) >= 0 : jQuery.find(i, this, null, [a]).length
									}
									if (r[i]) {
										r.push(s)
									}
								}
								if (r.length) {
									o.push({
										elem: a,
										handlers: r
									})
								}
							}
						}
					}
					if (u < t.length) {
						o.push({
							elem: this,
							handlers: t.slice(u)
						})
					}
					return o
				},
				props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
				fixHooks: {},
				keyHooks: {
					props: "char charCode key keyCode".split(" "),
					filter: function(e, t) {
						if (e.which == null) {
							e.which = t.charCode != null ? t.charCode : t.keyCode
						}
						return e
					}
				},
				mouseHooks: {
					props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
					filter: function(e, t) {
						var n, r, i, s = t.button;
						if (e.pageX == null && t.clientX != null) {
							n = e.target.ownerDocument || document;
							r = n.documentElement;
							i = n.body;
							e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0);
							e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)
						}
						if (!e.which && s !== undefined) {
							e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0
						}
						return e
					}
				},
				fix: function(e) {
					if (e[jQuery.expando]) {
						return e
					}
					var t, n, r, i = e.type,
						s = e,
						o = this.fixHooks[i];
					if (!o) {
						this.fixHooks[i] = o = rmouseEvent.test(i) ? this.mouseHooks : rkeyEvent.test(i) ? this.keyHooks : {}
					}
					r = o.props ? this.props.concat(o.props) : this.props;
					e = new jQuery.Event(s);
					t = r.length;
					while (t--) {
						n = r[t];
						e[n] = s[n]
					}
					if (!e.target) {
						e.target = document
					}
					if (e.target.nodeType === 3) {
						e.target = e.target.parentNode
					}
					return o.filter ? o.filter(e, s) : e
				},
				special: {
					load: {
						noBubble: true
					},
					focus: {
						trigger: function() {
							if (this !== safeActiveElement() && this.focus) {
								this.focus();
								return false
							}
						},
						delegateType: "focusin"
					},
					blur: {
						trigger: function() {
							if (this === safeActiveElement() && this.blur) {
								this.blur();
								return false
							}
						},
						delegateType: "focusout"
					},
					click: {
						trigger: function() {
							if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
								this.click();
								return false
							}
						},
						_default: function(e) {
							return jQuery.nodeName(e.target, "a")
						}
					},
					beforeunload: {
						postDispatch: function(e) {
							if (e.result !== undefined) {
								e.originalEvent.returnValue = e.result
							}
						}
					}
				},
				simulate: function(e, t, n, r) {
					var i = jQuery.extend(new jQuery.Event, n, {
						type: e,
						isSimulated: true,
						originalEvent: {}
					});
					if (r) {
						jQuery.event.trigger(i, null, t)
					} else {
						jQuery.event.dispatch.call(t, i)
					}
					if (i.isDefaultPrevented()) {
						n.preventDefault()
					}
				}
			};
			jQuery.removeEvent = function(e, t, n) {
				if (e.removeEventListener) {
					e.removeEventListener(t, n, false)
				}
			};
			jQuery.Event = function(e, t) {
				if (!(this instanceof jQuery.Event)) {
					return new jQuery.Event(e, t)
				}
				if (e && e.type) {
					this.originalEvent = e;
					this.type = e.type;
					this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.getPreventDefault && e.getPreventDefault() ? returnTrue : returnFalse
				} else {
					this.type = e
				}
				if (t) {
					jQuery.extend(this, t)
				}
				this.timeStamp = e && e.timeStamp || jQuery.now();
				this[jQuery.expando] = true
			};
			jQuery.Event.prototype = {
				isDefaultPrevented: returnFalse,
				isPropagationStopped: returnFalse,
				isImmediatePropagationStopped: returnFalse,
				preventDefault: function() {
					var e = this.originalEvent;
					this.isDefaultPrevented = returnTrue;
					if (e && e.preventDefault) {
						e.preventDefault()
					}
				},
				stopPropagation: function() {
					var e = this.originalEvent;
					this.isPropagationStopped = returnTrue;
					if (e && e.stopPropagation) {
						e.stopPropagation()
					}
				},
				stopImmediatePropagation: function() {
					this.isImmediatePropagationStopped = returnTrue;
					this.stopPropagation()
				}
			};
			jQuery.each({
				mouseenter: "mouseover",
				mouseleave: "mouseout"
			}, function(e, t) {
				jQuery.event.special[e] = {
					delegateType: t,
					bindType: t,
					handle: function(e) {
						var n, r = this,
							i = e.relatedTarget,
							s = e.handleObj;
						if (!i || i !== r && !jQuery.contains(r, i)) {
							e.type = s.origType;
							n = s.handler.apply(this, arguments);
							e.type = t
						}
						return n
					}
				}
			});
			if (!support.focusinBubbles) {
				jQuery.each({
					focus: "focusin",
					blur: "focusout"
				}, function(e, t) {
					var n = function(e) {
						jQuery.event.simulate(t, e.target, jQuery.event.fix(e), true)
					};
					jQuery.event.special[t] = {
						setup: function() {
							var r = this.ownerDocument || this,
								i = data_priv.access(r, t);
							if (!i) {
								r.addEventListener(e, n, true)
							}
							data_priv.access(r, t, (i || 0) + 1)
						},
						teardown: function() {
							var r = this.ownerDocument || this,
								i = data_priv.access(r, t) - 1;
							if (!i) {
								r.removeEventListener(e, n, true);
								data_priv.remove(r, t)
							} else {
								data_priv.access(r, t, i)
							}
						}
					}
				})
			}
			jQuery.fn.extend({
				on: function(e, t, n, r, i) {
					var s, o;
					if (typeof e === "object") {
						if (typeof t !== "string") {
							n = n || t;
							t = undefined
						}
						for (o in e) {
							this.on(o, t, n, e[o], i)
						}
						return this
					}
					if (n == null && r == null) {
						r = t;
						n = t = undefined
					} else if (r == null) {
						if (typeof t === "string") {
							r = n;
							n = undefined
						} else {
							r = n;
							n = t;
							t = undefined
						}
					}
					if (r === false) {
						r = returnFalse
					} else if (!r) {
						return this
					}
					if (i === 1) {
						s = r;
						r = function(e) {
							jQuery().off(e);
							return s.apply(this, arguments)
						};
						r.guid = s.guid || (s.guid = jQuery.guid++)
					}
					return this.each(function() {
						jQuery.event.add(this, e, r, n, t)
					})
				},
				one: function(e, t, n, r) {
					return this.on(e, t, n, r, 1)
				},
				off: function(e, t, n) {
					var r, i;
					if (e && e.preventDefault && e.handleObj) {
						r = e.handleObj;
						jQuery(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
						return this
					}
					if (typeof e === "object") {
						for (i in e) {
							this.off(i, t, e[i])
						}
						return this
					}
					if (t === false || typeof t === "function") {
						n = t;
						t = undefined
					}
					if (n === false) {
						n = returnFalse
					}
					return this.each(function() {
						jQuery.event.remove(this, e, n, t)
					})
				},
				trigger: function(e, t) {
					return this.each(function() {
						jQuery.event.trigger(e, t, this)
					})
				},
				triggerHandler: function(e, t) {
					var n = this[0];
					if (n) {
						return jQuery.event.trigger(e, t, n, true)
					}
				}
			});
			var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
				rtagName = /<([\w:]+)/,
				rhtml = /<|&#?\w+;/,
				rnoInnerhtml = /<(?:script|style|link)/i,
				rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
				rscriptType = /^$|\/(?:java|ecma)script/i,
				rscriptTypeMasked = /^true\/(.*)/,
				rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
				wrapMap = {
					option: [1, "<select multiple='multiple'>", "</select>"],
					thead: [1, "<table>", "</table>"],
					col: [2, "<table><colgroup>", "</colgroup></table>"],
					tr: [2, "<table><tbody>", "</tbody></table>"],
					td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
					_default: [0, "", ""]
				};
			wrapMap.optgroup = wrapMap.option;
			wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
			wrapMap.th = wrapMap.td;
			jQuery.extend({
				clone: function(e, t, n) {
					var r, i, s, o, u = e.cloneNode(true),
						a = jQuery.contains(e.ownerDocument, e);
					if (!support.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !jQuery.isXMLDoc(e)) {
						o = getAll(u);
						s = getAll(e);
						for (r = 0, i = s.length; r < i; r++) {
							fixInput(s[r], o[r])
						}
					}
					if (t) {
						if (n) {
							s = s || getAll(e);
							o = o || getAll(u);
							for (r = 0, i = s.length; r < i; r++) {
								cloneCopyEvent(s[r], o[r])
							}
						} else {
							cloneCopyEvent(e, u)
						}
					}
					o = getAll(u, "script");
					if (o.length > 0) {
						setGlobalEval(o, !a && getAll(e, "script"))
					}
					return u
				},
				buildFragment: function(e, t, n, r) {
					var i, s, o, u, a, f, l = t.createDocumentFragment(),
						c = [],
						h = 0,
						p = e.length;
					for (; h < p; h++) {
						i = e[h];
						if (i || i === 0) {
							if (jQuery.type(i) === "object") {
								jQuery.merge(c, i.nodeType ? [i] : i)
							} else if (!rhtml.test(i)) {
								c.push(t.createTextNode(i))
							} else {
								s = s || l.appendChild(t.createElement("div"));
								o = (rtagName.exec(i) || ["", ""])[1].toLowerCase();
								u = wrapMap[o] || wrapMap._default;
								s.innerHTML = u[1] + i.replace(rxhtmlTag, "<$1></$2>") + u[2];
								f = u[0];
								while (f--) {
									s = s.lastChild
								}
								jQuery.merge(c, s.childNodes);
								s = l.firstChild;
								s.textContent = ""
							}
						}
					}
					l.textContent = "";
					h = 0;
					while (i = c[h++]) {
						if (r && jQuery.inArray(i, r) !== -1) {
							continue
						}
						a = jQuery.contains(i.ownerDocument, i);
						s = getAll(l.appendChild(i), "script");
						if (a) {
							setGlobalEval(s)
						}
						if (n) {
							f = 0;
							while (i = s[f++]) {
								if (rscriptType.test(i.type || "")) {
									n.push(i)
								}
							}
						}
					}
					return l
				},
				cleanData: function(e) {
					var t, n, r, i, s, o, u = jQuery.event.special,
						a = 0;
					for (;
						(n = e[a]) !== undefined; a++) {
						if (jQuery.acceptData(n)) {
							s = n[data_priv.expando];
							if (s && (t = data_priv.cache[s])) {
								r = Object.keys(t.events || {});
								if (r.length) {
									for (o = 0;
										(i = r[o]) !== undefined; o++) {
										if (u[i]) {
											jQuery.event.remove(n, i)
										} else {
											jQuery.removeEvent(n, i, t.handle)
										}
									}
								}
								if (data_priv.cache[s]) {
									delete data_priv.cache[s]
								}
							}
						}
						delete data_user.cache[n[data_user.expando]]
					}
				}
			});
			jQuery.fn.extend({
				text: function(e) {
					return access(this, function(e) {
						return e === undefined ? jQuery.text(this) : this.empty().each(function() {
							if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
								this.textContent = e
							}
						})
					}, null, e, arguments.length)
				},
				append: function() {
					return this.domManip(arguments, function(e) {
						if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
							var t = manipulationTarget(this, e);
							t.appendChild(e)
						}
					})
				},
				prepend: function() {
					return this.domManip(arguments, function(e) {
						if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
							var t = manipulationTarget(this, e);
							t.insertBefore(e, t.firstChild)
						}
					})
				},
				before: function() {
					return this.domManip(arguments, function(e) {
						if (this.parentNode) {
							this.parentNode.insertBefore(e, this)
						}
					})
				},
				after: function() {
					return this.domManip(arguments, function(e) {
						if (this.parentNode) {
							this.parentNode.insertBefore(e, this.nextSibling)
						}
					})
				},
				remove: function(e, t) {
					var n, r = e ? jQuery.filter(e, this) : this,
						i = 0;
					for (;
						(n = r[i]) != null; i++) {
						if (!t && n.nodeType === 1) {
							jQuery.cleanData(getAll(n))
						}
						if (n.parentNode) {
							if (t && jQuery.contains(n.ownerDocument, n)) {
								setGlobalEval(getAll(n, "script"))
							}
							n.parentNode.removeChild(n)
						}
					}
					return this
				},
				empty: function() {
					var e, t = 0;
					for (;
						(e = this[t]) != null; t++) {
						if (e.nodeType === 1) {
							jQuery.cleanData(getAll(e, false));
							e.textContent = ""
						}
					}
					return this
				},
				clone: function(e, t) {
					e = e == null ? false : e;
					t = t == null ? e : t;
					return this.map(function() {
						return jQuery.clone(this, e, t)
					})
				},
				html: function(e) {
					return access(this, function(e) {
						var t = this[0] || {},
							n = 0,
							r = this.length;
						if (e === undefined && t.nodeType === 1) {
							return t.innerHTML
						}
						if (typeof e === "string" && !rnoInnerhtml.test(e) && !wrapMap[(rtagName.exec(e) || ["", ""])[1].toLowerCase()]) {
							e = e.replace(rxhtmlTag, "<$1></$2>");
							try {
								for (; n < r; n++) {
									t = this[n] || {};
									if (t.nodeType === 1) {
										jQuery.cleanData(getAll(t, false));
										t.innerHTML = e
									}
								}
								t = 0
							} catch (i) {}
						}
						if (t) {
							this.empty().append(e)
						}
					}, null, e, arguments.length)
				},
				replaceWith: function() {
					var e = arguments[0];
					this.domManip(arguments, function(t) {
						e = this.parentNode;
						jQuery.cleanData(getAll(this));
						if (e) {
							e.replaceChild(t, this)
						}
					});
					return e && (e.length || e.nodeType) ? this : this.remove()
				},
				detach: function(e) {
					return this.remove(e, true)
				},
				domManip: function(e, t) {
					e = concat.apply([], e);
					var n, r, i, s, o, u, a = 0,
						f = this.length,
						l = this,
						c = f - 1,
						h = e[0],
						p = jQuery.isFunction(h);
					if (p || f > 1 && typeof h === "string" && !support.checkClone && rchecked.test(h)) {
						return this.each(function(n) {
							var r = l.eq(n);
							if (p) {
								e[0] = h.call(this, n, r.html())
							}
							r.domManip(e, t)
						})
					}
					if (f) {
						n = jQuery.buildFragment(e, this[0].ownerDocument, false, this);
						r = n.firstChild;
						if (n.childNodes.length === 1) {
							n = r
						}
						if (r) {
							i = jQuery.map(getAll(n, "script"), disableScript);
							s = i.length;
							for (; a < f; a++) {
								o = n;
								if (a !== c) {
									o = jQuery.clone(o, true, true);
									if (s) {
										jQuery.merge(i, getAll(o, "script"))
									}
								}
								t.call(this[a], o, a)
							}
							if (s) {
								u = i[i.length - 1].ownerDocument;
								jQuery.map(i, restoreScript);
								for (a = 0; a < s; a++) {
									o = i[a];
									if (rscriptType.test(o.type || "") && !data_priv.access(o, "globalEval") && jQuery.contains(u, o)) {
										if (o.src) {
											if (jQuery._evalUrl) {
												jQuery._evalUrl(o.src)
											}
										} else {
											jQuery.globalEval(o.textContent.replace(rcleanScript, ""))
										}
									}
								}
							}
						}
					}
					return this
				}
			});
			jQuery.each({
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith"
			}, function(e, t) {
				jQuery.fn[e] = function(e) {
					var n, r = [],
						i = jQuery(e),
						s = i.length - 1,
						o = 0;
					for (; o <= s; o++) {
						n = o === s ? this : this.clone(true);
						jQuery(i[o])[t](n);
						push.apply(r, n.get())
					}
					return this.pushStack(r)
				}
			});
			var iframe, elemdisplay = {};
			var rmargin = /^margin/;
			var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
			var getStyles = function(e) {
				return e.ownerDocument.defaultView.getComputedStyle(e, null)
			};
			(function() {
				function o() {
					s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;" + "position:absolute;top:1%";
					r.appendChild(i);
					var n = window.getComputedStyle(s, null);
					e = n.top !== "1%";
					t = n.width === "4px";
					r.removeChild(i)
				}
				var e, t, n = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;" + "-moz-box-sizing:content-box;box-sizing:content-box",
					r = document.documentElement,
					i = document.createElement("div"),
					s = document.createElement("div");
				s.style.backgroundClip = "content-box";
				s.cloneNode(true).style.backgroundClip = "";
				support.clearCloneStyle = s.style.backgroundClip === "content-box";
				i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;" + "margin-top:1px";
				i.appendChild(s);
				if (window.getComputedStyle) {
					jQuery.extend(support, {
						pixelPosition: function() {
							o();
							return e
						},
						boxSizingReliable: function() {
							if (t == null) {
								o()
							}
							return t
						},
						reliableMarginRight: function() {
							var e, t = s.appendChild(document.createElement("div"));
							t.style.cssText = s.style.cssText = n;
							t.style.marginRight = t.style.width = "0";
							s.style.width = "1px";
							r.appendChild(i);
							e = !parseFloat(window.getComputedStyle(t, null).marginRight);
							r.removeChild(i);
							s.innerHTML = "";
							return e
						}
					})
				}
			})();
			jQuery.swap = function(e, t, n, r) {
				var i, s, o = {};
				for (s in t) {
					o[s] = e.style[s];
					e.style[s] = t[s]
				}
				i = n.apply(e, r || []);
				for (s in t) {
					e.style[s] = o[s]
				}
				return i
			};
			var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
				rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
				rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
				cssShow = {
					position: "absolute",
					visibility: "hidden",
					display: "block"
				},
				cssNormalTransform = {
					letterSpacing: 0,
					fontWeight: 400
				},
				cssPrefixes = ["Webkit", "O", "Moz", "ms"];
			jQuery.extend({
				cssHooks: {
					opacity: {
						get: function(e, t) {
							if (t) {
								var n = curCSS(e, "opacity");
								return n === "" ? "1" : n
							}
						}
					}
				},
				cssNumber: {
					columnCount: true,
					fillOpacity: true,
					fontWeight: true,
					lineHeight: true,
					opacity: true,
					order: true,
					orphans: true,
					widows: true,
					zIndex: true,
					zoom: true
				},
				cssProps: {
					"float": "cssFloat"
				},
				style: function(e, t, n, r) {
					if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
						return
					}
					var i, s, o, u = jQuery.camelCase(t),
						a = e.style;
					t = jQuery.cssProps[u] || (jQuery.cssProps[u] = vendorPropName(a, u));
					o = jQuery.cssHooks[t] || jQuery.cssHooks[u];
					if (n !== undefined) {
						s = typeof n;
						if (s === "string" && (i = rrelNum.exec(n))) {
							n = (i[1] + 1) * i[2] + parseFloat(jQuery.css(e, t));
							s = "number"
						}
						if (n == null || n !== n) {
							return
						}
						if (s === "number" && !jQuery.cssNumber[u]) {
							n += "px"
						}
						if (!support.clearCloneStyle && n === "" && t.indexOf("background") === 0) {
							a[t] = "inherit"
						}
						if (!o || !("set" in o) || (n = o.set(e, n, r)) !== undefined) {
							a[t] = "";
							a[t] = n
						}
					} else {
						if (o && "get" in o && (i = o.get(e, false, r)) !== undefined) {
							return i
						}
						return a[t]
					}
				},
				css: function(e, t, n, r) {
					var i, s, o, u = jQuery.camelCase(t);
					t = jQuery.cssProps[u] || (jQuery.cssProps[u] = vendorPropName(e.style, u));
					o = jQuery.cssHooks[t] || jQuery.cssHooks[u];
					if (o && "get" in o) {
						i = o.get(e, true, n)
					}
					if (i === undefined) {
						i = curCSS(e, t, r)
					}
					if (i === "normal" && t in cssNormalTransform) {
						i = cssNormalTransform[t]
					}
					if (n === "" || n) {
						s = parseFloat(i);
						return n === true || jQuery.isNumeric(s) ? s || 0 : i
					}
					return i
				}
			});
			jQuery.each(["height", "width"], function(e, t) {
				jQuery.cssHooks[t] = {
					get: function(e, n, r) {
						if (n) {
							return e.offsetWidth === 0 && rdisplayswap.test(jQuery.css(e, "display")) ? jQuery.swap(e, cssShow, function() {
								return getWidthOrHeight(e, t, r)
							}) : getWidthOrHeight(e, t, r)
						}
					},
					set: function(e, n, r) {
						var i = r && getStyles(e);
						return setPositiveNumber(e, n, r ? augmentWidthOrHeight(e, t, r, jQuery.css(e, "boxSizing", false, i) === "border-box", i) : 0)
					}
				}
			});
			jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(e, t) {
				if (t) {
					return jQuery.swap(e, {
						display: "inline-block"
					}, curCSS, [e, "marginRight"])
				}
			});
			jQuery.each({
				margin: "",
				padding: "",
				border: "Width"
			}, function(e, t) {
				jQuery.cssHooks[e + t] = {
					expand: function(n) {
						var r = 0,
							i = {},
							s = typeof n === "string" ? n.split(" ") : [n];
						for (; r < 4; r++) {
							i[e + cssExpand[r] + t] = s[r] || s[r - 2] || s[0]
						}
						return i
					}
				};
				if (!rmargin.test(e)) {
					jQuery.cssHooks[e + t].set = setPositiveNumber
				}
			});
			jQuery.fn.extend({
				css: function(e, t) {
					return access(this, function(e, t, n) {
						var r, i, s = {},
							o = 0;
						if (jQuery.isArray(t)) {
							r = getStyles(e);
							i = t.length;
							for (; o < i; o++) {
								s[t[o]] = jQuery.css(e, t[o], false, r)
							}
							return s
						}
						return n !== undefined ? jQuery.style(e, t, n) : jQuery.css(e, t)
					}, e, t, arguments.length > 1)
				},
				show: function() {
					return showHide(this, true)
				},
				hide: function() {
					return showHide(this)
				},
				toggle: function(e) {
					if (typeof e === "boolean") {
						return e ? this.show() : this.hide()
					}
					return this.each(function() {
						if (isHidden(this)) {
							jQuery(this).show()
						} else {
							jQuery(this).hide()
						}
					})
				}
			});
			jQuery.Tween = Tween;
			Tween.prototype = {
				constructor: Tween,
				init: function(e, t, n, r, i, s) {
					this.elem = e;
					this.prop = n;
					this.easing = i || "swing";
					this.options = t;
					this.start = this.now = this.cur();
					this.end = r;
					this.unit = s || (jQuery.cssNumber[n] ? "" : "px")
				},
				cur: function() {
					var e = Tween.propHooks[this.prop];
					return e && e.get ? e.get(this) : Tween.propHooks._default.get(this)
				},
				run: function(e) {
					var t, n = Tween.propHooks[this.prop];
					if (this.options.duration) {
						this.pos = t = jQuery.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
					} else {
						this.pos = t = e
					}
					this.now = (this.end - this.start) * t + this.start;
					if (this.options.step) {
						this.options.step.call(this.elem, this.now, this)
					}
					if (n && n.set) {
						n.set(this)
					} else {
						Tween.propHooks._default.set(this)
					}
					return this
				}
			};
			Tween.prototype.init.prototype = Tween.prototype;
			Tween.propHooks = {
				_default: {
					get: function(e) {
						var t;
						if (e.elem[e.prop] != null && (!e.elem.style || e.elem.style[e.prop] == null)) {
							return e.elem[e.prop]
						}
						t = jQuery.css(e.elem, e.prop, "");
						return !t || t === "auto" ? 0 : t
					},
					set: function(e) {
						if (jQuery.fx.step[e.prop]) {
							jQuery.fx.step[e.prop](e)
						} else if (e.elem.style && (e.elem.style[jQuery.cssProps[e.prop]] != null || jQuery.cssHooks[e.prop])) {
							jQuery.style(e.elem, e.prop, e.now + e.unit)
						} else {
							e.elem[e.prop] = e.now
						}
					}
				}
			};
			Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
				set: function(e) {
					if (e.elem.nodeType && e.elem.parentNode) {
						e.elem[e.prop] = e.now
					}
				}
			};
			jQuery.easing = {
				linear: function(e) {
					return e
				},
				swing: function(e) {
					return .5 - Math.cos(e * Math.PI) / 2
				}
			};
			jQuery.fx = Tween.prototype.init;
			jQuery.fx.step = {};
			var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
				rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
				rrun = /queueHooks$/,
				animationPrefilters = [defaultPrefilter],
				tweeners = {
					"*": [function(e, t) {
						var n = this.createTween(e, t),
							r = n.cur(),
							i = rfxnum.exec(t),
							s = i && i[3] || (jQuery.cssNumber[e] ? "" : "px"),
							o = (jQuery.cssNumber[e] || s !== "px" && +r) && rfxnum.exec(jQuery.css(n.elem, e)),
							u = 1,
							a = 20;
						if (o && o[3] !== s) {
							s = s || o[3];
							i = i || [];
							o = +r || 1;
							do {
								u = u || ".5";
								o = o / u;
								jQuery.style(n.elem, e, o + s)
							} while (u !== (u = n.cur() / r) && u !== 1 && --a)
						}
						if (i) {
							o = n.start = +o || +r || 0;
							n.unit = s;
							n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]
						}
						return n
					}]
				};
			jQuery.Animation = jQuery.extend(Animation, {
				tweener: function(e, t) {
					if (jQuery.isFunction(e)) {
						t = e;
						e = ["*"]
					} else {
						e = e.split(" ")
					}
					var n, r = 0,
						i = e.length;
					for (; r < i; r++) {
						n = e[r];
						tweeners[n] = tweeners[n] || [];
						tweeners[n].unshift(t)
					}
				},
				prefilter: function(e, t) {
					if (t) {
						animationPrefilters.unshift(e)
					} else {
						animationPrefilters.push(e)
					}
				}
			});
			jQuery.speed = function(e, t, n) {
				var r = e && typeof e === "object" ? jQuery.extend({}, e) : {
					complete: n || !n && t || jQuery.isFunction(e) && e,
					duration: e,
					easing: n && t || t && !jQuery.isFunction(t) && t
				};
				r.duration = jQuery.fx.off ? 0 : typeof r.duration === "number" ? r.duration : r.duration in jQuery.fx.speeds ? jQuery.fx.speeds[r.duration] : jQuery.fx.speeds._default;
				if (r.queue == null || r.queue === true) {
					r.queue = "fx"
				}
				r.old = r.complete;
				r.complete = function() {
					if (jQuery.isFunction(r.old)) {
						r.old.call(this)
					}
					if (r.queue) {
						jQuery.dequeue(this, r.queue)
					}
				};
				return r
			};
			jQuery.fn.extend({
				fadeTo: function(e, t, n, r) {
					return this.filter(isHidden).css("opacity", 0).show().end().animate({
						opacity: t
					}, e, n, r)
				},
				animate: function(e, t, n, r) {
					var i = jQuery.isEmptyObject(e),
						s = jQuery.speed(t, n, r),
						o = function() {
							var t = Animation(this, jQuery.extend({}, e), s);
							if (i || data_priv.get(this, "finish")) {
								t.stop(true)
							}
						};
					o.finish = o;
					return i || s.queue === false ? this.each(o) : this.queue(s.queue, o)
				},
				stop: function(e, t, n) {
					var r = function(e) {
						var t = e.stop;
						delete e.stop;
						t(n)
					};
					if (typeof e !== "string") {
						n = t;
						t = e;
						e = undefined
					}
					if (t && e !== false) {
						this.queue(e || "fx", [])
					}
					return this.each(function() {
						var t = true,
							i = e != null && e + "queueHooks",
							s = jQuery.timers,
							o = data_priv.get(this);
						if (i) {
							if (o[i] && o[i].stop) {
								r(o[i])
							}
						} else {
							for (i in o) {
								if (o[i] && o[i].stop && rrun.test(i)) {
									r(o[i])
								}
							}
						}
						for (i = s.length; i--;) {
							if (s[i].elem === this && (e == null || s[i].queue === e)) {
								s[i].anim.stop(n);
								t = false;
								s.splice(i, 1)
							}
						}
						if (t || !n) {
							jQuery.dequeue(this, e)
						}
					})
				},
				finish: function(e) {
					if (e !== false) {
						e = e || "fx"
					}
					return this.each(function() {
						var t, n = data_priv.get(this),
							r = n[e + "queue"],
							i = n[e + "queueHooks"],
							s = jQuery.timers,
							o = r ? r.length : 0;
						n.finish = true;
						jQuery.queue(this, e, []);
						if (i && i.stop) {
							i.stop.call(this, true)
						}
						for (t = s.length; t--;) {
							if (s[t].elem === this && s[t].queue === e) {
								s[t].anim.stop(true);
								s.splice(t, 1)
							}
						}
						for (t = 0; t < o; t++) {
							if (r[t] && r[t].finish) {
								r[t].finish.call(this)
							}
						}
						delete n.finish
					})
				}
			});
			jQuery.each(["toggle", "show", "hide"], function(e, t) {
				var n = jQuery.fn[t];
				jQuery.fn[t] = function(e, r, i) {
					return e == null || typeof e === "boolean" ? n.apply(this, arguments) : this.animate(genFx(t, true), e, r, i)
				}
			});
			jQuery.each({
				slideDown: genFx("show"),
				slideUp: genFx("hide"),
				slideToggle: genFx("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, function(e, t) {
				jQuery.fn[e] = function(e, n, r) {
					return this.animate(t, e, n, r)
				}
			});
			jQuery.timers = [];
			jQuery.fx.tick = function() {
				var e, t = 0,
					n = jQuery.timers;
				fxNow = jQuery.now();
				for (; t < n.length; t++) {
					e = n[t];
					if (!e() && n[t] === e) {
						n.splice(t--, 1)
					}
				}
				if (!n.length) {
					jQuery.fx.stop()
				}
				fxNow = undefined
			};
			jQuery.fx.timer = function(e) {
				jQuery.timers.push(e);
				if (e()) {
					jQuery.fx.start()
				} else {
					jQuery.timers.pop()
				}
			};
			jQuery.fx.interval = 13;
			jQuery.fx.start = function() {
				if (!timerId) {
					timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval)
				}
			};
			jQuery.fx.stop = function() {
				clearInterval(timerId);
				timerId = null
			};
			jQuery.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			};
			jQuery.fn.delay = function(e, t) {
				e = jQuery.fx ? jQuery.fx.speeds[e] || e : e;
				t = t || "fx";
				return this.queue(t, function(t, n) {
					var r = setTimeout(t, e);
					n.stop = function() {
						clearTimeout(r)
					}
				})
			};
			(function() {
				var e = document.createElement("input"),
					t = document.createElement("select"),
					n = t.appendChild(document.createElement("option"));
				e.type = "checkbox";
				support.checkOn = e.value !== "";
				support.optSelected = n.selected;
				t.disabled = true;
				support.optDisabled = !n.disabled;
				e = document.createElement("input");
				e.value = "t";
				e.type = "radio";
				support.radioValue = e.value === "t"
			})();
			var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle;
			jQuery.fn.extend({
				attr: function(e, t) {
					return access(this, jQuery.attr, e, t, arguments.length > 1)
				},
				removeAttr: function(e) {
					return this.each(function() {
						jQuery.removeAttr(this, e)
					})
				}
			});
			jQuery.extend({
				attr: function(e, t, n) {
					var r, i, s = e.nodeType;
					if (!e || s === 3 || s === 8 || s === 2) {
						return
					}
					if (typeof e.getAttribute === strundefined) {
						return jQuery.prop(e, t, n)
					}
					if (s !== 1 || !jQuery.isXMLDoc(e)) {
						t = t.toLowerCase();
						r = jQuery.attrHooks[t] || (jQuery.expr.match.bool.test(t) ? boolHook : nodeHook)
					}
					if (n !== undefined) {
						if (n === null) {
							jQuery.removeAttr(e, t)
						} else if (r && "set" in r && (i = r.set(e, n, t)) !== undefined) {
							return i
						} else {
							e.setAttribute(t, n + "");
							return n
						}
					} else if (r && "get" in r && (i = r.get(e, t)) !== null) {
						return i
					} else {
						i = jQuery.find.attr(e, t);
						return i == null ? undefined : i
					}
				},
				removeAttr: function(e, t) {
					var n, r, i = 0,
						s = t && t.match(rnotwhite);
					if (s && e.nodeType === 1) {
						while (n = s[i++]) {
							r = jQuery.propFix[n] || n;
							if (jQuery.expr.match.bool.test(n)) {
								e[r] = false
							}
							e.removeAttribute(n)
						}
					}
				},
				attrHooks: {
					type: {
						set: function(e, t) {
							if (!support.radioValue && t === "radio" && jQuery.nodeName(e, "input")) {
								var n = e.value;
								e.setAttribute("type", t);
								if (n) {
									e.value = n
								}
								return t
							}
						}
					}
				}
			});
			boolHook = {
				set: function(e, t, n) {
					if (t === false) {
						jQuery.removeAttr(e, n)
					} else {
						e.setAttribute(n, n)
					}
					return n
				}
			};
			jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(e, t) {
				var n = attrHandle[t] || jQuery.find.attr;
				attrHandle[t] = function(e, t, r) {
					var i, s;
					if (!r) {
						s = attrHandle[t];
						attrHandle[t] = i;
						i = n(e, t, r) != null ? t.toLowerCase() : null;
						attrHandle[t] = s
					}
					return i
				}
			});
			var rfocusable = /^(?:input|select|textarea|button)$/i;
			jQuery.fn.extend({
				prop: function(e, t) {
					return access(this, jQuery.prop, e, t, arguments.length > 1)
				},
				removeProp: function(e) {
					return this.each(function() {
						delete this[jQuery.propFix[e] || e]
					})
				}
			});
			jQuery.extend({
				propFix: {
					"for": "htmlFor",
					"class": "className"
				},
				prop: function(e, t, n) {
					var r, i, s, o = e.nodeType;
					if (!e || o === 3 || o === 8 || o === 2) {
						return
					}
					s = o !== 1 || !jQuery.isXMLDoc(e);
					if (s) {
						t = jQuery.propFix[t] || t;
						i = jQuery.propHooks[t]
					}
					if (n !== undefined) {
						return i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n
					} else {
						return i && "get" in i && (r = i.get(e, t)) !== null ? r : e[t]
					}
				},
				propHooks: {
					tabIndex: {
						get: function(e) {
							return e.hasAttribute("tabindex") || rfocusable.test(e.nodeName) || e.href ? e.tabIndex : -1
						}
					}
				}
			});
			if (!support.optSelected) {
				jQuery.propHooks.selected = {
					get: function(e) {
						var t = e.parentNode;
						if (t && t.parentNode) {
							t.parentNode.selectedIndex
						}
						return null
					}
				}
			}
			jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
				jQuery.propFix[this.toLowerCase()] = this
			});
			var rclass = /[\t\r\n\f]/g;
			jQuery.fn.extend({
				addClass: function(e) {
					var t, n, r, i, s, o, u = typeof e === "string" && e,
						a = 0,
						f = this.length;
					if (jQuery.isFunction(e)) {
						return this.each(function(t) {
							jQuery(this).addClass(e.call(this, t, this.className))
						})
					}
					if (u) {
						t = (e || "").match(rnotwhite) || [];
						for (; a < f; a++) {
							n = this[a];
							r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(rclass, " ") : " ");
							if (r) {
								s = 0;
								while (i = t[s++]) {
									if (r.indexOf(" " + i + " ") < 0) {
										r += i + " "
									}
								}
								o = jQuery.trim(r);
								if (n.className !== o) {
									n.className = o
								}
							}
						}
					}
					return this
				},
				removeClass: function(e) {
					var t, n, r, i, s, o, u = arguments.length === 0 || typeof e === "string" && e,
						a = 0,
						f = this.length;
					if (jQuery.isFunction(e)) {
						return this.each(function(t) {
							jQuery(this).removeClass(e.call(this, t, this.className))
						})
					}
					if (u) {
						t = (e || "").match(rnotwhite) || [];
						for (; a < f; a++) {
							n = this[a];
							r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(rclass, " ") : "");
							if (r) {
								s = 0;
								while (i = t[s++]) {
									while (r.indexOf(" " + i + " ") >= 0) {
										r = r.replace(" " + i + " ", " ")
									}
								}
								o = e ? jQuery.trim(r) : "";
								if (n.className !== o) {
									n.className = o
								}
							}
						}
					}
					return this
				},
				toggleClass: function(e, t) {
					var n = typeof e;
					if (typeof t === "boolean" && n === "string") {
						return t ? this.addClass(e) : this.removeClass(e)
					}
					if (jQuery.isFunction(e)) {
						return this.each(function(n) {
							jQuery(this).toggleClass(e.call(this, n, this.className, t), t)
						})
					}
					return this.each(function() {
						if (n === "string") {
							var t, r = 0,
								i = jQuery(this),
								s = e.match(rnotwhite) || [];
							while (t = s[r++]) {
								if (i.hasClass(t)) {
									i.removeClass(t)
								} else {
									i.addClass(t)
								}
							}
						} else if (n === strundefined || n === "boolean") {
							if (this.className) {
								data_priv.set(this, "__className__", this.className)
							}
							this.className = this.className || e === false ? "" : data_priv.get(this, "__className__") || ""
						}
					})
				},
				hasClass: function(e) {
					var t = " " + e + " ",
						n = 0,
						r = this.length;
					for (; n < r; n++) {
						if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(rclass, " ").indexOf(t) >= 0) {
							return true
						}
					}
					return false
				}
			});
			var rreturn = /\r/g;
			jQuery.fn.extend({
				val: function(e) {
					var t, n, r, i = this[0];
					if (!arguments.length) {
						if (i) {
							t = jQuery.valHooks[i.type] || jQuery.valHooks[i.nodeName.toLowerCase()];
							if (t && "get" in t && (n = t.get(i, "value")) !== undefined) {
								return n
							}
							n = i.value;
							return typeof n === "string" ? n.replace(rreturn, "") : n == null ? "" : n
						}
						return
					}
					r = jQuery.isFunction(e);
					return this.each(function(n) {
						var i;
						if (this.nodeType !== 1) {
							return
						}
						if (r) {
							i = e.call(this, n, jQuery(this).val())
						} else {
							i = e
						}
						if (i == null) {
							i = ""
						} else if (typeof i === "number") {
							i += ""
						} else if (jQuery.isArray(i)) {
							i = jQuery.map(i, function(e) {
								return e == null ? "" : e + ""
							})
						}
						t = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
						if (!t || !("set" in t) || t.set(this, i, "value") === undefined) {
							this.value = i
						}
					})
				}
			});
			jQuery.extend({
				valHooks: {
					select: {
						get: function(e) {
							var t, n, r = e.options,
								i = e.selectedIndex,
								s = e.type === "select-one" || i < 0,
								o = s ? null : [],
								u = s ? i + 1 : r.length,
								a = i < 0 ? u : s ? i : 0;
							for (; a < u; a++) {
								n = r[a];
								if ((n.selected || a === i) && (support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !jQuery.nodeName(n.parentNode, "optgroup"))) {
									t = jQuery(n).val();
									if (s) {
										return t
									}
									o.push(t)
								}
							}
							return o
						},
						set: function(e, t) {
							var n, r, i = e.options,
								s = jQuery.makeArray(t),
								o = i.length;
							while (o--) {
								r = i[o];
								if (r.selected = jQuery.inArray(jQuery(r).val(), s) >= 0) {
									n = true
								}
							}
							if (!n) {
								e.selectedIndex = -1
							}
							return s
						}
					}
				}
			});
			jQuery.each(["radio", "checkbox"], function() {
				jQuery.valHooks[this] = {
					set: function(e, t) {
						if (jQuery.isArray(t)) {
							return e.checked = jQuery.inArray(jQuery(e).val(), t) >= 0
						}
					}
				};
				if (!support.checkOn) {
					jQuery.valHooks[this].get = function(e) {
						return e.getAttribute("value") === null ? "on" : e.value
					}
				}
			});
			jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(e, t) {
				jQuery.fn[t] = function(e, n) {
					return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
				}
			});
			jQuery.fn.extend({
				hover: function(e, t) {
					return this.mouseenter(e).mouseleave(t || e)
				},
				bind: function(e, t, n) {
					return this.on(e, null, t, n)
				},
				unbind: function(e, t) {
					return this.off(e, null, t)
				},
				delegate: function(e, t, n, r) {
					return this.on(t, e, n, r)
				},
				undelegate: function(e, t, n) {
					return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
				}
			});
			var nonce = jQuery.now();
			var rquery = /\?/;
			jQuery.parseJSON = function(e) {
				return JSON.parse(e + "")
			};
			jQuery.parseXML = function(e) {
				var t, n;
				if (!e || typeof e !== "string") {
					return null
				}
				try {
					n = new DOMParser;
					t = n.parseFromString(e, "text/xml")
				} catch (r) {
					t = undefined
				}
				if (!t || t.getElementsByTagName("parsererror").length) {
					jQuery.error("Invalid XML: " + e)
				}
				return t
			};
			var ajaxLocParts, ajaxLocation, rhash = /#.*$/,
				rts = /([?&])_=[^&]*/,
				rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
				rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
				rnoContent = /^(?:GET|HEAD)$/,
				rprotocol = /^\/\//,
				rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
				prefilters = {},
				transports = {},
				allTypes = "*/".concat("*");
			try {
				ajaxLocation = location.href
			} catch (e) {
				ajaxLocation = document.createElement("a");
				ajaxLocation.href = "";
				ajaxLocation = ajaxLocation.href
			}
			ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
			jQuery.extend({
				active: 0,
				lastModified: {},
				etag: {},
				ajaxSettings: {
					url: ajaxLocation,
					type: "GET",
					isLocal: rlocalProtocol.test(ajaxLocParts[1]),
					global: true,
					processData: true,
					async: true,
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					accepts: {
						"*": allTypes,
						text: "text/plain",
						html: "text/html",
						xml: "application/xml, text/xml",
						json: "application/json, text/javascript"
					},
					contents: {
						xml: /xml/,
						html: /html/,
						json: /json/
					},
					responseFields: {
						xml: "responseXML",
						text: "responseText",
						json: "responseJSON"
					},
					converters: {
						"* text": String,
						"text html": true,
						"text json": jQuery.parseJSON,
						"text xml": jQuery.parseXML
					},
					flatOptions: {
						url: true,
						context: true
					}
				},
				ajaxSetup: function(e, t) {
					return t ? ajaxExtend(ajaxExtend(e, jQuery.ajaxSettings), t) : ajaxExtend(jQuery.ajaxSettings, e)
				},
				ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
				ajaxTransport: addToPrefiltersOrTransports(transports),
				ajax: function(e, t) {
					function S(e, t, s, u) {
						var f, m, g, b, E, S = t;
						if (y === 2) {
							return
						}
						y = 2;
						if (o) {
							clearTimeout(o)
						}
						n = undefined;
						i = u || "";
						w.readyState = e > 0 ? 4 : 0;
						f = e >= 200 && e < 300 || e === 304;
						if (s) {
							b = ajaxHandleResponses(l, w, s)
						}
						b = ajaxConvert(l, b, w, f);
						if (f) {
							if (l.ifModified) {
								E = w.getResponseHeader("Last-Modified");
								if (E) {
									jQuery.lastModified[r] = E
								}
								E = w.getResponseHeader("etag");
								if (E) {
									jQuery.etag[r] = E
								}
							}
							if (e === 204 || l.type === "HEAD") {
								S = "nocontent"
							} else if (e === 304) {
								S = "notmodified"
							} else {
								S = b.state;
								m = b.data;
								g = b.error;
								f = !g
							}
						} else {
							g = S;
							if (e || !S) {
								S = "error";
								if (e < 0) {
									e = 0
								}
							}
						}
						w.status = e;
						w.statusText = (t || S) + "";
						if (f) {
							p.resolveWith(c, [m, S, w])
						} else {
							p.rejectWith(c, [w, S, g])
						}
						w.statusCode(v);
						v = undefined;
						if (a) {
							h.trigger(f ? "ajaxSuccess" : "ajaxError", [w, l, f ? m : g])
						}
						d.fireWith(c, [w, S]);
						if (a) {
							h.trigger("ajaxComplete", [w, l]);
							if (!--jQuery.active) {
								jQuery.event.trigger("ajaxStop")
							}
						}
					}
					if (typeof e === "object") {
						t = e;
						e = undefined
					}
					t = t || {};
					var n, r, i, s, o, u, a, f, l = jQuery.ajaxSetup({}, t),
						c = l.context || l,
						h = l.context && (c.nodeType || c.jquery) ? jQuery(c) : jQuery.event,
						p = jQuery.Deferred(),
						d = jQuery.Callbacks("once memory"),
						v = l.statusCode || {},
						m = {},
						g = {},
						y = 0,
						b = "canceled",
						w = {
							readyState: 0,
							getResponseHeader: function(e) {
								var t;
								if (y === 2) {
									if (!s) {
										s = {};
										while (t = rheaders.exec(i)) {
											s[t[1].toLowerCase()] = t[2]
										}
									}
									t = s[e.toLowerCase()]
								}
								return t == null ? null : t
							},
							getAllResponseHeaders: function() {
								return y === 2 ? i : null
							},
							setRequestHeader: function(e, t) {
								var n = e.toLowerCase();
								if (!y) {
									e = g[n] = g[n] || e;
									m[e] = t
								}
								return this
							},
							overrideMimeType: function(e) {
								if (!y) {
									l.mimeType = e
								}
								return this
							},
							statusCode: function(e) {
								var t;
								if (e) {
									if (y < 2) {
										for (t in e) {
											v[t] = [v[t], e[t]]
										}
									} else {
										w.always(e[w.status])
									}
								}
								return this
							},
							abort: function(e) {
								var t = e || b;
								if (n) {
									n.abort(t)
								}
								S(0, t);
								return this
							}
						};
					p.promise(w).complete = d.add;
					w.success = w.done;
					w.error = w.fail;
					l.url = ((e || l.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
					l.type = t.method || t.type || l.method || l.type;
					l.dataTypes = jQuery.trim(l.dataType || "*").toLowerCase().match(rnotwhite) || [""];
					if (l.crossDomain == null) {
						u = rurl.exec(l.url.toLowerCase());
						l.crossDomain = !!(u && (u[1] !== ajaxLocParts[1] || u[2] !== ajaxLocParts[2] || (u[3] || (u[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))))
					}
					if (l.data && l.processData && typeof l.data !== "string") {
						l.data = jQuery.param(l.data, l.traditional)
					}
					inspectPrefiltersOrTransports(prefilters, l, t, w);
					if (y === 2) {
						return w
					}
					a = l.global;
					if (a && jQuery.active++ === 0) {
						jQuery.event.trigger("ajaxStart")
					}
					l.type = l.type.toUpperCase();
					l.hasContent = !rnoContent.test(l.type);
					r = l.url;
					if (!l.hasContent) {
						if (l.data) {
							r = l.url += (rquery.test(r) ? "&" : "?") + l.data;
							delete l.data
						}
						if (l.cache === false) {
							l.url = rts.test(r) ? r.replace(rts, "$1_=" + nonce++) : r + (rquery.test(r) ? "&" : "?") + "_=" + nonce++
						}
					}
					if (l.ifModified) {
						if (jQuery.lastModified[r]) {
							w.setRequestHeader("If-Modified-Since", jQuery.lastModified[r])
						}
						if (jQuery.etag[r]) {
							w.setRequestHeader("If-None-Match", jQuery.etag[r])
						}
					}
					if (l.data && l.hasContent && l.contentType !== false || t.contentType) {
						w.setRequestHeader("Content-Type", l.contentType)
					}
					w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : l.accepts["*"]);
					for (f in l.headers) {
						w.setRequestHeader(f, l.headers[f])
					}
					if (l.beforeSend && (l.beforeSend.call(c, w, l) === false || y === 2)) {
						return w.abort()
					}
					b = "abort";
					for (f in {
							success: 1,
							error: 1,
							complete: 1
						}) {
						w[f](l[f])
					}
					n = inspectPrefiltersOrTransports(transports, l, t, w);
					if (!n) {
						S(-1, "No Transport")
					} else {
						w.readyState = 1;
						if (a) {
							h.trigger("ajaxSend", [w, l])
						}
						if (l.async && l.timeout > 0) {
							o = setTimeout(function() {
								w.abort("timeout")
							}, l.timeout)
						}
						try {
							y = 1;
							n.send(m, S)
						} catch (E) {
							if (y < 2) {
								S(-1, E)
							} else {
								throw E
							}
						}
					}
					return w
				},
				getJSON: function(e, t, n) {
					return jQuery.get(e, t, n, "json")
				},
				getScript: function(e, t) {
					return jQuery.get(e, undefined, t, "script")
				}
			});
			jQuery.each(["get", "post"], function(e, t) {
				jQuery[t] = function(e, n, r, i) {
					if (jQuery.isFunction(n)) {
						i = i || r;
						r = n;
						n = undefined
					}
					return jQuery.ajax({
						url: e,
						type: t,
						dataType: i,
						data: n,
						success: r
					})
				}
			});
			jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
				jQuery.fn[t] = function(e) {
					return this.on(t, e)
				}
			});
			jQuery._evalUrl = function(e) {
				return jQuery.ajax({
					url: e,
					type: "GET",
					dataType: "script",
					async: false,
					global: false,
					"throws": true
				})
			};
			jQuery.fn.extend({
				wrapAll: function(e) {
					var t;
					if (jQuery.isFunction(e)) {
						return this.each(function(t) {
							jQuery(this).wrapAll(e.call(this, t))
						})
					}
					if (this[0]) {
						t = jQuery(e, this[0].ownerDocument).eq(0).clone(true);
						if (this[0].parentNode) {
							t.insertBefore(this[0])
						}
						t.map(function() {
							var e = this;
							while (e.firstElementChild) {
								e = e.firstElementChild
							}
							return e
						}).append(this)
					}
					return this
				},
				wrapInner: function(e) {
					if (jQuery.isFunction(e)) {
						return this.each(function(t) {
							jQuery(this).wrapInner(e.call(this, t))
						})
					}
					return this.each(function() {
						var t = jQuery(this),
							n = t.contents();
						if (n.length) {
							n.wrapAll(e)
						} else {
							t.append(e)
						}
					})
				},
				wrap: function(e) {
					var t = jQuery.isFunction(e);
					return this.each(function(n) {
						jQuery(this).wrapAll(t ? e.call(this, n) : e)
					})
				},
				unwrap: function() {
					return this.parent().each(function() {
						if (!jQuery.nodeName(this, "body")) {
							jQuery(this).replaceWith(this.childNodes)
						}
					}).end()
				}
			});
			jQuery.expr.filters.hidden = function(e) {
				return e.offsetWidth <= 0 && e.offsetHeight <= 0
			};
			jQuery.expr.filters.visible = function(e) {
				return !jQuery.expr.filters.hidden(e)
			};
			var r20 = /%20/g,
				rbracket = /\[\]$/,
				rCRLF = /\r?\n/g,
				rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
				rsubmittable = /^(?:input|select|textarea|keygen)/i;
			jQuery.param = function(e, t) {
				var n, r = [],
					i = function(e, t) {
						t = jQuery.isFunction(t) ? t() : t == null ? "" : t;
						r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
					};
				if (t === undefined) {
					t = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional
				}
				if (jQuery.isArray(e) || e.jquery && !jQuery.isPlainObject(e)) {
					jQuery.each(e, function() {
						i(this.name, this.value)
					})
				} else {
					for (n in e) {
						buildParams(n, e[n], t, i)
					}
				}
				return r.join("&").replace(r20, "+")
			};
			jQuery.fn.extend({
				serialize: function() {
					return jQuery.param(this.serializeArray())
				},
				serializeArray: function() {
					return this.map(function() {
						var e = jQuery.prop(this, "elements");
						return e ? jQuery.makeArray(e) : this
					}).filter(function() {
						var e = this.type;
						return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(e) && (this.checked || !rcheckableType.test(e))
					}).map(function(e, t) {
						var n = jQuery(this).val();
						return n == null ? null : jQuery.isArray(n) ? jQuery.map(n, function(e) {
							return {
								name: t.name,
								value: e.replace(rCRLF, "\r\n")
							}
						}) : {
							name: t.name,
							value: n.replace(rCRLF, "\r\n")
						}
					}).get()
				}
			});
			jQuery.ajaxSettings.xhr = function() {
				try {
					return new XMLHttpRequest
				} catch (e) {}
			};
			var xhrId = 0,
				xhrCallbacks = {},
				xhrSuccessStatus = {
					0: 200,
					1223: 204
				},
				xhrSupported = jQuery.ajaxSettings.xhr();
			if (window.ActiveXObject) {
				jQuery(window).on("unload", function() {
					for (var e in xhrCallbacks) {
						xhrCallbacks[e]()
					}
				})
			}
			support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
			support.ajax = xhrSupported = !!xhrSupported;
			jQuery.ajaxTransport(function(e) {
				var t;
				if (support.cors || xhrSupported && !e.crossDomain) {
					return {
						send: function(n, r) {
							var i, s = e.xhr(),
								o = ++xhrId;
							s.open(e.type, e.url, e.async, e.username, e.password);
							if (e.xhrFields) {
								for (i in e.xhrFields) {
									s[i] = e.xhrFields[i]
								}
							}
							if (e.mimeType && s.overrideMimeType) {
								s.overrideMimeType(e.mimeType)
							}
							if (!e.crossDomain && !n["X-Requested-With"]) {
								n["X-Requested-With"] = "XMLHttpRequest"
							}
							for (i in n) {
								s.setRequestHeader(i, n[i])
							}
							t = function(e) {
								return function() {
									if (t) {
										delete xhrCallbacks[o];
										t = s.onload = s.onerror = null;
										if (e === "abort") {
											s.abort()
										} else if (e === "error") {
											r(s.status, s.statusText)
										} else {
											r(xhrSuccessStatus[s.status] || s.status, s.statusText, typeof s.responseText === "string" ? {
												text: s.responseText
											} : undefined, s.getAllResponseHeaders())
										}
									}
								}
							};
							s.onload = t();
							s.onerror = t("error");
							t = xhrCallbacks[o] = t("abort");
							s.send(e.hasContent && e.data || null)
						},
						abort: function() {
							if (t) {
								t()
							}
						}
					}
				}
			});
			jQuery.ajaxSetup({
				accepts: {
					script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
				},
				contents: {
					script: /(?:java|ecma)script/
				},
				converters: {
					"text script": function(e) {
						jQuery.globalEval(e);
						return e
					}
				}
			});
			jQuery.ajaxPrefilter("script", function(e) {
				if (e.cache === undefined) {
					e.cache = false
				}
				if (e.crossDomain) {
					e.type = "GET"
				}
			});
			jQuery.ajaxTransport("script", function(e) {
				if (e.crossDomain) {
					var t, n;
					return {
						send: function(r, i) {
							t = jQuery("<script>").prop({
								async: true,
								charset: e.scriptCharset,
								src: e.url
							}).on("load error", n = function(e) {
								t.remove();
								n = null;
								if (e) {
									i(e.type === "error" ? 404 : 200, e.type)
								}
							});
							document.head.appendChild(t[0])
						},
						abort: function() {
							if (n) {
								n()
							}
						}
					}
				}
			});
			var oldCallbacks = [],
				rjsonp = /(=)\?(?=&|$)|\?\?/;
			jQuery.ajaxSetup({
				jsonp: "callback",
				jsonpCallback: function() {
					var e = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
					this[e] = true;
					return e
				}
			});
			jQuery.ajaxPrefilter("json jsonp", function(e, t, n) {
				var r, i, s, o = e.jsonp !== false && (rjsonp.test(e.url) ? "url" : typeof e.data === "string" && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(e.data) && "data");
				if (o || e.dataTypes[0] === "jsonp") {
					r = e.jsonpCallback = jQuery.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
					if (o) {
						e[o] = e[o].replace(rjsonp, "$1" + r)
					} else if (e.jsonp !== false) {
						e.url += (rquery.test(e.url) ? "&" : "?") + e.jsonp + "=" + r
					}
					e.converters["script json"] = function() {
						if (!s) {
							jQuery.error(r + " was not called")
						}
						return s[0]
					};
					e.dataTypes[0] = "json";
					i = window[r];
					window[r] = function() {
						s = arguments
					};
					n.always(function() {
						window[r] = i;
						if (e[r]) {
							e.jsonpCallback = t.jsonpCallback;
							oldCallbacks.push(r)
						}
						if (s && jQuery.isFunction(i)) {
							i(s[0])
						}
						s = i = undefined
					});
					return "script"
				}
			});
			jQuery.parseHTML = function(e, t, n) {
				if (!e || typeof e !== "string") {
					return null
				}
				if (typeof t === "boolean") {
					n = t;
					t = false
				}
				t = t || document;
				var r = rsingleTag.exec(e),
					i = !n && [];
				if (r) {
					return [t.createElement(r[1])]
				}
				r = jQuery.buildFragment([e], t, i);
				if (i && i.length) {
					jQuery(i).remove()
				}
				return jQuery.merge([], r.childNodes)
			};
			var _load = jQuery.fn.load;
			jQuery.fn.load = function(e, t, n) {
				if (typeof e !== "string" && _load) {
					return _load.apply(this, arguments)
				}
				var r, i, s, o = this,
					u = e.indexOf(" ");
				if (u >= 0) {
					r = e.slice(u);
					e = e.slice(0, u)
				}
				if (jQuery.isFunction(t)) {
					n = t;
					t = undefined
				} else if (t && typeof t === "object") {
					i = "POST"
				}
				if (o.length > 0) {
					jQuery.ajax({
						url: e,
						type: i,
						dataType: "html",
						data: t
					}).done(function(e) {
						s = arguments;
						o.html(r ? jQuery("<div>").append(jQuery.parseHTML(e)).find(r) : e)
					}).complete(n && function(e, t) {
						o.each(n, s || [e.responseText, t, e])
					})
				}
				return this
			};
			jQuery.expr.filters.animated = function(e) {
				return jQuery.grep(jQuery.timers, function(t) {
					return e === t.elem
				}).length
			};
			var docElem = window.document.documentElement;
			jQuery.offset = {
				setOffset: function(e, t, n) {
					var r, i, s, o, u, a, f, l = jQuery.css(e, "position"),
						c = jQuery(e),
						h = {};
					if (l === "static") {
						e.style.position = "relative"
					}
					u = c.offset();
					s = jQuery.css(e, "top");
					a = jQuery.css(e, "left");
					f = (l === "absolute" || l === "fixed") && (s + a).indexOf("auto") > -1;
					if (f) {
						r = c.position();
						o = r.top;
						i = r.left
					} else {
						o = parseFloat(s) || 0;
						i = parseFloat(a) || 0
					}
					if (jQuery.isFunction(t)) {
						t = t.call(e, n, u)
					}
					if (t.top != null) {
						h.top = t.top - u.top + o
					}
					if (t.left != null) {
						h.left = t.left - u.left + i
					}
					if ("using" in t) {
						t.using.call(e, h)
					} else {
						c.css(h)
					}
				}
			};
			jQuery.fn.extend({
				offset: function(e) {
					if (arguments.length) {
						return e === undefined ? this : this.each(function(t) {
							jQuery.offset.setOffset(this, e, t)
						})
					}
					var t, n, r = this[0],
						i = {
							top: 0,
							left: 0
						},
						s = r && r.ownerDocument;
					if (!s) {
						return
					}
					t = s.documentElement;
					if (!jQuery.contains(t, r)) {
						return i
					}
					if (typeof r.getBoundingClientRect !== strundefined) {
						i = r.getBoundingClientRect()
					}
					n = getWindow(s);
					return {
						top: i.top + n.pageYOffset - t.clientTop,
						left: i.left + n.pageXOffset - t.clientLeft
					}
				},
				position: function() {
					if (!this[0]) {
						return
					}
					var e, t, n = this[0],
						r = {
							top: 0,
							left: 0
						};
					if (jQuery.css(n, "position") === "fixed") {
						t = n.getBoundingClientRect()
					} else {
						e = this.offsetParent();
						t = this.offset();
						if (!jQuery.nodeName(e[0], "html")) {
							r = e.offset()
						}
						r.top += jQuery.css(e[0], "borderTopWidth", true);
						r.left += jQuery.css(e[0], "borderLeftWidth", true)
					}
					return {
						top: t.top - r.top - jQuery.css(n, "marginTop", true),
						left: t.left - r.left - jQuery.css(n, "marginLeft", true)
					}
				},
				offsetParent: function() {
					return this.map(function() {
						var e = this.offsetParent || docElem;
						while (e && !jQuery.nodeName(e, "html") && jQuery.css(e, "position") === "static") {
							e = e.offsetParent
						}
						return e || docElem
					})
				}
			});
			jQuery.each({
				scrollLeft: "pageXOffset",
				scrollTop: "pageYOffset"
			}, function(e, t) {
				var n = "pageYOffset" === t;
				jQuery.fn[e] = function(r) {
					return access(this, function(e, r, i) {
						var s = getWindow(e);
						if (i === undefined) {
							return s ? s[t] : e[r]
						}
						if (s) {
							s.scrollTo(!n ? i : window.pageXOffset, n ? i : window.pageYOffset)
						} else {
							e[r] = i
						}
					}, e, r, arguments.length, null)
				}
			});
			jQuery.each(["top", "left"], function(e, t) {
				jQuery.cssHooks[t] = addGetHookIf(support.pixelPosition, function(e, n) {
					if (n) {
						n = curCSS(e, t);
						return rnumnonpx.test(n) ? jQuery(e).position()[t] + "px" : n
					}
				})
			});
			jQuery.each({
				Height: "height",
				Width: "width"
			}, function(e, t) {
				jQuery.each({
					padding: "inner" + e,
					content: t,
					"": "outer" + e
				}, function(n, r) {
					jQuery.fn[r] = function(r, i) {
						var s = arguments.length && (n || typeof r !== "boolean"),
							o = n || (r === true || i === true ? "margin" : "border");
						return access(this, function(t, n, r) {
							var i;
							if (jQuery.isWindow(t)) {
								return t.document.documentElement["client" + e]
							}
							if (t.nodeType === 9) {
								i = t.documentElement;
								return Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])
							}
							return r === undefined ? jQuery.css(t, n, o) : jQuery.style(t, n, r, o)
						}, t, s ? r : undefined, s, null)
					}
				})
			});
			jQuery.fn.size = function() {
				return this.length
			};
			jQuery.fn.andSelf = jQuery.fn.addBack;
			if (typeof define === "function" && define.amd) {
				define("jquery", [], function() {
					return jQuery
				})
			}
			var _jQuery = window.jQuery,
				_$ = window.$;
			jQuery.noConflict = function(e) {
				if (window.$ === jQuery) {
					window.$ = _$
				}
				if (e && window.jQuery === jQuery) {
					window.jQuery = _jQuery
				}
				return jQuery
			};
			if (typeof noGlobal === strundefined) {
				window.jQuery = window.$ = jQuery;
				module.exports = window.jQuery
			}
			return jQuery
		})
	}(module.exports, module, __context);
	__context.____MODULES["cc4a2776bacad943432cf14bf24b4324"] = module.exports
})(this);
(function(e) {
	var t = {
		id: "fed8495737153a5831079dc893b6b854",
		filename: "home.string",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(e, t, n) {
		if (typeof window.QTMPL === "undefined") window.QTMPL = {};
		window.QTMPL["home"] = '  <header>\n    <div>\n      <i class="yo-ico">&#xe61a;</i>\n      <b>签到</b>\n    </div>\n    <div>\n      <div>\n        <i class="yo-ico">&#xe60c;</i>\n        <input type=\'text\' placeholder=\'搜索商品\' />\n      </div>\n    </div>\n    <div>\n      <i class="yo-ico">&#xe602;</i>\n      <b>扫码</b>\n    </div>\n  </header>\n  <div class="content" >\n  	<div spa-widget="scroll" id="content-scroll" >\n  		<div>\n		  <section>\n		    <div class="swiper-container">\n		         <div class="swiper-wrapper">\n		            <div class="swiper-slide" ms-repeat="banners"><img ms-src="el.pic"/></div>\n		           <!--  <div class="swiper-slide"><img src="images/banner1.jpg"/></div>\n		            <div class="swiper-slide"><img src="images/banner1.jpg"/></div>\n		            <div class="swiper-slide"><img src="images/banner1.jpg"/></div> -->\n		         </div>\n		         <div class="swiper-pagination"></div>\n		      </div>\n		  </section>\n		  <nav>\n		    <ul>\n		      <li ms-repeat="navs" >\n		        <img ms-src=\'el.pic\' />\n		        <b ms-html="el.description"></b>\n		      </li>\n		    </ul>\n		  </nav>\n		  <section>\n		    <h2>精挑细选</h2>\n		    <div class="topic-one"> \n		      <div>\n		      	<a href="#" ms-repeat="topics1"><img ms-src="el.pic"></a>\n		      </div>\n		      <div>\n		      	<a href="#" ms-repeat="topics2"><img ms-src="el.pic"></a>\n		      </div>\n		      <div>\n		      	<a href="#" ms-repeat="topics3"><img ms-src="el.pic"></a>\n		      </div>\n		    </div>\n		    <div class="topic-two">\n		    	<a href="#" ms-repeat="topics4"><img ms-src="el.pic"></a>\n		    </div>\n		  </section>\n		  <section>\n		    <h2>热卖商品</h2>\n		    <ul ms-repeat="products">\n		  		<li ms-repeat-value="el" action-type="tap.detail">\n		  			<div>\n		  				<img ms-src="value.pic" />\n			  			<p class="goods-name" ms-html="value.name"></p>\n			  			<p class="goods-price" ms-html="value.price">&#xe628;</p>\n		  			</div>\n		  		</li>\n		    </ul>\n		  </section>\n		</div>\n	</div>\n  </div>';
		if (typeof t !== "undefined") t.exports = window.QTMPL["home"]
	}(t.exports, t, e);
	e.____MODULES["fed8495737153a5831079dc893b6b854"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "df7e101df8b04ca9c3defd4e11038a56",
		filename: "home.js",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(t, n, r) {
		function s() {
			var e = new Swiper(".swiper-container", function() {})
		}
		var i = e.____MODULES["fed8495737153a5831079dc893b6b854"];
		SPA.defineView("home", {
			html: i,
			plugins: ["delegated", {
				name: "avalon",
				options: function(e) {
					e.banners = [];
					e.navs = [];
					e.products = [];
					e.topics1 = [];
					e.topics2 = [];
					e.topics3 = [];
					e.topics4 = [];
					e.page = 0;
					e.isShow = true
				}
			}],
			init: {
				formatData: function(e) {
					var t = [];
					var n = 0;
					for (var r = 0; r < Math.ceil(e.length / 2); r++) {
						t[r] = [];
						for (var i = 0; i < 2; i++) {
							t[r][i] = e[n++]
						}
					}
					console.log(t);
					return t
				}
			},
			bindActions: {
				"tap.detail": function(e) {
					SPA.open("detail", {
						param: {
							picUrl: 123
						}
					})
				}
			},
			bindEvents: {
				beforeShow: function() {
					var e = this;
					var t = e.getVM();
					$.ajax({
						url: "/goldbank/mock/homejson.json",
						success: function(n) {
							t.banners = n.result.advs;
							t.navs = n.result.navigates;
							t.products = e.formatData(n.result.tagProducts);
							t.topics1.push(n.result.topics[0]);
							t.topics2.push(n.result.topics[1], n.result.topics[3]);
							t.topics3.push(n.result.topics[2], n.result.topics[4]);
							t.topics4.push(n.result.topics[5], n.result.topics[6]);
							s()
						}
					})
				},
				receiveData: function(e) {}
			}
		})
	}(t.exports, t, e);
	e.____MODULES["df7e101df8b04ca9c3defd4e11038a56"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "12d05a8107b04e36cecc379812dd10af",
		filename: "menu.string",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(e, t, n) {
		if (typeof window.QTMPL === "undefined") window.QTMPL = {};
		window.QTMPL["menu"] = '<div class="menu-title">\n	全部商品\n</div>\n<div class="menu-list">\n	<div id="menu-scroll" spa-widget="scroll" data-scroll-id="menuScroll">\n		<ul ms-visible="!isShow">\n			<li class="head">\n	            <img src="/goldbank/images/arrow.png" />\n	            <span>下拉刷新...</span>\n	        </li>\n			<li ms-repeat="datalist">\n				<img ms-src="el.icon"/>\n				<span ms-text="el.name"></span>\n			</li>\n			<li class="foot">\n	            <img src="/goldbank/images/arrow.png"/>\n	            <span>上拉加载更多...</span>\n	        </li>\n		</ul>\n	</div>\n	<div class="yo-loading" ms-visible="isShow">\n    	<div class="inner"><i class="yo-ico"></i><span>加载中...</span></div>\n	</div>\n</div>';
		if (typeof t !== "undefined") t.exports = window.QTMPL["menu"]
	}(t.exports, t, e);
	e.____MODULES["12d05a8107b04e36cecc379812dd10af"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "dcd4edc784c518b2b3944ca43166f61c",
		filename: "menu.js",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(t, n, r) {
		var i = e.____MODULES["12d05a8107b04e36cecc379812dd10af"];
		SPA.defineView("menu", {
			html: i,
			init: {
				getData: function(e, t) {
					var n = t;
					$.ajax({
						url: "/goldbank/mock/menujson.json",
						type: "get",
						data: {
							page: e.page
						},
						success: function(t) {
							setTimeout(function() {
								e.datalist = t.result;
								e.isShow = false;
								n()
							}, 3e3)
						}
					})
				}
			},
			plugins: [{
				name: "avalon",
				options: function(e) {
					e.datalist = [];
					e.page = 0;
					e.isShow = true
				}
			}],
			bindEvents: {
				beforeShow: function() {
					var e = this;
					var t = e.getVM();
					e.getData(t, function() {
						var t = e.widgets.menuScroll;
						var n = 44;
						t.scrollBy(0, -n);
						var r = $(".head img"),
							i = r.hasClass("up");
						var s = $(".foot img"),
							o = r.hasClass("down");
						t.on("scroll", function() {
							var e = this.y,
								t = this.maxScrollY - e;
							if (e >= 0) {
								!i && r.addClass("up");
								return ""
							}
							if (t >= 0) {
								!o && s.addClass("down");
								return ""
							}
						});
						t.on("scrollEnd", function() {
							if (this.y >= -n && this.y < 0) {
								t.scrollTo(0, -n);
								r.removeClass("up")
							} else if (this.y >= 0) {
								r.attr("src", "/goldbank/images/ajax-loader.gif");
								setTimeout(function() {
									t.scrollTo(0, -n);
									r.removeClass("up");
									r.attr("src", "/goldbank/images/ajax-loader.gif")
								}, 2e3)
							}
							var e = this.maxScrollY - this.y;
							if (e > -n && e < 0) {
								var i = this;
								t.scrollTo(0, i.maxScrollY + n);
								s.removeClass("down")
							} else if (e >= 0) {
								s.attr("src", "img/ajax-loader.gif");
								var i = this;
								setTimeout(function() {
									$(".foot").before('<div class="item">add 1</div>' + '<div class="item">add 2</div>' + '<div class="item">add 3</div>' + '<div class="item">add 4</div>' + '<div class="item">add 5</div>');
									t.refresh();
									t.scrollTo(0, i.y + n);
									s.removeClass("down");
									s.attr("src", "img/arrow.png")
								}, 2e3)
							}
						})
					})
				}
			}
		})
	}(t.exports, t, e);
	e.____MODULES["dcd4edc784c518b2b3944ca43166f61c"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "2587e2a1a94d928ebdd69b919dce2c4c",
		filename: "cart.string",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(e, t, n) {
		if (typeof window.QTMPL === "undefined") window.QTMPL = {};
		window.QTMPL["cart"] = '<div class="cart-title">\n	购物车\n	<span class="edit">编辑</span>\n</div>\n<div class="cart-list">\n	<div class="empty">\n		<i class="yo-ico">&#xe626;</i>\n		<p>您还没有登录哦</p>\n		<div>\n			<span>登录</span>\n			<span action-type="tap.home">去逛逛</span>\n		</div>\n	</div>\n	<!-- <div id="cart-scroll" spa-widget="scroll">\n		<ul>\n			<li>\n				<div>\n					<span class="check yo-ico">&#xe603;</span>\n					<img src="/goldbank/images/menu1.jpg"/>\n					<div class="goods-info">\n						<p>墨玉 和田玉 牛皮男表</p>\n						<div>\n							<span class="reduce yo-ico">&#xe61f;</span>\n							<input type="text" class="quantity" value="1" />\n							<span class="add yo-ico">&#xe61e;</span>\n							<span class="price yo-ico">&#xe628;7999.00</span>\n						</div>\n					</div>\n				</div>\n			</li>\n			<li>\n				<div>\n					<span class="check yo-ico">&#xe603;</span>\n					<img src="/goldbank/images/menu1.jpg"/>\n					<div class="goods-info">\n						<p>墨玉 和田玉 牛皮男表</p>\n						<div>\n							<span class="reduce yo-ico">&#xe61f;</span>\n							<input type="text" class="quantity" value="1" />\n							<span class="add yo-ico">&#xe61e;</span>\n							<span class="price yo-ico">&#xe628;7999.00</span>\n						</div>\n					</div>\n				</div>\n			</li>\n			<li>\n				<div>\n					<span class="check yo-ico">&#xe603;</span>\n					<img src="/goldbank/images/menu1.jpg"/>\n					<div class="goods-info">\n						<p>墨玉 和田玉 牛皮男表</p>\n						<div>\n							<span class="reduce yo-ico">&#xe61f;</span>\n							<input type="text" class="quantity" value="1" />\n							<span class="add yo-ico">&#xe61e;</span>\n							<span class="price yo-ico">&#xe628;7999.00</span>\n						</div>\n					</div>\n				</div>\n			</li>\n			<li>\n				<div>\n					<span class="check yo-ico">&#xe603;</span>\n					<img src="/goldbank/images/menu1.jpg"/>\n					<div class="goods-info">\n						<p>墨玉 和田玉 牛皮男表</p>\n						<div>\n							<span class="reduce yo-ico">&#xe61f;</span>\n							<input type="text" class="quantity" value="1" />\n							<span class="add yo-ico">&#xe61e;</span>\n							<span class="price yo-ico">&#xe628;7999.00</span>\n						</div>\n					</div>\n				</div>\n			</li>\n			<li>\n				<div>\n					<span class="check yo-ico">&#xe603;</span>\n					<img src="/goldbank/images/menu1.jpg"/>\n					<div class="goods-info">\n						<p>墨玉 和田玉 牛皮男表</p>\n						<div>\n							<span class="reduce yo-ico">&#xe61f;</span>\n							<input type="text" class="quantity" value="1" />\n							<span class="add yo-ico">&#xe61e;</span>\n							<span class="price yo-ico">&#xe628;7999.00</span>\n						</div>\n					</div>\n				</div>\n			</li>\n			<li>\n				<div>\n					<span class="check yo-ico">&#xe603;</span>\n					<img src="/goldbank/images/menu1.jpg"/>\n					<div class="goods-info">\n						<p>墨玉 和田玉 牛皮男表</p>\n						<div>\n							<span class="reduce yo-ico">&#xe61f;</span>\n							<input type="text" class="quantity" value="1" />\n							<span class="add yo-ico">&#xe61e;</span>\n							<span class="price yo-ico">&#xe628;7999.00</span>\n						</div>\n					</div>\n				</div>\n			</li>\n			<li>\n				<div>\n					<span class="check yo-ico">&#xe603;</span>\n					<img src="/goldbank/images/menu1.jpg"/>\n					<div class="goods-info">\n						<p>墨玉 和田玉 牛皮男表</p>\n						<div>\n							<span class="reduce yo-ico">&#xe61f;</span>\n							<input type="text" class="quantity" value="1" />\n							<span class="add yo-ico">&#xe61e;</span>\n							<span class="price yo-ico">&#xe628;7999.00</span>\n						</div>\n					</div>\n				</div>\n			</li>\n			<li>\n				<div>\n					<span class="check yo-ico">&#xe603;</span>\n					<img src="/goldbank/images/menu1.jpg"/>\n					<div class="goods-info">\n						<p>墨玉 和田玉 牛皮男表</p>\n						<div>\n							<span class="reduce yo-ico">&#xe61f;</span>\n							<input type="text" class="quantity" value="1" />\n							<span class="add yo-ico">&#xe61e;</span>\n							<span class="price yo-ico">&#xe628;7999.00</span>\n						</div>\n					</div>\n				</div>\n			</li>\n			<li>\n				<div>\n					<span class="check yo-ico">&#xe603;</span>\n					<img src="/goldbank/images/menu1.jpg"/>\n					<div class="goods-info">\n						<p>墨玉 和田玉 牛皮男表</p>\n						<div>\n							<span class="reduce yo-ico">&#xe61f;</span>\n							<input type="text" class="quantity" value="1" />\n							<span class="add yo-ico">&#xe61e;</span>\n							<span class="price yo-ico">&#xe628;7999.00</span>\n						</div>\n					</div>\n				</div>\n			</li>\n		</ul>\n	</div> -->\n</div>\n<div class="cart-amount">\n	<div class="amount-info">\n		<span class="cka yo-ico" id="cka">&#xe603;</span>\n		<label for="cka">全选</label>	\n		<p>\n			您需要支付\n			<span>(不含运费)</span>\n		</p>\n		<span class="total-money yo-ico">&#xe628;7999.00</span>	\n	</div>\n	<div class="amount-operate">结算(<span class="goods-number">0</span>)</div>\n</div>\n';
		if (typeof t !== "undefined") t.exports = window.QTMPL["cart"]
	}(t.exports, t, e);
	e.____MODULES["2587e2a1a94d928ebdd69b919dce2c4c"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "a3221d610c448a0e80d4bcb09e57ee9c",
		filename: "cart.js",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(t, n, r) {
		var i = e.____MODULES["2587e2a1a94d928ebdd69b919dce2c4c"];
		SPA.defineView("cart", {
			html: i,
			plugins: ["delegated"],
			bindActions: {
				"tap.home": function() {
					SPA.getView("index", function(e) {
						e.modules.indexContent.launch("home");
						e.viewActive("home")
					})
				}
			}
		})
	}(t.exports, t, e);
	e.____MODULES["a3221d610c448a0e80d4bcb09e57ee9c"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "8145b2e83c633dc16e51ed295ded2f69",
		filename: "person.string",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(e, t, n) {
		if (typeof window.QTMPL === "undefined") window.QTMPL = {};
		window.QTMPL["person"] = '<div class="user-center" id="user-scroll" spa-widget="scroll">\n	<div>\n		<div class="person-info">\n			<div class="person-header">\n				<div>\n					<div action-type="tap.login">\n						登录/注册\n					</div>\n				</div>\n			</div>\n			<p class="person-email">1234134123@qq.com</p>\n			<div>\n				<span>普通会员</span>\n				<span>积分:<span>0</span></span>\n			</div>\n			<span class="message yo-ico">&#xe60e;</span>\n		</div>\n		<div class="user-order">\n			<div class="my-order yo-ico">\n				<i class="yo-ico">&#xe617;</i>我的订单\n			</div>\n			<ul>\n				<li action-type="pay">\n					<i class="yo-ico">&#xe60a;</i>\n					<b>待付款</b>\n				</li>\n				<li>\n					<i class="yo-ico">&#xe60d;</i>\n					<b>待发货</b>\n				</li>\n				<li>\n					<i class="yo-ico">&#xe600;</i>\n					<b>待收货</b>\n				</li>\n				<li>\n					<i class="yo-ico">&#xe611;</i>\n					<b>全部订单</b>\n				</li>\n			</ul>\n		</div>\n		<div class="services">\n			<ul>\n				<li>\n					<i class="yo-ico">&#xe606;</i>\n					<b>我的优惠券</b>\n					<span class="yo-ico">你有0个优惠券未使用 &#xe625;</span>\n				</li>\n				<li>\n					<i class="yo-ico">&#xe612;</i>\n					<b>我的代金红包</b>\n					<span class="yo-ico">&#xe625;</span>\n				</li>\n				<li>\n					<i class="yo-ico">&#xe615;</i>\n					<b>退货申请记录</b>\n					<span class="yo-ico">&#xe625;</span>\n				</li>\n				<li>\n					<i class="yo-ico">&#xe619;</i>\n					<b>退款申请记录</b>\n					<span class="yo-ico">&#xe625;</span>\n				</li>\n				<li>\n					<i class="yo-ico">&#xe60b;</i>\n					<b>我的收藏</b>\n					<span class="yo-ico">&#xe625;</span>\n				</li>\n				<li>\n					<i class="yo-ico">&#xe61d;</i>\n					<b>我的咨询</b>\n					<span class="yo-ico">&#xe625;</span>\n				</li>\n				<li>\n					<i class="yo-ico">&#xe605;</i>\n					<b>预付款账号</b>\n					<span class="yo-ico">您还未开启预付款账号 &#xe625;</span>\n				</li>\n				<li>\n					<i class="yo-ico">&#xe609;</i>\n					<b>推广员</b>\n					<span class="yo-ico">&#xe625;</span>\n				</li>\n				<li>\n					<i class="yo-ico">&#xe614;</i>\n					<b>我的收货地址</b>\n					<span class="yo-ico">&#xe625;</span>\n				</li>\n				<li action-type="user-manager">\n					<i class="yo-ico">&#xe60f;</i>\n					<b>账号管理</b>\n					<span class="yo-ico">&#xe625;</span>\n				</li>\n				<li action-type="tap.about">\n					<i class="yo-ico">&#xe62d;</i>\n					<b>关于</b>\n					<span class="yo-ico">&#xe625;</span>\n				</li>\n			</ul>\n		</div>\n	</div>\n	<div class="lottery">\n		<img src="/goldbank/images/lottery.jpg">\n	</div>\n</div>\n\n\n';
		if (typeof t !== "undefined") t.exports = window.QTMPL["person"]
	}(t.exports, t, e);
	e.____MODULES["8145b2e83c633dc16e51ed295ded2f69"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "d1e828151a29d56b10972d9851cb1b5a",
		filename: "person.js",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(t, n, r) {
		var i = e.____MODULES["8145b2e83c633dc16e51ed295ded2f69"];
		var s = SPA.util;
		SPA.defineView("person", {
			html: i,
			plugins: ["delegated"],
			init: {
				sendTip: "您的申请已提交，请稍后",
				againTip: "亲，已经为您提交过了，请再等一会儿"
			},
			bindActions: {
				"tap.about": function() {
					SPA.open("about")
				},
				"tap.login": function() {
					SPA.open("login")
				},
				"user-manager": function() {
					SPA.show("userManager")
				},
				pay: function() {
					var e = '<div class="mask"></div><div class="pay-tip"></div>';
					$("body").append(e);
					if (s.storage("urged")) {
						$(".pay-tip").html(this.againTip)
					} else {
						s.storage("urged", true);
						$(".pay-tip").html(this.sendTip)
					}
					setTimeout(function() {
						$("body > .mask").add($(".pay-tip")).remove()
					}, 2e3)
				}
			}
		})
	}(t.exports, t, e);
	e.____MODULES["d1e828151a29d56b10972d9851cb1b5a"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "0922fcebf1a6f5f6adb827767f6aca03",
		filename: "about.string",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(e, t, n) {
		if (typeof window.QTMPL === "undefined") window.QTMPL = {};
		window.QTMPL["about"] = '<div class="m-about">\n	<div class="m-title">\n		<i class="back yo-ico" action-type="tap.back">&#xe630;</i>\n		<span>关于</span>\n		<i class="link-bar yo-ico" action-type="show.actionsheet">&#xe620;</i>\n	</div>\n	<div class="about-content">\n		<div class="about-wrap">\n			<div>\n				<img src="/goldbank/images/logo.jpg">\n				<p>紫金金行 V2.10</p>\n				<img src="/goldbank/images/scan.jpg">\n				<p>扫描二维码，下载客户端</p>\n			</div>\n			<div class="company">\n				<p>紫金金行(深圳)电子商务有限责任公司</p>\n				<p>Copyright ©2015 www.zijinjinhang.com\n					All Rights Reserves\n				</p>\n			</div>\n		</div>\n	</div>\n</div>';
		if (typeof t !== "undefined") t.exports = window.QTMPL["about"]
	}(t.exports, t, e);
	e.____MODULES["0922fcebf1a6f5f6adb827767f6aca03"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "6b92add8e8f324216a794903632f5d29",
		filename: "about.js",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(t, n, r) {
		var i = e.____MODULES["0922fcebf1a6f5f6adb827767f6aca03"];
		SPA.defineView("about", {
			html: i,
			plugins: ["delegated"],
			bindActions: {
				"tap.back": function() {
					this.hide()
				},
				"show.actionsheet": function() {
					SPA.open("actionsheet", {
						ani: {
							name: "actionSheet",
							distance: 98
						}
					})
				}
			}
		})
	}(t.exports, t, e);
	e.____MODULES["6b92add8e8f324216a794903632f5d29"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "66dec19a2ab0eab327992e7c2a915425",
		filename: "actionsheet.string",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(e, t, n) {
		if (typeof window.QTMPL === "undefined") window.QTMPL = {};
		window.QTMPL["actionsheet"] = '<div class="actionsheet" action-type="tap.hide">\n	<ul>\n		<li><i class="yo-ico">&#xe62a;</i><b>微信</b></li>\n		<li><i class="yo-ico">&#xe629;</i><b>朋友圈</b></li>\n		<li><i class="yo-ico">&#xe62b;</i><b>QQ空间</b></li>\n		<li><i class="yo-ico">&#xe62e;</i><b>微博</b></li>\n	</ul>\n</div>';
		if (typeof t !== "undefined") t.exports = window.QTMPL["actionsheet"]
	}(t.exports, t, e);
	e.____MODULES["66dec19a2ab0eab327992e7c2a915425"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "9d54ed22d1403715be39d7ba1d57029d",
		filename: "actionsheet.js",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(t, n, r) {
		var i = e.____MODULES["66dec19a2ab0eab327992e7c2a915425"];
		SPA.defineView("actionsheet", {
			html: i,
			plugins: ["delegated"],
			bindActions: {
				"tap.hide": function() {
					this.hide()
				}
			}
		})
	}(t.exports, t, e);
	e.____MODULES["9d54ed22d1403715be39d7ba1d57029d"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "8cb959cf174af224fa6394e9310eaec1",
		filename: "login.string",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(e, t, n) {
		if (typeof window.QTMPL === "undefined") window.QTMPL = {};
		window.QTMPL["login"] = '<div class="m-login">\n	<div class="m-title">\n		<i class="back yo-ico" action-type="tap.back">&#xe630;</i>\n		<span>登录</span>\n		<span action-type="tap.regist">注册</span>\n	</div>\n	<div class="fill-login">\n		<div>\n			<span>账号: </span><input type="text" placeholder="邮箱或手机" class="userName">\n		</div>\n		<div>\n			<span>密码: </span><input type="password" placeholder="请输入您的密码" class="passWord">\n			<span class="expose yo-ico">&#xe62f;</span>\n		</div>\n	</div>\n	<div>\n		<button action-type="tapLogin">登录</button>\n		<span>找回密码</span>\n	</div>\n	<p>使用第三方账号登录</p>\n	<div>\n		<ul>\n			<li></li>\n			<li><i class="yo-ico">&#xe621;</i></li>\n			<li></li>\n			<li><i class="yo-ico">&#xe62c;</i></li>\n			<li></li>\n			<li><i class="yo-ico">&#xe622;</i></li>\n			<li></li>\n		</ul>\n	</div>\n</div>';
		if (typeof t !== "undefined") t.exports = window.QTMPL["login"]
	}(t.exports, t, e);
	e.____MODULES["8cb959cf174af224fa6394e9310eaec1"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "d66b1bf341baf4a655a12629bf7702ca",
		filename: "login.js",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(t, n, r) {
		var i = e.____MODULES["8cb959cf174af224fa6394e9310eaec1"];
		SPA.defineView("login", {
			html: i,
			plugins: ["delegated"],
			bindActions: {
				"tap.back": function() {
					this.hide()
				},
				"tap.regist": function() {
					SPA.open("regist")
				},
				tapLogin: function() {
					console.log("reay to login")
				}
			}
		})
	}(t.exports, t, e);
	e.____MODULES["d66b1bf341baf4a655a12629bf7702ca"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "0aad4aef31cd02adcaacb34beebae7bd",
		filename: "regist.string",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(e, t, n) {
		if (typeof window.QTMPL === "undefined") window.QTMPL = {};
		window.QTMPL["regist"] = '<div class="m-regist">\n	<div class="m-title">\n		<i class="back yo-ico" action-type="tap.back">&#xe630;</i>\n		<span>注册</span>\n		<span action-type="tap.login">登录</span>\n	</div>\n	<div class="regist-way">\n		<ul>\n			<li>手机注册</li>\n			<li>邮箱注册</li>\n		</ul>\n	</div>\n	<div class="swiper-container">\n		<div class="swiper-wrapper">\n			<div class="swiper-slide">\n				<div class="m-register">\n					手机号码: <input type="text" placeholder="可用于登录或取回密码" class="mobile-number"><br>\n					验证码: <input type="text" placeholder="手机验证码" class="mobile-code">\n					<span class="get-code">获取验证码</span><br>\n					密码: <input type="password" placeholder="6-16位数字和字母的组合" class="passWord"><br>\n					确定密码: <input type="password" placeholder="再输入一次密码" class="r-passWord">\n				</div>\n				<button action-type="tapRegist">注册</button>\n			</div>\n			<div class="swiper-slide">\n				<div class="m-register">\n					电子邮箱: <input type="text" placeholder="可用于登录和找回密码" class="email"><br>\n					密码: <input type="password" placeholder="6-16位数字和字母的组合" class="passWord"><br>\n					确定密码: <input type="password" placeholder="再输入一次密码" class="r-passWord">\n				</div>\n				<button action-type="tapRegist">注册</button>\n			</div>\n		</div>\n	</div>\n</div>';
		if (typeof t !== "undefined") t.exports = window.QTMPL["regist"]
	}(t.exports, t, e);
	e.____MODULES["0aad4aef31cd02adcaacb34beebae7bd"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "3c711d8ac2bf6b58b7020ddbbd82bc08",
		filename: "regist.js",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(t, n, r) {
		var i = e.____MODULES["0aad4aef31cd02adcaacb34beebae7bd"];
		SPA.defineView("regist", {
			html: i,
			plugins: ["delegated"],
			bindActions: {
				"tap.back": function() {
					this.hide()
				},
				"tap.login": function() {
					SPA.open("login")
				},
				tapRegist: function() {
					console.log("reay to regist")
				}
			}
		})
	}(t.exports, t, e);
	e.____MODULES["3c711d8ac2bf6b58b7020ddbbd82bc08"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "5ba1000a36acceaf7466f9d071bb37c5",
		filename: "detail.string",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(e, t, n) {
		if (typeof window.QTMPL === "undefined") window.QTMPL = {};
		window.QTMPL["detail"] = '<div class="m-details">\n	<div class="m-title">\n		<i class="back yo-ico" action-type="tap.back">&#xe630;</i>\n		<span>详情</span>\n	</div>\n	<div class="goods-detail" ms-widget-scroll=\'detailScroll\'>\n		<img ms-src="" alt="">\n	</div>\n</div>';
		if (typeof t !== "undefined") t.exports = window.QTMPL["detail"]
	}(t.exports, t, e);
	e.____MODULES["5ba1000a36acceaf7466f9d071bb37c5"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "06281c68637eb0cd2376e53ab4cded67",
		filename: "detail.js",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(t, n, r) {
		var i = e.____MODULES["5ba1000a36acceaf7466f9d071bb37c5"];
		SPA.defineView("detail", {
			html: i,
			plugins: ["delegated"],
			bindActions: {
				"tap.back": function() {
					this.hide({
						param: {
							num: 12
						}
					})
				}
			},
			bindEvents: {
				beforeShow: function() {
					console.log(this)
				}
			}
		})
	}(t.exports, t, e);
	e.____MODULES["06281c68637eb0cd2376e53ab4cded67"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "29050440a3a276d43a0c0523160b7f33",
		filename: "dialog.string",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(e, t, n) {
		if (typeof window.QTMPL === "undefined") window.QTMPL = {};
		window.QTMPL["dialog"] = '<div class="yo-dialog yo-dialog-a">\n    <header class="hd">\n        <h2 class="title">紫金金行</h2>\n    </header>\n    <div class="bd">\n        <p>确定要退出该账号吗？</p>\n    </div>\n    <footer class="ft">\n        <button class="yo-btn yo-btn-dialog yo-btn-l" action-type="tap.hide">取消</button>\n        <button class="yo-btn yo-btn-dialog yo-btn-l" action-type="tap.hide">确定</button>\n    </footer>\n</div>';
		if (typeof t !== "undefined") t.exports = window.QTMPL["dialog"]
	}(t.exports, t, e);
	e.____MODULES["29050440a3a276d43a0c0523160b7f33"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "15f0af0812c36a8994969bfe76d8cebf",
		filename: "dialog.js",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(t, n, r) {
		var i = e.____MODULES["29050440a3a276d43a0c0523160b7f33"];
		SPA.defineView("dialog", {
			html: i,
			plugins: ["delegated"],
			bindActions: {
				"tap.hide": function() {
					this.hide()
				}
			},
			bindEvents: {
				beforeShow: function() {}
			}
		})
	}(t.exports, t, e);
	e.____MODULES["15f0af0812c36a8994969bfe76d8cebf"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "db0425ef7e306d388379a64e3b4cb4a3",
		filename: "userManager.string",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(e, t, n) {
		if (typeof window.QTMPL === "undefined") window.QTMPL = {};
		window.QTMPL["userManager"] = '<div class="user-manager">\n	<div class="m-title">\n		<i class="back yo-ico" action-type="tap.back">&#xe630;</i>\n		<span>账号管理</span>\n		<span class="edit yo-ico">&#xe60e;</span>\n	</div>\n	<div class="options-list">\n		<ul>\n			<li>\n				<p>绑定手机</p>\n				<span>为了您账户的安全，请及时绑定手机</span>\n				<span class="yo-ico">&#xe625;</span>\n			</li>\n			<li>\n				<p>绑定邮箱</p>\n				<span>若您验证的邮箱已使用，请及时更换绑定</span>\n				<span class="yo-ico">&#xe625;</span>\n			</li>\n			<li>\n				<p>修改密码</p>\n				<span>为了您账户的安全，请及时修改密码</span>\n				<span class="yo-ico">&#xe625;</span>\n			</li>\n		</ul>\n	</div>\n	<div>\n		<button action-type="sign-out">退出账号</button>\n	</div>\n</div>\n';
		if (typeof t !== "undefined") t.exports = window.QTMPL["userManager"]
	}(t.exports, t, e);
	e.____MODULES["db0425ef7e306d388379a64e3b4cb4a3"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "5f9716803c3d3e04d685b141da953e08",
		filename: "userManager.js",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(t, n, r) {
		var i = e.____MODULES["db0425ef7e306d388379a64e3b4cb4a3"];
		SPA.defineView("userManager", {
			html: i,
			plugins: ["delegated", {
				name: "avalon",
				options: function() {}
			}],
			bindActions: {
				"tap.back": function() {
					this.hide()
				},
				"sign-out": function() {
					SPA.open("dialog", {
						ani: {
							name: "dialog",
							width: 280
						}
					})
				}
			},
			bindEvents: {
				beforeShow: function() {}
			}
		})
	}(t.exports, t, e);
	e.____MODULES["5f9716803c3d3e04d685b141da953e08"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "882c81b551d1323f3366961f10652181",
		filename: "index.string",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(e, t, n) {
		if (typeof window.QTMPL === "undefined") window.QTMPL = {};
		window.QTMPL["index"] = '<div class="m-main">\n	<div class="m-main-body">\n	 \n	</div>\n  <footer>\n    <ul>\n      <li class="active" action-type="tap.switch" data-ta="home">\n        <i class="yo-ico">&#xe604;</i>\n        <b>首页</b>\n      </li>\n      <li action-type="tap.switch" data-ta="menu">\n        <i class="yo-ico">&#xe618;</i>\n        <b>分类</b>\n      </li>\n      <li action-type="tap.switch" data-ta="cart">\n        <i class="yo-ico">&#xe61c;</i>\n        <b>购物车</b>\n      </li>\n      <li action-type="tap.switch" data-ta="person">\n        <i class="yo-ico">&#xe607;</i>\n        <b>个人中心</b>\n      </li>\n    </ul>\n  </footer>\n</div>\n\n';
		if (typeof t !== "undefined") t.exports = window.QTMPL["index"]
	}(t.exports, t, e);
	e.____MODULES["882c81b551d1323f3366961f10652181"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "03e0d9fd9b4f3cc99b2c1ecc8186d201",
		filename: "index.js",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(t, n, r) {
		var i = e.____MODULES["882c81b551d1323f3366961f10652181"];
		SPA.defineView("index", {
			html: i,
			plugins: ["delegated"],
			modules: [{
				name: "indexContent",
				container: ".m-main-body",
				views: ["home", "menu", "cart", "person"],
				defaultTag: "home"
			}],
			init: {
				viewActive: function(e) {
					$('[data-ta="' + e + '"]').addClass("active").siblings().removeClass("active")
				}
			},
			bindActions: {
				"tap.switch": function(e, t) {
					this.modules.indexContent.launch(t.ta);
					this.viewActive(t.ta)
				}
			}
		})
	}(t.exports, t, e);
	e.____MODULES["03e0d9fd9b4f3cc99b2c1ecc8186d201"] = t.exports
})(this);
(function(e) {
	var t = {
		id: "49329d5972d2db73d18ab621a494baaa",
		filename: "app.js",
		exports: {}
	};
	if (!e.____MODULES) {
		e.____MODULES = {}
	}
	var n = function(t, n, r) {
		e.____MODULES["b339b78823a7d4e256e118d08f80004c"];
		e.____MODULES["cd2bffb7f2508310dfd41bb26a34f44d"];
		e.____MODULES["03c28899f856258c505f08db366bfd3e"];
		e.____MODULES["cc4a2776bacad943432cf14bf24b4324"];
		e.____MODULES["df7e101df8b04ca9c3defd4e11038a56"];
		e.____MODULES["dcd4edc784c518b2b3944ca43166f61c"];
		e.____MODULES["a3221d610c448a0e80d4bcb09e57ee9c"];
		e.____MODULES["d1e828151a29d56b10972d9851cb1b5a"];
		e.____MODULES["6b92add8e8f324216a794903632f5d29"];
		e.____MODULES["9d54ed22d1403715be39d7ba1d57029d"];
		e.____MODULES["d66b1bf341baf4a655a12629bf7702ca"];
		e.____MODULES["3c711d8ac2bf6b58b7020ddbbd82bc08"];
		e.____MODULES["06281c68637eb0cd2376e53ab4cded67"];
		e.____MODULES["15f0af0812c36a8994969bfe76d8cebf"];
		e.____MODULES["5f9716803c3d3e04d685b141da953e08"];
		e.____MODULES["03e0d9fd9b4f3cc99b2c1ecc8186d201"]
	}(t.exports, t, e);
	e.____MODULES["49329d5972d2db73d18ab621a494baaa"] = t.exports
})(this)