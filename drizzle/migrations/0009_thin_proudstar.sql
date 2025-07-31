ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()';--> statement-breakpoint
ALTER TABLE "vendors" ALTER COLUMN "created_at" SET DEFAULT 'now()';