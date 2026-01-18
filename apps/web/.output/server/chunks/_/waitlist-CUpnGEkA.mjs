import { T as TSS_SERVER_FUNCTION, c as createServerFn } from '../virtual/entry.mjs';
import { eq } from 'drizzle-orm';
import z from 'zod';
import { drizzle } from 'drizzle-orm/node-postgres';
import { pgTable, timestamp, text, serial } from 'drizzle-orm/pg-core';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'node:async_hooks';
import 'react/jsx-runtime';
import '@tanstack/react-router/ssr/server';
import '@tanstack/react-router';

const createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const waitlist = pgTable("waitlist", {
  id: serial().primaryKey(),
  email: text().notNull().unique(),
  createdAt: timestamp("created_at").defaultNow()
});
const schema = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  waitlist
}, Symbol.toStringTag, { value: "Module" }));
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}
const db = drizzle(DATABASE_URL, { schema });
const joinWaitlist_createServerFn_handler = createServerRpc({
  id: "86ba612669c33df855f760b4b53881e752601c1532b7c646c01c2df284337a77",
  name: "joinWaitlist",
  filename: "src/server/waitlist.ts"
}, (opts, signal) => joinWaitlist.__executeServer(opts, signal));
const joinWaitlist = createServerFn({
  method: "POST"
}).inputValidator(z.object({
  email: z.email()
})).handler(joinWaitlist_createServerFn_handler, async ({
  data: {
    email
  }
}) => {
  try {
    const exists = await db.select({
      id: waitlist.id
    }).from(waitlist).where(eq(waitlist.email, email)).limit(1);
    if (exists.length > 0) {
      return {
        success: true,
        message: "Email already exists in waitlist"
      };
    }
    const user = await db.insert(waitlist).values({
      email
    }).returning();
    if (user.length === 0) {
      return {
        success: false,
        message: "Failed to join waitlist, please try again later."
      };
    }
    return {
      success: true,
      message: "Successfully joined waitlist"
    };
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message
      };
    }
    return {
      success: false,
      message: void 0
    };
  }
});
const numberOfWaitlist_createServerFn_handler = createServerRpc({
  id: "6c433882522867fbc697cd2cab36e3a390c63cd34c38f81dcd8a7e9d903147a9",
  name: "numberOfWaitlist",
  filename: "src/server/waitlist.ts"
}, (opts, signal) => numberOfWaitlist.__executeServer(opts, signal));
const numberOfWaitlist = createServerFn({
  method: "GET"
}).handler(numberOfWaitlist_createServerFn_handler, async () => {
  try {
    const users = await db.select().from(waitlist);
    return {
      count: users.length
    };
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return {
        error: error.message
      };
    }
    return {
      error: "Unknown error"
    };
  }
});

export { joinWaitlist_createServerFn_handler, numberOfWaitlist_createServerFn_handler };
//# sourceMappingURL=waitlist-CUpnGEkA.mjs.map
