import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/whatsapp")({
  head: () => ({
    meta: [
      { title: "Share RoadSyster" },
      {
        name: "description",
        content: "Share RoadSyster with your friends and colleagues",
      },
    ],
  }),
  loader: () => {
    throw redirect({
      href: `https://wa.me/?text=Hey!%0A%0ACheck%20out%20RoadSyster%20-%20a%20free%2C%20open%20source%20CRM%20built%20just%20for%20freelancers.%20Manage%20clients%2C%20projects%2C%20invoices%2C%20and%20time%20tracking%20all%20in%20one%20place.%0A%0AGitHub%3A%20https%3A%2F%2Fwww.roadsyster.co.za%2Fgithub%0AJoin%20the%20waitlist%3A%20https%3A%2F%2Fwww.roadsyster.co.za%2F%0A%0AThought%20you%20might%20find%20this%20useful!`,
      code: 308,
    });
  },
});
