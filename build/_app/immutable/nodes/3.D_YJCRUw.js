import {
  s as Be,
  e as h,
  a as T,
  c as p,
  b as D,
  g as A,
  f as _,
  A as te,
  m as n,
  o as Z,
  i as W,
  h as o,
  t as we,
  d as $e,
  j as Ce,
  B as ut,
  u as ge,
  l as ft,
  p as re,
  q as gt,
  Q as mt,
  D as dt,
  E as ht,
  F as pt,
  G as ke,
  r as st,
  z as at,
  K as Ze,
  H as _t,
} from "../chunks/scheduler.Ck7Ga1hZ.js";
import {
  S as Re,
  i as Oe,
  c as G,
  a as L,
  m as j,
  t as O,
  b as N,
  d as H,
  f as Ie,
  g as vt,
  e as bt,
} from "../chunks/index.DorOvAdr.js";
import { e as xe } from "../chunks/each.D6YF6ztN.js";
import { T as be } from "../chunks/Typography.C9h9Web6.js";
import { c as wt, N as $t, F as yt } from "../chunks/Footer.D3aAdaA-.js";
import { B as nt } from "../chunks/Button.BCivvIp4.js";
import "../chunks/Footer.svelte_svelte_type_style_lang.BPZ5Cr7j.js";
import { I as kt } from "../chunks/InputText.rgFbNsxi.js";
import { g as fe } from "../chunks/entry.DedhntWo.js";
import { c as It } from "../chunks/api.service.JR_0pWCc.js";
function Et(s) {
  let e;
  return {
    c() {
      e = we(s[1]);
    },
    l(t) {
      e = $e(t, s[1]);
    },
    m(t, a) {
      W(t, e, a);
    },
    p(t, a) {
      a & 2 && Ce(e, t[1]);
    },
    d(t) {
      t && _(e);
    },
  };
}
function Tt(s) {
  let e;
  return {
    c() {
      e = we(s[2]);
    },
    l(t) {
      e = $e(t, s[2]);
    },
    m(t, a) {
      W(t, e, a);
    },
    p(t, a) {
      a & 4 && Ce(e, t[2]);
    },
    d(t) {
      t && _(e);
    },
  };
}
function At(s) {
  let e, t, a, i, g, r, c, f, l, m, C, y, J, P, F, V, k, $, E;
  return (
    (m = new be({
      props: {
        type: "cardTitle",
        $$slots: { default: [Et] },
        $$scope: { ctx: s },
      },
    })),
    (P = new be({
      props: { type: "body", $$slots: { default: [Tt] }, $$scope: { ctx: s } },
    })),
    ($ = new nt({
      props: {
        iconSrc: "./images/Button/Icon.svg",
        buttonLabel: "VIEW IN AR",
        type: "secondary",
        onClick: s[4],
      },
    })),
    {
      c() {
        (e = h("div")),
          (t = h("div")),
          (a = h("img")),
          (g = T()),
          (r = h("img")),
          (f = T()),
          (l = h("div")),
          G(m.$$.fragment),
          (C = T()),
          (y = h("div")),
          (J = T()),
          G(P.$$.fragment),
          (F = T()),
          (V = h("div")),
          (k = T()),
          G($.$$.fragment),
          this.h();
      },
      l(v) {
        e = p(v, "DIV", { class: !0 });
        var u = D(e);
        t = p(u, "DIV", { class: !0 });
        var q = D(t);
        (a = p(q, "IMG", { src: !0, alt: !0, height: !0, class: !0 })),
          (g = A(q)),
          (r = p(q, "IMG", { src: !0, alt: !0, height: !0, class: !0 })),
          q.forEach(_),
          (f = A(u)),
          (l = p(u, "DIV", { class: !0 }));
        var I = D(l);
        L(m.$$.fragment, I),
          (C = A(I)),
          (y = p(I, "DIV", { "aria-hidden": !0, class: !0 })),
          D(y).forEach(_),
          (J = A(I)),
          L(P.$$.fragment, I),
          (F = A(I)),
          (V = p(I, "DIV", { "aria-hidden": !0, class: !0 })),
          D(V).forEach(_),
          (k = A(I)),
          L($.$$.fragment, I),
          I.forEach(_),
          u.forEach(_),
          this.h();
      },
      h() {
        te(a.src, (i = s[3])) || n(a, "src", i),
          n(a, "alt", s[1]),
          n(a, "height", "360px"),
          n(a, "class", "svelte-1c1icpc"),
          te(r.src, (c = s[3])) || n(r, "src", c),
          n(r, "alt", s[1]),
          n(r, "height", "360px"),
          n(r, "class", "svelte-1c1icpc"),
          n(t, "class", "images svelte-1c1icpc"),
          Z(t, "animate", s[5]),
          n(y, "aria-hidden", "true"),
          n(y, "class", "svelte-1c1icpc"),
          n(V, "aria-hidden", "true"),
          n(V, "class", "svelte-1c1icpc"),
          n(l, "class", "content svelte-1c1icpc"),
          n(e, "class", "featured-card svelte-1c1icpc"),
          Z(e, "right", s[0] === "right");
      },
      m(v, u) {
        W(v, e, u),
          o(e, t),
          o(t, a),
          o(t, g),
          o(t, r),
          o(e, f),
          o(e, l),
          j(m, l, null),
          o(l, C),
          o(l, y),
          o(l, J),
          j(P, l, null),
          o(l, F),
          o(l, V),
          o(l, k),
          j($, l, null),
          (E = !0);
      },
      p(v, [u]) {
        (!E || (u & 8 && !te(a.src, (i = v[3])))) && n(a, "src", i),
          (!E || u & 2) && n(a, "alt", v[1]),
          (!E || (u & 8 && !te(r.src, (c = v[3])))) && n(r, "src", c),
          (!E || u & 2) && n(r, "alt", v[1]),
          (!E || u & 32) && Z(t, "animate", v[5]);
        const q = {};
        u & 66 && (q.$$scope = { dirty: u, ctx: v }), m.$set(q);
        const I = {};
        u & 68 && (I.$$scope = { dirty: u, ctx: v }), P.$set(I);
        const K = {};
        u & 16 && (K.onClick = v[4]),
          $.$set(K),
          (!E || u & 1) && Z(e, "right", v[0] === "right");
      },
      i(v) {
        E ||
          (O(m.$$.fragment, v),
          O(P.$$.fragment, v),
          O($.$$.fragment, v),
          (E = !0));
      },
      o(v) {
        N(m.$$.fragment, v), N(P.$$.fragment, v), N($.$$.fragment, v), (E = !1);
      },
      d(v) {
        v && _(e), H(m), H(P), H($);
      },
    }
  );
}
function Ct(s, e, t) {
  let { direction: a } = e,
    { heading: i } = e,
    { description: g } = e,
    { img: r } = e,
    { onClick: c = () => null } = e,
    { isAnimated: f } = e;
  return (
    (s.$$set = (l) => {
      "direction" in l && t(0, (a = l.direction)),
        "heading" in l && t(1, (i = l.heading)),
        "description" in l && t(2, (g = l.description)),
        "img" in l && t(3, (r = l.img)),
        "onClick" in l && t(4, (c = l.onClick)),
        "isAnimated" in l && t(5, (f = l.isAnimated));
    }),
    [a, i, g, r, c, f]
  );
}
class Me extends Re {
  constructor(e) {
    super(),
      Oe(this, e, Ct, At, Be, {
        direction: 0,
        heading: 1,
        description: 2,
        img: 3,
        onClick: 4,
        isAnimated: 5,
      });
  }
}
function St(s) {
  let e;
  return {
    c() {
      e = we(s[2]);
    },
    l(t) {
      e = $e(t, s[2]);
    },
    m(t, a) {
      W(t, e, a);
    },
    p(t, a) {
      a & 4 && Ce(e, t[2]);
    },
    d(t) {
      t && _(e);
    },
  };
}
function Dt(s) {
  let e,
    t =
      '<img src="/images/ChatBox/AI.gif" alt="chat bot assistant" height="40px" width="40px" class="svelte-7un08"/>',
    a,
    i,
    g,
    r,
    c,
    f,
    l,
    m,
    C,
    y,
    J,
    P,
    F,
    V,
    k,
    $,
    E,
    v,
    u,
    q,
    I,
    K,
    le;
  m = new be({
    props: { type: "body", $$slots: { default: [St] }, $$scope: { ctx: s } },
  });
  const X = s[8].default,
    M = ut(X, s, s[16], null);
  function B(b) {
    s[13](b);
  }
  let U = {
    variant: "text",
    placeholder: "Having any doubts ?",
    onKeyDown: s[12],
  };
  return (
    s[0] !== void 0 && (U.value = s[0]),
    ($ = new kt({ props: U })),
    ge.push(() => Ie($, "value", B)),
    {
      c() {
        (e = h("div")),
          (e.innerHTML = t),
          (a = T()),
          (i = h("dialog")),
          (g = h("div")),
          (r = h("div")),
          (c = h("img")),
          (l = T()),
          G(m.$$.fragment),
          (C = T()),
          (y = h("img")),
          (P = T()),
          (F = h("div")),
          M && M.c(),
          (V = T()),
          (k = h("div")),
          G($.$$.fragment),
          (v = T()),
          (u = h("img")),
          this.h();
      },
      l(b) {
        (e = p(b, "DIV", {
          class: !0,
          role: !0,
          tabindex: !0,
          "aria-label": !0,
          "aria-live": !0,
          "data-svelte-h": !0,
        })),
          ft(e) !== "svelte-zh9y9p" && (e.innerHTML = t),
          (a = A(b)),
          (i = p(b, "DIALOG", { class: !0 }));
        var S = D(i);
        g = p(S, "DIV", { class: !0 });
        var R = D(g);
        r = p(R, "DIV", { class: !0 });
        var Y = D(r);
        (c = p(Y, "IMG", {
          src: !0,
          alt: !0,
          height: !0,
          width: !0,
          class: !0,
        })),
          (l = A(Y)),
          L(m.$$.fragment, Y),
          (C = A(Y)),
          (y = p(Y, "IMG", { src: !0, alt: !0, class: !0 })),
          Y.forEach(_),
          (P = A(R)),
          (F = p(R, "DIV", { class: !0 }));
        var ye = D(F);
        M && M.l(ye),
          ye.forEach(_),
          (V = A(R)),
          (k = p(R, "DIV", { class: !0 }));
        var z = D(k);
        L($.$$.fragment, z),
          (v = A(z)),
          (u = p(z, "IMG", { src: !0, alt: !0, class: !0 })),
          z.forEach(_),
          R.forEach(_),
          S.forEach(_),
          this.h();
      },
      h() {
        n(e, "class", "chatbox-icon svelte-7un08"),
          n(e, "role", "button"),
          n(e, "tabindex", "0"),
          n(e, "aria-label", "open chatbot"),
          n(e, "aria-live", "polite"),
          Z(e, "hideIcon", s[4]),
          te(c.src, (f = "/images/ChatBox/AI.gif")) || n(c, "src", f),
          n(c, "alt", ""),
          n(c, "height", "40px"),
          n(c, "width", "40px"),
          n(c, "class", "svelte-7un08"),
          te(y.src, (J = "/images/ChatBox/Close.svg")) || n(y, "src", J),
          n(y, "alt", ""),
          n(y, "class", "svelte-7un08"),
          n(r, "class", "chatbox-heading svelte-7un08"),
          n(F, "class", "message svelte-7un08"),
          te(u.src, (q = "/images/ChatBox/Send.svg")) || n(u, "src", q),
          n(u, "alt", ""),
          n(u, "class", "svelte-7un08"),
          n(k, "class", "input-message-box svelte-7un08"),
          n(g, "class", "chatbox svelte-7un08"),
          n(i, "class", "dialog svelte-7un08");
      },
      m(b, S) {
        W(b, e, S),
          W(b, a, S),
          W(b, i, S),
          o(i, g),
          o(g, r),
          o(r, c),
          o(r, l),
          j(m, r, null),
          o(r, C),
          o(r, y),
          o(g, P),
          o(g, F),
          M && M.m(F, null),
          s[11](F),
          o(g, V),
          o(g, k),
          j($, k, null),
          o(k, v),
          o(k, u),
          s[15](i),
          (I = !0),
          K ||
            ((le = [
              re(e, "click", s[9]),
              re(y, "click", gt(s[10])),
              re(u, "click", s[14]),
              mt(wt.call(null, i)),
            ]),
            (K = !0));
      },
      p(b, [S]) {
        (!I || S & 16) && Z(e, "hideIcon", b[4]);
        const R = {};
        S & 65540 && (R.$$scope = { dirty: S, ctx: b }),
          m.$set(R),
          M &&
            M.p &&
            (!I || S & 65536) &&
            dt(M, X, b, b[16], I ? pt(X, b[16], S, null) : ht(b[16]), null);
        const Y = {};
        S & 1 && (Y.onKeyDown = b[12]),
          !E && S & 1 && ((E = !0), (Y.value = b[0]), ke(() => (E = !1))),
          $.$set(Y);
      },
      i(b) {
        I || (O(m.$$.fragment, b), O(M, b), O($.$$.fragment, b), (I = !0));
      },
      o(b) {
        N(m.$$.fragment, b), N(M, b), N($.$$.fragment, b), (I = !1);
      },
      d(b) {
        b && (_(e), _(a), _(i)),
          H(m),
          M && M.d(b),
          s[11](null),
          H($),
          s[15](null),
          (K = !1),
          st(le);
      },
    }
  );
}
function Mt(s, e, t) {
  let { $$slots: a = {}, $$scope: i } = e,
    { value: g } = e,
    { sendMessage: r = () => null } = e,
    { messageEl: c } = e,
    { heading: f } = e,
    l,
    m;
  const C = () => {
      t(4, (m = !1)), l.close();
    },
    y = () => {
      r(), t(0, (g = ""));
    },
    J = () => {
      l.close(), t(4, (m = !1));
    };
  at(() => {
    l.addEventListener("click_outside", () => {
      J();
    });
  });
  const P = () => {
      t(4, (m = !0)), l.show();
    },
    F = () => C();
  function V(u) {
    ge[u ? "unshift" : "push"](() => {
      (c = u), t(1, c);
    });
  }
  const k = () => {
    g && y();
  };
  function $(u) {
    (g = u), t(0, g);
  }
  const E = () => {
    g && y();
  };
  function v(u) {
    ge[u ? "unshift" : "push"](() => {
      (l = u), t(3, l);
    });
  }
  return (
    (s.$$set = (u) => {
      "value" in u && t(0, (g = u.value)),
        "sendMessage" in u && t(7, (r = u.sendMessage)),
        "messageEl" in u && t(1, (c = u.messageEl)),
        "heading" in u && t(2, (f = u.heading)),
        "$$scope" in u && t(16, (i = u.$$scope));
    }),
    [g, c, f, l, m, C, y, r, a, P, F, V, k, $, E, v, i]
  );
}
class Bt extends Re {
  constructor(e) {
    super(),
      Oe(this, e, Mt, Dt, Be, {
        value: 0,
        sendMessage: 7,
        messageEl: 1,
        heading: 2,
      });
  }
}
function Rt(s) {
  let e;
  return {
    c() {
      e = we(s[1]);
    },
    l(t) {
      e = $e(t, s[1]);
    },
    m(t, a) {
      W(t, e, a);
    },
    p(t, a) {
      a & 2 && Ce(e, t[1]);
    },
    d(t) {
      t && _(e);
    },
  };
}
function Ot(s) {
  let e;
  return {
    c() {
      e = we(s[2]);
    },
    l(t) {
      e = $e(t, s[2]);
    },
    m(t, a) {
      W(t, e, a);
    },
    p(t, a) {
      a & 4 && Ce(e, t[2]);
    },
    d(t) {
      t && _(e);
    },
  };
}
function Nt(s) {
  let e, t, a, i, g, r, c, f;
  return (
    (a = new be({
      props: {
        type: "subtext",
        $$slots: { default: [Rt] },
        $$scope: { ctx: s },
      },
    })),
    (r = new be({
      props: {
        type: "subtext",
        $$slots: { default: [Ot] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        (e = h("div")),
          (t = h("p")),
          G(a.$$.fragment),
          (i = T()),
          (g = h("p")),
          G(r.$$.fragment),
          this.h();
      },
      l(l) {
        e = p(l, "DIV", { class: !0, id: !0, "data-message": !0 });
        var m = D(e);
        t = p(m, "P", { class: !0 });
        var C = D(t);
        L(a.$$.fragment, C),
          C.forEach(_),
          (i = A(m)),
          (g = p(m, "P", { class: !0 }));
        var y = D(g);
        L(r.$$.fragment, y), y.forEach(_), m.forEach(_), this.h();
      },
      h() {
        n(t, "class", "message svelte-1rm134j"),
          Z(t, "message-heading-user", s[0] === "user"),
          n(g, "class", "svelte-1rm134j"),
          Z(g, "chat-time", s[0] === "user"),
          n(e, "class", "chat-message svelte-1rm134j"),
          n(e, "id", (c = "chat-" + s[3])),
          n(e, "data-message", s[0]),
          Z(e, "messageUser", s[0] === "user");
      },
      m(l, m) {
        W(l, e, m),
          o(e, t),
          j(a, t, null),
          o(e, i),
          o(e, g),
          j(r, g, null),
          (f = !0);
      },
      p(l, [m]) {
        const C = {};
        m & 18 && (C.$$scope = { dirty: m, ctx: l }),
          a.$set(C),
          (!f || m & 1) && Z(t, "message-heading-user", l[0] === "user");
        const y = {};
        m & 20 && (y.$$scope = { dirty: m, ctx: l }),
          r.$set(y),
          (!f || m & 1) && Z(g, "chat-time", l[0] === "user"),
          (!f || (m & 8 && c !== (c = "chat-" + l[3]))) && n(e, "id", c),
          (!f || m & 1) && n(e, "data-message", l[0]),
          (!f || m & 1) && Z(e, "messageUser", l[0] === "user");
      },
      i(l) {
        f || (O(a.$$.fragment, l), O(r.$$.fragment, l), (f = !0));
      },
      o(l) {
        N(a.$$.fragment, l), N(r.$$.fragment, l), (f = !1);
      },
      d(l) {
        l && _(e), H(a), H(r);
      },
    }
  );
}
function Pt(s, e, t) {
  let { messageType: a } = e,
    { message: i } = e,
    { messageTime: g } = e,
    { index: r } = e;
  return (
    (s.$$set = (c) => {
      "messageType" in c && t(0, (a = c.messageType)),
        "message" in c && t(1, (i = c.message)),
        "messageTime" in c && t(2, (g = c.messageTime)),
        "index" in c && t(3, (r = c.index));
    }),
    [a, i, g, r]
  );
}
class Ft extends Re {
  constructor(e) {
    super(),
      Oe(this, e, Pt, Nt, Be, {
        messageType: 0,
        message: 1,
        messageTime: 2,
        index: 3,
      });
  }
}
function et(s, e, t) {
  const a = s.slice();
  return (a[25] = e[t]), (a[27] = t), a;
}
function Vt(s) {
  let e;
  return {
    c() {
      e = we("“The No-Code AR Platform customized to align with your needs”");
    },
    l(t) {
      e = $e(
        t,
        "“The No-Code AR Platform customized to align with your needs”"
      );
    },
    m(t, a) {
      W(t, e, a);
    },
    d(t) {
      t && _(e);
    },
  };
}
function Gt(s) {
  let e;
  return {
    c() {
      e =
        we(`At ARTEKK, we redefine what's possible with Augmented Reality (AR).
            Explore immersive experiences, engage your audience, and unlock new
            dimensions of creativity with our cutting-edge AR solutions.`);
    },
    l(t) {
      e = $e(
        t,
        `At ARTEKK, we redefine what's possible with Augmented Reality (AR).
            Explore immersive experiences, engage your audience, and unlock new
            dimensions of creativity with our cutting-edge AR solutions.`
      );
    },
    m(t, a) {
      W(t, e, a);
    },
    d(t) {
      t && _(e);
    },
  };
}
function tt(s) {
  let e, t;
  return (
    (e = new Ft({
      props: {
        message: s[3][s[27]].message,
        messageTime:
          s[3][s[27]].messageTime ??
          new Intl.DateTimeFormat("en-US", { timeStyle: "short" }).format(
            Date.now()
          ),
        messageType: s[3][s[27]].messageType ?? "",
        index: s[27],
      },
    })),
    {
      c() {
        G(e.$$.fragment);
      },
      l(a) {
        L(e.$$.fragment, a);
      },
      m(a, i) {
        j(e, a, i), (t = !0);
      },
      p(a, i) {
        const g = {};
        i & 8 && (g.message = a[3][a[27]].message),
          i & 8 &&
            (g.messageTime =
              a[3][a[27]].messageTime ??
              new Intl.DateTimeFormat("en-US", { timeStyle: "short" }).format(
                Date.now()
              )),
          i & 8 && (g.messageType = a[3][a[27]].messageType ?? ""),
          e.$set(g);
      },
      i(a) {
        t || (O(e.$$.fragment, a), (t = !0));
      },
      o(a) {
        N(e.$$.fragment, a), (t = !1);
      },
      d(a) {
        H(e, a);
      },
    }
  );
}
function Lt(s) {
  let e,
    t,
    a = xe(Array(s[3].length)),
    i = [];
  for (let r = 0; r < a.length; r += 1) i[r] = tt(et(s, a, r));
  const g = (r) =>
    N(i[r], 1, 1, () => {
      i[r] = null;
    });
  return {
    c() {
      for (let r = 0; r < i.length; r += 1) i[r].c();
      e = Ze();
    },
    l(r) {
      for (let c = 0; c < i.length; c += 1) i[c].l(r);
      e = Ze();
    },
    m(r, c) {
      for (let f = 0; f < i.length; f += 1) i[f] && i[f].m(r, c);
      W(r, e, c), (t = !0);
    },
    p(r, c) {
      if (c & 8) {
        a = xe(Array(r[3].length));
        let f;
        for (f = 0; f < a.length; f += 1) {
          const l = et(r, a, f);
          i[f]
            ? (i[f].p(l, c), O(i[f], 1))
            : ((i[f] = tt(l)), i[f].c(), O(i[f], 1), i[f].m(e.parentNode, e));
        }
        for (vt(), f = a.length; f < i.length; f += 1) g(f);
        bt();
      }
    },
    i(r) {
      if (!t) {
        for (let c = 0; c < a.length; c += 1) O(i[c]);
        t = !0;
      }
    },
    o(r) {
      i = i.filter(Boolean);
      for (let c = 0; c < i.length; c += 1) N(i[c]);
      t = !1;
    },
    d(r) {
      r && _(e), _t(i, r);
    },
  };
}
function jt(s) {
  let e,
    t,
    a,
    i,
    g,
    r,
    c,
    f,
    l,
    m,
    C,
    y,
    J,
    P,
    F,
    V,
    k,
    $,
    E,
    v,
    u,
    q,
    I,
    K,
    le,
    X,
    M,
    B,
    U,
    b,
    S,
    R,
    Y,
    ye,
    z,
    ze,
    Ne,
    x,
    Qe,
    Pe,
    me,
    ie,
    Fe,
    de,
    oe,
    Ve,
    he,
    ce,
    Ge,
    pe,
    ue,
    Le,
    _e,
    je,
    ee,
    He,
    Ke,
    Se,
    qe,
    Je;
  function rt(d) {
    s[9](d);
  }
  function lt(d) {
    s[10](d);
  }
  function it(d) {
    s[11](d);
  }
  let De = {
    logo: "/images/Logo/Logo.svg",
    navOptions: [
      { name: "About", href: "/about", target: "" },
      { name: "Products", href: "/products", target: "" },
      { name: "Pricing", href: "/pricing", target: "" },
      { name: "Contact", href: "/contact", target: "" },
      { name: "FAQ", href: "/faq", target: "" },
    ],
  };
  s[1] !== void 0 && (De.isOpen = s[1]),
    s[6] !== void 0 && (De.isSignedIn = s[6]),
    s[5] !== void 0 && (De.userName = s[5]),
    (t = new $t({ props: De })),
    ge.push(() => Ie(t, "isOpen", rt)),
    ge.push(() => Ie(t, "isSignedIn", lt)),
    ge.push(() => Ie(t, "userName", it)),
    (u = new be({
      props: {
        type: "heading",
        $$slots: { default: [Vt] },
        $$scope: { ctx: s },
      },
    })),
    (K = new be({
      props: {
        type: "body",
        _color: "var(--primary-700)",
        $$slots: { default: [Gt] },
        $$scope: { ctx: s },
      },
    })),
    (M = new nt({
      props: { type: "primary", buttonLabel: "Get Started", onClick: s[12] },
    })),
    (ie = new Me({
      props: {
        direction: "left",
        heading: "Virtual Cosmetics Magic Awaits!",
        description: `Transform your look instantly with our virtual try-on.
        All the Girlies! It's time to Glam up with just a click!
       `,
        img: "./images/FeatureCard/Makeup.webp",
        isAnimated: s[2][0],
        onClick: s[16],
      },
    })),
    (oe = new Me({
      props: {
        direction: "right",
        heading: "Perfect Fit, Virtually Tried!",
        description:
          "Discover your perfect pair of Glasses instantly with our virtual technique. Style made simple!",
        img: "./images/FeatureCard/Glasses.webp",
        isAnimated: s[2][1],
        onClick: s[17],
      },
    })),
    (ce = new Me({
      props: {
        direction: "left",
        heading: "Jewellery",
        description:
          "Choosing the best jewellery for you was never so easy! Make your online shopping a one-click tap! Adorn yourself with digital elegance – 3D jewellery!",
        img: "./images/FeatureCard/jwellery.webp",
        isAnimated: s[2][2],
        onClick: s[18],
      },
    })),
    (ue = new Me({
      props: {
        direction: "right",
        heading: "Cars",
        description:
          "Drive into the virtual fast lane – 3D cars that put you in the driver's seat of innovation!",
        img: "./images/FeatureCard/cars.webp",
        isAnimated: s[2][3],
        onClick: s[19],
      },
    })),
    (_e = new yt({
      props: {
        i18n: {
          copyrightLabel: "Copyright © All rights reserved.",
          productLabel: "is a product of",
        },
        content: {
          appStoreLink: "/",
          googlePlayLink: "/",
          navigationOptions: [
            {
              name: "Pages",
              subOptions: [
                { name: "About", url: "/about" },
                { name: "Products", url: "/products" },
                { name: "Pricing", url: "/pricing" },
                { name: "FAQ", url: "/faq" },
              ],
            },
            {
              name: "Contact",
              subOptions: [
                {
                  name: "CybTEKK, Plot No. 10, Sector 13,Rajiv Gandhi IT Park, Chandigarh",
                  url: "https://maps.app.goo.gl/6PmTzFpYniaMRe3MA",
                },
                { name: "socials@cybtekk.com", url: "mailto:socials@cybtekk.com" },
                { name: "+919888688244", url: "tel:+919888688244" },
              ],
            },
            {
              name: "Policies",
              subOptions: [
                { name: "Privacy Policy", url: "/" },
                { name: "Terms of Use", url: "/" },
                { name: "Legal", url: "/" },
              ],
            },
          ],
        },
      },
    }));
  function ot(d) {
    s[21](d);
  }
  function ct(d) {
    s[22](d);
  }
  let Ue = {
    heading: "Start Talking",
    sendMessage: s[20],
    $$slots: { default: [Lt] },
    $$scope: { ctx: s },
  };
  return (
    s[0] !== void 0 && (Ue.value = s[0]),
    s[4] !== void 0 && (Ue.messageEl = s[4]),
    (ee = new Bt({ props: Ue })),
    ge.push(() => Ie(ee, "value", ot)),
    ge.push(() => Ie(ee, "messageEl", ct)),
    {
      c() {
        (e = h("main")),
          G(t.$$.fragment),
          (r = T()),
          (c = h("br")),
          (f = h("br")),
          (l = T()),
          (m = h("br")),
          (C = h("br")),
          (y = h("br")),
          (J = h("br")),
          (P = h("br")),
          (F = h("br")),
          (V = T()),
          (k = h("section")),
          ($ = h("section")),
          (E = h("div")),
          (v = h("h1")),
          G(u.$$.fragment),
          (q = T()),
          (I = h("p")),
          G(K.$$.fragment),
          (le = T()),
          (X = h("div")),
          G(M.$$.fragment),
          (B = T()),
          (U = h("br")),
          (b = T()),
          (S = h("div")),
          (R = h("img")),
          (ye = T()),
          (z = h("img")),
          (Ne = T()),
          (x = h("img")),
          (Pe = T()),
          (me = h("section")),
          G(ie.$$.fragment),
          (Fe = T()),
          (de = h("section")),
          G(oe.$$.fragment),
          (Ve = T()),
          (he = h("section")),
          G(ce.$$.fragment),
          (Ge = T()),
          (pe = h("section")),
          G(ue.$$.fragment),
          (Le = T()),
          G(_e.$$.fragment),
          (je = T()),
          G(ee.$$.fragment),
          this.h();
      },
      l(d) {
        e = p(d, "MAIN", { class: !0 });
        var w = D(e);
        L(t.$$.fragment, w),
          (r = A(w)),
          (c = p(w, "BR", {})),
          (f = p(w, "BR", {})),
          (l = A(w)),
          (m = p(w, "BR", {})),
          (C = p(w, "BR", {})),
          (y = p(w, "BR", {})),
          (J = p(w, "BR", {})),
          (P = p(w, "BR", {})),
          (F = p(w, "BR", {})),
          (V = A(w)),
          (k = p(w, "SECTION", { class: !0 }));
        var Q = D(k);
        $ = p(Q, "SECTION", { class: !0, "data-label": !0 });
        var se = D($);
        E = p(se, "DIV", { class: !0 });
        var ae = D(E);
        v = p(ae, "H1", { class: !0 });
        var Ee = D(v);
        L(u.$$.fragment, Ee),
          Ee.forEach(_),
          (q = A(ae)),
          (I = p(ae, "P", { class: !0 }));
        var Te = D(I);
        L(K.$$.fragment, Te),
          Te.forEach(_),
          (le = A(ae)),
          (X = p(ae, "DIV", { class: !0 }));
        var Ae = D(X);
        L(M.$$.fragment, Ae),
          Ae.forEach(_),
          ae.forEach(_),
          (B = A(se)),
          (U = p(se, "BR", {})),
          (b = A(se)),
          (S = p(se, "DIV", { class: !0 }));
        var ne = D(S);
        (R = p(ne, "IMG", {
          class: !0,
          height: !0,
          src: !0,
          alt: !0,
          tabindex: !0,
          role: !0,
        })),
          (ye = A(ne)),
          (z = p(ne, "IMG", { class: !0, height: !0, src: !0, alt: !0 })),
          (Ne = A(ne)),
          (x = p(ne, "IMG", { class: !0, height: !0, src: !0, alt: !0 })),
          ne.forEach(_),
          se.forEach(_),
          (Pe = A(Q)),
          (me = p(Q, "SECTION", { class: !0, "data-label": !0 }));
        var ve = D(me);
        L(ie.$$.fragment, ve),
          ve.forEach(_),
          (Fe = A(Q)),
          (de = p(Q, "SECTION", { class: !0, "data-label": !0 }));
        var We = D(de);
        L(oe.$$.fragment, We),
          We.forEach(_),
          (Ve = A(Q)),
          (he = p(Q, "SECTION", { class: !0, "data-label": !0 }));
        var Ye = D(he);
        L(ce.$$.fragment, Ye),
          Ye.forEach(_),
          (Ge = A(Q)),
          (pe = p(Q, "SECTION", { class: !0, "data-label": !0 }));
        var Xe = D(pe);
        L(ue.$$.fragment, Xe),
          Xe.forEach(_),
          Q.forEach(_),
          (Le = A(w)),
          L(_e.$$.fragment, w),
          (je = A(w)),
          L(ee.$$.fragment, w),
          w.forEach(_),
          this.h();
      },
      h() {
        n(v, "class", "heading svelte-co8eew"),
          n(I, "class", "description svelte-co8eew"),
          n(X, "class", "btn svelte-co8eew"),
          n(E, "class", "content svelte-co8eew"),
          n(R, "class", "banner svelte-co8eew"),
          n(R, "height", "756px"),
          te(R.src, (Y = "/images/Home/BannerOne.webp")) || n(R, "src", Y),
          n(R, "alt", "Banner"),
          n(R, "tabindex", "0"),
          n(R, "role", "button"),
          n(z, "class", "banner svelte-co8eew"),
          n(z, "height", "756px"),
          te(z.src, (ze = "/images/Home/BannerTwo.webp")) || n(z, "src", ze),
          n(z, "alt", "Banner"),
          n(x, "class", "banner svelte-co8eew"),
          n(x, "height", "756px"),
          te(x.src, (Qe = "/images/Home/BannerThree.webp")) || n(x, "src", Qe),
          n(x, "alt", "Footwear AR Banner"),
          n(S, "class", "section-image svelte-co8eew"),
          n($, "class", "about svelte-co8eew"),
          n($, "data-label", "default"),
          n(me, "class", "feature-card-section svelte-co8eew"),
          n(me, "data-label", "makeup"),
          n(de, "class", "feature-card-section svelte-co8eew"),
          n(de, "data-label", "glasses"),
          n(he, "class", "feature-card-section svelte-co8eew"),
          n(he, "data-label", "jewellery"),
          n(pe, "class", "feature-card-section svelte-co8eew"),
          n(pe, "data-label", "cars"),
          n(k, "class", "container svelte-co8eew"),
          n(e, "class", "svelte-co8eew");
      },
      m(d, w) {
        W(d, e, w),
          j(t, e, null),
          o(e, r),
          o(e, c),
          o(e, f),
          o(e, l),
          o(e, m),
          o(e, C),
          o(e, y),
          o(e, J),
          o(e, P),
          o(e, F),
          o(e, V),
          o(e, k),
          o(k, $),
          o($, E),
          o(E, v),
          j(u, v, null),
          o(E, q),
          o(E, I),
          j(K, I, null),
          o(E, le),
          o(E, X),
          j(M, X, null),
          o($, B),
          o($, U),
          o($, b),
          o($, S),
          o(S, R),
          o(S, ye),
          o(S, z),
          o(S, Ne),
          o(S, x),
          o(k, Pe),
          o(k, me),
          j(ie, me, null),
          o(k, Fe),
          o(k, de),
          j(oe, de, null),
          o(k, Ve),
          o(k, he),
          j(ce, he, null),
          o(k, Ge),
          o(k, pe),
          j(ue, pe, null),
          o(e, Le),
          j(_e, e, null),
          o(e, je),
          j(ee, e, null),
          (Se = !0),
          qe ||
            ((Je = [
              re(R, "click", s[13]),
              re(R, "keydown", Ht),
              re(z, "click", s[14]),
              re(z, "keydown", Kt),
              re(x, "click", s[15]),
              re(x, "keydown", qt),
            ]),
            (qe = !0));
      },
      p(d, [w]) {
        const Q = {};
        !a && w & 2 && ((a = !0), (Q.isOpen = d[1]), ke(() => (a = !1))),
          !i && w & 64 && ((i = !0), (Q.isSignedIn = d[6]), ke(() => (i = !1))),
          !g && w & 32 && ((g = !0), (Q.userName = d[5]), ke(() => (g = !1))),
          t.$set(Q);
        const se = {};
        w & 268435456 && (se.$$scope = { dirty: w, ctx: d }), u.$set(se);
        const ae = {};
        w & 268435456 && (ae.$$scope = { dirty: w, ctx: d }), K.$set(ae);
        const Ee = {};
        w & 4 && (Ee.isAnimated = d[2][0]), ie.$set(Ee);
        const Te = {};
        w & 4 && (Te.isAnimated = d[2][1]), oe.$set(Te);
        const Ae = {};
        w & 4 && (Ae.isAnimated = d[2][2]), ce.$set(Ae);
        const ne = {};
        w & 4 && (ne.isAnimated = d[2][3]), ue.$set(ne);
        const ve = {};
        w & 268435464 && (ve.$$scope = { dirty: w, ctx: d }),
          !He && w & 1 && ((He = !0), (ve.value = d[0]), ke(() => (He = !1))),
          !Ke &&
            w & 16 &&
            ((Ke = !0), (ve.messageEl = d[4]), ke(() => (Ke = !1))),
          ee.$set(ve);
      },
      i(d) {
        Se ||
          (O(t.$$.fragment, d),
          O(u.$$.fragment, d),
          O(K.$$.fragment, d),
          O(M.$$.fragment, d),
          O(ie.$$.fragment, d),
          O(oe.$$.fragment, d),
          O(ce.$$.fragment, d),
          O(ue.$$.fragment, d),
          O(_e.$$.fragment, d),
          O(ee.$$.fragment, d),
          (Se = !0));
      },
      o(d) {
        N(t.$$.fragment, d),
          N(u.$$.fragment, d),
          N(K.$$.fragment, d),
          N(M.$$.fragment, d),
          N(ie.$$.fragment, d),
          N(oe.$$.fragment, d),
          N(ce.$$.fragment, d),
          N(ue.$$.fragment, d),
          N(_e.$$.fragment, d),
          N(ee.$$.fragment, d),
          (Se = !1);
      },
      d(d) {
        d && _(e),
          H(t),
          H(u),
          H(K),
          H(M),
          H(ie),
          H(oe),
          H(ce),
          H(ue),
          H(_e),
          H(ee),
          (qe = !1),
          st(Je);
      },
    }
  );
}
const Ht = () => null,
  Kt = () => null,
  qt = () => null;
function Ut(s, e, t) {
  let a,
    i,
    g,
    r,
    c = !1,
    f = [!1, !1, !1, !1],
    l = [],
    m = [],
    C;
  const y = async () => {
      m.push({
        message: r,
        messageType: "user",
        messageTime: new Intl.DateTimeFormat("en-US", {
          timeStyle: "short",
        }).format(Date.now()),
      }),
        t(3, (l = m));
      const B = await It(r);
      m.push({
        message: B.response,
        messageType: "ai",
        messageTime: new Intl.DateTimeFormat("en-US", {
          timeStyle: "short",
        }).format(Date.now()),
      }),
        t(3, (l = m)),
        setTimeout(() => {
          const U = C.lastElementChild;
          U &&
            U.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
        }, 800);
    },
    J = (B) => {
      B.forEach((U) => {
        U.isIntersecting && t(8, (g = U.target.getAttribute("data-label")));
      });
    };
  at(() => {
    const B = new IntersectionObserver(J, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }),
      U = document.querySelectorAll("[data-label]");
    return (
      U.forEach((b) => {
        B.observe(b);
      }),
      m.push({
        message: "Hi am your AI assistant for ARTEKK, drop me any questions!",
        messageType: "ai",
        messageTime: new Intl.DateTimeFormat("en-US", {
          timeStyle: "short",
        }).format(Date.now()),
      }),
      t(3, (l = m)),
      () => {
        U.forEach((b) => {
          B.unobserve(b);
        });
      }
    );
  });
  function P(B) {
    (c = B), t(1, c);
  }
  function F(B) {
    (a = B), t(6, a);
  }
  function V(B) {
    (i = B), t(5, i);
  }
  const k = () => fe("/products"),
    $ = () => fe("/gettingstarted?load=clothing"),
    E = () => fe("/view?load=furniture"),
    v = () => fe("/gettingstarted?load=footwear"),
    u = () => fe("/view?load=makeup"),
    q = () => fe("/view?load=glasses"),
    I = () => fe("/view?load=jewellery"),
    K = () => fe("/view?load=cars"),
    le = () => y();
  function X(B) {
    (r = B), t(0, r);
  }
  function M(B) {
    (C = B), t(4, C);
  }
  return (
    (s.$$.update = () => {
      if (s.$$.dirty & 256)
        switch (g) {
          case "makeup":
            t(2, (f = [!0, !1, !1, !1]));
            break;
          case "glasses":
            t(2, (f = [!1, !0, !1, !1]));
            break;
          case "jewellery":
            t(2, (f = [!1, !1, !0, !1]));
            break;
          case "cars":
            t(2, (f = [!1, !1, !1, !0]));
            break;
          default:
            t(2, (f = [!1, !1, !1, !1]));
        }
    }),
    t(6, (a = !0)),
    t(5, (i = "Dustin Porier")),
    t(8, (g = "")),
    [r, c, f, l, C, i, a, y, g, P, F, V, k, $, E, v, u, q, I, K, le, X, M]
  );
}
class ss extends Re {
  constructor(e) {
    super(), Oe(this, e, Ut, jt, Be, {});
  }
}
export { ss as component };
