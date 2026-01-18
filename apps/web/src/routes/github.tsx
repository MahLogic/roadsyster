import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/github")({
  head: () => ({
    meta: [
      { title: "GitHub" },
      { name: "description", content: "GitHub repository for roadsyster" },
    ],
  }),

  loader: () => {
    throw redirect({
      href: "https://github.com/MahLogic/roadsyster",
      code: 308,
    });
  },
});
