import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(info)/zaio")({
  loader: () => {
    throw redirect({
      href: "https://applications.zaio.io/?referral=AWWRF4",
      code: 308,
    });
  },
});
