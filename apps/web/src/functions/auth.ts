import { signIn } from "@/lib/auth";

export function GithubSignIn() {
  return signIn.social({
    provider: "github",
  });
}
