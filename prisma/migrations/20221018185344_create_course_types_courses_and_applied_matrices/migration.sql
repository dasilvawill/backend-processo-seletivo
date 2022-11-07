/*
  Warnings:

  - Added the required column `totvs_filial` to the `units` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "units" ADD COLUMN     "totvs_filial" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "course_types" (
    "course_type_id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "course_types_pkey" PRIMARY KEY ("course_type_id")
);

-- CreateTable
CREATE TABLE "courses" (
    "course_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "totvs_code" TEXT NOT NULL,
    "modality" TEXT NOT NULL,
    "course_type_id" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("course_id")
);

-- CreateTable
CREATE TABLE "applied_matrices" (
    "applied_matrix_id" SERIAL NOT NULL,
    "course_id" INTEGER NOT NULL,
    "totvs_applied_matrix_code" INTEGER NOT NULL,
    "unity_id" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "applied_matrices_pkey" PRIMARY KEY ("applied_matrix_id")
);

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_course_type_id_fkey" FOREIGN KEY ("course_type_id") REFERENCES "course_types"("course_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applied_matrices" ADD CONSTRAINT "applied_matrices_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applied_matrices" ADD CONSTRAINT "applied_matrices_unity_id_fkey" FOREIGN KEY ("unity_id") REFERENCES "units"("unity_id") ON DELETE RESTRICT ON UPDATE CASCADE;
