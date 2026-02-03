import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import z from "zod";
import { db } from "@/db";
import { waitlist } from "@/db/schema";
import { geoMiddleware } from "./midddleware/geo";
import { isValidPhoneNumber } from "libphonenumber-js";

const phoneNumber = z
  .string()
  .refine(
    (phone) => {
      try {
        return isValidPhoneNumber(phone);
      } catch {
        return false;
      }
    },
    { message: "Invalid phone number" },
  )
  .optional();

export const joinWaitlist = createServerFn({ method: "POST" })
  .middleware([geoMiddleware])
  .inputValidator(z.object({ email: z.email(), contact: phoneNumber }))
  .handler(async ({ data: { email, contact }, context: { geo } }) => {
    const { country, city } = geo;
    try {
      const existingUser = await db.query.waitlist.findFirst({
        where: eq(waitlist.email, email),
      });

      if (existingUser) {
        if (existingUser.country === "XX" || existingUser.city === "unknown") {
          await db
            .update(waitlist)
            .set({ country, city })
            .where(eq(waitlist.id, existingUser.id));
        }
        if (existingUser.contact === null && contact) {
          await db
            .update(waitlist)
            .set({ contact })
            .where(eq(waitlist.id, existingUser.id));
        }
        return {
          success: true,
          message: "Email already exists in waitlist",
        };
      }

      const user = await db
        .insert(waitlist)
        .values({ email, country, city, contact })
        .returning();
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

export const numberOfWaitlist = createServerFn({ method: "GET" })
  .middleware([geoMiddleware])
  .handler(async ({ context: { geo } }) => {
    try {
      const users = await db.select().from(waitlist);
      const countryCount = users.filter(
        (user) => user.country === geo.country,
      ).length;
      const cityCount = users.filter((user) => user.city === geo.city).length;

      return { count: users.length, countryCount, cityCount };
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        return { error: error.message };
      }
      return { error: "Unknown error" };
    }
  });
