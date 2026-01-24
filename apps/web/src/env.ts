import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "PUBLIC_",
  client: {
    PUBLIC_SERVER_URL: z.url().default("http://localhost:4000/"),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
