import { jsxDEV, Fragment } from 'react/jsx-dev-runtime';
import { Link, useRouter, isRedirect } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import React__default, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { _ as __rest, a as cn, B as Button, L as Loader } from './router-CVQuNQwA.mjs';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from '../virtual/entry.mjs';
import z from 'zod';
import { motion, useSpring, useTransform } from 'motion/react';
import { Boxes } from 'lucide-react';
import { M as Mail } from './Mail.mjs';

var AlertCircle = function AlertCircle(_a) {
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
    className: "feather feather-alert-circle ".concat(className)
  }, otherProps), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12.01",
    y2: "16"
  })));
};

var Check = function Check(_a) {
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
    className: "feather feather-check ".concat(className)
  }, otherProps), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })));
};

var Github = function Github(_a) {
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
    className: "feather feather-github ".concat(className)
  }, otherProps), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("path", {
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  })));
};

var Star = function Star(_a) {
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
    className: "feather feather-star ".concat(className)
  }, otherProps), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  })));
};

var X = function X(_a) {
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
    className: "feather feather-x ".concat(className)
  }, otherProps), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })));
};

function useServerFn(serverFn) {
  const router = useRouter();
  return React.useCallback(
    async (...args) => {
      try {
        const res = await serverFn(...args);
        if (isRedirect(res)) {
          throw res;
        }
        return res;
      } catch (err) {
        if (isRedirect(err)) {
          err.options._fromLocation = router.state.location;
          return router.navigate(router.resolveRedirect(err).options);
        }
        throw err;
      }
    },
    [router, serverFn]
  );
}
function WhatsAppShareButton({ children }) {
  return /* @__PURE__ */ jsxDEV(
    Button,
    {
      className: "px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition",
      size: "sm",
      asChild: true,
      children: /* @__PURE__ */ jsxDEV(Link, { to: `/whatsapp`, children }, void 0, false, {
        fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/whatsapp-share-btn.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/whatsapp-share-btn.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
}
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(DialogPrimitive.Root, { "data-slot": "dialog", ...props }, void 0, false, {
    fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/dialog.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props }, void 0, false, {
    fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/dialog.tsx",
    lineNumber: 16,
    columnNumber: 10
  }, this);
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props }, void 0, false, {
    fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/dialog.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/dialog.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    this
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsxDEV(DialogOverlay, {}, void 0, false, {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/dialog.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxDEV(
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsxDEV(X, {}, void 0, false, {
                  fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/dialog.tsx",
                  lineNumber: 72,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: "Close" }, void 0, false, {
                  fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/dialog.tsx",
                  lineNumber: 73,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/dialog.tsx",
              lineNumber: 68,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/dialog.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/dialog.tsx",
      lineNumber: 83,
      columnNumber: 5
    },
    this
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/dialog.tsx",
      lineNumber: 109,
      columnNumber: 5
    },
    this
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/dialog.tsx",
      lineNumber: 122,
      columnNumber: 5
    },
    this
  );
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxDEV(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/input.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}
const createSsrRpc = (functionId, importer) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    const serverFn = await getServerFnById(functionId);
    return serverFn(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const joinWaitlist = createServerFn({
  method: "POST"
}).inputValidator(z.object({
  email: z.email()
})).handler(createSsrRpc("86ba612669c33df855f760b4b53881e752601c1532b7c646c01c2df284337a77"));
createServerFn({
  method: "GET"
}).handler(createSsrRpc("6c433882522867fbc697cd2cab36e3a390c63cd34c38f81dcd8a7e9d903147a9"));
function WaitlistDialog({ children }) {
  const [formState, setFormState] = useState("idle");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(void 0);
  const joinWaitlistServer = useServerFn(joinWaitlist);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("loading");
    const { success, message: msg } = await joinWaitlistServer({
      data: { email }
    });
    if (success) {
      setFormState("success");
      setEmail("");
    } else {
      setFormState("error");
    }
    setMessage(msg);
  };
  const resetForm = () => {
    setFormState("idle");
    setEmail("");
  };
  return /* @__PURE__ */ jsxDEV(Dialog, { onOpenChange: (open) => !open && setTimeout(resetForm, 300), children: [
    /* @__PURE__ */ jsxDEV(DialogTrigger, { asChild: true, children }, void 0, false, {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(DialogContent, { children: [
      /* @__PURE__ */ jsxDEV("div", { className: "mb-2 flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "flex size-11 shrink-0 items-center justify-center rounded-full border border-border",
            "aria-hidden": "true",
            children: formState === "success" ? /* @__PURE__ */ jsxDEV(Check, { className: "text-green-600 dark:text-green-500", size: 20 }, void 0, false, {
              fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
              lineNumber: 62,
              columnNumber: 15
            }, this) : formState === "error" ? /* @__PURE__ */ jsxDEV(
              AlertCircle,
              {
                className: "text-orange-600 dark:text-orange-500",
                size: 20
              },
              void 0,
              false,
              {
                fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
                lineNumber: 64,
                columnNumber: 15
              },
              this
            ) : /* @__PURE__ */ jsxDEV(
              "svg",
              {
                className: "stroke-foreground",
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                  /* @__PURE__ */ jsxDEV("path", { d: "M6 18L18 6" }, void 0, false, {
                    fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
                    lineNumber: 81,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("path", { d: "M8 6h10v10" }, void 0, false, {
                    fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
                    lineNumber: 82,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
                lineNumber: 69,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
            lineNumber: 57,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(DialogHeader, { children: [
          /* @__PURE__ */ jsxDEV(DialogTitle, { className: "sm:text-center", children: formState === "success" ? message ?? "You're on the list!" : formState === "error" ? message ?? "Something went wrong" : "Get early access" }, void 0, false, {
            fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
            lineNumber: 87,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(DialogDescription, { className: "sm:text-center", children: formState === "success" ? "We'll reach out with updates." : formState === "error" ? "Please try again in a moment." : "Built for freelancers and solo consultants." }, void 0, false, {
            fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
            lineNumber: 94,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      formState === "idle" || formState === "loading" ? /* @__PURE__ */ jsxDEV("form", { className: "space-y-5", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV(
            Input,
            {
              id: "dialog-subscribe",
              className: "peer ps-9",
              placeholder: "you@example.com",
              type: "email",
              "aria-label": "Email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              disabled: formState === "loading",
              required: true
            },
            void 0,
            false,
            {
              fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
              lineNumber: 108,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50", children: /* @__PURE__ */ jsxDEV(Mail, { size: 16, strokeWidth: 2, "aria-hidden": "true" }, void 0, false, {
            fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
            lineNumber: 120,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
            lineNumber: 119,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
          lineNumber: 107,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            type: "submit",
            className: "w-full",
            disabled: formState === "loading",
            children: formState === "loading" ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV(Loader, { className: "mr-2 size-4 animate-spin" }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
                lineNumber: 131,
                columnNumber: 19
              }, this),
              "Joining waitlist..."
            ] }, void 0, true, {
              fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
              lineNumber: 130,
              columnNumber: 17
            }, this) : "Join waitlist"
          },
          void 0,
          false,
          {
            fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
            lineNumber: 124,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this) : formState === "error" ? /* @__PURE__ */ jsxDEV(Button, { onClick: resetForm, className: "w-full", children: "Try again" }, void 0, false, {
        fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
        lineNumber: 140,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV(WhatsAppShareButton, { children: "Share on WhatsApp" }, void 0, false, {
        fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, this),
      formState === "idle" && /* @__PURE__ */ jsxDEV("p", { className: "text-center text-xs text-muted-foreground", children: [
        "No spam. Built by",
        " ",
        /* @__PURE__ */ jsxDEV("span", { className: "font-medium text-foreground", children: "MahLogic Solutions" }, void 0, false, {
          fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
          lineNumber: 150,
          columnNumber: 13
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
        lineNumber: 148,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/kellz/roadsyster/apps/web/src/components/waitlist/dialog.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
function AnimatedNumber({
  value,
  className,
  springOptions,
  as = "span"
}) {
  const MotionComponent = motion.create(as);
  const spring = useSpring(value, springOptions);
  const display = useTransform(
    spring,
    (current) => Math.round(current).toLocaleString()
  );
  useEffect(() => {
    spring.set(value);
  }, [spring, value]);
  return /* @__PURE__ */ jsxDEV(MotionComponent, { className: cn("tabular-nums", className), children: display }, void 0, false, {
    fileName: "/home/kellz/roadsyster/apps/web/src/components/animated-number.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
const REPOSITORY = "MahLogic/roadsyster";
function Navigation() {
  const [stars, setStars] = useState(0);
  const { data: githubData } = useQuery({
    queryKey: ["githubStars"],
    queryFn: async () => {
      const response = await fetch(
        `https://api.github.com/repos/${REPOSITORY}`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json"
          }
        }
      );
      if (!response.ok) {
        toast.error("Failed to fetch GitHub stars");
        throw new Error("Failed to fetch GitHub stars");
      }
      return response.json();
    }
  });
  useEffect(() => {
    if (githubData) {
      setStars(githubData.stargazers_count || 0);
    }
  }, [githubData]);
  return /* @__PURE__ */ jsxDEV("header", { className: "border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/6 sticky top-0 z-50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl", children: [
    /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxDEV(Boxes, { className: "h-6 w-6" }, void 0, false, {
        fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "text-xl font-semibold", children: "RoadSyster" }, void 0, false, {
        fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("nav", { className: "hidden md:flex items-center gap-6", children: [
      /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: "#features",
          className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
          children: "Features"
        },
        void 0,
        false,
        {
          fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
          lineNumber: 53,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: "#open-source",
          className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
          children: "Open Source"
        },
        void 0,
        false,
        {
          fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
          lineNumber: 59,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: "#support",
          className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
          children: "Support"
        },
        void 0,
        false,
        {
          fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
          lineNumber: 65,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/github",
            target: "_blank",
            rel: "noopener noreferrer",
            className: cn(
              "group inline-flex h-8 items-center gap-2 rounded-lg bg-black px-2 text-sm text-white transition-colors hover:bg-black/90"
            ),
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center text-white", children: [
                /* @__PURE__ */ jsxDEV(Github, { className: "mr-1 size-4 fill-white" }, void 0, false, {
                  fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
                  lineNumber: 81,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "ml-1 lg:hidden", children: "Star" }, void 0, false, {
                  fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
                  lineNumber: 82,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "ml-1 hidden lg:inline", children: "GitHub" }, void 0, false, {
                  fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
                  lineNumber: 83,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
                lineNumber: 80,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1 text-sm", children: [
                /* @__PURE__ */ jsxDEV(Star, { className: "relative top-px size-4 fill-gray-400 duration-300 group-hover:fill-yellow-400 group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" }, void 0, false, {
                  fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
                  lineNumber: 86,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV(
                  AnimatedNumber,
                  {
                    value: stars,
                    className: "font-medium text-white"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
                    lineNumber: 87,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
                lineNumber: 85,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
            lineNumber: 72,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(WaitlistDialog, { children: /* @__PURE__ */ jsxDEV(Button, { size: "sm", children: "Join Waitlist" }, void 0, false, {
          fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
          lineNumber: 94,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/kellz/roadsyster/apps/web/src/components/navigation.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/card.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/card.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/card.tsx",
      lineNumber: 33,
      columnNumber: 5
    },
    this
  );
}

export { Card as C, Github as G, Navigation as N, REPOSITORY as R, Star as S, WaitlistDialog as W, CardHeader as a, CardTitle as b };
//# sourceMappingURL=card-7WenMfIc.mjs.map
