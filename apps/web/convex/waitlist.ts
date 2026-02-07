import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const add = mutation({
  args: {
    email: v.string(),
    firstName: v.string(),
    lastName: v.string(),
  },
  handler: async (ctx, { email, firstName, lastName }) => {
    try {
      const existingWaitlister = await ctx.db
        .query("waitlist")
        .withIndex("by_email", (q) => q.eq("email", email))
        .first();

      if (existingWaitlister) {
        return {
          status: "EXISTS",
          message: "You're already on the waitlist!",
          waitlistId: existingWaitlister._id,
        };
      }

      const waitlistId = await ctx.db.insert("waitlist", {
        email,
        firstName,
        lastName,
      });

      return {
        status: "CREATED",
        message: "You've been added to the waitlist!",
        waitlistId,
      };
    } catch (err) {
      console.error("Waitlist insert failed", err);
      throw new ConvexError("INTERNAL_ERROR");
    }
  },
});

export const count = query(async (ctx) => {
  const count = (await ctx.db.query("waitlist").collect()).length;
  return count;
});
