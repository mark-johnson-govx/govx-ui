import xe from "react";
var E = {}, ur = {
  get exports() {
    return E;
  },
  set exports(s) {
    E = s;
  }
}, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function sr() {
  if (we)
    return A;
  we = 1;
  var s = xe, c = Symbol.for("react.element"), d = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, $ = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(w, v, O) {
    var g, y = {}, T = null, W = null;
    O !== void 0 && (T = "" + O), v.key !== void 0 && (T = "" + v.key), v.ref !== void 0 && (W = v.ref);
    for (g in v)
      h.call(v, g) && !I.hasOwnProperty(g) && (y[g] = v[g]);
    if (w && w.defaultProps)
      for (g in v = w.defaultProps, v)
        y[g] === void 0 && (y[g] = v[g]);
    return { $$typeof: c, type: w, key: T, ref: W, props: y, _owner: $.current };
  }
  return A.Fragment = d, A.jsx = j, A.jsxs = j, A;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function lr() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var s = xe, c = Symbol.for("react.element"), d = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), w = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), Z = Symbol.iterator, Oe = "@@iterator";
    function Ce(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[Oe];
      return typeof r == "function" ? r : null;
    }
    var C = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var n = C.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Se = !1, je = !1, ke = !1, De = !1, Ae = !1, Q;
    Q = Symbol.for("react.module.reference");
    function Fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === I || Ae || e === $ || e === O || e === g || De || e === W || Se || je || ke || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === y || e.$$typeof === j || e.$$typeof === w || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function _(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case d:
          return "Portal";
        case I:
          return "Profiler";
        case $:
          return "StrictMode";
        case O:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var r = e;
            return ee(r) + ".Consumer";
          case j:
            var t = e;
            return ee(t._context) + ".Provider";
          case v:
            return $e(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : _(e.type) || "Memo";
          case T: {
            var i = e, u = i._payload, o = i._init;
            try {
              return _(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, k = 0, re, te, ne, ae, oe, ie, ue;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function Ie() {
      {
        if (k === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, oe = console.group, ie = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        k++;
      }
    }
    function We() {
      {
        if (k--, k === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: re
            }),
            info: x({}, e, {
              value: te
            }),
            warn: x({}, e, {
              value: ne
            }),
            error: x({}, e, {
              value: ae
            }),
            group: x({}, e, {
              value: oe
            }),
            groupCollapsed: x({}, e, {
              value: ie
            }),
            groupEnd: x({}, e, {
              value: ue
            })
          });
        }
        k < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = C.ReactCurrentDispatcher, B;
    function Y(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var q = !1, N;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ye();
    }
    function le(e, r) {
      if (!e || q)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Ie();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (R) {
              n = R;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (R) {
              n = R;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            n = R;
          }
          e();
        }
      } catch (R) {
        if (R && n && typeof R.stack == "string") {
          for (var a = R.stack.split(`
`), p = n.stack.split(`
`), l = a.length - 1, f = p.length - 1; l >= 1 && f >= 0 && a[l] !== p[f]; )
            f--;
          for (; l >= 1 && f >= 0; l--, f--)
            if (a[l] !== p[f]) {
              if (l !== 1 || f !== 1)
                do
                  if (l--, f--, f < 0 || a[l] !== p[f]) {
                    var m = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, m), m;
                  }
                while (l >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        q = !1, U.current = u, We(), Error.prepareStackTrace = i;
      }
      var S = e ? e.displayName || e.name : "", Re = S ? Y(S) : "";
      return typeof e == "function" && N.set(e, Re), Re;
    }
    function Ne(e, r, t) {
      return le(e, !1);
    }
    function Le(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Le(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case O:
          return Y("Suspense");
        case g:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Ne(e.render);
          case y:
            return L(e.type, r, t);
          case T: {
            var n = e, i = n._payload, u = n._init;
            try {
              return L(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, fe = {}, ce = C.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ce.setExtraStackFrame(t);
      } else
        ce.setExtraStackFrame(null);
    }
    function Ve(e, r, t, n, i) {
      {
        var u = Function.call.bind(V);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (M(i), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), M(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, M(i), b("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Me = Array.isArray;
    function J(e) {
      return Me(e);
    }
    function Ue(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Be(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ve(e) {
      if (Be(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ue(e)), de(e);
    }
    var D = C.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, pe, G;
    G = {};
    function Je(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ze(e, r) {
      if (typeof e.ref == "string" && D.current && r && D.current.stateNode !== r) {
        var t = _(D.current.type);
        G[t] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _(D.current.type), e.ref), G[t] = !0);
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          be || (be = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function He(e, r) {
      {
        var t = function() {
          pe || (pe = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Xe = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Ze(e, r, t, n, i) {
      {
        var u, o = {}, a = null, p = null;
        t !== void 0 && (ve(t), a = "" + t), Ge(r) && (ve(r.key), a = "" + r.key), Je(r) && (p = r.ref, ze(r, i));
        for (u in r)
          V.call(r, u) && !qe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            o[u] === void 0 && (o[u] = l[u]);
        }
        if (a || p) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ke(o, f), p && He(o, f);
        }
        return Xe(e, a, p, i, n, D.current, o);
      }
    }
    var z = C.ReactCurrentOwner, ge = C.ReactDebugCurrentFrame;
    function P(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function he() {
      {
        if (z.current) {
          var e = _(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Qe(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var me = {};
    function er(e) {
      {
        var r = he();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = er(r);
        if (me[t])
          return;
        me[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + _(e._owner.type) + "."), P(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), P(null);
      }
    }
    function ye(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && Ee(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Ce(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              H(o.value) && Ee(o.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = _(r);
          Ve(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var i = _(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            P(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), P(null);
            break;
          }
        }
        e.ref !== null && (P(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
      }
    }
    function _e(e, r, t, n, i, u) {
      {
        var o = Fe(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Qe(i);
          p ? a += p : a += he();
          var l;
          e === null ? l = "null" : J(e) ? l = "array" : e !== void 0 && e.$$typeof === c ? (l = "<" + (_(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var f = Ze(e, r, t, i, u);
        if (f == null)
          return f;
        if (o) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (J(m)) {
                for (var S = 0; S < m.length; S++)
                  ye(m[S], e);
                Object.freeze && Object.freeze(m);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ye(m, e);
        }
        return e === h ? tr(f) : rr(f), f;
      }
    }
    function nr(e, r, t) {
      return _e(e, r, t, !0);
    }
    function ar(e, r, t) {
      return _e(e, r, t, !1);
    }
    var or = ar, ir = nr;
    F.Fragment = h, F.jsx = or, F.jsxs = ir;
  }()), F;
}
(function(s) {
  process.env.NODE_ENV === "production" ? s.exports = sr() : s.exports = lr();
})(ur);
const X = (s) => {
  const c = [
    "reset",
    "tw-box-border",
    "tw-tracking-wide",
    "tw-h-[45px]",
    "tw-transition-colors",
    "tw-duration-300",
    "tw-px-4",
    "tw-rounded-[2px]"
  ];
  let d = [];
  return s.fullWidth && (d = [...d, "tw-block", "tw-w-full"]), [...d, ...c].join(" ");
}, fr = ({
  children: s,
  type: c = "button",
  fullWidth: d = !1,
  ...h
}) => /* @__PURE__ */ E.jsx(
  "button",
  {
    type: c,
    ...h,
    className: `${X({
      fullWidth: d
    })} tw-bg-blue-dark hover:tw-bg-blue-darker disabled:tw-bg-[#e0e0e0] active:tw-bg-[#527686] tw-text-white tw-font-medium`,
    children: s
  }
), cr = ({
  children: s,
  type: c = "button",
  fullWidth: d = !1,
  ...h
}) => /* @__PURE__ */ E.jsx(
  "button",
  {
    type: c,
    ...h,
    className: `${X({
      fullWidth: d
    })} tw-bg-gray-dark hover:tw-bg-gray-darkest disabled:tw-bg-[#e0e0e0] active:tw-bg-[#646D85] tw-text-white tw-font-medium`,
    children: s
  }
), dr = ({
  children: s,
  type: c = "button",
  fullWidth: d = !1,
  ...h
}) => /* @__PURE__ */ E.jsx(
  "button",
  {
    type: c,
    ...h,
    className: `${X({
      fullWidth: d
    })} tw-bg-white hover:tw-bg-[#EAEAEA] disabled:tw-bg-[#e0e0e0] active:tw-bg-[#f2f2f2] tw-text-blue-dark disabled:tw-text-white tw-font-medium tw-border-2 disabled:tw-border-none tw-border-solid tw-border-blue-dark`,
    children: s
  }
), vr = ({
  children: s,
  type: c = "button"
}) => /* @__PURE__ */ E.jsx("button", { type: c, children: s }), pr = (s) => {
  const { variant: c, ...d } = s;
  return c === "secondary" ? /* @__PURE__ */ E.jsx(dr, { ...d, children: s.children }) : c === "danger" ? /* @__PURE__ */ E.jsx(vr, { ...d, children: s.children }) : c === "primary" ? /* @__PURE__ */ E.jsx(cr, { ...d, children: s.children }) : /* @__PURE__ */ E.jsx(fr, { ...d, children: s.children });
};
export {
  pr as Button
};
