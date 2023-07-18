import { css as Zr, svg as Ye } from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ke = window, Ea = ke.ShadowRoot && (ke.ShadyCSS === void 0 || ke.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Na = Symbol(), Ga = /* @__PURE__ */ new WeakMap();
let et = class {
  constructor(e, a, t) {
    if (this._$cssResult$ = !0, t !== Na)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = a;
  }
  get styleSheet() {
    let e = this.o;
    const a = this.t;
    if (Ea && e === void 0) {
      const t = a !== void 0 && a.length === 1;
      t && (e = Ga.get(a)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), t && Ga.set(a, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ut = (r) => new et(typeof r == "string" ? r : r + "", void 0, Na), Aa = (r, ...e) => {
  const a = r.length === 1 ? r[0] : e.reduce((t, o, i) => t + ((n) => {
    if (n._$cssResult$ === !0)
      return n.cssText;
    if (typeof n == "number")
      return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[i + 1], r[0]);
  return new et(a, r, Na);
}, Gt = (r, e) => {
  Ea ? r.adoptedStyleSheets = e.map((a) => a instanceof CSSStyleSheet ? a : a.styleSheet) : e.forEach((a) => {
    const t = document.createElement("style"), o = ke.litNonce;
    o !== void 0 && t.setAttribute("nonce", o), t.textContent = a.cssText, r.appendChild(t);
  });
}, Ha = Ea ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let a = "";
  for (const t of e.cssRules)
    a += t.cssText;
  return Ut(a);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var je;
const _e = window, Va = _e.trustedTypes, Ht = Va ? Va.emptyScript : "", Ya = _e.reactiveElementPolyfillSupport, ua = {
  toAttribute(r, e) {
    switch (e) {
      case Boolean:
        r = r ? Ht : null;
        break;
      case Object:
      case Array:
        r = r == null ? r : JSON.stringify(r);
    }
    return r;
  },
  fromAttribute(r, e) {
    let a = r;
    switch (e) {
      case Boolean:
        a = r !== null;
        break;
      case Number:
        a = r === null ? null : Number(r);
        break;
      case Object:
      case Array:
        try {
          a = JSON.parse(r);
        } catch {
          a = null;
        }
    }
    return a;
  }
}, at = (r, e) => e !== r && (e == e || r == r), Ke = {
  attribute: !0,
  type: String,
  converter: ua,
  reflect: !1,
  hasChanged: at
};
let Y = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(e) {
    var a;
    this.finalize(), ((a = this.h) !== null && a !== void 0 ? a : this.h = []).push(e);
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this.elementProperties.forEach((a, t) => {
      const o = this._$Ep(t, a);
      o !== void 0 && (this._$Ev.set(o, t), e.push(o));
    }), e;
  }
  static createProperty(e, a = Ke) {
    if (a.state && (a.attribute = !1), this.finalize(), this.elementProperties.set(e, a), !a.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const t = typeof e == "symbol" ? Symbol() : "__" + e, o = this.getPropertyDescriptor(e, t, a);
      o !== void 0 && Object.defineProperty(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, a, t) {
    return {
      get() {
        return this[a];
      },
      set(o) {
        const i = this[e];
        this[a] = o, this.requestUpdate(e, i, t);
      },
      configurable: !0,
      enumerable: !0
    };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || Ke;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return !1;
    this.finalized = !0;
    const e = Object.getPrototypeOf(this);
    if (e.finalize(), e.h !== void 0 && (this.h = [...e.h]), this.elementProperties = new Map(e.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const a = this.properties, t = [...Object.getOwnPropertyNames(a), ...Object.getOwnPropertySymbols(a)];
      for (const o of t)
        this.createProperty(o, a[o]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(e) {
    const a = [];
    if (Array.isArray(e)) {
      const t = new Set(e.flat(1 / 0).reverse());
      for (const o of t)
        a.unshift(Ha(o));
    } else
      e !== void 0 && a.push(Ha(e));
    return a;
  }
  static _$Ep(e, a) {
    const t = a.attribute;
    return t === !1 ? void 0 : typeof t == "string" ? t : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  u() {
    var e;
    this._$E_ = new Promise((a) => this.enableUpdating = a), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (e = this.constructor.h) === null || e === void 0 || e.forEach((a) => a(this));
  }
  addController(e) {
    var a, t;
    ((a = this._$ES) !== null && a !== void 0 ? a : this._$ES = []).push(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) === null || t === void 0 || t.call(e));
  }
  removeController(e) {
    var a;
    (a = this._$ES) === null || a === void 0 || a.splice(this._$ES.indexOf(e) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((e, a) => {
      this.hasOwnProperty(a) && (this._$Ei.set(a, this[a]), delete this[a]);
    });
  }
  createRenderRoot() {
    var e;
    const a = (e = this.shadowRoot) !== null && e !== void 0 ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return Gt(a, this.constructor.elementStyles), a;
  }
  connectedCallback() {
    var e;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$ES) === null || e === void 0 || e.forEach((a) => {
      var t;
      return (t = a.hostConnected) === null || t === void 0 ? void 0 : t.call(a);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((a) => {
      var t;
      return (t = a.hostDisconnected) === null || t === void 0 ? void 0 : t.call(a);
    });
  }
  attributeChangedCallback(e, a, t) {
    this._$AK(e, t);
  }
  _$EO(e, a, t = Ke) {
    var o;
    const i = this.constructor._$Ep(e, t);
    if (i !== void 0 && t.reflect === !0) {
      const n = (((o = t.converter) === null || o === void 0 ? void 0 : o.toAttribute) !== void 0 ? t.converter : ua).toAttribute(a, t.type);
      this._$El = e, n == null ? this.removeAttribute(i) : this.setAttribute(i, n), this._$El = null;
    }
  }
  _$AK(e, a) {
    var t;
    const o = this.constructor, i = o._$Ev.get(e);
    if (i !== void 0 && this._$El !== i) {
      const n = o.getPropertyOptions(i), d = typeof n.converter == "function" ? {
        fromAttribute: n.converter
      } : ((t = n.converter) === null || t === void 0 ? void 0 : t.fromAttribute) !== void 0 ? n.converter : ua;
      this._$El = i, this[i] = d.fromAttribute(a, n.type), this._$El = null;
    }
  }
  requestUpdate(e, a, t) {
    let o = !0;
    e !== void 0 && (((t = t || this.constructor.getPropertyOptions(e)).hasChanged || at)(this[e], a) ? (this._$AL.has(e) || this._$AL.set(e, a), t.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, t))) : o = !1), !this.isUpdatePending && o && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (a) {
      Promise.reject(a);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((o, i) => this[i] = o), this._$Ei = void 0);
    let a = !1;
    const t = this._$AL;
    try {
      a = this.shouldUpdate(t), a ? (this.willUpdate(t), (e = this._$ES) === null || e === void 0 || e.forEach((o) => {
        var i;
        return (i = o.hostUpdate) === null || i === void 0 ? void 0 : i.call(o);
      }), this.update(t)) : this._$Ek();
    } catch (o) {
      throw a = !1, this._$Ek(), o;
    }
    a && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var a;
    (a = this._$ES) === null || a === void 0 || a.forEach((t) => {
      var o;
      return (o = t.hostUpdated) === null || o === void 0 ? void 0 : o.call(t);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$EC !== void 0 && (this._$EC.forEach((a, t) => this._$EO(t, this[t], a)), this._$EC = void 0), this._$Ek();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
Y.finalized = !0, Y.elementProperties = /* @__PURE__ */ new Map(), Y.elementStyles = [], Y.shadowRootOptions = {
  mode: "open"
}, Ya == null || Ya({
  ReactiveElement: Y
}), ((je = _e.reactiveElementVersions) !== null && je !== void 0 ? je : _e.reactiveElementVersions = []).push("1.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Qe;
const Ce = window, Q = Ce.trustedTypes, ja = Q ? Q.createPolicy("lit-html", {
  createHTML: (r) => r
}) : void 0, O = `lit$${(Math.random() + "").slice(9)}$`, rt = "?" + O, Vt = `<${rt}>`, J = document, le = (r = "") => J.createComment(r), se = (r) => r === null || typeof r != "object" && typeof r != "function", tt = Array.isArray, Yt = (r) => tt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", te = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ka = /-->/g, Qa = />/g, H = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ja = /'/g, qa = /"/g, ot = /^(?:script|style|textarea|title)$/i, jt = (r) => (e, ...a) => ({
  _$litType$: r,
  strings: e,
  values: a
}), L = jt(1), q = Symbol.for("lit-noChange"), $ = Symbol.for("lit-nothing"), Wa = /* @__PURE__ */ new WeakMap(), j = J.createTreeWalker(J, 129, null, !1), Kt = (r, e) => {
  const a = r.length - 1, t = [];
  let o, i = e === 2 ? "<svg>" : "", n = te;
  for (let l = 0; l < a; l++) {
    const s = r[l];
    let c, p, m = -1, u = 0;
    for (; u < s.length && (n.lastIndex = u, p = n.exec(s), p !== null); )
      u = n.lastIndex, n === te ? p[1] === "!--" ? n = Ka : p[1] !== void 0 ? n = Qa : p[2] !== void 0 ? (ot.test(p[2]) && (o = RegExp("</" + p[2], "g")), n = H) : p[3] !== void 0 && (n = H) : n === H ? p[0] === ">" ? (n = o ?? te, m = -1) : p[1] === void 0 ? m = -2 : (m = n.lastIndex - p[2].length, c = p[1], n = p[3] === void 0 ? H : p[3] === '"' ? qa : Ja) : n === qa || n === Ja ? n = H : n === Ka || n === Qa ? n = te : (n = H, o = void 0);
    const f = n === H && r[l + 1].startsWith("/>") ? " " : "";
    i += n === te ? s + Vt : m >= 0 ? (t.push(c), s.slice(0, m) + "$lit$" + s.slice(m) + O + f) : s + O + (m === -2 ? (t.push(void 0), l) : f);
  }
  const d = i + (r[a] || "<?>") + (e === 2 ? "</svg>" : "");
  if (!Array.isArray(r) || !r.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [ja !== void 0 ? ja.createHTML(d) : d, t];
};
class ce {
  constructor({
    strings: e,
    _$litType$: a
  }, t) {
    let o;
    this.parts = [];
    let i = 0, n = 0;
    const d = e.length - 1, l = this.parts, [s, c] = Kt(e, a);
    if (this.el = ce.createElement(s, t), j.currentNode = this.el.content, a === 2) {
      const p = this.el.content, m = p.firstChild;
      m.remove(), p.append(...m.childNodes);
    }
    for (; (o = j.nextNode()) !== null && l.length < d; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) {
          const p = [];
          for (const m of o.getAttributeNames())
            if (m.endsWith("$lit$") || m.startsWith(O)) {
              const u = c[n++];
              if (p.push(m), u !== void 0) {
                const f = o.getAttribute(u.toLowerCase() + "$lit$").split(O), h = /([.?@])?(.*)/.exec(u);
                l.push({
                  type: 1,
                  index: i,
                  name: h[2],
                  strings: f,
                  ctor: h[1] === "." ? Jt : h[1] === "?" ? Wt : h[1] === "@" ? Xt : Be
                });
              } else
                l.push({
                  type: 6,
                  index: i
                });
            }
          for (const m of p)
            o.removeAttribute(m);
        }
        if (ot.test(o.tagName)) {
          const p = o.textContent.split(O), m = p.length - 1;
          if (m > 0) {
            o.textContent = Q ? Q.emptyScript : "";
            for (let u = 0; u < m; u++)
              o.append(p[u], le()), j.nextNode(), l.push({
                type: 2,
                index: ++i
              });
            o.append(p[m], le());
          }
        }
      } else if (o.nodeType === 8)
        if (o.data === rt)
          l.push({
            type: 2,
            index: i
          });
        else {
          let p = -1;
          for (; (p = o.data.indexOf(O, p + 1)) !== -1; )
            l.push({
              type: 7,
              index: i
            }), p += O.length - 1;
        }
      i++;
    }
  }
  static createElement(e, a) {
    const t = J.createElement("template");
    return t.innerHTML = e, t;
  }
}
function W(r, e, a = r, t) {
  var o, i, n, d;
  if (e === q)
    return e;
  let l = t !== void 0 ? (o = a._$Co) === null || o === void 0 ? void 0 : o[t] : a._$Cl;
  const s = se(e) ? void 0 : e._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== s && ((i = l == null ? void 0 : l._$AO) === null || i === void 0 || i.call(l, !1), s === void 0 ? l = void 0 : (l = new s(r), l._$AT(r, a, t)), t !== void 0 ? ((n = (d = a)._$Co) !== null && n !== void 0 ? n : d._$Co = [])[t] = l : a._$Cl = l), l !== void 0 && (e = W(r, l._$AS(r, e.values), l, t)), e;
}
class Qt {
  constructor(e, a) {
    this.u = [], this._$AN = void 0, this._$AD = e, this._$AM = a;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  v(e) {
    var a;
    const {
      el: {
        content: t
      },
      parts: o
    } = this._$AD, i = ((a = e == null ? void 0 : e.creationScope) !== null && a !== void 0 ? a : J).importNode(t, !0);
    j.currentNode = i;
    let n = j.nextNode(), d = 0, l = 0, s = o[0];
    for (; s !== void 0; ) {
      if (d === s.index) {
        let c;
        s.type === 2 ? c = new he(n, n.nextSibling, this, e) : s.type === 1 ? c = new s.ctor(n, s.name, s.strings, this, e) : s.type === 6 && (c = new Zt(n, this, e)), this.u.push(c), s = o[++l];
      }
      d !== (s == null ? void 0 : s.index) && (n = j.nextNode(), d++);
    }
    return i;
  }
  p(e) {
    let a = 0;
    for (const t of this.u)
      t !== void 0 && (t.strings !== void 0 ? (t._$AI(e, t, a), a += t.strings.length - 2) : t._$AI(e[a])), a++;
  }
}
class he {
  constructor(e, a, t, o) {
    var i;
    this.type = 2, this._$AH = $, this._$AN = void 0, this._$AA = e, this._$AB = a, this._$AM = t, this.options = o, this._$Cm = (i = o == null ? void 0 : o.isConnected) === null || i === void 0 || i;
  }
  get _$AU() {
    var e, a;
    return (a = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !== null && a !== void 0 ? a : this._$Cm;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const a = this._$AM;
    return a !== void 0 && e.nodeType === 11 && (e = a.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, a = this) {
    e = W(this, e, a), se(e) ? e === $ || e == null || e === "" ? (this._$AH !== $ && this._$AR(), this._$AH = $) : e !== this._$AH && e !== q && this.g(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Yt(e) ? this.k(e) : this.g(e);
  }
  O(e, a = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, a);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  g(e) {
    this._$AH !== $ && se(this._$AH) ? this._$AA.nextSibling.data = e : this.T(J.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var a;
    const {
      values: t,
      _$litType$: o
    } = e, i = typeof o == "number" ? this._$AC(e) : (o.el === void 0 && (o.el = ce.createElement(o.h, this.options)), o);
    if (((a = this._$AH) === null || a === void 0 ? void 0 : a._$AD) === i)
      this._$AH.p(t);
    else {
      const n = new Qt(i, this), d = n.v(this.options);
      n.p(t), this.T(d), this._$AH = n;
    }
  }
  _$AC(e) {
    let a = Wa.get(e.strings);
    return a === void 0 && Wa.set(e.strings, a = new ce(e)), a;
  }
  k(e) {
    tt(this._$AH) || (this._$AH = [], this._$AR());
    const a = this._$AH;
    let t, o = 0;
    for (const i of e)
      o === a.length ? a.push(t = new he(this.O(le()), this.O(le()), this, this.options)) : t = a[o], t._$AI(i), o++;
    o < a.length && (this._$AR(t && t._$AB.nextSibling, o), a.length = o);
  }
  _$AR(e = this._$AA.nextSibling, a) {
    var t;
    for ((t = this._$AP) === null || t === void 0 || t.call(this, !1, !0, a); e && e !== this._$AB; ) {
      const o = e.nextSibling;
      e.remove(), e = o;
    }
  }
  setConnected(e) {
    var a;
    this._$AM === void 0 && (this._$Cm = e, (a = this._$AP) === null || a === void 0 || a.call(this, e));
  }
}
class Be {
  constructor(e, a, t, o, i) {
    this.type = 1, this._$AH = $, this._$AN = void 0, this.element = e, this.name = a, this._$AM = o, this.options = i, t.length > 2 || t[0] !== "" || t[1] !== "" ? (this._$AH = Array(t.length - 1).fill(new String()), this.strings = t) : this._$AH = $;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, a = this, t, o) {
    const i = this.strings;
    let n = !1;
    if (i === void 0)
      e = W(this, e, a, 0), n = !se(e) || e !== this._$AH && e !== q, n && (this._$AH = e);
    else {
      const d = e;
      let l, s;
      for (e = i[0], l = 0; l < i.length - 1; l++)
        s = W(this, d[t + l], a, l), s === q && (s = this._$AH[l]), n || (n = !se(s) || s !== this._$AH[l]), s === $ ? e = $ : e !== $ && (e += (s ?? "") + i[l + 1]), this._$AH[l] = s;
    }
    n && !o && this.j(e);
  }
  j(e) {
    e === $ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Jt extends Be {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === $ ? void 0 : e;
  }
}
const qt = Q ? Q.emptyScript : "";
class Wt extends Be {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    e && e !== $ ? this.element.setAttribute(this.name, qt) : this.element.removeAttribute(this.name);
  }
}
class Xt extends Be {
  constructor(e, a, t, o, i) {
    super(e, a, t, o, i), this.type = 5;
  }
  _$AI(e, a = this) {
    var t;
    if ((e = (t = W(this, e, a, 0)) !== null && t !== void 0 ? t : $) === q)
      return;
    const o = this._$AH, i = e === $ && o !== $ || e.capture !== o.capture || e.once !== o.once || e.passive !== o.passive, n = e !== $ && (o === $ || i);
    i && this.element.removeEventListener(this.name, this, o), n && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var a, t;
    typeof this._$AH == "function" ? this._$AH.call((t = (a = this.options) === null || a === void 0 ? void 0 : a.host) !== null && t !== void 0 ? t : this.element, e) : this._$AH.handleEvent(e);
  }
}
class Zt {
  constructor(e, a, t) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = a, this.options = t;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    W(this, e);
  }
}
const Xa = Ce.litHtmlPolyfillSupport;
Xa == null || Xa(ce, he), ((Qe = Ce.litHtmlVersions) !== null && Qe !== void 0 ? Qe : Ce.litHtmlVersions = []).push("2.6.1");
const eo = (r, e, a) => {
  var t, o;
  const i = (t = a == null ? void 0 : a.renderBefore) !== null && t !== void 0 ? t : e;
  let n = i._$litPart$;
  if (n === void 0) {
    const d = (o = a == null ? void 0 : a.renderBefore) !== null && o !== void 0 ? o : null;
    i._$litPart$ = n = new he(e.insertBefore(le(), d), d, void 0, a ?? {});
  }
  return n._$AI(r), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Je, qe;
class U extends Y {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e, a;
    const t = super.createRenderRoot();
    return (e = (a = this.renderOptions).renderBefore) !== null && e !== void 0 || (a.renderBefore = t.firstChild), t;
  }
  update(e) {
    const a = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = eo(a, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!1);
  }
  render() {
    return q;
  }
}
U.finalized = !0, U._$litElement$ = !0, (Je = globalThis.litElementHydrateSupport) === null || Je === void 0 || Je.call(globalThis, {
  LitElement: U
});
const Za = globalThis.litElementPolyfillSupport;
Za == null || Za({
  LitElement: U
});
((qe = globalThis.litElementVersions) !== null && qe !== void 0 ? qe : globalThis.litElementVersions = []).push("3.2.2");
const ao = Zr`
  input:read-only {
    background-color: #f5f7fa;
  }

  .o21pay-payment-container {
    min-width: 372px;
  }
  .o21pay-payment-full {
    display: inline-block;
    overflow: hidden;
    position: relative;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    transition: all 0.2s linear;
    border: 1px solid lightgray;
    padding: 10px;
    cursor: initial;
    border-radius: 15px;
    background-color: white;
  }
  .o21pay-edit {
    text-align: center;
  }
  .o21pay-input {
    font-size: 18px;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
  }
  .o21pay-button {
    background-image: url("https://assets.obvious21.com/o21pay-assets/o21pay-button.png");
    background-repeat: no-repeat;
    background-size: auto 25px;
    background-position: 22px 8px;
    background-color: #68d18d;
    border-color: #68d18d;
    color: white;
    font-weight: 400;
    vertical-align: middle;
    border: 1px solid transparent;
    background-position: top 10px;
    font-size: 1rem;
    line-height: 1.5;
    height: 40px;
    width: 140px;
    border-radius: 20px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .o21pay-button:hover {
    color: #fff;
    background-color: #218838;
    border-color: #1e7e34;
  }
  #amount {
    margin-top: 5px;
    width: 200px;
    text-align: center;
  }
  #order_ref {
    margin-top: 5px;
    width: 200px;
    margin-bottom: 3px;
    text-align: center;
  }
  #suggestion {
    display: none;
  }
  #page2 {
    display: none;
  }
  #o21pay-qr {
    float: left;
  }
  @media (max-width: 225px) {
    .o21pay-p-vc {
      display: none;
    }
  }
  @media (min-width: 226px) {
    .o21pay-p-vc {
      vertical-align: middle;
      display: table-cell;
      height: 190px;
      padding-left: 20px;
      padding-right: 20px;
      text-align: center;
    }
  }
  .o21pay-poweredby {
    margin: 0;
    font-size: 12px;
    color: lightslategrey;
    text-align: center;
  }
  .close {
    z-index: 9998;
    position: absolute;
    top: 10px;
    right: 15px;
    width: 20px;
    height: 20px;
    opacity: 0.3;
    cursor: pointer;
    visibility: hidden;
  }
  .close:hover {
    opacity: 1;
  }
  .close:before,
  .close:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 20px;
    width: 2px;
    background-color: black;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }
  .divider {
    position: absolute;
    left: 220px;
    width: 200px;
    bottom: 70px;
    right: 20px;
    border: 2px solid #9fd3b1;
    border-radius: 2px;
  }
  .o21pay-tag {
    background-color: rgb(119 136 153);
    display: inline-block;
    height: 32px;
    padding: 0 16px;
    line-height: 30px;
    font-size: 12px;
    color: white;
    border: 1px solid #909399;
    border-radius: 16px;
    box-sizing: border-box;
    white-space: nowrap;
    margin-left: 2px;
    margin-right: 2px;
    cursor: pointer;
  }
  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.1, 1.1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`, ro = "http://localhost:3400/api/v1/";
function to(r, e, a) {
  return e = oo(e), e in r ? Object.defineProperty(r, e, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = a, r;
}
function oo(r) {
  var e = io(r, "string");
  return typeof e == "symbol" ? e : String(e);
}
function io(r, e) {
  if (typeof r != "object" || r === null)
    return r;
  var a = r[Symbol.toPrimitive];
  if (a !== void 0) {
    var t = a.call(r, e || "default");
    if (typeof t != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
const er = "o21pay-payment", no = () => navigator.userLanguage || navigator.languages && navigator.languages.length && navigator.languages[0] || navigator.language || navigator.browserLanguage || navigator.systemLanguage || "en";
class Ia extends U {
  static get properties() {
    return {
      merchant_id: {
        type: String,
        attribute: "merchant_id"
      },
      survey_id: {
        type: String,
        attribute: "survey_id"
      },
      secretkey: {
        type: String,
        attribute: "secretkey"
      },
      funnel_id: {
        type: String,
        attribute: "funnel_id"
      },
      apiurl: {
        type: String,
        attribute: "apiurl"
      },
      form: {
        type: Boolean,
        attribute: "form"
      },
      amount: {
        type: String,
        attribute: "amount"
      },
      currency: {
        type: String,
        attribute: "currency"
      },
      decimals: {
        type: String,
        attribute: "decimals"
      },
      order_ref: {
        type: String,
        attribute: "order_ref"
      },
      hidden_order_ref: {
        type: Boolean,
        attribute: "hidden_order_ref"
      },
      suggestion: {
        type: String,
        attribute: "suggestion"
      },
      readonly: {
        type: Boolean,
        attribute: "readonly"
      },
      disabled: {
        type: Boolean,
        attribute: "disabled"
      },
      qr_size: {
        type: String,
        attribute: "qr_size"
      },
      data: {
        type: String,
        attribute: "data"
      }
    };
  }
  constructor() {
    super(), this.form = !1, this.url = "", this.amount = "", this.apiurl = ro, this.currency = "EUR", this.decimals = 2, this.suggestion = "", this.arraySuggestion = [], this.qr_size = "180", navigator && (this.locale = no());
    const e = this;
    setTimeout(function() {
      e.dispatchEvent(new CustomEvent("o21pay_init", {
        detail: {
          instance: e
        },
        bubbles: !0,
        composed: !0
      }));
    }, 500);
  }
  init(e, a) {
    this.url = "";
    let t = this.renderRoot.querySelector(".o21pay-payment-full");
    t.style.removeProperty("height"), this.renderRoot.querySelector(".close").style.visibility = "hidden", this.renderRoot.querySelector(".o21pay-edit").hidden = !1, t = this.renderRoot.querySelector("#suggestion"), !this.suggestion || !this.suggestion.length ? t.style.display = "none" : t.style.display = "block", t = this.renderRoot.querySelector("#page2"), t.style.display = "none", e && (this.amount = e), this.order_ref = a || "";
  }
  async _createPaymentLink(e, a, t, o, i, n) {
    const d = this.apiurl + `merchants/${e}/paymentlinks`, l = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        secretkey: a,
        amount: t,
        currency_code: o,
        order_ref: i,
        type_payment_request: 2,
        // Emepheral
        id_survey: n
      })
    }, c = await (await fetch(d, l)).json();
    return c.data ? c.data.url : (console.log(c), null);
  }
  async _createPaymentLinkFromFunnel(e, a, t, o, i) {
    const n = this.apiurl + `funnels/${e}/paymentlink`, d = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount: a,
        currency_code: t,
        order_ref: o,
        data: i
      })
    }, s = await (await fetch(n, d)).json();
    return s.data ? s.data.url : (console.log(s), null);
  }
  async _onO21Pay(e) {
    if (this.disabled)
      return;
    let a = this.renderRoot.querySelector("#amount");
    if (a) {
      let o = a.value;
      o = o.replace(",", "."), o = o.replace("€", ""), this.amount = o;
    }
    if (!this.amount || !this.amount.length) {
      alert("Missing Amount");
      return;
    }
    if (a = this.renderRoot.querySelector("#order_ref"), a && (this.order_ref = a.value), !this.order_ref || !this.order_ref.length) {
      alert("Missing order_ref");
      return;
    }
    let t;
    if (this.funnel_id)
      t = await this._createPaymentLinkFromFunnel(this.funnel_id, this.amount, this.currency, this.order_ref, this.data);
    else {
      if (!this.merchant_id || !this.merchant_id.length) {
        alert("Missing merchant_id");
        return;
      }
      t = await this._createPaymentLink(this.merchant_id, this.secretkey, this.amount, this.currency, this.order_ref, this.survey_id);
    }
    if (t && t.length) {
      this.url = t;
      const o = {
        detail: {
          url: this.url
        },
        bubbles: !0,
        composed: !0
      };
      this.dispatchEvent(new CustomEvent("o21pay_payment_request", o));
      let i = this.renderRoot.querySelector(".o21pay-payment-full");
      if (this.form) {
        this.renderRoot.querySelector(".o21pay-edit").hidden = !0, i.style.height = "200px", this.renderRoot.querySelector(".close").style.visibility = "visible";
        const n = this;
        i = n.renderRoot.querySelector("o21pay-qr"), i.url = n.url, i = this.renderRoot.querySelector("#suggestion"), i.style.display = "none", i = n.renderRoot.querySelector("#page2"), i.style.display = "block";
      } else
        i && (i.style.height = "52px");
    }
  }
  onInit(e) {
    this.init(this.amount, this.order_ref);
  }
  onFocus(e) {
    const a = e.target;
    return a.readOnly === !0 ? null : (a.type = "number", a.value = a.lastValue, a.value);
  }
  onBlur(e) {
    const a = e.target;
    a.value || (a.value = 0), a.lastValue = a.value, this.amount = a.value;
  }
  changeViewInput(e) {
    if (!e)
      return;
    let a = this.amount;
    a || (a = 0), e.type = "", e.lastValue = a, e.value = parseFloat(a).toLocaleString(this.locale, {
      style: "currency",
      maximumFractionDigits: this.decimals,
      minimumFractionDigits: 2,
      currency: this.currency,
      currencyDisplay: "symbol"
    });
  }
  _onTag(e) {
    if (this.disabled)
      return;
    let a = e.target.dataset.source;
    a && (a = parseFloat(a), this.amount = a);
  }
  updated(e) {
    if (e.has("amount")) {
      const a = this.renderRoot.getElementById("amount");
      this.changeViewInput(a);
    }
    if (e.has("readonly")) {
      let a = this.renderRoot.getElementById("amount");
      a && a.setAttribute("readonly", "readonly"), a = this.renderRoot.getElementById("order_ref"), a && a.setAttribute("readonly", "readonly");
    }
    if (e.has("disabled")) {
      let a = this.renderRoot.getElementById("amount");
      a && a.setAttribute("disabled", "disabled"), a = this.renderRoot.getElementById("order_ref"), a && a.setAttribute("disabled", "disabled");
    }
    if (e.has("hidden_order_ref")) {
      let a = this.renderRoot.getElementById("order_ref");
      a && a.setAttribute("hidden", "hidden");
    }
    if (e.has("suggestion")) {
      let a = this.renderRoot.getElementById("suggestion");
      if (a)
        if (!this.suggestion || !this.suggestion.length)
          this.arraySuggestion = [], a.style.display = "none";
        else {
          const t = [];
          this.suggestion.split(",").forEach(function(o) {
            o.length && (o = Number(o), o > 0 && !isNaN(o) && t.push(o));
          }), this.arraySuggestion = t, a.style.display = "block";
        }
      else
        this.arraySuggestion = [];
      this.requestUpdate();
    }
  }
  render() {
    return this.form === !0 ? L`
        <div class="o21pay-payment-container">
          <div class="o21pay-payment-full">
            <div class="close" @click=${this.onInit}></div>
            <div class="o21pay-edit">
              <input
                id="amount"
                class="o21pay-input"
                type="number"
                min="0.00"
                max="15000.00"
                step="0.01"
                .value="${this.amount}"
                placeholder="0.00"
                @focus=${this.onFocus}
                @blur=${this.onBlur}
              />
              <input
                id="order_ref"
                class="o21pay-input"
                type="text"
                .value="${this.order_ref}"
                placeholder="Your Order Reference"
                style="margin-left:10px;"
              />
              &nbsp;
              <button class="o21pay-button" @click="${this._onO21Pay}" />
            </div>

            <div
              id="suggestion"
              style="margin-top: 10px;animation: zoom-in-zoom-out 0.8s ease 1;text-align:center;"
            >
              ${this.arraySuggestion.map((e) => L`<span class="o21pay-tag" data-source=${e} @click="${this._onTag}">
                  ${parseFloat(e).toLocaleString(this.locale, {
      style: "currency",
      maximumFractionDigits: this.decimals,
      minimumFractionDigits: 2,
      currency: this.currency,
      currencyDisplay: "symbol"
    })}
                </span>`)}
            </div>

            <div id="page2">
              <o21pay-qr id="o21pay-qr" size="${this.qr_size}" theme="dark" shadow></o21pay-qr>
              <div class="o21pay-p-vc">
                <slot name="qr_text" />
              </div>
            </div>
          </div>
          <div class="o21pay-poweredby">
            <svg
              style="position: relative;top: 2px;"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 10.5C19.6569 10.5 21 11.8431 21 13.5V19.5C21 21.1569 19.6569 22.5 18 22.5H6C4.34315 22.5 3 21.1569 3 19.5V13.5C3 11.8431 4.34315 10.5 6 10.5V7.5C6 4.18629 8.68629 1.5 12 1.5C15.3137 1.5 18 4.18629 18 7.5V10.5ZM12 3.5C14.2091 3.5 16 5.29086 16 7.5V10.5H8V7.5C8 5.29086 9.79086 3.5 12 3.5ZM18 12.5H6C5.44772 12.5 5 12.9477 5 13.5V19.5C5 20.0523 5.44772 20.5 6 20.5H18C18.5523 20.5 19 20.0523 19 19.5V13.5C19 12.9477 18.5523 12.5 18 12.5Z"
                fill="currentColor"
              />
            </svg>
            <span>Payment secured and powered by O21Pay</span>
          </div>
        </div>
      ` : L` <button class="o21pay-button" @click="${this._onO21Pay}" /> `;
  }
}
to(Ia, "styles", [ao]);
const We = window.customElements;
We && !We.get(er) && We.define(er, Ia);
const lo = Zr`
  .wrapper {
    opacity: 0;
    z-index: 10;
    transition: opacity 0.25s ease-in;
  }
  .wrapper:not(.open) {
    visibility: hidden;
  }
  .wrapper.open {
    opacity: 1;
    visibility: visible;
  }
  .overlay {
    background: rgba(0, 0, 0, 0.4);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
  }
  .dialog {
    background: #e1e4f0;
    border-radius: 10px;
    padding: 0rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    z-index: 9998;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .drawer {
    position: absolute;
    box-sizing: border-box;
    background-color: #e1e4f0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    outline: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    z-index: 9998;
    box-shadow: 0 8px 10px -5px rgb(0 0 0 / 20%),
      0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%);
  }

  .drawer-header {
    align-items: center;
    color: #72767b;
    display: flex;
    margin-bottom: 0px;
    padding: 0px 20px 0;
  }
  .close {
    z-index: 9999;
    position: absolute;
    top: -25px;
    right: 10px;
    width: 20px;
    height: 20px;
    opacity: 0.3;
    cursor: pointer;
  }
  .close-drawer-left {
    top: 10px !important;
    left: 10px !important;
  }
  .close-drawer-right {
    top: 10px !important;
    right: 20px !important;
  }
  .close:hover {
    opacity: 1;
  }
  .close:before,
  .close:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 20px;
    width: 2px;
    background-color: black;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }

  .orbit-spinner-text {
    position: absolute;
    left: 50%;
    top: 43%;
    transform: translate(-50%, -43%);
    z-index: 2;
    text-align: center;
  }
  .orbit-spinner,
  .orbit-spinner * {
    box-sizing: border-box;
  }
  .orbit-spinner {
    height: 55px;
    width: 55px;
    border-radius: 50%;
    perspective: 800px;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 48px;
    height: 48px;
    z-index: 2;
  }
  .orbit-spinner .orbit {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .orbit-spinner .orbit:nth-child(1) {
    left: 0%;
    top: 0%;
    animation: orbit-spinner-orbit-one-animation 1200ms linear infinite;
    border-bottom: 3px solid #ff1d5e;
  }

  .orbit-spinner .orbit:nth-child(2) {
    right: 0%;
    top: 0%;
    animation: orbit-spinner-orbit-two-animation 1200ms linear infinite;
    border-right: 3px solid #ff1d5e;
  }
  .orbit-spinner .orbit:nth-child(3) {
    right: 0%;
    bottom: 0%;
    animation: orbit-spinner-orbit-three-animation 1200ms linear infinite;
    border-top: 3px solid #ff1d5e;
  }
  @keyframes orbit-spinner-orbit-one-animation {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }
  @keyframes orbit-spinner-orbit-two-animation {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }
  @keyframes orbit-spinner-orbit-three-animation {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  }

  .obv-frameContainerStyle {
    border-radius: 10px;
  }
  .obv-frameStyle {
    border: 0;
    border-radius: 10px;
  }
  iframe {
    width: 100%;
    height: 100%;
  }
`;
function so(r, e, a) {
  return e = co(e), e in r ? Object.defineProperty(r, e, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = a, r;
}
function co(r) {
  var e = mo(r, "string");
  return typeof e == "symbol" ? e : String(e);
}
function mo(r, e) {
  if (typeof r != "object" || r === null)
    return r;
  var a = r[Symbol.toPrimitive];
  if (a !== void 0) {
    var t = a.call(r, e || "default");
    if (typeof t != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
const ar = "o21pay-dialog";
class Sa extends U {
  static get properties() {
    return {
      width: {
        type: String,
        attribute: "width"
      },
      height: {
        type: String,
        attribute: "height"
      },
      mode: {
        type: String,
        attribute: "mode"
      },
      url: {
        type: String
      },
      open: {
        type: Boolean
      },
      hideSpinner: {
        type: Boolean
      },
      texts: {
        type: Array,
        attribute: "texts"
      },
      events: {
        hasChanged(e, a) {
          return !0;
        }
      }
    };
  }
  constructor() {
    super(), this.open = !1, this.oribitStyle = "borderColor: red; animationDuration: 1000ms;", this.width = "375px", this.height = "560px", this.modal = "dialog", this.texts = {
      TXT_CNX: "Connection in progress..."
    };
  }
  updated(e) {
    if (e.has("events")) {
      const a = e.get("events"), t = this.events;
      a && window.removeEventListener("message", a);
      const o = this;
      window.addEventListener("message", function(i) {
        if (i && i.data) {
          const n = i.data;
          if (n) {
            const d = n.message;
            if (d === "o21pay_ready") {
              const l = o.shadowRoot.getElementById("framePayment");
              l && (l.style.opacity = 1);
            }
            t && d && t(n);
          }
        }
      });
    }
    super.updated(e);
  }
  init(e, a, t, o = "dialog") {
    if (!e || !e.length)
      return !1;
    a !== void 0 && (this.width = a), t !== void 0 && (this.height = t), o !== void 0 && (this.mode = o), this.hideSpinner = !1, e += `&time=${(/* @__PURE__ */ new Date()).getTime()}`;
    const i = this.renderRoot.querySelector("#framePayment");
    return i ? (i.style.opacity = 0, this.mode.indexOf("drawer") !== -1 && e.indexOf("&close") === -1 && (e += "&close=1"), e.indexOf("&reset") === -1 && (e += "&reset"), i.src = e, !0) : !1;
  }
  reset() {
    const e = this.shadowRoot.getElementById("framePayment");
    e.src = "about:blank";
  }
  spinnerStyle() {
    return "display: " + (this.hideSpinner ? "none" : "block");
  }
  closeWindow() {
    this.open = !1, this.events && this.events({
      message: "o21pay_closed"
    }), this.reset();
  }
  render() {
    let e = "wrapper" + (this.open ? " open" : ""), a = "dialog", t = "", o = "close", i = `width:${this.width}; height:${this.height}`;
    return this.mode === "drawer-left" ? (a = "drawer", t = "drawer-header", o = "", i = `width:${this.width};left:0;`) : this.mode === "drawer-right" ? (a = "drawer", t = "drawer-header", o = "", i = `width:${this.width};right:0;`) : this.mode === "fullscreen" ? i = "width:100%;height:100%;border-radius: 0;overflow:hidden;" : o = "", L`
      <div class=${e}>
        <div class="overlay"></div>
        <div class=${a} style=${i}>
          <div class=${t}></div>
          <div class=${o} @click=${this.closeWindow}></div>
          <iframe id="framePayment" class="obv-frameStyle" allowtransparency="true"></iframe>
          <div class="orbit-spinner-text" style=${this.spinnerStyle()}>
            <span>${this.texts.TXT_CNX}</span>
          </div>
          <div class="orbit-spinner" style=${this.spinnerStyle()}>
            <div class="orbit one" style=${this.oribitStyle}></div>
            <div class="orbit two" style=${this.oribitStyle}></div>
            <div class="orbit three" style=${this.oribitStyle}></div>
          </div>
        </div>
      </div>
    `;
  }
  close() {
    this.open = !1;
  }
}
so(Sa, "styles", [lo]);
const Xe = window.customElements;
Xe && !Xe.get(ar) && Xe.define(ar, Sa);
var ge = {}, uo = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, it = {}, E = {};
let Pa;
const po = [
  0,
  // Not used
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
];
E.getSymbolSize = function(e) {
  if (!e)
    throw new Error('"version" cannot be null or undefined');
  if (e < 1 || e > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return e * 4 + 17;
};
E.getSymbolTotalCodewords = function(e) {
  return po[e];
};
E.getBCHDigit = function(r) {
  let e = 0;
  for (; r !== 0; )
    e++, r >>>= 1;
  return e;
};
E.setToSJISFunction = function(e) {
  if (typeof e != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  Pa = e;
};
E.isKanjiModeEnabled = function() {
  return typeof Pa < "u";
};
E.toSJIS = function(e) {
  return Pa(e);
};
var Fe = {};
(function(r) {
  r.L = {
    bit: 1
  }, r.M = {
    bit: 0
  }, r.Q = {
    bit: 3
  }, r.H = {
    bit: 2
  };
  function e(a) {
    if (typeof a != "string")
      throw new Error("Param is not a string");
    switch (a.toLowerCase()) {
      case "l":
      case "low":
        return r.L;
      case "m":
      case "medium":
        return r.M;
      case "q":
      case "quartile":
        return r.Q;
      case "h":
      case "high":
        return r.H;
      default:
        throw new Error("Unknown EC Level: " + a);
    }
  }
  r.isValid = function(t) {
    return t && typeof t.bit < "u" && t.bit >= 0 && t.bit < 4;
  }, r.from = function(t, o) {
    if (r.isValid(t))
      return t;
    try {
      return e(t);
    } catch {
      return o;
    }
  };
})(Fe);
function nt() {
  this.buffer = [], this.length = 0;
}
nt.prototype = {
  get: function(r) {
    const e = Math.floor(r / 8);
    return (this.buffer[e] >>> 7 - r % 8 & 1) === 1;
  },
  put: function(r, e) {
    for (let a = 0; a < e; a++)
      this.putBit((r >>> e - a - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(r) {
    const e = Math.floor(this.length / 8);
    this.buffer.length <= e && this.buffer.push(0), r && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
  }
};
var ho = nt;
function fe(r) {
  if (!r || r < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = r, this.data = new Uint8Array(r * r), this.reservedBit = new Uint8Array(r * r);
}
fe.prototype.set = function(r, e, a, t) {
  const o = r * this.size + e;
  this.data[o] = a, t && (this.reservedBit[o] = !0);
};
fe.prototype.get = function(r, e) {
  return this.data[r * this.size + e];
};
fe.prototype.xor = function(r, e, a) {
  this.data[r * this.size + e] ^= a;
};
fe.prototype.isReserved = function(r, e) {
  return this.reservedBit[r * this.size + e];
};
var go = fe, dt = {};
(function(r) {
  const e = E.getSymbolSize;
  r.getRowColCoords = function(t) {
    if (t === 1)
      return [];
    const o = Math.floor(t / 7) + 2, i = e(t), n = i === 145 ? 26 : Math.ceil((i - 13) / (2 * o - 2)) * 2, d = [i - 7];
    for (let l = 1; l < o - 1; l++)
      d[l] = d[l - 1] - n;
    return d.push(6), d.reverse();
  }, r.getPositions = function(t) {
    const o = [], i = r.getRowColCoords(t), n = i.length;
    for (let d = 0; d < n; d++)
      for (let l = 0; l < n; l++)
        d === 0 && l === 0 || // top-left
        d === 0 && l === n - 1 || // bottom-left
        d === n - 1 && l === 0 || o.push([i[d], i[l]]);
    return o;
  };
})(dt);
var lt = {};
const fo = E.getSymbolSize, rr = 7;
lt.getPositions = function(e) {
  const a = fo(e);
  return [
    // top-left
    [0, 0],
    // top-right
    [a - rr, 0],
    // bottom-left
    [0, a - rr]
  ];
};
var st = {};
(function(r) {
  r.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const e = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  r.isValid = function(o) {
    return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7;
  }, r.from = function(o) {
    return r.isValid(o) ? parseInt(o, 10) : void 0;
  }, r.getPenaltyN1 = function(o) {
    const i = o.size;
    let n = 0, d = 0, l = 0, s = null, c = null;
    for (let p = 0; p < i; p++) {
      d = l = 0, s = c = null;
      for (let m = 0; m < i; m++) {
        let u = o.get(p, m);
        u === s ? d++ : (d >= 5 && (n += e.N1 + (d - 5)), s = u, d = 1), u = o.get(m, p), u === c ? l++ : (l >= 5 && (n += e.N1 + (l - 5)), c = u, l = 1);
      }
      d >= 5 && (n += e.N1 + (d - 5)), l >= 5 && (n += e.N1 + (l - 5));
    }
    return n;
  }, r.getPenaltyN2 = function(o) {
    const i = o.size;
    let n = 0;
    for (let d = 0; d < i - 1; d++)
      for (let l = 0; l < i - 1; l++) {
        const s = o.get(d, l) + o.get(d, l + 1) + o.get(d + 1, l) + o.get(d + 1, l + 1);
        (s === 4 || s === 0) && n++;
      }
    return n * e.N2;
  }, r.getPenaltyN3 = function(o) {
    const i = o.size;
    let n = 0, d = 0, l = 0;
    for (let s = 0; s < i; s++) {
      d = l = 0;
      for (let c = 0; c < i; c++)
        d = d << 1 & 2047 | o.get(s, c), c >= 10 && (d === 1488 || d === 93) && n++, l = l << 1 & 2047 | o.get(c, s), c >= 10 && (l === 1488 || l === 93) && n++;
    }
    return n * e.N3;
  }, r.getPenaltyN4 = function(o) {
    let i = 0;
    const n = o.data.length;
    for (let l = 0; l < n; l++)
      i += o.data[l];
    return Math.abs(Math.ceil(i * 100 / n / 5) - 10) * e.N4;
  };
  function a(t, o, i) {
    switch (t) {
      case r.Patterns.PATTERN000:
        return (o + i) % 2 === 0;
      case r.Patterns.PATTERN001:
        return o % 2 === 0;
      case r.Patterns.PATTERN010:
        return i % 3 === 0;
      case r.Patterns.PATTERN011:
        return (o + i) % 3 === 0;
      case r.Patterns.PATTERN100:
        return (Math.floor(o / 2) + Math.floor(i / 3)) % 2 === 0;
      case r.Patterns.PATTERN101:
        return o * i % 2 + o * i % 3 === 0;
      case r.Patterns.PATTERN110:
        return (o * i % 2 + o * i % 3) % 2 === 0;
      case r.Patterns.PATTERN111:
        return (o * i % 3 + (o + i) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + t);
    }
  }
  r.applyMask = function(o, i) {
    const n = i.size;
    for (let d = 0; d < n; d++)
      for (let l = 0; l < n; l++)
        i.isReserved(l, d) || i.xor(l, d, a(o, l, d));
  }, r.getBestMask = function(o, i) {
    const n = Object.keys(r.Patterns).length;
    let d = 0, l = 1 / 0;
    for (let s = 0; s < n; s++) {
      i(s), r.applyMask(s, o);
      const c = r.getPenaltyN1(o) + r.getPenaltyN2(o) + r.getPenaltyN3(o) + r.getPenaltyN4(o);
      r.applyMask(s, o), c < l && (l = c, d = s);
    }
    return d;
  };
})(st);
var Re = {};
const D = Fe, ve = [
  // L  M  Q  H
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  4,
  1,
  2,
  4,
  4,
  2,
  4,
  4,
  4,
  2,
  4,
  6,
  5,
  2,
  4,
  6,
  6,
  2,
  5,
  8,
  8,
  4,
  5,
  8,
  8,
  4,
  5,
  8,
  11,
  4,
  8,
  10,
  11,
  4,
  9,
  12,
  16,
  4,
  9,
  16,
  16,
  6,
  10,
  12,
  18,
  6,
  10,
  17,
  16,
  6,
  11,
  16,
  19,
  6,
  13,
  18,
  21,
  7,
  14,
  21,
  25,
  8,
  16,
  20,
  25,
  8,
  17,
  23,
  25,
  9,
  17,
  23,
  34,
  9,
  18,
  25,
  30,
  10,
  20,
  27,
  32,
  12,
  21,
  29,
  35,
  12,
  23,
  34,
  37,
  12,
  25,
  34,
  40,
  13,
  26,
  35,
  42,
  14,
  28,
  38,
  45,
  15,
  29,
  40,
  48,
  16,
  31,
  43,
  51,
  17,
  33,
  45,
  54,
  18,
  35,
  48,
  57,
  19,
  37,
  51,
  60,
  19,
  38,
  53,
  63,
  20,
  40,
  56,
  66,
  21,
  43,
  59,
  70,
  22,
  45,
  62,
  74,
  24,
  47,
  65,
  77,
  25,
  49,
  68,
  81
], ye = [
  // L  M  Q  H
  7,
  10,
  13,
  17,
  10,
  16,
  22,
  28,
  15,
  26,
  36,
  44,
  20,
  36,
  52,
  64,
  26,
  48,
  72,
  88,
  36,
  64,
  96,
  112,
  40,
  72,
  108,
  130,
  48,
  88,
  132,
  156,
  60,
  110,
  160,
  192,
  72,
  130,
  192,
  224,
  80,
  150,
  224,
  264,
  96,
  176,
  260,
  308,
  104,
  198,
  288,
  352,
  120,
  216,
  320,
  384,
  132,
  240,
  360,
  432,
  144,
  280,
  408,
  480,
  168,
  308,
  448,
  532,
  180,
  338,
  504,
  588,
  196,
  364,
  546,
  650,
  224,
  416,
  600,
  700,
  224,
  442,
  644,
  750,
  252,
  476,
  690,
  816,
  270,
  504,
  750,
  900,
  300,
  560,
  810,
  960,
  312,
  588,
  870,
  1050,
  336,
  644,
  952,
  1110,
  360,
  700,
  1020,
  1200,
  390,
  728,
  1050,
  1260,
  420,
  784,
  1140,
  1350,
  450,
  812,
  1200,
  1440,
  480,
  868,
  1290,
  1530,
  510,
  924,
  1350,
  1620,
  540,
  980,
  1440,
  1710,
  570,
  1036,
  1530,
  1800,
  570,
  1064,
  1590,
  1890,
  600,
  1120,
  1680,
  1980,
  630,
  1204,
  1770,
  2100,
  660,
  1260,
  1860,
  2220,
  720,
  1316,
  1950,
  2310,
  750,
  1372,
  2040,
  2430
];
Re.getBlocksCount = function(e, a) {
  switch (a) {
    case D.L:
      return ve[(e - 1) * 4 + 0];
    case D.M:
      return ve[(e - 1) * 4 + 1];
    case D.Q:
      return ve[(e - 1) * 4 + 2];
    case D.H:
      return ve[(e - 1) * 4 + 3];
    default:
      return;
  }
};
Re.getTotalCodewordsCount = function(e, a) {
  switch (a) {
    case D.L:
      return ye[(e - 1) * 4 + 0];
    case D.M:
      return ye[(e - 1) * 4 + 1];
    case D.Q:
      return ye[(e - 1) * 4 + 2];
    case D.H:
      return ye[(e - 1) * 4 + 3];
    default:
      return;
  }
};
var ct = {}, Te = {};
const oe = new Uint8Array(512), Ee = new Uint8Array(256);
(function() {
  let e = 1;
  for (let a = 0; a < 255; a++)
    oe[a] = e, Ee[e] = a, e <<= 1, e & 256 && (e ^= 285);
  for (let a = 255; a < 512; a++)
    oe[a] = oe[a - 255];
})();
Te.log = function(e) {
  if (e < 1)
    throw new Error("log(" + e + ")");
  return Ee[e];
};
Te.exp = function(e) {
  return oe[e];
};
Te.mul = function(e, a) {
  return e === 0 || a === 0 ? 0 : oe[Ee[e] + Ee[a]];
};
(function(r) {
  const e = Te;
  r.mul = function(t, o) {
    const i = new Uint8Array(t.length + o.length - 1);
    for (let n = 0; n < t.length; n++)
      for (let d = 0; d < o.length; d++)
        i[n + d] ^= e.mul(t[n], o[d]);
    return i;
  }, r.mod = function(t, o) {
    let i = new Uint8Array(t);
    for (; i.length - o.length >= 0; ) {
      const n = i[0];
      for (let l = 0; l < o.length; l++)
        i[l] ^= e.mul(o[l], n);
      let d = 0;
      for (; d < i.length && i[d] === 0; )
        d++;
      i = i.slice(d);
    }
    return i;
  }, r.generateECPolynomial = function(t) {
    let o = new Uint8Array([1]);
    for (let i = 0; i < t; i++)
      o = r.mul(o, new Uint8Array([1, e.exp(i)]));
    return o;
  };
})(ct);
const mt = ct;
function Ba(r) {
  this.genPoly = void 0, this.degree = r, this.degree && this.initialize(this.degree);
}
Ba.prototype.initialize = function(e) {
  this.degree = e, this.genPoly = mt.generateECPolynomial(this.degree);
};
Ba.prototype.encode = function(e) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const a = new Uint8Array(e.length + this.degree);
  a.set(e);
  const t = mt.mod(a, this.genPoly), o = this.degree - t.length;
  if (o > 0) {
    const i = new Uint8Array(this.degree);
    return i.set(t, o), i;
  }
  return t;
};
var bo = Ba, ut = {}, G = {}, Fa = {};
Fa.isValid = function(e) {
  return !isNaN(e) && e >= 1 && e <= 40;
};
var P = {};
const pt = "[0-9]+", zo = "[A-Z $%*+\\-./:]+";
let me = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
me = me.replace(/u/g, "\\u");
const vo = "(?:(?![A-Z0-9 $%*+\\-./:]|" + me + `)(?:.|[\r
]))+`;
P.KANJI = new RegExp(me, "g");
P.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
P.BYTE = new RegExp(vo, "g");
P.NUMERIC = new RegExp(pt, "g");
P.ALPHANUMERIC = new RegExp(zo, "g");
const yo = new RegExp("^" + me + "$"), ko = new RegExp("^" + pt + "$"), xo = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
P.testKanji = function(e) {
  return yo.test(e);
};
P.testNumeric = function(e) {
  return ko.test(e);
};
P.testAlphanumeric = function(e) {
  return xo.test(e);
};
(function(r) {
  const e = Fa, a = P;
  r.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, r.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, r.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, r.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, r.MIXED = {
    bit: -1
  }, r.getCharCountIndicator = function(i, n) {
    if (!i.ccBits)
      throw new Error("Invalid mode: " + i);
    if (!e.isValid(n))
      throw new Error("Invalid version: " + n);
    return n >= 1 && n < 10 ? i.ccBits[0] : n < 27 ? i.ccBits[1] : i.ccBits[2];
  }, r.getBestModeForData = function(i) {
    return a.testNumeric(i) ? r.NUMERIC : a.testAlphanumeric(i) ? r.ALPHANUMERIC : a.testKanji(i) ? r.KANJI : r.BYTE;
  }, r.toString = function(i) {
    if (i && i.id)
      return i.id;
    throw new Error("Invalid mode");
  }, r.isValid = function(i) {
    return i && i.bit && i.ccBits;
  };
  function t(o) {
    if (typeof o != "string")
      throw new Error("Param is not a string");
    switch (o.toLowerCase()) {
      case "numeric":
        return r.NUMERIC;
      case "alphanumeric":
        return r.ALPHANUMERIC;
      case "kanji":
        return r.KANJI;
      case "byte":
        return r.BYTE;
      default:
        throw new Error("Unknown mode: " + o);
    }
  }
  r.from = function(i, n) {
    if (r.isValid(i))
      return i;
    try {
      return t(i);
    } catch {
      return n;
    }
  };
})(G);
(function(r) {
  const e = E, a = Re, t = Fe, o = G, i = Fa, n = 7973, d = e.getBCHDigit(n);
  function l(m, u, f) {
    for (let h = 1; h <= 40; h++)
      if (u <= r.getCapacity(h, f, m))
        return h;
  }
  function s(m, u) {
    return o.getCharCountIndicator(m, u) + 4;
  }
  function c(m, u) {
    let f = 0;
    return m.forEach(function(h) {
      const y = s(h.mode, u);
      f += y + h.getBitsLength();
    }), f;
  }
  function p(m, u) {
    for (let f = 1; f <= 40; f++)
      if (c(m, f) <= r.getCapacity(f, u, o.MIXED))
        return f;
  }
  r.from = function(u, f) {
    return i.isValid(u) ? parseInt(u, 10) : f;
  }, r.getCapacity = function(u, f, h) {
    if (!i.isValid(u))
      throw new Error("Invalid QR Code version");
    typeof h > "u" && (h = o.BYTE);
    const y = e.getSymbolTotalCodewords(u), b = a.getTotalCodewordsCount(u, f), g = (y - b) * 8;
    if (h === o.MIXED)
      return g;
    const z = g - s(h, u);
    switch (h) {
      case o.NUMERIC:
        return Math.floor(z / 10 * 3);
      case o.ALPHANUMERIC:
        return Math.floor(z / 11 * 2);
      case o.KANJI:
        return Math.floor(z / 13);
      case o.BYTE:
      default:
        return Math.floor(z / 8);
    }
  }, r.getBestVersionForData = function(u, f) {
    let h;
    const y = t.from(f, t.M);
    if (Array.isArray(u)) {
      if (u.length > 1)
        return p(u, y);
      if (u.length === 0)
        return 1;
      h = u[0];
    } else
      h = u;
    return l(h.mode, h.getLength(), y);
  }, r.getEncodedBits = function(u) {
    if (!i.isValid(u) || u < 7)
      throw new Error("Invalid QR Code version");
    let f = u << 12;
    for (; e.getBCHDigit(f) - d >= 0; )
      f ^= n << e.getBCHDigit(f) - d;
    return u << 12 | f;
  };
})(ut);
var ht = {};
const pa = E, gt = 1335, wo = 21522, tr = pa.getBCHDigit(gt);
ht.getEncodedBits = function(e, a) {
  const t = e.bit << 3 | a;
  let o = t << 10;
  for (; pa.getBCHDigit(o) - tr >= 0; )
    o ^= gt << pa.getBCHDigit(o) - tr;
  return (t << 10 | o) ^ wo;
};
var ft = {};
const $o = G;
function X(r) {
  this.mode = $o.NUMERIC, this.data = r.toString();
}
X.getBitsLength = function(e) {
  return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
};
X.prototype.getLength = function() {
  return this.data.length;
};
X.prototype.getBitsLength = function() {
  return X.getBitsLength(this.data.length);
};
X.prototype.write = function(e) {
  let a, t, o;
  for (a = 0; a + 3 <= this.data.length; a += 3)
    t = this.data.substr(a, 3), o = parseInt(t, 10), e.put(o, 10);
  const i = this.data.length - a;
  i > 0 && (t = this.data.substr(a), o = parseInt(t, 10), e.put(o, i * 3 + 1));
};
var _o = X;
const Co = G, Ze = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
function Z(r) {
  this.mode = Co.ALPHANUMERIC, this.data = r;
}
Z.getBitsLength = function(e) {
  return 11 * Math.floor(e / 2) + 6 * (e % 2);
};
Z.prototype.getLength = function() {
  return this.data.length;
};
Z.prototype.getBitsLength = function() {
  return Z.getBitsLength(this.data.length);
};
Z.prototype.write = function(e) {
  let a;
  for (a = 0; a + 2 <= this.data.length; a += 2) {
    let t = Ze.indexOf(this.data[a]) * 45;
    t += Ze.indexOf(this.data[a + 1]), e.put(t, 11);
  }
  this.data.length % 2 && e.put(Ze.indexOf(this.data[a]), 6);
};
var Eo = Z, No = function(e) {
  for (var a = [], t = e.length, o = 0; o < t; o++) {
    var i = e.charCodeAt(o);
    if (i >= 55296 && i <= 56319 && t > o + 1) {
      var n = e.charCodeAt(o + 1);
      n >= 56320 && n <= 57343 && (i = (i - 55296) * 1024 + n - 56320 + 65536, o += 1);
    }
    if (i < 128) {
      a.push(i);
      continue;
    }
    if (i < 2048) {
      a.push(i >> 6 | 192), a.push(i & 63 | 128);
      continue;
    }
    if (i < 55296 || i >= 57344 && i < 65536) {
      a.push(i >> 12 | 224), a.push(i >> 6 & 63 | 128), a.push(i & 63 | 128);
      continue;
    }
    if (i >= 65536 && i <= 1114111) {
      a.push(i >> 18 | 240), a.push(i >> 12 & 63 | 128), a.push(i >> 6 & 63 | 128), a.push(i & 63 | 128);
      continue;
    }
    a.push(239, 191, 189);
  }
  return new Uint8Array(a).buffer;
};
const Ao = No, Io = G;
function ee(r) {
  this.mode = Io.BYTE, typeof r == "string" && (r = Ao(r)), this.data = new Uint8Array(r);
}
ee.getBitsLength = function(e) {
  return e * 8;
};
ee.prototype.getLength = function() {
  return this.data.length;
};
ee.prototype.getBitsLength = function() {
  return ee.getBitsLength(this.data.length);
};
ee.prototype.write = function(r) {
  for (let e = 0, a = this.data.length; e < a; e++)
    r.put(this.data[e], 8);
};
var So = ee;
const Po = G, Bo = E;
function ae(r) {
  this.mode = Po.KANJI, this.data = r;
}
ae.getBitsLength = function(e) {
  return e * 13;
};
ae.prototype.getLength = function() {
  return this.data.length;
};
ae.prototype.getBitsLength = function() {
  return ae.getBitsLength(this.data.length);
};
ae.prototype.write = function(r) {
  let e;
  for (e = 0; e < this.data.length; e++) {
    let a = Bo.toSJIS(this.data[e]);
    if (a >= 33088 && a <= 40956)
      a -= 33088;
    else if (a >= 57408 && a <= 60351)
      a -= 49472;
    else
      throw new Error("Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`);
    a = (a >>> 8 & 255) * 192 + (a & 255), r.put(a, 13);
  }
};
var Fo = ae, bt = { exports: {} };
(function(r) {
  var e = {
    single_source_shortest_paths: function(a, t, o) {
      var i = {}, n = {};
      n[t] = 0;
      var d = e.PriorityQueue.make();
      d.push(t, 0);
      for (var l, s, c, p, m, u, f, h, y; !d.empty(); ) {
        l = d.pop(), s = l.value, p = l.cost, m = a[s] || {};
        for (c in m)
          m.hasOwnProperty(c) && (u = m[c], f = p + u, h = n[c], y = typeof n[c] > "u", (y || h > f) && (n[c] = f, d.push(c, f), i[c] = s));
      }
      if (typeof o < "u" && typeof n[o] > "u") {
        var b = ["Could not find a path from ", t, " to ", o, "."].join("");
        throw new Error(b);
      }
      return i;
    },
    extract_shortest_path_from_predecessor_list: function(a, t) {
      for (var o = [], i = t; i; )
        o.push(i), a[i], i = a[i];
      return o.reverse(), o;
    },
    find_path: function(a, t, o) {
      var i = e.single_source_shortest_paths(a, t, o);
      return e.extract_shortest_path_from_predecessor_list(i, o);
    },
    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function(a) {
        var t = e.PriorityQueue, o = {}, i;
        a = a || {};
        for (i in t)
          t.hasOwnProperty(i) && (o[i] = t[i]);
        return o.queue = [], o.sorter = a.sorter || t.default_sorter, o;
      },
      default_sorter: function(a, t) {
        return a.cost - t.cost;
      },
      /**
       * Add a new item to the queue and ensure the highest priority element
       * is at the front of the queue.
       */
      push: function(a, t) {
        var o = {
          value: a,
          cost: t
        };
        this.queue.push(o), this.queue.sort(this.sorter);
      },
      /**
       * Return the highest priority element in the queue.
       */
      pop: function() {
        return this.queue.shift();
      },
      empty: function() {
        return this.queue.length === 0;
      }
    }
  };
  r.exports = e;
})(bt);
var Ro = bt.exports;
(function(r) {
  const e = G, a = _o, t = Eo, o = So, i = Fo, n = P, d = E, l = Ro;
  function s(b) {
    return unescape(encodeURIComponent(b)).length;
  }
  function c(b, g, z) {
    const v = [];
    let k;
    for (; (k = b.exec(z)) !== null; )
      v.push({
        data: k[0],
        index: k.index,
        mode: g,
        length: k[0].length
      });
    return v;
  }
  function p(b) {
    const g = c(n.NUMERIC, e.NUMERIC, b), z = c(n.ALPHANUMERIC, e.ALPHANUMERIC, b);
    let v, k;
    return d.isKanjiModeEnabled() ? (v = c(n.BYTE, e.BYTE, b), k = c(n.KANJI, e.KANJI, b)) : (v = c(n.BYTE_KANJI, e.BYTE, b), k = []), g.concat(z, v, k).sort(function(w, N) {
      return w.index - N.index;
    }).map(function(w) {
      return {
        data: w.data,
        mode: w.mode,
        length: w.length
      };
    });
  }
  function m(b, g) {
    switch (g) {
      case e.NUMERIC:
        return a.getBitsLength(b);
      case e.ALPHANUMERIC:
        return t.getBitsLength(b);
      case e.KANJI:
        return i.getBitsLength(b);
      case e.BYTE:
        return o.getBitsLength(b);
    }
  }
  function u(b) {
    return b.reduce(function(g, z) {
      const v = g.length - 1 >= 0 ? g[g.length - 1] : null;
      return v && v.mode === z.mode ? (g[g.length - 1].data += z.data, g) : (g.push(z), g);
    }, []);
  }
  function f(b) {
    const g = [];
    for (let z = 0; z < b.length; z++) {
      const v = b[z];
      switch (v.mode) {
        case e.NUMERIC:
          g.push([v, {
            data: v.data,
            mode: e.ALPHANUMERIC,
            length: v.length
          }, {
            data: v.data,
            mode: e.BYTE,
            length: v.length
          }]);
          break;
        case e.ALPHANUMERIC:
          g.push([v, {
            data: v.data,
            mode: e.BYTE,
            length: v.length
          }]);
          break;
        case e.KANJI:
          g.push([v, {
            data: v.data,
            mode: e.BYTE,
            length: s(v.data)
          }]);
          break;
        case e.BYTE:
          g.push([{
            data: v.data,
            mode: e.BYTE,
            length: s(v.data)
          }]);
      }
    }
    return g;
  }
  function h(b, g) {
    const z = {}, v = {
      start: {}
    };
    let k = ["start"];
    for (let x = 0; x < b.length; x++) {
      const w = b[x], N = [];
      for (let M = 0; M < w.length; M++) {
        const S = w[M], re = "" + x + M;
        N.push(re), z[re] = {
          node: S,
          lastCount: 0
        }, v[re] = {};
        for (let Ve = 0; Ve < k.length; Ve++) {
          const B = k[Ve];
          z[B] && z[B].node.mode === S.mode ? (v[B][re] = m(z[B].lastCount + S.length, S.mode) - m(z[B].lastCount, S.mode), z[B].lastCount += S.length) : (z[B] && (z[B].lastCount = S.length), v[B][re] = m(S.length, S.mode) + 4 + e.getCharCountIndicator(S.mode, g));
        }
      }
      k = N;
    }
    for (let x = 0; x < k.length; x++)
      v[k[x]].end = 0;
    return {
      map: v,
      table: z
    };
  }
  function y(b, g) {
    let z;
    const v = e.getBestModeForData(b);
    if (z = e.from(g, v), z !== e.BYTE && z.bit < v.bit)
      throw new Error('"' + b + '" cannot be encoded with mode ' + e.toString(z) + `.
 Suggested mode is: ` + e.toString(v));
    switch (z === e.KANJI && !d.isKanjiModeEnabled() && (z = e.BYTE), z) {
      case e.NUMERIC:
        return new a(b);
      case e.ALPHANUMERIC:
        return new t(b);
      case e.KANJI:
        return new i(b);
      case e.BYTE:
        return new o(b);
    }
  }
  r.fromArray = function(g) {
    return g.reduce(function(z, v) {
      return typeof v == "string" ? z.push(y(v, null)) : v.data && z.push(y(v.data, v.mode)), z;
    }, []);
  }, r.fromString = function(g, z) {
    const v = p(g, d.isKanjiModeEnabled()), k = f(v), x = h(k, z), w = l.find_path(x.map, "start", "end"), N = [];
    for (let M = 1; M < w.length - 1; M++)
      N.push(x.table[w[M]].node);
    return r.fromArray(u(N));
  }, r.rawSplit = function(g) {
    return r.fromArray(p(g, d.isKanjiModeEnabled()));
  };
})(ft);
const Me = E, ea = Fe, To = ho, Mo = go, Oo = dt, Do = lt, ha = st, ga = Re, Lo = bo, Ne = ut, Uo = ht, Go = G, aa = ft;
function Ho(r, e) {
  const a = r.size, t = Do.getPositions(e);
  for (let o = 0; o < t.length; o++) {
    const i = t[o][0], n = t[o][1];
    for (let d = -1; d <= 7; d++)
      if (!(i + d <= -1 || a <= i + d))
        for (let l = -1; l <= 7; l++)
          n + l <= -1 || a <= n + l || (d >= 0 && d <= 6 && (l === 0 || l === 6) || l >= 0 && l <= 6 && (d === 0 || d === 6) || d >= 2 && d <= 4 && l >= 2 && l <= 4 ? r.set(i + d, n + l, !0, !0) : r.set(i + d, n + l, !1, !0));
  }
}
function Vo(r) {
  const e = r.size;
  for (let a = 8; a < e - 8; a++) {
    const t = a % 2 === 0;
    r.set(a, 6, t, !0), r.set(6, a, t, !0);
  }
}
function Yo(r, e) {
  const a = Oo.getPositions(e);
  for (let t = 0; t < a.length; t++) {
    const o = a[t][0], i = a[t][1];
    for (let n = -2; n <= 2; n++)
      for (let d = -2; d <= 2; d++)
        n === -2 || n === 2 || d === -2 || d === 2 || n === 0 && d === 0 ? r.set(o + n, i + d, !0, !0) : r.set(o + n, i + d, !1, !0);
  }
}
function jo(r, e) {
  const a = r.size, t = Ne.getEncodedBits(e);
  let o, i, n;
  for (let d = 0; d < 18; d++)
    o = Math.floor(d / 3), i = d % 3 + a - 8 - 3, n = (t >> d & 1) === 1, r.set(o, i, n, !0), r.set(i, o, n, !0);
}
function ra(r, e, a) {
  const t = r.size, o = Uo.getEncodedBits(e, a);
  let i, n;
  for (i = 0; i < 15; i++)
    n = (o >> i & 1) === 1, i < 6 ? r.set(i, 8, n, !0) : i < 8 ? r.set(i + 1, 8, n, !0) : r.set(t - 15 + i, 8, n, !0), i < 8 ? r.set(8, t - i - 1, n, !0) : i < 9 ? r.set(8, 15 - i - 1 + 1, n, !0) : r.set(8, 15 - i - 1, n, !0);
  r.set(t - 8, 8, 1, !0);
}
function Ko(r, e) {
  const a = r.size;
  let t = -1, o = a - 1, i = 7, n = 0;
  for (let d = a - 1; d > 0; d -= 2)
    for (d === 6 && d--; ; ) {
      for (let l = 0; l < 2; l++)
        if (!r.isReserved(o, d - l)) {
          let s = !1;
          n < e.length && (s = (e[n] >>> i & 1) === 1), r.set(o, d - l, s), i--, i === -1 && (n++, i = 7);
        }
      if (o += t, o < 0 || a <= o) {
        o -= t, t = -t;
        break;
      }
    }
}
function Qo(r, e, a) {
  const t = new To();
  a.forEach(function(l) {
    t.put(l.mode.bit, 4), t.put(l.getLength(), Go.getCharCountIndicator(l.mode, r)), l.write(t);
  });
  const o = Me.getSymbolTotalCodewords(r), i = ga.getTotalCodewordsCount(r, e), n = (o - i) * 8;
  for (t.getLengthInBits() + 4 <= n && t.put(0, 4); t.getLengthInBits() % 8 !== 0; )
    t.putBit(0);
  const d = (n - t.getLengthInBits()) / 8;
  for (let l = 0; l < d; l++)
    t.put(l % 2 ? 17 : 236, 8);
  return Jo(t, r, e);
}
function Jo(r, e, a) {
  const t = Me.getSymbolTotalCodewords(e), o = ga.getTotalCodewordsCount(e, a), i = t - o, n = ga.getBlocksCount(e, a), d = t % n, l = n - d, s = Math.floor(t / n), c = Math.floor(i / n), p = c + 1, m = s - c, u = new Lo(m);
  let f = 0;
  const h = new Array(n), y = new Array(n);
  let b = 0;
  const g = new Uint8Array(r.buffer);
  for (let w = 0; w < n; w++) {
    const N = w < l ? c : p;
    h[w] = g.slice(f, f + N), y[w] = u.encode(h[w]), f += N, b = Math.max(b, N);
  }
  const z = new Uint8Array(t);
  let v = 0, k, x;
  for (k = 0; k < b; k++)
    for (x = 0; x < n; x++)
      k < h[x].length && (z[v++] = h[x][k]);
  for (k = 0; k < m; k++)
    for (x = 0; x < n; x++)
      z[v++] = y[x][k];
  return z;
}
function qo(r, e, a, t) {
  let o;
  if (Array.isArray(r))
    o = aa.fromArray(r);
  else if (typeof r == "string") {
    let s = e;
    if (!s) {
      const c = aa.rawSplit(r);
      s = Ne.getBestVersionForData(c, a);
    }
    o = aa.fromString(r, s || 40);
  } else
    throw new Error("Invalid data");
  const i = Ne.getBestVersionForData(o, a);
  if (!i)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!e)
    e = i;
  else if (e < i)
    throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + i + `.
`);
  const n = Qo(e, a, o), d = Me.getSymbolSize(e), l = new Mo(d);
  return Ho(l, e), Vo(l), Yo(l, e), ra(l, a, 0), e >= 7 && jo(l, e), Ko(l, n), isNaN(t) && (t = ha.getBestMask(l, ra.bind(null, l, a))), ha.applyMask(t, l), ra(l, a, t), {
    modules: l,
    version: e,
    errorCorrectionLevel: a,
    maskPattern: t,
    segments: o
  };
}
it.create = function(e, a) {
  if (typeof e > "u" || e === "")
    throw new Error("No input text");
  let t = ea.M, o, i;
  return typeof a < "u" && (t = ea.from(a.errorCorrectionLevel, ea.M), o = Ne.from(a.version), i = ha.from(a.maskPattern), a.toSJISFunc && Me.setToSJISFunction(a.toSJISFunc)), qo(e, o, t, i);
};
var zt = {}, Ra = {};
(function(r) {
  function e(a) {
    if (typeof a == "number" && (a = a.toString()), typeof a != "string")
      throw new Error("Color should be defined as hex string");
    let t = a.slice().replace("#", "").split("");
    if (t.length < 3 || t.length === 5 || t.length > 8)
      throw new Error("Invalid hex color: " + a);
    (t.length === 3 || t.length === 4) && (t = Array.prototype.concat.apply([], t.map(function(i) {
      return [i, i];
    }))), t.length === 6 && t.push("F", "F");
    const o = parseInt(t.join(""), 16);
    return {
      r: o >> 24 & 255,
      g: o >> 16 & 255,
      b: o >> 8 & 255,
      a: o & 255,
      hex: "#" + t.slice(0, 6).join("")
    };
  }
  r.getOptions = function(t) {
    t || (t = {}), t.color || (t.color = {});
    const o = typeof t.margin > "u" || t.margin === null || t.margin < 0 ? 4 : t.margin, i = t.width && t.width >= 21 ? t.width : void 0, n = t.scale || 4;
    return {
      width: i,
      scale: i ? 4 : n,
      margin: o,
      color: {
        dark: e(t.color.dark || "#000000ff"),
        light: e(t.color.light || "#ffffffff")
      },
      type: t.type,
      rendererOpts: t.rendererOpts || {}
    };
  }, r.getScale = function(t, o) {
    return o.width && o.width >= t + o.margin * 2 ? o.width / (t + o.margin * 2) : o.scale;
  }, r.getImageWidth = function(t, o) {
    const i = r.getScale(t, o);
    return Math.floor((t + o.margin * 2) * i);
  }, r.qrToImageData = function(t, o, i) {
    const n = o.modules.size, d = o.modules.data, l = r.getScale(n, i), s = Math.floor((n + i.margin * 2) * l), c = i.margin * l, p = [i.color.light, i.color.dark];
    for (let m = 0; m < s; m++)
      for (let u = 0; u < s; u++) {
        let f = (m * s + u) * 4, h = i.color.light;
        if (m >= c && u >= c && m < s - c && u < s - c) {
          const y = Math.floor((m - c) / l), b = Math.floor((u - c) / l);
          h = p[d[y * n + b] ? 1 : 0];
        }
        t[f++] = h.r, t[f++] = h.g, t[f++] = h.b, t[f] = h.a;
      }
  };
})(Ra);
(function(r) {
  const e = Ra;
  function a(o, i, n) {
    o.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = n, i.width = n, i.style.height = n + "px", i.style.width = n + "px";
  }
  function t() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  r.render = function(i, n, d) {
    let l = d, s = n;
    typeof l > "u" && (!n || !n.getContext) && (l = n, n = void 0), n || (s = t()), l = e.getOptions(l);
    const c = e.getImageWidth(i.modules.size, l), p = s.getContext("2d"), m = p.createImageData(c, c);
    return e.qrToImageData(m.data, i, l), a(p, s, c), p.putImageData(m, 0, 0), s;
  }, r.renderToDataURL = function(i, n, d) {
    let l = d;
    typeof l > "u" && (!n || !n.getContext) && (l = n, n = void 0), l || (l = {});
    const s = r.render(i, n, l), c = l.type || "image/png", p = l.rendererOpts || {};
    return s.toDataURL(c, p.quality);
  };
})(zt);
var vt = {};
const Wo = Ra;
function or(r, e) {
  const a = r.a / 255, t = e + '="' + r.hex + '"';
  return a < 1 ? t + " " + e + '-opacity="' + a.toFixed(2).slice(1) + '"' : t;
}
function ta(r, e, a) {
  let t = r + e;
  return typeof a < "u" && (t += " " + a), t;
}
function Xo(r, e, a) {
  let t = "", o = 0, i = !1, n = 0;
  for (let d = 0; d < r.length; d++) {
    const l = Math.floor(d % e), s = Math.floor(d / e);
    !l && !i && (i = !0), r[d] ? (n++, d > 0 && l > 0 && r[d - 1] || (t += i ? ta("M", l + a, 0.5 + s + a) : ta("m", o, 0), o = 0, i = !1), l + 1 < e && r[d + 1] || (t += ta("h", n), n = 0)) : o++;
  }
  return t;
}
vt.render = function(e, a, t) {
  const o = Wo.getOptions(a), i = e.modules.size, n = e.modules.data, d = i + o.margin * 2, l = o.color.light.a ? "<path " + or(o.color.light, "fill") + ' d="M0 0h' + d + "v" + d + 'H0z"/>' : "", s = "<path " + or(o.color.dark, "stroke") + ' d="' + Xo(n, i, o.margin) + '"/>', c = 'viewBox="0 0 ' + d + " " + d + '"', m = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + c + ' shape-rendering="crispEdges">' + l + s + `</svg>
`;
  return typeof t == "function" && t(null, m), m;
};
const Zo = uo, fa = it, yt = zt, ei = vt;
function Ta(r, e, a, t, o) {
  const i = [].slice.call(arguments, 1), n = i.length, d = typeof i[n - 1] == "function";
  if (!d && !Zo())
    throw new Error("Callback required as last argument");
  if (d) {
    if (n < 2)
      throw new Error("Too few arguments provided");
    n === 2 ? (o = a, a = e, e = t = void 0) : n === 3 && (e.getContext && typeof o > "u" ? (o = t, t = void 0) : (o = t, t = a, a = e, e = void 0));
  } else {
    if (n < 1)
      throw new Error("Too few arguments provided");
    return n === 1 ? (a = e, e = t = void 0) : n === 2 && !e.getContext && (t = a, a = e, e = void 0), new Promise(function(l, s) {
      try {
        const c = fa.create(a, t);
        l(r(c, e, t));
      } catch (c) {
        s(c);
      }
    });
  }
  try {
    const l = fa.create(a, t);
    o(null, r(l, e, t));
  } catch (l) {
    o(l);
  }
}
ge.create = fa.create;
ge.toCanvas = Ta.bind(null, yt.render);
ge.toDataURL = Ta.bind(null, yt.renderToDataURL);
ge.toString = Ta.bind(null, function(r, e, a) {
  return ei.render(r, a);
});
const ai = 0.1, ir = 2.5, F = 7;
function oa(r, e, a) {
  return r === e ? !1 : (r - e < 0 ? e - r : r - e) <= a + ai;
}
function ri(r, e) {
  const a = Array.prototype.slice.call(ge.create(r, {
    errorCorrectionLevel: e
  }).modules.data, 0), t = Math.sqrt(a.length);
  return a.reduce((o, i, n) => (n % t === 0 ? o.push([i]) : o[o.length - 1].push(i)) && o, []);
}
const ti = {
  generate(r, e, a, t = "light") {
    const o = t === "light" ? "#141414" : "#fff", i = t === "light" ? "#fff" : "#141414", n = [], d = ri(r, "Q"), l = e / d.length, s = [{
      x: 0,
      y: 0
    }, {
      x: 1,
      y: 0
    }, {
      x: 0,
      y: 1
    }];
    s.forEach(({
      x: h,
      y
    }) => {
      const b = (d.length - F) * l * h, g = (d.length - F) * l * y, z = 0.32;
      for (let v = 0; v < s.length; v += 1) {
        const k = l * (F - v * 2);
        n.push(Ye`
            <rect
              fill=${v % 2 === 0 ? o : i}
              height=${k}
              rx=${k * z}
              ry=${k * z}
              width=${k}
              x=${b + l * v}
              y=${g + l * v}
            />
          `);
      }
    });
    const c = Math.floor((a + 25) / l), p = d.length / 2 - c / 2, m = d.length / 2 + c / 2 - 1, u = [];
    d.forEach((h, y) => {
      h.forEach((b, g) => {
        if (d[y][g] && !(y < F && g < F || y > d.length - (F + 1) && g < F || y < F && g > d.length - (F + 1)) && !(y > p && y < m && g > p && g < m)) {
          const z = y * l + l / 2, v = g * l + l / 2;
          u.push([z, v]);
        }
      });
    });
    const f = {};
    return u.forEach(([h, y]) => {
      f[h] ? f[h].push(y) : f[h] = [y];
    }), Object.entries(f).map(([h, y]) => {
      const b = y.filter((g) => y.every((z) => !oa(g, z, l)));
      return [Number(h), b];
    }).forEach(([h, y]) => {
      y.forEach((b) => {
        n.push(Ye`<circle cx=${h} cy=${b} fill=${o} r=${l / ir} />`);
      });
    }), Object.entries(f).filter(([h, y]) => y.length > 1).map(([h, y]) => {
      const b = y.filter((g) => y.some((z) => oa(g, z, l)));
      return [Number(h), b];
    }).map(([h, y]) => {
      y.sort((g, z) => g < z ? -1 : 1);
      const b = [];
      for (const g of y) {
        const z = b.find((v) => v.some((k) => oa(g, k, l)));
        z ? z.push(g) : b.push([g]);
      }
      return [h, b.map((g) => [g[0], g[g.length - 1]])];
    }).forEach(([h, y]) => {
      y.forEach(([b, g]) => {
        n.push(Ye`
              <line
                x1=${h}
                x2=${h}
                y1=${b}
                y2=${g}
                stroke=${o}
                stroke-width=${l / (ir / 2)}
                stroke-linecap="round"
              />
            `);
      });
    }), n;
  }
}, oi = Aa`
  .o21pay-logo {
    content: url('https://assets.obvious21.com/o21pay-assets/o21pay.png');
  }
  .pr-qrcode {
    position: relative;
    background-color: black;
    padding: 10px 10px 10px 10px;
    border-radius: 15px;
    cursor: pointer;
  }
  .pr-qrcode.shadow {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .dark-theme {
    background-color: black !important;
  }
  .light-theme {
    background-color: white !important;
  }
  @keyframes zoomIn {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    100% {
      opacity: 1;
    }
  }
  .zoomIn {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
  }
`;
function ii(r, e, a) {
  return e = ni(e), e in r ? Object.defineProperty(r, e, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = a, r;
}
function ni(r) {
  var e = di(r, "string");
  return typeof e == "symbol" ? e : String(e);
}
function di(r, e) {
  if (typeof r != "object" || r === null)
    return r;
  var a = r[Symbol.toPrimitive];
  if (a !== void 0) {
    var t = a.call(r, e || "default");
    if (typeof t != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
const nr = "o21pay-qr";
class Ma extends U {
  static get properties() {
    return {
      size: {
        type: String,
        attribute: "size"
      },
      theme: {
        type: String,
        attribute: "theme"
      },
      shadow: {
        type: Boolean,
        attribute: "shadow"
      },
      url: {
        type: String,
        attribute: "url"
      }
    };
  }
  constructor() {
    super(), this.theme = "dark", this.size = "320", this.shadow = !1, this.url = "", this.eventsO21Pay = void 0;
  }
  _onClick(e) {
    const a = {
      detail: {
        url: this.url
      },
      bubbles: !0,
      composed: !0
    };
    this.dispatchEvent(new CustomEvent("o21pay_QRclick", a));
  }
  render() {
    const e = this.url;
    if (!e || !e.length)
      return L``;
    this.size = parseInt(this.size) || "320", this.logoSize = this.size / 3.3;
    const a = (this.size - this.logoSize) / 2 + 9, t = (this.size - this.logoSize) / 2 + 12, i = ((d) => L`<svg height="${this.size}" width="${this.size}">${d}</svg>`)(ti.generate(this.url, this.size, this.size / 4, this.theme));
    let n = `pr-qrcode ${this.theme}-theme`;
    return this.shadow && (n += " shadow"), L`
      <div id="qrsvg" class="${n}" style="width: ${this.size}px;height: ${this.size}px;">
        <svg height="${this.size}" width="${this.size}" @click="${this._onClick}">${i}</svg>
        <img
          class="o21pay-logo"
          height="${this.logoSize}"
          style="position: absolute; top: ${a}px; left: ${t}px;"
        />
      </div>
    `;
  }
}
ii(Ma, "styles", [oi]);
const ia = window.customElements;
ia && !ia.get(nr) && ia.define(nr, Ma);
const li = Aa`
  :host {
    --maz-primary: #1e90ff;
    --maz-primary-darken: #1873cc;
    --maz-primary-alpha-05: rgba(30, 144, 255, 0.05);
    --maz-primary-alpha-40: rgba(30, 144, 255, 0.4);
    --maz-primary-alpha-50: rgba(30, 144, 255, 0.5);
    --maz-primary-alpha-60: rgba(30, 144, 255, 0.6);
    --maz-secondary: #1cd1a1;
    --maz-secondary-darken: #16a780;
    --maz-secondary-alpha-05: rgba(28, 209, 161, 0.05);
    --maz-secondary-alpha-40: rgba(28, 209, 161, 0.4);
    --maz-secondary-alpha-50: rgba(28, 209, 161, 0.5);
    --maz-secondary-alpha-60: rgba(28, 209, 161, 0.6);
    --maz-third: #c41af9;
    --maz-third-darken: #9c14c7;
    --maz-third-alpha-05: rgba(196, 26, 249, 0.05);
    --maz-third-alpha-40: rgba(196, 26, 249, 0.4);
    --maz-third-alpha-50: rgba(196, 26, 249, 0.5);
    --maz-third-alpha-60: rgba(196, 26, 249, 0.6);
    --maz-danger: #ff4500;
    --maz-danger-darken: #cc3700;
    --maz-danger-alpha-05: rgba(255, 69, 0, 0.05);
    --maz-danger-alpha-40: rgba(255, 69, 0, 0.4);
    --maz-danger-alpha-50: rgba(255, 69, 0, 0.5);
    --maz-danger-alpha-60: rgba(255, 69, 0, 0.6);
    --maz-success: #9acd32;
    --maz-success-darken: #7ba428;
    --maz-success-alpha-05: rgba(154, 205, 50, 0.05);
    --maz-success-alpha-40: rgba(154, 205, 50, 0.4);
    --maz-success-alpha-50: rgba(154, 205, 50, 0.5);
    --maz-success-alpha-60: rgba(154, 205, 50, 0.6);
    --maz-info: #17a2b8;
    --maz-info-darken: #128193;
    --maz-info-alpha-05: rgba(23, 162, 184, 0.05);
    --maz-info-alpha-40: rgba(23, 162, 184, 0.4);
    --maz-info-alpha-50: rgba(23, 162, 184, 0.5);
    --maz-info-alpha-60: rgba(23, 162, 184, 0.6);
    --maz-warning: #ffa300;
    --maz-warning-darken: #cc8200;
    --maz-warning-alpha-05: rgba(255, 163, 0, 0.05);
    --maz-warning-alpha-40: rgba(255, 163, 0, 0.4);
    --maz-warning-alpha-50: rgba(255, 163, 0, 0.5);
    --maz-warning-alpha-60: rgba(255, 163, 0, 0.6);
    --maz-light: #eeeeee;
    --maz-light-darken: #bebebe;
    --maz-light-alpha-05: rgba(238, 238, 238, 0.05);
    --maz-light-alpha-40: rgba(238, 238, 238, 0.4);
    --maz-light-alpha-50: rgba(238, 238, 238, 0.5);
    --maz-light-alpha-60: rgba(238, 238, 238, 0.6);
    --maz-dark: #21222e;
    --maz-dark-darken: #1a1b24;
    --maz-dark-alpha-05: rgba(33, 34, 46, 0.05);
    --maz-dark-alpha-40: rgba(33, 34, 46, 0.4);
    --maz-dark-alpha-50: rgba(33, 34, 46, 0.5);
    --maz-dark-alpha-60: rgba(33, 34, 46, 0.6);
    --maz-grey: #999999;
    --maz-grey-darken: #7a7a7a;
    --maz-grey-alpha-05: rgba(153, 153, 153, 0.05);
    --maz-grey-alpha-40: rgba(153, 153, 153, 0.4);
    --maz-grey-alpha-50: rgba(153, 153, 153, 0.5);
    --maz-grey-alpha-60: rgba(153, 153, 153, 0.6);
    --maz-default: #cccccc;
    --maz-default-darken: #a3a3a3;
    --maz-default-alpha-05: rgba(204, 204, 204, 0.05);
    --maz-default-alpha-40: rgba(204, 204, 204, 0.4);
    --maz-default-alpha-50: rgba(204, 204, 204, 0.5);
    --maz-default-alpha-60: rgba(204, 204, 204, 0.6);
    --maz-black: #000000;
    --maz-black-darken: #000000;
    --maz-black-alpha-05: rgba(0, 0, 0, 0.05);
    --maz-black-alpha-40: rgba(0, 0, 0, 0.4);
    --maz-black-alpha-50: rgba(0, 0, 0, 0.5);
    --maz-black-alpha-60: rgba(0, 0, 0, 0.6);
    --maz-white: #ffffff;
    --maz-white-darken: #cccccc;
    --maz-white-alpha-05: rgba(255, 255, 255, 0.05);
    --maz-white-alpha-40: rgba(255, 255, 255, 0.4);
    --maz-white-alpha-50: rgba(255, 255, 255, 0.5);
    --maz-white-alpha-60: rgba(255, 255, 255, 0.6);
    --maz-transparent: #ffffff00;
    --maz-transparent-darken: #cccccc;
    --maz-transparent-alpha-05: transparent;
    --maz-transparent-alpha-40: transparent;
    --maz-transparent-alpha-50: transparent;
    --maz-transparent-alpha-60: transparent;
    --maz-disabled: #f2f2f2;
    --maz-disabled-darken: #c1c1c1;
    --maz-disabled-alpha-05: rgba(242, 242, 242, 0.05);
    --maz-disabled-alpha-40: rgba(242, 242, 242, 0.4);
    --maz-disabled-alpha-50: rgba(242, 242, 242, 0.5);
    --maz-disabled-alpha-60: rgba(242, 242, 242, 0.6);
    --maz-base-font-size: 16px;
    --maz-base-font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    --maz-base-font-weight: 400;
    --maz-base-line-height: 1.5;
    --maz-border-width: 2px;
    --maz-border-radius: 12px;
    --maz-text-color: #212121;
    --maz-muted-color: rgba(0, 0, 0, 0.54);
    --maz-placeholder-color: #a7a7a7;
    --maz-icon-color: #dedede;
    --maz-bg-color: white;
    --maz-bg-color-light: #f2f2f2;
    --maz-overlay-color: rgba(86, 87, 117, 0.7);
    --maz-elevation: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
    --maz-border-color: #eeeeee;
    --maz-border-color-darken: #d6d6d6;
    --maz-hover-color: #eeeeee;
    --maz-hover-color-darken: #d6d6d6;
    --maz-disabled-color: #f2f2f2;
    --maz-disabled-color-darken: #d9d9d9;
  }
  .maz-is-dark {
    --maz-text-color: #eeeeee;
    --maz-muted-color: rgba(255, 255, 255, 0.54);
    --maz-placeholder-color: rgba(255, 255, 255, 0.6);
    --maz-icon-color: #65678f;
    --maz-bg-color: #21222e;
    --maz-bg-color-light: #303144;
    --maz-overlay-color: rgba(86, 87, 117, 0.7);
    --maz-elevation: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
    --maz-border-color: #3b3c53;
    --maz-border-color-darken: #35364a;
    --maz-hover-color: #2e2f40;
    --maz-hover-color-darken: #343649;
    --maz-disabled-color: #cccccc;
    --maz-disabled-color-darken: #eaeaea;
  }
  html {
    font-size: var(--maz-base-font-size);
  }
  .maz-base-component {
    font-family: var(--maz-base-font-family);
    font-weight: var(--maz-base-font-weight);
    font-size: var(--maz-base-font-size);
    line-height: var(--maz-base-line-height);
    -webkit-font-kerning: normal;
    font-kerning: normal;
  }
  .maz-base-component,
  .maz-base-component *,
  .maz-base-component *::before,
  .maz-base-component *::after {
    box-sizing: border-box;
  }
  .maz-base-component:not(.maz-btn) {
    color: var(--maz-text-color);
  }
  .maz-arrow-icon {
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .maz-arrow-icon path.arrow {
    fill: var(--maz-text-color);
  }
  .maz-arrow-icon.is-white path.arrow {
    fill: #fff;
  }
  .maz-arrow-icon.up {
    transform: rotate(180deg);
  }
  .maz-arrow-icon.right {
    transform: rotate(-90deg);
  }
  .maz-arrow-icon.left {
    transform: rotate(90deg);
  }
  .maz-btn {
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1);
    background-color: var(--maz-primary);
    color: #fff;
    display: inline-flex;
    border-radius: var(--maz-border-radius);
    line-height: 1;
    box-sizing: border-box;
    margin: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: auto;
    overflow: visible;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    text-align: center;
    font-size: 1rem;
    padding-right: 1.429em;
    padding-left: 1.429em;
    height: 3em;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  .maz-btn:hover,
  .maz-btn:focus,
  .maz-btn.maz-active {
    background-color: var(--maz-primary-darken);
  }
  .maz-btn:focus::before,
  .maz-btn.maz-active::before {
    box-sizing: content-box;
    content: '';
    display: block;
    border: 2px solid var(--maz-primary);
    border-radius: calc(var(--maz-border-radius) + 3px);
    position: absolute;
    left: -3px;
    top: -3px;
    right: -3px;
    bottom: -3px;
  }
  .maz-btn--outline {
    background-color: rgba(var(--maz-primary), 0.05);
    color: var(--maz-primary);
    box-shadow: none;
  }
  .maz-btn--outline::after {
    box-sizing: content-box;
    content: '';
    display: block;
    height: calc(100% - 4px);
    width: calc(100% - 4px);
    border: 2px solid;
    border-color: var(--maz-primary);
    border-radius: var(--maz-border-radius);
    position: absolute;
    left: 0;
    top: 0;
  }
  .maz-btn--outline.maz-btn--rounded {
    border-radius: 100px;
  }
  .maz-btn--outline.maz-btn--rounded::after {
    border-radius: 100px;
  }
  .maz-btn--outline:hover,
  .maz-btn--outline:focus,
  .maz-btn--outline.maz-active {
    background-color: var(--maz-primary);
    color: #fff;
  }
  .maz-btn--rounded {
    border-radius: 100px;
  }
  .maz-btn--rounded:focus::before,
  .maz-btn--rounded.maz-active::before {
    border-radius: 100px;
  }
  .maz-btn--block {
    width: 100%;
  }
  .maz-btn--xl {
    font-size: 1.375rem;
  }
  .maz-btn--lg {
    font-size: 1.19rem;
  }
  .maz-btn--sm {
    font-size: 0.857rem;
  }
  .maz-btn--mini {
    font-size: 0.75rem;
  }
  .maz-btn--mini span {
    font-size: 0.857rem;
  }
  .maz-btn--fab {
    border-radius: 50%;
    padding: 0;
    width: 3em;
  }
  .maz-btn--fab::after {
    border-radius: 50%;
  }
  .maz-btn--fab:focus::before,
  .maz-btn--fab.maz-active::before {
    border-radius: 50%;
  }
  .maz-btn--icon--right {
    padding-right: 0.9526666667em;
  }
  .maz-btn--icon--left {
    padding-left: 0.9526666667em;
  }
  .maz-btn--icon.maz-btn--no-text {
    padding-left: 0.9526666667em;
    padding-right: 0.9526666667em;
  }
  .maz-btn--icon i {
    font-size: 1.714rem;
  }
  .maz-btn--icon.maz-btn--xl i {
    font-size: 2rem;
  }
  .maz-btn--icon.maz-btn--lg i {
    font-size: 1.857rem;
  }
  .maz-btn--icon.maz-btn--sm i {
    font-size: 1.429rem;
  }
  .maz-btn--icon.maz-btn--mini i {
    font-size: 1.286rem;
  }
  .maz-btn__spinner {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .maz-btn--primary {
    background-color: var(--maz-primary);
  }
  .maz-btn--primary:hover,
  .maz-btn--primary:focus,
  .maz-btn--primary.maz-active {
    background-color: var(--maz-primary-darken);
  }
  .maz-btn--primary:focus::before,
  .maz-btn--primary.maz-active::before {
    border-color: var(--maz-primary);
  }
  .maz-btn--primary.maz-btn--outline {
    background-color: var(--maz-primary-alpha-05);
    color: var(--maz-primary);
  }
  .maz-btn--primary.maz-btn--outline::after {
    border-color: var(--maz-primary);
  }
  .maz-btn--primary.maz-btn--outline.maz-btn--rounded::after {
    border-radius: 100px;
  }
  .maz-btn--primary.maz-btn--outline:hover:not(:disabled),
  .maz-btn--primary.maz-btn--outline:focus:not(:disabled),
  .maz-btn--primary.maz-btn--outline.maz-active:not(:disabled) {
    background-color: var(--maz-primary);
    color: #fff;
  }
  .maz-btn--secondary {
    background-color: var(--maz-secondary);
  }
  .maz-btn--secondary:hover,
  .maz-btn--secondary:focus,
  .maz-btn--secondary.maz-active {
    background-color: var(--maz-secondary-darken);
  }
  .maz-btn--secondary:focus::before,
  .maz-btn--secondary.maz-active::before {
    border-color: var(--maz-secondary);
  }
  .maz-btn--secondary.maz-btn--outline {
    background-color: var(--maz-secondary-alpha-05);
    color: var(--maz-secondary);
  }
  .maz-btn--secondary.maz-btn--outline::after {
    border-color: var(--maz-secondary);
  }
  .maz-btn--secondary.maz-btn--outline.maz-btn--rounded::after {
    border-radius: 100px;
  }
  .maz-btn--secondary.maz-btn--outline:hover:not(:disabled),
  .maz-btn--secondary.maz-btn--outline:focus:not(:disabled),
  .maz-btn--secondary.maz-btn--outline.maz-active:not(:disabled) {
    background-color: var(--maz-secondary);
    color: #fff;
  }
  .maz-btn--third {
    background-color: var(--maz-third);
  }
  .maz-btn--third:hover,
  .maz-btn--third:focus,
  .maz-btn--third.maz-active {
    background-color: var(--maz-third-darken);
  }
  .maz-btn--third:focus::before,
  .maz-btn--third.maz-active::before {
    border-color: var(--maz-third);
  }
  .maz-btn--third.maz-btn--outline {
    background-color: var(--maz-third-alpha-05);
    color: var(--maz-third);
  }
  .maz-btn--third.maz-btn--outline::after {
    border-color: var(--maz-third);
  }
  .maz-btn--third.maz-btn--outline.maz-btn--rounded::after {
    border-radius: 100px;
  }
  .maz-btn--third.maz-btn--outline:hover:not(:disabled),
  .maz-btn--third.maz-btn--outline:focus:not(:disabled),
  .maz-btn--third.maz-btn--outline.maz-active:not(:disabled) {
    background-color: var(--maz-third);
    color: #fff;
  }
  .maz-btn--success {
    background-color: var(--maz-success);
  }
  .maz-btn--success:hover,
  .maz-btn--success:focus,
  .maz-btn--success.maz-active {
    background-color: var(--maz-success-darken);
  }
  .maz-btn--success:focus::before,
  .maz-btn--success.maz-active::before {
    border-color: var(--maz-success);
  }
  .maz-btn--success.maz-btn--outline {
    background-color: var(--maz-success-alpha-05);
    color: var(--maz-success);
  }
  .maz-btn--success.maz-btn--outline::after {
    border-color: var(--maz-success);
  }
  .maz-btn--success.maz-btn--outline.maz-btn--rounded::after {
    border-radius: 100px;
  }
  .maz-btn--success.maz-btn--outline:hover:not(:disabled),
  .maz-btn--success.maz-btn--outline:focus:not(:disabled),
  .maz-btn--success.maz-btn--outline.maz-active:not(:disabled) {
    background-color: var(--maz-success);
    color: #fff;
  }
  .maz-btn--danger {
    background-color: var(--maz-danger);
  }
  .maz-btn--danger:hover,
  .maz-btn--danger:focus,
  .maz-btn--danger.maz-active {
    background-color: var(--maz-danger-darken);
  }
  .maz-btn--danger:focus::before,
  .maz-btn--danger.maz-active::before {
    border-color: var(--maz-danger);
  }
  .maz-btn--danger.maz-btn--outline {
    background-color: var(--maz-danger-alpha-05);
    color: var(--maz-danger);
  }
  .maz-btn--danger.maz-btn--outline::after {
    border-color: var(--maz-danger);
  }
  .maz-btn--danger.maz-btn--outline.maz-btn--rounded::after {
    border-radius: 100px;
  }
  .maz-btn--danger.maz-btn--outline:hover:not(:disabled),
  .maz-btn--danger.maz-btn--outline:focus:not(:disabled),
  .maz-btn--danger.maz-btn--outline.maz-active:not(:disabled) {
    background-color: var(--maz-danger);
    color: #fff;
  }
  .maz-btn--grey {
    background-color: var(--maz-grey);
  }
  .maz-btn--grey:hover,
  .maz-btn--grey:focus,
  .maz-btn--grey.maz-active {
    background-color: var(--maz-grey-darken);
  }
  .maz-btn--grey:focus::before,
  .maz-btn--grey.maz-active::before {
    border-color: var(--maz-grey);
  }
  .maz-btn--grey.maz-btn--outline {
    background-color: var(--maz-grey-alpha-05);
    color: var(--maz-grey);
  }
  .maz-btn--grey.maz-btn--outline::after {
    border-color: var(--maz-grey);
  }
  .maz-btn--grey.maz-btn--outline.maz-btn--rounded::after {
    border-radius: 100px;
  }
  .maz-btn--grey.maz-btn--outline:hover:not(:disabled),
  .maz-btn--grey.maz-btn--outline:focus:not(:disabled),
  .maz-btn--grey.maz-btn--outline.maz-active:not(:disabled) {
    background-color: var(--maz-grey);
    color: #fff;
  }
  .maz-btn--info {
    background-color: var(--maz-info);
  }
  .maz-btn--info:hover,
  .maz-btn--info:focus,
  .maz-btn--info.maz-active {
    background-color: var(--maz-info-darken);
  }
  .maz-btn--info:focus::before,
  .maz-btn--info.maz-active::before {
    border-color: var(--maz-info);
  }
  .maz-btn--info.maz-btn--outline {
    background-color: var(--maz-info-alpha-05);
    color: var(--maz-info);
  }
  .maz-btn--info.maz-btn--outline::after {
    border-color: var(--maz-info);
  }
  .maz-btn--info.maz-btn--outline.maz-btn--rounded::after {
    border-radius: 100px;
  }
  .maz-btn--info.maz-btn--outline:hover:not(:disabled),
  .maz-btn--info.maz-btn--outline:focus:not(:disabled),
  .maz-btn--info.maz-btn--outline.maz-active:not(:disabled) {
    background-color: var(--maz-info);
    color: #fff;
  }
  .maz-btn--warning {
    background-color: var(--maz-warning);
  }
  .maz-btn--warning:hover,
  .maz-btn--warning:focus,
  .maz-btn--warning.maz-active {
    background-color: var(--maz-warning-darken);
  }
  .maz-btn--warning:focus::before,
  .maz-btn--warning.maz-active::before {
    border-color: var(--maz-warning);
  }
  .maz-btn--warning.maz-btn--outline {
    background-color: var(--maz-warning-alpha-05);
    color: var(--maz-warning);
  }
  .maz-btn--warning.maz-btn--outline::after {
    border-color: var(--maz-warning);
  }
  .maz-btn--warning.maz-btn--outline.maz-btn--rounded::after {
    border-radius: 100px;
  }
  .maz-btn--warning.maz-btn--outline:hover:not(:disabled),
  .maz-btn--warning.maz-btn--outline:focus:not(:disabled),
  .maz-btn--warning.maz-btn--outline.maz-active:not(:disabled) {
    background-color: var(--maz-warning);
    color: #fff;
  }
  .maz-btn--light {
    background-color: var(--maz-light);
  }
  .maz-btn--light:hover,
  .maz-btn--light:focus,
  .maz-btn--light.maz-active {
    background-color: var(--maz-light-darken);
  }
  .maz-btn--light:focus::before,
  .maz-btn--light.maz-active::before {
    border-color: var(--maz-light);
  }
  .maz-btn--light.maz-btn--outline {
    background-color: var(--maz-light-alpha-05);
    color: var(--maz-light);
  }
  .maz-btn--light.maz-btn--outline::after {
    border-color: var(--maz-light);
  }
  .maz-btn--light.maz-btn--outline.maz-btn--rounded::after {
    border-radius: 100px;
  }
  .maz-btn--light.maz-btn--outline:hover:not(:disabled),
  .maz-btn--light.maz-btn--outline:focus:not(:disabled),
  .maz-btn--light.maz-btn--outline.maz-active:not(:disabled) {
    background-color: var(--maz-light);
    color: #fff;
  }
  .maz-btn--dark {
    background-color: var(--maz-dark);
  }
  .maz-btn--dark:hover,
  .maz-btn--dark:focus,
  .maz-btn--dark.maz-active {
    background-color: var(--maz-dark-darken);
  }
  .maz-btn--dark:focus::before,
  .maz-btn--dark.maz-active::before {
    border-color: var(--maz-dark);
  }
  .maz-btn--dark.maz-btn--outline {
    background-color: var(--maz-dark-alpha-05);
    color: var(--maz-dark);
  }
  .maz-btn--dark.maz-btn--outline::after {
    border-color: var(--maz-dark);
  }
  .maz-btn--dark.maz-btn--outline.maz-btn--rounded::after {
    border-radius: 100px;
  }
  .maz-btn--dark.maz-btn--outline:hover:not(:disabled),
  .maz-btn--dark.maz-btn--outline:focus:not(:disabled),
  .maz-btn--dark.maz-btn--outline.maz-active:not(:disabled) {
    background-color: var(--maz-dark);
    color: #fff;
  }
  .maz-btn--default {
    background-color: var(--maz-default);
  }
  .maz-btn--default:hover,
  .maz-btn--default:focus,
  .maz-btn--default.maz-active {
    background-color: var(--maz-default-darken);
  }
  .maz-btn--default:focus::before,
  .maz-btn--default.maz-active::before {
    border-color: var(--maz-default);
  }
  .maz-btn--default.maz-btn--outline {
    background-color: var(--maz-default-alpha-05);
    color: var(--maz-default);
  }
  .maz-btn--default.maz-btn--outline::after {
    border-color: var(--maz-default);
  }
  .maz-btn--default.maz-btn--outline.maz-btn--rounded::after {
    border-radius: 100px;
  }
  .maz-btn--default.maz-btn--outline:hover:not(:disabled),
  .maz-btn--default.maz-btn--outline:focus:not(:disabled),
  .maz-btn--default.maz-btn--outline.maz-active:not(:disabled) {
    background-color: var(--maz-default);
    color: #fff;
  }
  .maz-btn--disabled {
    background-color: var(--maz-disabled);
  }
  .maz-btn--disabled:hover,
  .maz-btn--disabled:focus,
  .maz-btn--disabled.maz-active {
    background-color: var(--maz-disabled-darken);
  }
  .maz-btn--disabled:focus::before,
  .maz-btn--disabled.maz-active::before {
    border-color: var(--maz-disabled);
  }
  .maz-btn--disabled.maz-btn--outline {
    background-color: var(--maz-disabled-alpha-05);
    color: var(--maz-disabled);
  }
  .maz-btn--disabled.maz-btn--outline::after {
    border-color: var(--maz-disabled);
  }
  .maz-btn--disabled.maz-btn--outline.maz-btn--rounded::after {
    border-radius: 100px;
  }
  .maz-btn--disabled.maz-btn--outline:hover:not(:disabled),
  .maz-btn--disabled.maz-btn--outline:focus:not(:disabled),
  .maz-btn--disabled.maz-btn--outline.maz-active:not(:disabled) {
    background-color: var(--maz-disabled);
    color: #fff;
  }
  .maz-btn--white {
    background-color: var(--maz-white);
  }
  .maz-btn--white:hover,
  .maz-btn--white:focus,
  .maz-btn--white.maz-active {
    background-color: var(--maz-white-darken);
  }
  .maz-btn--white:focus::before,
  .maz-btn--white.maz-active::before {
    border-color: var(--maz-white);
  }
  .maz-btn--white.maz-btn--outline {
    background-color: var(--maz-white-alpha-05);
    color: var(--maz-white);
  }
  .maz-btn--white.maz-btn--outline::after {
    border-color: var(--maz-white);
  }
  .maz-btn--white.maz-btn--outline.maz-btn--rounded::after {
    border-radius: 100px;
  }
  .maz-btn--white.maz-btn--outline:hover:not(:disabled),
  .maz-btn--white.maz-btn--outline:focus:not(:disabled),
  .maz-btn--white.maz-btn--outline.maz-active:not(:disabled) {
    background-color: var(--maz-white);
    color: #fff;
  }
  .maz-btn--black {
    background-color: var(--maz-black);
  }
  .maz-btn--black:hover,
  .maz-btn--black:focus,
  .maz-btn--black.maz-active {
    background-color: var(--maz-black-darken);
  }
  .maz-btn--black:focus::before,
  .maz-btn--black.maz-active::before {
    border-color: var(--maz-black);
  }
  .maz-btn--black.maz-btn--outline {
    background-color: var(--maz-black-alpha-05);
    color: var(--maz-black);
  }
  .maz-btn--black.maz-btn--outline::after {
    border-color: var(--maz-black);
  }
  .maz-btn--black.maz-btn--outline.maz-btn--rounded::after {
    border-radius: 100px;
  }
  .maz-btn--black.maz-btn--outline:hover:not(:disabled),
  .maz-btn--black.maz-btn--outline:focus:not(:disabled),
  .maz-btn--black.maz-btn--outline.maz-active:not(:disabled) {
    background-color: var(--maz-black);
    color: #fff;
  }
  .maz-btn--transparent {
    background-color: var(--maz-transparent);
  }
  .maz-btn--transparent:hover,
  .maz-btn--transparent:focus,
  .maz-btn--transparent.maz-active {
    background-color: var(--maz-transparent-darken);
  }
  .maz-btn--transparent:focus::before,
  .maz-btn--transparent.maz-active::before {
    border-color: var(--maz-transparent);
  }
  .maz-btn--transparent.maz-btn--outline {
    background-color: var(--maz-transparent-alpha-05);
    color: var(--maz-transparent);
  }
  .maz-btn--transparent.maz-btn--outline::after {
    border-color: var(--maz-transparent);
  }
  .maz-btn--transparent.maz-btn--outline.maz-btn--rounded::after {
    border-radius: 100px;
  }
  .maz-btn--transparent.maz-btn--outline:hover:not(:disabled),
  .maz-btn--transparent.maz-btn--outline:focus:not(:disabled),
  .maz-btn--transparent.maz-btn--outline.maz-active:not(:disabled) {
    background-color: var(--maz-transparent);
    color: #fff;
  }
  .maz-btn--light-grey {
    background-color: var(--maz-light-grey);
  }
  .maz-btn--light-grey:hover,
  .maz-btn--light-grey:focus,
  .maz-btn--light-grey.maz-active {
    background-color: var(--maz-light-grey-darken);
  }
  .maz-btn--light-grey:focus::before,
  .maz-btn--light-grey.maz-active::before {
    border-color: var(--maz-light-grey);
  }
  .maz-btn--light-grey.maz-btn--outline {
    background-color: var(--maz-light-grey-alpha-05);
    color: var(--maz-light-grey);
  }
  .maz-btn--light-grey.maz-btn--outline::after {
    border-color: var(--maz-light-grey);
  }
  .maz-btn--light-grey.maz-btn--outline.maz-btn--rounded::after {
    border-radius: 100px;
  }
  .maz-btn--light-grey.maz-btn--outline:hover:not(:disabled),
  .maz-btn--light-grey.maz-btn--outline:focus:not(:disabled),
  .maz-btn--light-grey.maz-btn--outline.maz-active:not(:disabled) {
    background-color: var(--maz-light-grey);
    color: #fff;
  }
  .maz-btn:disabled {
    background-color: var(--maz-disabled);
    color: var(--maz-grey);
    cursor: not-allowed;
    box-shadow: none;
  }
  .maz-btn:disabled::after {
    border-color: var(--maz-disabled);
  }
  .maz-btn:disabled::before {
    border-color: var(--maz-disabled);
  }
  .maz-btn.maz-btn--white,
  .maz-btn.maz-btn--light {
    color: #212121;
  }
  .maz-btn.maz-btn--white.maz-btn--outline,
  .maz-btn.maz-btn--light.maz-btn--outline {
    color: var(--maz-text-color);
  }
  .maz-btn.maz-btn--white.maz-btn--outline:hover:not(:disabled),
  .maz-btn.maz-btn--white.maz-btn--outline:focus:not(:disabled),
  .maz-btn.maz-btn--white.maz-btn--outline.maz-active,
  .maz-btn.maz-btn--light.maz-btn--outline:hover:not(:disabled),
  .maz-btn.maz-btn--light.maz-btn--outline:focus:not(:disabled),
  .maz-btn.maz-btn--light.maz-btn--outline.maz-active {
    color: #212121;
  }
  .maz-btn.maz-btn--transparent {
    color: var(--maz-text-color);
  }
  .maz-btn.maz-btn--transparent.maz-btn--outline {
    color: var(--maz-text-color);
  }
  .maz-btn.maz-btn--transparent.maz-btn--outline:hover,
  .maz-btn.maz-btn--transparent.maz-btn--outline:focus {
    color: var(--maz-text-color);
    background-color: var(--maz-hover-color);
  }
  .maz-btn.maz-btn--transparent:hover,
  .maz-btn.maz-btn--transparent:focus {
    color: var(--maz-text-color);
    background-color: var(--maz-hover-color);
  }
  .maz-btn.maz-text-hidden {
    color: transparent;
  }
  .maz-is-dark.maz-btn:not(.maz-no-shadow),
  .maz-is-dark .maz-btn:not(.maz-no-shadow) {
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.3);
  }
  .maz-input {
    position: relative;
    background-color: var(--maz-bg-color);
    transition: all 300ms ease-in-out;
    height: 3rem;
    min-height: 3rem;
  }
  .maz-input.is-textarea {
    min-height: 9.375rem !important;
  }
  .maz-input__label {
    position: absolute;
    top: 0.125rem;
    cursor: pointer;
    outline: none;
    left: 0.8571rem;
    transform: translateY(25%);
    opacity: 0;
    transition: all 300ms ease-in-out;
    font-size: 0.786rem;
    color: var(--maz-placeholder-color);
  }
  .maz-input__input {
    cursor: pointer;
    transition-duration: 0.3s;
    position: relative;
    width: 100%;
    padding: 0 0.8571rem;
    color: var(--maz-text-color);
    font-weight: 400;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    outline: none;
    font-size: 1rem;
    z-index: 0;
    background-color: transparent;
    display: block;
    height: 100%;
  }
  .maz-input__input.maz-textarea {
    font-family: var(--maz-base-font-family);
    font-weight: var(--maz-base-font-weight);
    font-size: var(--maz-base-font-size);
    line-height: var(--maz-base-line-height);
    -webkit-font-kerning: normal;
    font-kerning: normal;
    padding: 0.5714rem 0.8571rem 0 0.8571rem;
    resize: vertical;
  }
  .maz-input__input::-webkit-input-placeholder {
    color: var(--maz-placeholder-color);
  }
  .maz-input__input::-moz-placeholder {
    color: var(--maz-placeholder-color);
  }
  .maz-input__input:-ms-input-placeholder {
    color: var(--maz-placeholder-color);
  }
  .maz-input__input::-ms-input-placeholder {
    color: var(--maz-placeholder-color);
  }
  .maz-input__input::placeholder {
    color: var(--maz-placeholder-color);
  }
  .maz-input__icon {
    position: absolute;
    z-index: 1;
    color: var(--maz-icon-color);
    font-size: 1.286rem;
    top: 0;
    bottom: 0;
    cursor: pointer;
  }
  .maz-input__icon.left {
    left: 0.5714rem;
  }
  .maz-input__icon.right {
    right: 0.5714rem;
  }
  .maz-input__toggle-btn {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0.5714rem;
    margin: auto 0;
    width: 1.714rem;
    height: 1.714rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background: transparent;
    color: var(--maz-icon-color);
    border-radius: 1.714rem;
    cursor: pointer;
    font-size: 1rem;
    transition: all 300ms ease-in-out;
  }
  .maz-input__toggle-btn:focus {
    outline: none;
  }
  .maz-input__toggle-btn__icon {
    position: relative;
    font-size: 1.286rem;
  }
  .maz-input__toggle-btn.has-right-icon {
    right: 2.857rem;
  }
  .maz-input__toggle-btn.password.has-clear-btn {
    right: 2.857rem;
  }
  .maz-input__toggle-btn.password.has-clear-btn.has-right-icon {
    right: 5rem;
  }
  .maz-input__toggle-btn:hover {
    color: #fff;
    background-color: var(--maz-icon-color);
  }
  .maz-input.has-left-icon .maz-input__input {
    padding-left: 2.857rem;
  }
  .maz-input.has-left-icon .maz-input__label {
    left: 2.857rem;
  }
  .maz-input.has-1-right-icon .maz-input__input {
    padding-right: 2.5rem;
  }
  .maz-input.has-2-right-icon .maz-input__input {
    padding-right: 4.643rem;
  }
  .maz-input.has-3-right-icon .maz-input__input {
    padding-right: 6.786rem;
  }
  .maz-input.has-value .maz-input__label,
  .maz-input.has-hint .maz-input__label {
    opacity: 1;
    transform: translateY(0);
  }
  .maz-input.has-value:not(.has-no-label).is-textarea,
  .maz-input.has-hint:not(.has-no-label).is-textarea {
    padding-top: 1.429rem;
  }
  .maz-input.has-value:not(.has-no-label) .maz-input__input,
  .maz-input.has-hint:not(.has-no-label) .maz-input__input {
    padding-top: 1rem;
  }
  .maz-input.has-value:not(.has-no-label) .maz-input__input.maz-textarea,
  .maz-input.has-hint:not(.has-no-label) .maz-input__input.maz-textarea {
    transition: all 0ms;
    padding-top: 0;
    min-height: calc(9.375rem - var(--maz-border-width) * 2 - 1.429rem);
  }
  .maz-input.is-disabled {
    cursor: not-allowed;
    background-color: var(--maz-disabled-color);
    border-color: var(--maz-border-color);
  }
  .maz-input.is-disabled:hover,
  .maz-input.is-disabled:focus {
    border-color: var(--maz-border-color);
  }
  .maz-input.is-disabled .maz-input__input {
    color: var(--maz-disabled-color-darken);
  }
  .maz-input.is-disabled .maz-input__input::-webkit-input-placeholder {
    color: var(--maz-disabled-color-darken);
  }
  .maz-input.is-disabled .maz-input__input::-moz-placeholder {
    color: var(--maz-disabled-color-darken);
  }
  .maz-input.is-disabled .maz-input__input:-ms-input-placeholder {
    color: var(--maz-disabled-color-darken);
  }
  .maz-input.is-disabled .maz-input__input::-ms-input-placeholder {
    color: var(--maz-disabled-color-darken);
  }
  .maz-input.is-disabled .maz-input__input::placeholder {
    color: var(--maz-disabled-color-darken);
  }
  .maz-input.is-disabled .maz-input__label,
  .maz-input.is-disabled .maz-input__input,
  .maz-input.is-disabled .maz-input__toggle__arrow {
    cursor: not-allowed;
    color: var(--maz-disabled-color-darken);
  }
  .maz-input--sm {
    height: 2.571rem;
    min-height: 2.571rem;
  }
  .maz-input--sm .maz-input__input {
    font-size: 0.857rem;
  }
  .maz-input--sm .maz-input__label {
    font-size: 0.714rem;
    top: 0.0625rem;
  }
  .maz-input--sm.has-value:not(.has-no-label) .maz-input__input {
    padding-top: 0.8571rem;
  }
  .maz-input--sm.has-value:not(.has-no-label) .maz-input__input.maz-textarea {
    padding-top: 1.286rem;
  }
  .maz-input--lg {
    height: 3.571rem;
    min-height: 3.571rem;
  }
  .maz-input--lg .maz-input__input {
    font-size: 1.143rem;
  }
  .maz-input--lg .maz-input__label {
    font-size: 1rem;
    top: 0.1875rem;
  }
  .maz-input--lg.has-value:not(.has-no-label) .maz-input__input {
    padding-top: 1.143rem;
  }
  .maz-input--lg.has-value:not(.has-no-label) .maz-input__input.maz-textarea {
    padding-top: 1.857rem;
  }
  .maz-input__loader {
    bottom: -var(--maz-border-width) / 2;
    height: var(--maz-border-width);
    left: var(--maz-border-radius);
    width: calc(100% - var(--maz-border-radius) * 2);
    position: absolute;
    overflow: hidden;
    border-radius: var(--maz-border-radius);
  }
  .maz-input__loader.maz-textarea {
    bottom: 0.4286rem;
  }
  .maz-input__loader__progress-bar {
    display: block;
    position: absolute;
    content: '';
    left: -200px;
    width: 200px;
    height: 0.1429rem;
    -webkit-animation: loading 2s linear infinite;
    animation: loading 2s linear infinite;
  }
  .maz-input--primary .maz-input__loader__progress-bar {
    background-color: var(--maz-primary);
  }
  .maz-input--primary.is-focused.maz-input--primary {
    border-color: var(--maz-primary);
  }
  .maz-input--primary.is-focused.maz-input--primary:hover,
  .maz-input--primary.is-focused.maz-input--primary:focus {
    border-color: var(--maz-primary);
  }
  .maz-input--primary.is-focused.maz-input--primary .maz-input__label {
    color: var(--maz-primary);
  }
  .maz-input--primary.is-focused.maz-input--primary .maz-input__icon {
    color: var(--maz-primary);
  }
  .maz-input--primary.is-focused.maz-input--primary .maz-input__icon path.arrow {
    fill: var(--maz-primary);
  }
  .maz-input--secondary .maz-input__loader__progress-bar {
    background-color: var(--maz-secondary);
  }
  .maz-input--secondary.is-focused.maz-input--secondary {
    border-color: var(--maz-secondary);
  }
  .maz-input--secondary.is-focused.maz-input--secondary:hover,
  .maz-input--secondary.is-focused.maz-input--secondary:focus {
    border-color: var(--maz-secondary);
  }
  .maz-input--secondary.is-focused.maz-input--secondary .maz-input__label {
    color: var(--maz-secondary);
  }
  .maz-input--secondary.is-focused.maz-input--secondary .maz-input__icon {
    color: var(--maz-secondary);
  }
  .maz-input--secondary.is-focused.maz-input--secondary .maz-input__icon path.arrow {
    fill: var(--maz-secondary);
  }
  .maz-input--third .maz-input__loader__progress-bar {
    background-color: var(--maz-third);
  }
  .maz-input--third.is-focused.maz-input--third {
    border-color: var(--maz-third);
  }
  .maz-input--third.is-focused.maz-input--third:hover,
  .maz-input--third.is-focused.maz-input--third:focus {
    border-color: var(--maz-third);
  }
  .maz-input--third.is-focused.maz-input--third .maz-input__label {
    color: var(--maz-third);
  }
  .maz-input--third.is-focused.maz-input--third .maz-input__icon {
    color: var(--maz-third);
  }
  .maz-input--third.is-focused.maz-input--third .maz-input__icon path.arrow {
    fill: var(--maz-third);
  }
  .maz-input--success .maz-input__loader__progress-bar {
    background-color: var(--maz-success);
  }
  .maz-input--success.is-focused.maz-input--success {
    border-color: var(--maz-success);
  }
  .maz-input--success.is-focused.maz-input--success:hover,
  .maz-input--success.is-focused.maz-input--success:focus {
    border-color: var(--maz-success);
  }
  .maz-input--success.is-focused.maz-input--success .maz-input__label {
    color: var(--maz-success);
  }
  .maz-input--success.is-focused.maz-input--success .maz-input__icon {
    color: var(--maz-success);
  }
  .maz-input--success.is-focused.maz-input--success .maz-input__icon path.arrow {
    fill: var(--maz-success);
  }
  .maz-input--danger .maz-input__loader__progress-bar {
    background-color: var(--maz-danger);
  }
  .maz-input--danger.is-focused.maz-input--danger {
    border-color: var(--maz-danger);
  }
  .maz-input--danger.is-focused.maz-input--danger:hover,
  .maz-input--danger.is-focused.maz-input--danger:focus {
    border-color: var(--maz-danger);
  }
  .maz-input--danger.is-focused.maz-input--danger .maz-input__label {
    color: var(--maz-danger);
  }
  .maz-input--danger.is-focused.maz-input--danger .maz-input__icon {
    color: var(--maz-danger);
  }
  .maz-input--danger.is-focused.maz-input--danger .maz-input__icon path.arrow {
    fill: var(--maz-danger);
  }
  .maz-input--grey .maz-input__loader__progress-bar {
    background-color: var(--maz-grey);
  }
  .maz-input--grey.is-focused.maz-input--grey {
    border-color: var(--maz-grey);
  }
  .maz-input--grey.is-focused.maz-input--grey:hover,
  .maz-input--grey.is-focused.maz-input--grey:focus {
    border-color: var(--maz-grey);
  }
  .maz-input--grey.is-focused.maz-input--grey .maz-input__label {
    color: var(--maz-grey);
  }
  .maz-input--grey.is-focused.maz-input--grey .maz-input__icon {
    color: var(--maz-grey);
  }
  .maz-input--grey.is-focused.maz-input--grey .maz-input__icon path.arrow {
    fill: var(--maz-grey);
  }
  .maz-input--info .maz-input__loader__progress-bar {
    background-color: var(--maz-info);
  }
  .maz-input--info.is-focused.maz-input--info {
    border-color: var(--maz-info);
  }
  .maz-input--info.is-focused.maz-input--info:hover,
  .maz-input--info.is-focused.maz-input--info:focus {
    border-color: var(--maz-info);
  }
  .maz-input--info.is-focused.maz-input--info .maz-input__label {
    color: var(--maz-info);
  }
  .maz-input--info.is-focused.maz-input--info .maz-input__icon {
    color: var(--maz-info);
  }
  .maz-input--info.is-focused.maz-input--info .maz-input__icon path.arrow {
    fill: var(--maz-info);
  }
  .maz-input--warning .maz-input__loader__progress-bar {
    background-color: var(--maz-warning);
  }
  .maz-input--warning.is-focused.maz-input--warning {
    border-color: var(--maz-warning);
  }
  .maz-input--warning.is-focused.maz-input--warning:hover,
  .maz-input--warning.is-focused.maz-input--warning:focus {
    border-color: var(--maz-warning);
  }
  .maz-input--warning.is-focused.maz-input--warning .maz-input__label {
    color: var(--maz-warning);
  }
  .maz-input--warning.is-focused.maz-input--warning .maz-input__icon {
    color: var(--maz-warning);
  }
  .maz-input--warning.is-focused.maz-input--warning .maz-input__icon path.arrow {
    fill: var(--maz-warning);
  }
  .maz-input--light .maz-input__loader__progress-bar {
    background-color: var(--maz-light);
  }
  .maz-input--light.is-focused.maz-input--light {
    border-color: var(--maz-light);
  }
  .maz-input--light.is-focused.maz-input--light:hover,
  .maz-input--light.is-focused.maz-input--light:focus {
    border-color: var(--maz-light);
  }
  .maz-input--light.is-focused.maz-input--light .maz-input__label {
    color: var(--maz-light);
  }
  .maz-input--light.is-focused.maz-input--light .maz-input__icon {
    color: var(--maz-light);
  }
  .maz-input--light.is-focused.maz-input--light .maz-input__icon path.arrow {
    fill: var(--maz-light);
  }
  .maz-input--dark .maz-input__loader__progress-bar {
    background-color: var(--maz-dark);
  }
  .maz-input--dark.is-focused.maz-input--dark {
    border-color: var(--maz-dark);
  }
  .maz-input--dark.is-focused.maz-input--dark:hover,
  .maz-input--dark.is-focused.maz-input--dark:focus {
    border-color: var(--maz-dark);
  }
  .maz-input--dark.is-focused.maz-input--dark .maz-input__label {
    color: var(--maz-dark);
  }
  .maz-input--dark.is-focused.maz-input--dark .maz-input__icon {
    color: var(--maz-dark);
  }
  .maz-input--dark.is-focused.maz-input--dark .maz-input__icon path.arrow {
    fill: var(--maz-dark);
  }
  .maz-input--default .maz-input__loader__progress-bar {
    background-color: var(--maz-default);
  }
  .maz-input--default.is-focused.maz-input--default {
    border-color: var(--maz-default);
  }
  .maz-input--default.is-focused.maz-input--default:hover,
  .maz-input--default.is-focused.maz-input--default:focus {
    border-color: var(--maz-default);
  }
  .maz-input--default.is-focused.maz-input--default .maz-input__label {
    color: var(--maz-default);
  }
  .maz-input--default.is-focused.maz-input--default .maz-input__icon {
    color: var(--maz-default);
  }
  .maz-input--default.is-focused.maz-input--default .maz-input__icon path.arrow {
    fill: var(--maz-default);
  }
  .maz-input--disabled .maz-input__loader__progress-bar {
    background-color: var(--maz-disabled);
  }
  .maz-input--disabled.is-focused.maz-input--disabled {
    border-color: var(--maz-disabled);
  }
  .maz-input--disabled.is-focused.maz-input--disabled:hover,
  .maz-input--disabled.is-focused.maz-input--disabled:focus {
    border-color: var(--maz-disabled);
  }
  .maz-input--disabled.is-focused.maz-input--disabled .maz-input__label {
    color: var(--maz-disabled);
  }
  .maz-input--disabled.is-focused.maz-input--disabled .maz-input__icon {
    color: var(--maz-disabled);
  }
  .maz-input--disabled.is-focused.maz-input--disabled .maz-input__icon path.arrow {
    fill: var(--maz-disabled);
  }
  .maz-input--white .maz-input__loader__progress-bar {
    background-color: var(--maz-white);
  }
  .maz-input--white.is-focused.maz-input--white {
    border-color: var(--maz-white);
  }
  .maz-input--white.is-focused.maz-input--white:hover,
  .maz-input--white.is-focused.maz-input--white:focus {
    border-color: var(--maz-white);
  }
  .maz-input--white.is-focused.maz-input--white .maz-input__label {
    color: var(--maz-white);
  }
  .maz-input--white.is-focused.maz-input--white .maz-input__icon {
    color: var(--maz-white);
  }
  .maz-input--white.is-focused.maz-input--white .maz-input__icon path.arrow {
    fill: var(--maz-white);
  }
  .maz-input--black .maz-input__loader__progress-bar {
    background-color: var(--maz-black);
  }
  .maz-input--black.is-focused.maz-input--black {
    border-color: var(--maz-black);
  }
  .maz-input--black.is-focused.maz-input--black:hover,
  .maz-input--black.is-focused.maz-input--black:focus {
    border-color: var(--maz-black);
  }
  .maz-input--black.is-focused.maz-input--black .maz-input__label {
    color: var(--maz-black);
  }
  .maz-input--black.is-focused.maz-input--black .maz-input__icon {
    color: var(--maz-black);
  }
  .maz-input--black.is-focused.maz-input--black .maz-input__icon path.arrow {
    fill: var(--maz-black);
  }
  .maz-input--transparent .maz-input__loader__progress-bar {
    background-color: var(--maz-transparent);
  }
  .maz-input--transparent.is-focused.maz-input--transparent {
    border-color: var(--maz-transparent);
  }
  .maz-input--transparent.is-focused.maz-input--transparent:hover,
  .maz-input--transparent.is-focused.maz-input--transparent:focus {
    border-color: var(--maz-transparent);
  }
  .maz-input--transparent.is-focused.maz-input--transparent .maz-input__label {
    color: var(--maz-transparent);
  }
  .maz-input--transparent.is-focused.maz-input--transparent .maz-input__icon {
    color: var(--maz-transparent);
  }
  .maz-input--transparent.is-focused.maz-input--transparent .maz-input__icon path.arrow {
    fill: var(--maz-transparent);
  }
  .maz-input--light-grey .maz-input__loader__progress-bar {
    background-color: var(--maz-light-grey);
  }
  .maz-input--light-grey.is-focused.maz-input--light-grey {
    border-color: var(--maz-light-grey);
  }
  .maz-input--light-grey.is-focused.maz-input--light-grey:hover,
  .maz-input--light-grey.is-focused.maz-input--light-grey:focus {
    border-color: var(--maz-light-grey);
  }
  .maz-input--light-grey.is-focused.maz-input--light-grey .maz-input__label {
    color: var(--maz-light-grey);
  }
  .maz-input--light-grey.is-focused.maz-input--light-grey .maz-input__icon {
    color: var(--maz-light-grey);
  }
  .maz-input--light-grey.is-focused.maz-input--light-grey .maz-input__icon path.arrow {
    fill: var(--maz-light-grey);
  }
  .maz-input.is-valid,
  .maz-input.is-focused.is-valid {
    border-color: var(--maz-success);
  }
  .maz-input.is-valid:hover,
  .maz-input.is-valid:focus,
  .maz-input.is-focused.is-valid:hover,
  .maz-input.is-focused.is-valid:focus {
    border-color: var(--maz-success);
  }
  .maz-input.is-valid .maz-input__label,
  .maz-input.is-focused.is-valid .maz-input__label {
    color: var(--maz-success);
  }
  .maz-input.is-valid .maz-input__icon,
  .maz-input.is-focused.is-valid .maz-input__icon {
    color: var(--maz-success);
  }
  .maz-input.is-valid .maz-input__icon path.arrow,
  .maz-input.is-focused.is-valid .maz-input__icon path.arrow {
    fill: var(--maz-success);
  }
  .maz-input.has-warning,
  .maz-input.is-focused.has-warning {
    border-color: var(--maz-warning);
  }
  .maz-input.has-warning:hover,
  .maz-input.has-warning:focus,
  .maz-input.is-focused.has-warning:hover,
  .maz-input.is-focused.has-warning:focus {
    border-color: var(--maz-warning);
  }
  .maz-input.has-warning .maz-input__label,
  .maz-input.is-focused.has-warning .maz-input__label {
    color: var(--maz-warning);
  }
  .maz-input.has-warning .maz-input__icon,
  .maz-input.is-focused.has-warning .maz-input__icon {
    color: var(--maz-warning);
  }
  .maz-input.has-warning .maz-input__icon path.arrow,
  .maz-input.is-focused.has-warning .maz-input__icon path.arrow {
    fill: var(--maz-warning);
  }
  .maz-input.has-error,
  .maz-input.is-focused.has-error {
    border-color: var(--maz-danger);
  }
  .maz-input.has-error:hover,
  .maz-input.has-error:focus,
  .maz-input.is-focused.has-error:hover,
  .maz-input.is-focused.has-error:focus {
    border-color: var(--maz-danger);
  }
  .maz-input.has-error .maz-input__label,
  .maz-input.is-focused.has-error .maz-input__label {
    color: var(--maz-danger);
  }
  .maz-input.has-error .maz-input__icon,
  .maz-input.is-focused.has-error .maz-input__icon {
    color: var(--maz-danger);
  }
  .maz-input.has-error .maz-input__icon path.arrow,
  .maz-input.is-focused.has-error .maz-input__icon path.arrow {
    fill: var(--maz-danger);
  }
  .maz-input input:-webkit-autofill,
  .maz-input input:-webkit-autofill:hover,
  .maz-input input:-webkit-autofill:focus,
  .maz-input textarea:-webkit-autofill,
  .maz-input textarea:-webkit-autofill:hover,
  .maz-input textarea:-webkit-autofill:focus,
  .maz-input select:-webkit-autofill,
  .maz-input select:-webkit-autofill:hover,
  .maz-input select:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--maz-text-color);
    box-shadow: 0 0 0 1000px var(--maz-bg-color) inset;
  }
  .maz-is-dark .maz-input,
  .maz-is-dark.maz-input {
    background-color: var(--maz-bg-color-light);
  }
  .maz-gallery {
    position: relative;
    overflow: hidden;
  }
  .maz-gallery__hidden {
    display: none;
  }
  .maz-gallery__item {
    position: absolute;
    top: 0;
    height: 50%;
    padding: 0;
    width: 100%;
    border-left: var(--maz-border-width) solid transparent;
    overflow: hidden;
  }
  .maz-gallery__item--1 {
    left: 0;
    height: 100%;
  }
  .maz-gallery__item--1:not(:last-child) {
    width: 50%;
  }
  .maz-gallery__item--2 {
    left: 50%;
    width: 50%;
    height: 50%;
  }
  .maz-gallery__item--2:last-child {
    height: 100%;
  }
  .maz-gallery__item--2:nth-last-child(4) {
    width: 25%;
  }
  .maz-gallery__item--3 {
    top: 50%;
    left: 50%;
    width: 25%;
  }
  .maz-gallery__item--3:last-child {
    width: 50%;
  }
  .maz-gallery__item--3:nth-last-child(3) {
    top: 0;
    left: 75%;
  }
  .maz-gallery__item--4 {
    top: 50%;
    left: 50%;
    width: 25%;
    border-top: var(--maz-border-width) solid transparent;
  }
  .maz-gallery__item--4:last-child {
    left: 75%;
    width: 25%;
  }
  .maz-gallery__item--5 {
    top: 50%;
    left: 75%;
    width: 25%;
    border-top: var(--maz-border-width) solid transparent;
  }
  .maz-gallery__item:first-child {
    border-left: 0;
  }
  .maz-gallery__item--3:last-child,
  .maz-gallery__item--3:nth-last-child(2),
  .maz-gallery__item--4:last-child,
  .maz-gallery__item--5 {
    border-top: var(--maz-border-width) solid transparent;
  }
  .maz-gallery__item__image {
    height: 100%;
    max-width: 100%;
    width: 100%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.05);
  }
  .maz-gallery__remaining-layer {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .maz-gallery__remaining-layer span {
    color: #fff;
    font-size: 2rem;
  }
  .maz-loader {
    height: 100px;
  }
  .maz-loader__anim {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
    -webkit-animation: custom-loader-anim 10s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    animation: custom-loader-anim 10s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
  .maz-loader__anim div {
    -webkit-animation: custom-loader-anim 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    animation: custom-loader-anim 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 32px 32px;
  }
  .maz-loader__anim div::after {
    content: ' ';
    display: block;
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--maz-primary);
    margin: -3px 0 0 -3px;
  }
  .maz-loader__anim div:nth-child(1) {
    -webkit-animation-delay: -0.036s;
    animation-delay: -0.036s;
  }
  .maz-loader__anim div:nth-child(1)::after {
    top: 50px;
    left: 50px;
  }
  .maz-loader__anim div:nth-child(2) {
    -webkit-animation-delay: -0.072s;
    animation-delay: -0.072s;
  }
  .maz-loader__anim div:nth-child(2)::after {
    top: 54px;
    left: 45px;
  }
  .maz-loader__anim div:nth-child(3) {
    -webkit-animation-delay: -0.108s;
    animation-delay: -0.108s;
  }
  .maz-loader__anim div:nth-child(3)::after {
    top: 57px;
    left: 39px;
  }
  .maz-loader__anim div:nth-child(4) {
    -webkit-animation-delay: -0.144s;
    animation-delay: -0.144s;
  }
  .maz-loader__anim div:nth-child(4)::after {
    top: 58px;
    left: 32px;
  }
  .maz-loader__anim div:nth-child(5) {
    -webkit-animation-delay: -0.18s;
    animation-delay: -0.18s;
  }
  .maz-loader__anim div:nth-child(5)::after {
    top: 57px;
    left: 25px;
  }
  .maz-loader__anim div:nth-child(6) {
    -webkit-animation-delay: -0.216s;
    animation-delay: -0.216s;
  }
  .maz-loader__anim div:nth-child(6)::after {
    top: 54px;
    left: 19px;
  }
  .maz-loader__anim div:nth-child(7) {
    -webkit-animation-delay: -0.252s;
    animation-delay: -0.252s;
  }
  .maz-loader__anim div:nth-child(7)::after {
    top: 50px;
    left: 14px;
  }
  .maz-loader__anim div:nth-child(8) {
    -webkit-animation-delay: -0.288s;
    animation-delay: -0.288s;
  }
  .maz-loader__anim div:nth-child(8)::after {
    top: 45px;
    left: 10px;
  }
  @-webkit-keyframes custom-loader-anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes custom-loader-anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .maz-is-dark .maz-loader .maz-loader__anim div::after,
  .maz-is-dark.maz-loader .maz-loader__anim div::after {
    background-color: #fff;
  }
  .maz-select {
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .maz-select--sm {
    font-size: 0.857rem;
  }
  .maz-select--lg {
    font-size: 1.143rem;
  }
  .maz-select__toggle {
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
    outline: none;
    height: 24px;
  }
  .maz-select__toggle__arrow {
    color: var(--maz-icon-color);
  }
  .maz-select__toggle__arrow .arrow {
    fill: var(--maz-icon-color);
  }
  .maz-select__tags {
    overflow-y: hidden;
    overflow-x: auto;
    position: absolute;
    top: 5px;
    left: 8px;
    bottom: 5px;
    z-index: 1;
    padding-left: 2px;
    max-width: calc(100% - 80px);
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .maz-select__tags::-webkit-scrollbar {
    display: none;
  }
  .maz-select__tags.maz-left-offset {
    left: 40px;
  }
  .maz-select__tag {
    margin-right: 4px;
    border-radius: calc(var(--maz-border-radius) / 2);
    color: #fff;
    height: 100%;
    padding-right: 0.2857rem;
    padding-left: 0.5rem;
    box-shadow: none !important;
  }
  .maz-select__tag__text {
    font-size: 0.875rem;
    margin-right: 5px;
    white-space: nowrap;
  }
  .maz-select__tag__clear {
    font-size: 1.2rem;
  }
  .maz-select__tag.maz-btn--sm {
    font-size: 1.143rem;
  }
  .maz-select__tag.maz-btn--lg {
    padding-left: 0.7143rem;
    padding-right: 0.3571rem;
  }
  .maz-select__tag.maz-btn::before {
    border: none;
  }
  .maz-select__options-list {
    z-index: 9;
    padding: 0;
    margin: 0;
    position: absolute;
    overflow: hidden;
    border-radius: var(--maz-border-radius);
    background-color: var(--maz-bg-color);
  }
  .maz-select__options-list:not(.maz-select__options-list--top) {
    top: 100%;
  }
  .maz-select__options-list--top {
    bottom: 100%;
  }
  .maz-select__options-list--right {
    right: 0;
  }
  .maz-select__options-list__items {
    overflow-y: auto;
    overflow-x: hidden;
  }
  .maz-select__options-list__item {
    padding: 0 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 1em;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: var(--maz-text-color);
    outline: none;
    transition: all 300ms ease-in-out;
  }
  .maz-select__options-list__item:hover,
  .maz-select__options-list__item.keyboard-selected {
    background-color: var(--maz-hover-color);
  }
  .maz-select__options-list__no-results i {
    font-size: 2.3rem;
  }
  .maz-select.has-list-open .maz-select__toggle {
    transform: rotate(180deg);
  }
  .maz-select--primary .maz-select__options-list__item.selected {
    background-color: var(--maz-primary);
  }
  .maz-select--primary .maz-select__options-list__item.selected:hover {
    background-color: var(--maz-primary);
  }
  .maz-select--primary .maz-select__options-list__item.selected.keyboard-selected {
    background-color: var(--maz-primary);
  }
  .maz-select--secondary .maz-select__options-list__item.selected {
    background-color: var(--maz-secondary);
  }
  .maz-select--secondary .maz-select__options-list__item.selected:hover {
    background-color: var(--maz-secondary);
  }
  .maz-select--secondary .maz-select__options-list__item.selected.keyboard-selected {
    background-color: var(--maz-secondary);
  }
  .maz-select--third .maz-select__options-list__item.selected {
    background-color: var(--maz-third);
  }
  .maz-select--third .maz-select__options-list__item.selected:hover {
    background-color: var(--maz-third);
  }
  .maz-select--third .maz-select__options-list__item.selected.keyboard-selected {
    background-color: var(--maz-third);
  }
  .maz-select--success .maz-select__options-list__item.selected {
    background-color: var(--maz-success);
  }
  .maz-select--success .maz-select__options-list__item.selected:hover {
    background-color: var(--maz-success);
  }
  .maz-select--success .maz-select__options-list__item.selected.keyboard-selected {
    background-color: var(--maz-success);
  }
  .maz-select--danger .maz-select__options-list__item.selected {
    background-color: var(--maz-danger);
  }
  .maz-select--danger .maz-select__options-list__item.selected:hover {
    background-color: var(--maz-danger);
  }
  .maz-select--danger .maz-select__options-list__item.selected.keyboard-selected {
    background-color: var(--maz-danger);
  }
  .maz-select--grey .maz-select__options-list__item.selected {
    background-color: var(--maz-grey);
  }
  .maz-select--grey .maz-select__options-list__item.selected:hover {
    background-color: var(--maz-grey);
  }
  .maz-select--grey .maz-select__options-list__item.selected.keyboard-selected {
    background-color: var(--maz-grey);
  }
  .maz-select--info .maz-select__options-list__item.selected {
    background-color: var(--maz-info);
  }
  .maz-select--info .maz-select__options-list__item.selected:hover {
    background-color: var(--maz-info);
  }
  .maz-select--info .maz-select__options-list__item.selected.keyboard-selected {
    background-color: var(--maz-info);
  }
  .maz-select--warning .maz-select__options-list__item.selected {
    background-color: var(--maz-warning);
  }
  .maz-select--warning .maz-select__options-list__item.selected:hover {
    background-color: var(--maz-warning);
  }
  .maz-select--warning .maz-select__options-list__item.selected.keyboard-selected {
    background-color: var(--maz-warning);
  }
  .maz-select--light .maz-select__options-list__item.selected {
    background-color: var(--maz-light);
  }
  .maz-select--light .maz-select__options-list__item.selected:hover {
    background-color: var(--maz-light);
  }
  .maz-select--light .maz-select__options-list__item.selected.keyboard-selected {
    background-color: var(--maz-light);
  }
  .maz-select--dark .maz-select__options-list__item.selected {
    background-color: var(--maz-dark);
  }
  .maz-select--dark .maz-select__options-list__item.selected:hover {
    background-color: var(--maz-dark);
  }
  .maz-select--dark .maz-select__options-list__item.selected.keyboard-selected {
    background-color: var(--maz-dark);
  }
  .maz-select--default .maz-select__options-list__item.selected {
    background-color: var(--maz-default);
  }
  .maz-select--default .maz-select__options-list__item.selected:hover {
    background-color: var(--maz-default);
  }
  .maz-select--default .maz-select__options-list__item.selected.keyboard-selected {
    background-color: var(--maz-default);
  }
  .maz-select--disabled .maz-select__options-list__item.selected {
    background-color: var(--maz-disabled);
  }
  .maz-select--disabled .maz-select__options-list__item.selected:hover {
    background-color: var(--maz-disabled);
  }
  .maz-select--disabled .maz-select__options-list__item.selected.keyboard-selected {
    background-color: var(--maz-disabled);
  }
  .maz-select--white .maz-select__options-list__item.selected {
    background-color: var(--maz-white);
  }
  .maz-select--white .maz-select__options-list__item.selected:hover {
    background-color: var(--maz-white);
  }
  .maz-select--white .maz-select__options-list__item.selected.keyboard-selected {
    background-color: var(--maz-white);
  }
  .maz-select--black .maz-select__options-list__item.selected {
    background-color: var(--maz-black);
  }
  .maz-select--black .maz-select__options-list__item.selected:hover {
    background-color: var(--maz-black);
  }
  .maz-select--black .maz-select__options-list__item.selected.keyboard-selected {
    background-color: var(--maz-black);
  }
  .maz-select--transparent .maz-select__options-list__item.selected {
    background-color: var(--maz-transparent);
  }
  .maz-select--transparent .maz-select__options-list__item.selected:hover {
    background-color: var(--maz-transparent);
  }
  .maz-select--transparent .maz-select__options-list__item.selected.keyboard-selected {
    background-color: var(--maz-transparent);
  }
  .maz-select--light-grey .maz-select__options-list__item.selected {
    background-color: var(--maz-light-grey);
  }
  .maz-select--light-grey .maz-select__options-list__item.selected:hover {
    background-color: var(--maz-light-grey);
  }
  .maz-select--light-grey .maz-select__options-list__item.selected.keyboard-selected {
    background-color: var(--maz-light-grey);
  }
  .maz-spinner.spinner-anim__white path {
    fill: #fff;
  }
  .maz-transition-expand,
  .maz-transition-expand * {
    will-change: height;
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    perspective: 1000px;
  }
  .maz-badge,
  .maz-label {
    background: var(--maz-primary);
    border: var(--maz-border-width) solid var(--maz-primary);
    border-radius: var(--maz-border-radius);
    font-size: 1rem;
    padding: 0.3em 0.75em;
    color: #fff;
    box-shadow: 0 2px 5px 0 rgba(3, 6, 26, 0.15);
  }
  .maz-badge--xl,
  .maz-label--xl {
    font-size: 1.375rem;
  }
  .maz-badge--lg,
  .maz-label--lg {
    font-size: 1.125rem;
  }
  .maz-badge--md,
  .maz-label--md {
    font-size: 1rem;
  }
  .maz-badge--sm,
  .maz-label--sm {
    font-size: 0.875rem;
  }
  .maz-badge--mini,
  .maz-label--mini {
    font-size: 0.75rem;
  }
  .maz-badge--rounded,
  .maz-label--rounded {
    border-radius: 100px;
  }
  .maz-badge--outline,
  .maz-label--outline {
    background-color: transparent;
    border: var(--maz-border-width) solid var(--maz-primary);
    color: var(--maz-primary);
    box-shadow: none;
  }
  .maz-badge--primary,
  .maz-label--primary {
    background-color: var(--maz-primary);
    border-color: var(--maz-primary);
    color: #fff;
  }
  .maz-badge--primary--outline,
  .maz-label--primary--outline {
    background-color: transparent;
    border-color: var(--maz-primary);
    color: var(--maz-primary);
    box-shadow: none;
  }
  .maz-badge--secondary,
  .maz-label--secondary {
    background-color: var(--maz-secondary);
    border-color: var(--maz-secondary);
    color: #fff;
  }
  .maz-badge--secondary--outline,
  .maz-label--secondary--outline {
    background-color: transparent;
    border-color: var(--maz-secondary);
    color: var(--maz-secondary);
    box-shadow: none;
  }
  .maz-badge--third,
  .maz-label--third {
    background-color: var(--maz-third);
    border-color: var(--maz-third);
    color: #fff;
  }
  .maz-badge--third--outline,
  .maz-label--third--outline {
    background-color: transparent;
    border-color: var(--maz-third);
    color: var(--maz-third);
    box-shadow: none;
  }
  .maz-badge--success,
  .maz-label--success {
    background-color: var(--maz-success);
    border-color: var(--maz-success);
    color: #fff;
  }
  .maz-badge--success--outline,
  .maz-label--success--outline {
    background-color: transparent;
    border-color: var(--maz-success);
    color: var(--maz-success);
    box-shadow: none;
  }
  .maz-badge--danger,
  .maz-label--danger {
    background-color: var(--maz-danger);
    border-color: var(--maz-danger);
    color: #fff;
  }
  .maz-badge--danger--outline,
  .maz-label--danger--outline {
    background-color: transparent;
    border-color: var(--maz-danger);
    color: var(--maz-danger);
    box-shadow: none;
  }
  .maz-badge--grey,
  .maz-label--grey {
    background-color: var(--maz-grey);
    border-color: var(--maz-grey);
    color: #fff;
  }
  .maz-badge--grey--outline,
  .maz-label--grey--outline {
    background-color: transparent;
    border-color: var(--maz-grey);
    color: var(--maz-grey);
    box-shadow: none;
  }
  .maz-badge--info,
  .maz-label--info {
    background-color: var(--maz-info);
    border-color: var(--maz-info);
    color: #fff;
  }
  .maz-badge--info--outline,
  .maz-label--info--outline {
    background-color: transparent;
    border-color: var(--maz-info);
    color: var(--maz-info);
    box-shadow: none;
  }
  .maz-badge--warning,
  .maz-label--warning {
    background-color: var(--maz-warning);
    border-color: var(--maz-warning);
    color: #fff;
  }
  .maz-badge--warning--outline,
  .maz-label--warning--outline {
    background-color: transparent;
    border-color: var(--maz-warning);
    color: var(--maz-warning);
    box-shadow: none;
  }
  .maz-badge--light,
  .maz-label--light {
    background-color: var(--maz-light);
    border-color: var(--maz-light);
    color: #fff;
  }
  .maz-badge--light--outline,
  .maz-label--light--outline {
    background-color: transparent;
    border-color: var(--maz-light);
    color: var(--maz-light);
    box-shadow: none;
  }
  .maz-badge--dark,
  .maz-label--dark {
    background-color: var(--maz-dark);
    border-color: var(--maz-dark);
    color: #fff;
  }
  .maz-badge--dark--outline,
  .maz-label--dark--outline {
    background-color: transparent;
    border-color: var(--maz-dark);
    color: var(--maz-dark);
    box-shadow: none;
  }
  .maz-badge--default,
  .maz-label--default {
    background-color: var(--maz-default);
    border-color: var(--maz-default);
    color: #fff;
  }
  .maz-badge--default--outline,
  .maz-label--default--outline {
    background-color: transparent;
    border-color: var(--maz-default);
    color: var(--maz-default);
    box-shadow: none;
  }
  .maz-badge--disabled,
  .maz-label--disabled {
    background-color: var(--maz-disabled);
    border-color: var(--maz-disabled);
    color: #fff;
  }
  .maz-badge--disabled--outline,
  .maz-label--disabled--outline {
    background-color: transparent;
    border-color: var(--maz-disabled);
    color: var(--maz-disabled);
    box-shadow: none;
  }
  .maz-badge--white,
  .maz-label--white {
    background-color: var(--maz-white);
    border-color: var(--maz-white);
    color: #fff;
  }
  .maz-badge--white--outline,
  .maz-label--white--outline {
    background-color: transparent;
    border-color: var(--maz-white);
    color: var(--maz-white);
    box-shadow: none;
  }
  .maz-badge--black,
  .maz-label--black {
    background-color: var(--maz-black);
    border-color: var(--maz-black);
    color: #fff;
  }
  .maz-badge--black--outline,
  .maz-label--black--outline {
    background-color: transparent;
    border-color: var(--maz-black);
    color: var(--maz-black);
    box-shadow: none;
  }
  .maz-badge--transparent,
  .maz-label--transparent {
    background-color: var(--maz-transparent);
    border-color: var(--maz-transparent);
    color: #fff;
  }
  .maz-badge--transparent--outline,
  .maz-label--transparent--outline {
    background-color: transparent;
    border-color: var(--maz-transparent);
    color: var(--maz-transparent);
    box-shadow: none;
  }
  .maz-badge--light-grey,
  .maz-label--light-grey {
    background-color: var(--maz-light-grey);
    border-color: var(--maz-light-grey);
    color: #fff;
  }
  .maz-badge--light-grey--outline,
  .maz-label--light-grey--outline {
    background-color: transparent;
    border-color: var(--maz-light-grey);
    color: var(--maz-light-grey);
    box-shadow: none;
  }
  table.maz-md {
    font-family: var(--maz-base-font-family);
    font-weight: var(--maz-base-font-weight);
    font-size: var(--maz-base-font-size);
    line-height: var(--maz-base-line-height);
    -webkit-font-kerning: normal;
    font-kerning: normal;
    border-spacing: 0;
    border-radius: var(--maz-border-radius);
    border-collapse: collapse;
    table-layout: fixed;
    overflow-wrap: break-word;
    overflow: hidden;
    word-break: break-all;
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 1rem;
    box-shadow: var(--maz-elevation);
  }
  table.maz-md tr {
    width: 100%;
  }
  table.maz-md tr th,
  table.maz-md tr td {
    padding: 6px 13px;
    text-align: left;
  }
  table.maz-md tr:nth-child(2n) {
    background-color: var(--maz-hover-color);
  }
  .maz-dot {
    font-size: 1rem;
    width: 0.4286em;
    height: 0.4286em;
    border-radius: 0.4286em;
    border: var(--maz-border-width) solid var(--maz-primary);
    background-color: var(--maz-primary);
    display: inline-block;
  }
  .maz-dot--outline {
    background-color: transparent;
    color: var(--maz-primary);
  }
  .maz-dot--primary {
    background-color: var(--maz-primary);
    border-color: var(--maz-primary);
  }
  .maz-dot--primary--outline {
    background-color: transparent;
    border: var(--maz-border-width) solid var(--maz-primary);
    color: var(--maz-primary);
  }
  .maz-dot--secondary {
    background-color: var(--maz-secondary);
    border-color: var(--maz-secondary);
  }
  .maz-dot--secondary--outline {
    background-color: transparent;
    border: var(--maz-border-width) solid var(--maz-secondary);
    color: var(--maz-secondary);
  }
  .maz-dot--third {
    background-color: var(--maz-third);
    border-color: var(--maz-third);
  }
  .maz-dot--third--outline {
    background-color: transparent;
    border: var(--maz-border-width) solid var(--maz-third);
    color: var(--maz-third);
  }
  .maz-dot--success {
    background-color: var(--maz-success);
    border-color: var(--maz-success);
  }
  .maz-dot--success--outline {
    background-color: transparent;
    border: var(--maz-border-width) solid var(--maz-success);
    color: var(--maz-success);
  }
  .maz-dot--danger {
    background-color: var(--maz-danger);
    border-color: var(--maz-danger);
  }
  .maz-dot--danger--outline {
    background-color: transparent;
    border: var(--maz-border-width) solid var(--maz-danger);
    color: var(--maz-danger);
  }
  .maz-dot--grey {
    background-color: var(--maz-grey);
    border-color: var(--maz-grey);
  }
  .maz-dot--grey--outline {
    background-color: transparent;
    border: var(--maz-border-width) solid var(--maz-grey);
    color: var(--maz-grey);
  }
  .maz-dot--info {
    background-color: var(--maz-info);
    border-color: var(--maz-info);
  }
  .maz-dot--info--outline {
    background-color: transparent;
    border: var(--maz-border-width) solid var(--maz-info);
    color: var(--maz-info);
  }
  .maz-dot--warning {
    background-color: var(--maz-warning);
    border-color: var(--maz-warning);
  }
  .maz-dot--warning--outline {
    background-color: transparent;
    border: var(--maz-border-width) solid var(--maz-warning);
    color: var(--maz-warning);
  }
  .maz-dot--light {
    background-color: var(--maz-light);
    border-color: var(--maz-light);
  }
  .maz-dot--light--outline {
    background-color: transparent;
    border: var(--maz-border-width) solid var(--maz-light);
    color: var(--maz-light);
  }
  .maz-dot--dark {
    background-color: var(--maz-dark);
    border-color: var(--maz-dark);
  }
  .maz-dot--dark--outline {
    background-color: transparent;
    border: var(--maz-border-width) solid var(--maz-dark);
    color: var(--maz-dark);
  }
  .maz-dot--default {
    background-color: var(--maz-default);
    border-color: var(--maz-default);
  }
  .maz-dot--default--outline {
    background-color: transparent;
    border: var(--maz-border-width) solid var(--maz-default);
    color: var(--maz-default);
  }
  .maz-dot--disabled {
    background-color: var(--maz-disabled);
    border-color: var(--maz-disabled);
  }
  .maz-dot--disabled--outline {
    background-color: transparent;
    border: var(--maz-border-width) solid var(--maz-disabled);
    color: var(--maz-disabled);
  }
  .maz-dot--white {
    background-color: var(--maz-white);
    border-color: var(--maz-white);
  }
  .maz-dot--white--outline {
    background-color: transparent;
    border: var(--maz-border-width) solid var(--maz-white);
    color: var(--maz-white);
  }
  .maz-dot--black {
    background-color: var(--maz-black);
    border-color: var(--maz-black);
  }
  .maz-dot--black--outline {
    background-color: transparent;
    border: var(--maz-border-width) solid var(--maz-black);
    color: var(--maz-black);
  }
  .maz-dot--transparent {
    background-color: var(--maz-transparent);
    border-color: var(--maz-transparent);
  }
  .maz-dot--transparent--outline {
    background-color: transparent;
    border: var(--maz-border-width) solid var(--maz-transparent);
    color: var(--maz-transparent);
  }
  .maz-dot--light-grey {
    background-color: var(--maz-light-grey);
    border-color: var(--maz-light-grey);
  }
  .maz-dot--light-grey--outline {
    background-color: transparent;
    border: var(--maz-border-width) solid var(--maz-light-grey);
    color: var(--maz-light-grey);
  }
  .maz-bg-primary {
    background-color: var(--maz-primary);
  }
  .maz-bg-primary-after::after {
    background-color: var(--maz-primary);
  }
  .maz-bg-primary-before::before {
    background-color: var(--maz-primary);
  }
  .maz-bg-primary-transparency {
    background-color: var(--maz-primary-alpha-50);
  }
  .maz-bg-primary-after-transparency::after {
    background-color: var(--maz-primary-alpha-50);
  }
  .maz-bg-primary-before-transparency::before {
    background-color: var(--maz-primary-alpha-50);
  }
  .maz-bg-secondary {
    background-color: var(--maz-secondary);
  }
  .maz-bg-secondary-after::after {
    background-color: var(--maz-secondary);
  }
  .maz-bg-secondary-before::before {
    background-color: var(--maz-secondary);
  }
  .maz-bg-secondary-transparency {
    background-color: var(--maz-secondary-alpha-50);
  }
  .maz-bg-secondary-after-transparency::after {
    background-color: var(--maz-secondary-alpha-50);
  }
  .maz-bg-secondary-before-transparency::before {
    background-color: var(--maz-secondary-alpha-50);
  }
  .maz-bg-third {
    background-color: var(--maz-third);
  }
  .maz-bg-third-after::after {
    background-color: var(--maz-third);
  }
  .maz-bg-third-before::before {
    background-color: var(--maz-third);
  }
  .maz-bg-third-transparency {
    background-color: var(--maz-third-alpha-50);
  }
  .maz-bg-third-after-transparency::after {
    background-color: var(--maz-third-alpha-50);
  }
  .maz-bg-third-before-transparency::before {
    background-color: var(--maz-third-alpha-50);
  }
  .maz-bg-success {
    background-color: var(--maz-success);
  }
  .maz-bg-success-after::after {
    background-color: var(--maz-success);
  }
  .maz-bg-success-before::before {
    background-color: var(--maz-success);
  }
  .maz-bg-success-transparency {
    background-color: var(--maz-success-alpha-50);
  }
  .maz-bg-success-after-transparency::after {
    background-color: var(--maz-success-alpha-50);
  }
  .maz-bg-success-before-transparency::before {
    background-color: var(--maz-success-alpha-50);
  }
  .maz-bg-danger {
    background-color: var(--maz-danger);
  }
  .maz-bg-danger-after::after {
    background-color: var(--maz-danger);
  }
  .maz-bg-danger-before::before {
    background-color: var(--maz-danger);
  }
  .maz-bg-danger-transparency {
    background-color: var(--maz-danger-alpha-50);
  }
  .maz-bg-danger-after-transparency::after {
    background-color: var(--maz-danger-alpha-50);
  }
  .maz-bg-danger-before-transparency::before {
    background-color: var(--maz-danger-alpha-50);
  }
  .maz-bg-grey {
    background-color: var(--maz-grey);
  }
  .maz-bg-grey-after::after {
    background-color: var(--maz-grey);
  }
  .maz-bg-grey-before::before {
    background-color: var(--maz-grey);
  }
  .maz-bg-grey-transparency {
    background-color: var(--maz-grey-alpha-50);
  }
  .maz-bg-grey-after-transparency::after {
    background-color: var(--maz-grey-alpha-50);
  }
  .maz-bg-grey-before-transparency::before {
    background-color: var(--maz-grey-alpha-50);
  }
  .maz-bg-info {
    background-color: var(--maz-info);
  }
  .maz-bg-info-after::after {
    background-color: var(--maz-info);
  }
  .maz-bg-info-before::before {
    background-color: var(--maz-info);
  }
  .maz-bg-info-transparency {
    background-color: var(--maz-info-alpha-50);
  }
  .maz-bg-info-after-transparency::after {
    background-color: var(--maz-info-alpha-50);
  }
  .maz-bg-info-before-transparency::before {
    background-color: var(--maz-info-alpha-50);
  }
  .maz-bg-warning {
    background-color: var(--maz-warning);
  }
  .maz-bg-warning-after::after {
    background-color: var(--maz-warning);
  }
  .maz-bg-warning-before::before {
    background-color: var(--maz-warning);
  }
  .maz-bg-warning-transparency {
    background-color: var(--maz-warning-alpha-50);
  }
  .maz-bg-warning-after-transparency::after {
    background-color: var(--maz-warning-alpha-50);
  }
  .maz-bg-warning-before-transparency::before {
    background-color: var(--maz-warning-alpha-50);
  }
  .maz-bg-light {
    background-color: var(--maz-light);
  }
  .maz-bg-light-after::after {
    background-color: var(--maz-light);
  }
  .maz-bg-light-before::before {
    background-color: var(--maz-light);
  }
  .maz-bg-light-transparency {
    background-color: var(--maz-light-alpha-50);
  }
  .maz-bg-light-after-transparency::after {
    background-color: var(--maz-light-alpha-50);
  }
  .maz-bg-light-before-transparency::before {
    background-color: var(--maz-light-alpha-50);
  }
  .maz-bg-dark {
    background-color: var(--maz-dark);
  }
  .maz-bg-dark-after::after {
    background-color: var(--maz-dark);
  }
  .maz-bg-dark-before::before {
    background-color: var(--maz-dark);
  }
  .maz-bg-dark-transparency {
    background-color: var(--maz-dark-alpha-50);
  }
  .maz-bg-dark-after-transparency::after {
    background-color: var(--maz-dark-alpha-50);
  }
  .maz-bg-dark-before-transparency::before {
    background-color: var(--maz-dark-alpha-50);
  }
  .maz-bg-default {
    background-color: var(--maz-default);
  }
  .maz-bg-default-after::after {
    background-color: var(--maz-default);
  }
  .maz-bg-default-before::before {
    background-color: var(--maz-default);
  }
  .maz-bg-default-transparency {
    background-color: var(--maz-default-alpha-50);
  }
  .maz-bg-default-after-transparency::after {
    background-color: var(--maz-default-alpha-50);
  }
  .maz-bg-default-before-transparency::before {
    background-color: var(--maz-default-alpha-50);
  }
  .maz-bg-disabled {
    background-color: var(--maz-disabled);
  }
  .maz-bg-disabled-after::after {
    background-color: var(--maz-disabled);
  }
  .maz-bg-disabled-before::before {
    background-color: var(--maz-disabled);
  }
  .maz-bg-disabled-transparency {
    background-color: var(--maz-disabled-alpha-50);
  }
  .maz-bg-disabled-after-transparency::after {
    background-color: var(--maz-disabled-alpha-50);
  }
  .maz-bg-disabled-before-transparency::before {
    background-color: var(--maz-disabled-alpha-50);
  }
  .maz-bg-white {
    background-color: var(--maz-white);
  }
  .maz-bg-white-after::after {
    background-color: var(--maz-white);
  }
  .maz-bg-white-before::before {
    background-color: var(--maz-white);
  }
  .maz-bg-white-transparency {
    background-color: var(--maz-white-alpha-50);
  }
  .maz-bg-white-after-transparency::after {
    background-color: var(--maz-white-alpha-50);
  }
  .maz-bg-white-before-transparency::before {
    background-color: var(--maz-white-alpha-50);
  }
  .maz-bg-black {
    background-color: var(--maz-black);
  }
  .maz-bg-black-after::after {
    background-color: var(--maz-black);
  }
  .maz-bg-black-before::before {
    background-color: var(--maz-black);
  }
  .maz-bg-black-transparency {
    background-color: var(--maz-black-alpha-50);
  }
  .maz-bg-black-after-transparency::after {
    background-color: var(--maz-black-alpha-50);
  }
  .maz-bg-black-before-transparency::before {
    background-color: var(--maz-black-alpha-50);
  }
  .maz-bg-transparent {
    background-color: var(--maz-transparent);
  }
  .maz-bg-transparent-after::after {
    background-color: var(--maz-transparent);
  }
  .maz-bg-transparent-before::before {
    background-color: var(--maz-transparent);
  }
  .maz-bg-transparent-transparency {
    background-color: var(--maz-transparent-alpha-50);
  }
  .maz-bg-transparent-after-transparency::after {
    background-color: var(--maz-transparent-alpha-50);
  }
  .maz-bg-transparent-before-transparency::before {
    background-color: var(--maz-transparent-alpha-50);
  }
  .maz-bg-light-grey {
    background-color: var(--maz-light-grey);
  }
  .maz-bg-light-grey-after::after {
    background-color: var(--maz-light-grey);
  }
  .maz-bg-light-grey-before::before {
    background-color: var(--maz-light-grey);
  }
  .maz-bg-light-grey-transparency {
    background-color: var(--maz-light-grey-alpha-50);
  }
  .maz-bg-light-grey-after-transparency::after {
    background-color: var(--maz-light-grey-alpha-50);
  }
  .maz-bg-light-grey-before-transparency::before {
    background-color: var(--maz-light-grey-alpha-50);
  }
  .maz-bg-color {
    background-color: var(--maz-bg-color);
  }
  .maz-bg-overlay {
    background-color: var(--maz-overlay-color);
  }
  .maz-bg-color-light {
    background-color: var(--maz-bg-color-light);
  }
  .maz-border-radius {
    border-radius: var(--maz-border-radius);
  }
  .maz-border-top-radius {
    border-top-left-radius: var(--maz-border-radius);
    border-top-right-radius: var(--maz-border-radius);
  }
  .maz-border-bottom-radius {
    border-bottom-left-radius: var(--maz-border-radius);
    border-bottom-right-radius: var(--maz-border-radius);
  }
  .maz-border-color {
    border-color: var(--maz-border-color);
  }
  .maz-border-color-hover:hover {
    border-color: var(--maz-border-color-darken);
  }
  .maz-border-color-focus:focus {
    border-color: var(--maz-border-color-darken);
  }
  .maz-border-color-active:active {
    border-color: var(--maz-border-color-darken);
  }
  .maz-border-color-visited:visited {
    border-color: var(--maz-border-color-darken);
  }
  .maz-no-border {
    border: none;
  }
  .maz-border-primary {
    border-color: var(--maz-primary);
  }
  .maz-border-secondary {
    border-color: var(--maz-secondary);
  }
  .maz-border-third {
    border-color: var(--maz-third);
  }
  .maz-border-success {
    border-color: var(--maz-success);
  }
  .maz-border-danger {
    border-color: var(--maz-danger);
  }
  .maz-border-grey {
    border-color: var(--maz-grey);
  }
  .maz-border-info {
    border-color: var(--maz-info);
  }
  .maz-border-warning {
    border-color: var(--maz-warning);
  }
  .maz-border-light {
    border-color: var(--maz-light);
  }
  .maz-border-dark {
    border-color: var(--maz-dark);
  }
  .maz-border-default {
    border-color: var(--maz-default);
  }
  .maz-border-disabled {
    border-color: var(--maz-disabled);
  }
  .maz-border-white {
    border-color: var(--maz-white);
  }
  .maz-border-black {
    border-color: var(--maz-black);
  }
  .maz-border-transparent {
    border-color: var(--maz-transparent);
  }
  .maz-border-light-grey {
    border-color: var(--maz-light-grey);
  }
  .maz-border-dotted {
    border-style: dotted;
  }
  .maz-border-top-dotted {
    border-top-style: dotted;
  }
  .maz-border-left-dotted {
    border-left-style: dotted;
  }
  .maz-border-bottom-dotted {
    border-bottom-style: dotted;
  }
  .maz-border-right-dotted {
    border-right-style: dotted;
  }
  .maz-border-dashed {
    border-style: dashed;
  }
  .maz-border-top-dashed {
    border-top-style: dashed;
  }
  .maz-border-left-dashed {
    border-left-style: dashed;
  }
  .maz-border-bottom-dashed {
    border-bottom-style: dashed;
  }
  .maz-border-right-dashed {
    border-right-style: dashed;
  }
  .maz-border-solid {
    border-style: solid;
  }
  .maz-border-top-solid {
    border-top-style: solid;
  }
  .maz-border-left-solid {
    border-left-style: solid;
  }
  .maz-border-bottom-solid {
    border-bottom-style: solid;
  }
  .maz-border-right-solid {
    border-right-style: solid;
  }
  .maz-border-double {
    border-style: double;
  }
  .maz-border-top-double {
    border-top-style: double;
  }
  .maz-border-left-double {
    border-left-style: double;
  }
  .maz-border-bottom-double {
    border-bottom-style: double;
  }
  .maz-border-right-double {
    border-right-style: double;
  }
  .maz-border-groove {
    border-style: groove;
  }
  .maz-border-top-groove {
    border-top-style: groove;
  }
  .maz-border-left-groove {
    border-left-style: groove;
  }
  .maz-border-bottom-groove {
    border-bottom-style: groove;
  }
  .maz-border-right-groove {
    border-right-style: groove;
  }
  .maz-border-ridge {
    border-style: ridge;
  }
  .maz-border-top-ridge {
    border-top-style: ridge;
  }
  .maz-border-left-ridge {
    border-left-style: ridge;
  }
  .maz-border-bottom-ridge {
    border-bottom-style: ridge;
  }
  .maz-border-right-ridge {
    border-right-style: ridge;
  }
  .maz-border-inset {
    border-style: inset;
  }
  .maz-border-top-inset {
    border-top-style: inset;
  }
  .maz-border-left-inset {
    border-left-style: inset;
  }
  .maz-border-bottom-inset {
    border-bottom-style: inset;
  }
  .maz-border-right-inset {
    border-right-style: inset;
  }
  .maz-border-outset {
    border-style: outset;
  }
  .maz-border-top-outset {
    border-top-style: outset;
  }
  .maz-border-left-outset {
    border-left-style: outset;
  }
  .maz-border-bottom-outset {
    border-bottom-style: outset;
  }
  .maz-border-right-outset {
    border-right-style: outset;
  }
  .maz-border-none {
    border-style: none;
  }
  .maz-border-top-none {
    border-top-style: none;
  }
  .maz-border-left-none {
    border-left-style: none;
  }
  .maz-border-bottom-none {
    border-bottom-style: none;
  }
  .maz-border-right-none {
    border-right-style: none;
  }
  .maz-border-hidden {
    border-style: hidden;
  }
  .maz-border-top-hidden {
    border-top-style: hidden;
  }
  .maz-border-left-hidden {
    border-left-style: hidden;
  }
  .maz-border-bottom-hidden {
    border-bottom-style: hidden;
  }
  .maz-border-right-hidden {
    border-right-style: hidden;
  }
  .maz-border-0 {
    border-width: 0px;
  }
  .maz-border-top-0 {
    border-top-width: 0px;
  }
  .maz-border-left-0 {
    border-left-width: 0px;
  }
  .maz-border-bottom-0 {
    border-bottom-width: 0px;
  }
  .maz-border-right-0 {
    border-right-width: 0px;
  }
  .maz-border-1 {
    border-width: 1px;
  }
  .maz-border-top-1 {
    border-top-width: 1px;
  }
  .maz-border-left-1 {
    border-left-width: 1px;
  }
  .maz-border-bottom-1 {
    border-bottom-width: 1px;
  }
  .maz-border-right-1 {
    border-right-width: 1px;
  }
  .maz-border-2 {
    border-width: 2px;
  }
  .maz-border-top-2 {
    border-top-width: 2px;
  }
  .maz-border-left-2 {
    border-left-width: 2px;
  }
  .maz-border-bottom-2 {
    border-bottom-width: 2px;
  }
  .maz-border-right-2 {
    border-right-width: 2px;
  }
  .maz-border-3 {
    border-width: 3px;
  }
  .maz-border-top-3 {
    border-top-width: 3px;
  }
  .maz-border-left-3 {
    border-left-width: 3px;
  }
  .maz-border-bottom-3 {
    border-bottom-width: 3px;
  }
  .maz-border-right-3 {
    border-right-width: 3px;
  }
  .maz-border-4 {
    border-width: 4px;
  }
  .maz-border-top-4 {
    border-top-width: 4px;
  }
  .maz-border-left-4 {
    border-left-width: 4px;
  }
  .maz-border-bottom-4 {
    border-bottom-width: 4px;
  }
  .maz-border-right-4 {
    border-right-width: 4px;
  }
  .maz-border-5 {
    border-width: 5px;
  }
  .maz-border-top-5 {
    border-top-width: 5px;
  }
  .maz-border-left-5 {
    border-left-width: 5px;
  }
  .maz-border-bottom-5 {
    border-bottom-width: 5px;
  }
  .maz-border-right-5 {
    border-right-width: 5px;
  }
  .maz-border-6 {
    border-width: 6px;
  }
  .maz-border-top-6 {
    border-top-width: 6px;
  }
  .maz-border-left-6 {
    border-left-width: 6px;
  }
  .maz-border-bottom-6 {
    border-bottom-width: 6px;
  }
  .maz-border-right-6 {
    border-right-width: 6px;
  }
  .maz-border-8 {
    border-width: 8px;
  }
  .maz-border-top-8 {
    border-top-width: 8px;
  }
  .maz-border-left-8 {
    border-left-width: 8px;
  }
  .maz-border-bottom-8 {
    border-bottom-width: 8px;
  }
  .maz-border-right-8 {
    border-right-width: 8px;
  }
  .maz-border-9 {
    border-width: 9px;
  }
  .maz-border-top-9 {
    border-top-width: 9px;
  }
  .maz-border-left-9 {
    border-left-width: 9px;
  }
  .maz-border-bottom-9 {
    border-bottom-width: 9px;
  }
  .maz-border-right-9 {
    border-right-width: 9px;
  }
  .maz-border-10 {
    border-width: 10px;
  }
  .maz-border-top-10 {
    border-top-width: 10px;
  }
  .maz-border-left-10 {
    border-left-width: 10px;
  }
  .maz-border-bottom-10 {
    border-bottom-width: 10px;
  }
  .maz-border-right-10 {
    border-right-width: 10px;
  }
  .maz-border-11 {
    border-width: 11px;
  }
  .maz-border-top-11 {
    border-top-width: 11px;
  }
  .maz-border-left-11 {
    border-left-width: 11px;
  }
  .maz-border-bottom-11 {
    border-bottom-width: 11px;
  }
  .maz-border-right-11 {
    border-right-width: 11px;
  }
  .maz-border-12 {
    border-width: 12px;
  }
  .maz-border-top-12 {
    border-top-width: 12px;
  }
  .maz-border-left-12 {
    border-left-width: 12px;
  }
  .maz-border-bottom-12 {
    border-bottom-width: 12px;
  }
  .maz-border-right-12 {
    border-right-width: 12px;
  }
  .maz-border-13 {
    border-width: 13px;
  }
  .maz-border-top-13 {
    border-top-width: 13px;
  }
  .maz-border-left-13 {
    border-left-width: 13px;
  }
  .maz-border-bottom-13 {
    border-bottom-width: 13px;
  }
  .maz-border-right-13 {
    border-right-width: 13px;
  }
  .maz-border-14 {
    border-width: 14px;
  }
  .maz-border-top-14 {
    border-top-width: 14px;
  }
  .maz-border-left-14 {
    border-left-width: 14px;
  }
  .maz-border-bottom-14 {
    border-bottom-width: 14px;
  }
  .maz-border-right-14 {
    border-right-width: 14px;
  }
  .maz-border-15 {
    border-width: 15px;
  }
  .maz-border-top-15 {
    border-top-width: 15px;
  }
  .maz-border-left-15 {
    border-left-width: 15px;
  }
  .maz-border-bottom-15 {
    border-bottom-width: 15px;
  }
  .maz-border-right-15 {
    border-right-width: 15px;
  }
  .maz-border-16 {
    border-width: 16px;
  }
  .maz-border-top-16 {
    border-top-width: 16px;
  }
  .maz-border-left-16 {
    border-left-width: 16px;
  }
  .maz-border-bottom-16 {
    border-bottom-width: 16px;
  }
  .maz-border-right-16 {
    border-right-width: 16px;
  }
  .maz-border-17 {
    border-width: 17px;
  }
  .maz-border-top-17 {
    border-top-width: 17px;
  }
  .maz-border-left-17 {
    border-left-width: 17px;
  }
  .maz-border-bottom-17 {
    border-bottom-width: 17px;
  }
  .maz-border-right-17 {
    border-right-width: 17px;
  }
  .maz-border-18 {
    border-width: 18px;
  }
  .maz-border-top-18 {
    border-top-width: 18px;
  }
  .maz-border-left-18 {
    border-left-width: 18px;
  }
  .maz-border-bottom-18 {
    border-bottom-width: 18px;
  }
  .maz-border-right-18 {
    border-right-width: 18px;
  }
  .maz-border-19 {
    border-width: 19px;
  }
  .maz-border-top-19 {
    border-top-width: 19px;
  }
  .maz-border-left-19 {
    border-left-width: 19px;
  }
  .maz-border-bottom-19 {
    border-bottom-width: 19px;
  }
  .maz-border-right-19 {
    border-right-width: 19px;
  }
  .maz-border-20 {
    border-width: 20px;
  }
  .maz-border-top-20 {
    border-top-width: 20px;
  }
  .maz-border-left-20 {
    border-left-width: 20px;
  }
  .maz-border-bottom-20 {
    border-bottom-width: 20px;
  }
  .maz-border-right-20 {
    border-right-width: 20px;
  }
  .maz-border {
    border-width: var(--maz-border-width);
  }
  .maz-border-top {
    border-top-width: var(--maz-border-width);
  }
  .maz-border-left {
    border-left-width: var(--maz-border-width);
  }
  .maz-border-bottom {
    border-bottom-width: var(--maz-border-width);
  }
  .maz-border-right {
    border-right-width: var(--maz-border-width);
  }
  .maz-hover-bg-color:hover {
    background-color: var(--maz-hover-color);
  }
  .maz-no-hover-bg:hover {
    background: transparent;
  }
  .maz-hover-bg-primary:hover {
    background-color: var(--maz-primary);
  }
  .maz-hover-bg-secondary:hover {
    background-color: var(--maz-secondary);
  }
  .maz-hover-bg-third:hover {
    background-color: var(--maz-third);
  }
  .maz-hover-bg-success:hover {
    background-color: var(--maz-success);
  }
  .maz-hover-bg-danger:hover {
    background-color: var(--maz-danger);
  }
  .maz-hover-bg-grey:hover {
    background-color: var(--maz-grey);
  }
  .maz-hover-bg-info:hover {
    background-color: var(--maz-info);
  }
  .maz-hover-bg-warning:hover {
    background-color: var(--maz-warning);
  }
  .maz-hover-bg-light:hover {
    background-color: var(--maz-light);
  }
  .maz-hover-bg-dark:hover {
    background-color: var(--maz-dark);
  }
  .maz-hover-bg-default:hover {
    background-color: var(--maz-default);
  }
  .maz-hover-bg-disabled:hover {
    background-color: var(--maz-disabled);
  }
  .maz-hover-bg-white:hover {
    background-color: var(--maz-white);
  }
  .maz-hover-bg-black:hover {
    background-color: var(--maz-black);
  }
  .maz-hover-bg-transparent:hover {
    background-color: var(--maz-transparent);
  }
  .maz-hover-bg-light-grey:hover {
    background-color: var(--maz-light-grey);
  }
  .maz-no-focus-bg:focus {
    background-color: transparent;
  }
  .maz-focus-bg-primary:focus {
    background-color: var(--maz-primary);
  }
  .maz-focus-bg-secondary:focus {
    background-color: var(--maz-secondary);
  }
  .maz-focus-bg-third:focus {
    background-color: var(--maz-third);
  }
  .maz-focus-bg-success:focus {
    background-color: var(--maz-success);
  }
  .maz-focus-bg-danger:focus {
    background-color: var(--maz-danger);
  }
  .maz-focus-bg-grey:focus {
    background-color: var(--maz-grey);
  }
  .maz-focus-bg-info:focus {
    background-color: var(--maz-info);
  }
  .maz-focus-bg-warning:focus {
    background-color: var(--maz-warning);
  }
  .maz-focus-bg-light:focus {
    background-color: var(--maz-light);
  }
  .maz-focus-bg-dark:focus {
    background-color: var(--maz-dark);
  }
  .maz-focus-bg-default:focus {
    background-color: var(--maz-default);
  }
  .maz-focus-bg-disabled:focus {
    background-color: var(--maz-disabled);
  }
  .maz-focus-bg-white:focus {
    background-color: var(--maz-white);
  }
  .maz-focus-bg-black:focus {
    background-color: var(--maz-black);
  }
  .maz-focus-bg-transparent:focus {
    background-color: var(--maz-transparent);
  }
  .maz-focus-bg-light-grey:focus {
    background-color: var(--maz-light-grey);
  }
  .maz-elevation {
    box-shadow: var(--maz-elevation);
  }
  .maz-no-elevation {
    box-shadow: none;
  }
  .maz-fill-primary path {
    fill: var(--maz-primary);
  }
  .maz-fill-secondary path {
    fill: var(--maz-secondary);
  }
  .maz-fill-third path {
    fill: var(--maz-third);
  }
  .maz-fill-success path {
    fill: var(--maz-success);
  }
  .maz-fill-danger path {
    fill: var(--maz-danger);
  }
  .maz-fill-grey path {
    fill: var(--maz-grey);
  }
  .maz-fill-info path {
    fill: var(--maz-info);
  }
  .maz-fill-warning path {
    fill: var(--maz-warning);
  }
  .maz-fill-light path {
    fill: var(--maz-light);
  }
  .maz-fill-dark path {
    fill: var(--maz-dark);
  }
  .maz-fill-default path {
    fill: var(--maz-default);
  }
  .maz-fill-disabled path {
    fill: var(--maz-disabled);
  }
  .maz-fill-white path {
    fill: var(--maz-white);
  }
  .maz-fill-black path {
    fill: var(--maz-black);
  }
  .maz-fill-transparent path {
    fill: var(--maz-transparent);
  }
  .maz-fill-light-grey path {
    fill: var(--maz-light-grey);
  }
  .maz-top-0 {
    top: 0px;
  }
  .maz-left-0 {
    left: 0px;
  }
  .maz-bottom-0 {
    bottom: 0px;
  }
  .maz-right-0 {
    right: 0px;
  }
  .maz-top-1 {
    top: 1px;
  }
  .maz-left-1 {
    left: 1px;
  }
  .maz-bottom-1 {
    bottom: 1px;
  }
  .maz-right-1 {
    right: 1px;
  }
  .maz-top-2 {
    top: 2px;
  }
  .maz-left-2 {
    left: 2px;
  }
  .maz-bottom-2 {
    bottom: 2px;
  }
  .maz-right-2 {
    right: 2px;
  }
  .maz-top-3 {
    top: 3px;
  }
  .maz-left-3 {
    left: 3px;
  }
  .maz-bottom-3 {
    bottom: 3px;
  }
  .maz-right-3 {
    right: 3px;
  }
  .maz-top-4 {
    top: 4px;
  }
  .maz-left-4 {
    left: 4px;
  }
  .maz-bottom-4 {
    bottom: 4px;
  }
  .maz-right-4 {
    right: 4px;
  }
  .maz-top-5 {
    top: 5px;
  }
  .maz-left-5 {
    left: 5px;
  }
  .maz-bottom-5 {
    bottom: 5px;
  }
  .maz-right-5 {
    right: 5px;
  }
  .maz-top-6 {
    top: 6px;
  }
  .maz-left-6 {
    left: 6px;
  }
  .maz-bottom-6 {
    bottom: 6px;
  }
  .maz-right-6 {
    right: 6px;
  }
  .maz-top-8 {
    top: 8px;
  }
  .maz-left-8 {
    left: 8px;
  }
  .maz-bottom-8 {
    bottom: 8px;
  }
  .maz-right-8 {
    right: 8px;
  }
  .maz-top-9 {
    top: 9px;
  }
  .maz-left-9 {
    left: 9px;
  }
  .maz-bottom-9 {
    bottom: 9px;
  }
  .maz-right-9 {
    right: 9px;
  }
  .maz-top-10 {
    top: 10px;
  }
  .maz-left-10 {
    left: 10px;
  }
  .maz-bottom-10 {
    bottom: 10px;
  }
  .maz-right-10 {
    right: 10px;
  }
  .maz-top-11 {
    top: 11px;
  }
  .maz-left-11 {
    left: 11px;
  }
  .maz-bottom-11 {
    bottom: 11px;
  }
  .maz-right-11 {
    right: 11px;
  }
  .maz-top-12 {
    top: 12px;
  }
  .maz-left-12 {
    left: 12px;
  }
  .maz-bottom-12 {
    bottom: 12px;
  }
  .maz-right-12 {
    right: 12px;
  }
  .maz-top-13 {
    top: 13px;
  }
  .maz-left-13 {
    left: 13px;
  }
  .maz-bottom-13 {
    bottom: 13px;
  }
  .maz-right-13 {
    right: 13px;
  }
  .maz-top-14 {
    top: 14px;
  }
  .maz-left-14 {
    left: 14px;
  }
  .maz-bottom-14 {
    bottom: 14px;
  }
  .maz-right-14 {
    right: 14px;
  }
  .maz-top-15 {
    top: 15px;
  }
  .maz-left-15 {
    left: 15px;
  }
  .maz-bottom-15 {
    bottom: 15px;
  }
  .maz-right-15 {
    right: 15px;
  }
  .maz-top-16 {
    top: 16px;
  }
  .maz-left-16 {
    left: 16px;
  }
  .maz-bottom-16 {
    bottom: 16px;
  }
  .maz-right-16 {
    right: 16px;
  }
  .maz-top-17 {
    top: 17px;
  }
  .maz-left-17 {
    left: 17px;
  }
  .maz-bottom-17 {
    bottom: 17px;
  }
  .maz-right-17 {
    right: 17px;
  }
  .maz-top-18 {
    top: 18px;
  }
  .maz-left-18 {
    left: 18px;
  }
  .maz-bottom-18 {
    bottom: 18px;
  }
  .maz-right-18 {
    right: 18px;
  }
  .maz-top-19 {
    top: 19px;
  }
  .maz-left-19 {
    left: 19px;
  }
  .maz-bottom-19 {
    bottom: 19px;
  }
  .maz-right-19 {
    right: 19px;
  }
  .maz-top-20 {
    top: 20px;
  }
  .maz-left-20 {
    left: 20px;
  }
  .maz-bottom-20 {
    bottom: 20px;
  }
  .maz-right-20 {
    right: 20px;
  }
  .maz-over-hid {
    overflow: hidden;
  }
  .maz-overflow-auto {
    overflow: auto;
  }
  .maz-overflow-y-auto {
    overflow-y: auto;
  }
  .maz-overflow-x-auto {
    overflow-x: auto;
  }
  .maz-overflow-inherit {
    overflow: inherit;
  }
  .maz-overflow-y-inherit {
    overflow-y: inherit;
  }
  .maz-overflow-x-inherit {
    overflow-x: inherit;
  }
  .maz-overflow-initial {
    overflow: initial;
  }
  .maz-overflow-y-initial {
    overflow-y: initial;
  }
  .maz-overflow-x-initial {
    overflow-x: initial;
  }
  .maz-overflow-overlay {
    overflow: overlay;
  }
  .maz-overflow-y-overlay {
    overflow-y: overlay;
  }
  .maz-overflow-x-overlay {
    overflow-x: overlay;
  }
  .maz-overflow-hidden {
    overflow: hidden;
  }
  .maz-overflow-y-hidden {
    overflow-y: hidden;
  }
  .maz-overflow-x-hidden {
    overflow-x: hidden;
  }
  .maz-overflow-scroll {
    overflow: scroll;
  }
  .maz-overflow-y-scroll {
    overflow-y: scroll;
  }
  .maz-overflow-x-scroll {
    overflow-x: scroll;
  }
  .maz-overflow-unset {
    overflow: unset;
  }
  .maz-overflow-y-unset {
    overflow-y: unset;
  }
  .maz-overflow-x-unset {
    overflow-x: unset;
  }
  .maz-overflow-visible {
    overflow: visible;
  }
  .maz-overflow-y-visible {
    overflow-y: visible;
  }
  .maz-overflow-x-visible {
    overflow-x: visible;
  }
  .maz-pos-r {
    position: relative;
  }
  .maz-pos-a {
    position: absolute;
  }
  .maz-position-absolute {
    position: absolute;
  }
  .maz-position-relative {
    position: relative;
  }
  .maz-position-fixed {
    position: fixed;
  }
  .maz-position-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
  .maz-flex {
    display: flex;
  }
  .maz-flex-inline {
    display: inline-flex;
  }
  .maz-fluid {
    width: 100%;
  }
  .maz-direction-column {
    flex-direction: column;
  }
  .maz-direction-column-reverse {
    flex-direction: column-reverse;
  }
  .maz-direction-row {
    flex-direction: row;
  }
  .maz-direction-row-reverse {
    flex-direction: row-reverse;
  }
  .maz-align-center {
    align-items: center;
  }
  .maz-align-start {
    align-items: flex-start;
  }
  .maz-align-end {
    align-items: flex-end;
  }
  .maz-justify-start {
    justify-content: flex-start;
  }
  .maz-justify-end {
    justify-content: flex-end;
  }
  .maz-justify-center {
    justify-content: center;
  }
  .maz-space-between {
    justify-content: space-between;
  }
  .maz-space-around {
    justify-content: space-around;
  }
  .maz-flex-center {
    justify-content: center;
    align-items: center;
  }
  .maz-flex-start {
    justify-content: flex-start;
    align-items: flex-start;
  }
  .maz-flex-end {
    justify-content: flex-end;
    align-items: flex-end;
  }
  .maz-flex-wrap {
    flex-wrap: wrap;
  }
  .maz-flex-grow {
    flex-grow: 1;
  }
  .maz-flex-fill {
    flex: 0 1 auto;
  }
  .maz-flex-fixed {
    flex: 0 0 auto;
  }
  .maz-flex-1 {
    flex: 1;
  }
  .maz-flex-0 {
    flex: 0 1 0;
  }
  .maz-flex-10 {
    flex: 0 1 10%;
  }
  .maz-flex-15 {
    flex: 0 1 15%;
  }
  .maz-flex-16 {
    flex: 0 1 16.66%;
  }
  .maz-flex-20 {
    flex: 0 1 20%;
  }
  .maz-flex-25 {
    flex: 0 1 25%;
  }
  .maz-flex-30 {
    flex: 0 1 30%;
  }
  .maz-flex-33 {
    flex: 0 1 33.33%;
  }
  .maz-flex-40 {
    flex: 0 1 40%;
  }
  .maz-flex-50 {
    flex: 0 1 50%;
  }
  .maz-flex-60 {
    flex: 0 1 60%;
  }
  .maz-flex-70 {
    flex: 0 1 70%;
  }
  .maz-flex-80 {
    flex: 0 1 80%;
  }
  .maz-flex-90 {
    flex: 0 1 90%;
  }
  .maz-flex-100 {
    flex: 0 1 100%;
  }
  .maz-text-color {
    color: var(--maz-text-color);
    fill: var(--maz-text-color);
  }
  .maz-text-white {
    color: #fff;
    fill: #fff;
  }
  .maz-text-muted {
    color: var(--maz-muted-color);
    fill: var(--maz-muted-color);
  }
  .maz-text-primary {
    color: var(--maz-primary);
    fill: var(--maz-primary);
  }
  .maz-text-secondary {
    color: var(--maz-secondary);
    fill: var(--maz-secondary);
  }
  .maz-text-third {
    color: var(--maz-third);
    fill: var(--maz-third);
  }
  .maz-text-success {
    color: var(--maz-success);
    fill: var(--maz-success);
  }
  .maz-text-danger {
    color: var(--maz-danger);
    fill: var(--maz-danger);
  }
  .maz-text-grey {
    color: var(--maz-grey);
    fill: var(--maz-grey);
  }
  .maz-text-info {
    color: var(--maz-info);
    fill: var(--maz-info);
  }
  .maz-text-warning {
    color: var(--maz-warning);
    fill: var(--maz-warning);
  }
  .maz-text-light {
    color: var(--maz-light);
    fill: var(--maz-light);
  }
  .maz-text-dark {
    color: var(--maz-dark);
    fill: var(--maz-dark);
  }
  .maz-text-default {
    color: var(--maz-default);
    fill: var(--maz-default);
  }
  .maz-text-disabled {
    color: var(--maz-disabled);
    fill: var(--maz-disabled);
  }
  .maz-text-white {
    color: var(--maz-white);
    fill: var(--maz-white);
  }
  .maz-text-black {
    color: var(--maz-black);
    fill: var(--maz-black);
  }
  .maz-text-transparent {
    color: var(--maz-transparent);
    fill: var(--maz-transparent);
  }
  .maz-text-light-grey {
    color: var(--maz-light-grey);
    fill: var(--maz-light-grey);
  }
  .maz-text-strong {
    font-weight: 600;
  }
  .maz-text-bold {
    font-weight: bold;
  }
  .maz-text-center {
    text-align: center;
  }
  .maz-text-left {
    text-align: left;
  }
  .maz-text-right {
    text-align: right;
  }
  .maz-dots-text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .maz-dots-text-3 {
    overflow: hidden;
    position: relative;
    line-height: 1.3rem;
    max-height: 3.9rem;
    text-align: justify;
    margin-right: -1rem;
    padding-right: 1rem;
  }
  .maz-dots-text-3::before {
    content: '...';
    position: absolute;
    right: 3px;
    bottom: 2px;
  }
  .maz-dots-text-3::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1rem;
    height: 1rem;
    margin-top: 0.2rem;
    background: #fff;
  }
  .maz-dots-text-2 {
    overflow: hidden;
    position: relative;
    line-height: 1.3rem;
    max-height: 2.6rem;
    text-align: justify;
    margin-right: -1rem;
    padding-right: 1rem;
  }
  .maz-dots-text-2::before {
    content: '...';
    position: absolute;
    right: 3px;
    bottom: 2px;
  }
  .maz-dots-text-2::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1rem;
    height: 1rem;
    margin-top: 0.2rem;
    background: #fff;
  }
  :root {
    --maz-container-padding: 40px;
    --maz-container-max-width: 1280px;
    --maz-container-width: calc(100% - var(--maz-container-padding) * 2);
    --maz-container-mobile-padding: 20px;
  }
  .maz-container {
    width: 100%;
    padding-left: calc(50% - var(--maz-container-width) / 2);
    padding-right: calc(50% - var(--maz-container-width) / 2);
  }
  @media only screen and (min-width: 1320px) {
    :root {
      --maz-container-width: var(--maz-container-max-width);
    }
  }
  @media only screen and (max-width: 500px) {
    :root {
      --maz-container-padding: var(--maz-container-mobile-padding);
    }
  }
  .maz-no-shadow {
    box-shadow: none;
  }
  .maz-pr-0 {
    padding-right: 0;
  }
  .maz-pt-0 {
    padding-top: 0;
  }
  .maz-pb-0 {
    padding-bottom: 0;
  }
  .maz-pl-0 {
    padding-left: 0;
  }
  .maz-px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .maz-py-0 {
    padding-top: 0;
    padding-bottom: 0;
  }
  .maz-p-0 {
    padding: 0;
  }
  .maz-pr-1 {
    padding-right: 0.25rem;
  }
  .maz-pt-1 {
    padding-top: 0.25rem;
  }
  .maz-pb-1 {
    padding-bottom: 0.25rem;
  }
  .maz-pl-1 {
    padding-left: 0.25rem;
  }
  .maz-px-1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  .maz-py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .maz-p-1 {
    padding: 0.25rem;
  }
  .maz-pr-2 {
    padding-right: 0.5rem;
  }
  .maz-pt-2 {
    padding-top: 0.5rem;
  }
  .maz-pb-2 {
    padding-bottom: 0.5rem;
  }
  .maz-pl-2 {
    padding-left: 0.5rem;
  }
  .maz-px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .maz-py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .maz-p-2 {
    padding: 0.5rem;
  }
  .maz-pr-3 {
    padding-right: 1rem;
  }
  .maz-pt-3 {
    padding-top: 1rem;
  }
  .maz-pb-3 {
    padding-bottom: 1rem;
  }
  .maz-pl-3 {
    padding-left: 1rem;
  }
  .maz-px-3 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .maz-py-3 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .maz-p-3 {
    padding: 1rem;
  }
  .maz-pr-4 {
    padding-right: 1.5rem;
  }
  .maz-pt-4 {
    padding-top: 1.5rem;
  }
  .maz-pb-4 {
    padding-bottom: 1.5rem;
  }
  .maz-pl-4 {
    padding-left: 1.5rem;
  }
  .maz-px-4 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .maz-py-4 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .maz-p-4 {
    padding: 1.5rem;
  }
  .maz-pr-5 {
    padding-right: 2rem;
  }
  .maz-pt-5 {
    padding-top: 2rem;
  }
  .maz-pb-5 {
    padding-bottom: 2rem;
  }
  .maz-pl-5 {
    padding-left: 2rem;
  }
  .maz-px-5 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .maz-py-5 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .maz-p-5 {
    padding: 2rem;
  }
  .maz-pr-6 {
    padding-right: 2.5rem;
  }
  .maz-pt-6 {
    padding-top: 2.5rem;
  }
  .maz-pb-6 {
    padding-bottom: 2.5rem;
  }
  .maz-pl-6 {
    padding-left: 2.5rem;
  }
  .maz-px-6 {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  .maz-py-6 {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
  .maz-p-6 {
    padding: 2.5rem;
  }
  .maz-pr-7 {
    padding-right: 3.125rem;
  }
  .maz-pt-7 {
    padding-top: 3.125rem;
  }
  .maz-pb-7 {
    padding-bottom: 3.125rem;
  }
  .maz-pl-7 {
    padding-left: 3.125rem;
  }
  .maz-px-7 {
    padding-left: 3.125rem;
    padding-right: 3.125rem;
  }
  .maz-py-7 {
    padding-top: 3.125rem;
    padding-bottom: 3.125rem;
  }
  .maz-p-7 {
    padding: 3.125rem;
  }
  .maz-pr-8 {
    padding-right: 6.25rem;
  }
  .maz-pt-8 {
    padding-top: 6.25rem;
  }
  .maz-pb-8 {
    padding-bottom: 6.25rem;
  }
  .maz-pl-8 {
    padding-left: 6.25rem;
  }
  .maz-px-8 {
    padding-left: 6.25rem;
    padding-right: 6.25rem;
  }
  .maz-py-8 {
    padding-top: 6.25rem;
    padding-bottom: 6.25rem;
  }
  .maz-p-8 {
    padding: 6.25rem;
  }
  .maz-pr-9 {
    padding-right: 9.375rem;
  }
  .maz-pt-9 {
    padding-top: 9.375rem;
  }
  .maz-pb-9 {
    padding-bottom: 9.375rem;
  }
  .maz-pl-9 {
    padding-left: 9.375rem;
  }
  .maz-px-9 {
    padding-left: 9.375rem;
    padding-right: 9.375rem;
  }
  .maz-py-9 {
    padding-top: 9.375rem;
    padding-bottom: 9.375rem;
  }
  .maz-p-9 {
    padding: 9.375rem;
  }
  .maz-mr-0 {
    margin-right: 0;
  }
  .maz-mt-0 {
    margin-top: 0;
  }
  .maz-mb-0 {
    margin-bottom: 0;
  }
  .maz-ml-0 {
    margin-left: 0;
  }
  .maz-mx-0 {
    margin-left: 0;
    margin-right: 0;
  }
  .maz-my-0 {
    margin-top: 0;
    margin-bottom: 0;
  }
  .maz-m-0 {
    margin: 0;
  }
  .maz-mr-1 {
    margin-right: 0.25rem;
  }
  .maz-mt-1 {
    margin-top: 0.25rem;
  }
  .maz-mb-1 {
    margin-bottom: 0.25rem;
  }
  .maz-ml-1 {
    margin-left: 0.25rem;
  }
  .maz-mx-1 {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  .maz-my-1 {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .maz-m-1 {
    margin: 0.25rem;
  }
  .maz-mr-2 {
    margin-right: 0.5rem;
  }
  .maz-mt-2 {
    margin-top: 0.5rem;
  }
  .maz-mb-2 {
    margin-bottom: 0.5rem;
  }
  .maz-ml-2 {
    margin-left: 0.5rem;
  }
  .maz-mx-2 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .maz-my-2 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .maz-m-2 {
    margin: 0.5rem;
  }
  .maz-mr-3 {
    margin-right: 1rem;
  }
  .maz-mt-3 {
    margin-top: 1rem;
  }
  .maz-mb-3 {
    margin-bottom: 1rem;
  }
  .maz-ml-3 {
    margin-left: 1rem;
  }
  .maz-mx-3 {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .maz-my-3 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .maz-m-3 {
    margin: 1rem;
  }
  .maz-mr-4 {
    margin-right: 1.5rem;
  }
  .maz-mt-4 {
    margin-top: 1.5rem;
  }
  .maz-mb-4 {
    margin-bottom: 1.5rem;
  }
  .maz-ml-4 {
    margin-left: 1.5rem;
  }
  .maz-mx-4 {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  .maz-my-4 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .maz-m-4 {
    margin: 1.5rem;
  }
  .maz-mr-5 {
    margin-right: 2rem;
  }
  .maz-mt-5 {
    margin-top: 2rem;
  }
  .maz-mb-5 {
    margin-bottom: 2rem;
  }
  .maz-ml-5 {
    margin-left: 2rem;
  }
  .maz-mx-5 {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .maz-my-5 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .maz-m-5 {
    margin: 2rem;
  }
  .maz-mr-6 {
    margin-right: 2.5rem;
  }
  .maz-mt-6 {
    margin-top: 2.5rem;
  }
  .maz-mb-6 {
    margin-bottom: 2.5rem;
  }
  .maz-ml-6 {
    margin-left: 2.5rem;
  }
  .maz-mx-6 {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
  .maz-my-6 {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
  .maz-m-6 {
    margin: 2.5rem;
  }
  .maz-mr-7 {
    margin-right: 3.125rem;
  }
  .maz-mt-7 {
    margin-top: 3.125rem;
  }
  .maz-mb-7 {
    margin-bottom: 3.125rem;
  }
  .maz-ml-7 {
    margin-left: 3.125rem;
  }
  .maz-mx-7 {
    margin-left: 3.125rem;
    margin-right: 3.125rem;
  }
  .maz-my-7 {
    margin-top: 3.125rem;
    margin-bottom: 3.125rem;
  }
  .maz-m-7 {
    margin: 3.125rem;
  }
  .maz-mr-8 {
    margin-right: 6.25rem;
  }
  .maz-mt-8 {
    margin-top: 6.25rem;
  }
  .maz-mb-8 {
    margin-bottom: 6.25rem;
  }
  .maz-ml-8 {
    margin-left: 6.25rem;
  }
  .maz-mx-8 {
    margin-left: 6.25rem;
    margin-right: 6.25rem;
  }
  .maz-my-8 {
    margin-top: 6.25rem;
    margin-bottom: 6.25rem;
  }
  .maz-m-8 {
    margin: 6.25rem;
  }
  .maz-mr-9 {
    margin-right: 9.375rem;
  }
  .maz-mt-9 {
    margin-top: 9.375rem;
  }
  .maz-mb-9 {
    margin-bottom: 9.375rem;
  }
  .maz-ml-9 {
    margin-left: 9.375rem;
  }
  .maz-mx-9 {
    margin-left: 9.375rem;
    margin-right: 9.375rem;
  }
  .maz-my-9 {
    margin-top: 9.375rem;
    margin-bottom: 9.375rem;
  }
  .maz-m-9 {
    margin: 9.375rem;
  }
  .maz-h-100 {
    height: 100%;
  }
  .maz-mh-100 {
    max-height: 100%;
  }
  .maz-w-100 {
    width: 100%;
  }
  .maz-mw-100 {
    max-width: 100%;
  }
  .maz-m-h-0 {
    min-height: 0;
  }
  .maz-m-h-100 {
    min-height: 100%;
  }
  .maz-m-w-0 {
    min-width: 0;
  }
  .maz-m-w-100 {
    min-width: 100%;
  }
  .maz-fs-10 {
    font-size: 10px;
  }
  .maz-fs-11 {
    font-size: 11px;
  }
  .maz-fs-12 {
    font-size: 12px;
  }
  .maz-fs-13 {
    font-size: 13px;
  }
  .maz-fs-14 {
    font-size: 14px;
  }
  .maz-fs-15 {
    font-size: 15px;
  }
  .maz-fs-16 {
    font-size: 16px;
  }
  .maz-fs-17 {
    font-size: 17px;
  }
  .maz-fs-18 {
    font-size: 18px;
  }
  .maz-fs-19 {
    font-size: 19px;
  }
  .maz-fs-20 {
    font-size: 20px;
  }
  .maz-fs-21 {
    font-size: 21px;
  }
  .maz-fs-22 {
    font-size: 22px;
  }
  .maz-fs-23 {
    font-size: 23px;
  }
  .maz-fs-24 {
    font-size: 24px;
  }
  .maz-fs-25 {
    font-size: 25px;
  }
  .maz-fs-26 {
    font-size: 26px;
  }
  .maz-fs-27 {
    font-size: 27px;
  }
  .maz-fs-28 {
    font-size: 28px;
  }
  .maz-fw-200 {
    font-weight: 200;
  }
  .maz-fw-300 {
    font-weight: 300;
  }
  .maz-fw-400 {
    font-weight: 400;
  }
  .maz-fw-500 {
    font-weight: 500;
  }
  .maz-fw-600 {
    font-weight: 600;
  }
  .maz-fw-700 {
    font-weight: 700;
  }
  .maz-fw-800 {
    font-weight: 800;
  }
  .maz-fw-bold {
    font-weight: bold;
  }
  .maz-fw-bolder {
    font-weight: bolder;
  }
  .maz-fw-normal {
    font-weight: normal;
  }
  @media only screen and (max-width: 1920px) {
    .maz-hidden-4k {
      display: none;
    }
  }
  @media only screen and (max-width: 1440px) {
    .maz-hidden-laptop {
      display: none;
    }
  }
  @media only screen and (max-width: 1280px) {
    .maz-hidden-laptop-m {
      display: none;
    }
  }
  @media only screen and (max-width: 1024px) {
    .maz-hidden-laptop-s {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    .maz-hidden-tablet {
      display: none;
    }
  }
  @media only screen and (max-width: 425px) {
    .maz-hidden-mobile {
      display: none;
    }
  }
  @media only screen and (max-width: 375px) {
    .maz-hidden-mobile-m {
      display: none;
    }
  }
  @media only screen and (max-width: 320px) {
    .maz-hidden-mobile-s {
      display: none;
    }
  }
  .maz-show-4k {
    display: none;
  }
  @media only screen and (max-width: 1920px) {
    .maz-show-4k {
      display: inherit;
    }
  }
  .maz-show-laptop {
    display: none;
  }
  @media only screen and (max-width: 1440px) {
    .maz-show-laptop {
      display: inherit;
    }
  }
  .maz-show-laptop-m {
    display: none;
  }
  @media only screen and (max-width: 1280px) {
    .maz-show-laptop-m {
      display: inherit;
    }
  }
  .maz-show-laptop-s {
    display: none;
  }
  @media only screen and (max-width: 1024px) {
    .maz-show-laptop-s {
      display: inherit;
    }
  }
  .maz-show-tablet {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    .maz-show-tablet {
      display: inherit;
    }
  }
  .maz-show-mobile {
    display: none;
  }
  @media only screen and (max-width: 425px) {
    .maz-show-mobile {
      display: inherit;
    }
  }
  .maz-show-mobile-m {
    display: none;
  }
  @media only screen and (max-width: 375px) {
    .maz-show-mobile-m {
      display: inherit;
    }
  }
  .maz-show-mobile-s {
    display: none;
  }
  @media only screen and (max-width: 320px) {
    .maz-show-mobile-s {
      display: inherit;
    }
  }
  .maz-fade-enter-active,
  .maz-fade-leave-active {
    opacity: 1;
    z-index: 998;
    transition: all 300ms;
  }
  .maz-fade-enter,
  .maz-fade-leave-to {
    opacity: 0;
    z-index: 998;
  }
  .maz-slide-enter-active,
  .maz-slide-leave-active {
    opacity: 1;
    z-index: 998;
    transition: all 300ms;
    transform: translateY(0);
  }
  .maz-slide-enter,
  .maz-slide-leave-to {
    opacity: 0;
    z-index: 998;
    transform: translateY(-20px);
  }
  .maz-tags-enter-active,
  .maz-tags-leave-active {
    opacity: 1;
    transition: all 300ms;
    transform: translateX(0);
  }
  .maz-tags-enter,
  .maz-tags-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }
  .maz-slideinvert-enter-active,
  .maz-slideinvert-leave-active {
    opacity: 1;
    z-index: 998;
    transition: all 300ms;
    transform: translateY(0);
  }
  .maz-slideinvert-enter,
  .maz-slideinvert-leave-to {
    opacity: 0;
    z-index: 998;
    transform: translateY(40px);
  }
  .maz-slidenext-leave-active,
  .maz-slidenext-enter-active,
  .maz-slideprev-leave-active,
  .maz-slideprev-enter-active {
    position: absolute;
    transition: all 300ms;
  }
  .maz-slidenext-enter,
  .maz-slideprev-leave-to {
    transform: translateX(100%);
  }
  .maz-slidenext-leave-to,
  .maz-slideprev-enter {
    transform: translateX(-100%);
  }
  .maz-slidevnext-leave-active,
  .maz-slidevnext-enter-active,
  .maz-slidevprev-leave-active,
  .maz-slidevprev-enter-active {
    position: absolute;
    transition: all 300ms;
  }
  .maz-slidevnext-enter,
  .maz-slidevprev-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }
  .maz-slidevnext-leave-to,
  .maz-slidevprev-enter {
    transform: translateY(-100%);
    opacity: 0;
  }
  .maz-spinner-anim {
    -webkit-animation: spin 0.6s linear infinite;
    animation: spin 0.6s linear infinite;
  }
  @-webkit-keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .maz-dialog-fade-enter-active .maz-dialog-animation {
    -webkit-animation: dialog-fade-in 0.4s;
    animation: dialog-fade-in 0.4s;
  }
  .maz-dialog-fade-leave-active .maz-dialog-animation {
    -webkit-animation: dialog-fade-out 0.4s;
    animation: dialog-fade-out 0.4s;
  }
  .maz-bottom-sheet-enter-active .maz-bottom-sheet-animation,
  .maz-bottom-sheet-leave-active .maz-bottom-sheet-animation {
    opacity: 1;
    transition: all 300ms;
    transform: translateY(0);
  }
  .maz-bottom-sheet-enter .maz-bottom-sheet-animation,
  .maz-bottom-sheet-leave-to .maz-bottom-sheet-animatio {
    opacity: 1;
    transform: translateY(100%);
  }
  @-webkit-keyframes dialog-fade-in {
    0% {
      transform: translate3d(0, -30px, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes dialog-fade-in {
    0% {
      transform: translate3d(0, -30px, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @-webkit-keyframes dialog-fade-out {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(0, -30px, 0);
      opacity: 0;
    }
  }
  @keyframes dialog-fade-out {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(0, -30px, 0);
      opacity: 0;
    }
  }
  .maz-expand-enter-active,
  .maz-expand-leave-active {
    transition: 300ms ease-in-out;
    transition-property: opacity, height;
    overflow: hidden;
  }
  .maz-expand-enter,
  .maz-expand-leave-to {
    height: 0;
    opacity: 0;
  }
  .maz-scale-enter-active,
  .maz-scale-leave-active {
    opacity: 1;
    z-index: 1;
    transition: all 300ms cubic-bezier(0.4, 0.52, 0.26, 0.9);
  }
  .maz-scale-enter,
  .maz-scale-leave-to {
    opacity: 0.4;
    z-index: 1;
    transform: scale(0);
  }
  @-webkit-keyframes loading {
    from {
      left: -200px;
      width: 30%;
    }
    50% {
      width: 30%;
    }
    70% {
      width: 70%;
    }
    80% {
      left: 50%;
    }
    95% {
      left: 120%;
    }
    to {
      left: 100%;
    }
  }
  @keyframes loading {
    from {
      left: -200px;
      width: 30%;
    }
    50% {
      width: 30%;
    }
    70% {
      width: 70%;
    }
    80% {
      left: 50%;
    }
    95% {
      left: 120%;
    }
    to {
      left: 100%;
    }
  }
  .maz-flip-list-move {
    transition: transform 600ms;
  }
  .maz-tab-transition-enter {
    transform: translate(100%, 0);
  }
  .maz-tab-transition-leave,
  .maz-tab-transition-leave-active {
    position: absolute !important;
    top: 0;
  }
  .maz-tab-transition-leave-to {
    position: absolute !important;
    transform: translate(-100%, 0);
  }
  .maz-tab-reverse-transition-enter {
    transform: translate(-100%, 0);
  }
  .maz-tab-reverse-transition-leave,
  .maz-tab-reverse-transition-leave-to {
    top: 0;
    position: absolute !important;
    transform: translate(100%, 0);
  }
  .maz-avatar {
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
    position: relative;
  }
  .maz-avatar img {
    transition: all 0.4s ease-in-out;
  }
  .maz-avatar__avatar-link {
    height: 100%;
  }
  .maz-avatar.editable .maz-avatar__editable-layer {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 100%;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
    transform: scale(0);
    cursor: pointer;
  }
  .maz-avatar.editable .maz-avatar__editable-layer i {
    color: #fff;
  }
  .maz-avatar.editable:hover img {
    -webkit-filter: blur(1.5px);
    filter: blur(1.5px);
  }
  .maz-avatar.editable:hover .maz-avatar__editable-layer {
    opacity: 1;
    transform: scale(1);
    background-color: var(--maz-primary-alpha-40);
  }
  .maz-avatar.bordered {
    border: calc(var(--maz-border-width) * 2) solid var(--maz-border-color);
  }
  .maz-avatar.has-link {
    cursor: pointer;
  }
  .maz-avatar__picture {
    vertical-align: middle;
    height: 100%;
  }
  .maz-avatar.square {
    border-radius: var(--maz-border-radius);
  }
  .maz-bottom-sheet__mask {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    transition: all 500ms ease-in-out;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    right: 0;
    bottom: 0;
    z-index: 1050;
    overflow: hidden;
  }
  .maz-bottom-sheet__mask:not(.no-overlay) {
    background-color: var(--maz-overlay-color);
    cursor: pointer;
  }
  .maz-bottom-sheet__container {
    padding-left: 3rem;
    padding-right: 3rem;
    box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.2);
  }
  .maz-bottom-sheet__wrapper {
    width: 100%;
    position: fixed;
    bottom: 0;
  }
  .maz-bottom-sheet__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  .maz-btn-group__item {
    margin-right: -2px;
    z-index: 0;
    border-radius: 0;
  }
  .maz-btn-group__item.maz-active,
  .maz-btn-group__item:focus {
    z-index: 1;
  }
  .maz-btn-group__item.maz-active::before,
  .maz-btn-group__item:focus::before {
    border: none;
  }
  .maz-btn-group__item:first-child {
    border-top-left-radius: var(--maz-border-radius);
    border-bottom-left-radius: var(--maz-border-radius);
  }
  .maz-btn-group__item:last-child {
    border-top-right-radius: var(--maz-border-radius);
    border-bottom-right-radius: var(--maz-border-radius);
  }
  .maz-btn-group__item.maz-btn--outline::after {
    border-radius: 0;
  }
  .maz-btn-group__item.maz-btn--outline:first-child::after {
    border-top-left-radius: var(--maz-border-radius);
    border-bottom-left-radius: var(--maz-border-radius);
  }
  .maz-btn-group__item.maz-btn--outline:last-child::after {
    border-top-right-radius: var(--maz-border-radius);
    border-bottom-right-radius: var(--maz-border-radius);
  }
  .maz-btn-group__item.maz-btn--outline.maz-btn--rounded::after {
    border-radius: 0;
  }
  .maz-btn-group__item.maz-btn--outline.maz-btn--rounded:first-child::after {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }
  .maz-btn-group__item.maz-btn--outline.maz-btn--rounded:last-child::after {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }
  .maz-btn-group__item.maz-btn--rounded {
    border-radius: 0;
  }
  .maz-btn-group__item.maz-btn--rounded:first-child {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }
  .maz-btn-group__item.maz-btn--rounded:last-child {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }
  .maz-card {
    min-width: 250px;
    max-width: 100%;
    color: var(--maz-text-color);
    background-color: var(--maz-bg-color);
    position: relative;
  }
  .maz-card--linked {
    transition: all 300ms ease-in-out;
    transform: scale(1);
  }
  .maz-card--linked:hover:not(.maz-card--no-scale) {
    z-index: 1;
    transform: scale(1.02);
  }
  .maz-card--linked .maz-card__wrapper {
    color: var(--maz-text-color);
    text-decoration: none;
    cursor: pointer;
  }
  .maz-card--linked .maz-card__wrapper:hover {
    text-decoration: none;
  }
  .maz-card__content__wrapper {
    max-width: 100%;
    position: relative;
  }
  .maz-card__title,
  .maz-card__title > * {
    font-size: 1.5rem;
  }
  .maz-card__subtitle,
  .maz-card__subtitle > * {
    font-size: 1.2rem;
  }
  .maz-card__gallery__wrapper {
    position: relative;
  }
  .maz-card__actions {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .maz-card__actions > *:not(:last-child) {
    margin-right: 0.5rem;
  }
  .maz-carousel {
    position: relative;
    width: 100%;
  }
  .maz-carousel__items {
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    overflow-x: auto;
    scroll-behavior: smooth;
  }
  .maz-carousel__items > *:not(:last-child) {
    margin-right: 1.5rem;
  }
  .maz-carousel__items__spacer {
    flex: 0 0 1px;
    width: 1px;
    height: 1px;
  }
  .maz-carousel__btn--muted {
    fill: var(--maz-grey) !important;
    color: var(--maz-grey) !important;
  }
  .maz-checkbox {
    transition: all 300ms ease-in-out;
    cursor: pointer;
    margin-left: 2px;
    min-height: 22px;
  }
  .maz-checkbox [type='checkbox']:not(:checked),
  .maz-checkbox [type='checkbox']:checked {
    position: absolute;
    left: -9999px;
  }
  .maz-checkbox [type='checkbox']:not(:checked) + label,
  .maz-checkbox [type='checkbox']:checked + label {
    position: relative;
    padding-left: 25px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .maz-checkbox [type='checkbox'] + label::before {
    border: var(--maz-border-width) solid transparent;
    content: '';
    position: absolute;
    left: 0;
    top: 2px;
    width: 18px;
    height: 18px;
    background: transparent;
    border-radius: 4px;
    transition: all 300ms ease-in-out;
  }
  .maz-checkbox [type='checkbox']:focus + label::before {
    border: var(--maz-border-width) solid var(--maz-primary);
    content: '';
    position: absolute;
    left: 0;
    top: 2px;
    width: 18px;
    height: 18px;
    background: transparent;
    border-radius: 4px;
    transition: all 300ms ease-in-out;
  }
  .maz-checkbox [type='checkbox']:not(:checked) + label::before {
    border-color: var(--maz-border-color-darken);
  }
  .maz-checkbox [type='checkbox']:not(:checked) + label::after,
  .maz-checkbox [type='checkbox']:checked + label::after {
    content: '';
    position: absolute;
    top: 6px;
    left: 4px;
    width: 10px;
    height: 10px;
    transition: all 300ms ease-in-out;
    border-radius: 2px;
  }
  .maz-checkbox [type='checkbox']:not(:checked) + label::after {
    opacity: 0;
    transform: scale(0);
  }
  .maz-checkbox [type='checkbox']:checked + label::after {
    opacity: 1;
    transform: scale(1);
  }
  .maz-checkbox--primary [type='checkbox']:checked + label::before {
    border-color: var(--maz-primary);
  }
  .maz-checkbox--primary [type='checkbox']:not(:checked) + label::after,
  .maz-checkbox--primary [type='checkbox']:checked + label::after {
    background-color: var(--maz-primary);
    color: var(--maz-primary);
  }
  .maz-checkbox--primary [type='checkbox']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-primary-alpha-60);
    border-color: var(--maz-primary-darken);
  }
  .maz-checkbox--primary [type='checkbox']:focus + label::after {
    background-color: var(--maz-primary-darken);
  }
  .maz-checkbox--secondary [type='checkbox']:checked + label::before {
    border-color: var(--maz-secondary);
  }
  .maz-checkbox--secondary [type='checkbox']:not(:checked) + label::after,
  .maz-checkbox--secondary [type='checkbox']:checked + label::after {
    background-color: var(--maz-secondary);
    color: var(--maz-secondary);
  }
  .maz-checkbox--secondary [type='checkbox']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-secondary-alpha-60);
    border-color: var(--maz-secondary-darken);
  }
  .maz-checkbox--secondary [type='checkbox']:focus + label::after {
    background-color: var(--maz-secondary-darken);
  }
  .maz-checkbox--third [type='checkbox']:checked + label::before {
    border-color: var(--maz-third);
  }
  .maz-checkbox--third [type='checkbox']:not(:checked) + label::after,
  .maz-checkbox--third [type='checkbox']:checked + label::after {
    background-color: var(--maz-third);
    color: var(--maz-third);
  }
  .maz-checkbox--third [type='checkbox']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-third-alpha-60);
    border-color: var(--maz-third-darken);
  }
  .maz-checkbox--third [type='checkbox']:focus + label::after {
    background-color: var(--maz-third-darken);
  }
  .maz-checkbox--success [type='checkbox']:checked + label::before {
    border-color: var(--maz-success);
  }
  .maz-checkbox--success [type='checkbox']:not(:checked) + label::after,
  .maz-checkbox--success [type='checkbox']:checked + label::after {
    background-color: var(--maz-success);
    color: var(--maz-success);
  }
  .maz-checkbox--success [type='checkbox']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-success-alpha-60);
    border-color: var(--maz-success-darken);
  }
  .maz-checkbox--success [type='checkbox']:focus + label::after {
    background-color: var(--maz-success-darken);
  }
  .maz-checkbox--danger [type='checkbox']:checked + label::before {
    border-color: var(--maz-danger);
  }
  .maz-checkbox--danger [type='checkbox']:not(:checked) + label::after,
  .maz-checkbox--danger [type='checkbox']:checked + label::after {
    background-color: var(--maz-danger);
    color: var(--maz-danger);
  }
  .maz-checkbox--danger [type='checkbox']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-danger-alpha-60);
    border-color: var(--maz-danger-darken);
  }
  .maz-checkbox--danger [type='checkbox']:focus + label::after {
    background-color: var(--maz-danger-darken);
  }
  .maz-checkbox--grey [type='checkbox']:checked + label::before {
    border-color: var(--maz-grey);
  }
  .maz-checkbox--grey [type='checkbox']:not(:checked) + label::after,
  .maz-checkbox--grey [type='checkbox']:checked + label::after {
    background-color: var(--maz-grey);
    color: var(--maz-grey);
  }
  .maz-checkbox--grey [type='checkbox']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-grey-alpha-60);
    border-color: var(--maz-grey-darken);
  }
  .maz-checkbox--grey [type='checkbox']:focus + label::after {
    background-color: var(--maz-grey-darken);
  }
  .maz-checkbox--info [type='checkbox']:checked + label::before {
    border-color: var(--maz-info);
  }
  .maz-checkbox--info [type='checkbox']:not(:checked) + label::after,
  .maz-checkbox--info [type='checkbox']:checked + label::after {
    background-color: var(--maz-info);
    color: var(--maz-info);
  }
  .maz-checkbox--info [type='checkbox']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-info-alpha-60);
    border-color: var(--maz-info-darken);
  }
  .maz-checkbox--info [type='checkbox']:focus + label::after {
    background-color: var(--maz-info-darken);
  }
  .maz-checkbox--warning [type='checkbox']:checked + label::before {
    border-color: var(--maz-warning);
  }
  .maz-checkbox--warning [type='checkbox']:not(:checked) + label::after,
  .maz-checkbox--warning [type='checkbox']:checked + label::after {
    background-color: var(--maz-warning);
    color: var(--maz-warning);
  }
  .maz-checkbox--warning [type='checkbox']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-warning-alpha-60);
    border-color: var(--maz-warning-darken);
  }
  .maz-checkbox--warning [type='checkbox']:focus + label::after {
    background-color: var(--maz-warning-darken);
  }
  .maz-checkbox--light [type='checkbox']:checked + label::before {
    border-color: var(--maz-light);
  }
  .maz-checkbox--light [type='checkbox']:not(:checked) + label::after,
  .maz-checkbox--light [type='checkbox']:checked + label::after {
    background-color: var(--maz-light);
    color: var(--maz-light);
  }
  .maz-checkbox--light [type='checkbox']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-light-alpha-60);
    border-color: var(--maz-light-darken);
  }
  .maz-checkbox--light [type='checkbox']:focus + label::after {
    background-color: var(--maz-light-darken);
  }
  .maz-checkbox--dark [type='checkbox']:checked + label::before {
    border-color: var(--maz-dark);
  }
  .maz-checkbox--dark [type='checkbox']:not(:checked) + label::after,
  .maz-checkbox--dark [type='checkbox']:checked + label::after {
    background-color: var(--maz-dark);
    color: var(--maz-dark);
  }
  .maz-checkbox--dark [type='checkbox']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-dark-alpha-60);
    border-color: var(--maz-dark-darken);
  }
  .maz-checkbox--dark [type='checkbox']:focus + label::after {
    background-color: var(--maz-dark-darken);
  }
  .maz-checkbox--default [type='checkbox']:checked + label::before {
    border-color: var(--maz-default);
  }
  .maz-checkbox--default [type='checkbox']:not(:checked) + label::after,
  .maz-checkbox--default [type='checkbox']:checked + label::after {
    background-color: var(--maz-default);
    color: var(--maz-default);
  }
  .maz-checkbox--default [type='checkbox']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-default-alpha-60);
    border-color: var(--maz-default-darken);
  }
  .maz-checkbox--default [type='checkbox']:focus + label::after {
    background-color: var(--maz-default-darken);
  }
  .maz-checkbox--disabled [type='checkbox']:checked + label::before {
    border-color: var(--maz-disabled);
  }
  .maz-checkbox--disabled [type='checkbox']:not(:checked) + label::after,
  .maz-checkbox--disabled [type='checkbox']:checked + label::after {
    background-color: var(--maz-disabled);
    color: var(--maz-disabled);
  }
  .maz-checkbox--disabled [type='checkbox']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-disabled-alpha-60);
    border-color: var(--maz-disabled-darken);
  }
  .maz-checkbox--disabled [type='checkbox']:focus + label::after {
    background-color: var(--maz-disabled-darken);
  }
  .maz-checkbox--white [type='checkbox']:checked + label::before {
    border-color: var(--maz-white);
  }
  .maz-checkbox--white [type='checkbox']:not(:checked) + label::after,
  .maz-checkbox--white [type='checkbox']:checked + label::after {
    background-color: var(--maz-white);
    color: var(--maz-white);
  }
  .maz-checkbox--white [type='checkbox']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-white-alpha-60);
    border-color: var(--maz-white-darken);
  }
  .maz-checkbox--white [type='checkbox']:focus + label::after {
    background-color: var(--maz-white-darken);
  }
  .maz-checkbox--black [type='checkbox']:checked + label::before {
    border-color: var(--maz-black);
  }
  .maz-checkbox--black [type='checkbox']:not(:checked) + label::after,
  .maz-checkbox--black [type='checkbox']:checked + label::after {
    background-color: var(--maz-black);
    color: var(--maz-black);
  }
  .maz-checkbox--black [type='checkbox']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-black-alpha-60);
    border-color: var(--maz-black-darken);
  }
  .maz-checkbox--black [type='checkbox']:focus + label::after {
    background-color: var(--maz-black-darken);
  }
  .maz-checkbox--transparent [type='checkbox']:checked + label::before {
    border-color: var(--maz-transparent);
  }
  .maz-checkbox--transparent [type='checkbox']:not(:checked) + label::after,
  .maz-checkbox--transparent [type='checkbox']:checked + label::after {
    background-color: var(--maz-transparent);
    color: var(--maz-transparent);
  }
  .maz-checkbox--transparent [type='checkbox']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-transparent-alpha-60);
    border-color: var(--maz-transparent-darken);
  }
  .maz-checkbox--transparent [type='checkbox']:focus + label::after {
    background-color: var(--maz-transparent-darken);
  }
  .maz-checkbox--light-grey [type='checkbox']:checked + label::before {
    border-color: var(--maz-light-grey);
  }
  .maz-checkbox--light-grey [type='checkbox']:not(:checked) + label::after,
  .maz-checkbox--light-grey [type='checkbox']:checked + label::after {
    background-color: var(--maz-light-grey);
    color: var(--maz-light-grey);
  }
  .maz-checkbox--light-grey [type='checkbox']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-light-grey-alpha-60);
    border-color: var(--maz-light-grey-darken);
  }
  .maz-checkbox--light-grey [type='checkbox']:focus + label::after {
    background-color: var(--maz-light-grey-darken);
  }
  .maz-collapse {
    color: var(--maz-text-color);
    border-radius: var(--maz-border-radius);
    overflow: hidden;
    background-color: var(--maz-bg-color);
    border: var(--maz-border-width) solid var(--maz-border-color);
  }
  .maz-collapse__header-btn {
    background-color: transparent;
    border: none;
    border-radius: 0;
    color: var(--maz-text-color);
    width: 100%;
    outline: none;
    font-size: 1rem;
  }
  .maz-collapse__header-btn.maz-btn::before {
    border: none;
  }
  .maz-collapse__content {
    border-top: var(--maz-border-width) solid var(--maz-border-color);
  }
  .maz-dialog--mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    background-color: var(--maz-overlay-color);
    transition: all 300ms ease;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .maz-dialog__wrapper {
    vertical-align: middle;
    min-height: 100%;
    width: 100%;
  }
  .maz-dialog__body {
    color: var(--maz-text-color);
  }
  .maz-dialog__container {
    margin: 30px auto;
    transition: all 300ms ease;
    max-width: 95%;
    width: 400px;
  }
  .maz-dialog__header {
    background-color: var(--maz-primary);
    border-top-left-radius: var(--maz-border-radius);
    border-top-right-radius: var(--maz-border-radius);
    border: none;
  }
  .maz-dialog__header__title {
    color: #fff;
    font-size: 1.25rem !important;
    margin: 0;
    padding: 0;
  }
  .maz-dialog__header .close-modal i {
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
  }
  .maz-dialog__header .close-modal i:hover {
    font-weight: bold;
  }
  .maz-dialog__footer {
    border-bottom-left-radius: var(--maz-border-radius);
    border-bottom-right-radius: var(--maz-border-radius);
  }
  .maz-dialog--success .maz-dialog__header {
    background-color: var(--maz-success);
  }
  .maz-dialog--danger .maz-dialog__header {
    background-color: var(--maz-danger);
  }
  .maz-dialog--fullsize .maz-dialog__header {
    border-radius: 0;
  }
  .maz-dialog--fullsize .maz-dialog__wrapper {
    height: 100%;
  }
  .maz-dialog--fullsize .maz-dialog__container {
    margin: 0;
    border-radius: 0;
    flex: 1;
    height: 100%;
    width: 100%;
    max-width: 100%;
  }
  .maz-dialog--fullsize .maz-dialog__body {
    flex: 1;
    height: 100%;
    overflow-y: auto;
  }
  .maz-draggable-list {
    display: flex;
    flex-direction: column;
  }
  .maz-draggable-list__item {
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: -2px;
    background-color: var(--maz-bg-color);
    border: var(--maz-border-width) solid var(--maz-hover-color);
    cursor: move;
    width: 100%;
    font-size: 0.875em;
    color: var(--maz-text-color);
  }
  .maz-draggable-list__item > * {
    color: var(--maz-text-color);
  }
  .maz-draggable-list__item:hover {
    background-color: var(--maz-hover-color);
  }
  .maz-draggable-list__item:first-child {
    border-top-left-radius: var(--maz-border-radius);
    border-top-right-radius: var(--maz-border-radius);
  }
  .maz-draggable-list__item:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: var(--maz-border-radius);
    border-bottom-left-radius: var(--maz-border-radius);
  }
  .maz-draggable-list .flip-list-move {
    transition: transform 0.5s;
  }
  .maz-draggable-list .ghost {
    opacity: 0.5;
  }
  .maz-dropdown {
    position: relative;
    display: inline-flex;
  }
  .maz-dropdown__btn {
    padding-right: 0.625rem;
    padding-left: 0.625rem;
  }
  .maz-dropdown__btn__icon {
    transition: all 300ms ease-in-out;
  }
  .maz-dropdown__btn__icon.rotate {
    transform: rotate(-180deg);
  }
  .maz-dropdown__dropdown {
    position: absolute;
    overflow: hidden;
    z-index: 1040;
  }
  .maz-dropdown__dropdown:not(.maz-dropdown__dropdown--top) {
    top: 100%;
  }
  .maz-dropdown__dropdown--top {
    bottom: 100%;
  }
  .maz-dropdown__dropdown--left {
    left: 0;
  }
  .maz-dropdown__dropdown--right {
    right: 0;
  }
  @-webkit-keyframes passing-through {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    30%,
    70% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-40px);
    }
  }
  @keyframes passing-through {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    30%,
    70% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-40px);
    }
  }
  @-webkit-keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    30% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    30% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @-webkit-keyframes pulse {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.1);
    }
    20% {
      transform: scale(1);
    }
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.1);
    }
    20% {
      transform: scale(1);
    }
  }
  .dropzone,
  .dropzone * {
    box-sizing: border-box;
  }
  .dropzone {
    min-height: 150px;
    border: var(--maz-border-width) solid rgba(0, 0, 0, 0.3);
    background: #fff;
    padding: 20px 20px;
  }
  .dropzone.dz-clickable {
    cursor: pointer;
  }
  .dropzone.dz-clickable * {
    cursor: default;
  }
  .dropzone.dz-clickable .dz-message,
  .dropzone.dz-clickable .dz-message * {
    cursor: pointer;
  }
  .dropzone.dz-started .dz-message {
    display: none;
  }
  .dropzone.dz-drag-hover {
    border-style: solid;
  }
  .dropzone.dz-drag-hover .dz-message {
    opacity: 0.5;
  }
  .dropzone .dz-message {
    text-align: center;
    margin: 2em 0;
  }
  .dropzone .dz-preview {
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin: 16px;
    min-height: 100px;
  }
  .dropzone .dz-preview:hover {
    z-index: 1000;
  }
  .dropzone .dz-preview:hover .dz-details {
    opacity: 1;
  }
  .dropzone .dz-preview.dz-file-preview .dz-image {
    border-radius: 20px;
    background: #999;
    background: linear-gradient(to bottom, #eee, #ddd);
  }
  .dropzone .dz-preview.dz-file-preview .dz-details {
    opacity: 1;
  }
  .dropzone .dz-preview.dz-image-preview {
    background: #fff;
  }
  .dropzone .dz-preview.dz-image-preview .dz-details {
    transition: opacity 0.2s linear;
  }
  .dropzone .dz-preview .dz-remove {
    font-size: 1rem;
    text-align: center;
    display: block;
    cursor: pointer;
    border: none;
  }
  .dropzone .dz-preview .dz-remove:hover {
    text-decoration: underline;
  }
  .dropzone .dz-preview:hover .dz-details {
    opacity: 1;
  }
  .dropzone .dz-preview .dz-details {
    z-index: 20;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    font-size: 0.929rem;
    min-width: 100%;
    max-width: 100%;
    padding: 10px;
    text-align: center;
    color: rgba(0, 0, 0, 0.9);
    line-height: 150%;
  }
  .dropzone .dz-preview .dz-details .dz-size {
    margin-bottom: 1rem;
    font-size: 1.143rem;
  }
  .dropzone .dz-preview .dz-details .dz-filename {
    white-space: nowrap;
    max-width: 100%;
  }
  .dropzone .dz-preview .dz-details .dz-filename:hover span {
    border: 1px solid rgba(200, 200, 200, 0.8);
    background-color: rgba(255, 255, 255, 0.8);
  }
  .dropzone .dz-preview .dz-details .dz-filename:not(:hover) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .dropzone .dz-preview .dz-details .dz-filename:not(:hover) span {
    border: 1px solid transparent;
  }
  .dropzone .dz-preview .dz-details .dz-filename span,
  .dropzone .dz-preview .dz-details .dz-size span {
    background-color: rgba(255, 255, 255, 0.4);
    padding: 0 0.4rem;
    border-radius: 3px;
  }
  .dropzone .dz-preview:hover .dz-image img {
    transform: scale(1.05, 1.05);
    -webkit-filter: blur(8px);
    filter: blur(8px);
  }
  .dropzone .dz-preview .dz-image {
    border-radius: 20px;
    overflow: hidden;
    width: 120px;
    height: 120px;
    position: relative;
    display: block;
    z-index: 10;
  }
  .dropzone .dz-preview .dz-image img {
    display: block;
  }
  .dropzone .dz-preview.dz-success .dz-success-mark {
    -webkit-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);
    animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);
  }
  .dropzone .dz-preview.dz-error .dz-error-mark {
    opacity: 1;
    -webkit-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);
    animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);
  }
  .dropzone .dz-preview .dz-success-mark,
  .dropzone .dz-preview .dz-error-mark {
    pointer-events: none;
    opacity: 0;
    z-index: 500;
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    margin-left: -27px;
    margin-top: -27px;
  }
  .dropzone .dz-preview .dz-success-mark svg,
  .dropzone .dz-preview .dz-error-mark svg {
    display: block;
    width: 54px;
    height: 54px;
  }
  .dropzone .dz-preview.dz-processing .dz-progress {
    opacity: 1;
    transition: all 0.2s linear;
  }
  .dropzone .dz-preview.dz-complete .dz-progress {
    opacity: 0;
    transition: opacity 0.4s ease-in;
  }
  .dropzone .dz-preview:not(.dz-processing) .dz-progress {
    -webkit-animation: pulse 6s ease infinite;
    animation: pulse 6s ease infinite;
  }
  .dropzone .dz-preview .dz-progress {
    opacity: 1;
    z-index: 1000;
    pointer-events: none;
    position: absolute;
    height: 16px;
    left: 50%;
    top: 50%;
    margin-top: -8px;
    width: 80px;
    margin-left: -40px;
    background: rgba(255, 255, 255, 0.9);
    transform: scale(1);
    border-radius: 8px;
    overflow: hidden;
  }
  .dropzone .dz-preview .dz-progress .dz-upload {
    background: #333;
    background: linear-gradient(to bottom, var(--maz-success), var(--maz-success));
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 0;
    transition: width 300ms ease-in-out;
  }
  .dropzone .dz-preview.dz-error .dz-error-message {
    display: block;
  }
  .dropzone .dz-preview.dz-error:hover .dz-error-message {
    opacity: 1;
    pointer-events: auto;
  }
  .dropzone .dz-preview .dz-error-message {
    pointer-events: none;
    z-index: 1000;
    position: absolute;
    display: block;
    display: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 8px;
    font-size: 0.929rem;
    top: 130px;
    left: -10px;
    width: 140px;
    background: #be2626;
    background: linear-gradient(to bottom, #be2626, #a92222);
    padding: 0.5em 1.2rem;
    color: #fff;
  }
  .dropzone .dz-preview .dz-error-message::after {
    content: '';
    position: absolute;
    top: -6px;
    left: 64px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #be2626;
  }
  .vue-dropzone {
    border: var(--maz-border-width) solid #e5e5e5;
    letter-spacing: 0.2px;
    color: #777;
    transition: 0.2s linear;
  }
  .vue-dropzone:hover {
    background-color: #f6f6f6;
  }
  .vue-dropzone > i {
    color: #ccc;
  }
  .vue-dropzone > .dz-preview .dz-image {
    border-radius: 0;
    width: 100%;
    height: 100%;
  }
  .vue-dropzone > .dz-preview .dz-image img:not([src]) {
    width: 200px;
    height: 200px;
  }
  .vue-dropzone > .dz-preview .dz-image:hover img {
    transform: none;
    -webkit-filter: none;
  }
  .vue-dropzone > .dz-preview .dz-details {
    bottom: 0;
    top: 0;
    color: #fff;
    background-color: rgba(33, 150, 243, 0.8);
    transition: opacity 0.2s linear;
    text-align: left;
  }
  .vue-dropzone > .dz-preview .dz-details .dz-filename {
    overflow: hidden;
  }
  .vue-dropzone > .dz-preview .dz-details .dz-filename span,
  .vue-dropzone > .dz-preview .dz-details .dz-size span {
    background-color: transparent;
  }
  .vue-dropzone > .dz-preview .dz-details .dz-filename:not(:hover) span {
    border: none;
  }
  .vue-dropzone > .dz-preview .dz-details .dz-filename:hover span {
    background-color: transparent;
    border: none;
  }
  .vue-dropzone > .dz-preview .dz-remove {
    position: absolute;
    z-index: 30;
    color: #fff;
    margin-left: 10px;
    padding: 10px;
    top: inherit;
    bottom: 10px;
    border-radius: var(--maz-border-radius);
    border: 1px #fff solid;
    text-decoration: none !important;
    text-transform: uppercase;
    font-size: 0.857rem;
    width: calc(100% - 20px);
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
  .vue-dropzone > .dz-preview .dz-remove:hover {
    background-color: #fff;
    color: var(--maz-primary);
  }
  .vue-dropzone > .dz-preview.dz-error .dz-remove:hover {
    background-color: #fff;
    color: var(--maz-danger);
  }
  .vue-dropzone > .dz-preview:hover .dz-remove {
    opacity: 1;
  }
  .vue-dropzone > .dz-preview .dz-error-mark,
  .vue-dropzone > .dz-preview .dz-success-mark {
    margin-left: auto;
    margin-top: auto;
    width: 100%;
    top: 35%;
    left: 0;
  }
  .vue-dropzone > .dz-preview .dz-error-mark svg,
  .vue-dropzone > .dz-preview .dz-success-mark svg {
    margin-left: auto;
    margin-right: auto;
  }
  .vue-dropzone > .dz-preview .dz-error-message {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    width: 100%;
    text-align: center;
  }
  .vue-dropzone > .dz-preview .dz-error-message::after {
    display: none;
  }
  .maz-dropzone {
    border: var(--maz-border-width) dashed var(--maz-border-color);
    min-height: 245px;
    background-color: var(--maz-bg-color);
    cursor: pointer;
    border-radius: var(--maz-border-radius);
    transition: all 300ms ease-in-out;
  }
  .maz-dropzone .dz-preview {
    margin: 0;
    min-height: auto;
    background: transparent;
    max-width: 200px;
  }
  .maz-dropzone .dz-preview:not(:last-child) {
    margin-right: 10px;
  }
  .maz-dropzone .dz-preview.dz-image-preview {
    background-color: transparent;
  }
  .maz-dropzone .dz-progress {
    overflow: visible;
    background-color: var(--maz-hover-color);
    width: 150px;
    left: calc(50% - 35px);
  }
  .maz-dropzone .dz-progress .dz-upload {
    background-color: var(--maz-primary);
    border-radius: 16px;
  }
  .maz-dropzone .dz-progress .progress-title {
    display: inline-block;
    position: relative;
    top: -30px;
  }
  .maz-dropzone .dz-message {
    margin: 0;
    text-align: center;
  }
  .maz-dropzone .dz-success-mark .material-icons {
    background-color: var(--maz-success-alpha-60);
    border-radius: 50%;
    color: #fff;
    font-size: 70px;
  }
  .maz-dropzone .dz-error-mark {
    text-align: center;
  }
  .maz-dropzone .dz-error-mark .material-icons {
    background-color: var(--maz-danger-alpha-60);
    border-radius: 50%;
    color: #fff;
    font-size: 70px;
  }
  .maz-dropzone .dz-preview .dz-image {
    width: 100%;
    height: 200px;
    margin: 0 auto;
    border-radius: var(--maz-border-radius);
    border-color: var(--maz-hover-color);
  }
  .maz-dropzone .dz-preview .dz-image > div {
    width: inherit;
    height: inherit;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .maz-dropzone .dz-preview .dz-image > img {
    width: 100%;
  }
  .maz-dropzone .dz-preview .dz-details {
    width: 100%;
    height: 200px;
    color: #fff;
    background-color: var(--maz-primary-alpha-60);
    transition: opacity 0.2s linear;
    text-align: center;
    border-radius: var(--maz-border-radius);
  }
  .maz-dropzone .dz-error.dz-preview .dz-details {
    background-color: var(--maz-danger-alpha-60);
  }
  .maz-dropzone:hover,
  .maz-dropzone:focus {
    outline: none;
    background-color: var(--maz-hover-color);
  }
  .maz-dropzone:hover .dz-message .material-icons,
  .maz-dropzone:focus .dz-message .material-icons {
    color: var(--maz-primary) !important;
  }
  .maz-img {
    position: relative;
    overflow: hidden;
    max-height: 100%;
    max-width: 100%;
    transition: all 300ms ease-in-out, width 0ms, height 0ms;
  }
  .maz-img--loading {
    width: 200px;
    height: 200px;
  }
  .maz-img--fullwidth {
    width: 100% !important;
  }
  .maz-img:not(.maz-img--no-shadow) {
    box-shadow: 0 0 1rem 0 rgba(2, 32, 43, 0.1);
  }
  .maz-img__bg-img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
    width: 100%;
    transition: all 300ms ease-in-out;
  }
  .maz-img__bg-img--contain,
  .maz-img__bg-img--fullsize {
    background-size: contain;
  }
  .maz-img figcaption {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--maz-overlay-color);
  }
  .maz-input-tags {
    position: relative;
    border: var(--maz-border-width) solid var(--maz-border-color);
    border-radius: var(--maz-border-radius);
    padding: 0 0.5714rem;
    width: 100%;
    min-height: 3rem;
    background-color: var(--maz-bg-color);
    overflow: hidden;
    transition-duration: 0.3s;
  }
  .maz-input-tags__input {
    cursor: pointer;
    border: none;
    background-color: transparent;
    transition-duration: 0.3s;
    position: relative;
    font-weight: 400;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    font-size: 1rem;
    z-index: 0;
    min-width: 100px;
    padding-right: 0.2857rem;
    padding-bottom: 0.2857rem;
    padding-top: 0.2857rem;
    color: var(--maz-text-color);
  }
  .maz-input-tags__input::-webkit-input-placeholder {
    color: var(--maz-placeholder-color);
  }
  .maz-input-tags__input::-moz-placeholder {
    color: var(--maz-placeholder-color);
  }
  .maz-input-tags__input:-ms-input-placeholder {
    color: var(--maz-placeholder-color);
  }
  .maz-input-tags__input::-ms-input-placeholder {
    color: var(--maz-placeholder-color);
  }
  .maz-input-tags__input::placeholder {
    color: var(--maz-placeholder-color);
  }
  .maz-input-tags.maz-input-tags--primary.is-focused:not(.is-disabled) {
    border-color: var(--maz-primary);
  }
  .maz-input-tags.maz-input-tags--secondary.is-focused:not(.is-disabled) {
    border-color: var(--maz-secondary);
  }
  .maz-input-tags.maz-input-tags--third.is-focused:not(.is-disabled) {
    border-color: var(--maz-third);
  }
  .maz-input-tags.maz-input-tags--success.is-focused:not(.is-disabled) {
    border-color: var(--maz-success);
  }
  .maz-input-tags.maz-input-tags--danger.is-focused:not(.is-disabled) {
    border-color: var(--maz-danger);
  }
  .maz-input-tags.maz-input-tags--grey.is-focused:not(.is-disabled) {
    border-color: var(--maz-grey);
  }
  .maz-input-tags.maz-input-tags--info.is-focused:not(.is-disabled) {
    border-color: var(--maz-info);
  }
  .maz-input-tags.maz-input-tags--warning.is-focused:not(.is-disabled) {
    border-color: var(--maz-warning);
  }
  .maz-input-tags.maz-input-tags--light.is-focused:not(.is-disabled) {
    border-color: var(--maz-light);
  }
  .maz-input-tags.maz-input-tags--dark.is-focused:not(.is-disabled) {
    border-color: var(--maz-dark);
  }
  .maz-input-tags.maz-input-tags--default.is-focused:not(.is-disabled) {
    border-color: var(--maz-default);
  }
  .maz-input-tags.maz-input-tags--disabled.is-focused:not(.is-disabled) {
    border-color: var(--maz-disabled);
  }
  .maz-input-tags.maz-input-tags--white.is-focused:not(.is-disabled) {
    border-color: var(--maz-white);
  }
  .maz-input-tags.maz-input-tags--black.is-focused:not(.is-disabled) {
    border-color: var(--maz-black);
  }
  .maz-input-tags.maz-input-tags--transparent.is-focused:not(.is-disabled) {
    border-color: var(--maz-transparent);
  }
  .maz-input-tags.maz-input-tags--light-grey.is-focused:not(.is-disabled) {
    border-color: var(--maz-light-grey);
  }
  .maz-input-tags.is-focused:not(.is-disabled).has-error {
    border-color: var(--maz-danger);
  }
  .maz-input-tags.is-focused:not(.is-disabled).is-valid {
    border-color: var(--maz-success);
  }
  .maz-input-tags__tag {
    margin-right: 0.2857rem;
    margin-bottom: 0.2857rem;
    margin-top: 0.2857rem;
    border-radius: calc(var(--maz-border-radius) / 2);
    padding-right: 0.2857rem;
    padding-left: 0.5rem;
    color: #fff;
    height: calc(2.4286rem - var(--maz-border-width) * 2);
  }
  .maz-input-tags__tag__text {
    margin-right: 0.3571rem;
  }
  .maz-input-tags__tag__clear {
    font-size: 1.2rem;
  }
  .maz-input-tags__tag.maz-btn::before {
    border: none;
  }
  .maz-input-tags__toggle-btn {
    position: absolute;
    top: 1px;
    bottom: 0;
    right: 0.5714rem;
    margin: auto 0;
    width: 1.714rem;
    height: 1.714rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background-color: transparent;
    color: var(--maz-icon-color);
    border-radius: 1.714rem;
    cursor: pointer;
    font-size: 0.857rem;
  }
  .maz-input-tags__toggle-btn:focus {
    outline: none;
  }
  .maz-input-tags__toggle-btn__icon {
    position: relative;
    font-size: 1.286rem;
  }
  .maz-input-tags__toggle-btn__effect {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 1.714rem;
    height: 1.714rem;
    background-color: var(--maz-border-color-darken);
    border-radius: 1.714rem;
    transform: scale(0);
    transition: transform 200ms;
  }
  .maz-input-tags__toggle-btn:hover {
    color: #fff;
  }
  .maz-input-tags__toggle-btn:hover .maz-input-tags__toggle-btn__effect {
    transform: scale(1);
    opacity: 0.6;
  }
  .maz-input-tags.is-disabled {
    cursor: not-allowed;
    border-color: #ccc;
    background-color: var(--maz-disabled-color);
    color: var(--maz-disabled-color-darken);
  }
  .maz-input-tags.is-disabled .maz-input-tags__input {
    cursor: not-allowed;
    color: var(--maz-disabled-color-darken);
  }
  .maz-input-tags.is-disabled .maz-input-tags__input::-webkit-input-placeholder {
    color: var(--maz-disabled-color-darken);
  }
  .maz-input-tags.is-disabled .maz-input-tags__input::-moz-placeholder {
    color: var(--maz-disabled-color-darken);
  }
  .maz-input-tags.is-disabled .maz-input-tags__input:-ms-input-placeholder {
    color: var(--maz-disabled-color-darken);
  }
  .maz-input-tags.is-disabled .maz-input-tags__input::-ms-input-placeholder {
    color: var(--maz-disabled-color-darken);
  }
  .maz-input-tags.is-disabled .maz-input-tags__input::placeholder {
    color: var(--maz-disabled-color-darken);
  }
  .maz-input-tags__loader {
    bottom: 0;
    height: var(--maz-border-width);
    left: calc(var(--maz-border-radius) / 2);
    width: calc(100% - 0.5714rem);
    position: absolute;
    overflow: hidden;
    border-radius: var(--maz-border-radius);
  }
  .maz-input-tags__loader__progress-bar {
    background-color: var(--maz-primary);
    display: block;
    position: absolute;
    content: '';
    left: -200px;
    width: 200px;
    height: 0.1429rem;
    -webkit-animation: loading 2s linear infinite;
    animation: loading 2s linear infinite;
  }
  .maz-input-tags--sm {
    min-height: 2.571rem;
  }
  .maz-input-tags--sm .maz-input-tags__input {
    font-size: 0.857em;
    min-height: 2.286rem;
  }
  .maz-input-tags--sm .maz-input-tags__tag {
    padding-right: 0.1429rem;
    padding-left: 0.3571rem;
    height: calc(1.9996rem - var(--maz-border-width) * 2);
  }
  .maz-input-tags--lg {
    min-height: 3.571rem;
  }
  .maz-input-tags--lg .maz-input-tags__input {
    font-size: 1.143rem;
    min-height: 3.286rem;
  }
  .maz-input-tags--lg .maz-input-tags__tag {
    padding-left: 0.7143rem;
    padding-right: 0.3571rem;
    height: calc(2.9996rem - var(--maz-border-width) * 2);
  }
  .maz-is-dark .maz-input-tags,
  .maz-is-dark.maz-input-tags {
    background-color: var(--maz-bg-color-light);
  }
  .maz-list {
    display: flex;
    flex-direction: column;
    border-radius: var(--maz-border-radius);
    margin-left: -1px;
    margin-right: -1px;
    max-width: 100%;
  }
  .maz-list:not(.no-scroll) {
    overflow-y: auto;
    overflow-x: hidden;
  }
  .maz-list--bordered {
    border: var(--maz-border-width) solid var(--maz-hover-color);
  }
  .maz-list-item {
    position: relative;
    padding: 0.75rem 1.25rem;
    border: none;
    border-bottom: var(--maz-border-width) solid var(--maz-hover-color);
    margin: 0;
    color: var(--maz-text-color);
    text-align: left;
    width: 100%;
    outline: none;
    background-color: transparent;
  }
  .maz-list-item.cursor-pointer {
    cursor: pointer;
  }
  .maz-list-item.has-hover:hover {
    background-color: var(--maz-hover-color);
  }
  .maz-list-item:first-child {
    border-top-left-radius: var(--maz-border-radius);
    border-top-right-radius: var(--maz-border-radius);
  }
  .maz-list-item:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: var(--maz-border-radius);
    border-bottom-left-radius: var(--maz-border-radius);
    border-bottom: none;
  }
  .pagination-arrow-btn {
    background-color: var(--maz-bg-color);
    margin-right: 10px;
    color: var(--maz-text-color);
  }
  .pagination-arrow-btn:last-child {
    margin-right: 0;
  }
  .pagination-arrow-btn:disabled {
    cursor: unset;
  }
  .pagination-arrow-btn:hover,
  .pagination-arrow-btn:focus {
    background-color: var(--maz-hover-color);
  }
  .pagination-arrow-btn.maz-btn::before {
    border-color: var(--maz-hover-color);
  }
  .pagination-dots-divider {
    color: var(--maz-text-color);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 35px;
    width: 35px;
    margin-right: 10px;
  }
  .pagination-number-btn {
    background-color: var(--maz-bg-color);
    margin-right: 10px;
    color: var(--maz-text-color);
  }
  .pagination-number-btn:last-child {
    margin-right: 0;
  }
  .pagination-number-btn:disabled {
    cursor: not-allowed;
  }
  .pagination-number-btn:hover,
  .pagination-number-btn:focus {
    background-color: var(--maz-hover-color-darken);
  }
  .pagination-number-btn.maz-btn::before {
    border-color: var(--maz-hover-color-darken);
  }
  .pagination-number-btn.active {
    background-color: var(--maz-primary);
    color: #fff;
  }
  .pagination-number-btn.active.maz-btn::before {
    border-color: var(--maz-primary);
  }
  .maz-pagination__container {
    height: 50px;
    border-radius: 50px;
    padding: 0 10px;
    background-color: var(--maz-hover-color);
  }
  .footer-picker__validate {
    padding-top: 4px;
    padding-bottom: 4px;
  }
  .footer-picker__validate i.material-icons {
    font-size: 20px;
  }
  .footer-picker > :nth-child(2) {
    margin-left: 0.5rem;
  }
  .maz-picker--primary .footer-picker__now {
    color: var(--maz-primary);
  }
  .maz-picker--secondary .footer-picker__now {
    color: var(--maz-secondary);
  }
  .maz-picker--third .footer-picker__now {
    color: var(--maz-third);
  }
  .maz-picker--success .footer-picker__now {
    color: var(--maz-success);
  }
  .maz-picker--danger .footer-picker__now {
    color: var(--maz-danger);
  }
  .maz-picker--grey .footer-picker__now {
    color: var(--maz-grey);
  }
  .maz-picker--info .footer-picker__now {
    color: var(--maz-info);
  }
  .maz-picker--warning .footer-picker__now {
    color: var(--maz-warning);
  }
  .maz-picker--light .footer-picker__now {
    color: var(--maz-light);
  }
  .maz-picker--dark .footer-picker__now {
    color: var(--maz-dark);
  }
  .maz-picker--default .footer-picker__now {
    color: var(--maz-default);
  }
  .maz-picker--disabled .footer-picker__now {
    color: var(--maz-disabled);
  }
  .maz-picker--white .footer-picker__now {
    color: var(--maz-white);
  }
  .maz-picker--black .footer-picker__now {
    color: var(--maz-black);
  }
  .maz-picker--transparent .footer-picker__now {
    color: var(--maz-transparent);
  }
  .maz-picker--light-grey .footer-picker__now {
    color: var(--maz-light-grey);
  }
  .header-picker {
    overflow: hidden;
    position: relative;
    height: 60px;
  }
  .header-picker__year {
    position: relative;
    overflow: hidden;
    opacity: 0.7;
    height: 21px;
    line-height: 21px;
  }
  .header-picker__date {
    position: relative;
    overflow: hidden;
    min-height: 0;
    height: 22px;
    line-height: 22px;
    font-size: 1.285rem;
  }
  .header-picker__time {
    width: 147px;
    height: 100%;
    font-size: 1.285rem;
  }
  .header-picker__hour,
  .header-picker__minute,
  .header-picker__dots-divider {
    position: relative;
    overflow: hidden;
    min-height: 0;
    height: 22px;
    line-height: 22px;
  }
  .header-picker__twelve {
    position: relative;
    overflow: hidden;
    min-height: 0;
    height: 22px;
    line-height: 22px;
    width: 80px;
  }
  .header-picker__hour,
  .header-picker__minute {
    width: 22px;
  }
  .header-picker__close {
    display: none;
  }
  .header-picker__close i {
    font-size: 20px;
  }
  .month-picker {
    min-height: 194px;
    min-width: 268px;
    width: 100%;
    overflow: hidden;
  }
  .month-picker--long {
    min-height: 231px;
  }
  .month-picker__days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 5px;
    width: 100%;
    justify-items: center;
  }
  .month-picker__day {
    padding: 0;
    width: 32px;
    height: 32px;
    font-size: 1rem;
    z-index: 1;
    position: relative;
  }
  .month-picker__day::before {
    border: none !important;
  }
  .month-picker__day.highlight:not(.maz-active):not(.btn--disabled)::before,
  .month-picker__day.is-keyboard-selected:not(.maz-active)::before {
    content: '';
    position: absolute;
    height: 26px;
    width: 26px;
    border-radius: 26px;
    background-color: rgba(0, 0, 0, 0.15);
    z-index: -1;
  }
  .month-picker__day.is-keyboard-selected {
    font-weight: 700;
  }
  .month-picker__day.is-keyboard-selected:not(.maz-active)::before {
    border-radius: var(--maz-border-radius);
    background-color: rgba(0, 0, 0, 0.15);
  }
  .month-picker__day.is-between-hoverred {
    color: #fff;
  }
  .month-picker__day.is-in-range {
    color: #fff;
    width: calc(100% + 5px);
  }
  .month-picker__day.is-in-range:not(.maz-active) {
    border-radius: 0;
  }
  .month-picker__day.is-in-range.maz-active:not(.is-last-in-range) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .month-picker__day.is-in-range.is-last-in-range:not(.is-first-in-range) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .month-picker__day.maz-active:not(:disabled) {
    color: #fff;
    font-weight: 600;
  }
  .month-picker__day:hover {
    color: #fff;
  }
  .month-picker__day:disabled {
    color: rgba(0, 0, 0, 0.25);
    border: none;
  }
  .maz-picker--primary .month-picker__day.is-between-hoverred {
    background-color: var(--maz-primary-alpha-40);
  }
  .maz-picker--primary .month-picker__day.is-in-range {
    background-color: var(--maz-primary-alpha-60);
  }
  .maz-picker--primary .month-picker__day.maz-active:not(:disabled) {
    background-color: var(--maz-primary);
  }
  .maz-picker--primary .month-picker__day:hover {
    background-color: var(--maz-primary-alpha-40);
  }
  .maz-picker--primary .month-picker__day:disabled {
    background-color: transparent;
  }
  .maz-picker--secondary .month-picker__day.is-between-hoverred {
    background-color: var(--maz-secondary-alpha-40);
  }
  .maz-picker--secondary .month-picker__day.is-in-range {
    background-color: var(--maz-secondary-alpha-60);
  }
  .maz-picker--secondary .month-picker__day.maz-active:not(:disabled) {
    background-color: var(--maz-secondary);
  }
  .maz-picker--secondary .month-picker__day:hover {
    background-color: var(--maz-secondary-alpha-40);
  }
  .maz-picker--secondary .month-picker__day:disabled {
    background-color: transparent;
  }
  .maz-picker--third .month-picker__day.is-between-hoverred {
    background-color: var(--maz-third-alpha-40);
  }
  .maz-picker--third .month-picker__day.is-in-range {
    background-color: var(--maz-third-alpha-60);
  }
  .maz-picker--third .month-picker__day.maz-active:not(:disabled) {
    background-color: var(--maz-third);
  }
  .maz-picker--third .month-picker__day:hover {
    background-color: var(--maz-third-alpha-40);
  }
  .maz-picker--third .month-picker__day:disabled {
    background-color: transparent;
  }
  .maz-picker--success .month-picker__day.is-between-hoverred {
    background-color: var(--maz-success-alpha-40);
  }
  .maz-picker--success .month-picker__day.is-in-range {
    background-color: var(--maz-success-alpha-60);
  }
  .maz-picker--success .month-picker__day.maz-active:not(:disabled) {
    background-color: var(--maz-success);
  }
  .maz-picker--success .month-picker__day:hover {
    background-color: var(--maz-success-alpha-40);
  }
  .maz-picker--success .month-picker__day:disabled {
    background-color: transparent;
  }
  .maz-picker--danger .month-picker__day.is-between-hoverred {
    background-color: var(--maz-danger-alpha-40);
  }
  .maz-picker--danger .month-picker__day.is-in-range {
    background-color: var(--maz-danger-alpha-60);
  }
  .maz-picker--danger .month-picker__day.maz-active:not(:disabled) {
    background-color: var(--maz-danger);
  }
  .maz-picker--danger .month-picker__day:hover {
    background-color: var(--maz-danger-alpha-40);
  }
  .maz-picker--danger .month-picker__day:disabled {
    background-color: transparent;
  }
  .maz-picker--grey .month-picker__day.is-between-hoverred {
    background-color: var(--maz-grey-alpha-40);
  }
  .maz-picker--grey .month-picker__day.is-in-range {
    background-color: var(--maz-grey-alpha-60);
  }
  .maz-picker--grey .month-picker__day.maz-active:not(:disabled) {
    background-color: var(--maz-grey);
  }
  .maz-picker--grey .month-picker__day:hover {
    background-color: var(--maz-grey-alpha-40);
  }
  .maz-picker--grey .month-picker__day:disabled {
    background-color: transparent;
  }
  .maz-picker--info .month-picker__day.is-between-hoverred {
    background-color: var(--maz-info-alpha-40);
  }
  .maz-picker--info .month-picker__day.is-in-range {
    background-color: var(--maz-info-alpha-60);
  }
  .maz-picker--info .month-picker__day.maz-active:not(:disabled) {
    background-color: var(--maz-info);
  }
  .maz-picker--info .month-picker__day:hover {
    background-color: var(--maz-info-alpha-40);
  }
  .maz-picker--info .month-picker__day:disabled {
    background-color: transparent;
  }
  .maz-picker--warning .month-picker__day.is-between-hoverred {
    background-color: var(--maz-warning-alpha-40);
  }
  .maz-picker--warning .month-picker__day.is-in-range {
    background-color: var(--maz-warning-alpha-60);
  }
  .maz-picker--warning .month-picker__day.maz-active:not(:disabled) {
    background-color: var(--maz-warning);
  }
  .maz-picker--warning .month-picker__day:hover {
    background-color: var(--maz-warning-alpha-40);
  }
  .maz-picker--warning .month-picker__day:disabled {
    background-color: transparent;
  }
  .maz-picker--light .month-picker__day.is-between-hoverred {
    background-color: var(--maz-light-alpha-40);
  }
  .maz-picker--light .month-picker__day.is-in-range {
    background-color: var(--maz-light-alpha-60);
  }
  .maz-picker--light .month-picker__day.maz-active:not(:disabled) {
    background-color: var(--maz-light);
  }
  .maz-picker--light .month-picker__day:hover {
    background-color: var(--maz-light-alpha-40);
  }
  .maz-picker--light .month-picker__day:disabled {
    background-color: transparent;
  }
  .maz-picker--dark .month-picker__day.is-between-hoverred {
    background-color: var(--maz-dark-alpha-40);
  }
  .maz-picker--dark .month-picker__day.is-in-range {
    background-color: var(--maz-dark-alpha-60);
  }
  .maz-picker--dark .month-picker__day.maz-active:not(:disabled) {
    background-color: var(--maz-dark);
  }
  .maz-picker--dark .month-picker__day:hover {
    background-color: var(--maz-dark-alpha-40);
  }
  .maz-picker--dark .month-picker__day:disabled {
    background-color: transparent;
  }
  .maz-picker--default .month-picker__day.is-between-hoverred {
    background-color: var(--maz-default-alpha-40);
  }
  .maz-picker--default .month-picker__day.is-in-range {
    background-color: var(--maz-default-alpha-60);
  }
  .maz-picker--default .month-picker__day.maz-active:not(:disabled) {
    background-color: var(--maz-default);
  }
  .maz-picker--default .month-picker__day:hover {
    background-color: var(--maz-default-alpha-40);
  }
  .maz-picker--default .month-picker__day:disabled {
    background-color: transparent;
  }
  .maz-picker--disabled .month-picker__day.is-between-hoverred {
    background-color: var(--maz-disabled-alpha-40);
  }
  .maz-picker--disabled .month-picker__day.is-in-range {
    background-color: var(--maz-disabled-alpha-60);
  }
  .maz-picker--disabled .month-picker__day.maz-active:not(:disabled) {
    background-color: var(--maz-disabled);
  }
  .maz-picker--disabled .month-picker__day:hover {
    background-color: var(--maz-disabled-alpha-40);
  }
  .maz-picker--disabled .month-picker__day:disabled {
    background-color: transparent;
  }
  .maz-picker--white .month-picker__day.is-between-hoverred {
    background-color: var(--maz-white-alpha-40);
  }
  .maz-picker--white .month-picker__day.is-in-range {
    background-color: var(--maz-white-alpha-60);
  }
  .maz-picker--white .month-picker__day.maz-active:not(:disabled) {
    background-color: var(--maz-white);
  }
  .maz-picker--white .month-picker__day:hover {
    background-color: var(--maz-white-alpha-40);
  }
  .maz-picker--white .month-picker__day:disabled {
    background-color: transparent;
  }
  .maz-picker--black .month-picker__day.is-between-hoverred {
    background-color: var(--maz-black-alpha-40);
  }
  .maz-picker--black .month-picker__day.is-in-range {
    background-color: var(--maz-black-alpha-60);
  }
  .maz-picker--black .month-picker__day.maz-active:not(:disabled) {
    background-color: var(--maz-black);
  }
  .maz-picker--black .month-picker__day:hover {
    background-color: var(--maz-black-alpha-40);
  }
  .maz-picker--black .month-picker__day:disabled {
    background-color: transparent;
  }
  .maz-picker--transparent .month-picker__day.is-between-hoverred {
    background-color: var(--maz-transparent-alpha-40);
  }
  .maz-picker--transparent .month-picker__day.is-in-range {
    background-color: var(--maz-transparent-alpha-60);
  }
  .maz-picker--transparent .month-picker__day.maz-active:not(:disabled) {
    background-color: var(--maz-transparent);
  }
  .maz-picker--transparent .month-picker__day:hover {
    background-color: var(--maz-transparent-alpha-40);
  }
  .maz-picker--transparent .month-picker__day:disabled {
    background-color: transparent;
  }
  .maz-picker--light-grey .month-picker__day.is-between-hoverred {
    background-color: var(--maz-light-grey-alpha-40);
  }
  .maz-picker--light-grey .month-picker__day.is-in-range {
    background-color: var(--maz-light-grey-alpha-60);
  }
  .maz-picker--light-grey .month-picker__day.maz-active:not(:disabled) {
    background-color: var(--maz-light-grey);
  }
  .maz-picker--light-grey .month-picker__day:hover {
    background-color: var(--maz-light-grey-alpha-40);
  }
  .maz-picker--light-grey .month-picker__day:disabled {
    background-color: transparent;
  }
  .pickers-container {
    background-color: var(--maz-bg-color);
    border-radius: var(--maz-border-radius);
    overflow: hidden;
    z-index: 9;
    outline: none;
  }
  .pickers-container:not(.inline) {
    position: absolute;
    top: 100%;
    left: 0;
  }
  .pickers-container:not(.inline).top {
    top: inherit;
    bottom: 100%;
  }
  .pickers-container:not(.inline).right {
    left: inherit;
    right: 0;
  }
  .time-picker {
    width: 160px;
    max-width: 160px;
    position: relative;
    z-index: 1;
  }
  .time-picker .maz-btn {
    transition: 0ms;
  }
  .time-picker::after,
  .time-picker::before {
    content: '';
    top: calc(50% - 19px);
    position: absolute;
    height: 38px;
    z-index: -1;
    left: 0;
    right: 0;
    border-top: var(--maz-border-width) solid var(--maz-border-color);
    border-bottom: var(--maz-border-width) solid var(--maz-border-color);
  }
  .time-picker__column {
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    overflow: -moz-scrollbars-none;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .time-picker__column::-webkit-scrollbar {
    display: none;
  }
  .time-picker__column__item {
    height: 28px;
    width: 45px;
  }
  .time-picker__column__item::before {
    border: none !important;
  }
  .time-picker__column__item:hover {
    color: #fff;
  }
  .time-picker__column__item.maz-active {
    color: #fff;
    font-weight: bold;
  }
  .time-picker__column__item:disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: transparent;
    border: none;
  }
  .maz-picker--primary .time-picker__column__item:hover,
  .maz-picker--primary .time-picker__column__item:focus {
    background-color: var(--maz-primary-alpha-40);
  }
  .maz-picker--primary .time-picker__column__item.maz-active {
    background-color: var(--maz-primary);
  }
  .maz-picker--secondary .time-picker__column__item:hover,
  .maz-picker--secondary .time-picker__column__item:focus {
    background-color: var(--maz-secondary-alpha-40);
  }
  .maz-picker--secondary .time-picker__column__item.maz-active {
    background-color: var(--maz-secondary);
  }
  .maz-picker--third .time-picker__column__item:hover,
  .maz-picker--third .time-picker__column__item:focus {
    background-color: var(--maz-third-alpha-40);
  }
  .maz-picker--third .time-picker__column__item.maz-active {
    background-color: var(--maz-third);
  }
  .maz-picker--success .time-picker__column__item:hover,
  .maz-picker--success .time-picker__column__item:focus {
    background-color: var(--maz-success-alpha-40);
  }
  .maz-picker--success .time-picker__column__item.maz-active {
    background-color: var(--maz-success);
  }
  .maz-picker--danger .time-picker__column__item:hover,
  .maz-picker--danger .time-picker__column__item:focus {
    background-color: var(--maz-danger-alpha-40);
  }
  .maz-picker--danger .time-picker__column__item.maz-active {
    background-color: var(--maz-danger);
  }
  .maz-picker--grey .time-picker__column__item:hover,
  .maz-picker--grey .time-picker__column__item:focus {
    background-color: var(--maz-grey-alpha-40);
  }
  .maz-picker--grey .time-picker__column__item.maz-active {
    background-color: var(--maz-grey);
  }
  .maz-picker--info .time-picker__column__item:hover,
  .maz-picker--info .time-picker__column__item:focus {
    background-color: var(--maz-info-alpha-40);
  }
  .maz-picker--info .time-picker__column__item.maz-active {
    background-color: var(--maz-info);
  }
  .maz-picker--warning .time-picker__column__item:hover,
  .maz-picker--warning .time-picker__column__item:focus {
    background-color: var(--maz-warning-alpha-40);
  }
  .maz-picker--warning .time-picker__column__item.maz-active {
    background-color: var(--maz-warning);
  }
  .maz-picker--light .time-picker__column__item:hover,
  .maz-picker--light .time-picker__column__item:focus {
    background-color: var(--maz-light-alpha-40);
  }
  .maz-picker--light .time-picker__column__item.maz-active {
    background-color: var(--maz-light);
  }
  .maz-picker--dark .time-picker__column__item:hover,
  .maz-picker--dark .time-picker__column__item:focus {
    background-color: var(--maz-dark-alpha-40);
  }
  .maz-picker--dark .time-picker__column__item.maz-active {
    background-color: var(--maz-dark);
  }
  .maz-picker--default .time-picker__column__item:hover,
  .maz-picker--default .time-picker__column__item:focus {
    background-color: var(--maz-default-alpha-40);
  }
  .maz-picker--default .time-picker__column__item.maz-active {
    background-color: var(--maz-default);
  }
  .maz-picker--disabled .time-picker__column__item:hover,
  .maz-picker--disabled .time-picker__column__item:focus {
    background-color: var(--maz-disabled-alpha-40);
  }
  .maz-picker--disabled .time-picker__column__item.maz-active {
    background-color: var(--maz-disabled);
  }
  .maz-picker--white .time-picker__column__item:hover,
  .maz-picker--white .time-picker__column__item:focus {
    background-color: var(--maz-white-alpha-40);
  }
  .maz-picker--white .time-picker__column__item.maz-active {
    background-color: var(--maz-white);
  }
  .maz-picker--black .time-picker__column__item:hover,
  .maz-picker--black .time-picker__column__item:focus {
    background-color: var(--maz-black-alpha-40);
  }
  .maz-picker--black .time-picker__column__item.maz-active {
    background-color: var(--maz-black);
  }
  .maz-picker--transparent .time-picker__column__item:hover,
  .maz-picker--transparent .time-picker__column__item:focus {
    background-color: var(--maz-transparent-alpha-40);
  }
  .maz-picker--transparent .time-picker__column__item.maz-active {
    background-color: var(--maz-transparent);
  }
  .maz-picker--light-grey .time-picker__column__item:hover,
  .maz-picker--light-grey .time-picker__column__item:focus {
    background-color: var(--maz-light-grey-alpha-40);
  }
  .maz-picker--light-grey .time-picker__column__item.maz-active {
    background-color: var(--maz-light-grey);
  }
  .week-days-labels {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 10px;
    justify-items: center;
    font-size: 0.786rem;
  }
  .year-month-selector {
    position: absolute;
    background-color: var(--maz-bg-color);
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
  @media only screen and (max-width: 768px) {
    .maz-picker__overlay {
      display: block;
      position: fixed;
      z-index: 99;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: var(--maz-overlay-color);
      width: 100%;
      margin: 0;
      border: none;
      padding: 0;
      cursor: pointer;
    }
    .pickers-container:not(.inline),
    .pickers-container:not(.inline).top,
    .pickers-container:not(.inline).right {
      position: fixed;
      bottom: auto;
      margin: 10px;
      max-width: calc(100% - 20px);
      width: calc(100% - 20px);
      display: flex;
      flex-direction: column;
      z-index: 100;
      max-height: calc(100vh - 20px);
      top: 50%;
      transform: translateY(-50%);
    }
    .pickers-container:not(.inline) .header-picker__close,
    .pickers-container:not(.inline).top .header-picker__close,
    .pickers-container:not(.inline).right .header-picker__close {
      display: block;
      position: absolute;
      top: 4px;
      right: 4px;
    }
    .pickers-container:not(.inline) .header-picker__time,
    .pickers-container:not(.inline).top .header-picker__time,
    .pickers-container:not(.inline).right .header-picker__time {
      width: auto;
    }
    .pickers-container:not(.inline) .calendar:not(.is-range),
    .pickers-container:not(.inline).top .calendar:not(.is-range),
    .pickers-container:not(.inline).right .calendar:not(.is-range) {
      flex-direction: column;
    }
    .pickers-container:not(.inline) .calendar__months-container,
    .pickers-container:not(.inline).top .calendar__months-container,
    .pickers-container:not(.inline).right .calendar__months-container {
      flex: none;
    }
    .pickers-container:not(.inline) .calendar .time-picker,
    .pickers-container:not(.inline).top .calendar .time-picker,
    .pickers-container:not(.inline).right .calendar .time-picker {
      width: 100%;
      max-width: 100%;
      border-left-width: 0;
      border-top-width: var(--maz-border-width);
      border-top-style: solid;
      border-color: var(--maz-border-color);
      flex: none;
      height: 150px !important;
    }
  }
  .maz-picker {
    position: relative;
    font-weight: 300;
  }
  .maz-picker .maz-picker__arrow {
    color: var(--maz-icon-color);
    outline: none;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .maz-picker .maz-picker__arrow svg path.arrow {
    fill: var(--maz-icon-color);
  }
  .maz-picker__overlay {
    display: none;
  }
  .maz-progress-bar {
    color: var(--maz-text-color);
    font-size: 1rem;
    position: relative;
    width: 100%;
  }
  .maz-progress-bar:not(.maz-border-radius-0) {
    border-radius: var(--maz-border-radius);
  }
  .maz-progress-bar__bg {
    width: 100%;
    position: relative;
  }
  .maz-progress-bar__line {
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--maz-bg-color-light);
    transition: all 500ms ease-in-out;
  }
  .maz-progress-bar__line--primary {
    background-color: var(--maz-primary);
  }
  .maz-progress-bar__line--secondary {
    background-color: var(--maz-secondary);
  }
  .maz-progress-bar__line--third {
    background-color: var(--maz-third);
  }
  .maz-progress-bar__line--success {
    background-color: var(--maz-success);
  }
  .maz-progress-bar__line--danger {
    background-color: var(--maz-danger);
  }
  .maz-progress-bar__line--grey {
    background-color: var(--maz-grey);
  }
  .maz-progress-bar__line--info {
    background-color: var(--maz-info);
  }
  .maz-progress-bar__line--warning {
    background-color: var(--maz-warning);
  }
  .maz-progress-bar__line--light {
    background-color: var(--maz-light);
  }
  .maz-progress-bar__line--dark {
    background-color: var(--maz-dark);
  }
  .maz-progress-bar__line--default {
    background-color: var(--maz-default);
  }
  .maz-progress-bar__line--disabled {
    background-color: var(--maz-disabled);
  }
  .maz-progress-bar__line--white {
    background-color: var(--maz-white);
  }
  .maz-progress-bar__line--black {
    background-color: var(--maz-black);
  }
  .maz-progress-bar__line--transparent {
    background-color: var(--maz-transparent);
  }
  .maz-progress-bar__line--light-grey {
    background-color: var(--maz-light-grey);
  }
  .maz-progress-bar__line__anim {
    background-color: #fff;
    height: inherit;
    border-radius: var(--maz-border-radius);
    opacity: 0;
    -webkit-animation: n-anim 2s cubic-bezier(0, 0, 0.2, 1) infinite;
    animation: n-anim 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  @-webkit-keyframes n-anim {
    0% {
      width: 0;
      opacity: 0.2;
    }
    70% {
      width: 0;
      opacity: 0.6;
    }
    100% {
      width: 100%;
      opacity: 0;
    }
  }
  @keyframes n-anim {
    0% {
      width: 0;
      opacity: 0.2;
    }
    70% {
      width: 0;
      opacity: 0.6;
    }
    100% {
      width: 100%;
      opacity: 0;
    }
  }
  @-webkit-keyframes n-flow {
    from {
      -webkit-filter: hue-rotate(0deg);
      filter: hue-rotate(0deg);
    }
    to {
      -webkit-filter: hue-rotate(360deg);
      filter: hue-rotate(360deg);
    }
  }
  @keyframes n-flow {
    from {
      -webkit-filter: hue-rotate(0deg);
      filter: hue-rotate(0deg);
    }
    to {
      -webkit-filter: hue-rotate(360deg);
      filter: hue-rotate(360deg);
    }
  }
  .maz-flag.maz-flag-ac {
    height: 10px;
    background-position: 0 0;
  }
  .maz-flag.maz-flag-ad {
    height: 14px;
    background-position: -22px 0;
  }
  .maz-flag.maz-flag-ae {
    height: 10px;
    background-position: -44px 0;
  }
  .maz-flag.maz-flag-af {
    height: 14px;
    background-position: -66px 0;
  }
  .maz-flag.maz-flag-ag {
    height: 14px;
    background-position: -88px 0;
  }
  .maz-flag.maz-flag-ai {
    height: 10px;
    background-position: -110px 0;
  }
  .maz-flag.maz-flag-al {
    height: 15px;
    background-position: -132px 0;
  }
  .maz-flag.maz-flag-am {
    height: 10px;
    background-position: -154px 0;
  }
  .maz-flag.maz-flag-ao {
    height: 14px;
    background-position: -176px 0;
  }
  .maz-flag.maz-flag-aq {
    height: 14px;
    background-position: -198px 0;
  }
  .maz-flag.maz-flag-ar {
    height: 13px;
    background-position: -220px 0;
  }
  .maz-flag.maz-flag-as {
    height: 10px;
    background-position: -242px 0;
  }
  .maz-flag.maz-flag-at {
    height: 14px;
    background-position: -264px 0;
  }
  .maz-flag.maz-flag-au {
    height: 10px;
    background-position: -286px 0;
  }
  .maz-flag.maz-flag-aw {
    height: 14px;
    background-position: -308px 0;
  }
  .maz-flag.maz-flag-ax {
    height: 13px;
    background-position: -330px 0;
  }
  .maz-flag.maz-flag-az {
    height: 10px;
    background-position: -352px 0;
  }
  .maz-flag.maz-flag-ba {
    height: 10px;
    background-position: -374px 0;
  }
  .maz-flag.maz-flag-bb {
    height: 14px;
    background-position: -396px 0;
  }
  .maz-flag.maz-flag-bd {
    height: 12px;
    background-position: -418px 0;
  }
  .maz-flag.maz-flag-be {
    width: 18px;
    height: 15px;
    background-position: -440px 0;
  }
  .maz-flag.maz-flag-bf {
    height: 14px;
    background-position: -460px 0;
  }
  .maz-flag.maz-flag-bg {
    height: 12px;
    background-position: -482px 0;
  }
  .maz-flag.maz-flag-bh {
    height: 12px;
    background-position: -504px 0;
  }
  .maz-flag.maz-flag-bi {
    height: 12px;
    background-position: -526px 0;
  }
  .maz-flag.maz-flag-bj {
    height: 14px;
    background-position: -548px 0;
  }
  .maz-flag.maz-flag-bl {
    height: 14px;
    background-position: -570px 0;
  }
  .maz-flag.maz-flag-bm {
    height: 10px;
    background-position: -592px 0;
  }
  .maz-flag.maz-flag-bn {
    height: 10px;
    background-position: -614px 0;
  }
  .maz-flag.maz-flag-bo {
    height: 14px;
    background-position: -636px 0;
  }
  .maz-flag.maz-flag-bq {
    height: 14px;
    background-position: -658px 0;
  }
  .maz-flag.maz-flag-br {
    height: 14px;
    background-position: -680px 0;
  }
  .maz-flag.maz-flag-bs {
    height: 10px;
    background-position: -702px 0;
  }
  .maz-flag.maz-flag-bt {
    height: 14px;
    background-position: -724px 0;
  }
  .maz-flag.maz-flag-bv {
    height: 15px;
    background-position: -746px 0;
  }
  .maz-flag.maz-flag-bw {
    height: 14px;
    background-position: -768px 0;
  }
  .maz-flag.maz-flag-by {
    height: 10px;
    background-position: -790px 0;
  }
  .maz-flag.maz-flag-bz {
    height: 14px;
    background-position: -812px 0;
  }
  .maz-flag.maz-flag-ca {
    height: 10px;
    background-position: -834px 0;
  }
  .maz-flag.maz-flag-cc {
    height: 10px;
    background-position: -856px 0;
  }
  .maz-flag.maz-flag-cd {
    height: 15px;
    background-position: -878px 0;
  }
  .maz-flag.maz-flag-cf {
    height: 14px;
    background-position: -900px 0;
  }
  .maz-flag.maz-flag-cg {
    height: 14px;
    background-position: -922px 0;
  }
  .maz-flag.maz-flag-ch {
    width: 15px;
    height: 15px;
    background-position: -944px 0;
  }
  .maz-flag.maz-flag-ci {
    height: 14px;
    background-position: -961px 0;
  }
  .maz-flag.maz-flag-ck {
    height: 10px;
    background-position: -983px 0;
  }
  .maz-flag.maz-flag-cl {
    height: 14px;
    background-position: -1005px 0;
  }
  .maz-flag.maz-flag-cm {
    height: 14px;
    background-position: -1027px 0;
  }
  .maz-flag.maz-flag-cn {
    height: 14px;
    background-position: -1049px 0;
  }
  .maz-flag.maz-flag-co {
    height: 14px;
    background-position: -1071px 0;
  }
  .maz-flag.maz-flag-cp {
    height: 14px;
    background-position: -1093px 0;
  }
  .maz-flag.maz-flag-cr {
    height: 12px;
    background-position: -1115px 0;
  }
  .maz-flag.maz-flag-cu {
    height: 10px;
    background-position: -1137px 0;
  }
  .maz-flag.maz-flag-cv {
    height: 12px;
    background-position: -1159px 0;
  }
  .maz-flag.maz-flag-cw {
    height: 14px;
    background-position: -1181px 0;
  }
  .maz-flag.maz-flag-cx {
    height: 10px;
    background-position: -1203px 0;
  }
  .maz-flag.maz-flag-cy {
    height: 14px;
    background-position: -1225px 0;
  }
  .maz-flag.maz-flag-cz {
    height: 14px;
    background-position: -1247px 0;
  }
  .maz-flag.maz-flag-de {
    height: 12px;
    background-position: -1269px 0;
  }
  .maz-flag.maz-flag-dg {
    height: 10px;
    background-position: -1291px 0;
  }
  .maz-flag.maz-flag-dj {
    height: 14px;
    background-position: -1313px 0;
  }
  .maz-flag.maz-flag-dk {
    height: 15px;
    background-position: -1335px 0;
  }
  .maz-flag.maz-flag-dm {
    height: 10px;
    background-position: -1357px 0;
  }
  .maz-flag.maz-flag-do {
    height: 13px;
    background-position: -1379px 0;
  }
  .maz-flag.maz-flag-dz {
    height: 14px;
    background-position: -1401px 0;
  }
  .maz-flag.maz-flag-ea {
    height: 14px;
    background-position: -1423px 0;
  }
  .maz-flag.maz-flag-ec {
    height: 14px;
    background-position: -1445px 0;
  }
  .maz-flag.maz-flag-ee {
    height: 13px;
    background-position: -1467px 0;
  }
  .maz-flag.maz-flag-eg {
    height: 14px;
    background-position: -1489px 0;
  }
  .maz-flag.maz-flag-eh {
    height: 10px;
    background-position: -1511px 0;
  }
  .maz-flag.maz-flag-er {
    height: 10px;
    background-position: -1533px 0;
  }
  .maz-flag.maz-flag-es {
    height: 14px;
    background-position: -1555px 0;
  }
  .maz-flag.maz-flag-et {
    height: 10px;
    background-position: -1577px 0;
  }
  .maz-flag.maz-flag-eu {
    height: 14px;
    background-position: -1599px 0;
  }
  .maz-flag.maz-flag-fi {
    height: 12px;
    background-position: -1621px 0;
  }
  .maz-flag.maz-flag-fj {
    height: 10px;
    background-position: -1643px 0;
  }
  .maz-flag.maz-flag-fk {
    height: 10px;
    background-position: -1665px 0;
  }
  .maz-flag.maz-flag-fm {
    height: 11px;
    background-position: -1687px 0;
  }
  .maz-flag.maz-flag-fo {
    height: 15px;
    background-position: -1709px 0;
  }
  .maz-flag.maz-flag-fr {
    height: 14px;
    background-position: -1731px 0;
  }
  .maz-flag.maz-flag-ga {
    height: 15px;
    background-position: -1753px 0;
  }
  .maz-flag.maz-flag-gb {
    height: 10px;
    background-position: -1775px 0;
  }
  .maz-flag.maz-flag-gd {
    height: 12px;
    background-position: -1797px 0;
  }
  .maz-flag.maz-flag-ge {
    height: 14px;
    background-position: -1819px 0;
  }
  .maz-flag.maz-flag-gf {
    height: 14px;
    background-position: -1841px 0;
  }
  .maz-flag.maz-flag-gg {
    height: 14px;
    background-position: -1863px 0;
  }
  .maz-flag.maz-flag-gh {
    height: 14px;
    background-position: -1885px 0;
  }
  .maz-flag.maz-flag-gi {
    height: 10px;
    background-position: -1907px 0;
  }
  .maz-flag.maz-flag-gl {
    height: 14px;
    background-position: -1929px 0;
  }
  .maz-flag.maz-flag-gm {
    height: 14px;
    background-position: -1951px 0;
  }
  .maz-flag.maz-flag-gn {
    height: 14px;
    background-position: -1973px 0;
  }
  .maz-flag.maz-flag-gp {
    height: 14px;
    background-position: -1995px 0;
  }
  .maz-flag.maz-flag-gq {
    height: 14px;
    background-position: -2017px 0;
  }
  .maz-flag.maz-flag-gr {
    height: 14px;
    background-position: -2039px 0;
  }
  .maz-flag.maz-flag-gs {
    height: 10px;
    background-position: -2061px 0;
  }
  .maz-flag.maz-flag-gt {
    height: 13px;
    background-position: -2083px 0;
  }
  .maz-flag.maz-flag-gu {
    height: 11px;
    background-position: -2105px 0;
  }
  .maz-flag.maz-flag-gw {
    height: 10px;
    background-position: -2127px 0;
  }
  .maz-flag.maz-flag-gy {
    height: 12px;
    background-position: -2149px 0;
  }
  .maz-flag.maz-flag-hk {
    height: 14px;
    background-position: -2171px 0;
  }
  .maz-flag.maz-flag-hm {
    height: 10px;
    background-position: -2193px 0;
  }
  .maz-flag.maz-flag-hn {
    height: 10px;
    background-position: -2215px 0;
  }
  .maz-flag.maz-flag-hr {
    height: 10px;
    background-position: -2237px 0;
  }
  .maz-flag.maz-flag-ht {
    height: 12px;
    background-position: -2259px 0;
  }
  .maz-flag.maz-flag-hu {
    height: 10px;
    background-position: -2281px 0;
  }
  .maz-flag.maz-flag-ic {
    height: 14px;
    background-position: -2303px 0;
  }
  .maz-flag.maz-flag-id {
    height: 14px;
    background-position: -2325px 0;
  }
  .maz-flag.maz-flag-ie {
    height: 10px;
    background-position: -2347px 0;
  }
  .maz-flag.maz-flag-il {
    height: 15px;
    background-position: -2369px 0;
  }
  .maz-flag.maz-flag-im {
    height: 10px;
    background-position: -2391px 0;
  }
  .maz-flag.maz-flag-in {
    height: 14px;
    background-position: -2413px 0;
  }
  .maz-flag.maz-flag-io {
    height: 10px;
    background-position: -2435px 0;
  }
  .maz-flag.maz-flag-iq {
    height: 14px;
    background-position: -2457px 0;
  }
  .maz-flag.maz-flag-ir {
    height: 12px;
    background-position: -2479px 0;
  }
  .maz-flag.maz-flag-is {
    height: 15px;
    background-position: -2501px 0;
  }
  .maz-flag.maz-flag-it {
    height: 14px;
    background-position: -2523px 0;
  }
  .maz-flag.maz-flag-je {
    height: 12px;
    background-position: -2545px 0;
  }
  .maz-flag.maz-flag-jm {
    height: 10px;
    background-position: -2567px 0;
  }
  .maz-flag.maz-flag-jo {
    height: 10px;
    background-position: -2589px 0;
  }
  .maz-flag.maz-flag-jp {
    height: 14px;
    background-position: -2611px 0;
  }
  .maz-flag.maz-flag-ke {
    height: 14px;
    background-position: -2633px 0;
  }
  .maz-flag.maz-flag-kg {
    height: 12px;
    background-position: -2655px 0;
  }
  .maz-flag.maz-flag-kh {
    height: 13px;
    background-position: -2677px 0;
  }
  .maz-flag.maz-flag-ki {
    height: 10px;
    background-position: -2699px 0;
  }
  .maz-flag.maz-flag-km {
    height: 12px;
    background-position: -2721px 0;
  }
  .maz-flag.maz-flag-kn {
    height: 14px;
    background-position: -2743px 0;
  }
  .maz-flag.maz-flag-kp {
    height: 10px;
    background-position: -2765px 0;
  }
  .maz-flag.maz-flag-kr {
    height: 14px;
    background-position: -2787px 0;
  }
  .maz-flag.maz-flag-kw {
    height: 10px;
    background-position: -2809px 0;
  }
  .maz-flag.maz-flag-ky {
    height: 10px;
    background-position: -2831px 0;
  }
  .maz-flag.maz-flag-kz {
    height: 10px;
    background-position: -2853px 0;
  }
  .maz-flag.maz-flag-la {
    height: 14px;
    background-position: -2875px 0;
  }
  .maz-flag.maz-flag-lb {
    height: 14px;
    background-position: -2897px 0;
  }
  .maz-flag.maz-flag-lc {
    height: 10px;
    background-position: -2919px 0;
  }
  .maz-flag.maz-flag-li {
    height: 12px;
    background-position: -2941px 0;
  }
  .maz-flag.maz-flag-lk {
    height: 10px;
    background-position: -2963px 0;
  }
  .maz-flag.maz-flag-lr {
    height: 11px;
    background-position: -2985px 0;
  }
  .maz-flag.maz-flag-ls {
    height: 14px;
    background-position: -3007px 0;
  }
  .maz-flag.maz-flag-lt {
    height: 12px;
    background-position: -3029px 0;
  }
  .maz-flag.maz-flag-lu {
    height: 12px;
    background-position: -3051px 0;
  }
  .maz-flag.maz-flag-lv {
    height: 10px;
    background-position: -3073px 0;
  }
  .maz-flag.maz-flag-ly {
    height: 10px;
    background-position: -3095px 0;
  }
  .maz-flag.maz-flag-ma {
    height: 14px;
    background-position: -3117px 0;
  }
  .maz-flag.maz-flag-mc {
    width: 19px;
    height: 15px;
    background-position: -3139px 0;
  }
  .maz-flag.maz-flag-md {
    height: 10px;
    background-position: -3160px 0;
  }
  .maz-flag.maz-flag-me {
    height: 10px;
    background-position: -3182px 0;
  }
  .maz-flag.maz-flag-mf {
    height: 14px;
    background-position: -3204px 0;
  }
  .maz-flag.maz-flag-mg {
    height: 14px;
    background-position: -3226px 0;
  }
  .maz-flag.maz-flag-mh {
    height: 11px;
    background-position: -3248px 0;
  }
  .maz-flag.maz-flag-mk {
    height: 10px;
    background-position: -3270px 0;
  }
  .maz-flag.maz-flag-ml {
    height: 14px;
    background-position: -3292px 0;
  }
  .maz-flag.maz-flag-mm {
    height: 14px;
    background-position: -3314px 0;
  }
  .maz-flag.maz-flag-mn {
    height: 10px;
    background-position: -3336px 0;
  }
  .maz-flag.maz-flag-mo {
    height: 14px;
    background-position: -3358px 0;
  }
  .maz-flag.maz-flag-mp {
    height: 10px;
    background-position: -3380px 0;
  }
  .maz-flag.maz-flag-mq {
    height: 14px;
    background-position: -3402px 0;
  }
  .maz-flag.maz-flag-mr {
    height: 14px;
    background-position: -3424px 0;
  }
  .maz-flag.maz-flag-ms {
    height: 10px;
    background-position: -3446px 0;
  }
  .maz-flag.maz-flag-mt {
    height: 14px;
    background-position: -3468px 0;
  }
  .maz-flag.maz-flag-mu {
    height: 14px;
    background-position: -3490px 0;
  }
  .maz-flag.maz-flag-mv {
    height: 14px;
    background-position: -3512px 0;
  }
  .maz-flag.maz-flag-mw {
    height: 14px;
    background-position: -3534px 0;
  }
  .maz-flag.maz-flag-mx {
    height: 12px;
    background-position: -3556px 0;
  }
  .maz-flag.maz-flag-my {
    height: 10px;
    background-position: -3578px 0;
  }
  .maz-flag.maz-flag-mz {
    height: 14px;
    background-position: -3600px 0;
  }
  .maz-flag.maz-flag-na {
    height: 14px;
    background-position: -3622px 0;
  }
  .maz-flag.maz-flag-nc {
    height: 10px;
    background-position: -3644px 0;
  }
  .maz-flag.maz-flag-ne {
    width: 18px;
    height: 15px;
    background-position: -3666px 0;
  }
  .maz-flag.maz-flag-nf {
    height: 10px;
    background-position: -3686px 0;
  }
  .maz-flag.maz-flag-ng {
    height: 10px;
    background-position: -3708px 0;
  }
  .maz-flag.maz-flag-ni {
    height: 12px;
    background-position: -3730px 0;
  }
  .maz-flag.maz-flag-nl {
    height: 14px;
    background-position: -3752px 0;
  }
  .maz-flag.maz-flag-no {
    height: 15px;
    background-position: -3774px 0;
  }
  .maz-flag.maz-flag-np {
    width: 13px;
    height: 15px;
    background-color: transparent;
    background-position: -3796px 0;
  }
  .maz-flag.maz-flag-nr {
    height: 10px;
    background-position: -3811px 0;
  }
  .maz-flag.maz-flag-nu {
    height: 10px;
    background-position: -3833px 0;
  }
  .maz-flag.maz-flag-nz {
    height: 10px;
    background-position: -3855px 0;
  }
  .maz-flag.maz-flag-om {
    height: 10px;
    background-position: -3877px 0;
  }
  .maz-flag.maz-flag-pa {
    height: 14px;
    background-position: -3899px 0;
  }
  .maz-flag.maz-flag-pe {
    height: 14px;
    background-position: -3921px 0;
  }
  .maz-flag.maz-flag-pf {
    height: 14px;
    background-position: -3943px 0;
  }
  .maz-flag.maz-flag-pg {
    height: 15px;
    background-position: -3965px 0;
  }
  .maz-flag.maz-flag-ph {
    height: 10px;
    background-position: -3987px 0;
  }
  .maz-flag.maz-flag-pk {
    height: 14px;
    background-position: -4009px 0;
  }
  .maz-flag.maz-flag-pl {
    height: 13px;
    background-position: -4031px 0;
  }
  .maz-flag.maz-flag-pm {
    height: 14px;
    background-position: -4053px 0;
  }
  .maz-flag.maz-flag-pn {
    height: 10px;
    background-position: -4075px 0;
  }
  .maz-flag.maz-flag-pr {
    height: 14px;
    background-position: -4097px 0;
  }
  .maz-flag.maz-flag-ps {
    height: 10px;
    background-position: -4119px 0;
  }
  .maz-flag.maz-flag-pt {
    height: 14px;
    background-position: -4141px 0;
  }
  .maz-flag.maz-flag-pw {
    height: 13px;
    background-position: -4163px 0;
  }
  .maz-flag.maz-flag-py {
    height: 11px;
    background-position: -4185px 0;
  }
  .maz-flag.maz-flag-qa {
    height: 8px;
    background-position: -4207px 0;
  }
  .maz-flag.maz-flag-re {
    height: 14px;
    background-position: -4229px 0;
  }
  .maz-flag.maz-flag-ro {
    height: 14px;
    background-position: -4251px 0;
  }
  .maz-flag.maz-flag-rs {
    height: 14px;
    background-position: -4273px 0;
  }
  .maz-flag.maz-flag-ru {
    height: 14px;
    background-position: -4295px 0;
  }
  .maz-flag.maz-flag-rw {
    height: 14px;
    background-position: -4317px 0;
  }
  .maz-flag.maz-flag-sa {
    height: 14px;
    background-position: -4339px 0;
  }
  .maz-flag.maz-flag-sb {
    height: 10px;
    background-position: -4361px 0;
  }
  .maz-flag.maz-flag-sc {
    height: 10px;
    background-position: -4383px 0;
  }
  .maz-flag.maz-flag-sd {
    height: 10px;
    background-position: -4405px 0;
  }
  .maz-flag.maz-flag-se {
    height: 13px;
    background-position: -4427px 0;
  }
  .maz-flag.maz-flag-sg {
    height: 14px;
    background-position: -4449px 0;
  }
  .maz-flag.maz-flag-sh {
    height: 10px;
    background-position: -4471px 0;
  }
  .maz-flag.maz-flag-si {
    height: 10px;
    background-position: -4493px 0;
  }
  .maz-flag.maz-flag-sj {
    height: 15px;
    background-position: -4515px 0;
  }
  .maz-flag.maz-flag-sk {
    height: 14px;
    background-position: -4537px 0;
  }
  .maz-flag.maz-flag-sl {
    height: 14px;
    background-position: -4559px 0;
  }
  .maz-flag.maz-flag-sm {
    height: 15px;
    background-position: -4581px 0;
  }
  .maz-flag.maz-flag-sn {
    height: 14px;
    background-position: -4603px 0;
  }
  .maz-flag.maz-flag-so {
    height: 14px;
    background-position: -4625px 0;
  }
  .maz-flag.maz-flag-sr {
    height: 14px;
    background-position: -4647px 0;
  }
  .maz-flag.maz-flag-ss {
    height: 10px;
    background-position: -4669px 0;
  }
  .maz-flag.maz-flag-st {
    height: 10px;
    background-position: -4691px 0;
  }
  .maz-flag.maz-flag-sv {
    height: 12px;
    background-position: -4713px 0;
  }
  .maz-flag.maz-flag-sx {
    height: 14px;
    background-position: -4735px 0;
  }
  .maz-flag.maz-flag-sy {
    height: 14px;
    background-position: -4757px 0;
  }
  .maz-flag.maz-flag-sz {
    height: 14px;
    background-position: -4779px 0;
  }
  .maz-flag.maz-flag-ta {
    height: 10px;
    background-position: -4801px 0;
  }
  .maz-flag.maz-flag-tc {
    height: 10px;
    background-position: -4823px 0;
  }
  .maz-flag.maz-flag-td {
    height: 14px;
    background-position: -4845px 0;
  }
  .maz-flag.maz-flag-tf {
    height: 14px;
    background-position: -4867px 0;
  }
  .maz-flag.maz-flag-tg {
    height: 13px;
    background-position: -4889px 0;
  }
  .maz-flag.maz-flag-th {
    height: 14px;
    background-position: -4911px 0;
  }
  .maz-flag.maz-flag-tj {
    height: 10px;
    background-position: -4933px 0;
  }
  .maz-flag.maz-flag-tk {
    height: 10px;
    background-position: -4955px 0;
  }
  .maz-flag.maz-flag-tl {
    height: 10px;
    background-position: -4977px 0;
  }
  .maz-flag.maz-flag-tm {
    height: 14px;
    background-position: -4999px 0;
  }
  .maz-flag.maz-flag-tn {
    height: 14px;
    background-position: -5021px 0;
  }
  .maz-flag.maz-flag-to {
    height: 10px;
    background-position: -5043px 0;
  }
  .maz-flag.maz-flag-tr {
    height: 14px;
    background-position: -5065px 0;
  }
  .maz-flag.maz-flag-tt {
    height: 12px;
    background-position: -5087px 0;
  }
  .maz-flag.maz-flag-tv {
    height: 10px;
    background-position: -5109px 0;
  }
  .maz-flag.maz-flag-tw {
    height: 14px;
    background-position: -5131px 0;
  }
  .maz-flag.maz-flag-tz {
    height: 14px;
    background-position: -5153px 0;
  }
  .maz-flag.maz-flag-ua {
    height: 14px;
    background-position: -5175px 0;
  }
  .maz-flag.maz-flag-ug {
    height: 14px;
    background-position: -5197px 0;
  }
  .maz-flag.maz-flag-um {
    height: 11px;
    background-position: -5219px 0;
  }
  .maz-flag.maz-flag-us {
    height: 11px;
    background-position: -5241px 0;
  }
  .maz-flag.maz-flag-uy {
    height: 14px;
    background-position: -5263px 0;
  }
  .maz-flag.maz-flag-uz {
    height: 10px;
    background-position: -5285px 0;
  }
  .maz-flag.maz-flag-va {
    width: 15px;
    height: 15px;
    background-position: -5307px 0;
  }
  .maz-flag.maz-flag-vc {
    height: 14px;
    background-position: -5324px 0;
  }
  .maz-flag.maz-flag-ve {
    height: 14px;
    background-position: -5346px 0;
  }
  .maz-flag.maz-flag-vg {
    height: 10px;
    background-position: -5368px 0;
  }
  .maz-flag.maz-flag-vi {
    height: 14px;
    background-position: -5390px 0;
  }
  .maz-flag.maz-flag-vn {
    height: 14px;
    background-position: -5412px 0;
  }
  .maz-flag.maz-flag-vu {
    height: 12px;
    background-position: -5434px 0;
  }
  .maz-flag.maz-flag-wf {
    height: 14px;
    background-position: -5456px 0;
  }
  .maz-flag.maz-flag-ws {
    height: 10px;
    background-position: -5478px 0;
  }
  .maz-flag.maz-flag-xk {
    height: 15px;
    background-position: -5500px 0;
  }
  .maz-flag.maz-flag-ye {
    height: 14px;
    background-position: -5522px 0;
  }
  .maz-flag.maz-flag-yt {
    height: 14px;
    background-position: -5544px 0;
  }
  .maz-flag.maz-flag-za {
    height: 14px;
    background-position: -5566px 0;
  }
  .maz-flag.maz-flag-zm {
    height: 14px;
    background-position: -5588px 0;
  }
  .maz-flag.maz-flag-zw {
    height: 10px;
    background-position: -5610px 0;
  }
  .maz-flag {
    width: 20px;
    height: 15px;
    background-image: url('data:image/png;base64,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');
    background-repeat: no-repeat;
    background-color: #dbdbdb;
    background-position: 20px 0;
  }
  .maz-flag-after {
    padding-left: 25px;
  }
  .maz-phone-number-input {
    position: relative;
  }
  .maz-phone-number-input__country-flag {
    position: absolute;
    bottom: 0.429rem;
    left: 0.857rem;
    z-index: 2;
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  .maz-phone-number-input .country-selector {
    flex: 0 0 9.857rem;
    width: 9.857rem;
    min-width: 9.857rem;
    max-width: 9.857rem;
  }
  .maz-phone-number-input .country-selector:focus,
  .maz-phone-number-input .country-selector.has-list-open {
    z-index: 3;
  }
  .maz-phone-number-input .country-selector:focus ~ .maz-phone-number-input__country-flag,
  .maz-phone-number-input .country-selector.has-list-open ~ .maz-phone-number-input__country-flag {
    z-index: 4;
  }
  .maz-phone-number-input .country-selector .maz-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .maz-phone-number-input .country-selector .maz-input.has-error {
    z-index: 1;
  }
  .maz-phone-number-input .country-selector:not(.no-padding-left) .maz-input__input {
    padding-left: 40px;
  }
  .maz-phone-number-input .country-selector .maz-select__options-list .maz-input {
    border-top-right-radius: var(--maz-border-radius);
    border-bottom-right-radius: var(--maz-border-radius);
  }
  .maz-phone-number-input .country-selector .maz-select__options-list .maz-input__input {
    padding-left: 12px;
  }
  .maz-phone-number-input .country-selector__calling-code {
    width: 3.214rem;
  }
  .maz-phone-number-input--sm .maz-phone-number-input__country-flag {
    bottom: 0.357rem;
  }
  .maz-phone-number-input--sm .maz-phone-number-input__country-flag > div {
    height: 0.857rem;
  }
  .maz-phone-number-input--sm .country-selector {
    flex: 0 0 8.929rem;
    width: 8.929rem;
    min-width: 8.929rem;
    max-width: 8.929rem;
  }
  .maz-phone-number-input--lg .maz-phone-number-input__country-flag {
    bottom: 0.643rem;
  }
  .maz-phone-number-input--lg .country-selector {
    flex: 0 0 10.357rem;
    width: 10.357rem;
    min-width: 10.357rem;
    max-width: 10.357rem;
  }
  .maz-phone-number-input .maz-input.input-phone-number .maz-input__input {
    transition: z-index 0ms;
  }
  .maz-phone-number-input .maz-input.input-phone-number:not(.has-border-radius) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: -2px;
  }
  .maz-radio {
    transition: all 300ms ease-in-out;
    cursor: pointer;
    margin-left: 2px;
    min-height: 22px;
  }
  .maz-radio [type='radio']:not(:checked),
  .maz-radio [type='radio']:checked {
    position: absolute;
    left: -9999px;
  }
  .maz-radio [type='radio']:not(:checked) + label,
  .maz-radio [type='radio']:checked + label {
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .maz-radio [type='radio'] + label::before {
    border: var(--maz-border-width) solid transparent;
    content: '';
    position: absolute;
    left: 0;
    top: 2px;
    width: 18px;
    height: 18px;
    background: transparent;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
  }
  .maz-radio [type='radio']:not(:checked) + label::before {
    border-color: var(--maz-bg-color-light);
  }
  .maz-radio [type='radio']:not(:checked) + label::after,
  .maz-radio [type='radio']:checked + label::after {
    content: '';
    position: absolute;
    top: 6px;
    left: 4px;
    font-size: 1rem;
    width: 10px;
    height: 10px;
    transition: all 300ms ease-in-out;
    border-radius: 50%;
  }
  .maz-radio [type='radio']:not(:checked) + label::after {
    opacity: 0;
    transform: scale(0);
  }
  .maz-radio [type='radio']:checked + label::after {
    opacity: 1;
    transform: scale(1);
  }
  .maz-radio--primary [type='radio']:checked + label::before {
    border-color: var(--maz-primary);
  }
  .maz-radio--primary [type='radio']:not(:checked) + label::after,
  .maz-radio--primary [type='radio']:checked + label::after {
    background-color: var(--maz-primary);
    color: var(--maz-primary);
  }
  .maz-radio--primary [type='radio']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-primary-alpha-6);
    border-color: var(--maz-primary-darken);
  }
  .maz-radio--primary [type='radio']:focus + label::after {
    background-color: var(--maz-primary-darken);
  }
  .maz-radio--secondary [type='radio']:checked + label::before {
    border-color: var(--maz-secondary);
  }
  .maz-radio--secondary [type='radio']:not(:checked) + label::after,
  .maz-radio--secondary [type='radio']:checked + label::after {
    background-color: var(--maz-secondary);
    color: var(--maz-secondary);
  }
  .maz-radio--secondary [type='radio']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-secondary-alpha-6);
    border-color: var(--maz-secondary-darken);
  }
  .maz-radio--secondary [type='radio']:focus + label::after {
    background-color: var(--maz-secondary-darken);
  }
  .maz-radio--third [type='radio']:checked + label::before {
    border-color: var(--maz-third);
  }
  .maz-radio--third [type='radio']:not(:checked) + label::after,
  .maz-radio--third [type='radio']:checked + label::after {
    background-color: var(--maz-third);
    color: var(--maz-third);
  }
  .maz-radio--third [type='radio']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-third-alpha-6);
    border-color: var(--maz-third-darken);
  }
  .maz-radio--third [type='radio']:focus + label::after {
    background-color: var(--maz-third-darken);
  }
  .maz-radio--success [type='radio']:checked + label::before {
    border-color: var(--maz-success);
  }
  .maz-radio--success [type='radio']:not(:checked) + label::after,
  .maz-radio--success [type='radio']:checked + label::after {
    background-color: var(--maz-success);
    color: var(--maz-success);
  }
  .maz-radio--success [type='radio']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-success-alpha-6);
    border-color: var(--maz-success-darken);
  }
  .maz-radio--success [type='radio']:focus + label::after {
    background-color: var(--maz-success-darken);
  }
  .maz-radio--danger [type='radio']:checked + label::before {
    border-color: var(--maz-danger);
  }
  .maz-radio--danger [type='radio']:not(:checked) + label::after,
  .maz-radio--danger [type='radio']:checked + label::after {
    background-color: var(--maz-danger);
    color: var(--maz-danger);
  }
  .maz-radio--danger [type='radio']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-danger-alpha-6);
    border-color: var(--maz-danger-darken);
  }
  .maz-radio--danger [type='radio']:focus + label::after {
    background-color: var(--maz-danger-darken);
  }
  .maz-radio--grey [type='radio']:checked + label::before {
    border-color: var(--maz-grey);
  }
  .maz-radio--grey [type='radio']:not(:checked) + label::after,
  .maz-radio--grey [type='radio']:checked + label::after {
    background-color: var(--maz-grey);
    color: var(--maz-grey);
  }
  .maz-radio--grey [type='radio']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-grey-alpha-6);
    border-color: var(--maz-grey-darken);
  }
  .maz-radio--grey [type='radio']:focus + label::after {
    background-color: var(--maz-grey-darken);
  }
  .maz-radio--info [type='radio']:checked + label::before {
    border-color: var(--maz-info);
  }
  .maz-radio--info [type='radio']:not(:checked) + label::after,
  .maz-radio--info [type='radio']:checked + label::after {
    background-color: var(--maz-info);
    color: var(--maz-info);
  }
  .maz-radio--info [type='radio']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-info-alpha-6);
    border-color: var(--maz-info-darken);
  }
  .maz-radio--info [type='radio']:focus + label::after {
    background-color: var(--maz-info-darken);
  }
  .maz-radio--warning [type='radio']:checked + label::before {
    border-color: var(--maz-warning);
  }
  .maz-radio--warning [type='radio']:not(:checked) + label::after,
  .maz-radio--warning [type='radio']:checked + label::after {
    background-color: var(--maz-warning);
    color: var(--maz-warning);
  }
  .maz-radio--warning [type='radio']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-warning-alpha-6);
    border-color: var(--maz-warning-darken);
  }
  .maz-radio--warning [type='radio']:focus + label::after {
    background-color: var(--maz-warning-darken);
  }
  .maz-radio--light [type='radio']:checked + label::before {
    border-color: var(--maz-light);
  }
  .maz-radio--light [type='radio']:not(:checked) + label::after,
  .maz-radio--light [type='radio']:checked + label::after {
    background-color: var(--maz-light);
    color: var(--maz-light);
  }
  .maz-radio--light [type='radio']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-light-alpha-6);
    border-color: var(--maz-light-darken);
  }
  .maz-radio--light [type='radio']:focus + label::after {
    background-color: var(--maz-light-darken);
  }
  .maz-radio--dark [type='radio']:checked + label::before {
    border-color: var(--maz-dark);
  }
  .maz-radio--dark [type='radio']:not(:checked) + label::after,
  .maz-radio--dark [type='radio']:checked + label::after {
    background-color: var(--maz-dark);
    color: var(--maz-dark);
  }
  .maz-radio--dark [type='radio']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-dark-alpha-6);
    border-color: var(--maz-dark-darken);
  }
  .maz-radio--dark [type='radio']:focus + label::after {
    background-color: var(--maz-dark-darken);
  }
  .maz-radio--default [type='radio']:checked + label::before {
    border-color: var(--maz-default);
  }
  .maz-radio--default [type='radio']:not(:checked) + label::after,
  .maz-radio--default [type='radio']:checked + label::after {
    background-color: var(--maz-default);
    color: var(--maz-default);
  }
  .maz-radio--default [type='radio']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-default-alpha-6);
    border-color: var(--maz-default-darken);
  }
  .maz-radio--default [type='radio']:focus + label::after {
    background-color: var(--maz-default-darken);
  }
  .maz-radio--disabled [type='radio']:checked + label::before {
    border-color: var(--maz-disabled);
  }
  .maz-radio--disabled [type='radio']:not(:checked) + label::after,
  .maz-radio--disabled [type='radio']:checked + label::after {
    background-color: var(--maz-disabled);
    color: var(--maz-disabled);
  }
  .maz-radio--disabled [type='radio']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-disabled-alpha-6);
    border-color: var(--maz-disabled-darken);
  }
  .maz-radio--disabled [type='radio']:focus + label::after {
    background-color: var(--maz-disabled-darken);
  }
  .maz-radio--white [type='radio']:checked + label::before {
    border-color: var(--maz-white);
  }
  .maz-radio--white [type='radio']:not(:checked) + label::after,
  .maz-radio--white [type='radio']:checked + label::after {
    background-color: var(--maz-white);
    color: var(--maz-white);
  }
  .maz-radio--white [type='radio']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-white-alpha-6);
    border-color: var(--maz-white-darken);
  }
  .maz-radio--white [type='radio']:focus + label::after {
    background-color: var(--maz-white-darken);
  }
  .maz-radio--black [type='radio']:checked + label::before {
    border-color: var(--maz-black);
  }
  .maz-radio--black [type='radio']:not(:checked) + label::after,
  .maz-radio--black [type='radio']:checked + label::after {
    background-color: var(--maz-black);
    color: var(--maz-black);
  }
  .maz-radio--black [type='radio']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-black-alpha-6);
    border-color: var(--maz-black-darken);
  }
  .maz-radio--black [type='radio']:focus + label::after {
    background-color: var(--maz-black-darken);
  }
  .maz-radio--transparent [type='radio']:checked + label::before {
    border-color: var(--maz-transparent);
  }
  .maz-radio--transparent [type='radio']:not(:checked) + label::after,
  .maz-radio--transparent [type='radio']:checked + label::after {
    background-color: var(--maz-transparent);
    color: var(--maz-transparent);
  }
  .maz-radio--transparent [type='radio']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-transparent-alpha-6);
    border-color: var(--maz-transparent-darken);
  }
  .maz-radio--transparent [type='radio']:focus + label::after {
    background-color: var(--maz-transparent-darken);
  }
  .maz-radio--light-grey [type='radio']:checked + label::before {
    border-color: var(--maz-light-grey);
  }
  .maz-radio--light-grey [type='radio']:not(:checked) + label::after,
  .maz-radio--light-grey [type='radio']:checked + label::after {
    background-color: var(--maz-light-grey);
    color: var(--maz-light-grey);
  }
  .maz-radio--light-grey [type='radio']:focus + label::before {
    box-shadow: 0 0 0 0.143rem var(--maz-light-grey-alpha-6);
    border-color: var(--maz-light-grey-darken);
  }
  .maz-radio--light-grey [type='radio']:focus + label::after {
    background-color: var(--maz-light-grey-darken);
  }
  .maz-read-more p {
    text-align: justify;
    margin-bottom: 0;
    white-space: pre-line;
  }
  .maz-read-more a {
    color: var(--maz-primary);
    font-size: 0.857rem;
    font-weight: 500;
  }
  .maz-responsive-menu {
    position: relative;
  }
  .maz-responsive-menu-collapse {
    background-color: var(--maz-bg-color);
    position: absolute;
    top: calc(100% + 0.143em);
    right: 0;
    overflow: hidden;
    z-index: 1;
  }
  .maz-responsive-menu-collapse__items {
    padding: 8px 16px;
    color: var(--maz-text-color) !important;
    text-decoration: none !important;
  }
  .maz-responsive-menu-collapse__items.router-link-exact-active,
  .maz-responsive-menu-collapse__items.nuxt-link-exact-active {
    color: var(--maz-primary) !important;
  }
  .maz-responsive-menu-collapse__items:hover:not(.router-link-exact-active):not(
      .nuxt-link-exact-active
    ),
  .maz-responsive-menu-collapse__items:focus:not(.router-link-exact-active):not(
      .nuxt-link-exact-active
    ) {
    background-color: var(--maz-hover-color);
  }
  .maz-search {
    position: relative;
  }
  .maz-search--sm {
    font-size: 0.857rem;
  }
  .maz-search--lg {
    font-size: 1.143rem;
  }
  .maz-search__items {
    z-index: 9;
    padding: 0;
    list-style: none;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0;
    max-width: 100%;
    position: absolute;
    top: 100%;
    border-radius: var(--maz-border-radius);
    width: 100%;
    background-color: var(--maz-bg-color);
    max-height: 250px;
  }
  .maz-search__items__item {
    padding: 7px 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 1em;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: var(--maz-text-color);
    width: 100%;
    outline: none;
    text-align: left;
  }
  .maz-search__items__item:hover,
  .maz-search__items__item.keyboard-selected {
    background-color: var(--maz-hover-color-darken);
  }
  .maz-search__items__item.selected {
    color: #fff;
    font-weight: 600;
  }
  .maz-search__no-data i {
    font-size: 2rem;
  }
  .maz-search--primary .maz-search__items__item.selected {
    background-color: var(--maz-primary);
  }
  .maz-search--primary .maz-search__items__item.selected.keyboard-selected,
  .maz-search--primary .maz-search__items__item.selected:hover {
    background-color: var(--maz-primary-darken);
  }
  .maz-search--secondary .maz-search__items__item.selected {
    background-color: var(--maz-secondary);
  }
  .maz-search--secondary .maz-search__items__item.selected.keyboard-selected,
  .maz-search--secondary .maz-search__items__item.selected:hover {
    background-color: var(--maz-secondary-darken);
  }
  .maz-search--third .maz-search__items__item.selected {
    background-color: var(--maz-third);
  }
  .maz-search--third .maz-search__items__item.selected.keyboard-selected,
  .maz-search--third .maz-search__items__item.selected:hover {
    background-color: var(--maz-third-darken);
  }
  .maz-search--success .maz-search__items__item.selected {
    background-color: var(--maz-success);
  }
  .maz-search--success .maz-search__items__item.selected.keyboard-selected,
  .maz-search--success .maz-search__items__item.selected:hover {
    background-color: var(--maz-success-darken);
  }
  .maz-search--danger .maz-search__items__item.selected {
    background-color: var(--maz-danger);
  }
  .maz-search--danger .maz-search__items__item.selected.keyboard-selected,
  .maz-search--danger .maz-search__items__item.selected:hover {
    background-color: var(--maz-danger-darken);
  }
  .maz-search--grey .maz-search__items__item.selected {
    background-color: var(--maz-grey);
  }
  .maz-search--grey .maz-search__items__item.selected.keyboard-selected,
  .maz-search--grey .maz-search__items__item.selected:hover {
    background-color: var(--maz-grey-darken);
  }
  .maz-search--info .maz-search__items__item.selected {
    background-color: var(--maz-info);
  }
  .maz-search--info .maz-search__items__item.selected.keyboard-selected,
  .maz-search--info .maz-search__items__item.selected:hover {
    background-color: var(--maz-info-darken);
  }
  .maz-search--warning .maz-search__items__item.selected {
    background-color: var(--maz-warning);
  }
  .maz-search--warning .maz-search__items__item.selected.keyboard-selected,
  .maz-search--warning .maz-search__items__item.selected:hover {
    background-color: var(--maz-warning-darken);
  }
  .maz-search--light .maz-search__items__item.selected {
    background-color: var(--maz-light);
  }
  .maz-search--light .maz-search__items__item.selected.keyboard-selected,
  .maz-search--light .maz-search__items__item.selected:hover {
    background-color: var(--maz-light-darken);
  }
  .maz-search--dark .maz-search__items__item.selected {
    background-color: var(--maz-dark);
  }
  .maz-search--dark .maz-search__items__item.selected.keyboard-selected,
  .maz-search--dark .maz-search__items__item.selected:hover {
    background-color: var(--maz-dark-darken);
  }
  .maz-search--default .maz-search__items__item.selected {
    background-color: var(--maz-default);
  }
  .maz-search--default .maz-search__items__item.selected.keyboard-selected,
  .maz-search--default .maz-search__items__item.selected:hover {
    background-color: var(--maz-default-darken);
  }
  .maz-search--disabled .maz-search__items__item.selected {
    background-color: var(--maz-disabled);
  }
  .maz-search--disabled .maz-search__items__item.selected.keyboard-selected,
  .maz-search--disabled .maz-search__items__item.selected:hover {
    background-color: var(--maz-disabled-darken);
  }
  .maz-search--white .maz-search__items__item.selected {
    background-color: var(--maz-white);
  }
  .maz-search--white .maz-search__items__item.selected.keyboard-selected,
  .maz-search--white .maz-search__items__item.selected:hover {
    background-color: var(--maz-white-darken);
  }
  .maz-search--black .maz-search__items__item.selected {
    background-color: var(--maz-black);
  }
  .maz-search--black .maz-search__items__item.selected.keyboard-selected,
  .maz-search--black .maz-search__items__item.selected:hover {
    background-color: var(--maz-black-darken);
  }
  .maz-search--transparent .maz-search__items__item.selected {
    background-color: var(--maz-transparent);
  }
  .maz-search--transparent .maz-search__items__item.selected.keyboard-selected,
  .maz-search--transparent .maz-search__items__item.selected:hover {
    background-color: var(--maz-transparent-darken);
  }
  .maz-search--light-grey .maz-search__items__item.selected {
    background-color: var(--maz-light-grey);
  }
  .maz-search--light-grey .maz-search__items__item.selected.keyboard-selected,
  .maz-search--light-grey .maz-search__items__item.selected:hover {
    background-color: var(--maz-light-grey-darken);
  }
  .maz-sidebar__wrapper {
    background-color: var(--maz-bg-color);
    position: relative;
    transition-duration: 0.2s;
    z-index: 1030;
  }
  .maz-sidebar__wrapper__content {
    overflow: hidden;
  }
  .maz-sidebar__wrapper__close-btn {
    position: absolute;
    top: 8px;
    left: 100%;
  }
  .maz-sidebar__wrapper__close-btn button {
    background-color: var(--maz-bg-color-light);
    border-radius: 0 8px 8px 0;
    width: 23px;
    height: 48px;
    outline: 0;
    cursor: pointer;
    border: none;
    padding: 0;
  }
  .maz-sidebar__wrapper__load-layer {
    background-color: var(--maz-overlay-color);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1040;
  }
  .maz-sidebar__wrapper__opacity-layer {
    z-index: 9;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: var(--maz-overlay-color);
    cursor: pointer;
  }
  .maz-sidebar__wrapper.has-shadow {
    box-shadow: 0 1.5rem 1.5rem rgba(0, 0, 0, 0.1);
  }
  .maz-sidebar__wrapper.has-shadow .maz-sidebar__wrapper__close-btn button {
    box-shadow: 2px 0 0.5rem rgba(0, 0, 0, 0.1);
  }
  .maz-sidebar__wrapper.has-shadow.is-right .maz-sidebar__wrapper__close-btn button {
    box-shadow: -2px 0 0.5rem rgba(0, 0, 0, 0.1);
  }
  .maz-sidebar__wrapper.is-close:not(.is-mini) {
    box-shadow: none !important;
  }
  .maz-sidebar__wrapper.is-right .maz-sidebar__wrapper__close-btn {
    right: 100%;
    left: inherit;
  }
  .maz-sidebar__wrapper.is-right .maz-sidebar__wrapper__close-btn button {
    border-radius: var(--maz-border-radius) 0 0 var(--maz-border-radius);
  }
  .maz-sidebar__wrapper.is-absolute {
    left: 0;
    position: absolute;
    max-width: 90%;
  }
  .maz-sidebar__wrapper.is-absolute.is-right {
    right: 0;
    left: inherit;
  }
  .maz-slider__bar {
    position: relative;
    border-radius: calc(var(--maz-border-radius) * 2);
  }
  .maz-slider__divider {
    position: absolute;
    border-radius: 2em;
    height: 100%;
  }
  .maz-slider__btn {
    position: absolute;
    outline: none;
    cursor: pointer;
    color: var(--maz-text-color);
    border-radius: 1em;
    box-shadow: 0 0 6px 0 rgba(48, 48, 48, 0.3);
    border: none;
    font-size: 1.2em;
    background-color: var(--maz-bg-color);
    padding: 0 4px;
    font-weight: bold;
    line-height: 1;
    transition: box-shadow 300ms ease-in-out, width 300ms ease-in-out, transform 300ms ease-in-out,
      background-color 300ms ease-in-out;
    z-index: 1;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .maz-slider__btn.active-cursor {
    z-index: 2;
    transform: scale(1.3);
  }
  .maz-slider__btn::before {
    content: attr(data-label);
    color: var(--maz-text-color);
    font-size: 1em;
    font-weight: normal;
    position: absolute;
    top: -1.8em;
  }
  .maz-slider__btn:hover {
    background-color: var(--maz-hover-color);
  }
  .maz-slider.maz-slider--primary .maz-slider__bar {
    background-color: var(--maz-primary);
  }
  .maz-slider.maz-slider--primary .maz-slider__btn.active-cursor {
    box-shadow: 0 0 0 0.143rem var(--maz-primary-alpha-60);
  }
  .maz-slider.maz-slider--secondary .maz-slider__bar {
    background-color: var(--maz-secondary);
  }
  .maz-slider.maz-slider--secondary .maz-slider__btn.active-cursor {
    box-shadow: 0 0 0 0.143rem var(--maz-secondary-alpha-60);
  }
  .maz-slider.maz-slider--third .maz-slider__bar {
    background-color: var(--maz-third);
  }
  .maz-slider.maz-slider--third .maz-slider__btn.active-cursor {
    box-shadow: 0 0 0 0.143rem var(--maz-third-alpha-60);
  }
  .maz-slider.maz-slider--success .maz-slider__bar {
    background-color: var(--maz-success);
  }
  .maz-slider.maz-slider--success .maz-slider__btn.active-cursor {
    box-shadow: 0 0 0 0.143rem var(--maz-success-alpha-60);
  }
  .maz-slider.maz-slider--danger .maz-slider__bar {
    background-color: var(--maz-danger);
  }
  .maz-slider.maz-slider--danger .maz-slider__btn.active-cursor {
    box-shadow: 0 0 0 0.143rem var(--maz-danger-alpha-60);
  }
  .maz-slider.maz-slider--grey .maz-slider__bar {
    background-color: var(--maz-grey);
  }
  .maz-slider.maz-slider--grey .maz-slider__btn.active-cursor {
    box-shadow: 0 0 0 0.143rem var(--maz-grey-alpha-60);
  }
  .maz-slider.maz-slider--info .maz-slider__bar {
    background-color: var(--maz-info);
  }
  .maz-slider.maz-slider--info .maz-slider__btn.active-cursor {
    box-shadow: 0 0 0 0.143rem var(--maz-info-alpha-60);
  }
  .maz-slider.maz-slider--warning .maz-slider__bar {
    background-color: var(--maz-warning);
  }
  .maz-slider.maz-slider--warning .maz-slider__btn.active-cursor {
    box-shadow: 0 0 0 0.143rem var(--maz-warning-alpha-60);
  }
  .maz-slider.maz-slider--light .maz-slider__bar {
    background-color: var(--maz-light);
  }
  .maz-slider.maz-slider--light .maz-slider__btn.active-cursor {
    box-shadow: 0 0 0 0.143rem var(--maz-light-alpha-60);
  }
  .maz-slider.maz-slider--dark .maz-slider__bar {
    background-color: var(--maz-dark);
  }
  .maz-slider.maz-slider--dark .maz-slider__btn.active-cursor {
    box-shadow: 0 0 0 0.143rem var(--maz-dark-alpha-60);
  }
  .maz-slider.maz-slider--default .maz-slider__bar {
    background-color: var(--maz-default);
  }
  .maz-slider.maz-slider--default .maz-slider__btn.active-cursor {
    box-shadow: 0 0 0 0.143rem var(--maz-default-alpha-60);
  }
  .maz-slider.maz-slider--disabled .maz-slider__bar {
    background-color: var(--maz-disabled);
  }
  .maz-slider.maz-slider--disabled .maz-slider__btn.active-cursor {
    box-shadow: 0 0 0 0.143rem var(--maz-disabled-alpha-60);
  }
  .maz-slider.maz-slider--white .maz-slider__bar {
    background-color: var(--maz-white);
  }
  .maz-slider.maz-slider--white .maz-slider__btn.active-cursor {
    box-shadow: 0 0 0 0.143rem var(--maz-white-alpha-60);
  }
  .maz-slider.maz-slider--black .maz-slider__bar {
    background-color: var(--maz-black);
  }
  .maz-slider.maz-slider--black .maz-slider__btn.active-cursor {
    box-shadow: 0 0 0 0.143rem var(--maz-black-alpha-60);
  }
  .maz-slider.maz-slider--transparent .maz-slider__bar {
    background-color: var(--maz-transparent);
  }
  .maz-slider.maz-slider--transparent .maz-slider__btn.active-cursor {
    box-shadow: 0 0 0 0.143rem var(--maz-transparent-alpha-60);
  }
  .maz-slider.maz-slider--light-grey .maz-slider__bar {
    background-color: var(--maz-light-grey);
  }
  .maz-slider.maz-slider--light-grey .maz-slider__btn.active-cursor {
    box-shadow: 0 0 0 0.143rem var(--maz-light-grey-alpha-60);
  }
  .maz-is-dark.maz-slider__btn,
  .maz-is-dark .maz-slider__btn {
    background-color: var(--maz-bg-color-light);
  }
  .maz-stepper__step {
    padding: 0;
  }
  .maz-stepper__step--dot {
    border-radius: 50%;
  }
  .maz-stepper__step--dot::before {
    border-radius: 50% !important;
  }
  .maz-stepper__step--square {
    border-radius: 0.3333333333em;
  }
  .maz-stepper__step--square.maz-btn::before {
    border-radius: calc(0.3333333333em + 2px);
  }
  .maz-stepper__step:not(.is-active) {
    background-color: var(--maz-hover-color);
    color: var(--maz-grey);
  }
  .maz-stepper__step:not(.is-active):hover,
  .maz-stepper__step:not(.is-active):focus {
    background-color: var(--maz-hover-color-darken);
  }
  .maz-stepper__step.is-active .maz-stepper__step__number {
    color: #fff;
  }
  .maz-switch__input {
    position: absolute;
    left: -9999px;
  }
  .maz-switch__toggle {
    position: relative;
    display: block;
    width: 40px;
    height: 20px;
    cursor: pointer;
    transform: translate3d(0, 0, 0);
  }
  .maz-switch__toggle::before {
    content: '';
    position: relative;
    top: 3px;
    left: 3px;
    width: 34px;
    height: 14px;
    display: block;
    border-radius: 8px;
    transition: all 200ms ease-in-out;
  }
  .maz-switch__toggle span {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    display: block;
    border-radius: 50%;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
    transition: all 200ms ease-in-out;
  }
  .maz-switch__toggle span::before {
    content: '';
    position: absolute;
    display: block;
    margin: -18px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    transform: scale(0);
    opacity: 1;
    pointer-events: none;
  }
  .maz-switch__input:checked + .maz-switch__toggle span {
    transform: translateX(20px);
  }
  .maz-switch__input:checked + .maz-switch__toggle span::before {
    transform: scale(1);
    opacity: 0;
    transition: all 400ms ease-in-out;
  }
  .maz-switch__input:disabled + .maz-switch__toggle {
    cursor: not-allowed;
  }
  .maz-switch--primary .maz-switch__input:focus + .maz-switch__toggle span {
    background-color: var(--maz-primary-darken);
    box-shadow: 0 0 0 0.143rem var(--maz-primary-alpha-60);
    border-radius: var(--maz-border-radius);
  }
  .maz-switch--secondary .maz-switch__input:focus + .maz-switch__toggle span {
    background-color: var(--maz-secondary-darken);
    box-shadow: 0 0 0 0.143rem var(--maz-secondary-alpha-60);
    border-radius: var(--maz-border-radius);
  }
  .maz-switch--third .maz-switch__input:focus + .maz-switch__toggle span {
    background-color: var(--maz-third-darken);
    box-shadow: 0 0 0 0.143rem var(--maz-third-alpha-60);
    border-radius: var(--maz-border-radius);
  }
  .maz-switch--success .maz-switch__input:focus + .maz-switch__toggle span {
    background-color: var(--maz-success-darken);
    box-shadow: 0 0 0 0.143rem var(--maz-success-alpha-60);
    border-radius: var(--maz-border-radius);
  }
  .maz-switch--danger .maz-switch__input:focus + .maz-switch__toggle span {
    background-color: var(--maz-danger-darken);
    box-shadow: 0 0 0 0.143rem var(--maz-danger-alpha-60);
    border-radius: var(--maz-border-radius);
  }
  .maz-switch--grey .maz-switch__input:focus + .maz-switch__toggle span {
    background-color: var(--maz-grey-darken);
    box-shadow: 0 0 0 0.143rem var(--maz-grey-alpha-60);
    border-radius: var(--maz-border-radius);
  }
  .maz-switch--info .maz-switch__input:focus + .maz-switch__toggle span {
    background-color: var(--maz-info-darken);
    box-shadow: 0 0 0 0.143rem var(--maz-info-alpha-60);
    border-radius: var(--maz-border-radius);
  }
  .maz-switch--warning .maz-switch__input:focus + .maz-switch__toggle span {
    background-color: var(--maz-warning-darken);
    box-shadow: 0 0 0 0.143rem var(--maz-warning-alpha-60);
    border-radius: var(--maz-border-radius);
  }
  .maz-switch--light .maz-switch__input:focus + .maz-switch__toggle span {
    background-color: var(--maz-light-darken);
    box-shadow: 0 0 0 0.143rem var(--maz-light-alpha-60);
    border-radius: var(--maz-border-radius);
  }
  .maz-switch--dark .maz-switch__input:focus + .maz-switch__toggle span {
    background-color: var(--maz-dark-darken);
    box-shadow: 0 0 0 0.143rem var(--maz-dark-alpha-60);
    border-radius: var(--maz-border-radius);
  }
  .maz-switch--default .maz-switch__input:focus + .maz-switch__toggle span {
    background-color: var(--maz-default-darken);
    box-shadow: 0 0 0 0.143rem var(--maz-default-alpha-60);
    border-radius: var(--maz-border-radius);
  }
  .maz-switch--disabled .maz-switch__input:focus + .maz-switch__toggle span {
    background-color: var(--maz-disabled-darken);
    box-shadow: 0 0 0 0.143rem var(--maz-disabled-alpha-60);
    border-radius: var(--maz-border-radius);
  }
  .maz-switch--white .maz-switch__input:focus + .maz-switch__toggle span {
    background-color: var(--maz-white-darken);
    box-shadow: 0 0 0 0.143rem var(--maz-white-alpha-60);
    border-radius: var(--maz-border-radius);
  }
  .maz-switch--black .maz-switch__input:focus + .maz-switch__toggle span {
    background-color: var(--maz-black-darken);
    box-shadow: 0 0 0 0.143rem var(--maz-black-alpha-60);
    border-radius: var(--maz-border-radius);
  }
  .maz-switch--transparent .maz-switch__input:focus + .maz-switch__toggle span {
    background-color: var(--maz-transparent-darken);
    box-shadow: 0 0 0 0.143rem var(--maz-transparent-alpha-60);
    border-radius: var(--maz-border-radius);
  }
  .maz-switch--light-grey .maz-switch__input:focus + .maz-switch__toggle span {
    background-color: var(--maz-light-grey-darken);
    box-shadow: 0 0 0 0.143rem var(--maz-light-grey-alpha-60);
    border-radius: var(--maz-border-radius);
  }
  .maz-tabs-bar {
    height: 3.071rem;
    background-color: transparent;
    position: relative;
    overflow-x: auto;
    display: flex;
  }
  .maz-tabs-bar:not(.align-left) .maz-tabs-bar__item {
    flex: 1;
  }
  .maz-tabs-bar__item {
    box-shadow: none !important;
  }
  .maz-tabs-bar__item:not(:last-of-type) {
    margin-right: var(--maz-border-width);
  }
  .maz-tabs-bar__item.active {
    color: var(--maz-primary);
    position: relative;
  }
  .maz-tabs-bar__item.disabled {
    color: var(--maz-disabled-color);
    cursor: not-allowed;
  }
  .maz-tabs-bar__item:hover,
  .maz-tabs-bar__item:focus {
    background-color: var(--maz-hover-color);
    text-decoration: none;
  }
  .maz-tabs-bar__indicator {
    transition: all 500ms;
    height: 2px;
    text-align: center;
    position: absolute;
    bottom: 2px;
    left: 0;
  }
  .maz-tabs-bar__indicator .maz-sub-bar {
    margin: 0 auto;
    background: var(--maz-primary);
    height: 2px;
    width: 60%;
  }
  .maz-tabs-content {
    position: relative;
  }
  .maz-tabs-content-item {
    position: relative;
    width: 100%;
    flex: 1 0 auto;
    top: 0;
    transition: all 500ms cubic-bezier(0.25, 0.8, 0.5, 1);
  }

  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2)
      format('woff2');
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }
`, si = Aa`
  :host {
    --maz-primary: #9bc99d;
    --maz-border-width: 1px;
    --maz-border-radius: 5px;
    --maz-border-color: #dddfe6;
    --maz-icon-color: lightgray;
    --maz-placeholder-color: lightgray;
  }

  .m1 {
    margin: 4px 0px;
    padding: 0;
  }
  .maz-phone-number-input .maz-input.input-phone-number:not(.has-border-radius) {
    border-left: 0px;
  }
  .maz-select__options-list {
    margin-top: 2px;
    min-width: 100%;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 6px 10px -4px !important;
  }
`;
function be(r, e, a, t, o, i, n, d) {
  var l = typeof r == "function" ? r.options : r;
  e && (l.render = e, l.staticRenderFns = a, l._compiled = !0), t && (l.functional = !0), i && (l._scopeId = "data-v-" + i);
  var s;
  if (n ? (s = function(m) {
    m = m || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !m && typeof __VUE_SSR_CONTEXT__ < "u" && (m = __VUE_SSR_CONTEXT__), o && o.call(this, m), m && m._registeredComponents && m._registeredComponents.add(n);
  }, l._ssrRegister = s) : o && (s = d ? function() {
    o.call(
      this,
      (l.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : o), s)
    if (l.functional) {
      l._injectStyles = s;
      var c = l.render;
      l.render = function(u, f) {
        return s.call(f), c(u, f);
      };
    } else {
      var p = l.beforeCreate;
      l.beforeCreate = p ? [].concat(p, s) : [s];
    }
  return {
    exports: r,
    options: l
  };
}
const ci = {
  name: "MazSpinner",
  props: {
    size: { type: Number, default: 40 },
    dark: { type: Boolean, default: !1 },
    color: { type: String, default: "primary" }
  },
  computed: {
    fillColorClass() {
      return `maz-fill-${this.color}`;
    }
  }
};
var mi = function() {
  var e = this, a = e._self._c;
  return a("svg", { staticClass: "maz-base-component maz-spinner maz-spinner-anim", class: [
    {
      "spinner-anim__white": e.dark
    },
    e.fillColorClass
  ], staticStyle: { "enable-background": "new 0 0 50 50" }, attrs: { width: `${e.size}px`, height: `${e.size}px`, version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 50 50", "xml:space": "preserve" } }, [a("path", { attrs: { d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" } })]);
}, ui = [], pi = /* @__PURE__ */ be(
  ci,
  mi,
  ui,
  !1,
  null,
  null,
  null,
  null
);
const ie = pi.exports;
ie.install = (r) => {
  r.component(ie.name, ie);
};
const Oe = {
  data() {
    return {
      uniqueId: null
    };
  },
  mounted() {
    const r = this.id || this.$attrs.id;
    this.uniqueId = r ? `${r}` : `${this.$options.name}-${this._uid}`;
  }
}, hi = {
  name: "MazBtn",
  components: {
    MazSpinner: ie
  },
  mixins: [Oe],
  inheritAttrs: !1,
  props: {
    // is the id of the button
    id: { type: String, default: null },
    // is color type (`primary` / `secondary` / `third` / `success` / `danger` / `grey` / `info` / `warning` / `light` / `dark` / `default` / `white` / `black`)
    color: {
      type: String,
      default: "primary"
    },
    // is the button type (button, submit or something else)
    type: { type: String, default: "button" },
    // button size (`xl`, `lg` / `md` / `sm` / `mini`)
    size: { type: String, default: "md" },
    // is a `boolean` to show the loader & disable it
    loading: { type: Boolean, default: !1 },
    // is a `boolean` to disable the button
    disabled: { type: Boolean, default: !1 },
    // apply the outline style
    outline: { type: Boolean, default: !1 },
    // apply the rounded style
    rounded: { type: Boolean, default: !1 },
    // apply the fab style
    fab: { type: Boolean, default: !1 },
    // apply the focus style
    active: { type: Boolean, default: !1 },
    // take 100% of the width
    block: { type: Boolean, default: !1 },
    // remove shadow/elevation
    noShadow: { type: Boolean, default: !1 },
    // should be a [material icon](https://material.io/resources/icons/) name (usefull with fab buttons)
    iconName: { type: String, default: null },
    // should be a [material icon](https://material.io/resources/icons/) name
    leftIconName: { type: String, default: null },
    // should be a [material icon](https://material.io/resources/icons/) name
    rightIconName: { type: String, default: null },
    // align text to left (for block button)
    justifyStart: { type: Boolean, default: !1 },
    // align text to right (for block button)
    justifyEnd: { type: Boolean, default: !1 }
  },
  computed: {
    componentType() {
      const { href: r, to: e } = this.$attrs;
      return r ? "a" : e ? "router-link" : "button";
    },
    isLink() {
      return this.componentType === "a";
    },
    isDisabled() {
      const { disabled: r, loading: e } = this;
      return e || r;
    },
    classes() {
      const {
        color: r,
        size: e,
        outline: a,
        rounded: t,
        fab: o,
        active: i,
        block: n,
        noShadow: d,
        hasRightIcon: l,
        hasLeftIcon: s,
        hasIcon: c,
        hasSlotDefault: p
      } = this;
      return [
        ...r ? [`maz-btn--${r}`] : [null],
        ...e ? [`maz-btn--${e}`] : [null],
        ...a ? ["maz-btn--outline"] : [null],
        ...t ? ["maz-btn--rounded"] : [null],
        ...n ? ["maz-btn--block"] : [null],
        ...o ? ["maz-btn--fab"] : [null],
        ...i ? ["maz-active"] : [null],
        ...d ? ["maz-no-shadow"] : [null],
        ...s() ? ["maz-btn--icon--left"] : [null],
        ...l() ? ["maz-btn--icon--right"] : [null],
        ...c() ? ["maz-btn--icon"] : [null],
        ...p() ? [null] : ["maz-btn--no-text"]
      ];
    },
    textClasses() {
      const { justifyStart: r, justifyEnd: e } = this;
      return [
        ...r ? ["maz-justify-start"] : [null],
        ...e ? ["maz-justify-end"] : [null],
        ...!r && !e ? ["maz-justify-center"] : [null]
      ];
    }
  },
  methods: {
    hasSlotDefault() {
      return this.$slots.default;
    },
    hasIcon() {
      return this.hasLeftIcon() || this.hasRightIcon() || this.hasMainIcon();
    },
    hasMainIcon() {
      return this.iconName || this.$slots.icon;
    },
    hasLeftIcon() {
      return this.leftIconName || this.$slots["icon-left"];
    },
    hasRightIcon() {
      return this.rightIconName || this.$slots["icon-right"];
    },
    handleClick(r) {
      this.$emit("click", r);
    },
    emitMouseEnter(r) {
      this.$emit("mouseenter", r);
    },
    emitMouseLeave(r) {
      this.$emit("mouseleave", r);
    },
    emitFocus(r) {
      this.$emit("focus", r);
    },
    emitBlur(r) {
      this.$emit("blur", r);
    }
  }
};
var gi = function() {
  var e = this, a = e._self._c;
  return a(e.componentType, e._b({ tag: "component", staticClass: "maz-base-component maz-btn maz-inline-flex", class: [
    e.classes,
    {
      "maz-text-hidden": e.loading
    }
  ], attrs: { id: e.uniqueId, type: e.isLink ? null : e.type, disabled: e.isLink ? null : e.isDisabled }, on: { click: function(t) {
    return e.handleClick(t);
  }, mouseenter: function(t) {
    return e.emitMouseEnter(t);
  }, mouseleave: function(t) {
    return e.emitMouseLeave(t);
  }, focus: function(t) {
    return e.emitFocus(t);
  }, blur: function(t) {
    return e.emitBlur(t);
  } } }, "component", e.$attrs, !1), [e.hasLeftIcon() || e.hasMainIcon() ? a("div", { staticClass: "maz-flex maz-flex-center maz-btn__icon-left", class: {
    "maz-mr-2": !e.fab && e.hasSlotDefault()
  } }, [e._t("icon-left", function() {
    return [a("i", { staticClass: "material-icons" }, [e._v(e._s(e.leftIconName || e.iconName))])];
  })], 2) : e._e(), a("span", { staticClass: "maz-flex maz-align-center maz-h-100 maz-overflow-hidden", class: [e.textClasses, { "maz-flex-1": e.hasSlotDefault() }] }, [e._t("default")], 2), e.hasRightIcon() ? a("div", { staticClass: "maz-flex maz-flex-center maz-btn__icon-right", class: {
    "maz-ml-2": !e.fab && e.hasSlotDefault()
  } }, [e._t("icon-right", function() {
    return [a("i", { staticClass: "material-icons" }, [e._v(e._s(e.rightIconName))])];
  })], 2) : e._e()]);
}, fi = [], bi = /* @__PURE__ */ be(
  hi,
  gi,
  fi,
  !1,
  null,
  null,
  null,
  null
);
const ne = bi.exports;
ne.install = (r) => {
  r.component(ne.name, ne);
};
const zi = (r, e) => {
  let a;
  return function() {
    const t = this, o = arguments;
    clearTimeout(a), a = setTimeout(() => r.apply(t, o), e);
  };
};
let vi = 500;
const yi = {
  name: "MazInput",
  mixins: [Oe],
  props: {
    // value of the input
    value: {
      validator: (r) => ["string", "number"].includes(typeof r) || r === null,
      default: null
    },
    // input id
    id: { type: String, default: null },
    // value of the input
    placeholder: { type: String, default: "Enter text" },
    // replace the label if is present
    hint: { type: String, default: null },
    // input size (`'lg'` / `'sm'`)
    size: { type: String, default: null },
    // is the input size (`text` or `number`)
    type: { type: String, default: "text" },
    // should be a [material icon](https://material.io/resources/icons/) name
    leftIconName: { type: String, default: null },
    // should be a [material icon](https://material.io/resources/icons/) name
    rightIconName: { type: String, default: null },
    // When is `true` the input has the error style
    error: { type: Boolean, default: !1 },
    // When is `true` the input has the warning style
    warning: { type: Boolean, default: !1 },
    // When is `true` the input is disable
    disabled: { type: Boolean, default: !1 },
    // When is `true` the input has the dark theme
    dark: { type: Boolean, default: !1 },
    // When is `true` the input is on readonly mode
    readonly: { type: Boolean, default: !1 },
    // When is `true` the input has the valid style
    success: { type: Boolean, default: !1 },
    // When is `true` the input become required & has the `*` symbol
    required: { type: Boolean, default: !1 },
    // When is `true` the input is a textarea
    textarea: { type: Boolean, default: !1 },
    // When is `true` the input has a progress bar animated
    loading: { type: Boolean, default: !1 },
    // When is `true` the input can be clear with a button on the right
    clearable: { type: Boolean, default: !1 },
    // When is `true` the input has not label (top placeholder when value is not empty)
    noLabel: { type: Boolean, default: !1 },
    // When is `true` and is `required`, the `*` symbol is not showing
    noRequiredSymbol: { type: Boolean, default: !1 },
    // force focus style input
    focus: { type: Boolean, default: !1 },
    // color name in basic colors
    color: { type: String, default: "primary" },
    // Add a debounce of 500ms to emit the value
    debounce: { type: Boolean, default: !1 }
  },
  data() {
    return {
      isFocus: !1,
      showPassword: !1
    };
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(r) {
        const e = this.hasNumberType ? r ? parseInt(r) : 0 : r;
        this.emitValue(e);
      }
    },
    placeholderValue() {
      let { placeholder: r } = this;
      return this.required && r && !this.noRequiredSymbol && (r += " *"), r;
    },
    hintValue() {
      let { hint: r } = this;
      return this.required && r && (r += " *"), r;
    },
    hasNumberType() {
      return this.type === "number";
    },
    hasLabel() {
      return !this.noLabel;
    },
    getType() {
      return this.showPassword ? "text" : this.type;
    },
    hasPasswordBtn() {
      return this.type === "password" && this.inputValue;
    },
    hasClearBtn() {
      return this.clearable && this.inputValue && !this.textarea;
    },
    leftNumberIcon() {
      return [!!this.hasRightIcon(), !!this.hasClearBtn, !!this.hasPasswordBtn].filter((e) => e).length;
    }
  },
  methods: {
    debounceValue: zi(function(r) {
      this.$emit("input", r);
    }, vi),
    emitValue(r) {
      if (this.debounce)
        return this.debounceValue(r);
      this.$emit("input", r);
    },
    hasLeftIcon() {
      return this.leftIconName || this.$slots["icon-left"];
    },
    hasRightIcon() {
      return this.rightIconName || this.$slots["icon-right"];
    },
    focusInput() {
      this.$refs.MazInput.focus();
    },
    onFocus(r) {
      this.$emit("focus", r), this.isFocus = !0;
    },
    onBlur(r) {
      this.$emit("blur", r), this.isFocus = !1;
    },
    onPaste(r) {
      this.$emit("paste", r);
    },
    onChange(r) {
      this.$emit("change", r);
    },
    clear() {
      this.$emit("input", this.hasNumberType ? 0 : ""), this.$emit("clear");
    },
    keyUp(r) {
      this.$emit("keyup", r);
    },
    keyDown(r) {
      this.$emit("keydown", r);
    }
  }
};
var ki = function() {
  var e = this, a = e._self._c;
  return a("div", { ref: "parent", staticClass: "maz-base-component maz-input maz-border maz-border-color maz-border-color-hover maz-border-solid maz-border-radius", class: [
    {
      "is-focused": e.isFocus || e.focus,
      "is-valid": e.success,
      "has-value": e.value,
      "is-textarea": e.textarea,
      "has-error": e.error,
      "has-warning": e.warning,
      "is-disabled": e.disabled,
      "maz-is-dark": e.dark,
      "has-hint": e.hint,
      "has-no-label": !e.hasLabel && !e.hint,
      "has-left-icon": e.hasLeftIcon()
    },
    `maz-input--${e.size}`,
    `has-${e.leftNumberIcon}-right-icon`,
    `maz-input--${e.color}`
  ], on: { click: e.focusInput } }, [e.hasLeftIcon() ? a("div", { staticClass: "maz-input__icon maz-flex left", class: [e.textarea ? "maz-align-start maz-pt-2" : "maz-align-center"] }, [e._t("icon-left", function() {
    return [a("i", { staticClass: "material-icons" }, [e._v(e._s(e.leftIconName))])];
  })], 2) : e._e(), e.hasRightIcon() ? a("div", { staticClass: "maz-input__icon maz-flex right", class: [e.textarea ? "maz-align-start maz-pt-2" : "maz-align-center"] }, [e._t("icon-right", function() {
    return [a("i", { staticClass: "material-icons" }, [e._v(e._s(e.rightIconName))])];
  })], 2) : e._e(), e.getType === "checkbox" && !e.textarea ? a("input", e._b({ directives: [{ name: "model", rawName: "v-model", value: e.inputValue, expression: "inputValue" }], ref: "MazInput", staticClass: "maz-input__input maz-border-radius", class: {
    "has-right-icon": e.hasClearBtn || e.hasPasswordBtn || e.hasRightIcon()
  }, attrs: { id: e.uniqueId, placeholder: e.placeholderValue, "aria-label": e.placeholder, disabled: e.disabled, required: e.required, readonly: e.readonly, type: "checkbox" }, domProps: { checked: Array.isArray(e.inputValue) ? e._i(e.inputValue, null) > -1 : e.inputValue }, on: { keydown: e.keyDown, keyup: e.keyUp, focus: e.onFocus, blur: e.onBlur, paste: e.onPaste, change: [function(t) {
    var o = e.inputValue, i = t.target, n = !!i.checked;
    if (Array.isArray(o)) {
      var d = null, l = e._i(o, d);
      i.checked ? l < 0 && (e.inputValue = o.concat([d])) : l > -1 && (e.inputValue = o.slice(0, l).concat(o.slice(l + 1)));
    } else
      e.inputValue = n;
  }, e.onChange], click: function(t) {
    return e.$emit("click", t);
  } } }, "input", e.$attrs, !1)) : e.getType === "radio" && !e.textarea ? a("input", e._b({ directives: [{ name: "model", rawName: "v-model", value: e.inputValue, expression: "inputValue" }], ref: "MazInput", staticClass: "maz-input__input maz-border-radius", class: {
    "has-right-icon": e.hasClearBtn || e.hasPasswordBtn || e.hasRightIcon()
  }, attrs: { id: e.uniqueId, placeholder: e.placeholderValue, "aria-label": e.placeholder, disabled: e.disabled, required: e.required, readonly: e.readonly, type: "radio" }, domProps: { checked: e._q(e.inputValue, null) }, on: { keydown: e.keyDown, keyup: e.keyUp, focus: e.onFocus, blur: e.onBlur, paste: e.onPaste, change: [function(t) {
    e.inputValue = null;
  }, e.onChange], click: function(t) {
    return e.$emit("click", t);
  } } }, "input", e.$attrs, !1)) : e.textarea ? a("textarea", e._b({ directives: [{ name: "model", rawName: "v-model", value: e.inputValue, expression: "inputValue" }], ref: "MazInput", staticClass: "maz-input__input maz-textarea", attrs: { id: e.uniqueId, placeholder: e.placeholderValue, type: e.type, required: e.required, readonly: e.readonly }, domProps: { value: e.inputValue }, on: { keydown: e.keyDown, keyup: e.keyUp, focus: e.onFocus, blur: e.onBlur, paste: e.onPaste, change: e.onChange, click: function(t) {
    return e.$emit("click", t);
  }, input: function(t) {
    t.target.composing || (e.inputValue = t.target.value);
  } } }, "textarea", e.$attrs, !1)) : a("input", e._b({ directives: [{ name: "model", rawName: "v-model", value: e.inputValue, expression: "inputValue" }], ref: "MazInput", staticClass: "maz-input__input maz-border-radius", class: {
    "has-right-icon": e.hasClearBtn || e.hasPasswordBtn || e.hasRightIcon()
  }, attrs: { id: e.uniqueId, placeholder: e.placeholderValue, "aria-label": e.placeholder, disabled: e.disabled, required: e.required, readonly: e.readonly, type: e.getType }, domProps: { value: e.inputValue }, on: { keydown: e.keyDown, keyup: e.keyUp, focus: e.onFocus, blur: e.onBlur, paste: e.onPaste, change: e.onChange, click: function(t) {
    return e.$emit("click", t);
  }, input: function(t) {
    t.target.composing || (e.inputValue = t.target.value);
  } } }, "input", e.$attrs, !1)), e._v(" "), e.hasLabel || e.hint ? a("label", { ref: "label", staticClass: "maz-input__label", class: e.error ? "maz-text-danger" : null, attrs: { for: e.uniqueId, tabindex: "-1" }, on: { click: e.focusInput } }, [e._v(" " + e._s(e.hintValue || e.placeholderValue) + " ")]) : e._e(), a("transition-group", { attrs: { name: "maz-scale" } }, [e.hasClearBtn ? a("button", { key: "clear-button", staticClass: "maz-input__toggle-btn --clear maz-flex maz-flex-center", class: { "has-right-icon": e.hasRightIcon() }, attrs: { title: "clear", type: "button", tabindex: "-1" }, on: { click: function(t) {
    return t.stopPropagation(), e.clear.apply(null, arguments);
  } } }, [a("i", { staticClass: "maz-input__toggle-btn__icon material-icons" }, [e._v(" close ")])]) : e._e(), e.hasPasswordBtn ? a("button", { key: "password-button", staticClass: "maz-input__toggle-btn password maz-flex maz-flex-center", class: {
    "has-clear-btn": e.hasClearBtn,
    "has-right-icon": e.hasRightIcon()
  }, attrs: { title: "clear", type: "button", tabindex: "-1" }, on: { click: function(t) {
    e.showPassword = !e.showPassword;
  } } }, [a("i", { staticClass: "maz-input__toggle-btn__icon material-icons" }, [e._v(" " + e._s(e.showPassword ? "visibility_off" : "visibility") + " ")])]) : e._e()]), e.loading ? a("div", { staticClass: "maz-input__loader", class: { textarea: e.textarea } }, [a("div", { staticClass: "maz-input__loader__progress-bar" })]) : e._e()], 1);
}, xi = [], wi = /* @__PURE__ */ be(
  yi,
  ki,
  xi,
  !1,
  null,
  null,
  null,
  null
);
const K = wi.exports;
K.install = (r) => {
  r.component(K.name, K);
};
const $i = {
  name: "MazSelect",
  components: { MazInput: K, MazBtn: ne },
  mixins: [Oe],
  props: {
    // is the value of the input
    value: {
      required: !0,
      validator: (r) => ["number", "string", "boolean"].includes(typeof r) || Array.isArray(r) || r === null
    },
    // list of the options
    options: { type: Array, required: !0 },
    // When is `true` the select is disabled
    disabled: { type: Boolean, default: !1 },
    lock: { type: Boolean, default: !1 },
    // When is `true` the select has the dark style
    dark: { type: Boolean, default: !1 },
    // Item in list height in pixel
    itemHeight: { type: Number, default: 35 },
    // List height in pixel
    listHeight: { type: Number, default: 260 },
    // List width in pixel or percent (:list-width="100", list-width="100%")
    listWidth: { type: [Number, String], default: null },
    // The select has no label in the input
    placeholder: { type: String, default: "Select option" },
    // When is `true` the select you select multiple values
    noLabel: { type: Boolean, default: !1 },
    // When is `true` the select you select multiple values
    multiple: { type: Boolean, default: !1 },
    // When is `true` the select has an input to search in options
    search: { type: Boolean, default: !1 },
    // the search input placeholder
    searchPlaceholder: { type: String, default: "Search in options" },
    // the search input placeholder
    color: { type: String, default: "primary" },
    // input size
    size: { type: String, default: "md" },
    // When is `true` the option list is open
    open: { type: Boolean, default: !1 },
    // set the position of option list (`top`, `top right`, `bottom right`)
    position: { type: String, default: "left bottom" },
    // set label key and value key - Ex: `{ labelKey: '<your_object_key>', valueKey: '<your_object_key>', searchKey: '<your_object_key>' }`
    config: {
      type: Object,
      default: () => ({ labelKey: "label", valueKey: "value", searchKey: "label" })
    },
    // force value shown on input
    inputValue: { type: String, default: null }
  },
  data() {
    return {
      listIsOpen: !1,
      query: "",
      tmpValue: null,
      searchQuery: null,
      filteredOptions: null
    };
  },
  computed: {
    hasPositionTop() {
      return this.position.includes("top");
    },
    hasPositionRight() {
      return this.position.includes("right");
    },
    listTransition() {
      return this.position.includes("bottom") ? "maz-slide" : "maz-slideinvert";
    },
    hasOpenList() {
      return this.open || this.listIsOpen;
    },
    values() {
      const { multiple: r, value: e, options: a } = this;
      if (!a)
        throw new Error("[MazSelect] options should be provide");
      if (r && !Array.isArray(e) && e !== null)
        throw new Error("[MazSelect] value should be an array or null");
      if (!r && Array.isArray(e))
        throw new Error("[MazSelect] value should be a string, a number or null");
      return e ? r ? [...e] : [e] : [];
    },
    hasLeftIcon() {
      return this.$attrs.leftIconName || this.$slots["icon-left"];
    },
    placeholderShown() {
      const { placeholder: r, multiple: e, values: a } = this;
      return e && a.length ? null : r;
    },
    hasNoLabel() {
      return this.multiple || this.noLabel;
    },
    optionHeight() {
      return {
        height: `${this.itemHeight}px`,
        flex: `0 0 ${this.itemHeight}px`
      };
    },
    itemListSize() {
      const { listHeight: r, listWidth: e } = this, a = Number.isInteger(e) ? `${e}px` : e;
      return {
        maxHeight: `${r}px`,
        width: a,
        maxWidth: a
      };
    },
    tmpValueIndex() {
      const { config: r, tmpValue: e, optionsShown: a } = this;
      return a.findIndex((t) => t[r.valueKey] === e);
    },
    selectedValueIndex() {
      const { values: r, options: e, config: a } = this;
      return r.length ? e.findIndex((t) => t[a.valueKey] === r[r.length - 1]) : null;
    },
    valueShown() {
      if (this.inputValue)
        return this.inputValue;
      const { multiple: r, options: e, values: a, value: t, config: o } = this, i = e.find((d) => d[o.valueKey] === t);
      return i && i[o.valueKey] && !r ? i[o.labelKey] : a[0] ? " " : null;
    },
    optionsShown() {
      return this.filteredOptions || this.options;
    },
    selectedOptions() {
      const { values: r, options: e, config: a } = this, t = [];
      return r.forEach((o) => t.push(e.find((i) => o === i[a.valueKey]))), t;
    }
  },
  watch: {
    value: {
      handler() {
        const { multiple: r } = this;
        r && this.scrollTags();
      },
      immediate: !0
    }
  },
  methods: {
    async scrollTags() {
      var a;
      await this.$nextTick();
      const { SelectedTags: r, SelectedTagsContainer: e } = this.$refs;
      r && (r.scrollLeft = ((a = e == null ? void 0 : e.$el) == null ? void 0 : a.clientWidth) ?? null);
    },
    removeOption(r) {
      const { values: e, multiple: a } = this, t = e.filter((i) => i !== r), o = t.length ? a ? t : t[0] : null;
      this.emitValues(o);
    },
    closeList(r = {}) {
      if (this.$el.contains(r.relatedTarget))
        return r.preventDefault();
      this.$emit("close"), this.listIsOpen = !1, this.isFocus = !1;
    },
    openList(r) {
      if (this.lock)
        return;
      this.$emit("focus", r);
      const { disabled: e, search: a, values: t } = this;
      if (!e) {
        if (e)
          return;
        this.$emit("open"), this.isFocus = !0, this.listIsOpen = !0, this.selectFirstValue(), a && this.focusSearchInput(), t.length && this.scrollToSelectedOnFocus(this.selectedValueIndex);
      }
    },
    clearSearch() {
      this.searchQuery = null, this.filteredOptions = null;
    },
    async reset() {
      this.clearSearch(), !this.multiple && this.closeList();
    },
    selectFirstValue() {
      const { multiple: r, value: e, options: a, config: t } = this;
      if (e || r)
        return;
      const o = a[0][t.valueKey] || null;
      this.tmpValue = o, this.emitValues(o, !0);
    },
    updateValue(r) {
      const { multiple: e, values: a, removeOption: t } = this;
      if (a.includes(r) && e)
        return t(r);
      this.tmpValue = r, r && a.push(r);
      const o = e && r ? a : r;
      this.emitValues(o);
    },
    async focusSearchInput() {
      await this.$nextTick();
      const { SearchInput: r } = this.$refs;
      r.$el.querySelector("input").focus();
    },
    async emitValues(r, e) {
      this.$emit("input", r), !e && (await this.$nextTick(), this.reset());
    },
    async scrollToSelectedOnFocus(r) {
      await this.$nextTick(), this.$refs.optionsList.scrollTop = r * this.itemHeight - this.itemHeight * 3;
    },
    keyboardNav(r) {
      const e = r.keyCode, { hasOpenList: a, tmpValueIndex: t, optionsShown: o, openList: i, tmpValue: n, search: d, config: l } = this;
      if (e === 40 || e === 38) {
        r.preventDefault(), a || i();
        let s = e === 40 ? t + 1 : t - 1;
        (s === -1 || s >= o.length) && (s = s === -1 ? o.length - 1 : 0), this.tmpValue = o[s][l.valueKey], this.scrollToSelectedOnFocus(s);
      } else
        e === 13 ? (r.preventDefault(), a ? this.updateValue(n) : this.openList()) : e === 27 ? this.closeList() : d || this.searching(r);
    },
    searching(r) {
      const { config: e, options: a } = this, t = r.keyCode;
      clearTimeout(o);
      const o = setTimeout(() => {
        this.query = "";
      }, 2e3), i = String.fromCharCode(t);
      if (t === 8 && this.query !== "")
        this.query = this.query.substring(0, this.query.length - 1);
      else if (/[a-zA-Z-e ]/.test(i)) {
        this.hasOpenList || this.openList(), this.query += i.toLowerCase();
        const n = a.findIndex((d) => (this.tmpValue = d[e.valueKey], d[e.searchKey].toLowerCase().includes(this.query)));
        n !== -1 && this.scrollToSelectedOnFocus(n);
      }
    },
    searchInOptions(r) {
      const { config: e, options: a } = this;
      if (this.searchQuery = r === "" ? null : r, !this.searchQuery)
        return this.filteredOptions = a;
      const t = r.toLowerCase(), o = a.filter(
        (i) => i[e.valueKey] && i[e.searchKey].toLowerCase().includes(t) || i[e.labelKey] && i[e.labelKey].includes(t)
      );
      this.tmpValue = o.length ? o[0][e.valueKey] : null, this.filteredOptions = o;
    }
  }
};
var _i = function() {
  var e = this, a = e._self._c;
  return a("div", { staticClass: "maz-base-component maz-select", class: [
    {
      "has-list-open": e.hasOpenList,
      "maz-is-dark": e.dark
    },
    `maz-select--${e.color}`,
    `maz-select--${e.size}`
  ], on: { "!blur": function(t) {
    return e.closeList(t);
  } } }, [e.multiple ? a("div", { ref: "SelectedTags", staticClass: "maz-select__tags maz-flex maz-align-center", class: {
    "maz-left-offset": e.hasLeftIcon
  } }, [a("transition-group", { ref: "SelectedTagsContainer", staticClass: "maz-flex maz-align-center maz-h-100", attrs: { tag: "div", name: "maz-tags" } }, e._l(e.selectedOptions, function(t, o) {
    return a("MazBtn", { key: `tags-${o}`, staticClass: "maz-select__tag maz-flex maz-align-center", attrs: { disabled: e.disabled, color: e.color, size: e.size }, on: { click: function(i) {
      return i.preventDefault(), i.stopPropagation(), e.removeOption(t[e.config.valueKey]);
    } } }, [a("span", { staticClass: "maz-select__tag__text" }, [e._v(" " + e._s(t[e.config.labelKey]) + " ")]), a("i", { staticClass: "maz-select__tag__clear material-icons" }, [e._v(" close ")])]);
  }), 1)], 1) : e._e(), a("MazInput", e._b({ ref: "textField", attrs: { value: e.valueShown, readonly: "", "no-label": e.hasNoLabel, color: e.color, size: e.size, placeholder: e.placeholderShown, disabled: e.disabled, focus: e.hasOpenList }, on: { clear: function(t) {
    return e.emitValues(null);
  }, keydown: function(t) {
    e.search || e.keyboardNav(t);
  }, keyup: function(t) {
    return e.$emit("keyup", t);
  }, blur: function(t) {
    return e.$emit("blur", t);
  }, change: function(t) {
    return e.$emit("change", t);
  }, paste: function(t) {
    return e.$emit("paste", t);
  }, click: function(t) {
    return e.$emit("click", t);
  }, focus: e.openList } }, "MazInput", e.$attrs, !1), [a("div", { staticClass: "maz-select__toggle maz-flex maz-flex-center", attrs: { slot: "icon-right", tabindex: "-1" }, slot: "icon-right" }, [e._t("arrow", function() {
    return [a("svg", { staticClass: "maz-select__toggle__arrow", attrs: { mlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" } }, [a("path", { staticClass: "arrow", attrs: { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" } }), a("path", { attrs: { fill: "none", d: "M0 0h24v24H0V0z" } })])];
  })], 2)]), a("transition", { attrs: { name: e.listTransition } }, [a("div", { directives: [{ name: "show", rawName: "v-show", value: e.hasOpenList, expression: "hasOpenList" }], staticClass: "maz-select__options-list maz-flex maz-elevation", class: [
    e.hasPositionTop ? "maz-select__options-list--top maz-direction-column-reverse" : "maz-direction-column",
    { "maz-select__options-list--right": e.hasPositionRight }
  ], style: [e.itemListSize] }, [e.search ? a("MazInput", { ref: "SearchInput", staticClass: "maz-m-1", attrs: { color: e.color, value: e.searchQuery, placeholder: e.searchPlaceholder, size: "sm", "no-label": "", name: "new_search_in_options", autocomplete: "off" }, on: { input: e.searchInOptions, keydown: [e.keyboardNav, function(t) {
    return !t.type.indexOf("key") && e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"]) ? null : e.closeList.apply(null, arguments);
  }] } }) : e._e(), a("div", { ref: "optionsList", staticClass: "maz-select__options-list__items maz-flex maz-direction-column" }, [e._l(e.optionsShown, function(t, o) {
    return a("button", { key: o, staticClass: "maz-select__options-list__item flex maz-align-center maz-text-left", class: [
      { selected: e.values.length && e.values.includes(t[e.config.valueKey]) },
      { "keyboard-selected": e.tmpValue === t[e.config.valueKey] }
    ], style: [e.optionHeight], attrs: { tabindex: "-1", type: "button" }, on: { click: function(i) {
      return i.preventDefault(), i.stopPropagation(), e.updateValue(t[e.config.valueKey]);
    } } }, [e._t("default", function() {
      return [a("div", { class: t.icon ? `maz-flag maz-flag-${t.icon}` : "" }, [a("span", { staticClass: "maz-dots-text", class: [
        { "maz-flag-after": t.icon },
        { "maz-text-muted": !t[e.config.valueKey] },
        e.values.includes(t[e.config.valueKey]) ? "maz-text-white" : "maz-text-color"
      ] }, [e._v(" " + e._s(t[e.config.labelKey]) + " ")])])];
    }, { option: { ...t, isSelected: e.values.includes(t[e.config.valueKey]) }, tag: "div" })], 2);
  }), e.optionsShown.length ? e._e() : e._t("no-results", function() {
    return [a("div", { staticClass: "maz-select__options-list__no-results maz-p-1 maz-flex maz-flex-center" }, [a("i", { staticClass: "material-icons maz-text-danger" }, [e._v(" search_off ")])])];
  }, { tag: "div" })], 2)], 1)])], 1);
}, Ci = [], Ei = /* @__PURE__ */ be(
  $i,
  _i,
  Ci,
  !1,
  null,
  null,
  null,
  null
);
const de = Ei.exports;
de.install = (r) => {
  r.component(de.name, de);
};
const kt = {
  version: 4,
  country_calling_codes: {
    1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
    7: ["RU", "KZ"],
    20: ["EG"],
    27: ["ZA"],
    30: ["GR"],
    31: ["NL"],
    32: ["BE"],
    33: ["FR"],
    34: ["ES"],
    36: ["HU"],
    39: ["IT", "VA"],
    40: ["RO"],
    41: ["CH"],
    43: ["AT"],
    44: ["GB", "GG", "IM", "JE"],
    45: ["DK"],
    46: ["SE"],
    47: ["NO", "SJ"],
    48: ["PL"],
    49: ["DE"],
    51: ["PE"],
    52: ["MX"],
    53: ["CU"],
    54: ["AR"],
    55: ["BR"],
    56: ["CL"],
    57: ["CO"],
    58: ["VE"],
    60: ["MY"],
    61: ["AU", "CC", "CX"],
    62: ["ID"],
    63: ["PH"],
    64: ["NZ"],
    65: ["SG"],
    66: ["TH"],
    81: ["JP"],
    82: ["KR"],
    84: ["VN"],
    86: ["CN"],
    90: ["TR"],
    91: ["IN"],
    92: ["PK"],
    93: ["AF"],
    94: ["LK"],
    95: ["MM"],
    98: ["IR"],
    211: ["SS"],
    212: ["MA", "EH"],
    213: ["DZ"],
    216: ["TN"],
    218: ["LY"],
    220: ["GM"],
    221: ["SN"],
    222: ["MR"],
    223: ["ML"],
    224: ["GN"],
    225: ["CI"],
    226: ["BF"],
    227: ["NE"],
    228: ["TG"],
    229: ["BJ"],
    230: ["MU"],
    231: ["LR"],
    232: ["SL"],
    233: ["GH"],
    234: ["NG"],
    235: ["TD"],
    236: ["CF"],
    237: ["CM"],
    238: ["CV"],
    239: ["ST"],
    240: ["GQ"],
    241: ["GA"],
    242: ["CG"],
    243: ["CD"],
    244: ["AO"],
    245: ["GW"],
    246: ["IO"],
    247: ["AC"],
    248: ["SC"],
    249: ["SD"],
    250: ["RW"],
    251: ["ET"],
    252: ["SO"],
    253: ["DJ"],
    254: ["KE"],
    255: ["TZ"],
    256: ["UG"],
    257: ["BI"],
    258: ["MZ"],
    260: ["ZM"],
    261: ["MG"],
    262: ["RE", "YT"],
    263: ["ZW"],
    264: ["NA"],
    265: ["MW"],
    266: ["LS"],
    267: ["BW"],
    268: ["SZ"],
    269: ["KM"],
    290: ["SH", "TA"],
    291: ["ER"],
    297: ["AW"],
    298: ["FO"],
    299: ["GL"],
    350: ["GI"],
    351: ["PT"],
    352: ["LU"],
    353: ["IE"],
    354: ["IS"],
    355: ["AL"],
    356: ["MT"],
    357: ["CY"],
    358: ["FI", "AX"],
    359: ["BG"],
    370: ["LT"],
    371: ["LV"],
    372: ["EE"],
    373: ["MD"],
    374: ["AM"],
    375: ["BY"],
    376: ["AD"],
    377: ["MC"],
    378: ["SM"],
    380: ["UA"],
    381: ["RS"],
    382: ["ME"],
    383: ["XK"],
    385: ["HR"],
    386: ["SI"],
    387: ["BA"],
    389: ["MK"],
    420: ["CZ"],
    421: ["SK"],
    423: ["LI"],
    500: ["FK"],
    501: ["BZ"],
    502: ["GT"],
    503: ["SV"],
    504: ["HN"],
    505: ["NI"],
    506: ["CR"],
    507: ["PA"],
    508: ["PM"],
    509: ["HT"],
    590: ["GP", "BL", "MF"],
    591: ["BO"],
    592: ["GY"],
    593: ["EC"],
    594: ["GF"],
    595: ["PY"],
    596: ["MQ"],
    597: ["SR"],
    598: ["UY"],
    599: ["CW", "BQ"],
    670: ["TL"],
    672: ["NF"],
    673: ["BN"],
    674: ["NR"],
    675: ["PG"],
    676: ["TO"],
    677: ["SB"],
    678: ["VU"],
    679: ["FJ"],
    680: ["PW"],
    681: ["WF"],
    682: ["CK"],
    683: ["NU"],
    685: ["WS"],
    686: ["KI"],
    687: ["NC"],
    688: ["TV"],
    689: ["PF"],
    690: ["TK"],
    691: ["FM"],
    692: ["MH"],
    850: ["KP"],
    852: ["HK"],
    853: ["MO"],
    855: ["KH"],
    856: ["LA"],
    880: ["BD"],
    886: ["TW"],
    960: ["MV"],
    961: ["LB"],
    962: ["JO"],
    963: ["SY"],
    964: ["IQ"],
    965: ["KW"],
    966: ["SA"],
    967: ["YE"],
    968: ["OM"],
    970: ["PS"],
    971: ["AE"],
    972: ["IL"],
    973: ["BH"],
    974: ["QA"],
    975: ["BT"],
    976: ["MN"],
    977: ["NP"],
    992: ["TJ"],
    993: ["TM"],
    994: ["AZ"],
    995: ["GE"],
    996: ["KG"],
    998: ["UZ"]
  },
  countries: {
    AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
    AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]],
    AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"],
    AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"],
    AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"],
    AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"],
    AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"],
    AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"],
    AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]],
    AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"],
    AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"],
    AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"],
    AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
    AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]],
    AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"],
    AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"],
    BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"],
    BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"],
    BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"],
    BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"],
    BF: ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]],
    BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"],
    BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]]],
    BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]],
    BJ: ["229", "00", "[24-689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]]],
    BL: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-2])\\d{4}"]]],
    BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"],
    BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]],
    BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"],
    BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
    BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"],
    BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"],
    BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]],
    BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-79]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]],
    BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"],
    BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]],
    CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]],
    CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
    CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0"],
    CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]],
    CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]],
    CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"],
    CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]],
    CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]],
    CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]],
    CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]],
    CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "10(?:10|9[56])|2[0-57-9](?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"],
    CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11], [["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0(4(?:[14]4|56)|[579])?"],
    CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"],
    CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"],
    CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]],
    CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"],
    CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
    CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]],
    CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]],
    DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"],
    DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]],
    DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]],
    DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"],
    DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"],
    DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"],
    EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"],
    EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]],
    EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]], "0"],
    EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
    ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"],
    ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]],
    ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"],
    FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"],
    FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    FK: ["500", "00", "[2-7]\\d{4}", [5]],
    FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]],
    FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"],
    FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"],
    GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"],
    GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-579])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-2]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"],
    GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"],
    GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"],
    GF: ["594", "00", "[56]94\\d{6}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"],
    GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]],
    GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"],
    GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]],
    GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]],
    GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
    GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]],
    GP: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1289]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-2])\\d{4}"]]],
    GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]],
    GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]],
    GT: ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]],
    GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([3-9]\\d{6})$|1", "671$1", 0, "671"],
    GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]],
    GY: ["592", "001", "9008\\d{3}|(?:[2-467]\\d\\d|862)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]]],
    HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]],
    HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"],
    HT: ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]],
    HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"],
    ID: ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"],
    IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"],
    IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"],
    IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"],
    IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]],
    IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"],
    IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"],
    IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]],
    JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]],
    JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"],
    JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"],
    JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0"],
    KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"],
    KG: ["996", "00", "8\\d{9}|(?:[235-8]\\d|99)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
    KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"],
    KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]],
    KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"],
    KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"],
    KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"],
    KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]],
    KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"],
    KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"],
    LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"],
    LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"],
    LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"],
    LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"],
    LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"],
    LR: ["231", "00", "(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"], "0$1"]], "0"],
    LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]],
    LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]], "8", 0, "[08]"],
    LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],
    LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]],
    LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"],
    MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29[1289]|389)", "529(?:1[1-46-9]|2[013-8]|90)|5(?:298|389)[0-46-9]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5293[01]\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|9[0-289])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[0189]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]|8[0-3]))\\d{6}"], ["80\\d{7}"], ["89\\d{7}"], 0, 0, 0, 0, ["592(?:4[0-2]|93)\\d{4}"]]],
    MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"],
    MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"],
    ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"],
    MF: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-2])\\d{4}"]]],
    MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"],
    MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"],
    MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"],
    ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]],
    MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"],
    MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"],
    MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]],
    MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"],
    MQ: ["596", "00", "596\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]],
    MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"],
    MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]],
    MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"],
    MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"],
    MX: ["52", "0[09]", "1(?:(?:[27]2|44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"],
    MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"],
    MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]],
    NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"],
    NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]],
    NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[04]"]]]],
    NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"],
    NG: ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"],
    NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]],
    NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"],
    NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"],
    NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"],
    NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]],
    NU: ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]],
    NZ: ["64", "0(?:0|161)", "[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-579]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|[89]0", "50(?:[0367]|88)|[89]0"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"],
    OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]],
    PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]],
    PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "],
    PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]],
    PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"],
    PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"],
    PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]],
    PM: ["508", "00", "[45]\\d{5}|(?:708|80\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"],
    PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
    PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]],
    PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
    PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"],
    QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]],
    RE: ["262", "00", "(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-3]))\\d{4}"], ["(?:69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|6[0-6]|7[0-27]|8[0-8]|9[0-479]))|9(?:399[0-3]|479[0-2]|76(?:2[27]|3[0-37]|9\\d)))\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, 0, ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]],
    RO: ["40", "00", "(?:[2378]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "],
    RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"],
    RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"],
    RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]]], "0"],
    SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"],
    SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],
    SC: ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"],
    SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"],
    SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-6]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]],
    SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"],
    SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"],
    SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|[57]9)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"],
    SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"],
    SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"],
    SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"],
    SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]],
    SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3478]|64|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6(?:0[5-7]|[1-35-9])|9[2-9]"]]], "0"],
    SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]],
    SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"],
    ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]],
    SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]],
    SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"],
    SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"],
    SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]],
    TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
    TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"],
    TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]],
    TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
    TJ: ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"],
    TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
    TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]],
    TM: ["993", "810", "[1-6]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"],
    TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]],
    TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]],
    TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"],
    TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"],
    TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]],
    TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"],
    TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"],
    UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"],
    UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"],
    US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["5056(?:[0-35-9]\\d|4[46])\\d{4}|(?:4722|505[2-57-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[0-2]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]]],
    UY: ["598", "0(?:0|1[3-9]\\d)", "(?:0004|4)\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [7, 8, 10, 13], [["(\\d{3})(\\d{4})", "$1 $2", ["405|8|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "],
    UZ: ["998", "810", "(?:33|[5-79]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[35-9]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"],
    VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"],
    VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"],
    VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"],
    VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"],
    VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"],
    VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"],
    VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]],
    WF: ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]],
    WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]],
    XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]], "0"],
    YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"],
    YT: ["262", "00", "(?:(?:(?:26|63)9|80\\d)\\d|9398)\\d{5}", [9], 0, "0", 0, 0, 0, 0, "269|63|9398"],
    ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"],
    ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"],
    ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"]
  },
  nonGeographic: {
    800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]],
    808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]],
    870: ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]],
    878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]],
    881: ["881", 0, "[0-36-9]\\d{8}", [9], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-36-9]"]]], 0, 0, 0, 0, 0, 0, [0, ["[0-36-9]\\d{8}"]]],
    882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]],
    883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[013-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]],
    888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]],
    979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]]
  }
};
function Oa(r, e) {
  var a = Array.prototype.slice.call(e);
  return a.push(kt), r.apply(this, a);
}
function ba(r) {
  "@babel/helpers - typeof";
  return ba = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ba(r);
}
function dr(r, e) {
  for (var a = 0; a < e.length; a++) {
    var t = e[a];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, t.key, t);
  }
}
function Ni(r, e, a) {
  return e && dr(r.prototype, e), a && dr(r, a), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Ai(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ii(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: r,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(r, "prototype", {
    writable: !1
  }), e && ue(r, e);
}
function Si(r) {
  var e = wt();
  return function() {
    var t = pe(r), o;
    if (e) {
      var i = pe(this).constructor;
      o = Reflect.construct(t, arguments, i);
    } else
      o = t.apply(this, arguments);
    return Pi(this, o);
  };
}
function Pi(r, e) {
  if (e && (ba(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return xt(r);
}
function xt(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function za(r) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return za = function(t) {
    if (t === null || !Bi(t))
      return t;
    if (typeof t != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(t))
        return e.get(t);
      e.set(t, o);
    }
    function o() {
      return xe(t, arguments, pe(this).constructor);
    }
    return o.prototype = Object.create(t.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ue(o, t);
  }, za(r);
}
function xe(r, e, a) {
  return wt() ? xe = Reflect.construct : xe = function(o, i, n) {
    var d = [null];
    d.push.apply(d, i);
    var l = Function.bind.apply(o, d), s = new l();
    return n && ue(s, n.prototype), s;
  }, xe.apply(null, arguments);
}
function wt() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Bi(r) {
  return Function.toString.call(r).indexOf("[native code]") !== -1;
}
function ue(r, e) {
  return ue = Object.setPrototypeOf || function(t, o) {
    return t.__proto__ = o, t;
  }, ue(r, e);
}
function pe(r) {
  return pe = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
    return a.__proto__ || Object.getPrototypeOf(a);
  }, pe(r);
}
var R = /* @__PURE__ */ function(r) {
  Ii(a, r);
  var e = Si(a);
  function a(t) {
    var o;
    return Ai(this, a), o = e.call(this, t), Object.setPrototypeOf(xt(o), a.prototype), o.name = o.constructor.name, o;
  }
  return Ni(a);
}(/* @__PURE__ */ za(Error)), Da = 2, Fi = 17, Ri = 3, C = "0-9０-９٠-٩۰-۹", Ti = "-‐-―−ー－", Mi = "／/", Oi = "．.", Di = "  ­​⁠　", Li = "()（）［］\\[\\]", Ui = "~⁓∼～", I = "".concat(Ti).concat(Mi).concat(Oi).concat(Di).concat(Li).concat(Ui), De = "+＋";
function lr(r, e) {
  r = r.split("-"), e = e.split("-");
  for (var a = r[0].split("."), t = e[0].split("."), o = 0; o < 3; o++) {
    var i = Number(a[o]), n = Number(t[o]);
    if (i > n)
      return 1;
    if (n > i)
      return -1;
    if (!isNaN(i) && isNaN(n))
      return 1;
    if (isNaN(i) && !isNaN(n))
      return -1;
  }
  return r[1] && e[1] ? r[1] > e[1] ? 1 : r[1] < e[1] ? -1 : 0 : !r[1] && e[1] ? 1 : r[1] && !e[1] ? -1 : 0;
}
function Ae(r) {
  "@babel/helpers - typeof";
  return Ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ae(r);
}
function Le(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function sr(r, e) {
  for (var a = 0; a < e.length; a++) {
    var t = e[a];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, t.key, t);
  }
}
function Ue(r, e, a) {
  return e && sr(r.prototype, e), a && sr(r, a), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
var Gi = "1.2.0", Hi = "1.7.35", cr = " ext. ", Vi = /^\d+$/, _ = /* @__PURE__ */ function() {
  function r(e) {
    Le(this, r), Qi(e), this.metadata = e, $t.call(this, e);
  }
  return Ue(r, [{
    key: "getCountries",
    value: function() {
      return Object.keys(this.metadata.countries).filter(function(a) {
        return a !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function(a) {
      return this.metadata.countries[a];
    }
  }, {
    key: "nonGeographic",
    value: function() {
      if (!(this.v1 || this.v2 || this.v3))
        return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function(a) {
      return this.getCountryMetadata(a) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function(a) {
      if (this.getCountryCodesForCallingCode(a))
        return !0;
      if (this.nonGeographic()) {
        if (this.nonGeographic()[a])
          return !0;
      } else {
        var t = this.countryCallingCodes()[a];
        if (t && t.length === 1 && t[0] === "001")
          return !0;
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function(a) {
      return this.nonGeographic() ? !!this.nonGeographic()[a] : !this.getCountryCodesForCallingCode(a);
    }
    // Deprecated.
  }, {
    key: "country",
    value: function(a) {
      return this.selectNumberingPlan(a);
    }
  }, {
    key: "selectNumberingPlan",
    value: function(a, t) {
      if (a && Vi.test(a) && (t = a, a = null), a && a !== "001") {
        if (!this.hasCountry(a))
          throw new Error("Unknown country: ".concat(a));
        this.numberingPlan = new mr(this.getCountryMetadata(a), this);
      } else if (t) {
        if (!this.hasCallingCode(t))
          throw new Error("Unknown calling code: ".concat(t));
        this.numberingPlan = new mr(this.getNumberingPlanMetadata(t), this);
      } else
        this.numberingPlan = void 0;
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function(a) {
      var t = this.countryCallingCodes()[a];
      if (t)
        return t.length === 1 && t[0].length === 3 ? void 0 : t;
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function(a) {
      var t = this.getCountryCodesForCallingCode(a);
      if (t)
        return t[0];
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function(a) {
      var t = this.getCountryCodeForCallingCode(a);
      if (t)
        return this.getCountryMetadata(t);
      if (this.nonGeographic()) {
        var o = this.nonGeographic()[a];
        if (o)
          return o;
      } else {
        var i = this.countryCallingCodes()[a];
        if (i && i.length === 1 && i[0] === "001")
          return this.metadata.countries["001"];
      }
    }
    // Deprecated.
  }, {
    key: "countryCallingCode",
    value: function() {
      return this.numberingPlan.callingCode();
    }
    // Deprecated.
  }, {
    key: "IDDPrefix",
    value: function() {
      return this.numberingPlan.IDDPrefix();
    }
    // Deprecated.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      return this.numberingPlan.defaultIDDPrefix();
    }
    // Deprecated.
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.numberingPlan.nationalNumberPattern();
    }
    // Deprecated.
  }, {
    key: "possibleLengths",
    value: function() {
      return this.numberingPlan.possibleLengths();
    }
    // Deprecated.
  }, {
    key: "formats",
    value: function() {
      return this.numberingPlan.formats();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this.numberingPlan.nationalPrefixForParsing();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }
    // Deprecated.
  }, {
    key: "leadingDigits",
    value: function() {
      return this.numberingPlan.leadingDigits();
    }
    // Deprecated.
  }, {
    key: "hasTypes",
    value: function() {
      return this.numberingPlan.hasTypes();
    }
    // Deprecated.
  }, {
    key: "type",
    value: function(a) {
      return this.numberingPlan.type(a);
    }
    // Deprecated.
  }, {
    key: "ext",
    value: function() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function() {
      return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
    }
    // Deprecated.
  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function(a) {
      return this.selectNumberingPlan(a);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function() {
      return this.numberingPlan !== void 0;
    }
  }]), r;
}(), mr = /* @__PURE__ */ function() {
  function r(e, a) {
    Le(this, r), this.globalMetadataObject = a, this.metadata = e, $t.call(this, a.metadata);
  }
  return Ue(r, [{
    key: "callingCode",
    value: function() {
      return this.metadata[0];
    }
    // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.
  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
    // Is always present.
  }, {
    key: "IDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[1];
    }
    // Is only present when a country supports multiple IDD prefixes.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
    }
    // "possible length" data is always present in Google's metadata.
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.v1)
        return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function(a) {
      return a[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: function() {
      var a = this, t = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return t.map(function(o) {
        return new Yi(o, a);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function(a) {
      return a[this.v1 ? 4 : this.v2 ? 5 : 6];
    }
    // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }
    // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "leadingDigits",
    value: function() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function() {
      return this.types() && this.types().length === 0 ? !1 : !!this.types();
    }
  }, {
    key: "type",
    value: function(a) {
      if (this.hasTypes() && ur(this.types(), a))
        return new Ki(ur(this.types(), a), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? cr : this.metadata[13] || cr;
    }
  }]), r;
}(), Yi = /* @__PURE__ */ function() {
  function r(e, a) {
    Le(this, r), this._format = e, this.metadata = a;
  }
  return Ue(r, [{
    key: "pattern",
    value: function() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function() {
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
    // Checks whether national prefix formatting rule contains national prefix.
  }, {
    key: "usesNationalPrefix",
    value: function() {
      return !!(this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !ji.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]), r;
}(), ji = /^\(?\$1\)?$/, Ki = /* @__PURE__ */ function() {
  function r(e, a) {
    Le(this, r), this.type = e, this.metadata = a;
  }
  return Ue(r, [{
    key: "pattern",
    value: function() {
      return this.metadata.v1 ? this.type : this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.metadata.v1)
        return this.type[1] || this.metadata.possibleLengths();
    }
  }]), r;
}();
function ur(r, e) {
  switch (e) {
    case "FIXED_LINE":
      return r[0];
    case "MOBILE":
      return r[1];
    case "TOLL_FREE":
      return r[2];
    case "PREMIUM_RATE":
      return r[3];
    case "PERSONAL_NUMBER":
      return r[4];
    case "VOICEMAIL":
      return r[5];
    case "UAN":
      return r[6];
    case "PAGER":
      return r[7];
    case "VOIP":
      return r[8];
    case "SHARED_COST":
      return r[9];
  }
}
function Qi(r) {
  if (!r)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!na(r) || !na(r.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(na(r) ? "an object of shape: { " + Object.keys(r).join(", ") + " }" : "a " + Ji(r) + ": " + r, "."));
}
var na = function(e) {
  return Ae(e) === "object";
}, Ji = function(e) {
  return Ae(e);
};
function Ge(r, e) {
  if (e = new _(e), e.hasCountry(r))
    return e.country(r).countryCallingCode();
  throw new Error("Unknown country: ".concat(r));
}
function qi(r, e) {
  return e.countries[r] !== void 0;
}
function $t(r) {
  var e = r.version;
  typeof e == "number" ? (this.v1 = e === 1, this.v2 = e === 2, this.v3 = e === 3, this.v4 = e === 4) : e ? lr(e, Gi) === -1 ? this.v2 = !0 : lr(e, Hi) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
var Wi = ";ext=", V = function(e) {
  return "([".concat(C, "]{1,").concat(e, "})");
};
function _t(r) {
  var e = "20", a = "15", t = "9", o = "6", i = "[  \\t,]*", n = "[:\\.．]?[  \\t,-]*", d = "#?", l = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", s = "(?:[xｘ#＃~～]|int|ｉｎｔ)", c = "[- ]+", p = "[  \\t]*", m = "(?:,{2}|;)", u = Wi + V(e), f = i + l + n + V(e) + d, h = i + s + n + V(t) + d, y = c + V(o) + "#", b = p + m + n + V(a) + d, g = p + "(?:,)+" + n + V(t) + d;
  return u + "|" + f + "|" + h + "|" + y + "|" + b + "|" + g;
}
var Xi = "[" + C + "]{" + Da + "}", Zi = "[" + De + "]{0,1}(?:[" + I + "]*[" + C + "]){3,}[" + I + C + "]*", en = new RegExp("^[" + De + "]{0,1}(?:[" + I + "]*[" + C + "]){1,2}$", "i"), an = Zi + // Phone number extensions
"(?:" + _t() + ")?", rn = new RegExp(
  // Either a short two-digit-only phone number
  "^" + Xi + "$|^" + an + "$",
  "i"
);
function tn(r) {
  return r.length >= Da && rn.test(r);
}
function on(r) {
  return en.test(r);
}
var pr = new RegExp("(?:" + _t() + ")$", "i");
function nn(r) {
  var e = r.search(pr);
  if (e < 0)
    return {};
  for (var a = r.slice(0, e), t = r.match(pr), o = 1; o < t.length; ) {
    if (t[o])
      return {
        number: a,
        ext: t[o]
      };
    o++;
  }
}
function dn(r, e) {
  var a = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (a)
    return (a = a.call(r)).next.bind(a);
  if (Array.isArray(r) || (a = ln(r)) || e && r && typeof r.length == "number") {
    a && (r = a);
    var t = 0;
    return function() {
      return t >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[t++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ln(r, e) {
  if (r) {
    if (typeof r == "string")
      return hr(r, e);
    var a = Object.prototype.toString.call(r).slice(8, -1);
    if (a === "Object" && r.constructor && (a = r.constructor.name), a === "Map" || a === "Set")
      return Array.from(r);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return hr(r, e);
  }
}
function hr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var a = 0, t = new Array(e); a < e; a++)
    t[a] = r[a];
  return t;
}
var sn = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "０": "0",
  // Fullwidth digit 0
  "１": "1",
  // Fullwidth digit 1
  "２": "2",
  // Fullwidth digit 2
  "３": "3",
  // Fullwidth digit 3
  "４": "4",
  // Fullwidth digit 4
  "５": "5",
  // Fullwidth digit 5
  "６": "6",
  // Fullwidth digit 6
  "７": "7",
  // Fullwidth digit 7
  "８": "8",
  // Fullwidth digit 8
  "９": "9",
  // Fullwidth digit 9
  "٠": "0",
  // Arabic-indic digit 0
  "١": "1",
  // Arabic-indic digit 1
  "٢": "2",
  // Arabic-indic digit 2
  "٣": "3",
  // Arabic-indic digit 3
  "٤": "4",
  // Arabic-indic digit 4
  "٥": "5",
  // Arabic-indic digit 5
  "٦": "6",
  // Arabic-indic digit 6
  "٧": "7",
  // Arabic-indic digit 7
  "٨": "8",
  // Arabic-indic digit 8
  "٩": "9",
  // Arabic-indic digit 9
  "۰": "0",
  // Eastern-Arabic digit 0
  "۱": "1",
  // Eastern-Arabic digit 1
  "۲": "2",
  // Eastern-Arabic digit 2
  "۳": "3",
  // Eastern-Arabic digit 3
  "۴": "4",
  // Eastern-Arabic digit 4
  "۵": "5",
  // Eastern-Arabic digit 5
  "۶": "6",
  // Eastern-Arabic digit 6
  "۷": "7",
  // Eastern-Arabic digit 7
  "۸": "8",
  // Eastern-Arabic digit 8
  "۹": "9"
  // Eastern-Arabic digit 9
};
function Ct(r) {
  return sn[r];
}
function Ie(r) {
  for (var e = "", a = dn(r.split("")), t; !(t = a()).done; ) {
    var o = t.value, i = Ct(o);
    i && (e += i);
  }
  return e;
}
function cn(r, e) {
  var a = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (a)
    return (a = a.call(r)).next.bind(a);
  if (Array.isArray(r) || (a = mn(r)) || e && r && typeof r.length == "number") {
    a && (r = a);
    var t = 0;
    return function() {
      return t >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[t++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mn(r, e) {
  if (r) {
    if (typeof r == "string")
      return gr(r, e);
    var a = Object.prototype.toString.call(r).slice(8, -1);
    if (a === "Object" && r.constructor && (a = r.constructor.name), a === "Map" || a === "Set")
      return Array.from(r);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return gr(r, e);
  }
}
function gr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var a = 0, t = new Array(e); a < e; a++)
    t[a] = r[a];
  return t;
}
function fr(r) {
  for (var e = "", a = cn(r.split("")), t; !(t = a()).done; ) {
    var o = t.value;
    e += un(o, e) || "";
  }
  return e;
}
function un(r, e) {
  return r === "+" ? e ? void 0 : "+" : Ct(r);
}
function pn(r, e) {
  var a = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (a)
    return (a = a.call(r)).next.bind(a);
  if (Array.isArray(r) || (a = hn(r)) || e && r && typeof r.length == "number") {
    a && (r = a);
    var t = 0;
    return function() {
      return t >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[t++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hn(r, e) {
  if (r) {
    if (typeof r == "string")
      return br(r, e);
    var a = Object.prototype.toString.call(r).slice(8, -1);
    if (a === "Object" && r.constructor && (a = r.constructor.name), a === "Map" || a === "Set")
      return Array.from(r);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return br(r, e);
  }
}
function br(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var a = 0, t = new Array(e); a < e; a++)
    t[a] = r[a];
  return t;
}
function gn(r, e) {
  for (var a = r.slice(), t = pn(e), o; !(o = t()).done; ) {
    var i = o.value;
    r.indexOf(i) < 0 && a.push(i);
  }
  return a.sort(function(n, d) {
    return n - d;
  });
}
function He(r, e) {
  return Et(r, void 0, e);
}
function Et(r, e, a) {
  var t = a.type(e), o = t && t.possibleLengths() || a.possibleLengths();
  if (!o)
    return "IS_POSSIBLE";
  if (e === "FIXED_LINE_OR_MOBILE") {
    if (!a.type("FIXED_LINE"))
      return Et(r, "MOBILE", a);
    var i = a.type("MOBILE");
    i && (o = gn(o, i.possibleLengths()));
  } else if (e && !t)
    return "INVALID_LENGTH";
  var n = r.length, d = o[0];
  return d === n ? "IS_POSSIBLE" : d > n ? "TOO_SHORT" : o[o.length - 1] < n ? "TOO_LONG" : o.indexOf(n, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function fn(r, e, a) {
  if (e === void 0 && (e = {}), a = new _(a), e.v2) {
    if (!r.countryCallingCode)
      throw new Error("Invalid phone number object passed");
    a.selectNumberingPlan(r.countryCallingCode);
  } else {
    if (!r.phone)
      return !1;
    if (r.country) {
      if (!a.hasCountry(r.country))
        throw new Error("Unknown country: ".concat(r.country));
      a.country(r.country);
    } else {
      if (!r.countryCallingCode)
        throw new Error("Invalid phone number object passed");
      a.selectNumberingPlan(r.countryCallingCode);
    }
  }
  if (a.possibleLengths())
    return Nt(r.phone || r.nationalNumber, a);
  if (r.countryCallingCode && a.isNonGeographicCallingCode(r.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function Nt(r, e) {
  switch (He(r, e)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1;
  }
}
function T(r, e) {
  return r = r || "", new RegExp("^(?:" + e + ")$").test(r);
}
function bn(r, e) {
  var a = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (a)
    return (a = a.call(r)).next.bind(a);
  if (Array.isArray(r) || (a = zn(r)) || e && r && typeof r.length == "number") {
    a && (r = a);
    var t = 0;
    return function() {
      return t >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[t++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zn(r, e) {
  if (r) {
    if (typeof r == "string")
      return zr(r, e);
    var a = Object.prototype.toString.call(r).slice(8, -1);
    if (a === "Object" && r.constructor && (a = r.constructor.name), a === "Map" || a === "Set")
      return Array.from(r);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return zr(r, e);
  }
}
function zr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var a = 0, t = new Array(e); a < e; a++)
    t[a] = r[a];
  return t;
}
var vn = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function La(r, e, a) {
  if (e = e || {}, !!r.country) {
    a = new _(a), a.selectNumberingPlan(r.country, r.countryCallingCode);
    var t = e.v2 ? r.nationalNumber : r.phone;
    if (T(t, a.nationalNumberPattern())) {
      if (da(t, "FIXED_LINE", a))
        return a.type("MOBILE") && a.type("MOBILE").pattern() === "" || !a.type("MOBILE") || da(t, "MOBILE", a) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var o = bn(vn), i; !(i = o()).done; ) {
        var n = i.value;
        if (da(t, n, a))
          return n;
      }
    }
  }
}
function da(r, e, a) {
  return e = a.type(e), !e || !e.pattern() || e.possibleLengths() && e.possibleLengths().indexOf(r.length) < 0 ? !1 : T(r, e.pattern());
}
function yn(r, e, a) {
  if (e = e || {}, a = new _(a), a.selectNumberingPlan(r.country, r.countryCallingCode), a.hasTypes())
    return La(r, e, a.metadata) !== void 0;
  var t = e.v2 ? r.nationalNumber : r.phone;
  return T(t, a.nationalNumberPattern());
}
function kn(r, e, a) {
  var t = new _(a), o = t.getCountryCodesForCallingCode(r);
  return o ? o.filter(function(i) {
    return xn(e, i, a);
  }) : [];
}
function xn(r, e, a) {
  var t = new _(a);
  return t.selectNumberingPlan(e), t.numberingPlan.possibleLengths().indexOf(r.length) >= 0;
}
function At(r) {
  return r.replace(new RegExp("[".concat(I, "]+"), "g"), " ").trim();
}
var It = /(\$\d)/;
function St(r, e, a) {
  var t = a.useInternationalFormat, o = a.withNationalPrefix;
  a.carrierCode, a.metadata;
  var i = r.replace(new RegExp(e.pattern()), t ? e.internationalFormat() : (
    // This library doesn't use `domestic_carrier_code_formatting_rule`,
    // because that one is only used when formatting phone numbers
    // for dialing from a mobile phone, and this is not a dialing library.
    // carrierCode && format.domesticCarrierCodeFormattingRule()
    // 	// First, replace the $CC in the formatting rule with the desired carrier code.
    // 	// Then, replace the $FG in the formatting rule with the first group
    // 	// and the carrier code combined in the appropriate way.
    // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
    // 	: (
    // 		withNationalPrefix && format.nationalPrefixFormattingRule()
    // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
    // 			: format.format()
    // 	)
    o && e.nationalPrefixFormattingRule() ? e.format().replace(It, e.nationalPrefixFormattingRule()) : e.format()
  ));
  return t ? At(i) : i;
}
var wn = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function $n(r, e, a) {
  var t = new _(a);
  if (t.selectNumberingPlan(r, e), t.defaultIDDPrefix())
    return t.defaultIDDPrefix();
  if (wn.test(t.IDDPrefix()))
    return t.IDDPrefix();
}
function _n(r) {
  var e = r.number, a = r.ext;
  if (!e)
    return "";
  if (e[0] !== "+")
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(e).concat(a ? ";ext=" + a : "");
}
function Cn(r, e) {
  var a = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (a)
    return (a = a.call(r)).next.bind(a);
  if (Array.isArray(r) || (a = En(r)) || e && r && typeof r.length == "number") {
    a && (r = a);
    var t = 0;
    return function() {
      return t >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[t++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function En(r, e) {
  if (r) {
    if (typeof r == "string")
      return vr(r, e);
    var a = Object.prototype.toString.call(r).slice(8, -1);
    if (a === "Object" && r.constructor && (a = r.constructor.name), a === "Map" || a === "Set")
      return Array.from(r);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return vr(r, e);
  }
}
function vr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var a = 0, t = new Array(e); a < e; a++)
    t[a] = r[a];
  return t;
}
function yr(r, e) {
  var a = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(r);
    e && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function kr(r) {
  for (var e = 1; e < arguments.length; e++) {
    var a = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yr(Object(a), !0).forEach(function(t) {
      Nn(r, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : yr(Object(a)).forEach(function(t) {
      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return r;
}
function Nn(r, e, a) {
  return e in r ? Object.defineProperty(r, e, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = a, r;
}
var xr = {
  formatExtension: function(e, a, t) {
    return "".concat(e).concat(t.ext()).concat(a);
  }
};
function An(r, e, a, t) {
  if (a ? a = kr(kr({}, xr), a) : a = xr, t = new _(t), r.country && r.country !== "001") {
    if (!t.hasCountry(r.country))
      throw new Error("Unknown country: ".concat(r.country));
    t.country(r.country);
  } else if (r.countryCallingCode)
    t.selectNumberingPlan(r.countryCallingCode);
  else
    return r.phone || "";
  var o = t.countryCallingCode(), i = a.v2 ? r.nationalNumber : r.phone, n;
  switch (e) {
    case "NATIONAL":
      return i ? (n = Se(i, r.carrierCode, "NATIONAL", t, a), la(n, r.ext, t, a.formatExtension)) : "";
    case "INTERNATIONAL":
      return i ? (n = Se(i, null, "INTERNATIONAL", t, a), n = "+".concat(o, " ").concat(n), la(n, r.ext, t, a.formatExtension)) : "+".concat(o);
    case "E.164":
      return "+".concat(o).concat(i);
    case "RFC3966":
      return _n({
        number: "+".concat(o).concat(i),
        ext: r.ext
      });
    case "IDD":
      if (!a.fromCountry)
        return;
      var d = Sn(i, r.carrierCode, o, a.fromCountry, t);
      return la(d, r.ext, t, a.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(e, '"'));
  }
}
function Se(r, e, a, t, o) {
  var i = In(t.formats(), r);
  return i ? St(r, i, {
    useInternationalFormat: a === "INTERNATIONAL",
    withNationalPrefix: !(i.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && o && o.nationalPrefix === !1),
    carrierCode: e,
    metadata: t
  }) : r;
}
function In(r, e) {
  for (var a = Cn(r), t; !(t = a()).done; ) {
    var o = t.value;
    if (o.leadingDigitsPatterns().length > 0) {
      var i = o.leadingDigitsPatterns()[o.leadingDigitsPatterns().length - 1];
      if (e.search(i) !== 0)
        continue;
    }
    if (T(e, o.pattern()))
      return o;
  }
}
function la(r, e, a, t) {
  return e ? t(r, e, a) : r;
}
function Sn(r, e, a, t, o) {
  var i = Ge(t, o.metadata);
  if (i === a) {
    var n = Se(r, e, "NATIONAL", o);
    return a === "1" ? a + " " + n : n;
  }
  var d = $n(t, void 0, o.metadata);
  if (d)
    return "".concat(d, " ").concat(a, " ").concat(Se(r, null, "INTERNATIONAL", o));
}
function wr(r, e) {
  var a = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(r);
    e && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function $r(r) {
  for (var e = 1; e < arguments.length; e++) {
    var a = arguments[e] != null ? arguments[e] : {};
    e % 2 ? wr(Object(a), !0).forEach(function(t) {
      Pn(r, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : wr(Object(a)).forEach(function(t) {
      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return r;
}
function Pn(r, e, a) {
  return e in r ? Object.defineProperty(r, e, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = a, r;
}
function Bn(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _r(r, e) {
  for (var a = 0; a < e.length; a++) {
    var t = e[a];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, t.key, t);
  }
}
function Fn(r, e, a) {
  return e && _r(r.prototype, e), a && _r(r, a), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
var Ua = /* @__PURE__ */ function() {
  function r(e, a, t) {
    if (Bn(this, r), !e)
      throw new TypeError("`country` or `countryCallingCode` not passed");
    if (!a)
      throw new TypeError("`nationalNumber` not passed");
    if (!t)
      throw new TypeError("`metadata` not passed");
    var o = Tn(e, t), i = o.country, n = o.countryCallingCode;
    this.country = i, this.countryCallingCode = n, this.nationalNumber = a, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.metadata = t;
  }
  return Fn(r, [{
    key: "setExt",
    value: function(a) {
      this.ext = a;
    }
  }, {
    key: "getPossibleCountries",
    value: function() {
      return this.country ? [this.country] : kn(this.countryCallingCode, this.nationalNumber, this.metadata);
    }
  }, {
    key: "isPossible",
    value: function() {
      return fn(this, {
        v2: !0
      }, this.metadata);
    }
  }, {
    key: "isValid",
    value: function() {
      return yn(this, {
        v2: !0
      }, this.metadata);
    }
  }, {
    key: "isNonGeographic",
    value: function() {
      var a = new _(this.metadata);
      return a.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function(a) {
      return this.number === a.number && this.ext === a.ext;
    }
    // This function was originally meant to be an equivalent for `validatePhoneNumberLength()`,
    // but later it was found out that it doesn't include the possible `TOO_SHORT` result
    // returned from `parsePhoneNumberWithError()` in the original `validatePhoneNumberLength()`,
    // so eventually I simply commented out this method from the `PhoneNumber` class
    // and just left the `validatePhoneNumberLength()` function, even though that one would require
    // and additional step to also validate the actual country / calling code of the phone number.
    // validateLength() {
    // 	const metadata = new Metadata(this.metadata)
    // 	metadata.selectNumberingPlan(this.countryCallingCode)
    // 	const result = checkNumberLength(this.nationalNumber, metadata)
    // 	if (result !== 'IS_POSSIBLE') {
    // 		return result
    // 	}
    // }
  }, {
    key: "getType",
    value: function() {
      return La(this, {
        v2: !0
      }, this.metadata);
    }
  }, {
    key: "format",
    value: function(a, t) {
      return An(this, a, t ? $r($r({}, t), {}, {
        v2: !0
      }) : {
        v2: !0
      }, this.metadata);
    }
  }, {
    key: "formatNational",
    value: function(a) {
      return this.format("NATIONAL", a);
    }
  }, {
    key: "formatInternational",
    value: function(a) {
      return this.format("INTERNATIONAL", a);
    }
  }, {
    key: "getURI",
    value: function(a) {
      return this.format("RFC3966", a);
    }
  }]), r;
}(), Rn = function(e) {
  return /^[A-Z]{2}$/.test(e);
};
function Tn(r, e) {
  var a, t, o = new _(e);
  return Rn(r) ? (a = r, o.selectNumberingPlan(a), t = o.countryCallingCode()) : t = r, {
    country: a,
    countryCallingCode: t
  };
}
var Mn = new RegExp("([" + C + "])");
function Pt(r, e, a, t) {
  if (e) {
    var o = new _(t);
    o.selectNumberingPlan(e, a);
    var i = new RegExp(o.IDDPrefix());
    if (r.search(i) === 0) {
      r = r.slice(r.match(i)[0].length);
      var n = r.match(Mn);
      if (!(n && n[1] != null && n[1].length > 0 && n[1] === "0"))
        return r;
    }
  }
}
function va(r, e) {
  if (r && e.numberingPlan.nationalPrefixForParsing()) {
    var a = new RegExp("^(?:" + e.numberingPlan.nationalPrefixForParsing() + ")"), t = a.exec(r);
    if (t) {
      var o, i, n = t.length - 1, d = n > 0 && t[n];
      if (e.nationalPrefixTransformRule() && d)
        o = r.replace(a, e.nationalPrefixTransformRule()), n > 1 && (i = t[1]);
      else {
        var l = t[0];
        o = r.slice(l.length), d && (i = t[1]);
      }
      var s;
      if (d) {
        var c = r.indexOf(t[1]), p = r.slice(0, c);
        p === e.numberingPlan.nationalPrefix() && (s = e.numberingPlan.nationalPrefix());
      } else
        s = t[0];
      return {
        nationalNumber: o,
        nationalPrefix: s,
        carrierCode: i
      };
    }
  }
  return {
    nationalNumber: r
  };
}
function ya(r, e) {
  var a = va(r, e), t = a.carrierCode, o = a.nationalNumber;
  if (o !== r) {
    if (!On(r, o, e))
      return {
        nationalNumber: r
      };
    if (e.possibleLengths() && !Dn(o, e))
      return {
        nationalNumber: r
      };
  }
  return {
    nationalNumber: o,
    carrierCode: t
  };
}
function On(r, e, a) {
  return !(T(r, a.nationalNumberPattern()) && !T(e, a.nationalNumberPattern()));
}
function Dn(r, e) {
  switch (He(r, e)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function Bt(r, e, a, t) {
  var o = e ? Ge(e, t) : a;
  if (r.indexOf(o) === 0) {
    t = new _(t), t.selectNumberingPlan(e, a);
    var i = r.slice(o.length), n = ya(i, t), d = n.nationalNumber, l = ya(r, t), s = l.nationalNumber;
    if (!T(s, t.nationalNumberPattern()) && T(d, t.nationalNumberPattern()) || He(s, t) === "TOO_LONG")
      return {
        countryCallingCode: o,
        number: i
      };
  }
  return {
    number: r
  };
}
function Ft(r, e, a, t) {
  if (!r)
    return {};
  var o;
  if (r[0] !== "+") {
    var i = Pt(r, e, a, t);
    if (i && i !== r)
      o = !0, r = "+" + i;
    else {
      if (e || a) {
        var n = Bt(r, e, a, t), d = n.countryCallingCode, l = n.number;
        if (d)
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode: d,
            number: l
          };
      }
      return {
        // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
        // countryCallingCodeSource: 'UNSPECIFIED',
        number: r
      };
    }
  }
  if (r[1] === "0")
    return {};
  t = new _(t);
  for (var s = 2; s - 1 <= Ri && s <= r.length; ) {
    var c = r.slice(1, s);
    if (t.hasCallingCode(c))
      return t.selectNumberingPlan(c), {
        countryCallingCodeSource: o ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: c,
        number: r.slice(s)
      };
    s++;
  }
  return {};
}
function Ln(r, e) {
  var a = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (a)
    return (a = a.call(r)).next.bind(a);
  if (Array.isArray(r) || (a = Un(r)) || e && r && typeof r.length == "number") {
    a && (r = a);
    var t = 0;
    return function() {
      return t >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[t++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Un(r, e) {
  if (r) {
    if (typeof r == "string")
      return Cr(r, e);
    var a = Object.prototype.toString.call(r).slice(8, -1);
    if (a === "Object" && r.constructor && (a = r.constructor.name), a === "Map" || a === "Set")
      return Array.from(r);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Cr(r, e);
  }
}
function Cr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var a = 0, t = new Array(e); a < e; a++)
    t[a] = r[a];
  return t;
}
function Gn(r, e, a) {
  a = new _(a);
  for (var t = Ln(r), o; !(o = t()).done; ) {
    var i = o.value;
    if (a.country(i), a.leadingDigits()) {
      if (e && e.search(a.leadingDigits()) === 0)
        return i;
    } else if (La({
      phone: e,
      country: i
    }, void 0, a.metadata))
      return i;
  }
}
var Hn = !1;
function Rt(r, e, a) {
  if (Hn && a.isNonGeographicCallingCode(r))
    return "001";
  var t = a.getCountryCodesForCallingCode(r);
  if (t)
    return t.length === 1 ? t[0] : Gn(t, e, a.metadata);
}
var Tt = "+", Vn = "[\\-\\.\\(\\)]?", Er = "([" + C + "]|" + Vn + ")", Yn = "^\\" + Tt + Er + "*[" + C + "]" + Er + "*$", jn = new RegExp(Yn, "g"), ka = C, Kn = "[" + ka + "]+((\\-)*[" + ka + "])*", Qn = "a-zA-Z", Jn = "[" + Qn + "]+((\\-)*[" + ka + "])*", qn = "^(" + Kn + "\\.)*" + Jn + "\\.?$", Wn = new RegExp(qn, "g"), Nr = "tel:", xa = ";phone-context=", Xn = ";isub=";
function Zn(r) {
  var e = r.indexOf(xa);
  if (e < 0)
    return null;
  var a = e + xa.length;
  if (a >= r.length)
    return "";
  var t = r.indexOf(";", a);
  return t >= 0 ? r.substring(a, t) : r.substring(a);
}
function ed(r) {
  return r === null ? !0 : r.length === 0 ? !1 : jn.test(r) || Wn.test(r);
}
function ad(r, e) {
  var a = e.extractFormattedPhoneNumber, t = Zn(r);
  if (!ed(t))
    throw new R("NOT_A_NUMBER");
  var o;
  if (t === null)
    o = a(r) || "";
  else {
    o = "", t.charAt(0) === Tt && (o += t);
    var i = r.indexOf(Nr), n;
    i >= 0 ? n = i + Nr.length : n = 0;
    var d = r.indexOf(xa);
    o += r.substring(n, d);
  }
  var l = o.indexOf(Xn);
  if (l > 0 && (o = o.substring(0, l)), o !== "")
    return o;
}
var rd = 250, td = new RegExp("[" + De + C + "]"), od = new RegExp("[^" + C + "#]+$");
function id(r, e, a) {
  if (e = e || {}, a = new _(a), e.defaultCountry && !a.hasCountry(e.defaultCountry))
    throw e.v2 ? new R("INVALID_COUNTRY") : new Error("Unknown country: ".concat(e.defaultCountry));
  var t = dd(r, e.v2, e.extract), o = t.number, i = t.ext, n = t.error;
  if (!o) {
    if (e.v2)
      throw n === "TOO_SHORT" ? new R("TOO_SHORT") : new R("NOT_A_NUMBER");
    return {};
  }
  var d = sd(o, e.defaultCountry, e.defaultCallingCode, a), l = d.country, s = d.nationalNumber, c = d.countryCallingCode, p = d.countryCallingCodeSource, m = d.carrierCode;
  if (!a.hasSelectedNumberingPlan()) {
    if (e.v2)
      throw new R("INVALID_COUNTRY");
    return {};
  }
  if (!s || s.length < Da) {
    if (e.v2)
      throw new R("TOO_SHORT");
    return {};
  }
  if (s.length > Fi) {
    if (e.v2)
      throw new R("TOO_LONG");
    return {};
  }
  if (e.v2) {
    var u = new Ua(c, s, a.metadata);
    return l && (u.country = l), m && (u.carrierCode = m), i && (u.ext = i), u.__countryCallingCodeSource = p, u;
  }
  var f = (e.extended ? a.hasSelectedNumberingPlan() : l) ? T(s, a.nationalNumberPattern()) : !1;
  return e.extended ? {
    country: l,
    countryCallingCode: c,
    carrierCode: m,
    valid: f,
    possible: f ? !0 : !!(e.extended === !0 && a.possibleLengths() && Nt(s, a)),
    phone: s,
    ext: i
  } : f ? ld(l, s, i) : {};
}
function nd(r, e, a) {
  if (r) {
    if (r.length > rd) {
      if (a)
        throw new R("TOO_LONG");
      return;
    }
    if (e === !1)
      return r;
    var t = r.search(td);
    if (!(t < 0))
      return r.slice(t).replace(od, "");
  }
}
function dd(r, e, a) {
  var t = ad(r, {
    extractFormattedPhoneNumber: function(n) {
      return nd(n, a, e);
    }
  });
  if (!t)
    return {};
  if (!tn(t))
    return on(t) ? {
      error: "TOO_SHORT"
    } : {};
  var o = nn(t);
  return o.ext ? o : {
    number: t
  };
}
function ld(r, e, a) {
  var t = {
    country: r,
    phone: e
  };
  return a && (t.ext = a), t;
}
function sd(r, e, a, t) {
  var o = Ft(fr(r), e, a, t.metadata), i = o.countryCallingCodeSource, n = o.countryCallingCode, d = o.number, l;
  if (n)
    t.selectNumberingPlan(n);
  else if (d && (e || a))
    t.selectNumberingPlan(e, a), e && (l = e), n = a || Ge(e, t.metadata);
  else
    return {};
  if (!d)
    return {
      countryCallingCodeSource: i,
      countryCallingCode: n
    };
  var s = ya(fr(d), t), c = s.nationalNumber, p = s.carrierCode, m = Rt(n, c, t);
  return m && (l = m, m === "001" || t.country(l)), {
    country: l,
    countryCallingCode: n,
    countryCallingCodeSource: i,
    nationalNumber: c,
    carrierCode: p
  };
}
function Ar(r, e) {
  var a = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(r);
    e && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function Ir(r) {
  for (var e = 1; e < arguments.length; e++) {
    var a = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ar(Object(a), !0).forEach(function(t) {
      cd(r, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : Ar(Object(a)).forEach(function(t) {
      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return r;
}
function cd(r, e, a) {
  return e in r ? Object.defineProperty(r, e, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = a, r;
}
function md(r, e, a) {
  return id(r, Ir(Ir({}, e), {}, {
    v2: !0
  }), a);
}
function wa(r) {
  "@babel/helpers - typeof";
  return wa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, wa(r);
}
function Sr(r, e) {
  var a = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(r);
    e && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function ud(r) {
  for (var e = 1; e < arguments.length; e++) {
    var a = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Sr(Object(a), !0).forEach(function(t) {
      pd(r, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : Sr(Object(a)).forEach(function(t) {
      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return r;
}
function pd(r, e, a) {
  return e in r ? Object.defineProperty(r, e, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = a, r;
}
function hd(r, e) {
  return zd(r) || bd(r, e) || fd(r, e) || gd();
}
function gd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fd(r, e) {
  if (r) {
    if (typeof r == "string")
      return Pr(r, e);
    var a = Object.prototype.toString.call(r).slice(8, -1);
    if (a === "Object" && r.constructor && (a = r.constructor.name), a === "Map" || a === "Set")
      return Array.from(r);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Pr(r, e);
  }
}
function Pr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var a = 0, t = new Array(e); a < e; a++)
    t[a] = r[a];
  return t;
}
function bd(r, e) {
  var a = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (a != null) {
    var t = [], o = !0, i = !1, n, d;
    try {
      for (a = a.call(r); !(o = (n = a.next()).done) && (t.push(n.value), !(e && t.length === e)); o = !0)
        ;
    } catch (l) {
      i = !0, d = l;
    } finally {
      try {
        !o && a.return != null && a.return();
      } finally {
        if (i)
          throw d;
      }
    }
    return t;
  }
}
function zd(r) {
  if (Array.isArray(r))
    return r;
}
function vd(r) {
  var e = Array.prototype.slice.call(r), a = hd(e, 4), t = a[0], o = a[1], i = a[2], n = a[3], d, l, s;
  if (typeof t == "string")
    d = t;
  else
    throw new TypeError("A text for parsing must be a string.");
  if (!o || typeof o == "string")
    n ? (l = i, s = n) : (l = void 0, s = i), o && (l = ud({
      defaultCountry: o
    }, l));
  else if (yd(o))
    i ? (l = o, s = i) : s = o;
  else
    throw new Error("Invalid second argument: ".concat(o));
  return {
    text: d,
    options: l,
    metadata: s
  };
}
var yd = function(e) {
  return wa(e) === "object";
};
function Br(r, e) {
  var a = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(r);
    e && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function Fr(r) {
  for (var e = 1; e < arguments.length; e++) {
    var a = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Br(Object(a), !0).forEach(function(t) {
      kd(r, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : Br(Object(a)).forEach(function(t) {
      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return r;
}
function kd(r, e, a) {
  return e in r ? Object.defineProperty(r, e, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = a, r;
}
function xd(r, e, a) {
  e && e.defaultCountry && !qi(e.defaultCountry, a) && (e = Fr(Fr({}, e), {}, {
    defaultCountry: void 0
  }));
  try {
    return md(r, e, a);
  } catch (t) {
    if (!(t instanceof R))
      throw t;
  }
}
function wd() {
  var r = vd(arguments), e = r.text, a = r.options, t = r.metadata;
  return xd(e, a, t);
}
function $d(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Rr(r, e) {
  for (var a = 0; a < e.length; a++) {
    var t = e[a];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, t.key, t);
  }
}
function _d(r, e, a) {
  return e && Rr(r.prototype, e), a && Rr(r, a), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
var Cd = /* @__PURE__ */ function() {
  function r(e) {
    var a = e.onCountryChange, t = e.onCallingCodeChange;
    $d(this, r), this.onCountryChange = a, this.onCallingCodeChange = t;
  }
  return _d(r, [{
    key: "reset",
    value: function(a) {
      var t = a.country, o = a.callingCode;
      this.international = !1, this.IDDPrefix = void 0, this.missingPlus = void 0, this.callingCode = void 0, this.digits = "", this.resetNationalSignificantNumber(), this.initCountryAndCallingCode(t, o);
    }
  }, {
    key: "resetNationalSignificantNumber",
    value: function() {
      this.nationalSignificantNumber = this.getNationalDigits(), this.nationalSignificantNumberMatchesInput = !0, this.nationalPrefix = void 0, this.carrierCode = void 0, this.complexPrefixBeforeNationalSignificantNumber = void 0;
    }
  }, {
    key: "update",
    value: function(a) {
      for (var t = 0, o = Object.keys(a); t < o.length; t++) {
        var i = o[t];
        this[i] = a[i];
      }
    }
  }, {
    key: "initCountryAndCallingCode",
    value: function(a, t) {
      this.setCountry(a), this.setCallingCode(t);
    }
  }, {
    key: "setCountry",
    value: function(a) {
      this.country = a, this.onCountryChange(a);
    }
  }, {
    key: "setCallingCode",
    value: function(a) {
      this.callingCode = a, this.onCallingCodeChange(a, this.country);
    }
  }, {
    key: "startInternationalNumber",
    value: function(a, t) {
      this.international = !0, this.initCountryAndCallingCode(a, t);
    }
  }, {
    key: "appendDigits",
    value: function(a) {
      this.digits += a;
    }
  }, {
    key: "appendNationalSignificantNumberDigits",
    value: function(a) {
      this.nationalSignificantNumber += a;
    }
    /**
     * Returns the part of `this.digits` that corresponds to the national number.
     * Basically, all digits that have been input by the user, except for the
     * international prefix and the country calling code part
     * (if the number is an international one).
     * @return {string}
     */
  }, {
    key: "getNationalDigits",
    value: function() {
      return this.international ? this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0)) : this.digits;
    }
  }, {
    key: "getDigitsWithoutInternationalPrefix",
    value: function() {
      return this.international && this.IDDPrefix ? this.digits.slice(this.IDDPrefix.length) : this.digits;
    }
  }]), r;
}();
function Ed(r, e) {
  var a = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (a)
    return (a = a.call(r)).next.bind(a);
  if (Array.isArray(r) || (a = Nd(r)) || e && r && typeof r.length == "number") {
    a && (r = a);
    var t = 0;
    return function() {
      return t >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[t++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nd(r, e) {
  if (r) {
    if (typeof r == "string")
      return Tr(r, e);
    var a = Object.prototype.toString.call(r).slice(8, -1);
    if (a === "Object" && r.constructor && (a = r.constructor.name), a === "Map" || a === "Set")
      return Array.from(r);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Tr(r, e);
  }
}
function Tr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var a = 0, t = new Array(e); a < e; a++)
    t[a] = r[a];
  return t;
}
var A = "x", sa = new RegExp(A);
function we(r, e) {
  if (e < 1)
    return "";
  for (var a = ""; e > 1; )
    e & 1 && (a += r), e >>= 1, r += r;
  return a + r;
}
function Mr(r, e) {
  return r[e] === ")" && e++, Ad(r.slice(0, e));
}
function Ad(r) {
  for (var e = [], a = 0; a < r.length; )
    r[a] === "(" ? e.push(a) : r[a] === ")" && e.pop(), a++;
  var t = 0, o = "";
  e.push(r.length);
  for (var i = 0, n = e; i < n.length; i++) {
    var d = n[i];
    o += r.slice(t, d), t = d + 1;
  }
  return o;
}
function Id(r, e, a) {
  for (var t = Ed(a.split("")), o; !(o = t()).done; ) {
    var i = o.value;
    if (r.slice(e + 1).search(sa) < 0)
      return;
    e = r.search(sa), r = r.replace(sa, i);
  }
  return [r, e];
}
function Sd(r, e, a) {
  var t = a.metadata, o = a.shouldTryNationalPrefixFormattingRule, i = a.getSeparatorAfterNationalPrefix, n = new RegExp("^(?:".concat(e.pattern(), ")$"));
  if (n.test(r.nationalSignificantNumber))
    return Bd(r, e, {
      metadata: t,
      shouldTryNationalPrefixFormattingRule: o,
      getSeparatorAfterNationalPrefix: i
    });
}
function Pd(r, e) {
  return He(r, e) === "IS_POSSIBLE";
}
function Bd(r, e, a) {
  var t = a.metadata, o = a.shouldTryNationalPrefixFormattingRule, i = a.getSeparatorAfterNationalPrefix;
  if (r.nationalSignificantNumber, r.international, r.nationalPrefix, r.carrierCode, o(e)) {
    var n = Or(r, e, {
      useNationalPrefixFormattingRule: !0,
      getSeparatorAfterNationalPrefix: i,
      metadata: t
    });
    if (n)
      return n;
  }
  return Or(r, e, {
    useNationalPrefixFormattingRule: !1,
    getSeparatorAfterNationalPrefix: i,
    metadata: t
  });
}
function Or(r, e, a) {
  var t = a.metadata, o = a.useNationalPrefixFormattingRule, i = a.getSeparatorAfterNationalPrefix, n = St(r.nationalSignificantNumber, e, {
    carrierCode: r.carrierCode,
    useInternationalFormat: r.international,
    withNationalPrefix: o,
    metadata: t
  });
  if (o || (r.nationalPrefix ? n = r.nationalPrefix + i(e) + n : r.complexPrefixBeforeNationalSignificantNumber && (n = r.complexPrefixBeforeNationalSignificantNumber + " " + n)), Fd(n, r))
    return n;
}
function Fd(r, e) {
  return Ie(r) === e.getNationalDigits();
}
function Rd(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Dr(r, e) {
  for (var a = 0; a < e.length; a++) {
    var t = e[a];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, t.key, t);
  }
}
function Td(r, e, a) {
  return e && Dr(r.prototype, e), a && Dr(r, a), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
var Md = /* @__PURE__ */ function() {
  function r() {
    Rd(this, r);
  }
  return Td(r, [{
    key: "parse",
    value: function(a) {
      if (this.context = [{
        or: !0,
        instructions: []
      }], this.parsePattern(a), this.context.length !== 1)
        throw new Error("Non-finalized contexts left when pattern parse ended");
      var t = this.context[0], o = t.branches, i = t.instructions;
      if (o)
        return {
          op: "|",
          args: o.concat([ca(i)])
        };
      if (i.length === 0)
        throw new Error("Pattern is required");
      return i.length === 1 ? i[0] : i;
    }
  }, {
    key: "startContext",
    value: function(a) {
      this.context.push(a);
    }
  }, {
    key: "endContext",
    value: function() {
      this.context.pop();
    }
  }, {
    key: "getContext",
    value: function() {
      return this.context[this.context.length - 1];
    }
  }, {
    key: "parsePattern",
    value: function(a) {
      if (!a)
        throw new Error("Pattern is required");
      var t = a.match(Ld);
      if (!t) {
        if (Dd.test(a))
          throw new Error("Illegal characters found in a pattern: ".concat(a));
        this.getContext().instructions = this.getContext().instructions.concat(a.split(""));
        return;
      }
      var o = t[1], i = a.slice(0, t.index), n = a.slice(t.index + o.length);
      switch (o) {
        case "(?:":
          i && this.parsePattern(i), this.startContext({
            or: !0,
            instructions: [],
            branches: []
          });
          break;
        case ")":
          if (!this.getContext().or)
            throw new Error('")" operator must be preceded by "(?:" operator');
          if (i && this.parsePattern(i), this.getContext().instructions.length === 0)
            throw new Error('No instructions found after "|" operator in an "or" group');
          var d = this.getContext(), l = d.branches;
          l.push(ca(this.getContext().instructions)), this.endContext(), this.getContext().instructions.push({
            op: "|",
            args: l
          });
          break;
        case "|":
          if (!this.getContext().or)
            throw new Error('"|" operator can only be used inside "or" groups');
          if (i && this.parsePattern(i), !this.getContext().branches)
            if (this.context.length === 1)
              this.getContext().branches = [];
            else
              throw new Error('"branches" not found in an "or" group context');
          this.getContext().branches.push(ca(this.getContext().instructions)), this.getContext().instructions = [];
          break;
        case "[":
          i && this.parsePattern(i), this.startContext({
            oneOfSet: !0
          });
          break;
        case "]":
          if (!this.getContext().oneOfSet)
            throw new Error('"]" operator must be preceded by "[" operator');
          this.endContext(), this.getContext().instructions.push({
            op: "[]",
            args: Od(i)
          });
          break;
        default:
          throw new Error("Unknown operator: ".concat(o));
      }
      n && this.parsePattern(n);
    }
  }]), r;
}();
function Od(r) {
  for (var e = [], a = 0; a < r.length; ) {
    if (r[a] === "-") {
      if (a === 0 || a === r.length - 1)
        throw new Error("Couldn't parse a one-of set pattern: ".concat(r));
      for (var t = r[a - 1].charCodeAt(0) + 1, o = r[a + 1].charCodeAt(0) - 1, i = t; i <= o; )
        e.push(String.fromCharCode(i)), i++;
    } else
      e.push(r[a]);
    a++;
  }
  return e;
}
var Dd = /[\(\)\[\]\?\:\|]/, Ld = new RegExp(
  // any of:
  "(\\||\\(\\?\\:|\\)|\\[|\\])"
);
function ca(r) {
  return r.length === 1 ? r[0] : r;
}
function Lr(r, e) {
  var a = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (a)
    return (a = a.call(r)).next.bind(a);
  if (Array.isArray(r) || (a = Ud(r)) || e && r && typeof r.length == "number") {
    a && (r = a);
    var t = 0;
    return function() {
      return t >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[t++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ud(r, e) {
  if (r) {
    if (typeof r == "string")
      return Ur(r, e);
    var a = Object.prototype.toString.call(r).slice(8, -1);
    if (a === "Object" && r.constructor && (a = r.constructor.name), a === "Map" || a === "Set")
      return Array.from(r);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Ur(r, e);
  }
}
function Ur(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var a = 0, t = new Array(e); a < e; a++)
    t[a] = r[a];
  return t;
}
function Gd(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Gr(r, e) {
  for (var a = 0; a < e.length; a++) {
    var t = e[a];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, t.key, t);
  }
}
function Hd(r, e, a) {
  return e && Gr(r.prototype, e), a && Gr(r, a), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
var Vd = /* @__PURE__ */ function() {
  function r(e) {
    Gd(this, r), this.matchTree = new Md().parse(e);
  }
  return Hd(r, [{
    key: "match",
    value: function(a) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = t.allowOverflow;
      if (!a)
        throw new Error("String is required");
      var i = $a(a.split(""), this.matchTree, !0);
      if (i && i.match && delete i.matchedChars, !(i && i.overflow && !o))
        return i;
    }
  }]), r;
}();
function $a(r, e, a) {
  if (typeof e == "string") {
    var t = r.join("");
    return e.indexOf(t) === 0 ? r.length === e.length ? {
      match: !0,
      matchedChars: r
    } : {
      partialMatch: !0
      // matchedChars: characters
    } : t.indexOf(e) === 0 ? a && r.length > e.length ? {
      overflow: !0
    } : {
      match: !0,
      matchedChars: r.slice(0, e.length)
    } : void 0;
  }
  if (Array.isArray(e)) {
    for (var o = r.slice(), i = 0; i < e.length; ) {
      var n = e[i], d = $a(o, n, a && i === e.length - 1);
      if (d) {
        if (d.overflow)
          return d;
        if (d.match) {
          if (o = o.slice(d.matchedChars.length), o.length === 0)
            return i === e.length - 1 ? {
              match: !0,
              matchedChars: r
            } : {
              partialMatch: !0
              // matchedChars: characters
            };
        } else {
          if (d.partialMatch)
            return {
              partialMatch: !0
              // matchedChars: characters
            };
          throw new Error(`Unsupported match result:
`.concat(JSON.stringify(d, null, 2)));
        }
      } else
        return;
      i++;
    }
    return a ? {
      overflow: !0
    } : {
      match: !0,
      matchedChars: r.slice(0, r.length - o.length)
    };
  }
  switch (e.op) {
    case "|":
      for (var l, s = Lr(e.args), c; !(c = s()).done; ) {
        var p = c.value, m = $a(r, p, a);
        if (m) {
          if (m.overflow)
            return m;
          if (m.match)
            return {
              match: !0,
              matchedChars: m.matchedChars
            };
          if (m.partialMatch)
            l = !0;
          else
            throw new Error(`Unsupported match result:
`.concat(JSON.stringify(m, null, 2)));
        }
      }
      return l ? {
        partialMatch: !0
        // matchedChars: ...
      } : void 0;
    case "[]":
      for (var u = Lr(e.args), f; !(f = u()).done; ) {
        var h = f.value;
        if (r[0] === h)
          return r.length === 1 ? {
            match: !0,
            matchedChars: r
          } : a ? {
            overflow: !0
          } : {
            match: !0,
            matchedChars: [h]
          };
      }
      return;
    default:
      throw new Error("Unsupported instruction tree: ".concat(e));
  }
}
function Hr(r, e) {
  var a = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (a)
    return (a = a.call(r)).next.bind(a);
  if (Array.isArray(r) || (a = Yd(r)) || e && r && typeof r.length == "number") {
    a && (r = a);
    var t = 0;
    return function() {
      return t >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[t++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yd(r, e) {
  if (r) {
    if (typeof r == "string")
      return Vr(r, e);
    var a = Object.prototype.toString.call(r).slice(8, -1);
    if (a === "Object" && r.constructor && (a = r.constructor.name), a === "Map" || a === "Set")
      return Array.from(r);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Vr(r, e);
  }
}
function Vr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var a = 0, t = new Array(e); a < e; a++)
    t[a] = r[a];
  return t;
}
function jd(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Yr(r, e) {
  for (var a = 0; a < e.length; a++) {
    var t = e[a];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, t.key, t);
  }
}
function Kd(r, e, a) {
  return e && Yr(r.prototype, e), a && Yr(r, a), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
var _a = "9", Qd = 15, Jd = we(_a, Qd), qd = /[- ]/, Wd = function() {
  return /\[([^\[\]])*\]/g;
}, Xd = function() {
  return /\d(?=[^,}][^,}])/g;
}, Zd = new RegExp("[" + I + "]*\\$1[" + I + "]*(\\$\\d[" + I + "]*)*$"), jr = 3, el = /* @__PURE__ */ function() {
  function r(e) {
    e.state;
    var a = e.metadata;
    jd(this, r), this.metadata = a, this.resetFormat();
  }
  return Kd(r, [{
    key: "resetFormat",
    value: function() {
      this.chosenFormat = void 0, this.template = void 0, this.nationalNumberTemplate = void 0, this.populatedNationalNumberTemplate = void 0, this.populatedNationalNumberTemplatePosition = -1;
    }
  }, {
    key: "reset",
    value: function(a, t) {
      this.resetFormat(), a ? (this.isNANP = a.callingCode() === "1", this.matchingFormats = a.formats(), t.nationalSignificantNumber && this.narrowDownMatchingFormats(t)) : (this.isNANP = void 0, this.matchingFormats = []);
    }
    /**
     * Formats an updated phone number.
     * @param  {string} nextDigits — Additional phone number digits.
     * @param  {object} state — `AsYouType` state.
     * @return {[string]} Returns undefined if the updated phone number can't be formatted using any of the available formats.
     */
  }, {
    key: "format",
    value: function(a, t) {
      var o = this;
      if (Pd(t.nationalSignificantNumber, this.metadata))
        for (var i = Hr(this.matchingFormats), n; !(n = i()).done; ) {
          var d = n.value, l = Sd(t, d, {
            metadata: this.metadata,
            shouldTryNationalPrefixFormattingRule: function(c) {
              return o.shouldTryNationalPrefixFormattingRule(c, {
                international: t.international,
                nationalPrefix: t.nationalPrefix
              });
            },
            getSeparatorAfterNationalPrefix: function(c) {
              return o.getSeparatorAfterNationalPrefix(c);
            }
          });
          if (l)
            return this.resetFormat(), this.chosenFormat = d, this.setNationalNumberTemplate(l.replace(/\d/g, A), t), this.populatedNationalNumberTemplate = l, this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(A), l;
        }
      return this.formatNationalNumberWithNextDigits(a, t);
    }
    // Formats the next phone number digits.
  }, {
    key: "formatNationalNumberWithNextDigits",
    value: function(a, t) {
      var o = this.chosenFormat, i = this.chooseFormat(t);
      if (i)
        return i === o ? this.formatNextNationalNumberDigits(a) : this.formatNextNationalNumberDigits(t.getNationalDigits());
    }
  }, {
    key: "narrowDownMatchingFormats",
    value: function(a) {
      var t = this, o = a.nationalSignificantNumber, i = a.nationalPrefix, n = a.international, d = o, l = d.length - jr;
      l < 0 && (l = 0), this.matchingFormats = this.matchingFormats.filter(function(s) {
        return t.formatSuits(s, n, i) && t.formatMatches(s, d, l);
      }), this.chosenFormat && this.matchingFormats.indexOf(this.chosenFormat) === -1 && this.resetFormat();
    }
  }, {
    key: "formatSuits",
    value: function(a, t, o) {
      return !(o && !a.usesNationalPrefix() && // !format.domesticCarrierCodeFormattingRule() &&
      !a.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !t && !o && a.nationalPrefixIsMandatoryWhenFormattingInNationalFormat());
    }
  }, {
    key: "formatMatches",
    value: function(a, t, o) {
      var i = a.leadingDigitsPatterns().length;
      if (i === 0)
        return !0;
      o = Math.min(o, i - 1);
      var n = a.leadingDigitsPatterns()[o];
      if (t.length < jr)
        try {
          return new Vd(n).match(t, {
            allowOverflow: !0
          }) !== void 0;
        } catch (d) {
          return console.error(d), !0;
        }
      return new RegExp("^(".concat(n, ")")).test(t);
    }
  }, {
    key: "getFormatFormat",
    value: function(a, t) {
      return t ? a.internationalFormat() : a.format();
    }
  }, {
    key: "chooseFormat",
    value: function(a) {
      for (var t = this, o = function() {
        var s = n.value;
        return t.chosenFormat === s ? "break" : Zd.test(t.getFormatFormat(s, a.international)) ? t.createTemplateForFormat(s, a) ? (t.chosenFormat = s, "break") : (t.matchingFormats = t.matchingFormats.filter(function(c) {
          return c !== s;
        }), "continue") : "continue";
      }, i = Hr(this.matchingFormats.slice()), n; !(n = i()).done; ) {
        var d = o();
        if (d === "break")
          break;
      }
      return this.chosenFormat || this.resetFormat(), this.chosenFormat;
    }
  }, {
    key: "createTemplateForFormat",
    value: function(a, t) {
      if (!(a.pattern().indexOf("|") >= 0)) {
        var o = this.getTemplateForFormat(a, t);
        if (o)
          return this.setNationalNumberTemplate(o, t), !0;
      }
    }
  }, {
    key: "getSeparatorAfterNationalPrefix",
    value: function(a) {
      return this.isNANP || a && a.nationalPrefixFormattingRule() && qd.test(a.nationalPrefixFormattingRule()) ? " " : "";
    }
  }, {
    key: "getInternationalPrefixBeforeCountryCallingCode",
    value: function(a, t) {
      var o = a.IDDPrefix, i = a.missingPlus;
      return o ? t && t.spacing === !1 ? o : o + " " : i ? "" : "+";
    }
  }, {
    key: "getTemplate",
    value: function(a) {
      if (this.template) {
        for (var t = -1, o = 0, i = a.international ? this.getInternationalPrefixBeforeCountryCallingCode(a, {
          spacing: !1
        }) : ""; o < i.length + a.getDigitsWithoutInternationalPrefix().length; )
          t = this.template.indexOf(A, t + 1), o++;
        return Mr(this.template, t + 1);
      }
    }
  }, {
    key: "setNationalNumberTemplate",
    value: function(a, t) {
      this.nationalNumberTemplate = a, this.populatedNationalNumberTemplate = a, this.populatedNationalNumberTemplatePosition = -1, t.international ? this.template = this.getInternationalPrefixBeforeCountryCallingCode(t).replace(/[\d\+]/g, A) + we(A, t.callingCode.length) + " " + a : this.template = a;
    }
    /**
     * Generates formatting template for a national phone number,
     * optionally containing a national prefix, for a format.
     * @param  {Format} format
     * @param  {string} nationalPrefix
     * @return {string}
     */
  }, {
    key: "getTemplateForFormat",
    value: function(a, t) {
      var o = t.nationalSignificantNumber, i = t.international, n = t.nationalPrefix, d = t.complexPrefixBeforeNationalSignificantNumber, l = a.pattern();
      l = l.replace(Wd(), "\\d").replace(Xd(), "\\d");
      var s = Jd.match(l)[0];
      if (!(o.length > s.length)) {
        var c = new RegExp("^" + l + "$"), p = o.replace(/\d/g, _a);
        c.test(p) && (s = p);
        var m = this.getFormatFormat(a, i), u;
        if (this.shouldTryNationalPrefixFormattingRule(a, {
          international: i,
          nationalPrefix: n
        })) {
          var f = m.replace(It, a.nationalPrefixFormattingRule());
          if (Ie(a.nationalPrefixFormattingRule()) === (n || "") + Ie("$1") && (m = f, u = !0, n))
            for (var h = n.length; h > 0; )
              m = m.replace(/\d/, A), h--;
        }
        var y = s.replace(new RegExp(l), m).replace(new RegExp(_a, "g"), A);
        return u || (d ? y = we(A, d.length) + " " + y : n && (y = we(A, n.length) + this.getSeparatorAfterNationalPrefix(a) + y)), i && (y = At(y)), y;
      }
    }
  }, {
    key: "formatNextNationalNumberDigits",
    value: function(a) {
      var t = Id(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, a);
      if (!t) {
        this.resetFormat();
        return;
      }
      return this.populatedNationalNumberTemplate = t[0], this.populatedNationalNumberTemplatePosition = t[1], Mr(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1);
    }
  }, {
    key: "shouldTryNationalPrefixFormattingRule",
    value: function(a, t) {
      var o = t.international, i = t.nationalPrefix;
      if (a.nationalPrefixFormattingRule()) {
        var n = a.usesNationalPrefix();
        if (n && i || !n && !o)
          return !0;
      }
    }
  }]), r;
}();
function Mt(r, e) {
  return ol(r) || tl(r, e) || rl(r, e) || al();
}
function al() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rl(r, e) {
  if (r) {
    if (typeof r == "string")
      return Kr(r, e);
    var a = Object.prototype.toString.call(r).slice(8, -1);
    if (a === "Object" && r.constructor && (a = r.constructor.name), a === "Map" || a === "Set")
      return Array.from(r);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Kr(r, e);
  }
}
function Kr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var a = 0, t = new Array(e); a < e; a++)
    t[a] = r[a];
  return t;
}
function tl(r, e) {
  var a = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (a != null) {
    var t = [], o = !0, i = !1, n, d;
    try {
      for (a = a.call(r); !(o = (n = a.next()).done) && (t.push(n.value), !(e && t.length === e)); o = !0)
        ;
    } catch (l) {
      i = !0, d = l;
    } finally {
      try {
        !o && a.return != null && a.return();
      } finally {
        if (i)
          throw d;
      }
    }
    return t;
  }
}
function ol(r) {
  if (Array.isArray(r))
    return r;
}
function il(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Qr(r, e) {
  for (var a = 0; a < e.length; a++) {
    var t = e[a];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, t.key, t);
  }
}
function nl(r, e, a) {
  return e && Qr(r.prototype, e), a && Qr(r, a), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
var dl = "[" + I + C + "]+", ll = new RegExp("^" + dl + "$", "i"), sl = "(?:[" + De + "][" + I + C + "]*|[" + I + C + "]+)", cl = new RegExp("[^" + I + C + "]+.*$"), ml = /[^\d\[\]]/, ul = /* @__PURE__ */ function() {
  function r(e) {
    var a = e.defaultCountry, t = e.defaultCallingCode, o = e.metadata, i = e.onNationalSignificantNumberChange;
    il(this, r), this.defaultCountry = a, this.defaultCallingCode = t, this.metadata = o, this.onNationalSignificantNumberChange = i;
  }
  return nl(r, [{
    key: "input",
    value: function(a, t) {
      var o = gl(a), i = Mt(o, 2), n = i[0], d = i[1], l = Ie(n), s;
      return d && (t.digits || (t.startInternationalNumber(), l || (s = !0))), l && this.inputDigits(l, t), {
        digits: l,
        justLeadingPlus: s
      };
    }
    /**
     * Inputs "next" phone number digits.
     * @param  {string} digits
     * @return {string} [formattedNumber] Formatted national phone number (if it can be formatted at this stage). Returning `undefined` means "don't format the national phone number at this stage".
     */
  }, {
    key: "inputDigits",
    value: function(a, t) {
      var o = t.digits, i = o.length < 3 && o.length + a.length >= 3;
      if (t.appendDigits(a), i && this.extractIddPrefix(t), this.isWaitingForCountryCallingCode(t)) {
        if (!this.extractCountryCallingCode(t))
          return;
      } else
        t.appendNationalSignificantNumberDigits(a);
      t.international || this.hasExtractedNationalSignificantNumber || this.extractNationalSignificantNumber(t.getNationalDigits(), function(n) {
        return t.update(n);
      });
    }
  }, {
    key: "isWaitingForCountryCallingCode",
    value: function(a) {
      var t = a.international, o = a.callingCode;
      return t && !o;
    }
    // Extracts a country calling code from a number
    // being entered in internatonal format.
  }, {
    key: "extractCountryCallingCode",
    value: function(a) {
      var t = Ft("+" + a.getDigitsWithoutInternationalPrefix(), this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), o = t.countryCallingCode, i = t.number;
      if (o)
        return a.setCallingCode(o), a.update({
          nationalSignificantNumber: i
        }), !0;
    }
  }, {
    key: "reset",
    value: function(a) {
      if (a) {
        this.hasSelectedNumberingPlan = !0;
        var t = a._nationalPrefixForParsing();
        this.couldPossiblyExtractAnotherNationalSignificantNumber = t && ml.test(t);
      } else
        this.hasSelectedNumberingPlan = void 0, this.couldPossiblyExtractAnotherNationalSignificantNumber = void 0;
    }
    /**
     * Extracts a national (significant) number from user input.
     * Google's library is different in that it only applies `national_prefix_for_parsing`
     * and doesn't apply `national_prefix_transform_rule` after that.
     * https://github.com/google/libphonenumber/blob/a3d70b0487875475e6ad659af404943211d26456/java/libphonenumber/src/com/google/i18n/phonenumbers/AsYouTypeFormatter.java#L539
     * @return {boolean} [extracted]
     */
  }, {
    key: "extractNationalSignificantNumber",
    value: function(a, t) {
      if (this.hasSelectedNumberingPlan) {
        var o = va(a, this.metadata), i = o.nationalPrefix, n = o.nationalNumber, d = o.carrierCode;
        if (n !== a)
          return this.onExtractedNationalNumber(i, d, n, a, t), !0;
      }
    }
    /**
     * In Google's code this function is called "attempt to extract longer NDD".
     * "Some national prefixes are a substring of others", they say.
     * @return {boolean} [result] — Returns `true` if extracting a national prefix produced different results from what they were.
     */
  }, {
    key: "extractAnotherNationalSignificantNumber",
    value: function(a, t, o) {
      if (!this.hasExtractedNationalSignificantNumber)
        return this.extractNationalSignificantNumber(a, o);
      if (this.couldPossiblyExtractAnotherNationalSignificantNumber) {
        var i = va(a, this.metadata), n = i.nationalPrefix, d = i.nationalNumber, l = i.carrierCode;
        if (d !== t)
          return this.onExtractedNationalNumber(n, l, d, a, o), !0;
      }
    }
  }, {
    key: "onExtractedNationalNumber",
    value: function(a, t, o, i, n) {
      var d, l, s = i.lastIndexOf(o);
      if (s >= 0 && s === i.length - o.length) {
        l = !0;
        var c = i.slice(0, s);
        c !== a && (d = c);
      }
      n({
        nationalPrefix: a,
        carrierCode: t,
        nationalSignificantNumber: o,
        nationalSignificantNumberMatchesInput: l,
        complexPrefixBeforeNationalSignificantNumber: d
      }), this.hasExtractedNationalSignificantNumber = !0, this.onNationalSignificantNumberChange();
    }
  }, {
    key: "reExtractNationalSignificantNumber",
    value: function(a) {
      if (this.extractAnotherNationalSignificantNumber(a.getNationalDigits(), a.nationalSignificantNumber, function(t) {
        return a.update(t);
      }))
        return !0;
      if (this.extractIddPrefix(a))
        return this.extractCallingCodeAndNationalSignificantNumber(a), !0;
      if (this.fixMissingPlus(a))
        return this.extractCallingCodeAndNationalSignificantNumber(a), !0;
    }
  }, {
    key: "extractIddPrefix",
    value: function(a) {
      var t = a.international, o = a.IDDPrefix, i = a.digits;
      if (a.nationalSignificantNumber, !(t || o)) {
        var n = Pt(i, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
        if (n !== void 0 && n !== i)
          return a.update({
            IDDPrefix: i.slice(0, i.length - n.length)
          }), this.startInternationalNumber(a, {
            country: void 0,
            callingCode: void 0
          }), !0;
      }
    }
  }, {
    key: "fixMissingPlus",
    value: function(a) {
      if (!a.international) {
        var t = Bt(a.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), o = t.countryCallingCode;
        if (t.number, o)
          return a.update({
            missingPlus: !0
          }), this.startInternationalNumber(a, {
            country: a.country,
            callingCode: o
          }), !0;
      }
    }
  }, {
    key: "startInternationalNumber",
    value: function(a, t) {
      var o = t.country, i = t.callingCode;
      a.startInternationalNumber(o, i), a.nationalSignificantNumber && (a.resetNationalSignificantNumber(), this.onNationalSignificantNumberChange(), this.hasExtractedNationalSignificantNumber = void 0);
    }
  }, {
    key: "extractCallingCodeAndNationalSignificantNumber",
    value: function(a) {
      this.extractCountryCallingCode(a) && this.extractNationalSignificantNumber(a.getNationalDigits(), function(t) {
        return a.update(t);
      });
    }
  }]), r;
}();
function pl(r) {
  var e = r.search(sl);
  if (!(e < 0)) {
    r = r.slice(e);
    var a;
    return r[0] === "+" && (a = !0, r = r.slice(1)), r = r.replace(cl, ""), a && (r = "+" + r), r;
  }
}
function hl(r) {
  var e = pl(r) || "";
  return e[0] === "+" ? [e.slice(1), !0] : [e];
}
function gl(r) {
  var e = hl(r), a = Mt(e, 2), t = a[0], o = a[1];
  return ll.test(t) || (t = ""), [t, o];
}
function Ca(r) {
  "@babel/helpers - typeof";
  return Ca = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ca(r);
}
function fl(r, e) {
  return yl(r) || vl(r, e) || zl(r, e) || bl();
}
function bl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zl(r, e) {
  if (r) {
    if (typeof r == "string")
      return Jr(r, e);
    var a = Object.prototype.toString.call(r).slice(8, -1);
    if (a === "Object" && r.constructor && (a = r.constructor.name), a === "Map" || a === "Set")
      return Array.from(r);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Jr(r, e);
  }
}
function Jr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var a = 0, t = new Array(e); a < e; a++)
    t[a] = r[a];
  return t;
}
function vl(r, e) {
  var a = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (a != null) {
    var t = [], o = !0, i = !1, n, d;
    try {
      for (a = a.call(r); !(o = (n = a.next()).done) && (t.push(n.value), !(e && t.length === e)); o = !0)
        ;
    } catch (l) {
      i = !0, d = l;
    } finally {
      try {
        !o && a.return != null && a.return();
      } finally {
        if (i)
          throw d;
      }
    }
    return t;
  }
}
function yl(r) {
  if (Array.isArray(r))
    return r;
}
function kl(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function qr(r, e) {
  for (var a = 0; a < e.length; a++) {
    var t = e[a];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, t.key, t);
  }
}
function xl(r, e, a) {
  return e && qr(r.prototype, e), a && qr(r, a), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
var Ot = /* @__PURE__ */ function() {
  function r(e, a) {
    kl(this, r), this.metadata = new _(a);
    var t = this.getCountryAndCallingCode(e), o = fl(t, 2), i = o[0], n = o[1];
    this.defaultCountry = i, this.defaultCallingCode = n, this.reset();
  }
  return xl(r, [{
    key: "getCountryAndCallingCode",
    value: function(a) {
      var t, o;
      return a && (Ca(a) === "object" ? (t = a.defaultCountry, o = a.defaultCallingCode) : t = a), t && !this.metadata.hasCountry(t) && (t = void 0), [t, o];
    }
    /**
     * Inputs "next" phone number characters.
     * @param  {string} text
     * @return {string} Formatted phone number characters that have been input so far.
     */
  }, {
    key: "input",
    value: function(a) {
      var t = this.parser.input(a, this.state), o = t.digits, i = t.justLeadingPlus;
      if (i)
        this.formattedOutput = "+";
      else if (o) {
        this.determineTheCountryIfNeeded(), this.state.nationalSignificantNumber && this.formatter.narrowDownMatchingFormats(this.state);
        var n;
        if (this.metadata.hasSelectedNumberingPlan() && (n = this.formatter.format(o, this.state)), n === void 0 && this.parser.reExtractNationalSignificantNumber(this.state)) {
          this.determineTheCountryIfNeeded();
          var d = this.state.getNationalDigits();
          d && (n = this.formatter.format(d, this.state));
        }
        this.formattedOutput = n ? this.getFullNumber(n) : this.getNonFormattedNumber();
      }
      return this.formattedOutput;
    }
  }, {
    key: "reset",
    value: function() {
      var a = this;
      return this.state = new Cd({
        onCountryChange: function(o) {
          a.country = o;
        },
        onCallingCodeChange: function(o, i) {
          a.metadata.selectNumberingPlan(i, o), a.formatter.reset(a.metadata.numberingPlan, a.state), a.parser.reset(a.metadata.numberingPlan);
        }
      }), this.formatter = new el({
        state: this.state,
        metadata: this.metadata
      }), this.parser = new ul({
        defaultCountry: this.defaultCountry,
        defaultCallingCode: this.defaultCallingCode,
        metadata: this.metadata,
        state: this.state,
        onNationalSignificantNumberChange: function() {
          a.determineTheCountryIfNeeded(), a.formatter.reset(a.metadata.numberingPlan, a.state);
        }
      }), this.state.reset({
        country: this.defaultCountry,
        callingCode: this.defaultCallingCode
      }), this.formattedOutput = "", this;
    }
    /**
     * Returns `true` if the phone number is being input in international format.
     * In other words, returns `true` if and only if the parsed phone number starts with a `"+"`.
     * @return {boolean}
     */
  }, {
    key: "isInternational",
    value: function() {
      return this.state.international;
    }
    /**
     * Returns the "calling code" part of the phone number when it's being input
     * in an international format.
     * If no valid calling code has been entered so far, returns `undefined`.
     * @return {string} [callingCode]
     */
  }, {
    key: "getCallingCode",
    value: function() {
      if (this.isInternational())
        return this.state.callingCode;
    }
    // A legacy alias.
  }, {
    key: "getCountryCallingCode",
    value: function() {
      return this.getCallingCode();
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * Returns `undefined` if no phone number has been input yet.
     * @return {string} [country]
     */
  }, {
    key: "getCountry",
    value: function() {
      var a = this.state.digits;
      if (a)
        return this._getCountry();
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * @return {string} [country]
     */
  }, {
    key: "_getCountry",
    value: function() {
      var a = this.state.country;
      return a;
    }
  }, {
    key: "determineTheCountryIfNeeded",
    value: function() {
      (!this.state.country || this.isCountryCallingCodeAmbiguous()) && this.determineTheCountry();
    }
    // Prepends `+CountryCode ` in case of an international phone number
  }, {
    key: "getFullNumber",
    value: function(a) {
      var t = this;
      if (this.isInternational()) {
        var o = function(d) {
          return t.formatter.getInternationalPrefixBeforeCountryCallingCode(t.state, {
            spacing: !!d
          }) + d;
        }, i = this.state.callingCode;
        return o(i ? a ? "".concat(i, " ").concat(a) : i : "".concat(this.state.getDigitsWithoutInternationalPrefix()));
      }
      return a;
    }
  }, {
    key: "getNonFormattedNationalNumberWithPrefix",
    value: function() {
      var a = this.state, t = a.nationalSignificantNumber, o = a.complexPrefixBeforeNationalSignificantNumber, i = a.nationalPrefix, n = t, d = o || i;
      return d && (n = d + n), n;
    }
  }, {
    key: "getNonFormattedNumber",
    value: function() {
      var a = this.state.nationalSignificantNumberMatchesInput;
      return this.getFullNumber(a ? this.getNonFormattedNationalNumberWithPrefix() : this.state.getNationalDigits());
    }
  }, {
    key: "getNonFormattedTemplate",
    value: function() {
      var a = this.getNonFormattedNumber();
      if (a)
        return a.replace(/[\+\d]/g, A);
    }
  }, {
    key: "isCountryCallingCodeAmbiguous",
    value: function() {
      var a = this.state.callingCode, t = this.metadata.getCountryCodesForCallingCode(a);
      return t && t.length > 1;
    }
    // Determines the country of the phone number
    // entered so far based on the country phone code
    // and the national phone number.
  }, {
    key: "determineTheCountry",
    value: function() {
      this.state.setCountry(Rt(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, this.state.nationalSignificantNumber, this.metadata));
    }
    /**
     * Returns a E.164 phone number value for the user's input.
     *
     * For example, for country `"US"` and input `"(222) 333-4444"`
     * it will return `"+12223334444"`.
     *
     * For international phone number input, it will also auto-correct
     * some minor errors such as using a national prefix when writing
     * an international phone number. For example, if the user inputs
     * `"+44 0 7400 000000"` then it will return an auto-corrected
     * `"+447400000000"` phone number value.
     *
     * Will return `undefined` if no digits have been input,
     * or when inputting a phone number in national format and no
     * default country or default "country calling code" have been set.
     *
     * @return {string} [value]
     */
  }, {
    key: "getNumberValue",
    value: function() {
      var a = this.state, t = a.digits, o = a.callingCode, i = a.country, n = a.nationalSignificantNumber;
      if (t) {
        if (this.isInternational())
          return o ? "+" + o + n : "+" + t;
        if (i || o) {
          var d = i ? this.metadata.countryCallingCode() : o;
          return "+" + d + n;
        }
      }
    }
    /**
     * Returns an instance of `PhoneNumber` class.
     * Will return `undefined` if no national (significant) number
     * digits have been entered so far, or if no `defaultCountry` has been
     * set and the user enters a phone number not in international format.
     */
  }, {
    key: "getNumber",
    value: function() {
      var a = this.state, t = a.nationalSignificantNumber, o = a.carrierCode, i = a.callingCode, n = this._getCountry();
      if (t && !(!n && !i)) {
        var d = new Ua(n || i, t, this.metadata.metadata);
        return o && (d.carrierCode = o), d;
      }
    }
    /**
     * Returns `true` if the phone number is "possible".
     * Is just a shortcut for `PhoneNumber.isPossible()`.
     * @return {boolean}
     */
  }, {
    key: "isPossible",
    value: function() {
      var a = this.getNumber();
      return a ? a.isPossible() : !1;
    }
    /**
     * Returns `true` if the phone number is "valid".
     * Is just a shortcut for `PhoneNumber.isValid()`.
     * @return {boolean}
     */
  }, {
    key: "isValid",
    value: function() {
      var a = this.getNumber();
      return a ? a.isValid() : !1;
    }
    /**
     * @deprecated
     * This method is used in `react-phone-number-input/source/input-control.js`
     * in versions before `3.0.16`.
     */
  }, {
    key: "getNationalNumber",
    value: function() {
      return this.state.nationalSignificantNumber;
    }
    /**
     * Returns the phone number characters entered by the user.
     * @return {string}
     */
  }, {
    key: "getChars",
    value: function() {
      return (this.state.international ? "+" : "") + this.state.digits;
    }
    /**
     * Returns the template for the formatted phone number.
     * @return {string}
     */
  }, {
    key: "getTemplate",
    value: function() {
      return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || "";
    }
  }]), r;
}();
function wl(r, e, a) {
  if (e[r])
    return new Ua(r, e[r], a);
}
function $l() {
  return Oa(wd, arguments);
}
function Pe(r) {
  return Ot.call(this, r, kt);
}
Pe.prototype = Object.create(Ot.prototype, {});
Pe.prototype.constructor = Pe;
function _l() {
  return Oa(Ge, arguments);
}
function Cl() {
  return Oa(wl, arguments);
}
const Dt = [["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1684"], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1264"], ["Antigua and Barbuda", "ag", "1268"], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Australia", "au", "61", 0], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1242"], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1246"], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1441"], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1284"], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1], ["Cayman Islands", "ky", "1345"], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Christmas Island", "cx", "61", 2], ["Cocos (Keeling) Islands", "cc", "61", 1], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1767"], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1473"], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1671"], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1876"], ["Japan (日本)", "jp", "81"], ["Jersey", "je", "44", 3], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["Macedonia (FYROM) (Македонија)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1664"], ["Morocco (‫المغرب‬‎)", "ma", "212", 0], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["Northern Mariana Islands", "mp", "1670"], ["Norway (Norge)", "no", "47", 0], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262", 0], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1869"], ["Saint Lucia", "lc", "1758"], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1784"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1721"], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1], ["Swaziland", "sz", "268"], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1868"], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1649"], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1340"], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1]], El = Dt.map((r) => r[1].toUpperCase()), Lt = Dt.map((r) => ({
  name: r[0],
  iso2: r[1].toUpperCase(),
  dialCode: r[2],
  priority: r[3] || 0,
  areaCodes: r[4] || null
})), Nl = () => {
  if (typeof window > "u")
    return null;
  const r = window.navigator.userLanguage || window.navigator.language;
  let e = r ? r.substr(3, 4).toUpperCase() : null;
  return e === "" && (e = r.substr(0, 2).toUpperCase()), e === "EN" && (e = "US"), e === "JA" && (e = "JP"), e;
}, Al = async (r) => {
  try {
    if (El.includes(r))
      return !0;
    throw `MazPhoneNumberInput: The country ${r} is not available`;
  } catch (e) {
    throw new Error(e);
  }
}, Il = (r, e) => {
  const a = r ? $l(r, e) : null;
  let t = {
    countryCode: e,
    phoneNumber: r,
    isValid: !1
  };
  return a && (t = {
    ...t,
    countryCode: a.country,
    countryCallingCode: a.countryCallingCode,
    nationalNumber: a.nationalNumber,
    isValid: a.isValid(),
    type: a.getType(),
    formatInternational: a.formatInternational(),
    formatNational: a.formatNational(),
    uri: a.getURI(),
    e164: a.format("E.164")
  }), t;
}, Wr = (r, e) => r ? e ? new Pe(e).input(r) : r : null, Sl = async () => {
  try {
    const a = (await (await fetch("https://ip2c.org/s")).text() || "").toString();
    if (a && a[0] === "1")
      return a.substr(2, 2);
  } catch {
    return new Error("[MazPhoneNumberInput] Error while fetching country code");
  }
}, Pl = {
  AC: "40123",
  AD: "312345",
  AE: "501234567",
  AF: "701234567",
  AG: "2684641234",
  AI: "2642351234",
  AL: "672123456",
  AM: "77123456",
  AO: "923123456",
  AR: "91123456789",
  AS: "6847331234",
  AT: "664123456",
  AU: "412345678",
  AW: "5601234",
  AX: "412345678",
  AZ: "401234567",
  BA: "61123456",
  BB: "2462501234",
  BD: "1812345678",
  BE: "470123456",
  BF: "70123456",
  BG: "43012345",
  BH: "36001234",
  BI: "79561234",
  BJ: "90011234",
  BL: "690001234",
  BM: "4413701234",
  BN: "7123456",
  BO: "71234567",
  BQ: "3181234",
  BR: "11961234567",
  BS: "2423591234",
  BT: "17123456",
  BW: "71123456",
  BY: "294911911",
  BZ: "6221234",
  CA: "5062345678",
  CC: "412345678",
  CD: "991234567",
  CF: "70012345",
  CG: "061234567",
  CH: "781234567",
  CI: "0123456789",
  CK: "71234",
  CL: "221234567",
  CM: "671234567",
  CN: "13123456789",
  CO: "3211234567",
  CR: "83123456",
  CU: "51234567",
  CV: "9911234",
  CW: "95181234",
  CX: "412345678",
  CY: "96123456",
  CZ: "601123456",
  DE: "15123456789",
  DJ: "77831001",
  DK: "32123456",
  DM: "7672251234",
  DO: "8092345678",
  DZ: "551234567",
  EC: "991234567",
  EE: "51234567",
  EG: "1001234567",
  EH: "650123456",
  ER: "7123456",
  ES: "612345678",
  ET: "911234567",
  FI: "412345678",
  FJ: "7012345",
  FK: "51234",
  FM: "3501234",
  FO: "211234",
  FR: "612345678",
  GA: "06031234",
  GB: "7400123456",
  GD: "4734031234",
  GE: "555123456",
  GF: "694201234",
  GG: "7781123456",
  GH: "231234567",
  GI: "57123456",
  GL: "221234",
  GM: "3012345",
  GN: "601123456",
  GP: "690001234",
  GQ: "222123456",
  GR: "6912345678",
  GT: "51234567",
  GU: "6713001234",
  GW: "955012345",
  GY: "6091234",
  HK: "51234567",
  HN: "91234567",
  HR: "921234567",
  HT: "34101234",
  HU: "201234567",
  ID: "812345678",
  IE: "850123456",
  IL: "502345678",
  IM: "7924123456",
  IN: "8123456789",
  IO: "3801234",
  IQ: "7912345678",
  IR: "9123456789",
  IS: "6111234",
  IT: "3123456789",
  JE: "7797712345",
  JM: "8762101234",
  JO: "790123456",
  JP: "9012345678",
  KE: "712123456",
  KG: "700123456",
  KH: "91234567",
  KI: "72001234",
  KM: "3212345",
  KN: "8697652917",
  KP: "1921234567",
  KR: "1020000000",
  KW: "50012345",
  KY: "3453231234",
  KZ: "7710009998",
  LA: "2023123456",
  LB: "71123456",
  LC: "7582845678",
  LI: "660234567",
  LK: "712345678",
  LR: "770123456",
  LS: "50123456",
  LT: "61234567",
  LU: "628123456",
  LV: "21234567",
  LY: "912345678",
  MA: "650123456",
  MC: "612345678",
  MD: "62112345",
  ME: "67622901",
  MF: "690001234",
  MG: "321234567",
  MH: "2351234",
  MK: "72345678",
  ML: "65012345",
  MM: "92123456",
  MN: "88123456",
  MO: "66123456",
  MP: "6702345678",
  MQ: "696201234",
  MR: "22123456",
  MS: "6644923456",
  MT: "96961234",
  MU: "52512345",
  MV: "7712345",
  MW: "991234567",
  MX: "12221234567",
  MY: "123456789",
  MZ: "821234567",
  NA: "811234567",
  NC: "751234",
  NE: "93123456",
  NF: "381234",
  NG: "8021234567",
  NI: "81234567",
  NL: "612345678",
  NO: "40612345",
  NP: "9841234567",
  NR: "5551234",
  NU: "8884012",
  NZ: "211234567",
  OM: "92123456",
  PA: "61234567",
  PE: "912345678",
  PF: "87123456",
  PG: "70123456",
  PH: "9051234567",
  PK: "3012345678",
  PL: "512345678",
  PM: "551234",
  PR: "7872345678",
  PS: "599123456",
  PT: "912345678",
  PW: "6201234",
  PY: "961456789",
  QA: "33123456",
  RE: "692123456",
  RO: "712034567",
  RS: "601234567",
  RU: "9123456789",
  RW: "720123456",
  SA: "512345678",
  SB: "7421234",
  SC: "2510123",
  SD: "911231234",
  SE: "701234567",
  SG: "81234567",
  SH: "51234",
  SI: "31234567",
  SJ: "41234567",
  SK: "912123456",
  SL: "25123456",
  SM: "66661212",
  SN: "701234567",
  SO: "71123456",
  SR: "7412345",
  SS: "977123456",
  ST: "9812345",
  SV: "70123456",
  SX: "7215205678",
  SY: "944567890",
  SZ: "76123456",
  TA: "8999",
  TC: "6492311234",
  TD: "63012345",
  TG: "90112345",
  TH: "812345678",
  TJ: "917123456",
  TK: "7290",
  TL: "77212345",
  TM: "66123456",
  TN: "20123456",
  TO: "7715123",
  TR: "5012345678",
  TT: "8682911234",
  TV: "901234",
  TW: "912345678",
  TZ: "621234567",
  UA: "501234567",
  UG: "712345678",
  US: "2015550123",
  UY: "94231234",
  UZ: "912345678",
  VA: "3123456789",
  VC: "7844301234",
  VE: "4121234567",
  VG: "2843001234",
  VI: "3406421234",
  VN: "912345678",
  VU: "5912345",
  WF: "821234",
  WS: "7212345",
  XK: "43201234",
  YE: "712345678",
  YT: "639012345",
  ZA: "711234567",
  ZM: "955123456",
  ZW: "712345678"
}, Bl = {
  countrySelectorLabel: "Country code",
  countrySelectorError: "Choose country",
  countrySelectorSearchPlaceholder: "Search country",
  phoneNumberLabel: "Phone number",
  example: "Example:"
}, Fl = {
  name: "MazPhoneNumberInput",
  components: {
    MazInput: K,
    MazSelect: de
  },
  mixins: [Oe],
  props: {
    value: {
      validator: (r) => ["string", "number"].includes(typeof r) || r === null,
      default: null
    },
    id: { type: String, default: null },
    disabled: { type: Boolean, default: !1 },
    lock: { type: Boolean, default: !1 },
    // set default phone number (Ex: `default-phone-number="0658585858"`)
    defaultPhoneNumber: { type: String, default: null },
    // set default country code (Ex: `default-country-code="FR"`)
    defaultCountryCode: { type: String, default: null },
    // Same as MazInput (options: `sm|md|lg`)
    size: { type: String, default: null },
    // Countries selected will be at the top of the list - Ex : `preferred-countries="['FR', 'BE', 'DE']`
    preferredCountries: { type: Array, default: null },
    // Only countries selected are in list - Ex : `only-countries="['FR', 'BE', 'DE']`
    onlyCountries: { type: Array, default: null },
    // Countries seleted are remove from the list - Ex : `ignored-countries="['FR', 'BE', 'DE']`
    ignoredCountries: { type: Array, default: Array },
    // Translate text in component - By default `{ countrySelectorLabel: 'Country code', countrySelectorError: 'Choose country', phoneNumberLabel: 'Phone number', example: 'Example:' }`
    translations: { type: Object, default: null },
    // Remove the validation UI state (success border color)
    noValidation: { type: Boolean, default: !1 },
    // Remove flags in country selector
    noFlags: { type: Boolean, default: !1 },
    // Remove the number example from the label input
    noExample: { type: Boolean, default: !1 },
    // Remove the search countries functionality
    noSearch: { type: Boolean, default: !1 },
    // Change the height of country item in list
    countriesHeight: { type: Number, default: 30 },
    // Disable use of browser locale to init the country selector (usefull for Nuxt.JS)
    noUseBrowserLocale: { type: Boolean, default: !1 },
    // Fetch country code via https://ip2c.org/s - Network needed - (Do not use it with default-country-code options)
    fetchCountry: { type: Boolean, default: !1 },
    // The country selector is not shown, you can validate your phone number with the country code set
    noCountrySelector: { type: Boolean, default: !1 },
    // Show the country phone code in the list
    showCodeOnList: { type: Boolean, default: !1 },
    // Enable the dark mode
    dark: { type: Boolean, default: !1 },
    // Use color
    color: { type: String, default: "primary" },
    // Set placholder of phone number input
    placeholder: { type: String, default: null },
    // hint message shown on phone number text field
    hint: { type: String, default: null },
    // set the position of countries list (ex: `top`, `top right`, `bottom right`)
    position: { type: String, default: "left bottom" }
  },
  data() {
    return {
      results: {},
      countryCode: this.defaultCountryCode,
      cursorPosition: null,
      asYouTypeNumber: this.defaultPhoneNumber
    };
  },
  computed: {
    t() {
      return {
        ...Bl,
        ...this.translations
      };
    },
    callingCode() {
      const { countryCode: r } = this;
      return r ? `+${((a) => {
        const t = this.countriesSorted.find((o) => o.iso2 === a);
        return t ? t.dialCode : null;
      })(r) || _l(r)}` : null;
    },
    // input states
    shouldChooseCountry() {
      return !this.countryCode && !!this.asYouTypeNumber;
    },
    isValid() {
      return this.results.isValid;
    },
    hasEmptyPhone() {
      const { asYouTypeNumber: r } = this;
      return r === "" || !r;
    },
    // hint values
    phoneNumberExample() {
      const { countryCode: r } = this, e = r ? Cl(r, Pl) : null;
      return e ? e.formatNational() : null;
    },
    hintValue() {
      const { noExample: r, phoneNumberExample: e, hasEmptyPhone: a, isValid: t, t: o } = this;
      return r || !e || a || t ? null : `${o.example} ${e}`;
    },
    // Countries list management
    countriesList() {
      return Lt.filter((r) => !this.ignoredCountries.includes(r.iso2));
    },
    countriesFiltered() {
      return (this.onlyCountries || this.preferredCountries).map(
        (e) => this.countriesList.find((a) => a.iso2.includes(e))
      );
    },
    otherCountries() {
      return this.countriesList.filter((r) => !this.preferredCountries.includes(r.iso2));
    },
    countriesSorted() {
      return this.preferredCountries ? [...this.countriesFiltered, ...this.otherCountries] : this.onlyCountries ? this.countriesFiltered : this.countriesList;
    }
  },
  watch: {
    defaultPhoneNumber: {
      handler(r, e) {
        r !== e && this.buildResults(r);
      },
      immediate: !0
    },
    defaultCountryCode: {
      handler(r, e) {
        !r || r === e || this.setCountryCode(r);
      },
      immediate: !0
    }
  },
  async mounted() {
    try {
      const { defaultCountryCode: r, fetchCountry: e, noUseBrowserLocale: a, setCountryCode: t } = this;
      if (!this.defaultPhoneNumber && this.value && this.buildResults(this.value), r && e)
        throw new Error(
          "MazPhoneNumberInput: Do not use 'fetch-country' and 'default-country-code' options in the same time"
        );
      if (r && a)
        throw new Error(
          "MazPhoneNumberInput: If you use a 'default-country-code', do not use 'no-use-browser-locale' options"
        );
      if (r)
        return;
      const o = e ? await Sl() : a ? null : await Nl();
      o && t(o);
    } catch (r) {
      throw new Error(r);
    }
  },
  methods: {
    async buildResults(r, e) {
      const { countryCode: a, value: t } = this;
      await this.$nextTick();
      const o = this.asYouTypeNumber && r && this.asYouTypeNumber.length > r.length;
      this.results = Il(r, a);
      const { isValid: i, e164: n } = this.results, d = this.asYouTypeNumber && this.cursorPosition ? this.cursorPosition + 1 >= this.asYouTypeNumber.length : !0, l = !o && d || i;
      this.asYouTypeNumber = l ? Wr(r, a) : r, !e && this.results && this.results.countryCode && a !== this.results.countryCode && this.setCountryCode(this.results.countryCode), this.$emit("update", this.results);
      const s = i ? n : this.asYouTypeNumber;
      !s && s === t || this.$emit("input", s);
    },
    onBlur(r) {
      this.$emit("blur", r), this.countryCode && (this.asYouTypeNumber = Wr(this.asYouTypeNumber, this.countryCode));
    },
    onKeydown(r) {
      const e = r.target;
      this.cursorPosition = e == null ? void 0 : e.selectionStart;
    },
    async setCountryCode(r, e) {
      const { buildResults: a, asYouTypeNumber: t } = this, o = Al(r);
      e && (this.focusPhoneNumberInput(), t && t.includes("+") && (this.asYouTypeNumber = null)), o && r && (this.countryCode = r, a(this.asYouTypeNumber, !0));
    },
    async focusCountrySelector() {
      await this.$nextTick(), this.$refs.CountrySelector.$el.querySelector("input").focus();
    },
    async focusPhoneNumberInput() {
      await this.$nextTick(), this.$refs.PhoneNumberInput.$el.querySelector("input").focus();
    }
  }
};
var Rl = function() {
  var e = this, a = e._self._c;
  return a("div", { staticClass: "maz-base-component maz-phone-number-input maz-flex", class: [{ "maz-is-dark": e.dark }, `maz-phone-number-input--${e.size}`], attrs: { id: e.id } }, [e.noCountrySelector ? e._e() : a("MazSelect", { ref: "CountrySelector", staticClass: "country-selector", class: {
    "no-padding-left": e.noFlags || !e.countryCode
  }, attrs: { value: e.countryCode, options: e.countriesSorted, placeholder: e.t.countrySelectorLabel, search: !e.noSearch, position: e.position, "search-placeholder": e.t.countrySelectorSearchPlaceholder, "items-height": e.countriesHeight, error: e.shouldChooseCountry, hint: e.shouldChooseCountry ? e.t.countrySelectorError : null, size: e.size, success: e.isValid && !e.noValidation, disabled: e.disabled, lock: e.lock, "input-value": e.callingCode, "list-width": 300, config: {
    labelKey: "dialCode",
    searchKey: "name",
    valueKey: "iso2"
  }, color: e.color }, on: { input: function(t) {
    return e.setCountryCode(t, !0);
  } }, scopedSlots: e._u([{ key: "default", fn: function({ option: t }) {
    return [a("div", { staticClass: "maz-flex maz-align-center" }, [e.noFlags ? e._e() : a("div", { staticClass: "country-selector__flag-container maz-mr-2" }, [a("div", { class: `maz-flag maz-flag-${t.iso2.toLowerCase()}` })]), e.showCodeOnList ? a("span", { staticClass: "country-selector__calling-code maz-flex-fixed maz-text-muted", class: {
      "maz-text-muted-dark": t.isSelected
    } }, [e._v(" +" + e._s(t.dialCode) + " ")]) : e._e(), a("div", { staticClass: "maz-dots-text maz-flex-1 maz-text-left maz-text-color", class: {
      "maz-text-white": t.isSelected
    } }, [e._v(" " + e._s(t.name) + " ")]), a("div", { staticClass: "maz-dots-text maz-flex-1 maz-text-right maz-text-color", class: {
      "maz-text-white": t.isSelected
    }, staticStyle: { "max-width": "60px" } }, [e._v(" +" + e._s(t.dialCode) + " ")])])];
  } }], null, !1, 664249301) }), e.countryCode && !e.noFlags && !e.noCountrySelector ? a("button", { staticClass: "maz-phone-number-input__country-flag", attrs: { tabindex: "-1" }, on: { click: e.focusCountrySelector } }, [a("div", { class: `maz-flag maz-flag-${e.countryCode.toLowerCase()}` })]) : e._e(), a("MazInput", e._b({ ref: "PhoneNumberInput", staticClass: "input-phone-number maz-flex-1", class: {
    "has-border-radius": e.noCountrySelector
  }, attrs: { id: e.uniqueId ? `${e.uniqueId}_phone_number` : null, value: e.asYouTypeNumber, placeholder: e.placeholder || e.t.phoneNumberLabel, hint: e.hint || e.hintValue, disabled: e.disabled, readonly: e.lock, size: e.size, success: e.isValid && !e.noValidation, clearable: "", color: e.color }, on: { keydown: e.onKeydown, focus: function(t) {
    return e.$emit("focus", t);
  }, blur: e.onBlur, change: function(t) {
    return e.$emit("change", t);
  }, clear: function(t) {
    return e.$emit("clear", t);
  }, input: e.buildResults } }, "MazInput", e.$attrs, !1), [e._t("icon-left", null, { slot: "icon-left" }), e._t("icon-right", null, { slot: "icon-right" })], 2)], 1);
}, Tl = [], Ml = /* @__PURE__ */ be(
  Fl,
  Rl,
  Tl,
  !1,
  null,
  null,
  null,
  null
);
const $e = Ml.exports;
$e.install = (r) => {
  r.component($e.name, $e);
};
function Ol(r, e, a) {
  return e = Dl(e), e in r ? Object.defineProperty(r, e, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = a, r;
}
function Dl(r) {
  var e = Ll(r, "string");
  return typeof e == "symbol" ? e : String(e);
}
function Ll(r, e) {
  if (typeof r != "object" || r === null)
    return r;
  var a = r[Symbol.toPrimitive];
  if (a !== void 0) {
    var t = a.call(r, e || "default");
    if (typeof t != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
const Xr = "o21pay-address", Ul = [ie, ne, K, de, $e], Gl = (r, e = {}) => {
  Ul.forEach((a) => {
    r.component(a.name, a);
  });
};
class ze extends U {
  static get properties() {
    return {
      editor: {
        type: Boolean
      },
      size: {
        type: String
      },
      pro: {
        type: Boolean
      },
      icons: {
        type: Boolean
      },
      required: {
        type: Boolean
      },
      optimized: {
        type: Boolean
      },
      data: {
        type: Object
      }
    };
  }
  /**
   *
   *
   */
  constructor() {
    super(), this.countries = this.listCountries(), this.pro = !1, this.editor = !1, this.required = !1, this.icons = !1, this.optimized = !1, this.size = "small", this.object = void 0;
    const e = this;
    setTimeout(async function() {
      e.createVue();
    }, 200);
  }
  init() {
  }
  /**
   *
   *
   */
  builderProperties() {
    return [{
      type: "Switch",
      title: "Required",
      value: "required",
      style: ""
    }, {
      type: "Switch",
      title: "Optimized",
      value: "optimized",
      style: "float: left;"
    }, {
      type: "Switch",
      title: "Address Pro",
      value: "pro",
      style: "float: left;"
    }, {
      type: "Switch",
      title: "Icons",
      value: "icons",
      style: "margin-bottom: 10px"
    }, {
      type: "Size"
    }];
  }
  /**
   *
   *
   */
  validation() {
    if (!this.required)
      return !0;
    let e = this.getData();
    return !(!e || !e.name.length || !e.address.length || !e.zipcode.length || !e.city.length || !e.country.length || !e.phone.length || this.pro && (!e.company.length || !e.duns.length || !e.vat.length));
  }
  /**
   *
   *
   */
  getData() {
    if (!this.object)
      return null;
    let e = this.object.$data;
    if (!e)
      return null;
    const a = {
      name: e.name,
      address: e.address,
      zipcode: e.zipcode,
      city: e.city,
      country: e.cntry,
      phone: e.phone
    };
    return this.pro && (a.company = e.company, a.duns = e.duns, a.vatnumber = e.vatnumber), a;
  }
  /**
   *
   *
   */
  setData() {
    if (!this.object)
      return null;
    let e = this.object.$data;
    if (!e)
      return null;
    this.data && (e.name = this.data.name, e.name = this.data.name || "", e.address = this.data.address || "", e.zipcode = this.data.zipcode || "", e.city = this.data.city || "", e.country = this.data.country || "", e.phone = this.data.phone || "", this.pro && (e.company = this.data.company || "", e.duns = this.data.duns || "", e.vatnumber = this.data.vatnumber || ""));
  }
  /* createRenderRoot() {
    return this
  }*/
  /**
   *
   *
   */
  updated(e) {
    super.updated(e);
    const a = this.prepareDataProperties();
    this.object && (this.object.$data.props = a);
  }
  /**
   *
   *
   */
  async createVue() {
    const e = this;
    if (!e.renderRoot)
      return;
    const a = e.renderRoot.querySelector("#app");
    if (!a)
      return;
    Gl(Vue), this.object = new Vue({
      el: a,
      components: {},
      data: function() {
        return {
          visible: !1,
          resultPhone: void 0,
          options: e.countries,
          company: "",
          name: "",
          address: "",
          zipcode: "",
          city: "",
          cntry: "",
          phone: "",
          duns: "",
          vatnumber: "",
          props: e.prepareDataProperties()
        };
      },
      watch: {
        name(i, n) {
          e.getData();
        }
      }
    });
    let t = navigator.language.split("-")[0], o = this.countries.find((i) => i.iso === t);
    o && (this.object.$data.cntry = o.value), this.setData(), this.object.$data.visible = !0;
  }
  /**
   *
   *
   */
  listCountries() {
    const e = [];
    for (const a of Lt)
      e.push({
        label: a.name,
        value: a.name,
        iso: a.iso2.toLowerCase(),
        icon: a.iso2.toLowerCase()
      });
    return e;
  }
  /**
   *
   *
   */
  getIcon(e) {
    return this.icons ? e === "name" ? "person" : e === "@" ? "home" : e === "company" ? "apartment" : e === "duns" ? "inbox" : e === "vat" ? "123" : "" : "";
  }
  /**
   *
   *
   */
  prepareDataProperties() {
    let e = {};
    for (const a in ze.properties) {
      let t = this[a];
      if (console.log(a, t), a === "size")
        t === "small" ? t = "sm" : t === "medium" ? t = void 0 : t === "large" ? t = "lg" : t = "sm";
      else if (a === "icons") {
        e.icon_name = this.getIcon("name"), e.icon_addr = this.getIcon("@"), e.icon_company = this.getIcon("company"), e.icon_duns = this.getIcon("duns"), e.icon_vat = this.getIcon("vat");
        continue;
      }
      e[a] = t;
    }
    return e;
  }
  /**
   *
   *
   */
  render() {
    return L` <div>
      <div id="app">
        <div v-if="visible">
          <form>
            <div v-if="props.pro" class="m1">
              <maz-input
                v-model="company"
                placeholder="Company name"
                :left-icon-name="props.icon_company"
                :size="props.size"
                :readonly="props.editor"
                :required="props.required"
              />
            </div>
            <div class="m1">
              <maz-input
                v-model="name"
                placeholder="Your name"
                :left-icon-name="props.icon_name"
                :size="props.size"
                :readonly="props.editor"
                :required="props.required"
              />
            </div>
            <div class="m1">
              <maz-input
                v-model="address"
                placeholder="Address"
                :left-icon-name="props.icon_addr"
                :size="props.size"
                :readonly="props.editor"
                :required="props.required"
              />
            </div>

            <div v-if="props.optimized" class="m1" style="display:flex;">
              <div class="" style="width: 160px;">
                <maz-input
                  v-model="zipcode"
                  placeholder="Postal Code"
                  :size="props.size"
                  :readonly="props.editor"
                  :required="props.required"
                />
              </div>
              <div class="" style="padding-left: 5px; width: 40%; ">
                <maz-input
                  v-model="city"
                  placeholder="City"
                  :size="props.size"
                  :readonly="props.editor"
                  :required="props.required"
                />
              </div>
              <div style="padding-left: 5px; width: 60%;">
                <maz-select
                  v-model="cntry"
                  placeholder="Country"
                  :size="props.size"
                  :options="options"
                  :lock="props.editor"
                  v-slot="{ option, isSelected, icon }"
                  autocomplete="country"
                >
                </maz-select>
              </div>
            </div>
            <div v-else>
              <div class="m1" style="display:flex;">
                <div class="" style="width: 160px;">
                  <maz-input
                    v-model="zipcode"
                    placeholder="Postal Code"
                    :size="props.size"
                    :readonly="props.editor"
                    :required="props.required"
                  />
                </div>
                <div class="" style="padding-left: 5px; width: 100%">
                  <maz-input
                    v-model="city"
                    placeholder="City"
                    :size="props.size"
                    :readonly="props.editor"
                    :required="props.required"
                  />
                </div>
              </div>
              <maz-select
                class="m1"
                v-model="cntry"
                placeholder="Country"
                :size="props.size"
                :options="options"
                :lock="props.editor"
                v-slot="{ option, isSelected, icon }"
                autocomplete="country"
              >
              </maz-select>
            </div>
            <div class="m1">
              <maz-phone-number-input
                v-model="phone"
                no-validation
                :size="props.size"
                :required="props.required"
                :lock="props.editor"
                @update="resultPhone = $event"
              />
            </div>

            <div v-if="props.pro" class="m1">
              <maz-input
                v-model="duns"
                placeholder="DUNS Number"
                :left-icon-name="props.icon_duns"
                :size="props.size"
                :readonly="props.editor"
                :required="props.required"
              />
            </div>
            <div v-if="props.pro" class="m1">
              <maz-input
                v-model="vatnumber"
                placeholder="VAT Number"
                :left-icon-name="props.icon_vat"
                :size="props.size"
                :readonly="props.editor"
                :required="props.required"
              />
            </div>
          </form>
        </div>
      </div>
    </div>`;
  }
}
Ol(ze, "styles", [li, si]);
const ma = window.customElements;
ma && !ma.get(Xr) && ma.define(Xr, ze);
import("https://unpkg.com/vue@2/dist/vue.js");
window.O21PayComponents = {
  version: "0.6.2",
  components: [{
    name: "O21Pay",
    component: Ia,
    img: "https://assets.obvious21.com/o21pay-assets/O21-Pay-small.png",
    id: "o21pay"
  }, {
    name: "O21PayQR",
    title: "QR-Code",
    component: Ma,
    icon: "fa fa-qrcode",
    id: "o21pay-qr"
  }, {
    name: "O21PayDialog",
    component: Sa
  }, {
    name: "O21PayAddress",
    title: "Address",
    component: ze,
    icon: "fa fa-address-card",
    id: "address"
  }],
  waitLoaded: async function() {
    return await Promise.allSettled([
      customElements.whenDefined("o21pay-qr"),
      customElements.whenDefined("o21pay-dialog"),
      customElements.whenDefined("o21pay-payment"),
      //customElements.whenDefined("o21pay-change"),
      customElements.whenDefined("o21pay-address")
    ]), !0;
  }
};
