-- AlterTable
ALTER TABLE "inscriptions" ADD COLUMN     "user_id_consulter" INTEGER;

-- AddForeignKey
ALTER TABLE "inscriptions" ADD CONSTRAINT "inscriptions_user_id_consulter_fkey" FOREIGN KEY ("user_id_consulter") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
