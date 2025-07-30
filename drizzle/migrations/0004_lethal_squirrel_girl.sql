ALTER TABLE "user_vendors" RENAME TO "users_vendors";--> statement-breakpoint
ALTER TABLE "users_vendors" DROP CONSTRAINT "user_vendors_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "users_vendors" DROP CONSTRAINT "user_vendors_vendor_id_vendors_id_fk";
--> statement-breakpoint
ALTER TABLE "users_vendors" DROP CONSTRAINT "user_vendors_user_id_vendor_id_pk";--> statement-breakpoint
ALTER TABLE "users_vendors" ADD CONSTRAINT "users_vendors_user_id_vendor_id_pk" PRIMARY KEY("user_id","vendor_id");--> statement-breakpoint
ALTER TABLE "users_vendors" ADD CONSTRAINT "users_vendors_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users_vendors" ADD CONSTRAINT "users_vendors_vendor_id_vendors_id_fk" FOREIGN KEY ("vendor_id") REFERENCES "public"."vendors"("id") ON DELETE no action ON UPDATE no action;