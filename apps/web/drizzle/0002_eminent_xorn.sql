ALTER TABLE "waitlist" ADD COLUMN "city" text DEFAULT 'unknown' NOT NULL;--> statement-breakpoint
ALTER TABLE "waitlist" ADD COLUMN "country" text DEFAULT 'unknown' NOT NULL;