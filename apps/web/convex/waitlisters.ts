import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createWaitlister = mutation({
  args: {
    email: v.string(),
    firstName: v.string(),
    lastName: v.string(),
    city: v.optional(v.string()),
    country: v.optional(v.string()),
  },
  handler: async (ctx, { email, firstName, lastName, city, country }) => {
    const existingWaitlister = ctx.db
      .query("waitlisters")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();
    if (existingWaitlister !== null) {
      throw new Error("Waitlister already exists");
    }
    await ctx.db.insert("waitlisters", {
      email,
      firstName,
      lastName,
      city,
      country,
    });
  },
});
