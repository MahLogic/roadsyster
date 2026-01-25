import { createAuthClient } from "better-auth/react";
import { env } from "@/env";

const authClient = createAuthClient({
  baseURL: env.PUBLIC_SERVER_URL,
});

export const { signIn, signOut, getSession, useSession } = authClient;
