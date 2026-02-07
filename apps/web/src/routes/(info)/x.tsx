import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(info)/x")({
  loader: () => {
    throw redirect({
      href: "https://x.com/mahlogic137",
      code: 308,
    });
  },
});
