import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import z from "zod";
import { db } from "@/db";
import { waitlist } from "@/db/schema";

export const joinWaitlist = createServerFn({ method: "POST" })
  .inputValidator(z.object({ email: z.email() }))
  .handler(async ({ data: { email } }) => {
    try {
      const exists = await db
        .select({ id: waitlist.id })
        .from(waitlist)
        .where(eq(waitlist.email, email))
        .limit(1);

      if (exists.length > 0) {
        return {
          success: true,
          message: "Email already exists in waitlist",
        };
      }

      const user = await db.insert(waitlist).values({ email }).returning();
      if (user.length === 0) {
        return {
          success: false,
          message: "Failed to join waitlist, please try again later.",
        };
      }
      return { success: true, message: "Successfully joined waitlist" };
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        return { success: false, message: error.message };
      }
      return { success: false, message: undefined };
    }
  });

export const numberOfWaitlist = createServerFn({ method: "GET" }).handler(
  async () => {
    try {
      const users = await db.select().from(waitlist);
      return { count: users.length };
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        return { error: error.message };
      }
      return { error: "Unknown error" };
    }
  },
);
