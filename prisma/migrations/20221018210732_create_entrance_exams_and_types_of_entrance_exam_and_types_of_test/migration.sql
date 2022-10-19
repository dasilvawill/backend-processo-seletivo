-- CreateTable
CREATE TABLE "types_of_test" (
    "type_of_test_id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "types_of_test_pkey" PRIMARY KEY ("type_of_test_id")
);

-- CreateTable
CREATE TABLE "types_of_entrance_exam" (
    "type_of_entrance_exam_id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "types_of_entrance_exam_pkey" PRIMARY KEY ("type_of_entrance_exam_id")
);

-- CreateTable
CREATE TABLE "entrance_exams" (
    "entrance_exam_id" SERIAL NOT NULL,
    "entrance_exam" TEXT NOT NULL,
    "test_date" TIMESTAMP(3) NOT NULL,
    "inscriptions_start_date" TIMESTAMP(3) NOT NULL,
    "inscriptions_end_date" TIMESTAMP(3) NOT NULL,
    "allow_enem_grade" BOOLEAN NOT NULL,
    "type_of_test_id" INTEGER NOT NULL,
    "type_of_entrance_exam_id" INTEGER NOT NULL,
    "notice" TEXT NOT NULL,
    "academic_period_id" INTEGER NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "entrance_exams_pkey" PRIMARY KEY ("entrance_exam_id")
);

-- AddForeignKey
ALTER TABLE "entrance_exams" ADD CONSTRAINT "entrance_exams_type_of_test_id_fkey" FOREIGN KEY ("type_of_test_id") REFERENCES "types_of_test"("type_of_test_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entrance_exams" ADD CONSTRAINT "entrance_exams_type_of_entrance_exam_id_fkey" FOREIGN KEY ("type_of_entrance_exam_id") REFERENCES "types_of_entrance_exam"("type_of_entrance_exam_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entrance_exams" ADD CONSTRAINT "entrance_exams_academic_period_id_fkey" FOREIGN KEY ("academic_period_id") REFERENCES "academic_periods"("academic_period_id") ON DELETE RESTRICT ON UPDATE CASCADE;
