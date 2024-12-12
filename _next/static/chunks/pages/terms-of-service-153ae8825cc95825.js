(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [507],
  {
    36667: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return w;
        },
      });
      var r = t(63366),
        i = t(87462),
        o = t(67294),
        a = t(86010),
        s = t(47925),
        l = t(94780),
        c = t(41796),
        d = t(81719),
        u = t(78884),
        h = t(83187),
        p = t(36622),
        x = t(77391);
      var g = o.createContext({}),
        m = t(85893);
      const v = [
          "children",
          "color",
          "component",
          "className",
          "disabled",
          "disableElevation",
          "disableFocusRipple",
          "endIcon",
          "focusVisibleClassName",
          "fullWidth",
          "size",
          "startIcon",
          "type",
          "variant",
        ],
        f = (e) =>
          (0, i.Z)(
            {},
            "small" === e.size && { "& > *:nth-of-type(1)": { fontSize: 18 } },
            "medium" === e.size && { "& > *:nth-of-type(1)": { fontSize: 20 } },
            "large" === e.size && { "& > *:nth-of-type(1)": { fontSize: 22 } }
          ),
        b = (0, d.ZP)(h.Z, {
          shouldForwardProp: (e) => (0, d.FO)(e) || "classes" === e,
          name: "MuiButton",
          slot: "Root",
          overridesResolver: (e, n) => {
            const { ownerState: t } = e;
            return [
              n.root,
              n[t.variant],
              n[`${t.variant}${(0, p.Z)(t.color)}`],
              n[`size${(0, p.Z)(t.size)}`],
              n[`${t.variant}Size${(0, p.Z)(t.size)}`],
              "inherit" === t.color && n.colorInherit,
              t.disableElevation && n.disableElevation,
              t.fullWidth && n.fullWidth,
            ];
          },
        })(
          ({ theme: e, ownerState: n }) => {
            var t, r;
            return (0, i.Z)(
              {},
              e.typography.button,
              {
                minWidth: 64,
                padding: "6px 16px",
                borderRadius: (e.vars || e).shape.borderRadius,
                transition: e.transitions.create(
                  ["background-color", "box-shadow", "border-color", "color"],
                  { duration: e.transitions.duration.short }
                ),
                "&:hover": (0, i.Z)(
                  {
                    textDecoration: "none",
                    backgroundColor: e.vars
                      ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : (0, c.Fq)(
                          e.palette.text.primary,
                          e.palette.action.hoverOpacity
                        ),
                    "@media (hover: none)": { backgroundColor: "transparent" },
                  },
                  "text" === n.variant &&
                    "inherit" !== n.color && {
                      backgroundColor: e.vars
                        ? `rgba(${e.vars.palette[n.color].mainChannel} / ${
                            e.vars.palette.action.hoverOpacity
                          })`
                        : (0, c.Fq)(
                            e.palette[n.color].main,
                            e.palette.action.hoverOpacity
                          ),
                      "@media (hover: none)": {
                        backgroundColor: "transparent",
                      },
                    },
                  "outlined" === n.variant &&
                    "inherit" !== n.color && {
                      border: `1px solid ${
                        (e.vars || e).palette[n.color].main
                      }`,
                      backgroundColor: e.vars
                        ? `rgba(${e.vars.palette[n.color].mainChannel} / ${
                            e.vars.palette.action.hoverOpacity
                          })`
                        : (0, c.Fq)(
                            e.palette[n.color].main,
                            e.palette.action.hoverOpacity
                          ),
                      "@media (hover: none)": {
                        backgroundColor: "transparent",
                      },
                    },
                  "contained" === n.variant && {
                    backgroundColor: (e.vars || e).palette.grey.A100,
                    boxShadow: (e.vars || e).shadows[4],
                    "@media (hover: none)": {
                      boxShadow: (e.vars || e).shadows[2],
                      backgroundColor: (e.vars || e).palette.grey[300],
                    },
                  },
                  "contained" === n.variant &&
                    "inherit" !== n.color && {
                      backgroundColor: (e.vars || e).palette[n.color].dark,
                      "@media (hover: none)": {
                        backgroundColor: (e.vars || e).palette[n.color].main,
                      },
                    }
                ),
                "&:active": (0, i.Z)(
                  {},
                  "contained" === n.variant && {
                    boxShadow: (e.vars || e).shadows[8],
                  }
                ),
                [`&.${x.Z.focusVisible}`]: (0, i.Z)(
                  {},
                  "contained" === n.variant && {
                    boxShadow: (e.vars || e).shadows[6],
                  }
                ),
                [`&.${x.Z.disabled}`]: (0, i.Z)(
                  { color: (e.vars || e).palette.action.disabled },
                  "outlined" === n.variant && {
                    border: `1px solid ${
                      (e.vars || e).palette.action.disabledBackground
                    }`,
                  },
                  "outlined" === n.variant &&
                    "secondary" === n.color && {
                      border: `1px solid ${
                        (e.vars || e).palette.action.disabled
                      }`,
                    },
                  "contained" === n.variant && {
                    color: (e.vars || e).palette.action.disabled,
                    boxShadow: (e.vars || e).shadows[0],
                    backgroundColor: (e.vars || e).palette.action
                      .disabledBackground,
                  }
                ),
              },
              "text" === n.variant && { padding: "6px 8px" },
              "text" === n.variant &&
                "inherit" !== n.color && {
                  color: (e.vars || e).palette[n.color].main,
                },
              "outlined" === n.variant && {
                padding: "5px 15px",
                border: "1px solid currentColor",
              },
              "outlined" === n.variant &&
                "inherit" !== n.color && {
                  color: (e.vars || e).palette[n.color].main,
                  border: e.vars
                    ? `1px solid rgba(${
                        e.vars.palette[n.color].mainChannel
                      } / 0.5)`
                    : `1px solid ${(0, c.Fq)(e.palette[n.color].main, 0.5)}`,
                },
              "contained" === n.variant && {
                color: e.vars
                  ? e.vars.palette.text.primary
                  : null == (t = (r = e.palette).getContrastText)
                  ? void 0
                  : t.call(r, e.palette.grey[300]),
                backgroundColor: (e.vars || e).palette.grey[300],
                boxShadow: (e.vars || e).shadows[2],
              },
              "contained" === n.variant &&
                "inherit" !== n.color && {
                  color: (e.vars || e).palette[n.color].contrastText,
                  backgroundColor: (e.vars || e).palette[n.color].main,
                },
              "inherit" === n.color && {
                color: "inherit",
                borderColor: "currentColor",
              },
              "small" === n.size &&
                "text" === n.variant && {
                  padding: "4px 5px",
                  fontSize: e.typography.pxToRem(13),
                },
              "large" === n.size &&
                "text" === n.variant && {
                  padding: "8px 11px",
                  fontSize: e.typography.pxToRem(15),
                },
              "small" === n.size &&
                "outlined" === n.variant && {
                  padding: "3px 9px",
                  fontSize: e.typography.pxToRem(13),
                },
              "large" === n.size &&
                "outlined" === n.variant && {
                  padding: "7px 21px",
                  fontSize: e.typography.pxToRem(15),
                },
              "small" === n.size &&
                "contained" === n.variant && {
                  padding: "4px 10px",
                  fontSize: e.typography.pxToRem(13),
                },
              "large" === n.size &&
                "contained" === n.variant && {
                  padding: "8px 22px",
                  fontSize: e.typography.pxToRem(15),
                },
              n.fullWidth && { width: "100%" }
            );
          },
          ({ ownerState: e }) =>
            e.disableElevation && {
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
              [`&.${x.Z.focusVisible}`]: { boxShadow: "none" },
              "&:active": { boxShadow: "none" },
              [`&.${x.Z.disabled}`]: { boxShadow: "none" },
            }
        ),
        y = (0, d.ZP)("span", {
          name: "MuiButton",
          slot: "StartIcon",
          overridesResolver: (e, n) => {
            const { ownerState: t } = e;
            return [n.startIcon, n[`iconSize${(0, p.Z)(t.size)}`]];
          },
        })(({ ownerState: e }) =>
          (0, i.Z)(
            { display: "inherit", marginRight: 8, marginLeft: -4 },
            "small" === e.size && { marginLeft: -2 },
            f(e)
          )
        ),
        j = (0, d.ZP)("span", {
          name: "MuiButton",
          slot: "EndIcon",
          overridesResolver: (e, n) => {
            const { ownerState: t } = e;
            return [n.endIcon, n[`iconSize${(0, p.Z)(t.size)}`]];
          },
        })(({ ownerState: e }) =>
          (0, i.Z)(
            { display: "inherit", marginRight: -4, marginLeft: 8 },
            "small" === e.size && { marginRight: -2 },
            f(e)
          )
        );
      var w = o.forwardRef(function (e, n) {
        const t = o.useContext(g),
          c = (0, s.Z)(t, e),
          d = (0, u.Z)({ props: c, name: "MuiButton" }),
          {
            children: h,
            color: f = "primary",
            component: w = "button",
            className: Z,
            disabled: S = !1,
            disableElevation: z = !1,
            disableFocusRipple: k = !1,
            endIcon: C,
            focusVisibleClassName: R,
            fullWidth: T = !1,
            size: I = "medium",
            startIcon: D,
            type: L,
            variant: O = "text",
          } = d,
          _ = (0, r.Z)(d, v),
          $ = (0, i.Z)({}, d, {
            color: f,
            component: w,
            disabled: S,
            disableElevation: z,
            disableFocusRipple: k,
            fullWidth: T,
            size: I,
            type: L,
            variant: O,
          }),
          A = ((e) => {
            const {
                color: n,
                disableElevation: t,
                fullWidth: r,
                size: o,
                variant: a,
                classes: s,
              } = e,
              c = {
                root: [
                  "root",
                  a,
                  `${a}${(0, p.Z)(n)}`,
                  `size${(0, p.Z)(o)}`,
                  `${a}Size${(0, p.Z)(o)}`,
                  "inherit" === n && "colorInherit",
                  t && "disableElevation",
                  r && "fullWidth",
                ],
                label: ["label"],
                startIcon: ["startIcon", `iconSize${(0, p.Z)(o)}`],
                endIcon: ["endIcon", `iconSize${(0, p.Z)(o)}`],
              },
              d = (0, l.Z)(c, x.F, s);
            return (0, i.Z)({}, s, d);
          })($),
          B =
            D &&
            (0, m.jsx)(y, {
              className: A.startIcon,
              ownerState: $,
              children: D,
            }),
          E =
            C &&
            (0, m.jsx)(j, { className: A.endIcon, ownerState: $, children: C });
        return (0,
        m.jsxs)(b, (0, i.Z)({ ownerState: $, className: (0, a.default)(t.className, A.root, Z), component: w, disabled: S, focusRipple: !k, focusVisibleClassName: (0, a.default)(A.focusVisible, R), ref: n, type: L }, _, { classes: A, children: [B, h, E] }));
      });
    },
    77391: function (e, n, t) {
      "use strict";
      t.d(n, {
        F: function () {
          return i;
        },
      });
      var r = t(34867);
      function i(e) {
        return (0, r.Z)("MuiButton", e);
      }
      const o = (0, t(1588).Z)("MuiButton", [
        "root",
        "text",
        "textInherit",
        "textPrimary",
        "textSecondary",
        "textSuccess",
        "textError",
        "textInfo",
        "textWarning",
        "outlined",
        "outlinedInherit",
        "outlinedPrimary",
        "outlinedSecondary",
        "outlinedSuccess",
        "outlinedError",
        "outlinedInfo",
        "outlinedWarning",
        "contained",
        "containedInherit",
        "containedPrimary",
        "containedSecondary",
        "containedSuccess",
        "containedError",
        "containedInfo",
        "containedWarning",
        "disableElevation",
        "focusVisible",
        "disabled",
        "colorInherit",
        "textSizeSmall",
        "textSizeMedium",
        "textSizeLarge",
        "outlinedSizeSmall",
        "outlinedSizeMedium",
        "outlinedSizeLarge",
        "containedSizeSmall",
        "containedSizeMedium",
        "containedSizeLarge",
        "sizeMedium",
        "sizeSmall",
        "sizeLarge",
        "fullWidth",
        "startIcon",
        "endIcon",
        "iconSizeSmall",
        "iconSizeMedium",
        "iconSizeLarge",
      ]);
      n.Z = o;
    },
    56072: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return u;
          },
        });
      var r = t(59499),
        i = t(81138),
        o = t(61953),
        a = t(42326),
        s = t(68861),
        l = t(85893),
        c = function (e) {
          var n = e.children;
          return (0, l.jsx)(i.Z, {
            color: "text.primary",
            variant: "h3",
            sx: (0, r.Z)({ xs: 4, lg: 6 }, "+h3", { mt: 3 }),
            children: n,
          });
        },
        d = function (e) {
          var n = e.children;
          return (0, l.jsx)(o.Z, {
            color: "text.secondary",
            sx: { textShadow: "#000 0 0 5px, #000 0 0 10px" },
            children: n,
          });
        };
      function u() {
        return (0, l.jsxs)(o.Z, {
          sx: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: { xs: 4, lg: 8 },
            px: { xs: 4, lg: 0 },
            pt: { xs: 8, lg: 12 },
            pb: { xs: 12, lg: 24 },
          },
          children: [
            (0, l.jsx)(i.Z, {
              variant: "h1",
              sx: { mb: 2 },
              children: "Terms of Service",
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, { children: "YLBS Terms of Service" }),
                (0, l.jsx)(c, { children: "Introduction" }),
                (0, l.jsx)(i.Z, {
                  variant: "secondary14",
                  children:
                    "Welcome to YLBS, a pioneering decentralized finance (DeFi) platform offering a lending protocol designed for Uniswap V3 and other decentralized exchanges (DEXes) utilizing concentrated liquidity algorithms. These Terms of Service (ToS) govern your access to and use of YLBS\u2018s services. By engaging with our platform, you agree to these ToS. If you do not agree to these terms, you must not use our services.",
                }),
              ],
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, { children: "Agreement to Terms" }),
                (0, l.jsx)(i.Z, {
                  variant: "secondary14",
                  children:
                    "By using YLBS, you confirm that you have read, understood, and agree to be bound by these ToS. If you are accessing our services on behalf of a legal entity, you represent that you have the authority to agree to these terms on behalf of that entity.",
                }),
              ],
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, { children: "Changes to Terms" }),
                (0, l.jsx)(i.Z, {
                  variant: "secondary14",
                  children:
                    "YLBS reserves the right, at its discretion, to modify or replace these ToS at any time. If a revision is material, we will provide at least 30 days\u2018 notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
                }),
              ],
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, {
                  children: "Eligibility and Access Restrictions",
                }),
                (0, l.jsx)(i.Z, {
                  variant: "secondary14",
                  children:
                    "To engage with the YLBS platform, certain geographical restrictions apply. By accessing or using YLBS, you affirm that you do not reside in, nor hold citizenship from, regions subjected to sanctions or embargoes imposed by the United States of America. This restriction encompasses but is not limited to the following locations:",
                }),
                (0, l.jsxs)("ol", {
                  children: [
                    (0, l.jsx)("li", {
                      children: (0, l.jsx)(i.Z, {
                        variant: "secondary14",
                        children: "The United States of America",
                      }),
                    }),
                    (0, l.jsx)("li", {
                      children: (0, l.jsx)(i.Z, {
                        variant: "secondary14",
                        children: "Sudan",
                      }),
                    }),
                    (0, l.jsx)("li", {
                      children: (0, l.jsx)(i.Z, {
                        variant: "secondary14",
                        children: "Crimea and Sevastopol",
                      }),
                    }),
                    (0, l.jsx)("li", {
                      children: (0, l.jsx)(i.Z, {
                        variant: "secondary14",
                        children: "Cuba",
                      }),
                    }),
                    (0, l.jsx)("li", {
                      children: (0, l.jsx)(i.Z, {
                        variant: "secondary14",
                        children: "Syria",
                      }),
                    }),
                    (0, l.jsx)("li", {
                      children: (0, l.jsx)(i.Z, {
                        variant: "secondary14",
                        children: "United Kingdom",
                      }),
                    }),
                    (0, l.jsx)("li", {
                      children: (0, l.jsx)(i.Z, {
                        variant: "secondary14",
                        children: "Canada",
                      }),
                    }),
                    (0, l.jsx)("li", {
                      children: (0, l.jsx)(i.Z, {
                        variant: "secondary14",
                        children: "Belgium",
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)(i.Z, {
                  variant: "secondary14",
                  children:
                    "Additionally, you assure that your current location does not fall within any territory, country, or jurisdiction where local laws or regulations would forbid your participation in our services, or where such participation would be otherwise illegal or non-compliant with local legislation. Your compliance with these terms is a prerequisite for your use of YLBS\u2018s services.",
                }),
              ],
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, { children: "Description of Services" }),
                (0, l.jsx)(i.Z, {
                  variant: "secondary14",
                  children:
                    "YLBS offers an access to a blockchain-based lending protocol allowing users to lend or borrow assets, and leverage their liquidity provision positions. Our services include but are not limited to, providing liquidity, executing transactions, and managing collateral.",
                }),
              ],
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, { children: "Assumption of Risk" }),
                (0, l.jsx)(i.Z, {
                  variant: "secondary14",
                  children:
                    "You acknowledge that the cryptocurrency market is highly volatile and that participating in DeFi protocols involves significant risk, including but not limited to, the risk of financial loss, regulatory action, and technological issues. YLBS is not liable for any decisions you make based on your use of our platform.",
                }),
              ],
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, { children: "Intellectual Property Rights" }),
                (0, l.jsx)(i.Z, {
                  variant: "secondary14",
                  children:
                    "All intellectual property rights in the services, technology, and content provided by YLBS are owned by us or our licensors. You are granted a limited, non-exclusive, non-transferable, and revocable license to use our services according to these ToS.",
                }),
              ],
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, { children: "Prohibited Use" }),
                (0, l.jsx)(i.Z, {
                  variant: "secondary14",
                  children:
                    "You agree not to use YLBS in any manner that is illegal or harmful to any person or entity. This includes but is not limited to, engaging in fraud, money laundering, or financing terrorism.",
                }),
              ],
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, { children: "Limitation of Liability" }),
                (0, l.jsx)(i.Z, {
                  variant: "secondary14",
                  children:
                    "YLBS will not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our services.",
                }),
              ],
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, { children: "Dispute Resolution" }),
                (0, l.jsx)(i.Z, {
                  variant: "secondary14",
                  children:
                    "All disputes related to these ToS will be resolved by arbitration in accordance with the arbitration rules of the jurisdiction where YLBS is established.",
                }),
              ],
            }),            
          ],
        });
      }
      u.getLayout = function (e) {
        return (0, l.jsx)(a.a, { children: e });
      };
    },
    42326: function (e, n, t) {
      "use strict";
      t.d(n, {
        a: function () {
          return m;
        },
      });
      var r = t(61953),
        i = (t(67294), t(59499)),
        o = t(81138),
        a = t(68861),
        s = t(85893);
      function l(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function c(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? l(Object(t), !0).forEach(function (n) {
                (0, i.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var d = function (e) {
          return (0, s.jsx)(
            a.rU,
            c(
              c({}, e),
              {},
              {
                sx: (0, i.Z)(
                  {
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    color: "#ABABBF",
                    fontSize: "16px",
                  },
                  ":hover",
                  { color: "#c7c7d4" }
                ),
              }
            )
          );
        },
        u = function () {
          return (0, s.jsx)(r.Z, {
            sx: {
              width: "100vw",
              padding: "32px 16px",
              borderTop: "1px solid rgba(255, 255, 255, 0.16)",
              background:
                "linear-gradient(180deg, rgba(79, 79, 99, 0.08) 0%, rgba(79, 79, 99, 0.00) 100%)",
              backdropFilter: "blur(24px)",
            },
            children: (0, s.jsxs)(r.Z, {
              sx: {
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gridTemplateRows: { xs: "repeat(2, auto)", md: "unset" },
                gridTemplateAreas: { xs: '"a b" "c d"', md: "unset" },
                columnGap: { xs: 8, md: 12 },
                rowGap: { xs: 8, md: "unset" },
                margin: "0 auto",
                maxWidth: "1240px",
                width: "100%",
              },
              children: [
                (0, s.jsxs)(r.Z, {
                  sx: (0, i.Z)(
                    { gridArea: { xs: "a", md: "unset" } },
                    "> img",
                    { width: { xs: "140px", md: "160px" }, marginBottom: 1 }
                  ),
                  children: [
                    (0, s.jsx)("img", { src: "/ylbs-logo.svg", alt: "" }),
                    (0, s.jsxs)(o.Z, {
                      variant: "secondary14",
                      sx: {
                        color: "#ABABBF",
                        fontSize: { xs: "13px", md: "14px" },
                      },
                      children: [
                        "Copyright \xa9 ",
                        new Date().getFullYear().toString(),
                        " YLBS",
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)(r.Z, {
                  sx: { gridArea: { xs: "c", md: "unset" } },
                  children: [
                    (0, s.jsx)(o.Z, {
                      variant: "main16",
                      sx: { fontSize: "18px", marginBottom: 4 },
                      children: "Products",
                    }),
                    (0, s.jsxs)(r.Z, {
                      sx: { display: "flex", flexDirection: "column", gap: 3 },
                      children: [
                        (0, s.jsx)(d, {
                          href: a.Z6.leverage,
                          onClick: function () {
                            window.gtag("event", "landing_footer_products", {
                              name: "leverage",
                            });
                          },
                          children: "Leverage",
                        }),
                        (0, s.jsx)(d, {
                          href: a.Z6.lending,
                          onClick: function () {
                            window.gtag("event", "landing_footer_products", {
                              name: "borrow",
                            });
                          },
                          children: "Borrow",
                        }),
                        (0, s.jsx)(d, {
                          href: a.Z6.lending,
                          onClick: function () {
                            window.gtag("event", "landing_footer_products", {
                              name: "lend",
                            });
                          },
                          children: "Lend",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)(r.Z, {
                  sx: {
                    gridArea: { xs: "b", md: "unset" },
                    marginTop: { xs: "16px", md: "0" },
                  },
                  children: [
                    (0, s.jsx)(o.Z, {
                      variant: "main16",
                      sx: { fontSize: "18px", marginBottom: 4 },
                      children: "About",
                    }),
                    (0, s.jsxs)(r.Z, {
                      sx: { display: "flex", flexDirection: "column", gap: 3 },
                      children: [
                        (0, s.jsx)(d, {
                          href: "https://ylbs.gitbook.io/ylbs/",
                          target: "_blank",
                          onClick: function () {
                            window.gtag("event", "landing_footer_about", {
                              name: "docs",
                            });
                          },
                          children: "Docs",
                        }),
                        (0, s.jsx)(d, {
                          href: "/terms-of-service",
                          children: "Terms of Service",
                        }),
                        (0, s.jsx)(d, {
                          href: "/privacy-policy",
                          children: "Privacy Policy",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)(r.Z, {
                  sx: { gridArea: { xs: "d", md: "unset" } },
                  children: [
                    (0, s.jsx)(o.Z, {
                      variant: "main16",
                      sx: { fontSize: "18px", marginBottom: 4 },
                      children: "Socials",
                    }),
                    (0, s.jsxs)(r.Z, {
                      sx: { display: "flex", flexDirection: "column", gap: 3 },
                      children: [
                        (0, s.jsxs)(d, {
                          href: "https://twitter.com/ylbscom",
                          target: "_blank",
                          onClick: function () {
                            window.gtag("event", "landing_footer_socials", {
                              name: "Twitter",
                            });
                          },
                          children: [
                            (0, s.jsx)("img", { src: "/twitter.svg", alt: "" }),
                            " Twitter",
                          ],
                        }),
                        (0, s.jsxs)(d, {
                          href: "https://t.me/ylbscom",
                          target: "_blank",
                          onClick: function () {
                            window.gtag("event", "landing_footer_socials", {
                              name: "Telegram",
                            });
                          },
                          children: [
                            (0, s.jsx)("img", {
                              src: "/telegram.svg",
                              alt: "",
                            }),
                            " Telegram",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        h = t(36667),
        p = t(14216);
      function x() {
        return (0, s.jsx)(r.Z, {
          component: "header",
          sx: function (e) {
            return {
              height: 64,
              width: "100vw",
              position: "sticky",
              top: 0,
              transition: e.transitions.create("top"),
              zIndex: e.zIndex.appBar,
              backgroundColor: e.palette.background.header,
              borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
              padding: { xs: "12px 16px", xsm: "12px 24px" },
              backdropFilter: "blur(24px)",
            };
          },
          children: (0, s.jsxs)(r.Z, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "0 auto",
              maxWidth: "1240px",
              width: "100%",
            },
            children: [
              (0, s.jsx)(r.Z, {
                component: a.rU,
                href: "/",
                "aria-label": "Go to homepage",
                sx: {
                  lineHeight: 0,
                  mr: 3,
                  transition: "0.3s ease all",
                  "&:hover": { opacity: 0.7 },
                },
                children: (0, s.jsx)("img", {
                  src: p.F.appLogo,
                  alt: "AAVE",
                  width: 96,
                  height: 40,
                }),
              }),
              (0, s.jsx)(h.Z, {
                component: a.rU,
                href: "/leverage/",
                sx: {
                  color: "#074245",
                  backgroundColor: "#AFF113",
                  "&:hover": { backgroundColor: "#cafc53" },
                },
                onClick: function () {
                  window.gtag("event", "landing_launch_app");
                },
                children: "Launch App",
              }),
            ],
          }),
        });
      }
      var g = t(53491);
      function m(e) {
        var n = e.children;
        return (0, s.jsxs)(g.A, {
          $bgMainOffset: 0,
          children: [
            (0, s.jsx)(x, {}),
            (0, s.jsx)(r.Z, {
              component: "main",
              sx: {
                display: "flex",
                flexDirection: "column",
                flex: 1,
                maxWidth: "1240px",
                width: "100%",
                margin: "0 auto",
                alignItems: "center",
              },
              children: n,
            }),
            (0, s.jsx)(u, {}),
          ],
        });
      }
    },
    53491: function (e, n, t) {
      "use strict";
      t.d(n, {
        A: function () {
          return o;
        },
      });
      var r,
        i = t(71383),
        o = (0, t(81719).ZP)("div")(
          r ||
            (r = (0, i.Z)([
              "\n  position: relative;\n  display: flex;\n  min-height: 100vh;\n  width: 100vw;\n  padding: 0;\n  flex-direction: column;\n  align-items: center;\n  background-image: url('/background-main.svg');\n  background-repeat: no-repeat;\n  background-position: center ",
              ";\n",
            ])),
          function (e) {
            var n = e.$bgMainOffset;
            return "".concat(n, "px");
          }
        );
    },
    14216: function (e, n, t) {
      "use strict";
      t.d(n, {
        F: function () {
          return r;
        },
      });
      var r = {
        appLogo: "/ylbs-logo.svg",
        mobileAppLogo: "/ylbs-mobile-logo.svg",
      };
    },
    83966: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/terms-of-service",
        function () {
          return t(56072);
        },
      ]);
    },
    71383: function (e, n, t) {
      "use strict";
      function r(e, n) {
        return (
          n || (n = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          )
        );
      }
      t.d(n, {
        Z: function () {
          return r;
        },
      });
    },
  },
  function (e) {
    e.O(0, [1066, 9774, 2888, 179], function () {
      return (n = 83966), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
//# sourceMappingURL=terms-of-service-153ae8825cc95825.js.map
