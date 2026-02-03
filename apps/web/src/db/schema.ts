import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const waitlist = pgTable("waitlist", {
  id: serial().primaryKey(),
  email: text().notNull().unique(),
  contact: text().unique(),
  city: text().notNull().default("unknown"),
  country: text().notNull().default("XX"),
  createdAt: timestamp("created_at").defaultNow(),
});
