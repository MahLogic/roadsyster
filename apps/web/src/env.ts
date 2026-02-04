import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "PUBLIC_",
  client: {
    PUBLIC_POSTHOG_KEY: z.string().min(1),
    PUBLIC_POSTHOG_HOST: z.url(),
  },

  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
});
