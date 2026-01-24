import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(info)/roadmap")({
  head: () => ({
    meta: [
      { title: "RoadSyster Roadmap" },
      {
        name: "description",
        content: "How far we're going with RoadSyster",
      },
    ],
  }),
  loader: () => {
    throw redirect({
      href: `https://roadsyster.featurebase.app/roadmap`,
      code: 308,
    });
  },
});
