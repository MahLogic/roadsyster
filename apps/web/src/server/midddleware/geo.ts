import { createMiddleware } from "@tanstack/react-start";

export const geoMiddleware = createMiddleware().server(
  ({ next, context, request }) => {
    const headers = request.headers;
    const country = headers.get("x-vercel-ip-country") ?? "XX";
    const city = headers.get("x-vercel-ip-city") ?? "unknown";
    return next({ context: { geo: { country, city } } });
  },
);
