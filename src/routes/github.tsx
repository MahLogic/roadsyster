import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/github')({
  loader: () => {
    throw redirect({
      href: 'https://github.com/MahLogic/roadsyster',
      code: 308,
    })
  },
})
