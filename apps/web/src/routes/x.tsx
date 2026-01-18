import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/x")({
  loader: () => {
    throw redirect({
      href: "https://x.com/GoKells_OG",
      code: 308,
    });
  },
});
