CREATE TABLE "chains" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_vendors" (
	"user_id" text,
	"vendor_id" text,
	"custom_name" text,
	CONSTRAINT "user_vendors_user_id_vendor_id_pk" PRIMARY KEY("user_id","vendor_id")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"display_name" text,
	"is_active" integer DEFAULT 1,
	"created_at" text
);
--> statement-breakpoint
CREATE TABLE "vendors" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"chain_id" text,
	"latitude" text,
	"longitude" text,
	"created_at" text
);
