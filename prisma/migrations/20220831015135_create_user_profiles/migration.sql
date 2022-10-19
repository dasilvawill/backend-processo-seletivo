-- CreateTable
CREATE TABLE "user_profile" (
    "user_profile_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "profile_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_profile_pkey" PRIMARY KEY ("user_profile_id")
);

-- AddForeignKey
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;
