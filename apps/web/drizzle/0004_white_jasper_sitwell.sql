ALTER TABLE "waitlist" ADD COLUMN "contact" text;--> statement-breakpoint
ALTER TABLE "waitlist" ADD CONSTRAINT "waitlist_contact_unique" UNIQUE("contact");