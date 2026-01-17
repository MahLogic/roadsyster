import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/donate/paypal')({
  loader: () => {
    throw redirect({
      href: 'https://www.paypal.com/donate/?hosted_button_id=58MNE48RYW3AQ',
      code: 308,
    })
  },
  head: () => ({
    meta: [
      {
        title: 'Donate to RoadSyster',
      },
    ],
  }),
})
