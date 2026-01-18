import { jsxDEV } from 'react/jsx-dev-runtime';
import { Link } from '@tanstack/react-router';
import React__default, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area, BarChart, Bar } from 'recharts';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { _ as __rest, B as Button, a as cn } from './router-CVQuNQwA.mjs';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { R as REPOSITORY, N as Navigation, G as Github, S as Star, C as Card } from './card-7WenMfIc.mjs';
import { B as Box } from './Box.mjs';
import '@tanstack/react-router-devtools';
import '@tanstack/react-devtools';
import '@vercel/analytics/react';
import '@vercel/speed-insights/react';
import 'next-themes';
import 'sonner';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-dialog';
import '../virtual/entry.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'node:async_hooks';
import 'react/jsx-runtime';
import '@tanstack/react-router/ssr/server';
import 'zod';
import 'motion/react';
import 'lucide-react';
import './Mail.mjs';

var GitCommit = function GitCommit(_a) {
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
    className: "feather feather-git-commit ".concat(className)
  }, otherProps), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "1.05",
    y1: "12",
    x2: "7",
    y2: "12"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "17.01",
    y1: "12",
    x2: "22.96",
    y2: "12"
  })));
};

var GitPullRequest = function GitPullRequest(_a) {
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
    className: "feather feather-git-pull-request ".concat(className)
  }, otherProps), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("circle", {
    cx: "18",
    cy: "18",
    r: "3"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "3"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M13 6h3a2 2 0 0 1 2 2v7"
  }), /*#__PURE__*/React__default.createElement("line", {
    x1: "6",
    y1: "9",
    x2: "6",
    y2: "21"
  })));
};

var MessageCircle = function MessageCircle(_a) {
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
    className: "feather feather-message-circle ".concat(className)
  }, otherProps), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("path", {
    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
  })));
};

