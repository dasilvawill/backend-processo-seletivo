-- CreateTable
CREATE TABLE "inscriptions_status" (
    "inscription_status_id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "inscriptions_status_pkey" PRIMARY KEY ("inscription_status_id")
);
