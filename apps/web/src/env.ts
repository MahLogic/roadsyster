import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_POSTHOG_KEY: z.string().min(1),
    VITE_POSTHOG_HOST: z.url(),
    VITE_CONVEX_URL: z.string(),
    VITE_ENVIRONMENT: z
      .enum(["development", "production", "test"])
      .default("development"),
  },

  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
});
