/*
  Warnings:

  - You are about to drop the `user_profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_profile" DROP CONSTRAINT "user_profile_profile_id_fkey";

-- DropForeignKey
ALTER TABLE "user_profile" DROP CONSTRAINT "user_profile_unity_id_fkey";

-- DropForeignKey
ALTER TABLE "user_profile" DROP CONSTRAINT "user_profile_user_id_fkey";

-- DropTable
DROP TABLE "user_profile";

-- CreateTable
CREATE TABLE "user_profiles" (
    "user_profile_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "profile_id" INTEGER NOT NULL,
    "unity_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_profiles_pkey" PRIMARY KEY ("user_profile_id")
);

-- CreateTable
CREATE TABLE "inscriptions" (
    "inscription_id" SERIAL NOT NULL,
    "unity_id" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL,
    "entrance_exam_id" INTEGER NOT NULL,
    "person_id" INTEGER NOT NULL,
    "process_type_id" INTEGER NOT NULL,
    "inscription_status_id" INTEGER NOT NULL,
    "enem_id" INTEGER,
    "overall_ranking_result" INTEGER,
    "course_ranking_result" INTEGER,

    CONSTRAINT "inscriptions_pkey" PRIMARY KEY ("inscription_id")
);

-- AddForeignKey
ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_unity_id_fkey" FOREIGN KEY ("unity_id") REFERENCES "units"("unity_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscriptions" ADD CONSTRAINT "inscriptions_unity_id_fkey" FOREIGN KEY ("unity_id") REFERENCES "units"("unity_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscriptions" ADD CONSTRAINT "inscriptions_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscriptions" ADD CONSTRAINT "inscriptions_entrance_exam_id_fkey" FOREIGN KEY ("entrance_exam_id") REFERENCES "entrance_exams"("entrance_exam_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscriptions" ADD CONSTRAINT "inscriptions_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people"("person_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscriptions" ADD CONSTRAINT "inscriptions_process_type_id_fkey" FOREIGN KEY ("process_type_id") REFERENCES "process_types"("process_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscriptions" ADD CONSTRAINT "inscriptions_inscription_status_id_fkey" FOREIGN KEY ("inscription_status_id") REFERENCES "inscriptions_status"("inscription_status_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscriptions" ADD CONSTRAINT "inscriptions_enem_id_fkey" FOREIGN KEY ("enem_id") REFERENCES "enem"("enem_id") ON DELETE SET NULL ON UPDATE CASCADE;
