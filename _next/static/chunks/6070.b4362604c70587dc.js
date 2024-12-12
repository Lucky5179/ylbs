"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6070],
  {
    58442: function (e, t, n) {
      var r = n(64836);
      t.Z = void 0;
      var o = r(n(64938)),
        a = n(85893),
        i = (0, o.default)(
          (0, a.jsx)("path", {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z",
          }),
          "CheckCircleRounded"
        );
      t.Z = i;
    },
    36191: function (e, t, n) {
      var r = n(64836);
      t.Z = void 0;
      var o = r(n(64938)),
        a = n(85893),
        i = (0, o.default)(
          (0, a.jsx)("path", {
            d: "M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",
          }),
          "CloseRounded"
        );
      t.Z = i;
    },
    51182: function (e, t, n) {
      var r = n(64836);
      t.Z = void 0;
      var o = r(n(64938)),
        a = n(85893),
        i = (0, o.default)(
          (0, a.jsx)("path", {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z",
          }),
          "ErrorRounded"
        );
      t.Z = i;
    },
    37885: function (e, t, n) {
      var r = n(64836);
      t.Z = void 0;
      var o = r(n(64938)),
        a = n(85893),
        i = (0, o.default)(
          (0, a.jsx)("path", {
            d: "M15.32 3H8.68c-.26 0-.52.11-.7.29L3.29 7.98c-.18.18-.29.44-.29.7v6.63c0 .27.11.52.29.71l4.68 4.68c.19.19.45.3.71.3h6.63c.27 0 .52-.11.71-.29l4.68-4.68c.19-.19.29-.44.29-.71V8.68c0-.27-.11-.52-.29-.71l-4.68-4.68c-.18-.18-.44-.29-.7-.29zM12 17.3c-.72 0-1.3-.58-1.3-1.3s.58-1.3 1.3-1.3 1.3.58 1.3 1.3-.58 1.3-1.3 1.3zm0-4.3c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1z",
          }),
          "ReportRounded"
        );
      t.Z = i;
    },
    38183: function (e, t, n) {
      n.r(t),
        n.d(t, {
          AutoCompoundFeesModal: function () {
            return V;
          },
        });
      var r = n(59499),
        o = n(67294),
        a = n(8195),
        i = n(88543),
        c = n(32369),
        s = n(49501),
        u = n(70794),
        l = n(61953),
        d = n(81138),
        p = n(81011),
        f = n(51324),
        v = n(58527),
        m = n(70253),
        x = n(30820),
        h = n(2802),
        g = n(87899),
        b = n(32295),
        y = n(34275),
        j = n(50468),
        O = n(21878),
        w = n(6751),
        k = n(77642),
        P = n(50029),
        E = n(17674),
        A = n(87794),
        T = n.n(A),
        C = n(72864),
        S = n(31001),
        D = n(77537),
        R = n(39771),
        Z = n(70574),
        L = n(85893);
      function _(e, t) {
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
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var N = o.memo(function (e) {
        var t = e.marketId,
          n = e.isWrongNetwork,
          r = e.positionAddress,
          i = e.maxTotalFeePercent,
          c = e.initialized,
          s = e.hasValueChanges,
          u = (0, a.vR)(),
          d = u.mainTxState,
          p = u.setMainTxState,
          f = u.setTxError,
          v = u.setGasLimit,
          m = (0, D.Z)().sendTx,
          x = (0, g.Yh)(function (e) {
            return e.currentChainId;
          }),
          h = (0, g.Yh)(function (e) {
            return [
              e.setupAutoCompound,
              e.cancelAutoCompound,
              e.estimateGasLimit,
            ];
          }),
          b = (0, E.Z)(h, 3),
          y = b[0],
          j = b[1],
          O = b[2],
          w = (function () {
            var e = (0, P.Z)(
              T().mark(function e() {
                var n, o, a;
                return T().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (t && r && i && !d.success) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            (e.prev = 2),
                            window.gtag(
                              "event",
                              "leverage_modal_setup_auto_compound"
                            ),
                            f(void 0),
                            p(I(I({}, d), {}, { loading: !0, value: "setup" })),
                            (n = y(t, r, i)),
                            (e.next = 9),
                            m(n)
                          );
                        case 9:
                          return (
                            (o = e.sent),
                            (e.next = 12),
                            C.queryClient.invalidateQueries({
                              queryKey: [
                                S.iP.YLDR_LEVERAGE_AUTOMATIONS,
                                x,
                                t,
                                [r],
                              ],
                            })
                          );
                        case 12:
                          return (e.next = 14), o.wait(1);
                        case 14:
                          return (
                            (e.next = 16),
                            C.queryClient.invalidateQueries({
                              queryKey: [
                                S.iP.YLDR_LEVERAGE_AUTOMATIONS,
                                x,
                                t,
                                [r],
                              ],
                            })
                          );
                        case 16:
                          p({ txHash: o.hash, loading: !1, success: !0 }),
                            (e.next = 24);
                          break;
                        case 19:
                          (e.prev = 19),
                            (e.t0 = e.catch(2)),
                            (a = (0, R.WG)(e.t0, R.aD.GAS_ESTIMATION, !1)),
                            f(a),
                            p({ txHash: void 0, loading: !1 });
                        case 24:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 19]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          k = (function () {
            var e = (0, P.Z)(
              T().mark(function e() {
                var n, o, a;
                return T().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (t && r && !d.success) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            (e.prev = 2),
                            window.gtag(
                              "event",
                              "leverage_modal_cancel_auto_compound"
                            ),
                            f(void 0),
                            p(
                              I(I({}, d), {}, { loading: !0, value: "cancel" })
                            ),
                            (n = j(t, r)),
                            (e.next = 9),
                            m(n)
                          );
                        case 9:
                          return (
                            (o = e.sent),
                            (e.next = 12),
                            C.queryClient.invalidateQueries({
                              queryKey: [
                                S.iP.YLDR_LEVERAGE_AUTOMATIONS,
                                x,
                                t,
                                [r],
                              ],
                            })
                          );
                        case 12:
                          return (e.next = 14), o.wait(1);
                        case 14:
                          return (
                            (e.next = 16),
                            C.queryClient.invalidateQueries({
                              queryKey: [
                                S.iP.YLDR_LEVERAGE_AUTOMATIONS,
                                x,
                                t,
                                [r],
                              ],
                            })
                          );
                        case 16:
                          p({ txHash: o.hash, loading: !1, success: !0 }),
                            (e.next = 24);
                          break;
                        case 19:
                          (e.prev = 19),
                            (e.t0 = e.catch(2)),
                            (a = (0, R.WG)(e.t0, R.aD.GAS_ESTIMATION, !1)),
                            f(a),
                            p({ txHash: void 0, loading: !1 });
                        case 24:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 19]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (
          (0, o.useEffect)(
            function () {
              if (t && r && i && !d.success) {
                var e = (function () {
                    var e = (0, P.Z)(
                      T().mark(function e() {
                        var n, o, a;
                        return T().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (o = c ? j(t, r) : y(t, r, i)),
                                  (e.next = 3),
                                  O(o)
                                );
                              case 3:
                                (a = e.sent),
                                  v(
                                    (null === (n = a.gasLimit) || void 0 === n
                                      ? void 0
                                      : n.toString()) || "0"
                                  );
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                  n = setTimeout(e, 500),
                  o = setInterval(e, 15e3);
                return function () {
                  clearInterval(o), clearTimeout(n);
                };
              }
            },
            [i, d.success]
          ),
          (0, L.jsxs)(l.Z, {
            sx: { display: "flex", flexDirection: "column", gap: 2 },
            children: [
              (0, L.jsx)(Z.v, {
                mainTxState: d,
                disabledLoading: "cancel" === d.value,
                isWrongNetwork: n,
                requiresAmount: !0,
                preparingTransactions: !1,
                actionText: c ? "Apply changes" : "Enable auto-compound",
                actionInProgressText: c
                  ? "Applying changes"
                  : "Enabling auto-compound",
                handleAction: w,
                variantPositive: !0,
                disabled: !s && c,
              }),
              c &&
                (0, L.jsx)(Z.v, {
                  mainTxState: d,
                  disabledLoading: "setup" === d.value,
                  isWrongNetwork: n,
                  requiresAmount: !0,
                  preparingTransactions: !1,
                  actionText: "Disable auto-compound",
                  actionInProgressText: "Disabling auto-compound",
                  handleAction: k,
                  variantPositive: !1,
                  sx: { mt: 0 },
                }),
            ],
          })
        );
      });
      function M(e, t) {
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
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? M(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : M(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var F = o.memo(function (e) {
        var t = e.enrichedPosition,
          n = e.positionAddress,
          r = e.isWrongNetwork,
          c = (0, o.useState)((10).toString()),
          P = c[0],
          E = c[1],
          A = (0, o.useState)(!1),
          T = A[0],
          C = A[1],
          S = (0, a.vR)(),
          D = S.mainTxState,
          R = S.gasLimit,
          Z = S.txError,
          _ = S.setTxError,
          I = (0, g.Yh)(function (e) {
            return e.currentNetworkConfig;
          }),
          M = (0, o.useRef)(null),
          F = (0, m.o)({ position: t }),
          G = F.estApr,
          V = F.revenueFee,
          q = (0, y.v)({
            marketId: t.marketId,
            positions: n ? [n] : void 0,
          }).data,
          Y = null === q || void 0 === q ? void 0 : q.compounds[0].initialized,
          W =
            null === q || void 0 === q
              ? void 0
              : q.compounds[0].maxTotalFeePercent.div(100).toString(),
          H = Y && P !== W,
          U = {
            marketId: t.marketId,
            maxTotalFeePercent: (0, u.Z)(P || 0)
              .multipliedBy(100)
              .toFixed(0),
            initialized: T,
            hasValueChanges: H,
            positionAddress: n,
            isWrongNetwork: r,
          },
          B = (0, x.F)({
            positionApr: G - V,
            borrowed: t.marketReferenceCurrencyDebt,
            positionValue: t.marketReferenceCurrencyValue,
            compoundGasCost: I.compoundGasCost,
            compoundCostCap: Number(P),
          });
        return (
          (0, o.useLayoutEffect)(
            function () {
              Y && W && (E(W), C(Y));
            },
            [Y, W]
          ),
          D.success
            ? (0, L.jsx)(i.mf, {
                children: (0, L.jsx)(w.R, {
                  action: (0, L.jsx)(s.cC, { id: "successfully enabled" }),
                  prefix: "$",
                  amount: D.value,
                }),
              })
            : (0, L.jsxs)(L.Fragment, {
                children: [
                  (0, L.jsx)(i.Rh, {
                    withDivider: !0,
                    children: (0, L.jsx)(j.Z, {
                      title: T
                        ? "Disable auto-compound"
                        : "Enable auto-compound",
                      marketName:
                        null === t || void 0 === t ? void 0 : t.marketName,
                      tokenA: null === t || void 0 === t ? void 0 : t.token0,
                      tokenB: null === t || void 0 === t ? void 0 : t.token1,
                      fee: null === t || void 0 === t ? void 0 : t.fee,
                    }),
                  }),
                  (0, L.jsxs)(i.mf, {
                    children: [
                      (0, L.jsxs)(l.Z, {
                        sx: {
                          my: 5,
                          padding: "12px 16px 16px",
                          borderRadius: "10px",
                          border: "1px solid rgba(255, 255, 255, 0.06)",
                          background:
                            "radial-gradient(302.62% 77.77% at 0% 0%, rgba(128, 97, 229, 0.14) 0%, rgba(128, 97, 229, 0.00) 100%), radial-gradient(253.43% 70.61% at 100% 100%, rgba(128, 97, 229, 0.12) 0%, rgba(128, 97, 229, 0.00) 100%), #1F1F23",
                        },
                        children: [
                          (0, L.jsxs)(d.Z, {
                            variant: "main15",
                            sx: { mb: 1, color: "#8061E5" },
                            children: [
                              "Boost your APR up to ",
                              (0, h.d)(B.apr),
                              "%",
                            ],
                          }),
                          (0, L.jsxs)(d.Z, {
                            variant: "secondary13",
                            color: "text.secondary",
                            children: [
                              "YLBS automatically reinvests uncollected fees back into the position whenever it can cover the transaction cost by taking ",
                              P,
                              "% of the accumulated fees.",
                            ],
                          }),
                        ],
                      }),
                      (0, L.jsxs)(l.Z, {
                        sx: {
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                        },
                        children: [
                          (0, L.jsxs)(l.Z, {
                            sx: {
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            },
                            children: [
                              (0, L.jsx)(d.Z, {
                                variant: "secondary13",
                                color: "text.tertiary",
                                children: "Maximum transaction cost",
                              }),
                              (0, L.jsx)(v.G, {
                                children: (0, L.jsx)(L.Fragment, {
                                  children:
                                    "This represents the maximum percentage of accumulated fees that will be used to cover the transaction cost for each compound.",
                                }),
                              }),
                            ],
                          }),
                          (0, L.jsx)(l.Z, {
                            sx: {
                              display: "flex",
                              alignItems: "center",
                              gap: 2,
                              px: 3,
                              py: 2,
                              borderRadius: "8px",
                              border: "1px solid rgba(255, 255, 255, 0.06)",
                              backgroundColor: "#2A2A32",
                              'input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button':
                                { "-webkit-appearance": "none" },
                              'input[type="number"], input[type="number"]:hover, input[type="number"]:focus':
                                {
                                  appearance: "none",
                                  "-moz-appearance": "textfield",
                                },
                            },
                            children: (0, L.jsx)(p.ZP, {
                              inputRef: M,
                              value: "".concat(P, "%"),
                              onChange: function (e) {
                                var t = e.currentTarget.value
                                    .replace(/[^\d.,]/g, "")
                                    .replace(",", "."),
                                  n = (Number(t) > 100 ? 100 : t).toString(),
                                  r = (0, b.i)(n, 1);
                                r && E(n.toString()),
                                  setTimeout(function () {
                                    if (M.current) {
                                      var e = r ? n.length : P.length;
                                      (M.current.selectionStart = e),
                                        (M.current.selectionEnd = e);
                                    }
                                  }, 0);
                              },
                              onBlur: function () {
                                var e = Number(P) < 5 ? 5 : P;
                                E(e.toString());
                              },
                              onFocus: function () {
                                setTimeout(function () {
                                  if (M.current) {
                                    var e = P.toString().length;
                                    (M.current.selectionStart = e),
                                      (M.current.selectionEnd = e);
                                  }
                                }, 0);
                              },
                              sx: { flex: 1 },
                            }),
                          }),
                        ],
                      }),
                      (0, L.jsxs)(O.m6, {
                        description: k.U,
                        gasLimit: R,
                        skipLoad: !0,
                        children: [
                          (0, L.jsx)(O.oD, {
                            captionColor: "text.secondary",
                            description: "Est. yearly compounds",
                            value: B.compounds,
                            visibleDecimals: 0,
                          }),
                          (0, L.jsx)(O.oD, {
                            captionColor: "text.secondary",
                            description: "Protocol fee",
                            tooltip:
                              "This fee covers transaction costs and flash loans. It will be applied to each compound and added to the total debt amount.",
                            value: B.compoundCost,
                            numberPrefix: "$",
                          }),
                        ],
                      }),
                      Z &&
                        (0, L.jsx)(f.Y, {
                          variant: "error",
                          txError: Z,
                          onClose: function () {
                            return _(void 0);
                          },
                        }),
                    ],
                  }),
                  (0, L.jsx)(i.Ys, { children: (0, L.jsx)(N, z({}, U)) }),
                ],
              })
        );
      });
      function G(e, t) {
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
      var V = function () {
        var e = (0, a.vR)(),
          t = e.type,
          n = e.args,
          o = e.close;
        return (0, L.jsx)(i.XC, {
          open: t === a.w8.AutoCompoundFees,
          setOpen: o,
          children: (0, L.jsx)(c.o, {
            positionAddress: n.positionAddress,
            modernStyle: !0,
            children: function (e) {
              return (0, L.jsx)(
                F,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? G(Object(n), !0).forEach(function (t) {
                          (0, r.Z)(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : G(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                })({}, e)
              );
            },
          }),
        });
      };
    },
    77642: function (e, t, n) {
      n.d(t, {
        U: function () {
          return r;
        },
      });
      var r =
        "Added amounts may be lower than displayed due to slippage, any differences will be refunded to wallet within the same transaction";
    },
    32295: function (e, t, n) {
      n.d(t, {
        i: function () {
          return r;
        },
      });
      var r = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          n = new RegExp("^(?!0[0-9])[0-9]+[.,]?[0-9]{0,".concat(t, "}$"), "g");
        return (
          ((null === e || void 0 === e ? void 0 : e.match(n)) &&
            e.length <= 79) ||
          !e.length
        );
      };
    },
    56365: function (e, t, n) {
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
          })
        );
      });
      t.Z = o;
    },
  },
]);
//# sourceMappingURL=6070.b4362604c70587dc.js.map
