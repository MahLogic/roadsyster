import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: "About RoadSyster" },
      {
        name: "description",
        content: "Who we are and what we do.",
      },
    ],
  }),
});

function RouteComponent() {
  return <div>Hello "/about"!</div>;
}
