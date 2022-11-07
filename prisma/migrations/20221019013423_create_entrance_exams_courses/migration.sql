-- CreateTable
CREATE TABLE "entrance_exams_courses" (
    "entrance_exam_course_id" SERIAL NOT NULL,
    "entrance_exam_id" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL,
    "applied_matrix_id" INTEGER NOT NULL,
    "vacancies" INTEGER,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "entrance_exams_courses_pkey" PRIMARY KEY ("entrance_exam_course_id")
);

-- AddForeignKey
ALTER TABLE "entrance_exams_courses" ADD CONSTRAINT "entrance_exams_courses_entrance_exam_id_fkey" FOREIGN KEY ("entrance_exam_id") REFERENCES "entrance_exams"("entrance_exam_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entrance_exams_courses" ADD CONSTRAINT "entrance_exams_courses_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entrance_exams_courses" ADD CONSTRAINT "entrance_exams_courses_applied_matrix_id_fkey" FOREIGN KEY ("applied_matrix_id") REFERENCES "applied_matrices"("applied_matrix_id") ON DELETE RESTRICT ON UPDATE CASCADE;
