-- CreateTable
CREATE TABLE "process_types" (
    "process_type_id" SERIAL NOT NULL,
    "process_type" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "process_types_pkey" PRIMARY KEY ("process_type_id")
);
