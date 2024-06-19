!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 74));
})([
  function (e, t, n) {
    "use strict";
    e.exports = n(75);
  },
  function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r,
      o = n(62),
      i = (r = o) && r.__esModule ? r : { default: r };
    t.default = function (e, t, n) {
      return (
        t in e
          ? (0, i.default)(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r,
      o = n(90),
      i = (r = o) && r.__esModule ? r : { default: r };
    t.default =
      i.default ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
  },
  function (e, t, n) {
    var r;
    /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
      "use strict";
      var n = {}.hasOwnProperty;
      function o() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var r = arguments[t];
          if (r) {
            var i = typeof r;
            if ("string" === i || "number" === i) e.push(r);
            else if (Array.isArray(r) && r.length) {
              var a = o.apply(null, r);
              a && e.push(a);
            } else if ("object" === i)
              for (var u in r) n.call(r, u) && r[u] && e.push(u);
          }
        }
        return e.join(" ");
      }
      e.exports
        ? ((o.default = o), (e.exports = o))
        : void 0 ===
            (r = function () {
              return o;
            }.apply(t, [])) || (e.exports = r);
    })();
  },
  function (e, t, n) {
    "use strict";
    !(function e() {
      if (
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      ) {
        0;
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
          console.error(e);
        }
      }
    })(),
      (e.exports = n(76));
  },
  function (e, t) {
    var n = (e.exports = { version: "2.5.6" });
    "number" == typeof __e && (__e = n);
  },
  function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r,
      o = n(63),
      i = (r = o) && r.__esModule ? r : { default: r };
    t.default = function (e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t ||
        ("object" !== (void 0 === t ? "undefined" : (0, i.default)(t)) &&
          "function" != typeof t)
        ? e
        : t;
    };
  },
  function (e, t, n) {
    var r = n(44)("wks"),
      o = n(30),
      i = n(12).Symbol,
      a = "function" == typeof i;
    (e.exports = function (e) {
      return r[e] || (r[e] = (a && i[e]) || (a ? i : o)("Symbol." + e));
    }).store = r;
  },
  function (e, t, n) {
    "use strict";
    (t.__esModule = !0),
      (t.default = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      });
  },
  function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r,
      o = n(62),
      i = (r = o) && r.__esModule ? r : { default: r };
    t.default = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            (0, i.default)(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })();
  },
  function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = a(n(119)),
      o = a(n(123)),
      i = a(n(63));
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " +
            (void 0 === t ? "undefined" : (0, i.default)(t))
        );
      (e.prototype = (0, o.default)(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t && (r.default ? (0, r.default)(e, t) : (e.__proto__ = t));
    };
  },
  function (e, t, n) {
    var r = n(12),
      o = n(5),
      i = n(38),
      a = n(19),
      u = n(15),
      l = function (e, t, n) {
        var c,
          s,
          f,
          p = e & l.F,
          d = e & l.G,
          h = e & l.S,
          m = e & l.P,
          v = e & l.B,
          y = e & l.W,
          g = d ? o : o[t] || (o[t] = {}),
          b = g.prototype,
          w = d ? r : h ? r[t] : (r[t] || {}).prototype;
        for (c in (d && (n = t), n))
          ((s = !p && w && void 0 !== w[c]) && u(g, c)) ||
            ((f = s ? w[c] : n[c]),
            (g[c] =
              d && "function" != typeof w[c]
                ? n[c]
                : v && s
                ? i(f, r)
                : y && w[c] == f
                ? (function (e) {
                    var t = function (t, n, r) {
                      if (this instanceof e) {
                        switch (arguments.length) {
                          case 0:
                            return new e();
                          case 1:
                            return new e(t);
                          case 2:
                            return new e(t, n);
                        }
                        return new e(t, n, r);
                      }
                      return e.apply(this, arguments);
                    };
                    return (t.prototype = e.prototype), t;
                  })(f)
                : m && "function" == typeof f
                ? i(Function.call, f)
                : f),
            m &&
              (((g.virtual || (g.virtual = {}))[c] = f),
              e & l.R && b && !b[c] && a(b, c, f)));
      };
    (l.F = 1),
      (l.G = 2),
      (l.S = 4),
      (l.P = 8),
      (l.B = 16),
      (l.W = 32),
      (l.U = 64),
      (l.R = 128),
      (e.exports = l);
  },
  function (e, t) {
    var n = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = n);
  },
  function (e, t, n) {
    var r = n(20),
      o = n(57),
      i = n(39),
      a = Object.defineProperty;
    t.f = n(14)
      ? Object.defineProperty
      : function (e, t, n) {
          if ((r(e), (t = i(t, !0)), r(n), o))
            try {
              return a(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function (e, t, n) {
    e.exports = !n(22)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t);
    };
  },
  function (e, t, n) {
    var r = n(60),
      o = n(41);
    e.exports = function (e) {
      return r(o(e));
    };
  },
  function (e, t, n) {
    "use strict";
    var r = function () {};
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    (t.__esModule = !0),
      (t.default = function (e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      });
  },
  function (e, t, n) {
    var r = n(13),
      o = n(25);
    e.exports = n(14)
      ? function (e, t, n) {
          return r.f(e, t, o(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  function (e, t, n) {
    var r = n(21);
    e.exports = function (e) {
      if (!r(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r,
      o = n(134),
      i = (r = o) && r.__esModule ? r : { default: r };
    t.default = function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return (0, i.default)(e);
    };
  },
  function (e, t, n) {
    (function (t) {
      for (
        var r = n(143),
          o = "undefined" == typeof window ? t : window,
          i = ["moz", "webkit"],
          a = "AnimationFrame",
          u = o["request" + a],
          l = o["cancel" + a] || o["cancelRequest" + a],
          c = 0;
        !u && c < i.length;
        c++
      )
        (u = o[i[c] + "Request" + a]),
          (l = o[i[c] + "Cancel" + a] || o[i[c] + "CancelRequest" + a]);
      if (!u || !l) {
        var s = 0,
          f = 0,
          p = [];
        (u = function (e) {
          if (0 === p.length) {
            var t = r(),
              n = Math.max(0, 1e3 / 60 - (t - s));
            (s = n + t),
              setTimeout(function () {
                var e = p.slice(0);
                p.length = 0;
                for (var t = 0; t < e.length; t++)
                  if (!e[t].cancelled)
                    try {
                      e[t].callback(s);
                    } catch (e) {
                      setTimeout(function () {
                        throw e;
                      }, 0);
                    }
              }, Math.round(n));
          }
          return p.push({ handle: ++f, callback: e, cancelled: !1 }), f;
        }),
          (l = function (e) {
            for (var t = 0; t < p.length; t++)
              p[t].handle === e && (p[t].cancelled = !0);
          });
      }
      (e.exports = function (e) {
        return u.call(o, e);
      }),
        (e.exports.cancel = function () {
          l.apply(o, arguments);
        }),
        (e.exports.polyfill = function (e) {
          e || (e = o),
            (e.requestAnimationFrame = u),
            (e.cancelAnimationFrame = l);
        });
    }).call(this, n(36));
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t, n) {
    e.exports = n(79)();
  },
  function (e, t, n) {
    var r = n(59),
      o = n(45);
    e.exports =
      Object.keys ||
      function (e) {
        return r(e, o);
      };
  },
  function (e, t) {
    e.exports = !0;
  },
  function (e, t) {
    var n = 0,
      r = Math.random();
    e.exports = function (e) {
      return "Symbol(".concat(
        void 0 === e ? "" : e,
        ")_",
        (++n + r).toString(36)
      );
    };
  },
  function (e, t) {
    t.f = {}.propertyIsEnumerable;
  },
  function (e, t, n) {
    var r = n(41);
    e.exports = function (e) {
      return Object(r(e));
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "__DO_NOT_USE__ActionTypes", function () {
        return i;
      }),
      n.d(t, "applyMiddleware", function () {
        return v;
      }),
      n.d(t, "bindActionCreators", function () {
        return f;
      }),
      n.d(t, "combineReducers", function () {
        return c;
      }),
      n.d(t, "compose", function () {
        return m;
      }),
      n.d(t, "createStore", function () {
        return u;
      });
    var r = n(55),
      o = function () {
        return Math.random().toString(36).substring(7).split("").join(".");
      },
      i = {
        INIT: "@@redux/INIT" + o(),
        REPLACE: "@@redux/REPLACE" + o(),
        PROBE_UNKNOWN_ACTION: function () {
          return "@@redux/PROBE_UNKNOWN_ACTION" + o();
        },
      };
    function a(e) {
      if ("object" != typeof e || null === e) return !1;
      for (var t = e; null !== Object.getPrototypeOf(t); )
        t = Object.getPrototypeOf(t);
      return Object.getPrototypeOf(e) === t;
    }
    function u(e, t, n) {
      var o;
      if (
        ("function" == typeof t && "function" == typeof n) ||
        ("function" == typeof n && "function" == typeof arguments[3])
      )
        throw new Error(
          "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function."
        );
      if (
        ("function" == typeof t && void 0 === n && ((n = t), (t = void 0)),
        void 0 !== n)
      ) {
        if ("function" != typeof n)
          throw new Error("Expected the enhancer to be a function.");
        return n(u)(e, t);
      }
      if ("function" != typeof e)
        throw new Error("Expected the reducer to be a function.");
      var l = e,
        c = t,
        s = [],
        f = s,
        p = !1;
      function d() {
        f === s && (f = s.slice());
      }
      function h() {
        if (p)
          throw new Error(
            "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store."
          );
        return c;
      }
      function m(e) {
        if ("function" != typeof e)
          throw new Error("Expected the listener to be a function.");
        if (p)
          throw new Error(
            "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details."
          );
        var t = !0;
        return (
          d(),
          f.push(e),
          function () {
            if (t) {
              if (p)
                throw new Error(
                  "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details."
                );
              (t = !1), d();
              var n = f.indexOf(e);
              f.splice(n, 1), (s = null);
            }
          }
        );
      }
      function v(e) {
        if (!a(e))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (void 0 === e.type)
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (p) throw new Error("Reducers may not dispatch actions.");
        try {
          (p = !0), (c = l(c, e));
        } finally {
          p = !1;
        }
        for (var t = (s = f), n = 0; n < t.length; n++) {
          (0, t[n])();
        }
        return e;
      }
      function y(e) {
        if ("function" != typeof e)
          throw new Error("Expected the nextReducer to be a function.");
        (l = e), v({ type: i.REPLACE });
      }
      function g() {
        var e,
          t = m;
        return (
          ((e = {
            subscribe: function (e) {
              if ("object" != typeof e || null === e)
                throw new TypeError("Expected the observer to be an object.");
              function n() {
                e.next && e.next(h());
              }
              return n(), { unsubscribe: t(n) };
            },
          })[r.a] = function () {
            return this;
          }),
          e
        );
      }
      return (
        v({ type: i.INIT }),
        ((o = { dispatch: v, subscribe: m, getState: h, replaceReducer: y })[
          r.a
        ] = g),
        o
      );
    }
    function l(e, t) {
      var n = t && t.type;
      return (
        "Given " +
        ((n && 'action "' + String(n) + '"') || "an action") +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
      );
    }
    function c(e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var o = t[r];
        0, "function" == typeof e[o] && (n[o] = e[o]);
      }
      var a,
        u = Object.keys(n);
      try {
        !(function (e) {
          Object.keys(e).forEach(function (t) {
            var n = e[t];
            if (void 0 === n(void 0, { type: i.INIT }))
              throw new Error(
                'Reducer "' +
                  t +
                  "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."
              );
            if (void 0 === n(void 0, { type: i.PROBE_UNKNOWN_ACTION() }))
              throw new Error(
                'Reducer "' +
                  t +
                  "\" returned undefined when probed with a random type. Don't try to handle " +
                  i.INIT +
                  ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
              );
          });
        })(n);
      } catch (e) {
        a = e;
      }
      return function (e, t) {
        if ((void 0 === e && (e = {}), a)) throw a;
        for (var r = !1, o = {}, i = 0; i < u.length; i++) {
          var c = u[i],
            s = n[c],
            f = e[c],
            p = s(f, t);
          if (void 0 === p) {
            var d = l(c, t);
            throw new Error(d);
          }
          (o[c] = p), (r = r || p !== f);
        }
        return (r = r || u.length !== Object.keys(e).length) ? o : e;
      };
    }
    function s(e, t) {
      return function () {
        return t(e.apply(this, arguments));
      };
    }
    function f(e, t) {
      if ("function" == typeof e) return s(e, t);
      if ("object" != typeof e || null === e)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (null === e ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      var n = {};
      for (var r in e) {
        var o = e[r];
        "function" == typeof o && (n[r] = s(o, t));
      }
      return n;
    }
    function p(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function d(e, t) {
      var n = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          n.push.apply(n, Object.getOwnPropertySymbols(e)),
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
        n
      );
    }
    function h(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? d(n, !0).forEach(function (t) {
              p(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : d(n).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function m() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return 0 === t.length
        ? function (e) {
            return e;
          }
        : 1 === t.length
        ? t[0]
        : t.reduce(function (e, t) {
            return function () {
              return e(t.apply(void 0, arguments));
            };
          });
    }
    function v() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (e) {
        return function () {
          var n = e.apply(void 0, arguments),
            r = function () {
              throw new Error(
                "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch."
              );
            },
            o = {
              getState: n.getState,
              dispatch: function () {
                return r.apply(void 0, arguments);
              },
            },
            i = t.map(function (e) {
              return e(o);
            });
          return h({}, n, { dispatch: (r = m.apply(void 0, i)(n.dispatch)) });
        };
      };
    }
  },
  function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = i(n(126)),
      o = i(n(129));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function e(t, n, i) {
      null === t && (t = Function.prototype);
      var a = (0, o.default)(t, n);
      if (void 0 === a) {
        var u = (0, r.default)(t);
        return null === u ? void 0 : e(u, n, i);
      }
      if ("value" in a) return a.value;
      var l = a.get;
      return void 0 !== l ? l.call(i) : void 0;
    };
  },
  function (e, t, n) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;
    function a(e) {
      if (null == e)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      return Object(e);
    }
    e.exports = (function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, n = 0; n < 10; n++)
          t["_" + String.fromCharCode(n)] = n;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function (e) {
              return t[e];
            })
            .join("")
        )
          return !1;
        var r = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (e) {
            r[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function (e, t) {
          for (var n, u, l = a(e), c = 1; c < arguments.length; c++) {
            for (var s in (n = Object(arguments[c])))
              o.call(n, s) && (l[s] = n[s]);
            if (r) {
              u = r(n);
              for (var f = 0; f < u.length; f++)
                i.call(n, u[f]) && (l[u[f]] = n[u[f]]);
            }
          }
          return l;
        };
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.choosePreset =
        t.changeDriveFrequency =
        t.changeDriveAmplitude =
        t.changeDamping =
        t.changeStartOmega =
        t.changeStartTheta =
        t.changeSimulationSpeed =
        t.stopSimulation =
        t.runSimulation =
        t.initialized =
        t.Actions =
          void 0),
      (t.Actions = {
        INITIALIZED: "INITIALIZED",
        RUN_SIMULATION: "RUN_SIMULATION",
        STOP_SIMULATION: "STOP_SIMULATION",
        CHANGE_SIMULATION_SPEED: "CHANGE_SIMULATION_SPEED",
        CHANGE_START_THETA: "CHANGE_START_THETA",
        CHANGE_START_OMEGA: "CHANGE_START_OMEGA",
        CHANGE_DAMPING: "CHANGE_DAMPING",
        CHANGE_DRIVE_AMPLITUDE: "CHANGE_DRIVE_AMPLITUDE",
        CHANGE_DRIVE_FREQUENCY: "CHANGE_DRIVE_FREQUENCY",
        CHOOSE_PRESET: "CHOOSE_PRESET",
      }),
      (t.initialized = function () {
        return { type: t.Actions.INITIALIZED };
      }),
      (t.runSimulation = function () {
        return { type: t.Actions.RUN_SIMULATION };
      }),
      (t.stopSimulation = function () {
        return { type: t.Actions.STOP_SIMULATION };
      }),
      (t.changeSimulationSpeed = function (e) {
        return { type: t.Actions.CHANGE_SIMULATION_SPEED, value: e };
      }),
      (t.changeStartTheta = function (e) {
        return { type: t.Actions.CHANGE_START_THETA, value: e };
      }),
      (t.changeStartOmega = function (e) {
        return { type: t.Actions.CHANGE_START_OMEGA, value: e };
      }),
      (t.changeDamping = function (e) {
        return { type: t.Actions.CHANGE_DAMPING, value: e };
      }),
      (t.changeDriveAmplitude = function (e) {
        return { type: t.Actions.CHANGE_DRIVE_AMPLITUDE, value: e };
      }),
      (t.changeDriveFrequency = function (e) {
        return { type: t.Actions.CHANGE_DRIVE_FREQUENCY, value: e };
      }),
      (t.choosePreset = function (e) {
        return { type: t.Actions.CHOOSE_PRESET, value: e };
      });
  },
  function (e, t, n) {
    var r = n(93);
    e.exports = function (e, t, n) {
      if ((r(e), void 0 === t)) return e;
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function (n, r, o) {
            return e.call(t, n, r, o);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    };
  },
  function (e, t, n) {
    var r = n(21);
    e.exports = function (e, t) {
      if (!r(e)) return e;
      var n, o;
      if (t && "function" == typeof (n = e.toString) && !r((o = n.call(e))))
        return o;
      if ("function" == typeof (n = e.valueOf) && !r((o = n.call(e)))) return o;
      if (!t && "function" == typeof (n = e.toString) && !r((o = n.call(e))))
        return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
      return n.call(e).slice(8, -1);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if (null == e) throw TypeError("Can't call method on  " + e);
      return e;
    };
  },
  function (e, t) {
    var n = Math.ceil,
      r = Math.floor;
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
    };
  },
  function (e, t, n) {
    var r = n(44)("keys"),
      o = n(30);
    e.exports = function (e) {
      return r[e] || (r[e] = o(e));
    };
  },
  function (e, t, n) {
    var r = n(5),
      o = n(12),
      i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (e.exports = function (e, t) {
      return i[e] || (i[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: r.version,
      mode: n(29) ? "pure" : "global",
      copyright: "© 2018 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (e, t) {
    e.exports =
      "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );
  },
  function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  function (e, t, n) {
    var r = n(20),
      o = n(103),
      i = n(45),
      a = n(43)("IE_PROTO"),
      u = function () {},
      l = function () {
        var e,
          t = n(58)("iframe"),
          r = i.length;
        for (
          t.style.display = "none",
            n(104).appendChild(t),
            t.src = "javascript:",
            (e = t.contentWindow.document).open(),
            e.write("<script>document.F=Object</script>"),
            e.close(),
            l = e.F;
          r--;

        )
          delete l.prototype[i[r]];
        return l();
      };
    e.exports =
      Object.create ||
      function (e, t) {
        var n;
        return (
          null !== e
            ? ((u.prototype = r(e)),
              (n = new u()),
              (u.prototype = null),
              (n[a] = e))
            : (n = l()),
          void 0 === t ? n : o(n, t)
        );
      };
  },
  function (e, t, n) {
    var r = n(13).f,
      o = n(15),
      i = n(7)("toStringTag");
    e.exports = function (e, t, n) {
      e &&
        !o((e = n ? e : e.prototype), i) &&
        r(e, i, { configurable: !0, value: t });
    };
  },
  function (e, t, n) {
    t.f = n(7);
  },
  function (e, t, n) {
    var r = n(12),
      o = n(5),
      i = n(29),
      a = n(49),
      u = n(13).f;
    e.exports = function (e) {
      var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
      "_" == e.charAt(0) || e in t || u(t, e, { value: a.f(e) });
    };
  },
  function (e, t, n) {
    var r = n(31),
      o = n(25),
      i = n(16),
      a = n(39),
      u = n(15),
      l = n(57),
      c = Object.getOwnPropertyDescriptor;
    t.f = n(14)
      ? c
      : function (e, t) {
          if (((e = i(e)), (t = a(t, !0)), l))
            try {
              return c(e, t);
            } catch (e) {}
          if (u(e, t)) return o(!r.f.call(e, t), e[t]);
        };
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "Provider", function () {
        return s;
      }),
      n.d(t, "connectAdvanced", function () {
        return k;
      }),
      n.d(t, "ReactReduxContext", function () {
        return i;
      }),
      n.d(t, "connect", function () {
        return H;
      }),
      n.d(t, "batch", function () {
        return X.unstable_batchedUpdates;
      }),
      n.d(t, "useDispatch", function () {
        return q;
      }),
      n.d(t, "createDispatchHook", function () {
        return $;
      }),
      n.d(t, "useSelector", function () {
        return Y;
      }),
      n.d(t, "createSelectorHook", function () {
        return Q;
      }),
      n.d(t, "useStore", function () {
        return W;
      }),
      n.d(t, "createStoreHook", function () {
        return B;
      }),
      n.d(t, "shallowEqual", function () {
        return O;
      });
    var r = n(0),
      o = n.n(r),
      i = (n(27), o.a.createContext(null));
    var a = function (e) {
        e();
      },
      u = { notify: function () {} };
    function l() {
      var e = a,
        t = null,
        n = null;
      return {
        clear: function () {
          (t = null), (n = null);
        },
        notify: function () {
          e(function () {
            for (var e = t; e; ) e.callback(), (e = e.next);
          });
        },
        get: function () {
          for (var e = [], n = t; n; ) e.push(n), (n = n.next);
          return e;
        },
        subscribe: function (e) {
          var r = !0,
            o = (n = { callback: e, next: null, prev: n });
          return (
            o.prev ? (o.prev.next = o) : (t = o),
            function () {
              r &&
                null !== t &&
                ((r = !1),
                o.next ? (o.next.prev = o.prev) : (n = o.prev),
                o.prev ? (o.prev.next = o.next) : (t = o.next));
            }
          );
        },
      };
    }
    var c = (function () {
      function e(e, t) {
        (this.store = e),
          (this.parentSub = t),
          (this.unsubscribe = null),
          (this.listeners = u),
          (this.handleChangeWrapper = this.handleChangeWrapper.bind(this));
      }
      var t = e.prototype;
      return (
        (t.addNestedSub = function (e) {
          return this.trySubscribe(), this.listeners.subscribe(e);
        }),
        (t.notifyNestedSubs = function () {
          this.listeners.notify();
        }),
        (t.handleChangeWrapper = function () {
          this.onStateChange && this.onStateChange();
        }),
        (t.isSubscribed = function () {
          return Boolean(this.unsubscribe);
        }),
        (t.trySubscribe = function () {
          this.unsubscribe ||
            ((this.unsubscribe = this.parentSub
              ? this.parentSub.addNestedSub(this.handleChangeWrapper)
              : this.store.subscribe(this.handleChangeWrapper)),
            (this.listeners = l()));
        }),
        (t.tryUnsubscribe = function () {
          this.unsubscribe &&
            (this.unsubscribe(),
            (this.unsubscribe = null),
            this.listeners.clear(),
            (this.listeners = u));
        }),
        e
      );
    })();
    var s = function (e) {
      var t = e.store,
        n = e.context,
        a = e.children,
        u = Object(r.useMemo)(
          function () {
            var e = new c(t);
            return (
              (e.onStateChange = e.notifyNestedSubs),
              { store: t, subscription: e }
            );
          },
          [t]
        ),
        l = Object(r.useMemo)(
          function () {
            return t.getState();
          },
          [t]
        );
      Object(r.useEffect)(
        function () {
          var e = u.subscription;
          return (
            e.trySubscribe(),
            l !== t.getState() && e.notifyNestedSubs(),
            function () {
              e.tryUnsubscribe(), (e.onStateChange = null);
            }
          );
        },
        [u, l]
      );
      var s = n || i;
      return o.a.createElement(s.Provider, { value: u }, a);
    };
    function f() {
      return (f =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function p(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
    }
    var d = n(54),
      h = n.n(d),
      m = n(53),
      v =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement
          ? r.useLayoutEffect
          : r.useEffect,
      y = [],
      g = [null, null];
    function b(e, t) {
      var n = e[1];
      return [t.payload, n + 1];
    }
    function w(e, t, n) {
      v(function () {
        return e.apply(void 0, t);
      }, n);
    }
    function x(e, t, n, r, o, i, a) {
      (e.current = r),
        (t.current = o),
        (n.current = !1),
        i.current && ((i.current = null), a());
    }
    function E(e, t, n, r, o, i, a, u, l, c) {
      if (e) {
        var s = !1,
          f = null,
          p = function () {
            if (!s) {
              var e,
                n,
                p = t.getState();
              try {
                e = r(p, o.current);
              } catch (e) {
                (n = e), (f = e);
              }
              n || (f = null),
                e === i.current
                  ? a.current || l()
                  : ((i.current = e),
                    (u.current = e),
                    (a.current = !0),
                    c({ type: "STORE_UPDATED", payload: { error: n } }));
            }
          };
        (n.onStateChange = p), n.trySubscribe(), p();
        return function () {
          if (((s = !0), n.tryUnsubscribe(), (n.onStateChange = null), f))
            throw f;
        };
      }
    }
    var S = function () {
      return [null, 0];
    };
    function k(e, t) {
      void 0 === t && (t = {});
      var n = t,
        a = n.getDisplayName,
        u =
          void 0 === a
            ? function (e) {
                return "ConnectAdvanced(" + e + ")";
              }
            : a,
        l = n.methodName,
        s = void 0 === l ? "connectAdvanced" : l,
        d = n.renderCountProp,
        v = void 0 === d ? void 0 : d,
        k = n.shouldHandleStateChanges,
        T = void 0 === k || k,
        O = n.storeKey,
        P = void 0 === O ? "store" : O,
        _ = (n.withRef, n.forwardRef),
        C = void 0 !== _ && _,
        M = n.context,
        N = void 0 === M ? i : M,
        j = p(n, [
          "getDisplayName",
          "methodName",
          "renderCountProp",
          "shouldHandleStateChanges",
          "storeKey",
          "withRef",
          "forwardRef",
          "context",
        ]),
        A = N;
      return function (t) {
        var n = t.displayName || t.name || "Component",
          i = u(n),
          a = f({}, j, {
            getDisplayName: u,
            methodName: s,
            renderCountProp: v,
            shouldHandleStateChanges: T,
            storeKey: P,
            displayName: i,
            wrappedComponentName: n,
            WrappedComponent: t,
          }),
          l = j.pure;
        var d = l
          ? r.useMemo
          : function (e) {
              return e();
            };
        function k(n) {
          var i = Object(r.useMemo)(
              function () {
                var e = n.forwardedRef,
                  t = p(n, ["forwardedRef"]);
                return [n.context, e, t];
              },
              [n]
            ),
            u = i[0],
            l = i[1],
            s = i[2],
            h = Object(r.useMemo)(
              function () {
                return u &&
                  u.Consumer &&
                  Object(m.isContextConsumer)(
                    o.a.createElement(u.Consumer, null)
                  )
                  ? u
                  : A;
              },
              [u, A]
            ),
            v = Object(r.useContext)(h),
            k =
              Boolean(n.store) &&
              Boolean(n.store.getState) &&
              Boolean(n.store.dispatch);
          Boolean(v) && Boolean(v.store);
          var O = k ? n.store : v.store,
            P = Object(r.useMemo)(
              function () {
                return (function (t) {
                  return e(t.dispatch, a);
                })(O);
              },
              [O]
            ),
            _ = Object(r.useMemo)(
              function () {
                if (!T) return g;
                var e = new c(O, k ? null : v.subscription),
                  t = e.notifyNestedSubs.bind(e);
                return [e, t];
              },
              [O, k, v]
            ),
            C = _[0],
            M = _[1],
            N = Object(r.useMemo)(
              function () {
                return k ? v : f({}, v, { subscription: C });
              },
              [k, v, C]
            ),
            j = Object(r.useReducer)(b, y, S),
            R = j[0][0],
            D = j[1];
          if (R && R.error) throw R.error;
          var I = Object(r.useRef)(),
            F = Object(r.useRef)(s),
            L = Object(r.useRef)(),
            z = Object(r.useRef)(!1),
            U = d(
              function () {
                return L.current && s === F.current
                  ? L.current
                  : P(O.getState(), s);
              },
              [O, R, s]
            );
          w(x, [F, I, z, s, U, L, M]),
            w(E, [T, O, C, P, F, I, z, L, M, D], [O, C, P]);
          var H = Object(r.useMemo)(
            function () {
              return o.a.createElement(t, f({}, U, { ref: l }));
            },
            [l, t, U]
          );
          return Object(r.useMemo)(
            function () {
              return T ? o.a.createElement(h.Provider, { value: N }, H) : H;
            },
            [h, H, N]
          );
        }
        var O = l ? o.a.memo(k) : k;
        if (((O.WrappedComponent = t), (O.displayName = i), C)) {
          var _ = o.a.forwardRef(function (e, t) {
            return o.a.createElement(O, f({}, e, { forwardedRef: t }));
          });
          return (_.displayName = i), (_.WrappedComponent = t), h()(_, t);
        }
        return h()(O, t);
      };
    }
    function T(e, t) {
      return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
    }
    function O(e, t) {
      if (T(e, t)) return !0;
      if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (var o = 0; o < n.length; o++)
        if (
          !Object.prototype.hasOwnProperty.call(t, n[o]) ||
          !T(e[n[o]], t[n[o]])
        )
          return !1;
      return !0;
    }
    var P = n(33);
    function _(e) {
      return function (t, n) {
        var r = e(t, n);
        function o() {
          return r;
        }
        return (o.dependsOnOwnProps = !1), o;
      };
    }
    function C(e) {
      return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps
        ? Boolean(e.dependsOnOwnProps)
        : 1 !== e.length;
    }
    function M(e, t) {
      return function (t, n) {
        n.displayName;
        var r = function (e, t) {
          return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e);
        };
        return (
          (r.dependsOnOwnProps = !0),
          (r.mapToProps = function (t, n) {
            (r.mapToProps = e), (r.dependsOnOwnProps = C(e));
            var o = r(t, n);
            return (
              "function" == typeof o &&
                ((r.mapToProps = o),
                (r.dependsOnOwnProps = C(o)),
                (o = r(t, n))),
              o
            );
          }),
          r
        );
      };
    }
    var N = [
      function (e) {
        return "function" == typeof e ? M(e) : void 0;
      },
      function (e) {
        return e
          ? void 0
          : _(function (e) {
              return { dispatch: e };
            });
      },
      function (e) {
        return e && "object" == typeof e
          ? _(function (t) {
              return Object(P.bindActionCreators)(e, t);
            })
          : void 0;
      },
    ];
    var j = [
      function (e) {
        return "function" == typeof e ? M(e) : void 0;
      },
      function (e) {
        return e
          ? void 0
          : _(function () {
              return {};
            });
      },
    ];
    function A(e, t, n) {
      return f({}, n, {}, e, {}, t);
    }
    var R = [
      function (e) {
        return "function" == typeof e
          ? (function (e) {
              return function (t, n) {
                n.displayName;
                var r,
                  o = n.pure,
                  i = n.areMergedPropsEqual,
                  a = !1;
                return function (t, n, u) {
                  var l = e(t, n, u);
                  return a ? (o && i(l, r)) || (r = l) : ((a = !0), (r = l)), r;
                };
              };
            })(e)
          : void 0;
      },
      function (e) {
        return e
          ? void 0
          : function () {
              return A;
            };
      },
    ];
    function D(e, t, n, r) {
      return function (o, i) {
        return n(e(o, i), t(r, i), i);
      };
    }
    function I(e, t, n, r, o) {
      var i,
        a,
        u,
        l,
        c,
        s = o.areStatesEqual,
        f = o.areOwnPropsEqual,
        p = o.areStatePropsEqual,
        d = !1;
      function h(o, d) {
        var h,
          m,
          v = !f(d, a),
          y = !s(o, i);
        return (
          (i = o),
          (a = d),
          v && y
            ? ((u = e(i, a)),
              t.dependsOnOwnProps && (l = t(r, a)),
              (c = n(u, l, a)))
            : v
            ? (e.dependsOnOwnProps && (u = e(i, a)),
              t.dependsOnOwnProps && (l = t(r, a)),
              (c = n(u, l, a)))
            : y
            ? ((h = e(i, a)), (m = !p(h, u)), (u = h), m && (c = n(u, l, a)), c)
            : c
        );
      }
      return function (o, s) {
        return d
          ? h(o, s)
          : ((u = e((i = o), (a = s))),
            (l = t(r, a)),
            (c = n(u, l, a)),
            (d = !0),
            c);
      };
    }
    function F(e, t) {
      var n = t.initMapStateToProps,
        r = t.initMapDispatchToProps,
        o = t.initMergeProps,
        i = p(t, [
          "initMapStateToProps",
          "initMapDispatchToProps",
          "initMergeProps",
        ]),
        a = n(e, i),
        u = r(e, i),
        l = o(e, i);
      return (i.pure ? I : D)(a, u, l, e, i);
    }
    function L(e, t, n) {
      for (var r = t.length - 1; r >= 0; r--) {
        var o = t[r](e);
        if (o) return o;
      }
      return function (t, r) {
        throw new Error(
          "Invalid value of type " +
            typeof e +
            " for " +
            n +
            " argument when connecting component " +
            r.wrappedComponentName +
            "."
        );
      };
    }
    function z(e, t) {
      return e === t;
    }
    function U(e) {
      var t = void 0 === e ? {} : e,
        n = t.connectHOC,
        r = void 0 === n ? k : n,
        o = t.mapStateToPropsFactories,
        i = void 0 === o ? j : o,
        a = t.mapDispatchToPropsFactories,
        u = void 0 === a ? N : a,
        l = t.mergePropsFactories,
        c = void 0 === l ? R : l,
        s = t.selectorFactory,
        d = void 0 === s ? F : s;
      return function (e, t, n, o) {
        void 0 === o && (o = {});
        var a = o,
          l = a.pure,
          s = void 0 === l || l,
          h = a.areStatesEqual,
          m = void 0 === h ? z : h,
          v = a.areOwnPropsEqual,
          y = void 0 === v ? O : v,
          g = a.areStatePropsEqual,
          b = void 0 === g ? O : g,
          w = a.areMergedPropsEqual,
          x = void 0 === w ? O : w,
          E = p(a, [
            "pure",
            "areStatesEqual",
            "areOwnPropsEqual",
            "areStatePropsEqual",
            "areMergedPropsEqual",
          ]),
          S = L(e, i, "mapStateToProps"),
          k = L(t, u, "mapDispatchToProps"),
          T = L(n, c, "mergeProps");
        return r(
          d,
          f(
            {
              methodName: "connect",
              getDisplayName: function (e) {
                return "Connect(" + e + ")";
              },
              shouldHandleStateChanges: Boolean(e),
              initMapStateToProps: S,
              initMapDispatchToProps: k,
              initMergeProps: T,
              pure: s,
              areStatesEqual: m,
              areOwnPropsEqual: y,
              areStatePropsEqual: b,
              areMergedPropsEqual: x,
            },
            E
          )
        );
      };
    }
    var H = U();
    function V() {
      return Object(r.useContext)(i);
    }
    function B(e) {
      void 0 === e && (e = i);
      var t =
        e === i
          ? V
          : function () {
              return Object(r.useContext)(e);
            };
      return function () {
        return t().store;
      };
    }
    var W = B();
    function $(e) {
      void 0 === e && (e = i);
      var t = e === i ? W : B(e);
      return function () {
        return t().dispatch;
      };
    }
    var q = $(),
      K = function (e, t) {
        return e === t;
      };
    function Q(e) {
      void 0 === e && (e = i);
      var t =
        e === i
          ? V
          : function () {
              return Object(r.useContext)(e);
            };
      return function (e, n) {
        void 0 === n && (n = K);
        var o = t();
        return (function (e, t, n, o) {
          var i,
            a = Object(r.useReducer)(function (e) {
              return e + 1;
            }, 0)[1],
            u = Object(r.useMemo)(
              function () {
                return new c(n, o);
              },
              [n, o]
            ),
            l = Object(r.useRef)(),
            s = Object(r.useRef)(),
            f = Object(r.useRef)();
          try {
            i = e !== s.current || l.current ? e(n.getState()) : f.current;
          } catch (e) {
            throw (
              (l.current &&
                (e.message +=
                  "\nThe error may be correlated with this previous error:\n" +
                  l.current.stack +
                  "\n\n"),
              e)
            );
          }
          return (
            v(function () {
              (s.current = e), (f.current = i), (l.current = void 0);
            }),
            v(
              function () {
                function e() {
                  try {
                    var e = s.current(n.getState());
                    if (t(e, f.current)) return;
                    f.current = e;
                  } catch (e) {
                    l.current = e;
                  }
                  a({});
                }
                return (
                  (u.onStateChange = e),
                  u.trySubscribe(),
                  e(),
                  function () {
                    return u.tryUnsubscribe();
                  }
                );
              },
              [n, u]
            ),
            i
          );
        })(e, n, o.store, o.subscription);
      };
    }
    var G,
      Y = Q(),
      X = n(4);
    (G = X.unstable_batchedUpdates), (a = G);
  },
  function (e, t, n) {
    "use strict";
    e.exports = n(81);
  },
  function (e, t, n) {
    "use strict";
    var r = n(53),
      o = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      i = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      },
      a = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
      },
      u = {};
    function l(e) {
      return r.isMemo(e) ? a : u[e.$$typeof] || o;
    }
    (u[r.ForwardRef] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
      (u[r.Memo] = a);
    var c = Object.defineProperty,
      s = Object.getOwnPropertyNames,
      f = Object.getOwnPropertySymbols,
      p = Object.getOwnPropertyDescriptor,
      d = Object.getPrototypeOf,
      h = Object.prototype;
    e.exports = function e(t, n, r) {
      if ("string" != typeof n) {
        if (h) {
          var o = d(n);
          o && o !== h && e(t, o, r);
        }
        var a = s(n);
        f && (a = a.concat(f(n)));
        for (var u = l(t), m = l(n), v = 0; v < a.length; ++v) {
          var y = a[v];
          if (!(i[y] || (r && r[y]) || (m && m[y]) || (u && u[y]))) {
            var g = p(n, y);
            try {
              c(t, y, g);
            } catch (e) {}
          }
        }
      }
      return t;
    };
  },
  function (e, t, n) {
    "use strict";
    (function (e, r) {
      var o,
        i = n(70);
      o =
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : void 0 !== e
          ? e
          : r;
      var a = Object(i.a)(o);
      t.a = a;
    }).call(this, n(36), n(82)(e));
  },
  function (e, t, n) {
    "use strict";
    var r = function (e) {
      return e && e.__esModule ? e : { default: e };
    };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n(33),
      i = r(n(83));
    t.default = o.createStore(i.default);
  },
  function (e, t, n) {
    e.exports =
      !n(14) &&
      !n(22)(function () {
        return (
          7 !=
          Object.defineProperty(n(58)("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t, n) {
    var r = n(21),
      o = n(12).document,
      i = r(o) && r(o.createElement);
    e.exports = function (e) {
      return i ? o.createElement(e) : {};
    };
  },
  function (e, t, n) {
    var r = n(15),
      o = n(16),
      i = n(95)(!1),
      a = n(43)("IE_PROTO");
    e.exports = function (e, t) {
      var n,
        u = o(e),
        l = 0,
        c = [];
      for (n in u) n != a && r(u, n) && c.push(n);
      for (; t.length > l; ) r(u, (n = t[l++])) && (~i(c, n) || c.push(n));
      return c;
    };
  },
  function (e, t, n) {
    var r = n(40);
    e.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (e) {
          return "String" == r(e) ? e.split("") : Object(e);
        };
  },
  function (e, t, n) {
    var r = n(42),
      o = Math.min;
    e.exports = function (e) {
      return e > 0 ? o(r(e), 9007199254740991) : 0;
    };
  },
  function (e, t, n) {
    e.exports = { default: n(97), __esModule: !0 };
  },
  function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = a(n(99)),
      o = a(n(109)),
      i =
        "function" == typeof o.default && "symbol" == typeof r.default
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof o.default &&
                e.constructor === o.default &&
                e !== o.default.prototype
                ? "symbol"
                : typeof e;
            };
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default =
      "function" == typeof o.default && "symbol" === i(r.default)
        ? function (e) {
            return void 0 === e ? "undefined" : i(e);
          }
        : function (e) {
            return e &&
              "function" == typeof o.default &&
              e.constructor === o.default &&
              e !== o.default.prototype
              ? "symbol"
              : void 0 === e
              ? "undefined"
              : i(e);
          };
  },
  function (e, t, n) {
    "use strict";
    var r = n(101)(!0);
    n(65)(
      String,
      "String",
      function (e) {
        (this._t = String(e)), (this._i = 0);
      },
      function () {
        var e,
          t = this._t,
          n = this._i;
        return n >= t.length
          ? { value: void 0, done: !0 }
          : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
      }
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(29),
      o = n(11),
      i = n(66),
      a = n(19),
      u = n(26),
      l = n(102),
      c = n(48),
      s = n(67),
      f = n(7)("iterator"),
      p = !([].keys && "next" in [].keys()),
      d = function () {
        return this;
      };
    e.exports = function (e, t, n, h, m, v, y) {
      l(n, t, h);
      var g,
        b,
        w,
        x = function (e) {
          if (!p && e in T) return T[e];
          switch (e) {
            case "keys":
            case "values":
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this, e);
          };
        },
        E = t + " Iterator",
        S = "values" == m,
        k = !1,
        T = e.prototype,
        O = T[f] || T["@@iterator"] || (m && T[m]),
        P = O || x(m),
        _ = m ? (S ? x("entries") : P) : void 0,
        C = ("Array" == t && T.entries) || O;
      if (
        (C &&
          (w = s(C.call(new e()))) !== Object.prototype &&
          w.next &&
          (c(w, E, !0), r || "function" == typeof w[f] || a(w, f, d)),
        S &&
          O &&
          "values" !== O.name &&
          ((k = !0),
          (P = function () {
            return O.call(this);
          })),
        (r && !y) || (!p && !k && T[f]) || a(T, f, P),
        (u[t] = P),
        (u[E] = d),
        m)
      )
        if (
          ((g = {
            values: S ? P : x("values"),
            keys: v ? P : x("keys"),
            entries: _,
          }),
          y)
        )
          for (b in g) b in T || i(T, b, g[b]);
        else o(o.P + o.F * (p || k), t, g);
      return g;
    };
  },
  function (e, t, n) {
    e.exports = n(19);
  },
  function (e, t, n) {
    var r = n(15),
      o = n(32),
      i = n(43)("IE_PROTO"),
      a = Object.prototype;
    e.exports =
      Object.getPrototypeOf ||
      function (e) {
        return (
          (e = o(e)),
          r(e, i)
            ? e[i]
            : "function" == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? a
            : null
        );
      };
  },
  function (e, t, n) {
    var r = n(59),
      o = n(45).concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return r(e, o);
      };
  },
  function (e, t, n) {
    var r = n(11),
      o = n(5),
      i = n(22);
    e.exports = function (e, t) {
      var n = (o.Object || {})[e] || Object[e],
        a = {};
      (a[e] = t(n)),
        r(
          r.S +
            r.F *
              i(function () {
                n(1);
              }),
          "Object",
          a
        );
    };
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      var t,
        n = e.Symbol;
      return (
        "function" == typeof n
          ? n.observable
            ? (t = n.observable)
            : ((t = n("observable")), (n.observable = t))
          : (t = "@@observable"),
        t
      );
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function (e, t, n, r) {
        function o(t) {
          var r = new i.default(t);
          n.call(e, r);
        }
        if (e.addEventListener) {
          var a =
            ((u = !1),
            "object" == typeof r
              ? (u = r.capture || !1)
              : "boolean" == typeof r && (u = r),
            e.addEventListener(t, o, r || !1),
            {
              v: {
                remove: function () {
                  e.removeEventListener(t, o, u);
                },
              },
            });
          if ("object" == typeof a) return a.v;
        } else if (e.attachEvent)
          return (
            e.attachEvent("on" + t, o),
            {
              remove: function () {
                e.detachEvent("on" + t, o);
              },
            }
          );
        var u;
      });
    var r,
      o = n(132),
      i = (r = o) && r.__esModule ? r : { default: r };
    e.exports = t.default;
  },
  function (e, t) {
    e.exports = function (e, t, n, r) {
      var o = n ? n.call(r, e, t) : void 0;
      if (void 0 !== o) return !!o;
      if (e === t) return !0;
      if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
      var i = Object.keys(e),
        a = Object.keys(t);
      if (i.length !== a.length) return !1;
      for (
        var u = Object.prototype.hasOwnProperty.bind(t), l = 0;
        l < i.length;
        l++
      ) {
        var c = i[l];
        if (!u(c)) return !1;
        var s = e[c],
          f = t[c];
        if (
          !1 === (o = n ? n.call(r, s, f, c) : void 0) ||
          (void 0 === o && s !== f)
        )
          return !1;
      }
      return !0;
    };
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var n = (function () {
          if ("undefined" != typeof Map) return Map;
          function e(e, t) {
            var n = -1;
            return (
              e.some(function (e, r) {
                return e[0] === t && ((n = r), !0);
              }),
              n
            );
          }
          return (function () {
            function t() {
              this.__entries__ = [];
            }
            return (
              Object.defineProperty(t.prototype, "size", {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.get = function (t) {
                var n = e(this.__entries__, t),
                  r = this.__entries__[n];
                return r && r[1];
              }),
              (t.prototype.set = function (t, n) {
                var r = e(this.__entries__, t);
                ~r
                  ? (this.__entries__[r][1] = n)
                  : this.__entries__.push([t, n]);
              }),
              (t.prototype.delete = function (t) {
                var n = this.__entries__,
                  r = e(n, t);
                ~r && n.splice(r, 1);
              }),
              (t.prototype.has = function (t) {
                return !!~e(this.__entries__, t);
              }),
              (t.prototype.clear = function () {
                this.__entries__.splice(0);
              }),
              (t.prototype.forEach = function (e, t) {
                void 0 === t && (t = null);
                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                  var o = r[n];
                  e.call(t, o[1], o[0]);
                }
              }),
              t
            );
          })();
        })(),
        r =
          "undefined" != typeof window &&
          "undefined" != typeof document &&
          window.document === document,
        o =
          void 0 !== e && e.Math === Math
            ? e
            : "undefined" != typeof self && self.Math === Math
            ? self
            : "undefined" != typeof window && window.Math === Math
            ? window
            : Function("return this")(),
        i =
          "function" == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(o)
            : function (e) {
                return setTimeout(function () {
                  return e(Date.now());
                }, 1e3 / 60);
              };
      var a = [
          "top",
          "right",
          "bottom",
          "left",
          "width",
          "height",
          "size",
          "weight",
        ],
        u = "undefined" != typeof MutationObserver,
        l = (function () {
          function e() {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function (e, t) {
                var n = !1,
                  r = !1,
                  o = 0;
                function a() {
                  n && ((n = !1), e()), r && l();
                }
                function u() {
                  i(a);
                }
                function l() {
                  var e = Date.now();
                  if (n) {
                    if (e - o < 2) return;
                    r = !0;
                  } else (n = !0), (r = !1), setTimeout(u, t);
                  o = e;
                }
                return l;
              })(this.refresh.bind(this), 20));
          }
          return (
            (e.prototype.addObserver = function (e) {
              ~this.observers_.indexOf(e) || this.observers_.push(e),
                this.connected_ || this.connect_();
            }),
            (e.prototype.removeObserver = function (e) {
              var t = this.observers_,
                n = t.indexOf(e);
              ~n && t.splice(n, 1),
                !t.length && this.connected_ && this.disconnect_();
            }),
            (e.prototype.refresh = function () {
              this.updateObservers_() && this.refresh();
            }),
            (e.prototype.updateObservers_ = function () {
              var e = this.observers_.filter(function (e) {
                return e.gatherActive(), e.hasActive();
              });
              return (
                e.forEach(function (e) {
                  return e.broadcastActive();
                }),
                e.length > 0
              );
            }),
            (e.prototype.connect_ = function () {
              r &&
                !this.connected_ &&
                (document.addEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.addEventListener("resize", this.refresh),
                u
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      "DOMSubtreeModified",
                      this.refresh
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (e.prototype.disconnect_ = function () {
              r &&
                this.connected_ &&
                (document.removeEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (e.prototype.onTransitionEnd_ = function (e) {
              var t = e.propertyName,
                n = void 0 === t ? "" : t;
              a.some(function (e) {
                return !!~n.indexOf(e);
              }) && this.refresh();
            }),
            (e.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new e()), this.instance_
              );
            }),
            (e.instance_ = null),
            e
          );
        })(),
        c = function (e, t) {
          for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var o = r[n];
            Object.defineProperty(e, o, {
              value: t[o],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          }
          return e;
        },
        s = function (e) {
          return (e && e.ownerDocument && e.ownerDocument.defaultView) || o;
        },
        f = y(0, 0, 0, 0);
      function p(e) {
        return parseFloat(e) || 0;
      }
      function d(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return t.reduce(function (t, n) {
          return t + p(e["border-" + n + "-width"]);
        }, 0);
      }
      function h(e) {
        var t = e.clientWidth,
          n = e.clientHeight;
        if (!t && !n) return f;
        var r = s(e).getComputedStyle(e),
          o = (function (e) {
            for (
              var t = {}, n = 0, r = ["top", "right", "bottom", "left"];
              n < r.length;
              n++
            ) {
              var o = r[n],
                i = e["padding-" + o];
              t[o] = p(i);
            }
            return t;
          })(r),
          i = o.left + o.right,
          a = o.top + o.bottom,
          u = p(r.width),
          l = p(r.height);
        if (
          ("border-box" === r.boxSizing &&
            (Math.round(u + i) !== t && (u -= d(r, "left", "right") + i),
            Math.round(l + a) !== n && (l -= d(r, "top", "bottom") + a)),
          !(function (e) {
            return e === s(e).document.documentElement;
          })(e))
        ) {
          var c = Math.round(u + i) - t,
            h = Math.round(l + a) - n;
          1 !== Math.abs(c) && (u -= c), 1 !== Math.abs(h) && (l -= h);
        }
        return y(o.left, o.top, u, l);
      }
      var m =
        "undefined" != typeof SVGGraphicsElement
          ? function (e) {
              return e instanceof s(e).SVGGraphicsElement;
            }
          : function (e) {
              return (
                e instanceof s(e).SVGElement && "function" == typeof e.getBBox
              );
            };
      function v(e) {
        return r
          ? m(e)
            ? (function (e) {
                var t = e.getBBox();
                return y(0, 0, t.width, t.height);
              })(e)
            : h(e)
          : f;
      }
      function y(e, t, n, r) {
        return { x: e, y: t, width: n, height: r };
      }
      var g = (function () {
          function e(e) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = y(0, 0, 0, 0)),
              (this.target = e);
          }
          return (
            (e.prototype.isActive = function () {
              var e = v(this.target);
              return (
                (this.contentRect_ = e),
                e.width !== this.broadcastWidth ||
                  e.height !== this.broadcastHeight
              );
            }),
            (e.prototype.broadcastRect = function () {
              var e = this.contentRect_;
              return (
                (this.broadcastWidth = e.width),
                (this.broadcastHeight = e.height),
                e
              );
            }),
            e
          );
        })(),
        b = function (e, t) {
          var n,
            r,
            o,
            i,
            a,
            u,
            l,
            s =
              ((r = (n = t).x),
              (o = n.y),
              (i = n.width),
              (a = n.height),
              (u =
                "undefined" != typeof DOMRectReadOnly
                  ? DOMRectReadOnly
                  : Object),
              (l = Object.create(u.prototype)),
              c(l, {
                x: r,
                y: o,
                width: i,
                height: a,
                top: o,
                right: r + i,
                bottom: a + o,
                left: r,
              }),
              l);
          c(this, { target: e, contentRect: s });
        },
        w = (function () {
          function e(e, t, r) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new n()),
              "function" != typeof e)
            )
              throw new TypeError(
                "The callback provided as parameter 1 is not a function."
              );
            (this.callback_ = e),
              (this.controller_ = t),
              (this.callbackCtx_ = r);
          }
          return (
            (e.prototype.observe = function (e) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof s(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) ||
                  (t.set(e, new g(e)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh());
              }
            }),
            (e.prototype.unobserve = function (e) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof s(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) &&
                  (t.delete(e),
                  t.size || this.controller_.removeObserver(this));
              }
            }),
            (e.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            }),
            (e.prototype.gatherActive = function () {
              var e = this;
              this.clearActive(),
                this.observations_.forEach(function (t) {
                  t.isActive() && e.activeObservations_.push(t);
                });
            }),
            (e.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var e = this.callbackCtx_,
                  t = this.activeObservations_.map(function (e) {
                    return new b(e.target, e.broadcastRect());
                  });
                this.callback_.call(e, t, e), this.clearActive();
              }
            }),
            (e.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            }),
            (e.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            }),
            e
          );
        })(),
        x = "undefined" != typeof WeakMap ? new WeakMap() : new n(),
        E = function e(t) {
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          var n = l.getInstance(),
            r = new w(t, n, this);
          x.set(this, r);
        };
      ["observe", "unobserve", "disconnect"].forEach(function (e) {
        E.prototype[e] = function () {
          var t;
          return (t = x.get(this))[e].apply(t, arguments);
        };
      });
      var S = void 0 !== o.ResizeObserver ? o.ResizeObserver : E;
      t.a = S;
    }).call(this, n(36));
  },
  function (e, t, n) {
    "use strict";
    var r = Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n),
              Object.defineProperty(e, r, {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              });
          }
        : function (e, t, n, r) {
            void 0 === r && (r = n), (e[r] = t[n]);
          },
      o = Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          },
      i = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.hasOwnProperty.call(e, n) && r(t, e, n);
        return o(t, e), t;
      },
      a = function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = i(n(0)),
      l = i(n(4)),
      c = n(52),
      s = a(n(56)),
      f = a(n(84));
    l.render(
      u.createElement(
        c.Provider,
        { store: s.default },
        u.createElement(f.default, null)
      ),
      document.getElementById("root")
    );
  },
  function (e, t, n) {
    "use strict";
    /** @license React v16.13.1
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(35),
      o = "function" == typeof Symbol && Symbol.for,
      i = o ? Symbol.for("react.element") : 60103,
      a = o ? Symbol.for("react.portal") : 60106,
      u = o ? Symbol.for("react.fragment") : 60107,
      l = o ? Symbol.for("react.strict_mode") : 60108,
      c = o ? Symbol.for("react.profiler") : 60114,
      s = o ? Symbol.for("react.provider") : 60109,
      f = o ? Symbol.for("react.context") : 60110,
      p = o ? Symbol.for("react.forward_ref") : 60112,
      d = o ? Symbol.for("react.suspense") : 60113,
      h = o ? Symbol.for("react.memo") : 60115,
      m = o ? Symbol.for("react.lazy") : 60116,
      v = "function" == typeof Symbol && Symbol.iterator;
    function y(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var g = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      b = {};
    function w(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = b),
        (this.updater = n || g);
    }
    function x() {}
    function E(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = b),
        (this.updater = n || g);
    }
    (w.prototype.isReactComponent = {}),
      (w.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e)
          throw Error(y(85));
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (w.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (x.prototype = w.prototype);
    var S = (E.prototype = new x());
    (S.constructor = E), r(S, w.prototype), (S.isPureReactComponent = !0);
    var k = { current: null },
      T = Object.prototype.hasOwnProperty,
      O = { key: !0, ref: !0, __self: !0, __source: !0 };
    function P(e, t, n) {
      var r,
        o = {},
        a = null,
        u = null;
      if (null != t)
        for (r in (void 0 !== t.ref && (u = t.ref),
        void 0 !== t.key && (a = "" + t.key),
        t))
          T.call(t, r) && !O.hasOwnProperty(r) && (o[r] = t[r]);
      var l = arguments.length - 2;
      if (1 === l) o.children = n;
      else if (1 < l) {
        for (var c = Array(l), s = 0; s < l; s++) c[s] = arguments[s + 2];
        o.children = c;
      }
      if (e && e.defaultProps)
        for (r in (l = e.defaultProps)) void 0 === o[r] && (o[r] = l[r]);
      return {
        $$typeof: i,
        type: e,
        key: a,
        ref: u,
        props: o,
        _owner: k.current,
      };
    }
    function _(e) {
      return "object" == typeof e && null !== e && e.$$typeof === i;
    }
    var C = /\/+/g,
      M = [];
    function N(e, t, n, r) {
      if (M.length) {
        var o = M.pop();
        return (
          (o.result = e),
          (o.keyPrefix = t),
          (o.func = n),
          (o.context = r),
          (o.count = 0),
          o
        );
      }
      return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
    }
    function j(e) {
      (e.result = null),
        (e.keyPrefix = null),
        (e.func = null),
        (e.context = null),
        (e.count = 0),
        10 > M.length && M.push(e);
    }
    function A(e, t, n) {
      return null == e
        ? 0
        : (function e(t, n, r, o) {
            var u = typeof t;
            ("undefined" !== u && "boolean" !== u) || (t = null);
            var l = !1;
            if (null === t) l = !0;
            else
              switch (u) {
                case "string":
                case "number":
                  l = !0;
                  break;
                case "object":
                  switch (t.$$typeof) {
                    case i:
                    case a:
                      l = !0;
                  }
              }
            if (l) return r(o, t, "" === n ? "." + R(t, 0) : n), 1;
            if (((l = 0), (n = "" === n ? "." : n + ":"), Array.isArray(t)))
              for (var c = 0; c < t.length; c++) {
                var s = n + R((u = t[c]), c);
                l += e(u, s, r, o);
              }
            else if (
              (null === t || "object" != typeof t
                ? (s = null)
                : (s =
                    "function" == typeof (s = (v && t[v]) || t["@@iterator"])
                      ? s
                      : null),
              "function" == typeof s)
            )
              for (t = s.call(t), c = 0; !(u = t.next()).done; )
                l += e((u = u.value), (s = n + R(u, c++)), r, o);
            else if ("object" === u)
              throw (
                ((r = "" + t),
                Error(
                  y(
                    31,
                    "[object Object]" === r
                      ? "object with keys {" + Object.keys(t).join(", ") + "}"
                      : r,
                    ""
                  )
                ))
              );
            return l;
          })(e, "", t, n);
    }
    function R(e, t) {
      return "object" == typeof e && null !== e && null != e.key
        ? (function (e) {
            var t = { "=": "=0", ":": "=2" };
            return (
              "$" +
              ("" + e).replace(/[=:]/g, function (e) {
                return t[e];
              })
            );
          })(e.key)
        : t.toString(36);
    }
    function D(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function I(e, t, n) {
      var r = e.result,
        o = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)),
        Array.isArray(e)
          ? F(e, r, n, function (e) {
              return e;
            })
          : null != e &&
            (_(e) &&
              (e = (function (e, t) {
                return {
                  $$typeof: i,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner,
                };
              })(
                e,
                o +
                  (!e.key || (t && t.key === e.key)
                    ? ""
                    : ("" + e.key).replace(C, "$&/") + "/") +
                  n
              )),
            r.push(e));
    }
    function F(e, t, n, r, o) {
      var i = "";
      null != n && (i = ("" + n).replace(C, "$&/") + "/"),
        A(e, I, (t = N(t, i, r, o))),
        j(t);
    }
    var L = { current: null };
    function z() {
      var e = L.current;
      if (null === e) throw Error(y(321));
      return e;
    }
    var U = {
      ReactCurrentDispatcher: L,
      ReactCurrentBatchConfig: { suspense: null },
      ReactCurrentOwner: k,
      IsSomeRendererActing: { current: !1 },
      assign: r,
    };
    (t.Children = {
      map: function (e, t, n) {
        if (null == e) return e;
        var r = [];
        return F(e, r, null, t, n), r;
      },
      forEach: function (e, t, n) {
        if (null == e) return e;
        A(e, D, (t = N(null, null, t, n))), j(t);
      },
      count: function (e) {
        return A(
          e,
          function () {
            return null;
          },
          null
        );
      },
      toArray: function (e) {
        var t = [];
        return (
          F(e, t, null, function (e) {
            return e;
          }),
          t
        );
      },
      only: function (e) {
        if (!_(e)) throw Error(y(143));
        return e;
      },
    }),
      (t.Component = w),
      (t.Fragment = u),
      (t.Profiler = c),
      (t.PureComponent = E),
      (t.StrictMode = l),
      (t.Suspense = d),
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U),
      (t.cloneElement = function (e, t, n) {
        if (null == e) throw Error(y(267, e));
        var o = r({}, e.props),
          a = e.key,
          u = e.ref,
          l = e._owner;
        if (null != t) {
          if (
            (void 0 !== t.ref && ((u = t.ref), (l = k.current)),
            void 0 !== t.key && (a = "" + t.key),
            e.type && e.type.defaultProps)
          )
            var c = e.type.defaultProps;
          for (s in t)
            T.call(t, s) &&
              !O.hasOwnProperty(s) &&
              (o[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s]);
        }
        var s = arguments.length - 2;
        if (1 === s) o.children = n;
        else if (1 < s) {
          c = Array(s);
          for (var f = 0; f < s; f++) c[f] = arguments[f + 2];
          o.children = c;
        }
        return {
          $$typeof: i,
          type: e.type,
          key: a,
          ref: u,
          props: o,
          _owner: l,
        };
      }),
      (t.createContext = function (e, t) {
        return (
          void 0 === t && (t = null),
          ((e = {
            $$typeof: f,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }).Provider = { $$typeof: s, _context: e }),
          (e.Consumer = e)
        );
      }),
      (t.createElement = P),
      (t.createFactory = function (e) {
        var t = P.bind(null, e);
        return (t.type = e), t;
      }),
      (t.createRef = function () {
        return { current: null };
      }),
      (t.forwardRef = function (e) {
        return { $$typeof: p, render: e };
      }),
      (t.isValidElement = _),
      (t.lazy = function (e) {
        return { $$typeof: m, _ctor: e, _status: -1, _result: null };
      }),
      (t.memo = function (e, t) {
        return { $$typeof: h, type: e, compare: void 0 === t ? null : t };
      }),
      (t.useCallback = function (e, t) {
        return z().useCallback(e, t);
      }),
      (t.useContext = function (e, t) {
        return z().useContext(e, t);
      }),
      (t.useDebugValue = function () {}),
      (t.useEffect = function (e, t) {
        return z().useEffect(e, t);
      }),
      (t.useImperativeHandle = function (e, t, n) {
        return z().useImperativeHandle(e, t, n);
      }),
      (t.useLayoutEffect = function (e, t) {
        return z().useLayoutEffect(e, t);
      }),
      (t.useMemo = function (e, t) {
        return z().useMemo(e, t);
      }),
      (t.useReducer = function (e, t, n) {
        return z().useReducer(e, t, n);
      }),
      (t.useRef = function (e) {
        return z().useRef(e);
      }),
      (t.useState = function (e) {
        return z().useState(e);
      }),
      (t.version = "16.13.1");
  },
  function (e, t, n) {
    "use strict";
    /** @license React v16.13.1
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(0),
      o = n(35),
      i = n(77);
    function a(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    if (!r) throw Error(a(227));
    function u(e, t, n, r, o, i, a, u, l) {
      var c = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, c);
      } catch (e) {
        this.onError(e);
      }
    }
    var l = !1,
      c = null,
      s = !1,
      f = null,
      p = {
        onError: function (e) {
          (l = !0), (c = e);
        },
      };
    function d(e, t, n, r, o, i, a, s, f) {
      (l = !1), (c = null), u.apply(p, arguments);
    }
    var h = null,
      m = null,
      v = null;
    function y(e, t, n) {
      var r = e.type || "unknown-event";
      (e.currentTarget = v(n)),
        (function (e, t, n, r, o, i, u, p, h) {
          if ((d.apply(this, arguments), l)) {
            if (!l) throw Error(a(198));
            var m = c;
            (l = !1), (c = null), s || ((s = !0), (f = m));
          }
        })(r, t, void 0, e),
        (e.currentTarget = null);
    }
    var g = null,
      b = {};
    function w() {
      if (g)
        for (var e in b) {
          var t = b[e],
            n = g.indexOf(e);
          if (!(-1 < n)) throw Error(a(96, e));
          if (!E[n]) {
            if (!t.extractEvents) throw Error(a(97, e));
            for (var r in ((E[n] = t), (n = t.eventTypes))) {
              var o = void 0,
                i = n[r],
                u = t,
                l = r;
              if (S.hasOwnProperty(l)) throw Error(a(99, l));
              S[l] = i;
              var c = i.phasedRegistrationNames;
              if (c) {
                for (o in c) c.hasOwnProperty(o) && x(c[o], u, l);
                o = !0;
              } else
                i.registrationName
                  ? (x(i.registrationName, u, l), (o = !0))
                  : (o = !1);
              if (!o) throw Error(a(98, r, e));
            }
          }
        }
    }
    function x(e, t, n) {
      if (k[e]) throw Error(a(100, e));
      (k[e] = t), (T[e] = t.eventTypes[n].dependencies);
    }
    var E = [],
      S = {},
      k = {},
      T = {};
    function O(e) {
      var t,
        n = !1;
      for (t in e)
        if (e.hasOwnProperty(t)) {
          var r = e[t];
          if (!b.hasOwnProperty(t) || b[t] !== r) {
            if (b[t]) throw Error(a(102, t));
            (b[t] = r), (n = !0);
          }
        }
      n && w();
    }
    var P = !(
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      ),
      _ = null,
      C = null,
      M = null;
    function N(e) {
      if ((e = m(e))) {
        if ("function" != typeof _) throw Error(a(280));
        var t = e.stateNode;
        t && ((t = h(t)), _(e.stateNode, e.type, t));
      }
    }
    function j(e) {
      C ? (M ? M.push(e) : (M = [e])) : (C = e);
    }
    function A() {
      if (C) {
        var e = C,
          t = M;
        if (((M = C = null), N(e), t)) for (e = 0; e < t.length; e++) N(t[e]);
      }
    }
    function R(e, t) {
      return e(t);
    }
    function D(e, t, n, r, o) {
      return e(t, n, r, o);
    }
    function I() {}
    var F = R,
      L = !1,
      z = !1;
    function U() {
      (null === C && null === M) || (I(), A());
    }
    function H(e, t, n) {
      if (z) return e(t, n);
      z = !0;
      try {
        return F(e, t, n);
      } finally {
        (z = !1), U();
      }
    }
    var V =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      B = Object.prototype.hasOwnProperty,
      W = {},
      $ = {};
    function q(e, t, n, r, o, i) {
      (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i);
    }
    var K = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (e) {
        K[e] = new q(e, 0, !1, e, null, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (e) {
        var t = e[0];
        K[t] = new q(t, 1, !1, e[1], null, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
        e
      ) {
        K[e] = new q(e, 2, !1, e.toLowerCase(), null, !1);
      }),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (e) {
        K[e] = new q(e, 2, !1, e, null, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (e) {
          K[e] = new q(e, 3, !1, e.toLowerCase(), null, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (e) {
        K[e] = new q(e, 3, !0, e, null, !1);
      }),
      ["capture", "download"].forEach(function (e) {
        K[e] = new q(e, 4, !1, e, null, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (e) {
        K[e] = new q(e, 6, !1, e, null, !1);
      }),
      ["rowSpan", "start"].forEach(function (e) {
        K[e] = new q(e, 5, !1, e.toLowerCase(), null, !1);
      });
    var Q = /[\-:]([a-z])/g;
    function G(e) {
      return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Q, G);
        K[t] = new q(t, 1, !1, e, null, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(Q, G);
          K[t] = new q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var t = e.replace(Q, G);
        K[t] = new q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
      }),
      ["tabIndex", "crossOrigin"].forEach(function (e) {
        K[e] = new q(e, 1, !1, e.toLowerCase(), null, !1);
      }),
      (K.xlinkHref = new q(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0
      )),
      ["src", "href", "action", "formAction"].forEach(function (e) {
        K[e] = new q(e, 1, !1, e.toLowerCase(), null, !0);
      });
    var Y = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function X(e, t, n, r) {
      var o = K.hasOwnProperty(t) ? K[t] : null;
      (null !== o
        ? 0 === o.type
        : !r &&
          2 < t.length &&
          ("o" === t[0] || "O" === t[0]) &&
          ("n" === t[1] || "N" === t[1])) ||
        ((function (e, t, n, r) {
          if (
            null == t ||
            (function (e, t, n, r) {
              if (null !== n && 0 === n.type) return !1;
              switch (typeof t) {
                case "function":
                case "symbol":
                  return !0;
                case "boolean":
                  return (
                    !r &&
                    (null !== n
                      ? !n.acceptsBooleans
                      : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                        "aria-" !== e)
                  );
                default:
                  return !1;
              }
            })(e, t, n, r)
          )
            return !0;
          if (r) return !1;
          if (null !== n)
            switch (n.type) {
              case 3:
                return !t;
              case 4:
                return !1 === t;
              case 5:
                return isNaN(t);
              case 6:
                return isNaN(t) || 1 > t;
            }
          return !1;
        })(t, n, o, r) && (n = null),
        r || null === o
          ? (function (e) {
              return (
                !!B.call($, e) ||
                (!B.call(W, e) && (V.test(e) ? ($[e] = !0) : ((W[e] = !0), !1)))
              );
            })(t) &&
            (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
          : o.mustUseProperty
          ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
          : ((t = o.attributeName),
            (r = o.attributeNamespace),
            null === n
              ? e.removeAttribute(t)
              : ((n =
                  3 === (o = o.type) || (4 === o && !0 === n) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    Y.hasOwnProperty("ReactCurrentDispatcher") ||
      (Y.ReactCurrentDispatcher = { current: null }),
      Y.hasOwnProperty("ReactCurrentBatchConfig") ||
        (Y.ReactCurrentBatchConfig = { suspense: null });
    var Z = /^(.*)[\\\/]/,
      J = "function" == typeof Symbol && Symbol.for,
      ee = J ? Symbol.for("react.element") : 60103,
      te = J ? Symbol.for("react.portal") : 60106,
      ne = J ? Symbol.for("react.fragment") : 60107,
      re = J ? Symbol.for("react.strict_mode") : 60108,
      oe = J ? Symbol.for("react.profiler") : 60114,
      ie = J ? Symbol.for("react.provider") : 60109,
      ae = J ? Symbol.for("react.context") : 60110,
      ue = J ? Symbol.for("react.concurrent_mode") : 60111,
      le = J ? Symbol.for("react.forward_ref") : 60112,
      ce = J ? Symbol.for("react.suspense") : 60113,
      se = J ? Symbol.for("react.suspense_list") : 60120,
      fe = J ? Symbol.for("react.memo") : 60115,
      pe = J ? Symbol.for("react.lazy") : 60116,
      de = J ? Symbol.for("react.block") : 60121,
      he = "function" == typeof Symbol && Symbol.iterator;
    function me(e) {
      return null === e || "object" != typeof e
        ? null
        : "function" == typeof (e = (he && e[he]) || e["@@iterator"])
        ? e
        : null;
    }
    function ve(e) {
      if (null == e) return null;
      if ("function" == typeof e) return e.displayName || e.name || null;
      if ("string" == typeof e) return e;
      switch (e) {
        case ne:
          return "Fragment";
        case te:
          return "Portal";
        case oe:
          return "Profiler";
        case re:
          return "StrictMode";
        case ce:
          return "Suspense";
        case se:
          return "SuspenseList";
      }
      if ("object" == typeof e)
        switch (e.$$typeof) {
          case ae:
            return "Context.Consumer";
          case ie:
            return "Context.Provider";
          case le:
            var t = e.render;
            return (
              (t = t.displayName || t.name || ""),
              e.displayName ||
                ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
            );
          case fe:
            return ve(e.type);
          case de:
            return ve(e.render);
          case pe:
            if ((e = 1 === e._status ? e._result : null)) return ve(e);
        }
      return null;
    }
    function ye(e) {
      var t = "";
      do {
        e: switch (e.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var n = "";
            break e;
          default:
            var r = e._debugOwner,
              o = e._debugSource,
              i = ve(e.type);
            (n = null),
              r && (n = ve(r.type)),
              (r = i),
              (i = ""),
              o
                ? (i =
                    " (at " +
                    o.fileName.replace(Z, "") +
                    ":" +
                    o.lineNumber +
                    ")")
                : n && (i = " (created by " + n + ")"),
              (n = "\n    in " + (r || "Unknown") + i);
        }
        (t += n), (e = e.return);
      } while (e);
      return t;
    }
    function ge(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;
        default:
          return "";
      }
    }
    function be(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        "input" === e.toLowerCase() &&
        ("checkbox" === t || "radio" === t)
      );
    }
    function we(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var t = be(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
          if (
            !e.hasOwnProperty(t) &&
            void 0 !== n &&
            "function" == typeof n.get &&
            "function" == typeof n.set
          ) {
            var o = n.get,
              i = n.set;
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return o.call(this);
                },
                set: function (e) {
                  (r = "" + e), i.call(this, e);
                },
              }),
              Object.defineProperty(e, t, { enumerable: n.enumerable }),
              {
                getValue: function () {
                  return r;
                },
                setValue: function (e) {
                  r = "" + e;
                },
                stopTracking: function () {
                  (e._valueTracker = null), delete e[t];
                },
              }
            );
          }
        })(e));
    }
    function xe(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = "";
      return (
        e && (r = be(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r) !== n && (t.setValue(e), !0)
      );
    }
    function Ee(e, t) {
      var n = t.checked;
      return o({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
      });
    }
    function Se(e, t) {
      var n = null == t.defaultValue ? "" : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
      (n = ge(null != t.value ? t.value : n)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            "checkbox" === t.type || "radio" === t.type
              ? null != t.checked
              : null != t.value,
        });
    }
    function ke(e, t) {
      null != (t = t.checked) && X(e, "checked", t, !1);
    }
    function Te(e, t) {
      ke(e, t);
      var n = ge(t.value),
        r = t.type;
      if (null != n)
        "number" === r
          ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
          : e.value !== "" + n && (e.value = "" + n);
      else if ("submit" === r || "reset" === r)
        return void e.removeAttribute("value");
      t.hasOwnProperty("value")
        ? Pe(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Pe(e, t.type, ge(t.defaultValue)),
        null == t.checked &&
          null != t.defaultChecked &&
          (e.defaultChecked = !!t.defaultChecked);
    }
    function Oe(e, t, n) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
          !(
            ("submit" !== r && "reset" !== r) ||
            (void 0 !== t.value && null !== t.value)
          )
        )
          return;
        (t = "" + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      "" !== (n = e.name) && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        "" !== n && (e.name = n);
    }
    function Pe(e, t, n) {
      ("number" === t && e.ownerDocument.activeElement === e) ||
        (null == n
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    function _e(e, t) {
      return (
        (e = o({ children: void 0 }, t)),
        (t = (function (e) {
          var t = "";
          return (
            r.Children.forEach(e, function (e) {
              null != e && (t += e);
            }),
            t
          );
        })(t.children)) && (e.children = t),
        e
      );
    }
    function Ce(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
          (o = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0);
      } else {
        for (n = "" + ge(n), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === n)
            return (
              (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
            );
          null !== t || e[o].disabled || (t = e[o]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function Me(e, t) {
      if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
      return o({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
      });
    }
    function Ne(e, t) {
      var n = t.value;
      if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
          if (null != t) throw Error(a(92));
          if (Array.isArray(n)) {
            if (!(1 >= n.length)) throw Error(a(93));
            n = n[0];
          }
          t = n;
        }
        null == t && (t = ""), (n = t);
      }
      e._wrapperState = { initialValue: ge(n) };
    }
    function je(e, t) {
      var n = ge(t.value),
        r = ge(t.defaultValue);
      null != n &&
        ((n = "" + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = "" + r);
    }
    function Ae(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        "" !== t &&
        null !== t &&
        (e.value = t);
    }
    var Re = "http://www.w3.org/1999/xhtml",
      De = "http://www.w3.org/2000/svg";
    function Ie(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function Fe(e, t) {
      return null == e || "http://www.w3.org/1999/xhtml" === e
        ? Ie(t)
        : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    var Le,
      ze = (function (e) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (t, n, r, o) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, n);
              });
            }
          : e;
      })(function (e, t) {
        if (e.namespaceURI !== De || "innerHTML" in e) e.innerHTML = t;
        else {
          for (
            (Le = Le || document.createElement("div")).innerHTML =
              "<svg>" + t.valueOf().toString() + "</svg>",
              t = Le.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
    function Ue(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType)
          return void (n.nodeValue = t);
      }
      e.textContent = t;
    }
    function He(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
      );
    }
    var Ve = {
        animationend: He("Animation", "AnimationEnd"),
        animationiteration: He("Animation", "AnimationIteration"),
        animationstart: He("Animation", "AnimationStart"),
        transitionend: He("Transition", "TransitionEnd"),
      },
      Be = {},
      We = {};
    function $e(e) {
      if (Be[e]) return Be[e];
      if (!Ve[e]) return e;
      var t,
        n = Ve[e];
      for (t in n) if (n.hasOwnProperty(t) && t in We) return (Be[e] = n[t]);
      return e;
    }
    P &&
      ((We = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Ve.animationend.animation,
        delete Ve.animationiteration.animation,
        delete Ve.animationstart.animation),
      "TransitionEvent" in window || delete Ve.transitionend.transition);
    var qe = $e("animationend"),
      Ke = $e("animationiteration"),
      Qe = $e("animationstart"),
      Ge = $e("transitionend"),
      Ye =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      Xe = new ("function" == typeof WeakMap ? WeakMap : Map)();
    function Ze(e) {
      var t = Xe.get(e);
      return void 0 === t && ((t = new Map()), Xe.set(e, t)), t;
    }
    function Je(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do {
          0 != (1026 & (t = e).effectTag) && (n = t.return), (e = t.return);
        } while (e);
      }
      return 3 === t.tag ? n : null;
    }
    function et(e) {
      if (13 === e.tag) {
        var t = e.memoizedState;
        if (
          (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
          null !== t)
        )
          return t.dehydrated;
      }
      return null;
    }
    function tt(e) {
      if (Je(e) !== e) throw Error(a(188));
    }
    function nt(e) {
      if (
        !(e = (function (e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = Je(e))) throw Error(a(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
            var o = n.return;
            if (null === o) break;
            var i = o.alternate;
            if (null === i) {
              if (null !== (r = o.return)) {
                n = r;
                continue;
              }
              break;
            }
            if (o.child === i.child) {
              for (i = o.child; i; ) {
                if (i === n) return tt(o), e;
                if (i === r) return tt(o), t;
                i = i.sibling;
              }
              throw Error(a(188));
            }
            if (n.return !== r.return) (n = o), (r = i);
            else {
              for (var u = !1, l = o.child; l; ) {
                if (l === n) {
                  (u = !0), (n = o), (r = i);
                  break;
                }
                if (l === r) {
                  (u = !0), (r = o), (n = i);
                  break;
                }
                l = l.sibling;
              }
              if (!u) {
                for (l = i.child; l; ) {
                  if (l === n) {
                    (u = !0), (n = i), (r = o);
                    break;
                  }
                  if (l === r) {
                    (u = !0), (r = i), (n = o);
                    break;
                  }
                  l = l.sibling;
                }
                if (!u) throw Error(a(189));
              }
            }
            if (n.alternate !== r) throw Error(a(190));
          }
          if (3 !== n.tag) throw Error(a(188));
          return n.stateNode.current === n ? e : t;
        })(e))
      )
        return null;
      for (var t = e; ; ) {
        if (5 === t.tag || 6 === t.tag) return t;
        if (t.child) (t.child.return = t), (t = t.child);
        else {
          if (t === e) break;
          for (; !t.sibling; ) {
            if (!t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return null;
    }
    function rt(e, t) {
      if (null == t) throw Error(a(30));
      return null == e
        ? t
        : Array.isArray(e)
        ? Array.isArray(t)
          ? (e.push.apply(e, t), e)
          : (e.push(t), e)
        : Array.isArray(t)
        ? [e].concat(t)
        : [e, t];
    }
    function ot(e, t, n) {
      Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
    }
    var it = null;
    function at(e) {
      if (e) {
        var t = e._dispatchListeners,
          n = e._dispatchInstances;
        if (Array.isArray(t))
          for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
            y(e, t[r], n[r]);
        else t && y(e, t, n);
        (e._dispatchListeners = null),
          (e._dispatchInstances = null),
          e.isPersistent() || e.constructor.release(e);
      }
    }
    function ut(e) {
      if ((null !== e && (it = rt(it, e)), (e = it), (it = null), e)) {
        if ((ot(e, at), it)) throw Error(a(95));
        if (s) throw ((e = f), (s = !1), (f = null), e);
      }
    }
    function lt(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    function ct(e) {
      if (!P) return !1;
      var t = (e = "on" + e) in document;
      return (
        t ||
          ((t = document.createElement("div")).setAttribute(e, "return;"),
          (t = "function" == typeof t[e])),
        t
      );
    }
    var st = [];
    function ft(e) {
      (e.topLevelType = null),
        (e.nativeEvent = null),
        (e.targetInst = null),
        (e.ancestors.length = 0),
        10 > st.length && st.push(e);
    }
    function pt(e, t, n, r) {
      if (st.length) {
        var o = st.pop();
        return (
          (o.topLevelType = e),
          (o.eventSystemFlags = r),
          (o.nativeEvent = t),
          (o.targetInst = n),
          o
        );
      }
      return {
        topLevelType: e,
        eventSystemFlags: r,
        nativeEvent: t,
        targetInst: n,
        ancestors: [],
      };
    }
    function dt(e) {
      var t = e.targetInst,
        n = t;
      do {
        if (!n) {
          e.ancestors.push(n);
          break;
        }
        var r = n;
        if (3 === r.tag) r = r.stateNode.containerInfo;
        else {
          for (; r.return; ) r = r.return;
          r = 3 !== r.tag ? null : r.stateNode.containerInfo;
        }
        if (!r) break;
        (5 !== (t = n.tag) && 6 !== t) || e.ancestors.push(n), (n = Pn(r));
      } while (n);
      for (n = 0; n < e.ancestors.length; n++) {
        t = e.ancestors[n];
        var o = lt(e.nativeEvent);
        r = e.topLevelType;
        var i = e.nativeEvent,
          a = e.eventSystemFlags;
        0 === n && (a |= 64);
        for (var u = null, l = 0; l < E.length; l++) {
          var c = E[l];
          c && (c = c.extractEvents(r, t, i, o, a)) && (u = rt(u, c));
        }
        ut(u);
      }
    }
    function ht(e, t, n) {
      if (!n.has(e)) {
        switch (e) {
          case "scroll":
            Qt(t, "scroll", !0);
            break;
          case "focus":
          case "blur":
            Qt(t, "focus", !0),
              Qt(t, "blur", !0),
              n.set("blur", null),
              n.set("focus", null);
            break;
          case "cancel":
          case "close":
            ct(e) && Qt(t, e, !0);
            break;
          case "invalid":
          case "submit":
          case "reset":
            break;
          default:
            -1 === Ye.indexOf(e) && Kt(e, t);
        }
        n.set(e, null);
      }
    }
    var mt,
      vt,
      yt,
      gt = !1,
      bt = [],
      wt = null,
      xt = null,
      Et = null,
      St = new Map(),
      kt = new Map(),
      Tt = [],
      Ot =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
          " "
        ),
      Pt =
        "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(
          " "
        );
    function _t(e, t, n, r, o) {
      return {
        blockedOn: e,
        topLevelType: t,
        eventSystemFlags: 32 | n,
        nativeEvent: o,
        container: r,
      };
    }
    function Ct(e, t) {
      switch (e) {
        case "focus":
        case "blur":
          wt = null;
          break;
        case "dragenter":
        case "dragleave":
          xt = null;
          break;
        case "mouseover":
        case "mouseout":
          Et = null;
          break;
        case "pointerover":
        case "pointerout":
          St.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          kt.delete(t.pointerId);
      }
    }
    function Mt(e, t, n, r, o, i) {
      return null === e || e.nativeEvent !== i
        ? ((e = _t(t, n, r, o, i)),
          null !== t && null !== (t = _n(t)) && vt(t),
          e)
        : ((e.eventSystemFlags |= r), e);
    }
    function Nt(e) {
      var t = Pn(e.target);
      if (null !== t) {
        var n = Je(t);
        if (null !== n)
          if (13 === (t = n.tag)) {
            if (null !== (t = et(n)))
              return (
                (e.blockedOn = t),
                void i.unstable_runWithPriority(e.priority, function () {
                  yt(n);
                })
              );
          } else if (3 === t && n.stateNode.hydrate)
            return void (e.blockedOn =
              3 === n.tag ? n.stateNode.containerInfo : null);
      }
      e.blockedOn = null;
    }
    function jt(e) {
      if (null !== e.blockedOn) return !1;
      var t = Zt(
        e.topLevelType,
        e.eventSystemFlags,
        e.container,
        e.nativeEvent
      );
      if (null !== t) {
        var n = _n(t);
        return null !== n && vt(n), (e.blockedOn = t), !1;
      }
      return !0;
    }
    function At(e, t, n) {
      jt(e) && n.delete(t);
    }
    function Rt() {
      for (gt = !1; 0 < bt.length; ) {
        var e = bt[0];
        if (null !== e.blockedOn) {
          null !== (e = _n(e.blockedOn)) && mt(e);
          break;
        }
        var t = Zt(
          e.topLevelType,
          e.eventSystemFlags,
          e.container,
          e.nativeEvent
        );
        null !== t ? (e.blockedOn = t) : bt.shift();
      }
      null !== wt && jt(wt) && (wt = null),
        null !== xt && jt(xt) && (xt = null),
        null !== Et && jt(Et) && (Et = null),
        St.forEach(At),
        kt.forEach(At);
    }
    function Dt(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        gt ||
          ((gt = !0),
          i.unstable_scheduleCallback(i.unstable_NormalPriority, Rt)));
    }
    function It(e) {
      function t(t) {
        return Dt(t, e);
      }
      if (0 < bt.length) {
        Dt(bt[0], e);
        for (var n = 1; n < bt.length; n++) {
          var r = bt[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        null !== wt && Dt(wt, e),
          null !== xt && Dt(xt, e),
          null !== Et && Dt(Et, e),
          St.forEach(t),
          kt.forEach(t),
          n = 0;
        n < Tt.length;
        n++
      )
        (r = Tt[n]).blockedOn === e && (r.blockedOn = null);
      for (; 0 < Tt.length && null === (n = Tt[0]).blockedOn; )
        Nt(n), null === n.blockedOn && Tt.shift();
    }
    var Ft = {},
      Lt = new Map(),
      zt = new Map(),
      Ut = [
        "abort",
        "abort",
        qe,
        "animationEnd",
        Ke,
        "animationIteration",
        Qe,
        "animationStart",
        "canplay",
        "canPlay",
        "canplaythrough",
        "canPlayThrough",
        "durationchange",
        "durationChange",
        "emptied",
        "emptied",
        "encrypted",
        "encrypted",
        "ended",
        "ended",
        "error",
        "error",
        "gotpointercapture",
        "gotPointerCapture",
        "load",
        "load",
        "loadeddata",
        "loadedData",
        "loadedmetadata",
        "loadedMetadata",
        "loadstart",
        "loadStart",
        "lostpointercapture",
        "lostPointerCapture",
        "playing",
        "playing",
        "progress",
        "progress",
        "seeking",
        "seeking",
        "stalled",
        "stalled",
        "suspend",
        "suspend",
        "timeupdate",
        "timeUpdate",
        Ge,
        "transitionEnd",
        "waiting",
        "waiting",
      ];
    function Ht(e, t) {
      for (var n = 0; n < e.length; n += 2) {
        var r = e[n],
          o = e[n + 1],
          i = "on" + (o[0].toUpperCase() + o.slice(1));
        (i = {
          phasedRegistrationNames: { bubbled: i, captured: i + "Capture" },
          dependencies: [r],
          eventPriority: t,
        }),
          zt.set(r, t),
          Lt.set(r, i),
          (Ft[o] = i);
      }
    }
    Ht(
      "blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
        " "
      ),
      0
    ),
      Ht(
        "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
          " "
        ),
        1
      ),
      Ht(Ut, 2);
    for (
      var Vt =
          "change selectionchange textInput compositionstart compositionend compositionupdate".split(
            " "
          ),
        Bt = 0;
      Bt < Vt.length;
      Bt++
    )
      zt.set(Vt[Bt], 0);
    var Wt = i.unstable_UserBlockingPriority,
      $t = i.unstable_runWithPriority,
      qt = !0;
    function Kt(e, t) {
      Qt(t, e, !1);
    }
    function Qt(e, t, n) {
      var r = zt.get(t);
      switch (void 0 === r ? 2 : r) {
        case 0:
          r = Gt.bind(null, t, 1, e);
          break;
        case 1:
          r = Yt.bind(null, t, 1, e);
          break;
        default:
          r = Xt.bind(null, t, 1, e);
      }
      n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
    }
    function Gt(e, t, n, r) {
      L || I();
      var o = Xt,
        i = L;
      L = !0;
      try {
        D(o, e, t, n, r);
      } finally {
        (L = i) || U();
      }
    }
    function Yt(e, t, n, r) {
      $t(Wt, Xt.bind(null, e, t, n, r));
    }
    function Xt(e, t, n, r) {
      if (qt)
        if (0 < bt.length && -1 < Ot.indexOf(e))
          (e = _t(null, e, t, n, r)), bt.push(e);
        else {
          var o = Zt(e, t, n, r);
          if (null === o) Ct(e, r);
          else if (-1 < Ot.indexOf(e)) (e = _t(o, e, t, n, r)), bt.push(e);
          else if (
            !(function (e, t, n, r, o) {
              switch (t) {
                case "focus":
                  return (wt = Mt(wt, e, t, n, r, o)), !0;
                case "dragenter":
                  return (xt = Mt(xt, e, t, n, r, o)), !0;
                case "mouseover":
                  return (Et = Mt(Et, e, t, n, r, o)), !0;
                case "pointerover":
                  var i = o.pointerId;
                  return St.set(i, Mt(St.get(i) || null, e, t, n, r, o)), !0;
                case "gotpointercapture":
                  return (
                    (i = o.pointerId),
                    kt.set(i, Mt(kt.get(i) || null, e, t, n, r, o)),
                    !0
                  );
              }
              return !1;
            })(o, e, t, n, r)
          ) {
            Ct(e, r), (e = pt(e, r, null, t));
            try {
              H(dt, e);
            } finally {
              ft(e);
            }
          }
        }
    }
    function Zt(e, t, n, r) {
      if (null !== (n = Pn((n = lt(r))))) {
        var o = Je(n);
        if (null === o) n = null;
        else {
          var i = o.tag;
          if (13 === i) {
            if (null !== (n = et(o))) return n;
            n = null;
          } else if (3 === i) {
            if (o.stateNode.hydrate)
              return 3 === o.tag ? o.stateNode.containerInfo : null;
            n = null;
          } else o !== n && (n = null);
        }
      }
      e = pt(e, r, n, t);
      try {
        H(dt, e);
      } finally {
        ft(e);
      }
      return null;
    }
    var Jt = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      en = ["Webkit", "ms", "Moz", "O"];
    function tn(e, t, n) {
      return null == t || "boolean" == typeof t || "" === t
        ? ""
        : n ||
          "number" != typeof t ||
          0 === t ||
          (Jt.hasOwnProperty(e) && Jt[e])
        ? ("" + t).trim()
        : t + "px";
    }
    function nn(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf("--"),
            o = tn(n, t[n], r);
          "float" === n && (n = "cssFloat"),
            r ? e.setProperty(n, o) : (e[n] = o);
        }
    }
    Object.keys(Jt).forEach(function (e) {
      en.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jt[t] = Jt[e]);
      });
    });
    var rn = o(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    );
    function on(e, t) {
      if (t) {
        if (rn[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
          throw Error(a(137, e, ""));
        if (null != t.dangerouslySetInnerHTML) {
          if (null != t.children) throw Error(a(60));
          if (
            "object" != typeof t.dangerouslySetInnerHTML ||
            !("__html" in t.dangerouslySetInnerHTML)
          )
            throw Error(a(61));
        }
        if (null != t.style && "object" != typeof t.style)
          throw Error(a(62, ""));
      }
    }
    function an(e, t) {
      if (-1 === e.indexOf("-")) return "string" == typeof t.is;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var un = Re;
    function ln(e, t) {
      var n = Ze(
        (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument)
      );
      t = T[t];
      for (var r = 0; r < t.length; r++) ht(t[r], e, n);
    }
    function cn() {}
    function sn(e) {
      if (
        void 0 ===
        (e = e || ("undefined" != typeof document ? document : void 0))
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    function fn(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function pn(e, t) {
      var n,
        r = fn(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t))
            return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = fn(r);
      }
    }
    function dn() {
      for (var e = window, t = sn(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = "string" == typeof t.contentWindow.location.href;
        } catch (e) {
          n = !1;
        }
        if (!n) break;
        t = sn((e = t.contentWindow).document);
      }
      return t;
    }
    function hn(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        (("input" === t &&
          ("text" === e.type ||
            "search" === e.type ||
            "tel" === e.type ||
            "url" === e.type ||
            "password" === e.type)) ||
          "textarea" === t ||
          "true" === e.contentEditable)
      );
    }
    var mn = null,
      vn = null;
    function yn(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    function gn(e, t) {
      return (
        "textarea" === e ||
        "option" === e ||
        "noscript" === e ||
        "string" == typeof t.children ||
        "number" == typeof t.children ||
        ("object" == typeof t.dangerouslySetInnerHTML &&
          null !== t.dangerouslySetInnerHTML &&
          null != t.dangerouslySetInnerHTML.__html)
      );
    }
    var bn = "function" == typeof setTimeout ? setTimeout : void 0,
      wn = "function" == typeof clearTimeout ? clearTimeout : void 0;
    function xn(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
      }
      return e;
    }
    function En(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ("$" === n || "$!" === n || "$?" === n) {
            if (0 === t) return e;
            t--;
          } else "/$" === n && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var Sn = Math.random().toString(36).slice(2),
      kn = "__reactInternalInstance$" + Sn,
      Tn = "__reactEventHandlers$" + Sn,
      On = "__reactContainere$" + Sn;
    function Pn(e) {
      var t = e[kn];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[On] || n[kn])) {
          if (
            ((n = t.alternate),
            null !== t.child || (null !== n && null !== n.child))
          )
            for (e = En(e); null !== e; ) {
              if ((n = e[kn])) return n;
              e = En(e);
            }
          return t;
        }
        n = (e = n).parentNode;
      }
      return null;
    }
    function _n(e) {
      return !(e = e[kn] || e[On]) ||
        (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
        ? null
        : e;
    }
    function Cn(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(a(33));
    }
    function Mn(e) {
      return e[Tn] || null;
    }
    function Nn(e) {
      do {
        e = e.return;
      } while (e && 5 !== e.tag);
      return e || null;
    }
    function jn(e, t) {
      var n = e.stateNode;
      if (!n) return null;
      var r = h(n);
      if (!r) return null;
      n = r[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) ||
            (r = !(
              "button" === (e = e.type) ||
              "input" === e ||
              "select" === e ||
              "textarea" === e
            )),
            (e = !r);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
      return n;
    }
    function An(e, t, n) {
      (t = jn(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
        ((n._dispatchListeners = rt(n._dispatchListeners, t)),
        (n._dispatchInstances = rt(n._dispatchInstances, e)));
    }
    function Rn(e) {
      if (e && e.dispatchConfig.phasedRegistrationNames) {
        for (var t = e._targetInst, n = []; t; ) n.push(t), (t = Nn(t));
        for (t = n.length; 0 < t--; ) An(n[t], "captured", e);
        for (t = 0; t < n.length; t++) An(n[t], "bubbled", e);
      }
    }
    function Dn(e, t, n) {
      e &&
        n &&
        n.dispatchConfig.registrationName &&
        (t = jn(e, n.dispatchConfig.registrationName)) &&
        ((n._dispatchListeners = rt(n._dispatchListeners, t)),
        (n._dispatchInstances = rt(n._dispatchInstances, e)));
    }
    function In(e) {
      e && e.dispatchConfig.registrationName && Dn(e._targetInst, null, e);
    }
    function Fn(e) {
      ot(e, Rn);
    }
    var Ln = null,
      zn = null,
      Un = null;
    function Hn() {
      if (Un) return Un;
      var e,
        t,
        n = zn,
        r = n.length,
        o = "value" in Ln ? Ln.value : Ln.textContent,
        i = o.length;
      for (e = 0; e < r && n[e] === o[e]; e++);
      var a = r - e;
      for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
      return (Un = o.slice(e, 1 < t ? 1 - t : void 0));
    }
    function Vn() {
      return !0;
    }
    function Bn() {
      return !1;
    }
    function Wn(e, t, n, r) {
      for (var o in ((this.dispatchConfig = e),
      (this._targetInst = t),
      (this.nativeEvent = n),
      (e = this.constructor.Interface)))
        e.hasOwnProperty(o) &&
          ((t = e[o])
            ? (this[o] = t(n))
            : "target" === o
            ? (this.target = r)
            : (this[o] = n[o]));
      return (
        (this.isDefaultPrevented = (
          null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue
        )
          ? Vn
          : Bn),
        (this.isPropagationStopped = Bn),
        this
      );
    }
    function $n(e, t, n, r) {
      if (this.eventPool.length) {
        var o = this.eventPool.pop();
        return this.call(o, e, t, n, r), o;
      }
      return new this(e, t, n, r);
    }
    function qn(e) {
      if (!(e instanceof this)) throw Error(a(279));
      e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
    }
    function Kn(e) {
      (e.eventPool = []), (e.getPooled = $n), (e.release = qn);
    }
    o(Wn.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : "unknown" != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = Vn));
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = Vn));
      },
      persist: function () {
        this.isPersistent = Vn;
      },
      isPersistent: Bn,
      destructor: function () {
        var e,
          t = this.constructor.Interface;
        for (e in t) this[e] = null;
        (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
          (this.isPropagationStopped = this.isDefaultPrevented = Bn),
          (this._dispatchInstances = this._dispatchListeners = null);
      },
    }),
      (Wn.Interface = {
        type: null,
        target: null,
        currentTarget: function () {
          return null;
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: null,
        isTrusted: null,
      }),
      (Wn.extend = function (e) {
        function t() {}
        function n() {
          return r.apply(this, arguments);
        }
        var r = this;
        t.prototype = r.prototype;
        var i = new t();
        return (
          o(i, n.prototype),
          (n.prototype = i),
          (n.prototype.constructor = n),
          (n.Interface = o({}, r.Interface, e)),
          (n.extend = r.extend),
          Kn(n),
          n
        );
      }),
      Kn(Wn);
    var Qn = Wn.extend({ data: null }),
      Gn = Wn.extend({ data: null }),
      Yn = [9, 13, 27, 32],
      Xn = P && "CompositionEvent" in window,
      Zn = null;
    P && "documentMode" in document && (Zn = document.documentMode);
    var Jn = P && "TextEvent" in window && !Zn,
      er = P && (!Xn || (Zn && 8 < Zn && 11 >= Zn)),
      tr = String.fromCharCode(32),
      nr = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: "onBeforeInput",
            captured: "onBeforeInputCapture",
          },
          dependencies: ["compositionend", "keypress", "textInput", "paste"],
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: "onCompositionEnd",
            captured: "onCompositionEndCapture",
          },
          dependencies:
            "blur compositionend keydown keypress keyup mousedown".split(" "),
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: "onCompositionStart",
            captured: "onCompositionStartCapture",
          },
          dependencies:
            "blur compositionstart keydown keypress keyup mousedown".split(" "),
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: "onCompositionUpdate",
            captured: "onCompositionUpdateCapture",
          },
          dependencies:
            "blur compositionupdate keydown keypress keyup mousedown".split(
              " "
            ),
        },
      },
      rr = !1;
    function or(e, t) {
      switch (e) {
        case "keyup":
          return -1 !== Yn.indexOf(t.keyCode);
        case "keydown":
          return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "blur":
          return !0;
        default:
          return !1;
      }
    }
    function ir(e) {
      return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var ar = !1;
    var ur = {
        eventTypes: nr,
        extractEvents: function (e, t, n, r) {
          var o;
          if (Xn)
            e: {
              switch (e) {
                case "compositionstart":
                  var i = nr.compositionStart;
                  break e;
                case "compositionend":
                  i = nr.compositionEnd;
                  break e;
                case "compositionupdate":
                  i = nr.compositionUpdate;
                  break e;
              }
              i = void 0;
            }
          else
            ar
              ? or(e, n) && (i = nr.compositionEnd)
              : "keydown" === e &&
                229 === n.keyCode &&
                (i = nr.compositionStart);
          return (
            i
              ? (er &&
                  "ko" !== n.locale &&
                  (ar || i !== nr.compositionStart
                    ? i === nr.compositionEnd && ar && (o = Hn())
                    : ((zn = "value" in (Ln = r) ? Ln.value : Ln.textContent),
                      (ar = !0))),
                (i = Qn.getPooled(i, t, n, r)),
                o ? (i.data = o) : null !== (o = ir(n)) && (i.data = o),
                Fn(i),
                (o = i))
              : (o = null),
            (e = Jn
              ? (function (e, t) {
                  switch (e) {
                    case "compositionend":
                      return ir(t);
                    case "keypress":
                      return 32 !== t.which ? null : ((rr = !0), tr);
                    case "textInput":
                      return (e = t.data) === tr && rr ? null : e;
                    default:
                      return null;
                  }
                })(e, n)
              : (function (e, t) {
                  if (ar)
                    return "compositionend" === e || (!Xn && or(e, t))
                      ? ((e = Hn()), (Un = zn = Ln = null), (ar = !1), e)
                      : null;
                  switch (e) {
                    case "paste":
                      return null;
                    case "keypress":
                      if (
                        !(t.ctrlKey || t.altKey || t.metaKey) ||
                        (t.ctrlKey && t.altKey)
                      ) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case "compositionend":
                      return er && "ko" !== t.locale ? null : t.data;
                    default:
                      return null;
                  }
                })(e, n))
              ? (((t = Gn.getPooled(nr.beforeInput, t, n, r)).data = e), Fn(t))
              : (t = null),
            null === o ? t : null === t ? o : [o, t]
          );
        },
      },
      lr = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
    function cr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === t ? !!lr[e.type] : "textarea" === t;
    }
    var sr = {
      change: {
        phasedRegistrationNames: {
          bubbled: "onChange",
          captured: "onChangeCapture",
        },
        dependencies:
          "blur change click focus input keydown keyup selectionchange".split(
            " "
          ),
      },
    };
    function fr(e, t, n) {
      return (
        ((e = Wn.getPooled(sr.change, e, t, n)).type = "change"), j(n), Fn(e), e
      );
    }
    var pr = null,
      dr = null;
    function hr(e) {
      ut(e);
    }
    function mr(e) {
      if (xe(Cn(e))) return e;
    }
    function vr(e, t) {
      if ("change" === e) return t;
    }
    var yr = !1;
    function gr() {
      pr && (pr.detachEvent("onpropertychange", br), (dr = pr = null));
    }
    function br(e) {
      if ("value" === e.propertyName && mr(dr))
        if (((e = fr(dr, e, lt(e))), L)) ut(e);
        else {
          L = !0;
          try {
            R(hr, e);
          } finally {
            (L = !1), U();
          }
        }
    }
    function wr(e, t, n) {
      "focus" === e
        ? (gr(), (dr = n), (pr = t).attachEvent("onpropertychange", br))
        : "blur" === e && gr();
    }
    function xr(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e)
        return mr(dr);
    }
    function Er(e, t) {
      if ("click" === e) return mr(t);
    }
    function Sr(e, t) {
      if ("input" === e || "change" === e) return mr(t);
    }
    P &&
      (yr =
        ct("input") && (!document.documentMode || 9 < document.documentMode));
    var kr = {
        eventTypes: sr,
        _isInputEventSupported: yr,
        extractEvents: function (e, t, n, r) {
          var o = t ? Cn(t) : window,
            i = o.nodeName && o.nodeName.toLowerCase();
          if ("select" === i || ("input" === i && "file" === o.type))
            var a = vr;
          else if (cr(o))
            if (yr) a = Sr;
            else {
              a = xr;
              var u = wr;
            }
          else
            (i = o.nodeName) &&
              "input" === i.toLowerCase() &&
              ("checkbox" === o.type || "radio" === o.type) &&
              (a = Er);
          if (a && (a = a(e, t))) return fr(a, n, r);
          u && u(e, o, t),
            "blur" === e &&
              (e = o._wrapperState) &&
              e.controlled &&
              "number" === o.type &&
              Pe(o, "number", o.value);
        },
      },
      Tr = Wn.extend({ view: null, detail: null }),
      Or = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function Pr(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : !!(e = Or[e]) && !!t[e];
    }
    function _r() {
      return Pr;
    }
    var Cr = 0,
      Mr = 0,
      Nr = !1,
      jr = !1,
      Ar = Tr.extend({
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: _r,
        button: null,
        buttons: null,
        relatedTarget: function (e) {
          return (
            e.relatedTarget ||
            (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
          );
        },
        movementX: function (e) {
          if ("movementX" in e) return e.movementX;
          var t = Cr;
          return (
            (Cr = e.screenX),
            Nr ? ("mousemove" === e.type ? e.screenX - t : 0) : ((Nr = !0), 0)
          );
        },
        movementY: function (e) {
          if ("movementY" in e) return e.movementY;
          var t = Mr;
          return (
            (Mr = e.screenY),
            jr ? ("mousemove" === e.type ? e.screenY - t : 0) : ((jr = !0), 0)
          );
        },
      }),
      Rr = Ar.extend({
        pointerId: null,
        width: null,
        height: null,
        pressure: null,
        tangentialPressure: null,
        tiltX: null,
        tiltY: null,
        twist: null,
        pointerType: null,
        isPrimary: null,
      }),
      Dr = {
        mouseEnter: {
          registrationName: "onMouseEnter",
          dependencies: ["mouseout", "mouseover"],
        },
        mouseLeave: {
          registrationName: "onMouseLeave",
          dependencies: ["mouseout", "mouseover"],
        },
        pointerEnter: {
          registrationName: "onPointerEnter",
          dependencies: ["pointerout", "pointerover"],
        },
        pointerLeave: {
          registrationName: "onPointerLeave",
          dependencies: ["pointerout", "pointerover"],
        },
      },
      Ir = {
        eventTypes: Dr,
        extractEvents: function (e, t, n, r, o) {
          var i = "mouseover" === e || "pointerover" === e,
            a = "mouseout" === e || "pointerout" === e;
          if (
            (i && 0 == (32 & o) && (n.relatedTarget || n.fromElement)) ||
            (!a && !i)
          )
            return null;
          ((i =
            r.window === r
              ? r
              : (i = r.ownerDocument)
              ? i.defaultView || i.parentWindow
              : window),
          a)
            ? ((a = t),
              null !==
                (t = (t = n.relatedTarget || n.toElement) ? Pn(t) : null) &&
                (t !== Je(t) || (5 !== t.tag && 6 !== t.tag)) &&
                (t = null))
            : (a = null);
          if (a === t) return null;
          if ("mouseout" === e || "mouseover" === e)
            var u = Ar,
              l = Dr.mouseLeave,
              c = Dr.mouseEnter,
              s = "mouse";
          else
            ("pointerout" !== e && "pointerover" !== e) ||
              ((u = Rr),
              (l = Dr.pointerLeave),
              (c = Dr.pointerEnter),
              (s = "pointer"));
          if (
            ((e = null == a ? i : Cn(a)),
            (i = null == t ? i : Cn(t)),
            ((l = u.getPooled(l, a, n, r)).type = s + "leave"),
            (l.target = e),
            (l.relatedTarget = i),
            ((n = u.getPooled(c, t, n, r)).type = s + "enter"),
            (n.target = i),
            (n.relatedTarget = e),
            (s = t),
            (r = a) && s)
          )
            e: {
              for (c = s, a = 0, e = u = r; e; e = Nn(e)) a++;
              for (e = 0, t = c; t; t = Nn(t)) e++;
              for (; 0 < a - e; ) (u = Nn(u)), a--;
              for (; 0 < e - a; ) (c = Nn(c)), e--;
              for (; a--; ) {
                if (u === c || u === c.alternate) break e;
                (u = Nn(u)), (c = Nn(c));
              }
              u = null;
            }
          else u = null;
          for (
            c = u, u = [];
            r && r !== c && (null === (a = r.alternate) || a !== c);

          )
            u.push(r), (r = Nn(r));
          for (
            r = [];
            s && s !== c && (null === (a = s.alternate) || a !== c);

          )
            r.push(s), (s = Nn(s));
          for (s = 0; s < u.length; s++) Dn(u[s], "bubbled", l);
          for (s = r.length; 0 < s--; ) Dn(r[s], "captured", n);
          return 0 == (64 & o) ? [l] : [l, n];
        },
      };
    var Fr =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      Lr = Object.prototype.hasOwnProperty;
    function zr(e, t) {
      if (Fr(e, t)) return !0;
      if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++)
        if (!Lr.call(t, n[r]) || !Fr(e[n[r]], t[n[r]])) return !1;
      return !0;
    }
    var Ur = P && "documentMode" in document && 11 >= document.documentMode,
      Hr = {
        select: {
          phasedRegistrationNames: {
            bubbled: "onSelect",
            captured: "onSelectCapture",
          },
          dependencies:
            "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
              " "
            ),
        },
      },
      Vr = null,
      Br = null,
      Wr = null,
      $r = !1;
    function qr(e, t) {
      var n =
        t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
      return $r || null == Vr || Vr !== sn(n)
        ? null
        : ("selectionStart" in (n = Vr) && hn(n)
            ? (n = { start: n.selectionStart, end: n.selectionEnd })
            : (n = {
                anchorNode: (n = (
                  (n.ownerDocument && n.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset,
              }),
          Wr && zr(Wr, n)
            ? null
            : ((Wr = n),
              ((e = Wn.getPooled(Hr.select, Br, e, t)).type = "select"),
              (e.target = Vr),
              Fn(e),
              e));
    }
    var Kr = {
        eventTypes: Hr,
        extractEvents: function (e, t, n, r, o, i) {
          if (
            !(i = !(o =
              i ||
              (r.window === r
                ? r.document
                : 9 === r.nodeType
                ? r
                : r.ownerDocument)))
          ) {
            e: {
              (o = Ze(o)), (i = T.onSelect);
              for (var a = 0; a < i.length; a++)
                if (!o.has(i[a])) {
                  o = !1;
                  break e;
                }
              o = !0;
            }
            i = !o;
          }
          if (i) return null;
          switch (((o = t ? Cn(t) : window), e)) {
            case "focus":
              (cr(o) || "true" === o.contentEditable) &&
                ((Vr = o), (Br = t), (Wr = null));
              break;
            case "blur":
              Wr = Br = Vr = null;
              break;
            case "mousedown":
              $r = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              return ($r = !1), qr(n, r);
            case "selectionchange":
              if (Ur) break;
            case "keydown":
            case "keyup":
              return qr(n, r);
          }
          return null;
        },
      },
      Qr = Wn.extend({
        animationName: null,
        elapsedTime: null,
        pseudoElement: null,
      }),
      Gr = Wn.extend({
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      }),
      Yr = Tr.extend({ relatedTarget: null });
    function Xr(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? 0 === (e = e.charCode) && 13 === t && (e = 13)
          : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      );
    }
    var Zr = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      Jr = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      eo = Tr.extend({
        key: function (e) {
          if (e.key) {
            var t = Zr[e.key] || e.key;
            if ("Unidentified" !== t) return t;
          }
          return "keypress" === e.type
            ? 13 === (e = Xr(e))
              ? "Enter"
              : String.fromCharCode(e)
            : "keydown" === e.type || "keyup" === e.type
            ? Jr[e.keyCode] || "Unidentified"
            : "";
        },
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: _r,
        charCode: function (e) {
          return "keypress" === e.type ? Xr(e) : 0;
        },
        keyCode: function (e) {
          return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
        },
        which: function (e) {
          return "keypress" === e.type
            ? Xr(e)
            : "keydown" === e.type || "keyup" === e.type
            ? e.keyCode
            : 0;
        },
      }),
      to = Ar.extend({ dataTransfer: null }),
      no = Tr.extend({
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: _r,
      }),
      ro = Wn.extend({
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null,
      }),
      oo = Ar.extend({
        deltaX: function (e) {
          return "deltaX" in e
            ? e.deltaX
            : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
        },
        deltaY: function (e) {
          return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
        },
        deltaZ: null,
        deltaMode: null,
      }),
      io = {
        eventTypes: Ft,
        extractEvents: function (e, t, n, r) {
          var o = Lt.get(e);
          if (!o) return null;
          switch (e) {
            case "keypress":
              if (0 === Xr(n)) return null;
            case "keydown":
            case "keyup":
              e = eo;
              break;
            case "blur":
            case "focus":
              e = Yr;
              break;
            case "click":
              if (2 === n.button) return null;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              e = Ar;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              e = to;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              e = no;
              break;
            case qe:
            case Ke:
            case Qe:
              e = Qr;
              break;
            case Ge:
              e = ro;
              break;
            case "scroll":
              e = Tr;
              break;
            case "wheel":
              e = oo;
              break;
            case "copy":
            case "cut":
            case "paste":
              e = Gr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              e = Rr;
              break;
            default:
              e = Wn;
          }
          return Fn((t = e.getPooled(o, t, n, r))), t;
        },
      };
    if (g) throw Error(a(101));
    (g = Array.prototype.slice.call(
      "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
        " "
      )
    )),
      w(),
      (h = Mn),
      (m = _n),
      (v = Cn),
      O({
        SimpleEventPlugin: io,
        EnterLeaveEventPlugin: Ir,
        ChangeEventPlugin: kr,
        SelectEventPlugin: Kr,
        BeforeInputEventPlugin: ur,
      });
    var ao = [],
      uo = -1;
    function lo(e) {
      0 > uo || ((e.current = ao[uo]), (ao[uo] = null), uo--);
    }
    function co(e, t) {
      uo++, (ao[uo] = e.current), (e.current = t);
    }
    var so = {},
      fo = { current: so },
      po = { current: !1 },
      ho = so;
    function mo(e, t) {
      var n = e.type.contextTypes;
      if (!n) return so;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var o,
        i = {};
      for (o in n) i[o] = t[o];
      return (
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
      );
    }
    function vo(e) {
      return null != (e = e.childContextTypes);
    }
    function yo() {
      lo(po), lo(fo);
    }
    function go(e, t, n) {
      if (fo.current !== so) throw Error(a(168));
      co(fo, t), co(po, n);
    }
    function bo(e, t, n) {
      var r = e.stateNode;
      if (((e = t.childContextTypes), "function" != typeof r.getChildContext))
        return n;
      for (var i in (r = r.getChildContext()))
        if (!(i in e)) throw Error(a(108, ve(t) || "Unknown", i));
      return o({}, n, {}, r);
    }
    function wo(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          so),
        (ho = fo.current),
        co(fo, e),
        co(po, po.current),
        !0
      );
    }
    function xo(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(a(169));
      n
        ? ((e = bo(e, t, ho)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          lo(po),
          lo(fo),
          co(fo, e))
        : lo(po),
        co(po, n);
    }
    var Eo = i.unstable_runWithPriority,
      So = i.unstable_scheduleCallback,
      ko = i.unstable_cancelCallback,
      To = i.unstable_requestPaint,
      Oo = i.unstable_now,
      Po = i.unstable_getCurrentPriorityLevel,
      _o = i.unstable_ImmediatePriority,
      Co = i.unstable_UserBlockingPriority,
      Mo = i.unstable_NormalPriority,
      No = i.unstable_LowPriority,
      jo = i.unstable_IdlePriority,
      Ao = {},
      Ro = i.unstable_shouldYield,
      Do = void 0 !== To ? To : function () {},
      Io = null,
      Fo = null,
      Lo = !1,
      zo = Oo(),
      Uo =
        1e4 > zo
          ? Oo
          : function () {
              return Oo() - zo;
            };
    function Ho() {
      switch (Po()) {
        case _o:
          return 99;
        case Co:
          return 98;
        case Mo:
          return 97;
        case No:
          return 96;
        case jo:
          return 95;
        default:
          throw Error(a(332));
      }
    }
    function Vo(e) {
      switch (e) {
        case 99:
          return _o;
        case 98:
          return Co;
        case 97:
          return Mo;
        case 96:
          return No;
        case 95:
          return jo;
        default:
          throw Error(a(332));
      }
    }
    function Bo(e, t) {
      return (e = Vo(e)), Eo(e, t);
    }
    function Wo(e, t, n) {
      return (e = Vo(e)), So(e, t, n);
    }
    function $o(e) {
      return null === Io ? ((Io = [e]), (Fo = So(_o, Ko))) : Io.push(e), Ao;
    }
    function qo() {
      if (null !== Fo) {
        var e = Fo;
        (Fo = null), ko(e);
      }
      Ko();
    }
    function Ko() {
      if (!Lo && null !== Io) {
        Lo = !0;
        var e = 0;
        try {
          var t = Io;
          Bo(99, function () {
            for (; e < t.length; e++) {
              var n = t[e];
              do {
                n = n(!0);
              } while (null !== n);
            }
          }),
            (Io = null);
        } catch (t) {
          throw (null !== Io && (Io = Io.slice(e + 1)), So(_o, qo), t);
        } finally {
          Lo = !1;
        }
      }
    }
    function Qo(e, t, n) {
      return (
        1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n
      );
    }
    function Go(e, t) {
      if (e && e.defaultProps)
        for (var n in ((t = o({}, t)), (e = e.defaultProps)))
          void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    var Yo = { current: null },
      Xo = null,
      Zo = null,
      Jo = null;
    function ei() {
      Jo = Zo = Xo = null;
    }
    function ti(e) {
      var t = Yo.current;
      lo(Yo), (e.type._context._currentValue = t);
    }
    function ni(e, t) {
      for (; null !== e; ) {
        var n = e.alternate;
        if (e.childExpirationTime < t)
          (e.childExpirationTime = t),
            null !== n &&
              n.childExpirationTime < t &&
              (n.childExpirationTime = t);
        else {
          if (!(null !== n && n.childExpirationTime < t)) break;
          n.childExpirationTime = t;
        }
        e = e.return;
      }
    }
    function ri(e, t) {
      (Xo = e),
        (Jo = Zo = null),
        null !== (e = e.dependencies) &&
          null !== e.firstContext &&
          (e.expirationTime >= t && (Ma = !0), (e.firstContext = null));
    }
    function oi(e, t) {
      if (Jo !== e && !1 !== t && 0 !== t)
        if (
          (("number" == typeof t && 1073741823 !== t) ||
            ((Jo = e), (t = 1073741823)),
          (t = { context: e, observedBits: t, next: null }),
          null === Zo)
        ) {
          if (null === Xo) throw Error(a(308));
          (Zo = t),
            (Xo.dependencies = {
              expirationTime: 0,
              firstContext: t,
              responders: null,
            });
        } else Zo = Zo.next = t;
      return e._currentValue;
    }
    var ii = !1;
    function ai(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        baseQueue: null,
        shared: { pending: null },
        effects: null,
      };
    }
    function ui(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            baseQueue: e.baseQueue,
            shared: e.shared,
            effects: e.effects,
          });
    }
    function li(e, t) {
      return ((e = {
        expirationTime: e,
        suspenseConfig: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      }).next = e);
    }
    function ci(e, t) {
      if (null !== (e = e.updateQueue)) {
        var n = (e = e.shared).pending;
        null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
          (e.pending = t);
      }
    }
    function si(e, t) {
      var n = e.alternate;
      null !== n && ui(n, e),
        null === (n = (e = e.updateQueue).baseQueue)
          ? ((e.baseQueue = t.next = t), (t.next = t))
          : ((t.next = n.next), (n.next = t));
    }
    function fi(e, t, n, r) {
      var i = e.updateQueue;
      ii = !1;
      var a = i.baseQueue,
        u = i.shared.pending;
      if (null !== u) {
        if (null !== a) {
          var l = a.next;
          (a.next = u.next), (u.next = l);
        }
        (a = u),
          (i.shared.pending = null),
          null !== (l = e.alternate) &&
            null !== (l = l.updateQueue) &&
            (l.baseQueue = u);
      }
      if (null !== a) {
        l = a.next;
        var c = i.baseState,
          s = 0,
          f = null,
          p = null,
          d = null;
        if (null !== l)
          for (var h = l; ; ) {
            if ((u = h.expirationTime) < r) {
              var m = {
                expirationTime: h.expirationTime,
                suspenseConfig: h.suspenseConfig,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null,
              };
              null === d ? ((p = d = m), (f = c)) : (d = d.next = m),
                u > s && (s = u);
            } else {
              null !== d &&
                (d = d.next =
                  {
                    expirationTime: 1073741823,
                    suspenseConfig: h.suspenseConfig,
                    tag: h.tag,
                    payload: h.payload,
                    callback: h.callback,
                    next: null,
                  }),
                il(u, h.suspenseConfig);
              e: {
                var v = e,
                  y = h;
                switch (((u = t), (m = n), y.tag)) {
                  case 1:
                    if ("function" == typeof (v = y.payload)) {
                      c = v.call(m, c, u);
                      break e;
                    }
                    c = v;
                    break e;
                  case 3:
                    v.effectTag = (-4097 & v.effectTag) | 64;
                  case 0:
                    if (
                      null ==
                      (u =
                        "function" == typeof (v = y.payload)
                          ? v.call(m, c, u)
                          : v)
                    )
                      break e;
                    c = o({}, c, u);
                    break e;
                  case 2:
                    ii = !0;
                }
              }
              null !== h.callback &&
                ((e.effectTag |= 32),
                null === (u = i.effects) ? (i.effects = [h]) : u.push(h));
            }
            if (null === (h = h.next) || h === l) {
              if (null === (u = i.shared.pending)) break;
              (h = a.next = u.next),
                (u.next = l),
                (i.baseQueue = a = u),
                (i.shared.pending = null);
            }
          }
        null === d ? (f = c) : (d.next = p),
          (i.baseState = f),
          (i.baseQueue = d),
          al(s),
          (e.expirationTime = s),
          (e.memoizedState = c);
      }
    }
    function pi(e, t, n) {
      if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
          var r = e[t],
            o = r.callback;
          if (null !== o) {
            if (((r.callback = null), (r = o), (o = n), "function" != typeof r))
              throw Error(a(191, r));
            r.call(o);
          }
        }
    }
    var di = Y.ReactCurrentBatchConfig,
      hi = new r.Component().refs;
    function mi(e, t, n, r) {
      (n = null == (n = n(r, (t = e.memoizedState))) ? t : o({}, t, n)),
        (e.memoizedState = n),
        0 === e.expirationTime && (e.updateQueue.baseState = n);
    }
    var vi = {
      isMounted: function (e) {
        return !!(e = e._reactInternalFiber) && Je(e) === e;
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternalFiber;
        var r = qu(),
          o = di.suspense;
        ((o = li((r = Ku(r, e, o)), o)).payload = t),
          null != n && (o.callback = n),
          ci(e, o),
          Qu(e, r);
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternalFiber;
        var r = qu(),
          o = di.suspense;
        ((o = li((r = Ku(r, e, o)), o)).tag = 1),
          (o.payload = t),
          null != n && (o.callback = n),
          ci(e, o),
          Qu(e, r);
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternalFiber;
        var n = qu(),
          r = di.suspense;
        ((r = li((n = Ku(n, e, r)), r)).tag = 2),
          null != t && (r.callback = t),
          ci(e, r),
          Qu(e, n);
      },
    };
    function yi(e, t, n, r, o, i, a) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, i, a)
        : !t.prototype ||
            !t.prototype.isPureReactComponent ||
            !zr(n, r) ||
            !zr(o, i);
    }
    function gi(e, t, n) {
      var r = !1,
        o = so,
        i = t.contextType;
      return (
        "object" == typeof i && null !== i
          ? (i = oi(i))
          : ((o = vo(t) ? ho : fo.current),
            (i = (r = null != (r = t.contextTypes)) ? mo(e, o) : so)),
        (t = new t(n, i)),
        (e.memoizedState =
          null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = vi),
        (e.stateNode = t),
        (t._reactInternalFiber = e),
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
      );
    }
    function bi(e, t, n, r) {
      (e = t.state),
        "function" == typeof t.componentWillReceiveProps &&
          t.componentWillReceiveProps(n, r),
        "function" == typeof t.UNSAFE_componentWillReceiveProps &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && vi.enqueueReplaceState(t, t.state, null);
    }
    function wi(e, t, n, r) {
      var o = e.stateNode;
      (o.props = n), (o.state = e.memoizedState), (o.refs = hi), ai(e);
      var i = t.contextType;
      "object" == typeof i && null !== i
        ? (o.context = oi(i))
        : ((i = vo(t) ? ho : fo.current), (o.context = mo(e, i))),
        fi(e, n, o, r),
        (o.state = e.memoizedState),
        "function" == typeof (i = t.getDerivedStateFromProps) &&
          (mi(e, t, i, n), (o.state = e.memoizedState)),
        "function" == typeof t.getDerivedStateFromProps ||
          "function" == typeof o.getSnapshotBeforeUpdate ||
          ("function" != typeof o.UNSAFE_componentWillMount &&
            "function" != typeof o.componentWillMount) ||
          ((t = o.state),
          "function" == typeof o.componentWillMount && o.componentWillMount(),
          "function" == typeof o.UNSAFE_componentWillMount &&
            o.UNSAFE_componentWillMount(),
          t !== o.state && vi.enqueueReplaceState(o, o.state, null),
          fi(e, n, o, r),
          (o.state = e.memoizedState)),
        "function" == typeof o.componentDidMount && (e.effectTag |= 4);
    }
    var xi = Array.isArray;
    function Ei(e, t, n) {
      if (
        null !== (e = n.ref) &&
        "function" != typeof e &&
        "object" != typeof e
      ) {
        if (n._owner) {
          if ((n = n._owner)) {
            if (1 !== n.tag) throw Error(a(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(a(147, e));
          var o = "" + e;
          return null !== t &&
            null !== t.ref &&
            "function" == typeof t.ref &&
            t.ref._stringRef === o
            ? t.ref
            : (((t = function (e) {
                var t = r.refs;
                t === hi && (t = r.refs = {}),
                  null === e ? delete t[o] : (t[o] = e);
              })._stringRef = o),
              t);
        }
        if ("string" != typeof e) throw Error(a(284));
        if (!n._owner) throw Error(a(290, e));
      }
      return e;
    }
    function Si(e, t) {
      if ("textarea" !== e.type)
        throw Error(
          a(
            31,
            "[object Object]" === Object.prototype.toString.call(t)
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : t,
            ""
          )
        );
    }
    function ki(e) {
      function t(t, n) {
        if (e) {
          var r = t.lastEffect;
          null !== r
            ? ((r.nextEffect = n), (t.lastEffect = n))
            : (t.firstEffect = t.lastEffect = n),
            (n.nextEffect = null),
            (n.effectTag = 8);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e, t) {
        for (e = new Map(); null !== t; )
          null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
      }
      function o(e, t) {
        return ((e = Ol(e, t)).index = 0), (e.sibling = null), e;
      }
      function i(t, n, r) {
        return (
          (t.index = r),
          e
            ? null !== (r = t.alternate)
              ? (r = r.index) < n
                ? ((t.effectTag = 2), n)
                : r
              : ((t.effectTag = 2), n)
            : n
        );
      }
      function u(t) {
        return e && null === t.alternate && (t.effectTag = 2), t;
      }
      function l(e, t, n, r) {
        return null === t || 6 !== t.tag
          ? (((t = Cl(n, e.mode, r)).return = e), t)
          : (((t = o(t, n)).return = e), t);
      }
      function c(e, t, n, r) {
        return null !== t && t.elementType === n.type
          ? (((r = o(t, n.props)).ref = Ei(e, t, n)), (r.return = e), r)
          : (((r = Pl(n.type, n.key, n.props, null, e.mode, r)).ref = Ei(
              e,
              t,
              n
            )),
            (r.return = e),
            r);
      }
      function s(e, t, n, r) {
        return null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? (((t = Ml(n, e.mode, r)).return = e), t)
          : (((t = o(t, n.children || [])).return = e), t);
      }
      function f(e, t, n, r, i) {
        return null === t || 7 !== t.tag
          ? (((t = _l(n, e.mode, r, i)).return = e), t)
          : (((t = o(t, n)).return = e), t);
      }
      function p(e, t, n) {
        if ("string" == typeof t || "number" == typeof t)
          return ((t = Cl("" + t, e.mode, n)).return = e), t;
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case ee:
              return (
                ((n = Pl(t.type, t.key, t.props, null, e.mode, n)).ref = Ei(
                  e,
                  null,
                  t
                )),
                (n.return = e),
                n
              );
            case te:
              return ((t = Ml(t, e.mode, n)).return = e), t;
          }
          if (xi(t) || me(t))
            return ((t = _l(t, e.mode, n, null)).return = e), t;
          Si(e, t);
        }
        return null;
      }
      function d(e, t, n, r) {
        var o = null !== t ? t.key : null;
        if ("string" == typeof n || "number" == typeof n)
          return null !== o ? null : l(e, t, "" + n, r);
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case ee:
              return n.key === o
                ? n.type === ne
                  ? f(e, t, n.props.children, r, o)
                  : c(e, t, n, r)
                : null;
            case te:
              return n.key === o ? s(e, t, n, r) : null;
          }
          if (xi(n) || me(n)) return null !== o ? null : f(e, t, n, r, null);
          Si(e, n);
        }
        return null;
      }
      function h(e, t, n, r, o) {
        if ("string" == typeof r || "number" == typeof r)
          return l(t, (e = e.get(n) || null), "" + r, o);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case ee:
              return (
                (e = e.get(null === r.key ? n : r.key) || null),
                r.type === ne
                  ? f(t, e, r.props.children, o, r.key)
                  : c(t, e, r, o)
              );
            case te:
              return s(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                o
              );
          }
          if (xi(r) || me(r)) return f(t, (e = e.get(n) || null), r, o, null);
          Si(t, r);
        }
        return null;
      }
      function m(o, a, u, l) {
        for (
          var c = null, s = null, f = a, m = (a = 0), v = null;
          null !== f && m < u.length;
          m++
        ) {
          f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
          var y = d(o, f, u[m], l);
          if (null === y) {
            null === f && (f = v);
            break;
          }
          e && f && null === y.alternate && t(o, f),
            (a = i(y, a, m)),
            null === s ? (c = y) : (s.sibling = y),
            (s = y),
            (f = v);
        }
        if (m === u.length) return n(o, f), c;
        if (null === f) {
          for (; m < u.length; m++)
            null !== (f = p(o, u[m], l)) &&
              ((a = i(f, a, m)),
              null === s ? (c = f) : (s.sibling = f),
              (s = f));
          return c;
        }
        for (f = r(o, f); m < u.length; m++)
          null !== (v = h(f, o, m, u[m], l)) &&
            (e && null !== v.alternate && f.delete(null === v.key ? m : v.key),
            (a = i(v, a, m)),
            null === s ? (c = v) : (s.sibling = v),
            (s = v));
        return (
          e &&
            f.forEach(function (e) {
              return t(o, e);
            }),
          c
        );
      }
      function v(o, u, l, c) {
        var s = me(l);
        if ("function" != typeof s) throw Error(a(150));
        if (null == (l = s.call(l))) throw Error(a(151));
        for (
          var f = (s = null), m = u, v = (u = 0), y = null, g = l.next();
          null !== m && !g.done;
          v++, g = l.next()
        ) {
          m.index > v ? ((y = m), (m = null)) : (y = m.sibling);
          var b = d(o, m, g.value, c);
          if (null === b) {
            null === m && (m = y);
            break;
          }
          e && m && null === b.alternate && t(o, m),
            (u = i(b, u, v)),
            null === f ? (s = b) : (f.sibling = b),
            (f = b),
            (m = y);
        }
        if (g.done) return n(o, m), s;
        if (null === m) {
          for (; !g.done; v++, g = l.next())
            null !== (g = p(o, g.value, c)) &&
              ((u = i(g, u, v)),
              null === f ? (s = g) : (f.sibling = g),
              (f = g));
          return s;
        }
        for (m = r(o, m); !g.done; v++, g = l.next())
          null !== (g = h(m, o, v, g.value, c)) &&
            (e && null !== g.alternate && m.delete(null === g.key ? v : g.key),
            (u = i(g, u, v)),
            null === f ? (s = g) : (f.sibling = g),
            (f = g));
        return (
          e &&
            m.forEach(function (e) {
              return t(o, e);
            }),
          s
        );
      }
      return function (e, r, i, l) {
        var c =
          "object" == typeof i && null !== i && i.type === ne && null === i.key;
        c && (i = i.props.children);
        var s = "object" == typeof i && null !== i;
        if (s)
          switch (i.$$typeof) {
            case ee:
              e: {
                for (s = i.key, c = r; null !== c; ) {
                  if (c.key === s) {
                    switch (c.tag) {
                      case 7:
                        if (i.type === ne) {
                          n(e, c.sibling),
                            ((r = o(c, i.props.children)).return = e),
                            (e = r);
                          break e;
                        }
                        break;
                      default:
                        if (c.elementType === i.type) {
                          n(e, c.sibling),
                            ((r = o(c, i.props)).ref = Ei(e, c, i)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                    }
                    n(e, c);
                    break;
                  }
                  t(e, c), (c = c.sibling);
                }
                i.type === ne
                  ? (((r = _l(i.props.children, e.mode, l, i.key)).return = e),
                    (e = r))
                  : (((l = Pl(i.type, i.key, i.props, null, e.mode, l)).ref =
                      Ei(e, r, i)),
                    (l.return = e),
                    (e = l));
              }
              return u(e);
            case te:
              e: {
                for (c = i.key; null !== r; ) {
                  if (r.key === c) {
                    if (
                      4 === r.tag &&
                      r.stateNode.containerInfo === i.containerInfo &&
                      r.stateNode.implementation === i.implementation
                    ) {
                      n(e, r.sibling),
                        ((r = o(r, i.children || [])).return = e),
                        (e = r);
                      break e;
                    }
                    n(e, r);
                    break;
                  }
                  t(e, r), (r = r.sibling);
                }
                ((r = Ml(i, e.mode, l)).return = e), (e = r);
              }
              return u(e);
          }
        if ("string" == typeof i || "number" == typeof i)
          return (
            (i = "" + i),
            null !== r && 6 === r.tag
              ? (n(e, r.sibling), ((r = o(r, i)).return = e), (e = r))
              : (n(e, r), ((r = Cl(i, e.mode, l)).return = e), (e = r)),
            u(e)
          );
        if (xi(i)) return m(e, r, i, l);
        if (me(i)) return v(e, r, i, l);
        if ((s && Si(e, i), void 0 === i && !c))
          switch (e.tag) {
            case 1:
            case 0:
              throw (
                ((e = e.type),
                Error(a(152, e.displayName || e.name || "Component")))
              );
          }
        return n(e, r);
      };
    }
    var Ti = ki(!0),
      Oi = ki(!1),
      Pi = {},
      _i = { current: Pi },
      Ci = { current: Pi },
      Mi = { current: Pi };
    function Ni(e) {
      if (e === Pi) throw Error(a(174));
      return e;
    }
    function ji(e, t) {
      switch ((co(Mi, t), co(Ci, e), co(_i, Pi), (e = t.nodeType))) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Fe(null, "");
          break;
        default:
          t = Fe(
            (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
            (e = e.tagName)
          );
      }
      lo(_i), co(_i, t);
    }
    function Ai() {
      lo(_i), lo(Ci), lo(Mi);
    }
    function Ri(e) {
      Ni(Mi.current);
      var t = Ni(_i.current),
        n = Fe(t, e.type);
      t !== n && (co(Ci, e), co(_i, n));
    }
    function Di(e) {
      Ci.current === e && (lo(_i), lo(Ci));
    }
    var Ii = { current: 0 };
    function Fi(e) {
      for (var t = e; null !== t; ) {
        if (13 === t.tag) {
          var n = t.memoizedState;
          if (
            null !== n &&
            (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)
          )
            return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
          if (0 != (64 & t.effectTag)) return t;
        } else if (null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    function Li(e, t) {
      return { responder: e, props: t };
    }
    var zi = Y.ReactCurrentDispatcher,
      Ui = Y.ReactCurrentBatchConfig,
      Hi = 0,
      Vi = null,
      Bi = null,
      Wi = null,
      $i = !1;
    function qi() {
      throw Error(a(321));
    }
    function Ki(e, t) {
      if (null === t) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Fr(e[n], t[n])) return !1;
      return !0;
    }
    function Qi(e, t, n, r, o, i) {
      if (
        ((Hi = i),
        (Vi = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.expirationTime = 0),
        (zi.current = null === e || null === e.memoizedState ? ya : ga),
        (e = n(r, o)),
        t.expirationTime === Hi)
      ) {
        i = 0;
        do {
          if (((t.expirationTime = 0), !(25 > i))) throw Error(a(301));
          (i += 1),
            (Wi = Bi = null),
            (t.updateQueue = null),
            (zi.current = ba),
            (e = n(r, o));
        } while (t.expirationTime === Hi);
      }
      if (
        ((zi.current = va),
        (t = null !== Bi && null !== Bi.next),
        (Hi = 0),
        (Wi = Bi = Vi = null),
        ($i = !1),
        t)
      )
        throw Error(a(300));
      return e;
    }
    function Gi() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return null === Wi ? (Vi.memoizedState = Wi = e) : (Wi = Wi.next = e), Wi;
    }
    function Yi() {
      if (null === Bi) {
        var e = Vi.alternate;
        e = null !== e ? e.memoizedState : null;
      } else e = Bi.next;
      var t = null === Wi ? Vi.memoizedState : Wi.next;
      if (null !== t) (Wi = t), (Bi = e);
      else {
        if (null === e) throw Error(a(310));
        (e = {
          memoizedState: (Bi = e).memoizedState,
          baseState: Bi.baseState,
          baseQueue: Bi.baseQueue,
          queue: Bi.queue,
          next: null,
        }),
          null === Wi ? (Vi.memoizedState = Wi = e) : (Wi = Wi.next = e);
      }
      return Wi;
    }
    function Xi(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    function Zi(e) {
      var t = Yi(),
        n = t.queue;
      if (null === n) throw Error(a(311));
      n.lastRenderedReducer = e;
      var r = Bi,
        o = r.baseQueue,
        i = n.pending;
      if (null !== i) {
        if (null !== o) {
          var u = o.next;
          (o.next = i.next), (i.next = u);
        }
        (r.baseQueue = o = i), (n.pending = null);
      }
      if (null !== o) {
        (o = o.next), (r = r.baseState);
        var l = (u = i = null),
          c = o;
        do {
          var s = c.expirationTime;
          if (s < Hi) {
            var f = {
              expirationTime: c.expirationTime,
              suspenseConfig: c.suspenseConfig,
              action: c.action,
              eagerReducer: c.eagerReducer,
              eagerState: c.eagerState,
              next: null,
            };
            null === l ? ((u = l = f), (i = r)) : (l = l.next = f),
              s > Vi.expirationTime && ((Vi.expirationTime = s), al(s));
          } else
            null !== l &&
              (l = l.next =
                {
                  expirationTime: 1073741823,
                  suspenseConfig: c.suspenseConfig,
                  action: c.action,
                  eagerReducer: c.eagerReducer,
                  eagerState: c.eagerState,
                  next: null,
                }),
              il(s, c.suspenseConfig),
              (r = c.eagerReducer === e ? c.eagerState : e(r, c.action));
          c = c.next;
        } while (null !== c && c !== o);
        null === l ? (i = r) : (l.next = u),
          Fr(r, t.memoizedState) || (Ma = !0),
          (t.memoizedState = r),
          (t.baseState = i),
          (t.baseQueue = l),
          (n.lastRenderedState = r);
      }
      return [t.memoizedState, n.dispatch];
    }
    function Ji(e) {
      var t = Yi(),
        n = t.queue;
      if (null === n) throw Error(a(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
      if (null !== o) {
        n.pending = null;
        var u = (o = o.next);
        do {
          (i = e(i, u.action)), (u = u.next);
        } while (u !== o);
        Fr(i, t.memoizedState) || (Ma = !0),
          (t.memoizedState = i),
          null === t.baseQueue && (t.baseState = i),
          (n.lastRenderedState = i);
      }
      return [i, r];
    }
    function ea(e) {
      var t = Gi();
      return (
        "function" == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = (e = t.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: Xi,
            lastRenderedState: e,
          }).dispatch =
          ma.bind(null, Vi, e)),
        [t.memoizedState, e]
      );
    }
    function ta(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = Vi.updateQueue)
          ? ((t = { lastEffect: null }),
            (Vi.updateQueue = t),
            (t.lastEffect = e.next = e))
          : null === (n = t.lastEffect)
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function na() {
      return Yi().memoizedState;
    }
    function ra(e, t, n, r) {
      var o = Gi();
      (Vi.effectTag |= e),
        (o.memoizedState = ta(1 | t, n, void 0, void 0 === r ? null : r));
    }
    function oa(e, t, n, r) {
      var o = Yi();
      r = void 0 === r ? null : r;
      var i = void 0;
      if (null !== Bi) {
        var a = Bi.memoizedState;
        if (((i = a.destroy), null !== r && Ki(r, a.deps)))
          return void ta(t, n, i, r);
      }
      (Vi.effectTag |= e), (o.memoizedState = ta(1 | t, n, i, r));
    }
    function ia(e, t) {
      return ra(516, 4, e, t);
    }
    function aa(e, t) {
      return oa(516, 4, e, t);
    }
    function ua(e, t) {
      return oa(4, 2, e, t);
    }
    function la(e, t) {
      return "function" == typeof t
        ? ((e = e()),
          t(e),
          function () {
            t(null);
          })
        : null != t
        ? ((e = e()),
          (t.current = e),
          function () {
            t.current = null;
          })
        : void 0;
    }
    function ca(e, t, n) {
      return (
        (n = null != n ? n.concat([e]) : null), oa(4, 2, la.bind(null, t, e), n)
      );
    }
    function sa() {}
    function fa(e, t) {
      return (Gi().memoizedState = [e, void 0 === t ? null : t]), e;
    }
    function pa(e, t) {
      var n = Yi();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && Ki(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
    }
    function da(e, t) {
      var n = Yi();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && Ki(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function ha(e, t, n) {
      var r = Ho();
      Bo(98 > r ? 98 : r, function () {
        e(!0);
      }),
        Bo(97 < r ? 97 : r, function () {
          var r = Ui.suspense;
          Ui.suspense = void 0 === t ? null : t;
          try {
            e(!1), n();
          } finally {
            Ui.suspense = r;
          }
        });
    }
    function ma(e, t, n) {
      var r = qu(),
        o = di.suspense;
      o = {
        expirationTime: (r = Ku(r, e, o)),
        suspenseConfig: o,
        action: n,
        eagerReducer: null,
        eagerState: null,
        next: null,
      };
      var i = t.pending;
      if (
        (null === i ? (o.next = o) : ((o.next = i.next), (i.next = o)),
        (t.pending = o),
        (i = e.alternate),
        e === Vi || (null !== i && i === Vi))
      )
        ($i = !0), (o.expirationTime = Hi), (Vi.expirationTime = Hi);
      else {
        if (
          0 === e.expirationTime &&
          (null === i || 0 === i.expirationTime) &&
          null !== (i = t.lastRenderedReducer)
        )
          try {
            var a = t.lastRenderedState,
              u = i(a, n);
            if (((o.eagerReducer = i), (o.eagerState = u), Fr(u, a))) return;
          } catch (e) {}
        Qu(e, r);
      }
    }
    var va = {
        readContext: oi,
        useCallback: qi,
        useContext: qi,
        useEffect: qi,
        useImperativeHandle: qi,
        useLayoutEffect: qi,
        useMemo: qi,
        useReducer: qi,
        useRef: qi,
        useState: qi,
        useDebugValue: qi,
        useResponder: qi,
        useDeferredValue: qi,
        useTransition: qi,
      },
      ya = {
        readContext: oi,
        useCallback: fa,
        useContext: oi,
        useEffect: ia,
        useImperativeHandle: function (e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            ra(4, 2, la.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function (e, t) {
          return ra(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Gi();
          return (
            (t = void 0 === t ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, n) {
          var r = Gi();
          return (
            (t = void 0 !== n ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = (e = r.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t,
              }).dispatch =
              ma.bind(null, Vi, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          return (e = { current: e }), (Gi().memoizedState = e);
        },
        useState: ea,
        useDebugValue: sa,
        useResponder: Li,
        useDeferredValue: function (e, t) {
          var n = ea(e),
            r = n[0],
            o = n[1];
          return (
            ia(
              function () {
                var n = Ui.suspense;
                Ui.suspense = void 0 === t ? null : t;
                try {
                  o(e);
                } finally {
                  Ui.suspense = n;
                }
              },
              [e, t]
            ),
            r
          );
        },
        useTransition: function (e) {
          var t = ea(!1),
            n = t[0];
          return (t = t[1]), [fa(ha.bind(null, t, e), [t, e]), n];
        },
      },
      ga = {
        readContext: oi,
        useCallback: pa,
        useContext: oi,
        useEffect: aa,
        useImperativeHandle: ca,
        useLayoutEffect: ua,
        useMemo: da,
        useReducer: Zi,
        useRef: na,
        useState: function () {
          return Zi(Xi);
        },
        useDebugValue: sa,
        useResponder: Li,
        useDeferredValue: function (e, t) {
          var n = Zi(Xi),
            r = n[0],
            o = n[1];
          return (
            aa(
              function () {
                var n = Ui.suspense;
                Ui.suspense = void 0 === t ? null : t;
                try {
                  o(e);
                } finally {
                  Ui.suspense = n;
                }
              },
              [e, t]
            ),
            r
          );
        },
        useTransition: function (e) {
          var t = Zi(Xi),
            n = t[0];
          return (t = t[1]), [pa(ha.bind(null, t, e), [t, e]), n];
        },
      },
      ba = {
        readContext: oi,
        useCallback: pa,
        useContext: oi,
        useEffect: aa,
        useImperativeHandle: ca,
        useLayoutEffect: ua,
        useMemo: da,
        useReducer: Ji,
        useRef: na,
        useState: function () {
          return Ji(Xi);
        },
        useDebugValue: sa,
        useResponder: Li,
        useDeferredValue: function (e, t) {
          var n = Ji(Xi),
            r = n[0],
            o = n[1];
          return (
            aa(
              function () {
                var n = Ui.suspense;
                Ui.suspense = void 0 === t ? null : t;
                try {
                  o(e);
                } finally {
                  Ui.suspense = n;
                }
              },
              [e, t]
            ),
            r
          );
        },
        useTransition: function (e) {
          var t = Ji(Xi),
            n = t[0];
          return (t = t[1]), [pa(ha.bind(null, t, e), [t, e]), n];
        },
      },
      wa = null,
      xa = null,
      Ea = !1;
    function Sa(e, t) {
      var n = kl(5, null, null, 0);
      (n.elementType = "DELETED"),
        (n.type = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (n.effectTag = 8),
        null !== e.lastEffect
          ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
          : (e.firstEffect = e.lastEffect = n);
    }
    function ka(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            null !==
              (t =
                1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                  ? null
                  : t) && ((e.stateNode = t), !0)
          );
        case 6:
          return (
            null !==
              (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
            ((e.stateNode = t), !0)
          );
        case 13:
        default:
          return !1;
      }
    }
    function Ta(e) {
      if (Ea) {
        var t = xa;
        if (t) {
          var n = t;
          if (!ka(e, t)) {
            if (!(t = xn(n.nextSibling)) || !ka(e, t))
              return (
                (e.effectTag = (-1025 & e.effectTag) | 2),
                (Ea = !1),
                void (wa = e)
              );
            Sa(wa, n);
          }
          (wa = e), (xa = xn(t.firstChild));
        } else (e.effectTag = (-1025 & e.effectTag) | 2), (Ea = !1), (wa = e);
      }
    }
    function Oa(e) {
      for (
        e = e.return;
        null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

      )
        e = e.return;
      wa = e;
    }
    function Pa(e) {
      if (e !== wa) return !1;
      if (!Ea) return Oa(e), (Ea = !0), !1;
      var t = e.type;
      if (
        5 !== e.tag ||
        ("head" !== t && "body" !== t && !gn(t, e.memoizedProps))
      )
        for (t = xa; t; ) Sa(e, t), (t = xn(t.nextSibling));
      if ((Oa(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
          throw Error(a(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("/$" === n) {
                if (0 === t) {
                  xa = xn(e.nextSibling);
                  break e;
                }
                t--;
              } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
            }
            e = e.nextSibling;
          }
          xa = null;
        }
      } else xa = wa ? xn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function _a() {
      (xa = wa = null), (Ea = !1);
    }
    var Ca = Y.ReactCurrentOwner,
      Ma = !1;
    function Na(e, t, n, r) {
      t.child = null === e ? Oi(t, null, n, r) : Ti(t, e.child, n, r);
    }
    function ja(e, t, n, r, o) {
      n = n.render;
      var i = t.ref;
      return (
        ri(t, o),
        (r = Qi(e, t, n, r, i, o)),
        null === e || Ma
          ? ((t.effectTag |= 1), Na(e, t, r, o), t.child)
          : ((t.updateQueue = e.updateQueue),
            (t.effectTag &= -517),
            e.expirationTime <= o && (e.expirationTime = 0),
            Qa(e, t, o))
      );
    }
    function Aa(e, t, n, r, o, i) {
      if (null === e) {
        var a = n.type;
        return "function" != typeof a ||
          Tl(a) ||
          void 0 !== a.defaultProps ||
          null !== n.compare ||
          void 0 !== n.defaultProps
          ? (((e = Pl(n.type, null, r, null, t.mode, i)).ref = t.ref),
            (e.return = t),
            (t.child = e))
          : ((t.tag = 15), (t.type = a), Ra(e, t, a, r, o, i));
      }
      return (
        (a = e.child),
        o < i &&
        ((o = a.memoizedProps),
        (n = null !== (n = n.compare) ? n : zr)(o, r) && e.ref === t.ref)
          ? Qa(e, t, i)
          : ((t.effectTag |= 1),
            ((e = Ol(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e))
      );
    }
    function Ra(e, t, n, r, o, i) {
      return null !== e &&
        zr(e.memoizedProps, r) &&
        e.ref === t.ref &&
        ((Ma = !1), o < i)
        ? ((t.expirationTime = e.expirationTime), Qa(e, t, i))
        : Ia(e, t, n, r, i);
    }
    function Da(e, t) {
      var n = t.ref;
      ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
        (t.effectTag |= 128);
    }
    function Ia(e, t, n, r, o) {
      var i = vo(n) ? ho : fo.current;
      return (
        (i = mo(t, i)),
        ri(t, o),
        (n = Qi(e, t, n, r, i, o)),
        null === e || Ma
          ? ((t.effectTag |= 1), Na(e, t, n, o), t.child)
          : ((t.updateQueue = e.updateQueue),
            (t.effectTag &= -517),
            e.expirationTime <= o && (e.expirationTime = 0),
            Qa(e, t, o))
      );
    }
    function Fa(e, t, n, r, o) {
      if (vo(n)) {
        var i = !0;
        wo(t);
      } else i = !1;
      if ((ri(t, o), null === t.stateNode))
        null !== e &&
          ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
          gi(t, n, r),
          wi(t, n, r, o),
          (r = !0);
      else if (null === e) {
        var a = t.stateNode,
          u = t.memoizedProps;
        a.props = u;
        var l = a.context,
          c = n.contextType;
        "object" == typeof c && null !== c
          ? (c = oi(c))
          : (c = mo(t, (c = vo(n) ? ho : fo.current)));
        var s = n.getDerivedStateFromProps,
          f =
            "function" == typeof s ||
            "function" == typeof a.getSnapshotBeforeUpdate;
        f ||
          ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
            "function" != typeof a.componentWillReceiveProps) ||
          ((u !== r || l !== c) && bi(t, a, r, c)),
          (ii = !1);
        var p = t.memoizedState;
        (a.state = p),
          fi(t, r, a, o),
          (l = t.memoizedState),
          u !== r || p !== l || po.current || ii
            ? ("function" == typeof s &&
                (mi(t, n, s, r), (l = t.memoizedState)),
              (u = ii || yi(t, n, u, r, p, l, c))
                ? (f ||
                    ("function" != typeof a.UNSAFE_componentWillMount &&
                      "function" != typeof a.componentWillMount) ||
                    ("function" == typeof a.componentWillMount &&
                      a.componentWillMount(),
                    "function" == typeof a.UNSAFE_componentWillMount &&
                      a.UNSAFE_componentWillMount()),
                  "function" == typeof a.componentDidMount &&
                    (t.effectTag |= 4))
                : ("function" == typeof a.componentDidMount &&
                    (t.effectTag |= 4),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = c),
              (r = u))
            : ("function" == typeof a.componentDidMount && (t.effectTag |= 4),
              (r = !1));
      } else
        (a = t.stateNode),
          ui(e, t),
          (u = t.memoizedProps),
          (a.props = t.type === t.elementType ? u : Go(t.type, u)),
          (l = a.context),
          "object" == typeof (c = n.contextType) && null !== c
            ? (c = oi(c))
            : (c = mo(t, (c = vo(n) ? ho : fo.current))),
          (f =
            "function" == typeof (s = n.getDerivedStateFromProps) ||
            "function" == typeof a.getSnapshotBeforeUpdate) ||
            ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
              "function" != typeof a.componentWillReceiveProps) ||
            ((u !== r || l !== c) && bi(t, a, r, c)),
          (ii = !1),
          (l = t.memoizedState),
          (a.state = l),
          fi(t, r, a, o),
          (p = t.memoizedState),
          u !== r || l !== p || po.current || ii
            ? ("function" == typeof s &&
                (mi(t, n, s, r), (p = t.memoizedState)),
              (s = ii || yi(t, n, u, r, l, p, c))
                ? (f ||
                    ("function" != typeof a.UNSAFE_componentWillUpdate &&
                      "function" != typeof a.componentWillUpdate) ||
                    ("function" == typeof a.componentWillUpdate &&
                      a.componentWillUpdate(r, p, c),
                    "function" == typeof a.UNSAFE_componentWillUpdate &&
                      a.UNSAFE_componentWillUpdate(r, p, c)),
                  "function" == typeof a.componentDidUpdate &&
                    (t.effectTag |= 4),
                  "function" == typeof a.getSnapshotBeforeUpdate &&
                    (t.effectTag |= 256))
                : ("function" != typeof a.componentDidUpdate ||
                    (u === e.memoizedProps && l === e.memoizedState) ||
                    (t.effectTag |= 4),
                  "function" != typeof a.getSnapshotBeforeUpdate ||
                    (u === e.memoizedProps && l === e.memoizedState) ||
                    (t.effectTag |= 256),
                  (t.memoizedProps = r),
                  (t.memoizedState = p)),
              (a.props = r),
              (a.state = p),
              (a.context = c),
              (r = s))
            : ("function" != typeof a.componentDidUpdate ||
                (u === e.memoizedProps && l === e.memoizedState) ||
                (t.effectTag |= 4),
              "function" != typeof a.getSnapshotBeforeUpdate ||
                (u === e.memoizedProps && l === e.memoizedState) ||
                (t.effectTag |= 256),
              (r = !1));
      return La(e, t, n, r, i, o);
    }
    function La(e, t, n, r, o, i) {
      Da(e, t);
      var a = 0 != (64 & t.effectTag);
      if (!r && !a) return o && xo(t, n, !1), Qa(e, t, i);
      (r = t.stateNode), (Ca.current = t);
      var u =
        a && "function" != typeof n.getDerivedStateFromError
          ? null
          : r.render();
      return (
        (t.effectTag |= 1),
        null !== e && a
          ? ((t.child = Ti(t, e.child, null, i)), (t.child = Ti(t, null, u, i)))
          : Na(e, t, u, i),
        (t.memoizedState = r.state),
        o && xo(t, n, !0),
        t.child
      );
    }
    function za(e) {
      var t = e.stateNode;
      t.pendingContext
        ? go(0, t.pendingContext, t.pendingContext !== t.context)
        : t.context && go(0, t.context, !1),
        ji(e, t.containerInfo);
    }
    var Ua,
      Ha,
      Va,
      Ba = { dehydrated: null, retryTime: 0 };
    function Wa(e, t, n) {
      var r,
        o = t.mode,
        i = t.pendingProps,
        a = Ii.current,
        u = !1;
      if (
        ((r = 0 != (64 & t.effectTag)) ||
          (r = 0 != (2 & a) && (null === e || null !== e.memoizedState)),
        r
          ? ((u = !0), (t.effectTag &= -65))
          : (null !== e && null === e.memoizedState) ||
            void 0 === i.fallback ||
            !0 === i.unstable_avoidThisFallback ||
            (a |= 1),
        co(Ii, 1 & a),
        null === e)
      ) {
        if ((void 0 !== i.fallback && Ta(t), u)) {
          if (
            ((u = i.fallback),
            ((i = _l(null, o, 0, null)).return = t),
            0 == (2 & t.mode))
          )
            for (
              e = null !== t.memoizedState ? t.child.child : t.child,
                i.child = e;
              null !== e;

            )
              (e.return = i), (e = e.sibling);
          return (
            ((n = _l(u, o, n, null)).return = t),
            (i.sibling = n),
            (t.memoizedState = Ba),
            (t.child = i),
            n
          );
        }
        return (
          (o = i.children),
          (t.memoizedState = null),
          (t.child = Oi(t, null, o, n))
        );
      }
      if (null !== e.memoizedState) {
        if (((o = (e = e.child).sibling), u)) {
          if (
            ((i = i.fallback),
            ((n = Ol(e, e.pendingProps)).return = t),
            0 == (2 & t.mode) &&
              (u = null !== t.memoizedState ? t.child.child : t.child) !==
                e.child)
          )
            for (n.child = u; null !== u; ) (u.return = n), (u = u.sibling);
          return (
            ((o = Ol(o, i)).return = t),
            (n.sibling = o),
            (n.childExpirationTime = 0),
            (t.memoizedState = Ba),
            (t.child = n),
            o
          );
        }
        return (
          (n = Ti(t, e.child, i.children, n)),
          (t.memoizedState = null),
          (t.child = n)
        );
      }
      if (((e = e.child), u)) {
        if (
          ((u = i.fallback),
          ((i = _l(null, o, 0, null)).return = t),
          (i.child = e),
          null !== e && (e.return = i),
          0 == (2 & t.mode))
        )
          for (
            e = null !== t.memoizedState ? t.child.child : t.child, i.child = e;
            null !== e;

          )
            (e.return = i), (e = e.sibling);
        return (
          ((n = _l(u, o, n, null)).return = t),
          (i.sibling = n),
          (n.effectTag |= 2),
          (i.childExpirationTime = 0),
          (t.memoizedState = Ba),
          (t.child = i),
          n
        );
      }
      return (t.memoizedState = null), (t.child = Ti(t, e, i.children, n));
    }
    function $a(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var n = e.alternate;
      null !== n && n.expirationTime < t && (n.expirationTime = t),
        ni(e.return, t);
    }
    function qa(e, t, n, r, o, i) {
      var a = e.memoizedState;
      null === a
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailExpiration: 0,
            tailMode: o,
            lastEffect: i,
          })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = r),
          (a.tail = n),
          (a.tailExpiration = 0),
          (a.tailMode = o),
          (a.lastEffect = i));
    }
    function Ka(e, t, n) {
      var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
      if ((Na(e, t, r.children, n), 0 != (2 & (r = Ii.current))))
        (r = (1 & r) | 2), (t.effectTag |= 64);
      else {
        if (null !== e && 0 != (64 & e.effectTag))
          e: for (e = t.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && $a(e, n);
            else if (19 === e.tag) $a(e, n);
            else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break e;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        r &= 1;
      }
      if ((co(Ii, r), 0 == (2 & t.mode))) t.memoizedState = null;
      else
        switch (o) {
          case "forwards":
            for (n = t.child, o = null; null !== n; )
              null !== (e = n.alternate) && null === Fi(e) && (o = n),
                (n = n.sibling);
            null === (n = o)
              ? ((o = t.child), (t.child = null))
              : ((o = n.sibling), (n.sibling = null)),
              qa(t, !1, o, n, i, t.lastEffect);
            break;
          case "backwards":
            for (n = null, o = t.child, t.child = null; null !== o; ) {
              if (null !== (e = o.alternate) && null === Fi(e)) {
                t.child = o;
                break;
              }
              (e = o.sibling), (o.sibling = n), (n = o), (o = e);
            }
            qa(t, !0, n, null, i, t.lastEffect);
            break;
          case "together":
            qa(t, !1, null, null, void 0, t.lastEffect);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Qa(e, t, n) {
      null !== e && (t.dependencies = e.dependencies);
      var r = t.expirationTime;
      if ((0 !== r && al(r), t.childExpirationTime < n)) return null;
      if (null !== e && t.child !== e.child) throw Error(a(153));
      if (null !== t.child) {
        for (
          n = Ol((e = t.child), e.pendingProps), t.child = n, n.return = t;
          null !== e.sibling;

        )
          (e = e.sibling), ((n = n.sibling = Ol(e, e.pendingProps)).return = t);
        n.sibling = null;
      }
      return t.child;
    }
    function Ga(e, t) {
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; null !== t; )
            null !== t.alternate && (n = t), (t = t.sibling);
          null === n ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; null !== n; )
            null !== n.alternate && (r = n), (n = n.sibling);
          null === r
            ? t || null === e.tail
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
    }
    function Ya(e, t, n) {
      var r = t.pendingProps;
      switch (t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return null;
        case 1:
          return vo(t.type) && yo(), null;
        case 3:
          return (
            Ai(),
            lo(po),
            lo(fo),
            (n = t.stateNode).pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (null !== e && null !== e.child) || !Pa(t) || (t.effectTag |= 4),
            null
          );
        case 5:
          Di(t), (n = Ni(Mi.current));
          var i = t.type;
          if (null !== e && null != t.stateNode)
            Ha(e, t, i, r, n), e.ref !== t.ref && (t.effectTag |= 128);
          else {
            if (!r) {
              if (null === t.stateNode) throw Error(a(166));
              return null;
            }
            if (((e = Ni(_i.current)), Pa(t))) {
              (r = t.stateNode), (i = t.type);
              var u = t.memoizedProps;
              switch (((r[kn] = t), (r[Tn] = u), i)) {
                case "iframe":
                case "object":
                case "embed":
                  Kt("load", r);
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < Ye.length; e++) Kt(Ye[e], r);
                  break;
                case "source":
                  Kt("error", r);
                  break;
                case "img":
                case "image":
                case "link":
                  Kt("error", r), Kt("load", r);
                  break;
                case "form":
                  Kt("reset", r), Kt("submit", r);
                  break;
                case "details":
                  Kt("toggle", r);
                  break;
                case "input":
                  Se(r, u), Kt("invalid", r), ln(n, "onChange");
                  break;
                case "select":
                  (r._wrapperState = { wasMultiple: !!u.multiple }),
                    Kt("invalid", r),
                    ln(n, "onChange");
                  break;
                case "textarea":
                  Ne(r, u), Kt("invalid", r), ln(n, "onChange");
              }
              for (var l in (on(i, u), (e = null), u))
                if (u.hasOwnProperty(l)) {
                  var c = u[l];
                  "children" === l
                    ? "string" == typeof c
                      ? r.textContent !== c && (e = ["children", c])
                      : "number" == typeof c &&
                        r.textContent !== "" + c &&
                        (e = ["children", "" + c])
                    : k.hasOwnProperty(l) && null != c && ln(n, l);
                }
              switch (i) {
                case "input":
                  we(r), Oe(r, u, !0);
                  break;
                case "textarea":
                  we(r), Ae(r);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" == typeof u.onClick && (r.onclick = cn);
              }
              (n = e), (t.updateQueue = n), null !== n && (t.effectTag |= 4);
            } else {
              switch (
                ((l = 9 === n.nodeType ? n : n.ownerDocument),
                e === un && (e = Ie(i)),
                e === un
                  ? "script" === i
                    ? (((e = l.createElement("div")).innerHTML =
                        "<script></script>"),
                      (e = e.removeChild(e.firstChild)))
                    : "string" == typeof r.is
                    ? (e = l.createElement(i, { is: r.is }))
                    : ((e = l.createElement(i)),
                      "select" === i &&
                        ((l = e),
                        r.multiple
                          ? (l.multiple = !0)
                          : r.size && (l.size = r.size)))
                  : (e = l.createElementNS(e, i)),
                (e[kn] = t),
                (e[Tn] = r),
                Ua(e, t),
                (t.stateNode = e),
                (l = an(i, r)),
                i)
              ) {
                case "iframe":
                case "object":
                case "embed":
                  Kt("load", e), (c = r);
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Ye.length; c++) Kt(Ye[c], e);
                  c = r;
                  break;
                case "source":
                  Kt("error", e), (c = r);
                  break;
                case "img":
                case "image":
                case "link":
                  Kt("error", e), Kt("load", e), (c = r);
                  break;
                case "form":
                  Kt("reset", e), Kt("submit", e), (c = r);
                  break;
                case "details":
                  Kt("toggle", e), (c = r);
                  break;
                case "input":
                  Se(e, r), (c = Ee(e, r)), Kt("invalid", e), ln(n, "onChange");
                  break;
                case "option":
                  c = _e(e, r);
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (c = o({}, r, { value: void 0 })),
                    Kt("invalid", e),
                    ln(n, "onChange");
                  break;
                case "textarea":
                  Ne(e, r), (c = Me(e, r)), Kt("invalid", e), ln(n, "onChange");
                  break;
                default:
                  c = r;
              }
              on(i, c);
              var s = c;
              for (u in s)
                if (s.hasOwnProperty(u)) {
                  var f = s[u];
                  "style" === u
                    ? nn(e, f)
                    : "dangerouslySetInnerHTML" === u
                    ? null != (f = f ? f.__html : void 0) && ze(e, f)
                    : "children" === u
                    ? "string" == typeof f
                      ? ("textarea" !== i || "" !== f) && Ue(e, f)
                      : "number" == typeof f && Ue(e, "" + f)
                    : "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (k.hasOwnProperty(u)
                        ? null != f && ln(n, u)
                        : null != f && X(e, u, f, l));
                }
              switch (i) {
                case "input":
                  we(e), Oe(e, r, !1);
                  break;
                case "textarea":
                  we(e), Ae(e);
                  break;
                case "option":
                  null != r.value && e.setAttribute("value", "" + ge(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    null != (n = r.value)
                      ? Ce(e, !!r.multiple, n, !1)
                      : null != r.defaultValue &&
                        Ce(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  "function" == typeof c.onClick && (e.onclick = cn);
              }
              yn(i, r) && (t.effectTag |= 4);
            }
            null !== t.ref && (t.effectTag |= 128);
          }
          return null;
        case 6:
          if (e && null != t.stateNode) Va(0, t, e.memoizedProps, r);
          else {
            if ("string" != typeof r && null === t.stateNode)
              throw Error(a(166));
            (n = Ni(Mi.current)),
              Ni(_i.current),
              Pa(t)
                ? ((n = t.stateNode),
                  (r = t.memoizedProps),
                  (n[kn] = t),
                  n.nodeValue !== r && (t.effectTag |= 4))
                : (((n = (
                    9 === n.nodeType ? n : n.ownerDocument
                  ).createTextNode(r))[kn] = t),
                  (t.stateNode = n));
          }
          return null;
        case 13:
          return (
            lo(Ii),
            (r = t.memoizedState),
            0 != (64 & t.effectTag)
              ? ((t.expirationTime = n), t)
              : ((n = null !== r),
                (r = !1),
                null === e
                  ? void 0 !== t.memoizedProps.fallback && Pa(t)
                  : ((r = null !== (i = e.memoizedState)),
                    n ||
                      null === i ||
                      (null !== (i = e.child.sibling) &&
                        (null !== (u = t.firstEffect)
                          ? ((t.firstEffect = i), (i.nextEffect = u))
                          : ((t.firstEffect = t.lastEffect = i),
                            (i.nextEffect = null)),
                        (i.effectTag = 8)))),
                n &&
                  !r &&
                  0 != (2 & t.mode) &&
                  ((null === e &&
                    !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                  0 != (1 & Ii.current)
                    ? Pu === wu && (Pu = xu)
                    : ((Pu !== wu && Pu !== xu) || (Pu = Eu),
                      0 !== ju && null !== ku && (Al(ku, Ou), Rl(ku, ju)))),
                (n || r) && (t.effectTag |= 4),
                null)
          );
        case 4:
          return Ai(), null;
        case 10:
          return ti(t), null;
        case 17:
          return vo(t.type) && yo(), null;
        case 19:
          if ((lo(Ii), null === (r = t.memoizedState))) return null;
          if (((i = 0 != (64 & t.effectTag)), null === (u = r.rendering))) {
            if (i) Ga(r, !1);
            else if (Pu !== wu || (null !== e && 0 != (64 & e.effectTag)))
              for (u = t.child; null !== u; ) {
                if (null !== (e = Fi(u))) {
                  for (
                    t.effectTag |= 64,
                      Ga(r, !1),
                      null !== (i = e.updateQueue) &&
                        ((t.updateQueue = i), (t.effectTag |= 4)),
                      null === r.lastEffect && (t.firstEffect = null),
                      t.lastEffect = r.lastEffect,
                      r = t.child;
                    null !== r;

                  )
                    (u = n),
                      ((i = r).effectTag &= 2),
                      (i.nextEffect = null),
                      (i.firstEffect = null),
                      (i.lastEffect = null),
                      null === (e = i.alternate)
                        ? ((i.childExpirationTime = 0),
                          (i.expirationTime = u),
                          (i.child = null),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null))
                        : ((i.childExpirationTime = e.childExpirationTime),
                          (i.expirationTime = e.expirationTime),
                          (i.child = e.child),
                          (i.memoizedProps = e.memoizedProps),
                          (i.memoizedState = e.memoizedState),
                          (i.updateQueue = e.updateQueue),
                          (u = e.dependencies),
                          (i.dependencies =
                            null === u
                              ? null
                              : {
                                  expirationTime: u.expirationTime,
                                  firstContext: u.firstContext,
                                  responders: u.responders,
                                })),
                      (r = r.sibling);
                  return co(Ii, (1 & Ii.current) | 2), t.child;
                }
                u = u.sibling;
              }
          } else {
            if (!i)
              if (null !== (e = Fi(u))) {
                if (
                  ((t.effectTag |= 64),
                  (i = !0),
                  null !== (n = e.updateQueue) &&
                    ((t.updateQueue = n), (t.effectTag |= 4)),
                  Ga(r, !0),
                  null === r.tail && "hidden" === r.tailMode && !u.alternate)
                )
                  return (
                    null !== (t = t.lastEffect = r.lastEffect) &&
                      (t.nextEffect = null),
                    null
                  );
              } else
                2 * Uo() - r.renderingStartTime > r.tailExpiration &&
                  1 < n &&
                  ((t.effectTag |= 64),
                  (i = !0),
                  Ga(r, !1),
                  (t.expirationTime = t.childExpirationTime = n - 1));
            r.isBackwards
              ? ((u.sibling = t.child), (t.child = u))
              : (null !== (n = r.last) ? (n.sibling = u) : (t.child = u),
                (r.last = u));
          }
          return null !== r.tail
            ? (0 === r.tailExpiration && (r.tailExpiration = Uo() + 500),
              (n = r.tail),
              (r.rendering = n),
              (r.tail = n.sibling),
              (r.lastEffect = t.lastEffect),
              (r.renderingStartTime = Uo()),
              (n.sibling = null),
              (t = Ii.current),
              co(Ii, i ? (1 & t) | 2 : 1 & t),
              n)
            : null;
      }
      throw Error(a(156, t.tag));
    }
    function Xa(e) {
      switch (e.tag) {
        case 1:
          vo(e.type) && yo();
          var t = e.effectTag;
          return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
        case 3:
          if ((Ai(), lo(po), lo(fo), 0 != (64 & (t = e.effectTag))))
            throw Error(a(285));
          return (e.effectTag = (-4097 & t) | 64), e;
        case 5:
          return Di(e), null;
        case 13:
          return (
            lo(Ii),
            4096 & (t = e.effectTag)
              ? ((e.effectTag = (-4097 & t) | 64), e)
              : null
          );
        case 19:
          return lo(Ii), null;
        case 4:
          return Ai(), null;
        case 10:
          return ti(e), null;
        default:
          return null;
      }
    }
    function Za(e, t) {
      return { value: e, source: t, stack: ye(t) };
    }
    (Ua = function (e, t) {
      for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === t) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === t) return;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }),
      (Ha = function (e, t, n, r, i) {
        var a = e.memoizedProps;
        if (a !== r) {
          var u,
            l,
            c = t.stateNode;
          switch ((Ni(_i.current), (e = null), n)) {
            case "input":
              (a = Ee(c, a)), (r = Ee(c, r)), (e = []);
              break;
            case "option":
              (a = _e(c, a)), (r = _e(c, r)), (e = []);
              break;
            case "select":
              (a = o({}, a, { value: void 0 })),
                (r = o({}, r, { value: void 0 })),
                (e = []);
              break;
            case "textarea":
              (a = Me(c, a)), (r = Me(c, r)), (e = []);
              break;
            default:
              "function" != typeof a.onClick &&
                "function" == typeof r.onClick &&
                (c.onclick = cn);
          }
          for (u in (on(n, r), (n = null), a))
            if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
              if ("style" === u)
                for (l in (c = a[u]))
                  c.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
              else
                "dangerouslySetInnerHTML" !== u &&
                  "children" !== u &&
                  "suppressContentEditableWarning" !== u &&
                  "suppressHydrationWarning" !== u &&
                  "autoFocus" !== u &&
                  (k.hasOwnProperty(u)
                    ? e || (e = [])
                    : (e = e || []).push(u, null));
          for (u in r) {
            var s = r[u];
            if (
              ((c = null != a ? a[u] : void 0),
              r.hasOwnProperty(u) && s !== c && (null != s || null != c))
            )
              if ("style" === u)
                if (c) {
                  for (l in c)
                    !c.hasOwnProperty(l) ||
                      (s && s.hasOwnProperty(l)) ||
                      (n || (n = {}), (n[l] = ""));
                  for (l in s)
                    s.hasOwnProperty(l) &&
                      c[l] !== s[l] &&
                      (n || (n = {}), (n[l] = s[l]));
                } else n || (e || (e = []), e.push(u, n)), (n = s);
              else
                "dangerouslySetInnerHTML" === u
                  ? ((s = s ? s.__html : void 0),
                    (c = c ? c.__html : void 0),
                    null != s && c !== s && (e = e || []).push(u, s))
                  : "children" === u
                  ? c === s ||
                    ("string" != typeof s && "number" != typeof s) ||
                    (e = e || []).push(u, "" + s)
                  : "suppressContentEditableWarning" !== u &&
                    "suppressHydrationWarning" !== u &&
                    (k.hasOwnProperty(u)
                      ? (null != s && ln(i, u), e || c === s || (e = []))
                      : (e = e || []).push(u, s));
          }
          n && (e = e || []).push("style", n),
            (i = e),
            (t.updateQueue = i) && (t.effectTag |= 4);
        }
      }),
      (Va = function (e, t, n, r) {
        n !== r && (t.effectTag |= 4);
      });
    var Ja = "function" == typeof WeakSet ? WeakSet : Set;
    function eu(e, t) {
      var n = t.source,
        r = t.stack;
      null === r && null !== n && (r = ye(n)),
        null !== n && ve(n.type),
        (t = t.value),
        null !== e && 1 === e.tag && ve(e.type);
      try {
        console.error(t);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function tu(e) {
      var t = e.ref;
      if (null !== t)
        if ("function" == typeof t)
          try {
            t(null);
          } catch (t) {
            gl(e, t);
          }
        else t.current = null;
    }
    function nu(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return;
        case 1:
          if (256 & t.effectTag && null !== e) {
            var n = e.memoizedProps,
              r = e.memoizedState;
            (t = (e = t.stateNode).getSnapshotBeforeUpdate(
              t.elementType === t.type ? n : Go(t.type, n),
              r
            )),
              (e.__reactInternalSnapshotBeforeUpdate = t);
          }
          return;
        case 3:
        case 5:
        case 6:
        case 4:
        case 17:
          return;
      }
      throw Error(a(163));
    }
    function ru(e, t) {
      if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            var r = n.destroy;
            (n.destroy = void 0), void 0 !== r && r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function ou(e, t) {
      if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function iu(e, t, n) {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return void ou(3, n);
        case 1:
          if (((e = n.stateNode), 4 & n.effectTag))
            if (null === t) e.componentDidMount();
            else {
              var r =
                n.elementType === n.type
                  ? t.memoizedProps
                  : Go(n.type, t.memoizedProps);
              e.componentDidUpdate(
                r,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          return void (null !== (t = n.updateQueue) && pi(n, t, e));
        case 3:
          if (null !== (t = n.updateQueue)) {
            if (((e = null), null !== n.child))
              switch (n.child.tag) {
                case 5:
                  e = n.child.stateNode;
                  break;
                case 1:
                  e = n.child.stateNode;
              }
            pi(n, t, e);
          }
          return;
        case 5:
          return (
            (e = n.stateNode),
            void (
              null === t &&
              4 & n.effectTag &&
              yn(n.type, n.memoizedProps) &&
              e.focus()
            )
          );
        case 6:
        case 4:
        case 12:
          return;
        case 13:
          return void (
            null === n.memoizedState &&
            ((n = n.alternate),
            null !== n &&
              ((n = n.memoizedState),
              null !== n && ((n = n.dehydrated), null !== n && It(n))))
          );
        case 19:
        case 17:
        case 20:
        case 21:
          return;
      }
      throw Error(a(163));
    }
    function au(e, t, n) {
      switch (("function" == typeof El && El(t), t.tag)) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
            var r = e.next;
            Bo(97 < n ? 97 : n, function () {
              var e = r;
              do {
                var n = e.destroy;
                if (void 0 !== n) {
                  var o = t;
                  try {
                    n();
                  } catch (e) {
                    gl(o, e);
                  }
                }
                e = e.next;
              } while (e !== r);
            });
          }
          break;
        case 1:
          tu(t),
            "function" == typeof (n = t.stateNode).componentWillUnmount &&
              (function (e, t) {
                try {
                  (t.props = e.memoizedProps),
                    (t.state = e.memoizedState),
                    t.componentWillUnmount();
                } catch (t) {
                  gl(e, t);
                }
              })(t, n);
          break;
        case 5:
          tu(t);
          break;
        case 4:
          su(e, t, n);
      }
    }
    function uu(e) {
      var t = e.alternate;
      (e.return = null),
        (e.child = null),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.dependencies = null),
        (e.alternate = null),
        (e.firstEffect = null),
        (e.lastEffect = null),
        (e.pendingProps = null),
        (e.memoizedProps = null),
        (e.stateNode = null),
        null !== t && uu(t);
    }
    function lu(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function cu(e) {
      e: {
        for (var t = e.return; null !== t; ) {
          if (lu(t)) {
            var n = t;
            break e;
          }
          t = t.return;
        }
        throw Error(a(160));
      }
      switch (((t = n.stateNode), n.tag)) {
        case 5:
          var r = !1;
          break;
        case 3:
        case 4:
          (t = t.containerInfo), (r = !0);
          break;
        default:
          throw Error(a(161));
      }
      16 & n.effectTag && (Ue(t, ""), (n.effectTag &= -17));
      e: t: for (n = e; ; ) {
        for (; null === n.sibling; ) {
          if (null === n.return || lu(n.return)) {
            n = null;
            break e;
          }
          n = n.return;
        }
        for (
          n.sibling.return = n.return, n = n.sibling;
          5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

        ) {
          if (2 & n.effectTag) continue t;
          if (null === n.child || 4 === n.tag) continue t;
          (n.child.return = n), (n = n.child);
        }
        if (!(2 & n.effectTag)) {
          n = n.stateNode;
          break e;
        }
      }
      r
        ? (function e(t, n, r) {
            var o = t.tag,
              i = 5 === o || 6 === o;
            if (i)
              (t = i ? t.stateNode : t.stateNode.instance),
                n
                  ? 8 === r.nodeType
                    ? r.parentNode.insertBefore(t, n)
                    : r.insertBefore(t, n)
                  : (8 === r.nodeType
                      ? (n = r.parentNode).insertBefore(t, r)
                      : (n = r).appendChild(t),
                    (null !== (r = r._reactRootContainer) && void 0 !== r) ||
                      null !== n.onclick ||
                      (n.onclick = cn));
            else if (4 !== o && null !== (t = t.child))
              for (e(t, n, r), t = t.sibling; null !== t; )
                e(t, n, r), (t = t.sibling);
          })(e, n, t)
        : (function e(t, n, r) {
            var o = t.tag,
              i = 5 === o || 6 === o;
            if (i)
              (t = i ? t.stateNode : t.stateNode.instance),
                n ? r.insertBefore(t, n) : r.appendChild(t);
            else if (4 !== o && null !== (t = t.child))
              for (e(t, n, r), t = t.sibling; null !== t; )
                e(t, n, r), (t = t.sibling);
          })(e, n, t);
    }
    function su(e, t, n) {
      for (var r, o, i = t, u = !1; ; ) {
        if (!u) {
          u = i.return;
          e: for (;;) {
            if (null === u) throw Error(a(160));
            switch (((r = u.stateNode), u.tag)) {
              case 5:
                o = !1;
                break e;
              case 3:
              case 4:
                (r = r.containerInfo), (o = !0);
                break e;
            }
            u = u.return;
          }
          u = !0;
        }
        if (5 === i.tag || 6 === i.tag) {
          e: for (var l = e, c = i, s = n, f = c; ; )
            if ((au(l, f, s), null !== f.child && 4 !== f.tag))
              (f.child.return = f), (f = f.child);
            else {
              if (f === c) break e;
              for (; null === f.sibling; ) {
                if (null === f.return || f.return === c) break e;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
          o
            ? ((l = r),
              (c = i.stateNode),
              8 === l.nodeType ? l.parentNode.removeChild(c) : l.removeChild(c))
            : r.removeChild(i.stateNode);
        } else if (4 === i.tag) {
          if (null !== i.child) {
            (r = i.stateNode.containerInfo),
              (o = !0),
              (i.child.return = i),
              (i = i.child);
            continue;
          }
        } else if ((au(e, i, n), null !== i.child)) {
          (i.child.return = i), (i = i.child);
          continue;
        }
        if (i === t) break;
        for (; null === i.sibling; ) {
          if (null === i.return || i.return === t) return;
          4 === (i = i.return).tag && (u = !1);
        }
        (i.sibling.return = i.return), (i = i.sibling);
      }
    }
    function fu(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          return void ru(3, t);
        case 1:
          return;
        case 5:
          var n = t.stateNode;
          if (null != n) {
            var r = t.memoizedProps,
              o = null !== e ? e.memoizedProps : r;
            e = t.type;
            var i = t.updateQueue;
            if (((t.updateQueue = null), null !== i)) {
              for (
                n[Tn] = r,
                  "input" === e &&
                    "radio" === r.type &&
                    null != r.name &&
                    ke(n, r),
                  an(e, o),
                  t = an(e, r),
                  o = 0;
                o < i.length;
                o += 2
              ) {
                var u = i[o],
                  l = i[o + 1];
                "style" === u
                  ? nn(n, l)
                  : "dangerouslySetInnerHTML" === u
                  ? ze(n, l)
                  : "children" === u
                  ? Ue(n, l)
                  : X(n, u, l, t);
              }
              switch (e) {
                case "input":
                  Te(n, r);
                  break;
                case "textarea":
                  je(n, r);
                  break;
                case "select":
                  (t = n._wrapperState.wasMultiple),
                    (n._wrapperState.wasMultiple = !!r.multiple),
                    null != (e = r.value)
                      ? Ce(n, !!r.multiple, e, !1)
                      : t !== !!r.multiple &&
                        (null != r.defaultValue
                          ? Ce(n, !!r.multiple, r.defaultValue, !0)
                          : Ce(n, !!r.multiple, r.multiple ? [] : "", !1));
              }
            }
          }
          return;
        case 6:
          if (null === t.stateNode) throw Error(a(162));
          return void (t.stateNode.nodeValue = t.memoizedProps);
        case 3:
          return void (
            (t = t.stateNode).hydrate && ((t.hydrate = !1), It(t.containerInfo))
          );
        case 12:
          return;
        case 13:
          if (
            ((n = t),
            null === t.memoizedState
              ? (r = !1)
              : ((r = !0), (n = t.child), (Ru = Uo())),
            null !== n)
          )
            e: for (e = n; ; ) {
              if (5 === e.tag)
                (i = e.stateNode),
                  r
                    ? "function" == typeof (i = i.style).setProperty
                      ? i.setProperty("display", "none", "important")
                      : (i.display = "none")
                    : ((i = e.stateNode),
                      (o =
                        null != (o = e.memoizedProps.style) &&
                        o.hasOwnProperty("display")
                          ? o.display
                          : null),
                      (i.style.display = tn("display", o)));
              else if (6 === e.tag)
                e.stateNode.nodeValue = r ? "" : e.memoizedProps;
              else {
                if (
                  13 === e.tag &&
                  null !== e.memoizedState &&
                  null === e.memoizedState.dehydrated
                ) {
                  ((i = e.child.sibling).return = e), (e = i);
                  continue;
                }
                if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
              }
              if (e === n) break;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === n) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          return void pu(t);
        case 19:
          return void pu(t);
        case 17:
          return;
      }
      throw Error(a(163));
    }
    function pu(e) {
      var t = e.updateQueue;
      if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new Ja()),
          t.forEach(function (t) {
            var r = wl.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
      }
    }
    var du = "function" == typeof WeakMap ? WeakMap : Map;
    function hu(e, t, n) {
      ((n = li(n, null)).tag = 3), (n.payload = { element: null });
      var r = t.value;
      return (
        (n.callback = function () {
          Iu || ((Iu = !0), (Fu = r)), eu(e, t);
        }),
        n
      );
    }
    function mu(e, t, n) {
      (n = li(n, null)).tag = 3;
      var r = e.type.getDerivedStateFromError;
      if ("function" == typeof r) {
        var o = t.value;
        n.payload = function () {
          return eu(e, t), r(o);
        };
      }
      var i = e.stateNode;
      return (
        null !== i &&
          "function" == typeof i.componentDidCatch &&
          (n.callback = function () {
            "function" != typeof r &&
              (null === Lu ? (Lu = new Set([this])) : Lu.add(this), eu(e, t));
            var n = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: null !== n ? n : "",
            });
          }),
        n
      );
    }
    var vu,
      yu = Math.ceil,
      gu = Y.ReactCurrentDispatcher,
      bu = Y.ReactCurrentOwner,
      wu = 0,
      xu = 3,
      Eu = 4,
      Su = 0,
      ku = null,
      Tu = null,
      Ou = 0,
      Pu = wu,
      _u = null,
      Cu = 1073741823,
      Mu = 1073741823,
      Nu = null,
      ju = 0,
      Au = !1,
      Ru = 0,
      Du = null,
      Iu = !1,
      Fu = null,
      Lu = null,
      zu = !1,
      Uu = null,
      Hu = 90,
      Vu = null,
      Bu = 0,
      Wu = null,
      $u = 0;
    function qu() {
      return 0 != (48 & Su)
        ? 1073741821 - ((Uo() / 10) | 0)
        : 0 !== $u
        ? $u
        : ($u = 1073741821 - ((Uo() / 10) | 0));
    }
    function Ku(e, t, n) {
      if (0 == (2 & (t = t.mode))) return 1073741823;
      var r = Ho();
      if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
      if (0 != (16 & Su)) return Ou;
      if (null !== n) e = Qo(e, 0 | n.timeoutMs || 5e3, 250);
      else
        switch (r) {
          case 99:
            e = 1073741823;
            break;
          case 98:
            e = Qo(e, 150, 100);
            break;
          case 97:
          case 96:
            e = Qo(e, 5e3, 250);
            break;
          case 95:
            e = 2;
            break;
          default:
            throw Error(a(326));
        }
      return null !== ku && e === Ou && --e, e;
    }
    function Qu(e, t) {
      if (50 < Bu) throw ((Bu = 0), (Wu = null), Error(a(185)));
      if (null !== (e = Gu(e, t))) {
        var n = Ho();
        1073741823 === t
          ? 0 != (8 & Su) && 0 == (48 & Su)
            ? Ju(e)
            : (Xu(e), 0 === Su && qo())
          : Xu(e),
          0 == (4 & Su) ||
            (98 !== n && 99 !== n) ||
            (null === Vu
              ? (Vu = new Map([[e, t]]))
              : (void 0 === (n = Vu.get(e)) || n > t) && Vu.set(e, t));
      }
    }
    function Gu(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var n = e.alternate;
      null !== n && n.expirationTime < t && (n.expirationTime = t);
      var r = e.return,
        o = null;
      if (null === r && 3 === e.tag) o = e.stateNode;
      else
        for (; null !== r; ) {
          if (
            ((n = r.alternate),
            r.childExpirationTime < t && (r.childExpirationTime = t),
            null !== n &&
              n.childExpirationTime < t &&
              (n.childExpirationTime = t),
            null === r.return && 3 === r.tag)
          ) {
            o = r.stateNode;
            break;
          }
          r = r.return;
        }
      return (
        null !== o && (ku === o && (al(t), Pu === Eu && Al(o, Ou)), Rl(o, t)), o
      );
    }
    function Yu(e) {
      var t = e.lastExpiredTime;
      if (0 !== t) return t;
      if (!jl(e, (t = e.firstPendingTime))) return t;
      var n = e.lastPingedTime;
      return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e
        ? 0
        : e;
    }
    function Xu(e) {
      if (0 !== e.lastExpiredTime)
        (e.callbackExpirationTime = 1073741823),
          (e.callbackPriority = 99),
          (e.callbackNode = $o(Ju.bind(null, e)));
      else {
        var t = Yu(e),
          n = e.callbackNode;
        if (0 === t)
          null !== n &&
            ((e.callbackNode = null),
            (e.callbackExpirationTime = 0),
            (e.callbackPriority = 90));
        else {
          var r = qu();
          if (
            (1073741823 === t
              ? (r = 99)
              : 1 === t || 2 === t
              ? (r = 95)
              : (r =
                  0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r))
                    ? 99
                    : 250 >= r
                    ? 98
                    : 5250 >= r
                    ? 97
                    : 95),
            null !== n)
          ) {
            var o = e.callbackPriority;
            if (e.callbackExpirationTime === t && o >= r) return;
            n !== Ao && ko(n);
          }
          (e.callbackExpirationTime = t),
            (e.callbackPriority = r),
            (t =
              1073741823 === t
                ? $o(Ju.bind(null, e))
                : Wo(r, Zu.bind(null, e), {
                    timeout: 10 * (1073741821 - t) - Uo(),
                  })),
            (e.callbackNode = t);
        }
      }
    }
    function Zu(e, t) {
      if ((($u = 0), t)) return Dl(e, (t = qu())), Xu(e), null;
      var n = Yu(e);
      if (0 !== n) {
        if (((t = e.callbackNode), 0 != (48 & Su))) throw Error(a(327));
        if ((ml(), (e === ku && n === Ou) || nl(e, n), null !== Tu)) {
          var r = Su;
          Su |= 16;
          for (var o = ol(); ; )
            try {
              ll();
              break;
            } catch (t) {
              rl(e, t);
            }
          if ((ei(), (Su = r), (gu.current = o), 1 === Pu))
            throw ((t = _u), nl(e, n), Al(e, n), Xu(e), t);
          if (null === Tu)
            switch (
              ((o = e.finishedWork = e.current.alternate),
              (e.finishedExpirationTime = n),
              (r = Pu),
              (ku = null),
              r)
            ) {
              case wu:
              case 1:
                throw Error(a(345));
              case 2:
                Dl(e, 2 < n ? 2 : n);
                break;
              case xu:
                if (
                  (Al(e, n),
                  n === (r = e.lastSuspendedTime) &&
                    (e.nextKnownPendingLevel = fl(o)),
                  1073741823 === Cu && 10 < (o = Ru + 500 - Uo()))
                ) {
                  if (Au) {
                    var i = e.lastPingedTime;
                    if (0 === i || i >= n) {
                      (e.lastPingedTime = n), nl(e, n);
                      break;
                    }
                  }
                  if (0 !== (i = Yu(e)) && i !== n) break;
                  if (0 !== r && r !== n) {
                    e.lastPingedTime = r;
                    break;
                  }
                  e.timeoutHandle = bn(pl.bind(null, e), o);
                  break;
                }
                pl(e);
                break;
              case Eu:
                if (
                  (Al(e, n),
                  n === (r = e.lastSuspendedTime) &&
                    (e.nextKnownPendingLevel = fl(o)),
                  Au && (0 === (o = e.lastPingedTime) || o >= n))
                ) {
                  (e.lastPingedTime = n), nl(e, n);
                  break;
                }
                if (0 !== (o = Yu(e)) && o !== n) break;
                if (0 !== r && r !== n) {
                  e.lastPingedTime = r;
                  break;
                }
                if (
                  (1073741823 !== Mu
                    ? (r = 10 * (1073741821 - Mu) - Uo())
                    : 1073741823 === Cu
                    ? (r = 0)
                    : ((r = 10 * (1073741821 - Cu) - 5e3),
                      0 > (r = (o = Uo()) - r) && (r = 0),
                      (n = 10 * (1073741821 - n) - o) <
                        (r =
                          (120 > r
                            ? 120
                            : 480 > r
                            ? 480
                            : 1080 > r
                            ? 1080
                            : 1920 > r
                            ? 1920
                            : 3e3 > r
                            ? 3e3
                            : 4320 > r
                            ? 4320
                            : 1960 * yu(r / 1960)) - r) && (r = n)),
                  10 < r)
                ) {
                  e.timeoutHandle = bn(pl.bind(null, e), r);
                  break;
                }
                pl(e);
                break;
              case 5:
                if (1073741823 !== Cu && null !== Nu) {
                  i = Cu;
                  var u = Nu;
                  if (
                    (0 >= (r = 0 | u.busyMinDurationMs)
                      ? (r = 0)
                      : ((o = 0 | u.busyDelayMs),
                        (r =
                          (i =
                            Uo() -
                            (10 * (1073741821 - i) -
                              (0 | u.timeoutMs || 5e3))) <= o
                            ? 0
                            : o + r - i)),
                    10 < r)
                  ) {
                    Al(e, n), (e.timeoutHandle = bn(pl.bind(null, e), r));
                    break;
                  }
                }
                pl(e);
                break;
              default:
                throw Error(a(329));
            }
          if ((Xu(e), e.callbackNode === t)) return Zu.bind(null, e);
        }
      }
      return null;
    }
    function Ju(e) {
      var t = e.lastExpiredTime;
      if (((t = 0 !== t ? t : 1073741823), 0 != (48 & Su))) throw Error(a(327));
      if ((ml(), (e === ku && t === Ou) || nl(e, t), null !== Tu)) {
        var n = Su;
        Su |= 16;
        for (var r = ol(); ; )
          try {
            ul();
            break;
          } catch (t) {
            rl(e, t);
          }
        if ((ei(), (Su = n), (gu.current = r), 1 === Pu))
          throw ((n = _u), nl(e, t), Al(e, t), Xu(e), n);
        if (null !== Tu) throw Error(a(261));
        (e.finishedWork = e.current.alternate),
          (e.finishedExpirationTime = t),
          (ku = null),
          pl(e),
          Xu(e);
      }
      return null;
    }
    function el(e, t) {
      var n = Su;
      Su |= 1;
      try {
        return e(t);
      } finally {
        0 === (Su = n) && qo();
      }
    }
    function tl(e, t) {
      var n = Su;
      (Su &= -2), (Su |= 8);
      try {
        return e(t);
      } finally {
        0 === (Su = n) && qo();
      }
    }
    function nl(e, t) {
      (e.finishedWork = null), (e.finishedExpirationTime = 0);
      var n = e.timeoutHandle;
      if ((-1 !== n && ((e.timeoutHandle = -1), wn(n)), null !== Tu))
        for (n = Tu.return; null !== n; ) {
          var r = n;
          switch (r.tag) {
            case 1:
              null != (r = r.type.childContextTypes) && yo();
              break;
            case 3:
              Ai(), lo(po), lo(fo);
              break;
            case 5:
              Di(r);
              break;
            case 4:
              Ai();
              break;
            case 13:
            case 19:
              lo(Ii);
              break;
            case 10:
              ti(r);
          }
          n = n.return;
        }
      (ku = e),
        (Tu = Ol(e.current, null)),
        (Ou = t),
        (Pu = wu),
        (_u = null),
        (Mu = Cu = 1073741823),
        (Nu = null),
        (ju = 0),
        (Au = !1);
    }
    function rl(e, t) {
      for (;;) {
        try {
          if ((ei(), (zi.current = va), $i))
            for (var n = Vi.memoizedState; null !== n; ) {
              var r = n.queue;
              null !== r && (r.pending = null), (n = n.next);
            }
          if (
            ((Hi = 0),
            (Wi = Bi = Vi = null),
            ($i = !1),
            null === Tu || null === Tu.return)
          )
            return (Pu = 1), (_u = t), (Tu = null);
          e: {
            var o = e,
              i = Tu.return,
              a = Tu,
              u = t;
            if (
              ((t = Ou),
              (a.effectTag |= 2048),
              (a.firstEffect = a.lastEffect = null),
              null !== u && "object" == typeof u && "function" == typeof u.then)
            ) {
              var l = u;
              if (0 == (2 & a.mode)) {
                var c = a.alternate;
                c
                  ? ((a.updateQueue = c.updateQueue),
                    (a.memoizedState = c.memoizedState),
                    (a.expirationTime = c.expirationTime))
                  : ((a.updateQueue = null), (a.memoizedState = null));
              }
              var s = 0 != (1 & Ii.current),
                f = i;
              do {
                var p;
                if ((p = 13 === f.tag)) {
                  var d = f.memoizedState;
                  if (null !== d) p = null !== d.dehydrated;
                  else {
                    var h = f.memoizedProps;
                    p =
                      void 0 !== h.fallback &&
                      (!0 !== h.unstable_avoidThisFallback || !s);
                  }
                }
                if (p) {
                  var m = f.updateQueue;
                  if (null === m) {
                    var v = new Set();
                    v.add(l), (f.updateQueue = v);
                  } else m.add(l);
                  if (0 == (2 & f.mode)) {
                    if (
                      ((f.effectTag |= 64), (a.effectTag &= -2981), 1 === a.tag)
                    )
                      if (null === a.alternate) a.tag = 17;
                      else {
                        var y = li(1073741823, null);
                        (y.tag = 2), ci(a, y);
                      }
                    a.expirationTime = 1073741823;
                    break e;
                  }
                  (u = void 0), (a = t);
                  var g = o.pingCache;
                  if (
                    (null === g
                      ? ((g = o.pingCache = new du()),
                        (u = new Set()),
                        g.set(l, u))
                      : void 0 === (u = g.get(l)) &&
                        ((u = new Set()), g.set(l, u)),
                    !u.has(a))
                  ) {
                    u.add(a);
                    var b = bl.bind(null, o, l, a);
                    l.then(b, b);
                  }
                  (f.effectTag |= 4096), (f.expirationTime = t);
                  break e;
                }
                f = f.return;
              } while (null !== f);
              u = Error(
                (ve(a.type) || "A React component") +
                  " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                  ye(a)
              );
            }
            5 !== Pu && (Pu = 2), (u = Za(u, a)), (f = i);
            do {
              switch (f.tag) {
                case 3:
                  (l = u),
                    (f.effectTag |= 4096),
                    (f.expirationTime = t),
                    si(f, hu(f, l, t));
                  break e;
                case 1:
                  l = u;
                  var w = f.type,
                    x = f.stateNode;
                  if (
                    0 == (64 & f.effectTag) &&
                    ("function" == typeof w.getDerivedStateFromError ||
                      (null !== x &&
                        "function" == typeof x.componentDidCatch &&
                        (null === Lu || !Lu.has(x))))
                  ) {
                    (f.effectTag |= 4096),
                      (f.expirationTime = t),
                      si(f, mu(f, l, t));
                    break e;
                  }
              }
              f = f.return;
            } while (null !== f);
          }
          Tu = sl(Tu);
        } catch (e) {
          t = e;
          continue;
        }
        break;
      }
    }
    function ol() {
      var e = gu.current;
      return (gu.current = va), null === e ? va : e;
    }
    function il(e, t) {
      e < Cu && 2 < e && (Cu = e),
        null !== t && e < Mu && 2 < e && ((Mu = e), (Nu = t));
    }
    function al(e) {
      e > ju && (ju = e);
    }
    function ul() {
      for (; null !== Tu; ) Tu = cl(Tu);
    }
    function ll() {
      for (; null !== Tu && !Ro(); ) Tu = cl(Tu);
    }
    function cl(e) {
      var t = vu(e.alternate, e, Ou);
      return (
        (e.memoizedProps = e.pendingProps),
        null === t && (t = sl(e)),
        (bu.current = null),
        t
      );
    }
    function sl(e) {
      Tu = e;
      do {
        var t = Tu.alternate;
        if (((e = Tu.return), 0 == (2048 & Tu.effectTag))) {
          if (((t = Ya(t, Tu, Ou)), 1 === Ou || 1 !== Tu.childExpirationTime)) {
            for (var n = 0, r = Tu.child; null !== r; ) {
              var o = r.expirationTime,
                i = r.childExpirationTime;
              o > n && (n = o), i > n && (n = i), (r = r.sibling);
            }
            Tu.childExpirationTime = n;
          }
          if (null !== t) return t;
          null !== e &&
            0 == (2048 & e.effectTag) &&
            (null === e.firstEffect && (e.firstEffect = Tu.firstEffect),
            null !== Tu.lastEffect &&
              (null !== e.lastEffect &&
                (e.lastEffect.nextEffect = Tu.firstEffect),
              (e.lastEffect = Tu.lastEffect)),
            1 < Tu.effectTag &&
              (null !== e.lastEffect
                ? (e.lastEffect.nextEffect = Tu)
                : (e.firstEffect = Tu),
              (e.lastEffect = Tu)));
        } else {
          if (null !== (t = Xa(Tu))) return (t.effectTag &= 2047), t;
          null !== e &&
            ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
        }
        if (null !== (t = Tu.sibling)) return t;
        Tu = e;
      } while (null !== Tu);
      return Pu === wu && (Pu = 5), null;
    }
    function fl(e) {
      var t = e.expirationTime;
      return t > (e = e.childExpirationTime) ? t : e;
    }
    function pl(e) {
      var t = Ho();
      return Bo(99, dl.bind(null, e, t)), null;
    }
    function dl(e, t) {
      do {
        ml();
      } while (null !== Uu);
      if (0 != (48 & Su)) throw Error(a(327));
      var n = e.finishedWork,
        r = e.finishedExpirationTime;
      if (null === n) return null;
      if (
        ((e.finishedWork = null),
        (e.finishedExpirationTime = 0),
        n === e.current)
      )
        throw Error(a(177));
      (e.callbackNode = null),
        (e.callbackExpirationTime = 0),
        (e.callbackPriority = 90),
        (e.nextKnownPendingLevel = 0);
      var o = fl(n);
      if (
        ((e.firstPendingTime = o),
        r <= e.lastSuspendedTime
          ? (e.firstSuspendedTime =
              e.lastSuspendedTime =
              e.nextKnownPendingLevel =
                0)
          : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
        r <= e.lastPingedTime && (e.lastPingedTime = 0),
        r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
        e === ku && ((Tu = ku = null), (Ou = 0)),
        1 < n.effectTag
          ? null !== n.lastEffect
            ? ((n.lastEffect.nextEffect = n), (o = n.firstEffect))
            : (o = n)
          : (o = n.firstEffect),
        null !== o)
      ) {
        var i = Su;
        (Su |= 32), (bu.current = null), (mn = qt);
        var u = dn();
        if (hn(u)) {
          if ("selectionStart" in u)
            var l = { start: u.selectionStart, end: u.selectionEnd };
          else
            e: {
              var c =
                (l = ((l = u.ownerDocument) && l.defaultView) || window)
                  .getSelection && l.getSelection();
              if (c && 0 !== c.rangeCount) {
                l = c.anchorNode;
                var s = c.anchorOffset,
                  f = c.focusNode;
                c = c.focusOffset;
                try {
                  l.nodeType, f.nodeType;
                } catch (e) {
                  l = null;
                  break e;
                }
                var p = 0,
                  d = -1,
                  h = -1,
                  m = 0,
                  v = 0,
                  y = u,
                  g = null;
                t: for (;;) {
                  for (
                    var b;
                    y !== l || (0 !== s && 3 !== y.nodeType) || (d = p + s),
                      y !== f || (0 !== c && 3 !== y.nodeType) || (h = p + c),
                      3 === y.nodeType && (p += y.nodeValue.length),
                      null !== (b = y.firstChild);

                  )
                    (g = y), (y = b);
                  for (;;) {
                    if (y === u) break t;
                    if (
                      (g === l && ++m === s && (d = p),
                      g === f && ++v === c && (h = p),
                      null !== (b = y.nextSibling))
                    )
                      break;
                    g = (y = g).parentNode;
                  }
                  y = b;
                }
                l = -1 === d || -1 === h ? null : { start: d, end: h };
              } else l = null;
            }
          l = l || { start: 0, end: 0 };
        } else l = null;
        (vn = {
          activeElementDetached: null,
          focusedElem: u,
          selectionRange: l,
        }),
          (qt = !1),
          (Du = o);
        do {
          try {
            hl();
          } catch (e) {
            if (null === Du) throw Error(a(330));
            gl(Du, e), (Du = Du.nextEffect);
          }
        } while (null !== Du);
        Du = o;
        do {
          try {
            for (u = e, l = t; null !== Du; ) {
              var w = Du.effectTag;
              if ((16 & w && Ue(Du.stateNode, ""), 128 & w)) {
                var x = Du.alternate;
                if (null !== x) {
                  var E = x.ref;
                  null !== E &&
                    ("function" == typeof E ? E(null) : (E.current = null));
                }
              }
              switch (1038 & w) {
                case 2:
                  cu(Du), (Du.effectTag &= -3);
                  break;
                case 6:
                  cu(Du), (Du.effectTag &= -3), fu(Du.alternate, Du);
                  break;
                case 1024:
                  Du.effectTag &= -1025;
                  break;
                case 1028:
                  (Du.effectTag &= -1025), fu(Du.alternate, Du);
                  break;
                case 4:
                  fu(Du.alternate, Du);
                  break;
                case 8:
                  su(u, (s = Du), l), uu(s);
              }
              Du = Du.nextEffect;
            }
          } catch (e) {
            if (null === Du) throw Error(a(330));
            gl(Du, e), (Du = Du.nextEffect);
          }
        } while (null !== Du);
        if (
          ((E = vn),
          (x = dn()),
          (w = E.focusedElem),
          (l = E.selectionRange),
          x !== w &&
            w &&
            w.ownerDocument &&
            (function e(t, n) {
              return (
                !(!t || !n) &&
                (t === n ||
                  ((!t || 3 !== t.nodeType) &&
                    (n && 3 === n.nodeType
                      ? e(t, n.parentNode)
                      : "contains" in t
                      ? t.contains(n)
                      : !!t.compareDocumentPosition &&
                        !!(16 & t.compareDocumentPosition(n)))))
              );
            })(w.ownerDocument.documentElement, w))
        ) {
          null !== l &&
            hn(w) &&
            ((x = l.start),
            void 0 === (E = l.end) && (E = x),
            "selectionStart" in w
              ? ((w.selectionStart = x),
                (w.selectionEnd = Math.min(E, w.value.length)))
              : (E =
                  ((x = w.ownerDocument || document) && x.defaultView) ||
                  window).getSelection &&
                ((E = E.getSelection()),
                (s = w.textContent.length),
                (u = Math.min(l.start, s)),
                (l = void 0 === l.end ? u : Math.min(l.end, s)),
                !E.extend && u > l && ((s = l), (l = u), (u = s)),
                (s = pn(w, u)),
                (f = pn(w, l)),
                s &&
                  f &&
                  (1 !== E.rangeCount ||
                    E.anchorNode !== s.node ||
                    E.anchorOffset !== s.offset ||
                    E.focusNode !== f.node ||
                    E.focusOffset !== f.offset) &&
                  ((x = x.createRange()).setStart(s.node, s.offset),
                  E.removeAllRanges(),
                  u > l
                    ? (E.addRange(x), E.extend(f.node, f.offset))
                    : (x.setEnd(f.node, f.offset), E.addRange(x))))),
            (x = []);
          for (E = w; (E = E.parentNode); )
            1 === E.nodeType &&
              x.push({ element: E, left: E.scrollLeft, top: E.scrollTop });
          for (
            "function" == typeof w.focus && w.focus(), w = 0;
            w < x.length;
            w++
          )
            ((E = x[w]).element.scrollLeft = E.left),
              (E.element.scrollTop = E.top);
        }
        (qt = !!mn), (vn = mn = null), (e.current = n), (Du = o);
        do {
          try {
            for (w = e; null !== Du; ) {
              var S = Du.effectTag;
              if ((36 & S && iu(w, Du.alternate, Du), 128 & S)) {
                x = void 0;
                var k = Du.ref;
                if (null !== k) {
                  var T = Du.stateNode;
                  switch (Du.tag) {
                    case 5:
                      x = T;
                      break;
                    default:
                      x = T;
                  }
                  "function" == typeof k ? k(x) : (k.current = x);
                }
              }
              Du = Du.nextEffect;
            }
          } catch (e) {
            if (null === Du) throw Error(a(330));
            gl(Du, e), (Du = Du.nextEffect);
          }
        } while (null !== Du);
        (Du = null), Do(), (Su = i);
      } else e.current = n;
      if (zu) (zu = !1), (Uu = e), (Hu = t);
      else
        for (Du = o; null !== Du; )
          (t = Du.nextEffect), (Du.nextEffect = null), (Du = t);
      if (
        (0 === (t = e.firstPendingTime) && (Lu = null),
        1073741823 === t ? (e === Wu ? Bu++ : ((Bu = 0), (Wu = e))) : (Bu = 0),
        "function" == typeof xl && xl(n.stateNode, r),
        Xu(e),
        Iu)
      )
        throw ((Iu = !1), (e = Fu), (Fu = null), e);
      return 0 != (8 & Su) || qo(), null;
    }
    function hl() {
      for (; null !== Du; ) {
        var e = Du.effectTag;
        0 != (256 & e) && nu(Du.alternate, Du),
          0 == (512 & e) ||
            zu ||
            ((zu = !0),
            Wo(97, function () {
              return ml(), null;
            })),
          (Du = Du.nextEffect);
      }
    }
    function ml() {
      if (90 !== Hu) {
        var e = 97 < Hu ? 97 : Hu;
        return (Hu = 90), Bo(e, vl);
      }
    }
    function vl() {
      if (null === Uu) return !1;
      var e = Uu;
      if (((Uu = null), 0 != (48 & Su))) throw Error(a(331));
      var t = Su;
      for (Su |= 32, e = e.current.firstEffect; null !== e; ) {
        try {
          var n = e;
          if (0 != (512 & n.effectTag))
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
              case 22:
                ru(5, n), ou(5, n);
            }
        } catch (t) {
          if (null === e) throw Error(a(330));
          gl(e, t);
        }
        (n = e.nextEffect), (e.nextEffect = null), (e = n);
      }
      return (Su = t), qo(), !0;
    }
    function yl(e, t, n) {
      ci(e, (t = hu(e, (t = Za(n, t)), 1073741823))),
        null !== (e = Gu(e, 1073741823)) && Xu(e);
    }
    function gl(e, t) {
      if (3 === e.tag) yl(e, e, t);
      else
        for (var n = e.return; null !== n; ) {
          if (3 === n.tag) {
            yl(n, e, t);
            break;
          }
          if (1 === n.tag) {
            var r = n.stateNode;
            if (
              "function" == typeof n.type.getDerivedStateFromError ||
              ("function" == typeof r.componentDidCatch &&
                (null === Lu || !Lu.has(r)))
            ) {
              ci(n, (e = mu(n, (e = Za(t, e)), 1073741823))),
                null !== (n = Gu(n, 1073741823)) && Xu(n);
              break;
            }
          }
          n = n.return;
        }
    }
    function bl(e, t, n) {
      var r = e.pingCache;
      null !== r && r.delete(t),
        ku === e && Ou === n
          ? Pu === Eu || (Pu === xu && 1073741823 === Cu && Uo() - Ru < 500)
            ? nl(e, Ou)
            : (Au = !0)
          : jl(e, n) &&
            ((0 !== (t = e.lastPingedTime) && t < n) ||
              ((e.lastPingedTime = n), Xu(e)));
    }
    function wl(e, t) {
      var n = e.stateNode;
      null !== n && n.delete(t),
        0 === (t = 0) && (t = Ku((t = qu()), e, null)),
        null !== (e = Gu(e, t)) && Xu(e);
    }
    vu = function (e, t, n) {
      var r = t.expirationTime;
      if (null !== e) {
        var o = t.pendingProps;
        if (e.memoizedProps !== o || po.current) Ma = !0;
        else {
          if (r < n) {
            switch (((Ma = !1), t.tag)) {
              case 3:
                za(t), _a();
                break;
              case 5:
                if ((Ri(t), 4 & t.mode && 1 !== n && o.hidden))
                  return (t.expirationTime = t.childExpirationTime = 1), null;
                break;
              case 1:
                vo(t.type) && wo(t);
                break;
              case 4:
                ji(t, t.stateNode.containerInfo);
                break;
              case 10:
                (r = t.memoizedProps.value),
                  (o = t.type._context),
                  co(Yo, o._currentValue),
                  (o._currentValue = r);
                break;
              case 13:
                if (null !== t.memoizedState)
                  return 0 !== (r = t.child.childExpirationTime) && r >= n
                    ? Wa(e, t, n)
                    : (co(Ii, 1 & Ii.current),
                      null !== (t = Qa(e, t, n)) ? t.sibling : null);
                co(Ii, 1 & Ii.current);
                break;
              case 19:
                if (
                  ((r = t.childExpirationTime >= n), 0 != (64 & e.effectTag))
                ) {
                  if (r) return Ka(e, t, n);
                  t.effectTag |= 64;
                }
                if (
                  (null !== (o = t.memoizedState) &&
                    ((o.rendering = null), (o.tail = null)),
                  co(Ii, Ii.current),
                  !r)
                )
                  return null;
            }
            return Qa(e, t, n);
          }
          Ma = !1;
        }
      } else Ma = !1;
      switch (((t.expirationTime = 0), t.tag)) {
        case 2:
          if (
            ((r = t.type),
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            (e = t.pendingProps),
            (o = mo(t, fo.current)),
            ri(t, n),
            (o = Qi(null, t, r, e, o, n)),
            (t.effectTag |= 1),
            "object" == typeof o &&
              null !== o &&
              "function" == typeof o.render &&
              void 0 === o.$$typeof)
          ) {
            if (
              ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              vo(r))
            ) {
              var i = !0;
              wo(t);
            } else i = !1;
            (t.memoizedState =
              null !== o.state && void 0 !== o.state ? o.state : null),
              ai(t);
            var u = r.getDerivedStateFromProps;
            "function" == typeof u && mi(t, r, u, e),
              (o.updater = vi),
              (t.stateNode = o),
              (o._reactInternalFiber = t),
              wi(t, r, e, n),
              (t = La(null, t, r, !0, i, n));
          } else (t.tag = 0), Na(null, t, o, n), (t = t.child);
          return t;
        case 16:
          e: {
            if (
              ((o = t.elementType),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (e = t.pendingProps),
              (function (e) {
                if (-1 === e._status) {
                  e._status = 0;
                  var t = e._ctor;
                  (t = t()),
                    (e._result = t),
                    t.then(
                      function (t) {
                        0 === e._status &&
                          ((t = t.default), (e._status = 1), (e._result = t));
                      },
                      function (t) {
                        0 === e._status && ((e._status = 2), (e._result = t));
                      }
                    );
                }
              })(o),
              1 !== o._status)
            )
              throw o._result;
            switch (
              ((o = o._result),
              (t.type = o),
              (i = t.tag =
                (function (e) {
                  if ("function" == typeof e) return Tl(e) ? 1 : 0;
                  if (null != e) {
                    if ((e = e.$$typeof) === le) return 11;
                    if (e === fe) return 14;
                  }
                  return 2;
                })(o)),
              (e = Go(o, e)),
              i)
            ) {
              case 0:
                t = Ia(null, t, o, e, n);
                break e;
              case 1:
                t = Fa(null, t, o, e, n);
                break e;
              case 11:
                t = ja(null, t, o, e, n);
                break e;
              case 14:
                t = Aa(null, t, o, Go(o.type, e), r, n);
                break e;
            }
            throw Error(a(306, o, ""));
          }
          return t;
        case 0:
          return (
            (r = t.type),
            (o = t.pendingProps),
            Ia(e, t, r, (o = t.elementType === r ? o : Go(r, o)), n)
          );
        case 1:
          return (
            (r = t.type),
            (o = t.pendingProps),
            Fa(e, t, r, (o = t.elementType === r ? o : Go(r, o)), n)
          );
        case 3:
          if ((za(t), (r = t.updateQueue), null === e || null === r))
            throw Error(a(282));
          if (
            ((r = t.pendingProps),
            (o = null !== (o = t.memoizedState) ? o.element : null),
            ui(e, t),
            fi(t, r, null, n),
            (r = t.memoizedState.element) === o)
          )
            _a(), (t = Qa(e, t, n));
          else {
            if (
              ((o = t.stateNode.hydrate) &&
                ((xa = xn(t.stateNode.containerInfo.firstChild)),
                (wa = t),
                (o = Ea = !0)),
              o)
            )
              for (n = Oi(t, null, r, n), t.child = n; n; )
                (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
            else Na(e, t, r, n), _a();
            t = t.child;
          }
          return t;
        case 5:
          return (
            Ri(t),
            null === e && Ta(t),
            (r = t.type),
            (o = t.pendingProps),
            (i = null !== e ? e.memoizedProps : null),
            (u = o.children),
            gn(r, o)
              ? (u = null)
              : null !== i && gn(r, i) && (t.effectTag |= 16),
            Da(e, t),
            4 & t.mode && 1 !== n && o.hidden
              ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
              : (Na(e, t, u, n), (t = t.child)),
            t
          );
        case 6:
          return null === e && Ta(t), null;
        case 13:
          return Wa(e, t, n);
        case 4:
          return (
            ji(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            null === e ? (t.child = Ti(t, null, r, n)) : Na(e, t, r, n),
            t.child
          );
        case 11:
          return (
            (r = t.type),
            (o = t.pendingProps),
            ja(e, t, r, (o = t.elementType === r ? o : Go(r, o)), n)
          );
        case 7:
          return Na(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
          return Na(e, t, t.pendingProps.children, n), t.child;
        case 10:
          e: {
            (r = t.type._context),
              (o = t.pendingProps),
              (u = t.memoizedProps),
              (i = o.value);
            var l = t.type._context;
            if ((co(Yo, l._currentValue), (l._currentValue = i), null !== u))
              if (
                ((l = u.value),
                0 ===
                  (i = Fr(l, i)
                    ? 0
                    : 0 |
                      ("function" == typeof r._calculateChangedBits
                        ? r._calculateChangedBits(l, i)
                        : 1073741823)))
              ) {
                if (u.children === o.children && !po.current) {
                  t = Qa(e, t, n);
                  break e;
                }
              } else
                for (null !== (l = t.child) && (l.return = t); null !== l; ) {
                  var c = l.dependencies;
                  if (null !== c) {
                    u = l.child;
                    for (var s = c.firstContext; null !== s; ) {
                      if (s.context === r && 0 != (s.observedBits & i)) {
                        1 === l.tag && (((s = li(n, null)).tag = 2), ci(l, s)),
                          l.expirationTime < n && (l.expirationTime = n),
                          null !== (s = l.alternate) &&
                            s.expirationTime < n &&
                            (s.expirationTime = n),
                          ni(l.return, n),
                          c.expirationTime < n && (c.expirationTime = n);
                        break;
                      }
                      s = s.next;
                    }
                  } else u = 10 === l.tag && l.type === t.type ? null : l.child;
                  if (null !== u) u.return = l;
                  else
                    for (u = l; null !== u; ) {
                      if (u === t) {
                        u = null;
                        break;
                      }
                      if (null !== (l = u.sibling)) {
                        (l.return = u.return), (u = l);
                        break;
                      }
                      u = u.return;
                    }
                  l = u;
                }
            Na(e, t, o.children, n), (t = t.child);
          }
          return t;
        case 9:
          return (
            (o = t.type),
            (r = (i = t.pendingProps).children),
            ri(t, n),
            (r = r((o = oi(o, i.unstable_observedBits)))),
            (t.effectTag |= 1),
            Na(e, t, r, n),
            t.child
          );
        case 14:
          return (
            (i = Go((o = t.type), t.pendingProps)),
            Aa(e, t, o, (i = Go(o.type, i)), r, n)
          );
        case 15:
          return Ra(e, t, t.type, t.pendingProps, r, n);
        case 17:
          return (
            (r = t.type),
            (o = t.pendingProps),
            (o = t.elementType === r ? o : Go(r, o)),
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            (t.tag = 1),
            vo(r) ? ((e = !0), wo(t)) : (e = !1),
            ri(t, n),
            gi(t, r, o),
            wi(t, r, o, n),
            La(null, t, r, !0, e, n)
          );
        case 19:
          return Ka(e, t, n);
      }
      throw Error(a(156, t.tag));
    };
    var xl = null,
      El = null;
    function Sl(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.effectTag = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.childExpirationTime = this.expirationTime = 0),
        (this.alternate = null);
    }
    function kl(e, t, n, r) {
      return new Sl(e, t, n, r);
    }
    function Tl(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function Ol(e, t) {
      var n = e.alternate;
      return (
        null === n
          ? (((n = kl(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.effectTag = 0),
            (n.nextEffect = null),
            (n.firstEffect = null),
            (n.lastEffect = null)),
        (n.childExpirationTime = e.childExpirationTime),
        (n.expirationTime = e.expirationTime),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          null === t
            ? null
            : {
                expirationTime: t.expirationTime,
                firstContext: t.firstContext,
                responders: t.responders,
              }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function Pl(e, t, n, r, o, i) {
      var u = 2;
      if (((r = e), "function" == typeof e)) Tl(e) && (u = 1);
      else if ("string" == typeof e) u = 5;
      else
        e: switch (e) {
          case ne:
            return _l(n.children, o, i, t);
          case ue:
            (u = 8), (o |= 7);
            break;
          case re:
            (u = 8), (o |= 1);
            break;
          case oe:
            return (
              ((e = kl(12, n, t, 8 | o)).elementType = oe),
              (e.type = oe),
              (e.expirationTime = i),
              e
            );
          case ce:
            return (
              ((e = kl(13, n, t, o)).type = ce),
              (e.elementType = ce),
              (e.expirationTime = i),
              e
            );
          case se:
            return (
              ((e = kl(19, n, t, o)).elementType = se),
              (e.expirationTime = i),
              e
            );
          default:
            if ("object" == typeof e && null !== e)
              switch (e.$$typeof) {
                case ie:
                  u = 10;
                  break e;
                case ae:
                  u = 9;
                  break e;
                case le:
                  u = 11;
                  break e;
                case fe:
                  u = 14;
                  break e;
                case pe:
                  (u = 16), (r = null);
                  break e;
                case de:
                  u = 22;
                  break e;
              }
            throw Error(a(130, null == e ? e : typeof e, ""));
        }
      return (
        ((t = kl(u, n, t, o)).elementType = e),
        (t.type = r),
        (t.expirationTime = i),
        t
      );
    }
    function _l(e, t, n, r) {
      return ((e = kl(7, e, r, t)).expirationTime = n), e;
    }
    function Cl(e, t, n) {
      return ((e = kl(6, e, null, t)).expirationTime = n), e;
    }
    function Ml(e, t, n) {
      return (
        ((t = kl(
          4,
          null !== e.children ? e.children : [],
          e.key,
          t
        )).expirationTime = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function Nl(e, t, n) {
      (this.tag = t),
        (this.current = null),
        (this.containerInfo = e),
        (this.pingCache = this.pendingChildren = null),
        (this.finishedExpirationTime = 0),
        (this.finishedWork = null),
        (this.timeoutHandle = -1),
        (this.pendingContext = this.context = null),
        (this.hydrate = n),
        (this.callbackNode = null),
        (this.callbackPriority = 90),
        (this.lastExpiredTime =
          this.lastPingedTime =
          this.nextKnownPendingLevel =
          this.lastSuspendedTime =
          this.firstSuspendedTime =
          this.firstPendingTime =
            0);
    }
    function jl(e, t) {
      var n = e.firstSuspendedTime;
      return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
    }
    function Al(e, t) {
      var n = e.firstSuspendedTime,
        r = e.lastSuspendedTime;
      n < t && (e.firstSuspendedTime = t),
        (r > t || 0 === n) && (e.lastSuspendedTime = t),
        t <= e.lastPingedTime && (e.lastPingedTime = 0),
        t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
    }
    function Rl(e, t) {
      t > e.firstPendingTime && (e.firstPendingTime = t);
      var n = e.firstSuspendedTime;
      0 !== n &&
        (t >= n
          ? (e.firstSuspendedTime =
              e.lastSuspendedTime =
              e.nextKnownPendingLevel =
                0)
          : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
        t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
    }
    function Dl(e, t) {
      var n = e.lastExpiredTime;
      (0 === n || n > t) && (e.lastExpiredTime = t);
    }
    function Il(e, t, n, r) {
      var o = t.current,
        i = qu(),
        u = di.suspense;
      i = Ku(i, o, u);
      e: if (n) {
        t: {
          if (Je((n = n._reactInternalFiber)) !== n || 1 !== n.tag)
            throw Error(a(170));
          var l = n;
          do {
            switch (l.tag) {
              case 3:
                l = l.stateNode.context;
                break t;
              case 1:
                if (vo(l.type)) {
                  l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            l = l.return;
          } while (null !== l);
          throw Error(a(171));
        }
        if (1 === n.tag) {
          var c = n.type;
          if (vo(c)) {
            n = bo(n, c, l);
            break e;
          }
        }
        n = l;
      } else n = so;
      return (
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = li(i, u)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        ci(o, t),
        Qu(o, i),
        i
      );
    }
    function Fl(e) {
      if (!(e = e.current).child) return null;
      switch (e.child.tag) {
        case 5:
        default:
          return e.child.stateNode;
      }
    }
    function Ll(e, t) {
      null !== (e = e.memoizedState) &&
        null !== e.dehydrated &&
        e.retryTime < t &&
        (e.retryTime = t);
    }
    function zl(e, t) {
      Ll(e, t), (e = e.alternate) && Ll(e, t);
    }
    function Ul(e, t, n) {
      var r = new Nl(e, t, (n = null != n && !0 === n.hydrate)),
        o = kl(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
      (r.current = o),
        (o.stateNode = r),
        ai(o),
        (e[On] = r.current),
        n &&
          0 !== t &&
          (function (e, t) {
            var n = Ze(t);
            Ot.forEach(function (e) {
              ht(e, t, n);
            }),
              Pt.forEach(function (e) {
                ht(e, t, n);
              });
          })(0, 9 === e.nodeType ? e : e.ownerDocument),
        (this._internalRoot = r);
    }
    function Hl(e) {
      return !(
        !e ||
        (1 !== e.nodeType &&
          9 !== e.nodeType &&
          11 !== e.nodeType &&
          (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      );
    }
    function Vl(e, t, n, r, o) {
      var i = n._reactRootContainer;
      if (i) {
        var a = i._internalRoot;
        if ("function" == typeof o) {
          var u = o;
          o = function () {
            var e = Fl(a);
            u.call(e);
          };
        }
        Il(t, a, e, o);
      } else {
        if (
          ((i = n._reactRootContainer =
            (function (e, t) {
              if (
                (t ||
                  (t = !(
                    !(t = e
                      ? 9 === e.nodeType
                        ? e.documentElement
                        : e.firstChild
                      : null) ||
                    1 !== t.nodeType ||
                    !t.hasAttribute("data-reactroot")
                  )),
                !t)
              )
                for (var n; (n = e.lastChild); ) e.removeChild(n);
              return new Ul(e, 0, t ? { hydrate: !0 } : void 0);
            })(n, r)),
          (a = i._internalRoot),
          "function" == typeof o)
        ) {
          var l = o;
          o = function () {
            var e = Fl(a);
            l.call(e);
          };
        }
        tl(function () {
          Il(t, a, e, o);
        });
      }
      return Fl(a);
    }
    function Bl(e, t, n) {
      var r =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: te,
        key: null == r ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    function Wl(e, t) {
      var n =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!Hl(t)) throw Error(a(200));
      return Bl(e, t, null, n);
    }
    (Ul.prototype.render = function (e) {
      Il(e, this._internalRoot, null, null);
    }),
      (Ul.prototype.unmount = function () {
        var e = this._internalRoot,
          t = e.containerInfo;
        Il(null, e, null, function () {
          t[On] = null;
        });
      }),
      (mt = function (e) {
        if (13 === e.tag) {
          var t = Qo(qu(), 150, 100);
          Qu(e, t), zl(e, t);
        }
      }),
      (vt = function (e) {
        13 === e.tag && (Qu(e, 3), zl(e, 3));
      }),
      (yt = function (e) {
        if (13 === e.tag) {
          var t = qu();
          Qu(e, (t = Ku(t, e, null))), zl(e, t);
        }
      }),
      (_ = function (e, t, n) {
        switch (t) {
          case "input":
            if ((Te(e, n), (t = n.name), "radio" === n.type && null != t)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var o = Mn(r);
                  if (!o) throw Error(a(90));
                  xe(r), Te(r, o);
                }
              }
            }
            break;
          case "textarea":
            je(e, n);
            break;
          case "select":
            null != (t = n.value) && Ce(e, !!n.multiple, t, !1);
        }
      }),
      (R = el),
      (D = function (e, t, n, r, o) {
        var i = Su;
        Su |= 4;
        try {
          return Bo(98, e.bind(null, t, n, r, o));
        } finally {
          0 === (Su = i) && qo();
        }
      }),
      (I = function () {
        0 == (49 & Su) &&
          ((function () {
            if (null !== Vu) {
              var e = Vu;
              (Vu = null),
                e.forEach(function (e, t) {
                  Dl(t, e), Xu(t);
                }),
                qo();
            }
          })(),
          ml());
      }),
      (F = function (e, t) {
        var n = Su;
        Su |= 2;
        try {
          return e(t);
        } finally {
          0 === (Su = n) && qo();
        }
      });
    var $l,
      ql,
      Kl = {
        Events: [
          _n,
          Cn,
          Mn,
          O,
          S,
          Fn,
          function (e) {
            ot(e, In);
          },
          j,
          A,
          Xt,
          ut,
          ml,
          { current: !1 },
        ],
      };
    (ql = ($l = {
      findFiberByHostInstance: Pn,
      bundleType: 0,
      version: "16.13.1",
      rendererPackageName: "react-dom",
    }).findFiberByHostInstance),
      (function (e) {
        if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled || !t.supportsFiber) return !0;
        try {
          var n = t.inject(e);
          (xl = function (e) {
            try {
              t.onCommitFiberRoot(
                n,
                e,
                void 0,
                64 == (64 & e.current.effectTag)
              );
            } catch (e) {}
          }),
            (El = function (e) {
              try {
                t.onCommitFiberUnmount(n, e);
              } catch (e) {}
            });
        } catch (e) {}
      })(
        o({}, $l, {
          overrideHookState: null,
          overrideProps: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: Y.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = nt(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance: function (e) {
            return ql ? ql(e) : null;
          },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
        })
      ),
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kl),
      (t.createPortal = Wl),
      (t.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternalFiber;
        if (void 0 === t) {
          if ("function" == typeof e.render) throw Error(a(188));
          throw Error(a(268, Object.keys(e)));
        }
        return (e = null === (e = nt(t)) ? null : e.stateNode);
      }),
      (t.flushSync = function (e, t) {
        if (0 != (48 & Su)) throw Error(a(187));
        var n = Su;
        Su |= 1;
        try {
          return Bo(99, e.bind(null, t));
        } finally {
          (Su = n), qo();
        }
      }),
      (t.hydrate = function (e, t, n) {
        if (!Hl(t)) throw Error(a(200));
        return Vl(null, e, t, !0, n);
      }),
      (t.render = function (e, t, n) {
        if (!Hl(t)) throw Error(a(200));
        return Vl(null, e, t, !1, n);
      }),
      (t.unmountComponentAtNode = function (e) {
        if (!Hl(e)) throw Error(a(40));
        return (
          !!e._reactRootContainer &&
          (tl(function () {
            Vl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[On] = null);
            });
          }),
          !0)
        );
      }),
      (t.unstable_batchedUpdates = el),
      (t.unstable_createPortal = function (e, t) {
        return Wl(
          e,
          t,
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
        );
      }),
      (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!Hl(n)) throw Error(a(200));
        if (null == e || void 0 === e._reactInternalFiber) throw Error(a(38));
        return Vl(e, t, n, !1, r);
      }),
      (t.version = "16.13.1");
  },
  function (e, t, n) {
    "use strict";
    e.exports = n(78);
  },
  function (e, t, n) {
    "use strict";
    /** @license React v0.19.1
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r, o, i, a, u;
    if ("undefined" == typeof window || "function" != typeof MessageChannel) {
      var l = null,
        c = null,
        s = function () {
          if (null !== l)
            try {
              var e = t.unstable_now();
              l(!0, e), (l = null);
            } catch (e) {
              throw (setTimeout(s, 0), e);
            }
        },
        f = Date.now();
      (t.unstable_now = function () {
        return Date.now() - f;
      }),
        (r = function (e) {
          null !== l ? setTimeout(r, 0, e) : ((l = e), setTimeout(s, 0));
        }),
        (o = function (e, t) {
          c = setTimeout(e, t);
        }),
        (i = function () {
          clearTimeout(c);
        }),
        (a = function () {
          return !1;
        }),
        (u = t.unstable_forceFrameRate = function () {});
    } else {
      var p = window.performance,
        d = window.Date,
        h = window.setTimeout,
        m = window.clearTimeout;
      if ("undefined" != typeof console) {
        var v = window.cancelAnimationFrame;
        "function" != typeof window.requestAnimationFrame &&
          console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
          ),
          "function" != typeof v &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
            );
      }
      if ("object" == typeof p && "function" == typeof p.now)
        t.unstable_now = function () {
          return p.now();
        };
      else {
        var y = d.now();
        t.unstable_now = function () {
          return d.now() - y;
        };
      }
      var g = !1,
        b = null,
        w = -1,
        x = 5,
        E = 0;
      (a = function () {
        return t.unstable_now() >= E;
      }),
        (u = function () {}),
        (t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
              )
            : (x = 0 < e ? Math.floor(1e3 / e) : 5);
        });
      var S = new MessageChannel(),
        k = S.port2;
      (S.port1.onmessage = function () {
        if (null !== b) {
          var e = t.unstable_now();
          E = e + x;
          try {
            b(!0, e) ? k.postMessage(null) : ((g = !1), (b = null));
          } catch (e) {
            throw (k.postMessage(null), e);
          }
        } else g = !1;
      }),
        (r = function (e) {
          (b = e), g || ((g = !0), k.postMessage(null));
        }),
        (o = function (e, n) {
          w = h(function () {
            e(t.unstable_now());
          }, n);
        }),
        (i = function () {
          m(w), (w = -1);
        });
    }
    function T(e, t) {
      var n = e.length;
      e.push(t);
      e: for (;;) {
        var r = (n - 1) >>> 1,
          o = e[r];
        if (!(void 0 !== o && 0 < _(o, t))) break e;
        (e[r] = t), (e[n] = o), (n = r);
      }
    }
    function O(e) {
      return void 0 === (e = e[0]) ? null : e;
    }
    function P(e) {
      var t = e[0];
      if (void 0 !== t) {
        var n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0, o = e.length; r < o; ) {
            var i = 2 * (r + 1) - 1,
              a = e[i],
              u = i + 1,
              l = e[u];
            if (void 0 !== a && 0 > _(a, n))
              void 0 !== l && 0 > _(l, a)
                ? ((e[r] = l), (e[u] = n), (r = u))
                : ((e[r] = a), (e[i] = n), (r = i));
            else {
              if (!(void 0 !== l && 0 > _(l, n))) break e;
              (e[r] = l), (e[u] = n), (r = u);
            }
          }
        }
        return t;
      }
      return null;
    }
    function _(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    var C = [],
      M = [],
      N = 1,
      j = null,
      A = 3,
      R = !1,
      D = !1,
      I = !1;
    function F(e) {
      for (var t = O(M); null !== t; ) {
        if (null === t.callback) P(M);
        else {
          if (!(t.startTime <= e)) break;
          P(M), (t.sortIndex = t.expirationTime), T(C, t);
        }
        t = O(M);
      }
    }
    function L(e) {
      if (((I = !1), F(e), !D))
        if (null !== O(C)) (D = !0), r(z);
        else {
          var t = O(M);
          null !== t && o(L, t.startTime - e);
        }
    }
    function z(e, n) {
      (D = !1), I && ((I = !1), i()), (R = !0);
      var r = A;
      try {
        for (
          F(n), j = O(C);
          null !== j && (!(j.expirationTime > n) || (e && !a()));

        ) {
          var u = j.callback;
          if (null !== u) {
            (j.callback = null), (A = j.priorityLevel);
            var l = u(j.expirationTime <= n);
            (n = t.unstable_now()),
              "function" == typeof l ? (j.callback = l) : j === O(C) && P(C),
              F(n);
          } else P(C);
          j = O(C);
        }
        if (null !== j) var c = !0;
        else {
          var s = O(M);
          null !== s && o(L, s.startTime - n), (c = !1);
        }
        return c;
      } finally {
        (j = null), (A = r), (R = !1);
      }
    }
    function U(e) {
      switch (e) {
        case 1:
          return -1;
        case 2:
          return 250;
        case 5:
          return 1073741823;
        case 4:
          return 1e4;
        default:
          return 5e3;
      }
    }
    var H = u;
    (t.unstable_IdlePriority = 5),
      (t.unstable_ImmediatePriority = 1),
      (t.unstable_LowPriority = 4),
      (t.unstable_NormalPriority = 3),
      (t.unstable_Profiling = null),
      (t.unstable_UserBlockingPriority = 2),
      (t.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (t.unstable_continueExecution = function () {
        D || R || ((D = !0), r(z));
      }),
      (t.unstable_getCurrentPriorityLevel = function () {
        return A;
      }),
      (t.unstable_getFirstCallbackNode = function () {
        return O(C);
      }),
      (t.unstable_next = function (e) {
        switch (A) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = A;
        }
        var n = A;
        A = t;
        try {
          return e();
        } finally {
          A = n;
        }
      }),
      (t.unstable_pauseExecution = function () {}),
      (t.unstable_requestPaint = H),
      (t.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = A;
        A = e;
        try {
          return t();
        } finally {
          A = n;
        }
      }),
      (t.unstable_scheduleCallback = function (e, n, a) {
        var u = t.unstable_now();
        if ("object" == typeof a && null !== a) {
          var l = a.delay;
          (l = "number" == typeof l && 0 < l ? u + l : u),
            (a = "number" == typeof a.timeout ? a.timeout : U(e));
        } else (a = U(e)), (l = u);
        return (
          (e = {
            id: N++,
            callback: n,
            priorityLevel: e,
            startTime: l,
            expirationTime: (a = l + a),
            sortIndex: -1,
          }),
          l > u
            ? ((e.sortIndex = l),
              T(M, e),
              null === O(C) && e === O(M) && (I ? i() : (I = !0), o(L, l - u)))
            : ((e.sortIndex = a), T(C, e), D || R || ((D = !0), r(z))),
          e
        );
      }),
      (t.unstable_shouldYield = function () {
        var e = t.unstable_now();
        F(e);
        var n = O(C);
        return (
          (n !== j &&
            null !== j &&
            null !== n &&
            null !== n.callback &&
            n.startTime <= e &&
            n.expirationTime < j.expirationTime) ||
          a()
        );
      }),
      (t.unstable_wrapCallback = function (e) {
        var t = A;
        return function () {
          var n = A;
          A = t;
          try {
            return e.apply(this, arguments);
          } finally {
            A = n;
          }
        };
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(80);
    function o() {}
    function i() {}
    (i.resetWarningCache = o),
      (e.exports = function () {
        function e(e, t, n, o, i, a) {
          if (a !== r) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((u.name = "Invariant Violation"), u);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var n = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: i,
          resetWarningCache: o,
        };
        return (n.PropTypes = n), n;
      });
  },
  function (e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  function (e, t, n) {
    "use strict";
    /** @license React v16.13.1
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = "function" == typeof Symbol && Symbol.for,
      o = r ? Symbol.for("react.element") : 60103,
      i = r ? Symbol.for("react.portal") : 60106,
      a = r ? Symbol.for("react.fragment") : 60107,
      u = r ? Symbol.for("react.strict_mode") : 60108,
      l = r ? Symbol.for("react.profiler") : 60114,
      c = r ? Symbol.for("react.provider") : 60109,
      s = r ? Symbol.for("react.context") : 60110,
      f = r ? Symbol.for("react.async_mode") : 60111,
      p = r ? Symbol.for("react.concurrent_mode") : 60111,
      d = r ? Symbol.for("react.forward_ref") : 60112,
      h = r ? Symbol.for("react.suspense") : 60113,
      m = r ? Symbol.for("react.suspense_list") : 60120,
      v = r ? Symbol.for("react.memo") : 60115,
      y = r ? Symbol.for("react.lazy") : 60116,
      g = r ? Symbol.for("react.block") : 60121,
      b = r ? Symbol.for("react.fundamental") : 60117,
      w = r ? Symbol.for("react.responder") : 60118,
      x = r ? Symbol.for("react.scope") : 60119;
    function E(e) {
      if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
          case o:
            switch ((e = e.type)) {
              case f:
              case p:
              case a:
              case l:
              case u:
              case h:
                return e;
              default:
                switch ((e = e && e.$$typeof)) {
                  case s:
                  case d:
                  case y:
                  case v:
                  case c:
                    return e;
                  default:
                    return t;
                }
            }
          case i:
            return t;
        }
      }
    }
    function S(e) {
      return E(e) === p;
    }
    (t.AsyncMode = f),
      (t.ConcurrentMode = p),
      (t.ContextConsumer = s),
      (t.ContextProvider = c),
      (t.Element = o),
      (t.ForwardRef = d),
      (t.Fragment = a),
      (t.Lazy = y),
      (t.Memo = v),
      (t.Portal = i),
      (t.Profiler = l),
      (t.StrictMode = u),
      (t.Suspense = h),
      (t.isAsyncMode = function (e) {
        return S(e) || E(e) === f;
      }),
      (t.isConcurrentMode = S),
      (t.isContextConsumer = function (e) {
        return E(e) === s;
      }),
      (t.isContextProvider = function (e) {
        return E(e) === c;
      }),
      (t.isElement = function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === o;
      }),
      (t.isForwardRef = function (e) {
        return E(e) === d;
      }),
      (t.isFragment = function (e) {
        return E(e) === a;
      }),
      (t.isLazy = function (e) {
        return E(e) === y;
      }),
      (t.isMemo = function (e) {
        return E(e) === v;
      }),
      (t.isPortal = function (e) {
        return E(e) === i;
      }),
      (t.isProfiler = function (e) {
        return E(e) === l;
      }),
      (t.isStrictMode = function (e) {
        return E(e) === u;
      }),
      (t.isSuspense = function (e) {
        return E(e) === h;
      }),
      (t.isValidElementType = function (e) {
        return (
          "string" == typeof e ||
          "function" == typeof e ||
          e === a ||
          e === p ||
          e === l ||
          e === u ||
          e === h ||
          e === m ||
          ("object" == typeof e &&
            null !== e &&
            (e.$$typeof === y ||
              e.$$typeof === v ||
              e.$$typeof === c ||
              e.$$typeof === s ||
              e.$$typeof === d ||
              e.$$typeof === b ||
              e.$$typeof === w ||
              e.$$typeof === x ||
              e.$$typeof === g))
        );
      }),
      (t.typeOf = E);
  },
  function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          Object.defineProperty(t, "exports", { enumerable: !0 }),
          (t.webpackPolyfill = 1);
      }
      return t;
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(33),
      o = n(37),
      i = { initialized: !1, running: !1 };
    var a = {
      startTheta: 0,
      startOmega: 0,
      damping: 0,
      driveAmplitude: 0,
      driveFrequency: 0,
      simulationSpeed: 1,
    };
    function u(e) {
      switch (e) {
        case "small-angle-approx":
          return {
            startTheta: 30,
            startOmega: 0,
            damping: 0,
            driveAmplitude: 0,
            driveFrequency: 0,
          };
        case "jacobian-elliptical":
          return {
            startTheta: 90,
            startOmega: 0,
            damping: 0,
            driveAmplitude: 0,
            driveFrequency: 0,
          };
        case "separatrix":
          return {
            startTheta: 0,
            startOmega: 114.5915590259,
            damping: 0,
            driveAmplitude: 0,
            driveFrequency: 0,
          };
        case "full-rotations":
          return {
            startTheta: 0,
            startOmega: 120,
            damping: 0,
            driveAmplitude: 0,
            driveFrequency: 0,
          };
        case "limit-cycle":
          return { damping: 0.5, driveAmplitude: 1, driveFrequency: 0 };
        case "periodic1":
          return { damping: 0.5, driveAmplitude: 0.9, driveFrequency: 0.667 };
        case "periodic2":
          return { damping: 0.5, driveAmplitude: 1.08, driveFrequency: 0.667 };
        case "chaos1":
          return { damping: 0.5, driveAmplitude: 1.15, driveFrequency: 0.667 };
        case "periodic3":
          return { damping: 0.5, driveAmplitude: 1.35, driveFrequency: 0.667 };
        case "periodic4":
          return { damping: 0.5, driveAmplitude: 1.45, driveFrequency: 0.667 };
        case "periodic5":
          return { damping: 0.5, driveAmplitude: 1.47, driveFrequency: 0.667 };
        case "chaos2":
          return { damping: 0.5, driveAmplitude: 1.5, driveFrequency: 0.667 };
        case "periodic6":
          return { damping: 0.5, driveAmplitude: 1.345, driveFrequency: 0.7 };
        default:
          return;
      }
    }
    t.default = r.combineReducers({
      simulation: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case o.Actions.INITIALIZED:
            return Object.assign(Object.assign({}, e), { initialized: !0 });
          case o.Actions.RUN_SIMULATION:
            return Object.assign(Object.assign({}, e), { running: !0 });
          case o.Actions.STOP_SIMULATION:
            return Object.assign(Object.assign({}, e), { running: !1 });
          default:
            return e;
        }
      },
      parameters: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case o.Actions.CHANGE_SIMULATION_SPEED:
            return Object.assign(Object.assign({}, e), {
              simulationSpeed: t.value,
            });
          case o.Actions.CHANGE_START_THETA:
            return Object.assign(Object.assign({}, e), { startTheta: t.value });
          case o.Actions.CHANGE_START_OMEGA:
            return Object.assign(Object.assign({}, e), { startOmega: t.value });
          case o.Actions.CHANGE_DAMPING:
            return Object.assign(Object.assign({}, e), { damping: t.value });
          case o.Actions.CHANGE_DRIVE_AMPLITUDE:
            return Object.assign(Object.assign({}, e), {
              driveAmplitude: t.value,
            });
          case o.Actions.CHANGE_DRIVE_FREQUENCY:
            return Object.assign(Object.assign({}, e), {
              driveFrequency: t.value,
            });
          case o.Actions.CHOOSE_PRESET:
            var n = u(t.value);
            return n ? Object.assign(Object.assign({}, e), n) : e;
          default:
            return e;
        }
      },
    });
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function a(e, t) {
      return (a =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function u(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = c(e);
        if (t) {
          var o = c(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return l(this, n);
      };
    }
    function l(e, t) {
      return !t || ("object" !== r(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function c(e) {
      return (c = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var s = Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n),
              Object.defineProperty(e, r, {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              });
          }
        : function (e, t, n, r) {
            void 0 === r && (r = n), (e[r] = t[n]);
          },
      f = Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          },
      p = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.hasOwnProperty.call(e, n) && s(t, e, n);
        return f(t, e), t;
      },
      d = function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var h = p(n(0)),
      m = d(n(85)),
      v = d(n(89)),
      y = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && a(e, t);
        })(c, e);
        var t,
          n,
          r,
          l = u(c);
        function c() {
          return o(this, c), l.apply(this, arguments);
        }
        return (
          (t = c),
          (n = [
            {
              key: "render",
              value: function () {
                return h.createElement(
                  "div",
                  { className: "mw9 center pa4" },
                  h.createElement(
                    "div",
                    { className: "fl w-70 pa2" },
                    h.createElement(m.default, null)
                  ),
                  h.createElement(
                    "div",
                    { className: "fl w-30 pa2" },
                    h.createElement(v.default, null)
                  )
                );
              },
            },
          ]) && i(t.prototype, n),
          r && i(t, r),
          c
        );
      })(h.Component);
    t.default = y;
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function i(e, t) {
      return (i =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function a(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = l(e);
        if (t) {
          var o = l(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return u(this, n);
      };
    }
    function u(e, t) {
      return !t || ("object" !== r(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function l(e) {
      return (l = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var c = Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n),
              Object.defineProperty(e, r, {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              });
          }
        : function (e, t, n, r) {
            void 0 === r && (r = n), (e[r] = t[n]);
          },
      s = Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          },
      f = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.hasOwnProperty.call(e, n) && c(t, e, n);
        return s(t, e), t;
      },
      p = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      },
      d = function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var h = f(n(0)),
      m = n(52),
      v = n(37),
      y = d(n(56)),
      g = d(n(86));
    window.Module = {
      initialized: !1,
      locateFile: function (e) {
        return "./assets/js/" + e;
      },
      onRuntimeInitialized: function () {
        (this.initialized = !0), y.default.dispatch(v.initialized());
      },
    };
    var b = (function (e) {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && i(e, t);
      })(l, e);
      var t,
        n,
        r,
        u = a(l);
      function l(e) {
        var t;
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, l),
          ((t = u.call(this, e)).state = {}),
          t
        );
      }
      return (
        (t = l),
        (n = [
          {
            key: "componentDidMount",
            value: function () {
              this.setState({ canvas: document.getElementById("canvas") });
            },
          },
          {
            key: "componentDidUpdate",
            value: function (e) {
              if (this.props.initialized && this.state.canvas) {
                if (
                  !this.state.model ||
                  this.props.parameters.startTheta !==
                    e.parameters.startTheta ||
                  this.props.parameters.startOmega !== e.parameters.startOmega
                ) {
                  var t = new window.Module.Pendulum(
                    (this.props.parameters.startTheta * Math.PI) / 180,
                    (this.props.parameters.startOmega * Math.PI) / 180
                  );
                  this.state.simulation &&
                    (this.state.simulation.stop(), this.props.stop());
                  var n = new g.default(this.state.canvas, t),
                    r = this.props.parameters,
                    o = r.damping,
                    i = r.driveAmplitude,
                    a = r.driveFrequency;
                  return (
                    n.setSpeed(this.props.speed),
                    n.setParameters(o, i, a),
                    n.initialize(),
                    void this.setState({ model: t, simulation: n })
                  );
                }
                if (this.state.simulation) {
                  if (
                    (this.props.speed !== e.speed &&
                      this.state.simulation.setSpeed(this.props.speed),
                    JSON.stringify(this.props.parameters) !==
                      JSON.stringify(e.parameters))
                  ) {
                    var u = this.props.parameters,
                      l = (u.simulationSpeed, u.damping),
                      c = u.driveAmplitude,
                      s = u.driveFrequency;
                    this.state.simulation.setParameters(l, c, s);
                  }
                  this.props.running
                    ? e.running || this.state.simulation.start()
                    : this.state.simulation.stop();
                }
              }
            },
          },
          {
            key: "render",
            value: function () {
              return h.createElement("canvas", {
                id: "canvas",
                width: "1600px",
                height: "1000px",
                className: "fl w-100 ba",
              });
            },
          },
        ]) && o(t.prototype, n),
        r && o(t, r),
        l
      );
    })(h.Component);
    t.default = m.connect(
      function (e) {
        var t = e.parameters,
          n = t.simulationSpeed,
          r = p(t, ["simulationSpeed"]);
        return {
          initialized: e.simulation.initialized,
          running: e.simulation.running,
          speed: n,
          parameters: r,
        };
      },
      function (e) {
        return {
          stop: function () {
            e(v.stopSimulation());
          },
        };
      }
    )(b);
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function i(e, t) {
      return (i =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function a(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = l(e);
        if (t) {
          var o = l(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return u(this, n);
      };
    }
    function u(e, t) {
      return !t || ("object" !== r(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function l(e) {
      return (l = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var c = function (e) {
      return e && e.__esModule ? e : { default: e };
    };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = c(n(87)),
      f = n(88),
      p = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && i(e, t);
        })(l, e);
        var t,
          n,
          r,
          u = a(l);
        function l(e, t) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, l),
            ((n = u.call(this, e)).simulation = t),
            (n.running = !1),
            (n.speed = 1),
            (n.damping = 0),
            (n.driveAmplitude = 0),
            (n.driveFrequency = 0),
            n
          );
        }
        return (
          (t = l),
          (n = [
            {
              key: "initialize",
              value: function () {
                this.clearAll(),
                  this.drawBoundaries(),
                  this.drawPendulum(),
                  this.drawPhaseHistory(),
                  this.drawPoincareSection();
              },
            },
            {
              key: "start",
              value: function () {
                (this.running = !0), (this.animationID = this.tick());
              },
            },
            {
              key: "stop",
              value: function () {
                (this.running = !1), cancelAnimationFrame(this.animationID);
              },
            },
            {
              key: "setSpeed",
              value: function (e) {
                this.speed = 5 * e;
              },
            },
            {
              key: "setParameters",
              value: function (e, t, n) {
                (this.damping = e),
                  (this.driveAmplitude = t),
                  (this.driveFrequency = n),
                  this.simulation.clear_poincare();
              },
            },
            {
              key: "tick",
              value: function () {
                var e = this;
                return (
                  this.clearAll(),
                  this.drawBoundaries(),
                  this.drawPhaseHistory(),
                  this.drawPoincareSection(),
                  this.drawPendulum(),
                  this.simulation.tick(
                    this.speed,
                    this.damping,
                    this.driveAmplitude,
                    this.driveFrequency
                  ),
                  this.running
                    ? requestAnimationFrame(function () {
                        e.tick();
                      })
                    : void 0
                );
              },
            },
            {
              key: "drawPendulum",
              value: function () {
                var e = this.simulation,
                  t = e.theta,
                  n = (e.omega, e.drive),
                  r = Math.sin(t),
                  o = Math.cos(t),
                  i = this.left.center;
                this.ctx.beginPath(),
                  this.ctx.moveTo(i.x, i.y),
                  this.ctx.lineTo(i.x + 300 * r, i.y + 300 * o),
                  (this.ctx.strokeStyle = "black"),
                  (this.ctx.lineWidth = 2),
                  this.ctx.stroke(),
                  this.ctx.beginPath(),
                  this.ctx.arc(
                    i.x + 300 * r,
                    i.y + 300 * o,
                    10,
                    0,
                    2 * Math.PI
                  ),
                  (this.ctx.fillStyle = "#7F7BEE"),
                  (this.ctx.strokeStyle = "black"),
                  this.ctx.fill(),
                  this.ctx.stroke();
                var a = n > 0;
                (this.ctx.strokeStyle = "blue"),
                  (this.ctx.fillStyle = "blue"),
                  f.arcArrow(
                    this.ctx,
                    i.x,
                    i.y,
                    150,
                    0.5 * Math.PI,
                    -n * Math.PI + 0.5 * Math.PI,
                    a
                  );
              },
            },
            {
              key: "drawPhaseHistory",
              value: function () {
                var e = this.upperRight.center,
                  t = (this.upperRight.width - 10) / (2 * Math.PI),
                  n = this.simulation,
                  r = n.theta,
                  o = n.omega;
                this.drawAxes(this.upperRight, Math.PI, 0.5 * Math.PI),
                  this.ctx.beginPath();
                for (
                  var i = r, a = o, u = 1;
                  u < this.simulation.historySize;
                  u++
                ) {
                  var l = [
                      this.simulation.theta_idx(u),
                      this.simulation.omega_idx(u),
                    ],
                    c = l[0],
                    f = l[1],
                    p = c * t + e.x,
                    d = -f * t + e.y;
                  ((a > 0 && c - i > 0) || (a < 0 && c - i < 0)) &&
                    (this.ctx.stroke(), this.ctx.beginPath()),
                    (i = c),
                    (a = f),
                    s.default.outOfBounds(p, d, this.upperRight) ||
                      this.drawPhasePoint(p, d, { connect: !0 });
                }
                this.ctx.stroke();
                var h = [r * t + e.x, -o * t + e.y],
                  m = h[0],
                  v = h[1];
                s.default.outOfBounds(m, v, this.upperRight) ||
                  this.drawPhasePoint(m, v, { current: !0 });
              },
            },
            {
              key: "drawPoincareSection",
              value: function () {
                var e = this.lowerRight.center,
                  t = (this.lowerRight.width - 10) / (2 * Math.PI);
                this.drawAxes(this.lowerRight, Math.PI, 0.5 * Math.PI);
                for (var n = 0; n < this.simulation.poincareSize; n++) {
                  var r = [
                      this.simulation.poincare_theta(n),
                      this.simulation.poincare_omega(n),
                    ],
                    o = r[1],
                    i = [r[0] * t + e.x, -o * t + e.y],
                    a = i[0],
                    u = i[1];
                  s.default.outOfBounds(a, u, this.lowerRight) ||
                    (this.ctx.beginPath(),
                    this.ctx.arc(
                      a,
                      u,
                      this.lowerRight.width / 500,
                      0,
                      2 * Math.PI
                    ),
                    (this.ctx.fillStyle = "black"),
                    this.ctx.fill());
                }
                if (this.simulation.poincareSize) {
                  var l = [
                      this.simulation.poincare_theta(0),
                      this.simulation.poincare_omega(0),
                    ],
                    c = l[1],
                    f = l[0] * t + e.x,
                    p = -c * t + e.y;
                  s.default.outOfBounds(f, p, this.lowerRight) ||
                    (this.ctx.beginPath(),
                    this.ctx.arc(
                      f,
                      p,
                      this.lowerRight.width / 100,
                      0,
                      2 * Math.PI
                    ),
                    (this.ctx.fillStyle = "#4E4AE8"),
                    this.ctx.fill());
                }
              },
            },
            {
              key: "drawPhasePoint",
              value: function (e, t, n) {
                var r = n.current,
                  o = void 0 !== r && r,
                  i = (n.connect, this.upperRight.width / 100);
                if (o) {
                  (this.ctx.strokeStyle = "#4E4AE8"),
                    (this.ctx.fillStyle = "#4E4AE8");
                  var a = i;
                } else
                  (this.ctx.strokeStyle = "black"),
                    (this.ctx.fillStyle = "black"),
                    (a = i / 10);
                o
                  ? (this.ctx.beginPath(),
                    this.ctx.arc(e, t, a, 0, 2 * Math.PI),
                    this.ctx.fill(),
                    this.ctx.stroke())
                  : ((this.ctx.lineWidth = 1), this.ctx.lineTo(e, t));
              },
            },
          ]) && o(t.prototype, n),
          r && o(t, r),
          l
        );
      })(s.default);
    t.default = p;
  },
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.canvas = t),
          (this.ctx = t.getContext("2d")),
          (this.width = t.width),
          (this.height = t.height);
        var n = Math.round(0.625 * t.width),
          r = this.width - n;
        (this.left = e.calculateArea(0, 0, n, this.height)),
          (this.upperRight = e.calculateArea(
            this.left.right,
            0,
            r,
            this.height / 2
          )),
          (this.lowerRight = e.calculateArea(
            this.left.right,
            this.upperRight.bottom,
            r,
            this.height / 2
          ));
      }
      var t, n, o;
      return (
        (t = e),
        (o = [
          {
            key: "calculateArea",
            value: function (e, t, n, r) {
              return {
                center: { x: e + n / 2, y: t + r / 2 },
                top: t,
                bottom: t + r,
                left: e,
                right: e + n,
                width: n,
                height: r,
              };
            },
          },
          {
            key: "outOfBounds",
            value: function (e, t, n) {
              return e > n.right || e < n.left || t > n.bottom || t < n.top;
            },
          },
        ]),
        (n = [
          {
            key: "clearAll",
            value: function () {
              this.ctx.clearRect(0, 0, this.width, this.height);
            },
          },
          {
            key: "drawBoundaries",
            value: function () {
              (this.ctx.strokeStyle = "black"),
                (this.ctx.fillStyle = "black"),
                (this.ctx.lineWidth = 1),
                this.ctx.beginPath(),
                this.ctx.moveTo(this.left.right, 0),
                this.ctx.lineTo(this.left.right, this.height),
                this.ctx.stroke(),
                this.ctx.beginPath(),
                this.ctx.moveTo(this.left.right, this.height / 2),
                this.ctx.lineTo(this.width, this.height / 2),
                this.ctx.stroke(),
                (this.ctx.font = "300 24px sans-serif"),
                this.ctx.fillText(
                  "Phase Portrait",
                  this.upperRight.left + 12,
                  this.upperRight.top + 30
                ),
                this.ctx.fillText(
                  "Poincaré Map ",
                  this.lowerRight.left + 12,
                  this.lowerRight.top + 30
                );
            },
          },
          {
            key: "drawAxes",
            value: function (e, t, n) {
              var r = (this.upperRight.width - 10) / (2 * t),
                o = Math.floor(e.width / (2 * n * r)),
                i = Math.floor(e.height / (2 * n * r));
              (this.ctx.strokeStyle = "grey"),
                (this.ctx.fillStyle = "grey"),
                (this.ctx.lineWidth = 1),
                this.ctx.beginPath(),
                this.ctx.moveTo(e.center.x, e.top),
                this.ctx.lineTo(e.center.x, e.bottom),
                this.ctx.stroke(),
                this.ctx.beginPath(),
                this.ctx.moveTo(e.left, e.center.y),
                this.ctx.lineTo(e.right, e.center.y),
                this.ctx.stroke();
              for (var a = 0; a <= o; a++)
                this.ctx.beginPath(),
                  this.ctx.moveTo(e.center.x + a * r * n, e.center.y + 10),
                  this.ctx.lineTo(e.center.x + a * r * n, e.center.y - 10),
                  this.ctx.stroke(),
                  this.ctx.beginPath(),
                  this.ctx.moveTo(e.center.x - a * r * n, e.center.y + 10),
                  this.ctx.lineTo(e.center.x - a * r * n, e.center.y - 10),
                  this.ctx.stroke();
              for (var u = 0; u <= i; u++)
                this.ctx.beginPath(),
                  this.ctx.moveTo(e.center.x + 10, e.center.y + u * r * n),
                  this.ctx.lineTo(e.center.x - 10, e.center.y + u * r * n),
                  this.ctx.stroke(),
                  this.ctx.beginPath(),
                  this.ctx.moveTo(e.center.x + 10, e.center.y - u * r * n),
                  this.ctx.lineTo(e.center.x - 10, e.center.y - u * r * n),
                  this.ctx.stroke();
            },
          },
          {
            key: "clearLeft",
            value: function () {
              this.ctx.clearRect(
                this.left.left,
                this.left.top,
                this.left.width - 1,
                this.height
              );
            },
          },
          {
            key: "clearUpperRight",
            value: function () {
              this.ctx.clearRect(
                this.upperRight.left + 1,
                this.upperRight.top,
                this.upperRight.width - 1,
                this.upperRight.height - 1
              );
            },
          },
          {
            key: "clearLowerRight",
            value: function () {
              this.ctx.clearRect(
                this.lowerRight.left + 1,
                this.lowerRight.top,
                this.lowerRight.width - 1,
                this.lowerRight.height - 1
              );
            },
          },
          {
            key: "clearRegions",
            value: function () {
              this.clearLeft(), this.clearUpperRight(), this.clearLowerRight();
            },
          },
        ]) && r(t.prototype, n),
        o && r(t, o),
        e
      );
    })();
    t.default = o;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.arcArrow = void 0),
      (t.arcArrow = function (e, t, n, r, o, i, a) {
        if ((e.beginPath(), e.arc(t, n, r, o, i, a), e.stroke(), o !== i)) {
          var u,
            l,
            c,
            s,
            f = r / 10,
            p = Math.cos(i) * r + t,
            d = Math.sin(i) * r + n,
            h = Math.atan2(t - p, d - n);
          a
            ? ((u = p - f * Math.cos(h + 0.5)),
              (l = d - f * Math.sin(h + 0.5)),
              (c = p - f * Math.cos(h - 0.5)),
              (s = d - f * Math.sin(h - 0.5)))
            : ((u = p + f * Math.cos(h + 0.5)),
              (l = d + f * Math.sin(h + 0.5)),
              (c = p + f * Math.cos(h - 0.5)),
              (s = d + f * Math.sin(h - 0.5))),
            e.beginPath(),
            e.moveTo(p, d),
            e.lineTo(u, l),
            e.lineTo(c, s),
            e.lineTo(p, d),
            e.fill();
        }
      });
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function i(e, t) {
      return (i =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function a(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = l(e);
        if (t) {
          var o = l(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return u(this, n);
      };
    }
    function u(e, t) {
      return !t || ("object" !== r(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function l(e) {
      return (l = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var c = Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n),
              Object.defineProperty(e, r, {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              });
          }
        : function (e, t, n, r) {
            void 0 === r && (r = n), (e[r] = t[n]);
          },
      s = Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          },
      f = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.hasOwnProperty.call(e, n) && c(t, e, n);
        return s(t, e), t;
      },
      p = function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var d = f(n(0)),
      h = n(52),
      m = p(n(149)),
      v = n(37);
    n(145);
    var y = (function (e) {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && i(e, t);
      })(l, e);
      var t,
        n,
        r,
        u = a(l);
      function l(e, t) {
        var n;
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, l),
          ((n = u.call(this, e, t)).state = { simulationSpeedMode: 1 }),
          n
        );
      }
      return (
        (t = l),
        (n = [
          {
            key: "onSimulationSpeedChange",
            value: function (e) {
              this.setState({ simulationSpeedMode: e }),
                this.props.onSimulationSpeedChange(e);
            },
          },
          {
            key: "onSelectPreset",
            value: function (e) {
              this.props.onPresetChange(e.target.value);
            },
          },
          {
            key: "render",
            value: function () {
              var e = this.props,
                t = e.simulationSpeed,
                n = e.theta,
                r = e.omega,
                o = e.damping,
                i = e.driveAmplitude,
                a = e.driveFrequency;
              return d.createElement(
                "div",
                null,
                d.createElement(
                  "div",
                  { className: "tc pb3" },
                  "Starting Angle",
                  d.createElement(
                    "div",
                    { className: "flex items-center" },
                    d.createElement("div", { className: "fl w-10 pa2 pl0" }, n),
                    d.createElement(
                      "div",
                      { className: "fl w-90 pa2 pl3" },
                      d.createElement(m.default, {
                        min: -180,
                        max: 180,
                        step: 15,
                        marks: {
                          "-180": "-180",
                          "-90": "-90",
                          0: "0",
                          90: "90",
                          180: "180",
                        },
                        value: n,
                        onChange: this.props.onThetaChange.bind(this),
                      })
                    )
                  )
                ),
                d.createElement(
                  "div",
                  { className: "tc pb3" },
                  "Starting Angular Velocity",
                  d.createElement(
                    "div",
                    { className: "flex items-center" },
                    d.createElement("div", { className: "fl w-10 pa2 pl0" }, r),
                    d.createElement(
                      "div",
                      { className: "fl w-90 pa2 pl3" },
                      d.createElement(m.default, {
                        min: -180,
                        max: 180,
                        step: 15,
                        marks: {
                          "-180": "-180",
                          "-90": "-90",
                          0: "0",
                          90: "90",
                          180: "180",
                        },
                        value: r,
                        onChange: this.props.onOmegaChange.bind(this),
                      })
                    )
                  )
                ),
                d.createElement(
                  "div",
                  { className: "tc pb3" },
                  "Damping",
                  d.createElement(
                    "div",
                    { className: "flex items-center" },
                    d.createElement("div", { className: "fl w-10 pa2 pl0" }, o),
                    d.createElement(
                      "div",
                      { className: "fl w-90 pa2 pl3" },
                      d.createElement(m.default, {
                        min: 0,
                        max: 1,
                        step: 0.01,
                        marks: { 0: "0", 0.5: "0.5", 1: "1" },
                        value: o,
                        onChange: this.props.onDampingChange.bind(this),
                      })
                    )
                  )
                ),
                d.createElement(
                  "div",
                  { className: "tc pb3" },
                  "Drive Amplitude",
                  d.createElement(
                    "div",
                    { className: "flex items-center" },
                    d.createElement("div", { className: "fl w-10 pa2 pl0" }, i),
                    d.createElement(
                      "div",
                      { className: "fl w-90 pa2 pl3" },
                      d.createElement(m.default, {
                        min: 0,
                        max: 2,
                        step: 0.001,
                        marks: {
                          0: "0",
                          0.5: "0.5",
                          1: "1",
                          1.5: "1.5",
                          2: "2",
                        },
                        value: i,
                        onChange: this.props.onDriveAmplitudeChange.bind(this),
                      })
                    )
                  )
                ),
                d.createElement(
                  "div",
                  { className: "tc pb3" },
                  "Drive Frequency",
                  d.createElement(
                    "div",
                    { className: "flex items-center" },
                    d.createElement("div", { className: "fl w-10 pa2 pl0" }, a),
                    d.createElement(
                      "div",
                      { className: "fl w-90 pa2 pl3" },
                      d.createElement(m.default, {
                        min: 0,
                        max: 2,
                        step: 0.001,
                        marks: { 0: "0", 0.667: "0.667", 1: "1", 2: "2" },
                        value: a,
                        onChange: this.props.onDriveFrequencyChange.bind(this),
                      })
                    )
                  )
                ),
                d.createElement(
                  "div",
                  { className: "tc pb3" },
                  "Simulation Speed",
                  d.createElement(
                    "div",
                    { className: "flex items-center" },
                    d.createElement("div", { className: "fl w-10 pa2 pl0" }, t),
                    d.createElement(
                      "div",
                      { className: "fl w-90 pa2 pl3" },
                      d.createElement(m.default, {
                        min: 1,
                        max: 4,
                        step: null,
                        marks: {
                          1: "Normal",
                          2: "Double",
                          3: "Fast",
                          4: "Plotter",
                        },
                        value: this.state.simulationSpeedMode,
                        onChange: this.onSimulationSpeedChange.bind(this),
                      })
                    )
                  )
                ),
                d.createElement(
                  "div",
                  { className: "tc pt4 pb3" },
                  "Examples",
                  d.createElement(
                    "div",
                    { className: "w-70 center pv3" },
                    d.createElement(
                      "select",
                      {
                        className: "w-100",
                        onChange: this.onSelectPreset.bind(this),
                      },
                      d.createElement("option", { value: "nothing" }),
                      d.createElement(
                        "optgroup",
                        { label: "Simple Pendulum" },
                        d.createElement(
                          "option",
                          { value: "small-angle-approx" },
                          "Small Angle Pendulum (SHM)"
                        ),
                        d.createElement(
                          "option",
                          { value: "jacobian-elliptical" },
                          "Jacobian Elliptical"
                        ),
                        d.createElement(
                          "option",
                          { value: "separatrix" },
                          "Separatrix"
                        ),
                        d.createElement(
                          "option",
                          { value: "full-rotations" },
                          "Full Rotations"
                        )
                      ),
                      d.createElement(
                        "optgroup",
                        {
                          label:
                            "Damped, Driven Pendulum (Drive Frequency 2/3)",
                        },
                        d.createElement(
                          "option",
                          { value: "limit-cycle" },
                          "Limit Cycle"
                        ),
                        d.createElement(
                          "option",
                          { value: "periodic1" },
                          "Singly Periodic (0.5, 0.9, 0.667)"
                        ),
                        d.createElement(
                          "option",
                          { value: "periodic2" },
                          "Doubly Periodic (0.5, 1.08, 0.667)"
                        ),
                        d.createElement(
                          "option",
                          { value: "chaos1" },
                          "Chaos (0.5, 1.15, 0.667)"
                        ),
                        d.createElement(
                          "option",
                          { value: "periodic3" },
                          "Singly Periodic (0.5, 1.35, 0.667)"
                        ),
                        d.createElement(
                          "option",
                          { value: "periodic4" },
                          "Doubly Periodic (0.5, 1.45, 0.667)"
                        ),
                        d.createElement(
                          "option",
                          { value: "periodic5" },
                          "Quadruply Periodic (0.5, 1.47, 0.667)"
                        ),
                        d.createElement(
                          "option",
                          { value: "chaos2" },
                          "Chaos (0.5, 1.5, 0.667)"
                        )
                      ),
                      d.createElement(
                        "optgroup",
                        { label: "Damped, Driven Pendulum" },
                        d.createElement(
                          "option",
                          { value: "periodic6" },
                          "Edge of Chaos (0.5, 1.345, 0.7)"
                        )
                      )
                    )
                  )
                ),
                d.createElement(
                  "div",
                  { className: "ph3 flex items-center" },
                  this.props.running
                    ? d.createElement(
                        "a",
                        {
                          className:
                            "center f6 link dim br-pill ba bw1 ph3 pv2 mb2 dib dark-blue",
                          onClick: this.props.stop.bind(this),
                          style: {
                            appearance: "button",
                            backgroundColor: "#4D4AE8",
                            backgroundImage:
                              "linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0))",
                            border: "1px solid #4D4AE8",
                            borderRadius: "1rem",
                            boxShadow:
                              "rgba(255, 255, 255, 0.15) 0 1px 0 inset,rgba(46, 54, 80, 0.075) 0 1px 1px",
                            boxSizing: "border-box",
                            color: "#FFFFFF",
                            cursor: "pointer",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "1rem",
                            fontWeight: 500,
                            lineHeight: 1.5,
                            padding: ".5rem 1rem",
                            textAlign: "center",
                            textTransform: "none",
                            transition:
                              "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            touchAction: "manipulation",
                            verticalAlign: "middle",
                          },
                          onMouseEnter: function (e) {
                            (e.currentTarget.style.backgroundColor = "#3733E5"),
                              (e.currentTarget.style.borderColor = "#3733E5");
                          },
                          onMouseLeave: function (e) {
                            (e.currentTarget.style.backgroundColor = "#4D4AE8"),
                              (e.currentTarget.style.borderColor = "#4D4AE8");
                          },
                          onFocus: function (e) {
                            (e.currentTarget.style.backgroundColor = "#413FC5"),
                              (e.currentTarget.style.borderColor = "#3E3BBA"),
                              (e.currentTarget.style.boxShadow =
                                "rgba(255, 255, 255, 0.15) 0 1px 0 inset, rgba(46, 54, 80, 0.075) 0 1px 1px, rgba(104, 101, 235, 0.5) 0 0 0 .2rem");
                          },
                        },
                        "Stop Simulation"
                      )
                    : d.createElement(
                        "a",
                        {
                          className:
                            "center f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-blue",
                          onClick: this.props.run.bind(this),
                          style: {
                            appearance: "button",
                            backgroundColor: "#4D4AE8",
                            backgroundImage:
                              "linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0))",
                            border: "1px solid #4D4AE8",
                            borderRadius: "1rem",
                            boxShadow:
                              "rgba(255, 255, 255, 0.15) 0 1px 0 inset,rgba(46, 54, 80, 0.075) 0 1px 1px",
                            boxSizing: "border-box",
                            color: "#FFFFFF",
                            cursor: "pointer",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "1rem",
                            fontWeight: 500,
                            lineHeight: 1.5,
                            padding: ".5rem 1rem",
                            textAlign: "center",
                            textTransform: "none",
                            transition:
                              "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            touchAction: "manipulation",
                            verticalAlign: "middle",
                          },
                          onMouseEnter: function (e) {
                            (e.currentTarget.style.backgroundColor = "#3733E5"),
                              (e.currentTarget.style.borderColor = "#3733E5");
                          },
                          onMouseLeave: function (e) {
                            (e.currentTarget.style.backgroundColor = "#4D4AE8"),
                              (e.currentTarget.style.borderColor = "#4D4AE8");
                          },
                          onFocus: function (e) {
                            (e.currentTarget.style.backgroundColor = "#413FC5"),
                              (e.currentTarget.style.borderColor = "#3E3BBA"),
                              (e.currentTarget.style.boxShadow =
                                "rgba(255, 255, 255, 0.15) 0 1px 0 inset, rgba(46, 54, 80, 0.075) 0 1px 1px, rgba(104, 101, 235, 0.5) 0 0 0 .2rem");
                          },
                          onBlur: function (e) {
                            e.currentTarget.style.boxShadow =
                              "rgba(255, 255, 255, 0.15) 0 1px 0 inset, rgba(46, 54, 80, 0.075) 0 1px 1px";
                          },
                        },
                        "Run Simulation"
                      )
                )
              );
            },
          },
        ]) && o(t.prototype, n),
        r && o(t, r),
        l
      );
    })(d.Component);
    t.default = h.connect(
      function (e) {
        return {
          running: e.simulation.running,
          simulationSpeed: e.parameters.simulationSpeed,
          theta: e.parameters.startTheta,
          omega: e.parameters.startOmega,
          damping: e.parameters.damping,
          driveAmplitude: e.parameters.driveAmplitude,
          driveFrequency: e.parameters.driveFrequency,
        };
      },
      function (e) {
        return {
          run: function () {
            e(v.runSimulation());
          },
          stop: function () {
            e(v.stopSimulation());
          },
          onSimulationSpeedChange: function (t) {
            switch (t) {
              case 1:
                e(v.changeSimulationSpeed(1));
                break;
              case 2:
                e(v.changeSimulationSpeed(2));
                break;
              case 3:
                e(v.changeSimulationSpeed(5));
                break;
              case 4:
                e(v.changeSimulationSpeed(1e3));
            }
          },
          onThetaChange: function (t) {
            e(v.changeStartTheta(t));
          },
          onOmegaChange: function (t) {
            e(v.changeStartOmega(t));
          },
          onDampingChange: function (t) {
            e(v.changeDamping(Number(Math.round(Number(t + "e3")) + "e-3")));
          },
          onDriveAmplitudeChange: function (t) {
            e(
              v.changeDriveAmplitude(
                Number(Math.round(Number(t + "e4")) + "e-4")
              )
            );
          },
          onDriveFrequencyChange: function (t) {
            e(
              v.changeDriveFrequency(
                Number(Math.round(Number(t + "e4")) + "e-4")
              )
            );
          },
          onPresetChange: function (t) {
            e(v.choosePreset(t));
          },
        };
      }
    )(y);
  },
  function (e, t, n) {
    e.exports = { default: n(91), __esModule: !0 };
  },
  function (e, t, n) {
    n(92), (e.exports = n(5).Object.assign);
  },
  function (e, t, n) {
    var r = n(11);
    r(r.S + r.F, "Object", { assign: n(94) });
  },
  function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(28),
      o = n(46),
      i = n(31),
      a = n(32),
      u = n(60),
      l = Object.assign;
    e.exports =
      !l ||
      n(22)(function () {
        var e = {},
          t = {},
          n = Symbol(),
          r = "abcdefghijklmnopqrst";
        return (
          (e[n] = 7),
          r.split("").forEach(function (e) {
            t[e] = e;
          }),
          7 != l({}, e)[n] || Object.keys(l({}, t)).join("") != r
        );
      })
        ? function (e, t) {
            for (
              var n = a(e), l = arguments.length, c = 1, s = o.f, f = i.f;
              l > c;

            )
              for (
                var p,
                  d = u(arguments[c++]),
                  h = s ? r(d).concat(s(d)) : r(d),
                  m = h.length,
                  v = 0;
                m > v;

              )
                f.call(d, (p = h[v++])) && (n[p] = d[p]);
            return n;
          }
        : l;
  },
  function (e, t, n) {
    var r = n(16),
      o = n(61),
      i = n(96);
    e.exports = function (e) {
      return function (t, n, a) {
        var u,
          l = r(t),
          c = o(l.length),
          s = i(a, c);
        if (e && n != n) {
          for (; c > s; ) if ((u = l[s++]) != u) return !0;
        } else
          for (; c > s; s++)
            if ((e || s in l) && l[s] === n) return e || s || 0;
        return !e && -1;
      };
    };
  },
  function (e, t, n) {
    var r = n(42),
      o = Math.max,
      i = Math.min;
    e.exports = function (e, t) {
      return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t);
    };
  },
  function (e, t, n) {
    n(98);
    var r = n(5).Object;
    e.exports = function (e, t, n) {
      return r.defineProperty(e, t, n);
    };
  },
  function (e, t, n) {
    var r = n(11);
    r(r.S + r.F * !n(14), "Object", { defineProperty: n(13).f });
  },
  function (e, t, n) {
    e.exports = { default: n(100), __esModule: !0 };
  },
  function (e, t, n) {
    n(64), n(105), (e.exports = n(49).f("iterator"));
  },
  function (e, t, n) {
    var r = n(42),
      o = n(41);
    e.exports = function (e) {
      return function (t, n) {
        var i,
          a,
          u = String(o(t)),
          l = r(n),
          c = u.length;
        return l < 0 || l >= c
          ? e
            ? ""
            : void 0
          : (i = u.charCodeAt(l)) < 55296 ||
            i > 56319 ||
            l + 1 === c ||
            (a = u.charCodeAt(l + 1)) < 56320 ||
            a > 57343
          ? e
            ? u.charAt(l)
            : i
          : e
          ? u.slice(l, l + 2)
          : a - 56320 + ((i - 55296) << 10) + 65536;
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(47),
      o = n(25),
      i = n(48),
      a = {};
    n(19)(a, n(7)("iterator"), function () {
      return this;
    }),
      (e.exports = function (e, t, n) {
        (e.prototype = r(a, { next: o(1, n) })), i(e, t + " Iterator");
      });
  },
  function (e, t, n) {
    var r = n(13),
      o = n(20),
      i = n(28);
    e.exports = n(14)
      ? Object.defineProperties
      : function (e, t) {
          o(e);
          for (var n, a = i(t), u = a.length, l = 0; u > l; )
            r.f(e, (n = a[l++]), t[n]);
          return e;
        };
  },
  function (e, t, n) {
    var r = n(12).document;
    e.exports = r && r.documentElement;
  },
  function (e, t, n) {
    n(106);
    for (
      var r = n(12),
        o = n(19),
        i = n(26),
        a = n(7)("toStringTag"),
        u =
          "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
            ","
          ),
        l = 0;
      l < u.length;
      l++
    ) {
      var c = u[l],
        s = r[c],
        f = s && s.prototype;
      f && !f[a] && o(f, a, c), (i[c] = i.Array);
    }
  },
  function (e, t, n) {
    "use strict";
    var r = n(107),
      o = n(108),
      i = n(26),
      a = n(16);
    (e.exports = n(65)(
      Array,
      "Array",
      function (e, t) {
        (this._t = a(e)), (this._i = 0), (this._k = t);
      },
      function () {
        var e = this._t,
          t = this._k,
          n = this._i++;
        return !e || n >= e.length
          ? ((this._t = void 0), o(1))
          : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
      },
      "values"
    )),
      (i.Arguments = i.Array),
      r("keys"),
      r("values"),
      r("entries");
  },
  function (e, t) {
    e.exports = function () {};
  },
  function (e, t) {
    e.exports = function (e, t) {
      return { value: t, done: !!e };
    };
  },
  function (e, t, n) {
    e.exports = { default: n(110), __esModule: !0 };
  },
  function (e, t, n) {
    n(111), n(116), n(117), n(118), (e.exports = n(5).Symbol);
  },
  function (e, t, n) {
    "use strict";
    var r = n(12),
      o = n(15),
      i = n(14),
      a = n(11),
      u = n(66),
      l = n(112).KEY,
      c = n(22),
      s = n(44),
      f = n(48),
      p = n(30),
      d = n(7),
      h = n(49),
      m = n(50),
      v = n(113),
      y = n(114),
      g = n(20),
      b = n(21),
      w = n(16),
      x = n(39),
      E = n(25),
      S = n(47),
      k = n(115),
      T = n(51),
      O = n(13),
      P = n(28),
      _ = T.f,
      C = O.f,
      M = k.f,
      N = r.Symbol,
      j = r.JSON,
      A = j && j.stringify,
      R = d("_hidden"),
      D = d("toPrimitive"),
      I = {}.propertyIsEnumerable,
      F = s("symbol-registry"),
      L = s("symbols"),
      z = s("op-symbols"),
      U = Object.prototype,
      H = "function" == typeof N,
      V = r.QObject,
      B = !V || !V.prototype || !V.prototype.findChild,
      W =
        i &&
        c(function () {
          return (
            7 !=
            S(
              C({}, "a", {
                get: function () {
                  return C(this, "a", { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function (e, t, n) {
              var r = _(U, t);
              r && delete U[t], C(e, t, n), r && e !== U && C(U, t, r);
            }
          : C,
      $ = function (e) {
        var t = (L[e] = S(N.prototype));
        return (t._k = e), t;
      },
      q =
        H && "symbol" == typeof N.iterator
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              return e instanceof N;
            },
      K = function (e, t, n) {
        return (
          e === U && K(z, t, n),
          g(e),
          (t = x(t, !0)),
          g(n),
          o(L, t)
            ? (n.enumerable
                ? (o(e, R) && e[R][t] && (e[R][t] = !1),
                  (n = S(n, { enumerable: E(0, !1) })))
                : (o(e, R) || C(e, R, E(1, {})), (e[R][t] = !0)),
              W(e, t, n))
            : C(e, t, n)
        );
      },
      Q = function (e, t) {
        g(e);
        for (var n, r = v((t = w(t))), o = 0, i = r.length; i > o; )
          K(e, (n = r[o++]), t[n]);
        return e;
      },
      G = function (e) {
        var t = I.call(this, (e = x(e, !0)));
        return (
          !(this === U && o(L, e) && !o(z, e)) &&
          (!(t || !o(this, e) || !o(L, e) || (o(this, R) && this[R][e])) || t)
        );
      },
      Y = function (e, t) {
        if (((e = w(e)), (t = x(t, !0)), e !== U || !o(L, t) || o(z, t))) {
          var n = _(e, t);
          return (
            !n || !o(L, t) || (o(e, R) && e[R][t]) || (n.enumerable = !0), n
          );
        }
      },
      X = function (e) {
        for (var t, n = M(w(e)), r = [], i = 0; n.length > i; )
          o(L, (t = n[i++])) || t == R || t == l || r.push(t);
        return r;
      },
      Z = function (e) {
        for (
          var t, n = e === U, r = M(n ? z : w(e)), i = [], a = 0;
          r.length > a;

        )
          !o(L, (t = r[a++])) || (n && !o(U, t)) || i.push(L[t]);
        return i;
      };
    H ||
      (u(
        (N = function () {
          if (this instanceof N)
            throw TypeError("Symbol is not a constructor!");
          var e = p(arguments.length > 0 ? arguments[0] : void 0),
            t = function (n) {
              this === U && t.call(z, n),
                o(this, R) && o(this[R], e) && (this[R][e] = !1),
                W(this, e, E(1, n));
            };
          return i && B && W(U, e, { configurable: !0, set: t }), $(e);
        }).prototype,
        "toString",
        function () {
          return this._k;
        }
      ),
      (T.f = Y),
      (O.f = K),
      (n(68).f = k.f = X),
      (n(31).f = G),
      (n(46).f = Z),
      i && !n(29) && u(U, "propertyIsEnumerable", G, !0),
      (h.f = function (e) {
        return $(d(e));
      })),
      a(a.G + a.W + a.F * !H, { Symbol: N });
    for (
      var J =
          "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
            ","
          ),
        ee = 0;
      J.length > ee;

    )
      d(J[ee++]);
    for (var te = P(d.store), ne = 0; te.length > ne; ) m(te[ne++]);
    a(a.S + a.F * !H, "Symbol", {
      for: function (e) {
        return o(F, (e += "")) ? F[e] : (F[e] = N(e));
      },
      keyFor: function (e) {
        if (!q(e)) throw TypeError(e + " is not a symbol!");
        for (var t in F) if (F[t] === e) return t;
      },
      useSetter: function () {
        B = !0;
      },
      useSimple: function () {
        B = !1;
      },
    }),
      a(a.S + a.F * !H, "Object", {
        create: function (e, t) {
          return void 0 === t ? S(e) : Q(S(e), t);
        },
        defineProperty: K,
        defineProperties: Q,
        getOwnPropertyDescriptor: Y,
        getOwnPropertyNames: X,
        getOwnPropertySymbols: Z,
      }),
      j &&
        a(
          a.S +
            a.F *
              (!H ||
                c(function () {
                  var e = N();
                  return (
                    "[null]" != A([e]) ||
                    "{}" != A({ a: e }) ||
                    "{}" != A(Object(e))
                  );
                })),
          "JSON",
          {
            stringify: function (e) {
              for (var t, n, r = [e], o = 1; arguments.length > o; )
                r.push(arguments[o++]);
              if (((n = t = r[1]), (b(t) || void 0 !== e) && !q(e)))
                return (
                  y(t) ||
                    (t = function (e, t) {
                      if (
                        ("function" == typeof n && (t = n.call(this, e, t)),
                        !q(t))
                      )
                        return t;
                    }),
                  (r[1] = t),
                  A.apply(j, r)
                );
            },
          }
        ),
      N.prototype[D] || n(19)(N.prototype, D, N.prototype.valueOf),
      f(N, "Symbol"),
      f(Math, "Math", !0),
      f(r.JSON, "JSON", !0);
  },
  function (e, t, n) {
    var r = n(30)("meta"),
      o = n(21),
      i = n(15),
      a = n(13).f,
      u = 0,
      l =
        Object.isExtensible ||
        function () {
          return !0;
        },
      c = !n(22)(function () {
        return l(Object.preventExtensions({}));
      }),
      s = function (e) {
        a(e, r, { value: { i: "O" + ++u, w: {} } });
      },
      f = (e.exports = {
        KEY: r,
        NEED: !1,
        fastKey: function (e, t) {
          if (!o(e))
            return "symbol" == typeof e
              ? e
              : ("string" == typeof e ? "S" : "P") + e;
          if (!i(e, r)) {
            if (!l(e)) return "F";
            if (!t) return "E";
            s(e);
          }
          return e[r].i;
        },
        getWeak: function (e, t) {
          if (!i(e, r)) {
            if (!l(e)) return !0;
            if (!t) return !1;
            s(e);
          }
          return e[r].w;
        },
        onFreeze: function (e) {
          return c && f.NEED && l(e) && !i(e, r) && s(e), e;
        },
      });
  },
  function (e, t, n) {
    var r = n(28),
      o = n(46),
      i = n(31);
    e.exports = function (e) {
      var t = r(e),
        n = o.f;
      if (n)
        for (var a, u = n(e), l = i.f, c = 0; u.length > c; )
          l.call(e, (a = u[c++])) && t.push(a);
      return t;
    };
  },
  function (e, t, n) {
    var r = n(40);
    e.exports =
      Array.isArray ||
      function (e) {
        return "Array" == r(e);
      };
  },
  function (e, t, n) {
    var r = n(16),
      o = n(68).f,
      i = {}.toString,
      a =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    e.exports.f = function (e) {
      return a && "[object Window]" == i.call(e)
        ? (function (e) {
            try {
              return o(e);
            } catch (e) {
              return a.slice();
            }
          })(e)
        : o(r(e));
    };
  },
  function (e, t) {},
  function (e, t, n) {
    n(50)("asyncIterator");
  },
  function (e, t, n) {
    n(50)("observable");
  },
  function (e, t, n) {
    e.exports = { default: n(120), __esModule: !0 };
  },
  function (e, t, n) {
    n(121), (e.exports = n(5).Object.setPrototypeOf);
  },
  function (e, t, n) {
    var r = n(11);
    r(r.S, "Object", { setPrototypeOf: n(122).set });
  },
  function (e, t, n) {
    var r = n(21),
      o = n(20),
      i = function (e, t) {
        if ((o(e), !r(t) && null !== t))
          throw TypeError(t + ": can't set as prototype!");
      };
    e.exports = {
      set:
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function (e, t, r) {
              try {
                (r = n(38)(
                  Function.call,
                  n(51).f(Object.prototype, "__proto__").set,
                  2
                ))(e, []),
                  (t = !(e instanceof Array));
              } catch (e) {
                t = !0;
              }
              return function (e, n) {
                return i(e, n), t ? (e.__proto__ = n) : r(e, n), e;
              };
            })({}, !1)
          : void 0),
      check: i,
    };
  },
  function (e, t, n) {
    e.exports = { default: n(124), __esModule: !0 };
  },
  function (e, t, n) {
    n(125);
    var r = n(5).Object;
    e.exports = function (e, t) {
      return r.create(e, t);
    };
  },
  function (e, t, n) {
    var r = n(11);
    r(r.S, "Object", { create: n(47) });
  },
  function (e, t, n) {
    e.exports = { default: n(127), __esModule: !0 };
  },
  function (e, t, n) {
    n(128), (e.exports = n(5).Object.getPrototypeOf);
  },
  function (e, t, n) {
    var r = n(32),
      o = n(67);
    n(69)("getPrototypeOf", function () {
      return function (e) {
        return o(r(e));
      };
    });
  },
  function (e, t, n) {
    e.exports = { default: n(130), __esModule: !0 };
  },
  function (e, t, n) {
    n(131);
    var r = n(5).Object;
    e.exports = function (e, t) {
      return r.getOwnPropertyDescriptor(e, t);
    };
  },
  function (e, t, n) {
    var r = n(16),
      o = n(51).f;
    n(69)("getOwnPropertyDescriptor", function () {
      return function (e, t) {
        return o(r(e), t);
      };
    });
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(n(133)),
      i = r(n(35)),
      a = [
        "altKey",
        "bubbles",
        "cancelable",
        "ctrlKey",
        "currentTarget",
        "eventPhase",
        "metaKey",
        "shiftKey",
        "target",
        "timeStamp",
        "view",
        "type",
      ];
    function u(e) {
      return null == e;
    }
    var l = [
      {
        reg: /^key/,
        props: ["char", "charCode", "key", "keyCode", "which"],
        fix: function (e, t) {
          u(e.which) && (e.which = u(t.charCode) ? t.keyCode : t.charCode),
            void 0 === e.metaKey && (e.metaKey = e.ctrlKey);
        },
      },
      { reg: /^touch/, props: ["touches", "changedTouches", "targetTouches"] },
      { reg: /^hashchange$/, props: ["newURL", "oldURL"] },
      { reg: /^gesturechange$/i, props: ["rotation", "scale"] },
      {
        reg: /^(mousewheel|DOMMouseScroll)$/,
        props: [],
        fix: function (e, t) {
          var n = void 0,
            r = void 0,
            o = void 0,
            i = t.wheelDelta,
            a = t.axis,
            u = t.wheelDeltaY,
            l = t.wheelDeltaX,
            c = t.detail;
          i && (o = i / 120),
            c && (o = 0 - (c % 3 == 0 ? c / 3 : c)),
            void 0 !== a &&
              (a === e.HORIZONTAL_AXIS
                ? ((r = 0), (n = 0 - o))
                : a === e.VERTICAL_AXIS && ((n = 0), (r = o))),
            void 0 !== u && (r = u / 120),
            void 0 !== l && (n = (-1 * l) / 120),
            n || r || (r = o),
            void 0 !== n && (e.deltaX = n),
            void 0 !== r && (e.deltaY = r),
            void 0 !== o && (e.delta = o);
        },
      },
      {
        reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
        props: [
          "buttons",
          "clientX",
          "clientY",
          "button",
          "offsetX",
          "relatedTarget",
          "which",
          "fromElement",
          "toElement",
          "offsetY",
          "pageX",
          "pageY",
          "screenX",
          "screenY",
        ],
        fix: function (e, t) {
          var n = void 0,
            r = void 0,
            o = void 0,
            i = e.target,
            a = t.button;
          return (
            i &&
              u(e.pageX) &&
              !u(t.clientX) &&
              ((r = (n = i.ownerDocument || document).documentElement),
              (o = n.body),
              (e.pageX =
                t.clientX +
                ((r && r.scrollLeft) || (o && o.scrollLeft) || 0) -
                ((r && r.clientLeft) || (o && o.clientLeft) || 0)),
              (e.pageY =
                t.clientY +
                ((r && r.scrollTop) || (o && o.scrollTop) || 0) -
                ((r && r.clientTop) || (o && o.clientTop) || 0))),
            e.which ||
              void 0 === a ||
              (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
            !e.relatedTarget &&
              e.fromElement &&
              (e.relatedTarget =
                e.fromElement === i ? e.toElement : e.fromElement),
            e
          );
        },
      },
    ];
    function c() {
      return !0;
    }
    function s() {
      return !1;
    }
    function f(e) {
      var t = e.type,
        n =
          "function" == typeof e.stopPropagation ||
          "boolean" == typeof e.cancelBubble;
      o.default.call(this), (this.nativeEvent = e);
      var r = s;
      "defaultPrevented" in e
        ? (r = e.defaultPrevented ? c : s)
        : "getPreventDefault" in e
        ? (r = e.getPreventDefault() ? c : s)
        : "returnValue" in e && (r = !1 === e.returnValue ? c : s),
        (this.isDefaultPrevented = r);
      var i = [],
        u = void 0,
        f = void 0,
        p = a.concat();
      for (
        l.forEach(function (e) {
          t.match(e.reg) && ((p = p.concat(e.props)), e.fix && i.push(e.fix));
        }),
          u = p.length;
        u;

      )
        this[(f = p[--u])] = e[f];
      for (
        !this.target && n && (this.target = e.srcElement || document),
          this.target &&
            3 === this.target.nodeType &&
            (this.target = this.target.parentNode),
          u = i.length;
        u;

      )
        (0, i[--u])(this, e);
      this.timeStamp = e.timeStamp || Date.now();
    }
    var p = o.default.prototype;
    (0, i.default)(f.prototype, p, {
      constructor: f,
      preventDefault: function () {
        var e = this.nativeEvent;
        e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          p.preventDefault.call(this);
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0),
          p.stopPropagation.call(this);
      },
    }),
      (t.default = f),
      (e.exports = t.default);
  },
  function (e, t, n) {
    "use strict";
    function r() {
      return !1;
    }
    function o() {
      return !0;
    }
    function i() {
      (this.timeStamp = Date.now()),
        (this.target = void 0),
        (this.currentTarget = void 0);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (i.prototype = {
        isEventObject: 1,
        constructor: i,
        isDefaultPrevented: r,
        isPropagationStopped: r,
        isImmediatePropagationStopped: r,
        preventDefault: function () {
          this.isDefaultPrevented = o;
        },
        stopPropagation: function () {
          this.isPropagationStopped = o;
        },
        stopImmediatePropagation: function () {
          (this.isImmediatePropagationStopped = o), this.stopPropagation();
        },
        halt: function (e) {
          e ? this.stopImmediatePropagation() : this.stopPropagation(),
            this.preventDefault();
        },
      }),
      (t.default = i),
      (e.exports = t.default);
  },
  function (e, t, n) {
    e.exports = { default: n(135), __esModule: !0 };
  },
  function (e, t, n) {
    n(64), n(136), (e.exports = n(5).Array.from);
  },
  function (e, t, n) {
    "use strict";
    var r = n(38),
      o = n(11),
      i = n(32),
      a = n(137),
      u = n(138),
      l = n(61),
      c = n(139),
      s = n(140);
    o(
      o.S +
        o.F *
          !n(142)(function (e) {
            Array.from(e);
          }),
      "Array",
      {
        from: function (e) {
          var t,
            n,
            o,
            f,
            p = i(e),
            d = "function" == typeof this ? this : Array,
            h = arguments.length,
            m = h > 1 ? arguments[1] : void 0,
            v = void 0 !== m,
            y = 0,
            g = s(p);
          if (
            (v && (m = r(m, h > 2 ? arguments[2] : void 0, 2)),
            null == g || (d == Array && u(g)))
          )
            for (n = new d((t = l(p.length))); t > y; y++)
              c(n, y, v ? m(p[y], y) : p[y]);
          else
            for (f = g.call(p), n = new d(); !(o = f.next()).done; y++)
              c(n, y, v ? a(f, m, [o.value, y], !0) : o.value);
          return (n.length = y), n;
        },
      }
    );
  },
  function (e, t, n) {
    var r = n(20);
    e.exports = function (e, t, n, o) {
      try {
        return o ? t(r(n)[0], n[1]) : t(n);
      } catch (t) {
        var i = e.return;
        throw (void 0 !== i && r(i.call(e)), t);
      }
    };
  },
  function (e, t, n) {
    var r = n(26),
      o = n(7)("iterator"),
      i = Array.prototype;
    e.exports = function (e) {
      return void 0 !== e && (r.Array === e || i[o] === e);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(13),
      o = n(25);
    e.exports = function (e, t, n) {
      t in e ? r.f(e, t, o(0, n)) : (e[t] = n);
    };
  },
  function (e, t, n) {
    var r = n(141),
      o = n(7)("iterator"),
      i = n(26);
    e.exports = n(5).getIteratorMethod = function (e) {
      if (null != e) return e[o] || e["@@iterator"] || i[r(e)];
    };
  },
  function (e, t, n) {
    var r = n(40),
      o = n(7)("toStringTag"),
      i =
        "Arguments" ==
        r(
          (function () {
            return arguments;
          })()
        );
    e.exports = function (e) {
      var t, n, a;
      return void 0 === e
        ? "Undefined"
        : null === e
        ? "Null"
        : "string" ==
          typeof (n = (function (e, t) {
            try {
              return e[t];
            } catch (e) {}
          })((t = Object(e)), o))
        ? n
        : i
        ? r(t)
        : "Object" == (a = r(t)) && "function" == typeof t.callee
        ? "Arguments"
        : a;
    };
  },
  function (e, t, n) {
    var r = n(7)("iterator"),
      o = !1;
    try {
      var i = [7][r]();
      (i.return = function () {
        o = !0;
      }),
        Array.from(i, function () {
          throw 2;
        });
    } catch (e) {}
    e.exports = function (e, t) {
      if (!t && !o) return !1;
      var n = !1;
      try {
        var i = [7],
          a = i[r]();
        (a.next = function () {
          return { done: (n = !0) };
        }),
          (i[r] = function () {
            return a;
          }),
          e(i);
      } catch (e) {}
      return n;
    };
  },
  function (e, t, n) {
    (function (t) {
      (function () {
        var n, r, o, i, a, u;
        "undefined" != typeof performance &&
        null !== performance &&
        performance.now
          ? (e.exports = function () {
              return performance.now();
            })
          : null != t && t.hrtime
          ? ((e.exports = function () {
              return (n() - a) / 1e6;
            }),
            (r = t.hrtime),
            (i = (n = function () {
              var e;
              return 1e9 * (e = r())[0] + e[1];
            })()),
            (u = 1e9 * t.uptime()),
            (a = i - u))
          : Date.now
          ? ((e.exports = function () {
              return Date.now() - o;
            }),
            (o = Date.now()))
          : ((e.exports = function () {
              return new Date().getTime() - o;
            }),
            (o = new Date().getTime()));
      }).call(this);
    }).call(this, n(144));
  },
  function (e, t) {
    var n,
      r,
      o = (e.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function u(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        n = i;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        r = a;
      }
    })();
    var l,
      c = [],
      s = !1,
      f = -1;
    function p() {
      s &&
        l &&
        ((s = !1), l.length ? (c = l.concat(c)) : (f = -1), c.length && d());
    }
    function d() {
      if (!s) {
        var e = u(p);
        s = !0;
        for (var t = c.length; t; ) {
          for (l = c, c = []; ++f < t; ) l && l[f].run();
          (f = -1), (t = c.length);
        }
        (l = null),
          (s = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === a || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function h(e, t) {
      (this.fun = e), (this.array = t);
    }
    function m() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      c.push(new h(e, t)), 1 !== c.length || s || u(d);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = m),
      (o.addListener = m),
      (o.once = m),
      (o.off = m),
      (o.removeListener = m),
      (o.removeAllListeners = m),
      (o.emit = m),
      (o.prependListener = m),
      (o.prependOnceListener = m),
      (o.listeners = function (e) {
        return [];
      }),
      (o.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    var r = n(146),
      o = n(147);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[e.i, o, ""]]);
    var i = { insert: "head", singleton: !1 };
    r(o, i);
    e.exports = o.locals || {};
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      i = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      a = [];
    function u(e) {
      for (var t = -1, n = 0; n < a.length; n++)
        if (a[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function l(e, t) {
      for (var n = {}, r = [], o = 0; o < e.length; o++) {
        var i = e[o],
          l = t.base ? i[0] + t.base : i[0],
          c = n[l] || 0,
          s = "".concat(l, " ").concat(c);
        n[l] = c + 1;
        var f = u(s),
          p = { css: i[1], media: i[2], sourceMap: i[3] };
        -1 !== f
          ? (a[f].references++, a[f].updater(p))
          : a.push({ identifier: s, updater: v(p, t), references: 1 }),
          r.push(s);
      }
      return r;
    }
    function c(e) {
      var t = document.createElement("style"),
        r = e.attributes || {};
      if (void 0 === r.nonce) {
        var o = n.nc;
        o && (r.nonce = o);
      }
      if (
        (Object.keys(r).forEach(function (e) {
          t.setAttribute(e, r[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var a = i(e.insert || "head");
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(t);
      }
      return t;
    }
    var s,
      f =
        ((s = []),
        function (e, t) {
          return (s[e] = t), s.filter(Boolean).join("\n");
        });
    function p(e, t, n, r) {
      var o = n
        ? ""
        : r.media
        ? "@media ".concat(r.media, " {").concat(r.css, "}")
        : r.css;
      if (e.styleSheet) e.styleSheet.cssText = f(t, o);
      else {
        var i = document.createTextNode(o),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }
    function d(e, t, n) {
      var r = n.css,
        o = n.media,
        i = n.sourceMap;
      if (
        (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
        i &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var h = null,
      m = 0;
    function v(e, t) {
      var n, r, o;
      if (t.singleton) {
        var i = m++;
        (n = h || (h = c(t))),
          (r = p.bind(null, n, i, !1)),
          (o = p.bind(null, n, i, !0));
      } else
        (n = c(t)),
          (r = d.bind(null, n, t)),
          (o = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        r(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else o();
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = o());
      var n = l((e = e || []), t);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var r = 0; r < n.length; r++) {
            var o = u(n[r]);
            a[o].references--;
          }
          for (var i = l(e, t), c = 0; c < n.length; c++) {
            var s = u(n[c]);
            0 === a[s].references && (a[s].updater(), a.splice(s, 1));
          }
          n = i;
        }
      };
    };
  },
  function (e, t, n) {
    (t = n(148)(!1)).push([
      e.i,
      ".rc-slider {\n  position: relative;\n  height: 14px;\n  padding: 5px 0;\n  width: 100%;\n  border-radius: 6px;\n  -ms-touch-action: none;\n      touch-action: none;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-rail {\n  position: absolute;\n  width: 100%;\n  background-color: #e9e9e9;\n  height: 4px;\n  border-radius: 6px;\n}\n.rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #625EEA;\n}\n.rc-slider-handle {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  cursor: -webkit-grab;\n  margin-top: -5px;\n  cursor: grab;\n  border-radius: 50%;\n  border: solid 2px #625EEA;\n  background-color: #fff;\n  -ms-touch-action: pan-x;\n      touch-action: pan-x;\n}\n.rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {\n  border-color: #3e38ff;\n  box-shadow: 0 0 0 5px #625EEA;\n}\n.rc-slider-handle:focus {\n  outline: none;\n}\n.rc-slider-handle-click-focused:focus {\n  border-color: #625EEA;\n  box-shadow: unset;\n}\n.rc-slider-handle:hover {\n  border-color: #3e38ff;\n}\n.rc-slider-handle:active {\n  border-color: #3e38ff;\n  box-shadow: 0 0 5px #3e38ff;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 18px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n}\n.rc-slider-dot {\n  position: absolute;\n  bottom: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.rc-slider-dot-active {\n  border-color: #625EEA;\n}\n.rc-slider-dot-reverse {\n  margin-right: -4px;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  box-shadow: none;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: not-allowed !important;\n}\n.rc-slider-vertical {\n  width: 14px;\n  height: 100%;\n  padding: 0 5px;\n}\n.rc-slider-vertical .rc-slider-rail {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-track {\n  left: 5px;\n  bottom: 0;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-handle {\n  margin-left: -5px;\n  -ms-touch-action: pan-y;\n      touch-action: pan-y;\n}\n.rc-slider-vertical .rc-slider-mark {\n  top: 0;\n  left: 18px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-step {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-dot {\n  left: 2px;\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:first-child {\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:last-child {\n  margin-bottom: -4px;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  animation-duration: .3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-duration: .3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  animation-name: rcSliderTooltipZoomDownIn;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  animation-name: rcSliderTooltipZoomDownOut;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  transform: scale(0, 0);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0);\n  }\n  100% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1);\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0);\n  }\n}\n.rc-slider-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip-hidden {\n  display: none;\n}\n.rc-slider-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-slider-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-slider-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n",
      "",
    ]),
      (e.exports = t);
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                r = e[3];
              if (!r) return n;
              if (t && "function" == typeof btoa) {
                var o =
                    ((a = r),
                    (u = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (l =
                      "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        u
                      )),
                    "/*# ".concat(l, " */")),
                  i = r.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [n].concat(i).concat([o]).join("\n");
              }
              var a, u, l;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function (e, n, r) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var o = {};
          if (r)
            for (var i = 0; i < this.length; i++) {
              var a = this[i][0];
              null != a && (o[a] = !0);
            }
          for (var u = 0; u < e.length; u++) {
            var l = [].concat(e[u]);
            (r && o[l[0]]) ||
              (n &&
                (l[2]
                  ? (l[2] = "".concat(n, " and ").concat(l[2]))
                  : (l[2] = n)),
              t.push(l));
          }
        }),
        t
      );
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "Range", function () {
        return ne;
      }),
      n.d(t, "Handle", function () {
        return A;
      }),
      n.d(t, "createSliderWithTooltip", function () {
        return Vn;
      });
    var r = n(2),
      o = n.n(r),
      i = n(8),
      a = n.n(i),
      u = n(9),
      l = n.n(u),
      c = n(6),
      s = n.n(c),
      f = n(10),
      p = n.n(f),
      d = n(0),
      h = n.n(d),
      m = n(17),
      v = n.n(m),
      y = n(1),
      g = n.n(y),
      b = function (e) {
        var t,
          n,
          r = e.className,
          i = e.included,
          a = e.vertical,
          u = e.style,
          l = e.length,
          c = e.offset,
          s = e.reverse;
        l < 0 && ((s = !s), (l = Math.abs(l)), (c = 100 - c));
        var f = a
            ? ((t = {}),
              g()(t, s ? "top" : "bottom", c + "%"),
              g()(t, s ? "bottom" : "top", "auto"),
              g()(t, "height", l + "%"),
              t)
            : ((n = {}),
              g()(n, s ? "right" : "left", c + "%"),
              g()(n, s ? "left" : "right", "auto"),
              g()(n, "width", l + "%"),
              n),
          p = o()({}, u, f);
        return i ? h.a.createElement("div", { className: r, style: p }) : null;
      },
      w = n(18),
      x = n.n(w),
      E = n(34),
      S = n.n(E),
      k = n(71),
      T = n.n(k),
      O = n(4),
      P = n.n(O);
    function _(e, t, n, r) {
      var o = P.a.unstable_batchedUpdates
        ? function (e) {
            P.a.unstable_batchedUpdates(n, e);
          }
        : n;
      return T()(e, t, o, r);
    }
    var C = n(3),
      M = n.n(C),
      N = function (e) {
        var t = e.prefixCls,
          n = e.vertical,
          r = e.reverse,
          i = e.marks,
          a = e.dots,
          u = e.step,
          l = e.included,
          c = e.lowerBound,
          s = e.upperBound,
          f = e.max,
          p = e.min,
          d = e.dotStyle,
          m = e.activeDotStyle,
          y = f - p,
          b = (function (e, t, n, r, o, i) {
            v()(
              !n || r > 0,
              "`Slider[step]` should be a positive number in order to make Slider[dots] work."
            );
            var a = Object.keys(t)
              .map(parseFloat)
              .sort(function (e, t) {
                return e - t;
              });
            if (n && r)
              for (var u = o; u <= i; u += r) -1 === a.indexOf(u) && a.push(u);
            return a;
          })(0, i, a, u, p, f).map(function (e) {
            var i,
              a = (Math.abs(e - p) / y) * 100 + "%",
              u = (!l && e === s) || (l && e <= s && e >= c),
              f = n
                ? o()({}, d, g()({}, r ? "top" : "bottom", a))
                : o()({}, d, g()({}, r ? "right" : "left", a));
            u && (f = o()({}, f, m));
            var v = M()(
              ((i = {}),
              g()(i, t + "-dot", !0),
              g()(i, t + "-dot-active", u),
              g()(i, t + "-dot-reverse", r),
              i)
            );
            return h.a.createElement("span", {
              className: v,
              style: f,
              key: e,
            });
          });
        return h.a.createElement("div", { className: t + "-step" }, b);
      },
      j = function (e) {
        var t = e.className,
          n = e.vertical,
          r = e.reverse,
          i = e.marks,
          a = e.included,
          u = e.upperBound,
          l = e.lowerBound,
          c = e.max,
          s = e.min,
          f = e.onClickLabel,
          p = Object.keys(i),
          d = c - s,
          m = p
            .map(parseFloat)
            .sort(function (e, t) {
              return e - t;
            })
            .map(function (e) {
              var c,
                p = i[e],
                m = "object" == typeof p && !h.a.isValidElement(p),
                v = m ? p.label : p;
              if (!v && 0 !== v) return null;
              var y = (!a && e === u) || (a && e <= u && e >= l),
                b = M()(
                  ((c = {}),
                  g()(c, t + "-text", !0),
                  g()(c, t + "-text-active", y),
                  c)
                ),
                w = g()(
                  { marginBottom: "-50%" },
                  r ? "top" : "bottom",
                  ((e - s) / d) * 100 + "%"
                ),
                x = g()(
                  {
                    transform: "translateX(" + (r ? "50%" : "-50%") + ")",
                    msTransform: "translateX(" + (r ? "50%" : "-50%") + ")",
                  },
                  r ? "right" : "left",
                  ((e - s) / d) * 100 + "%"
                ),
                E = n ? w : x,
                S = m ? o()({}, E, p.style) : E;
              return h.a.createElement(
                "span",
                {
                  className: b,
                  style: S,
                  key: e,
                  onMouseDown: function (t) {
                    return f(t, e);
                  },
                  onTouchStart: function (t) {
                    return f(t, e);
                  },
                },
                v
              );
            });
        return h.a.createElement("div", { className: t }, m);
      },
      A = (function (e) {
        function t() {
          var e, n, r, o;
          a()(this, t);
          for (var i = arguments.length, u = Array(i), l = 0; l < i; l++)
            u[l] = arguments[l];
          return (
            (n = r =
              s()(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(u)
                )
              )),
            (r.state = { clickFocused: !1 }),
            (r.setHandleRef = function (e) {
              r.handle = e;
            }),
            (r.handleMouseUp = function () {
              document.activeElement === r.handle && r.setClickFocus(!0);
            }),
            (r.handleMouseDown = function () {
              r.focus();
            }),
            (r.handleBlur = function () {
              r.setClickFocus(!1);
            }),
            (r.handleKeyDown = function () {
              r.setClickFocus(!1);
            }),
            (o = n),
            s()(r, o)
          );
        }
        return (
          p()(t, e),
          l()(t, [
            {
              key: "componentDidMount",
              value: function () {
                this.onMouseUpListener = _(
                  document,
                  "mouseup",
                  this.handleMouseUp
                );
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.onMouseUpListener && this.onMouseUpListener.remove();
              },
            },
            {
              key: "setClickFocus",
              value: function (e) {
                this.setState({ clickFocused: e });
              },
            },
            {
              key: "clickFocus",
              value: function () {
                this.setClickFocus(!0), this.focus();
              },
            },
            {
              key: "focus",
              value: function () {
                this.handle.focus();
              },
            },
            {
              key: "blur",
              value: function () {
                this.handle.blur();
              },
            },
            {
              key: "render",
              value: function () {
                var e,
                  t,
                  n = this.props,
                  r = n.prefixCls,
                  i = n.vertical,
                  a = n.reverse,
                  u = n.offset,
                  l = n.style,
                  c = n.disabled,
                  s = n.min,
                  f = n.max,
                  p = n.value,
                  d = n.tabIndex,
                  m = n.ariaLabel,
                  v = n.ariaLabelledBy,
                  y = n.ariaValueTextFormatter,
                  b = x()(n, [
                    "prefixCls",
                    "vertical",
                    "reverse",
                    "offset",
                    "style",
                    "disabled",
                    "min",
                    "max",
                    "value",
                    "tabIndex",
                    "ariaLabel",
                    "ariaLabelledBy",
                    "ariaValueTextFormatter",
                  ]),
                  w = M()(
                    this.props.className,
                    g()(
                      {},
                      r + "-handle-click-focused",
                      this.state.clickFocused
                    )
                  ),
                  E = i
                    ? ((e = {}),
                      g()(e, a ? "top" : "bottom", u + "%"),
                      g()(e, a ? "bottom" : "top", "auto"),
                      g()(e, "transform", a ? null : "translateY(+50%)"),
                      e)
                    : ((t = {}),
                      g()(t, a ? "right" : "left", u + "%"),
                      g()(t, a ? "left" : "right", "auto"),
                      g()(
                        t,
                        "transform",
                        "translateX(" + (a ? "+" : "-") + "50%)"
                      ),
                      t),
                  S = o()({}, l, E),
                  k = d || 0;
                (c || null === d) && (k = null);
                var T = void 0;
                return (
                  y && (T = y(p)),
                  h.a.createElement(
                    "div",
                    o()({ ref: this.setHandleRef, tabIndex: k }, b, {
                      className: w,
                      style: S,
                      onBlur: this.handleBlur,
                      onKeyDown: this.handleKeyDown,
                      onMouseDown: this.handleMouseDown,
                      role: "slider",
                      "aria-valuemin": s,
                      "aria-valuemax": f,
                      "aria-valuenow": p,
                      "aria-disabled": !!c,
                      "aria-label": m,
                      "aria-labelledby": v,
                      "aria-valuetext": T,
                    })
                  )
                );
              },
            },
          ]),
          t
        );
      })(h.a.Component),
      R = n(23),
      D = n.n(R),
      I = {
        MAC_ENTER: 3,
        BACKSPACE: 8,
        TAB: 9,
        NUM_CENTER: 12,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PRINT_SCREEN: 44,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        QUESTION_MARK: 63,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        META: 91,
        WIN_KEY_RIGHT: 92,
        CONTEXT_MENU: 93,
        NUM_ZERO: 96,
        NUM_ONE: 97,
        NUM_TWO: 98,
        NUM_THREE: 99,
        NUM_FOUR: 100,
        NUM_FIVE: 101,
        NUM_SIX: 102,
        NUM_SEVEN: 103,
        NUM_EIGHT: 104,
        NUM_NINE: 105,
        NUM_MULTIPLY: 106,
        NUM_PLUS: 107,
        NUM_MINUS: 109,
        NUM_PERIOD: 110,
        NUM_DIVISION: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUMLOCK: 144,
        SEMICOLON: 186,
        DASH: 189,
        EQUALS: 187,
        COMMA: 188,
        PERIOD: 190,
        SLASH: 191,
        APOSTROPHE: 192,
        SINGLE_QUOTE: 222,
        OPEN_SQUARE_BRACKET: 219,
        BACKSLASH: 220,
        CLOSE_SQUARE_BRACKET: 221,
        WIN_KEY: 224,
        MAC_FF_META: 224,
        WIN_IME: 229,
        isTextModifyingKeyEvent: function (e) {
          var t = e.keyCode;
          if (
            (e.altKey && !e.ctrlKey) ||
            e.metaKey ||
            (t >= I.F1 && t <= I.F12)
          )
            return !1;
          switch (t) {
            case I.ALT:
            case I.CAPS_LOCK:
            case I.CONTEXT_MENU:
            case I.CTRL:
            case I.DOWN:
            case I.END:
            case I.ESC:
            case I.HOME:
            case I.INSERT:
            case I.LEFT:
            case I.MAC_FF_META:
            case I.META:
            case I.NUMLOCK:
            case I.NUM_CENTER:
            case I.PAGE_DOWN:
            case I.PAGE_UP:
            case I.PAUSE:
            case I.PRINT_SCREEN:
            case I.RIGHT:
            case I.SHIFT:
            case I.UP:
            case I.WIN_KEY:
            case I.WIN_KEY_RIGHT:
              return !1;
            default:
              return !0;
          }
        },
        isCharacterKey: function (e) {
          if (e >= I.ZERO && e <= I.NINE) return !0;
          if (e >= I.NUM_ZERO && e <= I.NUM_MULTIPLY) return !0;
          if (e >= I.A && e <= I.Z) return !0;
          if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e)
            return !0;
          switch (e) {
            case I.SPACE:
            case I.QUESTION_MARK:
            case I.NUM_PLUS:
            case I.NUM_MINUS:
            case I.NUM_PERIOD:
            case I.NUM_DIVISION:
            case I.SEMICOLON:
            case I.DASH:
            case I.EQUALS:
            case I.COMMA:
            case I.PERIOD:
            case I.SLASH:
            case I.APOSTROPHE:
            case I.SINGLE_QUOTE:
            case I.OPEN_SQUARE_BRACKET:
            case I.BACKSLASH:
            case I.CLOSE_SQUARE_BRACKET:
              return !0;
            default:
              return !1;
          }
        },
      },
      F = I;
    function L(e, t) {
      try {
        return Object.keys(t).some(function (n) {
          return e.target === Object(O.findDOMNode)(t[n]);
        });
      } catch (e) {
        return !1;
      }
    }
    function z(e, t) {
      var n = t.min,
        r = t.max;
      return e < n || e > r;
    }
    function U(e) {
      return (
        e.touches.length > 1 ||
        ("touchend" === e.type.toLowerCase() && e.touches.length > 0)
      );
    }
    function H(e, t) {
      var n = t.marks,
        r = t.step,
        o = t.min,
        i = t.max,
        a = Object.keys(n).map(parseFloat);
      if (null !== r) {
        var u = Math.floor((i - o) / r),
          l = Math.min((e - o) / r, u),
          c = Math.round(l) * r + o;
        a.push(c);
      }
      var s = a.map(function (t) {
        return Math.abs(e - t);
      });
      return a[s.indexOf(Math.min.apply(Math, D()(s)))];
    }
    function V(e, t) {
      return e ? t.clientY : t.pageX;
    }
    function B(e, t) {
      return e ? t.touches[0].clientY : t.touches[0].pageX;
    }
    function W(e, t) {
      var n = t.getBoundingClientRect();
      return e
        ? n.top + 0.5 * n.height
        : window.pageXOffset + n.left + 0.5 * n.width;
    }
    function $(e, t) {
      var n = t.max,
        r = t.min;
      return e <= r ? r : e >= n ? n : e;
    }
    function q(e, t) {
      var n = t.step,
        r = isFinite(H(e, t)) ? H(e, t) : 0;
      return null === n
        ? r
        : parseFloat(
            r.toFixed(
              (function (e) {
                var t = e.toString(),
                  n = 0;
                return (
                  t.indexOf(".") >= 0 && (n = t.length - t.indexOf(".") - 1), n
                );
              })(n)
            )
          );
    }
    function K(e) {
      e.stopPropagation(), e.preventDefault();
    }
    function Q(e, t, n) {
      var r = "increase";
      switch (e.keyCode) {
        case F.UP:
          r = t && n ? "decrease" : "increase";
          break;
        case F.RIGHT:
          r = !t && n ? "decrease" : "increase";
          break;
        case F.DOWN:
          r = t && n ? "increase" : "decrease";
          break;
        case F.LEFT:
          r = !t && n ? "increase" : "decrease";
          break;
        case F.END:
          return function (e, t) {
            return t.max;
          };
        case F.HOME:
          return function (e, t) {
            return t.min;
          };
        case F.PAGE_UP:
          return function (e, t) {
            return e + 2 * t.step;
          };
        case F.PAGE_DOWN:
          return function (e, t) {
            return e - 2 * t.step;
          };
        default:
          return;
      }
      return function (e, t) {
        return (function (e, t, n) {
          var r = {
              increase: function (e, t) {
                return e + t;
              },
              decrease: function (e, t) {
                return e - t;
              },
            },
            o = r[e](Object.keys(n.marks).indexOf(JSON.stringify(t)), 1),
            i = Object.keys(n.marks)[o];
          return n.step
            ? r[e](t, n.step)
            : Object.keys(n.marks).length && n.marks[i]
            ? n.marks[i]
            : t;
        })(r, e, t);
      };
    }
    function G() {}
    function Y(e) {
      var t, n;
      return (
        (n = t =
          (function (e) {
            function t(e) {
              a()(this, t);
              var n = s()(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
              );
              (n.onMouseDown = function (e) {
                if (0 === e.button) {
                  var t = n.props.vertical,
                    r = V(t, e);
                  if (L(e, n.handlesRefs)) {
                    var o = W(t, e.target);
                    (n.dragOffset = r - o), (r = o);
                  } else n.dragOffset = 0;
                  n.removeDocumentEvents(),
                    n.onStart(r),
                    n.addDocumentMouseEvents();
                }
              }),
                (n.onTouchStart = function (e) {
                  if (!U(e)) {
                    var t = n.props.vertical,
                      r = B(t, e);
                    if (L(e, n.handlesRefs)) {
                      var o = W(t, e.target);
                      (n.dragOffset = r - o), (r = o);
                    } else n.dragOffset = 0;
                    n.onStart(r), n.addDocumentTouchEvents(), K(e);
                  }
                }),
                (n.onFocus = function (e) {
                  var t = n.props,
                    r = t.onFocus,
                    o = t.vertical;
                  if (L(e, n.handlesRefs)) {
                    var i = W(o, e.target);
                    (n.dragOffset = 0), n.onStart(i), K(e), r && r(e);
                  }
                }),
                (n.onBlur = function (e) {
                  var t = n.props.onBlur;
                  n.onEnd(), t && t(e);
                }),
                (n.onMouseUp = function () {
                  n.handlesRefs[n.prevMovedHandleIndex] &&
                    n.handlesRefs[n.prevMovedHandleIndex].clickFocus();
                }),
                (n.onMouseMove = function (e) {
                  if (n.sliderRef) {
                    var t = V(n.props.vertical, e);
                    n.onMove(e, t - n.dragOffset);
                  } else n.onEnd();
                }),
                (n.onTouchMove = function (e) {
                  if (!U(e) && n.sliderRef) {
                    var t = B(n.props.vertical, e);
                    n.onMove(e, t - n.dragOffset);
                  } else n.onEnd();
                }),
                (n.onKeyDown = function (e) {
                  n.sliderRef && L(e, n.handlesRefs) && n.onKeyboard(e);
                }),
                (n.onClickMarkLabel = function (e, t) {
                  e.stopPropagation(),
                    n.onChange({ value: t }),
                    n.setState({ value: t }, function () {
                      return n.onEnd(!0);
                    });
                }),
                (n.saveSlider = function (e) {
                  n.sliderRef = e;
                });
              var r = e.step,
                o = e.max,
                i = e.min,
                u = !isFinite(o - i) || (o - i) % r == 0;
              return (
                v()(
                  !r || Math.floor(r) !== r || u,
                  "Slider[max] - Slider[min] (%s) should be a multiple of Slider[step] (%s)",
                  o - i,
                  r
                ),
                (n.handlesRefs = {}),
                n
              );
            }
            return (
              p()(t, e),
              l()(t, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.document =
                      this.sliderRef && this.sliderRef.ownerDocument;
                    var e = this.props,
                      t = e.autoFocus,
                      n = e.disabled;
                    t && !n && this.focus();
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    S()(
                      t.prototype.__proto__ ||
                        Object.getPrototypeOf(t.prototype),
                      "componentWillUnmount",
                      this
                    ) &&
                      S()(
                        t.prototype.__proto__ ||
                          Object.getPrototypeOf(t.prototype),
                        "componentWillUnmount",
                        this
                      ).call(this),
                      this.removeDocumentEvents();
                  },
                },
                {
                  key: "getSliderStart",
                  value: function () {
                    var e = this.sliderRef,
                      t = this.props,
                      n = t.vertical,
                      r = t.reverse,
                      o = e.getBoundingClientRect();
                    return n
                      ? r
                        ? o.bottom
                        : o.top
                      : window.pageXOffset + (r ? o.right : o.left);
                  },
                },
                {
                  key: "getSliderLength",
                  value: function () {
                    var e = this.sliderRef;
                    if (!e) return 0;
                    var t = e.getBoundingClientRect();
                    return this.props.vertical ? t.height : t.width;
                  },
                },
                {
                  key: "addDocumentTouchEvents",
                  value: function () {
                    (this.onTouchMoveListener = _(
                      this.document,
                      "touchmove",
                      this.onTouchMove
                    )),
                      (this.onTouchUpListener = _(
                        this.document,
                        "touchend",
                        this.onEnd
                      ));
                  },
                },
                {
                  key: "addDocumentMouseEvents",
                  value: function () {
                    (this.onMouseMoveListener = _(
                      this.document,
                      "mousemove",
                      this.onMouseMove
                    )),
                      (this.onMouseUpListener = _(
                        this.document,
                        "mouseup",
                        this.onEnd
                      ));
                  },
                },
                {
                  key: "removeDocumentEvents",
                  value: function () {
                    this.onTouchMoveListener &&
                      this.onTouchMoveListener.remove(),
                      this.onTouchUpListener && this.onTouchUpListener.remove(),
                      this.onMouseMoveListener &&
                        this.onMouseMoveListener.remove(),
                      this.onMouseUpListener && this.onMouseUpListener.remove();
                  },
                },
                {
                  key: "focus",
                  value: function () {
                    this.props.disabled || this.handlesRefs[0].focus();
                  },
                },
                {
                  key: "blur",
                  value: function () {
                    var e = this;
                    this.props.disabled ||
                      Object.keys(this.handlesRefs).forEach(function (t) {
                        e.handlesRefs[t] &&
                          e.handlesRefs[t].blur &&
                          e.handlesRefs[t].blur();
                      });
                  },
                },
                {
                  key: "calcValue",
                  value: function (e) {
                    var t = this.props,
                      n = t.vertical,
                      r = t.min,
                      o = t.max,
                      i = Math.abs(Math.max(e, 0) / this.getSliderLength());
                    return n ? (1 - i) * (o - r) + r : i * (o - r) + r;
                  },
                },
                {
                  key: "calcValueByPos",
                  value: function (e) {
                    var t =
                      (this.props.reverse ? -1 : 1) *
                      (e - this.getSliderStart());
                    return this.trimAlignValue(this.calcValue(t));
                  },
                },
                {
                  key: "calcOffset",
                  value: function (e) {
                    var t = this.props,
                      n = t.min,
                      r = (e - n) / (t.max - n);
                    return Math.max(0, 100 * r);
                  },
                },
                {
                  key: "saveHandle",
                  value: function (e, t) {
                    this.handlesRefs[e] = t;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e,
                      n = this.props,
                      r = n.prefixCls,
                      i = n.className,
                      a = n.marks,
                      u = n.dots,
                      l = n.step,
                      c = n.included,
                      s = n.disabled,
                      f = n.vertical,
                      p = n.reverse,
                      d = n.min,
                      m = n.max,
                      v = n.children,
                      y = n.maximumTrackStyle,
                      b = n.style,
                      w = n.railStyle,
                      x = n.dotStyle,
                      E = n.activeDotStyle,
                      k = S()(
                        t.prototype.__proto__ ||
                          Object.getPrototypeOf(t.prototype),
                        "render",
                        this
                      ).call(this),
                      T = k.tracks,
                      O = k.handles,
                      P = M()(
                        r,
                        ((e = {}),
                        g()(e, r + "-with-marks", Object.keys(a).length),
                        g()(e, r + "-disabled", s),
                        g()(e, r + "-vertical", f),
                        g()(e, i, i),
                        e)
                      );
                    return h.a.createElement(
                      "div",
                      {
                        ref: this.saveSlider,
                        className: P,
                        onTouchStart: s ? G : this.onTouchStart,
                        onMouseDown: s ? G : this.onMouseDown,
                        onMouseUp: s ? G : this.onMouseUp,
                        onKeyDown: s ? G : this.onKeyDown,
                        onFocus: s ? G : this.onFocus,
                        onBlur: s ? G : this.onBlur,
                        style: b,
                      },
                      h.a.createElement("div", {
                        className: r + "-rail",
                        style: o()({}, y, w),
                      }),
                      T,
                      h.a.createElement(N, {
                        prefixCls: r,
                        vertical: f,
                        reverse: p,
                        marks: a,
                        dots: u,
                        step: l,
                        included: c,
                        lowerBound: this.getLowerBound(),
                        upperBound: this.getUpperBound(),
                        max: m,
                        min: d,
                        dotStyle: x,
                        activeDotStyle: E,
                      }),
                      O,
                      h.a.createElement(j, {
                        className: r + "-mark",
                        onClickLabel: s ? G : this.onClickMarkLabel,
                        vertical: f,
                        marks: a,
                        included: c,
                        lowerBound: this.getLowerBound(),
                        upperBound: this.getUpperBound(),
                        max: m,
                        min: d,
                        reverse: p,
                      }),
                      v
                    );
                  },
                },
              ]),
              t
            );
          })(e)),
        (t.displayName = "ComponentEnhancer(" + e.displayName + ")"),
        (t.defaultProps = o()({}, e.defaultProps, {
          prefixCls: "rc-slider",
          className: "",
          min: 0,
          max: 100,
          step: 1,
          marks: {},
          handle: function (e) {
            var t = e.index,
              n = x()(e, ["index"]);
            return (
              delete n.dragging,
              null === n.value
                ? null
                : h.a.createElement(A, o()({}, n, { key: t }))
            );
          },
          onBeforeChange: G,
          onChange: G,
          onAfterChange: G,
          included: !0,
          disabled: !1,
          dots: !1,
          vertical: !1,
          reverse: !1,
          trackStyle: [{}],
          handleStyle: [{}],
          railStyle: {},
          dotStyle: {},
          activeDotStyle: {},
        })),
        n
      );
    }
    var X = Y(
        (function (e) {
          function t(e) {
            a()(this, t);
            var n = s()(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
            );
            n.onEnd = function (e) {
              var t = n.state.dragging;
              n.removeDocumentEvents(),
                (t || e) && n.props.onAfterChange(n.getValue()),
                n.setState({ dragging: !1 });
            };
            var r = void 0 !== e.defaultValue ? e.defaultValue : e.min,
              o = void 0 !== e.value ? e.value : r;
            return (
              (n.state = { value: n.trimAlignValue(o), dragging: !1 }),
              v()(
                !("minimumTrackStyle" in e),
                "minimumTrackStyle will be deprecated, please use trackStyle instead."
              ),
              v()(
                !("maximumTrackStyle" in e),
                "maximumTrackStyle will be deprecated, please use railStyle instead."
              ),
              n
            );
          }
          return (
            p()(t, e),
            l()(t, [
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  if (
                    "value" in this.props ||
                    "min" in this.props ||
                    "max" in this.props
                  ) {
                    var n = this.props,
                      r = n.value,
                      o = n.onChange,
                      i = void 0 !== r ? r : t.value,
                      a = this.trimAlignValue(i, this.props);
                    a !== t.value &&
                      (this.setState({ value: a }), z(i, this.props) && o(a));
                  }
                },
              },
              {
                key: "onChange",
                value: function (e) {
                  var t = this.props,
                    n = !("value" in t),
                    r =
                      e.value > this.props.max
                        ? o()({}, e, { value: this.props.max })
                        : e;
                  n && this.setState(r);
                  var i = r.value;
                  t.onChange(i);
                },
              },
              {
                key: "onStart",
                value: function (e) {
                  this.setState({ dragging: !0 });
                  var t = this.props,
                    n = this.getValue();
                  t.onBeforeChange(n);
                  var r = this.calcValueByPos(e);
                  (this.startValue = r),
                    (this.startPosition = e),
                    r !== n &&
                      ((this.prevMovedHandleIndex = 0),
                      this.onChange({ value: r }));
                },
              },
              {
                key: "onMove",
                value: function (e, t) {
                  K(e);
                  var n = this.state.value,
                    r = this.calcValueByPos(t);
                  r !== n && this.onChange({ value: r });
                },
              },
              {
                key: "onKeyboard",
                value: function (e) {
                  var t = this.props,
                    n = t.reverse,
                    r = Q(e, t.vertical, n);
                  if (r) {
                    K(e);
                    var o = this.state.value,
                      i = r(o, this.props),
                      a = this.trimAlignValue(i);
                    if (a === o) return;
                    this.onChange({ value: a }),
                      this.props.onAfterChange(a),
                      this.onEnd();
                  }
                },
              },
              {
                key: "getValue",
                value: function () {
                  return this.state.value;
                },
              },
              {
                key: "getLowerBound",
                value: function () {
                  return this.props.min;
                },
              },
              {
                key: "getUpperBound",
                value: function () {
                  return this.state.value;
                },
              },
              {
                key: "trimAlignValue",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (null === e) return null;
                  var n = o()({}, this.props, t),
                    r = $(e, n);
                  return q(r, n);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.prefixCls,
                    r = t.vertical,
                    i = t.included,
                    a = t.disabled,
                    u = t.minimumTrackStyle,
                    l = t.trackStyle,
                    c = t.handleStyle,
                    s = t.tabIndex,
                    f = t.ariaLabelForHandle,
                    p = t.ariaLabelledByForHandle,
                    d = t.ariaValueTextFormatterForHandle,
                    m = t.min,
                    v = t.max,
                    y = t.startPoint,
                    g = t.reverse,
                    w = t.handle,
                    x = this.state,
                    E = x.value,
                    S = x.dragging,
                    k = this.calcOffset(E),
                    T = w({
                      className: n + "-handle",
                      prefixCls: n,
                      vertical: r,
                      offset: k,
                      value: E,
                      dragging: S,
                      disabled: a,
                      min: m,
                      max: v,
                      reverse: g,
                      index: 0,
                      tabIndex: s,
                      ariaLabel: f,
                      ariaLabelledBy: p,
                      ariaValueTextFormatter: d,
                      style: c[0] || c,
                      ref: function (t) {
                        return e.saveHandle(0, t);
                      },
                    }),
                    O = void 0 !== y ? this.calcOffset(y) : 0,
                    P = l[0] || l;
                  return {
                    tracks: h.a.createElement(b, {
                      className: n + "-track",
                      vertical: r,
                      included: i,
                      offset: O,
                      reverse: g,
                      length: k - O,
                      style: o()({}, u, P),
                    }),
                    handles: T,
                  };
                },
              },
            ]),
            t
          );
        })(h.a.Component)
      ),
      Z = n(72),
      J = n.n(Z),
      ee = function (e) {
        var t = e.value,
          n = e.handle,
          r = e.bounds,
          o = e.props,
          i = o.allowCross,
          a = o.pushable,
          u = Number(a),
          l = $(t, o),
          c = l;
        return (
          i ||
            null == n ||
            void 0 === r ||
            (n > 0 && l <= r[n - 1] + u && (c = r[n - 1] + u),
            n < r.length - 1 && l >= r[n + 1] - u && (c = r[n + 1] - u)),
          q(c, o)
        );
      },
      te = (function (e) {
        function t(e) {
          a()(this, t);
          var n = s()(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          n.onEnd = function (e) {
            var t = n.state.handle;
            n.removeDocumentEvents(),
              (null !== t || e) && n.props.onAfterChange(n.getValue()),
              n.setState({ handle: null });
          };
          var r = e.count,
            o = e.min,
            i = e.max,
            u = Array.apply(void 0, D()(Array(r + 1))).map(function () {
              return o;
            }),
            l = "defaultValue" in e ? e.defaultValue : u,
            c = (void 0 !== e.value ? e.value : l).map(function (t, n) {
              return ee({ value: t, handle: n, props: e });
            }),
            f = c[0] === i ? 0 : c.length - 1;
          return (n.state = { handle: null, recent: f, bounds: c }), n;
        }
        return (
          p()(t, e),
          l()(
            t,
            [
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  var n = this;
                  if (
                    ("value" in this.props ||
                      "min" in this.props ||
                      "max" in this.props) &&
                    (this.props.min !== e.min ||
                      this.props.max !== e.max ||
                      !J()(this.props.value, e.value))
                  ) {
                    var r = this.props,
                      o = r.onChange,
                      i = r.value || t.bounds;
                    if (
                      i.some(function (e) {
                        return z(e, n.props);
                      })
                    )
                      o(
                        i.map(function (e) {
                          return $(e, n.props);
                        })
                      );
                  }
                },
              },
              {
                key: "onChange",
                value: function (e) {
                  var t = this.props;
                  if (!("value" in t)) this.setState(e);
                  else {
                    var n = {};
                    ["handle", "recent"].forEach(function (t) {
                      void 0 !== e[t] && (n[t] = e[t]);
                    }),
                      Object.keys(n).length && this.setState(n);
                  }
                  var r = o()({}, this.state, e).bounds;
                  t.onChange(r);
                },
              },
              {
                key: "onStart",
                value: function (e) {
                  var t = this.props,
                    n = this.state,
                    r = this.getValue();
                  t.onBeforeChange(r);
                  var o = this.calcValueByPos(e);
                  (this.startValue = o), (this.startPosition = e);
                  var i = this.getClosestBound(o);
                  if (
                    ((this.prevMovedHandleIndex = this.getBoundNeedMoving(
                      o,
                      i
                    )),
                    this.setState({
                      handle: this.prevMovedHandleIndex,
                      recent: this.prevMovedHandleIndex,
                    }),
                    o !== r[this.prevMovedHandleIndex])
                  ) {
                    var a = [].concat(D()(n.bounds));
                    (a[this.prevMovedHandleIndex] = o),
                      this.onChange({ bounds: a });
                  }
                },
              },
              {
                key: "onMove",
                value: function (e, t) {
                  K(e);
                  var n = this.state,
                    r = this.calcValueByPos(t);
                  r !== n.bounds[n.handle] && this.moveTo(r);
                },
              },
              {
                key: "onKeyboard",
                value: function (e) {
                  var t = this.props,
                    n = t.reverse,
                    r = Q(e, t.vertical, n);
                  if (r) {
                    K(e);
                    var o = this.state,
                      i = this.props,
                      a = o.bounds,
                      u = o.handle,
                      l = a[null === u ? o.recent : u],
                      c = r(l, i),
                      s = ee({
                        value: c,
                        handle: u,
                        bounds: o.bounds,
                        props: i,
                      });
                    if (s === l) return;
                    this.moveTo(s, !0);
                  }
                },
              },
              {
                key: "getValue",
                value: function () {
                  return this.state.bounds;
                },
              },
              {
                key: "getClosestBound",
                value: function (e) {
                  for (
                    var t = this.state.bounds, n = 0, r = 1;
                    r < t.length - 1;
                    ++r
                  )
                    e >= t[r] && (n = r);
                  return (
                    Math.abs(t[n + 1] - e) < Math.abs(t[n] - e) && (n += 1), n
                  );
                },
              },
              {
                key: "getBoundNeedMoving",
                value: function (e, t) {
                  var n = this.state,
                    r = n.bounds,
                    o = n.recent,
                    i = t,
                    a = r[t + 1] === r[t];
                  return (
                    a && r[o] === r[t] && (i = o),
                    a && e !== r[t + 1] && (i = e < r[t + 1] ? t : t + 1),
                    i
                  );
                },
              },
              {
                key: "getLowerBound",
                value: function () {
                  return this.state.bounds[0];
                },
              },
              {
                key: "getUpperBound",
                value: function () {
                  var e = this.state.bounds;
                  return e[e.length - 1];
                },
              },
              {
                key: "getPoints",
                value: function () {
                  var e = this.props,
                    t = e.marks,
                    n = e.step,
                    r = e.min,
                    i = e.max,
                    a = this._getPointsCache;
                  if (!a || a.marks !== t || a.step !== n) {
                    var u = o()({}, t);
                    if (null !== n) for (var l = r; l <= i; l += n) u[l] = l;
                    var c = Object.keys(u).map(parseFloat);
                    c.sort(function (e, t) {
                      return e - t;
                    }),
                      (this._getPointsCache = { marks: t, step: n, points: c });
                  }
                  return this._getPointsCache.points;
                },
              },
              {
                key: "moveTo",
                value: function (e, t) {
                  var n = this,
                    r = this.state,
                    o = this.props,
                    i = [].concat(D()(r.bounds)),
                    a = null === r.handle ? r.recent : r.handle;
                  i[a] = e;
                  var u = a;
                  !1 !== o.pushable
                    ? this.pushSurroundingHandles(i, u)
                    : o.allowCross &&
                      (i.sort(function (e, t) {
                        return e - t;
                      }),
                      (u = i.indexOf(e))),
                    this.onChange({ recent: u, handle: u, bounds: i }),
                    t &&
                      (this.props.onAfterChange(i),
                      this.setState({}, function () {
                        n.handlesRefs[u].focus();
                      }),
                      this.onEnd());
                },
              },
              {
                key: "pushSurroundingHandles",
                value: function (e, t) {
                  var n = e[t],
                    r = this.props.pushable;
                  r = Number(r);
                  var o = 0;
                  if (
                    (e[t + 1] - n < r && (o = 1),
                    n - e[t - 1] < r && (o = -1),
                    0 !== o)
                  ) {
                    var i = t + o,
                      a = o * (e[i] - n);
                    this.pushHandle(e, i, o, r - a) || (e[t] = e[i] - o * r);
                  }
                },
              },
              {
                key: "pushHandle",
                value: function (e, t, n, r) {
                  for (var o = e[t], i = e[t]; n * (i - o) < r; ) {
                    if (!this.pushHandleOnePoint(e, t, n))
                      return (e[t] = o), !1;
                    i = e[t];
                  }
                  return !0;
                },
              },
              {
                key: "pushHandleOnePoint",
                value: function (e, t, n) {
                  var r = this.getPoints(),
                    o = r.indexOf(e[t]) + n;
                  if (o >= r.length || o < 0) return !1;
                  var i = t + n,
                    a = r[o],
                    u = this.props.pushable,
                    l = n * (e[i] - a);
                  return !!this.pushHandle(e, i, n, u - l) && ((e[t] = a), !0);
                },
              },
              {
                key: "trimAlignValue",
                value: function (e) {
                  var t = this.state,
                    n = t.handle,
                    r = t.bounds;
                  return ee({
                    value: e,
                    handle: n,
                    bounds: r,
                    props: this.props,
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.handle,
                    r = t.bounds,
                    o = this.props,
                    i = o.prefixCls,
                    a = o.vertical,
                    u = o.included,
                    l = o.disabled,
                    c = o.min,
                    s = o.max,
                    f = o.reverse,
                    p = o.handle,
                    d = o.trackStyle,
                    m = o.handleStyle,
                    v = o.tabIndex,
                    y = o.ariaLabelGroupForHandles,
                    w = o.ariaLabelledByGroupForHandles,
                    x = o.ariaValueTextFormatterGroupForHandles,
                    E = r.map(function (t) {
                      return e.calcOffset(t);
                    }),
                    S = i + "-handle",
                    k = r.map(function (t, r) {
                      var o,
                        u = v[r] || 0;
                      (l || null === v[r]) && (u = null);
                      var d = n === r;
                      return p({
                        className: M()(
                          ((o = {}),
                          g()(o, S, !0),
                          g()(o, S + "-" + (r + 1), !0),
                          g()(o, S + "-dragging", d),
                          o)
                        ),
                        prefixCls: i,
                        vertical: a,
                        dragging: d,
                        offset: E[r],
                        value: t,
                        index: r,
                        tabIndex: u,
                        min: c,
                        max: s,
                        reverse: f,
                        disabled: l,
                        style: m[r],
                        ref: function (t) {
                          return e.saveHandle(r, t);
                        },
                        ariaLabel: y[r],
                        ariaLabelledBy: w[r],
                        ariaValueTextFormatter: x[r],
                      });
                    });
                  return {
                    tracks: r.slice(0, -1).map(function (e, t) {
                      var n,
                        r = t + 1,
                        o = M()(
                          ((n = {}),
                          g()(n, i + "-track", !0),
                          g()(n, i + "-track-" + r, !0),
                          n)
                        );
                      return h.a.createElement(b, {
                        className: o,
                        vertical: a,
                        reverse: f,
                        included: u,
                        offset: E[r - 1],
                        length: E[r] - E[r - 1],
                        style: d[t],
                        key: r,
                      });
                    }),
                    handles: k,
                  };
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (e, t) {
                  if ("value" in e || "min" in e || "max" in e) {
                    var n = (e.value || t.bounds).map(function (n, r) {
                      return ee({
                        value: n,
                        handle: r,
                        bounds: t.bounds,
                        props: e,
                      });
                    });
                    return n.length === t.bounds.length &&
                      n.every(function (e, n) {
                        return e === t.bounds[n];
                      })
                      ? null
                      : o()({}, t, { bounds: n });
                  }
                  return null;
                },
              },
            ]
          ),
          t
        );
      })(h.a.Component);
    (te.displayName = "Range"),
      (te.defaultProps = {
        count: 1,
        allowCross: !0,
        pushable: !1,
        tabIndex: [],
        ariaLabelGroupForHandles: [],
        ariaLabelledByGroupForHandles: [],
        ariaValueTextFormatterGroupForHandles: [],
      });
    var ne = Y(te);
    function re(e, t) {
      for (var n = t; n; ) {
        if (n === e) return !0;
        n = n.parentNode;
      }
      return !1;
    }
    function oe(e) {
      return e instanceof HTMLElement ? e : P.a.findDOMNode(e);
    }
    function ie(e) {
      return (ie =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ae(e, t) {
      "function" == typeof e
        ? e(t)
        : "object" === ie(e) && e && "current" in e && (e.current = t);
    }
    function ue() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (e) {
        t.forEach(function (t) {
          ae(t, e);
        });
      };
    }
    var le = n(27),
      ce = n.n(le);
    function se(e) {
      return (se =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function fe(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function pe(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function de(e, t) {
      return !t || ("object" !== se(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function he() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function me(e) {
      return (me = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ve(e, t) {
      return (ve =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var ye = (function (e) {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && ve(e, t);
      })(a, e);
      var t,
        n,
        r,
        o,
        i =
          ((t = a),
          function () {
            var e,
              n = me(t);
            if (he()) {
              var r = me(this).constructor;
              e = Reflect.construct(n, arguments, r);
            } else e = n.apply(this, arguments);
            return de(this, e);
          });
      function a() {
        return fe(this, a), i.apply(this, arguments);
      }
      return (
        (n = a),
        (r = [
          {
            key: "componentDidMount",
            value: function () {
              this.createContainer();
            },
          },
          {
            key: "componentDidUpdate",
            value: function (e) {
              var t = this.props.didUpdate;
              t && t(e);
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.removeContainer();
            },
          },
          {
            key: "createContainer",
            value: function () {
              (this._container = this.props.getContainer()), this.forceUpdate();
            },
          },
          {
            key: "removeContainer",
            value: function () {
              this._container &&
                this._container.parentNode.removeChild(this._container);
            },
          },
          {
            key: "render",
            value: function () {
              return this._container
                ? P.a.createPortal(this.props.children, this._container)
                : null;
            },
          },
        ]) && pe(n.prototype, r),
        o && pe(n, o),
        a
      );
    })(h.a.Component);
    function ge(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function be(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ge(Object(n), !0).forEach(function (t) {
              we(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ge(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function we(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function xe(e, t, n) {
      return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
    }
    ye.propTypes = {
      getContainer: ce.a.func.isRequired,
      children: ce.a.node.isRequired,
      didUpdate: ce.a.func,
    };
    var Ee,
      Se = n(24),
      ke = n.n(Se);
    function Te(e) {
      return (Te =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Oe(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function Pe(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    var _e = { Webkit: "-webkit-", Moz: "-moz-", ms: "-ms-", O: "-o-" };
    function Ce() {
      if (void 0 !== Ee) return Ee;
      Ee = "";
      var e = document.createElement("p").style;
      for (var t in _e) t + "Transform" in e && (Ee = t);
      return Ee;
    }
    function Me() {
      return Ce()
        ? "".concat(Ce(), "TransitionProperty")
        : "transitionProperty";
    }
    function Ne() {
      return Ce() ? "".concat(Ce(), "Transform") : "transform";
    }
    function je(e, t) {
      var n = Me();
      n &&
        ((e.style[n] = t),
        "transitionProperty" !== n && (e.style.transitionProperty = t));
    }
    function Ae(e, t) {
      var n = Ne();
      n && ((e.style[n] = t), "transform" !== n && (e.style.transform = t));
    }
    var Re,
      De = /matrix\((.*)\)/,
      Ie = /matrix3d\((.*)\)/;
    function Fe(e) {
      var t = e.style.display;
      (e.style.display = "none"), e.offsetHeight, (e.style.display = t);
    }
    function Le(e, t, n) {
      var r = n;
      if ("object" !== Te(t))
        return void 0 !== r
          ? ("number" == typeof r && (r = "".concat(r, "px")),
            void (e.style[t] = r))
          : Re(e, t);
      for (var o in t) t.hasOwnProperty(o) && Le(e, o, t[o]);
    }
    function ze(e, t) {
      var n = e["page".concat(t ? "Y" : "X", "Offset")],
        r = "scroll".concat(t ? "Top" : "Left");
      if ("number" != typeof n) {
        var o = e.document;
        "number" != typeof (n = o.documentElement[r]) && (n = o.body[r]);
      }
      return n;
    }
    function Ue(e) {
      return ze(e);
    }
    function He(e) {
      return ze(e, !0);
    }
    function Ve(e) {
      var t = (function (e) {
          var t,
            n,
            r,
            o = e.ownerDocument,
            i = o.body,
            a = o && o.documentElement;
          return (
            (n = (t = e.getBoundingClientRect()).left),
            (r = t.top),
            {
              left: (n -= a.clientLeft || i.clientLeft || 0),
              top: (r -= a.clientTop || i.clientTop || 0),
            }
          );
        })(e),
        n = e.ownerDocument,
        r = n.defaultView || n.parentWindow;
      return (t.left += Ue(r)), (t.top += He(r)), t;
    }
    function Be(e) {
      return null != e && e == e.window;
    }
    function We(e) {
      return Be(e) ? e.document : 9 === e.nodeType ? e : e.ownerDocument;
    }
    var $e = new RegExp(
        "^(".concat(
          /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
          ")(?!px)[a-z%]+$"
        ),
        "i"
      ),
      qe = /^(top|right|bottom|left)$/,
      Ke = "left";
    function Qe(e, t) {
      return "left" === e
        ? t.useCssRight
          ? "right"
          : e
        : t.useCssBottom
        ? "bottom"
        : e;
    }
    function Ge(e) {
      return "left" === e
        ? "right"
        : "right" === e
        ? "left"
        : "top" === e
        ? "bottom"
        : "bottom" === e
        ? "top"
        : void 0;
    }
    function Ye(e, t, n) {
      "static" === Le(e, "position") && (e.style.position = "relative");
      var r = -999,
        o = -999,
        i = Qe("left", n),
        a = Qe("top", n),
        u = Ge(i),
        l = Ge(a);
      "left" !== i && (r = 999), "top" !== a && (o = 999);
      var c,
        s = "",
        f = Ve(e);
      ("left" in t || "top" in t) &&
        ((s = (c = e).style.transitionProperty || c.style[Me()] || ""),
        je(e, "none")),
        "left" in t && ((e.style[u] = ""), (e.style[i] = "".concat(r, "px"))),
        "top" in t && ((e.style[l] = ""), (e.style[a] = "".concat(o, "px"))),
        Fe(e);
      var p = Ve(e),
        d = {};
      for (var h in t)
        if (t.hasOwnProperty(h)) {
          var m = Qe(h, n),
            v = "left" === h ? r : o,
            y = f[h] - p[h];
          d[m] = m === h ? v + y : v - y;
        }
      Le(e, d), Fe(e), ("left" in t || "top" in t) && je(e, s);
      var g = {};
      for (var b in t)
        if (t.hasOwnProperty(b)) {
          var w = Qe(b, n),
            x = t[b] - f[b];
          g[w] = b === w ? d[w] + x : d[w] - x;
        }
      Le(e, g);
    }
    function Xe(e, t) {
      var n = Ve(e),
        r = (function (e) {
          var t = window.getComputedStyle(e, null),
            n = t.getPropertyValue("transform") || t.getPropertyValue(Ne());
          if (n && "none" !== n) {
            var r = n.replace(/[^0-9\-.,]/g, "").split(",");
            return {
              x: parseFloat(r[12] || r[4], 0),
              y: parseFloat(r[13] || r[5], 0),
            };
          }
          return { x: 0, y: 0 };
        })(e),
        o = { x: r.x, y: r.y };
      "left" in t && (o.x = r.x + t.left - n.left),
        "top" in t && (o.y = r.y + t.top - n.top),
        (function (e, t) {
          var n = window.getComputedStyle(e, null),
            r = n.getPropertyValue("transform") || n.getPropertyValue(Ne());
          if (r && "none" !== r) {
            var o,
              i = r.match(De);
            if (i)
              ((o = (i = i[1]).split(",").map(function (e) {
                return parseFloat(e, 10);
              }))[4] = t.x),
                (o[5] = t.y),
                Ae(e, "matrix(".concat(o.join(","), ")"));
            else
              ((o = r
                .match(Ie)[1]
                .split(",")
                .map(function (e) {
                  return parseFloat(e, 10);
                }))[12] = t.x),
                (o[13] = t.y),
                Ae(e, "matrix3d(".concat(o.join(","), ")"));
          } else
            Ae(
              e,
              "translateX("
                .concat(t.x, "px) translateY(")
                .concat(t.y, "px) translateZ(0)")
            );
        })(e, o);
    }
    function Ze(e, t) {
      for (var n = 0; n < e.length; n++) t(e[n]);
    }
    function Je(e) {
      return "border-box" === Re(e, "boxSizing");
    }
    "undefined" != typeof window &&
      (Re = window.getComputedStyle
        ? function (e, t, n) {
            var r = n,
              o = "",
              i = We(e);
            return (
              (r = r || i.defaultView.getComputedStyle(e, null)) &&
                (o = r.getPropertyValue(t) || r[t]),
              o
            );
          }
        : function (e, t) {
            var n = e.currentStyle && e.currentStyle[t];
            if ($e.test(n) && !qe.test(t)) {
              var r = e.style,
                o = r[Ke],
                i = e.runtimeStyle[Ke];
              (e.runtimeStyle[Ke] = e.currentStyle[Ke]),
                (r[Ke] = "fontSize" === t ? "1em" : n || 0),
                (n = r.pixelLeft + "px"),
                (r[Ke] = o),
                (e.runtimeStyle[Ke] = i);
            }
            return "" === n ? "auto" : n;
          });
    var et = ["margin", "border", "padding"];
    function tt(e, t, n) {
      var r,
        o = {},
        i = e.style;
      for (r in t) t.hasOwnProperty(r) && ((o[r] = i[r]), (i[r] = t[r]));
      for (r in (n.call(e), t)) t.hasOwnProperty(r) && (i[r] = o[r]);
    }
    function nt(e, t, n) {
      var r,
        o,
        i,
        a = 0;
      for (o = 0; o < t.length; o++)
        if ((r = t[o]))
          for (i = 0; i < n.length; i++) {
            var u = void 0;
            (u =
              "border" === r ? "".concat(r).concat(n[i], "Width") : r + n[i]),
              (a += parseFloat(Re(e, u)) || 0);
          }
      return a;
    }
    var rt = {
      getParent: function (e) {
        var t = e;
        do {
          t = 11 === t.nodeType && t.host ? t.host : t.parentNode;
        } while (t && 1 !== t.nodeType && 9 !== t.nodeType);
        return t;
      },
    };
    function ot(e, t, n) {
      var r = n;
      if (Be(e))
        return "width" === t ? rt.viewportWidth(e) : rt.viewportHeight(e);
      if (9 === e.nodeType)
        return "width" === t ? rt.docWidth(e) : rt.docHeight(e);
      var o = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"],
        i =
          "width" === t
            ? e.getBoundingClientRect().width
            : e.getBoundingClientRect().height,
        a = (Re(e), Je(e)),
        u = 0;
      (null == i || i <= 0) &&
        ((i = void 0),
        (null == (u = Re(e, t)) || Number(u) < 0) && (u = e.style[t] || 0),
        (u = parseFloat(u) || 0)),
        void 0 === r && (r = a ? 1 : -1);
      var l = void 0 !== i || a,
        c = i || u;
      return -1 === r
        ? l
          ? c - nt(e, ["border", "padding"], o)
          : u
        : l
        ? 1 === r
          ? c
          : c + (2 === r ? -nt(e, ["border"], o) : nt(e, ["margin"], o))
        : u + nt(e, et.slice(r), o);
    }
    Ze(["Width", "Height"], function (e) {
      (rt["doc".concat(e)] = function (t) {
        var n = t.document;
        return Math.max(
          n.documentElement["scroll".concat(e)],
          n.body["scroll".concat(e)],
          rt["viewport".concat(e)](n)
        );
      }),
        (rt["viewport".concat(e)] = function (t) {
          var n = "client".concat(e),
            r = t.document,
            o = r.body,
            i = r.documentElement[n];
          return ("CSS1Compat" === r.compatMode && i) || (o && o[n]) || i;
        });
    });
    var it = { position: "absolute", visibility: "hidden", display: "block" };
    function at() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r,
        o = t[0];
      return (
        0 !== o.offsetWidth
          ? (r = ot.apply(void 0, t))
          : tt(o, it, function () {
              r = ot.apply(void 0, t);
            }),
        r
      );
    }
    function ut(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      return e;
    }
    Ze(["width", "height"], function (e) {
      var t = e.charAt(0).toUpperCase() + e.slice(1);
      rt["outer".concat(t)] = function (t, n) {
        return t && at(t, e, n ? 0 : 1);
      };
      var n = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"];
      rt[e] = function (t, r) {
        var o = r;
        if (void 0 === o) return t && at(t, e, -1);
        if (t) {
          Re(t);
          return Je(t) && (o += nt(t, ["padding", "border"], n)), Le(t, e, o);
        }
      };
    });
    var lt = {
      getWindow: function (e) {
        if (e && e.document && e.setTimeout) return e;
        var t = e.ownerDocument || e;
        return t.defaultView || t.parentWindow;
      },
      getDocument: We,
      offset: function (e, t, n) {
        if (void 0 === t) return Ve(e);
        !(function (e, t, n) {
          if (n.ignoreShake) {
            var r = Ve(e),
              o = r.left.toFixed(0),
              i = r.top.toFixed(0),
              a = t.left.toFixed(0),
              u = t.top.toFixed(0);
            if (o === a && i === u) return;
          }
          n.useCssRight || n.useCssBottom
            ? Ye(e, t, n)
            : n.useCssTransform && Ne() in document.body.style
            ? Xe(e, t)
            : Ye(e, t, n);
        })(e, t, n || {});
      },
      isWindow: Be,
      each: Ze,
      css: Le,
      clone: function (e) {
        var t,
          n = {};
        for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
        if (e.overflow)
          for (t in e) e.hasOwnProperty(t) && (n.overflow[t] = e.overflow[t]);
        return n;
      },
      mix: ut,
      getWindowScrollLeft: function (e) {
        return Ue(e);
      },
      getWindowScrollTop: function (e) {
        return He(e);
      },
      merge: function () {
        for (var e = {}, t = 0; t < arguments.length; t++)
          lt.mix(e, t < 0 || arguments.length <= t ? void 0 : arguments[t]);
        return e;
      },
      viewportWidth: 0,
      viewportHeight: 0,
    };
    ut(lt, rt);
    var ct = lt.getParent;
    function st(e) {
      if (lt.isWindow(e) || 9 === e.nodeType) return null;
      var t,
        n = lt.getDocument(e).body,
        r = lt.css(e, "position");
      if (!("fixed" === r || "absolute" === r))
        return "html" === e.nodeName.toLowerCase() ? null : ct(e);
      for (t = ct(e); t && t !== n && 9 !== t.nodeType; t = ct(t))
        if ("static" !== (r = lt.css(t, "position"))) return t;
      return null;
    }
    var ft = lt.getParent;
    function pt(e, t) {
      for (
        var n = { left: 0, right: 1 / 0, top: 0, bottom: 1 / 0 },
          r = st(e),
          o = lt.getDocument(e),
          i = o.defaultView || o.parentWindow,
          a = o.body,
          u = o.documentElement;
        r;

      ) {
        if (
          (-1 !== navigator.userAgent.indexOf("MSIE") && 0 === r.clientWidth) ||
          r === a ||
          r === u ||
          "visible" === lt.css(r, "overflow")
        ) {
          if (r === a || r === u) break;
        } else {
          var l = lt.offset(r);
          (l.left += r.clientLeft),
            (l.top += r.clientTop),
            (n.top = Math.max(n.top, l.top)),
            (n.right = Math.min(n.right, l.left + r.clientWidth)),
            (n.bottom = Math.min(n.bottom, l.top + r.clientHeight)),
            (n.left = Math.max(n.left, l.left));
        }
        r = st(r);
      }
      var c = null;
      lt.isWindow(e) ||
        9 === e.nodeType ||
        ((c = e.style.position),
        "absolute" === lt.css(e, "position") && (e.style.position = "fixed"));
      var s = lt.getWindowScrollLeft(i),
        f = lt.getWindowScrollTop(i),
        p = lt.viewportWidth(i),
        d = lt.viewportHeight(i),
        h = u.scrollWidth,
        m = u.scrollHeight,
        v = window.getComputedStyle(a);
      if (
        ("hidden" === v.overflowX && (h = i.innerWidth),
        "hidden" === v.overflowY && (m = i.innerHeight),
        e.style && (e.style.position = c),
        t ||
          (function (e) {
            if (lt.isWindow(e) || 9 === e.nodeType) return !1;
            var t = lt.getDocument(e).body,
              n = null;
            for (n = ft(e); n && n !== t; n = ft(n)) {
              if ("fixed" === lt.css(n, "position")) return !0;
            }
            return !1;
          })(e))
      )
        (n.left = Math.max(n.left, s)),
          (n.top = Math.max(n.top, f)),
          (n.right = Math.min(n.right, s + p)),
          (n.bottom = Math.min(n.bottom, f + d));
      else {
        var y = Math.max(h, s + p);
        n.right = Math.min(n.right, y);
        var g = Math.max(m, f + d);
        n.bottom = Math.min(n.bottom, g);
      }
      return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left
        ? n
        : null;
    }
    function dt(e) {
      var t, n, r;
      if (lt.isWindow(e) || 9 === e.nodeType) {
        var o = lt.getWindow(e);
        (t = {
          left: lt.getWindowScrollLeft(o),
          top: lt.getWindowScrollTop(o),
        }),
          (n = lt.viewportWidth(o)),
          (r = lt.viewportHeight(o));
      } else
        (t = lt.offset(e)), (n = lt.outerWidth(e)), (r = lt.outerHeight(e));
      return (t.width = n), (t.height = r), t;
    }
    function ht(e, t) {
      var n = t.charAt(0),
        r = t.charAt(1),
        o = e.width,
        i = e.height,
        a = e.left,
        u = e.top;
      return (
        "c" === n ? (u += i / 2) : "b" === n && (u += i),
        "c" === r ? (a += o / 2) : "r" === r && (a += o),
        { left: a, top: u }
      );
    }
    function mt(e, t, n, r, o) {
      var i = ht(t, n[1]),
        a = ht(e, n[0]),
        u = [a.left - i.left, a.top - i.top];
      return {
        left: Math.round(e.left - u[0] + r[0] - o[0]),
        top: Math.round(e.top - u[1] + r[1] - o[1]),
      };
    }
    function vt(e, t, n) {
      return e.left < n.left || e.left + t.width > n.right;
    }
    function yt(e, t, n) {
      return e.top < n.top || e.top + t.height > n.bottom;
    }
    function gt(e, t, n) {
      var r = [];
      return (
        lt.each(e, function (e) {
          r.push(
            e.replace(t, function (e) {
              return n[e];
            })
          );
        }),
        r
      );
    }
    function bt(e, t) {
      return (e[t] = -e[t]), e;
    }
    function wt(e, t) {
      return (
        (/%$/.test(e)
          ? (parseInt(e.substring(0, e.length - 1), 10) / 100) * t
          : parseInt(e, 10)) || 0
      );
    }
    function xt(e, t) {
      (e[0] = wt(e[0], t.width)), (e[1] = wt(e[1], t.height));
    }
    function Et(e, t, n, r) {
      var o = n.points,
        i = n.offset || [0, 0],
        a = n.targetOffset || [0, 0],
        u = n.overflow,
        l = n.source || e;
      (i = [].concat(i)), (a = [].concat(a));
      var c = {},
        s = 0,
        f = pt(l, !(!(u = u || {}) || !u.alwaysByViewport)),
        p = dt(l);
      xt(i, p), xt(a, t);
      var d = mt(p, t, o, i, a),
        h = lt.merge(p, d);
      if (f && (u.adjustX || u.adjustY) && r) {
        if (u.adjustX && vt(d, p, f)) {
          var m = gt(o, /[lr]/gi, { l: "r", r: "l" }),
            v = bt(i, 0),
            y = bt(a, 0);
          (function (e, t, n) {
            return e.left > n.right || e.left + t.width < n.left;
          })(mt(p, t, m, v, y), p, f) || ((s = 1), (o = m), (i = v), (a = y));
        }
        if (u.adjustY && yt(d, p, f)) {
          var g = gt(o, /[tb]/gi, { t: "b", b: "t" }),
            b = bt(i, 1),
            w = bt(a, 1);
          (function (e, t, n) {
            return e.top > n.bottom || e.top + t.height < n.top;
          })(mt(p, t, g, b, w), p, f) || ((s = 1), (o = g), (i = b), (a = w));
        }
        s && ((d = mt(p, t, o, i, a)), lt.mix(h, d));
        var x = vt(d, p, f),
          E = yt(d, p, f);
        (x || E) &&
          ((o = n.points),
          (i = n.offset || [0, 0]),
          (a = n.targetOffset || [0, 0])),
          (c.adjustX = u.adjustX && x),
          (c.adjustY = u.adjustY && E),
          (c.adjustX || c.adjustY) &&
            (h = (function (e, t, n, r) {
              var o = lt.clone(e),
                i = { width: t.width, height: t.height };
              return (
                r.adjustX && o.left < n.left && (o.left = n.left),
                r.resizeWidth &&
                  o.left >= n.left &&
                  o.left + i.width > n.right &&
                  (i.width -= o.left + i.width - n.right),
                r.adjustX &&
                  o.left + i.width > n.right &&
                  (o.left = Math.max(n.right - i.width, n.left)),
                r.adjustY && o.top < n.top && (o.top = n.top),
                r.resizeHeight &&
                  o.top >= n.top &&
                  o.top + i.height > n.bottom &&
                  (i.height -= o.top + i.height - n.bottom),
                r.adjustY &&
                  o.top + i.height > n.bottom &&
                  (o.top = Math.max(n.bottom - i.height, n.top)),
                lt.mix(o, i)
              );
            })(d, p, f, c));
      }
      return (
        h.width !== p.width &&
          lt.css(l, "width", lt.width(l) + h.width - p.width),
        h.height !== p.height &&
          lt.css(l, "height", lt.height(l) + h.height - p.height),
        lt.offset(
          l,
          { left: h.left, top: h.top },
          {
            useCssRight: n.useCssRight,
            useCssBottom: n.useCssBottom,
            useCssTransform: n.useCssTransform,
            ignoreShake: n.ignoreShake,
          }
        ),
        { points: o, offset: i, targetOffset: a, overflow: c }
      );
    }
    function St(e, t, n) {
      var r = n.target || t;
      return Et(
        e,
        dt(r),
        n,
        !(function (e, t) {
          var n = pt(e, t),
            r = dt(e);
          return (
            !n ||
            r.left + r.width <= n.left ||
            r.top + r.height <= n.top ||
            r.left >= n.right ||
            r.top >= n.bottom
          );
        })(r, n.overflow && n.overflow.alwaysByViewport)
      );
    }
    function kt(e, t, n) {
      var r,
        o,
        i = lt.getDocument(e),
        a = i.defaultView || i.parentWindow,
        u = lt.getWindowScrollLeft(a),
        l = lt.getWindowScrollTop(a),
        c = lt.viewportWidth(a),
        s = lt.viewportHeight(a);
      (r = "pageX" in t ? t.pageX : u + t.clientX),
        (o = "pageY" in t ? t.pageY : l + t.clientY);
      var f = r >= 0 && r <= u + c && o >= 0 && o <= l + s;
      return Et(
        e,
        { left: r, top: o, width: 0, height: 0 },
        (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Pe(n, !0).forEach(function (t) {
                  Oe(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Pe(n).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        })({}, n, { points: [n.points[0], "cc"] }),
        f
      );
    }
    (St.__getOffsetParent = st), (St.__getVisibleRectForElement = pt);
    var Tt = n(73);
    function Ot(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
            return;
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, u = e[Symbol.iterator]();
              !(r = (a = u.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (o = !0), (i = e);
          } finally {
            try {
              r || null == u.return || u.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return Pt(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return Pt(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Pt(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function _t(e, t) {
      var n = null,
        r = null;
      var o = new Tt.a(function (e) {
        var o = Ot(e, 1)[0].target.getBoundingClientRect(),
          i = o.width,
          a = o.height,
          u = Math.floor(i),
          l = Math.floor(a);
        (n === u && r === l) || t({ width: u, height: l }), (n = u), (r = l);
      });
      return (
        e && o.observe(e),
        function () {
          o.disconnect();
        }
      );
    }
    function Ct(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
            return;
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, u = e[Symbol.iterator]();
              !(r = (a = u.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (o = !0), (i = e);
          } finally {
            try {
              r || null == u.return || u.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return Mt(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return Mt(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Mt(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function Nt(e) {
      return (Nt =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function jt(e) {
      return "function" != typeof e ? null : e();
    }
    function At(e) {
      return "object" === Nt(e) && e ? e : null;
    }
    var Rt = h.a.forwardRef(function (e, t) {
      var n = e.children,
        r = e.disabled,
        o = e.target,
        i = e.align,
        a = e.onAlign,
        u = e.monitorWindowResize,
        l = e.monitorBufferTime,
        c = void 0 === l ? 0 : l,
        s = h.a.useRef({}),
        f = h.a.useRef(),
        p = h.a.Children.only(n),
        d = h.a.useRef({});
      (d.current.disabled = r), (d.current.target = o), (d.current.onAlign = a);
      var m = Ct(
          (function (e, t) {
            var n = h.a.useRef(!1),
              r = h.a.useRef(null);
            function o() {
              window.clearTimeout(r.current);
            }
            return [
              function i(a) {
                if (n.current && !0 !== a)
                  o(),
                    (r.current = window.setTimeout(function () {
                      (n.current = !1), i();
                    }, t));
                else {
                  if (!1 === e()) return;
                  (n.current = !0),
                    o(),
                    (r.current = window.setTimeout(function () {
                      n.current = !1;
                    }, t));
                }
              },
              function () {
                (n.current = !1), o();
              },
            ];
          })(function () {
            var e = d.current,
              t = e.disabled,
              n = e.target;
            if (!t && n) {
              var r,
                o = f.current,
                u = jt(n),
                l = At(n);
              (s.current.element = u), (s.current.point = l);
              var c = document.activeElement;
              return (
                u ? (r = St(o, u, i)) : l && (r = kt(o, l, i)),
                (function (e, t) {
                  e !== document.activeElement && re(t, e) && e.focus();
                })(c, o),
                a && a(o, r),
                !0
              );
            }
            return !1;
          }, c),
          2
        ),
        v = m[0],
        y = m[1],
        g = h.a.useRef({ cancel: function () {} }),
        b = h.a.useRef({ cancel: function () {} });
      h.a.useEffect(function () {
        var e,
          t,
          n = jt(o),
          r = At(o);
        f.current !== b.current.element &&
          (b.current.cancel(),
          (b.current.element = f.current),
          (b.current.cancel = _t(f.current, v))),
          (s.current.element === n &&
            ((e = s.current.point) === (t = r) ||
              (e &&
                t &&
                ("pageX" in t && "pageY" in t
                  ? e.pageX === t.pageX && e.pageY === t.pageY
                  : "clientX" in t &&
                    "clientY" in t &&
                    e.clientX === t.clientX &&
                    e.clientY === t.clientY)))) ||
            (v(),
            g.current.element !== n &&
              (g.current.cancel(),
              (g.current.element = n),
              (g.current.cancel = _t(n, v))));
      }),
        h.a.useEffect(
          function () {
            r ? y() : v();
          },
          [r]
        );
      var w = h.a.useRef(null);
      return (
        h.a.useEffect(
          function () {
            u
              ? w.current || (w.current = _(window, "resize", v))
              : w.current && (w.current.remove(), (w.current = null));
          },
          [u]
        ),
        h.a.useEffect(function () {
          return function () {
            g.current.cancel(),
              b.current.cancel(),
              w.current && w.current.remove(),
              y();
          };
        }, []),
        h.a.useImperativeHandle(t, function () {
          return {
            forceAlign: function () {
              return v(!0);
            },
          };
        }),
        h.a.isValidElement(p) &&
          (p = h.a.cloneElement(p, { ref: ue(p.ref, f) })),
        p
      );
    });
    Rt.displayName = "Align";
    var Dt = Rt,
      It = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
    function Ft(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        (n["ms" + e] = "MS" + t),
        (n["O" + e] = "o" + t.toLowerCase()),
        n
      );
    }
    var Lt,
      zt,
      Ut,
      Ht =
        ((Lt = It),
        (zt = "undefined" != typeof window ? window : {}),
        (Ut = {
          animationend: Ft("Animation", "AnimationEnd"),
          transitionend: Ft("Transition", "TransitionEnd"),
        }),
        Lt &&
          ("AnimationEvent" in zt || delete Ut.animationend.animation,
          "TransitionEvent" in zt || delete Ut.transitionend.transition),
        Ut),
      Vt = {};
    It && (Vt = document.createElement("div").style);
    var Bt = {};
    function Wt(e) {
      if (Bt[e]) return Bt[e];
      var t = Ht[e];
      if (t)
        for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
          var i = n[o];
          if (Object.prototype.hasOwnProperty.call(t, i) && i in Vt)
            return (Bt[e] = t[i]), Bt[e];
        }
      return "";
    }
    var $t = Wt("animationend"),
      qt = Wt("transitionend"),
      Kt = !(!$t || !qt);
    function Qt(e, t) {
      return e
        ? "object" == typeof e
          ? e[
              t.replace(/-\w/g, function (e) {
                return e[1].toUpperCase();
              })
            ]
          : e + "-" + t
        : null;
    }
    var Gt =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Yt = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
    function Xt(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var Zt = (function (e) {
        var t = e,
          n = !!h.a.forwardRef;
        function r(e) {
          return !(!e.motionName || !t);
        }
        "object" == typeof e &&
          ((t = e.transitionSupport),
          (n = "forwardRef" in e ? e.forwardRef : n));
        var o = (function (e) {
          function t() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var e = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (
              (e.onDomUpdate = function () {
                var t = e.state,
                  n = t.status,
                  o = t.newStatus,
                  i = e.props,
                  a = i.onAppearStart,
                  u = i.onEnterStart,
                  l = i.onLeaveStart,
                  c = i.onAppearActive,
                  s = i.onEnterActive,
                  f = i.onLeaveActive,
                  p = i.motionAppear,
                  d = i.motionEnter,
                  h = i.motionLeave;
                if (r(e.props)) {
                  var m = e.getElement();
                  e.$cacheEle !== m &&
                    (e.removeEventListener(e.$cacheEle),
                    e.addEventListener(m),
                    (e.$cacheEle = m)),
                    o && "appear" === n && p
                      ? e.updateStatus(a, null, null, function () {
                          e.updateActiveStatus(c, "appear");
                        })
                      : o && "enter" === n && d
                      ? e.updateStatus(u, null, null, function () {
                          e.updateActiveStatus(s, "enter");
                        })
                      : o &&
                        "leave" === n &&
                        h &&
                        e.updateStatus(l, null, null, function () {
                          e.updateActiveStatus(f, "leave");
                        });
                }
              }),
              (e.onMotionEnd = function (t) {
                var n = e.state,
                  r = n.status,
                  o = n.statusActive,
                  i = e.props,
                  a = i.onAppearEnd,
                  u = i.onEnterEnd,
                  l = i.onLeaveEnd;
                "appear" === r && o
                  ? e.updateStatus(a, { status: "none" }, t)
                  : "enter" === r && o
                  ? e.updateStatus(u, { status: "none" }, t)
                  : "leave" === r &&
                    o &&
                    e.updateStatus(l, { status: "none" }, t);
              }),
              (e.setNodeRef = function (t) {
                var n = e.props.internalRef;
                (e.node = t),
                  "function" == typeof n
                    ? n(t)
                    : n && "current" in n && (n.current = t);
              }),
              (e.getElement = function () {
                try {
                  return oe(e.node || e);
                } catch (t) {
                  return e.$cacheEle;
                }
              }),
              (e.addEventListener = function (t) {
                t &&
                  (t.addEventListener(qt, e.onMotionEnd),
                  t.addEventListener($t, e.onMotionEnd));
              }),
              (e.removeEventListener = function (t) {
                t &&
                  (t.removeEventListener(qt, e.onMotionEnd),
                  t.removeEventListener($t, e.onMotionEnd));
              }),
              (e.updateStatus = function (t, n, r, o) {
                var i = t ? t(e.getElement(), r) : null;
                if (!1 !== i && !e._destroyed) {
                  var a = void 0;
                  o &&
                    (a = function () {
                      e.nextFrame(o);
                    }),
                    e.setState(
                      Gt(
                        {
                          statusStyle: "object" == typeof i ? i : null,
                          newStatus: !1,
                        },
                        n
                      ),
                      a
                    );
                }
              }),
              (e.updateActiveStatus = function (t, n) {
                e.nextFrame(function () {
                  if (e.state.status === n) {
                    var r = e.props.motionDeadline;
                    e.updateStatus(t, { statusActive: !0 }),
                      r > 0 &&
                        setTimeout(function () {
                          e.onMotionEnd({ deadline: !0 });
                        }, r);
                  }
                });
              }),
              (e.nextFrame = function (t) {
                e.cancelNextFrame(), (e.raf = ke()(t));
              }),
              (e.cancelNextFrame = function () {
                e.raf && (ke.a.cancel(e.raf), (e.raf = null));
              }),
              (e.state = {
                status: "none",
                statusActive: !1,
                newStatus: !1,
                statusStyle: null,
              }),
              (e.$cacheEle = null),
              (e.node = null),
              (e.raf = null),
              e
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            Yt(
              t,
              [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.onDomUpdate();
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    this.onDomUpdate();
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    (this._destroyed = !0),
                      this.removeEventListener(this.$cacheEle),
                      this.cancelNextFrame();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e,
                      t = this.state,
                      n = t.status,
                      o = t.statusActive,
                      i = t.statusStyle,
                      a = this.props,
                      u = a.children,
                      l = a.motionName,
                      c = a.visible,
                      s = a.removeOnLeave,
                      f = a.leavedClassName,
                      p = a.eventProps;
                    return u
                      ? "none" !== n && r(this.props)
                        ? u(
                            Gt({}, p, {
                              className: M()(
                                ((e = {}),
                                Xt(e, Qt(l, n), "none" !== n),
                                Xt(e, Qt(l, n + "-active"), "none" !== n && o),
                                Xt(e, l, "string" == typeof l),
                                e)
                              ),
                              style: i,
                            }),
                            this.setNodeRef
                          )
                        : c
                        ? u(Gt({}, p), this.setNodeRef)
                        : s
                        ? null
                        : u(Gt({}, p, { className: f }), this.setNodeRef)
                      : null;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    var n = t.prevProps,
                      o = t.status;
                    if (!r(e)) return {};
                    var i = e.visible,
                      a = e.motionAppear,
                      u = e.motionEnter,
                      l = e.motionLeave,
                      c = e.motionLeaveImmediately,
                      s = { prevProps: e };
                    return (
                      (("appear" === o && !a) ||
                        ("enter" === o && !u) ||
                        ("leave" === o && !l)) &&
                        ((s.status = "none"),
                        (s.statusActive = !1),
                        (s.newStatus = !1)),
                      !n &&
                        i &&
                        a &&
                        ((s.status = "appear"),
                        (s.statusActive = !1),
                        (s.newStatus = !0)),
                      n &&
                        !n.visible &&
                        i &&
                        u &&
                        ((s.status = "enter"),
                        (s.statusActive = !1),
                        (s.newStatus = !0)),
                      ((n && n.visible && !i && l) || (!n && c && !i && l)) &&
                        ((s.status = "leave"),
                        (s.statusActive = !1),
                        (s.newStatus = !0)),
                      s
                    );
                  },
                },
              ]
            ),
            t
          );
        })(h.a.Component);
        return (
          (o.defaultProps = {
            visible: !0,
            motionEnter: !0,
            motionAppear: !0,
            motionLeave: !0,
            removeOnLeave: !0,
          }),
          n
            ? h.a.forwardRef(function (e, t) {
                return h.a.createElement(o, Gt({ internalRef: t }, e));
              })
            : o
        );
      })(Kt),
      Jt = h.a.forwardRef(function (e, t) {
        var n = e.prefixCls,
          r = e.className,
          o = e.visible,
          i = e.style,
          a = e.children,
          u = e.onMouseEnter,
          l = e.onMouseLeave,
          c = e.onMouseDown,
          s = e.onTouchStart,
          f = a;
        return (
          h.a.Children.count(a) > 1 &&
            (f = h.a.createElement(
              "div",
              { className: "".concat(n, "-content") },
              a
            )),
          h.a.createElement(
            "div",
            {
              ref: t,
              className: M()(r, !o && "".concat(e.hiddenClassName)),
              onMouseEnter: u,
              onMouseLeave: l,
              onMouseDown: c,
              onTouchStart: s,
              style: i,
            },
            f
          )
        );
      });
    Jt.displayName = "PopupInner";
    var en = Jt;
    function tn(e) {
      var t = e.prefixCls,
        n = e.motion,
        r = e.animation,
        o = e.transitionName;
      return (
        n ||
        (r
          ? { motionName: "".concat(t, "-").concat(r) }
          : o
          ? { motionName: o }
          : null)
      );
    }
    function nn(e) {
      return (nn =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function rn(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]));
      }
      return o;
    }
    function on(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function an(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? on(Object(n), !0).forEach(function (t) {
              un(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : on(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function un(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function ln(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function cn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function sn(e, t) {
      return (sn =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function fn(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = dn(e);
        if (t) {
          var o = dn(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return pn(this, n);
      };
    }
    function pn(e, t) {
      return !t || ("object" !== nn(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function dn(e) {
      return (dn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var hn = Zt;
    function mn(e) {
      return e && e.motionName;
    }
    var vn = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && sn(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = fn(i);
        function i() {
          var e;
          return (
            ln(this, i),
            ((e = o.apply(this, arguments)).state = {
              targetWidth: void 0,
              targetHeight: void 0,
              status: null,
              prevVisible: null,
              alignClassName: null,
            }),
            (e.popupRef = h.a.createRef()),
            (e.alignRef = h.a.createRef()),
            (e.nextFrameState = null),
            (e.nextFrameId = null),
            (e.onAlign = function (t, n) {
              var r = e.state.status,
                o = e.props,
                i = o.getClassNameFromAlign,
                a = o.onAlign,
                u = i(n);
              "align" === r
                ? e.setState(
                    { alignClassName: u, status: "aligned" },
                    function () {
                      e.alignRef.current.forceAlign();
                    }
                  )
                : "aligned" === r
                ? (e.setState({ alignClassName: u, status: "afterAlign" }),
                  a(t, n))
                : e.setState({ alignClassName: u });
            }),
            (e.onMotionEnd = function () {
              var t = e.props.visible;
              e.setState({ status: t ? "AfterMotion" : "stable" });
            }),
            (e.setStateOnNextFrame = function (t) {
              e.cancelFrameState(),
                (e.nextFrameState = an(an({}, e.nextFrameState), t)),
                (e.nextFrameId = ke()(function () {
                  var t = an({}, e.nextFrameState);
                  (e.nextFrameState = null), e.setState(t);
                }));
            }),
            (e.getMotion = function () {
              return an({}, tn(e.props));
            }),
            (e.getAlignTarget = function () {
              var t = e.props,
                n = t.point,
                r = t.getRootDomNode;
              return n || r;
            }),
            (e.cancelFrameState = function () {
              ke.a.cancel(e.nextFrameId);
            }),
            (e.renderPopupElement = function () {
              var t = e.state,
                n = t.status,
                r = t.targetHeight,
                o = t.targetWidth,
                i = t.alignClassName,
                a = e.props,
                u = a.prefixCls,
                l = a.className,
                c = a.style,
                s = a.stretch,
                f = a.visible,
                p = a.align,
                d = a.destroyPopupOnHide,
                m = a.onMouseEnter,
                v = a.onMouseLeave,
                y = a.onMouseDown,
                g = a.onTouchStart,
                b = a.children,
                w = M()(u, l, i),
                x = "".concat(u, "-hidden"),
                E = {};
              s &&
                (-1 !== s.indexOf("height")
                  ? (E.height = r)
                  : -1 !== s.indexOf("minHeight") && (E.minHeight = r),
                -1 !== s.indexOf("width")
                  ? (E.width = o)
                  : -1 !== s.indexOf("minWidth") && (E.minWidth = o));
              var S = an(
                  an(an(an({}, E), e.getZIndexStyle()), c),
                  {},
                  { opacity: "stable" !== n && f ? 0 : void 0 }
                ),
                k = e.getMotion(),
                T = f;
              f &&
                "beforeMotion" !== n &&
                "motion" !== n &&
                "stable" !== n &&
                ((k.motionAppear = !1),
                (k.motionEnter = !1),
                (k.motionLeave = !1)),
                ("afterAlign" !== n && "beforeMotion" !== n) || (T = !1);
              var O =
                  !f || ("align" !== n && "aligned" !== n && "stable" !== n),
                P = !0;
              return (
                "stable" === n && (P = f),
                d && !P
                  ? null
                  : h.a.createElement(
                      hn,
                      Object.assign({ visible: T }, k, {
                        removeOnLeave: !1,
                        onEnterEnd: e.onMotionEnd,
                        onLeaveEnd: e.onMotionEnd,
                      }),
                      function (t, n) {
                        var r = t.style,
                          o = t.className;
                        return h.a.createElement(
                          Dt,
                          {
                            target: e.getAlignTarget(),
                            key: "popup",
                            ref: e.alignRef,
                            monitorWindowResize: !0,
                            disabled: O,
                            align: p,
                            onAlign: e.onAlign,
                          },
                          h.a.createElement(
                            en,
                            {
                              prefixCls: u,
                              visible: P,
                              hiddenClassName: x,
                              className: M()(w, o),
                              ref: ue(n, e.popupRef),
                              onMouseEnter: m,
                              onMouseLeave: v,
                              onMouseDown: y,
                              onTouchStart: g,
                              style: an(an({}, S), r),
                            },
                            b
                          )
                        );
                      }
                    )
              );
            }),
            (e.renderMaskElement = function () {
              var t = e.props,
                n = t.mask,
                r = t.maskMotion,
                o = t.maskTransitionName,
                i = t.maskAnimation,
                a = t.prefixCls,
                u = t.visible;
              if (!n) return null;
              var l = {};
              return (
                r &&
                  r.motionName &&
                  (l = an(
                    { motionAppear: !0 },
                    tn({
                      motion: r,
                      prefixCls: a,
                      transitionName: o,
                      animation: i,
                    })
                  )),
                h.a.createElement(
                  hn,
                  Object.assign({}, l, { visible: u, removeOnLeave: !0 }),
                  function (t) {
                    var n = t.className;
                    return h.a.createElement("div", {
                      style: e.getZIndexStyle(),
                      key: "mask",
                      className: M()("".concat(a, "-mask"), n),
                    });
                  }
                )
              );
            }),
            e
          );
        }
        return (
          (t = i),
          (r = [
            {
              key: "getDerivedStateFromProps",
              value: function (e, t) {
                var n = e.visible,
                  r = rn(e, ["visible"]),
                  o = t.prevVisible,
                  i = t.status,
                  a = { prevVisible: n, status: i },
                  u = tn(r);
                return (
                  null === o && !1 === n
                    ? (a.status = "stable")
                    : n !== o &&
                      (n ||
                      (mn(u) && ["motion", "AfterMotion", "stable"].includes(i))
                        ? (a.status = null)
                        : (a.status = "stable"),
                      n && (a.alignClassName = null)),
                  a
                );
              },
            },
          ]),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.componentDidUpdate();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                var e = this.state.status,
                  t = this.props,
                  n = t.getRootDomNode,
                  r = t.visible,
                  o = t.stretch;
                if ((this.cancelFrameState(), r && "stable" !== e))
                  switch (e) {
                    case null:
                      this.setStateOnNextFrame({
                        status: o ? "measure" : "align",
                      });
                      break;
                    case "afterAlign":
                      this.setStateOnNextFrame({
                        status: mn(this.getMotion())
                          ? "beforeMotion"
                          : "stable",
                      });
                      break;
                    case "AfterMotion":
                      this.setStateOnNextFrame({ status: "stable" });
                      break;
                    default:
                      var i = [
                          "measure",
                          "align",
                          null,
                          "beforeMotion",
                          "motion",
                        ],
                        a = i.indexOf(e),
                        u = i[a + 1];
                      -1 !== a && u && this.setStateOnNextFrame({ status: u });
                  }
                if ("measure" === e) {
                  var l = n();
                  l &&
                    this.setStateOnNextFrame({
                      targetHeight: l.offsetHeight,
                      targetWidth: l.offsetWidth,
                    });
                }
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.cancelFrameState();
              },
            },
            {
              key: "getZIndexStyle",
              value: function () {
                return { zIndex: this.props.zIndex };
              },
            },
            {
              key: "render",
              value: function () {
                return h.a.createElement(
                  "div",
                  null,
                  this.renderMaskElement(),
                  this.renderPopupElement()
                );
              },
            },
          ]) && cn(t.prototype, n),
          r && cn(t, r),
          i
        );
      })(d.Component),
      yn = h.a.createContext(null);
    function gn(e) {
      return (gn =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function bn(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function wn(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function xn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function En(e, t) {
      return (En =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function Sn(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = On(e);
        if (t) {
          var o = On(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return kn(this, n);
      };
    }
    function kn(e, t) {
      return !t || ("object" !== gn(t) && "function" != typeof t) ? Tn(e) : t;
    }
    function Tn(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function On(e) {
      return (On = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Pn() {}
    function _n() {
      return "";
    }
    function Cn() {
      return window.document;
    }
    var Mn = [
      "onClick",
      "onMouseDown",
      "onTouchStart",
      "onMouseEnter",
      "onMouseLeave",
      "onFocus",
      "onBlur",
      "onContextMenu",
    ];
    var Nn,
      jn,
      An =
        ((Nn = ye),
        ((jn = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && En(e, t);
          })(i, e);
          var t,
            n,
            r,
            o = Sn(i);
          function i(e) {
            var t, n;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              ((t = o.call(this, e)).popupRef = h.a.createRef()),
              (t.triggerRef = h.a.createRef()),
              (t.onMouseEnter = function (e) {
                var n = t.props.mouseEnterDelay;
                t.fireEvents("onMouseEnter", e),
                  t.delaySetPopupVisible(!0, n, n ? null : e);
              }),
              (t.onMouseMove = function (e) {
                t.fireEvents("onMouseMove", e), t.setPoint(e);
              }),
              (t.onMouseLeave = function (e) {
                t.fireEvents("onMouseLeave", e),
                  t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
              }),
              (t.onPopupMouseEnter = function () {
                t.clearDelayTimer();
              }),
              (t.onPopupMouseLeave = function (e) {
                (e.relatedTarget &&
                  !e.relatedTarget.setTimeout &&
                  t.popupRef.current &&
                  t.popupRef.current.popupRef.current &&
                  re(t.popupRef.current.popupRef.current, e.relatedTarget)) ||
                  t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
              }),
              (t.onFocus = function (e) {
                t.fireEvents("onFocus", e),
                  t.clearDelayTimer(),
                  t.isFocusToShow() &&
                    ((t.focusTime = Date.now()),
                    t.delaySetPopupVisible(!0, t.props.focusDelay));
              }),
              (t.onMouseDown = function (e) {
                t.fireEvents("onMouseDown", e), (t.preClickTime = Date.now());
              }),
              (t.onTouchStart = function (e) {
                t.fireEvents("onTouchStart", e), (t.preTouchTime = Date.now());
              }),
              (t.onBlur = function (e) {
                t.fireEvents("onBlur", e),
                  t.clearDelayTimer(),
                  t.isBlurToHide() &&
                    t.delaySetPopupVisible(!1, t.props.blurDelay);
              }),
              (t.onContextMenu = function (e) {
                e.preventDefault(),
                  t.fireEvents("onContextMenu", e),
                  t.setPopupVisible(!0, e);
              }),
              (t.onContextMenuClose = function () {
                t.isContextMenuToShow() && t.close();
              }),
              (t.onClick = function (e) {
                if ((t.fireEvents("onClick", e), t.focusTime)) {
                  var n;
                  if (
                    (t.preClickTime && t.preTouchTime
                      ? (n = Math.min(t.preClickTime, t.preTouchTime))
                      : t.preClickTime
                      ? (n = t.preClickTime)
                      : t.preTouchTime && (n = t.preTouchTime),
                    Math.abs(n - t.focusTime) < 20)
                  )
                    return;
                  t.focusTime = 0;
                }
                (t.preClickTime = 0),
                  (t.preTouchTime = 0),
                  t.isClickToShow() &&
                    (t.isClickToHide() || t.isBlurToHide()) &&
                    e &&
                    e.preventDefault &&
                    e.preventDefault();
                var r = !t.state.popupVisible;
                ((t.isClickToHide() && !r) || (r && t.isClickToShow())) &&
                  t.setPopupVisible(!t.state.popupVisible, e);
              }),
              (t.onPopupMouseDown = function () {
                var e;
                (t.hasPopupMouseDown = !0),
                  clearTimeout(t.mouseDownTimeout),
                  (t.mouseDownTimeout = window.setTimeout(function () {
                    t.hasPopupMouseDown = !1;
                  }, 0)),
                  t.context &&
                    (e = t.context).onPopupMouseDown.apply(e, arguments);
              }),
              (t.onDocumentClick = function (e) {
                if (!t.props.mask || t.props.maskClosable) {
                  var n = e.target,
                    r = t.getRootDomNode(),
                    o = t.getPopupDomNode();
                  re(r, n) || re(o, n) || t.hasPopupMouseDown || t.close();
                }
              }),
              (t.getRootDomNode = function () {
                var e = t.props.getTriggerDOMNode;
                if (e) return e(t.triggerRef.current);
                try {
                  var n = oe(t.triggerRef.current);
                  if (n) return n;
                } catch (e) {}
                return P.a.findDOMNode(Tn(t));
              }),
              (t.getPopupClassNameFromAlign = function (e) {
                var n = [],
                  r = t.props,
                  o = r.popupPlacement,
                  i = r.builtinPlacements,
                  a = r.prefixCls,
                  u = r.alignPoint,
                  l = r.getPopupClassNameFromAlign;
                return (
                  o &&
                    i &&
                    n.push(
                      (function (e, t, n, r) {
                        for (
                          var o = n.points, i = Object.keys(e), a = 0;
                          a < i.length;
                          a += 1
                        ) {
                          var u = i[a];
                          if (xe(e[u].points, o, r))
                            return "".concat(t, "-placement-").concat(u);
                        }
                        return "";
                      })(i, a, e, u)
                    ),
                  l && n.push(l(e)),
                  n.join(" ")
                );
              }),
              (t.getComponent = function () {
                var e = t.props,
                  n = e.prefixCls,
                  r = e.destroyPopupOnHide,
                  o = e.popupClassName,
                  i = e.onPopupAlign,
                  a = e.popupMotion,
                  u = e.popupAnimation,
                  l = e.popupTransitionName,
                  c = e.popupStyle,
                  s = e.mask,
                  f = e.maskAnimation,
                  p = e.maskTransitionName,
                  d = e.maskMotion,
                  m = e.zIndex,
                  v = e.popup,
                  y = e.stretch,
                  g = e.alignPoint,
                  b = t.state,
                  w = b.popupVisible,
                  x = b.point,
                  E = t.getPopupAlign(),
                  S = {};
                return (
                  t.isMouseEnterToShow() &&
                    (S.onMouseEnter = t.onPopupMouseEnter),
                  t.isMouseLeaveToHide() &&
                    (S.onMouseLeave = t.onPopupMouseLeave),
                  (S.onMouseDown = t.onPopupMouseDown),
                  (S.onTouchStart = t.onPopupMouseDown),
                  h.a.createElement(
                    vn,
                    Object.assign(
                      {
                        prefixCls: n,
                        destroyPopupOnHide: r,
                        visible: w,
                        point: g && x,
                        className: o,
                        align: E,
                        onAlign: i,
                        animation: u,
                        getClassNameFromAlign: t.getPopupClassNameFromAlign,
                      },
                      S,
                      {
                        stretch: y,
                        getRootDomNode: t.getRootDomNode,
                        style: c,
                        mask: s,
                        zIndex: m,
                        transitionName: l,
                        maskAnimation: f,
                        maskTransitionName: p,
                        maskMotion: d,
                        ref: t.popupRef,
                        motion: a,
                      }
                    ),
                    "function" == typeof v ? v() : v
                  )
                );
              }),
              (t.getContainer = function () {
                var e = Tn(t).props,
                  n = document.createElement("div");
                return (
                  (n.style.position = "absolute"),
                  (n.style.top = "0"),
                  (n.style.left = "0"),
                  (n.style.width = "100%"),
                  (e.getPopupContainer
                    ? e.getPopupContainer(t.getRootDomNode())
                    : e.getDocument().body
                  ).appendChild(n),
                  n
                );
              }),
              (t.setPoint = function (e) {
                t.props.alignPoint &&
                  e &&
                  t.setState({ point: { pageX: e.pageX, pageY: e.pageY } });
              }),
              (t.handlePortalUpdate = function () {
                t.state.prevPopupVisible !== t.state.popupVisible &&
                  t.props.afterPopupVisibleChange(t.state.popupVisible);
              }),
              (n =
                "popupVisible" in e
                  ? !!e.popupVisible
                  : !!e.defaultPopupVisible),
              (t.state = { prevPopupVisible: n, popupVisible: n }),
              Mn.forEach(function (e) {
                t["fire".concat(e)] = function (n) {
                  t.fireEvents(e, n);
                };
              }),
              t
            );
          }
          return (
            (t = i),
            (r = [
              {
                key: "getDerivedStateFromProps",
                value: function (e, t) {
                  var n = e.popupVisible,
                    r = {};
                  return (
                    void 0 !== n &&
                      t.popupVisible !== n &&
                      ((r.popupVisible = n),
                      (r.prevPopupVisible = t.popupVisible)),
                    r
                  );
                },
              },
            ]),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  this.componentDidUpdate();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var e,
                    t = this.props;
                  if (this.state.popupVisible)
                    return (
                      this.clickOutsideHandler ||
                        (!this.isClickToHide() &&
                          !this.isContextMenuToShow()) ||
                        ((e = t.getDocument()),
                        (this.clickOutsideHandler = _(
                          e,
                          "mousedown",
                          this.onDocumentClick
                        ))),
                      this.touchOutsideHandler ||
                        ((e = e || t.getDocument()),
                        (this.touchOutsideHandler = _(
                          e,
                          "touchstart",
                          this.onDocumentClick
                        ))),
                      !this.contextMenuOutsideHandler1 &&
                        this.isContextMenuToShow() &&
                        ((e = e || t.getDocument()),
                        (this.contextMenuOutsideHandler1 = _(
                          e,
                          "scroll",
                          this.onContextMenuClose
                        ))),
                      void (
                        !this.contextMenuOutsideHandler2 &&
                        this.isContextMenuToShow() &&
                        (this.contextMenuOutsideHandler2 = _(
                          window,
                          "blur",
                          this.onContextMenuClose
                        ))
                      )
                    );
                  this.clearOutsideHandler();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.clearDelayTimer(),
                    this.clearOutsideHandler(),
                    clearTimeout(this.mouseDownTimeout);
                },
              },
              {
                key: "getPopupDomNode",
                value: function () {
                  return this.popupRef.current &&
                    this.popupRef.current.popupRef.current
                    ? this.popupRef.current.popupRef.current
                    : null;
                },
              },
              {
                key: "getPopupAlign",
                value: function () {
                  var e = this.props,
                    t = e.popupPlacement,
                    n = e.popupAlign,
                    r = e.builtinPlacements;
                  return t && r
                    ? (function (e, t, n) {
                        return be(be({}, e[t] || {}), n);
                      })(r, t, n)
                    : n;
                },
              },
              {
                key: "setPopupVisible",
                value: function (e, t) {
                  var n = this.props.alignPoint,
                    r = this.state.popupVisible;
                  this.clearDelayTimer(),
                    r !== e &&
                      ("popupVisible" in this.props ||
                        this.setState({ popupVisible: e, prevPopupVisible: r }),
                      this.props.onPopupVisibleChange(e)),
                    n && t && this.setPoint(t);
                },
              },
              {
                key: "delaySetPopupVisible",
                value: function (e, t, n) {
                  var r = this,
                    o = 1e3 * t;
                  if ((this.clearDelayTimer(), o)) {
                    var i = n ? { pageX: n.pageX, pageY: n.pageY } : null;
                    this.delayTimer = window.setTimeout(function () {
                      r.setPopupVisible(e, i), r.clearDelayTimer();
                    }, o);
                  } else this.setPopupVisible(e, n);
                },
              },
              {
                key: "clearDelayTimer",
                value: function () {
                  this.delayTimer &&
                    (clearTimeout(this.delayTimer), (this.delayTimer = null));
                },
              },
              {
                key: "clearOutsideHandler",
                value: function () {
                  this.clickOutsideHandler &&
                    (this.clickOutsideHandler.remove(),
                    (this.clickOutsideHandler = null)),
                    this.contextMenuOutsideHandler1 &&
                      (this.contextMenuOutsideHandler1.remove(),
                      (this.contextMenuOutsideHandler1 = null)),
                    this.contextMenuOutsideHandler2 &&
                      (this.contextMenuOutsideHandler2.remove(),
                      (this.contextMenuOutsideHandler2 = null)),
                    this.touchOutsideHandler &&
                      (this.touchOutsideHandler.remove(),
                      (this.touchOutsideHandler = null));
                },
              },
              {
                key: "createTwoChains",
                value: function (e) {
                  var t = this.props.children.props,
                    n = this.props;
                  return t[e] && n[e] ? this["fire".concat(e)] : t[e] || n[e];
                },
              },
              {
                key: "isClickToShow",
                value: function () {
                  var e = this.props,
                    t = e.action,
                    n = e.showAction;
                  return -1 !== t.indexOf("click") || -1 !== n.indexOf("click");
                },
              },
              {
                key: "isContextMenuToShow",
                value: function () {
                  var e = this.props,
                    t = e.action,
                    n = e.showAction;
                  return (
                    -1 !== t.indexOf("contextMenu") ||
                    -1 !== n.indexOf("contextMenu")
                  );
                },
              },
              {
                key: "isClickToHide",
                value: function () {
                  var e = this.props,
                    t = e.action,
                    n = e.hideAction;
                  return -1 !== t.indexOf("click") || -1 !== n.indexOf("click");
                },
              },
              {
                key: "isMouseEnterToShow",
                value: function () {
                  var e = this.props,
                    t = e.action,
                    n = e.showAction;
                  return (
                    -1 !== t.indexOf("hover") || -1 !== n.indexOf("mouseEnter")
                  );
                },
              },
              {
                key: "isMouseLeaveToHide",
                value: function () {
                  var e = this.props,
                    t = e.action,
                    n = e.hideAction;
                  return (
                    -1 !== t.indexOf("hover") || -1 !== n.indexOf("mouseLeave")
                  );
                },
              },
              {
                key: "isFocusToShow",
                value: function () {
                  var e = this.props,
                    t = e.action,
                    n = e.showAction;
                  return -1 !== t.indexOf("focus") || -1 !== n.indexOf("focus");
                },
              },
              {
                key: "isBlurToHide",
                value: function () {
                  var e = this.props,
                    t = e.action,
                    n = e.hideAction;
                  return -1 !== t.indexOf("focus") || -1 !== n.indexOf("blur");
                },
              },
              {
                key: "forcePopupAlign",
                value: function () {
                  this.state.popupVisible &&
                    this.popupRef.current &&
                    this.popupRef.current.alignRef.current &&
                    this.popupRef.current.alignRef.current.forceAlign();
                },
              },
              {
                key: "fireEvents",
                value: function (e, t) {
                  var n = this.props.children.props[e];
                  n && n(t);
                  var r = this.props[e];
                  r && r(t);
                },
              },
              {
                key: "close",
                value: function () {
                  this.setPopupVisible(!1);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.popupVisible,
                    t = this.props,
                    n = t.children,
                    r = t.forceRender,
                    o = t.alignPoint,
                    i = t.className,
                    a = h.a.Children.only(n),
                    u = { key: "trigger" };
                  this.isContextMenuToShow()
                    ? (u.onContextMenu = this.onContextMenu)
                    : (u.onContextMenu = this.createTwoChains("onContextMenu")),
                    this.isClickToHide() || this.isClickToShow()
                      ? ((u.onClick = this.onClick),
                        (u.onMouseDown = this.onMouseDown),
                        (u.onTouchStart = this.onTouchStart))
                      : ((u.onClick = this.createTwoChains("onClick")),
                        (u.onMouseDown = this.createTwoChains("onMouseDown")),
                        (u.onTouchStart =
                          this.createTwoChains("onTouchStart"))),
                    this.isMouseEnterToShow()
                      ? ((u.onMouseEnter = this.onMouseEnter),
                        o && (u.onMouseMove = this.onMouseMove))
                      : (u.onMouseEnter = this.createTwoChains("onMouseEnter")),
                    this.isMouseLeaveToHide()
                      ? (u.onMouseLeave = this.onMouseLeave)
                      : (u.onMouseLeave = this.createTwoChains("onMouseLeave")),
                    this.isFocusToShow() || this.isBlurToHide()
                      ? ((u.onFocus = this.onFocus), (u.onBlur = this.onBlur))
                      : ((u.onFocus = this.createTwoChains("onFocus")),
                        (u.onBlur = this.createTwoChains("onBlur")));
                  var l = M()(a && a.props && a.props.className, i);
                  l && (u.className = l);
                  var c,
                    s = (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? bn(Object(n), !0).forEach(function (t) {
                              wn(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                            )
                          : bn(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(n, t)
                              );
                            });
                      }
                      return e;
                    })({}, u);
                  ((c = a).type &&
                    c.type.prototype &&
                    !c.type.prototype.render) ||
                    ("function" == typeof c &&
                      c.prototype &&
                      !c.prototype.render) ||
                    (s.ref = ue(this.triggerRef, a.ref));
                  var f,
                    p = h.a.cloneElement(a, s);
                  return (
                    (e || this.popupRef.current || r) &&
                      (f = h.a.createElement(
                        Nn,
                        {
                          key: "portal",
                          getContainer: this.getContainer,
                          didUpdate: this.handlePortalUpdate,
                        },
                        this.getComponent()
                      )),
                    h.a.createElement(
                      yn.Provider,
                      { value: { onPopupMouseDown: this.onPopupMouseDown } },
                      p,
                      f
                    )
                  );
                },
              },
            ]) && xn(t.prototype, n),
            r && xn(t, r),
            i
          );
        })(h.a.Component)).contextType = yn),
        (jn.defaultProps = {
          prefixCls: "rc-trigger-popup",
          getPopupClassNameFromAlign: _n,
          getDocument: Cn,
          onPopupVisibleChange: Pn,
          afterPopupVisibleChange: Pn,
          onPopupAlign: Pn,
          popupClassName: "",
          mouseEnterDelay: 0,
          mouseLeaveDelay: 0.1,
          focusDelay: 0,
          blurDelay: 0.15,
          popupStyle: {},
          destroyPopupOnHide: !1,
          popupAlign: {},
          defaultPopupVisible: !1,
          mask: !1,
          maskClosable: !0,
          action: [],
          showAction: [],
          hideAction: [],
        }),
        jn),
      Rn = { adjustX: 1, adjustY: 1 },
      Dn = [0, 0],
      In = {
        left: {
          points: ["cr", "cl"],
          overflow: Rn,
          offset: [-4, 0],
          targetOffset: Dn,
        },
        right: {
          points: ["cl", "cr"],
          overflow: Rn,
          offset: [4, 0],
          targetOffset: Dn,
        },
        top: {
          points: ["bc", "tc"],
          overflow: Rn,
          offset: [0, -4],
          targetOffset: Dn,
        },
        bottom: {
          points: ["tc", "bc"],
          overflow: Rn,
          offset: [0, 4],
          targetOffset: Dn,
        },
        topLeft: {
          points: ["bl", "tl"],
          overflow: Rn,
          offset: [0, -4],
          targetOffset: Dn,
        },
        leftTop: {
          points: ["tr", "tl"],
          overflow: Rn,
          offset: [-4, 0],
          targetOffset: Dn,
        },
        topRight: {
          points: ["br", "tr"],
          overflow: Rn,
          offset: [0, -4],
          targetOffset: Dn,
        },
        rightTop: {
          points: ["tl", "tr"],
          overflow: Rn,
          offset: [4, 0],
          targetOffset: Dn,
        },
        bottomRight: {
          points: ["tr", "br"],
          overflow: Rn,
          offset: [0, 4],
          targetOffset: Dn,
        },
        rightBottom: {
          points: ["bl", "br"],
          overflow: Rn,
          offset: [4, 0],
          targetOffset: Dn,
        },
        bottomLeft: {
          points: ["tl", "bl"],
          overflow: Rn,
          offset: [0, 4],
          targetOffset: Dn,
        },
        leftBottom: {
          points: ["br", "bl"],
          overflow: Rn,
          offset: [-4, 0],
          targetOffset: Dn,
        },
      },
      Fn = function (e) {
        var t = e.overlay,
          n = e.prefixCls,
          r = e.id;
        return h.a.createElement(
          "div",
          { className: "".concat(n, "-inner"), id: r, role: "tooltip" },
          "function" == typeof t ? t() : t
        );
      };
    function Ln(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function zn(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function Un(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]));
      }
      return o;
    }
    var Hn = Object(d.forwardRef)(function (e, t) {
      var n = e.overlayClassName,
        r = e.trigger,
        o = void 0 === r ? ["hover"] : r,
        i = e.mouseEnterDelay,
        a = void 0 === i ? 0 : i,
        u = e.mouseLeaveDelay,
        l = void 0 === u ? 0.1 : u,
        c = e.overlayStyle,
        s = e.prefixCls,
        f = void 0 === s ? "rc-tooltip" : s,
        p = e.children,
        m = e.onVisibleChange,
        v = e.afterVisibleChange,
        y = e.transitionName,
        g = e.animation,
        b = e.placement,
        w = void 0 === b ? "right" : b,
        x = e.align,
        E = void 0 === x ? {} : x,
        S = e.destroyTooltipOnHide,
        k = void 0 !== S && S,
        T = e.defaultVisible,
        O = e.getTooltipContainer,
        P = Un(e, [
          "overlayClassName",
          "trigger",
          "mouseEnterDelay",
          "mouseLeaveDelay",
          "overlayStyle",
          "prefixCls",
          "children",
          "onVisibleChange",
          "afterVisibleChange",
          "transitionName",
          "animation",
          "placement",
          "align",
          "destroyTooltipOnHide",
          "defaultVisible",
          "getTooltipContainer",
        ]),
        _ = Object(d.useRef)(null);
      Object(d.useImperativeHandle)(t, function () {
        return _.current;
      });
      var C = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ln(Object(n), !0).forEach(function (t) {
                zn(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ln(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      })({}, P);
      "visible" in e && (C.popupVisible = e.visible);
      return h.a.createElement(
        An,
        Object.assign(
          {
            popupClassName: n,
            prefixCls: f,
            popup: function () {
              var t = e.arrowContent,
                n = void 0 === t ? null : t,
                r = e.overlay,
                o = e.id;
              return [
                h.a.createElement(
                  "div",
                  { className: "".concat(f, "-arrow"), key: "arrow" },
                  n
                ),
                h.a.createElement(Fn, {
                  key: "content",
                  prefixCls: f,
                  id: o,
                  overlay: r,
                }),
              ];
            },
            action: o,
            builtinPlacements: In,
            popupPlacement: w,
            ref: _,
            popupAlign: E,
            getPopupContainer: O,
            onPopupVisibleChange: m,
            afterPopupVisibleChange: v,
            popupTransitionName: y,
            popupAnimation: g,
            defaultPopupVisible: T,
            destroyPopupOnHide: k,
            mouseLeaveDelay: l,
            popupStyle: c,
            mouseEnterDelay: a,
          },
          C
        ),
        p
      );
    });
    function Vn(e) {
      var t, n;
      return (
        (n = t =
          (function (t) {
            function n() {
              var e, t, r, i;
              a()(this, n);
              for (var u = arguments.length, l = Array(u), c = 0; c < u; c++)
                l[c] = arguments[c];
              return (
                (t = r =
                  s()(
                    this,
                    (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(
                      e,
                      [this].concat(l)
                    )
                  )),
                (r.state = { visibles: {} }),
                (r.handleTooltipVisibleChange = function (e, t) {
                  r.setState(function (n) {
                    return { visibles: o()({}, n.visibles, g()({}, e, t)) };
                  });
                }),
                (r.handleWithTooltip = function (e) {
                  var t = e.value,
                    n = e.dragging,
                    i = e.index,
                    a = e.disabled,
                    u = x()(e, ["value", "dragging", "index", "disabled"]),
                    l = r.props,
                    c = l.tipFormatter,
                    s = l.tipProps,
                    f = l.handleStyle,
                    p = l.getTooltipContainer,
                    d = s.prefixCls,
                    m = void 0 === d ? "rc-slider-tooltip" : d,
                    v = s.overlay,
                    y = void 0 === v ? c(t) : v,
                    g = s.placement,
                    b = void 0 === g ? "top" : g,
                    w = s.visible,
                    E = void 0 !== w && w,
                    S = x()(s, [
                      "prefixCls",
                      "overlay",
                      "placement",
                      "visible",
                    ]),
                    k = void 0;
                  return (
                    (k = Array.isArray(f) ? f[i] || f[0] : f),
                    h.a.createElement(
                      Hn,
                      o()({}, S, {
                        getTooltipContainer: p,
                        prefixCls: m,
                        overlay: y,
                        placement: b,
                        visible: (!a && (r.state.visibles[i] || n)) || E,
                        key: i,
                      }),
                      h.a.createElement(
                        A,
                        o()({}, u, {
                          style: o()({}, k),
                          value: t,
                          onMouseEnter: function () {
                            return r.handleTooltipVisibleChange(i, !0);
                          },
                          onMouseLeave: function () {
                            return r.handleTooltipVisibleChange(i, !1);
                          },
                        })
                      )
                    )
                  );
                }),
                (i = t),
                s()(r, i)
              );
            }
            return (
              p()(n, t),
              l()(n, [
                {
                  key: "render",
                  value: function () {
                    return h.a.createElement(
                      e,
                      o()({}, this.props, { handle: this.handleWithTooltip })
                    );
                  },
                },
              ]),
              n
            );
          })(h.a.Component)),
        (t.defaultProps = {
          tipFormatter: function (e) {
            return e;
          },
          handleStyle: [{}],
          tipProps: {},
          getTooltipContainer: function (e) {
            return e.parentNode;
          },
        }),
        n
      );
    }
    (X.Range = ne), (X.Handle = A), (X.createSliderWithTooltip = Vn);
    t.default = X;
  },
]);
//# sourceMappingURL=bundle.js.map
