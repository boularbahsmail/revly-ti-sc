ALTER TABLE "user_vendors" RENAME COLUMN "custom_name" TO "display_name";--> statement-breakpoint
ALTER TABLE "user_vendors" ADD COLUMN "is_enabled" boolean DEFAULT false;