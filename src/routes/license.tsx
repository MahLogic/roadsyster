import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/license')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/license"!</div>
}
