import { AuthForm } from "@/components/forms/auth";
import { useSession } from "@/lib/auth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isPending, data, error } = useSession();
  if (isPending) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (data) {
    return <div>You are already signed in as {data.user.email}</div>;
  }
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <AuthForm />
      </div>
    </div>
  );
}
