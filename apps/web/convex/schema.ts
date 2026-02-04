import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  waitlisters: defineTable({
    email: v.string(),
    firstName: v.string(),
    lastName: v.string(),
    city: v.optional(v.string()),
    country: v.optional(v.string()),
  }).index("by_email", ["email"]),
});
