import { a as Vr } from "./chunk-OVSNZ23Z.mjs";
import { a as Tr, b as Tt, c as ee } from "./chunk-TW22ZSZS.mjs";
import "./chunk-YWNBAALN.mjs";
import {
  $ as D,
  A as Se,
  Aa as lr,
  B as W,
  D as kt,
  E as Ze,
  F as ir,
  G as Kt,
  H as St,
  P as Or,
  R as Nt,
  S as Ne,
  U as t,
  X as zr,
  Y as sr,
  Z as Rr,
  _ as jt,
  aa as q,
  b as Ge,
  c,
  ca as Er,
  d as Nr,
  da as Ot,
  ea as zt,
  f as yt,
  g as Qe,
  ga as me,
  i as Pe,
  j as bt,
  ja as b,
  k as V,
  l as jr,
  m as vt,
  ma as rt,
  n as or,
  o as Ke,
  p as _,
  q as Q,
  qa as Rt,
  sa as Et,
  t as e,
  u as d,
  ua as l,
  v as et,
  va as p,
  x as Ct,
  xa as It,
  y as o,
  ya as f,
  z as Je,
  za as Ir,
} from "./chunk-TCG6B7SU.mjs";
import { b as O, c as N } from "./chunk-RIUMFBNJ.mjs";
var Vt = (r, i, n) => Math.min(Math.max(n, r), i);
var tt = (r, i, n) => (i - r === 0 ? 1 : (n - r) / (i - r));
var At = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  da = {
    ...At,
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    color: "#85F",
    border: "1px dashed #85F",
    flexDirection: "column",
  },
  pa = {
    onClick: { type: t.EventHandler },
    onMouseEnter: { type: t.EventHandler },
    onMouseLeave: { type: t.EventHandler },
  },
  ua = {
    type: t.Number,
    title: "Font Size",
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0,
  },
  ha = {
    font: {
      type: t.Boolean,
      title: "Font",
      defaultValue: !1,
      disabledTitle: "Default",
      enabledTitle: "Custom",
    },
    fontFamily: {
      type: t.String,
      title: "Family",
      placeholder: "Inter",
      hidden: ({ font: r }) => !r,
    },
    fontWeight: {
      type: t.Enum,
      title: "Weight",
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      optionTitles: [
        "Thin",
        "Extra-light",
        "Light",
        "Regular",
        "Medium",
        "Semi-bold",
        "Bold",
        "Extra-bold",
        "Black",
      ],
      hidden: ({ font: r }) => !r,
    },
  };
