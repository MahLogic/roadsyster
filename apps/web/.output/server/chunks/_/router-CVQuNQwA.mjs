import { createRouter, createRootRoute, createFileRoute, Link, redirect, lazyRouteComponent, HeadContent, Scripts } from '@tanstack/react-router';
import { jsxDEV } from 'react/jsx-dev-runtime';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useTheme } from 'next-themes';
import { Toaster as Toaster$1 } from 'sonner';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import React__default from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var AlertTriangle = function AlertTriangle(_a) {
  var _a$size = _a.size,
    size = _a$size === void 0 ? 24 : _a$size,
    _a$className = _a.className,
    className = _a$className === void 0 ? '' : _a$className,
    _a$fill = _a.fill,
    fill = _a$fill === void 0 ? 'none' : _a$fill,
    otherProps = __rest(_a, ["size", "className", "fill"]);
  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-alert-triangle ".concat(className)
  }, otherProps), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("path", {
    d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  })));
};

var CheckCircle = function CheckCircle(_a) {
  var _a$size = _a.size,
    size = _a$size === void 0 ? 24 : _a$size,
    _a$className = _a.className,
    className = _a$className === void 0 ? '' : _a$className,
    _a$fill = _a.fill,
    fill = _a$fill === void 0 ? 'none' : _a$fill,
    otherProps = __rest(_a, ["size", "className", "fill"]);
  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-check-circle ".concat(className)
  }, otherProps), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
  }), /*#__PURE__*/React__default.createElement("polyline", {
    points: "22 4 12 14.01 9 11.01"
  })));
};

var Info = function Info(_a) {
  var _a$size = _a.size,
    size = _a$size === void 0 ? 24 : _a$size,
    _a$className = _a.className,
    className = _a$className === void 0 ? '' : _a$className,
    _a$fill = _a.fill,
    fill = _a$fill === void 0 ? 'none' : _a$fill,
    otherProps = __rest(_a, ["size", "className", "fill"]);
  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-info ".concat(className)
  }, otherProps), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12.01",
    y2: "8"
  })));
};

var Loader = function Loader(_a) {
  var _a$size = _a.size,
    size = _a$size === void 0 ? 24 : _a$size,
    _a$className = _a.className,
    className = _a$className === void 0 ? '' : _a$className,
    _a$fill = _a.fill,
    fill = _a$fill === void 0 ? 'none' : _a$fill,
    otherProps = __rest(_a, ["size", "className", "fill"]);
  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-loader ".concat(className)
  }, otherProps), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "6"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12",
    y2: "22"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "4.93",
    y1: "4.93",
    x2: "7.76",
    y2: "7.76"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "16.24",
    y1: "16.24",
    x2: "19.07",
    y2: "19.07"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "2",
    y1: "12",
    x2: "6",
    y2: "12"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "18",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "4.93",
    y1: "19.07",
    x2: "7.76",
    y2: "16.24"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "16.24",
    y1: "7.76",
    x2: "19.07",
    y2: "4.93"
  })));
};

var XOctagon = function XOctagon(_a) {
  var _a$size = _a.size,
    size = _a$size === void 0 ? 24 : _a$size,
    _a$className = _a.className,
    className = _a$className === void 0 ? '' : _a$className,
    _a$fill = _a.fill,
    fill = _a$fill === void 0 ? 'none' : _a$fill,
    otherProps = __rest(_a, ["size", "className", "fill"]);
  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-x-octagon ".concat(className)
  }, otherProps), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("polygon", {
    points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15"
  })));
};

