import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(info)/paypal")({
  head: () => ({
    meta: [
      { title: "Donate" },
      { name: "description", content: "Donate to RoadSyster with PayPal" },
    ],
  }),
  loader: () => {
    throw redirect({
      href: "https://www.paypal.com/donate/?hosted_button_id=58MNE48RYW3AQ",
      code: 308,
    });
  },
});
