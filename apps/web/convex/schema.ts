import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  waitlist: defineTable({
    email: v.string(),
    firstName: v.string(),
    lastName: v.string(),
  }).index("by_email", ["email"]),
});
