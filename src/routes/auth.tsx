import { createFileRoute } from '@tanstack/react-router'
import { AuthForm } from '@/components/forms/auth'

export const Route = createFileRoute('/auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <AuthForm />
      </div>
    </div>
  )
}
