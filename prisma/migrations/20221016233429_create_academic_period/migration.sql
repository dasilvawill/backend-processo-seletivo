-- CreateTable
CREATE TABLE "academic_periods" (
    "academic_period_id" SERIAL NOT NULL,
    "totvs_id" INTEGER NOT NULL,
    "totvs_code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "academic_periods_pkey" PRIMARY KEY ("academic_period_id")
);