const appCss = "/assets/styles-8zUj1yY4.css";
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsxDEV(
    Toaster$1,
    {
      theme,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ jsxDEV(CheckCircle, { className: "size-4" }, void 0, false, {
          fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/sonner.tsx",
          lineNumber: 19,
          columnNumber: 18
        }, void 0),
        info: /* @__PURE__ */ jsxDEV(Info, { className: "size-4" }, void 0, false, {
          fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/sonner.tsx",
          lineNumber: 20,
          columnNumber: 15
        }, void 0),
        warning: /* @__PURE__ */ jsxDEV(AlertTriangle, { className: "size-4" }, void 0, false, {
          fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/sonner.tsx",
          lineNumber: 21,
          columnNumber: 18
        }, void 0),
        error: /* @__PURE__ */ jsxDEV(XOctagon, { className: "size-4" }, void 0, false, {
          fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/sonner.tsx",
          lineNumber: 22,
          columnNumber: 16
        }, void 0),
        loading: /* @__PURE__ */ jsxDEV(Loader, { className: "size-4 animate-spin" }, void 0, false, {
          fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/sonner.tsx",
          lineNumber: 23,
          columnNumber: 18
        }, void 0)
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      },
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/sonner.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    void 0
  );
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function createSectionId(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxDEV(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/button.tsx",
      lineNumber: 52,
      columnNumber: 5
    },
    this
  );
}
const Route$a = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      { title: "RoadSyster" },
      {
        name: "description",
        content: "RoadSyster is a web application for managing roads and traffic."
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootLayout,
  notFoundComponent: () => /* @__PURE__ */ jsxDEV("main", { className: "flex min-h-screen flex-col items-center justify-center gap-6 p-4", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-9xl font-bold text-foreground", children: "404" }, void 0, false, {
        fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { className: "mt-4 text-2xl font-semibold text-foreground", children: "Page Not Found" }, void 0, false, {
        fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-muted-foreground", children: "Sorry, we couldn't find the page you're looking for." }, void 0, false, {
        fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Button, { asChild: true, children: /* @__PURE__ */ jsxDEV(Link, { to: "/", children: "Go back home" }, void 0, false, {
      fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, void 0)
});
const queryClient = new QueryClient();
function MainLayout({ children }) {
  return /* @__PURE__ */ jsxDEV(QueryClientProvider, { client: queryClient, children: [
    children,
    " ",
    /* @__PURE__ */ jsxDEV(Toaster, { position: "top-center", richColors: true }, void 0, false, {
      fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
      lineNumber: 58,
      columnNumber: 18
    }, this)
  ] }, void 0, true, {
    fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
function RootLayout({ children }) {
  return /* @__PURE__ */ jsxDEV("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxDEV("head", { children: /* @__PURE__ */ jsxDEV(HeadContent, {}, void 0, false, {
      fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("body", { children: [
      /* @__PURE__ */ jsxDEV(MainLayout, { children }, void 0, false, {
        fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Analytics, {}, void 0, false, {
        fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(SpeedInsights, {}, void 0, false, {
        fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        TanStackDevtools,
        {
          config: {
            position: "bottom-right"
          },
          plugins: [
            {
              name: "Tanstack Router",
              render: /* @__PURE__ */ jsxDEV(TanStackRouterDevtoolsPanel, {}, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
                lineNumber: 80,
                columnNumber: 23
              }, this)
            }
          ]
        },
        void 0,
        false,
        {
          fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
          lineNumber: 73,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(Scripts, {}, void 0, false, {
        fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/kellz/roadsyster/apps/web/src/routes/__root.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}
const Route$9 = createFileRoute("/zaio")({
  loader: () => {
    throw redirect({
      href: "https://applications.zaio.io/?referral=AWWRF4",
      code: 308
    });
  }
});
const Route$8 = createFileRoute("/x")({
  loader: () => {
    throw redirect({
      href: "https://x.com/GoKells_OG",
      code: 308
    });
  }
});
const Route$7 = createFileRoute("/whatsapp")({
  head: () => ({
    meta: [
      { title: "Share RoadSyster" },
      {
        name: "description",
        content: "Share RoadSyster with your friends and colleagues"
      }
    ]
  }),
  loader: () => {
    throw redirect({
      href: `https://wa.me/?text=Hey!%0A%0ACheck%20out%20RoadSyster%20-%20a%20free%2C%20open%20source%20CRM%20built%20just%20for%20freelancers.%20Manage%20clients%2C%20projects%2C%20invoices%2C%20and%20time%20tracking%20all%20in%20one%20place.%0A%0AGitHub%3A%20https%3A%2F%2Fwww.roadsyster.co.za%2Fgithub%0AJoin%20the%20waitlist%3A%20https%3A%2F%2Fwww.roadsyster.co.za%2F%0A%0AThought%20you%20might%20find%20this%20useful!`,
      code: 308
    });
  }
});
const $$splitComponentImporter$4 = () => import('./terms-CUXXytZo.mjs');
const Route$6 = createFileRoute("/terms")({
  head: () => ({
    meta: [{
      title: "Terms of Service"
    }, {
      name: "description",
      content: "Roadsyster terms of service"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import('./privacy-C_mjvdsX.mjs');
const Route$5 = createFileRoute("/privacy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy"
    }, {
      name: "description",
      content: "Roadsyster Privacy Policy"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const Route$4 = createFileRoute("/paypal")({
  head: () => ({
    meta: [
      { title: "Donate" },
      { name: "description", content: "Donate to RoadSyster with PayPal" }
    ]
  }),
  loader: () => {
    throw redirect({
      href: "https://www.paypal.com/donate/?hosted_button_id=58MNE48RYW3AQ",
      code: 308
    });
  }
});
const Route$3 = createFileRoute("/github")({
  head: () => ({
    meta: [
      { title: "GitHub" },
      { name: "description", content: "GitHub repository for roadsyster" }
    ]
  }),
  loader: () => {
    throw redirect({
      href: "https://github.com/MahLogic/roadsyster",
      code: 308
    });
  }
});
const $$splitComponentImporter$2 = () => import('./contributors-DXMNaIEJ.mjs');
const Route$2 = createFileRoute("/contributors")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import('./about-DCMC9-oJ.mjs');
const Route$1 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => ({
    meta: [{
      title: "About RoadSyster"
    }, {
      name: "description",
      content: "Who we are and what we do."
    }]
  })
});
const $$splitComponentImporter = () => import('./index-DG3v8lBj.mjs');
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ZaioRoute = Route$9.update({
  id: "/zaio",
  path: "/zaio",
  getParentRoute: () => Route$a
});
const XRoute = Route$8.update({
  id: "/x",
  path: "/x",
  getParentRoute: () => Route$a
});
const WhatsappRoute = Route$7.update({
  id: "/whatsapp",
  path: "/whatsapp",
  getParentRoute: () => Route$a
});
const TermsRoute = Route$6.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$a
});
const PrivacyRoute = Route$5.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$a
});
const PaypalRoute = Route$4.update({
  id: "/paypal",
  path: "/paypal",
  getParentRoute: () => Route$a
});
const GithubRoute = Route$3.update({
  id: "/github",
  path: "/github",
  getParentRoute: () => Route$a
});
const ContributorsRoute = Route$2.update({
  id: "/contributors",
  path: "/contributors",
  getParentRoute: () => Route$a
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$a
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContributorsRoute,
  GithubRoute,
  PaypalRoute,
  PrivacyRoute,
  TermsRoute,
  WhatsappRoute,
  XRoute,
  ZaioRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));

const routerCVQuNQwA = /*#__PURE__*/Object.freeze({
    __proto__: null,
    B: Button,
    a: cn,
    c: createSectionId,
    r: router
});

export { Button as B, CheckCircle as C, Loader as L, __rest as _, cn as a, createSectionId as c, routerCVQuNQwA as r };
//# sourceMappingURL=router-CVQuNQwA.mjs.map
