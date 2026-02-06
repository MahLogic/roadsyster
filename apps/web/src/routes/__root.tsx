import { HeadContent, Scripts, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import appCss from "../styles.css?url";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { createRootRouteWithContext } from "@tanstack/react-router";
import * as React from "react";
import { env } from "@/env";
import { QueryClient } from "@tanstack/react-query";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "RoadSyster - Your Co-Pilot on the Freelance Road" },
      {
        name: "description",
        content:
          "Stop juggling spreadsheets and scattered tools. RoadSyster is an open-source CRM for freelancers to manage clients, projects, invoices & finances in one place.",
      },
      {
        property: "og:image",
        content: "https://roadsyster.co.za/preview-image.png",
      },
      {
        property: "og:url",
        content: "https://roadsyster.co.za",
      },
      {
        property: "og:type",
        content: "website",
      },

      {
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        property: "twitter:title",
        content: "RoadSyster - Your Co-Pilot on the Freelance Road",
      },
      {
        property: "twitter:description",
        content:
          "Stop juggling spreadsheets and scattered tools. RoadSyster is an open-source CRM for freelancers to manage clients, projects, invoices & finances in one place.",
      },
      {
        property: "twitter:image",
        content: "https://roadsyster.co.za/preview-image.png",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  notFoundComponent: () => (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-foreground">
          Page Not Found
        </h2>
        <p className="mt-2 text-muted-foreground">
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>
      <Button asChild>
        <Link to="/">Go back home</Link>
      </Button>
    </main>
  ),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <PostHogProvider
        apiKey={env.VITE_POSTHOG_KEY}
        options={{ api_host: env.VITE_POSTHOG_HOST, defaults: "2026-01-30" }}
      >
        <Outlet /> <Toaster position="top-center" richColors />
      </PostHogProvider>
    </RootDocument>
  );
}
function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
