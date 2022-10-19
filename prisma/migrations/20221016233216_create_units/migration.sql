-- AlterTable
ALTER TABLE "user_profile" ADD COLUMN     "unity_id" INTEGER;

-- CreateTable
CREATE TABLE "units" (
    "unity_id" SERIAL NOT NULL,
    "unit_name" TEXT NOT NULL,
    "totvs_coligada" INTEGER NOT NULL,
    "totvs_cod_escola" INTEGER,
    "totvs_cod_polo" INTEGER,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "units_pkey" PRIMARY KEY ("unity_id")
);

-- AddForeignKey
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_unity_id_fkey" FOREIGN KEY ("unity_id") REFERENCES "units"("unity_id") ON DELETE SET NULL ON UPDATE CASCADE;
