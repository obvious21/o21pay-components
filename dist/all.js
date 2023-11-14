import { svg as e } from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";
const a = window, r = a.ShadowRoot && (void 0 === a.ShadyCSS || a.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, t = Symbol(), o = /* @__PURE__ */ new WeakMap();
let i = class {
  constructor(e2, a2, r2) {
    if (this._$cssResult$ = true, r2 !== t)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e2, this.t = a2;
  }
  get styleSheet() {
    let e2 = this.o;
    const a2 = this.t;
    if (r && void 0 === e2) {
      const r2 = void 0 !== a2 && 1 === a2.length;
      r2 && (e2 = o.get(a2)), void 0 === e2 && ((this.o = e2 = new CSSStyleSheet()).replaceSync(this.cssText), r2 && o.set(a2, e2));
    }
    return e2;
  }
  toString() {
    return this.cssText;
  }
};
const n = (e2, ...a2) => {
  const r2 = 1 === e2.length ? e2[0] : a2.reduce((a3, r3, t2) => a3 + ((e3) => {
    if (true === e3._$cssResult$)
      return e3.cssText;
    if ("number" == typeof e3)
      return e3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + e3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r3) + e2[t2 + 1], e2[0]);
  return new i(r2, e2, t);
}, d = r ? (e2) => e2 : (e2) => e2 instanceof CSSStyleSheet ? ((e3) => {
  let a2 = "";
  for (const r2 of e3.cssRules)
    a2 += r2.cssText;
  return ((e4) => new i("string" == typeof e4 ? e4 : e4 + "", void 0, t))(a2);
})(e2) : e2;
var l;
const s = window, c = s.trustedTypes, m = c ? c.emptyScript : "", u = s.reactiveElementPolyfillSupport, p = { toAttribute(e2, a2) {
  switch (a2) {
    case Boolean:
      e2 = e2 ? m : null;
      break;
    case Object:
    case Array:
      e2 = null == e2 ? e2 : JSON.stringify(e2);
  }
  return e2;
}, fromAttribute(e2, a2) {
  let r2 = e2;
  switch (a2) {
    case Boolean:
      r2 = null !== e2;
      break;
    case Number:
      r2 = null === e2 ? null : Number(e2);
      break;
    case Object:
    case Array:
      try {
        r2 = JSON.parse(e2);
      } catch (e3) {
        r2 = null;
      }
  }
  return r2;
} }, h = (e2, a2) => a2 !== e2 && (a2 == a2 || e2 == e2), g = { attribute: true, type: String, converter: p, reflect: false, hasChanged: h }, b = "finalized";
let z = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
  }
  static addInitializer(e2) {
    var a2;
    this.finalize(), (null !== (a2 = this.h) && void 0 !== a2 ? a2 : this.h = []).push(e2);
  }
  static get observedAttributes() {
    this.finalize();
    const e2 = [];
    return this.elementProperties.forEach((a2, r2) => {
      const t2 = this._$Ep(r2, a2);
      void 0 !== t2 && (this._$Ev.set(t2, r2), e2.push(t2));
    }), e2;
  }
  static createProperty(e2, a2 = g) {
    if (a2.state && (a2.attribute = false), this.finalize(), this.elementProperties.set(e2, a2), !a2.noAccessor && !this.prototype.hasOwnProperty(e2)) {
      const r2 = "symbol" == typeof e2 ? Symbol() : "__" + e2, t2 = this.getPropertyDescriptor(e2, r2, a2);
      void 0 !== t2 && Object.defineProperty(this.prototype, e2, t2);
    }
  }
  static getPropertyDescriptor(e2, a2, r2) {
    return { get() {
      return this[a2];
    }, set(t2) {
      const o2 = this[e2];
      this[a2] = t2, this.requestUpdate(e2, o2, r2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(e2) {
    return this.elementProperties.get(e2) || g;
  }
  static finalize() {
    if (this.hasOwnProperty(b))
      return false;
    this[b] = true;
    const e2 = Object.getPrototypeOf(this);
    if (e2.finalize(), void 0 !== e2.h && (this.h = [...e2.h]), this.elementProperties = new Map(e2.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const e3 = this.properties, a2 = [...Object.getOwnPropertyNames(e3), ...Object.getOwnPropertySymbols(e3)];
      for (const r2 of a2)
        this.createProperty(r2, e3[r2]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(e2) {
    const a2 = [];
    if (Array.isArray(e2)) {
      const r2 = new Set(e2.flat(1 / 0).reverse());
      for (const e3 of r2)
        a2.unshift(d(e3));
    } else
      void 0 !== e2 && a2.push(d(e2));
    return a2;
  }
  static _$Ep(e2, a2) {
    const r2 = a2.attribute;
    return false === r2 ? void 0 : "string" == typeof r2 ? r2 : "string" == typeof e2 ? e2.toLowerCase() : void 0;
  }
  _$Eu() {
    var e2;
    this._$E_ = new Promise((e3) => this.enableUpdating = e3), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (e2 = this.constructor.h) || void 0 === e2 || e2.forEach((e3) => e3(this));
  }
  addController(e2) {
    var a2, r2;
    (null !== (a2 = this._$ES) && void 0 !== a2 ? a2 : this._$ES = []).push(e2), void 0 !== this.renderRoot && this.isConnected && (null === (r2 = e2.hostConnected) || void 0 === r2 || r2.call(e2));
  }
  removeController(e2) {
    var a2;
    null === (a2 = this._$ES) || void 0 === a2 || a2.splice(this._$ES.indexOf(e2) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((e2, a2) => {
      this.hasOwnProperty(a2) && (this._$Ei.set(a2, this[a2]), delete this[a2]);
    });
  }
  createRenderRoot() {
    var e2;
    const t2 = null !== (e2 = this.shadowRoot) && void 0 !== e2 ? e2 : this.attachShadow(this.constructor.shadowRootOptions);
    return ((e3, t3) => {
      r ? e3.adoptedStyleSheets = t3.map((e4) => e4 instanceof CSSStyleSheet ? e4 : e4.styleSheet) : t3.forEach((r2) => {
        const t4 = document.createElement("style"), o2 = a.litNonce;
        void 0 !== o2 && t4.setAttribute("nonce", o2), t4.textContent = r2.cssText, e3.appendChild(t4);
      });
    })(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    var e2;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (e2 = this._$ES) || void 0 === e2 || e2.forEach((e3) => {
      var a2;
      return null === (a2 = e3.hostConnected) || void 0 === a2 ? void 0 : a2.call(e3);
    });
  }
  enableUpdating(e2) {
  }
  disconnectedCallback() {
    var e2;
    null === (e2 = this._$ES) || void 0 === e2 || e2.forEach((e3) => {
      var a2;
      return null === (a2 = e3.hostDisconnected) || void 0 === a2 ? void 0 : a2.call(e3);
    });
  }
  attributeChangedCallback(e2, a2, r2) {
    this._$AK(e2, r2);
  }
  _$EO(e2, a2, r2 = g) {
    var t2;
    const o2 = this.constructor._$Ep(e2, r2);
    if (void 0 !== o2 && true === r2.reflect) {
      const i2 = (void 0 !== (null === (t2 = r2.converter) || void 0 === t2 ? void 0 : t2.toAttribute) ? r2.converter : p).toAttribute(a2, r2.type);
      this._$El = e2, null == i2 ? this.removeAttribute(o2) : this.setAttribute(o2, i2), this._$El = null;
    }
  }
  _$AK(e2, a2) {
    var r2;
    const t2 = this.constructor, o2 = t2._$Ev.get(e2);
    if (void 0 !== o2 && this._$El !== o2) {
      const e3 = t2.getPropertyOptions(o2), i2 = "function" == typeof e3.converter ? { fromAttribute: e3.converter } : void 0 !== (null === (r2 = e3.converter) || void 0 === r2 ? void 0 : r2.fromAttribute) ? e3.converter : p;
      this._$El = o2, this[o2] = i2.fromAttribute(a2, e3.type), this._$El = null;
    }
  }
  requestUpdate(e2, a2, r2) {
    let t2 = true;
    void 0 !== e2 && (((r2 = r2 || this.constructor.getPropertyOptions(e2)).hasChanged || h)(this[e2], a2) ? (this._$AL.has(e2) || this._$AL.set(e2, a2), true === r2.reflect && this._$El !== e2 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e2, r2))) : t2 = false), !this.isUpdatePending && t2 && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = true;
    try {
      await this._$E_;
    } catch (e3) {
      Promise.reject(e3);
    }
    const e2 = this.scheduleUpdate();
    return null != e2 && await e2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e2;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((e3, a3) => this[a3] = e3), this._$Ei = void 0);
    let a2 = false;
    const r2 = this._$AL;
    try {
      a2 = this.shouldUpdate(r2), a2 ? (this.willUpdate(r2), null === (e2 = this._$ES) || void 0 === e2 || e2.forEach((e3) => {
        var a3;
        return null === (a3 = e3.hostUpdate) || void 0 === a3 ? void 0 : a3.call(e3);
      }), this.update(r2)) : this._$Ek();
    } catch (e3) {
      throw a2 = false, this._$Ek(), e3;
    }
    a2 && this._$AE(r2);
  }
  willUpdate(e2) {
  }
  _$AE(e2) {
    var a2;
    null === (a2 = this._$ES) || void 0 === a2 || a2.forEach((e3) => {
      var a3;
      return null === (a3 = e3.hostUpdated) || void 0 === a3 ? void 0 : a3.call(e3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(e2)), this.updated(e2);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(e2) {
    return true;
  }
  update(e2) {
    void 0 !== this._$EC && (this._$EC.forEach((e3, a2) => this._$EO(a2, this[a2], e3)), this._$EC = void 0), this._$Ek();
  }
  updated(e2) {
  }
  firstUpdated(e2) {
  }
};
var f;
z[b] = true, z.elementProperties = /* @__PURE__ */ new Map(), z.elementStyles = [], z.shadowRootOptions = { mode: "open" }, null == u || u({ ReactiveElement: z }), (null !== (l = s.reactiveElementVersions) && void 0 !== l ? l : s.reactiveElementVersions = []).push("1.6.3");
const v = window, y = v.trustedTypes, k = y ? y.createPolicy("lit-html", { createHTML: (e2) => e2 }) : void 0, x = "$lit$", w = `lit$${(Math.random() + "").slice(9)}$`, $ = "?" + w, _ = `<${$}>`, C = document, E = () => C.createComment(""), A = (e2) => null === e2 || "object" != typeof e2 && "function" != typeof e2, S = Array.isArray, N = "[ 	\n\f\r]", I = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, P = /-->/g, B = />/g, M = RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), O = /'/g, R = /"/g, L = /^(?:script|style|textarea|title)$/i, T = ((e2) => (a2, ...r2) => ({ _$litType$: e2, strings: a2, values: r2 }))(1), D = Symbol.for("lit-noChange"), F = Symbol.for("lit-nothing"), U = /* @__PURE__ */ new WeakMap(), G = C.createTreeWalker(C, 129, null, false);
function j(e2, a2) {
  if (!Array.isArray(e2) || !e2.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== k ? k.createHTML(a2) : a2;
}
const Y = (e2, a2) => {
  const r2 = e2.length - 1, t2 = [];
  let o2, i2 = 2 === a2 ? "<svg>" : "", n2 = I;
  for (let a3 = 0; a3 < r2; a3++) {
    const r3 = e2[a3];
    let d2, l2, s2 = -1, c2 = 0;
    for (; c2 < r3.length && (n2.lastIndex = c2, l2 = n2.exec(r3), null !== l2); )
      c2 = n2.lastIndex, n2 === I ? "!--" === l2[1] ? n2 = P : void 0 !== l2[1] ? n2 = B : void 0 !== l2[2] ? (L.test(l2[2]) && (o2 = RegExp("</" + l2[2], "g")), n2 = M) : void 0 !== l2[3] && (n2 = M) : n2 === M ? ">" === l2[0] ? (n2 = null != o2 ? o2 : I, s2 = -1) : void 0 === l2[1] ? s2 = -2 : (s2 = n2.lastIndex - l2[2].length, d2 = l2[1], n2 = void 0 === l2[3] ? M : '"' === l2[3] ? R : O) : n2 === R || n2 === O ? n2 = M : n2 === P || n2 === B ? n2 = I : (n2 = M, o2 = void 0);
    const m2 = n2 === M && e2[a3 + 1].startsWith("/>") ? " " : "";
    i2 += n2 === I ? r3 + _ : s2 >= 0 ? (t2.push(d2), r3.slice(0, s2) + x + r3.slice(s2) + w + m2) : r3 + w + (-2 === s2 ? (t2.push(void 0), a3) : m2);
  }
  return [j(e2, i2 + (e2[r2] || "<?>") + (2 === a2 ? "</svg>" : "")), t2];
};
class V {
  constructor({ strings: e2, _$litType$: a2 }, r2) {
    let t2;
    this.parts = [];
    let o2 = 0, i2 = 0;
    const n2 = e2.length - 1, d2 = this.parts, [l2, s2] = Y(e2, a2);
    if (this.el = V.createElement(l2, r2), G.currentNode = this.el.content, 2 === a2) {
      const e3 = this.el.content, a3 = e3.firstChild;
      a3.remove(), e3.append(...a3.childNodes);
    }
    for (; null !== (t2 = G.nextNode()) && d2.length < n2; ) {
      if (1 === t2.nodeType) {
        if (t2.hasAttributes()) {
          const e3 = [];
          for (const a3 of t2.getAttributeNames())
            if (a3.endsWith(x) || a3.startsWith(w)) {
              const r3 = s2[i2++];
              if (e3.push(a3), void 0 !== r3) {
                const e4 = t2.getAttribute(r3.toLowerCase() + x).split(w), a4 = /([.?@])?(.*)/.exec(r3);
                d2.push({ type: 1, index: o2, name: a4[2], strings: e4, ctor: "." === a4[1] ? q : "?" === a4[1] ? Z : "@" === a4[1] ? X : J });
              } else
                d2.push({ type: 6, index: o2 });
            }
          for (const a3 of e3)
            t2.removeAttribute(a3);
        }
        if (L.test(t2.tagName)) {
          const e3 = t2.textContent.split(w), a3 = e3.length - 1;
          if (a3 > 0) {
            t2.textContent = y ? y.emptyScript : "";
            for (let r3 = 0; r3 < a3; r3++)
              t2.append(e3[r3], E()), G.nextNode(), d2.push({ type: 2, index: ++o2 });
            t2.append(e3[a3], E());
          }
        }
      } else if (8 === t2.nodeType)
        if (t2.data === $)
          d2.push({ type: 2, index: o2 });
        else {
          let e3 = -1;
          for (; -1 !== (e3 = t2.data.indexOf(w, e3 + 1)); )
            d2.push({ type: 7, index: o2 }), e3 += w.length - 1;
        }
      o2++;
    }
  }
  static createElement(e2, a2) {
    const r2 = C.createElement("template");
    return r2.innerHTML = e2, r2;
  }
}
function H(e2, a2, r2 = e2, t2) {
  var o2, i2, n2, d2;
  if (a2 === D)
    return a2;
  let l2 = void 0 !== t2 ? null === (o2 = r2._$Co) || void 0 === o2 ? void 0 : o2[t2] : r2._$Cl;
  const s2 = A(a2) ? void 0 : a2._$litDirective$;
  return (null == l2 ? void 0 : l2.constructor) !== s2 && (null === (i2 = null == l2 ? void 0 : l2._$AO) || void 0 === i2 || i2.call(l2, false), void 0 === s2 ? l2 = void 0 : (l2 = new s2(e2), l2._$AT(e2, r2, t2)), void 0 !== t2 ? (null !== (n2 = (d2 = r2)._$Co) && void 0 !== n2 ? n2 : d2._$Co = [])[t2] = l2 : r2._$Cl = l2), void 0 !== l2 && (a2 = H(e2, l2._$AS(e2, a2.values), l2, t2)), a2;
}
class Q {
  constructor(e2, a2) {
    this._$AV = [], this._$AN = void 0, this._$AD = e2, this._$AM = a2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e2) {
    var a2;
    const { el: { content: r2 }, parts: t2 } = this._$AD, o2 = (null !== (a2 = null == e2 ? void 0 : e2.creationScope) && void 0 !== a2 ? a2 : C).importNode(r2, true);
    G.currentNode = o2;
    let i2 = G.nextNode(), n2 = 0, d2 = 0, l2 = t2[0];
    for (; void 0 !== l2; ) {
      if (n2 === l2.index) {
        let a3;
        2 === l2.type ? a3 = new K(i2, i2.nextSibling, this, e2) : 1 === l2.type ? a3 = new l2.ctor(i2, l2.name, l2.strings, this, e2) : 6 === l2.type && (a3 = new ee(i2, this, e2)), this._$AV.push(a3), l2 = t2[++d2];
      }
      n2 !== (null == l2 ? void 0 : l2.index) && (i2 = G.nextNode(), n2++);
    }
    return G.currentNode = C, o2;
  }
  v(e2) {
    let a2 = 0;
    for (const r2 of this._$AV)
      void 0 !== r2 && (void 0 !== r2.strings ? (r2._$AI(e2, r2, a2), a2 += r2.strings.length - 2) : r2._$AI(e2[a2])), a2++;
  }
}
class K {
  constructor(e2, a2, r2, t2) {
    var o2;
    this.type = 2, this._$AH = F, this._$AN = void 0, this._$AA = e2, this._$AB = a2, this._$AM = r2, this.options = t2, this._$Cp = null === (o2 = null == t2 ? void 0 : t2.isConnected) || void 0 === o2 || o2;
  }
  get _$AU() {
    var e2, a2;
    return null !== (a2 = null === (e2 = this._$AM) || void 0 === e2 ? void 0 : e2._$AU) && void 0 !== a2 ? a2 : this._$Cp;
  }
  get parentNode() {
    let e2 = this._$AA.parentNode;
    const a2 = this._$AM;
    return void 0 !== a2 && 11 === (null == e2 ? void 0 : e2.nodeType) && (e2 = a2.parentNode), e2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e2, a2 = this) {
    e2 = H(this, e2, a2), A(e2) ? e2 === F || null == e2 || "" === e2 ? (this._$AH !== F && this._$AR(), this._$AH = F) : e2 !== this._$AH && e2 !== D && this._(e2) : void 0 !== e2._$litType$ ? this.g(e2) : void 0 !== e2.nodeType ? this.$(e2) : ((e3) => S(e3) || "function" == typeof (null == e3 ? void 0 : e3[Symbol.iterator]))(e2) ? this.T(e2) : this._(e2);
  }
  k(e2) {
    return this._$AA.parentNode.insertBefore(e2, this._$AB);
  }
  $(e2) {
    this._$AH !== e2 && (this._$AR(), this._$AH = this.k(e2));
  }
  _(e2) {
    this._$AH !== F && A(this._$AH) ? this._$AA.nextSibling.data = e2 : this.$(C.createTextNode(e2)), this._$AH = e2;
  }
  g(e2) {
    var a2;
    const { values: r2, _$litType$: t2 } = e2, o2 = "number" == typeof t2 ? this._$AC(e2) : (void 0 === t2.el && (t2.el = V.createElement(j(t2.h, t2.h[0]), this.options)), t2);
    if ((null === (a2 = this._$AH) || void 0 === a2 ? void 0 : a2._$AD) === o2)
      this._$AH.v(r2);
    else {
      const e3 = new Q(o2, this), a3 = e3.u(this.options);
      e3.v(r2), this.$(a3), this._$AH = e3;
    }
  }
  _$AC(e2) {
    let a2 = U.get(e2.strings);
    return void 0 === a2 && U.set(e2.strings, a2 = new V(e2)), a2;
  }
  T(e2) {
    S(this._$AH) || (this._$AH = [], this._$AR());
    const a2 = this._$AH;
    let r2, t2 = 0;
    for (const o2 of e2)
      t2 === a2.length ? a2.push(r2 = new K(this.k(E()), this.k(E()), this, this.options)) : r2 = a2[t2], r2._$AI(o2), t2++;
    t2 < a2.length && (this._$AR(r2 && r2._$AB.nextSibling, t2), a2.length = t2);
  }
  _$AR(e2 = this._$AA.nextSibling, a2) {
    var r2;
    for (null === (r2 = this._$AP) || void 0 === r2 || r2.call(this, false, true, a2); e2 && e2 !== this._$AB; ) {
      const a3 = e2.nextSibling;
      e2.remove(), e2 = a3;
    }
  }
  setConnected(e2) {
    var a2;
    void 0 === this._$AM && (this._$Cp = e2, null === (a2 = this._$AP) || void 0 === a2 || a2.call(this, e2));
  }
}
class J {
  constructor(e2, a2, r2, t2, o2) {
    this.type = 1, this._$AH = F, this._$AN = void 0, this.element = e2, this.name = a2, this._$AM = t2, this.options = o2, r2.length > 2 || "" !== r2[0] || "" !== r2[1] ? (this._$AH = Array(r2.length - 1).fill(new String()), this.strings = r2) : this._$AH = F;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e2, a2 = this, r2, t2) {
    const o2 = this.strings;
    let i2 = false;
    if (void 0 === o2)
      e2 = H(this, e2, a2, 0), i2 = !A(e2) || e2 !== this._$AH && e2 !== D, i2 && (this._$AH = e2);
    else {
      const t3 = e2;
      let n2, d2;
      for (e2 = o2[0], n2 = 0; n2 < o2.length - 1; n2++)
        d2 = H(this, t3[r2 + n2], a2, n2), d2 === D && (d2 = this._$AH[n2]), i2 || (i2 = !A(d2) || d2 !== this._$AH[n2]), d2 === F ? e2 = F : e2 !== F && (e2 += (null != d2 ? d2 : "") + o2[n2 + 1]), this._$AH[n2] = d2;
    }
    i2 && !t2 && this.j(e2);
  }
  j(e2) {
    e2 === F ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e2 ? e2 : "");
  }
}
class q extends J {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e2) {
    this.element[this.name] = e2 === F ? void 0 : e2;
  }
}
const W = y ? y.emptyScript : "";
class Z extends J {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e2) {
    e2 && e2 !== F ? this.element.setAttribute(this.name, W) : this.element.removeAttribute(this.name);
  }
}
class X extends J {
  constructor(e2, a2, r2, t2, o2) {
    super(e2, a2, r2, t2, o2), this.type = 5;
  }
  _$AI(e2, a2 = this) {
    var r2;
    if ((e2 = null !== (r2 = H(this, e2, a2, 0)) && void 0 !== r2 ? r2 : F) === D)
      return;
    const t2 = this._$AH, o2 = e2 === F && t2 !== F || e2.capture !== t2.capture || e2.once !== t2.once || e2.passive !== t2.passive, i2 = e2 !== F && (t2 === F || o2);
    o2 && this.element.removeEventListener(this.name, this, t2), i2 && this.element.addEventListener(this.name, this, e2), this._$AH = e2;
  }
  handleEvent(e2) {
    var a2, r2;
    "function" == typeof this._$AH ? this._$AH.call(null !== (r2 = null === (a2 = this.options) || void 0 === a2 ? void 0 : a2.host) && void 0 !== r2 ? r2 : this.element, e2) : this._$AH.handleEvent(e2);
  }
}
class ee {
  constructor(e2, a2, r2) {
    this.element = e2, this.type = 6, this._$AN = void 0, this._$AM = a2, this.options = r2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e2) {
    H(this, e2);
  }
}
const ae = v.litHtmlPolyfillSupport;
null == ae || ae(V, K), (null !== (f = v.litHtmlVersions) && void 0 !== f ? f : v.litHtmlVersions = []).push("2.8.0");
var re, te;
class oe extends z {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e2, a2;
    const r2 = super.createRenderRoot();
    return null !== (e2 = (a2 = this.renderOptions).renderBefore) && void 0 !== e2 || (a2.renderBefore = r2.firstChild), r2;
  }
  update(e2) {
    const a2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e2), this._$Do = ((e3, a3, r2) => {
      var t2, o2;
      const i2 = null !== (t2 = null == r2 ? void 0 : r2.renderBefore) && void 0 !== t2 ? t2 : a3;
      let n2 = i2._$litPart$;
      if (void 0 === n2) {
        const e4 = null !== (o2 = null == r2 ? void 0 : r2.renderBefore) && void 0 !== o2 ? o2 : null;
        i2._$litPart$ = n2 = new K(a3.insertBefore(E(), e4), e4, void 0, null != r2 ? r2 : {});
      }
      return n2._$AI(e3), n2;
    })(a2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e2;
    super.connectedCallback(), null === (e2 = this._$Do) || void 0 === e2 || e2.setConnected(true);
  }
  disconnectedCallback() {
    var e2;
    super.disconnectedCallback(), null === (e2 = this._$Do) || void 0 === e2 || e2.setConnected(false);
  }
  render() {
    return D;
  }
}
oe.finalized = true, oe._$litElement$ = true, null === (re = globalThis.litElementHydrateSupport) || void 0 === re || re.call(globalThis, { LitElement: oe });
const ie = globalThis.litElementPolyfillSupport;
null == ie || ie({ LitElement: oe }), (null !== (te = globalThis.litElementVersions) && void 0 !== te ? te : globalThis.litElementVersions = []).push("3.3.3");
const ne = n`
  input:read-only {
    background-color: #f5f7fa;
  }
  input:focus {
    outline: 2px solid lightgray;
    border: 0px !important;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .o21pay-payment-container {
    min-width: 372px;
  }
  .o21pay-payment-full {
    display: none;
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
    abackground-image: url('https://assets.obvious21.com/o21pay-assets/o21pay-button.png');
    abackground-repeat: no-repeat;
    background-size: auto 25px;
    background-position: 22px 8px;
    background-color: #68d18d;
    border-color: #68d18d;
    color: white;
    font-weight: 400;
    vertical-align: middle;
    border: 1px solid transparent;
    background-position: top 10px;
    font-size: 16px;
    line-height: 1.5;
    height: 40px;
    width: 140px;
    border-radius: 20px;
    margin-bottom: 4px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    cursor: pointer !important;
  }
  .o21pay-button:focus {
    outline: 0px solid lightgray !important;
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
  #pay {
    display: none;
    text-align: center;
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
    content: ' ';
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
`, de = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]], BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "[24-689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]]], BL: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "10(?:10|9[56])|2[0-57-9](?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11], [["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0(4(?:[14]4|56)|[579])?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|63\\d{6}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-79])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-2]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "[56]94\\d{6}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([3-9]\\d{6})$|1", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "9008\\d{3}|(?:[2-467]\\d\\d|510|862)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]], "8", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29[1289]|389)", "529(?:1[1-46-9]|2[013-8]|90)|5(?:298|389)[0-46-9]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5293[01]\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|9[0-289])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[0189]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]|8[0-3]))\\d{6}"], ["80\\d{7}"], ["89\\d{7}"], 0, 0, 0, 0, ["592(?:4[0-2]|93)\\d{4}"]]], MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], MQ: ["596", "00", "596\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "1(?:(?:[27]2|44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[047]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]], NU: ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "[45]\\d{5}|(?:708|80\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-5]))\\d{4}"], ["69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-27]|8[0-8]|9[0-479]))\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-5]|76(?:2[27]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[2378]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-8]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[04]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "[1-6]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["5056(?:[0-35-9]\\d|4[46])\\d{4}|(?:4722|505[2-57-9]|983[29])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[0-2]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "(?:0004|4)\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [7, 8, 10, 13], [["(\\d{3})(\\d{4})", "$1 $2", ["405|8|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "810", "200\\d{6}|(?:33|[5-79]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|5[0-4]|6\\d|[78]0)\\d{4}"], ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"], ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "[0-36-9]\\d{8}", [9], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-36-9]"]]], 0, 0, 0, 0, 0, 0, [0, ["[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], 883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[013-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
function le(e2, a2) {
  var r2 = Array.prototype.slice.call(a2);
  return r2.push(de), e2.apply(this, r2);
}
function se(e2) {
  return se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, se(e2);
}
function ce(e2, a2) {
  for (var r2 = 0; r2 < a2.length; r2++) {
    var t2 = a2[r2];
    t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(e2, t2.key, t2);
  }
}
function me(e2) {
  var a2 = ge();
  return function() {
    var r2, t2 = ze(e2);
    if (a2) {
      var o2 = ze(this).constructor;
      r2 = Reflect.construct(t2, arguments, o2);
    } else
      r2 = t2.apply(this, arguments);
    return function(e3, a3) {
      if (a3 && ("object" === se(a3) || "function" == typeof a3))
        return a3;
      if (void 0 !== a3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return ue(e3);
    }(this, r2);
  };
}
function ue(e2) {
  if (void 0 === e2)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e2;
}
function pe(e2) {
  var a2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return pe = function(e3) {
    if (null === e3 || (r2 = e3, -1 === Function.toString.call(r2).indexOf("[native code]")))
      return e3;
    var r2;
    if ("function" != typeof e3)
      throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== a2) {
      if (a2.has(e3))
        return a2.get(e3);
      a2.set(e3, t2);
    }
    function t2() {
      return he(e3, arguments, ze(this).constructor);
    }
    return t2.prototype = Object.create(e3.prototype, { constructor: { value: t2, enumerable: false, writable: true, configurable: true } }), be(t2, e3);
  }, pe(e2);
}
function he(e2, a2, r2) {
  return he = ge() ? Reflect.construct : function(e3, a3, r3) {
    var t2 = [null];
    t2.push.apply(t2, a3);
    var o2 = new (Function.bind.apply(e3, t2))();
    return r3 && be(o2, r3.prototype), o2;
  }, he.apply(null, arguments);
}
function ge() {
  if ("undefined" == typeof Reflect || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if ("function" == typeof Proxy)
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch (e2) {
    return false;
  }
}
function be(e2, a2) {
  return be = Object.setPrototypeOf || function(e3, a3) {
    return e3.__proto__ = a3, e3;
  }, be(e2, a2);
}
function ze(e2) {
  return ze = Object.setPrototypeOf ? Object.getPrototypeOf : function(e3) {
    return e3.__proto__ || Object.getPrototypeOf(e3);
  }, ze(e2);
}
var fe = function(e2) {
  !function(e3, a3) {
    if ("function" != typeof a3 && null !== a3)
      throw new TypeError("Super expression must either be null or a function");
    e3.prototype = Object.create(a3 && a3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), Object.defineProperty(e3, "prototype", { writable: false }), a3 && be(e3, a3);
  }(i2, pe(Error));
  var a2, r2, t2, o2 = me(i2);
  function i2(e3) {
    var a3;
    return function(e4, a4) {
      if (!(e4 instanceof a4))
        throw new TypeError("Cannot call a class as a function");
    }(this, i2), a3 = o2.call(this, e3), Object.setPrototypeOf(ue(a3), i2.prototype), a3.name = a3.constructor.name, a3;
  }
  return a2 = i2, r2 && ce(a2.prototype, r2), t2 && ce(a2, t2), Object.defineProperty(a2, "prototype", { writable: false }), a2;
}(), ve = 2, ye = 17, ke = 3, xe = "0-9０-９٠-٩۰-۹", we = "".concat("-‐-―−ー－").concat("／/").concat("．.").concat("  ­​⁠　").concat("()（）［］\\[\\]").concat("~⁓∼～");
function $e(e2, a2) {
  e2 = e2.split("-"), a2 = a2.split("-");
  for (var r2 = e2[0].split("."), t2 = a2[0].split("."), o2 = 0; o2 < 3; o2++) {
    var i2 = Number(r2[o2]), n2 = Number(t2[o2]);
    if (i2 > n2)
      return 1;
    if (n2 > i2)
      return -1;
    if (!isNaN(i2) && isNaN(n2))
      return 1;
    if (isNaN(i2) && !isNaN(n2))
      return -1;
  }
  return e2[1] && a2[1] ? e2[1] > a2[1] ? 1 : e2[1] < a2[1] ? -1 : 0 : !e2[1] && a2[1] ? 1 : e2[1] && !a2[1] ? -1 : 0;
}
function _e(e2) {
  return _e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, _e(e2);
}
function Ce(e2, a2) {
  if (!(e2 instanceof a2))
    throw new TypeError("Cannot call a class as a function");
}
function Ee(e2, a2) {
  for (var r2 = 0; r2 < a2.length; r2++) {
    var t2 = a2[r2];
    t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(e2, t2.key, t2);
  }
}
function Ae(e2, a2, r2) {
  return a2 && Ee(e2.prototype, a2), r2 && Ee(e2, r2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
}
var Se = " ext. ", Ne = /^\d+$/, Ie = function() {
  function e2(a2) {
    Ce(this, e2), function(e3) {
      if (!e3)
        throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
      if (!Le(e3) || !Le(e3.countries))
        throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(Le(e3) ? "an object of shape: { " + Object.keys(e3).join(", ") + " }" : "a " + Te(e3) + ": " + e3, "."));
    }(a2), this.metadata = a2, Fe.call(this, a2);
  }
  return Ae(e2, [{ key: "getCountries", value: function() {
    return Object.keys(this.metadata.countries).filter(function(e3) {
      return "001" !== e3;
    });
  } }, { key: "getCountryMetadata", value: function(e3) {
    return this.metadata.countries[e3];
  } }, { key: "nonGeographic", value: function() {
    if (!(this.v1 || this.v2 || this.v3))
      return this.metadata.nonGeographic || this.metadata.nonGeographical;
  } }, { key: "hasCountry", value: function(e3) {
    return void 0 !== this.getCountryMetadata(e3);
  } }, { key: "hasCallingCode", value: function(e3) {
    if (this.getCountryCodesForCallingCode(e3))
      return true;
    if (this.nonGeographic()) {
      if (this.nonGeographic()[e3])
        return true;
    } else {
      var a2 = this.countryCallingCodes()[e3];
      if (a2 && 1 === a2.length && "001" === a2[0])
        return true;
    }
  } }, { key: "isNonGeographicCallingCode", value: function(e3) {
    return this.nonGeographic() ? !!this.nonGeographic()[e3] : !this.getCountryCodesForCallingCode(e3);
  } }, { key: "country", value: function(e3) {
    return this.selectNumberingPlan(e3);
  } }, { key: "selectNumberingPlan", value: function(e3, a2) {
    if (e3 && Ne.test(e3) && (a2 = e3, e3 = null), e3 && "001" !== e3) {
      if (!this.hasCountry(e3))
        throw new Error("Unknown country: ".concat(e3));
      this.numberingPlan = new Pe(this.getCountryMetadata(e3), this);
    } else if (a2) {
      if (!this.hasCallingCode(a2))
        throw new Error("Unknown calling code: ".concat(a2));
      this.numberingPlan = new Pe(this.getNumberingPlanMetadata(a2), this);
    } else
      this.numberingPlan = void 0;
    return this;
  } }, { key: "getCountryCodesForCallingCode", value: function(e3) {
    var a2 = this.countryCallingCodes()[e3];
    if (a2) {
      if (1 === a2.length && 3 === a2[0].length)
        return;
      return a2;
    }
  } }, { key: "getCountryCodeForCallingCode", value: function(e3) {
    var a2 = this.getCountryCodesForCallingCode(e3);
    if (a2)
      return a2[0];
  } }, { key: "getNumberingPlanMetadata", value: function(e3) {
    var a2 = this.getCountryCodeForCallingCode(e3);
    if (a2)
      return this.getCountryMetadata(a2);
    if (this.nonGeographic()) {
      var r2 = this.nonGeographic()[e3];
      if (r2)
        return r2;
    } else {
      var t2 = this.countryCallingCodes()[e3];
      if (t2 && 1 === t2.length && "001" === t2[0])
        return this.metadata.countries["001"];
    }
  } }, { key: "countryCallingCode", value: function() {
    return this.numberingPlan.callingCode();
  } }, { key: "IDDPrefix", value: function() {
    return this.numberingPlan.IDDPrefix();
  } }, { key: "defaultIDDPrefix", value: function() {
    return this.numberingPlan.defaultIDDPrefix();
  } }, { key: "nationalNumberPattern", value: function() {
    return this.numberingPlan.nationalNumberPattern();
  } }, { key: "possibleLengths", value: function() {
    return this.numberingPlan.possibleLengths();
  } }, { key: "formats", value: function() {
    return this.numberingPlan.formats();
  } }, { key: "nationalPrefixForParsing", value: function() {
    return this.numberingPlan.nationalPrefixForParsing();
  } }, { key: "nationalPrefixTransformRule", value: function() {
    return this.numberingPlan.nationalPrefixTransformRule();
  } }, { key: "leadingDigits", value: function() {
    return this.numberingPlan.leadingDigits();
  } }, { key: "hasTypes", value: function() {
    return this.numberingPlan.hasTypes();
  } }, { key: "type", value: function(e3) {
    return this.numberingPlan.type(e3);
  } }, { key: "ext", value: function() {
    return this.numberingPlan.ext();
  } }, { key: "countryCallingCodes", value: function() {
    return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
  } }, { key: "chooseCountryByCountryCallingCode", value: function(e3) {
    return this.selectNumberingPlan(e3);
  } }, { key: "hasSelectedNumberingPlan", value: function() {
    return void 0 !== this.numberingPlan;
  } }]), e2;
}(), Pe = function() {
  function e2(a2, r2) {
    Ce(this, e2), this.globalMetadataObject = r2, this.metadata = a2, Fe.call(this, r2.metadata);
  }
  return Ae(e2, [{ key: "callingCode", value: function() {
    return this.metadata[0];
  } }, { key: "getDefaultCountryMetadataForRegion", value: function() {
    return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
  } }, { key: "IDDPrefix", value: function() {
    if (!this.v1 && !this.v2)
      return this.metadata[1];
  } }, { key: "defaultIDDPrefix", value: function() {
    if (!this.v1 && !this.v2)
      return this.metadata[12];
  } }, { key: "nationalNumberPattern", value: function() {
    return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
  } }, { key: "possibleLengths", value: function() {
    if (!this.v1)
      return this.metadata[this.v2 ? 2 : 3];
  } }, { key: "_getFormats", value: function(e3) {
    return e3[this.v1 ? 2 : this.v2 ? 3 : 4];
  } }, { key: "formats", value: function() {
    var e3 = this, a2 = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
    return a2.map(function(a3) {
      return new Be(a3, e3);
    });
  } }, { key: "nationalPrefix", value: function() {
    return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
  } }, { key: "_getNationalPrefixFormattingRule", value: function(e3) {
    return e3[this.v1 ? 4 : this.v2 ? 5 : 6];
  } }, { key: "nationalPrefixFormattingRule", value: function() {
    return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
  } }, { key: "_nationalPrefixForParsing", value: function() {
    return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
  } }, { key: "nationalPrefixForParsing", value: function() {
    return this._nationalPrefixForParsing() || this.nationalPrefix();
  } }, { key: "nationalPrefixTransformRule", value: function() {
    return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
  } }, { key: "_getNationalPrefixIsOptionalWhenFormatting", value: function() {
    return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
  } }, { key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat", value: function() {
    return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
  } }, { key: "leadingDigits", value: function() {
    return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
  } }, { key: "types", value: function() {
    return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
  } }, { key: "hasTypes", value: function() {
    return (!this.types() || 0 !== this.types().length) && !!this.types();
  } }, { key: "type", value: function(e3) {
    if (this.hasTypes() && Re(this.types(), e3))
      return new Oe(Re(this.types(), e3), this);
  } }, { key: "ext", value: function() {
    return this.v1 || this.v2 ? Se : this.metadata[13] || Se;
  } }]), e2;
}(), Be = function() {
  function e2(a2, r2) {
    Ce(this, e2), this._format = a2, this.metadata = r2;
  }
  return Ae(e2, [{ key: "pattern", value: function() {
    return this._format[0];
  } }, { key: "format", value: function() {
    return this._format[1];
  } }, { key: "leadingDigitsPatterns", value: function() {
    return this._format[2] || [];
  } }, { key: "nationalPrefixFormattingRule", value: function() {
    return this._format[3] || this.metadata.nationalPrefixFormattingRule();
  } }, { key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat", value: function() {
    return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
  } }, { key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat", value: function() {
    return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
  } }, { key: "usesNationalPrefix", value: function() {
    return !(!this.nationalPrefixFormattingRule() || Me.test(this.nationalPrefixFormattingRule()));
  } }, { key: "internationalFormat", value: function() {
    return this._format[5] || this.format();
  } }]), e2;
}(), Me = /^\(?\$1\)?$/, Oe = function() {
  function e2(a2, r2) {
    Ce(this, e2), this.type = a2, this.metadata = r2;
  }
  return Ae(e2, [{ key: "pattern", value: function() {
    return this.metadata.v1 ? this.type : this.type[0];
  } }, { key: "possibleLengths", value: function() {
    if (!this.metadata.v1)
      return this.type[1] || this.metadata.possibleLengths();
  } }]), e2;
}();
function Re(e2, a2) {
  switch (a2) {
    case "FIXED_LINE":
      return e2[0];
    case "MOBILE":
      return e2[1];
    case "TOLL_FREE":
      return e2[2];
    case "PREMIUM_RATE":
      return e2[3];
    case "PERSONAL_NUMBER":
      return e2[4];
    case "VOICEMAIL":
      return e2[5];
    case "UAN":
      return e2[6];
    case "PAGER":
      return e2[7];
    case "VOIP":
      return e2[8];
    case "SHARED_COST":
      return e2[9];
  }
}
var Le = function(e2) {
  return "object" === _e(e2);
}, Te = function(e2) {
  return _e(e2);
};
function De(e2, a2) {
  if ((a2 = new Ie(a2)).hasCountry(e2))
    return a2.country(e2).countryCallingCode();
  throw new Error("Unknown country: ".concat(e2));
}
function Fe(e2) {
  var a2 = e2.version;
  "number" == typeof a2 ? (this.v1 = 1 === a2, this.v2 = 2 === a2, this.v3 = 3 === a2, this.v4 = 4 === a2) : a2 ? -1 === $e(a2, "1.2.0") ? this.v2 = true : -1 === $e(a2, "1.7.35") ? this.v3 = true : this.v4 = true : this.v1 = true;
}
var Ue = function(e2) {
  return "([".concat(xe, "]{1,").concat(e2, "})");
};
function Ge(e2) {
  var a2 = "[  \\t,]*", r2 = "[:\\.．]?[  \\t,-]*", t2 = "#?", o2 = "[  \\t]*";
  return ";ext=" + Ue("20") + "|" + (a2 + "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)" + r2 + Ue("20") + t2) + "|" + (a2 + "(?:[xｘ#＃~～]|int|ｉｎｔ)" + r2 + Ue("9") + t2) + "|" + ("[- ]+" + Ue("6") + "#") + "|" + (o2 + "(?:,{2}|;)" + r2 + Ue("15") + t2) + "|" + (o2 + "(?:,)+" + r2 + Ue("9") + t2);
}
var je = "[" + xe + "]{" + ve + "}", Ye = "[+＋]{0,1}(?:[" + we + "]*[" + xe + "]){3,}[" + we + xe + "]*", Ve = new RegExp("^[+＋]{0,1}(?:[" + we + "]*[" + xe + "]){1,2}$", "i"), He = Ye + "(?:" + Ge() + ")?", Qe = new RegExp("^" + je + "$|^" + He + "$", "i");
var Ke = new RegExp("(?:" + Ge() + ")$", "i");
function Je(e2, a2) {
  var r2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
  if (r2)
    return (r2 = r2.call(e2)).next.bind(r2);
  if (Array.isArray(e2) || (r2 = function(e3, a3) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return qe(e3, a3);
    var r3 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === r3 && e3.constructor && (r3 = e3.constructor.name);
    if ("Map" === r3 || "Set" === r3)
      return Array.from(e3);
    if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
      return qe(e3, a3);
  }(e2)) || a2 && e2 && "number" == typeof e2.length) {
    r2 && (e2 = r2);
    var t2 = 0;
    return function() {
      return t2 >= e2.length ? { done: true } : { done: false, value: e2[t2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function qe(e2, a2) {
  (null == a2 || a2 > e2.length) && (a2 = e2.length);
  for (var r2 = 0, t2 = new Array(a2); r2 < a2; r2++)
    t2[r2] = e2[r2];
  return t2;
}
var We = { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", "０": "0", "１": "1", "２": "2", "３": "3", "４": "4", "５": "5", "６": "6", "７": "7", "８": "8", "９": "9", "٠": "0", "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "۰": "0", "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9" };
function Ze(e2) {
  return We[e2];
}
function Xe(e2) {
  for (var a2, r2 = "", t2 = Je(e2.split("")); !(a2 = t2()).done; ) {
    var o2 = Ze(a2.value);
    o2 && (r2 += o2);
  }
  return r2;
}
function ea(e2, a2) {
  var r2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
  if (r2)
    return (r2 = r2.call(e2)).next.bind(r2);
  if (Array.isArray(e2) || (r2 = function(e3, a3) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return aa(e3, a3);
    var r3 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === r3 && e3.constructor && (r3 = e3.constructor.name);
    if ("Map" === r3 || "Set" === r3)
      return Array.from(e3);
    if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
      return aa(e3, a3);
  }(e2)) || a2 && e2 && "number" == typeof e2.length) {
    r2 && (e2 = r2);
    var t2 = 0;
    return function() {
      return t2 >= e2.length ? { done: true } : { done: false, value: e2[t2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function aa(e2, a2) {
  (null == a2 || a2 > e2.length) && (a2 = e2.length);
  for (var r2 = 0, t2 = new Array(a2); r2 < a2; r2++)
    t2[r2] = e2[r2];
  return t2;
}
function ra(e2) {
  for (var a2, r2 = "", t2 = ea(e2.split("")); !(a2 = t2()).done; ) {
    r2 += ta(a2.value, r2) || "";
  }
  return r2;
}
function ta(e2, a2) {
  if ("+" === e2) {
    if (a2)
      return;
    return "+";
  }
  return Ze(e2);
}
function oa(e2, a2) {
  var r2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
  if (r2)
    return (r2 = r2.call(e2)).next.bind(r2);
  if (Array.isArray(e2) || (r2 = function(e3, a3) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return ia(e3, a3);
    var r3 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === r3 && e3.constructor && (r3 = e3.constructor.name);
    if ("Map" === r3 || "Set" === r3)
      return Array.from(e3);
    if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
      return ia(e3, a3);
  }(e2)) || a2 && e2 && "number" == typeof e2.length) {
    r2 && (e2 = r2);
    var t2 = 0;
    return function() {
      return t2 >= e2.length ? { done: true } : { done: false, value: e2[t2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ia(e2, a2) {
  (null == a2 || a2 > e2.length) && (a2 = e2.length);
  for (var r2 = 0, t2 = new Array(a2); r2 < a2; r2++)
    t2[r2] = e2[r2];
  return t2;
}
function na(e2, a2) {
  return da(e2, void 0, a2);
}
function da(e2, a2, r2) {
  var t2 = r2.type(a2), o2 = t2 && t2.possibleLengths() || r2.possibleLengths();
  if (!o2)
    return "IS_POSSIBLE";
  if ("FIXED_LINE_OR_MOBILE" === a2) {
    if (!r2.type("FIXED_LINE"))
      return da(e2, "MOBILE", r2);
    var i2 = r2.type("MOBILE");
    i2 && (o2 = function(e3, a3) {
      for (var r3, t3 = e3.slice(), o3 = oa(a3); !(r3 = o3()).done; ) {
        var i3 = r3.value;
        e3.indexOf(i3) < 0 && t3.push(i3);
      }
      return t3.sort(function(e4, a4) {
        return e4 - a4;
      });
    }(o2, i2.possibleLengths()));
  } else if (a2 && !t2)
    return "INVALID_LENGTH";
  var n2 = e2.length, d2 = o2[0];
  return d2 === n2 ? "IS_POSSIBLE" : d2 > n2 ? "TOO_SHORT" : o2[o2.length - 1] < n2 ? "TOO_LONG" : o2.indexOf(n2, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function la(e2, a2) {
  return "IS_POSSIBLE" === na(e2, a2);
}
function sa(e2, a2) {
  return e2 = e2 || "", new RegExp("^(?:" + a2 + ")$").test(e2);
}
function ca(e2, a2) {
  var r2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
  if (r2)
    return (r2 = r2.call(e2)).next.bind(r2);
  if (Array.isArray(e2) || (r2 = function(e3, a3) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return ma(e3, a3);
    var r3 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === r3 && e3.constructor && (r3 = e3.constructor.name);
    if ("Map" === r3 || "Set" === r3)
      return Array.from(e3);
    if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
      return ma(e3, a3);
  }(e2)) || a2 && e2 && "number" == typeof e2.length) {
    r2 && (e2 = r2);
    var t2 = 0;
    return function() {
      return t2 >= e2.length ? { done: true } : { done: false, value: e2[t2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ma(e2, a2) {
  (null == a2 || a2 > e2.length) && (a2 = e2.length);
  for (var r2 = 0, t2 = new Array(a2); r2 < a2; r2++)
    t2[r2] = e2[r2];
  return t2;
}
var ua = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function pa(e2, a2, r2) {
  if (a2 = a2 || {}, e2.country) {
    (r2 = new Ie(r2)).selectNumberingPlan(e2.country, e2.countryCallingCode);
    var t2 = a2.v2 ? e2.nationalNumber : e2.phone;
    if (sa(t2, r2.nationalNumberPattern())) {
      if (ha(t2, "FIXED_LINE", r2))
        return r2.type("MOBILE") && "" === r2.type("MOBILE").pattern() ? "FIXED_LINE_OR_MOBILE" : r2.type("MOBILE") ? ha(t2, "MOBILE", r2) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE" : "FIXED_LINE_OR_MOBILE";
      for (var o2, i2 = ca(ua); !(o2 = i2()).done; ) {
        var n2 = o2.value;
        if (ha(t2, n2, r2))
          return n2;
      }
    }
  }
}
function ha(e2, a2, r2) {
  return !(!(a2 = r2.type(a2)) || !a2.pattern()) && (!(a2.possibleLengths() && a2.possibleLengths().indexOf(e2.length) < 0) && sa(e2, a2.pattern()));
}
function ga(e2, a2, r2) {
  var t2 = new Ie(r2).getCountryCodesForCallingCode(e2);
  return t2 ? t2.filter(function(e3) {
    return function(e4, a3, r3) {
      var t3 = new Ie(r3);
      if (t3.selectNumberingPlan(a3), t3.numberingPlan.possibleLengths().indexOf(e4.length) >= 0)
        return true;
      return false;
    }(a2, e3, r2);
  }) : [];
}
function ba(e2) {
  return e2.replace(new RegExp("[".concat(we, "]+"), "g"), " ").trim();
}
var za = /(\$\d)/;
function fa(e2, a2, r2) {
  var t2 = r2.useInternationalFormat, o2 = r2.withNationalPrefix;
  r2.carrierCode, r2.metadata;
  var i2 = e2.replace(new RegExp(a2.pattern()), t2 ? a2.internationalFormat() : o2 && a2.nationalPrefixFormattingRule() ? a2.format().replace(za, a2.nationalPrefixFormattingRule()) : a2.format());
  return t2 ? ba(i2) : i2;
}
var va = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function ya(e2, a2) {
  var r2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
  if (r2)
    return (r2 = r2.call(e2)).next.bind(r2);
  if (Array.isArray(e2) || (r2 = function(e3, a3) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return ka(e3, a3);
    var r3 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === r3 && e3.constructor && (r3 = e3.constructor.name);
    if ("Map" === r3 || "Set" === r3)
      return Array.from(e3);
    if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
      return ka(e3, a3);
  }(e2)) || a2 && e2 && "number" == typeof e2.length) {
    r2 && (e2 = r2);
    var t2 = 0;
    return function() {
      return t2 >= e2.length ? { done: true } : { done: false, value: e2[t2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ka(e2, a2) {
  (null == a2 || a2 > e2.length) && (a2 = e2.length);
  for (var r2 = 0, t2 = new Array(a2); r2 < a2; r2++)
    t2[r2] = e2[r2];
  return t2;
}
function xa(e2, a2) {
  var r2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var t2 = Object.getOwnPropertySymbols(e2);
    a2 && (t2 = t2.filter(function(a3) {
      return Object.getOwnPropertyDescriptor(e2, a3).enumerable;
    })), r2.push.apply(r2, t2);
  }
  return r2;
}
function wa(e2) {
  for (var a2 = 1; a2 < arguments.length; a2++) {
    var r2 = null != arguments[a2] ? arguments[a2] : {};
    a2 % 2 ? xa(Object(r2), true).forEach(function(a3) {
      $a(e2, a3, r2[a3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : xa(Object(r2)).forEach(function(a3) {
      Object.defineProperty(e2, a3, Object.getOwnPropertyDescriptor(r2, a3));
    });
  }
  return e2;
}
function $a(e2, a2, r2) {
  return a2 in e2 ? Object.defineProperty(e2, a2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[a2] = r2, e2;
}
var _a = { formatExtension: function(e2, a2, r2) {
  return "".concat(e2).concat(r2.ext()).concat(a2);
} };
function Ca(e2, a2, r2, t2) {
  if (r2 = r2 ? wa(wa({}, _a), r2) : _a, t2 = new Ie(t2), e2.country && "001" !== e2.country) {
    if (!t2.hasCountry(e2.country))
      throw new Error("Unknown country: ".concat(e2.country));
    t2.country(e2.country);
  } else {
    if (!e2.countryCallingCode)
      return e2.phone || "";
    t2.selectNumberingPlan(e2.countryCallingCode);
  }
  var o2, i2 = t2.countryCallingCode(), n2 = r2.v2 ? e2.nationalNumber : e2.phone;
  switch (a2) {
    case "NATIONAL":
      return n2 ? Aa(o2 = Ea(n2, e2.carrierCode, "NATIONAL", t2, r2), e2.ext, t2, r2.formatExtension) : "";
    case "INTERNATIONAL":
      return n2 ? (o2 = Ea(n2, null, "INTERNATIONAL", t2, r2), Aa(o2 = "+".concat(i2, " ").concat(o2), e2.ext, t2, r2.formatExtension)) : "+".concat(i2);
    case "E.164":
      return "+".concat(i2).concat(n2);
    case "RFC3966":
      return function(e3) {
        var a3 = e3.number, r3 = e3.ext;
        if (!a3)
          return "";
        if ("+" !== a3[0])
          throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
        return "tel:".concat(a3).concat(r3 ? ";ext=" + r3 : "");
      }({ number: "+".concat(i2).concat(n2), ext: e2.ext });
    case "IDD":
      if (!r2.fromCountry)
        return;
      var d2 = function(e3, a3, r3, t3, o3) {
        var i3 = De(t3, o3.metadata);
        if (i3 === r3) {
          var n3 = Ea(e3, a3, "NATIONAL", o3);
          return "1" === r3 ? r3 + " " + n3 : n3;
        }
        var d3 = function(e4, a4, r4) {
          var t4 = new Ie(r4);
          return t4.selectNumberingPlan(e4, a4), t4.defaultIDDPrefix() ? t4.defaultIDDPrefix() : va.test(t4.IDDPrefix()) ? t4.IDDPrefix() : void 0;
        }(t3, void 0, o3.metadata);
        if (d3)
          return "".concat(d3, " ").concat(r3, " ").concat(Ea(e3, null, "INTERNATIONAL", o3));
      }(n2, e2.carrierCode, i2, r2.fromCountry, t2);
      return Aa(d2, e2.ext, t2, r2.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(a2, '"'));
  }
}
function Ea(e2, a2, r2, t2, o2) {
  var i2 = function(e3, a3) {
    for (var r3, t3 = ya(e3); !(r3 = t3()).done; ) {
      var o3 = r3.value;
      if (o3.leadingDigitsPatterns().length > 0) {
        var i3 = o3.leadingDigitsPatterns()[o3.leadingDigitsPatterns().length - 1];
        if (0 !== a3.search(i3))
          continue;
      }
      if (sa(a3, o3.pattern()))
        return o3;
    }
  }(t2.formats(), e2);
  return i2 ? fa(e2, i2, { useInternationalFormat: "INTERNATIONAL" === r2, withNationalPrefix: !i2.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !o2 || false !== o2.nationalPrefix, carrierCode: a2, metadata: t2 }) : e2;
}
function Aa(e2, a2, r2, t2) {
  return a2 ? t2(e2, a2, r2) : e2;
}
function Sa(e2, a2) {
  var r2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var t2 = Object.getOwnPropertySymbols(e2);
    a2 && (t2 = t2.filter(function(a3) {
      return Object.getOwnPropertyDescriptor(e2, a3).enumerable;
    })), r2.push.apply(r2, t2);
  }
  return r2;
}
function Na(e2) {
  for (var a2 = 1; a2 < arguments.length; a2++) {
    var r2 = null != arguments[a2] ? arguments[a2] : {};
    a2 % 2 ? Sa(Object(r2), true).forEach(function(a3) {
      Ia(e2, a3, r2[a3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : Sa(Object(r2)).forEach(function(a3) {
      Object.defineProperty(e2, a3, Object.getOwnPropertyDescriptor(r2, a3));
    });
  }
  return e2;
}
function Ia(e2, a2, r2) {
  return a2 in e2 ? Object.defineProperty(e2, a2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[a2] = r2, e2;
}
function Pa(e2, a2) {
  for (var r2 = 0; r2 < a2.length; r2++) {
    var t2 = a2[r2];
    t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(e2, t2.key, t2);
  }
}
var Ba = function() {
  function e2(a3, r3, t3) {
    if (function(e3, a4) {
      if (!(e3 instanceof a4))
        throw new TypeError("Cannot call a class as a function");
    }(this, e2), !a3)
      throw new TypeError("`country` or `countryCallingCode` not passed");
    if (!r3)
      throw new TypeError("`nationalNumber` not passed");
    if (!t3)
      throw new TypeError("`metadata` not passed");
    var o2 = function(e3, a4) {
      var r4, t4, o3 = new Ie(a4);
      Ma(e3) ? (r4 = e3, o3.selectNumberingPlan(r4), t4 = o3.countryCallingCode()) : t4 = e3;
      return { country: r4, countryCallingCode: t4 };
    }(a3, t3), i2 = o2.country, n2 = o2.countryCallingCode;
    this.country = i2, this.countryCallingCode = n2, this.nationalNumber = r3, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
      return t3;
    };
  }
  var a2, r2, t2;
  return a2 = e2, r2 = [{ key: "setExt", value: function(e3) {
    this.ext = e3;
  } }, { key: "getPossibleCountries", value: function() {
    return this.country ? [this.country] : ga(this.countryCallingCode, this.nationalNumber, this.getMetadata());
  } }, { key: "isPossible", value: function() {
    return function(e3, a3, r3) {
      if (void 0 === a3 && (a3 = {}), r3 = new Ie(r3), a3.v2) {
        if (!e3.countryCallingCode)
          throw new Error("Invalid phone number object passed");
        r3.selectNumberingPlan(e3.countryCallingCode);
      } else {
        if (!e3.phone)
          return false;
        if (e3.country) {
          if (!r3.hasCountry(e3.country))
            throw new Error("Unknown country: ".concat(e3.country));
          r3.country(e3.country);
        } else {
          if (!e3.countryCallingCode)
            throw new Error("Invalid phone number object passed");
          r3.selectNumberingPlan(e3.countryCallingCode);
        }
      }
      if (r3.possibleLengths())
        return la(e3.phone || e3.nationalNumber, r3);
      if (e3.countryCallingCode && r3.isNonGeographicCallingCode(e3.countryCallingCode))
        return true;
      throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
    }(this, { v2: true }, this.getMetadata());
  } }, { key: "isValid", value: function() {
    return function(e3, a3, r3) {
      return a3 = a3 || {}, (r3 = new Ie(r3)).selectNumberingPlan(e3.country, e3.countryCallingCode), r3.hasTypes() ? void 0 !== pa(e3, a3, r3.metadata) : sa(a3.v2 ? e3.nationalNumber : e3.phone, r3.nationalNumberPattern());
    }(this, { v2: true }, this.getMetadata());
  } }, { key: "isNonGeographic", value: function() {
    return new Ie(this.getMetadata()).isNonGeographicCallingCode(this.countryCallingCode);
  } }, { key: "isEqual", value: function(e3) {
    return this.number === e3.number && this.ext === e3.ext;
  } }, { key: "getType", value: function() {
    return pa(this, { v2: true }, this.getMetadata());
  } }, { key: "format", value: function(e3, a3) {
    return Ca(this, e3, a3 ? Na(Na({}, a3), {}, { v2: true }) : { v2: true }, this.getMetadata());
  } }, { key: "formatNational", value: function(e3) {
    return this.format("NATIONAL", e3);
  } }, { key: "formatInternational", value: function(e3) {
    return this.format("INTERNATIONAL", e3);
  } }, { key: "getURI", value: function(e3) {
    return this.format("RFC3966", e3);
  } }], r2 && Pa(a2.prototype, r2), t2 && Pa(a2, t2), Object.defineProperty(a2, "prototype", { writable: false }), e2;
}(), Ma = function(e2) {
  return /^[A-Z]{2}$/.test(e2);
};
var Oa = new RegExp("([" + xe + "])");
function Ra(e2, a2, r2, t2) {
  if (a2) {
    var o2 = new Ie(t2);
    o2.selectNumberingPlan(a2, r2);
    var i2 = new RegExp(o2.IDDPrefix());
    if (0 === e2.search(i2)) {
      var n2 = (e2 = e2.slice(e2.match(i2)[0].length)).match(Oa);
      if (!(n2 && null != n2[1] && n2[1].length > 0 && "0" === n2[1]))
        return e2;
    }
  }
}
function La(e2, a2) {
  if (e2 && a2.numberingPlan.nationalPrefixForParsing()) {
    var r2 = new RegExp("^(?:" + a2.numberingPlan.nationalPrefixForParsing() + ")"), t2 = r2.exec(e2);
    if (t2) {
      var o2, i2, n2, d2 = t2.length - 1, l2 = d2 > 0 && t2[d2];
      if (a2.nationalPrefixTransformRule() && l2)
        o2 = e2.replace(r2, a2.nationalPrefixTransformRule()), d2 > 1 && (i2 = t2[1]);
      else {
        var s2 = t2[0];
        o2 = e2.slice(s2.length), l2 && (i2 = t2[1]);
      }
      if (l2) {
        var c2 = e2.indexOf(t2[1]);
        e2.slice(0, c2) === a2.numberingPlan.nationalPrefix() && (n2 = a2.numberingPlan.nationalPrefix());
      } else
        n2 = t2[0];
      return { nationalNumber: o2, nationalPrefix: n2, carrierCode: i2 };
    }
  }
  return { nationalNumber: e2 };
}
function Ta(e2, a2) {
  var r2 = La(e2, a2), t2 = r2.carrierCode, o2 = r2.nationalNumber;
  if (o2 !== e2) {
    if (!function(e3, a3, r3) {
      if (sa(e3, r3.nationalNumberPattern()) && !sa(a3, r3.nationalNumberPattern()))
        return false;
      return true;
    }(e2, o2, a2))
      return { nationalNumber: e2 };
    if (a2.possibleLengths() && !function(e3, a3) {
      switch (na(e3, a3)) {
        case "TOO_SHORT":
        case "INVALID_LENGTH":
          return false;
        default:
          return true;
      }
    }(o2, a2))
      return { nationalNumber: e2 };
  }
  return { nationalNumber: o2, carrierCode: t2 };
}
function Da(e2, a2, r2, t2) {
  var o2 = a2 ? De(a2, t2) : r2;
  if (0 === e2.indexOf(o2)) {
    (t2 = new Ie(t2)).selectNumberingPlan(a2, r2);
    var i2 = e2.slice(o2.length), n2 = Ta(i2, t2).nationalNumber, d2 = Ta(e2, t2).nationalNumber;
    if (!sa(d2, t2.nationalNumberPattern()) && sa(n2, t2.nationalNumberPattern()) || "TOO_LONG" === na(d2, t2))
      return { countryCallingCode: o2, number: i2 };
  }
  return { number: e2 };
}
function Fa(e2, a2, r2, t2) {
  if (!e2)
    return {};
  var o2;
  if ("+" !== e2[0]) {
    var i2 = Ra(e2, a2, r2, t2);
    if (!i2 || i2 === e2) {
      if (a2 || r2) {
        var n2 = Da(e2, a2, r2, t2), d2 = n2.countryCallingCode, l2 = n2.number;
        if (d2)
          return { countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN", countryCallingCode: d2, number: l2 };
      }
      return { number: e2 };
    }
    o2 = true, e2 = "+" + i2;
  }
  if ("0" === e2[1])
    return {};
  t2 = new Ie(t2);
  for (var s2 = 2; s2 - 1 <= ke && s2 <= e2.length; ) {
    var c2 = e2.slice(1, s2);
    if (t2.hasCallingCode(c2))
      return t2.selectNumberingPlan(c2), { countryCallingCodeSource: o2 ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN", countryCallingCode: c2, number: e2.slice(s2) };
    s2++;
  }
  return {};
}
function Ua(e2, a2) {
  var r2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
  if (r2)
    return (r2 = r2.call(e2)).next.bind(r2);
  if (Array.isArray(e2) || (r2 = function(e3, a3) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return Ga(e3, a3);
    var r3 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === r3 && e3.constructor && (r3 = e3.constructor.name);
    if ("Map" === r3 || "Set" === r3)
      return Array.from(e3);
    if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
      return Ga(e3, a3);
  }(e2)) || a2 && e2 && "number" == typeof e2.length) {
    r2 && (e2 = r2);
    var t2 = 0;
    return function() {
      return t2 >= e2.length ? { done: true } : { done: false, value: e2[t2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Ga(e2, a2) {
  (null == a2 || a2 > e2.length) && (a2 = e2.length);
  for (var r2 = 0, t2 = new Array(a2); r2 < a2; r2++)
    t2[r2] = e2[r2];
  return t2;
}
function ja(e2, a2) {
  var r2 = a2.countries, t2 = a2.defaultCountry, o2 = a2.metadata;
  o2 = new Ie(o2);
  for (var i2, n2 = [], d2 = Ua(r2); !(i2 = d2()).done; ) {
    var l2 = i2.value;
    if (o2.country(l2), o2.leadingDigits()) {
      if (e2 && 0 === e2.search(o2.leadingDigits()))
        return l2;
    } else if (pa({ phone: e2, country: l2 }, void 0, o2.metadata)) {
      if (!t2)
        return l2;
      if (l2 === t2)
        return l2;
      n2.push(l2);
    }
  }
  if (n2.length > 0)
    return n2[0];
}
var Ya = false;
function Va(e2, a2) {
  var r2 = a2.nationalNumber, t2 = a2.defaultCountry, o2 = a2.metadata;
  if (Ya && o2.isNonGeographicCallingCode(e2))
    return "001";
  var i2 = o2.getCountryCodesForCallingCode(e2);
  return i2 ? 1 === i2.length ? i2[0] : ja(r2, { countries: i2, defaultCountry: t2, metadata: o2.metadata }) : void 0;
}
var Ha = "+", Qa = "([" + xe + "]|[\\-\\.\\(\\)]?)", Ka = new RegExp("^\\" + Ha + Qa + "*[" + xe + "]" + Qa + "*$", "g"), Ja = new RegExp("^(" + ("[" + xe + "]+((\\-)*[" + xe + "])*") + "\\.)*" + ("[a-zA-Z]+((\\-)*[" + xe + "])*") + "\\.?$", "g"), qa = "tel:", Wa = ";phone-context=", Za = ";isub=";
function Xa(e2, a2) {
  var r2, t2 = a2.extractFormattedPhoneNumber, o2 = function(e3) {
    var a3 = e3.indexOf(Wa);
    if (a3 < 0)
      return null;
    var r3 = a3 + Wa.length;
    if (r3 >= e3.length)
      return "";
    var t3 = e3.indexOf(";", r3);
    return t3 >= 0 ? e3.substring(r3, t3) : e3.substring(r3);
  }(e2);
  if (!function(e3) {
    return null === e3 || 0 !== e3.length && (Ka.test(e3) || Ja.test(e3));
  }(o2))
    throw new fe("NOT_A_NUMBER");
  if (null === o2)
    r2 = t2(e2) || "";
  else {
    r2 = "", o2.charAt(0) === Ha && (r2 += o2);
    var i2, n2 = e2.indexOf(qa);
    i2 = n2 >= 0 ? n2 + qa.length : 0;
    var d2 = e2.indexOf(Wa);
    r2 += e2.substring(i2, d2);
  }
  var l2 = r2.indexOf(Za);
  if (l2 > 0 && (r2 = r2.substring(0, l2)), "" !== r2)
    return r2;
}
var er = 250, ar = new RegExp("[+＋" + xe + "]"), rr = new RegExp("[^" + xe + "#]+$");
function tr(e2, a2, r2) {
  if (a2 = a2 || {}, r2 = new Ie(r2), a2.defaultCountry && !r2.hasCountry(a2.defaultCountry)) {
    if (a2.v2)
      throw new fe("INVALID_COUNTRY");
    throw new Error("Unknown country: ".concat(a2.defaultCountry));
  }
  var t2 = function(e3, a3, r3) {
    var t3 = Xa(e3, { extractFormattedPhoneNumber: function(e4) {
      return function(e5, a4, r4) {
        if (!e5)
          return;
        if (e5.length > er) {
          if (r4)
            throw new fe("TOO_LONG");
          return;
        }
        if (false === a4)
          return e5;
        var t4 = e5.search(ar);
        if (t4 < 0)
          return;
        return e5.slice(t4).replace(rr, "");
      }(e4, r3, a3);
    } });
    if (!t3)
      return {};
    if (!function(e4) {
      return e4.length >= ve && Qe.test(e4);
    }(t3))
      return function(e4) {
        return Ve.test(e4);
      }(t3) ? { error: "TOO_SHORT" } : {};
    var o3 = function(e4) {
      var a4 = e4.search(Ke);
      if (a4 < 0)
        return {};
      for (var r4 = e4.slice(0, a4), t4 = e4.match(Ke), o4 = 1; o4 < t4.length; ) {
        if (t4[o4])
          return { number: r4, ext: t4[o4] };
        o4++;
      }
    }(t3);
    if (o3.ext)
      return o3;
    return { number: t3 };
  }(e2, a2.v2, a2.extract), o2 = t2.number, i2 = t2.ext, n2 = t2.error;
  if (!o2) {
    if (a2.v2) {
      if ("TOO_SHORT" === n2)
        throw new fe("TOO_SHORT");
      throw new fe("NOT_A_NUMBER");
    }
    return {};
  }
  var d2 = function(e3, a3, r3, t3) {
    var o3, i3 = Fa(ra(e3), a3, r3, t3.metadata), n3 = i3.countryCallingCodeSource, d3 = i3.countryCallingCode, l3 = i3.number;
    if (d3)
      t3.selectNumberingPlan(d3);
    else {
      if (!l3 || !a3 && !r3)
        return {};
      t3.selectNumberingPlan(a3, r3), a3 && (o3 = a3), d3 = r3 || De(a3, t3.metadata);
    }
    if (!l3)
      return { countryCallingCodeSource: n3, countryCallingCode: d3 };
    var s3 = Ta(ra(l3), t3), c3 = s3.nationalNumber, m3 = s3.carrierCode, u3 = Va(d3, { nationalNumber: c3, defaultCountry: a3, metadata: t3 });
    u3 && (o3 = u3, "001" === u3 || t3.country(o3));
    return { country: o3, countryCallingCode: d3, countryCallingCodeSource: n3, nationalNumber: c3, carrierCode: m3 };
  }(o2, a2.defaultCountry, a2.defaultCallingCode, r2), l2 = d2.country, s2 = d2.nationalNumber, c2 = d2.countryCallingCode, m2 = d2.countryCallingCodeSource, u2 = d2.carrierCode;
  if (!r2.hasSelectedNumberingPlan()) {
    if (a2.v2)
      throw new fe("INVALID_COUNTRY");
    return {};
  }
  if (!s2 || s2.length < ve) {
    if (a2.v2)
      throw new fe("TOO_SHORT");
    return {};
  }
  if (s2.length > ye) {
    if (a2.v2)
      throw new fe("TOO_LONG");
    return {};
  }
  if (a2.v2) {
    var p2 = new Ba(c2, s2, r2.metadata);
    return l2 && (p2.country = l2), u2 && (p2.carrierCode = u2), i2 && (p2.ext = i2), p2.__countryCallingCodeSource = m2, p2;
  }
  var h2 = !!(a2.extended ? r2.hasSelectedNumberingPlan() : l2) && sa(s2, r2.nationalNumberPattern());
  return a2.extended ? { country: l2, countryCallingCode: c2, carrierCode: u2, valid: h2, possible: !!h2 || !(true !== a2.extended || !r2.possibleLengths() || !la(s2, r2)), phone: s2, ext: i2 } : h2 ? function(e3, a3, r3) {
    var t3 = { country: e3, phone: a3 };
    r3 && (t3.ext = r3);
    return t3;
  }(l2, s2, i2) : {};
}
function or(e2, a2) {
  var r2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var t2 = Object.getOwnPropertySymbols(e2);
    a2 && (t2 = t2.filter(function(a3) {
      return Object.getOwnPropertyDescriptor(e2, a3).enumerable;
    })), r2.push.apply(r2, t2);
  }
  return r2;
}
function ir(e2) {
  for (var a2 = 1; a2 < arguments.length; a2++) {
    var r2 = null != arguments[a2] ? arguments[a2] : {};
    a2 % 2 ? or(Object(r2), true).forEach(function(a3) {
      nr(e2, a3, r2[a3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : or(Object(r2)).forEach(function(a3) {
      Object.defineProperty(e2, a3, Object.getOwnPropertyDescriptor(r2, a3));
    });
  }
  return e2;
}
function nr(e2, a2, r2) {
  return a2 in e2 ? Object.defineProperty(e2, a2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[a2] = r2, e2;
}
function dr(e2) {
  return dr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, dr(e2);
}
function lr(e2, a2) {
  var r2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var t2 = Object.getOwnPropertySymbols(e2);
    a2 && (t2 = t2.filter(function(a3) {
      return Object.getOwnPropertyDescriptor(e2, a3).enumerable;
    })), r2.push.apply(r2, t2);
  }
  return r2;
}
function sr(e2, a2, r2) {
  return a2 in e2 ? Object.defineProperty(e2, a2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[a2] = r2, e2;
}
function cr(e2, a2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, a3) {
    var r2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
    if (null == r2)
      return;
    var t2, o2, i2 = [], n2 = true, d2 = false;
    try {
      for (r2 = r2.call(e3); !(n2 = (t2 = r2.next()).done) && (i2.push(t2.value), !a3 || i2.length !== a3); n2 = true)
        ;
    } catch (e4) {
      d2 = true, o2 = e4;
    } finally {
      try {
        n2 || null == r2.return || r2.return();
      } finally {
        if (d2)
          throw o2;
      }
    }
    return i2;
  }(e2, a2) || function(e3, a3) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return mr(e3, a3);
    var r2 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === r2 && e3.constructor && (r2 = e3.constructor.name);
    if ("Map" === r2 || "Set" === r2)
      return Array.from(e3);
    if ("Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2))
      return mr(e3, a3);
  }(e2, a2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function mr(e2, a2) {
  (null == a2 || a2 > e2.length) && (a2 = e2.length);
  for (var r2 = 0, t2 = new Array(a2); r2 < a2; r2++)
    t2[r2] = e2[r2];
  return t2;
}
function ur(e2) {
  var a2, r2, t2, o2 = cr(Array.prototype.slice.call(e2), 4), i2 = o2[0], n2 = o2[1], d2 = o2[2], l2 = o2[3];
  if ("string" != typeof i2)
    throw new TypeError("A text for parsing must be a string.");
  if (a2 = i2, n2 && "string" != typeof n2) {
    if (!pr(n2))
      throw new Error("Invalid second argument: ".concat(n2));
    d2 ? (r2 = n2, t2 = d2) : t2 = n2;
  } else
    l2 ? (r2 = d2, t2 = l2) : (r2 = void 0, t2 = d2), n2 && (r2 = function(e3) {
      for (var a3 = 1; a3 < arguments.length; a3++) {
        var r3 = null != arguments[a3] ? arguments[a3] : {};
        a3 % 2 ? lr(Object(r3), true).forEach(function(a4) {
          sr(e3, a4, r3[a4]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r3)) : lr(Object(r3)).forEach(function(a4) {
          Object.defineProperty(e3, a4, Object.getOwnPropertyDescriptor(r3, a4));
        });
      }
      return e3;
    }({ defaultCountry: n2 }, r2));
  return { text: a2, options: r2, metadata: t2 };
}
var pr = function(e2) {
  return "object" === dr(e2);
};
function hr(e2, a2) {
  var r2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var t2 = Object.getOwnPropertySymbols(e2);
    a2 && (t2 = t2.filter(function(a3) {
      return Object.getOwnPropertyDescriptor(e2, a3).enumerable;
    })), r2.push.apply(r2, t2);
  }
  return r2;
}
function gr(e2) {
  for (var a2 = 1; a2 < arguments.length; a2++) {
    var r2 = null != arguments[a2] ? arguments[a2] : {};
    a2 % 2 ? hr(Object(r2), true).forEach(function(a3) {
      br(e2, a3, r2[a3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : hr(Object(r2)).forEach(function(a3) {
      Object.defineProperty(e2, a3, Object.getOwnPropertyDescriptor(r2, a3));
    });
  }
  return e2;
}
function br(e2, a2, r2) {
  return a2 in e2 ? Object.defineProperty(e2, a2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[a2] = r2, e2;
}
function zr(e2, a2, r2) {
  a2 && a2.defaultCountry && !function(e3, a3) {
    return a3.countries.hasOwnProperty(e3);
  }(a2.defaultCountry, r2) && (a2 = gr(gr({}, a2), {}, { defaultCountry: void 0 }));
  try {
    return function(e3, a3, r3) {
      return tr(e3, ir(ir({}, a3), {}, { v2: true }), r3);
    }(e2, a2, r2);
  } catch (e3) {
    if (!(e3 instanceof fe))
      throw e3;
  }
}
function fr() {
  var e2 = ur(arguments);
  return zr(e2.text, e2.options, e2.metadata);
}
function vr(e2, a2) {
  for (var r2 = 0; r2 < a2.length; r2++) {
    var t2 = a2[r2];
    t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(e2, t2.key, t2);
  }
}
var yr = function() {
  function e2(a3) {
    var r3 = a3.onCountryChange, t3 = a3.onCallingCodeChange;
    !function(e3, a4) {
      if (!(e3 instanceof a4))
        throw new TypeError("Cannot call a class as a function");
    }(this, e2), this.onCountryChange = r3, this.onCallingCodeChange = t3;
  }
  var a2, r2, t2;
  return a2 = e2, (r2 = [{ key: "reset", value: function(e3) {
    var a3 = e3.country, r3 = e3.callingCode;
    this.international = false, this.missingPlus = false, this.IDDPrefix = void 0, this.callingCode = void 0, this.digits = "", this.resetNationalSignificantNumber(), this.initCountryAndCallingCode(a3, r3);
  } }, { key: "resetNationalSignificantNumber", value: function() {
    this.nationalSignificantNumber = this.getNationalDigits(), this.nationalSignificantNumberMatchesInput = true, this.nationalPrefix = void 0, this.carrierCode = void 0, this.complexPrefixBeforeNationalSignificantNumber = void 0;
  } }, { key: "update", value: function(e3) {
    for (var a3 = 0, r3 = Object.keys(e3); a3 < r3.length; a3++) {
      var t3 = r3[a3];
      this[t3] = e3[t3];
    }
  } }, { key: "initCountryAndCallingCode", value: function(e3, a3) {
    this.setCountry(e3), this.setCallingCode(a3);
  } }, { key: "setCountry", value: function(e3) {
    this.country = e3, this.onCountryChange(e3);
  } }, { key: "setCallingCode", value: function(e3) {
    this.callingCode = e3, this.onCallingCodeChange(e3, this.country);
  } }, { key: "startInternationalNumber", value: function(e3, a3) {
    this.international = true, this.initCountryAndCallingCode(e3, a3);
  } }, { key: "appendDigits", value: function(e3) {
    this.digits += e3;
  } }, { key: "appendNationalSignificantNumberDigits", value: function(e3) {
    this.nationalSignificantNumber += e3;
  } }, { key: "getNationalDigits", value: function() {
    return this.international ? this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0)) : this.digits;
  } }, { key: "getDigitsWithoutInternationalPrefix", value: function() {
    return this.international && this.IDDPrefix ? this.digits.slice(this.IDDPrefix.length) : this.digits;
  } }]) && vr(a2.prototype, r2), t2 && vr(a2, t2), Object.defineProperty(a2, "prototype", { writable: false }), e2;
}();
function kr(e2, a2) {
  var r2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
  if (r2)
    return (r2 = r2.call(e2)).next.bind(r2);
  if (Array.isArray(e2) || (r2 = function(e3, a3) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return xr(e3, a3);
    var r3 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === r3 && e3.constructor && (r3 = e3.constructor.name);
    if ("Map" === r3 || "Set" === r3)
      return Array.from(e3);
    if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
      return xr(e3, a3);
  }(e2)) || a2 && e2 && "number" == typeof e2.length) {
    r2 && (e2 = r2);
    var t2 = 0;
    return function() {
      return t2 >= e2.length ? { done: true } : { done: false, value: e2[t2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function xr(e2, a2) {
  (null == a2 || a2 > e2.length) && (a2 = e2.length);
  for (var r2 = 0, t2 = new Array(a2); r2 < a2; r2++)
    t2[r2] = e2[r2];
  return t2;
}
var wr = "x", $r = new RegExp(wr);
function _r(e2, a2) {
  if (a2 < 1)
    return "";
  for (var r2 = ""; a2 > 1; )
    1 & a2 && (r2 += e2), a2 >>= 1, e2 += e2;
  return r2 + e2;
}
function Cr(e2, a2) {
  return ")" === e2[a2] && a2++, function(e3) {
    var a3 = [], r2 = 0;
    for (; r2 < e3.length; )
      "(" === e3[r2] ? a3.push(r2) : ")" === e3[r2] && a3.pop(), r2++;
    var t2 = 0, o2 = "";
    a3.push(e3.length);
    for (var i2 = 0, n2 = a3; i2 < n2.length; i2++) {
      var d2 = n2[i2];
      o2 += e3.slice(t2, d2), t2 = d2 + 1;
    }
    return o2;
  }(e2.slice(0, a2));
}
function Er(e2, a2, r2) {
  var t2 = r2.metadata, o2 = r2.shouldTryNationalPrefixFormattingRule, i2 = r2.getSeparatorAfterNationalPrefix;
  if (new RegExp("^(?:".concat(a2.pattern(), ")$")).test(e2.nationalSignificantNumber))
    return function(e3, a3, r3) {
      var t3 = r3.metadata, o3 = r3.shouldTryNationalPrefixFormattingRule, i3 = r3.getSeparatorAfterNationalPrefix;
      if (e3.nationalSignificantNumber, e3.international, e3.nationalPrefix, e3.carrierCode, o3(a3)) {
        var n2 = Ar(e3, a3, { useNationalPrefixFormattingRule: true, getSeparatorAfterNationalPrefix: i3, metadata: t3 });
        if (n2)
          return n2;
      }
      return Ar(e3, a3, { useNationalPrefixFormattingRule: false, getSeparatorAfterNationalPrefix: i3, metadata: t3 });
    }(e2, a2, { metadata: t2, shouldTryNationalPrefixFormattingRule: o2, getSeparatorAfterNationalPrefix: i2 });
}
function Ar(e2, a2, r2) {
  var t2 = r2.metadata, o2 = r2.useNationalPrefixFormattingRule, i2 = r2.getSeparatorAfterNationalPrefix, n2 = fa(e2.nationalSignificantNumber, a2, { carrierCode: e2.carrierCode, useInternationalFormat: e2.international, withNationalPrefix: o2, metadata: t2 });
  if (o2 || (e2.nationalPrefix ? n2 = e2.nationalPrefix + i2(a2) + n2 : e2.complexPrefixBeforeNationalSignificantNumber && (n2 = e2.complexPrefixBeforeNationalSignificantNumber + " " + n2)), function(e3, a3) {
    return Xe(e3) === a3.getNationalDigits();
  }(n2, e2))
    return n2;
}
function Sr(e2, a2) {
  for (var r2 = 0; r2 < a2.length; r2++) {
    var t2 = a2[r2];
    t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(e2, t2.key, t2);
  }
}
var Nr = function() {
  function e2() {
    !function(e3, a3) {
      if (!(e3 instanceof a3))
        throw new TypeError("Cannot call a class as a function");
    }(this, e2);
  }
  var a2, r2, t2;
  return a2 = e2, (r2 = [{ key: "parse", value: function(e3) {
    if (this.context = [{ or: true, instructions: [] }], this.parsePattern(e3), 1 !== this.context.length)
      throw new Error("Non-finalized contexts left when pattern parse ended");
    var a3 = this.context[0], r3 = a3.branches, t3 = a3.instructions;
    if (r3)
      return { op: "|", args: r3.concat([Mr(t3)]) };
    if (0 === t3.length)
      throw new Error("Pattern is required");
    return 1 === t3.length ? t3[0] : t3;
  } }, { key: "startContext", value: function(e3) {
    this.context.push(e3);
  } }, { key: "endContext", value: function() {
    this.context.pop();
  } }, { key: "getContext", value: function() {
    return this.context[this.context.length - 1];
  } }, { key: "parsePattern", value: function(e3) {
    if (!e3)
      throw new Error("Pattern is required");
    var a3 = e3.match(Br);
    if (a3) {
      var r3 = a3[1], t3 = e3.slice(0, a3.index), o2 = e3.slice(a3.index + r3.length);
      switch (r3) {
        case "(?:":
          t3 && this.parsePattern(t3), this.startContext({ or: true, instructions: [], branches: [] });
          break;
        case ")":
          if (!this.getContext().or)
            throw new Error('")" operator must be preceded by "(?:" operator');
          if (t3 && this.parsePattern(t3), 0 === this.getContext().instructions.length)
            throw new Error('No instructions found after "|" operator in an "or" group');
          var i2 = this.getContext().branches;
          i2.push(Mr(this.getContext().instructions)), this.endContext(), this.getContext().instructions.push({ op: "|", args: i2 });
          break;
        case "|":
          if (!this.getContext().or)
            throw new Error('"|" operator can only be used inside "or" groups');
          if (t3 && this.parsePattern(t3), !this.getContext().branches) {
            if (1 !== this.context.length)
              throw new Error('"branches" not found in an "or" group context');
            this.getContext().branches = [];
          }
          this.getContext().branches.push(Mr(this.getContext().instructions)), this.getContext().instructions = [];
          break;
        case "[":
          t3 && this.parsePattern(t3), this.startContext({ oneOfSet: true });
          break;
        case "]":
          if (!this.getContext().oneOfSet)
            throw new Error('"]" operator must be preceded by "[" operator');
          this.endContext(), this.getContext().instructions.push({ op: "[]", args: Ir(t3) });
          break;
        default:
          throw new Error("Unknown operator: ".concat(r3));
      }
      o2 && this.parsePattern(o2);
    } else {
      if (Pr.test(e3))
        throw new Error("Illegal characters found in a pattern: ".concat(e3));
      this.getContext().instructions = this.getContext().instructions.concat(e3.split(""));
    }
  } }]) && Sr(a2.prototype, r2), t2 && Sr(a2, t2), Object.defineProperty(a2, "prototype", { writable: false }), e2;
}();
function Ir(e2) {
  for (var a2 = [], r2 = 0; r2 < e2.length; ) {
    if ("-" === e2[r2]) {
      if (0 === r2 || r2 === e2.length - 1)
        throw new Error("Couldn't parse a one-of set pattern: ".concat(e2));
      for (var t2 = e2[r2 - 1].charCodeAt(0) + 1, o2 = e2[r2 + 1].charCodeAt(0) - 1, i2 = t2; i2 <= o2; )
        a2.push(String.fromCharCode(i2)), i2++;
    } else
      a2.push(e2[r2]);
    r2++;
  }
  return a2;
}
var Pr = /[\(\)\[\]\?\:\|]/, Br = new RegExp("(\\||\\(\\?\\:|\\)|\\[|\\])");
function Mr(e2) {
  return 1 === e2.length ? e2[0] : e2;
}
function Or(e2, a2) {
  var r2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
  if (r2)
    return (r2 = r2.call(e2)).next.bind(r2);
  if (Array.isArray(e2) || (r2 = function(e3, a3) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return Rr(e3, a3);
    var r3 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === r3 && e3.constructor && (r3 = e3.constructor.name);
    if ("Map" === r3 || "Set" === r3)
      return Array.from(e3);
    if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
      return Rr(e3, a3);
  }(e2)) || a2 && e2 && "number" == typeof e2.length) {
    r2 && (e2 = r2);
    var t2 = 0;
    return function() {
      return t2 >= e2.length ? { done: true } : { done: false, value: e2[t2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Rr(e2, a2) {
  (null == a2 || a2 > e2.length) && (a2 = e2.length);
  for (var r2 = 0, t2 = new Array(a2); r2 < a2; r2++)
    t2[r2] = e2[r2];
  return t2;
}
function Lr(e2, a2) {
  for (var r2 = 0; r2 < a2.length; r2++) {
    var t2 = a2[r2];
    t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(e2, t2.key, t2);
  }
}
var Tr = function() {
  function e2(a3) {
    !function(e3, a4) {
      if (!(e3 instanceof a4))
        throw new TypeError("Cannot call a class as a function");
    }(this, e2), this.matchTree = new Nr().parse(a3);
  }
  var a2, r2, t2;
  return a2 = e2, r2 = [{ key: "match", value: function(e3) {
    var a3 = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).allowOverflow;
    if (!e3)
      throw new Error("String is required");
    var r3 = Dr(e3.split(""), this.matchTree, true);
    if (r3 && r3.match && delete r3.matchedChars, !r3 || !r3.overflow || a3)
      return r3;
  } }], r2 && Lr(a2.prototype, r2), t2 && Lr(a2, t2), Object.defineProperty(a2, "prototype", { writable: false }), e2;
}();
function Dr(e2, a2, r2) {
  if ("string" == typeof a2) {
    var t2 = e2.join("");
    return 0 === a2.indexOf(t2) ? e2.length === a2.length ? { match: true, matchedChars: e2 } : { partialMatch: true } : 0 === t2.indexOf(a2) ? r2 && e2.length > a2.length ? { overflow: true } : { match: true, matchedChars: e2.slice(0, a2.length) } : void 0;
  }
  if (Array.isArray(a2)) {
    for (var o2 = e2.slice(), i2 = 0; i2 < a2.length; ) {
      var n2 = Dr(o2, a2[i2], r2 && i2 === a2.length - 1);
      if (!n2)
        return;
      if (n2.overflow)
        return n2;
      if (!n2.match) {
        if (n2.partialMatch)
          return { partialMatch: true };
        throw new Error("Unsupported match result:\n".concat(JSON.stringify(n2, null, 2)));
      }
      if (0 === (o2 = o2.slice(n2.matchedChars.length)).length)
        return i2 === a2.length - 1 ? { match: true, matchedChars: e2 } : { partialMatch: true };
      i2++;
    }
    return r2 ? { overflow: true } : { match: true, matchedChars: e2.slice(0, e2.length - o2.length) };
  }
  switch (a2.op) {
    case "|":
      for (var d2, l2, s2 = Or(a2.args); !(l2 = s2()).done; ) {
        var c2 = Dr(e2, l2.value, r2);
        if (c2) {
          if (c2.overflow)
            return c2;
          if (c2.match)
            return { match: true, matchedChars: c2.matchedChars };
          if (!c2.partialMatch)
            throw new Error("Unsupported match result:\n".concat(JSON.stringify(c2, null, 2)));
          d2 = true;
        }
      }
      return d2 ? { partialMatch: true } : void 0;
    case "[]":
      for (var m2, u2 = Or(a2.args); !(m2 = u2()).done; ) {
        var p2 = m2.value;
        if (e2[0] === p2)
          return 1 === e2.length ? { match: true, matchedChars: e2 } : r2 ? { overflow: true } : { match: true, matchedChars: [p2] };
      }
      return;
    default:
      throw new Error("Unsupported instruction tree: ".concat(a2));
  }
}
function Fr(e2, a2) {
  var r2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
  if (r2)
    return (r2 = r2.call(e2)).next.bind(r2);
  if (Array.isArray(e2) || (r2 = function(e3, a3) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return Ur(e3, a3);
    var r3 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === r3 && e3.constructor && (r3 = e3.constructor.name);
    if ("Map" === r3 || "Set" === r3)
      return Array.from(e3);
    if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
      return Ur(e3, a3);
  }(e2)) || a2 && e2 && "number" == typeof e2.length) {
    r2 && (e2 = r2);
    var t2 = 0;
    return function() {
      return t2 >= e2.length ? { done: true } : { done: false, value: e2[t2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Ur(e2, a2) {
  (null == a2 || a2 > e2.length) && (a2 = e2.length);
  for (var r2 = 0, t2 = new Array(a2); r2 < a2; r2++)
    t2[r2] = e2[r2];
  return t2;
}
function Gr(e2, a2) {
  for (var r2 = 0; r2 < a2.length; r2++) {
    var t2 = a2[r2];
    t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(e2, t2.key, t2);
  }
}
var jr = _r("9", 15), Yr = /[- ]/, Vr = new RegExp("[" + we + "]*\\$1[" + we + "]*(\\$\\d[" + we + "]*)*$"), Hr = function() {
  function e2(a3) {
    a3.state;
    var r3 = a3.metadata;
    !function(e3, a4) {
      if (!(e3 instanceof a4))
        throw new TypeError("Cannot call a class as a function");
    }(this, e2), this.metadata = r3, this.resetFormat();
  }
  var a2, r2, t2;
  return a2 = e2, r2 = [{ key: "resetFormat", value: function() {
    this.chosenFormat = void 0, this.template = void 0, this.nationalNumberTemplate = void 0, this.populatedNationalNumberTemplate = void 0, this.populatedNationalNumberTemplatePosition = -1;
  } }, { key: "reset", value: function(e3, a3) {
    this.resetFormat(), e3 ? (this.isNANP = "1" === e3.callingCode(), this.matchingFormats = e3.formats(), a3.nationalSignificantNumber && this.narrowDownMatchingFormats(a3)) : (this.isNANP = void 0, this.matchingFormats = []);
  } }, { key: "format", value: function(e3, a3) {
    var r3 = this;
    if (function(e4, a4) {
      return "IS_POSSIBLE" === na(e4, a4);
    }(a3.nationalSignificantNumber, this.metadata))
      for (var t3, o2 = Fr(this.matchingFormats); !(t3 = o2()).done; ) {
        var i2 = t3.value, n2 = Er(a3, i2, { metadata: this.metadata, shouldTryNationalPrefixFormattingRule: function(e4) {
          return r3.shouldTryNationalPrefixFormattingRule(e4, { international: a3.international, nationalPrefix: a3.nationalPrefix });
        }, getSeparatorAfterNationalPrefix: function(e4) {
          return r3.getSeparatorAfterNationalPrefix(e4);
        } });
        if (n2)
          return this.resetFormat(), this.chosenFormat = i2, this.setNationalNumberTemplate(n2.replace(/\d/g, wr), a3), this.populatedNationalNumberTemplate = n2, this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(wr), n2;
      }
    return this.formatNationalNumberWithNextDigits(e3, a3);
  } }, { key: "formatNationalNumberWithNextDigits", value: function(e3, a3) {
    var r3 = this.chosenFormat, t3 = this.chooseFormat(a3);
    if (t3)
      return t3 === r3 ? this.formatNextNationalNumberDigits(e3) : this.formatNextNationalNumberDigits(a3.getNationalDigits());
  } }, { key: "narrowDownMatchingFormats", value: function(e3) {
    var a3 = this, r3 = e3.nationalSignificantNumber, t3 = e3.nationalPrefix, o2 = e3.international, i2 = r3, n2 = i2.length - 3;
    n2 < 0 && (n2 = 0), this.matchingFormats = this.matchingFormats.filter(function(e4) {
      return a3.formatSuits(e4, o2, t3) && a3.formatMatches(e4, i2, n2);
    }), this.chosenFormat && -1 === this.matchingFormats.indexOf(this.chosenFormat) && this.resetFormat();
  } }, { key: "formatSuits", value: function(e3, a3, r3) {
    return !(r3 && !e3.usesNationalPrefix() && !e3.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !a3 && !r3 && e3.nationalPrefixIsMandatoryWhenFormattingInNationalFormat());
  } }, { key: "formatMatches", value: function(e3, a3, r3) {
    var t3 = e3.leadingDigitsPatterns().length;
    if (0 === t3)
      return true;
    r3 = Math.min(r3, t3 - 1);
    var o2 = e3.leadingDigitsPatterns()[r3];
    if (a3.length < 3)
      try {
        return void 0 !== new Tr(o2).match(a3, { allowOverflow: true });
      } catch (e4) {
        return console.error(e4), true;
      }
    return new RegExp("^(".concat(o2, ")")).test(a3);
  } }, { key: "getFormatFormat", value: function(e3, a3) {
    return a3 ? e3.internationalFormat() : e3.format();
  } }, { key: "chooseFormat", value: function(e3) {
    for (var a3, r3 = this, t3 = function() {
      var t4 = a3.value;
      return r3.chosenFormat === t4 ? "break" : Vr.test(r3.getFormatFormat(t4, e3.international)) ? r3.createTemplateForFormat(t4, e3) ? (r3.chosenFormat = t4, "break") : (r3.matchingFormats = r3.matchingFormats.filter(function(e4) {
        return e4 !== t4;
      }), "continue") : "continue";
    }, o2 = Fr(this.matchingFormats.slice()); !(a3 = o2()).done; ) {
      var i2 = t3();
      if ("break" === i2)
        break;
    }
    return this.chosenFormat || this.resetFormat(), this.chosenFormat;
  } }, { key: "createTemplateForFormat", value: function(e3, a3) {
    if (!(e3.pattern().indexOf("|") >= 0)) {
      var r3 = this.getTemplateForFormat(e3, a3);
      return r3 ? (this.setNationalNumberTemplate(r3, a3), true) : void 0;
    }
  } }, { key: "getSeparatorAfterNationalPrefix", value: function(e3) {
    return this.isNANP || e3 && e3.nationalPrefixFormattingRule() && Yr.test(e3.nationalPrefixFormattingRule()) ? " " : "";
  } }, { key: "getInternationalPrefixBeforeCountryCallingCode", value: function(e3, a3) {
    var r3 = e3.IDDPrefix, t3 = e3.missingPlus;
    return r3 ? a3 && false === a3.spacing ? r3 : r3 + " " : t3 ? "" : "+";
  } }, { key: "getTemplate", value: function(e3) {
    if (this.template) {
      for (var a3 = -1, r3 = 0, t3 = e3.international ? this.getInternationalPrefixBeforeCountryCallingCode(e3, { spacing: false }) : ""; r3 < t3.length + e3.getDigitsWithoutInternationalPrefix().length; )
        a3 = this.template.indexOf(wr, a3 + 1), r3++;
      return Cr(this.template, a3 + 1);
    }
  } }, { key: "setNationalNumberTemplate", value: function(e3, a3) {
    this.nationalNumberTemplate = e3, this.populatedNationalNumberTemplate = e3, this.populatedNationalNumberTemplatePosition = -1, a3.international ? this.template = this.getInternationalPrefixBeforeCountryCallingCode(a3).replace(/[\d\+]/g, wr) + _r(wr, a3.callingCode.length) + " " + e3 : this.template = e3;
  } }, { key: "getTemplateForFormat", value: function(e3, a3) {
    var r3 = a3.nationalSignificantNumber, t3 = a3.international, o2 = a3.nationalPrefix, i2 = a3.complexPrefixBeforeNationalSignificantNumber, n2 = e3.pattern();
    n2 = n2.replace(/\[([^\[\]])*\]/g, "\\d").replace(/\d(?=[^,}][^,}])/g, "\\d");
    var d2 = jr.match(n2)[0];
    if (!(r3.length > d2.length)) {
      var l2 = new RegExp("^" + n2 + "$"), s2 = r3.replace(/\d/g, "9");
      l2.test(s2) && (d2 = s2);
      var c2, m2 = this.getFormatFormat(e3, t3);
      if (this.shouldTryNationalPrefixFormattingRule(e3, { international: t3, nationalPrefix: o2 })) {
        var u2 = m2.replace(za, e3.nationalPrefixFormattingRule());
        if (Xe(e3.nationalPrefixFormattingRule()) === (o2 || "") + Xe("$1") && (m2 = u2, c2 = true, o2))
          for (var p2 = o2.length; p2 > 0; )
            m2 = m2.replace(/\d/, wr), p2--;
      }
      var h2 = d2.replace(new RegExp(n2), m2).replace(new RegExp("9", "g"), wr);
      return c2 || (i2 ? h2 = _r(wr, i2.length) + " " + h2 : o2 && (h2 = _r(wr, o2.length) + this.getSeparatorAfterNationalPrefix(e3) + h2)), t3 && (h2 = ba(h2)), h2;
    }
  } }, { key: "formatNextNationalNumberDigits", value: function(e3) {
    var a3 = function(e4, a4, r3) {
      for (var t3, o2 = kr(r3.split("")); !(t3 = o2()).done; ) {
        var i2 = t3.value;
        if (e4.slice(a4 + 1).search($r) < 0)
          return;
        a4 = e4.search($r), e4 = e4.replace($r, i2);
      }
      return [e4, a4];
    }(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, e3);
    if (a3)
      return this.populatedNationalNumberTemplate = a3[0], this.populatedNationalNumberTemplatePosition = a3[1], Cr(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1);
    this.resetFormat();
  } }, { key: "shouldTryNationalPrefixFormattingRule", value: function(e3, a3) {
    var r3 = a3.international, t3 = a3.nationalPrefix;
    if (e3.nationalPrefixFormattingRule()) {
      var o2 = e3.usesNationalPrefix();
      if (o2 && t3 || !o2 && !r3)
        return true;
    }
  } }], r2 && Gr(a2.prototype, r2), t2 && Gr(a2, t2), Object.defineProperty(a2, "prototype", { writable: false }), e2;
}();
function Qr(e2, a2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, a3) {
    var r2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
    if (null == r2)
      return;
    var t2, o2, i2 = [], n2 = true, d2 = false;
    try {
      for (r2 = r2.call(e3); !(n2 = (t2 = r2.next()).done) && (i2.push(t2.value), !a3 || i2.length !== a3); n2 = true)
        ;
    } catch (e4) {
      d2 = true, o2 = e4;
    } finally {
      try {
        n2 || null == r2.return || r2.return();
      } finally {
        if (d2)
          throw o2;
      }
    }
    return i2;
  }(e2, a2) || function(e3, a3) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return Kr(e3, a3);
    var r2 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === r2 && e3.constructor && (r2 = e3.constructor.name);
    if ("Map" === r2 || "Set" === r2)
      return Array.from(e3);
    if ("Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2))
      return Kr(e3, a3);
  }(e2, a2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Kr(e2, a2) {
  (null == a2 || a2 > e2.length) && (a2 = e2.length);
  for (var r2 = 0, t2 = new Array(a2); r2 < a2; r2++)
    t2[r2] = e2[r2];
  return t2;
}
function Jr(e2, a2) {
  for (var r2 = 0; r2 < a2.length; r2++) {
    var t2 = a2[r2];
    t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(e2, t2.key, t2);
  }
}
var qr = new RegExp("^" + ("[" + we + xe + "]+") + "$", "i"), Wr = "(?:[+＋][" + we + xe + "]*|[" + we + xe + "]+)", Zr = new RegExp("[^" + we + xe + "]+.*$"), Xr = /[^\d\[\]]/, et = function() {
  function e2(a3) {
    var r3 = a3.defaultCountry, t3 = a3.defaultCallingCode, o2 = a3.metadata, i2 = a3.onNationalSignificantNumberChange;
    !function(e3, a4) {
      if (!(e3 instanceof a4))
        throw new TypeError("Cannot call a class as a function");
    }(this, e2), this.defaultCountry = r3, this.defaultCallingCode = t3, this.metadata = o2, this.onNationalSignificantNumberChange = i2;
  }
  var a2, r2, t2;
  return a2 = e2, (r2 = [{ key: "input", value: function(e3, a3) {
    var r3, t3 = function(e4) {
      var a4 = function(e5) {
        var a5 = function(e6) {
          var a6, r5 = e6.search(Wr);
          if (!(r5 < 0))
            return "+" === (e6 = e6.slice(r5))[0] && (a6 = true, e6 = e6.slice(1)), e6 = e6.replace(Zr, ""), a6 && (e6 = "+" + e6), e6;
        }(e5) || "";
        return "+" === a5[0] ? [a5.slice(1), true] : [a5];
      }(e4), r4 = Qr(a4, 2), t4 = r4[0], o3 = r4[1];
      return qr.test(t4) || (t4 = ""), [t4, o3];
    }(e3), o2 = Qr(t3, 2), i2 = o2[0], n2 = o2[1], d2 = Xe(i2);
    return n2 && (a3.digits || (a3.startInternationalNumber(), d2 || (r3 = true))), d2 && this.inputDigits(d2, a3), { digits: d2, justLeadingPlus: r3 };
  } }, { key: "inputDigits", value: function(e3, a3) {
    var r3 = a3.digits, t3 = r3.length < 3 && r3.length + e3.length >= 3;
    if (a3.appendDigits(e3), t3 && this.extractIddPrefix(a3), this.isWaitingForCountryCallingCode(a3)) {
      if (!this.extractCountryCallingCode(a3))
        return;
    } else
      a3.appendNationalSignificantNumberDigits(e3);
    a3.international || this.hasExtractedNationalSignificantNumber || this.extractNationalSignificantNumber(a3.getNationalDigits(), function(e4) {
      return a3.update(e4);
    });
  } }, { key: "isWaitingForCountryCallingCode", value: function(e3) {
    var a3 = e3.international, r3 = e3.callingCode;
    return a3 && !r3;
  } }, { key: "extractCountryCallingCode", value: function(e3) {
    var a3 = Fa("+" + e3.getDigitsWithoutInternationalPrefix(), this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), r3 = a3.countryCallingCode, t3 = a3.number;
    if (r3)
      return e3.setCallingCode(r3), e3.update({ nationalSignificantNumber: t3 }), true;
  } }, { key: "reset", value: function(e3) {
    if (e3) {
      this.hasSelectedNumberingPlan = true;
      var a3 = e3._nationalPrefixForParsing();
      this.couldPossiblyExtractAnotherNationalSignificantNumber = a3 && Xr.test(a3);
    } else
      this.hasSelectedNumberingPlan = void 0, this.couldPossiblyExtractAnotherNationalSignificantNumber = void 0;
  } }, { key: "extractNationalSignificantNumber", value: function(e3, a3) {
    if (this.hasSelectedNumberingPlan) {
      var r3 = La(e3, this.metadata), t3 = r3.nationalPrefix, o2 = r3.nationalNumber, i2 = r3.carrierCode;
      if (o2 !== e3)
        return this.onExtractedNationalNumber(t3, i2, o2, e3, a3), true;
    }
  } }, { key: "extractAnotherNationalSignificantNumber", value: function(e3, a3, r3) {
    if (!this.hasExtractedNationalSignificantNumber)
      return this.extractNationalSignificantNumber(e3, r3);
    if (this.couldPossiblyExtractAnotherNationalSignificantNumber) {
      var t3 = La(e3, this.metadata), o2 = t3.nationalPrefix, i2 = t3.nationalNumber, n2 = t3.carrierCode;
      if (i2 !== a3)
        return this.onExtractedNationalNumber(o2, n2, i2, e3, r3), true;
    }
  } }, { key: "onExtractedNationalNumber", value: function(e3, a3, r3, t3, o2) {
    var i2, n2, d2 = t3.lastIndexOf(r3);
    if (d2 >= 0 && d2 === t3.length - r3.length) {
      n2 = true;
      var l2 = t3.slice(0, d2);
      l2 !== e3 && (i2 = l2);
    }
    o2({ nationalPrefix: e3, carrierCode: a3, nationalSignificantNumber: r3, nationalSignificantNumberMatchesInput: n2, complexPrefixBeforeNationalSignificantNumber: i2 }), this.hasExtractedNationalSignificantNumber = true, this.onNationalSignificantNumberChange();
  } }, { key: "reExtractNationalSignificantNumber", value: function(e3) {
    return !!this.extractAnotherNationalSignificantNumber(e3.getNationalDigits(), e3.nationalSignificantNumber, function(a3) {
      return e3.update(a3);
    }) || (this.extractIddPrefix(e3) || this.fixMissingPlus(e3) ? (this.extractCallingCodeAndNationalSignificantNumber(e3), true) : void 0);
  } }, { key: "extractIddPrefix", value: function(e3) {
    var a3 = e3.international, r3 = e3.IDDPrefix, t3 = e3.digits;
    if (e3.nationalSignificantNumber, !a3 && !r3) {
      var o2 = Ra(t3, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
      return void 0 !== o2 && o2 !== t3 ? (e3.update({ IDDPrefix: t3.slice(0, t3.length - o2.length) }), this.startInternationalNumber(e3, { country: void 0, callingCode: void 0 }), true) : void 0;
    }
  } }, { key: "fixMissingPlus", value: function(e3) {
    if (!e3.international) {
      var a3 = Da(e3.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), r3 = a3.countryCallingCode;
      if (a3.number, r3)
        return e3.update({ missingPlus: true }), this.startInternationalNumber(e3, { country: e3.country, callingCode: r3 }), true;
    }
  } }, { key: "startInternationalNumber", value: function(e3, a3) {
    var r3 = a3.country, t3 = a3.callingCode;
    e3.startInternationalNumber(r3, t3), e3.nationalSignificantNumber && (e3.resetNationalSignificantNumber(), this.onNationalSignificantNumberChange(), this.hasExtractedNationalSignificantNumber = void 0);
  } }, { key: "extractCallingCodeAndNationalSignificantNumber", value: function(e3) {
    this.extractCountryCallingCode(e3) && this.extractNationalSignificantNumber(e3.getNationalDigits(), function(a3) {
      return e3.update(a3);
    });
  } }]) && Jr(a2.prototype, r2), t2 && Jr(a2, t2), Object.defineProperty(a2, "prototype", { writable: false }), e2;
}();
function at(e2) {
  return at = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, at(e2);
}
function rt(e2, a2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, a3) {
    var r2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
    if (null == r2)
      return;
    var t2, o2, i2 = [], n2 = true, d2 = false;
    try {
      for (r2 = r2.call(e3); !(n2 = (t2 = r2.next()).done) && (i2.push(t2.value), !a3 || i2.length !== a3); n2 = true)
        ;
    } catch (e4) {
      d2 = true, o2 = e4;
    } finally {
      try {
        n2 || null == r2.return || r2.return();
      } finally {
        if (d2)
          throw o2;
      }
    }
    return i2;
  }(e2, a2) || function(e3, a3) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return tt(e3, a3);
    var r2 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === r2 && e3.constructor && (r2 = e3.constructor.name);
    if ("Map" === r2 || "Set" === r2)
      return Array.from(e3);
    if ("Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2))
      return tt(e3, a3);
  }(e2, a2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function tt(e2, a2) {
  (null == a2 || a2 > e2.length) && (a2 = e2.length);
  for (var r2 = 0, t2 = new Array(a2); r2 < a2; r2++)
    t2[r2] = e2[r2];
  return t2;
}
function ot(e2, a2) {
  for (var r2 = 0; r2 < a2.length; r2++) {
    var t2 = a2[r2];
    t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(e2, t2.key, t2);
  }
}
var it = function() {
  function e2(a3, r3) {
    !function(e3, a4) {
      if (!(e3 instanceof a4))
        throw new TypeError("Cannot call a class as a function");
    }(this, e2), this.metadata = new Ie(r3);
    var t3 = rt(this.getCountryAndCallingCode(a3), 2), o2 = t3[0], i2 = t3[1];
    this.defaultCountry = o2, this.defaultCallingCode = i2, this.reset();
  }
  var a2, r2, t2;
  return a2 = e2, r2 = [{ key: "getCountryAndCallingCode", value: function(e3) {
    var a3, r3;
    return e3 && ("object" === at(e3) ? (a3 = e3.defaultCountry, r3 = e3.defaultCallingCode) : a3 = e3), a3 && !this.metadata.hasCountry(a3) && (a3 = void 0), [a3, r3];
  } }, { key: "input", value: function(e3) {
    var a3 = this.parser.input(e3, this.state), r3 = a3.digits;
    if (a3.justLeadingPlus)
      this.formattedOutput = "+";
    else if (r3) {
      var t3;
      if (this.determineTheCountryIfNeeded(), this.state.nationalSignificantNumber && this.formatter.narrowDownMatchingFormats(this.state), this.metadata.hasSelectedNumberingPlan() && (t3 = this.formatter.format(r3, this.state)), void 0 === t3 && this.parser.reExtractNationalSignificantNumber(this.state)) {
        this.determineTheCountryIfNeeded();
        var o2 = this.state.getNationalDigits();
        o2 && (t3 = this.formatter.format(o2, this.state));
      }
      this.formattedOutput = t3 ? this.getFullNumber(t3) : this.getNonFormattedNumber();
    }
    return this.formattedOutput;
  } }, { key: "reset", value: function() {
    var e3 = this;
    return this.state = new yr({ onCountryChange: function(a3) {
      e3.country = a3;
    }, onCallingCodeChange: function(a3, r3) {
      e3.metadata.selectNumberingPlan(r3, a3), e3.formatter.reset(e3.metadata.numberingPlan, e3.state), e3.parser.reset(e3.metadata.numberingPlan);
    } }), this.formatter = new Hr({ state: this.state, metadata: this.metadata }), this.parser = new et({ defaultCountry: this.defaultCountry, defaultCallingCode: this.defaultCallingCode, metadata: this.metadata, state: this.state, onNationalSignificantNumberChange: function() {
      e3.determineTheCountryIfNeeded(), e3.formatter.reset(e3.metadata.numberingPlan, e3.state);
    } }), this.state.reset({ country: this.defaultCountry, callingCode: this.defaultCallingCode }), this.formattedOutput = "", this;
  } }, { key: "isInternational", value: function() {
    return this.state.international;
  } }, { key: "getCallingCode", value: function() {
    if (this.isInternational())
      return this.state.callingCode;
  } }, { key: "getCountryCallingCode", value: function() {
    return this.getCallingCode();
  } }, { key: "getCountry", value: function() {
    if (this.state.digits)
      return this._getCountry();
  } }, { key: "_getCountry", value: function() {
    return this.state.country;
  } }, { key: "determineTheCountryIfNeeded", value: function() {
    this.state.country && !this.isCountryCallingCodeAmbiguous() || this.determineTheCountry();
  } }, { key: "getFullNumber", value: function(e3) {
    var a3 = this;
    if (this.isInternational()) {
      var r3 = function(e4) {
        return a3.formatter.getInternationalPrefixBeforeCountryCallingCode(a3.state, { spacing: !!e4 }) + e4;
      }, t3 = this.state.callingCode;
      return r3(t3 ? e3 ? "".concat(t3, " ").concat(e3) : t3 : "".concat(this.state.getDigitsWithoutInternationalPrefix()));
    }
    return e3;
  } }, { key: "getNonFormattedNationalNumberWithPrefix", value: function() {
    var e3 = this.state, a3 = e3.nationalSignificantNumber, r3 = e3.complexPrefixBeforeNationalSignificantNumber, t3 = e3.nationalPrefix, o2 = a3, i2 = r3 || t3;
    return i2 && (o2 = i2 + o2), o2;
  } }, { key: "getNonFormattedNumber", value: function() {
    var e3 = this.state.nationalSignificantNumberMatchesInput;
    return this.getFullNumber(e3 ? this.getNonFormattedNationalNumberWithPrefix() : this.state.getNationalDigits());
  } }, { key: "getNonFormattedTemplate", value: function() {
    var e3 = this.getNonFormattedNumber();
    if (e3)
      return e3.replace(/[\+\d]/g, wr);
  } }, { key: "isCountryCallingCodeAmbiguous", value: function() {
    var e3 = this.state.callingCode, a3 = this.metadata.getCountryCodesForCallingCode(e3);
    return a3 && a3.length > 1;
  } }, { key: "determineTheCountry", value: function() {
    this.state.setCountry(Va(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, { nationalNumber: this.state.nationalSignificantNumber, defaultCountry: this.defaultCountry, metadata: this.metadata }));
  } }, { key: "getNumberValue", value: function() {
    var e3 = this.state, a3 = e3.digits, r3 = e3.callingCode, t3 = e3.country, o2 = e3.nationalSignificantNumber;
    if (a3)
      return this.isInternational() ? r3 ? "+" + r3 + o2 : "+" + a3 : t3 || r3 ? "+" + (t3 ? this.metadata.countryCallingCode() : r3) + o2 : void 0;
  } }, { key: "getNumber", value: function() {
    var e3 = this.state, a3 = e3.nationalSignificantNumber, r3 = e3.carrierCode, t3 = e3.callingCode, o2 = this._getCountry();
    if (a3 && (o2 || t3)) {
      if (o2 && o2 === this.defaultCountry) {
        var i2 = new Ie(this.metadata.metadata);
        i2.selectNumberingPlan(o2);
        var n2 = i2.numberingPlan.callingCode(), d2 = this.metadata.getCountryCodesForCallingCode(n2);
        if (d2.length > 1) {
          var l2 = ja(a3, { countries: d2, defaultCountry: this.defaultCountry, metadata: this.metadata.metadata });
          l2 && (o2 = l2);
        }
      }
      var s2 = new Ba(o2 || t3, a3, this.metadata.metadata);
      return r3 && (s2.carrierCode = r3), s2;
    }
  } }, { key: "isPossible", value: function() {
    var e3 = this.getNumber();
    return !!e3 && e3.isPossible();
  } }, { key: "isValid", value: function() {
    var e3 = this.getNumber();
    return !!e3 && e3.isValid();
  } }, { key: "getNationalNumber", value: function() {
    return this.state.nationalSignificantNumber;
  } }, { key: "getChars", value: function() {
    return (this.state.international ? "+" : "") + this.state.digits;
  } }, { key: "getTemplate", value: function() {
    return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || "";
  } }], r2 && ot(a2.prototype, r2), t2 && ot(a2, t2), Object.defineProperty(a2, "prototype", { writable: false }), e2;
}();
function nt(e2, a2, r2) {
  if (a2[e2])
    return new Ba(e2, a2[e2], r2);
}
function dt(e2) {
  return it.call(this, e2, de);
}
dt.prototype = Object.create(it.prototype, {}), dt.prototype.constructor = dt;
const lt = "o21pay-payment";
class st extends oe {
  static get properties() {
    return { merchant_id: { type: String, attribute: "merchant_id" }, survey_id: { type: String, attribute: "survey_id" }, secretkey: { type: String, attribute: "secretkey" }, funnel_id: { type: String, attribute: "funnel_id" }, apiurl: { type: String, attribute: "apiurl" }, form: { type: Boolean, attribute: "form" }, amount: { type: String, attribute: "amount" }, currency: { type: String, attribute: "currency" }, decimals: { type: String, attribute: "decimals" }, placeholder: { type: String, attribute: "placeholder" }, order_ref: { type: String, attribute: "order_ref" }, hidden_order_ref: { type: Boolean, attribute: "hidden_order_ref" }, hidden_pre_payment: { type: Boolean, attribute: "hidden_pre_payment" }, hidden_ticket: { type: Boolean, attribute: "hidden_ticket" }, mobile: { type: Boolean, attribute: "mobile" }, suggestion: { type: String, attribute: "suggestion" }, readonly: { type: Boolean, attribute: "readonly" }, hide_menu: { type: Boolean, attribute: "hide_menu" }, disabled: { type: Boolean, attribute: "disabled" }, qr_size: { type: String, attribute: "qr_size" }, primary_color: { type: String, attribute: "primary_color" }, data: { type: String, attribute: "data" }, locale: { type: String, attribute: "locale" } };
  }
  constructor() {
    super(), this.form = true, this.url = "", this.amount = "", this.apiurl = "http://localhost:3400/api/v1/", this.currency = "EUR", this.decimals = 2, this.order_ref = "{{date}}{{id}}", this.placeholder = "Type a number", this.hidden_order_ref = false, this.hidden_pre_payment = false, this.hidden_ticket = false, this.mobile = false, this.suggestion = "", this.arraySuggestion = [], this.qr_size = "180", this.primary_color = "#68d18d", this.locale = "en", navigator && (this.locale = navigator.userLanguage || navigator.languages && navigator.languages.length && navigator.languages[0] || navigator.language || navigator.browserLanguage || navigator.systemLanguage || "en");
  }
  init(e2, a2) {
    this.url = "";
    let r2 = this.renderRoot.querySelector(".o21pay-payment-full");
    r2.style.removeProperty("height"), this.renderRoot.querySelector(".close").style.visibility = "hidden", this.renderRoot.querySelector(".o21pay-edit").hidden = false, r2 = this.renderRoot.querySelector("#suggestion"), this.suggestion && this.suggestion.length ? r2.style.display = "block" : r2.style.display = "none", r2 = this.renderRoot.querySelector("#page2"), r2.style.display = "none", r2 = this.renderRoot.querySelector("#pay"), r2.style.display = "none", e2 && (this.amount = e2), this.order_ref = a2 || "";
  }
  async _createPaymentLink(e2, a2, r2, t2, o2, i2) {
    const n2 = this.apiurl + `merchants/${e2}/paymentlinks`, d2 = { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ secretkey: a2, amount: r2, currency_code: t2, order_ref: o2, type_payment_request: 2, id_survey: i2 }) }, l2 = await fetch(n2, d2), s2 = await l2.json();
    return s2.data ? s2.data.url : (console.log(s2), null);
  }
  async _createPaymentLinkFromFunnel(e2, a2, r2, t2, o2) {
    const i2 = this.apiurl + `funnels/${e2}/paymentlink`, n2 = { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ amount: a2, currency_code: r2, order_ref: t2, data: o2 }) }, d2 = await fetch(i2, n2), l2 = await d2.json();
    return l2.data ? l2.data.url : (console.log(l2), null);
  }
  async _onO21Pay(e2) {
    if (this.disabled)
      return;
    let a2 = this.renderRoot.querySelector("#amount");
    if (a2) {
      let e3 = a2.value;
      e3 = e3.replace(",", "."), e3 = e3.replace("€", ""), this.amount = e3;
    }
    this.amount && this.amount.length ? (a2 = this.renderRoot.querySelector("#order_ref"), a2 && (this.order_ref = a2.value), this.order_ref && this.order_ref.length ? this.__createO21PayQR() : alert("Missing order_ref")) : alert("Missing Amount");
  }
  __onClickPay() {
    const e2 = { detail: { url: this.url }, bubbles: true, composed: true };
    this.dispatchEvent(new CustomEvent("o21pay_QRclick", e2));
  }
  async __createO21PayQR() {
    let e2;
    if (this.funnel_id)
      e2 = await this._createPaymentLinkFromFunnel(this.funnel_id, this.amount, this.currency, this.order_ref, this.data);
    else {
      if (!this.merchant_id || !this.merchant_id.length)
        return void alert("Missing merchant_id");
      e2 = await this._createPaymentLink(this.merchant_id, this.secretkey, this.amount, this.currency, this.order_ref, this.survey_id);
    }
    const a2 = this.renderRoot.querySelector(".o21pay-payment-full");
    if (e2 && e2.length) {
      this.url = e2, (this.hide_menu || this.funnel_id) && (this.url += "&hm"), this.hidden_ticket && (this.url += "&wot"), this.locale && (this.url += `&lang=${this.locale}`.toLowerCase());
      const r2 = { detail: { url: this.url }, bubbles: true, composed: true };
      if (this.dispatchEvent(new CustomEvent("o21pay_payment_request", r2)), this.form) {
        let e3 = this.renderRoot.querySelector(".o21pay-edit");
        e3 && (e3.hidden = true, this.renderRoot.querySelector(".close").style.visibility = "visible"), e3 = this.renderRoot.querySelector("o21pay-qr"), e3.url = this.url, e3 = this.renderRoot.querySelector("#suggestion"), e3 && (e3.style.display = "none"), this.mobile ? (e3 = this.renderRoot.querySelector("#pay"), e3.style.display = "block") : (e3 = this.renderRoot.querySelector("#page2"), e3.style.display = "block"), this.mobile ? this.__onClickPay() : (a2.style.height = "200px", a2.style.display = "inline-block");
      } else
        a2 && (this.mobile ? this.__onClickPay() : a2.style.height = "52px");
    } else
      a2 && (a2.style.display = "none");
  }
  onInit(e2) {
    this.init(this.amount, this.order_ref);
  }
  onFocus(e2) {
    const a2 = e2.target;
    return true === a2.readOnly ? null : (a2.type = "number", a2.value = a2.lastValue, a2.value);
  }
  onBlur(e2) {
    const a2 = e2.target;
    a2.value && (a2.lastValue = a2.value, this.amount = a2.value);
  }
  changeViewInput(e2) {
    if (!e2)
      return;
    let a2 = this.amount;
    a2 && ("string" != typeof a2 || a2.length) && (e2.type = "", a2 = a2.replace(/[^\d\-.,]/g, "").replace(/,/g, ".").replace(/\.(?=.*\.)/g, ""), e2.lastValue = a2, e2.value = parseFloat(a2).toLocaleString(this.locale, { style: "currency", maximumFractionDigits: this.decimals, minimumFractionDigits: 2, currency: this.currency, currencyDisplay: "symbol" }));
  }
  _onTag(e2) {
    if (this.disabled)
      return;
    let a2 = e2.target.dataset.source;
    a2 && (this.amount = a2);
  }
  async firstUpdated(e2) {
    let a2 = false;
    if (true === this.hidden_pre_payment) {
      const e3 = this.renderRoot.querySelector(".o21pay-edit");
      e3 && (e3.hidden = false), a2 = true;
    } else {
      const e3 = this.renderRoot.querySelector(".o21pay-payment-full");
      e3 && (e3.style.display = "inline-block");
    }
    this.dispatchEvent(new CustomEvent("o21pay_init", { detail: { instance: this }, bubbles: true, composed: true })), a2 && this.__createO21PayQR();
  }
  updated(e2) {
    if (e2.has("amount")) {
      const e3 = this.renderRoot.getElementById("amount");
      this.changeViewInput(e3);
    }
    if (e2.has("readonly")) {
      let e3 = this.renderRoot.getElementById("amount");
      e3 && e3.setAttribute("readonly", "readonly"), e3 = this.renderRoot.getElementById("order_ref"), e3 && e3.setAttribute("readonly", "readonly");
    }
    if (e2.has("disabled")) {
      let e3 = this.renderRoot.getElementById("amount");
      e3 && e3.setAttribute("disabled", "disabled"), e3 = this.renderRoot.getElementById("order_ref"), e3 && e3.setAttribute("disabled", "disabled");
    }
    if (e2.has("hidden_order_ref")) {
      let e3 = this.renderRoot.getElementById("order_ref");
      e3 && e3.setAttribute("hidden", "hidden");
    }
    if (e2.has("suggestion")) {
      let e3 = this.renderRoot.getElementById("suggestion");
      if (e3)
        if (this.suggestion && this.suggestion.length) {
          const a2 = [];
          this.suggestion.split(",").forEach(function(e4) {
            e4.length && (e4 = Number(e4)) > 0 && !isNaN(e4) && a2.push(e4);
          }), this.arraySuggestion = a2, e3.style.display = "block";
        } else
          this.arraySuggestion = [], e3.style.display = "none";
      else
        this.arraySuggestion = [];
      this.requestUpdate();
    }
  }
  render() {
    return true === this.form ? T`
        <div class="o21pay-payment-container">
          <div class="o21pay-payment-full">
            ${this.hidden_pre_payment ? T`` : T`
                  <div class="close" @click=${this.onInit}></div>
                  <div class="o21pay-edit">
                    <input
                      id="amount"
                      class="o21pay-input"
                      type="number"
                      min="0.00"
                      max="1000000.00"
                      step="1.00"
                      .value="${this.amount}"
                      .placeholder="${this.placeholder}"
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
                    <button
                      class="o21pay-button"
                      style="background-color: ${this.primary_color}"
                      @click="${this._onO21Pay}"
                    >
                      <slot name="button_pay" />
                    </button>
                  </div>

                  <div
                    id="suggestion"
                    style="margin-top: 10px;animation: zoom-in-zoom-out 0.8s ease 1;text-align:center;"
                  >
                    ${this.arraySuggestion.map((e2) => T`<span
                        class="o21pay-tag"
                        data-source=${e2}
                        @click="${this._onTag}"
                      >
                        ${parseFloat(e2).toLocaleString(this.locale, { style: "currency", maximumFractionDigits: this.decimals, minimumFractionDigits: 2, currency: this.currency, currencyDisplay: "symbol" })}
                      </span>`)}
                  </div>
                `}

            <div id="page2">
              <o21pay-qr id="o21pay-qr" size="${this.qr_size}" theme="dark" shadow></o21pay-qr>
              <div class="o21pay-p-vc">
                <slot name="qr_text" />
              </div>
            </div>
          </div>

          <div id="pay">
            <button
              class="o21pay-button"
              style="background-color: ${this.primary_color}"
              @click="${this.__createO21PayQR}"
            >
              <slot name="button_pay" />
            </button>
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
      ` : T`
        <button
          class="o21pay-button"
          style="background-color: ${this.primary_color}"
          @click="${this._onO21Pay}"
        >
          <slot name="button_pay" />
        </button>
      `;
  }
}
var ct, mt, ut;
ct = st, ut = [ne], (mt = function(e2) {
  var a2 = function(e3, a3) {
    if ("object" != typeof e3 || null === e3)
      return e3;
    var r2 = e3[Symbol.toPrimitive];
    if (void 0 !== r2) {
      var t2 = r2.call(e3, a3 || "default");
      if ("object" != typeof t2)
        return t2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === a3 ? String : Number)(e3);
  }(e2, "string");
  return "symbol" == typeof a2 ? a2 : String(a2);
}(mt = "styles")) in ct ? Object.defineProperty(ct, mt, { value: ut, enumerable: true, configurable: true, writable: true }) : ct[mt] = ut;
const pt = window.customElements;
pt && !pt.get(lt) && pt.define(lt, st);
const ht = n`
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
  .fullscreen {
    background: #e1e4f0;
    padding: 0rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 9998;
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
    box-shadow: 0 8px 10px -5px rgb(0 0 0 / 20%), 0 16px 24px 2px rgb(0 0 0 / 14%),
      0 6px 30px 5px rgb(0 0 0 / 12%);
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
    content: ' ';
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
const gt = "o21pay-dialog";
class bt extends oe {
  static get properties() {
    return { width: { type: String, attribute: "width" }, height: { type: String, attribute: "height" }, mode: { type: String, attribute: "mode" }, url: { type: String }, open: { type: Boolean }, overlay: { type: Boolean }, hideSpinner: { type: Boolean }, texts: { type: Array, attribute: "texts" }, events: { hasChanged: (e2, a2) => true } };
  }
  constructor() {
    super(), this.open = false, this.oribitStyle = "borderColor: red; animationDuration: 1000ms;", this.width = "375px", this.height = "560px", this.modal = "dialog", this.overlay = false, this.texts = { TXT_CNX: "Connection in progress..." };
  }
  updated(e2) {
    if (e2.has("events")) {
      const a2 = e2.get("events"), r2 = this.events;
      a2 && window.removeEventListener("message", a2);
      const t2 = this;
      window.addEventListener("message", function(e3) {
        if (e3 && e3.data) {
          const a3 = e3.data;
          if (a3) {
            const e4 = a3.message;
            if ("o21pay_ready" === e4) {
              const e5 = t2.shadowRoot.getElementById("framePayment");
              e5 && (e5.style.opacity = 1);
            }
            r2 && e4 && r2(a3);
          }
        }
      });
    }
    super.updated(e2);
  }
  init(e2, a2, r2, t2 = "dialog") {
    if (!e2 || !e2.length)
      return false;
    void 0 !== a2 && (this.width = a2, this.width = parseInt(a2) + "px"), void 0 !== r2 && (this.height = r2, this.height = parseInt(r2) + "px"), void 0 !== t2 && (this.mode = t2), this.hideSpinner = false, e2 += `&time=${(/* @__PURE__ */ new Date()).getTime()}`;
    const o2 = this.renderRoot.querySelector("#framePayment");
    return !!o2 && (o2.style.opacity = 0, -1 !== this.mode.indexOf("drawer") && -1 === e2.indexOf("&close") && (e2 += "&close=1"), -1 === e2.indexOf("&reset") && (e2 += "&reset"), o2.src = e2, true);
  }
  reset() {
    this.shadowRoot.getElementById("framePayment").src = "about:blank";
  }
  overlayStyle() {
    return this.overlay ? T`<div class="overlay" />` : T``;
  }
  spinnerStyle() {
    return "display: " + (this.hideSpinner ? "none" : "block");
  }
  closeWindow() {
    this.open = false, this.events && this.events({ message: "o21pay_closed" }), this.reset();
  }
  render() {
    let e2 = "wrapper" + (this.open ? " open" : ""), a2 = "dialog", r2 = "", t2 = "close", o2 = `width:${this.width}; height:${this.height}`;
    return "drawer-left" === this.mode ? (a2 = "drawer", r2 = "drawer-header", t2 = "", o2 = `width:${this.width};left:0;`) : "drawer-right" === this.mode ? (a2 = "drawer", r2 = "drawer-header", t2 = "", o2 = `width:${this.width};right:0;`) : "fullscreen" === this.mode ? (a2 = "fullscreen", o2 = "") : t2 = "", T`
      <div class=${e2}>
        ${this.overlayStyle()}
        <div class=${a2} style=${o2}>
          <div class=${r2}></div>
          <div class=${t2} @click=${this.closeWindow}></div>
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
    this.open = false;
  }
}
!function(e2, a2, r2) {
  (a2 = function(e3) {
    var a3 = function(e4, a4) {
      if ("object" != typeof e4 || null === e4)
        return e4;
      var r3 = e4[Symbol.toPrimitive];
      if (void 0 !== r3) {
        var t2 = r3.call(e4, a4 || "default");
        if ("object" != typeof t2)
          return t2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === a4 ? String : Number)(e4);
    }(e3, "string");
    return "symbol" == typeof a3 ? a3 : String(a3);
  }(a2)) in e2 ? Object.defineProperty(e2, a2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[a2] = r2;
}(bt, "styles", [ht]);
const zt = window.customElements;
zt && !zt.get(gt) && zt.define(gt, bt);
var ft = {}, vt = {}, yt = {};
let kt;
const xt = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
yt.getSymbolSize = function(e2) {
  if (!e2)
    throw new Error('"version" cannot be null or undefined');
  if (e2 < 1 || e2 > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return 4 * e2 + 17;
}, yt.getSymbolTotalCodewords = function(e2) {
  return xt[e2];
}, yt.getBCHDigit = function(e2) {
  let a2 = 0;
  for (; 0 !== e2; )
    a2++, e2 >>>= 1;
  return a2;
}, yt.setToSJISFunction = function(e2) {
  if ("function" != typeof e2)
    throw new Error('"toSJISFunc" is not a valid function.');
  kt = e2;
}, yt.isKanjiModeEnabled = function() {
  return void 0 !== kt;
}, yt.toSJIS = function(e2) {
  return kt(e2);
};
var wt, $t = {};
function _t() {
  this.buffer = [], this.length = 0;
}
(wt = $t).L = { bit: 1 }, wt.M = { bit: 0 }, wt.Q = { bit: 3 }, wt.H = { bit: 2 }, wt.isValid = function(e2) {
  return e2 && void 0 !== e2.bit && e2.bit >= 0 && e2.bit < 4;
}, wt.from = function(e2, a2) {
  if (wt.isValid(e2))
    return e2;
  try {
    return function(e3) {
      if ("string" != typeof e3)
        throw new Error("Param is not a string");
      switch (e3.toLowerCase()) {
        case "l":
        case "low":
          return wt.L;
        case "m":
        case "medium":
          return wt.M;
        case "q":
        case "quartile":
          return wt.Q;
        case "h":
        case "high":
          return wt.H;
        default:
          throw new Error("Unknown EC Level: " + e3);
      }
    }(e2);
  } catch (e3) {
    return a2;
  }
}, _t.prototype = { get: function(e2) {
  const a2 = Math.floor(e2 / 8);
  return 1 == (this.buffer[a2] >>> 7 - e2 % 8 & 1);
}, put: function(e2, a2) {
  for (let r2 = 0; r2 < a2; r2++)
    this.putBit(1 == (e2 >>> a2 - r2 - 1 & 1));
}, getLengthInBits: function() {
  return this.length;
}, putBit: function(e2) {
  const a2 = Math.floor(this.length / 8);
  this.buffer.length <= a2 && this.buffer.push(0), e2 && (this.buffer[a2] |= 128 >>> this.length % 8), this.length++;
} };
var Ct = _t;
function Et(e2) {
  if (!e2 || e2 < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = e2, this.data = new Uint8Array(e2 * e2), this.reservedBit = new Uint8Array(e2 * e2);
}
Et.prototype.set = function(e2, a2, r2, t2) {
  const o2 = e2 * this.size + a2;
  this.data[o2] = r2, t2 && (this.reservedBit[o2] = true);
}, Et.prototype.get = function(e2, a2) {
  return this.data[e2 * this.size + a2];
}, Et.prototype.xor = function(e2, a2, r2) {
  this.data[e2 * this.size + a2] ^= r2;
}, Et.prototype.isReserved = function(e2, a2) {
  return this.reservedBit[e2 * this.size + a2];
};
var At = Et, St = {};
!function(e2) {
  const a2 = yt.getSymbolSize;
  e2.getRowColCoords = function(e3) {
    if (1 === e3)
      return [];
    const r2 = Math.floor(e3 / 7) + 2, t2 = a2(e3), o2 = 145 === t2 ? 26 : 2 * Math.ceil((t2 - 13) / (2 * r2 - 2)), i2 = [t2 - 7];
    for (let e4 = 1; e4 < r2 - 1; e4++)
      i2[e4] = i2[e4 - 1] - o2;
    return i2.push(6), i2.reverse();
  }, e2.getPositions = function(a3) {
    const r2 = [], t2 = e2.getRowColCoords(a3), o2 = t2.length;
    for (let e3 = 0; e3 < o2; e3++)
      for (let a4 = 0; a4 < o2; a4++)
        0 === e3 && 0 === a4 || 0 === e3 && a4 === o2 - 1 || e3 === o2 - 1 && 0 === a4 || r2.push([t2[e3], t2[a4]]);
    return r2;
  };
}(St);
var Nt = {};
const It = yt.getSymbolSize;
Nt.getPositions = function(e2) {
  const a2 = It(e2);
  return [[0, 0], [a2 - 7, 0], [0, a2 - 7]];
};
var Pt = {};
!function(e2) {
  e2.Patterns = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 };
  const a2 = 3, r2 = 3, t2 = 40, o2 = 10;
  function i2(a3, r3, t3) {
    switch (a3) {
      case e2.Patterns.PATTERN000:
        return (r3 + t3) % 2 == 0;
      case e2.Patterns.PATTERN001:
        return r3 % 2 == 0;
      case e2.Patterns.PATTERN010:
        return t3 % 3 == 0;
      case e2.Patterns.PATTERN011:
        return (r3 + t3) % 3 == 0;
      case e2.Patterns.PATTERN100:
        return (Math.floor(r3 / 2) + Math.floor(t3 / 3)) % 2 == 0;
      case e2.Patterns.PATTERN101:
        return r3 * t3 % 2 + r3 * t3 % 3 == 0;
      case e2.Patterns.PATTERN110:
        return (r3 * t3 % 2 + r3 * t3 % 3) % 2 == 0;
      case e2.Patterns.PATTERN111:
        return (r3 * t3 % 3 + (r3 + t3) % 2) % 2 == 0;
      default:
        throw new Error("bad maskPattern:" + a3);
    }
  }
  e2.isValid = function(e3) {
    return null != e3 && "" !== e3 && !isNaN(e3) && e3 >= 0 && e3 <= 7;
  }, e2.from = function(a3) {
    return e2.isValid(a3) ? parseInt(a3, 10) : void 0;
  }, e2.getPenaltyN1 = function(e3) {
    const r3 = e3.size;
    let t3 = 0, o3 = 0, i3 = 0, n2 = null, d2 = null;
    for (let l2 = 0; l2 < r3; l2++) {
      o3 = i3 = 0, n2 = d2 = null;
      for (let s2 = 0; s2 < r3; s2++) {
        let r4 = e3.get(l2, s2);
        r4 === n2 ? o3++ : (o3 >= 5 && (t3 += a2 + (o3 - 5)), n2 = r4, o3 = 1), r4 = e3.get(s2, l2), r4 === d2 ? i3++ : (i3 >= 5 && (t3 += a2 + (i3 - 5)), d2 = r4, i3 = 1);
      }
      o3 >= 5 && (t3 += a2 + (o3 - 5)), i3 >= 5 && (t3 += a2 + (i3 - 5));
    }
    return t3;
  }, e2.getPenaltyN2 = function(e3) {
    const a3 = e3.size;
    let t3 = 0;
    for (let r3 = 0; r3 < a3 - 1; r3++)
      for (let o3 = 0; o3 < a3 - 1; o3++) {
        const a4 = e3.get(r3, o3) + e3.get(r3, o3 + 1) + e3.get(r3 + 1, o3) + e3.get(r3 + 1, o3 + 1);
        4 !== a4 && 0 !== a4 || t3++;
      }
    return t3 * r2;
  }, e2.getPenaltyN3 = function(e3) {
    const a3 = e3.size;
    let r3 = 0, o3 = 0, i3 = 0;
    for (let t3 = 0; t3 < a3; t3++) {
      o3 = i3 = 0;
      for (let n2 = 0; n2 < a3; n2++)
        o3 = o3 << 1 & 2047 | e3.get(t3, n2), n2 >= 10 && (1488 === o3 || 93 === o3) && r3++, i3 = i3 << 1 & 2047 | e3.get(n2, t3), n2 >= 10 && (1488 === i3 || 93 === i3) && r3++;
    }
    return r3 * t2;
  }, e2.getPenaltyN4 = function(e3) {
    let a3 = 0;
    const r3 = e3.data.length;
    for (let t3 = 0; t3 < r3; t3++)
      a3 += e3.data[t3];
    return Math.abs(Math.ceil(100 * a3 / r3 / 5) - 10) * o2;
  }, e2.applyMask = function(e3, a3) {
    const r3 = a3.size;
    for (let t3 = 0; t3 < r3; t3++)
      for (let o3 = 0; o3 < r3; o3++)
        a3.isReserved(o3, t3) || a3.xor(o3, t3, i2(e3, o3, t3));
  }, e2.getBestMask = function(a3, r3) {
    const t3 = Object.keys(e2.Patterns).length;
    let o3 = 0, i3 = 1 / 0;
    for (let n2 = 0; n2 < t3; n2++) {
      r3(n2), e2.applyMask(n2, a3);
      const t4 = e2.getPenaltyN1(a3) + e2.getPenaltyN2(a3) + e2.getPenaltyN3(a3) + e2.getPenaltyN4(a3);
      e2.applyMask(n2, a3), t4 < i3 && (i3 = t4, o3 = n2);
    }
    return o3;
  };
}(Pt);
var Bt = {};
const Mt = $t, Ot = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81], Rt = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
Bt.getBlocksCount = function(e2, a2) {
  switch (a2) {
    case Mt.L:
      return Ot[4 * (e2 - 1) + 0];
    case Mt.M:
      return Ot[4 * (e2 - 1) + 1];
    case Mt.Q:
      return Ot[4 * (e2 - 1) + 2];
    case Mt.H:
      return Ot[4 * (e2 - 1) + 3];
    default:
      return;
  }
}, Bt.getTotalCodewordsCount = function(e2, a2) {
  switch (a2) {
    case Mt.L:
      return Rt[4 * (e2 - 1) + 0];
    case Mt.M:
      return Rt[4 * (e2 - 1) + 1];
    case Mt.Q:
      return Rt[4 * (e2 - 1) + 2];
    case Mt.H:
      return Rt[4 * (e2 - 1) + 3];
    default:
      return;
  }
};
var Lt = {}, Tt = {};
const Dt = new Uint8Array(512), Ft = new Uint8Array(256);
!function() {
  let e2 = 1;
  for (let a2 = 0; a2 < 255; a2++)
    Dt[a2] = e2, Ft[e2] = a2, e2 <<= 1, 256 & e2 && (e2 ^= 285);
  for (let e3 = 255; e3 < 512; e3++)
    Dt[e3] = Dt[e3 - 255];
}(), Tt.log = function(e2) {
  if (e2 < 1)
    throw new Error("log(" + e2 + ")");
  return Ft[e2];
}, Tt.exp = function(e2) {
  return Dt[e2];
}, Tt.mul = function(e2, a2) {
  return 0 === e2 || 0 === a2 ? 0 : Dt[Ft[e2] + Ft[a2]];
}, function(e2) {
  const a2 = Tt;
  e2.mul = function(e3, r2) {
    const t2 = new Uint8Array(e3.length + r2.length - 1);
    for (let o2 = 0; o2 < e3.length; o2++)
      for (let i2 = 0; i2 < r2.length; i2++)
        t2[o2 + i2] ^= a2.mul(e3[o2], r2[i2]);
    return t2;
  }, e2.mod = function(e3, r2) {
    let t2 = new Uint8Array(e3);
    for (; t2.length - r2.length >= 0; ) {
      const e4 = t2[0];
      for (let o3 = 0; o3 < r2.length; o3++)
        t2[o3] ^= a2.mul(r2[o3], e4);
      let o2 = 0;
      for (; o2 < t2.length && 0 === t2[o2]; )
        o2++;
      t2 = t2.slice(o2);
    }
    return t2;
  }, e2.generateECPolynomial = function(r2) {
    let t2 = new Uint8Array([1]);
    for (let o2 = 0; o2 < r2; o2++)
      t2 = e2.mul(t2, new Uint8Array([1, a2.exp(o2)]));
    return t2;
  };
}(Lt);
const Ut = Lt;
function Gt(e2) {
  this.genPoly = void 0, this.degree = e2, this.degree && this.initialize(this.degree);
}
Gt.prototype.initialize = function(e2) {
  this.degree = e2, this.genPoly = Ut.generateECPolynomial(this.degree);
}, Gt.prototype.encode = function(e2) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const a2 = new Uint8Array(e2.length + this.degree);
  a2.set(e2);
  const r2 = Ut.mod(a2, this.genPoly), t2 = this.degree - r2.length;
  if (t2 > 0) {
    const e3 = new Uint8Array(this.degree);
    return e3.set(r2, t2), e3;
  }
  return r2;
};
var jt = Gt, Yt = {}, Vt = {}, Ht = { isValid: function(e2) {
  return !isNaN(e2) && e2 >= 1 && e2 <= 40;
} }, Qt = {};
const Kt = "[0-9]+";
let Jt = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Jt = Jt.replace(/u/g, "\\u");
const qt = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Jt + ")(?:.|[\r\n]))+";
Qt.KANJI = new RegExp(Jt, "g"), Qt.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), Qt.BYTE = new RegExp(qt, "g"), Qt.NUMERIC = new RegExp(Kt, "g"), Qt.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
const Wt = new RegExp("^" + Jt + "$"), Zt = new RegExp("^" + Kt + "$"), Xt = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
Qt.testKanji = function(e2) {
  return Wt.test(e2);
}, Qt.testNumeric = function(e2) {
  return Zt.test(e2);
}, Qt.testAlphanumeric = function(e2) {
  return Xt.test(e2);
}, function(e2) {
  const a2 = Ht, r2 = Qt;
  e2.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }, e2.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }, e2.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }, e2.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }, e2.MIXED = { bit: -1 }, e2.getCharCountIndicator = function(e3, r3) {
    if (!e3.ccBits)
      throw new Error("Invalid mode: " + e3);
    if (!a2.isValid(r3))
      throw new Error("Invalid version: " + r3);
    return r3 >= 1 && r3 < 10 ? e3.ccBits[0] : r3 < 27 ? e3.ccBits[1] : e3.ccBits[2];
  }, e2.getBestModeForData = function(a3) {
    return r2.testNumeric(a3) ? e2.NUMERIC : r2.testAlphanumeric(a3) ? e2.ALPHANUMERIC : r2.testKanji(a3) ? e2.KANJI : e2.BYTE;
  }, e2.toString = function(e3) {
    if (e3 && e3.id)
      return e3.id;
    throw new Error("Invalid mode");
  }, e2.isValid = function(e3) {
    return e3 && e3.bit && e3.ccBits;
  }, e2.from = function(a3, r3) {
    if (e2.isValid(a3))
      return a3;
    try {
      return function(a4) {
        if ("string" != typeof a4)
          throw new Error("Param is not a string");
        switch (a4.toLowerCase()) {
          case "numeric":
            return e2.NUMERIC;
          case "alphanumeric":
            return e2.ALPHANUMERIC;
          case "kanji":
            return e2.KANJI;
          case "byte":
            return e2.BYTE;
          default:
            throw new Error("Unknown mode: " + a4);
        }
      }(a3);
    } catch (e3) {
      return r3;
    }
  };
}(Vt), function(e2) {
  const a2 = yt, r2 = Bt, t2 = $t, o2 = Vt, i2 = Ht, n2 = a2.getBCHDigit(7973);
  function d2(e3, a3) {
    return o2.getCharCountIndicator(e3, a3) + 4;
  }
  function l2(e3, a3) {
    let r3 = 0;
    return e3.forEach(function(e4) {
      const t3 = d2(e4.mode, a3);
      r3 += t3 + e4.getBitsLength();
    }), r3;
  }
  e2.from = function(e3, a3) {
    return i2.isValid(e3) ? parseInt(e3, 10) : a3;
  }, e2.getCapacity = function(e3, t3, n3) {
    if (!i2.isValid(e3))
      throw new Error("Invalid QR Code version");
    void 0 === n3 && (n3 = o2.BYTE);
    const l3 = 8 * (a2.getSymbolTotalCodewords(e3) - r2.getTotalCodewordsCount(e3, t3));
    if (n3 === o2.MIXED)
      return l3;
    const s2 = l3 - d2(n3, e3);
    switch (n3) {
      case o2.NUMERIC:
        return Math.floor(s2 / 10 * 3);
      case o2.ALPHANUMERIC:
        return Math.floor(s2 / 11 * 2);
      case o2.KANJI:
        return Math.floor(s2 / 13);
      case o2.BYTE:
      default:
        return Math.floor(s2 / 8);
    }
  }, e2.getBestVersionForData = function(a3, r3) {
    let i3;
    const n3 = t2.from(r3, t2.M);
    if (Array.isArray(a3)) {
      if (a3.length > 1)
        return function(a4, r4) {
          for (let t3 = 1; t3 <= 40; t3++)
            if (l2(a4, t3) <= e2.getCapacity(t3, r4, o2.MIXED))
              return t3;
        }(a3, n3);
      if (0 === a3.length)
        return 1;
      i3 = a3[0];
    } else
      i3 = a3;
    return function(a4, r4, t3) {
      for (let o3 = 1; o3 <= 40; o3++)
        if (r4 <= e2.getCapacity(o3, t3, a4))
          return o3;
    }(i3.mode, i3.getLength(), n3);
  }, e2.getEncodedBits = function(e3) {
    if (!i2.isValid(e3) || e3 < 7)
      throw new Error("Invalid QR Code version");
    let r3 = e3 << 12;
    for (; a2.getBCHDigit(r3) - n2 >= 0; )
      r3 ^= 7973 << a2.getBCHDigit(r3) - n2;
    return e3 << 12 | r3;
  };
}(Yt);
var eo = {};
const ao = yt, ro = ao.getBCHDigit(1335);
eo.getEncodedBits = function(e2, a2) {
  const r2 = e2.bit << 3 | a2;
  let t2 = r2 << 10;
  for (; ao.getBCHDigit(t2) - ro >= 0; )
    t2 ^= 1335 << ao.getBCHDigit(t2) - ro;
  return 21522 ^ (r2 << 10 | t2);
};
var to = {};
const oo = Vt;
function io(e2) {
  this.mode = oo.NUMERIC, this.data = e2.toString();
}
io.getBitsLength = function(e2) {
  return 10 * Math.floor(e2 / 3) + (e2 % 3 ? e2 % 3 * 3 + 1 : 0);
}, io.prototype.getLength = function() {
  return this.data.length;
}, io.prototype.getBitsLength = function() {
  return io.getBitsLength(this.data.length);
}, io.prototype.write = function(e2) {
  let a2, r2, t2;
  for (a2 = 0; a2 + 3 <= this.data.length; a2 += 3)
    r2 = this.data.substr(a2, 3), t2 = parseInt(r2, 10), e2.put(t2, 10);
  const o2 = this.data.length - a2;
  o2 > 0 && (r2 = this.data.substr(a2), t2 = parseInt(r2, 10), e2.put(t2, 3 * o2 + 1));
};
var no = io;
const lo = Vt, so = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
function co(e2) {
  this.mode = lo.ALPHANUMERIC, this.data = e2;
}
co.getBitsLength = function(e2) {
  return 11 * Math.floor(e2 / 2) + e2 % 2 * 6;
}, co.prototype.getLength = function() {
  return this.data.length;
}, co.prototype.getBitsLength = function() {
  return co.getBitsLength(this.data.length);
}, co.prototype.write = function(e2) {
  let a2;
  for (a2 = 0; a2 + 2 <= this.data.length; a2 += 2) {
    let r2 = 45 * so.indexOf(this.data[a2]);
    r2 += so.indexOf(this.data[a2 + 1]), e2.put(r2, 11);
  }
  this.data.length % 2 && e2.put(so.indexOf(this.data[a2]), 6);
};
var mo = co;
const uo = function(e2) {
  for (var a2 = [], r2 = e2.length, t2 = 0; t2 < r2; t2++) {
    var o2 = e2.charCodeAt(t2);
    if (o2 >= 55296 && o2 <= 56319 && r2 > t2 + 1) {
      var i2 = e2.charCodeAt(t2 + 1);
      i2 >= 56320 && i2 <= 57343 && (o2 = 1024 * (o2 - 55296) + i2 - 56320 + 65536, t2 += 1);
    }
    o2 < 128 ? a2.push(o2) : o2 < 2048 ? (a2.push(o2 >> 6 | 192), a2.push(63 & o2 | 128)) : o2 < 55296 || o2 >= 57344 && o2 < 65536 ? (a2.push(o2 >> 12 | 224), a2.push(o2 >> 6 & 63 | 128), a2.push(63 & o2 | 128)) : o2 >= 65536 && o2 <= 1114111 ? (a2.push(o2 >> 18 | 240), a2.push(o2 >> 12 & 63 | 128), a2.push(o2 >> 6 & 63 | 128), a2.push(63 & o2 | 128)) : a2.push(239, 191, 189);
  }
  return new Uint8Array(a2).buffer;
}, po = Vt;
function ho(e2) {
  this.mode = po.BYTE, "string" == typeof e2 && (e2 = uo(e2)), this.data = new Uint8Array(e2);
}
ho.getBitsLength = function(e2) {
  return 8 * e2;
}, ho.prototype.getLength = function() {
  return this.data.length;
}, ho.prototype.getBitsLength = function() {
  return ho.getBitsLength(this.data.length);
}, ho.prototype.write = function(e2) {
  for (let a2 = 0, r2 = this.data.length; a2 < r2; a2++)
    e2.put(this.data[a2], 8);
};
var go = ho;
const bo = Vt, zo = yt;
function fo(e2) {
  this.mode = bo.KANJI, this.data = e2;
}
fo.getBitsLength = function(e2) {
  return 13 * e2;
}, fo.prototype.getLength = function() {
  return this.data.length;
}, fo.prototype.getBitsLength = function() {
  return fo.getBitsLength(this.data.length);
}, fo.prototype.write = function(e2) {
  let a2;
  for (a2 = 0; a2 < this.data.length; a2++) {
    let r2 = zo.toSJIS(this.data[a2]);
    if (r2 >= 33088 && r2 <= 40956)
      r2 -= 33088;
    else {
      if (!(r2 >= 57408 && r2 <= 60351))
        throw new Error("Invalid SJIS character: " + this.data[a2] + "\nMake sure your charset is UTF-8");
      r2 -= 49472;
    }
    r2 = 192 * (r2 >>> 8 & 255) + (255 & r2), e2.put(r2, 13);
  }
};
var vo = fo, yo = { exports: {} };
!function(e2) {
  var a2 = { single_source_shortest_paths: function(e3, r2, t2) {
    var o2 = {}, i2 = {};
    i2[r2] = 0;
    var n2, d2, l2, s2, c2, m2, u2, p2 = a2.PriorityQueue.make();
    for (p2.push(r2, 0); !p2.empty(); )
      for (l2 in d2 = (n2 = p2.pop()).value, s2 = n2.cost, c2 = e3[d2] || {})
        c2.hasOwnProperty(l2) && (m2 = s2 + c2[l2], u2 = i2[l2], (void 0 === i2[l2] || u2 > m2) && (i2[l2] = m2, p2.push(l2, m2), o2[l2] = d2));
    if (void 0 !== t2 && void 0 === i2[t2]) {
      var h2 = ["Could not find a path from ", r2, " to ", t2, "."].join("");
      throw new Error(h2);
    }
    return o2;
  }, extract_shortest_path_from_predecessor_list: function(e3, a3) {
    for (var r2 = [], t2 = a3; t2; )
      r2.push(t2), e3[t2], t2 = e3[t2];
    return r2.reverse(), r2;
  }, find_path: function(e3, r2, t2) {
    var o2 = a2.single_source_shortest_paths(e3, r2, t2);
    return a2.extract_shortest_path_from_predecessor_list(o2, t2);
  }, PriorityQueue: { make: function(e3) {
    var r2, t2 = a2.PriorityQueue, o2 = {};
    for (r2 in e3 = e3 || {}, t2)
      t2.hasOwnProperty(r2) && (o2[r2] = t2[r2]);
    return o2.queue = [], o2.sorter = e3.sorter || t2.default_sorter, o2;
  }, default_sorter: function(e3, a3) {
    return e3.cost - a3.cost;
  }, push: function(e3, a3) {
    var r2 = { value: e3, cost: a3 };
    this.queue.push(r2), this.queue.sort(this.sorter);
  }, pop: function() {
    return this.queue.shift();
  }, empty: function() {
    return 0 === this.queue.length;
  } } };
  e2.exports = a2;
}(yo);
var ko = yo.exports;
!function(e2) {
  const a2 = Vt, r2 = no, t2 = mo, o2 = go, i2 = vo, n2 = Qt, d2 = yt, l2 = ko;
  function s2(e3) {
    return unescape(encodeURIComponent(e3)).length;
  }
  function c2(e3, a3, r3) {
    const t3 = [];
    let o3;
    for (; null !== (o3 = e3.exec(r3)); )
      t3.push({ data: o3[0], index: o3.index, mode: a3, length: o3[0].length });
    return t3;
  }
  function m2(e3) {
    const r3 = c2(n2.NUMERIC, a2.NUMERIC, e3), t3 = c2(n2.ALPHANUMERIC, a2.ALPHANUMERIC, e3);
    let o3, i3;
    d2.isKanjiModeEnabled() ? (o3 = c2(n2.BYTE, a2.BYTE, e3), i3 = c2(n2.KANJI, a2.KANJI, e3)) : (o3 = c2(n2.BYTE_KANJI, a2.BYTE, e3), i3 = []);
    return r3.concat(t3, o3, i3).sort(function(e4, a3) {
      return e4.index - a3.index;
    }).map(function(e4) {
      return { data: e4.data, mode: e4.mode, length: e4.length };
    });
  }
  function u2(e3, n3) {
    switch (n3) {
      case a2.NUMERIC:
        return r2.getBitsLength(e3);
      case a2.ALPHANUMERIC:
        return t2.getBitsLength(e3);
      case a2.KANJI:
        return i2.getBitsLength(e3);
      case a2.BYTE:
        return o2.getBitsLength(e3);
    }
  }
  function p2(e3, n3) {
    let l3;
    const s3 = a2.getBestModeForData(e3);
    if (l3 = a2.from(n3, s3), l3 !== a2.BYTE && l3.bit < s3.bit)
      throw new Error('"' + e3 + '" cannot be encoded with mode ' + a2.toString(l3) + ".\n Suggested mode is: " + a2.toString(s3));
    switch (l3 !== a2.KANJI || d2.isKanjiModeEnabled() || (l3 = a2.BYTE), l3) {
      case a2.NUMERIC:
        return new r2(e3);
      case a2.ALPHANUMERIC:
        return new t2(e3);
      case a2.KANJI:
        return new i2(e3);
      case a2.BYTE:
        return new o2(e3);
    }
  }
  e2.fromArray = function(e3) {
    return e3.reduce(function(e4, a3) {
      return "string" == typeof a3 ? e4.push(p2(a3, null)) : a3.data && e4.push(p2(a3.data, a3.mode)), e4;
    }, []);
  }, e2.fromString = function(r3, t3) {
    const o3 = function(e3) {
      const r4 = [];
      for (let t4 = 0; t4 < e3.length; t4++) {
        const o4 = e3[t4];
        switch (o4.mode) {
          case a2.NUMERIC:
            r4.push([o4, { data: o4.data, mode: a2.ALPHANUMERIC, length: o4.length }, { data: o4.data, mode: a2.BYTE, length: o4.length }]);
            break;
          case a2.ALPHANUMERIC:
            r4.push([o4, { data: o4.data, mode: a2.BYTE, length: o4.length }]);
            break;
          case a2.KANJI:
            r4.push([o4, { data: o4.data, mode: a2.BYTE, length: s2(o4.data) }]);
            break;
          case a2.BYTE:
            r4.push([{ data: o4.data, mode: a2.BYTE, length: s2(o4.data) }]);
        }
      }
      return r4;
    }(m2(r3, d2.isKanjiModeEnabled())), i3 = function(e3, r4) {
      const t4 = {}, o4 = { start: {} };
      let i4 = ["start"];
      for (let n4 = 0; n4 < e3.length; n4++) {
        const d3 = e3[n4], l3 = [];
        for (let e4 = 0; e4 < d3.length; e4++) {
          const s3 = d3[e4], c4 = "" + n4 + e4;
          l3.push(c4), t4[c4] = { node: s3, lastCount: 0 }, o4[c4] = {};
          for (let e5 = 0; e5 < i4.length; e5++) {
            const n5 = i4[e5];
            t4[n5] && t4[n5].node.mode === s3.mode ? (o4[n5][c4] = u2(t4[n5].lastCount + s3.length, s3.mode) - u2(t4[n5].lastCount, s3.mode), t4[n5].lastCount += s3.length) : (t4[n5] && (t4[n5].lastCount = s3.length), o4[n5][c4] = u2(s3.length, s3.mode) + 4 + a2.getCharCountIndicator(s3.mode, r4));
          }
        }
        i4 = l3;
      }
      for (let e4 = 0; e4 < i4.length; e4++)
        o4[i4[e4]].end = 0;
      return { map: o4, table: t4 };
    }(o3, t3), n3 = l2.find_path(i3.map, "start", "end"), c3 = [];
    for (let e3 = 1; e3 < n3.length - 1; e3++)
      c3.push(i3.table[n3[e3]].node);
    return e2.fromArray(function(e3) {
      return e3.reduce(function(e4, a3) {
        const r4 = e4.length - 1 >= 0 ? e4[e4.length - 1] : null;
        return r4 && r4.mode === a3.mode ? (e4[e4.length - 1].data += a3.data, e4) : (e4.push(a3), e4);
      }, []);
    }(c3));
  }, e2.rawSplit = function(a3) {
    return e2.fromArray(m2(a3, d2.isKanjiModeEnabled()));
  };
}(to);
const xo = yt, wo = $t, $o = Ct, _o = At, Co = St, Eo = Nt, Ao = Pt, So = Bt, No = jt, Io = Yt, Po = eo, Bo = Vt, Mo = to;
function Oo(e2, a2, r2) {
  const t2 = e2.size, o2 = Po.getEncodedBits(a2, r2);
  let i2, n2;
  for (i2 = 0; i2 < 15; i2++)
    n2 = 1 == (o2 >> i2 & 1), i2 < 6 ? e2.set(i2, 8, n2, true) : i2 < 8 ? e2.set(i2 + 1, 8, n2, true) : e2.set(t2 - 15 + i2, 8, n2, true), i2 < 8 ? e2.set(8, t2 - i2 - 1, n2, true) : i2 < 9 ? e2.set(8, 15 - i2 - 1 + 1, n2, true) : e2.set(8, 15 - i2 - 1, n2, true);
  e2.set(t2 - 8, 8, 1, true);
}
function Ro(e2, a2, r2) {
  const t2 = new $o();
  r2.forEach(function(a3) {
    t2.put(a3.mode.bit, 4), t2.put(a3.getLength(), Bo.getCharCountIndicator(a3.mode, e2)), a3.write(t2);
  });
  const o2 = 8 * (xo.getSymbolTotalCodewords(e2) - So.getTotalCodewordsCount(e2, a2));
  for (t2.getLengthInBits() + 4 <= o2 && t2.put(0, 4); t2.getLengthInBits() % 8 != 0; )
    t2.putBit(0);
  const i2 = (o2 - t2.getLengthInBits()) / 8;
  for (let e3 = 0; e3 < i2; e3++)
    t2.put(e3 % 2 ? 17 : 236, 8);
  return function(e3, a3, r3) {
    const t3 = xo.getSymbolTotalCodewords(a3), o3 = So.getTotalCodewordsCount(a3, r3), i3 = t3 - o3, n2 = So.getBlocksCount(a3, r3), d2 = t3 % n2, l2 = n2 - d2, s2 = Math.floor(t3 / n2), c2 = Math.floor(i3 / n2), m2 = c2 + 1, u2 = s2 - c2, p2 = new No(u2);
    let h2 = 0;
    const g2 = new Array(n2), b2 = new Array(n2);
    let z2 = 0;
    const f2 = new Uint8Array(e3.buffer);
    for (let e4 = 0; e4 < n2; e4++) {
      const a4 = e4 < l2 ? c2 : m2;
      g2[e4] = f2.slice(h2, h2 + a4), b2[e4] = p2.encode(g2[e4]), h2 += a4, z2 = Math.max(z2, a4);
    }
    const v2 = new Uint8Array(t3);
    let y2, k2, x2 = 0;
    for (y2 = 0; y2 < z2; y2++)
      for (k2 = 0; k2 < n2; k2++)
        y2 < g2[k2].length && (v2[x2++] = g2[k2][y2]);
    for (y2 = 0; y2 < u2; y2++)
      for (k2 = 0; k2 < n2; k2++)
        v2[x2++] = b2[k2][y2];
    return v2;
  }(t2, e2, a2);
}
function Lo(e2, a2, r2, t2) {
  let o2;
  if (Array.isArray(e2))
    o2 = Mo.fromArray(e2);
  else {
    if ("string" != typeof e2)
      throw new Error("Invalid data");
    {
      let t3 = a2;
      if (!t3) {
        const a3 = Mo.rawSplit(e2);
        t3 = Io.getBestVersionForData(a3, r2);
      }
      o2 = Mo.fromString(e2, t3 || 40);
    }
  }
  const i2 = Io.getBestVersionForData(o2, r2);
  if (!i2)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (a2) {
    if (a2 < i2)
      throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + i2 + ".\n");
  } else
    a2 = i2;
  const n2 = Ro(a2, r2, o2), d2 = xo.getSymbolSize(a2), l2 = new _o(d2);
  return function(e3, a3) {
    const r3 = e3.size, t3 = Eo.getPositions(a3);
    for (let a4 = 0; a4 < t3.length; a4++) {
      const o3 = t3[a4][0], i3 = t3[a4][1];
      for (let a5 = -1; a5 <= 7; a5++)
        if (!(o3 + a5 <= -1 || r3 <= o3 + a5))
          for (let t4 = -1; t4 <= 7; t4++)
            i3 + t4 <= -1 || r3 <= i3 + t4 || (a5 >= 0 && a5 <= 6 && (0 === t4 || 6 === t4) || t4 >= 0 && t4 <= 6 && (0 === a5 || 6 === a5) || a5 >= 2 && a5 <= 4 && t4 >= 2 && t4 <= 4 ? e3.set(o3 + a5, i3 + t4, true, true) : e3.set(o3 + a5, i3 + t4, false, true));
    }
  }(l2, a2), function(e3) {
    const a3 = e3.size;
    for (let r3 = 8; r3 < a3 - 8; r3++) {
      const a4 = r3 % 2 == 0;
      e3.set(r3, 6, a4, true), e3.set(6, r3, a4, true);
    }
  }(l2), function(e3, a3) {
    const r3 = Co.getPositions(a3);
    for (let a4 = 0; a4 < r3.length; a4++) {
      const t3 = r3[a4][0], o3 = r3[a4][1];
      for (let a5 = -2; a5 <= 2; a5++)
        for (let r4 = -2; r4 <= 2; r4++)
          -2 === a5 || 2 === a5 || -2 === r4 || 2 === r4 || 0 === a5 && 0 === r4 ? e3.set(t3 + a5, o3 + r4, true, true) : e3.set(t3 + a5, o3 + r4, false, true);
    }
  }(l2, a2), Oo(l2, r2, 0), a2 >= 7 && function(e3, a3) {
    const r3 = e3.size, t3 = Io.getEncodedBits(a3);
    let o3, i3, n3;
    for (let a4 = 0; a4 < 18; a4++)
      o3 = Math.floor(a4 / 3), i3 = a4 % 3 + r3 - 8 - 3, n3 = 1 == (t3 >> a4 & 1), e3.set(o3, i3, n3, true), e3.set(i3, o3, n3, true);
  }(l2, a2), function(e3, a3) {
    const r3 = e3.size;
    let t3 = -1, o3 = r3 - 1, i3 = 7, n3 = 0;
    for (let d3 = r3 - 1; d3 > 0; d3 -= 2)
      for (6 === d3 && d3--; ; ) {
        for (let r4 = 0; r4 < 2; r4++)
          if (!e3.isReserved(o3, d3 - r4)) {
            let t4 = false;
            n3 < a3.length && (t4 = 1 == (a3[n3] >>> i3 & 1)), e3.set(o3, d3 - r4, t4), i3--, -1 === i3 && (n3++, i3 = 7);
          }
        if (o3 += t3, o3 < 0 || r3 <= o3) {
          o3 -= t3, t3 = -t3;
          break;
        }
      }
  }(l2, n2), isNaN(t2) && (t2 = Ao.getBestMask(l2, Oo.bind(null, l2, r2))), Ao.applyMask(t2, l2), Oo(l2, r2, t2), { modules: l2, version: a2, errorCorrectionLevel: r2, maskPattern: t2, segments: o2 };
}
vt.create = function(e2, a2) {
  if (void 0 === e2 || "" === e2)
    throw new Error("No input text");
  let r2, t2, o2 = wo.M;
  return void 0 !== a2 && (o2 = wo.from(a2.errorCorrectionLevel, wo.M), r2 = Io.from(a2.version), t2 = Ao.from(a2.maskPattern), a2.toSJISFunc && xo.setToSJISFunction(a2.toSJISFunc)), Lo(e2, r2, o2, t2);
};
var To = {}, Do = {};
!function(e2) {
  function a2(e3) {
    if ("number" == typeof e3 && (e3 = e3.toString()), "string" != typeof e3)
      throw new Error("Color should be defined as hex string");
    let a3 = e3.slice().replace("#", "").split("");
    if (a3.length < 3 || 5 === a3.length || a3.length > 8)
      throw new Error("Invalid hex color: " + e3);
    3 !== a3.length && 4 !== a3.length || (a3 = Array.prototype.concat.apply([], a3.map(function(e4) {
      return [e4, e4];
    }))), 6 === a3.length && a3.push("F", "F");
    const r2 = parseInt(a3.join(""), 16);
    return { r: r2 >> 24 & 255, g: r2 >> 16 & 255, b: r2 >> 8 & 255, a: 255 & r2, hex: "#" + a3.slice(0, 6).join("") };
  }
  e2.getOptions = function(e3) {
    e3 || (e3 = {}), e3.color || (e3.color = {});
    const r2 = void 0 === e3.margin || null === e3.margin || e3.margin < 0 ? 4 : e3.margin, t2 = e3.width && e3.width >= 21 ? e3.width : void 0, o2 = e3.scale || 4;
    return { width: t2, scale: t2 ? 4 : o2, margin: r2, color: { dark: a2(e3.color.dark || "#000000ff"), light: a2(e3.color.light || "#ffffffff") }, type: e3.type, rendererOpts: e3.rendererOpts || {} };
  }, e2.getScale = function(e3, a3) {
    return a3.width && a3.width >= e3 + 2 * a3.margin ? a3.width / (e3 + 2 * a3.margin) : a3.scale;
  }, e2.getImageWidth = function(a3, r2) {
    const t2 = e2.getScale(a3, r2);
    return Math.floor((a3 + 2 * r2.margin) * t2);
  }, e2.qrToImageData = function(a3, r2, t2) {
    const o2 = r2.modules.size, i2 = r2.modules.data, n2 = e2.getScale(o2, t2), d2 = Math.floor((o2 + 2 * t2.margin) * n2), l2 = t2.margin * n2, s2 = [t2.color.light, t2.color.dark];
    for (let e3 = 0; e3 < d2; e3++)
      for (let r3 = 0; r3 < d2; r3++) {
        let c2 = 4 * (e3 * d2 + r3), m2 = t2.color.light;
        if (e3 >= l2 && r3 >= l2 && e3 < d2 - l2 && r3 < d2 - l2) {
          m2 = s2[i2[Math.floor((e3 - l2) / n2) * o2 + Math.floor((r3 - l2) / n2)] ? 1 : 0];
        }
        a3[c2++] = m2.r, a3[c2++] = m2.g, a3[c2++] = m2.b, a3[c2] = m2.a;
      }
  };
}(Do), function(e2) {
  const a2 = Do;
  e2.render = function(e3, r2, t2) {
    let o2 = t2, i2 = r2;
    void 0 !== o2 || r2 && r2.getContext || (o2 = r2, r2 = void 0), r2 || (i2 = function() {
      try {
        return document.createElement("canvas");
      } catch (e4) {
        throw new Error("You need to specify a canvas element");
      }
    }()), o2 = a2.getOptions(o2);
    const n2 = a2.getImageWidth(e3.modules.size, o2), d2 = i2.getContext("2d"), l2 = d2.createImageData(n2, n2);
    return a2.qrToImageData(l2.data, e3, o2), function(e4, a3, r3) {
      e4.clearRect(0, 0, a3.width, a3.height), a3.style || (a3.style = {}), a3.height = r3, a3.width = r3, a3.style.height = r3 + "px", a3.style.width = r3 + "px";
    }(d2, i2, n2), d2.putImageData(l2, 0, 0), i2;
  }, e2.renderToDataURL = function(a3, r2, t2) {
    let o2 = t2;
    void 0 !== o2 || r2 && r2.getContext || (o2 = r2, r2 = void 0), o2 || (o2 = {});
    const i2 = e2.render(a3, r2, o2), n2 = o2.type || "image/png", d2 = o2.rendererOpts || {};
    return i2.toDataURL(n2, d2.quality);
  };
}(To);
var Fo = {};
const Uo = Do;
function Go(e2, a2) {
  const r2 = e2.a / 255, t2 = a2 + '="' + e2.hex + '"';
  return r2 < 1 ? t2 + " " + a2 + '-opacity="' + r2.toFixed(2).slice(1) + '"' : t2;
}
function jo(e2, a2, r2) {
  let t2 = e2 + a2;
  return void 0 !== r2 && (t2 += " " + r2), t2;
}
Fo.render = function(e2, a2, r2) {
  const t2 = Uo.getOptions(a2), o2 = e2.modules.size, i2 = e2.modules.data, n2 = o2 + 2 * t2.margin, d2 = t2.color.light.a ? "<path " + Go(t2.color.light, "fill") + ' d="M0 0h' + n2 + "v" + n2 + 'H0z"/>' : "", l2 = "<path " + Go(t2.color.dark, "stroke") + ' d="' + function(e3, a3, r3) {
    let t3 = "", o3 = 0, i3 = false, n3 = 0;
    for (let d3 = 0; d3 < e3.length; d3++) {
      const l3 = Math.floor(d3 % a3), s3 = Math.floor(d3 / a3);
      l3 || i3 || (i3 = true), e3[d3] ? (n3++, d3 > 0 && l3 > 0 && e3[d3 - 1] || (t3 += i3 ? jo("M", l3 + r3, 0.5 + s3 + r3) : jo("m", o3, 0), o3 = 0, i3 = false), l3 + 1 < a3 && e3[d3 + 1] || (t3 += jo("h", n3), n3 = 0)) : o3++;
    }
    return t3;
  }(i2, o2, t2.margin) + '"/>', s2 = 'viewBox="0 0 ' + n2 + " " + n2 + '"', c2 = '<svg xmlns="http://www.w3.org/2000/svg" ' + (t2.width ? 'width="' + t2.width + '" height="' + t2.width + '" ' : "") + s2 + ' shape-rendering="crispEdges">' + d2 + l2 + "</svg>\n";
  return "function" == typeof r2 && r2(null, c2), c2;
};
const Yo = function() {
  return "function" == typeof Promise && Promise.prototype && Promise.prototype.then;
}, Vo = vt, Ho = To, Qo = Fo;
function Ko(e2, a2, r2, t2, o2) {
  const i2 = [].slice.call(arguments, 1), n2 = i2.length, d2 = "function" == typeof i2[n2 - 1];
  if (!d2 && !Yo())
    throw new Error("Callback required as last argument");
  if (!d2) {
    if (n2 < 1)
      throw new Error("Too few arguments provided");
    return 1 === n2 ? (r2 = a2, a2 = t2 = void 0) : 2 !== n2 || a2.getContext || (t2 = r2, r2 = a2, a2 = void 0), new Promise(function(o3, i3) {
      try {
        const i4 = Vo.create(r2, t2);
        o3(e2(i4, a2, t2));
      } catch (e3) {
        i3(e3);
      }
    });
  }
  if (n2 < 2)
    throw new Error("Too few arguments provided");
  2 === n2 ? (o2 = r2, r2 = a2, a2 = t2 = void 0) : 3 === n2 && (a2.getContext && void 0 === o2 ? (o2 = t2, t2 = void 0) : (o2 = t2, t2 = r2, r2 = a2, a2 = void 0));
  try {
    const i3 = Vo.create(r2, t2);
    o2(null, e2(i3, a2, t2));
  } catch (e3) {
    o2(e3);
  }
}
ft.create = Vo.create, ft.toCanvas = Ko.bind(null, Ho.render), ft.toDataURL = Ko.bind(null, Ho.renderToDataURL), ft.toString = Ko.bind(null, function(e2, a2, r2) {
  return Qo.render(e2, r2);
});
function Jo(e2, a2, r2) {
  if (e2 === a2)
    return false;
  return (e2 - a2 < 0 ? a2 - e2 : e2 - a2) <= r2 + 0.1;
}
const qo = { generate(a2, r2, t2, o2 = "light") {
  const i2 = "light" === o2 ? "#141414" : "#fff", n2 = "light" === o2 ? "#fff" : "#141414", d2 = [], l2 = function(e2, a3) {
    const r3 = Array.prototype.slice.call(ft.create(e2, { errorCorrectionLevel: a3 }).modules.data, 0), t3 = Math.sqrt(r3.length);
    return r3.reduce((e3, a4, r4) => (r4 % t3 == 0 ? e3.push([a4]) : e3[e3.length - 1].push(a4)) && e3, []);
  }(a2, "Q"), s2 = r2 / l2.length, c2 = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }];
  c2.forEach(({ x: a3, y: r3 }) => {
    const t3 = (l2.length - 7) * s2 * a3, o3 = (l2.length - 7) * s2 * r3;
    for (let a4 = 0; a4 < c2.length; a4 += 1) {
      const r4 = s2 * (7 - 2 * a4);
      d2.push(e`
            <rect
              fill=${a4 % 2 == 0 ? i2 : n2}
              height=${r4}
              rx=${0.32 * r4}
              ry=${0.32 * r4}
              width=${r4}
              x=${t3 + s2 * a4}
              y=${o3 + s2 * a4}
            />
          `);
    }
  });
  const m2 = Math.floor((t2 + 25) / s2), u2 = l2.length / 2 - m2 / 2, p2 = l2.length / 2 + m2 / 2 - 1, h2 = [];
  l2.forEach((e2, a3) => {
    e2.forEach((e3, r3) => {
      if (l2[a3][r3] && !(a3 < 7 && r3 < 7 || a3 > l2.length - 8 && r3 < 7 || a3 < 7 && r3 > l2.length - 8 || a3 > u2 && a3 < p2 && r3 > u2 && r3 < p2)) {
        const e4 = a3 * s2 + s2 / 2, t3 = r3 * s2 + s2 / 2;
        h2.push([e4, t3]);
      }
    });
  });
  const g2 = {};
  return h2.forEach(([e2, a3]) => {
    g2[e2] ? g2[e2].push(a3) : g2[e2] = [a3];
  }), Object.entries(g2).map(([e2, a3]) => {
    const r3 = a3.filter((e3) => a3.every((a4) => !Jo(e3, a4, s2)));
    return [Number(e2), r3];
  }).forEach(([a3, r3]) => {
    r3.forEach((r4) => {
      d2.push(e`<circle cx=${a3} cy=${r4} fill=${i2} r=${s2 / 2.5} />`);
    });
  }), Object.entries(g2).filter(([e2, a3]) => a3.length > 1).map(([e2, a3]) => {
    const r3 = a3.filter((e3) => a3.some((a4) => Jo(e3, a4, s2)));
    return [Number(e2), r3];
  }).map(([e2, a3]) => {
    a3.sort((e3, a4) => e3 < a4 ? -1 : 1);
    const r3 = [];
    for (const e3 of a3) {
      const a4 = r3.find((a5) => a5.some((a6) => Jo(e3, a6, s2)));
      a4 ? a4.push(e3) : r3.push([e3]);
    }
    return [e2, r3.map((e3) => [e3[0], e3[e3.length - 1]])];
  }).forEach(([a3, r3]) => {
    r3.forEach(([r4, t3]) => {
      d2.push(e`
              <line
                x1=${a3}
                x2=${a3}
                y1=${r4}
                y2=${t3}
                stroke=${i2}
                stroke-width=${s2 / 1.25}
                stroke-linecap="round"
              />
            `);
    });
  }), d2;
} }, Wo = n`
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
const Zo = "o21pay-qr";
class Xo extends oe {
  static get properties() {
    return { size: { type: String, attribute: "size" }, theme: { type: String, attribute: "theme" }, shadow: { type: Boolean, attribute: "shadow" }, url: { type: String, attribute: "url" } };
  }
  constructor() {
    super(), this.theme = "dark", this.size = "320", this.shadow = false, this.url = "", this.eventsO21Pay = void 0;
  }
  _onClick(e2) {
    const a2 = { detail: { url: this.url }, bubbles: true, composed: true };
    this.dispatchEvent(new CustomEvent("o21pay_QRclick", a2));
  }
  render() {
    const e2 = this.url;
    if (!e2 || !e2.length)
      return T``;
    this.size = parseInt(this.size) || "320", this.logoSize = this.size / 3.3;
    const a2 = (this.size - this.logoSize) / 2 + 9, r2 = (this.size - this.logoSize) / 2 + 12, t2 = ((e3) => T`<svg height="${this.size}" width="${this.size}">${e3}</svg>`)(qo.generate(this.url, this.size, this.size / 4, this.theme));
    let o2 = `pr-qrcode ${this.theme}-theme`;
    return this.shadow && (o2 += " shadow"), T`
      <div
        id="qrsvg"
        class="${o2}"
        style="width: ${this.size}px;height: ${this.size}px;"
        @click="${this._onClick}"
      >
        <svg height="${this.size}" width="${this.size}">${t2}</svg>
        <img
          class="o21pay-logo"
          height="${this.logoSize}"
          style="position: absolute; top: ${a2}px; left: ${r2}px;"
        />
      </div>
    `;
  }
}
!function(e2, a2, r2) {
  (a2 = function(e3) {
    var a3 = function(e4, a4) {
      if ("object" != typeof e4 || null === e4)
        return e4;
      var r3 = e4[Symbol.toPrimitive];
      if (void 0 !== r3) {
        var t2 = r3.call(e4, a4 || "default");
        if ("object" != typeof t2)
          return t2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === a4 ? String : Number)(e4);
    }(e3, "string");
    return "symbol" == typeof a3 ? a3 : String(a3);
  }(a2)) in e2 ? Object.defineProperty(e2, a2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[a2] = r2;
}(Xo, "styles", [Wo]);
const ei = window.customElements;
ei && !ei.get(Zo) && ei.define(Zo, Xo);
const ai = n`
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
`, ri = n`
  :host {
    // --maz-primary: #9bc99d;
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
  /* .maz-phone-number-input .maz-input.input-phone-number:not(.has-border-radius) {
    border-left: 0px;
  } */
  .maz-select__options-list {
    margin-top: 2px;
    min-width: 100%;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 6px 10px -4px !important;
  }
`;
function ti(e2, a2, r2, t2, o2, i2, n2, d2) {
  var l2, s2 = "function" == typeof e2 ? e2.options : e2;
  if (a2 && (s2.render = a2, s2.staticRenderFns = r2, s2._compiled = true), t2 && (s2.functional = true), i2 && (s2._scopeId = "data-v-" + i2), n2 ? (l2 = function(e3) {
    (e3 = e3 || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e3 = __VUE_SSR_CONTEXT__), o2 && o2.call(this, e3), e3 && e3._registeredComponents && e3._registeredComponents.add(n2);
  }, s2._ssrRegister = l2) : o2 && (l2 = d2 ? function() {
    o2.call(this, (s2.functional ? this.parent : this).$root.$options.shadowRoot);
  } : o2), l2)
    if (s2.functional) {
      s2._injectStyles = l2;
      var c2 = s2.render;
      s2.render = function(e3, a3) {
        return l2.call(a3), c2(e3, a3);
      };
    } else {
      var m2 = s2.beforeCreate;
      s2.beforeCreate = m2 ? [].concat(m2, l2) : [l2];
    }
  return { exports: e2, options: s2 };
}
const oi = ti({ name: "MazSpinner", props: { size: { type: Number, default: 40 }, dark: { type: Boolean, default: false }, color: { type: String, default: "primary" } }, computed: { fillColorClass() {
  return `maz-fill-${this.color}`;
} } }, function() {
  var e2 = this, a2 = e2._self._c;
  return a2("svg", { staticClass: "maz-base-component maz-spinner maz-spinner-anim", class: [{ "spinner-anim__white": e2.dark }, e2.fillColorClass], staticStyle: { "enable-background": "new 0 0 50 50" }, attrs: { width: `${e2.size}px`, height: `${e2.size}px`, version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 50 50", "xml:space": "preserve" } }, [a2("path", { attrs: { d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" } })]);
}, [], false, null, null, null, null).exports;
oi.install = (e2) => {
  e2.component(oi.name, oi);
};
const ii = { data: () => ({ uniqueId: null }), mounted() {
  const e2 = this.id || this.$attrs.id;
  this.uniqueId = e2 ? `${e2}` : `${this.$options.name}-${this._uid}`;
} }, ni = { name: "MazBtn", components: { MazSpinner: oi }, mixins: [ii], inheritAttrs: false, props: { id: { type: String, default: null }, color: { type: String, default: "primary" }, type: { type: String, default: "button" }, size: { type: String, default: "md" }, loading: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, outline: { type: Boolean, default: false }, rounded: { type: Boolean, default: false }, fab: { type: Boolean, default: false }, active: { type: Boolean, default: false }, block: { type: Boolean, default: false }, noShadow: { type: Boolean, default: false }, iconName: { type: String, default: null }, leftIconName: { type: String, default: null }, rightIconName: { type: String, default: null }, justifyStart: { type: Boolean, default: false }, justifyEnd: { type: Boolean, default: false } }, computed: { componentType() {
  const { href: e2, to: a2 } = this.$attrs;
  return e2 ? "a" : a2 ? "router-link" : "button";
}, isLink() {
  return "a" === this.componentType;
}, isDisabled() {
  const { disabled: e2, loading: a2 } = this;
  return a2 || e2;
}, classes() {
  const { color: e2, size: a2, outline: r2, rounded: t2, fab: o2, active: i2, block: n2, noShadow: d2, hasRightIcon: l2, hasLeftIcon: s2, hasIcon: c2, hasSlotDefault: m2 } = this;
  return [...e2 ? [`maz-btn--${e2}`] : [null], ...a2 ? [`maz-btn--${a2}`] : [null], ...r2 ? ["maz-btn--outline"] : [null], ...t2 ? ["maz-btn--rounded"] : [null], ...n2 ? ["maz-btn--block"] : [null], ...o2 ? ["maz-btn--fab"] : [null], ...i2 ? ["maz-active"] : [null], ...d2 ? ["maz-no-shadow"] : [null], ...s2() ? ["maz-btn--icon--left"] : [null], ...l2() ? ["maz-btn--icon--right"] : [null], ...c2() ? ["maz-btn--icon"] : [null], ...m2() ? [null] : ["maz-btn--no-text"]];
}, textClasses() {
  const { justifyStart: e2, justifyEnd: a2 } = this;
  return [...e2 ? ["maz-justify-start"] : [null], ...a2 ? ["maz-justify-end"] : [null], ...e2 || a2 ? [null] : ["maz-justify-center"]];
} }, methods: { hasSlotDefault() {
  return this.$slots.default;
}, hasIcon() {
  return this.hasLeftIcon() || this.hasRightIcon() || this.hasMainIcon();
}, hasMainIcon() {
  return this.iconName || this.$slots.icon;
}, hasLeftIcon() {
  return this.leftIconName || this.$slots["icon-left"];
}, hasRightIcon() {
  return this.rightIconName || this.$slots["icon-right"];
}, handleClick(e2) {
  this.$emit("click", e2);
}, emitMouseEnter(e2) {
  this.$emit("mouseenter", e2);
}, emitMouseLeave(e2) {
  this.$emit("mouseleave", e2);
}, emitFocus(e2) {
  this.$emit("focus", e2);
}, emitBlur(e2) {
  this.$emit("blur", e2);
} } };
const di = ti(ni, function() {
  var e2 = this, a2 = e2._self._c;
  return a2(e2.componentType, e2._b({ tag: "component", staticClass: "maz-base-component maz-btn maz-inline-flex", class: [e2.classes, { "maz-text-hidden": e2.loading }], attrs: { id: e2.uniqueId, type: e2.isLink ? null : e2.type, disabled: e2.isLink ? null : e2.isDisabled }, on: { click: function(a3) {
    return e2.handleClick(a3);
  }, mouseenter: function(a3) {
    return e2.emitMouseEnter(a3);
  }, mouseleave: function(a3) {
    return e2.emitMouseLeave(a3);
  }, focus: function(a3) {
    return e2.emitFocus(a3);
  }, blur: function(a3) {
    return e2.emitBlur(a3);
  } } }, "component", e2.$attrs, false), [e2.hasLeftIcon() || e2.hasMainIcon() ? a2("div", { staticClass: "maz-flex maz-flex-center maz-btn__icon-left", class: { "maz-mr-2": !e2.fab && e2.hasSlotDefault() } }, [e2._t("icon-left", function() {
    return [a2("i", { staticClass: "material-icons" }, [e2._v(e2._s(e2.leftIconName || e2.iconName))])];
  })], 2) : e2._e(), a2("span", { staticClass: "maz-flex maz-align-center maz-h-100 maz-overflow-hidden", class: [e2.textClasses, { "maz-flex-1": e2.hasSlotDefault() }] }, [e2._t("default")], 2), e2.hasRightIcon() ? a2("div", { staticClass: "maz-flex maz-flex-center maz-btn__icon-right", class: { "maz-ml-2": !e2.fab && e2.hasSlotDefault() } }, [e2._t("icon-right", function() {
    return [a2("i", { staticClass: "material-icons" }, [e2._v(e2._s(e2.rightIconName))])];
  })], 2) : e2._e()]);
}, [], false, null, null, null, null).exports;
di.install = (e2) => {
  e2.component(di.name, di);
};
const li = { name: "MazInput", mixins: [ii], props: { value: { validator: (e2) => ["string", "number"].includes(typeof e2) || null === e2, default: null }, id: { type: String, default: null }, placeholder: { type: String, default: "Enter text" }, hint: { type: String, default: null }, size: { type: String, default: null }, type: { type: String, default: "text" }, leftIconName: { type: String, default: null }, rightIconName: { type: String, default: null }, error: { type: Boolean, default: false }, warning: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, dark: { type: Boolean, default: false }, readonly: { type: Boolean, default: false }, success: { type: Boolean, default: false }, required: { type: Boolean, default: false }, textarea: { type: Boolean, default: false }, loading: { type: Boolean, default: false }, clearable: { type: Boolean, default: false }, noLabel: { type: Boolean, default: false }, noRequiredSymbol: { type: Boolean, default: false }, focus: { type: Boolean, default: false }, color: { type: String, default: "primary" }, debounce: { type: Boolean, default: false } }, data: () => ({ isFocus: false, showPassword: false }), computed: { inputValue: { get() {
  return this.value;
}, set(e2) {
  const a2 = this.hasNumberType ? e2 ? parseInt(e2) : 0 : e2;
  this.emitValue(a2);
} }, placeholderValue() {
  let { placeholder: e2 } = this;
  return this.required && e2 && !this.noRequiredSymbol && (e2 += " *"), e2;
}, hintValue() {
  let { hint: e2 } = this;
  return this.required && e2 && (e2 += " *"), e2;
}, hasNumberType() {
  return "number" === this.type;
}, hasLabel() {
  return !this.noLabel;
}, getType() {
  return this.showPassword ? "text" : this.type;
}, hasPasswordBtn() {
  return "password" === this.type && this.inputValue;
}, hasClearBtn() {
  return this.clearable && this.inputValue && !this.textarea;
}, leftNumberIcon() {
  return [!!this.hasRightIcon(), !!this.hasClearBtn, !!this.hasPasswordBtn].filter((e2) => e2).length;
} }, methods: { debounceValue: ((e2, a2) => {
  let r2;
  return function() {
    const t2 = this, o2 = arguments;
    clearTimeout(r2), r2 = setTimeout(() => e2.apply(t2, o2), a2);
  };
})(function(e2) {
  this.$emit("input", e2);
}, 500), emitValue(e2) {
  if (this.debounce)
    return this.debounceValue(e2);
  this.$emit("input", e2);
}, hasLeftIcon() {
  return this.leftIconName || this.$slots["icon-left"];
}, hasRightIcon() {
  return this.rightIconName || this.$slots["icon-right"];
}, focusInput() {
  this.$refs.MazInput.focus();
}, onFocus(e2) {
  this.$emit("focus", e2), this.isFocus = true;
}, onBlur(e2) {
  this.$emit("blur", e2), this.isFocus = false;
}, onPaste(e2) {
  this.$emit("paste", e2);
}, onChange(e2) {
  this.$emit("change", e2);
}, clear() {
  this.$emit("input", this.hasNumberType ? 0 : ""), this.$emit("clear");
}, keyUp(e2) {
  this.$emit("keyup", e2);
}, keyDown(e2) {
  this.$emit("keydown", e2);
} } };
const si = ti(li, function() {
  var e2 = this, a2 = e2._self._c;
  return a2("div", { ref: "parent", staticClass: "maz-base-component maz-input maz-border maz-border-color maz-border-color-hover maz-border-solid maz-border-radius", class: [{ "is-focused": e2.isFocus || e2.focus, "is-valid": e2.success, "has-value": e2.value, "is-textarea": e2.textarea, "has-error": e2.error, "has-warning": e2.warning, "is-disabled": e2.disabled, "maz-is-dark": e2.dark, "has-hint": e2.hint, "has-no-label": !e2.hasLabel && !e2.hint, "has-left-icon": e2.hasLeftIcon() }, `maz-input--${e2.size}`, `has-${e2.leftNumberIcon}-right-icon`, `maz-input--${e2.color}`], on: { click: e2.focusInput } }, [e2.hasLeftIcon() ? a2("div", { staticClass: "maz-input__icon maz-flex left", class: [e2.textarea ? "maz-align-start maz-pt-2" : "maz-align-center"] }, [e2._t("icon-left", function() {
    return [a2("i", { staticClass: "material-icons" }, [e2._v(e2._s(e2.leftIconName))])];
  })], 2) : e2._e(), e2.hasRightIcon() ? a2("div", { staticClass: "maz-input__icon maz-flex right", class: [e2.textarea ? "maz-align-start maz-pt-2" : "maz-align-center"] }, [e2._t("icon-right", function() {
    return [a2("i", { staticClass: "material-icons" }, [e2._v(e2._s(e2.rightIconName))])];
  })], 2) : e2._e(), "checkbox" !== e2.getType || e2.textarea ? "radio" !== e2.getType || e2.textarea ? e2.textarea ? a2("textarea", e2._b({ directives: [{ name: "model", rawName: "v-model", value: e2.inputValue, expression: "inputValue" }], ref: "MazInput", staticClass: "maz-input__input maz-textarea", attrs: { id: e2.uniqueId, placeholder: e2.placeholderValue, type: e2.type, required: e2.required, readonly: e2.readonly }, domProps: { value: e2.inputValue }, on: { keydown: e2.keyDown, keyup: e2.keyUp, focus: e2.onFocus, blur: e2.onBlur, paste: e2.onPaste, change: e2.onChange, click: function(a3) {
    return e2.$emit("click", a3);
  }, input: function(a3) {
    a3.target.composing || (e2.inputValue = a3.target.value);
  } } }, "textarea", e2.$attrs, false)) : a2("input", e2._b({ directives: [{ name: "model", rawName: "v-model", value: e2.inputValue, expression: "inputValue" }], ref: "MazInput", staticClass: "maz-input__input maz-border-radius", class: { "has-right-icon": e2.hasClearBtn || e2.hasPasswordBtn || e2.hasRightIcon() }, attrs: { id: e2.uniqueId, placeholder: e2.placeholderValue, "aria-label": e2.placeholder, disabled: e2.disabled, required: e2.required, readonly: e2.readonly, type: e2.getType }, domProps: { value: e2.inputValue }, on: { keydown: e2.keyDown, keyup: e2.keyUp, focus: e2.onFocus, blur: e2.onBlur, paste: e2.onPaste, change: e2.onChange, click: function(a3) {
    return e2.$emit("click", a3);
  }, input: function(a3) {
    a3.target.composing || (e2.inputValue = a3.target.value);
  } } }, "input", e2.$attrs, false)) : a2("input", e2._b({ directives: [{ name: "model", rawName: "v-model", value: e2.inputValue, expression: "inputValue" }], ref: "MazInput", staticClass: "maz-input__input maz-border-radius", class: { "has-right-icon": e2.hasClearBtn || e2.hasPasswordBtn || e2.hasRightIcon() }, attrs: { id: e2.uniqueId, placeholder: e2.placeholderValue, "aria-label": e2.placeholder, disabled: e2.disabled, required: e2.required, readonly: e2.readonly, type: "radio" }, domProps: { checked: e2._q(e2.inputValue, null) }, on: { keydown: e2.keyDown, keyup: e2.keyUp, focus: e2.onFocus, blur: e2.onBlur, paste: e2.onPaste, change: [function(a3) {
    e2.inputValue = null;
  }, e2.onChange], click: function(a3) {
    return e2.$emit("click", a3);
  } } }, "input", e2.$attrs, false)) : a2("input", e2._b({ directives: [{ name: "model", rawName: "v-model", value: e2.inputValue, expression: "inputValue" }], ref: "MazInput", staticClass: "maz-input__input maz-border-radius", class: { "has-right-icon": e2.hasClearBtn || e2.hasPasswordBtn || e2.hasRightIcon() }, attrs: { id: e2.uniqueId, placeholder: e2.placeholderValue, "aria-label": e2.placeholder, disabled: e2.disabled, required: e2.required, readonly: e2.readonly, type: "checkbox" }, domProps: { checked: Array.isArray(e2.inputValue) ? e2._i(e2.inputValue, null) > -1 : e2.inputValue }, on: { keydown: e2.keyDown, keyup: e2.keyUp, focus: e2.onFocus, blur: e2.onBlur, paste: e2.onPaste, change: [function(a3) {
    var r2 = e2.inputValue, t2 = a3.target, o2 = !!t2.checked;
    if (Array.isArray(r2)) {
      var i2 = e2._i(r2, null);
      t2.checked ? i2 < 0 && (e2.inputValue = r2.concat([null])) : i2 > -1 && (e2.inputValue = r2.slice(0, i2).concat(r2.slice(i2 + 1)));
    } else
      e2.inputValue = o2;
  }, e2.onChange], click: function(a3) {
    return e2.$emit("click", a3);
  } } }, "input", e2.$attrs, false)), e2._v(" "), e2.hasLabel || e2.hint ? a2("label", { ref: "label", staticClass: "maz-input__label", class: e2.error ? "maz-text-danger" : null, attrs: { for: e2.uniqueId, tabindex: "-1" }, on: { click: e2.focusInput } }, [e2._v(" " + e2._s(e2.hintValue || e2.placeholderValue) + " ")]) : e2._e(), a2("transition-group", { attrs: { name: "maz-scale" } }, [e2.hasClearBtn ? a2("button", { key: "clear-button", staticClass: "maz-input__toggle-btn --clear maz-flex maz-flex-center", class: { "has-right-icon": e2.hasRightIcon() }, attrs: { title: "clear", type: "button", tabindex: "-1" }, on: { click: function(a3) {
    return a3.stopPropagation(), e2.clear.apply(null, arguments);
  } } }, [a2("i", { staticClass: "maz-input__toggle-btn__icon material-icons" }, [e2._v(" close ")])]) : e2._e(), e2.hasPasswordBtn ? a2("button", { key: "password-button", staticClass: "maz-input__toggle-btn password maz-flex maz-flex-center", class: { "has-clear-btn": e2.hasClearBtn, "has-right-icon": e2.hasRightIcon() }, attrs: { title: "clear", type: "button", tabindex: "-1" }, on: { click: function(a3) {
    e2.showPassword = !e2.showPassword;
  } } }, [a2("i", { staticClass: "maz-input__toggle-btn__icon material-icons" }, [e2._v(" " + e2._s(e2.showPassword ? "visibility_off" : "visibility") + " ")])]) : e2._e()]), e2.loading ? a2("div", { staticClass: "maz-input__loader", class: { textarea: e2.textarea } }, [a2("div", { staticClass: "maz-input__loader__progress-bar" })]) : e2._e()], 1);
}, [], false, null, null, null, null).exports;
si.install = (e2) => {
  e2.component(si.name, si);
};
const ci = { name: "MazSelect", components: { MazInput: si, MazBtn: di }, mixins: [ii], props: { value: { required: true, validator: (e2) => ["number", "string", "boolean"].includes(typeof e2) || Array.isArray(e2) || null === e2 }, options: { type: Array, required: true }, disabled: { type: Boolean, default: false }, lock: { type: Boolean, default: false }, dark: { type: Boolean, default: false }, itemHeight: { type: Number, default: 35 }, listHeight: { type: Number, default: 260 }, listWidth: { type: [Number, String], default: null }, placeholder: { type: String, default: "Select option" }, noLabel: { type: Boolean, default: false }, multiple: { type: Boolean, default: false }, search: { type: Boolean, default: false }, searchPlaceholder: { type: String, default: "Search in options" }, color: { type: String, default: "primary" }, size: { type: String, default: "md" }, open: { type: Boolean, default: false }, position: { type: String, default: "left bottom" }, config: { type: Object, default: () => ({ labelKey: "label", valueKey: "value", searchKey: "label" }) }, inputValue: { type: String, default: null } }, data: () => ({ listIsOpen: false, query: "", queryTimer: void 0, tmpValue: null, searchQuery: null, filteredOptions: null }), computed: { hasPositionTop() {
  return this.position.includes("top");
}, hasPositionRight() {
  return this.position.includes("right");
}, listTransition() {
  return this.position.includes("bottom") ? "maz-slide" : "maz-slideinvert";
}, hasOpenList() {
  return this.open || this.listIsOpen;
}, values() {
  const { multiple: e2, value: a2, options: r2 } = this;
  if (!r2)
    throw new Error("[MazSelect] options should be provide");
  if (e2 && !Array.isArray(a2) && null !== a2)
    throw new Error("[MazSelect] value should be an array or null");
  if (!e2 && Array.isArray(a2))
    throw new Error("[MazSelect] value should be a string, a number or null");
  return a2 ? e2 ? [...a2] : [a2] : [];
}, hasLeftIcon() {
  return this.$attrs.leftIconName || this.$slots["icon-left"];
}, placeholderShown() {
  const { placeholder: e2, multiple: a2, values: r2 } = this;
  return a2 && r2.length ? null : e2;
}, hasNoLabel() {
  return this.multiple || this.noLabel;
}, optionHeight() {
  return { height: `${this.itemHeight}px`, flex: `0 0 ${this.itemHeight}px` };
}, itemListSize() {
  const { listHeight: e2, listWidth: a2 } = this, r2 = Number.isInteger(a2) ? `${a2}px` : a2;
  return { maxHeight: `${e2}px`, width: r2, maxWidth: r2 };
}, tmpValueIndex() {
  const { config: e2, tmpValue: a2, optionsShown: r2 } = this;
  return r2.findIndex((r3) => r3[e2.valueKey] === a2);
}, selectedValueIndex() {
  const { values: e2, options: a2, config: r2 } = this;
  return e2.length ? a2.findIndex((a3) => a3[r2.valueKey] === e2[e2.length - 1]) : null;
}, valueShown() {
  if (this.inputValue)
    return this.inputValue;
  const { multiple: e2, options: a2, values: r2, value: t2, config: o2 } = this, i2 = a2.find((e3) => e3[o2.valueKey] === t2);
  return i2 && i2[o2.valueKey] && !e2 ? i2[o2.labelKey] : r2[0] ? " " : null;
}, optionsShown() {
  return this.filteredOptions || this.options;
}, selectedOptions() {
  const { values: e2, options: a2, config: r2 } = this, t2 = [];
  return e2.forEach((e3) => t2.push(a2.find((a3) => e3 === a3[r2.valueKey]))), t2;
} }, watch: { value: { handler() {
  const { multiple: e2 } = this;
  e2 && this.scrollTags();
}, immediate: true } }, methods: { async scrollTags() {
  var _a2;
  await this.$nextTick();
  const { SelectedTags: e2, SelectedTagsContainer: a2 } = this.$refs;
  e2 && (e2.scrollLeft = ((_a2 = a2 == null ? void 0 : a2.$el) == null ? void 0 : _a2.clientWidth) ?? null);
}, removeOption(e2) {
  const { values: a2, multiple: r2 } = this, t2 = a2.filter((a3) => a3 !== e2), o2 = t2.length ? r2 ? t2 : t2[0] : null;
  this.emitValues(o2);
}, closeList(e2 = {}) {
  if (this.$el.contains(e2.relatedTarget))
    return e2.preventDefault();
  this.$emit("close"), this.listIsOpen = false, this.isFocus = false;
}, openList(e2) {
  if (this.lock)
    return;
  this.$emit("focus", e2);
  const { disabled: a2, search: r2, values: t2 } = this;
  if (!a2) {
    if (a2)
      return;
    this.$emit("open"), this.isFocus = true, this.listIsOpen = true, this.selectFirstValue(), r2 && this.focusSearchInput(), t2.length && this.scrollToSelectedOnFocus(this.selectedValueIndex);
  }
}, clearSearch() {
  this.searchQuery = null, this.filteredOptions = null;
}, async reset() {
  this.clearSearch(), this.multiple || this.closeList();
}, selectFirstValue() {
  const { multiple: e2, value: a2, options: r2, config: t2 } = this;
  if (a2 || e2)
    return;
  const o2 = r2[0][t2.valueKey] || null;
  this.tmpValue = o2, this.emitValues(o2, true);
}, updateValue(e2) {
  const { multiple: a2, values: r2, removeOption: t2 } = this;
  if (r2.includes(e2) && a2)
    return t2(e2);
  this.tmpValue = e2, e2 && r2.push(e2);
  const o2 = a2 && e2 ? r2 : e2;
  this.emitValues(o2);
}, async focusSearchInput() {
  await this.$nextTick();
  const { SearchInput: e2 } = this.$refs;
  e2.$el.querySelector("input").focus();
}, async emitValues(e2, a2) {
  this.$emit("input", e2), a2 || (await this.$nextTick(), this.reset());
}, async scrollToSelectedOnFocus(e2) {
  await this.$nextTick(), this.$refs.optionsList.scrollTop = e2 * this.itemHeight - 3 * this.itemHeight;
}, keyboardNav(e2) {
  const a2 = e2.keyCode, { hasOpenList: r2, tmpValueIndex: t2, optionsShown: o2, openList: i2, tmpValue: n2, search: d2, config: l2 } = this;
  if (40 === a2 || 38 === a2) {
    e2.preventDefault(), r2 || i2();
    let n3 = 40 === a2 ? t2 + 1 : t2 - 1;
    (-1 === n3 || n3 >= o2.length) && (n3 = -1 === n3 ? o2.length - 1 : 0), this.tmpValue = o2[n3][l2.valueKey], this.scrollToSelectedOnFocus(n3);
  } else
    13 === a2 ? (e2.preventDefault(), r2 ? this.updateValue(n2) : this.openList()) : 27 === a2 ? this.closeList() : d2 || this.searching(e2);
}, searching(e2) {
  const { config: a2, options: r2 } = this, t2 = e2.keyCode;
  this.queryTimer && clearTimeout(this.queryTimer);
  const o2 = this;
  this.queryTimer = setTimeout(() => {
    o2.query = "", o2.queryTimer = void 0;
  }, 2e3);
  const i2 = String.fromCharCode(t2);
  if (8 === t2 && "" !== this.query)
    this.query = this.query.substring(0, this.query.length - 1);
  else if (/[a-zA-Z-e ]/.test(i2)) {
    this.hasOpenList || this.openList(), this.query += i2.toLowerCase();
    const e3 = r2.findIndex((e4) => (this.tmpValue = e4[a2.valueKey], e4[a2.searchKey].toLowerCase().startsWith(this.query)));
    -1 !== e3 && this.scrollToSelectedOnFocus(e3);
  }
}, searchInOptions(e2) {
  const { config: a2, options: r2 } = this;
  if (this.searchQuery = "" === e2 ? null : e2, !this.searchQuery)
    return this.filteredOptions = r2;
  const t2 = e2.toLowerCase(), o2 = r2.filter((e3) => e3[a2.valueKey] && e3[a2.searchKey].toLowerCase().includes(t2) || e3[a2.labelKey] && e3[a2.labelKey].includes(t2));
  this.tmpValue = o2.length ? o2[0][a2.valueKey] : null, this.filteredOptions = o2;
} } };
var mi = function() {
  var e2 = this, a2 = e2._self._c;
  return a2("div", { staticClass: "maz-base-component maz-select", class: [{ "has-list-open": e2.hasOpenList, "maz-is-dark": e2.dark }, `maz-select--${e2.color}`, `maz-select--${e2.size}`], on: { "!blur": function(a3) {
    return e2.closeList(a3);
  } } }, [e2.multiple ? a2("div", { ref: "SelectedTags", staticClass: "maz-select__tags maz-flex maz-align-center", class: { "maz-left-offset": e2.hasLeftIcon } }, [a2("transition-group", { ref: "SelectedTagsContainer", staticClass: "maz-flex maz-align-center maz-h-100", attrs: { tag: "div", name: "maz-tags" } }, e2._l(e2.selectedOptions, function(r2, t2) {
    return a2("MazBtn", { key: `tags-${t2}`, staticClass: "maz-select__tag maz-flex maz-align-center", attrs: { disabled: e2.disabled, color: e2.color, size: e2.size }, on: { click: function(a3) {
      return a3.preventDefault(), a3.stopPropagation(), e2.removeOption(r2[e2.config.valueKey]);
    } } }, [a2("span", { staticClass: "maz-select__tag__text" }, [e2._v(" " + e2._s(r2[e2.config.labelKey]) + " ")]), a2("i", { staticClass: "maz-select__tag__clear material-icons" }, [e2._v(" close ")])]);
  }), 1)], 1) : e2._e(), a2("MazInput", e2._b({ ref: "textField", attrs: { value: e2.valueShown, readonly: "", "no-label": e2.hasNoLabel, color: e2.color, size: e2.size, placeholder: e2.placeholderShown, disabled: e2.disabled, focus: e2.hasOpenList }, on: { clear: function(a3) {
    return e2.emitValues(null);
  }, keydown: function(a3) {
    !e2.search && e2.keyboardNav(a3);
  }, keyup: function(a3) {
    return e2.$emit("keyup", a3);
  }, blur: function(a3) {
    return e2.$emit("blur", a3);
  }, change: function(a3) {
    return e2.$emit("change", a3);
  }, paste: function(a3) {
    return e2.$emit("paste", a3);
  }, click: function(a3) {
    return e2.$emit("click", a3);
  }, focus: e2.openList } }, "MazInput", e2.$attrs, false), [a2("div", { staticClass: "maz-select__toggle maz-flex maz-flex-center", attrs: { slot: "icon-right", tabindex: "-1" }, slot: "icon-right" }, [e2._t("arrow", function() {
    return [a2("svg", { staticClass: "maz-select__toggle__arrow", attrs: { mlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" } }, [a2("path", { staticClass: "arrow", attrs: { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" } }), a2("path", { attrs: { fill: "none", d: "M0 0h24v24H0V0z" } })])];
  })], 2)]), a2("transition", { attrs: { name: e2.listTransition } }, [a2("div", { directives: [{ name: "show", rawName: "v-show", value: e2.hasOpenList, expression: "hasOpenList" }], staticClass: "maz-select__options-list maz-flex maz-elevation", class: [e2.hasPositionTop ? "maz-select__options-list--top maz-direction-column-reverse" : "maz-direction-column", { "maz-select__options-list--right": e2.hasPositionRight }], style: [e2.itemListSize] }, [e2.search ? a2("MazInput", { ref: "SearchInput", staticClass: "maz-m-1", attrs: { color: e2.color, value: e2.searchQuery, placeholder: e2.searchPlaceholder, size: "sm", "no-label": "", name: "new_search_in_options", autocomplete: "off" }, on: { input: e2.searchInOptions, keydown: [e2.keyboardNav, function(a3) {
    return !a3.type.indexOf("key") && e2._k(a3.keyCode, "esc", 27, a3.key, ["Esc", "Escape"]) ? null : e2.closeList.apply(null, arguments);
  }] } }) : e2._e(), a2("div", { ref: "optionsList", staticClass: "maz-select__options-list__items maz-flex maz-direction-column" }, [e2._l(e2.optionsShown, function(r2, t2) {
    return a2("button", { key: t2, staticClass: "maz-select__options-list__item flex maz-align-center maz-text-left", class: [{ selected: e2.values.length && e2.values.includes(r2[e2.config.valueKey]) }, { "keyboard-selected": e2.tmpValue === r2[e2.config.valueKey] }], style: [e2.optionHeight], attrs: { tabindex: "-1", type: "button" }, on: { click: function(a3) {
      return a3.preventDefault(), a3.stopPropagation(), e2.updateValue(r2[e2.config.valueKey]);
    } } }, [e2._t("default", function() {
      return [a2("div", { class: r2.icon ? `maz-flag maz-flag-${r2.icon}` : "" }, [a2("span", { staticClass: "maz-dots-text", class: [{ "maz-flag-after": r2.icon }, { "maz-text-muted": !r2[e2.config.valueKey] }, e2.values.includes(r2[e2.config.valueKey]) ? "maz-text-white" : "maz-text-color"] }, [e2._v(" " + e2._s(r2[e2.config.labelKey]) + " ")])])];
    }, { option: { ...r2, isSelected: e2.values.includes(r2[e2.config.valueKey]) }, tag: "div" })], 2);
  }), e2.optionsShown.length ? e2._e() : e2._t("no-results", function() {
    return [a2("div", { staticClass: "maz-select__options-list__no-results maz-p-1 maz-flex maz-flex-center" }, [a2("i", { staticClass: "material-icons maz-text-danger" }, [e2._v(" search_off ")])])];
  }, { tag: "div" })], 2)], 1)])], 1);
};
const ui = ti(ci, mi, [], false, null, null, null, null).exports;
ui.install = (e2) => {
  e2.component(ui.name, ui);
};
const pi = [["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1684"], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1264"], ["Antigua and Barbuda", "ag", "1268"], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Australia", "au", "61", 0], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1242"], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1246"], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1441"], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1284"], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1], ["Cayman Islands", "ky", "1345"], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Christmas Island", "cx", "61", 2], ["Cocos (Keeling) Islands", "cc", "61", 1], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1767"], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1473"], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1671"], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1876"], ["Japan (日本)", "jp", "81"], ["Jersey", "je", "44", 3], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["Macedonia (FYROM) (Македонија)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1664"], ["Morocco (‫المغرب‬‎)", "ma", "212", 0], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["Northern Mariana Islands", "mp", "1670"], ["Norway (Norge)", "no", "47", 0], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262", 0], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1869"], ["Saint Lucia", "lc", "1758"], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1784"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1721"], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1], ["Swaziland", "sz", "268"], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1868"], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1649"], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1340"], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1]], hi = pi.map((e2) => e2[1].toUpperCase()), gi = pi.map((e2) => ({ name: e2[0], iso2: e2[1].toUpperCase(), dialCode: e2[2], priority: e2[3] || 0, areaCodes: e2[4] || null })), bi = (e2, a2) => {
  const r2 = e2 ? function() {
    return le(fr, arguments);
  }(e2, a2) : null;
  let t2 = { countryCode: a2, phoneNumber: e2, isValid: false };
  return r2 && (t2 = { ...t2, countryCode: r2.country, countryCallingCode: r2.countryCallingCode, nationalNumber: r2.nationalNumber, isValid: r2.isValid(), type: r2.getType(), formatInternational: r2.formatInternational(), formatNational: r2.formatNational(), uri: r2.getURI(), e164: r2.format("E.164") }), t2;
}, zi = (e2, a2) => e2 ? a2 ? new dt(a2).input(e2) : e2 : null, fi = { AC: "40123", AD: "312345", AE: "501234567", AF: "701234567", AG: "2684641234", AI: "2642351234", AL: "672123456", AM: "77123456", AO: "923123456", AR: "91123456789", AS: "6847331234", AT: "664123456", AU: "412345678", AW: "5601234", AX: "412345678", AZ: "401234567", BA: "61123456", BB: "2462501234", BD: "1812345678", BE: "470123456", BF: "70123456", BG: "43012345", BH: "36001234", BI: "79561234", BJ: "90011234", BL: "690001234", BM: "4413701234", BN: "7123456", BO: "71234567", BQ: "3181234", BR: "11961234567", BS: "2423591234", BT: "17123456", BW: "71123456", BY: "294911911", BZ: "6221234", CA: "5062345678", CC: "412345678", CD: "991234567", CF: "70012345", CG: "061234567", CH: "781234567", CI: "0123456789", CK: "71234", CL: "221234567", CM: "671234567", CN: "13123456789", CO: "3211234567", CR: "83123456", CU: "51234567", CV: "9911234", CW: "95181234", CX: "412345678", CY: "96123456", CZ: "601123456", DE: "15123456789", DJ: "77831001", DK: "32123456", DM: "7672251234", DO: "8092345678", DZ: "551234567", EC: "991234567", EE: "51234567", EG: "1001234567", EH: "650123456", ER: "7123456", ES: "612345678", ET: "911234567", FI: "412345678", FJ: "7012345", FK: "51234", FM: "3501234", FO: "211234", FR: "612345678", GA: "06031234", GB: "7400123456", GD: "4734031234", GE: "555123456", GF: "694201234", GG: "7781123456", GH: "231234567", GI: "57123456", GL: "221234", GM: "3012345", GN: "601123456", GP: "690001234", GQ: "222123456", GR: "6912345678", GT: "51234567", GU: "6713001234", GW: "955012345", GY: "6091234", HK: "51234567", HN: "91234567", HR: "921234567", HT: "34101234", HU: "201234567", ID: "812345678", IE: "850123456", IL: "502345678", IM: "7924123456", IN: "8123456789", IO: "3801234", IQ: "7912345678", IR: "9123456789", IS: "6111234", IT: "3123456789", JE: "7797712345", JM: "8762101234", JO: "790123456", JP: "9012345678", KE: "712123456", KG: "700123456", KH: "91234567", KI: "72001234", KM: "3212345", KN: "8697652917", KP: "1921234567", KR: "1020000000", KW: "50012345", KY: "3453231234", KZ: "7710009998", LA: "2023123456", LB: "71123456", LC: "7582845678", LI: "660234567", LK: "712345678", LR: "770123456", LS: "50123456", LT: "61234567", LU: "628123456", LV: "21234567", LY: "912345678", MA: "650123456", MC: "612345678", MD: "62112345", ME: "67622901", MF: "690001234", MG: "321234567", MH: "2351234", MK: "72345678", ML: "65012345", MM: "92123456", MN: "88123456", MO: "66123456", MP: "6702345678", MQ: "696201234", MR: "22123456", MS: "6644923456", MT: "96961234", MU: "52512345", MV: "7712345", MW: "991234567", MX: "12221234567", MY: "123456789", MZ: "821234567", NA: "811234567", NC: "751234", NE: "93123456", NF: "381234", NG: "8021234567", NI: "81234567", NL: "612345678", NO: "40612345", NP: "9841234567", NR: "5551234", NU: "8884012", NZ: "211234567", OM: "92123456", PA: "61234567", PE: "912345678", PF: "87123456", PG: "70123456", PH: "9051234567", PK: "3012345678", PL: "512345678", PM: "551234", PR: "7872345678", PS: "599123456", PT: "912345678", PW: "6201234", PY: "961456789", QA: "33123456", RE: "692123456", RO: "712034567", RS: "601234567", RU: "9123456789", RW: "720123456", SA: "512345678", SB: "7421234", SC: "2510123", SD: "911231234", SE: "701234567", SG: "81234567", SH: "51234", SI: "31234567", SJ: "41234567", SK: "912123456", SL: "25123456", SM: "66661212", SN: "701234567", SO: "71123456", SR: "7412345", SS: "977123456", ST: "9812345", SV: "70123456", SX: "7215205678", SY: "944567890", SZ: "76123456", TA: "8999", TC: "6492311234", TD: "63012345", TG: "90112345", TH: "812345678", TJ: "917123456", TK: "7290", TL: "77212345", TM: "66123456", TN: "20123456", TO: "7715123", TR: "5012345678", TT: "8682911234", TV: "901234", TW: "912345678", TZ: "621234567", UA: "501234567", UG: "712345678", US: "2015550123", UY: "94231234", UZ: "912345678", VA: "3123456789", VC: "7844301234", VE: "4121234567", VG: "2843001234", VI: "3406421234", VN: "912345678", VU: "5912345", WF: "821234", WS: "7212345", XK: "43201234", YE: "712345678", YT: "639012345", ZA: "711234567", ZM: "955123456", ZW: "712345678" }, vi = { countrySelectorLabel: "Country code", countrySelectorError: "Choose country", countrySelectorSearchPlaceholder: "Search country", phoneNumberLabel: "Phone number", example: "Example:" }, yi = { name: "MazPhoneNumberInput", components: { MazInput: si, MazSelect: ui }, mixins: [ii], props: { value: { validator: (e2) => ["string", "number"].includes(typeof e2) || null === e2, default: null }, id: { type: String, default: null }, disabled: { type: Boolean, default: false }, lock: { type: Boolean, default: false }, defaultPhoneNumber: { type: String, default: null }, defaultCountryCode: { type: String, default: null }, size: { type: String, default: null }, preferredCountries: { type: Array, default: null }, onlyCountries: { type: Array, default: null }, ignoredCountries: { type: Array, default: Array }, translations: { type: Object, default: null }, noValidation: { type: Boolean, default: false }, noFlags: { type: Boolean, default: false }, noExample: { type: Boolean, default: false }, noSearch: { type: Boolean, default: false }, countriesHeight: { type: Number, default: 30 }, noUseBrowserLocale: { type: Boolean, default: false }, fetchCountry: { type: Boolean, default: false }, noCountrySelector: { type: Boolean, default: false }, showCodeOnList: { type: Boolean, default: false }, dark: { type: Boolean, default: false }, color: { type: String, default: "primary" }, placeholder: { type: String, default: null }, hint: { type: String, default: null }, position: { type: String, default: "left bottom" } }, data() {
  return { results: {}, countryCode: this.defaultCountryCode, cursorPosition: null, asYouTypeNumber: this.defaultPhoneNumber };
}, computed: { t() {
  return { ...vi, ...this.translations };
}, callingCode() {
  const { countryCode: e2 } = this;
  return e2 ? `+${((e3) => {
    const a2 = this.countriesSorted.find((a3) => a3.iso2 === e3);
    return a2 ? a2.dialCode : null;
  })(e2) || function() {
    return le(De, arguments);
  }(e2)}` : null;
}, shouldChooseCountry() {
  return !this.countryCode && !!this.asYouTypeNumber;
}, isValid() {
  return this.results.isValid;
}, hasEmptyPhone() {
  const { asYouTypeNumber: e2 } = this;
  return "" === e2 || !e2;
}, phoneNumberExample() {
  const { countryCode: e2 } = this, a2 = e2 ? function() {
    return le(nt, arguments);
  }(e2, fi) : null;
  return a2 ? a2.formatNational() : null;
}, hintValue() {
  const { noExample: e2, phoneNumberExample: a2, hasEmptyPhone: r2, isValid: t2, t: o2 } = this;
  return e2 || !a2 || r2 || t2 ? null : `${o2.example} ${a2}`;
}, countriesList() {
  return gi.filter((e2) => !this.ignoredCountries.includes(e2.iso2));
}, countriesFiltered() {
  return (this.onlyCountries || this.preferredCountries).map((e2) => this.countriesList.find((a2) => a2.iso2.includes(e2)));
}, otherCountries() {
  return this.countriesList.filter((e2) => !this.preferredCountries.includes(e2.iso2));
}, countriesSorted() {
  return this.preferredCountries ? [...this.countriesFiltered, ...this.otherCountries] : this.onlyCountries ? this.countriesFiltered : this.countriesList;
} }, watch: { defaultPhoneNumber: { handler(e2, a2) {
  e2 !== a2 && this.buildResults(e2);
}, immediate: true }, defaultCountryCode: { handler(e2, a2) {
  e2 && e2 !== a2 && this.setCountryCode(e2);
}, immediate: true } }, async mounted() {
  try {
    const { defaultCountryCode: e2, fetchCountry: a2, noUseBrowserLocale: r2, setCountryCode: t2 } = this;
    if (!this.defaultPhoneNumber && this.value && this.buildResults(this.value), e2 && a2)
      throw new Error("MazPhoneNumberInput: Do not use 'fetch-country' and 'default-country-code' options in the same time");
    if (e2 && r2)
      throw new Error("MazPhoneNumberInput: If you use a 'default-country-code', do not use 'no-use-browser-locale' options");
    if (e2)
      return;
    const o2 = a2 ? await (async () => {
      try {
        const e3 = await fetch("https://ip2c.org/s"), a3 = (await e3.text() || "").toString();
        if (a3 && "1" === a3[0])
          return a3.substr(2, 2);
      } catch (e3) {
        return new Error("[MazPhoneNumberInput] Error while fetching country code");
      }
    })() : r2 ? null : await (() => {
      if ("undefined" == typeof window)
        return null;
      const e3 = window.navigator.userLanguage || window.navigator.language;
      let a3 = e3 ? e3.substr(3, 4).toUpperCase() : null;
      return "" === a3 && (a3 = e3.substr(0, 2).toUpperCase()), "EN" === a3 && (a3 = "US"), "JA" === a3 && (a3 = "JP"), a3;
    })();
    o2 && t2(o2);
  } catch (e2) {
    throw new Error(e2);
  }
}, methods: { async buildResults(e2, a2) {
  const { countryCode: r2, value: t2 } = this;
  await this.$nextTick();
  const o2 = this.asYouTypeNumber && e2 && this.asYouTypeNumber.length > e2.length;
  this.results = bi(e2, r2);
  const { isValid: i2, e164: n2 } = this.results, d2 = !this.asYouTypeNumber || !this.cursorPosition || this.cursorPosition + 1 >= this.asYouTypeNumber.length, l2 = !o2 && d2 || i2;
  this.asYouTypeNumber = l2 ? zi(e2, r2) : e2, !a2 && this.results && this.results.countryCode && r2 !== this.results.countryCode && this.setCountryCode(this.results.countryCode), this.$emit("update", this.results);
  const s2 = i2 ? n2 : this.asYouTypeNumber;
  (s2 || s2 !== t2) && this.$emit("input", s2);
}, onBlur(e2) {
  this.$emit("blur", e2), this.countryCode && (this.asYouTypeNumber = zi(this.asYouTypeNumber, this.countryCode));
}, onKeydown(e2) {
  const a2 = e2.target;
  this.cursorPosition = a2 == null ? void 0 : a2.selectionStart;
}, async setCountryCode(e2, a2) {
  const { buildResults: r2, asYouTypeNumber: t2 } = this, o2 = (async (e3) => {
    try {
      if (hi.includes(e3))
        return true;
      throw `MazPhoneNumberInput: The country ${e3} is not available`;
    } catch (e4) {
      throw new Error(e4);
    }
  })(e2);
  a2 && (this.focusPhoneNumberInput(), t2 && t2.includes("+") && (this.asYouTypeNumber = null)), o2 && e2 && (this.countryCode = e2, r2(this.asYouTypeNumber, true));
}, async focusCountrySelector() {
  await this.$nextTick(), this.$refs.CountrySelector.$el.querySelector("input").focus();
}, async focusPhoneNumberInput() {
  await this.$nextTick(), this.$refs.PhoneNumberInput.$el.querySelector("input").focus();
} } };
const ki = ti(yi, function() {
  var e2 = this, a2 = e2._self._c;
  return a2("div", { staticClass: "maz-base-component maz-phone-number-input maz-flex", class: [{ "maz-is-dark": e2.dark }, `maz-phone-number-input--${e2.size}`], attrs: { id: e2.id } }, [e2.noCountrySelector ? e2._e() : a2("MazSelect", { ref: "CountrySelector", staticClass: "country-selector", class: { "no-padding-left": e2.noFlags || !e2.countryCode }, attrs: { value: e2.countryCode, options: e2.countriesSorted, placeholder: e2.t.countrySelectorLabel, search: !e2.noSearch, position: e2.position, "search-placeholder": e2.t.countrySelectorSearchPlaceholder, "items-height": e2.countriesHeight, error: e2.shouldChooseCountry, hint: e2.shouldChooseCountry ? e2.t.countrySelectorError : null, size: e2.size, success: e2.isValid && !e2.noValidation, disabled: e2.disabled, lock: e2.lock, "input-value": e2.callingCode, "list-width": 300, config: { labelKey: "dialCode", searchKey: "name", valueKey: "iso2" }, color: e2.color }, on: { input: function(a3) {
    return e2.setCountryCode(a3, true);
  } }, scopedSlots: e2._u([{ key: "default", fn: function({ option: r2 }) {
    return [a2("div", { staticClass: "maz-flex maz-align-center" }, [e2.noFlags ? e2._e() : a2("div", { staticClass: "country-selector__flag-container maz-mr-2" }, [a2("div", { class: `maz-flag maz-flag-${r2.iso2.toLowerCase()}` })]), e2.showCodeOnList ? a2("span", { staticClass: "country-selector__calling-code maz-flex-fixed maz-text-muted", class: { "maz-text-muted-dark": r2.isSelected } }, [e2._v(" +" + e2._s(r2.dialCode) + " ")]) : e2._e(), a2("div", { staticClass: "maz-dots-text maz-flex-1 maz-text-left maz-text-color", class: { "maz-text-white": r2.isSelected } }, [e2._v(" " + e2._s(r2.name) + " ")]), a2("div", { staticClass: "maz-dots-text maz-flex-1 maz-text-right maz-text-color", class: { "maz-text-white": r2.isSelected }, staticStyle: { "max-width": "60px" } }, [e2._v(" +" + e2._s(r2.dialCode) + " ")])])];
  } }], null, false, 664249301) }), !e2.countryCode || e2.noFlags || e2.noCountrySelector ? e2._e() : a2("button", { staticClass: "maz-phone-number-input__country-flag", attrs: { tabindex: "-1" }, on: { click: e2.focusCountrySelector } }, [a2("div", { class: `maz-flag maz-flag-${e2.countryCode.toLowerCase()}` })]), a2("MazInput", e2._b({ ref: "PhoneNumberInput", staticClass: "input-phone-number maz-flex-1", class: { "has-border-radius": e2.noCountrySelector }, attrs: { id: e2.uniqueId ? `${e2.uniqueId}_phone_number` : null, value: e2.asYouTypeNumber, placeholder: e2.placeholder || e2.t.phoneNumberLabel, hint: e2.hint || e2.hintValue, disabled: e2.disabled, readonly: e2.lock, size: e2.size, success: e2.isValid && !e2.noValidation, clearable: "", color: e2.color }, on: { keydown: e2.onKeydown, focus: function(a3) {
    return e2.$emit("focus", a3);
  }, blur: e2.onBlur, change: function(a3) {
    return e2.$emit("change", a3);
  }, clear: function(a3) {
    return e2.$emit("clear", a3);
  }, input: e2.buildResults } }, "MazInput", e2.$attrs, false), [e2._t("icon-left", null, { slot: "icon-left" }), e2._t("icon-right", null, { slot: "icon-right" })], 2)], 1);
}, [], false, null, null, null, null).exports;
ki.install = (e2) => {
  e2.component(ki.name, ki);
};
const xi = "o21pay-address", wi = [oi, di, si, ui, ki];
class $i extends oe {
  static get properties() {
    return { editor: { type: Boolean }, size: { type: String }, type: { type: String }, required: { type: Boolean }, fields: { type: Number, attribute: "fields" }, primary_color: { type: String, attribute: "primary_color" }, locale: { type: String, attribute: "locale" }, data: { type: Object } };
  }
  constructor() {
    super(), this.countries = this.listCountries(), this.editor = false, this.required = false, this.icons = false, this.size = "small", this.primary_color = "#68d18d", this.object = void 0, this.type = "personal", this.fields = 127, this.locale = "en", navigator && (this.locale = navigator.userLanguage || navigator.languages && navigator.languages.length && navigator.languages[0] || navigator.language || navigator.browserLanguage || navigator.systemLanguage || "en"), this.i18n = { en: { "Select option": "Select option", "Company name": "Company name", "Your name": "Your name", Address: "Your Address", "Postal Code": "Postal Code", City: "City", Country: "Country", Email: "Email", "Company Number": "Company Number", "VAT Number": "VAT Number", Personal: "Personal", Organization: "Organization", countrySelectorLabel: "Country code", countrySelectorError: "Choose country", countrySelectorSearchPlaceholder: "", phoneNumberLabel: "Phone number" }, fr: { "Select option": "Type adresse", "Company name": "Nom de société", "Your name": "Votre nom", Address: "Votre Adresse", "Postal Code": "Code postal", City: "Ville", Country: "Pays", Email: "Email", "Company Number": "Siret", "VAT Number": "N° TVA", Personal: "Personnel", Organization: "Société", countrySelectorLabel: "Code", countrySelectorError: "Liste des pays", countrySelectorSearchPlaceholder: "", phoneNumberLabel: "N° de téléphone" } };
    const e2 = this;
    setTimeout(async function() {
      e2.createVue();
    }, 200);
  }
  init() {
  }
  builderProperties() {
    return [{ type: "Switch", title: "Required", value: "required", style: "" }, { type: "Input", title: "Mask", value: "fields", default: 28671 }, { type: "Select", value: "type", style: "width: 96%;", placeholder: "", options: { default: "personal", objects: [{ title: "All", value: "all" }, { title: "Personal", value: "personal" }, { title: "Organization", value: "organization" }] } }, { type: "Size" }];
  }
  validation() {
    if (!this.required)
      return true;
    let e2 = this.getData();
    if (!e2)
      return false;
    if (!e2.name.length)
      return false;
    if (!e2.address.length)
      return false;
    if (!e2.zipcode.length)
      return false;
    if (!e2.city.length)
      return false;
    if (!e2.country.length)
      return false;
    if (!e2.phone || !e2.phone.length)
      return false;
    if (!e2.email.length)
      return false;
    if ("organization" === e2.typeAddress) {
      if (!e2.company.length)
        return false;
      if (!e2.duns.length)
        return false;
      if (!e2.vatnumber.length)
        return false;
    }
    return true;
  }
  getData() {
    if (!this.object)
      return null;
    let e2 = this.object.$data;
    if (!e2)
      return null;
    const a2 = { name: e2.name, address: e2.address, zipcode: e2.zipcode, city: e2.city, country: e2.cntry, phone: e2.phone, email: e2.email };
    return a2.typeAddress = e2.props.typeAddress, "organization" === a2.typeAddress && (a2.company = e2.company, a2.duns = e2.duns, a2.vatnumber = e2.vatnumber), a2;
  }
  setData() {
    if (!this.object)
      return null;
    let e2 = this.object.$data;
    if (!e2)
      return null;
    this.data && (e2.name = this.data.name, e2.name = this.data.name || "", e2.address = this.data.address || "", e2.zipcode = this.data.zipcode || "", e2.city = this.data.city || "", e2.country = this.data.country || "", e2.phone = this.data.phone || "", e2.email = this.data.email || "", e2.props.typeAddress = this.data.typeAddress, "organization" === this.data.typeAddress && (e2.company = this.data.company || "", e2.duns = this.data.duns || "", e2.vatnumber = this.data.vatnumber || ""));
  }
  updated(e2) {
    if (super.updated(e2), isNaN(this.fields) && (this.fields = 28671), e2.has("type") || e2.has("fields") || e2.has("size")) {
      const a2 = this.prepareDataProperties();
      e2.has("type") && (a2.typeAddress = this.type, "all" === this.type ? (this.fields |= 32768, a2.typeAddress = "personal") : (this.fields &= -32769, a2.typeAddress = a2.type), a2.fields = this.fields), e2.has("fields") && (a2.fields = this.fields), this.object && (this.object.$data.props = a2);
    }
  }
  async createVue() {
    const e2 = this;
    if (!e2.renderRoot)
      return;
    const a2 = e2.renderRoot.querySelector("#app");
    if (!a2)
      return;
    ((e3, a3 = {}) => {
      wi.forEach((a4) => {
        e3.component(a4.name, a4);
      });
    })(Vue), this.object = new Vue({ el: a2, components: {}, data: function() {
      return { visible: false, resultPhone: void 0, options: e2.countries, company: "", name: "", address: "", zipcode: "", city: "", cntry: "", phone: "", email: "", duns: "", vatnumber: "", props: e2.prepareDataProperties() };
    }, watch: { name(a3, r3) {
      e2.getData();
    } }, methods: { __inputValue(a3) {
      const r3 = e2.validation();
      e2.dispatchEvent(new CustomEvent("o21pay_component", { detail: { instance: e2, message: "o21pay_validation", state: r3 }, bubbles: true, composed: true }));
    }, __changePhone(e3) {
      if (e3.isValid && e3.countryCode) {
        let a3 = e3.countryCode.toLowerCase(), r3 = this.options.find((e4) => e4.iso === a3);
        r3 && (this.cntry = r3.value);
      }
    } } });
    let r2 = navigator.language.split("-")[0], t2 = this.countries.find((e3) => e3.iso === r2);
    t2 && (this.object.$data.cntry = t2.value), this.setData(), this.object.$data.visible = true;
  }
  listCountries() {
    const e2 = [];
    for (const a2 of gi)
      e2.push({ label: a2.name, value: a2.name, iso: a2.iso2.toLowerCase(), icon: a2.iso2.toLowerCase() });
    return e2;
  }
  getIcon(e2) {
    return "name" === e2 ? "person" : "@" === e2 ? "home" : "company" === e2 ? "apartment" : "duns" === e2 ? "inbox" : "vat" === e2 ? "123" : "mailbox" === e2 ? "mail" : "";
  }
  prepareDataProperties() {
    let e2 = {};
    for (const a2 in $i.properties) {
      let r2 = this[a2];
      "size" === a2 && (r2 = "small" === r2 ? "sm" : "medium" === r2 ? void 0 : "large" === r2 ? "lg" : "sm", r2 = this.size || "large"), e2[a2] = r2;
    }
    return 8192 & this.fields && (e2.icon_name = this.getIcon("name"), e2.icon_addr = this.getIcon("@"), e2.icon_mail = this.getIcon("mailbox"), e2.icon_company = this.getIcon("company"), e2.icon_duns = this.getIcon("duns"), e2.icon_vat = this.getIcon("vat")), this.i18n[this.locale] ? e2.i18n = this.i18n[this.locale] : e2.i18n = this.i18n.en, "all" === this.type ? e2.typeAddress = "personal" : e2.typeAddress = this.type, e2.addressModel = [{ label: e2.i18n.Personal, value: "personal" }, { label: e2.i18n.Organization, value: "organization" }], e2;
  }
  render() {
    return T`<style>
        :host {
          --maz-primary: ${this.primary_color} !important;
        }
      </style>
      <div>
        <div id="app">
          <div v-if="visible">
            <form>
              <div v-if="props.fields & 0x8000" class="m1">
                <maz-select
                  v-model="props.typeAddress"
                  :size="props.size"
                  :options="props.addressModel"
                  :disabled="props.editor"
                  :placeholder="props.i18n['Select option']"
                />
              </div>
              <div v-if="props.typeAddress === 'organization' && props.fields & 0x0001" class="m1">
                <maz-input
                  v-model="company"
                  autocomplete="company"
                  :placeholder="props.i18n['Company name']"
                  :left-icon-name="props.icon_company"
                  :size="props.size"
                  :readonly="props.editor"
                  :required="props.required"
                  @input="__inputValue"
                />
              </div>
              <div v-if="props.fields & 0x0002" class="m1">
                <maz-input
                  v-model="name"
                  autocomplete="name"
                  :placeholder="props.i18n['Your name']"
                  :left-icon-name="props.icon_name"
                  :size="props.size"
                  :readonly="props.editor"
                  :required="props.required"
                  @input="__inputValue"
                />
              </div>
              <div v-if="props.fields & 0x0004" class="m1">
                <maz-input
                  v-model="address"
                  autocomplete="address"
                  :placeholder="props.i18n['Address']"
                  :left-icon-name="props.icon_addr"
                  :size="props.size"
                  :readonly="props.editor"
                  :required="props.required"
                  @input="__inputValue"
                />
              </div>

              <div
                v-if="props.fields & 0x4000 && props.fields & 0x0004"
                class="m1"
                style="display:flex;"
              >
                <div class="" style="width: 160px;">
                  <maz-input
                    v-model="zipcode"
                    autocomplete="postal-code"
                    :placeholder="props.i18n['Postal Code']"
                    :size="props.size"
                    :readonly="props.editor"
                    :required="props.required"
                    @input="__inputValue"
                  />
                </div>
                <div class="" style="padding-left: 5px; width: 40%; ">
                  <maz-input
                    v-model="city"
                    autocomplete="address-level2"
                    :placeholder="props.i18n['City']"
                    :size="props.size"
                    :readonly="props.editor"
                    :required="props.required"
                    @input="__inputValue"
                  />
                </div>
                <div style="padding-left: 5px; width: 60%;">
                  <maz-select
                    v-model="cntry"
                    name="country-name"
                    autocomplete="country-name"
                    :placeholder="props.i18n['Country']"
                    :size="props.size"
                    :options="options"
                    :lock="props.editor"
                    v-slot="{ option, isSelected, icon }"
                  >
                  </maz-select>
                </div>
              </div>
              <div v-else>
                <div class="m1" style="display:flex;">
                  <div class="" style="width: 160px;">
                    <maz-input
                      v-model="zipcode"
                      autocomplete="postal-code"
                      :placeholder="props.i18n['Postal Code']"
                      :size="props.size"
                      :readonly="props.editor"
                      :required="props.required"
                      @input="__inputValue"
                    />
                  </div>
                  <div class="" style="padding-left: 5px; width: 100%">
                    <maz-input
                      v-model="city"
                      autocomplete="address-level2"
                      :placeholder="props.i18n['City']"
                      :size="props.size"
                      :readonly="props.editor"
                      :required="props.required"
                      @input="__inputValue"
                    />
                  </div>
                </div>
                <maz-select
                  v-if="props.fields & 0x0004"
                  class="m1"
                  v-model="cntry"
                  autocomplete="country-name"
                  :placeholder="props.i18n['Country']"
                  :size="props.size"
                  :options="options"
                  :lock="props.editor"
                  v-slot="{ option, isSelected, icon }"
                >
                </maz-select>
              </div>
              <div v-if="props.fields & 0x0008" class="m1">
                <maz-phone-number-input
                  v-model="phone"
                  autocomplete="phone"
                  :translations="props.i18n"
                  no-validation
                  :size="props.size"
                  :required="props.required"
                  :lock="props.editor"
                  @update="__changePhone($event)"
                  @input="__inputValue($event)"
                />
              </div>
              <div v-if="props.fields & 0x0010" class="m1">
                <maz-input
                  v-model="email"
                  autocomplete="email"
                  :placeholder="props.i18n['Email']"
                  :left-icon-name="props.icon_mail"
                  :size="props.size"
                  :readonly="props.editor"
                  :required="props.required"
                  @input="__inputValue"
                />
              </div>
              <div v-if="props.typeAddress === 'organization'" class="m1">
                <maz-input
                  v-if="props.fields & 0x0020"
                  v-model="duns"
                  :placeholder="props.i18n['Company Number']"
                  :left-icon-name="props.icon_duns"
                  :size="props.size"
                  :readonly="props.editor"
                  :required="props.required"
                  @input="__inputValue"
                />
              </div>
              <div v-if="props.typeAddress === 'organization'" class="m1">
                <maz-input
                  v-if="props.fields & 0x0040"
                  v-model="vatnumber"
                  :placeholder="props.i18n['VAT Number']"
                  :left-icon-name="props.icon_vat"
                  :size="props.size"
                  :readonly="props.editor"
                  :required="props.required"
                  @input="__inputValue"
                />
              </div>
            </form>
          </div>
        </div>
      </div>`;
  }
}
!function(e2, a2, r2) {
  (a2 = function(e3) {
    var a3 = function(e4, a4) {
      if ("object" != typeof e4 || null === e4)
        return e4;
      var r3 = e4[Symbol.toPrimitive];
      if (void 0 !== r3) {
        var t2 = r3.call(e4, a4 || "default");
        if ("object" != typeof t2)
          return t2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === a4 ? String : Number)(e4);
    }(e3, "string");
    return "symbol" == typeof a3 ? a3 : String(a3);
  }(a2)) in e2 ? Object.defineProperty(e2, a2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[a2] = r2;
}($i, "styles", [ai, ri]);
const _i = window.customElements;
_i && !_i.get(xi) && _i.define(xi, $i), import("https://unpkg.com/vue@2/dist/vue.js"), window.O21PayComponents = { version: "0.9.1", components: [{ name: "O21Pay", component: st, img: "https://assets.obvious21.com/o21pay-assets/O21-Pay-small.png", id: "o21pay" }, { name: "O21PayQR", title: "QR-Code", component: Xo, icon: "fa fa-qrcode", id: "o21pay-qr" }, { name: "O21PayDialog", component: bt }, { name: "O21PayAddress", title: "Address", component: $i, icon: "fa fa-address-card", id: "address" }], waitLoaded: async function() {
  return await Promise.allSettled([customElements.whenDefined("o21pay-qr"), customElements.whenDefined("o21pay-dialog"), customElements.whenDefined("o21pay-payment"), customElements.whenDefined("o21pay-address")]), true;
} };
