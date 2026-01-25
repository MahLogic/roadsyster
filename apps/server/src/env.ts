import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.url(),
    BETTER_AUTH_SECRET: z.string().min(1),
    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),
    PORT: z.number().default(4000),
    FRONTEND_URL: z.url().default("http://localhost:5173/"),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
