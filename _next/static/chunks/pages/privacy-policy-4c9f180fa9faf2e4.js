(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9396],
  {
    36667: function (e, o, r) {
      "use strict";
      r.d(o, {
        Z: function () {
          return j;
        },
      });
      var t = r(63366),
        n = r(87462),
        i = r(67294),
        a = r(86010),
        s = r(47925),
        l = r(94780),
        c = r(41796),
        d = r(81719),
        u = r(78884),
        p = r(83187),
        h = r(36622),
        x = r(77391);
      var m = i.createContext({}),
        g = r(85893);
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
          (0, n.Z)(
            {},
            "small" === e.size && { "& > *:nth-of-type(1)": { fontSize: 18 } },
            "medium" === e.size && { "& > *:nth-of-type(1)": { fontSize: 20 } },
            "large" === e.size && { "& > *:nth-of-type(1)": { fontSize: 22 } }
          ),
        y = (0, d.ZP)(p.Z, {
          shouldForwardProp: (e) => (0, d.FO)(e) || "classes" === e,
          name: "MuiButton",
          slot: "Root",
          overridesResolver: (e, o) => {
            const { ownerState: r } = e;
            return [
              o.root,
              o[r.variant],
              o[`${r.variant}${(0, h.Z)(r.color)}`],
              o[`size${(0, h.Z)(r.size)}`],
              o[`${r.variant}Size${(0, h.Z)(r.size)}`],
              "inherit" === r.color && o.colorInherit,
              r.disableElevation && o.disableElevation,
              r.fullWidth && o.fullWidth,
            ];
          },
        })(
          ({ theme: e, ownerState: o }) => {
            var r, t;
            return (0, n.Z)(
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
                "&:hover": (0, n.Z)(
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
                  "text" === o.variant &&
                    "inherit" !== o.color && {
                      backgroundColor: e.vars
                        ? `rgba(${e.vars.palette[o.color].mainChannel} / ${
                            e.vars.palette.action.hoverOpacity
                          })`
                        : (0, c.Fq)(
                            e.palette[o.color].main,
                            e.palette.action.hoverOpacity
                          ),
                      "@media (hover: none)": {
                        backgroundColor: "transparent",
                      },
                    },
                  "outlined" === o.variant &&
                    "inherit" !== o.color && {
                      border: `1px solid ${
                        (e.vars || e).palette[o.color].main
                      }`,
                      backgroundColor: e.vars
                        ? `rgba(${e.vars.palette[o.color].mainChannel} / ${
                            e.vars.palette.action.hoverOpacity
                          })`
                        : (0, c.Fq)(
                            e.palette[o.color].main,
                            e.palette.action.hoverOpacity
                          ),
                      "@media (hover: none)": {
                        backgroundColor: "transparent",
                      },
                    },
                  "contained" === o.variant && {
                    backgroundColor: (e.vars || e).palette.grey.A100,
                    boxShadow: (e.vars || e).shadows[4],
                    "@media (hover: none)": {
                      boxShadow: (e.vars || e).shadows[2],
                      backgroundColor: (e.vars || e).palette.grey[300],
                    },
                  },
                  "contained" === o.variant &&
                    "inherit" !== o.color && {
                      backgroundColor: (e.vars || e).palette[o.color].dark,
                      "@media (hover: none)": {
                        backgroundColor: (e.vars || e).palette[o.color].main,
                      },
                    }
                ),
                "&:active": (0, n.Z)(
                  {},
                  "contained" === o.variant && {
                    boxShadow: (e.vars || e).shadows[8],
                  }
                ),
                [`&.${x.Z.focusVisible}`]: (0, n.Z)(
                  {},
                  "contained" === o.variant && {
                    boxShadow: (e.vars || e).shadows[6],
                  }
                ),
                [`&.${x.Z.disabled}`]: (0, n.Z)(
                  { color: (e.vars || e).palette.action.disabled },
                  "outlined" === o.variant && {
                    border: `1px solid ${
                      (e.vars || e).palette.action.disabledBackground
                    }`,
                  },
                  "outlined" === o.variant &&
                    "secondary" === o.color && {
                      border: `1px solid ${
                        (e.vars || e).palette.action.disabled
                      }`,
                    },
                  "contained" === o.variant && {
                    color: (e.vars || e).palette.action.disabled,
                    boxShadow: (e.vars || e).shadows[0],
                    backgroundColor: (e.vars || e).palette.action
                      .disabledBackground,
                  }
                ),
              },
              "text" === o.variant && { padding: "6px 8px" },
              "text" === o.variant &&
                "inherit" !== o.color && {
                  color: (e.vars || e).palette[o.color].main,
                },
              "outlined" === o.variant && {
                padding: "5px 15px",
                border: "1px solid currentColor",
              },
              "outlined" === o.variant &&
                "inherit" !== o.color && {
                  color: (e.vars || e).palette[o.color].main,
                  border: e.vars
                    ? `1px solid rgba(${
                        e.vars.palette[o.color].mainChannel
                      } / 0.5)`
                    : `1px solid ${(0, c.Fq)(e.palette[o.color].main, 0.5)}`,
                },
              "contained" === o.variant && {
                color: e.vars
                  ? e.vars.palette.text.primary
                  : null == (r = (t = e.palette).getContrastText)
                  ? void 0
                  : r.call(t, e.palette.grey[300]),
                backgroundColor: (e.vars || e).palette.grey[300],
                boxShadow: (e.vars || e).shadows[2],
              },
              "contained" === o.variant &&
                "inherit" !== o.color && {
                  color: (e.vars || e).palette[o.color].contrastText,
                  backgroundColor: (e.vars || e).palette[o.color].main,
                },
              "inherit" === o.color && {
                color: "inherit",
                borderColor: "currentColor",
              },
              "small" === o.size &&
                "text" === o.variant && {
                  padding: "4px 5px",
                  fontSize: e.typography.pxToRem(13),
                },
              "large" === o.size &&
                "text" === o.variant && {
                  padding: "8px 11px",
                  fontSize: e.typography.pxToRem(15),
                },
              "small" === o.size &&
                "outlined" === o.variant && {
                  padding: "3px 9px",
                  fontSize: e.typography.pxToRem(13),
                },
              "large" === o.size &&
                "outlined" === o.variant && {
                  padding: "7px 21px",
                  fontSize: e.typography.pxToRem(15),
                },
              "small" === o.size &&
                "contained" === o.variant && {
                  padding: "4px 10px",
                  fontSize: e.typography.pxToRem(13),
                },
              "large" === o.size &&
                "contained" === o.variant && {
                  padding: "8px 22px",
                  fontSize: e.typography.pxToRem(15),
                },
              o.fullWidth && { width: "100%" }
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
        b = (0, d.ZP)("span", {
          name: "MuiButton",
          slot: "StartIcon",
          overridesResolver: (e, o) => {
            const { ownerState: r } = e;
            return [o.startIcon, o[`iconSize${(0, h.Z)(r.size)}`]];
          },
        })(({ ownerState: e }) =>
          (0, n.Z)(
            { display: "inherit", marginRight: 8, marginLeft: -4 },
            "small" === e.size && { marginLeft: -2 },
            f(e)
          )
        ),
        w = (0, d.ZP)("span", {
          name: "MuiButton",
          slot: "EndIcon",
          overridesResolver: (e, o) => {
            const { ownerState: r } = e;
            return [o.endIcon, o[`iconSize${(0, h.Z)(r.size)}`]];
          },
        })(({ ownerState: e }) =>
          (0, n.Z)(
            { display: "inherit", marginRight: -4, marginLeft: 8 },
            "small" === e.size && { marginRight: -2 },
            f(e)
          )
        );
      var j = i.forwardRef(function (e, o) {
        const r = i.useContext(m),
          c = (0, s.Z)(r, e),
          d = (0, u.Z)({ props: c, name: "MuiButton" }),
          {
            children: p,
            color: f = "primary",
            component: j = "button",
            className: Z,
            disabled: S = !1,
            disableElevation: z = !1,
            disableFocusRipple: k = !1,
            endIcon: C,
            focusVisibleClassName: P,
            fullWidth: I = !1,
            size: O = "medium",
            startIcon: _,
            type: $,
            variant: W = "text",
          } = d,
          T = (0, t.Z)(d, v),
          R = (0, n.Z)({}, d, {
            color: f,
            component: j,
            disabled: S,
            disableElevation: z,
            disableFocusRipple: k,
            fullWidth: I,
            size: O,
            type: $,
            variant: W,
          }),
          F = ((e) => {
            const {
                color: o,
                disableElevation: r,
                fullWidth: t,
                size: i,
                variant: a,
                classes: s,
              } = e,
              c = {
                root: [
                  "root",
                  a,
                  `${a}${(0, h.Z)(o)}`,
                  `size${(0, h.Z)(i)}`,
                  `${a}Size${(0, h.Z)(i)}`,
                  "inherit" === o && "colorInherit",
                  r && "disableElevation",
                  t && "fullWidth",
                ],
                label: ["label"],
                startIcon: ["startIcon", `iconSize${(0, h.Z)(i)}`],
                endIcon: ["endIcon", `iconSize${(0, h.Z)(i)}`],
              },
              d = (0, l.Z)(c, x.F, s);
            return (0, n.Z)({}, s, d);
          })(R),
          L =
            _ &&
            (0, g.jsx)(b, {
              className: F.startIcon,
              ownerState: R,
              children: _,
            }),
          B =
            C &&
            (0, g.jsx)(w, { className: F.endIcon, ownerState: R, children: C });
        return (0,
        g.jsxs)(y, (0, n.Z)({ ownerState: R, className: (0, a.default)(r.className, F.root, Z), component: j, disabled: S, focusRipple: !k, focusVisibleClassName: (0, a.default)(F.focusVisible, P), ref: o, type: $ }, T, { classes: F, children: [L, p, B] }));
      });
    },
    77391: function (e, o, r) {
      "use strict";
      r.d(o, {
        F: function () {
          return n;
        },
      });
      var t = r(34867);
      function n(e) {
        return (0, t.Z)("MuiButton", e);
      }
      const i = (0, r(1588).Z)("MuiButton", [
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
      o.Z = i;
    },
    84783: function (e, o, r) {
      "use strict";
      r.r(o),
        r.d(o, {
          default: function () {
            return u;
          },
        });
      var t = r(59499),
        n = r(81138),
        i = r(61953),
        a = r(42326),
        s = r(68861),
        l = r(85893),
        c = function (e) {
          var o = e.children;
          return (0, l.jsx)(n.Z, {
            color: "text.primary",
            variant: "h3",
            sx: (0, t.Z)({ xs: 4, lg: 6 }, "+h3", { mt: 3 }),
            children: o,
          });
        },
        d = function (e) {
          var o = e.children;
          return (0, l.jsx)(i.Z, {
            color: "text.secondary",
            sx: { textShadow: "#000 0 0 5px, #000 0 0 10px" },
            children: o,
          });
        };
      function u() {
        return (0, l.jsxs)(i.Z, {
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
            (0, l.jsx)(n.Z, {
              variant: "h1",
              sx: { mb: 2 },
              children: "Privacy Policy for YLBS",
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, { children: "Introduction" }),
                (0, l.jsxs)(n.Z, {
                  variant: "secondary14",
                  children: [
                    'Welcome to YLBS ("we", "us", or "our"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website',
                    " ",
                    (0, l.jsx)(s.rU, {
                      href: "https://ylbs.com/",
                      children: "https://ylbs.com/ ",
                    }),
                    ' (the "Site"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site.',
                  ],
                }),
              ],
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, { children: "Information We Collect" }),
                (0, l.jsx)(n.Z, {
                  variant: "secondary14",
                  children:
                    "We may collect personal information from you when you interact with our Site. This information may include:",
                }),
                (0, l.jsxs)("ol", {
                  children: [
                    (0, l.jsx)("li", {
                      children:
                        "Personal identification information, such as your name, email address, and contact information.",
                    }),
                    (0, l.jsx)("li", {
                      children:
                        "Transaction information related to your use of our services.",
                    }),
                    (0, l.jsx)("li", {
                      children:
                        "Technical information automatically collected when you visit our Site, such as your IP address, browser type, and operating system.",
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, { children: "How We Use Your Information" }),
                (0, l.jsx)(n.Z, {
                  variant: "secondary14",
                  children:
                    "We may use the information we collect from you to:",
                }),
                (0, l.jsxs)("ol", {
                  children: [
                    (0, l.jsx)("li", {
                      children: "Provide and maintain our services.",
                    }),
                    (0, l.jsx)("li", {
                      children:
                        "Improve our services and develop new features.",
                    }),
                    (0, l.jsx)("li", {
                      children:
                        "Communicate with you, including responding to your inquiries and providing customer support.",
                    }),
                    (0, l.jsx)("li", {
                      children:
                        "Comply with legal obligations and enforce our terms and policies.",
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, { children: "Disclosure of Your Information" }),
                (0, l.jsx)(n.Z, {
                  variant: "secondary14",
                  children:
                    "We may disclose your information to third parties in the following circumstances:",
                }),
                (0, l.jsxs)("ol", {
                  children: [
                    (0, l.jsx)("li", { children: "With your consent." }),
                    (0, l.jsx)("li", {
                      children:
                        "To comply with legal obligations or respond to lawful requests from governmental authorities.",
                    }),
                    (0, l.jsx)("li", {
                      children:
                        "To protect the rights, property, or safety of YLBS, our users, or others.",
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, { children: "Data Security" }),
                (0, l.jsx)(n.Z, {
                  variant: "secondary14",
                  children:
                    "We take reasonable measures to protect the confidentiality and security of your information. However, please be aware that no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
                }),
              ],
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, { children: "Third-Party Links" }),
                (0, l.jsx)(n.Z, {
                  variant: "secondary14",
                  children:
                    "Our Site may contain links to third-party websites or services that are not owned or controlled by YLBS. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.",
                }),
              ],
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, { children: "Children\u2018s Privacy" }),
                (0, l.jsx)(n.Z, {
                  variant: "secondary14",
                  children:
                    "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can delete their information.",
                }),
              ],
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, { children: "Changes to This Privacy Policy" }),
                (0, l.jsx)(n.Z, {
                  variant: "secondary14",
                  children:
                    'We may update our Privacy Policy from time to time. Any changes we make will be posted on this page, with an updated "Last Updated" date at the top of the page. We encourage you to review this Privacy Policy periodically for any changes.',
                }),
              ],
            }),
            (0, l.jsxs)(d, {
              children: [
                (0, l.jsx)(c, { children: "Contact Us" }),
                (0, l.jsxs)(n.Z, {
                  variant: "secondary14",
                  children: [
                    "If you have any questions or concerns about our Privacy Policy, please contact us at",
                    " ",
                    (0, l.jsx)(s.rU, {
                      href: "mailto:admin@ylbs.com",
                      children: "admin@ylbs.com",
                    }),
                    ".",
                  ],
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
    42326: function (e, o, r) {
      "use strict";
      r.d(o, {
        a: function () {
          return g;
        },
      });
      var t = r(61953),
        n = (r(67294), r(59499)),
        i = r(81138),
        a = r(68861),
        s = r(85893);
      function l(e, o) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          o &&
            (t = t.filter(function (o) {
              return Object.getOwnPropertyDescriptor(e, o).enumerable;
            })),
            r.push.apply(r, t);
        }
        return r;
      }
      function c(e) {
        for (var o = 1; o < arguments.length; o++) {
          var r = null != arguments[o] ? arguments[o] : {};
          o % 2
            ? l(Object(r), !0).forEach(function (o) {
                (0, n.Z)(e, o, r[o]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (o) {
                Object.defineProperty(
                  e,
                  o,
                  Object.getOwnPropertyDescriptor(r, o)
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
                sx: (0, n.Z)(
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
          return (0, s.jsx)(t.Z, {
            sx: {
              width: "100vw",
              padding: "32px 16px",
              borderTop: "1px solid rgba(255, 255, 255, 0.16)",
              background:
                "linear-gradient(180deg, rgba(79, 79, 99, 0.08) 0%, rgba(79, 79, 99, 0.00) 100%)",
              backdropFilter: "blur(24px)",
            },
            children: (0, s.jsxs)(t.Z, {
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
                (0, s.jsxs)(t.Z, {
                  sx: (0, n.Z)(
                    { gridArea: { xs: "a", md: "unset" } },
                    "> img",
                    { width: { xs: "140px", md: "160px" }, marginBottom: 1 }
                  ),
                  children: [
                    (0, s.jsx)("img", { src: "/ylbs-logo.svg", alt: "" }),
                    (0, s.jsxs)(i.Z, {
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
                (0, s.jsxs)(t.Z, {
                  sx: { gridArea: { xs: "c", md: "unset" } },
                  children: [
                    (0, s.jsx)(i.Z, {
                      variant: "main16",
                      sx: { fontSize: "18px", marginBottom: 4 },
                      children: "Products",
                    }),
                    (0, s.jsxs)(t.Z, {
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
                (0, s.jsxs)(t.Z, {
                  sx: {
                    gridArea: { xs: "b", md: "unset" },
                    marginTop: { xs: "16px", md: "0" },
                  },
                  children: [
                    (0, s.jsx)(i.Z, {
                      variant: "main16",
                      sx: { fontSize: "18px", marginBottom: 4 },
                      children: "About",
                    }),
                    (0, s.jsxs)(t.Z, {
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
                (0, s.jsxs)(t.Z, {
                  sx: { gridArea: { xs: "d", md: "unset" } },
                  children: [
                    (0, s.jsx)(i.Z, {
                      variant: "main16",
                      sx: { fontSize: "18px", marginBottom: 4 },
                      children: "Socials",
                    }),
                    (0, s.jsxs)(t.Z, {
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
        p = r(36667),
        h = r(14216);
      function x() {
        return (0, s.jsx)(t.Z, {
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
          children: (0, s.jsxs)(t.Z, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "0 auto",
              maxWidth: "1240px",
              width: "100%",
            },
            children: [
              (0, s.jsx)(t.Z, {
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
                  src: h.F.appLogo,
                  alt: "AAVE",
                  width: 96,
                  height: 40,
                }),
              }),
              (0, s.jsx)(p.Z, {
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
      var m = r(53491);
      function g(e) {
        var o = e.children;
        return (0, s.jsxs)(m.A, {
          $bgMainOffset: 0,
          children: [
            (0, s.jsx)(x, {}),
            (0, s.jsx)(t.Z, {
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
              children: o,
            }),
            (0, s.jsx)(u, {}),
          ],
        });
      }
    },
    53491: function (e, o, r) {
      "use strict";
      r.d(o, {
        A: function () {
          return i;
        },
      });
      var t,
        n = r(71383),
        i = (0, r(81719).ZP)("div")(
          t ||
            (t = (0, n.Z)([
              "\n  position: relative;\n  display: flex;\n  min-height: 100vh;\n  width: 100vw;\n  padding: 0;\n  flex-direction: column;\n  align-items: center;\n  background-image: url('/background-main.svg');\n  background-repeat: no-repeat;\n  background-position: center ",
              ";\n",
            ])),
          function (e) {
            var o = e.$bgMainOffset;
            return "".concat(o, "px");
          }
        );
    },
    14216: function (e, o, r) {
      "use strict";
      r.d(o, {
        F: function () {
          return t;
        },
      });
      var t = {
        appLogo: "/ylbs-logo.svg",
        mobileAppLogo: "/ylbs-mobile-logo.svg",
      };
    },
    7751: function (e, o, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/privacy-policy",
        function () {
          return r(84783);
        },
      ]);
    },
    71383: function (e, o, r) {
      "use strict";
      function t(e, o) {
        return (
          o || (o = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(o) } })
          )
        );
      }
      r.d(o, {
        Z: function () {
          return t;
        },
      });
    },
  },
  function (e) {
    e.O(0, [1066, 9774, 2888, 179], function () {
      return (o = 7751), e((e.s = o));
      var o;
    });
    var o = e.O();
    _N_E = o;
  },
]);
//# sourceMappingURL=privacy-policy-4c9f180fa9faf2e4.js.map
