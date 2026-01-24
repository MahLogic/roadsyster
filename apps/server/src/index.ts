import "dotenv/config";
import { Hono } from "hono";
import { auth } from "@/lib/auth";
import { serve } from "@hono/node-server";
import { cors } from "hono/cors";
import { env } from "./env";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "http://localhost:5173", // replace with your origin
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  }),
);

app.on(["POST", "GET"], "/api/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

console.log("Server started on port", env.PORT);
serve({ port: env.PORT, ...app });