var wa = {
  borderRadius: {
    title: "Radius",
    type: t.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
  },
};
function nt(r) {
  let {
    padding: i,
    paddingPerSide: n,
    paddingTop: s,
    paddingRight: x,
    paddingBottom: u,
    paddingLeft: g,
  } = r;
  return Ke(() => (n ? `${s}px ${x}px ${u}px ${g}px` : i), [i, n, s, x, u, g]);
}
var ot = {
  padding: {
    type: t.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
  },
};
function ya([r, i]) {
  return r + (100 - r) * (i / 100) * 0.5;
}
function ba() {
  let [r, i] = Q(!1);
  return (
    or(() => {
      i(N.matchMedia("(pointer:fine)").matches);
    }, []),
    r
  );
}
function Ar(r, i, { edgeOpacity: n, moreItems: s, buttonRef: x }, u) {
  s.current && r === i
    ? ((s.current = !1), ir(n, 1, u), x.current.setAttribute("disabled", ""))
    : !s.current &&
      r !== i &&
      ((s.current = !0), ir(n, 0, u), x.current.removeAttribute("disabled"));
}
function _t(r, i) {
  let n = _(r),
    s = Se(n.current ? 0 : 1),
    x = W(s, [0, 1], [i || 0, 1]),
    u = W(s, (v) => 1 - v),
    g = _(null),
    H = W(u, (v) => (v > 0.2 ? "auto" : "none")),
    C = W(H, (v) => (v === "auto" ? "pointer" : "default")),
    a = { ...Wt, opacity: u, pointerEvents: H, cursor: C };
  return {
    moreItems: n,
    fadeOpacity: x,
    edgeOpacity: s,
    buttonStyle: a,
    buttonRef: g,
  };
}
function va({ element: r }) {
  r.setAttribute("aria-hidden", !1);
}
function Ca(r, i, n, s, x, u, g) {
  V(() => {
    if (!r.current) return;
    let C = Tt(
        (v) => {
          (n.current = v[i]),
            v[i].current === x.current && (x.current = void 0),
            s(v[i].current),
            u();
        },
        { container: r.current, axis: i }
      ),
      a = Tr(r.current, () => {
        g(), u();
      });
    return () => {
      C(), a();
    };
  }, [u, g]);
}
function _e({
  slots: r,
  gap: i,
  axis: n,
  align: s,
  sizingObject: x,
  fadeObject: u,
  arrowObject: g,
  snapObject: H,
  progressObject: C,
  ariaLabel: a,
  borderRadius: v,
  effectsObject: A,
  ...ne
}) {
  let J = r.filter(Boolean),
    K = Ge.count(J),
    P = Ne.current() === Ne.canvas,
    re = nt(ne),
    X = n ? "x" : "y",
    {
      fadeContent: I,
      fadeWidth: j,
      fadeInset: R,
      fadeTransition: M,
      fadeAlpha: B,
    } = u,
    { snap: T, snapEdge: je, fluid: Oe } = H,
    {
      widthType: Ye,
      widthInset: He,
      widthColumns: he,
      heightType: ze,
      heightInset: Me,
      heightRows: oe,
    } = x,
    {
      showScrollbar: ge,
      showProgressDots: cr,
      dotSize: le,
      dotsInset: $e,
      dotsRadius: mr,
      dotsPadding: Hr,
      dotsGap: Mr,
      dotsFill: be,
      dotsBackground: dr,
      dotsActiveOpacity: U,
      dotsOpacity: Re,
      dotsBlur: pr,
    } = C,
    {
      showMouseControls: er,
      arrowSize: de,
      arrowRadius: ur,
      arrowFill: hr,
      leftArrow: Fr,
      rightArrow: gr,
      arrowPadding: xr,
    } = g,
    ie = _(void 0),
    Ee = _(void 0),
    Fe = Se(0),
    Br = (m) => {
      Fe.set(Ee.current !== void 0 ? Ee.current : m);
    },
    mt = ba(),
    Ie = _t(!1, B),
    Te = _t(!0, B),
    Ve = Se(R * 0.5),
    Xr = W(Ve, (m) => 100 - m),
    se = Se(j),
    F = W([Ve, se], ya),
    ve = W(F, (m) => 100 - m),
    k = Se(n ? "right" : "bottom"),
    Ce = W(
      [k, Ie.fadeOpacity, Ve, F, Te.fadeOpacity, Xr, ve],
      (m) =>
        `linear-gradient(to ${m[0]}, rgb(0, 0, 0, ${m[1]}) ${m[2]}%, rgb(0, 0, 0, 1) ${m[3]}%, rgba(0, 0, 0, 1) ${m[6]}%, rgb(0, 0, 0, ${m[4]}) ${m[5]}%)`
    ),
    Z = _(null),
    [S, rr] = Q(P ? 4 : 1),
    w = { scrollSnapAlign: je, flexShrink: 0 },
    xe = {};
  s === "stretch" &&
    (n
      ? ((xe.height = "100%"), (w.height = "auto"))
      : ((xe.width = "100%"), (w.width = "auto"))),
    Oe || (w.scrollSnapStop = "always"),
    Ye === "stretch"
      ? ((w.width = `calc(100% - ${He || 0}px)`), (xe.width = "100%"))
      : Ye === "columns" &&
        ((w.width = `calc(${100 / he}% - ${i}px + ${i / he}px)`),
        (xe.width = "100%")),
    ze === "stretch"
      ? ((w.height = `calc(100% - ${Me || 0}px)`), (xe.height = "100%"))
      : ze === "rows" &&
        ((w.height = `calc(${100 / oe}% - ${i}px + ${i / oe}px)`),
        (xe.height = "100%"));
  let wr = P ? "hidden" : "auto",
    yr = { ...Ra, padding: re },
    Lr = {
      ...Ea,
      gap: i,
      alignItems: s,
      flexDirection: n ? "row" : "column",
      overflowX: n ? wr : "hidden",
      overflowY: n ? "hidden" : wr,
      scrollSnapType: T ? `${X} mandatory` : void 0,
      WebkitOverflowScrolling: "touch",
      WebkitMaskImage: I ? Ce : void 0,
      MozMaskImage: I ? Ce : void 0,
      maskImage: I ? Ce : void 0,
      borderRadius: v,
    },
    tr = { ["aria-roledescription"]: "carousel" };
  a && (tr["aria-title"] = a);
  let ar = {};
  if (
    (s === "stretch" &&
      ((ar["aria-role"] = "group"), (ar["aria-roledescription"] = "slide")),
    !P)
  ) {
    let m = _([]);
    Ca(
      Z,
      X,
      ie,
      Br,
      Ee,
      Pe(() => {
        if (!ie.current) return;
        let {
            targetLength: y,
            containerLength: L,
            scrollLength: fe,
          } = ie.current,
          G = Fe.get();
        if (!y && !L) return;
        if (y > L) {
          Ar(G, 0, Ie, M), Ar(G, fe, Te, M);
          for (let $ = 0; $ < m.current.length; $++) {
            let { element: pe, start: Le, end: we } = m.current[$];
            we < G || Le > G + L
              ? pe.setAttribute("aria-hidden", !0)
              : pe.setAttribute("aria-hidden", !1);
          }
        } else Ar(0, 0, Ie, M), Ar(1, 1, Te, M), m.current.forEach(va);
        let z = Math.ceil(y / L);
        isNaN(z) || (z / K > 0.65 && (z = K), z !== S && rr(z));
      }, [S]),
      Pe(() => {
        Z.current &&
          (m.current = Array.from(Z.current.children).map((y) =>
            n
              ? {
                  element: y,
                  start: y.offsetLeft,
                  end: y.offsetLeft + y.offsetWidth,
                }
              : {
                  element: y,
                  start: y.offsetTop,
                  end: y.offsetTop + y.offsetHeight,
                }
          ));
      }, [])
    );
  }
  P &&
    (V(() => {
      se.set(j);
    }, [j]),
    V(() => {
      Ve.set(R * 0.5);
    }, [R]),
    V(() => {
      k.set(n ? "right" : "bottom");
    }, [n]));
  let Dr = (m, y) => {
      if (!ie.current) return;
      let { current: L } = ie.current,
        { children: fe } = Z.current,
        G,
        z = m === 1 ? 0 : fe.length - 1;
      for (; G === void 0; ) {
        let $ = fe[z],
          pe = n ? $.offsetLeft : $.offsetTop,
          Le = n ? $.offsetWidth : $.offsetHeight,
          we = pe + Le,
          vr = 0.05;
        m === 1
          ? tt(pe, we, y) < 1 - vr
            ? (G = pe)
            : z === fe.length - 1 && (G = we)
          : m === -1 && (tt(pe, we, y) > vr ? (G = we) : z === 0 && (G = pe)),
          (z += m);
      }
      return G;
    },
    ke = kt(),
    br = (m) => {
      Ee.current = m;
      let y = n ? { left: m } : { top: m };
      Z.current.scrollTo({ ...y, behavior: ke ? "auto" : "smooth" });
    },
    Be = (m) => {
      if (!ie.current) return;
      let { scrollLength: y } = ie.current;
      br(m * (y / (S - 1)));
    },
    nr = (m) => () => {
      if (!ie.current) return;
      let { containerLength: y, scrollLength: L } = ie.current,
        fe = Fe.get(),
        G = L / S,
        z = Vt(0, S - 1, Math.floor(fe / G));
      Be(z + m);
    };
  if (K === 0) return e(Ka, {});
  let Xe = [],
    Ae = {};
  if (S > 1 && cr && !ge) {
    for (let m = 0; m < S; m++) {
      let y = (P && !m) || !1;
      Xe.push(
        e(ka, {
          dotStyle: { ...Va, width: le, height: le, backgroundColor: be },
          buttonStyle: Wt,
          isSelected: y,
          selectedOpacity: U,
          opacity: Re,
          onClick: () => Be(m),
          currentScroll: Fe,
          scrollInfo: ie,
          total: S,
          index: m,
          gap: Mr,
          padding: Hr,
          axis: n,
        })
      );
    }
    pr &&
      (Ae.backdropFilter =
        Ae.WebkitBackdropFilter =
        Ae.MozBackdropFilter =
          `blur(${pr}px)`);
  }
  return d("section", {
    style: yr,
    ...tr,
    children: [
      e(o.ul, {
        ref: Z,
        style: Lr,
        className: "framer--carousel",
        "data-show-scrollbar": ge,
        "aria-atomic": "false",
        "aria-live": "polite",
        onWheel: () => (Ee.current = void 0),
        children: Ge.map(J, (m, y) => {
          var L;
          return e("li", {
            style: w,
            ...ar,
            "aria-label": `${y + 1} of ${K}`,
            children: Nr(m, {
              ...m.props,
              style: {
                ...((L = m.props) === null || L === void 0 ? void 0 : L.style),
                ...xe,
              },
            }),
          });
        }),
      }),
      d("fieldset", {
        style: {
          ...Ia,
          padding: xr,
          display: "flex",
          flexDirection: n ? "row" : "column",
        },
        "aria-label": "Carousel pagination controls",
        className: "framer--carousel-controls",
        "data-show-mouse-controls": er,
        children: [
          e(o.button, {
            ref: Ie.buttonRef,
            type: "button",
            style: {
              ...Ie.buttonStyle,
              backgroundColor: hr,
              width: de,
              height: de,
              borderRadius: ur,
              rotate: n ? 0 : 90,
              display: er ? "block" : "none",
            },
            onClick: nr(-1),
            "aria-label": "Previous",
            whileTap: { scale: 0.9 },
            transition: { duration: 0.05 },
            children: e("img", {
              alt: "",
              width: de,
              height: de,
              src:
                Fr ||
                "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
            }),
          }),
          e(o.button, {
            ref: Te.buttonRef,
            type: "button",
            style: {
              ...Te.buttonStyle,
              backgroundColor: hr,
              width: de,
              height: de,
              borderRadius: ur,
              rotate: n ? 0 : 90,
              display: er ? "block" : "none",
            },
            onClick: nr(1),
            "aria-label": "Next",
            whileTap: { scale: 0.9 },
            transition: { duration: 0.05 },
            children: e("img", {
              alt: "",
              width: de,
              height: de,
              src:
                gr ||
                "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
            }),
          }),
          Xe.length > 1
            ? e("div", {
                style: {
                  ...Ta,
                  left: n ? "50%" : $e,
                  top: n ? "unset" : "50%",
                  transform: n ? "translateX(-50%)" : "translateY(-50%)",
                  flexDirection: n ? "row" : "column",
                  bottom: n ? $e : "unset",
                  borderRadius: mr,
                  backgroundColor: dr,
                  ...Ae,
                },
                children: Xe,
              })
            : null,
        ],
      }),
      e(Sa, {}),
    ],
  });
}
_e.defaultProps = {
  gap: 10,
  padding: 10,
  progressObject: { showScrollbar: !1, showProgressDots: !1 },
  sizingObject: {
    widthType: "auto",
    widthOffset: 0,
    widthColumns: 2,
    heightType: "auto",
    heightOffset: 0,
    heightRows: 2,
  },
  borderRadius: 0,
};
zr(_e, {
  slots: {
    type: t.Array,
    title: "Children",
    control: { type: t.ComponentInstance },
  },
  axis: {
    type: t.Enum,
    title: "Direction",
    options: [!0, !1],
    optionIcons: ["direction-horizontal", "direction-vertical"],
    displaySegmentedControl: !0,
  },
  align: {
    type: t.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      axis: {
        true: ["align-top", "align-middle", "align-bottom"],
        false: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  gap: { type: t.Number, title: "Gap" },
  ...ot,
  sizingObject: {
    type: t.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: t.Enum,
        title: "Width",
        options: ["auto", "stretch", "columns"],
        optionTitles: ["Auto", "Stretch", "Columns"],
        defaultValue: "auto",
      },
      widthInset: {
        type: t.Number,
        title: "Inset",
        min: 0,
        max: 500,
        defaultValue: 0,
        hidden: (r) => r.widthType !== "stretch",
      },
      widthColumns: {
        type: t.Number,
        title: "Columns",
        min: 1,
        max: 10,
        defaultValue: 2,
        displayStepper: !0,
        hidden: (r) => r.widthType !== "columns",
      },
      heightType: {
        type: t.Enum,
        title: "Height",
        options: ["auto", "stretch", "rows"],
        optionTitles: ["Auto", "Stretch", "Rows"],
        defaultValue: "auto",
      },
      heightInset: {
        type: t.Number,
        title: "Inset",
        min: 0,
        max: 500,
        defaultValue: 0,
        hidden: (r) => r.heightType !== "stretch",
      },
      heightRows: {
        type: t.Number,
        title: "Rows",
        min: 1,
        max: 10,
        defaultValue: 2,
        displayStepper: !0,
        hidden: (r) => r.heightType !== "rows",
      },
    },
  },
  snapObject: {
    type: t.Object,
    title: "Snapping",
    controls: {
      snap: { type: t.Boolean, title: "Enable" },
      snapEdge: {
        type: t.Enum,
        title: "Edge",
        options: ["start", "center", "end"],
        optionTitles: ["Left", "Center", "Right"],
        defaultValue: "center",
        hidden: (r) => !r.snap,
      },
      fluid: {
        type: t.Boolean,
        title: "Fluid",
        defaultValue: !1,
        hidden: (r) => !r.snap,
      },
    },
  },
  fadeObject: {
    type: t.Object,
    title: "Fading",
    controls: {
      fadeContent: { type: t.Boolean, title: "Enable", defaultValue: !1 },
      fadeWidth: {
        type: t.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden: (r) => !r.fadeContent,
      },
      fadeInset: {
        type: t.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden: (r) => !r.fadeContent,
      },
      fadeAlpha: {
        type: t.Number,
        title: "Opacity",
        hidden: (r) => !r.fadeContent,
        min: 0,
        max: 1,
        step: 0.05,
        defaultValue: 0,
      },
      fadeTransition: {
        type: t.Transition,
        title: "Transition",
        hidden: (r) => !r.fadeContent,
      },
    },
  },
  progressObject: {
    type: t.Object,
    title: "Progress",
    controls: {
      showScrollbar: { type: t.Boolean, title: "Scroll Bar", defaultValue: !1 },
      showProgressDots: {
        type: t.Boolean,
        title: "Dots",
        defaultValue: !1,
        hidden: (r) => r.showScrollbar,
      },
      dotSize: {
        type: t.Number,
        title: "Size",
        min: 1,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsInset: {
        type: t.Number,
        title: "Inset",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsGap: {
        type: t.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsPadding: {
        type: t.Number,
        title: "Padding",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsFill: {
        type: t.Color,
        title: "Fill",
        defaultValue: "#fff",
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsBackground: {
        type: t.Color,
        title: "Backdrop",
        defaultValue: "rgba(0,0,0,0.2)",
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsRadius: {
        type: t.Number,
        title: "Radius",
        min: 0,
        max: 200,
        defaultValue: 50,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsOpacity: {
        type: t.Number,
        title: "Opacity",
        min: 0,
        max: 1,
        defaultValue: 0.5,
        step: 0.1,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsActiveOpacity: {
        type: t.Number,
        title: "Current",
        min: 0,
        max: 1,
        defaultValue: 1,
        step: 0.1,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsBlur: {
        type: t.Number,
        title: "Blur",
        min: 0,
        max: 50,
        defaultValue: 4,
        step: 1,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
    },
  },
  arrowObject: {
    type: t.Object,
    title: "Arrows",
    controls: {
      showMouseControls: { type: t.Boolean, title: "Show", defaultValue: !0 },
      arrowFill: {
        type: t.Color,
        title: "Fill",
        defaultValue: "rgba(0,0,0,0.2)",
        hidden: (r) => !r.showMouseControls,
      },
      leftArrow: {
        type: t.Image,
        title: "Previous",
        hidden: (r) => !r.showMouseControls,
      },
      rightArrow: {
        type: t.Image,
        title: "Next",
        hidden: (r) => !r.showMouseControls,
      },
      arrowSize: {
        type: t.Number,
        title: "Size",
        min: 0,
        max: 200,
        displayStepper: !0,
        defaultValue: 40,
        hidden: (r) => !r.showMouseControls,
      },
      arrowRadius: {
        type: t.Number,
        title: "Radius",
        min: 0,
        max: 500,
        defaultValue: 40,
        hidden: (r) => !r.showMouseControls,
      },
      arrowPadding: {
        type: t.Number,
        title: "Inset",
        min: 0,
        max: 100,
        defaultValue: 20,
        displayStepper: !0,
        hidden: (r) => !r.showMouseControls,
      },
    },
  },
  ariaLabel: { type: t.String, title: "Aria Label", placeholder: "Movies..." },
  borderRadius: {
    type: t.Number,
    title: "Radius",
    min: 0,
    max: 500,
    displayStepper: !0,
    defaultValue: 0,
  },
});
function ka({
  currentScroll: r,
  scrollInfo: i,
  isSelected: n,
  selectedOpacity: s,
  opacity: x,
  total: u,
  index: g,
  dotStyle: H,
  buttonStyle: C,
  gap: a,
  padding: v,
  axis: A,
  ...ne
}) {
  let J = W(r, (j) => {
      var R, M;
      if (!(!((R = i.current) === null || R === void 0) && R.scrollLength))
        return g === 0 ? s : x;
      let B =
          ((M = i.current) === null || M === void 0 ? void 0 : M.scrollLength) /
          u,
        T = B * g,
        je = T + B;
      return j >= T && (g < u - 1 ? j < je : g === u - 1) ? s : x;
    }),
    K = a / 2,
    P = !A && g > 0 ? K : v,
    re = !A && g !== u - 1 ? K : v,
    X = A && g !== u - 1 ? K : v,
    I = A && g > 0 ? K : v;
  return e("button", {
    "aria-label": `Scroll to page ${g + 1}`,
    type: "button",
    ...ne,
    style: { ...C, padding: `${P}px ${X}px ${re}px ${I}px` },
    children: e(o.div, { style: { ...H, opacity: J } }),
  });
}
function Ka() {
  return d("section", {
    style: Na,
    children: [
      e("div", { style: ja, children: "\u2728" }),
      e("p", { style: Oa, children: "Connect to Content" }),
      e("p", {
        style: za,
        children: "Add layers or components to swipe between.",
      }),
    ],
  });
}
function Sa() {
  return e("div", {
    dangerouslySetInnerHTML: {
      __html: `<style>@media (pointer: fine) {
                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar {
                    display: none;
                    -webkit-appearance: none;
                    width: 0;
                    height: 0;
                }

                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar-thumb {
                    display: none;
                }

                .framer--carousel[data-show-scrollbar="false"] {
                    scrollbar-width: none;
                    scrollbar-height: none;
                }
            }</style>`,
    },
  });
}
var Na = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  ja = { fontSize: 32, marginBottom: 10 },
  Oa = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  za = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 130,
    lineHeight: 1.5,
    textAlign: "center",
  };
var Ra = {
    display: "flex",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  Ea = {
    padding: 0,
    margin: 0,
    listStyle: "none",
    position: "relative",
    display: "flex",
    flex: "1 1 100%",
    width: "100%",
    height: "100%",
  },
  Wt = {
    border: "none",
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    background: "transparent",
    cursor: "pointer",
    margin: 0,
    padding: 0,
  },
  Ia = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
    border: 0,
    padding: 0,
    margin: 0,
  },
  Ta = {
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    position: "absolute",
    pointerEvents: "auto",
  },
  Va = {
    borderRadius: "50%",
    background: "white",
    cursor: "pointer",
    border: "none",
    placeContent: "center",
    placeItems: "center",
    padding: 0,
  };
var Pr = () => typeof document == "object";
function Aa() {
  if (Pr()) {
    if (typeof document.hidden < "u") return "visibilitychange";
    if (typeof document.msHidden < "u") return "msvisibilitychange";
    if (typeof document.webkitHidden < "u") return "webkitvisibilitychange";
  }
}
function Pa() {
  if (Pr()) {
    if (typeof document.hidden < "u") return "hidden";
    if (typeof document.msHidden < "u") return "msHidden";
    if (typeof document.webkitHidden < "u") return "webkitHidden";
  }
}
function Yt() {
  if (Pr()) return !document[Pa()];
}
function Ht() {
  if (!Pr()) return;
  let [r, i] = Q(Yt()),
    n = () => i(Yt());
  return (
    V(() => {
      let s = Aa();
      return (
        document.addEventListener(s, n, !1),
        () => {
          document.removeEventListener(s, n);
        }
      );
    }),
    r
  );
}
var it = 0.001;
function Y(r) {
  let {
      slots: i,
      startFrom: n,
      direction: s,
      effectsOptions: x,
      autoPlayControl: u,
      dragControl: g,
      alignment: H,
      gap: C,
      padding: a,
      paddingPerSide: v,
      paddingTop: A,
      paddingRight: ne,
      paddingBottom: J,
      paddingLeft: K,
      itemAmount: P,
      fadeOptions: re,
      intervalControl: X,
      transitionControl: I,
      arrowOptions: j,
      borderRadius: R,
      progressOptions: M,
      style: B,
    } = r,
    {
      effectsOpacity: T,
      effectsScale: je,
      effectsRotate: Oe,
      effectsPerspective: Ye,
      effectsHover: He,
    } = x,
    {
      fadeContent: he,
      overflow: ze,
      fadeWidth: Me,
      fadeInset: oe,
      fadeAlpha: ge,
    } = re,
    {
      showMouseControls: cr,
      arrowSize: le,
      arrowRadius: $e,
      arrowFill: mr,
      leftArrow: Hr,
      rightArrow: Mr,
      arrowShouldSpace: be = !0,
      arrowShouldFadeIn: dr = !1,
      arrowPosition: U,
      arrowPadding: Re,
      arrowGap: pr,
      arrowPaddingTop: er,
      arrowPaddingRight: de,
      arrowPaddingBottom: ur,
      arrowPaddingLeft: hr,
    } = j,
    {
      showProgressDots: Fr,
      dotSize: gr,
      dotsInset: xr,
      dotsRadius: ie,
      dotsPadding: Ee,
      dotsGap: Fe,
      dotsFill: Br,
      dotsBackground: mt,
      dotsActiveOpacity: Ie,
      dotsOpacity: Te,
      dotsBlur: Ve,
    } = M,
    Xr = v ? `${A}px ${ne}px ${J}px ${K}px` : `${a}px`,
    se = Ne.current() === Ne.canvas,
    F = i.filter(Boolean),
    ve = Ge.count(F) > 0,
    k = s === "left" || s === "right",
    Ce = s === "right" || s === "bottom";
  if (!ve)
    return d("section", {
      style: _a,
      children: [
        e("div", { style: Wa, children: "\u2B50\uFE0F" }),
        e("p", { style: Ya, children: "Connect to Content" }),
        e("p", {
          style: Ha,
          children:
            "Add layers or components to make infinite auto-playing slideshows.",
        }),
      ],
    });
  let Z = _(null),
    S = Ke(() => F.map((h) => yt()), [F]),
    rr = _(void 0),
    [w, xe] = Q({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
      viewportLength: null,
    }),
    [wr, yr] = Q(!1),
    [Lr, tr] = Q(u),
    [ar, Dr] = Q(!1),
    [ke, br] = Q(!1),
    Be = [],
    nr = 4;
  se && (nr = 1);
  let Xe = Pe(() => {
      if (ve && Z.current) {
        let h = F.length - 1,
          ce = k ? Z.current.offsetWidth : Z.current.offsetHeight,
          te = S[0].current
            ? k
              ? S[0].current.offsetLeft
              : S[0].current.offsetTop
            : 0,
          Ue =
            (S[h].current
              ? k
                ? S[h].current.offsetLeft + S[h].current.offsetWidth
                : S[h].current.offsetTop + S[h].current.offsetHeight
              : 0) -
            te +
            C,
          Kr = S[0].current
            ? k
              ? S[0].current.offsetWidth
              : S[0].current.offsetHeight
            : 0,
          Jr = S[0].current ? S[0].current.offsetWidth : 0,
          Zr = S[0].current ? S[0].current.offsetHeight : 0,
          $r = k
            ? Math.max(
                document.documentElement.clientWidth || 0,
                N.innerWidth || 0,
                Z.current.offsetWidth
              )
            : Math.max(
                document.documentElement.clientHeight || 0,
                N.innerHeight || 0,
                Z.current.offsetHeight
              );
        xe({
          parent: ce,
          children: Ue,
          item: Kr,
          itemWidth: Jr,
          itemHeight: Zr,
          viewportLength: $r,
        });
      }
    }, [ve]),
    Ae = Pe(() => {
      St.read(Xe);
    }, [Xe]);
  or(() => {
    ve && Ae();
  }, [ve, P]);
  let m = _(!0);
  V(
    () =>
      Tr(Z.current, ({ contentSize: h }) => {
        !m.current && (h.width || h.height) && (Ae(), br(!0)), (m.current = !1);
      }),
    []
  ),
    V(() => {
      if (ke) {
        let h = setTimeout(() => br(!1), 500);
        return () => clearTimeout(h);
      }
    }, [ke]);
  let y = F?.length,
    L = se ? 0 : w?.children,
    fe = w?.item + C,
    G = n * fe,
    [z, $] = Q(n + y),
    [pe, Le] = Q(!1),
    we = _(null),
    vr = Kt(we),
    Cr = Ht() && vr,
    dt = Ce ? 1 : -1,
    De = Se(L),
    pt = k ? -n * (w?.itemWidth + C) : -n * (w?.itemHeight + C),
    qr = () => dt * z * fe,
    Ur = se
      ? 0
      : W(De, (h) => {
          let ce = Ze(-L, -L * 2, h);
          return isNaN(ce) ? 0 : ce;
        }),
    Jt = Ze(0, y, z),
    Zt = Ze(0, -y, z);
  or(() => {
    w?.children !== null && !m.current && ke && De.set(qr());
  }, [w, L, dt, G, z, fe, ke]);
  let ut = () => {
      se ||
        !ve ||
        !w.parent ||
        pe ||
        (De.get() !== qr() && ir(De, qr(), I),
        u &&
          Lr &&
          (rr.current = setTimeout(() => {
            $(z + 1), ut();
          }, X * 1e3)));
    },
    qe = (h) => {
      $(Ce ? z - h : z + h);
    },
    $t = (h) => {
      let ce = Ze(0, y, z),
        te = Ze(0, -y, z),
        ye = h - ce,
        Ue = h - Math.abs(te);
      $(Ce ? z - Ue : z + ye);
    },
    ea = () => {
      Le(!0);
    },
    ra = (h, { offset: ce, velocity: te }) => {
      Le(!1);
      let ye = k ? ce.x : ce.y,
        Ue = 200,
        Kr = k ? te.x : te.y,
        Jr = ye < -w.item / 2,
        Zr = ye > w.item / 2,
        $r = Math.abs(ye),
        Sr = Math.round($r / w.item),
        wt = Sr === 0 ? 1 : Sr;
      Kr > Ue ? qe(-wt) : Kr < -Ue ? qe(wt) : (Jr && qe(Sr), Zr && qe(-Sr));
    };
  V(() => {
    if (!(!Cr || ke)) return ut(), () => rr.current && clearTimeout(rr.current);
  }, [Be, Cr, ke]);
  let ta = 0,
    ht = `calc(${100 / P}% - ${C}px + ${C / P}px)`;
  for (let h = 0; h < nr; h++)
    Be.push(
      ...Ge.map(F, (ce, te) => {
        let ye;
        return (
          te === 0 && (ye = S[0]),
          te === F.length - 1 && (ye = S[1]),
          e(
            Ba,
            {
              ref: S[te],
              slideKey: h + te + "lg",
              index: h,
              width: k && P > 1 ? ht : "100%",
              height: k ? "100%" : P > 1 ? ht : "100%",
              size: w,
              child: ce,
              numChildren: F?.length,
              wrappedValue: Ur,
              childCounter: ta++,
              gap: C,
              isCanvas: se,
              isHorizontal: k,
              effectsOpacity: T,
              effectsScale: je,
              effectsRotate: Oe,
              children: h + te,
            },
            h + te + "lg"
          )
        );
      })
    );
  let aa = k ? "to right" : "to bottom",
    gt = Me / 2,
    na = 100 - Me / 2,
    oa = Fa(oe, 0, gt),
    ia = 100 - oe,
    Gr = `linear-gradient(${aa}, rgba(0, 0, 0, ${ge}) ${oa}%, rgba(0, 0, 0, 1) ${gt}%, rgba(0, 0, 0, 1) ${na}%, rgba(0, 0, 0, ${ge}) ${ia}%)`,
    Qr = [],
    kr = {};
  if (Fr) {
    for (let h = 0; h < F?.length; h++)
      Qr.push(
        e(
          Xa,
          {
            dotStyle: { ...Da, width: gr, height: gr, backgroundColor: Br },
            buttonStyle: st,
            selectedOpacity: Ie,
            opacity: Te,
            onClick: () => $t(h),
            wrappedIndex: Jt,
            wrappedIndexInverted: Zt,
            total: y,
            index: h,
            gap: Fe,
            padding: Ee,
            isHorizontal: k,
            isInverted: Ce,
          },
          h
        )
      );
    Ve > 0 &&
      (kr.backdropFilter =
        kr.WebkitBackdropFilter =
        kr.MozBackdropFilter =
          `blur(${Ve}px)`);
  }
  let sa = g
      ? {
          drag: k ? "x" : "y",
          onDragStart: ea,
          onDragEnd: ra,
          dragDirectionLock: !0,
          values: { x: De, y: De },
          dragMomentum: !1,
        }
      : {},
    la = U === "top-left" || U === "top-mid" || U === "top-right",
    fa = U === "bottom-left" || U === "bottom-mid" || U === "bottom-right",
    ca = U === "top-left" || U === "bottom-left",
    ma = U === "top-right" || U === "bottom-right",
    xt = U === "top-mid" || U === "bottom-mid" || U === "auto";
  return d("section", {
    style: {
      ...Mt,
      padding: Xr,
      WebkitMaskImage: he ? Gr : void 0,
      MozMaskImage: he ? Gr : void 0,
      maskImage: he ? Gr : void 0,
      opacity: w?.item !== null ? 1 : it,
      userSelect: "none",
    },
    onMouseEnter: () => {
      yr(!0), He || tr(!1);
    },
    onMouseLeave: () => {
      yr(!1), He || tr(!0);
    },
    onMouseDown: (h) => {
      h.preventDefault(), Dr(!0);
    },
    onMouseUp: () => Dr(!1),
    ref: we,
    children: [
      e("div", {
        style: {
          width: "100%",
          height: "100%",
          margin: 0,
          padding: "inherit",
          position: "absolute",
          inset: 0,
          overflow: ze ? "visible" : "hidden",
          borderRadius: R,
          userSelect: "none",
          perspective: se ? "none" : Ye,
        },
        children: e(o.ul, {
          ref: Z,
          ...sa,
          style: {
            ...Mt,
            gap: C,
            placeItems: H,
            x: k ? (se ? pt : Ur) : 0,
            y: k ? 0 : se ? pt : Ur,
            flexDirection: k ? "row" : "column",
            transformStyle: Oe !== 0 && !se ? "preserve-3d" : void 0,
            cursor: g ? (ar ? "grabbing" : "grab") : "auto",
            userSelect: "none",
            ...B,
          },
          children: Be,
        }),
      }),
      d("fieldset", {
        style: { ...Ma },
        "aria-label": "Slideshow pagination controls",
        className: "framer--slideshow-controls",
        children: [
          d(o.div, {
            style: {
              position: "absolute",
              display: "flex",
              flexDirection: k ? "row" : "column",
              justifyContent: be ? "space-between" : "center",
              gap: be ? "unset" : pr,
              opacity: dr ? it : 1,
              alignItems: "center",
              inset: Re,
              top: be ? Re : la ? er : "unset",
              left: be ? Re : ca ? hr : xt ? 0 : "unset",
              right: be ? Re : ma ? de : xt ? 0 : "unset",
              bottom: be ? Re : fa ? ur : "unset",
            },
            animate: dr && { opacity: wr ? 1 : it },
            transition: I,
            children: [
              e(o.button, {
                type: "button",
                style: {
                  ...st,
                  backgroundColor: mr,
                  width: le,
                  height: le,
                  borderRadius: $e,
                  rotate: k ? 0 : 90,
                  display: cr ? "block" : "none",
                  pointerEvents: "auto",
                },
                onClick: () => qe(-1),
                "aria-label": "Previous",
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: e("img", {
                  decoding: "async",
                  width: le,
                  height: le,
                  src:
                    Hr ||
                    "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
                  alt: "Back Arrow",
                }),
              }),
              e(o.button, {
                type: "button",
                style: {
                  ...st,
                  backgroundColor: mr,
                  width: le,
                  height: le,
                  borderRadius: $e,
                  rotate: k ? 0 : 90,
                  display: cr ? "block" : "none",
                  pointerEvents: "auto",
                },
                onClick: () => qe(1),
                "aria-label": "Next",
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: e("img", {
                  decoding: "async",
                  width: le,
                  height: le,
                  src:
                    Mr ||
                    "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
                  alt: "Next Arrow",
                }),
              }),
            ],
          }),
          Qr.length > 1
            ? e("div", {
                style: {
                  ...La,
                  left: k ? "50%" : xr,
                  top: k ? "unset" : "50%",
                  transform: k ? "translateX(-50%)" : "translateY(-50%)",
                  flexDirection: k ? "row" : "column",
                  bottom: k ? xr : "unset",
                  borderRadius: ie,
                  backgroundColor: mt,
                  userSelect: "none",
                  ...kr,
                },
                children: Qr,
              })
            : null,
        ],
      }),
    ],
  });
}
Y.defaultProps = {
  direction: "left",
  dragControl: !1,
  startFrom: 0,
  itemAmount: 1,
  infinity: !0,
  gap: 10,
  padding: 10,
  autoPlayControl: !0,
  effectsOptions: {
    effectsOpacity: 1,
    effectsScale: 1,
    effectsRotate: 0,
    effectsPerspective: 1200,
    effectsHover: !0,
  },
  transitionControl: { type: "spring", stiffness: 200, damping: 40 },
  fadeOptions: {
    fadeContent: !1,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  arrowOptions: {
    showMouseControls: !0,
    arrowShouldFadeIn: !1,
    arrowShouldSpace: !0,
    arrowFill: "rgba(0,0,0,0.2)",
    arrowSize: 40,
  },
  progressOptions: { showProgressDots: !0 },
};
zr(Y, {
  slots: {
    type: t.Array,
    title: "Content",
    control: { type: t.ComponentInstance },
  },
  direction: {
    type: t.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    displaySegmentedControl: !0,
    defaultValue: Y.defaultProps.direction,
  },
  autoPlayControl: { type: t.Boolean, title: "Auto Play", defaultValue: !0 },
  intervalControl: {
    type: t.Number,
    title: "Interval",
    defaultValue: 1.5,
    min: 0.5,
    max: 10,
    step: 0.1,
    displayStepper: !0,
    unit: "s",
    hidden: (r) => !r.autoPlayControl,
  },
  dragControl: { type: t.Boolean, title: "Draggable", defaultValue: !1 },
  startFrom: {
    type: t.Number,
    title: "Current",
    min: 0,
    max: 10,
    displayStepper: !0,
    defaultValue: Y.defaultProps.startFrom,
  },
  effectsOptions: {
    type: t.Object,
    title: "Effects",
    controls: {
      effectsOpacity: {
        type: t.Number,
        title: "Opacity",
        defaultValue: Y.defaultProps.effectsOptions.effectsOpacity,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsScale: {
        type: t.Number,
        title: "Scale",
        defaultValue: Y.defaultProps.effectsOptions.effectsScale,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsPerspective: {
        type: t.Number,
        title: "Perspective",
        defaultValue: Y.defaultProps.effectsOptions.effectsPerspective,
        min: 200,
        max: 2e3,
        step: 1,
      },
      effectsRotate: {
        type: t.Number,
        title: "Rotate",
        defaultValue: Y.defaultProps.effectsOptions.effectsRotate,
        min: -180,
        max: 180,
        step: 1,
      },
      effectsHover: {
        type: t.Boolean,
        title: "On Hover",
        enabledTitle: "Play",
        disabledTitle: "Pause",
        defaultValue: Y.defaultProps.effectsOptions.effectsHover,
      },
    },
  },
  alignment: {
    type: t.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  itemAmount: {
    type: t.Number,
    title: "Items",
    min: 1,
    max: 10,
    displayStepper: !0,
    defaultValue: Y.defaultProps.itemAmount,
  },
  gap: { type: t.Number, title: "Gap", min: 0 },
  padding: {
    title: "Padding",
    type: t.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    defaultValue: 0,
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  borderRadius: {
    type: t.Number,
    title: "Radius",
    min: 0,
    max: 500,
    displayStepper: !0,
    defaultValue: 0,
  },
  transitionControl: {
    type: t.Transition,
    defaultValue: Y.defaultProps.transitionControl,
    title: "Transition",
  },
  fadeOptions: {
    type: t.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: t.Boolean, title: "Fade", defaultValue: !1 },
      overflow: {
        type: t.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(r) {
          return r.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: t.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeInset: {
        type: t.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: t.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
    },
  },
  arrowOptions: {
    type: t.Object,
    title: "Arrows",
    controls: {
      showMouseControls: {
        type: t.Boolean,
        title: "Show",
        defaultValue: Y.defaultProps.arrowOptions.showMouseControls,
      },
      arrowFill: {
        type: t.Color,
        title: "Fill",
        hidden: (r) => !r.showMouseControls,
        defaultValue: Y.defaultProps.arrowOptions.arrowFill,
      },
      leftArrow: {
        type: t.Image,
        title: "Previous",
        hidden: (r) => !r.showMouseControls,
      },
      rightArrow: {
        type: t.Image,
        title: "Next",
        hidden: (r) => !r.showMouseControls,
      },
      arrowSize: {
        type: t.Number,
        title: "Size",
        min: 0,
        max: 200,
        displayStepper: !0,
        defaultValue: Y.defaultProps.arrowOptions.arrowSize,
        hidden: (r) => !r.showMouseControls,
      },
      arrowRadius: {
        type: t.Number,
        title: "Radius",
        min: 0,
        max: 500,
        defaultValue: 40,
        hidden: (r) => !r.showMouseControls,
      },
      arrowShouldFadeIn: {
        type: t.Boolean,
        title: "Fade In",
        defaultValue: !1,
        hidden: (r) => !r.showMouseControls,
      },
      arrowShouldSpace: {
        type: t.Boolean,
        title: "Distance",
        enabledTitle: "Space",
        disabledTitle: "Group",
        defaultValue: Y.defaultProps.arrowOptions.arrowShouldSpace,
        hidden: (r) => !r.showMouseControls,
      },
      arrowPosition: {
        type: t.Enum,
        title: "Position",
        options: [
          "auto",
          "top-left",
          "top-mid",
          "top-right",
          "bottom-left",
          "bottom-mid",
          "bottom-right",
        ],
        optionTitles: [
          "Center",
          "Top Left",
          "Top Middle",
          "Top Right",
          "Bottom Left",
          "Bottom Middle",
          "Bottom Right",
        ],
        hidden: (r) => !r.showMouseControls || r.arrowShouldSpace,
      },
      arrowPadding: {
        type: t.Number,
        title: "Inset",
        min: -100,
        max: 100,
        defaultValue: 20,
        displayStepper: !0,
        hidden: (r) => !r.showMouseControls || !r.arrowShouldSpace,
      },
      arrowPaddingTop: {
        type: t.Number,
        title: "Top",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (r) =>
          !r.showMouseControls ||
          r.arrowShouldSpace ||
          r.arrowPosition === "auto" ||
          r.arrowPosition === "bottom-mid" ||
          r.arrowPosition === "bottom-left" ||
          r.arrowPosition === "bottom-right",
      },
      arrowPaddingBottom: {
        type: t.Number,
        title: "Bottom",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (r) =>
          !r.showMouseControls ||
          r.arrowShouldSpace ||
          r.arrowPosition === "auto" ||
          r.arrowPosition === "top-mid" ||
          r.arrowPosition === "top-left" ||
          r.arrowPosition === "top-right",
      },
      arrowPaddingRight: {
        type: t.Number,
        title: "Right",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (r) =>
          !r.showMouseControls ||
          r.arrowShouldSpace ||
          r.arrowPosition === "auto" ||
          r.arrowPosition === "top-left" ||
          r.arrowPosition === "top-mid" ||
          r.arrowPosition === "bottom-left" ||
          r.arrowPosition === "bottom-mid",
      },
      arrowPaddingLeft: {
        type: t.Number,
        title: "Left",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (r) =>
          !r.showMouseControls ||
          r.arrowShouldSpace ||
          r.arrowPosition === "auto" ||
          r.arrowPosition === "top-right" ||
          r.arrowPosition === "top-mid" ||
          r.arrowPosition === "bottom-right" ||
          r.arrowPosition === "bottom-mid",
      },
      arrowGap: {
        type: t.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showMouseControls || r.arrowShouldSpace,
      },
    },
  },
  progressOptions: {
    type: t.Object,
    title: "Dots",
    controls: {
      showProgressDots: { type: t.Boolean, title: "Show", defaultValue: !1 },
      dotSize: {
        type: t.Number,
        title: "Size",
        min: 1,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsInset: {
        type: t.Number,
        title: "Inset",
        min: -100,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsGap: {
        type: t.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsPadding: {
        type: t.Number,
        title: "Padding",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsFill: {
        type: t.Color,
        title: "Fill",
        defaultValue: "#fff",
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsBackground: {
        type: t.Color,
        title: "Backdrop",
        defaultValue: "rgba(0,0,0,0.2)",
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsRadius: {
        type: t.Number,
        title: "Radius",
        min: 0,
        max: 200,
        defaultValue: 50,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsOpacity: {
        type: t.Number,
        title: "Opacity",
        min: 0,
        max: 1,
        defaultValue: 0.5,
        step: 0.1,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsActiveOpacity: {
        type: t.Number,
        title: "Current",
        min: 0,
        max: 1,
        defaultValue: 1,
        step: 0.1,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsBlur: {
        type: t.Number,
        title: "Blur",
        min: 0,
        max: 50,
        defaultValue: 0,
        step: 1,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
    },
  },
});
var Mt = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  _a = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  Wa = { fontSize: 32, marginBottom: 10 },
  Ya = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  Ha = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 180,
    lineHeight: 1.5,
    textAlign: "center",
  },
  st = {
    border: "none",
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    background: "transparent",
    cursor: "pointer",
    margin: 0,
    padding: 0,
  },
  Ma = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    pointerEvents: "none",
    userSelect: "none",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    padding: 0,
    margin: 0,
  },
  Fa = (r, i, n) => Math.min(Math.max(r, i), n),
  Ba = Qe(function (i, n) {
    var s, x;
    let {
        slideKey: u,
        width: g,
        height: H,
        child: C,
        size: a,
        gap: v,
        wrappedValue: A,
        numChildren: ne,
        childCounter: J,
        isCanvas: K,
        effects: P,
        effectsOpacity: re,
        effectsScale: X,
        effectsRotate: I,
        isHorizontal: j,
        isLast: R,
        index: M,
      } = i,
      B = (a?.item + v) * J,
      T = [-a?.item, 0, a?.parent - a?.item + v, a?.parent].map((oe) => oe - B),
      je = !K && W(A, T, [-I, 0, 0, I]),
      Oe = !K && W(A, T, [I, 0, 0, -I]),
      Ye = !K && W(A, T, [re, 1, 1, re]),
      He = !K && W(A, T, [X, 1, 1, X]),
      he = !K && W(A, T, [1, 1, 0, 0]),
      ze = !K && W(A, (oe) => oe >= T[1] && oe <= T[2]);
    V(() => {
      if (ze)
        return ze.onChange((oe) => {
          var ge;
          (ge = n.current) === null ||
            ge === void 0 ||
            ge.setAttribute("aria-hidden", !oe);
        });
    }, []);
    let Me = K
      ? "visible"
      : W(
          A,
          [
            T[0] - a.viewportLength,
            Ct(T[1], T[2], 0.5),
            T[3] + a.viewportLength,
          ],
          ["hidden", "visible", "hidden"]
        );
    return e(Je, {
      inherit: "id",
      children: e("li", {
        style: { display: "contents" },
        "aria-hidden": M !== 0,
        children: Nr(
          C,
          {
            ref: n,
            key: u + "child",
            style: {
              ...((s = C.props) === null || s === void 0 ? void 0 : s.style),
              flexShrink: 0,
              userSelect: "none",
              width: g,
              height: H,
              opacity: Ye,
              scale: He,
              originX: j ? he : 0.5,
              originY: j ? 0.5 : he,
              rotateY: j ? je : 0,
              rotateX: j ? 0 : Oe,
              visibility: Me,
            },
            layoutId: C.props.layoutId
              ? C.props.layoutId + "-original-" + M
              : void 0,
          },
          (x = C.props) === null || x === void 0 ? void 0 : x.children
        ),
      }),
    });
  });
function Xa({
  selectedOpacity: r,
  opacity: i,
  total: n,
  index: s,
  wrappedIndex: x,
  wrappedIndexInverted: u,
  dotStyle: g,
  buttonStyle: H,
  gap: C,
  padding: a,
  isHorizontal: v,
  isInverted: A,
  ...ne
}) {
  let J = x === s;
  A && (J = Math.abs(u) === s);
  let K = C / 2,
    P = !v && s > 0 ? K : a,
    re = !v && s !== n - 1 ? K : a,
    X = v && s !== n - 1 ? K : a,
    I = v && s > 0 ? K : a;
  return e("button", {
    "aria-label": `Scroll to page ${s + 1}`,
    type: "button",
    ...ne,
    style: { ...H, padding: `${P}px ${X}px ${re}px ${I}px` },
    children: e(o.div, {
      style: { ...g },
      initial: !1,
      animate: { opacity: J ? r : i },
      transition: { duration: 0.3 },
    }),
  });
}
var La = {
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    position: "absolute",
    pointerEvents: "auto",
  },
  Da = {
    borderRadius: "50%",
    background: "white",
    cursor: "pointer",
    border: "none",
    placeContent: "center",
    placeItems: "center",
    padding: 0,
  };
var qa = "framer-P0YRH",
  Ua = { hltoqN0el: "framer-v-11l6zkx" };
var Ga = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Qa = ({ value: r, children: i }) => {
    let n = bt(et),
      s = r ?? n.transition,
      x = Ke(() => ({ ...n, transition: s }), [JSON.stringify(s)]);
    return e(et.Provider, { value: x, children: i });
  },
  Ja = o(c),
  Za = ({ height: r, id: i, width: n, ...s }) => ({ ...s }),
  $a = (r, i) =>
    r.layoutDependency ? i.join("-") + r.layoutDependency : i.join("-"),
  en = Qe(function (r, i) {
    let { activeLocale: n, setLocale: s } = Or(),
      { style: x, className: u, layoutId: g, variant: H, ...C } = Za(r),
      {
        baseVariant: a,
        classNames: v,
        clearLoadingGesture: A,
        gestureHandlers: ne,
        gestureVariant: J,
        isLoading: K,
        setGestureState: P,
        setVariant: re,
        variants: X,
      } = Et({
        defaultVariant: "hltoqN0el",
        variant: H,
        variantClassNames: Ua,
      }),
      I = $a(r, X),
      j = _(null),
      R = jr(),
      M = [],
      B = jt();
    return e(Je, {
      id: g ?? R,
      children: e(Ja, {
        animate: X,
        initial: !1,
        children: e(Qa, {
          value: Ga,
          children: e(o.div, {
            ...C,
            ...ne,
            className: sr(qa, ...M, "framer-11l6zkx", u, v),
            "data-framer-name": "Variant 1",
            layoutDependency: I,
            layoutId: "hltoqN0el",
            ref: i ?? j,
            style: { ...x },
            children: e(l, {
              background: {
                alt: "",
                fit: "fit",
                loading: f((B?.y || 0) + 0),
                pixelHeight: 58,
                pixelWidth: 75,
                positionX: "center",
                positionY: "center",
                src: "https://framerusercontent.com/images/9R3q5Cl4uHmvnm0D84moFX3J2fc.png",
              },
              className: "framer-xzi4ya",
              layoutDependency: I,
              layoutId: "GtfFqgyeA",
            }),
          }),
        }),
      }),
    });
  }),
  rn = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-P0YRH.framer-1s4f2qf, .framer-P0YRH .framer-1s4f2qf { display: block; }",
    ".framer-P0YRH.framer-11l6zkx { height: 50px; position: relative; width: 50px; }",
    ".framer-P0YRH .framer-xzi4ya { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }",
  ],
  _r = Er(en, rn, "framer-P0YRH"),
  lt = _r;
_r.displayName = "Cursor";
_r.defaultProps = { height: 50, width: 50 };
Ir(_r, [{ explicitInter: !0, fonts: [] }], {
  supportsExplicitInterCodegen: !0,
});
var Ft = (r) => (i) => {
  let n = "JShSypKjK1Hv5PZxy4GUtkZrr2H7v8wDWBoPk2jpump";
  return e(r, {
    ...i,
    onClick: () => {
      O.clipboard.writeText(n);
    },
  });
};
var Wr = Rr(l),
  tn = lr(ee),
  an = Rr(o.a),
  nn = rt(o.div),
  ft = rt(l),
  Bt = Rr(o.div),
  on = Ft(o.div),
  sn = lr(_e),
  ln = lr(Y),
  fn = lr(lt),
  cn = {
    oIP8s9PSc: "(min-width: 810px) and (max-width: 1199px)",
    RsYwHljm0: "(max-width: 809px)",
    WQLkyLRf1: "(min-width: 1200px)",
  },
  Xt = () => typeof document < "u",
  Lt = "framer-3nufK",
  mn = {
    oIP8s9PSc: "framer-v-im5r27",
    RsYwHljm0: "framer-v-6nb76n",
    WQLkyLRf1: "framer-v-72rtr7",
  },
  dn = { delay: 0, duration: 2, ease: [0.52, 0.05, 0.56, 1], type: "tween" },
  pn = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 25,
  },
  un = { bounce: 0.1, delay: 0.2, duration: 1.7, type: "spring" },
  hn = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: un,
    x: 0,
    y: 0,
  },
  Dt = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: -150,
  },
  fr = { bounce: 0.25, delay: 0, duration: 0.45, type: "spring" },
  We = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: fr,
  },
  qt = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: "tween" },
  gn = {
    opacity: 1,
    rotate: 10,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  ue = {
    backgroundColor: "rgb(0, 0, 0)",
    boxShadow: "2px 2px 0px 0px rgb(243, 151, 174)",
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: fr,
  },
  ae = (r, i) => `translate(-50%, -50%) ${i}`,
  xn = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: -10,
  },
  wn = {
    delay: 0.2,
    duration: 0.7,
    ease: [0.15, 0.45, 0.15, 1.35],
    type: "tween",
  },
  yn = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: wn,
    x: 0,
    y: 0,
  },
  bn = { bounce: 0.2, delay: 0.8, duration: 0.8, type: "spring" },
  vn = {
    opacity: 0.23,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: bn,
    x: 0,
    y: 0,
  },
  Cn = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  kn = { bounce: 0.2, delay: 0, duration: 1, type: "spring" },
  Kn = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: kn,
    x: 0,
    y: 0,
  },
  Sn = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 150,
  },
  Nn = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Ut = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: Nn,
  },
  jn = { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 50, y: 0 },
  On = { bounce: 0.25, delay: 0.1, duration: 0.45, type: "spring" },
  zn = {
    effect: jn,
    startDelay: 1,
    tokenization: "character",
    transition: On,
    trigger: "onMount",
    type: "appear",
  },
  Rn = {
    backgroundColor: "rgb(178, 220, 96)",
    boxShadow: "2px 2px 0px 0px rgb(0, 0, 0)",
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.9,
    skewX: 0,
    skewY: 0,
    transition: fr,
  },
  En = {
    boxShadow: "2px 2px 0px 0px rgb(255, 255, 255)",
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: fr,
  },
  In = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 150,
  },
  Gt = { bounce: 0.2, delay: 0, duration: 2, type: "spring" },
  Tn = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Gt,
    x: 0,
    y: 150,
  },
  Vn = { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 },
  An = { bounce: 0, delay: 0.075, duration: 0.4, type: "spring" },
  Pn = {
    effect: Vn,
    startDelay: 0.5,
    tokenization: "word",
    transition: An,
    trigger: "onInView",
    type: "appear",
  },
  _n = {
    filter: "blur(10px)",
    opacity: 0.001,
    rotate: 0,
    scale: 2,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Wn = { bounce: 0.25, delay: 0.05, duration: 0.45, type: "spring" },
  Yn = {
    effect: _n,
    startDelay: 0.5,
    tokenization: "word",
    transition: Wn,
    trigger: "onInView",
    type: "appear",
  },
  Hn = {
    boxShadow: "2px 2px 0px 0px rgb(0, 0, 0)",
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: fr,
  },
  Mn = (r, i) => `translateX(-50%) ${i}`,
  Fn = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 150,
  },
  Qt = { delay: 0, duration: 2.1, ease: [0.11, 1.1, 0.56, 1], type: "tween" },
  Bn = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Qt,
    x: 0,
    y: 150,
  },
  ct = Vr(),
  Xn = { Desktop: "WQLkyLRf1", Phone: "RsYwHljm0", Tablet: "oIP8s9PSc" },
  Ln = ({ height: r, id: i, width: n, ...s }) => {
    var x, u;
    return {
      ...s,
      variant:
        (u = (x = Xn[s.variant]) !== null && x !== void 0 ? x : s.variant) !==
          null && u !== void 0
          ? u
          : "WQLkyLRf1",
    };
  },
  Dn = { component: lt, variant: "hltoqN0el" },
  qn = Qe(function (r, i) {
    let { activeLocale: n, setLocale: s } = Or(),
      { style: x, className: u, layoutId: g, variant: H, ...C } = Ln(r);
    V(() => {
      let j = Vr(void 0, n);
      if (j.robots) {
        let R = document.querySelector('meta[name="robots"]');
        R
          ? R.setAttribute("content", j.robots)
          : ((R = document.createElement("meta")),
            R.setAttribute("name", "robots"),
            R.setAttribute("content", j.robots),
            document.head.appendChild(R));
      }
    }, [void 0, n]),
      vt(() => {
        let j = Vr(void 0, n);
        if (((document.title = j.title || ""), j.viewport)) {
          var R;
          (R = document.querySelector('meta[name="viewport"]')) === null ||
            R === void 0 ||
            R.setAttribute("content", j.viewport);
        }
        let M = j.bodyClassName;
        if (M) {
          let B = document.body;
          B.classList.forEach(
            (T) => T.startsWith("framer-body-") && B.classList.remove(T)
          ),
            B.classList.add(`${j.bodyClassName}-framer-3nufK`);
        }
        return () => {
          M &&
            document.body.classList.remove(`${j.bodyClassName}-framer-3nufK`);
        };
      }, [void 0, n]);
    let [a, v] = Rt(H, cn, !1),
      A = void 0,
      ne = _(null),
      J = Nt("lsANaiIgk"),
      K = _(null),
      P = () => !Xt() || a === "RsYwHljm0",
      re = () => (Xt() ? a !== "RsYwHljm0" : !0),
      X = jr(),
      I = [];
    return (
      Ot({ "1mq2dil": Dn }),
      e(zt.Provider, {
        value: { primaryVariantId: "WQLkyLRf1", variantClassNames: mn },
        children: d(Je, {
          id: g ?? X,
          children: [
            d(o.div, {
              ...C,
              className: sr(Lt, ...I, "framer-72rtr7", u),
              "data-framer-cursor": "1mq2dil",
              ref: i ?? ne,
              style: { ...x },
              children: [
                e("div", {
                  className: "framer-1cd2nqd",
                  children: e(b, {
                    breakpoint: a,
                    overrides: {
                      oIP8s9PSc: {
                        background: {
                          alt: "",
                          fit: "fit",
                          loading: f(2724),
                          pixelHeight: 1865,
                          pixelWidth: 2428,
                          positionX: "center",
                          positionY: "center",
                          sizes: "540px",
                          src: "https://framerusercontent.com/images/df5DNxwOnQshLrRf3cOYlvfnBk.png",
                          srcSet:
                            "https://framerusercontent.com/images/df5DNxwOnQshLrRf3cOYlvfnBk.png?scale-down-to=512 512w,https://framerusercontent.com/images/df5DNxwOnQshLrRf3cOYlvfnBk.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/df5DNxwOnQshLrRf3cOYlvfnBk.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/df5DNxwOnQshLrRf3cOYlvfnBk.png 2428w",
                        },
                      },
                      RsYwHljm0: {
                        background: {
                          alt: "",
                          fit: "fit",
                          loading: f(2296),
                          pixelHeight: 1865,
                          pixelWidth: 2428,
                          positionX: "center",
                          positionY: "center",
                          sizes: "540px",
                          src: "https://framerusercontent.com/images/df5DNxwOnQshLrRf3cOYlvfnBk.png",
                          srcSet:
                            "https://framerusercontent.com/images/df5DNxwOnQshLrRf3cOYlvfnBk.png?scale-down-to=512 512w,https://framerusercontent.com/images/df5DNxwOnQshLrRf3cOYlvfnBk.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/df5DNxwOnQshLrRf3cOYlvfnBk.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/df5DNxwOnQshLrRf3cOYlvfnBk.png 2428w",
                        },
                      },
                    },
                    children: e(Wr, {
                      __framer__loop: pn,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 0,
                      __framer__loopRepeatType: "mirror",
                      __framer__loopTransition: dn,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      background: {
                        alt: "",
                        fit: "fit",
                        loading: f(2806),
                        pixelHeight: 1865,
                        pixelWidth: 2428,
                        positionX: "center",
                        positionY: "center",
                        sizes: "540px",
                        src: "https://framerusercontent.com/images/df5DNxwOnQshLrRf3cOYlvfnBk.png",
                        srcSet:
                          "https://framerusercontent.com/images/df5DNxwOnQshLrRf3cOYlvfnBk.png?scale-down-to=512 512w,https://framerusercontent.com/images/df5DNxwOnQshLrRf3cOYlvfnBk.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/df5DNxwOnQshLrRf3cOYlvfnBk.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/df5DNxwOnQshLrRf3cOYlvfnBk.png 2428w",
                      },
                      className: "framer-1lmok6a",
                    }),
                  }),
                }),
                e(D, {
                  children: e(q, {
                    className: "framer-1gi1tpy-container",
                    children: e(b, {
                      breakpoint: a,
                      overrides: { RsYwHljm0: { gap: 500 } },
                      children: e(ee, {
                        alignment: "center",
                        direction: "right",
                        fadeOptions: {
                          fadeAlpha: 0,
                          fadeContent: !1,
                          fadeInset: 0,
                          fadeWidth: 0,
                          overflow: !1,
                        },
                        gap: 650,
                        height: "100%",
                        hoverFactor: 0.5,
                        id: "oYn_3mn8h",
                        layoutId: "oYn_3mn8h",
                        padding: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                        paddingPerSide: !1,
                        paddingRight: 10,
                        paddingTop: 10,
                        sizingOptions: { heightType: !0, widthType: !0 },
                        slots: [
                          e(l, {
                            background: {
                              alt: "",
                              fit: "fit",
                              pixelHeight: 90,
                              pixelWidth: 300,
                              positionX: "center",
                              positionY: "center",
                              src: "https://framerusercontent.com/images/Z8KLH97ZPeQC0tX9fEel28oIBg.png",
                            },
                            className: "framer-15m6riq",
                          }),
                          e(l, {
                            background: {
                              alt: "",
                              fit: "fit",
                              pixelHeight: 90,
                              pixelWidth: 300,
                              positionX: "center",
                              positionY: "center",
                              src: "https://framerusercontent.com/images/Z8KLH97ZPeQC0tX9fEel28oIBg.png",
                            },
                            className: "framer-r1frz9",
                          }),
                          e(l, {
                            background: {
                              alt: "",
                              fit: "fit",
                              pixelHeight: 90,
                              pixelWidth: 300,
                              positionX: "center",
                              positionY: "center",
                              src: "https://framerusercontent.com/images/Z8KLH97ZPeQC0tX9fEel28oIBg.png",
                            },
                            className: "framer-r1frz9",
                          }),
                          e(l, {
                            background: {
                              alt: "",
                              fit: "fit",
                              pixelHeight: 90,
                              pixelWidth: 300,
                              positionX: "center",
                              positionY: "center",
                              src: "https://framerusercontent.com/images/Z8KLH97ZPeQC0tX9fEel28oIBg.png",
                            },
                            className: "framer-15m6riq",
                          }),
                        ],
                        speed: 80,
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                e(D, {
                  children: e(q, {
                    className: "framer-cnsk2m-container",
                    children: e(b, {
                      breakpoint: a,
                      overrides: { RsYwHljm0: { gap: 300 } },
                      children: e(ee, {
                        alignment: "center",
                        direction: "right",
                        fadeOptions: {
                          fadeAlpha: 0,
                          fadeContent: !1,
                          fadeInset: 0,
                          fadeWidth: 0,
                          overflow: !1,
                        },
                        gap: 600,
                        height: "100%",
                        hoverFactor: 0.6,
                        id: "Y7xSxF9fi",
                        layoutId: "Y7xSxF9fi",
                        padding: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                        paddingPerSide: !1,
                        paddingRight: 10,
                        paddingTop: 10,
                        sizingOptions: { heightType: !0, widthType: !0 },
                        slots: [
                          e(l, {
                            background: {
                              alt: "",
                              fit: "fit",
                              pixelHeight: 90,
                              pixelWidth: 300,
                              positionX: "center",
                              positionY: "center",
                              src: "https://framerusercontent.com/images/Z8KLH97ZPeQC0tX9fEel28oIBg.png",
                            },
                            className: "framer-15m6riq",
                          }),
                          e(l, {
                            background: {
                              alt: "",
                              fit: "fit",
                              pixelHeight: 90,
                              pixelWidth: 300,
                              positionX: "center",
                              positionY: "center",
                              src: "https://framerusercontent.com/images/Z8KLH97ZPeQC0tX9fEel28oIBg.png",
                            },
                            className: "framer-r1frz9",
                          }),
                          e(l, {
                            background: {
                              alt: "",
                              fit: "fit",
                              pixelHeight: 90,
                              pixelWidth: 300,
                              positionX: "center",
                              positionY: "center",
                              src: "https://framerusercontent.com/images/Z8KLH97ZPeQC0tX9fEel28oIBg.png",
                            },
                            className: "framer-r1frz9",
                          }),
                        ],
                        speed: 60,
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                e(D, {
                  children: e(q, {
                    className: "framer-r1l2lg-container",
                    children: e(b, {
                      breakpoint: a,
                      overrides: { RsYwHljm0: { gap: 250 } },
                      children: e(ee, {
                        alignment: "center",
                        direction: "right",
                        fadeOptions: {
                          fadeAlpha: 0,
                          fadeContent: !1,
                          fadeInset: 0,
                          fadeWidth: 0,
                          overflow: !1,
                        },
                        gap: 400,
                        height: "100%",
                        hoverFactor: 0.4,
                        id: "qOK0dYhiS",
                        layoutId: "qOK0dYhiS",
                        padding: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                        paddingPerSide: !1,
                        paddingRight: 10,
                        paddingTop: 10,
                        sizingOptions: { heightType: !0, widthType: !0 },
                        slots: [
                          e(l, {
                            background: {
                              alt: "",
                              fit: "fit",
                              pixelHeight: 90,
                              pixelWidth: 300,
                              positionX: "center",
                              positionY: "center",
                              src: "https://framerusercontent.com/images/Z8KLH97ZPeQC0tX9fEel28oIBg.png",
                            },
                            className: "framer-1gzed7m",
                            "data-framer-name": "Small Cloud",
                            name: "Small Cloud",
                          }),
                          e(l, {
                            background: {
                              alt: "",
                              fit: "fit",
                              pixelHeight: 90,
                              pixelWidth: 300,
                              positionX: "center",
                              positionY: "center",
                              src: "https://framerusercontent.com/images/Z8KLH97ZPeQC0tX9fEel28oIBg.png",
                            },
                            className: "framer-1gzed7m",
                            "data-framer-name": "Small Cloud",
                            name: "Small Cloud",
                          }),
                          e(l, {
                            background: {
                              alt: "",
                              fit: "fit",
                              pixelHeight: 90,
                              pixelWidth: 300,
                              positionX: "center",
                              positionY: "center",
                              src: "https://framerusercontent.com/images/Z8KLH97ZPeQC0tX9fEel28oIBg.png",
                            },
                            className: "framer-1gzed7m",
                            "data-framer-name": "Small Cloud",
                            name: "Small Cloud",
                          }),
                          e(l, {
                            background: {
                              alt: "",
                              fit: "fit",
                              pixelHeight: 90,
                              pixelWidth: 300,
                              positionX: "center",
                              positionY: "center",
                              src: "https://framerusercontent.com/images/Z8KLH97ZPeQC0tX9fEel28oIBg.png",
                            },
                            className: "framer-1gzed7m",
                            "data-framer-name": "Small Cloud",
                            name: "Small Cloud",
                          }),
                          e(l, {
                            background: {
                              alt: "",
                              fit: "fit",
                              pixelHeight: 90,
                              pixelWidth: 300,
                              positionX: "center",
                              positionY: "center",
                              src: "https://framerusercontent.com/images/Z8KLH97ZPeQC0tX9fEel28oIBg.png",
                            },
                            className: "framer-1gzed7m",
                            "data-framer-name": "Small Cloud",
                            name: "Small Cloud",
                          }),
                          e(l, {
                            background: {
                              alt: "",
                              fit: "fit",
                              pixelHeight: 90,
                              pixelWidth: 300,
                              positionX: "center",
                              positionY: "center",
                              src: "https://framerusercontent.com/images/Z8KLH97ZPeQC0tX9fEel28oIBg.png",
                            },
                            className: "framer-1gzed7m",
                            "data-framer-name": "Small Cloud",
                            name: "Small Cloud",
                          }),
                          e(l, {
                            background: {
                              alt: "",
                              fit: "fit",
                              pixelHeight: 90,
                              pixelWidth: 300,
                              positionX: "center",
                              positionY: "center",
                              src: "https://framerusercontent.com/images/Z8KLH97ZPeQC0tX9fEel28oIBg.png",
                            },
                            className: "framer-1gzed7m",
                            "data-framer-name": "Small Cloud",
                            name: "Small Cloud",
                          }),
                          e(l, {
                            background: {
                              alt: "",
                              fit: "fit",
                              pixelHeight: 90,
                              pixelWidth: 300,
                              positionX: "center",
                              positionY: "center",
                              src: "https://framerusercontent.com/images/Z8KLH97ZPeQC0tX9fEel28oIBg.png",
                            },
                            className: "framer-1gzed7m",
                            "data-framer-name": "Small Cloud",
                            name: "Small Cloud",
                          }),
                        ],
                        speed: 40,
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                d("div", {
                  className: "framer-1qjjrr7",
                  "data-framer-name": "Head",
                  name: "Head",
                  children: [
                    e(nn, {
                      animate: hn,
                      className: "framer-1vyr45i",
                      "data-framer-appear-id": "1vyr45i",
                      "data-framer-name": "Top Menu",
                      initial: Dt,
                      name: "Top Menu",
                      optimized: !0,
                      children: d("div", {
                        className: "framer-1ixquah",
                        "data-border": !0,
                        children: [
                          e("div", {
                            className: "framer-26h5k2",
                            children: e(b, {
                              breakpoint: a,
                              overrides: {
                                oIP8s9PSc: {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    loading: f(57.5),
                                    pixelHeight: 58,
                                    pixelWidth: 75,
                                    positionX: "center",
                                    positionY: "center",
                                    src: "https://framerusercontent.com/images/9R3q5Cl4uHmvnm0D84moFX3J2fc.png?lossless=1",
                                  },
                                },
                                RsYwHljm0: {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    loading: f(35.5),
                                    pixelHeight: 58,
                                    pixelWidth: 75,
                                    positionX: "center",
                                    positionY: "center",
                                    src: "https://framerusercontent.com/images/9R3q5Cl4uHmvnm0D84moFX3J2fc.png?lossless=1",
                                  },
                                },
                              },
                              children: e(l, {
                                background: {
                                  alt: "",
                                  fit: "fit",
                                  loading: f(55.5),
                                  pixelHeight: 58,
                                  pixelWidth: 75,
                                  positionX: "center",
                                  positionY: "center",
                                  src: "https://framerusercontent.com/images/9R3q5Cl4uHmvnm0D84moFX3J2fc.png?lossless=1",
                                },
                                className: "framer-hyl8c1",
                              }),
                            }),
                          }),
                          d("div", {
                            className: "framer-dg56k1",
                            children: [
                              e(me, {
                                href: "https://t.me/pinkylittledog",
                                openInNewTab: !0,
                                children: e(b, {
                                  breakpoint: a,
                                  overrides: {
                                    RsYwHljm0: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: f(50),
                                        pixelHeight: 24,
                                        pixelWidth: 24,
                                        src: "https://framerusercontent.com/images/9mxNRYUXib8eH9oobsE6ih8ncSI.svg",
                                      },
                                    },
                                  },
                                  children: e(l, {
                                    as: "a",
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      loading: f(70),
                                      pixelHeight: 24,
                                      pixelWidth: 24,
                                      src: "https://framerusercontent.com/images/9mxNRYUXib8eH9oobsE6ih8ncSI.svg",
                                    },
                                    className: "framer-1t4hfq5 framer-lux5qc",
                                    whileHover: We,
                                  }),
                                }),
                              }),
                              e(me, {
                                href: "https://x.com/pinkylittledog",
                                openInNewTab: !0,
                                children: e(b, {
                                  breakpoint: a,
                                  overrides: {
                                    RsYwHljm0: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: f(52.5),
                                        pixelHeight: 271,
                                        pixelWidth: 300,
                                        src: "https://framerusercontent.com/images/AoXB6jz5044uYTvIyLmrM2HACE.svg",
                                      },
                                    },
                                  },
                                  children: e(l, {
                                    as: "a",
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      loading: f(72.5),
                                      pixelHeight: 271,
                                      pixelWidth: 300,
                                      src: "https://framerusercontent.com/images/AoXB6jz5044uYTvIyLmrM2HACE.svg",
                                    },
                                    className: "framer-r8jn7x framer-lux5qc",
                                    whileHover: We,
                                  }),
                                }),
                              }),
                            //   e(me, {
                            //     href: "https://dexscreener.com/solana/2fn2rf4e9xagghzlc9iuscfzgu2hfflyugzjarshmuij",
                            //     openInNewTab: !0,
                            //     children: e(b, {
                            //       breakpoint: a,
                            //       overrides: {
                            //         RsYwHljm0: {
                            //           background: {
                            //             alt: "",
                            //             fit: "fit",
                            //             loading: f(50),
                            //             pixelHeight: 319,
                            //             pixelWidth: 268,
                            //             positionX: "center",
                            //             positionY: "center",
                            //             src: "https://framerusercontent.com/images/R139R7gTHOXiOcVAcBiph9r0Y.png",
                            //           },
                            //         },
                            //       },
                            //       children: e(l, {
                            //         as: "a",
                            //         background: {
                            //           alt: "",
                            //           fit: "fit",
                            //           loading: f(70),
                            //           pixelHeight: 319,
                            //           pixelWidth: 268,
                            //           positionX: "center",
                            //           positionY: "center",
                            //           src: "https://framerusercontent.com/images/R139R7gTHOXiOcVAcBiph9r0Y.png",
                            //         },
                            //         className: "framer-1wutal framer-lux5qc",
                            //         whileHover: We,
                            //       }),
                            //     }),
                            //   }),
                              e(me, {
                                href: "https://pump.fun/JShSypKjK1Hv5PZxy4GUtkZrr2H7v8wDWBoPk2jpump",
                                openInNewTab: !0,
                                children: e(an, {
                                  __framer__loop: gn,
                                  __framer__loopEffectEnabled: !0,
                                  __framer__loopRepeatDelay: 0.2,
                                  __framer__loopRepeatType: "mirror",
                                  __framer__loopTransition: qt,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: "framer-1v6m1ed framer-lux5qc",
                                  "data-border": !0,
                                  style: { rotate: -5 },
                                  whileHover: ue,
                                  children: e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(c, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                          "--framer-font-family":
                                            '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                          "--framer-letter-spacing": "0.04em",
                                          "--framer-line-height": "16px",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "BUY",
                                      }),
                                    }),
                                    className: "framer-mw2zf3",
                                    fonts: ["CUSTOM;Anja Eliane accent Nornal"],
                                    transformTemplate: ae,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    d(Bt, {
                      __framer__loop: xn,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 0.2,
                      __framer__loopRepeatType: "mirror",
                      __framer__loopTransition: qt,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: "framer-7r6rxg",
                      children: [
                        e(b, {
                          breakpoint: a,
                          overrides: {
                            RsYwHljm0: {
                              background: {
                                alt: "",
                                fit: "fit",
                                loading: f(275),
                                pixelHeight: 511,
                                pixelWidth: 460,
                                positionX: "center",
                                positionY: "center",
                                src: "https://framerusercontent.com/images/PMA2p8cPn94cMlsdqNOipHrw.webp",
                              },
                            },
                          },
                          children: e(ft, {
                            animate: yn,
                            background: {
                              alt: "",
                              fit: "fit",
                              loading: f(357),
                              pixelHeight: 511,
                              pixelWidth: 460,
                              positionX: "center",
                              positionY: "center",
                              src: "https://framerusercontent.com/images/PMA2p8cPn94cMlsdqNOipHrw.webp",
                            },
                            className: "framer-v43ic1",
                            "data-framer-appear-id": "v43ic1",
                            initial: Dt,
                            optimized: !0,
                          }),
                        }),
                        e(b, {
                          breakpoint: a,
                          overrides: {
                            RsYwHljm0: {
                              background: {
                                alt: "",
                                fit: "fit",
                                loading: f(334),
                                pixelHeight: 511,
                                pixelWidth: 460,
                                positionX: "center",
                                positionY: "center",
                                src: "https://framerusercontent.com/images/OTtKbX08O5DUcommqTJeMJl3CVA.webp",
                              },
                            },
                          },
                          children: e(ft, {
                            animate: vn,
                            background: {
                              alt: "",
                              fit: "fit",
                              loading: f(416),
                              pixelHeight: 511,
                              pixelWidth: 460,
                              positionX: "center",
                              positionY: "center",
                              src: "https://framerusercontent.com/images/OTtKbX08O5DUcommqTJeMJl3CVA.webp",
                            },
                            className: "framer-e3hwy8",
                            "data-framer-appear-id": "e3hwy8",
                            "data-framer-name": "Shadow",
                            initial: Cn,
                            name: "Shadow",
                            optimized: !0,
                          }),
                        }),
                      ],
                    }),
                    e(b, {
                      breakpoint: a,
                      overrides: {
                        RsYwHljm0: {
                          background: {
                            alt: "",
                            fit: "fit",
                            loading: f(410),
                            pixelHeight: 360,
                            pixelWidth: 2454,
                            positionX: "center",
                            positionY: "center",
                            sizes: "1178px",
                            src: "https://framerusercontent.com/images/QNeqa2dN9vORUOcveI9idJXzBB8.png",
                            srcSet:
                              "https://framerusercontent.com/images/QNeqa2dN9vORUOcveI9idJXzBB8.png?scale-down-to=512 512w,https://framerusercontent.com/images/QNeqa2dN9vORUOcveI9idJXzBB8.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/QNeqa2dN9vORUOcveI9idJXzBB8.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/QNeqa2dN9vORUOcveI9idJXzBB8.png 2454w",
                          },
                        },
                      },
                      children: e(ft, {
                        animate: Kn,
                        background: {
                          alt: "",
                          fit: "fit",
                          loading: f(492),
                          pixelHeight: 360,
                          pixelWidth: 2454,
                          positionX: "center",
                          positionY: "center",
                          sizes: "1178px",
                          src: "https://framerusercontent.com/images/QNeqa2dN9vORUOcveI9idJXzBB8.png",
                          srcSet:
                            "https://framerusercontent.com/images/QNeqa2dN9vORUOcveI9idJXzBB8.png?scale-down-to=512 512w,https://framerusercontent.com/images/QNeqa2dN9vORUOcveI9idJXzBB8.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/QNeqa2dN9vORUOcveI9idJXzBB8.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/QNeqa2dN9vORUOcveI9idJXzBB8.png 2454w",
                        },
                        className: "framer-pzch76",
                        "data-framer-appear-id": "pzch76",
                        initial: Sn,
                        optimized: !0,
                      }),
                    }),
                    e("div", {
                      className: "framer-1gm1zzw",
                      "data-framer-name": "Logo-Section",
                      name: "Logo-Section",
                      children: e(b, {
                        breakpoint: a,
                        overrides: {
                          RsYwHljm0: {
                            background: {
                              alt: "",
                              fit: "fit",
                              loading: f(120),
                              pixelHeight: 280,
                              pixelWidth: 1e3,
                              positionX: "center",
                              positionY: "center",
                              src: "./1.png",
                            },
                          },
                        },
                        children: e(l, {
                          background: {
                            alt: "",
                            fit: "fit",
                            loading: f(145),
                            pixelHeight: 280,
                            pixelWidth: 1e3,
                            positionX: "center",
                            positionY: "center",
                            sizes: "1200px",
                            src: "./1.png",
                            srcSet:
                              "./1.png",
                          },
                          className: "framer-1o542rr",
                          whileHover: Ut,
                        }),
                      }),
                    }),
                    e(me, {
                      href: { hash: ":lsANaiIgk", webPageId: "augiA20Il" },
                      openInNewTab: !1,
                      smoothScroll: !0,
                      children: e("a", {
                        className: "framer-kzu95u framer-lux5qc",
                        "data-framer-name": "Descr",
                        name: "Descr",
                        children: e(p, {
                          __fromCanvasComponent: !0,
                          children: e(c, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                "--framer-font-family":
                                  '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                "--framer-font-size": "25px",
                                "--framer-letter-spacing": "0.19em",
                                "--framer-line-height": "17px",
                                "--framer-text-color": "rgb(255, 255, 255)",
                                "--framer-text-stroke-color": "rgb(39, 39, 39)",
                                "--framer-text-stroke-width": "1px",
                              },
                              children: "HOW TO BUY",
                            }),
                          }),
                          className: "framer-1igrc3q",
                          effect: zn,
                          fonts: ["CUSTOM;Anja Eliane accent Nornal"],
                          verticalAlignment: "top",
                          whileHover: We,
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                  ],
                }),
                e("div", {
                  className: "framer-5iypcc",
                  "data-border": !0,
                  children: e(D, {
                    children: e(q, {
                      className: "framer-o92oht-container",
                      children: e(ee, {
                        alignment: "center",
                        direction: "left",
                        fadeOptions: {
                          fadeAlpha: 0,
                          fadeContent: !0,
                          fadeInset: 0,
                          fadeWidth: 21,
                          overflow: !1,
                        },
                        gap: 10,
                        height: "100%",
                        hoverFactor: 0.4,
                        id: "HiO7wlrWT",
                        layoutId: "HiO7wlrWT",
                        padding: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                        paddingPerSide: !1,
                        paddingRight: 10,
                        paddingTop: 10,
                        sizingOptions: { heightType: !0, widthType: !0 },
                        slots: [
                          e(o.div, {
                            className: "framer-xo2k53",
                            children: e(p, {
                              __fromCanvasComponent: !0,
                              children: e(c, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                    "--framer-font-family":
                                      '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                    "--framer-font-size": "17px",
                                    "--framer-letter-spacing": "0.19em",
                                    "--framer-line-height": "17px",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "WELCOME TO THE PINKY UNIVERSE",
                                }),
                              }),
                              className: "framer-rwa0gu",
                              fonts: ["CUSTOM;Anja Eliane accent Nornal"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(o.div, {
                            className: "framer-m1os3c",
                            children: e(It, {
                              className: "framer-x8x9rx",
                              "data-framer-name": "paw",
                              fill: "black",
                              intrinsicHeight: 49,
                              intrinsicWidth: 49,
                              name: "paw",
                              svg: '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" width="49" height="49"><path fill-rule="evenodd" d="M39 36.8c2.1 3.3 3.1 5 3.1 6.8 0 3.5-2.7 5.2-6.2 5.2-1.6 0-2.6 0-5.1-1.3 0 0-1.7-1.5-5.5-1.3-3.9-.2-5.6 1.3-5.6 1.3-2.5 1.4-3.5 1.3-5 1.3-3.6 0-6.2-1.7-6.2-5.2 0-1.8 1-3.5 3-6.8 0 0 3.9-6.4 7.3-9.4 2.4-2.2 5.9-2.2 5.9-2.2h1.1s3.7 0 6 2.2c3.3 3.1 7.2 9.4 7.2 9.4zM9.9 10.4c0-5.7 3-10.4 6.7-10.4s6.7 4.7 6.7 10.4c0 5.8-3 10.5-6.7 10.5s-6.7-4.7-6.7-10.5zM1.7 25.6c-1.9-4.3-1.3-8.7 1.4-10 2.7-1.3 6.5 1.2 8.5 5.4 2 4.3 1.3 8.7-1.4 10-2.7 1.2-6.5-1.2-8.5-5.4zm23.8-15.2c0-5.7 3-10.4 6.7-10.4s6.7 4.7 6.7 10.4c0 5.8-3 10.5-6.7 10.5s-6.7-4.7-6.7-10.5zm21.6 15.2c-1.9 4.2-5.7 6.6-8.5 5.4-2.7-1.3-3.3-5.7-1.4-10 2-4.2 5.8-6.7 8.5-5.4 2.8 1.3 3.4 5.7 1.4 10z" style="fill:#fff"/></svg>',
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                        speed: 50,
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                d("div", {
                  className: "framer-g9n7ht",
                  id: J,
                  ref: K,
                  children: [
                    e("div", {
                      className: "framer-uljj5m",
                      "data-border": !0,
                      children: d("div", {
                        className: "framer-1vd5y5d",
                        children: [
                          e("div", {
                            className: "framer-12k1cnk",
                            children: e(b, {
                              breakpoint: a,
                              overrides: {
                                oIP8s9PSc: {
                                  children: e(c, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                        "--framer-font-family":
                                          '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                        "--framer-font-size": "18px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "16px",
                                        "--framer-text-stroke-color":
                                          "rgba(0, 0, 0, 1)",
                                        "--framer-text-stroke-width": "0px",
                                      },
                                      children:
                                        "CA: JShSypKjK1Hv5PZxy4GUtkZrr2H7v8wDWBoPk2jpump",
                                    }),
                                  }),
                                },
                                RsYwHljm0: {
                                  children: e(c, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                        "--framer-font-family":
                                          '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                        "--framer-font-size": "10px",
                                        "--framer-line-height": "16px",
                                        "--framer-text-stroke-color":
                                          "rgba(0, 0, 0, 1)",
                                        "--framer-text-stroke-width": "0px",
                                      },
                                      children:
                                        "CA: JShSypKjK1Hv5PZxy4GUtkZrr2H7v8wDWBoPk2jpump",
                                    }),
                                  }),
                                  transformTemplate: void 0,
                                  viewBox: "0 0 302 16",
                                },
                              },
                              children: e(p, {
                                __fromCanvasComponent: !0,
                                children: e(c, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                      "--framer-font-family":
                                        '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                      "--framer-font-size": "23px",
                                      "--framer-letter-spacing": "0.05em",
                                      "--framer-line-height": "16px",
                                      "--framer-text-stroke-color":
                                        "rgba(0, 0, 0, 1)",
                                      "--framer-text-stroke-width": "0px",
                                    },
                                    children:
                                      "CA: JShSypKjK1Hv5PZxy4GUtkZrr2H7v8wDWBoPk2jpump",
                                  }),
                                }),
                                className: "framer-1er5bnj",
                                fonts: ["CUSTOM;Anja Eliane accent Nornal"],
                                transformTemplate: ae,
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                          e(b, {
                            breakpoint: a,
                            overrides: { RsYwHljm0: { whileTap: Rn } },
                            children: e(on, {
                              className: "framer-cj0g6o",
                              "data-border": !0,
                              whileHover: ue,
                              children: e(b, {
                                breakpoint: a,
                                overrides: {
                                  RsYwHljm0: { transformTemplate: void 0 },
                                },
                                children: e(p, {
                                  __fromCanvasComponent: !0,
                                  children: e(c, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                        "--framer-font-family":
                                          '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                        "--framer-letter-spacing": "0.04em",
                                        "--framer-line-height": "16px",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: "COPY",
                                    }),
                                  }),
                                  className: "framer-1na5ro8",
                                  fonts: ["CUSTOM;Anja Eliane accent Nornal"],
                                  transformTemplate: ae,
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    d("div", {
                      className: "framer-17rlrwf",
                      children: [
                        e(b, {
                          breakpoint: a,
                          overrides: {
                            RsYwHljm0: {
                              background: {
                                alt: "",
                                fit: "fit",
                                loading: f(780),
                                pixelHeight: 123,
                                pixelWidth: 1022,
                                positionX: "center",
                                positionY: "center",
                                sizes: "90vw",
                                src: "https://framerusercontent.com/images/GwZjUj90yiuBj9m7r9jWm0sHkI.png",
                                srcSet:
                                  "https://framerusercontent.com/images/GwZjUj90yiuBj9m7r9jWm0sHkI.png?scale-down-to=512 512w,https://framerusercontent.com/images/GwZjUj90yiuBj9m7r9jWm0sHkI.png 1022w",
                              },
                            },
                          },
                          children: e(l, {
                            background: {
                              alt: "",
                              fit: "fit",
                              loading: f(878),
                              pixelHeight: 123,
                              pixelWidth: 1022,
                              positionX: "center",
                              positionY: "center",
                              sizes: "778px",
                              src: "https://framerusercontent.com/images/GwZjUj90yiuBj9m7r9jWm0sHkI.png",
                              srcSet:
                                "https://framerusercontent.com/images/GwZjUj90yiuBj9m7r9jWm0sHkI.png?scale-down-to=512 512w,https://framerusercontent.com/images/GwZjUj90yiuBj9m7r9jWm0sHkI.png 1022w",
                            },
                            className: "framer-64ttfl",
                          }),
                        }),
                        e("div", {
                          className: "framer-f77lpn",
                          children: e(me, {
                            href: "https://pump.fun/JShSypKjK1Hv5PZxy4GUtkZrr2H7v8wDWBoPk2jpump",
                            openInNewTab: !0,
                            children: e(o.a, {
                              className: "framer-d34loy framer-lux5qc",
                              "data-border": !0,
                              whileHover: En,
                              children: e(p, {
                                __fromCanvasComponent: !0,
                                children: e(c, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0FkaXJhIERpc3BsYXkgU1NpIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Adira Display SSi Regular", "Adira Display SSi Regular Placeholder", sans-serif',
                                      "--framer-font-size": "14px",
                                      "--framer-letter-spacing": "0.07em",
                                      "--framer-line-height": "16px",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                      "--framer-text-stroke-color":
                                        "rgba(0, 0, 0, 0)",
                                      "--framer-text-stroke-width": "1px",
                                    },
                                    children: "BUY $PINKY ON PUMP.FUN",
                                  }),
                                }),
                                className: "framer-1rjn27w",
                                fonts: ["CUSTOM;Adira Display SSi Regular"],
                                transformTemplate: ae,
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    d("div", {
                      className: "framer-fc7b",
                      children: [
                        P() &&
                          e(D, {
                            children: e(q, {
                              className:
                                "framer-4k2q7y-container hidden-72rtr7 hidden-im5r27",
                              children: e(_e, {
                                align: "center",
                                ariaLabel: "",
                                arrowObject: {
                                  arrowFill: "rgb(243, 151, 174)",
                                  arrowPadding: 0,
                                  arrowRadius: 40,
                                  arrowSize: 37,
                                  showMouseControls: !0,
                                },
                                axis: !0,
                                borderRadius: 0,
                                fadeObject: {
                                  fadeAlpha: 0,
                                  fadeContent: !1,
                                  fadeInset: 25,
                                  fadeTransition: {
                                    damping: 60,
                                    delay: 0,
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring",
                                  },
                                  fadeWidth: 8,
                                },
                                gap: 200,
                                height: "100%",
                                id: "s3fL4rzA4",
                                layoutId: "s3fL4rzA4",
                                padding: 10,
                                paddingBottom: 10,
                                paddingLeft: 10,
                                paddingPerSide: !1,
                                paddingRight: 10,
                                paddingTop: 10,
                                progressObject: {
                                  dotsActiveOpacity: 1,
                                  dotsBackground: "rgba(0, 0, 0, 0.2)",
                                  dotsBlur: 4,
                                  dotsFill: "rgb(255, 255, 255)",
                                  dotsGap: 10,
                                  dotsInset: 10,
                                  dotSize: 10,
                                  dotsOpacity: 0.5,
                                  dotsPadding: 10,
                                  dotsRadius: 50,
                                  showProgressDots: !1,
                                  showScrollbar: !1,
                                },
                                sizingObject: {
                                  heightInset: 0,
                                  heightRows: 2,
                                  heightType: "auto",
                                  widthColumns: 2,
                                  widthInset: 0,
                                  widthType: "auto",
                                },
                                slots: [
                                  d(o.div, {
                                    className: "framer-12rkywx",
                                    "data-border": !0,
                                    children: [
                                      d(o.div, {
                                        className: "framer-6b107g",
                                        children: [
                                          e(o.div, {
                                            className: "framer-qtlly1",
                                            "data-border": !0,
                                            whileHover: ue,
                                            children: e(p, {
                                              __fromCanvasComponent: !0,
                                              children: e(c, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                    "--framer-font-family":
                                                      '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "27px",
                                                    "--framer-letter-spacing":
                                                      "0.04em",
                                                    "--framer-line-height":
                                                      "16px",
                                                    "--framer-text-color":
                                                      "rgb(255, 255, 255)",
                                                  },
                                                  children: "1",
                                                }),
                                              }),
                                              className: "framer-3op15k",
                                              fonts: [
                                                "CUSTOM;Anja Eliane accent Nornal",
                                              ],
                                              transformTemplate: ae,
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(c, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                  "--framer-font-family":
                                                    '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                  "--framer-font-size": "27px",
                                                  "--framer-letter-spacing":
                                                    "0.04em",
                                                  "--framer-line-height":
                                                    "16px",
                                                },
                                                children: "Create Wallet",
                                              }),
                                            }),
                                            className: "framer-1kqdfp5",
                                            fonts: [
                                              "CUSTOM;Anja Eliane accent Nornal",
                                            ],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      e(o.div, {
                                        className: "framer-xr5sh7",
                                        children: e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(c, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                "--framer-font-family":
                                                  '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                "--framer-font-size": "14px",
                                                "--framer-line-height": "22px",
                                              },
                                              children:
                                                "Download Phantom or your wallet of choice from the app store or Google Play for free. Desktop users, download the Google Chrome extension by going to Phantom.",
                                            }),
                                          }),
                                          className: "framer-19kx5nm",
                                          fonts: [
                                            "CUSTOM;Anja Eliane accent Nornal",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  d(o.div, {
                                    className: "framer-1qhjkwb",
                                    "data-border": !0,
                                    children: [
                                      d(o.div, {
                                        className: "framer-1mrfj6x",
                                        children: [
                                          e(o.div, {
                                            className: "framer-189jk8w",
                                            "data-border": !0,
                                            whileHover: ue,
                                            children: e(p, {
                                              __fromCanvasComponent: !0,
                                              children: e(c, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                    "--framer-font-family":
                                                      '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "27px",
                                                    "--framer-letter-spacing":
                                                      "0.04em",
                                                    "--framer-line-height":
                                                      "16px",
                                                    "--framer-text-color":
                                                      "rgb(255, 255, 255)",
                                                  },
                                                  children: "2",
                                                }),
                                              }),
                                              className: "framer-1ahuq0c",
                                              fonts: [
                                                "CUSTOM;Anja Eliane accent Nornal",
                                              ],
                                              transformTemplate: ae,
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(c, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                  "--framer-font-family":
                                                    '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                  "--framer-font-size": "27px",
                                                  "--framer-letter-spacing":
                                                    "0.04em",
                                                  "--framer-line-height":
                                                    "16px",
                                                },
                                                children: "Get some SOL",
                                              }),
                                            }),
                                            className: "framer-1kfwayh",
                                            fonts: [
                                              "CUSTOM;Anja Eliane accent Nornal",
                                            ],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      e(o.div, {
                                        className: "framer-2c7v8",
                                        children: e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(c, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                "--framer-font-family":
                                                  '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                "--framer-font-size": "14px",
                                                "--framer-line-height": "22px",
                                              },
                                              children:
                                                "Have SOL in your wallet to switch to $PINKY on pump.fun. If you don’t have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.",
                                            }),
                                          }),
                                          className: "framer-1lsod3j",
                                          fonts: [
                                            "CUSTOM;Anja Eliane accent Nornal",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  d(o.div, {
                                    className: "framer-1392mai",
                                    "data-border": !0,
                                    children: [
                                      d(o.div, {
                                        className: "framer-1j6ek4p",
                                        children: [
                                          e(o.div, {
                                            className: "framer-m3xe9n",
                                            "data-border": !0,
                                            whileHover: ue,
                                            children: e(p, {
                                              __fromCanvasComponent: !0,
                                              children: e(c, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                    "--framer-font-family":
                                                      '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "27px",
                                                    "--framer-letter-spacing":
                                                      "0.04em",
                                                    "--framer-line-height":
                                                      "16px",
                                                    "--framer-text-color":
                                                      "rgb(255, 255, 255)",
                                                  },
                                                  children: "3",
                                                }),
                                              }),
                                              className: "framer-1akkcj4",
                                              fonts: [
                                                "CUSTOM;Anja Eliane accent Nornal",
                                              ],
                                              transformTemplate: ae,
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(c, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                  "--framer-font-family":
                                                    '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                  "--framer-font-size": "27px",
                                                  "--framer-letter-spacing":
                                                    "0.04em",
                                                  "--framer-line-height":
                                                    "16px",
                                                },
                                                children: "",
                                              }),
                                            }),
                                            className: "framer-p3i1rq",
                                            fonts: [
                                              "CUSTOM;Anja Eliane accent Nornal",
                                            ],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      e(o.div, {
                                        className: "framer-5ljws9",
                                        children: e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(c, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                "--framer-font-family":
                                                  '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                "--framer-font-size": "14px",
                                                "--framer-line-height": "22px",
                                              },
                                              children:
                                                "Open pump.fun. Connect your wallet. Paste the $PINKY token address. When Phantom prompts you for a wallet signature, sign.",
                                            }),
                                          }),
                                          className: "framer-fuaww8",
                                          fonts: [
                                            "CUSTOM;Anja Eliane accent Nornal",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  d(o.div, {
                                    className: "framer-weoxnm",
                                    "data-border": !0,
                                    children: [
                                      d(o.div, {
                                        className: "framer-1uoivbf",
                                        children: [
                                          e(o.div, {
                                            className: "framer-13wzuzm",
                                            "data-border": !0,
                                            whileHover: ue,
                                            children: e(p, {
                                              __fromCanvasComponent: !0,
                                              children: e(c, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                    "--framer-font-family":
                                                      '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "27px",
                                                    "--framer-letter-spacing":
                                                      "0.04em",
                                                    "--framer-line-height":
                                                      "16px",
                                                    "--framer-text-color":
                                                      "rgb(255, 255, 255)",
                                                  },
                                                  children: "4",
                                                }),
                                              }),
                                              className: "framer-dq4jti",
                                              fonts: [
                                                "CUSTOM;Anja Eliane accent Nornal",
                                              ],
                                              transformTemplate: ae,
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(c, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                  "--framer-font-family":
                                                    '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                  "--framer-font-size": "27px",
                                                  "--framer-letter-spacing":
                                                    "0.04em",
                                                  "--framer-line-height":
                                                    "16px",
                                                },
                                                children: "SWAP FOR PINKY",
                                              }),
                                            }),
                                            className: "framer-4hko92",
                                            fonts: [
                                              "CUSTOM;Anja Eliane accent Nornal",
                                            ],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      e(o.div, {
                                        className: "framer-suaay6",
                                        children: e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(c, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                "--framer-font-family":
                                                  '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                "--framer-font-size": "14px",
                                                "--framer-line-height": "22px",
                                              },
                                              children:
                                                "Swap SOL for $PINKY. We have Zero taxes so you don\u2019t need to worry about buying with a specific slippage.",
                                            }),
                                          }),
                                          className: "framer-1xvufuf",
                                          fonts: [
                                            "CUSTOM;Anja Eliane accent Nornal",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                                snapObject: {
                                  fluid: !1,
                                  snap: !0,
                                  snapEdge: "center",
                                },
                                style: { height: "100%", width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                        re() &&
                          e(D, {
                            children: e(q, {
                              className:
                                "framer-1pu9eb4-container hidden-6nb76n",
                              children: e(_e, {
                                align: "center",
                                ariaLabel: "",
                                arrowObject: {
                                  arrowFill: "rgb(243, 151, 174)",
                                  arrowPadding: 0,
                                  arrowRadius: 40,
                                  arrowSize: 37,
                                  showMouseControls: !0,
                                },
                                axis: !0,
                                borderRadius: 0,
                                fadeObject: {
                                  fadeAlpha: 0,
                                  fadeContent: !1,
                                  fadeInset: 25,
                                  fadeTransition: {
                                    damping: 60,
                                    delay: 0,
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring",
                                  },
                                  fadeWidth: 8,
                                },
                                gap: 200,
                                height: "100%",
                                id: "ygUl96sI1",
                                layoutId: "ygUl96sI1",
                                padding: 10,
                                paddingBottom: 10,
                                paddingLeft: 10,
                                paddingPerSide: !1,
                                paddingRight: 10,
                                paddingTop: 10,
                                progressObject: {
                                  dotsActiveOpacity: 1,
                                  dotsBackground: "rgba(0, 0, 0, 0.2)",
                                  dotsBlur: 4,
                                  dotsFill: "rgb(255, 255, 255)",
                                  dotsGap: 10,
                                  dotsInset: 10,
                                  dotSize: 10,
                                  dotsOpacity: 0.5,
                                  dotsPadding: 10,
                                  dotsRadius: 50,
                                  showProgressDots: !1,
                                  showScrollbar: !1,
                                },
                                sizingObject: {
                                  heightInset: 0,
                                  heightRows: 2,
                                  heightType: "auto",
                                  widthColumns: 2,
                                  widthInset: 0,
                                  widthType: "auto",
                                },
                                slots: [
                                  d(o.div, {
                                    className: "framer-19rwo4u",
                                    "data-border": !0,
                                    children: [
                                      d(o.div, {
                                        className: "framer-94qycy",
                                        children: [
                                          e(o.div, {
                                            className: "framer-1n5qgeb",
                                            "data-border": !0,
                                            whileHover: ue,
                                            children: e(p, {
                                              __fromCanvasComponent: !0,
                                              children: e(c, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                    "--framer-font-family":
                                                      '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "27px",
                                                    "--framer-letter-spacing":
                                                      "0.04em",
                                                    "--framer-line-height":
                                                      "16px",
                                                    "--framer-text-color":
                                                      "rgb(255, 255, 255)",
                                                  },
                                                  children: "1",
                                                }),
                                              }),
                                              className: "framer-1uafiod",
                                              fonts: [
                                                "CUSTOM;Anja Eliane accent Nornal",
                                              ],
                                              transformTemplate: ae,
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(c, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                  "--framer-font-family":
                                                    '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                  "--framer-font-size": "27px",
                                                  "--framer-letter-spacing":
                                                    "0.04em",
                                                  "--framer-line-height":
                                                    "16px",
                                                },
                                                children: "Create Wallet",
                                              }),
                                            }),
                                            className: "framer-oy6q2e",
                                            fonts: [
                                              "CUSTOM;Anja Eliane accent Nornal",
                                            ],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      e(o.div, {
                                        className: "framer-x39zow",
                                        children: e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(c, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                "--framer-font-family":
                                                  '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                "--framer-font-size": "18px",
                                                "--framer-line-height": "22px",
                                              },
                                              children:
                                                "Download Phantom or your wallet of choice from the app store or Google Play for free. Desktop users, download the Google Chrome extension by going to Phantom.",
                                            }),
                                          }),
                                          className: "framer-9qjotx",
                                          fonts: [
                                            "CUSTOM;Anja Eliane accent Nornal",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  d(o.div, {
                                    className: "framer-wo1o5r",
                                    "data-border": !0,
                                    children: [
                                      d(o.div, {
                                        className: "framer-1hhclpx",
                                        children: [
                                          e(o.div, {
                                            className: "framer-1iqyxc5",
                                            "data-border": !0,
                                            whileHover: ue,
                                            children: e(p, {
                                              __fromCanvasComponent: !0,
                                              children: e(c, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                    "--framer-font-family":
                                                      '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "27px",
                                                    "--framer-letter-spacing":
                                                      "0.04em",
                                                    "--framer-line-height":
                                                      "16px",
                                                    "--framer-text-color":
                                                      "rgb(255, 255, 255)",
                                                  },
                                                  children: "2",
                                                }),
                                              }),
                                              className: "framer-18dbjdz",
                                              fonts: [
                                                "CUSTOM;Anja Eliane accent Nornal",
                                              ],
                                              transformTemplate: ae,
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(c, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                  "--framer-font-family":
                                                    '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                  "--framer-font-size": "27px",
                                                  "--framer-letter-spacing":
                                                    "0.04em",
                                                  "--framer-line-height":
                                                    "16px",
                                                },
                                                children: "Get some SOL",
                                              }),
                                            }),
                                            className: "framer-1g2iizq",
                                            fonts: [
                                              "CUSTOM;Anja Eliane accent Nornal",
                                            ],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      e(o.div, {
                                        className: "framer-o6hgtn",
                                        children: e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(c, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                "--framer-font-family":
                                                  '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                "--framer-font-size": "18px",
                                                "--framer-line-height": "22px",
                                              },
                                              children:
                                                "Have SOL in your wallet to switch to $PINKY on pump.fun. If you don’t have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.",
                                            }),
                                          }),
                                          className: "framer-1ga373m",
                                          fonts: [
                                            "CUSTOM;Anja Eliane accent Nornal",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  d(o.div, {
                                    className: "framer-1fk7mrl",
                                    "data-border": !0,
                                    children: [
                                      d(o.div, {
                                        className: "framer-qjeg6p",
                                        children: [
                                          e(o.div, {
                                            className: "framer-1e8wbfn",
                                            "data-border": !0,
                                            whileHover: ue,
                                            children: e(p, {
                                              __fromCanvasComponent: !0,
                                              children: e(c, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                    "--framer-font-family":
                                                      '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "27px",
                                                    "--framer-letter-spacing":
                                                      "0.04em",
                                                    "--framer-line-height":
                                                      "16px",
                                                    "--framer-text-color":
                                                      "rgb(255, 255, 255)",
                                                  },
                                                  children: "3",
                                                }),
                                              }),
                                              className: "framer-1mp4b46",
                                              fonts: [
                                                "CUSTOM;Anja Eliane accent Nornal",
                                              ],
                                              transformTemplate: ae,
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(c, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                  "--framer-font-family":
                                                    '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                  "--framer-font-size": "27px",
                                                  "--framer-letter-spacing":
                                                    "0.04em",
                                                  "--framer-line-height":
                                                    "16px",
                                                },
                                                children: "Go to pump.fun",
                                              }),
                                            }),
                                            className: "framer-vuua3k",
                                            fonts: [
                                              "CUSTOM;Anja Eliane accent Nornal",
                                            ],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      e(o.div, {
                                        className: "framer-1mkdcog",
                                        children: e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(c, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                "--framer-font-family":
                                                  '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                "--framer-font-size": "18px",
                                                "--framer-line-height": "22px",
                                              },
                                              children:
                                                "Open pump.fun. Connect your wallet. Paste the $PINKY token address. When Phantom prompts you for a wallet signature, sign.",
                                            }),
                                          }),
                                          className: "framer-lam27r",
                                          fonts: [
                                            "CUSTOM;Anja Eliane accent Nornal",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  d(o.div, {
                                    className: "framer-10s37ui",
                                    "data-border": !0,
                                    children: [
                                      d(o.div, {
                                        className: "framer-1kjeiq6",
                                        children: [
                                          e(o.div, {
                                            className: "framer-u9owd4",
                                            "data-border": !0,
                                            whileHover: ue,
                                            children: e(p, {
                                              __fromCanvasComponent: !0,
                                              children: e(c, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                    "--framer-font-family":
                                                      '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "27px",
                                                    "--framer-letter-spacing":
                                                      "0.04em",
                                                    "--framer-line-height":
                                                      "16px",
                                                    "--framer-text-color":
                                                      "rgb(255, 255, 255)",
                                                  },
                                                  children: "4",
                                                }),
                                              }),
                                              className: "framer-r659u5",
                                              fonts: [
                                                "CUSTOM;Anja Eliane accent Nornal",
                                              ],
                                              transformTemplate: ae,
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(c, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                  "--framer-font-family":
                                                    '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                  "--framer-font-size": "27px",
                                                  "--framer-letter-spacing":
                                                    "0.04em",
                                                  "--framer-line-height":
                                                    "16px",
                                                },
                                                children: "SWAP FOR PINKY",
                                              }),
                                            }),
                                            className: "framer-1ojzbqv",
                                            fonts: [
                                              "CUSTOM;Anja Eliane accent Nornal",
                                            ],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      e(o.div, {
                                        className: "framer-1230z91",
                                        children: e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(c, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                                "--framer-font-family":
                                                  '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                                "--framer-font-size": "18px",
                                                "--framer-line-height": "22px",
                                              },
                                              children:
                                                "Swap SOL for $PINKY. We have Zero taxes so you don\u2019t need to worry about buying with a specific slippage.",
                                            }),
                                          }),
                                          className: "framer-1qz4dv4",
                                          fonts: [
                                            "CUSTOM;Anja Eliane accent Nornal",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                                snapObject: {
                                  fluid: !1,
                                  snap: !0,
                                  snapEdge: "center",
                                },
                                style: { height: "100%", width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                      ],
                    }),
                    e(D, {
                      children: e(q, {
                        className: "framer-ap9ul-container",
                        style: { rotate: -16 },
                        children: e(ee, {
                          alignment: "center",
                          direction: "right",
                          fadeOptions: {
                            fadeAlpha: 0,
                            fadeContent: !1,
                            fadeInset: 0,
                            fadeWidth: 25,
                            overflow: !1,
                          },
                          gap: 3e3,
                          height: "100%",
                          hoverFactor: 1,
                          id: "ZNSeZOWfd",
                          layoutId: "ZNSeZOWfd",
                          padding: 10,
                          paddingBottom: 10,
                          paddingLeft: 10,
                          paddingPerSide: !1,
                          paddingRight: 10,
                          paddingTop: 10,
                          sizingOptions: { heightType: !0, widthType: !0 },
                          slots: [
                            e(l, {
                              background: {
                                alt: "",
                                fit: "fit",
                                intrinsicHeight: 360,
                                intrinsicWidth: 683,
                                pixelHeight: 512,
                                pixelWidth: 512,
                                positionX: "center",
                                positionY: "center",
                                src: "https://framerusercontent.com/images/ilcPO8dFtlhlEGNt7GiCAhx3qY.webp",
                              },
                              className: "framer-1y9n1zc",
                              "data-framer-name": "rocket",
                              name: "rocket",
                              style: { rotate: 33 },
                            }),
                          ],
                          speed: 100,
                          style: { height: "100%", width: "100%" },
                          width: "100%",
                        }),
                      }),
                    }),
                    e(b, {
                      breakpoint: a,
                      overrides: {
                        oIP8s9PSc: {
                          background: {
                            alt: "",
                            fit: "fit",
                            loading: f(1293),
                            pixelHeight: 1192,
                            pixelWidth: 3391,
                            positionX: "center",
                            positionY: "bottom",
                            sizes: "calc(100vw + 221px)",
                            src: "https://framerusercontent.com/images/vWOG9OHA6qZl1vgPUIBEhrgxqY.png",
                            srcSet:
                              "https://framerusercontent.com/images/vWOG9OHA6qZl1vgPUIBEhrgxqY.png?scale-down-to=512 512w,https://framerusercontent.com/images/vWOG9OHA6qZl1vgPUIBEhrgxqY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/vWOG9OHA6qZl1vgPUIBEhrgxqY.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/vWOG9OHA6qZl1vgPUIBEhrgxqY.png 3391w",
                          },
                        },
                        RsYwHljm0: {
                          background: {
                            alt: "",
                            fit: "fit",
                            loading: f(1177),
                            pixelHeight: 1192,
                            pixelWidth: 3391,
                            positionX: "center",
                            positionY: "bottom",
                            sizes: "calc(100vw + 800px)",
                            src: "https://framerusercontent.com/images/vWOG9OHA6qZl1vgPUIBEhrgxqY.png",
                            srcSet:
                              "https://framerusercontent.com/images/vWOG9OHA6qZl1vgPUIBEhrgxqY.png?scale-down-to=512 512w,https://framerusercontent.com/images/vWOG9OHA6qZl1vgPUIBEhrgxqY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/vWOG9OHA6qZl1vgPUIBEhrgxqY.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/vWOG9OHA6qZl1vgPUIBEhrgxqY.png 3391w",
                          },
                        },
                      },
                      children: e(Wr, {
                        __framer__animate: { transition: Gt },
                        __framer__animateOnce: !0,
                        __framer__enter: In,
                        __framer__exit: Tn,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                          alt: "",
                          fit: "fit",
                          loading: f(1373),
                          pixelHeight: 1192,
                          pixelWidth: 3391,
                          positionX: "center",
                          positionY: "bottom",
                          sizes: "calc(100vw + 221px)",
                          src: "https://framerusercontent.com/images/vWOG9OHA6qZl1vgPUIBEhrgxqY.png",
                          srcSet:
                            "https://framerusercontent.com/images/vWOG9OHA6qZl1vgPUIBEhrgxqY.png?scale-down-to=512 512w,https://framerusercontent.com/images/vWOG9OHA6qZl1vgPUIBEhrgxqY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/vWOG9OHA6qZl1vgPUIBEhrgxqY.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/vWOG9OHA6qZl1vgPUIBEhrgxqY.png 3391w",
                        },
                        className: "framer-g7gsri",
                      }),
                    }),
                    e(D, {
                      children: e(q, {
                        className: "framer-1fen7z-container",
                        children: e(ee, {
                          alignment: "center",
                          direction: "left",
                          fadeOptions: {
                            fadeAlpha: 0,
                            fadeContent: !0,
                            fadeInset: 0,
                            fadeWidth: 25,
                            overflow: !1,
                          },
                          gap: 0,
                          height: "100%",
                          hoverFactor: 1,
                          id: "lKDOMxQjW",
                          layoutId: "lKDOMxQjW",
                          padding: 10,
                          paddingBottom: 10,
                          paddingLeft: 10,
                          paddingPerSide: !1,
                          paddingRight: 10,
                          paddingTop: 10,
                          sizingOptions: { heightType: !0, widthType: !0 },
                          slots: [
                            e(l, {
                              background: {
                                alt: "",
                                fit: "fit",
                                pixelHeight: 1090,
                                pixelWidth: 2500,
                                positionX: "center",
                                positionY: "center",
                                sizes: "1896px",
                                src: "https://framerusercontent.com/images/22ynecu2TAa5s1pm6rOGLzmw.png",
                                srcSet:
                                  "https://framerusercontent.com/images/22ynecu2TAa5s1pm6rOGLzmw.png?scale-down-to=512 512w,https://framerusercontent.com/images/22ynecu2TAa5s1pm6rOGLzmw.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/22ynecu2TAa5s1pm6rOGLzmw.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/22ynecu2TAa5s1pm6rOGLzmw.png 2500w",
                              },
                              className: "framer-1jno1gz",
                            }),
                          ],
                          speed: 100,
                          style: { height: "100%", width: "100%" },
                          width: "100%",
                        }),
                      }),
                    }),
                  ],
                }),
                e("div", {
                  className: "framer-bkmtd9",
                  "data-border": !0,
                  children: e(D, {
                    children: e(q, {
                      className: "framer-hcefkl-container",
                      children: e(ee, {
                        alignment: "center",
                        direction: "left",
                        fadeOptions: {
                          fadeAlpha: 0,
                          fadeContent: !0,
                          fadeInset: 0,
                          fadeWidth: 25,
                          overflow: !1,
                        },
                        gap: 10,
                        height: "100%",
                        hoverFactor: 1,
                        id: "sZqjCmcO6",
                        layoutId: "sZqjCmcO6",
                        padding: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                        paddingPerSide: !1,
                        paddingRight: 10,
                        paddingTop: 10,
                        sizingOptions: { heightType: !0, widthType: !0 },
                        slots: [
                          e(o.div, {
                            className: "framer-18xvah6",
                            children: e(p, {
                              __fromCanvasComponent: !0,
                              children: e(c, {
                                children: d("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                    "--framer-font-family":
                                      '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                    "--framer-font-size": "17px",
                                    "--framer-letter-spacing": "0.19em",
                                    "--framer-line-height": "17px",
                                  },
                                  children: [
                                    e("span", {
                                      style: {
                                        "--framer-text-color":
                                          "rgb(255, 154, 177)",
                                      },
                                      children: "PINKY",
                                    }),
                                    " UNIVERSE",
                                  ],
                                }),
                              }),
                              className: "framer-gk3q6m",
                              fonts: ["CUSTOM;Anja Eliane accent Nornal"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                        speed: 100,
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                d("div", {
                  className: "framer-vcosx7",
                  children: [
                    e(b, {
                      breakpoint: a,
                      overrides: {
                        oIP8s9PSc: {
                          background: {
                            alt: "",
                            fit: "fit",
                            loading: f(2043),
                            pixelHeight: 280,
                            pixelWidth: 2208,
                            positionX: "center",
                            positionY: "center",
                            sizes: "100vw",
                            src: "https://framerusercontent.com/images/XNOLrnXs7yuCGxBgrokpDf8A.png",
                            srcSet:
                              "https://framerusercontent.com/images/XNOLrnXs7yuCGxBgrokpDf8A.png?scale-down-to=512 512w,https://framerusercontent.com/images/XNOLrnXs7yuCGxBgrokpDf8A.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/XNOLrnXs7yuCGxBgrokpDf8A.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/XNOLrnXs7yuCGxBgrokpDf8A.png 2208w",
                          },
                        },
                        RsYwHljm0: {
                          background: {
                            alt: "",
                            fit: "fit",
                            loading: f(1666),
                            pixelHeight: 280,
                            pixelWidth: 2208,
                            positionX: "center",
                            positionY: "center",
                            sizes: "90vw",
                            src: "https://framerusercontent.com/images/XNOLrnXs7yuCGxBgrokpDf8A.png",
                            srcSet:
                              "https://framerusercontent.com/images/XNOLrnXs7yuCGxBgrokpDf8A.png?scale-down-to=512 512w,https://framerusercontent.com/images/XNOLrnXs7yuCGxBgrokpDf8A.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/XNOLrnXs7yuCGxBgrokpDf8A.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/XNOLrnXs7yuCGxBgrokpDf8A.png 2208w",
                          },
                        },
                      },
                      children: e(Wr, {
                        __framer__spring: {
                          damping: 38,
                          delay: 0,
                          duration: 0.3,
                          ease: [0.44, 0, 0.56, 1],
                          mass: 0.5,
                          stiffness: 78,
                          type: "spring",
                        },
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [
                          {
                            target: {
                              opacity: 1,
                              rotate: 0,
                              rotateX: 0,
                              rotateY: 0,
                              scale: 1,
                              skewX: 0,
                              skewY: 0,
                              x: 0,
                              y: -400,
                            },
                          },
                          {
                            target: {
                              opacity: 1,
                              rotate: 0,
                              rotateX: 0,
                              rotateY: 0,
                              scale: 1,
                              skewX: 0,
                              skewY: 0,
                              x: 0,
                              y: 0,
                            },
                          },
                        ],
                        __framer__transformTrigger: "onInView",
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                          alt: "",
                          fit: "fit",
                          loading: f(2123),
                          pixelHeight: 280,
                          pixelWidth: 2208,
                          positionX: "center",
                          positionY: "center",
                          sizes: "100vw",
                          src: "https://framerusercontent.com/images/XNOLrnXs7yuCGxBgrokpDf8A.png",
                          srcSet:
                            "https://framerusercontent.com/images/XNOLrnXs7yuCGxBgrokpDf8A.png?scale-down-to=512 512w,https://framerusercontent.com/images/XNOLrnXs7yuCGxBgrokpDf8A.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/XNOLrnXs7yuCGxBgrokpDf8A.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/XNOLrnXs7yuCGxBgrokpDf8A.png 2208w",
                        },
                        className: "framer-sk3b6a",
                      }),
                    }),
                    d("div", {
                      className: "framer-10iw2jx",
                      children: [
                        d("div", {
                          className: "framer-1hhjn01",
                          "data-border": !0,
                          children: [
                            e(b, {
                              breakpoint: a,
                              overrides: {
                                RsYwHljm0: {
                                  children: e(c, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0FkaXJhIERpc3BsYXkgU1NpIFJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Adira Display SSi Regular", "Adira Display SSi Regular Placeholder", sans-serif',
                                        "--framer-font-size": "28px",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(255, 154, 177)",
                                        "--framer-text-stroke-color":
                                          "rgba(0, 0, 0, 1)",
                                        "--framer-text-stroke-width": "0px",
                                      },
                                      children: "Helloof! It's me, PINKY!",
                                    }),
                                  }),
                                },
                              },
                              children: e(p, {
                                __fromCanvasComponent: !0,
                                children: e(c, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0FkaXJhIERpc3BsYXkgU1NpIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Adira Display SSi Regular", "Adira Display SSi Regular Placeholder", sans-serif',
                                      "--framer-font-size": "33px",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(255, 154, 177)",
                                      "--framer-text-stroke-color":
                                        "rgba(0, 0, 0, 1)",
                                      "--framer-text-stroke-width": "0px",
                                    },
                                    children: "Helloof! It's me, PINKY!",
                                  }),
                                }),
                                className: "framer-v26def",
                                effect: Pn,
                                fonts: ["CUSTOM;Adira Display SSi Regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            e(b, {
                              breakpoint: a,
                              overrides: {
                                RsYwHljm0: {
                                  children: e(c, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0FkaXJhIERpc3BsYXkgU1NpIFJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Adira Display SSi Regular", "Adira Display SSi Regular Placeholder", sans-serif',
                                        "--framer-font-size": "19px",
                                      },
                                      children:
                                        "Welcome to my world! I\u2019m a cute little dog with soft PINKY fur and a heart full of excitement. My tail is always wagging with happiness, but don't let the cuteness fool you, i've got a fierce side too! Whether you're here for fun, or something a little wilder, I'm your loyal companion in the brightest universe you've ever seen.",
                                    }),
                                  }),
                                },
                              },
                              children: e(p, {
                                __fromCanvasComponent: !0,
                                children: e(c, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0FkaXJhIERpc3BsYXkgU1NpIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Adira Display SSi Regular", "Adira Display SSi Regular Placeholder", sans-serif',
                                      "--framer-font-size": "23px",
                                    },
                                    children:
                                      "Welcome to my world! I\u2019m a cute little dog with soft PINKY fur and a heart full of excitement. My tail is always wagging with happiness, but don't let the cuteness fool you, i've got a fierce side too! Whether you're here for fun, or something a little wilder, I'm your loyal companion in the brightest universe you've ever seen.",
                                  }),
                                }),
                                className: "framer-5h5u83",
                                effect: Yn,
                                fonts: ["CUSTOM;Adira Display SSi Regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        e("div", {
                          className: "framer-1nic8vz",
                          children: e(me, {
                            href: "https://t.me/pinkylittledog",
                            openInNewTab: !0,
                            children: e(o.a, {
                              className: "framer-m5j3tl framer-lux5qc",
                              "data-border": !0,
                              whileHover: Hn,
                              children: e(p, {
                                __fromCanvasComponent: !0,
                                children: e(c, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0FkaXJhIERpc3BsYXkgU1NpIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Adira Display SSi Regular", "Adira Display SSi Regular Placeholder", sans-serif',
                                      "--framer-font-size": "14px",
                                      "--framer-letter-spacing": "0.07em",
                                      "--framer-line-height": "16px",
                                      "--framer-text-stroke-color":
                                        "rgba(0, 0, 0, 0)",
                                      "--framer-text-stroke-width": "1px",
                                    },
                                    children: "ENTER THE PINKY UNIVERSE",
                                  }),
                                }),
                                className: "framer-6t7nrh",
                                fonts: ["CUSTOM;Adira Display SSi Regular"],
                                transformTemplate: ae,
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    e(D, {
                      children: e(q, {
                        className: "framer-d9gbzw-container",
                        style: { rotate: 5 },
                        children: e(b, {
                          breakpoint: a,
                          overrides: { RsYwHljm0: { gap: 900 } },
                          children: e(ee, {
                            alignment: "center",
                            direction: "left",
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 1500,
                            height: "100%",
                            hoverFactor: 1,
                            id: "iQgGBllRd",
                            layoutId: "iQgGBllRd",
                            padding: 10,
                            paddingBottom: 10,
                            paddingLeft: 10,
                            paddingPerSide: !1,
                            paddingRight: 10,
                            paddingTop: 10,
                            sizingOptions: { heightType: !0, widthType: !0 },
                            slots: [
                              e(o.div, {
                                className: "framer-u0ijeg",
                                children: e(l, {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    pixelHeight: 2048,
                                    pixelWidth: 2048,
                                    positionX: "center",
                                    positionY: "center",
                                    sizes: "419px",
                                    src: "https://framerusercontent.com/images/XQIerYY5JicR7dCzyXwIAXpuxPg.png?lossless=1",
                                    srcSet:
                                      "https://framerusercontent.com/images/XQIerYY5JicR7dCzyXwIAXpuxPg.png?scale-down-to=512&lossless=1 512w,https://framerusercontent.com/images/XQIerYY5JicR7dCzyXwIAXpuxPg.png?scale-down-to=1024&lossless=1 1024w,https://framerusercontent.com/images/XQIerYY5JicR7dCzyXwIAXpuxPg.png?lossless=1 2048w",
                                  },
                                  className: "framer-1jg27ys",
                                  style: { rotate: 16 },
                                }),
                              }),
                            ],
                            speed: 75,
                            style: { height: "100%", width: "100%" },
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(b, {
                      breakpoint: a,
                      overrides: {
                        RsYwHljm0: {
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: -170,
                              },
                            },
                          ],
                        },
                      },
                      children: e(Bt, {
                        __framer__spring: {
                          damping: 5,
                          delay: 0,
                          duration: 0.3,
                          ease: [0.44, 0, 0.56, 1],
                          mass: 0.9,
                          stiffness: 20,
                          type: "spring",
                        },
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [
                          {
                            target: {
                              opacity: 1,
                              rotate: 0,
                              rotateX: 0,
                              rotateY: 0,
                              scale: 1,
                              skewX: 0,
                              skewY: 0,
                              x: 0,
                              y: 0,
                            },
                          },
                          {
                            target: {
                              opacity: 1,
                              rotate: 0,
                              rotateX: 0,
                              rotateY: 0,
                              scale: 1,
                              skewX: 0,
                              skewY: 0,
                              x: 0,
                              y: -250,
                            },
                          },
                        ],
                        __framer__transformTrigger: "onInView",
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-1fyrbrt",
                        children: e(b, {
                          breakpoint: a,
                          overrides: {
                            oIP8s9PSc: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1723,
                                intrinsicWidth: 1684,
                                loading: f(1793),
                                pixelHeight: 1723,
                                pixelWidth: 1684,
                                sizes: "526px",
                                src: "https://framerusercontent.com/images/C0vDmeF34lZiNTJawIzWubvTUs.png",
                                srcSet:
                                  "https://framerusercontent.com/images/C0vDmeF34lZiNTJawIzWubvTUs.png?scale-down-to=1024 1000w,https://framerusercontent.com/images/C0vDmeF34lZiNTJawIzWubvTUs.png 1684w",
                              },
                            },
                            RsYwHljm0: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1723,
                                intrinsicWidth: 1684,
                                loading: f(1496),
                                pixelHeight: 1723,
                                pixelWidth: 1684,
                                sizes: "346px",
                                src: "https://framerusercontent.com/images/C0vDmeF34lZiNTJawIzWubvTUs.png",
                                srcSet:
                                  "https://framerusercontent.com/images/C0vDmeF34lZiNTJawIzWubvTUs.png?scale-down-to=1024 1000w,https://framerusercontent.com/images/C0vDmeF34lZiNTJawIzWubvTUs.png 1684w",
                              },
                              transformTemplate: Mn,
                            },
                          },
                          children: e(l, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 1723,
                              intrinsicWidth: 1684,
                              loading: f(1873),
                              pixelHeight: 1723,
                              pixelWidth: 1684,
                              sizes: "526px",
                              src: "https://framerusercontent.com/images/C0vDmeF34lZiNTJawIzWubvTUs.png",
                              srcSet:
                                "https://framerusercontent.com/images/C0vDmeF34lZiNTJawIzWubvTUs.png?scale-down-to=1024 1000w,https://framerusercontent.com/images/C0vDmeF34lZiNTJawIzWubvTUs.png 1684w",
                            },
                            className: "framer-1g3nlhc",
                            "data-framer-name": "pinkheadnewhjead",
                            name: "pinkheadnewhjead",
                          }),
                        }),
                      }),
                    }),
                    e(D, {
                      children: e(q, {
                        className: "framer-7bkbso-container",
                        children: e(ee, {
                          alignment: "center",
                          direction: "left",
                          fadeOptions: {
                            fadeAlpha: 0,
                            fadeContent: !0,
                            fadeInset: 0,
                            fadeWidth: 25,
                            overflow: !1,
                          },
                          gap: 0,
                          height: "100%",
                          hoverFactor: 1,
                          id: "iiR3Ee0zK",
                          layoutId: "iiR3Ee0zK",
                          padding: 10,
                          paddingBottom: 10,
                          paddingLeft: 10,
                          paddingPerSide: !1,
                          paddingRight: 10,
                          paddingTop: 10,
                          sizingOptions: { heightType: !0, widthType: !0 },
                          slots: [
                            e(l, {
                              background: {
                                alt: "",
                                fit: "fit",
                                pixelHeight: 1090,
                                pixelWidth: 2500,
                                positionX: "center",
                                positionY: "center",
                                sizes: "1896px",
                                src: "https://framerusercontent.com/images/22ynecu2TAa5s1pm6rOGLzmw.png",
                                srcSet:
                                  "https://framerusercontent.com/images/22ynecu2TAa5s1pm6rOGLzmw.png?scale-down-to=512 512w,https://framerusercontent.com/images/22ynecu2TAa5s1pm6rOGLzmw.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/22ynecu2TAa5s1pm6rOGLzmw.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/22ynecu2TAa5s1pm6rOGLzmw.png 2500w",
                              },
                              className: "framer-if5m7c",
                            }),
                          ],
                          speed: 100,
                          style: { height: "100%", width: "100%" },
                          width: "100%",
                        }),
                      }),
                    }),
                  ],
                }),
                d("div", {
                  className: "framer-uec7cs",
                  children: [
                    e(D, {
                      children: e(q, {
                        className: "framer-1iy8jbv-container",
                        children: e(b, {
                          breakpoint: a,
                          overrides: { RsYwHljm0: { gap: 0 } },
                          children: e(ee, {
                            alignment: "center",
                            direction: "right",
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 10,
                            height: "100%",
                            hoverFactor: 0.5,
                            id: "K79vnkP0O",
                            layoutId: "K79vnkP0O",
                            padding: 10,
                            paddingBottom: 10,
                            paddingLeft: 10,
                            paddingPerSide: !1,
                            paddingRight: 10,
                            paddingTop: 10,
                            sizingOptions: { heightType: !0, widthType: !0 },
                            slots: [
                              e(o.div, {
                                className: "framer-muz85u",
                                children: e(p, {
                                  __fromCanvasComponent: !0,
                                  children: e(c, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0FkaXJhIERpc3BsYXkgU1NpIFJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Adira Display SSi Regular", "Adira Display SSi Regular Placeholder", sans-serif',
                                        "--framer-font-size": "163px",
                                        "--framer-line-height": "1em",
                                        "--framer-text-color":
                                          "rgba(0, 0, 0, 0)",
                                        "--framer-text-stroke-color":
                                          "rgba(0, 0, 0, 1)",
                                        "--framer-text-stroke-width": "3px",
                                      },
                                      children: "THE PINKY",
                                    }),
                                  }),
                                  className: "framer-13b3kv7",
                                  fonts: ["CUSTOM;Adira Display SSi Regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              e(o.div, {
                                className: "framer-1bdd6u3",
                                children: e(p, {
                                  __fromCanvasComponent: !0,
                                  children: e(c, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0FkaXJhIERpc3BsYXkgU1NpIFJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Adira Display SSi Regular", "Adira Display SSi Regular Placeholder", sans-serif',
                                        "--framer-font-size": "163px",
                                        "--framer-line-height": "1em",
                                      },
                                      children: "THE PINKY",
                                    }),
                                  }),
                                  className: "framer-1afy4z0",
                                  fonts: ["CUSTOM;Adira Display SSi Regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                            speed: 100,
                            style: { height: "100%", width: "100%" },
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(D, {
                      children: e(q, {
                        className: "framer-8vwami-container",
                        children: e(ee, {
                          alignment: "center",
                          direction: "left",
                          fadeOptions: {
                            fadeAlpha: 0,
                            fadeContent: !1,
                            fadeInset: 0,
                            fadeWidth: 25,
                            overflow: !1,
                          },
                          gap: 10,
                          height: "100%",
                          hoverFactor: 0.5,
                          id: "HHSaJ9yd8",
                          layoutId: "HHSaJ9yd8",
                          padding: 10,
                          paddingBottom: 10,
                          paddingLeft: 10,
                          paddingPerSide: !1,
                          paddingRight: 10,
                          paddingTop: 10,
                          sizingOptions: { heightType: !0, widthType: !0 },
                          slots: [
                            e(o.div, {
                              className: "framer-16do02o",
                              children: e(p, {
                                __fromCanvasComponent: !0,
                                children: e(c, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0FkaXJhIERpc3BsYXkgU1NpIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Adira Display SSi Regular", "Adira Display SSi Regular Placeholder", sans-serif',
                                      "--framer-font-size": "163px",
                                      "--framer-line-height": "1em",
                                    },
                                    children: "ART GALLERY",
                                  }),
                                }),
                                className: "framer-1gaxrii",
                                fonts: ["CUSTOM;Adira Display SSi Regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            e(o.div, {
                              className: "framer-29apfx",
                              children: e(p, {
                                __fromCanvasComponent: !0,
                                children: e(c, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0FkaXJhIERpc3BsYXkgU1NpIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Adira Display SSi Regular", "Adira Display SSi Regular Placeholder", sans-serif',
                                      "--framer-font-size": "163px",
                                      "--framer-line-height": "1em",
                                      "--framer-text-color": "rgba(0, 0, 0, 0)",
                                      "--framer-text-stroke-color":
                                        "rgba(0, 0, 0, 1)",
                                      "--framer-text-stroke-width": "3px",
                                    },
                                    children: "ART GALLERY",
                                  }),
                                }),
                                className: "framer-yp7n92",
                                fonts: ["CUSTOM;Adira Display SSi Regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                          speed: 100,
                          style: { height: "100%", width: "100%" },
                          width: "100%",
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-1z05yeu",
                      children: e("div", {
                        className: "framer-pfmtio",
                        children: e(D, {
                          children: e(q, {
                            className: "framer-xf1yze-container",
                            children: e(Y, {
                              alignment: "center",
                              arrowOptions: {
                                arrowFill: "rgb(255, 154, 177)",
                                arrowGap: 10,
                                arrowPadding: -54,
                                arrowPaddingBottom: 0,
                                arrowPaddingLeft: 0,
                                arrowPaddingRight: 0,
                                arrowPaddingTop: 0,
                                arrowPosition: "top-left",
                                arrowRadius: 40,
                                arrowShouldFadeIn: !1,
                                arrowShouldSpace: !0,
                                arrowSize: 35,
                                showMouseControls: !0,
                              },
                              autoPlayControl: !0,
                              borderRadius: 0,
                              direction: "left",
                              dragControl: !0,
                              effectsOptions: {
                                effectsHover: !0,
                                effectsOpacity: 0.05,
                                effectsPerspective: 1135,
                                effectsRotate: -53,
                                effectsScale: 0.6,
                              },
                              fadeOptions: {
                                fadeAlpha: 0,
                                fadeContent: !1,
                                fadeInset: 0,
                                fadeWidth: 25,
                                overflow: !0,
                              },
                              gap: 80,
                              height: "100%",
                              id: "lLE9VmmOk",
                              intervalControl: 3.5,
                              itemAmount: 1,
                              layoutId: "lLE9VmmOk",
                              padding: 0,
                              paddingBottom: 0,
                              paddingLeft: 0,
                              paddingPerSide: !1,
                              paddingRight: 0,
                              paddingTop: 0,
                              progressOptions: {
                                dotsActiveOpacity: 1,
                                dotsBackground: "rgba(0, 0, 0, 0.2)",
                                dotsBlur: 50,
                                dotsFill: "rgb(255, 255, 255)",
                                dotsGap: 10,
                                dotsInset: -7,
                                dotSize: 4,
                                dotsOpacity: 0.5,
                                dotsPadding: 10,
                                dotsRadius: 50,
                                showProgressDots: !1,
                              },
                              slots: [
                                e(l, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 1280,
                                    pixelWidth: 1280,
                                    sizes: "250px",
                                    src: "https://framerusercontent.com/images/pnsvjOwgpiKK0bkeenOCBNeBu5I.jpg",
                                    srcSet:
                                      "https://framerusercontent.com/images/pnsvjOwgpiKK0bkeenOCBNeBu5I.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/pnsvjOwgpiKK0bkeenOCBNeBu5I.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/pnsvjOwgpiKK0bkeenOCBNeBu5I.jpg 1280w",
                                  },
                                  className: "framer-d7x8qa",
                                }),
                                e(l, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 1280,
                                    pixelWidth: 1280,
                                    sizes: "250px",
                                    src: "https://framerusercontent.com/images/G4D5MIWaWhGa6jWWhLF5vQsCeM.jpg",
                                    srcSet:
                                      "https://framerusercontent.com/images/G4D5MIWaWhGa6jWWhLF5vQsCeM.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/G4D5MIWaWhGa6jWWhLF5vQsCeM.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/G4D5MIWaWhGa6jWWhLF5vQsCeM.jpg 1280w",
                                  },
                                  className: "framer-snot4s",
                                }),
                                e(l, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 1280,
                                    pixelWidth: 1280,
                                    sizes: "250px",
                                    src: "https://framerusercontent.com/images/NDWGd5oZeQrMeTriWD1vfABRxU.jpg",
                                    srcSet:
                                      "https://framerusercontent.com/images/NDWGd5oZeQrMeTriWD1vfABRxU.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/NDWGd5oZeQrMeTriWD1vfABRxU.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/NDWGd5oZeQrMeTriWD1vfABRxU.jpg 1280w",
                                  },
                                  className: "framer-4kvwc1",
                                }),
                                e(l, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 1280,
                                    pixelWidth: 1280,
                                    sizes: "250px",
                                    src: "https://framerusercontent.com/images/D8narZSaMJTl9PXzIJlHDWvARgo.jpg",
                                    srcSet:
                                      "https://framerusercontent.com/images/D8narZSaMJTl9PXzIJlHDWvARgo.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/D8narZSaMJTl9PXzIJlHDWvARgo.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/D8narZSaMJTl9PXzIJlHDWvARgo.jpg 1280w",
                                  },
                                  className: "framer-160gl8d",
                                }),
                                e(l, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 1280,
                                    pixelWidth: 1280,
                                    sizes: "250px",
                                    src: "https://framerusercontent.com/images/UPpnsJf55GqpXLydVDULohvr0U.jpg",
                                    srcSet:
                                      "https://framerusercontent.com/images/UPpnsJf55GqpXLydVDULohvr0U.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/UPpnsJf55GqpXLydVDULohvr0U.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/UPpnsJf55GqpXLydVDULohvr0U.jpg 1280w",
                                  },
                                  className: "framer-1uu2ua3",
                                }),
                                e(l, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 1280,
                                    pixelWidth: 1280,
                                    sizes: "250px",
                                    src: "https://framerusercontent.com/images/0SdMRWYk0NKO4HvzYmnO3CTrk.jpg",
                                    srcSet:
                                      "https://framerusercontent.com/images/0SdMRWYk0NKO4HvzYmnO3CTrk.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/0SdMRWYk0NKO4HvzYmnO3CTrk.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/0SdMRWYk0NKO4HvzYmnO3CTrk.jpg 1280w",
                                  },
                                  className: "framer-mpne3",
                                }),
                                e(l, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 1280,
                                    pixelWidth: 1280,
                                    sizes: "250px",
                                    src: "https://framerusercontent.com/images/PiFlK7yplbHVJ3PYx3l0iKxHE.jpg",
                                    srcSet:
                                      "https://framerusercontent.com/images/PiFlK7yplbHVJ3PYx3l0iKxHE.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/PiFlK7yplbHVJ3PYx3l0iKxHE.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/PiFlK7yplbHVJ3PYx3l0iKxHE.jpg 1280w",
                                  },
                                  className: "framer-1gn56vj",
                                }),
                                e(l, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 1280,
                                    pixelWidth: 1280,
                                    sizes: "250px",
                                    src: "https://framerusercontent.com/images/DMhBbW5fE521nRfOWr1Znrshnw.jpg",
                                    srcSet:
                                      "https://framerusercontent.com/images/DMhBbW5fE521nRfOWr1Znrshnw.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/DMhBbW5fE521nRfOWr1Znrshnw.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/DMhBbW5fE521nRfOWr1Znrshnw.jpg 1280w",
                                  },
                                  className: "framer-1q4p0tk",
                                }),
                                e(l, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 1280,
                                    pixelWidth: 1280,
                                    sizes: "250px",
                                    src: "https://framerusercontent.com/images/XKphJkivWodG4lorYwWbPcxbEQ.jpg",
                                    srcSet:
                                      "https://framerusercontent.com/images/XKphJkivWodG4lorYwWbPcxbEQ.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/XKphJkivWodG4lorYwWbPcxbEQ.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/XKphJkivWodG4lorYwWbPcxbEQ.jpg 1280w",
                                  },
                                  className: "framer-32xbq6",
                                }),
                                e(l, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 1280,
                                    pixelWidth: 1280,
                                    sizes: "250px",
                                    src: "https://framerusercontent.com/images/5NokpSLEfy1YQCuync7Y32vtCE.jpg",
                                    srcSet:
                                      "https://framerusercontent.com/images/5NokpSLEfy1YQCuync7Y32vtCE.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/5NokpSLEfy1YQCuync7Y32vtCE.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/5NokpSLEfy1YQCuync7Y32vtCE.jpg 1280w",
                                  },
                                  className: "framer-1iq5gvo",
                                }),
                                e(l, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 1280,
                                    pixelWidth: 1280,
                                    sizes: "250px",
                                    src: "https://framerusercontent.com/images/KVTc8GC2rQqQLTuLkuM5cAc8HM.jpg",
                                    srcSet:
                                      "https://framerusercontent.com/images/KVTc8GC2rQqQLTuLkuM5cAc8HM.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/KVTc8GC2rQqQLTuLkuM5cAc8HM.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/KVTc8GC2rQqQLTuLkuM5cAc8HM.jpg 1280w",
                                  },
                                  className: "framer-dvpdks",
                                }),
                                e(l, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 1280,
                                    pixelWidth: 1280,
                                    sizes: "250px",
                                    src: "https://framerusercontent.com/images/ypXh9bG7jjpXwr0beuQlM6LkbKo.jpg",
                                    srcSet:
                                      "https://framerusercontent.com/images/ypXh9bG7jjpXwr0beuQlM6LkbKo.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/ypXh9bG7jjpXwr0beuQlM6LkbKo.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/ypXh9bG7jjpXwr0beuQlM6LkbKo.jpg 1280w",
                                  },
                                  className: "framer-1r57r3e",
                                }),
                                e(l, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 1280,
                                    pixelWidth: 1280,
                                    sizes: "250px",
                                    src: "https://framerusercontent.com/images/Soq7UsEi08waAikeKKMRZBA5RU.jpg",
                                    srcSet:
                                      "https://framerusercontent.com/images/Soq7UsEi08waAikeKKMRZBA5RU.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/Soq7UsEi08waAikeKKMRZBA5RU.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/Soq7UsEi08waAikeKKMRZBA5RU.jpg 1280w",
                                  },
                                  className: "framer-r77ui7",
                                }),
                                e(l, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 1280,
                                    pixelWidth: 1280,
                                    sizes: "250px",
                                    src: "https://framerusercontent.com/images/PNFjzU7v9YBiU1ZnKjY2nZT3P2M.jpg",
                                    srcSet:
                                      "https://framerusercontent.com/images/PNFjzU7v9YBiU1ZnKjY2nZT3P2M.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/PNFjzU7v9YBiU1ZnKjY2nZT3P2M.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/PNFjzU7v9YBiU1ZnKjY2nZT3P2M.jpg 1280w",
                                  },
                                  className: "framer-187zfgc",
                                }),
                              ],
                              startFrom: 0,
                              style: { height: "100%", width: "100%" },
                              transitionControl: {
                                delay: 0,
                                duration: 0.9,
                                ease: [0.44, 0, 0.56, 1],
                                type: "tween",
                              },
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-1ye8vw7",
                      children: e(b, {
                        breakpoint: a,
                        overrides: {
                          oIP8s9PSc: {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: f(3590),
                              pixelHeight: 888,
                              pixelWidth: 2048,
                              sizes: "876px",
                              src: "https://framerusercontent.com/images/XoOM5zzWbwbS1bQVHnTUauCNaM.png",
                              srcSet:
                                "https://framerusercontent.com/images/XoOM5zzWbwbS1bQVHnTUauCNaM.png?scale-down-to=512 512w,https://framerusercontent.com/images/XoOM5zzWbwbS1bQVHnTUauCNaM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/XoOM5zzWbwbS1bQVHnTUauCNaM.png 2048w",
                            },
                          },
                          RsYwHljm0: {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: f(3099),
                              pixelHeight: 888,
                              pixelWidth: 2048,
                              sizes: "498px",
                              src: "https://framerusercontent.com/images/XoOM5zzWbwbS1bQVHnTUauCNaM.png",
                              srcSet:
                                "https://framerusercontent.com/images/XoOM5zzWbwbS1bQVHnTUauCNaM.png?scale-down-to=512 512w,https://framerusercontent.com/images/XoOM5zzWbwbS1bQVHnTUauCNaM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/XoOM5zzWbwbS1bQVHnTUauCNaM.png 2048w",
                            },
                          },
                        },
                        children: e(Wr, {
                          __framer__animate: { transition: Qt },
                          __framer__animateOnce: !0,
                          __framer__enter: Fn,
                          __framer__exit: Bn,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: f(3670),
                            pixelHeight: 888,
                            pixelWidth: 2048,
                            sizes: "876px",
                            src: "https://framerusercontent.com/images/XoOM5zzWbwbS1bQVHnTUauCNaM.png",
                            srcSet:
                              "https://framerusercontent.com/images/XoOM5zzWbwbS1bQVHnTUauCNaM.png?scale-down-to=512 512w,https://framerusercontent.com/images/XoOM5zzWbwbS1bQVHnTUauCNaM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/XoOM5zzWbwbS1bQVHnTUauCNaM.png 2048w",
                          },
                          className: "framer-12i10jn",
                        }),
                      }),
                    }),
                  ],
                }),
                e("div", {
                  className: "framer-sfyzod",
                  "data-border": !0,
                  children: e(D, {
                    children: e(q, {
                      className: "framer-9r73vu-container",
                      children: e(ee, {
                        alignment: "center",
                        direction: "left",
                        fadeOptions: {
                          fadeAlpha: 0,
                          fadeContent: !0,
                          fadeInset: 0,
                          fadeWidth: 25,
                          overflow: !1,
                        },
                        gap: 10,
                        height: "100%",
                        hoverFactor: 1,
                        id: "OoC4OyYbu",
                        layoutId: "OoC4OyYbu",
                        padding: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                        paddingPerSide: !0,
                        paddingRight: 10,
                        paddingTop: 13,
                        sizingOptions: { heightType: !0, widthType: !0 },
                        slots: [
                          e(o.div, {
                            className: "framer-1wgis3l",
                            children: e(p, {
                              __fromCanvasComponent: !0,
                              children: e(c, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0FuamEgRWxpYW5lIGFjY2VudCBOb3JuYWw=",
                                    "--framer-font-family":
                                      '"Anja Eliane accent Nornal", "Anja Eliane accent Nornal Placeholder", sans-serif',
                                    "--framer-font-size": "17px",
                                    "--framer-letter-spacing": "0.19em",
                                    "--framer-line-height": "17px",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "PINKY",
                                }),
                              }),
                              className: "framer-19zifv0",
                              fonts: ["CUSTOM;Anja Eliane accent Nornal"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                        speed: 100,
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                d("div", {
                  className: "framer-gww157",
                  children: [
                    e("div", {
                      className: "framer-uwd11z",
                      children: e(b, {
                        breakpoint: a,
                        overrides: {
                          oIP8s9PSc: {
                            background: {
                              alt: "",
                              fit: "fit",
                              loading: f(4036),
                              pixelHeight: 280,
                              pixelWidth: 1e3,
                              positionX: "center",
                              positionY: "center",
                              sizes: "953px",
                              src: "./1.png",
                              srcSet:
                                "./1.png",
                            },
                          },
                          RsYwHljm0: {
                            background: {
                              alt: "",
                              fit: "fit",
                              loading: f(3379.1),
                              pixelHeight: 280,
                              pixelWidth: 1e3,
                              positionX: "center",
                              positionY: "center",
                              src: "./1.png",
                            },
                          },
                        },
                        children: e(l, {
                          background: {
                            alt: "",
                            fit: "fit",
                            loading: f(4106),
                            pixelHeight: 280,
                            pixelWidth: 1e3,
                            positionX: "center",
                            positionY: "center",
                            sizes: "953px",
                            src: "./1.png",
                            srcSet:
                              "./1.png",
                          },
                          className: "framer-1t599f5",
                          whileHover: Ut,
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-amegq2",
                      children: e(p, {
                        __fromCanvasComponent: !0,
                        children: e(c, {
                          children: e("p", {
                            style: {
                              "--font-selector":
                                "Q1VTVE9NO0FkaXJhIERpc3BsYXkgU1NpIFJlZ3VsYXI=",
                              "--framer-font-family":
                                '"Adira Display SSi Regular", "Adira Display SSi Regular Placeholder", sans-serif',
                              "--framer-font-size": "9px",
                              "--framer-letter-spacing": "0.44em",
                            },
                            children: "JOIN THE PINKY UNIVERSE",
                          }),
                        }),
                        className: "framer-186haey",
                        fonts: ["CUSTOM;Adira Display SSi Regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    d("div", {
                      className: "framer-zykzrn",
                      children: [
                        e(me, {
                          href: "https://t.me/pinkylittledog",
                          openInNewTab: !0,
                          children: e(b, {
                            breakpoint: a,
                            overrides: {
                              oIP8s9PSc: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: f(4113.8),
                                  pixelHeight: 24,
                                  pixelWidth: 24,
                                  src: "https://framerusercontent.com/images/9mxNRYUXib8eH9oobsE6ih8ncSI.svg",
                                },
                              },
                              RsYwHljm0: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: f(3449.9),
                                  pixelHeight: 24,
                                  pixelWidth: 24,
                                  src: "https://framerusercontent.com/images/9mxNRYUXib8eH9oobsE6ih8ncSI.svg",
                                },
                              },
                            },
                            children: e(l, {
                              as: "a",
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: f(4183.8),
                                pixelHeight: 24,
                                pixelWidth: 24,
                                src: "https://framerusercontent.com/images/9mxNRYUXib8eH9oobsE6ih8ncSI.svg",
                              },
                              className: "framer-1emjjhd framer-lux5qc",
                              whileHover: We,
                            }),
                          }),
                        }),
                        e(b, {
                          breakpoint: a,
                          overrides: {
                            oIP8s9PSc: {
                              href: "https://x.com/pinkylittledog",
                              openInNewTab: !0,
                            },
                          },
                          children: e(me, {
                            href: "https://x.com/pinkylittledog",
                            children: e(b, {
                              breakpoint: a,
                              overrides: {
                                oIP8s9PSc: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: f(4116.3),
                                    pixelHeight: 271,
                                    pixelWidth: 300,
                                    src: "https://framerusercontent.com/images/AoXB6jz5044uYTvIyLmrM2HACE.svg",
                                  },
                                },
                                RsYwHljm0: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: f(3452.4),
                                    pixelHeight: 271,
                                    pixelWidth: 300,
                                    src: "https://framerusercontent.com/images/AoXB6jz5044uYTvIyLmrM2HACE.svg",
                                  },
                                },
                              },
                              children: e(l, {
                                as: "a",
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: f(4186.3),
                                  pixelHeight: 271,
                                  pixelWidth: 300,
                                  src: "https://framerusercontent.com/images/AoXB6jz5044uYTvIyLmrM2HACE.svg",
                                },
                                className: "framer-yvr44 framer-lux5qc",
                                whileHover: We,
                              }),
                            }),
                          }),
                        }),
                        e(me, {
                          href: "https://pump.fun/JShSypKjK1Hv5PZxy4GUtkZrr2H7v8wDWBoPk2jpump",
                          openInNewTab: !0,
                          children: e(b, {
                            breakpoint: a,
                            overrides: {
                              oIP8s9PSc: {
                                background: {
                                  alt: "",
                                  fit: "fit",
                                  loading: f(4113.8),
                                  pixelHeight: 319,
                                  pixelWidth: 268,
                                  positionX: "center",
                                  positionY: "center",
                                  src: "./2.png",
                                },
                              },
                              RsYwHljm0: {
                                background: {
                                  alt: "",
                                  fit: "fit",
                                  loading: f(3449.9),
                                  pixelHeight: 319,
                                  pixelWidth: 268,
                                  positionX: "center",
                                  positionY: "center",
                                  src: "./2.png",
                                },
                              },
                            },
                            children: e(l, {
                              as: "a",
                              background: {
                                alt: "",
                                fit: "fit",
                                loading: f(4183.8),
                                pixelHeight: 319,
                                pixelWidth: 268,
                                positionX: "center",
                                positionY: "center",
                                src: "./2.png",
                              },
                              className: "framer-1xsi8ql framer-lux5qc",
                              whileHover: We,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e("div", { className: sr(Lt, ...I), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Un = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${ct.bodyClassName}-framer-3nufK { background: white; }`,
    ".framer-3nufK.framer-lux5qc, .framer-3nufK .framer-lux5qc { display: block; }",
    ".framer-3nufK.framer-72rtr7 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",
    ".framer-3nufK .framer-1cd2nqd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 522px; justify-content: center; left: calc(50.00000000000002% - 909px / 2); overflow: hidden; padding: 0px; position: absolute; top: 2765px; width: 909px; z-index: 10; }",
    ".framer-3nufK .framer-1lmok6a { flex: none; height: 440px; position: relative; width: 540px; z-index: 10; }",
    ".framer-3nufK .framer-1gi1tpy-container { flex: none; height: 80px; left: 0px; position: absolute; right: 0px; top: 120px; z-index: 4; }",
    ".framer-3nufK .framer-15m6riq { height: 161px; position: relative; width: 178px; }",
    ".framer-3nufK .framer-r1frz9 { height: 119px; position: relative; width: 120px; }",
    ".framer-3nufK .framer-cnsk2m-container { flex: none; height: 107px; left: -410px; position: absolute; right: -211px; top: 273px; z-index: 3; }",
    ".framer-3nufK .framer-r1l2lg-container { flex: none; height: 120px; left: -295px; position: absolute; right: -23px; top: 393px; z-index: 3; }",
    ".framer-3nufK .framer-1gzed7m { height: 90px; position: relative; width: 68px; }",
    ".framer-3nufK .framer-1qjjrr7 { align-content: flex-start; align-items: flex-start; background: linear-gradient(180deg, #a9f5eb 22.972972972972975%, rgb(196, 241, 228) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 713px; justify-content: flex-start; overflow: hidden; padding: 50px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-3nufK .framer-1vyr45i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 37px; height: 80px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-3nufK .framer-1ixquah { --border-bottom-width: 2px; --border-color: #222222; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 31px; border-bottom-right-radius: 31px; border-top-left-radius: 31px; border-top-right-radius: 31px; box-shadow: 2px 3px 0px 0px #000000; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 70px; justify-content: space-evenly; max-width: 500px; overflow: hidden; padding: 0px 25px 0px 25px; position: relative; width: 35%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-3nufK .framer-26h5k2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 16%; }",
    ".framer-3nufK .framer-hyl8c1 { flex: none; height: 59px; position: relative; width: 58px; }",
    ".framer-3nufK .framer-dg56k1 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 29px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 5px 5px 5px 0px; position: relative; width: 1px; }",
    ".framer-3nufK .framer-1t4hfq5, .framer-3nufK .framer-1wutal, .framer-3nufK .framer-1emjjhd, .framer-3nufK .framer-1xsi8ql { flex: none; height: 30px; position: relative; text-decoration: none; width: 30px; }",
    ".framer-3nufK .framer-r8jn7x, .framer-3nufK .framer-yvr44 { flex: none; height: 25px; position: relative; text-decoration: none; width: 25px; }",
    ".framer-3nufK .framer-1v6m1ed { --border-bottom-width: 2px; --border-color: #222222; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; background-color: #f397ae; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; box-shadow: 2px 2px 0px 0px #000000; flex: none; height: 41px; overflow: hidden; position: relative; text-decoration: none; width: 80px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-3nufK .framer-mw2zf3, .framer-3nufK .framer-1na5ro8, .framer-3nufK .framer-1rjn27w, .framer-3nufK .framer-6t7nrh { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 54%; transform: translate(-50%, -50%); white-space: pre; width: auto; }",
    ".framer-3nufK .framer-7r6rxg { bottom: 56px; flex: none; height: 300px; left: calc(50.00000000000002% - 400px / 2); overflow: hidden; position: absolute; width: 400px; z-index: 4; }",
    ".framer-3nufK .framer-v43ic1 { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 3; }",
    ".framer-3nufK .framer-e3hwy8 { bottom: -59px; flex: none; height: 300px; opacity: 0.23; position: absolute; right: -7px; width: 400px; z-index: 2; }",
    ".framer-3nufK .framer-pzch76 { bottom: -55px; flex: none; height: 276px; left: calc(49.58333333333336% - 1178px / 2); position: absolute; width: 1178px; z-index: 1; }",
    ".framer-3nufK .framer-1gm1zzw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 199px; justify-content: flex-start; overflow: hidden; padding: 15px 0px 10px 0px; position: relative; width: 100%; }",
    ".framer-3nufK .framer-1o542rr { flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 1200px; z-index: 3; }",
    ".framer-3nufK .framer-kzu95u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 9px 0px 9px 0px; position: relative; text-decoration: none; width: 100%; }",
    ".framer-3nufK .framer-1igrc3q { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 5; }",
    ".framer-3nufK .framer-5iypcc { --border-bottom-width: 2px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: dashed; --border-top-width: 2px; align-content: center; align-items: center; background-color: #f397ae; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 35px; justify-content: center; overflow: hidden; padding: 3px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-3nufK .framer-o92oht-container, .framer-3nufK .framer-9r73vu-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }",
    ".framer-3nufK .framer-xo2k53 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-3nufK .framer-rwa0gu, .framer-3nufK .framer-1kqdfp5, .framer-3nufK .framer-1kfwayh, .framer-3nufK .framer-p3i1rq, .framer-3nufK .framer-4hko92, .framer-3nufK .framer-oy6q2e, .framer-3nufK .framer-1g2iizq, .framer-3nufK .framer-vuua3k, .framer-3nufK .framer-1ojzbqv, .framer-3nufK .framer-gk3q6m, .framer-3nufK .framer-v26def, .framer-3nufK .framer-19zifv0, .framer-3nufK .framer-186haey { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-3nufK .framer-m1os3c { height: 19px; overflow: hidden; position: relative; width: 19px; }",
    ".framer-3nufK .framer-x8x9rx { flex: none; height: 15px; left: 0px; position: absolute; right: 1px; top: 0px; }",
    ".framer-3nufK .framer-g9n7ht { align-content: center; align-items: center; background: linear-gradient(180deg, #020d1a 51.80180180180181%, rgb(10, 22, 36) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1090px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 0; }",
    ".framer-3nufK .framer-uljj5m { --border-bottom-width: 2px; --border-color: #222222; --border-left-width: 2px; --border-right-width: 2px; --border-style: dashed; --border-top-width: 0px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 70px; justify-content: space-between; max-width: 1500px; overflow: hidden; padding: 0px; position: relative; width: 86%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-3nufK .framer-1vd5y5d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 35px; height: 55px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-3nufK .framer-12k1cnk { flex: none; height: 30px; overflow: hidden; position: relative; width: 777px; }",
    ".framer-3nufK .framer-1er5bnj { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); white-space: pre; width: auto; }",
    ".framer-3nufK .framer-cj0g6o { --border-bottom-width: 2px; --border-color: #222222; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; background-color: #f397ae; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; box-shadow: 2px 2px 0px 0px #000000; cursor: cell; flex: none; height: 41px; overflow: hidden; position: relative; width: 80px; will-change: var(--framer-will-change-override, transform); z-index: 10; }",
    ".framer-3nufK .framer-17rlrwf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 255px; justify-content: flex-start; overflow: hidden; padding: 50px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-3nufK .framer-64ttfl { flex: none; height: 129px; position: relative; width: 778px; }",
    ".framer-3nufK .framer-f77lpn { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 320px; }",
    ".framer-3nufK .framer-d34loy { --border-bottom-width: 2px; --border-color: #f397ae; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; box-shadow: 2px 2px 0px 0px #f397ae; flex: none; height: 33px; overflow: hidden; position: relative; text-decoration: none; width: 238px; will-change: var(--framer-will-change-override, transform); z-index: 10; }",
    ".framer-3nufK .framer-fc7b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 344px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-3nufK .framer-4k2q7y-container { flex: none; height: 277px; position: relative; width: 371px; z-index: 10; }",
    ".framer-3nufK .framer-12rkywx { --border-bottom-width: 2px; --border-color: #f397ae; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 52px; border-bottom-right-radius: 52px; border-top-left-radius: 52px; border-top-right-radius: 52px; box-shadow: 3px 5px 0px 0px #f397ae; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 236px; justify-content: center; overflow: hidden; padding: 15px 0px 0px 0px; position: relative; width: 340px; will-change: var(--framer-will-change-override, transform); z-index: 0; }",
    ".framer-3nufK .framer-6b107g, .framer-3nufK .framer-1mrfj6x, .framer-3nufK .framer-1j6ek4p, .framer-3nufK .framer-1uoivbf, .framer-3nufK .framer-94qycy, .framer-3nufK .framer-1hhclpx, .framer-3nufK .framer-qjeg6p, .framer-3nufK .framer-1kjeiq6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 47px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 90%; }",
    ".framer-3nufK .framer-qtlly1, .framer-3nufK .framer-189jk8w, .framer-3nufK .framer-m3xe9n, .framer-3nufK .framer-13wzuzm, .framer-3nufK .framer-1n5qgeb, .framer-3nufK .framer-1iqyxc5, .framer-3nufK .framer-1e8wbfn, .framer-3nufK .framer-u9owd4 { --border-bottom-width: 2px; --border-color: #222222; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; background-color: #f397ae; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; box-shadow: 2px 2px 0px 0px #000000; cursor: cell; flex: none; height: 41px; overflow: hidden; position: relative; width: 53px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-3nufK .framer-3op15k, .framer-3nufK .framer-1ahuq0c, .framer-3nufK .framer-1akkcj4, .framer-3nufK .framer-dq4jti, .framer-3nufK .framer-1uafiod, .framer-3nufK .framer-18dbjdz, .framer-3nufK .framer-1mp4b46, .framer-3nufK .framer-r659u5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 53%; position: absolute; top: 51%; transform: translate(-50%, -50%); white-space: pre; width: auto; }",
    ".framer-3nufK .framer-xr5sh7, .framer-3nufK .framer-2c7v8, .framer-3nufK .framer-5ljws9, .framer-3nufK .framer-suaay6, .framer-3nufK .framer-x39zow, .framer-3nufK .framer-o6hgtn, .framer-3nufK .framer-1mkdcog, .framer-3nufK .framer-1230z91 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 153px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 90%; }",
    ".framer-3nufK .framer-19kx5nm, .framer-3nufK .framer-fuaww8 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 114px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-3nufK .framer-1qhjkwb, .framer-3nufK .framer-1392mai, .framer-3nufK .framer-weoxnm { --border-bottom-width: 2px; --border-color: #f397ae; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 52px; border-bottom-right-radius: 52px; border-top-left-radius: 52px; border-top-right-radius: 52px; box-shadow: 3px 5px 0px 0px #f397ae; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 236px; justify-content: center; overflow: hidden; padding: 15px 0px 0px 0px; position: relative; width: 343px; will-change: var(--framer-will-change-override, transform); z-index: 0; }",
    ".framer-3nufK .framer-1lsod3j { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 134px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-3nufK .framer-1xvufuf { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 111px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-3nufK .framer-1pu9eb4-container { flex: none; height: 293px; position: relative; width: 473px; z-index: 10; }",
    ".framer-3nufK .framer-19rwo4u { --border-bottom-width: 2px; --border-color: #f397ae; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 52px; border-bottom-right-radius: 52px; border-top-left-radius: 52px; border-top-right-radius: 52px; box-shadow: 3px 5px 0px 0px #f397ae; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 260px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 380px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-3nufK .framer-9qjotx { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 114px; position: relative; white-space: pre-wrap; width: 322px; word-break: break-word; word-wrap: break-word; }",
    ".framer-3nufK .framer-wo1o5r, .framer-3nufK .framer-1fk7mrl, .framer-3nufK .framer-10s37ui { --border-bottom-width: 2px; --border-color: #f397ae; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 52px; border-bottom-right-radius: 52px; border-top-left-radius: 52px; border-top-right-radius: 52px; box-shadow: 3px 5px 0px 0px #f397ae; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 260px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 384px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-3nufK .framer-1ga373m, .framer-3nufK .framer-1qz4dv4 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 134px; position: relative; white-space: pre-wrap; width: 322px; word-break: break-word; word-wrap: break-word; }",
    ".framer-3nufK .framer-lam27r { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 137px; position: relative; white-space: pre-wrap; width: 322px; word-break: break-word; word-wrap: break-word; }",
    ".framer-3nufK .framer-ap9ul-container { bottom: 280px; flex: none; height: 209px; left: -171px; position: absolute; right: -172px; z-index: 1; }",
    ".framer-3nufK .framer-1y9n1zc { aspect-ratio: 1.8972222222222221 / 1; height: var(--framer-aspect-ratio-supported, 103px); overflow: visible; position: relative; width: 196px; }",
    ".framer-3nufK .framer-g7gsri { bottom: 0px; flex: none; height: 465px; left: -110px; position: absolute; right: -111px; z-index: 3; }",
    ".framer-3nufK .framer-1fen7z-container, .framer-3nufK .framer-7bkbso-container { flex: none; height: 1032px; left: -110px; position: absolute; right: -23px; top: 0px; z-index: 1; }",
    ".framer-3nufK .framer-1jno1gz { height: 1310px; opacity: 0.15; position: relative; width: 1896px; }",
    ".framer-3nufK .framer-bkmtd9 { --border-bottom-width: 2px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 2px; background-color: #bbf2e6; flex: none; height: 35px; overflow: hidden; position: relative; width: 100%; }",
    ".framer-3nufK .framer-hcefkl-container { bottom: -2px; flex: none; height: 35px; left: 0px; position: absolute; right: 0px; }",
    ".framer-3nufK .framer-18xvah6 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 17px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-3nufK .framer-vcosx7 { align-content: center; align-items: center; background-color: #f397ae; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: 1054px; justify-content: flex-start; overflow: hidden; padding: 250px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-3nufK .framer-sk3b6a { flex: none; height: 94px; position: relative; width: 100%; z-index: 10; }",
    ".framer-3nufK .framer-10iw2jx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: hidden; padding: 4px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-3nufK .framer-1hhjn01 { --border-bottom-width: 3px; --border-color: #000000; --border-left-width: 3px; --border-right-width: 3px; --border-style: dashed; --border-top-width: 3px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; box-shadow: 1px 3px 0px 0px #000000; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: 429px; justify-content: flex-start; max-width: 600px; overflow: hidden; padding: 50px 0px 0px 0px; position: relative; width: 71%; will-change: var(--framer-will-change-override, transform); z-index: 10; }",
    ".framer-3nufK .framer-5h5u83 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 241px; position: relative; white-space: pre-wrap; width: 526px; word-break: break-word; word-wrap: break-word; }",
    ".framer-3nufK .framer-1nic8vz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 101px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 320px; }",
    ".framer-3nufK .framer-m5j3tl { --border-bottom-width: 2px; --border-color: #000000; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; background-color: #ffffff; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; box-shadow: 2px 2px 0px 0px #000000; flex: none; height: 33px; overflow: hidden; position: relative; text-decoration: none; width: 250px; will-change: var(--framer-will-change-override, transform); z-index: 10; }",
    ".framer-3nufK .framer-d9gbzw-container { flex: none; height: 329px; left: -140px; position: absolute; right: -74px; top: calc(48.735408560311306% - 329px / 2); z-index: 10; }",
    ".framer-3nufK .framer-u0ijeg { height: 345px; overflow: hidden; position: relative; width: 363px; }",
    ".framer-3nufK .framer-1jg27ys { flex: none; height: 305px; left: -3px; position: absolute; right: -53px; top: calc(47.82608695652176% - 305px / 2); }",
    ".framer-3nufK .framer-1fyrbrt { flex: none; height: 553px; left: calc(50.00000000000002% - 526px / 2); overflow: hidden; position: absolute; top: 0px; width: 526px; z-index: 10; }",
    ".framer-3nufK .framer-1g3nlhc { aspect-ratio: 0.9773650609402206 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 538px); left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 10; }",
    ".framer-3nufK .framer-if5m7c { height: 1310px; opacity: 0.6; position: relative; width: 1896px; }",
    ".framer-3nufK .framer-uec7cs { align-content: center; align-items: center; background-color: #c9ddfe; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1128px; justify-content: flex-start; overflow: hidden; padding: 50px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-3nufK .framer-1iy8jbv-container, .framer-3nufK .framer-8vwami-container { flex: none; height: 129px; position: relative; width: 100%; }",
    ".framer-3nufK .framer-muz85u, .framer-3nufK .framer-1bdd6u3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 142px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 764px; }",
    ".framer-3nufK .framer-13b3kv7, .framer-3nufK .framer-yp7n92 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; opacity: 0.2; position: relative; white-space: pre; width: auto; }",
    ".framer-3nufK .framer-1afy4z0, .framer-3nufK .framer-1gaxrii { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; opacity: 0.03; position: relative; white-space: pre; width: auto; }",
    ".framer-3nufK .framer-16do02o, .framer-3nufK .framer-29apfx { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 142px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1092px; }",
    ".framer-3nufK .framer-1z05yeu { flex: none; height: 478px; overflow: hidden; position: relative; width: 100%; }",
    ".framer-3nufK .framer-pfmtio { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: hidden; padding: 35px 0px 0px 0px; position: absolute; top: 46px; width: 100%; }",
    ".framer-3nufK .framer-xf1yze-container { flex: none; height: 312px; position: relative; width: 312px; }",
    ".framer-3nufK .framer-d7x8qa, .framer-3nufK .framer-snot4s, .framer-3nufK .framer-4kvwc1, .framer-3nufK .framer-160gl8d, .framer-3nufK .framer-1uu2ua3, .framer-3nufK .framer-mpne3, .framer-3nufK .framer-1gn56vj, .framer-3nufK .framer-1q4p0tk, .framer-3nufK .framer-32xbq6, .framer-3nufK .framer-1iq5gvo, .framer-3nufK .framer-dvpdks, .framer-3nufK .framer-1r57r3e, .framer-3nufK .framer-r77ui7, .framer-3nufK .framer-187zfgc { border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; height: 250px; position: relative; width: 250px; }",
    ".framer-3nufK .framer-1ye8vw7 { align-content: flex-end; align-items: flex-end; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 429px; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; right: 0px; z-index: 1; }",
    ".framer-3nufK .framer-12i10jn { flex: none; height: 385px; position: relative; width: 876px; }",
    ".framer-3nufK .framer-sfyzod { --border-bottom-width: 2px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #ff9ab1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 36px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-3nufK .framer-1wgis3l { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-3nufK .framer-gww157 { align-content: center; align-items: center; background-color: #e8e8e8; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 0px 10px 0px; position: relative; width: 100%; }",
    ".framer-3nufK .framer-uwd11z, .framer-3nufK .framer-amegq2, .framer-3nufK .framer-zykzrn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 29px; height: min-content; justify-content: center; overflow: hidden; padding: 5px 5px 5px 0px; position: relative; width: 100%; }",
    ".framer-3nufK .framer-1t599f5 { flex: none; height: 47px; overflow: hidden; position: relative; width: 953px; z-index: 3; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-3nufK.framer-72rtr7, .framer-3nufK .framer-1cd2nqd, .framer-3nufK .framer-1qjjrr7, .framer-3nufK .framer-1vyr45i, .framer-3nufK .framer-26h5k2, .framer-3nufK .framer-dg56k1, .framer-3nufK .framer-1gm1zzw, .framer-3nufK .framer-kzu95u, .framer-3nufK .framer-5iypcc, .framer-3nufK .framer-xo2k53, .framer-3nufK .framer-g9n7ht, .framer-3nufK .framer-1vd5y5d, .framer-3nufK .framer-17rlrwf, .framer-3nufK .framer-f77lpn, .framer-3nufK .framer-fc7b, .framer-3nufK .framer-12rkywx, .framer-3nufK .framer-6b107g, .framer-3nufK .framer-xr5sh7, .framer-3nufK .framer-1qhjkwb, .framer-3nufK .framer-1mrfj6x, .framer-3nufK .framer-2c7v8, .framer-3nufK .framer-1392mai, .framer-3nufK .framer-1j6ek4p, .framer-3nufK .framer-5ljws9, .framer-3nufK .framer-weoxnm, .framer-3nufK .framer-1uoivbf, .framer-3nufK .framer-suaay6, .framer-3nufK .framer-19rwo4u, .framer-3nufK .framer-94qycy, .framer-3nufK .framer-x39zow, .framer-3nufK .framer-wo1o5r, .framer-3nufK .framer-1hhclpx, .framer-3nufK .framer-o6hgtn, .framer-3nufK .framer-1fk7mrl, .framer-3nufK .framer-qjeg6p, .framer-3nufK .framer-1mkdcog, .framer-3nufK .framer-10s37ui, .framer-3nufK .framer-1kjeiq6, .framer-3nufK .framer-1230z91, .framer-3nufK .framer-18xvah6, .framer-3nufK .framer-vcosx7, .framer-3nufK .framer-10iw2jx, .framer-3nufK .framer-1hhjn01, .framer-3nufK .framer-1nic8vz, .framer-3nufK .framer-uec7cs, .framer-3nufK .framer-muz85u, .framer-3nufK .framer-1bdd6u3, .framer-3nufK .framer-16do02o, .framer-3nufK .framer-29apfx, .framer-3nufK .framer-pfmtio, .framer-3nufK .framer-1ye8vw7, .framer-3nufK .framer-sfyzod, .framer-3nufK .framer-1wgis3l, .framer-3nufK .framer-gww157, .framer-3nufK .framer-uwd11z, .framer-3nufK .framer-amegq2, .framer-3nufK .framer-zykzrn { gap: 0px; } .framer-3nufK.framer-72rtr7 > *, .framer-3nufK .framer-1qjjrr7 > *, .framer-3nufK .framer-1gm1zzw > *, .framer-3nufK .framer-kzu95u > *, .framer-3nufK .framer-uec7cs > *, .framer-3nufK .framer-sfyzod > *, .framer-3nufK .framer-gww157 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-3nufK.framer-72rtr7 > :first-child, .framer-3nufK .framer-1qjjrr7 > :first-child, .framer-3nufK .framer-1vyr45i > :first-child, .framer-3nufK .framer-1gm1zzw > :first-child, .framer-3nufK .framer-kzu95u > :first-child, .framer-3nufK .framer-5iypcc > :first-child, .framer-3nufK .framer-g9n7ht > :first-child, .framer-3nufK .framer-17rlrwf > :first-child, .framer-3nufK .framer-12rkywx > :first-child, .framer-3nufK .framer-xr5sh7 > :first-child, .framer-3nufK .framer-1qhjkwb > :first-child, .framer-3nufK .framer-2c7v8 > :first-child, .framer-3nufK .framer-1392mai > :first-child, .framer-3nufK .framer-5ljws9 > :first-child, .framer-3nufK .framer-weoxnm > :first-child, .framer-3nufK .framer-suaay6 > :first-child, .framer-3nufK .framer-19rwo4u > :first-child, .framer-3nufK .framer-x39zow > :first-child, .framer-3nufK .framer-wo1o5r > :first-child, .framer-3nufK .framer-o6hgtn > :first-child, .framer-3nufK .framer-1fk7mrl > :first-child, .framer-3nufK .framer-1mkdcog > :first-child, .framer-3nufK .framer-10s37ui > :first-child, .framer-3nufK .framer-1230z91 > :first-child, .framer-3nufK .framer-vcosx7 > :first-child, .framer-3nufK .framer-10iw2jx > :first-child, .framer-3nufK .framer-1hhjn01 > :first-child, .framer-3nufK .framer-uec7cs > :first-child, .framer-3nufK .framer-muz85u > :first-child, .framer-3nufK .framer-1bdd6u3 > :first-child, .framer-3nufK .framer-16do02o > :first-child, .framer-3nufK .framer-29apfx > :first-child, .framer-3nufK .framer-pfmtio > :first-child, .framer-3nufK .framer-sfyzod > :first-child, .framer-3nufK .framer-1wgis3l > :first-child, .framer-3nufK .framer-gww157 > :first-child { margin-top: 0px; } .framer-3nufK.framer-72rtr7 > :last-child, .framer-3nufK .framer-1qjjrr7 > :last-child, .framer-3nufK .framer-1vyr45i > :last-child, .framer-3nufK .framer-1gm1zzw > :last-child, .framer-3nufK .framer-kzu95u > :last-child, .framer-3nufK .framer-5iypcc > :last-child, .framer-3nufK .framer-g9n7ht > :last-child, .framer-3nufK .framer-17rlrwf > :last-child, .framer-3nufK .framer-12rkywx > :last-child, .framer-3nufK .framer-xr5sh7 > :last-child, .framer-3nufK .framer-1qhjkwb > :last-child, .framer-3nufK .framer-2c7v8 > :last-child, .framer-3nufK .framer-1392mai > :last-child, .framer-3nufK .framer-5ljws9 > :last-child, .framer-3nufK .framer-weoxnm > :last-child, .framer-3nufK .framer-suaay6 > :last-child, .framer-3nufK .framer-19rwo4u > :last-child, .framer-3nufK .framer-x39zow > :last-child, .framer-3nufK .framer-wo1o5r > :last-child, .framer-3nufK .framer-o6hgtn > :last-child, .framer-3nufK .framer-1fk7mrl > :last-child, .framer-3nufK .framer-1mkdcog > :last-child, .framer-3nufK .framer-10s37ui > :last-child, .framer-3nufK .framer-1230z91 > :last-child, .framer-3nufK .framer-vcosx7 > :last-child, .framer-3nufK .framer-10iw2jx > :last-child, .framer-3nufK .framer-1hhjn01 > :last-child, .framer-3nufK .framer-uec7cs > :last-child, .framer-3nufK .framer-muz85u > :last-child, .framer-3nufK .framer-1bdd6u3 > :last-child, .framer-3nufK .framer-16do02o > :last-child, .framer-3nufK .framer-29apfx > :last-child, .framer-3nufK .framer-pfmtio > :last-child, .framer-3nufK .framer-sfyzod > :last-child, .framer-3nufK .framer-1wgis3l > :last-child, .framer-3nufK .framer-gww157 > :last-child { margin-bottom: 0px; } .framer-3nufK .framer-1cd2nqd > *, .framer-3nufK .framer-26h5k2 > *, .framer-3nufK .framer-xo2k53 > *, .framer-3nufK .framer-f77lpn > *, .framer-3nufK .framer-fc7b > *, .framer-3nufK .framer-6b107g > *, .framer-3nufK .framer-1mrfj6x > *, .framer-3nufK .framer-1j6ek4p > *, .framer-3nufK .framer-1uoivbf > *, .framer-3nufK .framer-94qycy > *, .framer-3nufK .framer-1hhclpx > *, .framer-3nufK .framer-qjeg6p > *, .framer-3nufK .framer-1kjeiq6 > *, .framer-3nufK .framer-18xvah6 > *, .framer-3nufK .framer-1nic8vz > *, .framer-3nufK .framer-1ye8vw7 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-3nufK .framer-1cd2nqd > :first-child, .framer-3nufK .framer-26h5k2 > :first-child, .framer-3nufK .framer-dg56k1 > :first-child, .framer-3nufK .framer-xo2k53 > :first-child, .framer-3nufK .framer-1vd5y5d > :first-child, .framer-3nufK .framer-f77lpn > :first-child, .framer-3nufK .framer-fc7b > :first-child, .framer-3nufK .framer-6b107g > :first-child, .framer-3nufK .framer-1mrfj6x > :first-child, .framer-3nufK .framer-1j6ek4p > :first-child, .framer-3nufK .framer-1uoivbf > :first-child, .framer-3nufK .framer-94qycy > :first-child, .framer-3nufK .framer-1hhclpx > :first-child, .framer-3nufK .framer-qjeg6p > :first-child, .framer-3nufK .framer-1kjeiq6 > :first-child, .framer-3nufK .framer-18xvah6 > :first-child, .framer-3nufK .framer-1nic8vz > :first-child, .framer-3nufK .framer-1ye8vw7 > :first-child, .framer-3nufK .framer-uwd11z > :first-child, .framer-3nufK .framer-amegq2 > :first-child, .framer-3nufK .framer-zykzrn > :first-child { margin-left: 0px; } .framer-3nufK .framer-1cd2nqd > :last-child, .framer-3nufK .framer-26h5k2 > :last-child, .framer-3nufK .framer-dg56k1 > :last-child, .framer-3nufK .framer-xo2k53 > :last-child, .framer-3nufK .framer-1vd5y5d > :last-child, .framer-3nufK .framer-f77lpn > :last-child, .framer-3nufK .framer-fc7b > :last-child, .framer-3nufK .framer-6b107g > :last-child, .framer-3nufK .framer-1mrfj6x > :last-child, .framer-3nufK .framer-1j6ek4p > :last-child, .framer-3nufK .framer-1uoivbf > :last-child, .framer-3nufK .framer-94qycy > :last-child, .framer-3nufK .framer-1hhclpx > :last-child, .framer-3nufK .framer-qjeg6p > :last-child, .framer-3nufK .framer-1kjeiq6 > :last-child, .framer-3nufK .framer-18xvah6 > :last-child, .framer-3nufK .framer-1nic8vz > :last-child, .framer-3nufK .framer-1ye8vw7 > :last-child, .framer-3nufK .framer-uwd11z > :last-child, .framer-3nufK .framer-amegq2 > :last-child, .framer-3nufK .framer-zykzrn > :last-child { margin-right: 0px; } .framer-3nufK .framer-1vyr45i > * { margin: 0px; margin-bottom: calc(37px / 2); margin-top: calc(37px / 2); } .framer-3nufK .framer-dg56k1 > *, .framer-3nufK .framer-uwd11z > *, .framer-3nufK .framer-amegq2 > *, .framer-3nufK .framer-zykzrn > * { margin: 0px; margin-left: calc(29px / 2); margin-right: calc(29px / 2); } .framer-3nufK .framer-5iypcc > *, .framer-3nufK .framer-g9n7ht > *, .framer-3nufK .framer-17rlrwf > *, .framer-3nufK .framer-12rkywx > *, .framer-3nufK .framer-xr5sh7 > *, .framer-3nufK .framer-1qhjkwb > *, .framer-3nufK .framer-2c7v8 > *, .framer-3nufK .framer-1392mai > *, .framer-3nufK .framer-5ljws9 > *, .framer-3nufK .framer-weoxnm > *, .framer-3nufK .framer-suaay6 > *, .framer-3nufK .framer-19rwo4u > *, .framer-3nufK .framer-x39zow > *, .framer-3nufK .framer-wo1o5r > *, .framer-3nufK .framer-o6hgtn > *, .framer-3nufK .framer-1fk7mrl > *, .framer-3nufK .framer-1mkdcog > *, .framer-3nufK .framer-10s37ui > *, .framer-3nufK .framer-1230z91 > *, .framer-3nufK .framer-muz85u > *, .framer-3nufK .framer-1bdd6u3 > *, .framer-3nufK .framer-16do02o > *, .framer-3nufK .framer-29apfx > *, .framer-3nufK .framer-pfmtio > *, .framer-3nufK .framer-1wgis3l > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3nufK .framer-1vd5y5d > * { margin: 0px; margin-left: calc(35px / 2); margin-right: calc(35px / 2); } .framer-3nufK .framer-vcosx7 > *, .framer-3nufK .framer-1hhjn01 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-3nufK .framer-10iw2jx > * { margin: 0px; margin-bottom: calc(18px / 2); margin-top: calc(18px / 2); } }",
    `@media (max-width: 809px) { .${ct.bodyClassName}-framer-3nufK { background: white; } .framer-3nufK.framer-72rtr7 { width: 390px; } .framer-3nufK .framer-1cd2nqd { order: 0; top: 2255px; } .framer-3nufK .framer-1gi1tpy-container, .framer-3nufK .framer-r8jn7x, .framer-3nufK .framer-7r6rxg, .framer-3nufK .framer-f77lpn, .framer-3nufK .framer-yvr44 { order: 1; } .framer-3nufK .framer-cnsk2m-container { order: 6; } .framer-3nufK .framer-r1l2lg-container { order: 7; } .framer-3nufK .framer-1qjjrr7 { height: 631px; order: 8; padding: 30px 0px 0px 0px; } .framer-3nufK .framer-1vyr45i, .framer-3nufK .framer-1t4hfq5, .framer-3nufK .framer-4k2q7y-container, .framer-3nufK .framer-1emjjhd { order: 0; } .framer-3nufK .framer-1ixquah { padding: 0px 15px 0px 25px; width: 85%; } .framer-3nufK .framer-26h5k2 { order: 0; width: 27%; } .framer-3nufK .framer-hyl8c1 { order: 0; width: 57px; } .framer-3nufK .framer-dg56k1 { gap: 10px; order: 1; } .framer-3nufK .framer-1wutal, .framer-3nufK .framer-pzch76, .framer-3nufK .framer-1xsi8ql { order: 2; } .framer-3nufK .framer-1v6m1ed { height: 30px; order: 3; width: 60px; } .framer-3nufK .framer-1gm1zzw { height: 133px; order: 3; padding: 10px 10px 0px 10px; } .framer-3nufK .framer-1o542rr { width: 100%; } .framer-3nufK .framer-kzu95u { height: 39px; order: 4; padding: 0px; } .framer-3nufK .framer-5iypcc { order: 9; } .framer-3nufK .framer-g9n7ht { gap: 27px; height: 795px; order: 10; } .framer-3nufK .framer-uljj5m { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; height: 77px; order: 0; padding: 0px 10px 0px 10px; width: 86%; } .framer-3nufK .framer-1vd5y5d { flex-direction: column; gap: unset; height: 63px; justify-content: space-around; width: 99%; } .framer-3nufK .framer-12k1cnk { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 19px; justify-content: center; padding: 0px; width: 290px; } .framer-3nufK .framer-1er5bnj { left: unset; position: relative; top: unset; transform: unset; width: 286px; } .framer-3nufK .framer-cj0g6o { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 45%; justify-content: center; padding: 0px; width: 95%; } .framer-3nufK .framer-1na5ro8 { left: unset; position: relative; top: unset; transform: unset; } .framer-3nufK .framer-17rlrwf { gap: 0px; height: 129px; order: 1; padding: 10px 0px 0px 0px; } .framer-3nufK .framer-64ttfl { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 62px; justify-content: center; order: 0; padding: 0px; width: 90%; } .framer-3nufK .framer-d34loy, .framer-3nufK .framer-m5j3tl { height: 32px; width: 245px; } .framer-3nufK .framer-fc7b { flex-direction: column; height: 656px; justify-content: flex-start; order: 2; } .framer-3nufK .framer-ap9ul-container { order: 4; z-index: 4; } .framer-3nufK .framer-g7gsri { height: 284px; left: -417px; order: 3; right: -383px; } .framer-3nufK .framer-1fen7z-container { bottom: -232px; height: 966px; left: 0px; order: 5; top: unset; } .framer-3nufK .framer-bkmtd9 { order: 11; } .framer-3nufK .framer-vcosx7 { height: 920px; order: 12; padding: 170px 0px 0px 0px; } .framer-3nufK .framer-sk3b6a { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 62px; justify-content: center; padding: 0px; width: 90%; } .framer-3nufK .framer-1hhjn01 { border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; gap: 27px; height: 416px; width: 90%; } .framer-3nufK .framer-5h5u83 { height: 279px; width: 303px; } .framer-3nufK .framer-d9gbzw-container { height: 283px; left: -142px; right: -94px; top: calc(51.52582159624416% - 283px / 2); } .framer-3nufK .framer-1fyrbrt { height: 362px; left: 0px; right: 0px; width: unset; } .framer-3nufK .framer-1g3nlhc { height: var(--framer-aspect-ratio-supported, 354px); left: 50%; right: unset; transform: translateX(-50%); width: 346px; } .framer-3nufK .framer-7bkbso-container { bottom: -232px; height: 966px; left: 0px; top: unset; } .framer-3nufK .framer-uec7cs { height: 902px; order: 13; padding: 100px 0px 0px 0px; } .framer-3nufK .framer-pfmtio { padding: 23px 0px 0px 0px; } .framer-3nufK .framer-xf1yze-container { height: 209px; width: 209px; } .framer-3nufK .framer-1ye8vw7 { height: 236px; } .framer-3nufK .framer-12i10jn { height: 219px; width: 498px; } .framer-3nufK .framer-sfyzod { order: 14; } .framer-3nufK .framer-gww157 { height: 151px; order: 15; padding: 20px 0px 20px 0px; } .framer-3nufK .framer-uwd11z, .framer-3nufK .framer-amegq2, .framer-3nufK .framer-zykzrn { gap: 10px; } .framer-3nufK .framer-1t599f5 { flex: 1 0 0px; height: 80px; width: 1px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-3nufK .framer-dg56k1, .framer-3nufK .framer-g9n7ht, .framer-3nufK .framer-1vd5y5d, .framer-3nufK .framer-12k1cnk, .framer-3nufK .framer-cj0g6o, .framer-3nufK .framer-17rlrwf, .framer-3nufK .framer-64ttfl, .framer-3nufK .framer-fc7b, .framer-3nufK .framer-sk3b6a, .framer-3nufK .framer-1hhjn01, .framer-3nufK .framer-uwd11z, .framer-3nufK .framer-amegq2, .framer-3nufK .framer-zykzrn { gap: 0px; } .framer-3nufK .framer-dg56k1 > *, .framer-3nufK .framer-cj0g6o > *, .framer-3nufK .framer-64ttfl > *, .framer-3nufK .framer-sk3b6a > *, .framer-3nufK .framer-uwd11z > *, .framer-3nufK .framer-amegq2 > *, .framer-3nufK .framer-zykzrn > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-3nufK .framer-dg56k1 > :first-child, .framer-3nufK .framer-cj0g6o > :first-child, .framer-3nufK .framer-64ttfl > :first-child, .framer-3nufK .framer-sk3b6a > :first-child, .framer-3nufK .framer-uwd11z > :first-child, .framer-3nufK .framer-amegq2 > :first-child, .framer-3nufK .framer-zykzrn > :first-child { margin-left: 0px; } .framer-3nufK .framer-dg56k1 > :last-child, .framer-3nufK .framer-cj0g6o > :last-child, .framer-3nufK .framer-64ttfl > :last-child, .framer-3nufK .framer-sk3b6a > :last-child, .framer-3nufK .framer-uwd11z > :last-child, .framer-3nufK .framer-amegq2 > :last-child, .framer-3nufK .framer-zykzrn > :last-child { margin-right: 0px; } .framer-3nufK .framer-g9n7ht > *, .framer-3nufK .framer-1hhjn01 > * { margin: 0px; margin-bottom: calc(27px / 2); margin-top: calc(27px / 2); } .framer-3nufK .framer-g9n7ht > :first-child, .framer-3nufK .framer-12k1cnk > :first-child, .framer-3nufK .framer-17rlrwf > :first-child, .framer-3nufK .framer-fc7b > :first-child, .framer-3nufK .framer-1hhjn01 > :first-child { margin-top: 0px; } .framer-3nufK .framer-g9n7ht > :last-child, .framer-3nufK .framer-12k1cnk > :last-child, .framer-3nufK .framer-17rlrwf > :last-child, .framer-3nufK .framer-fc7b > :last-child, .framer-3nufK .framer-1hhjn01 > :last-child { margin-bottom: 0px; } .framer-3nufK .framer-1vd5y5d > *, .framer-3nufK .framer-1vd5y5d > :first-child, .framer-3nufK .framer-1vd5y5d > :last-child { margin: 0px; } .framer-3nufK .framer-12k1cnk > *, .framer-3nufK .framer-17rlrwf > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-3nufK .framer-fc7b > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }}`,
    `@media (min-width: 810px) and (max-width: 1199px) { .${ct.bodyClassName}-framer-3nufK { background: white; } .framer-3nufK.framer-72rtr7 { width: 810px; } .framer-3nufK .framer-1cd2nqd { top: 2683px; } .framer-3nufK .framer-1ixquah { width: 50%; } .framer-3nufK .framer-hyl8c1 { height: 55px; width: 55px; } .framer-3nufK .framer-g9n7ht { height: 1010px; } .framer-3nufK .framer-uljj5m { gap: 0px; justify-content: center; } .framer-3nufK .framer-1vd5y5d { gap: 9px; height: 44px; padding: 0px 10px 0px 0px; } .framer-3nufK .framer-12k1cnk { height: 29px; width: 86%; } .framer-3nufK .framer-1er5bnj { left: 50%; } .framer-3nufK .framer-cj0g6o { height: 35px; width: 60px; } .framer-3nufK .framer-d34loy, .framer-3nufK .framer-m5j3tl { width: 287px; } .framer-3nufK .framer-sk3b6a { order: 0; } .framer-3nufK .framer-10iw2jx { gap: 38px; order: 1; } .framer-3nufK .framer-d9gbzw-container { order: 2; } .framer-3nufK .framer-1fyrbrt { order: 3; } .framer-3nufK .framer-7bkbso-container { order: 4; } .framer-3nufK .framer-xf1yze-container { height: 330px; width: 330px; } .framer-3nufK .framer-gww157 { padding: 20px 0px 20px 0px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-3nufK .framer-uljj5m, .framer-3nufK .framer-1vd5y5d, .framer-3nufK .framer-10iw2jx { gap: 0px; } .framer-3nufK .framer-uljj5m > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-3nufK .framer-uljj5m > :first-child, .framer-3nufK .framer-1vd5y5d > :first-child { margin-left: 0px; } .framer-3nufK .framer-uljj5m > :last-child, .framer-3nufK .framer-1vd5y5d > :last-child { margin-right: 0px; } .framer-3nufK .framer-1vd5y5d > * { margin: 0px; margin-left: calc(9px / 2); margin-right: calc(9px / 2); } .framer-3nufK .framer-10iw2jx > * { margin: 0px; margin-bottom: calc(38px / 2); margin-top: calc(38px / 2); } .framer-3nufK .framer-10iw2jx > :first-child { margin-top: 0px; } .framer-3nufK .framer-10iw2jx > :last-child { margin-bottom: 0px; } }}`,
    '.framer-3nufK[data-border="true"]::after, .framer-3nufK [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Yr = Er(qn, Un, "framer-3nufK"),
  Ss = Yr;
Yr.displayName = "Home";
Yr.defaultProps = { height: 4229, width: 1200 };
Ir(
  Yr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Anja Eliane accent Nornal",
          source: "custom",
          url: "https://framerusercontent.com/assets/kG6LcvwrL0nTCminoDiw1NnhPCk.woff2",
        },
        {
          family: "Adira Display SSi Regular",
          source: "custom",
          url: "https://framerusercontent.com/assets/ZrvIdeU50uWebcruMKQNlevDfPo.woff2",
        },
      ],
    },
    ...tn,
    ...sn,
    ...ln,
    ...fn,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Ns = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerComponentViewportWidth: "true",
        framerResponsiveScreen: "",
        framerContractVersion: "1",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"RsYwHljm0":{"layout":["fixed","auto"]},"oIP8s9PSc":{"layout":["fixed","auto"]}}}',
        framerIntrinsicHeight: "4229",
        framerIntrinsicWidth: "1200",
        framerImmutableVariables: "true",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Ns as __FramerMetadata__, Ss as default };
//# sourceMappingURL=tWszT1WlzXoc7Uum7lEUsT32q0_Ax5QZeb1Y6F0b8LE.CCBSNDAO.mjs.map