function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    TabsPrimitive.Root,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/tabs.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/tabs.tsx",
      lineNumber: 26,
      columnNumber: 5
    },
    this
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/tabs.tsx",
      lineNumber: 42,
      columnNumber: 5
    },
    this
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    TabsPrimitive.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/tabs.tsx",
      lineNumber: 58,
      columnNumber: 5
    },
    this
  );
}
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/avatar.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    AvatarPrimitive.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/avatar.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/avatar.tsx",
      lineNumber: 42,
      columnNumber: 5
    },
    this
  );
}
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/kellz/roadsyster/apps/web/src/components/ui/separator.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
}
const excludedUsernames = /* @__PURE__ */ new Set(["dependabot", "github-actions", "autofix-ci[bot]"]);
const ChartControls = ({
  showAll,
  setShowAll,
  total
}) => /* @__PURE__ */ jsxDEV("div", { className: "mb-4 flex items-center justify-between", children: [
  /* @__PURE__ */ jsxDEV("span", { className: "text-muted-foreground text-sm", children: [
    "Showing ",
    showAll ? "all" : "top 10",
    " contributors"
  ] }, void 0, true, {
    fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
    lineNumber: 47,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(Button, { variant: "outline", size: "sm", onClick: () => setShowAll(!showAll), className: "text-xs", children: [
    "Show ",
    showAll ? "less" : "all",
    " (",
    total,
    ")"
  ] }, void 0, true, {
    fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
    lineNumber: 50,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
  lineNumber: 46,
  columnNumber: 7
}, void 0);
function RouteComponent() {
  const [repoStats, setRepoStats] = useState({
    stars: 0,
    forks: 0,
    watchers: 0,
    openIssues: 0,
    openPRs: 0
  });
  const [timelineData, setTimelineData] = useState([]);
  const [activityData, setActivityData] = useState([]);
  const [showAllContributors, setShowAllContributors] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allContributors, setAllContributors] = useState([]);
  const {
    data: initialContributors
  } = useQuery({
    queryFn: () => fetch(`https://api.github.com/repos/${REPOSITORY}/contributors?per_page=100&page=1`).then((res) => res.json()),
    queryKey: ["contributors", REPOSITORY]
  });
  const {
    data: additionalContributors
  } = useQuery({
    queryFn: () => fetch(`https://api.github.com/repos/${REPOSITORY}/contributors?per_page=100&page=2`).then((res) => res.json()),
    queryKey: ["additional-contributors", REPOSITORY],
    enabled: initialContributors && initialContributors.length === 100
  });
  useEffect(() => {
    if (initialContributors) {
      if (additionalContributors) {
        setAllContributors([...initialContributors, ...additionalContributors]);
      } else {
        setAllContributors(initialContributors);
      }
    }
  }, [initialContributors, additionalContributors]);
  const {
    data: repoData,
    error: repoError
  } = useQuery({
    queryFn: () => fetch(`https://api.github.com/repos/${REPOSITORY}`).then((res) => res.json()),
    queryKey: ["repo-data", REPOSITORY]
  });
  const {
    data: commitsData,
    error: commitsError
  } = useQuery({
    queryFn: () => fetch(`https://api.github.com/repos/${REPOSITORY}/commits?per_page=100`).then((res) => res.json()),
    queryKey: ["commits-data", REPOSITORY]
  });
  const {
    data: prsData,
    error: prsError
  } = useQuery({
    queryFn: () => fetch(`https://api.github.com/repos/${REPOSITORY}/pulls?state=open`).then((res) => res.json()),
    queryKey: ["prs-data", REPOSITORY]
  });
  const filteredContributors = allContributors.filter((contributor) => !excludedUsernames.has(contributor.login)).sort((a, b) => b.contributions - a.contributions);
  useEffect(() => {
    if (repoError || commitsError || prsError) {
      setError(repoError?.message || commitsError?.message || prsError?.message || "An error occurred while fetching data");
      const generateFallbackData = () => {
        const last30Days2 = Array.from({
          length: 30
        }, (_, i) => {
          const date = /* @__PURE__ */ new Date();
          date.setDate(date.getDate() - (29 - i));
          return {
            date: date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric"
            }),
            stars: Math.floor(Math.random() * 100),
            forks: Math.floor(Math.random() * 50),
            watchers: Math.floor(Math.random() * 30),
            commits: Math.floor(Math.random() * 10)
          };
        });
        const last7Days2 = Array.from({
          length: 7
        }, (_, i) => {
          const date = /* @__PURE__ */ new Date();
          const today = date.getDay();
          const daysToSubtract = today + (6 - i);
          date.setDate(date.getDate() - daysToSubtract);
          const commits = Math.floor(Math.random() * 8) + 2;
          return {
            date: date.toLocaleDateString("en-US", {
              weekday: "short"
            }),
            commits,
            issues: Math.max(1, Math.floor(commits * 0.3)),
            pullRequests: Math.max(1, Math.floor(commits * 0.2))
          };
        });
        setTimelineData(last30Days2);
        setActivityData(last7Days2);
      };
      generateFallbackData();
      return;
    }
    if (!repoData || !commitsData || !prsData) {
      setIsLoading(true);
      return;
    }
    setIsLoading(false);
    setError(null);
    setRepoStats({
      stars: repoData.stargazers_count,
      forks: repoData.forks_count,
      watchers: repoData.subscribers_count,
      openIssues: repoData.open_issues_count - prsData.length,
      openPRs: prsData.length
    });
    const last30Days = Array.from({
      length: 30
    }, (_, i) => {
      const date = /* @__PURE__ */ new Date();
      date.setDate(date.getDate() - (29 - i));
      const dateStr = date.toISOString().split("T")[0];
      const dayCommits = commitsData.filter((commit) => commit.commit.author.date.startsWith(dateStr || "")).length;
      const dayIndex = i + 1;
      const growthFactor = dayIndex / 30;
      return {
        date: date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric"
        }),
        stars: Math.floor(repoData.stargazers_count * growthFactor),
        forks: Math.floor(repoData.forks_count * growthFactor),
        watchers: Math.floor(repoData.subscribers_count * growthFactor),
        commits: dayCommits || Math.floor(Math.random() * 5)
      };
    });
    setTimelineData(last30Days);
    const last7Days = Array.from({
      length: 7
    }, (_, i) => {
      const date = /* @__PURE__ */ new Date();
      const today = date.getDay();
      const daysToSubtract = today + (6 - i);
      date.setDate(date.getDate() - daysToSubtract);
      const dateStr = date.toISOString().split("T")[0];
      const dayCommits = commitsData.filter((commit) => commit.commit.author.date.startsWith(dateStr || "")).length;
      const commits = dayCommits || Math.floor(Math.random() * 5) + 1;
      return {
        date: date.toLocaleDateString("en-US", {
          weekday: "short"
        }),
        commits,
        issues: Math.max(1, Math.floor(commits * 0.3)),
        pullRequests: Math.max(1, Math.floor(commits * 0.2))
      };
    });
    setActivityData(last7Days);
  }, [repoData, commitsData, prsData, repoError, commitsError, prsError]);
  if (error) {
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxDEV(Navigation, {}, void 0, false, {
        fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
        lineNumber: 224,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex min-h-100 items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium", children: "Something went wrong" }, void 0, false, {
          fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
          lineNumber: 227,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground", children: error }, void 0, false, {
          fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
          lineNumber: 228,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Button, { variant: "outline", size: "sm", onClick: () => window.location.reload(), className: "mt-4", children: "Try again" }, void 0, false, {
          fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
          lineNumber: 229,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
        lineNumber: 226,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
        lineNumber: 225,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
      lineNumber: 223,
      columnNumber: 12
    }, this);
  }
  if (isLoading) {
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxDEV(Navigation, {}, void 0, false, {
        fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
        lineNumber: 238,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex min-h-screen w-full items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "mx-auto h-8 w-8 animate-spin rounded-full border-2 border-foreground border-t-transparent" }, void 0, false, {
          fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
          lineNumber: 241,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground", children: "Loading data..." }, void 0, false, {
          fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
          lineNumber: 242,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
        lineNumber: 240,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
        lineNumber: 239,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
      lineNumber: 237,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxDEV(Navigation, {}, void 0, false, {
      fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
      lineNumber: 250,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto max-w-6xl px-4 py-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "mb-8 overflow-hidden rounded-xl border p-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(Box, { className: "h-8 w-8" }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 259,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-2xl font-bold", children: "RoadSyster" }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 260,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 258,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 257,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 256,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: "Open source business management for freelancers" }, void 0, false, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 264,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 255,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxDEV(Button, { asChild: true, variant: "outline", size: "sm", className: "gap-2 bg-transparent", children: /* @__PURE__ */ jsxDEV("a", { href: `https://github.com/${REPOSITORY}`, target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ jsxDEV(Github, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 271,
              columnNumber: 19
            }, this),
            "View on GitHub"
          ] }, void 0, true, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 270,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 269,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 268,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
          lineNumber: 254,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Separator, { className: "my-6" }, void 0, false, {
          fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
          lineNumber: 278,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center divide-x divide-border", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 px-3 first:pl-0 last:pr-0 sm:px-4", children: [
            /* @__PURE__ */ jsxDEV(Star, { className: "h-4 w-4 text-muted-foreground" }, void 0, false, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 282,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-baseline gap-1", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-base font-bold sm:text-lg", children: repoStats.stars }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 284,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "hidden text-xs text-muted-foreground sm:inline", children: "\xA0stars" }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 287,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 283,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 281,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 px-3 first:pl-0 last:pr-0 sm:px-4", children: [
            /* @__PURE__ */ jsxDEV(GitCommit, { className: "h-4 w-4 text-muted-foreground" }, void 0, false, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 294,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-baseline gap-1", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-base font-bold sm:text-lg", children: repoStats.forks }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 296,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "hidden text-xs text-muted-foreground sm:inline", children: "\xA0forks" }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 299,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 295,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 293,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "hidden items-center gap-3 px-3 first:pl-0 last:pr-0 sm:flex sm:px-4", children: [
            /* @__PURE__ */ jsxDEV(Github, { className: "h-4 w-4 text-muted-foreground" }, void 0, false, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 306,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-baseline gap-1", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-base font-bold sm:text-lg", children: repoStats.watchers }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 308,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-muted-foreground", children: "\xA0watchers" }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 311,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 307,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 305,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 px-3 first:pl-0 last:pr-0 sm:px-4", children: [
            /* @__PURE__ */ jsxDEV(MessageCircle, { className: "h-4 w-4 text-muted-foreground" }, void 0, false, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 318,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-baseline gap-1", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-base font-bold sm:text-lg", children: repoStats.openIssues }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 320,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "hidden text-xs text-muted-foreground sm:inline", children: "\xA0issues" }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 323,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 319,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 317,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 px-3 first:pl-0 last:pr-0 sm:px-4", children: [
            /* @__PURE__ */ jsxDEV(GitPullRequest, { className: "h-4 w-4 text-muted-foreground" }, void 0, false, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 330,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-baseline gap-1", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-base font-bold sm:text-lg", children: repoStats.openPRs }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 332,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "hidden text-xs text-muted-foreground sm:inline", children: "\xA0PRs" }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 335,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 331,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 329,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
          lineNumber: 280,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-6 grid gap-4 lg:grid-cols-3", children: [
          /* @__PURE__ */ jsxDEV(Card, { className: "col-span-full border-border bg-card p-4 lg:col-span-2", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "mb-4 text-sm font-medium text-muted-foreground", children: "Repository Growth" }, void 0, false, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 344,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxDEV(AreaChart, { data: timelineData, className: "-mx-5 mt-2", children: [
              /* @__PURE__ */ jsxDEV("defs", { children: [
                /* @__PURE__ */ jsxDEV("linearGradient", { id: "stars", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ jsxDEV("stop", { offset: "5%", stopColor: "hsl(var(--foreground))", stopOpacity: 0.3 }, void 0, false, {
                    fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                    lineNumber: 351,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("stop", { offset: "95%", stopColor: "hsl(var(--foreground))", stopOpacity: 0 }, void 0, false, {
                    fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                    lineNumber: 352,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                  lineNumber: 350,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("linearGradient", { id: "forks", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ jsxDEV("stop", { offset: "5%", stopColor: "hsl(var(--muted-foreground))", stopOpacity: 0.3 }, void 0, false, {
                    fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                    lineNumber: 355,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("stop", { offset: "95%", stopColor: "hsl(var(--muted-foreground))", stopOpacity: 0 }, void 0, false, {
                    fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                    lineNumber: 356,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                  lineNumber: 354,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 349,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(XAxis, { dataKey: "date", stroke: "currentColor", fontSize: 12, tickLine: false, axisLine: false, className: "text-muted-foreground" }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 359,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(YAxis, { stroke: "currentColor", fontSize: 12, tickLine: false, axisLine: false, tickFormatter: (value) => `${value}`, className: "text-muted-foreground" }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 360,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(Tooltip, { content: ({
                active,
                payload
              }) => {
                if (active && payload.length) {
                  return /* @__PURE__ */ jsxDEV("div", { className: "rounded-lg border bg-card p-3 shadow-lg", children: /* @__PURE__ */ jsxDEV("div", { className: "grid gap-2", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxDEV(Star, { className: "h-4 w-4" }, void 0, false, {
                        fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                        lineNumber: 369,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-muted-foreground", children: "Stars:" }, void 0, false, {
                        fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                        lineNumber: 370,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: payload[0]?.value }, void 0, false, {
                        fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                        lineNumber: 373,
                        columnNumber: 33
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                      lineNumber: 368,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxDEV(GitCommit, { className: "h-4 w-4" }, void 0, false, {
                        fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                        lineNumber: 378,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-muted-foreground", children: "Forks:" }, void 0, false, {
                        fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                        lineNumber: 379,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: payload[1]?.value }, void 0, false, {
                        fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                        lineNumber: 382,
                        columnNumber: 33
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                      lineNumber: 377,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                    lineNumber: 367,
                    columnNumber: 29
                  }, this) }, void 0, false, {
                    fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                    lineNumber: 366,
                    columnNumber: 28
                  }, this);
                }
                return null;
              } }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 361,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(Area, { type: "monotone", dataKey: "stars", stroke: "hsl(var(--foreground))", fill: "url(#stars)", strokeWidth: 2 }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 391,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(Area, { type: "monotone", dataKey: "forks", stroke: "hsl(var(--muted-foreground))", fill: "url(#forks)", strokeWidth: 2 }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 392,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 348,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 347,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 343,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Card, { className: "border-border bg-card p-4", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "mb-4 text-sm font-medium text-muted-foreground", children: "Weekly Activity" }, void 0, false, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 398,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxDEV(BarChart, { data: activityData, children: [
              /* @__PURE__ */ jsxDEV(XAxis, { dataKey: "date", stroke: "currentColor", fontSize: 12, tickLine: false, axisLine: false, className: "text-muted-foreground" }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 403,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(YAxis, { stroke: "currentColor", fontSize: 12, tickLine: false, axisLine: false, className: "text-muted-foreground" }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 404,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(Tooltip, { content: ({
                active,
                payload
              }) => {
                if (active && payload.length) {
                  return /* @__PURE__ */ jsxDEV("div", { className: "rounded-lg border bg-card p-3 shadow-lg", children: /* @__PURE__ */ jsxDEV("div", { className: "grid gap-2", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-muted-foreground", children: "Commits:" }, void 0, false, {
                      fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                      lineNumber: 413,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: payload[0]?.value }, void 0, false, {
                      fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                      lineNumber: 416,
                      columnNumber: 33
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                    lineNumber: 412,
                    columnNumber: 31
                  }, this) }, void 0, false, {
                    fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                    lineNumber: 411,
                    columnNumber: 29
                  }, this) }, void 0, false, {
                    fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                    lineNumber: 410,
                    columnNumber: 28
                  }, this);
                }
                return null;
              } }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 405,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(Bar, { dataKey: "commits", fill: "hsl(var(--foreground))", radius: [4, 4, 0, 0] }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 425,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 402,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 401,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 397,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
          lineNumber: 342,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
        lineNumber: 253,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Tabs, { defaultValue: "all", className: "w-full", children: [
        /* @__PURE__ */ jsxDEV(TabsList, { className: "grid w-full grid-cols-2 max-w-md", children: [
          /* @__PURE__ */ jsxDEV(TabsTrigger, { value: "all", children: "All Contributors" }, void 0, false, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 434,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(TabsTrigger, { value: "stats", children: "Contribution Stats" }, void 0, false, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 435,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
          lineNumber: 433,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(TabsContent, { value: "all", className: "mt-6", children: /* @__PURE__ */ jsxDEV(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold mb-2", children: "Contributors" }, void 0, false, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 441,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground", children: "Thank you to everyone who has contributed to RoadSyster" }, void 0, false, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 442,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 440,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(ChartControls, { showAll: showAllContributors, setShowAll: setShowAllContributors, total: filteredContributors.length }, void 0, false, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 447,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: (showAllContributors ? filteredContributors : filteredContributors.slice(0, 10)).map((contributor) => /* @__PURE__ */ jsxDEV("a", { href: contributor.html_url, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors", children: [
            /* @__PURE__ */ jsxDEV(Avatar, { className: "h-12 w-12", children: [
              /* @__PURE__ */ jsxDEV(AvatarImage, { src: contributor.avatar_url || "/placeholder.svg", alt: contributor.login }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 452,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(AvatarFallback, { children: contributor.login.slice(0, 2).toUpperCase() }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 453,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 451,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "font-medium truncate", children: contributor.login }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 458,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-muted-foreground", children: [
                contributor.contributions,
                " contributions"
              ] }, void 0, true, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 461,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 457,
              columnNumber: 21
            }, this)
          ] }, contributor.login, true, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 450,
            columnNumber: 118
          }, this)) }, void 0, false, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 449,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
          lineNumber: 439,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
          lineNumber: 438,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(TabsContent, { value: "stats", className: "mt-6", children: /* @__PURE__ */ jsxDEV(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold mb-6", children: "Contribution Statistics" }, void 0, false, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 472,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold mb-3", children: "Top 10 Contributors" }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 478,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ jsxDEV(BarChart, { data: filteredContributors.slice(0, 10), layout: "vertical", margin: {
                left: 100
              }, children: [
                /* @__PURE__ */ jsxDEV(XAxis, { type: "number" }, void 0, false, {
                  fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                  lineNumber: 485,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(YAxis, { dataKey: "login", type: "category", width: 100, stroke: "currentColor", fontSize: 12, tickLine: false, axisLine: false, className: "text-muted-foreground" }, void 0, false, {
                  fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                  lineNumber: 486,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(Tooltip, { content: ({
                  active,
                  payload
                }) => {
                  if (active && payload.length) {
                    return /* @__PURE__ */ jsxDEV("div", { className: "rounded-lg border bg-card p-3 shadow-lg", children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "font-medium", children: payload[0]?.payload?.login }, void 0, false, {
                        fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                        lineNumber: 493,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-muted-foreground", children: [
                        payload[0]?.value,
                        " contributions"
                      ] }, void 0, true, {
                        fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                        lineNumber: 496,
                        columnNumber: 33
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                      lineNumber: 492,
                      columnNumber: 32
                    }, this);
                  }
                  return null;
                } }, void 0, false, {
                  fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                  lineNumber: 487,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(Bar, { dataKey: "contributions", fill: "hsl(var(--primary))", radius: [0, 4, 4, 0] }, void 0, false, {
                  fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                  lineNumber: 503,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 482,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 481,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 477,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(Separator, {}, void 0, false, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 508,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "grid gap-4 sm:grid-cols-3", children: [
              /* @__PURE__ */ jsxDEV(Card, { className: "p-4 bg-muted/30", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-2xl font-bold", children: filteredContributors.length }, void 0, false, {
                  fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                  lineNumber: 512,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-muted-foreground", children: "Total Contributors" }, void 0, false, {
                  fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                  lineNumber: 515,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 511,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(Card, { className: "p-4 bg-muted/30", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-2xl font-bold", children: filteredContributors.reduce((sum, c) => sum + c.contributions, 0) }, void 0, false, {
                  fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                  lineNumber: 520,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-muted-foreground", children: "Total Contributions" }, void 0, false, {
                  fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                  lineNumber: 523,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 519,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(Card, { className: "p-4 bg-muted/30", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-2xl font-bold", children: filteredContributors.length > 0 ? Math.round(filteredContributors.reduce((sum, c) => sum + c.contributions, 0) / filteredContributors.length) : 0 }, void 0, false, {
                  fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                  lineNumber: 528,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-muted-foreground", children: "Avg Contributions" }, void 0, false, {
                  fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                  lineNumber: 531,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
                lineNumber: 527,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
              lineNumber: 510,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
            lineNumber: 476,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
          lineNumber: 471,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
          lineNumber: 470,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
        lineNumber: 432,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
      lineNumber: 252,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/kellz/roadsyster/apps/web/src/routes/contributors.tsx?tsr-split=component",
    lineNumber: 249,
    columnNumber: 10
  }, this);
}

export { RouteComponent as component };
//# sourceMappingURL=contributors-DXMNaIEJ.mjs.map
