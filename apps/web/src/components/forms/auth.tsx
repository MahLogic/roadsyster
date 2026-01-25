import { Boxes } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSeparator,
} from "@/components/ui/field";
import { Link } from "@tanstack/react-router";
import { Github } from "feather-icons-react";
import { Google } from "../icons";
import FloatingInput from "../floating-label";
import { GithubSignIn } from "@/functions/auth";

export function AuthForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <Link
              to="/"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <Boxes className="size-6" />
              </div>
              <span className="sr-only">RoadSyster</span>
            </Link>
            <h1 className="text-xl font-bold">Welcome to RoadSyster</h1>
          </div>
          <Field>
            <FloatingInput label="Email" type="email" />
          </Field>
          <Field>
            <Button type="submit">Continue</Button>
          </Field>
          <FieldSeparator>Or</FieldSeparator>
          <Field className="grid gap-4 sm:grid-cols-2">
            <Button
              variant="outline"
              type="button"
              onClick={() => GithubSignIn()}
            >
              <Github />
              Continue with Github
            </Button>
            <Button variant="outline" type="button">
              <Google />
              Continue with Google
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our{" "}
        <Link to="/terms">Terms of Service</Link> and{" "}
        <Link to="/privacy">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  );
}
