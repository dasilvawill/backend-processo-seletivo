-- CreateTable
CREATE TABLE "enem" (
    "enem_id" SERIAL NOT NULL,
    "inscription" TEXT NOT NULL,
    "objective_note" DOUBLE PRECISION NOT NULL,
    "essay_note" DOUBLE PRECISION NOT NULL,
    "year" INTEGER NOT NULL,
    "person_id" INTEGER NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "enem_pkey" PRIMARY KEY ("enem_id")
);

-- AddForeignKey
ALTER TABLE "enem" ADD CONSTRAINT "enem_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people"("person_id") ON DELETE RESTRICT ON UPDATE CASCADE;
